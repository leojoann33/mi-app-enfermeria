// src/data/course_content_m1.js
// CONTENIDO DETALLADO: MÓDULO 1 (Constantes Vitales y Observación)
// Enfoque: Reciclaje profesional avanzado (Enfermería Experta en España)
// PARTE 1 DE 4

export const MODULE1_CONTENT = {

  // =================================================================================================
  // TEMA 1: TEMPERATURA
  // =================================================================================================
  "1. Toma de temperatura: vías y rangos normales": {
    titleES: "1. Toma de temperatura: Fisiología, Técnica y Actualización",
    titleRO: "1. Măsurarea temperaturii: Fiziologie, Tehnică și Actualizare",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Termometría Clínica Digital",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        {/* BLOQUE 1: CONTEXTO PROFESIONAL */}
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 class="font-heading text-xl font-bold text-brand-deep mb-3">La evolución de la Termometría</h3>
            <p>Bienvenida de nuevo. Si tu última referencia es el termómetro de mercurio, debes saber que fue <strong>prohibido en la UE en 2007</strong> por su toxicidad. Ya no "bajamos el mercurio" agitando la muñeca.</p>
            <p class="mt-3">Ahora usamos termómetros digitales (termistores) o de infrarrojos. Son más rápidos, pero paradójicamente, <strong>son más propensos al error humano</strong> si no se usan con la técnica exacta. Un termómetro de mercurio lo dejabas 5 minutos y marcaba bien por equilibrio térmico. Uno digital de 30 segundos requiere que la punta esté en contacto perfecto desde el segundo cero.</p>
        </div>

        {/* BLOQUE 2: FISIOLOGÍA AVANZADA */}
        <div class="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
          <h4 class="font-bold text-blue-900 text-lg flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
             Fisiología: El Ritmo Circadiano
          </h4>
          <p class="mt-2 text-blue-800">
            La temperatura no es una línea plana. Sigue un reloj biológico interno. 
            <br><strong>Nadir (Mínimo):</strong> 04:00 - 06:00 AM.
            <br><strong>Cenit (Máximo):</strong> 18:00 - 20:00 PM.
          </p>
          <p class="mt-3 text-blue-900 font-bold">Implicación Clínica:</p>
          <p class="text-blue-800 text-sm">
            Si un paciente tiene <strong>37.5ºC a las 9:00 de la mañana</strong>, es un signo de alarma mucho mayor que tener 37.5ºC a las 20:00 de la tarde. La "fiebre matutina" rompe el ciclo fisiológico y suele indicar infecciones bacterianas más agresivas (neumonías, abscesos).
          </p>
        </div>

        {/* BLOQUE 3: CLASIFICACIÓN RIGUROSA */}
        <div>
            <h3 class="font-heading text-2xl font-bold text-brand-deep mb-4">Clasificación Rigurosa (Criterios España)</h3>
            <p class="mb-4 text-sm">Olvídese de "tener décimas". Use esta terminología para el registro en GACELA/Historia Clínica:</p>
            
            <div class="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <table class="w-full text-sm text-left border-collapse">
                  <thead class="bg-brand-deep text-white">
                    <tr><th class="p-4">Concepto</th><th class="p-4">Rango (Axilar)</th><th class="p-4">Protocolo de Actuación</th></tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-700">Normotermia</td><td class="p-4">36.0 - 37.0ºC</td><td class="p-4">Registro normal. Sin acción.</td></tr>
                    <tr class="hover:bg-yellow-50"><td class="p-4 font-bold text-yellow-700">Febrícula (Distermia)</td><td class="p-4">37.1 - 37.9ºC</td><td class="p-4">1. Destapar (medidas físicas).<br/>2. Ofrecer agua.<br/>3. Reevaluar en 1h.<br/>4. <strong>No dar antitérmico</strong> (enmascara la evolución) salvo orden expresa.</td></tr>
                    <tr class="hover:bg-orange-50"><td class="p-4 font-bold text-orange-600">Fiebre (Pirexia)</td><td class="p-4">≥ 38.0ºC</td><td class="p-4">1. Administrar antitérmico pautado (Paracetamol 1g).<br/>2. <strong>IMPORTANTE:</strong> Si hay tiritona (escalofríos), extraer HEMOCULTIVOS antes de medicar.</td></tr>
                    <tr class="hover:bg-red-50"><td class="p-4 font-bold text-red-600">Hiperpirexia</td><td class="p-4">> 41.0ºC</td><td class="p-4"><strong>URGENCIA VITAL.</strong> Riesgo de daño cerebral y convulsión. Enfriamiento físico agresivo (hielo en ingles/axilas) y aviso médico inmediato.</td></tr>
                    <tr class="hover:bg-blue-50"><td class="p-4 font-bold text-blue-600">Hipotermia</td><td class="p-4">< 35.5ºC</td><td class="p-4">Calentar con manta térmica. Verificar si el termómetro funciona bien (muchos digitales dan error "Lo" por debajo de 34º).</td></tr>
                  </tbody>
                </table>
            </div>
        </div>

        {/* BLOQUE 4: TÉCNICA DETALLADA */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Técnica: Evitando el Falso Dato</h3>
        
        <div class="grid md:grid-cols-1 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                <h4 class="font-bold text-brand-primary text-lg mb-3 flex items-center gap-2">
                    <span class="bg-brand-light p-1.5 rounded-lg"><span class="text-xl">🌡️</span></span> Termómetro Digital (Axilar)
                </h4>
                <p class="text-sm mb-3">Es el estándar en planta. Pero el sudor es su enemigo.</p>
                
                <div class="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                    <strong class="text-red-700 block text-xs uppercase tracking-widest mb-1">El Error Frecuente</strong>
                    <p class="text-sm text-red-900">Si el paciente tiene la axila sudada, el agua se evapora y "roba" calor a la piel (refrigeración evaporativa). El termómetro marcará 36.5ºC cuando el paciente tiene 38ºC reales.</p>
                </div>

                <p class="text-sm font-bold text-slate-700 mb-2">Procedimiento Correcto:</p>
                <ol class="list-decimal pl-5 text-sm space-y-2 text-slate-600">
                    <li><strong>Seque la axila:</strong> Use una gasa o pañuelo. Hágalo con toques suaves ("popping"). <strong>No frote fuerte</strong>, ya que la fricción genera calor local y falsea el dato al alza.</li>
                    <li><strong>Colocación exacta:</strong> La punta metálica (sensor) debe ir al <em>hueco poplíteo</em> de la axila (el vértice más profundo). Debe tocar piel por ambos lados.</li>
                    <li><strong>Cierre estanco:</strong> Cruce el antebrazo del paciente sobre su tórax para sellar la axila. Si el paciente está muy delgado, presione el brazo contra el costado usted misma.</li>
                    <li><strong>Tiempo:</strong> Espere al pitido. Si se lo saca antes, la medición es inválida.</li>
                </ol>
            </div>
        </div>

        {/* BLOQUE 5: MULTIMEDIA */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Técnica Visual</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video técnica temperatura" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Procedimiento: Toma de Constantes Vitales</p>
                <p class="text-white/80 text-xs">Observe la colocación exacta del termómetro y la posición del paciente.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 class="font-heading text-xl font-bold text-brand-deep mb-3">Evoluția Termometriei</h3>
            <p>Bine ai revenit. Dacă ultima ta referință este termometrul cu mercur, trebuie să știi că a fost <strong>interzis în UE în 2007</strong> din cauza toxicității. Nu mai "scădem mercurul" scuturând încheietura.</p>
            <p class="mt-3">Acum folosim termometre digitale sau cu infraroșu. Sunt mai rapide, dar paradoxal, <strong>sunt mai predispuse la eroarea umană</strong> dacă nu se folosește tehnica exactă. Un termometru cu mercur îl lăsai 5 minute și măsura corect prin echilibru termic. Unul digital de 30 de secunde necesită ca vârful să fie în contact perfect din secunda zero.</p>
        </div>

        <div class="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
          <h4 class="font-bold text-blue-900 text-lg flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
             Fiziologie: Ritmul Circadian
          </h4>
          <p class="mt-2 text-blue-800">
            Temperatura nu este o linie plată. Urmează un ceas biologic intern.
            <br><strong>Minim (Nadir):</strong> 04:00 - 06:00 AM.
            <br><strong>Maxim (Zenit):</strong> 18:00 - 20:00 PM.
          </p>
          <p class="mt-3 text-blue-900 font-bold">Implicație Clinică:</p>
          <p class="text-blue-800 text-sm">
            Dacă un pacient are <strong>37.5ºC la 9:00 dimineața</strong>, este un semn de alarmă mult mai mare decât a avea 37.5ºC la 20:00 seara. "Febra matinală" rupe ciclul fiziologic și indică de obicei infecții bacteriene mai agresive.
          </p>
        </div>

        <div>
            <h3 class="font-heading text-2xl font-bold text-brand-deep mb-4">Clasificare Riguroasă (Criterii Spania/UE)</h3>
            <p class="mb-4 text-sm">Uitați de expresia "are puțină febră". Folosiți această terminologie pentru înregistrarea în dosar:</p>
            
            <div class="overflow-hidden rounded-xl border border-slate-200 shadow-md">
                <table class="w-full text-sm text-left border-collapse">
                  <thead class="bg-brand-deep text-white">
                    <tr><th class="p-4">Concept</th><th class="p-4">Interval (Axilar)</th><th class="p-4">Protocol Acțiune</th></tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-700">Normotermie</td><td class="p-4">36.0 - 37.0ºC</td><td class="p-4">Înregistrare normală. Fără acțiune.</td></tr>
                    <tr class="hover:bg-yellow-50"><td class="p-4 font-bold text-yellow-700">Subfebrilitate</td><td class="p-4">37.1 - 37.9ºC</td><td class="p-4">1. Dezvelire (măsuri fizice).<br/>2. Oferire apă.<br/>3. Reevaluare în 1h.<br/>4. <strong>Nu dați antitermic</strong> decât la indicație expresă.</td></tr>
                    <tr class="hover:bg-orange-50"><td class="p-4 font-bold text-orange-600">Febră (Pirexie)</td><td class="p-4">≥ 38.0ºC</td><td class="p-4">1. Administrare antitermic (Paracetamol 1g).<br/>2. <strong>IMPORTANT:</strong> Dacă are frisoane, recoltați HEMOCULTURI înainte de a da medicamentul.</td></tr>
                    <tr class="hover:bg-red-50"><td class="p-4 font-bold text-red-600">Hiperpirexie</td><td class="p-4">> 41.0ºC</td><td class="p-4"><strong>URGENȚĂ VITALĂ.</strong> Risc de leziuni cerebrale și convulsii. Răcire fizică agresivă și anunțare medic imediat.</td></tr>
                    <tr class="hover:bg-blue-50"><td class="p-4 font-bold text-blue-600">Hipotermie</td><td class="p-4">< 35.5ºC</td><td class="p-4">Încălzire cu pături. Verificați dacă termometrul funcționează (multe dau eroare "Lo" sub 34º).</td></tr>
                  </tbody>
                </table>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Tehnică: Evitarea Datelor False</h3>
        
        <div class="grid md:grid-cols-1 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
                <h4 class="font-bold text-brand-primary text-lg mb-3 flex items-center gap-2">
                    <span class="bg-brand-light p-1.5 rounded-lg"><span class="text-xl">🌡️</span></span> Termometru Digital (Axilar)
                </h4>
                <p class="text-sm mb-3">Este standardul pe secție. Dar transpirația este inamicul său.</p>
                
                <div class="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                    <strong class="text-red-700 block text-xs uppercase tracking-widest mb-1">Eroarea Frecventă</strong>
                    <p class="text-sm text-red-900">Dacă pacientul are axila transpirată, apa se evaporă și "fură" căldură din piele (răcire prin evaporare). Termometrul va arăta 36.5ºC când pacientul are 38ºC reali.</p>
                </div>

                <p class="text-sm font-bold text-slate-700 mb-2">Procedura Corectă:</p>
                <ol class="list-decimal pl-5 text-sm space-y-2 text-slate-600">
                    <li><strong>Uscați axila:</strong> Folosiți o compresă prin tamponare ușoară. <strong>Nu frecați tare</strong>, deoarece fricțiunea generează căldură falsă.</li>
                    <li><strong>Plasare exactă:</strong> Vârful metalic (senzorul) trebuie să fie în <em>vârful axilei</em> (cel mai adânc punct). Trebuie să atingă pielea pe ambele părți.</li>
                    <li><strong>Închidere etanșă:</strong> Încrucișați antebrațul pacientului pe torace. Dacă pacientul este foarte slab, presați brațul pe corp dumneavoastră.</li>
                    <li><strong>Timp:</strong> Așteptați semnalul sonor. Dacă îl scoateți înainte, măsurătoarea este invalidă.</li>
                </ol>
            </div>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Procedură Vizuală</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video tehnică temperatură" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Procedură: Măsurarea Semnelor Vitale</p>
                <p class="text-white/80 text-xs">Observați plasarea exactă a termometrului și poziția pacientului.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 2: FRECUENCIA CARDIACA
  // =================================================================================================
  "2. Frecuencia cardiaca: cómo tomar el pulso y detectar alteraciones": {
    titleES: "2. Frecuencia Cardiaca: El Arte Perdido de la Palpación",
    titleRO: "2. Frecvența Cardiacă: Arta Pierdută a Palpării",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Palpación de Pulso Radial",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        {/* INTRODUCCIÓN */}
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg font-medium">Vivimos en la era de los monitores que pitan y muestran números en verde. Pero un monitor te da un número, no te da una sensación.</p>
            <p class="mt-3">Como enfermera experta, <strong>su mano es mejor que la máquina</strong>. Un monitor puede marcar "80 lpm" y no detectar que el pulso es <em>filiforme</em> (tan débil que apenas se nota) o <em>arrítmico</em> (descompasado). Tocar al paciente le da información sobre su volumen de sangre y el estado de sus arterias que ninguna máquina puede darle.</p>
        </div>

        {/* ZONAS ANATÓMICAS DETALLADAS */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Mapa de Pulsos: Cuándo usar cuál</h3>
        
        <div class="grid gap-4">
            <div class="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-sm">
                <h4 class="font-bold text-brand-deep text-lg">1. Pulso Radial (Muñeca)</h4>
                <p class="text-sm mt-1 text-slate-600">Es el estándar en el paciente consciente.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Técnica:</strong> Use sus dedos índice y corazón (el pulgar tiene pulso propio y le confundirá). Presione suavemente la arteria radial contra el hueso radio.</li>
                    <li><strong>Dato Clínico:</strong> Si palpa el pulso radial, la Tensión Sistólica es de al menos <strong>80 mmHg</strong>. Si el paciente está consciente pero NO le encuentra el pulso radial, está en shock grave (hipotensión severa).</li>
                </ul>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">2. Pulso Carotídeo (Cuello)</h4>
                <p class="text-sm mt-1 text-slate-600">El último en desaparecer. Obligatorio en RCP.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Ubicación:</strong> En el hueco entre la tráquea y el músculo del cuello.</li>
                    <li><strong>ALERTA DE SEGURIDAD:</strong> <span class="font-bold text-red-600">JAMÁS palpe las dos carótidas a la vez.</span> Cortaría el riego sanguíneo al cerebro y provocaría un síncope inmediato al paciente.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h4 class="font-bold text-indigo-900 text-lg">3. Pulso Pedio (Dorso del pie)</h4>
                <p class="text-sm mt-1 text-slate-600">Vital en diabéticos y cirugía vascular.</p>
                <p class="text-sm mt-2 text-slate-700">Nos dice si la sangre llega hasta el final de la pierna. <strong>Truco:</strong> Si le cuesta encontrarlo, marque con un rotulador en la piel el punto exacto ("X") donde lo nota. El turno siguiente se lo agradecerá.</p>
            </div>
        </div>

        {/* CONCEPTO AVANZADO: DÉFICIT DE PULSO */}
        <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 mt-8">
            <h4 class="font-bold text-orange-900 text-lg mb-2">Concepto Avanzado: El "Déficit de Pulso" en la Fibrilación Auricular</h4>
            <p class="text-slate-700 text-sm mb-3">La Fibrilación Auricular (FA) es la arritmia más común en ancianos. El corazón late como una "bolsa de gusanos", de forma caótica. A veces se contrae tan débilmente que la onda de sangre no llega a la muñeca.</p>
            <div class="bg-white p-4 rounded-lg border border-orange-100">
                <p class="font-bold text-orange-800 text-sm">Lo que ocurre:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600 mt-1">
                    <li>El monitor de ECG (corazón) marca: <strong>110 lpm</strong>.</li>
                    <li>Usted palpa en la muñeca (radial): <strong>70 lpm</strong>.</li>
                </ul>
                <p class="mt-2 text-sm font-bold text-slate-700">¿Cuál es la real?</p>
                <p class="text-sm text-slate-600">La del corazón (110). Esos 40 latidos de diferencia son "latidos ineficaces". Para administrar medicación (ej. Digoxina), fíese siempre del monitor o del <strong>pulso apical</strong> (auscultado con fonendoscopio en el pecho), nunca del radial en estos casos.</p>
            </div>
        </div>

        {/* TABLA DE ALTERACIONES */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Interpretación Clínica: ¿Cuándo debo correr?</h3>
        <div class="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <table class="w-full text-sm text-left border-collapse">
                <thead class="bg-slate-800 text-white">
                    <tr><th class="p-3">Alteración</th><th class="p-3">Rango</th><th class="p-3">Contexto Normal (No preocuparse)</th><th class="p-3 bg-red-900">Contexto ALARMA (Avisar Médico)</th></tr>
                </thead>
                <tbody class="bg-white divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Bradicardia</td><td class="p-3">< 60 lpm</td><td class="p-3">Deportistas jóvenes, durante el sueño profundo, pacientes que toman Betabloqueantes (Bisoprolol, Atenolol).</td><td class="p-3 text-red-700 font-bold bg-red-50">Si el paciente se marea, tiene la tensión baja o dolor de pecho. (Riesgo de parada).</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Taquicardia</td><td class="p-3">> 100 lpm</td><td class="p-3">Tras caminar, estrés, miedo, haber tomado café.</td><td class="p-3 text-red-700 font-bold bg-red-50">En reposo. Puede indicar: Fiebre, Deshidratación, Hemorragia interna (sangrado) o Dolor intenso.</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Arritmia</td><td class="p-3">Irregular</td><td class="p-3">Paciente con FA crónica conocida y anticoagulado (Sintrom).</td><td class="p-3 text-red-700 font-bold bg-red-50"><strong>Arritmia de nueva aparición.</strong> El paciente nota "vuelcos". Riesgo altísimo de Ictus por coágulos. Requiere ECG urgente.</td></tr>
                </tbody>
            </table>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Práctico</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Técnica de Palpación</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video palpación de pulso" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Signos Vitales: El Pulso</p>
                <p class="text-white/80 text-xs">Aprenda a localizar los puntos anatómicos y a contar correctamente.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        {/* INTRODUCERE */}
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg font-medium">Trăim în era monitoarelor care piuie și afișează numere în verde. Dar un monitor îți dă un număr, nu îți dă o senzație.</p>
            <p class="mt-3">Ca asistentă expertă, <strong>mâna ta este mai bună decât mașina</strong>. Un monitor poate indica "80 bpm" și să nu detecteze că pulsul este <em>filiform</em> (atât de slab încât abia se simte) sau <em>aritmic</em> (neregulat). Atingerea pacientului îți oferă informații despre volumul său de sânge și starea arterelor pe care nicio mașină nu ți le poate oferi.</p>
        </div>

        {/* ZONE ANATOMICE DETALIATE */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Harta Pulsurilor: Când și pe care să-l folosești</h3>
        
        <div class="grid gap-4">
            <div class="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-sm">
                <h4 class="font-bold text-brand-deep text-lg">1. Puls Radial (Încheietură)</h4>
                <p class="text-sm mt-1 text-slate-600">Este standardul la pacientul conștient.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Tehnică:</strong> Folosește degetele index și mijlociu (niciodată degetul mare, are propriul puls). Apasă ușor artera radială pe osul radius.</li>
                    <li><strong>Dată Clinică:</strong> Dacă palpezi pulsul radial, Tensiunea Sistolică este de cel puțin <strong>80 mmHg</strong>. Dacă pacientul este conștient dar NU îi găsești pulsul radial, este în șoc grav (hipotensiune severă).</li>
                </ul>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">2. Puls Carotidian (Gât)</h4>
                <p class="text-sm mt-1 text-slate-600">Ultimul care dispare. Obligatoriu în RCP.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Locație:</strong> În șanțul dintre trahee și mușchiul gâtului.</li>
                    <li><strong>ALERTĂ DE SIGURANȚĂ:</strong> <span class="font-bold text-red-600">NU palpa niciodată ambele carotide simultan.</span> Ai tăia fluxul sanguin către creier și ai provoca un leșin (sincopă) imediat pacientului.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h4 class="font-bold text-indigo-900 text-lg">3. Puls Pedios (Dosul piciorului)</h4>
                <p class="text-sm mt-1 text-slate-600">Vital la diabetici și chirurgie vasculară.</p>
                <p class="text-sm mt-2 text-slate-700">Ne spune dacă sângele ajunge până la capătul piciorului. <strong>Truc:</strong> Dacă îți e greu să-l găsești, marchează cu un marker pe piele punctul exact ("X") unde îl simți. Tura următoare îți va mulțumi.</p>
            </div>
        </div>

        {/* CONCEPT AVANSAT: DEFICIT DE PULS */}
        <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 mt-8">
            <h4 class="font-bold text-orange-900 text-lg mb-2">Concept Avansat: "Deficitul de Puls" în Fibrilația Atrială</h4>
            <p class="text-slate-700 text-sm mb-3">Fibrilația Atrială (FiA) este cea mai comună aritmie la vârstnici. Inima bate haotic, ca o "pungă cu viermi". Uneori se contractă atât de slab încât unda de sânge nu ajunge la încheietură.</p>
            <div class="bg-white p-4 rounded-lg border border-orange-100">
                <p class="font-bold text-orange-800 text-sm">Ce se întâmplă:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600 mt-1">
                    <li>Monitorul EKG (inima) arată: <strong>110 bpm</strong>.</li>
                    <li>Tu palpezi la mână (radial): <strong>70 bpm</strong>.</li>
                </ul>
                <p class="mt-2 text-sm font-bold text-slate-700">Care e real?</p>
                <p class="text-sm text-slate-600">Cel al inimii (110). Acele 40 de bătăi diferență sunt "bătăi ineficiente". Pentru a administra medicamente (ex. Digoxin), bazează-te întotdeauna pe monitor sau pe <strong>pulsul apical</strong> (ascultat cu stetoscopul pe piept), niciodată pe cel radial în aceste cazuri.</p>
            </div>
        </div>

        {/* TABEL DE INTERPRETARE */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Interpretare Clinică: Când trebuie să alerg?</h3>
        <div class="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <table class="w-full text-sm text-left border-collapse">
                <thead class="bg-slate-800 text-white">
                    <tr><th class="p-3">Alterare</th><th class="p-3">Interval</th><th class="p-3">Context Normal (Nu te îngrijora)</th><th class="p-3 bg-red-900">Context ALARMĂ (Anunță Medicul)</th></tr>
                </thead>
                <tbody class="bg-white divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Bradicardie</td><td class="p-3">< 60 bpm</td><td class="p-3">Sportivi tineri, în timpul somnului profund, pacienți care iau Betablocante (Bisoprolol, Atenolol).</td><td class="p-3 text-red-700 font-bold bg-red-50">Dacă pacientul amețește, are tensiunea mică sau durere în piept. (Risc de stop).</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Tahicardie</td><td class="p-3">> 100 bpm</td><td class="p-3">După mers, stres, frică, consum de cafea.</td><td class="p-3 text-red-700 font-bold bg-red-50">În repaus. Poate indica: Febră, Deshidratare, Hemoragie internă (sângerare) sau Durere intensă.</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Aritmie</td><td class="p-3">Neregulat</td><td class="p-3">Pacient cu FiA cronică cunoscută și anticoagulat (Sintrom).</td><td class="p-3 text-red-700 font-bold bg-red-50"><strong>Aritmie nou instalată.</strong> Pacientul simte "goluri" în piept. Risc foarte mare de AVC prin cheaguri. Necesită EKG urgent.</td></tr>
                </tbody>
            </table>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Practic</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Tehnica de Palpare</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video palpare puls" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Pulsul</p>
                <p class="text-white/80 text-xs">Învață să localizezi punctele anatomice și să numeri corect.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 3: FRECUENCIA RESPIRATORIA
  // =================================================================================================
  "3. Frecuencia respiratoria: patrones normales y anormales": {
    titleES: "3. Frecuencia Respiratoria: El signo vital olvidado",
    titleRO: "3. Frecvența Respiratorie: Semnul vital uitat",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Evaluación Torácica",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 class="font-heading text-xl font-bold text-brand-deep mb-3">La "Cenicienta" de las Constantes</h3>
            <p>La Frecuencia Respiratoria (FR) es el signo vital que más se "inventa" en los registros ("le pongo 15 y ya está"). Grave error. La evidencia científica dice que es el <strong>primer indicador (predictor precoz) de deterioro clínico</strong>. Antes de que el corazón se pare o la tensión baje, el paciente empieza a respirar mal para compensar la acidosis. Si detectas esto a tiempo, evitas la parada.</p>
        </div>

        {/* TRUCO PROFESIONAL: EL SIGILO */}
        <div class="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
          <h4 class="font-bold text-green-900 text-lg flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
             Truco Profesional: El Sigilo
          </h4>
          <p class="mt-2 text-green-800">
            La respiración es el único signo vital que es voluntario e involuntario a la vez. Si usted entra y dice: "Caballero, voy a contar cómo respira", él cambiará su ritmo inconscientemente (se pondrá nervioso o respirará más lento).
          </p>
          <p class="mt-3 font-bold text-green-900">La Técnica Correcta:</p>
          <ol class="list-decimal pl-5 mt-1 text-sm text-green-900 space-y-1">
             <li>Tome el pulso radial normalmente (mano en la muñeca).</li>
             <li>Cuando termine de contar los latidos, <strong>SIN soltar la muñeca del paciente</strong> y sin decir nada, desvíe su mirada hacia su pecho o abdomen.</li>
             <li>Cuente las elevaciones del tórax durante 30 segundos completos.</li>
             <li>El paciente creerá que sigue contando el pulso y respirará de forma natural.</li>
          </ol>
        </div>

        {/* VALORES Y SIGNIFICADO */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Valores: Más allá del número</h3>
        
        <div class="grid gap-4">
             <div class="bg-white p-5 rounded-xl border-l-4 border-slate-400 shadow-sm">
                <h4 class="font-bold text-slate-700 text-lg">Eupnea (Normal)</h4>
                <p class="text-sm mt-1"><strong>12 a 20 rpm</strong>. El ritmo debe ser regular, silencioso y sin esfuerzo visible.</p>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                <h4 class="font-bold text-yellow-800 text-lg">Taquipnea (> 20 rpm)</h4>
                <p class="text-sm mt-1">Respiración rápida y superficial. El cuerpo necesita más oxígeno o eliminar CO2 (acidosis).</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUSAS PRINCIPALES:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Dolor:</strong> Causa nº1 en post-quirúrgicos.</li>
                    <li><strong>Ansiedad:</strong> Hiperventilación por nervios.</li>
                    <li><strong>Fiebre:</strong> Aumenta el metabolismo.</li>
                    <li><strong>Sepsis/Embolia:</strong> Signo de alarma grave.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-red-600 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">Bradipnea (< 12 rpm)</h4>
                <p class="text-sm mt-1">Respiración anormalmente lenta. <strong class="text-red-600">¡ALERTA ROJA!</strong> El cerebro "se olvida" de respirar.</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUSAS PRINCIPALES:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Opioides:</strong> Sobredosis de morfina, fentanilo (Prepare Naloxona).</li>
                    <li><strong>Sedantes:</strong> Exceso de Diazepam/Lorazepam.</li>
                    <li><strong>Daño Cerebral:</strong> Ictus o hemorragia que afecta al centro respiratorio.</li>
                </ul>
            </div>
        </div>

        {/* TRABAJO RESPIRATORIO */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Signos de "Sed de Aire" (Trabajo Respiratorio)</h3>
        <p class="mb-4">A veces el número es normal (18 rpm), pero el paciente se está agotando. No mire solo el número, mire al paciente (<strong>"Trate al paciente, no al monitor"</strong>).</p>

        <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">😫</span>
                <strong class="text-red-900 block mb-1">Tiraje</strong>
                <p class="text-xs text-red-800">Se hunden los huecos sobre las clavículas o entre las costillas al inspirar. Usa músculos "extra" para coger aire.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">👃</span>
                <strong class="text-red-900 block mb-1">Aleteo Nasal</strong>
                <p class="text-xs text-red-800">Abre mucho las fosas nasales en cada inspiración. Signo de hambre de aire extrema.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">〰️</span>
                <strong class="text-red-900 block mb-1">Resp. Abdominal</strong>
                <p class="text-xs text-red-800">Mueve la barriga exageradamente como un balancín. Fatiga del diafragma.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">🗣️</span>
                <strong class="text-red-900 block mb-1">Habla Entrecortada</strong>
                <p class="text-xs text-red-800">Tiene que pararse a coger aire en mitad de una frase. Disnea grave.</p>
            </div>
        </div>

        <div class="bg-slate-800 text-white p-6 rounded-xl mt-6 shadow-lg">
            <p class="font-bold uppercase text-xs mb-2 tracking-widest text-red-400">🚨 Alerta Clínica de Seguridad</p>
            <p>Si ve estos signos de esfuerzo, <strong>avise al médico inmediatamente</strong>, aunque el pulsioxímetro marque 95%. El oxígeno puede estar bien porque el paciente está haciendo un esfuerzo titánico, pero en 1 hora se agotará y entrará en parada respiratoria por fatiga muscular. Anticípese.</p>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Evaluación Respiratoria</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video valoración respiratoria" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Respirația</p>
                <p class="text-white/80 text-xs">Identificați semnele de efort respirator și tehnica corectă de numărare.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 class="font-heading text-xl font-bold text-brand-deep mb-3">"Cenușăreasa" Constantelor</h3>
            <p>Frecvența Respiratorie (FR) este semnul vital cel mai des "inventat" în registre ("îi trec 15 și gata"). O greșeală gravă. Dovezile științifice spun că este <strong>primul indicator (predictor precoce) de deteriorare clinică</strong>. Înainte ca inima să se oprească sau tensiunea să scadă, pacientul începe să respire prost pentru a compensa acidoza. Dacă detectați acest lucru la timp, evitați stopul.</p>
        </div>

        {/* TRUC PROFESIONAL: DISCREȚIA */}
        <div class="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
          <h4 class="font-bold text-green-900 text-lg flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
             Truc Profesional: Discreția
          </h4>
          <p class="mt-2 text-green-800">
            Respirația este singurul semn vital voluntar și involuntar. Dacă intrați și spuneți: "Domnule, voi număra cum respirați", el își va schimba ritmul inconștient (se va emoționa sau va respira mai lent).
          </p>
          <p class="mt-3 font-bold text-green-900">Tehnica Corectă:</p>
          <ol class="list-decimal pl-5 mt-1 text-sm text-green-900 space-y-1">
             <li>Luați pulsul radial în mod normal (mâna pe încheietură).</li>
             <li>Când terminați de numărat bătăile, <strong>FĂRĂ a da drumul mâinii pacientului</strong> și fără a spune nimic, mutați-vă privirea spre pieptul sau abdomenul său.</li>
             <li>Numărați ridicările toracelui timp de 30 de secunde complete.</li>
             <li>Pacientul va crede că încă numărați pulsul și va respira natural.</li>
          </ol>
        </div>

        {/* VALORI ȘI SEMNIFICAȚIE */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Valori: Dincolo de număr</h3>
        
        <div class="grid gap-4">
             <div class="bg-white p-5 rounded-xl border-l-4 border-slate-400 shadow-sm">
                <h4 class="font-bold text-slate-700 text-lg">Eupnee (Normal)</h4>
                <p class="text-sm mt-1"><strong>12 până la 20 rpm</strong>. Ritmul trebuie să fie regulat, silențios și fără efort vizibil.</p>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                <h4 class="font-bold text-yellow-800 text-lg">Tahipnee (> 20 rpm)</h4>
                <p class="text-sm mt-1">Respirație rapidă și superficială. Corpul are nevoie de mai mult oxigen sau trebuie să elimine CO2 (acidoză).</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUZE PRINCIPALE:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Durere:</strong> Cauza nr. 1 la post-operatori.</li>
                    <li><strong>Anxietate:</strong> Hiperventilație de stres.</li>
                    <li><strong>Febră:</strong> Crește metabolismul.</li>
                    <li><strong>Sepsis/Embolie:</strong> Semn de alarmă grav.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-red-600 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">Bradipnee (< 12 rpm)</h4>
                <p class="text-sm mt-1">Respirație anormal de lentă. <strong class="text-red-600">ALERTĂ ROȘIE!</strong> Creierul "uită" să respire.</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUZE PRINCIPALE:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Opioide:</strong> Supradoză de morfină, fentanil (Pregătiți Naloxona).</li>
                    <li><strong>Sedative:</strong> Exces de Diazepam/Lorazepam.</li>
                    <li><strong>Leziune Cerebrală:</strong> AVC sau hemoragie care afectează centrul respirator.</li>
                </ul>
            </div>
        </div>

        {/* TRAVALIU RESPIRATOR */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Semne de "Sete de Aer" (Efort Respirator)</h3>
        <p class="mb-4">Uneori numărul este normal (18 rpm), dar pacientul se epuizează. Nu priviți doar numărul, priviți pacientul (<strong>"Tratați pacientul, nu monitorul"</strong>).</p>

        <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">😫</span>
                <strong class="text-red-900 block mb-1">Tiraj</strong>
                <p class="text-xs text-red-800">Se adâncesc gropile de deasupra claviculelor sau dintre coaste la inspir. Folosește mușchi "extra" pentru a trage aer.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">👃</span>
                <strong class="text-red-900 block mb-1">Bătaia Aripilor Nazale</strong>
                <p class="text-xs text-red-800">Deschide larg nările la fiecare inspirație. Semn de foame de aer extremă.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">〰️</span>
                <strong class="text-red-900 block mb-1">Resp. Abdominală</strong>
                <p class="text-xs text-red-800">Mișcă burta exagerat ca un balansoar. Oboseală diafragmatică.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">🗣️</span>
                <strong class="text-red-900 block mb-1">Vorbire Sacadată</strong>
                <p class="text-xs text-red-800">Trebuie să se oprească să tragă aer în mijlocul propoziției. Dispnee gravă.</p>
            </div>
        </div>

        <div class="bg-slate-800 text-white p-6 rounded-xl mt-6 shadow-lg">
            <p class="font-bold uppercase text-xs mb-2 tracking-widest text-red-400">🚨 Alertă Clinică de Siguranță</p>
            <p>Dacă vedeți aceste semne de efort, <strong>anunțați medicul imediat</strong>, chiar dacă pulsoximetrul arată 95%. Oxigenul poate fi bun pentru că pacientul face un efort titanic, dar într-o oră se va epuiza și va intra în stop respirator prin oboseală musculară. Anticipați.</p>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Evaluare Respiratorie</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video evaluare respiratorie" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Respirația</p>
                <p class="text-white/80 text-xs">Identificați semnele de efort respirator și tehnica corectă de numărare.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },
  
  // =================================================================================================
  // TEMA 2: FRECUENCIA CARDIACA
  // =================================================================================================
  "2. Frecuencia cardiaca: cómo tomar el pulso y detectar alteraciones": {
    titleES: "2. Frecuencia Cardiaca: El Arte Perdido de la Palpación Manual",
    titleRO: "2. Frecvența Cardiacă: Arta Pierdută a Palpării Manuale",
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Palpación Radial",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg font-medium">Vivimos en la era de los monitores que pitan y muestran números en verde. Pero un monitor te da un número, no te da una sensación.</p>
            <p class="mt-3">Como enfermera experta, <strong>su mano es mejor que la máquina</strong>. Un monitor puede marcar "80 lpm" y no detectar que el pulso es <em>filiforme</em> (tan débil que apenas se nota) o <em>arrítmico</em> (descompasado). Tocar al paciente le da información sobre su volumen de sangre y el estado de sus arterias que ninguna máquina puede darle.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Mapa de Pulsos: Cuándo usar cuál</h3>
        
        <div class="grid gap-4">
            <div class="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-sm">
                <h4 class="font-bold text-brand-deep text-lg">1. Pulso Radial (Muñeca)</h4>
                <p class="text-sm mt-1 text-slate-600">Es el estándar en el paciente consciente.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Técnica:</strong> Use sus dedos índice y corazón (el pulgar tiene pulso propio y le confundirá). Presione suavemente la arteria radial contra el hueso radio.</li>
                    <li><strong>Dato Clínico:</strong> Si palpa el pulso radial, la Tensión Sistólica es de al menos <strong>80 mmHg</strong>. Si el paciente está consciente pero NO le encuentra el pulso radial, está en shock grave (hipotensión severa).</li>
                </ul>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">2. Pulso Carotídeo (Cuello)</h4>
                <p class="text-sm mt-1 text-slate-600">El último en desaparecer. Obligatorio en RCP.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Ubicación:</strong> En el hueco entre la tráquea y el músculo del cuello.</li>
                    <li><strong>ALERTA DE SEGURIDAD:</strong> <span class="font-bold text-red-600">JAMÁS palpe las dos carótidas a la vez.</span> Cortaría el riego sanguíneo al cerebro y provocaría un síncope inmediato al paciente.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h4 class="font-bold text-indigo-900 text-lg">3. Pulso Pedio (Dorso del pie)</h4>
                <p class="text-sm mt-1 text-slate-600">Vital en diabéticos y cirugía vascular.</p>
                <p class="text-sm mt-2 text-slate-700">Nos dice si la sangre llega hasta el final de la pierna. <strong>Truco:</strong> Si le cuesta encontrarlo, marque con un rotulador en la piel el punto exacto ("X") donde lo nota. El turno siguiente se lo agradecerá.</p>
            </div>
        </div>

        <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 mt-8">
            <h4 class="font-bold text-orange-900 text-lg mb-2">Concepto Avanzado: El "Déficit de Pulso" en la Fibrilación Auricular</h4>
            <p class="text-slate-700 text-sm mb-3">La Fibrilación Auricular (FA) es la arritmia más común en ancianos. El corazón late como una "bolsa de gusanos", de forma caótica. A veces se contrae tan débilmente que la onda de sangre no llega a la muñeca.</p>
            <div class="bg-white p-4 rounded-lg border border-orange-100">
                <p class="font-bold text-orange-800 text-sm">Lo que ocurre:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600 mt-1">
                    <li>El monitor de ECG (corazón) marca: <strong>110 lpm</strong>.</li>
                    <li>Usted palpa en la muñeca (radial): <strong>70 lpm</strong>.</li>
                </ul>
                <p class="mt-2 text-sm font-bold text-slate-700">¿Cuál es la real?</p>
                <p class="text-sm text-slate-600">La del corazón (110). Esos 40 latidos de diferencia son "latidos ineficaces". Para administrar medicación (ej. Digoxina), fíese siempre del monitor o del <strong>pulso apical</strong> (auscultado con fonendoscopio en el pecho), nunca del radial en estos casos.</p>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Interpretación Clínica: ¿Cuándo debo correr?</h3>
        <div class="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <table class="w-full text-sm text-left border-collapse">
                <thead class="bg-slate-800 text-white">
                    <tr><th class="p-3">Alteración</th><th class="p-3">Rango</th><th class="p-3">Contexto Normal (No preocuparse)</th><th class="p-3 bg-red-900">Contexto ALARMA (Avisar Médico)</th></tr>
                </thead>
                <tbody class="bg-white divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Bradicardia</td><td class="p-3">< 60 lpm</td><td class="p-3">Deportistas jóvenes, durante el sueño profundo, pacientes que toman Betabloqueantes (Bisoprolol, Atenolol).</td><td class="p-3 text-red-700 font-bold bg-red-50">Si el paciente se marea, tiene la tensión baja o dolor de pecho. (Riesgo de parada).</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Taquicardia</td><td class="p-3">> 100 lpm</td><td class="p-3">Tras caminar, estrés, miedo, haber tomado café.</td><td class="p-3 text-red-700 font-bold bg-red-50">En reposo. Puede indicar: Fiebre, Deshidratación, Hemorragia interna (sangrado) o Dolor intenso.</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Arritmia</td><td class="p-3">Irregular</td><td class="p-3">Paciente con FA crónica conocida y anticoagulado (Sintrom).</td><td class="p-3 text-red-700 font-bold bg-red-50"><strong>Arritmia de nueva aparición.</strong> El paciente nota "vuelcos". Riesgo altísimo de Ictus por coágulos. Requiere ECG urgente.</td></tr>
                </tbody>
            </table>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Práctico</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Técnica de Palpación</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video palpación de pulso" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Signos Vitales: El Pulso</p>
                <p class="text-white/80 text-xs">Aprenda a localizar los puntos anatómicos y a contar correctamente.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg font-medium">Trăim în era monitoarelor care piuie și afișează numere în verde. Dar un monitor îți dă un număr, nu îți dă o senzație.</p>
            <p class="mt-3">Ca asistentă expertă, <strong>mâna ta este mai bună decât mașina</strong>. Un monitor poate indica "80 bpm" și să nu detecteze că pulsul este <em>filiform</em> (atât de slab încât abia se simte) sau <em>aritmic</em> (neregulat). Atingerea pacientului îți oferă informații despre volumul său de sânge și starea arterelor pe care nicio mașină nu ți le poate oferi.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Harta Pulsurilor: Când și pe care să-l folosești</h3>
        
        <div class="grid gap-4">
            <div class="bg-white p-5 rounded-xl border-l-4 border-brand-primary shadow-sm">
                <h4 class="font-bold text-brand-deep text-lg">1. Puls Radial (Încheietură)</h4>
                <p class="text-sm mt-1 text-slate-600">Este standardul la pacientul conștient.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Tehnică:</strong> Folosește degetele index și mijlociu (niciodată degetul mare, are propriul puls). Apasă ușor artera radială pe osul radius.</li>
                    <li><strong>Dată Clinică:</strong> Dacă palpezi pulsul radial, Tensiunea Sistolică este de cel puțin <strong>80 mmHg</strong>. Dacă pacientul este conștient dar NU îi găsești pulsul radial, este în șoc grav (hipotensiune severă).</li>
                </ul>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">2. Puls Carotidian (Gât)</h4>
                <p class="text-sm mt-1 text-slate-600">Ultimul care dispare. Obligatoriu în RCP.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                    <li><strong>Locație:</strong> În șanțul dintre trahee și mușchiul gâtului.</li>
                    <li><strong>ALERTĂ DE SIGURANȚĂ:</strong> <span class="font-bold text-red-600">NU palpa niciodată ambele carotide simultan.</span> Ai tăia fluxul sanguin către creier și ai provoca un leșin (sincopă) imediat pacientului.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h4 class="font-bold text-indigo-900 text-lg">3. Puls Pedios (Dosul piciorului)</h4>
                <p class="text-sm mt-1 text-slate-600">Vital la diabetici și chirurgie vasculară.</p>
                <p class="text-sm mt-2 text-slate-700">Ne spune dacă sângele ajunge până la capătul piciorului. <strong>Truc:</strong> Dacă îți e greu să-l găsești, marchează cu un marker pe piele punctul exact ("X") unde îl simți. Tura următoare îți va mulțumi.</p>
            </div>
        </div>

        <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 mt-8">
            <h4 class="font-bold text-orange-900 text-lg mb-2">Concept Avansat: "Deficitul de Puls" în Fibrilația Atrială</h4>
            <p class="text-slate-700 text-sm mb-3">Fibrilația Atrială (FiA) este cea mai comună aritmie la vârstnici. Inima bate haotic, ca o "pungă cu viermi". Uneori se contractă atât de slab încât unda de sânge nu ajunge la încheietură.</p>
            <div class="bg-white p-4 rounded-lg border border-orange-100">
                <p class="font-bold text-orange-800 text-sm">Ce se întâmplă:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600 mt-1">
                    <li>Monitorul EKG (inima) arată: <strong>110 bpm</strong>.</li>
                    <li>Tu palpezi la mână (radial): <strong>70 bpm</strong>.</li>
                </ul>
                <p class="mt-2 text-sm font-bold text-slate-700">Care e real?</p>
                <p class="text-sm text-slate-600">Cel al inimii (110). Acele 40 de bătăi diferență sunt "bătăi ineficiente". Pentru a administra medicamente (ex. Digoxin), bazează-te întotdeauna pe monitor sau pe <strong>pulsul apical</strong> (ascultat cu stetoscopul pe piept), niciodată pe cel radial în aceste cazuri.</p>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Interpretare Clinică: Când trebuie să alerg?</h3>
        <div class="overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <table class="w-full text-sm text-left border-collapse">
                <thead class="bg-slate-800 text-white">
                    <tr><th class="p-3">Alterare</th><th class="p-3">Interval</th><th class="p-3">Context Normal (Nu te îngrijora)</th><th class="p-3 bg-red-900">Context ALARMĂ (Anunță Medicul)</th></tr>
                </thead>
                <tbody class="bg-white divide-y divide-slate-100">
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Bradicardie</td><td class="p-3">< 60 bpm</td><td class="p-3">Sportivi tineri, în timpul somnului profund, pacienți care iau Betablocante (Bisoprolol, Atenolol).</td><td class="p-3 text-red-700 font-bold bg-red-50">Dacă pacientul amețește, are tensiunea mică sau durere în piept. (Risc de stop).</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Tahicardie</td><td class="p-3">> 100 bpm</td><td class="p-3">După mers, stres, frică, consum de cafea.</td><td class="p-3 text-red-700 font-bold bg-red-50">În repaus. Poate indica: Febră, Deshidratare, Hemoragie internă (sângerare) sau Durere intensă.</td></tr>
                    <tr class="hover:bg-slate-50"><td class="p-3 font-bold">Aritmie</td><td class="p-3">Neregulat</td><td class="p-3">Pacient cu FiA cronică cunoscută și anticoagulat (Sintrom).</td><td class="p-3 text-red-700 font-bold bg-red-50"><strong>Aritmie nou instalată.</strong> Pacientul simte "goluri" în piept. Risc foarte mare de AVC prin cheaguri. Necesită EKG urgent.</td></tr>
                </tbody>
            </table>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Practic</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Tehnica de Palpare</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video palpare puls" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Pulsul</p>
                <p class="text-white/80 text-xs">Învață să localizezi punctele anatomice și să numeri corect.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 3: FRECUENCIA RESPIRATORIA
  // =================================================================================================
  "3. Frecuencia respiratoria: patrones normales y anormales": {
    titleES: "3. Frecuencia Respiratoria: El signo vital olvidado que salva vidas",
    titleRO: "3. Frecvența Respiratorie: Semnul vital uitat care salvează vieți",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Valoración Respiratoria",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 class="font-heading text-xl font-bold text-brand-deep mb-3">La "Cenicienta" de las Constantes</h3>
            <p>La Frecuencia Respiratoria (FR) es el signo vital que más se "inventa" en los registros ("le pongo 15 y ya está"). Grave error. La evidencia científica dice que es el <strong>primer indicador (predictor precoz) de deterioro clínico</strong>. Antes de que el corazón se pare o la tensión baje, el paciente empieza a respirar mal para compensar la acidosis. Si detectas esto a tiempo, evitas la parada.</p>
        </div>

        <div class="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
          <h4 class="font-bold text-green-900 text-lg flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
             Truco Profesional: El Sigilo
          </h4>
          <p class="mt-2 text-green-800">
            La respiración es el único signo vital que es voluntario e involuntario a la vez. Si usted entra y dice: "Caballero, voy a contar cómo respira", él cambiará su ritmo inconscientemente (se pondrá nervioso o respirará más lento).
          </p>
          <p class="mt-3 font-bold text-green-900">La Técnica Correcta:</p>
          <ol class="list-decimal pl-5 mt-1 text-sm text-green-900 space-y-1">
             <li>Tome el pulso radial normalmente (mano en la muñeca).</li>
             <li>Cuando termine de contar los latidos, <strong>SIN soltar la muñeca del paciente</strong> y sin decir nada, desvíe su mirada hacia su pecho o abdomen.</li>
             <li>Cuente las elevaciones del tórax durante 30 segundos completos.</li>
             <li>El paciente creerá que sigue contando el pulso y respirará de forma natural.</li>
          </ol>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Valores: Más allá del número</h3>
        
        <div class="grid gap-4">
             <div class="bg-white p-5 rounded-xl border-l-4 border-slate-400 shadow-sm">
                <h4 class="font-bold text-slate-700 text-lg">Eupnea (Normal)</h4>
                <p class="text-sm mt-1"><strong>12 a 20 rpm</strong>. El ritmo debe ser regular, silencioso y sin esfuerzo visible.</p>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                <h4 class="font-bold text-yellow-800 text-lg">Taquipnea (> 20 rpm)</h4>
                <p class="text-sm mt-1">Respiración rápida y superficial. El cuerpo necesita más oxígeno o eliminar CO2 (acidosis).</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUSAS PRINCIPALES:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Dolor:</strong> Causa nº1 en post-quirúrgicos.</li>
                    <li><strong>Ansiedad:</strong> Hiperventilación por nervios.</li>
                    <li><strong>Fiebre:</strong> Aumenta el metabolismo.</li>
                    <li><strong>Sepsis/Embolia:</strong> Signo de alarma grave.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-red-600 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">Bradipnea (< 12 rpm)</h4>
                <p class="text-sm mt-1">Respiración anormalmente lenta. <strong class="text-red-600">¡ALERTA ROJA!</strong> El cerebro "se olvida" de respirar.</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUSAS PRINCIPALES:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Opioides:</strong> Sobredosis de morfina, fentanilo (Prepare Naloxona).</li>
                    <li><strong>Sedantes:</strong> Exceso de Diazepam/Lorazepam.</li>
                    <li><strong>Daño Cerebral:</strong> Ictus o hemorragia que afecta al centro respiratorio.</li>
                </ul>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Signos de "Sed de Aire" (Trabajo Respiratorio)</h3>
        <p class="mb-4">A veces el número es normal (18 rpm), pero el paciente se está agotando. No mire solo el número, mire al paciente (<strong>"Trate al paciente, no al monitor"</strong>).</p>

        <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">😫</span>
                <strong class="text-red-900 block mb-1">Tiraje</strong>
                <p class="text-xs text-red-800">Se hunden los huecos sobre las clavículas o entre las costillas al inspirar. Usa músculos "extra" para coger aire.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">👃</span>
                <strong class="text-red-900 block mb-1">Aleteo Nasal</strong>
                <p class="text-xs text-red-800">Abre mucho las fosas nasales en cada inspiración. Signo de hambre de aire extrema.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">〰️</span>
                <strong class="text-red-900 block mb-1">Resp. Abdominal</strong>
                <p class="text-xs text-red-800">Mueve la barriga exageradamente como un balancín. Fatiga del diafragma.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">🗣️</span>
                <strong class="text-red-900 block mb-1">Habla Entrecortada</strong>
                <p class="text-xs text-red-800">Tiene que pararse a coger aire en mitad de una frase. Disnea grave.</p>
            </div>
        </div>

        <div class="bg-slate-800 text-white p-6 rounded-xl mt-6 shadow-lg">
            <p class="font-bold uppercase text-xs mb-2 tracking-widest text-red-400">🚨 Alerta Clínica de Seguridad</p>
            <p>Si ve estos signos de esfuerzo, <strong>avise al médico inmediatamente</strong>, aunque el pulsioxímetro marque 95%. El oxígeno puede estar bien porque el paciente está haciendo un esfuerzo titánico, pero en 1 hora se agotará y entrará en parada respiratoria por fatiga muscular. Anticípese.</p>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Evaluación Respiratoria</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video valoración respiratoria" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Respirația</p>
                <p class="text-white/80 text-xs">Identificați semnele de efort respirator și tehnica corectă de numărare.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 class="font-heading text-xl font-bold text-brand-deep mb-3">"Cenușăreasa" Constantelor</h3>
            <p>Frecvența Respiratorie (FR) este semnul vital cel mai des "inventat" în registre ("îi trec 15 și gata"). O greșeală gravă. Dovezile științifice spun că este <strong>primul indicator (predictor precoce) de deteriorare clinică</strong>. Înainte ca inima să se oprească sau tensiunea să scadă, pacientul începe să respire prost pentru a compensa acidoza. Dacă detectați acest lucru la timp, evitați stopul.</p>
        </div>

        <div class="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
          <h4 class="font-bold text-green-900 text-lg flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
             Truc Profesional: Discreția
          </h4>
          <p class="mt-2 text-green-800">
            Respirația este singurul semn vital voluntar și involuntar. Dacă intrați și spuneți: "Domnule, voi număra cum respirați", el își va schimba ritmul inconștient (se va emoționa sau va respira mai lent).
          </p>
          <p class="mt-3 font-bold text-green-900">Tehnica Corectă:</p>
          <ol class="list-decimal pl-5 mt-1 text-sm text-green-900 space-y-1">
             <li>Luați pulsul radial în mod normal (mâna pe încheietură).</li>
             <li>Când terminați de numărat bătăile, <strong>FĂRĂ a da drumul mâinii pacientului</strong> și fără a spune nimic, mutați-vă privirea spre pieptul sau abdomenul său.</li>
             <li>Numărați ridicările toracelui timp de 30 de secunde complete.</li>
             <li>Pacientul va crede că încă numărați pulsul și va respira natural.</li>
          </ol>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Valori: Dincolo de număr</h3>
        
        <div class="grid gap-4">
             <div class="bg-white p-5 rounded-xl border-l-4 border-slate-400 shadow-sm">
                <h4 class="font-bold text-slate-700 text-lg">Eupnee (Normal)</h4>
                <p class="text-sm mt-1"><strong>12 până la 20 rpm</strong>. Ritmul trebuie să fie regulat, silențios și fără efort vizibil.</p>
            </div>
            
            <div class="bg-white p-5 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                <h4 class="font-bold text-yellow-800 text-lg">Tahipnee (> 20 rpm)</h4>
                <p class="text-sm mt-1">Respirație rapidă și superficială. Corpul are nevoie de mai mult oxigen sau trebuie să elimine CO2 (acidoză).</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUZE PRINCIPALE:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Durere:</strong> Cauza nr. 1 la post-operatori.</li>
                    <li><strong>Anxietate:</strong> Hiperventilație de stres.</li>
                    <li><strong>Febră:</strong> Crește metabolismul.</li>
                    <li><strong>Sepsis/Embolie:</strong> Semn de alarmă grav.</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border-l-4 border-red-600 shadow-sm">
                <h4 class="font-bold text-red-800 text-lg">Bradipnee (< 12 rpm)</h4>
                <p class="text-sm mt-1">Respirație anormal de lentă. <strong class="text-red-600">ALERTĂ ROȘIE!</strong> Creierul "uită" să respire.</p>
                <p class="text-xs font-bold mt-2 uppercase text-slate-500">CAUZE PRINCIPALE:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li><strong>Opioide:</strong> Supradoză de morfină, fentanil (Pregătiți Naloxona).</li>
                    <li><strong>Sedative:</strong> Exces de Diazepam/Lorazepam.</li>
                    <li><strong>Leziune Cerebrală:</strong> AVC sau hemoragie care afectează centrul respirator.</li>
                </ul>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Semne de "Sete de Aer" (Efort Respirator)</h3>
        <p class="mb-4">Uneori numărul este normal (18 rpm), dar pacientul se epuizează. Nu priviți doar numărul, priviți pacientul (<strong>"Tratați pacientul, nu monitorul"</strong>).</p>

        <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">😫</span>
                <strong class="text-red-900 block mb-1">Tiraj</strong>
                <p class="text-xs text-red-800">Se adâncesc gropile de deasupra claviculelor sau dintre coaste la inspir. Folosește mușchi "extra" pentru a trage aer.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">👃</span>
                <strong class="text-red-900 block mb-1">Bătaia Aripilor Nazale</strong>
                <p class="text-xs text-red-800">Deschide larg nările la fiecare inspirație. Semn de foame de aer extremă.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">〰️</span>
                <strong class="text-red-900 block mb-1">Resp. Abdominală</strong>
                <p class="text-xs text-red-800">Mișcă burta exagerat ca un balansoar. Oboseală diafragmatică.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <span class="text-3xl block mb-2">🗣️</span>
                <strong class="text-red-900 block mb-1">Vorbire Sacadată</strong>
                <p class="text-xs text-red-800">Trebuie să se oprească să tragă aer în mijlocul propoziției. Dispnee gravă.</p>
            </div>
        </div>

        <div class="bg-slate-800 text-white p-6 rounded-xl mt-6 shadow-lg">
            <p class="font-bold uppercase text-xs mb-2 tracking-widest text-red-400">🚨 Alertă Clinică de Siguranță</p>
            <p>Dacă vedeți aceste semne de efort, <strong>anunțați medicul imediat</strong>, chiar dacă pulsoximetrul arată 95%. Oxigenul poate fi bun pentru că pacientul face un efort titanic, dar într-o oră se va epuiza și va intra în stop respirator prin oboseală musculară. Anticipați.</p>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Evaluare Respiratorie</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video evaluare respiratorie" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Respirația</p>
                <p class="text-white/80 text-xs">Identificați semnele de efort respirator și tehnica corectă de numărare.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 4: TENSIÓN ARTERIAL
  // =================================================================================================
  "4. Tensión arterial: técnica correcta y valores": {
    titleES: "4. Tensión Arterial: Técnica, Manguitos y Errores Comunes",
    titleRO: "4. Tensiunea Arterială: Tehnică, Manșete și Erori Comune",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Esfingomanómetro",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">La medición automática (digital) es cómoda y es lo que usamos el 90% del tiempo en planta, pero el manguito (brazalete) es la fuente de error número uno en enfermería. Una tensión mal medida lleva al médico a pautar fármacos innecesarios (provocando hipotensión iatrogénica) o a dejar de tratar una hipertensión real.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">La Importancia Crítica del Tamaño del Manguito</h3>
        <p>No sirve la "talla única". El manguito debe cubrir aproximadamente 2/3 del brazo del paciente.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                <strong class="text-red-900 block mb-2">Error 1: Manguito Pequeño en Brazo Grueso (Obesos)</strong>
                <p class="text-sm text-red-800">Da tensiones <strong>FALSAMENTE ALTAS</strong>. El aparato tiene que apretar más de lo necesario para lograr colapsar la arteria a través de tanta grasa. 
                <br/><em>Consecuencia:</em> El paciente parecerá hipertenso sin serlo, se le dará medicación y se le provocará un mareo/caída. Use siempre el manguito "L" o de muslo si es necesario.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <strong class="text-blue-900 block mb-2">Error 2: Manguito Grande en Brazo Delgado (Ancianos)</strong>
                <p class="text-sm text-blue-800">Da tensiones <strong>FALSAMENTE BAJAS</strong>. La presión se disipa antes de llegar a la arteria. Use manguito pediátrico si es necesario.</p>
            </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
          <h4 class="font-bold text-blue-900 text-lg mb-2">Protocolo de Medición Correcta (Norma ISO)</h4>
          <p class="mb-2 text-sm text-blue-800">Para que el dato sea válido en la historia clínica, debe cumplir esto:</p>
          <ol class="list-decimal pl-5 mt-2 space-y-2 text-blue-900/80">
            <li><strong>Reposo previo:</strong> El paciente debe estar sentado y tranquilo al menos 5 minutos. Si viene caminando del baño y se la toma, saldrá alta.</li>
            <li><strong>Postura de los pies:</strong> Pies apoyados en el suelo. <strong>No cruzar las piernas</strong>. Cruzar las piernas eleva la tensión sistólica hasta 8-10 mmHg.</li>
            <li><strong>Brazo:</strong> Debe estar apoyado (en la mesa o cama) y a la altura del corazón. Si el brazo cuelga, la tensión sube.</li>
            <li><strong>Silencio:</strong> No hablar con el paciente durante la toma. Hablar sube la tensión.</li>
            <li><strong>Colocación:</strong> La marca de la "ARTERIA" del manguito debe estar alineada con la arteria braquial (cara interna del brazo), y el borde inferior del manguito debe estar 2-3 cm por encima del pliegue del codo (fosa antecubital).</li>
          </ol>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-6">Valores de Referencia (Adulto Sano)</h3>
        <div class="overflow-x-auto rounded-xl shadow-md border border-slate-200">
          <table class="w-full text-sm text-left border-collapse">
            <thead class="bg-slate-800 text-white">
              <tr><th class="p-3">Categoría</th><th class="p-3">Sistólica (Alta)</th><th class="p-3">Diastólica (Baja)</th></tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-100">
              <tr class="hover:bg-green-50"><td class="p-3 font-bold text-slate-700">Óptima</td><td class="p-3">&lt; 120</td><td class="p-3">&lt; 80</td></tr>
              <tr class="hover:bg-green-50"><td class="p-3 font-bold text-slate-700">Normal</td><td class="p-3">120-129</td><td class="p-3">80-84</td></tr>
              <tr class="hover:bg-yellow-50"><td class="p-3 font-bold text-yellow-700">Normal-Alta</td><td class="p-3">130-139</td><td class="p-3">85-89</td></tr>
              <tr class="hover:bg-orange-50"><td class="p-3 font-bold text-orange-600">HTA Grado 1 (Leve)</td><td class="p-3">140-159</td><td class="p-3">90-99</td></tr>
              <tr class="hover:bg-red-50"><td class="p-3 font-bold text-red-600">HTA Grado 2 (Moderada)</td><td class="p-3">160-179</td><td class="p-3">100-109</td></tr>
              <tr class="bg-red-100 hover:bg-red-200"><td class="p-3 font-bold text-red-900">Crisis HTA (Grave)</td><td class="p-3">> 180</td><td class="p-3">> 110</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 mt-2 italic">Basado en las guías europeas ESH/ESC de Hipertensión.</p>
        
        <div class="bg-white p-4 rounded-lg border-l-4 border-brand-primary shadow-sm mt-4">
            <strong class="text-brand-deep block mb-1">Nota sobre HTA en Ancianos:</strong>
            <p class="text-sm text-slate-600">Es común ver sistólicas altas (160) con diastólicas bajas (60). Esto se llama "Hipertensión Sistólica Aislada" y se debe a la rigidez de las arterias por la edad. No intente bajarla bruscamente.</p>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Técnica Correcta</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video técnica tensión arterial" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Signos Vitales: Tensión Arterial</p>
                <p class="text-white/80 text-xs">Colocación del manguito y errores a evitar.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Măsurarea automată (digitală) este comodă și o folosim în 90% din timp pe secție, dar manșeta (badernele) este sursa numărul unu de erori în asistență. O tensiune măsurată greșit duce medicul să prescrie medicamente inutile (provocând hipotensiune iatrogenă) sau să nu trateze o hipertensiune reală.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Importanța Critică a Mărimii Manșetei</h3>
        <p>Nu există "mărime universală". Manșeta trebuie să acopere aproximativ 2/3 din brațul pacientului.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-red-50 p-4 rounded-xl border border-red-100">
                <strong class="text-red-900 block mb-2">Eroare 1: Manșetă mică pe braț gros (Obezi)</strong>
                <p class="text-sm text-red-800">Dă tensiuni <strong>FALS CRESCUTE</strong>. Aparatul trebuie să strângă mai tare decât e necesar pentru a reuși să colabeze artera prin atâta grăsime. 
                <br/><em>Consecință:</em> Pacientul va părea hipertensiv fără să fie, i se va da medicație și i se va provoca o amețeală/cădere. Folosiți întotdeauna manșeta "L" sau de coapsă dacă este necesar.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <strong class="text-blue-900 block mb-2">Eroare 2: Manșetă mare pe braț subțire (Vârstnici)</strong>
                <p class="text-sm text-blue-800">Dă tensiuni <strong>FALS SCĂZUTE</strong>. Presiunea se disipează înainte de a ajunge la arteră. Folosiți manșeta pediatrică.</p>
            </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
          <h4 class="font-bold text-blue-900 text-lg mb-2">Protocol de Măsurare Corectă (Norma ISO)</h4>
          <p class="mb-2 text-sm text-blue-800">Pentru ca data să fie validă în foaia de observație, trebuie să respecte asta:</p>
          <ol class="list-decimal pl-5 mt-2 space-y-2 text-blue-900/80">
            <li><strong>Repaus prealabil:</strong> Pacientul trebuie să fie așezat și liniștit cel puțin 5 minute. Dacă vine mergând de la baie și i-o luați, va ieși mare.</li>
            <li><strong>Poziția picioarelor:</strong> Picioarele sprijinite pe sol. <strong>Nu încrucișați picioarele</strong>. Încrucișarea picioarelor crește tensiunea sistolică cu până la 8-10 mmHg.</li>
            <li><strong>Braț:</strong> Trebuie să fie sprijinit (pe masă sau pat) și la nivelul inimii. Dacă brațul atârnă, tensiunea crește.</li>
            <li><strong>Liniște:</strong> Nu vorbiți cu pacientul în timpul măsurării. Vorbitul crește tensiunea.</li>
            <li><strong>Plasare:</strong> Marcajul "ARTERA" de pe manșetă trebuie aliniat cu artera brahială (fața internă a brațului), iar marginea inferioară a manșetei trebuie să fie la 2-3 cm deasupra pliului cotului (fosa antecubitală).</li>
          </ol>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-6">Valori de Referință (Adult Sănătos)</h3>
        <div class="overflow-x-auto rounded-xl shadow-md border border-slate-200">
          <table class="w-full text-sm text-left border-collapse">
            <thead class="bg-slate-800 text-white">
              <tr><th class="p-3">Categorie</th><th class="p-3">Sistolică (Mare)</th><th class="p-3">Diastolică (Mică)</th></tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-100">
              <tr class="hover:bg-green-50"><td class="p-3 font-bold text-slate-700">Optimă</td><td class="p-3">&lt; 120</td><td class="p-3">&lt; 80</td></tr>
              <tr class="hover:bg-green-50"><td class="p-3 font-bold text-slate-700">Normală</td><td class="p-3">120-129</td><td class="p-3">80-84</td></tr>
              <tr class="hover:bg-yellow-50"><td class="p-3 font-bold text-yellow-700">Normal-Înaltă</td><td class="p-3">130-139</td><td class="p-3">85-89</td></tr>
              <tr class="hover:bg-orange-50"><td class="p-3 font-bold text-orange-600">HTA Grad 1 (Ușoară)</td><td class="p-3">140-159</td><td class="p-3">90-99</td></tr>
              <tr class="hover:bg-red-50"><td class="p-3 font-bold text-red-600">HTA Grad 2 (Moderată)</td><td class="p-3">160-179</td><td class="p-3">100-109</td></tr>
              <tr class="bg-red-100 hover:bg-red-200"><td class="p-3 font-bold text-red-900">Criză HTA (Gravă)</td><td class="p-3">> 180</td><td class="p-3">> 110</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 mt-2 italic">Bazat pe ghidurile europene ESH/ESC pentru Hipertensiune.</p>
        
        <div class="bg-white p-4 rounded-lg border-l-4 border-brand-primary shadow-sm mt-4">
            <strong class="text-brand-deep block mb-1">Notă despre HTA la Vârstnici:</strong>
            <p class="text-sm text-slate-600">Este comun să vedeți sistolice mari (160) cu diastolice mici (60). Aceasta se numește "Hipertensiune Sistolică Izolată" și se datorează rigidității arterelor din cauza vârstei. Nu încercați să o scădeți brusc.</p>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Tehnica Corectă</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video tehnică tensiune" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Tensiunea Arterială</p>
                <p class="text-white/80 text-xs">Plasarea manșetei și erori de evitat.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 5: SATURACIÓN DE OXÍGENO
  // =================================================================================================
  "5. Saturación de oxígeno: uso del pulsioxímetro": {
    titleES: "5. Saturación de Oxígeno (SpO2): El 5º Signo Vital y sus Trampas",
    titleRO: "5. Saturația de Oxigen (SpO2): Al 5-lea Semn Vital și Capcanele sale",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Pulsioximetría",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">El pulsioxímetro mide de forma no invasiva qué porcentaje de hemoglobina en la sangre está "cargada" (saturada) de oxígeno. Ha revolucionado la enfermería porque nos avisa de la hipoxia (falta de oxígeno) mucho antes de que el paciente se ponga cianótico (azul) o pierda el conocimiento.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Interpretación Rápida de Valores</h3>
        <div class="space-y-3">
            <div class="bg-green-100 p-4 rounded-xl border-l-4 border-green-500">
                <span class="font-black text-green-900 text-lg">> 95%</span>: <strong>Normal</strong>. El paciente oxigena adecuadamente. En pacientes ancianos, 94-95% puede ser aceptable.
            </div>
            <div class="bg-yellow-100 p-4 rounded-xl border-l-4 border-yellow-500">
                <span class="font-black text-yellow-900 text-lg">90 - 94%</span>: <strong>Hipoxia Leve/Moderada (Desaturación)</strong>. 
                <br/>Requiere vigilancia activa. 
                <br/><strong>Acción:</strong> Incorpore al paciente (posición Fowler o sentado), pídale que tosa para movilizar secreciones y respire profundo. Si no sube en 5 minutos, suele requerir oxigenoterapia (gafas nasales a 2-3 litros).
            </div>
            <div class="bg-red-100 p-4 rounded-xl border-l-4 border-red-500">
                <span class="font-black text-red-900 text-lg">< 90%</span>: <strong>Insuficiencia Respiratoria</strong>. 
                <br/>Esto es una urgencia médica. El cerebro y el corazón empiezan a sufrir. 
                <br/><strong>Acción:</strong> Avise al médico inmediatamente y prepare oxígeno a alto flujo (mascarilla Venturi al 50% o Reservorio).
            </div>
            <div class="bg-slate-200 p-4 rounded-xl border-l-4 border-slate-500">
                <span class="font-black text-slate-900 text-lg">88 - 92% (Excepción EPOC)</span>: 
                <br/><strong>¡OJO!</strong> En pacientes retenedores de carbónico (EPOC crónico, fumadores severos), su saturación "normal" basal es 90%. Si les ponemos oxígeno para subirles a 98%, podemos pararles la respiración (narcosis por CO2). En ellos, 90% es un éxito.
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Errores Frecuentes: ¿Por qué marca mal?</h3>
        <p>A veces el aparato marca 85% y pita como loco, pero el paciente está hablando tranquilamente y tiene buen color. Antes de correr, compruebe las causas de error:</p>
        
        <ul class="list-disc pl-5 space-y-4">
            <li>
                <strong>Manos frías (Mala perfusión):</strong> Si la mano está helada (vasoconstricción), no llega sangre al dedo y el aparato no lee bien. 
                <br/><em>Solución:</em> Frote las manos del paciente para calentarlas o coloque el sensor en el lóbulo de la oreja.
            </li>
            <li>
                <strong>Esmalte de uñas / Uñas permanentes:</strong> Los colores oscuros (rojo, negro, azul) y las capas gruesas de gel bloquean la luz del sensor. 
                <br/><em>Solución:</em> Gire el pulsioxímetro 90 grados ("muerda" el dedo de lado) para que la luz atraviese el dedo de lado a lado sin tener que pasar por la uña pintada.
            </li>
            <li>
                <strong>Luz ambiental intensa:</strong> Si da el sol directo por la ventana o hay un foco potente de quirófano sobre la mano, la luz externa interfiere con el sensor. 
                <br/><em>Solución:</em> Cubra la mano del paciente con la sábana mientras mide.
            </li>
            <li>
                <strong>Movimiento (Temblores):</strong> Si el paciente tiembla (Parkinson, frío, fiebre alta con escalofríos), la lectura será errática e imposible.
                <br/><em>Solución:</em> Intente fijar la mano o buscar un momento de calma.
            </li>
        </ul>
        
        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
            <h4 class="font-bold text-blue-900 text-lg mb-2">La Curva Pletismográfica: El "Detector de Mentiras"</h4>
            <p class="text-sm text-blue-800">Mire la pantalla del pulsioxímetro. Además del número, suele haber una "onda" o una barrita que sube y baja con el latido. 
            <br/>Si esa onda es rítmica y bonita, el número es real. 
            <br/>Si la onda es un garabato caótico o una línea plana, el número (aunque diga 99% o 80%) es <strong>FALSO</strong>.</p>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Procedimiento</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video pulsioximetría" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Signos Vitales: Saturación</p>
                <p class="text-white/80 text-xs">Uso correcto del pulsioxímetro.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Pulsoximetrul măsoară în mod neinvaziv ce procent din hemoglobină din sânge este "încărcat" (saturat) cu oxigen. A revoluționat asistența medicală deoarece ne avertizează asupra hipoxiei (lipsa de oxigen) mult înainte ca pacientul să devină cianotic (vânăt) sau să își piardă cunoștința.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Interpretarea Rapidă a Valorilor</h3>
        <div class="space-y-3">
            <div class="bg-green-100 p-4 rounded-xl border-l-4 border-green-500">
                <span class="font-black text-green-900 text-lg">> 95%</span>: <strong>Normal</strong>. Pacientul se oxigenează adecvat. La pacienții vârstnici, 94-95% poate fi acceptabil.
            </div>
            <div class="bg-yellow-100 p-4 rounded-xl border-l-4 border-yellow-500">
                <span class="font-black text-yellow-900 text-lg">90 - 94%</span>: <strong>Hipoxie Ușoară/Moderată (Desaturare)</strong>. 
                <br/>Necesită supraveghere activă. 
                <br/><strong>Acțiune:</strong> Ridicați pacientul (poziție Fowler sau șezând), cereți-i să tușească pentru a mobiliza secrețiile și să respire adânc. Dacă nu crește în 5 minute, necesită de obicei oxigenoterapie (ochelari nazali la 2-3 litri).
            </div>
            <div class="bg-red-100 p-4 rounded-xl border-l-4 border-red-500">
                <span class="font-black text-red-900 text-lg">< 90%</span>: <strong>Insuficiență Respiratorie</strong>. 
                <br/>Aceasta este o urgență medicală. Creierul și inima încep să sufere. 
                <br/><strong>Acțiune:</strong> Anunțați medicul imediat și pregătiți oxigen la debit mare (mască Venturi 50% sau Rezervor).
            </div>
            <div class="bg-slate-200 p-4 rounded-xl border-l-4 border-slate-500">
                <span class="font-black text-slate-900 text-lg">88 - 92% (Excepție BPOC)</span>: 
                <br/><strong>ATENȚIE!</strong> La pacienții care rețin dioxid de carbon (BPOC cronic, fumători severi), saturația lor "normală" de bază este 90%. Dacă le punem oxigen ca să urce la 98%, le putem opri respirația (narcoză prin CO2). La ei, 90% este un succes.
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Erori Frecvente: De ce arată greșit?</h3>
        <p>Uneori aparatul arată 85% și țiuie ca nebunul, dar pacientul vorbește liniștit și are o culoare bună. Înainte de a alerga, verificați cauzele erorii:</p>
        <ul class="list-disc pl-5 space-y-4">
            <li>
                <strong>Mâini reci (Perfuzie proastă):</strong> Dacă mâna este înghețată (vasoconstricție), sângele nu ajunge la deget și aparatul nu citește bine. 
                <br/><em>Soluție:</em> Frecați mâinile pacientului pentru a le încălzi sau plasați senzorul pe lobul urechii.
            </li>
            <li>
                <strong>Ojă de unghii / Unghii permanente:</strong> Culorile închise (roșu, negru, albastru) și straturile groase de gel blochează lumina senzorului. 
                <br/><em>Soluție:</em> Rotiți pulsoximetrul la 90 de grade ("mușcați" degetul din lateral) pentru ca lumina să treacă prin deget dintr-o parte în alta fără a trece prin unghia vopsită.
            </li>
            <li>
                <strong>Lumină ambientală intensă:</strong> Dacă bate soarele direct prin fereastră sau există un reflector puternic de operație pe mână, lumina externă interferează cu senzorul. 
                <br/><em>Soluție:</em> Acoperiți mâna pacientului cu cearșaful în timp ce măsurați.
            </li>
            <li>
                <strong>Mișcare (Tremurături):</strong> Dacă pacientul tremură (Parkinson, frig, febră mare cu frisoane), citirea va fi eronată și imposibilă.
                <br/><em>Soluție:</em> Încercați să fixați mâna sau căutați un moment de calm.
            </li>
        </ul>
        
        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
            <h4 class="font-bold text-blue-900 text-lg mb-2">Curba Pletismografică: "Detectorul de Minciuni"</h4>
            <p class="text-sm text-blue-800">Priviți ecranul pulsoximetrului. Pe lângă număr, de obicei există un "val" sau o bară care urcă și coboară odată cu bătaia inimii. 
            <br/>Dacă acel val este ritmic și frumos, numărul este real. 
            <br/>Dacă valul este o mâzgălitură haotică sau o linie plată, numărul (chiar dacă zice 99% sau 80%) este <strong>FALS</strong>.</p>
        </div>

        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Procedură</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video pulsoximetrie" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Semne Vitale: Saturația</p>
                <p class="text-white/80 text-xs">Utilizarea corectă a pulsoximetrului.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 6: ESCALAS CLÍNICAS
  // =================================================================================================
  "6. Escalas clínicas básicas: Glasgow, EVA, Barthel": {
    titleES: "6. Escalas Clínicas: El idioma universal de la objetividad",
    titleRO: "6. Scale Clinice: Limbajul universal al obiectivității",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Valoración Neurológica",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">En la enfermería moderna, está prohibido usar términos subjetivos en el registro legal. No escribimos "el paciente está tontorrón" o "le duele bastante". Esos términos no significan nada para el juez ni para el médico del siguiente turno. Usamos <strong>escalas validadas</strong> para transformar sensaciones en números objetivos.</p>
        </div>

        {/* 1. GLASGOW */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">1. Escala de Glasgow (GCS) - Neurología</h3>
        <p>Es la herramienta estándar mundial para medir el nivel de consciencia. Se diseñó para traumatismos, pero hoy se usa para todo (Ictus, sedación, infecciones). Evalúa tres respuestas y suma una puntuación de <strong>3 a 15</strong>.</p>
        
        <div class="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 shadow-sm mt-4">
            <h4 class="font-bold text-indigo-900 text-lg mb-2">Interpretación para la Acción</h4>
            <ul class="list-disc pl-5 space-y-3 text-indigo-900">
                <li><strong>15 puntos:</strong> Paciente despierto, orientado, conversa y obedece órdenes. (Estado Normal).</li>
                <li><strong>12-14 puntos:</strong> Deterioro leve (está confuso o somnoliento). <strong>Acción:</strong> Requiere vigilancia neurológica cada hora.</li>
                <li><strong>9-11 puntos:</strong> Deterioro moderado. Riesgo alto de broncoaspiración.</li>
                <li><strong>≤ 8 puntos:</strong> <span class="bg-red-600 text-white px-2 py-0.5 rounded font-bold text-xs uppercase">COMA</span> <strong>Regla de oro en urgencias:</strong> <em>"Glasgow de 8, intubo y aprovecho"</em>. Un paciente con 8 puntos ha perdido los reflejos de protección de la vía aérea (la lengua cae hacia atrás, no tose). Requiere intubación inmediata y traslado a UCI.</li>
                <li><strong>3 puntos:</strong> Arreactivo total o muerte cerebral. (Es el mínimo, nadie tiene 0 puntos).</li>
            </ul>
        </div>

        {/* 2. EVA */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">2. Escala EVA - Dolor</h3>
        <p><strong>E</strong>scala <strong>V</strong>isual <strong>A</strong>nalógica. El dolor es el "Quinto Signo Vital". Recuerde: El dolor es <strong>lo que el paciente dice que es</strong>, no lo que usted cree que debería ser.</p>
        
        <div class="bg-slate-100 p-5 rounded-xl border-l-4 border-slate-400 my-4">
            <p class="font-bold text-slate-800 mb-2">La Pregunta Correcta:</p>
            <p class="italic text-slate-600">"Don José, del 0 al 10, donde 0 es 'no me duele nada' y 10 es 'el peor dolor imaginable que me haga desmayarme', ¿cuánto le duele ahora mismo?"</p>
        </div>
        
        <p class="mt-4 font-bold text-brand-deep">¿Y si el paciente no puede hablar (Demencia/Afasia)?</p>
        <p>Use la escala <strong>PAINAD</strong> o la observación clínica. Busque signos indirectos:</p>
        <ul class="list-disc pl-5 space-y-1 text-slate-700">
             <li>¿Tiene el ceño fruncido o la mandíbula apretada?</li>
             <li>¿Está tenso, rígido o con los puños cerrados?</li>
             <li>¿Grita, gime o se resiste cuando usted le moviliza para el aseo?</li>
             <li>¿Tiene taquicardia (pulso rápido) o hipertensión sin otra causa aparente?</li>
        </ul>

        {/* 3. BARTHEL */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">3. Escala Barthel - Dependencia</h3>
        <p>Mide la capacidad del paciente para realizar las Actividades de la Vida Diaria (AVD) como comer, lavarse, vestirse o ir al baño. Es fundamental realizarla al ingreso y al alta.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                <strong class="block text-xl text-green-700 mb-1">100</strong>
                <span class="text-xs uppercase font-bold text-green-800">Independiente</span>
                <p class="text-xs text-slate-600 mt-1">Lo hace todo solo.</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-xl text-center border border-yellow-200">
                <strong class="block text-xl text-yellow-700 mb-1">60 - 90</strong>
                <span class="text-xs uppercase font-bold text-yellow-800">Dependencia Leve/Mod</span>
                <p class="text-xs text-slate-600 mt-1">Necesita ayuda puntual.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-200">
                <strong class="block text-xl text-red-700 mb-1">&lt; 20</strong>
                <span class="text-xs uppercase font-bold text-red-800">Dependencia Total</span>
                <p class="text-xs text-slate-600 mt-1">Encamado, pañal, alimentación asistida.</p>
            </div>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Valoración Neurológica</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video escala glasgow" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Escala de Coma de Glasgow</p>
                <p class="text-white/80 text-xs">Aprenda a puntuar la respuesta ocular, verbal y motora.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">În asistența medicală modernă, este interzisă folosirea termenilor subiectivi în registrul legal. Nu scriem "pacientul este cam moleșit" sau "îl doare destul de tare". Acești termeni nu înseamnă nimic pentru judecător sau pentru medicul din tura următoare. Folosim <strong>scale validate</strong> pentru a transforma senzațiile în numere obiective.</p>
        </div>

        {/* 1. GLASGOW */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">1. Scala Glasgow (GCS) - Neurologie</h3>
        <p>Este instrumentul standard mondial pentru măsurarea nivelului de conștiență. A fost creat pentru traumatisme, dar azi se folosește pentru orice (AVC, sedare, infecții). Evaluează trei răspunsuri și însumează un scor de la <strong>3 la 15</strong>.</p>
        
        <div class="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 shadow-sm mt-4">
            <h4 class="font-bold text-indigo-900 text-lg mb-2">Interpretare pentru Acțiune</h4>
            <ul class="list-disc pl-5 space-y-3 text-indigo-900">
                <li><strong>15 puncte:</strong> Pacient treaz, orientat, conversează și ascultă comenzile. (Stare Normală).</li>
                <li><strong>12-14 puncte:</strong> Deteriorare ușoară (este confuz sau somnolent). <strong>Acțiune:</strong> Necesită supraveghere neurologică la fiecare oră.</li>
                <li><strong>9-11 puncte:</strong> Deteriorare moderată. Risc crescut de bronhoaspirație.</li>
                <li><strong>≤ 8 puncte:</strong> <span class="bg-red-600 text-white px-2 py-0.5 rounded font-bold text-xs uppercase">COMĂ</span> <strong>Regula de aur în urgențe:</strong> <em>"Glasgow 8, intubez și profit"</em>. Un pacient cu 8 puncte și-a pierdut reflexele de protecție a căilor aeriene (limba cade în spate, nu tușește). Necesită intubare imediată și transfer la ATI.</li>
                <li><strong>3 puncte:</strong> Total areactiv sau moarte cerebrală. (Este minimul, nimeni nu are 0 puncte).</li>
            </ul>
        </div>

        {/* 2. EVA */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">2. Scala EVA - Durere</h3>
        <p><strong>E</strong>scala <strong>V</strong>izuală <strong>A</strong>nalogică. Durerea este "Al Cincilea Semn Vital". Rețineți: Durerea este <strong>ceea ce pacientul spune că este</strong>, nu ceea ce credeți dumneavoastră că ar trebui să fie.</p>
        
        <div class="bg-slate-100 p-5 rounded-xl border-l-4 border-slate-400 my-4">
            <p class="font-bold text-slate-800 mb-2">Întrebarea Corectă:</p>
            <p class="italic text-slate-600">"Domnule Popescu, de la 0 la 10, unde 0 înseamnă 'nu mă doare deloc' și 10 este 'cea mai mare durere imaginabilă care să mă facă să leșin', cât vă doare chiar acum?"</p>
        </div>
        
        <p class="mt-4 font-bold text-brand-deep">Și dacă pacientul nu poate vorbi (Demență/Afazie)?</p>
        <p>Folosiți scala <strong>PAINAD</strong> sau observația clinică. Căutați semne indirecte:</p>
        <ul class="list-disc pl-5 space-y-1 text-slate-700">
             <li>Are fruntea încruntată sau maxilarul încleștat?</li>
             <li>Este tensionat, rigid sau are pumnii strânși?</li>
             <li>Țipă, geme sau se opune când îl mobilizați pentru igienă?</li>
             <li>Are tahicardie (puls rapid) sau hipertensiune fără altă cauză aparentă?</li>
        </ul>

        {/* 3. BARTHEL */}
        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">3. Scala Barthel - Dependență</h3>
        <p>Măsoară capacitatea pacientului de a efectua Activitățile Vieții Zilnice (AVD) precum mâncatul, spălatul, îmbrăcatul sau mersul la toaletă. Este fundamentală la internare și externare pentru a solicita resurse sociale (cămin, ajutor la domiciliu).</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                <strong class="block text-xl text-green-700 mb-1">100</strong>
                <span class="text-xs uppercase font-bold text-green-800">Independent</span>
                <p class="text-xs text-slate-600 mt-1">Face totul singur.</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-xl text-center border border-yellow-200">
                <strong class="block text-xl text-yellow-700 mb-1">60 - 90</strong>
                <span class="text-xs uppercase font-bold text-yellow-800">Dependență Ușoară/Medie</span>
                <p class="text-xs text-slate-600 mt-1">Ajutor ocazional.</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl text-center border border-red-200">
                <strong class="block text-xl text-red-700 mb-1">&lt; 20</strong>
                <span class="text-xs uppercase font-bold text-red-800">Dependență Totală</span>
                <p class="text-xs text-slate-600 mt-1">La pat, scutec, hrănire asistată.</p>
            </div>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Evaluare Neurologică</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video scala glasgow" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Scala de Comă Glasgow</p>
                <p class="text-white/80 text-xs">Învățați să punctați răspunsul ocular, verbal și motor.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 7: DETERIORO CLÍNICO
  // =================================================================================================
  "7. Reconocimiento rápido de signos de deterioro clínico": {
    titleES: "7. El \"Ojo Clínico\": Detectar la gravedad antes que el monitor",
    titleRO: "7. \"Privirea Clinică\": Detectarea gravității înaintea monitorului",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Vigilancia Intensiva",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Los pacientes rara vez se ponen graves "de repente". Casi siempre dan señales sutiles horas antes del paro cardiaco (fase pre-parada). Como enfermera, su habilidad más valiosa no es manejar la máquina, sino su <strong>instinto entrenado</strong> para detectar esa "mala pinta" o <strong>"apariencia de enfermedad aguda"</strong>.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">El Triángulo de Evaluación Rápida (30 segundos)</h3>
        <p>Es una técnica que se debe aplicar nada más cruzar la puerta de la habitación, sin tocar al paciente, solo mirando y escuchando. Evalúa tres lados:</p>
        
        <div class="space-y-4">
            <div class="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-purple-500 shadow-sm">
                <div class="text-3xl">🧠</div>
                <div>
                    <strong class="text-purple-900 block">1. Apariencia (Cerebro)</strong>
                    <p class="text-sm text-slate-600">El cerebro es el órgano más sensible a la falta de oxígeno.
                    <br/><em>Pregúntese:</em> ¿Me sigue con la mirada al entrar? ¿Está conectado con el entorno o tiene la mirada "vidriosa" y perdida? ¿Está combativo y se arranca cosas (signo de hipoxia cerebral) o está demasiado tranquilo y dormido (signo de retención de CO2)?</p>
                </div>
            </div>

            <div class="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                <div class="text-3xl">🫁</div>
                <div>
                    <strong class="text-blue-900 block">2. Respiración (Trabajo)</strong>
                    <p class="text-sm text-slate-600">No cuente la frecuencia, mire el esfuerzo.
                    <br/><em>Pregúntese:</em> ¿Se le oye respirar desde la puerta (estridor, ronquido)? ¿Está en postura de trípode (sentado inclinado hacia adelante apoyando las manos) para poder coger aire? Esa postura es signo inminente de claudicación respiratoria.</p>
                </div>
            </div>

            <div class="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                <div class="text-3xl">❤️</div>
                <div>
                    <strong class="text-red-900 block">3. Circulación (Piel)</strong>
                    <p class="text-sm text-slate-600">La piel es la ventana del sistema cardiovascular. Si el cuerpo entra en shock, "cierra" la piel para mandar sangre al corazón.
                    <br/><em>Pregúntese:</em> ¿Está pálido como un papel? ¿Tiene un color grisáceo/ceniza (muy mal signo)? ¿Tiene la piel <strong>moteada</strong> (manchas violáceas irregulares como mármol, sobre todo en rodillas)? La piel moteada es un signo específico de <strong>shock séptico</strong>.</p>
                </div>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Score NEWS2 (National Early Warning Score)</h3>
        <p>Es el estándar europeo moderno para objetivar la gravedad y hablar el mismo idioma con los médicos. Asigna puntos (0, 1, 2, 3) a cada constante vital desviada.</p>
        
        <div class="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600 mt-4 shadow-sm">
            <h4 class="font-bold text-red-900 text-lg mb-2">🚨 La Regla del 5</h4>
            <p class="text-red-800">
                Si al sumar los puntos de todas las constantes (Tensión, FC, FR, SatO2, Temp, Conciencia) el paciente suma <strong>5 puntos o más</strong>, debe <strong>avisar al médico inmediatamente</strong>. 
            </p>
            <p class="text-red-800 text-sm mt-2">
                Estadísticamente, ese paciente tiene un riesgo muy alto de acabar en la UCI o fallecer en las próximas 24 horas si no se interviene ya, aunque ahora mismo parezca "estable".
            </p>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Detección de Sepsis</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video detección deterioro" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">El Paciente Inestable</p>
                <p class="text-white/80 text-xs">Signos sutiles que anuncian una parada cardiaca.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Pacienții rareori se agravează "brusc". Aproape întotdeauna dau semne subtile cu ore înainte de stopul cardiac (faza pre-stop). Ca asistentă, cea mai valoroasă abilitate a dumneavoastră nu este manevrarea mașinilor, ci <strong>instinctul antrenat</strong> pentru a detecta acea "înfățișare rea" sau <strong>"aspect de boală acută"</strong>.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Triunghiul de Evaluare Rapidă (30 secunde)</h3>
        <p>Este o tehnică ce trebuie aplicată imediat ce treceți pragul salonului, fără a atinge pacientul, doar privind și ascultând. Evaluează trei laturi:</p>
        
        <div class="space-y-4">
            <div class="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-purple-500 shadow-sm">
                <div class="text-3xl">🧠</div>
                <div>
                    <strong class="text-purple-900 block">1. Aspect (Creier)</strong>
                    <p class="text-sm text-slate-600">Creierul este organul cel mai sensibil la lipsa de oxigen.
                    <br/><em>Întrebați-vă:</em> Mă urmărește cu privirea când intru? Este conectat cu mediul sau are privirea "sticloasă" și pierdută? Este combativ și își smulge lucruri (semn de hipoxie cerebrală) sau este prea liniștit și adormit (semn de retenție de CO2)?</p>
                </div>
            </div>

            <div class="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                <div class="text-3xl">🫁</div>
                <div>
                    <strong class="text-blue-900 block">2. Respirație (Efort)</strong>
                    <p class="text-sm text-slate-600">Nu numărați frecvența, priviți efortul.
                    <br/><em>Întrebați-vă:</em> Se aude respirând de la ușă (stridor, sforăit)? Stă în poziție de trepied (așezat aplecat în față sprijinindu-se în mâini) pentru a putea trage aer? Acea poziție este semn iminent de claudicație respiratorie.</p>
                </div>
            </div>

            <div class="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                <div class="text-3xl">❤️</div>
                <div>
                    <strong class="text-red-900 block">3. Circulație (Piele)</strong>
                    <p class="text-sm text-slate-600">Pielea este fereastra sistemului cardiovascular. Dacă corpul intră în șoc, "închide" pielea pentru a trimite sânge la inimă.
                    <br/><em>Întrebați-vă:</em> Este palid ca o foaie de hârtie? Are o culoare cenușie/gri (semn foarte rău)? Are pielea <strong>marmorată</strong> (pete violacee neregulate ca marmura, mai ales pe genunchi)? Pielea marmorată este un semn specific de <strong>șoc septic</strong>.</p>
                </div>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Scorul NEWS2 (National Early Warning Score)</h3>
        <p>Este standardul european modern pentru a obiectiva gravitatea și a vorbi aceeași limbă cu medicii. Atribuie puncte (0, 1, 2, 3) fiecărei constante vitale deviate.</p>
        
        <div class="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600 mt-4 shadow-sm">
            <h4 class="font-bold text-red-900 text-lg mb-2">🚨 Regula de 5</h4>
            <p class="text-red-800">
                Dacă la adunarea punctelor tuturor constantelor (Tensiune, Puls, Respirație, SatO2, Temp, Conștiență) pacientul acumulează <strong>5 puncte sau mai mult</strong>, trebuie să <strong>anunțați medicul imediat</strong>.
            </p>
            <p class="text-red-800 text-sm mt-2">
                Statistic, acel pacient are un risc foarte mare de a ajunge la ATI sau de a deceda în următoarele 24 de ore dacă nu se intervine acum, chiar dacă în acest moment pare "stabil".
            </p>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Detectarea Sepsisului</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video detectare deteriorare" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Pacientul Instabil</p>
                <p class="text-white/80 text-xs">Semne subtile care anunță un stop cardiac.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 8: EXPLORACIÓN FÍSICA
  // =================================================================================================
  "8. Exploración física básica: lo que mira una enfermera al llegar a la habitación": {
    titleES: "8. Exploración Física: El escaneo sistemático al inicio del turno",
    titleRO: "8. Examinare Fizică: Scanarea sistematică la începutul turei",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Valoración a pie de cama",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Al recibir el relevo y entrar por primera vez en la habitación de sus pacientes, no necesita hacer un examen médico profundo (eso es tarea del doctor), necesita hacer un <strong>chequeo de seguridad y estado general</strong>. Hágalo siempre en el mismo orden ("De Cabeza a Pies") para no olvidar nada. Esto le llevará solo 2 minutos por paciente.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Protocolo "Cabeza a Pies"</h3>
        
        <div class="space-y-4">
            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">1</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Cabeza y Neurología</h4>
                    <p class="text-sm mt-1 text-slate-600">Salude al paciente por su nombre.
                    <br/><strong>¿Responde bien?</strong> (Nivel de conciencia).
                    <br/><strong>¿Sabe dónde está y qué día es?</strong> (Orientación).
                    <br/><strong>¿Tiene la cara simétrica?</strong> Pídale que sonría. Si un lado de la boca cuelga, puede ser un Ictus nuevo.
                    <br/><strong>Cuello:</strong> Mire las venas yugulares. Si están muy hinchadas (ingurgitadas) estando el paciente sentado, indica insuficiencia cardiaca derecha.</p>
                </div>
            </div>

            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">2</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Tórax y Dispositivos</h4>
                    <p class="text-sm mt-1 text-slate-600"><strong>Oxígeno:</strong> ¿Lleva gafas nasales? ¿Están bien puestas o se le han caído al cuello? Verifique que el caudalímetro está a los litros pautados.
                    <br/><strong>Vía Venosa:</strong> Mire el brazo. ¿El apósito de la vía está limpio y seco? Toque la zona: ¿está dura, caliente o roja (flebitis)? ¿Duele?
                    <br/><strong>Respiración:</strong> ¿Se oyen "pitos" o ruidos de secreciones (moco) sin necesidad de fonendoscopio?</p>
                </div>
            </div>

            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">3</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Abdomen y Eliminación</h4>
                    <p class="text-sm mt-1 text-slate-600"><strong>Dolor:</strong> Pregunte "¿Le duele la tripa?". Toque suavemente la barriga: debe estar blanda, no dura como una tabla (vientre en tabla = peritonitis).
                    <br/><strong>Sonda Vesical:</strong> Si lleva sonda, mire la bolsa. ¿De qué color es la orina? (Amarilla clara, oscura como coñac, o con sangre). ¿Hay cantidad suficiente o está vacía desde hace horas?
                    <br/><strong>Intestino:</strong> Pregunte cuándo hizo de vientre la última vez (el estreñimiento severo en ancianos provoca confusión).</p>
                </div>
            </div>

            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">4</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Piel y Extremidades</h4>
                    <p class="text-sm mt-1 text-slate-600">Levante la sábana de los pies un momento.
                    <br/><strong>Talones:</strong> ¿Tienen rojeces? (Inicio de úlcera por presión). Si es así, ponga cojines ya.
                    <br/><strong>Edemas:</strong> ¿Tiene los tobillos hinchados? Apriete con el dedo en la espinilla; si se queda la marca (fóvea), está reteniendo líquidos.
                    <br/><strong>Temperatura:</strong> Toque los pies. ¿Están calientes o helados? (Mala circulación).</p>
                </div>
            </div>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Exploración Física</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video exploración física" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Valoración de Enfermería</p>
                <p class="text-white/80 text-xs">Cómo realizar un examen físico rápido y eficaz.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        <p class="text-lg">Când primiți tura și intrați pentru prima dată în salonul pacienților, nu trebuie să faceți un examen medical aprofundat (asta e treaba doctorului), trebuie să faceți o <strong>verificare de siguranță și a stării generale</strong>. Faceți-o întotdeauna în aceeași ordine ("Din Cap până în Picioare") pentru a nu uita nimic. Asta vă va lua doar 2 minute per pacient.</p>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Protocolul "Din Cap până în Picioare"</h3>
        
        <div class="space-y-4">
            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">1</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Cap și Neurologie</h4>
                    <p class="text-sm mt-1 text-slate-600">Salutați pacientul pe nume.
                    <br/><strong>Răspunde bine?</strong> (Nivel de conștiență).
                    <br/><strong>Știe unde este și ce zi e?</strong> (Orientare).
                    <br/><strong>Are fața simetrică?</strong> Rugați-l să zâmbească. Dacă o parte a gurii atârnă, poate fi un AVC nou.
                    <br/><strong>Gât:</strong> Priviți venele jugulare. Dacă sunt foarte umflate (turgescente) stând pacientul în șezut, indică insuficiență cardiacă dreaptă.</p>
                </div>
            </div>

            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">2</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Torace și Dispozitive</h4>
                    <p class="text-sm mt-1 text-slate-600"><strong>Oxigen:</strong> Poartă ochelari nazali? Sunt puși bine sau i-au căzut la gât? Verificați dacă debitmetrul este la litrii prescriși.
                    <br/><strong>Cale Venoasă:</strong> Priviți brațul. Pansamentul branulei este curat și uscat? Atingeți zona: este tare, fierbinte sau roșie (flebită)? Doare?
                    <br/><strong>Respirație:</strong> Se aud "șuierături" sau zgomote de secreții (mucus) fără a folosi stetoscopul?</p>
                </div>
            </div>

            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">3</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Abdomen și Eliminare</h4>
                    <p class="text-sm mt-1 text-slate-600"><strong>Durere:</strong> Întrebați "Vă doare burta?". Atingeți ușor abdomenul: trebuie să fie moale, nu tare ca o scândură (abdomen de lemn = peritonită).
                    <br/><strong>Sondă Urinară:</strong> Dacă are sondă, priviți punga. Ce culoare are urina? (Galben clar, închisă ca coniacul sau cu sânge). Este cantitate suficientă sau e goală de ore întregi?
                    <br/><strong>Intestin:</strong> Întrebați când a avut scaun ultima dată (constipația severă la vârstnici provoacă confuzie).</p>
                </div>
            </div>

            <div class="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:border-brand-primary transition-colors">
                <div class="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-lg">4</div>
                <div>
                    <h4 class="font-bold text-brand-deep text-lg">Piele și Extremități</h4>
                    <p class="text-sm mt-1 text-slate-600">Ridicați cearșaful de la picioare un moment.
                    <br/><strong>Călcâie:</strong> Au roșeață? (Început de ulcer de presiune). Dacă da, puneți perne imediat.
                    <br/><strong>Edeme:</strong> Are gleznele umflate? Apăsați cu degetul pe tibie; dacă rămâne urma (fovea), reține lichide.
                    <br/><strong>Temperatură:</strong> Atingeți picioarele. Sunt calde sau înghețate? (Circulație proastă).</p>
                </div>
            </div>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Examinare Fizică</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video examinare fizică" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Evaluarea Asistentei</p>
                <p class="text-white/80 text-xs">Cum să realizezi un examen fizic rapid și eficient.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

// =================================================================================================
  // TEMA 9: COMUNICACIÓN EFECTIVA
  // =================================================================================================
  "9. Comunicación efectiva con el paciente: lenguaje claro, términos comunes": {
    titleES: "9. Comunicación: Su herramienta terapéutica más potente",
    titleRO: "9. Comunicarea: Cel mai puternic instrument terapeutic al dumneavoastră",
    image: "https://images.unsplash.com/photo-1516574187841-69301976e499?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Humanización Cuidados",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Después de 20 años, la tecnología ha cambiado radicalmente (ordenadores, bombas digitales), pero el miedo, la vulnerabilidad y la soledad del paciente hospitalizado son exactamente los mismos. Usted es su traductor, su defensor y su ancla de seguridad en un entorno hostil. Una palabra suya puede calmar más que un Valium.</p>
        </div>

        <div class="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm mt-6">
            <h4 class="font-bold text-teal-900 text-lg mb-4 flex items-center gap-2">
                <span class="text-2xl">🗣️</span> Reglas de Oro en la Habitación (Protocolo AIDET)
            </h4>
            <div class="space-y-4">
                <div class="border-b border-teal-100 pb-3">
                    <p class="font-bold text-xs uppercase text-teal-700 mb-1 tracking-widest">1. PRESENTACIÓN (VITAL)</p>
                    <p class="text-slate-800 italic font-medium">"Hola, buenos días. Soy Ana, su enfermera. Voy a estar cuidándole hasta las 10 de la noche."</p>
                    <p class="text-xs text-slate-500 mt-1">Decir su nombre y su horario reduce la ansiedad del paciente un 50% porque sabe a quién dirigirse y, lo más importante, <strong>cuándo volverá a verle</strong>.</p>
                </div>
                <div class="border-b border-teal-100 pb-3">
                    <p class="font-bold text-xs uppercase text-teal-700 mb-1 tracking-widest">2. TRADUCCIÓN DE JERGA</p>
                    <p class="text-red-400 line-through text-sm mb-1">"Vamos a monitorizar su diuresis y vigilar la disnea."</p>
                    <p class="text-teal-800 font-bold">"Vamos a controlar cuánto orina y estaremos atentos por si se fatiga al respirar."</p>
                    <p class="text-xs text-slate-500 mt-1">El paciente no sabe qué es "deambular", sabe qué es "caminar". No sabe qué es "analgesia", sabe qué es "calmante". Hable claro.</p>
                </div>
                <div>
                    <p class="font-bold text-xs uppercase text-teal-700 mb-1 tracking-widest">3. ESCUCHA ACTIVA DE SEGURIDAD</p>
                    <p class="text-slate-800">Si un paciente le dice <em>"Me siento raro"</em> o <em>"Tengo una sensación mala"</em>, <strong>CRÉALE SIEMPRE</strong>. A menudo es el "aura" o preludio de un evento grave (infarto, tromboembolismo o sepsis).
                    <br/><span class="font-bold text-teal-800">Pregunte:</span> "¿Raro cómo? ¿Mareado? ¿Le falta aire? ¿Siente presión en el pecho o miedo?". Nunca responda "serán los nervios".</p>
                </div>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Manejo de Situaciones Difíciles</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-5 rounded-xl border border-red-100 shadow-sm">
                <strong class="text-red-800 block mb-2 text-lg">El paciente enfadado</strong>
                <p class="text-sm text-slate-600 mb-3">No se lo tome como algo personal. En el hospital, la ira suele ser <strong>miedo disfrazado</strong>.</p>
                <p class="text-sm font-bold text-slate-700">Técnica:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li>Baje el tono de voz (no grite).</li>
                    <li>Mantenga contacto visual.</li>
                    <li><strong>Valide su emoción:</strong> "Entiendo que esté molesto por la espera. Vamos a ver cómo podemos solucionarlo ahora mismo".</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                <strong class="text-blue-800 block mb-2 text-lg">La pregunta: "¿Me voy a morir?"</strong>
                <p class="text-sm text-slate-600 mb-3">Es la pregunta más difícil. No diga "No diga tonterías" o "Usted va a vivir 100 años". Eso trivializa su miedo y corta la comunicación.</p>
                <p class="text-sm font-bold text-slate-700">Técnica:</p>
                <p class="text-sm text-slate-600">Devuelva la pregunta para explorar: <em>"¿Por qué piensa eso? ¿Se encuentra peor ahora? ¿Le ha dicho algo el médico que le preocupe?"</em>. A veces solo necesitan expresar su miedo, no una respuesta técnica.</p>
            </div>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Humanización</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video comunicación enfermera" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Comunicación Terapéutica</p>
                <p class="text-white/80 text-xs">Cómo hablar con pacientes difíciles y dar malas noticias.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">După 20 de ani, tehnologia s-a schimbat radical (calculatoare, pompe digitale), dar frica, vulnerabilitatea și singurătatea pacientului spitalizat sunt exact aceleași. Dumneavoastră sunteți traducătorul, apărătorul și ancora lui de siguranță într-un mediu ostil. O vorbă bună de la dumneavoastră poate calma mai mult decât un Diazepam.</p>
        </div>

        <div class="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm mt-6">
            <h4 class="font-bold text-teal-900 text-lg mb-4 flex items-center gap-2">
                <span class="text-2xl">🗣️</span> Reguli de Aur în Salon (Protocol AIDET)
            </h4>
            <div class="space-y-4">
                <div class="border-b border-teal-100 pb-3">
                    <p class="font-bold text-xs uppercase text-teal-700 mb-1 tracking-widest">1. PREZENTARE (VITAL)</p>
                    <p class="text-slate-800 italic font-medium">"Bună ziua. Sunt Ana, asistenta dumneavoastră. Voi avea grijă de dumneavoastră până la ora 22:00."</p>
                    <p class="text-xs text-slate-500 mt-1">A vă spune numele și programul reduce anxietatea pacientului cu 50% pentru că știe cui să se adreseze și, cel mai important, <strong>când vă va revedea</strong>.</p>
                </div>
                <div class="border-b border-teal-100 pb-3">
                    <p class="font-bold text-xs uppercase text-teal-700 mb-1 tracking-widest">2. TRADUCEREA JARGONULUI</p>
                    <p class="text-red-400 line-through text-sm mb-1">"Vom monitoriza diureza și vom supraveghea dispneea."</p>
                    <p class="text-teal-800 font-bold">"Vom controla cât urinați și vom fi atenți dacă obosiți când respirați."</p>
                    <p class="text-xs text-slate-500 mt-1">Pacientul nu știe ce e "a deambula", știe ce e "a merge". Nu știe ce e "analgezia", știe ce e "calmantul". Vorbiți clar.</p>
                </div>
                <div>
                    <p class="font-bold text-xs uppercase text-teal-700 mb-1 tracking-widest">3. ASCULTARE ACTIVĂ DE SIGURANȚĂ</p>
                    <p class="text-slate-800">Dacă un pacient vă spune <em>"Mă simt ciudat"</em> sau <em>"Am o senzație rea"</em>, <strong>CREDEȚI-L ÎNTOTDEAUNA</strong>. Adesea este "aura" sau preludiul unui eveniment grav (infarct, tromboembolie sau sepsis).
                    <br/><span class="font-bold text-teal-800">Întrebați:</span> "Ciudat cum? Amețit? Vă lipsește aerul? Simțiți presiune în piept sau frică?". Nu răspundeți niciodată "sunt doar nervii".</p>
                </div>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Gestionarea Situațiilor Dificile</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-5 rounded-xl border border-red-100 shadow-sm">
                <strong class="text-red-800 block mb-2 text-lg">Pacientul furios</strong>
                <p class="text-sm text-slate-600 mb-3">Nu o luați ca pe ceva personal. În spital, furia este de obicei <strong>frică deghizată</strong>.</p>
                <p class="text-sm font-bold text-slate-700">Tehnică:</p>
                <ul class="list-disc pl-5 text-sm text-slate-600">
                    <li>Coborâți tonul vocii (nu țipați).</li>
                    <li>Mențineți contactul vizual.</li>
                    <li><strong>Validați-i emoția:</strong> "Înțeleg că sunteți supărat din cauza așteptării. Haideți să vedem cum putem rezolva asta chiar acum".</li>
                </ul>
            </div>

            <div class="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                <strong class="text-blue-800 block mb-2 text-lg">Întrebarea: "O să mor?"</strong>
                <p class="text-sm text-slate-600 mb-3">Este cea mai grea întrebare. Nu spuneți "Nu vorbiți prostii" sau "Veți trăi 100 de ani". Asta îi trivializează frica și taie comunicarea.</p>
                <p class="text-sm font-bold text-slate-700">Tehnică:</p>
                <p class="text-sm text-slate-600">Întoarceți întrebarea pentru a explora: <em>"De ce credeți asta? Vă simțiți mai rău acum? V-a spus medicul ceva care vă îngrijorează?"</em>. Uneori au nevoie doar să-și exprime frica, nu de un răspuns tehnic.</p>
            </div>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Umanizare</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video comunicare asistentă" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Comunicare Terapeutică</p>
                <p class="text-white/80 text-xs">Cum să vorbiți cu pacienții dificili și să dați vești proaste.</p>
            </div>
          </a>
        </div>
      </div>
    `
  },

  // =================================================================================================
  // TEMA 10: REGISTRO (GACELA)
  // =================================================================================================
  "10. Registro de constantes en el sistema informático (ejemplo con GACELA u otro sistema usado en hospitales)": {
    titleES: "10. Registro Digital: Si no está escrito, no está hecho",
    titleRO: "10. Înregistrare Digitală: Dacă nu e scris, nu e făcut",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000",
    imgRights: "Foto: Unsplash - Historia Clínica Electrónica",
    contentES: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">El cambio más impactante para una enfermera que vuelve tras 20 años es la desaparición del papel. Ahora usamos sistemas informáticos como <strong>GACELA, SAP, Millenium o Selene</strong>. El ordenador ya no es una herramienta administrativa, es una herramienta de cuidados tan importante como el termómetro.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">La Importancia Legal y Asistencial</h3>
        <p>El registro es un documento legal que le protege a usted y al paciente. Recuerde esta máxima: <strong>"Lo que no está registrado, no existe ante un juez"</strong>.</p>
        
        <div class="bg-red-50 p-6 rounded-2xl border border-red-200 mt-4 shadow-sm">
            <h4 class="font-bold text-red-900 text-lg mb-2">Caso Real: El Peligro del "Ya lo escribiré luego"</h4>
            <p class="text-slate-700">Usted administra un calmante (Tramadol) a las 10:00 porque el paciente tiene dolor, pero se le olvida registrarlo en el ordenador porque tiene prisa. 
            <br/>A las 10:30, su compañera entra, ve que el paciente sigue quejoso y mira el ordenador: "No le han puesto nada". Le administra otro calmante. 
            <br/><strong class="text-red-800">Resultado: Sobredosis y depresión respiratoria por error de registro.</strong></p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Consejos de Supervivencia Digital</h3>
        <div class="grid md:grid-cols-1 gap-4">
            <div class="bg-white p-5 rounded-xl border-l-4 border-slate-500 shadow-sm">
                <strong class="text-slate-800 block mb-1">1. Registro a Tiempo Real (Bedside)</strong>
                <p class="text-sm text-slate-600">Intente registrar en el momento o justo al salir de la habitación (muchos hospitales tienen ordenadores con ruedas o tablets). Si lo deja todo para el final del turno, se le olvidarán detalles, confundirá datos de pacientes o inventará horas aproximadas.</p>
            </div>
            <div class="bg-white p-5 rounded-xl border-l-4 border-slate-500 shadow-sm">
                <strong class="text-slate-800 block mb-1">2. El Botón "Validar/Guardar"</strong>
                <p class="text-sm text-slate-600">El error nº1 del novato digital es escribir todo en la pantalla y cerrar la ventana o cambiar de paciente sin dar al botón "Guardar" (o el icono del disquete). Asegúrese siempre de que el dato queda grabado.</p>
            </div>
            <div class="bg-white p-5 rounded-xl border-l-4 border-slate-500 shadow-sm">
                <strong class="text-slate-800 block mb-1">3. Justificación de Anomalías</strong>
                <p class="text-sm text-slate-600">Si registra una tensión de 190/100, el sistema suele poner el número en color <strong>ROJO</strong>. No puede dejar eso así. 
                <br/><strong>Debe escribir un comentario asociado:</strong> "Avisado Dr. Guardia, se administra Captopril según pauta, pendiente reevaluar". Si solo deja el dato rojo sin explicar qué hizo, parece negligencia o abandono.</p>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Las Notas de Enfermería (Curso Evolutivo)</h3>
        <p>Aquí es donde usted explica lo que los números no dicen. Es narrativa libre. Use la estructura <strong>D-A-R</strong> para que sea profesional y conciso:</p>
        
        <div class="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 mt-2 shadow-sm">
            <h4 class="font-bold text-indigo-900 mb-3">Ejemplo Práctico: Paciente con Dolor</h4>
            <ul class="list-none space-y-3 text-slate-700">
                <li class="flex gap-3">
                    <span class="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0">D</span>
                    <div>
                        <strong class="block text-indigo-800 text-sm">DATOS</strong>
                        <span class="text-sm">"Paciente refiere dolor agudo punzante en herida quirúrgica, EVA 8/10. Sudoroso y taquicárdico (110 lpm)."</span>
                    </div>
                </li>
                <li class="flex gap-3">
                    <span class="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0">A</span>
                    <div>
                        <strong class="block text-indigo-800 text-sm">ACCIÓN</strong>
                        <span class="text-sm">"Se administra Nolotil (Metamizol) 2g IV lento. Se revisa el apósito (está limpio y seco)."</span>
                    </div>
                </li>
                <li class="flex gap-3">
                    <span class="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0">R</span>
                    <div>
                        <strong class="block text-indigo-800 text-sm">RESPUESTA</strong>
                        <span class="text-sm">"A los 30 min refiere alivio parcial, EVA 3/10. Constantes normalizadas."</span>
                    </div>
                </li>
            </ul>
        </div>

        {/* VIDEO DE YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Formativo</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">GACELA y Registros</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video registro enfermería" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Historia Clínica Digital</p>
                <p class="text-white/80 text-xs">Cómo registrar correctamente en el sistema y evitar errores legales.</p>
            </div>
          </a>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-8 text-slate-700 leading-relaxed text-justify font-body">
        
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p class="text-lg">Cea mai impactantă schimbare pentru o asistentă care revine după 20 de ani este dispariția hârtiei. Acum folosim sisteme informatice precum <strong>GACELA, SAP, Millenium sau Selene</strong>. Calculatorul nu mai este un instrument administrativ, este un instrument de îngrijire la fel de important ca termometrul.</p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Importanța Legală și Asistențială</h3>
        <p>Registrul este un document legal care vă protejează pe dumneavoastră și pe pacient. Țineți minte această maximă: <strong>"Ceea ce nu este înregistrat, nu există în fața unui judecător"</strong>.</p>
        
        <div class="bg-red-50 p-6 rounded-2xl border border-red-200 mt-4 shadow-sm">
            <h4 class="font-bold text-red-900 text-lg mb-2">Caz Real: Pericolul lui "O să scriu mai târziu"</h4>
            <p class="text-slate-700">Administrați un calmant (Tramadol) la 10:00 pentru că pacientul are dureri, dar uitați să îl înregistrați în calculator pentru că vă grăbiți. 
            <br/>La 10:30, colega dumneavoastră intră, vede că pacientul se plânge încă și se uită în calculator: "Nu i s-a pus nimic". Îi administrează un alt calmant. 
            <br/><strong class="text-red-800">Rezultat: Supradozaj și depresie respiratorie din cauza erorii de înregistrare.</strong></p>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Sfaturi de Supraviețuire Digitală</h3>
        <div class="grid md:grid-cols-1 gap-4">
            <div class="bg-white p-5 rounded-xl border-l-4 border-slate-500 shadow-sm">
                <strong class="text-slate-800 block mb-1">1. Înregistrare în Timp Real (Bedside)</strong>
                <p class="text-sm text-slate-600">Încercați să notați pe loc sau imediat ce ieșiți din salon (multe spitale au calculatoare pe roți sau tablete). Dacă lăsați totul pentru sfârșitul turei, veți uita detalii, veți confunda datele pacienților sau veți inventa ore aproximative.</p>
            </div>
            <div class="bg-white p-5 rounded-xl border-l-4 border-slate-500 shadow-sm">
                <strong class="text-slate-800 block mb-1">2. Butonul "Validare/Salvare"</strong>
                <p class="text-sm text-slate-600">Greșeala nr. 1 a începătorului digital este să scrie totul pe ecran și să închidă fereastra sau să schimbe pacientul fără a apăsa butonul "Salvare" (sau pictograma dischetei). Asigurați-vă întotdeauna că datele rămân salvate.</p>
            </div>
            <div class="bg-white p-5 rounded-xl border-l-4 border-slate-500 shadow-sm">
                <strong class="text-slate-800 block mb-1">3. Justificarea Anomaliilor</strong>
                <p class="text-sm text-slate-600">Dacă înregistrați o tensiune de 190/100, sistemul pune de obicei numărul în culoarea <strong>ROȘIE</strong>. Nu puteți lăsa așa. 
                <br/><strong>Trebuie să scrieți un comentariu asociat:</strong> "Anunțat medic gardă, administrat Captopril conform schemei, urmează reevaluare". Dacă lăsați doar cifra roșie fără a explica ce ați făcut, pare neglijență sau abandon.</p>
            </div>
        </div>

        <h3 class="font-heading text-2xl font-bold text-brand-deep mt-8 mb-4">Notele de Asistență (Evoluția)</h3>
        <p>Aici este locul unde explicați ceea ce numerele nu spun. Este narațiune liberă. Folosiți structura <strong>D-A-R</strong> pentru a fi profesionist și concis:</p>
        
        <div class="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 mt-2 shadow-sm">
            <h4 class="font-bold text-indigo-900 mb-3">Exemplu Practic: Pacient cu Durere</h4>
            <ul class="list-none space-y-3 text-slate-700">
                <li class="flex gap-3">
                    <span class="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0">D</span>
                    <div>
                        <strong class="block text-indigo-800 text-sm">DATE</strong>
                        <span class="text-sm">"Pacientul acuză durere acută înțepătoare la plaga chirurgicală, EVA 8/10. Transpirat și tahicardic (110 bpm)."</span>
                    </div>
                </li>
                <li class="flex gap-3">
                    <span class="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0">A</span>
                    <div>
                        <strong class="block text-indigo-800 text-sm">ACȚIUNE</strong>
                        <span class="text-sm">"Se administrează Metamizol 2g IV lent și se verifică pansamentul (este curat și uscat)."</span>
                    </div>
                </li>
                <li class="flex gap-3">
                    <span class="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0">R</span>
                    <div>
                        <strong class="block text-indigo-800 text-sm">RĂSPUNS</strong>
                        <span class="text-sm">"După 30 min declară ameliorare parțială, EVA 3/10. Constante normalizate."</span>
                    </div>
                </li>
            </ul>
        </div>

        {/* VIDEO YOUTUBE */}
        <div class="my-8">
          <div class="flex items-center gap-2 mb-3">
             <span class="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Video Educativ</span>
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">GACELA și Înregistrări</span>
          </div>
          
          <a href="https://youtu.be/Kq_kwf4mDa8?si=R4qe6Ty_4x32oJbj" target="_blank" rel="noopener noreferrer" class="block group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
            <img src="https://img.youtube.com/vi/Kq_kwf4mDa8/hqdefault.jpg" alt="Video înregistrare asistență" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div class="bg-red-600/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <p class="text-white font-bold text-sm">Istoricul Clinic Digital</p>
                <p class="text-white/80 text-xs">Cum să înregistrați corect în sistem și să evitați erorile legale.</p>
            </div>
          </a>
        </div>
      </div>
    `
  }
}; // CIERRE FINAL DEL ARCHIVO - NO OLVIDAR ESTE CARÁCTER