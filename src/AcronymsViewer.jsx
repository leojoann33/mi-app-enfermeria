import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, WholeWord } from 'lucide-react';
import { LangButton } from './App';
import { ACRONYMS_DB } from './data/index';

export const AcronymsViewer = ({ lang, toggleLang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const isEs = lang === 'es';

  // Filtrado de siglas
  const filteredItems = ACRONYMS_DB.filter(item => 
    item.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (isEs ? item.fullES : item.fullRO).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // FONDO GENERAL
    <div className="flex flex-col h-full bg-siglas-500 font-body">
      
      {/* HEADER */}
      <div className="bg-siglas-400 p-4 shadow-lg flex items-center gap-3 sticky top-0 z-20 border-b border-siglas-300">
        <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-siglas-300 transition active:scale-95 text-siglas-100">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-1">
          <h1 className="font-heading font-black text-xl tracking-wide text-white">
            {isEs ? "Siglas Médicas" : "Abrevieri Medicale"}
          </h1>
          <p className="text-[10px] text-siglas-100 uppercase tracking-widest font-bold opacity-80">
            {isEs ? "Diccionario Clínico" : "Dicționar Clinic"}
          </p>
        </div>
        <LangButton lang={lang} toggleLang={toggleLang} className="!bg-siglas-300 !border-siglas-200" />
      </div>

      {/* BARRA DE BÚSQUEDA CORREGIDA */}
      <div className="bg-siglas-500 p-4 pb-2 sticky top-[70px] z-10">
        <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder={isEs ? "Buscar sigla (ej. HTA)..." : "Caută abreviere (ex. HTA)..."}
              // CORRECCIÓN: text-slate-800 asegura que el texto sea oscuro y visible sobre fondo blanco
              className="w-full bg-white text-slate-800 placeholder:text-slate-400 pl-10 pr-4 py-3 rounded-xl text-sm font-bold shadow-lg outline-none focus:ring-4 focus:ring-siglas-300/50 border-2 border-siglas-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      {/* LISTA DE CONTENIDO */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20 no-scrollbar">
        {filteredItems.map((item) => (
          // TARJETA
          <div key={item.id} className="bg-siglas-100 rounded-2xl p-0 overflow-hidden shadow-lg border-l-8 border-siglas-400 animate-in slide-in-from-bottom duration-300">
            
            {/* CABECERA */}
            <div className="p-4 pb-2 flex items-center gap-3 border-b border-siglas-200/50">
                <div className="text-3xl filter drop-shadow-sm">{item.emoji}</div>
                <div>
                    <h2 className="font-heading font-black text-2xl text-siglas-400 tracking-tight leading-none">
                        {item.acronym}
                    </h2>
                    <p className="text-xs font-black text-siglas-300 uppercase tracking-wider mt-1">
                        {isEs ? "Concepto Clave" : "Concept Cheie"}
                    </p>
                </div>
            </div>

            {/* CUERPO */}
            <div className="p-4 pt-3 bg-white/40"> 
                <h3 className="font-sub font-bold text-sm text-siglas-500 mb-2 leading-tight">
                    {isEs ? item.fullES : item.fullRO}
                </h3>
                <p className="text-sm text-siglas-500 font-body leading-relaxed text-justify opacity-90">
                    {isEs ? item.defES : item.defRO}
                </p>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
            <div className="text-center py-10 opacity-50">
                <WholeWord size={48} className="mx-auto mb-2 text-siglas-200"/>
                <p className="text-siglas-200 font-bold">{isEs ? "No se encontraron siglas." : "Nu s-au găsit abrevieri."}</p>
            </div>
        )}
      </div>
    </div>
  );
};