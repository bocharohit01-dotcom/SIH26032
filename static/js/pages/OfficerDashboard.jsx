// Page 12: Officer Dashboard Component — Visual Demonstration Theme with Dynamic Farmer Token Lookup

window.OfficerDashboard = function OfficerDashboard({ navigateTo, bookings, onUpdateBookingStatus }) {
  const initialBookings = bookings || (window.DEMO_DATA && window.DEMO_DATA.sampleBookings) || [];
  const [queue, setQueue] = React.useState(initialBookings);
  const [searchToken, setSearchToken] = React.useState('');
  const [selectedToken, setSelectedToken] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [nextStatus, setNextStatus] = React.useState('QUALITY_CHECK');
  const [verifiedQty, setVerifiedQty] = React.useState('');
  const [qualityGrade, setQualityGrade] = React.useState('Grade A (Moisture 13.2%)');

  // Filtered queue based on token search
  const filteredQueue = React.useMemo(() => {
    if (!searchToken.trim()) return queue;
    const term = searchToken.toLowerCase().trim();
    return queue.filter(b => 
      b.tokenNumber.toLowerCase().includes(term) || 
      b.farmerName.toLowerCase().includes(term) ||
      (b.farmerPhone && b.farmerPhone.includes(term))
    );
  }, [queue, searchToken]);

  // Exact token match if user typed a token number
  const searchedTokenMatch = React.useMemo(() => {
    if (!searchToken.trim()) return null;
    const term = searchToken.toLowerCase().trim();
    return queue.find(b => b.tokenNumber.toLowerCase() === term || b.tokenNumber.toLowerCase().includes(term));
  }, [queue, searchToken]);

  const openProcessModal = (b) => {
    setSelectedToken(b);
    setVerifiedQty(b.verifiedQty || b.estimatedQty || 25);
    setQualityGrade(b.qualityGrade || 'Grade A (Moisture 13.2%)');
    if (b.status === 'BOOKED') setNextStatus('CHECKED_IN');
    else if (b.status === 'CHECKED_IN') setNextStatus('QUALITY_CHECK');
    else if (b.status === 'QUALITY_CHECK') setNextStatus('WEIGHED');
    else setNextStatus('COMPLETED');
    setIsModalOpen(true);
  };

  const handleAdvanceTokenSubmit = (e) => {
    e.preventDefault();
    if (!selectedToken) return;
    const rate = selectedToken.mspRate || 2300;
    const finalQty = Number(verifiedQty) || selectedToken.estimatedQty;
    const calcPayout = finalQty * rate;
    const updated = queue.map(item => item.id === selectedToken.id ? { ...item, status: nextStatus, verifiedQty: finalQty, qualityGrade, totalPayout: calcPayout } : item);
    setQueue(updated);
    if (onUpdateBookingStatus) onUpdateBookingStatus(selectedToken.tokenNumber, nextStatus, finalQty, qualityGrade, calcPayout);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2">
            <i className="fa-solid fa-clipboard-check text-amber-500"></i> Mandi Officer Operations Console
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Official Gate Inspection, Token Lookup & Weighbridge Verification Portal
          </p>
        </div>
        <span className="text-xs bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 w-fit">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span> Mandi Gate Operational
        </span>
      </div>

      {/* Token Search Bar & Quick Chips */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <i className="fa-solid fa-qrcode absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              value={searchToken} 
              onChange={(e) => setSearchToken(e.target.value)} 
              placeholder="Scan QR Code or enter token # (e.g. TK-2026-104, TK-2026-105, TK-2026-106)" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-amber-500 font-mono" 
            />
            {searchToken && (
              <button 
                onClick={() => setSearchToken('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
          <button 
            onClick={() => { if(!searchToken) setSearchToken('TK-2026-105'); }} 
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Lookup Token</span>
          </button>
        </div>

        {/* Quick Demo Token Chips */}
        <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">Sample Tokens:</span>
          {[
            { token: 'TK-2026-104', name: 'K. Rama Rao' },
            { token: 'TK-2026-105', name: 'Ramesh Patel' },
            { token: 'TK-2026-106', name: 'S. Vijayalakshmi' },
            { token: 'TK-2026-107', name: 'P. Venkateswarlu' },
            { token: 'TK-2026-108', name: 'M. Tirupathamma' }
          ].map(t => (
            <button
              key={t.token}
              onClick={() => setSearchToken(t.token)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold font-mono border transition flex items-center gap-1.5 ${
                searchToken === t.token
                  ? 'bg-amber-500 text-white border-amber-600 shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700'
              }`}
            >
              <span>{t.token}</span>
              <span className="text-[10px] opacity-75 font-sans">({t.name})</span>
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC SEARCH RESULT HIGHLIGHT CARD */}
      {searchToken.trim() && (
        <div className="animate-fade-in">
          {searchedTokenMatch ? (
            <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 border-2 border-amber-500/40 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center text-xl shadow-lg">
                    🎟️
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Scanned / Looked Up Token</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800">
                        {searchedTokenMatch.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black font-mono text-slate-900 dark:text-white">
                      {searchedTokenMatch.tokenNumber}
                    </h3>
                  </div>
                </div>

                <button 
                  onClick={() => openProcessModal(searchedTokenMatch)}
                  className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Process / Advance Token Status</span>
                </button>
              </div>

              {/* Farmer Details Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Farmer Name</span>
                  <strong className="text-slate-900 dark:text-white text-sm font-serif">{searchedTokenMatch.farmerName}</strong>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Contact & Location</span>
                  <strong className="text-slate-900 dark:text-white text-xs">{searchedTokenMatch.farmerPhone}</strong>
                  <span className="text-[10px] text-slate-500 block truncate">{searchedTokenMatch.farmerVillage}</span>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Crop Type</span>
                  <strong className="text-slate-900 dark:text-white text-xs">{searchedTokenMatch.cropType}</strong>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-400 font-semibold block text-[10px] uppercase">Est / Verified Weight</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 text-sm font-mono">{searchedTokenMatch.verifiedQty || searchedTokenMatch.estimatedQty} Qtl</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-4 rounded-2xl text-center text-red-700 dark:text-red-300 text-xs font-semibold">
              <i className="fa-solid fa-circle-exclamation mr-1"></i> No matching token record found for "{searchToken}". Please verify the token number.
            </div>
          )}
        </div>
      )}

      {/* Main Unloading Queue Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg font-serif">Mandi Farmers Unloading Queue</h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold">
            {filteredQueue.length} Farmers Listed
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Token #</th>
                <th className="py-3.5 px-4">Farmer Details</th>
                <th className="py-3.5 px-4">Crop Type</th>
                <th className="py-3.5 px-4">Est / Verified Weight</th>
                <th className="py-3.5 px-4">Current Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
              {filteredQueue.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="py-3.5 px-4 font-mono font-extrabold text-amber-600 dark:text-amber-400 text-sm">
                    {item.tokenNumber}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{item.farmerName}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.farmerVillage} • {item.farmerPhone}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200">{item.cropType}</td>
                  <td className="py-3.5 px-4 font-mono">
                    <span className="text-slate-900 dark:text-white font-bold">{item.verifiedQty || item.estimatedQty} Qtl</span>
                    {item.verifiedQty && <span className="text-[10px] text-emerald-600 dark:text-emerald-400 ml-1 block">(Verified)</span>}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${
                      item.status === 'COMPLETED' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' :
                      item.status === 'WEIGHED' ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-800' :
                      item.status === 'QUALITY_CHECK' ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button 
                      onClick={() => openProcessModal(item)} 
                      className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold transition text-xs shadow-sm inline-flex items-center gap-1.5"
                    >
                      <span>Process</span>
                      <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Advancing Status & Weighbridge Recording */}
      {isModalOpen && selectedToken && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl text-slate-900 dark:text-white">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Verification & Inspection Workflow</span>
                <h3 className="text-xl font-black font-mono text-amber-600 dark:text-amber-400">{selectedToken.tokenNumber}</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
            
            <form onSubmit={handleAdvanceTokenSubmit} className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                <div><span className="text-slate-500 dark:text-slate-400">Farmer Name:</span> <strong className="text-slate-900 dark:text-white text-sm font-serif">{selectedToken.farmerName}</strong></div>
                <div><span className="text-slate-500 dark:text-slate-400">Phone & Location:</span> <strong>{selectedToken.farmerPhone} · {selectedToken.farmerVillage}</strong></div>
                <div><span className="text-slate-500 dark:text-slate-400">Crop Category:</span> <strong>{selectedToken.cropType}</strong></div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Next Status Stage</label>
                <select value={nextStatus} onChange={(e) => setNextStatus(e.target.value)} className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 font-semibold">
                  <option value="CHECKED_IN">Gate Check-In Verified</option>
                  <option value="QUALITY_CHECK">Quality Inspection Approved</option>
                  <option value="WEIGHED">Net Weighbridge Recorded</option>
                  <option value="COMPLETED">Procurement Completed & Direct Payment Triggered</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Quality Grade & Moisture Content</label>
                <input type="text" value={qualityGrade} onChange={(e) => setQualityGrade(e.target.value)} className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Verified Net Weight (Quintals)</label>
                <input type="number" step="0.1" value={verifiedQty} onChange={(e) => setVerifiedQty(e.target.value)} className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 font-mono font-bold" required />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition shadow">Update & Save Status</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
