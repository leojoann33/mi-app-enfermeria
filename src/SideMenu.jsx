import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Pill, Calculator, Settings, HelpCircle, LogOut, User } from 'lucide-react';

export const SideMenu = ({ isOpen, onClose, lang }) => {
  const t = {
    home: lang === 'es' ? 'Inicio' : 'Acasă',
    meds: lang === 'es' ? 'Fármacos' : 'Medicamente',
    tools: lang === 'es' ? 'Clínica' : 'Clinică',
    config: lang === 'es' ? 'Configuración' : 'Setări',
    help: lang === 'es' ? 'Ayuda' : 'Ajutor',
    logout: lang === 'es' ? 'Cerrar Sesión' : 'Deconectare',
    role: lang === 'es' ? 'Enfermera/o' : 'Asistent Medical'
  };

  const menuClasses = isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full";
  const overlayClasses = isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";

  return (
    <>
      <div 
        className={`absolute inset-0 bg-brand-deep/80 z-40 transition-opacity duration-300 backdrop-blur-sm ${overlayClasses}`}
        onClick={onClose}
      />

      {/* CAMBIO AQUÍ: z-50 a z-[60] para estar por encima del Header */}
      <div className={`absolute top-0 left-0 h-full w-72 bg-brand-deep text-white z-[60] transform transition-transform duration-300 ease-out flex flex-col border-r border-white/10 ${menuClasses}`}>
        
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/10">
          <div>
            <h2 className="font-heading text-2xl tracking-wide font-bold">Petrescu</h2>
            <p className="text-xs text-brand-primary font-sub font-bold tracking-widest uppercase">ENF2 Pro</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-brand-primary">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex items-center gap-4 border-b border-white/5 bg-white/5">
          <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-brand-deep border-2 border-white/10 shadow-lg">
            <User size={24} />
          </div>
          <div>
            <p className="font-sub font-bold text-sm">{t.role}</p>
            <p className="text-xs font-sub text-brand-primary/80">UCI / Urgencias</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 font-sub">
          <ul className="space-y-1">
            <MenuItem to="/" icon={Home} label={t.home} onClick={onClose} />
            <MenuItem to="/meds" icon={Pill} label={t.meds} onClick={onClose} />
            <MenuItem to="/tools" icon={Calculator} label={t.tools} onClick={onClose} />
            <div className="my-4 border-t border-white/10 mx-2"></div>
            <MenuItem to="#" icon={Settings} label={t.config} onClick={onClose} />
            <MenuItem to="#" icon={HelpCircle} label={t.help} onClick={onClose} />
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10 bg-black/10">
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-500/10 text-red-300 hover:text-red-200 transition-colors text-sm font-sub font-bold">
            <LogOut size={18} />
            <span>{t.logout}</span>
          </button>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ to, icon: Icon, label, onClick }) => (
  <li>
    <Link 
      to={to} 
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 transition-all rounded-xl hover:translate-x-1"
    >
      <Icon size={20} className="text-brand-primary" />
      <span className="font-medium tracking-wide">{label}</span>
    </Link>
  </li>
);