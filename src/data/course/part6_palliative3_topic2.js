import {
  Brain,
  Syringe,
  Eye,
  Activity,
  UserX,
} from "lucide-react";

export const PALLIATIVE_3_TOPIC_2 = {
  id: "part6_palliative3_topic2",
  titleES: "Delirium y Agitación Psicomotriz",
  titleRO: "Delirium și Agitație Psihomotorie",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Delirium Hipoactivo vs Hiperactivo.",
    "Tratamiento de la Agitación Terminal.",
    "Descartar claudicación familiar disfrazada de demanda de sedación.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. El Síndrome Confusional Agudo (Delirium)",
      textRO: "1. Sindromul Confuzional Acut (Delirium)",
    },
    {
      type: "p",
      textES: "Frecuente al final de la vida (opiáceos, infecciones, metabólico). Se caracteriza por alteración de la atención y fluctuación.",
      textRO: "Frecvent la sfârșitul vieții (opioide, infecții, metabolic). Se caracterizează prin alterarea atenției și fluctuație.",
    },
    {
      type: "list",
      items: [
        {
          icon: UserX,
          textES: "Hipoactivo: Paciente 'tranquilo', somnoliento, desconectado. Infradiagnosticado. A veces se confunde con depresión o agonía plácida.",
          textRO: "Hipoactiv: Pacient 'liniștit', somnolent, deconectat. Subdiagnosticat. Uneori se confundă cu depresia sau agonia placidă.",
        },
        {
          icon: Activity,
          textES: "Hiperactivo: Agitación, alucinaciones, 'quitarse la ropa o vías', gritos. Angustia mucho a la familia.",
          textRO: "Hiperactiv: Agitație, halucinații, 'a-și scoate hainele sau liniile', țipete. Angosează mult familia.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Manejo Farmacológico: El 'Halol'",
      textRO: "2. Management Farmacologic: 'Halol'-ul",
    },
    {
      type: "table",
      headersES: ["Situación", "Fármaco Elección", "Protocolo SC"],
      headersRO: ["Situație", "Medicament Elecție", "Protocol SC"],
      rows: [
        {
          colsES: [
            "Delirium con Alucinaciones / Paranoia",
            "Haloperidol (Neuroléptico)",
            "2.5 - 5 mg SC. Repetir si precisa. Es el único seguro si hay riesgo de aspiración.",
          ],
          colsRO: [
            "Delirium cu Halucinații / Paranoia",
            "Haloperidol (Neuroleptic)",
            "2.5 - 5 mg SC. Repetați dacă e necesar. E singurul sigur dacă există risc de aspirație.",
          ],
        },
        {
          colsES: [
            "Agitación ansiosa severa",
            "Midazolam (Benzodiacepina)",
            "2.5 - 5 mg SC. Asociar a Haloperidol si predomina la confusión.",
          ],
          colsRO: [
            "Agitație anxioasă severă",
            "Midazolam (Benzodiazepină)",
            "2.5 - 5 mg SC. Asociați cu Haloperidol dacă predomină confuzia.",
          ],
        },
        {
          colsES: [
            "Agitación refractaria",
            "Levomepromazina (Sinogan)",
            "12.5 - 25 mg SC. Muy sedante. Segunda línea.",
          ],
          colsRO: [
            "Agitație refractară",
            "Levomepromazină (Sinogan)",
            "12.5 - 25 mg SC. Foarte sedativ. A doua linie.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "danger",
      icon: Eye,
      titleES: "CUIDADO CON LAS SUJECIONES",
      textES: "La contención mecánica en un paciente con delirium suele aumentar la agitación y el miedo. Es preferible presencia familiar o sedación suave si hay riesgo de autolesión.",
      titleRO: "ATENȚIE LA RESTRICȚII",
      textRO: "Contenția mecanică la un pacient cu delirium tinde să crească agitația și frica. Este preferabilă prezența familială sau sedarea ușoară dacă există risc de auto-vătămare.",
    },
  ],
};
