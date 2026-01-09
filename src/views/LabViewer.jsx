import React, { useState } from "react";
import {
  Search,
  ArrowLeft,
  TestTube, // More appropiate icon
  AlertTriangle,
  Info,
  Droplet
} from "lucide-react";
import { RichText } from "../components/RichText";
import { LAB_TUBES, LAB_PROFILES, LAB_TIPS_EXTRACTION } from "../data/index";

import { Link } from "react-router-dom";
import { RealisticTube } from "../components/RealisticTube";

export const LabViewer = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTube, setSelectedTube] = useState(null);
  const isEs = lang === "es";

  const t = {
    title: isEs ? "Guía de Extracción (Tubos)" : "Ghid de Recoltare (Eprubete)",
    search: isEs ? "Buscar tubo o prueba..." : "Căutare eprubetă sau test...",
    order: isEs ? "Orden de Llenado" : "Ordinea de Umplere",
    additive: isEs ? "Aditivo" : "Aditiv",
    care: isEs ? "Cuidados y Errores" : "Îngrijiri și Erori",
    profiles: isEs ? "Perfiles Comunes" : "Profile Comune",
  };

  // Color Mapping System
  const getColorClasses = (colorName) => {
    switch (colorName) {
      case "is-pale": return "bg-slate-100 border-slate-300 text-slate-700";
      case "is-info": return "bg-blue-100 border-blue-300 text-blue-800"; // Azul (Citrato)
      case "is-warning": return "bg-amber-100 border-amber-300 text-amber-800"; // Oro (Suero)
      case "is-success": return "bg-emerald-100 border-emerald-300 text-emerald-800"; // Verde (Heparina)
      case "is-primary": return "bg-purple-100 border-purple-300 text-purple-800"; // Lila (EDTA)
      case "is-dark": return "bg-gray-200 border-gray-400 text-gray-800"; // Gris (Glucosa)
      case "pink": return "bg-pink-100 border-pink-300 text-pink-800";
      default: return "bg-slate-50 border-slate-200 text-slate-600";
    }
  };

  const getTubeBg = (colorName) => {
      // Background for the tube visual
      switch (colorName) {
        case "is-pale": return "bg-slate-200";
        case "is-info": return "bg-blue-400"; 
        case "is-warning": return "bg-amber-400"; 
        case "is-success": return "bg-emerald-500"; 
        case "is-primary": return "bg-purple-500"; 
        case "is-dark": return "bg-gray-500"; 
        default: return "bg-slate-300";
      }
  };

  const getText = (item, field) => {
      if(!item) return "";
      return isEs ? item[`${field}ES`] : item[`${field}RO`];
  }

  const filteredTubes = LAB_TUBES.filter(tube => 
      getText(tube, "name").toLowerCase().includes(searchTerm.toLowerCase()) ||
      getText(tube, "testType")?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body relative overflow-hidden">
      {/* HEADER */}
      <div className="bg-[#469a7c] p-4 text-white shadow-md flex flex-col gap-4 shrink-0 z-20 sticky top-0">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-white/20 text-white"
          >
            <ArrowLeft size={24} />
          </Link>
          <div className="flex-1">
            <h1 className="font-heading font-black text-xl tracking-wide">
              {t.title}
            </h1>
            <p className="text-xs font-bold text-white/80">
              Protocolo CLSI (Order of Draw)
            </p>
          </div>

        </div>
      </div>

      {/* LISTA DE TUBOS (GRID) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* LEYENDA ORDEN */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl shadow-sm">
            <h3 className="text-yellow-800 font-bold text-sm flex items-center gap-2 mb-1">
                <AlertTriangle size={16}/> {t.order} (Critical Safety)
            </h3>
            <p className="text-xs text-yellow-700 leading-snug">
                {isEs ? 
                "El orden es CRÍTICO para evitar contaminación de aditivos (ej. Potasio del EDTA al tubo de bioquímica)." : 
                "Ordinea este CRITICĂ pentru a evita contaminarea cu aditivi."}
            </p>
        </div>

        {/* RACK DE TUBOS (ESTANTE) */}
        <div className="relative pt-10 pb-8 px-4 overflow-x-auto">
             {/* Rack Background (Studio Style) */}
             <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-100 border-y border-white/50 shadow-inner -z-10"></div>
             <div className="absolute bottom-4 left-0 w-full h-1 bg-black/10 blur-[2px]"></div>
             
             <div className="flex gap-4 items-end justify-start min-w-max px-8">
                {filteredTubes.map((tube) => (
                    <RealisticTube 
                        key={tube.id}
                        tube={tube}
                        onClick={setSelectedTube}
                        isSelected={selectedTube?.id === tube.id}
                    />
                ))}
            </div>
            {filteredTubes.length === 0 && (
                <div className="text-center w-full py-10 text-slate-400 font-bold italic">
                   {isEs ? "No se encontraron tubos..." : "Nu s-au găsit eprubete..."}
                </div>
            )}
        </div>

        {/* PERFILES RÁPIDOS */}
        <div className="pt-4">
             <h3 className="font-heading font-black text-slate-700 text-lg mb-3 px-2">
                 {t.profiles}
             </h3>
             <div className="grid grid-cols-2 gap-3">
                 {LAB_PROFILES.map(prof => (
                     <div key={prof.id} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                         <h4 className="font-bold text-sm text-blue-900 mb-1 leading-tight">
                             {isEs ? prof.titleES : prof.titleRO}
                         </h4>
                         <div className="flex gap-1 flex-wrap mt-2">
                             {prof.tubes.map(tid => {
                                 const tColor = LAB_TUBES.find(t => t.id === tid)?.color;
                                 return (
                                     <div key={tid} className={`w-3 h-3 rounded-full ${getTubeBg(tColor)} border border-slate-300 shadow-sm`}></div>
                                 )
                             })}
                         </div>
                     </div>
                 ))}
             </div>
        </div>

      </div>

      {/* MODAL DETALLE */}
      {selectedTube && (
        <div className="absolute inset-0 z-50 bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
            <div className={`p-5 text-white shadow-md flex items-center gap-3 shrink-0 ${getTubeBg(selectedTube.color)}`}>
             <button
              onClick={() => setSelectedTube(null)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="font-heading font-black text-xl flex-1 text-white drop-shadow-md">
                {getText(selectedTube, "name")}
            </h2>
            <div className="w-8 h-8 rounded-full bg-white text-slate-800 flex items-center justify-center font-black text-lg shadow-sm">
                {selectedTube.order}
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 pb-24 space-y-6">
               {/* ADITIVE */}
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                   <h4 className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-1">
                       <Droplet size={14}/> {t.additive}
                   </h4>
                   <p className="font-bold text-slate-800">
                       {selectedTube.additive}
                   </p>
               </div>

               {/* DESCRIPTION */}
               <div className="space-y-2">
                   <h4 className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-2">
                        <Info size={14}/> Info
                   </h4>
                   <div className="text-slate-700 text-sm leading-relaxed">
                        <RichText text={getText(selectedTube, "desc")} />
                   </div>
               </div>

               {/* CARE / WARNINGS */}
               <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                   <h4 className="flex items-center gap-2 text-xs font-black text-red-700 uppercase tracking-widest mb-2">
                       <AlertTriangle size={14}/> {t.care}
                   </h4>
                   <div className="text-red-900/80 text-sm">
                       <RichText text={getText(selectedTube, "care")} />
                   </div>
               </div>
          </div>
        </div>
      )}

    </div>
  );
};
