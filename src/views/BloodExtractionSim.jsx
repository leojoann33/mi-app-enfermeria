import React, { useState } from "react";
import {
  ArrowLeft,
  Syringe,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  HelpCircle,
} from "lucide-react";
import { EXTRACTION_DB } from "../data/index"; // Asegúrate de exportarlo luego

export const BloodExtractionSim = ({ lang, toggleLang }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [selectedTubes, setSelectedTubes] = useState([]);
  const [gameState, setGameState] = useState("playing"); // playing, won, lost
  const [feedback, setFeedback] = useState("");

  const isEs = lang === "es";
  const currentCase = EXTRACTION_DB.cases[currentCaseIndex];

  const t = {
    title: isEs ? "Simulador de Extracción" : "Simulator Recoltare",
    instruction: isEs
      ? "Selecciona los tubos en el ORDEN CORRECTO según la petición:"
      : "Selectați tuburile în ORDINEA CORECTĂ conform cererii:",
    reset: isEs ? "Reiniciar Caso" : "Resetare Caz",
    next: isEs ? "Siguiente Caso" : "Următorul Caz",
    tubes: isEs
      ? "Tubos Disponibles (Clic para añadir)"
      : "Tuburi Disponibile (Click pentru adăugare)",
    tray: isEs
      ? "Bandeja de Extracción (Tu selección)"
      : "Tavă Recoltare (Selecția ta)",
    verify: isEs ? "VERIFICAR ORDEN" : "VERIFICĂ ORDINEA",
    correct: isEs ? "¡CORRECTO!" : "CORECT!",
    wrong: isEs ? "ERROR EN LA SECUENCIA" : "EROARE ÎN SECVENȚĂ",
    legend: isEs ? "Leyenda" : "Legendă",
  };

  const getText = (obj, field) =>
    isEs ? obj[`${field}ES`] : obj[`${field}RO`];

  const handleTubeClick = (tubeId) => {
    if (gameState !== "playing") return;
    // Evitar duplicados si el caso no lo requiere (lógica simple por ahora)
    if (selectedTubes.includes(tubeId)) return;
    setSelectedTubes([...selectedTubes, tubeId]);
  };

  const removeTube = (index) => {
    if (gameState !== "playing") return;
    const newTubes = [...selectedTubes];
    newTubes.splice(index, 1);
    setSelectedTubes(newTubes);
  };

  const checkOrder = () => {
    const correctStr = JSON.stringify(currentCase.correctOrder);
    const userStr = JSON.stringify(selectedTubes);

    if (correctStr === userStr) {
      setGameState("won");
      setFeedback(getText(currentCase, "explanation"));
    } else {
      setGameState("lost");
      // Lógica básica de feedback de error
      if (selectedTubes.length !== currentCase.correctOrder.length) {
        setFeedback(
          isEs
            ? "Faltan o sobran tubos para esta petición."
            : "Lipsesc sau sunt prea multe tuburi."
        );
      } else {
        setFeedback(
          isEs
            ? "El orden es incorrecto. Recuerda: Cultivos > Citrato > Suero > Heparina > EDTA > Glucosa."
            : "Ordinea este incorectă."
        );
      }
    }
  };

  const nextCase = () => {
    const nextIdx = (currentCaseIndex + 1) % EXTRACTION_DB.cases.length;
    setCurrentCaseIndex(nextIdx);
    resetLevel();
  };

  const resetLevel = () => {
    setSelectedTubes([]);
    setGameState("playing");
    setFeedback("");
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body">
      {/* Header */}
      <div className="bg-white p-4 border-b border-slate-100 shadow-sm flex items-center gap-3 sticky top-0 z-10">
        <ArrowLeft
          size={24}
          className="text-slate-600 cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h2 className="font-heading font-bold text-lg text-slate-800 flex-1">
          {t.title}
        </h2>
        <button
          onClick={toggleLang}
          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase hover:bg-slate-200 transition"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* Caso Clínico Card */}
        <div className="bg-blue-600 text-white p-5 rounded-2xl shadow-lg mb-6 relative overflow-hidden">
          <Syringe
            className="absolute -right-4 -bottom-4 opacity-20"
            size={120}
          />
          <h3 className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">
            Case #{currentCase.id}: {getText(currentCase, "title")}
          </h3>
          <p className="text-xl font-heading font-black leading-tight mb-2">
            {getText(currentCase, "order")}
          </p>
          <p className="text-sm text-blue-100 opacity-90">{t.instruction}</p>
        </div>

        {/* Zona de Juego */}
        <div className="space-y-6">
          {/* 1. Tubos Disponibles */}
          <div>
            <h4 className="text-slate-500 text-xs font-bold uppercase mb-3 ml-1">
              {t.tubes}
            </h4>
            <div className="flex flex-wrap gap-3">
              {EXTRACTION_DB.tubes.map((tube) => {
                const isSelected = selectedTubes.includes(tube.id);
                return (
                  <button
                    key={tube.id}
                    onClick={() => handleTubeClick(tube.id)}
                    disabled={isSelected || gameState !== "playing"}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all active:scale-95 ${
                      isSelected
                        ? "opacity-30 border-slate-100 bg-slate-50 grayscale"
                        : "bg-white border-slate-200 hover:border-blue-300 shadow-sm"
                    }`}
                  >
                    {/* Representación visual del tubo */}
                    <div className="w-8 h-20 rounded-full bg-slate-100 border border-slate-300 relative overflow-hidden flex flex-col">
                      <div
                        className={`h-6 w-full ${tube.color} border-b border-slate-300 shrink-0`}
                      />
                      <div className="flex-1 bg-white/50" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 max-w-[80px] text-center leading-tight">
                      {getText(tube, "name")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Bandeja de Selección (Drop Zone visual) */}
          <div className="bg-slate-200 p-4 rounded-2xl min-h-[140px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center relative">
            <span className="absolute top-2 left-4 text-[10px] font-bold text-slate-400 uppercase">
              {t.tray}
            </span>

            {selectedTubes.length === 0 ? (
              <div className="text-slate-400 text-sm font-medium flex items-center gap-2">
                <RefreshCw size={16} /> Empty / Gol
              </div>
            ) : (
              <div className="flex items-end gap-2 mt-4">
                {selectedTubes.map((tubeId, idx) => {
                  const tube = EXTRACTION_DB.tubes.find((t) => t.id === tubeId);
                  return (
                    <div
                      key={idx}
                      className="relative group animate-fade-in-up"
                      onClick={() => removeTube(idx)}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                        {idx + 1}º
                      </div>
                      <div className="w-10 h-28 rounded-full bg-slate-50 border border-slate-300 shadow-md relative overflow-hidden flex flex-col cursor-pointer hover:ring-2 hover:ring-red-400">
                        <div
                          className={`h-8 w-full ${tube.color} border-b border-slate-300 shrink-0 shadow-sm`}
                        />
                        <div className="flex-1 bg-white" />
                        {/* Etiqueta simulada */}
                        <div className="absolute top-10 left-1 right-1 h-12 bg-white border border-slate-200 flex flex-col items-center justify-center gap-1 opacity-80">
                          <div className="w-full h-0.5 bg-black" />
                          <div className="w-2/3 h-0.5 bg-black" />
                          <div className="w-full h-0.5 bg-black" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* 3. Acciones y Feedback */}
          {gameState === "playing" ? (
            <button
              onClick={checkOrder}
              disabled={selectedTubes.length === 0}
              className="w-full py-4 bg-slate-800 disabled:bg-slate-300 text-white rounded-xl font-bold shadow-lg transition-all"
            >
              {t.verify}
            </button>
          ) : (
            <div
              className={`p-5 rounded-2xl border-l-4 shadow-sm animate-fade-in ${
                gameState === "won"
                  ? "bg-emerald-50 border-emerald-500"
                  : "bg-red-50 border-red-500"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                {gameState === "won" ? (
                  <CheckCircle2 className="text-emerald-600" />
                ) : (
                  <AlertCircle className="text-red-600" />
                )}
                <h3
                  className={`font-black text-lg uppercase ${
                    gameState === "won" ? "text-emerald-800" : "text-red-800"
                  }`}
                >
                  {gameState === "won" ? t.correct : t.wrong}
                </h3>
              </div>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                {feedback}
              </p>
              <div className="flex gap-2">
                {gameState === "lost" && (
                  <button
                    onClick={resetLevel}
                    className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50"
                  >
                    {t.reset}
                  </button>
                )}
                <button
                  onClick={nextCase}
                  className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700"
                >
                  {t.next}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Ayuda Rápida */}
        <div className="mt-8 p-4 bg-slate-100 rounded-xl">
          <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-2">
            <HelpCircle size={14} /> {t.legend}
          </h4>
          <div className="space-y-2">
            {EXTRACTION_DB.tubes.map((tube) => (
              <div
                key={tube.id}
                className="flex items-center gap-3 text-xs text-slate-600"
              >
                <div
                  className={`w-3 h-3 rounded-full ${tube.color} shrink-0`}
                />
                <span className="font-semibold w-24 truncate">
                  {getText(tube, "name")}
                </span>
                <span className="text-slate-400 truncate flex-1">
                  {getText(tube, "use")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
