import {
  AlertTriangle,
  Wind,
  Activity,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export const MODULE_4_TOPIC_36 = {
  id: "4-36",
  titleES: "36. Disnea súbita: cómo reaccionar",
  titleRO: "36. Dispnee subită: cum să reacționezi",
  learningObjectives: [
    "Reconocer los signos de distrés respiratorio agudo.",
    "Aplicar la posición terapéutica adecuada inmediatamente.",
    "Manejar la oxigenoterapia básica según saturación objetivo.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Valoración Rápida: ABC Respiratorio",
      textRO: "1. Evaluare Rapidă: ABC Respirator",
    },
    {
      type: "p",
      textES: "La disnea súbita es una sensación subjetiva de falta de aire que puede indicar patología grave (TEP, EAP, Neumotórax).",
      textRO: "Dispneea subită este o senzație subiectivă de lipsă de aer care poate indica patologie gravă (TEP, EPA, Pneumotorax).",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "SatO2: ¿Es < 90%? (Hipoxemia).",
          textRO: "SatO2: Este < 90%? (Hipoxemie).",
        },
        {
          icon: Wind,
          textES: "Frecuencia Respiratoria: ¿Es > 24 rpm? (Taquipnea).",
          textRO: "Frecvența Respiratorie: Este > 24 rpm? (Tahipnee).",
        },
        {
          icon: Stethoscope,
          textES: "Auscultación rápida: ¿Silencio auscultatorio? (Neumotórax) ¿Crepitantes húmedos? (Edema Agudo Pulmón) ¿Sibilancias? (Broncoespasmo).",
          textRO: "Auscultație rapidă: Tăcere auscultatorie? (Pneumotorax) Raluri umede? (Edem Pulmonar Acut) Sibilante? (Bronhospasm).",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertTriangle,
      titleES: "ACCIÓN INMEDIATA: POSICIÓN FOWLER",
      textES: "Elevar el cabecero de la cama a 90º (Fowler alta) o sentar al paciente con las piernas colgando si se sospecha Edema Agudo de Pulmón (disminuye retorno venoso). JAMÁS tumbar a un paciente disneico.",
      titleRO: "ACȚIUNE IMEDIATĂ: POZIȚIA FOWLER",
      textRO: "Ridicați capul patului la 90º (Fowler înalt) sau așezați pacientul cu picioarele atârnând dacă se suspectează Edem Pulmonar Acut (scade întoarcerea venoasă). NICIODATĂ nu culcați un pacient dispneic.",
    },
    {
      type: "h3",
      textES: "2. Oxigenoterapia de Urgencia",
      textRO: "2. Oxigenoterapie de Urgență",
    },
    {
      type: "table",
      headersES: ["Dispositivo", "Flujo (L/min)", "Indicación"],
      headersRO: ["Dispozitiv", "Debit (L/min)", "Indicație"],
      rows: [
        {
          colsES: [
            "Gafas Nasales",
            "2 - 4 L/min",
            "Hipoxemia leve. Paciente estable. Mantiene SatO2 > 92%.",
          ],
          colsRO: [
            "Canulă Nazală",
            "2 - 4 L/min",
            "Hipoxemie ușoară. Pacient stabil. Menține SatO2 > 92%.",
          ],
        },
        {
          colsES: [
            "Mascarilla Venturi",
            "Según % (FiO2)",
            "Hipoxemia moderada o necesidad de FiO2 exacta (ej. EPOC retenedor).",
          ],
          colsRO: [
            "Mască Venturi",
            "Conform % (FiO2)",
            "Hipoxemie moderată sau necesitate de FiO2 exactă (ex. BPOC reținător).",
          ],
        },
        {
          colsES: [
            "Mascarilla Reservorio",
            "10 - 15 L/min",
            "Emergencia crítica. SatO2 < 85%. Shock. Trauma grave. Aporta ~100% O2.",
          ],
          colsRO: [
            "Mască cu Rezervor",
            "10 - 15 L/min",
            "Urgență critică. SatO2 < 85%. Șoc. Traumă gravă. Oferă ~100% O2.",
          ],
        },
      ],
    },
  ],
};
