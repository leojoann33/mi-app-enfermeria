#!/usr/bin/env node

/**
 * IFKB Batch Transformation Script
 * Transforms multiple IFKB chunks into structured lesson files
 * 
 * Usage: node tools/batch_transform_ifkb.cjs
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ============================================================================
// CONFIGURATION
// ============================================================================

const LESSONS_CONFIG = [
  // MÓDULO 3: FARMACOLOGÍA (6 lecciones restantes)
  {
    chunkPath: 'recursos/materia_prima/farmacologia/sistema_metrico_conversiones.md',
    lessonId: 'ifkb_m3_t2',
    titleES: 'Sistema Métrico y Conversiones',
    titleRO: 'Sistemul Metric și Conversii',
    outputFile: 'src/data/course/ifkb_m3_t2.js'
  },
  {
    chunkPath: 'recursos/materia_prima/farmacologia/prescripcion_ordenes_medicamentos.md',
    lessonId: 'ifkb_m3_t3',
    titleES: 'Prescripción y Órdenes de Medicamentos',
    titleRO: 'Prescripție și Ordine de Medicamente',
    outputFile: 'src/data/course/ifkb_m3_t3.js'
  },
  {
    chunkPath: 'recursos/materia_prima/farmacologia/etiquetas_medicamentos_orales.md',
    lessonId: 'ifkb_m3_t4',
    titleES: 'Etiquetas de Medicamentos Orales',
    titleRO: 'Etichete de Medicamente Orale',
    outputFile: 'src/data/course/ifkb_m3_t4.js'
  },
  {
    chunkPath: 'recursos/materia_prima/farmacologia/administracion_parenteral.md',
    lessonId: 'ifkb_m3_t5',
    titleES: 'Administración Parenteral',
    titleRO: 'Administrare Parenterală',
    outputFile: 'src/data/course/ifkb_m3_t5.js'
  },
  {
    chunkPath: 'recursos/materia_prima/farmacologia/medicamentos_topicos_rectales.md',
    lessonId: 'ifkb_m3_t6',
    titleES: 'Medicamentos Tópicos y Rectales',
    titleRO: 'Medicamente Topice și Rectale',
    outputFile: 'src/data/course/ifkb_m3_t6.js'
  },
  {
    chunkPath: 'recursos/materia_prima/farmacologia/calculos_especiales.md',
    lessonId: 'ifkb_m3_t7',
    titleES: 'Cálculos Especiales',
    titleRO: 'Calcule Speciale',
    outputFile: 'src/data/course/ifkb_m3_t7.js'
  }
];

// ============================================================================
// MARKDOWN PARSER
// ============================================================================

class MarkdownParser {
  parseMarkdownToBlocks(markdown) {
    const lines = markdown.split('\n');
    const blocks = [];
    let currentBlock = null;
    let listItems = [];
    let tableRows = [];
    let tableHeaders = null;
    let codeLines = [];
    let inCodeBlock = false;

    const flushList = () => {
      if (listItems.length > 0) {
        blocks.push({
          type: 'list',
          items: listItems.map(item => ({
            textES: item,
            textRO: '// TODO: Traducir'
          }))
        });
        listItems = [];
      }
    };

    const flushTable = () => {
      if (tableHeaders && tableRows.length > 0) {
        blocks.push({
          type: 'table',
          headersES: tableHeaders,
          headersRO: tableHeaders.map(() => '// TODO: Traducir'),
          rows: tableRows.map(row => ({
            colsES: row,
            colsRO: row.map(() => '// TODO: Traducir')
          }))
        });
        tableHeaders = null;
        tableRows = [];
      }
    };

    const flushCode = () => {
      if (codeLines.length > 0) {
        blocks.push({
          type: 'code',
          textES: codeLines.join('\n'),
          textRO: codeLines.join('\n') // Code blocks don't need translation
        });
        codeLines = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Code blocks
      if (trimmed.startsWith('```')) {
        if (inCodeBlock) {
          flushCode();
          inCodeBlock = false;
        } else {
          flushList();
          flushTable();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // Headings
      if (trimmed.startsWith('#')) {
        flushList();
        flushTable();
        const level = trimmed.match(/^#+/)[0].length;
        const text = trimmed.replace(/^#+\s*/, '');
        blocks.push({
          type: 'heading',
          level: level,
          textES: text,
          textRO: '// TODO: Traducir'
        });
        continue;
      }

      // Horizontal rules
      if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
        flushList();
        flushTable();
        blocks.push({ type: 'separator' });
        continue;
      }

      // Tables
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList();
        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
        
        // Skip separator rows
        if (cells.every(c => /^[-:]+$/.test(c))) {
          continue;
        }

        if (!tableHeaders) {
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
        continue;
      } else {
        flushTable();
      }

      // Lists
      if (trimmed.match(/^[-*+]\s+/) || trimmed.match(/^\d+\.\s+/)) {
        const text = trimmed.replace(/^[-*+]\s+/, '').replace(/^\d+\.\s+/, '');
        listItems.push(text);
        continue;
      } else {
        flushList();
      }

      // Alerts (blockquotes with special markers)
      if (trimmed.startsWith('>')) {
        flushList();
        const alertText = trimmed.replace(/^>\s*/, '');
        let variant = 'info';
        
        if (alertText.includes('⚠️') || alertText.toLowerCase().includes('advertencia') || alertText.toLowerCase().includes('warning')) {
          variant = 'warning';
        } else if (alertText.includes('❌') || alertText.toLowerCase().includes('peligro') || alertText.toLowerCase().includes('danger')) {
          variant = 'danger';
        }

        blocks.push({
          type: 'alert',
          variant: variant,
          textES: alertText.replace(/^[⚠️❌ℹ️]+\s*/, ''),
          textRO: '// TODO: Traducir'
        });
        continue;
      }

      // Paragraphs
      if (trimmed.length > 0) {
        blocks.push({
          type: 'paragraph',
          textES: trimmed,
          textRO: '// TODO: Traducir'
        });
      }
    }

    // Flush any remaining content
    flushList();
    flushTable();
    flushCode();

    return blocks;
  }
}

