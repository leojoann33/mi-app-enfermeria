import {
  Activity,
  UserCheck, 
  ThermometerSnowflake,
  Bandage,
} from "lucide-react";

export const CLINICAL_11_TOPIC_1 = {
  id: "part7_clinical11_topic1",
  titleES: "Lesiones de Partes Blandas y Musculares",
  titleRO: "Leziuni de Părți Moi și Musculare",
  isExpert: false,
  learningObjectives: [
    "Clasificar Esguinces y Lesiones Musculares por grados (I, II, III).",
    "Identificar tipos de Tendinitis comunes (Epicondilitis, De Quervain).",
    "Aplicar tratamiento inicial RICE (Reposo, Hielo, Compresión, Elevación).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Lesiones Musculares",
      textRO: "1. Leziuni Musculare",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Agujetas: Dolor difuso post-esfuerzo (microtraumatismos/láctico).",
          textRO: "Febră musculară: Durere difuză post-efort (microtraumatisme/lactic).",
        },
        {
          icon: Activity,
          textES: "Rotura Fibrilar (Desgarro): 'Signo de la pedrada'. Grados I (Leve), II (Hematoma), III (Grave, 8-12 semanas).",
          textRO: "Ruptură Fibrilară (Sfișiere): 'Semn lovitură piatră'. Grade I (Ușor), II (Hematom), III (Grav, 8-12 săptămâni).",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Esguinces (Ligamentos)",
      textRO: "2. Entorse (Ligamente)",
    },
    {
      type: "table",
      headersES: ["Grado", "Daño", "Clínica/Tratamiento"],
      headersRO: ["Grad", "Daună", "Clinică/Tratament"],
      rows: [
        {
          colsES: ["I", "Distensión (sin rotura).", "Dolor leve. Vendaje funcional."],
          colsRO: ["I", "Distensie (fără ruptură).", "Durere ușoară. Bandaj funcțional."],
        },
        {
          colsES: ["II", "Rotura Parcial.", "Tumefacción + Hematoma. Inmovilización parcial."],
          colsRO: ["II", "Ruptură Parțială.", "Tumefacție + Hematom. Imobilizare parțială."],
        },
        {
          colsES: ["III", "Rotura Completa.", "Inestabilidad articular. Quirúrgico o Inmovilización rígida."],
          colsRO: ["III", "Ruptură Completă.", "Instabilitate articulară. Chirurgical sau Imobilizare rigidă."],
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: ThermometerSnowflake,
      titleES: "Tratamiento Agudo (Primeras 48-72h)",
      textES: "Frío local (20 min c/4h) + Reposo + Vendaje Compresivo. NO CALOR ni masajes en fase aguda.",
      titleRO: "Tratament Acut (Primele 48-72h)",
      textRO: "Rece local (20 min la 4h) + Repaus + Bandaj Compresiv. NU CĂLDURĂ nici masaje în faza acută.",
    },
  ],
};
