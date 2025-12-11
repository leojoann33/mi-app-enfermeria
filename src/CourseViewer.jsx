import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, ChevronRight, GraduationCap, 
  CheckCircle, PlayCircle, FileText, Image as ImageIcon,
  AlertCircle 
} from 'lucide-react';
import { COURSE_DB, COURSE_CONTENT } from './data/index';
import { LangButton } from './App';
import { RichText } from './components/RichText'; // Asegúrate de tener este componente

export const CourseViewer = ({ lang, toggleLang }) => {
  const [activePart, setActivePart] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const isEs = lang === 'es';

  // --- VISTA 3: DETALLE DEL TEMA (Lección) ---
  if (activeTopic) {
    const contentData = COURSE_CONTENT[activeTopic];

    return (
      <div className="flex flex-col h-full bg-white font-body animate-in slide-in-from-right duration-300 relative z-0">
        
        {/* HEADER FIJO */}
        <div className="bg-brand-primary p-4 text-white shadow-md shrink-0 flex items-center gap-3 sticky top-0 z-50">
          <button 
            onClick={() => setActiveTopic(null)} 
            className="p-2 -ml-2 rounded-full hover:bg-white/20 transition active:scale-95 cursor-pointer"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-0.5">
              {isEs ? "Lección" : "Lecție"}
            </p>
            <h2 className="font-heading font-bold text-base leading-tight line-clamp-2">
              {contentData ? (isEs ? contentData.titleES : contentData.titleRO) : activeTopic}
            </h2>
          </div>
          <LangButton lang={lang} toggleLang={toggleLang} />
        </div>

        {/* CONTENIDO DEL TEMA */}
        <div className="flex-1 overflow-y-auto p-0 bg-slate-50 relative z-0">
          
          {contentData ? (
            <div className="bg-white min-h-full pb-20">
               
               {/* --- ZONA DE IMAGEN DE CABECERA (HERO) --- */}
               {contentData.image && (
                 <div className="relative w-full h-56 bg-slate-200 group overflow-hidden">
                    <img 
                      src={contentData.image} 
                      alt="Tema Header" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"; // Fallback genérico médico
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {contentData.imgRights && (
                        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md opacity-80">
                            © {contentData.imgRights}
                        </div>
                    )}
                 </div>
               )}

               {/* --- CUERPO DEL CONTENIDO --- */}
               <div className="p-6">
                   <div 
                     className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-brand-deep prose-p:text-slate-700 prose-li:text-slate-700 prose-img:rounded-xl prose-img:shadow-lg prose-a:text-brand-primary"
                     dangerouslySetInnerHTML={{ __html: isEs ? contentData.contentES : contentData.contentRO }} 
                   />
               </div>
            </div>
          ) : (
            // Placeholder
            <div className="flex flex-col items-center justify-center py-20 text-center px-6 mt-10">
               <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
                  <PlayCircle size={48} strokeWidth={1.5} />
               </div>
               <h3 className="font-heading font-black text-2xl text-slate-700 mb-3">
                 {isEs ? "Contenido en Desarrollo" : "Conținut în Dezvoltare"}
               </h3>
               <p className="text-sm text-slate-500 font-sub max-w-xs mx-auto leading-relaxed">
                 {isEs 
                   ? "Estamos trabajando meticulosamente en este módulo para ofrecerte la mejor calidad. Pronto estará disponible." 
                   : "Lucrăm cu meticulozitate la acest modul pentru a vă oferi cea mai bună calitate. Va fi disponibil în curând."}
               </p>
            </div>
          )}

        </div>
      </div>
    );
  }

  // --- VISTA 2: LISTA DE MÓDULOS ---
  if (activePart) {
    return (
      <div className="flex flex-col h-full bg-slate-50 font-body animate-in slide-in-from-right duration-300">
        <div className="bg-brand-deep p-6 text-white shadow-lg shrink-0 rounded-b-3xl z-10 relative overflow-hidden sticky top-0">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap size={120} />
          </div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <button onClick={() => setActivePart(null)} className="p-2 -ml-2 rounded-full hover:bg-white/20 transition active:scale-95 cursor-pointer">
              <ArrowLeft size={24} />
            </button>
            <LangButton lang={lang} toggleLang={toggleLang} className="ml-auto" />
          </div>
          <h2 className="font-heading font-black text-2xl leading-tight mb-1 relative z-10 pr-10">
            {isEs ? activePart.titleES : activePart.titleRO}
          </h2>
          <p className="text-sm font-sub text-brand-light/80 relative z-10">
            {isEs ? activePart.descES : activePart.descRO}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar -mt-2 pt-6">
          {activePart.modules.map((mod) => (
            <div key={mod.id} className="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                className="w-full p-4 flex items-center justify-between text-left active:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shrink-0 transition-colors ${activeModule === mod.id ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {mod.id.replace('m','')}
                  </div>
                  <h3 className={`font-heading font-bold text-sm ${activeModule === mod.id ? 'text-brand-primary' : 'text-slate-700'}`}>
                    {isEs ? mod.titleES : mod.titleRO}
                  </h3>
                </div>
                <ChevronRight size={18} className={`text-slate-300 transition-transform duration-300 ${activeModule === mod.id ? 'rotate-90 text-brand-primary' : ''}`} />
              </button>

              {/* Lista de Temas */}
              {activeModule === mod.id && (
                <div className="bg-brand-light/10 border-t border-slate-100 px-4 py-2">
                  <div className="space-y-1 ml-3 border-l-2 border-slate-200 pl-3 py-2">
                    {mod.topics.map((topic, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveTopic(topic)}
                        className="w-full text-left py-2.5 text-xs font-sub font-medium text-slate-600 hover:text-brand-deep flex items-start gap-2 group transition-colors"
                      >
                        <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${COURSE_CONTENT && COURSE_CONTENT[topic] ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                        <span className="leading-snug flex-1">{topic}</span>
                        
                        {COURSE_CONTENT && COURSE_CONTENT[topic] && (
                           <div className="flex items-center gap-1 opacity-100">
                             {COURSE_CONTENT[topic].image && <ImageIcon size={12} className="text-slate-400" />}
                             <CheckCircle size={12} className="text-green-600"/>
                           </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- VISTA 1: HOME DEL CURSO ---
  return (
    <div className="flex flex-col h-full bg-slate-50 font-body">
      <div className="bg-brand-primary p-4 text-white shadow-md flex items-center gap-3 sticky top-0 z-20">
        <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-white/20 transition active:scale-95 cursor-pointer">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-1">
          <h1 className="font-heading font-black text-xl tracking-wide">
            {isEs ? "Curso Completo" : "Curs Complet"}
          </h1>
          <p className="text-[10px] text-brand-light uppercase tracking-widest font-bold">
            {isEs ? "Enfermería Experta" : "Asistență Expertă"}
          </p>
        </div>
        <LangButton lang={lang} toggleLang={toggleLang} />
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">
        {COURSE_DB.map((part) => (
          <button 
            key={part.id}
            onClick={() => setActivePart(part)}
            className="w-full bg-white rounded-2xl p-0 shadow-lg border border-slate-100 text-left group active:scale-[0.98] transition-all overflow-hidden relative"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${part.id === 'p1' ? 'from-emerald-600 to-emerald-400' : part.id === 'p2' ? 'from-blue-600 to-blue-400' : 'from-purple-600 to-purple-400'}`}></div>
            <div className="p-6 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest text-white ${part.id === 'p1' ? 'bg-emerald-600' : part.id === 'p2' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                  {part.id === 'p1' ? (isEs ? "Básico" : "De Bază") : 
                   part.id === 'p2' ? (isEs ? "Avanzado" : "Avansat") : 
                                      (isEs ? "Práctico" : "Practic")}
                </span>
                <BookOpen className="text-slate-300 group-hover:text-brand-primary transition-colors duration-300" size={24} />
              </div>
              <h2 className="font-heading font-black text-xl text-slate-800 mb-2 leading-tight pr-4">
                {isEs ? part.titleES : part.titleRO}
              </h2>
              <p className="text-sm text-slate-500 font-sub mb-4">
                {isEs ? part.descES : part.descRO}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-brand-primary transition-colors">
                {isEs ? "Entrar al módulo" : "Intră în modul"} <ChevronRight size={14} />
              </div>
            </div>
          </button>
        ))}
        
        <div className="text-center py-8 opacity-40">
          <GraduationCap className="mx-auto mb-2 text-slate-400" size={32} />
          <p className="text-xs font-sub font-bold text-slate-400 uppercase tracking-widest">Petrescu Education System</p>
        </div>
      </div>
    </div>
  );
};