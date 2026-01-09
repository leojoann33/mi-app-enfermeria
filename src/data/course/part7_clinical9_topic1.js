import {
  Heart,
  Activity,
  Zap,
  Repeat,
} from "lucide-react";

export const CLINICAL_9_TOPIC_1 = {
  id: "part7_clinical9_topic1",
  titleES: "Fisiología y Estructura Cardiovascular",
  titleRO: "Fiziologie și Structură Cardiovasculară",
  isExpert: false,
  learningObjectives: [
    "Definir propiedades cardiacas (Inotropismo, Cronotropismo, etc.).",
    "Comprender conceptos hemodinámicos: Precarga, Postcarga y Gasto.",
    "Identificar estructura valvular y circulación coronaria.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Fisiología Cardiaca",
      textRO: "1. Fiziologie Cardiacă",
    },
    {
      type: "list",
      items: [
        {
          icon: Zap,
          textES: "Propiedades: Cronotropismo (Automatismo), Inotropismo (Contracción), Batmotrópismo (Excitabilidad), Dromotropismo (Conducción), Lusitropismo (Relajación).",
          textRO: "Proprietăți: Cronotropism (Automatism), Inotropism (Contracție), Batmotropism (Excitabilitate), Dromotropism (Conducere), Lusitropism (Relaxare).",
        },
        {
          icon: Repeat,
          textES: "Ciclo Cardiaco: Sístole (Contracción/Eyección) y Diástole (Relajación/Llenado).",
          textRO: "Ciclu Cardiac: Sistolă (Contracție/Ejecție) și Diastolă (Relaxare/Umplere).",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Hemodinamia",
      textRO: "2. Hemodinamică",
    },
    {
      type: "table",
      headersES: ["Parámetro", "Definición", "Valor Normal"],
      headersRO: ["Parametru", "Definiție", "Valoare Normală"],
      rows: [
        {
          colsES: ["Precarga", "Volumen telediastólico (al final de diástole).", "Relacionado con retorno venoso/volemia."],
          colsRO: ["Presarcină", "Volum telediastolic (la finalul diastolei).", "Legat de retur venos/volemie."],
        },
        {
          colsES: ["Postcarga", "Resistencia a la eyección ventricular.", "RVS (Resistencia Vascular Sistémica)."],
          colsRO: ["Postsarcină", "Rezistența la ejecția ventriculară.", "RVS (Rezistența Vasculară Sistemică)."],
        },
        {
          colsES: ["Gasto Cardíaco", "Volumen de sangre bombeado por minuto.", "4-8 L/min (FC x Volumen Sistólico)."],
          colsRO: ["Debit Cardiac", "Volum sânge pompat pe minut.", "4-8 L/min (FC x Volum Sistolic)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Anatomía Vascular",
      textRO: "3. Anatomie Vasculară",
    },
    {
      type: "list",
      items: [
        {
          icon: Heart,
          textES: "Válvulas: Tricúspide y Mitral (AV); Pulmonar y Aórtica (Semilunares).",
          textRO: "Valve: Tricuspidă și Mitrală (AV); Pulmonară și Aortică (Semilunare).",
        },
        {
          icon: Activity,
          textES: "Coronarias: Arteria Coronaria Derecha (CD) e Izquierda (TCI -> DA + CX).",
          textRO: "Coronare: Arteră Coronară Dreaptă (CD) și Stângă (TCI -> DA + CX).",
        },
      ],
    },
  ],
};
