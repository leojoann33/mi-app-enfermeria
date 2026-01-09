import {
  Skull,
  Microscope,
  Radiation,
  Pill,
} from "lucide-react";

export const CLINICAL_14_TOPIC_1 = {
  id: "part7_clinical14_topic1",
  titleES: "Oncología: Estadiaje y Tratamientos",
  titleRO: "Oncologie: Stadializare și Tratamente",
  isExpert: false,
  learningObjectives: [
    "Interpretar la clasificación TNM y la gradación tumoral (G1-G4).",
    "Conocer las modalidades de tratamiento (Quimio, Radio, Inmuno).",
    "Identificar signos de alarma en el paciente oncológico.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Clasificación del Cáncer",
      textRO: "1. Clasificarea Cancerului",
    },
    {
      type: "table",
      headersES: ["Sistema TNM", "Significado"],
      headersRO: ["Sistem TNM", "Semnificație"],
      rows: [
        {
          colsES: ["T (Tumor)", "Tamaño y extensión del tumor primario (T0-T4)."],
          colsRO: ["T (Tumoră)", "Mărimea și extensia tumorii primare (T0-T4)."],
        },
        {
          colsES: ["N (Nodes)", "Afectación de ganglios linfáticos regionales (N0-N3)."],
          colsRO: ["N (Noduli)", "Afectarea ganglionilor limfatici regionali (N0-N3)."],
        },
        {
          colsES: ["M (Metastasis)", "Diseminación a distancia (M0-M1)."],
          colsRO: ["M (Metastaze)", "Diseminare la distanță (M0-M1)."],
        },
      ],
    },
    {
      type: "p",
      textES: "Gradación (G): G1 (Bien diferenciado, menos agresivo) -> G4 (Indiferenciado, muy agresivo/anaplasia).",
      textRO: "Gradare (G): G1 (Bine diferențiat, mai puțin agresiv) -> G4 (Nediferențiat, foarte agresiv/anaplazie).",
    },
    {
      type: "h3",
      textES: "2. Tratamientos",
      textRO: "2. Tratamente",
    },
    {
      type: "list",
      items: [
        {
          icon: Pill,
          textES: "Quimioterapia: Sistémica (afecta células en división rápida). Toxicidad: Alopecia, Mucositis, Neutropenia.",
          textRO: "Chimioterapie: Sistemică (afectează celule cu diviziune rapidă). Toxicitate: Alopecie, Mucozită, Neutropenie.",
        },
        {
          icon: Radiation,
          textES: "Radioterapia: Local. Externa o Interna (Braquiterapia). Cuidado de la piel (Radiodermitis).",
          textRO: "Radioterapie: Locală. Externă sau Internă (Brahiterapie). Îngrijirea pielii (Radiodermită).",
        },
      ],
    },
  ],
};
