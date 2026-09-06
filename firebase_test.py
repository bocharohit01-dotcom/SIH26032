import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("firebase-service-account.json")

firebase_admin.initialize_app(cred)

db = firestore.client()

print("Firebase connected successfully!")
test_ref = db.collection("test").document("connection_test")
test_ref.set({"status": "connected"})
print("Test document created in Firestore!")