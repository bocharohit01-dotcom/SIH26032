import os
import math
import random
import datetime
from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from database import get_db, init_db

app = Flask(__name__, static_folder="static", template_folder="templates")
CORS(app)

# Ensure DB is initialized on startup
init_db()

# --- UTILITY FUNCTIONS ---

def haversine_distance(lat1, lon1, lat2, lon2):
    """Calculate Great Circle distance in km between two lat/lng pairs."""
    R = 6371.0 # Earth radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return round(R * c, 1)

def format_row(row):
    """Convert sqlite3.Row to python dict."""
    if row is None:
        return None
    return dict(row)

# --- AUTH ROUTES ---

@app.route("/api/auth/register", methods=["POST"])
def register():
    data = request.json or {}
    name = data.get("name")
    phone = data.get("phone")
    password = data.get("password")
    role = data.get("role", "FARMER").upper()
    location_name = data.get("location_name", "Village Center")
    lat = float(data.get("lat", 17.9500))
    lng = float(data.get("lng", 78.2500))

    if not name or not phone or not password:
        return jsonify({"error": "Name, phone number, and password are required."}), 400

    conn = get_db()
    cursor = conn.cursor()

    try:
        cursor.execute('''
        INSERT INTO users (name, phone, password, role, location_name, lat, lng)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (name, phone, password, role, location_name, lat, lng))
        conn.commit()
        user_id = cursor.lastrowid
        
        user = format_row(cursor.execute("SELECT id, name, phone, role, location_name, lat, lng FROM users WHERE id=?", (user_id,)).fetchone())
        conn.close()
        return jsonify({"message": "Registration successful!", "user": user}), 201
    except Exception as e:
        conn.close()
        if "UNIQUE" in str(e):
            return jsonify({"error": "Phone number is already registered. Please login."}), 400
        return jsonify({"error": str(e)}), 500

@app.route("/api/auth/login", methods=["POST"])
def login():
    data = request.json or {}
    phone = data.get("phone")
    password = data.get("password")

    if not phone or not password:
        return jsonify({"error": "Phone and password are required."}), 400

    conn = get_db()
    cursor = conn.cursor()
    row = cursor.execute("SELECT id, name, phone, role, location_name, lat, lng FROM users WHERE phone=? AND password=?", (phone, password)).fetchone()
    conn.close()

    if not row:
        return jsonify({"error": "Invalid phone number or password."}), 401

    user = format_row(row)
    return jsonify({"message": "Login successful!", "user": user}), 200

# --- CENTRE DISCOVERY & SMART RECOMMENDATION ---

@app.route("/api/centres", methods=["GET"])
def get_centres():
    conn = get_db()
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM centres WHERE status='ACTIVE'").fetchall()
    centres = [format_row(r) for r in rows]
    conn.close()
    return jsonify({"centres": centres})

@app.route("/api/centres/recommend", methods=["GET"])
def recommend_centres():
    farmer_lat = float(request.args.get("lat", 17.9500))
    farmer_lng = float(request.args.get("lng", 78.2500))
    max_distance_km = float(request.args.get("max_distance", 50.0))

    conn = get_db()
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM centres WHERE status='ACTIVE'").fetchall()
    centres_raw = [format_row(r) for r in rows]

    recommended = []
    for c in centres_raw:
        dist = haversine_distance(farmer_lat, farmer_lng, c["lat"], c["lng"])
        if dist > max_distance_km:
            continue

        # Active queue count at center
        active_q_count = cursor.execute(
            "SELECT COUNT(*) FROM bookings WHERE centre_id=? AND status IN ('BOOKED', 'CHECKED_IN', 'QUALITY_CHECK', 'WEIGHED')",
            (c["id"],)
        ).fetchone()[0]

        # Estimated waiting time in minutes
        est_wait_mins = active_q_count * c["avg_processing_mins"]

        # Capacity percentage
        capacity_pct = round((c["current_load_quintals"] / c["max_capacity_quintals"]) * 100, 1)

        # Smart Recommendation Score (lower is better)
        # Weights: Distance (40%), Wait Time (40%), Capacity Load (20%)
        score = (dist * 0.4) + (est_wait_mins * 0.4) + (capacity_pct * 0.2)

        c_info = dict(c)
        c_info["distance_km"] = dist
        c_info["active_queue_length"] = active_q_count
        c_info["est_wait_mins"] = est_wait_mins
        c_info["capacity_pct"] = capacity_pct
        c_info["recommendation_score"] = round(score, 2)
        
        # Tag reason for recommendation
        if dist < 10 and est_wait_mins < 30:
            c_info["tag"] = "BEST MATCH (Nearest & Fast)"
        elif est_wait_mins == 0:
            c_info["tag"] = "ZERO QUEUE"
        elif capacity_pct < 50:
            c_info["tag"] = "HIGH CAPACITY"
        else:
            c_info["tag"] = "STANDARD"

        recommended.append(c_info)

    # Sort by recommendation score ascending
    recommended.sort(key=lambda x: x["recommendation_score"])
    conn.close()

    return jsonify({"recommended": recommended, "count": len(recommended)})

@app.route("/api/centres/compare", methods=["POST"])
def compare_centres():
    data = request.json or {}
    centre_ids = data.get("ids", [])
    farmer_lat = float(data.get("lat", 17.9500))
    farmer_lng = float(data.get("lng", 78.2500))

    if not centre_ids:
        return jsonify({"error": "Please provide centre IDs to compare."}), 400

    conn = get_db()
    cursor = conn.cursor()
    placeholders = ",".join(["?"] * len(centre_ids))
    rows = cursor.execute(f"SELECT * FROM centres WHERE id IN ({placeholders})", centre_ids).fetchall()
    
    result = []
    for r in rows:
        c = format_row(r)
        dist = haversine_distance(farmer_lat, farmer_lng, c["lat"], c["lng"])
        active_q = cursor.execute(
            "SELECT COUNT(*) FROM bookings WHERE centre_id=? AND status IN ('BOOKED', 'CHECKED_IN', 'QUALITY_CHECK', 'WEIGHED')",
            (c["id"],)
        ).fetchone()[0]
        est_wait = active_q * c["avg_processing_mins"]

        c["distance_km"] = dist
        c["active_queue_length"] = active_q
        c["est_wait_mins"] = est_wait
        c["capacity_pct"] = round((c["current_load_quintals"] / c["max_capacity_quintals"]) * 100, 1)
        result.append(c)

    conn.close()
    return jsonify({"comparison": result})

# --- SLOT BOOKING & TOKEN GENERATION ---

@app.route("/api/slots", methods=["GET"])
def get_slots():
    centre_id = request.args.get("centre_id")
    date_val = request.args.get("date", datetime.date.today().isoformat())

    if not centre_id:
        return jsonify({"error": "centre_id is required"}), 400

    conn = get_db()
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM slots WHERE centre_id=? AND date=?", (centre_id, date_val)).fetchall()
    slots = [format_row(r) for r in rows]
    conn.close()
    return jsonify({"slots": slots})

@app.route("/api/bookings", methods=["POST"])
def create_booking():
    data = request.json or {}
    farmer_id = data.get("farmer_id")
    centre_id = data.get("centre_id")
    slot_id = data.get("slot_id")
    crop_type = data.get("crop_type", "Paddy (Grade A)")
    estimated_qty = int(data.get("estimated_qty", 20))

    if not farmer_id or not centre_id or not slot_id:
        return jsonify({"error": "Farmer, centre, and slot are required."}), 400

    conn = get_db()
    cursor = conn.cursor()

    # Check slot capacity
    slot = cursor.execute("SELECT * FROM slots WHERE id=?", (slot_id,)).fetchone()
    if not slot:
        conn.close()
        return jsonify({"error": "Selected slot not found."}), 404
    
    if slot["booked_farmers"] >= slot["max_farmers"]:
        conn.close()
        return jsonify({"error": "Selected time slot is fully booked. Please choose another."}), 400

    # Calculate queue position
    active_count = cursor.execute(
        "SELECT COUNT(*) FROM bookings WHERE centre_id=? AND status IN ('BOOKED', 'CHECKED_IN', 'QUALITY_CHECK', 'WEIGHED')",
        (centre_id,)
    ).fetchone()[0]
    queue_pos = active_count + 1

    # Generate Token Number
    token_num = f"TK-{datetime.date.today().strftime('%Y%m%d')}-{random.randint(100, 999)}"

    cursor.execute('''
    INSERT INTO bookings (token_number, farmer_id, centre_id, slot_id, crop_type, estimated_qty, status, queue_position, qr_code_data)
    VALUES (?, ?, ?, ?, ?, ?, 'BOOKED', ?, ?)
    ''', (token_num, farmer_id, centre_id, slot_id, crop_type, estimated_qty, queue_pos, token_num))

    # Update slot booked counts
    cursor.execute('''
    UPDATE slots SET booked_farmers = booked_farmers + 1, booked_capacity_quintals = booked_capacity_quintals + ?
    WHERE id=?
    ''', (estimated_qty, slot_id))

    # Update centre current load
    cursor.execute('''
    UPDATE centres SET current_load_quintals = current_load_quintals + ? WHERE id=?
    ''', (estimated_qty, centre_id))

    booking_id = cursor.lastrowid

    # Create Notification
    cursor.execute('''
    INSERT INTO notifications (farmer_id, booking_id, title, message)
    VALUES (?, ?, 'Token Issued', ?)
    ''', (farmer_id, booking_id, f"Token {token_num} issued successfully! Slot: {slot['time_window']}."))

    conn.commit()
    booking = format_row(cursor.execute("SELECT * FROM bookings WHERE id=?", (booking_id,)).fetchone())
    conn.close()

    return jsonify({"message": "Slot booked & token generated successfully!", "booking": booking}), 201

@app.route("/api/bookings/my", methods=["GET"])
def my_bookings():
    farmer_id = request.args.get("farmer_id")
    if not farmer_id:
        return jsonify({"error": "farmer_id required"}), 400

    conn = get_db()
    cursor = conn.cursor()
    rows = cursor.execute('''
    SELECT b.*, c.name as centre_name, c.address as centre_address, s.time_window, s.date as slot_date
    FROM bookings b
    JOIN centres c ON b.centre_id = c.id
    JOIN slots s ON b.slot_id = s.id
    WHERE b.farmer_id = ?
    ORDER BY b.id DESC
    ''', (farmer_id,)).fetchall()
    
    bookings = [format_row(r) for r in rows]
    conn.close()
    return jsonify({"bookings": bookings})

@app.route("/api/bookings/cancel", methods=["POST"])
def cancel_booking():
    data = request.json or {}
    token_number = data.get("token_number")
    
    if not token_number:
        return jsonify({"error": "token_number is required"}), 400

    conn = get_db()
    cursor = conn.cursor()

    b = cursor.execute("SELECT * FROM bookings WHERE token_number=?", (token_number,)).fetchone()
    if not b:
        conn.close()
        return jsonify({"error": "Booking token not found"}), 404

    if b["status"] == "COMPLETED":
        conn.close()
        return jsonify({"error": "Cannot cancel an already completed procurement token."}), 400

    if b["status"] == "CANCELLED":
        conn.close()
        return jsonify({"error": "Booking is already cancelled."}), 400

    # Update booking status to CANCELLED
    cursor.execute("UPDATE bookings SET status='CANCELLED' WHERE token_number=?", (token_number,))

    # Release slot count and capacity
    cursor.execute('''
    UPDATE slots SET 
        booked_farmers = MAX(0, booked_farmers - 1),
        booked_capacity_quintals = MAX(0, booked_capacity_quintals - ?)
    WHERE id=?
    ''', (b["estimated_qty"], b["slot_id"]))

    # Release centre current load
    cursor.execute('''
    UPDATE centres SET 
        current_load_quintals = MAX(0, current_load_quintals - ?)
    WHERE id=?
    ''', (b["estimated_qty"], b["centre_id"]))

    # Add cancellation notification
    cursor.execute('''
    INSERT INTO notifications (farmer_id, booking_id, title, message)
    VALUES (?, ?, 'Token Cancelled', ?)
    ''', (b["farmer_id"], b["id"], f"Your procurement slot token {token_number} has been cancelled."))

    conn.commit()
    conn.close()

    return jsonify({"message": f"Token {token_number} cancelled successfully!", "token_number": token_number})

# --- LIVE QUEUE & ETA TRACKING ---

@app.route("/api/queue/status/<token_number>", methods=["GET"])
def queue_status(token_number):
    conn = get_db()
    cursor = conn.cursor()

    b_row = cursor.execute('''
    SELECT b.*, c.name as centre_name, c.avg_processing_mins, s.time_window
    FROM bookings b
    JOIN centres c ON b.centre_id = c.id
    JOIN slots s ON b.slot_id = s.id
    WHERE b.token_number = ?
    ''', (token_number,)).fetchone()

    if not b_row:
        conn.close()
        return jsonify({"error": "Token not found"}), 404

    booking = format_row(b_row)

    # Calculate tokens ahead in queue
    tokens_ahead = cursor.execute('''
    SELECT COUNT(*) FROM bookings
    WHERE centre_id = ? AND id < ? AND status IN ('BOOKED', 'CHECKED_IN', 'QUALITY_CHECK', 'WEIGHED')
    ''', (booking["centre_id"], booking["id"])).fetchone()[0]

    # Token currently being served at Quality/Weighing
    currently_serving = cursor.execute('''
    SELECT token_number FROM bookings
    WHERE centre_id = ? AND status IN ('QUALITY_CHECK', 'WEIGHED')
    ORDER BY id ASC LIMIT 1
    ''', (booking["centre_id"],)).fetchone()

    currently_serving_token = currently_serving[0] if currently_serving else "None (Waiting)"
    est_wait_mins = tokens_ahead * booking["avg_processing_mins"]

    # Trigger approaching notification if tokens ahead <= 3 and status != COMPLETED
    if tokens_ahead <= 3 and booking["status"] in ["BOOKED", "CHECKED_IN"]:
        existing_notif = cursor.execute(
            "SELECT id FROM notifications WHERE farmer_id=? AND booking_id=? AND title LIKE '%Turn Approaching%'",
            (booking["farmer_id"], booking["id"])
        ).fetchone()
        if not existing_notif:
            cursor.execute('''
            INSERT INTO notifications (farmer_id, booking_id, title, message)
            VALUES (?, ?, 'Turn Approaching!', ?)
            ''', (booking["farmer_id"], booking["id"], f"You are #{tokens_ahead + 1} in queue for token {token_number}. Please be near the centre gate."))
            conn.commit()

    conn.close()

    milestones = [
        {"step": 1, "code": "BOOKED", "label": "Slot Booked", "done": True},
        {"step": 2, "code": "CHECKED_IN", "label": "Gate Check-In", "done": booking["status"] in ["CHECKED_IN", "QUALITY_CHECK", "WEIGHED", "PAYMENT_PENDING", "COMPLETED"]},
        {"step": 3, "code": "QUALITY_CHECK", "label": "Quality Testing", "done": booking["status"] in ["QUALITY_CHECK", "WEIGHED", "PAYMENT_PENDING", "COMPLETED"]},
        {"step": 4, "code": "WEIGHED", "label": "Net Weighing", "done": booking["status"] in ["WEIGHED", "PAYMENT_PENDING", "COMPLETED"]},
        {"step": 5, "code": "COMPLETED", "label": "Payout & Completion", "done": booking["status"] == "COMPLETED"}
    ]

    return jsonify({
        "token_number": token_number,
        "booking": booking,
        "tokens_ahead": tokens_ahead,
        "currently_serving_token": currently_serving_token,
        "est_wait_mins": est_wait_mins,
        "milestones": milestones
    })

@app.route("/api/notifications/<int:farmer_id>", methods=["GET"])
def get_notifications(farmer_id):
    conn = get_db()
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM notifications WHERE farmer_id=? ORDER BY id DESC LIMIT 10", (farmer_id,)).fetchall()
    notifs = [format_row(r) for r in rows]
    conn.close()
    return jsonify({"notifications": notifs})

# --- OFFICER WORKFLOW ---

@app.route("/api/officer/queue", methods=["GET"])
def officer_queue():
    centre_id = request.args.get("centre_id", 1)
    conn = get_db()
    cursor = conn.cursor()
    
    rows = cursor.execute('''
    SELECT b.*, u.name as farmer_name, u.phone as farmer_phone
    FROM bookings b
    JOIN users u ON b.farmer_id = u.id
    WHERE b.centre_id = ? AND b.status NOT IN ('COMPLETED', 'CANCELLED')
    ORDER BY b.id ASC
    ''', (centre_id,)).fetchall()

    queue = [format_row(r) for r in rows]
    conn.close()
    return jsonify({"queue": queue, "count": len(queue)})

@app.route("/api/officer/advance-token", methods=["POST"])
def advance_token():
    data = request.json or {}
    token_number = data.get("token_number")
    next_status = data.get("next_status") # CHECKED_IN, QUALITY_CHECK, WEIGHED, COMPLETED
    verified_qty = data.get("verified_qty")
    quality_grade = data.get("quality_grade")
    payout = data.get("total_payout")

    if not token_number or not next_status:
        return jsonify({"error": "token_number and next_status required"}), 400

    conn = get_db()
    cursor = conn.cursor()

    b = cursor.execute("SELECT * FROM bookings WHERE token_number=?", (token_number,)).fetchone()
    if not b:
        conn.close()
        return jsonify({"error": "Token not found"}), 404

    # Calculate payout if verified qty & grade are passed
    if next_status == "COMPLETED" and not payout:
        rate = 2250.0 # MSP per quintal sample rate
        qty = float(verified_qty) if verified_qty else float(b["estimated_qty"])
        payout = qty * rate

    cursor.execute('''
    UPDATE bookings SET
        status = ?,
        verified_qty = COALESCE(?, verified_qty),
        quality_grade = COALESCE(?, quality_grade),
        total_payout = COALESCE(?, total_payout)
    WHERE token_number = ?
    ''', (next_status, verified_qty, quality_grade, payout, token_number))

    # Send status update notification to farmer
    status_messages = {
        "CHECKED_IN": "Gate Check-In verified. Please move to Quality Testing Dock #1.",
        "QUALITY_CHECK": f"Quality inspection complete! Grade: {quality_grade or 'Grade A'}.",
        "WEIGHED": f"Weighing complete! Verified weight: {verified_qty or b['estimated_qty']} Quintals.",
        "COMPLETED": f"Procurement Complete! Payout receipt of ₹{payout or 50000} generated."
    }
    
    msg = status_messages.get(next_status, f"Status updated to {next_status}")

    cursor.execute('''
    INSERT INTO notifications (farmer_id, booking_id, title, message)
    VALUES (?, ?, 'Procurement Status Update', ?)
    ''', (b["farmer_id"], b["id"], f"Token {token_number}: {msg}"))

    conn.commit()
    conn.close()

    return jsonify({"message": f"Token {token_number} updated to {next_status}!", "token_number": token_number, "status": next_status})

# --- ADMIN & ANALYTICS ---

@app.route("/api/admin/analytics", methods=["GET"])
def admin_analytics():
    conn = get_db()
    cursor = conn.cursor()

    total_farmers = cursor.execute("SELECT COUNT(*) FROM users WHERE role='FARMER'").fetchone()[0]
    total_centres = cursor.execute("SELECT COUNT(*) FROM centres").fetchone()[0]
    total_tokens = cursor.execute("SELECT COUNT(*) FROM bookings").fetchone()[0]
    completed_tokens = cursor.execute("SELECT COUNT(*) FROM bookings WHERE status='COMPLETED'").fetchone()[0]
    
    total_tonnage = cursor.execute("SELECT SUM(COALESCE(verified_qty, estimated_qty)) FROM bookings WHERE status='COMPLETED'").fetchone()[0] or 0
    total_payout_sum = cursor.execute("SELECT SUM(total_payout) FROM bookings WHERE status='COMPLETED'").fetchone()[0] or 0

    # Capacity load per centre
    c_loads = cursor.execute('''
    SELECT name, district, max_capacity_quintals, current_load_quintals
    FROM centres
    ''').fetchall()

    centre_analytics = []
    for cl in c_loads:
        d = format_row(cl)
        d["utilization_pct"] = round((d["current_load_quintals"] / d["max_capacity_quintals"]) * 100, 1)
        centre_analytics.append(d)

    # Bottleneck breakdown by status
    status_breakdown = cursor.execute('''
    SELECT status, COUNT(*) as count FROM bookings GROUP BY status
    ''').fetchall()

    conn.close()

    return jsonify({
        "total_farmers": total_farmers,
        "total_centres": total_centres,
        "total_tokens": total_tokens,
        "completed_tokens": completed_tokens,
        "total_tonnage_procured_quintals": total_tonnage,
        "total_payout_distributed": total_payout_sum,
        "avg_wait_time_mins": 14,
        "centre_loads": centre_analytics,
        "status_breakdown": [format_row(sb) for sb in status_breakdown]
    })

# --- FRONTEND ROUTE ---

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=False, threaded=True)
