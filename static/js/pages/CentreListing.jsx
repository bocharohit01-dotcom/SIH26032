// Page 5: Procurement Centre Listing Component — Visual Demonstration Theme

window.CentreListing = function CentreListing({ navigateTo, centres, onSelectCentre, userLocation }) {
  const list = centres || (window.DEMO_DATA && window.DEMO_DATA.centres) || [];
  const [selectedCrop, setSelectedCrop] = React.useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = React.useState('ALL');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [maxDistance, setMaxDistance] = React.useState(50);
  const [sortBy, setSortBy] = React.useState('DISTANCE');

  // Available districts from current dataset
  const districtsList = React.useMemo(() => {
    const set = new Set(list.map(c => c.district));
    return Array.from(set).sort();
  }, [list]);

  const filteredCentres = React.useMemo(() => {
    let c = list.filter(item => {
      if (item.distanceKm > maxDistance) return false;
      if (selectedCrop !== 'ALL' && !item.supportedCrops.some(crop => crop.includes(selectedCrop))) return false;
      if (selectedDistrict !== 'ALL' && item.district !== selectedDistrict) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDistrict = item.district.toLowerCase().includes(q);
        const matchAddress = item.address.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchAddress) return false;
      }
      return true;
    });

    if (sortBy === 'WAIT_TIME') {
      c.sort((a, b) => (a.activeQueueLength * a.avgProcessingMins) - (b.activeQueueLength * b.avgProcessingMins));
    } else if (sortBy === 'DISTANCE') {
      c.sort((a, b) => a.distanceKm - b.distanceKm);
    } else if (sortBy === 'CAPACITY') {
      c.sort((a, b) => (a.currentLoadQuintals / a.maxCapacityQuintals) - (b.currentLoadQuintals / b.maxCapacityQuintals));
    }
    return c;
  }, [list, selectedCrop, selectedDistrict, searchQuery, maxDistance, sortBy]);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2">
            <i className="fa-solid fa-compass text-emerald-600 dark:text-emerald-400"></i> Smart Procurement Centre Discovery
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Locate government mandi yards nearby in West Godavari, Eluru, Guntur, and all districts of AP & Telangana.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> {filteredCentres.length} Mandis Available
          </span>
        </div>
      </div>

      {/* Filter Controls Panel */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-md space-y-4">
        
        {/* Top Search Bar */}
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by town or district (e.g. Bhimavaram, West Godavari, Eluru, Tanuku, Guntur...)"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick District Filter Chips */}
        <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">Quick Select District:</span>
          {['ALL', 'West Godavari', 'Eluru', 'Guntur', 'NTR (Vijayawada)', 'Kakinada'].map(dist => (
            <button
              key={dist}
              onClick={() => setSelectedDistrict(dist)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold border transition ${
                selectedDistrict === dist
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-emerald-50'
              }`}
            >
              {dist === 'ALL' ? '🌾 All Districts' : dist}
            </button>
          ))}
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <i className="fa-solid fa-map-location-dot text-emerald-500 mr-1"></i>Filter District
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">📍 All Districts ({list.length})</option>
              {districtsList.map(d => (
                <option key={d} value={d}>📍 {d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <i className="fa-solid fa-seedling text-emerald-500 mr-1"></i>Filter Crop Type
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">🌾 All Supported Crops</option>
              <option value="Paddy">🌾 Paddy (Grade A & Common)</option>
              <option value="Wheat">🌾 Wheat</option>
              <option value="Cotton">🌱 Cotton</option>
              <option value="Maize">🌽 Maize</option>
              <option value="Sugarcane">🎋 Sugarcane</option>
              <option value="Pulses">🫘 Pulses (Red Gram/Tur)</option>
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                <i className="fa-solid fa-route text-teal-500 mr-1"></i>Max Distance
              </label>
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                {maxDistance} km
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="500"
              step="5"
              value={maxDistance}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer mt-1"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              <i className="fa-solid fa-arrow-down-short-wide text-amber-500 mr-1"></i>Sort Ranking
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
            >
              <option value="DISTANCE">📍 Nearest First</option>
              <option value="RECOMMENDED">⚡ Smart Recommendation</option>
              <option value="WAIT_TIME">⏱️ Lowest Wait Time</option>
              <option value="CAPACITY">📊 Most Available Capacity</option>
            </select>
          </div>

        </div>

      </div>

      {/* Procurement Centres Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCentres.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <i className="fa-solid fa-map-location-dot text-4xl text-slate-400 mb-2 block"></i>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No procurement centres found matching your search or filters.</p>
            <p className="text-xs text-slate-500 mt-1">Try selecting "All Districts" or clearing the crop filter.</p>
            <button
              onClick={() => { setSelectedDistrict('ALL'); setSelectedCrop('ALL'); setSearchQuery(''); setMaxDistance(100); }}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-emerald-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : filteredCentres.map((centre) => {
          const waitMins = (centre.activeQueueLength || 0) * (centre.avgProcessingMins || 10);
          const capPct = Math.round(((centre.currentLoadQuintals || 0) / (centre.maxCapacityQuintals || 1000)) * 100);
          return (
            <div key={centre.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-3xl p-6 shadow-md space-y-5 transition flex flex-col justify-between">
              
              <div className="space-y-3">
                
                {/* Tag & Distance Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[11px] font-extrabold">
                    {centre.tag || 'ACTIVE MANDI'}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    📍 {centre.distanceKm} km
                  </span>
                </div>

                {/* Title & Location */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif">{centre.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-slate-400"></i>
                    <span>{centre.address}</span>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                    District: {centre.district}
                  </span>
                </div>

                {/* Queue & Capacity Metrics */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950/70 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Queue</div>
                    <div className="text-sm font-bold text-amber-600 dark:text-amber-400 font-mono mt-0.5">{centre.activeQueueLength || 0} Farmers</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Wait Time</div>
                    <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">{waitMins} Mins</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Capacity Load</div>
                    <div className="text-sm font-bold text-teal-600 dark:text-teal-400 font-mono mt-0.5">{capPct}%</div>
                  </div>
                </div>

                {/* Capacity Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <span>Capacity Load</span>
                    <span className="font-mono">{centre.currentLoadQuintals} / {centre.maxCapacityQuintals} Qtl</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${capPct > 80 ? 'bg-red-500' : capPct > 50 ? 'bg-amber-400' : 'bg-emerald-500'}`}
                      style={{ width: `${capPct}%` }}
                    ></div>
                  </div>
                </div>

                {/* Supported Crops Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(centre.supportedCrops || []).map((crop, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 font-medium">
                      {crop}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <i className="fa-solid fa-clock mr-1 text-slate-400"></i>
                  {centre.operatingHours || '07:00 AM - 06:00 PM'}
                </div>
                <button
                  onClick={() => {
                    if (onSelectCentre) onSelectCentre(centre);
                    if (navigateTo) navigateTo('slotBooking');
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition flex items-center gap-1.5"
                >
                  <span>Book Slot Here</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
