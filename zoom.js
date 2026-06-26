// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   zoom.js  — Custom zoom control bindings
// ═══════════════════════════════════════════════

/**
 * Bind the custom +/− zoom buttons to the Leaflet map instance.
 * Must be called after initMap() so `map` is available.
 */
function initZoomControls() {
  document.getElementById('zoom-in')
    .addEventListener('click', () => map.zoomIn());

  document.getElementById('zoom-out')
    .addEventListener('click', () => map.zoomOut());
}
