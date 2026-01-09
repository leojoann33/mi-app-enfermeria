#!/usr/bin/env node

/**
 * IFKB Salud Mental Batch Transformation Script
 * Transforms Salud Mental IFKB chunks into structured lesson files
 * 
 * Usage: node tools/batch_transform_salud_mental.cjs
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Import the transformation classes from the main script
const { LessonGenerator } = require('./batch_transform_ifkb.cjs');

// ============================================================================
// CONFIGURATION - SALUD MENTAL LESSONS
// ============================================================================

const SALUD_MENTAL_LESSONS = [
  {
    chunkPath: 'recursos/materia_prima/salud_mental/violencia_maltrato.md',
    lessonId: 'ifkb_m2_t7',
    titleES: 'Violencia y Maltrato',
    titleRO: 'Violență și Abuz',
    outputFile: 'src/data/course/ifkb_m2_t7.js'
  },
  {
    chunkPath: 'recursos/materia_prima/salud_mental/comunicacion_terapeutica.md',
    lessonId: 'ifkb_m2_t8',
    titleES: 'Comunicación Terapéutica',
    titleRO: 'Comunicare Terapeutică',
    outputFile: 'src/data/course/ifkb_m2_t8.js'
  }
];

// ============================================================================
// BATCH PROCESSOR
// ============================================================================

class SaludMentalProcessor {
  constructor(config) {
    this.config = config;
    this.generator = new LessonGenerator();
    this.results = {
      success: [],
      failed: []
    };
  }

  async processAll() {
    console.log(`\n🧠 Starting Salud Mental transformation of ${this.config.length} lessons...\n`);

    for (const lessonConfig of this.config) {
      try {
        console.log(`📝 Processing: ${lessonConfig.titleES}`);
        
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

        this.results.success.push({
          lessonId: lessonConfig.lessonId,
          title: lessonConfig.titleES,
          outputPath: outputPath,
          blocks: lesson.content.length
        });

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
    console.log('\n' + '='.repeat(60));
    console.log('📊 SALUD MENTAL TRANSFORMATION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successful: ${this.results.success.length}`);
    console.log(`❌ Failed: ${this.results.failed.length}`);
    console.log('='.repeat(60));

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

    console.log('\n' + '='.repeat(60));
    console.log('🎯 Next Steps:');
    console.log('   1. Review generated lesson files');
    console.log('   2. Update src/data/index.js with new imports/exports');
    console.log('   3. Test lessons in browser');
    console.log('='.repeat(60) + '\n');
  }
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

if (require.main === module) {
  const processor = new SaludMentalProcessor(SALUD_MENTAL_LESSONS);
  processor.processAll().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { SaludMentalProcessor };
