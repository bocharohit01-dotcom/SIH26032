import sqlite3
import os
import datetime
import math

DB_PATH = os.path.join(os.path.dirname(__file__), "procurement.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    cursor = conn.cursor()

    # 1. Users Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'FARMER', -- FARMER, OFFICER, ADMIN
        location_name TEXT,
        lat REAL,
        lng REAL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    ''')

    # 2. Procurement Centres Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS centres (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        code TEXT UNIQUE NOT NULL,
        district TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL,
        max_capacity_quintals INTEGER DEFAULT 1000,
        current_load_quintals INTEGER DEFAULT 0,
        avg_processing_mins INTEGER DEFAULT 12,
        operating_hours TEXT DEFAULT '08:00 AM - 06:00 PM',
        status TEXT DEFAULT 'ACTIVE',
        facilities TEXT DEFAULT 'Shade Shed, Weigh Bridge, Moisture Meter, Canteen'
    )
    ''')

    # 3. Time Slots Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS slots (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        centre_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        time_window TEXT NOT NULL,
        max_farmers INTEGER DEFAULT 15,
        booked_farmers INTEGER DEFAULT 0,
        max_capacity_quintals INTEGER DEFAULT 300,
        booked_capacity_quintals INTEGER DEFAULT 0,
        FOREIGN KEY (centre_id) REFERENCES centres (id)
    )
    ''')

    # 4. Bookings / Tokens Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        token_number TEXT UNIQUE NOT NULL,
        farmer_id INTEGER NOT NULL,
        centre_id INTEGER NOT NULL,
        slot_id INTEGER NOT NULL,
        crop_type TEXT NOT NULL,
        estimated_qty INTEGER NOT NULL,
        verified_qty INTEGER DEFAULT NULL,
        quality_grade TEXT DEFAULT NULL,
        total_payout REAL DEFAULT NULL,
        status TEXT DEFAULT 'BOOKED', 
        -- Statuses: BOOKED, CHECKED_IN, QUALITY_CHECK, WEIGHED, PAYMENT_PENDING, COMPLETED, CANCELLED
        queue_position INTEGER DEFAULT 0,
        qr_code_data TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (farmer_id) REFERENCES users (id),
        FOREIGN KEY (centre_id) REFERENCES centres (id),
        FOREIGN KEY (slot_id) REFERENCES slots (id)
    )
    ''')

    # 5. Notifications Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS notifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        farmer_id INTEGER NOT NULL,
        booking_id INTEGER,
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        is_read INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (farmer_id) REFERENCES users (id)
    )
    ''')

    conn.commit()
    seed_data(conn)
    conn.close()

def seed_data(conn):
    cursor = conn.cursor()
    
    # Check if data exists
    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] > 0:
        return # Data already seeded

    print("[INFO] Seeding initial database data...")

    # Seed Users
    users = [
        ("Ramesh Patel", "9876543210", "pass123", "FARMER", "Medak Village, Telangana", 17.9500, 78.2500),
        ("Suresh Reddy", "9876543211", "pass123", "FARMER", "Siddipet Rural, Telangana", 18.1000, 78.8500),
        ("Officer Rajesh Sharma", "9876543220", "officer123", "OFFICER", "Medak Centre #1", 17.9800, 78.2600),
        ("Officer Sunita Rao", "9876543221", "officer123", "OFFICER", "Siddipet Main Yard", 18.1020, 78.8450),
        ("Admin Vikram Singh", "9876543230", "admin123", "ADMIN", "State Agricultural HQ", 17.3850, 78.4867)
    ]
    cursor.executemany('''
    INSERT INTO users (name, phone, password, role, location_name, lat, lng)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', users)

    # Seed Centres
    centres = [
        ("Bhimavaram APMC Agricultural Market Yard", "BVRM-01", "West Godavari", "Undi Road, Near Goods Shed, Bhimavaram", 16.5449, 81.5212, 8500, 2800, 9, "06:30 AM - 06:30 PM", "ACTIVE", "Automated Moisture Tester, Electronic Truck Weighbridge, Farmer Rest Lounge"),
        ("Tadepalligudem Paddy & Grain Hub", "TPG-02", "West Godavari", "K N Road, Tadepalligudem", 16.8333, 81.5333, 9000, 3400, 10, "07:00 AM - 07:00 PM", "ACTIVE", "Express Grain Testing, Digital Token Display"),
        ("Tanuku Agricultural Procurement Yard", "TNK-03", "West Godavari", "Bypass Highway Junction, Tanuku", 16.7583, 81.6788, 7500, 2100, 8, "06:00 AM - 06:00 PM", "ACTIVE", "Moisture Testing Lab, Truck Parking Yard"),
        ("Eluru District Main Grain Complex", "ELR-04", "Eluru", "Fire Station Road, Eluru Town", 16.7107, 81.1042, 10000, 4200, 11, "06:30 AM - 07:30 PM", "ACTIVE", "Digital Weighbridge, Cold Storage Yard"),
        ("Guntur Agricultural Market Committee (APMC)", "GNT-05", "Guntur", "Mirchi Yard Road, Guntur Town", 16.3067, 80.4365, 9500, 4200, 11, "06:30 AM - 06:30 PM", "ACTIVE", "QC Lab, Electronic Scale, Rest Area, Canteen"),
        ("Medak Main Grain Procurement Centre", "MDK-06", "Medak", "NH-44 Market Yard, Medak", 17.9810, 78.2620, 1200, 480, 10, "07:30 AM - 06:30 PM", "ACTIVE", "QC Lab, Electronic Scale, Rest Area, Canteen, Free QC Pre-testing")
    ]
    cursor.executemany('''
    INSERT INTO centres (name, code, district, address, lat, lng, max_capacity_quintals, current_load_quintals, avg_processing_mins, operating_hours, status, facilities)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', centres)

    # Seed Slots for Today & Tomorrow
    today_str = datetime.date.today().isoformat()
    tomorrow_str = (datetime.date.today() + datetime.timedelta(days=1)).isoformat()
    
    time_windows = ["08:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "01:00 PM - 03:00 PM", "03:00 PM - 05:00 PM"]
    
    slot_entries = []
    for centre_id in range(1, 6):
        for date_val in [today_str, tomorrow_str]:
            for tw in time_windows:
                slot_entries.append((centre_id, date_val, tw, 15, 4, 300, 80))
                
    cursor.executemany('''
    INSERT INTO slots (centre_id, date, time_window, max_farmers, booked_farmers, max_capacity_quintals, booked_capacity_quintals)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', slot_entries)

    # Seed Existing Bookings to demonstrate Live Queue
    sample_bookings = [
        ("TK-2026-101", 1, 1, 1, "Paddy (Grade A)", 25, 25, "Grade A+", 56250.0, "COMPLETED", 0, "TK-2026-101"),
        ("TK-2026-102", 2, 1, 1, "Paddy (Common)", 30, 30, "Grade A", 66000.0, "PAYMENT_PENDING", 0, "TK-2026-102"),
        ("TK-2026-103", 1, 1, 1, "Maize", 40, 38, "Grade B", 84360.0, "WEIGHED", 1, "TK-2026-103"),
        ("TK-2026-104", 2, 1, 1, "Paddy (Grade A)", 20, None, None, None, "QUALITY_CHECK", 2, "TK-2026-104"),
        ("TK-2026-105", 1, 1, 1, "Wheat", 15, None, None, None, "CHECKED_IN", 3, "TK-2026-105"),
        ("TK-2026-106", 2, 1, 1, "Paddy (Grade A)", 35, None, None, None, "BOOKED", 4, "TK-2026-106")
    ]
    cursor.executemany('''
    INSERT INTO bookings (token_number, farmer_id, centre_id, slot_id, crop_type, estimated_qty, verified_qty, quality_grade, total_payout, status, queue_position, qr_code_data)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', sample_bookings)

    # Seed Notifications
    notifications = [
        (1, 6, "Slot Confirmed", "Your procurement slot at Medak Main Centre for Paddy (Grade A) is confirmed for 08:00 AM - 10:00 AM.", 0),
        (1, 5, "Approaching Turn Alert", "You are #3 in queue at Medak Centre. Please proceed towards Gate 2.", 0)
    ]
    cursor.executemany('''
    INSERT INTO notifications (farmer_id, booking_id, title, message, is_read)
    VALUES (?, ?, ?, ?, ?)
    ''', notifications)

    conn.commit()
    print("[INFO] Database successfully seeded!")

if __name__ == "__main__":
    init_db()
