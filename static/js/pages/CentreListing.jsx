// Centre Listing - KisanSeva
// Same card interface for every procurement centre

window.CentreListing = function CentreListing({
  navigateTo,
  onSelectCentre,
  user
}) {

 const [allCentres, setAllCentres] = React.useState([]);

  const [searchText, setSearchText] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] =
    React.useState('All Districts');

  const [sortMode, setSortMode] =
    React.useState('nearest');

  const [location, setLocation] =
    React.useState(null);

  const [locationStatus, setLocationStatus] =
    React.useState('');
  const [liveCentres, setLiveCentres] = React.useState([]);

  // ---------------------------------------------------------
  // GET FARMER LOCATION
  // ---------------------------------------------------------

  React.useEffect(() => {

    if (!navigator.geolocation) {
      setLocationStatus('Location not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

        setLocationStatus('');
      },

      () => {
        setLocationStatus(
          'Using saved centre distances'
        );
      },

      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000
      }

    );

  }, []);
    // ---------------------------------------------------------
  // LOAD LIVE PROCUREMENT CENTRE DATA
  // ---------------------------------------------------------

  React.useEffect(() => {

    const loadCentres = async () => {

      try {

       const response = await fetch(
  location
    ? `/api/centres/recommend?lat=${encodeURIComponent(location.lat)}&lng=${encodeURIComponent(location.lng)}&max_distance=1000`
    : '/api/centres/recommend?max_distance=1000'
);

        if (!response.ok) {
          throw new Error('Failed to load centres');
        }

        const data = await response.json();

        if (Array.isArray(data.recommended)) {
          setAllCentres(data.recommended);
          setLiveCentres(data.recommended);
        }

      } catch (error) {

        console.error('Centre loading error:', error);

        // Keep existing demo data as fallback
      }

    };

    loadCentres();

  }, [location]);

  // ---------------------------------------------------------
  // HAVERSINE DISTANCE
  // ---------------------------------------------------------

  const calculateDistance = (
    lat1,
    lon1,
    lat2,
    lon2
  ) => {

    const R = 6371;

    const dLat =
      (lat2 - lat1) * Math.PI / 180;

    const dLon =
      (lon2 - lon1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) *
      Math.sin(dLat / 2) +

      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *

      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    return R * c;
  };


  // ---------------------------------------------------------
// ANDHRA PRADESH DISTRICTS
// ---------------------------------------------------------

const districts = [
  'All Districts',
  'Alluri Sitharama Raju',
  'Anakapalli',
  'Ananthapuramu',
  'Annamayya',
  'Bapatla',
  'Chittoor',
  'East Godavari',
  'Eluru',
  'Guntur',
  'Kakinada',
  'Konaseema',
  'Krishna',
  'Kurnool',
  'Nandyal',
  'N.T.R',
  'Palnadu',
  'Parvathipuram Manyam',
  'Prakasam',
  'Sri Sathyasai',
  'SPS Nellore',
  'Srikakulam',
  'Tirupati',
  'Visakhapatnam',
  'Vizianagaram',
  'West Godavari',
  'YSR Kadapa'
];

  // ---------------------------------------------------------
  // PREPARE CENTRE DATA
  // ---------------------------------------------------------

