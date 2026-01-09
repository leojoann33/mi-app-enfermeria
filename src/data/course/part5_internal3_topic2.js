import {
  Activity,
  Droplet,
  Beaker,
  AlertOctagon,
  Brain,
} from "lucide-react";

export const INTERNAL_3_TOPIC_2 = {
  id: "internal-3-2",
  titleES: "Medicina Interna: Pancreatitis y Cirrosis",
  titleRO: "Medicină Internă: Pancreatită și Ciroză",
  isExpert: true,
  learningObjectives: [
    "Manejo agresivo de fluidos en Pancreatitis.",
    "Reconocer y tratar la Encefalopatía Hepática.",
    "Paracentesis evacuadora: reposición de Albúmina.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Pancreatitis Aguda: Hidratar, Hidratar, Hidratar",
      textRO: "1. Pancreatită Acută: Hidratare, Hidratare, Hidratare",
    },
    {
      type: "p",
      textES: "La pancreatitis causa un 'secuestro' masivo de líquidos al tercer espacio e inflamación sistémica.",
      textRO: "Pancreatita cauzează un 'sechestru' masiv de lichide în spațiul trei și inflamație sistemică.",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Fluidoterapia: Ringer Lactato es preferible. 250-500 ml/h en las primeras 12-24h. Objetivo: Diuresis > 0.5 ml/kg/h.",
          textRO: "Fluidoterapie: Ringer Lactat este preferabil. 250-500 ml/h în primele 12-24h. Obiectiv: Diureză > 0.5 ml/kg/h.",
        },
        {
          icon: Activity,
          textES: "Dolor: Opioides permitidos (Bupremorfina/Meperidina). El mito de que 'la morfina espasma el esfínter de Oddi' está desmentido clínicamente.",
          textRO: "Durere: Opioide permise (Bupremorfină/Meperidină). Mitul că 'morfina spasmează sfincterul Oddi' este dezmințit clinic.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Cirrosis y Encefalopatía Hepática",
      textRO: "2. Ciroză și Encefalopatie Hepatică",
    },
    {
      type: "alert",
      variant: "danger",
      icon: Brain,
      titleES: "AMONIO TÓXICO",
      textES: "El hígado no depura toxinas y el amonio se acumula, afectando al cerebro (confusión, flapping tremor, coma).",
      titleRO: "AMONIU TOXIC",
      textRO: "Ficatul nu epurează toxinele și amoniul se acumulează, afectând creierul (confuzie, flapping tremor, comă).",
    },
    {
      type: "table",
      headersES: ["Tratamiento", "Mecanismo", "Meta de Enfermería"],
      headersRO: ["Tratament", "Mecanism", "Țintă Asistență"],
      rows: [
        { colsES: ["Lactulosa", "Acidifica el colon, atrapa el amonio (NH4+) y lo expulsa.", "Conseguir 2-3 deposiciones blandas al día."], colsRO: ["Lactuloză", "Acidifiază colonul, captează amoniul (NH4+) și îl elimină.", "Obținerea a 2-3 scaune moi pe zi."] },
        { colsES: ["Enemas de limpieza", "Eliminar restos proteicos/sangre del intestino.", "Evitar estreñimiento a toda costa."], colsRO: ["Clisme de curățare", "Eliminare resturi proteice/sânge din intestin.", "Evitarea constipației cu orice preț."] },
        { colsES: ["Albúmina IV", "Tras paracentesis > 5L. (1 vial por cada litro extraído).", "Prevenir disfunción circulatoria post-paracentesis."], colsRO: ["Albumină IV", "După paracenteză > 5L. (1 flacon per litru extras).", "Prevenire disfuncție circulatorie post-paracenteză."] },
      ],
    },
  ],
};
