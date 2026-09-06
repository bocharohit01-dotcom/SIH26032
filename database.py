import os
import json
import datetime

import firebase_admin
from firebase_admin import credentials, firestore


# --------------------------------------------------
# Firebase Initialization
# --------------------------------------------------

db = None


def _initialize_firebase():
    """Initialize Firebase once using Render env or local service account."""
    if firebase_admin._apps:
        return

    service_account_json = os.environ.get("FIREBASE_SERVICE_ACCOUNT")

    if service_account_json:
        try:
            service_account_info = json.loads(service_account_json)
        except json.JSONDecodeError as exc:
            raise RuntimeError(
                "FIREBASE_SERVICE_ACCOUNT is not valid JSON."
            ) from exc

        cred = credentials.Certificate(service_account_info)

    else:
        base_dir = os.path.dirname(os.path.abspath(__file__))

        service_account_file = os.path.join(
            base_dir,
            "firebase-service-account.json"
        )

        if not os.path.exists(service_account_file):
            raise RuntimeError(
                "Firebase credentials are missing. "
                "Set FIREBASE_SERVICE_ACCOUNT on Render, "
                "or provide firebase-service-account.json locally."
            )

        cred = credentials.Certificate(service_account_file)

    firebase_admin.initialize_app(cred)


def init_db():
    """Initialize and return the Firestore client."""
    global db

    _initialize_firebase()

    if db is None:
        db = firestore.client()

    return db


init_db()


# --------------------------------------------------
# Firestore Helpers
# --------------------------------------------------

def get_db():
    return init_db()


def get_collection(collection_name):
    return get_db().collection(collection_name)


# --------------------------------------------------
# Generic Helpers
# --------------------------------------------------

def document_to_dict(document):
    if not document.exists:
        return None

    data = document.to_dict() or {}
    data.setdefault("document_id", document.id)

    return data


def get_document(collection_name, document_id):
    document = (
        get_collection(collection_name)
        .document(str(document_id))
        .get()
    )

    return document_to_dict(document)


def get_all_documents(collection_name):
    documents = []

    for document in get_collection(collection_name).stream():
        item = document_to_dict(document)

        if item is not None:
            documents.append(item)

    return documents


# --------------------------------------------------
# ID Helpers
# --------------------------------------------------

def _normalise_id(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return str(value).strip()


def _find_by_id(collection_name, document_id):
    direct = get_document(collection_name, document_id)

    if direct is not None:
        return direct

    target = _normalise_id(document_id)

    for document in get_all_documents(collection_name):
        if _normalise_id(document.get("id")) == target:
            return document

    return None


def _next_numeric_id(collection_name):
    ids = []

    for document in get_all_documents(collection_name):
        try:
            ids.append(int(document.get("id", 0)))
        except (TypeError, ValueError):
            pass

    return max(ids, default=0) + 1


# --------------------------------------------------
# Users
# --------------------------------------------------

def get_user_by_phone(phone):
    phone = str(phone)

    for user in get_all_documents("users"):
        if str(user.get("phone", "")) == phone:
            return user

    return None


def create_user(data):
    user = dict(data)

    if user.get("id") is None:
        user["id"] = _next_numeric_id("users")

    user.setdefault(
        "created_at",
        datetime.datetime.now(datetime.timezone.utc).isoformat()
    )

    get_collection("users").document(
        str(user["id"])
    ).set(user)

    return user


# --------------------------------------------------
# Centres
# --------------------------------------------------

def get_centres():
    centres = get_all_documents("centres")

    try:
        centres.sort(
            key=lambda x: int(x.get("id", 0))
        )
    except (TypeError, ValueError):
        pass

    return centres


def get_centre(centre_id):
    return _find_by_id("centres", centre_id)


# --------------------------------------------------
# Slots
# --------------------------------------------------

def get_slots(centre_id, date_value=None):
    target_centre = _normalise_id(centre_id)

    slots = []

    for slot in get_all_documents("slots"):

        if _normalise_id(
            slot.get("centre_id")
        ) != target_centre:
            continue

        if date_value is not None:
            if str(slot.get("date", "")) != str(date_value):
                continue

        slots.append(slot)

    try:
        slots.sort(
            key=lambda x: int(x.get("id", 0))
        )
    except (TypeError, ValueError):
        pass

    return slots


def get_slot(slot_id):
    return _find_by_id("slots", slot_id)


# --------------------------------------------------
# Bookings
# --------------------------------------------------

def get_booking_by_token(token_number):
    token_number = str(token_number)

    for booking in get_all_documents("bookings"):
        if str(
            booking.get("token_number", "")
        ) == token_number:
            return booking

    return None


def get_bookings_by_farmer(farmer_id):
    target = _normalise_id(farmer_id)

    bookings = [
        booking
        for booking in get_all_documents("bookings")
        if _normalise_id(
            booking.get("farmer_id")
        ) == target
    ]

    try:
        bookings.sort(
            key=lambda x: int(x.get("id", 0)),
            reverse=True
        )
    except (TypeError, ValueError):
        pass

    return bookings


def get_bookings_by_centre(centre_id):
    target = _normalise_id(centre_id)

    bookings = [
        booking
        for booking in get_all_documents("bookings")
        if _normalise_id(
            booking.get("centre_id")
        ) == target
    ]

    try:
        bookings.sort(
            key=lambda x: int(x.get("id", 0))
        )
    except (TypeError, ValueError):
        pass

    return bookings


def create_booking(data):
    booking = dict(data)

    if booking.get("id") is None:
        booking["id"] = _next_numeric_id("bookings")

    booking.setdefault(
        "created_at",
        datetime.datetime.now(datetime.timezone.utc).isoformat()
    )

    get_collection("bookings").document(
        str(booking["id"])
    ).set(booking)

    return booking


# --------------------------------------------------
# Notifications
# --------------------------------------------------

def create_notification(data):
    notification = dict(data)

    if notification.get("id") is None:
        notification["id"] = _next_numeric_id(
            "notifications"
        )

    notification.setdefault("is_read", False)

    notification.setdefault(
        "created_at",
        datetime.datetime.now(datetime.timezone.utc).isoformat()
    )

    get_collection("notifications").document(
        str(notification["id"])
    ).set(notification)

    return notification


def get_notifications(farmer_id):
    target = _normalise_id(farmer_id)

    notifications = [
        notification
        for notification in get_all_documents(
            "notifications"
        )
        if _normalise_id(
            notification.get("farmer_id")
        ) == target
    ]

    notifications.sort(
        key=lambda x: str(
            x.get("created_at", "")
        ),
        reverse=True
    )

    return notifications


# --------------------------------------------------
# Update Helper
# --------------------------------------------------

def update_document(collection_name, document_id, updates):
    collection = get_collection(collection_name)

    ref = collection.document(
        str(document_id)
    )

    snapshot = ref.get()

    if snapshot.exists:
        ref.set(
            dict(updates),
            merge=True
        )

        return get_document(
            collection_name,
            document_id
        )

    target = _normalise_id(document_id)

    for document in get_all_documents(collection_name):

        if _normalise_id(
            document.get("id")
        ) == target:

            ref = collection.document(
                str(document.get("document_id"))
            )

            ref.set(
                dict(updates),
                merge=True
            )

            return get_document(
                collection_name,
                document.get("document_id")
            )

    new_data = dict(updates)

    new_data.setdefault(
        "id",
        document_id
    )

    ref.set(
        new_data,
        merge=True
    )

    return new_data