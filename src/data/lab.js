/**
 * 🧪 BASE DE DATOS DE LABORATORIO Y ANALÍTICAS
 * -------------------------------------------------------------------
 * Autor: PetrescuENF3 (Reconstrucción)
 * Normativa: CLSI (Clinical and Laboratory Standards Institute) - Order of Draw
 * Edición: NANDA-I 2024-2026 | NIC 7ª Ed
 * Idiomas: Español (ES) | Rumano (RO)
 */

// --------------------------------------------------------------------------
// 1. GUÍA DE TUBOS Y ORDEN DE LLENADO (ORDER OF DRAW)
// --------------------------------------------------------------------------
/* ⚠️ IMPORTANTE: El orden es CRÍTICO para evitar contaminación de aditivos.
   Ej: Si llenas el Lila (EDTA) antes que el Azul (Citrato) o el Verde (Heparina),
   el potasio del EDTA contamina la muestra y da una hiperpotasemia falsa
   incompatible con la vida.
*/

export const tubosLaboratorio = [
  {
    id: "tube_00",
    order: 0,
    color: "is-pale", // Representación visual (Botellas)
    nameES: "Hemocultivos (Aerobio/Anaerobio)",
    nameRO: "Hemoculturi (Aerob/Anaerob)",
    additive: "Caldo de cultivo / Cărbune activ",

    // --- ESPAÑOL ---
    descES: `**Prioridad Absoluta:** Se extraen SIEMPRE primero para evitar contaminación bacteriana.
    **Técnica Aséptica:** Limpiar tapón del bote con alcohol y piel con Clorhexidina alcohólica. Dejar secar.
    **Orden Botes:**
    1. **Aerobio (Azul/Verde):** Primero, porque la palomilla tiene aire. Si pinchas el anaerobio primero, entra aire y matas las bacterias anaerobias.
    2. **Anaerobio (Naranja/Rojo):** Segundo.`,

    careES: `**⚠️ LLENADO:** 8-10 ml por bote (adultos). Menos sangre = Falsos negativos.
    **NANDA (00004):** Riesgo de infección (sepsis).`,

    // --- RUMANO ---
    descRO: `**Prioritate Absolută:** Se recoltează ÎNTOTDEAUNA primele.
    **Tehnică:** Asepsie riguroasă. Clorhexidină.
    **Ordinea Sticlelor:**
    1. **Aerob:** Primul (aerul din tubulatură nu afectează aerobii).
    2. **Anaerob:** Al doilea.`,

    careRO: `**⚠️ UMPLERE:** 8-10 ml per sticlă. 
    **NANDA (00004):** Risc de infecție.`,
  },
  {
    id: "tube_01",
    order: 1,
    color: "is-info", // Azul
    nameES: "Azul (Citrato)",
    nameRO: "Albastru (Citrat)",
    testType: "Coagulación / Coagulare",
    additive: "Citrato de Sodio (Anticoagulante reversible)",

    descES: `**Pruebas:** INR (Sintrom), Tiempos (TP, TTPA), Dímero-D, Fibrinógeno.
    **Mecanismo:** El citrato secuestra el calcio para que la sangre no se coagule. El laboratorio luego añade calcio para ver cuánto tarda en coagular.`,

    careES: `**⚠️ CRÍTICO - LLENADO EXACTO:** Tiene una flecha de enrase. Debe llenarse **EXACTAMENTE** hasta la marca. 
    * **Si llenas poco:** Sobra citrato -> Tiempos alargados falsos (Riesgo de sangrado falso).
    * **Si llenas mucho:** Falta citrato -> La sangre se coagula en el tubo (Muestra rechazada).
    * **Inversión:** Invertir suavemente 3-4 veces. NO AGITAR.`,

    descRO: `**Teste:** INR, aPTT, D-Dimeri, Fibrinogen.
    **Mecanism:** Citratul leagă calciul.`,

    careRO: `**⚠️ CRITIC - UMPLERE EXACTĂ:** Până la semnul săgeții.
    * **Prea puțin:** Rezultate false (timpi prelungiți).
    * **Prea mult:** Sânge coagulat (Probă respinsă).
    * **Inversare:** 3-4 ori delicat.`,
  },
  {
    id: "tube_02",
    order: 2,
    color: "is-warning", // Amarillo/Oro
    nameES: "Amarillo/Oro (Suero + Gel)",
    nameRO: "Galben/Auriu (Ser + Gel)",
    testType: "Bioquímica Suero / Biochimie",
    additive: "Gel separador + Activador coagulación",

    descES: `**Pruebas:** Iones (Na, K), Función Renal (Urea, Creatinina), Hígado (GOT, GPT), PCR, Hormonas (TSH).
    **Características:** El gel separa el suero de las células tras centrifugar. Tarda unos 20-30 min en coagular antes de poder procesarse.`,

    careES: `**Uso:** Rutina, Consultas Externas, Planta.
    **Inversión:** 5-6 veces para mezclar el activador de coagulación.`,

    descRO: `**Teste:** Ioni, Rinichi, Ficat, PCR, Hormoni.
    **Caracteristici:** Gelul separă serul după centrifugare.`,

    careRO: `**Utilizare:** Rutină.
    **Inversare:** 5-6 ori.`,
  },
  {
    id: "tube_03",
    order: 3,
    color: "is-success", // Verde
    nameES: "Verde (Heparina Litio)",
    nameRO: "Verde (Heparină Litiu)",
    testType: "Bioquímica Urgente / Troponinas",
    additive: "Heparina de Litio",

    descES: `**Pruebas:** Mismas que el amarillo (Bioquímica) + Troponinas (Infarto).
    **¿Por qué en Urgencias?** A diferencia del amarillo, **NO hay que esperar** a que coagule. Se centrifuga inmediatamente y ahorra 20 minutos vitales en un infarto o ictus.`,

    careES: `**⚠️ Error Frecuente:** No usar para pedir Litio (el tubo ya tiene litio) ni PCR en algunos laboratorios (consultar protocolo).
    **Inversión:** 8-10 veces.`,

    descRO: `**Teste:** Biochimie Urgentă + Troponine.
    **De ce la Urgențe?** Nu trebuie așteptată coagularea. Se câștigă timp prețios.`,

    careRO: `**⚠️ Eroare Frecventă:** Nu utilizați pentru dozarea Litiului.
    **Inversare:** 8-10 ori.`,
  },
  {
    id: "tube_04",
    order: 4,
    color: "is-primary", // Lila/Morado
    nameES: "Lila (EDTA)",
    nameRO: "Mov (EDTA)",
    testType: "Hematología / Hematologie",
    additive: "EDTA K2/K3",

    descES: `**Pruebas:** Hemograma (Hemoglobina, Leucocitos, Plaquetas), HbA1c (Azúcar trimestral), Banco de Sangre (Grupo y RH).
    **Mecanismo:** El EDTA preserva la forma de las células sanguíneas para poder contarlas al microscopio.`,

    careES: `**⚠️ CONTAMINANTE PELIGROSO:** El EDTA es rico en POTASIO (K+). Si la aguja toca este tubo y luego llenas un tubo de bioquímica (Verde/Amarillo), saldrá un Potasio de 15 mEq/L (incompatible con la vida) y el laboratorio llamará en pánico. **RESPETAR ORDEN.**
    **Inversión:** 8-10 veces. Fundamental para que no se hagan microcoágulos (si hay coágulos, no sirve).`,

    descRO: `**Teste:** Hemoleucogramă, HbA1c, Grup Sanguin.
    **Mecanism:** Păstrează morfologia celulelor.`,

    careRO: `**⚠️ CONTAMINANT PERICULOS:** Conține mult POTASIU. Dacă umpleți acest tub înaintea celui de biochimie, rezultatele vor fi eronate.
    **Inversare:** 8-10 ori. Esențial pentru a preveni microcheagurile.`,
  },
  {
    id: "tube_05",
    order: 5,
    color: "is-dark", // Gris
    nameES: "Gris (Fluoruro)",
    nameRO: "Gri (Fluorură)",
    testType: "Glucosa / Lactato",
    additive: "Fluoruro de Sodio + Oxalato",

    descES: `**Pruebas:** Glucemia venosa exacta y **LACTATO** (Sepsis).
    **Mecanismo:** El fluoruro "congela" el metabolismo de los glóbulos rojos para que dejen de comerse la glucosa del tubo. Si usas un tubo rojo/amarillo y tardas 2h en procesarlo, la glucosa sale falsamente baja.`,

    careES: `**Lactato:** En sospecha de sepsis, llenar este tubo y enviar en hielo inmediatamente.`,

    descRO: `**Teste:** Glicemie exactă și **LACTAT**.
    **Mecanism:** Oprește consumul de glucoză de către eritrocite.`,

    careRO: `**Lactat:** Pentru sepsis, trimiteți rapid pe gheață.`,
  },
  {
    id: "tube_06", 
    order: 6,
    color: "is-danger", // Rojo (Serum - No Gel)
    nameES: "Rojo (Suero Clásico)",
    nameRO: "Roșu (Ser Clasic)",
    testType: "Serología / Fármacos",
    additive: "Activador Coagulación (Silícea)",

    descES: `**Pruebas:** Hormonas, Serología, Niveles de Fármacos (Digoxina, Litio).
    **Diferencia:** No tiene gel separador. Se usa para fármacos que se pegan al gel del tubo amarillo.`,

    careES: `**Inversión:** 5 veces. Dejar coagular 60 min antes de centrifugar.`,

    descRO: `**Teste:** Serologie, Nivel medicamente.
    **Diferența:** Fără gel separator.`,

    careRO: `**Inversare:** 5 ori. Timp coagulare: 60 min.`,
  },
  {
    id: "tube_07",
    order: 7,
    color: "pink", // Rosa
    nameES: "Rosa (B. Sangre)",
    nameRO: "Roz (Bancă Sânge)",
    testType: "Pruebas Cruzadas",
    additive: "EDTA K2",

    descES: `**Pruebas:** EXCLUSIVO para Banco de Sangre (Grupo y Pruebas Cruzadas).
    **Requisito:** Etiqueta manuscrita con nombre enfermera y fecha. Si va con pegatina de paciente sola, se RECHAZA.`,

    careES: `**⚠️ CRÍTICO:** Un error aquí mata al paciente (reacción transfusional hemolítica).`,

    descRO: `**Teste:** EXCLUSIV Bancă de Sânge.
    **Cerință:** Etichetă scrisă de mână.`,

    careRO: `**⚠️ CRITIC:** Risc de reacție transfuzională.`,
  }
];

