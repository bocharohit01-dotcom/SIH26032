/* ==========================================================================
   KisanSeva Main Application Controller & View Router
   ========================================================================== */

/* ---- Toast Notification System (replaces alert/confirm popups) ---- */
const TOAST_ICONS = {
    success: 'fa-circle-check',
    error:   'fa-circle-xmark',
    info:    'fa-circle-info',
    warning: 'fa-triangle-exclamation'
};

function showToast(type, title, message = '', duration = 4000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${TOAST_ICONS[type]} toast-icon"></i>
        <div class="toast-body">
            <div class="toast-title">${title}</div>
            ${message ? `<div class="toast-msg">${message}</div>` : ''}
        </div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("[APP] KisanSeva Intelligent Procurement Platform Loaded.");

    // --- STATE MANAGEMENT ---
    let currentUser = JSON.parse(localStorage.getItem("kisanUser")) || {
        id: 1,
        name: "Ramesh Patel",
        phone: "9876543210",
        role: "FARMER",
        lat: 17.95,
        lng: 78.25,
        location_name: "Medak Village"
    };

    let selectedCompareIds = new Set();
    let currentSelectedCentre = null;
    let activeTokenNumber = localStorage.getItem("kisanActiveToken") || "TK-2026-105";

    // Initialize UI
    updateUserHeader();
    switchView("farmerDash");
    loadFarmerDashboard();
    checkNotifications();

    // --- ROUTING & NAVIGATION ---
    const navButtons = document.querySelectorAll(".nav-link, .mobile-nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetView = btn.getAttribute("data-view");
            if (targetView) switchView(targetView);
        });
    });

    function switchView(viewId) {
        // Highlight active nav
        document.querySelectorAll(".nav-link, .mobile-nav-btn").forEach(btn => {
            if (btn.getAttribute("data-view") === viewId) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Hide all views
        document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));

        // Show target view
        const targetSec = document.getElementById(
            viewId === "farmerDash" ? "viewFarmerDash" :
            viewId === "centreDiscovery" ? "viewCentreDiscovery" :
            viewId === "centreCompare" ? "viewCentreCompare" :
            viewId === "slotBooking" ? "viewSlotBooking" :
            viewId === "liveQueue" ? "viewLiveQueue" :
            viewId === "officerDash" ? "viewOfficerDash" :
            viewId === "adminDash" ? "viewAdminDash" :
            viewId === "auth" ? "viewAuth" : "viewFarmerDash"
        );

        if (targetSec) targetSec.classList.remove("hidden");

        // View load handlers
        if (viewId === "farmerDash") loadFarmerDashboard();
        if (viewId === "centreDiscovery") loadCentresDiscovery();
        if (viewId === "centreCompare") renderComparisonView();
        if (viewId === "liveQueue") loadLiveQueueView();
        if (viewId === "officerDash") loadOfficerDashboard();
        if (viewId === "adminDash") loadAdminAnalytics();
    }

    function updateUserHeader() {
        if (!currentUser) {
            document.getElementById("headerUserName").textContent = "Guest User";
            document.getElementById("headerUserRole").textContent = "PUBLIC";
            document.getElementById("userAvatar").textContent = "GU";
            document.getElementById("authBtnText").textContent = "Login";
            return;
        }

        document.getElementById("headerUserName").textContent = currentUser.name;
        document.getElementById("headerUserRole").textContent = currentUser.role;
        document.getElementById("userAvatar").textContent = currentUser.name.split(" ").map(n => n[0]).join("").toUpperCase();
        document.getElementById("authBtnText").textContent = "Logout";
    }

    // --- AUTH HANDLERS ---
    window.fillDemo = function(phone, pass) {
        document.getElementById("loginPhone").value = phone;
        document.getElementById("loginPassword").value = pass;
    };

    const tabLoginBtn = document.getElementById("tabLoginBtn");
    const tabRegisterBtn = document.getElementById("tabRegisterBtn");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    tabLoginBtn?.addEventListener("click", () => {
        tabLoginBtn.classList.add("active");
        tabRegisterBtn.classList.remove("active");
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    tabRegisterBtn?.addEventListener("click", () => {
        tabRegisterBtn.classList.add("active");
        tabLoginBtn.classList.remove("active");
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Password Eye Icon Toggle Handlers
    const toggleLoginPassBtn = document.getElementById("toggleLoginPassBtn");
    const loginPasswordInput = document.getElementById("loginPassword");
    const loginPassIcon = document.getElementById("loginPassIcon");

    toggleLoginPassBtn?.addEventListener("click", () => {
        const isPass = loginPasswordInput.type === "password";
        loginPasswordInput.type = isPass ? "text" : "password";
        loginPassIcon.className = isPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    });

    const toggleRegPassBtn = document.getElementById("toggleRegPassBtn");
    const regPasswordInput = document.getElementById("regPassword");
    const regPassIcon = document.getElementById("regPassIcon");

    toggleRegPassBtn?.addEventListener("click", () => {
        const isPass = regPasswordInput.type === "password";
        regPasswordInput.type = isPass ? "text" : "password";
        regPassIcon.className = isPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    });

    function showLoginError(msg) {
        const errDiv = document.getElementById('loginErrorMsg');
        const errText = document.getElementById('loginErrorText');
        if (errDiv && errText) {
            errText.textContent = msg;
            errDiv.classList.remove('hidden');
        }
    }

    function clearLoginError() {
        const errDiv = document.getElementById('loginErrorMsg');
        if (errDiv) errDiv.classList.add('hidden');
    }

    loginForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        clearLoginError();
        const phone = document.getElementById("loginPhone").value.trim();
        const pass = document.getElementById("loginPassword").value;
        const submitBtn = loginForm.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

        try {
            const res = await api.login(phone, pass);
            if (res.user) {
                currentUser = res.user;
                localStorage.setItem("kisanUser", JSON.stringify(currentUser));
                updateUserHeader();
                checkNotifications();
                showToast('success', `Welcome, ${currentUser.name}!`, `Logged in as ${currentUser.role}`);

                if (currentUser.role === "OFFICER") switchView("officerDash");
                else if (currentUser.role === "ADMIN") switchView("adminDash");
                else {
                    switchView("farmerDash");
                    loadFarmerDashboard();
                }
            } else {
                showLoginError(res.error || "Incorrect phone number or password. Please try again.");
            }
        } catch (err) {
            showLoginError("Network error. Please check your connection and try again.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Login to Portal <i class="fa-solid fa-arrow-right"></i>';
        }
    });

    // Clear error when user starts typing
    document.getElementById("loginPhone")?.addEventListener("input", clearLoginError);
    document.getElementById("loginPassword")?.addEventListener("input", clearLoginError);

    registerForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("regName").value.trim();
        const phone = document.getElementById("regPhone").value.trim();
        const role = document.getElementById("regRole").value;
        const location_name = document.getElementById("regLocation").value.trim();
        const password = document.getElementById("regPassword").value;
        const submitBtn = registerForm.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating account...';

        try {
            const res = await api.register(name, phone, password, role, location_name);
            if (res.user) {
                currentUser = res.user;
                localStorage.setItem("kisanUser", JSON.stringify(currentUser));
                updateUserHeader();
                checkNotifications();
                showToast('success', `Welcome, ${currentUser.name}!`, 'Account created successfully.');

                if (currentUser.role === "OFFICER") switchView("officerDash");
                else if (currentUser.role === "ADMIN") switchView("adminDash");
                else {
                    switchView("farmerDash");
                    loadFarmerDashboard();
                }
            } else {
                showToast('error', 'Registration Failed', res.error || 'Please check your details and try again.');
            }
        } catch (err) {
            showToast('error', 'Network Error', 'Could not connect to the server.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Create Account <i class="fa-solid fa-user-plus"></i>';
        }
    });

    document.getElementById("authToggleBtn")?.addEventListener("click", () => {
        if (currentUser) {
            currentUser = null;
            localStorage.removeItem("kisanUser");
            localStorage.removeItem("kisanActiveToken");
            activeTokenNumber = null;
            updateUserHeader();
            switchView("auth");
        } else {
            switchView("auth");
        }
    });

    // --- FARMER DASHBOARD ---
    async function loadFarmerDashboard() {
        if (!currentUser) return;
        document.getElementById("welcomeFarmerTitle").textContent = `Welcome Back, ${currentUser.name.split(" ")[0]}!`;

        // Check farmer's active booking
        try {
            const res = await api.getMyBookings(currentUser.id);
            const bookings = res.bookings || [];
            const active = bookings.find(b => b.status !== "COMPLETED" && b.status !== "CANCELLED");

            const tokenSec = document.getElementById("activeTokenSection");
            const tokenWidget = document.getElementById("activeTokenWidget");

            if (active) {
                activeTokenNumber = active.token_number;
                localStorage.setItem("kisanActiveToken", activeTokenNumber);
                tokenSec.classList.remove("hidden");

                tokenWidget.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                        <div>
                            <span style="font-size:12px; font-weight:700; color:var(--primary-emerald); text-transform:uppercase;">${active.crop_type} Delivery Token</span>
                            <h2 style="font-size:28px; color:var(--primary-emerald); font-family:var(--font-heading); margin:4px 0;">${active.token_number}</h2>
                            <p style="font-size:14px; color:var(--text-muted);"><i class="fa-solid fa-warehouse"></i> ${active.centre_name}</p>
                            <p style="font-size:13px; color:var(--text-muted);"><i class="fa-solid fa-clock"></i> ${active.slot_date} | ${active.time_window}</p>
                        </div>
                        <div style="text-align:right;">
                            <span class="badge badge-info" style="font-size:14px; padding:8px 16px;">Status: ${active.status}</span>
                            <div style="margin-top:12px; display:flex; gap:8px; justify-content:flex-end;">
                                <button class="btn btn-outline btn-sm" style="color:var(--accent-red); border-color:var(--accent-red);" onclick="window.cancelActiveBooking('${active.token_number}')">
                                    <i class="fa-solid fa-xmark"></i> Cancel Slot
                                </button>
                                <button class="btn btn-primary btn-sm" onclick="window.viewTokenQueue('${active.token_number}')">
                                    <i class="fa-solid fa-wave-square"></i> Open Live Tracker
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                tokenSec.classList.add("hidden");
            }
        } catch (err) {
            console.error("Dashboard error", err);
        }
    }

    // Farmer Slot Cancellation Handler
    window.cancelActiveBooking = async function(tokenNum) {
        // Custom inline confirmation (no browser confirm())
        const confirmed = await showConfirmDialog(
            'Cancel Procurement Slot?',
            `Token <strong>${tokenNum}</strong> will be cancelled and your reserved slot will be released for other farmers.`,
            'Yes, Cancel Slot',
            'Keep My Slot'
        );
        if (!confirmed) return;

        try {
            const res = await api.cancelBooking(tokenNum);
            if (res.message) {
                showToast('success', 'Slot Cancelled', `Token ${tokenNum} has been cancelled successfully.`);
                if (activeTokenNumber === tokenNum) {
                    activeTokenNumber = null;
                    localStorage.removeItem("kisanActiveToken");
                }
                loadFarmerDashboard();
                checkNotifications();
                switchView("farmerDash");
            } else {
                showToast('error', 'Cancellation Failed', res.error || 'Failed to cancel booking.');
            }
        } catch (err) {
            showToast('error', 'Network Error', 'Could not reach the server. Please try again.');
        }
    };

    window.viewTokenQueue = function(tokenNum) {
        activeTokenNumber = tokenNum;
        localStorage.setItem("kisanActiveToken", activeTokenNumber);
        switchView("liveQueue");
    };

    document.getElementById("dashBookSlotBtn")?.addEventListener("click", () => switchView("centreDiscovery"));
    document.getElementById("dashFindCentresBtn")?.addEventListener("click", () => switchView("centreDiscovery"));
    document.getElementById("cardFindCentre")?.addEventListener("click", () => switchView("centreDiscovery"));
    document.getElementById("cardCompareCentre")?.addEventListener("click", () => switchView("centreCompare"));
    document.getElementById("cardLiveQueue")?.addEventListener("click", () => switchView("liveQueue"));

    // --- CENTRE DISCOVERY & SMART RECOMMENDATION ---
    const radiusFilter = document.getElementById("radiusFilter");
    const radiusVal = document.getElementById("radiusVal");
    const sortBySelect = document.getElementById("sortBy");

    radiusFilter?.addEventListener("input", (e) => {
        radiusVal.textContent = `${e.target.value} km`;
        loadCentresDiscovery();
    });

    sortBySelect?.addEventListener("change", loadCentresDiscovery);

    async function loadCentresDiscovery() {
        const container = document.getElementById("centresListContainer");
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:40px;"><i class="fa-solid fa-spinner fa-spin"></i> Calculating smart recommendations...</p>`;

        const maxDist = radiusFilter ? radiusFilter.value : 50;
        const lat = currentUser ? currentUser.lat : 17.95;
        const lng = currentUser ? currentUser.lng : 78.25;

        try {
            const res = await api.recommendCentres(lat, lng, maxDist);
            let centres = res.recommended || [];

            // Apply custom sort if requested
            const sortMode = sortBySelect ? sortBySelect.value : "score";
            if (sortMode === "wait") centres.sort((a, b) => a.est_wait_mins - b.est_wait_mins);
            if (sortMode === "distance") centres.sort((a, b) => a.distance_km - b.distance_km);
            if (sortMode === "capacity") centres.sort((a, b) => a.capacity_pct - b.capacity_pct);

            if (centres.length === 0) {
                container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;" class="glass-panel">
                    <h3>No centres found within ${maxDist} km radius</h3>
                    <p>Try expanding your search distance range.</p>
                </div>`;
                return;
            }

            container.innerHTML = centres.map(c => {
                const isSelected = selectedCompareIds.has(c.id);
                return `
                <div class="centre-card glass-panel">
                    <span class="centre-badge-tag">${c.tag}</span>
                    <div>
                        <h3 class="centre-title">${c.name}</h3>
                        <p class="centre-address"><i class="fa-solid fa-location-dot"></i> ${c.address} (${c.district})</p>

                        <div class="metrics-strip">
                            <div>
                                <span class="m-val-bold">${c.distance_km} km</span>
                                <span class="m-sublbl">Distance</span>
                            </div>
                            <div>
                                <span class="m-val-bold" style="color:var(--primary-emerald);">${c.active_queue_length} Farmers</span>
                                <span class="m-sublbl">In Queue</span>
                            </div>
                            <div>
                                <span class="m-val-bold" style="color:var(--accent-amber);">${c.est_wait_mins} Mins</span>
                                <span class="m-sublbl">Est Wait</span>
                            </div>
                        </div>

                        <div style="margin-bottom:6px; display:flex; justify-content:space-between; font-size:12px; font-weight:600;">
                            <span>Daily Capacity Utilization</span>
                            <span>${c.capacity_pct}% (${c.current_load_quintals} / ${c.max_capacity_quintals} Qtl)</span>
                        </div>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${Math.min(c.capacity_pct, 100)}%; background: ${c.capacity_pct > 80 ? '#dc2626' : c.capacity_pct > 60 ? '#d97706' : '#059669'};"></div>
                        </div>
                    </div>

                    <div class="centre-card-footer">
                        <button class="btn btn-outline btn-sm" onclick="window.toggleCompare(${c.id})">
                            <i class="fa-solid ${isSelected ? 'fa-square-check' : 'fa-square'}"></i> ${isSelected ? 'Selected' : 'Compare'}
                        </button>
                        <button class="btn btn-primary btn-sm" style="flex:1;" onclick="window.startBooking(${c.id}, '${escapeHtml(c.name)}')">
                            Book Slot <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                `;
            }).join("");

        } catch (err) {
            container.innerHTML = `<p style="grid-column:1/-1; color:red; text-align:center;">Failed to load centres.</p>`;
        }
    }

    window.toggleCompare = function(id) {
        if (selectedCompareIds.has(id)) {
            selectedCompareIds.delete(id);
        } else {
            if (selectedCompareIds.size >= 3) {
                showToast('warning', 'Compare Limit Reached', 'You can compare up to 3 centres at a time.');
                return;
            }
            selectedCompareIds.add(id);
        }
        document.getElementById("compareCount").textContent = selectedCompareIds.size;
        loadCentresDiscovery();
    };

    document.getElementById("toggleCompareBtn")?.addEventListener("click", () => {
        if (selectedCompareIds.size === 0) {
            showToast('warning', 'No Centres Selected', 'Please select at least one centre to compare.');
            return;
        }
        switchView("centreCompare");
    });

    // --- CENTRE COMPARISON VIEW ---
    async function renderComparisonView() {
        const wrapper = document.getElementById("comparisonTableWrapper");
        if (selectedCompareIds.size === 0) {
            wrapper.innerHTML = `<p style="text-align:center; padding:40px;">No centres selected for comparison. Please go back to Discovery and select centres.</p>`;
            return;
        }

        wrapper.innerHTML = `<p style="text-align:center; padding:40px;"><i class="fa-solid fa-spinner fa-spin"></i> Loading comparison data...</p>`;

        try {
            const res = await api.compareCentres(Array.from(selectedCompareIds));
            const items = res.comparison || [];

            wrapper.innerHTML = `
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Parameter / Feature</th>
                            ${items.map(c => `<th>${c.name}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Distance from You</strong></td>
                            ${items.map(c => `<td><strong>${c.distance_km} km</strong></td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Live Queue Length</strong></td>
                            ${items.map(c => `<td style="color:var(--primary-emerald); font-weight:700;">${c.active_queue_length} Farmers</td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Est. Waiting Time</strong></td>
                            ${items.map(c => `<td style="color:var(--accent-amber); font-weight:700;">${c.est_wait_mins} Mins</td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Capacity Load</strong></td>
                            ${items.map(c => `<td>${c.capacity_pct}% (${c.current_load_quintals}/${c.max_capacity_quintals} Qtl)</td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Avg Processing Speed</strong></td>
                            ${items.map(c => `<td>${c.avg_processing_mins} Mins / Farmer</td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Operating Hours</strong></td>
                            ${items.map(c => `<td>${c.operating_hours}</td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Available Facilities</strong></td>
                            ${items.map(c => `<td><small>${c.facilities}</small></td>`).join("")}
                        </tr>
                        <tr>
                            <td><strong>Action</strong></td>
                            ${items.map(c => `
                                <td>
                                    <button class="btn btn-primary btn-sm" onclick="window.startBooking(${c.id}, '${escapeHtml(c.name)}')">
                                        Book Here
                                    </button>
                                </td>
                            `).join("")}
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (err) {
            wrapper.innerHTML = `<p style="color:red; text-align:center;">Error rendering comparison table.</p>`;
        }
    }

    document.getElementById("backToDiscoveryBtn")?.addEventListener("click", () => switchView("centreDiscovery"));

    // --- SLOT BOOKING ---
    window.startBooking = async function(centreId, centreName) {
        currentSelectedCentre = { id: centreId, name: centreName };
        switchView("slotBooking");

        document.getElementById("bookingCentreSubhead").textContent = `Selected: ${centreName}`;
        document.getElementById("bookingCentreSummary").innerHTML = `
            <h4><i class="fa-solid fa-warehouse"></i> ${centreName}</h4>
            <p style="font-size:13px; color:var(--text-muted); margin-top:4px;">Please pick a slot below to issue your digital procurement token.</p>
        `;

        const dateInput = document.getElementById("bookDate");
        dateInput.value = new Date().toISOString().split("T")[0];

        loadSlots(centreId, dateInput.value);
    };

    document.getElementById("bookDate")?.addEventListener("change", (e) => {
        if (currentSelectedCentre) loadSlots(currentSelectedCentre.id, e.target.value);
    });

    async function loadSlots(centreId, dateStr) {
        const grid = document.getElementById("slotsSelectorGrid");
        grid.innerHTML = `<p style="grid-column:1/-1;"><i class="fa-solid fa-spinner fa-spin"></i> Fetching available time slots...</p>`;

        try {
            const res = await api.getSlots(centreId, dateStr);
            const slots = res.slots || [];

            if (slots.length === 0) {
                grid.innerHTML = `<p style="grid-column:1/-1; color:red;">No slots created for this date.</p>`;
                return;
            }

            grid.innerHTML = slots.map((s, idx) => {
                const isFull = s.booked_farmers >= s.max_farmers;
                return `
                <div style="border:1px solid var(--glass-border); padding:14px; border-radius:var(--radius-sm); background:${isFull ? '#f1f5f9' : 'white'};">
                    <label style="display:flex; align-items:center; gap:10px; cursor:${isFull ? 'not-allowed' : 'pointer'};">
                        <input type="radio" name="selectedSlot" value="${s.id}" ${idx === 0 && !isFull ? 'checked' : ''} ${isFull ? 'disabled' : ''}>
                        <div>
                            <strong>${s.time_window}</strong>
                            <div style="font-size:12px; color:${isFull ? 'red' : 'var(--text-muted)'}">
                                ${isFull ? 'FULLY BOOKED' : `${s.max_farmers - s.booked_farmers} Slots Left (${s.booked_farmers}/${s.max_farmers} booked)`}
                            </div>
                        </div>
                    </label>
                </div>
                `;
            }).join("");
        } catch (err) {
            grid.innerHTML = `<p style="grid-column:1/-1; color:red;">Error loading slots.</p>`;
        }
    }

    document.getElementById("slotBookingForm")?.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!currentUser) {
            showToast('warning', 'Login Required', 'Please login first to book a slot.');
            switchView("auth");
            return;
        }

        const cropType = document.getElementById("bookCropType").value;
        const estQty = document.getElementById("bookQty").value;
        const slotRadio = document.querySelector('input[name="selectedSlot"]:checked');

        if (!slotRadio) {
            showToast('warning', 'No Slot Selected', 'Please select a time window slot.');
            return;
        }

        try {
            const res = await api.createBooking(currentUser.id, currentSelectedCentre.id, slotRadio.value, cropType, estQty);
            if (res.booking) {
                showToast('success', 'Slot Booked!', `Your token number is ${res.booking.token_number}`);
                activeTokenNumber = res.booking.token_number;
                localStorage.setItem("kisanActiveToken", activeTokenNumber);
                switchView("liveQueue");
            } else {
                showToast('error', 'Booking Failed', res.error || 'Could not complete booking.');
            }
        } catch (err) {
            showToast('error', 'Network Error', 'Error creating booking. Please try again.');
        }
    });

    document.getElementById("cancelBookingBtn")?.addEventListener("click", () => switchView("centreDiscovery"));

    // --- LIVE QUEUE & JOURNEY TRACKER ---
    async function loadLiveQueueView() {
        const passCard = document.getElementById("digitalTokenPass");
        const timeline = document.getElementById("milestonesTimeline");

        if (!activeTokenNumber) {
            passCard.innerHTML = `<p>No active token found. Please book a slot first.</p>`;
            return;
        }

        try {
            const res = await api.getQueueStatus(activeTokenNumber);
            if (res.error) {
                passCard.innerHTML = `<p style="color:red;">Token details not found.</p>`;
                return;
            }

            const b = res.booking;

            // Render Digital Token Pass
            passCard.innerHTML = `
                <span class="live-pulse-tag"><i class="fa-solid fa-circle"></i> Official Procurement Pass</span>
                <div class="token-badge-number">${b.token_number}</div>
                <div class="qr-placeholder">
                    <!-- Dynamic SVG Barcode/QR simulation -->
                    <svg width="120" height="120" viewBox="0 0 100 100">
                        <rect width="100" height="100" fill="#ffffff"/>
                        <rect x="10" y="10" width="30" height="30" fill="#059669"/>
                        <rect x="60" y="10" width="30" height="30" fill="#059669"/>
                        <rect x="10" y="60" width="30" height="30" fill="#059669"/>
                        <rect x="20" y="20" width="10" height="10" fill="#ffffff"/>
                        <rect x="70" y="20" width="10" height="10" fill="#ffffff"/>
                        <rect x="20" y="70" width="10" height="10" fill="#ffffff"/>
                        <rect x="45" y="45" width="20" height="20" fill="#0f172a"/>
                        <rect x="70" y="70" width="15" height="15" fill="#059669"/>
                    </svg>
                </div>
                <div style="text-align:left; background:white; padding:14px; border-radius:var(--radius-sm); border:1px solid var(--glass-border); margin-top:14px;">
                    <p style="font-size:13px; margin-bottom:4px;"><strong>Farmer:</strong> ${currentUser ? currentUser.name : 'Ramesh Patel'}</p>
                    <p style="font-size:13px; margin-bottom:4px;"><strong>Centre:</strong> ${b.centre_name}</p>
                    <p style="font-size:13px; margin-bottom:4px;"><strong>Crop:</strong> ${b.crop_type} (${b.estimated_qty} Qtl)</p>
                    <p style="font-size:13px;"><strong>Slot:</strong> ${b.time_window}</p>
                </div>
                <button class="btn btn-outline btn-block btn-sm" style="margin-top:14px;" onclick="window.print()">
                    <i class="fa-solid fa-print"></i> Print Digital Pass
                </button>
                ${b.status !== 'COMPLETED' && b.status !== 'CANCELLED' ? `
                    <button class="btn btn-outline btn-block btn-sm" style="margin-top:8px; color:var(--accent-red); border-color:var(--accent-red);" onclick="window.cancelActiveBooking('${b.token_number}')">
                        <i class="fa-solid fa-xmark"></i> Cancel Slot Booking
                    </button>
                ` : ''}
            `;

            // Render Queue Metrics
            document.getElementById("servingTokenVal").textContent = res.currently_serving_token;
            document.getElementById("tokensAheadVal").textContent = res.tokens_ahead;
            document.getElementById("estWaitVal").textContent = `${res.est_wait_mins} Mins`;

            // Approaching Alert Banner
            const banner = document.getElementById("approachingAlertBanner");
            if (res.tokens_ahead <= 3 && b.status !== "COMPLETED") {
                banner.classList.remove("hidden");
            } else {
                banner.classList.add("hidden");
            }

            // Milestone Tracker Timeline
            const milestones = res.milestones || [];
            timeline.innerHTML = milestones.map(m => `
                <div class="m-step-item ${m.done ? 'completed' : ''}">
                    <div class="m-step-dot">${m.done ? '<i class="fa-solid fa-check"></i>' : m.step}</div>
                    <div style="font-weight:700; font-size:14px;">${m.label}</div>
                    <div style="font-size:12px; color:var(--text-muted);">
                        ${m.done ? 'Milestone Completed' : 'Pending Action'}
                    </div>
                </div>
            `).join("");

        } catch (err) {
            console.error("Queue load error", err);
        }
    }

    document.getElementById("refreshQueueBtn")?.addEventListener("click", loadLiveQueueView);
    document.getElementById("backToDashBtn")?.addEventListener("click", () => switchView("farmerDash"));

    // --- OFFICER DASHBOARD ---
    async function loadOfficerDashboard() {
        const tbody = document.getElementById("officerQueueTableBody");
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px;"><i class="fa-solid fa-spinner fa-spin"></i> Fetching active queue...</td></tr>`;

        try {
            const res = await api.getOfficerQueue(1); // Default Centre #1
            const queue = res.queue || [];
            document.getElementById("queueTotalBadge").textContent = `${queue.length} Active Tokens`;

            if (queue.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px;">No active tokens in queue today.</td></tr>`;
                return;
            }

            tbody.innerHTML = queue.map(q => `
                <tr>
                    <td><strong>${q.token_number}</strong></td>
                    <td>${q.farmer_name}<br><small style="color:var(--text-muted);">${q.farmer_phone}</small></td>
                    <td>${q.crop_type}</td>
                    <td>${q.estimated_qty} Qtl</td>
                    <td><span class="badge ${q.status === 'COMPLETED' ? 'badge-success' : 'badge-warning'}">${q.status}</span></td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="window.openOfficerModal('${q.token_number}', '${q.status}', '${q.farmer_name}', '${q.crop_type}', ${q.estimated_qty})">
                            Manage Workflow
                        </button>
                    </td>
                </tr>
            `).join("");
        } catch (err) {
            tbody.innerHTML = `<tr><td colspan="6" style="color:red; text-align:center;">Failed to load officer queue.</td></tr>`;
        }
    }

    document.getElementById("refreshOfficerQueueBtn")?.addEventListener("click", loadOfficerDashboard);

    window.openOfficerModal = function(tokenNum, currentStatus, farmerName, cropType, estQty) {
        const modal = document.getElementById("officerModalBackdrop");
        const body = document.getElementById("officerModalContent");

        modal.classList.remove("hidden");

        body.innerHTML = `
            <div style="margin-bottom:16px;">
                <h4>Token: ${tokenNum}</h4>
                <p style="font-size:13px; color:var(--text-muted);">Farmer: ${farmerName} | Crop: ${cropType} (${estQty} Qtl)</p>
                <p style="font-size:13px;">Current Stage: <strong>${currentStatus}</strong></p>
            </div>

            <form id="officerAdvanceForm">
                <div class="form-group">
                    <label>Advance to Stage</label>
                    <select id="nextStageSelect" required>
                        <option value="CHECKED_IN" ${currentStatus === 'BOOKED' ? 'selected' : ''}>1. Gate Check-In Verified</option>
                        <option value="QUALITY_CHECK" ${currentStatus === 'CHECKED_IN' ? 'selected' : ''}>2. Quality Testing Completed</option>
                        <option value="WEIGHED" ${currentStatus === 'QUALITY_CHECK' ? 'selected' : ''}>3. Net Weight Verification</option>
                        <option value="COMPLETED" ${currentStatus === 'WEIGHED' ? 'selected' : ''}>4. Complete Procurement & Payout</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Verified Net Quantity (Quintals)</label>
                    <input type="number" id="modVerifiedQty" value="${estQty}">
                </div>

                <div class="form-group">
                    <label>Quality Inspection Grade</label>
                    <select id="modQualityGrade">
                        <option value="Grade A+">Grade A+ (Premium MSP + 5% Bonus)</option>
                        <option value="Grade A">Grade A (Standard MSP ₹2,250/Qtl)</option>
                        <option value="Grade B">Grade B (Fair Average Quality)</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-success btn-block">
                    Update Procurement Stage <i class="fa-solid fa-check"></i>
                </button>
            </form>
        `;

        document.getElementById("officerAdvanceForm")?.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nextStatus = document.getElementById("nextStageSelect").value;
            const verifiedQty = document.getElementById("modVerifiedQty").value;
            const qualityGrade = document.getElementById("modQualityGrade").value;

            try {
                const res = await api.advanceToken(tokenNum, nextStatus, verifiedQty, qualityGrade);
                if (res.message) {
                    showToast('success', 'Stage Updated', res.message);
                } else {
                    showToast('error', 'Update Failed', res.error || 'Could not update stage.');
                }
                modal.classList.add("hidden");
                loadOfficerDashboard();
            } catch (err) {
                showToast('error', 'Network Error', 'Failed to advance token stage.');
            }
        });
    };

    document.getElementById("closeOfficerModalBtn")?.addEventListener("click", () => {
        document.getElementById("officerModalBackdrop").classList.add("hidden");
    });

    document.getElementById("officerSearchTokenBtn")?.addEventListener("click", () => {
        const query = document.getElementById("officerScanInput").value.trim();
        if (query) {
            window.openOfficerModal(query, "BOOKED", "Farmer", "Paddy", 25);
        }
    });

    // --- ADMIN DASHBOARD & ANALYTICS ---
    async function loadAdminAnalytics() {
        try {
            const res = await api.getAdminAnalytics();
            document.getElementById("adminTotalFarmers").textContent = res.total_farmers || 0;
            document.getElementById("adminTotalCentres").textContent = res.total_centres || 0;
            document.getElementById("adminTotalTonnage").textContent = `${res.total_tonnage_procured_quintals || 0} Qtl`;
            document.getElementById("adminTotalPayout").textContent = `₹ ${(res.total_payout_distributed / 10000000).toFixed(2)} Cr`;

            // Capacity Bars
            const capBars = document.getElementById("adminCapacityBars");
            const loads = res.centre_loads || [];

            capBars.innerHTML = loads.map(l => `
                <div style="margin-bottom:14px;">
                    <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:600; margin-bottom:4px;">
                        <span>${l.name} (${l.district})</span>
                        <span>${l.utilization_pct}% Load</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width:${Math.min(l.utilization_pct, 100)}%; background:${l.utilization_pct > 80 ? '#dc2626' : '#059669'};"></div>
                    </div>
                </div>
            `).join("");

            // Bottlenecks
            const bottlenecks = document.getElementById("adminBottlenecks");
            const sb = res.status_breakdown || [];
            bottlenecks.innerHTML = sb.map(s => `
                <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--glass-border);">
                    <span>Stage: <strong>${s.status}</strong></span>
                    <span class="badge badge-info">${s.count} Tokens</span>
                </div>
            `).join("");

        } catch (err) {
            console.error("Admin analytics error", err);
        }
    }

    // --- NOTIFICATION SYSTEM ---
    async function checkNotifications() {
        if (!currentUser) return;
        try {
            const res = await api.getNotifications(currentUser.id);
            const notifs = res.notifications || [];
            const badge = document.getElementById("notifBadge");
            const list = document.getElementById("notifList");

            if (notifs.length > 0) {
                badge.textContent = notifs.length;
                badge.classList.remove("hidden");

                list.innerHTML = notifs.map(n => `
                    <div class="notif-item">
                        <h5>${n.title}</h5>
                        <p>${n.message}</p>
                        <small style="color:var(--text-light); font-size:10px;">${n.created_at || 'Just now'}</small>
                    </div>
                `).join("");
            } else {
                badge.classList.add("hidden");
                list.innerHTML = `<p class="empty-state">No new notifications</p>`;
            }
        } catch (err) {
            console.error("Notification check error", err);
        }
    }

    const notifBtn = document.getElementById("notifBtn");
    const notifPanel = document.getElementById("notificationPanel");

    notifBtn?.addEventListener("click", () => {
        notifPanel.classList.toggle("hidden");
    });

    document.getElementById("closeNotifBtn")?.addEventListener("click", () => {
        notifPanel.classList.add("hidden");
    });

    function escapeHtml(str) {
        return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    }

    // ---- Custom Confirm Dialog (replaces browser confirm()) ----
    function showConfirmDialog(title, bodyHtml, confirmText = 'Confirm', cancelText = 'Cancel') {
        return new Promise((resolve) => {
            // Remove existing dialog if any
            const existing = document.getElementById('customConfirmDialog');
            if (existing) existing.remove();

            const overlay = document.createElement('div');
            overlay.id = 'customConfirmDialog';
            overlay.style.cssText = `
                position: fixed; inset: 0; background: rgba(15,23,42,0.55);
                backdrop-filter: blur(4px); display: flex; align-items: center;
                justify-content: center; z-index: 9998;
            `;

            overlay.innerHTML = `
                <div style="background:white; border-radius:16px; padding:32px 28px;
                    max-width:420px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.2);">
                    <div style="font-size:22px; margin-bottom:8px;">⚠️ ${title}</div>
                    <p style="font-size:14px; color:#475569; margin-bottom:24px; line-height:1.6;">${bodyHtml}</p>
                    <div style="display:flex; gap:12px; justify-content:flex-end;">
                        <button id="confirmDialogCancel" style="padding:10px 20px; border:1px solid #e2e8f0;
                            border-radius:8px; background:white; font-weight:600; cursor:pointer;
                            font-size:14px;">${cancelText}</button>
                        <button id="confirmDialogOk" style="padding:10px 20px; border:none;
                            border-radius:8px; background:#dc2626; color:white; font-weight:600;
                            cursor:pointer; font-size:14px;">${confirmText}</button>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);

            overlay.querySelector('#confirmDialogOk').addEventListener('click', () => {
                overlay.remove(); resolve(true);
            });
            overlay.querySelector('#confirmDialogCancel').addEventListener('click', () => {
                overlay.remove(); resolve(false);
            });
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) { overlay.remove(); resolve(false); }
            });
        });
    }
});
