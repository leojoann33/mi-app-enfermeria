export const MODULE_1_LESSON_6 = {
  id: "1-6",
  titleES: "6. Escalas Clínicas: Glasgow, EVA y Barthel",
  titleRO: "6. Scale Clinice: Glasgow, EVA și Barthel",
  contentES: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: GLASGOW -->
          <section>
            <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">1. Escala de Coma de Glasgow (GCS)</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#003366]">
              Actualizada en 2014, la GCS es el estándar de oro para valorar el nivel de conciencia. No es solo una tabla, es una secuencia lógica de evaluación.
            </p>

            <!-- PROTOCOL BOX (NEW) -->
            <div class="bg-indigo-50 border border-indigo-200 p-4 mb-4 rounded-sm shadow-sm">
                <h4 class="font-sans font-bold text-indigo-900 text-xs uppercase mb-2 tracking-wide text-center">SECUENCIA DE EVALUACIÓN ESTRUCTURADA</h4>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-xs font-sans">
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">1. COMPRUEBA</strong>
                        Factores que interfieren (Sedación, Edema palpebral, Sordera).
                    </div>
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">2. OBSERVA</strong>
                        Comportamientos espontáneos (Apertura ocular, Movimiento).
                    </div>
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">3. ESTIMULA</strong>
                        Verbal: "¿Está bien?"<br>
                        Físico: Presión en punta dedo / Trapecio.
                    </div>
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">4. VALORA</strong>
                        Asigna la puntuación a la MEJOR respuesta.
                    </div>
                </div>
            </div>

            <!-- HARRISON TABLE -->
            <div class="my-6 border-t-2 border-b-2 border-slate-800 py-2">
                <h4 class="font-sans font-bold text-xs uppercase text-[#003366] mb-2 tracking-wide">TABLA 1-6. ESCALA DE GLASGOW (PUNTUACIÓN 3-15)</h4>
                <table class="w-full text-sm font-sans">
                    <thead class="bg-[#e0e5eb] text-[#003366] font-bold text-xs uppercase border-b border-[#003366]">
                        <tr>
                            <th class="text-left py-1 px-2">Apertura Ocular (4)</th>
                            <th class="text-left py-1 px-2">Respuesta Verbal (5)</th>
                            <th class="text-left py-1 px-2">Respuesta Motora (6)</th>
                        </tr>
                    </thead>
                    <tbody class="text-xs align-top">
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2"><strong>4.</strong> Espontánea</td>
                            <td class="py-2 px-2"><strong>5.</strong> Orientado (T/E/P)</td>
                            <td class="py-2 px-2"><strong>6.</strong> Obedece órdenes</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2"><strong>3.</strong> Al sonido</td>
                            <td class="py-2 px-2"><strong>4.</strong> Confuso</td>
                            <td class="py-2 px-2"><strong>5.</strong> Localiza el dolor</td>
                        </tr>
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2"><strong>2.</strong> A la presión</td>
                            <td class="py-2 px-2"><strong>3.</strong> Palabras inapropiadas</td>
                            <td class="py-2 px-2"><strong>4.</strong> Retirada (Flexión normal)</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2"><strong>1.</strong> Ninguna (NT)</td>
                            <td class="py-2 px-2"><strong>2.</strong> Sonidos incomprensibles</td>
                            <td class="py-2 px-2"><strong>3.</strong> Flexión Anormal (Decorticación)</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2 italic text-slate-400">NT: No Testable</td>
                            <td class="py-2 px-2"><strong>1.</strong> Ninguna (NT)</td>
                            <td class="py-2 px-2"><strong>2.</strong> Extensión Anormal (Decerebración)<br><strong>1.</strong> Ninguna</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-2 p-2 bg-red-50 text-[11px] border-l-2 border-red-500 text-slate-700">
                    <strong class="text-red-700">REGLA MNEMOTÉCNICA CRÍTICA:</strong> "GCS menor de 8, intubar y ventilar". (Indica incapacidad para proteger la vía aérea).
                </div>
            </div>
          </section>
 
          <!-- SEC 2: EVA -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">2. Escala Visual Analógica (EVA)</h2>
             <p class="mb-2 text-sm">
                La autoevaluación del paciente es el indicador más fiable de dolor. 
                <strong>Protocolo:</strong> Evaluar siempre en reposo y movimiento, y reevaluar 30-60 min tras analgesia.
             </p>
             <div class="relative h-12 w-full mt-4 mb-6">
                 <div class="absolute w-full h-4 top-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-600 rounded"></div>
                 <div class="absolute w-full flex justify-between top-0 text-xs font-bold text-slate-700">
                     <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                 </div>
                 <div class="absolute w-full flex justify-between top-9 text-[10px] uppercase font-bold text-slate-500">
                     <span>Sin Dolor</span>
                     <span class="text-red-700">Insoportable</span>
                 </div>
             </div>
          </section>

          <!-- SEC 3: BARTHEL -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">3. Índice de Barthel (ABVD)</h2>
             <p class="mb-3 text-sm">
                Gold Standard para valoración funcional en geriatría y rehabilitación. Predice mortalidad y necesidad de institucionalización. Evaluación de 10 actividades (Comer, Lavarse, Vestirse, Arreglarse, Deposición, Micción, Ir al excusado, Traslado, Deambulación, Escaleras).
             </p>
             <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 text-center text-xs mb-4">
                 <div class="bg-red-100 p-2 border border-red-200"><strong>< 20</strong><br>Dep. TOTAL</div>
                 <div class="bg-orange-100 p-2 border border-orange-200"><strong>20-35</strong><br>Dep. GRAVE</div>
                 <div class="bg-yellow-100 p-2 border border-yellow-200"><strong>40-55</strong><br>Dep. MODERADA</div>
                 <div class="bg-green-50 p-2 border border-green-100"><strong>> 60</strong><br>Dep. LEVE</div>
                 <div class="bg-green-100 p-2 border border-green-300"><strong>100</strong><br>INDEPENDIENTE</div>
             </div>
          </section>

          <!-- NANDA TABLE -->
           <div class="my-6">
                <h4 class="font-sans font-bold text-xs uppercase text-[#003366] mb-1 tracking-wide">DIAGNÓSTICOS NANDA-I ASOCIADOS</h4>
                <table class="w-full text-xs font-sans border border-slate-200">
                    <tr class="bg-[#003366] text-white">
                        <th class="p-2 text-left w-16">Cód.</th>
                        <th class="p-2 text-left">Diagnóstico</th>
                        <th class="p-2 text-left w-24">Escala</th>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 font-bold align-top bg-slate-50">00132</td>
                        <td class="p-2 align-top">
                            <strong>Dolor agudo:</strong> Experiencia sensorial desagradable (inicio < 3 meses).
                        </td>
                        <td class="p-2 align-top text-xs font-mono bg-slate-100">EVA</td>
                    </tr>
                    <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00108</td>
                        <td class="p-2 align-top">
                            <strong>Déficit de autocuidado: Baño:</strong> Deterioro de la habilidad para realizar actividades de higiene.
                        </td>
                        <td class="p-2 align-top text-xs font-mono bg-slate-100">BARTHEL</td>
                    </tr>
                     <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00240</td>
                        <td class="p-2 align-top">
                            <strong>Riesgo de disminución del gasto cardíaco:</strong> (En contexto de Glasgow bajo por shock).
                        </td>
                        <td class="p-2 align-top text-xs font-mono bg-slate-100">GLASGOW</td>
                    </tr>
                </table>
           </div>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPÍTULO 1 • VALORACIÓN CLÍNICA
      </div>
    </div>
  `,
  contentRO: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: GLASGOW -->
          <section>
            <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">1. Scara Coma Glasgow (GCS)</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#003366]">
              Actualizată în 2014, GCS este standardul de aur pentru evaluarea nivelului de conștiență. Nu este doar un tabel, este o secvență logică de evaluare.
            </p>

            <!-- PROTOCOL BOX (NEW) -->
            <div class="bg-indigo-50 border border-indigo-200 p-4 mb-4 rounded-sm shadow-sm">
                <h4 class="font-sans font-bold text-indigo-900 text-xs uppercase mb-2 tracking-wide text-center">SECVENȚĂ DE EVALUARE STRUCTURATĂ</h4>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-xs font-sans">
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">1. VERIFICĂ</strong>
                        Factori de interferență (Sedare, Edem palpebral, Surditate).
                    </div>
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">2. OBSERVĂ</strong>
                        Comportamente spontane (Deschidere ochi, Mișcare).
                    </div>
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">3. STIMULEAZĂ</strong>
                        Verbal: "Sunteți bine?"<br>
                        Fizic: Presiune vârf deget / Trapez.
                    </div>
                    <div class="p-2 bg-white border border-indigo-100">
                        <strong class="block text-indigo-700 mb-1">4. EVALUEAZĂ</strong>
                        Atribuie scorul pentru cel mai bun RĂSPUNS.
                    </div>
                </div>
            </div>

            <!-- HARRISON TABLE -->
            <div class="my-6 border-t-2 border-b-2 border-slate-800 py-2">
                <h4 class="font-sans font-bold text-xs uppercase text-[#003366] mb-2 tracking-wide">TABELUL 1-6. SCARA GLASGOW (SCOR 3-15)</h4>
                <table class="w-full text-sm font-sans">
                    <thead class="bg-[#e0e5eb] text-[#003366] font-bold text-xs uppercase border-b border-[#003366]">
                        <tr>
                            <th class="text-left py-1 px-2">Deschidere Ochi (4)</th>
                            <th class="text-left py-1 px-2">Răspuns Verbal (5)</th>
                            <th class="text-left py-1 px-2">Răspuns Motor (6)</th>
                        </tr>
                    </thead>
                    <tbody class="text-xs align-top">
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2"><strong>4.</strong> Spontană</td>
                            <td class="py-2 px-2"><strong>5.</strong> Orientat (T/S/P)</td>
                            <td class="py-2 px-2"><strong>6.</strong> Execută ordine</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2"><strong>3.</strong> La sunet</td>
                            <td class="py-2 px-2"><strong>4.</strong> Confuz</td>
                            <td class="py-2 px-2"><strong>5.</strong> Localizează durerea</td>
                        </tr>
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2"><strong>2.</strong> La presiune</td>
                            <td class="py-2 px-2"><strong>3.</strong> Cuvinte inadecvate</td>
                            <td class="py-2 px-2"><strong>4.</strong> Retragere (Flexie normală)</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2"><strong>1.</strong> Niciuna (NT)</td>
                            <td class="py-2 px-2"><strong>2.</strong> Sunete incomprehensibile</td>
                            <td class="py-2 px-2"><strong>3.</strong> Flexie Anormală (Decorticare)</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2 italic text-slate-400">NT: Netestabil</td>
                            <td class="py-2 px-2"><strong>1.</strong> Niciuna (NT)</td>
                            <td class="py-2 px-2"><strong>2.</strong> Extensie Anormală (Decerebrare)<br><strong>1.</strong> Niciuna</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-2 p-2 bg-red-50 text-[11px] border-l-2 border-red-500 text-slate-700">
                    <strong class="text-red-700">REGULĂ MNEMOTEHNICĂ CRITICĂ:</strong> "GCS sub 8, intubează și ventilează". (Indică incapacitatea de a proteja căile aeriene).
                </div>
            </div>
          </section>
 
          <!-- SEC 2: EVA -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">2. Scara Vizuală Analogică (EVA)</h2>
             <p class="mb-2 text-sm">
                Autoevaluarea pacientului este cel mai fiabil indicator al durerii.
                <strong>Protocol:</strong> Evaluați întotdeauna în repaus și mișcare, și reevaluați la 30-60 min după analgezie.
             </p>
             <div class="relative h-12 w-full mt-4 mb-6">
                 <div class="absolute w-full h-4 top-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-600 rounded"></div>
                 <div class="absolute w-full flex justify-between top-0 text-xs font-bold text-slate-700">
                     <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                 </div>
                 <div class="absolute w-full flex justify-between top-9 text-[10px] uppercase font-bold text-slate-500">
                     <span>Fără Durere</span>
                     <span class="text-red-700">Insuportabilă</span>
                 </div>
             </div>
          </section>

          <!-- SEC 3: BARTHEL -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">3. Indicele Barthel (ABVD)</h2>
             <p class="mb-3 text-sm">
                Gold Standard pentru evaluarea funcțională în geriatrie și reabilitare. Prezice mortalitatea și necesitatea instituționalizării. Evaluarea a 10 activități.
             </p>
             <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 text-center text-xs mb-4">
                 <div class="bg-red-100 p-2 border border-red-200"><strong>< 20</strong><br>Dep. TOTALĂ</div>
                 <div class="bg-orange-100 p-2 border border-orange-200"><strong>20-35</strong><br>Dep. GRAVĂ</div>
                 <div class="bg-yellow-100 p-2 border border-yellow-200"><strong>40-55</strong><br>Dep. MODERATĂ</div>
                 <div class="bg-green-50 p-2 border border-green-100"><strong>> 60</strong><br>Dep. UȘOARĂ</div>
                 <div class="bg-green-100 p-2 border border-green-300"><strong>100</strong><br>INDEPENDENT</div>
             </div>
          </section>

          <!-- NANDA TABLE -->
           <div class="my-6">
                <h4 class="font-sans font-bold text-xs uppercase text-[#003366] mb-1 tracking-wide">DIAGNOSTICE NANDA-I ASOCIATE</h4>
                <table class="w-full text-xs font-sans border border-slate-200">
                    <tr class="bg-[#003366] text-white">
                        <th class="p-2 text-left w-16">Cod</th>
                        <th class="p-2 text-left">Diagnostic</th>
                        <th class="p-2 text-left w-24">Scară</th>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 font-bold align-top bg-slate-50">00132</td>
                        <td class="p-2 align-top">
                            <strong>Durere acută:</strong> Experiență senzorială neplăcută (debut < 3 luni).
                        </td>
                        <td class="p-2 align-top text-xs font-mono bg-slate-100">EVA</td>
                    </tr>
                    <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00108</td>
                        <td class="p-2 align-top">
                            <strong>Deficit de autoîngrijire: Baie:</strong> Deteriorarea capacității de a efectua activități de igienă.
                        </td>
                        <td class="p-2 align-top text-xs font-mono bg-slate-100">BARTHEL</td>
                    </tr>
                     <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00240</td>
                        <td class="p-2 align-top">
                            <strong>Risc de scădere a debitului cardiac:</strong> (În context de Glasgow scăzut prin șoc).
                        </td>
                        <td class="p-2 align-top text-xs font-mono bg-slate-100">GLASGOW</td>
                    </tr>
                </table>
           </div>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPITOLUL 1 • VALORARE CLINICĂ
      </div>
    </div>
  `
};
