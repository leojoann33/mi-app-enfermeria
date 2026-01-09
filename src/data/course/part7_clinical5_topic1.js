import {
  Wind,
  Activity,
  Stethoscope,
  MoveHorizontal,
} from "lucide-react";

export const CLINICAL_5_TOPIC_1 = {
  id: "part7_clinical5_topic1",
  titleES: "Insuficiencia Respiratoria y Patrones",
  titleRO: "Insuficiență Respiratorie și Tipare",
  isExpert: false,
  learningObjectives: [
    "Diferenciar Insuficiencia Respiratoria Parcial (Hipoxémica) vs Global (Hipercapnica).",
    "Distinguir Patrón Obstructivo (EPOC/Asma) vs Restrictivo (Fibrosis).",
    "Interpretar valores básicos de gasometría.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Insuficiencia Respiratoria (IR)",
      textRO: "1. Insuficiență Respiratorie (IR)",
    },
    {
      type: "p",
      textES: "Incapacidad del sistema respiratorio para mantener el intercambio gaseoso (PaO2 < 60 mmHg).",
      textRO: "Incapacitatea sistemului respirator de a menține schimbul gazos (PaO2 < 60 mmHg).",
    },
    {
      type: "table",
      headersES: ["Tipo", "Gasometría", "Mecanismo/Causa"],
      headersRO: ["Tip", "Gazometrie", "Mecanism/Cauză"],
      rows: [
        {
          colsES: ["Parcial (Tipo I)", "Hipoxemia (PaO2 < 60) + Normocapnia.", "Fallo de Oxigenación (Neumonía, SDRA)."],
          colsRO: ["Parțială (Tip I)", "Hipoxemie (PaO2 < 60) + Normocapnie.", "Eșec de Oxigenare (Pneumonie, SDRA)."],
        },
        {
          colsES: ["Global (Tipo II)", "Hipoxemia + Hipercapnia (PaCO2 > 45).", "Fallo Ventilatorio (EPOC, Depresión SNC)."],
          colsRO: ["Globală (Tip II)", "Hipoxemie + Hipercapnie (PaCO2 > 45).", "Eșec Ventilator (BPOC, Depresie SNC)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Patrones Espirométricos",
      textRO: "2. Tipare Spirometrice",
    },
    {
      type: "list",
      items: [
        {
          icon: Wind,
          textES: "Patrón Obstructivo: Dificultad para SACAR el aire. Tiffeneau < 70%. (Asma, EPOC).",
          textRO: "Tipar Obstructiv: Dificultate în a SCOATE aerul. Tiffeneau < 70%. (Astm, BPOC).",
        },
        {
          icon: MoveHorizontal,
          textES: "Patrón Restrictivo: Dificultad para LLENAR el pulmón. Capacidad Vital reducida. (Fibrosis, Obesidad, Cifoescoliosis).",
          textRO: "Tipar Restrictiv: Dificultate în a UMPLE plămânul. Capacitate Vitală redusă. (Fibroză, Obezitate, Cifoscolioză).",
        },
      ],
    },
  ],
};
