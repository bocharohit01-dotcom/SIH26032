import math
import random
import datetime

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

from database import (
    get_db,
    init_db,
    get_all_documents,
    get_user_by_phone,
    create_user,
    get_centres,
    get_centre,
    get_slots,
    get_slot,
    get_booking_by_token,
    get_bookings_by_farmer,
    get_bookings_by_centre,
    create_booking,
    create_notification,
    get_notifications,
    update_document,
)


app = Flask(
    __name__,
    static_folder="static",
    template_folder="templates"
)

CORS(app)

# Initialize Firebase
init_db()


# =========================================================
# UTILITY FUNCTIONS
# =========================================================

ACTIVE_QUEUE_STATUSES = [
    "BOOKED",
    "CHECKED_IN",
    "QUALITY_CHECK",
    "WEIGHED"
]


def haversine_distance(lat1, lon1, lat2, lon2):
    """Calculate distance between two coordinates in km."""

    R = 6371.0

    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)

    a = (
        math.sin(dlat / 2) ** 2
        + math.cos(math.radians(lat1))
        * math.cos(math.radians(lat2))
        * math.sin(dlon / 2) ** 2
    )

    c = 2 * math.atan2(
        math.sqrt(a),
        math.sqrt(1 - a)
    )

    return round(R * c, 1)


def get_active_bookings_for_centre(centre_id):
    """Get active queue bookings for a centre."""

    bookings = get_bookings_by_centre(centre_id)

    return [
        b for b in bookings
        if b.get("status") in ACTIVE_QUEUE_STATUSES
    ]


def next_numeric_id(collection_name):
    """Generate next numeric ID."""

    documents = get_all_documents(collection_name)

    ids = []

    for document in documents:
        try:
            ids.append(int(document.get("id", 0)))
        except (ValueError, TypeError):
            pass

    return max(ids, default=0) + 1


# =========================================================
# AUTH ROUTES
# =========================================================

@app.route("/api/auth/register", methods=["POST"])
def register():

    data = request.json or {}

    name = data.get("name")
    phone = data.get("phone")
    password = data.get("password")

    role = data.get(
        "role",
        "FARMER"
    ).upper()

    location_name = data.get(
        "location_name",
        "Village Center"
    )

    try:
        lat = float(
            data.get("lat", 17.9500)
        )

        lng = float(
            data.get("lng", 78.2500)
        )

    except (ValueError, TypeError):

        return jsonify({
            "error": "Invalid latitude or longitude."
        }), 400

    if not name or not phone or not password:

        return jsonify({
            "error": "Name, phone number, and password are required."
        }), 400

    try:

        existing_user = get_user_by_phone(phone)

        if existing_user:

            return jsonify({
                "error": "Phone number is already registered. Please login."
            }), 400

        user_data = {
            "name": name,
            "phone": str(phone),
            "password": password,
            "role": role,
            "location_name": location_name,
            "lat": lat,
            "lng": lng
        }

        user = create_user(user_data)

        # Return only fields expected by frontend
        safe_user = {
            "id": user["id"],
            "name": user["name"],
            "phone": user["phone"],
            "role": user["role"],
            "location_name": user["location_name"],
            "lat": user["lat"],
            "lng": user["lng"]
        }

        return jsonify({
            "message": "Registration successful!",
            "user": safe_user
        }), 201

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


@app.route("/api/auth/login", methods=["POST"])
def login():

    data = request.json or {}

    phone = data.get("phone")
    password = data.get("password")

    if not phone or not password:

        return jsonify({
            "error": "Phone and password are required."
        }), 400

    user = get_user_by_phone(phone)

    if not user:

        return jsonify({
            "error": "Invalid phone number or password."
        }), 401

    if str(user.get("password")) != str(password):

        return jsonify({
            "error": "Invalid phone number or password."
        }), 401

    safe_user = {
        "id": user.get("id"),
        "name": user.get("name"),
        "phone": user.get("phone"),
        "role": user.get("role"),
        "location_name": user.get("location_name"),
        "lat": user.get("lat"),
        "lng": user.get("lng")
    }

    return jsonify({
        "message": "Login successful!",
        "user": safe_user
    }), 200


# =========================================================
# CENTRE DISCOVERY
# =========================================================

@app.route("/api/centres", methods=["GET"])
def get_centres_route():

    centres = get_centres()

    return jsonify({
        "centres": centres
    })


