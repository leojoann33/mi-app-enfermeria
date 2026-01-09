#!/usr/bin/env node

/**
 * Script to update index.js with all IFKB lesson imports and exports
 */

const fs = require('fs');
const path = require('path');

const INDEX_FILE = path.join(__dirname, '../src/data/index.js');

// Read current index.js
let indexContent = fs.readFileSync(INDEX_FILE, 'utf-8');

// Find the IFKB imports section
const ifkbImportsStart = indexContent.indexOf('// PART 9 - IFKB');
const ifkbImportsEnd = indexContent.indexOf('\n \n\n// 3. EXPORTACIÓN MASIVA');

if (ifkbImportsStart === -1 || ifkbImportsEnd === -1) {
  console.error('Could not find IFKB section in index.js');
  process.exit(1);
}

// Generate new IFKB imports
const newImports = `// PART 9 - IFKB (Incremental Factored Knowledge Base)

// IFKB Lessons - Módulo 1: Geriatría
import { ifkb_m1_t1 } from './course/ifkb_m1_t1';
import { ifkb_m1_t2 } from './course/ifkb_m1_t2';
import { ifkb_m1_t3 } from './course/ifkb_m1_t3';
import { ifkb_m1_t4 } from './course/ifkb_m1_t4';
import { ifkb_m1_t5 } from './course/ifkb_m1_t5';
import { ifkb_m1_t6 } from './course/ifkb_m1_t6';
import { ifkb_m1_t7 } from './course/ifkb_m1_t7';
import { ifkb_m1_t8 } from './course/ifkb_m1_t8';
import { ifkb_m1_t9 } from './course/ifkb_m1_t9';
import { ifkb_m1_t10 } from './course/ifkb_m1_t10';

// IFKB Lessons - Módulo 2: Salud Mental
import { ifkb_m2_t1 } from './course/ifkb_m2_t1';
import { ifkb_m2_t2 } from './course/ifkb_m2_t2';
import { ifkb_m2_t3 } from './course/ifkb_m2_t3';
import { ifkb_m2_t4 } from './course/ifkb_m2_t4';
import { ifkb_m2_t5 } from './course/ifkb_m2_t5';
import { ifkb_m2_t6 } from './course/ifkb_m2_t6';
import { ifkb_m2_t7 } from './course/ifkb_m2_t7';
import { ifkb_m2_t8 } from './course/ifkb_m2_t8';

// IFKB Lessons - Módulo 3: Farmacología
import { ifkb_m3_t1 } from './course/ifkb_m3_t1';
import { ifkb_m3_t2 } from './course/ifkb_m3_t2';
import { ifkb_m3_t3 } from './course/ifkb_m3_t3';
import { ifkb_m3_t4 } from './course/ifkb_m3_t4';
import { ifkb_m3_t5 } from './course/ifkb_m3_t5';
import { ifkb_m3_t6 } from './course/ifkb_m3_t6';
import { ifkb_m3_t7 } from './course/ifkb_m3_t7';
import { ifkb_m3_t8 } from './course/ifkb_m3_t8';

// IFKB Lessons - Módulo 4: Procedimientos
import { ifkb_m4_t1 } from './course/ifkb_m4_t1';
import { ifkb_m4_t2 } from './course/ifkb_m4_t2';
import { ifkb_m4_t3 } from './course/ifkb_m4_t3';
import { ifkb_m4_t4 } from './course/ifkb_m4_t4';
import { ifkb_m4_t5 } from './course/ifkb_m4_t5';
import { ifkb_m4_t6 } from './course/ifkb_m4_t6';
import { ifkb_m4_t7 } from './course/ifkb_m4_t7';
import { ifkb_m4_t8 } from './course/ifkb_m4_t8';
import { ifkb_m4_t9 } from './course/ifkb_m4_t9';

// IFKB Lessons - Módulo 5: Laboratorio
import { ifkb_m5_t1 } from './course/ifkb_m5_t1';
import { ifkb_m5_t2 } from './course/ifkb_m5_t2';
import { ifkb_m5_t3 } from './course/ifkb_m5_t3';
import { ifkb_m5_t4 } from './course/ifkb_m5_t4';

// IFKB Lessons - Módulo 6: Cardiología
import { ifkb_m6_t1 } from './course/ifkb_m6_t1';

// IFKB Lessons - Módulo 7: Emergencias
import { ifkb_m7_t1 } from './course/ifkb_m7_t1';

// IFKB Lessons - Módulo 8: Endocrinología
import { ifkb_m8_t1 } from './course/ifkb_m8_t1';

// IFKB Lessons - Módulo 9: Medicina Interna
import { ifkb_m9_t1 } from './course/ifkb_m9_t1';
import { ifkb_m9_t2 } from './course/ifkb_m9_t2';

// IFKB Lessons - Módulo 10: Anatomía
import { ifkb_m10_t1 } from './course/ifkb_m10_t1';`;

// Replace the IFKB imports section
indexContent = indexContent.substring(0, ifkbImportsStart) + newImports + indexContent.substring(ifkbImportsEnd);

// Find the IFKB lesson maps section
const mapsStart = indexContent.indexOf('const IFKB_M3_LESSONS');
const mapsEnd = indexContent.indexOf('\nexport {');

if (mapsStart === -1 || mapsEnd === -1) {
  console.error('Could not find IFKB maps section in index.js');
  process.exit(1);
}

