// Page 12: Officer Dashboard Component — Visual Demonstration Theme with Dynamic Farmer Token Lookup

window.OfficerDashboard = function OfficerDashboard({
  navigateTo,
  bookings,
  onUpdateBookingStatus
}) {
  const initialBookings = bookings || window.DEMO_DATA && window.DEMO_DATA.sampleBookings || [];
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
    return queue.filter(b => b.tokenNumber.toLowerCase().includes(term) || b.farmerName.toLowerCase().includes(term) || b.farmerPhone && b.farmerPhone.includes(term));
  }, [queue, searchToken]);

  // Exact token match if user typed a token number
  const searchedTokenMatch = React.useMemo(() => {
    if (!searchToken.trim()) return null;
    const term = searchToken.toLowerCase().trim();
    return queue.find(b => b.tokenNumber.toLowerCase() === term || b.tokenNumber.toLowerCase().includes(term));
  }, [queue, searchToken]);
  const openProcessModal = b => {
    setSelectedToken(b);
    setVerifiedQty(b.verifiedQty || b.estimatedQty || 25);
    setQualityGrade(b.qualityGrade || 'Grade A (Moisture 13.2%)');
    if (b.status === 'BOOKED') setNextStatus('CHECKED_IN');else if (b.status === 'CHECKED_IN') setNextStatus('QUALITY_CHECK');else if (b.status === 'QUALITY_CHECK') setNextStatus('WEIGHED');else setNextStatus('COMPLETED');
    setIsModalOpen(true);
  };
  const handleAdvanceTokenSubmit = e => {
    e.preventDefault();
    if (!selectedToken) return;
    const rate = selectedToken.mspRate || 2300;
    const finalQty = Number(verifiedQty) || selectedToken.estimatedQty;
    const calcPayout = finalQty * rate;
    const updated = queue.map(item => item.id === selectedToken.id ? {
      ...item,
      status: nextStatus,
      verifiedQty: finalQty,
      qualityGrade,
      totalPayout: calcPayout
    } : item);
    setQueue(updated);
    if (onUpdateBookingStatus) onUpdateBookingStatus(selectedToken.tokenNumber, nextStatus, finalQty, qualityGrade, calcPayout);
    setIsModalOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-clipboard-check text-amber-500"
  }), " Mandi Officer Operations Console"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1"
  }, "Official Gate Inspection, Token Lookup & Weighbridge Verification Portal")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 w-fit"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"
  }), " Mandi Gate Operational")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 w-full"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-qrcode absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: searchToken,
    onChange: e => setSearchToken(e.target.value),
    placeholder: "Scan QR Code or enter token # (e.g. TK-2026-104, TK-2026-105, TK-2026-106)",
    className: "w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-amber-500 font-mono"
  }), searchToken && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchToken(''),
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
  }, "Clear")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (!searchToken) setSearchToken('TK-2026-105');
    },
    className: "w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass"
  }), /*#__PURE__*/React.createElement("span", null, "Lookup Token"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap pt-1 border-t border-slate-100 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1"
  }, "Sample Tokens:"), [{
    token: 'TK-2026-104',
    name: 'K. Rama Rao'
  }, {
    token: 'TK-2026-105',
    name: 'Ramesh Patel'
  }, {
    token: 'TK-2026-106',
    name: 'S. Vijayalakshmi'
  }, {
    token: 'TK-2026-107',
    name: 'P. Venkateswarlu'
  }, {
    token: 'TK-2026-108',
    name: 'M. Tirupathamma'
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.token,
    onClick: () => setSearchToken(t.token),
    className: `px-3 py-1 rounded-xl text-xs font-semibold font-mono border transition flex items-center gap-1.5 ${searchToken === t.token ? 'bg-amber-500 text-white border-amber-600 shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700'}`
  }, /*#__PURE__*/React.createElement("span", null, t.token), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] opacity-75 font-sans"
  }, "(", t.name, ")"))))), searchToken.trim() && /*#__PURE__*/React.createElement("div", {
    className: "animate-fade-in"
  }, searchedTokenMatch ? /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 border-2 border-amber-500/40 rounded-3xl p-6 shadow-xl space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center text-xl shadow-lg"
  }, "\uD83C\uDF9F\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider"
  }, "Scanned / Looked Up Token"), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800"
  }, searchedTokenMatch.status)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black font-mono text-slate-900 dark:text-white"
  }, searchedTokenMatch.tokenNumber))), /*#__PURE__*/React.createElement("button", {
    onClick: () => openProcessModal(searchedTokenMatch),
    className: "px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-pen-to-square"
  }), /*#__PURE__*/React.createElement("span", null, "Process / Advance Token Status"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Farmer Name"), /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-sm font-serif"
  }, searchedTokenMatch.farmerName)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Contact & Location"), /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-xs"
  }, searchedTokenMatch.farmerPhone), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500 block truncate"
  }, searchedTokenMatch.farmerVillage)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Crop Type"), /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-xs"
  }, searchedTokenMatch.cropType)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Est / Verified Weight"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-600 dark:text-emerald-400 text-sm font-mono"
  }, searchedTokenMatch.verifiedQty || searchedTokenMatch.estimatedQty, " Qtl")))) : /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-4 rounded-2xl text-center text-red-700 dark:text-red-300 text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation mr-1"
  }), " No matching token record found for \"", searchToken, "\". Please verify the token number.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-900 dark:text-white text-lg font-serif"
  }, "Mandi Farmers Unloading Queue"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold"
  }, filteredQueue.length, " Farmers Listed")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left text-xs text-slate-700 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-100 dark:bg-slate-950 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Token #"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Farmer Details"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Crop Type"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Est / Verified Weight"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Current Status"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4 text-right"
  }, "Action"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-slate-100 dark:divide-slate-800/60 font-medium"
  }, filteredQueue.map(item => /*#__PURE__*/React.createElement("tr", {
    key: item.id,
    className: "hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
  }, /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 font-mono font-extrabold text-amber-600 dark:text-amber-400 text-sm"
  }, item.tokenNumber), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-900 dark:text-white text-sm"
  }, item.farmerName), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 dark:text-slate-400"
  }, item.farmerVillage, " \u2022 ", item.farmerPhone)), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 text-slate-800 dark:text-slate-200"
  }, item.cropType), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 font-mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-900 dark:text-white font-bold"
  }, item.verifiedQty || item.estimatedQty, " Qtl"), item.verifiedQty && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-emerald-600 dark:text-emerald-400 ml-1 block"
  }, "(Verified)")), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${item.status === 'COMPLETED' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' : item.status === 'WEIGHED' ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-800' : item.status === 'QUALITY_CHECK' ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'}`
  }, item.status)), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 text-right"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openProcessModal(item),
    className: "px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold transition text-xs shadow-sm inline-flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "Process"), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right text-[10px]"
  }))))))))), isModalOpen && selectedToken && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl text-slate-900 dark:text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold"
  }, "Verification & Inspection Workflow"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black font-mono text-amber-600 dark:text-amber-400"
  }, selectedToken.tokenNumber)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsModalOpen(false),
    className: "p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark text-lg"
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAdvanceTokenSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 dark:text-slate-400"
  }, "Farmer Name:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-sm font-serif"
  }, selectedToken.farmerName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 dark:text-slate-400"
  }, "Phone & Location:"), " ", /*#__PURE__*/React.createElement("strong", null, selectedToken.farmerPhone, " \xB7 ", selectedToken.farmerVillage)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 dark:text-slate-400"
  }, "Crop Category:"), " ", /*#__PURE__*/React.createElement("strong", null, selectedToken.cropType))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, "Next Status Stage"), /*#__PURE__*/React.createElement("select", {
    value: nextStatus,
    onChange: e => setNextStatus(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "CHECKED_IN"
  }, "Gate Check-In Verified"), /*#__PURE__*/React.createElement("option", {
    value: "QUALITY_CHECK"
  }, "Quality Inspection Approved"), /*#__PURE__*/React.createElement("option", {
    value: "WEIGHED"
  }, "Net Weighbridge Recorded"), /*#__PURE__*/React.createElement("option", {
    value: "COMPLETED"
  }, "Procurement Completed & Direct Payment Triggered"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, "Quality Grade & Moisture Content"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: qualityGrade,
    onChange: e => setQualityGrade(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, "Verified Net Weight (Quintals)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.1",
    value: verifiedQty,
    onChange: e => setVerifiedQty(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 font-mono font-bold",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center justify-end gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsModalOpen(false),
    className: "px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition shadow"
  }, "Update & Save Status"))))));
};