@app.route("/api/centres/recommend", methods=["GET"])
def recommend_centres():

    try:

        farmer_lat = float(
            request.args.get("lat", 17.9500)
        )

        farmer_lng = float(
            request.args.get("lng", 78.2500)
        )

        max_distance_km = float(
            request.args.get("max_distance", 50.0)
        )

    except (ValueError, TypeError):

        return jsonify({
            "error": "Invalid location values."
        }), 400

    centres = get_centres()

    recommended = []

    for centre in centres:

        try:

            dist = haversine_distance(
                farmer_lat,
                farmer_lng,
                float(centre["lat"]),
                float(centre["lng"])
            )

        except (KeyError, TypeError, ValueError):

            continue

        if dist > max_distance_km:
            continue

        active_bookings = get_active_bookings_for_centre(
            centre["id"]
        )

        active_q_count = len(active_bookings)

        avg_processing = float(
            centre.get(
                "avg_processing_mins",
                10
            )
        )

        est_wait_mins = (
            active_q_count * avg_processing
        )

        max_capacity = float(
            centre.get(
                "max_capacity_quintals",
                1
            )
        )

        current_load = float(
            centre.get(
                "current_load_quintals",
                0
            )
        )

        capacity_pct = round(
            (current_load / max_capacity) * 100,
            1
        ) if max_capacity else 0

        score = (
            dist * 0.4
            + est_wait_mins * 0.4
            + capacity_pct * 0.2
        )

        centre_info = dict(centre)

        centre_info["distance_km"] = dist
        centre_info["active_queue_length"] = active_q_count
        centre_info["est_wait_mins"] = est_wait_mins
        centre_info["capacity_pct"] = capacity_pct
        centre_info["recommendation_score"] = round(
            score,
            2
        )

        if dist < 10 and est_wait_mins < 30:

            centre_info["tag"] = (
                "BEST MATCH (Nearest & Fast)"
            )

        elif est_wait_mins == 0:

            centre_info["tag"] = "ZERO QUEUE"

        elif capacity_pct < 50:

            centre_info["tag"] = "HIGH CAPACITY"

        else:

            centre_info["tag"] = "STANDARD"

        recommended.append(centre_info)

    recommended.sort(
        key=lambda x: x["recommendation_score"]
    )

    return jsonify({
        "recommended": recommended,
        "count": len(recommended)
    })


@app.route("/api/centres/compare", methods=["POST"])
def compare_centres():

    data = request.json or {}

    centre_ids = data.get(
        "ids",
        []
    )

    farmer_lat = float(
        data.get("lat", 17.9500)
    )

    farmer_lng = float(
        data.get("lng", 78.2500)
    )

    if not centre_ids:

        return jsonify({
            "error": "Please provide centre IDs to compare."
        }), 400

    result = []

    for centre_id in centre_ids:

        centre = get_centre(centre_id)

        if not centre:
            continue

        dist = haversine_distance(
            farmer_lat,
            farmer_lng,
            float(centre["lat"]),
            float(centre["lng"])
        )

        active_bookings = get_active_bookings_for_centre(
            centre["id"]
        )

        active_q = len(active_bookings)

        avg_processing = float(
            centre.get(
                "avg_processing_mins",
                10
            )
        )

        est_wait = active_q * avg_processing

        max_capacity = float(
            centre.get(
                "max_capacity_quintals",
                1
            )
        )

        current_load = float(
            centre.get(
                "current_load_quintals",
                0
            )
        )

        capacity_pct = round(
            (current_load / max_capacity) * 100,
            1
        ) if max_capacity else 0

        centre_info = dict(centre)

        centre_info["distance_km"] = dist
        centre_info["active_queue_length"] = active_q
        centre_info["est_wait_mins"] = est_wait
        centre_info["capacity_pct"] = capacity_pct

        result.append(centre_info)

    return jsonify({
        "comparison": result
    })


# =========================================================
# SLOT BOOKING
# =========================================================

@app.route("/api/slots", methods=["GET"])
def get_slots_route():

    centre_id = request.args.get(
        "centre_id"
    )

    date_val = request.args.get(
        "date",
        datetime.date.today().isoformat()
    )

    if not centre_id:

        return jsonify({
            "error": "centre_id is required"
        }), 400

    try:

        slots = get_slots(
            centre_id,
            date_val
        )

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500

    return jsonify({
        "slots": slots
    })


