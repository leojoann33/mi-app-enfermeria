import {
  Shield,
  ShieldAlert,
  Flame,
} from "lucide-react";

export const CLINICAL_13_TOPIC_1 = {
  id: "part7_clinical13_topic1",
  titleES: "Inmunidad e Inflamación",
  titleRO: "Imunitate și Inflamație",
  isExpert: false,
  learningObjectives: [
    "Diferenciar Inmunidad Innata (Inespecífica) de Adquirida (Específica).",
    "Conocer los órganos linfoides (Primarios y Secundarios).",
    "Describir las fases de la Inflamación.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Tipos de Inmunidad",
      textRO: "1. Tipuri de Imunitate",
    },
    {
      type: "table",
      headersES: ["Tipo", "Características", "Componentes"],
      headersRO: ["Tip", "Caracteristici", "Componente"],
      rows: [
        {
          colsES: ["Innata (Inespecífica)", "Inmediata, SIN memoria.", "Barreras (Piel), Fagocitos, NK, Complemento."],
          colsRO: ["Innată (Inespecifică)", "Imediată, FĂRĂ memorie.", "Bariere (Piele), Fagocite, NK, Complement."],
        },
        {
          colsES: ["Adquirida (Adaptativa)", "Latencia, CON memoria específica.", "Linfocitos B (Anticuerpos/Humoral) y T (Celular)."],
          colsRO: ["Dobândită (Adaptativă)", "Latență, CU memorie specifică.", "Limfocite B (Anticorpi/Umorala) și T (Celulară)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Inflamación",
      textRO: "2. Inflamație",
    },
    {
      type: "list",
      items: [
        {
          icon: Flame,
          textES: "Fases: 1. Vasoconstricción (breve) -> 2. Vasodilatación (Rubor/Calor) y Permeabilidad (Edema) -> 3. Migración Leucocitaria (Quimiotaxis).",
          textRO: "Faze: 1. Vasoconstricție (scurtă) -> 2. Vasodilatație (Roșeață/Căldură) și Permeabilitate (Edem) -> 3. Migrare Leucocitară (Chimiotaxie).",
        },
        {
          icon: Shield,
          textES: "Órganos Linfoides: Primarios (Médula ósea, Timo - maduración); Secundarios (Ganglios, Bazo, MALT - acción).",
          textRO: "Organe Limfoide: Primare (Măduvă osoasă, Timus - maturare); Secundare (Ganglioni, Splină, MALT - acțiune).",
        },
      ],
    },
  ],
};
