// src/data/procedures.js
// Base de datos: PROCEDIMIENTOS TÉCNICOS
// Nivel: Enfermería Experta - Bilingüe ES/RO
// Enfoque: Paso a paso detallado y seguridad del paciente

export const PROCEDURES_DB = [
  // --- INYECTABLES ---
  { 
    id: 'proc_im', 
    category: 'inject', 
    type: 'Inyección', 
    nameES: 'Intramuscular (Técnica en Z)', 
    nameRO: 'Intramusculară (Tehnica în Z)', 
    descES: `**La Técnica que menos duele**\nOlvídese de pinchar recto y sacar rápido. La "Técnica en Z" es el estándar actual porque sella el medicamento dentro del músculo, evitando que refluya a la piel (que es lo que duele y causa bultos).\n\n**Zonas de Elección:**\n* **Ventroglútea:** Es la zona más segura hoy en día (en la cadera), lejos de nervios.\n* **Dorsoglútea (Nalga):** La clásica (Cuadrante Superior Externo). Riesgo de tocar el nervio ciático.\n* **Deltoides (Brazo):** Solo para vacunas o poca cantidad (<2ml).`,
    descRO: `**Tehnica ce doare cel mai puțin**\nUitați de înțepătura dreaptă și retragerea rapidă. "Tehnica în Z" este standardul actual deoarece sigilează medicamentul în interiorul mușchiului, prevenind refluxul acestuia în piele (ceea ce provoacă durere și noduli).\n\n**Zone de Elecție:**\n* **Ventrogluteală:** Este cea mai sigură zonă astăzi (în șold), departe de nervi.\n* **Dorso-gluteală (Fesă):** Clasica (Cadranul Superior Extern). Risc de atingere a nervului sciatic.\n* **Deltoid (Braț):** Doar pentru vaccinuri sau cantități mici (<2ml).`,
    indicationES: `**Procedimiento Paso a Paso:**\n1. **Preparación:** Limpie la piel y deje secar.\n2. **La "Z":** Con la mano no dominante, estire la piel y la grasa unos 2-3 cm hacia un lado. **Mantenga esa tensión**.\n3. **Punción:** Con la otra mano, clave la aguja a 90º (como un dardo) con decisión.\n4. **Aspiración (Vital):** Aspire del émbolo 5 segundos. ¿Sale sangre? Si sí, retire todo y empiece de nuevo. Si no, inyecte lento (10 seg/ml).\n5. **Retirada:** Saque la aguja y **SOLO ENTONCES** suelte la piel que tenía estirada. Esto corta el camino de salida del líquido.`,
    indicationRO: `**Procedură Pas cu Pas:**\n1. **Pregătire:** Dezinfectați pielea și lăsați să se usuce.\n2. **"Z"-ul:** Cu mâna nedominantă, trageți pielea și grăsimea aproximativ 2-3 cm într-o parte. **Mențineți această tensiune**.\n3. **Puncția:** Cu cealaltă mână, introduceți acul la 90º (ca o săgeată) cu hotărâre.\n4. **Aspirația (Vital):** Trageți de piston 5 secunde. Vine sânge? Dacă da, scoateți totul și reîncepeți. Dacă nu, injectați lent (10 sec/ml).\n5. **Retragerea:** Scoateți acul și **DOAR ATUNCI** eliberați pielea pe care o țineați întinsă. Asta taie calea de ieșire a lichidului.`,
    warningES: `**⚠️ ¡NO FROTAR!:**\nNunca masajee la zona después de una IM profunda. El masaje puede forzar la salida del medicamento al tejido subcutáneo, causando irritación y dolor. Solo aplique presión suave con una gasa seca.`,
    warningRO: `**⚠️ NU MASAȚI!:**\nNu masați niciodată zona după o injecție IM profundă. Masajul poate forța ieșirea medicamentului în țesutul subcutanat, provocând iritație și durere. Doar aplicați o presiune ușoară cu o compresă uscată.`
  },
  {
    id: 'proc_sc',
    category: 'inject',
    type: 'Inyección', 
    nameES: 'Subcutánea (Heparina/Clexane)',
    nameRO: 'Subcutanată (Heparină/Clexane)',
    descES: `**Evitando los Moratones**\nLa administración de Heparina de Bajo Peso Molecular (HBPM) es el procedimiento que más hematomas causa si se hace mal. El objetivo es dejar el líquido en la grasa, sin romper capilares.\n\n**Zona:** Abdomen (la "barriga"), respetando siempre 5 cm alrededor del ombligo.`,
    descRO: `**Evitarea Vânătăilor**\nAdministrarea Heparinei cu Greutate Moleculară Mică (HBPM) este procedura care provoacă cele mai multe hematoame dacă este făcută greșit. Scopul este de a lăsa lichidul în grăsime, fără a rupe capilarele.\n\n**Zona:** Abdomen (burta), respectând întotdeauna 5 cm în jurul buricului.`,
    indicationES: `**El Secreto de la Técnica:**\n1. **La Burbuja:** Las jeringas precargadas traen una burbuja de aire. **NO LA QUITE**. Está calculada para entrar al final y "sellar" el líquido dentro, para que no se salga.\n2. **El Pellizco:** Coja un pellizco de piel suavemente. No lo suelte hasta que acabe.\n3. **La Inyección:** Clave vertical (90º) en todo el centro del pellizco. Inyecte lento.\n4. **La Espera:** Cuente hasta 10 antes de sacar la aguja.`,
    indicationRO: `**Secretul Tehnicii:**\n1. **Bula de aer:** Seringile preumplute vin cu o bulă de aer. **NU O SCOATEȚI**. Este calculată să intre la final și să "sigileze" lichidul înăuntru, ca să nu iasă.\n2. **Pliul:** Prindeți un pliu de piele ușor cu degetele. Nu-i dați drumul până nu terminați injecția.\n3. **Injecția:** Introduceți acul vertical (90º) chiar în centrul pliului. Injectați lent.\n4. **Așteptarea:** Numărați până la 10 înainte de a scoate acul.`,
    warningES: `**⚠️ ERROR COMÚN:**\nJamás frote con el algodón después de pinchar heparina. Si frota, romperá los vasitos sanguíneos y al día siguiente el paciente tendrá un hematoma gigante. Solo apoye el algodón suavemente.`,
    warningRO: `**⚠️ GREȘEALĂ COMUNĂ:**\nNu frecați niciodată cu vata după ce ați injectat heparină. Dacă frecați, veți rupe vasele de sânge și a doua zi pacientul va avea un hematom uriaș. Doar tamponați ușor locul cu vată.`
  },

  // --- VASCULAR Y SANGRE ---
  {
    id: 'proc_blood',
    category: 'vascular',
    type: 'Extracción',
    nameES: 'Extracción de Sangre (Sistema de Vacío)',
    nameRO: 'Recoltare Sânge (Sistem Vacuum)',
    descES: `**Calidad de la Muestra**\nEl laboratorio rechazará la muestra si está hemolizada (glóbulos rotos) o coagulada. La técnica lo es todo.\n\n**Trucos para venas difíciles:**\n* Calor local (un guante con agua caliente).\n* Dejar el brazo colgando un rato.\n* No dar "golpecitos" agresivos, solo palpar suave.`,
    descRO: `**Calitatea Probei**\nLaboratorul va respinge proba dacă este hemolizată (globule roșii sparte) sau coagulată. Tehnica este totul.\n\n**Trucuri pentru vene dificile:**\n* Căldură locală (o mănușă umplută cu apă caldă).\n* Lăsați brațul să atârne un timp în jos.\n* Nu dați "palme" agresive peste venă, doar palpați blând.`,
    indicationES: `**Procedimiento:**\n1. **Torniquete:** Póngalo 4 dedos por encima. **Máximo 1 minuto** puesto (si tarda más, suéltelo y deje descansar, o saldrá el Potasio alto falsamente).\n2. **Punción:** Bisel hacia arriba. Fije la vena tirando de la piel hacia abajo con el pulgar.\n3. **Tubos:** Meta los tubos en el orden correcto (Hemocultivo -> Azul -> Rojo -> Verde -> Lila).\n4. **Mezclado:** Según saca cada tubo, gírelo ("inviértalo") suavemente.`,
    indicationRO: `**Procedură:**\n1. **Garou:** Puneți-l cu 4 degete mai sus de puncție. **Maxim 1 minut** (dacă durează mai mult, desfaceți-l și lăsați brațul să se odihnească, altfel va ieși Potasiul fals crescut).\n2. **Puncția:** Bizoul acului în sus. Fixați vena trăgând pielea în jos cu degetul mare.\n3. **Tuburi:** Introduceți tuburile în ordinea corectă (Hemocultură -> Albastru -> Roșu -> Verde -> Mov).\n4. **Amestecare:** Pe măsură ce scoateți fiecare tub, rotiți-l ("inversați-l") ușor pentru a se amesteca cu aditivul.`,
    warningES: `**⚠️ EL TUBO AZUL (Coagulación):**\nEs el más "quisquilloso". Debe llenarse exactamente hasta la marca de la flecha o línea negra. Si se queda corto o se pasa, la máquina de laboratorio no puede calcular el INR (Sintrom) y rechaza la muestra.`,
    warningRO: `**⚠️ TUBUL ALBASTRU (Coagulare):**\nEste cel mai "pretențios". Trebuie umplut exact până la semnul săgeții sau linia neagră de pe etichetă. Dacă este prea puțin sau prea mult sânge, aparatul de laborator nu poate calcula INR (Sintrom) și respinge proba.`
  },
  
  // --- SONDAJES ---
  { 
    id: 'proc_sng', 
    category: 'digestive', 
    type: 'Sondaje', 
    nameES: 'Colocación de Sonda Nasogástrica', 
    nameRO: 'Montare Sondă Nazogastrică', 
    descES: `**Pasar de la Nariz al Estómago**\nEs una técnica muy desagradable para el paciente. La clave es la cooperación y la rapidez en el momento justo.\n\n**Medición (NEX):**\nAntes de empezar, mida con la propia sonda: Desde la punta de la **N**ariz -> al lóbulo de la **O**reja -> al apéndice **X**ifoides (boca del estómago). Marque ese punto con un rotulador.`,
    descRO: `**Trecerea de la Nas la Stomac**\nEste o tehnică foarte neplăcută pentru pacient. Cheia este cooperarea și rapiditatea la momentul potrivit.\n\n**Măsurare (NEX):**\nÎnainte de a începe, măsurați distanța cu sonda însăși: De la vârful **N**asului -> la lobul **U**rechii -> la apendicele **X**ifoid (capul pieptului). Marcați acel punct cu un marker.`,
    indicationES: `**El Momento de la Verdad:**\n1. Lubrique bien la punta.\n2. Introduzca por la nariz recto, por el suelo de la fosa nasal.\n3. **EL TRUCO:** Cuando note un tope (garganta) y el paciente tenga arcadas, pídale que incline la cabeza hacia adelante (mirando al ombligo) y que **BEBA SORBITOS DE AGUA**. Empuje la sonda coordinado con cada trago que dé el paciente. El agua abre el camino al esófago.`,
    indicationRO: `**Momentul Adevărului:**\n1. Lubrifiați bine vârful sondei.\n2. Introduceți prin nas drept, pe podeaua fosei nazale.\n3. **TRUCUL:** Când simțiți un obstacol (în gât) și pacientul are greață, rugați-l să aplece capul în față (privind spre buric) și să **BEA ÎNGHIȚITURI MICI DE APĂ**. Împingeți sonda coordonat cu fiecare înghițitură a pacientului. Apa deschide calea spre esofag.`,
    warningES: `**⚠️ SEGURIDAD VITAL:**\nNunca meta nada por la sonda hasta estar 100% seguro de que está en estómago. Aspire: debe salir líquido gástrico (pH ácido). Ausculte: meta aire con una jeringa y escuche el "gorgoteo" en el estómago. Si el paciente tose o no puede hablar, **ESTÁ EN PULMÓN: RETIRE YA**.`,
    warningRO: `**⚠️ SIGURANȚĂ VITALĂ:**\nNu introduceți nimic pe sondă până nu sunteți 100% sigur că este în stomac. Aspirați: trebuie să iasă lichid gastric (pH acid). Auscultați: introduceți aer cu o seringă și ascultați "gâlgâitul" în stomac. Dacă pacientul tușește violent sau nu poate vorbi, **ESTE ÎN PLĂMÂN: SCOATEȚI IMEDIAT**.`
  },
  {
    id: 'proc_sv',
    category: 'urology',
    type: 'Sondaje', 
    nameES: 'Sondaje Vesical (Hombres y Mujeres)',
    nameRO: 'Sondaj Vezical (Bărbați și Femei)',
    descES: `**Técnica Estéril Estricta**\nLa infección de orina por sonda es la infección hospitalaria más común. La esterilidad no es negociable.\n\n**Material:** Necesitará una segunda persona o una mesa auxiliar estéril preparada.`,
    descRO: `**Tehnică Sterilă Strictă**\nInfecția urinară de sondă este cea mai comună infecție intraspitalicească. Sterilitatea nu este negociabilă.\n\n**Material:** Veți avea nevoie de o a doua persoană pentru ajutor sau de o masă auxiliară sterilă pregătită.`,
    indicationES: `**Diferencias por Sexo:**\n* **Mujeres:** Es cuestión de encontrar el meato. Separe bien los labios mayores y menores con la mano no dominante. Limpie de arriba a abajo. Una vez localizada la "arruga" o el orificio, introduzca 5-7 cm.\n* **Hombres:** El secreto es la **ANESTESIA**. Meta una jeringa de 10ml de lubricante urológico con anestesia directamente por la uretra y espere 2 minutos. Luego ponga el pene a 90º (vertical) e introduzca la sonda suavemente hasta la bifurcación.`,
    indicationRO: `**Diferențe după Sex:**\n* **Femei:** Totul ține de găsirea meatului urinar. Separați bine labiile mari și mici cu mâna nedominantă. Curățați de sus în jos. Odată localizat orificiul, introduceți sonda 5-7 cm.\n* **Bărbați:** Secretul este **ANESTEZIA**. Introduceți o seringă de 10ml de lubrifiant urologic cu anestezic direct prin uretră și așteptați 2 minute să își facă efectul. Apoi țineți penisul la 90º (vertical) și introduceți sonda ușor până la bifurcație.`,
    warningES: `**⚠️ EL BALÓN DE SEGURIDAD:**\nNunca infle el balón si no sale orina. Si no sale orina, puede estar en la uretra, y si infla el balón ahí, causará un desgarro uretral gravísimo con hemorragia. Asegúrese de estar en vejiga.`,
    warningRO: `**⚠️ BALONUL DE SIGURANȚĂ:**\nNu umflați niciodată balonul dacă nu curge urină pe sondă. Dacă nu curge urină, vârful poate fi încă în uretră, și dacă umflați balonul acolo, veți cauza o ruptură uretrală gravă cu hemoragie. Asigurați-vă că sunteți în vezică.`
  },

  // --- PRUEBAS DIAGNÓSTICAS ---
  {
    id: 'proc_ecg',
    category: 'cardio',
    type: 'Prueba',
    nameES: 'Electrocardiograma (Colocación Electrodos)',
    nameRO: 'Electrocardiogramă (Plasare Electrozi)',
    descES: `**El Mapa del Corazón**\nUn ECG mal puesto puede simular un infarto que no existe. La precisión milimétrica es importante.\n\n**Las Pinzas (Miembros):**\n* ❤️ **Rojo:** Brazo Derecho (Right).\n* 💛 **Amarillo:** Brazo Izquierdo (Left).\n* 🖤 **Negro:** Pierna Derecha (Tierra).\n* 💚 **Verde:** Pierna Izquierda.\n* *Truco: "Rana" (Verde) sobre "Tierra" (Negra), y el "Sol" (Amarillo) sobre la Rana.*`,
    descRO: `**Harta Inimii**\nUn EKG pus greșit poate simula un infarct care nu există. Precizia milimetrică este foarte importantă.\n\n**Cleștii (Membre):**\n* ❤️ **Roșu:** Braț Drept (Right).\n* 💛 **Galben:** Braț Stâng (Left).\n* 🖤 **Negru:** Picior Drept (Pământ).\n* 💚 **Verde:** Picior Stâng.\n* *Truc de memorare: "Broasca" (Verde) stă pe "Pământ" (Negru), iar "Soarele" (Galben) strălucește peste Broască.*`,
    indicationES: `**Los Precordiales (El Pecho):**\n* **V1 (Rojo):** 4º espacio intercostal, borde derecho del esternón.\n* **V2 (Amarillo):** 4º espacio intercostal, borde izquierdo del esternón (frente a V1).\n* **V4 (Marrón):** 5º espacio, línea media clavicular (bajo el pezón).\n* **V3 (Verde):** Justo en medio, entre V2 y V4.\n* **V5 (Negro):** 5º espacio, línea axilar anterior.\n* **V6 (Morado):** 5º espacio, línea axilar media (bajo la axila).`,
    indicationRO: `**Precordialele (Pe Piept):**\n* **V1 (Roșu):** Spațiul 4 intercostal, marginea dreaptă a sternului.\n* **V2 (Galben):** Spațiul 4 intercostal, marginea stângă a sternului (față în față cu V1).\n* **V4 (Maron):** Spațiul 5, pe linia medioclaviculară (sub mamelon).\n* **V3 (Verde):** Exact la mijloc, între V2 și V4.\n* **V5 (Negru):** Spațiul 5, linia axilară anterioară.\n* **V6 (Mov):** Spațiul 5, linia axilară medie (sub axilă).`,
    warningES: `**⚠️ PIEL PREPARADA:**\nSi el paciente tiene mucho vello, rasure la zona. Si tiene mucha grasa o crema, limpie con alcohol. Si el electrodo no pega bien, el trazado saldrá con "ruido" y no servirá.`,
    warningRO: `**⚠️ PIELE PREGĂTITĂ:**\nDacă pacientul are mult păr pe piept, radeți zona. Dacă are multă grăsime sau cremă de corp, curățați cu alcool. Dacă electrodul nu se lipește perfect, traseul EKG va ieși cu "paraziți" (zgomot) și nu va putea fi interpretat.`
  },

  // --- CURAS ---
  {
    id: 'proc_wound',
    category: 'cure',
    type: 'Curas',
    nameES: 'Cura de Heridas (Concepto TIME)',
    nameRO: 'Îngrijirea Plăgilor (Conceptul TIME)',
    descES: `**Olvide el "secar al aire"**\nHoy sabemos que las heridas curan el doble de rápido en ambiente húmedo. No usamos "Betadine y gasa". Usamos el esquema **TIME**.\n\n* **T (Tejido):** ¿Hay tejido negro (necrosis) o amarillo (esfacelos)? Hay que quitarlo. Use Hidrogel para ablandarlo.\n* **I (Infección):** ¿Huele mal? ¿Hay pus? ¿Borde rojo? Use apósitos de Plata.\n* **M (Moisture/Humedad):** ¿La herida está muy mojada? Use Alginatos o Espumas para absorber. ¿Está seca? Hidrate.\n* **E (Edges/Bordes):** Cuide que los bordes no se maceren (pongan blancos).`,
    descRO: `**Uitați de "uscarea la aer"**\nAstăzi știm că rănile se vindecă de două ori mai repede în mediu umed. Nu mai folosim "Betadină și compresă". Folosim schema **TIME**.\n\n* **T (Țesut):** Există țesut negru (necroză) sau galben (sfaceluri)? Trebuie eliminat. Folosiți Hidrogel pentru a-l înmuia.\n* **I (Infecție):** Miroase urât? Este puroi? Margine roșie? Folosiți pansamente cu Argint.\n* **M (Moisture/Umiditate):** Rana este foarte udă? Folosiți Alginate sau Spume pentru a absorbi lichidul. Este uscată? Hidratați-o.\n* **E (Edges/Margini):** Aveți grijă ca marginile să nu se macereze (să nu se facă albe de la umezeală).`,
    indicationES: `**El Lavado:**\nLave la herida con Suero Fisiológico a presión (jeringa de 20ml y aguja, inyectando con fuerza el suero sobre la herida). Esto barre las bacterias sin dañar el tejido. No frote con gasas si no es necesario.`,
    indicationRO: `**Spălarea:**\nSpălați rana cu Ser Fiziologic sub presiune (folosind o seringă de 20ml și un ac, injectând cu forță serul peste rană). Această presiune mătură bacteriile fără a răni țesutul nou. Nu frecați cu comprese dacă nu este absolut necesar.`
  }
];