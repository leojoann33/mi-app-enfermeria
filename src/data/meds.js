// src/data/meds.js
// VADEMÉCUM PETRESCU-ENF2
// Nivel: Enfermería Experta y Reciclaje Profesional
// Fuente: CIMA (AEMPS) y Guías de Práctica Clínica

export const MEDS_DB = [
  // ===========================================================================
  // 1. ANALGESIA Y ANTIINFLAMATORIOS
  // ===========================================================================
  {
    id: 'top_001',
    name: 'Paracetamol (Acetaminofén)',
    cat: 'Analgésico / Antipirético',
    indES: `**Descripción General:**
Es el fármaco más utilizado en el entorno sanitario por su alto perfil de seguridad. Actúa elevando el umbral del dolor en el cerebro y regulando el centro de la temperatura.
**Importante:** A diferencia de otros calmantes, el Paracetamol **NO es antiinflamatorio**. No servirá para bajar la hinchazón de un golpe, solo para quitar el dolor.

**Indicaciones Principales:**
* **Dolor Leve o Moderado:** Es la primera elección para dolor de cabeza, dolor dental o molestias musculares.
* **Fiebre:** Es el medicamento más seguro y eficaz para bajar la fiebre en pacientes de todas las edades.`,
    doseES: `**Pautas de Administración (Posología):**

**En Adultos:**
* **Vía Oral:** La dosis estándar es de **500 miligramos** o **1 gramo** cada 6 u 8 horas. No se debe superar nunca la dosis de 4 gramos en un día (24 horas).
* **Vía Intravenosa (Perfusión):** El frasco de 1 gramo (100 ml) se debe administrar en un tiempo aproximado de **15 minutos**.
* **Nota de seguridad:** Debe haber un intervalo mínimo de 4 horas entre cada dosis.

**En Niños (Pediatría):**
* La dosis se calcula obligatoriamente por peso: **10 a 15 mg por cada kilogramo** de peso del niño, cada 4 o 6 horas.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Toxicidad Hepática (Hígado):** Aunque es muy seguro, en dosis excesivas destruye las células del hígado de forma irreversible. Tenga mucha precaución en pacientes con problemas de alcoholismo o hepatitis.
* **Antídoto:** En caso de sobredosis accidental, el antídoto específico es la **N-Acetilcisteína**.
* **Embarazo:** Categoría B. Se considera el analgésico más seguro para utilizar durante el embarazo y la lactancia.`,
    indRO: `**Descriere Generală:**
Este cel mai utilizat medicament în mediul sanitar datorită profilului său ridicat de siguranță. Acționează prin ridicarea pragului durerii în creier și reglarea centrului temperaturii.
**Important:** Spre deosebire de alte calmante, Paracetamolul **NU este antiinflamator**. Nu va reduce inflamația (umflătura) unei lovituri, ci doar durerea.

**Indicații Principale:**
* **Durere Ușoară sau Moderată:** Este prima alegere pentru dureri de cap, dureri dentare sau disconfort muscular.
* **Febră:** Este cel mai sigur și eficient medicament pentru scăderea febrei la pacienții de toate vârstele.`,
    doseRO: `**Ghid de Administrare (Posologie):**

**La Adulți:**
* **Calea Orală:** Doza standard este de **500 mg** sau **1 gram** la fiecare 6 sau 8 ore. Nu trebuie depășită niciodată doza de 4 grame într-o zi (24 de ore).
* **Calea Intravenoasă (Perfuzie):** Flaconul de 1 gram (100 ml) trebuie administrat într-un timp aproximativ de **15 minute**.
* **Notă de siguranță:** Trebuie să existe un interval minim de 4 ore între fiecare doză.

**La Copii (Pediatrie):**
* Doza se calculează obligatoriu în funcție de greutate: **10 până la 15 mg pentru fiecare kilogram** din greutatea copilului, la fiecare 4 sau 6 ore.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Toxicitate Hepatică (Ficat):** Deși este foarte sigur, în doze excesive distruge celulele ficatului în mod ireversibil. Aveți mare precauție la pacienții cu probleme de alcoolism sau hepatită.
* **Antidot:** În caz de supradozaj accidental, antidotul specific este **N-Acetilcisteina**.
* **Sarcină:** Categoria B. Este considerat cel mai sigur analgezic pentru utilizare în timpul sarcinii și alăptării.`
  },
  {
    id: 'top_002',
    name: 'Metamizol (Dipirona)',
    cat: 'Analgésico / Espasmolítico',
    indES: `**Descripción General:**
Conocido popularmente como "Nolotil". Es un analgésico potente que tiene una propiedad única: es **Espasmolítico**. Esto significa que relaja la musculatura de las vísceras, calmando los retortijones.

**Indicaciones Principales:**
* **Dolor Agudo Moderado-Severo:** Muy utilizado tras operaciones quirúrgicas o traumatismos.
* **Cólicos:** Es el fármaco ideal para el cólico nefrítico (riñón) o biliar, ya que relaja el espasmo del conducto.
* **Fiebre Alta:** Se usa cuando el paracetamol no es suficiente para bajar la temperatura.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Vía Oral:** Cápsulas de 575 mg cada 6 u 8 horas.
* **Vía Intravenosa / Intramuscular:** Una ampolla de 2 gramos cada 8 horas.
* **¡MUY IMPORTANTE (Vía IV):** Si se administra por vena, **NUNCA** debe ponerse rápido (en bolo). Debe diluirse en suero y pasarse lentamente en al menos **20 a 30 minutos**. Si se inyecta rápido, puede provocar una bajada brusca de tensión (hipotensión severa).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Hipotensión:** Vigile la Tensión Arterial durante su administración intravenosa.
* **Agranulocitosis:** Es un efecto secundario raro pero muy grave donde bajan las defensas del paciente. Por esta razón, está prohibido en muchos países (como Reino Unido o EEUU). Tenga precaución con turistas de estos países.
* **Alergias:** Pregunte siempre si el paciente es alérgico a las "pirazolonas".`,
    indRO: `**Descriere Generală:**
Cunoscut popular ca "Nolotil". Este un analgezic puternic care are o proprietate unică: este **Spasmolitic**. Aceasta înseamnă că relaxează musculatura viscerelor, calmând crampele severe.

**Indicații Principale:**
* **Durere Acută Moderată-Severă:** Foarte utilizat după operații chirurgicale sau traumatisme.
* **Colici:** Este medicamentul ideal pentru colica renală (rinichi) sau biliară, deoarece relaxează spasmul canalului.
* **Febră Mare:** Se folosește când paracetamolul nu este suficient pentru a scădea temperatura.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Calea Orală:** Capsule de 575 mg la fiecare 6 sau 8 ore.
* **Calea Intravenoasă / Intramusculară:** O fiolă de 2 grame la fiecare 8 ore.
* **FOARTE IMPORTANT (Calea IV):** Dacă se administrează pe venă, **NICIODATĂ** nu trebuie pus rapid (în bolus). Trebuie diluat în ser și administrat lent în cel puțin **20 - 30 de minute**. Dacă se injectează rapid, poate provoca o scădere bruscă a tensiunii (hipotensiune severă).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Hipotensiune:** Monitorizați Tensiunea Arterială în timpul administrării intravenoase.
* **Agranulocitoză:** Este un efect secundar rar, dar foarte grav, unde scad globulele albe (imunitatea) pacientului. Din acest motiv, este interzis în multe țări (precum Marea Britanie sau SUA). Aveți precauție cu turiștii din aceste țări.
* **Alergii:** Întrebați întotdeauna dacă pacientul este alergic la "pirazolone".`
  },
  {
    id: 'top_003',
    name: 'Ibuprofeno',
    cat: 'AINE (Antiinflamatorio)',
    indES: `**Descripción General:**
Pertenece al grupo de los AINE (Antiinflamatorios No Esteroideos). Su función principal es reducir la inflamación, lo que a su vez calma el dolor y baja la fiebre.

**Indicaciones Principales:**
* **Procesos Inflamatorios:** Esguinces, golpes, tendinitis o artritis.
* **Dolor asociado a inflamación:** Dolor de muelas (odontalgia) o dolor menstrual.
* **Fiebre:** También es efectivo como antitérmico.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **400 mg:** Es la dosis analgésica estándar. Se toma cada 8 horas.
* **600 mg:** Dosis antiinflamatoria más potente. Cada 8 horas. (Nota: Se abusa de esta dosis; a menudo 400mg es suficiente y daña menos el estómago).
* **Dosis Techo:** No superar los 2400 mg al día.

**En Niños (Dalsy/Junifen):**
* La dosis habitual es de **20 a 30 mg por kilo de peso al día**, repartido en 3 o 4 tomas.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Daño Gástrico:** Es muy agresivo para el estómago. Debe administrarse **SIEMPRE con alimentos** o con el estómago lleno. En tratamientos largos, se recomienda usar un protector (Omeprazol).
* **Riñón y Corazón:** Tener precaución en pacientes ancianos, con insuficiencia renal o hipertensión, ya que puede empeorar estas condiciones.
* **Embarazo:** Está **TOTALMENTE PROHIBIDO** en el tercer trimestre, ya que puede causar problemas cardiacos graves al feto.`,
    indRO: `**Descriere Generală:**
Aparține grupului AINS (Antiinflamatoare Nesteroidiene). Funcția sa principală este de a reduce inflamația, ceea ce la rândul său calmează durerea și scade febra.

**Indicații Principale:**
* **Procese Inflamatorii:** Entorse, lovituri, tendinite sau artrită.
* **Durere asociată cu inflamația:** Dureri de dinți (odontalgie) sau dureri menstruale.
* **Febră:** Este de asemenea eficient ca antitermic.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **400 mg:** Este doza analgezică standard. Se ia la fiecare 8 ore.
* **600 mg:** Doză antiinflamatoare mai puternică. La fiecare 8 ore. (Notă: Se abuzează de această doză; adesea 400mg este suficient și dăunează mai puțin stomacului).
* **Doza Maximă:** A nu se depăși 2400 mg pe zi.

**La Copii (Dalsy/Junifen):**
* Doza obișnuită este de **20 până la 30 mg pe kilogram corp pe zi**, împărțit în 3 sau 4 prize.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Afectare Gastrică:** Este foarte agresiv pentru stomac. Trebuie administrat **ÎNTOTDEAUNA cu alimente** sau pe stomacul plin. În tratamente lungi, se recomandă utilizarea unui protector (Omeprazol).
* **Rinichi și Inimă:** Precauție la pacienții vârstnici, cu insuficiență renală sau hipertensiune, deoarece poate agrava aceste condiții.
* **Sarcină:** Este **TOTAL INTERZIS** în al treilea trimestru, deoarece poate cauza probleme cardiace grave fătului.`
  },
  {
    id: 'top_004',
    name: 'Dexketoprofeno',
    cat: 'AINE (Analgésico Potente)',
    indES: `**Descripción General:**
Conocido por la marca "Enantyum". Es un antiinflamatorio de acción muy rápida. Es como el "hermano potente" del ibuprofeno, diseñado para actuar en pocos minutos.

**Indicaciones Principales:**
* **Dolor Agudo Intenso:** Se utiliza cuando el dolor es fuerte, como en un lumbago agudo ("se ha quedado clavado"), dolor post-operatorio o cólicos nefríticos.
* **Traumatismos:** Golpes fuertes o fracturas.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Vía Oral:** Comprimidos o sobres de 25 mg cada 8 horas.
* **Vía Intravenosa / Intramuscular:** Ampollas de 50 mg. Se administran cada 8 o 12 horas.
* **Administración IV:** Debe diluirse en al menos 50-100 ml de suero y pasarse en 10-15 minutos. Proteger la ampolla de la luz si no se usa inmediatamente.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Gastrolesivo:** Al igual que el ibuprofeno, es muy dañino para el estómago. Administrar con comida.
* **Insuficiencia Renal:** Está contraindicado si el paciente tiene un fallo renal moderado o grave.
* **Fotosensibilidad:** Algunos pacientes pueden sufrir reacciones en la piel si toman el sol mientras usan este medicamento.`,
    indRO: `**Descriere Generală:**
Cunoscut sub marca "Enantyum". Este un antiinflamator cu acțiune foarte rapidă. Este ca "fratele puternic" al ibuprofenului, conceput să acționeze în câteva minute.

**Indicații Principale:**
* **Durere Acută Intensă:** Se utilizează când durerea este puternică, cum ar fi într-un lumbago acut ("a rămas blocat"), durere post-operatorie sau colici renale.
* **Traumatisme:** Lovituri puternice sau fracturi.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Calea Orală:** Comprimate sau plicuri de 25 mg la fiecare 8 ore.
* **Calea Intravenoasă / Intramusculară:** Fiole de 50 mg. Se administrează la fiecare 8 sau 12 ore.
* **Administrare IV:** Trebuie diluat în cel puțin 50-100 ml de ser și administrat în 10-15 minute. Protejați fiola de lumină dacă nu se folosește imediat.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Gastrolesiv:** La fel ca ibuprofenul, este foarte dăunător pentru stomac. A se administra cu mâncare.
* **Insuficiență Renală:** Este contraindicat dacă pacientul are o disfuncție renală moderată sau severă.
* **Fotosensibilitate:** Unii pacienți pot suferi reacții cutanate dacă se expun la soare în timp ce folosesc acest medicament.`
  },

  // ===========================================================================
  // 2. ANTIBIÓTICOS (Uso Común)
  // ===========================================================================
  {
    id: 'top_005',
    name: 'Amoxicilina',
    cat: 'Antibiótico (Penicilina)',
    indES: `**Descripción General:**
Es un antibiótico de la familia de las penicilinas. Actúa matando a las bacterias al destruir su pared celular. Es el antibiótico "de batalla" para infecciones comunes.

**Indicaciones Principales:**
* **Infecciones Respiratorias:** Faringitis bacteriana (cuando hay placas de pus), amigdalitis, bronquitis o neumonía simple.
* **Infecciones Dentales:** Abscesos o flemones.
* **Infecciones de Oído:** Otitis media.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* La pauta clásica es de **500 mg cada 8 horas**.
* En infecciones más fuertes, se puede pautar **1 gramo cada 12 horas** o incluso cada 8 horas.

**En Niños:**
* La dosis habitual es de **40 a 80 mg por kilo de peso al día**, repartido en 3 tomas (cada 8 horas).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Alergia a la Penicilina:** Esta es la pregunta más importante. Debe preguntar **SIEMPRE**: "¿Es usted alérgico a la Penicilina?". Si lo es, administrar este fármaco podría causarle un shock anafiláctico mortal.
* **Diarrea:** Es frecuente que altere la flora intestinal. Se recomienda tomar yogur o probióticos, pero separados de la toma del antibiótico al menos 2 horas.
* **Embarazo:** Es un fármaco seguro (Categoría B).`,
    indRO: `**Descriere Generală:**
Este un antibiotic din familia penicilinelor. Acționează ucigând bacteriile prin distrugerea peretelui celular al acestora. Este antibioticul "de bază" pentru infecții comune.

**Indicații Principale:**
* **Infecții Respiratorii:** Faringită bacteriană (când există depozite de puroi), amigdalită, bronșită sau pneumonie simplă.
* **Infecții Dentare:** Abcese sau flegmoane.
* **Infecții ale Urechii:** Otită medie.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Schema clasică este de **500 mg la fiecare 8 ore**.
* În infecții mai puternice, se poate prescrie **1 gram la fiecare 12 ore** sau chiar la fiecare 8 ore.

**La Copii:**
* Doza obișnuită este de **40 până la 80 mg pe kilogram corp pe zi**, împărțit în 3 prize (la fiecare 8 ore).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Alergie la Penicilină:** Aceasta este cea mai importantă întrebare. Trebuie să întrebați **ÎNTOTDEAUNA**: "Sunteți alergic la Penicilină?". Dacă este, administrarea acestui medicament i-ar putea cauza un șoc anafilactic mortal.
* **Diaree:** Este frecvent să altereze flora intestinală. Se recomandă consumul de iaurt sau probiotice, dar separate de administrarea antibioticului cu cel puțin 2 ore.
* **Sarcină:** Este un medicament sigur (Categoria B).`
  },
  {
    id: 'top_006',
    name: 'Amoxicilina + Clavulánico',
    cat: 'Antibiótico (Amplio Espectro)',
    indES: `**Descripción General:**
Conocido como "Augmentine". Combina la Amoxicilina con Ácido Clavulánico. El Ácido Clavulánico no mata bacterias por sí solo, pero actúa como un "escudo" que impide que las bacterias resistentes destruyan la Amoxicilina. Juntos son muy potentes.

**Indicaciones Principales:**
* Infecciones que no responden a la amoxicilina sola.
* Neumonías, Sinusitis, Otitis recurrentes.
* **Infecciones de piel:** Mordeduras de animales, heridas infectadas.
* **Infecciones de orina (Cistitis).**`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Vía Oral:** Comprimidos de **875/125 mg** cada 8 horas.
* **Vía Intravenosa:** Viales de 1g/200mg. Se administran cada 8 horas. **IMPORTANTE:** Pasar la perfusión lentamente, en unos **30 a 40 minutos**, para evitar irritación de la vena.

**Consejo Profesional:** Se recomienda tomar al principio de las comidas para mejorar la tolerancia del estómago.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Diarrea:** Es el efecto secundario más frecuente debido al ácido clavulánico, que acelera el intestino.
* **Toxicidad Hepática:** En tratamientos largos o en ancianos, puede afectar al hígado.
* **Alergias:** Totalmente prohibido en alérgicos a penicilina.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Augmentin". Combină Amoxicilina cu Acidul Clavulanic. Acidul Clavulanic nu ucide bacteriile singur, dar acționează ca un "scut" care împiedică bacteriile rezistente să distrugă Amoxicilina. Împreună sunt foarte puternice.

**Indicații Principale:**
* Infecții care nu răspund la amoxicilină simplă.
* Pneumonii, Sinuzite, Otite recurente.
* **Infecții ale pielii:** Mușcături de animale, răni infectate.
* **Infecții urinare (Cistite).**`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Calea Orală:** Comprimate de **875/125 mg** la fiecare 8 ore.
* **Calea Intravenoasă:** Flacoane de 1g/200mg. Se administrează la fiecare 8 ore. **IMPORTANT:** Administrați perfuzia lent, în aproximativ **30 - 40 de minute**, pentru a evita iritarea venei.

**Sfat Profesional:** Se recomandă administrarea la începutul meselor pentru a îmbunătăți toleranța stomacului.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Diaree:** Este efectul secundar cel mai frecvent din cauza acidului clavulanic, care accelerează tranzitul intestinal.
* **Toxicitate Hepatică:** În tratamente lungi sau la vârstnici, poate afecta ficatul.
* **Alergii:** Total interzis celor alergici la penicilină.`
  },
  {
    id: 'top_007',
    name: 'Azitromicina',
    cat: 'Antibiótico (Macrólido)',
    indES: `**Descripción General:**
Es un antibiótico que impide que las bacterias fabriquen proteínas, frenando su crecimiento. Tiene una gran ventaja: se acumula en los tejidos y su efecto dura varios días después de la última toma.

**Indicaciones Principales:**
* **Alérgicos a Penicilina:** Es la alternativa número 1 para infecciones de garganta y pulmón en pacientes que no pueden tomar amoxicilina.
* **Infecciones Respiratorias:** Bronquitis, neumonías atípicas.
* **Enfermedades de Transmisión Sexual:** Tratamiento de elección para la Clamidia.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Pauta de 3 días:** Se toma 1 comprimido de 500 mg una vez al día, durante solo 3 días. El efecto antibiótico perdura en el cuerpo hasta 7-10 días.
* **Consejo de toma:** Se absorbe mejor con el estómago vacío (1 hora antes de comer o 2 horas después), aunque si da molestias se puede tomar con algo de comida.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Corazón (Arritmias):** Puede alterar el ritmo cardiaco (alargar el intervalo QT). Tenga precaución en pacientes con problemas de corazón previos.
* **Interacciones:** Puede potenciar el efecto del Sintrom (anticoagulante), aumentando el riesgo de sangrado.
* **Antiácidos:** No tomar junto con jarabes para el ardor (tipo Almax), ya que impiden que el antibiótico se absorba.`,
    indRO: `**Descriere Generală:**
Este un antibiotic care împiedică bacteriile să fabrice proteine, oprindu-le creșterea. Are un mare avantaj: se acumulează în țesuturi, iar efectul său durează mai multe zile după ultima doză.

**Indicații Principale:**
* **Alergici la Penicilină:** Este alternativa numărul 1 pentru infecții în gât și plămâni la pacienții care nu pot lua amoxicilină.
* **Infecții Respiratorii:** Bronșite, pneumonii atipice.
* **Boli cu Transmitere Sexuală:** Tratamentul de elecție pentru Chlamydia.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Regim de 3 zile:** Se ia 1 comprimat de 500 mg o dată pe zi, timp de doar 3 zile. Efectul antibiotic persistă în corp până la 7-10 zile.
* **Sfat de administrare:** Se absoarbe mai bine pe stomacul gol (1 oră înainte de masă sau 2 ore după), deși dacă provoacă disconfort se poate lua cu puțină mâncare.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Inimă (Aritmii):** Poate altera ritmul cardiac (prelungirea intervalului QT). Aveți precauție la pacienții cu probleme cardiace anterioare.
* **Interacțiuni:** Poate potența efectul Sintromului (anticoagulant), crescând riscul de sângerare.
* **Antiacide:** Nu luați împreună cu siropuri pentru arsuri gastrice (tip Almax/Maalox), deoarece împiedică absorbția antibioticului.`
  },
  {
    id: 'top_015',
    name: 'Ciprofloxacino',
    cat: 'Antibiótico (Quinolona)',
    indES: `**Descripción General:**
Antibiótico potente que actúa impidiendo que las bacterias copien su ADN, por lo que no pueden reproducirse. Es muy efectivo contra bacterias gram-negativas.

**Indicaciones Principales:**
* **Infecciones Urinarias Complicadas:** Pielonefritis (infección del riñón) o cistitis que no curan con otros fármacos.
* **Infecciones Abdominales:** Diarreas infecciosas graves (Salmonella).`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Vía Oral:** 500 mg cada 12 horas.
* **Vía Intravenosa:** 400 mg cada 12 horas. La perfusión debe ser lenta, en no menos de **60 minutos**, para evitar irritación venosa y bajadas de tensión.

**Consejo Dietético:** No debe tomarse junto con leche, yogur o suplementos de calcio/hierro, ya que estos impiden que el medicamento pase a la sangre.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Tendones:** Existe un riesgo real de inflamación o rotura del tendón de Aquiles, especialmente en ancianos y deportistas. Si el paciente nota dolor en el talón, debe consultar.
* **Fotosensibilidad:** Puede provocar quemaduras solares graves. El paciente debe evitar el sol durante el tratamiento.
* **Embarazo:** Generalmente contraindicado.`,
    indRO: `**Descriere Generală:**
Antibiotic puternic care acționează împiedicând bacteriile să își copieze ADN-ul, deci nu se pot reproduce. Este foarte eficient împotriva bacteriilor gram-negative.

**Indicații Principale:**
* **Infecții Urinare Complicate:** Pielonefrită (infecția rinichiului) sau cistite care nu se vindecă cu alte medicamente.
* **Infecții Abdominale:** Diaree infecțioasă gravă (Salmonella).`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Calea Orală:** 500 mg la fiecare 12 ore.
* **Calea Intravenoasă:** 400 mg la fiecare 12 ore. Perfuzia trebuie să fie lentă, în nu mai puțin de **60 de minute**, pentru a evita iritarea venoasă și scăderile de tensiune.

**Sfat Dietetic:** Nu trebuie luat împreună cu lapte, iaurt sau suplimente de calciu/fier, deoarece acestea împiedică trecerea medicamentului în sânge.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Tendoane:** Există un risc real de inflamație sau ruptură a tendonului lui Ahile, în special la vârstnici și sportivi. Dacă pacientul simte durere în călcâi, trebuie să consulte medicul.
* **Fotosensibilitate:** Poate provoca arsuri solare grave. Pacientul trebuie să evite soarele în timpul tratamentului.
* **Sarcină:** În general contraindicat.`
  },
  {
    id: 'top_016',
    name: 'Ceftriaxona',
    cat: 'Antibiótico (Cefalosporina 3ª Gen)',
    indES: `**Descripción General:**
Es un antibiótico de uso hospitalario muy común. Es similar a la penicilina pero mucho más resistente y potente. Se utiliza exclusivamente de forma inyectable.

**Indicaciones Principales:**
* **Infecciones Graves:** Neumonías que requieren ingreso, meningitis (llega muy bien al cerebro) o infecciones de riñón (pielonefritis).
* **Enfermedades de Transmisión Sexual:** Tratamiento de elección para la Gonorrea (dosis única).`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* La dosis habitual es de **1 gramo o 2 gramos una sola vez al día** (cada 24 horas).
* **Vía Intravenosa:** Diluir en 50-100 ml de suero y pasar en 30 minutos.
* **Vía Intramuscular:** Es una inyección muy dolorosa. Para evitar el sufrimiento del paciente, el polvo del antibiótico se debe disolver con **Lidocaína** (anestésico) al 1%. **¡ATENCIÓN!** Si se disuelve con lidocaína, **JAMÁS** se puede poner por vena (riesgo cardiaco mortal).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Alergia Cruzada:** Si el paciente es alérgico a la Penicilina, existe un pequeño riesgo de que también lo sea a la Ceftriaxona. Vigilar signos de alergia.
* **Incompatibilidad:** No mezclar nunca en la misma vía con soluciones que contengan **Calcio** (como el Ringer Lactato), ya que pueden formarse cristales en la sangre.`,
    indRO: `**Descriere Generală:**
Este un antibiotic de uz spitalicesc foarte comun. Este similar cu penicilina, dar mult mai rezistent și puternic. Se utilizează exclusiv sub formă injectabilă.

**Indicații Principale:**
* **Infecții Grave:** Pneumonii care necesită internare, meningită (ajunge foarte bine la creier) sau infecții renale (pielonefrită).
* **Boli cu Transmitere Sexuală:** Tratamentul de elecție pentru Gonoree (doză unică).`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Doza obișnuită este de **1 gram sau 2 grame o singură dată pe zi** (la fiecare 24 de ore).
* **Calea Intravenoasă:** Diluați în 50-100 ml de ser și administrați în 30 de minute.
* **Calea Intramusculară:** Este o injecție foarte dureroasă. Pentru a evita suferința pacientului, pulberea antibioticului trebuie dizolvată cu **Lidocaină** (anestezic) 1%. **ATENȚIE!** Dacă se dizolvă cu lidocaină, **NICIODATĂ** nu se poate administra pe venă (risc cardiac mortal).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Alergie Încrucișată:** Dacă pacientul este alergic la Penicilină, există un mic risc să fie și la Ceftriaxonă. Supravegheați semnele de alergie.
* **Incompatibilitate:** Nu amestecați niciodată pe aceeași cale cu soluții care conțin **Calciu** (cum ar fi Ringer Lactat), deoarece se pot forma cristale în sânge.`
  },

// ===========================================================================
  // 3. GASTROPROTECTORES Y DIGESTIVO
  // ===========================================================================
  {
    id: 'top_008',
    name: 'Omeprazol',
    cat: 'Protector Gástrico (IBP)',
    indES: `**Descripción General:**
Es un Inhibidor de la Bomba de Protones (IBP). Su función es bloquear la "fábrica" de ácido del estómago. Es fundamental entender que **no es un antiácido inmediato** (como el Almax), sino un preventivo que requiere tiempo para actuar.

**Indicaciones Principales:**
* **Gastroprotección:** Se prescribe para proteger el estómago cuando el paciente toma medicación agresiva (como Ibuprofeno, Corticoides o mucha medicación junta).
* **Patología Gástrica:** Reflujo gastroesofágico (ardores), hernia de hiato o tratamiento de úlceras.`,
    doseES: `**Pautas de Administración (La Regla de Oro):**

**En Adultos:**
* **Dosis Estándar:** 20 mg una vez al día.
* **El Momento Crítico:** Para que sea efectivo, debe tomarse **estrictamente en ayunas, 30 minutos antes del desayuno**.
* **¿Por qué?:** El fármaco necesita ácido para activarse, pero luego bloquea la producción. Si se toma con comida, su eficacia baja al 50%.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Déficit de Vitaminas:** El uso continuado durante años dificulta la absorción de Vitamina B12 y Magnesio. En ancianos puede provocar anemia o debilidad.
* **Osteoporosis:** El uso crónico en ancianos se asocia a un ligero aumento de riesgo de fracturas óseas.
* **Interacciones:** Puede alterar los niveles de otros fármacos. Consultar siempre si se añaden medicamentos nuevos.`,
    indRO: `**Descriere Generală:**
Este un Inhibitor de Pompă de Protoni (IPP). Funcția sa este de a bloca "fabrica" de acid din stomac. Este fundamental de înțeles că **nu este un antiacid imediat** (ca Maalox/Almax), ci un preventiv care necesită timp pentru a acționa.

**Indicații Principale:**
* **Gastroprotecție:** Se prescrie pentru a proteja stomacul când pacientul ia medicație agresivă (precum Ibuprofen, Corticoizi sau multe medicamente deodată).
* **Patologie Gastrică:** Reflux gastroesofagian (arsuri), hernie hiatală sau tratamentul ulcerelor.`,
    doseRO: `**Ghid de Administrare (Regula de Aur):**

**La Adulți:**
* **Doza Standard:** 20 mg o dată pe zi.
* **Momentul Critic:** Pentru a fi eficient, trebuie luat **strict pe stomacul gol, cu 30 de minute înainte de micul dejun**.
* **De ce?** Medicamentul are nevoie de acid pentru a se activa, dar apoi blochează producția. Dacă se ia cu mâncare, eficacitatea sa scade la 50%.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Deficit de Vitamine:** Utilizarea continuă timp de ani de zile îngreunează absorbția Vitaminei B12 și a Magneziului. La vârstnici poate provoca anemie sau slăbiciune.
* **Osteoporoză:** Utilizarea cronică la vârstnici se asociază cu o ușoară creștere a riscului de fracturi osoase.
* **Interacțiuni:** Poate altera nivelurile altor medicamente. Consultați întotdeauna dacă se adaugă medicamente noi.`
  },
  {
    id: 'top_009',
    name: 'Metoclopramida',
    cat: 'Antiemético / Procinético',
    indES: `**Descripción General:**
Conocido comúnmente como "Primperan". Tiene un efecto doble: actúa en el cerebro para quitar la sensación de náusea y en el estómago para "empujar" la comida hacia abajo (procinético), vaciándolo rápidamente.

**Indicaciones Principales:**
* **Náuseas y Vómitos:** De cualquier causa (virus, medicación, post-operatorio).
* **Problemas de vaciado:** Sensación de plenitud o digestiones muy lentas.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Vía Oral:** 10 mg (comprimido o jarabe) 3 veces al día, antes de las comidas.
* **Vía Intravenosa:** Una ampolla de 10 mg. **¡MUY IMPORTANTE!** Pasar lentamente en al menos **3 minutos**. Si se pasa rápido ("en bolo"), provoca una sensación horrible de ansiedad y ganas de "arrancarse la vía" (acatisia).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Reacción Extrapiramidal (Distonía):** Especialmente en niños y jóvenes, puede provocar una contractura muscular involuntaria en la cara o cuello (cuello torcido, ojos en blanco). Asusta mucho pero se revierte rápido con el antídoto (**Biperideno/Akineton**).
* **Somnolencia:** Puede dar sueño.`,
    indRO: `**Descriere Generală:**
Cunoscut comun ca "Primperan". Are un efect dublu: acționează în creier pentru a elimina senzația de greață și în stomac pentru a "împinge" mâncarea în jos (prochinetic), golindu-l rapid.

**Indicații Principale:**
* **Greață și Vărsături:** De orice cauză (virus, medicație, post-operator).
* **Probleme de golire:** Senzație de plenitudine sau digestii foarte lente.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Calea Orală:** 10 mg (comprimat sau sirop) de 3 ori pe zi, înainte de mese.
* **Calea Intravenoasă:** O fiolă de 10 mg. **FOARTE IMPORTANT!** Administrați lent în cel puțin **3 minute**. Dacă se administrează rapid ("în bolus"), provoacă o senzație oribilă de anxietate și dorința de a-și "smulge perfuzia" (acatizie).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Reacție Extrapiramidală (Distonie):** În special la copii și tineri, poate provoca o contractură musculară involuntară la față sau gât (gât strâmb, ochi dați peste cap). Sperie foarte tare, dar se remediază rapid cu antidotul (**Biperiden**).
* **Somnolență:** Poate provoca somn.`
  },

  // ===========================================================================
  // 4. SALUD MENTAL (Ansiedad e Insomnio)
  // ===========================================================================
  {
    id: 'top_010',
    name: 'Lorazepam',
    cat: 'Ansiolítico (Benzodiacepina)',
    indES: `**Descripción General:**
Conocido como "Orfidal". Es un tranquilizante de potencia media. Es la benzodiacepina de elección en pacientes ancianos o con problemas de hígado porque no sobrecarga la función hepática.

**Indicaciones Principales:**
* **Ansiedad:** Nerviosismo o estados de agitación.
* **Insomnio:** Dificultad para conciliar el sueño.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Dosis Estándar:** 1 mg al día. En ancianos, empezar con 0.5 mg (media pastilla).
* **Crisis de Ansiedad:** Se puede colocar el comprimido **debajo de la lengua (sublingual)**. Al deshacerse ahí, pasa directamente a la sangre y actúa en pocos minutos, mucho más rápido que tragado.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Dependencia:** Genera adicción física muy rápido. No se recomienda usar más de 2-4 semanas seguidas.
* **Síndrome de Abstinencia:** Si el paciente lo toma a diario, **NUNCA** retirarlo de golpe. Hay que bajar la dosis poco a poco para evitar rebote de ansiedad o incluso convulsiones.
* **Riesgo de Caídas:** En ancianos provoca inestabilidad y sedación. Vigilar al levantarse por la noche.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Orfidal". Este un tranchilizant de putere medie. Este benzodiazepina de elecție la pacienții vârstnici sau cu probleme hepatice, deoarece nu suprasolicită funcția ficatului.

**Indicații Principale:**
* **Anxietate:** Nervozitate sau stări de agitație.
* **Insomnie:** Dificultate în a adormi.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Doza Standard:** 1 mg pe zi. La vârstnici, începeți cu 0.5 mg (jumătate de pastilă).
* **Criză de Anxietate:** Se poate pune comprimatul **sub limbă (sublingual)**. Dizolvându-se acolo, trece direct în sânge și acționează în câteva minute, mult mai rapid decât dacă este înghițit.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Dependență:** Generează dependență fizică foarte rapid. Nu se recomandă utilizarea mai mult de 2-4 săptămâni la rând.
* **Sindrom de Sevraj:** Dacă pacientul îl ia zilnic, **NICIODATĂ** nu-l opriți brusc. Trebuie scăzută doza treptat pentru a evita revenirea anxietății sau chiar convulsii.
* **Risc de Cădere:** La vârstnici provoacă instabilitate și sedare. Supravegheați ridicarea din pat noaptea.`
  },
  {
    id: 'top_011',
    name: 'Diazepam',
    cat: 'Ansiolítico / Relajante Muscular',
    indES: `**Descripción General:**
Conocido como "Valium". Es una benzodiacepina de larga duración. A diferencia del Lorazepam, el Diazepam tiene un potente efecto **Relajante Muscular**.

**Indicaciones Principales:**
* **Contracturas Musculares:** Dolor de espalda, tortícolis.
* **Crisis de Ansiedad:** En urgencias.
* **Convulsiones:** Es el fármaco de primera línea para frenar una crisis epiléptica (IV o Rectal).`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Contracturas:** Dosis bajas (2.5 mg o 5 mg) suelen ser suficientes, a menudo combinado con analgésicos.
* **Ansiedad:** 5 mg o 10 mg.
* **Vía Intravenosa:** Irrita la vena. Pasar lento.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Acumulación:** Permanece en el cuerpo muchas horas (vida media larga). En ancianos puede acumularse y dejarlos "dormidos" o confusos durante días. Evitar en mayores de 65 años si es posible.
* **Depresión Respiratoria:** Cuidado si se mezcla con otros sedantes o alcohol.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Valium". Este o benzodiazepină cu durată lungă. Spre deosebire de Lorazepam, Diazepamul are un puternic efect **Relaxant Muscular**.

**Indicații Principale:**
* **Contracturi Musculare:** Durere de spate, torticolis.
* **Criză de Anxietate:** În urgențe.
* **Convulsii:** Este medicamentul de primă linie pentru a opri o criză epileptică (IV sau Rectal).`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Contracturi:** Doze mici (2.5 mg sau 5 mg) sunt de obicei suficiente, adesea combinat cu analgezice.
* **Anxietate:** 5 mg sau 10 mg.
* **Calea Intravenoasă:** Irită vena. Administrați lent.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Acumulare:** Rămâne în corp multe ore (timp de înjumătățire lung). La vârstnici se poate acumula și îi poate lăsa "adormiți" sau confuzi zile întregi. Evitați la cei peste 65 de ani dacă este posibil.
* **Depresie Respiratorie:** Atenție dacă se amestecă cu alte seditive sau alcool.`
  },

  // ===========================================================================
  // 5. CARDIOVASCULAR (Tensión y Corazón)
  // ===========================================================================
  {
    id: 'top_012',
    name: 'Enalapril',
    cat: 'Antihipertensivo (IECA)',
    indES: `**Descripción General:**
Pertenece al grupo de los IECA. Funciona dilatando los vasos sanguíneos para que la sangre fluya con menos resistencia, bajando así la presión. También protege el corazón remodelándolo.

**Indicaciones Principales:**
* **Hipertensión Arterial (HTA).**
* **Insuficiencia Cardiaca:** Ayuda al corazón débil a bombear con menos esfuerzo.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* Se suele iniciar con dosis bajas (5 mg) y subir progresivamente hasta 20 mg según la tensión.
* Generalmente una toma diaria por la mañana.
* **Tensión:** Comprobar la tensión arterial periódicamente antes de dar la medicación, especialmente al inicio del tratamiento.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Tos Seca:** Es el efecto secundario más característico. Una tos picajosa y persistente que no cede. Si aparece, el médico deberá cambiar el fármaco.
* **Mareo:** Precaución al levantarse bruscamente de la cama (hipotensión ortostática).
* **Potasio:** Puede elevar ligeramente el potasio en sangre.`,
    indRO: `**Descriere Generală:**
Aparține grupului IECA. Funcționează prin dilatarea vaselor de sânge pentru ca sângele să curgă cu mai puțină rezistență, scăzând astfel presiunea. De asemenea, protejează inima, remodelând-o.

**Indicații Principale:**
* **Hipertensiune Arterială (HTA).**
* **Insuficiență Cardiacă:** Ajută inima slăbită să pompeze cu mai puțin efort.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Se începe de obicei cu doze mici (5 mg) și se crește progresiv până la 20 mg în funcție de tensiune.
* General o singură priză zilnică, dimineața.
* **Tensiune:** Verificați tensiunea arterială periodic înainte de a da medicamentul, în special la începutul tratamentului.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Tuse Seacă:** Este efectul secundar cel mai caracteristic. O tuse iritativă și persistentă care nu cedează. Dacă apare, medicul va trebui să schimbe medicamentul.
* **Amețeală:** Precauție la ridicarea bruscă din pat (hipotensiune ortostatică).
* **Potasiu:** Poate crește ușor potasiul în sânge.`
  },
  {
    id: 'top_013',
    name: 'Atorvastatina',
    cat: 'Hipolipemiante (Estatina)',
    indES: `**Descripción General:**
Fármaco diseñado para reducir los niveles de colesterol en sangre, frenando su producción en el hígado.

**Indicaciones Principales:**
* **Hipercolesterolemia:** Niveles altos de colesterol LDL ("malo").
* **Prevención Cardiovascular:** Se da a casi todos los pacientes que han tenido un infarto o ictus, aunque tengan el colesterol "normal", para evitar que se repita.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* Dosis variable: desde 10 mg hasta 80 mg (dosis intensiva post-infarto).
* **Cronobiología:** Se recomienda tomar por la **noche/cena**. ¿Por qué? Porque el hígado produce la mayor parte del colesterol mientras dormimos, así que el fármaco es más eficaz en ese momento.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Dolor Muscular (Rabdomiólisis):** Es el efecto adverso grave a vigilar. Si el paciente se queja de dolor muscular en piernas/brazos, debilidad o orina oscura sin haber hecho ejercicio, avisar al médico inmediatamente.
* **Interacciones:** No tomar con zumo de pomelo (aumenta la toxicidad).`,
    indRO: `**Descriere Generală:**
Medicament conceput pentru a reduce nivelurile de colesterol din sânge, frânând producția acestuia în ficat.

**Indicații Principale:**
* **Hipercolesterolemie:** Niveluri ridicate de colesterol LDL ("rău").
* **Prevenție Cardiovasculară:** Se administrează aproape tuturor pacienților care au avut un infarct sau AVC, chiar dacă au colesterolul "normal", pentru a evita recidiva.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Doză variabilă: de la 10 mg până la 80 mg (doză intensivă post-infarct).
* **Cronobiologie:** Se recomandă administrarea **seara/la cină**. De ce? Pentru că ficatul produce cea mai mare parte a colesterolului în timp ce dormim, astfel medicamentul este mai eficient în acel moment.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Durere Musculară (Rabdomioliză):** Este efectul advers grav de supravegheat. Dacă pacientul se plânge de dureri musculare la picioare/brațe, slăbiciune sau urină închisă la culoare fără a fi făcut efort, anunțați medicul imediat.
* **Interacțiuni:** A nu se lua cu suc de grapefruit (crește toxicitatea).`
  },
  {
    id: 'top_014',
    name: 'Furosemida',
    cat: 'Diurético de Asa',
    indES: `**Descripción General:**
Conocido como "Seguril". Es un diurético potente y de acción rápida. Obliga al riñón a eliminar agua y sal del cuerpo a través de la orina.

**Indicaciones Principales:**
* **Edemas:** Retención de líquidos (piernas hinchadas).
* **Insuficiencia Cardiaca / Edema Agudo de Pulmón:** Para "secar" los pulmones y permitir respirar mejor.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Vía Oral:** Normalmente 40 mg. Se recomienda tomar **por la mañana** para no interrumpir el sueño por la noche con ganas de orinar.
* **Vía Intravenosa:** En urgencias. Hace efecto en pocos minutos.
* **Seguridad:** Asegúrese de que el paciente tenga acceso fácil al baño o una botella a mano. Orinará mucho y con urgencia.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Hipopotasemia (Potasio Bajo):** Al orinar tanto se pierde potasio. Esto puede dar calambres musculares y arritmias. Vigilar analíticas y a veces suplementar.
* **Tensión Arterial:** Baja la tensión (al quitar líquido del sistema). No dar si el paciente está hipotenso.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Seguril". Este un diuretic puternic și cu acțiune rapidă. Obligă rinichiul să elimine apa și sarea din corp prin urină.

**Indicații Principale:**
* **Edeme:** Retenție de lichide (picioare umflate).
* **Insuficiență Cardiacă / Edem Pulmonar Acut:** Pentru a "usca" plămânii și a permite o respirație mai bună.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Calea Orală:** De obicei 40 mg. Se recomandă administrarea **dimineața** pentru a nu întrerupe somnul noaptea cu nevoia de a urina.
* **Calea Intravenoasă:** În urgențe. Își face efectul în câteva minute.
* **Siguranță:** Asigurați-vă că pacientul are acces ușor la toaletă sau un urinar la îndemână. Va urina mult și urgent.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Hipopotasemie (Potasiu Scăzut):** Urinând atât de mult se pierde potasiu. Asta poate da crampe musculare și aritmii. Monitorizați analizele și uneori suplimentați.
* **Tensiune Arterială:** Scade tensiunea (eliminând lichid din sistem). Nu administrați dacă pacientul este hipotensiv.`
  },

  // ===========================================================================
  // 6. ANTICOAGULANTES (Prevenir trombos)
  // ===========================================================================
  {
    id: 'top_015',
    name: 'Enoxaparina',
    cat: 'Heparina de Bajo Peso Molecular',
    indES: `**Descripción General:**
Conocida como "Clexane". Es un anticoagulante inyectable que previene la formación de coágulos (trombos) en la sangre.

**Indicaciones Principales:**
* **Profilaxis (Prevención):** En pacientes encamados, con escayolas o recién operados, para evitar que se formen trombos en las piernas por no moverse.
* **Tratamiento:** Para tratar una trombosis ya existente.`,
    doseES: `**Pautas de Administración (Técnica Correcta):**

**Vía Subcutánea (Pinchazo):**
* **Lugar:** En el abdomen (la "tripa"), respetando unos 4-5 cm alrededor del ombligo.
* **La Burbuja:** Las jeringas traen una burbuja de aire. **NO QUITARLA**. Sirve para sellar el líquido dentro y que no salga ni haga hematoma.
* **El Pinchazo:** Pellizcar la piel, clavar la aguja recta (90º) y administrar.
* **¡PROHIBIDO FROTAR!:** Después de pinchar, nunca frote la zona. Si frota, romperá los capilares y saldrá un hematoma enorme.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Sangrado:** Vigilar si aparecen hematomas espontáneos, sangre en nariz o encías.
* **Plaquetas:** En tratamientos largos puede bajar las plaquetas (trombocitopenia).`,
    indRO: `**Descriere Generală:**
Cunoscută ca "Clexane". Este un anticoagulant injectabil care previne formarea cheagurilor (trombilor) în sânge.

**Indicații Principale:**
* **Profilaxie (Prevenție):** La pacienții imobilizați la pat, cu ghips sau proaspăt operați, pentru a evita formarea trombilor în picioare din cauza lipsei de mișcare.
* **Tratament:** Pentru a trata o tromboză deja existentă.`,
    doseRO: `**Ghid de Administrare (Tehnică Corectă):**

**Calea Subcutanată (Injecție):**
* **Locul:** În abdomen (burtă), respectând aproximativ 4-5 cm în jurul buricului.
* **Bula de aer:** Seringile vin cu o bulă de aer. **NU O SCOATEȚI**. Servește pentru a sigila lichidul înăuntru și a preveni ieșirea acestuia sau formarea hematomului.
* **Înțepătura:** Prindeți pielea (pliu), introduceți acul drept (90º) și administrați.
* **INTERZIS FRECATUL!:** După injecție, nu frecați niciodată zona. Dacă frecați, veți rupe capilarele și va apărea un hematom uriaș.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Sângerare:** Supravegheați apariția hematoamelor spontane, sânge din nas sau gingii.
* **Trombocite:** În tratamente lungi poate scădea numărul de trombocite (trombocitopenie).`
  },
  {
    id: 'top_016',
    name: 'Acenocumarol',
    cat: 'Anticoagulante Oral (Anti-Vit K)',
    indES: `**Descripción General:**
El famoso "Sintrom". Impide que la sangre coagule bloqueando la Vitamina K. Es un fármaco delicado que requiere controles frecuentes.

**Indicaciones Principales:**
* **Fibrilación Auricular:** Para evitar ictus.
* **Válvulas cardiacas metálicas.**`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Dosis Variable:** La dosis cambia según el análisis de sangre (INR). La enfermera o el médico le dirán cuánto tomar cada día (ej: media, tres cuartos...).
* **Horario:** Debe tomarse **siempre a la misma hora**, preferiblemente antes de la cena, separado de las comidas principales.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **La Dieta (Vitamina K):** Las verduras de hoja verde (espinacas, brócoli, lechuga) contienen mucha Vitamina K y "cortan" el efecto del Sintrom. No están prohibidas, pero el paciente debe comer **siempre la misma cantidad**, no darse atracones un día y nada al otro.
* **Interacciones:** Muchos medicamentos alteran el Sintrom (antibióticos, antiinflamatorios). El paciente debe avisar siempre que toma Sintrom.`,
    indRO: `**Descriere Generală:**
Faimosul "Sintrom". Împiedică coagularea sângelui blocând Vitamina K. Este un medicament delicat care necesită controale frecvente.

**Indicații Principale:**
* **Fibrilație Atrială:** Pentru a evita AVC-ul.
* **Valve cardiace metalice.**`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Doză Variabilă:** Doza se schimbă în funcție de analiza de sânge (INR). Asistenta sau medicul vă vor spune cât să luați în fiecare zi (ex: jumătate, trei sferturi...).
* **Orar:** Trebuie luat **întotdeauna la aceeași oră**, preferabil înainte de cină, separat de mesele principale.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Dieta (Vitamina K):** Legumele cu frunze verzi (spanac, broccoli, salată) conțin multă Vitamina K și "taie" efectul Sintromului. Nu sunt interzise, dar pacientul trebuie să mănânce **întotdeauna aceeași cantitate**, să nu facă excese într-o zi și nimic în alta.
* **Interacțiuni:** Multe medicamente alterează efectul Sintromului (antibiotice, antiinflamatoare). Pacientul trebuie să anunțe întotdeauna că ia Sintrom.`
  },

  // ===========================================================================
  // 7. ENDOCRINO (Azúcar)
  // ===========================================================================
  {
    id: 'top_017',
    name: 'Metformina',
    cat: 'Antidiabético Oral',
    indES: `**Descripción General:**
Es el pilar del tratamiento de la Diabetes Tipo 2. No aumenta la insulina, sino que ayuda al cuerpo a aprovechar mejor la que ya tiene y frena la producción de azúcar por el hígado. Rara vez provoca bajadas de azúcar (hipoglucemias) por sí sola.

**Indicaciones Principales:**
* **Diabetes Mellitus Tipo 2.**
* **Resistencia a la Insulina.**`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* Dosis habitual: 850 mg o 1000 mg, cada 12 horas.
* **Con Comida:** Es vital tomarla **en medio de la comida o justo al acabar**. Si se toma con el estómago vacío, provoca diarreas y dolor de barriga muy fuertes. Tomarla con comida evita esto.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Contrastes Yodados (TAC):** Si el paciente va a hacerse un TAC con contraste, debe **suspender la Metformina** el día de la prueba y 48 horas después. Si no se hace, hay riesgo de fallo renal agudo y acidosis láctica.
* **Insuficiencia Renal:** Contraindicada si el riñón funciona muy mal.`,
    indRO: `**Descriere Generală:**
Este pilonul tratamentului Diabetului Tip 2. Nu crește insulina, ci ajută corpul să o folosească mai bine pe cea pe care o are deja și frânează producția de zahăr de către ficat. Rareori provoacă scăderi de zahăr (hipoglicemii) singură.

**Indicații Principale:**
* **Diabet Zaharat Tip 2.**
* **Rezistență la Insulină.**`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Doza obișnuită: 850 mg sau 1000 mg, la fiecare 12 ore.
* **Cu Mâncare:** Este vital să fie luată **în timpul mesei sau imediat după**. Dacă se ia pe stomacul gol, provoacă diaree și dureri de burtă foarte puternice. Luarea ei cu mâncare evită acest lucru.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Substanțe de Contrast Iodate (CT):** Dacă pacientul urmează să facă un CT cu contrast, trebuie să **întrerupă Metformina** în ziua testului și 48 de ore după. Dacă nu se face asta, există risc de insuficiență renală acută și acidoză lactică.
* **Insuficiență Renală:** Contraindicată dacă rinichiul funcționează foarte prost.`
  },
  {
    id: 'top_018',
    name: 'Insulina Glargina',
    cat: 'Insulina Basal (Lenta)',
    indES: `**Descripción General:**
Marcas como "Lantus" o "Toujeo". Es una insulina de acción lenta y larga duración (24 horas). No hace picos. Su función es mantener el azúcar controlado "de fondo" durante todo el día, independientemente de las comidas.

**Indicaciones Principales:**
* **Diabetes:** Tratamiento basal.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* Se administra **una sola vez al día**.
* **Misma Hora:** Es crucial respetar el horario (ej. siempre a las 22:00h) para que no haya huecos sin insulina.
* **Rotación:** Pinchar en zonas diferentes (muslos, brazos, abdomen) cada día para evitar que la grasa se endurezca (lipodistrofia) y la insulina deje de hacer efecto.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **No Mezclar:** Nunca mezclar en la misma jeringa con insulinas rápidas.
* **Hipoglucemia:** Aunque tiene menos riesgo que la rápida, si el paciente no come nada en todo el día, puede bajar el azúcar.`,
    indRO: `**Descriere Generală:**
Mărci precum "Lantus" sau "Toujeo". Este o insulină cu acțiune lentă și durată lungă (24 de ore). Nu face vârfuri. Funcția sa este de a menține zahărul controlat "de fond" pe tot parcursul zilei, independent de mese.

**Indicații Principale:**
* **Diabet:** Tratament bazal.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Se administrează **o singură dată pe zi**.
* **Aceeași Oră:** Este crucial să respectați orarul (ex. întotdeauna la 22:00h) pentru a nu exista goluri fără insulină.
* **Rotație:** Înțepați în zone diferite (coapse, brațe, abdomen) în fiecare zi pentru a evita ca grăsimea să se întărească (lipodistrofie) și insulina să nu mai aibă efect.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Nu Amestecați:** Nu amestecați niciodată în aceeași seringă cu insuline rapide.
* **Hipoglicemie:** Deși are risc mai mic decât cea rapidă, dacă pacientul nu mănâncă nimic toată ziua, zahărul poate scădea.`
  },
  
  // ===========================================================================
  // 8. URGENCIAS VITALES (CARRO DE PARADAS)
  // ===========================================================================
  {
    id: 'top_019',
    name: 'Adrenalina (Epinefrina)',
    cat: 'Simpaticomimético / Vasopresor',
    indES: `**Descripción General:**
Es el fármaco más importante del carro de paradas. Actúa activando todo el sistema de alerta del cuerpo: contrae los vasos sanguíneos para subir la tensión, acelera el corazón y abre los bronquios.

**Indicaciones Principales:**
* **Parada Cardiaca (PCR):** Se usa para intentar "arrancar" el corazón en asistolia o mejorar la eficacia del masaje cardiaco.
* **Shock Anafiláctico:** Es el ÚNICO tratamiento que salva la vida en una reacción alérgica grave con asfixia.
* **Broncoespasmo Severo:** Crisis de asma que no responde a nada más.`,
    doseES: `**Pautas de Administración (CRÍTICO - NO CONFUNDIR):**

**1. En Parada Cardiaca (Paciente MUERTO clínicamente):**
* **Vía Intravenosa:** Se administra **1 mg (1 ampolla entera)** en bolo rápido, empujada con suero. Se repite cada 3-5 minutos.

**2. En Anafilaxia (Paciente VIVO con alergia):**
* **Vía INTRAMUSCULAR (Muslo):** Se administran **0.3 mg a 0.5 mg** (media ampolla).
* **¡PELIGRO!:** NUNCA administrar IV en una alergia a menos que el paciente esté en parada inminente. La adrenalina IV en un paciente con pulso puede provocar un infarto o hemorragia cerebral por la subida brutal de tensión.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Necrosis:** Si se administra por una vía periférica fina y se extravasa (se sale de la vena), produce necrosis (muerte del tejido) de la piel por falta de riego.
* **Monitorización:** El paciente debe estar conectado al monitor cardiaco siempre.`,
    indRO: `**Descriere Generală:**
Este cel mai important medicament din căruciorul de resuscitare. Acționează activând tot sistemul de alertă al corpului: contractă vasele de sânge pentru a crește tensiunea, accelerează inima și deschide bronhiile.

**Indicații Principale:**
* **Stop Cardiac (SCR):** Se folosește pentru a încerca "repornirea" inimii în asistolie sau îmbunătățirea eficacității masajului cardiac.
* **Șoc Anafilactic:** Este SINGURUL tratament care salvează viața într-o reacție alergică gravă cu asfixie.
* **Bronhospasm Sever:** Criză de astm care nu răspunde la nimic altceva.`,
    doseRO: `**Ghid de Administrare (CRITIC - NU CONFUNDAȚI):**

**1. În Stop Cardiac (Pacient MORT clinic):**
* **Calea Intravenoasă:** Se administrează **1 mg (1 fiolă întreagă)** în bolus rapid, împins cu ser. Se repetă la fiecare 3-5 minute.

**2. În Anafilaxie (Pacient VIU cu alergie):**
* **Calea INTRAMUSCULARĂ (Coapsă):** Se administrează **0.3 mg până la 0.5 mg** (jumătate de fiolă).
* **PERICOL!:** **NICIODATĂ** nu administrați IV într-o alergie, cu excepția cazului în care pacientul este în stop iminent. Adrenalina IV la un pacient cu puls poate provoca un infarct sau hemoragie cerebrală din cauza creșterii brutale a tensiunii.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Necroză:** Dacă se administrează printr-o venă periferică fină și extravazează (iese din venă), produce necroză (moartea țesutului) a pielii prin lipsă de irigare.
* **Monitorizare:** Pacientul trebuie să fie conectat la monitorul cardiac întotdeauna.`
  },
  {
    id: 'top_020',
    name: 'Atropina',
    cat: 'Anticolinérgico',
    indES: `**Descripción General:**
Es un acelerador cardiaco. Actúa bloqueando el sistema nervioso parasimpático (el freno del corazón, nervio vago), permitiendo que el nodo sinusal dispare más rápido.

**Indicaciones Principales:**
* **Bradicardia Sintomática:** Cuando el corazón va extremadamente lento (<40 lpm) y el paciente está mareado o hipotenso.
* **Intoxicación por Insecticidas:** Es el antídoto para los organofosforados.`,
    doseES: `**Pautas de Administración:**

**En Adultos (Urgencia):**
* Se administra en bolo IV rápido de **0.5 mg a 1 mg**.
* Se puede repetir cada 3-5 minutos hasta un máximo de 3 mg.
* **Dosis Mínima:** No se deben poner dosis inferiores a 0.5 mg porque paradójicamente pueden frenar aún más el corazón (efecto rebote).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Efectos Secundarios Inmediatos:** El paciente notará sequedad de boca instantánea, visión borrosa (pupilas dilatadas) y calor.
* **Retención Urinaria:** Puede provocar que el paciente no pueda orinar (globo vesical), especialmente en ancianos con próstata.`,
    indRO: `**Descriere Generală:**
Este un accelerator cardiac. Acționează blocând sistemul nervos parasimpatic (frâna inimii, nervul vag), permițând nodului sinusal să bată mai repede.

**Indicații Principale:**
* **Bradicardie Simptomatică:** Când inima bate extrem de lent (<40 bpm) și pacientul este amețit sau hipotensiv.
* **Intoxicație cu Insecticide:** Este antidotul pentru organofosforice.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți (Urgență):**
* Se administrează în bolus IV rapid de **0.5 mg până la 1 mg**.
* Se poate repeta la fiecare 3-5 minute până la un maxim de 3 mg.
* **Doză Minimă:** Nu trebuie administrate doze mai mici de 0.5 mg deoarece, paradoxal, pot încetini și mai mult inima (efect de recul).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Efecte Secundare Imediate:** Pacientul va simți uscăciune instantanee a gurii, vedere încețoșată (pupile dilatate) și căldură.
* **Retenție Urinară:** Poate provoca imposibilitatea de a urina (glob vezical), în special la vârstnicii cu prostată.`
  },
  {
    id: 'top_021',
    name: 'Amiodarona',
    cat: 'Antiarrítmico',
    indES: `**Descripción General:**
Conocido como "Trangorex". Es el fármaco principal para controlar el ritmo del corazón cuando hay arritmias rápidas peligrosas.

**Indicaciones Principales:**
* **Fibrilación Auricular:** Para intentar volver al ritmo normal o controlar la frecuencia.
* **Parada Cardiaca:** Se usa en Fibrilación Ventricular (FV) cuando el desfibrilador no funciona.`,
    doseES: `**Pautas de Administración:**

**En Urgencia (Paciente vivo):**
* **Carga:** 300 mg (2 ampollas) diluidos en **250 ml de Suero Glucosado 5%**. Pasar en 20 min - 1 hora.
* **Mantenimiento:** Perfusión continua durante 24h.

**En Parada Cardiaca:**
* 300 mg en bolo directo rápido.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **SOLO GLUCOSADO:** La amiodarona es incompatible con el Suero Fisiológico (se precipita y forma cristales). **Solo diluir en Glucosado 5%**.
* **Flebitis:** Es muy irritante para las venas. Si es posible, usar una vía central o una vena periférica de gran calibre (brazo, no mano).
* **Tiroides:** A largo plazo altera las hormonas tiroideas.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Cordarone" sau "Trangorex". Este medicamentul principal pentru controlul ritmului inimii când există aritmii rapide periculoase.

**Indicații Principale:**
* **Fibrilație Atrială:** Pentru a încerca revenirea la ritm normal sau controlul frecvenței.
* **Stop Cardiac:** Se folosește în Fibrilație Ventriculară (FV) când defibrilatorul nu funcționează.`,
    doseRO: `**Ghid de Administrare:**

**În Urgență (Pacient viu):**
* **Încărcare:** 300 mg (2 fiole) diluate în **250 ml de Ser Glucozat 5%**. Se administrează în 20 min - 1 oră.
* **Întreținere:** Perfuzie continuă timp de 24h.

**În Stop Cardiac:**
* 300 mg în bolus direct rapid.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **DOAR GLUCOZAT:** Amiodarona este incompatibilă cu Serul Fiziologic (precipită și formează cristale). **Se diluează doar în Glucozat 5%**.
* **Flebită:** Este foarte iritantă pentru vene. Dacă este posibil, folosiți o cale centrală sau o venă periferică de calibru mare (braț, nu mână).
* **Tiroidă:** Pe termen lung alterează hormonii tiroidieni.`
  },

  // ===========================================================================
  // 9. ANTÍDOTOS (SALVAVIDAS)
  // ===========================================================================
  {
    id: 'top_022',
    name: 'Naloxona',
    cat: 'Antídoto Opioides',
    indES: `**Descripción General:**
Es el "resucitador" en sobredosis de drogas. Bloquea inmediatamente los receptores cerebrales de los opioides.

**Indicaciones Principales:**
* **Sobredosis:** De Heroína, Morfina, Fentanilo, Tramadol.
* **Signos de Alarma:** Paciente en coma, pupilas puntiformes (como la cabeza de un alfiler) y, lo más importante, **depresión respiratoria** (respira muy lento o deja de respirar).`,
    doseES: `**Pautas de Administración:**

**Vía Intravenosa / Intramuscular:**
* **0.4 mg** (1 ampolla). Hace efecto en 1-2 minutos.
* Si no despierta, se puede repetir la dosis.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Vida Media Corta:** La naloxona dura solo 30-45 minutos en el cuerpo, pero la droga (heroína/metadona) dura horas. El paciente puede despertar, parecer bien, y **volver a entrar en coma** a la media hora. Vigilancia estricta durante 2 horas mínimo.
* **Síndrome de Abstinencia:** Si el paciente es adicto, despertará con un "mono" brutal: agresividad, vómitos, dolor. Tenga precaución física.`,
    indRO: `**Descriere Generală:**
Este "resuscitatorul" în supradoze de droguri. Blochează imediat receptorii cerebrali ai opioidelor.

**Indicații Principale:**
* **Supradoză:** De Heroină, Morfină, Fentanil, Tramadol.
* **Semne de Alarmă:** Pacient în comă, pupile punctiforme (cât gămălia unui ac) și, cel mai important, **depresie respiratorie** (respiră foarte lent sau se oprește din respirat).`,
    doseRO: `**Ghid de Administrare:**

**Calea Intravenoasă / Intramusculară:**
* **0.4 mg** (1 fiolă). Își face efectul în 1-2 minute.
* Dacă nu se trezește, se poate repeta doza.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Viață Medie Scurtă:** Naloxona durează doar 30-45 minute în corp, dar drogul (heroina/metadona) durează ore. Pacientul se poate trezi, părea bine, și **să intre din nou în comă** după jumătate de oră. Supraveghere strictă minim 2 ore.
* **Sindrom de Sevraj:** Dacă pacientul este dependent, se va trezi cu un sevraj brutal: agresivitate, vărsături, durere. Aveți precauție fizică.`
  },
  {
    id: 'top_023',
    name: 'Flumazenilo',
    cat: 'Antídoto Benzodiacepinas',
    indES: `**Descripción General:**
Conocido como "Anexate". Despierta a los pacientes sedados con pastillas para dormir o ansiolíticos.

**Indicaciones Principales:**
* **Sobredosis:** De Diazepam, Orfidal, Trankimazin.
* **Reversión:** Para despertar a un paciente tras una sedación médica (ej. endoscopia).`,
    doseES: `**Pautas de Administración:**

**Vía Intravenosa:**
* **0.2 mg** en 15 segundos. Se puede repetir cada minuto hasta que despierte.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Riesgo de Convulsiones:** Si el paciente toma benzodiacepinas a diario (epiléptico o ansiedad crónica), su cerebro está acostumbrado. Si se le quita el efecto de golpe con el antídoto, puede sufrir una **crisis convulsiva**. Usar con mucha precaución en pacientes crónicos.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Anexate". Trezește pacienții sedați cu somnifere sau anxiolitice.

**Indicații Principale:**
* **Supradoză:** De Diazepam, Lorazepam, Alprazolam.
* **Reversie:** Pentru a trezi un pacient după o sedare medicală (ex. endoscopie).`,
    doseRO: `**Ghid de Administrare:**

**Calea Intravenoasă:**
* **0.2 mg** în 15 secunde. Se poate repeta la fiecare minut până se trezește.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Risc de Convulsii:** Dacă pacientul ia benzodiazepine zilnic (epileptic sau anxietate cronică), creierul său este obișnuit. Dacă i se taie efectul brusc cu antidotul, poate suferi o **criză convulsivă**. A se utiliza cu multă precauție la pacienții cronici.`
  },

  // ===========================================================================
  // 10. SUEROTERAPIA (FLUIDOS)
  // ===========================================================================
  {
    id: 'top_024',
    name: 'Suero Fisiológico 0.9%',
    cat: 'Cristaloide Isotónico',
    indES: `**Descripción General:**
Agua con sal (Cloruro Sódico) en la misma concentración que la sangre humana. Es el fluido universal.

**Indicaciones Principales:**
* **Reposición de Volumen:** Para subir la tensión, deshidratación, diarreas.
* **Dilución:** Es el vehículo estándar para diluir la mayoría de medicamentos.
* **Limpieza:** Lavado de ojos, heridas o sondas.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Mantenimiento:** 500 ml a 2000 ml al día.
* **Cargas (Rescate):** En caso de hipotensión, se pasan 500 ml a chorro libre.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Insuficiencia Cardiaca:** Cuidado en pacientes con el corazón débil. Si se pone mucho suero, el corazón no puede bombearlo y el agua se va a los pulmones (Edema Agudo de Pulmón).
* **Hipernatremia:** Contiene mucha sal.`,
    indRO: `**Descriere Generală:**
Apă cu sare (Clorură de Sodiu) în aceeași concentrație ca sângele uman. Este fluidul universal.

**Indicații Principale:**
* **Refacerea Volumului:** Pentru a crește tensiunea, deshidratare, diaree.
* **Diluție:** Este vehiculul standard pentru diluarea majorității medicamentelor.
* **Curățare:** Spălarea ochilor, rănilor sau sondelor.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Întreținere:** 500 ml până la 2000 ml pe zi.
* **Încărcare (Resuscitare):** În caz de hipotensiune, se administrează 500 ml în jet liber.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Insuficiență Cardiacă:** Atenție la pacienții cu inima slăbită. Dacă se pune mult ser, inima nu îl poate pompa și apa se duce la plămâni (Edem Pulmonar Acut).
* **Hipernatremie:** Conține multă sare.`
  },
  {
    id: 'top_025',
    name: 'Suero Glucosado 5%',
    cat: 'Cristaloide Hipotónico',
    indES: `**Descripción General:**
Agua con azúcar (50 gramos de glucosa por litro). No contiene sal.

**Indicaciones Principales:**
* **Deshidratación Hipertónica:** Pacientes que tienen el sodio muy alto y necesitan "agua libre".
* **Ayuno:** Aporte mínimo de calorías para evitar la cetosis (pero no alimenta realmente).
* **Hipoglucemia:** Mantenimiento tras una bajada de azúcar.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* Según necesidades basales (ej. 1500 ml/día).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **NO ES UN EXPANSOR:** La glucosa se consume rápido y el agua se sale de las venas a las células. **NO SIRVE para subir la tensión** en un shock.
* **Contraindicado:** En Ictus o traumatismo craneal (aumenta el edema cerebral).
* **Flebitis:** Irrita la vena si se pasa muy rápido.`,
    indRO: `**Descriere Generală:**
Apă cu zahăr (50 grame de glucoză pe litru). Nu conține sare.

**Indicații Principale:**
* **Deshidratare Hipertonică:** Pacienți care au sodiul foarte mare și au nevoie de "apă liberă".
* **Post:** Aport minim de calorii pentru a evita cetoza (dar nu hrănește cu adevărat).
* **Hipoglicemie:** Întreținere după o scădere de zahăr.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Conform nevoilor bazale (ex. 1500 ml/zi).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **NU ESTE UN EXPANDOR:** Glucoza se consumă rapid și apa iese din vene în celule. **NU ESTE BUN pentru a crește tensiunea** într-un șoc.
* **Contraindicat:** În AVC sau traumatism cranian (crește edemul cerebral).
* **Flebită:** Irită vena dacă se administrează prea repede.`
  },
  {
    id: 'top_026',
    name: 'Ringer Lactato',
    cat: 'Cristaloide Balanceado',
    indES: `**Descripción General:**
Una solución más sofisticada que se parece más al plasma sanguíneo. Lleva Sodio, Potasio, Calcio y Lactato.

**Indicaciones Principales:**
* **Quirófano y Trauma:** Es el suero de elección en grandes cirugías y politraumatismos para reponer sangre perdida (mientras llega la sangre real).
* **Quemados:** Reposición masiva de líquidos.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* Reposición de volumen según pérdidas.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Incompatibilidad con Ceftriaxona:** El calcio del Ringer y el antibiótico Ceftriaxona reaccionan formando "piedras" en la sangre. **Nunca mezclar en la misma vía**.
* **Hígado:** No usar en fallo hepático grave (el hígado no puede procesar el lactato).`,
    indRO: `**Descriere Generală:**
O soluție mai sofisticată care seamănă mai mult cu plasma sanguină. Conține Sodiu, Potasiu, Calciu și Lactat.

**Indicații Principale:**
* **Sală de Operație și Traumă:** Este serul de elecție în chirurgii mari și politraumatisme pentru a înlocui sângele pierdut (până ajunge sângele real).
* **Arși:** Înlocuire masivă de lichide.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* Refacerea volumului în funcție de pierderi.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Incompatibilitate cu Ceftriaxona:** Calciul din Ringer și antibioticul Ceftriaxonă reacționează formând "pietre" în sânge. **Nu amestecați niciodată pe aceeași cale**.
* **Ficat:** A nu se utiliza în insuficiență hepatică gravă (ficatul nu poate procesa lactatul).`
  },

  // ===========================================================================
  // 11. ANTIBIÓTICOS HOSPITALARIOS Y OTROS
  // ===========================================================================
  {
    id: 'top_027',
    name: 'Levofloxacino',
    cat: 'Antibiótico (Quinolona)',
    indES: `**Descripción General:**
Antibiótico potente de amplio espectro. Se usa cuando fallan los antibióticos de primera línea.

**Indicaciones Principales:**
* **Neumonías Graves:** En pacientes con EPOC o ancianos.
* **Infecciones Urinarias:** Complicadas.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Dosis:** 500 mg una vez al día (IV u Oral).
* **Perfusión:** El frasco de 500 mg debe pasarse en **60 minutos**. Si se pasa rápido, baja la tensión.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Neurotoxicidad:** En ancianos puede provocar confusión, agitación o delirio ("se le va la cabeza"). Vigilar estado mental.
* **Corazón:** Puede provocar arritmias (QT largo).
* **Tendones:** Dolor en el talón de Aquiles.`,
    indRO: `**Descriere Generală:**
Antibiotic puternic cu spectru larg. Se folosește când eșuează antibioticele de primă linie.

**Indicații Principale:**
* **Pneumonii Grave:** La pacienți cu BPOC sau vârstnici.
* **Infecții Urinare:** Complicate.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Doză:** 500 mg o dată pe zi (IV sau Oral).
* **Perfuzie:** Flaconul de 500 mg trebuie administrat în **60 de minute**. Dacă se administrează rapid, scade tensiunea.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Neurotoxicitate:** La vârstnici poate provoca confuzie, agitație sau delir ("își pierde mințile"). Supravegheați starea mentală.
* **Inimă:** Poate provoca aritmii (QT lung).
* **Tendoane:** Durere la tendonul lui Ahile.`
  },
  {
    id: 'top_028',
    name: 'Piperacilina-Tazobactam',
    cat: 'Antibiótico (El "Matatodo")',
    indES: `**Descripción General:**
Conocido como "Tazocel". Es una penicilina de muy amplio espectro. Se utiliza para bacterias hospitalarias resistentes y cuadros graves.

**Indicaciones Principales:**
* **Sepsis:** Infección generalizada.
* **Neumonía Hospitalaria:** Cogida dentro del hospital.
* **Infecciones Abdominales:** Peritonitis.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Dosis:** 4 g / 0.5 g cada 6 u 8 horas IV.
* **Perfusión Extendida:** Para que sea más eficaz matando bacterias, lo ideal es que el suero pase lentamente en **3 o 4 horas** (aunque en urgencias a veces se pone en 30 min).`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Sodio:** Cada vial contiene mucha sal. Cuidado en pacientes con insuficiencia cardiaca (riesgo de sobrecarga).
* **Alergia:** Sigue siendo una penicilina. Prohibido en alérgicos.
* **Riñón:** Vigilar función renal.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Tazocin". Este o penicilină cu spectru foarte larg. Se utilizează pentru bacterii spitalicești rezistente și tablouri clinice grave.

**Indicații Principale:**
* **Sepsis:** Infecție generalizată.
* **Pneumonie Nosocomială:** Luată din spital.
* **Infecții Abdominale:** Peritonită.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Doză:** 4 g / 0.5 g la fiecare 6 sau 8 ore IV.
* **Perfuzie Extinsă:** Pentru a fi mai eficient în uciderea bacteriilor, ideal este ca serul să curgă lent în **3 sau 4 ore** (deși în urgențe uneori se pune în 30 min).`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Sodiu:** Fiecare flacon conține multă sare. Atenție la pacienții cu insuficiență cardiacă (risc de supraîncărcare).
* **Alergie:** Rămâne o penicilină. Interzis la alergici.
* **Rinichi:** Monitorizați funcția renală.`
  },
  {
    id: 'top_029',
    name: 'Ondansetrón',
    cat: 'Antiemético Potente',
    indES: `**Descripción General:**
Conocido como "Zofran". Es mucho más potente que el Primperan. Se diseñó para los vómitos de la quimioterapia, pero ahora se usa mucho en post-operatorio y urgencias.

**Indicaciones Principales:**
* **Vómitos Incoercibles:** Que no ceden con nada más.
* **Post-operatorio:** Prevención de náuseas tras anestesia.`,
    doseES: `**Pautas de Administración:**

**En Adultos:**
* **Dosis:** 4 mg (media ampolla) u 8 mg (1 ampolla) IV.
* **Velocidad:** Pasar lento en 2-5 minutos.`,
    warnES: `**⚠️ ALERTAS DE SEGURIDAD Y CUIDADOS:**
* **Estreñimiento:** Es el efecto secundario principal. "Seca" el intestino.
* **Corazón:** Precaución en pacientes cardiacos (QT largo).
* **Cefalea:** Puede dar dolor de cabeza intenso.`,
    indRO: `**Descriere Generală:**
Cunoscut ca "Zofran". Este mult mai puternic decât Primperanul. A fost conceput pentru vărsăturile din chimioterapie, dar acum se folosește mult post-operator și în urgențe.

**Indicații Principale:**
* **Vărsături Incoercibile:** Care nu cedează la nimic altceva.
* **Post-operator:** Prevenirea grețurilor după anestezie.`,
    doseRO: `**Ghid de Administrare:**

**La Adulți:**
* **Doză:** 4 mg (jumătate de fiolă) sau 8 mg (1 fiolă) IV.
* **Viteză:** Administrați lent în 2-5 minute.`,
    warnRO: `**⚠️ ALERTE DE SIGURANȚĂ ȘI ÎNGRIJIRI:**
* **Constipație:** Este principalul efect secundar. "Usucă" intestinul.
* **Inimă:** Precauție la pacienții cardiaci (QT lung).
* **Cefalee:** Poate da dureri de cap intense.`
  }
]; // FIN DEL VADEMÉCUM - CIERRE DEL ARRAY