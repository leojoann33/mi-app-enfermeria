import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Video, BookOpen, Layers, Syringe } from 'lucide-react';
import { LangButton } from './App';
// CORRECCIÓN AQUÍ: Ruta ajustada a la carpeta components
import { BloodExtractionSim } from './components/BloodExtractionSim'; 

export const MultimediaViewer = ({ lang, toggleLang }) => {
  const [activeAnim, setActiveAnim] = useState(null);
  const isEs = lang === 'es';

  // Títulos
  const t = {
    title: isEs ? "Multimedia Interactiva" : "Multimedia Interactivă",
    subtitle: isEs ? "Aprendizaje Visual" : "Învățare Vizuală",
    tubesTitle: isEs ? "Simulador de Extracción Sanguínea" : "Simulator de Recoltare Sânge",
    tubesDesc: isEs ? "Entrenamiento completo: Volante, Selección de Tubos y Orden CLSI." : "Antrenament complet: Cerere, Selecție Tuburi și Ordine CLSI.",
    soon: isEs ? "Próximamente" : "În curând"
  };

  // --- MODO SIMULADOR ---
  if (activeAnim === 'tubes') {
    return (
      <div className="flex flex-col h-full bg-white font-body animate-in slide-in-from-right">
        {/* Header del Simulador */}
        <div className="bg-indigo-600 p-4 text-white shadow-md flex items-center gap-3 shrink-0 z-50">
           <button onClick={() => setActiveAnim(null)} className="p-2 -ml-2 rounded-full hover:bg-white/20 transition active:scale-95">
             <ArrowLeft size={24} />
           </button>
           <div className="flex-1">
             <h2 className="font-heading font-bold text-lg leading-none">{t.tubesTitle}</h2>
             <p className="text-[10px] font-mono opacity-80">v2.0 PRO</p>
           </div>
           <LangButton lang={lang} toggleLang={toggleLang} />
        </div>
        
        {/* Componente del Simulador */}
        <div className="flex-1 overflow-hidden bg-slate-50">
            <BloodExtractionSim lang={lang} />
        </div>
      </div>
    );
  }

  // --- MENÚ PRINCIPAL MULTIMEDIA ---
  return (
    <div className="flex flex-col h-full bg-slate-50 font-body">
      
      {/* Header Principal */}
      <div className="bg-indigo-600 p-4 text-white shadow-md flex items-center gap-3 sticky top-0 z-20">
        <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-white/20 transition active:scale-95">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-1">
          <h1 className="font-heading font-black text-xl tracking-wide">{t.title}</h1>
          <p className="text-[10px] text-indigo-200 uppercase tracking-widest font-bold">{t.subtitle}</p>
        </div>
        <LangButton lang={lang} toggleLang={toggleLang} />
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
        
        {/* Tarjeta Simulador Vacutainer */}
        <button 
          onClick={() => setActiveAnim('tubes')}
          className="w-full bg-white rounded-2xl p-0 shadow-lg border border-indigo-100 text-left group active:scale-[0.98] transition-all overflow-hidden relative"
        >
           <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden flex items-center justify-center">
              {/* Fondo decorativo */}
              <div className="absolute right-[-10px] bottom-[-20px] opacity-10 rotate-12 text-white">
                 <Syringe size={140} />
              </div>
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                 <PlayCircle size={40} className="text-white drop-shadow-md" fill="currentColor" stroke="none" />
              </div>
           </div>
           
           <div className="p-5 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                 <span className="bg-indigo-100 text-indigo-700 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">
                    {isEs ? "Simulación Clínica" : "Simulare Clinică"}
                 </span>
                 <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                    <Layers size={12}/> 5 Etapas
                 </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-2 leading-tight">
                {t.tubesTitle}
              </h3>
              <p className="text-sm text-slate-500 font-sub leading-relaxed">
                {t.tubesDesc}
              </p>
           </div>
        </button>

        {/* Placeholder para futuros contenidos */}
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center opacity-50 select-none">
            <BookOpen className="mx-auto mb-2 text-slate-300" size={32} />
            <p className="font-heading font-bold text-slate-400">{t.soon}</p>
            <p className="text-xs text-slate-400">Mapas Mentales & Infografías</p>
        </div>

      </div>
    </div>
  );
};