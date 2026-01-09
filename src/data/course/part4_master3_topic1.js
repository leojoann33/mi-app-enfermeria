import {
  Syringe,
  Activity,
  AlertOctagon,
  ArrowUp,
  ArrowDown,
  Gauge,
  Wind,
} from "lucide-react";

export const MASTER_3_TOPIC_1 = {
  id: "master-3-1",
  titleES: "Masterclass: Drogas Vasoactivas - Titulación de Precisión",
  titleRO: "Masterclass: Medicamente Vasoactive - Titrare de Precizie",
  isExpert: true,
  learningObjectives: [
    "Mecanismo de acción de receptores Alfa y Beta adrenérgicos.",
    "Protocolo de titulación de Noradrenalina.",
    "Indicaciones de Dobutamina y Vasopresina.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Fisiología de Receptores: La llave y la cerradura",
      textRO: "1. Fiziologia Receptorilor: Cheia și lacătul",
    },
    {
      type: "list",
      items: [
        {
          icon: Gauge,
          textES: "Alfa-1 (Vasos): Vasoconstricción potente. Aumenta RVS y TA.",
          textRO: "Alfa-1 (Vase): Vasoconstricție puternică. Crește RVS și TA.",
        },
        {
          icon: Activity,
          textES: "Beta-1 (Corazón): Inotropismo (fuerza) y Cronotropismo (frecuencia). Aumenta Gasto Cardíaco.",
          textRO: "Beta-1 (Inimă): Inotropism (forță) și Cronotropism (frecvență). Crește Debitul Cardiac.",
        },
        {
          icon: Wind,
          textES: "Beta-2 (Pulmón/Vasos): Broncodilatación y Vasodilatación leve.",
          textRO: "Beta-2 (Plămân/Vase): Bronhodilatație și Vasodilatație ușoară.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Las 'Tres Grandes' en UCI",
      textRO: "2. Cei 'Trei Mari' în ATI",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Efecto Principal", "Dosis Habitual", "Indicación"],
      headersRO: ["Medicament", "Efect Principal", "Doză Uzuală", "Indicație"],
      rows: [
        {
          colsES: [
            "Noradrenalina (Levofed)",
            "Alfa > Beta. Vasoconstricción pura.",
            "0.05 - 1.0 mcg/kg/min",
            "Shock Séptico (Elección #1). Hipotensión vasodilatada.",
          ],
          colsRO: [
            "Noradrenalină (Levofed)",
            "Alfa > Beta. Vasoconstricție pură.",
            "0.05 - 1.0 mcg/kg/min",
            "Șoc Septic (Alegerea #1). Hipotensiune vasodilatată.",
          ],
        },
        {
          colsES: [
            "Dobutamina",
            "Beta-1 puro. Inotrópico.",
            "2 - 20 mcg/kg/min",
            "Fallo Cardíaco (Shock Cardiogénico). Gasto Cardíaco bajo.",
          ],
          colsRO: [
            "Dobutamină",
            "Beta-1 pur. Inotropic.",
            "2 - 20 mcg/kg/min",
            "Insuficiență Cardiacă (Șoc Cardiogen). Debit Cardiac scăzut.",
          ],
        },
        {
          colsES: [
            "Adrenalina",
            "Alfa + Beta (Todo a la vez).",
            "0.01 - 0.5 mcg/kg/min",
            "Parada Cardíaca (Bolus). Anafilaxia. Shock refractario.",
          ],
          colsRO: [
            "Adrenalină",
            "Alfa + Beta (Totul deodată).",
            "0.01 - 0.5 mcg/kg/min",
            "Stop Cardiac (Bolus). Anafilaxie. Șoc refractar.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "danger",
      icon: AlertOctagon,
      titleES: "EXTRAVASACIÓN = NECROSIS",
      textES: "La Noradrenalina debe ir por Vïa Central. Si se extravasa por periférica, causa necrosis tisular inmedia. ANTÍDOTO: Fentolamina subcutánea circular.",
      titleRO: "EXTRAVAZARE = NECROZĂ",
      textRO: "Noradrenalina trebuie administrată pe Linie Centrală. Dacă extravazează periferic, cauzează necroză tisulară imediată. ANTIDOT: Fentolamină subcutanată circulară.",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Syringe,
      titleES: "REGLA DE TITULACIÓN",
      textES: "Nunca pares una perfusión de inotrópicos de golpe (Rebote). Titula cada 5-10 min buscando TAM > 65 mmHg. Prepara la nueva jeringa ANTES de que acabe la vieja (efecto valle).",
      titleRO: "REGULA DE TITRARE",
      textRO: "Nu opri niciodată o perfuzie de inotropice brusc (Recul). Titrează la fiecare 5-10 min căutând TAM > 65 mmHg. Pregătește noua seringă ÎNAINTE să se termine cea veche (efect vale).",
    },
  ],
};
