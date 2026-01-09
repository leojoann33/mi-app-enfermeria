import {
  HeartHandshake,
  Syringe,
  Ghost,
} from "lucide-react";

export const CLINICAL_14_TOPIC_2 = {
  id: "part7_clinical14_topic2",
  titleES: "Paliativos: Síntomas y Sedación",
  titleRO: "Paliative: Simptome și Sedare",
  isExpert: false,
  learningObjectives: [
    "Manejo de síntomas en fase terminal (Disnea, Estertores, Dolor).",
    "Diferenciar Sedación Paliativa de Sedación Terminal (Agonía).",
    "Comprender el proceso de Duelo.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Control de Síntomas",
      textRO: "1. Controlul Simptomelor",
    },
    {
      type: "table",
      headersES: ["Síntoma", "Fármacos de Elección"],
      headersRO: ["Simptom", "Medicamente de Elecție"],
      rows: [
        {
          colsES: ["Dolor Oncológico", "Escalera OMS: 1. No opioides -> 2. Opioides débiles (Tramadol) -> 3. Potentes (Morfina)."],
          colsRO: ["Durere Oncologică", "Scara OMS: 1. Non-opioide -> 2. Opioide slabe (Tramadol) -> 3. Puternice (Morfină)."],
        },
        {
          colsES: ["Disnea", "Morfina (bajas dosis) + Midazolam (ansiolítico)."],
          colsRO: ["Dispnee", "Morfină (doze mici) + Midazolam (ansiolitic)."],
        },
        {
          colsES: ["Estertores premortem", "Anticolinérgicos: Buscapina o Escopolamina (reducen secreciones)."],
          colsRO: ["Raluri pre-mortem", "Anticolinergice: Buscopan sau Scopolamină (reduc secrețiile)."],
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Syringe,
      titleES: "Sedación Paliativa vs Terminal",
      textES: "Paliativa: Alivio de síntomas refractarios (puede ser reversible). Terminal (En la agonía): Disminuir consciencia ante muerte inminente para evitar sufrimiento (Midazolam SC/IV).",
      titleRO: "Sedare Paliativă vs Terminală",
      textRO: "Paliativă: Ameliorare simptome refractare (poate fi reversibilă). Terminală (În agonie): Scădere conștiență la moarte iminentă pentru evitare suferință (Midazolam SC/IV).",
    },
    {
      type: "h3",
      textES: "2. La Agonía y el Duelo",
      textRO: "2. Agonia și Doliul",
    },
    {
      type: "list",
      items: [
        {
          icon: Ghost,
          textES: "Signos de Agonía: Nariz fría, livideces, respiración Cheyne-Stokes, pérdida de tono muscular (hipotonía).",
          textRO: "Semne de Agonie: Nas rece, lividități, respirație Cheyne-Stokes, pierdere tonus muscular (hipotonie).",
        },
        {
          icon: HeartHandshake,
          textES: "Duelo: Reacción natural ante la pérdida. Apoyo familiar y evitar obstinación terapéutica.",
          textRO: "Doliu: Reacție naturală la pierdere. Suport familial și evitare obstinație terapeutică.",
        },
      ],
    },
  ],
};
