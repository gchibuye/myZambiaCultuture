// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   filters.js  — Filter bar interaction
//
//   Filter button → layer/marker visibility rules:
//
//   all          → all layers visible
//   ceremony     → ceremonies layer only
//   heritage     → experiences: category 'heritage'
//                  or tag 'history'
//   nature       → experiences: category 'nature'
//   community    → lodges layer + experiences:
//                  category 'community'
//   craft        → experiences: category 'craft'
//
//   Province boundary layer always stays visible.
//   Province point markers always stay visible.
// ═══════════════════════════════════════════════

let currentFilter = 'all';

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn')
        .forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilter(currentFilter);
    });
  });
}

function applyFilter(filter) {

  if (filter === 'all') {
    // Show all three layers with all their markers
    showAllLayers();
    return;
  }

  if (filter === 'ceremony') {
    // Ceremonies only — hide experiences and lodges entirely
    toggleLayer('ceremonies',  true);
    toggleLayer('lodges',      false);
    filterExperienceMarkers(null); // hide all experience markers
    return;
  }

  if (filter === 'community') {
    // Lodges + community experiences
    toggleLayer('ceremonies', false);
    toggleLayer('lodges',     true);
    filterExperienceMarkers(function(item) {
      return item.category === 'community';
    });
    return;
  }

  if (filter === 'heritage') {
    toggleLayer('ceremonies', false);
    toggleLayer('lodges',     false);
    filterExperienceMarkers(function(item) {
      return item.category === 'heritage' ||
             (item.tags && item.tags.indexOf('history') !== -1);
    });
    return;
  }

  if (filter === 'nature') {
    toggleLayer('ceremonies', false);
    toggleLayer('lodges',     false);
    filterExperienceMarkers(function(item) {
      return item.category === 'nature';
    });
    return;
  }

  if (filter === 'craft') {
    toggleLayer('ceremonies', false);
    toggleLayer('lodges',     false);
    filterExperienceMarkers(function(item) {
      return item.category === 'craft';
    });
    return;
  }
}

/**
 * Show or hide individual experience markers based on a predicate.
 * @param {Function|null} predicate - fn(item) → boolean, or null to hide all
 */
function filterExperienceMarkers(predicate) {
  // Remove the whole group first
  map.removeLayer(layerGroups.experiences);
  layerVisible.experiences = false;

  if (!predicate) return; // hide all — done

  // Rebuild a filtered version on the fly using the stored marker data
  layerGroups.experiences.clearLayers();

  experiences.forEach(function(item) {
    if (predicate(item)) {
      createLayerMarker(item, 'experiences').addTo(layerGroups.experiences);
    }
  });

  // Re-add if there's anything to show
  layerGroups.experiences.addTo(map);
  layerVisible.experiences = true;
}
