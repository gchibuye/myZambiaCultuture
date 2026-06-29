// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   map.js  — Leaflet map setup & marker rendering
// ═══════════════════════════════════════════════

let map;
let activeMarker   = null;
let currentBasemap = 'dark';
let basemaps       = {};     // populated inside initMap once L is ready

// ── MAP INIT ────────────────────────────────────

function initMap() {
  // Zambia bounding box with padding so borders aren't flush to the edge
  const zambiaBounds = L.latLngBounds(
    L.latLng(-18.9, 20.5),   // SW corner
    L.latLng(-5.0,  35)    // NE corner
  );

  map = L.map('map', {
    center: [-13.5, 27.5],
    zoom: 6,
    minZoom: 5,              // stops zoom-out once full Zambia is visible
    maxZoom: 18,
    zoomControl: false,
    attributionControl: true,
    maxBounds: zambiaBounds, // prevents panning outside Zambia
    maxBoundsViscosity: 0.8  // elastic feel at the boundary rather than hard stop
  });

  // Define tile layers here — inside initMap so Leaflet is fully ready
  basemaps = {

    osm: L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '© OpenStreetMap contributors', subdomains: 'abc', maxZoom: 19 }
    ),
    satellite: L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { attribution: '© Esri, Maxar, Earthstar Geographics', maxZoom: 19 }
    ),
    dark: L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      { attribution: '© OpenStreetMap © CARTO', subdomains: 'abcd', maxZoom: 19 }
    )
  };

  // Add default osm basemap
  basemaps.osm.addTo(map);

  // Apply initial dark filter to the tile pane
  //map.getPane('tilePane').style.filter = 'saturate(0.3) brightness(0.45) sepia(0.3)';

  // Close panel only when clicking the bare map (not markers or GeoJSON)
  map.on('click', () => closePanel());

  return map;
}

// ── BASEMAP SWITCHER ────────────────────────────

function switchBasemap(name) {
  if (name === currentBasemap) return;

  map.removeLayer(basemaps[currentBasemap]);
  basemaps[name].addTo(map);
  basemaps[name].bringToBack();
  currentBasemap = name;

  // Adjust tile pane filter per basemap
  const tp = map.getPane('tilePane');
  if (name === 'dark') {
    tp.style.filter = 'saturate(0.3) brightness(0.45) sepia(0.3)';
  } else if (name === 'osm') {
    tp.style.filter = 'saturate(0.85) brightness(0.92)';
  } else {
    tp.style.filter = 'none';
  }

  // Update active button state
  document.querySelectorAll('.basemap-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.basemap === name);
  });
}

// ── MARKERS ─────────────────────────────────────

function createMarker(province) {
  const el = document.createElement('div');
  el.className = 'province-marker';
  el.style.color = province.color;
  el.style.borderColor = province.color + '80';
  el.innerHTML = icons[province.icon] || icons.city;

  const marker = L.marker([province.lat, province.lng], {
    icon: L.divIcon({
      html: el.outerHTML,
      className: '',
      iconSize:  [18, 18],
      iconAnchor:[14, 14]
    })
  }).addTo(map);

  // stopPropagation prevents the map 'click' handler closing the panel immediately
  marker.on('click', (e) => {
    L.DomEvent.stopPropagation(e);
    openPanel(province);
  });

  return marker;
}

function renderMarkers() {
  provinces.forEach(p => createMarker(p));
}
