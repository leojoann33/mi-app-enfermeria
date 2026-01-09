import {
  Wind,
  Gauge,
  Activity,
  Droplets,
  CloudFog,
} from "lucide-react";

export const CLINICAL_2_TOPIC_1 = {
  id: "part7_clinical2_topic1",
  titleES: "Oxigenoterapia y Aerosoles",
  titleRO: "Oxigenoterapie și Aerosoli",
  isExpert: false,
  learningObjectives: [
    "Diferenciar sistemas de Alto Flujo (Venturi) y Bajo Flujo (Gafas Nasales).",
    "Calcular la FiO2 en cánulas nasales.",
    "Manejo de aerosoles según tamaño de partícula (<5 vs >5 micras).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Oxigenoterapia: Sistemas de Administración",
      textRO: "1. Oxigenoterapie: Sisteme de Administrare",
    },
    {
      type: "p",
      textES: "La oxigenoterapia administra O2 para tratar la hipoxemia. Se clasifica según si aporta todo el gas que el paciente inspira (Alto Flujo) o solo una parte (Bajo Flujo).",
      textRO: "Oxigenoterapia administrează O2 pentru a trata hipoxemia. Se clasifică în funcție de dacă furnizează tot gazul pe care pacientul îl inspiră (Flux Înalt) sau doar o parte (Flux Scăzut).",
    },
    {
      type: "table",
      headersES: ["Sistema", "Características", "FiO2"],
      headersRO: ["Sistem", "Caracteristici", "FiO2"],
      rows: [
        {
          colsES: [
            "Bajo Flujo (Gafas/Cánulas)",
            "La FiO2 depende del patrón respiratorio del paciente. Cómodo.",
            "Variable. Fórmula estimativa: 20 + (4 x Litros). Ej: 2L = 28%.",
          ],
          colsRO: [
            "Flux Scăzut (Ochelari/Canule)",
            "FiO2 depinde de tiparul respirator al pacientului. Comod.",
            "Variabilă. Formulă estimativă: 20 + (4 x Litri). Ex: 2L = 28%.",
          ],
        },
        {
          colsES: [
            "Alto Flujo (Venturi/Ventimask)",
            "FiO2 constante y exacta. Independiente del patrón respiratorio. Efecto Bernoulli.",
            "Fija (24%, 28%, 35%, 40%, 60%). Ideal para EPOC (retenedores).",
          ],
          colsRO: [
            "Flux Înalt (Venturi/Ventimask)",
            "FiO2 constantă și exactă. Independent de tiparul respirator. Efect Bernoulli.",
            "Fixă (24%, 28%, 35%, 40%, 60%). Ideal pentru BPOC (reținători).",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Aerosolterapia y Tamaño de Partícula",
      textRO: "2. Aerosolterapie și Mărimea Particulei",
    },
    {
      type: "list",
      items: [
        {
          icon: CloudFog,
          textES: "Partículas > 5 micras: Se depositan en vía aérea superior. Protección: Mascarilla Quirúrgica (Gotas de Pflügge).",
          textRO: "Particule > 5 microni: Se depun în calea aeriană superioară. Protecție: Mască Chirurgicală (Picături Pflügge).",
        },
        {
          icon: Wind,
          textES: "Partículas < 5 micras: Llegan a alvéolos. Permanecen suspendidas más tiempo. Protección: FFP2 (Aérea/Wells).",
          textRO: "Particule < 5 microni: Ajung la alveole. Rămân suspendate mai mult timp. Protecție: FFP2 (Aeriană/Wells).",
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Gauge,
      titleES: "MONITORIZACIÓN",
      textES: "Pulsioximetría: Mide SatO2 via infrarrojos (Hb Oxigenada) y rojos (Hb Reducida). Gasometría: Gold standard para pH y Presiones parciales.",
      titleRO: "MONITORIZARE",
      textRO: "Pulsioximetrie: Măsoară SatO2 via infraroșu (Hb Oxigenată) și roșu (Hb Redusă). Gazometrie: Standard de aur pentru pH și Presiuni parțiale.",
    },
  ],
};
