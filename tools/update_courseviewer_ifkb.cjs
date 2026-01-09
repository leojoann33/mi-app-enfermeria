#!/usr/bin/env node

/**
 * Script to update CourseViewer.jsx with all IFKB lesson resolution logic
 */

const fs = require('fs');
const path = require('path');

const VIEWER_FILE = path.join(__dirname, '../src/views/CourseViewer.jsx');

// Read current CourseViewer.jsx
let viewerContent = fs.readFileSync(VIEWER_FILE, 'utf-8');

// 1. Update imports
const importsStart = viewerContent.indexOf('    IFKB_M3_LESSONS,');
const importsEnd = viewerContent.indexOf('\n} from "../data/index";');

if (importsStart === -1 || importsEnd === -1) {
  console.error('Could not find IFKB imports section in CourseViewer.jsx');
  process.exit(1);
}

const newImports = `    IFKB_M1_LESSONS,
    IFKB_M2_LESSONS,
    IFKB_M3_LESSONS,
    IFKB_M4_LESSONS,
    IFKB_M5_LESSONS,
    IFKB_M6_LESSONS,
    IFKB_M7_LESSONS,
    IFKB_M8_LESSONS,
    IFKB_M9_LESSONS,
    IFKB_M10_LESSONS`;

viewerContent = viewerContent.substring(0, importsStart) + newImports + viewerContent.substring(importsEnd);

// 2. Update resolution logic
const resolutionStart = viewerContent.indexOf('    // PART IX: IFKB\n');
const resolutionEnd = viewerContent.indexOf('    } else if (MASTER_5_LESSONS');

if (resolutionStart === -1 || resolutionEnd === -1) {
  console.error('Could not find IFKB resolution section in CourseViewer.jsx');
  process.exit(1);
}

const newResolution = `    // PART IX: IFKB
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m1_")) {
       lessonData = IFKB_M1_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m2_")) {
       lessonData = IFKB_M2_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m3_")) {
       lessonData = IFKB_M3_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m4_")) {
       lessonData = IFKB_M4_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m5_")) {
       lessonData = IFKB_M5_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m6_")) {
       lessonData = IFKB_M6_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m7_")) {
       lessonData = IFKB_M7_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m8_")) {
       lessonData = IFKB_M8_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m9_")) {
       lessonData = IFKB_M9_LESSONS[activeLessonId];
    } else if (activeLessonId && activeLessonId.startsWith("ifkb_m10_")) {
       lessonData = IFKB_M10_LESSONS[activeLessonId];
    `;

viewerContent = viewerContent.substring(0, resolutionStart) + newResolution + viewerContent.substring(resolutionEnd);

// Write the updated content
fs.writeFileSync(VIEWER_FILE, viewerContent, 'utf-8');

console.log('✅ Successfully updated CourseViewer.jsx with all IFKB resolution logic!');
console.log('📊 Added resolution for 10 IFKB modules');
