import React from 'react';
import { 
  Settings, 
  Globe, 
  Moon, 
  Sun, 
  User, 
  ChevronRight, 
  Smartphone, 
  Database,
  Trash2,
  Camera
} from 'lucide-react';

export const SettingsViewer = ({ lang, toggleLang, theme, toggleTheme, activeProfile, setActiveProfile, specialty, setSpecialty, profileImage, setProfileImage }) => {
  const isEs = lang === 'es';
  const isDark = theme === 'dark';

  const SPECIALTIES = [
    { id: 'general', es: 'Cuidados Generales', ro: 'Îngrijiri Generale' },
    { id: 'matrona', es: 'Obstétrico-Ginecológica (Matrona)', ro: 'Moașă / Obstetrică-Ginecologie' },
    { id: 'mental', es: 'Salud Mental', ro: 'Sănătate Mintală' },
    { id: 'geriatria', es: 'Geriátrica', ro: 'Geriatrie' },
    { id: 'trabajo', es: 'Del Trabajo', ro: 'Medicina Muncii' },
    { id: 'med_quir', es: 'Cuidados Médico-Quirúrgicos', ro: 'Medico-Chirurgicale' },
    { id: 'familiar', es: 'Familiar y Comunitaria', ro: 'Familie și Comunitară' },
    { id: 'pediatria', es: 'Pediátrica', ro: 'Pediatrie' },
    { id: 'uci', es: 'Cuidados Intensivos (UCI)', ro: 'Terapie Intensivă (ATI)' },
    { id: 'neonatal', es: 'Neonatal', ro: 'Neonatologie' },
    { id: 'onco', es: 'Oncológica', ro: 'Oncologie' },
    { id: 'urgencias', es: 'Urgencias', ro: 'Urgențe' },
    { id: 'paliativos', es: 'Cuidados Paliativos', ro: 'Îngrijiri Paliative' },
    { id: 'gestion', es: 'Dirección y Gestión', ro: 'Management Sanitar' },
  ];

  // Textos
  const t = {
    title: isEs ? "Configuración" : "Setări",
    subtitle: isEs ? "Personaliza tu experiencia" : "Personalizează-ți experiența",
    
    // Secciones
    general: isEs ? "General" : "General",
    account: isEs ? "Perfil Profesional" : "Profil Profesional",
    data: isEs ? "Datos y Almacenamiento" : "Date și Stocare",
    
    // Opciones
    language: isEs ? "Idioma de la App" : "Limba Aplicației",
    theme: isEs ? "Tema Visual" : "Temă Vizuală",
    themeDesc: isEs ? (isDark ? "Modo Oscuro Activo" : "Modo Claro Activo") : (isDark ? "Mod Întunecat Activ" : "Mod Luminos Activ"),
    
    profile: isEs ? "Rol Activo" : "Rol Activ",
    profile: isEs ? "Rol Activo" : "Rol Activ",
    changePhoto: isEs ? "Cambiar Foto" : "Schimbă Foto",
    specialty: isEs ? "Especialidad" : "Specialitate",
    nursing: isEs ? "Enfermería" : "Asistent Medical",
    
    clearCache: isEs ? "Borrar datos locales" : "Șterge date locale",
    version: isEs ? "Versión 1.0.0 (Build 2026.1)" : "Versiunea 1.0.0 (Build 2026.1)"
  };

  // Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-full font-body pb-10 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Header Full Width */}
      <div className="bg-brand-primary text-white p-6 shadow-lg mb-0">
        <div className="flex items-center gap-3 mb-2">
          <Settings size={28} />
          <h1 className="text-2xl font-bold font-heading">{t.title}</h1>
        </div>
        <p className="opacity-90 font-sub">{t.subtitle}</p>
      </div>

      <div className="px-4 space-y-8 pt-8">
        
        {/* Sección: General */}
        <section>
          
          {/* Profile Picture Upload - Prominent */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative group">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-200">
                 <img 
                    src={profileImage || "/images/nurse_profile.png"} 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                 />
              </div>
              <label className="absolute bottom-0 right-0 p-2 bg-brand-primary text-white rounded-full shadow-lg cursor-pointer hover:bg-brand-deep transition-colors active:scale-90">
                <Camera size={20} />
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                />
              </label>
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium tracking-wide uppercase">{t.changePhoto}</p>
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">{t.general}</h3>
          
          <div className={`rounded-xl overflow-hidden border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            
            {/* Language Toggle */}
            <div className={`p-4 flex items-center justify-between border-b ${isDark ? 'border-slate-700' : 'border-slate-50'}`}>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.language}</p>
                  <p className="text-xs opacity-60">{lang === 'es' ? 'Español (España)' : 'Română (România)'}</p>
                </div>
              </div>
              <button 
                onClick={toggleLang}
                className="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                <div className={`absolute left-1 h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform ${lang === 'ro' ? 'translate-x-6' : 'translate-x-0'} flex items-center justify-center text-[10px]`}>
                  {lang === 'es' ? '🇪🇸' : '🇷🇴'}
                </div>
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-500'}`}>
                  {isDark ? <Moon size={20} /> : <Sun size={20} />}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.theme}</p>
                  <p className="text-xs opacity-60">{t.themeDesc}</p>
                </div>
              </div>
              <button 
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isDark ? 'bg-brand-primary' : 'bg-slate-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDark ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

          </div>
        </section>

        {/* Sección: Perfil */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">{t.account}</h3>
          
          <div className={`rounded-xl overflow-hidden border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            {/* Role Fixed */}
             <div className={`p-4 flex items-center justify-between border-b ${isDark ? 'border-slate-700' : 'border-slate-50'}`}>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-brand-light text-brand-primary">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.profile}</p>
                  <p className="text-xs opacity-60">{t.nursing}</p>
                </div>
              </div>
            </div>

            {/* Specialty Selector */}
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <Database size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.specialty}</p>
                </div>
              </div>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className={`w-full p-3 rounded-lg border text-sm appearance-none outline-none focus:ring-2 focus:ring-brand-primary ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
              >
                {SPECIALTIES.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {isEs ? spec.es : spec.ro}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

         {/* Sección: Data */}
         <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">{t.data}</h3>
          
          <div className={`rounded-xl overflow-hidden border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            <button className="w-full p-4 flex items-center gap-4 text-rose-500 hover:bg-rose-50 transition-colors text-left">
              <div className="p-2 rounded-lg bg-rose-50 text-rose-500">
                <Trash2 size={20} />
              </div>
              <span className="font-bold text-sm">{t.clearCache}</span>
            </button>
          </div>
        </section>

        {/* Footer Info */}
        <div className="text-center pt-8 opacity-40">
           <div className="flex justify-center mb-2">
             <Smartphone size={24} />
           </div>
           <p className="text-xs font-mono">{t.version}</p>
           <p className="text-[10px] mt-1">Petrescu Nursing Suite</p>
        </div>

      </div>
    </div>
  );
};
