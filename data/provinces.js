// ═══════════════════════════════════════════════
//   Discover Zambia — Cultural Heritage Map
//   data/provinces.js  — All 10 province entries
//
//   geo_id must match the PROVINCE field in
//   zambia_provinces.geojson exactly (lowercase)
//
//   Population & area: 2022 Zambia Census (ZamStats)
// ═══════════════════════════════════════════════

const provinces = [
  {
    id: 'southern',
    geo_id: 'southern',
    name: 'Southern Province',
    province: 'Southern Province',
    capital: 'Choma',
    lat: -17.85, lng: 25.85,
    color: '#C87D3A',
    //icon: 'waterfall',
    tags: ['ceremony', 'heritage', 'nature'],

    // ── Panel intro
    desc: 'Home to Mosi-oa-Tunya — "The Smoke That Thunders" — and the ancient Tonga people whose oral traditions, cattle culture, and ancestral ceremonies have shaped this corridor of the Zambezi for millennia.',

    // ── Statistics (2022 Census)
    area_km2: 85283,
    population: 2381728,
    density: 27.9,
    districts: 15,

    // ── Economy
    economy: [
      'Tourism — Victoria Falls draws over 1 million visitors annually',
      'Commercial farming — maize, cotton, sunflower and sorghum',
      'Cattle ranching — Tonga people hold Zambia\'s largest cattle population',
      'Kariba Dam hydroelectric power — supplies much of Zambia\'s national grid',
      'Fishing on Lake Kariba and the Zambezi River'
    ],

    // ── Hidden gems
    hidden_gems: [
      'Lochinvar National Park — world-class wetland birding, rarely visited',
      'Gwisho Hot Springs — prehistoric archaeological site near Lochinvar',
      'Siavonga — lakeside resort town on Lake Kariba, off the tourist trail',
      'Choma Museum — finest rural museum in Zambia covering Tonga culture',
      'Batoka Gorge — dramatic canyon downstream of the falls, few tourists venture here'
    ],

    // ── Legacy panel fields
    best_time: 'Feb – May',
    duration: '2–4 days',
    distance: 'Livingstone',
    difficulty: 'Easy',
    highlights: [
      'Mukuni Village — living Leya chiefdom with guided cultural immersion',
      'Kuomboka Ceremony preparations visible in border communities',
      'Traditional Tonga basket weaving and cattle-keeping heritage',
      'Livingstone Museum — largest ethnographic collection in Zambia'
    ],
    cbt: 'Mukuni Village offers overnight community stays, guided morning ceremonies, and a women-led craft cooperative with direct artisan purchases.'
  },

  {
    id: 'western',
    geo_id: 'western',
    name: 'Western Province',
    province: 'Western Province',
    capital: 'Mongu',
    lat: -15.3, lng: 23.1,
    color: '#4A9B9E',
    icon: 'canoe',
    tags: ['ceremony', 'heritage', 'community'],
    desc: 'The Lozi Kingdom\'s annual Kuomboka ceremony — the royal migration by barge across the Barotse Floodplain — is one of Africa\'s most spectacular living traditions. The floodplain itself is a UNESCO Ramsar wetland of international significance.',
    area_km2: 126386,
    population: 1363520,
    density: 10.8,
    districts: 16,
    economy: [
      'Subsistence farming — cassava, maize and sorghum along the floodplain',
      'Fishing — Barotse Floodplain and Zambezi River artisanal fisheries',
      'Cattle and livestock — Lozi agro-pastoral economy',
      'Liuwa Plain National Park — emerging wildlife tourism destination',
      'Honey production — Western Province produces some of Zambia\'s finest wild honey',
      'Timber — managed forestry in the Kalahari woodland zones'
    ],
    hidden_gems: [
      'Liuwa Plain — Africa\'s second-largest wildebeest migration, almost unknown to tourists',
      'Lealui Palace — the Litunga\'s flood-season residence, rarely visited outside Kuomboka',
      'Mongu harbour market — one of the most authentic rural markets in Zambia',
      'Lueti wetlands — extraordinary seasonal bird concentrations including shoebill',
      'Senanga — scenic Zambezi town with colonial-era architecture and zero tourist infrastructure'
    ],
    best_time: 'Mar – Apr (Kuomboka)',
    duration: '3–5 days',
    distance: 'Mongu',
    difficulty: 'Moderate',
    highlights: [
      'Kuomboka Ceremony — the Litunga\'s royal barge migration',
      'Limulunga Palace and royal Lozi craftwork',
      'Barotse Floodplain canoe expeditions with local fishermen',
      'Lozi wood-carving and traditional basket markets in Mongu'
    ],
    cbt: 'Barotse flood villages offer guided mokoro (dugout canoe) fishing trips and homestays with Lozi fishing families — best experienced April through June.'
  },

  {
    id: 'eastern',
    geo_id: 'eastern',
    name: 'Eastern Province',
    province: 'Eastern Province',
    capital: 'Chipata',
    lat: -13.5, lng: 32.6,
    color: '#8B4A2B',
    icon: 'mask',
    tags: ['ceremony', 'craft', 'heritage'],
    desc: 'The Ngoni people, descendants of Zulu warriors who migrated north in the 19th century, celebrate Nc\'wala — the first-fruits harvest ceremony — with extraordinary drumming, warrior dances, and the presentation of first crops to the Paramount Chief.',
    area_km2: 51476,
    population: 2454788,
    density: 35.6,
    districts: 15,
    economy: [
      'Agriculture — Zambia\'s highest maize and sunflower production by volume',
      'Tobacco farming — major commercial crop around Chipata and Lundazi',
      'South Luangwa wildlife tourism — one of Africa\'s top safari destinations',
      'Groundnuts and mixed beans — Eastern leads national mixed beans production',
      'Small-scale cross-border trade with Malawi and Mozambique via Mchinji'
    ],
    hidden_gems: [
      'Nyika Plateau (Zambian side) — high-altitude grassland with roan antelope, almost no visitors',
      'Lundazi Castle — a quixotic 1950s castle built by a colonial district commissioner, now a guesthouse',
      'Chama hot springs — remote thermal springs near the North Luangwa boundary',
      'Nsalu Cave — Iron Age rock paintings hidden in the miombo hills near Serenje',
      'Luambe National Park — tiny, remote park in the Luangwa Valley, rarely visited'
    ],
    best_time: 'Feb – Mar (Nc\'wala)',
    duration: '2–3 days',
    distance: 'Chipata',
    difficulty: 'Easy',
    highlights: [
      'Nc\'wala Ceremony at Mtenguleni — warriors in full regalia',
      'Nyau masked dancers of the Chewa people',
      'Nsenga and Tumbuka traditional music sessions',
      'South Luangwa Valley wildlife safari combination'
    ],
    cbt: 'Village elder-led walking tours through Ngoni settlement patterns are available near Chipata, with traditional meals prepared by community women\'s groups.'
  },

  {
    id: 'northern',
    geo_id: 'northern',
    name: 'Northern Province',
    province: 'Northern Province',
    capital: 'Kasama',
    lat: -10.2, lng: 31.2,
    color: '#3A7D5E',
    icon: 'chief',
    tags: ['ceremony', 'heritage', 'nature'],
    desc: 'The Bemba Kingdom, once spanning a vast territory, celebrates the Mutomboko ceremony — a warrior victory dance commemorating the journey of Chief Mwata Kazembe from the Congo. Northern Province also holds Zambia\'s greatest concentration of waterfalls.',
    area_km2: 77650,
    population: 1618412,
    density: 20.8,
    districts: 12,
    economy: [
      'Mixed beans and maize — Northern leads Zambia in mixed bean production',
      'Lake Tanganyika fishing — Mpulungu port exports kapenta across the region',
      'Coffee and tea farming — emerging specialty crops in the Mbala highlands',
      'Gemstone mining — aquamarine and other semi-precious stones near Lundazi border',
      'Timber and charcoal — miombo woodland exploitation (sustainability concerns)'
    ],
    hidden_gems: [
      'Kalambo Falls — second-highest single-drop waterfall in Africa, site of 476,000-year-old wooden structures',
      'Lake Tanganyika — world\'s second-deepest lake with unique endemic cichlid fish species',
      'Nsumbu National Park — remote lake-shore park on Tanganyika, virtually unknown to tourists',
      'Shiwa Ng\'andu — extraordinary English manor house built deep in the Zambian bush in the 1920s',
      'Waterfalls circuit — Chishimba, Ntumbachushi, Kabwelume and Lumangwe form Africa\'s most dense waterfall cluster'
    ],
    best_time: 'Jul – Aug (Mutomboko)',
    duration: '3–4 days',
    distance: 'Kasama',
    difficulty: 'Moderate',
    highlights: [
      'Mutomboko Ceremony — Luvale warrior tradition near Mwansabombwe',
      'Chishimba, Ntumbachushi and Kabwelume waterfalls circuit',
      'Bemba chief\'s village and royal regalia display in Kasama',
      'Kalambo Falls — second-highest single-drop fall in Africa'
    ],
    cbt: 'Guided treks to Chishimba Falls include overnight stays in local guesthouses with Bemba women\'s cooking demonstrations and storytelling evenings.'
  },

  {
    id: 'luapula',
    geo_id: 'luapula',
    name: 'Luapula Province',
    province: 'Luapula Province',
    capital: 'Mansa',
    lat: -11.5, lng: 29.0,
    color: '#2A6B8E',
    icon: 'fish',
    tags: ['community', 'heritage', 'nature'],
    desc: 'The shores of Lake Mweru and the Luapula River sustain a rich Lunda-Kazembe civilization. The Kazembe Kingdom, historically one of the wealthiest in Central Africa, maintained trade networks stretching to the Indian Ocean coast.',
    area_km2: 50567,
    population: 1514011,
    density: 29.9,
    districts: 12,
    economy: [
      'Fishing — Luapula is Zambia\'s primary freshwater fishing province, supplying kapenta nationally',
      'Cassava farming — staple crop across most of the province',
      'Manganese and copper mining — growing extractives sector around Mansa',
      'Lake Bangweulu wetland fishing — black lechwe antelope hunting (licensed)',
      'Small-scale trade with DRC across the Luapula River'
    ],
    hidden_gems: [
      'Lake Bangweulu — vast shallow lake and swamp system, home to the shoebill stork and black lechwe',
      'Samfya Beach — arguably Zambia\'s finest freshwater beach, almost entirely unknown outside the country',
      'Kazembe Palace site — ruins of one of Central Africa\'s wealthiest 18th-century kingdoms',
      'Mumbuluma Falls — spectacular falls on the Kalungwishi River, almost no tourist infrastructure',
      'Chipili Islands — Lake Mweru archipelago accessible only by boat, inhabited by traditional fishing communities'
    ],
    best_time: 'May – Sep',
    duration: '2–3 days',
    distance: 'Mansa',
    difficulty: 'Easy',
    highlights: [
      'Lunda-Kazembe cultural museum and palace site at Mwansabombwe',
      'Lake Mweru sunrise fishing expeditions with local crews',
      'Traditional fish-drying and kapenta industry village tours',
      'Nchelenge market — one of Central Africa\'s busiest fish markets'
    ],
    cbt: 'Fishing community homestays on Lake Mweru available through local cooperatives — includes night fishing, net-casting lessons, and traditional Lunda cooking.'
  },

  {
    id: 'copperbelt',
    geo_id: 'copperbelt',
    name: 'Copperbelt Province',
    province: 'Copperbelt Province',
    capital: 'Ndola',
    lat: -12.8, lng: 28.2,
    color: '#B5622A',
    icon: 'mine',
    tags: ['heritage', 'craft'],
    desc: 'The Copperbelt\'s distinctive urban African identity — forged in the 20th-century mining era — produced unique cultural forms: kalindula music, kitenge fashion, and the famous Chingola rose stones. It is also home to the Lamba and Kaonde peoples\' pre-colonial heritage.',
    area_km2: 31328,
    population: 2757539,
    density: 88,
    districts: 10,
    economy: [
      'Copper and cobalt mining — Zambia is the world\'s 2nd largest cobalt producer',
      'Manufacturing — Ndola and Kitwe host Zambia\'s largest industrial zones',
      'Emerald mining — Zambia produces over 20% of the world\'s emeralds, mostly from Ndola Rural',
      'Services and trade — most urbanised province, with Zambia\'s strongest formal economy',
      'Agriculture — smallholder maize and soya bean farming in peri-urban corridors'
    ],
    hidden_gems: [
      'Ndola Dag Hammarskjöld Memorial — site where the UN Secretary-General\'s plane crashed in 1961, still contested history',
      'Chembe Bird Sanctuary (Mufulira) — remarkable urban wetland with extraordinary birdlife',
      'Chingola Rose Stones — rose-coloured malachite unique to the Chingola area, sold as jewellery',
      'Nkana Mine Museum — one of Africa\'s deepest copper mines, with a remarkable industrial heritage collection',
      'Luanshya\'s Roan Antelope Club — art deco colonial social club frozen in time, still operational'
    ],
    best_time: 'May – Aug',
    duration: '1–2 days',
    distance: 'Ndola / Kitwe',
    difficulty: 'Easy',
    highlights: [
      'Copperbelt Museum — industrial and cultural heritage exhibits',
      'Nkana Mine tours (historical underground sections)',
      'Kitwe\'s Mindolo Ecumenical Centre — pan-African cultural hub',
      'Lamba traditional village near Ndola with elder storytelling'
    ],
    cbt: 'Urban cultural walking tours in Kitwe\'s old township areas led by local historians cover township architecture, street art, and living musical traditions.'
  },

  {
    id: 'northwestern',
    geo_id: 'northwestern',
    name: 'North-Western Province',
    province: 'North-Western Province',
    capital: 'Solwezi',
    lat: -12.5, lng: 24.5,
    color: '#7B4A8E',
    icon: 'wax',
    tags: ['ceremony', 'craft', 'community'],
    desc: 'North-Western Province is the ceremonial heartland of the Luvale, Kaonde, and Luchazi peoples, whose Makishi masked dances and female initiation ceremonies (Mukanda and Wali) are recognized by UNESCO as intangible cultural heritage.',
    area_km2: 125826,
    population: 1270028,
    density: 10.1,
    districts: 11,
    economy: [
      'Copper and gold mining — Solwezi hosts First Quantum\'s Kansanshi, one of Africa\'s largest copper mines',
      'Emerald and gemstone mining — significant deposits around Mwinilunga and Solwezi',
      'Subsistence agriculture — cassava, millet and groundnuts',
      'Honey production — North-Western produces Zambia\'s highest-quality wild forest honey',
      'Timber — Kalahari woodland forestry, with growing commercial plantation interest'
    ],
    hidden_gems: [
      'Zambezi River source — a modest spring near Mwinilunga is the official source of Africa\'s fourth-longest river',
      'Ikelenge Pineapple Triangle — North-Western produces some of Africa\'s sweetest pineapples, sold roadside',
      'Mwinilunga hot springs — remote thermal springs in pristine miombo woodland',
      'West Lunga National Park — one of Zambia\'s least-visited parks, pristine and road-accessible from Kasempa',
      'Chavuma Falls — dramatic falls on the Zambezi near the Angolan border, almost no visitors'
    ],
    best_time: 'Jun – Sep',
    duration: '2–3 days',
    distance: 'Solwezi',
    difficulty: 'Moderate',
    highlights: [
      'Makishi masked dancers — UNESCO intangible heritage',
      'Wali and Mukanda initiation ceremony observation (by arrangement)',
      'Luvale wood-carving cooperatives near Zambezi town',
      'Mize Natural Heritage Site — spiritual forest site of the Kaonde'
    ],
    cbt: 'The Lwawu Community Camp near Zambezi offers cultural immersion packages designed and led by Luvale community members, with full revenue sharing.'
  },

  {
    id: 'central',
    geo_id: 'central',
    name: 'Central Province',
    province: 'Central Province',
    capital: 'Kabwe',
    lat: -14.2, lng: 28.4,
    color: '#6B7A2A',
    icon: 'baobab',
    tags: ['heritage', 'nature', 'community'],
    desc: 'Central Province bridges Zambia\'s colonial and pre-colonial worlds — from the Lenje people\'s ancestor veneration traditions to Kabwe, the site of the famous "Broken Hill Man" hominin fossil, and the scenic Mkushi farming corridor.',
    area_km2: 94394,
    population: 2252483,
    density: 23.9,
    districts: 11,
    economy: [
      'Agriculture — leads Zambia in wheat, soya bean and maize production',
      'Agribusiness — Mkushi Block hosts some of Southern Africa\'s largest commercial farms',
      'Mining — Kabwe was one of the world\'s most productive lead and zinc mines (now remediation phase)',
      'Livestock — major cattle corridor between Lusaka and Northern Province',
      'Manufacturing and logistics — benefits from its central position on the Great North Road'
    ],
    hidden_gems: [
      'Broken Hill Man site, Kabwe — where a 300,000-year-old hominin skull was found in 1921, displayed in London but the site itself is visitable',
      'Kasanka National Park — Africa\'s largest bat migration (10 million straw-coloured fruit bats, October–December)',
      'Lavushi Manda National Park — remote miombo park with little tourism, extraordinary birding',
      'Kundalila Falls — little-known waterfall with a natural swimming pool, near Kanona',
      'Chisimba Falls (Mkushi) — a hidden series of falls in the farming corridor, frequented mainly by locals'
    ],
    best_time: 'Apr – Sep',
    duration: '1–2 days',
    distance: 'Kabwe',
    difficulty: 'Easy',
    highlights: [
      'Kabwe Museum — Homo rhodesiensis fossil site interpretation',
      'Lenje royal shrine visits and elder storytelling sessions',
      'Chirundu border fossil forest geological site',
      'Mkushi agri-tourism farms with community markets'
    ],
    cbt: 'Lenje community cultural days near Kabwe run by village headmen\'s associations — includes traditional beer brewing, storytelling, and cultural craft markets.'
  },

  {
    id: 'muchinga',
    geo_id: 'muchinga',
    name: 'Muchinga Province',
    province: 'Muchinga Province',
    capital: 'Chinsali',
    lat: -10.8, lng: 32.0,
    color: '#4A7B3E',
    icon: 'mountains',
    tags: ['nature', 'heritage', 'community'],
    desc: 'Zambia\'s youngest province, carved from Northern Province in 2011, shelters the Lungu, Namwanga, and Iwa peoples across the Mafinga Hills and Nyika Plateau. Its highland ecology — unique in Zambia — supports distinct agricultural traditions and ceremonial life tied to rain-calling.',
    area_km2: 87806,
    population: 918296,
    density: 13.1,
    districts: 8,
    economy: [
      'Subsistence agriculture — maize, beans, and highland vegetables',
      'Coffee and tea — emerging specialty agriculture on the Nyika Plateau margins',
      'North Luangwa wildlife tourism — remote, walking-safari focused',
      'Honey and beeswax — significant cottage industry in the miombo woodland zones',
      'Timber and charcoal — major supplier to Lusaka and Copperbelt urban markets'
    ],
    hidden_gems: [
      'North Luangwa National Park — completely undeveloped, walking-only safaris, more lions than South Luangwa',
      'Nyika Plateau (Zambia side) — rolling highland grassland at 2,200m, roan and eland antelope, no crowds',
      'Lubwa Mission — birthplace of Kenneth Kaunda, preserved but rarely visited',
      'Mafinga Hills — Zambia\'s highest point (2,339m) on the Malawi border, no formal trail but accessible',
      'Chifungwe Plain — extraordinary wilderness in North Luangwa, accessible only by light aircraft'
    ],
    best_time: 'May – Oct',
    duration: '2–4 days',
    distance: 'Chinsali',
    difficulty: 'Moderate',
    highlights: [
      'Nyika Plateau highland savanna — Zambia\'s roof at 2,200m',
      'Namwanga rain-calling ceremony sites near Nakonde',
      'Chishimba Cultural Village near Chinsali',
      'Kenneth Kaunda birthplace museum, Lubwa mission'
    ],
    cbt: 'Highland trekking guided by Namwanga community guides includes village overnights, traditional highland cuisine, and oral history sessions with village elders.'
  },

  {
    id: 'lusaka',
    geo_id: 'lusaka',
    name: 'Lusaka Province',
    province: 'Lusaka Province',
    capital: 'Lusaka',
    lat: -15.42, lng: 28.28,
    color: '#9E7A3A',
    icon: 'city',
    tags: ['heritage', 'craft'],
    desc: 'Lusaka is Zambia\'s cultural crossroads — where 73 tribes converge in markets, music, and cuisine. The Lusaka National Museum holds the country\'s finest collection of ethnographic artifacts, and the city\'s informal arts scene is among the most vibrant in Southern Africa.',
    area_km2: 21896,
    population: 3079964,
    density: 140.7,
    districts: 6,
    economy: [
      'Government and public administration — Zambia\'s capital and seat of national government',
      'Finance and banking — hosts all major Zambian and regional banks and the Lusaka Stock Exchange',
      'Trade and retail — Zambia\'s largest wholesale and retail market hub',
      'Manufacturing — significant food processing, construction materials and light industry',
      'Real estate and construction — fastest-growing property market in the country'
    ],
    hidden_gems: [
      'Lusaka National Museum\'s outdoor village — full-scale replica traditional dwellings from 10 tribal groups, often overlooked by visitors',
      'Lilayi Elephant Orphanage — intimate elephant rescue project on the southern edge of the city',
      'Henry Tayali Visual Arts Centre — hub of Zambian contemporary art, with resident artists on-site',
      'Leopards Hill Memorial Park — one of Africa\'s few pet and small animal memorial parks, unexpectedly beautiful',
      'Soweto Market — one of Central Africa\'s largest informal markets, a raw and fascinating urban experience'
    ],
    best_time: 'Year-round',
    duration: '1–2 days',
    distance: 'Lusaka CBD',
    difficulty: 'Easy',
    highlights: [
      'Lusaka National Museum — ethnographic and natural history collection',
      'Kabwata Cultural Village — weekly craft market with 73-tribe representation',
      'Soweto Market — one of Central Africa\'s largest informal markets',
      'Henry Tayali Visual Arts Centre and contemporary Zambian art'
    ],
    cbt: 'Guided township walking tours led by local community historians cover Lusaka\'s urban village history, street food culture, and traditional healers\' market in Soweto.'
  }
];
