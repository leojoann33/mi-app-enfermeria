#!/usr/bin/env node

/**
 * IFKB Complete Mass Transformation Script
 * Transforms ALL remaining IFKB chunks into structured lesson files
 * 
 * Usage: node tools/batch_transform_all_ifkb.cjs
 */

const fs = require('fs');
const path = require('path');
const { LessonGenerator } = require('./batch_transform_ifkb.cjs');

// ============================================================================
// COMPLETE CONFIGURATION - ALL REMAINING LESSONS
// ============================================================================

const ALL_LESSONS_CONFIG = [
  // MÓDULO 1: GERIATRÍA (10 lecciones)
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/gerontologia_fundamentos.md',
    lessonId: 'ifkb_m1_t1',
    titleES: 'Fundamentos de Gerontología',
    titleRO: 'Fundamente de Gerontologie',
    outputFile: 'src/data/course/ifkb_m1_t1.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/demografia_envejecimiento.md',
    lessonId: 'ifkb_m1_t2',
    titleES: 'Demografía del Envejecimiento',
    titleRO: 'Demografia Îmbătrânirii',
    outputFile: 'src/data/course/ifkb_m1_t2.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/mitos_realidades_envejecimiento.md',
    lessonId: 'ifkb_m1_t3',
    titleES: 'Mitos y Realidades del Envejecimiento',
    titleRO: 'Mituri și Realități ale Îmbătrânirii',
    outputFile: 'src/data/course/ifkb_m1_t3.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/envejecimiento_saludable.md',
    lessonId: 'ifkb_m1_t4',
    titleES: 'Envejecimiento Saludable',
    titleRO: 'Îmbătrânire Sănătoasă',
    outputFile: 'src/data/course/ifkb_m1_t4.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/funcion_cognitiva_demencia.md',
    lessonId: 'ifkb_m1_t5',
    titleES: 'Función Cognitiva y Demencia',
    titleRO: 'Funcția Cognitivă și Demența',
    outputFile: 'src/data/course/ifkb_m1_t5.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/sexualidad_intimidad_vejez.md',
    lessonId: 'ifkb_m1_t6',
    titleES: 'Sexualidad e Intimidad en la Vejez',
    titleRO: 'Sexualitate și Intimitate la Bătrânețe',
    outputFile: 'src/data/course/ifkb_m1_t6.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/espiritualidad_envejecimiento.md',
    lessonId: 'ifkb_m1_t7',
    titleES: 'Espiritualidad en el Envejecimiento',
    titleRO: 'Spiritualitate în Îmbătrânire',
    outputFile: 'src/data/course/ifkb_m1_t7.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/etica_enfermeria_gerontologica.md',
    lessonId: 'ifkb_m1_t8',
    titleES: 'Ética en Enfermería Gerontológica',
    titleRO: 'Etică în Asistența Gerontologică',
    outputFile: 'src/data/course/ifkb_m1_t8.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/prevencion_salud_gerontologica.md',
    lessonId: 'ifkb_m1_t9',
    titleES: 'Prevención y Promoción de la Salud',
    titleRO: 'Prevenție și Promovarea Sănătății',
    outputFile: 'src/data/course/ifkb_m1_t9.js'
  },
  {
    chunkPath: 'recursos/materia_prima/geriatria_salud_mental/ambitos_cuidados_largo_plazo.md',
    lessonId: 'ifkb_m1_t10',
    titleES: 'Ámbitos de Cuidados de Largo Plazo',
    titleRO: 'Medii de Îngrijire pe Termen Lung',
    outputFile: 'src/data/course/ifkb_m1_t10.js'
  },

  // MÓDULO 2: SALUD MENTAL (6 lecciones restantes)
  {
    chunkPath: 'recursos/materia_prima/salud_mental/esquizofrenia_cuidados.md',
    lessonId: 'ifkb_m2_t1',
    titleES: 'Esquizofrenia: Evaluación y Cuidados',
    titleRO: 'Schizofrenie: Evaluare și Îngrijiri',
    outputFile: 'src/data/course/ifkb_m2_t1.js'
  },
  {
    chunkPath: 'recursos/materia_prima/salud_mental/trastornos_estado_animo.md',
    lessonId: 'ifkb_m2_t2',
    titleES: 'Trastornos del Estado de Ánimo',
    titleRO: 'Tulburări de Dispoziție',
    outputFile: 'src/data/course/ifkb_m2_t2.js'
  },
  {
    chunkPath: 'recursos/materia_prima/salud_mental/trastornos_ansiedad.md',
    lessonId: 'ifkb_m2_t3',
    titleES: 'Trastornos de Ansiedad',
    titleRO: 'Tulburări de Anxietate',
    outputFile: 'src/data/course/ifkb_m2_t3.js'
  },
  {
    chunkPath: 'recursos/materia_prima/salud_mental/abuso_dependencia_sustancias.md',
    lessonId: 'ifkb_m2_t4',
    titleES: 'Abuso y Dependencia de Sustancias',
    titleRO: 'Abuz și Dependență de Substanțe',
    outputFile: 'src/data/course/ifkb_m2_t4.js'
  },
  {
    chunkPath: 'recursos/materia_prima/salud_mental/trastornos_personalidad.md',
    lessonId: 'ifkb_m2_t5',
    titleES: 'Trastornos de la Personalidad',
    titleRO: 'Tulburări de Personalitate',
    outputFile: 'src/data/course/ifkb_m2_t5.js'
  },
  {
    chunkPath: 'recursos/materia_prima/salud_mental/trastornos_conducta_alimentaria.md',
    lessonId: 'ifkb_m2_t6',
    titleES: 'Trastornos de la Conducta Alimentaria',
    titleRO: 'Tulburări ale Comportamentului Alimentar',
    outputFile: 'src/data/course/ifkb_m2_t6.js'
  },

  // MÓDULO 3: FARMACOLOGÍA (1 lección restante)
  {
    chunkPath: 'recursos/materia_prima/farmacologia/farmacologia_pacientes_mayores.md',
    lessonId: 'ifkb_m3_t8',
    titleES: 'Farmacología en Pacientes Mayores',
    titleRO: 'Farmacologie la Pacienții Vârstnici',
    outputFile: 'src/data/course/ifkb_m3_t8.js'
  },

  // MÓDULO 4: PROCEDIMIENTOS DE ENFERMERÍA (9 lecciones)
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/apositos_avanzados.md',
    lessonId: 'ifkb_m4_t1',
    titleES: 'Apósitos Avanzados (Hidrocoloides, Espumas)',
    titleRO: 'Pansamente Avansate (Hidrocoloizi, Spume)',
    outputFile: 'src/data/course/ifkb_m4_t1.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/apositos_especializados.md',
    lessonId: 'ifkb_m4_t2',
    titleES: 'Apósitos Especializados (Silicona, Yodo)',
    titleRO: 'Pansamente Specializate (Silicon, Iod)',
    outputFile: 'src/data/course/ifkb_m4_t2.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/clasificacion_evaluacion_heridas.md',
    lessonId: 'ifkb_m4_t3',
    titleES: 'Clasificación y Evaluación de Heridas',
    titleRO: 'Clasificarea și Evaluarea Plăgilor',
    outputFile: 'src/data/course/ifkb_m4_t3.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/pie_diabetico_wagner.md',
    lessonId: 'ifkb_m4_t4',
    titleES: 'Pie Diabético y Escala de Wagner',
    titleRO: 'Picior Diabetic și Scala Wagner',
    outputFile: 'src/data/course/ifkb_m4_t4.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/ulceras_presion_estadios.md',
    lessonId: 'ifkb_m4_t5',
    titleES: 'Úlceras por Presión (Estadios I-IV)',
    titleRO: 'Escare de Decubit (Stadii I-IV)',
    outputFile: 'src/data/course/ifkb_m4_t5.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/productos_topicos_piel.md',
    lessonId: 'ifkb_m4_t6',
    titleES: 'Productos Tópicos para la Piel',
    titleRO: 'Produse Topice pentru Piele',
    outputFile: 'src/data/course/ifkb_m4_t6.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/cateteres_iv_colores.md',
    lessonId: 'ifkb_m4_t7',
    titleES: 'Catéteres IV: Colores y Calibres',
    titleRO: 'Catetere IV: Culori și Calibre',
    outputFile: 'src/data/course/ifkb_m4_t7.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/venoclisis_equipo_procedimiento.md',
    lessonId: 'ifkb_m4_t8',
    titleES: 'Venoclisis: Equipo y Procedimiento',
    titleRO: 'Venocliză: Echipament și Procedură',
    outputFile: 'src/data/course/ifkb_m4_t8.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/jeringas_clinicas.md',
    lessonId: 'ifkb_m4_t9',
    titleES: 'Jeringas Clínicas',
    titleRO: 'Seringi Clinice',
    outputFile: 'src/data/course/ifkb_m4_t9.js'
  },

  // MÓDULO 5: LABORATORIO CLÍNICO (4 lecciones)
  {
    chunkPath: 'recursos/materia_prima/laboratorio_clinico/tubos_laboratorio_colores.md',
    lessonId: 'ifkb_m5_t1',
    titleES: 'Tubos de Laboratorio: Código de Colores',
    titleRO: 'Tuburi de Laborator: Cod de Culori',
    outputFile: 'src/data/course/ifkb_m5_t1.js'
  },
  {
    chunkPath: 'recursos/materia_prima/laboratorio_clinico/tubos_rojo_morado_detalle.md',
    lessonId: 'ifkb_m5_t2',
    titleES: 'Tubos Rojo y Morado: Detalles',
    titleRO: 'Tuburi Roșii și Mov: Detalii',
    outputFile: 'src/data/course/ifkb_m5_t2.js'
  },
  {
    chunkPath: 'recursos/materia_prima/laboratorio_clinico/tubos_dorado_verde_detalle.md',
    lessonId: 'ifkb_m5_t3',
    titleES: 'Tubos Dorado y Verde: Detalles',
    titleRO: 'Tuburi Aurii și Verzi: Detalii',
    outputFile: 'src/data/course/ifkb_m5_t3.js'
  },
  {
    chunkPath: 'recursos/materia_prima/laboratorio_clinico/uroanalisis_tira_reactiva.md',
    lessonId: 'ifkb_m5_t4',
    titleES: 'Uroanálisis con Tira Reactiva',
    titleRO: 'Uroanaliza cu Bandă Reactivă',
    outputFile: 'src/data/course/ifkb_m5_t4.js'
  },

  // MÓDULO 6: CARDIOLOGÍA (1 lección)
  {
    chunkPath: 'recursos/materia_prima/cardiologia/colocacion_derivaciones_ecg.md',
    lessonId: 'ifkb_m6_t1',
    titleES: 'Colocación de Derivaciones ECG',
    titleRO: 'Plasarea Derivațiilor ECG',
    outputFile: 'src/data/course/ifkb_m6_t1.js'
  },

  // MÓDULO 7: EMERGENCIAS (1 lección)
  {
    chunkPath: 'recursos/materia_prima/emergencias/alergia_vs_anafilaxia.md',
    lessonId: 'ifkb_m7_t1',
    titleES: 'Alergia vs Anafilaxia',
    titleRO: 'Alergie vs Anafilaxie',
    outputFile: 'src/data/course/ifkb_m7_t1.js'
  },

  // MÓDULO 8: ENDOCRINOLOGÍA (1 lección)
  {
    chunkPath: 'recursos/materia_prima/endocrinologia/criterios_prediabetes_ada.md',
    lessonId: 'ifkb_m8_t1',
    titleES: 'Criterios de Prediabetes (ADA)',
    titleRO: 'Criterii de Prediabet (ADA)',
    outputFile: 'src/data/course/ifkb_m8_t1.js'
  },

  // MÓDULO 9: MEDICINA INTERNA (2 lecciones)
  {
    chunkPath: 'recursos/materia_prima/medicina_interna/diccionario_medico_referencia.md',
    lessonId: 'ifkb_m9_t1',
    titleES: 'Valores Normales de Referencia',
    titleRO: 'Valori Normale de Referință',
    outputFile: 'src/data/course/ifkb_m9_t1.js'
  },
  {
    chunkPath: 'recursos/materia_prima/enfermeria_clinica/temperatura_corporal.md',
    lessonId: 'ifkb_m9_t2',
    titleES: 'Temperatura Corporal',
    titleRO: 'Temperatura Corporală',
    outputFile: 'src/data/course/ifkb_m9_t2.js'
  },

  // MÓDULO 10: ANATOMÍA Y FISIOLOGÍA (1 lección)
  {
    chunkPath: 'recursos/materia_prima/anatomia_fisiologia/datos_anatomicos_cuerpo.md',
    lessonId: 'ifkb_m10_t1',
    titleES: 'Datos Anatómicos del Cuerpo Humano',
    titleRO: 'Date Anatomice ale Corpului Uman',
    outputFile: 'src/data/course/ifkb_m10_t1.js'
  }
];

