import {
  Wind,
  CloudFog,
  Stethoscope,
  Activity,
} from "lucide-react";

export const CLINICAL_5_TOPIC_2 = {
  id: "part7_clinical5_topic2",
  titleES: "Patología Respiratoria y Cuidados",
  titleRO: "Patologie Respiratorie și Îngrijiri",
  isExpert: false,
  learningObjectives: [
    "Identificar fenotipos de EPOC (Bronquitis Crónica vs Enfisema).",
    "Manejo básico de crisis asmática.",
    "Conceptos de VMNI (Ventilación Mecánica No Invasiva).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. EPOC: Fenotipos Clínicos",
      textRO: "1. BPOC: Fenotipuri Clinice",
    },
    {
      type: "table",
      headersES: ["Fenotipo", "Apodo", "Características"],
      headersRO: ["Fenotip", "Poreclă", "Caracteristici"],
      rows: [
        {
          colsES: ["Bronquitis Crónica", "Blue Bloater (Abotargado Azul)", "Tos productiva, cianosis, sobrepeso, hipoventilación."],
          colsRO: ["Bronșită Cronică", "Blue Bloater (Umflat Albastru)", "Tuse productivă, cianoză, supraponderal, hipoventilație."],
        },
        {
          colsES: ["Enfisema", "Pink Puffer (Soplador Rosado)", "Disnea grave, delgadez, tórax en tonel, espiración alargada."],
          colsRO: ["Emfizem", "Pink Puffer (Suflător Roz)", "Dispnee gravă, slăbiciune, torace în butoi, expirație prelungită."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Cuidados e Inhaladores",
      textRO: "2. Îngrijiri și Inhalatoare",
    },
    {
      type: "list",
      items: [
        {
          icon: Wind,
          textES: "Crisis Asmática: Broncoespasmo reversible. Tto: Salbutamol (SABA) + Corticoides. Ojo si silencio auscultatorio (gravedad).",
          textRO: "Criză Astmatică: Bronhospasm reversibil. Trat: Salbutamol (SABA) + Corticoizi. Atenție dacă liniște auscultatorie (gravitate).",
        },
        {
          icon: CloudFog,
          textES: "VMNI (Ventilación No Invasiva): Soporte ventilatorio sin intubación (BiPAP/CPAP). Interfaz: Máscara facial/nasal. Requiere paciente colaborador.",
          textRO: "VMNI (Ventilație Non-Invazivă): Suport ventilator fără intubare (BiPAP/CPAP). Interfață: Mască facială/nazală. Necesită pacient cooperant.",
        },
      ],
    },
  ],
};
