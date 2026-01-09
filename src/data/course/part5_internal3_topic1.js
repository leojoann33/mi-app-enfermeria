import {
  Droplet,
  Activity,
  AlertTriangle,
  Stethoscope,
  ArrowDown,
  FileText,
} from "lucide-react";

export const INTERNAL_3_TOPIC_1 = {
  id: "internal-3-1",
  titleES: "Medicina Interna: Hemorragia Digestiva (HDA/HDB)",
  titleRO: "Medicină Internă: Hemoragie Digestivă (HDS/HDI)",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Hematemesis, Melenas y Rectorragia.",
    "Cuidados en la Sonda de Sengstaken-Blakemore.",
    "Clasificación de Forrest (Significado para enfermería).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Identificación y Estabilización",
      textRO: "1. Identificare și Stabilizare",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Hematemesis: Vómito de sangre roja (HDA activa).",
          textRO: "Hematemeză: Vărsătură cu sânge roșu (HDS activă).",
        },
        {
          icon: Activity,
          textES: "Melenas: Heces negras, alquitranosas y malolientes (Sangre digerida). Origen alto (HDA).",
          textRO: "Melene: Scaun negru, ca smoala și urât mirositor (Sânge digerat). Origine înaltă (HDS).",
        },
        {
          icon: ArrowDown,
          textES: "Rectorragia: Sangre roja fresca por recto. Origen bajo (HDB) o alto masivo (tránsito rápido).",
          textRO: "Rectoragie: Sânge roșu proaspăt rectal. Origine joasă (HDI) sau înaltă masivă (tranzit rapid).",
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: AlertTriangle,
      titleES: "LA SONDA SENGSTAKEN-BLAKEMORE",
      textES: "Balonamiento de urgencia para varices esofágicas sangrantes. ¡CUIDADO! Si se rompe el balón gástrico, el esofágico puede subir y obstruir la vía aérea. Ten tijeras siempre cerca para cortar la sonda y desinflarla.",
      titleRO: "SONDA SENGSTAKEN-BLAKEMORE",
      textRO: "Tamponament de urgență pentru varice esofagiene sângerânde. ATENȚIE! Dacă se sparge balonul gastric, cel esofagian poate urca și obstrua calea aeriană. Aveți foarfece mereu aproape pentru a tăia sonda și a o dezumfla.",
    },
    {
      type: "h3",
      textES: "2. Clasificación de Forrest (Gastroscopia)",
      textRO: "2. Clasificarea Forrest (Gastroscopie)",
    },
    {
      type: "table",
      headersES: ["Tipo", "Hallazgo", "Riesgo Resangrado", "Manejo"],
      headersRO: ["Tip", "Descoperire", "Risc Resângerare", "Management"],
      rows: [
        { colsES: ["Ia / Ib", "Sangrado activo (Chorro/Babeo).", "90% (Muy alto).", "Endoscopia Terapéutica + Bomba PPI IV altas dosis."], colsRO: ["Ia / Ib", "Sângerare activă (Jet/Pulsatilă).", "90% (Foarte înalt).", "Endoscopie Terapeutică + Pompă IPP IV doze mari."] },
        { colsES: ["IIa / IIb", "Vaso visible / Coágulo adherido.", "50% (Alto).", "Ingreso + Tratamiento Endoscópico."], colsRO: ["IIa / IIb", "Vas vizibil / Cheag aderent.", "50% (Înalt).", "Internare + Tratament Endoscopic."] },
        { colsES: ["IIc / III", "Hematina / Base limpia.", "< 10% (Bajo).", "Alta precoz posible. PPI oral."], colsRO: ["IIc / III", "Hematină / Bază curată.", "< 10% (Scăzut).", "Externare precoce posibilă. IPP oral."] },
      ],
    },
  ],
};