// ============================================================================
// BATCH PROCESSOR
// ============================================================================

class CompleteMassProcessor {
  constructor(config) {
    this.config = config;
    this.generator = new LessonGenerator();
    this.results = {
      success: [],
      failed: [],
      byModule: {}
    };
  }

  async processAll() {
    console.log(`\n🚀 Starting COMPLETE MASS transformation of ${this.config.length} lessons...\n`);
    console.log('='.repeat(70));

    for (const lessonConfig of this.config) {
      try {
        const moduleId = lessonConfig.lessonId.match(/ifkb_m(\d+)_/)[1];
        const moduleName = `Módulo ${moduleId}`;

        console.log(`📝 [${moduleName}] Processing: ${lessonConfig.titleES}`);
        
        // Check if chunk exists
        const chunkPath = path.join(process.cwd(), lessonConfig.chunkPath);
        if (!fs.existsSync(chunkPath)) {
          throw new Error(`Chunk file not found: ${lessonConfig.chunkPath}`);
        }

        // Transform chunk to lesson
        const lesson = this.generator.transformChunk(
          lessonConfig.chunkPath,
          lessonConfig.lessonId,
          lessonConfig.titleES,
          lessonConfig.titleRO
        );

        // Generate lesson file
        const outputPath = this.generator.generateLessonFile(lesson, lessonConfig.outputFile);

        const result = {
          lessonId: lessonConfig.lessonId,
          title: lessonConfig.titleES,
          outputPath: outputPath,
          blocks: lesson.content.length,
          module: moduleName
        };

        this.results.success.push(result);

        // Track by module
        if (!this.results.byModule[moduleName]) {
          this.results.byModule[moduleName] = { success: 0, blocks: 0 };
        }
        this.results.byModule[moduleName].success++;
        this.results.byModule[moduleName].blocks += lesson.content.length;

      } catch (error) {
        console.error(`❌ Failed: ${lessonConfig.titleES}`);
        console.error(`   Error: ${error.message}`);
        this.results.failed.push({
          lessonId: lessonConfig.lessonId,
          title: lessonConfig.titleES,
          error: error.message
        });
      }
    }

    this.printSummary();
  }

