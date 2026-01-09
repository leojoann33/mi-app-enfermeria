import {
  Activity,
  Droplet,
  AlertTriangle,
  Filter,
  TrendingDown,
} from "lucide-react";

export const INTERNAL_9_TOPIC_1 = {
  id: "internal-9-1",
  titleES: "Medicina Interna: Fracaso Renal (FRA vs ERC)",
  titleRO: "Medicină Internă: Insuficiență Renală (IRA vs IRC)",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Fracaso Renal Agudo Prerrenal de Parenquimatoso.",
    "El concepto de Nefroprotección en planta.",
    "Estadios de ERC y preparación para diálisis.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Fracaso Renal Agudo (AKI): ¿Falta agua o falla el filtro?",
      textRO: "1. Insuficiență Renală Acută (AKI): Lipsește apa sau filtrul e stricat?",
    },
    {
      type: "table",
      headersES: ["Tipo", "Causa Principal", "Na+ en Orina (EFNa)", "Tratamiento"],
      headersRO: ["Tip", "Cauză Principală", "Na+ în Urină (EFNa)", "Tratament"],
      rows: [
        { colsES: ["Prerrenal", "Deshidratación, Bajo Gasto Cardiaco (No llega sangre).", "< 1% (El riñón ahorra sodio/agua).", "Fluidos, inotropos. ¡Reversible!"], colsRO: ["Prerenală", "Deshidratare, Debit Cardiac Scăzut (Nu ajunge sânge).", "< 1% (Rinichiul economisește sodiu/apă).", "Fluide, inotrope. Reversibil!"] },
        { colsES: ["Parenquimatoso (NTA)", "Tóxicos, Medicamentos, Isquemia prolongada.", "> 1-2% (El riñón pierde sal, tubulo roto).", "Soporte, evitar nefrotóxicos. Esperar recuperación."], colsRO: ["Parenchimatoasă (NTA)", "Toxice, Medicamente, Ischemie prelungită.", "> 1-2% (Rinichiul pierde sare, tubul spart).", "Suport, evitare nefrotoxice. Așteptare recuperare."] },
        { colsES: ["Obstructivo", "Piedra, Próstata (Globo vesical).", "Variable.", "Sondaje Vesical o Nefrostomía."], colsRO: ["Obstructivă", "Piatră, Prostată (Glob vezical).", "Variabil.", "Sondaj Vezical sau Nefrostomie."] },
      ],
    },
    {
      type: "alert",
      variant: "danger",
      icon: Activity,
      titleES: "NEFROPROTECCIÓN",
      textES: "Evitar la 'Triple Whammy' (Triple Golpe): IECA/ARA-II + Diurético + AINEs (Ibuprofeno). Esta combinación mata riñones en ancianos. Vigila la creatinina.",
      titleRO: "NEFROPROTECȚIE",
      textRO: "Evitați 'Triple Whammy' (Lovitura Triplă): IECA/Sartan + Diuretic + AINS (Ibuprofen). Această combinație omoară rinichii la vârstnici. Monitorizați creatinina.",
    },
    {
      type: "h3",
      textES: "2. Enfermedad Renal Crónica (ERC)",
      textRO: "2. Boală Renală Cronică (BRC)",
    },
    {
      type: "list",
      items: [
        {
          icon: Filter,
          textES: "Estadio G5 (FG < 15 ml/min): Fallo renal terminal. Necesita diálisis o trasplante.",
          textRO: "Stadiul G5 (FG < 15 ml/min): Insuficiență renală terminală. Necesită dializă sau transplant.",
        },
        {
          icon: TrendingDown,
          textES: "Anemia Renal: Falta eritropoyetina (EPO). Tto: Agentes estimulantes (EPO) + Hierro IV.",
          textRO: "Anemie Renală: Lipsă eritropoietină (EPO). Trat: Agenți stimulanți (EPO) + Fier IV.",
        },
      ],
    },
  ],
};
