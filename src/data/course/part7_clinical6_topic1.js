import {
  Flame,
  Bug,
  Activity,
  GlassWater,
} from "lucide-react";

export const CLINICAL_6_TOPIC_1 = {
  id: "part7_clinical6_topic1",
  titleES: "Patología Gástrica: H. Pylori y Úlceras",
  titleRO: "Patologie Gastrică: H. Pylori și Ulcere",
  isExpert: false,
  learningObjectives: [
    "Diferenciar úlcera Gástrica (dolor con ingesta) de Duodenal (dolor post-ingesta/nocturno).",
    "Tratamiento erradicador de Helicobacter Pylori.",
    "Manejo de la Hemorragia Digestiva Alta (HDA).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Helicobacter Pylori y Gastritis",
      textRO: "1. Helicobacter Pylori și Gastrită",
    },
    {
      type: "list",
      items: [
        {
          icon: Bug,
          textES: "H. Pylori: Causa gastritis crónica (generalmente asintomática). Dx: Test aliento, heces.",
          textRO: "H. Pylori: Cauzează gastrită cronică (general asimptomatică). Dx: Test respirație, scaun.",
        },
        {
          icon: Activity,
          textES: "Tratamiento (1ª Línea - 14 días): Omeprazol + Claritromicina + Amoxicilina + Metronidazol.",
          textRO: "Tratament (Linia 1 - 14 zile): Omeprazol + Claritromicină + Amoxicilină + Metronidazol.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Úlcera Péptica",
      textRO: "2. Ulcer Peptic",
    },
    {
      type: "table",
      headersES: ["Tipo", "Dolor", "Causa Frecuente"],
      headersRO: ["Tip", "Durere", "Cauză Frecventă"],
      rows: [
        {
          colsES: ["Gástrica", "Epigástrico INMEDIATO tras comer. Pierde peso (miedo a comer).", "AINES, H. Pylori."],
          colsRO: ["Gastrică", "Epigastric IMEDIAT după mâncare. Pierde greutate (frică de mâncare).", "AINS, H. Pylori."],
        },
        {
          colsES: ["Duodenal", "Epigástrico 2-3h POST-ingesta. Alivia al comer. Despierta por la noche.", "H. Pylori (>90%)."],
          colsRO: ["Duodenal", "Epigastric 2-3h POST-ingestie. Încetează la mâncare. Trezește noaptea.", "H. Pylori (>90%)."],
        },
      ],
    },
    {
      type: "alert",
      variant: "warning",
      icon: Flame,
      titleES: "HEMORRAGIA DIGESTIVA ALTA (HDA)",
      textES: "Hematemesis (vómito sangre fresca) o Posos de café (sangre digerida). Melenas (heces negras alquitranadas). Actuación: Estabilizar, IBP Bomba, Endoscopia.",
      titleRO: "HEMORAGIE DIGESTIVĂ ÎNALTĂ (HDA)",
      textRO: "Hematemeză (vărsătură sânge proaspăt) sau Zaț de cafea (sânge digerat). Melenă (scaun negru ca smoala). Acțiune: Stabilizare, IBP Pompă, Endoscopie.",
    },
  ],
};
