import {
  Syringe,
  Timer,
  Activity,
  BedDouble,
} from "lucide-react";

export const CLINICAL_8_TOPIC_2 = {
  id: "part7_clinical8_topic2",
  titleES: "Tratamiento y Cuidados Post-Ictus",
  titleRO: "Tratament și Îngrijiri Post-AVC",
  isExpert: false,
  learningObjectives: [
    "Diferenciar fibrinolisis IV (Ventana corta) de Trombectomía Mecánica (Ventana larga).",
    "Monitorización crítica en las primeras 24h (TA, Glucemia, Tª).",
    "Cuidados de enfermería para prevenir complicaciones (Disfagia, UPP).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tratamiento de Reperfusión",
      textRO: "1. Tratament de Reperfuzie",
    },
    {
      type: "table",
      headersES: ["Terapia", "Fármaco/Técnica", "Ventana/Consideraciones"],
      headersRO: ["Terapie", "Medicament/Tehnică", "Fereastră/Considerații"],
      rows: [
        {
          colsES: ["Fibrinolisis IV", "Alteplasa (rTPA) 0.9 mg/kg.", "< 4.5 horas. Objetivo: Disolver trombo. Riesgo hemorragia."],
          colsRO: ["Fibrinoliză IV", "Alteplase (rTPA) 0.9 mg/kg.", "< 4.5 ore. Obiectiv: Dizolvare tromb. Risc hemoragie."],
        },
        {
          colsES: ["Trombectomía", "Stent Retriever (Mecánica).", "Hasta 24h (según imagen). Oclusión gran vaso."],
          colsRO: ["Trombectomie", "Stent Retriever (Mecanică).", "Până la 24h (după imagistică). Ocluzie vas mare."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Cuidados de Enfermería (Fase Aguda)",
      textRO: "2. Îngrijiri de Asistență (Faza Acută)",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Tensión Arterial: Mantener < 185/110 mmHg si se fibrinoliza. Evitar hipotensión brusca.",
          textRO: "Tensiune Arterială: Menține < 185/110 mmHg dacă se fibrinolizează. Evită hipotensiunea bruscă.",
        },
        {
          icon: Activity,
          textES: "Glucemia: Evitar HIperglucemia (>150 mg/dl) e Hipo (<60). Ambos aumentan el daño cerebral.",
          textRO: "Glicemie: Evită HIperglicemia (>150 mg/dl) și Hipo (<60). Ambele cresc dauna cerebrală.",
        },
        {
          icon: Timer,
          textES: "Fiebre: Tratar agresivamente Tª > 37.5ºC (Aumenta metabolismo y daño).",
          textRO: "Febră: Tratează agresiv Tª > 37.5ºC (Crește metabolism și daună).",
        },
        {
          icon: BedDouble,
          textES: "Posición: Cabecero 30º (favorece retorno venoso, evita broncoaspiración). Test de Disfagia antes de dieta.",
          textRO: "Poziție: Cap 30º (favorizează retur venos, evită bronhoaspirație). Test Disfagie înainte de dietă.",
        },
      ],
    },
  ],
};
