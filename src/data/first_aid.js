// src/data/first_aid.js
// Base de datos: PRIMEROS AUXILIOS Y URGENCIAS
// Nivel: Enfermería Experta - Bilingüe ES/RO
// Enfoque: Algoritmos claros y acción inmediata

export const FIRST_AID_DB = [
  // ===========================================================================
  // 1. SOPORTE VITAL (CRÍTICO)
  // ===========================================================================
  { 
    id: 'fa_rcp', 
    category: 'vital', 
    type: 'Soporte Vital', 
    nameES: 'RCP Básica (Reanimación Cardiopulmonar)', 
    nameRO: 'RCP (Resuscitare Cardio-Pulmonară)', 
    descES: `**Cuando el corazón se para**\nSi una persona se desploma y no responde, el tiempo es vida. No tenga miedo a romper costillas, tenga miedo a no hacer nada.\n\n**Algoritmo Simplificado:**\n1. **Seguridad:** ¿Es seguro acercarse? (Cuidado con carreteras, agua, electricidad).\n2. **Consciencia:** Sacuda los hombros y grite "¿Estás bien?".\n3. **Respiración:** Si NO responde, mire si respira. Si **NO respira** o solo "boquea" (ruidos raros como ronquidos), asuma que es una Parada.`,
    descRO: `**Când inima se oprește**\nDacă o persoană se prăbușește și nu răspunde, timpul înseamnă viață. Nu vă fie teamă că rupeți coaste, temeți-vă să nu faceți nimic.\n\n**Algoritm Simplificat:**\n1. **Siguranță:** Este sigur să vă apropiați? (Atenție la trafic, apă, electricitate).\n2. **Conștiență:** Scuturați umerii și strigați "Sunteți bine?".\n3. **Respirație:** Dacă NU răspunde, priviți dacă respiră. Dacă **NU respiră** sau doar "gâfâie" (zgomote ciudate, gasping), considerați că este în Stop Cardiac.`,
    indicationES: `**ACCIÓN INMEDIATA:**\n1. **LLAME AL 112** (o pida a alguien que llame y traiga un Desfibrilador).\n2. **MANOS AL PECHO:** Ponga el talón de una mano en el centro del pecho (entre los pezones) y la otra encima. Entrelace los dedos.\n3. **COMPRIMA FUERTE Y RÁPIDO:**\n   * **Ritmo:** 100-120 veces por minuto (Canción "Macarena").\n   * **Profundidad:** Hunda el pecho 5-6 cm.\n   * **Deje subir:** Permita que el pecho suba del todo tras cada empujón.\n4. **30:2:** Haga 30 compresiones y 2 ventilaciones (boca a boca) si sabe hacerlo. Si no, solo comprima sin parar.`,
    indicationRO: `**ACȚIUNE IMEDIATĂ:**\n1. **SUNAȚI LA 112** (sau cereți cuiva să sune și să aducă un Defibrilator).\n2. **MÂINILE PE PIEPT:** Așezați podul palmei în centrul pieptului (linia intermamelonară) și cealaltă mână deasupra. Împletiți degetele.\n3. **COMPRIMAȚI TARE ȘI REPEDE:**\n   * **Ritm:** 100-120 ori pe minut (Ritmul melodiei "Macarena" sau "Stayin' Alive").\n   * **Adâncime:** Apăsați toracele 5-6 cm.\n   * **Recul:** Lăsați pieptul să revină complet după fiecare compresie.\n4. **30:2:** Faceți 30 de compresii și 2 ventilații (gură la gură) dacă știți cum. Dacă nu, faceți doar compresii fără oprire.`,
    warningES: `**⚠️ NO PARE:**\nNo pare las compresiones hasta que llegue la ambulancia, le traigan un desfibrilador o la víctima se despierte. Es agotador, túrnese con alguien cada 2 minutos si puede.`,
    warningRO: `**⚠️ NU VĂ OPRIȚI:**\nNu opriți compresiile până când nu sosește ambulanța, vi se aduce un defibrilator sau victima se trezește. Este epuizant, schimbați locul cu altcineva la fiecare 2 minute dacă este posibil.`
  },
  { 
    id: 'fa_heimlich', 
    category: 'vital', 
    type: 'Asfixia', 
    nameES: 'Maniobra de Heimlich (Atragantamiento)', 
    nameRO: 'Manevra Heimlich (Înecare/Obstrucție)', 
    descES: `**Cuando alguien se ahoga comiendo**\nSigno universal: La persona se lleva las manos al cuello, abre los ojos mucho, se pone roja/azul y **NO PUEDE HABLAR ni toser**. Si tose, anímele a toser, no le toque. Si no tose, actúe.`,
    descRO: `**Când cineva se îneacă mâncând**\nSemnul universal: Persoana își duce mâinile la gât, face ochii mari, se înroșește/învinețește și **NU POATE VORBI nici tuși**. Dacă tușește, încurajați-o să tușească, nu o atingeți. Dacă nu mai tușește, acționați.`,
    indicationES: `**La Técnica:**\n1. **5 Golpes en la Espalda:** Incline a la persona hacia adelante y dele 5 golpes secos y fuertes entre los omóplatos con la base de la mano.\n2. **5 Compresiones Abdominales (Heimlich):**\n   * Póngase detrás. Rodee su cintura con los brazos.\n   * Cierre un puño y póngalo entre el ombligo y las costillas.\n   * Cubra el puño con la otra mano.\n   * Tire con fuerza hacia **DENTRO y hacia ARRIBA** (como una letra J).\n3. Repita el ciclo 5 golpes - 5 compresiones hasta que expulse el objeto.`,
    indicationRO: `**Tehnica:**\n1. **5 Lovituri pe Spate:** Aplecați persoana în față și aplicați 5 lovituri seci și puternice între omoplați cu baza palmei.\n2. **5 Compresii Abdominale (Heimlich):**\n   * Așezați-vă în spate. Cuprindeți-i talia cu brațele.\n   * Strângeți pumnul și puneți-l între buric și coaste (epigastru).\n   * Acoperiți pumnul cu cealaltă mână.\n   * Trageți cu putere spre **INTERIOR și în SUS** (ca o literă J).\n3. Repetați ciclul 5 lovituri - 5 compresii până când expulzează obiectul.`,
    warningES: `**⚠️ SI PIERDE EL CONOCIMIENTO:**\nSi la persona deja de luchar y se desploma (inconsciente), déjela en el suelo con cuidado e **INICIE RCP** (compresiones en el pecho) inmediatamente. Las compresiones también ayudan a expulsar el objeto.`,
    warningRO: `**⚠️ DACĂ ÎȘI PIERDE CUNOȘTINȚA:**\nDacă persoana nu mai luptă și se prăbușește (inconștientă), așezați-o pe sol cu grijă și **ÎNCEPEȚI RCP** (compresii toracice) imediat. Compresiile ajută și ele la expulzarea obiectului.`
  },

  // ===========================================================================
  // 2. URGENCIAS MÉDICAS COMUNES
  // ===========================================================================
  {
    id: 'fa_shock',
    category: 'cardio',
    type: 'Lipotimia / Shock',
    nameES: 'Posición Antishock (Trendelenburg)', 
    nameRO: 'Poziție Anti-șoc (Trendelenburg)',
    descES: `**Mareos y Bajadas de Tensión**\nSi un paciente se pone pálido, suda frío y dice que se marea, probablemente le ha bajado la tensión (presión arterial) y no llega sangre al cerebro.`,
    descRO: `**Amețeli și Scăderi de Tensiune**\nDacă un pacient devine palid, are transpirații reci și spune că amețește, probabil i-a scăzut tensiunea (presiunea arterială) și nu ajunge suficient sânge la creier.`,
    indicationES: `**Actuación Rápida:**\n1. **Tumbado:** Acueste a la persona boca arriba (en el suelo o cama).\n2. **Piernas Arriba:** Eleve las piernas del paciente (puede ponerlas sobre una silla o cojines). Esto hace que la sangre de las piernas baje por gravedad hacia el corazón y el cerebro.\n3. **Aire:** Afloje ropa apretada (corbatas, cinturones) y asegure ventilación.\n4. **No dar nada:** No le dé agua ni comida hasta que se recupere totalmente.`,
    indicationRO: `**Acțiune Rapidă:**\n1. **Culcat:** Întindeți persoana pe spate (pe podea sau în pat).\n2. **Picioarele Sus:** Ridicați picioarele pacientului (le puteți pune pe un scaun sau perne). Acest lucru face ca sângele din picioare să coboare gravitațional spre inimă și creier.\n3. **Aer:** Slăbiți hainele strâmte (cravate, curele) și asigurați ventilația.\n4. **Nimic pe gură:** Nu îi dați apă sau mâncare până nu își revine complet.`
  },
  {
    id: 'fa_pls',
    category: 'neuro',
    type: 'Posición de Seguridad',
    nameES: 'Posición Lateral de Seguridad (PLS)', 
    nameRO: 'Poziție Laterală de Siguranță (PLS)',
    descES: `**Para el Inconsciente que Respira**\nSi una persona está inconsciente (no despierta) pero SÍ respira con normalidad, nunca la deje boca arriba. La lengua podría caer hacia atrás y asfixiarla, o podría vomitar y tragárselo.\n\n**Solución:** Ponerla de lado.`,
    descRO: `**Pentru Inconștientul care Respiră**\nDacă o persoană este inconștientă (nu se trezește) dar respiră normal, nu o lăsați niciodată pe spate. Limba ar putea cădea înapoi și ar asfixia-o, sau ar putea vomita și aspira voma.\n\n**Soluția:** Puneți-o pe o parte.`,
    indicationES: `**Cómo hacerlo:**\n1. Túmbele boca arriba.\n2. Coja el brazo más cercano a usted y póngalo en ángulo recto (saludando).\n3. Coja el otro brazo y póngaselo sobre la mejilla contraria.\n4. Doble la rodilla de la pierna más lejana.\n5. Tire de la rodilla hacia usted para girar al paciente de lado.\n6. Incline su cabeza un poco hacia atrás para abrir la vía aérea.`,
    indicationRO: `**Cum se face:**\n1. Întindeți-l pe spate.\n2. Luați brațul cel mai apropiat și puneți-l în unghi drept (ca un salut).\n3. Luați celălalt braț și puneți dosul palmei pe obrazul opus.\n4. Îndoiți genunchiul piciorului cel mai îndepărtat.\n5. Trageți de genunchi spre dumneavoastră pentru a întoarce pacientul pe o parte.\n6. Înclinați-i capul ușor pe spate pentru a deschide calea respiratorie.`
  },
  {
    id: 'fa_conv',
    category: 'neuro',
    type: 'Neurología',
    nameES: 'Crisis Convulsiva (Ataque Epiléptico)', 
    nameRO: 'Criză Convulsivă (Atac Epileptic)',
    descES: `**Mantener la Calma es Clave**\nVer una convulsión asusta. La persona cae al suelo, se pone rígida y se sacude. La mayoría de crisis paran solas en 2 minutos. Su trabajo es evitar que se haga daño mientras pasa.`,
    descRO: `**Păstrarea calmului este cheia**\nVederea unei convulsii sperie. Persoana cade la pământ, devine rigidă și se scutură. Majoritatea crizelor se opresc singure în 2 minute. Treaba dumneavoastră este să preveniți rănirea în acest timp.`,
    indicationES: `**Lo que SÍ debe hacer:**\n* **Proteger:** Ponga algo blando bajo su cabeza (chaqueta, cojín) para que no se golpee contra el suelo.\n* **Espacio:** Aparte muebles u objetos con los que pueda chocarse.\n* **Cronometrar:** Mire el reloj. Si dura más de 5 minutos, es una emergencia médica grave (Status).\n* **Al terminar:** Póngalo de lado (PLS) y déjelo descansar.`,
    indicationRO: `**Ce TREBUIE să faceți:**\n* **Protejați:** Puneți ceva moale sub cap (haină, pernă) ca să nu se lovească de sol.\n* **Spațiu:** Îndepărtați mobila sau obiectele de care s-ar putea lovi.\n* **Cronometrați:** Uitați-vă la ceas. Dacă durează mai mult de 5 minute, este o urgență medicală gravă (Status Epilepticus).\n* **La final:** Puneți-l pe o parte (PLS) și lăsați-l să se odihnească.`,
    warningES: `**⚠️ MITO PELIGROSO (LA LENGUA):**\n**JAMÁS** meta nada en la boca del paciente (ni cucharas, ni pañuelos, ni sus dedos). Es imposible que se trague la lengua. Si mete algo, le romperá los dientes o él le arrancará un dedo de un mordisco.`,
    warningRO: `**⚠️ MIT PERICULOS (LIMBA):**\n**NICIODATĂ** nu băgați nimic în gura pacientului (nici linguri, nici batiste, nici degetele). Este imposibil să-și înghită limba. Dacă băgați ceva, îi veți rupe dinții sau el vă va mușca grav degetele.`
  },
  {
    id: 'fa_hem',
    category: 'trauma',
    type: 'Trauma',
    nameES: 'Hemorragia Severa (Sangrado)', 
    nameRO: 'Hemoragie Severă (Sângerare)',
    descES: `**Parar la sangre**\nAnte un corte profundo o herida que sangra mucho, olvide el agua oxigenada. Necesita presión mecánica pura y dura.`,
    descRO: `**Oprirea sângelui**\nÎn fața unei tăieturi adânci sau a unei răni care sângerează mult, uitați de apa oxigenată. Aveți nevoie de presiune mecanică pură.`,
    indicationES: `**Pasos:**\n1. **Presión Directa:** Coja gasas, una toalla o ropa limpia y apriete FUERTE directamente sobre la herida con sus manos. Mantenga la presión sin parar.\n2. **No levantar:** Si la gasa se empapa de sangre, **NO LA QUITE**. Ponga más gasas limpias encima. Si quita la primera, arrancará el coágulo que se está formando y volverá a sangrar.\n3. **Elevación:** Si es un brazo o pierna, levántelo por encima del nivel del corazón.\n4. **Torniquete:** Solo úselo si la hemorragia es en una extremidad, es masiva (chorro) y la presión directa no funciona.`,
    indicationRO: `**Pași:**\n1. **Presiune Directă:** Luați comprese, un prosop sau haine curate și apăsați TARE direct pe rană cu mâinile. Mențineți presiunea fără oprire.\n2. **Nu ridicați:** Dacă compresa se îmbibă cu sânge, **NU O SCOATEȚI**. Puneți altele curate deasupra. Dacă o scoateți pe prima, veți smulge cheagul care se formează și va sângera din nou.\n3. **Ridicare:** Dacă este un braț sau un picior, ridicați-l deasupra nivelului inimii.\n4. **Garou:** Folosiți-l doar dacă hemoragia este la o extremitate, este masivă (țâșnește) și presiunea directă nu funcționează.`
  }
];