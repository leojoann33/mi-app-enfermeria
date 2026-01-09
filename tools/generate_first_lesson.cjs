const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Script para generar la primera lección completa del IFKB
 * Chunk: Fundamentos de Cálculo de Dosis (Farmacología)
 */

class IFKBTransformer {
  constructor() {
    this.ifkbBasePath = path.join(__dirname, '../recursos/materia_prima');
    this.lessonsBasePath = path.join(__dirname, '../src/data/course');
  }

  readChunk(chunkPath) {
    const fullPath = path.join(this.ifkbBasePath, chunkPath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const parsed = matter(fileContent);
    
    return {
      metadata: parsed.data,
      content: parsed.content
    };
  }

  parseMarkdownToLesson(markdownContent) {
    const lines = markdownContent.split('\n');
    const contentBlocks = [];
    let currentParagraph = null;
    let currentList = null;
    let inTable = false;
    let tableHeaders = null;
    let tableRows = [];
    let inCodeBlock = false;
    let codeContent = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Code blocks
      if (trimmed.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeContent = [];
        } else {
          contentBlocks.push({
            type: 'code',
            textES: codeContent.join('\n'),
            textRO: codeContent.join('\n')
          });
          inCodeBlock = false;
          codeContent = [];
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // Headings
      if (trimmed.startsWith('#')) {
        this.flushCurrentBlocks(contentBlocks, currentParagraph, currentList, tableHeaders, tableRows);
        currentParagraph = null;
        currentList = null;
        tableHeaders = null;
        tableRows = [];

        const level = line.match(/^#+/)[0].length;
        const text = trimmed.replace(/^#+\s*/, '');

        contentBlocks.push({
          type: 'heading',
          level: level,
          textES: text,
          textRO: text // TODO: Traducir
        });
        continue;
      }

      // Horizontal rules
      if (trimmed === '---') {
        this.flushCurrentBlocks(contentBlocks, currentParagraph, currentList, tableHeaders, tableRows);
        currentParagraph = null;
        currentList = null;
        tableHeaders = null;
        tableRows = [];
        contentBlocks.push({ type: 'separator' });
        continue;
      }

      // Tables
      if (trimmed.includes('|') && !trimmed.startsWith('>')) {
        if (!inTable) {
          this.flushCurrentBlocks(contentBlocks, currentParagraph, currentList, null, []);
          currentParagraph = null;
          currentList = null;
          inTable = true;
          tableHeaders = trimmed.split('|').map(h => h.trim()).filter(h => h.length > 0);
        } else if (trimmed.includes(':-') || trimmed.includes('-:')) {
          // Alignment row, skip
        } else {
          const row = trimmed.split('|').map(c => c.trim()).filter(c => c.length > 0);
          if (row.length > 0) {
            tableRows.push(row);
          }
        }
        continue;
      } else if (inTable) {
        // End of table
        if (tableHeaders && tableRows.length > 0) {
          contentBlocks.push({
            type: 'table',
            headers: tableHeaders,
            rows: tableRows
          });
        }
        inTable = false;
        tableHeaders = null;
        tableRows = [];
      }

      // Blockquotes
      if (trimmed.startsWith('>')) {
        this.flushCurrentBlocks(contentBlocks, currentParagraph, currentList, tableHeaders, tableRows);
        currentParagraph = null;
        currentList = null;
        tableHeaders = null;
        tableRows = [];
        
        const text = trimmed.replace(/^>\s*/, '');
        contentBlocks.push({
          type: 'alert',
          alertType: 'info',
          textES: text,
          textRO: text
        });
        continue;
      }

      // Lists
      if (trimmed.match(/^[-*]\s+/) || trimmed.match(/^\d+\.\s+/)) {
        if (currentParagraph) {
          contentBlocks.push(currentParagraph);
          currentParagraph = null;
        }

        const isOrdered = /^\d+\.\s+/.test(trimmed);
        const text = trimmed.replace(/^[-*\d.]\s+/, '');

        if (!currentList || currentList.listType !== (isOrdered ? 'ordered' : 'unordered')) {
          if (currentList) {
            contentBlocks.push(currentList);
          }
          currentList = {
            type: 'list',
            listType: isOrdered ? 'ordered' : 'unordered',
            items: []
          };
        }

        currentList.items.push({
          textES: text,
          textRO: text
        });
        continue;
      }

      // Empty lines
      if (trimmed === '') {
        this.flushCurrentBlocks(contentBlocks, currentParagraph, currentList, tableHeaders, tableRows);
        currentParagraph = null;
        currentList = null;
        tableHeaders = null;
        tableRows = [];
        continue;
      }

      // Regular paragraphs
      if (currentList) {
        contentBlocks.push(currentList);
        currentList = null;
      }

      if (!currentParagraph) {
        currentParagraph = {
          type: 'paragraph',
          textES: trimmed,
          textRO: trimmed
        };
      } else {
        currentParagraph.textES += ' ' + trimmed;
        currentParagraph.textRO += ' ' + trimmed;
      }
    }

    // Flush remaining blocks
    this.flushCurrentBlocks(contentBlocks, currentParagraph, currentList, tableHeaders, tableRows);

    return contentBlocks;
  }

  flushCurrentBlocks(contentBlocks, paragraph, list, tableHeaders, tableRows) {
    if (paragraph) {
      contentBlocks.push(paragraph);
    }
    if (list) {
      contentBlocks.push(list);
    }
    if (tableHeaders && tableRows.length > 0) {
      contentBlocks.push({
        type: 'table',
        headers: tableHeaders,
        rows: tableRows
      });
    }
  }

  transformChunk(chunkPath, lessonId, titleES, titleRO) {
    const chunk = this.readChunk(chunkPath);
    const content = this.parseMarkdownToLesson(chunk.content);

    return {
      id: lessonId,
      titleES: titleES,
      titleRO: titleRO,
      source: chunk.metadata.source || 'IFKB',
      originalChunkId: chunk.metadata.id,
      category: chunk.metadata.category,
      tags: chunk.metadata.tags || [],
      content: content
    };
  }

  generateLessonFile(lesson, filename) {
    const lessonCode = `/**
 * Lección IFKB - Generada automáticamente
 * 
 * Chunk Original: ${lesson.originalChunkId}
 * Fuente: ${lesson.source}
 * Categoría: ${lesson.category}
 * 
 * ⚠️  ADVERTENCIA: NO modificar valores numéricos, dosis o información médica
 * sin verificar con la fuente original del IFKB.
 */

export const ${filename.replace('.js', '')} = ${JSON.stringify(lesson, null, 2)};
`;

    const outputPath = path.join(this.lessonsBasePath, filename);
    fs.writeFileSync(outputPath, lessonCode, 'utf-8');
    console.log(`✅ Lección generada: ${filename}`);
    console.log(`   Ruta: ${outputPath}`);
    
    return outputPath;
  }
}

// Ejecutar generación
const transformer = new IFKBTransformer();

console.log('🚀 Generando Primera Lección IFKB');
console.log('📚 Chunk: Fundamentos de Cálculo de Dosis (Farmacología)');
console.log('');

try {
  const lesson = transformer.transformChunk(
    'farmacologia/calculo_dosis_fundamentos.md',
    'ifkb_m3_t1',
    'Fundamentos de Cálculo de Dosis',
    'Fundamente de Calcul al Dozelor'
  );
  
  console.log('✅ Transformación completada');
  console.log(`   - ID: ${lesson.id}`);
  console.log(`   - Título: ${lesson.titleES}`);
  console.log(`   - Bloques: ${lesson.content.length}`);
  console.log(`   - Fuente: ${lesson.source}`);
  console.log('');
  
  const filepath = transformer.generateLessonFile(lesson, 'ifkb_m3_t1.js');
  
  console.log('');
  console.log('✅ Lección lista para integración');
  console.log('');
  console.log('📋 Próximos pasos:');
  console.log('   1. Exportar en src/data/index.js');
  console.log('   2. Probar navegación en la app');
  console.log('   3. Validar visualización');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
