import {
  Activity,
  AlertOctagon,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

export const PALLIATIVE_2_TOPIC_1 = {
  id: "part6_palliative2_topic1",
  titleES: "Manejo del Dolor y Escalera Analgésica",
  titleRO: "Managementul Durerii și Scara Analgezică",
  isExpert: true,
  learningObjectives: [
    "Uso correcto de la Escalera Analgésica de la OMS.",
    "Titulación de opioides y manejo del 'Dolor Irruptivo'.",
    "Mitos sobre la morfina (Depresión respiratoria, adicción).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. La Escalera Analgésica (OMS)",
      textRO: "1. Scara Analgezică (OMS)",
    },
    {
      type: "p",
      textES: "La clave no es solo qué fármaco usar, sino cómo: 'Por la boca (si es posible), por el reloj (horario fijo) y por la escalera'.",
      textRO: "Cheia nu este doar ce medicament să folosiți, ci cum: 'Pe gură (dacă este posibil), după ceas (orar fix) și pe scară'.",
    },
    {
      type: "table",
      headersES: ["Escalón", "Fármacos", "Indicación"],
      headersRO: ["Treaptă", "Medicamente", "Indicație"],
      rows: [
        {
          colsES: [
            "1. Dolor Leve (EVA 1-3)",
            "Paracetamol, Metamizol, AINEs (Ibuprofeno/Diclofenaco).",
            "Monoterapia o combinados. Tienen 'techo analgésico'.",
          ],
          colsRO: [
            "1. Durere Ușoară (EVA 1-3)",
            "Paracetamol, Metamizol, AINS (Ibuprofen/Diclofenac).",
            "Monoterapie sau combinați. Au 'plafon analgezic'.",
          ],
        },
        {
          colsES: [
            "2. Dolor Moderado (EVA 4-6)",
            "Opioides débiles: Tramadol, Codeína +/- Escalón 1.",
            "Tramadol: Ojo con náuseas (dar antiemético) y edad avanzada (delirium).",
          ],
          colsRO: [
            "2. Durere Moderată (EVA 4-6)",
            "Opioide slabe: Tramadol, Codeină +/- Treapta 1.",
            "Tramadol: Atenție la greață (dați antiemetic) și vârstă înaintată (delirium).",
          ],
        },
        {
          colsES: [
            "3. Dolor Severo (EVA 7-10)",
            "Opioides potentes: Morfina, Fentanilo, Oxicodona, Metadona.",
            "NO tienen techo analgésico. Se titulan hasta alivio o toxicidad.",
          ],
          colsRO: [
            "3. Durere Severă (EVA 7-10)",
            "Opioide puternice: Morfină, Fentanil, Oxicodonă, Metadonă.",
            "NU au plafon analgezic. Se titrează până la alinare sau toxicitate.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Morfina: Mitos y Realidades",
      textRO: "2. Morfina: Mituri și Realități",
    },
    {
      type: "list",
      items: [
        {
          icon: AlertOctagon,
          textES: "Mito: 'Causa depresión respiratoria siempre'. Realidad: Muy raro si se titula bien. El dolor es el antagonista fisiológico.",
          textRO: "Mit: 'Cauzează depresie respiratorie mereu'. Realitate: Foarte rar dacă se titrează bine. Durerea este antagonistul fiziologic.",
        },
        {
          icon: TrendingUp,
          textES: "Dolor Irruptivo (Breakthrough Pain): Dolor súbito en paciente controlado. Se trata con 'Rescates' de morfina rápida (1/6 o 1/10 de la dosis total diaria).",
          textRO: "Durere Iruptivă (Breakthrough Pain): Durere bruscă la pacient controlat. Se tratează cu 'Rescue' de morfină rapidă (1/6 sau 1/10 din doza totală zilnică).",
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: Activity,
      titleES: "ROTACIÓN DE OPIOIDES",
      textES: "Si hay toxicidad (neurotoxicidad, mioclonias) o mal control del dolor, se cambia de opioide (ej. Morfina -> Metadona) reduciendo la dosis equianalgésica un 25-50% por la tolerancia cruzada incompleta.",
      titleRO: "ROTAȚIA OPIOIDELOR",
      textRO: "Dacă există toxicitate (neurotoxicitate, mioclonii) sau control slab al durerii, se schimbă opioidul (ex. Morfină -> Metadonă) reducând doza echianalgezică cu 25-50% din cauza toleranței încrucișate incomplete.",
    },
  ],
};
