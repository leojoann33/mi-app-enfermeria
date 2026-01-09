import { Activity, AlertTriangle, Scissors, Zap, AlertCircle } from 'lucide-react';

export const part8_manual_m3_t2 = {
  title: "Digestivo",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Trastornos Anorrectales",
      icon: AlertCircle,
      content: [
        {
          type: "card",
          title: "Patologías Comunes",
          content: [
            "**Hemorroides**: Varicosidades internas o externas del plexo hemorroidal. Síntomas: sangrado rojo rutilante, dolor, prurito.",
            "**Fisura Anal**: Laceración dolorosa en el conducto anal. Dolor intenso al defecar.",
            "**Fístula Rectal**: Trayecto anormal entre conducto anorrectal y piel perianal. Frecuente tras abscesos o en Crohn.",
            "**Tratamiento**: Dieta rica en fibra, baños de asiento, cirugía (hemorroidectomía, fistulotomía) si no responde a medidas conservadoras."
          ]
        },
        {
          type: "card",
          title: "Cuidados Postoperatorios",
          listItems: [
            "Control del dolor (analgésicos antes de la primera deposición).",
            "Baños de asiento para alivio y limpieza.",
            "Vigilar retención urinaria y hemorragias."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Apendicitis",
      icon: Activity,
      content: [
        {
          type: "card",
          title: "Clínica y Diagnóstico",
          description: "Inflamación del apéndice vermiforme.",
          listItems: [
            "**Dolor**: Inicialmente periumbilical/epigástrico, migra a fosa ilíaca derecha (Punto de McBurney).",
            "**Signos**: Blumberg (rebote positivo), náuseas, vómitos, febrícula.",
            "**Diagnóstico**: Clínica, leucocitosis, ecografía/TC.",
            "**Tratamiento**: Apendicectomía urgente."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Enfermedad Inflamatoria Intestinal",
      icon: AlertTriangle,
      content: [
        {
          type: "accordion",
          title: "Colitis Ulcerosa",
          content: "Inflamación crónica de la mucosa del colon y recto. **Síntomas**: Diarrea sanguinolenta (rectorragia), moco, pus, dolor abdominal. **Complicaciones**: Megacolon tóxico. **Tratamiento**: Salicilatos (mesalazina), corticoides, inmunosupresores. Cirugía (colectomía) si refractario."
        },
        {
          type: "accordion",
          title: "Enfermedad de Crohn",
          content: "Inflamación transmural (todas las capas) que puede afectar cualquier parte del tracto digestivo (boca a ano), más frecuente en íleon terminal y colon derecho. **Lesiones**: Parcheadas, fístulas, abscesos, granulomas. **Clínica**: Dolor, diarrea (menos sangre que CU), pérdida de peso. **Cirugía**: Solo para complicaciones (no curativa)."
        }
      ]
    },
    {
      type: "section",
      title: "Cirugía Digestiva y Ostomías",
      icon: Scissors,
      content: [
        {
          type: "card",
          title: "Tipos de Cirugía",
          content: [
            "**Gastrectomía**: Parcial o total (cáncer, úlcera). Riesgo de Síndrome de Dumping (vaciado rápido) y anemia perniciosa (falta de factor intrínseco/B12).",
            "**Resección Intestinal**: Extirpación de segmento enfermo."
          ]
        },
        {
          type: "card",
          title: "Ostomías de Eliminación",
          description: "Exteriorización del intestino a la pared abdominal (estoma).",
          listItems: [
            "**Colostomía**: Heces formadas o semiblandas (según altura). Irrigaciones posibles en colon descendente.",
            "**Ileostomía**: Heces líquidas e irritantes (enzimas). Protección de la piel periestomal crítica. Riesgo de deshidratación.",
            "**Cuidados**: Observar color del estoma (rosado/rojo es normal; oscuro/negro = isquemia), ajuste de dispositivos colector, apoyo emocional."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Otras Patologías",
      icon: Zap,
      content: [
        {
          type: "card",
          title: "Diverticulosis y Diverticulitis",
          content: [
            "**Diverticulosis**: Presencia de sácular (herniaciones) en colon (sigmoide). Asintomática o dolor leve. Dieta rica en fibra.",
            "**Diverticulitis**: Inflamación/infección de divertículos. Dolor FII, fiebre. Riesgo perforación. Tto: Antibióticos, reposo digestivo (dieta absoluta), cirugía si complicaciones."
          ]
        },
        {
          type: "card",
          title: "Gastritis",
          content: "Inflamación mucosa gástrica. **Aguda** (AINEs, alcohol, estrés, H. pylori) o **Crónica**. Riesgo de hemorragia digestiva."
        }
      ]
    }
  ]
};
