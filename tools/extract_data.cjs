const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../recovery/index-D8X6zGN6.js');
const outputMedsFile = path.join(__dirname, '../src/data/recovered_meds.js');

try {
  const content = fs.readFileSync(inputFile, 'utf8');

  // Regex para encontrar el array de medicamentos
  // Busca: $p = [ { ... } ]
  // Asumimos que empieza con $p=[ y contaremos corchetes para encontrar el final
  
  // 1. Encontrar el inicio del DICCIONARIO
  // Patrón visto: id: "v_... espaciado... termES:
  // Buscamos el inicio de un array "[" seguido de un objeto "{" que tenga "termES" poco después
  // O buscamos la definición de variable antes de "v_prefix_ab" o "v_a_abdomen"
  
  // Estrategia: Buscar "termES" y retroceder hasta encontrar "=[ {"
  // Pero retroceder es difícil.
  // Busquemos el inicio del array que contiene el texto: 'termES: "Abdomen"'
  // El "Abdomen" estaba en 1467606.
  // Vamos a buscar un patrón de asignación de array que ocurra antes.
  
  // Probemos buscar la cadena EXACTA del primer elemento si es posible.
  // "id: "v_... termRO: "ab- (Prefix)"
  // Vamos a buscar la cadena "termRO: \"ab- (Prefix)\"" y ver qué hay antes.
  
  const anchorText = 'termRO:"ab- (Prefix)"'; // Minificado: probablemente sin espacios extra
  // En el dd anterior salió: termRO: "ab- (Prefix)" (con comillas y espacio)
  // Ajustemos la búsqueda para ser flexibles.
  
  const regexAnchor = /termRO:\s*"ab-\s*\(Prefix\)"/;
  const matchAnchor = content.match(regexAnchor);
  
  if (!matchAnchor) {
     console.error("No se encontró el ancla del diccionario.");
     process.exit(1);
  }
  
  const anchorIndex = matchAnchor.index;
  console.log(`Ancla encontrada en: ${anchorIndex}`);
  
  // Ahora buscamos hacia ATRÁS el inicio del array "[" asociado a una variable
  // X = [ { ... ancla ... } ]
  // Buscamos el último "[" antes del ancla que sea inicio de array (precedido de = o similar)
  
  let listStartIndex = -1;
  for (let i = anchorIndex; i >= 0; i--) {
      // Buscamos algo como " = ["
      if (content[i] === '[' && content[i-1] && (content[i-1] === '=' || content[i-1] === ' ')) {
          // Confirmar si hay un '=' cerca (saltando espacios)
          let j = i - 1;
          while (j >= 0 && content[j] === ' ') j--;
          if (content[j] === '=') {
              listStartIndex = i;
              break;
          }
      }
  }
  
  if (listStartIndex === -1) {
      console.error("No se encontró el inicio del array del diccionario (=[).");
      process.exit(1);
  }
  
  // Avanzamos hasta el corchete de apertura
  console.log(`Inicio de Array Diccionario encontrado en: ${listStartIndex}`);
  
  // Cambiamos el archivo de salida
  const outputDictFile = path.join(__dirname, '../src/data/recovered_dictionary.js');
  
  let bracketCount = 0;
  let endIndex = -1;

  for (let i = listStartIndex; i < content.length; i++) {
    const char = content[i];
    
    if (char === '[') {
      bracketCount++;
    } else if (char === ']') {
      bracketCount--;
      if (bracketCount === 0) { // Hemos vuelto al nivel 0, fin del array principal
        endIndex = i;
        break;
      }
    }
  }

  if (endIndex === -1) {
    console.error("No se pudo encontrar el final del array.");
    process.exit(1);
  }

  let rawData = content.substring(listStartIndex, endIndex + 1);
  
  // 3. Limpieza y Formato
  // El código minificado usa backticks ` y propiedades sin comillas.
  // Intentaremos generar un archivo JS válido exportando el objeto directamente.
  
  const fileContent = `/**
 * DATABASE: RECOVERED_DICTIONARY
 * Extracted from legacy build.
 */

export const RECOVERED_DICTIONARY_DB = ${rawData};
`;

  fs.writeFileSync(outputDictFile, fileContent);
  console.log(`Datos extraídos y guardados en ${outputDictFile}`);
  console.log(`Longitud de datos: ${rawData.length} caracteres`);

} catch (err) {
  console.error("Error:", err);
}
