import os
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import date, timedelta


# -----------------------------
# Firebase connection
# -----------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

SERVICE_ACCOUNT = os.path.join(
    BASE_DIR,
    "firebase-service-account.json"
)

if not firebase_admin._apps:
    cred = credentials.Certificate(SERVICE_ACCOUNT)
    firebase_admin.initialize_app(cred)

db = firestore.client()


# -----------------------------
# Helper
# -----------------------------

def seed_collection(collection_name, documents):
    collection = db.collection(collection_name)

    for document_id, data in documents.items():
        collection.document(str(document_id)).set(data)

    print(f"[OK] {collection_name}: {len(documents)} documents added")


# -----------------------------
# USERS
# -----------------------------

users = {
    1: {
        "id": 1,
        "name": "Ravi Kumar",
        "phone": "9876543210",
        "password": "1234",
        "role": "FARMER",
        "location_name": "Bhimavaram",
        "lat": 16.5449,
        "lng": 81.5212
    },

    2: {
        "id": 2,
        "name": "Suresh",
        "phone": "9876543211",
        "password": "1234",
        "role": "FARMER",
        "location_name": "Tadepalligudem",
        "lat": 16.8147,
        "lng": 81.5275
    },

    3: {
        "id": 3,
        "name": "Anil Kumar",
        "phone": "9876543212",
        "password": "1234",
        "role": "FARMER",
        "location_name": "Tanuku",
        "lat": 16.7547,
        "lng": 81.6810
    },

    4: {
        "id": 4,
        "name": "Officer",
        "phone": "9000000001",
        "password": "admin123",
        "role": "OFFICER",
        "location_name": "Bhimavaram",
        "lat": 16.5449,
        "lng": 81.5212
    },

    5: {
        "id": 5,
        "name": "Admin",
        "phone": "9000000002",
        "password": "admin123",
        "role": "ADMIN",
        "location_name": "Bhimavaram",
        "lat": 16.5449,
        "lng": 81.5212
    }
}


# -----------------------------
# CENTRES
# -----------------------------

centres = {
    1: {
        "id": 1,
        "name": "Bhimavaram Procurement Centre",
        "code": "BVR001",
        "district": "West Godavari",
        "address": "Bhimavaram Agricultural Market",
        "lat": 16.5449,
        "lng": 81.5212,
        "max_capacity_quintals": 1000,
        "current_load_quintals": 320,
        "avg_processing_mins": 12,
        "operating_hours": "09:00 AM - 05:00 PM",
        "status": "ACTIVE",
        "facilities": [
            "Weighing",
            "Quality Testing",
            "Storage"
        ]
    },

    2: {
        "id": 2,
        "name": "Tadepalligudem Procurement Centre",
        "code": "TPG001",
        "district": "West Godavari",
        "address": "Tadepalligudem Market Yard",
        "lat": 16.8147,
        "lng": 81.5275,
        "max_capacity_quintals": 900,
        "current_load_quintals": 410,
        "avg_processing_mins": 15,
        "operating_hours": "09:00 AM - 05:00 PM",
        "status": "ACTIVE",
        "facilities": [
            "Weighing",
            "Quality Testing"
        ]
    },

    3: {
        "id": 3,
        "name": "Tanuku Procurement Centre",
        "code": "TNK001",
        "district": "West Godavari",
        "address": "Tanuku Agricultural Market",
        "lat": 16.7547,
        "lng": 81.6810,
        "max_capacity_quintals": 850,
        "current_load_quintals": 250,
        "avg_processing_mins": 10,
        "operating_hours": "09:00 AM - 05:00 PM",
        "status": "ACTIVE",
        "facilities": [
            "Weighing",
            "Quality Testing",
            "Storage"
        ]
    },

    4: {
        "id": 4,
        "name": "Eluru Procurement Centre",
        "code": "ELR001",
        "district": "Eluru",
        "address": "Eluru Market Yard",
        "lat": 16.7107,
        "lng": 81.0952,
        "max_capacity_quintals": 1200,
        "current_load_quintals": 500,
        "avg_processing_mins": 18,
        "operating_hours": "09:00 AM - 05:00 PM",
        "status": "ACTIVE",
        "facilities": [
            "Weighing",
            "Quality Testing",
            "Storage"
        ]
    },

    5: {
        "id": 5,
        "name": "Guntur Procurement Centre",
        "code": "GNT001",
        "district": "Guntur",
        "address": "Guntur Agricultural Market",
        "lat": 16.3067,
        "lng": 80.4365,
        "max_capacity_quintals": 1500,
        "current_load_quintals": 700,
        "avg_processing_mins": 20,
        "operating_hours": "09:00 AM - 05:00 PM",
        "status": "ACTIVE",
        "facilities": [
            "Weighing",
            "Quality Testing",
            "Storage"
        ]
    },

    6: {
        "id": 6,
        "name": "Medak Procurement Centre",
        "code": "MDK001",
        "district": "Medak",
        "address": "Medak Market Yard",
        "lat": 18.0485,
        "lng": 78.2632,
        "max_capacity_quintals": 1000,
        "current_load_quintals": 300,
        "avg_processing_mins": 14,
        "operating_hours": "09:00 AM - 05:00 PM",
        "status": "ACTIVE",
        "facilities": [
            "Weighing",
            "Quality Testing"
        ]
    }
}


