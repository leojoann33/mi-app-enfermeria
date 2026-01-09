import {
  Bone,
  Construction,
  Hammer,
} from "lucide-react";

export const CLINICAL_11_TOPIC_2 = {
  id: "part7_clinical11_topic2",
  titleES: "Fracturas, Tumores y Cicatrización",
  titleRO: "Fracturi, Tumori și Cicatrizare",
  isExpert: false,
  learningObjectives: [
    "Describir las fases de cicatrización de una fractura.",
    "Diferenciar tratamiento conservador (Yeso/Tracción) de quirúrgico.",
    "Conocer tumores óseos básicos (Osteosarcoma, Condroma).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Fracturas Óseas",
      textRO: "1. Fracturi Osoase",
    },
    {
      type: "list",
      items: [
        {
          icon: Construction,
          textES: "Fases de Cicatrización: 1. Inflamatoria/Proliferativa -> 2. Callo de Fractura (Blando -> Duro) -> 3. Remodelado.",
          textRO: "Faze de Cicatrizare: 1. Inflamatorie/Proliferativă -> 2. Calus de Fractură (Moale -> Dur) -> 3. Remodelare.",
        },
        {
          icon: Hammer,
          textES: "Tratamiento Conservador: Reducción cerrada + Inmovilización (Yeso, Férula, Tracción cutánea).",
          textRO: "Tratament Conservator: Reducere închisă + Imobilizare (Ghips, Atelă, Tracțiune cutanată).",
        },
        {
          icon: Bone,
          textES: "Tratamiento Quirúrgico (Osteosíntesis): Placas, tornillos, clavos endomedulares.",
          textRO: "Tratament Chirurgical (Osteosinteză): Plăci, șuruburi, tije centromedulare.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Patología Tumoral",
      textRO: "2. Patologie Tumorală",
    },
    {
      type: "table",
      headersES: ["Tipo", "Ejemplos", "Características"],
      headersRO: ["Tip", "Exemple", "Caracteristici"],
      rows: [
        {
          colsES: ["Óseo", "Osteosarcoma (Maligno), Osteoma.", "Dolor óseo profundo, fracturas patológicas."],
          colsRO: ["Osos", "Osteosarcom (Malign), Osteom.", "Durere osoasă profundă, fracturi patologice."],
        },
        {
          colsES: ["Partes Blandas", "Lipoma (Grasa), Sarcoma.", "Bulto palpable (Lipoma es móvil y blando)."],
          colsRO: ["Părți Moi", "Lipom (Grăsime), Sarcom.", "Umflătură palpabilă (Lipomul e mobil și moale)."],
        },
      ],
    },
  ],
};
