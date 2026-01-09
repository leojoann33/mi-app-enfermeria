import { Syringe, Pipette, Bed, AlertTriangle, Workflow } from "lucide-react";

export const part8_manual_m1_t4 = {
  id: "part8_manual_m1_t4",
  titleES: "Técnicas Especiales: Punción, Sondajes y Drenajes",
  titleRO: "Tehnici Speciale: Puncții, Sondaje și Drenaje",
  lessons: [
    {
      id: "p8_m1_t4_l1",
      titleES: "Punción Lumbar",
      titleRO: "Puncție Lombară",
      icon: Syringe,
      contentES: [
        {
          type: "paragraph",
          text: "Procedimiento para obtener LCR, medir presión o administrar fármacos. Se inserta una aguja entre las vértebras L3-L4 o L4-L5 hasta el espacio subaracnoideo."
        },
        {
          type: "paragraph",
          text: "**Posición:** Decúbito lateral en posición fetal (rodillas al pecho, barbilla al pecho) o sentado con la espalda arqueada."
        },
        {
           type: "list",
           items: [
             "**Cuidados:** Estricta asepsia. Vigilar constantes y signos neurológicos.",
             "**Post-punción:** Reposo en decúbito supino (sin almohada a veces) para prevenir cefalea. Vigilar sitio de punción por hemorragia o pérdida de LCR.",
             "Hidratación adecuada para reponer líquido."
           ]
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Procedură pentru obținerea LCR, măsurarea presiunii sau administrarea medicamentelor. Se introduce un ac între vertebrele L3-L4 sau L4-L5 până în spațiul subarahnoidian."
        },
        {
          type: "paragraph",
          text: "**Poziție:** Decubit lateral în poziție fetală (genunchii la piept, bărbia la piept) sau șezând cu spatele arcuit."
        },
        {
           type: "list",
           items: [
             "**Îngrijiri:** Asepsie strictă. Monitorizarea semnelor vitale și neurologice.",
             "**Post-puncție:** Repaus în decubit dorsal (uneori fără pernă) pentru a preveni cefaleea. Monitorizarea locului puncției pentru hemoragie sau scurgeri de LCR.",
             "Hidratare adecvată pentru refacerea lichidului."
           ]
        }
      ]
    },
    {
      id: "p8_m1_t4_l2",
      titleES: "Sondajes y Drenajes",
      titleRO: "Sondaje și Drenaje",
      icon: Workflow,
      contentES: [
        {
          type: "paragraph",
          text: "**Sondaje Vesical:** Introducción de un catéter en la vejiga. Usado para retención urinaria, control estricto de diuresis o cirugía. Requiere técnica estéril para prevenir infecciones urinarias (la complicación más frecuente)."
        },
        {
          type: "paragraph",
          text: "**Sondaje Nasogástrico:** Inserción de sonda por nariz hasta estómago. Usado para alimentación, vaciado gástrico o lavado. Verificar colocación auscultando epigastrio al insuflar aire o aspirando contenido."
        },
        {
           type: "paragraph",
           text: "**Drenaje Postural:** Uso de la gravedad para favorecer la eliminación de secreciones bronquiales. Se coloca al paciente en posiciones específicas según el segmento pulmonar afectado."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "**Sondaj Vezical:** Introducerea unui cateter în vezică. Folosit pentru retenție urinară, control strict al diurezei sau chirurgie. Necesită tehnică sterilă pentru prevenirea infecțiilor urinare (cea mai frecventă complicație)."
        },
        {
          type: "paragraph",
          text: "**Sondaj Nazogastric:** Introducerea sondei pe nas până în stomac. Folosit pentru alimentație, golire gastrică sau spălături. Verificarea poziției prin auscultarea epigastrului la insuflarea aerului sau aspirarea conținutului."
        },
        {
           type: "paragraph",
           text: "**Drenaj Postural:** Utilizarea gravitației pentru a favoriza eliminarea secrețiilor bronșice. Pacientul este așezat în poziții specifice în funcție de segmentul pulmonar afectat."
        }
      ]
    }
  ]
};
