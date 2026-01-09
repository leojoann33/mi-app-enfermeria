import {
  Brain,
  Timer,
  Activity,
  AlertOctagon,
  Eye,
  Zap,
} from "lucide-react";

export const INTERNAL_2_TOPIC_1 = {
  id: "internal-2-1",
  titleES: "Medicina Interna: Ictus (ACV) - Código Ictus",
  titleRO: "Medicină Internă: AVC (Accident Vascular) - Cod AVC",
  isExpert: true,
  learningObjectives: [
    "Activación Código Ictus: Escala B.E.F.A.S.T.",
    "Cuidados en Fibrinólisis (tPA).",
    "Manejo de la Tensión Arterial en fase aguda.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tiempo es Cerebro: B.E.F.A.S.T.",
      textRO: "1. Timpul este Creier: B.E.F.A.S.T.",
    },
    {
      type: "table",
      headersES: ["Sigla", "Signo a evaluar"],
      headersRO: ["Siglă", "Semn de evaluat"],
      rows: [
        { colsES: ["B (Balance)", "Pérdida de equilibrio o coordinación."], colsRO: ["B (Balance)", "Pierdere echilibru sau coordonare."] },
        { colsES: ["E (Eyes)", "Pérdida de visión (uno o ambos ojos)."], colsRO: ["E (Eyes)", "Pierdere vedere (unul sau ambii ochi)."] },
        { colsES: ["F (Face)", "Cara caída. Pide que sonría."], colsRO: ["F (Face)", "Față căzută. Cere să zâmbească."] },
        { colsES: ["A (Arm)", "Debilidad en brazo. Pide que levante ambos."], colsRO: ["A (Arm)", "Slăbiciune braț. Cere să ridice ambele."] },
        { colsES: ["S (Speech)", "Habla rara o ininteligible."], colsRO: ["S (Speech)", "Vorbire ciudată sau ininteligibilă."] },
        { colsES: ["T (Time)", "¡LLAMAR AL 112 / CÓDIGO ICTUS YA!"], colsRO: ["T (Time)", "SUNĂ LA 112 / COD AVC ACUM!"] },
      ],
    },
    {
      type: "h3",
      textES: "2. Manejo Agudo y Fibrinólisis",
      textRO: "2. Management Acut și Fibrinoliză",
    },
    {
      type: "list",
      items: [
        {
          icon: Zap,
          textES: "Ventana Terapéutica: 4.5 horas para tPA (Alteplasa). Hasta 24h para Trombectomía Mecánica (según imagen).",
          textRO: "Fereastră Terapeutică: 4.5 ore pentru tPA (Alteplasă). Până la 24h pentru Trombectomie Mecanică (conform imagisticii).",
        },
        {
          icon: Activity,
          textES: "Tensión Arterial: NO bajarla bruscamente. El cerebro necesita presión para perfundir la zona de penumbra. Permitimos hasta 185/110 si va a fibrinolisis, o 220/120 si no.",
          textRO: "Tensiune Arterială: NU o scădeți brusc. Creierul are nevoie de presiune pentru a perfuza zona de penumbră. Permitem până la 185/110 dacă merge la fibrinoliză, sau 220/120 dacă nu.",
        },
        {
          icon: AlertOctagon,
          textES: "Contraindicaciones tPA: Ictus hemorrágico, cirugía reciente, anticoagulantes orales (INR > 1.7), plaquetas bajas.",
          textRO: "Contraindicații tPA: AVC hemoragic, chirurgie recentă, anticoagulante orale (INR > 1.7), trombocite scăzute.",
        },
      ],
    },
  ],
};
