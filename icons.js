// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   icons.js  — Custom SVG icon set
//
//   All icons use:
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     stroke-width="1.5"
//     stroke-linecap="round"
//     stroke-linejoin="round"
// ═══════════════════════════════════════════════

// ── PROVINCE MARKERS ────────────────────────────

const icons = {

  // Southern — Victoria Falls / flowing water
  waterfall: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 4 C5 8 3 11 4 15 C5 18 7 19 7 22"/>
    <path d="M12 2 C12 7 10 10 11 14 C12 17 14 18 14 22"/>
    <path d="M19 4 C19 9 17 12 18 16 C19 19 21 20 21 22"/>
    <path d="M3 12 Q7 10 12 12 Q17 10 21 12"/>
  </svg>`,

  // Western — royal barge / canoe on water
  canoe: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 16 Q12 12 20 16"/>
    <path d="M6 16 L7 10 L12 8 L17 10 L18 16"/>
    <path d="M12 8 L12 4"/>
    <path d="M10 4 L14 4"/>
    <path d="M2 19 Q12 17 22 19"/>
  </svg>`,

  // Eastern — ceremonial mask
  mask: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 C7 3 4 7 4 12 C4 17 7 21 12 21 C17 21 20 17 20 12 C20 7 17 3 12 3 Z"/>
    <path d="M9 10 C9 9 10 8.5 11 9 C12 9.5 12 10.5 11 11 C10 11.5 9 11 9 10 Z"/>
    <path d="M13 10 C13 9 14 8.5 15 9 C16 9.5 16 10.5 15 11 C14 11.5 13 11 13 10 Z"/>
  </svg>`,

  // Northern — chieftaincy crown / regalia
  chief: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 20 L5 13 L12 8 L19 13 L19 20"/>
    <path d="M3 20 L21 20"/>
    <path d="M5 13 L2 6 L8 11 L12 4 L16 11 L22 6 L19 13"/>
  </svg>`,

  // Luapula — fish
  fish: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12 C3 12 8 5 16 8 C20 9.5 21 12 21 12 C21 12 20 14.5 16 16 C8 19 3 12 3 12 Z"/>
    <path d="M21 8 L24 12 L21 16"/>
    <circle cx="7" cy="11" r="1" fill="currentColor" stroke="none"/>
  </svg>`,

  // Copperbelt — mine headframe
  mine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 21 L8 6 L12 2 L16 6 L16 21"/>
    <path d="M6 21 L18 21"/>
    <path d="M8 6 L16 6"/>
    <path d="M10 21 L10 14 L14 14 L14 21"/>
    <path d="M5 9 L8 9 M16 9 L19 9"/>
  </svg>`,

  // North-Western — woven textile / Makishi pattern
  wax: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9 L21 9 M3 15 L21 15"/>
    <path d="M9 3 L9 21 M15 3 L15 21"/>
    <path d="M3 3 L9 9 M15 3 L21 9 M3 15 L9 21 M15 15 L21 21"/>
  </svg>`,

  // Central — baobab tree
  baobab: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22 L12 9"/>
    <path d="M12 9 Q15 5 20 4"/>
    <path d="M12 9 Q9 5 4 4"/>
    <path d="M12 11 Q16 9 20 10"/>
    <path d="M12 11 Q8 9 4 10"/>
    <path d="M12 13 Q15 12 18 13"/>
    <path d="M12 13 Q9 12 6 13"/>
    <path d="M9 22 L15 22"/>
  </svg>`,

  // Muchinga — mountain range
  mountains: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 21 L8 7 L13 15 L17 10 L22 21 Z"/>
    <path d="M8 7 L10 4 L12 7"/>
  </svg>`,

  // Lusaka — city skyline
  city: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 21 L2 11 L7 11 L7 21"/>
    <path d="M7 21 L7 7 L12 7 L12 21"/>
    <path d="M12 21 L12 9 L17 9 L17 21"/>
    <path d="M17 21 L17 13 L22 13 L22 21"/>
    <path d="M7 7 L7 4 L12 4 L12 7"/>
    <path d="M2 21 L22 21"/>
    <path d="M4 14 L5 14 M4 17 L5 17 M9 11 L10 11 M9 14 L10 14 M9 17 L10 17 M14 12 L15 12 M14 15 L15 15 M19 16 L20 16"/>
  </svg>`
};

// ── LAYER MARKERS ───────────────────────────────

const layerIcons = {

  // Experiences — compass / exploration
  experience: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M16.5 7.5 L14 14 L7.5 16.5 L10 10 Z"/>
  </svg>`,

  // Ceremonies — star / celebration
  ceremony: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18.5 21 L12 16.5 L5.5 21 L8 13.5 L2 9 L9.5 9 Z"/>
  </svg>`,

  // Lodges — house / shelter
  lodge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 21 L3 11 L12 3 L21 11 L21 21"/>
    <path d="M1 11 L12 1 L23 11"/>
    <path d="M9 21 L9 15 L15 15 L15 21"/>
    <path d="M3 21 L21 21"/>
  </svg>`
};
