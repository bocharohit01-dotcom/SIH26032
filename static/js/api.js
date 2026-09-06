/* ==========================================================================
   KisanSeva API Service Module
   ========================================================================== */

const API_BASE = ""; // Relative paths serve from current origin

const api = {
    async login(phone, password) {
        const res = await fetch(`${API_BASE}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone, password })
        });
        return await res.json();
    },

    async register(name, phone, password, role, location_name) {
        const res = await fetch(`${API_BASE}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, password, role, location_name })
        });
        return await res.json();
    },

    async getCentres() {
        const res = await fetch(`${API_BASE}/api/centres`);
        return await res.json();
    },

    async recommendCentres(lat = 17.95, lng = 78.25, maxDistance = 50) {
        const res = await fetch(`${API_BASE}/api/centres/recommend?lat=${lat}&lng=${lng}&max_distance=${maxDistance}`);
        return await res.json();
    },

    async compareCentres(ids, lat = 17.95, lng = 78.25) {
        const res = await fetch(`${API_BASE}/api/centres/compare`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids, lat, lng })
        });
        return await res.json();
    },

    async getSlots(centreId, dateStr) {
        const res = await fetch(`${API_BASE}/api/slots?centre_id=${centreId}&date=${dateStr}`);
        return await res.json();
    },

    async createBooking(farmerId, centreId, slotId, cropType, estimatedQty) {
        const res = await fetch(`${API_BASE}/api/bookings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                farmer_id: farmerId,
                centre_id: centreId,
                slot_id: slotId,
                crop_type: cropType,
                estimated_qty: estimatedQty
            })
        });
        return await res.json();
    },

    async getMyBookings(farmerId) {
        const res = await fetch(`${API_BASE}/api/bookings/my?farmer_id=${farmerId}`);
        return await res.json();
    },

    async cancelBooking(tokenNumber) {
        const res = await fetch(`${API_BASE}/api/bookings/cancel`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token_number: tokenNumber })
        });
        return await res.json();
    },

    async getQueueStatus(tokenNumber) {
        const res = await fetch(`${API_BASE}/api/queue/status/${tokenNumber}`);
        return await res.json();
    },

    async getNotifications(farmerId) {
        const res = await fetch(`${API_BASE}/api/notifications/${farmerId}`);
        return await res.json();
    },

    async getOfficerQueue(centreId = 1) {
        const res = await fetch(`${API_BASE}/api/officer/queue?centre_id=${centreId}`);
        return await res.json();
    },

    async advanceToken(tokenNumber, nextStatus, verifiedQty = null, qualityGrade = null, totalPayout = null) {
        const res = await fetch(`${API_BASE}/api/officer/advance-token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token_number: tokenNumber,
                next_status: nextStatus,
                verified_qty: verifiedQty,
                quality_grade: qualityGrade,
                total_payout: totalPayout
            })
        });
        return await res.json();
    },

    async getAdminAnalytics() {
        const res = await fetch(`${API_BASE}/api/admin/analytics`);
        return await res.json();
    }
};

window.api = api;
