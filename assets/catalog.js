/* ============================================================
 * ENERGO GROUP · Katalog komponent
 *
 * BROADCAST ARCHITEKTURA:
 *   Každé pole označené [data-catalog="..."] funguje jako TRIGGER (otevře dropdown)
 *   I jako TARGET (přijímá update při výběru). Takže výběr panelu na coveru
 *   automaticky aktualizuje VŠECHNA místa v dokumentu, kde je ten panel zmíněn.
 *
 * Použití v šabloně:
 *   1. Načti tento script:
 *        <script src="assets/catalog.js"></script>
 *   2. Označ pole atributy data-catalog a data-format:
 *        <div data-catalog="panels" data-format="short">TOPCon<br>Trina Vertex S+</div>
 *        <span data-catalog="panels" data-format="name">Trina Vertex S+ 455 Wp</span>
 *        <div data-catalog="panels" data-format="specs">TOPCon double glass...</div>
 *
 *   data-catalog: kategorie (panels, inverters, batteries, optimizers, construction, wallbox)
 *   data-format:  short | name | specs
 *
 * Přidání nového produktu:
 *   Otevři tento soubor a přidej položku do správného pole catalog[].
 *   Každý produkt má 3 textové varianty:
 *      - short: 2 řádky pro cover highlight (oddělené znakem |)
 *      - name:  jednořádkový název s kapacitou (pro karty komponent)
 *      - specs: celý popis specifikací (pro popisek pod názvem)
 * ============================================================ */

