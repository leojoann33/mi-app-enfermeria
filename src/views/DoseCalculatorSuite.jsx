// src/views/DoseCalculatorSuite.jsx
// Calculadora de Dosis Completa para Enfermería
// Edición Mirela Petrescu · 2026

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Droplet,
  Droplets,
  Syringe,
  Scale,
  FlaskConical,
  Gauge,
  RefreshCw,
  ArrowRight,
  Check,
  AlertTriangle,
  History,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Clock,
  Trash2,
} from "lucide-react";

// ============================================================================
// DATOS MEDICAMENTOS GERIATRÍA
// ============================================================================
const GERIATRIC_MEDS = {
  "Ceftriaxona": {
    tipsES: [
      "Administración IM: Es dolorosa, disolver con Lidocaína al 1% si el protocolo lo permite.",
      "Administración IV: Reconstituir con 10ml de SF y administrar muy lento (2-4 minutos).",
      "Precaución: Vigilar antecedentes de alergia a penicilinas o betalactámicos."
    ],
    tipsRO: [
      "Administrare IM: Este dureroasă, dizolvați cu Lidocaină 1% dacă protocolul permite.",
      "Administrare IV: Reconstituiți cu 10ml SF și administrați foarte lent (2-4 minute).",
      "Precauție: Monitorizați antecedentele de alergie la peniciline sau betalactamice."
    ]
  },
  "Dexketoprofeno": {
    tipsES: [
      "Infusión IV: Diluir en 100ml de SF/SG y pasar en 10-20 minutos.",
      "Bolo IV: Administrar lento, durante un mínimo de 15 segundos.",
      "Importante: No mezclar en la misma jeringa con otros fármacos (cristaliza)."
    ],
    tipsRO: [
      "Perfuzie IV: Diluați în 100ml SF/SG și administrați în 10-20 minute.",
      "Bolus IV: Administrați lent, timp de minim 15 secunde.",
      "Important: Nu amestecați în aceeași seringă cu alte medicamente (cristalizează)."
    ]
  },
  "Diazepam": {
    tipsES: [
      "Administración: No diluir, el fármaco precipita (se vuelve blanco).",
      "IV directa: Muy lenta (1 min por cada 10mg) para evitar apnea.",
      "Vigilancia: Alto riesgo de depresión respiratoria, controlar saturación de oxígeno."
    ],
    tipsRO: [
      "Administrare: Nu diluați, medicamentul precipită (devine alb).",
      "IV direct: Foarte lent (1 min pentru fiecare 10mg) pentru a evita apneea.",
      "Supraveghere: Risc crescut de depresie respiratorie, controlați saturația de oxigen."
    ]
  },
  "Digoxina": {
    tipsES: [
      "Administración IV: Muy lenta, administrar durante al menos 5 minutos.",
      "Seguridad: Monitorizar la frecuencia cardíaca (FC) antes de administrar.",
      "Contraindicación: NO administrar si la frecuencia cardíaca es < 60 lpm."
    ],
    tipsRO: [
      "Administrare IV: Foarte lentă, administrați timp de cel puțin 5 minute.",
      "Siguranță: Monitorizați frecvența cardiacă (FC) înainte de administrare.",
      "Contraindicație: NU administrați dacă frecvența cardiacă este < 60 bpm."
    ]
  },
  "Furosemida": {
    tipsES: [
      "Administración IV: Lenta (1-2 min) para evitar ototoxicidad (daño auditivo).",
      "Fotosensible: Proteger de la luz si se administra en infusión continua.",
      "Efecto: Monitorizar diuresis (orina) y presión arterial regularmente."
    ],
    tipsRO: [
      "Administrare IV: Lentă (1-2 min) pentru a evita ototoxicitatea (leziuni auditive).",
      "Fotosensibil: Protejați de lumină dacă se administrează în perfuzie continuă.",
      "Efect: Monitorizați diureza (urina) și tensiunea arterială în mod regulat."
    ]
  },
  "Haloperidol": {
    tipsES: [
      "Vía IM: Inyección profunda en glúteo mediante técnica en Z (irritante).",
      "Vía IV: Solo bajo monitorización cardíaca continua (riesgo de arritmias).",
      "Vigilancia: Riesgo de hipotensión ortostática y sedación excesiva."
    ],
    tipsRO: [
      "Cale IM: Injecție profundă în fesier prin tehnica în Z (iritant).",
      "Cale IV: Doar sub monitorizare cardiacă continuă (risc de aritmii).",
      "Supraveghere: Risc de hipotensiune ortostatică și sedare excesivă."
    ]
  },
  "Metamizol": {
    tipsES: [
      "Administración IV: Muy lenta (mínimo 3 min) o diluido en 100ml (20 min).",
      "Peligro: La administración rápida provoca hipotensión grave (Shock).",
      "Vigilancia: Controlar la tensión arterial durante la administración."
    ],
    tipsRO: [
      "Administrare IV: Foarte lentă (minim 3 min) sau diluat în 100ml (20 min).",
      "Pericol: Administrarea rapidă provoacă hipotensiune gravă (Șoc).",
      "Supraveghere: Controlați tensiunea arterială în timpul administrării."
    ]
  },
  "Metoclopramida": {
    tipsES: [
      "Administración IV: Lenta durante 1-2 minutos.",
      "Advertencia: El paso rápido causa ansiedad y agitación grave (acatisia).",
      "Observación: Vigilar si aparecen temblores o rigidez muscular en cuello."
    ],
    tipsRO: [
      "Administrare IV: Lentă timp de 1-2 minute.",
      "Avertisment: Administrarea rapidă cauzează anxietate și agitație gravă (acatisie).",
      "Observație: Urmăriți dacă apar tremurături sau rigiditate musculară la gât."
    ]
  },
  "Paracetamol": {
    tipsES: [
      "Perfusión IV: Administrar el vial de 100ml en 15 minutos.",
      "Intervalo: Respetar mínimo 4 horas entre dosis.",
      "Precaución: Dosis máxima diaria 4g. Reducir dosis en fallo hepático."
    ],
    tipsRO: [
      "Perfuzie IV: Administrați flaconul de 100ml în 15 minute.",
      "Interval: Respectați minim 4 ore între doze.",
      "Precauție: Doza maximă zilnică 4g. Reduceți doza în insuficiență hepatică."
    ]
  },
  "Tramadol": {
    tipsES: [
      "Administración IV: Lenta en 2-3 minutos o diluida en 100ml SF.",
      "Efectos adversos: El paso rápido provoca náuseas y vómitos inmediatos.",
      "Geriatría: Vigilar aparición de estreñimiento, retención urinaria y somnolencia."
    ],
    tipsRO: [
      "Administrare IV: Lentă în 2-3 minute sau diluată în 100ml SF.",
      "Efecte adverse: Administrarea rapidă provoacă greață și vărsături imediate.",
      "Geriatrie: Monitorizați apariția constipației, retenției urinare și somnolenței."
    ]
  }
};

