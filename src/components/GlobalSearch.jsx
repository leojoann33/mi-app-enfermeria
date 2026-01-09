
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon, ChevronRight, Pill, Book, FileText, Activity, Siren, Dna, Microscope } from 'lucide-react';
import { 
  MEDS_DB, 
  VOCABULARY_DB, 
  DICTIONARY_DB, 
  PROCEDURES_DB, 
  ACRONYMS_DB,
  FIRST_AID_DB,
  LAB_PROFILES
} from '../data/index';

export const GlobalSearch = ({ lang }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const isEs = lang === 'es';

  // --- SEARCH LOGIC ---
  const results = useMemo(() => {
    if (!query || query.length < 2) return null;
    
    const q = query.toLowerCase();
    const allResults = [];

    // Helper to push results
    const addResult = (category, item, title, subtitle, link, icon) => {
      allResults.push({ category, item, title, subtitle, link, id: item.id || title, icon });
    };

    // Robust iterator
    const safeForEach = (data, callback) => {
        if (Array.isArray(data)) {
            data.forEach(callback);
        }
    };

    // 1. MEDICATIONS
    safeForEach(MEDS_DB, (med) => {
      if (med?.name?.toLowerCase().includes(q) || med?.description?.toLowerCase().includes(q)) {
        addResult(
          isEs ? "Fármacos" : "Medication", 
          med, 
          med.name || (isEs ? "Fármaco" : "Med"), 
          isEs ? "Guía Farmacológica" : "Pharmacology Guide", 
          "/meds", 
          Pill
        );
      }
    });

    // 2. DICTIONARY (Deep Search in definitions too)
    safeForEach(DICTIONARY_DB, (term) => {
      const termName = isEs ? term?.term_es : term?.term_ro;
      const def = isEs ? term?.def_es : term?.def_ro;
      if (termName?.toLowerCase().includes(q) || def?.toLowerCase().includes(q)) {
        addResult(
          isEs ? "Diccionario" : "Dictionary",
          term,
          termName || "Term",
          (def?.substring(0, 60) || "") + "...",
          "/dictionary",
          Book
        );
      }
    });

    // 3. VOCABULARY
    safeForEach(VOCABULARY_DB, (item) => {
        const es = item?.es?.toLowerCase();
        const ro = item?.ro?.toLowerCase();
        if (es?.includes(q) || ro?.includes(q)) {
            addResult(
                isEs ? "Vocabulario" : "Vocabulary",
                item,
                isEs ? item.es : item.ro,
                isEs ? `RO: ${item.ro}` : `ES: ${item.es}`,
                "/vocab",
                FileText
            )
        }
    });

    // 4. PROCEDURES
    safeForEach(PROCEDURES_DB, (proc) => {
       const title = isEs ? proc?.title_es : proc?.title_mo;
       if (title?.toLowerCase().includes(q)) {
           addResult(
               isEs ? "Técnicas" : "Procedures",
               proc,
               title,
               isEs ? "Protocolo Enfermería" : "Nursing Protocol",
               "/procedures",
               Activity
           )
       }
    });

    // 6. ACRONYMS
    safeForEach(ACRONYMS_DB, (acro) => {
        if (acro?.term?.toLowerCase().includes(q) || acro?.def?.toLowerCase().includes(q)) {
             addResult(
                isEs ? "Siglas" : "Acronyms",
                acro,
                acro.term,
                acro.def,
                "/acronyms",
                FileText
             )
        }
    });
    
    // 7. LAB PROFILES
    safeForEach(LAB_PROFILES, (lab) => {
        const name = isEs ? lab?.nombre : "Lab Profile"; 
        if (name?.toLowerCase().includes(q)) {
             addResult(
                 isEs ? "Laboratorio" : "Laboratory",
                 lab,
                 name,
                 isEs ? "Perfil Analítico" : "Lab Profile",
                 "/lab",
                 Microscope
             )
        }
    });

    // 8. URGENCIAS (Complex Object: Triaje + Carro)
    if (FIRST_AID_DB) {
        // Triaje Levels
        safeForEach(FIRST_AID_DB.triaje?.levels, (level) => {
             const name = isEs ? level?.nameES : level?.nameRO;
             const desc = isEs ? level?.descES : level?.descRO;
             if (name?.toLowerCase().includes(q) || desc?.toLowerCase().includes(q)) {
                 addResult("Urgencias", level, name, desc, "/emergency", Siren);
             }
        });

        // Carro de Paradas
        const carroTitle = isEs ? FIRST_AID_DB.carro?.titleES : FIRST_AID_DB.carro?.titleRO;
        if (carroTitle?.toLowerCase().includes(q)) {
            addResult("Urgencias", FIRST_AID_DB.carro, carroTitle, "Checklist", "/emergency", Siren);
        }
        
        // Drawers items
        safeForEach(FIRST_AID_DB.carro?.drawers, (drawer) => {
             safeForEach(drawer?.items, (item) => {
                 if (item?.name?.toLowerCase().includes(q)) {
                     addResult("Urgencias", item, item.name, carroTitle, "/emergency", Siren);
                 }
             });
        });
    }

    return allResults;
  }, [query, isEs]);


  return (
    <div className="min-h-screen bg-slate-50 pb-32 relative">
       {/* HEADER */}
       <div className="bg-white sticky top-0 z-50 px-4 py-3 shadow-sm border-b border-slate-100">
         <div className="flex items-center gap-3 mb-2">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-600">
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-bold text-slate-800">
                {isEs ? "Búsqueda Global" : "Căutare Globală"}
            </h1>
         </div>
         
         {/* SEARCH INPUT */}
         <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isEs ? "Buscar en toda la app..." : "Caută în toată aplicația..."}
                className="w-full bg-slate-100 text-slate-800 pl-12 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-[#003BD1]/20 focus:bg-white transition-all text-base border-none font-medium placeholder:text-slate-400"
            />
         </div>
       </div>

       {/* RESULTS AREA */}
       <div className="p-4">
          {!query && (
              <div className="flex flex-col items-center justify-center mt-20 text-slate-300">
                  <SearchIcon size={64} strokeWidth={1} className="mb-4 text-slate-200" />
                  <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
                      {isEs ? "Explora el conocimiento" : "Explorează cunoașterea"}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 text-center max-w-[200px]">
                      {isEs ? "Escribe para buscar en fármacos, diccionario, técnicas y más." : "Scrie pentru a căuta în medicamente, dicționar, proceduri și altele."}
                  </p>
              </div>
          )}

          {query && query.length < 2 && (
               <p className="text-center text-slate-400 mt-10 text-sm">
                   {isEs ? "Escribe al menos 2 caracteres..." : "Scrie cel puțin 2 caractere..."}
               </p>
          )}

          {results && results.length === 0 && (
              <div className="flex flex-col items-center mt-20">
                  <p className="text-slate-500 font-medium">
                      {isEs ? "No se encontraron resultados" : "Niciun rezultat găsit"}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">"{query}"</p>
              </div>
          )}

          {/* RESULTS LIST */}
          <div className="space-y-3">
              {results && results.map((res, idx) => (
                  <Link 
                    key={idx} 
                    to={res.link}
                    className="block bg-white rounded-2xl p-4 shadow-sm border border-slate-100 active:scale-[0.98] transition-transform"
                  >
                      <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                              res.category === 'Fármacos' ? 'bg-blue-100 text-blue-600' :
                              res.category === 'Diccionario' ? 'bg-indigo-100 text-indigo-600' :
                              res.category === 'Urgencias' ? 'bg-red-100 text-red-600' :
                              'bg-green-100 text-green-600'
                          }`}>
                              <res.icon size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-bold text-slate-800 truncate">{res.title}</h3>
                              <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{res.subtitle}</p>
                              <div className="mt-2 flex items-center gap-2">
                                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                                      {res.category}
                                  </span>
                              </div>
                          </div>
                          <ChevronRight size={16} className="text-slate-300 mt-2" />
                      </div>
                  </Link>
              ))}
          </div>
       </div>
    </div>
  );
};
