// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   provinces-geo.js  — GeoJSON province boundary layer
//
//   Depends on: map.js (map), panel.js (openPanel),
//               data/provinces.js (provinces)
//   Load order in index.html: after map.js, before panel.js
// ═══════════════════════════════════════════════

let geoLayer = null;

async function loadProvinceGeoJSON() {
  const res  = await fetch('data/zambia_provinces.geojson');
  const data = await res.json();

  geoLayer = L.geoJSON(data, {
    style:         styleProvince,
    onEachFeature: bindProvinceFeature
  }).addTo(map);
}

function styleProvince(feature) {
  const match = provinces.find(p => p.geo_id === feature.properties.PROVINCE);

  if (!match) {
    console.warn('provinces-geo.js — no match for:', feature.properties.PROVINCE);
  }

  const color = match ? match.color : '#A89880';

  return {
    fillColor:   color,
    fillOpacity: 0.15,
    color:       color,
    weight:      1.5,
    opacity:     0.8
  };
}

function bindProvinceFeature(feature, layer) {
  layer.on({
    mouseover(e) {
      e.target.setStyle({
        fillOpacity: 0.32,
        weight:      2.5,
        opacity:     1
      });
    },
    mouseout(e) {
      geoLayer.resetStyle(e.target);
    },
    click(e) {
      L.DomEvent.stopPropagation(e);
      const match = provinces.find(p => p.geo_id === feature.properties.PROVINCE);
      if (match) openPanel(match);
    }
  });
}