// ============================================================================
// CONFIGURACIÓN DE CALCULADORAS
// ============================================================================
const CALCULATORS = {
  goteo: {
    id: "goteo",
    icon: Droplet,
    titleES: "Goteo IV (gotas/min)",
    titleRO: "Picurare IV (gtt/min)",
    descES: "Calcula velocidad de infusión por gravedad",
    descRO: "Calculează viteza perfuziei gravitaționale",
    color: "bg-blue-500",
    lightBg: "bg-blue-50",
    steps: [
      {
        id: "volume",
        labelES: "Volumen a infundir (ml)",
        labelRO: "Volum de infuzat (ml)",
        helpES: "Volumen total de la bolsa de suero.",
        helpRO: "Volumul total al pungii de ser.",
        unit: "ml",
        type: "number",
        example: "500",
      },
      {
        id: "time",
        labelES: "Tiempo total (horas)",
        labelRO: "Timp total (ore)",
        helpES: "Duración de la infusión. (Ver orden médica)",
        helpRO: "Durata perfuziei. (Vezi prescripția medicală)",
        unit: "h",
        type: "number",
        example: "8",
      },
      {
        id: "factor",
        labelES: "Factor Goteo",
        labelRO: "Factor Picurare",
        helpES: "Gotas por ml del sistema.",
        helpRO: "Picături pe ml ale sistemului.",
        type: "select",
        defaultValue: "20",
        options: [
          { value: "20", labelES: "20 gtt/ml (Macrogotero)", labelRO: "20 gtt/ml (Macropicurător)" },
          { value: "60", labelES: "60 gtt/ml (Microgotero)", labelRO: "60 gtt/ml (Micropicurător)" },
        ],
      },
    ],
    calculate: (data) => {
      const vol = parseFloat(data.volume);
      const time = parseFloat(data.time);
      const factor = parseFloat(data.factor);
      const result = Math.round((vol * factor) / (time * 60));
      return { value: result, unit: "gtt/min", unitRO: "gtt/min", check15sec: Math.round(result / 4) };
    },
    getWarning: (r, isEs) => r.value > 100 ? (isEs ? "⚠️ Goteo muy rápido (>100)." : "⚠️ Picurare foarte rapidă (>100).") : null,
    getActionsES: (d, r) => [`Ajusta a ${r.value} gotas/minuto.`, `En 15 segundos deben caer aprox. ${r.check15sec} gotas.`],
    getActionsRO: (d, r) => [`Reglați la ${r.value} picături/minut.`, `În 15 secunde trebuie să cadă aprox. ${r.check15sec} picături.`],
  },

  dosis: {
    id: "dosis",
    icon: Syringe,
    titleES: "Dosis (mg → ml)",
    titleRO: "Doză (mg → ml)",
    descES: "Convierte mg prescritos a ml para cargar en jeringa",
    descRO: "Convertește mg prescriși în ml pentru seringă",
    color: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    steps: [
      {
        id: "dose",
        labelES: "Dosis prescrita",
        labelRO: "Doza prescrisă",
        helpES: "¿Cuántos mg te han indicado? Mira la orden médica.",
        helpRO: "Câți mg ți s-au indicat? Vezi prescripția.",
        unit: "mg",
        type: "number",
        example: "80",
      },
      {
        id: "concentration",
        labelES: "Concentración del medicamento",
        labelRO: "Concentrația medicamentului",
        helpES: "¿Cuántos mg/ml tiene? Mira la ampolla o el envase.",
        helpRO: "Câți mg/ml are? Vezi fiola sau ambalajul.",
        unit: "mg/ml",
        type: "number",
        example: "40",
      },
      {
        id: "medName",
        labelES: "Nombre del medicamento",
        labelRO: "Numele medicamentului",
        helpES: "Selecciona de la lista o escribe otro",
        helpRO: "Selectează din listă sau scrie altul",
        type: "combobox",
        options: Object.keys(GERIATRIC_MEDS),
        optional: true,
        example: "Furosemida",
      },
    ],
    calculate: (data) => {
      const dose = parseFloat(data.dose);
      const concentration = parseFloat(data.concentration);
      const result = (dose / concentration).toFixed(2);
      return {
        value: parseFloat(result),
        unit: "ml",
        unitRO: "ml",
        medName: data.medName || "",
      };
    },
    getWarning: (result, isEs) => {
      if (result.value > 10)
        return isEs
          ? "⚠️ Volumen alto para bolo IV directo. ¿Es correcta la concentración?"
          : "⚠️ Volum mare pentru bolus IV. Verifică concentrația.";
      return null;
    },
    getActionsES: (data, result) => [
      `Coge una jeringa adecuada (de ${Math.ceil(result.value * 1.5)} ml o mayor).`,
      `Carga exactamente ${result.value} ml ${result.medName ? "de " + result.medName : ""}.`,
      "ANTES de administrar, verifica los 5 CORRECTOS:",
      "  ☐ Paciente correcto",
      "  ☐ Medicamento correcto",
      `  ☐ Dosis correcta (${data.dose} mg = ${result.value} ml)`,
      "  ☐ Vía correcta",
      "  ☐ Hora correcta",
      `REGISTRA: "${result.medName || "Med"} ${data.dose} mg (${result.value} ml) [vía] a las [hora]"`,
    ],
    getActionsRO: (data, result) => [
      `Luați o seringă adecvată (de ${Math.ceil(result.value * 1.5)} ml sau mai mare).`,
      `Încărcați exact ${result.value} ml ${result.medName ? "de " + result.medName : ""}.`,
      "ÎNAINTE de administrare, verificați cele 5 CORECTE:",
      "  ☐ Pacient corect",
      "  ☐ Medicament corect",
      `  ☐ Doză corectă (${data.dose} mg = ${result.value} ml)`,
      "  ☐ Cale corectă",
      "  ☐ Oră corectă",
      `ÎNREGISTRAȚI: "${result.medName || "Med"} ${data.dose} mg (${result.value} ml) [cale] la [ora]"`,
    ],
  },

  // -------------------------------------------------------------------------
  // GERIATRÍA (NUEVO)
  // -------------------------------------------------------------------------

  imc: {
    id: "imc",
    icon: Scale,
    titleES: "IMC (Masa Corporal)",
    titleRO: "IMC (Masă Corporală)",
    descES: "Evalúa estado nutricional (Desnutrición/Obesidad)",
    descRO: "Evaluează starea nutrițională (Malnutriție/Obezitate)",
    color: "bg-teal-500",
    lightBg: "bg-teal-50",
    steps: [
      {
        id: "weight",
        labelES: "Peso (kg)",
        labelRO: "Greutate (kg)",
        helpES: "Peso actual del paciente.",
        helpRO: "Greutatea actuală a pacientului.",
        unit: "kg",
        type: "number",
        example: "70",
      },
      {
        id: "height",
        labelES: "Altura (cm)",
        labelRO: "Înălțime (cm)",
        helpES: "Altura en centímetros.",
        helpRO: "Înălțimea în centimetri.",
        unit: "cm",
        type: "number",
        example: "170",
      },
    ],
    calculate: (data) => {
      const w = parseFloat(data.weight);
      const h = parseFloat(data.height) / 100;
      const imc = (w / (h * h)).toFixed(1);
      return { value: imc, unit: "kg/m²", unitRO: "kg/m²" };
    },
    getWarning: (r, isEs) => {
      const val = parseFloat(r.value);
      if (val < 18.5) return isEs ? "⚠️ BAJO PESO (Posible Desnutrición)" : "⚠️ SUBPONDERAL (Posibilă Malnutriție)";
      if (val > 30) return isEs ? "⚠️ OBESIDAD" : "⚠️ OBEZITATE";
      return null;
    },
    getActionsES: (d, r) => [`IMC: ${r.value}.`, "Registrar en historia clínica.", r.value < 18.5 ? "Valorar suplementos nutricionales." : "Consejo dietético."],
    getActionsRO: (d, r) => [`IMC: ${r.value}.`, "Înregistrați în foaia de observație.", r.value < 18.5 ? "Evaluați suplimente nutritive." : "Consiliere dietetică."],
  },



  barthel: {
    id: "barthel",
    icon: Check,
    titleES: "Índice Barthel (Dependencia)",
    titleRO: "Indicele Barthel (Dependență)",
    descES: "Valora la independencia en ABVD",
    descRO: "Evaluează independența în ADL",
    color: "bg-indigo-600",
    lightBg: "bg-indigo-50",
    steps: [
      {
        id: "score",
        labelES: "Puntuación Total Estimada",
        labelRO: "Scor Total Estimat",
        helpES: "Suma rápida de los 10 ítems (Comer, Lavarse, Vestirse, Arreglarse, Deposición, Micción, Retrete, Traslado, Deambulación, Escaleras).",
        helpRO: "Suma rapidă a celor 10 itemi (Alimentație, Baie, Îmbrăcare, Îngrijire, Defecație, Micțiune, Toaletă, Transfer, Deplasare, Scări).",
        type: "select",
        options: [
          { value: "100", labelES: "100 - Independiente", labelRO: "100 - Independent" },
          { value: "90", labelES: "91-99 - Dependencia Leve", labelRO: "91-99 - Dependență Ușoară" },
          { value: "75", labelES: "61-90 - Dependencia Moderada", labelRO: "61-90 - Dependență Moderată" },
          { value: "40", labelES: "21-60 - Dependencia Severa", labelRO: "21-60 - Dependență Severă" },
          { value: "0", labelES: "0-20 - Dependencia Total", labelRO: "0-20 - Dependență Totală" }
        ]
      }
    ],
    calculate: (data) => {
      return { value: data.score, unit: "puntos", unitRO: "puncte" };
    },
    getWarning: (r, isEs) => parseInt(r.value) < 60 ? (isEs ? "⚠️ ALTO RIESGO DE CAÍDAS Y ÚLCERAS" : "⚠️ RISC CRESCUT DE CĂDERI ȘI ESCARE") : null,
    getActionsES: (d, r) => [`Barthel: ${r.value}.`, "Planificar cuidados de suplencia.", "Movilización programada si < 60."],
    getActionsRO: (d, r) => [`Barthel: ${r.value}.`, "Planificați îngrijiri de suplinire.", "Mobilizare programată dacă < 60."],
  },

  dilucion: {
    id: "dilucion",
    icon: FlaskConical,
    titleES: "Dilución",
    titleRO: "Diluție",
    descES: "Calcula concentración final tras diluir",
    descRO: "Calculează concentrația finală după diluare",
    color: "bg-amber-500",
    lightBg: "bg-amber-50",
    steps: [
      {
        id: "mgInVial",
        labelES: "Cantidad en el frasco o ampolla",
        labelRO: "Cantitate în flacon sau fiolă",
        helpES: "¿Cuántos mg tiene el frasco o la ampolla?",
        helpRO: "Câți mg are flaconul sau fiola?",
        unit: "mg",
        type: "number",
        example: "1000",
      },
      {
        id: "diluent",
        labelES: "Diluyente (SF 0.9% o API)",
        labelRO: "Diluant (SF 0.9% sau API)",
        helpES: "¿Cuántos ml de Suero Fisiológico o Agua para inyección añadirás?",
        helpRO: "Câți ml de Ser Fiziologic sau Apă pentru injecție adaugi?",
        unit: "ml",
        type: "number",
        example: "10",
      },
    ],
    calculate: (data) => {
      const mg = parseFloat(data.mgInVial);
      const ml = parseFloat(data.diluent);
      const concentration = (mg / ml).toFixed(1);
      return {
        value: parseFloat(concentration),
        unit: "mg/ml",
        unitRO: "mg/ml",
        totalMg: mg,
        totalMl: ml,
      };
    },
    getWarning: () => null,
    getActionsES: (data, result) => [
      `Carga ${data.diluent} ml del diluyente indicado (SF o agua).`,
      "Inyecta el diluyente en el vial.",
      "Agita suavemente hasta disolución completa.",
      `Concentración final: ${result.value} mg/ml`,
      `Para 500 mg → cargar ${(500 / result.value).toFixed(1)} ml`,
      "ETIQUETA el vial: medicamento, concentración, fecha/hora, iniciales.",
    ],
    getActionsRO: (data, result) => [
      `Încărcați ${data.diluent} ml din diluantul indicat (SF sau apă).`,
      "Injectați diluantul în fiolă.",
      "Agitați ușor până la dizolvarea completă.",
      `Concentrație finală: ${result.value} mg/ml`,
      `Pentru 500 mg → încărcați ${(500 / result.value).toFixed(1)} ml`,
      "ETICHETAȚI fiola: medicament, concentrație, dată/oră, inițiale.",
    ],
  },

  conversion: {
    id: "conversion",
    icon: RefreshCw,
    titleES: "Conversión",
    titleRO: "Conversie",
    descES: "Conversión entre unidades",
    descRO: "Conversie între unități",
    color: "bg-slate-500",
    lightBg: "bg-slate-50",
    steps: [
      {
        id: "convType",
        labelES: "Tipo de conversión",
        labelRO: "Tip de conversie",
        helpES: "¿Qué quieres convertir?",
        helpRO: "Ce vrei să convertești?",
        type: "select",
        options: [
          { value: "mg_g", labelES: "mg → g", labelRO: "mg → g" },
          { value: "g_mg", labelES: "g → mg", labelRO: "g → mg" },
          { value: "mcg_mg", labelES: "mcg → mg", labelRO: "mcg → mg" },
          { value: "mg_mcg", labelES: "mg → mcg", labelRO: "mg → mcg" },
          { value: "ml_L", labelES: "ml → L", labelRO: "ml → L" },
          { value: "L_ml", labelES: "L → ml", labelRO: "L → ml" },
          { value: "percent_mgml", labelES: "% → mg/ml", labelRO: "% → mg/ml" },
        ],
      },
      {
        id: "inputValue",
        labelES: "Valor a convertir",
        labelRO: "Valoare de convertit",
        helpES: "Introduce el número a convertir",
        helpRO: "Introdu numărul de convertit",
        type: "number",
        example: "1000",
      },
    ],
    calculate: (data) => {
      const val = parseFloat(data.inputValue);
      const type = data.convType;
      let result, fromUnit, toUnit;

      switch (type) {
        case "mg_g":
          result = val / 1000;
          fromUnit = "mg";
          toUnit = "g";
          break;
        case "g_mg":
          result = val * 1000;
          fromUnit = "g";
          toUnit = "mg";
          break;
        case "mcg_mg":
          result = val / 1000;
          fromUnit = "mcg";
          toUnit = "mg";
          break;
        case "mg_mcg":
          result = val * 1000;
          fromUnit = "mg";
          toUnit = "mcg";
          break;
        case "ml_L":
          result = val / 1000;
          fromUnit = "ml";
          toUnit = "L";
          break;
        case "L_ml":
          result = val * 1000;
          fromUnit = "L";
          toUnit = "ml";
          break;
        case "percent_mgml":
          result = val * 10; // 1% = 10 mg/ml
          fromUnit = "%";
          toUnit = "mg/ml";
          break;
        default:
          result = val;
          fromUnit = "";
          toUnit = "";
      }

      return {
        value: result,
        unit: toUnit,
        unitRO: toUnit,
        fromUnit,
        inputValue: val,
      };
    },
    getWarning: () => null,
    getActionsES: (data, result) => [
      `${result.inputValue} ${result.fromUnit} = ${result.value} ${result.unit}`,
    ],
    getActionsRO: (data, result) => [
      `${result.inputValue} ${result.fromUnit} = ${result.value} ${result.unit}`,
    ],
  },

  insulina: {
    id: "insulina",
    icon: Syringe,
    titleES: "Insulina (pauta)",
    titleRO: "Insulină (protocol)",
    descES: "Determina UI de insulina según glucemia",
    descRO: "Determină UI de insulină după glicemie",
    color: "bg-orange-500",
    lightBg: "bg-orange-50",
    steps: [
      {
        id: "glucose",
        labelES: "Glucemia actual",
        labelRO: "Glicemia actuală",
        helpES: "¿Cuál es la glucemia capilar ahora mismo?",
        helpRO: "Care este glicemia capilară acum?",
        unit: "mg/dl",
        type: "number",
        example: "265",
      },
      {
        id: "protocol",
        labelES: "Tipo de pauta",
        labelRO: "Tip de protocol",
        helpES: "¿Qué pauta está prescrita?",
        helpRO: "Ce protocol este prescris?",
        type: "select",
        options: [
          { value: "standard", labelES: "Pauta estándar", labelRO: "Protocol standard" },
          { value: "sensible", labelES: "Pauta sensible (menor dosis)", labelRO: "Protocol sensibil" },
          { value: "resistente", labelES: "Pauta resistente (mayor dosis)", labelRO: "Protocol rezistent" },
        ],
      },
    ],
    calculate: (data) => {
      const glucose = parseFloat(data.glucose);
      const protocol = data.protocol;

      // Pautas de corrección
      const scales = {
        sensible: [
          { min: 0, max: 150, ui: 0 },
          { min: 151, max: 200, ui: 1 },
          { min: 201, max: 250, ui: 2 },
          { min: 251, max: 300, ui: 3 },
          { min: 301, max: 350, ui: 4 },
          { min: 351, max: 400, ui: 5 },
          { min: 401, max: 9999, ui: 6 },
        ],
        standard: [
          { min: 0, max: 150, ui: 0 },
          { min: 151, max: 200, ui: 2 },
          { min: 201, max: 250, ui: 3 },
          { min: 251, max: 300, ui: 4 },
          { min: 301, max: 350, ui: 6 },
          { min: 351, max: 400, ui: 8 },
          { min: 401, max: 9999, ui: 10 },
        ],
        resistente: [
          { min: 0, max: 150, ui: 0 },
          { min: 151, max: 200, ui: 4 },
          { min: 201, max: 250, ui: 6 },
          { min: 251, max: 300, ui: 8 },
          { min: 301, max: 350, ui: 10 },
          { min: 351, max: 400, ui: 12 },
          { min: 401, max: 9999, ui: 14 },
        ],
      };

      const scale = scales[protocol] || scales.standard;
      const match = scale.find((r) => glucose >= r.min && glucose <= r.max);
      const units = match ? match.ui : 0;

      return {
        value: units,
        unit: "UI",
        unitRO: "UI",
        glucose: glucose,
        range: match ? `${match.min}-${match.max}` : "",
      };
    },
    getWarning: (result, isEs) => {
      if (result.glucose > 500)
        return isEs
          ? "⚠️ Glucemia > 500 mg/dl. AVISA al médico además de poner insulina."
          : "⚠️ Glicemie > 500 mg/dl. ANUNȚĂ medicul.";
      if (result.value === 0 && result.glucose < 70)
        return isEs
          ? "⚠️ Glucemia BAJA. NO poner insulina. Valorar hipoglucemia."
          : "⚠️ Glicemie SCĂZUTĂ. NU administra insulină.";
      return null;
    },
    getActionsES: (data, result) => {
      if (result.value === 0) {
        return ["No se requiere insulina de corrección para esta glucemia."];
      }
      return [
        `Carga ${result.value} UI de insulina rápida en jeringa de insulina.`,
        "Administra vía SUBCUTÁNEA (abdomen, brazos, muslos).",
        "Rota la zona de punción.",
        `REGISTRA: "Glucemia ${result.glucose} mg/dl → Insulina rápida ${result.value} UI SC"`,
        "Próximo control según pauta (antes de siguiente comida o 4-6h).",
      ];
    },
    getActionsRO: (data, result) => {
      if (result.value === 0) {
        return ["Nu este necesară insulină de corecție pentru acest nivel al glicemiei."];
      }
      return [
        `Încărcați ${result.value} UI de insulină rapidă în seringa de insulină.`,
        "Administrați pe cale SUBCUTANATĂ (abdomen, brațe, coapse).",
        "Rotiți zona de puncție.",
        `ÎNREGISTRAȚI: "Glicemie ${result.glucose} mg/dl → Insulină rapidă ${result.value} UI SC"`,
        "Următorul control conform protocolului (înainte de următoarea masă sau la 4-6h).",
      ];
    },
  },

  time: {
    id: "time",
    icon: Clock,
    titleES: "Tiempo (h ↔ min)",
    titleRO: "Timp (h ↔ min)",
    descES: "Convierte horas a minutos y viceversa",
    descRO: "Convertește ore în minute și invers",
    color: "bg-indigo-500",
    lightBg: "bg-indigo-50",
    steps: [
      {
        id: "type",
        labelES: "Tipo de conversión",
        labelRO: "Tip de conversie",
        helpES: "¿Qué quieres convertir?",
        helpRO: "Ce vrei să convertești?",
        type: "select",
        options: [
          { value: "h_min", labelES: "Horas → Minutos", labelRO: "Ore → Minute" },
          { value: "min_h", labelES: "Minutos → Horas", labelRO: "Minute → Ore" },
        ],
      },
      {
        id: "val",
        labelES: "Valor",
        labelRO: "Valoare",
        helpES: "Introduce el tiempo",
        helpRO: "Introdu timpul",
        type: "number",
        example: "1.5",
      },
    ],
    calculate: (data) => {
      const val = parseFloat(data.val);
      const type = data.type;
      let result, fromUnit, toUnit;

      if (type === "h_min") {
        result = val * 60;
        fromUnit = "h";
        toUnit = "min";
      } else {
        result = parseFloat((val / 60).toFixed(2));
        fromUnit = "min";
        toUnit = "h";
      }

      return {
        value: result,
        unit: toUnit, 
        unitRO: toUnit,
        fromUnit,
        inputValue: val
      };
    },
    getWarning: () => null,
    getActionsES: (data, result) => [
      `${result.inputValue} ${result.fromUnit} = ${result.value} ${result.unit}`,
    ],
    getActionsRO: (data, result) => [
      `${result.inputValue} ${result.fromUnit} = ${result.value} ${result.unit}`,
    ],
  },

};

