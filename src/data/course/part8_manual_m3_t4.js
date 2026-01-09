import { Droplet, Activity, Zap, AlertTriangle, Thermometer } from 'lucide-react';

export const part8_manual_m3_t4 = {
  title: "Endocrino",
  type: "topic",
  children: [
    {
      type: "section",
      title: "Diabetes: Complicaciones Agudas",
      icon: Droplet,
      content: [
        {
          type: "card",
          title: "Hipoglucemia (Shock Insulínico)",
          content: [
            "**Definición**: Glucemia < 60 mg/dl.",
            "**Causas**: Exceso de insulina, ingesta insuficiente, exceso de ejercicio.",
            "**Síntomas**: Inicio rápido. Sudoración fría, temblor, taquicardia, confusión, hambre, visión borrosa.",
            "**Tratamiento Consciente**: H.C. absorción rápida (zumo, azúcar).",
            "**Tratamiento Inconsciente**: Glucagón IM/SC o Glucosa IV (50%).",
            "**Prevención**: Ajuste de dosis, rotación puntos inyección insulina para evitar lipodistrofia."
          ]
        },
        {
          type: "card",
          title: "Cetoacidosis vs Coma Hiperosmolar",
          content: [
            "**Cetoacidosis (CAD)**: Típica Diabetes Tipo 1. Hiperglucemia + Cetonuria + Acidosis. Respiración Kussmaul, aliento afrutado.",
            "**Coma Hiperosmolar**: Típico Diabetes Tipo 2 ancianos. Hiperglucemia severa (>600) sin cetosis significativa. Deshidratación extrema."
          ]
        }
      ]
    },
    {
      type: "section",
      title: "Tiroides y Paratiroides",
      icon: Activity,
      content: [
        {
          type: "accordion",
          title: "Trastornos Tiroideos",
          content: "**Bocio**: Agrandamiento glandular (déficit yodo). **Hipertiroidismo (Graves-Basedow)**: Exoftalmos, taquicardia, pérdida peso, intolerancia calor. Tto: Antitiroideos, Yodo radiactivo (I131), Tiroidectomía. **Cuidados Post-Tiroidectomía**: Vigilar hemorragia, dificultad respiratoria, daño nervio laríngeo (cambios voz)."
        },
        {
          type: "accordion",
          title: "Trastornos Paratiroideos",
          content: "Regulan Metabolismo Calcio/Fósforo. **Hipoparatiroidismo**: Hipocalcemia -> Tetania (espasmos, signos Chvostek/Trousseau). **Hiperparatiroidismo**: Hipercalcemia -> Cálculos renales, descalcificación ósea."
        }
      ]
    },
    {
      type: "section",
      title: "Hipófisis y Suprarrenales",
      icon: Zap,
      content: [
        {
          type: "card",
          title: "Diabetes Insípida",
          content: [
            "Déficit de ADH (Hormona Antidiurética).",
            "**Síntomas**: Poliuria masiva (>20L/día), Polidipsia intensa, orina diluida.",
            "**Riesgo**: Deshidratación severa, shock hipovolémico.",
            "**Tratamiento**: Desmopresina/Vasopresina."
          ]
        },
        {
          type: "card",
          title: "Trastornos Suprarrenales",
          content: [
            "**Addison (Insuficiencia)**: Hipoaldosteronismo/Hipocortisolismo. Hipotensión, hiperpigmentación, astenia.",
            "**Cushing (Exceso)**: Cara luna llena, giba búfalo, estrías vinosas, HTA, hiperglucemia.",
            "**Feocromocitoma**: Tumor médula suprarrenal. Hipertensión paroxística por descarga catecolaminas."
          ]
        }
      ]
    }
  ]
};
