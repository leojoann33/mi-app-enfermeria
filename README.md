# 🏥 PETRESCU-ENF2: Simulación de Enfermería Avanzada

## 📋 Visión General
PETRESCU-ENF2 es una **PWA (Progressive Web App)** educativa diseñada para estudiantes de enfermería hispano-rumanos. Su objetivo es cerrar la brecha entre la teoría clínica y la práctica real mediante simuladores de alta fidelidad, glosarios bilingües y casos clínicos interactivos.

El proyecto sigue estrictamente la estética académica de **"Harrison's Principles of Internal Medicine"** (18ª Edición) y la metodología **NANDA-I / NIC / NOC**.

---

## 🏗 Arquitectura del Proyecto

El código está organizado modularmente para facilitar la escalabilidad y el mantenimiento:

### `/src/components` (Interfaz de Usuario)
Componentes reutilizables de UI.
- `MainHeader.jsx`: Cabecera principal con selector de "Universos" (MED/ENF/CS).
- `CourseViewer.jsx`: Motor de renderizado del temario académico.
- `VitalsEvaluator.jsx`: Simulador de constantes vitales.

### `/src/data` (Lógica y Bases de Datos)
Toda la información clínica reside aquí, separada por dominios:
- **`dictionary.js`**: Diccionario terminológico masivo (~17.000 términos).
- **`meds.js`**: Base de datos de fármacos activos.
- **`lab.js`**: Tubos de analítica y pruebas de laboratorio.
- **`ehr_sim.js`**: Simulación de Historia Clínica Electrónica.

### `/src/data/vocabulary/` (Glosario Modular)
Vocabulario específico enriquecido con *Nursing Focus*, *Alertas de Seguridad* y *Etimología*.
- `index.js`: Agregador central (Sorteado alfabéticamente).
- `personal.js`: Roles profesionales (MIR, TCAE, Adjunto).
- `procedures.js`: Técnicas (RCP, Sondaje, Vías).
- `medication.js`: Familias farmacológicas.
- `material.js`: Equipamiento e instrumental.
- `symptoms.js`: Signología clínica.
- `pathologies.js`: Enfermedades comunes.
- `geriatrics.js`: Atención al mayor.
- `mental_health.js`: Psiquiatría básica.
- `spaces.js`: Arquitectura hospitalaria.

---

## 🚀 Tecnologías
- **Core**: React + Vite
- **Estilos**: TailwindCSS (Utility-first)
- **Iconografía**: Lucide React
- **Datos**: JSON/JS Objects (No-SQL approach)

---

## 🛠 Instalación y Despliegue

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Construir para producción
npm run build
```

---

## ⚠️ Protocolo de Calidad (PRO-TERM-01)
Todo contenido nuevo debe cumplir:
1.  **Bilingüismo Riguroso**: Español y Rumano profesional.
2.  **Evidencia Científica**: Basado en guías clínicas actuales.
3.  **Seguridad del Paciente**: Alertas claras sobre riesgos (ej. "No reencapuchar agujas").

---
**© 2024-2025 Proyecto Petrescu-Enf2**
