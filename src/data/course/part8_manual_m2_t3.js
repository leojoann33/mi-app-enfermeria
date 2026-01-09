import { HeartPulse, Activity, AlertCircle } from "lucide-react";

export const part8_manual_m2_t3 = {
  id: "part8_manual_m2_t3",
  titleES: "Cardiovascular: Arritmias e Infarto",
  titleRO: "Cardiovascular: Aritmii și Infarct",
  lessons: [
    {
      id: "p8_m2_t3_l1",
      titleES: "Arritmias Cardíacas",
      titleRO: "Aritmii Cardiace",
      icon: HeartPulse,
      contentES: [
        {
          type: "paragraph",
          text: "Alteraciones del ritmo cardiaco por fallos en formación o conducción del impulso."
        },
        {
          type: "list",
          items: [
            "**Taquicardia Sinusal:** >100 lpm. Fisiológica (estrés, ejercicio) o patológica (fiebre, shock).",
            "**Fibrilación Auricular (FA):** Estimulación auricular caótica (350-600 lpm). Pulso irregular. Riesgo de trombos.",
            "**Taquicardia Ventricular (TV):** Grave. 100-250 lpm. Puede degenerar en FV.",
            "**Fibrilación Ventricular (FV):** Paro cardiaco funcional. Requiere desfibrilación inmediata."
          ]
        },
        {
          type: "callout",
          typeCallout: "important",
          text: "En FV o TV sin pulso, iniciar RCP y desfibrilación precoz."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Modificări ale ritmului cardiac din cauza eșecurilor în formarea sau conducerea impulsului."
        },
        {
          type: "list",
          items: [
            "**Tahicardie Sinusală:** >100 bpm. Fiziologică (stres, efort) sau patologică (febră, șoc).",
            "**Fibrilație Atrială (FA):** Stimulare atrială haotică (350-600 bpm). Puls neregulat. Risc de trombi.",
            "**Tahicardie Ventriculară (TV):** Gravă. 100-250 bpm. Poate degenera în FV.",
            "**Fibrilație Ventriculară (FV):** Stop cardiac funcțional. Necesită defibrilare imediată."
          ]
        },
        {
           type: "callout",
           typeCallout: "important",
           text: "În FV sau TV fără puls, începeți RCP și defibrilarea precoce."
        }
      ]
    },
    {
      id: "p8_m2_t3_l2",
      titleES: "Edema Agudo de Pulmón (EAP)",
      titleRO: "Edem Pulmonar Acut (EAP)",
      icon: Activity,
      contentES: [
        {
          type: "paragraph",
          text: "Fallo ventricular izquierdo agudo. Acumulación de líquido en pulmones. Urgencia vital."
        },
        {
          type: "list",
          items: [
            "**Síntomas:** Disnea súbita, ortopnea, tos con esputo asalmonado/rosado, crepitantes.",
            "**Cuidados:** Posición Fowler alta (piernas colgando), O2 alto flujo, Diuréticos (Furosemida), Morfina (vasodilatador/sedante)."
          ]
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Insuficiență ventriculară stângă acută. Acumulare de lichid în plămâni. Urgență vitală."
        },
        {
          type: "list",
          items: [
            "**Simptome:** Dispnee bruscă, ortopnee, tuse cu spută rozacee, crepitante.",
            "**Îngrijiri:** Poziție Fowler înaltă (picioare atârnând), O2 flux mare, Diuretice (Furosemid), Morfină (vasodilatator/sedativ)."
          ]
        }
      ]
    },
    {
       id: "p8_m2_t3_l3",
       titleES: "Derrame Pericárdico y Taponamiento",
       titleRO: "Revărsat Pericardic și Tamponadă",
       icon: AlertCircle,
       contentES: [
         {
           type: "paragraph",
           text: "Acumulación de líquido en saco pericárdico. Si es rápido, comprime el corazón (Taponamiento)."
         },
         {
           type: "paragraph",
           text: "**Tríada de Beck (Taponamiento):** Hipotensión, Ruidos cardiacos apagados, Ingurgitación yugular. Requiere Pericardiocentesis urgente."
         }
       ],
       contentRO: [
         {
           type: "paragraph",
           text: "Acumulare de lichid în sacul pericardic. Dacă este rapidă, comprimă inima (Tamponadă)."
         },
         {
           type: "paragraph",
           text: "**Triada lui Beck (Tamponadă):** Hipotensiune, Zgomote cardiace diminuate, Turgescență jugulară. Necesită Pericardiocenteză urgentă."
         }
       ]
    }
  ]
};
