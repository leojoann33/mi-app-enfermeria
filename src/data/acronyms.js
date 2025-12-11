// src/data/acronyms.js
// Base de datos: SIGLAS Y ABREVIATURAS MÉDICAS
// Nivel: Enfermería Experta - Bilingüe ES/RO
// Colores exclusivos: Gama Azul-Teal
// Fuente ampliada: Guía Terapéutica Sacyl

export const ACRONYMS_DB = [
  // --- GRUPO 1: GENERALES Y CRÍTICAS (Originales) ---
  {
    id: 's1',
    emoji: '🫁',
    acronym: 'EPOC',
    fullES: 'Enfermedad Pulmonar Obstructiva Crónica',
    defES: 'Enfermedad inflamatoria pulmonar crónica que obstruye el flujo de aire. Síntomas: disnea, tos y expectoración.',
    fullRO: 'Boală Pulmonară Obstructivă Cronică',
    defRO: 'Boală inflamatorie pulmonară cronică ce obstrucționează fluxul de aer. Simptome: dispnee, tuse și expectorație.'
  },
  {
    id: 's2',
    emoji: '❤️',
    acronym: 'IAM',
    fullES: 'Infarto Agudo de Miocardio',
    defES: 'Necrosis del músculo cardiaco por obstrucción de una arteria coronaria (falta de riego).',
    fullRO: 'Infarct Miocardic Acut',
    defRO: 'Necroza mușchiului cardiac prin obstrucția unei artere coronare (lipsă de irigare).'
  },
  {
    id: 's3',
    emoji: '🩸',
    acronym: 'HTA',
    fullES: 'Hipertensión Arterial',
    defES: 'Elevación sostenida de la presión arterial sistémica (≥ 140/90 mmHg).',
    fullRO: 'Hipertensiune Arterială',
    defRO: 'Creștere susținută a tensiunii arteriale sistemice (≥ 140/90 mmHg).'
  },
  {
    id: 's4',
    emoji: '🧠',
    acronym: 'ACV / ICTUS',
    fullES: 'Accidente Cerebrovascular',
    defES: 'Interrupción del flujo sanguíneo al cerebro (isquémico) o rotura de un vaso (hemorrágico).',
    fullRO: 'Accident Vascular Cerebral',
    defRO: 'Întreruperea fluxului sanguin către creier (ischemic) sau ruptura unui vas (hemoragic).'
  },
  {
    id: 's5',
    emoji: '⚡',
    acronym: 'RCP',
    fullES: 'Reanimación Cardiopulmonar',
    defES: 'Maniobras para asegurar la oxigenación de órganos vitales cuando la circulación se detiene.',
    fullRO: 'Resuscitare Cardio-Pulmonară',
    defRO: 'Manevre pentru asigurarea oxigenării organelor vitale când circulația se oprește.'
  },
  {
    id: 's6',
    emoji: '🚽',
    acronym: 'ITU',
    fullES: 'Infección del Tracto Urinario',
    defES: 'Infección bacteriana de la uretra, vejiga (cistitis), o riñón (pielonefritis).',
    fullRO: 'Infecție de Tract Urinar',
    defRO: 'Infecție bacteriană a uretrei, vezicii (cistită) sau rinichiului (pielonefrită).'
  },
  {
    id: 's7',
    emoji: '📉',
    acronym: 'AINE',
    fullES: 'Antiinflamatorio No Esteroideo',
    defES: 'Fármacos que reducen inflamación, dolor y fiebre (Ibuprofeno, Dexketoprofeno). No corticoides.',
    fullRO: 'Antiinflamator Nesteroidian',
    defRO: 'Medicamente care reduc inflamația, durerea și febra (Ibuprofen, Dexketoprofen). Nu corticoizi.'
  },
  {
    id: 's8',
    emoji: '🍬',
    acronym: 'DM',
    fullES: 'Diabetes Mellitus',
    defES: 'Trastorno metabólico caracterizado por hiperglucemia crónica por defecto en la insulina.',
    fullRO: 'Diabet Zaharat',
    defRO: 'Tulburare metabolică caracterizată prin hiperglicemie cronică din defect de insulină.'
  },
  {
    id: 's9',
    emoji: '🦶',
    acronym: 'TVP',
    fullES: 'Trombosis Venosa Profunda',
    defES: 'Coágulo de sangre en una vena profunda (piernas). Riesgo de embolia pulmonar.',
    fullRO: 'Tromboză Venoasă Profundă',
    defRO: 'Cheag de sânge într-o venă profundă (picioare). Risc de embolie pulmonară.'
  },
  {
    id: 's10',
    emoji: '🛏️',
    acronym: 'UPP',
    fullES: 'Úlcera por Presión',
    defES: 'Lesión en piel/tejidos por presión prolongada sobre un plano duro (escaras).',
    fullRO: 'Ulcer de Presiune (Escară)',
    defRO: 'Leziune a pielii/țesuturilor prin presiune prelungită pe un plan dur.'
  },
  {
    id: 's11',
    emoji: '🚨',
    acronym: 'UCI / UVI',
    fullES: 'Unidad de Cuidados Intensivos',
    defES: 'Área hospitalaria para pacientes críticos que requieren soporte vital y monitorización continua.',
    fullRO: 'Unitate de Terapie Intensivă (ATI)',
    defRO: 'Zonă spitalicească pentru pacienți critici care necesită suport vital și monitorizare continuă.'
  },
  {
    id: 's12',
    emoji: '📈',
    acronym: 'ECG / EKG',
    fullES: 'Electrocardiograma',
    defES: 'Registro gráfico de la actividad eléctrica del corazón.',
    fullRO: 'Electrocardiogramă',
    defRO: 'Înregistrare grafică a activității electrice a inimii.'
  },
  {
    id: 's13',
    emoji: '🦠',
    acronym: 'PCR',
    fullES: 'Proteína C Reactiva',
    defES: 'Marcador de inflamación o infección en analítica. (No confundir con Parada Cardio-Respiratoria).',
    fullRO: 'Proteina C Reactivă',
    defRO: 'Marker de inflamație sau infecție în analize. (A nu se confunda cu Stop Cardio-Respirator).'
  },
  {
    id: 's14',
    emoji: '⚖️',
    acronym: 'IMC',
    fullES: 'Índice de Masa Corporal',
    defES: 'Medida que relaciona peso y altura (kg/m²).',
    fullRO: 'Indice de Masă Corporală',
    defRO: 'Măsură care raportează greutatea la înălțime (kg/m²).'
  },
  {
    id: 's15',
    emoji: '💉',
    acronym: 'IV / IM / SC',
    fullES: 'Intravenosa / Intramuscular / Subcutánea',
    defES: 'Vías de inyección: en vena, en músculo o bajo la piel.',
    fullRO: 'Intravenos / Intramuscular / Subcutanat',
    defRO: 'Căi de injecție: în venă, în mușchi sau sub piele.'
  },

  // --- GRUPO 2: NUEVAS ADICIONES (Sacyl / Pediatría / General) ---
  {
    id: 's16',
    emoji: '💔',
    acronym: 'ICC',
    fullES: 'Insuficiencia Cardiaca Congestiva',
    defES: 'Incapacidad del corazón para bombear sangre eficazmente, provocando acumulación de líquidos (edemas) y fatiga.',
    fullRO: 'Insuficiență Cardiacă Congestivă',
    defRO: 'Incapacitatea inimii de a pompa sânge eficient, provocând acumulare de lichide (edeme) și oboseală.'
  },
  {
    id: 's17',
    emoji: '🧠',
    acronym: 'SNC',
    fullES: 'Sistema Nervioso Central',
    defES: 'Parte del sistema nervioso formada por el encéfalo y la médula espinal.',
    fullRO: 'Sistem Nervos Central',
    defRO: 'Parte a sistemului nervos formată din encefal și măduva spinării.'
  },
  {
    id: 's18',
    emoji: '🧒',
    acronym: 'TDAH',
    fullES: 'Trastorno por Déficit de Atención e Hiperactividad',
    defES: 'Trastorno neurobiológico crónico caracterizado por dificultad para mantener la atención, hiperactividad e impulsividad.',
    fullRO: 'Tulburare de Deficit de Atenție și Hiperactivitate (ADHD)',
    defRO: 'Tulburare neurobiologică cronică caracterizată prin dificultate de atenție, hiperactivitate și impulsivitate.'
  },
  {
    id: 's19',
    emoji: '💊',
    acronym: 'ISRS',
    fullES: 'Inhibidor Selectivo de Recaptación de Serotonina',
    defES: 'Grupo de antidepresivos y ansiolíticos más usados (ej. Fluoxetina, Sertralina).',
    fullRO: 'Inhibitori Selectivi ai Recaptării Serotoninei',
    defRO: 'Grup de antidepresive și anxiolitice frecvent utilizate (ex. Fluoxetină, Sertralină).'
  },
  {
    id: 's20',
    emoji: '🏛️',
    acronym: 'AEMPS',
    fullES: 'Agencia Española de Medicamentos',
    defES: 'Organismo oficial que regula y autoriza los fármacos en España. Emite las alertas de seguridad.',
    fullRO: 'Agenția Spaniolă a Medicamentului',
    defRO: 'Organism oficial care reglementează și autorizează medicamentele în Spania. Emite alertele de siguranță.'
  },
  {
    id: 's21',
    emoji: '💧',
    acronym: 'SRO',
    fullES: 'Solución de Rehidratación Oral',
    defES: 'Preparado de agua, sales y azúcar ("Sueroral") fundamental para tratar la deshidratación por diarrea (gastroenteritis).',
    fullRO: 'Soluție de Rehidratare Orală',
    defRO: 'Preparat din apă, săruri și zahăr fundamental pentru tratarea deshidratării prin diaree.'
  },
  {
    id: 's22',
    emoji: '🦠',
    acronym: 'VSR',
    fullES: 'Virus Sincitial Respiratorio',
    defES: 'Virus muy contagioso causante de bronquiolitis y neumonías, especialmente grave en bebés y ancianos.',
    fullRO: 'Virus Respirator Sincitial',
    defRO: 'Virus foarte contagios cauzator de bronșiolite și pneumonii, grav în special la bebeluși și vârstnici.'
  },
  {
    id: 's23',
    emoji: '💓',
    acronym: 'lpm / bpm',
    fullES: 'Latidos por minuto',
    defES: 'Unidad de medida de la frecuencia cardiaca.',
    fullRO: 'Bătăi pe minut',
    defRO: 'Unitate de măsură a frecvenței cardiace.'
  },
  {
    id: 's24',
    emoji: '💨',
    acronym: 'rpm',
    fullES: 'Respiraciones por minuto',
    defES: 'Unidad de medida de la frecuencia respiratoria (Normal: 12-20 en adultos).',
    fullRO: 'Respirații pe minut',
    defRO: 'Unitate de măsură a frecvenței respiratorii.'
  },
  {
    id: 's25',
    emoji: '🌬️',
    acronym: 'FEV1 / VEMS',
    fullES: 'Volumen Espiratorio Forzado (1er seg)',
    defES: 'Parámetro de espirometría clave para diagnosticar EPOC o Asma. Mide cuánto aire echas en 1 segundo.',
    fullRO: 'Volum Expirator Forțat (1a secundă)',
    defRO: 'Parametru cheie în spirometrie pentru diagnosticarea BPOC sau Astmului.'
  },
  {
    id: 's26',
    emoji: '🧲',
    acronym: 'RMN / RM',
    fullES: 'Resonancia Magnética Nuclear',
    defES: 'Prueba de imagen que usa imanes y ondas de radio (sin radiación X) para ver tejidos blandos (cerebro, músculos).',
    fullRO: 'Rezonanță Magnetică Nucleară',
    defRO: 'Test de imagistică ce folosește magneți și unde radio (fără radiații X) pentru a vedea țesuturi moi.'
  },
  {
    id: 's27',
    emoji: '👂',
    acronym: 'ORL',
    fullES: 'Otorrinolaringología',
    defES: 'Especialidad médica que trata oído, nariz y garganta.',
    fullRO: 'Otorinolaringologie',
    defRO: 'Specialitate medicală care tratează urechea, nasul și gâtul.'
  },
  {
    id: 's28',
    emoji: '🧫',
    acronym: 'UFC',
    fullES: 'Unidades Formadoras de Colonias',
    defES: 'Medida usada en cultivos (ej. orina) para cuantificar bacterias. >100.000 UFC suele confirmar infección.',
    fullRO: 'Unități Formatoare de Colonii',
    defRO: 'Măsură folosită în culturi (ex. urină) pentru cuantificarea bacteriilor. >100.000 UFC confirmă de obicei infecția.'
  },
  {
    id: 's29',
    emoji: '💨',
    acronym: 'MDI',
    fullES: 'Inhalador de Cartucho Presurizado',
    defES: 'El "spray" clásico para el asma (Ventolín). Requiere buena coordinación o cámara espaciadora.',
    fullRO: 'Inhalator cu Doză Măsurată',
    defRO: 'Spray-ul clasic pentru astm. Necesită coordonare bună sau cameră de distanțare.'
  }
];