// Page 13: Admin Dashboard Component — Visual Demonstration Theme

window.AdminDashboard = function AdminDashboard({ navigateTo }) {
  const defaultAnalytics = {
    totalRegisteredFarmers: 28450,
    activeCentres: 34,
    totalProcuredQuintals: 382500,
    totalPayoutDistributedCr: 87.65,
    districtUtilization: [
      { name: "Guntur APMC Yard", capacity: 9500, currentLoad: 4200, pct: 44 },
      { name: "Vijayawada NTR Hub", capacity: 8000, currentLoad: 3100, pct: 38 },
      { name: "Tirupati Farmer Yard", capacity: 6500, currentLoad: 2800, pct: 43 },
      { name: "Kakinada Port Yard", capacity: 10000, currentLoad: 6100, pct: 61 },
      { name: "Visakhapatnam Yard", capacity: 7500, currentLoad: 3400, pct: 45 },
      { name: "Ananthapuramu Hub", capacity: 7000, currentLoad: 4100, pct: 58 }
    ],
    bottlenecks: [
      { step: "Gate Check-In & Scanning", count: 42, percentage: 15, status: "Normal Flow" },
      { step: "Quality Inspection Lab", count: 98, percentage: 35, status: "Moderate Queue" },
      { step: "Net Weighbridge Scale", count: 112, percentage: 40, status: "High Delay" },
      { step: "Direct Bank Transfer Payout", count: 28, percentage: 10, status: "Fast Flow" }
    ]
  };

  const rawAnalytics = (window.DEMO_DATA && window.DEMO_DATA.adminAnalytics) || defaultAnalytics;
  const analytics = {
    totalRegisteredFarmers: rawAnalytics.totalRegisteredFarmers || defaultAnalytics.totalRegisteredFarmers,
    activeCentres: rawAnalytics.activeCentres || defaultAnalytics.activeCentres,
    totalProcuredQuintals: rawAnalytics.totalProcuredQuintals || defaultAnalytics.totalProcuredQuintals,
    totalPayoutDistributedCr: rawAnalytics.totalPayoutDistributedCr || defaultAnalytics.totalPayoutDistributedCr,
    districtUtilization: rawAnalytics.districtUtilization || defaultAnalytics.districtUtilization,
    bottlenecks: rawAnalytics.bottlenecks || defaultAnalytics.bottlenecks
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2">
            <i className="fa-solid fa-chart-pie text-blue-600 dark:text-blue-400"></i> State Agricultural Procurement Analytics
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Real-time monitoring of grain tonnage, mandi capacity utilization, and queue bottlenecks across districts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Department of Agriculture HQ
          </span>
        </div>
      </div>

      {/* Overview Stat Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Registered Farmers</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm border border-emerald-200 dark:border-emerald-800">
              👥
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif">
            {(analytics.totalRegisteredFarmers || 0).toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">+12% from last season</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Active Centres</span>
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm border border-blue-200 dark:border-blue-800">
              🏛️
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif">{analytics.activeCentres} Yards</div>
          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">100% Operational</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Procured Volume</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm border border-amber-200 dark:border-amber-800">
              🌾
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-serif">
            {(analytics.totalProcuredQuintals || 0).toLocaleString('en-IN')} Qtl
          </div>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">Kharif Season 2026</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Direct Bank Payouts</span>
            <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm border border-teal-200 dark:border-teal-800">
              💰
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-serif">
            ₹ {analytics.totalPayoutDistributedCr} Cr
          </div>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">Direct DBT Transfers</span>
        </div>

      </div>

      {/* Analytics Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Mandi Capacity Utilization Heat Bars */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base font-serif flex items-center gap-2">
              <i className="fa-solid fa-chart-simple text-emerald-600 dark:text-emerald-400"></i> Mandi Capacity Utilization
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">Real-time Load %</span>
          </div>

          <div className="space-y-4 pt-1">
            {analytics.districtUtilization.map((d, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-900 dark:text-white">{d.name}</span>
                  <span className="font-mono text-slate-600 dark:text-slate-300">{d.currentLoad} / {d.capacity} Qtl ({d.pct}%)</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      d.pct > 80 ? 'bg-red-500' : d.pct > 50 ? 'bg-amber-400' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${d.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Queue Bottleneck Breakdown */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base font-serif flex items-center gap-2">
              <i className="fa-solid fa-filter text-amber-500"></i> Mandi Bottleneck Stage Analysis
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">Current Queue Split</span>
          </div>

          <div className="space-y-3 pt-1">
            {analytics.bottlenecks.map((b, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{b.step}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{b.count} Farmers currently at stage</div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-extrabold font-mono text-amber-600 dark:text-amber-400">{b.percentage}%</span>
                  <span className={`block text-[10px] font-semibold ${
                    (b.status || '').includes('High') ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
