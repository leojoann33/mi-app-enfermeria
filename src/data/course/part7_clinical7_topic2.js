import {
  Network,
  Activity,
  BrainCircuit,
} from "lucide-react";

export const CLINICAL_7_TOPIC_2 = {
  id: "part7_clinical7_topic2",
  titleES: "Clasificación y Pares Craneales",
  titleRO: "Clasificare și Nervi Cranieni",
  isExpert: false,
  learningObjectives: [
    "Clasificar el SN estructuralmente (Central vs Periférico).",
    "Clasificar el SN funcionalmente (Somático vs Vegetativo).",
    "Distinguir Unidad Motora (Motoneurona inferior, nervio, placa).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Clasificación Estructural",
      textRO: "1. Clasificare Structurală",
    },
    {
      type: "list",
      items: [
        {
          icon: BrainCircuit,
          textES: "SNC (Central): Encéfalo (Cerebro, Cerebelo, Tronco) + Médula Espinal.",
          textRO: "SNC (Central): Encefal (Creier, Cerebel, Trunchi) + Măduva Spinării.",
        },
        {
          icon: Network,
          textES: "SNP (Periférico): 12 Pares Craneales + 31 Pares Espinales (Raíces, Plexos, Nervios).",
          textRO: "SNP (Periferic): 12 Nervi Cranieni + 31 Nervi Spinali (Rădăcini, Plexuri, Nervi).",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Clasificación Funcional",
      textRO: "2. Clasificare Funcțională",
    },
    {
      type: "table",
      headersES: ["Sistema", "Control", "Función"],
      headersRO: ["Sistem", "Control", "Funcție"],
      rows: [
        {
          colsES: ["Somático", "Voluntario", "Relación con medio externo. Músculo esquelético."],
          colsRO: ["Somatic", "Voluntar", "Relație cu mediul extern. Mușchi scheletic."],
        },
        {
          colsES: ["Vegetativo (Autónomo)", "Involuntario", "Simpático (Lucha/Huida) vs Parasimpático (Reposo)."],
          colsRO: ["Vegetativ (Autonom)", "Involuntar", "Simpatic (Luptă/Fugi) vs Parasimpatic (Repaus)."],
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Activity,
      titleES: "UNIDAD MOTORA",
      textES: "Conjunto funcional formado por: Motoneurona Inferior + Nervio Periférico + Placa Motora + Fibra Muscular.",
      titleRO: "UNITATE MOTORIE",
      textRO: "Ansamblu funcțional format din: Motoneuron Inferior + Nerv Periferic + Placă Motorie + Fibră Musculară.",
    },
  ],
};
