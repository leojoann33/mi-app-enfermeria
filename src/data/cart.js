// src/data/cart.js
// Base de datos: CARRO DE CURAS Y MATERIALES
// Nivel: Enfermería Experta - Bilingüe ES/RO
// Enfoque: Reciclaje profesional y Seguridad del Paciente

export const CART_DB = [
  // ===========================================================================
  // 1. ANTISEPSIA Y PREPARACIÓN DE LA PIEL
  // ===========================================================================
  { 
    id: 'cl1', 
    category: 'clean', 
    type: 'Antiséptico de Piel', 
    nameES: 'Clorhexidina Acuosa 2%', 
    nameRO: 'Clorhexidină Apoasă 2%', 
    descES: `**El Nuevo Estándar de Oro (Adiós a la Povidona)**\nEn los últimos años, la Clorhexidina ha sustituido a la Povidona Yodada (Betadine) como el antiséptico de elección en casi todos los procedimientos.\n\n**¿Por qué el cambio?**\n1. **Acción Rápida:** Actúa en 30 segundos (la povidona tarda 2 min).\n2. **Efecto Residual:** Sigue matando bacterias durante más de 6 horas (la povidona deja de actuar en cuanto se seca).\n3. **Sangre:** Sigue funcionando aunque haya sangre o pus (la povidona se inactiva).`,
    descRO: `**Noul Standard de Aur (Adio Povidonă)**\nÎn ultimii ani, Clorhexidina a înlocuit Povidona Iodată (Betadina) ca antiseptic de elecție în aproape toate procedurile.\n\n**De ce această schimbare?**\n1. **Acțiune Rapidă:** Acționează în 30 de secunde (povidona necesită 2 minute).\n2. **Efect Rezidual:** Continuă să ucidă bacteriile timp de peste 6 ore (povidona încetează să acționeze imediat ce se usucă).\n3. **Sânge:** Continuă să funcționeze chiar dacă există sânge sau puroi (povidona se inactivează).`,
    indicationES: `**Usos Obligatorios:**\n* **Canalización de Vías:** Antes de pinchar cualquier vena (periférica o central).\n* **Hemocultivos:** Es fundamental para no contaminar la muestra.\n* **Campo Quirúrgico:** Limpieza de la piel antes de operar.\n* **Cordón Umbilical:** Cura del ombligo en neonatos.`,
    indicationRO: `**Utilizări Obligatorii:**\n* **Canalizare Venosă:** Înainte de a puncționa orice venă (periferică sau centrală).\n* **Hemoculturi:** Este fundamental pentru a nu contamina proba.\n* **Câmp Chirurgical:** Curățarea pielii înainte de operație.\n* **Cordon Ombilical:** Îngrijirea buricului la nou-născuți.`,
    warningES: `**⚠️ REGLAS DE SEGURIDAD:**\n* **TIEMPO DE SECADO (CRÍTICO):** El error número 1 es pasar la gasa y pinchar inmediatamente. **HAY QUE ESPERAR** a que la piel se seque al aire (aprox. 30 seg). Si pinchas cuando está húmedo, el antiséptico entra en la vena (duele mucho) y aún no ha matado las bacterias.\n* **OÍDOS Y OJOS:** Es neurotóxica. Prohibida en cirugía de oído (sordera) o neurocirugía.`,
    warningRO: `**⚠️ REGULI DE SIGURANȚĂ:**\n* **TIMP DE USCARE (CRITIC):** Greșeala numărul 1 este ștergerea cu compresa și înțeparea imediată. **TREBUIE SĂ AȘTEPTAȚI** ca pielea să se usuce la aer (aprox. 30 sec). Dacă înțepați când este umed, antisepticul intră în venă (doare foarte tare) și încă nu a ucis bacteriile.\n* **URECHI ȘI OCHI:** Este neurotoxică. Interzisă în chirurgia urechii (surzire) sau neurochirurgie.`
  },
  { 
    id: 'cl2', 
    category: 'clean', 
    type: 'Solución de Lavado', 
    nameES: 'Suero Fisiológico 0.9%', 
    nameRO: 'Ser Fiziologic 0.9%', 
    descES: `**El Único Líquido Seguro para Heridas**\nEl Suero Fisiológico (Cloruro Sódico 0.9%) es isotónico, igual que nuestra sangre. Es el único líquido de limpieza que **respeta el tejido nuevo** (granulación).\n\n**¿Por qué no usar agua oxigenada o alcohol en heridas?**\nPorque son citotóxicos. Matan las bacterias, pero también matan a las células nuevas que intentan cerrar la herida, retrasando la curación.`,
    descRO: `**Singurul Lichid Sigur pentru Răni**\nSerul Fiziologic (Clorură de Sodiu 0.9%) este izotonic, la fel ca sângele nostru. Este singurul lichid de curățare care **respectă țesutul nou** (de granulație).\n\n**De ce să nu folosim apă oxigenată sau alcool pe răni?**\nPentru că sunt citotoxice. Ucid bacteriile, dar ucid și celulele noi care încearcă să închidă rana, întârziind vindecarea.`,
    indicationES: `**Usos Principales:**\n* **Limpieza de Heridas:** Úlceras, quemaduras, heridas quirúrgicas.\n* **Lavado Ocular:** En caso de salpicaduras químicas o cuerpos extraños.\n* **Nebulizaciones:** Base para diluir medicación respiratoria.\n* **Lavado de Vías:** Para que no se obstruyan los catéteres.`,
    indicationRO: `**Utilizări Principale:**\n* **Curățarea Rănilor:** Ulcere, arsuri, plăgi chirurgicale.\n* **Spălături Oculare:** În caz de stropire cu substanțe chimice sau corpi străini.\n* **Nebulizări:** Bază pentru diluarea medicației respiratorii.\n* **Spălarea Cateterelor:** Pentru a preveni obstrucția branulelor.`,
    warningES: `**⚠️ CADUCIDAD TRAS APERTURA:**\nUna botella de suero abierta es un caldo de cultivo para gérmenes. Por protocolo, **se debe desechar a las 24 horas** de abrirla. Escriba siempre la fecha y hora de apertura en el frasco.`,
    warningRO: `**⚠️ VALABILITATE DUPĂ DESCHIDERE:**\nO sticlă de ser deschisă este un mediu de cultură pentru germeni. Conform protocolului, **trebuie aruncată la 24 de ore** după deschidere. Scrieți întotdeauna data și ora deschiderii pe flacon.`
  },

  // ===========================================================================
  // 2. ACCESO VASCULAR Y EXTRACCIÓN (La Técnica ha cambiado)
  // ===========================================================================
  {
    id: 'mat_vpp',
    category: 'vascular',
    type: 'Acceso Venoso',
    nameES: 'Catéter Venoso (Abocath)',
    nameRO: 'Cateter Venos Periferic (Branulă)',
    descES: `**Guía de Calibres y Colores (Estándar Internacional):**\nLa elección del calibre es vital. "Burro grande, ande o no ande" **YA NO SIRVE**. Hay que poner el catéter más pequeño posible que cumpla la función para no dañar la vena (flebitis mecánica).\n\n* **🧡 14G (Naranja) / 🩶 16G (Gris):** Son tubos muy gruesos. Solo para politraumatismos, quirófano mayor o paradas cardiacas donde hay que meter litros de suero en minutos.\n* **💚 18G (Verde):** El estándar para **Transfusiones de Sangre** o TAC con contraste (soporta alta presión).\n* **🩷 20G (Rosa):** El **Rey de la Planta**. Sirve para sueros, antibióticos y analgésicos en adultos. Es el que usará el 90% de las veces.\n* **💙 22G (Azul):** Para venas finas, ancianos frágiles o tratamientos largos.\n* **💛 24G (Amarillo):** Pediatría y Neonatos.`,
    descRO: `**Ghid de Calibre și Culori (Standard Internațional):**\nAlegerea calibrului este vitală. Principiul "cu cât mai mare cu atât mai bine" **NU MAI ESTE VALABIL**. Trebuie să montați cel mai mic cateter posibil care îndeplinește funcția, pentru a nu leza vena (flebită mecanică).\n\n* **🧡 14G (Portocaliu) / 🩶 16G (Gri):** Sunt tuburi foarte groase. Doar pentru politraumatisme, chirurgie majoră sau stop cardiac unde trebuie introduși litri de ser în câteva minute.\n* **💚 18G (Verde):** Standardul pentru **Transfuzii de Sânge** sau CT cu contrast (suportă presiune mare).\n* **🩷 20G (Roz):** **Regele Secției**. Bun pentru seruri, antibiotice și analgezice la adulți. Este cel pe care îl veți folosi în 90% din cazuri.\n* **💙 22G (Albastru):** Pentru vene subțiri, vârstnici fragili sau tratamente îndelungate.\n* **💛 24G (Galben):** Pediatrie și Nou-născuți.`,
    indicationES: `**Seguridad (Nuevos Catéteres):**\nAhora la mayoría son de seguridad. Al retirar la aguja guía, un clip metálico cubre la punta automáticamente o hay que apretar un botón para retraerla. **Nunca reencapuche manualemente** una aguja usada.`,
    indicationRO: `**Siguranță (Catetere Noi):**\nAcum majoritatea sunt de siguranță. La retragerea acului ghid, o clemă metalică acoperă vârful automat sau trebuie apăsat un buton pentru a-l retrage. **Niciodată nu recapișonați manual** un ac folosit.`
  },
  {
    id: 'mat_vacutainer',
    category: 'vascular',
    type: 'Analítica',
    nameES: 'Tubos de Sangre (El Orden Correcto)',
    nameRO: 'Eprubete de Sânge (Ordinea Corectă)',
    descES: `**¿Por qué importa el orden?**\nLos tubos tienen aditivos químicos dentro. Si llenamos en desorden, la aguja puede arrastrar el químico de un tubo al siguiente y falsear los resultados (ej. el potasio sale altísimo falsamente).\n\n**SECUENCIA OBLIGATORIA:**\n1. **Hemocultivos:** (Si se piden) Siempre lo primero para que sea estéril.\n2. **🔵 Azul (Citrato/Coagulación):** Para el Sintrom. Llenar **EXACTAMENTE** hasta la flecha negra. Si llenas menos o más, la máquina lo rechaza.\n3. **🟡 Rojo/Amarillo (Suero/Gel):** Bioquímica general (Colesterol, Azúcar, Hígado).\n4. **🟢 Verde (Heparina):** Urgencias o Cariotipos.\n5. **🟣 Lila (EDTA):** Hemograma (Anemia, Plaquetas).`,
    descRO: `**De ce contează ordinea?**\nEprubetele conțin aditivi chimici în interior. Dacă le umplem în dezordine, acul poate trage substanța chimică dintr-un tub în următorul și poate falsifica rezultatele (ex. potasiul iese fals crescut).\n\n**SECVENȚA OBLIGATORIE:**\n1. **Hemoculturi:** (Dacă se cer) Întotdeauna primele pentru a asigura sterilitatea.\n2. **🔵 Albastru (Citrat/Coagulare):** Pentru Sintrom/INR. Se umple **EXACT** până la săgeata neagră. Dacă umpleți mai puțin sau mai mult, aparatul respinge proba.\n3. **🟡 Roșu/Galben (Ser/Gel):** Biochimie generală (Colesterol, Zahăr, Ficat).\n4. **🟢 Verde (Heparină):** Urgențe sau Cariotipuri.\n5. **🟣 Mov (EDTA):** Hemoleucogramă (Anemie, Trombocite).`,
    warningES: `**⚠️ MEZCLADO (Inversión):**\nNada más llenar un tubo, gírelo suavemente boca abajo y boca arriba 5-6 veces. **NO AGITAR** como una coctelera, o romperá los glóbulos rojos (hemólisis) y habrá que repetir la extracción.`,
    warningRO: `**⚠️ AMESTECARE (Inversie):**\nImediat după umplerea unui tub, rotiți-l ușor cu capul în jos și în sus de 5-6 ori. **NU AGITAȚI** ca pe un shaker, altfel veți sparge globulele roșii (hemoliză) și va trebui repetată recoltarea.`
  },

  // ===========================================================================
  // 3. RESPIRATORIO Y OXIGENOTERAPIA
  // ===========================================================================
  {
    id: 'mat_gn',
    category: 'respiratory',
    type: 'Oxigenoterapia Básica',
    nameES: 'Gafas Nasales (Cánulas)',
    nameRO: 'Canule Nazale (Ochelari)',
    descES: `**Comodidad ante todo**\nSon dos tubitos que entran en la nariz. Permiten al paciente comer, beber y hablar sin quitarse el oxígeno.\n\n**Flujos:**\nSe usan para flujos bajos, de **1 a 4 litros por minuto**. Ponerlas a más de 4 litros no sirve de mucho y reseca muchísimo la nariz, provocando sangrados.`,
    descRO: `**Confort înainte de toate**\nSunt două tuburi mici care intră în nas. Permit pacientului să mănânce, să bea și să vorbească fără a-și scoate oxigenul.\n\n**Debite:**\nSe folosesc pentru debite mici, de la **1 la 4 litri pe minut**. Setarea la peste 4 litri nu este eficientă și usucă foarte tare nasul, provocând sângerări.`,
    warningES: `**⚠️ PREVENCIÓN DE ÚLCERAS:**\nVigile la piel detrás de las orejas donde apoya la goma. En ancianos se hacen heridas (úlceras) muy rápido. Ponga gasas o protectores si ve rojez.`,
    warningRO: `**⚠️ PREVENIREA ESCARELOR:**\nSupravegheați pielea din spatele urechilor unde se sprijină elasticul. La vârstnici se fac răni (escare) foarte repede. Puneți comprese sau protecții dacă vedeți roșeață.`
  },
  {
    id: 'mat_venti',
    category: 'respiratory',
    type: 'Oxigenoterapia Precisa',
    nameES: 'Mascarilla Venturi (Ventimask)',
    nameRO: 'Mască tip Venturi',
    descES: `**La mascarilla de los colores**\nEs el sistema más importante para pacientes delicados (como los enfermos de pulmón crónicos - EPOC). Nos asegura que el paciente recibe la cantidad EXACTA de oxígeno, ni más ni menos.\n\n**¿Cómo funciona?**\nAbajo lleva una pieza de plástico de color (disyuntor) que indica el porcentaje.\n* **🔵 Azul:** 24% (Poner caudalímetro a 2-3 Litros)\n* **⚪ Blanco:** 28% (Poner a 4-6 Litros)\n* **🟡 Amarillo:** 35% (Poner a 8-10 Litros)\n* **🔴 Rojo:** 40% (Poner a 10-12 Litros)\n* **🟢 Verde:** 60% (Poner a 12-15 Litros)`,
    descRO: `**Masca colorată (Precizie)**\nEste cel mai important sistem pentru pacienții delicați (cum ar fi bolnavii pulmonari cronici - BPOC). Ne asigură că pacientul primește cantitatea EXACTĂ de oxigen, nici mai mult, nici mai puțin.\n\n**Cum funcționează?**\nJos are o piesă de plastic colorată care indică procentajul.\n* **🔵 Albastru:** 24% (Reglați debitmetrul la 2-3 Litri)\n* **⚪ Alb:** 28% (Reglați la 4-6 Litri)\n* **🟡 Galben:** 35% (Reglați la 8-10 Litri)\n* **🔴 Roșu:** 40% (Reglați la 10-12 Litri)\n* **🟢 Verde:** 60% (Reglați la 12-15 Litri)`,
    warningES: `**⚠️ IMPORTANTE:**\nMire el número que pone en la pieza de color de plástico. Ahí le dice a cuántos litros tiene que abrir la llave del oxígeno en la pared. Si pone menos, el paciente se asfixia.`,
    warningRO: `**⚠️ IMPORTANT:**\nCitiți numărul scris pe piesa de plastic colorată. Acolo vă spune la câți litri trebuie să deschideți robinetul de oxigen din perete. Dacă puneți mai puțin, pacientul se asfixiază.`
  },
  {
    id: 'mat_res',
    category: 'respiratory',
    type: 'Urgencia',
    nameES: 'Mascarilla Reservorio',
    nameRO: 'Mască cu Rezervor',
    descES: `**Para situaciones críticas**\nEs una mascarilla con una bolsa de plástico debajo. Sirve para dar la máxima cantidad de oxígeno posible (casi el 100%) en urgencias (infartos, edema de pulmón, traumas graves).`,
    descRO: `**Pentru situații critice**\nEste o mască cu o pungă de plastic dedesubt. Servește pentru a administra cantitatea maximă posibilă de oxigen (aproape 100%) în urgențe (infarcte, edem pulmonar, traume grave).`,
    warningES: `**⚠️ LA BOLSA SIEMPRE HINCHADA:**\nPara que funcione, la bolsa de plástico debe estar inflada. Antes de ponérsela al paciente, tape la válvula con el dedo y deje que se llene. El oxígeno debe estar abierto a tope (**15 Litros/min**). Si la bolsa se chupa entera cuando el paciente respira, le falta aire.`,
    warningRO: `**⚠️ PUNGA MEREU UMFLATĂ:**\nPentru a funcționa, punga de plastic trebuie să fie umflată. Înainte de a o pune pacientului, astupați supapa cu degetul și lăsați-o să se umple. Oxigenul trebuie deschis la maxim (**15 Litri/min**). Dacă punga se golește complet când pacientul inspiră, înseamnă că nu are destul aer.`
  },

  // ===========================================================================
  // 4. SONDAJE (Urinario y Digestivo)
  // ===========================================================================
  {
    id: 'mat_foley',
    category: 'urology',
    type: 'Sondaje Vesical',
    nameES: 'Sonda Foley (Vejiga)',
    nameRO: 'Sondă Urinară Foley',
    descES: `**Materiales (Látex vs Silicona):**\n* **Látex (Color Ámbar/Naranja):** Son más baratas y blandas, pero se "pudren" rápido y se llenan de sales. Solo usar para pocos días (< 1 semana).\n* **Silicona (Transparente o Azul):** Son más rígidas pero muy higiénicas. Se usan para pacientes crónicos o sondajes de larga duración (1-3 meses).\n\n**Calibres:**\nEn mujeres se suele usar un 14 o 16 Ch. En hombres un 16 o 18 Ch. Si hay sangre (hematuria), usar una más gorda (20-22) para que no se atasquen los coágulos.`,
    descRO: `**Materiale (Latex vs Silicon):**\n* **Latex (Culoare Chihlimbar/Portocaliu):** Sunt mai ieftine și moi, dar se degradează rapid și se încarcă cu săruri. A se folosi doar pentru câteva zile (< 1 săptămână).\n* **Silicon (Transparent sau Albastru):** Sunt mai rigide dar foarte igienice. Se folosesc pentru pacienți cronici sau sondaje de lungă durată (1-3 luni).\n\n**Calibre:**\nLa femei se folosește de obicei 14 sau 16 Ch. La bărbați 16 sau 18 Ch. Dacă există sânge (hematurie), folosiți una mai groasă (20-22) pentru a nu se bloca cheagurile.`,
    warningES: `**⚠️ EL BALÓN (SEGURIDAD):**\nPara que la sonda no se salga, se infla un globito dentro de la vejiga. **JAMÁS use suero fisiológico** para inflarlo. La sal del suero cristaliza y atasca el conducto, haciendo imposible sacar la sonda después. Use siempre **AGUA DESTILADA**.`,
    warningRO: `**⚠️ BALONUL (SIGURANȚĂ):**\nPentru ca sonda să nu iasă, se umflă un balonaș în vezică. **NICIODATĂ nu folosiți ser fiziologic** pentru a-l umfla. Sarea din ser cristalizează și blochează canalul, făcând imposibilă scoaterea sondei ulterior. Folosiți întotdeauna **APĂ DISTILATĂ**.`
  },
  {
    id: 'mat_sng',
    category: 'digestive',
    type: 'Sondaje Gástrico',
    nameES: 'Sonda Nasogástrica (SNG)',
    nameRO: 'Sondă Nazogastrică (SNG)',
    descES: `**El tubo a la nariz**\nSirve para alimentar a pacientes que no tragan (Ictus, coma) o para vaciar el estómago en obstrucciones/vómitos.\n\n**Medición (NEX):**\nAntes de ponerla, mida la distancia: Punta de la **N**ariz -> Lóbulo de la **O**reja -> Apéndice **X**ifoides (boca del estómago). Marque ese punto. Hasta ahí hay que meterla.`,
    descRO: `**Tubul prin nas**\nServește pentru alimentarea pacienților care nu pot înghiți (AVC, comă) sau pentru golirea stomacului în caz de obstrucții/vărsături.\n\n**Măsurare (NEX):**\nÎnainte de introducere, măsurați distanța: Vârful **N**asului -> Lobul **U**rechii -> Apendicele **X**ifoid (capul pieptului). Marcați acel punct. Până acolo trebuie introdusă.`,
    warningES: `**⚠️ ¿ESTÁ EN PULMÓN?:**\nEs el riesgo mortal. Si al meterla el paciente tose sin parar, se pone morado o no puede hablar, **SÁQUELA INMEDIATAMENTE**, se ha ido a la vía aérea. Una vez puesta, compruebe siempre aspirando jugo gástrico o auscultando aire en el estómago.`,
    warningRO: `**⚠️ ESTE ÎN PLĂMÂN?:**\nAcesta este riscul mortal. Dacă la introducere pacientul tușește neîncetat, se învinețește sau nu poate vorbi, **SCOATEȚI-O IMEDIAT**, a intrat pe calea respiratorie. Odată introdusă, verificați întotdeauna aspirând suc gastric sau ascultând aerul în stomac.`
  },

  // ===========================================================================
  // 5. CURA DE HERIDAS AVANZADA (Adiós a la gasa seca)
  // ===========================================================================
  {
    id: 'mat_apos',
    category: 'cure',
    type: 'Apósitos Modernos',
    nameES: 'Guía de Apósitos (Cura en Ambiente Húmedo)',
    nameRO: 'Ghid Pansamente Moderne (Mediu Umed)',
    descES: `**El cambio de paradigma**\nHace 20 años se dejaban las heridas "al aire" o con gasa seca. Hoy sabemos que las heridas curan el doble de rápido en un ambiente húmedo y caliente.\n\n**Tipos según el estado de la herida:**\n* **Hidrogel (Tubo gel):** Para heridas secas o con costra negra (necrosis). Aporta agua para ablandar y limpiar.\n* **Alginato (Parece algodón):** Para heridas que supuran mucho líquido. Absorbe 20 veces su peso y se convierte en gel.\n* **Espuma / Foam (Esponja):** Para proteger y absorber exudado medio. Muy cómodo.\n* **Plata (Ag):** Solo si hay infección (mal olor, pus). Mata las bacterias.\n* **Hidrocoloide (Parche piel):** Para proteger roces o úlceras superficiales.`,
    descRO: `**Schimbarea de paradigmă**\nAcum 20 de ani rănile se lăsau "la aer" sau cu compresă uscată. Astăzi știm că rănile se vindecă de două ori mai repede într-un mediu umed și cald.\n\n**Tipuri în funcție de starea plăgii:**\n* **Hidrogel (Tub gel):** Pentru răni uscate sau cu crustă neagră (necroză). Aduce apă pentru a înmuia și curăța.\n* **Alginat (Aspect de vată):** Pentru răni care supurează mult lichid. Absoarbe de 20 de ori greutatea sa și se transformă în gel.\n* **Spumă / Foam (Burete):** Pentru protecție și absorbția exsudatului mediu. Foarte confortabil.\n* **Argint (Ag):** Doar dacă există infecție (miros urât, puroi). Ucide bacteriile.\n* **Hidrocoloid (Plasture piele):** Pentru protecția frecărilor sau ulcerelor superficiale.`,
    warningES: `**⚠️ RETIRADA:**\nNunca arranque un apósito pegado en seco. Se llevará la piel nueva por delante y sangrará. Empápelo bien con suero antes de retirarlo.`,
    warningRO: `**⚠️ ÎNDEPĂRTARE:**\nNu smulgeți niciodată un pansament lipit uscat. Veți rupe pielea nouă și va sângera. Îmbibați-l bine cu ser înainte de a-l îndepărta.`
  },
  {
    id: 'mat_bioseg',
    category: 'safety',
    type: 'Seguridad',
    nameES: 'Contenedor de Punzantes',
    nameRO: 'Recipient pentru Obiecte Ascuțite',
    descES: `**El cubo amarillo**\nAquí van ÚNICAMENTE agujas, bisturís, ampollas de cristal rotas o cualquier cosa que corte/pinche. No tire algodones ni plásticos.\n\n**Llenado:**\nNunca lo llene hasta arriba. Tiene una línea de "llenado máximo". Si intenta meter una aguja a la fuerza en un bote lleno, se pinchará.`,
    descRO: `**Cutia galbenă**\nAici se aruncă DOAR ace, bisturie, fiole de sticlă sparte sau orice obiect care taie/înțeapă. Nu aruncați vată sau plastice.\n\n**Umplere:**\nNu o umpleți niciodată până sus. Are o linie de "umplere maximă". Dacă încercați să introduceți un ac cu forța într-o cutie plină, vă veți înțepa.`
  },
  {
    id: 'mat_guedel',
    category: 'respiratory',
    type: 'Vía Aérea',
    nameES: 'Cánula de Guedel (Tubo de Mayo)',
    nameRO: 'Canulă Guedel (Pipă Guedel)',
    descES: `**Evita que la lengua caiga atrás**\nEs un tubo de plástico curvo y rígido. Su función es mantener la lengua apartada para que el paciente respire.\n\n**¡OJO! Solo en INCONSCIENTES:**\nSolo se pone si el paciente está en coma o muy sedado. Si el paciente está medio despierto, al ponérsela le provocará arcadas y vomitará (pudiendo aspirar el vómito).`,
    descRO: `**Previne căderea limbii în spate**\nEste un tub de plastic curbat și rigid. Funcția sa este de a menține limba dată la o parte pentru ca pacientul să respire.\n\n**ATENȚIE! Doar la INCONȘTIENȚI:**\nSe introduce doar dacă pacientul este în comă sau foarte sedat. Dacă pacientul este pe jumătate treaz, introducerea ei îi va provoca greață și va vărsa (riscând să aspire voma).`,
    warningES: `**⚠️ TÉCNICA DE COLOCACIÓN:**\nSe introduce al revés (con la curva hacia el paladar) y cuando llega al fondo se gira 180 grados.`,
    warningRO: `**⚠️ TEHNICA DE INTRODUCERE:**\nSe introduce invers (cu curbura spre cerul gurii) și când ajunge în fundul gâtului se rotește 180 de grade.`
  }
];