import {
  Activity,
  Syringe,
  Monitor,
  AlertTriangle,
} from "lucide-react";

export const CLINICAL_12_TOPIC_1 = {
  id: "part7_clinical12_topic1",
  titleES: "El Paciente Crítico y Monitorización",
  titleRO: "Pacientul Critic și Monitorizare",
  isExpert: false,
  learningObjectives: [
    "Conocer monitorización específica (BIS, TOF, PVC).",
    "Manejo seguro de drogas vasoactivas (Noradrenalina, Dobutamina).",
    "Sedación y Relajación en UCI.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Monitorización Avanzada",
      textRO: "1. Monitorizare Avansată",
    },
    {
      type: "table",
      headersES: ["Técnica", "Parámetro Medido", "Objetivo"],
      headersRO: ["Tehnică", "Parametru Măsurat", "Obiectiv"],
      rows: [
        {
          colsES: ["BIS (Índice Biespectral)", "Profundidad Anestésica (EEG).", "Evitar despertar intraoperatorio (Valor 40-60)."],
          colsRO: ["BIS (Indice Bispectral)", "Profunzime Anestezică (EEG).", "Evitare trezire intraoperatorie (Valoare 40-60)."],
        },
        {
          colsES: ["TOF (Train of Four)", "Relajación Muscular.", "Monitorizar bloqueo neuromuscular (para IOT/Ventilación)."],
          colsRO: ["TOF (Train of Four)", "Relaxare Musculară.", "Monitorizare blocaj neuromuscular (pentru IOT/Ventilare)."],
        },
        {
          colsES: ["Invasiva (Arterial)", "Presión Arterial contínua.", "Manejo hemodinámico preciso y gasometrías."],
          colsRO: ["Invazivă (Arterială)", "Tensiune Arterială continuă.", "Management hemodinamic precis și gazometrii."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Fármacos de Alto Riesgo",
      textRO: "2. Medicamente de Înalt Risc",
    },
    {
      type: "alert",
      variant: "error",
      icon: Syringe,
      titleES: "Drogas Vasoactivas (DVA)",
      textES: "Administrar por Vía Central (CVC) siempre que sea posible (Riesgo necrosis). Usar Bombas de Infusión. Etiquetado claro.",
      titleRO: "Droguri Vasoactive (DVA)",
      textRO: "Administrare pe Cale Centrală (CVC) oricând posibil (Risc necroză). Folosire Pompe de Infuzie. Etichetare clară.",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Noradrenalina: Vasopresor potente (Aumenta resistencias). Sepsis.",
          textRO: "Noradrenalină: Vasopresor puternic (Crește rezistența). Sepsis.",
        },
        {
          icon: Activity,
          textES: "Dobutamina: Inotrópico (Aumenta contractilidad). IC Descompensada.",
          textRO: "Dobutamină: Inotrop (Crește contractilitatea). IC Decompensată.",
        },
        {
          icon: Monitor,
          textES: "Propofol: Sedante hipnótico (Acción rápida). 'Leche amnésica'.",
          textRO: "Propofol: Sedativ hipnotic (Acțiune rapidă). 'Lapte amnezic'.",
        },
      ],
    },
  ],
};
