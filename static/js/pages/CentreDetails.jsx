// Page 6: Procurement Centre Details Component

window.CentreDetails = function CentreDetails({ navigateTo, centre, onSelectCentre }) {
  if (!centre) return null;

  const waitMins = centre.activeQueueLength * centre.avgProcessingMins;
  const capPct = Math.round((centre.currentLoadQuintals / centre.maxCapacityQuintals) * 100);

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      
      {/* Back button & Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('centreListing')}
          className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition flex items-center gap-2"
        >
          <i className="fa-solid fa-arrow-left"></i> Back to All Centres
        </button>

        <button
          onClick={() => navigateTo('slotBooking')}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs hover:from-emerald-400 hover:to-teal-300 transition shadow flex items-center gap-2"
        >
          <i className="fa-solid fa-calendar-plus"></i> Book Delivery Slot
        </button>
      </div>

      {/* Main Centre Overview Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold">
              {centre.tag}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">{centre.name}</h1>
            <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-emerald-400"></i> {centre.address}, {centre.district}, {centre.state} - {centre.pincode}
            </p>
          </div>

          <div className="text-right bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Distance from Your Village</div>
            <div className="text-2xl font-extrabold text-amber-400 font-mono">{centre.distanceKm} km</div>
          </div>
        </div>

        {/* Live Operational Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 text-center">
          <div>
            <div className="text-xs text-slate-400">Operating Hours</div>
            <div className="text-xs font-bold text-white mt-1">{centre.operatingHours}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Current Queue</div>
            <div className="text-xs font-bold text-amber-400 mt-1">{centre.activeQueueLength} Farmers</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Est. Wait Time</div>
            <div className="text-xs font-bold text-emerald-400 mt-1">{waitMins} Mins</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Yard Load Capacity</div>
            <div className="text-xs font-bold text-teal-400 mt-1">{capPct}% Utilized</div>
          </div>
        </div>

        {/* Officer in Charge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800 text-amber-400 flex items-center justify-center text-lg font-bold">
              👮
            </div>
            <div>
              <div className="text-xs text-slate-400">Officer In Charge</div>
              <div className="text-sm font-bold text-white">{centre.officerInCharge}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center text-lg font-bold">
              📞
            </div>
            <div>
              <div className="text-xs text-slate-400">Mandi Helpline</div>
              <div className="text-sm font-bold text-emerald-400 font-mono">{centre.contactPhone}</div>
            </div>
          </div>
        </div>

        {/* Mandi Facilities Checklist */}
        <div className="space-y-3">
          <h3 className="font-bold text-white text-base font-serif">Mandi Yard Infrastructure & Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {centre.facilities.map((fac, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <i className="fa-solid fa-circle-check text-emerald-400"></i>
                <span>{fac}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Crops */}
        <div className="space-y-3">
          <h3 className="font-bold text-white text-base font-serif">Procurement Supported Crops</h3>
          <div className="flex flex-wrap gap-2">
            {centre.supportedCrops.map((crop, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-xs font-semibold">
                🌾 {crop}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
