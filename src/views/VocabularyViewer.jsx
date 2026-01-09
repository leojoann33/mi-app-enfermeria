// src/VocabularyViewer.jsx

import React, { useState } from "react";
import { Search, BookOpen, AlertCircle, AlertTriangle, FileText, XCircle, CheckCircle, ChevronRight, ArrowLeft, Lightbulb, BookText, Stethoscope } from "lucide-react";
import { VOCABULARY_DB, UI_TEXT } from "../data/index";

export const VocabularyViewer = ({ lang, activeProfile = "nursing" }) => {
  const [filter, setFilter] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);
  const isEs = lang === "es";
  const t = UI_TEXT[lang] || UI_TEXT.es;

  // Filtrado por término principal
  const filtered = VOCABULARY_DB.filter((item) => {
    const termES = item.termES || "";
    const termRO = item.termRO || "";
    const search = filter.toLowerCase();

    return (
      termES.toLowerCase().includes(search) ||
      termRO.toLowerCase().includes(search)
    );
  });

  const getProfileLabel = (profile) => {
    switch (profile) {
      case "medicine": return isEs ? "Médico" : "Medical";
      case "health": return isEs ? "Salud" : "Sănătate";
      default: return isEs ? "Enfermería" : "Asistent";
    }
  };

  const PROFILE_COLOR = {
    nursing: "text-indigo-600 border-indigo-200 bg-indigo-50/50",
    medicine: "text-emerald-600 border-emerald-200 bg-emerald-50/50",
    health: "text-rose-600 border-rose-200 bg-rose-50/50"
  };

  const profileStyle = PROFILE_COLOR[activeProfile] || PROFILE_COLOR.nursing;

  // --- VISTA DE DETALLE ---
  if (selectedTerm) {
    const data = selectedTerm.profiles?.[activeProfile] || selectedTerm.profiles?.nursing || {};
    const termTitle = isEs ? selectedTerm.termES : selectedTerm.termRO;
    
    // Get etymology and fields
    const etymology = isEs ? data.etymologyES : data.etymologyRO;
    const definition = isEs ? data.definitionES : data.definitionRO;
    const context = isEs ? data.contextES : data.contextRO;
    const watchList = isEs ? data.watchES : data.watchRO;
    const errorList = isEs ? data.errorsES : data.errorsRO;

    return (
      <div className="h-full flex flex-col bg-white animate-in fade-in slide-in-from-right-4 duration-300 font-body">
        {/* Header Detalle */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
          <button 
            onClick={() => setSelectedTerm(null)}
            className="p-2 -ml-2 hover:bg-slate-50 rounded-full text-slate-500 transition-colors"
          >
            <ArrowLeft size={22} strokeWidth={1.5} />
          </button>
          <div>
            <h2 className="text-xl font-bold text-slate-800 leading-tight">
              {termTitle}
            </h2>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${profileStyle}`}>
               {getProfileLabel(activeProfile)}
            </span>
          </div>
        </div>

        {/* Contenido Scrollable */}
        <div className="flex-1 overflow-y-auto p-5 scroll-smooth space-y-5">
            
            {/* Etimología */}
            {etymology && (
              <p className="text-sm italic text-slate-500 border-l-2 border-indigo-300 pl-3 py-1 bg-indigo-50/30 rounded-r-lg">
                {etymology}
              </p>
            )}

            {/* Definición */}
            {definition && (
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-indigo-600">
                  <BookText size={18} strokeWidth={2} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {isEs ? "Definición" : "Definiție"}
                  </span>
                </div>
                <div className="text-[15px] leading-relaxed text-slate-700 whitespace-pre-line">
                  {definition}
                </div>
              </div>
            )}

            {/* Contexto Práctico */}
            {context && (
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <div className="flex items-center gap-2 mb-3 text-amber-600">
                  <Lightbulb size={18} strokeWidth={2} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {isEs ? "En tu Trabajo Diario" : "În Munca Ta Zilnică"}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 whitespace-pre-line">
                  {context}
                </p>
              </div>
            )}

            {/* Watch List (Legacy Support) */}
            {watchList && watchList.length > 0 && (
              <ListSection 
                title={isEs ? "Puntos Clave" : "Puncte Cheie"} 
                list={watchList} 
                icon={<AlertCircle size={16} />} 
                color="border-sky-200 bg-sky-50/50 text-sky-700" 
              />
            )}

            {/* Error List (Legacy Support) */}
            {errorList && errorList.length > 0 && (
              <ListSection 
                title={isEs ? "Errores Comunes" : "Erori Frecvente"} 
                list={errorList} 
                icon={<XCircle size={16} />} 
                color="border-red-200 bg-red-50/50 text-red-700" 
              />
            )}

            {/* Fallback for no content */}
            {!definition && !etymology && !context && (
               <div className="flex flex-col items-center justify-center py-20 opacity-50 space-y-4">
                  <FileText size={48} strokeWidth={1} />
                  <p className="text-center text-sm">
                    {isEs ? "Sin contenido detallado para este perfil." : "Fără conținut detaliat pentru acest profil."}
                  </p>
               </div>
            )}
        </div>
      </div>
    );
  }

  // --- VISTA DE LISTA ---
  return (
    <div className="h-full flex flex-col bg-slate-50 font-body">
      {/* Header Lista */}
      <div className="bg-white p-4 border-b border-slate-100 shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="text-indigo-600" size={24} strokeWidth={2} />
            <h1 className="text-xl font-heading font-bold text-slate-800 uppercase tracking-tight">
              {t.menu_vocab || "Vocabulario"}
            </h1>
          </div>
           <span className={`text-[10px] font-medium uppercase px-2 py-0.5 rounded-full border ${profileStyle}`}>
            {getProfileLabel(activeProfile)}
          </span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} strokeWidth={2} />
          <input
            type="text"
            placeholder={isEs ? "Buscar término..." : "Găsi termen..."}
            className="w-full pl-10 p-2.5 bg-slate-100 rounded-xl border-none focus:ring-1 focus:ring-indigo-500/50 outline-none text-slate-700 placeholder:text-slate-400 text-sm font-medium transition-all"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de términos */}
      <div className="flex-1 overflow-y-auto p-2">
        {filtered.length > 0 ? (
          <div className="space-y-1">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTerm(item)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-sm transition-all text-left group"
              >
                <div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {isEs ? item.termES : item.termRO}
                  </h3>
                  {/* Preview: First line of definition */}
                  {item.profiles?.[activeProfile]?.definitionES && (
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1 max-w-[280px]">
                      {isEs 
                        ? item.profiles[activeProfile]?.definitionES?.split('\n')[0] 
                        : item.profiles[activeProfile]?.definitionRO?.split('\n')[0]}
                    </p>
                  )}
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
              </button>
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center opacity-40">
             <BookOpen size={48} strokeWidth={1} className="mb-4" />
             <p className="text-sm">
               {isEs ? "Sin resultados." : "Fără rezultate."}
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- COMPONENTES AUXILIARES ESTILIZADOS ---

const ListSection = ({ title, list, icon, color }) => {
  if (!list || list.length === 0) return null;
  return (
    <div className={`p-4 rounded-xl border ${color}`}>
      <div className="flex items-center gap-2 mb-3 opacity-90">
         {icon}
        <span className="text-xs font-bold uppercase tracking-wider">
          {title}
        </span>
      </div>
      <ul className="space-y-2">
        {list.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-[15px] leading-relaxed font-normal opacity-90 items-start">
             <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
             <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
