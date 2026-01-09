const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Script de Transformación IFKB → Lecciones
 * 
 * Convierte chunks de Markdown del IFKB en lecciones estructuradas
 * para la aplicación de enfermería.
 * 
 * PRINCIPIOS CRÍTICOS:
 * - NO modificar información médica
 * - Preservar TODOS los valores numéricos exactamente
 * - Copiar textualmente contenido técnico
 * - Mantener trazabilidad completa
 */

class IFKBTransformer {
  constructor() {
    this.ifkbBasePath = path.join(__dirname, '../recursos/materia_prima');
    this.lessonsBasePath = path.join(__dirname, '../src/data/course');
  }

  /**
   * Lee un chunk de Markdown del IFKB
   */
  readChunk(chunkPath) {
    const fullPath = path.join(this.ifkbBasePath, chunkPath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const parsed = matter(fileContent);
    
    return {
      metadata: parsed.data,
      content: parsed.content
    };
  }

  /**
   * Parsea el contenido Markdown a estructura de lección
   */
  parseMarkdownToLesson(markdownContent) {
    const lines = markdownContent.split('\n');
    const contentBlocks = [];
    let currentBlock = null;
    let currentTableHeaders = null;
    let currentTableRows = [];
    let currentListItems = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Headings
      if (line.startsWith('#')) {
        // Guardar bloque anterior si existe
        if (currentBlock) {
          contentBlocks.push(currentBlock);
          currentBlock = null;
        }

        const level = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+\s*/, '').trim();

        contentBlocks.push({
          type: 'heading',
          level: level,
          textES: text,
          textRO: text // TODO: Traducir
        });
      }
      // Separadores horizontales
      else if (line.trim() === '---') {
        if (currentBlock) {
          contentBlocks.push(currentBlock);
          currentBlock = null;
        }
        contentBlocks.push({
          type: 'separator'
        });
      }
      // Tablas (formato Markdown)
      else if (line.includes('|')) {
        if (!currentTableHeaders) {
          // Primera línea de tabla (headers)
          currentTableHeaders = line.split('|')
            .map(h => h.trim())
            .filter(h => h.length > 0);
        } else if (line.includes(':-') || line.includes('-:')) {
          // Línea de alineación, ignorar
          continue;
        } else {
          // Fila de datos
          const row = line.split('|')
            .map(c => c.trim())
            .filter(c => c.length > 0);
          if (row.length > 0) {
            currentTableRows.push(row);
          }
        }
      } else if (currentTableHeaders && !line.includes('|')) {
        // Fin de tabla
        contentBlocks.push({
          type: 'table',
          headers: currentTableHeaders,
          rows: currentTableRows
        });
        currentTableHeaders = null;
        currentTableRows = [];
      }
      // Listas
      else if (line.match(/^[\s]*[-*]\s+/)) {
        const text = line.replace(/^[\s]*[-*]\s+/, '').trim();
        currentListItems.push({
          textES: text,
          textRO: text // TODO: Traducir
        });
      } else if (currentListItems.length > 0 && line.trim() === '') {
        // Fin de lista
        contentBlocks.push({
          type: 'list',
          listType: 'unordered',
          items: currentListItems
        });
        currentListItems = [];
      }
      // Párrafos
      else if (line.trim().length > 0) {
        if (!currentBlock || currentBlock.type !== 'paragraph') {
          if (currentBlock) {
            contentBlocks.push(currentBlock);
          }
          currentBlock = {
            type: 'paragraph',
            textES: line.trim(),
            textRO: line.trim() // TODO: Traducir
          };
        } else {
          currentBlock.textES += ' ' + line.trim();
          currentBlock.textRO += ' ' + line.trim();
        }
      } else if (currentBlock) {
        // Línea vacía, guardar bloque actual
        contentBlocks.push(currentBlock);
        currentBlock = null;
      }
    }

    // Guardar último bloque si existe
    if (currentBlock) {
      contentBlocks.push(currentBlock);
    }
    if (currentListItems.length > 0) {
      contentBlocks.push({
        type: 'list',
        listType: 'unordered',
        items: currentListItems
      });
    }
    if (currentTableHeaders) {
      contentBlocks.push({
        type: 'table',
        headers: currentTableHeaders,
        rows: currentTableRows
      });
    }

    return contentBlocks;
  }

  /**
   * Transforma un chunk completo en una lección
   */
  transformChunk(chunkPath, lessonId, titleES, titleRO) {
    const chunk = this.readChunk(chunkPath);
    const content = this.parseMarkdownToLesson(chunk.content);

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

  /**
   * Genera el archivo de lección
   */
  generateLessonFile(lesson, filename) {
    const lessonCode = `/**
 * Lección generada automáticamente desde IFKB
 * Chunk Original: ${lesson.originalChunkId}
 * Fuente: ${lesson.source}
 * Categoría: ${lesson.category}
 * 
 * ADVERTENCIA: NO modificar valores numéricos, dosis o información médica
 * sin verificar con la fuente original.
 */

export const ${filename.replace('.js', '')} = ${JSON.stringify(lesson, null, 2)};
`;

    const outputPath = path.join(this.lessonsBasePath, filename);
    fs.writeFileSync(outputPath, lessonCode, 'utf-8');
    console.log(`✅ Lección generada: ${filename}`);
    
    return outputPath;
  }

  /**
   * Valida que los valores numéricos se preservaron
   */
  validateNumericalIntegrity(originalContent, lessonContent) {
    // Extraer todos los números del contenido original
    const originalNumbers = originalContent.match(/\d+\.?\d*/g) || [];
    
    // Extraer todos los números del contenido de la lección
    const lessonJSON = JSON.stringify(lessonContent);
    const lessonNumbers = lessonJSON.match(/\d+\.?\d*/g) || [];

    // Comparar (simplificado - en producción sería más robusto)
    if (originalNumbers.length !== lessonNumbers.length) {
      console.warn('⚠️  ADVERTENCIA: Diferencia en cantidad de valores numéricos');
      return false;
    }

    return true;
  }
}

// Exportar para uso en otros scripts
module.exports = IFKBTransformer;

// Si se ejecuta directamente, hacer prueba
if (require.main === module) {
  const transformer = new IFKBTransformer();
  
  console.log('🔧 Script de Transformación IFKB → Lecciones');
  console.log('📋 Modo: Prueba');
  console.log('');
  
  // Prueba con un chunk de farmacología
  try {
    const lesson = transformer.transformChunk(
      'farmacologia/calculo_dosis_fundamentos.md',
      'part9_m3_t1',
      'Fundamentos de Cálculo de Dosis',
      'Fundamente de Calcul al Dozelor'
    );
    
    console.log('✅ Transformación exitosa');
    console.log(`   - ID: ${lesson.id}`);
    console.log(`   - Título: ${lesson.titleES}`);
    console.log(`   - Bloques de contenido: ${lesson.content.length}`);
    console.log(`   - Fuente: ${lesson.source}`);
    
    // Generar archivo de prueba
    // transformer.generateLessonFile(lesson, 'part9_m3_t1.js');
    
  } catch (error) {
    console.error('❌ Error en transformación:', error.message);
  }
}
