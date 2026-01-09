// src/AcronymsViewer.jsx

import React, { useState } from "react";
import { Search } from "lucide-react";
import { ACRONYMS_DB, UI_TEXT } from "../data/index";

export const AcronymsViewer = ({ lang }) => {
  const [filter, setFilter] = useState("");
  const t = UI_TEXT[lang] || UI_TEXT.es;

  // CORRECCIÓN: Nombres de propiedades seguros
  const filtered = ACRONYMS_DB.filter((item) => {
    const short = item.acronym || "";
    const fullES = item.fullES || "";
    const search = filter.toLowerCase();

    return (
      short.toLowerCase().includes(search) ||
      fullES.toLowerCase().includes(search)
    );
  });

  return (
    <div className="h-full flex flex-col bg-slate-50 font-body">
      <div className="bg-white p-4 border-b border-slate-100 shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-heading font-black text-slate-800 uppercase mb-3">
          {t.menu_acronyms || "Siglas"}
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Buscar sigla (ej: HTA)..."
            className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {filtered.length > 0 ? (
          <div className="grid gap-3">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between"
              >
                <span className="font-black text-slate-900 text-lg">
                  {item.acronym}
                </span>
                <div className="text-right max-w-[70%]">
                  <span className="text-slate-800 text-sm font-bold block">
                    {lang === "es" ? item.fullES : item.fullRO}
                  </span>
                  <span className="text-slate-500 text-xs block mt-1">
                    {lang === "es" ? item.defES : item.defRO}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-10 text-slate-400">
            <p>No se encontraron resultados.</p>
          </div>
        )}
      </div>
    </div>
  );
};
