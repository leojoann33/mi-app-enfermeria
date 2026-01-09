// src/Calculators.jsx
import React, { useState } from "react";
import { ArrowLeft, RefreshCw, AlertCircle, Baby, Weight } from "lucide-react";
import { UI_TEXT } from "../data/index";

// 1. CALCULADORA DE DOSIS (Existente)
const DoseCalc = ({ t }) => {
  const [weight, setWeight] = useState("");
  const [dose, setDose] = useState("");
  const [concentration, setConcentration] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(dose);
    const c = parseFloat(concentration);
    if (w && d && c) {
      setResult(((d * w) / c).toFixed(2));
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-800">
        <p className="font-bold">Fórmula:</p>
        <p>(Dosis mg/kg * Peso kg) / Concentración mg/ml</p>
      </div>
      <div className="space-y-3">
        <InputGroup label="Peso (kg)" val={weight} set={setWeight} />
        <InputGroup label="Dosis (mg/kg)" val={dose} set={setDose} />
        <InputGroup
          label="Concentración (mg/ml)"
          val={concentration}
          set={setConcentration}
        />
      </div>
      <button
        onClick={calculate}
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl mt-4"
      >
        Calcular
      </button>
      {result && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center mt-4">
          <p className="text-xs uppercase font-bold text-emerald-600">
            Administrar
          </p>
          <p className="text-3xl font-black text-emerald-700">{result} ml</p>
        </div>
      )}
    </div>
  );
};

// 2. NUEVA: IMC (Índice de Masa Corporal)
const BmiCalc = ({ t, isEs }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // a metros
    if (w && h) {
      const val = (w / (h * h)).toFixed(1);
      setBmi(val);
    }
  };

  const getStatus = (val) => {
    if (val < 18.5)
      return {
        text: isEs ? "Bajo Peso" : "Subponderal",
        color: "text-blue-600",
      };
    if (val < 25)
      return {
        text: isEs ? "Normopeso" : "Greutate Normală",
        color: "text-emerald-600",
      };
    if (val < 30)
      return {
        text: isEs ? "Sobrepeso" : "Supraponderal",
        color: "text-orange-600",
      };
    return { text: isEs ? "Obesidad" : "Obezitate", color: "text-red-600" };
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-800 flex gap-2">
        <Weight size={20} />
        <div>
          <p className="font-bold">NANDA [00232] Obesidad</p>
          <p className="text-xs">Peso (kg) / Altura² (m)</p>
        </div>
      </div>
      <div className="space-y-3">
        <InputGroup
          label={isEs ? "Peso (kg)" : "Greutate (kg)"}
          val={weight}
          set={setWeight}
        />
        <InputGroup
          label={isEs ? "Altura (cm)" : "Înălțime (cm)"}
          val={height}
          set={setHeight}
        />
      </div>
      <button
        onClick={calculate}
        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl mt-4"
      >
        {isEs ? "Calcular IMC" : "Calculează IMC"}
      </button>
      {bmi && (
        <div className="p-4 bg-white border-2 border-slate-100 rounded-xl text-center mt-4 shadow-sm">
          <p className="text-4xl font-black text-slate-800">{bmi}</p>
          <p
            className={`font-bold uppercase tracking-widest ${
              getStatus(bmi).color
            }`}
          >
            {getStatus(bmi).text}
          </p>
        </div>
      )}
    </div>
  );
};

// 3. NUEVA: FPP (Fecha Probable Parto - Naegele)
const FppCalc = ({ t, isEs }) => {
  const [fur, setFur] = useState("");
  const [fpp, setFpp] = useState(null);

  const calculate = () => {
    if (fur) {
      const date = new Date(fur);
      // Regla Naegele: +7 días, -3 meses, +1 año
      date.setDate(date.getDate() + 7);
      date.setMonth(date.getMonth() - 3);
      date.setFullYear(date.getFullYear() + 1);
      setFpp(date.toLocaleDateString(isEs ? "es-ES" : "ro-RO"));
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-pink-50 rounded-xl border border-pink-100 text-sm text-pink-800 flex gap-2">
        <Baby size={20} />
        <div>
          <p className="font-bold">Regla de Naegele</p>
          <p className="text-xs">FUR + 7 días - 3 meses + 1 año</p>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">
          {isEs ? "Fecha Última Regla (FUR)" : "Ultima Menstruație"}
        </label>
        <input
          type="date"
          value={fur}
          onChange={(e) => setFur(e.target.value)}
          className="w-full p-3 bg-white border border-slate-200 rounded-xl"
        />
      </div>
      <button
        onClick={calculate}
        className="w-full py-3 bg-pink-500 text-white font-bold rounded-xl mt-4"
      >
        {isEs ? "Calcular FPP" : "Calculează DPN"}
      </button>
      {fpp && (
        <div className="p-4 bg-white border-2 border-pink-100 rounded-xl text-center mt-4 shadow-sm">
          <p className="text-xs text-slate-400 uppercase font-bold">
            {isEs ? "Fecha Probable" : "Data Probabilă"}
          </p>
          <p className="text-2xl font-black text-pink-600">{fpp}</p>
        </div>
      )}
    </div>
  );
};

const InputGroup = ({ label, val, set }) => (
  <div>
    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
      {label}
    </label>
    <input
      type="number"
      value={val}
      onChange={(e) => set(e.target.value)}
      className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-mono text-lg"
    />
  </div>
);

export const Calculators = ({ type, lang, onBack }) => {
  const isEs = lang === "es";
  const t = UI_TEXT[lang] || UI_TEXT.es;

  const getTitle = () => {
    switch (type) {
      case "dose":
        return t.calc_dose || "Dosis";
      case "bmi":
        return "IMC / BMI";
      case "fpp":
        return isEs ? "Fecha Parto (FPP)" : "Data Nașterii";
      default:
        return "Calculadora";
    }
  };

  return (
    <div className="min-h-full bg-slate-50 flex flex-col font-body">
      <div className="bg-white p-4 border-b border-slate-100 shadow-sm sticky top-0 z-10 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-600"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="font-heading font-black text-slate-800 text-lg">
          {getTitle()}
        </h2>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        {type === "dose" && <DoseCalc t={t} />}
        {type === "bmi" && <BmiCalc t={t} isEs={isEs} />}
        {type === "fpp" && <FppCalc t={t} isEs={isEs} />}
      </div>
    </div>
  );
};
