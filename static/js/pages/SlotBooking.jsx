// Page 7: Slot Booking Component with Dynamic Mandi Yard & District Selector

window.SlotBooking = function SlotBooking({ navigateTo, centre, centres, onSelectCentre, slots, onCreateBooking, user }) {
  const centresList = centres || (window.DEMO_DATA && window.DEMO_DATA.centres) || [];
  const selectedCentre = centre || centresList[0] || {};

  const [cropType, setCropType] = React.useState('Paddy (Grade A)');
  const [estimatedQty, setEstimatedQty] = React.useState(25);
  const [slotDate, setSlotDate] = React.useState('2026-09-06');
  const [selectedSlotId, setSelectedSlotId] = React.useState(101);

  const handleCentreChange = (e) => {
    const chosenId = Number(e.target.value);
    const found = centresList.find(c => c.id === chosenId);
    if (found && onSelectCentre) {
      onSelectCentre(found);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const availableSlots = slots || (window.DEMO_DATA && window.DEMO_DATA.slots) || [];
    const chosenSlot = availableSlots.find(s => s.id === selectedSlotId) || availableSlots[0] || { timeWindow: "08:00 AM - 10:00 AM" };

    const newBooking = {
      id: Date.now(),
      tokenNumber: `TK-2026-${Math.floor(100 + Math.random() * 900)}`,
      farmerName: (user && user.name) || 'Ramesh Patel',
      farmerPhone: (user && user.phone) || '9876543210',
      farmerVillage: (user && user.village) || 'Bhimavaram Town, West Godavari',
      district: selectedCentre.district || 'West Godavari',
      centreId: selectedCentre.id || 101,
      centreName: selectedCentre.name || 'Bhimavaram APMC Agricultural Market Yard',
      cropType: cropType,
      estimatedQty: Number(estimatedQty),
      verifiedQty: null,
      qualityGrade: null,
      mspRate: 2300,
      totalPayout: null,
      slotDate: slotDate,
      timeWindow: chosenSlot.timeWindow,
      status: 'BOOKED',
      queuePosition: (selectedCentre.activeQueueLength || 1) + 1,
      tokensAhead: selectedCentre.activeQueueLength || 1,
      currentlyServing: 'TK-2026-104',
      estWaitMins: ((selectedCentre.activeQueueLength || 1) + 1) * (selectedCentre.avgProcessingMins || 10),
      qrCode: `KisanSeva-TK-2026-NEW-${Date.now()}`
    };

    if (onCreateBooking) onCreateBooking(newBooking);
    navigateTo('bookingConfirmation');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif flex items-center gap-2">
            <i className="fa-solid fa-calendar-check text-emerald-600"></i> Book Delivery Slot
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Reserve a 2-hour arrival window to skip long waiting queues at your regional mandi.
          </p>
        </div>
        <button
          onClick={() => navigateTo('centreListing')}
          className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 shadow-sm transition"
        >
          <i className="fa-solid fa-compass mr-1"></i> Browse All Mandis
        </button>
      </div>

      {/* Selected Yard Summary Box */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-700 p-5 rounded-2xl border border-emerald-600 shadow-lg text-white flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="text-[11px] text-emerald-200 font-bold uppercase tracking-wider">
            📍 Selected Regional Mandi Yard
          </div>
          <div className="text-xl font-black font-serif mt-0.5">{selectedCentre.name}</div>
          <div className="text-xs text-emerald-100 flex items-center gap-3 mt-1 flex-wrap font-medium">
            <span>🏛️ District: <strong>{selectedCentre.district}</strong></span>
            <span>•</span>
            <span>📍 <strong>{selectedCentre.distanceKm} km</strong> away</span>
            <span>•</span>
            <span>⏱️ <strong>{(selectedCentre.activeQueueLength || 0) * (selectedCentre.avgProcessingMins || 10)} Mins</strong> Wait</span>
          </div>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur text-white flex items-center justify-center text-2xl border border-white/30 shadow">
          🌾
        </div>
      </div>

      {/* Booking Form Card */}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        
        {/* MANDI LOCATION SELECTOR */}
        <div className="bg-emerald-50/80 border border-emerald-200/80 p-4 rounded-2xl">
          <label className="block text-xs font-extrabold text-emerald-900 mb-1.5 uppercase tracking-wider">
            <i className="fa-solid fa-building-wheat text-emerald-600 mr-1.5"></i>
            Change Mandi / Procurement Centre Location <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedCentre.id || ''}
            onChange={handleCentreChange}
            className="w-full px-4 py-3 bg-white border border-emerald-300 rounded-xl text-slate-900 text-sm font-bold focus:outline-none focus:border-emerald-600 shadow-sm"
          >
            {centresList.map(c => (
              <option key={c.id} value={c.id}>
                📍 {c.name} — {c.district} ({c.distanceKm} km away)
              </option>
            ))}
          </select>
          <p className="text-[11px] text-emerald-700 mt-1 font-semibold">
            Showing nearby centres sorted for your district.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Crop Type Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Select Crop Type <span className="text-emerald-600">*</span>
            </label>
            <select
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-500"
            >
              <option value="Paddy (Grade A)">🌾 Paddy (Grade A) - ₹ 2,300/Qtl</option>
              <option value="Paddy (Common)">🌾 Paddy (Common) - ₹ 2,183/Qtl</option>
              <option value="Wheat (Grade 1)">🌾 Wheat (Grade 1) - ₹ 2,275/Qtl</option>
              <option value="Cotton (Long Staple)">🌱 Cotton (Long Staple) - ₹ 7,121/Qtl</option>
              <option value="Maize (Yellow)">🌽 Maize (Yellow) - ₹ 2,090/Qtl</option>
              <option value="Sugarcane">🎋 Sugarcane - ₹ 315/Qtl</option>
              <option value="Pulses (Red Gram/Tur)">🫘 Pulses (Red Gram/Tur) - ₹ 7,000/Qtl</option>
            </select>
          </div>

          {/* Estimated Quantity */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Estimated Weight (Quintals) <span className="text-emerald-600">*</span>
            </label>
            <input
              type="number"
              min="1"
              max="500"
              value={estimatedQty}
              onChange={(e) => setEstimatedQty(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Preferred Delivery Date <span className="text-emerald-600">*</span>
          </label>
          <input
            type="date"
            value={slotDate}
            onChange={(e) => setSlotDate(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-500"
            required
          />
        </div>

        {/* Time Windows / Slots */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            Available Arrival Windows <span className="text-emerald-600">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(slots || window.DEMO_DATA.slots || []).map((s) => (
              <div
                key={s.id}
                onClick={() => !s.isFull && setSelectedSlotId(s.id)}
                className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                  s.isFull
                    ? 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                    : selectedSlotId === s.id
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-slate-50 border-slate-200 hover:border-emerald-300 text-slate-800'
                }`}
              >
                <div>
                  <div className="text-xs font-extrabold">{s.timeWindow}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {s.bookedFarmers} / {s.maxFarmers} slots reserved
                  </div>
                </div>
                {s.isFull ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-700">FULL</span>
                ) : selectedSlotId === s.id ? (
                  <i className="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
                ) : (
                  <i className="fa-regular fa-circle text-slate-400 text-lg"></i>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-ticket"></i> Confirm & Generate Slot Token
          </button>
        </div>

      </form>

    </div>
  );
};
