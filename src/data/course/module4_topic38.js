import {
  AlertTriangle,
  HeartPulse,
  Activity,
  Phone,
  Monitor,
  Bell,
  Pill,
} from "lucide-react";

export const MODULE_4_TOPIC_38 = {
  id: "4-38",
  titleES: "38. Dolor torácico: diferenciar causas posibles",
  titleRO: "38. Durere toracică: diferențierea cauzelor posibile",
  learningObjectives: [
    "Diferenciar dolor torácico isquémico de otras causas.",
    "Aplicar el protocolo SCAM ante sospecha de infarto.",
    "Realizar un ECG de 12 derivaciones en menos de 10 minutos.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Valoración del Dolor: Tipos",
      textRO: "1. Evaluarea Durerii: Tipuri",
    },
    {
      type: "p",
      textES: "No todo dolor torácico es un infarto. La enfermera debe discriminar rápidamente las características del dolor.",
      textRO: "Nu orice durere toracică este un infarct. Asistenta trebuie să discrimineze rapid caracteristicile durerii.",
    },
    {
      type: "table",
      headersES: ["Tipo", "Características", "Gravedad"],
      headersRO: ["Tip", "Caracteristici", "Gravitate"],
      rows: [
        {
          colsES: [
            "Isquémico (IAM)",
            "Opresivo ('pata de elefante'). Irradiado a brazo izq/mandíbula. Cortejo vegetativo (sudor frío, náuseas).",
            "EMERGENCIA VITAL",
          ],
          colsRO: [
            "Ischemic (IMA)",
            "Opresiv ('picior de elefant'). Iradiază în brațul stg/mandibulă. Reacții vegetative (sudoare rece, greață).",
            "URGENȚĂ VITALĂ",
          ],
        },
        {
          colsES: [
            "Pleurítico/Muscular",
            "Punzante ('pinchazo'). Aumenta al respirar hondo o palpar la zona. Calma con analgesia simple.",
            "Moderada (salvo TEP)",
          ],
          colsRO: [
            "Pleuritic/Muscular",
            "Înțepător ('junghi'). Crește la inspir profund sau palpare. Cedează la analgezice simple.",
            "Moderată (cu excepția TEP)",
          ],
        },
        {
          colsES: [
            "Ansiedad",
            "Hiperventilación. Hormigueo en manos. Dolor inespecífico. Antecedentes nerviosos.",
            "Leve (descartar orgánico)",
          ],
          colsRO: [
            "Anxietate",
            "Hiperventilație. Furnicături în mâini. Durere nespecifică. Istoric nervos.",
            "Ușoară (excludeți organic)",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Protocolo SCAM (Actuación Enfermería)",
      textRO: "2. Protocol SCAM (Acțiune Asistență)",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "S - Serenidad y Seguridad: Reposo absoluto. No caminar.",
          textRO: "S - Serenitate și Siguranță: Repaus absolut. Nu mergeți.",
        },
        {
          icon: Activity,
          textES: "C - Constantes y Control: TA, FC, SatO2. Realizar ECG de 12 derivaciones en < 10 minutos.",
          textRO: "C - Constante și Control: TA, FC, SatO2. Efectuați EKG cu 12 derivații în < 10 minute.",
        },
        {
          icon: Bell,
          textES: "A - Avisar: Notificar al médico con el ECG en la mano.",
          textRO: "A - Anunțați: Notificați medicul cu EKG-ul în mână.",
        },
        {
          icon: Pill,
          textES: "M - Monitorizar y Medicación: Monitor cardiaco. Preparar MONA (Morfina, Oxígeno, Nitroglicerina, Aspirina) según orden médica.",
          textRO: "M - Monitorizare și Medicație: Monitor cardiac. Pregătiți MONA (Morfină, Oxigen, Nitroglicerină, Aspirină) conform ordinului.",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: Activity,
      titleES: "TIEMPO ES MÚSCULO",
      textES: "La realización rápida del ECG es el estándar de calidad más importante en dolor torácico. Cada minuto de retraso aumenta la necrosis miocárdica.",
      titleRO: "TIMPUL ESTE MUȘCHI",
      textRO: "Efectuarea rapidă a EKG-ului este cel mai important standard de calitate în durerea toracică. Fiecare minut de întârziere crește necroza miocardică.",
    },
  ],
};
