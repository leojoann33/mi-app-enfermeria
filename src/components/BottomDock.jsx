import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Gamepad2 } from 'lucide-react';

export const BottomDock = ({ lang, theme, onMoreClick }) => {
  const isEs = lang === 'es';

  // Helper for Dock Items
  const DockItem = ({ to, src, icon: Icon, label }) => (
    <Link to={to} className="flex flex-col items-center justify-center group w-14 py-1">
       <div className="w-14 h-14 flex items-center justify-center transition-transform group-active:scale-95 bg-white/10 rounded-2xl p-2 backdrop-blur-sm border border-white/5 shadow-lg">
         {src ? (
           <img 
             src={src} 
             alt={label || "icon"} 
             className="w-full h-full object-contain drop-shadow-md" 
           />
         ) : (
           <Icon size={32} className="text-white drop-shadow-md" />
         )}
       </div>
    </Link>
  );

  return (
    <div className="absolute bottom-6 w-full z-40 bg-transparent pointer-events-none flex justify-center">
       {/* iOS Style Floating Dock - Rounded Squircle */}
       <div className={`rounded-[35px] p-2 pb-2 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto flex items-center justify-center gap-2 ring-1 ring-white/10 backdrop-blur-3xl w-[95%] max-w-sm transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-800' : 'bg-brand-primary'}`}>
           <div className="flex-1 flex justify-between items-end px-2">
              <DockItem to="/calc" icon={Calculator} src="/iconos/icon_calculadora.png" />
              <DockItem to="/meds" src="/iconos/icon_farmacos.png" />
              <DockItem to="/dictionary" src="/iconos/icon_diccionario.png" />
              <DockItem to="/quiz" icon={Gamepad2} src="/iconos/icon_duelingo.png" />
           </div>
       </div>
    </div>
  );
};
