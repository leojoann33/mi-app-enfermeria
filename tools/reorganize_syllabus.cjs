#!/usr/bin/env node

/**
 * Script to reorganize syllabus.js
 * Creates new syllabus with only 7 PARTES for Nursing Course
 * Eliminates medical/specialized content
 */

const fs = require('fs');
const path = require('path');

const SYLLABUS_FILE = path.join(__dirname, '../src/data/course/syllabus.js');
const BACKUP_FILE = path.join(__dirname, '../src/data/course/syllabus.backup.js');

// Read current syllabus
const currentContent = fs.readFileSync(SYLLABUS_FILE, 'utf-8');

// Create backup
fs.writeFileSync(BACKUP_FILE, currentContent, 'utf-8');
console.log('✅ Backup created: syllabus.backup.js');

// Extract PARTES I, II, III (created by user - keep as is)
const part1Start = currentContent.indexOf('id: "part_1"');
const part4Start = currentContent.indexOf('id: "part_4"');
const partsI_II_III = currentContent.substring(part1Start - 4, part4Start - 4);

// Create new syllabus with 7 PARTES
const newSyllabus = `export const COURSE_SYLLABUS = [
  // ============================================================================
  // CURSO COMPLETO DE ENFERMERÍA (7 PARTES ÚNICAMENTE)
  // ============================================================================
  
  {
    ${partsI_II_III.trim()},

  // ============================================================================
  // PARTE IV: Enfermería Médico-Quirúrgica
  // ============================================================================
  {
    id: "part_4",
    titleES: "PARTE IV: Enfermería Médico-Quirúrgica",
    titleRO: "PARTEA IV: Asistență Medico-Chirurgicală",
    modules: [
      {
        id: "part4_m1",
        titleES: "Módulo 1: Cuidados Preoperatorios y Postoperatorios",
        titleRO: "Modulul 1: Îngrijiri Preoperatorii și Postoperatorii",
        topics: [
          { id: "part8_manual_m2_t1", titleES: "Preoperatorio y Postoperatorio", titleRO: "Preoperator și Postoperator" }
        ]
      },
      {
        id: "part4_m2",
        titleES: "Módulo 2: Cuidados en Dolor y Shock",
        titleRO: "Modulul 2: Îngrijiri în Durere și Șoc",
        topics: [
          { id: "part8_manual_m2_t2", titleES: "Dolor, Shock y Desequilibrio", titleRO: "Durere, Șoc și Dezechilibru" }
        ]
      },
      {
        id: "part4_m3",
        titleES: "Módulo 3: Cuidados Cardiovasculares",
        titleRO: "Modulul 3: Îngrijiri Cardiovasculare",
        topics: [
          { id: "part8_manual_m2_t3", titleES: "Cardiovascular: Arritmias e Infarto", titleRO: "Cardiovascular: Aritmii și Infarct" },
          { id: "ifkb_m6_t1", titleES: "Colocación de Derivaciones ECG", titleRO: "Plasarea Derivațiilor ECG" }
        ]
      },
      {
        id: "part4_m4",
        titleES: "Módulo 4: Cuidados Hematológicos",
        titleRO: "Modulul 4: Îngrijiri Hematologice",
        topics: [
          { id: "part8_manual_m2_t4", titleES: "Hematología: Anemias y Leucemias", titleRO: "Hematologie: Anemii și Leucemii" }
        ]
      },
      {
        id: "part4_m5",
        titleES: "Módulo 5: Cuidados Dermatológicos y Quemaduras",
        titleRO: "Modulul 5: Îngrijiri Dermatologice și Arsuri",
        topics: [
          { id: "part8_manual_m3_t1", titleES: "Dermatología y Quemaduras", titleRO: "Dermatologie și Arsuri" }
        ]
      },
      {
        id: "part4_m6",
        titleES: "Módulo 6: Cuidados Digestivos",
        titleRO: "Modulul 6: Îngrijiri Digestive",
        topics: [
          { id: "part8_manual_m3_t2", titleES: "Digestivo: Patología Gástrica e Intestinal", titleRO: "Digestiv: Patologie Gastrică și Intestinală" }
        ]
      },
      {
        id: "part4_m7",
        titleES: "Módulo 7: Cuidados Endocrinos",
        titleRO: "Modulul 7: Îngrijiri Endocrine",
        topics: [
          { id: "part8_manual_m3_t4", titleES: "Endocrino: Diabetes y Tiroides", titleRO: "Endocrin: Diabet și Tiroidă" },
          { id: "ifkb_m8_t1", titleES: "Criterios de Prediabetes (ADA)", titleRO: "Criterii de Prediabet (ADA)" },
          { id: "ifkb_m4_t4", titleES: "Pie Diabético y Escala de Wagner", titleRO: "Picior Diabetic și Scala Wagner" }
        ]
      },
      {
        id: "part4_m8",
        titleES: "Módulo 8: Cuidados Neurológicos",
        titleRO: "Modulul 8: Îngrijiri Neurologice",
        topics: [
          { id: "part8_manual_m3_t5", titleES: "Neurología: Ictus y Convulsiones", titleRO: "Neurologie: Accident Vascular și Convulsii" }
        ]
      }
    ]
  },

  // ============================================================================
  // PARTE V: Enfermería Materno-Infantil
  // ============================================================================
  {
    id: "part_5",
    titleES: "PARTE V: Enfermería Materno-Infantil",
    titleRO: "PARTEA V: Asistență Materno-Infantilă",
    modules: [
      {
        id: "part5_m1",
        titleES: "Módulo 1: Cuidados en Ginecología",
        titleRO: "Modulul 1: Îngrijiri în Ginecologie",
        topics: [
          { id: "part8_manual_m4_t1", titleES: "Ginecología", titleRO: "Ginecologie" }
        ]
      },
      {
        id: "part5_m2",
        titleES: "Módulo 2: Cuidados en Pediatría",
        titleRO: "Modulul 2: Îngrijiri în Pediatrie",
        topics: [
          { id: "part8_manual_m4_t2", titleES: "Pediatría", titleRO: "Pediatrie" }
        ]
      },
      {
        id: "part5_m3",
        titleES: "Módulo 3: Cuidados en Obstetricia",
        titleRO: "Modulul 3: Îngrijiri în Obstetrică",
        topics: [
          { id: "part8_manual_m4_t3", titleES: "Obstetricia", titleRO: "Obstetrică" }
        ]
      }
    ]
  },

  // ============================================================================
  // PARTE VI: Enfermería Geriátrica y Salud Mental
  // ============================================================================
  {
    id: "part_6",
    titleES: "PARTE VI: Enfermería Geriátrica y Salud Mental",
    titleRO: "PARTEA VI: Asistență Geriatrică și Sănătate Mintală",
    modules: [
      {
        id: "part6_m1",
        titleES: "Módulo 1: Fundamentos de Enfermería Geriátrica",
        titleRO: "Modulul 1: Fundamente de Asistență Geriatrică",
        topics: [
          { id: "part8_manual_m5_t1", titleES: "Generalidades y Cambios Fisiológicos", titleRO: "Generalități și Schimbări Fiziologice" },
          { id: "ifkb_m1_t1", titleES: "Fundamentos de Gerontología", titleRO: "Fundamente de Gerontologie" },
          { id: "ifkb_m1_t2", titleES: "Demografía del Envejecimiento", titleRO: "Demografia Îmbătrânirii" },
          { id: "ifkb_m1_t3", titleES: "Mitos y Realidades del Envejecimiento", titleRO: "Mituri și Realități ale Îmbătrânirii" }
        ]
      },
      {
        id: "part6_m2",
        titleES: "Módulo 2: Envejecimiento Saludable",
        titleRO: "Modulul 2: Îmbătrânire Sănătoasă",
        topics: [
          { id: "ifkb_m1_t4", titleES: "Envejecimiento Saludable", titleRO: "Îmbătrânire Sănătoasă" },
          { id: "ifkb_m1_t9", titleES: "Prevención y Promoción de la Salud", titleRO: "Prevenție și Promovarea Sănătății" },
          { id: "ifkb_m1_t10", titleES: "Ámbitos de Cuidados de Largo Plazo", titleRO: "Medii de Îngrijire pe Termen Lung" }
        ]
      },
      {
        id: "part6_m3",
        titleES: "Módulo 3: Aspectos Psicosociales del Envejecimiento",
        titleRO: "Modulul 3: Aspecte Psihosociale ale Îmbătrânirii",
        topics: [
          { id: "ifkb_m1_t5", titleES: "Función Cognitiva y Demencia", titleRO: "Funcția Cognitivă și Demența" },
          { id: "ifkb_m1_t6", titleES: "Sexualidad e Intimidad en la Vejez", titleRO: "Sexualitate și Intimitate la Bătrânețe" },
          { id: "ifkb_m1_t7", titleES: "Espiritualidad en el Envejecimiento", titleRO: "Spiritualitate în Îmbătrânire" },
          { id: "ifkb_m1_t8", titleES: "Ética en Enfermería Gerontológica", titleRO: "Etică în Asistența Gerontologică" }
        ]
      },
      {
        id: "part6_m4",
        titleES: "Módulo 4: Cuidados en Salud Mental",
        titleRO: "Modulul 4: Îngrijiri în Sănătate Mintală",
        topics: [
          { id: "part8_manual_m3_t3", titleES: "Salud Mental y Trastornos", titleRO: "Sănătate Mintală și Tulburări" },
          { id: "part8_manual_m5_t2", titleES: "Neurología y Salud Mental en el Anciano", titleRO: "Neurologie și Sănătate Mintală la Vârstnici" }
        ]
      },
      {
        id: "part6_m5",
        titleES: "Módulo 5: Trastornos Psiquiátricos Mayores",
        titleRO: "Modulul 5: Tulburări Psihiatrice Majore",
        topics: [
          { id: "ifkb_m2_t1", titleES: "Esquizofrenia: Evaluación y Cuidados", titleRO: "Schizofrenie: Evaluare și Îngrijiri" },
          { id: "ifkb_m2_t2", titleES: "Trastornos del Estado de Ánimo", titleRO: "Tulburări de Dispoziție" },
          { id: "ifkb_m2_t3", titleES: "Trastornos de Ansiedad", titleRO: "Tulburări de Anxietate" }
        ]
      },
      {
        id: "part6_m6",
        titleES: "Módulo 6: Adicciones y Trastornos de Conducta",
        titleRO: "Modulul 6: Adicții și Tulburări de Comportament",
        topics: [
          { id: "ifkb_m2_t4", titleES: "Abuso y Dependencia de Sustancias", titleRO: "Abuz și Dependență de Substanțe" },
          { id: "ifkb_m2_t5", titleES: "Trastornos de la Personalidad", titleRO: "Tulburări de Personalitate" },
          { id: "ifkb_m2_t6", titleES: "Trastornos de la Conducta Alimentaria", titleRO: "Tulburări ale Comportamentului Alimentar" }
        ]
      },
      {
        id: "part6_m7",
        titleES: "Módulo 7: Violencia y Comunicación Terapéutica",
        titleRO: "Modulul 7: Violență și Comunicare Terapeutică",
        topics: [
          { id: "ifkb_m2_t7", titleES: "Violencia y Maltrato", titleRO: "Violență și Abuz" },
          { id: "ifkb_m2_t8", titleES: "Comunicación Terapéutica", titleRO: "Comunicare Terapeutică" }
        ]
      }
    ]
  },

  // ============================================================================
  // PARTE VII: Farmacología Aplicada a la Enfermería
  // ============================================================================
  {
    id: "part_7",
    titleES: "PARTE VII: Farmacología Aplicada a la Enfermería",
    titleRO: "PARTEA VII: Farmacologie Aplicată în Asistență",
    modules: [
      {
        id: "part7_m1",
        titleES: "Módulo 1: Fundamentos de Farmacología",
        titleRO: "Modulul 1: Fundamente de Farmacologie",
        topics: [
          { id: "part8_manual_m6_t1", titleES: "Principios y Vías de Administración", titleRO: "Principii și Căi de Administrare" }
        ]
      },
      {
        id: "part7_m2",
        titleES: "Módulo 2: Cálculo de Dosis de Medicamentos",
        titleRO: "Modulul 2: Calculul Dozelor de Medicamente",
        topics: [
          { id: "ifkb_m3_t1", titleES: "Fundamentos de Cálculo de Dosis", titleRO: "Fundamente de Calcul al Dozelor" },
          { id: "ifkb_m3_t2", titleES: "Sistema Métrico y Conversiones", titleRO: "Sistemul Metric și Conversii" },
          { id: "ifkb_m3_t7", titleES: "Cálculos Especiales", titleRO: "Calcule Speciale" }
        ]
      },
      {
        id: "part7_m3",
        titleES: "Módulo 3: Prescripción y Etiquetado",
        titleRO: "Modulul 3: Prescripție și Etichetare",
        topics: [
          { id: "ifkb_m3_t3", titleES: "Prescripción y Órdenes de Medicamentos", titleRO: "Prescripție și Ordine de Medicamente" },
          { id: "ifkb_m3_t4", titleES: "Etiquetas de Medicamentos Orales", titleRO: "Etichete de Medicamente Orale" }
        ]
      },
      {
        id: "part7_m4",
        titleES: "Módulo 4: Administración de Medicamentos",
        titleRO: "Modulul 4: Administrarea Medicamentelor",
        topics: [
          { id: "ifkb_m3_t5", titleES: "Administración Parenteral", titleRO: "Administrare Parenterală" },
          { id: "ifkb_m3_t6", titleES: "Medicamentos Tópicos y Rectales", titleRO: "Medicamente Topice și Rectale" }
        ]
      },
      {
        id: "part7_m5",
        titleES: "Módulo 5: Farmacología en Poblaciones Especiales",
        titleRO: "Modulul 5: Farmacologie în Populații Speciale",
        topics: [
          { id: "ifkb_m3_t8", titleES: "Farmacología en Pacientes Mayores", titleRO: "Farmacologie la Pacienții Vârstnici" }
        ]
      }
    ]
  }
];
`;

