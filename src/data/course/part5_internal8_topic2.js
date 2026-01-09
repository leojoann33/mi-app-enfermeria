import {
  Search,
  AlertTriangle,
  Stethoscope,
  Activity,
  AlertOctagon,
} from "lucide-react";

export const INTERNAL_8_TOPIC_2 = {
  id: "internal-8-2",
  titleES: "Medicina Interna: La Piel como Espejo",
  titleRO: "Medicină Internă: Pielea ca Oglindă",
  isExpert: true,
  learningObjectives: [
    "Reconocer Púrpura Palpable (Vasculitis).",
    "Eritema Nadoso y sus causas.",
    "Pioderma Gangrenoso (No es infeccioso).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Signos Cutáneos de Enfermedad Interna",
      textRO: "1. Semne Cutanate de Boală Internă",
    },
    {
      type: "table",
      headersES: ["Lesión", "Descripción Clave", "Asociación Médica"],
      headersRO: ["Leziune", "Descriere Cheie", "Asociere Medicală"],
      rows: [
        { colsES: ["Púrpura Palpable", "Puntos rojos que NO desaparecen al presionar (vitropresión +) y tienen relieve.", "Vasculitis sistémica (afecta riñón, pulmón)."], colsRO: ["Purpură Palpabilă", "Puncte roșii care NU dispar la presiune (vitropresiune +) și au relief.", "Vasculită sistemică (afectează rinichi, plămân)."] },
        { colsES: ["Eritema Nadoso", "Nódulos rojos, calientes y dolorosos en cara anterior de piernas (espinillas).", "Sarcoidosis, Tuberculosis, Enfermedad Inflamatoria Intestinal, Anticonceptivos."], colsRO: ["Eritem Nodos", "Noduli roșii, calzi și dureroși pe fața anterioară a gambelor.", "Sarcoidoză, Tuberculoză, Boală Inflamatorie Intestinală, Anticoncepționale."] },
        { colsES: ["Pioderma Gangrenoso", "Úlcera profunda, bordes violáceos socavados, muy dolorosa. Patergia (crece con trauma).", "Colitis Ulcerosa o Crohn (50%)."], colsRO: ["Pioderma Gangrenos", "Ulcer profund, margini violacee subminate, foarte dureros. Patergie (crește la traumă).", "Colită Ulceroasă sau Crohn (50%)."] },
      ],
    },
    {
      type: "h3",
      textES: "2. Petequias y Fiebre: ¡Alerta!",
      textRO: "2. Peteșii și Febră: Alertă!",
    },
    {
      type: "alert",
      variant: "expert",
      icon: AlertOctagon,
      titleES: "SEPSIS MENINGOCÓCICA",
      textES: "Cualquier paciente febril con petequias (puntos rojos que no desaparecen al apretar) tiene una Meningoccemia hasta que se demuestre lo contrario. Muerte en horas. Antibiótico inmediato.",
      titleRO: "SEPSIS MENINGOCOCICĂ",
      textRO: "Orice pacient febril cu peteșii (puncte roșii care nu dispar la apăsare) are o Meningococemie până la proba contrarie. Moarte în ore. Antibiotic imediat.",
    },
  ],
};
