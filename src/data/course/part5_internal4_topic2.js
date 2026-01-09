import {
  Thermometer,
  Zap,
  Activity,
  AlertOctagon,
  Pill,
} from "lucide-react";

export const INTERNAL_4_TOPIC_2 = {
  id: "internal-4-2",
  titleES: "Medicina Interna: Urgencias Tiroideas y Suprarrenales",
  titleRO: "Medicină Internă: Urgențe Tiroidiene și Suprarenale",
  isExpert: true,
  learningObjectives: [
    "Identificar y tratar la Tormenta Tiroidea.",
    "Manejo de la Crisis Addisoniana (Insuficiencia Suprarrenal).",
    "La importancia de los corticoides a dosis de estrés.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tormenta Tiroidea: Un Volcán en Erupción",
      textRO: "1. Furtuna Tiroidiană: Un Vulcan în Erupție",
    },
    {
      type: "p",
      textES: "Emergencia vital por hipertiroidismo descontrolado. Mortalidad 10-30%.",
      textRO: "Urgență vitală prin hipertiroidism necontrolat. Mortalitate 10-30%.",
    },
    {
      type: "list",
      items: [
        {
          icon: Thermometer,
          textES: "Clínica: Fiebre alta (>40ºC), Taquicardia severa (>140), Agitación/Delirium.",
          textRO: "Clinică: Febră mare (>40ºC), Tahicardie severă (>140), Agitație/Delir.",
        },
        {
          icon: Pill,
          textES: "Las 4 Ps del Tratamiento: Propranolol (frena corazón), PTU/Metimazol (frena síntesis), Potasio Yoduro (lugol, frena liberación), Prednisona (frena conversión T4->T3).",
          textRO: "Cele 4 P-uri ale Tratamentului: Propranolol (frânează inima), PTU/Metimazol (frânează sinteza), Potasiu Iodură (lugol, frânează eliberarea), Prednison (frânează conversia T4->T3).",
        },
        {
          icon: AlertOctagon,
          textES: "¡NO DAR ASPIRINA!: Desplaza la tiroxina de las proteínas y empeora la crisis. Usar Paracetamol para la fiebre.",
          textRO: "NU DAȚI ASPIRINĂ!: Deplasează tiroxina de pe proteine și agravează criza. Folosiți Paracetamol pentru febră.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Crisis Suprarrenal (Addisoniana)",
      textRO: "2. Criză Suprarenală (Addisoniană)",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Activity,
      titleES: "SHOCK RESISTENTE",
      textES: "Sospechar en paciente con hipotensión refractaria a fluidos + vasopresores, que además tiene hiponatremia, hiperpotasemia e hipoglucemia.",
      titleRO: "ȘOC REZISTENT",
      textRO: "Suspicionați la pacient cu hipotensiune refractară la fluide + vasopresoare, care are și hiponatremie, hiperkaliemie și hipoglicemie.",
    },
    {
      type: "table",
      headersES: ["Acción", "Fármaco/Dosis", "Objetivo"],
      headersRO: ["Acțiune", "Medicament/Doză", "Obiectiv"],
      rows: [
        { colsES: ["Reemplazo Hormonal", "Hidrocortisona 100mg IV bolo.", "Sustituir el cortisol que falta."], colsRO: ["Substituție Hormonală", "Hidrocortizon 100mg IV bolus.", "Înlocuirea cortizolului lipsă."] },
        { colsES: ["Soporte Volumen", "Suero Salino al 0.9%.", "Corregir Hipotensión y Sodio bajo."], colsRO: ["Suport Volum", "Ser Fiziologic 0.9%.", "Corectare Hipotensiune și Sodiu mic."] },
        { colsES: ["Corregir Glucosa", "Dextrosa/Glucosado.", "Tratar Hipoglucemia."], colsRO: ["Corectare Glucoză", "Dextroză/Glucoză.", "Tratare Hipoglicemie."] },
      ],
    },
  ],
};
