import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Calculator, ChevronRight, Monitor } from "lucide-react";
import { TOOLS_DB } from "../data/index";

import { RichText } from "../components/RichText";

export const ToolsViewer = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);
  const navigate = useNavigate();
  const isEs = lang === "es";

  const t = {
    title: isEs ? "Calculadoras y Escalas" : "Calculatoare și Scale",
    search: isEs ? "Buscar herramienta..." : "Căutați instrument...",
    back: isEs ? "Volver" : "Înapoi",
    desc: isEs ? "Descripción" : "Descriere",
    logic: isEs ? "Lógica / Fórmula" : "Logică / Formulă"
  };

  const getText = (item, field) => {
    if (!item) return "";
    return isEs ? item[`${field}ES`] : item[`${field}RO`];
  };

  const filteredTools = TOOLS_DB.filter((tool) =>
    (isEs ? tool.titleES : tool.titleRO).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body relative overflow-hidden">
      {/* HEADER */}
      <div className="bg-[#469a7c] p-4 text-white shadow-md flex flex-col gap-4 shrink-0 z-20 sticky top-0">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-white/20 text-white">
            <ArrowLeft size={24} />
          </Link>
          <div className="flex-1">
            <h1 className="font-heading font-black text-xl tracking-wide">{t.title}</h1>
            <p className="text-xs font-bold text-white/80">Module 6: Clinical Tools</p>
          </div>

        </div>
        
        <div className="relative">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           <input
             type="text"
             placeholder={t.search}
             className="w-full bg-white text-slate-800 pl-10 pr-4 py-3 rounded-xl shadow-sm outline-none font-bold text-sm"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>
      </div>

      {/* LISTA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        
        {/* NEW: Simulators Entry Point (Only visible if not searching to avoid clutter, or always visible? Let's keep it always visible at top) */}

        {filteredTools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool)}
            className="w-full bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-blue-300 transition-all text-left group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
               <Calculator size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-lg text-slate-800 group-hover:text-blue-700">
                {getText(tool, "title")}
              </h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {tool.category}
              </p>
            </div>
            <ChevronRight className="text-slate-300" />
          </button>
        ))}
      </div>

      {/* DETALLE */}
      {selectedTool && (
        <div className="absolute inset-0 z-50 bg-slate-50 flex flex-col animate-in slide-in-from-right duration-300">
           <div className="bg-[#469a7c] p-4 text-white shadow-md flex items-center gap-3 shrink-0">
             <button
               onClick={() => setSelectedTool(null)}
               className="p-2 -ml-2 rounded-full hover:bg-white/20"
             >
               <ArrowLeft size={24} />
             </button>
             <h2 className="font-heading font-black text-lg flex-1 truncate">
               {getText(selectedTool, "title")}
             </h2>
           </div>

           <div className="p-5 overflow-y-auto space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-400 text-xs uppercase mb-2">{t.desc}</h4>
                  <p className="text-slate-800 leading-relaxed font-medium">
                      {getText(selectedTool, "desc")}
                  </p>
              </div>

              {/* NANDA LINK */}
              {(isEs ? selectedTool.nandaES : selectedTool.nandaRO) && (
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-sm text-orange-800">
                      <RichText text={isEs ? selectedTool.nandaES : selectedTool.nandaRO} />
                  </div>
              )}

              {/* LOGIC PREVIEW (Placeholder for actual implementation) */}
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 font-mono text-xs text-blue-800 overflow-x-auto">
                  <h4 className="font-bold mb-2 uppercase tracking-widest">{t.logic}</h4>
                  <pre>{JSON.stringify(selectedTool.logic, null, 2)}</pre>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