// --------------------------------------------------------------------------
// 2. PERFILES DE ANALÍTICA (SETS RÁPIDOS)
// --------------------------------------------------------------------------
/*
   Agrupaciones lógicas para facilitar la selección de tubos según patología.
*/

export const perfilesAnalitica = [
  {
    id: "prof_urg",
    titleES: "Perfil Urgencias General",
    titleRO: "Profil Urgențe General",
    icon: "ambulance",
    tubes: ["tube_01", "tube_03", "tube_04"], // Azul, Verde, Lila
    descES: "El set básico para cualquier paciente que entra a boxes.",
    descRO: "Setul de bază pentru orice pacient internat la urgențe.",
    detailsES: [
      "Hemograma (Infección/Anemia)",
      "Bioquímica (Riñón/Iones)",
      "Coagulación (Pre-quirúrgico)",
    ],
    detailsRO: ["Hemoleucogramă", "Biochimie", "Coagulare"],
  },
  {
    id: "prof_cp",
    titleES: "Perfil Dolor Torácico (SCASEST)",
    titleRO: "Profil Durere Toracică",
    icon: "heart-pulse",
    tubes: ["tube_01", "tube_03", "tube_04"],
    specialNoteES: "⚠️ TROPONINAS SERIADAS",
    specialNoteRO: "⚠️ TROPONINE SERIATE",
    descES: "Prioridad: Detectar elevación de enzimas cardiacas.",
    descRO: "Prioritate: Detectarea enzimelor cardiace.",
    clinicalTipES:
      "En dolor torácico, usar tubo VERDE (Heparina) para tener Troponinas en 40 min. El amarillo tarda más.",
    clinicalTipRO: "Folosiți tubul VERDE pentru rezultate rapide la troponine.",
  },
  {
    id: "prof_sepsis",
    titleES: "Código Sepsis",
    titleRO: "Cod Sepsis",
    icon: "biohazard",
    tubes: ["tube_00", "tube_01", "tube_03", "tube_04", "tube_05"], // + Hemocultivos + Lactato (Gris)
    descES: "Activación inmediata ante hipotensión + fiebre.",
    descRO: "Activare imediată la hipotensiune + febră.",
    clinicalTipES:
      "Orden vital: 1º Hemocultivos -> 2º Analítica. No olvidar el tubo GRIS para Lactato (marcador de gravedad).",
    clinicalTipRO:
      "Vital: 1º Hemoculturi -> 2º Analize. Nu uitați tubul GRI pentru Lactat.",
  },
  {
    id: "prof_preop",
    titleES: "Preoperatorio / Pruebas Cruzadas",
    titleRO: "Preoperator / Probe Încrucișate",
    icon: "clipboard-check",
    tubes: ["tube_01", "tube_02", "tube_04", "tube_04_pink"], // Lila x2 (uno para Banco)
    descES: "Preparación para cirugía. Requiere Grupo Sanguíneo reciente.",
    descRO: "Pregătire chirurgie. Necesită Grup Sanguin recent.",
    clinicalTipES:
      "Para Banco de Sangre se suele pedir un tubo lila extra (o rosa, según hospital) firmado a mano. Si no está firmado, el banco rechaza la muestra.",
    clinicalTipRO:
      "Pentru Banca de Sânge este necesar un tub mov extra, semnat de mână.",
  },
];

