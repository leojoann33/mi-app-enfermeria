import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Menu, Globe, Battery, Wifi, Signal } from "lucide-react";

// --- 1. COMPONENTES ESTRUCTURALES ---
import { SideMenu } from "./components/SideMenu";
import { HomeDashboard } from "./views/HomeDashboard";

// --- 2. COMPONENTES (src/components) ---
// --- 2. COMPONENTES (src/components) ---
const VitalsEvaluator = React.lazy(() => import("./components/VitalsEvaluator"));
const DisclaimerModal = React.lazy(() => import("./components/DisclaimerModal").then(module => ({ default: module.DisclaimerModal })));

const DuelingoGame = React.lazy(() => import("./components/DuelingoGame").then(module => ({ default: module.DuelingoGame })));


const GlobalSearch = React.lazy(() => import("./components/GlobalSearch").then(module => ({ default: module.GlobalSearch })));

// --- 3. MÓDULOS (src/) ---
const CalculatorsManager = React.lazy(() => import("./views/CalculatorsManager").then(module => ({ default: module.CalculatorsManager })));



const MedsViewer = React.lazy(() => import("./views/MedsViewer").then(module => ({ default: module.MedsViewer })));
const LabViewer = React.lazy(() => import("./views/LabViewer").then(module => ({ default: module.LabViewer })));
const CourseViewer = React.lazy(() => import("./views/CourseViewer").then(module => ({ default: module.CourseViewer })));

const ToolsViewer = React.lazy(() => import("./views/ToolsViewer").then(module => ({ default: module.ToolsViewer })));
const VocabularyViewer = React.lazy(() => import("./views/VocabularyViewer").then(module => ({ default: module.VocabularyViewer })));
const AcronymsViewer = React.lazy(() => import("./views/AcronymsViewer").then(module => ({ default: module.AcronymsViewer })));
const DictionaryViewer = React.lazy(() => import("./views/DictionaryViewer").then(module => ({ default: module.DictionaryViewer })));
const ItemsViewer = React.lazy(() => import("./views/ItemsViewer").then(module => ({ default: module.ItemsViewer })));
const LabRequestViewer = React.lazy(() => import("./views/LabRequestViewer").then(module => ({ default: module.LabRequestViewer })));
const HelpViewer = React.lazy(() => import("./views/HelpViewer").then(module => ({ default: module.HelpViewer })));
const SettingsViewer = React.lazy(() => import("./views/SettingsViewer").then(module => ({ default: module.SettingsViewer })));


// --- 4. DATOS ---
import { PROCEDURES_DB, CART_DB, FIRST_AID_DB } from "./data/index";

/**
 * BOTÓN DE IDIOMA
 */
import { LangButton } from "./components/LangButton";
import { MainHeader } from "./components/MainHeader";
import { BottomDock } from "./components/BottomDock";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { AuthModal } from "./components/AuthModal";

