import {
  Scan,
  Move3d,
  BoxSelect,
  Layers,
  Activity,
} from "lucide-react";

export const CLINICAL_1_TOPIC_2 = {
  id: "part7_clinical1_topic2",
  titleES: "Tejidos, Membranas y Planos Anatómicos",
  titleRO: "Țesuturi, Membrane și Planuri Anatomice",
  isExpert: false,
  learningObjectives: [
    "Clasificar los 4 tipos de tejidos básicos (Epitelial, Conectivo, Muscular, Nervioso).",
    "Diferenciar membranas serosas, mucosas y sinoviales.",
    "Aplicar los planos (Sagital, Coronal, Transversal) y ejes de movimiento.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Histología Básica: Los 4 Tejidos",
      textRO: "1. Histologie De Bază: Cele 4 Țesuturi",
    },
    {
      type: "table",
      headersES: ["Tejido", "Características", "Subtipos/Células"],
      headersRO: ["Țesut", "Caracteristici", "Subtipuri/Celule"],
      rows: [
        {
          colsES: [
            "Epitelial",
            "Revestimiento y Glandular. Avascular (se nutre del conectivo).",
            "Queratinocitos (piel), Células Caliciformes (moco).",
          ],
          colsRO: [
            "Epitelial",
            "Acoperire și Glandular. Avascular (se hrănește din conectiv).",
            "Keratinocite (piele), Celule Caliciforme (mucus).",
          ],
        },
        {
          colsES: [
            "Conectivo (Conjuntivo)",
            "Sostén y estructura. Matriz extracelular abundante (Colágeno/Elastina).",
            "Laxo, Denso, Adiposo, Óseo (Osteocitos), Sangre.",
          ],
          colsRO: [
            "Conectiv (Conjunctiv)",
            "Susținere și structură. Matrice extracelulară abundentă (Colagen/Elastină).",
            "Lax, Dens, Adipos, Osos (Osteocite), Sânge.",
          ],
        },
        {
          colsES: [
            "Nervioso",
            "Transmisión de impulsos. Excitabilidad.",
            "Neuronas y Glía (Sostén: Astrocitos, Microglía).",
          ],
          colsRO: [
            "Nervos",
            "Transmiterea impulsurilor. Excitabilitate.",
            "Neuroni și Glia (Susținere: Astrocite, Microglia).",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Membranas Corporales",
      textRO: "2. Membrane Corporale",
    },
    {
      type: "list",
      items: [
        {
          icon: Layers,
          textES: "Serosa: Tapiza cavidades cerradas y cubre órganos (Pleura, Pericardio, Peritoneo). Secreta líquido seroso lubricante.",
          textRO: "Seroasă: Căptușește cavități închise și acoperă organe (Pleură, Pericard, Peritoneu). Secretă lichid seros lubrifiant.",
        },
        {
          icon: BoxSelect,
          textES: "Mucosa: Tapiza cavidades abiertas al exterior (Digestivo, Respiratorio).",
          textRO: "Mucoasă: Căptușește cavități deschise spre exterior (Digestiv, Respirator).",
        },
        {
          icon: Activity,
          textES: "Sinovial: Tejido conectivo (sin epitelio) en cápsulas articulares. Líquido sinovial.",
          textRO: "Sinovială: Țesut conectiv (fără epiteliu) în capsule articulare. Lichid sinovial.",
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Posición Anatómica y Planos",
      textRO: "3. Poziție Anatomică și Planuri",
    },
    {
      type: "alert",
      variant: "info",
      icon: Move3d,
      titleES: "POSICIÓN ESTÁNDAR",
      textES: "Bipedestación, mirada al frente, palmas hacia delante (supinación), pies juntos.",
      titleRO: "POZIȚIE STANDARD",
      textRO: "Bipedestație, privirea înainte, palmele înainte (supinație), picioarele împreunate.",
    },
    {
      type: "table",
      headersES: ["Plano", "División", "Eje Asociado (Movimiento)"],
      headersRO: ["Plan", "Împărțire", "Ax Asociat (Mișcare)"],
      rows: [
        {
          colsES: [
            "Sagital (Medio)",
            "Izquierda / Derecha",
            "Eje Transversal (Flexión/Extensión).",
          ],
          colsRO: [
            "Sagital (Mediu)",
            "Stânga / Dreapta",
            "Ax Transversal (Flexie/Extensie).",
          ],
        },
        {
          colsES: [
            "Coronal (Frontal)",
            "Anterior (Ventral) / Posterior (Dorsal)",
            "Eje Anteroposterior (Abducción/Aducción).",
          ],
          colsRO: [
            "Coronal (Frontal)",
            "Anterior (Ventral) / Posterior (Dorsal)",
            "Ax Anteroposterior (Abducție/Adducție).",
          ],
        },
        {
          colsES: [
            "Transversal (Axial)",
            "Superior (Craneal) / Inferior (Caudal)",
            "Eje Vertical (Rotación).",
          ],
          colsRO: [
            "Transversal (Axial)",
            "Superior (Cranial) / Inferior (Caudal)",
            "Ax Vertical (Rotație).",
          ],
        },
      ],
    },
  ],
};