@app.route("/api/bookings", methods=["POST"])
def create_booking_route():

    data = request.json or {}

    farmer_id = data.get(
        "farmer_id"
    )

    centre_id = data.get(
        "centre_id"
    )

    slot_id = data.get(
        "slot_id"
    )

    crop_type = data.get(
        "crop_type",
        "Paddy (Grade A)"
    )

    try:

        estimated_qty = int(
            data.get(
                "estimated_qty",
                20
            )
        )

    except (ValueError, TypeError):

        return jsonify({
            "error": "Invalid estimated quantity."
        }), 400

    if not farmer_id or not centre_id or not slot_id:

        return jsonify({
            "error": "Farmer, centre, and slot are required."
        }), 400

    slot = get_slot(slot_id)

    if not slot:

        return jsonify({
            "error": "Selected slot not found."
        }), 404

    booked_farmers = int(
        slot.get(
            "booked_farmers",
            0
        )
    )

    max_farmers = int(
        slot.get(
            "max_farmers",
            15
        )
    )

    if booked_farmers >= max_farmers:

        return jsonify({
            "error": "Selected time slot is fully booked. Please choose another."
        }), 400

    active_bookings = get_active_bookings_for_centre(
        centre_id
    )

    queue_pos = len(active_bookings) + 1

    # Generate token
    while True:

        token_num = (
            f"TK-{datetime.date.today().strftime('%Y%m%d')}-"
            f"{random.randint(100, 999)}"
        )

        if not get_booking_by_token(token_num):
            break

    booking_id = next_numeric_id(
        "bookings"
    )

    booking_data = {
        "id": booking_id,
        "token_number": token_num,
        "farmer_id": int(farmer_id),
        "centre_id": int(centre_id),
        "slot_id": int(slot_id),
        "crop_type": crop_type,
        "estimated_qty": estimated_qty,
        "verified_qty": None,
        "quality_grade": None,
        "total_payout": None,
        "status": "BOOKED",
        "queue_position": queue_pos,
        "qr_code_data": token_num
    }

    booking = create_booking(
        booking_data
    )

    # Update slot
    slot["booked_farmers"] = (
        booked_farmers + 1
    )

    slot["booked_capacity_quintals"] = (
        int(
            slot.get(
                "booked_capacity_quintals",
                0
            )
        ) + estimated_qty
    )

    update_document(
        "slots",
        slot["id"],
        {
            "booked_farmers": slot["booked_farmers"],
            "booked_capacity_quintals":
                slot["booked_capacity_quintals"]
        }
    )

    # Update centre load
    centre = get_centre(
        centre_id
    )

    if centre:

        current_load = int(
            centre.get(
                "current_load_quintals",
                0
            )
        )

        update_document(
            "centres",
            centre["id"],
            {
                "current_load_quintals":
                    current_load + estimated_qty
            }
        )

    # Notification
    notification_id = next_numeric_id(
        "notifications"
    )

    create_notification({
        "id": notification_id,
        "farmer_id": int(farmer_id),
        "booking_id": booking_id,
        "title": "Token Issued",
        "message":
            f"Token {token_num} issued successfully! "
            f"Slot: {slot.get('time_window', 'Selected slot')}."
    })

    return jsonify({
        "message":
            "Slot booked & token generated successfully!",
        "booking": booking
    }), 201


# =========================================================
# MY BOOKINGS
# =========================================================

@app.route("/api/bookings/my", methods=["GET"])
def my_bookings():

    farmer_id = request.args.get(
        "farmer_id"
    )

    if not farmer_id:

        return jsonify({
            "error": "farmer_id required"
        }), 400

    bookings = get_bookings_by_farmer(
        farmer_id
    )

    result = []

    for booking in bookings:

        booking_info = dict(
            booking
        )

        centre = get_centre(
            booking.get(
                "centre_id"
            )
        )

        slot = get_slot(
            booking.get(
                "slot_id"
            )
        )

        if centre:

            booking_info["centre_name"] = centre.get(
                "name",
                centre.get(
                    "centerName",
                    ""
                )
            )

            booking_info["centre_address"] = centre.get(
                "address",
                centre.get(
                    "location",
                    ""
                )
            )

        if slot:

            booking_info["time_window"] = slot.get(
                "time_window",
                ""
            )

            booking_info["slot_date"] = slot.get(
                "date",
                ""
            )

        result.append(
            booking_info
        )

    return jsonify({
        "bookings": result
    })


