// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   index.js  — Application entry point
//
//   Script load order (index.html):
//     1.  leaflet.min.js
//     2.  data/provinces.js
//     3.  data/experiences.js
//     4.  data/ceremonies.js
//     5.  data/lodges.js
//     6.  icons.js
//     7.  textile.js
//     8.  map.js
//     9.  provinces-geo.js
//     10. layers.js
//     11. panel.js
//     12. filters.js
//     13. zoom.js
//     14. index.js  ← this file
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async function() {

  // 1. Initialise Leaflet map and tile layers
  initMap();

  // 2. Load GeoJSON province boundaries (await so they render before markers)
  await loadProvinceGeoJSON();

  // 3. Add province point markers
  renderMarkers();

  // 4. Add experience, ceremony and lodge markers
  initLayers();

  // 5. Wire up UI
  initPanel();
  initFilters();
  initZoomControls();

});
