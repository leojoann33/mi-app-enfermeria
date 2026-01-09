import {
  Skull,
  Pill,
  Syringe,
  Activity,
  AlertTriangle,
} from "lucide-react";

export const INTERNAL_10_TOPIC_2 = {
  id: "internal-10-2",
  titleES: "Medicina Interna: Intoxicaciones y Antídotos",
  titleRO: "Medicină Internă: Intoxicații și Antidoturi",
  isExpert: true,
  learningObjectives: [
    "Manejo inicial del paciente intoxicado (ABCDE).",
    "El 'Cóctel del Coma'.",
    "Antídotos específicos vitales.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. El 'Cóctel del Coma' (Empírico)",
      textRO: "1. 'Cocteilul de Comă' (Empiric)",
    },
    {
      type: "p",
      textES: "En paciente con disminución de consciencia de causa no clara (posible tóxico), considerar:",
      textRO: "La pacient cu scăderea conștienței de cauză neclară (posibil toxic), considerați:",
    },
    {
      type: "list",
      items: [
        {
          icon: Syringe,
          textES: "Naloxona: Si sospecha opiáceos (pupilas puntiformes, bradipnea).",
          textRO: "Naloxonă: Dacă suspiciune opioide (pupile punctiforme, bradipnee).",
        },
        {
          icon: Pill,
          textES: "Flumazenilo: ¡CUIDADO! Antídoto de Benzodiacepinas. NO USAR si el paciente toma benzos crónicamente (provoca convulsiones) o si hay antidepresivos tricíclicos.",
          textRO: "Flumazenil: ATENȚIE! Antidot Benzodiazepine. NU FOLOSI dacă pacientul ia benzo cronic (provoacă convulsii) sau antidepresive triciclice.",
        },
        {
          icon: Activity,
          textES: "Tiamina (B1) + Glucosa: En alcohólicos/desnutridos, dar Tiamina ANTES de la glucosa para evitar Encefalopatía de Wernicke.",
          textRO: "Tiamină (B1) + Glucoză: La alcoolici/subnutriți, dă Tiamină ÎNAINTE de glucoză pentru a evita Encefalopatia Wernicke.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Antídotos Específicos",
      textRO: "2. Antidoturi Specifice",
    },
    {
      type: "table",
      headersES: ["Tóxico", "Antídoto", "Notas Enfermería"],
      headersRO: ["Toxic", "Antidot", "Note Asistență"],
      rows: [
        { colsES: ["Paracetamol", "N-Acetilcisteína (NAC).", "Protocolo de 21 horas. Huele a huevos podridos (advertir al paciente)."], colsRO: ["Paracetamol", "N-Acetilcisteină (NAC).", "Protocol de 21 ore. Miroase a ouă stricate (avertizați pacientul)."] },
        { colsES: ["Digoxina", "Anticuerpos Fab (Digibind).", "Solo en arritmias vitales o hiperpotasemia grave."], colsRO: ["Digoxină", "Anticorpi Fab (Digibind).", "Doar în aritmii vitale sau hiperkaliemie gravă."] },
        { colsES: ["Monóxido Carbono", "Oxígeno 100% (Alto flujo).", "La pulsioximetría MIENTE (marca 100% aunque esté intoxicado)."], colsRO: ["Monoxid Carbon", "Oxigen 100% (Flux mare).", "Pulsoximetria MINTE (arată 100% chiar dacă e intoxicat)."] },
      ],
    },
  ],
};
