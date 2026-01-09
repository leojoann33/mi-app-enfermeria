/**
 * 🧮 HERRAMIENTAS Y CALCULADORAS CLÍNICAS (TOOLS.JS)
 * -------------------------------------------------------------------
 * Autor: PetrescuENF3 (Reconstrucción)
 * Descripción: Definiciones y lógica para las calculadoras de la app.
 * Edición: NANDA-I 2024-2026 | NIC 7ª Ed
 * Idiomas: Español (ES) | Rumano (RO)
 */

export const herramientas = [
  // --------------------------------------------------------------------------
  // 1. CALCULADORA DE IMC (ÍNDICE DE MASA CORPORAL)
  // --------------------------------------------------------------------------
  {
    id: "tool_bmi",
    icon: "weight", // Icono sugerido (Lucide/FontAwesome)
    titleES: "IMC - Índice de Masa Corporal",
    titleRO: "IMC - Indicele de Masă Corporală",
    category: "Metabolismo",

    // --- Contexto Clínico ---
    descES: "Evaluación rápida del estado nutricional según la OMS.",
    nandaES:
      "**NANDA (00002):** Desequilibrio nutricional / **(00232):** Obesidad.",

    descRO: "Evaluarea rapidă a stării nutriționale conform OMS.",
    nandaRO:
      "**NANDA (00002):** Dezechilibru nutrițional / **(00232):** Obezitate.",

    // --- Lógica del Cálculo (Referencia para programar el componente) ---
    logic: {
      inputs: ["weight_kg", "height_cm"],
      formula: "weight / ((height/100) * (height/100))",
      ranges: [
        {
          max: 18.5,
          labelES: "Bajo Peso",
          labelRO: "Subponderal",
          color: "text-blue-500",
        },
        {
          max: 24.9,
          labelES: "Peso Normal",
          labelRO: "Greutate Normală",
          color: "text-green-500",
        },
        {
          max: 29.9,
          labelES: "Sobrepeso",
          labelRO: "Supraponderal",
          color: "text-orange-500",
        },
        {
          max: 999,
          labelES: "Obesidad",
          labelRO: "Obezitate",
          color: "text-red-500",
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 2. CÁLCULO DE GOTEO (BOMBA VS GRAVEDAD)
  // --------------------------------------------------------------------------
  {
    id: "tool_drip",
    icon: "droplet",
    titleES: "Cálculo de Goteo / Perfusión",
    titleRO: "Calcul Ritm Perfuzie / Picurare",
    category: "Farmacología",

    descES:
      "Cálculo preciso para administración de fluidos sin bomba (gravedad) o programación de bomba.",
    nandaES:
      "**NIC (4200):** Terapia intravenosa (IV). **NIC (4120):** Manejo de líquidos.",

    descRO:
      "Calcul precis pentru administrarea fluidelor gravitațional sau pe pompă.",
    nandaRO: "**NIC (4200):** Terapie intravenoasă.",

    logic: {
      inputs: ["volume_ml", "time_hours", "factor_goteo"], // Factor: 20 (gotas/ml) o 60 (microgotas)
      formulas: {
        ml_per_hour: "volume / time", // Para Bomba
        drops_per_min: "(volume * factor) / (time * 60)", // Para Gravedad
      },
      factors: {
        macro: {
          val: 20,
          labelES: "Macrogotero (20 gtt/ml)",
          labelRO: "Macropicurător (20 gtt/ml)",
        },
        micro: {
          val: 60,
          labelES: "Microgotero (60 gtt/ml)",
          labelRO: "Micropicurător (60 gtt/ml)",
        },
        blood: {
          val: 15,
          labelES: "Sangre (15 gtt/ml)",
          labelRO: "Sânge (15 gtt/ml)",
        },
      },
    },
  },

  // --------------------------------------------------------------------------
  // 3. ESCALA BRADEN (ÚLCERAS POR PRESIÓN)
  // --------------------------------------------------------------------------
  {
    id: "tool_braden",
    icon: "activity",
    titleES: "Escala Braden (UPP)",
    titleRO: "Scara Braden (Escare)",
    category: "Cuidados Piel",

    descES:
      "Valoración del riesgo de Úlceras por Presión (UPP). Obligatorio al ingreso.",
    nandaES:
      "**NANDA (00047):** Riesgo de deterioro de la integridad cutánea. **NIC (3540):** Prevención de úlceras por presión.",

    descRO:
      "Evaluarea riscului de Escare de Decubit. Obligatoriu la internare.",
    nandaRO: "**NANDA (00047):** Risc de deteriorare a integrității cutanate.",

    // Puntos de corte para interpretación
    logic: {
      max_score: 23,
      interpretation: [
        {
          range: [0, 12],
          labelES: "🔴 ALTO RIESGO",
          labelRO: "🔴 RISC ÎNALT",
          actionES: "Cambios posturales cada 2h + SEMP + Taloneras",
          actionRO: "Repoziționare la 2h + Saltea antiescară",
        },
        {
          range: [13, 14],
          labelES: "🟠 Riesgo Moderado",
          labelRO: "🟠 Risc Moderat",
          actionES: "Cambios cada 3-4h + Hidratación",
          actionRO: "Repoziționare 3-4h + Hidratare",
        },
        {
          range: [15, 18],
          labelES: "🟢 Riesgo Bajo",
          labelRO: "🟢 Risc Scăzut",
          actionES: "Vigilancia diaria",
          actionRO: "Supraveghere zilnică",
        },
        {
          range: [19, 23],
          labelES: "⚪ Sin Riesgo",
          labelRO: "⚪ Fără Risc",
          actionES: "Cuidados habituales",
          actionRO: "Îngrijiri uzuale",
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 4. REGLA DE LOS 9 DE WALLACE (QUEMADOS)
  // --------------------------------------------------------------------------
  {
    id: "tool_burns",
    icon: "flame",
    titleES: "Quemados: Regla de los 9 (Wallace)",
    titleRO: "Arșuri: Regula lui 9 (Wallace)",
    category: "Urgencias",

    descES:
      "Estimación de la Superficie Corporal Quemada (SCQ) para calcular reposición de fluidos.",
    nandaES:
      "**NANDA (00027):** Déficit de volumen de líquidos. **NIC (4120):** Manejo de líquidos (Parkland).",

    descRO:
      "Estimarea Suprafeței Corporale Arse (SCA) pentru resuscitare volemică.",
    nandaRO: "**NANDA (00027):** Deficit de volum lichidian.",

    content: {
      head: {
        val: 9,
        labelES: "Cabeza y Cuello (9%)",
        labelRO: "Cap și Gât (9%)",
      },
      arm: { val: 9, labelES: "Cada Brazo (9%)", labelRO: "Fiecare Braț (9%)" },
      leg: {
        val: 18,
        labelES: "Cada Pierna (18%)",
        labelRO: "Fiecare Picior (18%)",
      },
      torso_front: {
        val: 18,
        labelES: "Tronco Anterior (18%)",
        labelRO: "Trunchi Anterior (18%)",
      },
      torso_back: { val: 18, labelES: "Espalda (18%)", labelRO: "Spate (18%)" },
      genitals: { val: 1, labelES: "Genitales (1%)", labelRO: "Genitale (1%)" },
    },
  },

  // --------------------------------------------------------------------------
  // 5. ESCALA GLASGOW (NEURO)
  // --------------------------------------------------------------------------
  {
    id: "tool_gcs",
    icon: "brain",
    titleES: "Escala de Coma de Glasgow (GCS)",
    titleRO: "Scara Glasgow (GCS)",
    category: "Neurología",

    descES: "Valoración del nivel de conciencia. Crítico en TCE y ACV.",
    nandaES:
      "**NANDA (00016):** Perfusión tisular cerebral ineficaz (riesgo). **NIC (2620):** Monitorización neurológica.",

    descRO: "Evaluarea nivelului de conștiență. Critic în Traumatisme și AVC.",
    nandaRO: "**NANDA (00016):** Perfuzie tisulară cerebrală ineficientă.",

    logic: {
      max_score: 15,
      min_score: 3,
      alert: {
        threshold: 8,
        msgES: "⚠️ GCS < 9: Coma. Valorar Intubación (IOT).",
        msgRO: "⚠️ GCS < 9: Comă. Evaluați Intubarea (IOT).",
      },
    },
  },

  // --------------------------------------------------------------------------
  // 6. CÁLCULO FECHA PROBABLE DE PARTO (NAEGELE)
  // --------------------------------------------------------------------------
  {
    id: "tool_fpp",
    icon: "baby",
    titleES: "FPP - Fecha Probable de Parto",
    titleRO: "DPN - Data Probabilă a Nașterii",
    category: "Obstetricia",

    descES: "Regla de Naegele: FUR + 7 días - 3 meses + 1 año.",
    nandaES:
      "**NANDA (00209):** Riesgo de alteración de la díada materno-fetal.",

    descRO: "Regula lui Naegele: UM + 7 zile - 3 luni + 1 an.",
    nandaRO: "**NANDA (00209):** Risc de alterare a diadei materno-fetale.",

    logic: {
      inputs: ["fur"], // Fecha Última Regla
      formula_js: "date + 7 days - 3 months",
    },
  },
];
