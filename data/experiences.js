// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   data/experiences.js
//
//   3 experiences per province × 10 provinces = 30 entries
//   Fields marked  ← VERIFY  should be confirmed on the ground
//   before going live. Coordinates are approximate town-level
//   centroids — replace with GPS from field visits or QGIS.
// ═══════════════════════════════════════════════

const experiences = [

  // ── SOUTHERN PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'mukuni-village',
    province_id: 'southern',
    name: 'Mukuni Village Cultural Immersion',
    category: 'community',
    tags: ['ceremony', 'craft', 'community', 'overnight'],
    lat: -17.862, lng: 25.875,
    description: 'One of Zambia\'s oldest living chiefdoms, Mukuni Village is home to the Leya people and has welcomed visitors for decades. Guided tours cover the royal palace, ancestral shrines, traditional craft workshops, and a women-led basket-weaving cooperative. Overnight stays in traditional huts are available.',
    base_town: 'Livingstone',
    distance_km: 8,
    best_time: 'Year-round',
    duration: 'Half day – overnight',
    difficulty: 'Easy',
    cost_usd: '15–40',          // ← VERIFY current entry/overnight rates
    booking: 'walkin',
    contact: null,              // ← VERIFY contact number
    cbt: true,
    highlights: [
      'Meeting the Chief of the Leya chiefdom',
      'Women\'s craft cooperative — direct artisan purchases',
      'Traditional Tonga and Leya dance performances',
      'Guided ancestral shrine walk'
    ]
  },
  {
    id: 'livingstone-museum',
    province_id: 'southern',
    name: 'Livingstone Museum',
    category: 'heritage',
    tags: ['heritage', 'history'],
    lat: -17.845, lng: 25.854,
    description: 'The largest and oldest museum in Zambia, holding the country\'s most comprehensive ethnographic collection. Exhibits cover pre-colonial history, 73 Zambian tribes, David Livingstone\'s letters and artefacts, and Iron Age archaeological finds from the Batoka Gorge region.',
    base_town: 'Livingstone',
    distance_km: 1,
    best_time: 'Year-round',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: '5–10',           // ← VERIFY current admission
    booking: 'walkin',
    contact: null,              // ← VERIFY
    cbt: false,
    highlights: [
      'Ethnographic gallery — 73 tribes represented',
      'David Livingstone personal collection',
      'Iron Age pottery and Batoka Gorge archaeology',
      'Natural history and wildlife exhibits'
    ]
  },
  {
    id: 'victoria-falls-zambia',
    province_id: 'southern',
    name: 'Mosi-oa-Tunya — The Smoke That Thunders',
    category: 'nature',
    tags: ['nature', 'heritage'],
    lat: -17.924, lng: 25.857,
    description: 'Victoria Falls — Mosi-oa-Tunya in Kololo — is a UNESCO World Heritage Site and one of the Seven Natural Wonders of the World. The Zambian side offers unobstructed views from the rainforest path, access to Livingstone Island, and the famous Devil\'s Pool swim at the lip of the falls (seasonal).',
    base_town: 'Livingstone',
    distance_km: 10,
    best_time: 'Feb – May (peak flow); Sep – Dec (Devil\'s Pool)',
    duration: '2–4 hours',
    difficulty: 'Easy',
    cost_usd: '20–30',          // ← VERIFY current park entry
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Rainforest walk with 18 viewpoints',
      'Livingstone Island guided tour',
      'Devil\'s Pool swim (seasonal)',
      'Boiling Point — end of the gorge lookout'
    ]
  },

  // ── WESTERN PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'kuomboka-ceremony',
    province_id: 'western',
    name: 'Kuomboka Ceremony — Lozi Royal Migration',
    category: 'ceremony',
    tags: ['ceremony', 'heritage'],
    lat: -15.204, lng: 23.122,
    description: 'One of Africa\'s most spectacular living traditions, the Kuomboka marks the Litunga\'s migration by royal barge from his summer palace at Lealui to his winter palace at Limulunga as the Barotse Floodplain rises. Thousands line the banks dressed in traditional Siziba attire.',
    base_town: 'Mongu',
    distance_km: 15,
    best_time: 'March – April (lunar-dependent; date announced weeks in advance)',
    duration: '1–2 days',
    difficulty: 'Moderate',
    cost_usd: 'Free to observe',
    booking: 'walkin',
    contact: null,              // ← VERIFY Barotse Royal Establishment contact
    cbt: false,
    highlights: [
      'Nalikwanda — the King\'s black and white royal barge',
      'Mboela — the Queen\'s barge procession',
      'Traditional Lozi drumming and war-canoe escorts',
      'Siziba and Musinsi traditional attire'
    ]
  },
  {
    id: 'barotse-floodplain-canoe',
    province_id: 'western',
    name: 'Barotse Floodplain Mokoro Expeditions',
    category: 'community',
    tags: ['community', 'nature'],
    lat: -15.35, lng: 23.05,
    description: 'Guided dugout canoe trips across the Barotse Floodplain with local Lozi fishermen. The flooded plain — a UNESCO Ramsar wetland — is home to extraordinary birdlife, traditional fishing villages on raised mounds, and pristine water-lily lagoons. Homestays in flood villages available.',
    base_town: 'Mongu',
    distance_km: 20,
    best_time: 'April – June (flood season)',
    duration: 'Half day – multi-day',
    difficulty: 'Easy',
    cost_usd: '20–50',          // ← VERIFY with local operators
    booking: 'whatsapp',
    contact: null,              // ← VERIFY
    cbt: true,
    highlights: [
      'Traditional mokoro (dugout canoe) fishing techniques',
      'Flood village homestays on raised mounds',
      'Sitatunga antelope and shoebill stork sightings',
      'Sunset on the floodplain'
    ]
  },
  {
    id: 'limulunga-palace',
    province_id: 'western',
    name: 'Limulunga Palace & Lozi Craft Markets',
    category: 'heritage',
    tags: ['heritage', 'craft'],
    lat: -15.18, lng: 23.11,
    description: 'The Litunga\'s winter palace at Limulunga is the seat of the Barotse Kingdom and the destination of the Kuomboka procession. The surrounding town is Zambia\'s best market for Lozi woodcarving, traditional basketry, and woven mats — skills passed across generations in Western Province.',
    base_town: 'Mongu',
    distance_km: 12,
    best_time: 'May – October',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: 'Free – nominal',
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Limulunga Palace grounds and royal gardens',
      'Lozi woodcarving workshops',
      'Traditional basket weaving demonstration',
      'Mongu town craft market'
    ]
  },

  // ── EASTERN PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'ncwala-ceremony',
    province_id: 'eastern',
    name: 'Nc\'wala First Fruits Ceremony',
    category: 'ceremony',
    tags: ['ceremony', 'heritage'],
    lat: -13.631, lng: 32.643,
    description: 'The Nc\'wala is the most important ceremony of the Ngoni people — a first-fruits harvest thanksgiving to ancestral spirits held at Mtenguleni village, Chipata. Ngoni warriors in full regalia perform mock battle dances (impis), a black bull is sacrificed, and the Paramount Chief Mpezeni blesses the harvest.',
    base_town: 'Chipata',
    distance_km: 12,
    best_time: 'Last weekend of February',
    duration: '1–2 days',
    difficulty: 'Easy',
    cost_usd: 'Free to attend',
    booking: 'walkin',
    contact: null,              // ← VERIFY Ngoni Royal Establishment contact
    cbt: false,
    highlights: [
      'Impis — Ngoni warrior mock battle dances in full regalia',
      'Bull sacrifice and first-fruits offering to Paramount Chief',
      'Traditional Ngoni drumming and praise singing',
      'Multi-tribal gathering from Zambia, Zimbabwe, Malawi'
    ]
  },
  {
    id: 'kawaza-village',
    province_id: 'eastern',
    name: 'Kawaza Village — Kunda Community Experience',
    category: 'community',
    tags: ['community', 'heritage', 'overnight'],
    lat: -13.101, lng: 31.799,
    description: 'Award-winning community tourism project near South Luangwa National Park. Kawaza is a genuine Kunda village that has invited visitors since the 1990s. Guests participate in daily village life — water collection, maize grinding, traditional cooking, school visits, and evening dance performances.',
    base_town: 'Mfuwe',
    distance_km: 5,
    best_time: 'May – October',
    duration: 'Half day – overnight',
    difficulty: 'Easy',
    cost_usd: '35–60',          // ← VERIFY current rates
    booking: 'operator',        // Robin Pope Safaris or direct
    contact: null,              // ← VERIFY kawazavillage.co.uk
    cbt: true,
    highlights: [
      'Silver Otter Award winner — Best Overseas Tourism Project 2000',
      'Traditional hut accommodation in the village',
      'School and clinic visits — 1,000+ pupil school',
      'Evening feast and community dance in the nsaka'
    ]
  },
  {
    id: 'nyau-dancers',
    province_id: 'eastern',
    name: 'Nyau Masked Dancers of the Chewa',
    category: 'ceremony',
    tags: ['ceremony', 'heritage', 'craft'],
    lat: -13.975, lng: 31.924,
    description: 'The Nyau is a secret society of the Chewa people whose elaborate masked dances are performed at initiations, funerals, and the annual Kulamba ceremony at Mkaika Palace, Katete. The Gule Wamkulu — Great Dance — is UNESCO-listed intangible cultural heritage. Masks represent ancestral spirits and wild animals.',
    base_town: 'Katete',
    distance_km: 0,
    best_time: 'Last Saturday of August (Kulamba); initiations year-round',
    duration: '1 day',
    difficulty: 'Easy',
    cost_usd: 'Free – nominal',
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'UNESCO Gule Wamkulu — Great Dance of the Chewa',
      'Hand-carved animal and spirit masks',
      'Kulamba ceremony — homage to Paramount Chief Kalonga Gawa Undi',
      'Chewa cultural connections across Zambia, Malawi, Mozambique'
    ]
  },

  // ── NORTHERN PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'mutomboko-ceremony',
    province_id: 'northern',
    name: 'Ukusefya Pa Ng\'wena — Bemba Heritage Ceremony',
    category: 'ceremony',
    tags: ['ceremony', 'heritage'],
    lat: -10.155, lng: 31.087,
    description: 'Held at Mungwi under Paramount Chief Chitimukulu, the Ukusefya Pa Ng\'wena re-enacts the Bemba migration from Angola to Zambia. The Chitimukulu is carried on a throne featuring a paper-mâché crocodile — the Bemba royal totem — to the original settlement site, with mass dancing, drumming, and traditional food.',
    base_town: 'Kasama',
    distance_km: 32,
    best_time: 'August',
    duration: '1–2 days',
    difficulty: 'Moderate',
    cost_usd: 'Free to attend',
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Chitimukulu\'s royal crocodile throne procession',
      'Bemba migration re-enactment to Ng\'wena settlement',
      'Mass community dancing and traditional brewing',
      'Royal regalia and chiefly praise singers'
    ]
  },
  {
    id: 'chishimba-falls',
    province_id: 'northern',
    name: 'Chishimba Falls & Bemba Cultural Trek',
    category: 'nature',
    tags: ['nature', 'community', 'heritage'],
    lat: -10.198, lng: 31.388,
    description: 'A circuit of three distinct waterfalls — Kaela, Mutumuna, and Chishimba — set in sacred miombo woodland. Local Bemba guides lead treks connecting the falls to nearby villages offering overnight cultural experiences, women\'s cooking demonstrations, and elder storytelling sessions by firelight.',
    base_town: 'Kasama',
    distance_km: 30,
    best_time: 'May – November',
    duration: '1–2 days',
    difficulty: 'Moderate',
    cost_usd: '10–30',          // ← VERIFY entry and guide fees
    booking: 'walkin',
    contact: null,
    cbt: true,
    highlights: [
      'Kaela, Mutumuna and Chishimba — three-falls circuit',
      'Sacred Bemba woodland and shrine sites',
      'Village overnight with women\'s cooking demonstration',
      'Elder storytelling and oral history sessions'
    ]
  },
  {
    id: 'kalambo-falls',
    province_id: 'northern',
    name: 'Kalambo Falls — Africa\'s Second Highest Waterfall',
    category: 'nature',
    tags: ['nature', 'heritage'],
    lat: -8.595, lng: 31.235,
    description: 'Kalambo Falls drops 235m in a single sheer plunge on the Zambia–Tanzania border — the second-highest uninterrupted waterfall in Africa. The gorge below contains one of Africa\'s most important prehistoric archaeological sites, with evidence of human occupation dating back 250,000 years, including wooden structures.',
    base_town: 'Mbala',
    distance_km: 35,
    best_time: 'February – May (peak flow)',
    duration: 'Full day',
    difficulty: 'Moderate',
    cost_usd: '5–15',           // ← VERIFY entry fee
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      '235m single-drop plunge — second in Africa',
      'UNESCO World Heritage nomination (archaeological site)',
      'Wooden structures dated to 476,000 years ago',
      'Lake Tanganyika views from the gorge rim'
    ]
  },

  // ── LUAPULA PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'mutomboko-luapula',
    province_id: 'luapula',
    name: 'Mutomboko Ceremony — Lunda Kingdom',
    category: 'ceremony',
    tags: ['ceremony', 'heritage'],
    lat: -9.438, lng: 28.693,
    description: 'The Mutomboko celebrates the military victories and migration of the Lunda kingdom under Mwata Kazembe from the Congo Basin. Held at Mwansabombwe, the ceremony features warrior dances, royal regalia displays, and the Mwata Kazembe entering seated on a lion skin. Visitors must not greet or hand gifts directly to the Mwata.',
    base_town: 'Mwansabombwe',
    distance_km: 0,
    best_time: 'Last week of July',
    duration: '1–2 days',
    difficulty: 'Moderate',
    cost_usd: 'Free to attend',
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Mwata Kazembe entering on a lion skin — royal warrior tradition',
      'Lunda warrior dances from Zambia and DRC',
      'Lunda cultural museum opened adjacent to ceremony site',
      'Royal regalia and traditional Lunda craftwork'
    ]
  },
  {
    id: 'lake-mweru-fishing',
    province_id: 'luapula',
    name: 'Lake Mweru Sunrise Fishing Expeditions',
    category: 'community',
    tags: ['community', 'nature'],
    lat: -9.0, lng: 28.75,
    description: 'Join Lunda fishing families on Lake Mweru for night and early-morning fishing expeditions. The lake is one of Central Africa\'s most productive fisheries, famous for kapenta (sardine-like fish dried in the sun). Community cooperatives offer homestay packages including net-casting lessons and traditional Lunda cooking.',
    base_town: 'Nchelenge',
    distance_km: 5,
    best_time: 'May – September',
    duration: 'Half day – overnight',
    difficulty: 'Easy',
    cost_usd: '20–40',          // ← VERIFY cooperative rates
    booking: 'whatsapp',
    contact: null,              // ← VERIFY Luapula cooperative contact
    cbt: true,
    highlights: [
      'Night fishing with traditional nets on Lake Mweru',
      'Kapenta fish-drying industry village tour',
      'Traditional Lunda cooking and nshima preparation',
      'Nchelenge market — one of Central Africa\'s biggest fish markets'
    ]
  },
  {
    id: 'kazembe-museum',
    province_id: 'luapula',
    name: 'Lunda-Kazembe Cultural Museum',
    category: 'heritage',
    tags: ['heritage', 'history'],
    lat: -9.441, lng: 28.695,
    description: 'The cultural museum at Mwansabombwe chronicles the Lunda-Kazembe Kingdom — historically one of the wealthiest in Central Africa with trade networks reaching the Indian Ocean. Exhibits include royal artefacts, oral history recordings, and displays on the Indian Ocean–Atlantic trade routes the Kazembe Kingdom controlled.',
    base_town: 'Mwansabombwe',
    distance_km: 0,
    best_time: 'Year-round',
    duration: '2 hours',
    difficulty: 'Easy',
    cost_usd: '5',              // ← VERIFY
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Royal Kazembe artefacts and throne regalia',
      'Indian Ocean–Atlantic trade network maps',
      'Oral history recordings of Lunda elders',
      'Kapenta and Luapula River fishing heritage displays'
    ]
  },

  // ── COPPERBELT PROVINCE ─────────────────────────────────────────────────────

  {
    id: 'copperbelt-museum',
    province_id: 'copperbelt',
    name: 'Copperbelt Museum, Ndola',
    category: 'heritage',
    tags: ['heritage', 'history', 'craft'],
    lat: -12.978, lng: 28.636,
    description: 'The Copperbelt Museum in Ndola holds Zambia\'s most comprehensive industrial and urban cultural heritage collection. Exhibits cover the colonial mining era, the birth of Zambian urban identity, Lamba pre-colonial heritage, and the distinctive visual culture — kalindula music, kitenge fashion, and copper art — that emerged from the mining towns.',
    base_town: 'Ndola',
    distance_km: 1,
    best_time: 'Year-round',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: '5',              // ← VERIFY
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Mining era social history — compound life and labour culture',
      'Lamba pre-colonial heritage gallery',
      'Kalindula music and township arts collection',
      'Copper art and kitenge textile exhibits'
    ]
  },
  {
    id: 'nsobe-game-camp',
    province_id: 'copperbelt',
    name: 'Nsobe Game Camp — Balanbeen',
    category: 'community',
    tags: ['nature', 'community', 'overnight'],
    lat: -12.612, lng: 28.141,
    description: 'Community-adjacent game camp on a scenic dam in Balanbeen, Copperbelt Province. Offers a rare mix of wildlife, affordable accommodation, and cultural interactions with Lamba communities. Activities include game drives, canoeing, fishing, reptile park visits, and cycling. Favoured by Zambian residents for weekend breaks.',
    base_town: 'Balanbeen',
    distance_km: 0,
    best_time: 'May – October',
    duration: '2–4 days',
    difficulty: 'Easy',
    cost_usd: '40–80 per night', // ← VERIFY current rates
    booking: 'whatsapp',
    contact: null,              // ← VERIFY nsobe contact
    cbt: true,
    highlights: [
      'Game drives with zebra, giraffe, eland, waterbuck',
      'Lakeside camping at sunset',
      'Canoe and fishing on the dam',
      'Lamba village cultural visits nearby'
    ]
  },
  {
    id: 'lamba-village-ndola',
    province_id: 'copperbelt',
    name: 'Lamba Traditional Village — Elder Storytelling',
    category: 'community',
    tags: ['heritage', 'community'],
    lat: -13.01, lng: 28.64,
    description: 'The Lamba people are the original inhabitants of the Copperbelt plateau, predating the mining era by centuries. Village elder sessions near Ndola explore Lamba ancestral customs, rain-calling ceremonies, and oral traditions that survived the disruptions of colonial industrialisation.',
    base_town: 'Ndola',
    distance_km: 15,            // ← VERIFY exact village location
    best_time: 'Year-round',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: '10–20',          // ← VERIFY
    booking: 'whatsapp',
    contact: null,
    cbt: true,
    highlights: [
      'Lamba oral history sessions with village elders',
      'Pre-mining land use and chiefdom history',
      'Traditional Lamba craft demonstrations',
      'Ukwilimuna ceremony context (held in July)'
    ]
  },

  // ── NORTH-WESTERN PROVINCE ──────────────────────────────────────────────────

  {
    id: 'likumbi-lya-mize',
    province_id: 'northwestern',
    name: 'Likumbi Lya Mize — Luvale Heritage Festival',
    category: 'ceremony',
    tags: ['ceremony', 'craft', 'heritage'],
    lat: -13.545, lng: 23.104,
    description: 'The Likumbi Lya Mize festival at Zambezi is the annual gathering of the Luvale people, historically connected to the re-entry of initiates from the Mukanda (male circumcision) seclusion back into society. The four-day ceremony features Makishi masked dancers representing ancestral spirits, a tradition UNESCO has recognised as intangible cultural heritage.',
    base_town: 'Zambezi',
    distance_km: 5,
    best_time: 'August',
    duration: '3–4 days',
    difficulty: 'Moderate',
    cost_usd: 'Free to attend',
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Makishi masked dancers — UNESCO intangible cultural heritage',
      'Mukanda initiation re-entry ceremonies',
      'Luvale wood-carving and mask-making displays',
      'Multi-day community gathering with traditional foods'
    ]
  },
  {
    id: 'lwawu-community-camp',
    province_id: 'northwestern',
    name: 'Lwawu Community Cultural Camp',
    category: 'community',
    tags: ['community', 'craft', 'overnight'],
    lat: -13.548, lng: 23.107,
    description: 'A culturally immersive community camp near Zambezi designed and operated by Luvale community members. Packages include Makishi dance performances, guided forest walks to the Mize sacred site, Luvale wood-carving workshops, and overnight stays in traditional camp structures. Revenue is fully retained by the community.',
    base_town: 'Zambezi',
    distance_km: 8,             // ← VERIFY exact distance
    best_time: 'June – September',
    duration: '1–3 days',
    difficulty: 'Moderate',
    cost_usd: '30–60',          // ← VERIFY
    booking: 'whatsapp',
    contact: null,              // ← VERIFY community camp contact
    cbt: true,
    highlights: [
      'Community-owned and operated — 100% revenue retention',
      'Makishi dance performances by initiated community members',
      'Guided walk to Mize sacred forest site',
      'Luvale wood-carving and basket-weaving workshops'
    ]
  },
  {
    id: 'mize-sacred-forest',
    province_id: 'northwestern',
    name: 'Mize Natural Heritage & Sacred Forest',
    category: 'heritage',
    tags: ['heritage', 'nature', 'ceremony'],
    lat: -13.55, lng: 23.1,
    description: 'The Mize forest near Zambezi is the spiritual heartland of the Kaonde people and gives the Likumbi Lya Mize festival its name — Mize refers to the original capital of North-Western Province. Sacred sites within the forest are connected to ancestral rain-calling traditions and Luvale initiation ceremonies.',
    base_town: 'Zambezi',
    distance_km: 10,            // ← VERIFY
    best_time: 'June – September',
    duration: '3–4 hours',
    difficulty: 'Moderate',
    cost_usd: '10–20',          // ← VERIFY
    booking: 'whatsapp',
    contact: null,
    cbt: true,
    highlights: [
      'Sacred Kaonde ancestral forest and shrine sites',
      'Rain-calling ceremony connection (Lwendela, held October)',
      'Guided walk with community cultural interpreter',
      'Endemic woodland flora and traditional medicinal plants'
    ]
  },

  // ── CENTRAL PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'kabwe-museum',
    province_id: 'central',
    name: 'Kabwe Museum — Broken Hill Man Site',
    category: 'heritage',
    tags: ['heritage', 'history'],
    lat: -14.447, lng: 28.446,
    description: 'Kabwe (formerly Broken Hill) is the site of the 1921 discovery of Homo rhodesiensis — "Broken Hill Man" — a 300,000-year-old hominin skull now held at the Natural History Museum in London. The Kabwe Museum interprets the site\'s palaeontological significance alongside Lenje pre-colonial heritage and colonial mining history.',
    base_town: 'Kabwe',
    distance_km: 2,
    best_time: 'Year-round',
    duration: '2 hours',
    difficulty: 'Easy',
    cost_usd: '5',              // ← VERIFY
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Homo rhodesiensis — 300,000-year-old hominin interpretation',
      'Lenje cultural heritage and chiefdom history',
      'Colonial Broken Hill mining era exhibits',
      'Repatriation campaign context for the original skull'
    ]
  },
  {
    id: 'lenje-cultural-days',
    province_id: 'central',
    name: 'Lenje Community Cultural Days — Kabwe',
    category: 'community',
    tags: ['community', 'heritage', 'craft'],
    lat: -14.44, lng: 28.43,
    description: 'Organised by village headmen\'s associations near Kabwe, Lenje Cultural Days provide an immersive half-day experience covering traditional beer brewing, ancestral shrine visits, elder storytelling, and a rotating craft market featuring Lenje pottery, mat-weaving, and honey products.',
    base_town: 'Kabwe',
    distance_km: 10,            // ← VERIFY exact village location
    best_time: 'April – September',
    duration: 'Half day',
    difficulty: 'Easy',
    cost_usd: '15–25',          // ← VERIFY
    booking: 'whatsapp',
    contact: null,              // ← VERIFY headmen\'s association contact
    cbt: true,
    highlights: [
      'Traditional Lenje beer (chibwantu) brewing process',
      'Ancestral shrine visit and libation ceremony',
      'Lenje mat-weaving and pottery craft market',
      'Elder oral history session on Lenje migration from the DRC'
    ]
  },
  {
    id: 'shiwa-ngandu',
    province_id: 'central',
    name: 'Shiwa Ng\'andu Manor House',
    category: 'heritage',
    tags: ['heritage', 'history', 'community'],
    lat: -11.197, lng: 31.733,
    description: 'One of Africa\'s most extraordinary historic properties — a Grade I listed English manor house built deep in the Zambian bush by Stewart Gore-Browne in the 1920s. Still operated by the Gore-Browne family, Shiwa offers a rare window into colonial Zambian history alongside meaningful community interaction with surrounding villages.',
    base_town: 'Chinsali',
    distance_km: 45,
    best_time: 'May – October',
    duration: '1–3 days',
    difficulty: 'Moderate',
    cost_usd: '50–120',         // ← VERIFY current rates
    booking: 'email',
    contact: null,              // ← VERIFY shiwangandu.com
    cbt: false,
    highlights: [
      'Grade I listed English manor house in the African bush',
      'Gore-Browne family archive and colonial library',
      'Community walking tours in surrounding villages',
      'Hot springs and Lake Ishiba Ng\'andu nature walk'
    ]
  },

  // ── MUCHINGA PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'nyika-plateau',
    province_id: 'muchinga',
    name: 'Nyika Plateau Highland Trekking',
    category: 'nature',
    tags: ['nature', 'community'],
    lat: -10.595, lng: 33.631,
    description: 'The Nyika Plateau straddles the Zambia–Malawi border at 2,200m — Zambia\'s highest point and an ecosystem unlike anywhere else in the country. Rolling montane grasslands, roan antelope, and remnant forest patches are guided by Namwanga community trekking groups who incorporate village overnights and oral history on highland rain-calling traditions.',
    base_town: 'Nakonde',
    distance_km: 40,            // ← VERIFY access road
    best_time: 'May – October',
    duration: '2–4 days',
    difficulty: 'Moderate – Challenging',
    cost_usd: '30–60',          // ← VERIFY trekking fees
    booking: 'whatsapp',
    contact: null,
    cbt: true,
    highlights: [
      'Zambia\'s highest terrain at 2,200m elevation',
      'Roan antelope, eland, and montane bird species',
      'Namwanga community guides — highland oral history',
      'Village overnight with highland cuisine'
    ]
  },
  {
    id: 'kaunda-birthplace',
    province_id: 'muchinga',
    name: 'Kenneth Kaunda Birthplace — Lubwa Mission',
    category: 'heritage',
    tags: ['heritage', 'history'],
    lat: -10.551, lng: 32.078,
    description: 'Lubwa Mission near Chinsali is the birthplace of Kenneth Kaunda — Zambia\'s founding president and pan-African icon. The mission church, schoolroom, and family home have been preserved as a heritage site. Chinsali district is also home to the Bisa and Namwanga peoples whose cultural life Kaunda was deeply influenced by.',
    base_town: 'Chinsali',
    distance_km: 10,
    best_time: 'Year-round',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: '5–10',           // ← VERIFY
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'KK\'s family home and childhood schoolroom',
      'Lubwa Mission church — Scottish Presbyterian heritage',
      'Chinsali town heritage walk',
      'Chishimba Cultural Village nearby'
    ]
  },
  {
    id: 'namwanga-rain-ceremony',
    province_id: 'muchinga',
    name: 'Namwanga Rain-Calling Ceremony Sites',
    category: 'ceremony',
    tags: ['ceremony', 'heritage', 'nature'],
    lat: -9.355, lng: 32.787,
    description: 'The Namwanga people of the Nakonde highlands practice some of Zambia\'s most intact rain-calling traditions, tied to highland ecology and seasonal planting cycles. Community-guided visits to ceremony sites near Nakonde include oral history on rain shrines, the Mulasa ceremony (September), and traditional highland agricultural practices.',
    base_town: 'Nakonde',
    distance_km: 5,
    best_time: 'August – October',
    duration: 'Half day',
    difficulty: 'Easy',
    cost_usd: '10–20',          // ← VERIFY
    booking: 'whatsapp',
    contact: null,
    cbt: true,
    highlights: [
      'Namwanga rain shrine sites near Nakonde',
      'Mulasa ceremony context (held in September)',
      'Highland agricultural traditions — unique in Zambia',
      'Tanzania border influence on Namwanga cultural practices'
    ]
  },

  // ── LUSAKA PROVINCE ─────────────────────────────────────────────────────────

  {
    id: 'lusaka-national-museum',
    province_id: 'lusaka',
    name: 'Lusaka National Museum',
    category: 'heritage',
    tags: ['heritage', 'history', 'craft'],
    lat: -15.416, lng: 28.283,
    description: 'The Lusaka National Museum holds the country\'s finest ethnographic and natural history collection, covering all 73 Zambian tribes. Exhibits include traditional masks, pottery, textiles, Iron Age finds, and a reconstructed outdoor village where visitors can experience replica dwellings of different ethnic groups. A must-visit introduction to Zambian culture.',
    base_town: 'Lusaka',
    distance_km: 2,
    best_time: 'Year-round',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: '5–10',           // ← VERIFY
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      '73 tribes represented in a single ethnographic collection',
      'Traditional masks, pottery, and textile gallery',
      'Reconstructed outdoor village experience',
      'Natural history collection and wildlife specimens'
    ]
  },
  {
    id: 'kabwata-cultural-village',
    province_id: 'lusaka',
    name: 'Kabwata Cultural Village & Craft Market',
    category: 'craft',
    tags: ['craft', 'heritage', 'community'],
    lat: -15.43, lng: 28.31,
    description: 'Kabwata Cultural Village in central Lusaka hosts a weekly craft market representing all 73 Zambian tribes. Artisans display and sell traditional woodcarving, basket weaving, soapstone sculpture, copper jewellery, and kitenge textiles. The village compound includes traditional dwelling replicas and live cultural demonstrations.',
    base_town: 'Lusaka',
    distance_km: 4,
    best_time: 'Weekends year-round',
    duration: '2–3 hours',
    difficulty: 'Easy',
    cost_usd: 'Free entry; craft purchases vary',
    booking: 'walkin',
    contact: null,
    cbt: true,
    highlights: [
      'All 73 tribes represented by artisan vendors',
      'Direct purchase from artisan producers',
      'Traditional dwelling replicas and cultural demonstrations',
      'Copper jewellery, soapstone carving, Tonga baskets'
    ]
  },
  {
    id: 'chakwela-makumbi',
    province_id: 'lusaka',
    name: 'Chakwela Makumbi — Soli Rain Ceremony',
    category: 'ceremony',
    tags: ['ceremony', 'heritage'],
    lat: -15.33, lng: 28.68,
    description: 'Celebrated by the Soli people — the original inhabitants of the Lusaka plateau — the Chakwela Makumbi ("pulling the clouds") ceremony involves Senior Chieftainess Nkhomeshya II praying to ancestors for rains. A small area of the royal field is burned and new seeds planted, followed by dances from all cultural groups of the Soli Kingdom.',
    base_town: 'Chongwe',
    distance_km: 30,
    best_time: 'Last weekend of September',
    duration: '1 day',
    difficulty: 'Easy',
    cost_usd: 'Free to attend',
    booking: 'walkin',
    contact: null,
    cbt: false,
    highlights: [
      'Chieftainess rain-prayer and first-planting ritual',
      'Burning of royal field — symbolic start of farming season',
      'Multi-cultural Soli Kingdom dance performances',
      'Chongwe district — easy day trip from Lusaka'
    ]
  }

];
