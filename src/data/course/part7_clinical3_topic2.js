import {
  Zap,
  Activity,
  Brain,
  Bone,
} from "lucide-react";

export const CLINICAL_3_TOPIC_2 = {
  id: "part7_clinical3_topic2",
  titleES: "Glándulas: Tiroides y Suprarrenales",
  titleRO: "Glande: Tiroida și Suprarenale",
  isExpert: false,
  learningObjectives: [
    "Diferenciar funciones de Corteza vs Médula Suprarrenal.",
    "Comprender el eje TSH-T3/T4 y la función de la Calcitonina.",
    "Relacionar la PTH con el metabolismo del Calcio.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Glándulas Suprarrenales (Adrenales)",
      textRO: "1. Glande Suprarenale (Adrenale)",
    },
    {
      type: "p",
      textES: "Situadas sobre los riñones. Se dividen en Corteza (externa) y Médula (interna).",
      textRO: "Situate deasupra rinichilor. Se împart în Cortex (extern) și Medulară (intern).",
    },
    {
      type: "table",
      headersES: ["Zona", "Hormonas", "Función Principal"],
      headersRO: ["Zonă", "Hormoni", "Funcție Principală"],
      rows: [
        {
          colsES: [
            "Corteza",
            "Glucocorticoides (Cortisol), Mineralcorticoides (Aldosterona).",
            "Cortisol: Estrés, Hiperglucemia, Antiinflamatorio. Aldosterona: Retiene Na+ y Agua.",
          ],
          colsRO: [
            "Cortex",
            "Glucocorticoizi (Cortizol), Mineralocorticoizi (Aldosteron).",
            "Cortizol: Stres, Hiperglicemie, Antiinflamator. Aldosteron: Reține Na+ și Apă.",
          ],
        },
        {
          colsES: [
            "Médula",
            "Catecolaminas (Adrenalina, Noradrenalina).",
            "Respuesta 'Lucha o Huida'. Aumenta TA y FC.",
          ],
          colsRO: [
            "Medulară",
            "Catecolamine (Adrenalină, Noradrenalină).",
            "Răspuns 'Luptă sau Fugi'. Crește TA și FC.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Tiroides y Paratiroides",
      textRO: "2. Tiroida și Paratiroidele",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Células Foliculares (Tiroides): Secretan T3 y T4. Regulan el metabolismo basal. Controladas por TSH.",
          textRO: "Celule Foliculare (Tiroida): Secretă T3 și T4. Reglează metabolismul bazal. Controlate de TSH.",
        },
        {
          icon: Bone,
          textES: "Células Parafoliculares (Tiroides): Secretan Calcitonina -> REDUCE el Calcio en sangre.",
          textRO: "Celule Parafoliculare (Tiroida): Secretă Calcitonina -> SCADE Calciul în sânge.",
        },
        {
          icon: Zap,
          textES: "Glándulas Paratiroides (4 'guisantes'): Secretan PTH (Parathormona) -> AUMENTA el Calcio en sangre.",
          textRO: "Glande Paratiroide (4 'mazăre'): Secretă PTH (Parathormon) -> CREȘTE Calciul în sânge.",
        },
      ],
    },
  ],
};
