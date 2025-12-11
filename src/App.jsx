import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { 
  Menu, Search, Globe, Calculator, HeartPulse, Pill, 
  BriefcaseMedical, Syringe, Zap, GraduationCap, BookA, 
  WholeWord, PlayCircle, Gamepad2, ChevronRight, Bell
} from 'lucide-react';

import { MedsViewer } from './MedsViewer';
import { CalculatorsManager } from './Calculators';
import { SideMenu } from './SideMenu';
import { ItemsViewer } from './ItemsViewer';
import { CourseViewer } from './CourseViewer';
import { MultimediaViewer } from './MultimediaViewer';
import { AcronymsViewer } from './AcronymsViewer'; // IMPORTACIÓN NUEVA
import { CART_DB, PROCEDURES_DB, FIRST_AID_DB } from './data/index';

// --- DATOS DE NOTICIAS (Ejemplo) ---
const NEWS_ITEMS = [
  {
    id: 1,
    tag: 'ACTUALIDAD',
    date: '10 OCT',
    title: 'Nuevos protocolos de RCP 2024',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500',
    desc: 'Actualización de las guías europeas para soporte vital avanzado.'
  },
  {
    id: 2,
    tag: 'FARMACOLOGÍA',
    date: '08 OCT',
    title: 'Alerta: Cambios en dilución de Amiodarona',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500',
    desc: 'Nueva evidencia sobre la estabilidad en sueros glucosados.'
  },
  {
    id: 3,
    tag: 'CONGRESO',
    date: '01 OCT',
    title: 'Jornadas de Enfermería Quirúrgica',
    img: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ff?auto=format&fit=crop&q=80&w=500',
    desc: 'Abierto el plazo de inscripción para el congreso nacional.'
  }
];

// --- COMPONENTE BOTÓN IDIOMA ---
export const LangButton = ({ lang, toggleLang, className = "" }) => (
  <button 
    onClick={toggleLang} 
    className={`flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors text-white border border-white/20 font-sub shrink-0 ml-auto ${className}`}
  >
    <Globe size={16} />
    <span className="text-xs font-bold tracking-wider">{lang.toUpperCase()}</span>
  </button>
);

// --- COMPONENTE TARJETA DE NOTICIA ---
const NewsCard = ({ item }) => (
  <div className="min-w-[280px] w-[280px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden snap-start hover:shadow-md transition-shadow cursor-pointer group">
    <div className="h-32 w-full overflow-hidden relative">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-2 left-2 bg-brand-deep/90 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm">
        {item.tag}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
        <span className="text-xs font-bold text-slate-400">{item.date}</span>
      </div>
      <h3 className="font-heading font-bold text-slate-800 leading-tight mb-2 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-xs text-slate-500 line-clamp-2 font-medium">
        {item.desc}
      </p>
    </div>
  </div>
);

