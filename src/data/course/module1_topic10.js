export const MODULE_1_LESSON_10 = {
  id: "1-10",
  titleES: "10. Registro en Sistema Informático (GACELA)",
  titleRO: "10. Înregistrare în Sistem Informatic (GACELA)",
  contentES: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: PRINCIPIOS LEGALES -->
          <section>
            <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">1. "Lo que no está escrito, no está hecho"</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#003366]">
              La Historia Clínica Electrónica es un documento legal. El registro debe ser objetivo, preciso, sin tachaduras y en tiempo real.
            </p>
            <div class="bg-slate-100 p-4 border border-slate-300 rounded shadow-inner text-sm font-mono">
                <p class="text-[10px] text-slate-500 mb-1">EJEMPLO DE MALA PRAXIS (SUBJETIVO)</p>
                <p class="text-red-700 line-through">"Pac. se encuentra mal y borde."</p>
                
                <p class="text-[10px] text-slate-500 mb-1 mt-3">EJEMPLO CORRECTO (OBJETIVO)</p>
                <p class="text-green-800">"Paciente refiere dolor agudo (EVA 7/10). Expresa disconformidad verbalmente."</p>
            </div>
          </section>

          <!-- SEC 2: GACELA SIMULATION -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">2. Interfaz GACELA (Simulación)</h2>
             <p class="mb-2 text-sm">Familiarízate con los campos obligatorios (*). Guarda siempre tus cambios.</p>
             
             <!-- FAKE UI -->
             <div class="border border-slate-400 bg-[#ECE9D8] rounded p-1 font-sans text-xs shadow-md">
                 <!-- HEADER UI -->
                 <div class="bg-[#003399] text-white px-2 py-1 flex justify-between items-center mb-2 rounded-sm">
                     <span class="font-bold">GACELA - Gestión de Cuidados</span>
                     <span class="text-[10px] opacity-80">USR: J.HENRY</span>
                 </div>
                 
                 <!-- TAB PANEL -->
                 <div class="bg-white border border-slate-300 p-2">
                     <div class="flex gap-1 mb-2 border-b border-slate-200 pb-1">
                         <div class="px-2 py-1 bg-slate-200 border border-slate-300 text-slate-500">Valoración</div>
                         <div class="px-2 py-1 bg-white border-t-2 border-orange-500 font-bold text-slate-800 border-x border-slate-300">Constantes</div>
                         <div class="px-2 py-1 bg-slate-200 border border-slate-300 text-slate-500">Curso Clínico</div>
                     </div>
                     
                     <div class="grid grid-cols-2 gap-2 mb-2">
                         <div>
                             <label class="block text-[10px] text-slate-500">Tensión Arterial *</label>
                             <input type="text" value="120/80" disabled class="w-full border border-slate-300 px-1 bg-yellow-50 text-slate-700 font-mono">
                         </div>
                         <div>
                             <label class="block text-[10px] text-slate-500">Frecuencia Cardíaca *</label>
                             <input type="text" value="78" disabled class="w-full border border-slate-300 px-1 bg-yellow-50 text-slate-700 font-mono">
                         </div>
                         <div>
                             <label class="block text-[10px] text-slate-500">Saturación O2</label>
                             <input type="text" value="98%" disabled class="w-full border border-slate-300 px-1 bg-white text-slate-700 font-mono">
                         </div>
                         <div>
                             <label class="block text-[10px] text-slate-500">Temperatura</label>
                             <input type="text" value="36.5" disabled class="w-full border border-slate-300 px-1 bg-white text-slate-700 font-mono">
                         </div>
                     </div>
                     
                     <div class="flex justify-end gap-2 mt-3">
                         <button class="bg-slate-300 text-slate-700 px-2 border border-slate-400 shadow-sm">Cancelar</button>
                         <button class="bg-[#003399] text-white px-2 border border-blue-900 shadow-sm font-bold">💾 GUARDAR (F10)</button>
                     </div>
                 </div>
             </div>
          </section>

          <!-- SEC 3: SOAP -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">3. Estructura de Nota SOAP/DAR</h2>
             <table class="w-full text-xs font-sans border-collapse mb-4">
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold w-12 text-[#003366]">S</td>
                     <td class="py-2"><strong>Subjetivo:</strong> Lo que dice el paciente ("Me duele").</td>
                 </tr>
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold text-[#003366]">O</td>
                     <td class="py-2"><strong>Objetivo:</strong> Lo que mido (TA 140/90, palidez).</td>
                 </tr>
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold text-[#003366]">A</td>
                     <td class="py-2"><strong>Análisis:</strong> Diagnóstico enfermero (Dolor Agudo).</td>
                 </tr>
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold text-[#003366]">P</td>
                     <td class="py-2"><strong>Plan:</strong> Intervención (Analgesia + Reevaluación).</td>
                 </tr>
             </table>
          </section>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPÍTULO 1 • INFORMÁTICA
      </div>
    </div>
  `,
  contentRO: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: PRINCIPIOS LEGALES -->
          <section>
            <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">1. "Ce nu este scris, nu este făcut"</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#003366]">
              Istoricul Clinic Electronic este un document legal. Înregistrarea trebuie să fie obiectivă, precisă și în timp real.
            </p>
            <div class="bg-slate-100 p-4 border border-slate-300 rounded shadow-inner text-sm font-mono">
                <p class="text-[10px] text-slate-500 mb-1">EXEMPLU DE PRACTICĂ NECORESPUNZĂTOARE (SUBIECTIV)</p>
                <p class="text-red-700 line-through">"Pac. se simte rău și dificil."</p>
                
                <p class="text-[10px] text-slate-500 mb-1 mt-3">EXEMPLU CORECT (OBIECTIV)</p>
                <p class="text-green-800">"Pacientul relatează durere acută (EVA 7/10). Exprimă disconfort verbal."</p>
            </div>
          </section>

          <!-- SEC 2: GACELA SIMULATION -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">2. Interfață GACELA (Simulare)</h2>
             <p class="mb-2 text-sm">Familiarizați-vă cu câmpurile obligatorii (*). Salvați întotdeauna modificările.</p>
             
             <!-- FAKE UI -->
             <div class="border border-slate-400 bg-[#ECE9D8] rounded p-1 font-sans text-xs shadow-md">
                 <!-- HEADER UI -->
                 <div class="bg-[#003399] text-white px-2 py-1 flex justify-between items-center mb-2 rounded-sm">
                     <span class="font-bold">GACELA - Management Îngrijiri</span>
                     <span class="text-[10px] opacity-80">USR: J.HENRY</span>
                 </div>
                 
                 <!-- TAB PANEL -->
                 <div class="bg-white border border-slate-300 p-2">
                     <div class="flex gap-1 mb-2 border-b border-slate-200 pb-1">
                         <div class="px-2 py-1 bg-slate-200 border border-slate-300 text-slate-500">Evaluare</div>
                         <div class="px-2 py-1 bg-white border-t-2 border-orange-500 font-bold text-slate-800 border-x border-slate-300">Semne Vitale</div>
                         <div class="px-2 py-1 bg-slate-200 border border-slate-300 text-slate-500">Curs Clinic</div>
                     </div>
                     
                     <div class="grid grid-cols-2 gap-2 mb-2">
                         <div>
                             <label class="block text-[10px] text-slate-500">Tensiune Arterială *</label>
                             <input type="text" value="120/80" disabled class="w-full border border-slate-300 px-1 bg-yellow-50 text-slate-700 font-mono">
                         </div>
                         <div>
                             <label class="block text-[10px] text-slate-500">Frecvență Cardiacă *</label>
                             <input type="text" value="78" disabled class="w-full border border-slate-300 px-1 bg-yellow-50 text-slate-700 font-mono">
                         </div>
                         <div>
                             <label class="block text-[10px] text-slate-500">Saturație O2</label>
                             <input type="text" value="98%" disabled class="w-full border border-slate-300 px-1 bg-white text-slate-700 font-mono">
                         </div>
                         <div>
                             <label class="block text-[10px] text-slate-500">Temperatură</label>
                             <input type="text" value="36.5" disabled class="w-full border border-slate-300 px-1 bg-white text-slate-700 font-mono">
                         </div>
                     </div>
                     
                     <div class="flex justify-end gap-2 mt-3">
                         <button class="bg-slate-300 text-slate-700 px-2 border border-slate-400 shadow-sm">Cancel</button>
                         <button class="bg-[#003399] text-white px-2 border border-blue-900 shadow-sm font-bold">💾 SALVARE (F10)</button>
                     </div>
                 </div>
             </div>
          </section>

          <!-- SEC 3: SOAP -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">3. Structura Notei SOAP/DAR</h2>
             <table class="w-full text-xs font-sans border-collapse mb-4">
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold w-12 text-[#003366]">S</td>
                     <td class="py-2"><strong>Subiectiv:</strong> Ce spune pacientul ("Mă doare").</td>
                 </tr>
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold text-[#003366]">O</td>
                     <td class="py-2"><strong>Obiectiv:</strong> Ce măsor (TA 140/90, paloare).</td>
                 </tr>
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold text-[#003366]">A</td>
                     <td class="py-2"><strong>Analiză:</strong> Diagnostic asistent (Durere Acută).</td>
                 </tr>
                 <tr class="border-b border-slate-300">
                     <td class="py-2 text-right pr-2 font-bold text-[#003366]">P</td>
                     <td class="py-2"><strong>Plan:</strong> Intervenție (Analgezie + Reevaluare).</td>
                 </tr>
             </table>
          </section>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPITOLUL 1 • INFORMATICĂ
      </div>
    </div>
  `
};
