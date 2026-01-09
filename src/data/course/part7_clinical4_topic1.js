import {
  Scale,
  Utensils,
  AlertOctagon,
  FileSpreadsheet,
} from "lucide-react";

export const CLINICAL_4_TOPIC_1 = {
  id: "part7_clinical4_topic1",
  titleES: "Valoración Nutricional y Desnutrición",
  titleRO: "Evaluare Nutrițională și Malnutriție",
  isExpert: false,
  learningObjectives: [
    "Diferenciar tipos de desnutrición (Marasmo vs Kwashiorkor).",
    "Calcular e interpretar el IMC.",
    "Conocer los marcadores bioquímicos de nutrición.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tipos de Desnutrición",
      textRO: "1. Tipuri de Malnutriție",
    },
    {
      type: "table",
      headersES: ["Tipo", "Causa Principal", "Características"],
      headersRO: ["Tip", "Cauză Principală", "Caracteristici"],
      rows: [
        {
          colsES: ["Marasmo", "Déficit Calórico (Energético).", "Pérdida de peso extrema, atrofia muscular, 'piel y huesos'."],
          colsRO: ["Marasm", "Deficit Caloric (Energetic).", "Scădere extremă în greutate, atrofie musculară, 'piele și oase'."],
        },
        {
          colsES: ["Kwashiorkor", "Déficit Proteico (Hipoalbuminemia).", "Edemas, ascitis, 'barriga hinchada', hepatomegalia."],
          colsRO: ["Kwashiorkor", "Deficit Proteic (Hipoalbuminemie).", "Edeme, ascită, 'burtă umflată', hepatomegalie."],
        },
        {
          colsES: ["Caquexia", "Mixta (Enfermedad Crónica/Cáncer).", "Estado inflamatorio, pérdida de masa magra y grasa."],
          colsRO: ["Cașexie", "Mixtă (Boală Cronică/Cancer).", "Stare inflamatorie, pierdere de masă slabă și grăsime."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Valoración Nutricional",
      textRO: "2. Evaluare Nutrițională",
    },
    {
      type: "list",
      items: [
        {
          icon: Scale,
          textES: "Antropometría: Peso, Talla, IMC (Peso/Talla²). Normal: 18.5 - 24.9.",
          textRO: "Antropometrie: Greutate, Înălțime, IMC (Greutate/Înălțime²). Normal: 18.5 - 24.9.",
        },
        {
          icon: FileSpreadsheet,
          textES: "Bioquímica: Albúmina (vida media larga), Prealbúmina (vida corta, mejor para cambios agudos), Transferrina.",
          textRO: "Biochimie: Albumină (viață medie lungă), Prealbumină (viață scurtă, mai bună pt schimbări acute), Transferină.",
        },
      ],
    },
  ],
};
