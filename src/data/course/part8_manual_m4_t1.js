import { Baby, Activity, AlertTriangle, Stethoscope, Search, Info } from 'lucide-react';

export const part8_manual_m4_t1 = {
  title: "Ginecología",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Diagnósticos de Enfermería",
      icon: Activity,
      content: [
        {
          type: "card",
          title: "Diagnósticos Asociados",
          content: [
            {
              type: "list",
              items: [
                "**Incontinencia urinaria de esfuerzo**: relacionada con cambios degenerativos o debilidad pélvica.",
                "**Incontinencia urinaria de urgencia**: relacionada con disminución de capacidad vesical o espasmos.",
                "**Retención urinaria**: relacionada con obstrucción o debilidad del detrusor.",
                "**Disfunción sexual**: relacionada con alteración de estructura/función corporal.",
                "**Patrón sexual inefectivo**.",
                "**Trastornos de la imagen corporal**: relacionado con cirugía.",
                "**Duelo anticipado**: relacionado con pérdida potencial de bienestar.",
                "**Riesgo de lesión perioperatoria**.",
                "**Dolor agudo**."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Procedimientos Ginecológicos",
      icon: Stethoscope,
      content: [
        {
          type: "card",
          title: "Dilatación y Curetaje (D y C)",
          content: [
            {
              type: "paragraph",
              text: "Técnica que consiste en ensanchar el conducto cervical con un dilatador y raspar el revestimiento uterino endometrial con una cureta. Se usa con fines diagnósticos y terapéuticos."
            },
            {
              type: "list",
              title: "Consideraciones de Enfermería",
              items: [
                "La paciente debe vaciar la vejiga antes del procedimiento.",
                "Vigilar compresa perineal frecuentemente por hemorragia.",
                "Higiene perineal tras la intervención.",
                "Reposo relativo; puede levantarse al baño.",
                "Analgésicos suaves para molestias."
              ]
            }
          ]
        },
        {
          type: "card",
          title: "Histerectomía",
          content: [
            {
              type: "paragraph",
              text: "Extirpación del útero. Puede ser subtotal (solo cuerpo), total (cuerpo y cérvix) o radical (incluye ganglios y tejidos adyacentes)."
            },
            {
              type: "table",
              headers: ["Característica", "Histerectomía Abdominal", "Histerectomía Vaginal"],
              rows: [
                ["Incisión", "Abdominal (línea media o Pfannestiel)", "Vaginal (alrededor del cérvix)"],
                ["Ventajas", "Mejor visualización campo quirúrgico", "Menos complicaciones pulmonares/tromboembolismo"],
                ["Hemorragia", "Vigilar apósito abdominal y drenajes", "Vigilar manchado perineal (discreto es normal)"],
                ["Cuidados", "Sonda vesical 24h, movilización precoz", "Sonda vesical, higiene perineal meticulosa"]
              ]
            }
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Patologías Ginecológicas I",
      icon: AlertTriangle,
      content: [
        {
          type: "card",
          title: "Endometriosis",
          content: [
            {
              type: "paragraph",
              text: "Proliferación de tejido endometrial fuera del útero (pelvis, ovarios, intestinos). Responde al ciclo hormonal causando inflamación, dolor y adherencias."
            },
            {
              type: "list",
              title: "Manifestaciones y Tratamiento",
              items: [
                "**Síntomas**: Dismenorrea progresiva, dispareunia, esterilidad.",
                "**Tratamiento hormonal**: Anticonceptivos orales o análogos GnRH para suprimir ovulación.",
                "**Tratamiento quirúrgico**: Resección de focos o histerectomía en casos graves.",
                "**Cuidados**: Calor local, analgésicos, apoyo emocional."
              ]
            }
          ]
        },
        {
          type: "card",
          title: "Enfermedad Inflamatoria Pélvica (EIP)",
          content: [
            {
              type: "paragraph",
              text: "Infección de órganos reproductores internos (salpingitis, ooforitis, endometritis). Causas comunes: Neisseria gonorrhoeae, Chlamydia."
            },
            {
              type: "list",
              title: "Cuidados de Enfermería",
              items: [
                "Antibioterapia de amplio espectro.",
                "Reposo en cama en posición de semi-Fowler (favorece drenaje).",
                "Evitar relaciones sexuales durante tratamiento.",
                "Tratamiento a la pareja sexual."
              ]
            }
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Patologías Ginecológicas II",
      icon: Info,
      content: [
        {
          type: "card",
          title: "Hernias y Prolapsos",
          content: [
            {
              type: "list",
              items: [
                "**Cistocele**: Protrusión de la vejiga en la pared vaginal anterior.",
                "**Rectocele**: Protrusión del recto en la pared vaginal posterior.",
                "**Prolapso uterino**: Descenso del útero por el canal vaginal. Grados I, II y III (procidencia).",
                "**Tratamiento**: Ejercicios de Kegel, pesarios o cirugía (colporrafia, histerectomía)."
              ]
            }
          ]
        },
        {
          type: "card",
          title: "Infecciones Vaginales",
          content: [
            {
              type: "table",
              headers: ["Infección", "Agente", "Síntomas Clave", "Tratamiento"],
              rows: [
                ["Candidiasis", "Candida albicans", "Leucorrea blanca grumosa, prurito", "Antifúngicos (Clotrimazol)"],
                ["Tricomoniasis", "Trichomona vaginalis", "Flujo amarillo-verdoso espumoso", "Metronidazol"],
                ["Vaginosis", "Gardnerella vaginalis", "Flujo gris maloliente (pescado)", "Metronidazol"],
                ["Gonorrea", "Neisseria gonorrhoeae", "Cervicitis mucopurulenta", "Antibióticos (tratar pareja)"]
              ]
            }
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Oncología Ginecológica",
      icon: Search,
      content: [
        {
          type: "card",
          title: "Cáncer de Mama",
          content: [
            {
              type: "paragraph",
              text: "Neoplasia más frecuente. Detección precoz mediante mamografía y autoexploración. Tratamiento principal: Mastectomía (parcial, total, radical)."
            },
            {
              type: "list",
              title: "Cuidados Post-Mastectomía",
              items: [
                "No tomar TA ni punciones en el brazo afectado (riesgo linfoedema).",
                "Mantener brazo elevado.",
                "Ejercicios progresivos del brazo.",
                "Vigilar drenajes y herida."
              ]
            }
          ]
        },
        {
          type: "card",
          title: "Cáncer de Cérvix y Útero",
          content: [
            {
              type: "paragraph",
              text: "**Cérvix**: Relacionado con VPH. Detección por citología (Papanicolau). Estadios CIN I, II, III (Carcinoma in situ).\n**Endometrio**: Adenocarcinoma, más frecuente en postmenopausia. Sangre vaginal anómala."
            }
          ]
        }
      ]
    }
  ]
};