// --- PANTALLA DE INICIO ---
const HomePage = ({ onOpenMenu, lang, toggleLang }) => {
  const isEs = lang === 'es';

  // Textos
  const t = {
    newsTitle: isEs ? 'Noticias y Actualizaciones' : 'Știri și Actualizări',
    viewAll: isEs ? 'Ver todo' : 'Vezi tot',
    
    // SECCIÓN CURSO
    curso: isEs ? 'CURSO COMPLETO' : 'CURS COMPLET',
    cursoSub: isEs ? 'Formación Enfermera Avanzada' : 'Formare Asistent Avansat',

    // SECCIONES
    secStudy: isEs ? 'Zona de Estudio' : 'Zona de Studiu',
    secClinic: isEs ? 'Práctica Clínica' : 'Practică Clinică',

    // BOTONES
    vocab: isEs ? 'Vocabulario' : 'Vocabular',
    siglas: isEs ? 'Siglas' : 'Abrevieri',
    media: isEs ? 'Multimedia' : 'Multimedia',
    juego: isEs ? 'Juego' : 'Joc',
    
    meds: isEs ? 'Fármacos' : 'Medicamente',
    calc: isEs ? 'Calculadoras' : 'Calculatoare',
    cart: isEs ? 'Material' : 'Materiale',
    procs: isEs ? 'Técnicas' : 'Tehnici',
    aid: isEs ? 'URGENCIAS VITALES' : 'URGENȚE VITALE'
  };

  const squareBtnStyle = "bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm border border-slate-100 aspect-square active:scale-95 transition-all group hover:border-brand-primary/30 hover:shadow-md";
  const iconStyle = "w-8 h-8 mb-2 text-slate-600 group-hover:text-brand-primary group-hover:scale-110 transition-transform duration-300";
  const labelStyle = "text-[10px] font-sub font-bold uppercase tracking-wider leading-tight text-slate-600 group-hover:text-brand-deep";

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body overflow-y-auto no-scrollbar">
      
      {/* HEADER */}
      <header className="bg-brand-primary px-5 py-4 flex items-center shadow-lg sticky top-0 z-50">
        <button onClick={onOpenMenu} className="opacity-90 hover:opacity-100 text-white p-1 -ml-1"><Menu size={26} /></button>
        <div className="flex-1 ml-4">
          <h1 className="text-lg font-heading font-black tracking-wide text-white leading-none">Petrescu-ENF2</h1>
          <p className="text-[10px] text-brand-light/80 font-bold tracking-widest uppercase">Professional Assistant</p>
        </div>
        <button className="text-white/80 hover:text-white mr-3"><Bell size={20} /></button>
        <LangButton lang={lang} toggleLang={toggleLang} />
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 pb-10 space-y-6">

        {/* 1. SECCIÓN NOTICIAS (CARRUSEL) */}
        <div className="pt-6">
          <div className="px-5 flex justify-between items-end mb-4">
            <h2 className="font-heading font-bold text-slate-800 text-sm uppercase tracking-wide border-l-4 border-brand-primary pl-3">
              {t.newsTitle}
            </h2>
            <button className="text-brand-primary text-xs font-bold flex items-center hover:underline">
              {t.viewAll} <ChevronRight size={14} />
            </button>
          </div>
          
          {/* Scroll Horizontal Container */}
          <div className="flex overflow-x-auto gap-4 px-5 pb-4 snap-x mandatory no-scrollbar">
            {NEWS_ITEMS.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        </div>

        <div className="px-5 space-y-6">
            
            {/* 2. CURSO (Destacado Principal) */}
            <Link to="/curso" className="block bg-gradient-to-r from-brand-deep to-brand-dark rounded-2xl p-1 shadow-lg active:scale-[0.99] transition-transform group">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-5 backdrop-blur-sm">
                    <div className="bg-white/10 p-3 rounded-full text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap size={28} strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-lg font-heading font-black text-white uppercase tracking-widest mb-1">{t.curso}</h3>
                        <p className="text-xs font-sub text-brand-light opacity-90">{t.cursoSub}</p>
                    </div>
                    <div className="ml-auto bg-brand-primary p-2 rounded-lg text-white shadow-lg">
                        <PlayCircle size={20} fill="currentColor" className="text-white" />
                    </div>
                </div>
            </Link>

            {/* 3. ZONA DE ESTUDIO (Grid 4) */}
            <div>
                <h4 className="text-xs font-sub font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">{t.secStudy}</h4>
                <div className="grid grid-cols-4 gap-3">
                    <Link to="/vocab" className={squareBtnStyle}>
                        <BookA className={iconStyle} />
                        <span className={labelStyle}>{t.vocab}</span>
                    </Link>
                    <Link to="/siglas" className={squareBtnStyle}>
                        <WholeWord className={iconStyle} />
                        <span className={labelStyle}>{t.siglas}</span>
                    </Link>
                    <Link to="/media" className={squareBtnStyle}>
                        <PlayCircle className={iconStyle} />
                        <span className={labelStyle}>{t.media}</span>
                    </Link>
                    <Link to="/game" className={squareBtnStyle}>
                        <Gamepad2 className={iconStyle} />
                        <span className={labelStyle}>{t.juego}</span>
                    </Link>
                </div>
            </div>

            {/* 4. HERRAMIENTAS CLÍNICAS (Grid 2x2 Grande) */}
            <div>
                <h4 className="text-xs font-sub font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">{t.secClinic}</h4>
                <div className="grid grid-cols-2 gap-3">
                    <Link to="/meds" className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 active:scale-95 transition-transform group hover:border-blue-200">
                        <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Pill size={24} />
                        </div>
                        <span className="font-heading font-bold text-sm text-slate-700 uppercase">{t.meds}</span>
                    </Link>

                    <Link to="/tools" className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 active:scale-95 transition-transform group hover:border-emerald-200">
                        <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Calculator size={24} />
                        </div>
                        <span className="font-heading font-bold text-sm text-slate-700 uppercase">{t.calc}</span>
                    </Link>

                    <Link to="/cart" className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 active:scale-95 transition-transform group hover:border-teal-200">
                        <div className="bg-teal-50 text-teal-600 p-3 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <BriefcaseMedical size={24} />
                        </div>
                        <span className="font-heading font-bold text-sm text-slate-700 uppercase">{t.cart}</span>
                    </Link>

                    <Link to="/procs" className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 active:scale-95 transition-transform group hover:border-purple-200">
                        <div className="bg-purple-50 text-purple-600 p-3 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Syringe size={24} />
                        </div>
                        <span className="font-heading font-bold text-sm text-slate-700 uppercase">{t.procs}</span>
                    </Link>
                </div>
            </div>

            {/* 5. BOTÓN URGENCIAS (Banner) */}
            <Link to="/aid" className="flex items-center justify-between bg-red-600 rounded-2xl p-5 shadow-lg shadow-red-200 text-white active:scale-95 transition-transform mt-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full animate-pulse">
                        <HeartPulse size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h3 className="font-heading font-black text-lg uppercase tracking-widest leading-none">{t.aid}</h3>
                        <p className="text-[10px] font-bold opacity-90 mt-1">Protocolos de Soporte Vital</p>
                    </div>
                </div>
                <ChevronRight size={24} className="opacity-80" />
            </Link>

        </div>
      </div>
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('es');

  const toggleLang = () => setLang(prev => prev === 'es' ? 'ro' : 'es');

  return (
    <div className="app-container bg-white">
      <Router>
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} lang={lang} />
        <Routes>
          <Route path="/" element={<HomePage onOpenMenu={() => setIsMenuOpen(prev => !prev)} lang={lang} toggleLang={toggleLang} />} />
          
          <Route path="/meds" element={<MedsViewer lang={lang} toggleLang={toggleLang} />} />
          <Route path="/tools" element={<CalculatorsManager lang={lang} toggleLang={toggleLang} />} />
          
          <Route path="/cart" element={
             <ItemsViewer 
                data={CART_DB} 
                title={lang==='es'?"Carrito de Curas":"Cărucior"} 
                subtitle={lang==='es'?"Material":"Materiale"} 
                colorClass="bg-teal-700" 
                textClass="text-white"
                icon={BriefcaseMedical} 
                lang={lang} 
                toggleLang={toggleLang}
             />
          } />
          
          <Route path="/procs" element={
             <ItemsViewer 
                data={PROCEDURES_DB} 
                title={lang==='es'?"Guías Técnicas":"Ghiduri"} 
                subtitle={lang==='es'?"Procedimientos":"Proceduri"} 
                colorClass="bg-brand-dark" 
                textClass="text-white"
                icon={Syringe} 
                lang={lang}
                toggleLang={toggleLang} 
             />
          } />
          
          <Route path="/aid" element={
            <ItemsViewer 
              data={FIRST_AID_DB} 
              title={lang==='es' ? "Urgencias" : "Urgențe"} 
              subtitle={lang==='es' ? "Primeros Auxilios" : "Prim Ajutor"} 
              colorClass="bg-red-600" 
              textClass="text-white"
              icon={HeartPulse} 
              lang={lang}
              toggleLang={toggleLang} 
            />
          } />

          {/* RUTA DEL CURSO */}
          <Route path="/curso" element={<CourseViewer lang={lang} toggleLang={toggleLang} />} />

          {/* RUTA MULTIMEDIA */}
          <Route path="/media" element={<MultimediaViewer lang={lang} toggleLang={toggleLang} />} />

          {/* RUTA SIGLAS (NUEVA) */}
          <Route path="/siglas" element={<AcronymsViewer lang={lang} toggleLang={toggleLang} />} />

          {/* Rutas placeholder */}
          <Route path="/vocab" element={<PlaceholderPage title="Vocabulario" lang={lang} toggleLang={toggleLang} icon={BookA} color="bg-slate-600"/>} />
          <Route path="/game" element={<PlaceholderPage title="Juego Clínico" lang={lang} toggleLang={toggleLang} icon={Gamepad2} color="bg-indigo-600"/>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

const PlaceholderPage = ({ title, lang, toggleLang, icon: Icon, color }) => (
    <div className="h-full flex flex-col bg-slate-50 font-body">
        <div className={`${color} p-4 text-white flex items-center gap-3 shadow-md`}>
            <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-white/20"><BriefcaseMedical/></Link>
            <h2 className="font-heading font-bold text-xl flex-1">{title}</h2>
            <LangButton lang={lang} toggleLang={toggleLang}/>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-10 text-slate-400 text-center animate-in slide-in-from-bottom duration-500">
            <div className="bg-slate-200 p-6 rounded-full mb-6">
              <Icon size={64} className="opacity-50 text-slate-500"/>
            </div>
            <h3 className="text-2xl font-heading font-black text-slate-700 mb-2">{lang==='es'?"En Construcción":"În Construcție"}</h3>
            <p className="text-sm font-sub max-w-[250px] leading-relaxed">{lang==='es'?"Estamos preparando el mejor contenido formativo para ti.":"Pregătim cel mai bun conținut educațional pentru tine."}</p>
        </div>
    </div>
);