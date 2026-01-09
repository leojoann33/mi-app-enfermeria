/**
 * SECCIONES ALTERNATIVAS - Contenido fuera del Curso Principal
 * 
 * Estas secciones contienen material de referencia y consulta rápida
 * que no forma parte del Curso Completo de Enfermería (7 PARTES)
 */

// ============================================================================
// CARRITO DE CURAS - Material y Productos
// ============================================================================
export const CARRITO_CURAS = {
  id: "carrito_curas",
  titleES: "Carrito de Curas",
  titleRO: "Cărucior de Pansamente",
  description: {
    es: "Material, productos y apósitos para el cuidado de heridas",
    ro: "Materiale, produse și pansamente pentru îngrijirea plăgilor"
  },
  sections: [
    {
      id: "apositos",
      titleES: "Apósitos y Pansamentos",
      titleRO: "Pansamente",
      topics: [
        { id: "ifkb_m4_t1", titleES: "Apósitos Avanzados (Hidrocoloides, Espumas)", titleRO: "Pansamente Avansate (Hidrocoloizi, Spume)" },
        { id: "ifkb_m4_t2", titleES: "Apósitos Especializados (Silicona, Yodo)", titleRO: "Pansamente Specializate (Silicon, Iod)" },
        { id: "ifkb_m4_t6", titleES: "Productos Tópicos para la Piel", titleRO: "Produse Topice pentru Piele" }
      ]
    },
    {
      id: "material_iv",
      titleES: "Material Intravenoso",
      titleRO: "Material Intravenos",
      topics: [
        { id: "ifkb_m4_t7", titleES: "Catéteres IV: Colores y Calibres", titleRO: "Catetere IV: Culori și Calibre" },
        { id: "ifkb_m4_t8", titleES: "Venoclisis: Equipo y Procedimiento", titleRO: "Venocliză: Echipament și Procedură" },
        { id: "ifkb_m4_t9", titleES: "Jeringas Clínicas", titleRO: "Seringi Clinice" }
      ]
    }
  ]
};

// ============================================================================
// TÉCNICAS - Guías y Procedimientos
// ============================================================================
export const TECNICAS_GUIAS = {
  id: "tecnicas",
  titleES: "Técnicas y Procedimientos",
  titleRO: "Tehnici și Proceduri",
  description: {
    es: "Guías paso a paso de procedimientos de enfermería",
    ro: "Ghiduri pas cu pas pentru proceduri de asistență"
  },
  sections: [
    {
      id: "heridas",
      titleES: "Evaluación y Cuidado de Heridas",
      titleRO: "Evaluarea și Îngrijirea Plăgilor",
      topics: [
        { id: "ifkb_m4_t3", titleES: "Clasificación y Evaluación de Heridas", titleRO: "Clasificarea și Evaluarea Plăgilor" },
        { id: "ifkb_m4_t4", titleES: "Pie Diabético y Escala de Wagner", titleRO: "Picior Diabetic și Scala Wagner" },
        { id: "ifkb_m4_t5", titleES: "Úlceras por Presión (Estadios I-IV)", titleRO: "Escare de Decubit (Stadii I-IV)" }
      ]
    },
    {
      id: "laboratorio",
      titleES: "Técnicas de Laboratorio",
      titleRO: "Tehnici de Laborator",
      topics: [
        { id: "ifkb_m5_t1", titleES: "Tubos de Laboratorio: Código de Colores", titleRO: "Tuburi de Laborator: Cod de Culori" },
        { id: "ifkb_m5_t2", titleES: "Tubos Rojo y Morado: Detalles", titleRO: "Tuburi Roșii și Mov: Detalii" },
        { id: "ifkb_m5_t3", titleES: "Tubos Dorado y Verde: Detalles", titleRO: "Tuburi Aurii și Verzi: Detalii" },
        { id: "ifkb_m5_t4", titleES: "Uroanálisis con Tira Reactiva", titleRO: "Uroanaliza cu Bandă Reactivă" }
      ]
    }
  ]
};

