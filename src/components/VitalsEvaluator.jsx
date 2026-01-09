/**
 * UBICACIÓN: src/components/VitalsEvaluator.jsx
 */
import React, { useState } from "react";
// IMPORTACIÓN CORREGIDA AUTOMÁTICAMENTE:
import { evaluateVitalSign } from "../data/vitals";
import {
  Activity,
  Thermometer,
  Droplets,
  Wind,
  AlertCircle,
} from "lucide-react";

const VitalsEvaluator = ({ lang = "es" }) => {
  const [vitals, setVitals] = useState({
    sis: "",
    dia: "",
    spo2: "",
    temp: "",
    pulse: "", // New
    resp: "", // New
  });
  const isEs = lang === "es";

  const t = {
    title: isEs ? "Evaluador NEWS2 (NANDA-I)" : "Evaluator NEWS2 (NANDA-I)",
    ta: "TA (mmHg)",
    spo2: "SpO2 (%)",
    temp: "Temp (ºC)",
    pulse: isEs ? "Pulso (lpm)" : "Puls (bpm)",
    resp: isEs ? "Resp (rpm)" : "Resp (rpm)",
    ph: isEs ? "Valor..." : "Valoare...",
  };

  const handleChange = (e) =>
    setVitals({ ...vitals, [e.target.name]: e.target.value });

  // Evaluaciones en tiempo real
  const evalTA = evaluateVitalSign("ta", vitals.sis, vitals.dia);
  const evalSpO2 = evaluateVitalSign("spo2", vitals.spo2);
  const evalTemp = evaluateVitalSign("temp", vitals.temp);
  const evalPulse = evaluateVitalSign("pulse", vitals.pulse);
  const evalResp = evaluateVitalSign("resp", vitals.resp);

  return (
    <div className="h-full flex flex-col bg-slate-50 font-body animate-in fade-in">
      {/* Cabecera */}
      <div className="bg-white p-4 border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <h2 className="font-heading font-black text-slate-800 text-lg flex items-center gap-2">
          <Activity className="text-blue-600" />
          {t.title}
        </h2>
      </div>

      <div className="p-4 space-y-6 overflow-y-auto pb-24">
        {/* 1. Tensión Arterial */}
        <InputSection
          label={t.ta}
          icon={Droplets}
          inputs={
            <div className="flex gap-2">
              <input
                type="number"
                name="sis"
                placeholder="Sis"
                value={vitals.sis}
                onChange={handleChange}
                className="w-1/2 p-3 rounded-lg border border-slate-200"
              />
              <input
                type="number"
                name="dia"
                placeholder="Dia"
                value={vitals.dia}
                onChange={handleChange}
                className="w-1/2 p-3 rounded-lg border border-slate-200"
              />
            </div>
          }
          result={evalTA}
        />

        {/* 1.5. Frecuencia Cardíaca (Pulso) */}
        <InputSection
          label={t.pulse}
          icon={Activity}
          inputs={
            <input
              type="number"
              name="pulse"
              placeholder="80"
              value={vitals.pulse}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-slate-200"
            />
          }
          result={evalPulse}
        />

        {/* 2. Saturación */}
        <InputSection
          label={t.spo2}
          icon={Wind}
          inputs={
            <input
              type="number"
              name="spo2"
              placeholder="98"
              value={vitals.spo2}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-slate-200"
            />
          }
          result={evalSpO2}
        />

        {/* 2.5. Frecuencia Respiratoria */}
        <InputSection
          label={t.resp}
          icon={Wind}
          inputs={
            <input
              type="number"
              name="resp"
              placeholder="16"
              value={vitals.resp}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-slate-200"
            />
          }
          result={evalResp}
        />

        {/* 3. Temperatura */}
        <InputSection
          label={t.temp}
          icon={Thermometer}
          inputs={
            <input
              type="number"
              name="temp"
              placeholder="36.5"
              value={vitals.temp}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-slate-200"
            />
          }
          result={evalTemp}
        />
      </div>
    </div>
  );
};

// Subcomponente de Tarjeta
const InputSection = ({ label, icon: Icon, inputs, result }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex items-center gap-2 mb-3 text-slate-500 font-bold text-xs uppercase tracking-wider">
      <Icon size={16} /> {label}
    </div>
    <div className="mb-4">{inputs}</div>

    {result && (
      <div
        className={`p-4 rounded-xl border-l-4 ${result.color.replace(
          "bg-",
          "border-"
        )} bg-slate-50`}
      >
        <div className="flex items-center gap-2 mb-1">
          <AlertCircle
            size={16}
            className={result.color.replace("bg-", "text-")}
          />
          <span
            className={`font-black uppercase text-sm ${result.color.replace(
              "bg-",
              "text-"
            )}`}
          >
            {result.titleES}{" "}
            {/* Mostramos ES por defecto aquí para simplificar, o usa lógica lang */}
          </span>
        </div>
        {result.protocolES && (
          <div className="mt-2 text-xs text-slate-600 space-y-1">
            <p className="font-mono bg-white p-1 rounded border border-slate-100 inline-block text-[10px] text-slate-400 mb-1">
              {result.nanda}
            </p>
            <p className="whitespace-pre-wrap">
              {safeParseBold(result.protocolES)}
            </p>
          </div>
        )}
      </div>
    )}
  </div>
);

const safeParseBold = (str) => {
  if (!str) return "";
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default VitalsEvaluator; // Importante para la importación simple
