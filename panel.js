// ═══════════════════════════════════════════════
//   Discover Zambia — Cultural Heritage Map
//   panel.js  — Side panel open / close / populate
// ═══════════════════════════════════════════════

function openPanel(item, type) {
  document.getElementById('intro').classList.add('hidden');

  if (!type || type === 'province') {
    buildProvincePanel(item);
  } else if (type === 'experiences') {
    buildExperiencePanel(item);
  } else if (type === 'ceremonies') {
    buildCeremonyPanel(item);
  } else if (type === 'lodges') {
    buildLodgePanel(item);
  }

  document.getElementById('panel').classList.add('open');
}

// ── PROVINCE ────────────────────────────────────

function buildProvincePanel(p) {
  setHeader(p.province, p.name, p.tags, p.color || '#C87D3A');

  document.getElementById('panel-desc').textContent = p.desc;

  // Core stats grid
  setDetails([
    { label: 'Capital',     value: p.capital                                          },
    { label: 'Area',        value: p.area_km2 ? formatNum(p.area_km2) + ' km²' : '—' },
    { label: 'Population',  value: p.population ? formatNum(p.population) : '—'       },
    { label: 'Density',     value: p.density ? p.density + ' /km²' : '—'             },
    { label: 'Districts',   value: p.districts ? p.districts : '—'                    },
    { label: 'Best Time',   value: p.best_time                                        }
  ]);

  // Economic activities section
  var bodyEl = document.getElementById('panel-body');

  // Remove any previously injected extra sections
  var old = bodyEl.querySelectorAll('.province-extra');
  old.forEach(function(el) { el.remove(); });

  if (p.economy && p.economy.length) {
    var econSection = document.createElement('div');
    econSection.className = 'panel-section province-extra';
    econSection.innerHTML =
      '<div class="panel-section-label">Economy & Livelihoods</div>' +
      '<ul class="highlights-list">' +
      p.economy.map(function(e) { return '<li>' + e + '</li>'; }).join('') +
      '</ul>';
    bodyEl.appendChild(econSection);
  }

  // Hidden gems section
  if (p.hidden_gems && p.hidden_gems.length) {
    var gemSection = document.createElement('div');
    gemSection.className = 'panel-section province-extra';
    gemSection.innerHTML =
      '<div class="panel-section-label">Hidden Gems</div>' +
      '<ul class="highlights-list highlights-list--gems">' +
      p.hidden_gems.map(function(g) { return '<li>' + g + '</li>'; }).join('') +
      '</ul>';
    bodyEl.appendChild(gemSection);
  }

  // Cultural highlights (the original highlights array)
  setHighlights(p.highlights);

  setCBT(p.cbt);
}

// ── EXPERIENCE ──────────────────────────────────

function buildExperiencePanel(e) {
  var province = provinces.find(function(p) { return p.id === e.province_id; });
  var color    = province ? province.color : '#C87D3A';

  // Remove province-only extra sections if switching from province panel
  document.getElementById('panel-body')
    .querySelectorAll('.province-extra')
    .forEach(function(el) { el.remove(); });

  setHeader(province ? province.province : '', e.name, e.tags, color);
  document.getElementById('panel-desc').textContent = e.description;
  setDetails([
    { label: 'Category',      value: capitalise(e.category)                            },
    { label: 'Duration',      value: e.duration                                        },
    { label: 'Best Time',     value: e.best_time                                       },
    { label: 'Accessibility', value: e.difficulty                                      },
    { label: 'Base Town',     value: e.base_town                                       },
    { label: 'Est. Cost',     value: e.cost_usd ? '$' + e.cost_usd : 'See operator'   }
  ]);
  setHighlights(e.highlights);
  setCBT(e.cbt
    ? 'This is a community-based tourism experience. Revenue supports local communities directly.'
    : null
  );
}

// ── CEREMONY ────────────────────────────────────

function buildCeremonyPanel(c) {
  var province = provinces.find(function(p) { return p.id === c.province_id; });

  document.getElementById('panel-body')
    .querySelectorAll('.province-extra')
    .forEach(function(el) { el.remove(); });

  setHeader(province ? province.province : '', c.name, ['ceremony'], '#D4A843');
  document.getElementById('panel-desc').textContent = c.description;
  setDetails([
    { label: 'Tribe',          value: c.tribe                                           },
    { label: 'Chief',          value: c.chief                                           },
    { label: 'District',       value: c.district                                        },
    { label: 'Month',          value: c.month_label                                     },
    { label: 'Duration',       value: c.duration                                        },
    { label: 'Open to Public', value: c.public ? 'Yes' : 'By arrangement'              }
  ]);
  setHighlights(c.visitor_notes ? [c.visitor_notes] : []);
  setCBT(null);
}

// ── LODGE ────────────────────────────────────────

function buildLodgePanel(l) {
  var province = provinces.find(function(p) { return p.id === l.province_id; });
  var tags = [l.type.replace(/_/g, ' ')];
  if (l.community_owned) tags.push('community owned');

  document.getElementById('panel-body')
    .querySelectorAll('.province-extra')
    .forEach(function(el) { el.remove(); });

  setHeader(province ? province.province : '', l.name, tags, '#3E9E96');
  document.getElementById('panel-desc').textContent = l.description;
  setDetails([
    { label: 'Type',        value: capitalise(l.type.replace(/_/g, ' '))                           },
    { label: 'Price/Night', value: l.price_usd_per_night ? '$' + l.price_usd_per_night : 'On request' },
    { label: 'Capacity',    value: l.capacity_people ? l.capacity_people + ' guests' : '—'         },
    { label: 'Booking',     value: capitalise(l.booking)                                            },
    { label: 'Best Time',   value: l.best_time                                                      },
    { label: 'Community',   value: l.community_ties === 'strong' ? 'Strong ties' : capitalise(l.community_ties) }
  ]);
  var amenities = (l.amenities || []).map(function(a) { return capitalise(a.replace(/_/g, ' ')); });
  setHighlights(amenities);
  setCBT(l.community_owned
    ? 'This is a community-owned property. Your stay directly supports local livelihoods.'
    : null
  );
}

// ── SHARED HELPERS ───────────────────────────────

function setHeader(subtitle, title, tags, color) {
  document.getElementById('panel-province').textContent = subtitle;
  document.getElementById('panel-title').textContent    = title;
  document.getElementById('panel-type').innerHTML = (tags || [])
    .map(function(t) { return '<span>' + capitalise(t) + '</span>'; })
    .join('');
  var canvas = document.getElementById('panel-canvas');
  setTimeout(function() { drawTextile(canvas, color); }, 50);
}

function setDetails(pairs) {
  document.getElementById('panel-details').innerHTML = pairs
    .map(function(d) {
      return '<div class="detail-item"><div class="di-label">' + d.label +
             '</div><div class="di-val">' + (d.value || '—') + '</div></div>';
    }).join('');
}

function setHighlights(items) {
  document.getElementById('panel-highlights').innerHTML = (items || [])
    .map(function(h) { return '<li>' + h + '</li>'; }).join('');
}

function setCBT(text) {
  var section = document.getElementById('cbt-section');
  var para    = document.getElementById('panel-cbt');
  if (text) {
    section.style.display = '';
    para.textContent = text;
  } else {
    section.style.display = 'none';
  }
}

function capitalise(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatNum(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ── CLOSE ────────────────────────────────────────

function closePanel() {
  document.getElementById('panel').classList.remove('open');
}

function initPanel() {
  document.getElementById('panel-close')
    .addEventListener('click', closePanel);
}
