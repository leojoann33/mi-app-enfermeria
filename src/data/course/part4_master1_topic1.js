import {
  Microscope,
  Layers,
  Clock,
  Activity,
  AlertTriangle,
  Beaker,
} from "lucide-react";

export const MASTER_1_TOPIC_1 = {
  id: "master-1-1",
  titleES: "Masterclass 1: Fisiología avanzada de la reparación tisular",
  titleRO: "Masterclass 1: Fiziologia avansată a reparației tisulare",
  // EXPERT LEVEL METADATA
  isExpert: true, 
  learningObjectives: [
    "Analizar la cascada bioquímica de la cicatrización a nivel celular.",
    "Diferenciar el rol de las metaloproteinasas (MMPs) y sus inhibidores (TIMPs).",
    "Identificar las citoquinas clave en la fase inflamatoria crónica.",
  ],
  content: [
    {
      type: "alert",
      variant: "expert", // New Variant for Expert Content
      icon: Microscope,
      titleES: "NIVEL EXPERTO: REFERENCIA CLÍNICA",
      textES: "Este contenido se basa en 'Cuidado y atención de heridas (3.ª ed.) - Patricia A. Slachta'. Profundiza en la biología molecular de la herida para la toma de decisiones avanzadas.",
      titleRO: "NIVEL EXPERT: REFERINȚĂ CLINICĂ",
      textRO: "Acest conținut se bazează pe 'Wound Care Made Incredibly Easy (3rd ed.)'. Aprofundează biologia moleculară a plăgii pentru luarea deciziilor avansate.",
    },
    {
      type: "h3",
      textES: "1. La Cascada de Reparación: Más allá de lo visible",
      textRO: "1. Cascada de Reparare: Dincolo de vizibil",
    },
    {
      type: "p",
      textES: "La cicatrización no es un evento lineal simple, sino una orquestación compleja de señalización celular. El fallo en esta secuencia lleva a la cronicidad.",
      textRO: "Vindecarea nu este un eveniment liniar simplu, ci o orchestrare complexă a semnalizării celulare. Eșecul în această secvență duce la cronicizare.",
    },
    {
      type: "table",
      headersES: ["Fase", "Cronología", "Eventos Celulares Críticos", "Mediadores Clave"],
      headersRO: ["Fază", "Cronologie", "Evenimente Celulare Critice", "Mediatori Cheie"],
      rows: [
        {
          colsES: [
            "Hemostasia",
            "Inmediata (minutos)",
            "Vasoconstricción refleja. Agregación plaquetaria. Formación del tapón de fibrina.",
            "Tromboxano A2, Fibrinógeno.",
          ],
          colsRO: [
            "Hemostază",
            "Imediată (minute)",
            "Vasoconstricție reflexă. Agregare plachetară. Formarea dopului de fibrină.",
            "Tromboxan A2, Fibrinogen.",
          ],
        },
        {
          colsES: [
            "Inflamación",
            "Días 1-4 (hasta 6)",
            "Llegada de Neutrófilos (limpieza) seguidos de Macrófagos (los 'directores' de la orquesta).",
            "Citoquinas proinflamatorias (IL-1, TNF-α), Factores de crecimiento (PDGF, TGF-β).",
          ],
          colsRO: [
            "Inflamație",
            "Zilele 1-4 (până la 6)",
            "Sosirea Neutrofilelor (curățare) urmate de Macrofage ('dirijorii' orchestrei).",
            "Citokine proinflamatorii (IL-1, TNF-α), Factori de creștere (PDGF, TGF-β).",
          ],
        },
        {
          colsES: [
            "Proliferación",
            "Días 4-21",
            "Angiogénesis (nuevos vasos). Fibroplasia (colágeno III). Epitelización (queratinocitos).",
            "VEGF (Endotelial), FGF (Fibroblastos).",
          ],
          colsRO: [
            "Proliferare",
            "Zilele 4-21",
            "Angiogeneză (vase noi). Fibroplazie (colagen III). Epitelizare (keratinocite).",
            "VEGF (Endotelial), FGF (Fibroblaste).",
          ],
        },
        {
          colsES: [
            "Maduración",
            "Día 21 - 2 años",
            "Remodelado. Reemplazo de Colágeno III (inmaduro) por Colágeno I (resistente). Apoptosis celular.",
            "Equilibrio MMPs / TIMPs.",
          ],
          colsRO: [
            "Maturare",
            "Ziua 21 - 2 ani",
            "Remodelare. Înlocuirea Colagenului III (imatur) cu Colagen I (rezistent). Apoptoză celulară.",
            "Echilibru MMPs / TIMPs.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. El Enemigo Invisible: Desequilibrio MMPs/TIMPs",
      textRO: "2. Inamicul Invizibil: Dezechilibru MMPs/TIMPs",
    },
    {
      type: "p",
      textES: "En heridas crónicas, la fase inflamatoria se perpetúa. Esto provoca un exceso de Metaloproteinasas de Matriz (MMPs) que destruyen no solo el tejido necrótico, sino también los factores de crecimiento y la matriz extracelular nueva. Es la 'autodigestión' de la herida.",
      textRO: "În plăgile cronice, faza inflamatorie se perpetuează. Acest lucru provoacă un exces de Metaloproteinaze de Matrice (MMP) care distrug nu doar țesutul necrotic, ci și factorii de creștere și noua matrice extracelulară. Este 'autodigestia' plăgii.",
    },
    {
      type: "list",
      items: [
        {
          icon: Beaker,
          textES: "MMP-2 y MMP-9 (Gelatinasas): Elevadas en úlceras crónicas, degradan colágeno IV (membrana basal).",
          textRO: "MMP-2 și MMP-9 (Gelatinaze): Crescute în ulcere cronice, degradează colagenul IV (membrana bazală).",
        },
        {
          icon: AlertTriangle,
          textES: "TIMPs (Tissue Inhibitors of MMPs): En heridas estancadas, sus niveles son insuficientes para frenar a las MMPs.",
          textRO: "TIMPs (Inhibitori Tisulari ai MMP): În plăgi stagnante, nivelurile lor sunt insuficiente pentru a frâna MMP-urile.",
        },
        {
          icon: Activity,
          textES: "Implicación Terapéutica: Uso de apósitos moduladores (ej. Colágeno, ORC) que 'sacrifican' sustrato para 'distraer' a las MMPs.",
          textRO: "Implicație Terapeutică: Utilizarea pansamentelor modulatoare (ex. Colagen, ORC) care 'sacrifică' substrat pentru a 'distrage' MMP-urile.",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      titleES: "CONCEPTO CLAVE DE EXPERTO",
      textES: "Una herida que no reduce su tamaño en un 30% en 4 semanas TIENE un problema bioquímico subyacente (biofilm o exceso de MMPs), no solo de técnica de cura. Revaluar etiología.",
      titleRO: "CONCEPT CHEIE DE EXPERT",
      textRO: "O plagă care nu își reduce dimensiunea cu 30% în 4 săptămâni ARE o problemă biochimică subiacentă (biofilm sau exces de MMP), nu doar de tehnică de pansare. Reevaluați etiologia.",
    },
  ],
};
