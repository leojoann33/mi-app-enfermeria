// src/components/RichText.jsx

import React from "react";

export const RichText = ({ text }) => {
  // 1. Protección contra nulos
  if (!text) return null;

  let lines = [];

  // 2. DETECCIÓN INTELIGENTE DE TIPO
  if (Array.isArray(text)) {
    // Si ya es un array (como los 'steps' de procedures.js), lo usamos directo
    lines = text;
  } else if (typeof text === "string") {
    // Si es un texto largo (como en meds.js), lo cortamos por saltos de línea
    lines = text.split("\n");
  } else {
    // Si llega cualquier otra cosa (número, objeto), lo convertimos a string seguro
    lines = [String(text)];
  }

  return (
    <div className="space-y-2 text-sm text-slate-600 leading-relaxed font-body">
      {lines.map((line, index) => {
        // Aseguramos que la línea sea texto seguro antes de procesarla
        const safeLine = String(line || "");
        const trimmedLine = safeLine.trim();

        // CASO A: Listas con viñeta (* Texto)
        if (trimmedLine.startsWith("* ")) {
          const content = trimmedLine.substring(2);
          return (
            <div key={index} className="flex items-start gap-2 ml-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{parseMarkdown(content)}</span>
            </div>
          );
        }

        // CASO B: Subtítulos (**TEXTO**)
        if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
          return (
            <h4
              key={index}
              className="font-sub font-bold text-slate-800 mt-3 mb-1 uppercase tracking-wide text-xs"
            >
              {parseMarkdown(trimmedLine.replace(/\*\*/g, ""))}
            </h4>
          );
        }

        // CASO C: Líneas vacías (Espaciadores)
        if (!trimmedLine) return <div key={index} className="h-1" />;

        // CASO D: Párrafo normal
        return <p key={index}>{parseMarkdown(safeLine)}</p>;
      })}
    </div>
  );
};

// Función auxiliar para convertir **negrita** y *cursiva*
const parseMarkdown = (str) => {
  if (!str) return "";
  
  // Regex para capturar (**bold**) O (*italic*)
  // Nota: El orden importa. Capturamos ** primero.
  // (\*\*.*?\*\*) -> Grupo 1: Bold
  // (\*[^*]+?\*)  -> Grupo 2: Italic (cualquier cosa entre * que no sea *)
  const parts = str.split(/(\*\*.*?\*\*|\*[^*]+?\*)/g);
  
  return parts.map((part, i) => {
    // 1. Negrita
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>;
    }
    // 2. Cursiva
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
       // Check if it's not actually bold (handled above, but logic safety)
       // or if it was just a single * literal.
       // Ensuring content doesn't start with * to avoid confusion with empty ** case
       return <em key={i} className="italic text-slate-600 font-medium">{part.slice(1, -1)}</em>;
    }

    // 3. Texto normal
    return part;
  });
};
