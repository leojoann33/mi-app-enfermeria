import { AlertTriangle, Zap, Thermometer, Activity } from "lucide-react";

export const part8_manual_m2_t2 = {
  id: "part8_manual_m2_t2",
  titleES: "Dolor, Shock y Desequilibrio",
  titleRO: "Durere, Șoc și Dezechilibru",
  lessons: [
    {
      id: "p8_m2_t2_l1",
      titleES: "Manejo del Dolor y Complicaciones",
      titleRO: "Gestionarea Durerii și Complicații",
      icon: Thermometer,
      contentES: [
        {
          type: "paragraph",
          text: "El control del dolor es vital para la recuperación. Administrar analgésicos pautados, especialmente las primeras 24-48h."
        },
        {
          type: "paragraph",
          text: "**Íleo Paralítico:** Ausencia de peristaltismo. Signos: Distensión, sin ruidos, vómitos. Tto: NPO (ni por boca), SNG."
        },
        {
          type: "paragraph",
          text: "**Retención Urinaria:** Común tras anestesia raquídea o cirugía pélvica. Facilitar micción; sondar solo si vejiga distendida y no micción en 8-12h."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Controlul durerii este vital pentru recuperare. Administrați analgezice prescrise, în special în primele 24-48h."
        },
        {
          type: "paragraph",
          text: "**Ileus Paralitic:** Absența peristaltismului. Semne: Distensie, fără zgomote, vărsături. Tratament: NPO (nimic pe gură), SNG."
        },
        {
          type: "paragraph",
          text: "**Retenție Urinară:** Comună după anestezie rahidiană sau chirurgie pelvină. Facilitați urinarea; sondați doar dacă vezica este destinsă și fără micțiune în 8-12h."
        }
      ]
    },
    {
      id: "p8_m2_t2_l2",
      titleES: "Shock: Hipovolémico y Séptico",
      titleRO: "Șoc: Hipovolemic și Septic",
      icon: AlertTriangle,
      contentES: [
        {
          type: "paragraph",
          text: "Estado de hipoperfusión tisular. Signos generales: Hipotensión (TA <90), Taquicardia (>100), Oliguria (<30ml/h), Alteración conciencia."
        },
        {
          type: "list",
          items: [
            "**Shock Hipovolémico:** Por hemorragia o deshidratación. Piel fría y pálida. Tto: Reposición volumen (Cristaloides/Sangre), Trendelenburg (piernas arriba).",
            "**Shock Séptico:** Por infección grave. Fase hiperdinámica: Piel caliente/roja, fiebre. Fase tardía: Piel fría. Tto: Antibióticos precoces + fluidos."
          ]
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Stare de hipoperfuzie tisulară. Semne generale: Hipotensiune (TA <90), Tahicardie (>100), Oligurie (<30ml/h), Alterarea stării de conștiență."
        },
        {
          type: "list",
          items: [
            "**Șoc Hipovolemic:** Prin hemoragie sau deshidratare. Piele rece și palidă. Tratament: Înlocuire volum (Cristaloide/Sânge), Trendelenburg (picioare sus).",
            "**Șoc Septic:** Prin infecție gravă. Fază hiperdinamică: Piele caldă/roșie, febră. Fază tardivă: Piele rece. Tratament: Antibiotice precoce + fluide."
          ]
        }
      ]
    },
    {
      id: "p8_m2_t2_l3",
      titleES: "Desequilibrio Hidroelectrolítico",
      titleRO: "Dezechilibru Hidroelectrolitic",
      icon: Activity,
      contentES: [
        {
          type: "table",
          headers: ["Electrólito", "Hiper (>)", "Hipo (<)", "Síntomas Clave"],
          rows: [
            ["Sodio (Na)", ">145 (Deshidratación)", "<135 (Exceso agua)", "Neuro (confusión, convulsión)"],
            ["Potasio (K)", ">5.0 (I.Renal)", "<3.5 (Diuréticos)", "Corazón (Arritmias mortales)"],
            ["Calcio (Ca)", ">10.7 (Tumores)", "<8.6 (Tetania)", "Músculo (Espasmos, Tetania)"]
          ]
        },
        {
          type: "alert",
          variant: "info",
          text: "Vigilar K+ (Potasio) estrictamente: La hiperpotasemia puede causar paro cardiaco en diástole."
        }
      ],
      contentRO: [
        {
          type: "table",
          headers: ["Electrolit", "Hiper (>)", "Hipo (<)", "Simptome Cheie"],
          rows: [
            ["Sodiu (Na)", ">145 (Deshidratare)", "<135 (Exces apă)", "Neuro (confuzie, convulsii)"],
            ["Potasiu (K)", ">5.0 (I.Renală)", "<3.5 (Diuretice)", "Inimă (Aritmii mortale)"],
            ["Calciu (Ca)", ">10.7 (Tumori)", "<8.6 (Tetanie)", "Mușchi (Spasme, Tetanie)"]
          ]
        },
        {
          type: "alert",
          variant: "info",
          text: "Supravegheați K+ (Potasiu) strict: Hiperpotasemia poate cauza stop cardiac în diastolă."
        }
      ]
    }
  ]
};
