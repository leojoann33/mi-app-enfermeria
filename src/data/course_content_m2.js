// src/data/course_content_m2.js
// CONTENIDO DETALLADO: MÓDULO 2 (Administración de Medicamentos)
// Enfoque: Seguridad del Paciente y Técnica Aséptica

export const MODULE2_CONTENT = {
  // TEMA 11
  "11. Vías: oral, SC, IM, IV": {
    titleES: "Vías de Administración: Anatomía y Elección",
    titleRO: "Căi de Administrare: Anatomie și Alegere",
    contentES: `
      <div class="space-y-6">
        <p class="lead text-lg text-slate-700">La enfermera no solo administra, <strong>decide y supervisa</strong>. Conocer la farmacocimética de cada vía es vital para evitar errores de tiempo y efecto.</p>
        
        <div class="grid grid-cols-1 gap-4">
          <div class="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h4 class="font-bold text-emerald-900">Vía Oral (VO) - "La Lenta"</h4>
            <p class="text-sm mt-1"><strong>Efecto:</strong> 30-60 minutos.<br/><strong>Clave:</strong> Efecto de Primer Paso Hepático (el hígado destruye parte del fármaco antes de llegar a la sangre).<br/><strong>Peligro:</strong> Disfagia (riesgo de broncoaspiración). Haga siempre la prueba del agua antes de dar pastillas a un anciano.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
            <h4 class="font-bold text-blue-900">Vía Intravenosa (IV) - "La Inmediata"</h4>
            <p class="text-sm mt-1"><strong>Efecto:</strong> 1-2 minutos.<br/><strong>Clave:</strong> Biodisponibilidad del 100% (todo el fármaco llega a la sangre).<br/><strong>Peligro:</strong> Irreversible. Una vez inyectado, no hay vuelta atrás. Administrar LENTO.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border-l-4 border-orange-500 shadow-sm">
            <h4 class="font-bold text-orange-900">Vía Intramuscular (IM) - "El Depósito"</h4>
            <p class="text-sm mt-1"><strong>Efecto:</strong> 10-20 minutos.<br/><strong>Clave:</strong> Absorción rápida por la gran vascularización del músculo.<br/><strong>Peligro:</strong> Lesión del nervio ciático (glúteo).</p>
          </div>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="lead text-lg text-slate-700">Asistentul medical nu doar administrează, ci <strong>decide și supraveghează</strong>. Cunoașterea farmacocineticii fiecărei căi este vitală pentru a evita erorile de timp și efect.</p>
        
        <div class="grid grid-cols-1 gap-4">
          <div class="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h4 class="font-bold text-emerald-900">Calea Orală (PO) - "Cea Lentă"</h4>
            <p class="text-sm mt-1"><strong>Efect:</strong> 30-60 minute.<br/><strong>Cheie:</strong> Efectul Primului Pasaj Hepatic (ficatul distruge o parte din medicament înainte de a ajunge în sânge).<br/><strong>Pericol:</strong> Disfagia (risc de bronhoaspirație). Faceți testul cu apă înainte de a da pastile unui vârstnic.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
            <h4 class="font-bold text-blue-900">Calea Intravenoasă (IV) - "Cea Imediată"</h4>
            <p class="text-sm mt-1"><strong>Efect:</strong> 1-2 minute.<br/><strong>Cheie:</strong> Biodisponibilitate 100% (tot medicamentul ajunge în sânge).<br/><strong>Pericol:</strong> Ireversibil. Odată injectat, nu mai există cale de întoarcere. Administrați LENT.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border-l-4 border-orange-500 shadow-sm">
            <h4 class="font-bold text-orange-900">Calea Intramusculară (IM) - "Depozitul"</h4>
            <p class="text-sm mt-1"><strong>Efect:</strong> 10-20 minute.<br/><strong>Cheie:</strong> Absorbție rapidă datorită vascularizării bogate a mușchiului.<br/><strong>Pericol:</strong> Lezarea nervului sciatic (fesă).</p>
          </div>
        </div>
      </div>
    `
  },

  // TEMA 12
  "12. Técnica inyección subcutánea: zonas y errores": {
    titleES: "Subcutánea: Heparinas e Insulinas",
    titleRO: "Subcutanată: Heparine și Insuline",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">El objetivo es depositar el fármaco en el tejido adiposo (grasa), justo debajo de la piel pero sin llegar al músculo.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">La Técnica del Pellizco</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Pellizco mantenido:</strong> Coja un pliegue de piel con índice y pulgar. <strong>No lo suelte</strong> hasta haber retirado la aguja. Si suelta antes, la aguja puede profundizar y tocar músculo (dolor + hematoma).</li>
            <li><strong>Ángulo:</strong> 90º si la aguja es corta (insulina/heparina pre-cargada) y hay grasa suficiente. 45º si el paciente es muy delgado.</li>
        </ul>

        <div class="bg-red-50 p-4 rounded-xl border border-red-200 mt-4">
            <h4 class="font-bold text-red-900 flex items-center gap-2"><span class="text-xl">⛔</span> ERRORES A EVITAR</h4>
            <ul class="list-disc pl-5 mt-2 text-sm text-red-800">
                <li><strong>Frotar:</strong> PROHIBIDO frotar tras poner Heparina (Clexane). Rompe capilares y causa grandes hematomas.</li>
                <li><strong>Quitar la burbuja:</strong> Las jeringas de Heparina traen aire. No lo purgue. Ese aire sirve de "tapón" para que el líquido no refluya.</li>
                <li><strong>Repetir zona:</strong> Rote los puntos de inyección para evitar lipodistrofia (bultos de grasa dura donde la insulina ya no se absorbe).</li>
            </ul>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Scopul este depozitarea medicamentului în țesutul adipos (grăsime), chiar sub piele, dar fără a ajunge la mușchi.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Tehnica Pliului Cutant</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Pliul menținut:</strong> Prindeți un pliu de piele cu indexul și degetul mare. <strong>Nu-i dați drumul</strong> până nu ați scos acul. Dacă eliberați înainte, acul poate pătrunde în mușchi (durere + hematom).</li>
            <li><strong>Unghi:</strong> 90º dacă acul este scurt (insulină/heparină preumplută) și există suficientă grăsime. 45º dacă pacientul este foarte slab.</li>
        </ul>

        <div class="bg-red-50 p-4 rounded-xl border border-red-200 mt-4">
            <h4 class="font-bold text-red-900 flex items-center gap-2"><span class="text-xl">⛔</span> ERORI DE EVITAT</h4>
            <ul class="list-disc pl-5 mt-2 text-sm text-red-800">
                <li><strong>Frecarea:</strong> INTERZIS frecatul după Heparină (Clexane). Rupe capilarele și cauzează hematoame mari.</li>
                <li><strong>Scoaterea bulei:</strong> Seringile de Heparină au aer. Nu-l scoateți. Acel aer servește ca "dop" pentru ca lichidul să nu iasă.</li>
                <li><strong>Repetarea zonei:</strong> Rotiți locurile de injecție pentru a evita lipodistrofia (noduli de grăsime dură unde insulina nu se mai absoarbe).</li>
            </ul>
        </div>
      </div>
    `
  },

  // TEMA 13
  "13. Técnica inyección intramuscular: seguridad": {
    titleES: "Intramuscular (IM): Técnica Ventroglútea",
    titleRO: "Intramusculară (IM): Tehnica Ventrogluteală",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">Durante décadas pinchamos en el "cuadrante superior externo" del glúteo (Dorsoglútea). <strong>La evidencia científica ha cambiado esto.</strong> Ahora se recomienda la zona Ventroglútea (Cadera) por estar libre de nervios y vasos importantes.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">La Técnica en Z (Z-Track)</h3>
        <p>Es obligatoria para medicación irritante (hierro, antibióticos) para evitar que el líquido se salga y manche la piel.</p>
        <ol class="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Desplace la piel y la grasa 2-3 cm hacia un lado con la mano no dominante.</li>
            <li>Mantenga la piel desplazada e inyecte a 90º.</li>
            <li>Aspire (5 seg) para asegurar que no hay sangre. Inyecte lento (10 seg/ml).</li>
            <li>Espere 10 segundos con la aguja dentro (para que el músculo absorba).</li>
            <li>Retire la aguja y <strong>suelte la piel inmediatamente</strong>. Esto rompe el trayecto de salida.</li>
        </ol>

        <div class="my-6 p-4 bg-slate-100 rounded-lg text-center">
          <div class="aspect-video bg-slate-800 rounded-lg flex items-center justify-center text-white">
            [IMG: Anatomía Zona Ventroglútea vs Dorsoglútea]
          </div>
          <p class="text-xs text-slate-500 mt-2">Localización del punto de inyección seguro.</p>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Timp de decenii am injectat în "cadranul superior extern" al fesei (Dorso-gluteală). <strong>Dovezile științifice au schimbat acest lucru.</strong> Acum se recomandă zona Ventrogluteală (Șold) deoarece este lipsită de nervi și vase importante.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Tehnica în Z (Z-Track)</h3>
        <p>Este obligatorie pentru medicația iritantă (fier, antibiotice) pentru a preveni scurgerea lichidului înapoi în piele.</p>
        <ol class="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Deplasați pielea și grăsimea 2-3 cm într-o parte cu mâna nedominantă.</li>
            <li>Mențineți pielea deplasată și injectați la 90º.</li>
            <li>Aspirați (5 sec) pentru a vă asigura că nu vine sânge. Injectați lent (10 sec/ml).</li>
            <li>Așteptați 10 secunde cu acul înăuntru (pentru ca mușchiul să absoarbă).</li>
            <li>Scoateți acul și <strong>eliberați pielea imediat</strong>. Aceasta rupe traseul de ieșire.</li>
        </ol>

        <div class="my-6 p-4 bg-slate-100 rounded-lg text-center">
          <div class="aspect-video bg-slate-800 rounded-lg flex items-center justify-center text-white">
            [IMG: Anatomie Zona Ventrogluteală vs Dorso-gluteală]
          </div>
          <p class="text-xs text-slate-500 mt-2">Localizarea punctului de injecție sigur.</p>
        </div>
      </div>
    `
  },

  // TEMA 14
  "14. Dilución y reconstitución de fármacos": {
    titleES: "Reconstitución y Dilución: Matemáticas Vitales",
    titleRO: "Reconstituire și Diluție: Matematică Vitală",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">Confundir soluto con solvente es un error de estudiante. Reconstituir es "hacer líquido el polvo". Diluir es "bajar la concentración".</p>

        <div class="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
            <h4 class="font-bold text-indigo-900">Regla de Oro: La Estabilidad</h4>
            <p>Muchos antibióticos (Amoxicilina-Clavulánico) pierden efecto a los 20 minutos de reconstituirse. <br/><strong>Norma:</strong> No prepare la medicación a las 8:00 para ponerla a las 9:00. Prepare e inyecte inmediatamente.</p>
        </div>

        <h3 class="font-heading text-xl font-bold text-brand-deep mt-4">Sueros Incompatibles</h3>
        <p>No todo se puede mezclar con Suero Fisiológico (SF):</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Amiodarona:</strong> SOLO con Glucosado 5%. En SF precipita (cristaliza).</li>
            <li><strong>Anfotericina B:</strong> SOLO con Glucosado 5%.</li>
            <li><strong>Fenitoína:</strong> SOLO con Fisiológico (en Glucosado cristaliza).</li>
        </ul>
        <p class="font-bold text-red-600 mt-2">Ante la duda: Consulte la app de compatibilidades o pregunte a Farmacia. No adivine.</p>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">A confunda solutul cu solventul este o greșeală de student. A reconstitui înseamnă "a face lichid din pulbere". A dilua înseamnă "a scădea concentrația".</p>

        <div class="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
            <h4 class="font-bold text-indigo-900">Regula de Aur: Stabilitatea</h4>
            <p>Multe antibiotice (Amoxicilină-Clavulanat) își pierd efectul la 20 de minute după reconstituire. <br/><strong>Normă:</strong> Nu preparați medicația la 8:00 pentru a o administra la 9:00. Preparați și injectați imediat.</p>
        </div>

        <h3 class="font-heading text-xl font-bold text-brand-deep mt-4">Seruri Incompatibile</h3>
        <p>Nu totul se poate amesteca cu Ser Fiziologic (SF):</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Amiodarona:</strong> DOAR cu Glucozat 5%. În SF precipită (cristalizează).</li>
            <li><strong>Amfotericina B:</strong> DOAR cu Glucozat 5%.</li>
            <li><strong>Fenitoina:</strong> DOAR cu Fiziologic (în Glucozat cristalizează).</li>
        </ul>
        <p class="font-bold text-red-600 mt-2">Dacă aveți dubii: Consultați aplicația de compatibilități sau întrebați la Farmacie. Nu ghiciți.</p>
      </div>
    `
  },

  // TEMA 15
  "15. Uso correcto jeringa insulina": {
    titleES: "Insulina: Jeringas y Unidades",
    titleRO: "Insulina: Seringi și Unități",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">El error más peligroso es confundir mililitros (ml) con Unidades Internacionales (UI).</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">La Jeringa de Insulina (Naranja)</h3>
        <p>Está calibrada en UI, no en ml. Normalmente <strong>1 ml = 100 UI</strong>.</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Espacio Muerto Cero:</strong> Las jeringas de insulina tienen la aguja integrada. No hay espacio muerto. Si usa una jeringa normal y le pone una aguja, perderá medicación en el cono de la aguja.</li>
            <li><strong>Nunca reencapuche:</strong> La mayoría de pinchazos accidentales ocurren al intentar poner el capuchón a una aguja de insulina usada. Tírela directa al contenedor amarillo.</li>
        </ul>

        <div class="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500 mt-4">
            <h4 class="font-bold text-amber-900">Plumas Precargadas (Bolígrafos)</h4>
            <p>Recuerde siempre <strong>purgar 2 unidades al aire</strong> antes de pinchar. Esto elimina el aire de la aguja y asegura que la dosis que entra es real.</p>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Cea mai periculoasă greșeală este confundarea mililitrilor (ml) cu Unitățile Internaționale (UI).</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Seringa de Insulină (Portocalie)</h3>
        <p>Este calibrată în UI, nu în ml. De obicei <strong>1 ml = 100 UI</strong>.</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Spațiu Mort Zero:</strong> Seringile de insulină au acul integrat. Nu există spațiu mort. Dacă folosiți o seringă normală și îi atașați un ac, veți pierde medicament în conul acului.</li>
            <li><strong>Nu recapișonați niciodată:</strong> Majoritatea înțepăturilor accidentale apar la încercarea de a pune capacul pe un ac de insulină folosit. Aruncați-l direct în cutia galbenă.</li>
        </ul>

        <div class="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500 mt-4">
            <h4 class="font-bold text-amber-900">Stilouri Preumplute (Pen-uri)</h4>
            <p>Amintiți-vă întotdeauna să <strong>purjați 2 unități în aer</strong> înainte de a înțepa. Aceasta elimină aerul din ac și asigură că doza care intră este reală.</p>
        </div>
      </div>
    `
  },

  // TEMA 16
  "16. Normas de los 5 correctos": {
    titleES: "Los 5 Correctos (o 7, o 10): El Check-list Sagrado",
    titleRO: "Cei 5 Corecți (sau 7, sau 10): Lista Sfântă",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">Antes de administrar NADA, deténgase 5 segundos y verifique mentalmente. Esto evita el 99% de los errores mortales.</p>

        <ol class="list-decimal pl-5 space-y-3 text-slate-700">
            <li><strong>Paciente Correcto:</strong> No pregunte "¿Es usted el Sr. García?", porque si está sordo o confuso dirá que sí. Pregunte: "¿Cómo se llama usted?" y mire la pulsera identificativa.</li>
            <li><strong>Fármaco Correcto:</strong> Compruebe el nombre genérico. Muchos envases se parecen (el "look-alike"). Lea la etiqueta, no se fíe del color de la caja.</li>
            <li><strong>Dosis Correcta:</strong> Cuidado con los decimales (0.5 mg no es 5 mg). Recalcule si la cantidad le parece extraña (ej. 10 ampollas para una dosis).</li>
            <li><strong>Hora Correcta:</strong> Los antibióticos requieren puntualidad. Los diuréticos no se dan por la noche.</li>
            <li><strong>Vía Correcta:</strong> Una ampolla para beber (oral) inyectada en vena puede matar (embolia). Verifique siempre la vía.</li>
        </ol>

        <div class="bg-slate-100 p-4 rounded-xl text-center">
            <p class="font-bold text-slate-600 italic">"La enfermera es la última barrera entre el error y el paciente."</p>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Înainte de a administra ORICE, opriți-vă 5 secunde și verificați mental. Asta previne 99% din erorile mortale.</p>

        <ol class="list-decimal pl-5 space-y-3 text-slate-700">
            <li><strong>Pacientul Corect:</strong> Nu întrebați "Sunteți domnul Popescu?", pentru că dacă este surd sau confuz va zice da. Întrebați: "Cum vă numiți?" și verificați brățara de identificare.</li>
            <li><strong>Medicamentul Corect:</strong> Verificați numele generic. Multe ambalaje seamănă ("look-alike"). Citiți eticheta, nu vă încredeți în culoarea cutiei.</li>
            <li><strong>Doza Corectă:</strong> Atenție la zecimale (0.5 mg nu este 5 mg). Recalculați dacă cantitatea vi se pare ciudată (ex. 10 fiole pentru o doză).</li>
            <li><strong>Ora Corectă:</strong> Antibioticele necesită punctualitate. Diureticele nu se dau noaptea.</li>
            <li><strong>Calea Corectă:</strong> O fiolă de băut (orală) injectată în venă poate ucide (embolie). Verificați întotdeauna calea.</li>
        </ol>

        <div class="bg-slate-100 p-4 rounded-xl text-center">
            <p class="font-bold text-slate-600 italic">"Asistenta este ultima barieră între eroare și pacient."</p>
        </div>
      </div>
    `
  },

  // TEMA 17
  "17. Preparación de perfusiones IV": {
    titleES: "Perfusiones IV: Técnica Aséptica",
    titleRO: "Perfuzii IV: Tehnica Aseptică",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">La infección de catéter (bacteriemia) empieza muchas veces al preparar el suero en el control de enfermería.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Pasos Críticos</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Desinfección de puertos:</strong> Antes de pinchar la bolsa de suero o inyectar medicación en ella, limpie el puerto de goma con alcohol 70º. Está sucio aunque sea nuevo.</li>
            <li><strong>Etiquetado:</strong> Si añade medicación a un suero (ej. 20 mEq de Potasio), <strong>ETIQUETELO</strong> con rotulador o pegatina. Un suero transparente con medicación invisible es un peligro si no se sabe qué lleva.</li>
            <li><strong>Purgado (Cebado):</strong> Llene la cámara de goteo a la mitad. Si la llena entera, no verá caer las gotas. Si la deja vacía, entrará aire (embolia gaseosa).</li>
        </ul>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Infecția de cateter (bacteriemia) începe de multe ori la prepararea serului în camera de gardă.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Pași Critici</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Dezinfectarea porturilor:</strong> Înainte de a înțepa punga de ser sau de a injecta medicamente în ea, ștergeți portul de cauciuc cu alcool 70º. Este murdar chiar dacă e nou.</li>
            <li><strong>Etichetare:</strong> Dacă adăugați medicație într-un ser (ex. 20 mEq de Potasiu), <strong>ETICHETAȚI-L</strong> cu marker sau autocolant. Un ser transparent cu medicație invizibilă este un pericol dacă nu se știe ce conține.</li>
            <li><strong>Amorsare (Aerisire):</strong> Umpleți camera de picurare pe jumătate. Dacă o umpleți complet, nu veți vedea picăturile căzând. Dacă o lăsați goală, va intra aer (embolie gazoasă).</li>
        </ul>
      </div>
    `
  },

  // TEMA 18
  "18. Bombas de infusión: manejo básico": {
    titleES: "Bombas de Infusión: Perdiendo el Miedo",
    titleRO: "Pompe de Perfuzie: Învingerea Fricii",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">Las bombas son ordenadores que empujan líquido. No piensan, solo ejecutan lo que usted programa. Los parámetros clave son tres:</p>

        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>VTBI (Volumen To Be Infused):</strong> "Volumen a Infundir". Es la cantidad total que hay en la bolsa (ej. 500 ml).</li>
            <li><strong>RATE (Flujo/Velocidad):</strong> A qué velocidad entra. Se mide en <strong>ml/h</strong>. (ej. 21 ml/h).</li>
            <li><strong>TIME (Tiempo):</strong> Cuánto tardará. Normalmente la bomba lo calcula sola si pones los otros dos datos.</li>
        </ul>

        <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 mt-4">
            <h4 class="font-bold text-red-900">Alarma: "OCLUSIÓN" (OCCLUSION)</h4>
            <p>Es la alarma más común. Significa que la bomba empuja pero el líquido no entra. Causas:</p>
            <ol class="list-decimal pl-5 mt-1 text-sm text-red-800">
                <li>Llave de tres pasos cerrada (lo más frecuente).</li>
                <li>Vía doblada (el paciente ha doblado el brazo).</li>
                <li>Vía coagulada (hay que lavar o cambiar la vía).</li>
            </ol>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Pompele sunt computere care împing lichid. Nu gândesc, doar execută ce programați. Parametrii cheie sunt trei:</p>

        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>VTBI (Volumen To Be Infused):</strong> "Volum de Perfuzat". Este cantitatea totală din pungă (ex. 500 ml).</li>
            <li><strong>RATE (Debit/Viteză):</strong> Cu ce viteză intră. Se măsoară în <strong>ml/h</strong>. (ex. 21 ml/h).</li>
            <li><strong>TIME (Timp):</strong> Cât va dura. De obicei pompa îl calculează singură dacă introduceți celelalte două date.</li>
        </ul>

        <div class="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 mt-4">
            <h4 class="font-bold text-red-900">Alarmă: "OCLUZIE" (OCCLUSION)</h4>
            <p>Este alarma cea mai comună. Înseamnă că pompa împinge dar lichidul nu intră. Cauze:</p>
            <ol class="list-decimal pl-5 mt-1 text-sm text-red-800">
                <li>Robinet cu trei căi închis (cel mai frecvent).</li>
                <li>Branulă îndoită (pacientul a îndoit brațul).</li>
                <li>Branulă coagulată (trebuie spălată sau schimbată).</li>
            </ol>
        </div>
      </div>
    `
  },

  // TEMA 19
  "19. Reacciones adversas: signos de alerta": {
    titleES: "Reacciones Adversas: Detección Precoz",
    titleRO: "Reacții Adverse: Detectare Precoce",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">Al poner un antibiótico o hemoderivado, los primeros 15 minutos son críticos. Vigile al paciente.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Signos de Anafilaxia (Grave)</h3>
        <p>Si ocurre esto, pare la infusión inmediatamente y pida ayuda:</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Piel:</strong> Urticaria (habones), picor en palmas y plantas, enrojecimiento súbito.</li>
            <li><strong>Respiratorio:</strong> Estridor (ruido al respirar), sensación de "nudo en la garganta", disfonía (cambio de voz).</li>
            <li><strong>Circulatorio:</strong> Mareo, bajada de tensión, taquicardia.</li>
        </ul>

        <h3 class="font-heading text-xl font-bold text-brand-deep mt-4">Efectos Secundarios (No Alérgicos)</h3>
        <p>Son molestos pero esperables:</p>
        <ul class="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>Náuseas/Vómitos:</strong> Común con Tramadol u opioides. Se previene poniéndolos lentos.</li>
            <li><strong>Sabor metálico:</strong> Común al inyectar rápido.</li>
            <li><strong>"Red Man Syndrome":</strong> Enrojecimiento por poner Vancomicina muy rápido (no es alergia, es velocidad).</li>
        </ul>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">La administrarea unui antibiotic sau derivat de sânge, primele 15 minute sunt critice. Supravegheați pacientul.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Semne de Anafilaxie (Grav)</h3>
        <p>Dacă se întâmplă asta, opriți perfuzia imediat și cereți ajutor:</p>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Piele:</strong> Urticarie (bubițe), mâncărime în palme și tălpi, roșeață bruscă.</li>
            <li><strong>Respirator:</strong> Stridor (zgomot la respirație), senzație de "nod în gât", disfonie (schimbarea vocii).</li>
            <li><strong>Circulator:</strong> Amețeală, scădere de tensiune, tahicardie.</li>
        </ul>

        <h3 class="font-heading text-xl font-bold text-brand-deep mt-4">Efecte Secundare (Non-Alergice)</h3>
        <p>Sunt neplăcute dar de așteptat:</p>
        <ul class="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>Greață/Vărsături:</strong> Comun cu Tramadol sau opioide. Se previne administrând lent.</li>
            <li><strong>Gust metalic:</strong> Comun la injectarea rapidă.</li>
            <li><strong>"Sindromul Omului Roșu":</strong> Roșeață la administrarea Vancomicinei prea rapid (nu e alergie, e viteză).</li>
        </ul>
      </div>
    `
  },

  // TEMA 20
  "20. Uso y control de antibióticos en planta": {
    titleES: "Antibióticos en Planta: Responsabilidad Enfermera",
    titleRO: "Antibiotice pe Secție: Responsabilitatea Asistentei",
    contentES: `
      <div class="space-y-6">
        <p class="text-slate-700">El éxito del tratamiento antibiótico depende del horario. Las bacterias se reproducen cada 20 minutos; si usted se retrasa 2 horas en la dosis, las bacterias ganan terreno.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Puntos Clave de Control</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Puntualidad:</strong> Es más importante que en otros fármacos. "Cada 8 horas" es exacto.</li>
            <li><strong>Pico y Valle:</strong> En fármacos como la Vancomicina o Gentamicina, hay que sacar sangre (niveles) justo antes de la siguiente dosis. Si se olvida de sacarla y pone la dosis, el análisis no servirá.</li>
            <li><strong>Flebitis Química:</strong> Los antibióticos irritan la vena. Si el paciente se queja de ardor, diluya más el fármaco o baje la velocidad. No ignore la queja o perderá la vía.</li>
        </ul>

        <div class="bg-green-50 p-4 rounded-xl border border-green-200 mt-4">
            <h4 class="font-bold text-green-900">Probióticos</h4>
            <p>Si el paciente tiene diarrea por antibiótico, el médico pautará probióticos (Ultra-Levura). <strong>Sepárelos de la toma del antibiótico al menos 2 horas</strong>, o el antibiótico matará al probiótico y no servirá de nada.</p>
        </div>
      </div>
    `,
    contentRO: `
      <div class="space-y-6">
        <p class="text-slate-700">Succesul tratamentului antibiotic depinde de orar. Bacteriile se reproduc la fiecare 20 de minute; dacă întârziați doza cu 2 ore, bacteriile câștigă teren.</p>

        <h3 class="font-heading text-xl font-bold text-brand-deep">Puncte Cheie de Control</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Punctualitate:</strong> Este mai importantă decât la alte medicamente. "La fiecare 8 ore" este exact.</li>
            <li><strong>Pic și Vale:</strong> La medicamente precum Vancomicina sau Gentamicina, trebuie recoltat sânge (niveluri) chiar înainte de următoarea doză. Dacă uitați să recoltați și administrați doza, analiza va fi inutilă.</li>
            <li><strong>Flebită Chimică:</strong> Antibioticele irită vena. Dacă pacientul se plânge de arsură, diluați mai mult medicamentul sau scădeți viteza. Nu ignorați plângerea sau veți pierde branula.</li>
        </ul>

        <div class="bg-green-50 p-4 rounded-xl border border-green-200 mt-4">
            <h4 class="font-bold text-green-900">Probiotice</h4>
            <p>Dacă pacientul are diaree de la antibiotic, medicul va prescrie probiotice. <strong>Separați-le de administrarea antibioticului cu cel puțin 2 ore</strong>, altfel antibioticul va ucide probioticul și nu va avea niciun efect.</p>
        </div>
      </div>
    `
  }
};