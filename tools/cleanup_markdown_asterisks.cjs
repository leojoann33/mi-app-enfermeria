#!/usr/bin/env node

/**
 * IFKB Markdown Cleanup Script
 * Fixes asterisk formatting issues in all generated IFKB lesson files
 * 
 * Issues to fix:
 * - **text** should be rendered as bold (remove asterisks, content stays)
 * - *text* should be rendered as italic (remove asterisks, content stays)
 * - ***text*** should be rendered as bold+italic (remove asterisks, content stays)
 */

const fs = require('fs');
const path = require('path');

// Find all IFKB lesson files
const LESSONS_DIR = path.join(__dirname, '../src/data/course');
const lessonFiles = fs.readdirSync(LESSONS_DIR)
  .filter(f => f.startsWith('ifkb_') && f.endsWith('.js'))
  .map(f => path.join(LESSONS_DIR, f));

console.log(`\n🔍 Found ${lessonFiles.length} IFKB lesson files to audit\n`);

let totalFixed = 0;
let filesModified = 0;

function cleanMarkdownAsterisks(text) {
  if (typeof text !== 'string') return text;
  
  // Remove bold+italic (***text***)
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '$1');
  
  // Remove bold (**text**)
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  
  // Remove italic (*text*)
  text = text.replace(/\*([^*]+)\*/g, '$1');
  
  return text;
}

function processLessonFile(filePath) {
  console.log(`📝 Processing: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let fixCount = 0;
  
  // Count asterisks before
  const asterisksBefore = (content.match(/\*\*/g) || []).length;
  
  if (asterisksBefore === 0) {
    console.log(`   ✓ No asterisks found - file is clean`);
    return 0;
  }
  
  // Fix ANY string literal that contains markdown syntax
  // Matches "string" or 'string'
  // We use a simplified approach: scan for quotes
  
  // Strategy: match "..." or '...'
  // Group 2 is the content
  const regex = /("|')((?:[^"\\]|\\.)*?)\1/g;
  
  content = content.replace(regex, (match, quote, text) => {
    // Only process if it contains relevant markdown characters (* or _)
    // We ignore _ for now based on ifkb_m4_t3 analysis, only focusing on *
    if (!text.includes('*')) return match;
    
    // Check if it's a comment line (starts with *) - heuristic
    // But since we match quotes, we are inside a string.
    // However, some strings might be: " * Item 1" (lists)
    // We only want to remove PAIRS like **bold** or *italic*
    // The cleanMarkdownAsterisks function handles pairs.
    
    const cleaned = cleanMarkdownAsterisks(text);
    if (cleaned !== text) {
      fixCount++;
      return `${quote}${cleaned}${quote}`;
    }
    return match;
  });
  
  // Count asterisks after
  const asterisksAfter = (content.match(/\*\*/g) || []).length;
  
  if (asterisksAfter < asterisksBefore) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`   ✅ Fixed ${asterisksBefore - asterisksAfter} asterisk pairs`);
    return asterisksBefore - asterisksAfter;
  } else {
    console.log(`   ⚠️  No changes made`);
    return 0;
  }
}

// Process all files
for (const file of lessonFiles) {
  const fixed = processLessonFile(file);
  if (fixed > 0) {
    totalFixed += fixed;
    filesModified++;
  }
}

console.log('\n' + '='.repeat(70));
console.log('📊 MARKDOWN CLEANUP SUMMARY');
console.log('='.repeat(70));
console.log(`✅ Files processed: ${lessonFiles.length}`);
console.log(`📝 Files modified: ${filesModified}`);
console.log(`🔧 Total asterisk pairs removed: ${totalFixed}`);
console.log('='.repeat(70) + '\n');

if (filesModified > 0) {
  console.log('✨ Cleanup complete! All markdown formatting has been corrected.');
} else {
  console.log('✓ All files were already clean!');
}