// ============================================================================
// LESSON GENERATOR
// ============================================================================

class LessonGenerator {
  constructor() {
    this.parser = new MarkdownParser();
  }

  readChunk(chunkPath) {
    const fullPath = path.join(process.cwd(), chunkPath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const { data: metadata, content } = matter(fileContent);
    return { metadata, content };
  }

  transformChunk(chunkPath, lessonId, titleES, titleRO) {
    const chunk = this.readChunk(chunkPath);
    const content = this.parser.parseMarkdownToBlocks(chunk.content);

    const lesson = {
      id: lessonId,
      titleES: titleES,
      titleRO: titleRO,
      source: chunk.metadata.source || 'IFKB',
      originalChunkId: chunk.metadata.id,
      category: chunk.metadata.category,
      tags: chunk.metadata.tags || [],
      content: content
    };

    return lesson;
  }

  generateLessonFile(lesson, outputPath) {
    const fullPath = path.join(process.cwd(), outputPath);
    
    const fileContent = `/**
 * IFKB Lesson: ${lesson.titleES}
 * 
 * ⚠️ CRITICAL WARNING - DO NOT MODIFY MEDICAL INFORMATION
 * This content has been extracted from verified medical sources.
 * Any modifications to medical facts, dosages, procedures, or clinical
 * information could result in patient harm or death.
 * 
 * Source: ${lesson.source}
 * Original Chunk ID: ${lesson.originalChunkId}
 * Category: ${lesson.category}
 * Generated: ${new Date().toISOString()}
 */

export const ${lesson.id} = ${JSON.stringify(lesson, null, 2)};
`;

    fs.writeFileSync(fullPath, fileContent, 'utf-8');
    console.log(`✅ Generated: ${outputPath}`);
    return fullPath;
  }
}

// ============================================================================
// BATCH PROCESSOR
// ============================================================================

class BatchProcessor {
  constructor(config) {
    this.config = config;
    this.generator = new LessonGenerator();
    this.results = {
      success: [],
      failed: []
    };
  }

  async processAll() {
    console.log(`\n🚀 Starting batch transformation of ${this.config.length} lessons...\n`);

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
    console.log('📊 BATCH TRANSFORMATION SUMMARY');
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
  const processor = new BatchProcessor(LESSONS_CONFIG);
  processor.processAll().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { BatchProcessor, LessonGenerator, MarkdownParser };
