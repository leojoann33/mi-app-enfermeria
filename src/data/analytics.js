/**
 * DATABASE: ANALYTICS_DB & LAB_TIPS
 * Ubicación: src/data/analytics_catalog.js
 */

export const ANALYTICS_DB = [
  // --- HEMATOLOGÍA ---
  {
    sectionID: "hemato",
    titleES: "HEMATOLOGÍA",
    titleRO: "HEMATOLOGIE",
    color: "bg-purple-50",
    borderColor: "border-purple-400",
    textColor: "text-purple-700",
    groups: [
      {
        nameES: "Básicos",
        nameRO: "De bază",
        items: [
          { id: "hgrama", label: "Hemograma Completo", tube: "purple" },
          { id: "hba1c", label: "HbA1c (Glicosilada)", tube: "purple" },
          { id: "vsg", label: "VSG", tube: "black" },
          { id: "grup", label: "Grupo y Rh", tube: "pink" },
        ],
      },
    ],
  },
  // --- COAGULACIÓN ---
  {
    sectionID: "coag",
    titleES: "COAGULACIÓN",
    titleRO: "COAGULARE",
    color: "bg-sky-50",
    borderColor: "border-sky-400",
    textColor: "text-sky-700",
    groups: [
      {
        nameES: "Pruebas de Coagulación",
        nameRO: "Teste de Coagulare",
        items: [
          { id: "inr", label: "INR / Protrombina", tube: "blue" },
          { id: "ttpa", label: "TTPa (Cefalina)", tube: "blue" },
          { id: "fib", label: "Fibrinógeno", tube: "blue" },
          { id: "dim", label: "Dímero-D", tube: "blue" },
        ],
      },
    ],
  },
  // --- BIOQUÍMICA ---
  {
    sectionID: "bioq",
    titleES: "BIOQUÍMICA",
    titleRO: "BIOCHIMIE",
    color: "bg-amber-50",
    borderColor: "border-amber-400",
    textColor: "text-amber-700",
    groups: [
      {
        nameES: "Perfil Renal y Iones",
        nameRO: "Profil Renal și Ioni",
        items: [
          { id: "gluc", label: "Glucosa", tube: "yellow" },
          { id: "urea", label: "Urea", tube: "yellow" },
          { id: "crea", label: "Creatinina", tube: "yellow" },
          { id: "na", label: "Sodio (Na+)", tube: "yellow" },
          { id: "k", label: "Potasio (K+)", tube: "yellow" },
          { id: "cl", label: "Cloro (Cl-)", tube: "yellow" },
          { id: "pcr", label: "PCR (Inflamación)", tube: "yellow" },
          { id: "pct", label: "Procalcitonina", tube: "yellow" },
        ],
      },
      {
        nameES: "Enzimas y Cardiaco",
        nameRO: "Enzime și Cardiac",
        items: [
          { id: "got", label: "GOT / AST", tube: "yellow" },
          { id: "gpt", label: "GPT / ALT", tube: "yellow" },
          { id: "trop", label: "Troponina", tube: "green" },
          { id: "probnp", label: "NT-proBNP", tube: "yellow" },
        ],
      },
    ],
  },
  // --- ORINA ---
  {
    sectionID: "orina",
    titleES: "ORINA",
    titleRO: "URINĂ",
    color: "bg-orange-50",
    borderColor: "border-orange-400",
    textColor: "text-orange-700",
    groups: [
      {
        nameES: "Muestras de Orina",
        nameRO: "Probe de Urină",
        items: [
          { id: "sist", label: "Sistemático (Tira)", tube: "red" },
          { id: "uro", label: "Urocultivo", tube: "red" },
        ],
      },
    ],
  },
];

// ESTA ES LA EXPORTACIÓN QUE TE FALTABA:
export const LAB_TIPS = [
  {
    id: "tip_01",
    icon: "🚫",
    titleES: "Prohibido sacar de vía con suero",
    titleRO: "Interzis din linie cu perfuzie",
    textES:
      "Nunca sacar sangre de un brazo donde está pasando suero. Resultados diluidos. Parar 10 min si es necesario.",
    textRO: "Nu recoltați din brațul cu perfuzie. Rezultatele vor fi diluate.",
  },
  {
    id: "tip_02",
    icon: "💪",
    titleES: "El Torniquete (Compresor)",
    titleRO: "Garoul",
    textES: "Máximo 1 minuto. Si se deja más, sube falsamente el Potasio.",
    textRO: "Maxim 1 minut. Altfel crește Potasiul.",
  },
  {
    id: "tip_03",
    icon: "🩸",
    titleES: "Orden de Llenado",
    titleRO: "Ordinea de Umplere",
    textES:
      "1º Hemocultivos -> 2º Azul -> 3º Amarillo -> 4º Lila. El EDTA contamina la química.",
    textRO: "1º Hemoculturi -> 2º Albastru -> 3º Galben -> 4º Mov.",
  },
];
