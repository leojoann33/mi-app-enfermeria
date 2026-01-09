import { Activity, Brain, AlertTriangle, UserMinus, Zap } from 'lucide-react';

export const part8_manual_m3_t5 = {
  title: "Neurología",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Accidente Cerebrovascular (ACV)",
      icon: Activity,
      content: [
        {
          type: "card",
          title: "Tipos y Causas",
          content: [
            "**Isquémico (85%)**: Trombosis (coágulo local, aterosclerosis) o Embolia (coágulo viajero, ACxFA).",
            "**Hemorrágico (15%)**: Rotura vaso (HTA, Aneurisma). Peor pronóstico inicial."
          ]
        },
        {
          type: "card",
          title: "Clínica y Manejo",
          content: [
            "**Síntomas**: Pérdida fuerza/sensibilidad hemicuerpo (Hemiplejía/Hemiparesia), Disartria/Afasia, Desviación comisura bucal.",
            "**Ictus Izquierdo**: Afecta lado derecho cuerpo + Lenguaje (Afasia).",
            "**Ictus Derecho**: Afecta lado izquierdo cuerpo + Negligencia espacial (no reconoce ese lado).",
            "**Cuidados**: Elevación cabecera 30º, vigilancia deglución (disfagia), cambios posturales (cada 2h), prevención úlceras."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Trastornos Degenerativos",
      icon: Brain,
      content: [
        {
          type: "accordion",
          title: "Demencias",
          content: "**Alzheimer**: Degenerativa, progresiva. Pérdida memoria reciente -> remota, desorientación, apraxia/agnosia. Tto: Inhibidores colinesterasa (Donepezilo). **Demencia Vascular**: Escalonada, tras ictus repetidos."
        },
        {
          type: "accordion",
          title: "Parkinson",
          content: "Déficit Dopamina. **Tríada**: Temblor reposo (cuenta monedas), Rigidez (rueda dentada), Bradicinesia (lentitud). **Marcha**: Pasos cortos, cuerpo inclinado, sin braceo (festinante). **Tto**: Levodopa."
        }
      ]
    },
    {
      type: "section",
      title: "Epilepsia",
      icon: Zap,
      content: [
        {
          type: "card",
          title: "Manejo de Crisis Convulsiva",
          listItems: [
            "**Seguridad**: No sujetar, retirar objetos peligrosos, proteger cabeza.",
            "**Vía Aérea**: Posición lateral seguridad (PLS) al ceder crisis. No introducir nada en la boca.",
            "**Observación**: Cronometrar duración, observar tipo movimientos.",
            "**Post-Crisis**: Periodo postictal (somnolencia, confusión).",
            "**Fármacos Urgencia**: Diazepam rectal/IV."
          ]
        }
      ]
    }
  ]
};
