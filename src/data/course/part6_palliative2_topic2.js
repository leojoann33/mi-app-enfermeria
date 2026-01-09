import {
  Utensils,
  AlertTriangle,
  Pill,
  ArrowRight,
  Ban,
} from "lucide-react";

export const PALLIATIVE_2_TOPIC_2 = {
  id: "part6_palliative2_topic2",
  titleES: "Síntomas Digestivos: Náuseas y Estreñimiento",
  titleRO: "Simptome Digestive: Greață și Constipație",
  isExpert: true,
  learningObjectives: [
    "Etiología de las náuseas y elección del antiemético.",
    "Protocolo de prevención del estreñimiento por opioides.",
    "Manejo de la boca seca (Xerostomía).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Náuseas y Vómitos: No todos son iguales",
      textRO: "1. Greață și Vărsături: Nu toate sunt la fel",
    },
    {
      type: "p",
      textES: "La elección del antiemético depende de la causa (mecanismo fisiopatológico). Tratar la causa es más efectivo que tratar el síntoma a ciegas.",
      textRO: "Alegerea antiemeticului depinde de cauză (mecanism fiziopatologic). Tratarea cauzei este mai eficientă decât tratarea simptomului orbește.",
    },
    {
      type: "table",
      headersES: ["Causa Probable", "Mecanismo", "Fármaco de Elección"],
      headersRO: ["Cauză Probabilă", "Mecanism", "Medicament de Elecție"],
      rows: [
        {
          colsES: [
            "Estasis Gástrica / Opioides",
            "Falta de motilidad.",
            "Metoclopramida (Procinético).",
          ],
          colsRO: [
            "Stază Gastrică / Opioide",
            "Lipsa motilității.",
            "Metoclopramid (Prokinetic).",
          ],
        },
        {
          colsES: [
            "Quimio / Toxina / Uremia",
            "Zona Gatillo (CTZ) en SNC.",
            "Haloperidol (Dosis bajas) o Ondansetrón.",
          ],
          colsRO: [
            "Chimio / Toxină / Uremie",
            "Zona Trigger (CTZ) în SNC.",
            "Haloperidol (Doze mici) sau Ondansetron.",
          ],
        },
        {
          colsES: [
            "Obstrucción Intestinal",
            "Mecánica.",
            "Haloperidol + Octreotido (Secante). ¡NUNCA PROCIÉTICOS!",
          ],
          colsRO: [
            "Obstrucție Intestinală",
            "Mecanică.",
            "Haloperidol + Octreotid (Secretolitic). NICIODATĂ PROCINETICE!",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. El Enemigo Silencioso: Estreñimiento",
      textRO: "2. Inamicul Tăcut: Constipația",
    },
    {
      type: "alert",
      variant: "danger",
      icon: Ban,
      titleES: "REGLA DE ORO",
      textES: "LA MANO QUE PRESCRIBE MORFINA, PRESCRIBE LAXANTES. El estreñimiento por opioides NO genera tolerancia (dura siempre).",
      titleRO: "REGULA DE AUR",
      textRO: "MÂNA CARE PRESCRIE MORFINĂ, PRESCRIE LAXATIVE. Constipația indusă de opioide NU generează toleranță (durează mereu).",
    },
    {
      type: "list",
      items: [
        {
          icon: Pill,
          textES: "Primera Línea: Laxantes osmóticos (Lactulosa, Macrogol/Movicol) + Estimulantes (Bisacodilo) si es necesario.",
          textRO: "Prima Linie: Laxative osmotice (Lactuloză, Macrogol) + Stimulante (Bisacodil) dacă e necesar.",
        },
        {
          icon: ArrowRight,
          textES: "Medidas rectales (Enemas): Solo si no hay deposición en 3 días o hay fecaloma (¡Descartar obstrucción antes!).",
          textRO: "Măsuri rectale (Clisme): Doar dacă nu există scaun în 3 zile sau fecaloma (Excludeți obstrucția înainte!).",
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Cuidados de la Boca",
      textRO: "3. Îngrijirea Gurii",
    },
    {
      type: "p",
      textES: "La boca seca (xerostomía) y la candidiasis son muy frecuentes. Cepillado suave, enjuagues con bicarbonato, piña natural (enzimática) y nistatina si hay hongos.",
      textRO: "Gura uscată (xerostomia) și candidoza sunt foarte frecvente. Periaj blând, clătiri cu bicarbonat, ananas natural (enzimatic) și nistatină dacă există ciuperci.",
    },
  ],
};
