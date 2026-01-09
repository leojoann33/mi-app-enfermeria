import React, { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle, Shield } from "lucide-react";

export const DisclaimerModal = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEs = lang === "es";

  useEffect(() => {
    const hasAccepted = localStorage.getItem("petrescu_disclaimer_accepted");
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("petrescu_disclaimer_accepted", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full md:w-[402px] rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-200">
        <div className="bg-amber-50 p-6 border-b border-amber-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-3">
            <Shield size={28} />
          </div>
          <h2 className="text-xl font-heading font-black text-slate-800">
            {isEs ? "Aviso Legal Importante" : "Aviz Legal Important"}
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-sm text-slate-600 leading-relaxed font-body">
            <p className="mb-3">
              {isEs ? (
                <>
                  Esta aplicación es una herramienta de{" "}
                  <strong>FORMACIÓN Y CONSULTA ACADÉMICA</strong>.
                </>
              ) : (
                <>
                  Această aplicație este un instrument de{" "}
                  <strong>FORMARE ȘI CONSULTARE ACADEMICĂ</strong>.
                </>
              )}
            </p>
            <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <li className="flex gap-2">
                <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {isEs
                    ? "No sustituye el juicio clínico profesional."
                    : "Nu înlocuiește judecata clinică profesională."}
                </span>
              </li>
              <li className="flex gap-2">
                <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {isEs
                    ? "Verifique siempre las dosis y protocolos con las guías oficiales de su centro."
                    : "Verificați întotdeauna dozele și protocoalele cu ghidurile oficiale."}
                </span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleAccept}
            className="w-full py-4 bg-[#469a7c] hover:bg-[#3d8b6f] text-white font-bold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
          >
            <CheckCircle size={20} />
            {isEs ? "Entendido y Acepto" : "Am înțeles și Accept"}
          </button>
        </div>
        
        <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
             <span className="text-[10px] text-slate-400 font-mono">Enfermería App v3.1 - Build 2025</span>
        </div>
      </div>
    </div>
  );
};
