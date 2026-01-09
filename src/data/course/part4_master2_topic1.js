import {
  Activity,
  Wind,
  Settings,
  AlertTriangle,
  TrendingUp,
  BarChart2,
} from "lucide-react";

export const MASTER_2_TOPIC_1 = {
  id: "master-2-1",
  titleES: "Masterclass: Ventilación Mecánica Avanzada",
  titleRO: "Masterclass: Ventilație Mecanică Avansată",
  isExpert: true,
  learningObjectives: [
    "Diferenciar VCV (Volumen Control) de PCV (Presión Control).",
    "Interpretación básica de curvas de flujo y presión.",
    "Reconocer y actuar ante asincronías paciente-ventilador.",
  ],
  content: [
    {
      type: "alert",
      variant: "expert",
      icon: Settings,
      titleES: "NIVEL EXPERTO: REF. MARINO'S ICU BOOK",
      textES: "El ventilador no cura, solo gana tiempo. El objetivo es minimizar el VILI (Ventilator-Induced Lung Injury).",
      titleRO: "NIVEL EXPERT: REF. MARINO'S ICU BOOK",
      textRO: "Ventilatorul nu vindecă, doar câștigă timp. Obiectivul este minimizarea VILI (Ventilator-Induced Lung Injury).",
    },
    {
      type: "h3",
      textES: "1. Modos Ventilatorios: El 'Menu' del Respirador",
      textRO: "1. Moduri Ventilatorii: 'Meniul' Respiratorului",
    },
    {
      type: "table",
      headersES: ["Modo", "Variable Controlada", "Variable Dependiente", "Ventaja/Riesgo"],
      headersRO: ["Mod", "Variabilă Controlată", "Variabilă Dependentă", "Avantaj/Risc"],
      rows: [
        {
          colsES: [
            "VCV (Volumen Control)",
            "Volumen Tidal (Vt)",
            "Presión (Pico/Plato)",
            "Garantiza Vt y eliminación de CO2. RIESGO: Barotrauma si el pulmón es rígido (SDRA).",
          ],
          colsRO: [
            "VCV (Control Volum)",
            "Volum Tidal (Vt)",
            "Presiune (Vârf/Platou)",
            "Garantează Vt și eliminarea CO2. RISC: Barotraumă dacă plămânul este rigid (ARDS).",
          ],
        },
        {
          colsES: [
            "PCV (Presión Control)",
            "Presión Inspiratoria",
            "Volumen Tidal (Vt)",
            "Protege el pulmón (limita presión). RIESGO: Hipoventilación si la compliance baja.",
          ],
          colsRO: [
            "PCV (Control Presiune)",
            "Presiune Inspiratorie",
            "Volum Tidal (Vt)",
            "Protejează plămânul (limitează presiunea). RISC: Hipoventilație dacă complianța scade.",
          ],
        },
        {
          colsES: [
            "PSV (Presión Soporte)",
            "Presión de Soporte",
            "Frecuencia y Vt (Paciente manda)",
            "Modo de WEANING (destete). Confortable. RIESGO: Apnea si el paciente se cansa.",
          ],
          colsRO: [
            "PSV (Suport Presiune)",
            "Presiune de Suport",
            "Frecvență și Vt (Pacientul decide)",
            "Mod de WEANING (înțărcare). Confortabil. RISC: Apnee dacă pacientul obosește.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Interpretación de Curvas (Lo que ves en pantalla)",
      textRO: "2. Interpretarea curbelor (Ce vezi pe ecran)",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Curva de Presión 'Pico de Pato': Indica sobredistensión alveolar (Volutrauma). Bajar Vt.",
          textRO: "Curba de Presiune 'Cioc de Rață': Indică suprasolicitare alveolară (Volutraumă). Scade Vt.",
        },
        {
          icon: Wind,
          textES: "Curva de Flujo 'Dientes de Sierra': Secreciones en el tubo. -> ASPIRAR.",
          textRO: "Curba de Flux 'Dinți de Fierăstrău': Secreții în tub. -> ASPIRAȚI.",
        },
        {
          icon: TrendingUp,
          textES: "Auto-PEEP (Atrapamiento aéreo): La curva de flujo espiratorio no llega a cero antes de la siguiente inspiración. -> Aumentar tiempo espiratorio (bajar FR o relación I:E).",
          textRO: "Auto-PEEP (Blocare aer): Curba fluxului expirator nu ajunge la zero înainte de următoarea inspirație. -> Crește timpul expirator (scade FR sau raport I:E).",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertTriangle,
      titleES: "ASINCRONÍA GRAVE: DOBLE DISPARO",
      textES: "El paciente 'chupa' aire dos veces seguidas. Causa: Hambre de flujo o Vt bajo. Solución: Aumentar sedación, subir Vt o cambiar a modo Presión.",
      titleRO: "ASINCRONIE GRAVĂ: DECLANȘARE DUBLĂ",
      textRO: "Pacientul 'trage' aer de două ori la rând. Cauza: Foame de flux sau Vt mic. Soluție: Crește sedarea, crește Vt sau schimbă în mod Presiune.",
    },
  ],
};