// Generate new lesson maps
const newMaps = `const IFKB_M1_LESSONS = {
  "ifkb_m1_t1": ifkb_m1_t1,
  "ifkb_m1_t2": ifkb_m1_t2,
  "ifkb_m1_t3": ifkb_m1_t3,
  "ifkb_m1_t4": ifkb_m1_t4,
  "ifkb_m1_t5": ifkb_m1_t5,
  "ifkb_m1_t6": ifkb_m1_t6,
  "ifkb_m1_t7": ifkb_m1_t7,
  "ifkb_m1_t8": ifkb_m1_t8,
  "ifkb_m1_t9": ifkb_m1_t9,
  "ifkb_m1_t10": ifkb_m1_t10,
};

const IFKB_M2_LESSONS = {
  "ifkb_m2_t1": ifkb_m2_t1,
  "ifkb_m2_t2": ifkb_m2_t2,
  "ifkb_m2_t3": ifkb_m2_t3,
  "ifkb_m2_t4": ifkb_m2_t4,
  "ifkb_m2_t5": ifkb_m2_t5,
  "ifkb_m2_t6": ifkb_m2_t6,
  "ifkb_m2_t7": ifkb_m2_t7,
  "ifkb_m2_t8": ifkb_m2_t8,
};

const IFKB_M3_LESSONS = {
  "ifkb_m3_t1": ifkb_m3_t1,
  "ifkb_m3_t2": ifkb_m3_t2,
  "ifkb_m3_t3": ifkb_m3_t3,
  "ifkb_m3_t4": ifkb_m3_t4,
  "ifkb_m3_t5": ifkb_m3_t5,
  "ifkb_m3_t6": ifkb_m3_t6,
  "ifkb_m3_t7": ifkb_m3_t7,
  "ifkb_m3_t8": ifkb_m3_t8,
};

const IFKB_M4_LESSONS = {
  "ifkb_m4_t1": ifkb_m4_t1,
  "ifkb_m4_t2": ifkb_m4_t2,
  "ifkb_m4_t3": ifkb_m4_t3,
  "ifkb_m4_t4": ifkb_m4_t4,
  "ifkb_m4_t5": ifkb_m4_t5,
  "ifkb_m4_t6": ifkb_m4_t6,
  "ifkb_m4_t7": ifkb_m4_t7,
  "ifkb_m4_t8": ifkb_m4_t8,
  "ifkb_m4_t9": ifkb_m4_t9,
};

const IFKB_M5_LESSONS = {
  "ifkb_m5_t1": ifkb_m5_t1,
  "ifkb_m5_t2": ifkb_m5_t2,
  "ifkb_m5_t3": ifkb_m5_t3,
  "ifkb_m5_t4": ifkb_m5_t4,
};

const IFKB_M6_LESSONS = {
  "ifkb_m6_t1": ifkb_m6_t1,
};

const IFKB_M7_LESSONS = {
  "ifkb_m7_t1": ifkb_m7_t1,
};

const IFKB_M8_LESSONS = {
  "ifkb_m8_t1": ifkb_m8_t1,
};

const IFKB_M9_LESSONS = {
  "ifkb_m9_t1": ifkb_m9_t1,
  "ifkb_m9_t2": ifkb_m9_t2,
};

const IFKB_M10_LESSONS = {
  "ifkb_m10_t1": ifkb_m10_t1,
};

`;

// Replace the maps section
indexContent = indexContent.substring(0, mapsStart) + newMaps + indexContent.substring(mapsEnd);

// Find the exports section for IFKB
const exportsStart = indexContent.indexOf('  // PART 9 - IFKB\n');
const exportsEnd = indexContent.indexOf('\n};\n\n/**');

if (exportsStart === -1 || exportsEnd === -1) {
  console.error('Could not find IFKB exports section in index.js');
  process.exit(1);
}

// Generate new exports
const newExports = `  // PART 9 - IFKB
  IFKB_M1_LESSONS,
  IFKB_M2_LESSONS,
  IFKB_M3_LESSONS,
  IFKB_M4_LESSONS,
  IFKB_M5_LESSONS,
  IFKB_M6_LESSONS,
  IFKB_M7_LESSONS,
  IFKB_M8_LESSONS,
  IFKB_M9_LESSONS,
  IFKB_M10_LESSONS`;

// Replace the exports section
indexContent = indexContent.substring(0, exportsStart) + newExports + indexContent.substring(exportsEnd);

// Write the updated content
fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');

console.log('✅ Successfully updated index.js with all IFKB lessons!');
console.log('📊 Summary:');
console.log('   - Módulo 1 (Geriatría): 10 lessons');
console.log('   - Módulo 2 (Salud Mental): 8 lessons');
console.log('   - Módulo 3 (Farmacología): 8 lessons');
console.log('   - Módulo 4 (Procedimientos): 9 lessons');
console.log('   - Módulo 5 (Laboratorio): 4 lessons');
console.log('   - Módulo 6 (Cardiología): 1 lesson');
console.log('   - Módulo 7 (Emergencias): 1 lesson');
console.log('   - Módulo 8 (Endocrinología): 1 lesson');
console.log('   - Módulo 9 (Medicina Interna): 2 lessons');
console.log('   - Módulo 10 (Anatomía): 1 lesson');
console.log('   TOTAL: 45 lessons');
