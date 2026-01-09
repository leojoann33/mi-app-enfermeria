import {
  Syringe,
  Scale,
  ClipboardCheck,
  BedDouble,
  FileSignature,
} from "lucide-react";

export const PALLIATIVE_4_TOPIC_2 = {
  id: "part6_palliative4_topic2",
  titleES: "Sedación Paliativa: Protocolo y Ética",
  titleRO: "Sedare Paliativă: Protocol și Etică",
  isExpert: true,
  learningObjectives: [
    "Concepto de Síntoma Refractario (Indicación de sedación).",
    "Diferencia ética entre Sedación y Eutanasia.",
    "Fármacos y dosis de inducción/mantenimiento.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. ¿Cuándo Sedar? El Síntoma Refractario",
      textRO: "1. Când Sedăm? Simptomul Refractar",
    },
    {
      type: "p",
      textES: "La sedación paliativa está indicada cuando existe un síntoma refractario: aquel que no se puede controlar con los tratamientos disponibles en un tiempo razonable y que causa sufrimiento insoportable.",
      textRO: "Sedarea paliativă este indicată când există un simptom refractar: acela care nu poate fi controlat cu tratamentele disponibile într-un timp rezonabil și care cauzează suferință insuportabilă.",
    },
    {
      type: "list",
      items: [
        {
          icon: ClipboardCheck,
          textES: "Causas comunes: Disnea terminal, Delirium hiperactivo, Dolor incontrolable, Hemorragia masiva, Sufrimiento existencial severo.",
          textRO: "Cauze comune: Dispnee terminală, Delirium hiperactiv, Durere incontrolabilă, Hemoragie masivă, Suferință existențială severă.",
        },
        {
          icon: FileSignature,
          textES: "Consentimiento: Debe ser explícito (del paciente si puede, o de la familia por delegación). Registrar en la historia.",
          textRO: "Consimțământ: Trebuie să fie explicit (al pacientului dacă poate, sau al familiei prin delegare). Înregistrați în istoric.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Fármacos y Dosis (Vía Subcutánea)",
      textRO: "2. Medicamente și Doze (Calea Subcutanată)",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Inducción (Bolus)", "Mantenimiento (Infusor/24h)"],
      headersRO: ["Medicament", "Inducție (Bolus)", "Menținere (Infuzor/24h)"],
      rows: [
        {
          colsES: [
            "Midazolam (Estándar de Oro)",
            "2.5 - 5 mg SC. Repetir cada 15 min hasta nivel de consciencia deseado (Ramsay).",
            "15 - 30 - 45 mg / 24h. (Ajustar según respuesta).",
          ],
          colsRO: [
            "Midazolam (Standard de Aur)",
            "2.5 - 5 mg SC. Repetați la 15 min până la nivelul de conștiență dorit (Ramsay).",
            "15 - 30 - 45 mg / 24h. (Ajustați după răspuns).",
          ],
        },
        {
          colsES: [
            "Levomepromazina (Si falla Mida)",
            "12.5 - 25 mg SC.",
            "50 - 100 mg / 24h.",
          ],
          colsRO: [
            "Levomepromazină (Dacă Mida eșuează)",
            "12.5 - 25 mg SC.",
            "50 - 100 mg / 24h.",
          ],
        },
        {
          colsES: [
            "Morfina (¡NO ES EL SEDANTE!)",
            "Mantener dosis previa para el dolor/disnea.",
            "Mantener dosis previa. La morfina NO se usa para sedar, se usa para que no duela mientras duerme.",
          ],
          colsRO: [
            "Morfină (NU E SEDATIVUL!)",
            "Mențineți doza anterioară pentru durere/dispnee.",
            "Mențineți doza anterioară. Morfina NU se folosește pentru a seda, se folosește ca să nu doară în timp ce doarme.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: Scale,
      titleES: "CLAVE ÉTICA: INTENCIONALIDAD",
      textES: "En la Sedación, la intención es aliviar el sufrimiento disminuyendo la consciencia; la muerte es un efecto secundario natural de la enfermedad. En la Eutanasia, la intención y la acción directa es provocar la muerte.",
      titleRO: "CHEIE ETICĂ: INTENȚIONALITATE",
      textRO: "În Sedare, intenția este alinarea suferinței scăzând conștiența; moartea este un efect secundar natural al bolii. În Eutanasie, intenția și acțiunea directă este provocarea morții.",
    },
  ],
};
