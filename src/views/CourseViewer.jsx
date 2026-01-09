import React, { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronRight,
  CheckCircle,
  PlayCircle,
  AlertTriangle,
  Info,
  Image as ImageIcon,
  Folder
} from "lucide-react";

// Módulos importados desde el índice central
import { 
    COURSE_SYLLABUS, 
    UNIFIED_COURSE_CONTENT,
    MODULE_1_LESSON_1
} from "../data/index";

export const CourseViewer = ({ lang = "es", theme }) => {
  const [activePartId, setActivePartId] = useState(COURSE_SYLLABUS[0].id);
  const [activeModuleId, setActiveModuleId] = useState(COURSE_SYLLABUS[0].modules[0].id);
  const [activeLessonId, setActiveLessonId] = useState(COURSE_SYLLABUS[0].modules[0].topics?.[0]?.id || null);

  // Determine active content
  const activePart = COURSE_SYLLABUS.find(p => p.id === activePartId) || COURSE_SYLLABUS[0];
  const activeModules = activePart?.modules || [];
  
  const activeModule = activeModules.find(m => m.id === activeModuleId) || activeModules[0];
  const activeLesson = activeModule?.topics?.find(t => t.id === activeLessonId) || activeModule?.topics?.[0];

  // Helper para obtener texto según idioma (ES o RO)
  const getLangKey = (prefix) => `${prefix}${lang.toUpperCase()}`;
  const getText = (obj, prefix = "text") => obj[getLangKey(prefix)];
  const getTitle = (obj) => obj[getLangKey("title")];
  

  const isEs = lang === "es";

  // THEME ENGINE: PETRESCUENF3 VISUAL IDENTITY
  // Primary Identifiers
  const isExpert = (activeLessonId && activeLessonId.startsWith("master-")) || (activePartId === "part_4") || (activePartId === "part_5") || (activePartId === "part_6");
  const isClinical = (activePartId === "part_7");

  // New Palette
  // #379B7F (Jade) - Primary
  // #164C84 (Deep Blue) - Headers/Text
  // #E9B82B (Gold) - Alerts
  // #469A7C (Soft Jade) - Secondary

  // Values
  let themeColor = "text-[#164C84]"; // Default Deep Blue
  let borderColor = "border-[#379B7F]"; // Default Jade Border
  let bgHeader = "bg-[#164C84]"; // Default Deep Blue Header
  let accentColor = "text-[#379B7F]"; // Jade Accent

  if (isExpert) {
    themeColor = "text-[#800020]"; // Burgundy (Keep for Expert distinction or switch to Jade?) -> Keeping Burgundy for now as distinct Expert
    borderColor = "border-[#800020]";
    bgHeader = "bg-[#800020]";
    accentColor = "text-[#800020]";
  } else if (isClinical) {
    themeColor = "text-[#379B7F]"; // Jade
    borderColor = "border-[#379B7F]"; 
    bgHeader = "bg-[#379B7F]";
    accentColor = "text-[#164C84]";
  }

  // --- MOTOR DE RENDERIZADO DE BLOQUES (PETRESCUENF3 ENGINE) ---
  const renderBlock = (block, index) => {
    // Si el bloque es solo un string (como los marcadores de imagen)
    if (typeof block === "string" && block.startsWith("[Image")) {
      return (
        <div
          key={index}
          className="my-6 p-4 bg-slate-50 border border-slate-300 flex flex-col items-center justify-center text-slate-500"
        >
          <ImageIcon size={24} className={`mb-2 ${accentColor}`} />
          <span className={`text-xs font-harrison-sans font-bold uppercase tracking-wider ${accentColor}`}>
             FIGURE {index + 1}
          </span>
          <span className="text-xs font-harrison-serif italic mt-1">{block}</span>
        </div>
      );
    }

    switch (block.type) {
      case "heading":
        // IFKB Style: Dynamic heading levels
        const HeadingTag = `h${block.level || 2}`;
        const headingClasses = {
          1: "text-2xl font-harrison-sans font-black text-[#164C84] uppercase mt-8 mb-4 border-b-4 border-[#379B7F] pb-2", // Deep Blue text, Jade border
          2: "text-xl font-harrison-sans font-bold text-[#164C84] uppercase mt-6 mb-3 border-b-2 border-[#379B7F] pb-1",
          3: "text-lg font-harrison-sans font-bold text-[#164C84] uppercase mt-5 mb-2",
          4: "text-base font-harrison-sans font-semibold text-slate-700 mt-4 mb-2"
        };
        return React.createElement(
          HeadingTag,
          { key: index, className: headingClasses[block.level] || headingClasses[2] },
          getText(block)
        );

      case "h3":
        // Clinical Style Header
        return (
          <h3
            key={index}
            className="text-[#164C84] font-harrison-sans font-bold text-lg uppercase tracking-tight mt-8 mb-3 border-b-2 border-[#379B7F] pb-1"
          >
            {getText(block)}
          </h3>
        );

      case "paragraph":
      case "p":
        // Standard paragraph
        return (
          <p key={index} className="font-harrison-serif text-[16px] text-[#164C84] leading-relaxed text-justify mb-4">
            {getText(block)}
          </p>
        );

      case "separator":
        return (
          <hr key={index} className="my-6 border-t-2 border-slate-200" />
        );

      case "code":
        return (
          <pre key={index} className="bg-slate-100 border border-slate-300 p-4 rounded my-4 overflow-x-auto">
            <code className="font-mono text-sm text-slate-800">
              {getText(block)}
            </code>
          </pre>
        );

      case "list":
        return (
          <ul
            key={index}
            className="list-none space-y-2 mb-6 text-[#164C84] font-harrison-serif text-[16px] leading-relaxed"
          >
            {block.items.map((item, idx) => {
              // RESOLVE ITEM TEXT
              let content = "";
              if (typeof item === "string") {
                  content = item;
              } else if (item[lang]) {
                  content = item[lang];
              } else {
                  content = item[lang === 'es' ? 'textES' : 'textRO'];
              }

              // RENDER ITEM (with Icon support if present, else bullet)
              return (
                <li key={idx} className="flex gap-3 items-start">
                   <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#379B7F]"></span>
                   <span>{content}</span>
                </li>
              );
            })}
          </ul>
        );
      
      case "video":
        // New Video Block Support
        return (
            <div key={index} className="my-8 rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-black">
                <video 
                    controls 
                    className="w-full aspect-video"
                    poster={block.poster}
                >
                    <source src={block.src} type="video/mp4" />
                    El navegador no soporta video.
                </video>
                <div className="p-3 bg-[#164C84] text-white text-xs font-harrison-sans uppercase tracking-widest text-center">
                    {lang === 'es' ? (block.captionES || "Video Clínico") : (block.captionRO || "Video Clinic")}
                </div>
            </div>
        );
      
      case "image":
        // Enhanced Image Block
         return (
             <div key={index} className="my-8">
                 <div className="rounded-lg overflow-hidden shadow-md border border-slate-200">
                     <img 
                        src={block.src} 
                        alt={lang === 'es' ? block.captionES : block.captionRO}
                        className="w-full h-auto object-cover"
                     />
                 </div>
                 { (block.captionES || block.captionRO) && (
                     <div className="mt-2 text-xs font-harrison-sans font-bold text-[#164C84] uppercase tracking-wide text-center">
                         {lang === 'es' ? block.captionES : block.captionRO}
                     </div>
                 )}
             </div>
         );

      case "alert":
        // Update Alert colors: Gold for Warning, Red for Danger, Blue for Info
        const variant = block.variant || "info";
        // Petrescu Palette: Warning = Gold (#E9B82B), Danger = Red, Info = Jade/Blue
        let alertBg = "bg-blue-50";
        let alertBorder = "border-[#164C84]";
        let alertIconColor = "text-[#164C84]";
        
        if (variant === "warning") {
            alertBg = "bg-[#FFF9C4]"; // Light Yellow
            alertBorder = "border-[#E9B82B]"; // Gold
            alertIconColor = "text-[#E9B82B]";
        } else if (variant === "danger") {
             alertBg = "bg-red-50";
             alertBorder = "border-red-500";
             alertIconColor = "text-red-500";
        }

        const boxTitle = variant === "danger" || variant === "warning" ? (isEs ? "ALERTA CLÍNICA" : "ALERTĂ CLINICĂ") : (isEs ? "NOTA CLÍNICA" : "NOTĂ CLINICĂ");
        
        return (
          <div
            key={index}
            className={`my-6 border-l-4 p-5 shadow-sm rounded-r-lg ${alertBg} ${alertBorder}`}
          >
            <div className="flex items-center gap-2 mb-2 border-b border-black/5 pb-2">
                <AlertTriangle size={18} className={alertIconColor} strokeWidth={2.5} />
                <span className={`font-harrison-sans font-bold text-xs uppercase tracking-widest ${alertIconColor}`}>
                    {boxTitle}
                </span>
            </div>
            <div className="font-harrison-serif text-[15px] text-slate-800 leading-relaxed">
                {getText(block)}
            </div>
          </div>
        );

      case "table":
        // Clinical Tables: Traditional Medical Tables
        return (
          <div key={index} className="my-8">
            <h4 className="font-harrison-sans font-bold text-xs uppercase tracking-widest text-[#003366] mb-2">
                {isEs ? `TABLA ${index + 1}` : `TABELUL ${index + 1}`}
            </h4>
            <div className="overflow-x-auto border-t-2 border-b-2 border-slate-800">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#E8E8E8] text-slate-900 font-harrison-sans font-bold text-xs uppercase border-b border-slate-400">
                  <tr>
                    {(block.headers?.[lang] || (lang === 'es' ? block.headersES : block.headersRO) || []).map((h, i) => (
                      <th key={i} className="px-3 py-2 border-r border-slate-300 last:border-0 align-bottom text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-harrison-serif text-slate-900 text-[13px]">
                  {block.rows.map((row, rIdx) => {
                    // RESOLVE ROW DATA (Schema A: col1/col2 object keys | Schema B: colsES/colsRO arrays)
                    let c1, c2, c3;

                    if (row.colsES || row.colsRO) {
                        // Schema B
                        const cols = lang === 'es' ? (row.colsES || []) : (row.colsRO || []);
                        c1 = cols[0];
                        c2 = cols[1];
                        c3 = cols[2];
                    } else {
                        // Schema A
                        c1 = typeof row.col1 === "object" ? row.col1[lang] : row.col1;
                        c2 = typeof row.col2 === "object" ? row.col2[lang] : row.col2;
                        c3 = typeof row.col3 === "object" ? row.col3[lang] : row.col3;
                    }

                    return (
                        <tr
                        key={rIdx}
                        className="border-b border-slate-200 last:border-0 odd:bg-white even:bg-slate-50"
                        >
                        {c1 && (
                            <td className="px-3 py-2 border-r border-slate-200 font-bold max-w-[150px] align-top">
                                {c1}
                            </td>
                        )}
                        {c2 && (
                            <td className="px-3 py-2 border-r border-slate-200 align-top">
                                {c2}
                            </td>
                        )}
                        {c3 && (
                            <td className="px-3 py-2 align-top">
                                {c3}
                            </td>
                        )}
                        </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
        
       case "image_placeholder":
         return (
            <div key={index} className="my-6">
                <div className="bg-slate-200 w-full h-48 flex items-center justify-center border border-slate-300">
                    <span className="text-slate-400 font-harrison-sans text-xs uppercase font-bold">
                        {isEs ? "Figura: " : "Figură: "} {block.theme}
                    </span>
                </div>
                <div className="mt-2 text-xs font-harrison-sans font-bold text-[#003366] uppercase tracking-wide">
                    {isEs ? "FIGURA" : "FIGURA"} {index+1}
                </div>
            </div>
         );

      default:
        return null;
    }
  };

  // --- VISTA 4: CONTENIDO DE LA LECCIÓN (HARRISON STYLE) ---
  if (activeLessonId) {
    // RESOLVER CONTENIDO
    // Strategy: Unified Lookup Map (Optimized)
    let lessonData = UNIFIED_COURSE_CONTENT[activeLessonId];
    
    // Fallback for Legacy/Hardcoded redirects if needed
    if (!lessonData && activeLessonId === "1-1") {
        lessonData = MODULE_1_LESSON_1;
    }



    // Si no hay contenido real, mostrar placeholder "En Construcción" estilo Harrison
    if (!lessonData) {
        return (
            <div className="flex flex-col h-full bg-white font-harrison-sans items-center justify-center text-center p-8">
                 <button onClick={() => setActiveLessonId(null)} className="absolute top-4 left-4 p-2">
                    <ArrowLeft className={themeColor} />
                 </button>
                 <BookOpen size={48} className="text-slate-200 mb-4" />
                 <h2 className={`${themeColor} font-bold uppercase tracking-widest mb-2`}>
                    {isEs ? "CONTENIDO NO DISPONIBLE" : "CONȚINUT INDISPONIBIL"}
                 </h2>
                 <p className="font-harrison-serif text-slate-500 italic max-w-xs">
                    {isEs ? "Este capítulo está siendo digitalizado según los estándares de la 18ª edición." : "Acest capitol este în curs de digitalizare conform standardelor ediției a 18-a."}
                 </p>
            </div>
        );
    }

    return (
      <div className={`flex flex-col h-full font-harrison-serif transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Header Académico Simple */}
        <div className="bg-white border-b border-slate-300 p-3 sticky top-0 z-10 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setActiveLessonId(null)}
            className={`flex items-center gap-1 ${themeColor} hover:bg-slate-50 px-2 py-1 rounded transition-colors`}
          >
            <ArrowLeft size={16} />
            <span className="text-xs font-harrison-sans font-bold uppercase tracking-widest">
                {isEs ? "Atrás" : "Înapoi"}
            </span>
          </button>
          <span className="text-[10px] font-harrison-sans font-bold text-slate-400 uppercase tracking-widest hidden md:block">
              {isExpert ? "MASTERCLASS: EXPERT WOUND CARE" : "PETRESCU MANUAL 2026"}
          </span>
        </div>

        {/* Contenido Renderizado */}
        <div className="flex-1 overflow-y-auto w-full">
            <div className="max-w-[100%] mx-auto bg-white px-5 py-8">
               <div className={`mb-8 border-b-4 ${borderColor} pb-4`}>
                   <div className="flex justify-between items-start">
                        <span className={`block ${themeColor} font-harrison-sans font-bold text-sm uppercase tracking-[0.2em] mb-1`}>
                            {isEs ? "TEMA" : "TEMA"} {activeLessonId}
                        </span>
                        {isExpert && (
                            <span className="bg-[#800020] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                                {isEs ? "NIVEL EXPERTO" : "NIVEL EXPERT"}
                            </span>
                        )}
                   </div>
                   <h1 className="text-2xl font-harrison-sans font-black text-slate-900 leading-tight uppercase">
                       {getTitle(lessonData)}
                   </h1>
                   <div className="flex items-center gap-2 mt-2 text-sm text-slate-600 font-harrison-serif italic">
                       <span>{isExpert ? "Referencia: Guía Clínica (2025)" : "Manual de Enfermería"}</span>
                       <span>•</span>
                       <span>2026 Ed.</span>
                   </div>
               </div>
               
                <div className="text-slate-900">
                  {/* Strategy A: Structured Blocks (Harrison Engine) */}
                  {Array.isArray(lessonData.content) && 
                    lessonData.content.map((block, index) => renderBlock(block, index))
                  }



                  {/* Strategy B: Fragmented Lessons (Manual 2014) */}
                  {Array.isArray(lessonData.lessons) && 
                    lessonData.lessons.map((subLesson, subIdx) => (
                      <div key={subIdx} className="mb-12 last:mb-0">
                        <h2 className="text-xl font-harrison-sans font-bold text-[#003366] uppercase tracking-tight mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                          {subLesson.icon && <subLesson.icon size={20} />}
                          {getTitle(subLesson)}
                        </h2>
                        {Array.isArray(subLesson[lang === 'es' ? 'contentES' : 'contentRO']) && 
                          subLesson[lang === 'es' ? 'contentES' : 'contentRO'].map((block, bIdx) => renderBlock(block, `sub-${subIdx}-${bIdx}`))
                        }
                      </div>
                    ))
                  }

                  {/* Strategy C: Pre-compiled HTML (Bilingual Module 1) */}
                  {!lessonData.content && !lessonData.lessons && (lessonData[`content${lang.toUpperCase()}`] || lessonData.contentES) && (
                    <div dangerouslySetInnerHTML={{ __html: lessonData[`content${lang.toUpperCase()}`] || lessonData.contentES }} />
                  )}
                </div>
            </div>
        </div>
      </div>
    );
  }

  // --- VISTA 3: LISTA DE TEMAS DEL MÓDULO ---
  if (activeModuleId) {
    // Buscar el módulo en el Syllabus
    let moduleData = null;
    let partData = null;
    
    // Find in Syllabus
    if (Array.isArray(COURSE_SYLLABUS)) {
        COURSE_SYLLABUS.forEach(part => {
            if (part && part.modules) {
                const found = part.modules.find(m => m.id === activeModuleId);
                if (found) {
                    moduleData = found;
                    partData = part;
                }
            }
        });
    }

    if (!moduleData) return <div>Error: Módulo no encontrado</div>;

    return (
      <div className={`min-h-full font-harrison-sans transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}>
        <div className={`${bgHeader} text-white p-6 pb-6 shadow-md sticky top-0 z-10`}>
          <button
            onClick={() => setActiveModuleId(null)}
            className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-3"
          >
            <ArrowLeft size={18} />
            <span className="font-bold text-xs uppercase tracking-wide">
              {getTitle(partData)}
            </span>
          </button>
          <h1 className="text-xl font-bold uppercase tracking-tight leading-tight">
            {getTitle(moduleData)}
          </h1>
        </div>

        <div className="p-0">
          {moduleData.topics.map((topic, idx) => (
            <button
              key={topic.id}
              onClick={() => setActiveLessonId(topic.id)}
              className="group flex flex-col items-start p-5 bg-white border-b border-slate-200 hover:bg-slate-50 transition-colors w-full text-left"
            >
              <div className="flex items-center gap-3 w-full">

                  <div className="flex-1">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-tight uppercase">
                        {getTitle(topic)}
                      </h3>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-[#003366]" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- VISTA 2: LISTA DE MÓDULOS DE LA PARTE ---
  if (activePartId) {
    const partData = COURSE_SYLLABUS.find(p => p.id === activePartId);
    
    return (
        <div className={`min-h-full font-harrison-sans transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}>
          <div className="bg-white p-6 border-b border-slate-200 sticky top-0 z-10">
            <button
              onClick={() => setActivePartId(null)}
              className="flex items-center gap-2 text-slate-500 hover:text-[#003366] transition mb-4"
            >
              <ArrowLeft size={18} />
              <span className="font-bold text-xs uppercase tracking-wide">
                {isEs ? "Índice Principal" : "Cuprins Principal"}
              </span>
            </button>
            <h1 className="text-xl font-black text-[#003366] uppercase tracking-tight">
              {getTitle(partData)}
            </h1>
          </div>
  
          <div className="p-4 grid gap-4">
            {partData?.modules?.map((module) => (
              <div
                key={module.id}
                onClick={() => setActiveModuleId(module.id)}
                className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer flex items-center gap-4"
              >
                 <div className="p-3 bg-indigo-50 text-[#003366] rounded-lg">
                    <Folder size={24} />
                 </div>
                 <div className="flex-1">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                         {isEs ? "MÓDULO" : "MODULUL"}
                     </span>
                     <h3 className="text-sm font-bold text-slate-900 uppercase leading-snug mt-0.5">
                        {getTitle(module)}
                     </h3>
                     <span className="text-xs text-slate-500 mt-1 block">
                         {module.topics.length} {isEs ? "Temas" : "Subiecte"}
                     </span>
                 </div>
                 <ChevronRight size={20} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      );
  }

  // --- VISTA 1: MENÚ PRINCIPAL (PORTADA / LISTA DE PARTES) ---
  return (
    <div className={`min-h-full font-harrison-sans transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f4f4f4]'}`}>
      <div className="bg-white p-8 border-b border-slate-200 shadow-sm sticky top-0 z-10 flex flex-col items-center pt-10 pb-10">
        <h1 className="text-2xl font-black text-[#003366] uppercase tracking-tight text-center leading-none px-4">
          PETRESCU MANUAL 2026
        </h1>
        <div className="mt-4 w-full max-w-[60px] h-[2px] bg-[#003366]"></div>
        <span className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {lang === "es" ? "Curso Profesional de Enfermería" : "Curs Profesional de Asistență Medicală"}
        </span>
      </div>

      <div className="p-4 grid gap-4">
        {Array.isArray(COURSE_SYLLABUS) && COURSE_SYLLABUS.map((part) => (
          <div
            key={part.id}
            className="bg-white p-0 shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group"
            onClick={() => setActivePartId(part.id)}
          >
             {/* Decorative Stripe */}
             <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#003366] group-hover:w-2 transition-all"></div>
             
             <div className="p-6 pl-8 flex items-center justify-between">
                 <div>
                     <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                         {isEs ? "SECCIÓN PRINCIPAL" : "SECȚIUNE PRINCIPALĂ"}
                     </span>
                     <h2 className="text-lg font-bold text-slate-900 leading-tight uppercase max-w-[250px]">
                        {getTitle(part)}
                     </h2>
                     <span className="text-xs text-indigo-600 font-bold mt-2 block uppercase tracking-wide">
                        {part.modules.length} {isEs ? "Módulos" : "Module"}
                     </span>
                 </div>
                 <ChevronRight size={24} className="text-slate-300 group-hover:text-[#003366] transition-colors" />
             </div>
          </div>
        ))}
        

      </div>
    </div>
  );
};