function AppContent() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(!isAuthenticated);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' or 'register'
  const [lang, setLang] = useState("es");
  const [activeProfile, setActiveProfile] = useState("nursing"); // Lifted state
  const [specialty, setSpecialty] = useState(() => {
     return localStorage.getItem('specialty') || 'general';
  });
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('profileImage') || null;
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  
  // Force light theme on home page
  const isHomePage = location.pathname === '/';
  const effectiveTheme = isHomePage ? 'light' : theme;

  const toggleLang = () => setLang((prev) => (prev === "es" ? "ro" : "es"));
  
  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('specialty', specialty);
  }, [specialty]);

  useEffect(() => {
    if (profileImage) {
      localStorage.setItem('profileImage', profileImage);
    }
  }, [profileImage]);

  // Show auth modal if not authenticated
  useEffect(() => {
    setShowAuthModal(!isAuthenticated);
  }, [isAuthenticated]);

  // Funciones para abrir el modal en pestaña específica
  const openLoginModal = () => {
    setAuthModalTab('login');
    setShowAuthModal(true);
  };

  const openRegisterModal = () => {
    setAuthModalTab('register');
    setShowAuthModal(true);
  };

  return (
    <>
      {/* AUTH MODAL */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        lang={lang}
        initialTab={authModalTab}
      />
      
      <DisclaimerModal lang={lang} />
      {/* CONTENEDOR MAESTRO:
         Simula un iPhone 16 Pro (Aprox 402px x 874px lógicos).
         Usa 'dvh' para altura dinámica real en móviles.
      */}
      <div className={`relative w-full h-[100dvh] md:w-[402px] md:h-[874px] flex flex-col shadow-2xl md:rounded-[50px] overflow-hidden font-body border-[8px] ring-4 transition-colors duration-200 ${effectiveTheme === 'dark' ? 'dark bg-gray-900 border-gray-800 ring-gray-700/50' : 'bg-slate-50 border-slate-900 ring-slate-800/50'}`}>
        
        {/* ISLA DINÁMICA / STATUS BAR (Decorativo) */}
        <div className="bg-brand-primary px-6 pt-3 pb-1 flex justify-between items-center text-xs font-bold text-white/90 select-none z-50">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <Signal size={14} fill="currentColor" />
            <Wifi size={14} />
            <Battery size={18} fill="currentColor" />
          </div>
          {/* Notch Simulado */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-full hidden md:block z-50 pointer-events-none"></div>
        </div>

        {/* NUEVO HEADER VERDE */}
        {/* NUEVO HEADER VERDE */}
        <MainHeader 
          setMenuOpen={setMenuOpen} 
          lang={lang} 
          toggleLang={toggleLang}
          theme={effectiveTheme}
          toggleTheme={toggleTheme}
          showThemeToggle={!isHomePage}
        />

        {/* MENÚ LATERAL (Overlay Z-Index Alto) */}
        <SideMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onOpenLogin={openLoginModal}
          onOpenRegister={openRegisterModal}
          lang={lang}
          theme={effectiveTheme}
          profileImage={profileImage}
        />

        {/* ÁREA DE CONTENIDO PRINCIPAL (Scrollable) */}
        <div className={`flex-1 overflow-hidden relative w-full transition-colors duration-200 ${effectiveTheme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}>
          <div className="w-full h-full overflow-y-auto scroll-smooth pb-32">
            <Suspense fallback={
              <div className={`flex h-full items-center justify-center transition-colors duration-200 ${effectiveTheme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomeDashboard lang={lang} activeProfile={activeProfile} setActiveProfile={setActiveProfile} theme="light" />} />

                <Route path="/vitals" element={<VitalsEvaluator lang={lang} />} />
                <Route path="/calc" element={<CalculatorsManager lang={lang} toggleLang={toggleLang} />} />
                <Route path="/meds" element={<MedsViewer lang={lang} toggleLang={toggleLang} />} />
                <Route path="/lab" element={<LabViewer lang={lang} toggleLang={toggleLang} />} />

                <Route path="/vocab" element={<VocabularyViewer lang={lang} activeProfile={activeProfile} />} />
                <Route path="/acronyms" element={<AcronymsViewer lang={lang} />} />
                <Route path="/dictionary" element={<DictionaryViewer lang={lang} />} />

                <Route path="/tools" element={<ToolsViewer lang={lang} toggleLang={toggleLang} />} />
                <Route path="/procedures" element={<ItemsViewer data={PROCEDURES_DB} title={lang === "es" ? "Procedimientos" : "Proceduri"} type="steps" lang={lang} />} />
                <Route path="/cart" element={<ItemsViewer data={CART_DB} title={lang === "es" ? "Carro de Curas" : "Cărucior Tratamente"} lang={lang} />} />
                <Route path="/emergency" element={<ItemsViewer data={FIRST_AID_DB} title={lang === "es" ? "Urgencias y Triaje" : "Urgențe și Triaj"} lang={lang} />} />

                <Route path="/course" element={<CourseViewer lang={lang} theme={theme} />} />
                <Route path="/quiz" element={<DuelingoGame lang={lang} toggleLang={toggleLang} />} />


                <Route path="/search" element={<GlobalSearch lang={lang} />} />
                <Route path="/request" element={<LabRequestViewer lang={lang} toggleLang={toggleLang} />} />
                <Route path="/help" element={<HelpViewer lang={lang} />} />
                <Route path="/settings" element={
                  <SettingsViewer 
                    lang={lang} 
                    toggleLang={toggleLang} 
                    theme={effectiveTheme} 
                    toggleTheme={toggleTheme}
                    activeProfile={activeProfile}
                    setActiveProfile={setActiveProfile}
                    specialty={specialty}
                    setSpecialty={setSpecialty}
                    profileImage={profileImage}
                    setProfileImage={setProfileImage}
                  />
                } />

              </Routes>
            </Suspense>
          </div>
        </div>

        {/* BOTTOM DOCK FLOTANTE */}
        <BottomDock lang={lang} theme={effectiveTheme} />
        

        
      </div>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

// Subcomponente Header
const TopBarWrapper = ({ setMenuOpen, lang, toggleLang }) => {
  const location = useLocation();
  if (location.pathname === "/quiz") return null;

  return (
    <div className="bg-white px-4 py-2 flex justify-between items-center shadow-sm z-30 sticky top-0 border-b border-slate-100 w-full">
      <button
        onClick={() => setMenuOpen(true)}
        className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-700 transition active:scale-90"
      >
        <Menu size={24} strokeWidth={2.5} />
      </button>

      <div className="flex flex-col items-center">
        <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase leading-none mb-0.5">
          PETRESCU
        </span>
        <span className="text-sm font-black text-indigo-600 tracking-tighter leading-none">
          ENF3
        </span>
      </div>

      <LangButton lang={lang} toggleLang={toggleLang} />
    </div>
  );
};
