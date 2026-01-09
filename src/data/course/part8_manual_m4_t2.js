import { 
  Baby, 
  Stethoscope, 
  Heart, 
  Activity, 
  AlertTriangle, 
  Syringe, 
  Thermometer, 
  Wind, 
  Utensils, 
  TestTube, 
  Brain, 
  Smile, 
  Frown, 
  UserMinus, 
  Droplet 
} from 'lucide-react';

export const part8_manual_m4_t2 = {
  title: "Pediatría",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Diagnósticos de Enfermería",
      icon: Activity,
      content: [
        {
          type: "card",
          title: "Diagnósticos Comunes",
          description: "Diagnósticos de enfermería frecuentes en el cuidado pediátrico.",
          content: [
            "Ansiedad relacionada con la hospitalización o procedimientos.",
            "Déficit de actividades recreativas.",
            "Déficit de conocimientos (padres) sobre cuidados.",
            "Temor.",
            "Alteración del crecimiento y desarrollo.",
            "Alteración parental (riesgo o real).",
            "Riesgo de traumatismo.",
            "Déficit en los cuidados personales."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Amigdalectomía y Adenoidectomía",
      icon: Stethoscope,
      content: [
        {
          type: "card",
          title: "Descripción",
          description: "Extirpación quirúrgica de las amígdalas palatinas y adenoides.",
          content: [
            "Indicada en infecciones recurrentes, hipertrofia obstructiva o absceso periamigdalino.",
            "Contraindicada en infección aguda activa, paladar hendido o trastornos hemorrágicos."
          ]
        },
        {
          type: "list",
          title: "Cuidados Postoperatorios",
          items: [
            "Posición semiprona o lateral hasta recuperar conciencia para evitar aspiración.",
            "Vigilar signos de hemorragia: deglución frecuente, taquucardia, vómitos de sangre roja.",
            "Dieta líquida fría no irritante (helados de agua), progresando a blanda.",
            "Evitar toser, carraspear o sonarse con fuerza.",
            "Control del dolor (collar de hielo, analgésicos rectales/parenterales)."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Anemia de Células Falciformes",
      icon: Droplet,
      content: [
        {
          type: "card",
          title: "Descripción",
          description: "Hemoglobinopatía hereditaria donde los hematíes adquieren forma de hoz bajo hipoxia.",
          content: [
            "Provoca obstrucción vascular, dolor severo (crisis vasooclusivas) y daño orgánico progresivo.",
            "Afecta principalmente a poblaciones de origen africano."
          ]
        },
        {
          type: "list",
          title: "Tratamiento y Cuidados",
          items: [
            "Hidratación agresiva y analgesia durante las crisis.",
            "Oxigenoterapia si hay hipoxia.",
            "Transfusiones en casos severos.",
            "Prevención de infecciones (vacunación, profilaxis antibiótica).",
            "Evitar factores desencadenantes: deshidratación, frío extremo, altitud."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Cardiopatías Congénitas",
      icon: Heart,
      content: [
        {
          type: "card",
          title: "Clasificación General",
          description: "Defectos cardíacos presentes al nacimiento.",
          content: [
            "**Acianógenas:** Cortocircuitos izq-der (CIV, CIA, Ductus) o ubstrucciones (Estenosis pulmonar/aórtica, Coartación).",
            "**Cianógenas:** Cortocircuitos der-izq (Tetralogía de Fallot, Transposición de grandes vasos). Causan hipoxia sistémica."
          ]
        },
        {
          type: "list",
          title: "Consideraciones de Enfermería",
          items: [
            "Monitorizar signos de insuficiencia cardíaca (taquicardia, taquipnea, sudoración al comer).",
            "Agrupar cuidados para permitir descanso.",
            "Nutrición hipercalórica, tomas pequeñas y frecuentes.",
            "Apoyo a los padres ante el diagnóstico y cirugías."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Criptorquidia",
      icon: Baby,
      content: [
        {
          type: "card",
          title: "Descripción",
          description: "Ausencia de uno o ambos testículos en el escroto (testículo no descendido).",
          content: [
            "Riesgo de esterilidad y malignización si no se corrige.",
            "Tratamiento: Orquidopexia (quirúrgico) o tratamiento hormonal (hCG)."
          ]
        },
        {
          type: "list",
          title: "Cuidados",
          items: [
            "Postoperatorio: prevenir infección, evitar montar a horcajadas.",
            "Vigilar la micción espontánea.",
            "Instruir a los padres sobre el cuidado de la herida."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Deshidratación",
      icon: Droplet,
      content: [
        {
          type: "card",
          title: "Valoración",
          description: "Pérdida de agua y electrolitos, grave en lactantes por su alto % de agua corporal.",
          content: [
            "**Signos:** Fontanela deprimida, mucosas secas, llanto sin lágrimas, piel con mal turgor (pliegue), oliguria, taquicardia.",
            "**Tipos:** Isotónica (más común), Hipotónica, Hipertónica."
          ]
        },
        {
          type: "list",
          title: "Tratamiento",
          items: [
            "Rehidratación oral (SRO) en casos leves/moderados.",
            "Hidratación IV en casos severos o shock, o si hay vómitos incoercibles.",
            "Monitorización estricta de ingresos y egresos.",
            "Peso diario."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Enfermedades Transmisibles y Vacunación",
      icon: Syringe,
      content: [
        {
          type: "card",
          title: "Vacunación",
          description: "Medida preventiva clave en pediatría.",
          content: [
            "Calendario vacunal incluye: Hepatitis B, Difteria, Tétanos, Tos ferina, Polio, Haemophilus B, Neumococo, Meningococo, Sarampión, Rubéola, Paperas, Varicela, VPH (niñas), Gripe.",
            "Contraindicaciones: Anafilaxia previa, enfermedad aguda moderada/grave."
          ]
        },
        {
          type: "list",
          title: "Enfermedades Comunes",
          items: [
            "**Varicela:** Exantema vesiculoso pruriginoso. Aislamiento respiratorio/contacto.",
            "**Sarampión:** Exantema maculopapular, manchas de Koplik, coriza. Aislamiento respiratorio.",
            "**Parotiditis:** Inflamación parótidas. Riesgo orquitis.",
            "**Tos Ferina:** Tos paroxística. Riesgo apnea en lactantes."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Epiglotitis",
      icon: AlertTriangle,
      content: [
        {
          type: "card",
          title: "Urgencia Médica",
          description: "Inflamación bacteriana aguda de la epiglotis (producida por Haemophilus influenzae tipo b).",
          content: [
            "**Clínica:** Inicio brusco, fiebre alta, odinofagia, sialorrea (babeo), posición de trípode, estridor, ausencia de tos.",
            "**PELIGRO:** Obstrucción completa de vía aérea."
          ]
        },
        {
          type: "list",
          title: "Intervención Crítica",
          items: [
            "**NO examinar faringe con depresor** (riesgo de espasmo).",
            "Mantener al niño tranquilo, no separarlo de los padres.",
            "Preparar intubación/traqueostomía de urgencia.",
            "Antibióticos IV."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Estenosis Pilórica",
      icon: Utensils,
      content: [
        {
          type: "card",
          title: "Descripción",
          description: "Hipertrofia del esfínter pilórico que obstruye el vaciado gástrico.",
          content: [
            "**Síntomas:** Vómitos proyectivos postprandiales (no biliosos), hambre tras vomitar, pérdida de peso, masa abdominal (oliva).",
            "Más frecuente en primogénitos varones."
          ]
        },
        {
          type: "list",
          title: "Tratamiento",
          items: [
            "Piloromiotomía (cirugía).",
            "Preoperatorio: Corregir deshidratación y alcalosis metabólica.",
            "Postoperatorio: Reinicio gradual de alimentación."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Fibrosis Quística",
      icon: Wind,
      content: [
        {
          type: "card",
          title: "Fisiopatología",
          description: "Enfermedad genética autonómica recesiva. Disfunción de glándulas exocrinas.",
          content: [
            "Moco espeso y viscoso que obstruye conductos en pulmones, páncreas, hígado.",
            "**Pulmón:** Infecciones crónicas, tos, atelectasias.",
            "**Páncreas:** Malabsorción, heces esteatorreicas, retraso ponderal."
          ]
        },
        {
          type: "list",
          title: "Manejo Integral",
          items: [
            "Fisioterapia respiratoria diaria.",
            "Enzimas pancreáticas con las comidas.",
            "Dieta hipercalórica e hiperproteica.",
            "Vitaminas liposolubles (A, D, E, K).",
            "Antibióticos para infecciones respiratorias."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Respiratorio: Laringotraqueobronquitis (Crup)",
      icon: Wind,
      content: [
        {
          type: "card",
          title: "Descripción",
          description: "Inflamación aguda viral de vías aéreas superiores.",
          content: [
            "**Síntomas:** Tos perruna/metálica, estridor inspiratorio, disfonía, dificultad respiratoria variable.",
            "Empeora por la noche."
          ]
        },
        {
          type: "list",
          title: "Cuidados",
          items: [
            "Humidificación (aire frío o vapor).",
            "Oxígeno si hipoxia.",
            "Corticoides (Dexametasona, Budesonida) y Adrenalina nebulizada en casos moderados/graves.",
            "Mantener calma (llanto empeora obstrucción)."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Tensión Arterial en Pediatría",
      icon: Activity,
      content: [
        {
          type: "card",
          title: "Valores Normales",
          description: "Varían con la edad, sexo y talla.",
          content: [
            "**1-3 meses:** 80/55 mmHg (aprox)",
            "**4-12 meses:** 90/65 mmHg",
            "**1-4 años:** 110/70 mmHg",
            "**5-10 años:** 120/75 mmHg",
            "**11-15 años:** 130/80 mmHg",
            "Hipertensión requiere evaluación repetida."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Miscelánea Pediátrica",
      icon: Frown,
      content: [
        {
          type: "card",
          title: "Niño Maltratado",
          description: "Síndrome de maltrato infantil (físico, emocional, sexual, negligencia).",
          content: [
            "**Signos Alerta:** Lesiones inexplicables, múltiples hematomas en distintos estadios, quemaduras con formas (cigarrillos), fracturas espirales, actitud temerosa, discrepancia historia/lesión.",
            "**Debe Enfermería:** Proteger al niño, registrar objetivamente, notificar sospecha legalmente."
          ]
        },
        {
          type: "card",
          title: "Tumor de Wilms (Nefroblastoma)",
          description: "Tumor renal maligno encapsulado más frecuente en niños.",
          content: [
            "Masa abdominal asintomática, hematuria, hipertensión.",
            "**PRECAUCIÓN:** NO palpar el abdomen innecesariamente (riesgo de ruptura cápsula y diseminación).",
            "Tratamiento: Nefrectomía + Quimio/Radio."
          ]
        },
        {
          type: "card",
          title: "Luxación Congénita Cadera",
          description: "Displasia del desarrollo de la cadera.",
          content: [
            "**Signos:** Pliegues glúteos asimétricos, acortamiento de miembro, Ortolani/Barlow positivos (neonatos), marcha de pato.",
            "**Tratamiento:** Arnés de Pavlik, yeso espica, o cirugía."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Trastornos Renales",
      icon: Droplet,
      content: [
        {
          type: "card",
          title: "Glomerulonefritis aguda postestreptocócica",
          description: "Inflamación glomerular post-infección estreptococo B-hemolítico (faringitis/piel).",
          content: [
            "**SÍNTOMAS:** Hematúria (orina color cola), edema periorbital/facial matutino, hipertensión, proteinuria moderada, oliguria.",
            "**CUIDADOS:** Control estricto TA, balance hídrico, dieta hiposódica, antibióticos si infección activa."
          ]
        },
        {
          type: "card",
          title: "Síndrome Nefrótico",
          description: "Aumento permeabilidad glomerular a proteínas.",
          content: [
            "**SÍNTOMAS:** Proteinuria masiva, hipoalbuminemia, edema generalizado severo (anasarca), hiperlipidemia.",
            "**TRATAMIENTO:** Corticoides (prednisona), control edema, dieta normoproteica (o según protocolo), prevención infecciones."
          ]
        }
      ]
    }
  ]
};
