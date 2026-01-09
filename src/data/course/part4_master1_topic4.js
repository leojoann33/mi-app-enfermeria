import {
  Footprints,
  Activity,
  Zap,
  AlertOctagon,
  Search,
  Scale,
} from "lucide-react";

export const MASTER_1_TOPIC_4 = {
  id: "master-1-4",
  titleES: "Masterclass 4: Diagnóstico Diferencial de Úlceras Complejas",
  titleRO: "Masterclass 4: Diagnosticul Diferențial al Ulcerelor Complexe",
  isExpert: true,
  learningObjectives: [
    "Diferenciar úlceras venosas, arteriales y neuropáticas por clínica.",
    "Interpretar e index Tobillo-Brazo (ITB / ABI).",
    "Identificar las banderas rojas que contraindican la compresión.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. La Triada de la Pierna: ¿Venas, Arterias o Nervios?",
      textRO: "1. Triada Piciorului: Vene, Artere sau Nervi?",
    },
    {
      type: "table",
      headersES: ["Característica", "Úlcera VENOSA", "Úlcera ARTERIAL (Isquémica)", "Úlcera NEUROPÁTICA (Pie Diabético)"],
      headersRO: ["Caracteristică", "Ulcer VENOS", "Ulcer ARTERIAL (Ischemic)", "Ulcer NEUROPAT (Picior Diabetic)"],
      rows: [
        {
          colsES: [
            "Localización",
            "Polaina (zona gaiter), maleolo interno. Tibia distal.",
            "Punta de dedos, talón, dorso del pie, zonas de trauma.",
            "Planta del pie, cabezas de metatarsianos (zonas de presión).",
          ],
          colsRO: [
            "Localizare",
            "Gambă (zona gaiter), maleolă internă. Tibia distală.",
            "Vârfurile degetelor, călcâi, dorsul piciorului, zone de traumă.",
            "Talpa piciorului, capetele metatarsienelor (zone de presiune).",
          ],
        },
        {
          colsES: [
            "Bordes y Lecho",
            "Bordes irregulares, lecho rojo superficial, mucho exudado.",
            "Bordes 'en sacabocados' (perfectos), lecho pálido/seco/necrótico.",
            "Bordes con callo (hiperqueratosis) grueso (halo), profunda.",
          ],
          colsRO: [
            "Margini și Pat",
            "Margini neregulate, pat roșu superficial, mult exudat.",
            "Margini 'tăiate cu preduceaua' (perfecte), pat palid/uscat/necrotic.",
            "Margini cu calus (hiperkeratoză) gros (halou), profundă.",
          ],
        },
        {
          colsES: [
            "Dolor",
            "Alivia al elevar la pierna. Pesadez.",
            "¡Muy dolorosa! (Claudicación). Empeora al elevar (falta sangre).",
            "INDOLORA (Pérdida de sensibilidad protectora).",
          ],
          colsRO: [
            "Durere",
            "Ameliorează la ridicarea piciorului. Greutate.",
            "Foarte dureroasă! (Claudicație). Se agravează la ridicare.",
            "NEdureroasă (Pierderea sensibilității protectoare).",
          ],
        },
        {
          colsES: [
            "Piel Circundante",
            "Dermatitis ocre (marrón), eczema, lipodermatoesclerosis (dura).",
            "Pálida, brillante, sin vello, fría, uñas distróficas.",
            "Piel seca, grietas, deformidad ósea (Charcot), caliente.",
          ],
          colsRO: [
            "Piele Înconjurătoare",
            "Dermatită ocră (maro), eczemă, lipodermatoscleroză (dură).",
            "Palidă, lucioasă, fără păr, rece, unghii distrofice.",
            "Piele uscată, fisuri, deformare osoasă (Charcot), caldă.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Índice Tobillo-Brazo (ITB / ABI): El 'Semáforo' de la Compresión",
      textRO: "2. Indicele Glezna-Braț (ITB / ABI): 'Semaforul' Compresiei",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Activity,
      titleES: "PROTOCOLOS DE COMPRESIÓN SEGÚN ITB",
      textES: "La terapia compresiva es el Gold Standard para venosas, pero PROHIBIDA en arteriales graves. Mide siempre la TA sístolica en tobillo vs brazo (Doppler).",
      titleRO: "PROTOCOALE DE COMPRESIE CONFORM ITB",
      textRO: "Terapia compresivă este Standardul de Aur pentru venoase, dar INTERZISĂ în arteriale grave. Măsurați întotdeauna TA sistolică la gleznă vs braț (Doppler).",
    },
    {
      type: "list",
      items: [
        {
          icon: Scale,
          textES: "ITB 0.8 - 1.2: NORMAL -> Compresión Fuerte (40 mmHg) segura.",
          textRO: "ITB 0.8 - 1.2: NORMAL -> Compresie Puternică (40 mmHg) sigură.",
        },
        {
          icon: AlertOctagon,
          textES: "ITB 0.5 - 0.8: Enfermedad Arterial MODERADA -> Compresión reducida (20 mmHg) con precaución.",
          textRO: "ITB 0.5 - 0.8: Boală Arterială MODERATĂ -> Compresie redusă (20 mmHg) cu precauție.",
        },
        {
          icon: Zap,
          textES: "ITB < 0.5: Enfermedad Arterial CRÍTICA -> ¡PROHIBIDO COMPRIMIR! Derivar a Vascular urgente.",
          textRO: "ITB < 0.5: Boală Arterială CRITICĂ -> INTERZISĂ COMPRESIA! Trimitere urgentă la Vascular.",
        },
        {
          icon: Search,
          textES: "ITB > 1.3: Calcificación arterial (Falso normal). Típico en diabéticos. Requiere Índice Dedo-Brazo.",
          textRO: "ITB > 1.3: Calcifiere arterială (Fals normal). Tipic la diabetici. Necesită Indice Deget-Braț.",
        },
      ],
    },
  ],
};
