import {
  Droplet,
  Filter,
  AlertTriangle,
  Activity,
} from "lucide-react";

export const CLINICAL_10_TOPIC_1 = {
  id: "part7_clinical10_topic1",
  titleES: "Insuficiencia Renal y Síndromes",
  titleRO: "Insuficiență Renală și Sindroame",
  isExpert: false,
  learningObjectives: [
    "Diferenciar Insuficiencia Renal Aguda (IRA) de Crónica (IRC).",
    "Identificar causas de IRA (Prerrenal, Renal, Postrenal).",
    "Distinguir Síndrome Nefrótico de Nefrítico.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Insuficiencia Renal Aguda (IRA)",
      textRO: "1. Insuficiență Renală Acută (IRA)",
    },
    {
      type: "table",
      headersES: ["Tipo", "Causa Principal", "Características"],
      headersRO: ["Tip", "Cauză Principală", "Caracteristici"],
      rows: [
        {
          colsES: ["Prerrenal", "Hipoperfusión (Deshidratación, Shock, IC).", "Oliguria, Na+ orina bajo, Osm orina alta."],
          colsRO: ["Prerenală", "Hipoperfuzie (Deshidratare, Șoc, IC).", "Oligurie, Na+ urinar scăzut, Osm urinară crescută."],
        },
        {
          colsES: ["Renal (Parenquimatosa)", "Daño directo (Tóxicos, Isquemia prolongada).", "Necrosis Tubular Aguda (NTA)."],
          colsRO: ["Renală (Parenchimatoasă)", "Daună directă (Toxice, Ischemie prelungită).", "Necroză Tubulară Acută (NTA)."],
        },
        {
          colsES: ["Postrenal (Obstructiva)", "Obstrucción vía urinaria (Litiasis, HPB).", "Anuria brusca o fluctuante. Globo vesical."],
          colsRO: ["Postrenală (Obstructivă)", "Obstrucție cale urinară (Litiază, HBP).", "Anurie bruscă sau fluctuantă. Glob vezical."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Síndromes Glomerulares",
      textRO: "2. Sindroame Glomerulare",
    },
    {
      type: "list",
      items: [
        {
          icon: Filter,
          textES: "S. NefrÓtico: PROTEINURIA masiva (>3.5g/24h) -> Hipoalbuminemia -> EDEMAS generalizados (Anasarca) + Hiperlipidemia.",
          textRO: "S. NefrOtic: PROTEINURIE masivă (>3.5g/24h) -> Hipoalbuminemie -> EDEME generalizate (Anasarca) + Hiperlipidemie.",
        },
        {
          icon: Droplet,
          textES: "S. NefrÍtico: INFLAMACIÓN glomerular. HEMATURIA, HTA, Oliguria y Edema leve.",
          textRO: "S. NefrItic: INFLAMAȚIE glomerulară. HEMATURIE, HTA, Oligurie și Edem ușor.",
        },
      ],
    },
  ],
};
