import {
  Syringe,
  Wind,
  AlertOctagon,
  Timer,
  Pill,
} from "lucide-react";

export const INTERNAL_10_TOPIC_1 = {
  id: "internal-10-1",
  titleES: "Medicina Interna: Shock Anafiláctico",
  titleRO: "Medicină Internă: Șoc Anafilactic",
  isExpert: true,
  learningObjectives: [
    "Reconocer la Anafilaxia (Piel + Respiratorio/CV).",
    "La Adrenalina IM es el único tratamiento que salva vidas.",
    "Vigilar la reacción bifásica.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. ¿Es Anafilaxia?",
      textRO: "1. Este Anafilaxie?",
    },
    {
      type: "p",
      textES: "Inicio agudo (minutos) con afectación de PIEL/MUCOSAS (urticaria, labios hinchados) + RESPIRATORIO (disnea, estridor) y/o CARDIOVASCULAR (hipotensión).",
      textRO: "Debut acut (minute) cu afectare PIELE/MUCOASE (urticarie, buze umflate) + RESPIRATOR (dispnee, stridor) și/sau CARDIOVASCULAR (hipotensiune).",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Syringe,
      titleES: "ADRENALINA INTRAMUSCULAR YA",
      textES: "No pierdas tiempo buscando vía. Ante sospecha: Adrenalina 0.5 mg IM en el muslo (vasto externo). Repetir cada 5-15 min si no mejora. Es más segura que esperar.",
      titleRO: "ADRENALINĂ INTRAMUSCULAR ACUM",
      textRO: "Nu pierde timpul căutând venă. La suspiciune: Adrenalină 0.5 mg IM în coapsă (vast extern). Repetare la 5-15 min dacă nu se ameliorează. E mai sigură decât așteptarea.",
    },
    {
      type: "h3",
      textES: "2. Tratamiento Secundario (No sustituye a la Adrenalina)",
      textRO: "2. Tratament Secundar (Nu înlocuiește Adrenalina)",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Función", "Prioridad"],
      headersRO: ["Medicament", "Funcție", "Prioritate"],
      rows: [
        { colsES: ["Corticoides (Hidrocortisona)", "Prevenir reacción tardía (bifásica). Tardan horas en actuar.", "Baja."], colsRO: ["Corticoizi (Hidrocortizon)", "Prevenire reacție tardivă (bifazică). Durează ore să acționeze.", "Scăzută."] },
        { colsES: ["Antihistamínicos (Dexclorfeniramina)", "Aliviar picor y urticaria. No curan el shock.", "Baja."], colsRO: ["Antihistaminice (Dexclorfeniramină)", "Ameliorare mâncărime. Nu vindecă șocul.", "Scăzută."] },
        { colsES: ["Salbutamol", "Si hay broncoespasmo persistente.", "Media."], colsRO: ["Salbutamol", "Dacă există bronhospasm persistent.", "Medie."] },
      ],
    },
    {
      type: "list",
      items: [
        {
          icon: Timer,
          textES: "Observación: Mínimo 4-6 horas tras la resolución. Riesgo de 'Efecto Rebote' (Reacción Bifásica) en el 20% de casos.",
          textRO: "Observație: Minim 4-6 ore după rezoluție. Risc de 'Efect Rebound' (Reacție Bifazică) în 20% din cazuri.",
        },
      ],
    },
  ],
};
