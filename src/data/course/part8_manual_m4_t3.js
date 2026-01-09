import { Baby, Activity, AlertTriangle, Stethoscope, HeartPulse, Clock, FileText } from 'lucide-react';

export const part8_manual_m4_t3 = {
  title: "Obstetricia",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Procedimientos Diagnósticos",
      icon: Stethoscope,
      content: [
        {
          type: "card",
          title: "Amniocentesis",
          content: [
            "Extracción de líquido amniótico mediante punción abdominal para análisis genético y de madurez fetal.",
            "Indicaciones: Edad materna avanzada, antecedentes de anomalías genéticas, sospecha de enfermedad hemolítica.",
            "Riesgos: Aborto espontáneo, infección, hemorragia, lesión fetal (raro)."
          ]
        },
        {
          type: "list",
          title: "Otras Pruebas Diagnósticas",
          items: [
            "Biopsia de vellosidades coriónicas: Diagnóstico genético temprano (10-12 semanas).",
            "Amnioscopia: Visualización del color y cantidad de líquido amniótico.",
            "Perfil Biofísico Fetal: Evalúa bienestar fetal mediante ecografía y monitorización cardiaca.",
            "Prueba de O'Sullivan: Cribado de diabetes gestacional.",
            "Test de Coombs: Detección de anticuerpos anti-Rh."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Complicaciones del Embarazo",
      icon: AlertTriangle,
      content: [
        {
          type: "accordion",
          title: "Trastornos Hipertensivos",
          items: [
            {
              title: "Preeclampsia",
              content: "Hipertensión (>140/90) + Proteinuria después de la semana 20. Signos de alarma: Cefalea intensa, alteraciones visuales, epigastralgia, edema facial/manos, hiperreflexia."
            },
            {
              title: "Eclampsia",
              content: "Presencia de convulsiones en paciente con preeclampsia. Emergencia obstétrica. Tratamiento: Sulfato de magnesio, control de TA, finalización del embarazo."
            },
            {
              title: "Síndrome HELLP",
              content: "Hemólisis (H), Elevación de enzimas hepáticas (EL), Plaquetas bajas (LP). Variante grave de preeclampsia."
            }
          ]
        },
        {
          type: "accordion",
          title: "Hemorragias de la Segunda Mitad",
          items: [
            {
              title: "Placenta Previa",
              content: "Implantación de la placenta en el segmento uterino inferior, cubriendo parcial o totalmente el orificio cervical interno. Clínica: Sangrado rojo brillante, indoloro. Contraindicado tacto vaginal."
            },
            {
              title: "Desprendimiento de Placenta (Abruptio Placentae)",
              content: "Separación prematura de placenta normoinserta. Clínica: Dolor abdominal intenso, útero leñoso (hipertonía), sangrado oscuro (puede estar oculto), sufrimiento fetal."
            }
          ]
        },
        {
          type: "card",
          title: "Otras Complicaciones",
          content: [
            "**Hiperémesis Gravídica:** Náuseas y vómitos persistentes e intensos que causan deshidratación, pérdida de peso y alteraciones electrolíticas.",
            "**Embarazo Ectópico:** Implantación fuera del útero (frecuentemente tubárica). Tríada: Dolor abdominal, amenorrea, sangrado vaginal.",
            "**Incompatibilidad Rh:** Madre Rh- con feto Rh+. Riesgo de isoinmunización. Profilaxis con Gammaglobulina Anti-D.",
            "**Mola Hidatidiforme:** Enfermedad trofoblástica gestacional. Útero mayor a edad gestacional, niveles muy altos de hCG, imagen en 'copos de nieve'."
          ]
        },
        {
          type: "list",
          title: "Infecciones (TORCH)",
          items: [
            "Toxoplasmosis: Evitar carne cruda, contacto con heces de gato.",
            "Rubéola: Causa anomalías congénitas graves (sordera, catarata, cardiopatía).",
            "Citomegalovirus: Causa frecuente de infección viral congénita.",
            "Herpes Simple: Riesgo de transmisión al parto si hay lesiones activas (indicación de cesárea).",
            "Sífilis, Hepatitis B, VIH: Cribado universal en embarazo."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Trabajo de Parto y Parto",
      icon: Baby,
      content: [
        {
          type: "card",
          title: "Factores del Parto (Las 4 P)",
          content: [
            "**Pasaje (Canal):** Pelvis ósea (tipos: ginecoide, androide, etc.) y tejidos blandos.",
            "**Pasajero (Feto):** Tamaño, presentación (cefálica, podálica), posición, actitud.",
            "**Poder (Fuerzas):** Contracciones uterinas (frecuencia, duración, intensidad) y pujos maternos.",
            "**Psique:** Estado emocional, preparación, apoyo."
          ]
        },
        {
          type: "accordion",
          title: "Etapas del Parto",
          items: [
            {
              title: "Primera Etapa: Dilatación",
              content: "Desde el inicio de contracciones regulares hasta dilatación completa (10 cm). Fase Latente (0-4 cm, lenta) y Fase Activa (4-10 cm, más rápida)."
            },
            {
              title: "Segunda Etapa: Expulsivo",
              content: "Desde dilatación completa hasta nacimiento del bebé. Pujos maternos. Movimientos cardinales: Descenso, flexión, rotación interna, extensión, rotación externa, expulsión."
            },
            {
              title: "Tercera Etapa: Alumbramiento",
              content: "Desde nacimiento del bebé hasta expulsión de la placenta. Riesgo de hemorragia."
            },
            {
              title: "Cuarta Etapa: Recuperación",
              content: "Primeras horas post-parto. Vigilancia estricta de hemostasia (tono uterino, sangrado) y constantes vitales."
            }
          ]
        },
        {
          type: "list",
          title: "Monitorización Fetal Intraparto",
          items: [
            "Frecuencia Cardiaca Fetal (FCF) basal: 110-160 lpm.",
            "Aceleraciones: Aumentos transitorios de FCF (signo de bienestar).",
            "Desaceleraciones (Dips): Tempranas (compresión cabeza, benignas), Variables (compresión cordón), Tardías (insuficiencia placentaria, signo de alarma)."
          ]
        }
      ]
    }
  ]
};
