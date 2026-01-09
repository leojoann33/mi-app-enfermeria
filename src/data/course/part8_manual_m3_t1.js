import { Monitor, AlertTriangle, Activity, Thermometer, Shield } from 'lucide-react';

export const part8_manual_m3_t1 = {
  title: "Dermatología y Quemaduras",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Cáncer de Piel",
      icon: Shield,
      content: [
        {
          type: "card",
          title: "Conceptos Generales",
          description: "Tumores malignos de origen cutáneo. Factores predisponentes: exposición UV, arsénico, aceites minerales, radiaciones ionizantes.",
          listItems: [
            "Queratosis actínica: Lesión precancerosa. Excrecencia plana/rugosa, escamosa. Riesgo de epitelioma espinocelular.",
            "Leucoplasia: Lesión blanquecina en mucosas (boca, genital). Causada por irritación (tabaco, alcohol). Puede malignizarse."
          ]
        },
        {
          type: "card",
          title: "Tipos de Cáncer de Piel",
          content: [
            "**Epitelioma Basocelular**: Más frecuente (65%). Células de la capa basal. Zonas expuestas. Crecimiento lento, no metástasis. Formas: superficial, plano-cicatricial, nodular.",
            "**Epitelioma Espinocelular**: Capa espinosa. Zonas expuestas, >60 años. Crecimiento rápido, invasivo, metástasis.",
            "**Melanoma**: Menos frecuente pero más peligroso. Metástasis precoces. Regla ABCD: Asimetría, Bordes irregulares, Color variable, Diámetro creciente.",
            "**Sarcoma de Kaposi**: Relacionado con infección vírica (VHH-8) e inmunosupresión (SIDA). Lesiones violáceas, nódulos sangrantes."
          ]
        },
        {
          type: "card",
          title: "Tratamiento y Cuidados",
          listItems: [
            "Electrocoagulación, crioterapia (lesiones pequeñas, no melanoma).",
            "Extirpación quirúrgica (técnica principal).",
            "Radioterapia, Quimioterapia.",
            "**Prevención**: Evitar sol excesivo, uso de protectores. Autoexamen (Regla ABCD)."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Dermatitis",
      icon: AlertTriangle,
      content: [
        {
          type: "card",
          title: "Dermatitis Atópica",
          description: "Trastorno inflamatorio crónico. Predisposición hereditaria.",
          listItems: [
            "Lactantes: Erupción facial, pápulas, vesículas, costras.",
            "Niños/Adultos: Placas secas en pliegues (codos, rodillas).",
            "Tratamiento: Corticoides tópicos, hidratación, evitar alergenos/irritantes."
          ]
        },
        {
          type: "card",
          title: "Dermatitis Seborreica",
          description: "Inflamación en zonas de secreción sebácea (cuero cabelludo, cara). Escamas amarillentas y grasosas.",
          listItems: [
            "Relacionado con estrés, clima.",
            "Crónica con brotes."
          ]
        },
        {
          type: "card",
          title: "Dermatitis de Contacto",
          description: "Reacción inflamatoria por contacto con irritantes o alergenos.",
          listItems: [
            "Causas: Metales (níquel), gomas, cosméticos.",
            "Síntomas: Rojez, picor intenso, vesículas.",
            "Tratamiento: Identificar y evitar el agente causal."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Infecciones Virales: Herpes Zoster",
      icon: Activity,
      content: [
        {
          type: "card",
          title: "Descripción",
          description: "Reactivación del virus varicela-zoster. Erupción unilateral siguiendo un nervio sensitivo (tronco, cara).",
          listItems: [
            "Síntomas: Dolor (neuralgia), vesículas agrupadas.",
            "Complicaciones: Neuralgia postherpética, afectación ocular (rama oftálmica).",
            "Tratamiento: Antivirales (aciclovir), analgésicos."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Otras Afecciones Dermatológicas",
      icon: Monitor,
      content: [
        {
          type: "accordion",
          title: "Psoriasis",
          content: "Enfermedad crónica inflamatoria. Placas eritematosas cubiertas de escamas nacaradas. Zonas: codos, rodillas, cuero cabelludo. Fenómeno de Koebner (lesiones en zonas de traumatismo)."
        },
        {
          type: "accordion",
          title: "Infestaciones",
          content: "**Sarna (Escabiosis)**: Ácaro Sarcoptes scabiei. Túneles y vesículas. Picor nocturno. Tratamiento: Permetrina, lindano.\n**Pediculosis**: Piojos (cabeza, cuerpo, pubis). Liendres adheridas al pelo."
        },
        {
          type: "accordion",
          title: "Acné Vulgar",
          content: "Inflamación de folículos pilosebáceos. Comedones, pápulas, pústulas. Factores hormonales, bacterianos (P. acnes)."
        }
      ]
    },
    {
      type: "section",
      title: "Quemaduras",
      icon: Thermometer,
      content: [
        {
          type: "card",
          title: "Clasificación por Profundidad",
          content: [
            "**Primer Grado**: Epidermis. Eritema, dolor, sin ampollas. (Ej. Sol).",
            "**Segundo Grado (Espesor Parcial)**: Epidermis y parte de dermis. Ampollas (flictenas), dolor intenso, superficie húmeda.",
            "**Tercer Grado (Espesor Total)**: Destrucción total de piel y anexos. Aspecto carbonizado o blanco nacarado. Indolora (destrucción nerviosa). Requiere injerto."
          ]
        },
        {
          type: "card",
          title: "Valoración de Extensión (Regla de los 9 de Wallace)",
          listItems: [
            "Cabeza y cuello: 9%",
            "Tronco anterior: 18%",
            "Tronco posterior: 18%",
            "Extremidad superior: 9% (c/u)",
            "Extremidad inferior: 18% (c/u)",
            "Genitales: 1%"
          ]
        },
        {
          type: "card",
          title: "Cuidados de Enfermería",
          listItems: [
            "Fase de Emergencia: Asegurar vía aérea (si inhalación de humos), reposición de líquidos (Fórmula de Parkland).",
            "Fase Aguda: Prevenir infección (aislamiento, curas estériles), control del dolor, nutrición hipercalórica.",
            "Fase de Rehabilitación: Prevenir contracturas, apoyo psicológico."
          ]
        }
      ]
    }
  ]
};
