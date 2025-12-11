import React, { useState, useMemo, useRef } from 'react';
import { Search, ArrowLeft, ChevronRight, FileText, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVirtualizer } from './useVirtualizer';
import { RichText } from './components/RichText';
import { LangButton } from './App'; // Importar botón idioma

const ITEM_SIZE = 110;

export const ItemsViewer = ({ data, title, subtitle, colorClass, textClass = "text-white", icon: Icon, lang, toggleLang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const parentRef = useRef(null);
  const isEs = lang === 'es';

  // Textos interfaz
  const t = {
    search: isEs ? "Buscar..." : "Căutare...",
    desc: isEs ? "Descripción y Uso" : "Descriere și Utilizare",
    warn: isEs ? "Precauciones" : "Precauții",
    noResults: isEs ? "Sin resultados." : "Fără rezultate."
  };

  // Helper idioma
  const getTxt = (item, field) => {
    if (!item) return '';
    const key = `${field}${isEs ? 'ES' : 'RO'}`;
    return item[key] || item[field] || '';
  };

  // Filtrado
  const filteredData = useMemo(() => {
    const query = searchTerm.toLowerCase();
    if (!query) return data;
    return data.filter(item => 
      getTxt(item, 'name').toLowerCase().includes(query) || 
      getTxt(item, 'type').toLowerCase().includes(query)
    );
  }, [searchTerm, data, isEs]);

  const { virtualItems, totalHeight } = useVirtualizer(parentRef, filteredData.length, ITEM_SIZE);

  return (
    <div className="flex flex-col h-full bg-brand-cyan/10 font-body">
      
      {/* HEADER DINÁMICO */}
      <div className={`${colorClass} ${textClass} p-4 shadow-md z-20 shrink-0 transition-colors duration-300`}>
        <div className="flex items-center gap-3 mb-4">
          {selectedItem ? (
             <button onClick={() => setSelectedItem(null)} className={`p-2 -ml-2 rounded-full active:scale-95 transition-all hover:bg-black/10`}>
                <ArrowLeft size={24} />
             </button>
          ) : (
             <Link to="/" className={`p-2 -ml-2 rounded-full active:scale-95 transition-all hover:bg-black/10`}>
                <ArrowLeft size={24} />
             </Link>
          )}
          
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-heading font-bold tracking-wide truncate">{selectedItem ? getTxt(selectedItem, 'name') : title}</h2>
            <p className={`text-[10px] uppercase tracking-widest font-black opacity-80 truncate`}>{selectedItem ? getTxt(selectedItem, 'type') : subtitle}</p>
          </div>

          {/* BOTÓN IDIOMA */}
          <LangButton lang={lang} toggleLang={toggleLang} className="!bg-black/20 hover:!bg-black/30 border-black/10" />
        </div>

        {/* Buscador (solo visible en lista) */}
        {!selectedItem && (
          <div className="relative">
            <Search className={`absolute left-3 top-3 opacity-50`} size={18} />
            <input 
              type="text" 
              placeholder={t.search}
              className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm font-sub font-bold shadow-inner outline-none border-none bg-white/90 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-hidden relative">
        
        {selectedItem ? (
          // VISTA DETALLE
          <div className="h-full overflow-y-auto p-5 space-y-6 pb-24 animate-slide-in no-scrollbar bg-white">
             
             {/* Descripción */}
             <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="flex items-center gap-2 text-sm font-sub font-black text-brand-deep uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">
                  <FileText size={16}/> {t.desc}
                </h4>
                <RichText text={getTxt(selectedItem, 'desc')} />
             </div>

             {/* Indicaciones Extra */}
             {getTxt(selectedItem, 'indication') && (
               <div className="p-2">
                  <RichText text={getTxt(selectedItem, 'indication')} />
               </div>
             )}

             {/* Alertas */}
             {getTxt(selectedItem, 'warning') && (
               <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 shadow-sm">
                  <h4 className="flex items-center gap-2 text-sm font-sub font-black text-amber-800 uppercase tracking-widest mb-3">
                    <Info size={16}/> {t.warn}
                  </h4>
                  <div className="text-amber-900/80">
                    <RichText text={getTxt(selectedItem, 'warning')} />
                  </div>
               </div>
             )}
          </div>

        ) : (
          // VISTA LISTA
          <div ref={parentRef} className="h-full overflow-y-auto no-scrollbar">
            <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
              {virtualItems.map(({ index, offsetTop }) => {
                const item = filteredData[index];
                return (
                  <div
                    key={item.id}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', transform: `translateY(${offsetTop}px)` }}
                    className="p-3 pb-0"
                  >
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="w-full bg-white p-4 rounded-xl shadow-card border border-slate-100 flex items-center gap-4 active:scale-[0.98] transition-transform text-left group"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${colorClass} ${textClass}`}>
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading font-bold text-lg text-brand-deep truncate">{getTxt(item, 'name')}</h3>
                        <span className="inline-block bg-slate-100 text-slate-500 text-[9px] font-sub font-bold px-2 py-0.5 rounded uppercase tracking-wider mt-1 border border-slate-200">
                          {getTxt(item, 'type')}
                        </span>
                      </div>
                      <ChevronRight className="text-slate-300" size={20}/>
                    </button>
                  </div>
                );
              })}
              
              {filteredData.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400 font-sub">
                  <Icon size={48} className="opacity-20 mb-2"/>
                  <p className="font-medium">{t.noResults}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};