window.ENERGO_CATALOG = {

  /* ============ PANELY ============ */
  panels: [
    /* — Trina (původní) — */
    {
      name: 'Trina Vertex S+ 455 Wp',
      short: 'TOPCon|Trina Vertex S+',
      specs: 'TOPCon double glass, black frame · TSM‑455‑NEG9R.28 · účinnost 22,5 % · Tier 1 výrobce · záruka poklesu výkonu 30 let',
      keywords: ['trina', 'vertex', '455', 'topcon', 's+']
    },
    {
      name: 'Trina Vertex N+ 585 Wp',
      short: 'TOPCon Bifacial|Trina Vertex N+',
      specs: 'TOPCon Bifaciální, dual glass · NEG19RC.20 · účinnost 22,8 % · Tier 1 výrobce · záruka poklesu výkonu 30 let · vhodné pro velké instalace',
      keywords: ['trina', 'vertex', 'n+', '585', 'bifacial', 'topcon', 'c&i']
    },

    /* — Aiko Solar (xBC technologie, prémiový segment) — */
    {
      name: 'Aiko Neostar 2S 450 Wp',
      short: 'xBC Aiko|Neostar 2S 450',
      specs: 'xBC Back-Contact, černý rám, černý backsheet · AIKO‑A450‑MAH54Mb · účinnost 22,6 % · záruka 25/30 let · zatížení sněhem 5400 Pa',
      keywords: ['aiko', 'neostar', '2s', '450', 'xbc', 'rd']
    },
    {
      name: 'Aiko Neostar 1S 440 Wp',
      short: 'xBC Aiko|Neostar 1S 440',
      specs: 'xBC Back-Contact, celočerný panel · AIKO‑A440‑MAH54Mb · účinnost 22,5 % · záruka 15/30 let · panely s fólií',
      keywords: ['aiko', 'neostar', '1s', '440', 'xbc']
    },
    {
      name: 'Aiko Neostar 2S+ 500 Wp dual glass',
      short: 'xBC Aiko|Neostar 2S+ 500',
      specs: 'xBC Back-Contact, celočerný sklo-sklo · AIKO‑A500‑MAH60Db · účinnost 22,6 % · záruka 25/30 let · dlouhá životnost',
      keywords: ['aiko', 'neostar', '2s+', '500', 'xbc', 'sklo']
    },
    {
      name: 'Aiko Neostar 3P 550 Wp',
      short: 'xBC Aiko|Neostar 3P 550',
      specs: 'xBC Back-Contact, černý rám · AIKO‑A550‑MCE60Mw · účinnost 24,8 % · záruka 15/30 let · vysokovýkonný panel',
      keywords: ['aiko', 'neostar', '3p', '550', 'xbc', 'c&i']
    },
    {
      name: 'Aiko Neostar 3P+ 490 Wp dual glass',
      short: 'xBC Aiko|Neostar 3P+ 490',
      specs: 'xBC Back-Contact, sklo-sklo, černý rám · AIKO‑A490‑MCE54Dw · účinnost 24,5 % · záruka 15/30 let',
      keywords: ['aiko', 'neostar', '3p+', '490', 'xbc', 'sklo']
    },
    {
      name: 'Aiko Comet 2N 615 Wp',
      short: 'xBC Aiko|Comet 2N 615',
      specs: 'xBC Back-Contact, stříbrný rám · AIKO‑A615‑MAH72Mw · účinnost 23,3 % · záruka 15/30 let · pro velké instalace',
      keywords: ['aiko', 'comet', '2n', '615', 'xbc', 'c&i']
    },
    {
      name: 'Aiko Nebular 2P 440 Wp',
      short: 'xBC Aiko|Nebular 2P 440',
      specs: 'xBC Back-Contact, černý rám · AIKO‑A440‑MAH54Tm · účinnost 22,0 % · záruka 12/25 let · ihned k odeslání · 8,6 kg lehký',
      keywords: ['aiko', 'nebular', '2p', '440', 'xbc']
    },

    /* — Longi (Hi-MO řada s xBC) — */
    {
      name: 'LONGi Hi-MO X10 540 Wp',
      short: 'LONGi Hi-MO X10|540 Wp xBC',
      specs: 'xBC Back-Contact, černý rám · LR7‑60HVH‑540M · účinnost 23,9 % · záruka 15/30 let · prémiový N-type',
      keywords: ['longi', 'hi-mo', 'x10', '540', 'xbc']
    },
    {
      name: 'LONGi Hi-MO S10 500 Wp bifaciální',
      short: 'LONGi Hi-MO S10|500 Wp BIF',
      specs: 'xBC Bifaciální, sklo-sklo, černý rám · LR7‑54HJD‑500M · účinnost 24,5 % · záruka 30/30 let · zatížení sněhem 6000 Pa',
      keywords: ['longi', 'hi-mo', 's10', '500', 'xbc', 'bifacial']
    },
    {
      name: 'LONGi Hi-MO X6 Scientist 445 Wp',
      short: 'LONGi Hi-MO X6|Scientist 445',
      specs: 'xBC Back-Contact, černý rám · LR5‑54HTH‑445M · účinnost 22,8 % · záruka 25/25 let · vhodné pro RD',
      keywords: ['longi', 'hi-mo', 'x6', 'scientist', '445', 'xbc', 'rd']
    },
    {
      name: 'LONGi Hi-MO X6 570 Wp',
      short: 'LONGi Hi-MO X6|570 Wp',
      specs: 'xBC Back-Contact, stříbrný rám · LONGi 72HTH‑570W · účinnost 22,1 % · záruka 15/25 let · pro velké projekty',
      keywords: ['longi', 'hi-mo', 'x6', '570', 'xbc', 'c&i']
    },

    /* — Jinko a JA Solar (zachovat z původního) — */
    {
      name: 'Jinko Tiger Neo 440 Wp',
      short: 'TOPCon N-type|Jinko Tiger Neo',
      specs: 'TOPCon N‑type · JKM440N‑54HL4‑V · účinnost 22,5 % · Tier 1 výrobce · záruka výkonu 30 let',
      keywords: ['jinko', 'tiger', 'neo', '440', 'topcon']
    },
    {
      name: 'JA Solar 460 Wp',
      short: 'TOPCon mono|JA Solar 460',
      specs: 'TOPCon mono · JAM54D40‑460/MB · účinnost 22,5 % · Tier 1 výrobce · záruka výkonu 25 let',
      keywords: ['ja solar', 'jasolar', '460', 'topcon']
    }
  ],

  /* ============ STŘÍDAČE ============ */
  inverters: [
    /* — Solax X3-Hybrid (RD) — */
    {
      name: 'Solax X3-HYB-10.0-P G4 PRO',
      short: 'Solax X3-Hybrid|10 kW G4 PRO',
      specs: '3fázový hybridní střídač, G4 PRO · 10 kW AC · 3× MPPT 110-950 V · funkce zálohy domu · záruka 10 let',
      keywords: ['solax', 'x3', 'hybrid', 'g4', 'pro', '10', 'rd']
    },
    {
      name: 'Solax X3-HYB-15.0-P G4 PRO',
      short: 'Solax X3-Hybrid|15 kW G4 PRO',
      specs: '3fázový hybridní střídač, G4 PRO · 15 kW AC · 3× MPPT 110-950 V · funkce zálohy domu · záruka 10 let',
      keywords: ['solax', 'x3', 'hybrid', 'g4', 'pro', '15', 'rd']
    },
    {
      name: 'Solax X3-Hybrid-15.0-D',
      short: 'Solax X3-Hybrid|15 kW',
      specs: '3fázový hybridní střídač · 15 kW · funkce zálohy domu při výpadku · autorizovaný partner Solax pro ČR · záruka 10 let',
      keywords: ['solax', 'x3', 'hybrid', '15', 'd', 'rd']
    },
    {
      name: 'Solax X3-Hybrid-10.0-D',
      short: 'Solax X3-Hybrid|10 kW',
      specs: '3fázový hybridní střídač · 10 kW · funkce zálohy domu · autorizovaný partner Solax pro ČR · záruka 10 let',
      keywords: ['solax', 'x3', 'hybrid', '10', 'd']
    },

    /* — Solax X3-ULT (větší RD / menší C&I) — */
    {
      name: 'Solax X3-ULT-15KP (AFCI)',
      short: 'Solax X3-ULT|15 kW AFCI',
      specs: '3fázový hybridní střídač s AFCI · 15 kW AC · 3× MPPT 160-950 V · ochrana před obloukovou chybou · záruka 10 let',
      keywords: ['solax', 'x3', 'ult', '15', 'afci']
    },
    {
      name: 'Solax X3-ULT-20KP (AFCI)',
      short: 'Solax X3-ULT|20 kW AFCI',
      specs: '3fázový hybridní střídač s AFCI · 20 kW AC · 3× MPPT 160-950 V · ochrana před obloukovou chybou · záruka 10 let',
      keywords: ['solax', 'x3', 'ult', '20', 'afci']
    },
    {
      name: 'Solax X3-ULT-25K (AFCI)',
      short: 'Solax X3-ULT|25 kW AFCI',
      specs: '3fázový hybridní střídač s AFCI · 25 kW AC · 3× MPPT 160-950 V · pro větší instalace · záruka 10 let',
      keywords: ['solax', 'x3', 'ult', '25', 'afci']
    },
    {
      name: 'Solax X3-ULT-30K (AFCI)',
      short: 'Solax X3-ULT|30 kW AFCI',
      specs: '3fázový hybridní střídač s AFCI · 30 kW AC · 3× MPPT 160-950 V · pro větší instalace · záruka 10 let',
      keywords: ['solax', 'x3', 'ult', '30', 'afci']
    },

    /* — Solax X3-PRO (C&I projekty) — */
    {
      name: 'Solax X3-PRO-25K-G2',
      short: 'Solax X3-PRO|25 kW G2',
      specs: '3fázový FTV/projektový střídač · 25 kW AC · 3× MPPT 160-980 V · USB/RS485/DRM · záruka 5+5 let · pro C&I',
      keywords: ['solax', 'x3', 'pro', '25', 'g2', 'c&i']
    },
    {
      name: 'Solax X3-PRO-30K-G2',
      short: 'Solax X3-PRO|30 kW G2',
      specs: '3fázový FTV/projektový střídač · 30 kW AC · 3× MPPT 160-980 V · USB/RS485/DRM · záruka 5+5 let · pro C&I',
      keywords: ['solax', 'x3', 'pro', '30', 'g2', 'c&i']
    },

    /* — Solax AELIO (komerční velké) — */
    {
      name: 'Solax AELIO P60',
      short: 'Solax AELIO P60|60 kW',
      specs: '3fázový komerční střídač · 60 kW · vhodný pro C&I instalace · autorizovaný partner Solax pro ČR · záruka 10 let',
      keywords: ['solax', 'aelio', 'p60', '60', 'c&i']
    },
    {
      name: 'Solax AELIO P100',
      short: 'Solax AELIO P100|100 kW',
      specs: '3fázový komerční střídač · 100 kW · pro velké C&I instalace · autorizovaný partner Solax pro ČR · záruka 10 let',
      keywords: ['solax', 'aelio', 'p100', '100', 'c&i']
    },

    /* — Huawei a SolarEdge — */
    {
      name: 'Huawei SUN2000-100KTL-M2',
      short: 'Huawei SUN2000|100 kW',
      specs: '3fázový string střídač · 100 kW · MPPT optimizace · 99 % účinnost · záruka 10 let',
      keywords: ['huawei', 'sun2000', '100ktl', '100', 'c&i']
    },
    {
      name: 'SolarEdge SE100K',
      short: 'SolarEdge SE100K|100 kW',
      specs: '3fázový HD-Wave střídač · 100 kW · synergie s SolarEdge optimizéry · cloud monitoring · záruka 12 let',
      keywords: ['solaredge', 'se100k', '100', 'hd wave', 'c&i']
    }
  ],

  /* ============ BATERIE (rezidenční + komerční) ============ */
  batteries: [
    /* — Solax Triple Power T-BAT (RD klasika) — */
    {
      name: 'Solax Triple Power T3.0 11 kWh',
      short: 'Solax Triple Power|T3.0 11 kWh LFP',
      specs: 'Vysokonapěťová LFP · 11,0 kWh netto (12,3 kWh brutto) · 6000 cyklů · záruka 10 let · pro RD',
      keywords: ['solax', 'triple', 'power', 't3', '11', 'rd']
    },
    {
      name: 'Solax Triple Power T-BAT H11.6',
      short: 'Solax Triple Power|H11.6 kWh LFP',
      specs: 'Vysokonapěťová LFP · 11,6 kWh · integrovaný BMS · záruka 10 let · vhodné pro menší RD',
      keywords: ['solax', 'triple', 'power', 'h11', '11', 'rd']
    },
    {
      name: 'Solax Triple Power T-BAT H23.2',
      short: 'Solax Triple Power|23,2 kWh LFP',
      specs: 'LiFePO₄ · 23,2 kWh modulární · integrovaný BMS · záruka 10 let · možnost rozšíření přidáním modulů',
      keywords: ['solax', 'triple', 'power', 't-bat', 'h23', '23', 'rd']
    },

    /* — Solax T-BAT-SYS-HV-S3.6 (větší RD) — */
    {
      name: 'Solax T-BAT-SYS-HV-S3.6 33,2 kWh',
      short: 'Solax T-BAT-SYS|33,2 kWh netto',
      specs: 'Vysokonapěťová LFP · 33,2 kWh netto (36,86 kWh brutto) · záruka 10 let · pro velké RD nebo malé C&I',
      keywords: ['solax', 't-bat-sys', 'hv', '33', 'rd']
    },
    {
      name: 'Solax T-BAT-SYS-HV-S3.6 36,5 kWh',
      short: 'Solax T-BAT-SYS|36,5 kWh netto',
      specs: 'Vysokonapěťová LFP · 36,5 kWh netto (40,55 kWh brutto) · záruka 10 let',
      keywords: ['solax', 't-bat-sys', 'hv', '36', '40']
    },
    {
      name: 'Solax T-BAT-SYS-HV-S3.6 39,8 kWh',
      short: 'Solax T-BAT-SYS|39,8 kWh netto',
      specs: 'Vysokonapěťová LFP · 39,8 kWh netto (44,24 kWh brutto) · záruka 10 let',
      keywords: ['solax', 't-bat-sys', 'hv', '39', '44']
    },
    {
      name: 'Solax T-BAT-SYS-HV-S3.6 43,1 kWh',
      short: 'Solax T-BAT-SYS|43,1 kWh netto',
      specs: 'Vysokonapěťová LFP · 43,1 kWh netto (47,92 kWh brutto) · záruka 10 let · top model rezidenční řady',
      keywords: ['solax', 't-bat-sys', 'hv', '43', '47']
    },

    /* — Solax AELIO komerční (C&I 50-100 kW) — */
    {
      name: 'Solax AELIO-P50B100 (50 kW / 90 kWh)',
      short: 'Solax AELIO|P50B100 90 kWh',
      specs: 'Komerční All-in-One LFP · 50 kW / 90 kWh využitelné · outdoor IP54 · záruka 10 let · pro C&I',
      keywords: ['solax', 'aelio', 'p50b100', '50', '90', 'c&i']
    },
    {
      name: 'Solax AELIO-P60B100 (60 kW / 90 kWh)',
      short: 'Solax AELIO|P60B100 90 kWh',
      specs: 'Komerční All-in-One LFP · 60 kW / 90 kWh využitelné · outdoor · záruka 10 let · pro C&I',
      keywords: ['solax', 'aelio', 'p60b100', '60', '90', 'c&i']
    },
    {
      name: 'Solax AELIO-P50B200 (50 kW / 180 kWh)',
      short: 'Solax AELIO|P50B200 180 kWh',
      specs: 'Komerční All-in-One LFP · 50 kW / 180 kWh využitelné · outdoor · záruka 10 let · pro C&I',
      keywords: ['solax', 'aelio', 'p50b200', '50', '180', 'c&i']
    },
    {
      name: 'Solax AELIO-P60B200 (60 kW / 180 kWh)',
      short: 'Solax AELIO|P60B200 180 kWh',
      specs: 'Komerční All-in-One LFP · 60 kW / 180 kWh využitelné · outdoor · záruka 10 let · pro C&I',
      keywords: ['solax', 'aelio', 'p60b200', '60', '180', 'c&i']
    },
    {
      name: 'Solax TRENE-P100B215 (100 kW / 193,5 kWh)',
      short: 'Solax TRENE|100 kW / 193 kWh',
      specs: 'Komerční All-in-One LFP · 100 kW / 193,5 kWh využitelné · outdoor · záruka 10 let · pro střední C&I',
      keywords: ['solax', 'trene', 'p100', '100', '193', 'c&i']
    },

    /* — Solax AELIO 300 kWh (předchozí vzor) — */
    {
      name: 'Solax AELIO 300 kWh',
      short: 'AELIO baterie|300 kWh LFP',
      specs: 'LiFePO₄ · 300 kWh modulární · kapalinové chlazení · integrovaný BMS · záruka 10 let · vhodné pro C&I',
      keywords: ['solax', 'aelio', '300', 'kwh', 'c&i']
    },

    /* — Pylontech RD/SOHO — */
    {
      name: 'Pylontech Force-H2 14,2 kWh',
      short: 'Pylontech Force-H2|14,2 kWh LFP',
      specs: 'LiFePO₄ · 14,2 kWh modulární · vysokonapěťová baterie · záruka 10 let · vhodné pro RD',
      keywords: ['pylontech', 'force', 'h2', '14', 'rd']
    },

    /* — Pylontech komerční modulární PowerCube-M1-C — */
    {
      name: 'Pylontech PowerCube-M1-C 75,8 kWh',
      short: 'Pylontech PowerCube|75,8 kWh M1-C',
      specs: 'Modulární LFP indoor (bez střídače) · 72,0 kWh využitelné · záruka 10 let · pro malá C&I',
      keywords: ['pylontech', 'powercube', 'm1', '75', 'c&i']
    },
    {
      name: 'Pylontech PowerCube-M1-C 80,5 kWh',
      short: 'Pylontech PowerCube|80,5 kWh M1-C',
      specs: 'Modulární LFP indoor · 76,4 kWh využitelné · záruka 10 let · pro malá C&I',
      keywords: ['pylontech', 'powercube', 'm1', '80', 'c&i']
    },
    {
      name: 'Pylontech PowerCube-M1-C 85,3 kWh',
      short: 'Pylontech PowerCube|85,3 kWh M1-C',
      specs: 'Modulární LFP indoor · 81,0 kWh využitelné · záruka 10 let · pro střední C&I',
      keywords: ['pylontech', 'powercube', 'm1', '85', 'c&i']
    },
    {
      name: 'Pylontech PowerCube-M1-C 90,0 kWh',
      short: 'Pylontech PowerCube|90,0 kWh M1-C',
      specs: 'Modulární LFP indoor · 85,5 kWh využitelné · záruka 10 let · pro střední C&I',
      keywords: ['pylontech', 'powercube', 'm1', '90', 'c&i']
    },
    {
      name: 'Pylontech PowerCube-M1-C 94,8 kWh',
      short: 'Pylontech PowerCube|94,8 kWh M1-C',
      specs: 'Modulární LFP indoor · 90,0 kWh využitelné · záruka 10 let · pro střední C&I',
      keywords: ['pylontech', 'powercube', 'm1', '94', 'c&i']
    },

    /* — Pylontech OPTIM/A-řada (skříňové a kontejnerové C&I) — */
    {
      name: 'Pylontech Optim US-L260 OMNI',
      short: 'Pylontech Optim|260 kWh LFP',
      specs: 'LiFePO₄ · 261 kWh / 125 kW PCS All-in-One · 248 kWh využitelné · skříň outdoor · kapalinové chlazení · IP55 · záruka 10 let · BloombergNEF Tier 1',
      keywords: ['pylontech', 'optim', 'us-l260', 'l260', 'omni', '260', '261', 'c&i']
    },
    {
      name: 'Pylontech A1000-OMNI 500 kW / 1 MWh',
      short: 'Pylontech A1000|500 kW / 1 MWh',
      specs: 'Kontejner 10ft All-in-One LFP · 500 kW / 983 kWh využitelné · outdoor · záruka 10 let · pro velké C&I',
      keywords: ['pylontech', 'a1000', 'omni', '500', '1mwh', 'kontejner', 'c&i']
    },
    {
      name: 'Pylontech A2000-OMNI 1 MW / 2 MWh',
      short: 'Pylontech A2000|1 MW / 2 MWh',
      specs: 'Kontejner 20ft All-in-One LFP · 1000 kW / 1966 kWh využitelné · outdoor · záruka 10 let · pro SVR a velké C&I',
      keywords: ['pylontech', 'a2000', 'omni', '1mw', '2mwh', 'kontejner', 'svr']
    },
    {
      name: 'Pylontech L3300-OMNI 1,67 MW / 3,34 MWh',
      short: 'Pylontech L3300|1,67 MW kontejner',
      specs: 'Kontejner 20ft All-in-One LFP · 1670 kW / 3176 kWh využitelné · outdoor · pro SVR (FCR/aFRR/mFRR)',
      keywords: ['pylontech', 'l3300', 'omni', '1670', '3344', 'kontejner', 'svr']
    },
    {
      name: 'Pylontech L5000-BAT 5 MWh kontejner',
      short: 'Pylontech L5000|5 MWh kontejner',
      specs: 'Kontejner 20ft modulární LFP (bez střídače) · 4765 kWh využitelné · outdoor · záruka 10 let · pro velké SVR',
      keywords: ['pylontech', 'l5000', 'bat', '5mwh', '5000', 'kontejner', 'svr']
    },

    /* — Sungrow PowerStack (C&I) — */
    {
      name: 'Sungrow PowerStack ST225CS-110kW-2H',
      short: 'Sungrow PowerStack|110 kW / 229 kWh',
      specs: 'All-in-One LFP outdoor · 110 kW / 229 kWh využitelné · 2H · pro C&I instalace',
      keywords: ['sungrow', 'powerstack', 'st225', '110', '229', '2h', 'c&i']
    },
    {
      name: 'Sungrow PowerStack ST255CS-125kW-2H',
      short: 'Sungrow PowerStack|125 kW / 255 kWh',
      specs: 'All-in-One LFP outdoor · 125 kW / 255 kWh využitelné · Ethernet komunikace · záruka 5 let · pro střední C&I',
      keywords: ['sungrow', 'powerstack', 'st255', '125', '255', '2h', 'c&i']
    },
    {
      name: 'Sungrow PowerStack ST510CS-125kW-4H',
      short: 'Sungrow PowerStack|125 kW / 514 kWh',
      specs: 'All-in-One LFP outdoor · 125 kW / 514 kWh využitelné (4H) · Ethernet · záruka 5 let · pro velké C&I',
      keywords: ['sungrow', 'powerstack', 'st510', '125', '514', '4h', 'c&i']
    },

    /* — Huawei LUNA (RD) — */
    {
      name: 'Huawei LUNA2000-15-S0',
      short: 'Huawei LUNA2000|15 kWh LFP',
      specs: 'LiFePO₄ · 15 kWh modulární · integrovaný BMS · záruka 10 let',
      keywords: ['huawei', 'luna', 'luna2000', '15', 'rd']
    }
  ],

  /* ============ OPTIMIZÉRY ============ */
  optimizers: [
    {
      name: 'Tigo TS4-A-2F',
      short: 'Optimizéry Tigo|požární bezpečnost',
      specs: 'Rapid shutdown na úrovni panelu · monitoring výkonu jednotlivých panelů · vysílač Tigo CCA (1 ks) · plná kompatibilita s PBO',
      keywords: ['tigo', 'ts4', 'ts4-a-2f', 'optimizer']
    },
    {
      name: 'SolarEdge P850',
      short: 'SolarEdge|Power Optimizer',
      specs: 'Power Optimizer pro každý panel · monitoring po panelech · rapid shutdown · záruka 25 let',
      keywords: ['solaredge', 'p850', 'optimizer']
    }
  ],

  /* ============ KONSTRUKCE ============ */
  construction: [
    {
      name: 'K2 Systems GmbH',
      short: 'K2 Systems|šikmá střecha',
      specs: 'Nástřešní hliníková konstrukce · nepoškození krytiny · ideální pro šikmé střechy RD · dlouhá životnost · německá výroba',
      keywords: ['k2', 'k2 systems', 'rd', 'sikma', 'střecha']
    },
    {
      name: 'East-West 10°',
      short: 'East-West 10°|plochá střecha',
      specs: 'Hliníková konstrukce east-west pro ploché střechy · sklon 10° · minimální zatížení · rozložení výroby do celého dne',
      keywords: ['east west', 'ew', '10', 'plochá', 'flat', 'c&i']
    },
    {
      name: 'Konstrukce na zem (south)',
      short: 'Pozemní konstrukce|south 25°',
      specs: 'Hliníková konstrukce pro pozemní instalace · jižní orientace 25-35° · pozinkované zemní šrouby · pro velké C&I projekty',
      keywords: ['zem', 'pozemní', 'south', 'jih', 'tracker']
    }
  ],

  /* ============ WALLBOX ============ */
  wallbox: [
    {
      name: 'Solax EV22 Wallbox 22 kW',
      short: 'Solax Wallbox|EV22 22 kW',
      specs: '3fázové nabíjení až 22 kW · integrace do FVE systému · chytré dobíjení z přebytků FVE · záruka 3 roky',
      keywords: ['solax', 'ev22', 'wallbox', '22', 'rd']
    },
    {
      name: 'Wallbox Pulsar Plus 22 kW',
      short: 'Pulsar Plus|22 kW',
      specs: '3fázové nabíjení až 22 kW · WiFi/Bluetooth · myWallbox aplikace · záruka 3 roky',
      keywords: ['wallbox', 'pulsar', 'plus', '22']
    }
  ]
};




