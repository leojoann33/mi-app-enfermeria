import { ClipboardList, Activity, Bed, UserCheck, Stethoscope } from "lucide-react";

export const part8_manual_m2_t1 = {
  id: "part8_manual_m2_t1",
  titleES: "Preoperatorio y Postoperatorio",
  titleRO: "Preoperator și Postoperator",
  lessons: [
    {
      id: "p8_m2_t1_l1",
      titleES: "Cuidados Preoperatorios",
      titleRO: "Îngrijiri Preoperatorii",
      icon: ClipboardList,
      contentES: [
        {
          type: "paragraph",
          text: "El periodo preoperatorio abarca desde la decisión de intervenir hasta el traslado al quirófano. El objetivo es preparar física y psicológicamente al paciente."
        },
        {
          type: "list",
          items: [
            "**Identificación:** Comprobar pulsera, historia y consentimiento informado.",
            "**Ayuno:** Absoluto (generalmente desde medianoche) para evitar aspiración. Consultar medicación esencial.",
            "**Preparación de la Piel:** Higiene, rasurado (si indicado, con maquinilla eléctrica o crema para evitar cortes) y antisepsia.",
            "**Medicación Preanestésica:** Sedantes o anticolinérgicos según pauta. Barandillas arriba tras administración."
          ]
        },
        {
          type: "callout",
          typeCallout: "warning",
          text: "Retirar prótesis dentales, lentes de contacto, joyas y esmalte de uñas antes de ir a quirófano."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Perioada preoperatorie durează de la decizia de a interveni până la transferul în sala de operație. Obiectivul este pregătirea fizică și psihologică a pacientului."
        },
        {
          type: "list",
          items: [
            "**Identificare:** Verificarea brățării, a istoricului și a consimțământului informat.",
            "**Repaus alimentar:** Absolut (de obicei de la miezul nopții) pentru a evita aspirarea. Consultați medicamentația esențială.",
            "**Pregătirea Pielii:** Igienă, ras (dacă este indicat, cu aparat electric sau cremă pentru a evita tăieturile) și antisepsie.",
            "**Medicație Preanestezică:** Sedative sau anticolinergice conform protocolului. Ridicarea barelor de protecție după administrare."
          ]
        },
        {
           type: "callout",
           typeCallout: "warning",
           text: "Îndepărtați protezele dentare, lentilele de contact, bijuteriile și oja înainte de a merge în sala de operație."
        }
      ]
    },
    {
      id: "p8_m2_t1_l2",
      titleES: "Postoperatorio Inmediato",
      titleRO: "Postoperator Imediat",
      icon: Bed,
      contentES: [
        {
          type: "paragraph",
          text: "Vigilancia estrecha para detectar complicaciones precoces como hemorragia, infección o problemas respiratorios."
        },
        {
          type: "list",
          items: [
            "**Posición:** Inconsciente en decúbito lateral (evitar broncoaspiración). Cabeza ladeada.",
            "**Respiratorias:** Fomentar tos y respiración profunda. Vigilar atelectasia y neumonía.",
            "**Circulatorias:** Movilización precoz y medias antiembolismo para prevenir trombosis.",
            "**Herida:** Controlar sangrado y signos de infección (rubor, calor, pus)."
          ]
        },
        {
          type: "callout",
          typeCallout: "danger",
          text: "Ante una evisceración: Cubrir con toalla estéril húmeda, posición Fowler baja con rodillas flexionadas y avisar al cirujano inmediatamente."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Supraveghere atentă pentru detectarea complicațiilor precoce precum hemoragia, infecția sau problemele respiratorii."
        },
        {
          type: "list",
          items: [
            "**Poziție:** Inconștient în decubit lateral (evitarea bronhoaspirației). Capul într-o parte.",
            "**Respiratorii:** Încurajarea tusei și respirației profunde. Supravegherea atelectaziei și pneumoniei.",
            "**Circulatorii:** Mobilizare precoce și ciorapi antiembolici pentru prevenirea trombozei.",
            "**Plagă:** Controlul sângerării și semnelor de infecție (roșeață, căldură, puroi)."
          ]
        },
        {
           type: "callout",
           typeCallout: "danger",
           text: "În caz de eviscerație: Acoperiți cu un prosop steril umed, poziție Fowler joasă cu genunchii flexați și anunțați chirurgul imediat."
        }
      ]
    }
  ]
};
