import React, { useState, useEffect, useRef } from 'react';
import { 
  Syringe, CheckCircle, AlertTriangle, Info, ArrowRight, ArrowLeft,
  RotateCcw, FlaskConical, Stethoscope, ZoomIn, CheckSquare, X, Eye
} from 'lucide-react';

// ==========================================
// 1. GENERADOR DE DATOS DE PACIENTES
// ==========================================
const NOMBRES_HOMBRE = [
  "Antonio", "Manuel", "Jose", "Francisco", "David", "Juan", "Javier", "Daniel", "Luis", "Carlos",
  "Jesus", "Alejandro", "Miguel", "Rafael", "Pedro", "Angel", "Pablo", "Sergio", "Fernando", "Jorge",
  "Alberto", "Alvaro", "Diego", "Adrian", "Raul", "Ivan", "Enrique", "Ruben", "Ramon", "Vicente",
  "Oscar", "Andres", "Joaquin", "Santiago", "Eduardo", "Victor", "Roberto", "Jaime", "Ignacio", "Mario"
];

const NOMBRES_MUJER = [
  "Maria", "Carmen", "Ana", "Isabel", "Dolores", "Pilar", "Teresa", "Rosa", "Josefa", "Cristina",
  "Maria Carmen", "Laura", "Elena", "Francisca", "Antonia", "Mercedes", "Lucia", "Marta", "Concepcion", "Rosario",
  "Juana", "Manuela", "Sara", "Paula", "Raquel", "Beatriz", "Eva", "Patricia", "Julia", "Victoria",
  "Rocio", "Encarnacion", "Begoña", "Montserrat", "Amparo", "Alba", "Nuria", "Silvia", "Irene", "Andrea"
];

const APELLIDOS = [
  "Garcia", "Rodriguez", "Gonzalez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin",
  "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Muñoz", "Alvarez", "Romero", "Alonso", "Gutierrez",
  "Navarro", "Torres", "Dominguez", "Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Molina",
  "Morales", "Suarez", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez"
];

const generatePatient = () => {
  const isFemale = Math.random() > 0.5;
  const nameList = isFemale ? NOMBRES_MUJER : NOMBRES_HOMBRE;
  const name = nameList[Math.floor(Math.random() * nameList.length)];
  const surname1 = APELLIDOS[Math.floor(Math.random() * APELLIDOS.length)];
  const surname2 = APELLIDOS[Math.floor(Math.random() * APELLIDOS.length)];
  const age = Math.floor(Math.random() * (90 - 45) + 45);
  const year = 2025 - age;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  
  return {
    fullName: `${surname1} ${surname2}, ${name}`.toUpperCase(),
    nhc: Math.floor(100000 + Math.random() * 900000),
    age: age,
    sex: isFemale ? "M" : "H",
    dob: `${day.toString().padStart(2,'0')}/${month.toString().padStart(2,'0')}/${year}`,
    id_peticion: Math.floor(72000000 + Math.random() * 999999)
  };
};

