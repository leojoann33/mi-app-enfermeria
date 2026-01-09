import {
  Droplet,
  Scissors,
  AlertOctagon,
  FileDigit,
} from "lucide-react";

export const INTERNAL_5_TOPIC_2 = {
  id: "internal-5-2",
  titleES: "Medicina Interna: Coagulopatías y CID",
  titleRO: "Medicină Internă: Coagulopatii și CID",
  isExpert: true,
  learningObjectives: [
    "Fisiopatología de la CID (Trombosis + Sangrado).",
    "Interpretación de Tiempos de Coagulación (TP/INR, TTPA).",
    "Manejo de Plaquetopenias.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. CID: Coagulación Intravascular Diseminada",
      textRO: "1. CID: Coagularea Intravasculară Diseminată",
    },
    {
      type: "p",
      textES: "La paradoja de la muerte: El paciente hace trombos por todo el cuerpo, consume sus factores de coagulación, y luego sangra sin parar.",
      textRO: "Paradoxul morții: Pacientul face trombi în tot corpul, își consumă factorii de coagulare, și apoi sângerează fără oprire.",
    },
    {
      type: "table",
      headersES: ["Fase", "Lo que ocurre dentro", "Signos Clínicos", "Laboratorio"],
      headersRO: ["Fază", "Ce se întâmplă înăuntru", "Semne Clinice", "Laborator"],
      rows: [
        { colsES: ["Trombótica", "Activación masiva de coagulación (microtrombos).", "Isquemia distal (dedos azules), Fallo multiorgánico.", "Plaquetas bajan. Dímero D sube."], colsRO: ["Trombotică", "Activare masivă a coagulării (microtrombi).", "Ischemie distală (degete albastre), Insuficiență multiorgan.", "Trombocite scad. D-dimeri cresc."] },
        { colsES: ["Hemorrágica", "Agotamiento de factores (Consumo).", "Sangrado por venopunciones, encías, catéteres.", "TP y TTPA alargados. Fibrinógeno bajo."], colsRO: ["Hemoragică", "Epuizare factori (Consum).", "Sângerare prin venopuncții, gingii, catetere.", "TP și aPTT prelungite. Fibrinogen scăzut."] },
      ],
    },
    {
      type: "h3",
      textES: "2. Tiempos de Coagulación: La Guía Rápida",
      textRO: "2. Timpii de Coagulare: Ghid Rapid",
    },
    {
      type: "list",
      items: [
        {
          icon: Droplet,
          textES: "TP / INR (Vía Extrínseca): Se altera con Warfarina (Sintrom) o Fallo Hepático. Factor VII vida media cortísima.",
          textRO: "TP / INR (Calea Extrinsecă): Se alterează cu Warfarină (Sintrom) sau Insuficiență Hepatică. Factor VII viață foarte scurtă.",
        },
        {
          icon: Scissors,
          textES: "TTPA (Vía Intrínseca): Se altera con Heparina Sódica. Monitorizar en perfusiones.",
          textRO: "aPTT (Calea Intrinsecă): Se alterează cu Heparină Sodică. Monitorizare în perfuzii.",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertOctagon,
      titleES: "TRANSFUNDIR PLAQUETAS",
      textES: "No transfundir rutinariamente si > 10.000 (riesgo trombosis/reacción) salvo sangrado activo o cirugía. En la Púrpura Trombocitopénica Trombótica (PTT) están CONTRAINDICADAS (agravan trombosis).",
      titleRO: "TRANSFUZIE TROMBOCITE",
      textRO: "Nu transfuzați rutină dacă > 10.000 (risc tromboză/reacție) cu excepția sângerării active sau chirurgie. În Purpura Trombocitopenică Trombotică (PTT) sunt CONTRAINDICATE (agravează tromboza).",
    },
  ],
};
