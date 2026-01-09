import React from 'react';

export const RealisticTube = ({ tube, onClick, isSelected, scale = 1, simpleColor = null }) => {
  // Map internal color names to BD Vacutainer Visual Specs (Hex Colors & REF)
  const getVisuals = (colorCode) => {
    // Normalize simple colors to our internal codes
    if (simpleColor) {
        const map = {
            "purple": "is-primary",
            "blue": "is-info",
            "yellow": "is-warning",
            "green": "is-success",
            "black": "is-pale", // Mapping Black to 'Pale' which we'll override or use Orange/Black logic
            "pink": "pink",
            "red": "is-danger",
            "grey": "is-dark",
            "gray": "is-dark"
        };
        colorCode = map[simpleColor] || "is-danger";
    }

    switch (colorCode) {
      case "is-warning": // Gold/Yellow (SST)
        return {
          cap: "bg-yellow-400 border-yellow-500",
          capGradient: "from-yellow-300 via-yellow-400 to-yellow-600",
          liquid: "bg-amber-100/80", // Serum is yellowish
          labelStripe: "bg-yellow-400",
          ref: "REF 367955",
          type: "SST™ II Advance",
          vol: "3.5 mL"
        };
      case "is-info": // Blue (Citrate)
        return {
          cap: "bg-sky-400 border-sky-500",
          capGradient: "from-sky-300 via-sky-400 to-sky-600",
          liquid: "bg-sky-100/50", // Clear liquid (citrate)
          labelStripe: "bg-sky-400",
          ref: "REF 363083",
          type: "9NC 0.109M",
          vol: "2.7 mL"
        };
      case "is-success": // Green (Lithium Heparin)
        return {
          cap: "bg-emerald-600 border-emerald-700",
          capGradient: "from-emerald-500 via-emerald-600 to-emerald-800",
          liquid: "bg-red-800/90", // Blood
          labelStripe: "bg-emerald-600",
          ref: "REF 368886",
          type: "LH 102 I.U.",
          vol: "4.0 mL"
        };
      case "is-primary": // Purple (EDTA) - usually Lavender
        return {
          cap: "bg-purple-400 border-purple-500",
          capGradient: "from-purple-300 via-purple-400 to-purple-600",
          liquid: "bg-red-900", // Venous blood
          labelStripe: "bg-purple-400",
          ref: "REF 368861",
          type: "K2E (EDTA)",
          vol: "4.0 mL"
        };
      case "is-pale": // Black (ESR) or Hemocultures
         // If input was explicitly "black", give it black cap. If "is-pale" (hemo), orange.
         if (simpleColor === "black") {
             return {
                cap: "bg-slate-800 border-slate-900",
                capGradient: "from-slate-700 via-slate-800 to-black",
                liquid: "bg-red-900",
                labelStripe: "bg-slate-800",
                ref: "REF 3660", // Westergren
                type: "4NC ESR",
                vol: "1.6 mL"
             };
         }
         return {
          cap: "bg-orange-500 border-orange-600",
          capGradient: "from-orange-400 via-orange-500 to-orange-700",
          liquid: "bg-amber-800",
          labelStripe: "bg-orange-500",
          ref: "REF 442023",
          type: "BACTEC™",
          vol: "10 mL"
        };
      case "is-dark": // Grey (Fluoride)
        return {
          cap: "bg-slate-400 border-slate-500",
          capGradient: "from-slate-300 via-slate-400 to-slate-600",
          liquid: "bg-red-900",
          labelStripe: "bg-slate-400",
          ref: "REF 368920",
          type: "FX Sodium Fluoride",
          vol: "2.0 mL"
        };
      case "pink": // Pink (Crossmatch)
         return {
          cap: "bg-pink-300 border-pink-400",
          capGradient: "from-pink-200 via-pink-300 to-pink-500",
          liquid: "bg-red-900",
          labelStripe: "bg-pink-300",
          ref: "REF 367953",
          type: "K2E Crossmatch",
          vol: "6.0 mL"
        };
      default: // Red (Serum)
        return {
          cap: "bg-red-600 border-red-700",
          capGradient: "from-red-500 via-red-600 to-red-800",
          liquid: "bg-red-800",
          labelStripe: "bg-red-600",
          ref: "REF 368815",
          type: "CAT Serum",
          vol: "4.0 mL"
        };
    }
  };

  const code = simpleColor ? "lookup" : tube?.color;
  const specs = getVisuals(code);
  
  // Interactive vs Static Display Mode
  const isInteractive = !!onClick;
  const isSelectedStyle = isInteractive 
    ? (isSelected ? "scale-110 -translate-y-4 z-20 brightness-110 drop-shadow-2xl" : "hover:-translate-y-2 hover:drop-shadow-xl z-0") 
    : "";

  return (
    <div 
      onClick={() => isInteractive && onClick(tube)}
      style={{ transform: `scale(${scale})` }}
      className={`group relative w-16 h-64 flex flex-col items-center cursor-pointer transition-all duration-300 ease-out transform origin-bottom ${isSelectedStyle}`}
    >
      {/* 1. CAP (HEMOGARD CLOSURE) */}
      <div className="relative z-20 w-12 flex flex-col items-center">
        {/* Top of cap */}
        <div className={`w-12 h-8 rounded-t-sm bg-gradient-to-r shadow-md border-b-[1px] border-black/10 ${specs.capGradient}`}></div>
        {/* Bottom rim of cap */}
        <div className={`w-12 h-4 rounded-b-md bg-gradient-to-r ${specs.capGradient} shadow-lg mb-[-10px]`}></div>
      </div>

      {/* 2. TUBE BODY */}
      <div className="relative w-10 h-48 rounded-b-full bg-slate-50/20 backdrop-blur-[1px] border-[1px] border-slate-300/50 shadow-inner overflow-hidden top-[-5px]">
        {/* Glass Glare */}
        <div className="absolute top-0 right-2 w-1 h-full bg-gradient-to-b from-white/60 to-transparent z-30 opacity-70"></div>
        <div className="absolute top-0 left-2 w-0.5 h-full bg-gradient-to-b from-white/40 to-transparent z-30 opacity-50"></div>

        {/* Liquid Layer */}
        <div className={`absolute bottom-0 w-full rounded-b-full transition-all duration-1000 ${specs.liquid} ${isSelected ? 'h-32' : 'h-24 group-hover:h-28'}`}>
           {/* Meniscus */}
           <div className="absolute top-0 w-full h-1 bg-white/20 rounded-[50%]"></div>
        </div>

        {/* 3. LABEL (PAPER) */}
        <div className="absolute top-8 left-[1px] right-[1px] bottom-10 bg-[#fdfdfd] shadow-sm flex flex-col opacity-95">
          {/* Color Band / Stripe */}
          <div className="flex justify-between items-center px-1 py-1">
             <div className="w-0.5 h-full bg-slate-200"></div>
             {/* Notch triangle logic usually here, simplified as stripe */}
             <div className="flex-1 pl-1">
                <span className="text-[6px] font-bold text-slate-800 block leading-tight tracking-tighter">BD Vacutainer®</span>
                <span className="text-[6px] text-slate-500 block leading-tight">{specs.type}</span>
                <span className="text-[5px] text-slate-400 block leading-tight">{specs.ref}</span>
             </div>
             {/* Color marker triangle */}
             <div className={`w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-r-[8px] border-r-transparent ${specs.labelStripe.replace('bg-', 'border-t-')}`}></div>
          </div>
          
          {/* Middle Info */}
          <div className="flex-1 flex flex-col justify-center items-center py-1 border-t-[0.5px] border-slate-200">
             {/* Fake Barcode */}
             <div className="flex gap-[1px] h-12 w-3/4 opacity-80 justify-center">
                {[...Array(12)].map((_,i) => (
                    <div key={i} className={`h-full bg-black ${i % 3 === 0 ? 'w-[2px]' : 'w-[1px]'}`}></div>
                ))}
             </div>
             <span className="text-[6px] font-mono text-slate-600 mt-0.5">1234567890</span>
          </div>

          {/* Bottom Info */}
          <div className="flex justify-between items-end px-1 pb-1">
             <div className="text-[8px] font-bold text-slate-700">{specs.vol}</div>
             <div className="flex flex-col items-end">
                <span className="text-[4px] border border-black/50 px-0.5 rounded-[1px]">STERILE R</span>
                <span className="text-[6px] font-bold text-slate-400 mt-0.5">CE</span>
             </div>
          </div>
        </div>
      </div>

      {/* 4. ORDER NUMBER BADGE (Only if tube data exists) */}
      {tube?.order !== undefined && (
        <div className="absolute -bottom-2 z-30 w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-black shadow-lg border-2 border-white">
            {tube.order}
        </div>
      )}
    </div>
  );
};
