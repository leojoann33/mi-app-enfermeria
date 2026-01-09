import React, { useState, useMemo } from "react";
import {
  Search,
  ArrowLeft,
  Pill,
  ChevronRight,
  AlertTriangle,
  Info,
  Lightbulb,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { medicamentos } from "../data/medications";

// Harrison-style custom components for ReactMarkdown
const HarrisonComponents = {
  // Headers with classic medical textbook styling
  h2: ({ children }) => (
    <h2 className="font-serif text-xl font-bold text-[#1a365d] mt-8 mb-3 pb-2 border-b-2 border-[#c53030] tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-base font-bold text-[#2c5282] mt-5 mb-2 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-[#c53030] rounded-full"></span>
      {children}
    </h3>
  ),
  // Paragraphs with classic textbook typography
  p: ({ children }) => (
    <p className="font-serif text-[15px] text-[#1a202c] leading-[1.7] mb-3 text-justify hyphens-auto">
      {children}
    </p>
  ),
  // Lists
  ul: ({ children }) => (
    <ul className="font-serif text-[14px] text-[#1a202c] space-y-1 my-3 ml-4 list-disc marker:text-[#c53030]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="font-serif text-[14px] text-[#1a202c] space-y-1 my-3 ml-4 list-decimal marker:text-[#1a365d] marker:font-bold">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed pl-1">{children}</li>
  ),
  // Medical tables - Harrison blue header style with horizontal scroll
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded border border-[#2c5282]/30 shadow-sm">
      <table className="min-w-full text-[13px] font-serif border-collapse whitespace-nowrap">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#1a365d] text-white">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 text-left font-bold text-[12px] uppercase tracking-wide border-b border-[#2c5282]">
      {children}
    </th>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-[#e2e8f0]">
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="even:bg-[#f7fafc] hover:bg-[#edf2f7] transition-colors">
      {children}
    </tr>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 text-[#2d3748] align-top">
      {children}
    </td>
  ),
  // Blockquotes as clinical tips (amber box)
  blockquote: ({ children }) => (
    <div className="my-4 bg-gradient-to-r from-[#fffbeb] to-[#fef3c7] border-l-4 border-[#d97706] rounded-r-lg p-4 shadow-sm">
      <div className="flex gap-3">
        <Lightbulb size={18} className="text-[#d97706] shrink-0 mt-0.5" />
        <div className="font-serif text-[14px] text-[#92400e] leading-relaxed [&>p]:mb-0 [&>p]:text-[#92400e]">
          {children}
        </div>
      </div>
    </div>
  ),
  // Strong text
  strong: ({ children }) => (
    <strong className="font-bold text-[#1a202c]">{children}</strong>
  ),
  // Emphasis
  em: ({ children }) => (
    <em className="italic text-[#4a5568]">{children}</em>
  ),
  // Code blocks (for dosing calculations)
  code: ({ children, inline }) => 
    inline ? (
      <code className="bg-[#edf2f7] px-1.5 py-0.5 rounded text-[#2c5282] font-mono text-[13px]">
        {children}
      </code>
    ) : (
      <code className="block bg-[#1a365d] text-[#e2e8f0] p-4 rounded-lg my-3 font-mono text-[13px] leading-relaxed overflow-x-auto shadow-inner">
        {children}
      </code>
    ),
  pre: ({ children }) => (
    <pre className="bg-[#1a365d] text-[#e2e8f0] p-4 rounded-lg my-4 font-mono text-[13px] leading-relaxed overflow-x-auto shadow-inner">
      {children}
    </pre>
  ),
  // Horizontal rules
  hr: () => (
    <hr className="my-6 border-0 h-px bg-gradient-to-r from-transparent via-[#cbd5e0] to-transparent" />
  ),
};

export const MedsViewer = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMed, setSelectedMed] = useState(null);
  const isEs = lang === "es";

  const t = {
    title: isEs ? "Fármacos" : "Medicamente",
    subtitle: isEs ? "Vademécum de Enfermería" : "Vademecum de Asistență Medicală",
    search: isEs ? "Buscar principio activo..." : "Căutare substanță activă...",
    noResults: isEs ? "Sin resultados" : "Fără rezultate",
    back: isEs ? "Volver" : "Înapoi",
  };

  // Filter medications based on search
  const filteredMeds = useMemo(() => {
    if (!searchTerm.trim()) return medicamentos;
    const term = searchTerm.toLowerCase();
    return medicamentos.filter((med) => {
      const name = isEs ? med.nameES : med.nameRO;
      const category = isEs ? med.categoryES : med.categoryRO;
      const desc = isEs ? med.descES : med.descRO;
      return (
        name?.toLowerCase().includes(term) ||
        category?.toLowerCase().includes(term) ||
        desc?.toLowerCase().includes(term)
      );
    });
  }, [searchTerm, isEs]);

  // Detail view for a selected medication
  if (selectedMed) {
    const name = isEs ? selectedMed.nameES : selectedMed.nameRO;
    const category = isEs ? selectedMed.categoryES : selectedMed.categoryRO;
    const content = isEs ? selectedMed.contentES : selectedMed.contentRO;

    return (
      <div className="flex flex-col h-full bg-[#faf8f5] font-body relative overflow-hidden">
        {/* HEADER - Harrison navy blue */}
        <div className="bg-[#1a365d] p-4 text-white shadow-lg flex flex-col gap-2 shrink-0 z-20 sticky top-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedMed(null)}
              className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <ArrowLeft size={22} />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Stethoscope size={18} className="text-[#fc8181]" />
                <h1 className="font-serif font-bold text-lg tracking-tight">
                  {name}
                </h1>
              </div>
              <p className="text-xs font-medium text-[#90cdf4] mt-0.5">{category}</p>
            </div>
          </div>
        </div>

        {/* Red accent line - Harrison signature */}
        <div className="h-1 bg-gradient-to-r from-[#c53030] via-[#e53e3e] to-[#c53030]"></div>

        {/* CONTENT - Harrison Style with cream background */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-5 bg-[#faf8f5]">
            {/* Chapter-like header card */}
            <div className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#1a365d] flex items-center justify-center shrink-0 shadow">
                  <Pill size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-bold text-[#1a365d] mb-1">
                    {name}
                  </h2>
                  <p className="text-sm text-[#718096] font-medium">{category}</p>
                </div>
              </div>
            </div>

            {/* Main content with Harrison components */}
            <article className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-5">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={HarrisonComponents}
              >
                {content || ""}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div className="flex flex-col h-full bg-[#faf8f5] font-body relative overflow-hidden">
      {/* HEADER - Harrison navy blue */}
      <div className="bg-[#1a365d] p-4 text-white shadow-lg flex flex-col gap-4 shrink-0 z-20 sticky top-0">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <ArrowLeft size={22} />
          </Link>
          <div className="flex-1">
            <h1 className="font-serif font-bold text-xl tracking-tight">
              {t.title}
            </h1>
            <p className="text-xs font-medium text-[#90cdf4] mt-0.5">
              {t.subtitle}
            </p>
          </div>
          <Stethoscope size={24} className="text-[#fc8181]" />
        </div>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0aec0]"
            size={18}
          />
          <input
            type="text"
            placeholder={t.search}
            className="w-full bg-white text-[#2d3748] pl-10 pr-4 py-3 rounded-lg shadow-sm outline-none font-serif text-sm placeholder:text-[#a0aec0] focus:ring-2 focus:ring-[#fc8181] transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Red accent line - Harrison signature */}
      <div className="h-1 bg-gradient-to-r from-[#c53030] via-[#e53e3e] to-[#c53030]"></div>

      {/* LISTA DE FÁRMACOS */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#faf8f5]">
        {filteredMeds.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center opacity-50 space-y-2 h-full">
            <Pill size={48} strokeWidth={1} className="text-[#a0aec0]" />
            <p className="text-[#a0aec0] text-sm font-serif">{t.noResults}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredMeds.map((med) => {
              const name = isEs ? med.nameES : med.nameRO;
              const category = isEs ? med.categoryES : med.categoryRO;
              const desc = isEs ? med.descES : med.descRO;

              return (
                <button
                  key={med.id}
                  onClick={() => setSelectedMed(med)}
                  className="w-full bg-white rounded-lg p-4 shadow-sm border border-[#e2e8f0] hover:shadow-md hover:border-[#cbd5e0] transition-all text-left group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#1a365d] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#2c5282] transition-colors">
                      <Pill size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[#1a365d] text-[15px] group-hover:text-[#2c5282] transition-colors">
                        {name}
                      </h3>
                      <p className="text-xs text-[#c53030] font-semibold mb-1">
                        {category}
                      </p>
                      <p className="text-xs text-[#718096] line-clamp-2 font-serif leading-relaxed">
                        {desc}
                      </p>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-[#cbd5e0] group-hover:text-[#1a365d] transition-colors shrink-0 mt-2"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#1a365d] py-2 px-4">
        <p className="text-center text-[10px] text-[#90cdf4] font-serif">
          Petrescu Style · © 2026 Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};
