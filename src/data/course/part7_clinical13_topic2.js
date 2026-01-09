import {
  Pill,
  Baby,
  BrainCircuit,
  AlertTriangle,
} from "lucide-react";

export const CLINICAL_13_TOPIC_2 = {
  id: "part7_clinical13_topic2",
  titleES: "Farmacología Especial (Pedi/Psiq/Hem)",
  titleRO: "Farmacologie Specială (Pedi/Psi/Hem)",
  isExpert: false,
  learningObjectives: [
    "Manejo de Anticoagulantes (Sintrom vs nuevos NACOs) y antídotos.",
    "Particularidades farmacológicas en Pediatría.",
    "Principales grupos de fármacos en Salud Mental.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Anticoagulantes y Antídotos",
      textRO: "1. Anticoagulante și Antidoturi",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Control", "Antídoto"],
      headersRO: ["Medicament", "Control", "Antidot"],
      rows: [
        {
          colsES: ["Acenocumarol (Sintrom)", "INR (TP).", "Vitamina K + CPP (Octaplex)."],
          colsRO: ["Acenocumarol (Sintrom)", "INR (TP).", "Vitamina K + CPP (Octaplex)."],
        },
        {
          colsES: ["Heparina Sódica", "TTPA.", "Sulfato de Protamina."],
          colsRO: ["Heparină Sodică", "aPTT.", "Sulfat de Protamină."],
        },
        {
          colsES: ["NACOs (Dabigatrán, etc)", "No precisan INR rutinario.", "Idarucizumab (Pradaxa) / Andexanet alfa."],
          colsRO: ["NACO (Dabigatran, etc)", "Nu necesită INR rutină.", "Idarucizumab (Pradaxa) / Andexanet alfa."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Pediatría y Psiquiatría",
      textRO: "2. Pediatrie și Psihiatrie",
    },
    {
      type: "list",
      items: [
        {
          icon: Baby,
          textES: "Pediatría: Ondasetrón (antiemético seguro). Corticoides (Estilsona/Prednisolona). Cuidado con dosis 'Off-label'.",
          textRO: "Pediatrie: Ondasetron (antiemetic sigur). Corticoizi (Stilsona/Prednisolonă). Atenție la doze 'Off-label'.",
        },
        {
          icon: BrainCircuit,
          textES: "Antipsicóticos: Típicos (Haloperidol - SEP) vs Atípicos (Risperidona, Olanzapina - Metabólicos).",
          textRO: "Antipsihotice: Tipice (Haloperidol - EPS) vs Atipice (Risperidonă, Olanzapină - Metabolice).",
        },
      ],
    },
  ],
};
