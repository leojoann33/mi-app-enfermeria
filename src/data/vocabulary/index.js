/**
 * 📚 VOCABULARY DATABASE AGGREGATOR
 * This file combines all vocabulary modules into a single database.
 * It automatically sorts terms alphabetically by Spanish term.
 */

import { VOCABULARY_GERIATRICS } from "./geriatrics";

// Combine all arrays (Currently only Geriatrics with the new 3 terms)
const RAW_VOCABULARY = [
  ...VOCABULARY_GERIATRICS
];

// Sort alphabetically by termES
export const VOCABULARY_DB = RAW_VOCABULARY.sort((a, b) => {
  return a.termES.localeCompare(b.termES, "es", { sensitivity: "base" });
});
