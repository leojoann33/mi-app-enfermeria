import {
  Droplet,
  Home,
  AlertTriangle,
  RefreshCw,
  ThermometerSun,
} from "lucide-react";

export const MASTER_7_TOPIC_2 = {
  id: "master-7-2",
  titleES: "Masterclass: Diálisis Peritoneal (DP)",
  titleRO: "Masterclass: Dializă Peritoneală (DP)",
  isExpert: true,
  learningObjectives: [
    "Diferenciar modalidades CAPD (Manual) vs APD (Cicladora).",
    "Identificación y manejo de la Peritonitis.",
    "El rol de la Glucosa como agente osmótico.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Modalidades en el Domicilio",
      textRO: "1. Modalități la Domiciliu",
    },
    {
      type: "list",
      items: [
        {
          icon: Home,
          textES: "DPCA / CAPD (Continua Ambulatoria): Manual. 3-4 cambios al día (Día y Noche). El paciente se conecta por gravedad.",
          textRO: "DPCA / CAPD (Continuă Ambulatorie): Manual. 3-4 schimburi pe zi (Zi și Noapte). Pacientul se conectează gravitațional.",
        },
        {
          icon: RefreshCw,
          textES: "DPA / APD (Automatizada): Cicladora nocturna. La máquina hace los cambios mientras el paciente duerme. Abdomen vacío (o húmedo) por el día.",
          textRO: "DPA / APD (Automatizată): Ciclator nocturn. Mașina face schimburile în timp ce pacientul doarme. Abdomen gol (sau umed) ziua.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Complicación Principal: PERITONITIS",
      textRO: "2. Complicație Principală: PERITONITA",
    },
    {
      type: "alert",
      variant: "danger",
      icon: AlertTriangle,
      titleES: "SIGNO #1: LÍQUIDO TURBIO",
      textES: "Si el efluente (líquido drenado) no es transparente (como orina clara/agua) -> Sospechar Peritonitis. Dolor abdominal viene después.",
      titleRO: "SEMNUL #1: LICHID TULBURE",
      textRO: "Dacă efluentul (lichid drenat) nu este transparent (ca urina clară/apa) -> Suspicionați Peritonită. Durerea abdominală vine după.",
    },
    {
      type: "table",
      headersES: ["Diagnóstico", "Criterios (2 de 3)", "Tratamiento"],
      headersRO: ["Diagnostic", "Criterii (2 din 3)", "Tratament"],
      rows: [
        {
          colsES: [
            "Peritonitis Infecciosa",
            "1. Líquido Turbio. 2. Dolor/Fiebre. 3. Leucocitos > 100/mm3 (>50% PMN).",
            "Antibióticos INTRAPERITONEALES (en la bolsa). No se suele quitar catéter salvo hongos/refractaria.",
          ],
          colsRO: [
            "Peritonită Infecțioasă",
            "1. Lichid Tulbure. 2. Durere/Febră. 3. Leucocite > 100/mm3 (>50% PMN).",
            "Antibiotice INTRAPERITONEALE (în pungă). Nu se scoate cateterul decât la fungi/refractară.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "3. La Glucosa y la Ultrafiltración",
      textRO: "3. Glucoza și Ultrafiltrarea",
    },
    {
      type: "p",
      textES: "En DP, usamos Glucosa a altas concentraciones para 'tirar' del agua (ósmosis). A mayor concentración, más líquido sacamos, pero... dañamos más la membrana a largo plazo.",
      textRO: "În DP, folosim Glucoză la concentrații mari pentru a 'trage' apa (osmoză). Cu cât concentrația e mai mare, scoatem mai mult lichid, dar... dăunăm mai mult membranei pe termen lung.",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Bolsa Amarilla (1.36% / 1.5%): Poca ultrafiltración. Mantenimiento.",
          textRO: "Pungă Galbenă (1.36% / 1.5%): Ultrafiltrare mică. Întreținere.",
        },
        {
          icon: ThermometerSun,
          textES: "Bolsa Verde (2.27% / 2.3%): Media.",
          textRO: "Pungă Verde (2.27% / 2.3%): Medie.",
        },
        {
          icon: AlertTriangle,
          textES: "Bolsa Roja (3.86% / 4.25%): ¡Potente! Saca mucha agua. Usar con precaución (deshidratación/hiperglucemia).",
          textRO: "Pungă Roșie (3.86% / 4.25%): Puternică! Scoate multă apă. Utilizare cu precauție (deshidratare/hiperglicemie).",
        },
      ],
    },
  ],
};