// ============================================================================
// URGENCIAS - Primeros Auxilios y Emergencias
// ============================================================================
export const URGENCIAS_PRIMEROS_AUXILIOS = {
  id: "urgencias",
  titleES: "Urgencias y Primeros Auxilios",
  titleRO: "Urgențe și Prim Ajutor",
  description: {
    es: "Protocolos de actuación en situaciones de emergencia",
    ro: "Protocoale de acțiune în situații de urgență"
  },
  sections: [
    {
      id: "emergencias_alergicas",
      titleES: "Emergencias Alérgicas",
      titleRO: "Urgențe Alergice",
      topics: [
        { id: "ifkb_m7_t1", titleES: "Alergia vs Anafilaxia", titleRO: "Alergie vs Anafilaxie" }
      ]
    }
  ]
};

// ============================================================================
// PATOLOGÍAS - Enfermedades y Condiciones
// ============================================================================
export const PATOLOGIAS_ENFERMEDADES = {
  id: "patologias",
  titleES: "Patologías y Enfermedades",
  titleRO: "Patologii și Boli",
  description: {
    es: "Información sobre enfermedades y condiciones de salud",
    ro: "Informații despre boli și afecțiuni de sănătate"
  },
  sections: [
    {
      id: "endocrinologia",
      titleES: "Endocrinología",
      titleRO: "Endocrinologie",
      topics: [
        { id: "ifkb_m8_t1", titleES: "Criterios de Prediabetes (ADA)", titleRO: "Criterii de Prediabet (ADA)" }
      ]
    },
    {
      id: "valores_referencia",
      titleES: "Valores de Referencia",
      titleRO: "Valori de Referință",
      topics: [
        { id: "ifkb_m9_t1", titleES: "Valores Normales de Referencia", titleRO: "Valori Normale de Referință" },
        { id: "ifkb_m9_t2", titleES: "Temperatura Corporal", titleRO: "Temperatura Corporală" }
      ]
    },
    {
      id: "anatomia",
      titleES: "Anatomía y Fisiología",
      titleRO: "Anatomie și Fiziologie",
      topics: [
        { id: "ifkb_m10_t1", titleES: "Datos Anatómicos del Cuerpo Humano", titleRO: "Date Anatomice ale Corpului Uman" }
      ]
    }
  ]
};

// ============================================================================
// CASOS REALES - Casos Clínicos y Simulaciones
// ============================================================================
export const CASOS_REALES = {
  id: "casos_reales",
  titleES: "Casos Reales",
  titleRO: "Cazuri Reale",
  description: {
    es: "Casos clínicos reales y simulaciones avanzadas",
    ro: "Cazuri clinice reale și simulări avansate"
  },
  sections: [
    {
      id: "casos_pendientes",
      titleES: "Casos Clínicos",
      titleRO: "Cazuri Clinice",
      topics: [
        // Aquí se agregarán casos clínicos en el futuro
      ]
    }
  ]
};

// ============================================================================
// EXPORTACIÓN DE TODAS LAS SECCIONES
// ============================================================================
export const ALTERNATIVE_SECTIONS = {
  carrito_curas: CARRITO_CURAS,
  tecnicas: TECNICAS_GUIAS,
  urgencias: URGENCIAS_PRIMEROS_AUXILIOS,
  patologias: PATOLOGIAS_ENFERMEDADES,
  casos_reales: CASOS_REALES
};

/**
 * Función helper para obtener una sección por ID
 */
export function getAlternativeSection(sectionId) {
  return ALTERNATIVE_SECTIONS[sectionId];
}

/**
 * Función helper para obtener todos los IDs de lecciones de una sección
 */
export function getAllLessonIdsFromSection(sectionId) {
  const section = ALTERNATIVE_SECTIONS[sectionId];
  if (!section) return [];
  
  const lessonIds = [];
  section.sections.forEach(subsection => {
    subsection.topics.forEach(topic => {
      lessonIds.push(topic.id);
    });
  });
  
  return lessonIds;
}
