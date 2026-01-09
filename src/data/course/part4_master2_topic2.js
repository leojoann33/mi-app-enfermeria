import {
  Activity,
  HeartPulse,
  Share2,
  AlertTriangle,
  Droplet,
  ArrowDownUp,
} from "lucide-react";

export const MASTER_2_TOPIC_2 = {
  id: "master-2-2",
  titleES: "Masterclass: Monitorización Hemodinámica Invasiva",
  titleRO: "Masterclass: Monitorizare Hemodinamică Invazivă",
  isExpert: true,
  learningObjectives: [
    "Interpretar GC (Gasto Cardíaco) y RVS (Resistencias Vasculares).",
    "Manejo básico de Catéter de Arteria Pulmonar (Swan-Ganz).",
    "Monitorización mínimamente invasiva (PiCCO/Vigileo).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. El Mapa del Shock: Variables Clave",
      textRO: "1. Harta Șocului: Variabile Cheie",
    },
    {
      type: "table",
      headersES: ["Parámetro", "Valor Normal", "Significado Clínico", "Acción si está BAJO/ALTO"],
      headersRO: ["Parametru", "Valoare Normală", "Semnificație Clinică", "Acțiune dacă e SCĂZUT/CRESCUT"],
      rows: [
        {
          colsES: [
            "PVC (Presión Venosa Central)",
            "8-12 mmHg",
            "Precarga (Volumen en AD). ¿Le falta agua al tanque?",
            "Bajo: Poner Líquidos. Alto: Diuréticos / Fallo VD.",
          ],
          colsRO: [
            "PVC (Presiune Venoasă Centrală)",
            "8-12 mmHg",
            "Presarcină (Volum în AD). Lipsește apa din rezervor?",
            "Scăzut: Lichide. Crescut: Diuretice / Insuficiență VD.",
          ],
        },
        {
          colsES: [
            "PCP / PAOP (Presión Cuña)",
            "6-12 mmHg",
            "Precarga VI. Riesgo de Edema Agudo de Pulmón.",
            ">18 mmHg: Edema Pulmonar (Fallo VI).",
          ],
          colsRO: [
            "PCP / PAOP (Presiune Capilară)",
            "6-12 mmHg",
            "Presarcină VS. Risc de Edem Pulmonar Acut.",
            ">18 mmHg: Edem Pulmonar (Insuficiență VS).",
          ],
        },
        {
          colsES: [
            "IC (Índice Cardíaco)",
            "2.5 - 4.0 L/min/m2",
            "Función de Bomba (GC ajustado a superficie corporal).",
            "Bajo: Inotrópicos (Dobutamina). Alto: Sepsis hiperdinámica.",
          ],
          colsRO: [
            "IC (Index Cardiac)",
            "2.5 - 4.0 L/min/m2",
            "Funcție de Pompă (DC ajustat la suprafață).",
            "Scăzut: Inotropice (Dobutamină). Crescut: Sepsis hiperdinamic.",
          ],
        },
        {
          colsES: [
            "RVS (Resistencias Vasculares)",
            "800-1200 dynas",
            "Postcarga. ¿Están las tuberías abiertas o cerradas?",
            "Bajo: Vasopresores (Nora). Alto: Vasodilatadores.",
          ],
          colsRO: [
            "RVS (Rezistențe Vasculare)",
            "800-1200 dynas",
            "Postsarcină. Țevile sunt deschise sau închise?",
            "Scăzut: Vasopresoare (Nora). Crescut: Vasodilatatoare.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Swan-Ganz vs PiCCO: Diferencias Prácticas",
      textRO: "2. Swan-Ganz vs PiCCO: Diferențe Practice",
    },
    {
      type: "list",
      items: [
        {
          icon: Share2,
          textES: "Swan-Ganz (Catéter Pulmonar): El 'Gold Standard' clásico. Mide presiones derechas e izquierdas. RIESGO: Arritmias al insertar, rotura arteria pulmonar.",
          textRO: "Swan-Ganz (Cateter Pulmonar): 'Gold Standard' clasic. Măsoară presiuni drepte și stângi. RISC: Aritmii la inserție, ruptură arteră pulmonară.",
        },
        {
          icon: Activity,
          textES: "PiCCO (Termodilución Transpulmonar): Menos invasivo (vía central + arteria femoral). Da parámetros dinámicos (VPP) que predicen mejor la respuesta a fluidos.",
          textRO: "PiCCO (Termodiluție Transpulmonară): Mai puțin invaziv (linie centrală + arteră femurală). Oferă parametri dinamici (VPP) care prezic mai bine răspunsul la fluide.",
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: Droplet,
      titleES: "HIPOTENSIÓN: ¿LIQUIDOS O DROGAS?",
      textES: "No adivines. Mira la VPP (Variación de Presión de Pulso) o haz una prueba de elevación de piernas pasiva. Si el GC sube >10%, necesita FLUIDOS. Si no, necesita VASOPRESORES.",
      titleRO: "HIPOTENSIUNE: LICHIDE SAU DROGURI?",
      textRO: "Nu ghici. Vezi VPP (Variația Presiunii Pulsului) sau fă testul de ridicare pasivă a picioarelor. Dacă DC crește >10%, are nevoie de LICHIDE. Dacă nu, are nevoie de VASOPRESOARE.",
    },
  ],
};
