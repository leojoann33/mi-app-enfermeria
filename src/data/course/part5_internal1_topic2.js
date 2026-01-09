import {
  Thermometer,
  Waves,
  Stethoscope,
  Syringe,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";

export const INTERNAL_1_TOPIC_2 = {
  id: "internal-1-2",
  titleES: "Medicina Interna: Neumonía y Derrame Pleural",
  titleRO: "Medicină Internă: Pneumonie și Revărsat Pleural",
  isExpert: true,
  learningObjectives: [
    "Estratificación de riesgo con CURB-65.",
    "Cuidados de enfermería en Toracocentesis.",
    "Reconocer el Empiema (Infección pleural).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Neumonía Adquirida en Comunidad (NAC): ¿Ingresa o no?",
      textRO: "1. Pneumonie Dobândită în Comunitate (NAC): Internare sau nu?",
    },
    {
      type: "p",
      textES: "La escala CURB-65 ayuda a decidir el destino del paciente. Cada ítem suma 1 punto.",
      textRO: "Scara CURB-65 ajută la deciderea destinației pacientului. Fiecare item adună 1 punct.",
    },
    {
      type: "table",
      headersES: ["Sigla", "Significado", "Puntos de Corte"],
      headersRO: ["Siglă", "Semnificație", "Puncte de Tăiere"],
      rows: [
        {
          colsES: ["C", "Confusion (Confusión mental).", "0-1: Ambulatorio."],
          colsRO: ["C", "Confusion (Confuzie mentală).", "0-1: Ambulatoriu."],
        },
        {
          colsES: ["U", "Urea > 7 mmol/L (Fallo renal/Deshidratación).", "2: Ingreso en Planta."],
          colsRO: ["U", "Uree > 7 mmol/L (Insuficiență renală/Deshidratare).", "2: Internare pe Secție."],
        },
        {
          colsES: ["R", "Resp Rate (FR) >= 30 rpm.", "3+: Ingreso UCI (Valorar)."],
          colsRO: ["R", "Resp Rate (FR) >= 30 rpm.", "3+: Internare ATI (Evaluare)."],
        },
        {
          colsES: ["B", "Blood Pressure (TAS < 90 o TAD < 60).", ""],
          colsRO: ["B", "Blood Pressure (TAS < 90 sau TAD < 60).", ""],
        },
        {
          colsES: ["65", "Edad >= 65 años.", ""],
          colsRO: ["65", "Vârstă >= 65 ani.", ""],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Derrame Pleural y Toracocentesis",
      textRO: "2. Revărsat Pleural și Toracocenteză",
    },
    {
      type: "list",
      items: [
        {
          icon: Stethoscope,
          textES: "Clínica: Disnea + Matidez a la percusión + Abolición de murmullo vesicular en la base.",
          textRO: "Clinică: Dispnee + Matitate la percuție + Abolirea murmurului vezicular la bază.",
        },
        {
          icon: Syringe,
          textES: "Toracocentesis Diagnóstica/Terapéutica: Posición sentada, brazos sobre mesa. NO sacar > 1.2 - 1.5 L de golpe (Riesgo Edema Ex-Vacuo).",
          textRO: "Toracocenteză Diagnostică/Terapeutică: Poziție șezândă, brațe pe masă. NU scoateți > 1.2 - 1.5 L deodată (Risc Edem Ex-Vacuo).",
        },
        {
          icon: AlertTriangle,
          textES: "Empiema (Urgencia): Si sale líquido purulento o pH < 7.20 -> Requiere DRENAJE TORÁCICO (Tubo) inmediato + Antibióticos. No se cura solo.",
          textRO: "Empiem (Urgență): Dacă iese lichid purulent sau pH < 7.20 -> Necesită DRENAJ TORACIC (Tub) imediat + Antibiotice. Nu se vindecă singur.",
        },
      ],
    },
  ],
};
