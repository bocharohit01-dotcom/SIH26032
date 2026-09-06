// Reusable Mobile Bottom Navigation Bar (Dark Theme / Role Aware)

window.MobileNav = function MobileNav({ currentPage, navigateTo, userRole }) {
  // Filter nav items based on user role
  let navItems = [
    { id: 'farmerDash', label: 'Home', icon: 'fa-house' },
    { id: 'centreListing', label: 'Centres', icon: 'fa-compass' },
    { id: 'slotBooking', label: 'Book Slot', icon: 'fa-calendar-plus' },
    { id: 'liveQueue', label: 'Live Queue', icon: 'fa-stopwatch' },
    { id: 'procurementStatus', label: 'Receipts', icon: 'fa-receipt' }
  ];

  if (userRole === 'OFFICER') {
    navItems = [
      { id: 'officerDash', label: 'Officer', icon: 'fa-clipboard-check' },
      { id: 'liveQueue', label: 'Queue', icon: 'fa-stopwatch' },
      { id: 'centreListing', label: 'Centres', icon: 'fa-compass' }
    ];
  } else if (userRole === 'ADMIN') {
    navItems = [
      { id: 'adminDash', label: 'Analytics', icon: 'fa-chart-pie' },
      { id: 'centreListing', label: 'Centres', icon: 'fa-compass' }
    ];
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-2 shadow-lg">
      <div className={`grid grid-cols-${navItems.length} gap-1 max-w-md mx-auto`}>
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
                isActive
                  ? 'text-emerald-400 font-bold bg-emerald-950/60'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <i className={`fa-solid ${item.icon} text-base`}></i>
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
