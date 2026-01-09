import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Check, ClipboardList, PenTool, Search, X, RefreshCw, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { LAB_REQUEST_FORM_DATA } from "../data/lab";

import { generateRandomPatient } from "../data/patientData";



export const LabRequestViewer = ({ lang }) => {
    const isEs = lang === "es";
    const [step, setStep] = useState(1);
    const [patient] = useState(generateRandomPatient());
    const [selections, setSelections] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const searchRef = React.useRef(null);

    // TRANSLATION DICTIONARY (UI STRINGS)
    const t = {
        hospital: isEs ? "Hospital Universitario" : "Spitalul Universitar",
        uni: "UNIVERSITATIS",
        patient: isEs ? "PACIENTE:" : "PACIENT:",
        surname1: isEs ? "1er Apellido:" : "Nume de familie:",
        surname2: isEs ? "2.º Apellido:" : "Prenume:", // Note: In RO structured differently usually, but keeping layout
        name: isEs ? "Nombre:" : "Inițiala:",
        dob: isEs ? "Fecha nacim.:" : "Data nașterii:",
        nhc: isEs ? "N.º H.ª" : "F. Obs.",
        sex: isEs ? "Sexo:" : "Sex:",
        searchPlaceholder: isEs ? "Buscar muestra..." : "Caută analiză...",
        noResults: isEs ? "No se encontraron resultados" : "Nu s-au găsit rezultate",
        preselected: isEs ? "Pre-seleccionado" : "Pre-selectat",
        continue: isEs ? "Continuar" : "Continuă",
        confirm: isEs ? "Confirmar Extracción" : "Confirmă Recoltarea",
        preparing_rack: isEs ? "Preparando Gradilla..." : "Se pregătește stativul...",
        preparing_mat: isEs ? "Preparando Material (Orden CLSI)..." : "Se pregătește materialul (Ordinea CLSI)...",
        tube_position: isEs ? "Posición" : "Poziția",
        of: isEs ? "de" : "din",
        understood: isEs ? "Entendido" : "Am înțeles",
        instruction_main: isEs ? "Sigue el orden exacto para evitar la contaminación cruzada." : "Respectați ordinea exactă pentru a evita contaminarea încrucișată.",
        instruction_sub: isEs ? "(Toca un tubo para saber por qué)" : "(Atinge un tub pentru explicații)",
        new_request: isEs ? "Nuevo Volante" : "Cerere Nouă"
    };

    const handleReset = () => {
        setSelections({});
        setStep(1);
        setSearchTerm("");
    };


    // Handle click outside to close search
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchTerm("");
            }
        };

        if (searchTerm) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchTerm]);

    // Flatten all tests for search
    const allTests = React.useMemo(() => {
        const tests = [];
        Object.values(LAB_REQUEST_FORM_DATA.zones).forEach(zone => {
            zone.groups.forEach(group => {
                group.items.forEach(item => {
                    // Smart Translation Logic
                    const label = (lang === "ro" && item.labelRO) ? item.labelRO : item.label;
                    const zoneTitle = (lang === "ro" && zone.titleRO) ? zone.titleRO : zone.title;
                    const groupTitle = (lang === "ro" && group.titleRO) ? group.titleRO : group.title;
                    
                    tests.push({ ...item, label, zone: zoneTitle, group: groupTitle });
                });
            });
        });
        return tests;
    }, [lang]);

    // Toggle selection
    const toggleSelection = (id) => {
        setSelections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Calculate filled slots based on selected tubes
    const { tubes, filledSlots, hasWideTube } = React.useMemo(() => {
        const selectedIds = Object.keys(selections).filter(id => selections[id]);
        
        // Get all required tubes based on selections
        const requiredTubes = getRequiredTubes(selectedIds);
        
        // Map to slot indices (simple sequential fill for now)
        const slots = [];
        const tubeObjects = [];
        
        requiredTubes.forEach((tube, index) => {
            slots.push(index); // Fill slots sequentially 0, 1, 2...
            tubeObjects[index] = tube;
        });

        // Check if we have any wide tube (Order 1 - Hemocultivo)
        const hasWide = requiredTubes.some(t => t.type === 'wide');

        return { tubes: tubeObjects, filledSlots: slots, hasWideTube: hasWide };
    }, [selections]);



    // Initialize with "checked" items from data
    useEffect(() => {
        const initial = {};
        if (LAB_REQUEST_FORM_DATA.zones) {
            LAB_REQUEST_FORM_DATA.zones.forEach(zone => {
                if(zone.groups) {
                    zone.groups.forEach(group => {
                        group.items.forEach(item => {
                            if(item.checked) initial[item.id] = true;
                        });
                    });
                }
            });
        }
        setSelections(initial);
    }, []);



    return (
        <div className="flex flex-col h-full bg-slate-50 relative font-body">
            
            {/* HEADER SUPERIOR */}
            <div className="bg-white p-3 border-b border-slate-200 shadow-sm sticky top-0 z-30">
                <div className="relative flex items-center mb-2">
                     <Link to="/" className="p-2 -ml-[12px] rounded-full hover:bg-slate-100 text-slate-600 z-10">
                        <ArrowLeft size={20} />
                    </Link>
                    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
                        <h1 className="font-heading font-black text-xs uppercase tracking-widest text-slate-400">{t.hospital}</h1>
                        <span className="font-heading font-black text-lg text-[#469A7C] leading-none">PETRESCU</span>
                    </div>

                </div>

                {/* STEPPER */}
                <div className="flex items-center justify-center gap-4 py-2">
                    <button 
                        onClick={() => setStep(1)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === 1 ? 'bg-[#E9B82B] text-white shadow-lg scale-110' : 'bg-slate-200 text-slate-500'}`}
                    >
                        1
                    </button>
                    <div className="w-12 h-[2px] bg-slate-200 relative">
                        <div className={`absolute left-0 top-0 h-full bg-[#E9B82B] transition-all duration-300 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
                    </div>
                    <button 
                        onClick={() => { if(Object.values(selections).some(Boolean)) setStep(2) }}
                        disabled={!Object.values(selections).some(Boolean)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === 2 ? 'bg-[#E9B82B] text-white shadow-lg scale-110' : 'bg-slate-200 text-slate-500'}`}
                    >
                        2
                    </button>
                </div>

            {/* PATIENT INFO CARD */}
                {/* PATIENT INFO CARD - STRICT LAYOUT REFERENCE */}
                {step === 1 && (
                <div className="mx-2 mt-2">
                    <div className="border border-slate-400 bg-white shadow-sm"> 
                        {/* Header Label - Simulated */}
                        <div className="bg-slate-100 px-2 py-0.5 border-b border-slate-300">
                             <span className="font-bold text-slate-800 text-[10px] uppercase">{t.patient}</span>
                        </div>

                        {/* Row 1: Surnames and Name */}
                        <div className="flex w-full border-b border-slate-300">
                            {/* 1er Apellido */}
                            <div className="flex-[3.5] border-r border-slate-300 px-2 pt-1 pb-1 relative">
                                <span className="text-[9px] font-bold text-slate-500 absolute top-1 left-2">{t.surname1}</span>
                                <div className="mt-4 font-handwriting text-slate-900 text-base leading-none pl-4 -rotate-1">{patient.surname1}</div>
                                <div className="absolute bottom-1 left-2 right-2 border-b border-slate-400"></div>
                            </div>
                            
                            {/* 2º Apellido */}
                             <div className="flex-[3.5] border-r border-slate-300 px-2 pt-1 pb-1 relative">
                                <span className="text-[9px] font-bold text-slate-500 absolute top-1 left-2">{t.surname2}</span>
                                <div className="mt-4 font-handwriting text-slate-900 text-base leading-none pl-4 rotate-1">{patient.surname2}</div>
                                <div className="absolute bottom-1 left-2 right-2 border-b border-slate-400"></div>
                            </div>

                             {/* Nombre */}
                             <div className="flex-[3] px-2 pt-1 pb-1 relative">
                                <span className="text-[9px] font-bold text-slate-500 absolute top-1 left-2">{t.name}</span>
                                <div className="mt-4 font-handwriting text-slate-900 text-base leading-none pl-4 -rotate-1">{patient.firstName}</div>
                                <div className="absolute bottom-1 left-2 right-2 border-b border-slate-400"></div>
                            </div>
                        </div>

                        {/* Row 2: DOB, NHC, Sex */}
                        <div className="flex w-full h-12">
                             {/* Fecha Nacim - Increased width */}
                             <div className="flex-[6] border-r border-slate-300 px-2 flex items-center gap-0.5">
                                <span className="text-[9px] font-bold text-slate-500 shrink-0">{t.dob}</span>
                                <div className="flex border border-slate-800 h-7 bg-white/50">
                                    <div className="w-8 flex items-center justify-center border-r border-slate-800 font-handwriting text-base">{patient.dobDay}</div>
                                    <div className="w-8 flex items-center justify-center border-r border-slate-800 font-handwriting text-base">{patient.dobMonth}</div>
                                    <div className="w-12 flex items-center justify-center font-handwriting text-base">{patient.dobYear}</div>
                                </div>
                             </div>

                             {/* NHC - Reduced width */}
                             <div className="flex-[2.5] border-r border-slate-300 px-2 flex items-end pb-2 relative">
                                <span className="text-[9px] font-bold text-slate-500 mb-0.5 mr-2">{t.nhc}</span>
                                <div className="flex-1 border-b border-slate-400 font-mono text-base text-center tracking-widest leading-none">{patient.nhc}</div>
                             </div>

                             {/* Sexo - Reduced width */}
                             <div className="flex-[1] px-2 flex items-end pb-2">
                                <span className="text-[9px] font-bold text-slate-500 mb-0.5 mr-2">{t.sex}</span>
                                <div className="flex-1 border-b border-slate-400 font-handwriting text-base text-center leading-none -rotate-3">{patient.sex}</div>
                             </div>
                        </div>
                    </div>
                </div>
                )}

                {/* BUSCADOR DE MUESTRAS */}
                 {step === 1 && (
                    <div className="mt-3 relative" ref={searchRef}>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder={t.searchPlaceholder} 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                            />
                            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                            {searchTerm && (
                                <button 
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* RESULTADOS DE BÚSQUEDA (Desplegable) */}
                        {searchTerm && (
                            <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-b-lg shadow-xl z-50 max-h-60 overflow-y-auto mt-1">
                                {allTests.filter(t => t.label.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ? (
                                    allTests.filter(t => t.label.toLowerCase().includes(searchTerm.toLowerCase())).map(item => (
                                        <div 
                                            key={item.id}
                                            onClick={() => toggleSelection(item.id)}
                                            className="px-4 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer flex items-center justify-between group"
                                        >
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">
                                                {item.label}
                                            </span>
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selections[item.id] ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 bg-white'}`}>
                                                {selections[item.id] && <Check size={14} className="text-white" strokeWidth={3} />}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-slate-500 text-sm">
                                        {t.noResults}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                 )}
            </div>

            {/* CONTENIDO DEL FORMULARIO (Scrollable) */}
            <div className="flex-1 overflow-y-auto">
                {step === 1 ? (
                    <div className="pb-24 p-0">
                         {LAB_REQUEST_FORM_DATA.zones.map((zone) => (
                            <div key={zone.id} className={`${zone.color} p-6 border-b border-black/5 last:border-0`}>
                                <div className="max-w-4xl mx-auto">
                                    <h2 className={`font-heading font-black text-xl uppercase tracking-wider mb-6 pb-2 border-b-2 border-black/10 ${zone.headerColor}`}>
                                        {(lang === 'ro' && zone.titleRO) ? zone.titleRO : zone.title}
                                    </h2>
                                    
                                    <div className="space-y-8">
                                        {zone.groups.map((group, gIdx) => (
                                            <div key={gIdx} className="break-inside-avoid">
                                                <h3 className={`font-bold uppercase tracking-wider text-xs mb-3 pl-1 ${group.color}`}>
                                                     {(lang === 'ro' && group.titleRO) ? group.titleRO : group.title}
                                                </h3>
                                                
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {group.items.map(item => (
                                                        <div 
                                                            key={item.id}
                                                            onClick={() => toggleSelection(item.id)}
                                                            className={`
                                                                relative p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3
                                                                ${selections[item.id] ? 'bg-indigo-50 border-indigo-500 shadow-sm ring-1 ring-indigo-500' : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-sm'}
                                                            `}
                                                        >
                                                            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${selections[item.id] ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 bg-white'}`}>
                                                                {selections[item.id] && <Check size={14} className="text-white" strokeWidth={4} />}
                                                            </div>
                                                            <div className="flex-1">
                                                                <span className="block leading-tight font-semibold text-slate-700 text-sm">
                                                                     {(lang === 'ro' && item.labelRO) ? item.labelRO : item.label}
                                                                </span>
                                                                {item.checked && (
                                                                    <span className="text-[10px] uppercase font-bold text-indigo-400 mt-1 block tracking-wider">{t.preselected}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // PASO 2: ANIMACIÓN DE EXTRACCIÓN
                    <div className="flex flex-col items-center justify-center h-full animate-in fade-in duration-500 relative">
                        <TubeExtractionAnimation selections={selections} onReset={handleReset} textMap={t} lang={lang} />
                    </div>
                )}
            </div>

            {/* BOTÓN FLOTANTE CONTINUAR (Solo en Paso 1) */}
            {step === 1 && (
                <div className="absolute bottom-4 left-4 right-4 z-40">
                    <button 
                        onClick={() => setStep(2)}
                        disabled={!Object.values(selections).some(Boolean)}
                        className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                        {t.continue} <ArrowLeft className="rotate-180" size={18} />
                    </button>
                </div>
            )}
        </div>
    );
};

// --- COMPONENTES Y LÓGICA DEL PASO 2 ---

// Definición de Tubos basada en CLSI Order of Draw (Explicaciones Educativas)
const TUBE_DEFINITIONS = {
    'hemocultivos': { 
        id: 'hemo', order: 1, color: 'bg-yellow-100', cap: 'bg-blue-500', 
        label: 'HEMOCULT', labelRO: 'HEMOCULT', type: 'bottle', height: 'h-28', width: 'w-10', ml: '10ml',
        inv: '8-10 inversiones', invRO: '8-10 inversări',
        desc: "Hemocultivos", descRO: "Hemoculturi",
        desc_long: "Se extraen PRIMERO para asegurar la esterilidad absoluta. Si se llenaran después de otros tubos, la aguja podría contaminarse y causar un falso positivo de bacterias en sangre."
    },
    'blue': { 
        id: 'blue', order: 2, color: 'bg-sky-50', cap: 'bg-[#0EA5E9]', // Sky-500
        label: 'CITRATO', labelRO: 'CITRAT', type: 'tube', height: 'h-[7.5rem]', width: 'w-4', ml: '2.7ml',
        inv: '3-4 inversiones', invRO: '3-4 inversări',
        desc: "Coagulación", descRO: "Coagulare",
        desc_long: "El Citrato debe ir ANTES de los tubos con activadores de coágulo (Rojo/Oro) o Heparina, ya que estos aditivos alterarían irreversiblemente las pruebas de coagulación."
    },
    'red': { 
        id: 'red', order: 3, color: 'bg-red-50', cap: 'bg-[#EF4444]', // Red-500
        label: 'SUERO', labelRO: 'SER', type: 'tube', height: 'h-32', width: 'w-4', ml: '6ml',
        inv: '5 inversiones', invRO: '5 inversări',
        desc: "Suero (Serología)", descRO: "Ser (Serologie)",
        desc_long: "Tubo para suero sin gel. Se coloca antes de heparina/EDTA para evitar que los anticoagulantes de esos tubos contaminen la muestra de suero limpio."
    },
    'gold': { 
        id: 'gold', order: 4, color: 'bg-amber-50', cap: 'bg-[#EAB308]', // Yellow-500
        label: 'GEL', labelRO: 'GEL', type: 'tube', height: 'h-24', width: 'w-5', ml: '3.5ml',
        inv: '5 inversiones', invRO: '5 inversări',
        desc: "Suero (Gel)", descRO: "Ser (Gel)",
        desc_long: "Contiene gel separador y activador de coágulo. Va en el bloque de 'Suero', protegido de contaminación por anticoagulantes fuertes como EDTA o Fluoruro."
    },
    'green': { 
        id: 'green', order: 5, color: 'bg-emerald-50', cap: 'bg-[#10B981]', // Emerald-500
        label: 'HEPARINA', labelRO: 'HEPARINĂ', type: 'tube', height: 'h-32', width: 'w-4', ml: '4ml',
        inv: '8-10 inversiones', invRO: '8-10 inversări',
        desc: "Heparina (Urg.)", descRO: "Heparină (Urg.)",
        desc_long: "Heparina de Litio. Si se extrajera antes del Azul (Citrato) o Rojo (Suero), la heparina podría falsear las pruebas de coagulación o anticuerpos."
    },
    'purple': { 
        id: 'purple', order: 6, color: 'bg-purple-50', cap: 'bg-[#A855F7]', // Purple-500
        label: 'EDTA', labelRO: 'EDTA', type: 'tube', height: 'h-20', width: 'w-4', ml: '2ml',
        inv: '8-10 inversiones', invRO: '8-10 inversări',
        desc: "Hemograma", descRO: "Hemoleucogramă",
        desc_long: "¡CRÍTICO! El EDTA es rico en Potasio (K⁺). Debe ir DESPUÉS de los tubos de bioquímica (Rojo/Verde) para no provocar una falsa hiperpotasemia (potasio falsamente alto)."
    },
    'pink': { 
        id: 'pink', order: 7, color: 'bg-pink-50', cap: 'bg-[#EC4899]', // Pink-500
        label: 'B. SANGRE', labelRO: 'B. SÂNGE', type: 'tube', height: 'h-32', width: 'w-4', ml: '6ml',
        inv: '8-10 inversiones', invRO: '8-10 inversări',
        desc: "Banco Sangre", descRO: "Bancă de Sânge",
        desc_long: "Similar al Lila (tiene EDTA). Se usa para cruzar sangre. Su posición tardía evita contaminar los tubos previos con EDTA."
    },
    'grey': { 
        id: 'grey', order: 8, color: 'bg-slate-100', cap: 'bg-[#64748B]', // Slate-500
        label: 'GLUCOSA', labelRO: 'GLUCOZĂ', type: 'tube', height: 'h-[7.5rem]', width: 'w-4', ml: '4ml',
        inv: '8-10 inversiones', invRO: '8-10 inversări',
        desc: "Glucosa", descRO: "Glucoză",
        desc_long: "Contiene Fluoruro/Oxalato. Estos aditivos son muy potentes y destruirían células o alterarían enzimas, por eso va al FINAL de la extracción."
    },
    'black': { 
        id: 'black', order: 9, color: 'bg-stone-50', cap: 'bg-black', 
        label: 'VSG', labelRO: 'VSH', type: 'tube', height: 'h-32', width: 'w-3', ml: '1.6ml',
        inv: '8-10 inversiones', invRO: '8-10 inversări',
        desc: "VSG", descRO: "VSH",
        desc_long: "Tubo específico para Velocidad de Sedimentación. Por protocolo suele ir al final junto con otros tubos especiales."
    }
};

const getRequiredTubes = (selections) => {
    // ... (Lógica de selección se mantiene igual, no requerimos cambios aquí)
    const required = new Set();
    Object.keys(selections).forEach(key => {
        if (!selections[key]) return;
        if (key === 'hemocultivos') required.add('hemocultivos');
        if (['inr', 'coagulacion_basica', 'dimero_d', 'fibrinogeno', 'antitrombina', 'proteina_c', 'proteina_s'].includes(key)) required.add('blue');
        if (['hemograma', 'hba1c', 'banco_sangre', 'reticulocitos', 'acth'].includes(key)) required.add('purple');
        if (['grupo_rh', 'pruebas_cruzadas'].includes(key)) required.add('pink');
        if (['gasometria_venosa', 'troponina', 'cariotipo', 'amonio'].includes(key)) required.add('green');
        if (['lactato', 'glucosa_basal', 'curva_glucosa'].includes(key)) required.add('grey');
        if (key === 'vsg') required.add('black');
        if (!['hemocultivos', 'hemograma', 'inr', 'coagulacion_basica', 'gasometria_venosa', 'lactato', 'vsg', 'grupo_rh'].includes(key)) {
             if (['digoxina', 'litio', 'fenitoina'].includes(key)) required.add('red');
             else required.add('gold');
        }
    });

    return Array.from(required)
        .map(key => TUBE_DEFINITIONS[key])
        .filter(Boolean)
        .sort((a, b) => a.order - b.order);
};

// GRÁFICA DE EXPLICACIONES DINÁMICAS (Context-Aware)
const getDynamicExplanation = (tube, index, allSelectTubes, lang = 'es') => {
    const isEs = lang === 'es';
    const total = allSelectTubes.length;
    const isFirst = index === 0;
    const isLast = index === total - 1;
    const prevTube = isFirst ? null : allSelectTubes[index - 1];
    
    // Previous tube description for interpolation
    const prevDesc = prevTube ? (isEs ? prevTube.desc : (prevTube.descRO || prevTube.desc)) : '';

    let intro = isEs 
        ? `Este tubo ocupa la posición ${index + 1} de ${total} en tu extracción.`
        : `Acest tub ocupă poziția ${index + 1} din ${total} în recoltarea ta.`;

    let reason = "";

    switch (tube.id) {
        case 'hemo':
            reason = isEs 
                ? "Los hemocultivos tienen PRIORIDAD ABSOLUTA. Deben llenarse antes que cualquier otro para garantizar la esterilidad de la muestra y evitar falsos positivos bacterianos."
                : "Hemoculturile au PRIORITATE ABSOLUTĂ. Trebuie umplute primele pentru a garanta sterilitatea probei și a evita rezultatele fals pozitive bacteriene.";
            break;
        case 'blue': // Citrato
            if (isFirst) reason = isEs
                ? "Al no haber hemocultivos, iniciamos con Citrato. Es vital que sea el primero (" + (allSelectTubes.length > 1 ? "o justo después de cultivos" : "único") + ") para evitar que la aguja arrastre activadores de coágulo de otros tubos, lo que alteraría los tiempos de coagulación."
                : "În lipsa hemoculturilor, începem cu Citrat. Este vital să fie primul (" + (allSelectTubes.length > 1 ? "sau imediat după culturi" : "unicul") + ") pentru a evita contaminarea cu activatori de coagulare din alte tuburi.";
            else reason = isEs
                ? `Va inmediatamente después de ${prevDesc} para proteger las pruebas de coagulación. Si se extrajera después de un tubo con aditivos potentes, se invalidaría la muestra.`
                : `Vine imediat după ${prevDesc} pentru a proteja testele de coagulare.`;
            break;
        case 'red': // Suero
        case 'gold': // Gel
            if (isFirst) reason = isEs
                ? "Iniciamos con Suero (Bioquímica) para obtener una muestra limpia sin interferencias de anticoagulantes."
                : "Începem cu Ser (Biochimie) pentru a obține o probă curată, fără interferențe de anticoagulanți.";
            else if (prevTube?.id === 'blue') reason = isEs
                ? "Se extrae después del Citrato (Azul) para respetar el orden estándar. El suero debe obtenerse antes de usar tubos con anticoagulantes fuertes (como EDTA o Heparina) que alterarían la química sanguínea."
                : "Se recoltează după Citrat (Albastru) pentru a respecta ordinea standard. Serul trebuie obținut înainte de a folosi tuburi cu anticoagulanți puternici (ca EDTA sau Heparina).";
            else reason = isEs
                ? "Se coloca en esta posición intermedia, SIEMPRE antes de los tubos con Heparina o EDTA, para evitar contaminación química de la muestra de suero."
                : "Se plasează în această poziție intermediară, ÎNTOTDEAUNA înainte de tuburile cu Heparină sau EDTA, pentru a evita contaminarea chimică.";
            break;
        case 'green': // Heparina
            reason = isEs 
                ? "La Heparina suele ir después de los tubos de suero (para no afectar su coagulación) y ANTES del EDTA (Lila), ya que el EDTA destruiría ciertas enzimas que se miden en plasma heparinizado."
                : "Heparina vine de obicei după tuburile de ser și ÎNAINTE de EDTA (Mov), deoarece EDTA ar distruge anumite enzime măsurate în plasma heparinizată.";
            break;
        case 'purple': // EDTA
        case 'pink': // Banco Sangre
            reason = isEs
                ? "¡ATENCIÓN! El EDTA es rico en Potasio (K+). Debe ir CASI AL FINAL, obligatoriamente después de los tubos de Bioquímica (Rojo/Oro/Verde). Si lo extrayeras antes, el potasio se dispararía falsamente en los análisis de los tubos anteriores."
                : "ATENȚIE! EDTA este bogat în Potasiu (K+). Trebuie să fie SPRE FINAL, obligatoriu după Biochimie (Roșu/Aur/Verde). Dacă îl recoltați înainte, potasiul va ieși fals mărit în tuburile anterioare.";
            break;
        case 'grey': // Glucosa
            reason = isEs
                ? "Los aditivos de este tubo (Fluoruro/Oxalato) son muy agresivos para la conservación de glucosa. Se dejan para el final para no estropear la integridad celular de ninguna otra muestra previa."
                : "Aditivii acestui tub (Fluorură/Oxalat) sunt agresivi. Se lasă la final pentru a nu altera integritatea celulară a probelor anterioare.";
            break;
        case 'black': // VSG
            reason = isEs
                ? "Por protocolo estándar de sedimentación, la VSG se extrae al final de la secuencia para asegurar que el resto de muestras prioritarias (Coagulación, Bioquímica, Hemograma) ya están seguras."
                : "Conform protocolului standard, VSH se recoltează la final pentru a asigura prioritatea celorlalte probe (Coagulare, Biochimie, Hemoleucogramă).";
            break;
        default:
            reason = isEs
                ? "Sigue el orden estándar CLSI para minimizar errores preanalíticos."
                : "Urmați ordinea standard CLSI pentru a minimiza erorile preanalitice.";
    }

    return { intro, reason };
};

// HELPER: Nombre Realista Etiqueta
const getTubeLabelFull = (shortLabel) => {
    const map = {
        'HEMOCULT': 'HEMOCULTIVO',
        'CITRATO': 'COAGULACIÓN',
        'CITRAT': 'COAGULARE',
        'SUERO': 'BIO. ROJO',
        'SER': 'BIO. ROȘU',
        'GEL': 'BIO. AMARILLO',
        'BIO. GALBEN': 'BIO. GALBEN', // Valid Romanian map
        'HEPARINA': 'BIO. VERDE',
        'HEPARINĂ': 'BIO. VERDE',
        'EDTA': 'HEMOGRAMA', // ES
        'HEMOLEUCOGRAMĂ': 'HEMOLEUCOGRAMĂ', // RO
        'B. SANGRE': 'BANCO SANGRE',
        'B. SÂNGE': 'BANCĂ SÂNGE',
        'GLUCOSA': 'GLUCOSA',
        'GLUCOZĂ': 'GLUCOZĂ',
        'VSG': 'VELOCIDAD',
        'VSH': 'VITEZĂ'
    };
    return map[shortLabel] || shortLabel;
};

// COMPONENTE TUBO INDIVIDUAL (Refactorizado con Hitbox Invisible y Escala)
const LabTube = ({ tube, isAnimated, onClick, scale = 1, variant = 'simple', patient = null, lang = 'es' }) => {
    const [filled, setFilled] = useState(false);
    const isEs = lang === 'es';

    useEffect(() => {
        if (isAnimated) {
            // Simular llenado poco después de aparecer
            const timer = setTimeout(() => setFilled(true), 600);
            return () => clearTimeout(timer);
        } else {
             setFilled(true); // If not animated (Step 3), always full
        }
    }, [isAnimated]);

    // Barcode Simulation Component
    const Barcode = () => (
        <div className="flex items-center justify-between w-full h-full px-1 bg-white overflow-hidden">
             {Array.from({ length: 40 }).map((_, i) => (
                 <div key={i} className={`h-full bg-black ${Math.random() > 0.5 ? 'w-px' : 'w-0.5'}`} style={{ opacity: Math.random() > 0.2 ? 1 : 0 }}></div>
             ))}
        </div>
    );

    // Determines label to show
    const displayLabel = (lang === 'ro' && tube.labelRO) ? tube.labelRO : tube.label;

    // MODE 1: FLAT LABEL (Detailed / Step 3)
    if (variant === 'detailed' && patient) {
        return (
            <div 
                className="relative bg-white border border-slate-300 shadow-md flex flex-col p-3 select-none group hover:scale-[1.02] transition-transform duration-300"
                style={{ 
                    width: '240px', 
                    height: '160px', // Aumentado de 140px a 160px para mas espacio abajo
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center'
                 }}
                 onClick={onClick}
            >
                {/* Cabecera */}
                <div className="flex justify-between items-start border-b-2 border-slate-900 pb-1 mb-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-900 leading-none">{isEs ? "Hospital Universitario" : "Spitalul Universitar"}</span>
                        <span className="text-[12px] font-black text-slate-900 leading-none tracking-tight">PETRESCU</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono font-bold text-slate-600">10-086826</span>
                        <span className="text-[9px] text-slate-400">05/01/2026</span>
                    </div>
                </div>

                {/* Cuerpo Principal */}
                <div className="flex-1 flex flex-col justify-between">
                    {/* Fila Muestra y Codigo */}
                    <div className="flex items-center gap-2 mb-2">
                         <div className="flex-1">
                             <div className="text-[9px] font-bold text-slate-500 uppercase">{isEs ? "Muestra" : "Probă"}</div>
                             <div className="text-[14px] font-black text-slate-900 leading-none truncate">
                                 {getTubeLabelFull(displayLabel)}
                             </div>
                             <div className="text-[10px] text-slate-400 font-mono mt-0.5">10.086826</div>
                         </div>
                         <div className="h-10 w-24">
                             <Barcode />
                         </div>
                    </div>

                    {/* Datos Paciente */}
                    <div className="border-t border-slate-200 pt-2 mt-auto">
                        <div className="text-[12px] font-bold text-slate-900 truncate mb-1">
                            {patient.surname1} {patient.surname2}, {patient.name}
                        </div>
                        <div className="flex justify-between items-end">
                             <div className="text-[10px] text-slate-600">
                                <span className="font-bold">{isEs ? "NHC:" : "F.Obs:"}</span> {patient.nhc}
                             </div>
                             {/* Mini Barcode Bottom - Fix cut-off */}
                             <div className="h-5 w-20 opacity-80">
                                 <Barcode />
                             </div>
                        </div>
                    </div>
                </div>

                {/* Visual Hint for Click */}
                {onClick && <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors pointer-events-none"></div>}
            </div>
        );
    }

    // MODE 2: PHYSICAL TUBE (Simple / Step 2)
    return (
        <div 
            className={`relative flex flex-col items-center justify-end group transition-transform ${isAnimated ? 'animate-in fade-in slide-in-from-top-10 duration-700' : ''}`}
        >
            {/* BUTTON HITBOX (La zona de click real, invisible y por encima de todo) */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Asegurar que no propague
                    onClick && onClick();
                }}
                className="absolute inset-0 z-[100] w-full h-full cursor-pointer bg-transparent border-none outline-none"
                aria-label={`Ver detalles de ${tube.desc}`}
            />

            {/* TUBO REALISTA (Visuals only - Pointer events disabled) */}
            <div className={`relative ${tube.width} ${tube.height} rounded-b-full shadow-[inset_-4px_-4px_6px_rgba(0,0,0,0.2)] border border-slate-300 overflow-hidden bg-white/40 backdrop-blur-sm z-10 pointer-events-none transition-transform duration-500`}
                 style={{ 
                     boxShadow: 'inset -2px -2px 5px rgba(0,0,0,0.1), 2px 2px 5px rgba(0,0,0,0.1)',
                     transform: `scale(${scale})`,
                     transformOrigin: 'bottom center'
                 }}>
                
                {/* SANGRE / FLUIDO (Animación de Llenado) */}
                <div 
                    className="absolute bottom-0 left-0 right-0 bg-[#8a0303] transition-all duration-[1500ms] ease-out z-10"
                    style={{ height: filled ? '60%' : '0%' }}
                >
                    {/* Brillo liquido */}
                     <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
                </div>

                {/* TAPÓN CON SOMBRA Y RAYAS */}
                <div className={`absolute top-0 left-0 right-0 h-5 ${tube.cap} shadow-sm z-20 border-b border-black/20 overflow-hidden`}>
                    <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_3px)]"></div>
                </div>
                
                {/* ETIQUETA SIMPLE (PASO 2) */}
                {variant === 'simple' && (
                    <div className="absolute top-6 left-[1px] right-[1px] bottom-2 flex flex-col items-center pt-2 z-20">
                        <div className="w-full h-full flex items-center justify-center">
                            <span 
                                className={`text-[9px] font-bold uppercase tracking-tighter transform -rotate-90 whitespace-nowrap scale-y-110 transition-colors duration-1000 ${filled ? 'text-white/90 drop-shadow-md' : 'text-slate-700'}`}
                            >
                                {displayLabel}
                            </span>
                        </div>
                    </div>
                )}
                
                {/* LÍNEA DE LLENADO (CRÍTICA) */}
                <div className="absolute top-[40%] left-0 right-0 h-[1.5px] bg-slate-900 z-30 w-full opacity-80 pointer-events-none"></div>
                <div className="absolute top-[40%] right-0 w-0 h-0 border-t-[4px] border-t-transparent border-r-[4px] border-r-slate-900 border-b-[4px] border-b-transparent -translate-y-1/2 pointer-events-none"></div>
                
                {/* BRILLO DEL CRISTAL */}
                <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white/60 to-transparent z-40 pointer-events-none"></div>
                
                {/* HINT VISUAL (Click Me) */}
                {onClick && <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-50"></div>}
                
                {/* Icono de info al hacer hover (Feedback sutil) */}
                 {onClick && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 drop-shadow-md pointer-events-none">
                    <span className="text-2xl filter drop-shadow-sm">ℹ️</span>
                </div>}
            </div>
        </div>
    );
};

const TubeExtractionAnimation = ({ selections, onReset, textMap, lang = 'es' }) => {
    const tubes = React.useMemo(() => getRequiredTubes(selections), [selections]);
    const [status, setStatus] = useState('waiting'); // waiting, extracting, finished
    const [filledSlots, setFilledSlots] = useState([]); // Array de índices de tubos ya colocados
    const [selectedTube, setSelectedTube] = useState(null); // Estado para el modal { tube, intro, reason }
    
    // Gradilla Dinámica (Adaptación a cantidad de muestras)
    const tubeCount = tubes.length;
    
    // Calculate Scaling and Slots
    // If 1 tube -> Scale 1.5, Slots 3
    // If 9 tubes -> Scale 1.0, Slots 9
    let tubeScale = 1;
    let totalSlots = 9;

    if (tubeCount <= 1) {
        tubeScale = 1.5;
        totalSlots = 3;
    } else if (tubeCount <= 3) {
        tubeScale = 1.25;
        totalSlots = 5;
    } else if (tubeCount <= 5) {
        tubeScale = 1.15;
        totalSlots = 7;
    } else {
        tubeScale = 1;
        totalSlots = tubeCount + 2; // Always buffer
        if (totalSlots > 9) totalSlots = 9; // Cap at 9
    }
    
    // Ensure we have enough slots for the tubes even if capped
    if (totalSlots < tubeCount) totalSlots = tubeCount;


    const hasWideTube = tubes.some(t => t.id === 'hemo');
    
    // Generate Rack Slots
    const rackConfig = React.useMemo(() => {
        const slots = [];
        for (let i = 0; i < totalSlots; i++) {
             // Check if this specific index WILL hold a wide tube?
             // Not strictly coupled, but good for visuals.
             const isWide = hasWideTube && i === 0; 
             
             if (isWide) slots.push({ type: 'wide', width: 'w-11', hole: 'w-10', tube: tubes[i] });
             else slots.push({ type: 'std', width: 'w-7', hole: 'w-6', tube: tubes[i] });
        }
        return slots;
    }, [totalSlots, hasWideTube, tubes]);

    // Handler para abrir explicacion
    const handleTubeClick = (tube, index) => {
        const { intro, reason } = getDynamicExplanation(tube, index, tubes, lang);
        setSelectedTube({ ...tube, explanationIntro: intro, explanationReason: reason, realIndex: index + 1 });
    };

    useEffect(() => {
        let timer;
        // 1. Espera inicial de 2 segundos (Simulando preparación)
        if (status === 'waiting') {
            timer = setTimeout(() => {
                setStatus('extracting');
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [status]);

    useEffect(() => {
        // 2. Secuencia de llenado paso a paso
        if (status === 'extracting') {
            if (filledSlots.length < tubes.length && filledSlots.length < rackConfig.length) { // Limitado por slots disponibles
                const nextTimer = setTimeout(() => {
                    setFilledSlots(prev => [...prev, prev.length]); // Añadir siguiente índice
                }, 1500); // 1.5s entre cada tubo (Lento para ver orden)
                return () => clearTimeout(nextTimer);
            } else {
                if (filledSlots.length > 0 || tubes.length === 0) { // Solo finalizar si hemos hecho algo o no habia nada
                    setStatus('finished');
                    // onComplete(); Removed to prevent auto-skip. User must click Confirm.
                }
            }
        }
    }, [status, filledSlots.length, tubes.length, rackConfig.length]);

    return (
        <div className="relative h-full w-full flex flex-col overflow-hidden bg-white">
            
            {/* MODAL EDUCATIVO (Overlay iOS Style) - DINÁMICO (PORTAL) */}
            {selectedTube && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedTube(null)}>
                    <div className="bg-white w-full max-w-xs rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-300 ring-1 ring-slate-900/5" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Cabecera visual del tubo */}
                        <div className={`h-4 w-full ${selectedTube.cap}`}></div>
                        
                        <div className="p-6 flex flex-col items-center text-center">
                            {/* Icono + Título */}
                            <div className={`w-14 h-14 rounded-full ${selectedTube.color} flex items-center justify-center mb-3 shadow-inner text-2xl border-4 border-white`}>
                                ℹ️
                            </div>
                            
                            <h3 className="text-xl font-black text-slate-800 mb-0 leading-tight">{(lang === 'ro' && selectedTube.descRO) ? selectedTube.descRO : selectedTube.desc}</h3>
                            <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">{(lang === 'ro' && selectedTube.labelRO) ? selectedTube.labelRO : selectedTube.label}</div>

                            {/* Pill de Orden */}
                            <div className="inline-block px-4 py-1.5 bg-slate-900 text-white rounded-full text-sm font-bold shadow-md mb-2">
                                {textMap.tube_position} {selectedTube.realIndex} {textMap.of} {tubes.length}
                            </div>
                            
                            {/* Pill de Inversiones (Nuevo Requerimiento) */}
                            <div className="flex items-center justify-center gap-2 mb-5">
                                <RefreshCw className="w-4 h-4 text-slate-500" />
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                                    {(lang === 'ro' && selectedTube.invRO) ? selectedTube.invRO : selectedTube.inv}
                                </span>
                            </div>
                            
                            {/* Texto Dinámico */}
                            <div className="bg-slate-50 rounded-xl p-4 w-full text-left mb-4 border border-slate-100">
                                <p className="text-xs text-slate-500 mb-2 font-semibold">
                                     {selectedTube.explanationIntro}
                                </p>
                                <p className="text-sm text-slate-700 leading-snug font-medium">
                                    {selectedTube.explanationReason}
                                </p>
                            </div>

                            <button 
                                onClick={() => setSelectedTube(null)}
                                className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold active:scale-95 transition-transform shadow-lg"
                            >
                                {textMap.understood}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* SCROLLABLE CONTENT AREA */}
            <div className="flex-1 w-full overflow-y-auto pb-0 pt-0 flex flex-col items-center justify-center [&::-webkit-scrollbar]:hidden">

                {/* TEXTO DE ESTADO (Solo títulos transición, final limpio) */}
                <div className="absolute top-8 left-0 right-0 text-center z-10 px-4 pointer-events-none">
                    {status === 'waiting' && <h2 className="text-xl font-bold text-slate-600 animate-pulse">{textMap.preparing_rack}</h2>}
                    {status === 'extracting' && <h2 className="text-xl font-bold text-[#E9B82B]">{textMap.preparing_mat}</h2>}
                </div>

                {/* ZONA DE INVENTARIO (Visualmente sugerida arriba, o simplemente 'off-screen' para que la mano los traiga) */}

                {/* GRADILLA NUMERADA (RACK) - DINÁMICA */}
                <div className="relative mb-20 scale-125 translate-y-24">
                    {/* Estructura Gradilla 3D Simulado - Ancho adaptable si fuera necesario, aqui fijo en 340 pero con items justify-evenly */}
                    <div className="relative bg-orange-100 w-[340px] h-16 rounded-lg border-b-8 border-orange-200 shadow-xl flex items-center justify-evenly px-2 z-20">
                            {/* Huecos Dinámicos */}
                            {rackConfig.map((slot, i) => (
                                <div key={i} className="relative group w-8 h-8">
                                    {/* Agujero (Sombra) */}
                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-300/50 rounded-full shadow-inner border border-orange-300/30"></div>

                                    {/* Tubo renderizado si existe para este slot */}
                                    {slot.tube && filledSlots.includes(i) && (
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-transform active:scale-95">
                                            <LabTube 
                                                tube={slot.tube} 
                                                isAnimated={true} 
                                                scale={tubeScale}
                                                onClick={() => handleTubeClick(tubes[i], i)}
                                                lang={lang} // Pass lang
                                            />
                                            {/* Etiqueta flotante del orden */}
                                            <div 
                                                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 border border-slate-900 text-xs font-bold px-1.5 py-0.5 rounded shadow-lg animate-in zoom-in slide-in-from-bottom-2 pointer-events-none z-50 transition-transform duration-500"
                                                style={{ transform: `translate(-50%, -${(tubeScale - 1) * 128}px)` }}
                                            >
                                                {i + 1}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>

                </div>

                {/* TEXTO INSTRUCTIVO (Justo debajo del soporte) */}
                <div className="text-center z-10 px-4 mt-8">
                    <p className="text-xs font-medium text-slate-600 max-w-md mx-auto leading-tight">
                        {textMap.instruction_main}
                        <span className="block text-[10px] font-normal text-slate-500 mt-2">{textMap.instruction_sub}</span>
                    </p>
                </div>
            
            </div>

            {status === 'finished' && (
                <div className="absolute bottom-0 left-4 right-4 z-40 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-4">
                    <button 
                        onClick={onReset}
                        className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 hover:bg-slate-800"
                    >
                        {textMap.new_request} <RotateCcw size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

// COMPONENTE PASO 3: VERIFICACIÓN FINAL (REDISEÑO)
const Step3Verification = ({ onReset, lang = 'es' }) => {
    const isEs = lang === 'es';

    const t = {
        title: isEs ? "Recomendaciones Preanalíticas" : "Recomandări Preanalitice",
        tip1_title: isEs ? "1. Verificación de Identidad" : "1. Verificarea Identității",
        tip1_text: isEs 
            ? <>Confirme que los datos de la etiqueta (<span className="font-semibold">Nombre, Apellidos y NHC</span>) coinciden inequívocamente con la pulsera del paciente antes de proceder con el etiquetado.</>
            : <>Confirmați că datele de pe etichetă (<span className="font-semibold">Nume, Prenume și F.Obs</span>) coincid fără echivoc cu brățara pacientului înainte de a proceda la etichetare.</>,
        tip2_title: isEs ? "2. Extracción e Infusiones" : "2. Recoltare și Perfuzii",
        tip2_text: isEs
            ? <>Evite extraer sangre del brazo con vía periférica activa para prevenir la <span className="font-semibold text-red-600">hemodilución</span> de la muestra. Si es imprescindible, detenga la infusión al menos <span className="font-semibold">10-15 minutos</span> antes de la punción.</>
            : <>Evitați recoltarea din brațul cu linie venoasă activă pentru a preveni <span className="font-semibold text-red-600">hemodiluția</span> probei. Dacă este imperativ, opriți perfuzia cu cel puțin <span className="font-semibold">10-15 minute</span> înainte de puncție.</>,
        tip3_title: isEs ? "3. Uso del Compresor" : "3. Utilizarea Garoului",
        tip3_text: isEs
            ? <>Mantenga el torniquete un máximo de <span className="font-semibold">60 segundos</span>. Tiempos prolongados inducen hemoconcentración y pueden elevar falsamente los niveles de <span className="font-semibold text-blue-700">Potasio</span>.</>
            : <>Mențineți garoul maximum <span className="font-semibold">60 de secunde</span>. Timpul prelungit induce hemoconcentrație și poate crește fals nivelul de <span className="font-semibold text-blue-700">Potasiu</span>.</>,
        status: isEs ? "Estado del proceso" : "Status proces",
        ready: isEs ? "Listo para envío al laboratorio" : "Pregătit pentru laborator",
        new_request: isEs ? "Nuevo Volante" : "Cerere Nouă"
    };

    return (
        <div className="flex flex-col items-center justify-center h-full bg-slate-50 relative overflow-hidden w-full animate-in fade-in duration-700">
            {/* Gradient Header */}
             <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            
            <div className="flex flex-col items-start max-w-lg w-full px-8 z-30 pt-10 pb-20 overflow-y-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 self-center">{t.title}</h2>

                <div className="space-y-6 text-slate-700 text-sm leading-relaxed w-full">
                    
                    {/* 1. Verificación */}
                    <div className="animate-in slide-in-from-bottom-2 duration-700 delay-100">
                        <h3 className="font-bold text-slate-900 text-base mb-1">{t.tip1_title}</h3>
                        <p>
                            {t.tip1_text}
                        </p>
                    </div>

                    {/* 2. Vía con Suero */}
                    <div className="animate-in slide-in-from-bottom-2 duration-700 delay-200">
                        <h3 className="font-bold text-slate-900 text-base mb-1">{t.tip2_title}</h3>
                        <p>
                            {t.tip2_text}
                        </p>
                    </div>

                    {/* 3. Torniquete */}
                    <div className="animate-in slide-in-from-bottom-2 duration-700 delay-300">
                        <h3 className="font-bold text-slate-900 text-base mb-1">{t.tip3_title}</h3>
                        <p>
                            {t.tip3_text}
                        </p>
                    </div>

                </div>

                <div className="w-full h-px bg-slate-200 my-8"></div>

                {/* MENSAJE FINAL */}
                <div className="w-full text-center animate-in fade-in duration-1000 delay-500 mb-8">
                    <p className="text-slate-500 font-medium uppercase tracking-wide text-xs mb-2">{t.status}</p>
                    <h3 className="text-lg font-bold text-slate-800">{t.ready}</h3>
                </div>

                {/* BOTÓN NUEVO VOLANTE */}
                <button
                    onClick={onReset}
                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 animate-in slide-in-from-bottom-8 duration-700 delay-500"
                >
                    <RotateCcw size={18} />
                    {t.new_request}
                </button>
            </div>
        </div>
    );
};