  printSummary() {
    console.log('\n' + '='.repeat(70));
    console.log('📊 COMPLETE MASS TRANSFORMATION SUMMARY');
    console.log('='.repeat(70));
    console.log(`✅ Successful: ${this.results.success.length}`);
    console.log(`❌ Failed: ${this.results.failed.length}`);
    console.log('='.repeat(70));

    if (Object.keys(this.results.byModule).length > 0) {
      console.log('\n📚 Results by Module:');
      Object.entries(this.results.byModule).forEach(([module, stats]) => {
        console.log(`   ${module}: ${stats.success} lessons (${stats.blocks} blocks)`);
      });
    }

    if (this.results.success.length > 0) {
      console.log('\n✅ Successfully Generated Lessons:');
      this.results.success.forEach(result => {
        console.log(`   - ${result.lessonId}: ${result.title} (${result.blocks} blocks)`);
      });
    }

    if (this.results.failed.length > 0) {
      console.log('\n❌ Failed Lessons:');
      this.results.failed.forEach(result => {
        console.log(`   - ${result.lessonId}: ${result.title}`);
        console.log(`     Error: ${result.error}`);
      });
    }

    const totalBlocks = this.results.success.reduce((sum, r) => sum + r.blocks, 0);
    console.log('\n' + '='.repeat(70));
    console.log(`📈 TOTAL CONTENT BLOCKS GENERATED: ${totalBlocks.toLocaleString()}`);
    console.log('='.repeat(70));
    console.log('\n🎯 Next Steps:');
    console.log('   1. Update src/data/index.js with new imports/exports');
    console.log('   2. Update src/views/CourseViewer.jsx with resolution logic');
    console.log('   3. Test lessons in browser');
    console.log('='.repeat(70) + '\n');
  }
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

if (require.main === module) {
  const processor = new CompleteMassProcessor(ALL_LESSONS_CONFIG);
  processor.processAll().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { CompleteMassProcessor, ALL_LESSONS_CONFIG };
