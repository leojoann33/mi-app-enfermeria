export const MODULE_1_LESSON_1 = {
  id: "1-1",
  titleES: "Toma de Temperatura",
  titleRO: "Măsurarea Temperaturii",
  contentES: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- HEADER IMAGE -->
        <img src="/assets/course/modulo_1/termometro_header.png" alt="Toma de Temperatura" class="w-full h-48 object-cover" />
      </div>

      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: Introducción -->
          <section>
            <h2 class="font-sans font-bold text-[#164C84] text-lg uppercase mb-2 border-b border-[#379B7F] pb-1">¿Por qué es importante la temperatura?</h2>
            <p class="mb-3">
              La temperatura nos dice si el cuerpo está funcionando bien. El cerebro (específicamente una parte llamada hipotálamo) actúa como un termostato: decide cuándo el cuerpo debe producir calor y cuándo debe enfriarse.
            </p>
            <p class="mb-4">
              Cuando hay una infección, el cuerpo sube la temperatura a propósito para combatir los microbios. Esto es la fiebre.
            </p>

            <!-- HARRISON TABLE -->
            <div class="my-6 border-t-2 border-b-2 border-[#164C84] py-2">
                <h4 class="font-sans font-bold text-xs uppercase text-[#164C84] mb-2 tracking-wide">TABLA 1-1. Los números que debes recordar</h4>
                <table class="w-full text-sm font-sans text-left">
                    <thead class="bg-[#e0e5eb] text-[#164C84] font-bold text-xs uppercase border-b border-[#164C84]">
                        <tr>
                            <th class="text-left py-1 px-2">Temperatura</th>
                            <th class="text-left py-1 px-2">¿Qué significa?</th>
                            <th class="text-left py-1 px-2">¿Qué hacer?</th>
                        </tr>
                    </thead>
                    <tbody class="text-xs">
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2 font-bold">36.0 – 37.0 °C</td>
                            <td class="py-2 px-2">Normal</td>
                            <td class="py-2 px-2">Todo bien</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2 font-bold">37.1 – 37.9 °C</td>
                            <td class="py-2 px-2">Febrícula (fiebre baja)</td>
                            <td class="py-2 px-2">Vigilar, anotar, informar</td>
                        </tr>
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2 font-bold text-[#E9B82B]">38.0 – 39.9 °C</td>
                            <td class="py-2 px-2 font-bold">Fiebre</td>
                            <td class="py-2 px-2">Avisar al médico, seguir protocolo</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2 font-bold text-red-700">≥ 40.0 °C</td>
                            <td class="py-2 px-2 font-bold text-red-700">Fiebre muy alta (URGENCIA)</td>
                            <td class="py-2 px-2 font-bold text-red-700">Actuar rápido, puede ser peligroso</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2 font-bold text-blue-700">< 35.0 °C</td>
                            <td class="py-2 px-2 font-bold text-blue-700">Hipotermia</td>
                            <td class="py-2 px-2 font-bold text-blue-700">También es urgencia, calentar al paciente</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          <!-- SEC 2: Vías de Medición -->
          <section>
             <h2 class="font-sans font-bold text-[#164C84] text-lg uppercase mb-2 border-b border-[#379B7F] pb-1">¿Dónde se mide? (Las 4 vías)</h2>
             
             <div class="space-y-6">
                <!-- 1. AXILA -->
                <div>
                    <h3 class="font-sans font-bold text-[#164C84] text-sm uppercase flex items-center gap-2">
                        <span class="bg-[#164C84] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                        Axila (la más común en residencias)
                    </h3>
                    <ul class="list-disc pl-10 mt-2 text-sm text-slate-700 space-y-1">
                        <li><strong>Temperatura normal:</strong> ~36.5 °C</li>
                        <li><strong>Antes de medir:</strong> secar la axila con suavidad (sin frotar)</li>
                        <li><strong>Tiempo:</strong> 3-5 minutos con termómetro de vidrio, o hasta que pite el digital</li>
                        <li class="italic text-slate-500">Es la menos precisa, pero la más segura e higiénica</li>
                    </ul>
                </div>

                <!-- 2. OIDO -->
                <div>
                    <h3 class="font-sans font-bold text-[#164C84] text-sm uppercase flex items-center gap-2">
                        <span class="bg-[#164C84] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                        Oído (timpánica)
                    </h3>
                    <ul class="list-disc pl-10 mt-2 text-sm text-slate-700 space-y-1">
                        <li>Muy rápida (2 segundos)</li>
                        <li>Refleja bien la temperatura real del cuerpo</li>
                        <li><strong>Técnica:</strong> tirar de la oreja hacia arriba y hacia atrás antes de introducir el termómetro</li>
                    </ul>
                </div>

                <!-- 3. RECTAL -->
                <div>
                     <h3 class="font-sans font-bold text-[#164C84] text-sm uppercase flex items-center gap-2">
                        <span class="bg-[#164C84] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">3</span>
                        Rectal
                    </h3>
                     <ul class="list-disc pl-10 mt-2 text-sm text-slate-700 space-y-1">
                        <li>La más precisa ("gold standard")</li>
                        <li><strong>Temperatura normal:</strong> ~37.5 °C</li>
                        <li class="text-red-600 font-bold">NO usar si: cirugía rectal reciente, riesgo de sangrado, defensas muy bajas</li>
                    </ul>
                </div>

                 <!-- 4. ORAL -->
                 <div>
                     <h3 class="font-sans font-bold text-[#164C84] text-sm uppercase flex items-center gap-2">
                        <span class="bg-[#164C84] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">4</span>
                        Oral (bajo la lengua)
                    </h3>
                     <ul class="list-disc pl-10 mt-2 text-sm text-slate-700 space-y-1">
                        <li><strong>Temperatura normal:</strong> ~37.0 °C</li>
                        <li>Esperar 15-20 minutos si el paciente ha comido o bebido algo frío/caliente</li>
                        <li class="text-red-600 font-bold">NO usar en pacientes inconscientes o confusos</li>
                    </ul>
                </div>
             </div>
          </section>

          <!-- ALERT BOX -->
          <div class="bg-[#FFF9C4] border-l-4 border-[#E9B82B] p-5 text-sm my-6 rounded-r-lg shadow-sm">
              <h4 class="font-sans font-bold text-[#164C84] mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                Seguridad e Higiene
              </h4>
              <p class="mb-3 text-slate-800">El termómetro puede transmitir infecciones de un paciente a otro.</p>
              
              <div class="bg-white/50 p-3 rounded border border-[#E9B82B]/30">
                  <p class="font-bold text-[#164C84] text-xs uppercase mb-1">SIEMPRE:</p>
                  <ul class="list-disc pl-4 space-y-1 text-slate-800">
                    <li>Desinfectar con alcohol al 70% entre cada paciente</li>
                    <li>O usar fundas desechables.</li>
                  </ul>
              </div>
          </div>

      </div>
      
      <!-- AUDIO PLAYER -->
      <div class="mt-8 mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center">
          <h4 class="text-[#164C84] font-bold text-xs uppercase mb-3 flex items-center gap-2 tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M2 19h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2v7z"/><path d="M22 19h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v7z"/></svg>
            Resumen de Audio (IA)
          </h4>
          <audio controls class="w-full max-w-md h-10 outline-none rounded-full shadow-inner">
            <source src="/audio/ElevenLabs_2026-01-05T22_11_07_Liam - Energetic, Social Media Creator_pre_sp100_s50_sb75_v3.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
          </audio>
      </div>

      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        Manual de Enfermería para Mirela • 2026
      </div>
    </div>
  `,
  contentRO: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- HEADER IMAGE -->
      <div class="mb-6 rounded-xl overflow-hidden shadow-lg border-b-4 border-[#164C84]">
        <img src="/assets/termometro_header.png" alt="Toma de Temperatura" class="w-full h-48 object-cover" />
      </div>

      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: Introducere -->
          <section>
            <h2 class="font-sans font-bold text-[#164C84] text-lg uppercase mb-2 border-b border-[#379B7F] pb-1">1. Fiziologie și Termoreglare</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#164C84]">
              Temperatura corporală este rezultatul echilibrului dintre termogeneză (producerea de căldură) și termoliză (pierderea de căldură), reglat de centrul termoregulator hipotalamic. Este un indicator vital al homeostaziei și stării metabolice.
            </p>
            <p class="mb-4">
              <strong>Hipotalamusul Anterior</strong> controlează disiparea căldurii (vasodilatație, transpirație), în timp ce <strong>Hipotalamusul Posterior</strong> reglează conservarea (vasoconstricție, frisoane). Febra este o creștere a "set-point"-ului hipotalamic mediată de pirogeni (IL-1, IL-6, TNF).
            </p>

            <!-- HARRISON TABLE -->
            <div class="my-6 border-t-2 border-b-2 border-[#164C84] py-2">
                <h4 class="font-sans font-bold text-xs uppercase text-[#164C84] mb-2 tracking-wide">TABELUL 1-1. INTERVALE TERMICE ȘI TERMINOLOGIE CLINICĂ</h4>
                <table class="w-full text-sm font-sans text-left">
                    <thead class="bg-[#e0e5eb] text-[#164C84] font-bold text-xs uppercase border-b border-[#164C84]">
                        <tr>
                            <th class="text-left py-1 px-2">Interval (°C)</th>
                            <th class="text-left py-1 px-2">Terminologie</th>
                            <th class="text-left py-1 px-2">Considerații</th>
                        </tr>
                    </thead>
                    <tbody class="text-xs">
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2 font-bold">36.0 - 37.0</td>
                            <td class="py-2 px-2">Normotermie / Afebril</td>
                            <td class="py-2 px-2 italic">Interval fiziologic bazal.</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2 font-bold">37.1 - 37.9</td>
                            <td class="py-2 px-2">Subfebrilitate</td>
                            <td class="py-2 px-2 italic">Supravegheați evoluția. Comun imediat post-op.</td>
                        </tr>
                        <tr class="border-b border-slate-200">
                            <td class="py-2 px-2 font-bold text-[#E9B82B]">38.0 - 39.9</td>
                            <td class="py-2 px-2 font-bold">Febră / Pirexie</td>
                            <td class="py-2 px-2 italic">Sindrom de răspuns inflamator.</td>
                        </tr>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <td class="py-2 px-2 font-bold text-red-700">> 40.0</td>
                            <td class="py-2 px-2 font-bold text-red-700">Hiperpirexie</td>
                            <td class="py-2 px-2 italic font-bold">Urgență medicală. Risc SNC.</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2 font-bold text-blue-700">< 35.0</td>
                            <td class="py-2 px-2 font-bold text-blue-700">Hipotermie</td>
                            <td class="py-2 px-2 italic">Depresie neurologică și cardiacă.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          <!-- SEC 2: Vías de Medición -->
          <section>
             <h2 class="font-sans font-bold text-[#164C84] text-lg uppercase mb-2 border-b border-[#379B7F] pb-1">2. Căi de Măsurare și Tehnică</h2>
             <ul class="list-disc pl-4 space-y-3 mb-4 marker:text-[#379B7F] text-sm">
                <li>
                    <strong>Calea Axilară (36.5°C ± 0.5):</strong> 
                    <span class="block mt-1 text-slate-600">
                        Metodă cea mai comună pentru siguranță și igienă. Mai puțin precisă decât cea centrală. Necesită uscarea prealabilă a axilei (fără frecare) și contact direct piele-senzor. Timp: 3-5 min (sticlă) sau semnal acustic (digital).
                    </span>
                </li>
                <li>
                    <strong>Calea Timpanică:</strong> 
                    <span class="block mt-1 text-slate-600">
                        Reflectă temperatura centrală (hipotalamus). Rapidă (2 sec). Tehnică: Tracționați pavilionul urechii în sus și înapoi (adulți) pentru a rectifica conductul.
                    </span>
                </li>
                <li>
                    <strong>Calea Rectală (37.5°C):</strong> 
                    <span class="block mt-1 text-slate-600">
                        "Gold Standard" clinic. Contraindicată în chirurgia rectală, neutropenie sau risc de sângerare.
                    </span>
                </li>
                <li>
                    <strong>Calea Orală (37.0°C):</strong> 
                    <span class="block mt-1 text-slate-600">
                        Sublingual. Afectată de ingestia recentă de lichide reci/calde. Nu utilizați la pacienți inconștienți sau confuzi.
                    </span>
                </li>
             </ul>
          </section>

          <!-- ALERT BOX -->
          <div class="bg-[#FFF9C4] border-l-4 border-[#E9B82B] p-4 text-sm my-6 rounded-r-lg shadow-sm">
              <h4 class="font-sans font-bold text-[#164C84] mb-1 text-xs uppercase tracking-wider flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                SIGURANȚA PACIENTULUI
              </h4>
              <p class="mb-2"><strong>Risc Biologic:</strong> Termometrul este un vector frecvent al infecțiilor nosocomiale (ex. <em>C. auris</em>, <em>VRE</em>). Dezinfectarea cu alcool 70% între pacienți este obligatorie, sau utilizarea huselor de unică folosință.</p>
          </div>

          <!-- SEC 3: Patrones Febriles -->
          <section>
              <h2 class="font-sans font-bold text-[#164C84] text-lg uppercase mb-2 border-b border-[#379B7F] pb-1">3. Modele Clinice de Febră</h2>
              
              <div class="grid grid-cols-1 gap-4 mb-4">
                  <div class="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                      <h5 class="font-sans font-bold text-[#164C84] text-xs uppercase mb-2">CLASIFICARE SEMIOLOGICĂ</h5>
                      <ul class="list-disc list-inside text-xs space-y-2">
                        <li><strong>Continuă:</strong> Oscilații < 1°C. (Ex. Pneumonie pneumococică).</li>
                        <li><strong>Remitentă:</strong> Oscilații > 1°C fără a reveni la normal.</li>
                        <li><strong>Intermitentă:</strong> Vârfuri febrile alternate cu apirexie. (Ex. Sepsis, Paludism).</li>
                        <li><strong>Recurentă:</strong> Zile de febră alternate cu zile de apirexie.</li>
                      </ul>
                  </div>
              </div>
          </section>

           <!-- NANDA TABLE -->
           <div class="my-6">
                <h4 class="font-sans font-bold text-xs uppercase text-[#164C84] mb-1 tracking-wide">DIAGNOSTICE NANDA-I ASOCIATE</h4>
                <table class="w-full text-xs font-sans border border-slate-200 text-left">
                    <tr class="bg-[#164C84] text-white">
                        <th class="p-2 text-left w-16">Cod</th>
                        <th class="p-2 text-left">Diagnostic</th>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 font-bold align-top bg-slate-50">00007</td>
                        <td class="p-2 align-top">
                            <strong>Hipertermie:</strong> Creșterea temperaturii prin eșec termoregulator (insolație). NU răspunde la antipiretice.
                        </td>
                    </tr>
                    <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00274</td>
                        <td class="p-2 align-top">
                            <strong>Termoreglare ineficace:</strong> Fluctuații termice între hipotermie și hipertermie (nou-născut, traume cerebrale).
                        </td>
                    </tr>
                </table>
           </div>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPITOLUL 1 • SEMNE VITALE
      </div>
    </div>
  `
};
