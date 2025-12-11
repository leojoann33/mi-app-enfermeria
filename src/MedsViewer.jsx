import React, { useState, useMemo, useRef } from 'react';
import { Search, ArrowLeft, Pill, AlertTriangle, FileText, Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVirtualizer } from './useVirtualizer';
import { MEDS_DB } from './data/index';
import { RichText } from './components/RichText';
import { LangButton } from './App'; // Importar botón idioma

const ITEM_SIZE = 110;

export const MedsViewer = ({ lang, toggleLang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMed, setSelectedMed] = useState(null);
  const parentRef = useRef(null);
  const isEs = lang === 'es';

  const t = {
    title: isEs ? "Fármacos" : "Medicamente",
    search: isEs ? "Buscar..." : "Căutare...",
    indications: isEs ? "Indicaciones" : "Indicații",
    dose: isEs ? "Posología" : "Dozaj",
    warnings: isEs ? "Alertas" : "Alerte",
    noResults: isEs ? "Sin resultados" : "Fără rezultate",
    general: isEs ? "General" : "General"
  };

  const getTxt = (item, field) => {
    if (!item) return '';
    const key = `${field}${isEs ? 'ES' : 'RO'}`;
    return item[key] || item[field] || '';
  };

  const filteredMeds = useMemo(() => {
    const query = searchTerm.toLowerCase();
    if (!query) return MEDS_DB;
    return MEDS_DB.filter(m => 
      m.name.toLowerCase().includes(query) || 
      (m.cat && m.cat.toLowerCase().includes(query))
    );
  }, [searchTerm, MEDS_DB]);

  const { virtualItems, totalHeight } = useVirtualizer(parentRef, filteredMeds.length, ITEM_SIZE);

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body">
      
      {/* HEADER LISTA */}
      <div className="bg-brand-primary text-white p-4 shadow-md z-20 shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all text-white">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-xl font-heading font-bold tracking-wide flex-1">{t.title}</h2>
          
          {/* BOTÓN IDIOMA LISTA */}
          <LangButton lang={lang} toggleLang={toggleLang} />
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 text-brand-primary" size={18} />
          <input 
            type="text" 
            placeholder={t.search}
            className="w-full bg-white text-slate-800 pl-10 pr-4 py-3 rounded-lg text-sm font-sub font-bold shadow-inner outline-none focus:ring-2 focus:ring-brand-dark/50 border-none placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* LISTA VIRTUALIZADA */}
      <div ref={parentRef} className="flex-1 overflow-y-auto relative no-scrollbar">
        <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
          {virtualItems.map(({ index, offsetTop }) => {
            const med = filteredMeds[index];
            return (
              <div
                key={med.id}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', transform: `translateY(${offsetTop}px)` }}
                className="p-3 pb-0"
              >
                <button 
                  onClick={() => setSelectedMed(med)}
                  className="w-full bg-white p-4 rounded-xl shadow-card border-l-4 border-l-transparent hover:border-l-brand-primary flex items-center gap-4 active:scale-[0.98] transition-transform text-left group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center shrink-0 text-brand-primary">
                    <Pill size={24} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-lg text-slate-800 truncate">{med.name}</h3>
                    <span className="inline-block bg-slate-100 text-slate-500 text-[9px] font-sub font-bold px-2 py-0.5 rounded uppercase tracking-wider mt-1">
                      {med.cat || t.general}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
          
          {filteredMeds.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Pill size={48} className="opacity-20 mb-2"/>
              <p className="font-medium">{t.noResults}</p>
            </div>
          )}
        </div>
      </div>

      {/* DETALLE (POP-UP FLOTANTE) */}
      {selectedMed && (
        <div className="absolute inset-0 bg-white z-30 flex flex-col animate-slide-in">
          
          <div className="bg-brand-primary p-4 flex items-center gap-3 sticky top-0 shadow-md z-10 text-white">
            <button onClick={() => setSelectedMed(null)} className="p-2 rounded-full hover:bg-white/20 text-white">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 min-w-0">
              <h2 className="font-heading font-bold text-xl truncate">{selectedMed.name}</h2>
              <span className="text-[10px] font-sub font-bold text-white/80 uppercase tracking-widest">{selectedMed.cat}</span>
            </div>
            
            {/* BOTÓN IDIOMA DETALLE */}
            <LangButton lang={lang} toggleLang={toggleLang} />
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar pb-24">
            
            <div className="space-y-2">
              <h4 className="flex items-center gap-2 text-sm font-sub font-black text-brand-primary uppercase tracking-widest border-b border-slate-100 pb-2">
                <FileText size={16}/> {t.indications}
              </h4>
              <RichText text={getTxt(selectedMed, 'ind')} />
            </div>

            <div className="bg-brand-light/30 p-5 rounded-2xl border border-brand-light space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-sub font-black text-brand-dark uppercase tracking-widest">
                <Syringe size={16}/> {t.dose}
              </h4>
              <RichText text={getTxt(selectedMed, 'dose')} />
            </div>

            <div className="bg-red-50 p-5 rounded-2xl border border-red-100 space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-sub font-black text-red-700 uppercase tracking-widest">
                <AlertTriangle size={16}/> {t.warnings}
              </h4>
              <div className="text-red-900/90">
                 <RichText text={getTxt(selectedMed, 'warn')} />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};