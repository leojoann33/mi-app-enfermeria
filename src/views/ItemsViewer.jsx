// src/ItemsViewer.jsx
// Harrison's Principles of Internal Medicine Style

import React, { useState, useMemo } from "react";
import { Search, ArrowLeft, FileText, Info, AlertTriangle, ChevronRight, BookOpen } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const ItemsViewer = ({
  data = [],
  title,
  type,
  lang,
  toggleLang,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const isEs = lang === "es";

  const t = {
    search: isEs ? "Buscar..." : "Căutare...",
    desc: isEs ? "Descripción" : "Descriere",
    stepTitle: isEs ? "Procedimiento" : "Procedură",
    warn: isEs ? "Precaución" : "Atenție",
    noContent: isEs ? "Sin contenido detallado." : "Fără conținut detaliat."
  };

  const getTxt = (item, field) => {
    if (!item) return "";
    const key = `${field}${isEs ? "ES" : "RO"}`;
    if (item[key]) return item[key];
    
    if (field === "name") {
      const titleKey = `title${isEs ? "ES" : "RO"}`;
      if (item[titleKey]) return item[titleKey];
    }
    
    return item[field] || "";
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    let flatData = Array.isArray(data) ? data : [];
    if (!Array.isArray(data) && typeof data === 'object') {
       if (data.levels) flatData = [...flatData, ...data.levels];
       if (data.carro && data.carro.drawers) {
          data.carro.drawers.forEach(d => {
             flatData = [...flatData, ...d.items.map(i => ({...i, categoryES: d.nameES, categoryRO: d.nameRO}))];
          });
       }
    }

    return flatData.filter((item) => {
      const name = getTxt(item, "name").toLowerCase();
      const cat = getTxt(item, "category").toLowerCase();
      return name.includes(searchTerm.toLowerCase()) || cat.includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm, isEs]);

  // --- VISTA DETALLE (HARRISON STYLE) ---
  if (selectedItem) {
    const desc = getTxt(selectedItem, "desc");
    const content = getTxt(selectedItem, "content");

    return (
      <div className="flex flex-col h-full bg-[#f8f9fa] font-serif">
        {/* HARRISON HEADER */}
        <div className="bg-[#164C84] p-4 flex items-center gap-3 sticky top-0 z-10 shadow-md">
          <button
            onClick={() => setSelectedItem(null)}
            className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1 truncate">
             <h2 className="font-sans font-bold text-lg text-white truncate uppercase tracking-wide">
               {getTxt(selectedItem, "name")}
             </h2>
             {getTxt(selectedItem, "category") && (
                <span className="text-[10px] font-bold text-[#379B7F] uppercase tracking-widest">
                   {getTxt(selectedItem, "category")}
                </span>
             )}
          </div>
        </div>

        {/* CONTENIDO HARRISON */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Descripción breve con estilo Harrison */}
          {desc && (
            <div className="bg-white border-b-4 border-[#164C84] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-[#164C84]">
                <BookOpen size={18} strokeWidth={2} />
                <span className="text-xs font-sans font-bold uppercase tracking-widest">{t.desc}</span>
              </div>
              <p className="text-[15px] text-slate-700 leading-relaxed">{desc}</p>
            </div>
          )}

          {/* Alerta si existe */}
          {selectedItem.alert && (
            <div className="bg-amber-50 border-l-4 border-[#E9B82B] p-4 mx-4 mt-4 rounded-r-lg">
              <div className="flex items-center gap-2 text-amber-800">
                <AlertTriangle size={16} />
                <span className="text-xs font-sans font-bold uppercase tracking-wider">{t.warn}</span>
              </div>
              <p className="text-sm text-amber-900 mt-1 font-sans">{selectedItem.alert}</p>
            </div>
          )}

          {/* Contenido extenso (Markdown con Harrison Style) */}
          {content && (
            <div className="harrison-content p-5 space-y-6">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  // H2: Section headers with Harrison style
                  h2: ({node, ...props}) => (
                    <h2 className="font-sans font-bold text-[#164C84] text-base uppercase mb-3 mt-6 border-b-2 border-[#379B7F] pb-2 tracking-wide" {...props} />
                  ),
                  // H3: Subsection headers
                  h3: ({node, ...props}) => (
                    <h3 className="font-sans font-bold text-slate-800 text-sm uppercase mb-2 mt-4 tracking-wide" {...props} />
                  ),
                  // Paragraphs
                  p: ({node, ...props}) => (
                    <p className="text-[15px] text-slate-700 leading-relaxed mb-3 text-justify" {...props} />
                  ),
                  // Unordered lists
                  ul: ({node, ...props}) => (
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-[15px] ml-2 mb-4" {...props} />
                  ),
                  // Ordered lists
                  ol: ({node, ...props}) => (
                    <ol className="list-decimal list-inside space-y-1 text-slate-700 text-[15px] ml-2 mb-4" {...props} />
                  ),
                  // List items
                  li: ({node, ...props}) => (
                    <li className="leading-relaxed" {...props} />
                  ),
                  // Strong text
                  strong: ({node, ...props}) => (
                    <strong className="font-bold text-slate-900" {...props} />
                  ),
                  // Tables - Harrison style
                  table: ({node, ...props}) => (
                    <div className="my-4 border-t-2 border-b-2 border-[#164C84] overflow-x-auto">
                      <table className="w-full text-sm font-sans" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}) => (
                    <thead className="bg-[#e0e5eb] text-[#164C84] font-bold text-xs uppercase border-b border-[#164C84]" {...props} />
                  ),
                  th: ({node, ...props}) => (
                    <th className="py-2 px-3 text-left font-bold" {...props} />
                  ),
                  tbody: ({node, ...props}) => (
                    <tbody className="text-xs text-slate-700" {...props} />
                  ),
                  tr: ({node, ...props}) => (
                    <tr className="border-b border-slate-200 even:bg-slate-50" {...props} />
                  ),
                  td: ({node, ...props}) => (
                    <td className="py-2 px-3" {...props} />
                  ),
                  // Blockquotes - Nursing Tips style
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-[#379B7F] bg-emerald-50 px-4 py-3 my-4 text-slate-700 italic text-[14px] rounded-r-lg" {...props} />
                  ),
                  // Horizontal rules
                  hr: ({node, ...props}) => (
                    <hr className="my-6 border-t border-slate-200" {...props} />
                  ),
                  // Code inline
                  code: ({node, inline, ...props}) => 
                    inline ? (
                      <code className="bg-slate-100 text-[#164C84] px-1 py-0.5 rounded text-sm font-mono" {...props} />
                    ) : (
                      <code className="block bg-slate-100 p-3 rounded text-sm font-mono overflow-x-auto" {...props} />
                    ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}

          {/* NANDA si existe */}
          {selectedItem.nanda && (
            <div className="mx-5 mb-5 bg-indigo-50 rounded-lg p-4 border-l-4 border-[#164C84]">
              <span className="text-xs font-sans font-bold text-[#164C84] uppercase tracking-widest">NANDA-I</span>
              <p className="text-sm text-indigo-900 mt-1 font-sans">{selectedItem.nanda}</p>
            </div>
          )}

          {/* Fallback */}
          {!desc && !content && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <FileText size={48} strokeWidth={1} className="mb-4" />
              <p className="text-sm">{t.noContent}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- VISTA LISTA (HARRISON STYLE) ---
  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] font-sans">
      {/* HARRISON HEADER */}
      <div className="bg-[#164C84] p-4 sticky top-0 z-10 shadow-md">
        <h1 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
          {title}
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <input
            type="text"
            placeholder={t.search}
            className="w-full pl-10 p-3 bg-white rounded-lg border-2 border-transparent focus:border-[#379B7F] outline-none transition-all text-slate-800 font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista Items */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredData.length > 0 ? (
          filteredData.map((item, idx) => (
            <button
              key={item.id || idx}
              onClick={() => setSelectedItem(item)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-[#164C84] shadow-sm hover:shadow-md hover:border-[#379B7F] transition-all text-left group"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-800 group-hover:text-[#164C84] transition-colors truncate uppercase text-sm tracking-wide">
                  {getTxt(item, "name")}
                </h3>
                {getTxt(item, "category") && (
                  <span className="text-[10px] font-bold text-[#379B7F] uppercase tracking-widest">
                    {getTxt(item, "category")}
                  </span>
                )}
                {getTxt(item, "desc") && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-serif">
                    {getTxt(item, "desc").replace(/\*\*/g, '').substring(0, 100)}...
                  </p>
                )}
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-[#164C84] transition-colors flex-shrink-0 ml-2" />
            </button>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Search size={48} strokeWidth={1} className="mb-4" />
            <p className="text-sm">{isEs ? "No se encontraron resultados." : "Niciun rezultat găsit."}</p>
          </div>
        )}
      </div>
    </div>
  );
};
