import {
  HeartPulse,
  Brain,
  Zap,
  TestTubes,
  AlertTriangle,
} from "lucide-react";

export const INTERNAL_9_TOPIC_2 = {
  id: "internal-9-2",
  titleES: "Medicina Interna: Urgencias Hidroelectrolíticas",
  titleRO: "Medicină Internă: Urgențe Hidroelectrolitice",
  isExpert: true,
  learningObjectives: [
    "Hiperpotasemia (Hiperkalemia): El asesino cardiaco.",
    "Hiponatremia: El asesino cerebral.",
    "Tratamientos de emergencia paso a paso.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Hiperpotasemia (K+ > 5.5 mEq/L)",
      textRO: "1. Hiperkaliemie (K+ > 5.5 mEq/L)",
    },
    {
      type: "alert",
      variant: "danger",
      icon: HeartPulse,
      titleES: "RIESGO DE PARADA CARDIACA",
      textES: "Si K+ > 6.5 o cambios ECG (T picudas, QRS ancho), actuar INMEDIATAMENTE. El corazón se para en diástole.",
      titleRO: "RISC DE STOP CARDIAC",
      textRO: "Dacă K+ > 6.5 sau modificări EKG (T ascuțite, QRS larg), acționați IMEDIAT. Inima se oprește în diastolă.",
    },
    {
      type: "table",
      headersES: ["Paso", "Fármaco", "Mecanismo"],
      headersRO: ["Pas", "Medicament", "Mecanism"],
      rows: [
        { colsES: ["1. Proteger", "Gluconato Cálcico IV.", "Estabiliza membrana cardiaca (No baja el K+, pero evita la arritmia)."], colsRO: ["1. Protecție", "Gluconat de Calciu IV.", "Stabilizează membrana cardiacă (Nu scade K+, dar previne aritmia)."] },
        { colsES: ["2. Meter", "Insulina Rápida + Glucosa.", "Mete K+ dentro de la célula (Efecto rápido, dura horas)."], colsRO: ["2. Introducere", "Insulină Rapidă + Glucoză.", "Introduce K+ în celulă (Efect rapid, durează ore)."] },
        { colsES: ["2. Meter (Alt)", "Salbutamol nebulizado.", "Ayuda a meter K+."], colsRO: ["2. Introducere (Alt)", "Salbutamol nebulizat.", "Ajută la introducerea K+."] },
        { colsES: ["3. Eliminar", "Diuréticos (Furosemida) o Resinas.", "Expulsa K+ del cuerpo (Efecto lento)."], colsRO: ["3. Eliminare", "Diuretice (Furosemid) sau Rășini.", "Expulzează K+ din corp (Efect lent)."] },
      ],
    },
    {
      type: "h3",
      textES: "2. Hiponatremia (Na+ < 135 mEq/L)",
      textRO: "2. Hiponatremie (Na+ < 135 mEq/L)",
    },
    {
      type: "list",
      items: [
        {
          icon: Brain,
          textES: "Síntomas: Cefalea, letargia, convulsiones, coma (Edema Cerebral).",
          textRO: "Simptome: Cefalee, letargie, convulsii, comă (Edem Cerebral).",
        },
        {
          icon: AlertTriangle,
          textES: "Corrección Lenta: ¡CUIDADO! Si subes el Sodio muy rápido (> 8-10 mEq/L en 24h) produces Mielinólisis Central Pontina (Tetraplejia irreversible).",
          textRO: "Corecție Lentă: ATENȚIE! Dacă crești Sodiul prea repede (> 8-10 mEq/L în 24h) produci Mielinoliză Centrală Pontină (Tetraplegie ireversibilă).",
        },
        {
          icon: TestTubes,
          textES: "Tratamiento Agudo Grave: Suero Salino Hipertónico 3% (Solo en UCI/Urgencias bajo monitorización estricta).",
          textRO: "Tratament Acut Grav: Ser Salin Hipertonic 3% (Doar în ATI/Urgențe sub monitorizare strictă).",
        },
      ],
    },
  ],
};
