import React from "react";
import { Globe } from "lucide-react";

/**
 * BOTÓN DE IDIOMA
 * Extracted from App.jsx to avoid circular dependencies
 */
export const LangButton = ({ lang, toggleLang }) => (
  <button
    onClick={toggleLang}
    className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-slate-200 border border-slate-200"
  >
    <Globe size={10} />
    {lang === "es" ? "RO" : "ES"}
  </button>
);
