import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Heart,
  Zap,
  Trophy,
  XCircle,
  CheckCircle2,
  RotateCcw,
  BrainCircuit,
  ArrowRight,
  Thermometer,
  Lock,
  Star,
  Check,
  Syringe,
  Pill,
  Activity,
  Droplet,
  HeartPulse,
  Stethoscope
} from "lucide-react";
import { UNIT_1_DATA } from "../data/duelingo/unit1";
import { getRandomWelcomeMessage, getCorrectMessage, getWrongMessage } from "../data/duelingo/elenaMessages";

// Iconos de salud para cada lección
const HEALTH_ICONS = [Droplet, Stethoscope, HeartPulse, Syringe, Pill, Activity];

// Colores según nivel de dificultad
const LEVEL_COLORS = {
  easy: { from: "from-emerald-400", to: "to-emerald-600", shadow: "rgb(16,185,129)" },
  medium: { from: "from-amber-400", to: "to-amber-600", shadow: "rgb(245,158,11)" },
  hard: { from: "from-rose-400", to: "to-rose-600", shadow: "rgb(244,63,94)" }
};

export const DuelingoGame = ({ lang, toggleLang }) => {
  const isEs = lang === "es";
  const [view, setView] = useState("welcome"); // welcome, path, quiz, summary
  const [activeUnit, setActiveUnit] = useState(UNIT_1_DATA);
  const [activeLevel, setActiveLevel] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  
  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null); // null, 'correct', 'error'
  const [feedbackText, setFeedbackText] = useState("");
  const [streak, setStreak] = useState(0);

  // Datos de usuario y progreso
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Progreso del juego (solo persistente para usuarios logueados)
  const [gameProgress, setGameProgress] = useState({
    totalXP: 0,
    currentStreak: 0,
    maxStreak: 0,
    completedLessons: [],
    heartsRemaining: 5,
    lastPlayed: null
  });

  // Cargar datos de usuario y progreso
  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed && parsed.name && parsed.name !== "Invitado" && parsed.name !== "Guest") {
          setUserData(parsed);
          setIsLoggedIn(true);
          
          // Cargar progreso guardado para usuario logueado
          const savedProgress = localStorage.getItem(`duelingo_progress_${parsed.name}`);
          if (savedProgress) {
            const progressData = JSON.parse(savedProgress);
            setGameProgress(progressData);
            setHearts(progressData.heartsRemaining || 5);
            setStreak(progressData.currentStreak || 0);
          }
        } else {
          setIsLoggedIn(false);
          // Invitado: valores por defecto, no cargamos nada
          resetProgressForGuest();
        }
      } catch (e) {
        console.error("Error parsing user data:", e);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
      resetProgressForGuest();
    }
  }, []);

  // Resetear progreso para invitados
  const resetProgressForGuest = () => {
    setGameProgress({
      totalXP: 0,
      currentStreak: 0,
      maxStreak: 0,
      completedLessons: [],
      heartsRemaining: 5,
      lastPlayed: null
    });
    setHearts(5);
    setStreak(0);
  };

  // Guardar progreso (solo para usuarios logueados)
  const saveProgress = (updatedProgress) => {
    if (isLoggedIn && userData?.name) {
      const progressToSave = {
        ...updatedProgress,
        lastPlayed: new Date().toISOString()
      };
      localStorage.setItem(`duelingo_progress_${userData.name}`, JSON.stringify(progressToSave));
      setGameProgress(progressToSave);
    }
  };

  // Actualizar progreso al completar lección
  const markLessonComplete = (lessonId, xpEarned) => {
    const updatedProgress = {
      ...gameProgress,
      totalXP: gameProgress.totalXP + xpEarned,
      currentStreak: streak,
      maxStreak: Math.max(gameProgress.maxStreak, streak),
      completedLessons: gameProgress.completedLessons.includes(lessonId) 
        ? gameProgress.completedLessons 
        : [...gameProgress.completedLessons, lessonId],
      heartsRemaining: hearts
    };
    
    if (isLoggedIn) {
      saveProgress(updatedProgress);
    }
    setGameProgress(updatedProgress);
  };

  useEffect(() => {
    // Generar mensaje de bienvenida al cargar
    const userName = isLoggedIn ? userData?.name : null;
    const message = getRandomWelcomeMessage(isLoggedIn, userName, isEs);
    setWelcomeMessage(message);
  }, [userData, isEs, isLoggedIn]);

  // Función para aleatorizar array (Fisher-Yates shuffle)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // --- HANDLERS ---
  const startLevel = (level) => {
    // Crear copia del nivel con preguntas aleatorizadas
    const shuffledLevel = {
      ...level,
      questions: shuffleArray(level.questions)
    };
    setActiveLevel(shuffledLevel);
    setCurrentQIndex(0);
    // No resetear corazones si el usuario tiene progreso guardado
    if (!isLoggedIn) {
      setHearts(5);
    }
    setFeedback(null);
    setFeedbackText("");
    setSelectedOption(null);
    setView("quiz");
  };

  const handleEnter = () => {
    setView("path");
  };

  const handleCheck = () => {
    if (!selectedOption) return;
    
    const currentQ = activeLevel.questions[currentQIndex];
    let isCorrect = false;

    if (currentQ.type === "select_correct" || currentQ.type === "image_choice") {
       const opt = currentQ.options.find(o => o.id === selectedOption);
       isCorrect = opt?.correct;
    } else if (currentQ.type === "true_false") {
       isCorrect = selectedOption === currentQ.correct;
    } else if (currentQ.type === "translate") {
       isCorrect = true; 
    }

    if (isCorrect) {
      setFeedback("correct");
      setFeedbackText(getCorrectMessage(isEs));
      setStreak(s => s + 1);
    } else {
      setFeedback("error");
      setFeedbackText(getWrongMessage(isEs));
      setHearts(h => Math.max(0, h - 1));
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < activeLevel.questions.length - 1) {
      setCurrentQIndex(i => i + 1);
      setFeedback(null);
      setFeedbackText("");
      setSelectedOption(null);
    } else {
      // Lección completada - calcular XP y guardar progreso
      const xpEarned = 10 * activeLevel.questions.length; // 10 XP por pregunta
      markLessonComplete(activeLevel.id, xpEarned);
      setView("summary");
    }
  };

  // --- WELCOME VIEW ---
  if (view === "welcome") {
    const isLoggedIn = userData && userData.name && userData.name !== "Invitado" && userData.name !== "Guest";
    
    return (
      <div className="font-rounded min-h-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl" />
        
        {/* Speech Bubble with Message */}
        <div className="relative mb-4 max-w-xs w-full z-10">
          <div 
            className="relative bg-amber-400 p-6 shadow-lg border-4 border-black"
            style={{
              borderRadius: "40px"
            }}
          >
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              {welcomeMessage}
            </p>
            {/* Speech bubble tail */}
            <div 
              className="absolute -bottom-3 left-10 w-0 h-0"
              style={{
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                borderTop: "15px solid #000",
              }}
            />
            <div 
              className="absolute -bottom-2 left-7 w-0 h-0"
              style={{
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderTop: "12px solid #F59E0B",
              }}
            />
          </div>
        </div>

        {/* Maria Isabela Character */}
        <div className="relative z-10 mb-6">
          <img 
            src="/images/maria_isabela.png" 
            alt="Maria Isabela" 
            className="w-64 h-auto drop-shadow-xl"
          />
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="relative bg-slate-900 hover:bg-slate-800 text-white font-normal text-xl px-12 py-4 rounded-2xl shadow-lg transform hover:scale-105 active:scale-95 transition-all z-10"
          style={{
            boxShadow: "0 6px 0 0 #1e293b, 0 8px 20px rgba(0,0,0,0.3)"
          }}
        >
          {isEs ? "Entrar" : "Intră"}
        </button>

        {/* Helper text */}
        <p className="mt-4 text-sm text-slate-500 text-center z-10">
          {isLoggedIn 
            ? (isEs ? "Continúa donde lo dejaste" : "Continuă de unde ai rămas")
            : (isEs ? "Comienza una nueva sesión" : "Începe o sesiune nouă")
          }
        </p>
      </div>
    );
  }

  // --- PATH VIEW ---
  if (view === "path") {
    return (
      <div className="bg-slate-50 min-h-full pb-24">
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 p-4 flex justify-between items-center z-20">
           <div className="flex items-center gap-2">
             <button 
               onClick={() => setView("welcome")}
               className="p-1 rounded-full hover:bg-slate-100 text-slate-500"
             >
               <ArrowLeft size={20} />
             </button>
             <span className="font-bold text-slate-700">DUElingo</span>
           </div>
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 text-red-500 font-bold">
               <Heart fill="currentColor" size={20} />
               <span>{hearts}</span>
             </div>
             <div className="flex items-center gap-1 text-orange-500 font-bold">
               <Zap fill="currentColor" size={20} />
               <span>{gameProgress.totalXP}</span>
             </div>
             {isLoggedIn && (
               <div className="flex items-center gap-1 text-emerald-500 font-bold">
                 <Trophy fill="currentColor" size={18} />
                 <span>{streak}</span>
               </div>
             )}
           </div>
        </div>

        {/* Path UI - Alineado en zigzag estilo Duolingo */}
        <div className="py-8 px-4 flex flex-col items-center space-y-6 relative max-w-sm mx-auto">
           {activeUnit.lessons && activeUnit.lessons.length > 0 ? (
             activeUnit.lessons.map((lesson, idx) => {
               const IconComponent = HEALTH_ICONS[idx % HEALTH_ICONS.length];
               const colors = LEVEL_COLORS[lesson.difficulty] || LEVEL_COLORS.easy;
               // Zigzag: alternar izquierda/derecha
               const offset = idx % 2 === 0 ? "ml-0" : "ml-24";
               const isCompleted = gameProgress.completedLessons.includes(lesson.id);
               
               return (
                 <div key={lesson.id || idx} className={`relative group flex flex-col items-center ${offset} transition-all`}>
                   <button 
                     onClick={() => startLevel(lesson)}
                     className={`w-20 h-20 rounded-full flex items-center justify-center
                       bg-gradient-to-b ${colors.from} ${colors.to} shadow-[0_6px_0_0_rgba(0,0,0,0.2)]
                       active:shadow-none active:translate-y-[6px] transition-all transform hover:scale-105 z-10 relative 
                       ${isCompleted ? "border-4 border-yellow-400 ring-2 ring-yellow-200" : "border-4 border-white"}
                     `}
                   >
                     <IconComponent size={36} className="text-white drop-shadow-md" strokeWidth={2.5} />
                     
                     {/* Floating badge - Stars or Check */}
                     {isCompleted ? (
                       <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-black w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                         <Check size={14} strokeWidth={3} />
                       </div>
                     ) : (
                       <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-0.5">
                         <Star size={10} fill="currentColor" /> {lesson.level || 1}
                       </div>
                     )}
                   </button>
                   <div className="text-center font-bold text-slate-700 text-sm mt-2 max-w-[100px] leading-tight">
                     {isEs ? lesson.titleES : lesson.titleRO}
                   </div>
                 </div>
               )
             })
           ) : (
             <div className="text-center p-8">
               <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                 <BrainCircuit size={40} className="text-emerald-600" />
               </div>
               <h3 className="font-bold text-slate-700 text-lg mb-2">
                 {isEs ? "¡Pronto habrá contenido!" : "Curând va fi conținut!"}
               </h3>
               <p className="text-slate-500 text-sm">
                 {isEs 
                   ? "Estamos preparando lecciones increíbles para ti." 
                   : "Pregătim lecții incredibile pentru tine."}
               </p>
             </div>
           )}

           {/* Locked Levels Placeholders */}
           {[1, 2, 3].map((_, i) => {
             const offset = (activeUnit.lessons.length + i) % 2 === 0 ? "ml-0" : "ml-24";
             return (
               <div key={i} className={`relative grayscale opacity-40 pointer-events-none flex flex-col items-center ${offset}`}>
                 <div className="w-16 h-16 rounded-full bg-slate-200 border-4 border-slate-100 flex items-center justify-center shadow-[0_4px_0_0_rgb(0,0,0,0.1)]">
                   <Lock size={22} className="text-slate-400" />
                 </div>
               </div>
             );
           })}
        </div>
      </div>
    );
  }

  // --- QUIZ VIEW ---
  if (!activeLevel || !activeLevel.questions || activeLevel.questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-full p-8">
        <div className="text-center">
          <BrainCircuit size={64} className="text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-700 mb-2">
            {isEs ? "Sin preguntas disponibles" : "Nu sunt întrebări disponibile"}
          </h2>
          <p className="text-slate-500 mb-4">
            {isEs ? "Pronto añadiremos contenido aquí." : "Curând vom adăuga conținut aici."}
          </p>
          <button
            onClick={() => setView("path")}
            className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl"
          >
            {isEs ? "Volver" : "Înapoi"}
          </button>
        </div>
      </div>
    );
  }

  const activeQ = activeLevel.questions[currentQIndex];
  const progressPercent = ((currentQIndex) / activeLevel.questions.length) * 100;

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Quiz Header */}
      <div className="px-4 py-4 flex items-center gap-4 border-b border-slate-50">
        <button onClick={() => setView("path")} className="text-slate-400 hover:text-slate-600">
          <XCircle size={28} />
        </button>
        <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex items-center gap-1 text-red-500 font-bold">
           <Heart fill="currentColor" size={24} />
           <span>{hearts}</span>
        </div>
      </div>

      {/* Quiz Body */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center max-w-lg mx-auto w-full">
        
        <h2 className="text-2xl font-bold text-slate-700 text-left w-full mb-8 leading-tight">
          {isEs ? activeQ.promptES || activeQ.promptVEN : activeQ.promptRO}
        </h2>

        {/* Question Types */}
        <div className="w-full space-y-3">
          {(activeQ.type === "select_correct" || activeQ.type === "true_false") && (
             activeQ.options ? activeQ.options.map(opt => {
               // Soportar tanto text único como textES/textRO bilingüe
               const optionText = opt.text || (isEs ? opt.textES : opt.textRO) || opt.textES;
               return (
                 <button
                   key={opt.id}
                   onClick={() => !feedback && setSelectedOption(opt.id)}
                   className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98]
                     ${selectedOption === opt.id 
                       ? "border-sky-500 bg-sky-50 text-sky-700" 
                       : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"}
                   `}
                 >
                   <span className="font-semibold">{optionText}</span>
                 </button>
               );
             }) : (
               // True/False
               [true, false].map(val => (
                 <button
                   key={val.toString()}
                   onClick={() => !feedback && setSelectedOption(val)}
                   className={`w-full p-6 text-xl font-bold rounded-xl border-2 transition-all
                     ${selectedOption === val 
                       ? "border-sky-500 bg-sky-50 text-sky-700" 
                       : "border-slate-200 bg-white text-slate-600"}
                   `}
                 >
                   {val ? (isEs ? "VERDADERO" : "ADEVĂRAT") : (isEs ? "FALSO" : "FALS")}
                 </button>
               ))
             )
          )}

          {activeQ.type === "image_choice" && (
             <div className="grid grid-cols-2 gap-4">
               {activeQ.options.map(opt => {
                 const DynIcon = opt.icon ? ICON_MAP[opt.icon] : null;
                 return (
                   <button
                     key={opt.id}
                     onClick={() => !feedback && setSelectedOption(opt.id)}
                     className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all
                       ${selectedOption === opt.id 
                         ? "border-sky-500 bg-sky-50" 
                         : "border-slate-200 bg-white hover:bg-slate-50"}
                     `}
                   >
                      {opt.image ? (
                        <img src={opt.image} alt="" className="w-24 h-24 object-contain" />
                      ) : DynIcon ? (
                        <DynIcon size={64} className="text-slate-700" />
                      ) : (
                        <div className="w-24 h-24 bg-slate-100 rounded-lg" />
                      )}
                      <span className={`font-bold ${selectedOption === opt.id ? "text-sky-700" : "text-slate-600"}`}>
                        {opt.text || (isEs ? opt.textES : opt.textRO) || opt.textES}
                      </span>
                   </button>
                 )
               })}
             </div>
          )}
        </div>

      </div>

      {/* Footer / Feedback */}
      <div className={`
        fixed bottom-0 left-0 md:absolute md:w-full w-full border-t p-4 md:p-6 transition-colors duration-300 z-50
        ${feedback === "correct" ? "bg-green-100 border-green-200" : 
          feedback === "error" ? "bg-red-100 border-red-200" : "bg-white border-slate-200"}
      `}>
          {feedback && (
            <div className="mb-4 flex items-center gap-3 animate-in slide-in-from-bottom-2">
              <div className={`p-1 rounded-full ${feedback === "correct" ? "bg-green-500" : "bg-red-500"} text-white`}>
                {feedback === "correct" ? <Check size={28} /> : <XCircle size={28} />}
              </div>
              <div>
                <h3 className={`font-black text-xl ${feedback === "correct" ? "text-green-700" : "text-red-700"}`}>
                  {feedbackText}
                </h3>

                {feedback === "error" && (
                  <p className="text-red-600 text-sm mt-1">
                    {/* Simplified correction showing logic */}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="max-w-lg mx-auto">
             {!feedback ? (
               <button 
                 onClick={handleCheck}
                 disabled={selectedOption === null}
                 className={`w-full py-3.5 rounded-xl font-black text-sm tracking-wider uppercase transition-all
                   ${selectedOption !== null 
                     ? "bg-green-500 hover:bg-green-600 text-white shadow-[0_4px_0_0_rgb(21,128,61)] active:shadow-none active:translate-y-[4px]" 
                     : "bg-slate-200 text-slate-400 cursor-not-allowed"}
                 `}
               >
                 {isEs ? "COMPROBAR" : "VERIFICĂ"}
               </button>
             ) : (
               <button 
                 onClick={nextQuestion}
                 className={`w-full py-3.5 rounded-xl font-black text-sm tracking-wider uppercase transition-all
                   ${feedback === "correct" 
                     ? "bg-green-500 hover:bg-green-600 text-white shadow-[0_4px_0_0_rgb(21,128,61)] active:shadow-none active:translate-y-[4px]"
                     : "bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_0_0_rgb(185,28,28)] active:shadow-none active:translate-y-[4px]"}
                 `}
               >
                 {isEs ? "CONTINUAR" : "CONTINUĂ"}
               </button>
             )}
          </div>
      </div>
      
      {/* Overlay for feedback to block clicks if needed */}
    </div>
  );
};
