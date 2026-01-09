import { Brain, AlertOctagon, Frown, Pill, AlertTriangle } from 'lucide-react';

export const part8_manual_m3_t3 = {
  title: "Salud Mental",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Alteraciones de la Consciencia",
      icon: Brain,
      content: [
        {
          type: "card",
          title: "Confusión y Desorientación",
          content: [
            "**Desorientación**: Alteración de la consciencia del yo (autopsíquica) o del entorno (temporoespacial). Común en ancianos hospitalizados.",
            "**Confusión**: Alteración global más severa, con disminución del nivel de consciencia, somnolencia, embotamiento y posibles alucinaciones.",
            "**Cuidados**: Mantener ambiente iluminado (luz nocturna), objetos familiares, orientación verbal constante, evitar distorsiones (intercomunicadores)."
          ]
        },
        {
          type: "card",
          title: "Delirio",
          content: [
            "**Delirio Agudo**: Trastorno transitorio (horas/días). Confusión, desorientación, agitación, alucinaciones. Causas: metabólicas, toxinas, privación sensorial.",
            "**Delirio Crónico**: Ideas fijas erróneas irreductibles a la lógica. Tipos: Persecución (paranoia), Hipocondríaco, Reivindicación. Requiere tratamiento psiquiátrico de base."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Depresión y Suicidio",
      icon: Frown,
      content: [
        {
          type: "accordion",
          title: "Trastorno Depresivo Mayor",
          content: "Síntomas (>2 semanas): Tristeza profunda, anhedonia (pérdida de interés), pérdida/aumento de peso, insomnio/hipersomnia (típico despertar precoz), fatiga, sentimientos de culpa/inutilidad, ideas de muerte. **Ancianos**: Quejas somáticas frecuentes. **Tratamiento**: Psicoterapia y Farmacoterapia (ISRS, Tricíclicos, IMAO - riesgo interacciones)."
        },
        {
          type: "accordion",
          title: "Riesgo de Suicidio",
          content: "Elevado riesgo cuando el paciente empieza a mejorar (mayor energía). **Señales**: Ideas autolíticas, planes concretos, 'arreglar asuntos', regalos de despedida. **Factores de riesgo**: Depresión, aislamiento, ancianidad, abuso de sustancias, antecedentes previos. **Actuación**: Nunca dejar solo ante sospecha, vigilancia estrecha, escucha activa."
        }
      ]
    },
    {
      type: "section",
      title: "Adicciones y Abstinencia",
      icon: AlertOctagon,
      content: [
        {
          type: "card",
          title: "Síndrome de Abstinencia de Alcohol",
          content: [
            "**Síntomas precoces**: Temblor, ansiedad, sudoración, insomnio, náuseas.",
            "**Delirium Tremens**: Urgencia vital. Fiebre >38ºC, taquicardia >120, diaforesis, alucinaciones, agitación extrema. Mortalidad significativa si no se trata.",
            "**Tratamiento**: Sedación (benzodiacepinas), hidratación, vitaminas (B1), prevención de convulsiones."
          ]
        },
        {
          type: "card",
          title: "Otras Sustancias",
          listItems: [
            "**Heroína ('Mono')**: 3-12h post-dosis. Rinorrea, lagrimeo, piloerección, dolores óseos, calambres, diarrea. Cuadro aparatoso pero raramente mortal.",
            "**Hipnóticos/Tranquilizantes**: Peligroso. Riesgo de convulsiones y coma. Requiere reducción gradual."
          ]
        }
      ]
    }
  ]
};
