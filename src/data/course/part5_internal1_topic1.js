import {
  Wind,
  Activity,
  AlertTriangle,
  Stethoscope,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export const INTERNAL_1_TOPIC_1 = {
  id: "internal-1-1",
  titleES: "Medicina Interna: EPOC y Asma - Manejo Agudización",
  titleRO: "Medicină Internă: BPOC și Astm - Management Exacerbare",
  isExpert: true,
  learningObjectives: [
    "Diferenciar crisis asmática de agudización EPOC.",
    "Objetivos de oxigenoterapia (Riesgo de Hipercapnia).",
    "Uso escalonado de broncodilatadores y corticoides.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Oxigenoterapia: Menos es Más en EPOC",
      textRO: "1. Oxigenoterapie: Mai puțin e Mai mult în BPOC",
    },
    {
      type: "alert",
      variant: "danger",
      icon: AlertTriangle,
      titleES: "EL EFECTO HALDANE",
      textES: "En pacientes retenedores de CO2 (EPOC), el oxígeno a flujos altos desplaza el CO2 de la hemoglobina y 'engaña' al centro respiratorio, causando Parada Respiratoria por narcosis. OBJECTIVO: SatO2 88-92%.",
      titleRO: "EFECTUL HALDANE",
      textRO: "La pacienții care rețin CO2 (BPOC), oxigenul la fluxuri mari deplasează CO2 de pe hemoglobină și 'păcălește' centrul respirator, cauzând Stop Respirator prin narcoză. OBIECTIV: SatO2 88-92%.",
    },
    {
      type: "table",
      headersES: ["Patología", "Objetivo SatO2", "Dispositivo Inicial"],
      headersRO: ["Patologie", "Obiectiv SatO2", "Dispozitiv Inițial"],
      rows: [
        {
          colsES: ["EPOC Agudizado", "88 - 92%", "Ventimask (Venturi) al 24-28%."],
          colsRO: ["BPOC Exacerbat", "88 - 92%", "Ventimask (Venturi) la 24-28%."],
        },
        {
          colsES: ["Crisis Asmática", "> 94-96%", "Mascarilla Reservorio (alto flujo) si hipoxemia."],
          colsRO: ["Criză Astmatică", "> 94-96%", "Mască Rezervor (flux mare) dacă hipoxemie."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. La Escalera Terapéutica Aguda",
      textRO: "2. Scara Terapeutică Acută",
    },
    {
      type: "list",
      items: [
        {
          icon: Wind,
          textES: "1º Broncodilatadores de Acción Corta (SABA/SAMA): Salbutamol + Ipratropio nebulizados. Repetir cada 20 min en la primera hora.",
          textRO: "1º Bronhodilatatoare cu Acțiune Scurtă (SABA/SAMA): Salbutamol + Ipratropiu nebulizați. Repetare la 20 min în prima oră.",
        },
        {
          icon: Activity,
          textES: "2º Corticoides: Sistémicos (IV o Oral). Metilprednisolona o Prednisona. Reducen la inflamación bronquial tras 4-6 horas.",
          textRO: "2º Corticoizi: Sistemici (IV sau Oral). Metilprednisolonă sau Prednisonă. Reduc inflamația bronșică după 4-6 ore.",
        },
        {
          icon: ArrowUp,
          textES: "3º Magnesio IV (Solo Asma Grave): Broncodilatador de músculo liso potente si falla lo anterior.",
          textRO: "3º Magneziu IV (Doar Astm Grav): Bronhodilatator de mușchi neted puternic dacă eșuează cele anterioare.",
        },
      ],
    },
  ],
};
