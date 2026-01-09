import {
  Droplet,
  ShieldAlert,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export const INTERNAL_5_TOPIC_1 = {
  id: "internal-5-1",
  titleES: "Medicina Interna: Medicina Transfusional",
  titleRO: "Medicină Internă: Medicină Transfuzională",
  isExpert: true,
  learningObjectives: [
    "Compatibilidad AB0 y Rh.",
    "Protocolo de Transfusión Masiva (MTP).",
    "Reacciones Transfusionales Graves (TRALI, TACO, Hemolisis).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Reglas de Oro de la Sangre",
      textRO: "1. Regulile de Aur ale Sângelui",
    },
    {
      type: "p",
      textES: "Error AB0 = Muerte rápida. La identificación a pie de cama es el paso más crítico.",
      textRO: "Eroare AB0 = Moarte rapidă. Identificarea la patul pacientului este cel mai critic pas.",
    },
    {
      type: "table",
      headersES: ["Grupo Paciente", "Puede Recibir Hematíes", "Puede Recibir Plasma"],
      headersRO: ["Grup Pacient", "Poate Primi Hematii", "Poate Primi Plasmă"],
      rows: [
        { colsES: ["O (Donante Universal Hematíes)", "Solo O.", "O, A, B, AB (Donante Univ. Plasma)."], colsRO: ["O (Donator Universal Hematii)", "Doar O.", "O, A, B, AB (Donator Univ. Plasmă)."] },
        { colsES: ["AB (Receptor Univ. Hematíes)", "O, A, B, AB.", "Solo AB."], colsRO: ["AB (Receptor Univ. Hematii)", "O, A, B, AB.", "Doar AB."] },
        { colsES: ["Rh Negativo", "Solo Rh Negativo.", "Rh Pos o Neg (Sin anticuerpos)."], colsRO: ["Rh Negativ", "Doar Rh Negativ.", "Rh Poz sau Neg (Fără anticorpi)."] },
      ],
    },
    {
      type: "h3",
      textES: "2. Reacciones Adversas Graves",
      textRO: "2. Reacții Adverse Grave",
    },
    {
      type: "list",
      items: [
        {
          icon: ShieldAlert,
          textES: "Reacción Hemolítica Aguda: Fiebre + Dolor Lumbar + Orina oscura (hemoglobinuria). STOP TRANSFUSIÓN. Hidratar.",
          textRO: "Reacție Hemolitică Acută: Febră + Durere Lombară + Urină închisă (hemoglobinurie). STOP TRANSFUZIE. Hidratare.",
        },
        {
          icon: Droplet,
          textES: "TACO (Sobrecarga Circulatoria): Edema agudo de pulmón por exceso de volumen. Hipertensión. Tto: Diuréticos + O2.",
          textRO: "TACO (Supraîncărcare Circulatorie): Edem pulmonar acut prin exces de volum. Hipertensiune. Trat: Diuretice + O2.",
        },
        {
          icon: AlertTriangle,
          textES: "TRALI (Lesión Pulmonar Aguda): Distress respiratorio súbito e hipotensión. Reacción inmunológica pulmón vs anticuerpos donante. Tto: Soporte Ventilatirio.",
          textRO: "TRALI (Leziune Pulmonară Acută): Detresă respiratorie subită și hipotensiune. Reacție imunologică plămân vs anticorpi donator. Trat: Suport Ventilator.",
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: RefreshCw,
      titleES: "TRANSFUSIÓN MASIVA (1:1:1)",
      textES: "En sangrado exanguinante, no pases solo concentrados de hematíes o diluirás los factores. La ratio debe ser 1 Concentrado : 1 Plasma : 1 Plaquetas.",
      titleRO: "TRANSFUZIE MASIVĂ (1:1:1)",
      textRO: "În sângerare exsanguinantă, nu administra doar concentrate eritrocitare sau vei dilua factorii. Raportul trebuie să fie 1 Concentrat : 1 Plasmă : 1 Trombocite.",
    },
  ],
};
