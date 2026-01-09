import {
  Siren,
  Scan,
  Activity,
  AlertTriangle,
} from "lucide-react";

export const CLINICAL_8_TOPIC_1 = {
  id: "part7_clinical8_topic1",
  titleES: "Código Ictus y Síndromes",
  titleRO: "Cod AVC și Sindroame",
  isExpert: false,
  learningObjectives: [
    "Reconocer síntomas de alerta del Ictus (Escala Cincinnati/FAST).",
    "Identificar síndromes vasculares: ACM (media) vs ACA (anterior) vs Posterior.",
    "Comprender la importancia del TAC y la ventana terapéutica.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Código Ictus y Activación",
      textRO: "1. Cod AVC și Activare",
    },
    {
      type: "alert",
      variant: "error",
      icon: Siren,
      titleES: "TIEMPO ES CEREBRO",
      textES: "Cada minuto cuenta. Escala CINCINNATI (FAST): Cara desviada (Face), Brazo débil (Arm), Habla alterada (Speech) -> LLAMAR 112 (Time).",
      titleRO: "TIMPUL ESTE CREIER",
      textRO: "Fiecare minut contează. Scala CINCINNATI (FAST): Față deviată (Face), Braț slab (Arm), Vorbire alterată (Speech) -> SUNĂ 112 (Time).",
    },
    {
      type: "h3",
      textES: "2. Síndromes Vasculares",
      textRO: "2. Sindroame Vasculare",
    },
    {
      type: "table",
      headersES: ["Arteria", "Clínica Principal"],
      headersRO: ["Arteră", "Clinică Principală"],
      rows: [
        {
          colsES: ["Cerebral Media (ACM)", "Hemiparesia + Hemihipoestesia contralateral (Cara/Brazo > Pierna). Disartria/Afasia (si hemisferio dominante)."],
          colsRO: ["Cerebrală Medie (ACM)", "Hemipareză + Hemihipoestezie contralaterală (Față/Braț > Picior). Dizartrie/Afazie (dacă emisfer dominant)."],
        },
        {
          colsES: ["Cerebral Anterior (ACA)", "Afectación PREDOMINIO PIERNA contralateral. Cambios comportamiento (frontal)."],
          colsRO: ["Cerebrală Anterioară (ACA)", "Afectare PREDOMINANT PICIOR contralateral. Schimbări comportament (frontal)."],
        },
        {
          colsES: ["Vertebrobasilar (Posterior)", "Vértigo, Ataxia, Nistagmo, Disfagia (Pares bajos), Alteración conciencia."],
          colsRO: ["Vertebrobazilar (Posterior)", "Vertij, Ataxie, Nistagmus, Disfagie (Nervi cranieni), Alterare conștiență."],
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          icon: Scan,
          textES: "TAC Simple: Diferencia Isquémico vs Hemorrágico. Descarta tumores.",
          textRO: "CT Simplu: Diferențiază Ischemic vs Hemoragic. Exclude tumori.",
        },
        {
          icon: Activity,
          textES: "Angio-TAC: Localiza la oclusión vascular (candidato a trombectomía).",
          textRO: "Angio-CT: Localizează ocluzia vasculară (candidat la trombectomie).",
        },
      ],
    },
  ],
};
