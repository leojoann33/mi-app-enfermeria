export const MODULE_1_LESSON_7 = {
  id: "1-7",
  titleES: "7. Signos de Deterioro Clínico: Método ABCDE",
  titleRO: "7. Semne de Deteriorare Clinică: Metoda ABCDE",
  contentES: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: INTRO -->
          <section>
            <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">1. Detección Precoz: "Tiempo es Vida"</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#003366]">
              El deterioro clínico rara vez es súbito; suele estar precedido por 6-8 horas de cambios fisiológicos sutiles. La enfermera es la primera línea de defensa.
            </p>
            <div class="bg-red-50 p-4 border border-red-200 rounded-sm">
                <strong class="block text-red-800 font-sans text-xs uppercase mb-1">ALERTA ROJA (RED FLAGS)</strong>
                <ul class="list-disc pl-4 text-xs space-y-1 text-slate-700">
                    <li>FR < 8 o > 25 rpm (El predictor más sensible).</li>
                    <li>TAS < 90 mmHg.</li>
                    <li>FC > 130 lpm.</li>
                    <li>Alteración aguda de conciencia.</li>
                </ul>
            </div>
          </section>

          <!-- SEC 2: ABCDE -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">2. Enfoque Sistemático ABCDE</h2>
             <p class="mb-2 text-sm">Estándar internacional (ERC/AHA) para evaluar al paciente crítico. <strong>No pases al siguiente paso sin resolver el anterior.</strong></p>
             
             <div class="space-y-2 mt-4">
                 <!-- A -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">A</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Airway (Vía Aérea)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">¿Es permeable? ¿Hay estridor, cuerpos extraños o secreciones? <br><em>Acción: Maniobra frente-mentón, Guedel, aspiración.</em></p>
                     </div>
                 </div>
                 <!-- B -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">B</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Breathing (Respiración)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">FR, Trabajo respiratorio, SpO2, Auscultación. <br><em>Acción: Oxígeno alto flujo si SpO2 < 94% (salvo EPOC).</em></p>
                     </div>
                 </div>
                 <!-- C -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">C</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Circulation (Circulación)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">PA, FC, Relleno capilar, Color piel, Tª. <br><em>Acción: Accesos venosos, fluidoterapia, posición Trendelenburg.</em></p>
                     </div>
                 </div>
                 <!-- D -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">D</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Disability (Neurológico)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">Glasgow (GCS), Pupilas, Glucemia capilar. <br><em>Acción: Tratar hipoglucemia, proteger vía aérea si GCS < 8.</em></p>
                     </div>
                 </div>
                 <!-- E -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">E</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Exposure (Exposición)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">Examen físico completo. Buscar sangrados ocultos, rash, edemas. Respetar dignidad.</p>
                     </div>
                 </div>
             </div>
          </section>

          <!-- SEC 3: NEWS2 -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">3. Escala NEWS2 (National Early Warning Score)</h2>
             <p class="mb-3 text-sm">
                Herramienta estandarizada para cuantificar la gravedad. Suma puntos (0-3) por cada constante alterada.
             </p>
             <div class="overflow-x-auto">
                 <table class="w-full text-xs font-sans border-collapse border border-slate-200 text-center">
                     <thead>
                         <tr class="bg-gray-100 text-slate-700">
                             <th class="border p-1">Puntuación</th>
                             <th class="border p-1 bg-green-100">0 (Normal)</th>
                             <th class="border p-1 bg-yellow-100">1-4 (Bajo)</th>
                             <th class="border p-1 bg-orange-100">5-6 (Medio)</th>
                             <th class="border p-1 bg-red-100">>= 7 (Alto)</th>
                         </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td class="border p-1 font-bold text-left">Acción</td>
                            <td class="border p-1 text-xs">Monitorización c/12h</td>
                            <td class="border p-1 text-xs">Avisar enfermera cargo. Monitorizar c/4h.</td>
                            <td class="border p-1 text-xs font-bold text-orange-800">AVISO MÉDICO URGENTE. Monitorizar c/1h.</td>
                            <td class="border p-1 text-xs font-bold text-red-800">ACTIVAR EQUIPO PARADA / UCI. Monitorizar continua.</td>
                        </tr>
                     </tbody>
                 </table>
             </div>
          </section>

          <!-- NANDA TABLE -->
           <div class="my-6">
                <h4 class="font-sans font-bold text-xs uppercase text-[#003366] mb-1 tracking-wide">DIAGNÓSTICOS NANDA-I ASOCIADOS</h4>
                <table class="w-full text-xs font-sans border border-slate-200">
                    <tr class="bg-[#003366] text-white">
                        <th class="p-2 text-left w-16">Cód.</th>
                        <th class="p-2 text-left">Diagnóstico</th>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 font-bold align-top bg-slate-50">00029</td>
                        <td class="p-2 align-top">
                            <strong>Disminución del gasto cardíaco:</strong> La cantidad de sangre bombeada por el corazón es inadecuada.
                        </td>
                    </tr>
                    <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00204</td>
                        <td class="p-2 align-top">
                            <strong>Perfusión tisular periférica ineficaz:</strong> Disminución de la circulación sanguínea periférica (Relleno capilar > 2s).
                        </td>
                    </tr>
                </table>
           </div>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPÍTULO 1 • SEGURIDAD CLÍNICA
      </div>
    </div>
  `,
  contentRO: `
    <div class="harrison-container text-slate-900 font-serif text-[15px] leading-relaxed">
      <!-- SINGLE COLUMN LINEAR LAYOUT -->
      <div class="space-y-8 text-justify">
          
          <!-- SEC 1: INTRO -->
          <section>
            <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">1. Detectare Precoce: "Timpul este Viață"</h2>
            <p class="mb-3 first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#003366]">
              Deteriorarea clinică este rareori bruscă; este de obicei precedată de 6-8 ore de modificări fiziologice subtile. Asistentul este prima linie de apărare.
            </p>
            <div class="bg-red-50 p-4 border border-red-200 rounded-sm">
                <strong class="block text-red-800 font-sans text-xs uppercase mb-1">ALARMĂ ROȘIE (RED FLAGS)</strong>
                <ul class="list-disc pl-4 text-xs space-y-1 text-slate-700">
                    <li>FR < 8 sau > 25 rpm (Cel mai sensibil predictor).</li>
                    <li>TAS < 90 mmHg.</li>
                    <li>FC > 130 bpm.</li>
                    <li>Alterare acută a conștienței.</li>
                </ul>
            </div>
          </section>

          <!-- SEC 2: ABCDE -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">2. Abordare Sistematică ABCDE</h2>
             <p class="mb-2 text-sm">Standard internațional (ERC/AHA) pentru evaluarea pacientului critic. <strong>Nu treceți la pasul următor fără a rezolva precedentul.</strong></p>
             
             <div class="space-y-2 mt-4">
                 <!-- A -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">A</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Airway (Căi Aeriene)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">Sunt permeabile? Există stridor, corpuri străine? <br><em>Acțiune: Manevra frunte-menton, Guedel, aspirare.</em></p>
                     </div>
                 </div>
                 <!-- B -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">B</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Breathing (Respirație)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">FR, Travail respirator, SpO2, Auscultație. <br><em>Acțiune: Oxigen debit mare dacă SpO2 < 94% (exceptând BPOC).</em></p>
                     </div>
                 </div>
                 <!-- C -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">C</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Circulation (Circulație)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">TA, FC, Umplere capilară, Culoare, Tª. <br><em>Acțiune: Acces venos, fluidoterapie, poziție Trendelenburg.</em></p>
                     </div>
                 </div>
                 <!-- D -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">D</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Disability (Neurologic)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">Glasgow (GCS), Pupile, Glicemie. <br><em>Acțiune: Tratare hipoglicemie, protejare căi aeriene dacă GCS < 8.</em></p>
                     </div>
                 </div>
                 <!-- E -->
                 <div class="flex items-start gap-3 p-2 bg-slate-50 border border-slate-200">
                     <div class="w-8 h-8 flex items-center justify-center bg-[#003366] text-white font-bold rounded shrink-0">E</div>
                     <div>
                         <strong class="block text-[#003366] text-xs uppercase">Exposure (Expunere)</strong>
                         <p class="text-[12px] leading-tight text-slate-600">Examen fizic complet. Căutați sângerări, erupții. Respectați demnitatea.</p>
                     </div>
                 </div>
             </div>
          </section>

          <!-- SEC 3: NEWS2 -->
          <section>
             <h2 class="font-sans font-bold text-[#003366] text-lg uppercase mb-2 border-b border-slate-300 pb-1">3. Scara NEWS2 (Scor de Avertizare Timpurie)</h2>
             <p class="mb-3 text-sm">
                Instrument standardizat pentru cuantificarea gravității. Adună puncte (0-3) pentru fiecare constantă alterată.
             </p>
             <div class="overflow-x-auto">
                 <table class="w-full text-xs font-sans border-collapse border border-slate-200 text-center">
                     <thead>
                         <tr class="bg-gray-100 text-slate-700">
                             <th class="border p-1">Scor</th>
                             <th class="border p-1 bg-green-100">0 (Normal)</th>
                             <th class="border p-1 bg-yellow-100">1-4 (Scăzut)</th>
                             <th class="border p-1 bg-orange-100">5-6 (Mediu)</th>
                             <th class="border p-1 bg-red-100">>= 7 (Înalt)</th>
                         </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td class="border p-1 font-bold text-left">Acțiune</td>
                            <td class="border p-1 text-xs">Monitorizare la 12h</td>
                            <td class="border p-1 text-xs">Anunțați asistent șef. Monitorizare la 4h.</td>
                            <td class="border p-1 text-xs font-bold text-orange-800">AVIZ MEDICAL URGENT. Monitorizare la 1h.</td>
                            <td class="border p-1 text-xs font-bold text-red-800">ACTIVARE ECHIPĂ RESUSC. / ATI. Monitorizare continuă.</td>
                        </tr>
                     </tbody>
                 </table>
             </div>
          </section>

          <!-- NANDA TABLE -->
           <div class="my-6">
                <h4 class="font-sans font-bold text-xs uppercase text-[#003366] mb-1 tracking-wide">DIAGNOSTICE NANDA-I ASOCIATE</h4>
                <table class="w-full text-xs font-sans border border-slate-200">
                    <tr class="bg-[#003366] text-white">
                        <th class="p-2 text-left w-16">Cod</th>
                        <th class="p-2 text-left">Diagnostic</th>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 font-bold align-top bg-slate-50">00029</td>
                        <td class="p-2 align-top">
                            <strong>Scăderea debitului cardiac:</strong> Cantitatea de sânge pompată de inimă este inadecvată.
                        </td>
                    </tr>
                    <tr>
                        <td class="p-2 font-bold align-top bg-slate-50">00204</td>
                        <td class="p-2 align-top">
                            <strong>Perfuzie tisulară periferică ineficientă:</strong> Scăderea circulației sanguine periferice (Umplere capilară > 2s).
                        </td>
                    </tr>
                </table>
           </div>

      </div>
      
      <!-- FOOTER NOTE -->
      <div class="mt-8 border-t border-slate-300 pt-4 text-[11px] text-slate-500 font-sans text-center">
        PETRESCU MANUAL 2026 • CAPITOLUL 1 • SIGURANȚĂ CLINICĂ
      </div>
    </div>
  `
};