# =========================================================
# CANCEL BOOKING
# =========================================================

@app.route("/api/bookings/cancel", methods=["POST"])
def cancel_booking():

    data = request.json or {}

    token_number = data.get(
        "token_number"
    )

    if not token_number:

        return jsonify({
            "error": "token_number is required"
        }), 400

    booking = get_booking_by_token(
        token_number
    )

    if not booking:

        return jsonify({
            "error": "Booking token not found"
        }), 404

    if booking.get("status") == "COMPLETED":

        return jsonify({
            "error":
                "Cannot cancel an already completed procurement token."
        }), 400

    if booking.get("status") == "CANCELLED":

        return jsonify({
            "error": "Booking is already cancelled."
        }), 400

    update_document(
        "bookings",
        booking["id"],
        {
            "status": "CANCELLED"
        }
    )

    # Release slot capacity
    slot = get_slot(
        booking["slot_id"]
    )

    if slot:

        booked_farmers = max(
            0,
            int(
                slot.get(
                    "booked_farmers",
                    0
                )
            ) - 1
        )

        booked_capacity = max(
            0,
            int(
                slot.get(
                    "booked_capacity_quintals",
                    0
                )
            ) - int(
                booking.get(
                    "estimated_qty",
                    0
                )
            )
        )

        update_document(
            "slots",
            slot["id"],
            {
                "booked_farmers":
                    booked_farmers,
                "booked_capacity_quintals":
                    booked_capacity
            }
        )

    # Release centre load
    centre = get_centre(
        booking["centre_id"]
    )

    if centre:

        current_load = max(
            0,
            int(
                centre.get(
                    "current_load_quintals",
                    0
                )
            ) - int(
                booking.get(
                    "estimated_qty",
                    0
                )
            )
        )

        update_document(
            "centres",
            centre["id"],
            {
                "current_load_quintals":
                    current_load
            }
        )

    # Notification
    notification_id = next_numeric_id(
        "notifications"
    )

    create_notification({
        "id": notification_id,
        "farmer_id": booking["farmer_id"],
        "booking_id": booking["id"],
        "title": "Token Cancelled",
        "message":
            f"Your procurement slot token "
            f"{token_number} has been cancelled."
    })

    return jsonify({
        "message":
            f"Token {token_number} cancelled successfully!",
        "token_number": token_number
    })


# =========================================================
# LIVE QUEUE
# =========================================================

