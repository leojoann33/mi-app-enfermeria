import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Info, CheckCircle } from 'lucide-react';

export const BloodTubesAnim = ({ lang }) => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTube, setSelectedTube] = useState(null);
  const isEs = lang === 'es';

  // DATOS DE LOS TUBOS (Orden Estándar CLSI)
  const TUBES = [
    {
      id: 'bottle',
      color: 'bg-amber-100',
      capColor: 'bg-blue-500', // Hemocultivo
      label: isEs ? 'Hemocultivos' : 'Hemoculturi',
      code: 'AER / ANAER',
      desc: isEs ? 'Siempre PRIMERO para evitar contaminación bacteriana.' : 'Întotdeauna PRIMUL pentru a evita contaminarea.',
      additive: isEs ? 'Caldo de cultivo' : 'Mediu de cultură',
      icon: '🦠'
    },
    {
      id: 'blue',
      color: 'bg-blue-100',
      capColor: 'bg-sky-400', // Citrato
      label: isEs ? 'Citrato (Coagulación)' : 'Citrat (Coagulare)',
      code: 'Sintrom / INR',
      desc: isEs ? 'Llenar EXACTAMENTE hasta la flecha. Muy sensible al volumen.' : 'Umpleți EXACT până la săgeată.',
      additive: isEs ? 'Citrato Sódico' : 'Citrat de Sodiu',
      icon: '🩸'
    },
    {
      id: 'red',
      color: 'bg-red-50',
      capColor: 'bg-red-600', // Suero
      label: isEs ? 'Suero (Bioquímica)' : 'Ser (Biochimie)',
      code: 'Glu / Col / Ions',
      desc: isEs ? 'Tubos secos o con gel separador. Para química general.' : 'Eprubete seci sau cu gel.',
      additive: isEs ? 'Activador coagulación' : 'Activator coagulare',
      icon: '🧪'
    },
    {
      id: 'green',
      color: 'bg-green-50',
      capColor: 'bg-emerald-500', // Heparina
      label: isEs ? 'Heparina' : 'Heparină',
      code: 'Urgencias / Cariotipo',
      desc: isEs ? 'Bioquímica de urgencia (no hay que esperar a que coagule).' : 'Biochimie de urgență.',
      additive: isEs ? 'Heparina Litio/Sodio' : 'Heparină Litiu/Sodiu',
      icon: '⚡'
    },
    {
      id: 'purple',
      color: 'bg-purple-50',
      capColor: 'bg-purple-500', // EDTA
      label: isEs ? 'EDTA (Hemograma)' : 'EDTA (Hemoleucogramă)',
      code: 'Hb / Plaq / Leuco',
      desc: isEs ? 'Invertir suavemente 8 veces. Nunca agitar.' : 'Inversați ușor de 8 ori.',
      additive: isEs ? 'EDTA K2/K3' : 'EDTA K2/K3',
      icon: '🔬'
    },
    {
      id: 'grey',
      color: 'bg-gray-100',
      capColor: 'bg-gray-400', // Glucosa
      label: isEs ? 'Oxalato (Glucosa)' : 'Oxalat (Glucoză)',
      code: 'Curva Glucosa',
      desc: isEs ? 'Inhibe la glucólisis (para que la glucosa no baje mientras viaja al lab).' : 'Inhibă glicoliza.',
      additive: isEs ? 'Fluoruro Sódico' : 'Fluorură de Sodiu',
      icon: '🍬'
    }
  ];

  // Lógica de la animación automática
  useEffect(() => {
    let timer;
    if (isPlaying && activeStep < TUBES.length - 1) {
      timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
        setSelectedTube(TUBES[activeStep + 1]); // Auto-seleccionar para ver info
      }, 1500); // 1.5 segundos por tubo
    } else if (activeStep === TUBES.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activeStep]);

  const handleReset = () => {
    setActiveStep(-1);
    setSelectedTube(null);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setActiveStep(-1);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body">
      
      {/* PANTALLA VISUALIZACIÓN */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-slate-100 relative overflow-hidden">
        
        {/* Título flotante */}
        <div className="absolute top-4 left-0 w-full text-center px-4 z-10">
           <h3 className="font-heading font-black text-brand-deep text-lg uppercase tracking-widest opacity-30">
             {isEs ? "Orden de Llenado" : "Ordinea de Umplere"}
           </h3>
        </div>

        {/* CONTENEDOR DE TUBOS (RACK) */}
        <div className="flex items-end justify-center gap-2 sm:gap-4 h-64 w-full max-w-md perspective-1000">
          {TUBES.map((tube, index) => {
             const isActive = index <= activeStep;
             const isCurrent = index === activeStep;
             
             return (
               <button
                 key={tube.id}
                 onClick={() => { setSelectedTube(tube); setIsPlaying(false); }}
                 className={`relative transition-all duration-500 ease-out group outline-none
                   ${isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8 blur-[1px]'}
                   ${isCurrent ? 'scale-110 z-10' : 'scale-100 z-0'}
                   hover:!opacity-100 hover:!translate-y-[-10px] hover:!scale-110
                 `}
                 style={{ height: '180px', width: '40px' }}
               >
                 {/* TAPÓN */}
                 <div className={`absolute top-0 left-0 w-full h-8 ${tube.capColor} rounded-t-sm shadow-md z-20 border-b border-black/10`}>
                   {/* Brillo tapón */}
                   <div className="absolute top-1 left-1 w-full h-1/2 bg-white/30 rounded-full blur-[1px]"></div>
                 </div>

                 {/* CUERPO TUBO */}
                 <div className={`absolute top-8 left-0 w-full h-[calc(100%-20px)] ${tube.color} border-x border-b border-slate-300/50 shadow-inner backdrop-blur-sm z-10 overflow-hidden rounded-b-xl flex flex-col justify-end`}>
                    
                    {/* SANGRE (Llenado animado) */}
                    <div 
                      className={`w-full bg-red-700/80 transition-all duration-[1000ms] ease-in-out ${isActive ? 'h-[80%]' : 'h-0'}`}
                      style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)' }}
                    >
                        {/* Burbujas decorativas */}
                        <div className="w-full h-2 bg-red-400/30 blur-sm"></div>
                    </div>

                    {/* ETIQUETA */}
                    <div className="absolute top-4 left-1 right-1 h-12 bg-white/80 border border-slate-200 text-[6px] font-mono flex flex-col items-center justify-center text-center leading-tight opacity-70">
                       <span className="font-bold">{tube.code}</span>
                       <div className="w-full h-[1px] bg-black/20 my-0.5"></div>
                       <span>{tube.id.toUpperCase()}</span>
                    </div>
                 </div>
                 
                 {/* Icono flotante si está seleccionado */}
                 {selectedTube?.id === tube.id && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl animate-bounce">
                        {tube.icon}
                    </div>
                 )}
               </button>
             );
          })}
        </div>

      </div>

      {/* PANEL DE CONTROL Y DETALLES */}
      <div className="bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] p-6 relative z-20">
        
        {/* BOTONES DE CONTROL */}
        <div className="flex gap-4 mb-6">
           <button 
             onClick={handlePlay}
             disabled={isPlaying}
             className={`flex-1 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95
             ${isPlaying ? 'bg-slate-100 text-slate-400' : 'bg-brand-primary text-white hover:bg-brand-dark'}`}
           >
             {isPlaying ? (
                 <span className="animate-pulse">{isEs ? "Llenando..." : "Se umple..."}</span>
             ) : (
                 <><Play size={18} fill="currentColor" /> {isEs ? "Reproducir Orden" : "Redare Ordine"}</>
             )}
           </button>

           <button 
             onClick={handleReset}
             className="w-14 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-colors"
           >
             <RotateCcw size={20} />
           </button>
        </div>

        {/* INFO DEL TUBO SELECCIONADO */}
        <div className="min-h-[140px]">
           {selectedTube ? (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center gap-3 mb-2">
                   <div className={`w-4 h-4 rounded-full ${selectedTube.capColor}`}></div>
                   <h4 className="font-heading font-black text-xl text-slate-800">{selectedTube.label}</h4>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                   <FlaskConicalIcon size={12}/> {selectedTube.additive}
                </p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm text-slate-600 leading-relaxed">
                   {selectedTube.desc}
                </div>
             </div>
           ) : (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 opacity-60">
                <Info size={32} className="mb-2"/>
                <p className="text-sm font-sub text-center max-w-[200px]">
                  {isEs 
                    ? "Pulsa 'Reproducir' o toca un tubo para ver detalles." 
                    : "Apăsați 'Redare' sau atingeți un tub pentru detalii."}
                </p>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

// Icono auxiliar pequeño
const FlaskConicalIcon = ({size, className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
);