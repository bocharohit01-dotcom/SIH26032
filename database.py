import os
import firebase_admin
from firebase_admin import credentials, firestore

# --------------------------------------------------
# Firebase Initialization
# --------------------------------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SERVICE_ACCOUNT = os.path.join(
    BASE_DIR,
    "firebase-service-account.json"
)

if not firebase_admin._apps:
    cred = credentials.Certificate(SERVICE_ACCOUNT)
    firebase_admin.initialize_app(cred)

db = firestore.client()


# --------------------------------------------------
# Firestore Collection Helpers
# --------------------------------------------------

def get_db():
    """
    Returns the Firebase Firestore client.
    This keeps the same function name used by app.py,
    but now returns Firestore instead of SQLite.
    """
    return db


def get_collection(collection_name):
    """Return a Firestore collection reference."""
    return db.collection(collection_name)


# --------------------------------------------------
# Generic Helpers
# --------------------------------------------------

def document_to_dict(document):
    """Convert Firestore document to a Python dictionary."""
    if not document.exists:
        return None

    data = document.to_dict() or {}

    # Keep Firestore document ID available
    data["document_id"] = document.id

    return data


def get_document(collection_name, document_id):
    """Get one Firestore document."""
    doc = db.collection(collection_name).document(str(document_id)).get()
    return document_to_dict(doc)


def set_document(collection_name, document_id, data):
    """Create or completely replace a document."""
    db.collection(collection_name).document(str(document_id)).set(data)
    return data


def update_document(collection_name, document_id, data):
    """Update fields in an existing document."""
    db.collection(collection_name).document(str(document_id)).update(data)


def delete_document(collection_name, document_id):
    """Delete a Firestore document."""
    db.collection(collection_name).document(str(document_id)).delete()


# --------------------------------------------------
# Collection Reading
# --------------------------------------------------

def get_all_documents(collection_name):
    """Return all documents from a collection."""
    documents = db.collection(collection_name).stream()

    result = []

    for document in documents:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        result.append(data)

    return result


# --------------------------------------------------
# Users
# --------------------------------------------------

def get_user_by_phone(phone):
    """Find a user using phone number."""

    query = (
        db.collection("users")
        .where("phone", "==", str(phone))
        .limit(1)
        .stream()
    )

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        return data

    return None


def create_user(user_data):
    """Create a new user."""

    phone = str(user_data["phone"])

    existing = get_user_by_phone(phone)

    if existing:
        raise ValueError("Phone number is already registered.")

    # Generate a simple numeric ID for frontend compatibility
    existing_users = get_all_documents("users")

    numeric_ids = []

    for user in existing_users:
        try:
            numeric_ids.append(int(user.get("id", 0)))
        except (ValueError, TypeError):
            pass

    new_id = max(numeric_ids, default=0) + 1

    user_data["id"] = new_id

    db.collection("users").document(str(new_id)).set(user_data)

    return user_data


# --------------------------------------------------
# Centres
# --------------------------------------------------

def get_centres():
    """Return all active procurement centres."""

    query = (
        db.collection("centres")
        .where("status", "==", "ACTIVE")
        .stream()
    )

    centres = []

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        centres.append(data)

    return centres


def get_centre(centre_id):
    return get_document("centres", centre_id)


# --------------------------------------------------
# Slots
# --------------------------------------------------

def get_slots(centre_id, date_value):
    """Return slots for a centre and date."""

    query = (
        db.collection("slots")
        .where("centre_id", "==", int(centre_id))
        .where("date", "==", date_value)
        .stream()
    )

    slots = []

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        slots.append(data)

    return slots


def get_slot(slot_id):
    return get_document("slots", slot_id)


# --------------------------------------------------
# Bookings
# --------------------------------------------------

def get_booking_by_token(token_number):
    """Find booking using token number."""

    query = (
        db.collection("bookings")
        .where("token_number", "==", token_number)
        .limit(1)
        .stream()
    )

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        return data

    return None


def get_bookings_by_farmer(farmer_id):
    """Get bookings belonging to a farmer."""

    query = (
        db.collection("bookings")
        .where("farmer_id", "==", int(farmer_id))
        .stream()
    )

    bookings = []

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        bookings.append(data)

    # Newest first
    bookings.sort(
        key=lambda x: x.get("id", 0),
        reverse=True
    )

    return bookings


def get_bookings_by_centre(centre_id):
    """Get bookings belonging to a centre."""

    query = (
        db.collection("bookings")
        .where("centre_id", "==", int(centre_id))
        .stream()
    )

    bookings = []

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        bookings.append(data)

    bookings.sort(
        key=lambda x: x.get("id", 0)
    )

    return bookings


def create_booking(booking_data):
    """Create a booking/token."""

    existing = get_all_documents("bookings")

    numeric_ids = []

    for booking in existing:
        try:
            numeric_ids.append(int(booking.get("id", 0)))
        except (ValueError, TypeError):
            pass

    new_id = max(numeric_ids, default=0) + 1

    booking_data["id"] = new_id

    db.collection("bookings").document(str(new_id)).set(
        booking_data
    )

    return booking_data


# --------------------------------------------------
# Notifications
# --------------------------------------------------

def create_notification(notification_data):
    """Create a farmer notification."""

    existing = get_all_documents("notifications")

    numeric_ids = []

    for notification in existing:
        try:
            numeric_ids.append(
                int(notification.get("id", 0))
            )
        except (ValueError, TypeError):
            pass

    new_id = max(numeric_ids, default=0) + 1

    notification_data["id"] = new_id

    db.collection("notifications").document(
        str(new_id)
    ).set(notification_data)

    return notification_data


def get_notifications(farmer_id):
    """Get latest notifications for a farmer."""

    query = (
        db.collection("notifications")
        .where("farmer_id", "==", int(farmer_id))
        .stream()
    )

    notifications = []

    for document in query:
        data = document.to_dict() or {}
        data["document_id"] = document.id
        notifications.append(data)

    notifications.sort(
        key=lambda x: x.get("id", 0),
        reverse=True
    )

    return notifications[:10]


# --------------------------------------------------
# Firebase Test
# --------------------------------------------------

def firebase_connection_test():
    """Simple Firestore connection test."""

    test_ref = (
        db.collection("test")
        .document("backend_test")
    )

    test_ref.set({
        "status": "connected",
        "message": "KisanQueue backend connected to Firebase"
    })

    return True


# --------------------------------------------------
# Startup
# --------------------------------------------------

def init_db():
    """
    Firebase does not require SQLite-style table creation.
    Firestore collections are created automatically when
    documents are added.
    """
    print("[INFO] Firebase Firestore database ready.")


if __name__ == "__main__":
    init_db()
    print("Firebase database.py loaded successfully!")