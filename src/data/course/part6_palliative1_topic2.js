import {
  Syringe,
  Calculator,
  AlertTriangle,
  ArrowRightCircle,
  Pipette,
  CheckCircle2,
} from "lucide-react";

export const PALLIATIVE_1_TOPIC_2 = {
  id: "part6_palliative1_topic2",
  titleES: "Vía Subcutánea: La Vía Reina en Paliativos",
  titleRO: "Calea Subcutanată: Calea Regină în Paliative",
  isExpert: true,
  learningObjectives: [
    "Técnica de inserción y zonas de punción (Infraclavicular, Deltoidea).",
    "Fármacos permitidos y prohibidos.",
    "Cálculo de volumen para infusores (Fórmula Donostia).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. ¿Por qué la Vía Subcutánea (VSC)?",
      textRO: "1. De ce Calea Subcutanată (VSC)?",
    },
    {
      type: "p",
      textES: "Es la vía de elección cuando la vía oral no es posible. Es poco agresiva, permite autonomía, no requiere hospitalización y tiene una absorción similar a la intramuscular pero sin dolor.",
      textRO: "Este calea de elecție atunci când calea orală nu este posibilă. Este puțin agresivă, permite autonomie, nu necesită spitalizare și are o absorbție similară cu cea intramusculară, dar fără durere.",
    },
    {
      type: "list",
      items: [
        {
          icon: Syringe,
          textES: "Técnica: Palomita o catéter (23G-25G). Ángulo de 45º. Pellizcar piel.",
          textRO: "Tehnică: Fluturaș sau cateter (23G-25G). Unghi de 45º. Ciupiți pielea.",
        },
        {
          icon: ArrowRightCircle,
          textES: "Zonas de elección: Infraclavicular (Tórax anterior) y Deltoidea.",
          textRO: "Zone de elecție: Infraclaviculară (Torace anterior) și Deltoidiană.",
        },
        {
          icon: AlertTriangle,
          textES: "Contraindicaciones: Zonas con edemas, radioterapia previa o alteraciones cutáneas.",
          textRO: "Contraindicații: Zone cu edeme, radioterapie anterioară sau modificări cutanate.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Fármacos Comunes y 'Cargas' (Bolus vs Infusión)",
      textRO: "2. Farmace Comune și 'Încărcături' (Bolus vs Perfuzie)",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Indicación Principal", "Notas de Seguridad"],
      headersRO: ["Medicament", "Indicație Principală", "Note de Siguranță"],
      rows: [
        {
          colsES: [
            "Morfina",
            "Dolor y Disnea.",
            "Gold Standard. Compatible con la mayoría.",
          ],
          colsRO: [
            "Morfină",
            "Durere și Dispnee.",
            "Standard de Aur. Compatibil cu majoritatea.",
          ],
        },
        {
          colsES: [
            "Midazolam",
            "Sedación, ansiedad, convulsiones.",
            "Inductor del sueño. Primera línea en sedación.",
          ],
          colsRO: [
            "Midazolam",
            "Sedare, anxietate, convulsii.",
            "Inductor de somn. Prima linie în sedare.",
          ],
        },
        {
          colsES: [
            "Haloperidol",
            "Agitación, Vómitos centrales.",
            "Neuroléptico esencial.",
          ],
          colsRO: [
            "Haloperidol",
            "Agitație, Vărsături centrale.",
            "Neuroleptic esențial.",
          ],
        },
        {
          colsES: [
            "Dexametasona",
            "Antiinflamatorio, Coanalgésico.",
            "¡OJO! Precipita con casi todo. Poner en VÍA APARTE o sola en bolus.",
          ],
          colsRO: [
            "Dexametazonă",
            "Antiinflamator, Coanalgezic.",
            "ATENȚIE! Precipită cu aproape tot. Administrați pe LINIE SEPARATĂ sau singură în bolus.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Cálculo de Infusores (Fórmula Guía Donostia)",
      textRO: "3. Calculul Infuzoarelor (Formula Ghid Donostia)",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Calculator,
      titleES: "FÓRMULA MAESTRA",
      textES: "Vt (Volumen Total) = Flujo (ml/h) x 24h x Nº Días. \nEjemplo: Infusor de 2ml/h para 1 día = 48ml totales. Si la medicación ocupa 10ml, añades 38ml de suero fisiológico.",
      titleRO: "FORMULA MAESTRĂ",
      textRO: "Vt (Volum Total) = Flux (ml/h) x 24h x Nr Zile. \nExemplu: Infuzor de 2ml/h pentru 1 zi = 48ml total. Dacă medicamentul ocupă 10ml, adăugați 38ml de ser fiziologic.",
    },
    {
      type: "list",
      items: [
        {
          icon: Pipette,
          textES: "Si usas infusor elastomérico (tipo Baxter), el flujo es fijo. No puedes acelerarlo.",
          textRO: "Dacă folosiți infuzor elastomeric (tip Baxter), fluxul este fix. Nu îl puteți accelera.",
        },
        {
          icon: CheckCircle2,
          textES: "Preparación: Cargar primero la medicación, luego completar con SF hasta el volumen total calculado.",
          textRO: "Preparare: Încărcați întâi medicamentul, apoi completați cu SF până la volumul total calculat.",
        },
      ],
    },
  ],
};
