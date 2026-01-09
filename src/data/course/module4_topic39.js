import {
  AlertTriangle,
  Activity,
  CheckCircle2,
  XCircle,
  Eye,
  FileText,
} from "lucide-react";

export const MODULE_4_TOPIC_39 = {
  id: "4-39",
  titleES: "39. Caída en planta: pasos a seguir",
  titleRO: "39. Cădere în secție: pași de urmat",
  learningObjectives: [
    "Valorar al paciente tras una caída sin agravar posibles lesiones.",
    "Identificar signos de fractura de cadera.",
    "Cumplimentar el registro de incidencias correctamente.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Valoración 'In Situ' (Antes de mover)",
      textRO: "1. Evaluare 'In Situ' (Înainte de a muta)",
    },
    {
      type: "p",
      textES: "No levante al paciente inmediatamente. Primero evalúe conciencia y dolor. Una movilización precipitada puede desplazar una fractura.",
      textRO: "Nu ridicați pacientul imediat. Mai întâi evaluați conștiența și durerea. O mobilizare pripită poate deplasa o fractură.",
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertTriangle,
      titleES: "ALERTA: FRACTURA DE CADERA",
      textES: "Si observa ACORTAMIENTO de la pierna + ROTACIÓN EXTERNA del pie -> NO MOVER. SOSPECHA ALTA DE FRACTURA DE FÉMUR. Avisar al médico y movilizar en bloque entre 3-4 personas o con camilla de cuchara.",
      titleRO: "ALERTA: FRACTURĂ DE ȘOLD",
      textRO: "Dacă observați SCURTAREA piciorului + ROTAȚIE EXTERNĂ a piciorului -> NU MUTAȚI. SUSPICIUNE MARE DE FRACTURĂ DE FEMUR. Anunțați medicul și mobilizați în bloc cu 3-4 persoane sau cu targă lopată.",
    },
    {
      type: "h3",
      textES: "2. Protocolo Post-Caída",
      textRO: "2. Protocol Post-Cădere",
    },
    {
      type: "list",
      items: [
        {
          icon: Eye,
          textES: "Exploración Neurológica: Revisar pupilas y Glasgow (descartar TCE).",
          textRO: "Explorare Neurologică: Verificați pupilele și Glasgow (excludeți TCC).",
        },
        {
          icon: Activity,
          textES: "Constantes vitales: A veces la caída es secundaria a hipotensión o arritmia.",
          textRO: "Semne vitale: Uneori căderea este secundară hipotensiunii sau aritmiei.",
        },
        {
          icon: FileText,
          textES: "Registro de Incidencia: Es obligatorio legalmente describir: Hora, Lugar, Testigos y Estado previo/posterior.",
          textRO: "Înregistrarea Incidentului: Este obligatoriu legal să descrieți: Ora, Locul, Martorii și Starea anterioară/posterioară.",
        },
      ],
    },
    {
      type: "table",
      headersES: ["Hallazgo", "Acción"],
      headersRO: ["Descoperire", "Acțiune"],
      rows: [
        {
          colsES: [
            "Herida sangrante",
            "Compresión directa. Cura plana. Valorar sutura.",
          ],
          colsRO: [
            "Rană sângerândă",
            "Compresie directă. Pansament simplu. Evaluați sutura.",
          ],
        },
        {
          colsES: [
            "Dolor cervical",
            "INMOVILIZACIÓN TOTAL. Collarín si disponible. No mover cuello.",
          ],
          colsRO: [
            "Durere cervicală",
            "IMOBILIZARE TOTALĂ. Guler dacă este disponibil. Nu mișcați gâtul.",
          ],
        },
      ],
    },
  ],
};