/* ============================================================
 * AUTOCOMPLETE UI (broadcast architecture)
 * ============================================================ */

(function() {
  'use strict';

  if (window.matchMedia && window.matchMedia('print').matches) return;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    .ec-autocomplete {
      position: absolute;
      z-index: 9999;
      background: #ffffff;
      border: 1px solid #E6E9EF;
      border-radius: 6px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.15);
      max-height: 300px;
      overflow-y: auto;
      min-width: 320px;
      max-width: 460px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 12.5px;
      color: #1A1F2B;
    }
    .ec-autocomplete-header {
      padding: 8px 12px;
      background: #F8F9FB;
      border-bottom: 1px solid #E6E9EF;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
      color: #EC6B2D;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .ec-autocomplete-header .ec-hint {
      font-size: 9px;
      color: #6B7280;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: none;
    }
    .ec-autocomplete-item {
      padding: 9px 12px;
      cursor: pointer;
      border-bottom: 1px solid #F0F2F6;
      transition: background 0.1s;
    }
    .ec-autocomplete-item:last-child { border-bottom: none; }
    .ec-autocomplete-item:hover,
    .ec-autocomplete-item.ec-active {
      background: rgba(236,107,45,0.1);
    }
    .ec-autocomplete-name {
      font-weight: 700;
      color: #0B0F17;
      font-size: 12.5px;
      margin-bottom: 2px;
    }
    .ec-autocomplete-specs {
      font-size: 11px;
      color: #6B7280;
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .ec-autocomplete-empty {
      padding: 12px;
      text-align: center;
      color: #6B7280;
      font-size: 11px;
      font-style: italic;
    }
    /* Highlight all data-catalog targets when one is being edited (visual cue) */
    .ec-broadcast-active [data-catalog="panels"] { outline: 1px dashed rgba(236,107,45,0.4); outline-offset: 2px; }
    .ec-broadcast-active [data-catalog="inverters"] { outline: 1px dashed rgba(122,79,219,0.4); outline-offset: 2px; }
    .ec-broadcast-active [data-catalog="batteries"] { outline: 1px dashed rgba(30,147,210,0.4); outline-offset: 2px; }
    .ec-broadcast-active [data-catalog="optimizers"] { outline: 1px dashed rgba(43,214,123,0.4); outline-offset: 2px; }
    .ec-broadcast-active [data-catalog="construction"] { outline: 1px dashed rgba(184,193,204,0.4); outline-offset: 2px; }
    .ec-broadcast-active [data-catalog="wallbox"] { outline: 1px dashed rgba(255,180,80,0.4); outline-offset: 2px; }
    @media print {
      .ec-autocomplete { display: none !important; }
      [data-catalog] { outline: none !important; }
    }
  `;
  document.head.appendChild(style);

  let dropdown = null;
  let activeField = null;
  let activeIndex = -1;
  let filteredItems = [];
  let userQuery = '';

  function closeDropdown() {
    if (dropdown) {
      dropdown.remove();
      dropdown = null;
    }
    activeField = null;
    activeIndex = -1;
    filteredItems = [];
    userQuery = '';
    document.body.classList.remove('ec-broadcast-active');
  }

  function fuzzyMatch(query, item) {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    const haystack = (item.name + ' ' + (item.short || '') + ' ' + (item.keywords || []).join(' ')).toLowerCase();
    return q.split(/\s+/).every(w => haystack.includes(w));
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function showDropdown(field) {
    const category = field.dataset.catalog;
    const items = (window.ENERGO_CATALOG[category] || []);
    filteredItems = userQuery ? items.filter(it => fuzzyMatch(userQuery, it)) : items.slice();

    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'ec-autocomplete no-print';
      document.body.appendChild(dropdown);
    }

    const labels = {
      panels: 'Panely', inverters: 'Střídače', batteries: 'Baterie',
      optimizers: 'Optimizéry', construction: 'Konstrukce', wallbox: 'Wallbox'
    };

    const allCount = items.length;
    const countOfTargets = document.querySelectorAll(`[data-catalog="${category}"]`).length;

    let html = `<div class="ec-autocomplete-header">
      <span>${labels[category] || category} · ${filteredItems.length} z ${allCount}</span>
      <span class="ec-hint">↻ aktualizuje ${countOfTargets} polí</span>
    </div>`;

    if (filteredItems.length === 0) {
      html += '<div class="ec-autocomplete-empty">Žádný produkt nenalezen.<br>Můžeš pokračovat psaním ručně.</div>';
    } else {
      filteredItems.forEach((it, i) => {
        const activeClass = i === activeIndex ? ' ec-active' : '';
        html += `<div class="ec-autocomplete-item${activeClass}" data-index="${i}">
          <div class="ec-autocomplete-name">${escapeHtml(it.name)}</div>
          <div class="ec-autocomplete-specs">${escapeHtml(it.specs)}</div>
        </div>`;
      });
    }
    dropdown.innerHTML = html;

    const rect = field.getBoundingClientRect();
    let left = window.scrollX + rect.left;
    let top = window.scrollY + rect.bottom + 4;
    // Keep dropdown within viewport
    const dropdownWidth = 360;
    if (left + dropdownWidth > window.scrollX + window.innerWidth) {
      left = Math.max(window.scrollX + 10, window.scrollX + window.innerWidth - dropdownWidth - 10);
    }
    dropdown.style.left = left + 'px';
    dropdown.style.top = top + 'px';

    dropdown.querySelectorAll('.ec-autocomplete-item').forEach(el => {
      el.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const idx = parseInt(el.dataset.index, 10);
        applySelection(field, filteredItems[idx]);
      });
    });
  }

  function applySelection(field, item) {
    const category = field.dataset.catalog;
    // BROADCAST: update ALL elements with [data-catalog=category] in document
    const targets = document.querySelectorAll(`[data-catalog="${category}"]`);
    targets.forEach(target => {
      const format = target.dataset.format || 'name';
      let value;
      if (format === 'short') {
        // short = "TOPCon|Trina Vertex S+" → "TOPCon<br>Trina Vertex S+"
        value = (item.short || item.name).replace(/\|/g, '<br>');
        target.innerHTML = value;
      } else if (format === 'specs') {
        target.innerText = item.specs || '';
      } else {
        // 'name' is default
        target.innerText = item.name;
      }
      target.dispatchEvent(new Event('input', { bubbles: true }));
    });
    closeDropdown();
    field.focus();
  }

  document.addEventListener('focusin', (e) => {
    const field = e.target;
    if (field.matches && field.matches('[data-catalog]')) {
      activeField = field;
      activeIndex = -1;
      userQuery = '';
      document.body.classList.add('ec-broadcast-active');
      showDropdown(field);
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target === activeField) {
      activeIndex = -1;
      userQuery = (activeField.innerText || '').trim();
      showDropdown(activeField);
    }
  });

  document.addEventListener('focusout', (e) => {
    if (e.target === activeField) {
      setTimeout(() => {
        if (document.activeElement !== activeField) closeDropdown();
      }, 200);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!activeField || !dropdown) return;
    if (e.key === 'Escape') {
      closeDropdown();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredItems.length === 0) return;
      activeIndex = (activeIndex + 1) % filteredItems.length;
      showDropdown(activeField);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredItems.length === 0) return;
      activeIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
      showDropdown(activeField);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      applySelection(activeField, filteredItems[activeIndex]);
    }
  });

  window.addEventListener('scroll', closeDropdown, { passive: true });
  window.addEventListener('resize', closeDropdown);

  function addCatalogHints() {
    const labels = {
      panels: 'Panely', inverters: 'Střídače', batteries: 'Baterie',
      optimizers: 'Optimizéry', construction: 'Konstrukce', wallbox: 'Wallbox'
    };
    document.querySelectorAll('[data-catalog]').forEach(el => {
      const cat = el.dataset.catalog;
      const fmt = el.dataset.format || 'name';
      el.title = `📚 Katalog ${labels[cat] || cat} (${fmt}) — kliknutí zobrazí výběr; výběr aktualizuje všechna pole napříč dokumentem`;
      el.style.cursor = 'pointer';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCatalogHints);
  } else {
    addCatalogHints();
  }
})();
