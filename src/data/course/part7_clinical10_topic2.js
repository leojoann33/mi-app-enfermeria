import {
  RefreshCw,
  Settings,
  Scissors,
  Droplet,
} from "lucide-react";

export const CLINICAL_10_TOPIC_2 = {
  id: "part7_clinical10_topic2",
  titleES: "Diálisis y Ostomías Urológicas",
  titleRO: "Dializă și Ostomii Urologice",
  isExpert: false,
  learningObjectives: [
    "Comprender principios de diálisis (Difusión, Ósmosis, Ultrafiltración).",
    "Cuidados del acceso vascular (Fístula AV).",
    "Manejo y cuidados de Urostomías (Bricker/Nefrrostomía).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Terapia de Reemplazo Renal (Diálisis)",
      textRO: "1. Terapie de Substituție Renală (Dializă)",
    },
    {
      type: "list",
      items: [
        {
          icon: RefreshCw,
          textES: "Principios Físicos: Difusión (solutos), Ósmosis (agua), Ultrafiltración (presión para eliminar líquido).",
          textRO: "Principii Fizice: Difuzie (solvți), Osmoză (apă), Ultrafiltrare (presiune pentru eliminare lichid).",
        },
        {
          icon: Settings,
          textES: "Acceso Vascular: FAV (Fístula Arteriovenosa) - Unir arteria y vena. Cuidados: Palpar 'Thrill' (vibración) y auscultar soplo. NO tomar TA ni puncionar en ese brazo.",
          textRO: "Acces Vascular: FAV (Fistulă Arterio-Venoasă) - Unire arteră și venă. Îngrijiri: Palpare 'Thrill' (vibrație) și ascultare suflu. NU lua TA nici puncționa pe acel braț.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Ostomías Urológicas",
      textRO: "2. Ostomii Urologice",
    },
    {
      type: "alert",
      variant: "info",
      icon: Scissors,
      titleES: "Tipos de Derivación",
      textES: "Urostomía (ej. Bricker): Uréteres a porción de íleon abocada a piel. ORINA CONTÍNUA (No tiene esfínter). Nefrostomía: Catéter directo a pelvis renal (lumbar).",
      titleRO: "Tipuri de Derivație",
      textRO: "Urostomie (ex. Bricker): Uretere la porțiune de ileon la piele. URINĂ CONTINUĂ (Nu are sfincter). Nefrostomie: Cateter direct la pelvis renal (lombar).",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "Cuidados: Higiene con agua/jabón neutro. Recortar dispositivo a medida exacta (evitar contacto orina-piel). Vaciar bolsa a la mitad de capacidad.",
          textRO: "Îngrijiri: Igienă cu apă/săpun neutru. Decupare dispozitiv la măsură exactă (evitare contact urină-piele). Golire pungă la jumătate din capacitate.",
        },
      ],
    },
  ],
};
