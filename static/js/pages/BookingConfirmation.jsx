// Page 8: Booking Confirmation Component

window.BookingConfirmation = function BookingConfirmation({ navigateTo, booking }) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];

  return (
    <div className="max-w-xl mx-auto py-6 space-y-6 pb-12 animate-fade-in">
      
      {/* Success Badge */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-emerald-950 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-xl animate-bounce">
          ✓
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">Procurement Token Generated!</h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Your delivery slot has been registered. Present this token pass at the Mandi entry gate.
        </p>
      </div>

      {/* Digital Token Pass Printable Card */}
      <div className="bg-slate-900 border-2 border-emerald-500/80 rounded-3xl overflow-hidden shadow-2xl space-y-0">
        
        {/* Pass Top Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-6 border-b border-emerald-800/80 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Official Government Procurement Pass</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-widest mt-1">
              {currentBooking.tokenNumber}
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center text-xl font-bold border border-emerald-700">
            🌾
          </div>
        </div>

        {/* Pass Body Content */}
        <div className="p-6 space-y-6 bg-slate-900">
          
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Farmer Name</span>
              <strong className="text-white text-sm font-semibold">{currentBooking.farmerName}</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Mobile Number</span>
              <strong className="text-emerald-400 text-sm font-mono">{currentBooking.farmerPhone}</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Procurement Centre</span>
              <strong className="text-white text-xs">{currentBooking.centreName}</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Delivery Slot Window</span>
              <strong className="text-amber-300 text-xs">{currentBooking.timeWindow}</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Crop & Estimated Qty</span>
              <strong className="text-white text-xs">{currentBooking.cropType} • {currentBooking.estimatedQty} Qtl</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Date</span>
              <strong className="text-teal-300 text-xs font-mono">{currentBooking.slotDate}</strong>
            </div>
          </div>

          {/* QR Code Visual Component */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-white p-3 rounded-xl shadow-inner border-4 border-slate-900 inline-block">
              {/* SVG Simulated QR Code */}
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 10H40V40H10V10ZM20 20H30V30H20V20Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M60 10H90V40H60V10ZM70 20H80V30H70V20Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 60H40V90H10V60ZM20 70H30V80H20V70Z" fill="black"/>
                <rect x="50" y="50" width="15" height="15" fill="black"/>
                <rect x="70" y="65" width="20" height="10" fill="black"/>
                <rect x="60" y="80" width="10" height="10" fill="black"/>
                <rect x="75" y="80" width="15" height="10" fill="black"/>
              </svg>
            </div>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">{currentBooking.qrCode}</span>
          </div>

          {/* Alert Note */}
          <div className="p-3.5 bg-amber-950/40 border border-amber-800/80 rounded-xl text-amber-300 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <i className="fa-solid fa-triangle-exclamation"></i> Mandi Entry Instructions
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Arrive at Gate 2 approximately 15 minutes before your time window. Show this QR pass to the entry officer.
            </p>
          </div>

        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={() => navigateTo('liveQueue')}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-bold text-sm transition shadow-lg flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-stopwatch"></i>
          <span>Track Live Queue Position</span>
        </button>

        <button
          onClick={() => window.print()}
          className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-print"></i>
          <span>Print / Save Pass</span>
        </button>
      </div>

    </div>
  );
};