// Write new syllabus
fs.writeFileSync(SYLLABUS_FILE, newSyllabus, 'utf-8');

console.log('\n' + '='.repeat(70));
console.log('✅ SYLLABUS REORGANIZADO EXITOSAMENTE');
console.log('='.repeat(70));
console.log('📊 Nueva Estructura:');
console.log('   - PARTE I: Fundamentos y Seguridad (9 módulos)');
console.log('   - PARTE II: Especialización y Técnica Avanzada (10 módulos)');
console.log('   - PARTE III: Simulación, Casos y Errores (8 módulos)');
console.log('   - PARTE IV: Enfermería Médico-Quirúrgica (8 módulos) ✨ NUEVA');
console.log('   - PARTE V: Enfermería Materno-Infantil (3 módulos) ✨ NUEVA');
console.log('   - PARTE VI: Enfermería Geriátrica y Salud Mental (7 módulos) ✨ NUEVA');
console.log('   - PARTE VII: Farmacología Aplicada (5 módulos) ✨ NUEVA');
console.log('='.repeat(70));
console.log('\n📁 Archivos:');
console.log('   - Original guardado en: syllabus.backup.js');
console.log('   - Nuevo syllabus: syllabus.js');
console.log('='.repeat(70));
console.log('\n⚠️  CONTENIDO IFKB NO INCLUIDO EN EL CURSO:');
console.log('   - Procedimientos (ifkb_m4): Mover a "Carrito de Curas" o "Técnicas"');
console.log('   - Laboratorio (ifkb_m5): Mover a sección "Técnicas"');
console.log('   - Emergencias (ifkb_m7): Mover a sección "Urgencias"');
console.log('   - Medicina Interna (ifkb_m9): Mover a sección "Patologías"');
console.log('   - Anatomía (ifkb_m10): Mover a sección "Patologías"');
console.log('='.repeat(70) + '\n');
