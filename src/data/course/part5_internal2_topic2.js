import {
  Brain,
  Zap,
  Activity,
  Timer,
  Eye,
  AlertTriangle,
} from "lucide-react";

export const INTERNAL_2_TOPIC_2 = {
  id: "internal-2-2",
  titleES: "Medicina Interna: Crisis Convulsivas y Coma",
  titleRO: "Medicină Internă: Crize Convulsive și Comă",
  isExpert: true,
  learningObjectives: [
    "Algoritmo de tratamiento del Estatus Epiléptico.",
    "Cuidados de seguridad durante la convulsión.",
    "Valoración neurológica del paciente en coma (GCS).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. ¡Convulsión! ¿Qué hago?",
      textRO: "1. Convulsie! Ce fac?",
    },
    {
      type: "list",
      items: [
        {
          icon: Eye,
          textES: "Seguridad: No meter nada en la boca. Proteger la cabeza. Posición lateral si es posible (aspiración). Cronometrar duración.",
          textRO: "Siguranță: Nu introduceți nimic în gură. Protejați capul. Poziție laterală dacă e posibil (aspirație). Cronometrați durata.",
        },
        {
          icon: Zap,
          textES: "Minuto 0-5 (Emergencia): Benzodiacepinas. Midazolam (IM/IV/Nasal) o Diazepam (Rectal/IV).",
          textRO: "Minut 0-5 (Urgență): Benzodiazepine. Midazolam (IM/IV/Nazal) sau Diazepam (Rectal/IV).",
        },
        {
          icon: Timer,
          textES: "Minuto 5-20 (Estatus establecido): Fármaco antiepiléptico de carga. Levetiracetam (Keppra), Valproato o Fenitoína.",
          textRO: "Minut 5-20 (Status stabilit): Medicament antiepileptic de încărcare. Levetiracetam (Keppra), Valproat sau Fenitoină.",
        },
        {
          icon: Brain,
          textES: "> 30 Min (Estatus Refractario): Requiere INTUBACIÓN y sedación profunda (Propofol/Midazolam) en UCI.",
          textRO: "> 30 Min (Status Refractar): Necesită INTUBARE și sedare profundă (Propofol/Midazolam) în ATI.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. El Paciente en Coma: Glasgow (GCS)",
      textRO: "2. Pacientul în Comă: Glasgow (GCS)",
    },
    {
      type: "alert",
      variant: "danger",
      icon: AlertTriangle,
      titleES: "GCS < 8 = PROTEGER VÍA AÉREA",
      textES: "Si la puntuación es menor de 8, el paciente no protege su vía aérea (riesgo broncoaspiración). Intubación electiva recomendada.",
      titleRO: "GCS < 8 = PROTEJARE CALE AERIANĂ",
      textRO: "Dacă scorul este sub 8, pacientul nu își protejează calea aeriană (risc bronhoaspirație). Intubare electivă recomandată.",
    },
    {
      type: "table",
      headersES: ["Área", "Puntuación Máxima (15 total)", "Respuesta Mínima (1)"],
      headersRO: ["Arie", "Punctaj Maxim (15 total)", "Răspuns Minim (1)"],
      rows: [
        { colsES: ["Ojos (4)", "Espontánea."], colsRO: ["Ochi (4)", "Spontană."] },
        { colsES: ["Verbal (5)", "Orientada."], colsRO: ["Verbal (5)", "Orientată."] },
        { colsES: ["Motor (6)", "Obedece órdenes."], colsRO: ["Motor (6)", "Ascultă comenzi."] },
      ],
    },
  ],
};
