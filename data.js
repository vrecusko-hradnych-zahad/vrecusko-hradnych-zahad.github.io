/* =====================================================================
   VRECÚŠKO HRADNÝCH ZÁHAD – údaje o hradoch
   ---------------------------------------------------------------------
   Tu sa nachádzajú všetky texty kariet. Upravovať môžeš iba text
   medzi úvodzovkami "..." – nič iné netreba meniť.

   nazov        – názov hradu (zobrazí sa na stránke)
   indicia      – text z karty A (karta s hradom)
   legenda      – text z karty B (karta s legendou)
   doplnovacka  – názov s vynechanými písmenami; "_" = chýbajúce písmeno,
                  medzi písmenami jedna medzera, medzi slovami dve medzery
   riesenie     – správny názov VEĽKÝMI písmenami (na kontrolu odpovede)
   obrazok      – cesta k omaľovánke v priečinku obrazky/hrady
                  (null = obrázok zatiaľ chýba, zobrazí sa náhradný)
   lat, lon     – poloha hradu na mape (GPS súradnice)
   ===================================================================== */

const HRADY = [
  {
    cislo: 1,
    nazov: "Spišský hrad",
    indicia: "Som jeden z najväčších hradných komplexov v strednej Európe. Stojím na travertínovom kopci nad Spišským Podhradím a od roku 1993 som v zozname UNESCO.",
    legenda: "Krásna Hedviga mala strážiť malú Barborku, no zaľúbila sa do potulného speváka. Bol to prezlečený nepriateľ a v noci dievčatko uniesol. Vraj Hedviga dodnes po nociach blúdi hradom a volá Barborkino meno.",
    doplnovacka: "S _ _ Š S K Ý  H _ A D",
    riesenie: "SPIŠSKÝ HRAD",
    obrazok: "obrazky/hrady/01-spissky-hrad.jpg",
    lat: 49.0003, lon: 20.7681
  },
  {
    cislo: 2,
    nazov: "Bojnický zámok",
    indicia: "Vyzerám ako hrad z rozprávky a mám veľa vežičiek so špicatými strechami. Neďaleko odo mňa je najstaršia zoo na Slovensku.",
    legenda: "Lakomý kastelán Póky dal ohradiť liečivé pramene a ľudia museli za kúpanie platiť. Keď odohnal chudobného chorého žobráka, pramene zmizli a Pókyho zlaté dukáty sa v truhliciach premenili na obyčajné kamienky.",
    doplnovacka: "B _ J N _ C K Ý  Z Á M _ K",
    riesenie: "BOJNICKÝ ZÁMOK",
    obrazok: "obrazky/hrady/02-bojnicky-zamok.jpg",
    lat: 48.78, lon: 18.5777
  },
  {
    cislo: 3,
    nazov: "Trenčiansky hrad",
    indicia: "Nad mestom sa týči moja vysoká Matúšova veža. Na skale podo mnou je nápis, ktorý tu kedysi vytesali rímski vojaci.",
    legenda: "Turecký paša Omar chcel oslobodiť krásnu Fatimu, ktorú držal pán hradu Zápoľský. Sľúbil, že vykope v skale studňu. Kopal tri roky, kým našiel vodu, a potom si Fatimu odviedol domov.",
    doplnovacka: "T R _ N Č I _ N S K Y  H R _ D",
    riesenie: "TRENČIANSKY HRAD",
    obrazok: "obrazky/hrady/03-trenciansky-hrad.jpg",
    lat: 48.8944, lon: 18.0447
  },
  {
    cislo: 4,
    nazov: "Oravský hrad",
    indicia: "Stojím na vysokej skale priamo nad riekou Oravou. Natáčali tu aj slávny starý film o upírovi Nosferatu.",
    legenda: "Prísna pani Alžbeta Czoborová spravovala hrad, keď bol jej manžel Juraj Thurzo preč. Raz sa v hneve zaprisahala, že bude na všetko dozerať aj po smrti. Vraj dodnes chodí po hrade v čiernych šatách a bielych rukaviciach.",
    doplnovacka: "O R _ V S K Ý  H _ A D",
    riesenie: "ORAVSKÝ HRAD",
    obrazok: "obrazky/hrady/04-oravsky-hrad.jpg",
    lat: 49.2617, lon: 19.3589
  },
  {
    cislo: 5,
    nazov: "Považský hrad",
    indicia: "Som zrúcanina na kopci nad Považskou Bystricou. Kedysi tu žili bratia Podmanickí, lúpežní rytieri.",
    legenda: "Lúpežný rytier Rafael Podmanický uniesol krásnu Hedvigu a zavrel ju na hrade. Kým boli bratia preč, jej otec zhromaždil sedliakov, hrad dobyl a dcéru oslobodil. Bratia potom prosili kráľa o milosť.",
    doplnovacka: "P O V _ Ž S K Ý  H _ A D",
    riesenie: "POVAŽSKÝ HRAD",
    obrazok: null,
    lat: 49.13, lon: 18.465
  },
  {
    cislo: 6,
    nazov: "Čachtický hrad",
    indicia: "Som zrúcanina na kopci nad obcou Čachtice. Žila tu grófka Alžbeta Báthoryová, o ktorej sa rozprávajú strašidelné príbehy.",
    legenda: "Podľa povesti bola grófka Alžbeta Báthoryová veľmi krutá. Keď sa to dozvedeli až vo Viedni, za trest ju zavreli na hrade, kde zostala až do smrti. Jej duch vraj dodnes blúdi zrúcaninou.",
    doplnovacka: "Č _ C H T I C K Ý  H _ A D",
    riesenie: "ČACHTICKÝ HRAD",
    obrazok: "obrazky/hrady/06-cachticky-hrad.jpg",
    lat: 48.7247, lon: 17.7618
  },
  {
    cislo: 7,
    nazov: "Krásna Hôrka",
    indicia: "Stojím na holom kopci nad obcou Krásnohorské Podhradie na Gemeri. V roku 2012 mi zhorela strecha a dnes ma znova opravujú.",
    legenda: "Na hrade kedysi žila grófka Žofia Serédyová, manželka generála Štefana Andrássyho. Jej telo sa po smrti samo zachovalo stovky rokov. Podľa nej vznikol príbeh o Bielej pani z Krásnej Hôrky.",
    doplnovacka: "K R _ S N A  H Ô _ K A",
    riesenie: "KRÁSNA HÔRKA",
    obrazok: "obrazky/hrady/07-krasna-horka.jpg",
    lat: 48.6578, lon: 20.6004
  },
  {
    cislo: 8,
    nazov: "Smolenický zámok",
    indicia: "Stojím v lesoch Malých Karpát a z mojej veže je krásny výhľad. Dnes sa vo mne stretávajú vedci zo Slovenskej akadémie vied.",
    legenda: "Zlý správca Čeky poslal sluhu Kysela pešo do Bratislavy s listom a odpoveď chcel ešte v ten večer. Na ceste mu pomohol starček s kočom a Kysel sa vrátil včas. Vraj to bol dobrý duch, ktorý zámok stráži dodnes.",
    doplnovacka: "S M _ L E N I C K Ý  Z Á _ O K",
    riesenie: "SMOLENICKÝ ZÁMOK",
    obrazok: "obrazky/hrady/08-smolenicky-zamok.jpg",
    lat: 48.5089, lon: 17.4309
  },
  {
    cislo: 9,
    nazov: "Hrad Strečno",
    indicia: "Stojím na skale nad riekou Váh neďaleko Žiliny. Dlho som bol zrúcaninou, no ľudia ma opravili a od roku 1995 ma môžeš navštíviť.",
    legenda: "Pani hradu Žofia Bosniaková pomáhala chudobným a chorým ľuďom a veľa sa modlila. Keď ju po rokoch našli v hrobke, jej telo bolo takmer neporušené. Ľudia ju preto volali svätou Žofiou.",
    doplnovacka: "H R A D  S T _ E Č _ O",
    riesenie: "HRAD STREČNO",
    obrazok: "obrazky/hrady/09-hrad-strecno.jpg",
    lat: 49.1749, lon: 18.8625
  },
  {
    cislo: 10,
    nazov: "Bratislavský hrad",
    indicia: "Mám štyri veže v rohoch a stojím na kopci nad Dunajom v hlavnom meste Slovenska.",
    legenda: "Raz ráno sa páni na hrade zobudili a všetko bolo hore nohami – voda vyliata, obrazy popadané. Čarodejník Klingsor v noci otočil hrad, aby si naň sadol ako na stolček a pozeral na Dunaj.",
    doplnovacka: "B R _ T I S L _ V S K Ý  H R A D",
    riesenie: "BRATISLAVSKÝ HRAD",
    obrazok: "obrazky/hrady/10-bratislavsky-hrad.jpg",
    lat: 48.1424, lon: 17.1
  },
  {
    cislo: 11,
    nazov: "Pustý hrad (Zvolen)",
    indicia: "Som zrúcanina v lese nad Zvolenom, kde sa stretávajú rieky Hron a Slatina. Patrím medzi najväčšie hradné zrúcaniny v Európe.",
    legenda: "Krutý kastelán Zúzor chcel za ženu krásnu dcéru starého rybára, no otec ju nechcel pustiť. Vraj za mesačných nocí chodí rybár s dcérou po zrúcanine a kde dcéra stúpi, vyrastie konvalinka.",
    doplnovacka: "P _ S T Ý  H R _ D",
    riesenie: "PUSTÝ HRAD",
    obrazok: "obrazky/hrady/11-pusty-hrad-zvolen.jpg",
    lat: 48.5636, lon: 19.1053
  },
  {
    cislo: 12,
    nazov: "Červený Kameň",
    indicia: "Mám štyri okrúhle bašty v rohoch a pod sebou jedny z najväčších hradných pivníc v Európe. Stojím nad obcou Častá v Malých Karpatoch.",
    legenda: "Keď sa mal hrad stavať, dvanásť múdrych mužov vyberalo miesto. Jedenásti chceli kopec Kukla, no duchovia v noci preniesli základy na susedný kopec. A tak hrad stojí tam, kde ho chceli mať duchovia.",
    doplnovacka: "Č E R _ E N Ý  K A _ E Ň",
    riesenie: "ČERVENÝ KAMEŇ",
    obrazok: "obrazky/hrady/12-cerveny-kamen.jpg",
    lat: 48.3911, lon: 17.335
  },
  {
    cislo: 13,
    nazov: "Blatnický hrad",
    indicia: "Som zrúcanina na skalnatom hrebeni pri vstupe do Gaderskej doliny vo Veľkej Fatre.",
    legenda: "Hrad kedysi patril rodu Révayovcov. Jeden z pánov bol vraj veľmi zlý na svoju ženu aj malého syna. Ľudia hovoria, že na hrebeni dodnes počuť plač malého chlapca a niekedy vidieť dva tiene.",
    doplnovacka: "B L _ T N I C K Ý  H _ A D",
    riesenie: "BLATNICKÝ HRAD",
    obrazok: null,
    lat: 48.9411, lon: 18.9433
  },
  {
    cislo: 14,
    nazov: "Turniansky hrad",
    indicia: "Som zrúcanina na kopci v tvare kužeľa pri Turni nad Bodvou. Na mojom kopci rastie vzácna rastlina, ktorá nerastie nikde inde na svete.",
    legenda: "Pani Kristína Bebeková žiarlila na svoju sestru Katarínu a krivo ju obvinila zo zlého činu. Súd však jej klamstvo odhalil. Vraj jej duch dodnes v noci plače a blúdi zrúcaninou.",
    doplnovacka: "T U R _ I A N S K Y  H _ A D",
    riesenie: "TURNIANSKY HRAD",
    obrazok: "obrazky/hrady/14-turniansky-hrad.jpg",
    lat: 48.61, lon: 20.88
  },
  {
    cislo: 15,
    nazov: "Ľupčiansky hrad",
    indicia: "Stojím nad obcou Slovenská Ľupča na úpätí Nízkych Tatier. Na rozdiel od mnohých hradov som sa zachoval až dodnes.",
    legenda: "Sesternica Veronka prišla na hrad pomáhať chorej pani. Zaľúbila sa však do pána hradu a chcela, aby pani zmizla. Za trest ju zavreli do veže. Ako Čierna pani vraj dodnes v noci blúdi hradom.",
    doplnovacka: "Ľ U P Č _ A N S K Y  H R _ D",
    riesenie: "ĽUPČIANSKY HRAD",
    obrazok: "obrazky/hrady/15-lupciansky-hrad.jpg",
    lat: 48.7708, lon: 19.2758
  },
  {
    cislo: 16,
    nazov: "Hrad Devín",
    indicia: "Stojím na skale tam, kde sa rieka Morava vlieva do Dunaja. Patrím k hlavnému mestu Slovenska.",
    legenda: "Rytier Mikuláš a krásna Margaréta sa veľmi ľúbili, no jej rodina ich lásku nechcela. Jej strýko Rafael prepadol hrad a Mikuláša porazil. Na ich smutný príbeh dodnes spomína štíhla Panenská veža na skale.",
    doplnovacka: "H R A D  D _ V Í _",
    riesenie: "HRAD DEVÍN",
    obrazok: null,
    lat: 48.1737, lon: 16.9786
  },
  {
    cislo: 17,
    nazov: "Topoľčiansky hrad",
    indicia: "Som zrúcanina v lesoch pohoria Tribeč. Najviac sa mi zachovala vysoká hranolová veža.",
    legenda: "Ľudmila, dcéra pána hradu, ľúbila chudobného šľachtica Janka, ktorý odišiel do vojny. Zlý pán z Tematína zamenil ich listy a Ľudmila uverila, že Janko zomrel. Od žiaľu zomrela a Janko potom navždy odišiel do sveta.",
    doplnovacka: "T O P _ Ľ Č I A N S K Y  H _ A D",
    riesenie: "TOPOĽČIANSKY HRAD",
    obrazok: null,
    lat: 48.546, lon: 18.288
  },
  {
    cislo: 18,
    nazov: "Hrad Stropkov",
    indicia: "Zo mňa zostalo len málo – v roku 1711 ma zbúrali vojaci. Z mojich zvyškov neskôr postavili kaštieľ v meste Stropkov.",
    legenda: "Pán hradu Ctibor sa oženil s krásnou Ajkou, no na svadbe sa viac zabávala s inými hosťami. Nahnevaný pán ju dal zamurovať. Keď po čase múr otvoril, na svoje prekvapenie našiel Ajku živú a zdravú.",
    doplnovacka: "H R A D  S T R _ P K _ V",
    riesenie: "HRAD STROPKOV",
    obrazok: null,
    lat: 49.2027, lon: 21.651
  },
  {
    cislo: 19,
    nazov: "Beckovský hrad",
    indicia: "Stojím na vysokej strmej skale nad riekou Váh, neďaleko Nového Mesta nad Váhom.",
    legenda: "Pán Stibor sľúbil svojmu šašovi Beckovi, že mu splní akékoľvek prianie. Becko si želal hrad na skale nad Váhom. Stibor ho postavil, no chcel si ho nechať. Becko súhlasil, ale len ak sa hrad bude volať po ňom.",
    doplnovacka: "B E C K _ V S K Ý  H _ A D",
    riesenie: "BECKOVSKÝ HRAD",
    obrazok: null,
    lat: 48.79, lon: 17.8955
  },
  {
    cislo: 20,
    nazov: "Kežmarský hrad",
    indicia: "Stojím priamo v meste, za ktorým sa týčia Vysoké Tatry. Kedysi som patril rodu Thökölyovcov.",
    legenda: "Imrich Thököly prehral bitku a chcel si z hradu vziať rodinné šperky. Stará kľučiarka ich však ukryla tak dobre, že ich nenašiel. Nahnevaný ju preklial – a v noci vraj na hrade dodnes štrngajú kľúče.",
    doplnovacka: "K E Ž M _ R S K Ý  H R _ D",
    riesenie: "KEŽMARSKÝ HRAD",
    obrazok: null,
    lat: 49.1386, lon: 20.4317
  }
];
