import {
  Activity,
  Shield,
  AlertTriangle,
  Pill,
  Sun,
} from "lucide-react";

export const INTERNAL_7_TOPIC_1 = {
  id: "internal-7-1",
  titleES: "Medicina Interna: Enfermedades Autoinmunes (AR y Lupus)",
  titleRO: "Medicină Internă: Boli Autoimune (PR și Lupus)",
  isExpert: true,
  learningObjectives: [
    "Diferencias clínicas entre Artritis Reumatoide y Artrosis.",
    "Lupus Eritematoso Sistémico (LES): Signos de alarma.",
    "Manejo de Fármacos Modificadores de Enfermedad (FAMEs).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Artritis Reumatoide (AR) vs Artrosis",
      textRO: "1. Poliartrită Reumatoidă (PR) vs Artroză",
    },
    {
      type: "table",
      headersES: ["Característica", "Artritis Reumatoide (Inflamatoria)", "Artrosis (Mecánica)"],
      headersRO: ["Caracteristică", "Poliartrită Reumatoidă (Inflamatorie)", "Artroză (Mecanică)"],
      rows: [
        { colsES: ["Rigidez Matutina", "> 1 hora (Mejora con movimiento).", "< 30 min (Empeora con movimiento)."], colsRO: ["Redoare Matinală", "> 1 oră (Se ameliorează cu mișcare).", "< 30 min (Se agravează cu mișcare)."] },
        { colsES: ["Afectación", "Simétrica. Pequeñas articulaciones (MCF, IFP).", "Asimétrica. Grandes cargas (Rodilla, Cadera) y distales (IFD)."], colsRO: ["Afectare", "Simetrică. Articulații mici (MCF, IFP).", "Asimetrică. Sarcini mari (Genunchi, Șold) și distale (IFD)."] },
        { colsES: ["Síntomas Sistémicos", "Sí (Fiebre, fatiga, pérdida peso).", "No (Localizados)."], colsRO: ["Simptome Sistemice", "Da (Febră, oboseală, scădere ponderală).", "Nu (Localizate)."] },
      ],
    },
    {
      type: "h3",
      textES: "2. Lupus Eritematoso Sistémico (LES)",
      textRO: "2. Lupus Eritematos Sistemic (LES)",
    },
    {
      type: "list",
      items: [
        {
          icon: Sun,
          textES: "Fotosensibilidad: El sol es el enemigo. Puede desencadenar un brote sistémico grave (Nefritis). Protección solar 50+ siempre.",
          textRO: "Fotosensibilitate: Soarele este inamicul. Poate declanșa un puseu sistemic grav (Nefrită). Protecție solară 50+ mereu.",
        },
        {
          icon: Activity,
          textES: "Nefritis Lúpica: La principal causa de morbi-mortalidad. Controlar proteinuria y Tensión Arterial estrictamente.",
          textRO: "Nefrită Lupică: Principala cauză de morbi-mortalitate. Control strict proteinurie și Tensiune Arterială.",
        },
      ],
    },
    {
      type: "alert",
      variant: "danger",
      icon: Pill,
      titleES: "RIESGO BIOLÓGICOS",
      textES: "Pacientes con Anti-TNF (Infliximab, Adalimumab) o Rituximab tienen el sistema inmune 'apagado'. Una febrícula de 37.5ºC puede ser una Sepsis grave. Requieren valoración médica urgente ante cualquier infección.",
      titleRO: "RISC BIOLOGICE",
      textRO: "Pacienții cu Anti-TNF (Infliximab, Adalimumab) sau Rituximab au sistemul imun 'oprit'. O subfebrilitate de 37.5ºC poate fi o Sepsis gravă. Necesită evaluare medicală urgentă la orice infecție.",
    },
  ],
};
