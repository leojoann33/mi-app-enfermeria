import {
  Syringe,
  Pipette,
  Droplet,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const CLINICAL_2_TOPIC_2 = {
  id: "part7_clinical2_topic2",
  titleES: "Material: Agujas, Catéteres y Extracciones",
  titleRO: "Material: Ace, Catetere și Extracții",
  isExpert: false,
  learningObjectives: [
    "Identificar calibres de agujas por código de color (G - Gauge).",
    "Conocer el orden de llenado de tubos de analítica.",
    "Diferenciar tipos de punta (Biselada vs Cónica).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Agujas Hipodérmicas: Código de Colores (G)",
      textRO: "1. Ace Hipodermice: Codul culorilor (G)",
    },
    {
      type: "p",
      textES: "El calibre se mide en Gauge (G). A mayor G, más fina es la aguja. El color del cono es estándar ISO.",
      textRO: "Calibrul se măsoară în Gauge (G). Cu cât G e mai mare, acul e mai fin. Culoarea conului este standard ISO.",
    },
    {
      type: "table",
      headersES: ["Color", "Calibre (G)", "Uso Principal"],
      headersRO: ["Culoare", "Calibru (G)", "Utilizare Principală"],
      rows: [
        {
          colsES: ["Rosa", "18G (Gruesa)", "Carga de medicación, Transfusiones."],
          colsRO: ["Roz", "18G (Gros)", "Încărcare medicație, Transfuzii."],
        },
        {
          colsES: ["Amarillo", "20G", "Venopunción, Extracciones."],
          colsRO: ["Galben", "20G", "Venopuncție, Extracții."],
        },
        {
          colsES: ["Verde", "21G", "Intramuscular (Glúteo)."],
          colsRO: ["Verde", "21G", "Intramuscular (Fesier)."],
        },
        {
          colsES: ["Negra/Gris", "22G/27G", "Intramuscular niños / Intradérmica."],
          colsRO: ["Negru/Gri", "22G/27G", "Intramuscular copii / Intradermică."],
        },
        {
          colsES: ["Naranja", "25G/29G", "Subcutánea (Insulina/Heparina)."],
          colsRO: ["Portocaliu", "25G/29G", "Subcutanată (Insulină/Heparină)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Punciones Especiales",
      textRO: "2. Puncții Speciale",
    },
    {
      type: "list",
      items: [
        {
          icon: Syringe,
          textES: "Punción Lumbar: Aguja tipo Quincke (Biselada, corta, más cefalea) vs Whitacre (Punta de lápiz/Cónica, a-traumática, menos cefalea).",
          textRO: "Puncție Lombară: Ac tip Quincke (Bizitat, taie, mai multă cefalee) vs Whitacre (Vârf de creion/Conic, a-traumatic, mai puțină cefalee).",
        },
        {
          icon: Droplet,
          textES: "Gasometría Arterial: Se suele usar aguja azul (23G) heparinizada.",
          textRO: "Gazometrie Arterială: Se folosește de obicei ac albastru (23G) heparinizat.",
        },
      ],
    },
    {
      type: "alert",
      variant: "warning",
      icon: AlertTriangle,
      titleES: "SEGURIDAD DE CONEXIONES",
      textES: "Conexión Luer/Luer-Lock: Para vía venosa/arterial. Conexión ENFIT (diferente calibre): Para vía enteral/Sondaje, evita errores mortales de conexión cruzada.",
      titleRO: "SIGURANȚA CONEXIUNILOR",
      textRO: "Conexiune Luer/Luer-Lock: Pt cale venoasă/arterială. Conexiune ENFIT (calibru diferit): Pt cale enterală/Sondaj, evită greșeli mortale de conexiune încrucișată.",
    },
  ],
};
