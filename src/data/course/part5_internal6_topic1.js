import {
  Biohazard,
  Timer,
  Activity,
  Syringe,
  TrendingUp,
} from "lucide-react";

export const INTERNAL_6_TOPIC_1 = {
  id: "internal-6-1",
  titleES: "Medicina Interna: Sepsis-3 y Shock Séptico",
  titleRO: "Medicină Internă: Sepsis-3 și Șoc Septic",
  isExpert: true,
  learningObjectives: [
    "Nuevas definiciones Sepsis-3 (SOFA vs SIRS).",
    "El 'Hour-1 Bundle' (Paquete de la primera hora).",
    "Manejo de vasopresores y lactato.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Definiciones Modernas (Sepsis-3)",
      textRO: "1. Definiții Moderne (Sepsis-3)",
    },
    {
      type: "p",
      textES: "Olvida el SIRS. La sepsis es una 'Disfunción orgánica potencialmente mortal causada por una respuesta desregulada a la infección'.",
      textRO: "Uită de SIRS. Sepsisul este o 'Disfuncție organică potențial letală cauzată de un răspuns dereglat la infecție'.",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "qSOFA (Quick SOFA): Sospecha a pie de cama. 1. Alteración mental (GCS < 15). 2. TAS <= 100 mmHg. 3. FR >= 22 rpm. Si tiene 2/3 -> Alerta Sepsis.",
          textRO: "qSOFA (Quick SOFA): Suspiciune la pat. 1. Alterare mentală (GCS < 15). 2. TAS <= 100 mmHg. 3. FR >= 22 rpm. Dacă are 2/3 -> Alertă Sepsis.",
        },
        {
          icon: Biohazard,
          textES: "Shock Séptico: Sepsis + Necesidad de Vasopresores para PAM >= 65 mmHg + Lactato > 2 mmol/L (a pesar de volumen).",
          textRO: "Șoc Septic: Sepsis + Necesitate Vasopresoare pentru TAM >= 65 mmHg + Lactat > 2 mmol/L (în ciuda volumului).",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Hour-1 Bundle: Paquete de la Hora 1",
      textRO: "2. Hour-1 Bundle: Pachetul Orei 1",
    },
    {
      type: "table",
      headersES: ["Acción", "Detalle", "Tiempo"],
      headersRO: ["Acțiune", "Detaliu", "Timp"],
      rows: [
        { colsES: ["Medir Lactato", "Si > 2 mmol/L, repetir en 2-4h (Aclaramiento).", "Inmediato."], colsRO: ["Măsurare Lactat", "Dacă > 2 mmol/L, repetați în 2-4h (Clearance).", "Imediat."] },
        { colsES: ["Cultivos", "Hemocultivos x2 ANTES del antibiótico.", "Inmediato."], colsRO: ["Culturi", "Hemoculturi x2 ÎNAINTE de antibiotic.", "Imediat."] },
        { colsES: ["Antibióticos", "Amplio espectro IV (Ej. Meropenem/Piptazo).", "< 1 hora."], colsRO: ["Antibiotice", "Spectru larg IV (Ex. Meropenem/Piptazo).", "< 1 oră."] },
        { colsES: ["Cristaloides", "30 ml/kg si Hipotensión o Lactato > 4.", "Rápido."], colsRO: ["Cristaloide", "30 ml/kg dacă Hipotensiune sau Lactat > 4.", "Rapid."] },
        { colsES: ["Vasopresores", "Si PAM < 65 tras fluidos. Noradrenalina.", "Durante/tras fluidos."], colsRO: ["Vasopresoare", "Dacă TAM < 65 după fluide. Noradrenalină.", "În timpul/după fluide."] },
      ],
    },
  ],
};
