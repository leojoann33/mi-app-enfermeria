import {
  ShieldAlert,
  AlertTriangle,
  Eye,
  FileWarning,
  CheckCircle2,
} from "lucide-react";

export const MASTER_3_TOPIC_2 = {
  id: "master-3-2",
  titleES: "Masterclass: Seguridad - Medicamentos de Alto Riesgo",
  titleRO: "Masterclass: Siguranță - Medicamente cu Risc Crescut",
  isExpert: true,
  learningObjectives: [
    "Identificar la lista ISMP de medicamentos de alto riesgo.",
    "Protocolo de Doble Chequeo Independiente.",
    "Manejo de electrolitos concentrados (Cloruro Potásico).",
  ],
  content: [
    {
      type: "alert",
      variant: "destructive",
      icon: ShieldAlert,
      titleES: "DEFINICIÓN ISMP",
      textES: "Los medicamentos de alto riesgo son aquellos que tienen una probabilidad muy elevada de causar daños graves o incluso mortales cuando se produce un error en su utilización.",
      titleRO: "DEFINIȚIE ISMP",
      textRO: "Medicamentele cu risc crescut sunt acelea care au o probabilitate foarte mare de a cauza daune grave sau chiar fatale atunci când apare o eroare în utilizarea lor.",
    },
    {
      type: "h3",
      textES: "1. Los 'Intocables' (Nunca administrar sin pensar)",
      textRO: "1. Cei 'Intangibili' (Nu administrați niciodată fără a gândi)",
    },
    {
      type: "table",
      headersES: ["Grupo", "Ejemplos", "Error Común", "Medida de Seguridad"],
      headersRO: ["Grup", "Exemple", "Eroare Comună", "Măsură de Siguranță"],
      rows: [
        {
          colsES: [
            "Electrolitos Concentrados",
            "KCl (Potasio) IV, Sodio Hipertónico",
            "Inyección directa (Bolo) -> PARADA CARDÍACA Inmediata.",
            "NUNCA en planta. Siempre diluido. Etiqueta ROJA. Bomba obligatoria.",
          ],
          colsRO: [
            "Electroliți Concentrați",
            "KCl (Potasiu) IV, Sodiu Hipertonic",
            "Injecție directă (Bolus) -> STOP CARDIAC Imediat.",
            "NICIODATĂ pe secție. Întotdeauna diluat. Etichetă ROȘIE. Pompă obligatorie.",
          ],
        },
        {
          colsES: [
            "Anticoagulantes",
            "Heparina Sódica, Warfarina",
            "Error de dosis (Ud vs ml) -> Hemorragia cerebral.",
            "Doble chequeo de la tasa de infusión. Control de TTPA.",
          ],
          colsRO: [
            "Anticoagulante",
            "Heparină Sodică, Warfarină",
            "Eroare de doză (UI vs ml) -> Hemoragie cerebrală.",
            "Verificare dublă a ratei de perfuzie. Control aPTT.",
          ],
        },
        {
          colsES: [
            "Insulinas IV",
            "Insulina Regular (Rápida)",
            "Confusión U-100 vs dosis. Hipoglucemia grave.",
            "No usar jeringas de 1ml normales, solo de insulina. Validar con compañero.",
          ],
          colsRO: [
            "Insuline IV",
            "Insulină Regulară (Rapidă)",
            "Confuzie U-100 vs doză. Hipoglicemie gravă.",
            "Nu folosiți seringi normale de 1ml, doar de insulină. Validați cu coleg.",
          ],
        },
        {
          colsES: [
            "Opiáceos IV / Epidural",
            "Morfina, Fentanilo",
            "Sobredosis -> Depresión respiratoria.",
            "Monitorización SatO2 y nivel de conciencia.",
          ],
          colsRO: [
            "Opioide IV / Epidurală",
            "Morfină, Fentanil",
            "Supradoză -> Depresie respiratorie.",
            "Monitorizare SatO2 și nivel de conștiență.",
          ],

        },
      ],
    },
    {
      type: "h3",
      textES: "2. Protocolo de Doble Chequeo Independiente",
      textRO: "2. Protocol de Dublă Verificare Independentă",
    },
    {
      type: "p",
      textES: "No basta con preguntar '¿Te parece bien?'. El segundo enfermero debe calcular la dosis desde cero sin ver el cálculo del primero.",
      textRO: "Nu e suficient să întrebi 'Ți se pare bine?'. Al doilea asistent trebuie să calculeze doza de la zero fără a vedea calculul primului.",
    },
    {
      type: "list",
      items: [
        {
          icon: Eye,
          textES: "Paso 1: Enfermero A prepara y calcula.",
          textRO: "Pasul 1: Asistentul A pregătește și calculează.",
        },
        {
          icon: CheckCircle2,
          textES: "Paso 2: Enfermero B verifica orden médica, paciente, bomba y etiqueta por separado.",
          textRO: "Pasul 2: Asistentul B verifică ordinul medical, pacientul, pompa și eticheta separat.",
        },
        {
          icon: FileWarning,
          textES: "Look-Alike Sound-Alike (LASA): Cuidado con ampollas que se parecen (ej. Efedrina vs Adrenalina). Sepáralas en el carro.",
          textRO: "Look-Alike Sound-Alike (LASA): Atenție la fiolele care seamănă (ex. Efedrină vs Adrenalină). Separați-le în cărucior.",
        },
      ],
    },
  ],
};
