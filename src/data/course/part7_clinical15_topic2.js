import {
  Fan,
  Activity,
  Gauge,
} from "lucide-react";

export const CLINICAL_15_TOPIC_2 = {
  id: "part7_clinical15_topic2",
  titleES: "Ventilación Mecánica (Modos)",
  titleRO: "Ventilație Mecanică (Moduri)",
  isExpert: false,
  learningObjectives: [
    "Diferenciar VM Invasiva de No Invasiva (VMNI).",
    "Entender conceptos básicos: CPAP, PEEP, Trigger.",
    "Monitorización básica: Capnografía (EtCO2).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tipos de Ventilación",
      textRO: "1. Tipuri de Ventilație",
    },
    {
      type: "table",
      headersES: ["Modalidad", "Descripción", "Indicación"],
      headersRO: ["Modalitate", "Descriere", "Indicație"],
      rows: [
        {
          colsES: ["VMNI (No Invasiva)", "Interfaz externa (mascarilla). CPAP (presión contínua) o BiPAP (dos niveles).", "EAP, EPOC agudizado, prevenir IOT."],
          colsRO: ["VMNI (Non-Invazivă)", "Interfață externă (mască). CPAP (presiune continuă) sau BiPAP (două nivele).", "EAP, BPOC acutizat, prevenire IOT."],
        },
        {
          colsES: ["VMI (Invasiva)", "Tubo endotraqueal + Respirador.", "Fallo respiratorio grave, bajo nivel consciencia."],
          colsRO: ["VMI (Invazivă)", "Tub endotraheal + Respirator.", "Insuficiență respiratorie gravă, nivel conștiență scăzut."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Conceptos Clave",
      textRO: "2. Concepte Cheie",
    },
    {
      type: "list",
      items: [
        {
          icon: Fan,
          textES: "Modos: Controlada (el respirador hace todo) vs Asistida (paciente inicia 'trigger', respirador apoya).",
          textRO: "Moduri: Controlată (respiratorul face tot) vs Asistată (pacientul începe 'trigger', respiratorul ajută).",
        },
        {
          icon: Gauge,
          textES: "PEEP: Presión positiva al final de espiración. Mantiene alveolos abiertos (reclutamiento).",
          textRO: "PEEP: Presiune pozitivă la final de expirație. Menține alveole deschise (recrutare).",
        },
        {
          icon: Activity,
          textES: "Capnografía (EtCO2): Mide CO2 exhalado. Confirma posición del tubo y calidad de ventilación.",
          textRO: "Capnografie (EtCO2): Măsoară CO2 exhalat. Confirmă poziție tub și calitate ventilare.",
        },
      ],
    },
  ],
};
