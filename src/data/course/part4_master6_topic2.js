import {
  Triangle,
  Zap,
  Droplet,
  Activity,
  Search,
} from "lucide-react";

export const MASTER_6_TOPIC_2 = {
  id: "master-6-2",
  titleES: "Masterclass: Urgencias Pediátricas (PALS)",
  titleRO: "Masterclass: Urgențe Pediatrice (PALS)",
  isExpert: true,
  learningObjectives: [
    "Evaluación rápida con el Triángulo de Evaluación Pediátrica (TEP).",
    "Diferenciar Shock Compensado vs Descompensado.",
    "Cálculo rápido de dosis de desfibrilación.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. El Triángulo de Evaluación Pediátrica (TEP)",
      textRO: "1. Triunghiul de Evaluare Pediatrică (TEP)",
    },
    {
      type: "p",
      textES: "Herramienta visual rápida (sin tocar al paciente). Define si el niño está 'Enfermo' o 'Malo'.",
      textRO: "Instrument vizual rapid (fără a atinge copilul). Definește dacă copilul este 'Bolnav' sau 'Grav'.",
    },
    {
      type: "table",
      headersES: ["Lado", "Qué evalúa", "Signos de fallo"],
      headersRO: ["Latură", "Ce evaluează", "Semne de eșec"],
      rows: [
        {
          colsES: ["Apariencia (A)", "SNC: Tono, reactividad, consuelo, mirada.", "Hipotonía, mirada perdida, no consuelo."],
          colsRO: ["Aspect (A)", "SNC: Tonus, reactivitate, consolare, privire.", "Hipotonie, privire pierdută, neconsolabil."],
        },
        {
          colsES: ["Respiración (R)", "Trabajo respiratorio (no solo frecuencia).", "Aleteo nasal, tiraje, cabeceo, estridor."],
          colsRO: ["Respirație (R)", "Travaliu respirator (nu doar frecvență).", "Aripioare nazale, tiraj, 'head bobbing', stridor."],
        },
        {
          colsES: ["Circulación (C)", "Perfusión cutánea.", "Palidez, cianosis, piel moteada (cutis marmorata)."],
          colsRO: ["Circulație (C)", "Perfuzie cutanată.", "Paloare, cianoză, piele marmorată (cutis marmorata)."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Shock en Pediatría: La trampa de la Presión Arterial",
      textRO: "2. Șocul în Pediatrie: Capcana Tensiunii Arteriale",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Activity,
      titleES: "HIPOTENSIÓN = SIGNO TARDÍO",
      textES: "Los niños compensan muy bien con Taquicardia y Vasoconstricción. Cuando la TA baja, el colapso es inminente (Parada). No esperes a la hipotensión para tratar el shock.",
      titleRO: "HIPOTENSIUNE = SEMN TARDIV",
      textRO: "Copiii compensează foarte bine prin Tahicardie și Vasoconstricție. Când TA scade, colapsul este iminent (Stop). Nu aștepta hipotensiunea pentru a trata șocul.",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Fluidoterapia de Resucitación: Bolos de 20 ml/kg de Cristaloides (Fisiológico/Ringer) en 5-10 min. Repetir hasta 3 veces si no hay crepitantes.",
          textRO: "Fluidoterapie de Resuscitare: Bolusuri de 20 ml/kg Cristaloide (Fiziologic/Ringer) în 5-10 min. Repetare de până la 3 ori dacă nu sunt raluri.",
        },
        {
          icon: Zap,
          textES: "Desfibrilación: 2 J/kg (1ª descarga) -> 4 J/kg (2ª descarga).",
          textRO: "Defibrilare: 2 J/kg (primul șoc) -> 4 J/kg (al doilea șoc).",
        },
        {
          icon: Search,
          textES: "Accesos: Si no consigues vía periférica en 90 segundos (o 3 intentos) -> INTRAÓSEA (IO) TIBIAL.",
          textRO: "Acces: Dacă nu reușești abord periferic în 90 secunde (sau 3 încercări) -> INTRAOSOASĂ (IO) TIBIALĂ.",
        },
      ],
    },
  ],
};
