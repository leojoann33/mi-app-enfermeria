import {
  HeartCrack,
  Activity,
  AlertCircle,
  Stethoscope,
} from "lucide-react";

export const CLINICAL_9_TOPIC_2 = {
  id: "part7_clinical9_topic2",
  titleES: "Patología Cardíaca: Isquemia e HTA",
  titleRO: "Patologie Cardiacă: Ischemie și HTA",
  isExpert: false,
  learningObjectives: [
    "Diferenciar Angina de Pecho de Infarto (IAM).",
    "Identificar signos de Insuficiencia Cardiaca (Derecha vs Izquierda).",
    "Manejo básico de la Hipertensión Arterial (HTA).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Cardiopatía Isquémica",
      textRO: "1. Cardiopatie Ischemică",
    },
    {
      type: "table",
      headersES: ["Tipo", "Características", "Biomarcadores"],
      headersRO: ["Tip", "Caracteristici", "Biomarkeri"],
      rows: [
        {
          colsES: ["Angina", "Dolor opresivo al esfuerzo, cede con reposo/nitratos. SIN necrosis.", "Troponinas Negativas."],
          colsRO: ["Angină", "Durere opresivă la efort, cedează la repaus/nitrați. FĂRĂ necroză.", "Troponine Negative."],
        },
        {
          colsES: ["Infarto (IAM)", "Dolor persistente (>20min), síntomas vegetativos. NECROSIS.", "Troponinas POSITIVAS (Elevadas)."],
          colsRO: ["Infarct (IAM)", "Durere persistentă (>20min), simptome vegetative. NECROZĂ.", "Troponine POZITIVE (Crescute)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Insuficiencia Cardiaca (IC)",
      textRO: "2. Insuficiență Cardiacă (IC)",
    },
    {
      type: "list",
      items: [
        {
          icon: HeartCrack,
          textES: "IC Izquierda: Congestión pulmonar (Disnea, Ortopnea, Crepitantes, EAP).",
          textRO: "IC Stângă: Congestie pulmonară (Dispnee, Ortopnee, Raluri, EAP).",
        },
        {
          icon: Activity,
          textES: "IC Derecha: Congestión sistémica (Edemas maleolares, Ingurgitación yugular, Hepatomegalia).",
          textRO: "IC Dreaptă: Congestie sistemică (Edeme maleolare, Ingurgitare jugulară, Hepatomegalie).",
        },
      ],
    },
    {
      type: "alert",
      variant: "warning",
      icon: Stethoscope,
      titleES: "Hipertensión Arterial (HTA)",
      textES: "Principal factor de riesgo. TAS > 140 o TAD > 90 mmHg. Tratamiento escalonado (IECA/ARA-II, Calcioantagonistas, Diuréticos).",
      titleRO: "Hipertensiune Arterială (HTA)",
      textRO: "Factor de risc principal. TAS > 140 sau TAD > 90 mmHg. Tratament în trepte (IECA/ARA-II, Blocanți Ca, Diuretice).",
    },
    {
      type: "h3",
      textES: "3. Fármacos en Cardiología (Resumen)",
      textRO: "3. Medicamente în Cardiologie (Rezumat)",
    },
    {
      type: "list",
      items: [
        {
          icon: AlertCircle,
          textES: "Antiagregantes: AAS, Clopidogrel.",
          textRO: "Antiagregante: AAS, Clopidogrel.",
        },
        {
          icon: Activity,
          textES: "Antihipertensivos: IECAs (Enalapril), ARA-II (Valsartán), Betabloqueantes (Bisoprolol).",
          textRO: "Antihipertensive: IECA (Enalapril), ARA-II (Valsartan), Beta-blocante (Bisoprolol).",
        },
      ],
    },
  ],
};
