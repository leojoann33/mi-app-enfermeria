// src/data/ui.js

// Configuración general de la UI
export const appConfig = {
    appName: "Petrescu-ENF2",
    version: "2.0.0-beta",
    theme: {
        defaultMode: "dark", 
        useSystemPreferred: true
    }
};

// --- TRADUCCIONES GLOBALES (UI_TEXT) ---
// Esto es lo que faltaba y causaba el error
export const UI_TEXT = {
  es: {
    // General
    searchPlaceholder: "Buscar...",
    searchNoResults: "Sin resultados",
    
    // Calculadoras y Monitorización
    calcBP: "Presión Arterial", 
    calcHR: "Frecuencia Card.", 
    calcSat: "Saturación", 
    calcRR: "Frecuencia Resp.", 
    calcTemp: "Temperatura", 
    catVitals: "Monitorización",
    catCalc: "Escalas de Valoración", 
    calcDoseTitle: "Cálculo de Dosis",
    
    // Categorías
    catCart: "Material y Carro",
    catProcs: "Procedimientos",
    catAid: "Primeros Auxilios",
    
    // Textos varios
    continueLearning: "Formación",
    vadIndication: "Indicaciones",
    vadWarning: "Precauciones",
    stepTitle: "Procedimiento"
  },
  ro: {
    // General
    searchPlaceholder: "Căutare...",
    searchNoResults: "Fără rezultate",
    
    // Calculadoras y Monitorización
    calcBP: "Tensiune Arterială", 
    calcHR: "Frecvență Card.", 
    calcSat: "Saturație", 
    calcRR: "Frecvență Resp.", 
    calcTemp: "Temperatură", 
    catVitals: "Monitorizare",
    catCalc: "Scale de Evaluare", 
    calcDoseTitle: "Calcul Doze",
    
    // Categorías
    catCart: "Materiale",
    catProcs: "Proceduri",
    catAid: "Prim Ajutor",
    
    // Textos varios
    continueLearning: "Formare",
    vadIndication: "Indicații",
    vadWarning: "Precauții",
    stepTitle: "Procedură"
  }
};

// Definición de las pestañas de navegación principal
export const navigationTabs = [
    {
        id: "meds",
        label: "Farmacia",
        path: "/meds"
    },
    {
        id: "tools",
        label: "Clínica",
        path: "/tools"
    }
];