@app.route(
    "/api/queue/status/<token_number>",
    methods=["GET"]
)
def queue_status(token_number):

    booking = get_booking_by_token(
        token_number
    )

    if not booking:

        return jsonify({
            "error": "Token not found"
        }), 404

    centre = get_centre(
        booking["centre_id"]
    )

    slot = get_slot(
        booking["slot_id"]
    )

    if not centre:

        return jsonify({
            "error": "Centre not found"
        }), 404

    centre_name = centre.get(
        "name",
        centre.get(
            "centerName",
            ""
        )
    )

    avg_processing = float(
        centre.get(
            "avg_processing_mins",
            10
        )
    )

    active_bookings = get_active_bookings_for_centre(
        booking["centre_id"]
    )

    # Sort by booking ID
    active_bookings.sort(
        key=lambda x: int(
            x.get("id", 0)
        )
    )

    tokens_ahead = 0

    for active in active_bookings:

        if int(
            active.get("id", 0)
        ) < int(
            booking.get("id", 0)
        ):

            tokens_ahead += 1

    currently_serving_token = "None (Waiting)"

    serving = [
        b for b in active_bookings
        if b.get("status")
        in ["QUALITY_CHECK", "WEIGHED"]
    ]

    if serving:

        serving.sort(
            key=lambda x: int(
                x.get("id", 0)
            )
        )

        currently_serving_token = serving[0].get(
            "token_number",
            "None"
        )

    est_wait_mins = (
        tokens_ahead * avg_processing
    )

    # Approaching notification
    if (
        tokens_ahead <= 3
        and booking.get("status")
        in ["BOOKED", "CHECKED_IN"]
    ):

        notifications = get_notifications(
            booking["farmer_id"]
        )

        already_sent = any(
            n.get("booking_id") == booking["id"]
            and "Turn Approaching"
            in n.get("title", "")
            for n in notifications
        )

        if not already_sent:

            notification_id = next_numeric_id(
                "notifications"
            )

            create_notification({
                "id": notification_id,
                "farmer_id":
                    booking["farmer_id"],
                "booking_id":
                    booking["id"],
                "title":
                    "Turn Approaching!",
                "message":
                    f"You are #{tokens_ahead + 1} "
                    f"in queue for token {token_number}. "
                    f"Please be near the centre gate."
            })

    status = booking.get(
        "status"
    )

    milestones = [
        {
            "step": 1,
            "code": "BOOKED",
            "label": "Slot Booked",
            "done": True
        },
        {
            "step": 2,
            "code": "CHECKED_IN",
            "label": "Gate Check-In",
            "done": status in [
                "CHECKED_IN",
                "QUALITY_CHECK",
                "WEIGHED",
                "PAYMENT_PENDING",
                "COMPLETED"
            ]
        },
        {
            "step": 3,
            "code": "QUALITY_CHECK",
            "label": "Quality Testing",
            "done": status in [
                "QUALITY_CHECK",
                "WEIGHED",
                "PAYMENT_PENDING",
                "COMPLETED"
            ]
        },
        {
            "step": 4,
            "code": "WEIGHED",
            "label": "Net Weighing",
            "done": status in [
                "WEIGHED",
                "PAYMENT_PENDING",
                "COMPLETED"
            ]
        },
        {
            "step": 5,
            "code": "COMPLETED",
            "label": "Payout & Completion",
            "done": status == "COMPLETED"
        }
    ]

    booking["centre_name"] = centre_name

    if slot:

        booking["time_window"] = slot.get(
            "time_window",
            ""
        )

    return jsonify({
        "token_number": token_number,
        "booking": booking,
        "tokens_ahead": tokens_ahead,
        "currently_serving_token":
            currently_serving_token,
        "est_wait_mins":
            est_wait_mins,
        "milestones":
            milestones
    })


# =========================================================
# NOTIFICATIONS
# =========================================================

@app.route(
    "/api/notifications/<int:farmer_id>",
    methods=["GET"]
)
def get_notifications_route(farmer_id):

    notifications = get_notifications(
        farmer_id
    )

    return jsonify({
        "notifications": notifications
    })


# =========================================================
# OFFICER WORKFLOW
# =========================================================

@app.route(
    "/api/officer/queue",
    methods=["GET"]
)
def officer_queue():

    centre_id = request.args.get(
        "centre_id",
        1
    )

    bookings = get_bookings_by_centre(
        centre_id
    )

    queue = []

    for booking in bookings:

        if booking.get("status") in [
            "COMPLETED",
            "CANCELLED"
        ]:

            continue

        booking_info = dict(
            booking
        )

        farmer = get_db().collection(
            "users"
        ).document(
            str(booking["farmer_id"])
        ).get()

        if farmer.exists:

            farmer_data = farmer.to_dict() or {}

            booking_info["farmer_name"] = (
                farmer_data.get(
                    "name",
                    ""
                )
            )

            booking_info["farmer_phone"] = (
                farmer_data.get(
                    "phone",
                    ""
                )
            )

        queue.append(
            booking_info
        )

    queue.sort(
        key=lambda x: int(
            x.get("id", 0)
        )
    )

    return jsonify({
        "queue": queue,
        "count": len(queue)
    })


