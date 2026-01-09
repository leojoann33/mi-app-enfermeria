import {
  Brain,
  Ghost,
  Pill,
  ListX,
  RefreshCw,
} from "lucide-react";

export const INTERNAL_11_TOPIC_2 = {
  id: "internal-11-2",
  titleES: "Medicina Interna: Delirium y Polifarmacia",
  titleRO: "Medicină Internă: Delirium și Polifarmacie",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Delirium (S. Confusional Agudo) de Demencia.",
    "Manejo no farmacológico del Delirium.",
    "Criterios STOPP/START: Deprescripción.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Delirium: Una Urgencia Médica",
      textRO: "1. Delirium: O Urgență Medicală",
    },
    {
      type: "p",
      textES: "Inicio agudo y curso fluctuante. Es un signo de fallo cerebral agudo por causa orgánica (infección, fármacos, deshidratación).",
      textRO: "Debut acut și curs fluctuant. Este un semn de insuficiență cerebrală acută de cauză organică (infecție, medicamente, deshidratare).",
    },
    {
      type: "table",
      headersES: ["Característica", "Delirium", "Demencia"],
      headersRO: ["Caracteristică", "Delirium", "Demență"],
      rows: [
        { colsES: ["Inicio", "Agudo (Horas/Días).", "Insidioso (Meses/Años)."], colsRO: ["Debut", "Acut (Ore/Zile).", "Insidios (Luni/Ani)."] },
        { colsES: ["Atención", "Muy alterada (Se distrae).", "Suele estar conservada al inicio."], colsRO: ["Atenție", "Foarte alterată (Se distrage).", "De obicei conservată la început."] },
        { colsES: ["Reversibilidad", "Potencialmente reversible.", "Generalmente irreversible."], colsRO: ["Reversibilitate", "Potențial reversibil.", "General ireversibil."] },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: Ghost,
      titleES: "MEDIDAS NO FARMACOLÓGICAS",
      textES: "Antes de sujetar o sedar: 1. Orientar (Reloj, Calendario). 2. Gafas y Audífonos puestos. 3. Luz natural. 4. Presencia familiar. La contención mecánica empeora el delirium.",
      titleRO: "MĂSURI NON-FARMACOLOGICE",
      textRO: "Înainte de a contenționa sau seda: 1. Orientare (Ceas, Calendar). 2. Ochelari și Proteze auditive puse. 3. Lumină naturală. 4. Prezența familiei. Contenția mecanică agravează delirul.",
    },
    {
      type: "h3",
      textES: "2. Polifarmacia y Carga Anticolinérgica",
      textRO: "2. Polifarmacia și Încărcătura Anticolinergică",
    },
    {
      type: "list",
      items: [
        {
          icon: ListX,
          textES: "Prescripción en Cascada: Dar un fármaco para tratar el efecto secundario de otro (Ej. Diurético para el edema causado por Amlodipino).",
          textRO: "Prescripție în Cascadă: A da un medicament pentru a trata efectul secundar al altuia (Ex. Diuretic pentru edemul cauzat de Amlodipină).",
        },
        {
          icon: Pill,
          textES: "Fármacos de Alto Riesgo (Criterios BEERS/STOPP): Benzodiacepinas (Caídas/Delirium), Anticolinérgicos (Retención orina/Confusión), AINEs (Fallo renal/Sangrado).",
          textRO: "Medicamente cu Risc Înalt (Criterii BEERS/STOPP): Benzodiazepine (Căderi/Delir), Anticolinergice (Retenție urină/Confuzie), AINS (Insuficiență renală/Sângerare).",
        },
      ],
    },
  ],
};
