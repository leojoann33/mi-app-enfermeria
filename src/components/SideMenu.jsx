import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Pill, Calculator, Settings, HelpCircle, LogOut, LogIn, UserPlus, User, Book } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

export const SideMenu = ({ isOpen, onClose, onOpenLogin, onOpenRegister, lang, theme, profileImage }) => {
  const { user, logout } = useAuth();
  
  // Determinar si es invitado
  const isGuest = !user || user?.isGuest || user?.username === 'Invitado' || user?.username === 'Guest';
  
  const t = {
    home: lang === 'es' ? 'Inicio' : 'Acasă',
    meds: lang === 'es' ? 'Fármacos' : 'Medicamente',
    dictionary: lang === 'es' ? 'Diccionario' : 'Dicționar',
    tools: lang === 'es' ? 'Calculadoras' : 'Calculatoare',
    config: lang === 'es' ? 'Configuración' : 'Setări',
    help: lang === 'es' ? 'Ayuda' : 'Ajutor',
    logout: lang === 'es' ? 'Cerrar Sesión' : 'Deconectare',
    login: lang === 'es' ? 'Iniciar Sesión' : 'Conectare',
    register: lang === 'es' ? 'Registrarse' : 'Înregistrare',
    role: lang === 'es' ? 'Enfermera/o' : 'Asistent Medical',
    guest: lang === 'es' ? 'Invitado' : 'Invitat',
    guestRole: lang === 'es' ? 'Modo Exploración' : 'Mod Explorare'
  };

  const menuClasses = isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full";
  const overlayClasses = isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";

  // Get user display name
  const displayName = user?.firstName && user?.lastName 
    ? `${user.lastName.toUpperCase()}, ${user.firstName}`
    : user?.username || t.guest;

  const displayRole = isGuest ? t.guestRole : t.role;

  // Funciones para abrir modales
  const handleOpenLogin = () => {
    onClose();
    if (onOpenLogin) onOpenLogin();
  };

  const handleOpenRegister = () => {
    onClose();
    if (onOpenRegister) onOpenRegister();
  };

  return (
    <>
      <div 
        className={`absolute inset-0 z-40 transition-opacity duration-300 backdrop-blur-sm ${overlayClasses} ${theme === 'dark' ? 'bg-black/80' : 'bg-brand-deep/80'}`}
        onClick={onClose}
      />

      {/* CAMBIO AQUÍ: z-50 a z-[60] para estar por encima del Header */}
      <div className={`absolute top-0 left-0 h-full w-72 backdrop-blur-md text-white z-[60] transform transition-all duration-300 ease-out flex flex-col border-r ${theme === 'dark' ? 'bg-slate-800/10 border-slate-700' : 'bg-brand-primary/10 border-white/10'} ${menuClasses}`}>
        
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/10">
          <div>
            <h2 className="font-heading text-2xl tracking-wide font-bold">Enfermería</h2>
            <p className="text-xs text-brand-primary font-sub font-bold tracking-widest uppercase">PetrescuENF3</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-brand-primary">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex items-center gap-4 border-b border-white/5 bg-white/5">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-lg flex-shrink-0 bg-white">
            <img 
              src={profileImage || user?.photo || (isGuest ? "https://ui-avatars.com/api/?name=Guest&background=random" : "/images/nurse_profile.png")} 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-sub font-bold text-sm tracking-wide truncate">{displayName}</p>
            <p className="text-xs font-sub text-white/90 truncate">{displayRole}</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 font-sub">
          <ul className="space-y-1">
            <MenuItem to="/" icon={Home} label={t.home} onClick={onClose} />
            <MenuItem to="/meds" icon={Pill} label={t.meds} onClick={onClose} />
            <MenuItem to="/dictionary" icon={Book} label={t.dictionary} onClick={onClose} />
            <MenuItem to="/tools" icon={Calculator} label={t.tools} onClick={onClose} />
            <div className="my-4 border-t border-white/10 mx-2"></div>

            <MenuItem to="/settings" icon={Settings} label={t.config} onClick={onClose} />
            <MenuItem to="/help" icon={HelpCircle} label={t.help} onClick={onClose} />
          </ul>
        </nav>

        {/* Footer: Diferentes opciones según si es invitado o usuario logueado */}
        <div className="p-4 border-t border-white/10 bg-black/10">
          {isGuest ? (
            <>
              {/* Invitado: Mostrar Iniciar Sesión y Registrarse */}
              <button 
                onClick={handleOpenLogin}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-brand-primary/20 text-brand-primary hover:text-brand-dark transition-colors text-sm font-sub font-bold"
              >
                <LogIn size={18} />
                <span>{t.login}</span>
              </button>
              <button 
                onClick={handleOpenRegister}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors text-sm font-sub font-bold"
              >
                <UserPlus size={18} />
                <span>{t.register}</span>
              </button>
            </>
          ) : (
            /* Usuario logueado: Mostrar Cerrar Sesión */
            <button 
              onClick={() => {
                logout();
                onClose();
              }}
              className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white/10 text-white/90 hover:text-white transition-colors text-sm font-sub font-bold"
            >
              <LogOut size={18} />
              <span>{t.logout}</span>
            </button>
          )}
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
      className="flex items-center gap-4 px-5 py-4 text-slate-300 hover:text-white hover:bg-white/10 transition-all rounded-2xl hover:translate-x-1"
    >
      <Icon size={26} className="text-white" strokeWidth={2} />
      <span className="font-medium tracking-wide text-lg">{label}</span>
    </Link>
  </li>
);