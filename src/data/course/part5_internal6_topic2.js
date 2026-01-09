import {
  Bug,
  Brain,
  Search,
  Heart,
  Syringe,
  AlertOctagon,
} from "lucide-react";

export const INTERNAL_6_TOPIC_2 = {
  id: "internal-6-2",
  titleES: "Medicina Interna: Meningitis y Endocarditis",
  titleRO: "Medicină Internă: Meningită și Endocardită",
  isExpert: true,
  learningObjectives: [
    "Signos meníngeos y asistencia en Punción Lumbar.",
    "Sospecha clínica de Endocarditis (Fiebre + Soplo).",
    "Fenómenos embólicos periféricos.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Meningitis Bacteriana Aguda",
      textRO: "1. Meningită Bacteriană Acută",
    },
    {
      type: "p",
      textES: "Urgencia médica. Tiempo puerta-aguja < 30min si sospecha alta.",
      textRO: "Urgență medicală. Timp ușă-ac < 30min dacă suspiciunea e mare.",
    },
    {
      type: "list",
      items: [
        {
          icon: Search,
          textES: "Signos Clásicos: Rigidez de nuca, Signo de Kernig (dolor al estirar pierna 90º), Signo de Brudzinski (flexiona rodillas al levantar cabeza).",
          textRO: "Semne Clasice: Redoare de ceafă, Semn Kernig (durere la întindere picior 90º), Semn Brudzinski (flexie genunchi la ridicare cap).",
        },
        {
          icon: Syringe,
          textES: "Punción Lumbar (PL): Enfermería coloca al paciente en posición fetal o sentado curvado. IMPORTANTE: Si hay signos de hipertensión intracraneal (papiledema, focalidad), hacer TAC antes de PL (riesgo herniación).",
          textRO: "Puncție Lombară (PL): Asistentul așează pacientul în poziție fetală sau șezând curbat. IMPORTANT: Dacă sunt semne de hipertensiune intracraniană (papiledem, focalitate), faceți CT înainte de PL (risc herniere).",
        },
        {
          icon: Bug,
          textES: "Líquido Cefalorraquídeo (LCR Bacteriano): Turbio, Glucosa baja (bacterias comen azúcar), Proteínas altas, Leucocitos PMN altos.",
          textRO: "Lichid Cefalorahidian (LCR Bacterian): Tulbure, Glucoză mică (bacteriile mănâncă zahăr), Proteine mari, Leucocite PMN mari.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Endocarditis Infecciosa",
      textRO: "2. Endocardită Infecțioasă",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Heart,
      titleES: "FIEBRE + NUEVO SOPLO",
      textES: "Es la combinación clásica. Una vegetación (pegote de bacterias y fibrina) en la válvula.",
      titleRO: "FEBRĂ + SUFLU NOU",
      textRO: "Este combinația clasică. O vegetație (ghem de bacterii și fibrină) pe valvă.",
    },
    {
      type: "table",
      headersES: ["Signo Periférico", "Descripción", "Causa"],
      headersRO: ["Semn Periferic", "Descriere", "Cauză"],
      rows: [
        { colsES: ["Lesiones de Janeway", "Manchas rojas indoloras en palmas/plantas.", "Embolias sépticas."], colsRO: ["Leziuni Janeway", "Pete roșii nedureroase pe palme/tălpi.", "Embolii septice."] },
        { colsES: ["Nódulos de Osler", "Nódulos dolorosos en pulpejos de dedos.", "Inmunocomplejos."], colsRO: ["Noduli Osler", "Noduli dureroși pe pulpele degetelor.", "Imunocomplexe."] },
        { colsES: ["Manchas de Roth", "Hemorragias en la retina.", "Microembolias."], colsRO: ["Pete Roth", "Hemoragii în retină.", "Microembolii."] },
      ],
    },
  ],
};
