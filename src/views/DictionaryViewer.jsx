// src/DictionaryViewer.jsx
import React, { useState } from "react";
import { Search, Book } from "lucide-react";
import { DICTIONARY_DB, UI_TEXT } from "../data/index";

export const DictionaryViewer = ({ lang }) => {
  const [filter, setFilter] = useState("");
  const t = UI_TEXT[lang] || UI_TEXT.es;

  const filtered = DICTIONARY_DB.filter((item) => {
    const term = lang === "ro" ? item.termRO : item.termES;
    return term && term.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="h-full flex flex-col bg-slate-50 font-body">
      <div className="bg-white p-4 border-b border-slate-100 shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-heading font-black text-slate-800 uppercase mb-3">
          {t.menu_dic || "Diccionario"}
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <input
            type="text"
            placeholder={t.search_placeholder || "Buscar..."}
            className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 grid gap-4">
        {filtered.map((item, idx) => {
             const term = lang === "ro" ? item.termRO : item.termES;
             const def = lang === "ro" ? item.defRO : item.defES;
             
             return (
              <div
                key={item.id || idx}
                className={`bg-white p-5 rounded-xl shadow-sm border border-slate-100 ${item.categoryColor || ''}`}
              >
                <h3 className="text-lg font-black text-blue-800 mb-2 font-heading">
                  {term}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">{def}</p>
                
                {/* NANDA Support if exists */}
                {item.nanda && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                        <span className="inline-block px-2 py-1 bg-red-50 text-red-700 text-xs font-bold rounded">
                           NANDA {lang === 'ro' ? item.nanda.codeRO : item.nanda.codeES}
                        </span>
                        <span className="ml-2 text-xs text-slate-500 font-medium">
                            {lang === 'ro' ? item.nanda.labelRO : item.nanda.labelES}
                        </span>
                    </div>
                )}
              </div>
            );
        })}
      </div>
    </div>
  );
};
// STRUCTURE LOCKED: See src/data/dictionary.js for strict data model rules.
