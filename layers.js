// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   layers.js  — Experience, ceremony & lodge layers
//
//   Depends on: map.js (map), panel.js (openPanel),
//               data/experiences.js, ceremonies.js, lodges.js
//   Load order: after map.js, before panel.js
// ═══════════════════════════════════════════════

// ── LAYER GROUPS ────────────────────────────────
// Each group holds all markers for one data type.
// Toggle visibility by adding/removing from map.

const layerGroups = {
  experiences: L.layerGroup(),
  ceremonies:  L.layerGroup(),
  lodges:      L.layerGroup()
};

// Track which layers are currently visible
const layerVisible = {
  experiences: true,
  ceremonies:  true,
  lodges:      true
};

// ── COLOUR & ICON PER TYPE ──────────────────────

const layerConfig = {
  experiences: { color: '#C87D3A', icon: 'experience' },  // copper
  ceremonies:  { color: '#D4A843', icon: 'ceremony'   },  // gold
  lodges:      { color: '#3E9E96', icon: 'lodge'      }   // teal
};

// ── MARKER FACTORY ──────────────────────────────

function createLayerMarker(item, type) {
  const cfg = layerConfig[type];

  const el = document.createElement('div');
  el.className = `layer-marker layer-marker--${type}`;
  el.style.color       = cfg.color;
  el.style.borderColor = cfg.color + '80';
  el.innerHTML         = layerIcons[cfg.icon] || layerIcons.experience;

  const marker = L.marker([item.lat, item.lng], {
    icon: L.divIcon({
      html:      el.outerHTML,
      className: '',
      iconSize:  [32, 32],
      iconAnchor:[16, 16]
    })
  });

  marker.on('click', (e) => {
    L.DomEvent.stopPropagation(e);
    openPanel(item, type);
  });

  return marker;
}

// ── INIT ────────────────────────────────────────

function initLayers() {
  // Build markers for each dataset
  experiences.forEach(item => {
    createLayerMarker(item, 'experiences').addTo(layerGroups.experiences);
  });
  ceremonies.forEach(item => {
    createLayerMarker(item, 'ceremonies').addTo(layerGroups.ceremonies);
  });
  lodges.forEach(item => {
    createLayerMarker(item, 'lodges').addTo(layerGroups.lodges);
  });

  // Add all groups to the map
  Object.values(layerGroups).forEach(group => group.addTo(map));
}

// ── VISIBILITY TOGGLE ───────────────────────────

function toggleLayer(type, visible) {
  if (visible) {
    layerGroups[type].addTo(map);
  } else {
    map.removeLayer(layerGroups[type]);
  }
  layerVisible[type] = visible;
}

function showOnlyLayer(type) {
  Object.keys(layerGroups).forEach(t => toggleLayer(t, t === type));
}

// showAllLayers is defined below with full rebuild logic

/**
 * Rebuild the experiences layer with ALL markers (used when switching to 'all').
 * Overrides the base showAllLayers to handle filtered state.
 */
function showAllLayers() {
  // Rebuild experiences from scratch so all markers are present
  map.removeLayer(layerGroups.experiences);
  layerGroups.experiences.clearLayers();
  experiences.forEach(function(item) {
    createLayerMarker(item, 'experiences').addTo(layerGroups.experiences);
  });
  layerGroups.experiences.addTo(map);
  layerVisible.experiences = true;

  // Ceremonies and lodges just need to be added back
  toggleLayer('ceremonies', true);
  toggleLayer('lodges',     true);
}
