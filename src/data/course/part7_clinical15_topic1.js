import {
  Wind,
  Stethoscope,
  Maximize,
} from "lucide-react";

export const CLINICAL_15_TOPIC_1 = {
  id: "part7_clinical15_topic1",
  titleES: "Valoración Vía Aérea e Intubación",
  titleRO: "Evaluare Căi Aeriene și Intubare",
  isExpert: false,
  learningObjectives: [
    "Valorar la Vía Aérea Difícil (Mallampati, Cormack-Lehane).",
    "Conocer dispositivos básicos (Guedel) y avanzados (Tubo ET, Mascarilla Laríngea).",
    "Preparar material para Intubación Orotraqueal (IOT).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Valoración Vía Aérea",
      textRO: "1. Evaluare Căi Aeriene",
    },
    {
      type: "table",
      headersES: ["Escala", "Descripción", "Grados"],
      headersRO: ["Scală", "Descriere", "Grade"],
      rows: [
        {
          colsES: ["Mallampati", "Visión estructuras faríngeas (boca abierta, lengua fuera).", "I (Úvula completa) a IV (Solo paladar duro)."],
          colsRO: ["Mallampati", "Vedere structuri faringiene (gură deschisă, limbă afară).", "I (Omuleț complet) la IV (Doar palat dur)."],
        },
        {
          colsES: ["Cormack-Lehane", "Visión glotis en Laringoscopia Directa.", "I (Cuerdas vocales) a IV (Nada)."],
          colsRO: ["Cormack-Lehane", "Vedere glotă în Laringoscopie Directă.", "I (Corzi vocale) la IV (Nimic)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Dispositivos",
      textRO: "2. Dispozitive",
    },
    {
      type: "list",
      items: [
        {
          icon: Maximize,
          textES: "Cánula Guedel (Mayo): Mide desde comisura labial a lóbulo oreja. Evita caída de lengua.",
          textRO: "Canulă Guedel (Mayo): Măsoară de la comisură bucală la lobul urechii. Evită căderea limbii.",
        },
        {
          icon: Wind,
          textES: "Dispositivos Supraglóticos: Mascarilla Laríngea (LMA). Fácil inserción, no aísla totalmente vía aérea.",
          textRO: "Dispozitive Supraglotice: Mască Laringiană (LMA). Inserție ușoară, nu izolează total calea aeriană.",
        },
        {
          icon: Stethoscope,
          textES: "Tubo Endotraqueal (IOT): Aísla vía aérea (balón neumotaponamiento). Material: Laringoscopio, fiador, jeringa, fijación.",
          textRO: "Tub Endotraheal (IOT): Izolează calea aeriană (balon pneumotamponament). Material: Laringoscop, mandren, seringă, fixare.",
        },
      ],
    },
  ],
};
