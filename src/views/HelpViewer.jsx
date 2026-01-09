import React, { useState } from 'react';
import { 
  HelpCircle, 
  Shield, 
  Heart, 
  Globe, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp,
  Pill,
  Book,
  Calculator,
  TestTube
} from 'lucide-react';

export const HelpViewer = ({ lang }) => {
  const isEs = lang === 'es';

  // Contenido de Textos
  const t = {
    title: isEs ? "Ayuda y Soporte" : "Ajutor și Asistență",
    subtitle: isEs ? "Guía de uso y filosofía" : "Ghid de utilizare și filozofie",
    
    // Misión
    missionTitle: isEs ? "Nuestra Misión" : "Misiunea Noastră",
    missionText: isEs 
      ? "PetrescuENF3 nace con un propósito claro: cuidar en dos idiomas. Queremos eliminar las barreras lingüísticas para las enfermeras formadas en Rumanía que ejercen en España, proporcionando herramientas de seguridad clínica que dan confianza en cada decisión."
      : "PetrescuENF3 s-a născut cu un scop clar: a îngriji în două limbi. Vrem să eliminăm barierele lingvistice pentru asistentele formate în România care profesează în Spania, oferind instrumente de siguranță clinică care conferă încredere în fiecare decizie.",
    
    // Leyenda
    legendTitle: isEs ? "Simbología de la App" : "Simbologia Aplicației",
    legendItems: [
      { icon: Pill, color: "text-rose-500", title: isEs ? "Fármacos" : "Medicamente", desc: isEs ? "Guía farmacológica geriátrica y de urgencias." : "Ghid farmacologic geriatric și de urgență." },
      { icon: Book, color: "text-blue-500", title: isEs ? "Diccionario" : "Dicționar", desc: isEs ? "Traductor de términos técnicos médicos." : "Traducător de termeni tehnici medicali." },
      { icon: Calculator, color: "text-brand-primary", title: isEs ? "Calculadoras" : "Calculatoare", desc: isEs ? "Herramientas de cálculo de dosis y escalas." : "Instrumente de calcul doze și scale." },
      { icon: TestTube, color: "text-purple-500", title: isEs ? "Laboratorio" : "Laborator", desc: isEs ? "Guía de tubos y orden de extracción." : "Ghid tuburi și ordinea de recoltare." },
    ],

    // FAQ / Guía
    faqTitle: isEs ? "Preguntas Frecuentes" : "Întrebări Frecvente",
    faqs: [
      {
        qEst: "¿Cómo cambio el idioma?",
        qRo: "Cum schimb limba?",
        aEst: "Pulsa la bandera (🇪🇸/🇷🇴) en la barra superior. Esto no solo traduce el texto, sino que adapta los términos clínicos al contexto del país seleccionado.",
        aRo: "Apasă pe steagul (🇪🇸/🇷🇴) din bara superioară. Acest lucru nu doar traduce textul, ci adaptează termenii clinici la contextul țării selectate."
      },
      {
        qEst: "¿Las calculadoras son seguras?",
        qRo: "Sunt sigure calculatoarele?",
        aEst: "Sí. Hemos diseñado las calculadoras con 'límites de seguridad' para evitar errores por decimales o valores negativos. Sin embargo, SIEMPRE debes verificar el resultado con tu juicio clínico.",
        aRo: "Da. Am proiectat calculatoarele cu 'limite de siguranță' pentru a evita erorile zecimale sau valorile negative. Totuși, TREBUIE ÎNTOTDEAUNA să verifici rezultatul cu judecata ta clinică."
      },
      {
        qEst: "¿Qué hago si encuentro un error?",
        qRo: "Ce fac dacă găsesc o greșeală?",
        aEst: "Por favor, repórtalo inmediatamente. Esta app está en mejora continua y tu feedback es vital para la seguridad de todos.",
        aRo: "Te rugăm să raportezi imediat. Această aplicație este în continuă îmbunătățire și feedback-ul tău este vital pentru siguranța tuturor."
      }
    ],

    // Disclaimer
    disclaimerTitle: isEs ? "Aviso Legal Importante" : "Aviz Legal Important",
    disclaimerText: isEs
      ? "Esta aplicación es una herramienta de apoyo a la decisión clínica. NO sustituye el juicio profesional de enfermería ni las órdenes médicas. El autor no se hace responsable de errores en la administración de medicación derivados del uso de esta app. Verifica siempre las dosis según los protocolos de tu centro."
      : "Această aplicație este un instrument de suport pentru decizia clinică. NU înlocuiește judecata profesională a asistentului medical și nici ordinele medicale. Autorul nu își asumă răspunderea pentru erori în administrarea medicamentelor derivate din utilizarea acestei aplicații. Verificați întotdeauna dozele conform protocoalelor centrului dumneavoastră.",
  
    // Footer
    version: isEs ? "Versión 1.0.0 · Hecho con ❤️ para Enfermería" : "Versiunea 1.0.0 · Făcut cu ❤️ pentru Asistenți Medicali"
  };

  return (
    <div className="min-h-full bg-slate-50 font-body pb-10">
      
      {/* Header */}
      <div className="bg-brand-primary text-white p-6 shadow-lg mb-0">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle size={28} />
          <h1 className="text-2xl font-bold font-heading">{t.title}</h1>
        </div>
        <p className="opacity-90 font-sub">{t.subtitle}</p>
      </div>

      <div className="px-4 space-y-6 pt-6">
        
        {/* Misión Card */}
        <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-3 text-brand-deep">
            <Heart size={20} className="text-rose-500" />
            <h2 className="font-bold text-lg">{t.missionTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            {t.missionText}
          </p>
        </section>

        {/* Simbología */}
        <section>
          <h3 className="font-bold text-slate-800 mb-3 px-2 flex items-center gap-2">
            <Globe size={18} />
            {t.legendTitle}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {t.legendItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-slate-50 ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section>
          <h3 className="font-bold text-slate-800 mb-3 px-2">{t.faqTitle}</h3>
          <div className="space-y-3">
            {t.faqs.map((faq, idx) => (
              <FaqItem key={idx} question={isEs ? faq.qEst : faq.qRo} answer={isEs ? faq.aEst : faq.aRo} />
            ))}
          </div>
        </section>

        {/* Disclaimer - RED ZONE */}
        <section className="bg-rose-50 p-5 rounded-2xl border border-rose-100">
          <div className="flex items-center gap-2 mb-2 text-rose-700">
            <Shield size={20} />
            <h2 className="font-bold text-sm uppercase tracking-wider">{t.disclaimerTitle}</h2>
          </div>
          <p className="text-rose-800/80 text-xs leading-relaxed text-justify">
            {t.disclaimerText}
          </p>
        </section>

        {/* Footer */}
        <div className="text-center pt-4 pb-8">
          <p className="text-xs text-slate-400 font-medium">
            {t.version}
          </p>
        </div>

      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-700 text-sm md:text-base pr-4">{question}</span>
        {isOpen ? <ChevronUp size={18} className="text-slate-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 pt-0 text-slate-600 text-sm leading-relaxed animate-fadeIn">
          <div className="h-px w-full bg-slate-100 mb-3"></div>
          {answer}
        </div>
      )}
    </div>
  );
};