// ============================================================================
// COMPONENTES AUXILIARES
// ============================================================================

const ProgressDots = ({ current, total }) => (
  <div className="flex gap-1.5 justify-center">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full transition-all ${
          i < current ? "bg-blue-500" : i === current ? "bg-blue-500 scale-125" : "bg-slate-200"
        }`}
      />
    ))}
  </div>
);

const CalcCard = ({ config, onClick, isEs }) => {
  const Icon = config.icon;
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md active:scale-[0.98] transition-all text-left group w-full"
    >
      <div
        className={`w-14 h-14 rounded-xl ${config.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
      >
        <Icon size={26} className="text-white" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-slate-800 truncate">
          {isEs ? config.titleES : config.titleRO}
        </p>
        <p className="text-xs text-slate-500 truncate">
          {isEs ? config.descES : config.descRO}
        </p>
      </div>
      <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-500" />
    </button>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

export const DoseCalculatorSuite = ({ lang }) => {
  const isEs = lang === "es";
  const [activeCalc, setActiveCalc] = useState(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showMedList, setShowMedList] = useState(false);

  // Cargar historial de localStorage
  useEffect(() => {
    const saved = localStorage.getItem("doseCalcHistory");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading history:", e);
      }
    }
  }, []);

  // Guardar en historial
  const saveToHistory = (calcId, calcResult, calcData) => {
    const entry = {
      id: Date.now(),
      calcId,
      result: calcResult,
      data: calcData,
      timestamp: new Date().toISOString(),
    };
    const newHistory = [entry, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem("doseCalcHistory", JSON.stringify(newHistory));
  };

  // Limpiar historial
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("doseCalcHistory");
  };

  // Resetear cálculo
  const resetCalc = () => {
    setActiveCalc(null);
    setStep(0);
    setData({});
    setResult(null);
  };

  // Manejar siguiente paso
  const handleNext = () => {
    const calc = CALCULATORS[activeCalc];
    if (step < calc.steps.length - 1) {
      setStep(step + 1);
    } else {
      // Calcular resultado
      const calcResult = calc.calculate(data);
      setResult(calcResult);
      saveToHistory(activeCalc, calcResult, data);
    }
  };

  // Manejar input
  const handleInput = (stepId, value) => {
    setData({ ...data, [stepId]: value });
  };

  // Verificar si paso actual es válido
  const isStepValid = () => {
    const calc = CALCULATORS[activeCalc];
    const currentStep = calc.steps[step];
    if (currentStep.optional) return true;
    const value = data[currentStep.id];
    if (currentStep.type === "select") return !!value;
    return value !== undefined && value !== "";
  };

  // ============================================================================
  // PANTALLA DE INICIO
  // ============================================================================
  if (!activeCalc) {
    return (
      <div className="min-h-full bg-gradient-to-b from-slate-50 to-white flex flex-col font-body">
        {/* Header */}
        <div className="bg-white p-4 border-b border-slate-100 shadow-sm">
          <h1 className="font-heading font-black text-slate-800 text-xl flex items-center gap-2">
            💊 {isEs ? "Calculadora de Dosis" : "Calculator Doze"}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {isEs
              ? "Selecciona el cálculo que necesitas"
              : "Selectează calculul de care ai nevoie"}
          </p>
        </div>

        {/* Calculators Grid */}
        <div className="p-4 space-y-3 flex-1 overflow-y-auto pb-24">
          {Object.values(CALCULATORS).map((calc) => (
            <CalcCard
              key={calc.id}
              config={calc}
              isEs={isEs}
              onClick={() => {
                setActiveCalc(calc.id);
                setStep(0);
                
                // Inicializar valores por defecto
                const defaults = {};
                calc.steps.forEach(s => {
                   if (s.defaultValue) defaults[s.id] = s.defaultValue;
                });
                setData(defaults);
                
                setResult(null);
              }}
            />
          ))}

          {/* History Section */}
          {history.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-400 mb-3">
                <History size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isEs ? "Historial reciente" : "Istoric recent"}
                </span>
                <button 
                  onClick={clearHistory}
                  className="ml-auto p-1.5 hover:bg-red-50 text-slate-300 hover:text-red-500 rounded-lg transition-colors"
                  title={isEs ? "Borrar historial" : "Șterge istoricul"}
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="space-y-2">
                {history.slice(0, 3).map((entry) => {
                  const calc = CALCULATORS[entry.calcId];
                  if (!calc) return null;
                  const Icon = calc.icon;
                  return (
                    <div
                      key={entry.id}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm"
                    >
                      <Icon size={16} className="text-slate-400" />
                      <span className="text-slate-600">
                        {isEs ? calc.titleES : calc.titleRO}
                      </span>
                      <span className="ml-auto font-mono font-bold text-slate-800">
                        {entry.result?.value} {entry.result?.unit}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ============================================================================
  // PANTALLA DE RESULTADO
  // ============================================================================
  const calc = CALCULATORS[activeCalc];
  const Icon = calc.icon;

  if (result) {
    const warning = calc.getWarning(result, isEs);
    const actions = isEs
      ? calc.getActionsES(data, result)
      : calc.getActionsRO(data, result);

    // Med info Logic
    const medInfo = result && result.medName ? GERIATRIC_MEDS[result.medName] : null;
    const currentTips = medInfo ? (isEs ? medInfo.tipsES : medInfo.tipsRO) : [];

    return (
      <div className="min-h-full bg-gradient-to-b from-slate-50 to-white flex flex-col font-body">
        {/* Header */}
        <div className={`${calc.color} text-white p-4 shadow-lg`}>
          <button
            onClick={resetCalc}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-2"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">{isEs ? "Volver" : "Înapoi"}</span>
          </button>
          <h2 className="font-heading font-black text-xl">
            ✅ {isEs ? "Resultado" : "Rezultat"}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto pb-24">
          {/* Result Card */}
          <div className="p-4">
            <div className={`${calc.lightBg} rounded-2xl p-6 text-center border-2 border-white shadow-lg`}>
              <p className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                {isEs ? calc.titleES : calc.titleRO}
              </p>
              <p className="text-5xl font-black text-slate-800">{result.value}</p>
              <p className="text-lg font-bold text-slate-600 mt-1">
                {isEs ? result.unit : result.unitRO}
              </p>
            </div>

            {/* Warning */}
            {warning && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-amber-800">{warning}</p>
              </div>
            )}

            {/* Summary */}
            <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">
                📋 {isEs ? "Resumen" : "Rezumat"}
              </p>
              <div className="space-y-1 text-sm text-slate-600">
                {calc.steps.map((s) => {
                  const val = data[s.id];
                  if (!val) return null;
                  let displayVal = val;
                  if (s.type === "select") {
                    const opt = s.options?.find((o) => o.value === val);
                    displayVal = opt ? (isEs ? opt.labelES : opt.labelRO) : val;
                  }
                  return (
                    <div key={s.id} className="flex justify-between">
                      <span>{isEs ? s.labelES : s.labelRO}:</span>
                      <span className="font-mono font-bold">
                        {displayVal} {s.unit || ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Medication Guidelines */}
            {medInfo && currentTips.length > 0 && (
               <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm animate-in zoom-in-95 duration-300">
                 <p className="text-xs font-bold text-blue-700 uppercase mb-2 flex items-center gap-2">
                   ℹ️ {isEs ? "Guía de Administración" : "Ghid de Administrare"}
                   <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-[10px] ml-auto tracking-wide">
                     {result.medName}
                   </span>
                 </p>
                 <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
                   {currentTips.map((tip, i) => (
                     <li key={i} className="flex gap-2 items-start">
                       <span className="text-blue-400 mt-1.5">•</span>
                       <span>{tip}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            )}

            {/* Actions */}
            <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-xs font-bold text-emerald-700 uppercase mb-3">
                ✅ {isEs ? "Qué hacer ahora" : "Ce să faci acum"}
              </p>
              <ol className="space-y-2 text-sm text-emerald-900">
                {(() => {
                  let stepCount = 0;
                  return actions.map((action, i) => {
                    const isCheckbox = action.includes("☐");
                    if (!isCheckbox) stepCount++;
                    
                    return (
                      <li key={i} className={`flex gap-2 ${isCheckbox ? "ml-6" : ""}`}>
                        {!isCheckbox && (
                          <span className="font-bold text-emerald-600 shrink-0">{stepCount}.</span>
                        )}
                        <span className={isCheckbox ? "text-emerald-800" : ""}>{action}</span>
                      </li>
                    );
                  });
                })()}
              </ol>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-4 flex gap-3">
            <button
              onClick={() => {
                setResult(null);
                setStep(0);
                setData({});
              }}
              className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl"
            >
              🔄 {isEs ? "Nuevo cálculo" : "Calcul nou"}
            </button>
            <button
              onClick={resetCalc}
              className="flex-1 py-3 bg-slate-800 text-white font-bold rounded-xl"
            >
              🏠 {isEs ? "Inicio" : "Acasă"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // PANTALLA DE PASO (WIZARD)
  // ============================================================================
  const currentStep = calc.steps[step];

  return (
    <div className="min-h-full bg-gradient-to-b from-slate-50 to-white flex flex-col font-body">
      {/* Header */}
      <div className={`${calc.color} text-white p-4 shadow-lg`}>
        <button
          onClick={() => (step > 0 ? setStep(step - 1) : resetCalc())}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-2"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">{isEs ? "Atrás" : "Înapoi"}</span>
        </button>
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg">
            {isEs ? calc.titleES : calc.titleRO}
          </h2>
          <span className="text-sm text-white/70">
            {isEs ? `Paso ${step + 1} de ${calc.steps.length}` : `Pas ${step + 1} din ${calc.steps.length}`}
          </span>
        </div>
        <div className="mt-3">
          <ProgressDots current={step} total={calc.steps.length} />
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <label className="block text-lg font-bold text-slate-800 mb-2">
            {isEs ? currentStep.labelES : currentStep.labelRO}
          </label>
          <p className="text-sm text-slate-500">
            {isEs ? currentStep.helpES : currentStep.helpRO}
          </p>
        </div>

        {/* Input Field */}
        {currentStep.type === "number" && (
          <div className="relative group/input">
            <input
              type="number"
              inputMode="decimal"
              min="0"
              onWheel={(e) => e.target.blur()} // Disable wheel
              value={data[currentStep.id] || ""}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "" || parseFloat(val) >= 0) {
                   handleInput(currentStep.id, val);
                }
              }}
              placeholder={currentStep.example || ""}
              className="w-full py-6 px-28 text-3xl font-mono font-bold text-center bg-white border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none [&::-webkit-inner-spin-button]:appearance-none transition-all shadow-sm group-hover/input:border-blue-300"
            />
            
            {/* Right Controls Group (Spinners + Unit) */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-4 select-none">
              
              {/* Spinners */}
              <div className="flex flex-col gap-1.5 opacity-40 group-hover/input:opacity-100 transition-opacity">
                <button 
                  onClick={() => {
                    const current = parseFloat(data[currentStep.id] || "0");
                    handleInput(currentStep.id, (current + 1).toString());
                  }}
                  className="p-1 bg-slate-100 hover:bg-blue-100 text-slate-500 hover:text-blue-600 rounded-lg active:scale-90 transition-all shadow-sm"
                >
                  <ChevronUp size={18} />
                </button>
                <button 
                  onClick={() => {
                    const current = parseFloat(data[currentStep.id] || "0");
                    const newVal = current - 1;
                    handleInput(currentStep.id, (newVal < 0 ? 0 : newVal).toString());
                  }}
                  className="p-1 bg-slate-100 hover:bg-blue-100 text-slate-500 hover:text-blue-600 rounded-lg active:scale-90 transition-all shadow-sm"
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              {/* Unit */}
              {currentStep.unit && (
                <div className="text-slate-400 font-bold text-lg leading-tight text-right min-w-[30px]">
                  {currentStep.unit.includes("/") ? (
                    currentStep.unit.split("/").map((part, i) => (
                      <div key={i} className={i > 0 ? "text-xs opacity-80" : ""}>
                        {i > 0 ? "/" : ""}{part}
                      </div>
                    ))
                  ) : (
                    <span>{currentStep.unit}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {currentStep.type === "text" && (
          <input
            type="text"
            value={data[currentStep.id] || ""}
            onChange={(e) => handleInput(currentStep.id, e.target.value)}
            placeholder={currentStep.example || ""}
            className="w-full p-4 text-xl font-bold text-center bg-white border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
          />
        )}

        {currentStep.type === "combobox" && (
          <div className="relative group/combo">
             <div className="relative">
                <input
                  type="text"
                  value={data[currentStep.id] || ""}
                  onChange={(e) => {
                    handleInput(currentStep.id, e.target.value);
                    setShowMedList(true);
                  }}
                  onFocus={() => setShowMedList(true)}
                  onClick={() => setShowMedList(true)}
                  placeholder={currentStep.example || ""}
                  className="w-full p-4 pr-12 text-xl font-bold text-center bg-white border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                />
                <button
                  onClick={() => setShowMedList(!showMedList)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-blue-500 active:scale-95 transition-transform"
                >
                  <ChevronDown size={24} />
                </button>
             </div>
             
             {showMedList && (
               <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-100 rounded-xl shadow-xl max-h-60 overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                 {/* Opción Ninguno/Vacío */}
                 <button
                   onClick={() => {
                     handleInput(currentStep.id, ""); // Limpiar input
                     setShowMedList(false);
                   }}
                   className="w-full text-left p-3 hover:bg-blue-50 hover:text-blue-700 border-b border-slate-50 last:border-0 font-medium text-slate-600 transition-colors"
                 >
                   {isEs ? "Ninguno" : "Niciunul"}
                 </button>

                 {currentStep.options
                   .filter(opt => opt.toLowerCase().includes((data[currentStep.id] || "").toLowerCase()))
                   .map(opt => (
                     <button
                       key={opt}
                       onClick={() => {
                         handleInput(currentStep.id, opt);
                         setShowMedList(false);
                       }}
                       className="w-full text-left p-3 hover:bg-blue-50 hover:text-blue-700 border-b border-slate-50 last:border-0 font-medium text-slate-600 transition-colors"
                     >
                       {opt}
                     </button>
                   ))}
                  {currentStep.options.filter(opt => opt.toLowerCase().includes((data[currentStep.id] || "").toLowerCase())).length === 0 && (
                    <div className="p-3 text-slate-400 text-center text-sm italic">
                      {isEs ? "Sin coincidencias" : "Niciun rezultat"}
                    </div>
                  )}
               </div>
             )}
            
            {/* Backdrop to close when clicking outside */}
            {showMedList && (
              <div 
                className="fixed inset-0 z-40 bg-transparent"
                onClick={() => setShowMedList(false)} 
              />
            )}
          </div>
        )}

        {currentStep.type === "select" && (
          <div className="space-y-3">
            {currentStep.options?.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  handleInput(currentStep.id, opt.value);
                  if (activeCalc === "conversion" || activeCalc === "time") {
                    setStep((s) => s + 1);
                  }
                }}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  data[currentStep.id] === opt.value
                    ? `${calc.color} text-white border-transparent`
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="font-bold">{isEs ? opt.labelES : opt.labelRO}</span>
              </button>
            ))}
          </div>
        )}

        {/* Example */}
        {currentStep.example && currentStep.type !== "select" && (
          <p className="text-center text-sm text-slate-400 mt-3">
            {isEs ? "Ejemplo:" : "Exemplu:"} {currentStep.example}
          </p>
        )}
      </div>

      {/* Next Button */}
      <div className="p-4 pb-6">
        <button
          onClick={handleNext}
          disabled={!isStepValid()}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
            isStepValid()
              ? `${calc.color} text-white shadow-lg active:scale-[0.98]`
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {step === calc.steps.length - 1 ? (
            <>
              <Check size={20} />
              {isEs ? "Calcular" : "Calculează"}
            </>
          ) : (
            <>
              {isEs ? "Siguiente" : "Următorul"}
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
