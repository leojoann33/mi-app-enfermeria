import {
  Droplet,
  AlertTriangle,
  Zap,
  Activity,
  Syringe,
} from "lucide-react";

export const CLINICAL_3_TOPIC_1 = {
  id: "part7_clinical3_topic1",
  titleES: "Diabetes y Urgencias Glucémicas",
  titleRO: "Diabet și Urgențe Glicemice",
  isExpert: false,
  learningObjectives: [
    "Definir criterios de Hipoglucemia (<70 mg/dl) e Hiperglucemia.",
    "Aplicar protocolo de actuación ante hipoglucemia (consciente vs inconsciente).",
    "Identificar criterios diagnósticos de Diabetes.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Hipoglucemia (< 70 mg/dl)",
      textRO: "1. Hipoglicemie (< 70 mg/dl)",
    },
    {
      type: "table",
      headersES: ["Estado Paciente", "Actuación Enfermería", "Fármacos/Medidas"],
      headersRO: ["Stare Pacient", "Acțiune Asistență", "Medicamente/Măsuri"],
      rows: [
        {
          colsES: [
            "Consciente",
            "Ingesta oral rápida de hidratos de carbono.",
            "Zumo con dos sobres de azúcar.",
          ],
          colsRO: [
            "Conștient",
            "Ingestie orală rapidă de carbohidrați.",
            "Suc cu două plicuri de zahăr.",
          ],
        },
        {
          colsES: [
            "Inconsciente / Agitado (Con Vía)",
            "Administración IV de glucosa hipertónica.",
            "Glucosmón (G50%) + Perfusión SG 10%.",
          ],
          colsRO: [
            "Inconștient / Agitat (Cu Linie)",
            "Administrare IV de glucoză hipertonică.",
            "Glucosmón (G50%) + Perfuzie SG 10%.",
          ],
        },
        {
          colsES: [
            "Inconsciente (Sin Vía)",
            "Vía SC/IM o rectal si no hay acceso.",
            "Glucagón IM/SC (repetible 30min) o Enema Glucosado.",
          ],
          colsRO: [
            "Inconștient (Fără Linie)",
            "Calea SC/IM sau rectal dacă nu e acces.",
            "Glucagon IM/SC (repetabil 30min) sau Clismă Glucozată.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Hiperglucemia y Diagnóstico",
      textRO: "2. Hiperglicemie și Diagnostic",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Glucemia Normal: 70 - 100 mg/dl.",
          textRO: "Glicemie Normală: 70 - 100 mg/dl.",
        },
        {
          icon: AlertTriangle,
          textES: "Prediabetes: 100 - 125 mg/dl (ayunas).",
          textRO: "Prediabet: 100 - 125 mg/dl (jeun).",
        },
        {
          icon: Zap,
          textES: "Diabetes: > 126 mg/dl (ayunas x2) o > 200 mg/dl (al azar + síntomas).",
          textRO: "Diabet: > 126 mg/dl (jeun x2) sau > 200 mg/dl (aleator + simptome).",
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Droplet,
      titleES: "HORMONAS PANCREÁTICAS",
      textES: "Insulina: Disminuye glucemia (beta-pancreática). Glucagón: Aumenta glucemia (alfa-pancreática).",
      titleRO: "HORMONI PANCREATICI",
      textRO: "Insulină: Scade glicemia (beta-pancreatic). Glucagon: Crește glicemia (alfa-pancreatic).",
    },
  ],
};