// --------------------------------------------------------------------------
// 3. CONSEJOS DE ENFERMERÍA (NANDA/NIC)
// --------------------------------------------------------------------------

export const consejosExtraccion = {
  nanda: {
    code: "00206",
    labelES: "Riesgo de sangrado (pacientes anticoagulados)",
    labelRO: "Risc de sângerare",
  },
  nic: {
    code: "4230",
    labelES: "Flebotomía: extracción de sangre",
    labelRO: "Flebotomie: recoltare sânge",
  },
  tips: [
    {
      titleES: "🚫 Prohibido sacar de vía con suero",
      titleRO: "🚫 Interzis din linie cu perfuzie",
      textES:
        "Nunca sacar sangre de un brazo donde está pasando suero. Los resultados saldrán diluidos (Glucosa 500 si es glucosado, Na+ alto si es salino). Si no hay opción, parar suero 10 min y desechar 10cc.",
      textRO:
        "Nu recoltați din brațul cu perfuzie. Rezultatele vor fi diluate.",
    },
    {
      titleES: "💪 El Torniquete",
      titleRO: "💪 Garoul",
      textES:
        "Tiempo máximo: 1 minuto. Si se deja más tiempo, produce hemólisis (potasio alto falso) y hemoconcentración. Soltar en cuanto la sangre fluya.",
      textRO: "Timp maxim: 1 minut. Riscul de hemoliză.",
    },
  ],
};

