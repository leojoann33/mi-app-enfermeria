import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Pill,
  Activity,
  Siren,
  BrainCircuit,
  Microscope,
  Sparkles,
  Search,
  BookOpen,
  Droplet,
  Info,
  HeartPulse,
  Syringe,
  Settings,
  Baby
} from "lucide-react";
import { UI_TEXT, VOCABULARY_DB } from "../data/index";

export const HomeDashboard = ({ lang, activeProfile, theme }) => {
  const isEs = lang === "es";
  const t = UI_TEXT[lang] || UI_TEXT.es;

  // PERMISSION LOGIC (Slightly relaxed for demo visuals)
  const isAccessAllowed = (path) => true; // Visuals first, permissions later if needed

  return (
    <div className={`flex flex-col h-full font-body pb-32 transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* 1. SECCIÓN HERO (Estudiante + Laptop) */}
      <Link to="/course" className="relative w-full shrink-0 block group">
        <img 
          src="/images/estudiante.jpg" 
          alt="Estudiante" 
          fetchPriority="high"
          width="402"
          height="300"
          className="w-full h-auto object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center p-4">
           <h2 className="text-white text-2xl font-semibold tracking-wide text-center mb-4 drop-shadow-lg cursor-pointer" style={{ fontFamily: 'sans-serif' }}>
             {t.course_title}
           </h2>
           <div 
             className="px-8 py-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-full text-white/90 font-medium text-sm uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95 shadow-sm"
           >
             {t.enter}
           </div>
        </div>
      </Link>

      {/* 2. GRID PRINCIPAL (Layout Personalizado) */}
      {/* 2. GRID PRINCIPAL (Layout Uniforme) */}
      <div className="p-4 grid grid-cols-2 gap-4 pb-32">
        
        <Link to="/request" className="bg-[#003BD1]/10 rounded-[1.5rem] border border-slate-200 shadow-sm flex flex-col items-center justify-center p-2 group active:scale-95 transition-all hover:border-indigo-200 aspect-square">
            <img src="/iconos/icon_analiticas.png" alt="Analíticas" loading="lazy" width="80" height="80" className="w-20 h-20 object-contain mb-1" />
            <span className="text-xs font-medium text-[#0D47A1] uppercase tracking-widest text-center">
              Volante
            </span>
        </Link>
        



        {/* 4. VOCABULARIO */}
        <Link to="/vocab" className="bg-[#003BD1]/10 rounded-[1.5rem] border border-slate-200 shadow-sm flex flex-col items-center justify-center p-2 group active:scale-95 transition-all hover:border-indigo-200 aspect-square">
            <img src="/iconos/icon_vocab_3d.png" alt="Vocabulario" loading="lazy" width="80" height="80" className="w-20 h-20 object-contain mb-1" />
            <span className="text-xs font-medium text-[#0D47A1] uppercase tracking-widest text-center">
              {t.menu_vocab}
            </span>
        </Link>

        {/* 5. SIMULADOR (LARGE - SPAN 2) */}




        {/* 7. CARRITO */}
        <Link to="/cart" className="bg-[#003BD1]/10 rounded-[1.5rem] border border-slate-200 flex flex-col items-center justify-center p-3 shadow-sm active:scale-95 transition-all hover:border-emerald-200 aspect-square">
           <img src="/iconos/icon_carro_curas.png" alt="Carrito" loading="lazy" width="80" height="80" className="w-20 h-20 object-contain mb-1" />
           <span className="text-xs font-medium text-[#0D47A1] uppercase tracking-widest text-center">
             {t.cart}
           </span>
            <span className="text-[8px] font-medium text-slate-600 uppercase tracking-widest">{t.cart_cures}</span>
        </Link>

        {/* 8. URGENCIAS */}
        <Link to="/emergency" className="bg-[#003BD1]/10 rounded-[1.5rem] border border-slate-200 flex flex-col items-center justify-center p-3 shadow-sm active:scale-95 transition-all hover:border-orange-200 aspect-square">
           <img src="/iconos/icon_urgencias_3d.png" alt="Urgencias" loading="lazy" width="80" height="80" className="w-20 h-20 object-contain mb-1" />
            <span className="text-xs font-medium text-[#0D47A1] uppercase tracking-widest">{t.emergency}</span>
        </Link>

        {/* 10. TÉCNICAS */}
        <Link to="/procedures" className="bg-[#003BD1]/10 rounded-[1.5rem] border border-slate-200 p-3 flex flex-col items-center justify-center shadow-sm active:scale-95 transition-transform aspect-square">
            <img src="/iconos/icon_tecnicas.png" alt="Técnicas" loading="lazy" width="80" height="80" className="w-20 h-20 object-contain mb-1" />
            <span className="text-xs font-medium text-[#0D47A1] uppercase tracking-widest">{t.techniques}</span>
        </Link>

         {/* 11. SIGLAS */}
        <Link to="/acronyms" className="bg-[#003BD1]/10 rounded-[1.5rem] border border-slate-200 p-3 flex flex-col items-center justify-center shadow-sm active:scale-95 transition-transform aspect-square">
            <img src="/iconos/icon_siglas.png" alt="SIGLAS" loading="lazy" width="80" height="80" className="w-20 h-20 object-contain mb-1" />
            <span className="text-xs font-medium text-[#0D47A1] uppercase tracking-widest">{t.acronyms}</span>
        </Link>
        
        {/* Placeholder for even grid if needed */}


      </div>


    </div>
  );
};


