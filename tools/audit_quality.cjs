const fs = require('fs');
const path = require('path');

// Directorio objetivo
const COURSE_DIR = path.resolve(__dirname, '../src/data/course');

// Patrones de error a buscar
const PATTERNS = [
    { regex: /\*\*[^*]+\*\*/g, name: "Asteriscos Dobles (Negrita no parseada)" },
    { regex: /[^*]\*[^*]+\*[^*]/g, name: "Asteriscos Simples (Cursiva no parseada)" },
    { regex: /___/g, name: "Triple guión bajo" },
    { regex: /undefined/g, name: "Texto 'undefined'" },
    { regex: /null/g, name: "Texto 'null'" },
    { regex: /\[object Object\]/g, name: "Objeto JS renderizado como string" }
];

async function auditFiles() {
    console.log("🔍 INICIANDO AUDITORÍA FINA DE CALIDAD...\n");
    
    let files;
    try {
        files = fs.readdirSync(COURSE_DIR).filter(f => f.startsWith('ifkb_') && f.endsWith('.js'));
    } catch (e) {
        console.error("❌ Error leyendo directorio:", e.message);
        return;
    }

    let totalIssues = 0;
    let filesWithIssues = 0;

    for (const file of files) {
        const filePath = path.join(COURSE_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Buscar problemas en los strings del contenido
        // Extraemos solo lo que parece ser contenido de texto para evitar falsos positivos en código js
        // Una aproximación simple es buscar patrones en todo el archivo, pero excluyendo comentarios si fuera posible.
        // Dado que son archivos de datos JS, buscaremos patrones de markdown crudo dentro de strings.

        let fileIssues = [];

        PATTERNS.forEach(pattern => {
            const matches = content.match(pattern.regex);
            if (matches) {
                // Filtramos falsos positivos comunes en código JS si los hubiera (ej. multiplicaciones a*b)
                // Para asterisco simple, verificamos que no sea un comentario o multiplicación
                const realMatches = matches.filter(m => {
                    if (pattern.name.includes("Asteriscos Simples")) {
                        // Descartar si parece código (ej. " * " con espacios suele ser multiplicación o lista)
                        // Buscamos "*texto*"
                        return m.trim().length > 2;
                    }
                    return true;
                });

                if (realMatches.length > 0) {
                    fileIssues.push({
                        type: pattern.name,
                        count: realMatches.length,
                        examples: realMatches.slice(0, 3) 
                    });
                }
            }
        });

        if (fileIssues.length > 0) {
            console.log(`⚠️  ARCHIVO: ${file}`);
            fileIssues.forEach(issue => {
                console.log(`   - ${issue.type}: ${issue.count} casos`);
                console.log(`     Ejemplos: ${JSON.stringify(issue.examples)}`);
            });
            console.log("");
            totalIssues += fileIssues.reduce((acc, curr) => acc + curr.count, 0);
            filesWithIssues++;
        }
    }

    console.log("-----------------------------------------");
    console.log(`🏁 RESUMEN DE AUDITORÍA`);
    console.log(`📂 Archivos analizados: ${files.length}`);
    if (totalIssues === 0) {
        console.log(`✅ ESTADO: LIMPIO. No se encontraron residuos de Markdown ni errores de datos.`);
    } else {
        console.log(`⚠️ ESTADO: REQUIERE ATENCIÓN.`);
        console.log(`   Archivos afectados: ${filesWithIssues}`);
        console.log(`   Total problemas detectados: ${totalIssues}`);
    }
}

auditFiles();
