import {
  Droplet,
  Activity,
  AlertTriangle,
  Beaker,
  TrendingDown,
} from "lucide-react";

export const INTERNAL_4_TOPIC_1 = {
  id: "internal-4-1",
  titleES: "Medicina Interna: Descompensaciones Diabéticas (CAD/EHH)",
  titleRO: "Medicină Internă: Decompensări Diabetice (CAD/SHH)",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Cetoacidosis (CAD) de Estado Hiperosmolar (EHH).",
    "Manejo de la bomba de insulina y sueroterapia.",
    "Corrección de Potasio antes de la Insulina.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. CAD vs EHH: Diferencias Clave",
      textRO: "1. CAD vs SHH: Diferențe Cheie",
    },
    {
      type: "table",
      headersES: ["Parámetro", "Cetoacidosis (CAD)", "Estado Hiperosmolar (EHH)"],
      headersRO: ["Parametru", "Cetoacidoză (CAD)", "Stare Hiperosmolară (SHH)"],
      rows: [
        {
          colsES: ["Paciente Típico", "Diabetes Tipo 1 (Joven).", "Diabetes Tipo 2 (Anciano)."],
          colsRO: ["Pacient Tipic", "Diabet Tip 1 (Tânăr).", "Diabet Tip 2 (Vârstnic)."],
        },
        {
          colsES: ["Glucemia", "> 250 mg/dL (A veces no muy alta).", "> 600 mg/dL (Extrema)."],
          colsRO: ["Glicemie", "> 250 mg/dL (Uneori nu foarte mare).", "> 600 mg/dL (Extremă)."],
        },
        {
          colsES: ["pH y Cuerpos Cetónicos", "pH < 7.30 (Acidosis). Cetonas +++.", "pH > 7.30 (Normal). Cetonas negativas."],
          colsRO: ["pH și Corpi Cetonei", "pH < 7.30 (Acidoză). Cetone +++.", "pH > 7.30 (Normal). Cetone negative."],
        },
        {
          colsES: ["Clínica", "Respiración Kussmaul, Aliento frutal.", "Deshidratación severa, Estupor/Coma."],
          colsRO: ["Clinică", "Respirație Kussmaul, Halenă fructată.", "Deshidratare severă, Stupor/Comă."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Protocolo de Tratamiento: Fluidos, Potasio, Insulina",
      textRO: "2. Protocol de Tratament: Fluide, Potasiu, Insulină",
    },
    {
      type: "alert",
      variant: "danger",
      icon: AlertTriangle,
      titleES: "¡POTASIO PRIMERO!",
      textES: "La insulina mete K+ dentro de la célula. Si el K+ sérico es < 3.3 mEq/L, NO INICIAR INSULINA hasta reponerlo, o causarás arritmias letales.",
      titleRO: "POTASIUL PRIMUL!",
      textRO: "Insulina introduce K+ în celulă. Dacă K+ seric este < 3.3 mEq/L, NU ÎNCEPE INSULINA până nu îl corectezi, altfel vei cauza aritmii letale.",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Reposición de Volumen: 1000ml Fisiológico 0.9% en la 1ª hora. En EHH la deshidratación es masiva (6-10L déficit).",
          textRO: "Reumplere Volemică: 1000ml Fiziologic 0.9% în prima oră. În SHH deshidratarea este masivă (deficit 6-10L).",
        },
        {
          icon: Activity,
          textES: "Bomba de Insulina: Bolo 0.1 U/kg IV -> Perfusión 0.1 U/kg/h. Objetivo: Bajar glucosa 50-70 mg/dL por hora. Si baja más rápido -> Edema Cerebral.",
          textRO: "Pompă Insulină: Bolus 0.1 U/kg IV -> Perfuzie 0.1 U/kg/h. Obiectiv: Scădere glucoză 50-70 mg/dL pe oră. Dacă scade mai rapid -> Edem Cerebral.",
        },
        {
          icon: Beaker,
          textES: "Transición: Cuando glucosa < 200 (CAD) o < 300 (EHH), añadir Glucosado 5% para no cortar la insulina mientras se limpia la cetosis.",
          textRO: "Tranziție: Când glucoza < 200 (CAD) sau < 300 (SHH), adaugă Glucoză 5% pentru a nu opri insulina în timp ce se curăță cetoza.",
        },
      ],
    },
  ],
};
