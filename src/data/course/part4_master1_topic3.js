import {
  Droplet,
  Zap,
  Shield,
  Layers,
  Hexagon,
  Combine,
} from "lucide-react";

export const MASTER_1_TOPIC_3 = {
  id: "master-1-3",
  titleES: "Masterclass 3: Tecnología de Apósitos Avanzados",
  titleRO: "Masterclass 3: Tehnologia Pansamentelor Avansate",
  isExpert: true,
  learningObjectives: [
    "Seleccionar apósitos bioactivos según la carga bacteriana y exudado.",
    "Comprender el mecanismo de la Terapia de Presión Negativa (TPN/VAC).",
    "Conocer indicaciones de Colágeno, PHMB y Miel de Manuka.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. El Arsenal Terapéutico (Más allá de la gasa)",
      textRO: "1. Arsenalul Terapeutic (Dincolo de tifon)",
    },
    {
      type: "table",
      headersES: ["Tecnología", "Mecanismo", "Indicación de Oro", "Contraindicación"],
      headersRO: ["Tehnologie", "Mecanism", "Indicație de Aur", "Contraindicație"],
      rows: [
        {
          colsES: [
            "Plata (Crystalline/Ionic)",
            "Bactericida amplio espectro. Iones Ag+ rompen pared celular.",
            "Infección local o riesgo alto (quemaduras). Biofilm.",
            "No usar > 2 semanas si no hay mejoría. Puede teñir (argiria).",
          ],
          colsRO: [
            "Argint (Cristalin/Ionic)",
            "Bactericid spectru larg. Ionii Ag+ rup peretele celular.",
            "Infecție locală sau risc înalt (arsuri). Biofilm.",
            "A nu se utiliza > 2 săptămâni fără ameliorare. Poate păta (argirie).",
          ],
        },
        {
          colsES: [
            "PHMB (Polihexanida)",
            "Antiséptico que ataca la envoltura bacteriana. Menos citotóxico que la Plata.",
            "Heridas colonizadas, prevención segura a largo plazo.",
            "Alergia conocida (rara).",
          ],
          colsRO: [
            "PHMB (Polihexanidă)",
            "Antiseptic care atacă învelișul bacterian. Mai puțin citotoxic decât Argintul.",
            "Plăgi colonizate, prevenție sigură pe termen lung.",
            "Alergie cunoscută (rară).",
          ],
        },
        {
          colsES: [
            "Colágeno / ORC",
            "Mimetismo biológico. Atrae a las MMPs 'distrayéndolas' del tejido sano.",
            "Heridas estancadas sin infección activa pero que no avanzan.",
            "Heridas secas (necesita humedad) o infectadas (bacterias comen colágeno).",
          ],
          colsRO: [
            "Colagen / ORC",
            "Mimetism biologic. Atrage MMP-urile 'distrăgându-le' de la țesutul sănătos.",
            "Plăgi stagnante fără infecție activă dar care nu avansează.",
            "Plăgi uscate (necesită umiditate) sau infectate (bacteriile mănâncă colagen).",
          ],
        },
        {
          colsES: [
            "Miel de Manuka",
            "Osmolaridad (deshidrata bacterias) + Peróxido + pH ácido.",
            "Heridas con mal olor, esfacelos difíciles, MRSA.",
            "Dolor al aplicar (ardor).",
          ],
          colsRO: [
            "Miere de Manuka",
            "Osmolaritate (deshidratează bacterii) + Peroxid + pH acid.",
            "Plăgi cu miros urât, sfaceluri dificile, MRSA.",
            "Durere la aplicare (arsură).",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Terapia de Presión Negativa (TPN / VAC)",
      textRO: "2. Terapia cu Presiune Negativă (TPN / VAC)",
    },
    {
      type: "list",
      items: [
        {
          icon: Combine,
          textES: "Macro-deformación: Acerca los bordes de la herida físicamente (cierre mecánico).",
          textRO: "Macro-deformare: Apropie marginile plăgii fizic (închidere mecanică).",
        },
        {
          icon: Hexagon,
          textES: "Micro-deformación: A nivel celular, el estrés mecánico activa la mitosis y angiogénesis.",
          textRO: "Micro-deformare: La nivel celular, stresul mecanic activează mitoza și angiogeneza.",
        },
        {
          icon: Droplet,
          textES: "Control de fluidos: Elimina el exudado rico en MMPs y citoquinas inflamatorias.",
          textRO: "Controlul fluidelor: Elimină exudatul bogat în MMP și citokine inflamatorii.",
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: Layers,
      titleES: "REGLA DEL APÓSITO IDEAL",
      textES: "Si la herida está seca -> HIDRATAR (Hidrogel). Si está húmeda -> ABSORBER (Espuma/Alginato). Si está infectada -> TRATAR (Plata/Yodo). Si está estancada -> MODULAR (Colágeno). No existe el apósito universal.",
      titleRO: "REGULA PANSAMENTULUI IDEAL",
      textRO: "Dacă plaga e uscată -> HIDRATARE (Hidrogel). Dacă e umedă -> ABSORBȚIE (Spumă/Alginat). Dacă e infectată -> TRATARE (Argint/Iod). Dacă e stagnantă -> MODULARE (Colagen). Nu există pansament universal.",
    },
  ],
};