# -----------------------------
# SLOTS
# -----------------------------

slots = {}

slot_id = 1

today = date.today()
tomorrow = today + timedelta(days=1)

time_windows = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "01:00 PM - 03:00 PM",
    "03:00 PM - 05:00 PM"
]

for centre_id in range(1, 7):

    for slot_date in [today, tomorrow]:

        for time_window in time_windows:

            slots[slot_id] = {
                "id": slot_id,
                "centre_id": centre_id,
                "date": slot_date.isoformat(),
                "time_window": time_window,
                "max_farmers": 20,
                "booked_farmers": 0,
                "max_capacity_quintals": 200,
                "booked_capacity_quintals": 0
            }

            slot_id += 1


# -----------------------------
# SAMPLE BOOKINGS
# -----------------------------

bookings = {
    1: {
        "id": 1,
        "token_number": "BVR-001",
        "farmer_id": 1,
        "centre_id": 1,
        "slot_id": 1,
        "crop_type": "Paddy",
        "estimated_qty": 50,
        "verified_qty": 0,
        "quality_grade": "",
        "total_payout": 0,
        "status": "WAITING",
        "queue_position": 1,
        "qr_code_data": "BVR-001",
    },

    2: {
        "id": 2,
        "token_number": "BVR-002",
        "farmer_id": 2,
        "centre_id": 1,
        "slot_id": 1,
        "crop_type": "Paddy",
        "estimated_qty": 40,
        "verified_qty": 0,
        "quality_grade": "",
        "total_payout": 0,
        "status": "WAITING",
        "queue_position": 2,
        "qr_code_data": "BVR-002",
    },

    3: {
        "id": 3,
        "token_number": "TPG-001",
        "farmer_id": 3,
        "centre_id": 2,
        "slot_id": 9,
        "crop_type": "Rice",
        "estimated_qty": 60,
        "verified_qty": 0,
        "quality_grade": "",
        "total_payout": 0,
        "status": "WAITING",
        "queue_position": 1,
        "qr_code_data": "TPG-001",
    }
}


# -----------------------------
# NOTIFICATIONS
# -----------------------------

notifications = {
    1: {
        "id": 1,
        "farmer_id": 1,
        "booking_id": 1,
        "title": "Token Generated",
        "message": "Your token BVR-001 has been generated successfully.",
        "is_read": False
    },

    2: {
        "id": 2,
        "farmer_id": 2,
        "booking_id": 2,
        "title": "Booking Confirmed",
        "message": "Your procurement booking has been confirmed.",
        "is_read": False
    },

    3: {
        "id": 3,
        "farmer_id": 3,
        "booking_id": 3,
        "title": "Token Generated",
        "message": "Your token TPG-001 has been generated successfully.",
        "is_read": False
    }
}


# -----------------------------
# WRITE TO FIRESTORE
# -----------------------------

print("\n===================================")
print(" KisanQueue Firebase Seed Started ")
print("===================================\n")

seed_collection("users", users)
seed_collection("centres", centres)
seed_collection("slots", slots)
seed_collection("bookings", bookings)
seed_collection("notifications", notifications)

print("\n===================================")
print(" Firebase Seed Completed!")
print("===================================")

print("\nCollections created/updated:")
print("1. users")
print("2. centres")
print("3. slots")
print("4. bookings")
print("5. notifications")

print("\nExisting collections were NOT touched:")
print("- farmers")
print("- tokens")
print("- centers")