// --------------------------------------------------------------------------
// 4. DATOS DEL VOLANTE DE PETICIÓN (Simulación Guadalajara)
// --------------------------------------------------------------------------

export const LAB_REQUEST_FORM_DATA = {
  layout: "zones",
  zones: [
    {
      id: "bioquimica",
      title: "1. PERFILES / BIOQUÍMICA",
      titleRO: "1. PANOURI / BIOCHIMIE",
      color: "bg-emerald-50/50", // Fondo verde muy claro
      headerColor: "text-emerald-900",
      groups: [
        {
          title: "METABOLISMO GLÚCIDO Y LIPÍDICO",
          titleRO: "METABOLISM GLUCIDIC ȘI LIPIDIC",
          color: "text-blue-700",
          items: [
            { id: "glucosa", label: "Glucosa", labelRO: "Glucoză" },
            { id: "hb_glicosilada", label: "HbA1c (Hemoglobina Glicosilada)", labelRO: "HbA1c (Hemoglobină Glicozilată)" },
            { id: "curva_glucosa", label: "Curva Glucosa (SOG)", labelRO: "Test Toleranță Glucoză (TTGO)" },
            { id: "insulina", label: "Insulina Basal", labelRO: "Insulină Bazală" },
            { id: "peptido_c", label: "Péptido C", labelRO: "Peptid C" },
            { id: "colesterol", label: "Colesterol Total", labelRO: "Colesterol Total" },
            { id: "hdl", label: "HDL Colesterol", labelRO: "HDL Colesterol" },
            { id: "ldl", label: "LDL Colesterol", labelRO: "LDL Colesterol" },
            { id: "trigliceridos", label: "Triglicéridos", labelRO: "Trigliceride" },
            { id: "lipoproteina_a", label: "Lipoproteína (a)", labelRO: "Lipoproteina (a)" },
            { id: "apolipoproteina_b", label: "Apolipoproteína B", labelRO: "Apolipoproteina B" }
          ]
        },
        {
          title: "FUNCIÓN RENAL E IONES",
          titleRO: "FUNCȚIE RENALĂ ȘI IONOGRAMĂ",
          color: "text-blue-600",
          items: [
            { id: "creatinina", label: "Creatinina + Filtrado Glomerular", labelRO: "Creatinină + RFG" },
            { id: "urea", label: "Urea", labelRO: "Uree" },
            { id: "acido_urico", label: "Ácido Úrico", labelRO: "Acid Uric" },
            { id: "sodio", label: "Sodio (Na)", labelRO: "Sodiu (Na)" },
            { id: "potasio", label: "Potasio (K)", labelRO: "Potasiu (K)" },
            { id: "cloro", label: "Cloro (Cl)", labelRO: "Clor (Cl)" },
            { id: "calcio", label: "Calcio Total", labelRO: "Calciu Total" },
            { id: "fosforo", label: "Fósforo", labelRO: "Fosfor" },
            { id: "magnesio", label: "Magnesio", labelRO: "Magneziu" },
            { id: "co2_total", label: "CO2 Total (Bicarbonato)", labelRO: "CO2 Total (Bicarbonat)" }
          ]
        },
        {
          title: "FUNCIÓN HEPÁTICA Y PANCREÁTICA",
          titleRO: "FUNCȚIE HEPATICĂ ȘI PANCREATICĂ",
          color: "text-amber-700",
          items: [
            { id: "got", label: "GOT (AST)", labelRO: "GOT (AST)" },
            { id: "gpt", label: "GPT (ALT)", labelRO: "GPT (ALT)" },
            { id: "ggt", label: "GGT", labelRO: "GGT" },
            { id: "fa", label: "Fosfatasa Alcalina", labelRO: "Fosfatază Alcalină" },
            { id: "bilirrubina_total", label: "Bilirrubina Total", labelRO: "Bilirubină Totală" },
            { id: "bilirrubina_fracc", label: "Bilirrubina Fraccionada", labelRO: "Bilirubină Fracționată" },
            { id: "ldh", label: "LDH (Lactato Deshidrogenasa)", labelRO: "LDH" },
            { id: "amilasa", label: "Amilasa", labelRO: "Amilază" },
            { id: "lipasa", label: "Lipasa", labelRO: "Lipază" },
            { id: "prealbumina", label: "Prealbúmina", labelRO: "Prealbumină" },
            { id: "amonio", label: "Amonio (Transporte en Hielo)", labelRO: "Amoniac (Transport pe gheață)" }
          ]
        },
        {
          titleRO: "GAZOMETRIE ȘI ECHILIBRU ACIDO-BAZIC",
          color: "text-cyan-700",
          items: [
            { id: "gasometria_venosa", label: "Gasometría Venosa Completa", labelRO: "Gazometrie Venoasă Completă" },
            { id: "lactato", label: "Lactato (Tubo Gris/Hielo)", labelRO: "Lactat (Tub Gri/Gheață)" },
            { id: "carboxihemoglobina", label: "Carboxihemoglobina (Intox. CO)", labelRO: "Carboxihemoglobină (Intox. CO)" },
            { id: "methemoglobina", label: "Methemoglobina", labelRO: "Methemoglobină" }
          ]
        },
        {
          titleRO: "PROTEINE SPECIFICE ȘI VITAMINE",
          color: "text-indigo-700",
          items: [
            { id: "proteinas_totales", label: "Proteínas Totales", labelRO: "Proteine Totale" },
            { id: "albumina", label: "Albúmina", labelRO: "Albumină" },
            { id: "proteinograma", label: "Proteinograma (Electroforesis)", labelRO: "Proteinogramă (Electroforeză)" },
            { id: "inmunoglobulinas", label: "Inmunoglobulinas (IgG, IgA, IgM)", labelRO: "Imunoglobuline (IgG, IgA, IgM)" },
            { id: "pcr", label: "Proteína C Reactiva (PCR)", labelRO: "Proteina C Reactivă (PCR)" },
            { id: "pct", label: "Procalcitonina", labelRO: "Procalcitonină" },
            { id: "ferritina", label: "Ferritina", labelRO: "Feritină" },
            { id: "transferrina", label: "Transferrina + Sat.", labelRO: "Transferină + Sat." },
            { id: "hierro", label: "Hierro (Sideremia)", labelRO: "Sideremie (Fier)" },
            { id: "vit_b12", label: "Vitamina B12", labelRO: "Vitamina B12" },
            { id: "acido_folico", label: "Ácido Fólico", labelRO: "Acid Folic" },
            { id: "vit_d", label: "Vitamina D (25-OH)", labelRO: "Vitamina D (25-OH)" },
            { id: "vit_b6", label: "Vitamina B6", labelRO: "Vitamina B6" },
            { id: "vit_b1", label: "Vitamina B1 (Tiamina)", labelRO: "Vitamina B1 (Tiamină)" }
          ]
        },
        {
         title: "FÁRMACOS - NIVELES PLASMÁTICOS (TDM)",
         titleRO: "MEDICAMENTE - NIVELURI PLASMATICE (TDM)",
         color: "text-rose-600",
         items: [
           { id: "litio", label: "Litio (Litemia)", labelRO: "Litiu (Litemie)" },
           { id: "digoxina", label: "Digoxina", labelRO: "Digoxină" },
           { id: "acido_valproico", label: "Ácido Valproico (Depakine)", labelRO: "Acid Valproic (Depakine)" },
           { id: "carbamazepina", label: "Carbamazepina (Tegretol)", labelRO: "Carbamazepină (Tegretol)" },
           { id: "fenitoina", label: "Fenitoína (Epanutin)", labelRO: "Fenitoină (Epanutin)" },
           { id: "fenobarbital", label: "Fenobarbital", labelRO: "Fenobarbital" },
           { id: "vancomicina", label: "Vancomicina (Valle)", labelRO: "Vancomicină (Vale)" },
           { id: "gentamicina", label: "Gentamicina (Valle)", labelRO: "Gentamicină (Vale)" },
           { id: "tacrolimus", label: "Tacrolimus", labelRO: "Tacrolimus" },
           { id: "ciclosporina", label: "Ciclosporina", labelRO: "Ciclosporină" },
           { id: "metotrexato", label: "Metotrexato", labelRO: "Metotrexat" }
         ]
        },
        {
          title: "HORMONAS - TIROIDES",
          titleRO: "HORMONI - TIROIDĂ",
          color: "text-purple-600",
          items: [
            { id: "tsh", label: "TSH", labelRO: "TSH" },
            { id: "t4_libre", label: "T4 Libre", labelRO: "T4 Liber (FT4)" },
            { id: "t3_libre", label: "T3 Libre", labelRO: "T3 Liber (FT3)" },
            { id: "anti_tpo", label: "Ac. Anti-TPO", labelRO: "Ac. Anti-TPO" },
            { id: "anti_tg", label: "Ac. Anti-Tiroglobulina", labelRO: "Ac. Anti-Tiroglobulină" },
            { id: "tg", label: "Tiroglobulina", labelRO: "Tiroglobulină" },
            { id: "tsi", label: "TSI (Estimulantes Tiroides)", labelRO: "TSI (Imunoglobuline tirostimulatoare)" }
          ]
        },
        {
          titleRO: "HORMONI - AXA SEXUALĂ ȘI FERTILITATE",
          color: "text-purple-700",
          items: [
            { id: "fsh", label: "FSH", labelRO: "FSH" },
            { id: "lh", label: "LH", labelRO: "LH" },
            { id: "estradiol", label: "Estradiol (E2)", labelRO: "Estradiol (E2)" },
            { id: "progesterona", label: "Progesterona", labelRO: "Progesteron" },
            { id: "prolactina", label: "Prolactina", labelRO: "Prolactină" },
            { id: "testosterona_total", label: "Testosterona Total", labelRO: "Testosteron Total" },
            { id: "testosterona_libre", label: "Testosterona Libre", labelRO: "Testosteron Liber" },
            { id: "shbg", label: "SHBG", labelRO: "SHBG" },
            { id: "beta_hcg", label: "Beta-HCG (Suero)", labelRO: "Beta-HCG (Ser)" },
            { id: "dhea_s", label: "DHEA-S", labelRO: "DHEA-S" }
          ]
        },
        {
          titleRO: "ALȚI HORMONI",
          color: "text-purple-800",
          items: [
            { id: "cortisol", label: "Cortisol Basal", labelRO: "Cortizol Bazal" },
            { id: "acth", label: "ACTH", labelRO: "ACTH" },
            { id: "gh_basal", label: "Hormona Crecimiento (GH)", labelRO: "Hormon de creștere (GH)" },
            { id: "igf1", label: "IGF-1 (Somatomedina C)", labelRO: "IGF-1 (Somatomedina C)" },
            { id: "pth", label: "PTH (Parathormona)", labelRO: "PTH (Parathormon)" },
            { id: "aldosterona", label: "Aldosterona", labelRO: "Aldosteron" },
            { id: "renina", label: "Renina", labelRO: "Renină" },
            { id: "gastrina", label: "Gastrina", labelRO: "Gastrină" }
          ]
        },
        {
          titleRO: "MARKERI TUMORALI",
          color: "text-rose-800",
          items: [
            { id: "cea", label: "CEA (Carcinoembrionario)", labelRO: "CEA (Antigen Carcinoembrionar)" },
            { id: "psa_total", label: "PSA Total", labelRO: "PSA Total" },
            { id: "psa_libre", label: "PSA Libre (Indice)", labelRO: "PSA Liber (Index)" },
            { id: "ca_125", label: "CA-125 (Ovario)", labelRO: "CA-125 (Ovar)" },
            { id: "ca_15_3", label: "CA-15.3 (Mama)", labelRO: "CA-15.3 (Sân)" },
            { id: "ca_19_9", label: "CA-19.9 (Digestivo)", labelRO: "CA-19.9 (Digestiv)" },
            { id: "afp", label: "Alfa-Fetoproteína", labelRO: "Alfa-Fetoproteină" },
            { id: "beta_2_micro", label: "Beta-2 Microglobulina", labelRO: "Beta-2 Microglobulină" },
            { id: "calcitonina", label: "Calcitonina", labelRO: "Calcitonină" },
            { id: "cromogranina_a", label: "Cromogranina A", labelRO: "Cromogranina A" }
          ]
        },
        {
          titleRO: "IMUNOLOGIE ȘI AUTOIMUNITATE",
          color: "text-teal-700",
          items: [
            { id: "ana", label: "ANA (Antinucleares)", labelRO: "ANA (Anticorpi Antinucleari)" },
            { id: "ena", label: "ENA (Perfil)", labelRO: "ENA (Profil)" },
            { id: "dna", label: "Anti-DNA", labelRO: "Anti-ADN" },
            { id: "fr", label: "Factor Reumatoide", labelRO: "Factor Reumatoid" },
            { id: "anti_ccp", label: "Anti-CCP", labelRO: "Anti-CCP" },
            { id: "anca", label: "ANCA", labelRO: "ANCA" },
            { id: "anti_transglutaminasa", label: "A. Transglutaminasa IgA (Celiaquía)", labelRO: "A. Transglutaminază IgA" },
            { id: "ige_total", label: "IgE Total (Alergia)", labelRO: "IgE Total (Alergie)" },
            { id: "phadiatop", label: "Phadiatop (Cribado Alergia)", labelRO: "Phadiatop (Screening Alergie)" },
            { id: "complemento_c3_c4", label: "Complemento C3/C4", labelRO: "Complement C3/C4" }
          ]
        },
        {
          titleRO: "URINĂ (SUMAR)",
          color: "text-amber-600",
          items: [
            { id: "orina_elemental", label: "Sistemático de Orina", labelRO: "Sumar de Urină" },
            { id: "orina_sedimento", label: "Sedimento Urinario", labelRO: "Sediment Urinar" },
            { id: "microalbuminuria", label: "Microalbúmina / Creatinina (Muestra aislada)", labelRO: "Microalbumină / Creatinină (Probă izolată)" },
            { id: "proteinas_orina", label: "Proteínas en Orina (Muestra aislada)", labelRO: "Proteine în Urină (Probă izolată)" },
            { id: "test_gestacion", label: "Test Gestación (Orina)", labelRO: "Test Sarcină (Urină)" },
            { id: "drogas_abuso", label: "Drogas de Abuso (Cribado)", labelRO: "Droguri de Abuz (Screening)" }
          ]
        },
        {
          titleRO: "URINĂ PE 24 ORE",
          color: "text-amber-700",
          items: [
            { id: "aclaramiento_creatinina", label: "Aclaramiento Creatinina (ClCr)", labelRO: "Clearance Creatinină (ClCr)" },
            { id: "proteinuria_24h", label: "Proteinuria 24h", labelRO: "Proteinurie 24h" },
            { id: "microalbuminuria_24h", label: "Microalbuminuria 24h", labelRO: "Microalbuminurie 24h" },
            { id: "iones_orina_24h", label: "Iones en Orina 24h (Na, K)", labelRO: "Ioni în Urină 24h (Na, K)" },
            { id: "calcio_orina_24h", label: "Calciuria 24h", labelRO: "Calciurie 24h" },
            { id: "cortisol_orina_24h", label: "Cortisol Libre Urinario", labelRO: "Cortizol Liber Urinar" },
            { id: "catecolaminas_orina", label: "Catecolaminas/Metanefrinas", labelRO: "Catecolamine/Metanefrine" }
          ]
        }
      ]
    },
    {
      id: "hematologia",
      title: "2. HEMATOLOGÍA",
      titleRO: "2. HEMATOLOGIE",
      color: "bg-white", // Fondo blanco
      headerColor: "text-slate-900",
      groups: [
        {
          title: "HEMATIMETRÍA",
          titleRO: "HEMATIMETRIE",
          color: "text-slate-700",
          items: [
            { id: "hemograma", label: "Hemograma Completo", labelRO: "Hemoleucogramă Completă" },
            { id: "vsg", label: "Velocidad Sedimentación (VSG)", labelRO: "VSH (Viteza de Sedimentare)" },
            { id: "reticulocitos", label: "Reticulocitos", labelRO: "Reticulocite" },
            { id: "frotis", label: "Frotis de Sangre Periférica", labelRO: "Frotiu Sânge Periferic" },
            { id: "test_sickling", label: "Test de Sickling", labelRO: "Test Sickling" },
            { id: "g6pdh", label: "Déficit G6PDH (Favismo)", labelRO: "Deficit G6PDH (Favism)" }
          ]
        },
        {
          title: "COAGULACIÓN",
          titleRO: "COAGULARE",
          color: "text-slate-700",
          items: [
            { id: "coagulacion_basica", label: "Coagulación Básica (TP/TTPA/Fib)", labelRO: "Coagulare De Bază (TP/aPTT/Fib)" },
            { id: "inr", label: "INR (Control Anticoagulación)", labelRO: "INR (Control Anticoagulare)" },
            { id: "dimero_d", label: "Dímero-D", labelRO: "D-Dimeri" },
            { id: "anticoagulante_lupico", label: "Anticoagulante Lúpico", labelRO: "Anticoagulant Lupic" },
            { id: "proteina_c", label: "Proteína C Funcional", labelRO: "Proteina C Funcională" },
            { id: "proteina_s", label: "Proteína S Libre", labelRO: "Proteina S Liberă" },
            { id: "antitrombina", label: "Antitrombina III", labelRO: "Antitrombina III" },
            { id: "homocisteina", label: "Homocisteína", labelRO: "Homocisteină" },
            { id: "factor_v_leiden", label: "Factor V Leiden (Genético)", labelRO: "Factor V Leiden (Genetic)" }
          ]
        },
        {
          title: "BANCO DE SANGRE",
          titleRO: "BANCĂ DE SÂNGE",
          color: "text-rose-700",
          items: [
            { id: "grupo_rh", label: "Grupo Sanguíneo y Rh", labelRO: "Grup Sanguin și Rh" },
            { id: "coombs_directo", label: "Coombs Directo", labelRO: "Coombs Direct" },
            { id: "escrutinio_ac", label: "Escrutinio Anticuerpos Irregulares", labelRO: "Screening Anticorpi Iregulari" },
            { id: "crioaglutininas", label: "Crioaglutininas", labelRO: "Crioaglutinine" }
          ]
        }
      ]
    },
    {
      id: "microbiologia",
      title: "3. MICROBIOLOGÍA",
      titleRO: "3. MICROBIOLOGIE",
      color: "bg-emerald-50/50", // Fondo verde muy claro
      headerColor: "text-emerald-900",
      groups: [
        {
          title: "SEROLOGÍA INFECCIOSA",
          titleRO: "SEROLOGIE INFECȚIOASĂ",
          color: "text-emerald-700",
          items: [
            { id: "vih", label: "VIH (Ag/Ac Combo)", labelRO: "HIV (Ag/Ac Combo)" },
            { id: "hbsag", label: "Hepatitis B (HBsAg)", labelRO: "Hepatita B (HBsAg)" },
            { id: "anti_hbs", label: "Hepatitis B (Anti-HBs)", labelRO: "Hepatita B (Anti-HBs)" },
            { id: "anti_hbc", label: "Hepatitis B (Anti-HBc)", labelRO: "Hepatita B (Anti-HBc)" },
            { id: "vhc", label: "Hepatitis C (Ac)", labelRO: "Hepatita C (Ac)" },
            { id: "sifilis", label: "Sífilis (RPR/TPHA)", labelRO: "Sifilis (RPR/TPHA)" },
            { id: "cmv_igg_igm", label: "CMV IgG/IgM", labelRO: "CMV IgG/IgM" },
            { id: "toxo_igg_igm", label: "Toxoplasma IgG/IgM", labelRO: "Toxoplasma IgG/IgM" },
            { id: "rubeola_igg_igm", label: "Rubéola IgG/IgM", labelRO: "Rubeolă IgG/IgM" },
            { id: "ebv_perfil", label: "Epstein-Barr (Perfil)", labelRO: "Epstein-Barr (Profil)" },
            { id: "brucella", label: "Brucella (Rosa de Bengala)", labelRO: "Brucella (Roz Bengal)" },
            { id: "lyme", label: "Borrelia (Lyme)", labelRO: "Borrelia (Lyme)" }
          ]
        },
        {
          title: "CULTIVOS",
          titleRO: "CULTURI",
          color: "text-emerald-800",
          items: [
            { id: "urocultivo", label: "Urocultivo", labelRO: "Urocultură" },
            { id: "coprocultivo", label: "Coprocultivo", labelRO: "Coprocultură" },
            { id: "parasitos_heces", label: "Parásitos en Heces (x3)", labelRO: "Paraziți în Materii Fecale (x3)" },
            { id: "toxina_cdiff", label: "Toxina Clostridium difficile", labelRO: "Toxina Clostridium difficile" },
            { id: "faringeo", label: "Exudado Faríngeo", labelRO: "Exudat Faringian" },
            { id: "nasal", label: "Exudado Nasal (MRSA)", labelRO: "Exudat Nazal (MRSA)" },
            { id: "esputo", label: "Esputo", labelRO: "Spută" },
            { id: "herida", label: "Exudado Herida/Úlcera", labelRO: "Exudat Plagă/Ulcer" },
            { id: "hemocultivos", label: "Hemocultivos (x2)", labelRO: "Hemoculturi (x2)" },
            { id: "liquido_articular", label: "Líquido Articular", labelRO: "Lichid Articular" }
          ]
        },
        {
          title: "HECES / DIGESTIVO",
          titleRO: "MATERII FECALE / DIGESTIV",
          color: "text-emerald-900",
          items: [
            { id: "sangre_oculta_heces", label: "Sangre Oculta en Heces (Inmunológico)", labelRO: "Hemoragii Oculte (Imunologic)" },
            { id: "calprotectina", label: "Calprotectina Fecal", labelRO: "Calprotectină Fecală" },
            { id: "helicobacter_ag", label: "Helicobacter Pylori (Ag en Heces)", labelRO: "Helicobacter Pylori (Ag Fecal)" }
          ]
        }
      ]
    }
  ]
};
