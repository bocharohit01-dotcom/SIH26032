from database import get_all_documents, create_user
from database import get_db


DISTRICTS = [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Anantapuramu",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Konaseema",
    "Krishna",
    "Kurnool",
    "Manyam",
    "Nandyal",
    "NTR",
    "Palnadu",
    "Prakasam",
    "SPS Nellore",
    "Sri Sathya Sai",
    "Srikakulam",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "YSR Kadapa",
    "West Godavari",
]


# Existing districts already represented in Firestore.
# Do NOT create another prototype centre for these.
EXISTING_DISTRICTS = {
    "West Godavari",
    "Eluru",
    "Guntur",
}


def next_centre_id():
    centres = get_all_documents("centres")

    ids = []

    for centre in centres:
        try:
            ids.append(int(centre.get("id", 0)))
        except (ValueError, TypeError):
            pass

    return max(ids, default=0) + 1


def seed_missing_districts():

    db = get_db()

    existing_centres = get_all_documents("centres")

    existing_districts = {
        str(c.get("district", "")).strip()
        for c in existing_centres
    }

    next_id = next_centre_id()

    for district in DISTRICTS:

        if district in existing_districts:
            print(
                f"SKIP: {district} already exists"
            )
            continue

        code = (
            "PS"
            + str(next_id).zfill(3)
        )

        centre = {
            "id": next_id,
            "code": code,
            "name": f"{district} Prototype Procurement Centre",
            "district": district,
            "address": f"{district} Prototype Centre",

            # Prototype coordinates.
            # Replace with verified centre coordinates later.
            "lat": 16.0000,
            "lng": 80.0000,

            "operating_hours": "09:00 AM - 05:00 PM",
            "status": "OPEN",

            "avg_processing_mins": 15,

            "max_capacity_quintals": 1000,
            "current_load_quintals": 0,

            "facilities": [
                "Weighing",
                "Quality Testing"
            ],

            "prototype": True
        }

        db.collection("centres").document(
            str(next_id)
        ).set(centre)

        print(
            f"CREATED: {district} -> {code}"
        )

        next_id += 1


if __name__ == "__main__":
    seed_missing_districts()
    print("\nCentre seeding completed.")