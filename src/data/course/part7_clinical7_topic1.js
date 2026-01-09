import {
  Brain,
  Zap,
  Shield,
  Activity,
  Droplet,
} from "lucide-react";

export const CLINICAL_7_TOPIC_1 = {
  id: "part7_clinical7_topic1",
  titleES: "Estructura del SNC y Células",
  titleRO: "Structura SNC și Celule",
  isExpert: false,
  learningObjectives: [
    "Identificar los ventrículos cerebrales y la función del LCR.",
    "Diferenciar tipos de células gliales (Oligodendrocitos vs Schwann).",
    "Comprender la transmisión del impulso nervioso (Sinapsis).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Sistema Ventricular y LCR",
      textRO: "1. Sistem Ventricular și LCR",
    },
    {
      type: "p",
      textES: "Líquido Cefalorraquídeo (LCR): 150ml circulantes (PRODUCCIÓN: 500ml/día en Plexos Coroideos). Función: Protección mecánica y eliminación de desechos.",
      textRO: "Lichid Cefalorahidian (LCR): 150ml circulanți (PRODUCȚIE: 500ml/zi în Plexuri Coroide). Funcție: Protecție mecanică și eliminare deșeuri.",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Ventrículos Laterales -> (Agujero Monro) -> 3er Ventrículo -> (Acueducto Silvio) -> 4to Ventrículo.",
          textRO: "Ventriculi Laterali -> (Gaură Monro) -> Al 3-lea Ventricul -> (Apeduct Silvio) -> Al 4-lea Ventricul.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Células del Sistema Nervioso",
      textRO: "2. Celule ale Sistemului Nervos",
    },
    {
      type: "table",
      headersES: ["Célula", "Ubicación", "Función Principal"],
      headersRO: ["Celulă", "Locație", "Funcție Principală"],
      rows: [
        {
          colsES: ["Neurona", "SNC/SNP", "Transmisión impulso (+20mV excitada / -60mV reposo)."],
          colsRO: ["Neuron", "SNC/SNP", "Transmitere impuls (+20mV excitat / -60mV repaus)."],
        },
        {
          colsES: ["Oligodendrocito", "SNC", "Forma vaina de MIELINA en cerebro/médula."],
          colsRO: ["Oligodendrocită", "SNC", "Formează teaca de MIELINĂ în creier/măduvă."],
        },
        {
          colsES: ["Célula de Schwann", "SNP", "Forma vaina de MIELINA en nervios periféricos."],
          colsRO: ["Celulă Schwann", "SNP", "Formează teaca de MIELINĂ în nervi periferici."],
        },
        {
          colsES: ["Astrocito", "SNC", "Soporte y Barrera Hematoencefálica (BHE)."],
          colsRO: ["Astrocită", "SNC", "Suport și Barieră Hematoencefalică (BHE)."],
        },
      ],
    },
  ],
};
