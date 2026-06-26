// ═══════════════════════════════════════════════
//   MyZambia — Cultural Heritage Map
//   data/ceremonies.js
//
//   Source: Wikipedia — Zambian Traditional Ceremonies
//           Ministry of Tourism ceremonies calendar
//           Ntanda Ventures / MyZambia / ZambiaResidentSafaris
//
//   Covers all 10 provinces. Coordinates are approximate —
//   district-centroid level. Replace with GPS from field survey.
//   Fields marked  ← VERIFY  need ground-truthing before going live.
//
//   month_num: integer 1–12 (primary month); use month_label for
//   display since some ceremonies are lunar or variable date.
// ═══════════════════════════════════════════════

const ceremonies = [

  // ── SOUTHERN PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'lwiindi-gonde',
    province_id: 'southern',
    name: 'Lwiindi Gonde',
    tribe: 'Tonga',
    chief: 'Chief Monze',
    district: 'Monze',
    month_num: 7,
    month_label: 'July',
    lat: -16.278, lng: 27.474,
    description: 'The Lwiindi Gonde is the most important ceremony of the Tonga people, a rain-calling and thanksgiving ritual held at Monze. The ceremony invokes ancestral spirits (mizimu) through libations, cattle sacrifices, and communal singing to ensure good rains and harvests.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Photography restrictions apply at sacred sites. Dress modestly.'
  },
  {
    id: 'shimunenga',
    province_id: 'southern',
    name: 'Shimunenga',
    tribe: 'Ila',
    chief: 'Chief Mungaila',
    district: 'Namwala',
    month_num: 10,
    month_label: 'October',
    lat: -15.78, lng: 26.43,
    description: 'Shimunenga honours the warrior Shimunenga who led the Ila people and their cattle to the Kafue Flats after a dispute with his brother. The ceremony is centred on cattle — the cornerstone of Ila identity — and features massive cattle gatherings, warrior displays, and cultural dances on the Kafue Flats.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Best combined with a visit to Lochinvar National Park nearby.'
  },
  {
    id: 'bene-mukuni',
    province_id: 'southern',
    name: 'Bene Mukuni',
    tribe: 'Toka Leya',
    chief: 'Chief Mukuni',
    district: 'Kazungula',
    month_num: 7,
    month_label: 'July & December',
    lat: -17.862, lng: 25.875,
    description: 'The Bene Mukuni ceremony of the Toka Leya people at Mukuni Village celebrates the Leya chiefdom\'s history and identity. Held twice yearly, it features traditional dances, ancestral homage, and the gathering of the Leya people from across the Livingstone corridor. Easily accessible from Livingstone.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Mukuni Village is 8km from Livingstone — easy to combine with a Victoria Falls visit.'
  },
  {
    id: 'lukuni-luzwa-buuka',
    province_id: 'southern',
    name: 'Lukuni Luzwa Buuka',
    tribe: 'Toka Leya',
    chief: 'Chief Musokotwane',
    district: 'Kalomo',
    month_num: 8,
    month_label: 'August',
    lat: -17.02, lng: 26.49,
    description: 'A harvest thanksgiving ceremony of the Toka Leya people, celebrating the fruits of the farming season through communal feasting, ancestral libations, and traditional dance. The Toka Leya occupy the plateau between Livingstone and the Kafue River.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: null
  },

  // ── WESTERN PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'kuomboka',
    province_id: 'western',
    name: 'Kuomboka',
    tribe: 'Lozi',
    chief: 'The Litunga',
    district: 'Limulunga / Mongu',
    month_num: 3,
    month_label: 'March – April (lunar-dependent)',
    lat: -15.204, lng: 23.122,
    description: 'One of Africa\'s most spectacular living traditions — the Lozi Litunga migrates by royal barge (Nalikwanda) from his summer palace at Lealui to his winter palace at Limulunga as the Barotse Floodplain rises. Thousands line the banks in traditional Siziba attire. The date is set weeks in advance based on flood levels and moon phase.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Date announced 2–3 weeks ahead by the Barotse Royal Establishment. Fly Proflight to Mongu. Book accommodation early — King Lewanika Lodge fills fast during Kuomboka.'
  },
  {
    id: 'kazanga',
    province_id: 'western',
    name: 'Kazanga',
    tribe: 'Nkoya',
    chief: 'Chiefs Mutondo and Kahare',
    district: 'Kaoma',
    month_num: 7,
    month_label: 'July',
    lat: -14.78, lng: 24.802,
    description: 'The Kazanga ceremony of the Nkoya people in Kaoma is a harvest thanksgiving and cultural identity celebration. The Nkoya — one of Zambia\'s smaller peoples — use Kazanga to assert cultural distinctiveness within Western Province, featuring royal dance forms unique to the Nkoya kingdom.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'The Nkoya are also present in Southern Province; their ceremony in Kazungula is the Kasanga Makonda (September).'
  },
  {
    id: 'kuomboka-nalolo',
    province_id: 'western',
    name: 'Kuomboka Nalolo',
    tribe: 'Lozi',
    chief: 'Litunga La Mboela',
    district: 'Senanga',
    month_num: 5,
    month_label: 'May',
    lat: -16.112, lng: 23.273,
    description: 'A sister ceremony to the main Kuomboka, the Kuomboka Nalolo is the migration of the Litunga La Mboela — the female co-ruler of the Lozi Kingdom — from Nalolo to her winter palace in Senanga. Less well-known than the main ceremony but equally significant in Lozi constitutional tradition.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Rarely attended by international visitors — an authentic alternative to the more crowded main Kuomboka.'
  },

  // ── EASTERN PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'ncwala',
    province_id: 'eastern',
    name: 'N\'cwala',
    tribe: 'Ngoni',
    chief: 'Paramount Chief Mpezeni',
    district: 'Chipata',
    month_num: 2,
    month_label: 'Last weekend of February',
    lat: -13.631, lng: 32.643,
    description: 'The first-fruits harvest ceremony of the Ngoni people at Mtenguleni village, Chipata. Ngoni warriors (impis) in full regalia perform mock battle dances recreating the Ngoni\'s 19th-century migration from South Africa. A black bull is sacrificed and its blood offered to Paramount Chief Mpezeni before the harvest may begin.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'One of Zambia\'s most accessible and visually striking ceremonies. Chipata has good road connections from Lusaka.'
  },
  {
    id: 'kulamba',
    province_id: 'eastern',
    name: 'Kulamba',
    tribe: 'Chewa',
    chief: 'His Majesty Kalonga Gawa Undi',
    district: 'Katete',
    month_num: 8,
    month_label: 'Last Saturday of August',
    lat: -13.975, lng: 31.924,
    description: 'The Kulamba ceremony at Mkaika Palace, Katete, pays homage to Paramount Chief Kalonga Gawa Undi and God for the harvest. The ceremony unites Chewa from 137 chiefdoms in Malawi, 33 in Mozambique, and 42 in Zambia — making it one of the largest trans-border cultural gatherings in Southern Africa. Gule Wamkulu (Great Dance) masked dancers perform.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Unusually large and multinationally attended — Chewa people travel from Malawi and Mozambique. Book transport and accommodation early.'
  },
  {
    id: 'malaila-kunda',
    province_id: 'eastern',
    name: 'Malaila',
    tribe: 'Kunda',
    chief: 'Senior Chief Nsefu',
    district: 'Mambwe',
    month_num: 8,
    month_label: 'August',
    lat: -13.062, lng: 31.906,
    description: 'The Malaila is a harvest thanksgiving and chiefdom unity ceremony of the Kunda people — the indigenous tribe of the Luangwa Valley. Held near South Luangwa National Park, the ceremony can be combined with a Luangwa wildlife safari for an integrated cultural-wildlife experience.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Excellent combination with South Luangwa safari camps. Kawaza Village cultural experience nearby.'
  },

  // ── NORTHERN PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'ukusefya-pa-ngwena',
    province_id: 'northern',
    name: 'Ukusefya Pa Ng\'wena',
    tribe: 'Bemba',
    chief: 'Paramount Chief Chitimukulu',
    district: 'Mungwi',
    month_num: 8,
    month_label: 'August',
    lat: -10.155, lng: 31.087,
    description: 'The Ukusefya Pa Ng\'wena re-enacts the Bemba migration from Kola (Angola) to their current settlement at Mungwi. The Chitimukulu is carried on a throne featuring a paper-mâché crocodile — the Bemba royal totem — following a trench said to have been used in defensive warfare against the Ngoni. Mass communal dancing and traditional food follow.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Mungwi is 32km from Kasama. The Bemba are Zambia\'s largest ethnic group — this is their flagship national ceremony.'
  },
  {
    id: 'mutomolo',
    province_id: 'northern',
    name: 'Mutomolo',
    tribe: 'Mambwe / Lungu',
    chief: 'Mambwe / Lungu Chiefs',
    district: 'Mbala',
    month_num: 6,
    month_label: 'June',
    lat: -8.844, lng: 31.371,
    description: 'The Mutomolo ceremony at Mbala incorporates fish eagle rituals — the aerial symbolism of the eagle represents vigilance and prosperity — to invoke blessings for the new planting season. Chiefs bless first fruits at sites near Lake Chila. The ceremony blends Zambian and Tanzanian Lungu-Mambwe traditions due to borderland geography.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Mbala is near Lake Tanganyika — combine with a visit to the lake and Kalambo Falls.'
  },
  {
    id: 'walamo',
    province_id: 'northern',
    name: 'Walamo',
    tribe: 'Lungu',
    chief: 'Senior Chief Tafuna',
    district: 'Mpulungu',
    month_num: 9,
    month_label: 'September',
    lat: -8.763, lng: 31.118,
    description: 'The Walamo ceremony of the Lungu people at Mpulungu — Zambia\'s only freshwater port on Lake Tanganyika — is a harvest and fisheries thanksgiving tied to the lake ecology. The Lungu have lived on the shores of Tanganyika for centuries and their cultural identity is deeply connected to the lake.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Mpulungu is Zambia\'s only port — combine with a Lake Tanganyika boat excursion.'
  },

  // ── LUAPULA PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'mutomboko',
    province_id: 'luapula',
    name: 'Mutomboko',
    tribe: 'Lunda',
    chief: 'Paramount Chief Mwata Kazembe',
    district: 'Kawambwa',
    month_num: 7,
    month_label: 'Last week of July',
    lat: -9.438, lng: 28.693,
    description: 'The Mutomboko celebrates the military victories and migration of the Lunda-Kazembe Kingdom from the Congo Basin. The Mwata Kazembe enters the arena seated on a lion skin — the most powerful symbol of the Lunda warrior tradition. Dance troupes from Zambia and DRC participate. Visitors must not hand gifts to or directly greet the Mwata.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Protocol is strictly observed: do not approach or greet the Mwata Kazembe directly. The cultural museum adjacent to the site is worth visiting before the ceremony.'
  },
  {
    id: 'builile',
    province_id: 'luapula',
    name: 'Builile',
    tribe: 'Bwile',
    chief: 'Senior Chief Puta',
    district: 'Chienge',
    month_num: 9,
    month_label: 'September',
    lat: -8.65, lng: 29.17,
    description: 'The Builile ceremony of the Bwile people in Chienge district on Lake Mweru celebrates the Bwile fishing heritage and ancestral traditions. The Bwile are a small but culturally distinct people who have maintained their identity on the shores of Lake Mweru despite proximity to larger Lunda and Bemba populations.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: null
  },
  {
    id: 'kwanga',
    province_id: 'luapula',
    name: 'Kwanga',
    tribe: 'Ngumbo',
    chief: 'Senior Chief Mwewa',
    district: 'Samfya',
    month_num: 10,
    month_label: 'October',
    lat: -11.341, lng: 29.548,
    description: 'The Kwanga ceremony of the Ngumbo people at Samfya on Lake Bangweulu is a harvest thanksgiving and community cohesion ceremony. Samfya sits on one of Zambia\'s largest lakes and the Ngumbo cultural calendar is shaped by the lake\'s seasonal rhythms.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Samfya beach on Lake Bangweulu is one of Zambia\'s most scenic lakeshores. Combine with birdwatching on the Bangweulu Swamps (shoebill stork habitat).'
  },

  // ── COPPERBELT PROVINCE ─────────────────────────────────────────────────────

  {
    id: 'ukwilimuna',
    province_id: 'copperbelt',
    name: 'Ukwilimuna',
    tribe: 'Lamba',
    chief: 'Chieftainess Malembeka',
    district: 'Mpongwe',
    month_num: 7,
    month_label: 'July',
    lat: -13.374, lng: 27.435,
    description: 'The Ukwilimuna ceremony of the Lamba people at Mpongwe is an agricultural thanksgiving marking the end of the farming season. The Lamba are the original inhabitants of the Copperbelt plateau and their ceremonies are among the most intact pre-mining cultural practices surviving in an otherwise heavily urbanised province.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'The Lamba also celebrate the Chabalankata (November) and Nsengele Kununka (November) ceremonies in the same province.'
  },
  {
    id: 'chabalankata',
    province_id: 'copperbelt',
    name: 'Chabalankata',
    tribe: 'Lamba',
    chief: 'Senior Chief Mushili',
    district: 'Masaiti',
    month_num: 11,
    month_label: 'November',
    lat: -13.12, lng: 28.33,
    description: 'The Chabalankata ceremony of the Lamba at Masaiti is a pre-harvest ritual that invokes ancestral blessings for the coming farming season. It marks the transition from the dry season into the rains and the resumption of the agricultural cycle.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: null
  },

  // ── NORTH-WESTERN PROVINCE ──────────────────────────────────────────────────

  {
    id: 'likumbi-lya-mize',
    province_id: 'northwestern',
    name: 'Likumbi Lya Mize',
    tribe: 'Luvale',
    chief: 'Senior Chief Ndungu',
    district: 'Zambezi',
    month_num: 8,
    month_label: 'August',
    lat: -13.545, lng: 23.104,
    description: 'The Likumbi Lya Mize festival is the annual gathering of the Luvale people at Zambezi, historically marking the re-entry of initiates from the Mukanda (male circumcision) seclusion. The four-day festival features Makishi masked dancers representing ancestral spirits — a UNESCO-recognised intangible cultural heritage tradition.',
    public: true,
    ticket_required: false,
    duration: '3–4 days',
    visitor_notes: 'One of the most visually striking ceremonies in Zambia. The Makishi masks are also displayed for sale at craft markets. Zambezi town has basic accommodation.'
  },
  {
    id: 'lunda-lubanza',
    province_id: 'northwestern',
    name: 'Lunda Lubanza',
    tribe: 'Lunda',
    chief: 'Senior Chief Ishindi',
    district: 'Zambezi',
    month_num: 8,
    month_label: 'August',
    lat: -13.55, lng: 23.11,
    description: 'The Lunda Lubanza ceremony at Zambezi celebrates the Lunda-Ishindi kingdom\'s distinct identity within North-Western Province, separate from the Lunda-Kazembe of Luapula. The ceremony features royal dance forms and recitation of the Lunda-Ishindi migration history from the Congo Basin.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Often takes place around the same time as Likumbi Lya Mize — an opportunity to attend two ceremonies in the same visit to Zambezi.'
  },
  {
    id: 'chisemwa-cha-lunda',
    province_id: 'northwestern',
    name: 'Chisemwa Cha Lunda',
    tribe: 'Lunda',
    chief: 'Senior Chief Kanongesha',
    district: 'Mwinilunga',
    month_num: 9,
    month_label: 'September',
    lat: -11.733, lng: 24.432,
    description: 'The Chisemwa Cha Lunda ceremony of Senior Chief Kanongesha at Mwinilunga is a harvest thanksgiving of the Lunda people of the Mwinilunga chiefdom. Mwinilunga is a botanically rich area near the source of the Zambezi River — the ceremony is connected to the river\'s spiritual significance for the Lunda.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'Mwinilunga is near the Zambezi source. Combine with a visit to the Zambezi River headwaters monument.'
  },
  {
    id: 'nsomo',
    province_id: 'northwestern',
    name: 'Nsomo',
    tribe: 'Kaonde',
    chief: 'Senior Chief Kasempa',
    district: 'Kasempa',
    month_num: 6,
    month_label: 'June',
    lat: -13.456, lng: 25.835,
    description: 'The Nsomo ceremony of the Kaonde people at Kasempa is an agricultural first-fruits and rain thanksgiving celebration. The Kaonde are the dominant people of North-Western Province and their ceremonies span multiple chiefdoms across the province, each with distinct regional variations.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: null
  },

  // ── CENTRAL PROVINCE ────────────────────────────────────────────────────────

  {
    id: 'ichibwela-mushi',
    province_id: 'central',
    name: 'Ichibwela Mushi',
    tribe: 'Bisa / Swaka / Lala',
    chief: 'Bisa / Swaka / Lala Chiefs',
    district: 'Mkushi',
    month_num: 9,
    month_label: 'September',
    lat: -13.618, lng: 29.394,
    description: 'A harvest thanksgiving ceremony of the Bisa, Swaka, and Lala peoples in Mkushi District, marking the end of the farming season. The ceremony reinforces chiefdom authority and ethnic identity across a multi-tribal grouping that shares the miombo woodland landscape of northern Central Province.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: null
  },
  {
    id: 'kulamba-kubwalo',
    province_id: 'central',
    name: 'Kulamba Kubwalo',
    tribe: 'Lenje',
    chief: 'Senior Chief Mukuni Ng\'ombe',
    district: 'Chibombo',
    month_num: 10,
    month_label: 'October',
    lat: -14.641, lng: 28.079,
    description: 'The Kulamba Kubwalo ceremony escorts Senior Chief Mukuni Ng\'ombe from his palace to eight sites representing the stops of the Lenje migration from the DRC to Zambia. The Chief visits the Likonde Lya Bankanga shrine — the queen mother\'s burial ground — before subjects from all Lenje chiefdoms pay tribute with drumming, dancing, and feasting.',
    public: true,
    ticket_required: false,
    duration: '1–2 days',
    visitor_notes: 'The eight-stop migration procession makes this visually distinctive from most Zambian ceremonies. Chibombo is easily accessible from Lusaka.'
  },
  {
    id: 'musaka-jikubi',
    province_id: 'central',
    name: 'Musaka Jikubi',
    tribe: 'Kaonde',
    chief: 'Chiefs Mumba & Kaindu',
    district: 'Mumbwa',
    month_num: 9,
    month_label: 'September',
    lat: -14.997, lng: 27.066,
    description: 'A harvest thanksgiving of the Kaonde people in Mumbwa district, Central Province. The Kaonde of Mumbwa are geographically distinct from the Kaonde majority in North-Western Province, having settled in the Kafue River corridor. Their ceremonies carry Central Province agricultural rhythms.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Mumbwa is the gateway to Kafue National Park — combine with a safari.'
  },

  // ── MUCHINGA PROVINCE ───────────────────────────────────────────────────────

  {
    id: 'mulasa',
    province_id: 'muchinga',
    name: 'Mulasa',
    tribe: 'Namwanga',
    chief: 'Chieftainess Nawaitwika',
    district: 'Nakonde',
    month_num: 9,
    month_label: 'September',
    lat: -9.355, lng: 32.787,
    description: 'The Mulasa ceremony of the Namwanga people at Nakonde is a rain-calling and harvest thanksgiving ceremony tied to the highland ecology of the Tanzania border region. The Namwanga\'s borderland cultural identity blends Zambian and Tanzanian ritual expressions, making Mulasa one of Zambia\'s most distinctive highland ceremonies.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Nakonde is Zambia\'s northern border crossing to Tanzania — accessible on the TAZARA railway corridor.'
  },
  {
    id: 'vikamkanimba',
    province_id: 'muchinga',
    name: 'Vikamkanimba',
    tribe: 'Tumbuka (Henga)',
    chief: 'Senior Chief Muyombe',
    district: 'Isoka',
    month_num: 9,
    month_label: 'September',
    lat: -10.15, lng: 33.05,
    description: 'The Vikamkanimba ceremony of the Henga-Tumbuka people at Isoka is a cultural identity ceremony celebrating the Tumbuka\'s connection to the Mafinga Hills and Muchinga Province\'s highland landscape. Isoka is one of Zambia\'s lesser-visited districts with intact cultural traditions.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Isoka is the gateway to the Nyika Plateau — combine with highland trekking.'
  },
  {
    id: 'bisa-malaila',
    province_id: 'muchinga',
    name: 'Bisa Malaila',
    tribe: 'Bisa',
    chief: 'Chief Nabwalya',
    district: 'Mpika',
    month_num: 9,
    month_label: 'September',
    lat: -11.897, lng: 31.452,
    description: 'The Bisa Malaila at Mpika is a harvest thanksgiving of the Bisa people who inhabit the North Luangwa Valley corridor. The Bisa were historically skilled long-distance traders and their ceremonies carry elements of exchange culture — food sharing, reciprocal gifting, and inter-village solidarity.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Mpika is the gateway to North Luangwa National Park — one of Zambia\'s most remote wildlife areas.'
  },

  // ── LUSAKA PROVINCE ─────────────────────────────────────────────────────────

  {
    id: 'chakwela-makumbi',
    province_id: 'lusaka',
    name: 'Chakwela Makumbi',
    tribe: 'Soli',
    chief: 'Senior Chieftainess Nkhomeshya',
    district: 'Chongwe',
    month_num: 9,
    month_label: 'Last weekend of September',
    lat: -15.33, lng: 28.68,
    description: 'The Chakwela Makumbi ("pulling the clouds") ceremony of the Soli people — the original inhabitants of the Lusaka plateau — is a rain-calling ceremony where Chieftainess Nkhomeshya II prays to ancestors. A small area of royal field is burned, new seeds are planted, and all cultural groups of the Soli Kingdom perform dances.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'Only 30km from Lusaka — the most accessible traditional ceremony from the capital.'
  },
  {
    id: 'nkhombalyanga',
    province_id: 'lusaka',
    name: 'Nkhombalyanga',
    tribe: 'Soli',
    chief: 'Chieftainess Shikabeta',
    district: 'Chongwe',
    month_num: 7,
    month_label: 'July',
    lat: -15.34, lng: 28.7,
    description: 'A mid-year Soli ceremony held under Chieftainess Shikabeta in the Chongwe corridor. Like Chakwela Makumbi, it reinforces Soli identity in a region where urban Lusaka has encroached significantly on traditional chiefdom territories.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: null
  },
  {
    id: 'kailala',
    province_id: 'lusaka',
    name: 'Kailala',
    tribe: 'Goba',
    chief: 'Chieftainess Chiawa',
    district: 'Kafue',
    month_num: 11,
    month_label: 'November',
    lat: -15.77, lng: 28.17,
    description: 'The Kailala ceremony of the Goba people in the Kafue–Lower Zambezi corridor is a harvest thanksgiving connected to the Zambezi River ecosystem. The Goba are a small Shona-speaking people on the Zambia–Zimbabwe border whose cultural practices carry strong Zambezi Valley ecological connections.',
    public: true,
    ticket_required: false,
    duration: '1 day',
    visitor_notes: 'The Kafue–Lower Zambezi area is excellent for wildlife. Combine with a Lower Zambezi National Park visit.'
  }

];