const preparedCentres =
  allCentres

    .filter(
      centre =>
        centre.state === 'Andhra Pradesh'
    )

    .map(
      centre => {

        const liveCentre =
          liveCentres.find(
            item =>
              String(item.id) ===
              String(centre.id)
          );

        let distance =
          Number(
            centre.distanceKm || 0
          );

        if (
          location &&
          centre.lat &&
          centre.lng
        ) {

          distance =
            calculateDistance(
              location.lat,
              location.lng,
              Number(centre.lat),
              Number(centre.lng)
            );
        }

        const queue =
          liveCentre &&
          liveCentre.active_queue_length !== undefined
            ? Number(
                liveCentre.active_queue_length
              )
            : 0;

        const waitTime =
          liveCentre &&
          liveCentre.est_wait_mins !== undefined
            ? Number(
                liveCentre.est_wait_mins
              )
            : 0;

        const capacityPercent =
          liveCentre &&
          liveCentre.capacity_pct !== undefined
            ? Number(
                liveCentre.capacity_pct
              )
            : 0;

        let tag = 'STANDARD';

        if (capacityPercent < 35) {
          tag = 'HIGH CAPACITY';
        }
        else if (queue === 0) {
          tag = 'ZERO QUEUE';
        }
        else if (waitTime <= 15) {
          tag = 'FAST PROCESSING';
        }

        return {
          ...centre,

          ...(liveCentre || {}),

          displayDistance:
            Number(
              distance.toFixed(1)
            ),

          displayQueue:
            queue,

          displayWait:
            waitTime,

          displayCapacity:
            Math.round(
              capacityPercent
            ),

          displayTag:
            liveCentre?.tag ||
            centre.tag ||
            tag
        };
      }
    );

  // ---------------------------------------------------------
  // FILTER + SEARCH
  // ---------------------------------------------------------

  let filteredCentres =
    preparedCentres.filter(
      centre => {

        const matchesDistrict =
          selectedDistrict === 'All Districts' ||
          centre.district === selectedDistrict;

        const search =
          searchText
            .trim()
            .toLowerCase();

        const matchesSearch =
          !search ||

          centre.name
            .toLowerCase()
            .includes(search) ||

          centre.district
            .toLowerCase()
            .includes(search) ||

          centre.address
            .toLowerCase()
            .includes(search);

        return (
          matchesDistrict &&
          matchesSearch
        );
      }
    );


  // ---------------------------------------------------------
  // SORT
  // ---------------------------------------------------------

  filteredCentres =
    [...filteredCentres].sort(
      (a, b) => {

        if (sortMode === 'nearest') {
          return (
            a.displayDistance -
            b.displayDistance
          );
        }

        if (sortMode === 'queue') {
          return (
            a.displayQueue -
            b.displayQueue
          );
        }

        if (sortMode === 'capacity') {
          return (
            a.displayCapacity -
            b.displayCapacity
          );
        }

        return 0;
      }
    );


  // ---------------------------------------------------------
  // BOOK SLOT
  // ---------------------------------------------------------

  const handleBookSlot = (centre) => {

    if (onSelectCentre) {
      onSelectCentre(centre);
    }

    navigateTo('slotBooking');
  };


  // ---------------------------------------------------------
  // CAPACITY BAR COLOR
  // ---------------------------------------------------------

  const getCapacityColor =
    (percentage) => {

      if (percentage >= 80) {
        return 'bg-red-500';
      }

      if (percentage >= 60) {
        return 'bg-amber-500';
      }

      return 'bg-emerald-500';
    };


  // ---------------------------------------------------------
  // STATUS
  // ---------------------------------------------------------

  const getStatusText =
    (status) => {

      if (
        status === 'ACTIVE' ||
        status === 'OPEN'
      ) {
        return 'OPEN';
      }

      return 'CLOSED';
    };


  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------

  return (

    <div className="space-y-6 pb-12">

      {/* HEADER */}

      <div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">

                <i className="fa-solid fa-location-dot"></i>

              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Andhra Pradesh
              </span>

            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif">
              Procurement Centres
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Find nearby agricultural procurement centres and book your slot.
            </p>

          </div>

          <div className="text-sm font-semibold text-slate-500">

            {filteredCentres.length}
            {' '}
            Centres

          </div>

        </div>

      </div>


      {/* STATE + SEARCH */}

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm">

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_180px] gap-3">

          {/* STATE */}

          <div>

            <label className="text-[11px] font-bold text-slate-500 uppercase">
              State
            </label>

            <div className="mt-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-sm">

              Andhra Pradesh

            </div>

          </div>


          {/* SEARCH */}

          <div>

            <label className="text-[11px] font-bold text-slate-500 uppercase">
              Search
            </label>

            <div className="relative mt-1">

              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

              <input
                type="text"
                value={searchText}
                onChange={
                  e =>
                    setSearchText(
                      e.target.value
                    )
                }
                placeholder="Search centre, district or address..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />

            </div>

          </div>


          {/* SORT */}

          <div>

            <label className="text-[11px] font-bold text-slate-500 uppercase">
              Sort
            </label>

            <select
              value={sortMode}
              onChange={
                e =>
                  setSortMode(
                    e.target.value
                  )
              }
              className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold outline-none"
            >

              <option value="nearest">
                Nearest First
              </option>

              <option value="queue">
                Lowest Queue
              </option>

              <option value="capacity">
                Highest Capacity
              </option>

            </select>

          </div>

        </div>


        {/* LOCATION STATUS */}

        {locationStatus && (

          <div className="mt-3 text-xs text-slate-500">

            <i className="fa-solid fa-circle-info mr-1"></i>

            {locationStatus}

          </div>

        )}

      </div>


      {/* DISTRICT CHIPS */}

      <div className="flex gap-2 overflow-x-auto pb-1">

        {districts.map(
          district => (

            <button
              key={district}
              onClick={() =>
                setSelectedDistrict(
                  district
                )
              }
              className={
                `whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition ${
                  selectedDistrict === district
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                }`
              }
            >

              {district}

            </button>

          )
        )}

      </div>


      {/* CENTRE CARDS */}

      <div className="space-y-5">

        {filteredCentres.map(
          centre => (

            <div
              key={centre.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition"
            >

              {/* TOP ROW */}

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold tracking-wide">

                    {centre.displayTag}

                  </span>

                  <span className="text-xs font-bold text-slate-500">

                    {centre.displayDistance} km

                  </span>

                </div>


                <span
                  className={
                    `inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold ${
                      getStatusText(centre.status) === 'OPEN'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`
                  }
                >

                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>

                  {getStatusText(
                    centre.status
                  )}

                </span>

              </div>


              {/* NAME */}

              <div className="mt-4">

                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">

                  {centre.name}

                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">

                  <i className="fa-solid fa-location-dot mr-1"></i>

                  {centre.address}

                </p>

                <div className="mt-2 inline-flex px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">

                  District: {centre.district}

                </div>

              </div>


              {/* STATS */}

              <div className="grid grid-cols-3 gap-3 mt-5">

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">

                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Queue
                  </div>

                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {centre.displayQueue}
                  </div>

                  <div className="text-[10px] text-slate-500">
                    Farmers
                  </div>

                </div>


                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">

                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Wait Time
                  </div>

                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {centre.displayWait}
                  </div>

                  <div className="text-[10px] text-slate-500">
                    Minutes
                  </div>

                </div>


                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">

                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Capacity
                  </div>

                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {centre.displayCapacity}%
                  </div>

                  <div className="text-[10px] text-slate-500">
                    Load
                  </div>

                </div>

              </div>


              {/* CAPACITY */}

              <div className="mt-5">

                <div className="flex items-center justify-between text-xs font-bold mb-2">

                  <span className="text-slate-500">
                    Capacity Load
                  </span>

                  <span className="text-slate-700 dark:text-slate-300">

                    {centre.currentLoadQuintals}
                    {' / '}
                    {centre.maxCapacityQuintals}
                    {' Qt'}

                  </span>

                </div>

                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">

                  <div
                    className={
                      `h-full rounded-full ${getCapacityColor(
                        centre.displayCapacity
                      )}`
                    }
                    style={{
                      width:
                        `${Math.min(
                          centre.displayCapacity,
                          100
                        )}%`
                    }}
                  ></div>

                </div>

              </div>


              {/* CROPS */}

              <div className="mt-5">

                <div className="text-[10px] font-bold uppercase text-slate-400 mb-2">
                  Supported Crops
                </div>

                <div className="flex flex-wrap gap-2">

                  {(
                    centre.supportedCrops ||
                    []
                  ).map(
                    crop => (

                      <span
                        key={crop}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100"
                      >
                        {crop}
                      </span>

                    )
                  )}

                </div>

              </div>


              {/* FOOTER */}

              <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div className="text-sm text-slate-500">

                  <i className="fa-regular fa-clock mr-1"></i>

                  <span className="font-semibold">
                    Operating Hours:
                  </span>

                  {' '}

                  {centre.operatingHours}

                </div>


                <button
                  onClick={() =>
                    handleBookSlot(
                      centre
                    )
                  }
                  disabled={
                    getStatusText(
                      centre.status
                    ) !== 'OPEN'
                  }
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-extrabold transition"
                >

                  Book Slot Here
                  <i className="fa-solid fa-arrow-right ml-2"></i>

                </button>

              </div>

            </div>

          )
        )}

      </div>


      {/* EMPTY STATE */}

      {filteredCentres.length === 0 && (

        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">

          <div className="text-4xl mb-3">
            🔎
          </div>

          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            No procurement centres found
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Try another district or search term.
          </p>

        </div>

      )}

    </div>

  );
};