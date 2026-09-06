import os
import json
import firebase_admin
from firebase_admin import credentials, firestore

# --------------------------------------------------
# Firebase Initialization
# --------------------------------------------------

# Render:
# Firebase service-account JSON ని
# FIREBASE_SERVICE_ACCOUNT environment variable లో ఉంచాలి.
#
# Local:
# firebase-service-account.json file ఉంటే దాన్ని ఉపయోగిస్తుంది.
# ఈ JSON file ని GitHub లో commit చేయకూడదు.

if not firebase_admin._apps:

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


db = firestore.client()


# --------------------------------------------------
# Firestore Collection Helpers
# --------------------------------------------------

def get_db():
    """
    Returns the Firebase Firestore client.
    """
    return db


def get_collection(collection_name):
    """
    Return a Firestore collection reference.
    """
    return db.collection(collection_name)


# --------------------------------------------------
# Generic Helpers
# --------------------------------------------------

def document_to_dict(document):
    """
    Convert Firestore document to Python dictionary.
    """

    if not document.exists:
        return None

    data = document.to_dict() or {}

    # Keep Firestore document ID available
    data["document_id"] = document.id

    return data


def get_document(collection_name, document_id):
    """
    Get one Firestore document.
    """

    doc = (
        db
        .collection(collection_name)
        .document(str(document_id))
        .get()
    )

    return document_to_dict(doc)