// ==========================================
// 2. ESCENARIOS CLÍNICOS
// ==========================================
const SCENARIOS = [
  {
    type: "rutina",
    service: "MEDICINA INTERNA",
    doctor: "Dra. Gil Giraldo",
    priority: "Normal",
    tests_visual: ["Hemograma", "Perfil Hepático (ALT,GGT)", "Perfil Renal", "Vitamina B12", "Ácido Fólico", "Perfil Lipídico", "TSH"],
    tests_extra: ["GLUCOSA BASAL", "UREA", "PCR", "FERRITINA"],
    tubesNeeded: ["yellow", "purple"], 
    correctOrder: ["yellow", "purple"], 
    neededChecks: ["hemo", "bioq"], 
    instructions: "Ayuno 12h. No tomar medicación antes de extracción salvo indicación.",
    learningES: "Al no haber coagulación, el SUERO (Amarillo) va antes que el EDTA (Lila) para evitar contaminación con potasio.",
    learningRO: "Fără coagulare, SERUL (Galben) merge înaintea EDTA (Mov) pentru a evita contaminarea cu potasiu."
  },
  {
    type: "sintrom",
    service: "CARDIOLOGÍA",
    doctor: "Dr. Lopez",
    priority: "Normal",
    tests_visual: ["INR (Sintrom)", "Hemograma Completo", "Iones (Na, K, Cl)", "Función Renal"],
    tests_extra: ["DIGOXINA", "PERFIL LIPÍDICO", "VSG"],
    tubesNeeded: ["blue", "yellow", "purple"], 
    correctOrder: ["blue", "yellow", "purple"], 
    neededChecks: ["coag", "hemo", "bioq"],
    instructions: "No requiere ayuno estricto para INR, pero sí para bioquímica general.",
    learningES: "El CITRATO (Azul) va PRIMERO. Es crítico llenarlo hasta la marca (Ratio 1:9).",
    learningRO: "CITRATUL (Albastru) este PRIMUL. Umplerea până la semn este critică pentru raportul 1:9."
  },
  {
    type: "urgencia",
    service: "URGENCIAS",
    doctor: "Dr. Martinez",
    priority: "URGENTE",
    tests_visual: ["Troponina I", "Bioquímica Urgente", "Hemograma", "Coagulación Básica"],
    tests_extra: ["GASOMETRÍA", "LACTATO", "PROCALCITONINA"],
    tubesNeeded: ["blue", "green", "purple"], 
    correctOrder: ["blue", "green", "purple"], 
    neededChecks: ["coag", "hemo", "bioq"],
    instructions: "EXTRACCIÓN INMEDIATA. Sin preparación previa requerida.",
    learningES: "En urgencias usamos HEPARINA (Verde) en lugar de suero para ganar tiempo.",
    learningRO: "La urgențe folosim HEPARINĂ (Verde) pentru viteză. Ordine: Albastru -> Verde -> Mov."
  },
  {
    type: "anemia",
    service: "HEMATOLOGÍA",
    doctor: "Dra. Sanchez",
    priority: "Normal",
    tests_visual: ["Hemograma", "Reticulocitos", "VSG (Velocidad)", "Perfil Férrico"],
    tests_extra: ["COAGULACIÓN", "VITAMINA B12", "ÁCIDO FÓLICO"],
    tubesNeeded: ["yellow", "purple", "black"], 
    correctOrder: ["yellow", "purple", "black"], 
    neededChecks: ["hemo", "bioq", "vsg"],
    instructions: "Ayuno 8h. Evitar ejercicio físico intenso 24h antes.",
    learningES: "La VSG (Negro) suele ir al final. El orden es Suero -> EDTA -> VSG.",
    learningRO: "VSH (Negru) este de obicei ultimul. Ordinea este Ser -> EDTA -> VSH."
  }
];

// --- INFORMACIÓN TUBOS ---
const TUBES_INFO = {
  blue: { 
    id: 'blue', color: "bg-sky-400/20", liquid: "bg-sky-500", cap:"bg-sky-500", 
    label: "Citrato", code: "Coagulación", fillLevel: "100%", additive: "Citrato Sódico", 
    lab: "Hematología", utility: "INR, TP, TTPA", heightClass: "h-32", care: "⚠️ CRÍTICO: Llenar EXACTO."
  },
  yellow: { 
    id: 'yellow', color: "bg-yellow-400/20", liquid: "bg-yellow-500", cap:"bg-yellow-400", 
    label: "Suero Gel", code: "Bioquímica", fillLevel: "90%", additive: "Activador+Gel", 
    lab: "Bioquímica", utility: "Glucosa, Colesterol", heightClass: "h-40", care: "Invertir 5-6 veces."
  },
  purple: { 
    id: 'purple', color: "bg-purple-600/20", liquid: "bg-purple-700", cap:"bg-purple-600", 
    label: "EDTA", code: "Hemograma", fillLevel: "100%", additive: "EDTA K2", 
    lab: "Hematología", utility: "Hb, Leucocitos", heightClass: "h-32", care: "Invertir 8-10 veces."
  },
  green: { 
    id: 'green', color: "bg-emerald-500/20", liquid: "bg-emerald-600", cap:"bg-emerald-500", 
    label: "Heparina", code: "Urgencias", fillLevel: "95%", additive: "Heparina Litio", 
    lab: "Urgencias", utility: "Troponina, Iones", heightClass: "h-32", care: "Invertir 8-10 veces."
  },
  black: { 
    id: 'black', color: "bg-gray-800/20", liquid: "bg-black", cap:"bg-black", 
    label: "VSG", code: "VSG", fillLevel: "100%", additive: "Citrato 1:4", 
    lab: "Hematología", utility: "Velocidad Sedim.", heightClass: "h-32", care: "Llenado crítico."
  }
};

