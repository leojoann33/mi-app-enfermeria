import {
  Cable,
  Stethoscope,
  Activity,
  Milk,
} from "lucide-react";

export const CLINICAL_4_TOPIC_2 = {
  id: "part7_clinical4_topic2",
  titleES: "Soporte: Enteral vs Parenteral",
  titleRO: "Suport: Enteral vs Parenteral",
  isExpert: false,
  learningObjectives: [
    "Distinguir indicaciones de Nutrición Enteral vs Parenteral.",
    "Manejo de Sonda Nasogástrica (SNG) y Gastrostomía (PEG).",
    "Cuidados de la Nutrición Parenteral (NPP/NPC).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Nutrición Enteral (NE)",
      textRO: "1. Nutriție Enterală (NE)",
    },
    {
      type: "p",
      textES: "Elección preferente si el intestino es funcionante. Mantiene el trofismo intestinal y la barrera inmunitaria.",
      textRO: "Alegere preferată dacă intestinul este funcțional. Menține trofismul intestinal și bariera imunitară.",
    },
    {
      type: "list",
      items: [
        {
          icon: Cable,
          textES: "Vías de Acceso: SNG (Sonda Nasogástrica - temporal), PEG (Gastrostomía endoscópica - largo plazo).",
          textRO: "Căi de Acces: SNG (Sondă Nazogastrică - temporal), PEG (Gastrostomie endoscopică - termen lung).",
        },
        {
          icon: Milk,
          textES: "Fórmulas: Poliméricas (proteína intacta), Peptídicas (hidrolizadas/predigeridas para malabsorción), Específicas (Diabetes, Renal).",
          textRO: "Formule: Polimerice (proteină intactă), Peptidice (hidrolizate/predigerate pt malabsorbție), Specifice (Diabet, Renal).",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Nutrición Parenteral (NP)",
      textRO: "2. Nutriție Parenterală (NP)",
    },
    {
      type: "p",
      textES: "Vía intravenosa cuando el tracto digestivo NO es utilizable (íleo, obstrucción, resección masiva).",
      textRO: "Cale intravenoasă când tractul digestiv NU este utilizabil (ileus, obstrucție, rezecție masivă).",
    },
    {
      type: "table",
      headersES: ["Tipo", "Vía Venosa", "Características"],
      headersRO: ["Tip", "Cale Venoasă", "Caracteristici"],
      rows: [
        {
          colsES: ["NPP (Periférica)", "Vía Periférica", "Osmolaridad < 800-900 mOsm/L. Corto plazo. Menor aporte calórico."],
          colsRO: ["NPP (Periferică)", "Cale Periferică", "Osmolaritate < 800-900 mOsm/L. Termen scurt. Aport caloric mai mic."],
        },
        {
          colsES: ["NPC (Central/Total)", "Vía Central (CVC/PICC)", "Alta osmolaridad. Cubre todas las necesidades. Riesgo de infección (bacteriemia)."],
          colsRO: ["NPC (Centrală/Totală)", "Cale Centrală (CVC/PICC)", "Osmolaritate mare. Acoperă toate nevoile. Risc de infecție (bacteriemie)."],
        },
      ],
    },
    {
      type: "alert",
      variant: "warning",
      icon: Activity,
      titleES: "SEGURIDAD",
      textES: "La NP es un medio excelente para el crecimiento bacteriano. Mantener asepsia estricta en conexiones. Cambiar sistemas cada 24h.",
      titleRO: "SIGURANȚĂ",
      textRO: "NP este un mediu excelent pentru creșterea bacteriană. Menține asepsia strictă la conexiuni. Schimbă sistemele la fiecare 24h.",
    },
  ],
};
