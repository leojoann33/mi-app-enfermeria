import {
  UserMinus,
  AlertTriangle,
  Snail,
  BedDouble,
  Pill,
} from "lucide-react";

export const INTERNAL_11_TOPIC_1 = {
  id: "internal-11-1",
  titleES: "Medicina Interna: Gigantes de la Geriatría",
  titleRO: "Medicină Internă: Giganții Geriatriei",
  isExpert: true,
  learningObjectives: [
    "Identificar la Fragilidad (Frailty) antes de que sea discapacidad.",
    "El peligro de la Hospitalización (Cascada Iatrogénica).",
    "Prevención de caídas.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. La Fragilidad: Reserva Funcional Baja",
      textRO: "1. Fragilitatea: Rezervă Funcțională Scăzută",
    },
    {
      type: "p",
      textES: "No es lo mismo 'Viejo' que 'Frágil'. El paciente frágil ante un estrés menor (infección orina) sufre un declive funcional desproporcionado.",
      textRO: "Nu e același lucru 'Bătrân' cu 'Fragil'. Pacientul fragil la un stres minor (infecție urinară) suferă un declin funcțional disproporționat.",
    },
    {
      type: "list",
      items: [
        {
          icon: Snail,
          textES: "Sarcopenia: Pérdida de masa muscular. Clave: Velocidad de la marcha lenta.",
          textRO: "Sarcopenie: Pierdere de masă musculară. Cheie: Viteza de mers lentă.",
        },
        {
          icon: UserMinus,
          textES: "Aislamiento Social: Factor de riesgo de mortalidad tan potente como fumar.",
          textRO: "Izolare Socială: Factor de risc de mortalitate la fel de puternic ca fumatul.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Cascada Iatrogénica en Hospitalización",
      textRO: "2. Cascada Iatrogenă în Spitalizare",
    },
    {
      type: "alert",
      variant: "expert",
      icon: BedDouble,
      titleES: "ENCAMAMIENTO ES TÓXICO",
      textES: "Cada día en cama un anciano pierde 1-5% de fuerza muscular. Levantar al sillón y caminar ASAPP (As Soon As Possible) previene delirium, neumonía y TEP.",
      titleRO: "IMOBILIZAREA ESTE TOXICĂ",
      textRO: "Fiecare zi în pat un vârstnic pierde 1-5% forță musculară. Ridicarea la fotoliu și mersul ASAPP (Cât Mai Repede Posibil) previne delir, pneumonie și TEP.",
    },
    {
      type: "table",
      headersES: ["Problema", "Intervención Enfermería"],
      headersRO: ["Problemă", "Intervenție Asistență"],
      rows: [
        { colsES: ["Caídas", "Calzado adecuado, luz nocturna, retirar obstáculos, timbre a mano."], colsRO: ["Căderi", "Încălțăminte adecvată, lumină de veghe, eliminare obstacole, sonerie la îndemână."] },
        { colsES: ["Incontinencia (Funcional)", "Ofertar orinal/cuña regularmente. No pañalizar por rutina."], colsRO: ["Incontinență (Funcțională)", "Oferire urinar/ploscă regulat. Nu pune scutec de rutină."] },
      ],
    },
  ],
};
