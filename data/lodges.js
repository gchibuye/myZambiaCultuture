// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   data/lodges.js
//
//   Community lodges, homestays, and culturally
//   connected accommodation — one or more per province.
//
//   Focus: community_owned or strong community_ties.
//   Luxury private camps are excluded unless they
//   have a documented CBT or community component.
//
//   Fields marked  ← VERIFY  must be confirmed before going live.
//   Coordinates are approximate — replace with GPS.
// ═══════════════════════════════════════════════

const lodges = [

  // ── SOUTHERN PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'mukuni-village-stay',
    province_id: 'southern',
    name: 'Mukuni Village Overnight Stay',
    type: 'village_homestay',
    community_owned: true,
    community_ties: 'strong',
    lat: -17.862, lng: 25.875,
    address: 'Mukuni Village, 8km from Livingstone',
    description: 'Stay overnight in traditional Leya huts at Mukuni Village — one of Zambia\'s oldest living chiefdoms. Accommodation is simple but authentic; meals are prepared by the women\'s cooperative. Evening cultural performances are included. All revenues support the village community directly.',
    capacity_people: 20,        // ← VERIFY
    price_usd_per_night: '30–50',
    amenities: ['meals', 'cultural_guide', 'craft_market', 'traditional_huts'],
    booking: 'walkin',
    contact: null,              // ← VERIFY
    languages: ['Tonga', 'Leya', 'English'],
    nearby_experiences: ['mukuni-village', 'victoria-falls-zambia', 'livingstone-museum'],
    best_time: 'Year-round'
  },
  {
    id: 'tongabezi-lodge',
    province_id: 'southern',
    name: 'Tongabezi Lodge',
    type: 'lodge',
    community_owned: false,
    community_ties: 'moderate',
    lat: -17.859, lng: 25.819,
    address: 'Zambezi River, 7km upstream from Victoria Falls',
    description: 'Luxury riverside lodge on the Zambezi, upstream of Victoria Falls. Each cottage has a private river view. Tongabezi has long-standing community ties with the Toka Leya village adjacent to the property, offering guests guided village visits. Activities include boat trips, guided falls tours, and sundowner cruises.',
    capacity_people: 20,
    price_usd_per_night: '500–900',  // ← VERIFY — high-end; confirm current rates
    amenities: ['meals', 'bar', 'river_activities', 'cultural_visits', 'pool'],
    booking: 'email',
    contact: null,              // ← VERIFY tongabezi.com
    languages: ['English'],
    nearby_experiences: ['victoria-falls-zambia', 'mukuni-village'],
    best_time: 'May – November'
  },

  // ── WESTERN PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'king-lewanika-lodge',
    province_id: 'western',
    name: 'King Lewanika Lodge — Liuwa Plain',
    type: 'lodge',
    community_owned: false,
    community_ties: 'strong',
    lat: -14.682, lng: 22.573,
    address: 'Liuwa Plain National Park, Western Province',
    description: 'A luxury lodge inside Liuwa Plain National Park — one of Africa\'s most remote wilderness areas. African Parks manages the park in partnership with the Barotse Royal Establishment and surrounding communities. During Kuomboka season (March–April), guests may observe the royal barge from the lodge area on the Zambezi.',
    capacity_people: 16,
    price_usd_per_night: '700–1200',  // ← VERIFY
    amenities: ['full_board', 'game_drives', 'cultural_visits', 'walking'],
    booking: 'operator',
    contact: null,              // ← VERIFY Time+Tide / African Parks
    languages: ['English', 'Lozi'],
    nearby_experiences: ['kuomboka-ceremony', 'barotse-floodplain-canoe'],
    best_time: 'April – November'
  },
  {
    id: 'lozi-flood-village-homestay',
    province_id: 'western',
    name: 'Barotse Flood Village Homestay',
    type: 'village_homestay',
    community_owned: true,
    community_ties: 'strong',
    lat: -15.35, lng: 23.05,
    address: 'Barotse Floodplain villages, near Mongu',
    description: 'Informal community homestay arrangement with Lozi fishing families on the Barotse Floodplain. Guests sleep in flood village huts on raised mounds, participate in fishing activities, and share meals prepared by the family. Best experienced during April–June when the plain is flooded. Arrangements through Mongu-based guides.',
    capacity_people: 4,         // ← VERIFY — typically very small
    price_usd_per_night: '20–35',
    amenities: ['meals', 'mokoro', 'fishing', 'traditional_huts'],
    booking: 'whatsapp',
    contact: null,              // ← VERIFY guide contact in Mongu
    languages: ['Lozi', 'limited English'],
    nearby_experiences: ['barotse-floodplain-canoe', 'kuomboka-ceremony', 'limulunga-palace'],
    best_time: 'April – June (flood season)'
  },

  // ── EASTERN PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'kawaza-village-stay',
    province_id: 'eastern',
    name: 'Kawaza Village — Traditional Hut Stay',
    type: 'village_homestay',
    community_owned: true,
    community_ties: 'strong',
    lat: -13.101, lng: 31.799,
    address: 'Kawaza Village, near Mfuwe, South Luangwa',
    description: 'Award-winning community tourism project near South Luangwa NP. Guests stay in traditional mud huts within a genuine working Kunda village. Activities include school visits, traditional cooking, water collection, and evening dance performances. Managed by the community with support from Robin Pope Safaris.',
    capacity_people: 12,        // ← VERIFY current capacity
    price_usd_per_night: '35–60',
    amenities: ['meals', 'cultural_guide', 'village_activities', 'traditional_huts'],
    booking: 'operator',        // Robin Pope Safaris or direct
    contact: null,              // ← VERIFY kawazavillage.co.uk
    languages: ['Kunda / Nyanja', 'English'],
    nearby_experiences: ['kawaza-village', 'ncwala-ceremony', 'nyau-dancers'],
    best_time: 'May – October'
  },
  {
    id: 'flatdogs-camp',
    province_id: 'eastern',
    name: 'Flatdogs Camp — Mfuwe',
    type: 'camp',
    community_owned: false,
    community_ties: 'moderate',
    lat: -13.089, lng: 31.773,
    address: 'Mfuwe, South Luangwa National Park boundary',
    description: 'Popular, well-priced camp directly on the boundary of South Luangwa NP. Known for good guiding, relaxed atmosphere, and hippos that walk through camp at night. Community visits to Kawaza Village can be arranged from here. A good value base for cultural and wildlife experiences in Eastern Province.',
    capacity_people: 40,
    price_usd_per_night: '150–280',  // ← VERIFY
    amenities: ['meals', 'bar', 'pool', 'game_drives', 'cultural_visits'],
    booking: 'email',
    contact: null,              // ← VERIFY flatdogscamp.com
    languages: ['English'],
    nearby_experiences: ['kawaza-village', 'ncwala-ceremony'],
    best_time: 'May – November'
  },

  // ── NORTHERN PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'chishimba-falls-guesthouse',
    province_id: 'northern',
    name: 'Chishimba Falls Community Guesthouse',
    type: 'guesthouse',
    community_owned: true,
    community_ties: 'strong',
    lat: -10.198, lng: 31.388,
    address: 'Chishimba Falls, near Kasama, Northern Province',
    description: 'A simple community-run guesthouse at Chishimba Falls offering basic rooms and home-cooked Bemba meals. Overnight guests can arrange evening storytelling sessions with Bemba elders and women\'s cooking demonstrations. The falls circuit is a short walk from the guesthouse.',
    capacity_people: 10,        // ← VERIFY
    price_usd_per_night: '20–35',
    amenities: ['meals', 'cultural_guide', 'walking'],
    booking: 'walkin',
    contact: null,              // ← VERIFY
    languages: ['Bemba', 'limited English'],
    nearby_experiences: ['chishimba-falls', 'mutomboko-ceremony'],
    best_time: 'May – November'
  },
  {
    id: 'shiwa-ngandu-manor',
    province_id: 'northern',
    name: 'Shiwa Ng\'andu Manor House',
    type: 'heritage_lodge',
    community_owned: false,
    community_ties: 'moderate',
    lat: -11.197, lng: 31.733,
    address: 'Shiwa Ng\'andu Estate, near Chinsali',
    description: 'Grade I listed English manor house in the Zambian bush, still operated by the Gore-Browne family. Accommodation in the historic manor combines colonial heritage tourism with community visits to surrounding villages. The estate has hot springs, a lake, and extensive miombo woodland walks.',
    capacity_people: 12,
    price_usd_per_night: '80–150',   // ← VERIFY
    amenities: ['meals', 'heritage_tour', 'hot_springs', 'community_walks', 'library'],
    booking: 'email',
    contact: null,              // ← VERIFY shiwangandu.com
    languages: ['English', 'Bemba'],
    nearby_experiences: ['kaunda-birthplace', 'kalambo-falls'],
    best_time: 'May – October'
  },

  // ── LUAPULA PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'lake-mweru-fishing-homestay',
    province_id: 'luapula',
    name: 'Lake Mweru Fishing Cooperative Homestay',
    type: 'village_homestay',
    community_owned: true,
    community_ties: 'strong',
    lat: -9.0, lng: 28.75,
    address: 'Nchelenge District, Lake Mweru shores',
    description: 'Community cooperative homestay with Lunda fishing families on Lake Mweru. Guests share accommodation in a family compound, participate in night fishing and net-casting, assist with the kapenta drying process, and are introduced to traditional Lunda cooking. Arranged through the Nchelenge fishing cooperative.',
    capacity_people: 6,         // ← VERIFY
    price_usd_per_night: '20–40',
    amenities: ['meals', 'fishing', 'net_casting', 'cultural_guide'],
    booking: 'whatsapp',
    contact: null,              // ← VERIFY cooperative contact
    languages: ['Lunda', 'Bemba', 'limited English'],
    nearby_experiences: ['lake-mweru-fishing', 'mutomboko-luapula', 'kazembe-museum'],
    best_time: 'May – September'
  },
  {
    id: 'samfya-beach-guesthouse',
    province_id: 'luapula',
    name: 'Samfya Beach Guesthouse — Lake Bangweulu',
    type: 'guesthouse',
    community_owned: false,
    community_ties: 'moderate',
    lat: -11.341, lng: 29.548,
    address: 'Samfya, Lake Bangweulu',
    description: 'Simple guesthouse on the shores of Lake Bangweulu in Samfya — one of Zambia\'s most scenic and undervisited lakeshores. A base for the Kwanga ceremony, shoebill stork birdwatching on the Bangweulu Swamps, and fishing community visits. Bangweulu is a major black lechwe habitat.',
    capacity_people: 16,        // ← VERIFY
    price_usd_per_night: '25–50',
    amenities: ['meals', 'lake_access', 'fishing', 'birdwatching'],
    booking: 'walkin',
    contact: null,
    languages: ['Bemba', 'limited English'],
    nearby_experiences: ['kwanga', 'lake-mweru-fishing'],
    best_time: 'June – October'
  },

  // ── COPPERBELT PROVINCE ─────────────────────────────────────────────────────

  {
    id: 'nsobe-game-camp-stay',
    province_id: 'copperbelt',
    name: 'Nsobe Game Camp',
    type: 'camp',
    community_owned: false,
    community_ties: 'moderate',
    lat: -12.612, lng: 28.141,
    address: 'Balanbeen, Copperbelt Province',
    description: 'Safari-style camp on a scenic dam in Balanbeen. Popular with Zambian residents for affordable weekend breaks. Offers en-suite safari tents, a restaurant, canoeing, fishing, cycling, and Lamba village visits. One of the few wildlife-accessible properties in the Copperbelt within a community context.',
    capacity_people: 24,        // ← VERIFY (5 tents + 7 chalets)
    price_usd_per_night: '40–80',
    amenities: ['meals', 'bar', 'game_drives', 'canoe', 'fishing', 'pool', 'cycling'],
    booking: 'whatsapp',
    contact: null,              // ← VERIFY nsobe contact
    languages: ['English', 'Bemba'],
    nearby_experiences: ['nsobe-game-camp', 'lamba-village-ndola', 'copperbelt-museum'],
    best_time: 'May – October'
  },

  // ── NORTH-WESTERN PROVINCE ──────────────────────────────────────────────────

  {
    id: 'lwawu-camp-stay',
    province_id: 'northwestern',
    name: 'Lwawu Community Camp — Zambezi',
    type: 'community_camp',
    community_owned: true,
    community_ties: 'strong',
    lat: -13.548, lng: 23.107,
    address: 'Near Zambezi town, North-Western Province',
    description: 'A culturally immersive community camp operated by Luvale community members near Zambezi town. Packages include Makishi dance performances, guided walks to the Mize sacred forest, Luvale wood-carving workshops, and overnight stays. All revenue is community-retained. Designed around the Likumbi Lya Mize festival season.',
    capacity_people: 16,        // ← VERIFY
    price_usd_per_night: '30–60',
    amenities: ['meals', 'cultural_guide', 'makishi_performance', 'craft_workshop', 'forest_walk'],
    booking: 'whatsapp',
    contact: null,              // ← VERIFY
    languages: ['Luvale', 'limited English'],
    nearby_experiences: ['likumbi-lya-mize', 'lwawu-community-camp', 'mize-sacred-forest'],
    best_time: 'June – September'
  },

  // ── CENTRAL PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'shiwa-central-guesthouse',
    province_id: 'central',
    name: 'Kabwe Central Guesthouse',
    type: 'guesthouse',
    community_owned: false,
    community_ties: 'low',
    lat: -14.447, lng: 28.446,
    address: 'Kabwe town, Central Province',
    description: 'Basic but clean town guesthouse in Kabwe — the main urban base for Central Province cultural tourism. A practical overnight stop when visiting the Kabwe Museum, Lenje cultural days, and the Kulamba Kubwalo ceremony corridor. Standard mid-range Zambian guesthouse with meals on request.',
    capacity_people: 20,        // ← VERIFY — placeholder, confirm real property
    price_usd_per_night: '25–50',
    amenities: ['meals_on_request', 'parking', 'wifi'],
    booking: 'walkin',
    contact: null,              // ← VERIFY — identify actual recommended property
    languages: ['English', 'Lenje'],
    nearby_experiences: ['kabwe-museum', 'lenje-cultural-days'],
    best_time: 'Year-round'
  },
  {
    id: 'fairford-farm-stay',
    province_id: 'central',
    name: 'Fairford Farm Stay — Kalomo Area',
    type: 'farm_stay',
    community_owned: false,
    community_ties: 'moderate',
    lat: -16.962, lng: 26.493,
    address: '0.5 miles from T1 Great North Road, Kalomo area',
    description: 'A three-bedroom farmhouse near Kalomo in Southern/Central Province border corridor with a private pool, clay tennis court (seasonal), and garden. A quiet, affordable base for self-drive travellers between Lusaka, Livingstone, and Kafue. Community interactions with Toka Leya villages can be arranged through the farm.',
    capacity_people: 6,
    price_usd_per_night: '60–100',
    amenities: ['self_catering', 'pool', 'garden', 'parking'],
    booking: 'email',
    contact: null,              // ← VERIFY current operator
    languages: ['English'],
    nearby_experiences: ['lenje-cultural-days', 'kabwe-museum'],
    best_time: 'Year-round'
  },

  // ── MUCHINGA PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'namwanga-highland-homestay',
    province_id: 'muchinga',
    name: 'Namwanga Highland Community Guesthouse',
    type: 'community_guesthouse',
    community_owned: true,
    community_ties: 'strong',
    lat: -9.355, lng: 32.787,
    address: 'Near Nakonde, Muchinga Province',
    description: 'A small community guesthouse operated by the Namwanga people near Nakonde on the Tanzania border. An entry point for Nyika Plateau trekking and the Mulasa rain ceremony. Guests sleep in simple rooms and share meals with the host family. Highland cuisine — unique to this part of Zambia — is a highlight.',
    capacity_people: 8,         // ← VERIFY
    price_usd_per_night: '15–30',
    amenities: ['meals', 'trekking_guide', 'cultural_guide'],
    booking: 'whatsapp',
    contact: null,              // ← VERIFY
    languages: ['Namwanga', 'limited English'],
    nearby_experiences: ['nyika-plateau', 'namwanga-rain-ceremony', 'kaunda-birthplace'],
    best_time: 'May – October'
  },
  {
    id: 'natwange-mukungule-campsite',
    province_id: 'muchinga',
    name: 'Natwange Mukungule Community Campsite',
    type: 'community_campsite',
    community_owned: true,
    community_ties: 'strong',
    lat: -11.5, lng: 31.9,     // ← VERIFY exact location on Mwaleshi River
    address: 'Mano entrance, North Luangwa National Park, Mpika area',
    description: 'Community campsite with 6 private pitches on the Mwaleshi River near the Mano entrance gate to North Luangwa National Park. Each pitch has a hot shower, flush toilet, and braai area. A Bisa cultural gift shop is attached. Managed by the Frankfurt Zoological Society in partnership with the Bisa community.',
    capacity_people: 24,        // 6 sites × 4 people
    price_usd_per_night: '15–20', // ← VERIFY current rates
    amenities: ['hot_shower', 'flush_toilet', 'braai', 'cultural_gift_shop'],
    booking: 'email',
    contact: null,              // ← VERIFY FZS contact
    languages: ['Bisa', 'Bemba', 'English'],
    nearby_experiences: ['bisa-malaila', 'namwanga-rain-ceremony'],
    best_time: 'May – October'
  },

  // ── LUSAKA PROVINCE ─────────────────────────────────────────────────────────

  {
    id: 'chaminuka-lodge',
    province_id: 'lusaka',
    name: 'Chaminuka Lodge & Nature Reserve',
    type: 'lodge',
    community_owned: false,
    community_ties: 'moderate',
    lat: -14.994, lng: 28.409,
    address: 'Chaminuka, 45km from Lusaka',
    description: 'A 10,000-acre private nature reserve and lodge close to Lusaka. Features a large collection of African art, wildlife drives, fishing, and cultural displays. A good first-night introduction to Zambia for international visitors landing at Lusaka before heading to bush destinations. Community outreach programmes support surrounding villages.',
    capacity_people: 40,
    price_usd_per_night: '150–300',  // ← VERIFY
    amenities: ['meals', 'bar', 'pool', 'game_drives', 'african_art', 'cultural_displays'],
    booking: 'email',
    contact: null,              // ← VERIFY chaminuka.com
    languages: ['English'],
    nearby_experiences: ['lusaka-national-museum', 'kabwata-cultural-village', 'chakwela-makumbi'],
    best_time: 'Year-round'
  },
  {
    id: 'lusaka-urban-cultural-guesthouse',
    province_id: 'lusaka',
    name: 'Lusaka Township Cultural Homestay',
    type: 'urban_homestay',
    community_owned: true,
    community_ties: 'strong',
    lat: -15.43, lng: 28.31,
    address: 'Kabwata area, Lusaka',
    description: 'Community-organised urban homestay experience in the Kabwata township, close to Kabwata Cultural Village. Hosted by local community historians who also lead the neighbourhood walking tours. Guests share a family home, share meals, and have direct access to the Kabwata craft market. A grassroots alternative to hotel stays in Lusaka.',
    capacity_people: 4,         // ← VERIFY — household capacity varies
    price_usd_per_night: '20–35',
    amenities: ['meals', 'cultural_guide', 'craft_market_access', 'walking_tour'],
    booking: 'whatsapp',
    contact: null,              // ← VERIFY community contact
    languages: ['English', 'Nyanja', 'Bemba', 'Tonga'],
    nearby_experiences: ['kabwata-cultural-village', 'lusaka-national-museum', 'chakwela-makumbi'],
    best_time: 'Year-round'
  }

];
