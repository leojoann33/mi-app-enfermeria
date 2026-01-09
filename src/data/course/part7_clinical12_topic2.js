import {
  Zap,
  HeartCrack,
  Droplet,
  Biohazard,
} from "lucide-react";

export const CLINICAL_12_TOPIC_2 = {
  id: "part7_clinical12_topic2",
  titleES: "Tipos de Shock y Fallo Multiorgánico",
  titleRO: "Tipuri de Șoc și Insuficiență Multiorganică",
  isExpert: false,
  learningObjectives: [
    "Clasificar los tipos de Shock (Hipovolémico, Cardiogénico, Distributivo).",
    "Identificar el SDRA (Distrés Respiratorio Agudo).",
    "Conocer el concepto de Fallo Multiorgánico (SDMO).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tipos de Shock",
      textRO: "1. Tipuri de Șoc",
    },
    {
      type: "p",
      textES: "SHOCK: Insuficiencia circulatoria -> Hipoperfusión tisular -> Hipoxia celular.",
      textRO: "ȘOC: Insuficiență circulatorie -> Hipoperfuzie tisulară -> Hipoxie celulară.",
    },
    {
      type: "table",
      headersES: ["Tipo", "Causa", "Tratamiento Prioritario"],
      headersRO: ["Tip", "Cauză", "Tratament Prioritar"],
      rows: [
        {
          colsES: ["Hipovolémico", "Hemorragia, Deshidratación.", "Fluidos + Hemoderivados."],
          colsRO: ["Hipovolemic", "Hemoragie, Deshidratare.", "Fluide + Hemoderivate."],
        },
        {
          colsES: ["Cardiogénico", "Fallo bomba (IAM, Arritmia).", "Inotrópicos (Dobutamina) + Reperfusión."],
          colsRO: ["Cardiogenic", "Eșec pompă (IAM, Aritmie).", "Inotrope (Dobutamină) + Reperfuzie."],
        },
        {
          colsES: ["Séptico (Distributivo)", "Infección sistémica (Vasoplejia).", "Antibióticos + Noradrenalina."],
          colsRO: ["Septic (Distributiv)", "Infecție sistemică (Vasoplegie).", "Antibiotice + Noradrenalină."],
        },
        {
          colsES: ["Anafiláctico", "Alergia grave.", "ADRENALINA IM inmedata."],
          colsRO: ["Anafilactic", "Alergie gravă.", "ADRENALINĂ IM imediat."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Síndromes Críticos",
      textRO: "2. Sindroame Critice",
    },
    {
      type: "list",
      items: [
        {
          icon: Zap,
          textES: "SDRA (Distrés Respiratorio): Hipoxemia refractaria + Edema pulmonar NO cardiogénico (pulmón blanco). Tto: Pronación + PEEP.",
          textRO: "SDRA (Detresă Respiratorie): Hipoxemie refractară + Edem pulmonar NON-cardiogenic (plămân alb). Trat: Pronație + PEEP.",
        },
        {
          icon: Biohazard,
          textES: "SDMO (Fallo Multiorgánico): Fallo de >2 órganos. Escala SOFA.",
          textRO: "SDMO (Insuficiență Multiorganică): Eșec >2 organe. Scala SOFA.",
        },
      ],
    },
  ],
};