@app.route(
    "/api/officer/advance-token",
    methods=["POST"]
)
def advance_token():

    data = request.json or {}

    token_number = data.get(
        "token_number"
    )

    next_status = data.get(
        "next_status"
    )

    verified_qty = data.get(
        "verified_qty"
    )

    quality_grade = data.get(
        "quality_grade"
    )

    payout = data.get(
        "total_payout"
    )

    if not token_number or not next_status:

        return jsonify({
            "error":
                "token_number and next_status required"
        }), 400

    booking = get_booking_by_token(
        token_number
    )

    if not booking:

        return jsonify({
            "error": "Token not found"
        }), 404

    if next_status == "COMPLETED" and not payout:

        rate = 2250.0

        qty = (
            float(verified_qty)
            if verified_qty
            else float(
                booking.get(
                    "estimated_qty",
                    0
                )
            )
        )

        payout = qty * rate

    update_data = {
        "status": next_status
    }

    if verified_qty is not None:

        update_data["verified_qty"] = (
            verified_qty
        )

    if quality_grade is not None:

        update_data["quality_grade"] = (
            quality_grade
        )

    if payout is not None:

        update_data["total_payout"] = (
            payout
        )

    update_document(
        "bookings",
        booking["id"],
        update_data
    )

    status_messages = {

        "CHECKED_IN":
            "Gate Check-In verified. "
            "Please move to Quality Testing Dock #1.",

        "QUALITY_CHECK":
            f"Quality inspection complete! "
            f"Grade: {quality_grade or 'Grade A'}.",

        "WEIGHED":
            f"Weighing complete! "
            f"Verified weight: "
            f"{verified_qty or booking.get('estimated_qty', 0)} "
            f"Quintals.",

        "COMPLETED":
            f"Procurement Complete! "
            f"Payout receipt of "
            f"₹{payout or 50000} generated."
    }

    msg = status_messages.get(
        next_status,
        f"Status updated to {next_status}"
    )

    notification_id = next_numeric_id(
        "notifications"
    )

    create_notification({

        "id": notification_id,

        "farmer_id":
            booking["farmer_id"],

        "booking_id":
            booking["id"],

        "title":
            "Procurement Status Update",

        "message":
            f"Token {token_number}: {msg}"
    })

    return jsonify({

        "message":
            f"Token {token_number} "
            f"updated to {next_status}!",

        "token_number":
            token_number,

        "status":
            next_status
    })


# =========================================================
# ADMIN ANALYTICS
# =========================================================

@app.route(
    "/api/admin/analytics",
    methods=["GET"]
)
def admin_analytics():

    users = get_all_documents(
        "users"
    )

    centres = get_all_documents(
        "centres"
    )

    bookings = get_all_documents(
        "bookings"
    )

    farmers = [
        u for u in users
        if u.get("role") == "FARMER"
    ]

    completed = [
        b for b in bookings
        if b.get("status") == "COMPLETED"
    ]

    total_farmers = len(
        farmers
    )

    total_centres = len(
        centres
    )

    total_tokens = len(
        bookings
    )

    completed_tokens = len(
        completed
    )

    total_tonnage = 0

    total_payout_sum = 0

    for booking in completed:

        qty = booking.get(
            "verified_qty"
        )

        if qty is None:

            qty = booking.get(
                "estimated_qty",
                0
            )

        try:
            total_tonnage += float(
                qty
            )
        except (ValueError, TypeError):
            pass

        payout = booking.get(
            "total_payout"
        )

        if payout is not None:

            try:
                total_payout_sum += float(
                    payout
                )
            except (ValueError, TypeError):
                pass

    centre_analytics = []

    for centre in centres:

        max_capacity = float(
            centre.get(
                "max_capacity_quintals",
                1
            )
        )

        current_load = float(
            centre.get(
                "current_load_quintals",
                0
            )
        )

        utilization = (
            round(
                (current_load / max_capacity) * 100,
                1
            )
            if max_capacity
            else 0
        )

        centre_analytics.append({

            "name":
                centre.get(
                    "name",
                    centre.get(
                        "centerName",
                        ""
                    )
                ),

            "district":
                centre.get(
                    "district",
                    ""
                ),

            "max_capacity_quintals":
                max_capacity,

            "current_load_quintals":
                current_load,

            "utilization_pct":
                utilization
        })

    status_counts = {}

    for booking in bookings:

        status = booking.get(
            "status",
            "UNKNOWN"
        )

        status_counts[status] = (
            status_counts.get(
                status,
                0
            ) + 1
        )

    status_breakdown = [
        {
            "status": status,
            "count": count
        }
        for status, count
        in status_counts.items()
    ]

    return jsonify({

        "total_farmers":
            total_farmers,

        "total_centres":
            total_centres,

        "total_tokens":
            total_tokens,

        "completed_tokens":
            completed_tokens,

        "total_tonnage_procured_quintals":
            total_tonnage,

        "total_payout_distributed":
            total_payout_sum,

        "avg_wait_time_mins":
            14,

        "centre_loads":
            centre_analytics,

        "status_breakdown":
            status_breakdown
    })


# =========================================================
# FRONTEND ROUTE
# =========================================================

@app.route("/")
def index():

    return render_template(
        "index.html"
    )


# =========================================================
# RUN SERVER
# =========================================================

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5050,
        debug=False,
        threaded=True
    )