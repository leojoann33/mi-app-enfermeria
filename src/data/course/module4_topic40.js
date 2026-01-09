import {
  AlertTriangle,
  ShieldAlert,
  Hand,
  CheckCircle2,
  XCircle,
  MessageSquare,
} from "lucide-react";

export const MODULE_4_TOPIC_40 = {
  id: "4-40",
  titleES: "40. Manejo inicial de un paciente agresivo",
  titleRO: "40. Gestionarea inițială a unui pacient agresiv",
  learningObjectives: [
    "Aplicar técnicas de desescalada verbal.",
    "Mantener la seguridad física propia y del equipo.",
    "Conocer los requisitos legales para la contención física.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Seguridad y Desescalada Verbal",
      textRO: "1. Siguranță și Dezescaladare Verbală",
    },
    {
      type: "p",
      textES: "La agitación psicomotriz es una urgencia. El objetivo es calmar sin usar la fuerza física siempre que sea posible.",
      textRO: "Agitația psihomotorie este o urgență. Scopul este calmarea fără folosirea forței fizice ori de câte ori este posibil.",
    },
    {
      type: "list",
      items: [
        {
          icon: ShieldAlert,
          textES: "Distancia de Seguridad: Manténgase a más de un brazo de distancia. Nunca se deje acorralar (tenga la puerta accesible).",
          textRO: "Distanța de Siguranță: Păstrați o distanță de mai mult de un braț. Nu vă lăsați niciodată încolțit (aveți ușa accesibilă).",
        },
        {
          icon: MessageSquare,
          textES: "Tono de Voz: Bajo, calmado, pero firme. No discuta ni confronte delirios.",
          textRO: "Tonul Vocii: Scăzut, calm, dar ferm. Nu discutați și nu confruntați delirurile.",
        },
        {
          icon: Hand,
          textES: "Manos Visibles: Mantenga sus manos a la vista y abiertas (gesto de no agresión).",
          textRO: "Mâini Vizibile: Țineți mâinile la vedere și deschise (gest de non-agresiune).",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertTriangle,
      titleES: "ALERTA: CONTENCIÓN FÍSICA",
      textES: "Es el ÚLTIMO RECURSO. Requiere:\n1. Orden Médica (escrita en historia).\n2. Personal suficiente (mínimo 4-5 personas).\n3. Respeto a la dignidad (no exhibir al paciente).",
      titleRO: "ALERTA: CONTENȚIE FIZICĂ",
      textRO: "Este ULTIMA RESURSĂ. Necesită:\n1. Ordin Medical (scris în foaie).\n2. Personal suficient (minim 4-5 persoane).\n3. Respect pentru demnitate (nu expuneți pacientul).",
    },
    {
      type: "h3",
      textES: "2. Contención Farmacológica",
      textRO: "2. Contenție Farmacologică",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Vía", "Efecto"],
      headersRO: ["Medicament", "Cale", "Efect"],
      rows: [
        {
          colsES: [
            "Haloperidol",
            "IM",
            "Antipsicótico clásico. Inicio 15-20 min. Vigilar SEP (rigidez).",
          ],
          colsRO: [
            "Haloperidol",
            "IM",
            "Antipsihotic clasic. Început 15-20 min. Monitorizați SEP (rigiditate).",
          ],
        },
        {
          colsES: [
            "Midazolam",
            "IM / IV",
            "Sedante rápido. Riesgo depresión respiratoria (tener ambú cerca).",
          ],
          colsRO: [
            "Midazolam",
            "IM / IV",
            "Sedativ rapid. Risc depresie respiratorie (aveți balonul aproape).",
          ],
        },
      ],
    },
  ],
};
