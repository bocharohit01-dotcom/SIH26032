// Page 10: Procurement Status Tracking Component

window.ProcurementStatusTracking = function ProcurementStatusTracking({ navigateTo, booking }) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];

  const milestones = [
    { step: 1, title: 'Slot Booked & Token Issued', desc: `Token ${currentBooking.tokenNumber} reserved for ${currentBooking.timeWindow}`, done: true, current: false },
    { step: 2, title: 'Gate Check-In & QR Scan', desc: 'Vehicle checked in at Mandi Gate 2', done: ['CHECKED_IN', 'QUALITY_CHECK', 'WEIGHED', 'COMPLETED'].includes(currentBooking.status), current: currentBooking.status === 'CHECKED_IN' },
    { step: 3, title: 'Moisture & Quality Inspection', desc: currentBooking.qualityGrade || 'Grain moisture tested & certified Grade A', done: ['QUALITY_CHECK', 'WEIGHED', 'COMPLETED'].includes(currentBooking.status), current: currentBooking.status === 'QUALITY_CHECK' },
    { step: 4, title: 'Net Weighbridge Weighing', desc: `Net weight verified: ${currentBooking.verifiedQty || currentBooking.estimatedQty} Quintals`, done: ['WEIGHED', 'COMPLETED'].includes(currentBooking.status), current: currentBooking.status === 'WEIGHED' },
    { step: 5, title: 'Direct Bank Payout Issued', desc: `Payout amount ₹ ${currentBooking.totalPayout ? currentBooking.totalPayout.toLocaleString('en-IN') : '57,040'} sent to account`, done: currentBooking.status === 'COMPLETED', current: currentBooking.status === 'COMPLETED' }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif flex items-center gap-2">
            <i className="fa-solid fa-timeline text-emerald-400"></i> Procurement Journey & Payout Status
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Transparent tracking from entry gate to direct bank transfer.
          </p>
        </div>

        <button
          onClick={() => navigateTo('liveQueue')}
          className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-700"
        >
          Back to Live Queue
        </button>
      </div>

      {/* 5-Step Milestone Pipeline */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Token Reference</span>
            <div className="text-xl font-bold text-amber-400 font-mono">{currentBooking.tokenNumber}</div>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Farmer</span>
            <div className="text-sm font-bold text-white">{currentBooking.farmerName}</div>
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-800">
          {milestones.map((m) => (
            <div key={m.step} className="relative flex items-start gap-4 z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                m.done 
                  ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-md shadow-emerald-900/50' 
                  : m.current
                  ? 'bg-amber-500 border-amber-400 text-slate-950 animate-pulse'
                  : 'bg-slate-800 border-slate-700 text-slate-500'
              }`}>
                {m.done ? '✓' : m.step}
              </div>

              <div className={`flex-1 p-4 rounded-2xl border ${
                m.done || m.current 
                  ? 'bg-slate-800/80 border-slate-700 text-white' 
                  : 'bg-slate-950/40 border-slate-800/80 text-slate-500'
              }`}>
                <div className="flex items-center justify-between">
                  <h4 className={`font-bold text-sm ${m.done ? 'text-emerald-300' : m.current ? 'text-amber-300' : 'text-slate-400'}`}>
                    Step {m.step}: {m.title}
                  </h4>
                  {m.done && <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-semibold">VERIFIED</span>}
                </div>
                <p className="text-xs text-slate-300 mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Digital Receipt Card */}
      <div className="bg-gradient-to-br from-slate-900 to-emerald-950 border border-emerald-800/80 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="font-bold text-white text-base font-serif flex items-center gap-2">
            <i className="fa-solid fa-receipt text-emerald-400"></i> Verified Procurement Digital Receipt
          </h3>
          <span className="text-xs font-mono text-emerald-400 font-bold">REC-2026-8841</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-slate-400 text-[11px]">Crop Name</span>
            <div className="font-bold text-white mt-0.5">{currentBooking.cropType}</div>
          </div>
          <div>
            <span className="text-slate-400 text-[11px]">Verified Net Weight</span>
            <div className="font-bold text-emerald-300 mt-0.5">{currentBooking.verifiedQty || 24.8} Quintals</div>
          </div>
          <div>
            <span className="text-slate-400 text-[11px]">Govt MSP Rate</span>
            <div className="font-bold text-amber-300 mt-0.5">₹ {currentBooking.mspRate || 2300} / Qtl</div>
          </div>
          <div>
            <span className="text-slate-400 text-[11px]">Total Bank Payout</span>
            <div className="font-extrabold text-emerald-400 text-sm mt-0.5">
              ₹ {currentBooking.totalPayout ? currentBooking.totalPayout.toLocaleString('en-IN') : '57,040'}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
