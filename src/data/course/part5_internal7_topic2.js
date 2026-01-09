import {
  Thermometer,
  Disc,
  Syringe,
  AlertOctagon,
  Footprints,
} from "lucide-react";

export const INTERNAL_7_TOPIC_2 = {
  id: "internal-7-2",
  titleES: "Medicina Interna: Urgencias Articulares",
  titleRO: "Medicină Internă: Urgențe Articulare",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Artritis Séptica de Artritis por Cristales (Gota).",
    "Preparación y asistencia en la Artrocentesis.",
    "Manejo del dolor agudo en brotes.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Monoartritis Aguda: ¿Infección o Gota?",
      textRO: "1. Monoartrită Acută: Infecție sau Gută?",
    },
    {
      type: "p",
      textES: "Una rodilla roja, caliente e hinchada es una urgencia hasta que se demuestre lo contrario (Artritis Séptica destruye la articulación en horas).",
      textRO: "Un genunchi roșu, fierbinte și umflat este urgență până la proba contrarie (Artrita Septică distruge articulația în ore).",
    },
    {
      type: "table",
      headersES: ["Criterio", "Artritis Séptica", "Gota (Cristales)"],
      headersRO: ["Criteriu", "Artrită Septică", "Gută (Cristale)"],
      rows: [
        { colsES: ["Inicio", "Rápido (Horas/Días).", "Súbito (A menudo nocturno, 'sábana duele')."], colsRO: ["Debut", "Rapid (Ore/Zile).", "Subit (Adesea nocturn, 'doare cearșaful')."] },
        { colsES: ["Fiebre", "Frecuente y alta.", "Posible, pero leve."], colsRO: ["Febră", "Frecventă și mare.", "Posibilă, dar ușoară."] },
        { colsES: ["Puerta de Entrada", "Herida, cirugía previa, infección a distancia.", "Dieta, alcohol, diuréticos."], colsRO: ["Poartă Intrare", "Plagă, chirurgie anterioară, infecție la distanță.", "Dietă, alcool, diuretice."] },
        { colsES: ["Líquido Sinovial", "Purulento. > 50.000 leucocitos.", "Turbio. Cristales intra-celulares."], colsRO: ["Lichid Sinovial", "Purulent. > 50.000 leucocite.", "Tulbure. Cristale intra-celulare."] },
      ],
    },
    {
      type: "h3",
      textES: "2. La Artrocentesis",
      textRO: "2. Artrocenteza",
    },
    {
      type: "list",
      items: [
        {
          icon: Syringe,
          textES: "Técnica: Estéril absoluta. Enfermería prepara campo y tubos (Bioquímica, Microbiología y Cristales).",
          textRO: "Tehnică: Sterilă absolută. Asistența pregătește câmp și eprubete (Biochimie, Microbiologie și Cristale).",
        },
        {
          icon: AlertOctagon,
          textES: "¡NUNCA INFILTRAR CORTICOIDES... sin descartar infección! Si inyectas corticoides en una articulación séptica, aceleras la destrucción ósea.",
          textRO: "NU INFILTRAȚI NICIODATĂ CORTICOIZI... fără a exclude infecția! Dacă injectați corticoizi într-o articulație septică, accelerați distrugerea osoasă.",
        },
      ],
    },
  ],
};