export const BloodExtractionSim = ({ lang }) => {
  const [step, setStep] = useState(1);
  const [currentCase, setCurrentCase] = useState(null);
  
  // Estados
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTubes, setSelectedTubes] = useState([]);
  const [userOrder, setUserOrder] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  
  // Sistema de Ayuda
  const [errorCount, setErrorCount] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  
  const isEs = lang === 'es';

  // Manejo de timers para animaciones (SOLUCIÓN AL ERROR DE HOOKS)
  useEffect(() => {
    let timer;
    if (step === 4) {
      // Auto-avance en paso 4 (Llenado)
      const duration = 4500 * (currentCase?.tubesNeeded?.length || 1);
      timer = setTimeout(() => setStep(5), duration);
    }
    return () => clearTimeout(timer);
  }, [step, currentCase]);

  // Iniciar
  useEffect(() => {
    startNewCase();
  }, []);

  const startNewCase = () => {
    const patientData = generatePatient();
    const scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
    
    setCurrentCase({
        ...scenario,
        patient: patientData,
        id: patientData.id_peticion,
        date: new Date().toLocaleDateString('es-ES')
    });

    setStep(1);
    setSelectedTests([]);
    setSelectedTubes([]);
    setUserOrder([]);
    setFeedbackMsg(null);
    setIsZoomed(false);
    setErrorCount(0);
    setShowHelp(false);
  };

  // --- PASO 1: VOLANTE VISUAL ---
  const VolanteVisual = ({ zoomed = false }) => {
      if (!currentCase) return null;
      
      return (
        <div 
            onClick={() => !zoomed && setIsZoomed(true)}
            className={`bg-white text-slate-900 font-sans shadow-xl border border-slate-300 relative overflow-hidden transition-all duration-300 select-none origin-top
            ${zoomed ? 'w-full max-w-full scale-100 cursor-default mb-10' : 'w-full max-w-[320px] rotate-1 hover:rotate-0 hover:scale-105 cursor-zoom-in mx-auto'}`}
        >
            <div className="border-b-2 border-slate-800 p-4 flex justify-between items-start bg-slate-50/30">
                <div className="flex flex-col">
                    <h1 className="font-black text-2xl tracking-tighter leading-none text-slate-900">sescam</h1>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 mt-1">Servicio de Salud de Castilla-La Mancha</span>
                    <span className="text-[11px] font-bold mt-2 text-slate-800">HOSPITAL UNIVERSITARIO GUADALAJARA</span>
                </div>
                <div className="text-right">
                    <div className="border-2 border-slate-800 px-2 py-1 inline-block mb-1 bg-white">
                        <span className="font-mono font-bold text-xl">{currentCase.patient.id_peticion.toString().slice(0,4)}</span>
                    </div>
                    <div className="h-8 w-28 bg-slate-900 ml-auto" style={{background: 'repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 4px)'}}></div>
                    <span className="text-[10px] font-mono block mt-1">{currentCase.patient.id_peticion}</span>
                </div>
            </div>

            <div className="border-b border-slate-400 bg-slate-100 p-3 text-[11px] font-mono grid grid-cols-12 gap-2">
                <div className="col-span-12 sm:col-span-8 border-b sm:border-b-0 sm:border-r border-slate-300 pb-2 sm:pb-0 sm:pr-2">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-wide">PACIENTE</span>
                    <strong className="text-sm text-slate-900 block truncate">{currentCase.patient.fullName}</strong>
                </div>
                <div className="col-span-6 sm:col-span-2 border-r border-slate-300 pr-2">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-wide">NHC</span>
                    <strong className="text-slate-900">{currentCase.patient.nhc}</strong>
                </div>
                <div className="col-span-6 sm:col-span-2">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-wide">EDAD/SEXO</span>
                    <strong className="text-slate-900">{currentCase.patient.age} / {currentCase.patient.sex}</strong>
                </div>
            </div>

            <div className="border-b-2 border-slate-800 p-3 text-[11px] grid grid-cols-2 gap-4 bg-white">
                <div>
                    <span className="text-[9px] text-slate-500 uppercase block font-bold">Peticionario</span>
                    <strong className="text-slate-800 block mb-1">{currentCase.doctor}</strong>
                    <span className="text-slate-600 block">{currentCase.service}</span>
                </div>
                <div className="text-right">
                    <span className="text-[9px] text-slate-500 uppercase block font-bold">Fecha Solicitud</span>
                    <strong className="text-slate-800 block mb-1">{currentCase.date}</strong>
                    <span className={`font-black px-2 py-0.5 rounded text-[10px] ${currentCase.priority === 'URGENTE' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'}`}>
                        {currentCase.priority}
                    </span>
                </div>
            </div>

            <div className="p-4 bg-white min-h-[220px]">
                <div className="border-b-2 border-slate-800 mb-3 pb-1">
                    <span className="bg-slate-800 text-white text-[10px] px-3 py-1 font-bold uppercase tracking-wider">DETERMINACIONES SOLICITADAS</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[11px] font-mono leading-tight">
                    {currentCase.tests_visual.map((test, i) => (
                        <div key={`req-${i}`} className="flex items-start gap-2 group">
                            <div className="w-3.5 h-3.5 bg-slate-900 flex items-center justify-center text-white text-[9px] font-bold mt-0.5 shrink-0">X</div> 
                            <span className="text-slate-900 font-bold">{test}</span>
                        </div>
                    ))}
                    {currentCase.tests_extra.map((test, i) => (
                        <div key={`extra-${i}`} className="flex items-start gap-2 opacity-30 grayscale">
                            <div className="w-3.5 h-3.5 border-2 border-slate-400 mt-0.5 shrink-0"></div> 
                            <span className="text-slate-500 font-medium decoration-slate-400">{test}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-blue-50/50 border-t border-slate-300 p-2 text-[9px] text-center text-slate-600 font-medium leading-snug">
                <strong>INSTRUCCIONES AL PACIENTE:</strong> {currentCase.instructions}
            </div>
        </div>
      );
  };

  // --- RENDERIZADO POR PASOS ---
  
  const renderContent = () => {
    switch (step) {
      // PASO 1: RECEPCIÓN
      case 1:
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500 pb-24 font-body">
            <div className="bg-brand-light p-4 mb-4 rounded-xl border-l-4 border-brand-primary shadow-sm">
              <h3 className="font-heading font-bold text-brand-dark text-lg flex items-center gap-2">
                  <span className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">1</span> 
                  {isEs ? "Recepción de la Petición" : "Primirea Cererii"}
              </h3>
              <p className="text-sm text-slate-600 mt-1 ml-10">
                  {isEs ? "Haga clic en el volante para ampliarlo y leer las pruebas." : "Faceți clic pe formular pentru a-l mări."}
              </p>
            </div>

            <div className="flex justify-center my-6">
               <VolanteVisual />
            </div>
            
            {isZoomed && (
                <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-start justify-center p-0 animate-in fade-in duration-200 overflow-y-auto" onClick={() => setIsZoomed(false)}>
                    <div className="relative w-full max-w-full m-0 min-h-screen flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setIsZoomed(false)} className="fixed top-4 right-4 z-[110] text-white hover:text-red-400 bg-black/50 rounded-full p-2 backdrop-blur-md border border-white/20">
                            <X size={24} />
                        </button>
                        <div className="w-full p-2 transform scale-100 origin-top">
                            <VolanteVisual zoomed={true} />
                        </div>
                    </div>
                </div>
            )}
            
            <button onClick={() => setStep(3)} className="mt-4 w-full bg-brand-primary text-white py-4 rounded-xl font-heading font-bold text-lg shadow-lg hover:bg-brand-deep transition-all active:scale-[0.98] flex justify-center items-center gap-2">
               {isEs ? "Confirmar Extracción" : "Confirmați Extracția"} <ArrowRight size={20}/>
            </button>
          </div>
        );

      // PASO 2: INTERPRETACIÓN
      case 2:
        const allOptions = [
            {id: 'hemo', label: isEs ? 'Hemograma (Sangre Total)' : 'Hemoleucogramă'},
            {id: 'coag', label: isEs ? 'Coagulación (Plasma Citrato)' : 'Coagulare'},
            {id: 'bioq', label: isEs ? 'Bioquímica (Suero)' : 'Biochimie (Ser)'},
            {id: 'gases', label: isEs ? 'Gasometría Venosa' : 'Gazometrie'},
            {id: 'vsg', label: isEs ? 'Velocidad Sedimentación' : 'VSH'}
        ];

        const validateStep2 = () => {
            const correct = currentCase.neededChecks.sort().join(',');
            const user = selectedTests.sort().join(',');

            if (correct === user) {
                setFeedbackMsg(null);
                setErrorCount(0);
                setShowHelp(false);
                setStep(3);
            } else {
                const newErrorCount = errorCount + 1;
                setErrorCount(newErrorCount);
                if (newErrorCount >= 3) {
                    setShowHelp(true);
                    setFeedbackMsg(isEs ? "⚠️ 3 fallos. Sigue la ayuda visual." : "⚠️ 3 greșeli.");
                } else {
                    setFeedbackMsg(isEs ? "❌ Interpretación incorrecta." : "❌ Incorect.");
                }
            }
        };

        const handleGoBack = () => {
            setFeedbackMsg(null); 
            setStep(1);
        };

        return (
            <div className="animate-in slide-in-from-right pb-24 font-body">
                <div className="bg-indigo-50 p-4 mb-6 rounded-xl border-l-4 border-indigo-500">
                  <h3 className="font-heading font-bold text-indigo-900 text-lg flex items-center gap-2">
                      <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">2</span> 
                      {isEs ? "Interpretación Clínica" : "Interpretare Clinică"}
                  </h3>
                  <p className="text-sm text-indigo-800 mt-1 ml-10">
                      {isEs ? "Marque los grupos de pruebas solicitados:" : "Bifați grupurile de teste:"}
                  </p>
                </div>

                <div className="space-y-3">
                    {allOptions.map(opt => {
                        // AYUDA VISUAL: Ámbar parpadeante
                        const isCorrectAnswer = currentCase.neededChecks.includes(opt.id);
                        const shouldBlink = showHelp && isCorrectAnswer;

                        return (
                        <button 
                          key={opt.id} 
                          onClick={() => {
                              if (selectedTests.includes(opt.id)) setSelectedTests(selectedTests.filter(x => x !== opt.id));
                              else setSelectedTests([...selectedTests, opt.id]);
                          }}
                          className={`w-full p-5 rounded-xl border-2 flex justify-between items-center transition-all 
                          ${shouldBlink ? 'animate-pulse ring-4 ring-amber-400 border-amber-500 bg-amber-50' : ''}
                          ${selectedTests.includes(opt.id) ? 'border-brand-primary bg-brand-light/50 ring-1 ring-brand-primary' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                        >
                            <span className="font-bold text-slate-700 text-lg">{opt.label}</span>
                            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${selectedTests.includes(opt.id) ? 'bg-brand-primary border-brand-primary' : 'border-slate-300 bg-white'}`}>
                               {selectedTests.includes(opt.id) && <CheckCircle size={16} className="text-white" />}
                            </div>
                        </button>
                    )})}
                </div>

                {feedbackMsg && (
                    <div className="mt-6 p-4 bg-red-100 text-red-700 text-sm font-bold rounded-xl flex flex-col items-center gap-3 animate-shake border border-red-200 shadow-sm">
                        <div className="flex items-center gap-2"><AlertTriangle size={20}/> {feedbackMsg}</div>
                        <button onClick={handleGoBack} className="bg-white text-red-800 px-4 py-2 rounded-lg text-xs font-bold border border-red-200 shadow-sm flex items-center gap-2 hover:bg-red-50 transition-colors">
                          <ArrowLeft size={16}/> {isEs ? "VER VOLANTE OTRA VEZ" : "VEZI DIN NOU CEREREA"}
                        </button>
                    </div>
                )}

                <button onClick={validateStep2} className="mt-8 w-full bg-slate-800 text-white py-4 rounded-xl font-heading font-bold text-lg shadow-lg hover:bg-black transition-colors">
                   {isEs ? "CONFIRMAR SELECCIÓN" : "CONFIRMĂ SELECȚIA"}
                </button>
            </div>
        );

      // PASO 3: CARRITO
      case 3:
        const allTubes = ["blue", "yellow", "purple", "green", "black"];
        
        const validateStep3 = () => {
            const needed = [...currentCase.tubesNeeded].sort().join(',');
            const selected = [...selectedTubes].sort().join(',');
            
            if (needed === selected) {
                setFeedbackMsg(null);
                setErrorCount(0);
                setShowHelp(false);
                const btn = document.getElementById('btn-confirm-tubes');
                if(btn) {
                    btn.textContent = isEs ? "¡EXACTO!" : "EXACT!";
                    btn.classList.add('bg-green-600', 'scale-105');
                }
                setTimeout(() => setStep(4), 800);
            } else {
                const newErrorCount = errorCount + 1;
                setErrorCount(newErrorCount);
                if (newErrorCount >= 3) {
                    setShowHelp(true);
                    setFeedbackMsg(isEs ? "⚠️ 3 fallos. Sigue la ayuda visual." : "⚠️ 3 greșeli.");
                } else {
                    setFeedbackMsg(isEs ? "❌ Selección incorrecta." : "❌ Incorect.");
                }
            }
        };

        return (
            <div className="animate-in slide-in-from-right pb-24 font-body">
                 <div className="bg-amber-50 p-4 mb-6 rounded-xl border-l-4 border-amber-500">
                  <h3 className="font-heading font-bold text-amber-900 text-lg flex items-center gap-2">
                      <span className="bg-[#E9B82B] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">3</span> 
                      {isEs ? "El Carrito de Extracciones" : "Căruciorul de Recoltare"}
                  </h3>
                  <p className="text-sm text-amber-800 mt-1 ml-10">
                      {isEs ? "Seleccione los tubos necesarios." : "Selectați tuburile necesare."}
                  </p>
                </div>
                 
                 <div className="flex flex-wrap gap-6 justify-center py-12 bg-slate-100 rounded-2xl inner-shadow border border-slate-200 items-end min-h-[300px]">
                     {allTubes.map(tube => {
                         const isCorrectTube = currentCase.tubesNeeded.includes(tube);
                         const shouldBlink = showHelp && isCorrectTube;

                         return (
                         <button 
                           key={tube} 
                           onClick={() => {
                               if (selectedTubes.includes(tube)) setSelectedTubes(selectedTubes.filter(x => x !== tube));
                               else setSelectedTubes([...selectedTubes, tube]);
                           }}
                           className={`w-14 ${TUBES_INFO[tube].heightClass} relative transition-all duration-300 flex flex-col items-center group
                           ${shouldBlink ? 'animate-pulse ring-4 ring-amber-400 rounded-b-3xl' : ''}
                           ${selectedTubes.includes(tube) ? '-translate-y-6 scale-110 drop-shadow-2xl z-10' : 'opacity-70 hover:opacity-100 hover:-translate-y-2'}`}
                         >
                             <div className={`w-full h-full rounded-b-3xl border border-slate-300/50 bg-white/40 backdrop-blur-sm overflow-hidden relative shadow-inner`}>
                                  <div className={`h-10 w-full ${TUBES_INFO[tube].cap} absolute top-0 z-20 shadow-md border-b border-black/10`}></div>
                                  <div className="absolute top-12 left-1 right-1 h-24 bg-white/95 border border-slate-200 flex flex-col justify-center items-center p-2 text-center shadow-sm">
                                      <span className="font-black text-slate-800 uppercase leading-none text-xs mb-1">{TUBES_INFO[tube].label}</span>
                                      <div className="w-full h-px bg-slate-300 my-1"></div>
                                      <span className="text-[10px] text-slate-500 font-bold">{TUBES_INFO[tube].additive}</span>
                                      <span className="text-[9px] text-slate-400 mt-1 font-mono">{TUBES_INFO[tube].code}</span>
                                  </div>
                                  <div className="absolute bottom-4 left-0 right-0 text-center">
                                      <span className={`text-[9px] font-black uppercase tracking-widest ${selectedTubes.includes(tube) ? 'text-brand-primary' : 'text-slate-300'}`}>
                                          {selectedTubes.includes(tube) ? 'VACUUM' : ''}
                                      </span>
                                  </div>
                             </div>
                             {selectedTubes.includes(tube) && (
                                 <div className="absolute -top-4 -right-4 bg-brand-primary text-white rounded-full p-2 shadow-lg animate-bounce-in z-30 border-4 border-white">
                                     <CheckCircle size={20}/>
                                 </div>
                             )}
                         </button>
                     )})}
                 </div>

                 {feedbackMsg && (
                     <div className="mt-6 p-4 bg-red-100 text-red-700 text-sm font-bold rounded-xl flex items-center gap-3 animate-shake">
                         <AlertTriangle size={20}/> {feedbackMsg}
                     </div>
                 )}

                 <button id="btn-confirm-tubes" onClick={validateStep3} className="mt-8 w-full bg-brand-deep text-white py-4 rounded-xl font-heading font-bold text-lg shadow-lg hover:bg-brand-dark transition-all duration-300">
                   {isEs ? "RECOGER MATERIAL" : "IA MATERIALELE"}
                 </button>
            </div>
        );

      // PASO 4: LLENADO (ANIMACIÓN)
      case 4:
        return (
            <div className="flex flex-col items-center justify-center h-full animate-in zoom-in duration-700 pb-20">
                <div className="bg-white p-4 rounded-full shadow-xl mb-8 animate-pulse border-4 border-brand-light text-brand-primary">
                    <ZoomIn size={48}/>
                </div>
                <h3 className="font-heading font-bold text-slate-700 mb-10 text-center px-4 uppercase tracking-widest text-sm">
                    {isEs ? "Realizando venopunción y llenado..." : "Se efectuează venopuncția și umplerea..."}
                </h3>
                
                <div className="flex gap-4 items-end h-80">
                    {selectedTubes.map((tube, i) => (
                        <div key={tube} className={`relative w-14 ${TUBES_INFO[tube].heightClass} bg-slate-50 border border-slate-300 rounded-b-2xl overflow-hidden shadow-2xl`}>
                            <div className={`h-10 w-full ${TUBES_INFO[tube].cap} absolute top-0 z-20 shadow-md`}></div>
                            <div className="absolute top-12 left-1 right-1 h-24 bg-white border border-slate-200 z-10 flex flex-col items-center justify-center text-[8px] text-center opacity-90 shadow-sm px-1">
                                <strong className="block text-[9px] truncate w-full mb-1">{currentCase.patient.fullName}</strong>
                                <span className="font-mono">{currentCase.patient.nhc}</span>
                                <div className="w-full h-6 bg-slate-900 mt-1 mb-1 barcode-pattern"></div>
                            </div>
                            <div 
                              className="absolute bottom-0 w-full bg-red-700 transition-all ease-out"
                              style={{ 
                                  height: TUBES_INFO[tube].fillLevel, 
                                  transitionDuration: '3.5s', 
                                  transitionDelay: `${i * 3.5}s`,
                              }}
                            >
                                 <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                 <div className="absolute top-0 w-full h-1 bg-red-400/50 blur-sm"></div>
                            </div>
                            <div className="absolute top-[20%] w-full flex items-center justify-between px-1 z-30 opacity-70">
                                 <div className="border-t-2 border-black w-4"></div>
                                 <span className="text-[7px] font-black bg-white/80 px-1 rounded">MAX</span>
                                 <div className="border-t-2 border-black w-4"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 px-6 py-3 bg-white rounded-full shadow-lg border border-slate-100 flex items-center gap-3 animate-in slide-in-from-bottom duration-1000 delay-500">
                     <Info size={20} className="text-blue-500"/>
                     <p className="text-sm text-slate-600 font-bold">
                        {isEs ? "El enrase del tubo azul es CRÍTICO." : "Nivelul la tubul albastru e CRITIC."}
                     </p>
                </div>
            </div>
        );

      // PASO 5: ORDEN
      case 5:
        const availableNumbers = Array.from({length: selectedTubes.length}, (_, i) => i + 1);

        const validateStep5 = () => {
            const sortedUserTubes = Object.keys(userOrder).sort((a,b) => userOrder[a] - userOrder[b]);
            const finalUserSequence = [];
            for(let i=1; i<=selectedTubes.length; i++) {
                const tubeWithNum = Object.keys(userOrder).find(key => userOrder[key] === i);
                if(tubeWithNum) finalUserSequence.push(tubeWithNum);
            }

            if (JSON.stringify(finalUserSequence) === JSON.stringify(currentCase.correctOrder)) {
                setStep(6);
            } else {
                setFeedbackMsg(isEs 
                    ? "⛔ ORDEN INCORRECTO. Riesgo de contaminación cruzada." 
                    : "⛔ ORDINE INCORECTĂ. Risc de contaminare.");
            }
        };

        return (
            <div className="animate-in slide-in-from-right pb-24 font-body">
                 <div className="bg-purple-50 p-4 mb-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="font-heading font-bold text-purple-900 text-lg flex items-center gap-2">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">5</span> 
                        {isEs ? "Orden de Llenado" : "Ordinea de Umplere"}
                    </h3>
                    <p className="text-sm text-purple-800 mt-1 ml-10">
                        {isEs ? "Asigne el número de orden correcto (Protocolo CLSI):" : "Atribuiți numărul corect de ordine:"}
                    </p>
                  </div>
                 
                 <div className="flex justify-center gap-4 mb-8 min-h-[300px] items-end">
                     {selectedTubes.map(tube => (
                         <div key={tube} className="flex flex-col items-center gap-3">
                             <div className="grid grid-cols-1 gap-2 mb-2 bg-slate-100 p-2 rounded-lg border border-slate-200">
                                 {availableNumbers.map(n => (
                                     <button 
                                       key={n}
                                       onClick={() => {
                                           const newOrder = {...userOrder};
                                           Object.keys(newOrder).forEach(key => {
                                               if (newOrder[key] === n) delete newOrder[key];
                                           });
                                           newOrder[tube] = n;
                                           setUserOrder(newOrder);
                                       }}
                                       className={`w-8 h-8 rounded-full font-black text-sm transition-all shadow-sm
                                       ${userOrder[tube] === n ? 'bg-brand-primary text-white scale-110 ring-2 ring-offset-1 ring-brand-primary' : 'bg-white text-slate-400 hover:bg-slate-200'}`}
                                     >
                                         {n}
                                     </button>
                                 ))}
                             </div>
                             <div className={`w-12 ${TUBES_INFO[tube].id === 'yellow' ? 'h-32' : 'h-24'} ${TUBES_INFO[tube].color} border border-slate-300 rounded-b-2xl relative shadow-md overflow-hidden`}>
                                 <div className={`h-6 w-full ${TUBES_INFO[tube].cap} absolute top-0`}></div>
                                 <div className="absolute bottom-0 w-full h-[60%] bg-red-800 opacity-80"></div>
                                 <div className="absolute bottom-4 w-full text-center text-[10px] font-black uppercase text-slate-500 transform -rotate-90">
                                     {TUBES_INFO[tube].label}
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>

                 {feedbackMsg && (
                     <div className="mb-4 p-4 bg-red-100 text-red-800 text-sm rounded-xl flex items-center gap-3 animate-shake border border-red-200 font-bold">
                         <AlertTriangle size={24} className="shrink-0"/> {feedbackMsg}
                     </div>
                 )}

                 <button 
                   onClick={validateStep5} 
                   disabled={Object.keys(userOrder).length !== selectedTubes.length}
                   className="w-full bg-slate-800 text-white py-4 rounded-xl font-heading font-bold text-lg disabled:opacity-50 shadow-lg hover:bg-black transition-colors"
                 >
                     {isEs ? "ENVIAR AL LABORATORIO" : "TRIMITE LA LABORATOR"}
                 </button>
            </div>
        );

      // PASO 6: REPASO
      case 6:
        return (
          <div className="animate-in zoom-in duration-500 pb-24 font-body">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="text-green-600" size={32}/>
                      <h2 className="font-heading font-black text-xl text-green-800">
                          {isEs ? "PROCEDIMIENTO COMPLETADO" : "PROCEDURĂ CORECTĂ"}
                      </h2>
                  </div>
                  <p className="text-sm text-green-800 leading-relaxed font-medium mb-3">
                      {currentCase?.learningES}
                  </p>
              </div>

              <h3 className="font-heading font-bold text-slate-700 mb-4 text-lg border-b-2 border-slate-200 pb-2">
                  {isEs ? "GUÍA TÉCNICA DE TUBOS" : "GHID TEHNIC TUBURI"}
              </h3>

              <div className="space-y-4">
                  {Object.values(TUBES_INFO).map((tube) => (
                      <div key={tube.id} className="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden flex flex-col sm:flex-row transition-all hover:shadow-lg">
                          <div className={`p-4 ${tube.liquid} text-white flex items-center justify-between sm:w-1/3 sm:flex-col sm:justify-center sm:text-center`}>
                              <FlaskConical size={24} className="opacity-80"/>
                              <div>
                                  <h4 className="font-black text-lg">{tube.label}</h4>
                                  <p className="text-xs opacity-90 font-medium">{tube.code}</p>
                              </div>
                          </div>
                          <div className="p-4 flex-1 text-sm space-y-2">
                              <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-slate-50 p-2 rounded">
                                      <span className="text-[9px] uppercase font-bold text-slate-400 block">Aditivo</span>
                                      <span className="font-bold text-slate-700">{tube.additive}</span>
                                  </div>
                                  <div className="bg-slate-50 p-2 rounded">
                                      <span className="text-[9px] uppercase font-bold text-slate-400 block">Laboratorio</span>
                                      <span className="font-bold text-slate-700">{tube.lab}</span>
                                  </div>
                              </div>
                              <div>
                                  <span className="text-[9px] uppercase font-bold text-slate-400 block">Uso Clínico</span>
                                  <p className="text-slate-600 leading-snug">{tube.utility}</p>
                              </div>
                              <div className="pt-2 border-t border-slate-100 mt-2">
                                  <p className="text-xs text-red-600 font-bold flex items-start gap-1">
                                      <AlertTriangle size={12} className="mt-0.5 shrink-0"/> {tube.care}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              <button onClick={startNewCase} className="mt-10 w-full bg-brand-primary text-white py-4 rounded-xl font-heading font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-brand-deep transition-all active:scale-95">
                  <RotateCcw size={22} /> {isEs ? "SIMULAR NUEVO CASO" : "SIMULEAZĂ CAZ NOU"}
              </button>
          </div>
        );

      default:
        return null;
    }
  };

  // --- RENDERIZADO PRINCIPAL CON GUARD ---
  if (!currentCase) return (
    <div className="h-full flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-brand-primary"></div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-slate-50 font-body">
       {/* Barra de Progreso */}
       <div className="h-2 w-full bg-slate-200 sticky top-0 z-50">
           <div 
             className="h-full bg-gradient-to-r from-brand-primary to-brand-deep transition-all duration-700 ease-out"
             style={{ width: `${(step / 6) * 100}%` }}
           ></div>
       </div>

       {/* Subcabecera Estado */}
       <div className="bg-white p-3 shadow-sm flex justify-between items-center px-4 border-b border-slate-200 sticky top-2 z-40">
           <div className="flex items-center gap-2 text-brand-dark font-bold">
               <Stethoscope size={18}/>
               <span className="text-sm uppercase tracking-wider">Simulación</span>
           </div>
           <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 border border-slate-200">
               Caso #{currentCase.id_peticion}
           </span>
       </div>

       <div className="flex-1 overflow-y-auto p-4 relative">
           {renderContent()}
       </div>
    </div>
  );
};