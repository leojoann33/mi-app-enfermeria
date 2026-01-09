/**
 * DATABASE: RECOVERED_DICTIONARY
 * Extracted from legacy build.
 *
 * 🔒 BLOCKED STRUCTURE - DO NOT MODIFY 🔒
 * This data structure is frozen. New terms MUST follow the existing object model strictly:
 * {
 *   id: "unique_id",
 *   termES: "Spanish Term",
 *   termRO: "Romanian Term",
 *   categoryColor: "tailwind-class",
 *   defES: "Spanish Definition",
 *   defRO: "Romanian Definition",
 *   nanda: null | { codeES, codeRO, labelES, labelRO }
 * }
 * DO NOT CHANGE THE ARRAY STRUCTURE OR OBJECT KEYS. ONLY ADD NEW ITEMS.
 */

export const DICTIONARY_DB = [{
    id: "v_a_a_prefijo",
    termES: "a- (Prefijo)",
    termRO: "a- (Prefix)",
    categoryColor: "bg-slate-50",
    defES: 'Prefijo de origen griego que indica ausencia, carencia o falta de algo. Se utiliza ampliamente en terminología médica para denotar la negación de una función o estructura (ej. a-pnea: sin respiración; a-tonía: sin tono). Ante vocal suele transformarse en "an-".',
    defRO: 'Prefix de origine greacă ce indică absența, lipsa sau carența a ceva. Este utilizat pe scară largă în terminologia medicală pentru a denota negarea unei funcții sau structuri (ex. a-pnee: fără respirație; a-tonie: fără tonus). Înaintea unei vocale devine de obicei "an-".',
    nanda: null
}, {
    id: "v_a_ab_prefijo",
    termES: "ab- (Prefijo)",
    termRO: "ab- (Prefix)",
    categoryColor: "bg-blue-50",
    defES: 'Prefijo latino que significa "lejos de", "separación" o "desde". Indica movimiento o posición que se aleja de un punto central o línea media (ej. ab-ducción: movimiento que aleja un miembro del eje del cuerpo).',
    defRO: 'Prefix latin care înseamnă "departe de", "separare" sau "de la". Indică mișcarea sau poziția care se îndepărtează de un punct central sau de linia mediană (ex. ab-ducție: mișcare care îndepărtează un membru de axul corpului).',
    nanda: null
}, {
    id: "v_a_abdomen",
    termES: "Abdomen",
    termRO: "Abdomen",
    categoryColor: "bg-emerald-50",
    defES: "Cavidad del cuerpo situada entre el tórax (separada por el diafragma) y la pelvis. Contiene las vísceras digestivas (estómago, intestinos, hígado, páncreas, vesícula biliar) y el sistema genitourinario (riñones, uréteres, bazo). Clínicamente se divide en 9 regiones o 4 cuadrantes para la exploración.",
    defRO: "Cavitatea corpului situată între torace (separată de diafragmă) și pelvis. Conține viscerele digestive (stomac, intestine, ficat, pancreas, vezică biliară) și sistemul genitourinar (rinichi, uretere, splină). Clinic se împarte în 9 regiuni sau 4 cadrane pentru examinare.",
    nanda: null
}, {
    id: "v_a_abdomen_agudo",
    termES: "Abdomen Agudo",
    termRO: "Abdomen Acut",
    categoryColor: "bg-red-50",
    defES: "Síndrome clínico caracterizado por dolor abdominal de inicio súbito, intenso y de evolución rápida (menos de 24h), acompañado a menudo de signos de irritación peritoneal (defensa muscular, rebote). Requiere diagnóstico y tratamiento urgentes, frecuentemente quirúrgicos (ej. apendicitis, perforación).",
    defRO: "Sindrom clinic caracterizat prin durere abdominală cu debut brusc, intensă și evoluție rapidă (mai puțin de 24h), adesea însoțită de semne de iritație peritoneală (apărare musculară, rebound). Necesită diagnostic și tratament urgent, frecvent chirurgical (ex. apendicită, perforație).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_a_abdominocentesis",
    termES: "Abdominocentesis (Paracentesis)",
    termRO: "Abdominocenteză (Paracenteză)",
    categoryColor: "bg-cyan-50",
    defES: "Procedimiento invasivo que consiste en la punción de la pared abdominal con una aguja o catéter para extraer líquido acumulado en la cavidad peritoneal (ascitis). Puede ser diagnóstica (analizar el líquido) o terapéutica (aliviar la presión intraabdominal).",
    defRO: "Procedură invazivă care constă în puncția peretelui abdominal cu un ac sau cateter pentru a extrage lichidul acumulat în cavitatea peritoneală (ascită). Poate fi diagnostică (analiza lichidului) sau terapeutică (ameliorarea presiunii intraabdominale).",
    nanda: null
}, {
    id: "v_a_abduccion",
    termES: "Abducción",
    termRO: "Abducție",
    categoryColor: "bg-violet-50",
    defES: "Movimiento de una extremidad o parte del cuerpo que la aleja del plano medio sagital. En los dedos, es el movimiento que los separa entre sí. Es el opuesto a la aducción. Esencial para valorar la amplitud de movimiento (ROM).",
    defRO: "Mișcarea unui membru sau a unei părți a corpului care o îndepărtează de planul medio-sagital. La degete, este mișcarea care le separă unele de altele. Este opusul adducției. Esențială pentru evaluarea amplitudinii de mișcare (ROM).",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_a_aberracion",
    termES: "Aberración",
    termRO: "Aberație",
    categoryColor: "bg-fuchsia-50",
    defES: "Desviación del curso normal o natural; anormalidad estructural o funcional. En genética, se refiere a alteraciones en el número o estructura de los cromosomas (aberración cromosómica). En oftalmología, defecto en el enfoque de la imagen.",
    defRO: "Deviere de la cursul normal sau natural; anormalitate structurală sau funcțională. În genetică, se referă la modificări ale numărului sau structurii cromozomilor (aberație cromozomială). În oftalmologie, defect în focalizarea imaginii.",
    nanda: null
}, {
    id: "v_a_abertura",
    termES: "Abertura",
    termRO: "Deschidere (Apertură)",
    categoryColor: "bg-orange-50",
    defES: "Orificio, agujero o espacio abierto en una estructura anatómica (ej. abertura torácica superior, abertura piriforme). También se aplica a la separación de los bordes de una herida (dehiscencia).",
    defRO: "Orificiu, gaură sau spațiu deschis într-o structură anatomică (ex. deschiderea toracică superioară, deschiderea piriformă). Se aplică și la separarea marginilor unei plăgi (dehiscență).",
    nanda: null
}, {
    id: "v_a_abiotrofia",
    termES: "Abiotrofia",
    termRO: "Abiotrofie",
    categoryColor: "bg-zinc-50",
    defES: "Pérdida prematura de la vitalidad o degeneración de tejidos o células, generalmente de origen genético, que conlleva una pérdida de función progresiva (ej. distrofias retinianas).",
    defRO: "Pierdere prematură a vitalității sau degenerare a țesuturilor sau celulelor, de obicei de origine genetică, care duce la o pierdere progresivă a funcției (ex. distrofii retiniene).",
    nanda: null
}, {
    id: "v_a_ablacion",
    termES: "Ablación",
    termRO: "Ablație",
    categoryColor: "bg-rose-50",
    defES: "Extirpación, amputación o destrucción de cualquier parte del cuerpo o función. Puede realizarse mediante cirugía (bisturí), energía térmica (radiofrecuencia para arritmias cardíacas), frío (crioablación), láser o productos químicos.",
    defRO: "Extirpare, amputare sau distrugere a oricărei părți a corpului sau funcții. Se poate realiza prin chirurgie (bisturiu), energie termică (radiofrecvență pentru aritmii cardiace), frig (crioablație), laser sau produse chimice.",
    nanda: null
}, {
    id: "v_a_ablefaria",
    termES: "Ablefaria",
    termRO: "Ablefarie",
    categoryColor: "bg-amber-50",
    defES: "Ausencia congénita, total o parcial, de los párpados. Es una anomalía rara que requiere protección ocular intensiva para prevenir úlceras corneales y ceguera.",
    defRO: "Absența congenitală, totală sau parțială, a pleoapelor. Este o anomalie rară care necesită protecție oculară intensivă pentru a preveni ulcerele corneene și orbirea.",
    nanda: null
}, {
    id: "v_a_aborto",
    termES: "Aborto",
    termRO: "Avort",
    categoryColor: "bg-pink-50",
    defES: "Interrupción del embarazo antes de que el feto alcance la viabilidad (capacidad de vivir fuera del útero), definido generalmente como antes de las 20-22 semanas de gestación o con un peso fetal inferior a 500 g. Puede ser espontáneo o inducido.",
    defRO: "Întreruperea sarcinii înainte ca fătul să atingă viabilitatea (capacitatea de a trăi în afara uterului), definită în general ca înainte de 20-22 săptămâni de gestație sau cu o greutate fetală sub 500 g. Poate fi spontan sau indus.",
    nanda: {
        codeES: "00135",
        codeRO: "00135",
        labelES: "Duelo complicado",
        labelRO: "Doliu complicat"
    }
}, {
    id: "v_a_aborto_diferido",
    termES: "Aborto Diferido (Retenido)",
    termRO: "Avort Reținut (Missed Abortion)",
    categoryColor: "bg-indigo-50",
    defES: "Situación en la que el feto muere in utero antes de la viabilidad, pero los productos de la concepción son retenidos dentro del útero durante días o semanas. El cuello uterino permanece cerrado. Requiere evacuación (legrado o farmacológico).",
    defRO: "Situație în care fătul moare in utero înainte de viabilitate, dar produsele de concepție sunt reținute în uter timp de zile sau săptămâni. Colul uterin rămâne închis. Necesită evacuare (chiuretaj sau farmacologic).",
    nanda: null
}, {
    id: "v_a_aborto_espontaneo",
    termES: "Aborto Espontáneo",
    termRO: "Avort Spontan",
    categoryColor: "bg-lime-50",
    defES: "Pérdida del embarazo no provocada intencionalmente antes de la semana 20. Causas comunes: anomalías cromosómicas (la más frecuente), problemas hormonales, infecciones o anomalías uterinas.",
    defRO: "Pierderea sarcinii neprovocată intenționat înainte de săptămâna 20. Cauze comune: anomalii cromozomiale (cea mai frecventă), probleme hormonale, infecții sau anomalii uterine.",
    nanda: null
}, {
    id: "v_a_aborto_habitual",
    termES: "Aborto Habitual (Recurrente)",
    termRO: "Avort Habitual (Recurent)",
    categoryColor: "bg-purple-50",
    defES: "Ocurrencia de tres o más abortos espontáneos consecutivos. Requiere estudio genético, anatómico e inmunológico de los padres para determinar la causa (ej. síndrome antifosfolípido).",
    defRO: "Apariția a trei sau mai multe avorturi spontane consecutive. Necesită studiu genetic, anatomic și imunologic al părinților pentru a determina cauza (ex. sindrom antifosfolipidic).",
    nanda: null
}, {
    id: "v_a_aborto_incompleto",
    termES: "Aborto Incompleto",
    termRO: "Avort Incomplet",
    categoryColor: "bg-red-50",
    defES: "Expulsión parcial de los productos de la concepción, quedando restos (generalmente placentarios) dentro del útero. Se manifiesta por sangrado profuso y cuello uterino abierto. Riesgo alto de hemorragia e infección.",
    defRO: "Expulzarea parțială a produselor de concepție, rămânând resturi (de obicei placentare) în uter. Se manifestă prin sângerare abundentă și col uterin deschis. Risc ridicat de hemoragie și infecție.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_a_abrasion",
    termES: "Abrasión",
    termRO: "Abraziune",
    categoryColor: "bg-stone-50",
    defES: "Lesión superficial de la piel o mucosas causada por fricción o raspado contra una superficie dura, que elimina la epidermis y parte de la dermis papilar. Presenta exudado y riesgo de tatuaje traumático si no se limpian cuerpos extraños.",
    defRO: "Leziune superficială a pielii sau mucoaselor cauzată de frecare sau răzuire de o suprafață dură, care elimină epiderma și o parte din dermul papilar. Prezintă exsudat și risc de tatuaj traumatic dacă nu se curăță corpurile străine.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_a_absceso",
    termES: "Absceso",
    termRO: "Abces",
    categoryColor: "bg-yellow-50",
    defES: "Acumulación localizada de pus en una cavidad neoformada por la desintegración de tejidos (necrosis licuefactiva), generalmente causada por infección bacteriana. Rodeado por una cápsula piógena. Requiere drenaje quirúrgico y antibióticos.",
    defRO: "Acumulare localizată de puroi într-o cavitate neoformată prin dezintegrarea țesuturilor (necroză de lichefiere), cauzată de obicei de o infecție bacteriană. Înconjurat de o capsulă piogenă. Necesită drenaj chirurgical și antibiotice.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_a_absceso_frio",
    termES: "Absceso Frío",
    termRO: "Abces Rece",
    categoryColor: "bg-blue-50",
    defES: "Absceso que se forma lentamente sin los signos clásicos de inflamación aguda (calor, rubor). Es característico de la tuberculosis osteoarticular u otras infecciones crónicas.",
    defRO: "Abces care se formează lent fără semnele clasice de inflamație acută (căldură, roșeață). Este caracteristic tuberculozei osteoarticulare sau altor infecții cronice.",
    nanda: null
}, {
    id: "v_a_absceso_perianal",
    termES: "Absceso Perianal",
    termRO: "Abces Perianal",
    categoryColor: "bg-teal-50",
    defES: "Colección de pus en los tejidos blandos adyacentes al canal anal, originada frecuentemente por la infección de una glándula de las criptas anales. Provoca dolor intenso, fiebre y dificultad para sentarse. Puede evolucionar a fístula anal.",
    defRO: "Colecție de puroi în țesuturile moi adiacente canalului anal, originată frecvent de infecția unei glande din criptele anale. Provoacă durere intensă, febră și dificultate la ședere. Poate evolua spre fistulă anală.",
    nanda: null
}, {
    id: "v_a_absorcion",
    termES: "Absorción",
    termRO: "Absorbție",
    categoryColor: "bg-green-50",
    defES: "1. Fisiología: Paso de nutrientes y agua desde la luz intestinal hacia la sangre o linfa. 2. Farmacología: Proceso de traslado de un fármaco desde su sitio de administración hasta la circulación sistémica. Factores: solubilidad, pH, flujo sanguíneo.",
    defRO: "1. Fiziologie: Trecerea nutrienților și a apei din lumenul intestinal în sânge sau limfă. 2. Farmacologie: Procesul de transfer al unui medicament de la locul administrării până în circulația sistemică. Factori: solubilitate, pH, flux sanguin.",
    nanda: null
}, {
    id: "v_a_abstinencia",
    termES: "Abstinencia",
    termRO: "Abstinență",
    categoryColor: "bg-violet-50",
    defES: "Acción voluntaria de privarse de algo, especialmente de actividades placenteras (comer, beber alcohol, relaciones sexuales). En adicciones, cese del consumo de la sustancia que provoca el síndrome de abstinencia.",
    defRO: "Acțiune voluntară de a se priva de ceva, în special de activități plăcute (mâncat, băut alcool, relații sexuale). În dependențe, încetarea consumului substanței care provoacă sindromul de sevraj.",
    nanda: {
        codeES: "00262",
        codeRO: "00262",
        labelES: "Riesgo de síndrome de abstinencia agudo",
        labelRO: "Risc de sindrom de sevraj acut"
    }
}, {
    id: "v_a_abulia",
    termES: "Abulia",
    termRO: "Abulie",
    categoryColor: "bg-neutral-50",
    defES: "Falta severa o pérdida de voluntad o iniciativa para realizar actos o tomar decisiones. El paciente es capaz de realizar la acción, pero no inicia el comportamiento. Síntoma común en depresión mayor, esquizofrenia y lesiones del lóbulo frontal.",
    defRO: "Lipsă severă sau pierdere a voinței sau inițiativei de a efectua acte sau de a lua decizii. Pacientul este capabil să efectueze acțiunea, dar nu inițiază comportamentul. Simptom comun în depresia majoră, schizofrenie și leziuni ale lobului frontal.",
    nanda: null
}, {
    id: "v_a_abuso",
    termES: "Abuso",
    termRO: "Abuz",
    categoryColor: "bg-rose-50",
    defES: "Uso indebido, excesivo o dañino de algo (sustancias) o trato violento hacia alguien. Incluye abuso físico, sexual, emocional, financiero y negligencia. El abuso de sustancias se define por consecuencias adversas recurrentes.",
    defRO: "Utilizare necorespunzătoare, excesivă sau dăunătoare a ceva (substanțe) sau tratament violent față de cineva. Include abuz fizic, sexual, emoțional, financiar și neglijență. Abuzul de substanțe este definit prin consecințe adverse recurente.",
    nanda: {
        codeES: "00214",
        codeRO: "00214",
        labelES: "Disconfort",
        labelRO: "Disconfort"
    }
}, {
    id: "v_a_acalasia",
    termES: "Acalasia",
    termRO: "Acalazie",
    categoryColor: "bg-amber-50",
    defES: "Trastorno motor del esófago caracterizado por la incapacidad del esfínter esofágico inferior (EEI) para relajarse al tragar y ausencia de peristalsis esofágica. Causa disfagia progresiva a sólidos y líquidos, regurgitación y pérdida de peso.",
    defRO: "Tulburare motorie a esofagului caracterizată prin incapacitatea sfincterului esofagian inferior (SEI) de a se relaxa la înghițire și absența peristaltismului esofagian. Cauzează disfagie progresivă la solide și lichide, regurgitare și scădere în greutate.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_a_acantosis_nigricans",
    termES: "Acantosis Nigricans",
    termRO: "Acanthosis Nigricans",
    categoryColor: "bg-stone-50",
    defES: "Trastorno cutáneo caracterizado por áreas de piel oscura, aterciopelada y engrosada (hiperqueratosis e hiperpigmentación), típicamente en pliegues (cuello, axilas, ingles). Marcador clínico de resistencia a la insulina, diabetes tipo 2 u obesidad.",
    defRO: "Tulburare cutanată caracterizată prin zone de piele închisă la culoare, catifelată și îngroșată (hiperkeratoză și hiperpigmentare), tipic în pliuri (gât, axile, zona inghinală). Marker clinic al rezistenței la insulină, diabetului de tip 2 sau obezității.",
    nanda: null
}, {
    id: "v_a_acaro",
    termES: "Ácaro",
    termRO: "Acarian",
    categoryColor: "bg-sky-50",
    defES: "Artrópodo microscópico de la clase Arachnida. El Sarcoptes scabiei causa la sarna (escabiosis) al excavar túneles en la epidermis. Los ácaros del polvo (Dermatophagoides) son una causa común de alergia respiratoria y asma.",
    defRO: "Artropod microscopic din clasa Arachnida. Sarcoptes scabiei provoacă raia (scabia) săpând tuneluri în epidermă. Acarienii de praf (Dermatophagoides) sunt o cauză comună a alergiei respiratorii și astmului.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_a_acatisia",
    termES: "Acatisia",
    termRO: "Acatizie",
    categoryColor: "bg-fuchsia-50",
    defES: "Sensación subjetiva de inquietud motora interior y necesidad irresistible de moverse. El paciente no puede permanecer sentado o quieto. Es un efecto secundario extrapiramidal frecuente de los antipsicóticos y algunos antieméticos.",
    defRO: "Senzație subiectivă de neliniște motorie interioară și nevoie irezistibilă de a se mișca. Pacientul nu poate sta așezat sau nemișcat. Este un efect secundar extrapiramidal frecvent al antipsihoticelor și al unor antiemetice.",
    nanda: null
}, {
    id: "v_a_accesibilidad",
    termES: "Accesibilidad",
    termRO: "Accesibilitate",
    categoryColor: "bg-blue-50",
    defES: "Grado en el que los servicios de salud, entornos físicos o información pueden ser alcanzados y utilizados por todas las personas, incluidas aquellas con discapacidad (movilidad reducida, sensorial). Principio clave en salud pública.",
    defRO: "Gradul în care serviciile de sănătate, mediile fizice sau informațiile pot fi accesate și utilizate de toate persoanele, inclusiv de cele cu dizabilități (mobilitate redusă, senzoriale). Principiu cheie în sănătatea publică.",
    nanda: null
}, {
    id: "v_a_acceso",
    termES: "Acceso",
    termRO: "Acces",
    categoryColor: "bg-teal-50",
    defES: 'Vía de entrada o aproximación. En medicina, se refiere comúnmente al "acceso vascular" (sitio para introducir catéteres en vasos sanguíneos) o a un episodio súbito de una enfermedad (ej. acceso de tos, acceso epiléptico).',
    defRO: 'Cale de intrare sau abordare. În medicină, se referă frecvent la "acces vascular" (loc pentru introducerea cateterelor în vasele de sânge) sau la un episod brusc al unei boli (ex. acces de tuse, acces epileptic).',
    nanda: {
        codeES: "00266",
        codeRO: "00266",
        labelES: "Riesgo de infección de la herida quirúrgica",
        labelRO: "Risc de infecție a plăgii chirurgicale"
    }
}, {
    id: "v_a_acceso_vascular",
    termES: "Acceso Vascular",
    termRO: "Acces Vascular",
    categoryColor: "bg-red-50",
    defES: "Catéter insertado en una vena (periférica o central) o arteria para permitir la administración de fármacos, fluidos, nutrición parenteral o la extracción de sangre. Incluye CVP, CVC, PICC, reservorios (Port-a-Cath).",
    defRO: "Cateter introdus într-o venă (periferică sau centrală) sau arteră pentru a permite administrarea de medicamente, lichide, nutriție parenterală sau recoltarea de sânge. Include CVP, CVC, PICC, rezervoare (Port-a-Cath).",
    nanda: null
}, {
    id: "v_a_accesorio",
    termES: "Accesorio",
    termRO: "Accesoriu",
    categoryColor: "bg-zinc-50",
    defES: "Estructura anatómica suplementaria o auxiliar que puede estar presente o no, o que ayuda a la función principal (ej. nervio accesorio, músculos accesorios de la respiración que se activan en la disnea).",
    defRO: "Structură anatomică suplimentară sau auxiliară care poate fi prezentă sau nu, sau care ajută la funcția principală (ex. nervul accesoriu, mușchii accesori ai respirației care se activează în dispnee).",
    nanda: null
}, {
    id: "v_a_accidente",
    termES: "Accidente",
    termRO: "Accident",
    categoryColor: "bg-orange-50",
    defES: 'Evento involuntario, imprevisto y súbito que provoca daños físicos, lesiones o muerte. En salud laboral y epidemiología, se prefiere el término "lesión no intencionada" ya que la mayoría son prevenibles.',
    defRO: 'Eveniment involuntar, neprevăzut și brusc care provoacă daune fizice, leziuni sau moarte. În sănătatea muncii și epidemiologie, se preferă termenul "leziune neintenționată", deoarece majoritatea sunt prevenibile.',
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_a_acv",
    termES: "Accidente Cerebrovascular (ACV)",
    termRO: "Accident Vascular Cerebral (AVC)",
    categoryColor: "bg-red-50",
    defES: 'Ver "Ictus". Interrupción del flujo sanguíneo a una parte del cerebro (isquemia) o rotura de un vaso sanguíneo cerebral (hemorragia), causando muerte neuronal y déficits neurológicos focales agudos.',
    defRO: 'Vezi "Ictus". Întreruperea fluxului sanguin către o parte a creierului (ischemie) sau ruptura unui vas de sânge cerebral (hemoragie), provocând moarte neuronală și deficite neurologice focale acute.',
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_a_accidente_isquemico",
    termES: "Accidente Isquémico Transitorio (AIT)",
    termRO: "Atac Ischemic Tranzitoriu (AIT)",
    categoryColor: "bg-yellow-50",
    defES: "Episodio breve de disfunción neurológica causado por isquemia focal cerebral, espinal o retiniana, sin infarto agudo (muerte tisular). Los síntomas duran típicamente < 1 hora y se resuelven completamente. Es un signo de advertencia de un ACV inminente.",
    defRO: "Episod scurt de disfuncție neurologică cauzat de ischemie focală cerebrală, spinală sau retiniană, fără infarct acut (moarte tisulară). Simptomele durează de obicei < 1 oră și se remit complet. Este un semn de avertizare al unui AVC iminent.",
    nanda: null
}, {
    id: "v_a_accion",
    termES: "Acción",
    termRO: "Acțiune",
    categoryColor: "bg-slate-50",
    defES: "Acto de hacer algo; realización de una función o movimiento. En farmacología, es el efecto bioquímico o fisiológico de un fármaco (mecanismo de acción). En enfermería, es la implementación de intervenciones.",
    defRO: "Actul de a face ceva; realizarea unei funcții sau mișcări. În farmacologie, este efectul biochimic sau fiziologic al unui medicament (mecanism de acțiune). În nursing, este implementarea intervențiilor.",
    nanda: null
}, {
    id: "v_a_accion_especifica_dinamica",
    termES: "Acción Dinámica Específica (Termogénesis)",
    termRO: "Acțiune Dinamică Specifică (Termogeneză)",
    categoryColor: "bg-orange-50",
    defES: "Aumento de la tasa metabólica y producción de calor que ocurre tras la ingestión de alimentos, debido a la energía requerida para la digestión, absorción y metabolismo de los nutrientes (especialmente proteínas).",
    defRO: "Creșterea ratei metabolice și producția de căldură care apare după ingerarea alimentelor, datorită energiei necesare pentru digestia, absorbția și metabolismul nutrienților (în special proteine).",
    nanda: null
}, {
    id: "v_a_aceite",
    termES: "Aceite",
    termRO: "Ulei",
    categoryColor: "bg-lime-50",
    defES: "Sustancia grasa, líquida a temperatura ambiente, insoluble en agua pero soluble en solventes orgánicos. Pueden ser vegetales (oliva, girasol), animales (hígado de bacalao) o minerales (parafina). Vehículo para fármacos liposolubles.",
    defRO: "Substanță grasă, lichidă la temperatura camerei, insolubilă în apă dar solubilă în solvenți organici. Pot fi vegetale (măsline, floarea-soarelui), animale (ficat de cod) sau minerale (parafină). Vehicul pentru medicamente liposolubile.",
    nanda: null
}, {
    id: "v_a_aceite_mineral",
    termES: "Aceite Mineral",
    termRO: "Ulei Mineral",
    categoryColor: "bg-stone-50",
    defES: "Laxante lubricante derivado del petróleo. Recubre las heces y la mucosa intestinal para facilitar el paso. El uso prolongado puede interferir con la absorción de vitaminas liposolubles (A, D, E, K) y causar neumonía lipoidea si se aspira.",
    defRO: "Laxativ lubrifiant derivat din petrol. Îmbracă scaunul și mucoasa intestinală pentru a facilita trecerea. Utilizarea prelungită poate interfera cu absorbția vitaminelor liposolubile (A, D, E, K) și poate cauza pneumonie lipoidă dacă este aspirat.",
    nanda: null
}, {
    id: "v_a_aceleracion",
    termES: "Aceleración",
    termRO: "Accelerație",
    categoryColor: "bg-cyan-50",
    defES: "Tasa de cambio de velocidad. En fisiología fetal, aumento transitorio de la Frecuencia Cardíaca Fetal (FCF) >15 lpm durante >15 seg, indicativo de bienestar fetal y reactividad del sistema nervioso autónomo.",
    defRO: "Rata de schimbare a vitezei. În fiziologia fetală, creștere tranzitorie a Ritmului Cardiac Fetal (RCF) >15 bpm timp de >15 sec, indicativă a bunăstării fetale și reactivității sistemului nervos autonom.",
    nanda: null
}, {
    id: "v_a_acelular",
    termES: "Acelular",
    termRO: "Acelular",
    categoryColor: "bg-indigo-50",
    defES: "Que no contiene células o no está compuesto por ellas. Ejemplos: virus, priones, o ciertas vacunas (vacuna acelular contra la tos ferina) que contienen partes del microorganismo en lugar de células enteras para reducir efectos adversos.",
    defRO: "Care nu conține celule sau nu este compus din ele. Exemple: virusuri, prioni sau anumite vaccinuri (vaccin acelular împotriva tusei convulsive) care conțin părți ale microorganismului în loc de celule întregi pentru a reduce efectele adverse.",
    nanda: null
}, {
    id: "v_a_acento",
    termES: "Acento",
    termRO: "Accent",
    categoryColor: "bg-purple-50",
    defES: 'Énfasis dado a una sílaba en el habla o característica de pronunciación regional. En genética, "acento" puede referirse metafóricamente a la expresión variable. No es término médico primario salvo en logopedia.',
    defRO: "Accentul pus pe o silabă în vorbire sau caracteristică de pronunție regională. Nu este termen medical primar, cu excepția logopediei.",
    nanda: null
}, {
    id: "v_a_aceptacion",
    termES: "Aceptación",
    termRO: "Acceptare",
    categoryColor: "bg-pink-50",
    defES: "Etapa final en el modelo de duelo de Kübler-Ross, caracterizada por la asimilación de la realidad de una pérdida o muerte inminente y la paz emocional. No es resignación pasiva, sino reconocimiento tranquilo.",
    defRO: "Etapă finală în modelul de doliu Kübler-Ross, caracterizată prin asimilarea realității unei pierderi sau morți iminente și pace emoțională. Nu este o resemnare pasivă, ci o recunoaștere liniștită.",
    nanda: {
        codeES: "00136",
        codeRO: "00136",
        labelES: "Duelo",
        labelRO: "Doliu"
    }
}, {
    id: "v_a_acetabulo",
    termES: "Acetábulo",
    termRO: "Acetabul",
    categoryColor: "bg-zinc-50",
    defES: "Cavidad en forma de copa en la superficie lateral del hueso coxal (cadera) donde se articula la cabeza del fémur, formando la articulación coxofemoral. Las fracturas de acetábulo son lesiones graves de alta energía.",
    defRO: "Cavitate în formă de cupă pe suprafața laterală a osului coxal (șold) unde se articulează capul femurului, formând articulația coxofemurală. Fracturile de acetabul sunt leziuni grave de energie înaltă.",
    nanda: null
}, {
    id: "v_a_acetaminofeno",
    termES: "Acetaminofeno (Paracetamol)",
    termRO: "Acetaminofen (Paracetamol)",
    categoryColor: "bg-emerald-50",
    defES: "Fármaco analgésico y antipirético de primera elección, sin efectos antiinflamatorios significativos. Actúa inhibiendo la síntesis de prostaglandinas en el SNC. Hepatotóxico en dosis altas (antídoto: N-acetilcisteína).",
    defRO: "Medicament analgezic și antipiretic de primă alegere, fără efecte antiinflamatorii semnificative. Acționează prin inhibarea sintezei prostaglandinelor în SNC. Hepatotoxic în doze mari (antidot: N-acetilcisteină).",
    nanda: null
}, {
    id: "v_a_acetato",
    termES: "Acetato",
    termRO: "Acetat",
    categoryColor: "bg-blue-50",
    defES: "Sal o éster del ácido acético. En medicina, se usa como base para muchas formulaciones farmacológicas (ej. Acetato de hidrocortisona) o como tampón en soluciones de diálisis.",
    defRO: "Sare sau ester al acidului acetic. În medicină, se utilizează ca bază pentru multe formulări farmacologice (ex. Acetat de hidrocortizon) sau ca tampon în soluții de dializă.",
    nanda: null
}, {
    id: "v_a_acetilcolina",
    termES: "Acetilcolina (ACh)",
    termRO: "Acetilcolină (ACh)",
    categoryColor: "bg-fuchsia-50",
    defES: "Neurotransmisor clave liberado en las terminaciones nerviosas parasimpáticas, preganglionares simpáticas y en la placa motora muscular. Media la transmisión sináptica, contracción muscular, memoria y aprendizaje. Degradada por la acetilcolinesterasa.",
    defRO: "Neurotransmițător cheie eliberat la terminațiile nervoase parasimpatice, preganglionare simpatice și la placa motorie musculară. Mediază transmisia sinaptică, contracția musculară, memoria și învățarea. Degradată de acetilcolinesterază.",
    nanda: null
}, {
    id: "v_a_acetilcisteina",
    termES: "Acetilcisteína (N-acetilcisteína)",
    termRO: "Acetilcisteină (N-acetilcisteină)",
    categoryColor: "bg-teal-50",
    defES: "Fármaco mucolítico que reduce la viscosidad de las secreciones bronquiales. También es el antídoto específico para la sobredosis de paracetamol (restaura el glutatión hepático) y se usa para prevenir nefropatía por contraste.",
    defRO: "Medicament mucolitic care reduce vâscozitatea secrețiilor bronșice. Este, de asemenea, antidotul specific pentru supradozajul cu paracetamol (restabilește glutationul hepatic) și se utilizează pentru prevenirea nefropatiei de contrast.",
    nanda: null
}, {
    id: "v_a_acetilcolinesterasa",
    termES: "Acetilcolinesterasa",
    termRO: "Acetilcolinesterază",
    categoryColor: "bg-amber-50",
    defES: "Enzima que hidroliza y desactiva rápidamente la acetilcolina en la hendidura sináptica, permitiendo la repolarización de la membrana postsináptica. Los inhibidores de esta enzima (ej. Neostigmina, Donepezilo) se usan en Miastenia Gravis y Alzheimer.",
    defRO: "Enzimă care hidrolizează și dezactivează rapid acetilcolina în fanta sinaptică, permițând repolarizarea membranei postsinaptice. Inhibitorii acestei enzime (ex. Neostigmină, Donepezil) se utilizează în Miastenia Gravis și Alzheimer.",
    nanda: null
}, {
    id: "v_a_acetona",
    termES: "Acetona",
    termRO: "Acetonă",
    categoryColor: "bg-violet-50",
    defES: "El más simple de los cuerpos cetónicos. Se produce en el hígado cuando el metabolismo de las grasas es incompleto (lipólisis excesiva) por falta de insulina o ayuno. Volátil, se exhala por los pulmones dando un olor frutal característico al aliento (aliento cetósico).",
    defRO: "Cel mai simplu dintre corpii cetonici. Se produce în ficat când metabolismul grăsimilor este incomplet (lipoliză excesivă) din lipsă de insulină sau post. Volatilă, se exhală prin plămâni dând un miros fructat caracteristic respirației (halenă cetozică).",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_a_acidez",
    termES: "Acidez",
    termRO: "Aciditate",
    categoryColor: "bg-gray-50",
    defES: "1. Calidad de ser ácido (pH < 7). 2. Síntoma digestivo (pirosis) caracterizado por sensación de quemazón retrosternal debido al reflujo del contenido ácido gástrico hacia el esófago.",
    defRO: "1. Calitatea de a fi acid (pH < 7). 2. Simptom digestiv (pirozis) caracterizat prin senzație de arsură retrosternală datorată refluxului conținutului acid gastric în esofag.",
    nanda: {
        codeES: "00289",
        codeRO: "00289",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_a_acidificacion",
    termES: "Acidificación",
    termRO: "Acidifiere",
    categoryColor: "bg-sky-50",
    defES: "Proceso de aumentar la concentración de iones hidrógeno (H+) reduciendo el pH. En medicina, a veces se acidifica la orina (ej. con vitamina C o cloruro de amonio) para prevenir ciertos cálculos renales o tratar infecciones urinarias.",
    defRO: "Procesul de creștere a concentrației ionilor de hidrogen (H+) reducând pH-ul. În medicină, uneori se acidifiază urina (ex. cu vitamina C sau clorură de amoniu) pentru a preveni anumiți calculi renali sau a trata infecțiile urinare.",
    nanda: null
}, {
    id: "v_a_acido",
    termES: "Ácido",
    termRO: "Acid",
    categoryColor: "bg-lime-50",
    defES: "Sustancia química que libera iones hidrógeno (H+) en solución, tiene un pH < 7, sabor agrio y neutraliza las bases. En el cuerpo, el equilibrio ácido-base es vital para la homeostasis (pH sanguíneo 7.35-7.45).",
    defRO: "Substanță chimică care eliberează ioni de hidrogen (H+) în soluție, are un pH < 7, gust acru și neutralizează bazele. În corp, echilibrul acido-bazic este vital pentru homeostazie (pH sanguin 7.35-7.45).",
    nanda: null
}, {
    id: "v_a_acido_acetico",
    termES: "Ácido Acético",
    termRO: "Acid Acetic",
    categoryColor: "bg-rose-50",
    defES: "Ácido orgánico débil, componente principal del vinagre. Se utiliza en medicina diluido como antiséptico, para el tratamiento de infecciones del oído externo (otitis externa) y en ginecología para la detección de lesiones cervicales (test de ácido acético).",
    defRO: "Acid organic slab, component principal al oțetului. Se utilizează în medicină diluat ca antiseptic, pentru tratamentul infecțiilor urechii externe (otită externă) și în ginecologie pentru detectarea leziunilor cervicale (testul cu acid acetic).",
    nanda: null
}, {
    id: "v_a_acido_acetilsalicilico",
    termES: "Ácido Acetilsalicílico (Aspirina)",
    termRO: "Acid Acetilsalicilic (Aspirină)",
    categoryColor: "bg-red-50",
    defES: "Fármaco antiinflamatorio no esteroideo (AINE) con propiedades analgésicas, antipiréticas y antiagregantes plaquetarias (inhibe irreversiblemente la COX-1). Fundamental en la prevención secundaria cardiovascular. Contraindicado en niños (Síndrome de Reye).",
    defRO: "Medicament antiinflamator nesteroidian (AINS) cu proprietăți analgezice, antipiretice și antiagregante plachetare (inhibă ireversibil COX-1). Fundamental în prevenția secundară cardiovasculară. Contraindicat la copii (Sindromul Reye).",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_a_acido_aminocaproico",
    termES: "Ácido Aminocaproico",
    termRO: "Acid Aminocaproic",
    categoryColor: "bg-orange-50",
    defES: "Agente antifibrinolítico que inhibe la activación del plasminógeno, previniendo la degradación de los coágulos sanguíneos (fibrinólisis). Se usa para controlar hemorragias graves o en cirugía cardíaca.",
    defRO: "Agent antifibrinolitic care inhibă activarea plasminogenului, prevenind degradarea cheagurilor de sânge (fibrinoliza). Se utilizează pentru controlul hemoragiilor grave sau în chirurgia cardiacă.",
    nanda: null
}, {
    id: "v_a_acido_ascorbico",
    termES: "Ácido Ascórbico (Vitamina C)",
    termRO: "Acid Ascorbic (Vitamina C)",
    categoryColor: "bg-yellow-50",
    defES: "Vitamina hidrosoluble esencial antioxidante, necesaria para la síntesis de colágeno, reparación tisular y función inmunitaria. Su deficiencia causa escorbuto (sangrado de encías, mala cicatrización).",
    defRO: "Vitamină hidrosolubilă esențială antioxidantă, necesară pentru sinteza colagenului, repararea tisulară și funcția imunitară. Deficitul său cauzează scorbut (sângerarea gingiilor, vindecare deficitară).",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_a_acido_base_equilibrio",
    termES: "Ácido-Base (Equilibrio)",
    termRO: "Acido-Bazic (Echilibru)",
    categoryColor: "bg-cyan-50",
    defES: "Mecanismos homeostáticos que mantienen el pH de los fluidos corporales dentro de rangos normales (7.35-7.45). Involucra sistemas tampón (bicarbonato), regulación respiratoria (CO2) y regulación renal (HCO3-).",
    defRO: "Mecanisme homeostatice care mențin pH-ul fluidelor corporale în limite normale (7.35-7.45). Implică sisteme tampon (bicarbonat), reglare respiratorie (CO2) și reglare renală (HCO3-).",
    nanda: null
}, {
    id: "v_a_acido_biliar",
    termES: "Ácido Biliar",
    termRO: "Acid Biliar",
    categoryColor: "bg-green-50",
    defES: "Ácidos esteroideos derivados del colesterol sintetizados en el hígado (ácido cólico y quenodesoxicólico). Se conjugan para formar sales biliares, esenciales para la emulsificación y absorción de grasas y vitaminas liposolubles en el intestino.",
    defRO: "Acizi steroizi derivați din colesterol sintetizați în ficat (acid colic și chenodeoxicolic). Se conjugă pentru a forma săruri biliare, esențiale pentru emulsifierea și absorbția grăsimilor și vitaminelor liposolubile în intestin.",
    nanda: null
}, {
    id: "v_a_acido_borico",
    termES: "Ácido Bórico",
    termRO: "Acid Boric",
    categoryColor: "bg-stone-50",
    defES: "Antiséptico débil y bacteriostático. Se ha usado históricamente en soluciones oftálmicas o polvos tópicos, pero su uso ha disminuido por su toxicidad potencial si se absorbe sistémicamente (especialmente en niños).",
    defRO: "Antiseptic slab și bacteriostatic. A fost folosit istoric în soluții oftalmice sau pulberi topice, dar utilizarea sa a scăzut din cauza toxicității potențiale dacă este absorbit sistemic (în special la copii).",
    nanda: null
}, {
    id: "v_a_acido_clorhidrico",
    termES: "Ácido Clorhídrico (HCl)",
    termRO: "Acid Clorhidric (HCl)",
    categoryColor: "bg-blue-50",
    defES: "Ácido fuerte secretado por las células parietales del estómago. Mantiene el pH gástrico entre 1-2, activando el pepsinógeno a pepsina (digestión de proteínas) y actuando como barrera bactericida.",
    defRO: "Acid tare secretat de celulele parietale ale stomacului. Menține pH-ul gastric între 1-2, activând pepsinogenul în pepsină (digestia proteinelor) și acționând ca barieră bactericidă.",
    nanda: null
}, {
    id: "v_a_acido_folico",
    termES: "Ácido Fólico (Vitamina B9)",
    termRO: "Acid Folic (Vitamina B9)",
    categoryColor: "bg-emerald-50",
    defES: "Vitamina hidrosoluble esencial para la síntesis de ADN y la maduración de glóbulos rojos. Su suplementación periconcepcional es crítica para prevenir defectos del tubo neural (espina bífida) en el feto. Deficiencia causa anemia megaloblástica.",
    defRO: "Vitamină hidrosolubilă esențială pentru sinteza ADN-ului și maturarea globulelor roșii. Suplimentarea sa periconcepțională este critică pentru prevenirea defectelor de tub neural (spina bifida) la făt. Deficitul cauzează anemie megaloblastică.",
    nanda: null
}, {
    id: "v_a_acido_gastro",
    termES: "Ácido Gástrico",
    termRO: "Acid Gastric",
    categoryColor: "bg-indigo-50",
    defES: "Líquido digestivo formado en el estómago, compuesto principalmente por ácido clorhídrico (HCl), cloruro de potasio y cloruro de sodio. Clave para la digestión de proteínas. La hipersecreción puede causar úlceras pépticas.",
    defRO: "Lichid digestiv format în stomac, compus în principal din acid clorhidric (HCl), clorură de potasiu și clorură de sodiu. Esențial pentru digestia proteinelor. Hipersecreția poate cauza ulcere peptice.",
    nanda: null
}, {
    id: "v_a_acido_graso",
    termES: "Ácido Graso",
    termRO: "Acid Gras",
    categoryColor: "bg-violet-50",
    defES: "Cadena de hidrocarburos que termina en un grupo carboxilo. Pueden ser saturados (animales, sólidos) o insaturados (vegetales, líquidos). Son la principal fuente de combustible energético del cuerpo y componentes estructurales de las membranas celulares.",
    defRO: "Lanț de hidrocarburi care se termină într-un grup carboxil. Pot fi saturați (animali, solizi) sau nesaturați (vegetali, lichizi). Sunt principala sursă de combustibil energetic al corpului și componente structurale ale membranelor celulare.",
    nanda: null
}, {
    id: "v_a_acido_graso_esencial",
    termES: "Ácido Graso Esencial",
    termRO: "Acid Gras Esențial",
    categoryColor: "bg-fuchsia-50",
    defES: "Ácidos grasos que el cuerpo humano no puede sintetizar y deben obtenerse de la dieta (ácido linoleico [Omega-6] y alfa-linolénico [Omega-3]). Vitales para el desarrollo cerebral, coagulación e inflamación.",
    defRO: "Acizi grași pe care corpul uman nu îi poate sintetiza și trebuie obținuți din dietă (acid linoleic [Omega-6] și alfa-linolenic [Omega-3]). Vitali pentru dezvoltarea creierului, coagulare și inflamație.",
    nanda: null
}, {
    id: "v_a_acido_hialuronico",
    termES: "Ácido Hialurónico",
    termRO: "Acid Hialuronic",
    categoryColor: "bg-teal-50",
    defES: "Glicosaminoglicano presente naturalmente en el tejido conectivo, piel y líquido sinovial. Retiene grandes cantidades de agua, lubricando articulaciones y dando volumen a la piel. Usado en estética (rellenos) y traumatología (viscosuplementación).",
    defRO: "Glicozaminoglican prezent în mod natural în țesutul conjunctiv, piele și lichid sinovial. Reține cantități mari de apă, lubrifiind articulațiile și dând volum pielii. Folosit în estetică (fillere) și traumatologie (vâscosuplementare).",
    nanda: null
}, {
    id: "v_a_acido_lactico",
    termES: "Ácido Láctico (Lactato)",
    termRO: "Acid Lactic (Lactat)",
    categoryColor: "bg-amber-50",
    defES: "Producto final de la glucólisis anaeróbica (metabolismo sin oxígeno). Se acumula en los músculos durante el ejercicio intenso y en tejidos hipóxicos (shock, sepsis), causando acidosis láctica. Marcador crítico de perfusión tisular.",
    defRO: "Produs final al glicolizei anaerobe (metabolism fără oxigen). Se acumulează în mușchi în timpul exercițiilor intense și în țesuturile hipoxice (șoc, sepsis), provocând acidoză lactică. Marker critic al perfuziei tisulare.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_a_acido_nucleico",
    termES: "Ácido Nucleico",
    termRO: "Acid Nucleic",
    categoryColor: "bg-slate-50",
    defES: "Macromolécula compleja (ADN o ARN) compuesta por cadenas de nucleótidos. Almacena y transmite la información genética hereditaria y dirige la síntesis de proteínas.",
    defRO: "Macromoleculă complexă (ADN sau ARN) compusă din lanțuri de nucleotide. Stochează și transmite informația genetică ereditară și dirijează sinteza proteinelor.",
    nanda: null
}, {
    id: "v_a_acido_urico",
    termES: "Ácido Úrico",
    termRO: "Acid Uric",
    categoryColor: "bg-zinc-50",
    defES: "Producto final del metabolismo de las purinas (componentes del ADN). Se excreta por el riñón. La hiperuricemia (exceso en sangre) puede provocar la precipitación de cristales en articulaciones (Gota) o riñones (cálculos de urato).",
    defRO: "Produs final al metabolismului purinelor (componente ale ADN). Se excretă prin rinichi. Hiperuricemia (exces în sânge) poate provoca precipitarea cristalelor în articulații (Gută) sau rinichi (calculi de urat).",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_a_acido_valproico",
    termES: "Ácido Valproico",
    termRO: "Acid Valproic",
    categoryColor: "bg-red-50",
    defES: "Fármaco antiepiléptico y estabilizador del estado de ánimo. Aumenta los niveles de GABA en el cerebro. Usado en epilepsia, trastorno bipolar y profilaxis de migraña. Requiere monitorización de niveles séricos y función hepática.",
    defRO: "Medicament antiepileptic și stabilizator al dispoziției. Crește nivelurile de GABA în creier. Folosit în epilepsie, tulburare bipolară și profilaxia migrenei. Necesită monitorizarea nivelurilor serice și a funcției hepatice.",
    nanda: null
}, {
    id: "v_a_acidosis",
    termES: "Acidosis",
    termRO: "Acidoză",
    categoryColor: "bg-orange-50",
    defES: "Estado patológico caracterizado por un aumento de la concentración de iones hidrógeno en sangre (pH arterial < 7.35). Puede deberse a acumulación de ácidos (metabólica) o retención de CO2 (respiratoria). Deprime el sistema nervioso central.",
    defRO: "Stare patologică caracterizată printr-o creștere a concentrației ionilor de hidrogen în sânge (pH arterial < 7.35). Se poate datora acumulării de acizi (metabolică) sau retenției de CO2 (respiratorie). Deprimă sistemul nervos central.",
    nanda: null
}, {
    id: "v_a_acidosis_metabolica",
    termES: "Acidosis Metabólica",
    termRO: "Acidoză Metabolică",
    categoryColor: "bg-yellow-50",
    defES: "Desequilibrio ácido-base (pH < 7.35, HCO3- bajo) causado por pérdida de bicarbonato (diarrea) o acumulación de ácidos no volátiles (cetoacidosis diabética, acidosis láctica, fallo renal). Compensación: hiperventilación (Respirație Kussmaul).",
    defRO: "Dezechilibru acido-bazic (pH < 7.35, HCO3- scăzut) cauzat de pierderea bicarbonatului (diaree) sau acumularea de acizi nevolatili (cetoacidoză diabetică, acidoză lactică, insuficiență renală). Compensare: hiperventilație (Respirație Kussmaul).",
    nanda: null
}, {
    id: "v_a_acidosis_respiratoria",
    termES: "Acidosis Respiratoria",
    termRO: "Acidoză Respiratorie",
    categoryColor: "bg-lime-50",
    defES: "Desequilibrio ácido-base (pH < 7.35, PaCO2 alto) debido a hipoventilación alveolar que impide la eliminación adecuada de CO2 (EPOC, asma severo, depresión respiratoria por opioides).",
    defRO: "Dezechilibru acido-bazic (pH < 7.35, PaCO2 crescut) datorat hipoventilației alveolare care împiedică eliminarea adecvată a CO2 (BPOC, astm sever, depresie respiratorie indusă de opioide).",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_a_aciduria",
    termES: "Aciduria",
    termRO: "Acidurie",
    categoryColor: "bg-emerald-50",
    defES: 'Presencia de un exceso de ácido en la orina. La "aciduria paradójica" ocurre cuando se excreta orina ácida a pesar de existir una alcalosis metabólica sistémica, común en deshidratación con hipopotasemia.',
    defRO: 'Prezența unui exces de acid în urină. "Aciduria paradoxală" apare când se excretă urină acidă în ciuda existenței unei alcaloze metabolice sistemice, comună în deshidratarea cu hipokaliemie.',
    nanda: null
}, {
    id: "v_a_acinesia",
    termES: "Acinesia (Akinesia)",
    termRO: "Achinezie",
    categoryColor: "bg-indigo-50",
    defES: "Ausencia, pérdida o deterioro severo de la capacidad de movimiento voluntario. Es un signo cardinal de síndromes parkinsonianos (como la enfermedad de Parkinson) y estados catatónicos. Se manifiesta como una dificultad para iniciar el movimiento (congelación) o una inmovilidad total.",
    defRO: "Absența, pierderea sau deteriorarea severă a capacității de mișcare voluntară. Este un semn cardinal al sindroamelor parkinsoniene (cum ar fi boala Parkinson) și al stărilor catatonice. Se manifestă ca o dificultate de a iniția mișcarea (înghețare) sau o imobilitate totală.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_a_acino",
    termES: "Acino",
    termRO: "Acin",
    categoryColor: "bg-red-50",
    defES: "Unidad estructural y funcional más pequeña de una glándula exocrina, con forma de saco o uva, donde se produce la secreción (ej. acinos pancreáticos que secretan enzimas digestivas, acinos mamarios que producen leche).",
    defRO: "Cea mai mică unitate structurală și funcțională a unei glande exocrine, în formă de sac sau strugure, unde se produce secreția (ex. acini pancreatici care secretă enzime digestive, acini mamari care produc lapte).",
    nanda: null
}, {
    id: "v_a_aclaramiento",
    termES: "Aclaramiento (Clearance)",
    termRO: "Clearance (Depurare)",
    categoryColor: "bg-blue-50",
    defES: "Medida de la capacidad de un órgano (generalmente los riñones) para eliminar una sustancia del plasma sanguíneo por unidad de tiempo. El aclaramiento de creatinina (ClCr) es el estándar clínico para estimar la Tasa de Filtrado Glomerular (TFG).",
    defRO: "Măsură a capacității unui organ (de obicei rinichii) de a elimina o substanță din plasma sanguină pe unitatea de timp. Clearance-ul creatininei (ClCr) este standardul clinic pentru estimarea Ratei de Filtrare Glomerulară (RFG).",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_a_aclimatacion",
    termES: "Aclimatación",
    termRO: "Aclimatizare",
    categoryColor: "bg-orange-50",
    defES: "Proceso fisiológico de adaptación gradual del organismo a cambios en el ambiente (temperatura, altitud, clima) para mantener la homeostasis. La aclimatación a la altitud implica aumento de eritropoyetina y frecuencia respiratoria.",
    defRO: "Proces fiziologic de adaptare treptată a organismului la schimbările din mediu (temperatură, altitudine, climă) pentru a menține homeostazia. Aclimatizarea la altitudine implică creșterea eritropoietinei și frecvenței respiratorii.",
    nanda: null
}, {
    id: "v_a_acne_vulgar",
    termES: "Acné Vulgar",
    termRO: "Acnee Vulgară",
    categoryColor: "bg-pink-50",
    defES: "Enfermedad inflamatoria crónica de la unidad pilosebácea muy común en la adolescencia. Se caracteriza por comedones (puntos negros/blancos), pápulas, pústulas y nódulos, causados por hipersecreción sebácea, hiperqueratosis y proliferación de Cutibacterium acnes.",
    defRO: "Boală inflamatorie cronică a unității pilosebacee foarte frecventă în adolescență. Se caracterizează prin comedoane (puncte negre/albe), papule, pustule și noduli, cauzate de hipersecreție sebacee, hiperkeratoză și proliferarea Cutibacterium acnes.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_a_acne_rosacea",
    termES: "Acné Rosácea",
    termRO: "Acnee Rozacee",
    categoryColor: "bg-red-50",
    defES: "Dermatosis inflamatoria crónica de la cara (mejillas, nariz) en adultos, caracterizada por eritema persistente, telangiectasias y episodios de pústulas, sin comedones. Se agrava con el alcohol, el calor y el estrés.",
    defRO: "Dermatoză inflamatorie cronică a feței (obraji, nas) la adulți, caracterizată prin eritem persistent, telangiectazii și episoade de pustule, fără comedoane. Se agravează cu alcool, căldură și stres.",
    nanda: null
}, {
    id: "v_a_acolia",
    termES: "Acolia",
    termRO: "Acolie",
    categoryColor: "bg-stone-50",
    defES: "Ausencia o disminución marcada de la secreción biliar al intestino, provocando heces de color blanco, grisáceo o arcilla (masilla). Es un signo clínico de obstrucción de las vías biliares (colestasis extrahepática o intrahepática).",
    defRO: "Absența sau scăderea marcată a secreției biliare în intestin, provocând scaune de culoare albă, cenușie sau argiloasă (chit). Este un semn clinic de obstrucție a căilor biliare (colestază extrahepatică sau intrahepatică).",
    nanda: null
}, {
    id: "v_a_acondicionamiento",
    termES: "Acondicionamiento Físico",
    termRO: "Condiționare Fizică",
    categoryColor: "bg-green-50",
    defES: "Programa de ejercicios planificado para mejorar la capacidad funcional de los sistemas cardiovascular y musculoesquelético. Fundamental en rehabilitación cardíaca y pulmonar para aumentar la tolerancia a la actividad.",
    defRO: "Program de exerciții planificat pentru a îmbunătăți capacitatea funcțională a sistemelor cardiovascular și musculo-scheletic. Fundamental în reabilitarea cardiacă și pulmonară pentru a crește toleranța la activitate.",
    nanda: {
        codeES: "00092",
        codeRO: "00092",
        labelES: "Intolerancia a la actividad",
        labelRO: "Intoleranță la activitate"
    }
}, {
    id: "v_a_acoplamiento",
    termES: "Acoplamiento (Coupling)",
    termRO: "Cuplare (Coupling)",
    categoryColor: "bg-cyan-50",
    defES: "En cardiología, aparición de un latido prematuro (extrasístole) que sigue de forma constante a un latido normal a un intervalo fijo (ej. bigeminismo: un latido normal seguido de una extrasístole).",
    defRO: "În cardiologie, apariția unei bătăi premature (extrasistolă) care urmează în mod constant o bătaie normală la un interval fix (ex. bigeminism: o bătaie normală urmată de o extrasistolă).",
    nanda: null
}, {
    id: "v_a_acromegalia",
    termES: "Acromegalia",
    termRO: "Acromegalie",
    categoryColor: "bg-violet-50",
    defES: "Enfermedad crónica causada por la hipersecreción de hormona del crecimiento (GH) por un adenoma hipofisario después del cierre de las epífisis óseas. Se caracteriza por agrandamiento de manos, pies, mandíbula (prognatismo) y órganos internos.",
    defRO: "Boală cronică cauzată de hipersecreția de hormon de creștere (GH) de către un adenom hipofizar după închiderea epifizelor osoase. Se caracterizează prin mărirea mâinilor, picioarelor, maxilarului (prognatism) și a organelor interne.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_a_acromion",
    termES: "Acromion",
    termRO: "Acromion",
    categoryColor: "bg-stone-50",
    defES: "Proyección ósea aplanada y lateral de la espina de la escápula (omóplato) que se articula con la clavícula (articulación acromioclavicular) y forma el punto más alto del hombro. Punto de referencia anatómico para inyecciones intramusculares (deltoides).",
    defRO: "Proiecție osoasă aplatizată și laterală a spinei scapulei (omoplat) care se articulează cu clavicula (articulația acromioclaviculară) și formează punctul cel mai înalt al umărului. Punct de referință anatomic pentru injecții intramusculare (deltoid).",
    nanda: null
}, {
    id: "v_a_acropaquia",
    termES: "Acropaquia (Dedos en palillo de tambor)",
    termRO: "Hipocratism Digital (Degete hipocratice)",
    categoryColor: "bg-amber-50",
    defES: "Deformidad indolora de los dedos de manos y pies caracterizada por el agrandamiento de las falanges distales y curvatura convexa de las uñas (uñas en vidrio de reloj). Signo de hipoxia crónica (EPOC, fibrosis quística, cardiopatías cianóticas) o cáncer de pulmón.",
    defRO: "Deformare nedureroasă a degetelor de la mâini și picioare caracterizată prin mărirea falangelor distale și curbura convexă a unghiilor (unghii în sticlă de ceasornic). Semn de hipoxie cronică (BPOC, fibroză chistică, cardiopatii cianotice) sau cancer pulmonar.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_a_acth",
    termES: "ACTH (Hormona Adrenocorticotropa)",
    termRO: "ACTH (Hormon Adrenocorticotrop)",
    categoryColor: "bg-yellow-50",
    defES: "Hormona producida por la hipófisis anterior que estimula la corteza suprarrenal para secretar glucocorticoides (cortisol). Su medición es clave en el diagnóstico de la enfermedad de Cushing (exceso) o Addison (déficit).",
    defRO: "Hormon produs de hipofiza anterioară care stimulează cortexul suprarenal să secrete glucocorticoizi (cortizol). Măsurarea sa este esențială în diagnosticul bolii Cushing (exces) sau Addison (deficit).",
    nanda: null
}, {
    id: "v_a_actina",
    termES: "Actina",
    termRO: "Actină",
    categoryColor: "bg-purple-50",
    defES: "Proteína contráctil que forma los filamentos delgados en las miofibrillas musculares. Junto con la miosina, es fundamental para la contracción muscular y el movimiento celular.",
    defRO: "Proteină contractilă care formează filamentele subțiri în miofibrilele musculare. Împreună cu miozina, este fundamentală pentru contracția musculară și mișcarea celulară.",
    nanda: null
}, {
    id: "v_a_actitud",
    termES: "Actitud",
    termRO: "Atitudine (Poziție)",
    categoryColor: "bg-indigo-50",
    defES: "1. Postura corporal: Posición del cuerpo (ej. actitud fetal). 2. Psicología: Disposición mental o emocional hacia una persona, objeto o situación. 3. Obstetricia: Relación de las partes fetales entre sí (ej. flexión).",
    defRO: "1. Postură corporală: Poziția corpului (ex. atitudine fetală). 2. Psihologie: Dispoziție mentală sau emoțională față de o persoană, obiect sau situație. 3. Obstetrică: Relația părților fetale între ele (ex. flexie).",
    nanda: null
}, {
    id: "v_a_actividad",
    termES: "Actividad",
    termRO: "Activitate",
    categoryColor: "bg-blue-50",
    defES: "Acción de realizar tareas físicas o mentales. En enfermería, se valora el nivel de actividad funcional para determinar el grado de independencia (Índice de Barthel, Katz).",
    defRO: "Acțiunea de a efectua sarcini fizice sau mentale. În nursing, se evaluează nivelul de activitate funcțională pentru a determina gradul de independență (Indexul Barthel, Katz).",
    nanda: {
        codeES: "00092",
        codeRO: "00092",
        labelES: "Intolerancia a la actividad",
        labelRO: "Intoleranță la activitate"
    }
}, {
    id: "v_a_actividades_vida_diaria",
    termES: "Actividades de la Vida Diaria (AVD)",
    termRO: "Activități ale Vieții Zilnice (AVZ)",
    categoryColor: "bg-green-50",
    defES: "Tareas básicas necesarias para el autocuidado independiente: comer, bañarse, vestirse, uso del inodoro, movilidad y continencia. Las AVD instrumentales (AIVD) incluyen cocinar, manejar dinero, usar teléfono.",
    defRO: "Sarcini de bază necesare pentru auto-îngrijirea independentă: mâncat, spălat, îmbrăcat, utilizarea toaletei, mobilitate și continență. AVZ instrumentale (AIVD) includ gătitul, gestionarea banilor, utilizarea telefonului.",
    nanda: {
        codeES: "00108",
        codeRO: "00108",
        labelES: "Déficit de autocuidado: Baño",
        labelRO: "Deficit de auto-îngrijire: Baie"
    }
}, {
    id: "v_a_activo",
    termES: "Activo",
    termRO: "Activ",
    categoryColor: "bg-slate-50",
    defES: "Que implica acción, movimiento o gasto de energía. Ej. Inmunidad activa (producción propia de anticuerpos), transporte activo (movimiento de moléculas contra gradiente con gasto de ATP).",
    defRO: "Care implică acțiune, mișcare sau consum de energie. Ex. Imunitate activă (producție proprie de anticorpi), transport activ (mișcarea moleculelor împotriva gradientului cu consum de ATP).",
    nanda: null
}, {
    id: "v_a_actuacion_enfermeria",
    termES: "Actuación de Enfermería (Intervención)",
    termRO: "Intervenție de Nursing",
    categoryColor: "bg-teal-50",
    defES: "Cualquier tratamiento o acción, basado en el juicio clínico y el conocimiento, que realiza un enfermero para mejorar los resultados del paciente/cliente. Se clasifican en la taxonomía NIC (Nursing Interventions Classification).",
    defRO: "Orice tratament sau acțiune, bazată pe judecata clinică și cunoștințe, pe care o efectuează un asistent medical pentru a îmbunătăți rezultatele pacientului/clientului. Sunt clasificate în taxonomia NIC (Nursing Interventions Classification).",
    nanda: null
}, {
    id: "v_a_acueducto_silvio",
    termES: "Acueducto de Silvio (Cerebral)",
    termRO: "Apeductul lui Sylvius (Cerebral)",
    categoryColor: "bg-gray-50",
    defES: "Canal estrecho que conecta el tercer y cuarto ventrículo en el cerebro, permitiendo el flujo del líquido cefalorraquídeo (LCR). Su obstrucción (estenosis) causa hidrocefalia obstructiva.",
    defRO: "Canal îngust care conectează ventriculul trei și patru în creier, permițând fluxul lichidului cefalorahidian (LCR). Obstrucția sa (stenoză) cauzează hidrocefalie obstructivă.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_a_acufeno",
    termES: "Acúfeno (Tinnitus)",
    termRO: "Acufenă (Tinitus)",
    categoryColor: "bg-orange-50",
    defES: "Percepción de sonido (zumbido, pitido, silbido) en los oídos o cabeza sin que exista una fuente externa de sonido. Puede ser causado por trauma acústico, ototóxicos (aspirina, aminoglucósidos), presbiacusia o patología vascular.",
    defRO: "Percepția sunetului (bâzâit, țiuit, șuierat) în urechi sau cap fără a exista o sursă externă de sunet. Poate fi cauzat de traume acustice, ototoxice (aspirină, aminoglicozide), prezbiacuzie sau patologie vasculară.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: auditiva",
        labelRO: "Tulburare de percepție senzorială: auditivă"
    }
}, {
    id: "v_a_acumulacion",
    termES: "Acumulación",
    termRO: "Acumulare",
    categoryColor: "bg-stone-50",
    defES: "Acción de reunir o amontonar. En medicina, depósito patológico de sustancias (ej. acumulación de líquido en edema, acumulación de grasa en esteatosis). En farmacología, efecto acumulativo por eliminación lenta del fármaco.",
    defRO: "Acțiunea de a aduna sau îngrămădi. În medicină, depozit patologic de substanțe (ex. acumulare de lichid în edem, acumulare de grăsime în steatoză). În farmacologie, efect cumulativ prin eliminarea lentă a medicamentului.",
    nanda: null
}, {
    id: "v_a_acupresion",
    termES: "Acupresión (Digitopuntura)",
    termRO: "Acupresură",
    categoryColor: "bg-lime-50",
    defES: "Terapia complementaria basada en la medicina tradicional china que aplica presión manual con los dedos sobre puntos específicos (puntos de acupuntura) para estimular el flujo de energía (Qi), aliviar el dolor o reducir náuseas.",
    defRO: "Terapie complementară bazată pe medicina tradițională chineză care aplică presiune manuală cu degetele asupra unor puncte specifice (puncte de acupunctură) pentru a stimula fluxul de energie (Qi), a ameliora durerea sau a reduce greața.",
    nanda: null
}, {
    id: "v_a_acupuntura",
    termES: "Acupuntura",
    termRO: "Acupunctură",
    categoryColor: "bg-lime-50",
    defES: "Técnica terapéutica china que implica la inserción de agujas muy finas en puntos específicos del cuerpo para equilibrar el flujo de energía. Reconocida por la OMS para el tratamiento del dolor crónico, náuseas y otras afecciones.",
    defRO: "Tehnică terapeutică chineză care implică inserția unor ace foarte fine în puncte specifice ale corpului pentru a echilibra fluxul de energie. Recunoscută de OMS pentru tratamentul durerii cronice, greței și altor afecțiuni.",
    nanda: null
}, {
    id: "v_a_acustico",
    termES: "Acústico",
    termRO: "Acustic",
    categoryColor: "bg-slate-50",
    defES: "Relativo al sonido o al sentido del oído. El nervio acústico (VIII par craneal o vestibulococlear) transmite impulsos auditivos y del equilibrio desde el oído interno al cerebro.",
    defRO: "Relativ la sunet sau la simțul auzului. Nervul acustic (perechea VIII craniană sau vestibulococlear) transmite impulsuri auditive și de echilibru de la urechea internă la creier.",
    nanda: null
}, {
    id: "v_a_adactilia",
    termES: "Adactilia",
    termRO: "Adactilie",
    categoryColor: "bg-red-50",
    defES: "Ausencia congénita de dedos en las manos o los pies. Es una malformación rara que puede ocurrir aislada o asociada a síndromes genéticos (ej. síndrome de Hanhart).",
    defRO: "Absența congenitală a degetelor la mâini sau picioare. Este o malformație rară care poate apărea izolat sau asociată cu sindroame genetice (ex. sindromul Hanhart).",
    nanda: null
}, {
    id: "v_a_adaptacion",
    termES: "Adaptación",
    termRO: "Adaptare",
    categoryColor: "bg-blue-50",
    defES: "Proceso por el cual un organismo se ajusta a los cambios en su entorno interno o externo para sobrevivir y mantener la homeostasis. Incluye adaptación fisiológica (ej. hipertrofia muscular), sensorial (disminución de respuesta a estímulo constante) y psicosocial.",
    defRO: "Proces prin care un organism se ajustează la schimbările din mediul său intern sau extern pentru a supraviețui și a menține homeostazia. Include adaptare fiziologică (ex. hipertrofie musculară), senzorială (scăderea răspunsului la stimul constant) și psihosocială.",
    nanda: {
        codeES: "00069",
        codeRO: "00069",
        labelES: "Afrontamiento ineficaz",
        labelRO: "Coping ineficient"
    }
}, {
    id: "v_a_addison",
    termES: "Addison (Enfermedad de)",
    termRO: "Addison (Boala)",
    categoryColor: "bg-amber-50",
    defES: "Insuficiencia corticosuprarrenal primaria crónica por destrucción de la corteza suprarrenal (autoinmune o infecciosa). Causa déficit de cortisol y aldosterona. Signos: astenia, hipotensión, hiperpigmentación cutánea (melanodermia), hiponatremia e hiperpotasemia.",
    defRO: "Insuficiență corticosuprarenală primară cronică prin distrugerea cortexului suprarenal (autoimună sau infecțioasă). Cauzează deficit de cortizol și aldosteron. Semne: astenie, hipotensiune, hiperpigmentare cutanată (melanodermie), hiponatremie și hiperkaliemie.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_a_aduccion",
    termES: "Aducción",
    termRO: "Adducție",
    categoryColor: "bg-violet-50",
    defES: "Movimiento de una extremidad o parte del cuerpo hacia el plano medio o línea media. Es el movimiento opuesto a la abducción. Músculos aductores realizan esta función (ej. aproximar las piernas).",
    defRO: "Mișcarea unui membru sau a unei părți a corpului către planul median sau linia de mijloc. Este mișcarea opusă abducției. Mușchii aductori realizează această funcție (ex. apropierea picioarelor).",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_a_adenectomia",
    termES: "Adenectomía",
    termRO: "Adenectomie",
    categoryColor: "bg-rose-50",
    defES: "Extirpación quirúrgica de una glándula (ej. prostatectomía por adenoma) o ganglio linfático. El término específico suele depender del órgano (adenoidectomía, linfadenectomía).",
    defRO: "Extirparea chirurgicală a unei glande (ex. prostatectomie pentru adenom) sau ganglion limfatic. Termenul specific depinde de obicei de organ (adenoidectomie, limfadenectomie).",
    nanda: null
}, {
    id: "v_a_adenina",
    termES: "Adenina",
    termRO: "Adenină",
    categoryColor: "bg-zinc-50",
    defES: "Base nitrogenada purínica que forma parte de los ácidos nucleicos (ADN y ARN) y moléculas energéticas (ATP, ADP). En el ADN, se empareja siempre con la Timina; en el ARN, con el Uracilo.",
    defRO: "Bază azotată purinică care face parte din acizii nucleici (ADN și ARN) și moleculele energetice (ATP, ADP). În ADN, se împerechează întotdeauna cu Timina; în ARN, cu Uracilul.",
    nanda: null
}, {
    id: "v_a_adenitis",
    termES: "Adenitis",
    termRO: "Adenită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de un ganglio linfático o grupo ganglionar, generalmente secundaria a una infección en la zona de drenaje. Se manifiesta con dolor, aumento de tamaño (adenomegalia), calor y enrojecimiento local.",
    defRO: "Inflamația unui ganglion limfatic sau grup ganglionar, de obicei secundară unei infecții în zona de drenaj. Se manifestă prin durere, creștere în dimensiune (adenomegalie), căldură și roșeață locală.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_a_adenocarcinoma",
    termES: "Adenocarcinoma",
    termRO: "Adenocarcinom",
    categoryColor: "bg-stone-50",
    defES: "Neoplasia maligna derivada del epitelio glandular o secretor. Es el tipo histológico más frecuente en cánceres de mama, colon, próstata, pulmón (no microcítico) y páncreas.",
    defRO: "Neoplazie malignă derivată din epiteliul glandular sau secretor. Este tipul histologic cel mai frecvent în cancerele de sân, colon, prostată, plămân (non-microcitic) și pancreas.",
    nanda: null
}, {
    id: "v_a_adenohipofisis",
    termES: "Adenohipófisis",
    termRO: "Adenohipofiză",
    categoryColor: "bg-yellow-50",
    defES: "Lóbulo anterior de la glándula hipófisis. Sintetiza y secreta hormonas trópicas vitales: GH, ACTH, TSH, FSH, LH y Prolactina, regulando el crecimiento, metabolismo y reproducción.",
    defRO: "Lobul anterior al glandei hipofize. Sintetizează și secretă hormoni tropici vitali: GH, ACTH, TSH, FSH, LH și Prolactina, reglând creșterea, metabolismul și reproducerea.",
    nanda: null
}, {
    id: "v_a_adenoides",
    termES: "Adenoides (Vegetaciones)",
    termRO: "Adenoide (Vegetații)",
    categoryColor: "bg-pink-50",
    defES: "Tejido linfoide situado en la nasofaringe (amígdala faríngea). Su hipertrofia en niños puede obstruir la vía aérea nasal, causando respiración bucal, ronquidos, apnea del sueño y otitis media recurrente (facies adenoidea).",
    defRO: "Țesut limfoid situat în nazofaringe (amigdala faringiană). Hipertrofia sa la copii poate obstrucționa calea aeriană nazală, cauzând respirație bucală, sforăit, apnee în somn și otită medie recurentă (facies adenoidian).",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_a_adenoma",
    termES: "Adenoma",
    termRO: "Adenom",
    categoryColor: "bg-stone-50",
    defES: "Tumor benigno de origen epitelial glandular. Aunque benigno, puede causar patología por compresión (efecto masa) o por hipersecreción hormonal (ej. adenoma tóxico tiroideo, adenoma hipofisario).",
    defRO: "Tumoare benignă de origine epitelială glandulară. Deși benignă, poate cauza patologie prin compresie (efect de masă) sau prin hipersecreție hormonală (ex. adenom toxic tiroidian, adenom hipofizar).",
    nanda: null
}, {
    id: "v_a_adenopatia",
    termES: "Adenopatía",
    termRO: "Adenopatie",
    categoryColor: "bg-orange-50",
    defES: "Agrandamiento anormal de los ganglios linfáticos (>1 cm). Puede ser localizada o generalizada, dolorosa (infecciosa) o indolora (neoplásica). Requiere estudio si persiste o crece.",
    defRO: "Mărire anormală a ganglionilor limfatici (>1 cm). Poate fi localizată sau generalizată, dureroasă (infecțioasă) sau nedureroasă (neoplazică). Necesită investigații dacă persistă sau crește.",
    nanda: null
}, {
    id: "v_a_adenosina",
    termES: "Adenosina",
    termRO: "Adenozină",
    categoryColor: "bg-teal-50",
    defES: "Nucleósido endógeno y fármaco antiarrítmico. Administrada en bolo IV rápido, bloquea transitoriamente la conducción en el nodo AV, siendo el tratamiento de elección para revertir taquicardias supraventriculares paroxísticas (TSVP).",
    defRO: "Nucleozid endogen și medicament antiaritmic. Administrată în bolus IV rapid, blochează tranzitoriu conducerea în nodul AV, fiind tratamentul de elecție pentru reversia tahicardiilor supraventriculare paroxistice (TSVP).",
    nanda: null
}, {
    id: "v_a_adenovirus",
    termES: "Adenovirus",
    termRO: "Adenovirus",
    categoryColor: "bg-red-50",
    defES: "Familia de virus de ADN que causan infecciones muy comunes en humanos, afectando principalmente al sistema respiratorio (resfriado, neumonía, faringitis), ojos (conjuntivitis) y tracto gastrointestinal (gastroenteritis).",
    defRO: "Familie de virusuri ADN care cauzează infecții foarte frecvente la oameni, afectând în principal sistemul respirator (răceală, pneumonie, faringită), ochii (conjunctivită) și tractul gastrointestinal (gastroenterită).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_a_adherencia",
    termES: "Adherencia (Cumplimiento)",
    termRO: "Aderență (Conformare)",
    categoryColor: "bg-emerald-50",
    defES: "Grado en que el comportamiento de una persona (toma de medicación, dieta, estilo de vida) coincide con las recomendaciones acordadas con el profesional sanitario. La falta de adherencia es un problema mayor en enfermedades crónicas.",
    defRO: "Gradul în care comportamentul unei persoane (administrarea medicamentelor, dietă, stil de viață) coincide cu recomandările convenite cu profesionistul din domeniul sănătății. Lipsa de aderență este o problemă majoră în bolile cronice.",
    nanda: {
        codeES: "00079",
        codeRO: "00079",
        labelES: "Incumplimiento",
        labelRO: "Neconformitate"
    }
}, {
    id: "v_a_adherencia_tisular",
    termES: "Adherencia (Tisular)",
    termRO: "Aderență (Tisulară)",
    categoryColor: "bg-rose-50",
    defES: "Unión patológica de tejidos u órganos que normalmente están separados, formada por bandas fibrosas cicatriciales. Común tras cirugía abdominal, pudiendo causar obstrucción intestinal o dolor crónico.",
    defRO: "Unire patologică a țesuturilor sau organelor care în mod normal sunt separate, formată din benzi fibroase cicatriciale. Frecventă după chirurgia abdominală, putând cauza obstrucție intestinală sau durere cronică.",
    nanda: null
}, {
    id: "v_a_adhesion",
    termES: "Adhesión",
    termRO: "Adeziune",
    categoryColor: "bg-gray-50",
    defES: "Fuerza que mantiene unidas dos superficies. En biología celular, proceso por el cual las células interactúan y se unen a otras células o a la matriz extracelular mediante moléculas de adhesión (integrinas, cadherinas).",
    defRO: "Forța care menține unite două suprafețe. În biologia celulară, proces prin care celulele interacționează și se leagă de alte celule sau de matricea extracelulară prin molecule de adeziune (integrine, cadherine).",
    nanda: null
}, {
    id: "v_a_adiccion",
    termES: "Adicción",
    termRO: "Dependență (Adicție)",
    categoryColor: "bg-fuchsia-50",
    defES: "Enfermedad crónica y recurrente del cerebro caracterizada por la búsqueda y el consumo compulsivo de sustancias (drogas, alcohol) o conductas (juego) a pesar de sus consecuencias nocivas. Implica dependencia física, tolerancia y síndrome de abstinencia.",
    defRO: "Boală cronică și recurentă a creierului caracterizată prin căutarea și consumul compulsiv de substanțe (droguri, alcool) sau comportamente (jocuri de noroc) în ciuda consecințelor nocive. Implică dependență fizică, toleranță și sindrom de sevraj.",
    nanda: {
        codeES: "00069",
        codeRO: "00069",
        labelES: "Afrontamiento ineficaz",
        labelRO: "Coping ineficient"
    }
}, {
    id: "v_a_adiestramiento",
    termES: "Adiestramiento (Entrenamiento)",
    termRO: "Instruire (Antrenament)",
    categoryColor: "bg-blue-50",
    defES: "Proceso de enseñanza-aprendizaje dirigido a adquirir habilidades específicas. En enfermería, es clave el adiestramiento del paciente y familia en técnicas de autocuidado (ej. administración de insulina, cuidado de estomas).",
    defRO: "Proces de predare-învățare îndreptat spre dobândirea de abilități specifice. În nursing, instruirea pacientului și familiei în tehnici de auto-îngrijire (ex. administrarea insulinei, îngrijirea stomelor) este esențială.",
    nanda: {
        codeES: "00126",
        codeRO: "00126",
        labelES: "Conocimientos deficientes",
        labelRO: "Cunoștințe deficitare"
    }
}, {
    id: "v_a_adipocito",
    termES: "Adipocito",
    termRO: "Adipocit",
    categoryColor: "bg-yellow-50",
    defES: "Célula especializada del tejido conectivo encargada de almacenar energía en forma de triglicéridos (grasa). También tiene función endocrina, secretando adipocinas como la leptina y adiponectina.",
    defRO: "Celulă specializată a țesutului conjunctiv însărcinată cu stocarea energiei sub formă de trigliceride (grăsime). Are și funcție endocrină, secretând adipokine precum leptina și adiponectina.",
    nanda: null
}, {
    id: "v_a_adiposis",
    termES: "Adiposis (Obesidad)",
    termRO: "Adipozitate (Obezitate)",
    categoryColor: "bg-amber-50",
    defES: 'Acumulación excesiva o anormal de grasa (tejido adiposo) en el cuerpo que presenta un riesgo para la salud. La "adiposis dolorosa" (enfermedad de Dercum) se caracteriza por múltiples lipomas dolorosos.',
    defRO: 'Acumulare excesivă sau anormală de grăsime (țesut adipos) în corp care prezintă un risc pentru sănătate. "Adipozitatea dureroasă" (boala Dercum) se caracterizează prin multiple lipoame dureroase.',
    nanda: {
        codeES: "00232",
        codeRO: "00232",
        labelES: "Obesidad",
        labelRO: "Obezitate"
    }
}, {
    id: "v_a_adiposo",
    termES: "Adiposo",
    termRO: "Adipos",
    categoryColor: "bg-yellow-50",
    defES: "Perteneciente o relativo a la grasa. El tejido adiposo sirve como reserva energética, aislante térmico y protección mecánica de órganos vitales.",
    defRO: "Aparținând sau referitor la grăsime. Țesutul adipos servește ca rezervă energetică, izolator termic și protecție mecanică a organelor vitale.",
    nanda: null
}, {
    id: "v_a_adipsia",
    termES: "Adipsia",
    termRO: "Adipsie",
    categoryColor: "bg-stone-50",
    defES: "Ausencia o falta anormal de sed, incluso en presencia de deshidratación o hipernatremia. Puede deberse a lesiones hipotalámicas. Aumenta gravemente el riesgo de deshidratación en ancianos o pacientes neurológicos.",
    defRO: "Absența sau lipsa anormală a setei, chiar și în prezența deshidratării sau hipernatremiei. Se poate datora leziunilor hipotalamice. Crește grav riscul de deshidratare la vârstnici sau pacienți neurologici.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_a_administracion_farmacos",
    termES: "Administración de Fármacos",
    termRO: "Administrarea Medicamentelor",
    categoryColor: "bg-green-50",
    defES: 'Acto de proporcionar una medicación a un paciente siguiendo los "5 Correctos" (o más): paciente, medicamento, dosis, vía, hora, documentación. Requiere conocimiento de farmacocinética y seguridad del paciente.',
    defRO: 'Actul de a furniza o medicație unui pacient urmând "cele 5 Reguli Corecte" (sau mai multe): pacient, medicament, doză, cale, oră, documentare. Necesită cunoștințe de farmacocinetică și siguranța pacientului.',
    nanda: null
}, {
    id: "v_a_adn",
    termES: "ADN (Ácido Desoxirribonucleico)",
    termRO: "ADN (Acid Dezoxiribonucleic)",
    categoryColor: "bg-indigo-50",
    defES: "Molécula en doble hélice que contiene la información genética de todos los organismos vivos. Compuesta por nucleótidos (Adenina, Timina, Guanina, Citosina). Se encuentra en el núcleo celular (ADN nuclear) y mitocondrias.",
    defRO: "Moleculă în dublă elice care conține informația genetică a tuturor organismelor vii. Compusă din nucleotide (Adenină, Timină, Guanină, Citozină). Se găsește în nucleul celular (ADN nuclear) și mitocondrii.",
    nanda: null
}, {
    id: "v_a_adolescencia",
    termES: "Adolescencia",
    termRO: "Adolescență",
    categoryColor: "bg-sky-50",
    defES: "Etapa de desarrollo humano entre la niñez y la edad adulta (aprox. 10-19 años según OMS). Caracterizada por la pubertad (cambios físicos y sexuales), desarrollo cognitivo abstracto y búsqueda de identidad e independencia.",
    defRO: "Etapă de dezvoltare umană între copilărie și vârsta adultă (aprox. 10-19 ani conform OMS). Caracterizată prin pubertate (schimbări fizice și sexuale), dezvoltare cognitivă abstractă și căutarea identității și independenței.",
    nanda: null
}, {
    id: "v_a_adopcion",
    termES: "Adopción",
    termRO: "Adopție",
    categoryColor: "bg-pink-50",
    defES: "Proceso legal y social por el cual se establece una relación paterno-filial entre personas que no tienen esa relación biológica. Implica la asunción plena de derechos y deberes parentales.",
    defRO: "Proces legal și social prin care se stabilește o relație părinte-copil între persoane care nu au această relație biologică. Implică asumarea deplină a drepturilor și îndatoririlor părintești.",
    nanda: {
        codeES: "00056",
        codeRO: "00056",
        labelES: "Deterioro de la parentalidad",
        labelRO: "Parentalitate afectată"
    }
}, {
    id: "v_a_adrenalina",
    termES: "Adrenalina (Epinefrina)",
    termRO: "Adrenalină (Epinefrină)",
    categoryColor: "bg-red-50",
    defES: "Catecolamina secretada por la médula suprarrenal en respuesta al estrés (lucha o huida). Como fármaco, es un potente agonista alfa y beta adrenérgico, vital en RCP (vasoconstricción), anafilaxia (broncodilatación, anti-shock) y asma grave.",
    defRO: "Catecolamină secretată de medula suprarenală ca răspuns la stres (luptă sau fugi). Ca medicament, este un agonist alfa și beta adrenergic puternic, vital în RCP (vasoconstricție), anafilaxie (bronhodilatație, anti-șoc) și astm sever.",
    nanda: null
}, {
    id: "v_a_adrenergico",
    termES: "Adrenérgico",
    termRO: "Adrenergic",
    categoryColor: "bg-orange-50",
    defES: "Relativo a las fibras nerviosas que liberan noradrenalina o adrenalina, o a los receptores (alfa, beta) activados por ellas. Fármacos adrenérgicos (simpaticomiméticos) imitan la acción del sistema nervioso simpático.",
    defRO: "Referitor la fibrele nervoase care eliberează noradrenalină sau adrenalină, sau la receptorii (alfa, beta) activați de acestea. Medicamentele adrenergice (simpaticomimetice) imită acțiunea sistemului nervos simpatic.",
    nanda: null
}, {
    id: "v_a_adrenoleucodistrofia",
    termES: "Adrenoleucodistrofia",
    termRO: "Adrenoleucodistrofie",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad genética grave ligada al cromosoma X que afecta al metabolismo de los ácidos grasos de cadena muy larga. Causa daño progresivo a la mielina del sistema nervioso central y a la corteza suprarrenal (insuficiencia adrenal).",
    defRO: "Boală genetică gravă legată de cromozomul X care afectează metabolismul acizilor grași cu lanț foarte lung. Cauzează leziuni progresive ale mielinei sistemului nervos central și cortexului suprarenal (insuficiență adrenală).",
    nanda: null
}, {
    id: "v_a_adsorcion",
    termES: "Adsorción",
    termRO: "Adsorbție",
    categoryColor: "bg-zinc-50",
    defES: "Proceso físico por el cual átomos, iones o moléculas de una sustancia (gas, líquido) se adhieren a la superficie de otra sustancia (sólido). Ej. El carbón activado adsorbe toxinas en el estómago impidiendo su absorción sistémica.",
    defRO: "Proces fizic prin care atomi, ioni sau molecule dintr-o substanță (gaz, lichid) aderă la suprafața altei substanțe (solid). Ex. Cărbunele activat absoarbe toxinele în stomac împiedicând absorbția lor sistemică.",
    nanda: null
}, {
    id: "v_a_adulto",
    termES: "Adulto",
    termRO: "Adult",
    categoryColor: "bg-slate-50",
    defES: "Persona que ha alcanzado la madurez física y sexual completa. Legalmente, suele ser a partir de los 18 años. Se divide en adulto joven, adulto maduro y adulto mayor (anciano).",
    defRO: "Persoană care a atins maturitatea fizică și sexuală deplină. Legal, este de obicei de la 18 ani. Se împarte în adult tânăr, adult matur și vârstnic (bătrân).",
    nanda: null
}, {
    id: "v_a_aerobio",
    termES: "Aerobio",
    termRO: "Aerob",
    categoryColor: "bg-cyan-50",
    defES: "Organismo que requiere oxígeno libre para vivir y crecer (metabolismo oxidativo). La mayoría de las células humanas y muchas bacterias patógenas (ej. Pseudomonas aeruginosa) son aerobias.",
    defRO: "Organism care necesită oxigen liber pentru a trăi și a crește (metabolism oxidativ). Majoritatea celulelor umane și multe bacterii patogene (ex. Pseudomonas aeruginosa) sunt aerobe.",
    nanda: null
}, {
    id: "v_a_aerofagia",
    termES: "Aerofagia",
    termRO: "Aerofagie",
    categoryColor: "bg-blue-50",
    defES: "Deglución excesiva de aire, voluntaria o involuntaria, a menudo asociada con ansiedad, comer rápido o masticar chicle. Causa distensión gástrica, eructos, flatulencia y dolor abdominal.",
    defRO: "Înghițirea excesivă de aer, voluntară sau involuntară, adesea asociată cu anxietate, mâncatul rapid sau mestecatul gumei. Cauzează distensie gastrică, eructații, flatulență și durere abdominală.",
    nanda: null
}, {
    id: "v_a_aerosol",
    termES: "Aerosol",
    termRO: "Aerosol",
    categoryColor: "bg-sky-50",
    defES: "Suspensión de partículas finas (sólidas o líquidas) en un gas. En medicina, forma farmacéutica para administrar fármacos por vía inhalatoria (broncodilatadores, corticoides) directamente a los pulmones.",
    defRO: "Suspensie de particule fine (solide sau lichide) într-un gaz. În medicină, formă farmaceutică pentru administrarea medicamentelor pe cale inhalatorie (bronhodilatatoare, corticoizi) direct în plămâni.",
    nanda: null
}, {
    id: "v_a_afagia",
    termES: "Afagia",
    termRO: "Afagie",
    categoryColor: "bg-red-50",
    defES: "Incapacidad total para deglutir (tragar). Es la forma más severa de disfagia. Requiere soporte nutricional alternativo (sonda nasogástrica, gastrostomía) para prevenir desnutrición y aspiración.",
    defRO: "Incapacitatea totală de a degluti (înghiți). Este forma cea mai severă de disfagie. Necesită suport nutrițional alternativ (sondă nazogastrică, gastrostomă) pentru a preveni malnutriția și aspirația.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_a_afaquia",
    termES: "Afaquia",
    termRO: "Afachie",
    categoryColor: "bg-violet-50",
    defES: "Ausencia del cristalino del ojo. Generalmente secundaria a cirugía de cataratas (extracción del cristalino opaco), aunque puede ser congénita o traumática. Se corrige con lentes intraoculares (LIO), gafas potentes o lentes de contacto.",
    defRO: "Absența cristalinului ochiului. De obicei secundară chirurgiei de cataractă (extracția cristalinului opac), deși poate fi congenitală sau traumatică. Se corectează cu lentile intraoculare (LIO), ochelari puternici sau lentile de contact.",
    nanda: null
}, {
    id: "v_a_afasia",
    termES: "Afasia",
    termRO: "Afazie",
    categoryColor: "bg-stone-50",
    defES: "Trastorno adquirido del lenguaje debido a daño cerebral (ictus, tumor, trauma). Afecta la producción, comprensión, lectura o escritura. Tipos: Broca (motora, no fluida), Wernicke (sensitiva, fluida pero sin sentido), Global (ambas).",
    defRO: "Tulburare dobândită a limbajului datorată leziunilor cerebrale (AVC, tumoare, traumă). Afectează producția, înțelegerea, cititul sau scrisul. Tipuri: Broca (motorie, non-fluentă), Wernicke (senzorială, fluentă dar fără sens), Globală (ambele).",
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_a_afebril",
    termES: "Afebril",
    termRO: "Afebril",
    categoryColor: "bg-green-50",
    defES: "Sin fiebre. Estado en el que la temperatura corporal se mantiene dentro del rango normal (normotermia, aprox. 36-37.5°C).",
    defRO: "Fără febră. Stare în care temperatura corpului se menține în intervalul normal (normotermie, aprox. 36-37.5°C).",
    nanda: null
}, {
    id: "v_a_afecto",
    termES: "Afecto",
    termRO: "Afect",
    categoryColor: "bg-pink-50",
    defES: "Expresión externa y observable del estado emocional interno (humor). Se valora su rango, intensidad, labilidad y congruencia con el contexto. Ej. Afecto aplanado (esquizofrenia), afecto lábil (manía).",
    defRO: "Expresie externă și observabilă a stării emoționale interne (dispoziție). Se evaluează gama, intensitatea, labilitatea și congruența sa cu contextul. Ex. Afect aplatizat (schizofrenie), afect labil (manie).",
    nanda: null
}, {
    id: "v_a_aferesis",
    termES: "Aféresis",
    termRO: "Afereză",
    categoryColor: "bg-red-50",
    defES: "Procedimiento en el cual se extrae sangre de un donante o paciente, se separa en sus componentes (plasma, células), se retiene uno de ellos y el resto se devuelve a la circulación. Usos: obtención de plaquetas (trombocitaféresis) o tratamiento (plasmaféresis).",
    defRO: "Procedură prin care se extrage sânge de la un donator sau pacient, se separă în componentele sale (plasmă, celule), se reține unul dintre ele, iar restul se returnează în circulație. Utilizări: obținerea de trombocite (trombocitofereză) sau tratament (plasmafereză).",
    nanda: null
}, {
    id: "v_a_afliccion",
    termES: "Aflicción (Pena)",
    termRO: "Suferință (Jale)",
    categoryColor: "bg-purple-50",
    defES: "Respuesta emocional profunda de dolor y tristeza ante una pérdida significativa (duelo). Es un proceso natural y necesario, pero puede requerir intervención si se vuelve patológico o crónico.",
    defRO: "Răspuns emoțional profund de durere și tristețe la o pierdere semnificativă (doliu). Este un proces natural și necesar, dar poate necesita intervenție dacă devine patologic sau cronic.",
    nanda: {
        codeES: "00136",
        codeRO: "00136",
        labelES: "Duelo",
        labelRO: "Doliu"
    }
}, {
    id: "v_a_afonia",
    termES: "Afonía",
    termRO: "Afonie",
    categoryColor: "bg-gray-50",
    defES: "Pérdida total de la voz. Se diferencia de la disfonía (ronquera o dificultad). Causas: laringitis aguda, parálisis de cuerdas vocales, uso excesivo de la voz o psicógena.",
    defRO: "Pierderea totală a vocii. Se diferențiază de disfonie (răgușeală sau dificultate). Cauze: laringită acută, paralizia corzilor vocale, utilizarea excesivă a vocii sau psihogenă.",
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_a_afrontamiento",
    termES: "Afrontamiento (Coping)",
    termRO: "Coping (Adaptare)",
    categoryColor: "bg-emerald-50",
    defES: "Esfuerzos cognitivos y conductuales cambiantes que desarrolla una persona para manejar las demandas externas o internas que evalúa como desbordantes. Puede ser adaptativo (resolución problemas) o desadaptativo (evitación, negación).",
    defRO: "Eforturi cognitive și comportamentale în schimbare pe care le dezvoltă o persoană pentru a gestiona cerințele externe sau interne pe care le evaluează ca fiind copleșitoare. Poate fi adaptativ (rezolvarea problemelor) sau dezadaptativ (evitare, negare).",
    nanda: {
        codeES: "00069",
        codeRO: "00069",
        labelES: "Afrontamiento ineficaz",
        labelRO: "Coping ineficient"
    }
}, {
    id: "v_a_aftas",
    termES: "Aftas (Estomatitis aftosa)",
    termRO: "Afte (Stomatită aftoasă)",
    categoryColor: "bg-rose-50",
    defES: "Úlceras pequeñas, dolorosas, redondas u ovaladas, con fondo blanco-amarillento y borde rojo, que aparecen en la mucosa bucal. Etiología desconocida, asociada a estrés, trauma local o déficits vitamínicos. No son contagiosas (diferencia con herpes).",
    defRO: "Ulcere mici, dureroase, rotunde sau ovale, cu fund alb-gălbui și margine roșie, care apar pe mucoasa bucală. Etiologie necunoscută, asociată cu stres, traume locale sau deficite vitaminice. Nu sunt contagioase (diferență față de herpes).",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_a_agammaglobulinemia",
    termES: "Agammaglobulinemia",
    termRO: "Agamaglobulinemie",
    categoryColor: "bg-stone-50",
    defES: "Trastorno de inmunodeficiencia primaria caracterizado por niveles muy bajos o ausencia de inmunoglobulinas (anticuerpos) en sangre, debido a un defecto en los linfocitos B. Aumenta drásticamente la susceptibilidad a infecciones bacterianas recurrentes.",
    defRO: "Tulburare de imunodeficiență primară caracterizată prin niveluri foarte scăzute sau absența imunoglobulinelor (anticorpi) în sânge, datorită unui defect al limfocitelor B. Crește drastic susceptibilitatea la infecții bacteriene recurente.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_a_agar",
    termES: "Agar",
    termRO: "Agar",
    categoryColor: "bg-amber-50",
    defES: "Sustancia gelatinosa derivada de algas marinas, utilizada como medio de cultivo sólido para el crecimiento de bacterias y hongos en microbiología. No es degradado por la mayoría de bacterias.",
    defRO: "Substanță gelatinoasă derivată din alge marine, utilizată ca mediu de cultură solid pentru creșterea bacteriilor și ciupercilor în microbiologie. Nu este degradat de majoritatea bacteriilor.",
    nanda: null
}, {
    id: "v_a_agenesis",
    termES: "Agénesis (Agenesia)",
    termRO: "Agenezie",
    categoryColor: "bg-zinc-50",
    defES: "Ausencia completa y congénita de un órgano o parte del cuerpo debido a un fallo en su desarrollo embrionario (ej. agenesia renal, agenesia del cuerpo calloso).",
    defRO: "Absența completă și congenitală a unui organ sau a unei părți a corpului din cauza unui eșec în dezvoltarea sa embrionară (ex. agenezie renală, agenezie de corp calos).",
    nanda: null
}, {
    id: "v_a_agente",
    termES: "Agente",
    termRO: "Agent",
    categoryColor: "bg-slate-50",
    defES: "En epidemiología, factor biológico (virus, bacteria), químico, físico o mecánico cuya presencia o ausencia es esencial para la ocurrencia de una enfermedad. Interactúa con el huésped y el medio ambiente (Triada ecológica).",
    defRO: "În epidemiologie, factor biologic (virus, bacterie), chimic, fizic sau mecanic a cărui prezență sau absență este esențială pentru apariția unei boli. Interacționează cu gazda și mediul (Triada ecologică).",
    nanda: null
}, {
    id: "v_a_ageusia",
    termES: "Ageusia",
    termRO: "Ageuzie",
    categoryColor: "bg-stone-50",
    defES: "Pérdida total del sentido del gusto. A menudo asociada con la anosmia (pérdida de olfato). Causas: COVID-19, trauma craneal, radioterapia, déficit de zinc.",
    defRO: "Pierderea totală a simțului gustului. Adesea asociată cu anosmia (pierderea mirosului). Cauze: COVID-19, traumatism cranian, radioterapie, deficit de zinc.",
    nanda: null
}, {
    id: "v_a_aglutinacion",
    termES: "Aglutinación",
    termRO: "Aglutinare",
    categoryColor: "bg-red-50",
    defES: "Reacción inmunológica en la que partículas (bacterias, glóbulos rojos) suspendidas en un líquido se agrupan en masas visibles al unirse con anticuerpos específicos (aglutininas). Base para la determinación de grupos sanguíneos.",
    defRO: "Reacție imunologică în care particulele (bacterii, globule roșii) suspendate într-un lichid se grupează în mase vizibile prin legarea de anticorpi specifici (aglutinine). Baza pentru determinarea grupelor sanguine.",
    nanda: null
}, {
    id: "v_a_agnosia",
    termES: "Agnosia",
    termRO: "Agnozie",
    categoryColor: "bg-purple-50",
    defES: "Incapacidad para reconocer e identificar información sensorial (objetos, personas, sonidos, formas) a pesar de que los sentidos funcionan correctamente. Se debe a daño en las áreas de asociación cerebral. Ej. Prosopagnosia (no reconocer caras).",
    defRO: "Incapacitatea de a recunoaște și identifica informații senzoriale (obiecte, persoane, sunete, forme) deși simțurile funcționează corect. Se datorează leziunilor în zonele de asociație cerebrală. Ex. Prozopagnozie (nerecunoașterea fețelor).",
    nanda: {
        codeES: "00279",
        codeRO: "00279",
        labelES: "Deterioro de los procesos de pensamiento",
        labelRO: "Procese de gândire perturbate"
    }
}, {
    id: "v_a_agonia",
    termES: "Agonía",
    termRO: "Agonie",
    categoryColor: "bg-stone-50",
    defES: "Estado previo a la muerte (fase terminal), caracterizado por el deterioro progresivo de las funciones vitales, disminución de la conciencia y cambios físicos. Requiere cuidados paliativos intensivos para el confort.",
    defRO: "Stare premergătoare morții (fază terminală), caracterizată prin deteriorarea progresivă a funcțiilor vitale, scăderea conștiinței și schimbări fizice. Necesită îngrijiri paliative intensive pentru confort.",
    nanda: {
        codeES: "00318",
        codeRO: "00318",
        labelES: "Disconfort",
        labelRO: "Disconfort"
    }
}, {
    id: "v_a_agonista",
    termES: "Agonista",
    termRO: "Agonist",
    categoryColor: "bg-green-50",
    defES: "1. Farmacología: Sustancia que se une a un receptor y activa una respuesta biológica (imita al ligando endógeno). 2. Anatomía: Músculo que realiza la acción principal de un movimiento (ej. bíceps en la flexión del codo).",
    defRO: "1. Farmacologie: Substanță care se leagă de un receptor și activează un răspuns biologic (imită ligandul endogen). 2. Anatomie: Mușchi care realizează acțiunea principală a unei mișcări (ex. biceps în flexia cotului).",
    nanda: null
}, {
    id: "v_a_agorafobia",
    termES: "Agorafobia",
    termRO: "Agorafobie",
    categoryColor: "bg-indigo-50",
    defES: "Trastorno de ansiedad caracterizado por miedo intenso a estar en lugares o situaciones de donde sea difícil escapar o recibir ayuda en caso de pánico (espacios abiertos, multitudes, transporte público). Conduce a la evitación.",
    defRO: "Tulburare de anxietate caracterizată prin frică intensă de a fi în locuri sau situații din care ar fi dificil să scapi sau să primești ajutor în caz de panică (spații deschise, mulțimi, transport public). Duce la evitare.",
    nanda: {
        codeES: "00148",
        codeRO: "00148",
        labelES: "Temor",
        labelRO: "Teamă"
    }
}, {
    id: "v_a_agranulocitosis",
    termES: "Agranulocitosis",
    termRO: "Agranulocitoză",
    categoryColor: "bg-red-50",
    defES: "Disminución severa y peligrosa de granulocitos (principalmente neutrófilos < 500/mm³) en sangre. Deja al paciente indefenso ante infecciones graves. Causa frecuente: toxicidad por fármacos (clozapina, metamizol, quimioterapia).",
    defRO: "Scădere severă și periculoasă a granulocitelor (în principal neutrofile < 500/mm³) în sânge. Lasă pacientul fără apărare în fața infecțiilor grave. Cauză frecventă: toxicitate medicamentoasă (clozapină, metamizol, chimioterapie).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_a_agua",
    termES: "Agua Corporal",
    termRO: "Apă Corporală",
    categoryColor: "bg-blue-50",
    defES: "Componente principal del cuerpo humano (aprox. 60% del peso en adultos). Solvente universal para reacciones bioquímicas, transporte de nutrientes y termorregulación. Se distribuye en compartimentos intracelular y extracelular.",
    defRO: "Component principal al corpului uman (aprox. 60% din greutate la adulți). Solvent universal pentru reacții biochimice, transport de nutrienți și termoreglare. Se distribuie în compartimente intracelular și extracelular.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_a_agudeza_visual",
    termES: "Agudeza Visual",
    termRO: "Acuitate Vizuală",
    categoryColor: "bg-cyan-50",
    defES: "Capacidad del ojo para distinguir detalles finos y formas a una distancia determinada. Se mide habitualmente con la tabla de Snellen (ej. 20/20 es visión normal). Fundamental en la valoración de salud escolar y laboral.",
    defRO: "Capacitatea ochiului de a distinge detalii fine și forme la o anumită distanță. Se măsoară de obicei cu tabelul Snellen (ex. 20/20 este vedere normală). Fundamentală în evaluarea sănătății școlare și ocupaționale.",
    nanda: null
}, {
    id: "v_a_agudo",
    termES: "Agudo",
    termRO: "Acut",
    categoryColor: "bg-red-50",
    defES: "1. Enfermedad o síntoma de inicio súbito, evolución rápida y duración breve (ej. dolor agudo, apendicitis). Opuesto a crónico. 2. Sentido perspicaz o intenso (ej. oído agudo).",
    defRO: "1. Boală sau simptom cu debut brusc, evoluție rapidă și durată scurtă (ex. durere acută, apendicită). Opusul lui cronic. 2. Simț perspicace sau intens (ex. auz ascuțit).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_a_aguja",
    termES: "Aguja",
    termRO: "Ac",
    categoryColor: "bg-stone-50",
    defES: "Instrumento metálico delgado y puntiagudo, generalmente hueco (aguja hipodérmica), utilizado para inyectar sustancias o extraer fluidos. Se clasifica por su calibre (Gauge, G) y longitud. Riesgo biológico por pinchazo accidental.",
    defRO: "Instrument metalic subțire și ascuțit, de obicei gol (ac hipodermic), utilizat pentru a injecta substanțe sau a extrage fluide. Se clasifică după calibru (Gauge, G) și lungime. Risc biologic prin înțepare accidentală.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_a_agujero_magno",
    termES: "Agujero Magno (Foramen Magnum)",
    termRO: "Gaura Mare (Foramen Magnum)",
    categoryColor: "bg-stone-50",
    defES: "Gran orificio en la base del cráneo (hueso occipital) a través del cual el bulbo raquídeo se continúa con la médula espinal. La herniación amigdalar a través de este agujero es una complicación mortal de la hipertensión intracraneal.",
    defRO: "Orificiu mare la baza craniului (osul occipital) prin care bulbul rahidian se continuă cu măduva spinării. Hernierea amigdaliană prin această gaură este o complicație mortală a hipertensiunii intracraniene.",
    nanda: null
}, {
    id: "v_a_agujero_oval",
    termES: "Agujero Oval (Foramen Ovale)",
    termRO: "Gaura Ovală (Foramen Ovale)",
    categoryColor: "bg-pink-50",
    defES: "Abertura en el tabique interauricular del corazón fetal que permite el paso de sangre de la aurícula derecha a la izquierda, evitando los pulmones. Normalmente se cierra tras el nacimiento; si persiste, se llama Foramen Oval Permeable (FOP).",
    defRO: "Deschidere în septul interatrial al inimii fetale care permite trecerea sângelui din atriul drept în cel stâng, ocolind plămânii. În mod normal se închide după naștere; dacă persistă, se numește Foramen Ovale Patent (FOP).",
    nanda: null
}, {
    id: "v_a_aire",
    termES: "Aire",
    termRO: "Aer",
    categoryColor: "bg-sky-50",
    defES: "Mezcla gaseosa natural que compone la atmósfera terrestre, esencial para la vida. Contiene aproximadamente un 78% de nitrógeno, un 21% de oxígeno y trazas de argón, dióxido de carbono y otros gases. Es el medio de transmisión de enfermedades por vía aérea.",
    defRO: "Amestec gazos natural care compune atmosfera terestră, esențial pentru viață. Conține aproximativ 78% azot, 21% oxigen și urme de argon, dioxid de carbon și alte gaze. Este mediul de transmitere a bolilor pe cale aeriană.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_a_aislamiento",
    termES: "Aislamiento",
    termRO: "Izolare",
    categoryColor: "bg-slate-50",
    defES: "Separación física de pacientes con enfermedades transmisibles (infecciosas) para prevenir el contagio a otros pacientes, personal sanitario o visitantes. Tipos: Estándar, Contacto, Gotas, Aéreo y Protector (Inverso para inmunodeprimidos).",
    defRO: "Separarea fizică a pacienților cu boli transmisibile (infecțioase) pentru a preveni răspândirea la alți pacienți, personal medical sau vizitatori. Tipuri: Standard, Contact, Picături, Aerian și Protector (Invers pentru imunodeprimați).",
    nanda: {
        codeES: "00054",
        codeRO: "00054",
        labelES: "Riesgo de soledad",
        labelRO: "Risc de singurătate"
    }
}, {
    id: "v_a_alanina",
    termES: "Alanina",
    termRO: "Alanină",
    categoryColor: "bg-amber-50",
    defES: "Aminoácido no esencial que juega un papel clave en el ciclo glucosa-alanina entre los músculos y el hígado, permitiendo la gluconeogénesis y el transporte de amonio. Marcador útil en estudios metabólicos (ALT/GPT).",
    defRO: "Aminoacid neesențial care joacă un rol cheie în ciclul glucoză-alanină dintre mușchi și ficat, permițând gluconeogeneza și transportul amoniului. Marker util în studiile metabolice (ALT/GPT).",
    nanda: null
}, {
    id: "v_a_albinismo",
    termES: "Albinismo",
    termRO: "Albinism",
    categoryColor: "bg-stone-50",
    defES: "Trastorno genético hereditario caracterizado por la ausencia total o parcial de pigmento (melanina) en la piel, el cabello y los ojos. Conlleva fotofobia, nistagmo y un riesgo muy elevado de cáncer de piel por exposición solar.",
    defRO: "Tulburare genetică ereditară caracterizată prin absența totală sau parțială a pigmentului (melanină) în piele, păr și ochi. Implică fotofobie, nistagmus și un risc foarte ridicat de cancer de piele prin expunere solară.",
    nanda: {
        codeES: "00300",
        codeRO: "00300",
        labelES: "Conductas ineficaces de mantenimiento de la salud",
        labelRO: "Comportamente ineficiente de menținere a sănătății"
    }
}, {
    id: "v_a_albumina",
    termES: "Albúmina",
    termRO: "Albumină",
    categoryColor: "bg-yellow-50",
    defES: "Principal proteína plasmática sintetizada en el hígado. Responsable del 80% de la presión oncótica coloidal (mantiene el líquido dentro de los vasos sanguíneos). Niveles bajos (hipoalbuminemia) causan edema y ascitis.",
    defRO: "Principala proteină plasmatică sintetizată în ficat. Responsabilă pentru 80% din presiunea oncotică coloidală (menține lichidul în interiorul vaselor de sânge). Nivelurile scăzute (hipoalbuminemie) cauzează edem și ascită.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_a_alcalosis",
    termES: "Alcalosis",
    termRO: "Alcaloză",
    categoryColor: "bg-red-50",
    defES: "Estado patológico en el que el pH de la sangre arterial se eleva por encima de 7.45 debido a una disminución de la concentración de iones hidrógeno. Puede ser Metabólica (exceso de bicarbonato) o Respiratoria (déficit de CO2 por hiperventilación).",
    defRO: "Stare patologică în care pH-ul sângelui arterial crește peste 7.45 datorită scăderii concentrației ionilor de hidrogen. Poate fi Metabolică (exces de bicarbonat) sau Respiratorie (deficit de CO2 prin hiperventilație).",
    nanda: null
}, {
    id: "v_a_alcohol",
    termES: "Alcohol (Etanol)",
    termRO: "Alcool (Etanol)",
    categoryColor: "bg-purple-50",
    defES: "Líquido incoloro y volátil, depresor del sistema nervioso central. Se usa como antiséptico tópico (alcohol 70%) y es la sustancia psicoactiva más consumida socialmente. Su metabolismo hepático produce acetaldehído (tóxico).",
    defRO: "Lichid incolor și volatil, depresoar al sistemului nervos central. Se folosește ca antiseptic topic (alcool 70%) și este substanța psihoactivă cea mai consumată social. Metabolismul său hepatic produce acetaldehidă (toxică).",
    nanda: null
}, {
    id: "v_a_alcoholismo",
    termES: "Alcoholismo (Trastorno por consumo de alcohol)",
    termRO: "Alcoolism (Tulburare legată de consumul de alcool)",
    categoryColor: "bg-fuchsia-50",
    defES: "Enfermedad crónica caracterizada por el consumo compulsivo e incontrolado de alcohol, dependencia física y tolerancia. Provoca daños multisistémicos graves: cirrosis hepática, pancreatitis, miocardiopatía, demencia (Korsakoff) y cáncer.",
    defRO: "Boală cronică caracterizată prin consumul compulsiv și necontrolat de alcool, dependență fizică și toleranță. Provoacă daune multisistemice grave: ciroză hepatică, pancreatită, miocardiopatie, demență (Korsakoff) și cancer.",
    nanda: {
        codeES: "00188",
        codeRO: "00188",
        labelES: "Tendencia a adoptar conductas de riesgo para la salud",
        labelRO: "Tendință de a adopta comportamente de risc pentru sănătate"
    }
}, {
    id: "v_a_aldosterona",
    termES: "Aldosterona",
    termRO: "Aldosteron",
    categoryColor: "bg-green-50",
    defES: "Hormona mineralocorticoide producida por la corteza suprarrenal. Regula el equilibrio de agua y sales en el riñón: favorece la reabsorción de sodio (y agua) y la excreción de potasio. Clave en el control de la presión arterial.",
    defRO: "Hormon mineralocorticoid produs de cortexul suprarenal. Reglează echilibrul apei și sărurilor în rinichi: favorizează reabsorbția sodiului (și apei) și excreția potasiului. Esențial în controlul tensiunii arteriale.",
    nanda: null
}, {
    id: "v_a_alergeno",
    termES: "Alérgeno",
    termRO: "Alergen",
    categoryColor: "bg-orange-50",
    defES: "Sustancia (antígeno) capaz de inducir una reacción de hipersensibilidad (alergia) en personas susceptibles, estimulando la producción de IgE. Ejemplos: polen, ácaros, veneno de abeja, penicilina, cacahuetes.",
    defRO: "Substanță (antigen) capabilă să inducă o reacție de hipersensibilitate (alergie) la persoanele susceptibile, stimulând producția de IgE. Exemple: polen, acarieni, venin de albină, penicilină, arahide.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_a_alergia",
    termES: "Alergia",
    termRO: "Alergie",
    categoryColor: "bg-rose-50",
    defES: "Reacción inmunitaria exagerada (hipersensibilidad tipo I) ante una sustancia generalmente inocua. Varía desde síntomas leves (rinitis, urticaria) hasta graves (angioedema, anafilaxia).",
    defRO: "Reacție imunitară exagerată (hipersensibilitate de tip I) la o substanță în general inofensivă. Variază de la simptome ușoare (rinită, urticarie) până la grave (angioedem, anafilaxie).",
    nanda: {
        codeES: "00041",
        codeRO: "00041",
        labelES: "Respuesta alérgica al látex",
        labelRO: "Răspuns alergic la latex"
    }
}, {
    id: "v_a_alexia",
    termES: "Alexia",
    termRO: "Alexie",
    categoryColor: "bg-zinc-50",
    defES: "Incapacidad adquirida para leer o comprender el lenguaje escrito debido a una lesión cerebral (generalmente en el lóbulo parietal/temporal izquierdo), habiendo tenido previamente esa capacidad. A menudo acompaña a la afasia.",
    defRO: "Incapacitate dobândită de a citi sau înțelege limbajul scris din cauza unei leziuni cerebrale (de obicei în lobul parietal/temporal stâng), având anterior această capacitate. Adesea însoțește afazia.",
    nanda: null
}, {
    id: "v_a_algesia",
    termES: "Algesia",
    termRO: "Algezie",
    categoryColor: "bg-red-50",
    defES: "Sensibilidad al dolor. La hiperalgesia es una sensibilidad aumentada a estímulos dolorosos; la analgesia es la ausencia de dolor ante estímulos que normalmente lo provocarían.",
    defRO: "Sensibilitate la durere. Hiperalgezia este o sensibilitate crescută la stimuli dureroși; analgezia este absența durerii la stimuli care în mod normal ar provoca-o.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_a_algoritmo",
    termES: "Algoritmo (Clínico)",
    termRO: "Algoritm (Clinic)",
    categoryColor: "bg-blue-50",
    defES: "Conjunto ordenado y finito de instrucciones o pasos lógicos que permite tomar decisiones clínicas estandarizadas ante un problema de salud (ej. Algoritmo de Soporte Vital Avanzado). Reduce la variabilidad y el error.",
    defRO: "Set ordonat și finit de instrucțiuni sau pași logici care permite luarea deciziilor clinice standardizate în fața unei probleme de sănătate (ex. Algoritmul de Suport Vital Avansat). Reduce variabilitatea și eroarea.",
    nanda: null
}, {
    id: "v_a_alimentacion_enteral",
    termES: "Alimentación Enteral",
    termRO: "Nutriție Enterală",
    categoryColor: "bg-teal-50",
    defES: "Técnica de soporte nutricional que consiste en administrar nutrientes directamente al aparato digestivo mediante sonda (nasogástrica, nasoyeyunal) o estoma (gastrostomía), cuando la vía oral no es viable pero el intestino funciona.",
    defRO: "Tehnică de suport nutrițional care constă în administrarea nutrienților direct în aparatul digestiv prin sondă (nazogastrică, nazojejunală) sau stomă (gastrostomă), atunci când calea orală nu este viabilă, dar intestinul funcționează.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_a_alimentacion_parenteral",
    termES: "Alimentación Parenteral",
    termRO: "Nutriție Parenterală",
    categoryColor: "bg-indigo-50",
    defES: "Administración de nutrientes (aminoácidos, lípidos, glucosa, electrolitos) por vía intravenosa, evitando el tracto digestivo. Indicada en fallo intestinal. Requiere acceso venoso central (NPT) por su alta osmolaridad.",
    defRO: "Administrarea nutrienților (aminoacizi, lipide, glucoză, electroliți) pe cale intravenoasă, ocolind tractul digestiv. Indicată în insuficiență intestinală. Necesită acces venos central (NPT) datorită osmolarității ridicate.",
    nanda: null
}, {
    id: "v_a_alivio",
    termES: "Alivio",
    termRO: "Ameliorare (Alinare)",
    categoryColor: "bg-emerald-50",
    defES: "Disminución o eliminación de una molestia, dolor, ansiedad o carga física/emocional. Es el objetivo principal de los cuidados paliativos y de muchas intervenciones de enfermería (manejo del dolor).",
    defRO: "Diminuarea sau eliminarea unui disconfort, durere, anxietate sau povară fizică/emoțională. Este obiectivul principal al îngrijirilor paliative și al multor intervenții de nursing (managementul durerii).",
    nanda: null
}, {
    id: "v_a_alopecia",
    termES: "Alopecia",
    termRO: "Alopecie",
    categoryColor: "bg-stone-50",
    defES: "Pérdida anormal de cabello o vello corporal. Puede ser temporal (post-parto, quimioterapia, estrés) o permanente (androgénica, cicatricial). Afecta significativamente a la imagen corporal.",
    defRO: "Pierdere anormală a părului sau pilozității corporale. Poate fi temporară (post-partum, chimioterapie, stres) sau permanentă (androgenică, cicatricială). Afectează semnificativ imaginea corporală.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_a_alucinacion",
    termES: "Alucinación",
    termRO: "Halucinație",
    categoryColor: "bg-violet-50",
    defES: "Percepción sensorial falsa que ocurre sin estímulo externo real, percibida como real por el paciente. Puede ser auditiva (voces, común en psicosis), visual (delirium, drogas), táctil, olfativa o gustativa.",
    defRO: "Percepție senzorială falsă care apare fără stimul extern real, percepută ca reală de pacient. Poate fi auditivă (voci, comună în psihoză), vizuală (delirium, droguri), tactilă, olfactivă sau gustativă.",
    nanda: {
        codeES: "00279",
        codeRO: "00279",
        labelES: "Deterioro de los procesos de pensamiento",
        labelRO: "Procese de gândire perturbate"
    }
}, {
    id: "v_a_alveolo",
    termES: "Alvéolo",
    termRO: "Alveolă",
    categoryColor: "bg-sky-50",
    defES: "Unidad funcional del pulmón. Pequeños sacos de aire de paredes finas rodeados de capilares donde se produce el intercambio gaseoso (hematosis). Contienen neumocitos tipo I y II (productores de surfactante).",
    defRO: "Unitatea funcțională a plămânului. Mici saci de aer cu pereți subțiri înconjurați de capilare unde are loc schimbul gazos (hematoză). Conțin pneumocite de tip I și II (producătoare de surfactant).",
    nanda: null
}, {
    id: "v_a_alzheimer",
    termES: "Alzheimer (Enfermedad de)",
    termRO: "Alzheimer (Boala)",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad neurodegenerativa progresiva, causa más común de demencia. Se caracteriza por depósitos de beta-amiloide y ovillos neurofibrilares, pérdida de memoria reciente, desorientación, afasia, apraxia y cambio de personalidad.",
    defRO: "Boală neurodegenerativă progresivă, cea mai frecventă cauză de demență. Se caracterizează prin depozite de beta-amiloid și ghemuri neurofibrilare, pierderea memoriei recente, dezorientare, afazie, apraxie și schimbarea personalității.",
    nanda: {
        codeES: "00131",
        codeRO: "00131",
        labelES: "Deterioro de la memoria",
        labelRO: "Memorie afectată"
    }
}, {
    id: "v_a_amamantamiento",
    termES: "Amamantamiento (Lactancia Materna)",
    termRO: "Alăptare",
    categoryColor: "bg-pink-50",
    defES: "Proceso fisiológico de alimentar al lactante con leche humana directamente del pecho. Proporciona inmunidad pasiva, nutrientes óptimos y favorece el vínculo afectivo. La OMS recomienda exclusiva 6 meses.",
    defRO: "Proces fiziologic de hrănire a sugarului cu lapte uman direct de la sân. Oferă imunitate pasivă, nutrienți optimi și favorizează legătura afectivă. OMS recomandă exclusiv 6 luni.",
    nanda: {
        codeES: "00104",
        codeRO: "00104",
        labelES: "Lactancia materna ineficaz",
        labelRO: "Alăptare ineficientă"
    }
}, {
    id: "v_a_amaurosis",
    termES: "Amaurosis",
    termRO: "Amauroză",
    categoryColor: "bg-stone-50",
    defES: 'Ceguera total o parcial sin lesión aparente en el ojo mismo, causada generalmente por daño en el nervio óptico o cerebro. La "Amaurosis fugax" es una pérdida transitoria de visión por isquemia retiniana (alerta de ictus).',
    defRO: 'Orbire totală sau parțială fără leziune aparentă în ochiul însuși, cauzată de obicei de leziuni ale nervului optic sau creierului. "Amaurosis fugax" este o pierdere tranzitorie a vederii prin ischemie retiniană (alertă de AVC).',
    nanda: null
}, {
    id: "v_a_ambulancia",
    termES: "Ambulancia",
    termRO: "Ambulanță",
    categoryColor: "bg-red-50",
    defES: "Vehículo equipado para el transporte urgente de enfermos o heridos hacia un centro hospitalario, permitiendo la asistencia médica en ruta (Soporte Vital Básico o Avanzado/UVI móvil).",
    defRO: "Vehicul echipat pentru transportul urgent al bolnavilor sau răniților către un centru spitalicesc, permițând asistența medicală pe traseu (Suport Vital de Bază sau Avansat/Terapie Intensivă Mobilă).",
    nanda: null
}, {
    id: "v_a_ambulatorio",
    termES: "Ambulatorio",
    termRO: "Ambulatoriu",
    categoryColor: "bg-blue-50",
    defES: "Régimen de atención sanitaria en el que el paciente no pernocta en el hospital. Incluye consultas, cirugía mayor ambulatoria (CMA) y tratamientos de día. Reduce costes y riesgo de infección nosocomial.",
    defRO: "Regim de asistență sanitară în care pacientul nu înnoptează în spital. Include consultații, chirurgie majoră ambulatorie (CMA) și tratamente de zi. Reduce costurile și riscul de infecție nosocomială.",
    nanda: null
}, {
    id: "v_a_ameba",
    termES: "Ameba",
    termRO: "Amebă",
    categoryColor: "bg-orange-50",
    defES: "Protozoo unicelular que se mueve mediante pseudópodos. Entamoeba histolytica es patógena para el ser humano, causando amebiasis (disentería amebiana) y abscesos hepáticos.",
    defRO: "Protozoar unicelular care se mișcă prin pseudopode. Entamoeba histolytica este patogenă pentru om, cauzând amebiază (dizenterie amebiană) și abcese hepatice.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_a_amenorrea",
    termES: "Amenorrea",
    termRO: "Amenoree",
    categoryColor: "bg-pink-50",
    defES: "Ausencia de menstruación. Primaria: si no aparece a los 15-16 años. Secundaria: si cesa durante >3 ciclos o 6 meses. La causa más común de amenorrea secundaria en edad fértil es el embarazo.",
    defRO: "Absența menstruației. Primară: dacă nu apare la 15-16 ani. Secundară: dacă încetează timp de >3 cicluri sau 6 luni. Cea mai frecventă cauză a amenoreei secundare la vârsta fertilă este sarcina.",
    nanda: null
}, {
    id: "v_a_amigdala",
    termES: "Amígdala (Tonsila)",
    termRO: "Amigdală",
    categoryColor: "bg-rose-50",
    defES: "Masa de tejido linfoide. Las amígdalas palatinas (garganta) protegen la entrada respiratoria/digestiva. La amígdala cerebral (sistema límbico) procesa emociones como el miedo y la agresión.",
    defRO: "Masă de țesut limfoid. Amigdalele palatine (gât) protejează intrarea respiratorie/digestivă. Amigdala cerebrală (sistem limbic) procesează emoții precum frica și agresivitatea.",
    nanda: null
}, {
    id: "v_a_amilasa",
    termES: "Amilasa",
    termRO: "Amilază",
    categoryColor: "bg-yellow-50",
    defES: "Enzima que hidroliza el almidón en azúcares simples. Producida en glándulas salivales y páncreas. Niveles elevados en sangre (hiperamilasemia) son diagnósticos de pancreatitis aguda.",
    defRO: "Enzimă care hidrolizează amidonul în zaharuri simple. Produsă în glandele salivare și pancreas. Nivelurile ridicate în sânge (hiperamilazemie) sunt diagnostice pentru pancreatita acută.",
    nanda: null
}, {
    id: "v_a_aminoacido",
    termES: "Aminoácido",
    termRO: "Aminoacid",
    categoryColor: "bg-amber-50",
    defES: "Molécula orgánica con un grupo amino y uno carboxilo; unidad estructural básica de las proteínas. Hay 20 principales, de los cuales 9 son esenciales (el cuerpo no los sintetiza, deben venir de la dieta).",
    defRO: "Moleculă organică cu un grup amino și unul carboxil; unitate structurală de bază a proteinelor. Există 20 principali, dintre care 9 sunt esențiali (corpul nu îi sintetizează, trebuie să provină din dietă).",
    nanda: null
}, {
    id: "v_a_amiodarona",
    termES: "Amiodarona",
    termRO: "Amiodaronă",
    categoryColor: "bg-emerald-50",
    defES: "Potente antiarrítmico de clase III utilizado para tratar arritmias auriculares (FA) y ventriculares graves. Tiene una vida media muy larga y efectos secundarios importantes (tiroideos, pulmonares, hepáticos).",
    defRO: "Antiaritmic puternic de clasa III utilizat pentru tratarea aritmiilor atriale (FA) și ventriculare grave. Are un timp de înjumătățire foarte lung și efecte secundare importante (tiroidiene, pulmonare, hepatice).",
    nanda: null
}, {
    id: "v_a_amnesia",
    termES: "Amnesia",
    termRO: "Amnezie",
    categoryColor: "bg-purple-50",
    defES: "Pérdida patológica de la memoria. Anterógrada: no se fijan nuevos recuerdos (ej. tras trauma, Alzheimer). Retrógrada: se olvidan recuerdos pasados. Puede ser transitoria (benzodiacepinas) o permanente.",
    defRO: "Pierdere patologică a memoriei. Anterogradă: nu se fixează amintiri noi (ex. după traumă, Alzheimer). Retrogradă: se uită amintirile din trecut. Poate fi tranzitorie (benzodiazepine) sau permanentă.",
    nanda: {
        codeES: "00131",
        codeRO: "00131",
        labelES: "Deterioro de la memoria",
        labelRO: "Memorie afectată"
    }
}, {
    id: "v_a_amniocentesis",
    termES: "Amniocentesis",
    termRO: "Amniocenteză",
    categoryColor: "bg-cyan-50",
    defES: "Punción abdominal guiada por ecografía para extraer líquido amniótico del útero gestante. Permite estudio genético (cariotipo fetal), de madurez pulmonar o infeccioso. Riesgo bajo de aborto (<1%).",
    defRO: "Puncție abdominală ghidată ecografic pentru extragerea lichidului amniotic din uterul gravid. Permite studiul genetic (cariotip fetal), al maturității pulmonare sau infecțios. Risc scăzut de avort (<1%).",
    nanda: null
}, {
    id: "v_a_amoxicilina",
    termES: "Amoxicilina",
    termRO: "Amoxicilină",
    categoryColor: "bg-emerald-50",
    defES: "Antibiótico betalactámico de amplio espectro (grupo aminopenicilinas). Muy usado en infecciones respiratorias (otitis, faringitis, neumonía) y para erradicar H. pylori. A menudo asociado a ácido clavulánico.",
    defRO: "Antibiotic beta-lactamic cu spectru larg (grupul aminopeniciline). Foarte utilizat în infecții respiratorii (otită, faringită, pneumonie) și pentru eradicarea H. pylori. Adesea asociat cu acid clavulanic.",
    nanda: null
}, {
    id: "v_a_ampolla",
    termES: "Ampolla (Flictena)",
    termRO: "Bășică (Flictenă)",
    categoryColor: "bg-orange-50",
    defES: "Lesión cutánea elevada llena de líquido seroso, > 1 cm de diámetro (si es menor, es vesícula). Causas: quemaduras de 2º grado, fricción, reacciones alérgicas o enfermedades ampollosas (pénfigo).",
    defRO: "Leziune cutanată ridicată plină cu lichid seros, > 1 cm în diametru (dacă este mai mică, este veziculă). Cauze: arsuri de gradul 2, fricțiune, reacții alergice sau boli buloase (pemfigus).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_a_amputacion",
    termES: "Amputación",
    termRO: "Amputare",
    categoryColor: "bg-red-50",
    defES: "Extirpación quirúrgica o traumática de una extremidad o parte de ella. Indicada en trauma severo, isquemia irreversible (pie diabético, vascular), tumores o infección grave (gangrena). Requiere rehabilitación y manejo del dolor fantasma.",
    defRO: "Extirparea chirurgicală sau traumatică a unui membru sau a unei părți a acestuia. Indicată în traumă severă, ischemie ireversibilă (picior diabetic, vasculară), tumori sau infecție gravă (gangrenă). Necesită reabilitare și managementul durerii fantomă.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_a_anabolismo",
    termES: "Anabolismo",
    termRO: "Anabolism",
    categoryColor: "bg-green-50",
    defES: "Fase constructiva del metabolismo. Conjunto de reacciones químicas que sintetizan moléculas complejas (proteínas, glucógeno) a partir de otras más simples, requiriendo energía (ATP). Esencial para el crecimiento y reparación tisular.",
    defRO: "Faza constructivă a metabolismului. Ansamblu de reacții chimice care sintetizează molecule complexe (proteine, glicogen) din altele mai simple, necesitând energie (ATP). Esențial pentru creștere și reparare tisulară.",
    nanda: null
}, {
    id: "v_a_anafilaxia",
    termES: "Anafilaxia (Shock Anafiláctico)",
    termRO: "Anafilaxie (Șoc Anafilactic)",
    categoryColor: "bg-red-50",
    defES: "Reacción alérgica sistémica grave, de inicio rápido y potencialmente mortal. Libera mediadores (histamina) que causan broncoespasmo, hipotensión (shock) y edema laríngeo. Tratamiento inmediato: Adrenalina IM.",
    defRO: "Reacție alergică sistemică gravă, cu debut rapid și potențial mortală. Eliberează mediatori (histamină) care cauzează bronhospasm, hipotensiune (șoc) și edem laringian. Tratament imediat: Adrenalină IM.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_a_analgesia",
    termES: "Analgesia",
    termRO: "Analgezie",
    categoryColor: "bg-blue-50",
    defES: "Ausencia o alivio de la sensación de dolor sin pérdida de conciencia (a diferencia de la anestesia). Se logra mediante fármacos (analgésicos) o técnicas físicas/psicológicas.",
    defRO: "Absența sau ameliorarea senzației de durere fără pierderea conștienței (spre deosebire de anestezie). Se obține prin medicamente (analgezice) sau tehnici fizice/psihologice.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_a_analisis_sangre",
    termES: "Análisis de Sangre (Hemograma)",
    termRO: "Analiză de Sânge (Hemoleucogramă)",
    categoryColor: "bg-teal-50",
    defES: "Prueba diagnóstica que evalúa los componentes celulares sanguíneos: glóbulos rojos (anemia), glóbulos blancos (infección/inmunidad) y plaquetas (coagulación). Incluye hemoglobina, hematocrito y fórmula leucocitaria.",
    defRO: "Test diagnostic care evaluează componentele celulare sanguine: globule roșii (anemie), globule albe (infecție/imunitate) și trombocite (coagulare). Include hemoglobină, hematocrit și formula leucocitară.",
    nanda: null
}, {
    id: "v_a_anamnesis",
    termES: "Anamnesis",
    termRO: "Anamneză",
    categoryColor: "bg-blue-50",
    defES: "Parte de la historia clínica que recoge la información aportada por el paciente (o familiares) mediante interrogatorio: motivo de consulta, antecedentes, alergias, hábitos y curso de la enfermedad actual.",
    defRO: "Parte a foii de observație care culege informațiile furnizate de pacient (sau rude) prin interogatoriu: motivul consultului, antecedente, alergii, obiceiuri și evoluția bolii actuale.",
    nanda: null
}, {
    id: "v_a_anastomosis",
    termES: "Anastomosis",
    termRO: "Anastomoză",
    categoryColor: "bg-rose-50",
    defES: "Conexión quirúrgica o patológica entre dos estructuras tubulares (vasos sanguíneos, intestino). Ej. Anastomosis intestinal tras resección de colon. La dehiscencia de anastomosis es una complicación grave.",
    defRO: "Conexiune chirurgicală sau patologică între două structuri tubulare (vase de sânge, intestin). Ex. Anastomoză intestinală după rezecția de colon. Dehiscența anastomozei este o complicație gravă.",
    nanda: null
}, {
    id: "v_a_anatomia",
    termES: "Anatomía",
    termRO: "Anatomie",
    categoryColor: "bg-slate-50",
    defES: "Ciencia que estudia la estructura y forma de los organismos vivos y las relaciones entre sus partes. Es la base del conocimiento médico y quirúrgico.",
    defRO: "Știință care studiază structura și forma organismelor vii și relațiile dintre părțile lor. Este baza cunoașterii medicale și chirurgicale.",
    nanda: null
}, {
    id: "v_a_anciano",
    termES: "Anciano (Geriatría)",
    termRO: "Vârstnic (Geriatrie)",
    categoryColor: "bg-stone-50",
    defES: "Persona de edad avanzada (generalmente >65 años). Grupo poblacional con características fisiológicas específicas (fragilidad, polimedicación, comorbilidad) que requiere valoración geriátrica integral.",
    defRO: "Persoană în vârstă (de obicei >65 ani). Grup populațional cu caracteristici fiziologice specifice (fragilitate, polimedicație, comorbiditate) care necesită evaluare geriatrică integrală.",
    nanda: {
        codeES: "00306",
        codeRO: "00306",
        labelES: "Riesgo de caídas del adulto",
        labelRO: "Risc de cădere la adult"
    }
}, {
    id: "v_a_androgeno",
    termES: "Andrógeno",
    termRO: "Androgen",
    categoryColor: "bg-amber-50",
    defES: "Hormona esteroidea (ej. testosterona) que promueve el desarrollo y mantenimiento de las características sexuales masculinas. Producida en testículos, ovarios y glándulas suprarrenales.",
    defRO: "Hormon steroid (ex. testosteron) care promovează dezvoltarea și menținerea caracteristicilor sexuale masculine. Produs în testicule, ovare și glande suprarenale.",
    nanda: null
}, {
    id: "v_a_anemia",
    termES: "Anemia",
    termRO: "Anemie",
    categoryColor: "bg-red-50",
    defES: "Disminución de la masa de glóbulos rojos o de la concentración de hemoglobina en sangre (<13 g/dL hombres, <12 g/dL mujeres), reduciendo la capacidad de transporte de oxígeno. Síntomas: fatiga, palidez, disnea.",
    defRO: "Scăderea masei de globule roșii sau a concentrației de hemoglobină în sânge (<13 g/dL bărbați, <12 g/dL femei), reducând capacitatea de transport a oxigenului. Simptome: oboseală, paloare, dispnee.",
    nanda: {
        codeES: "00092",
        codeRO: "00092",
        labelES: "Intolerancia a la actividad",
        labelRO: "Intoleranță la activitate"
    }
}, {
    id: "v_a_anestesia",
    termES: "Anestesia",
    termRO: "Anestezie",
    categoryColor: "bg-zinc-50",
    defES: "Pérdida de sensibilidad (especialmente dolor) inducida por fármacos. Puede ser General (inconsciencia), Regional (epidural, raquídea, bloqueo) o Local (área pequeña). Permite realizar procedimientos quirúrgicos.",
    defRO: "Pierderea sensibilității (în special a durerii) indusă de medicamente. Poate fi Generală (inconștiență), Regională (epidurală, rahidiană, bloc) sau Locală (zonă mică). Permite efectuarea procedurilor chirurgicale.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_a_aneurisma",
    termES: "Aneurisma",
    termRO: "Aneurism",
    categoryColor: "bg-red-50",
    defES: "Dilatación anormal y localizada de una arteria debido a debilidad en su pared. Riesgo de rotura y hemorragia interna masiva. Sitios comunes: Aorta abdominal (AAA) y círculo de Willis cerebral.",
    defRO: "Dilatare anormală și localizată a unei artere datorită slăbiciunii peretelui său. Risc de ruptură și hemoragie internă masivă. Locuri comune: Aorta abdominală (AAA) și cercul lui Willis cerebral.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_a_angina",
    termES: "Angina de Pecho (Angor)",
    termRO: "Angină Pectorală",
    categoryColor: "bg-red-50",
    defES: "Dolor o molestia torácica causada por isquemia miocárdica transitoria (falta de oxígeno al corazón), generalmente por obstrucción coronaria. Se desencadena con el esfuerzo y cede con el reposo o nitroglicerina (si es estable).",
    defRO: "Durere sau disconfort toracic cauzat de ischemie miocardică tranzitorie (lipsă de oxigen la inimă), de obicei prin obstrucție coronariană. Se declanșează la efort și cedează la repaus sau nitroglicerină (dacă este stabilă).",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_a_angiografia",
    termES: "Angiografía",
    termRO: "Angiografie",
    categoryColor: "bg-stone-50",
    defES: "Técnica de imagen que utiliza rayos X y un medio de contraste inyectado en el sistema vascular para visualizar arterias (arteriografía) o venas (flebografía). Gold standard para diagnosticar estenosis vasculares.",
    defRO: "Tehnică imagistică ce utilizează raze X și un mediu de contrast injectat în sistemul vascular pentru a vizualiza arterele (arteriografie) sau venele (flebografie). Gold standard pentru diagnosticarea stenozelor vasculare.",
    nanda: null
}, {
    id: "v_a_angioplastia",
    termES: "Angioplastia",
    termRO: "Angioplastie",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento intervencionista para abrir vasos sanguíneos estrechados o bloqueados, generalmente inflando un balón en su interior y colocando un stent para mantener la luz abierta (ej. coronaria).",
    defRO: "Procedură intervențională pentru deschiderea vaselor de sânge îngustate sau blocate, de obicei prin umflarea unui balon în interiorul lor și plasarea unui stent pentru a menține lumenul deschis (ex. coronariană).",
    nanda: null
}, {
    id: "v_a_anhidrosis",
    termES: "Anhidrosis",
    termRO: "Anhidroză",
    categoryColor: "bg-orange-50",
    defES: "Incapacidad patológica para sudar en respuesta al calor. Puede llevar a golpe de calor (hipertermia severa). Causas: daño nervioso, fármacos anticolinérgicos, enfermedades genéticas (displasia ectodérmica).",
    defRO: "Incapacitate patologică de a transpira ca răspuns la căldură. Poate duce la șoc termic (hipertermie severă). Cauze: leziuni nervoase, medicamente anticolinergice, boli genetice (displazie ectodermică).",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_a_anisocoria",
    termES: "Anisocoria",
    termRO: "Anizocorie",
    categoryColor: "bg-fuchsia-50",
    defES: "Asimetría en el tamaño de las pupilas (>1 mm de diferencia). Puede ser fisiológica o signo de patología neurológica grave (herniación cerebral, lesión del III par, síndrome de Horner).",
    defRO: "Asimetrie în dimensiunea pupilelor (>1 mm diferență). Poate fi fiziologică sau semn de patologie neurologică gravă (herniere cerebrală, leziune de nerv III, sindrom Horner).",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_a_ano",
    termES: "Ano",
    termRO: "Anus",
    categoryColor: "bg-stone-50",
    defES: "Orificio terminal del tracto digestivo, controlado por dos esfínteres (interno involuntario y externo voluntario). Permite la expulsión de las heces.",
    defRO: "Orificiul terminal al tractului digestiv, controlat de două sfinctere (intern involuntar și extern voluntar). Permite expulzarea materiilor fecale.",
    nanda: null
}, {
    id: "v_a_anorexia",
    termES: "Anorexia",
    termRO: "Anorexie",
    categoryColor: "bg-yellow-50",
    defES: "Pérdida de apetito. La Anorexia Nerviosa es un trastorno psiquiátrico grave caracterizado por restricción alimentaria, miedo intenso a ganar peso y distorsión de la imagen corporal.",
    defRO: "Pierderea poftei de mâncare. Anorexia Nervoasă este o tulburare psihiatrică gravă caracterizată prin restricție alimentară, frică intensă de a lua în greutate și distorsionarea imaginii corporale.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_a_anosmia",
    termES: "Anosmia",
    termRO: "Anosmie",
    categoryColor: "bg-gray-50",
    defES: "Pérdida total del sentido del olfato. Puede ser temporal (congestión nasal, COVID-19) o permanente (trauma craneal, tumores). Afecta al sentido del gusto.",
    defRO: "Pierderea totală a simțului mirosului. Poate fi temporară (congestie nazală, COVID-19) sau permanentă (traumatism cranian, tumori). Afectează simțul gustului.",
    nanda: null
}, {
    id: "v_a_anoxia",
    termES: "Anoxia",
    termRO: "Anoxie",
    categoryColor: "bg-blue-50",
    defES: "Ausencia total de oxígeno en los tejidos, más grave que la hipoxia. La anoxia cerebral provoca daño neuronal irreversible en pocos minutos.",
    defRO: "Absența totală a oxigenului în țesuturi, mai gravă decât hipoxia. Anoxia cerebrală provoacă leziuni neuronale ireversibile în câteva minute.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_a_ansiedad",
    termES: "Ansiedad",
    termRO: "Anxietate",
    categoryColor: "bg-purple-50",
    defES: "Estado emocional desagradable de inquietud, tensión y aprensión ante un peligro anticipado o inespecífico. Se acompaña de síntomas vegetativos (taquicardia, sudoración). Patológica si es desproporcionada o incapacitante.",
    defRO: "Stare emoțională neplăcută de neliniște, tensiune și aprehensiune în fața unui pericol anticipat sau nespecific. Se însoțește de simptome vegetative (tahicardie, transpirație). Patologică dacă este disproporționată sau invalidantă.",
    nanda: {
        codeES: "00146",
        codeRO: "00146",
        labelES: "Ansiedad",
        labelRO: "Anxietate"
    }
}, {
    id: "v_a_antagonista",
    termES: "Antagonista",
    termRO: "Antagonist",
    categoryColor: "bg-rose-50",
    defES: "1. Fármaco que bloquea o reduce la acción de otro fármaco o ligando endógeno al unirse a su receptor sin activarlo (ej. Naloxona antagoniza opioides). 2. Músculo que se opone a la acción de otro.",
    defRO: "1. Medicament care blochează sau reduce acțiunea altui medicament sau ligand endogen legându-se de receptorul său fără a-l activa (ex. Naloxona antagonizează opioidele). 2. Mușchi care se opune acțiunii altuia.",
    nanda: null
}, {
    id: "v_a_antibiotico",
    termES: "Antibiótico",
    termRO: "Antibiotic",
    categoryColor: "bg-emerald-50",
    defES: "Sustancia química producida por microorganismos o sintética que inhibe el crecimiento (bacteriostático) o mata (bactericida) bacterias. Ineficaz contra virus. El uso indiscriminado genera resistencias.",
    defRO: "Substanță chimică produsă de microorganisme sau sintetică care inhibă creșterea (bacteriostatic) sau omoară (bactericid) bacteriile. Ineficient împotriva virusurilor. Utilizarea nediscriminatorie generează rezistență.",
    nanda: null
}, {
    id: "v_a_anticoagulante",
    termES: "Anticoagulante",
    termRO: "Anticoagulant",
    categoryColor: "bg-red-50",
    defES: "Fármaco que retrasa o previene la coagulación de la sangre, utilizado para tratar o prevenir trombosis y embolias. Ejemplos: Heparina (parenteral), Warfarina, Acenocumarol, DOACs (oral). Requiere control de sangrado.",
    defRO: "Medicament care întârzie sau previne coagularea sângelui, utilizat pentru a trata sau preveni trombozele și emboliile. Exemple: Heparină (parenteral), Warfarină, Acenocumarol, DOAC (oral). Necesită controlul sângerării.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_a_antidoto",
    termES: "Antídoto",
    termRO: "Antidot",
    categoryColor: "bg-teal-50",
    defES: "Sustancia que neutraliza o contrarresta los efectos de un veneno, toxina o fármaco. Ejemplos: Flumazenilo (benzodiacepinas), Naloxona (opioides), N-acetilcisteína (paracetamol).",
    defRO: "Substanță care neutralizează sau contracarează efectele unei otrăvi, toxine sau medicament. Exemple: Flumazenil (benzodiazepine), Naloxonă (opioide), N-acetilcisteină (paracetamol).",
    nanda: null
}, {
    id: "v_a_antiemetico",
    termES: "Antiemético",
    termRO: "Antiemetic",
    categoryColor: "bg-green-50",
    defES: "Fármaco utilizado para prevenir o tratar las náuseas y los vómitos (emesis). Ejemplos: Metoclopramida, Ondansetrón. Esencial en quimioterapia y postoperatorio.",
    defRO: "Medicament utilizat pentru a preveni sau trata greața și vărsăturile (emeza). Exemple: Metoclopramidă, Ondansetron. Esențial în chimioterapie și postoperator.",
    nanda: null
}, {
    id: "v_a_antigeno",
    termES: "Antígeno",
    termRO: "Antigen",
    categoryColor: "bg-orange-50",
    defES: "Cualquier sustancia (generalmente proteica) que el sistema inmunitario reconoce como extraña y que desencadena una respuesta inmunitaria (producción de anticuerpos).",
    defRO: "Orice substanță (de obicei proteică) pe care sistemul imunitar o recunoaște ca străină și care declanșează un răspuns imunitar (producția de anticorpi).",
    nanda: null
}, {
    id: "v_a_antihistaminico",
    termES: "Antihistamínico",
    termRO: "Antihistaminic",
    categoryColor: "bg-pink-50",
    defES: "Fármaco que bloquea los receptores de histamina. Los H1 se usan para alergias (loratadina) y sedación; los H2 para reducir la secreción ácida gástrica (ranitidina).",
    defRO: "Medicament care blochează receptorii de histamină. H1 sunt utilizați pentru alergii (loratadină) și sedare; H2 pentru reducerea secreției acide gastrice (ranitidină).",
    nanda: null
}, {
    id: "v_a_antiinflamatorio",
    termES: "Antiinflamatorio",
    termRO: "Antiinflamator",
    categoryColor: "bg-blue-50",
    defES: "Fármaco que reduce la inflamación, el dolor y la fiebre. Dos grupos principales: AINEs (ibuprofeno, aspirina) y Corticosteroides (potentes, inmunosupresores).",
    defRO: "Medicament care reduce inflamația, durerea și febra. Două grupuri principale: AINS (ibuprofen, aspirină) și Corticosteroizi (puternici, imunosupresori).",
    nanda: null
}, {
    id: "v_a_antipiretico",
    termES: "Antipirético (Antitérmico)",
    termRO: "Antipiretic (Antitermic)",
    categoryColor: "bg-cyan-50",
    defES: "Fármaco que reduce la fiebre (pirexia) actuando sobre el centro termorregulador del hipotálamo. Ejemplos: Paracetamol, Ibuprofeno, Metamizol.",
    defRO: "Medicament care reduce febra (pirexia) acționând asupra centrului termoreglator al hipotalamusului. Exemple: Paracetamol, Ibuprofen, Metamizol.",
    nanda: null
}, {
    id: "v_a_antiseptico",
    termES: "Antiséptico",
    termRO: "Antiseptic",
    categoryColor: "bg-teal-50",
    defES: "Sustancia química aplicada sobre tejidos vivos (piel, mucosas) para destruir microorganismos o inhibir su crecimiento, previniendo infecciones. Ej. Clorhexidina, Povidona yodada.",
    defRO: "Substanță chimică aplicată pe țesuturi vii (piele, mucoase) pentru a distruge microorganismele sau a inhiba creșterea lor, prevenind infecțiile. Ex. Clorhexidină, Povidonă iodată.",
    nanda: null
}, {
    id: "v_a_anuria",
    termES: "Anuria",
    termRO: "Anurie",
    categoryColor: "bg-stone-50",
    defES: "Ausencia o supresión casi total de la excreción de orina (<100 ml/24 horas). Signo de fracaso renal agudo grave u obstrucción completa de las vías urinarias. Emergencia médica.",
    defRO: "Absența sau suprimarea aproape totală a excreției de urină (<100 ml/24 ore). Semn de insuficiență renală acută gravă sau obstrucție completă a căilor urinare. Urgență medicală.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_a_aorta",
    termES: "Aorta",
    termRO: "Aortă",
    categoryColor: "bg-red-50",
    defES: "Arteria principal y más grande del cuerpo. Nace en el ventrículo izquierdo y distribuye sangre oxigenada a todo el organismo. Se divide en ascendente, arco, torácica descendente y abdominal.",
    defRO: "Artera principală și cea mai mare a corpului. Pornește din ventriculul stâng și distribuie sânge oxigenat în tot organismul. Se împarte în ascendentă, arc, toracică descendentă și abdominală.",
    nanda: null
}, {
    id: "v_a_apatia",
    termES: "Apatía",
    termRO: "Apatie",
    categoryColor: "bg-gray-50",
    defES: "Falta de interés, entusiasmo, emoción o motivación. Síntoma común en depresión, demencia y esquizofrenia (síntoma negativo). Se manifiesta como indiferencia afectiva.",
    defRO: "Lipsă de interes, entuziasm, emoție sau motivație. Simptom comun în depresie, demență și schizofrenie (simptom negativ). Se manifestă ca indiferență afectivă.",
    nanda: null
}, {
    id: "v_a_apendicitis",
    termES: "Apendicitis",
    termRO: "Apendicită",
    categoryColor: "bg-red-50",
    defES: "Inflamación aguda del apéndice vermiforme, generalmente por obstrucción de su luz (fecalito). Causa más frecuente de abdomen agudo quirúrgico. Dolor en fosa ilíaca derecha (McBurney), fiebre y leucocitosis.",
    defRO: "Inflamație acută a apendicelui vermiform, de obicei prin obstrucția lumenului său (fecalit). Cea mai frecventă cauză de abdomen acut chirurgical. Durere în fosa iliacă dreaptă (McBurney), febră și leucocitoză.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_a_apgar",
    termES: "Apgar (Test de)",
    termRO: "Apgar (Scor)",
    categoryColor: "bg-pink-50",
    defES: "Método para evaluar la vitalidad del recién nacido al minuto y a los 5 minutos de vida. Valora 5 parámetros (0-2 puntos c/u): Apariencia (color), Pulso, Gesto (reflejos), Actividad (tono) y Respiración.",
    defRO: "Metodă de evaluare a vitalității nou-născutului la un minut și la 5 minute de viață. Evaluează 5 parametri (0-2 puncte fiecare): Aspect (culoare), Puls, Gest (reflexe), Activitate (tonus) și Respirație.",
    nanda: null
}, {
    id: "v_a_apnea",
    termES: "Apnea",
    termRO: "Apnee",
    categoryColor: "bg-cyan-50",
    defES: "Cese temporal de la respiración (>10-20 segundos). La apnea del sueño obstructiva (SAHS) es el colapso de la vía aérea durante el sueño. Apnea neonatal es inmadurez del centro respiratorio.",
    defRO: "Încetarea temporară a respirației (>10-20 secunde). Apneea obstructivă în somn (SAHS) este colapsul căii aeriene în timpul somnului. Apneea neonatală este imaturitatea centrului respirator.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_a_apoplejia",
    termES: "Apoplejía",
    termRO: "Apoplexie",
    categoryColor: "bg-red-50",
    defES: "Término clásico (en desuso) para referirse a un accidente cerebrovascular (ictus) con pérdida súbita de conciencia y parálisis. También se usa para hemorragias masivas en órganos (apoplejía hipofisaria).",
    defRO: "Termen clasic (învechit) pentru a se referi la un accident vascular cerebral (AVC) cu pierdere bruscă a conștienței și paralizie. Se folosește și pentru hemoragii masive în organe (apoplexie hipofizară).",
    nanda: null
}, {
    id: "v_a_apoptosis",
    termES: "Apoptosis",
    termRO: "Apoptoză",
    categoryColor: "bg-purple-50",
    defES: "Muerte celular programada y controlada genéticamente. Es un proceso fisiológico vital para el desarrollo, renovación tisular y eliminación de células dañadas, a diferencia de la necrosis (patológica e inflamatoria).",
    defRO: "Moarte celulară programată și controlată genetic. Este un proces fiziologic vital pentru dezvoltare, reînnoire tisulară și eliminarea celulelor deteriorate, spre deosebire de necroză (patologică și inflamatorie).",
    nanda: null
}, {
    id: "v_a_aposito",
    termES: "Apósito",
    termRO: "Pansament",
    categoryColor: "bg-stone-50",
    defES: "Material estéril aplicado sobre una herida para protegerla, absorber exudado, controlar el sangrado o facilitar la curación. Tipos: gasa, hidrocoloide, alginato, espuma, film transparente.",
    defRO: "Material steril aplicat pe o plagă pentru a o proteja, a absorbi exsudatul, a controla sângerarea sau a facilita vindecarea. Tipuri: tifon, hidrocoloid, alginat, spumă, film transparent.",
    nanda: null
}, {
    id: "v_a_apraxia",
    termES: "Apraxia",
    termRO: "Apraxie",
    categoryColor: "bg-zinc-50",
    defES: "Incapacidad para ejecutar movimientos motores aprendidos e intencionales (ej. peinarse, usar cubiertos) a pesar de tener la capacidad física y el deseo de hacerlo. Causada por daño cerebral parietal.",
    defRO: "Incapacitatea de a executa mișcări motorii învățate și intenționate (ex. pieptănat, folosirea tacâmurilor) în ciuda faptului că există capacitatea fizică și dorința de a o face. Cauzată de leziuni cerebrale parietale.",
    nanda: null
}, {
    id: "v_a_aracnoides",
    termES: "Aracnoides",
    termRO: "Arahnoidă",
    categoryColor: "bg-slate-50",
    defES: "Meninge intermedia (entre duramadre y piamadre) que recubre el encéfalo y la médula. El espacio subaracnoideo contiene el líquido cefalorraquídeo. Su inflamación es aracnoiditis.",
    defRO: "Meninge intermediară (între dura mater și pia mater) care acoperă encefalul și măduva. Spațiul subarahnoidian conține lichidul cefalorahidian. Inflamația sa este arahnoidita.",
    nanda: null
}, {
    id: "v_a_arritmia",
    termES: "Arritmia",
    termRO: "Aritmie",
    categoryColor: "bg-red-50",
    defES: "Cualquier alteración del ritmo cardiaco normal (ritmo sinusal), ya sea en frecuencia (taquicardia, bradicardia) o regularidad. Puede ser benigna o potencialmente mortal (Fibrilación Ventricular).",
    defRO: "Orice alterare a ritmului cardiac normal (ritm sinusal), fie în frecvență (tahicardie, bradicardie) sau regularitate. Poate fi benignă sau potențial mortală (Fibrilație Ventriculară).",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_a_arteria",
    termES: "Arteria",
    termRO: "Arteră",
    categoryColor: "bg-red-50",
    defES: "Vaso sanguíneo muscular que transporta sangre desde el corazón hacia los tejidos (generalmente oxigenada, excepto la arteria pulmonar). Tiene pulso y presión alta.",
    defRO: "Vas de sânge muscular care transportă sângele de la inimă către țesuturi (de obicei oxigenat, cu excepția arterei pulmonare). Are puls și presiune ridicată.",
    nanda: null
}, {
    id: "v_a_arteriosclerosis",
    termES: "Arteriosclerosis",
    termRO: "Arterioscleroză",
    categoryColor: "bg-stone-50",
    defES: "Endurecimiento y pérdida de elasticidad de las arterias, común en el envejecimiento. La Aterosclerosis es un tipo específico causado por placas de grasa (ateromas). Causa HTA e isquemia.",
    defRO: "Întărirea și pierderea elasticității arterelor, frecventă la îmbătrânire. Ateroscleroza este un tip specific cauzat de plăci de grăsime (aterom). Cauzează HTA și ischemie.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_a_articulacion",
    termES: "Articulación",
    termRO: "Articulație",
    categoryColor: "bg-stone-50",
    defES: "Estructura donde se unen dos o más huesos, permitiendo el movimiento (sinoviales) o la estabilidad. Compuesta por cartílago, cápsula, ligamentos y líquido sinovial.",
    defRO: "Structură în care se unesc două sau mai multe oase, permițând mișcarea (sinoviale) sau stabilitatea. Compusă din cartilaj, capsulă, ligamente și lichid sinovial.",
    nanda: null
}, {
    id: "v_a_artritis",
    termES: "Artritis",
    termRO: "Artrită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de una o más articulaciones, causando dolor, hinchazón, calor y rigidez. Causas: autoinmune (reumatoide), degenerativa (osteoartritis/artrosis), infecciosa (séptica) o metabólica (gota).",
    defRO: "Inflamația uneia sau mai multor articulații, cauzând durere, umflături, căldură și rigiditate. Cauze: autoimună (reumatoidă), degenerativă (osteoartrită/artroză), infecțioasă (septică) sau metabolică (gută).",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_a_artroscopia",
    termES: "Artroscopia",
    termRO: "Artroscopie",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento quirúrgico mínimamente invasivo que utiliza un artroscopio (cámara) para visualizar, diagnosticar y tratar problemas dentro de una articulación (ej. menisco rodilla).",
    defRO: "Procedură chirurgicală minim invazivă care utilizează un artroscop (cameră) pentru a vizualiza, diagnostica și trata probleme în interiorul unei articulații (ex. menisc genunchi).",
    nanda: null
}, {
    id: "v_a_ascitis",
    termES: "Ascitis",
    termRO: "Ascită",
    categoryColor: "bg-yellow-50",
    defES: "Acumulación patológica de líquido libre en la cavidad peritoneal. Causa distensión abdominal. Etiología más frecuente: hipertensión portal por cirrosis hepática. También cáncer o fallo cardiaco.",
    defRO: "Acumulare patologică de lichid liber în cavitatea peritoneală. Cauzează distensie abdominală. Etiologie cea mai frecventă: hipertensiune portală prin ciroză hepatică. De asemenea, cancer sau insuficiență cardiacă.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_a_asepsia",
    termES: "Asepsia",
    termRO: "Asepsie",
    categoryColor: "bg-emerald-50",
    defES: "Ausencia de microorganismos patógenos. Conjunto de procedimientos (lavado manos, esterilización, campo estéril) para impedir la llegada de gérmenes a un medio aséptico (quirófano).",
    defRO: "Absența microorganismelor patogene. Ansamblu de proceduri (spălarea mâinilor, sterilizare, câmp steril) pentru a preveni pătrunderea germenilor într-un mediu aseptic (sală de operație).",
    nanda: null
}, {
    id: "v_a_asfixia",
    termES: "Asfixia",
    termRO: "Asfixie",
    categoryColor: "bg-blue-50",
    defES: "Estado de hipoxia grave o anoxia causado por la interrupción de la respiración o intercambio gaseoso inadecuado. Lleva a la inconsciencia y muerte si no se revierte. Causas: ahogamiento, estrangulamiento, cuerpo extraño.",
    defRO: "Stare de hipoxie gravă sau anoxie cauzată de întreruperea respirației sau schimbul gazos inadecvat. Duce la inconștiență și moarte dacă nu este reversibilă. Cauze: înec, strangulare, corp străin.",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_a_asma",
    termES: "Asma",
    termRO: "Astm",
    categoryColor: "bg-sky-50",
    defES: "Enfermedad respiratoria crónica caracterizada por inflamación y estrechamiento reversible de las vías respiratorias (broncoespasmo) en respuesta a estímulos (alérgenos, ejercicio). Síntomas: sibilancias, disnea, tos.",
    defRO: "Boală respiratorie cronică caracterizată prin inflamație și îngustarea reversibilă a căilor respiratorii (bronhospasm) ca răspuns la stimuli (alergeni, efort). Simptome: sibilante, dispnee, tuse.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_a_aspiracion",
    termES: "Aspiración",
    termRO: "Aspirație",
    categoryColor: "bg-rose-50",
    defES: "1. Inhalación accidental de contenido gástrico, alimentos o cuerpos extraños hacia la vía aérea (Broncoaspiración). 2. Procedimiento de succión de secreciones (aspiración traqueal).",
    defRO: "1. Inhalarea accidentală a conținutului gastric, alimentelor sau corpurilor străine în calea aeriană (Bronhoaspirație). 2. Procedura de sucțiune a secrețiilor (aspirație traheală).",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_a_astenia",
    termES: "Astenia",
    termRO: "Astenie",
    categoryColor: "bg-stone-50",
    defES: "Sensación generalizada de debilidad física y fatiga, falta de energía o vitalidad. Síntoma común en cáncer, infecciones crónicas, anemia o depresión.",
    defRO: "Senzație generalizată de slăbiciune fizică și oboseală, lipsă de energie sau vitalitate. Simptom comun în cancer, infecții cronice, anemie sau depresie.",
    nanda: {
        codeES: "00093",
        codeRO: "00093",
        labelES: "Fatiga",
        labelRO: "Oboseală"
    }
}, {
    id: "v_a_ataxia",
    termES: "Ataxia",
    termRO: "Ataxie",
    categoryColor: "bg-zinc-50",
    defES: "Pérdida de coordinación muscular y control del movimiento voluntario (marcha inestable, torpeza). Generalmente indica disfunción del cerebelo (ataxia cerebelosa) o vías sensoriales.",
    defRO: "Pierderea coordonării musculare și a controlului mișcării voluntare (mers instabil, stângăcie). De obicei indică disfuncția cerebelului (ataxie cerebeloasă) sau a căilor senzoriale.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_a_atelectasia",
    termES: "Atelectasia",
    termRO: "Atelectazie",
    categoryColor: "bg-gray-50",
    defES: "Colapso total o parcial de un pulmón o lóbulo por falta de aire en los alvéolos. Común post-cirugía por hipoventilación o tapón mucoso. Causa hipoxemia y fiebre.",
    defRO: "Colaps total sau parțial al unui plămân sau lob din lipsă de aer în alveole. Frecventă post-chirurgical prin hipoventilație sau dop mucos. Cauzează hipoxemie și febră.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_a_aterosclerosis",
    termES: "Aterosclerosis",
    termRO: "Ateroscleroză",
    categoryColor: "bg-yellow-50",
    defES: "Enfermedad arterial caracterizada por el depósito de placas de grasa, colesterol y calcio (ateromas) en la íntima de las arterias, estrechando su luz. Causa principal de infarto, ictus y enfermedad vascular periférica.",
    defRO: "Boală arterială caracterizată prin depunerea de plăci de grăsime, colesterol și calciu (aterom) în intima arterelor, îngustând lumenul acestora. Cauza principală a infarctului, AVC și bolii vasculare periferice.",
    nanda: null
}, {
    id: "v_a_atonia",
    termES: "Atonía",
    termRO: "Atonie",
    categoryColor: "bg-stone-50",
    defES: "Falta de tono muscular normal o tensión. Ej. Atonía uterina post-parto (causa principal de hemorragia postparto), vejiga atónica.",
    defRO: "Lipsă de tonus muscular normal sau tensiune. Ex. Atonie uterină post-partum (cauza principală a hemoragiei post-partum), vezică atonică.",
    nanda: null
}, {
    id: "v_a_atopia",
    termES: "Atopia",
    termRO: "Atopie",
    categoryColor: "bg-orange-50",
    defES: "Predisposición genética a desarrollar reacciones de hipersensibilidad mediadas por IgE (alergias). Triada atópica: dermatitis atópica, rinitis alérgica y asma.",
    defRO: "Predispoziție genetică de a dezvolta reacții de hipersensibilitate mediate de IgE (alergii). Triada atopică: dermatită atopică, rinită alergică și astm.",
    nanda: null
}, {
    id: "v_a_atrio",
    termES: "Atrio (Aurícula)",
    termRO: "Atriu (Auricul)",
    categoryColor: "bg-red-50",
    defES: "Cámara superior del corazón que recibe sangre de las venas y la bombea a los ventrículos. Atrio derecho (sangre venosa), atrio izquierdo (sangre arterial pulmonar).",
    defRO: "Cameră superioară a inimii care primește sânge din vene și îl pompează în ventricule. Atriul drept (sânge venos), atriul stâng (sânge arterial pulmonar).",
    nanda: null
}, {
    id: "v_a_atrofia",
    termES: "Atrofia",
    termRO: "Atrofie",
    categoryColor: "bg-zinc-50",
    defES: "Disminución del tamaño de un órgano o tejido por pérdida de sustancia celular. Puede ser fisiológica (timo en adultos) o patológica (atrofia muscular por desuso, atrofia cerebral).",
    defRO: "Scăderea dimensiunii unui organ sau țesut prin pierderea substanței celulare. Poate fi fiziologică (timus la adulți) sau patologică (atrofie musculară prin neutilizare, atrofie cerebrală).",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_a_atropina",
    termES: "Atropina",
    termRO: "Atropină",
    categoryColor: "bg-purple-50",
    defES: "Fármaco anticolinérgico (antimuscarínico) que aumenta la frecuencia cardíaca, reduce las secreciones y relaja el músculo liso. Usado en bradicardia sintomática, como preanestésico y antídoto de organofosforados.",
    defRO: "Medicament anticolinergic (antimuscarinic) care crește frecvența cardiacă, reduce secrețiile și relaxează mușchiul neted. Folosit în bradicardia simptomatică, ca preanestezic și antidot pentru organofosforice.",
    nanda: null
}, {
    id: "v_a_audiometria",
    termES: "Audiometría",
    termRO: "Audiometrie",
    categoryColor: "bg-teal-50",
    defES: "Prueba funcional que mide la capacidad auditiva y el umbral de audición en diferentes frecuencias (tonos). Permite diagnosticar el tipo y grado de hipoacusia (sordera).",
    defRO: "Test funcțional care măsoară capacitatea auditivă și pragul de auz la diferite frecvențe (tonuri). Permite diagnosticarea tipului și gradului de hipoacuzie (surditate).",
    nanda: null
}, {
    id: "v_a_auscultacion",
    termES: "Auscultación",
    termRO: "Auscultație",
    categoryColor: "bg-blue-50",
    defES: "Método de exploración física que consiste en escuchar los sonidos internos del cuerpo, generalmente con un estetoscopio (corazón, pulmones, abdomen/ruidos intestinales).",
    defRO: "Metodă de examinare fizică ce constă în ascultarea sunetelor interne ale corpului, de obicei cu un stetoscop (inimă, plămâni, abdomen/zgomote intestinale).",
    nanda: null
}, {
    id: "v_a_autismo",
    termES: "Autismo (TEA)",
    termRO: "Autism (TSA)",
    categoryColor: "bg-purple-50",
    defES: "Trastorno del neurodesarrollo caracterizado por dificultades persistentes en la comunicación e interacción social, y patrones de comportamiento, intereses o actividades restrictivos y repetitivos.",
    defRO: "Tulburare de neurodezvoltare caracterizată prin dificultăți persistente în comunicarea și interacțiunea socială, și modele de comportament, interese sau activități restrictive și repetitive.",
    nanda: null
}, {
    id: "v_a_autoclave",
    termES: "Autoclave",
    termRO: "Autoclav",
    categoryColor: "bg-stone-50",
    defES: "Aparato para esterilización por calor húmedo (vapor a presión). Estándar hospitalario: 121°C durante 15-20 min o 134°C (ciclo flash). Destruye todas las formas de vida, incluidas las esporas.",
    defRO: "Aparat pentru sterilizare prin căldură umedă (abur sub presiune). Standard spitalicesc: 121°C timp de 15-20 min sau 134°C (ciclu flash). Distruge toate formele de viață, inclusiv sporii.",
    nanda: null
}, {
    id: "v_a_autocuidado",
    termES: "Autocuidado",
    termRO: "Autoîngrijire",
    categoryColor: "bg-green-50",
    defES: 'Actividades que los individuos realizan por sí mismos para mantener la vida, la salud y el bienestar. El "Déficit de autocuidado" es un diagnóstico enfermero clave (Teoría de Orem).',
    defRO: 'Activități pe care indivizii le efectuează singuri pentru a menține viața, sănătatea și bunăstarea. "Deficitul de autoîngrijire" este un diagnostic de nursing cheie (Teoria Orem).',
    nanda: {
        codeES: "00108",
        codeRO: "00108",
        labelES: "Déficit de autocuidado: Baño",
        labelRO: "Deficit de auto-îngrijire: Baie"
    }
}, {
    id: "v_a_autoinmune",
    termES: "Autoinmune",
    termRO: "Autoimun",
    categoryColor: "bg-red-50",
    defES: "Relativo a la respuesta inmunitaria anormal dirigida contra los propios tejidos del cuerpo. Enfermedades: Lupus, Artritis Reumatoide, Diabetes tipo 1.",
    defRO: "Referitor la răspunsul imunitar anormal îndreptat împotriva propriilor țesuturi ale corpului. Boli: Lupus, Artrită Reumatoidă, Diabet de tip 1.",
    nanda: null
}, {
    id: "v_a_autopsia",
    termES: "Autopsia (Necropsia)",
    termRO: "Autopsie (Necropsie)",
    categoryColor: "bg-stone-50",
    defES: "Examen post-mortem del cuerpo para determinar la causa de la muerte o la extensión de una enfermedad. Puede ser clínica (hospitalaria) o médico-legal (judicial).",
    defRO: "Examinare post-mortem a corpului pentru a determina cauza morții sau extinderea unei boli. Poate fi clinică (spitalicească) sau medico-legală (judiciară).",
    nanda: null
}, {
    id: "v_a_axila",
    termES: "Axila",
    termRO: "Axilă",
    categoryColor: "bg-stone-50",
    defES: "Región anatómica situada bajo la unión del brazo con el hombro. Contiene vasos axilares, plexo braquial y ganglios linfáticos importantes (cáncer de mama). Zona de medición de temperatura.",
    defRO: "Regiune anatomică situată sub joncțiunea brațului cu umărul. Conține vase axilare, plexul brahial și ganglioni limfatici importanți (cancer de sân). Zonă de măsurare a temperaturii.",
    nanda: null
}, {
    id: "v_a_axon",
    termES: "Axón",
    termRO: "Axon",
    categoryColor: "bg-blue-50",
    defES: "Prolongación larga y única de la neurona que conduce el impulso nervioso (potencial de acción) desde el cuerpo celular hacia otras neuronas, músculos o glándulas. Puede estar mielinizado.",
    defRO: "Prelungire lungă și unică a neuronului care conduce impulsul nervos (potențial de acțiune) de la corpul celular către alți neuroni, mușchi sau glande. Poate fi mielinizat.",
    nanda: null
}, {
    id: "v_a_ayuno",
    termES: "Ayuno",
    termRO: "Post (Alimentar)",
    categoryColor: "bg-amber-50",
    defES: "Abstinencia de ingesta de alimentos y líquidos. El ayuno preoperatorio (NPO) es vital para prevenir la aspiración pulmonar durante la anestesia. Ayuno prolongado causa cetosis.",
    defRO: "Abținența de la ingerarea de alimente și lichide. Postul preoperator (NPO) este vital pentru a preveni aspirația pulmonară în timpul anesteziei. Postul prelungit cauzează cetoză.",
    nanda: null
}, {
    id: "v_a_azotemia",
    termES: "Azotemia",
    termRO: "Azotemie",
    categoryColor: "bg-yellow-50",
    defES: "Elevación de productos nitrogenados (urea, creatinina) en sangre, indicativo de disfunción renal. Si se acompaña de síntomas clínicos se denomina uremia.",
    defRO: "Creșterea produșilor azotați (uree, creatinină) în sânge, indicativă a disfuncției renale. Dacă se însoțește de simptome clinice se numește uremie.",
    nanda: null
}, {
    id: "v_a_azucar",
    termES: "Azúcar (Glucosa)",
    termRO: "Zahăr (Glucoză)",
    categoryColor: "bg-orange-50",
    defES: "Carbohidrato simple. En medicina, suele referirse a la glucosa sanguínea (glucemia). La hiperglucemia crónica define la diabetes mellitus.",
    defRO: "Carbohidrat simplu. În medicină, se referă de obicei la glucoza sanguină (glicemie). Hiperglicemia cronică definește diabetul zaharat.",
    nanda: null
}, {
    id: "v_b_babinski",
    termES: "Babinski (Reflejo de)",
    termRO: "Babinski (Reflex)",
    categoryColor: "bg-stone-50",
    defES: "Reflejo patológico en adultos: extensión dorsal del dedo gordo del pie al estimular la planta. Indica lesión de la vía piramidal (motoneurona superior). Normal en bebés <2 años.",
    defRO: "Reflex patologic la adulți: extensia dorsală a degetului mare de la picior la stimularea tălpii. Indică leziune a căii piramidale (motoneuron superior). Normal la bebeluși <2 ani.",
    nanda: null
}, {
    id: "v_b_bacilo",
    termES: "Bacilo",
    termRO: "Bacil",
    categoryColor: "bg-green-50",
    defES: "Bacteria con forma de bastón. Ejemplos: Bacillus anthracis (ántrax), Mycobacterium tuberculosis (bacilo de Koch). Pueden ser Gram positivos o negativos.",
    defRO: "Bacterie în formă de baston. Exemple: Bacillus anthracis (antrax), Mycobacterium tuberculosis (bacilul Koch). Pot fi Gram pozitivi sau negativi.",
    nanda: null
}, {
    id: "v_b_bacteriemia",
    termES: "Bacteriemia",
    termRO: "Bacteriemie",
    categoryColor: "bg-red-50",
    defES: "Presencia de bacterias viables en el torrente sanguíneo. Puede ser transitoria o conducir a sepsis. Se diagnostica mediante hemocultivos.",
    defRO: "Prezența bacteriilor viabile în torentul sanguin. Poate fi tranzitorie sau poate duce la sepsis. Se diagnostichează prin hemoculturi.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_b_bactericida",
    termES: "Bactericida",
    termRO: "Bactericid",
    categoryColor: "bg-emerald-50",
    defES: "Agente o sustancia capaz de matar bacterias irreversiblemente (ej. penicilinas, aminoglucósidos, lejía). Se distingue del bacteriostático (que solo inhibe el crecimiento).",
    defRO: "Agent sau substanță capabilă să omoare bacteriile ireversibil (ex. peniciline, aminoglicozide, înălbitor). Se distinge de bacteriostatic (care doar inhibă creșterea).",
    nanda: null
}, {
    id: "v_b_balance_hidrico",
    termES: "Balance Hídrico",
    termRO: "Bilanț Hidric",
    categoryColor: "bg-blue-50",
    defES: "Cálculo de la relación entre la ingesta (entradas: oral, IV) y la pérdida (salidas: orina, heces, sudor, respiración) de líquidos en el cuerpo. Esencial en pacientes críticos y renales.",
    defRO: "Calculul relației dintre aport (intrări: oral, IV) și pierdere (ieșiri: urină, scaun, transpirație, respirație) de lichide în corp. Esențial la pacienții critici și renali.",
    nanda: {
        codeES: "00025",
        codeRO: "00025",
        labelES: "Riesgo de desequilibrio de volumen de líquidos",
        labelRO: "Risc de dezechilibru al volumului lichidian"
    }
}, {
    id: "v_b_balanitis",
    termES: "Balanitis",
    termRO: "Balanită",
    categoryColor: "bg-red-50",
    defES: "Inflamación del glande del pene. A menudo causada por infección fúngica (Cándida) o bacteriana, especialmente en hombres no circuncidados con mala higiene o diabetes.",
    defRO: "Inflamația glandului penisului. Adesea cauzată de infecție fungică (Candida) sau bacteriană, în special la bărbații necircumciși cu igienă precară sau diabet.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_b_balantidiasis",
    termES: "Balantidiasis",
    termRO: "Balantidioză",
    categoryColor: "bg-orange-50",
    defES: "Enfermedad infecciosa intestinal causada por el parásito protozoario Balantidium coli. Se transmite por agua o alimentos contaminados (frecuente en contacto con cerdos). Causa diarrea grave, disentería y úlceras colónicas.",
    defRO: "Boală infecțioasă intestinală cauzată de parazitul protozoar Balantidium coli. Se transmite prin apă sau alimente contaminate (frecventă la contactul cu porcii). Cauzează diaree severă, dizenterie și ulcere colonice.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_b_balismo",
    termES: "Balismo",
    termRO: "Balism",
    categoryColor: "bg-purple-50",
    defES: "Trastorno del movimiento caracterizado por movimientos involuntarios, violentos, de gran amplitud y lanzamiento de las extremidades (generalmente unilateral: hemibalismo). Se debe a lesiones en el núcleo subtalámico de Luys.",
    defRO: "Tulburare de mișcare caracterizată prin mișcări involuntare, violente, de mare amplitudine și aruncarea extremităților (de obicei unilateral: hemibalism). Se datorează leziunilor în nucleul subtalamic Luys.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_b_balneoterapia",
    termES: "Balneoterapia",
    termRO: "Balneoterapie",
    categoryColor: "bg-blue-50",
    defES: "Uso terapéutico de baños, duchas y chorros de agua, a menudo con aguas minerales o termales, para tratar enfermedades (reumatológicas, dermatológicas) o promover la relajación y el bienestar.",
    defRO: "Utilizarea terapeutică a băilor, dușurilor și jeturilor de apă, adesea cu ape minerale sau termale, pentru a trata boli (reumatologice, dermatologice) sau pentru a promova relaxarea și bunăstarea.",
    nanda: null
}, {
    id: "v_b_balon_contrapulsacion",
    termES: "Balón de Contrapulsación Intraaórtico (BCIA)",
    termRO: "Balon de Contrapulsație Intraaortic (IABP)",
    categoryColor: "bg-red-50",
    defES: "Dispositivo de asistencia circulatoria mecánica temporal. Un balón situado en la aorta torácica se infla en diástole (aumenta perfusión coronaria) y se desinfla en sístole (reduce poscarga), ayudando a un corazón en fallo (shock cardiogénico).",
    defRO: "Dispozitiv de asistență circulatorie mecanică temporară. Un balon situat în aorta toracică se umflă în diastolă (crește perfuzia coronariană) și se dezumflă în sistolă (reduce postsarcina), ajutând o inimă în insuficiență (șoc cardiogen).",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_b_balsamo",
    termES: "Bálsamo",
    termRO: "Balsam",
    categoryColor: "bg-green-50",
    defES: "Sustancia aromática vegetal o preparación farmacéutica tópica con propiedades calmantes, antiinflamatorias o expectorantes. Se aplica sobre la piel para aliviar el dolor o la congestión.",
    defRO: "Substanță aromatică vegetală sau preparat farmaceutic topic cu proprietăți calmante, antiinflamatorii sau expectorante. Se aplică pe piele pentru a ameliora durerea sau congestia.",
    nanda: null
}, {
    id: "v_b_banco_sangre",
    termES: "Banco de Sangre",
    termRO: "Bancă de Sânge",
    categoryColor: "bg-red-50",
    defES: "Unidad hospitalaria o centro especializado encargado de la recolección, procesamiento, análisis (tipaje, cribado infeccioso), almacenamiento y distribución de sangre y hemoderivados para transfusiones.",
    defRO: "Unitate spitalicească sau centru specializat însărcinat cu recoltarea, prelucrarea, analiza (tipare, screening infecțios), stocarea și distribuția sângelui și produselor sanguine pentru transfuzii.",
    nanda: null
}, {
    id: "v_b_banda_gastrica",
    termES: "Banda Gástrica",
    termRO: "Inel Gastric (Bandă Gastrică)",
    categoryColor: "bg-teal-50",
    defES: "Técnica de cirugía bariátrica restrictiva que consiste en colocar una banda de silicona ajustable alrededor de la parte superior del estómago, creando un pequeño reservorio para limitar la ingesta de alimentos y provocar saciedad precoz.",
    defRO: "Tehnică de chirurgie bariatrică restrictivă care constă în plasarea unei benzi de silicon ajustabile în jurul părții superioare a stomacului, creând un mic rezervor pentru a limita aportul de alimente și a provoca sațietate precoce.",
    nanda: {
        codeES: "00232",
        codeRO: "00232",
        labelES: "Obesidad",
        labelRO: "Obezitate"
    }
}, {
    id: "v_b_barbiturico",
    termES: "Barbitúrico",
    termRO: "Barbituric",
    categoryColor: "bg-violet-50",
    defES: "Clase de fármacos depresores del sistema nervioso central derivados del ácido barbitúrico. Antiguamente usados como sedantes/hipnóticos, ahora principalmente como antiepilépticos (Fenobarbital) o anestésicos (Tiopental). Alto riesgo de dependencia y depresión respiratoria.",
    defRO: "Clasă de medicamente depresoare ale sistemului nervos central derivate din acidul barbituric. Folosite anterior ca sedative/hipnotice, acum în principal ca antiepileptice (Fenobarbital) sau anestezice (Tiopental). Risc ridicat de dependență și depresie respiratorie.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_b_bario",
    termES: "Bario (Sulfato de)",
    termRO: "Bariu (Sulfat de)",
    categoryColor: "bg-stone-50",
    defES: "Medio de contraste radiopaco inerte utilizado en radiología para visualizar el tracto gastrointestinal (esófago, estómago, intestino) mediante rayos X (papilla de bario o enema opaco). Puede causar estreñimiento o impactación.",
    defRO: "Mediu de contrast radioopac inert utilizat în radiologie pentru a vizualiza tractul gastrointestinal (esofag, stomac, intestin) prin raze X (pastă de bariu sau clismă baritată). Poate cauza constipație sau impactare.",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_b_baritosis",
    termES: "Baritosis",
    termRO: "Baritoză",
    categoryColor: "bg-gray-50",
    defES: "Neumoconiosis benigna causada por la inhalación prolongada de polvo de bario. Aunque produce opacidades radiológicas marcadas en los pulmones, generalmente no causa fibrosis ni deterioro funcional significativo.",
    defRO: "Pneumoconioză benignă cauzată de inhalarea prelungită a prafului de bariu. Deși produce opacități radiologice marcate în plămâni, în general nu cauzează fibroză sau deteriorare funcțională semnificativă.",
    nanda: null
}, {
    id: "v_b_barorreceptor",
    termES: "Barorreceptor",
    termRO: "Baroreceptor",
    categoryColor: "bg-amber-50",
    defES: "Receptores sensoriales situados en las paredes de ciertos vasos sanguíneos (seno carotídeo, arco aórtico) que detectan cambios en la presión arterial y envían señales al cerebro para regular el ritmo cardíaco y la resistencia vascular (reflejo barorreceptor).",
    defRO: "Receptori senzoriali situați în pereții anumitor vase de sânge (sinus carotidian, arc aortic) care detectează schimbările tensiunii arteriale și trimit semnale la creier pentru a regla ritmul cardiac și rezistența vasculară (reflex baroreceptor).",
    nanda: null
}, {
    id: "v_b_barotrauma",
    termES: "Barotrauma",
    termRO: "Barotraumă",
    categoryColor: "bg-blue-50",
    defES: "Lesión tisular causada por cambios en la presión del aire o agua. Afecta comúnmente al oído medio (buceo, vuelo), senos paranasales o pulmones (ventilación mecánica con presiones altas).",
    defRO: "Leziune tisulară cauzată de schimbările presiunii aerului sau apei. Afectează frecvent urechea medie (scufundări, zbor), sinusurile paranazale sau plămânii (ventilație mecanică cu presiuni ridicate).",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_b_barrera_hemato",
    termES: "Barrera Hematoencefálica",
    termRO: "Barieră Hematoencefalică",
    categoryColor: "bg-indigo-50",
    defES: "Estructura semipermeable altamente selectiva que separa la sangre circulante del fluido extracelular cerebral. Formada por células endoteliales con uniones estrechas. Protege al cerebro de toxinas y patógenos, pero dificulta el paso de muchos fármacos.",
    defRO: "Structură semipermeabilă extrem de selectivă care separă sângele circulant de fluidul extracelular cerebral. Formată din celule endoteliale cu joncțiuni strânse. Protejează creierul de toxine și patogeni, dar îngreunează trecerea multor medicamente.",
    nanda: null
}, {
    id: "v_b_bartholin",
    termES: "Bartholin (Glándulas de)",
    termRO: "Bartholin (Glande)",
    categoryColor: "bg-pink-50",
    defES: "Dos glándulas situadas a cada lado de la apertura vaginal que secretan moco para lubricar la vagina. Su obstrucción causa un quiste de Bartholin, y su infección un absceso (Bartolinitis), muy doloroso.",
    defRO: "Două glande situate de fiecare parte a deschiderii vaginale care secretă mucus pentru a lubrifia vaginul. Obstrucția lor cauzează un chist Bartholin, iar infecția lor un abces (Bartolinită), foarte dureros.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_b_bartonelosis",
    termES: "Bartonelosis",
    termRO: "Bartoneloză",
    categoryColor: "bg-orange-50",
    defES: "Grupo de enfermedades infecciosas causadas por bacterias del género Bartonella. Incluye la enfermedad por arañazo de gato (B. henselae), caracterizada por linfadenopatía regional y fiebre.",
    defRO: "Grup de boli infecțioase cauzate de bacterii din genul Bartonella. Include boala zgârieturii de pisică (B. henselae), caracterizată prin limfadenopatie regională și febră.",
    nanda: null
}, {
    id: "v_b_basal",
    termES: "Basal",
    termRO: "Bazal",
    categoryColor: "bg-slate-50",
    defES: "Referente a la base o al nivel mínimo necesario para mantener la vida. Metabolismo basal: energía gastada en reposo absoluto. Insulina basal: secreción continua de fondo o dosis de insulina de acción larga.",
    defRO: "Referitor la bază sau la nivelul minim necesar pentru a menține viața. Metabolism bazal: energie consumată în repaus absolut. Insulină bazală: secreție continuă de fond sau doză de insulină cu acțiune lungă.",
    nanda: null
}, {
    id: "v_b_base",
    termES: "Base",
    termRO: "Bază",
    categoryColor: "bg-teal-50",
    defES: "1. Química: Sustancia que acepta protones (H+) o libera iones hidroxilo (OH-), pH > 7. 2. Anatomía: Parte inferior o de soporte de un órgano (ej. base del pulmón, base del cráneo). 3. Farmacia: Ingrediente principal de un preparado.",
    defRO: "1. Chimie: Substanță care acceptă protoni (H+) sau eliberează ioni hidroxil (OH-), pH > 7. 2. Anatomie: Partea inferioară sau de suport a unui organ (ex. baza plămânului, baza craniului). 3. Farmacie: Ingredientul principal al unui preparat.",
    nanda: null
}, {
    id: "v_b_basedow",
    termES: "Basedow (Enfermedad de Graves)",
    termRO: "Basedow (Boala Graves)",
    categoryColor: "bg-violet-50",
    defES: "Causa más común de hipertiroidismo. Trastorno autoinmune donde anticuerpos estimulan la tiroides. Triada clásica: bocio difuso, tirotoxicosis (taquicardia, pérdida peso) y oftalmopatía (exoftalmos).",
    defRO: "Cauza cea mai frecventă a hipertiroidismului. Tulburare autoimună unde anticorpii stimulează tiroida. Triada clasică: gușă difuză, tireotoxicoză (tahicardie, scădere în greutate) și oftalmopatie (exoftalmie).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_b_basofilia",
    termES: "Basofilia",
    termRO: "Bazofilie",
    categoryColor: "bg-red-50",
    defES: "Aumento anormal del número de basófilos en sangre periférica. Poco frecuente, asociado a reacciones alérgicas, enfermedades mieloproliferativas (leucemia mieloide crónica) o inflamación crónica.",
    defRO: "Creștere anormală a numărului de bazofile în sângele periferic. Puțin frecventă, asociată cu reacții alergice, boli mieloproliferative (leucemie mieloidă cronică) sau inflamație cronică.",
    nanda: null
}, {
    id: "v_b_basofilo",
    termES: "Basófilo",
    termRO: "Bazofil",
    categoryColor: "bg-red-50",
    defES: "Tipo de glóbulo blanco (granulocito) menos abundante (<1%). Contiene gránulos con histamina y heparina. Participa en reacciones alérgicas e inflamatorias mediadas por IgE.",
    defRO: "Tip de globulă albă (granulocit) cel mai puțin abundent (<1%). Conține granule cu histamină și heparină. Participă la reacții alergice și inflamatorii mediate de IgE.",
    nanda: null
}, {
    id: "v_b_bazo",
    termES: "Bazo",
    termRO: "Splină",
    categoryColor: "bg-emerald-50",
    defES: "Órgano linfoide situado en el hipocondrio izquierdo. Filtra la sangre eliminando eritrocitos viejos (hemocateresis), almacena plaquetas y participa en la inmunidad. Su rotura (trauma abdominal) causa hemorragia masiva.",
    defRO: "Organ limfoid situat în hipocondrul stâng. Filtrează sângele eliminând eritrocitele vechi (hemocateresis), stochează trombocite și participă la imunitate. Ruptura sa (traumatism abdominal) cauzează hemoragie masivă.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_b_bcg",
    termES: "BCG (Bacilo Calmette-Guérin)",
    termRO: "BCG (Bacilul Calmette-Guérin)",
    categoryColor: "bg-yellow-50",
    defES: "Vacuna viva atenuada derivada de Mycobacterium bovis utilizada para prevenir la tuberculosis (especialmente formas graves en niños). También se usa como inmunoterapia intravesical para el cáncer de vejiga superficial.",
    defRO: "Vaccin viu atenuat derivat din Mycobacterium bovis utilizat pentru prevenirea tuberculozei (în special formele grave la copii). De asemenea, utilizat ca imunoterapie intravezicală pentru cancerul de vezică superficial.",
    nanda: null
}, {
    id: "v_b_becquerel",
    termES: "Becquerel (Bq)",
    termRO: "Becquerel (Bq)",
    categoryColor: "bg-zinc-50",
    defES: "Unidad del Sistema Internacional para medir la actividad radiactiva. Un Bq equivale a una desintegración nuclear por segundo. Reemplazó al Curie (Ci). Importante en medicina nuclear.",
    defRO: "Unitatea Sistemului Internațional pentru măsurarea activității radioactive. Un Bq echivalează cu o dezintegrare nucleară pe secundă. A înlocuit Curie (Ci). Important în medicina nucleară.",
    nanda: null
}, {
    id: "v_b_belladona",
    termES: "Belladona",
    termRO: "Mătrăgună (Belladonna)",
    categoryColor: "bg-green-50",
    defES: 'Planta (Atropa belladonna) de la que se extraen alcaloides anticolinérgicos como la atropina. Tóxica en estado natural. Históricamente usada para dilatar las pupilas (midriasis) por estética, de ahí su nombre ("bella dama").',
    defRO: 'Plantă (Atropa belladonna) din care se extrag alcaloizi anticolinergici precum atropina. Toxică în stare naturală. Istoric folosită pentru dilatarea pupilelor (midriază) din motive estetice, de unde și numele ("doamnă frumoasă").',
    nanda: null
}, {
    id: "v_b_benigno",
    termES: "Benigno",
    termRO: "Benign",
    categoryColor: "bg-green-50",
    defES: "No canceroso o maligno. Un tumor benigno crece localmente, no invade tejidos adyacentes ni hace metástasis, y generalmente tiene buen pronóstico tras su extirpación. También se aplica a enfermedades de curso leve.",
    defRO: "Necanceros sau malign. O tumoare benignă crește local, nu invadează țesuturile adiacente și nu face metastaze, și are în general un prognostic bun după extirpare. Se aplică și bolilor cu evoluție ușoară.",
    nanda: null
}, {
    id: "v_b_benzodiacepina",
    termES: "Benzodiacepina",
    termRO: "Benzodiazepină",
    categoryColor: "bg-violet-50",
    defES: "Grupo de psicofármacos con efectos ansiolíticos, hipnóticos, relajantes musculares y anticonvulsivos. Actúan potenciando el efecto del GABA. Ejemplos: Diazepam, Lorazepam, Alprazolam. Riesgo de tolerancia y dependencia.",
    defRO: "Grup de psihofarmace cu efecte anxiolitice, hipnotice, relaxante musculare și anticonvulsive. Acționează prin potențarea efectului GABA. Exemple: Diazepam, Lorazepam, Alprazolam. Risc de toleranță și dependență.",
    nanda: {
        codeES: "00262",
        codeRO: "00262",
        labelES: "Riesgo de síndrome de abstinencia agudo",
        labelRO: "Risc de sindrom de sevraj acut"
    }
}, {
    id: "v_b_beriberi",
    termES: "Beriberi",
    termRO: "Beriberi",
    categoryColor: "bg-yellow-50",
    defES: "Enfermedad causada por la deficiencia de tiamina (Vitamina B1). Tipos: Húmedo (afecta al corazón, fallo cardíaco, edema) y Seco (afecta a los nervios, neuropatía periférica, emaciación).",
    defRO: "Boală cauzată de deficiența de tiamină (Vitamina B1). Tipuri: Umed (afectează inima, insuficiență cardiacă, edem) și Uscat (afectează nervii, neuropatie periferică, emaciere).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_b_betabloqueante",
    termES: "Betabloqueante",
    termRO: "Beta-blocant",
    categoryColor: "bg-red-50",
    defES: "Fármaco que bloquea los receptores beta-adrenérgicos, reduciendo la frecuencia cardíaca y la contractilidad. Usado en hipertensión, angina, insuficiencia cardíaca y arritmias. Ejemplos: Atenolol, Bisoprolol, Propranolol.",
    defRO: "Medicament care blochează receptorii beta-adrenergici, reducând frecvența cardiacă și contractilitatea. Folosit în hipertensiune, angină, insuficiență cardiacă și aritmii. Exemple: Atenolol, Bisoprolol, Propranolol.",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_b_betacaroteno",
    termES: "Betacaroteno",
    termRO: "Beta-caroten",
    categoryColor: "bg-orange-50",
    defES: "Pigmento vegetal rojo-anaranjado y provitamina A (se convierte en vitamina A en el cuerpo). Potente antioxidante importante para la visión, piel y sistema inmune.",
    defRO: "Pigment vegetal roșu-portocaliu și provitamina A (se transformă în vitamina A în corp). Antioxidant puternic important pentru vedere, piele și sistemul imunitar.",
    nanda: null
}, {
    id: "v_b_betametasona",
    termES: "Betametasona",
    termRO: "Betametazonă",
    categoryColor: "bg-pink-50",
    defES: "Corticosteroide sintético potente con actividad antiinflamatoria e inmunosupresora. Usado tópicamente (dermatitis), sistémicamente o para maduración pulmonar fetal en riesgo de parto prematuro.",
    defRO: "Corticosteroid sintetic puternic cu activitate antiinflamatorie și imunosupresoare. Folosit topic (dermatite), sistemic sau pentru maturarea pulmonară fetală în riscul de naștere prematură.",
    nanda: null
}, {
    id: "v_b_biberon",
    termES: "Biberón",
    termRO: "Biberon",
    categoryColor: "bg-sky-50",
    defES: "Recipiente con tetina utilizado para la alimentación artificial (fórmula) o mixta de lactantes. Requiere esterilización rigurosa en los primeros meses para prevenir gastroenteritis.",
    defRO: "Recipient cu tetină utilizat pentru hrănirea artificială (formulă) sau mixtă a sugarilor. Necesită sterilizare riguroasă în primele luni pentru a preveni gastroenterita.",
    nanda: {
        codeES: "00105",
        codeRO: "00105",
        labelES: "Interrupción de la lactancia materna",
        labelRO: "Întreruperea alăptării"
    }
}, {
    id: "v_b_bicarbonato",
    termES: "Bicarbonato (Sódico)",
    termRO: "Bicarbonat (de Sodiu)",
    categoryColor: "bg-cyan-50",
    defES: "Sal básica utilizada en medicina para tratar la acidosis metabólica severa, alcalinizar la orina o como antiácido gástrico. Es el principal tampón fisiológico en la sangre.",
    defRO: "Sare bazică utilizată în medicină pentru tratarea acidozei metabolice severe, alcalinizarea urinei sau ca antiacid gastric. Este principalul tampon fiziologic în sânge.",
    nanda: null
}, {
    id: "v_b_biceps",
    termES: "Bíceps",
    termRO: "Biceps",
    categoryColor: "bg-red-50",
    defES: "Músculo de dos cabezas. Bíceps braquial: en la parte anterior del brazo, flexor del codo. Bíceps femoral: en la parte posterior del muslo, flexor de rodilla.",
    defRO: "Mușchi cu două capete. Biceps brahial: în partea anterioară a brațului, flexor al cotului. Biceps femural: în partea posterioară a coapsei, flexor al genunchiului.",
    nanda: null
}, {
    id: "v_b_bicuspide",
    termES: "Bicúspide (Válvula Mitral)",
    termRO: "Bicuspidă (Valva Mitrală)",
    categoryColor: "bg-red-50",
    defES: "Válvula cardíaca situada entre la aurícula y el ventrículo izquierdos. Tiene dos valvas (anterior y posterior) que impiden el reflujo de sangre durante la sístole ventricular. La válvula aórtica bicúspide es una anomalía congénita.",
    defRO: "Valvă cardiacă situată între atriul și ventriculul stâng. Are două foițe (anterioară și posterioară) care împiedică refluxul sângelui în timpul sistolei ventriculare. Valva aortică bicuspidă este o anomalie congenitală.",
    nanda: null
}, {
    id: "v_b_bigeminismo",
    termES: "Bigeminismo",
    termRO: "Bigeminism",
    categoryColor: "bg-rose-50",
    defES: "Arritmia cardíaca caracterizada por una secuencia continua de pares de latidos: un latido sinusal normal seguido inmediatamente por una extrasístole (latido prematuro).",
    defRO: "Aritmie cardiacă caracterizată printr-o secvență continuă de perechi de bătăi: o bătaie sinusală normală urmată imediat de o extrasistolă (bătaie prematură).",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_b_bilis",
    termES: "Bilis",
    termRO: "Bilă",
    categoryColor: "bg-green-50",
    defES: "Líquido amarillo-verdoso producido por el hígado y almacenado en la vesícula biliar. Contiene sales biliares, colesterol y bilirrubina. Esencial para la digestión y absorción de grasas en el intestino delgado.",
    defRO: "Lichid galben-verzui produs de ficat și stocat în vezica biliară. Conține săruri biliare, colesterol și bilirubină. Esențial pentru digestia și absorbția grăsimilor în intestinul subțire.",
    nanda: null
}, {
    id: "v_b_bilirrubina",
    termES: "Bilirrubina",
    termRO: "Bilirubină",
    categoryColor: "bg-yellow-50",
    defES: "Pigmento amarillo producto de la degradación de la hemoglobina de los glóbulos rojos viejos. Se conjuga en el hígado y excreta en la bilis. Su acumulación en sangre causa ictericia (piel y ojos amarillos).",
    defRO: "Pigment galben produs al degradării hemoglobinei din globulele roșii vechi. Se conjugă în ficat și se excretă în bilă. Acumularea sa în sânge cauzează icter (piele și ochi galbeni).",
    nanda: {
        codeES: "00194",
        codeRO: "00194",
        labelES: "Ictericia neonatal",
        labelRO: "Icter neonatal"
    }
}, {
    id: "v_b_billroth",
    termES: "Billroth (Gastrectomía)",
    termRO: "Billroth (Gastrectomie)",
    categoryColor: "bg-teal-50",
    defES: "Técnicas de reconstrucción tras gastrectomía parcial. Billroth I: anastomosis del estómago remanente al duodeno (gastroduodenostomía). Billroth II: anastomosis al yeyuno (gastroyeyunostomía).",
    defRO: "Tehnici de reconstrucție după gastrectomie parțială. Billroth I: anastomoza stomacului restant la duoden (gastroduodenostomie). Billroth II: anastomoza la jejun (gastrojejunostomie).",
    nanda: null
}, {
    id: "v_b_bioetica",
    termES: "Bioética",
    termRO: "Bioetică",
    categoryColor: "bg-slate-50",
    defES: "Rama de la ética que estudia los problemas morales surgidos de los avances en biología y medicina. Principios fundamentales: autonomía, beneficencia, no maleficencia y justicia.",
    defRO: "Ramură a eticii care studiază problemele morale apărute din progresele în biologie și medicină. Principii fundamentale: autonomie, binefacere, non-maleficență și justiție.",
    nanda: {
        codeES: "00083",
        codeRO: "00083",
        labelES: "Conflicto de decisiones",
        labelRO: "Conflict decizional"
    }
}, {
    id: "v_b_biofeedback",
    termES: "Biofeedback (Biorretroalimentación)",
    termRO: "Biofeedback",
    categoryColor: "bg-purple-50",
    defES: "Técnica terapéutica que enseña al paciente a controlar funciones fisiológicas involuntarias (frecuencia cardíaca, tensión muscular) mediante el uso de equipos que monitorizan y muestran estas señales en tiempo real.",
    defRO: "Tehnică terapeutică ce învață pacientul să controleze funcții fiziologice involuntare (frecvență cardiacă, tensiune musculară) prin utilizarea echipamentelor care monitorizează și afișează aceste semnale în timp real.",
    nanda: null
}, {
    id: "v_b_biofilm",
    termES: "Biofilm (Biopelícula)",
    termRO: "Biofilm (Biopeliculă)",
    categoryColor: "bg-green-50",
    defES: "Comunidad compleja de microorganismos adheridos a una superficie (catéteres, prótesis, heridas) y protegidos por una matriz de polímeros. Son muy resistentes a los antibióticos y al sistema inmune, causando infecciones crónicas.",
    defRO: "Comunitate complexă de microorganisme aderente la o suprafață (catetere, proteze, plăgi) și protejate de o matrice de polimeri. Sunt foarte rezistente la antibiotice și la sistemul imunitar, cauzând infecții cronice.",
    nanda: {
        codeES: "00266",
        codeRO: "00266",
        labelES: "Riesgo de infección de la herida quirúrgica",
        labelRO: "Risc de infecție a plăgii chirurgicale"
    }
}, {
    id: "v_b_biopsia",
    termES: "Biopsia",
    termRO: "Biopsie",
    categoryColor: "bg-indigo-50",
    defES: 'Extracción de una muestra de tejido o células de un organismo vivo para su examen microscópico (histopatología). Es el "gold standard" para el diagnóstico definitivo de cáncer y muchas otras enfermedades.',
    defRO: 'Extragerea unei mostre de țesut sau celule dintr-un organism viu pentru examinare microscopică (histopatologie). Este "standardul de aur" pentru diagnosticul definitiv al cancerului și al multor alte boli.',
    nanda: null
}, {
    id: "v_b_biorritmo",
    termES: "Biorritmo (Ritmo Circadiano)",
    termRO: "Bioritm (Ritm Circadian)",
    categoryColor: "bg-blue-50",
    defES: "Variación cíclica y periódica de las funciones fisiológicas (sueño-vigilia, temperatura, hormonas) que se repite aproximadamente cada 24 horas, regulada por el reloj biológico interno (núcleo supraquiasmático).",
    defRO: "Variație ciclică și periodică a funcțiilor fiziologice (somn-veghe, temperatură, hormoni) care se repetă aproximativ la fiecare 24 de ore, reglată de ceasul biologic intern (nucleul suprachiasmatic).",
    nanda: {
        codeES: "00198",
        codeRO: "00198",
        labelES: "Trastorno del patrón del sueño",
        labelRO: "Model de somn perturbat"
    }
}, {
    id: "v_b_bioseguridad",
    termES: "Bioseguridad",
    termRO: "Biosecuritate",
    categoryColor: "bg-orange-50",
    defES: "Conjunto de medidas preventivas destinadas a reducir el riesgo de transmisión de enfermedades infecciosas, cuarentena, plagas o especies exóticas invasoras. En hospital: EPIs, gestión de residuos, lavado de manos.",
    defRO: "Ansamblu de măsuri preventive destinate reducerii riscului de transmitere a bolilor infecțioase, carantinei, dăunătorilor sau speciilor exotice invazive. În spital: EPI, gestionarea deșeurilor, spălarea mâinilor.",
    nanda: null
}, {
    id: "v_b_biotecnologia",
    termES: "Biotecnología",
    termRO: "Biotehnologie",
    categoryColor: "bg-teal-50",
    defES: "Uso de organismos vivos o sistemas biológicos para desarrollar productos. En medicina: producción de insulina recombinante, anticuerpos monoclonales, vacunas y terapia génica.",
    defRO: "Utilizarea organismelor vii sau sistemelor biologice pentru a dezvolta produse. În medicină: producția de insulină recombinantă, anticorpi monoclonali, vaccinuri și terapie genică.",
    nanda: null
}, {
    id: "v_b_biotina",
    termES: "Biotina (Vitamina B7/H)",
    termRO: "Biotină (Vitamina B7/H)",
    categoryColor: "bg-yellow-50",
    defES: "Vitamina hidrosoluble esencial para el metabolismo de grasas y carbohidratos. Su deficiencia es rara, pero causa dermatitis, alopecia y problemas neurológicos.",
    defRO: "Vitamină hidrosolubilă esențială pentru metabolismul grăsimilor și carbohidraților. Deficiența sa este rară, dar cauzează dermatită, alopecie și probleme neurologice.",
    nanda: null
}, {
    id: "v_b_bipolar",
    termES: "Bipolar (Trastorno)",
    termRO: "Bipolară (Tulburare)",
    categoryColor: "bg-purple-50",
    defES: "Enfermedad mental grave caracterizada por oscilaciones extremas del estado de ánimo, alternando episodios de manía (euforia, hiperactividad) y depresión mayor. Requiere tratamiento estabilizador (Litio).",
    defRO: "Boală mentală gravă caracterizată prin oscilații extreme ale stării de spirit, alternând episoade de manie (euforie, hiperactivitate) și depresie majoră. Necesită tratament stabilizator (Litiu).",
    nanda: {
        codeES: "00140",
        codeRO: "00140",
        labelES: "Riesgo de violencia autodirigida",
        labelRO: "Risc de violență auto-îndreptată"
    }
}, {
    id: "v_b_bisacodilo",
    termES: "Bisacodilo",
    termRO: "Bisacodil",
    categoryColor: "bg-stone-50",
    defES: "Laxante estimulante de contacto que actúa irritando directamente la mucosa del colon para aumentar el peristaltismo. Usado para el estreñimiento ocasional o preparación intestinal.",
    defRO: "Laxativ stimulant de contact care acționează iritând direct mucoasa colonului pentru a crește peristaltismul. Folosit pentru constipația ocazională sau pregătirea intestinală.",
    nanda: null
}, {
    id: "v_b_bisturi",
    termES: "Bisturí (Escalpelo)",
    termRO: "Bisturiu",
    categoryColor: "bg-stone-50",
    defES: "Instrumento quirúrgico pequeño y muy afilado utilizado para realizar incisiones precisas en los tejidos. Puede ser de hoja fría (acero) o eléctrico (electrobisturí para corte y coagulación).",
    defRO: "Instrument chirurgical mic și foarte ascuțit utilizat pentru a realiza incizii precise în țesuturi. Poate fi cu lamă rece (oțel) sau electric (electrobisturiu pentru tăiere și coagulare).",
    nanda: null
}, {
    id: "v_b_bocio",
    termES: "Bocio",
    termRO: "Gușă",
    categoryColor: "bg-violet-50",
    defES: "Agrandamiento anormal de la glándula tiroides, visible como una hinchazón en la base del cuello. Puede asociarse a hipotiroidismo (déficit de yodo), hipertiroidismo (Graves) o función normal (bocio simple).",
    defRO: "Mărire anormală a glandei tiroide, vizibilă ca o umflătură la baza gâtului. Se poate asocia cu hipotiroidism (deficit de iod), hipertiroidism (Graves) sau funcție normală (gușă simplă).",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_b_bolo",
    termES: "Bolo",
    termRO: "Bol (Bolus)",
    categoryColor: "bg-green-50",
    defES: "1. Bolo alimenticio: Masa de alimento masticado e insalivado listo para ser tragado. 2. Bolo medicamentoso: Administración de una dosis de fármaco o contraste IV en un tiempo muy corto (<1 min).",
    defRO: "1. Bol alimentar: Masă de alimente mestecate și insalivate gata de a fi înghițite. 2. Bolus medicamentos: Administrarea unei doze de medicament sau contrast IV într-un timp foarte scurt (<1 min).",
    nanda: null
}, {
    id: "v_b_bolsa_colostomia",
    termES: "Bolsa de Ostomía",
    termRO: "Pungă de Stomă (Colostomie)",
    categoryColor: "bg-stone-50",
    defES: "Dispositivo recolector adherido a la piel alrededor de un estoma (colostomía, ileostomía, urostomía) para recoger las heces u orina. Requiere cuidados de la piel periestomal.",
    defRO: "Dispozitiv colector aderent la piele în jurul unei stome (colostomie, ileostomie, urostomie) pentru a colecta materiile fecale sau urina. Necesită îngrijirea pielii peristomale.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_b_bomba_infusion",
    termES: "Bomba de Infusión",
    termRO: "Pompă de Infuzie",
    categoryColor: "bg-stone-50",
    defES: "Dispositivo electrónico que regula con alta precisión el flujo y volumen de fluidos, fármacos o nutrientes administrados por vía intravenosa, enteral o epidural.",
    defRO: "Dispozitiv electronic care reglează cu înaltă precizie debitul și volumul fluidelor, medicamentelor sau nutrienților administrați pe cale intravenoasă, enterală sau epidurală.",
    nanda: null
}, {
    id: "v_b_bomba_na_k",
    termES: "Bomba Sodio-Potasio",
    termRO: "Pompă Sodiu-Potasiu",
    categoryColor: "bg-blue-50",
    defES: "Proteína de membrana (ATPasa) que transporta activamente 3 iones de sodio hacia fuera de la célula y 2 de potasio hacia dentro, gastando ATP. Fundamental para mantener el potencial de reposo y volumen celular.",
    defRO: "Proteină membranară (ATPază) care transportă activ 3 ioni de sodiu în afara celulei și 2 de potasiu în interior, consumând ATP. Fundamentală pentru menținerea potențialului de repaus și volumului celular.",
    nanda: null
}, {
    id: "v_b_borborigmo",
    termES: "Borborigmo",
    termRO: "Borborism",
    categoryColor: "bg-yellow-50",
    defES: "Ruido intestinal (gorgoteo) producido por el movimiento de gases y líquidos a través del intestino. Hiperactivos en diarrea o inicio de obstrucción; ausentes en íleo paralítico.",
    defRO: "Zgomot intestinal (gâlgâit) produs de mișcarea gazelor și lichidelor prin intestin. Hiperactivi în diaree sau debutul obstrucției; absenți în ileus paralitic.",
    nanda: null
}, {
    id: "v_b_bordetella",
    termES: "Bordetella pertussis",
    termRO: "Bordetella pertussis",
    categoryColor: "bg-red-50",
    defES: 'Bacteria gramnegativa causante de la tos ferina (pertussis), una infección respiratoria altamente contagiosa caracterizada por accesos de tos violenta y un "gallo" inspiratorio.',
    defRO: 'Bacterie gram-negativă cauzatoare a tusei convulsive (pertussis), o infecție respiratorie extrem de contagioasă caracterizată prin accese de tuse violentă și un "șuierat" inspirator.',
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_b_borramiento",
    termES: "Borramiento (Cervical)",
    termRO: "Ștergere (Cervicală)",
    categoryColor: "bg-pink-50",
    defES: "Proceso de acortamiento y adelgazamiento del cuello uterino durante la primera etapa del parto. Se expresa en porcentaje (0-100%). Precede o acompaña a la dilatación.",
    defRO: "Proces de scurtare și subțiere a colului uterin în timpul primei etape a travaliului. Se exprimă în procente (0-100%). Precede sau însoțește dilatația.",
    nanda: null
}, {
    id: "v_b_botulismo",
    termES: "Botulismo",
    termRO: "Botulism",
    categoryColor: "bg-red-50",
    defES: "Intoxicación grave causada por la neurotoxina de Clostridium botulinum. Provoca parálisis flácida descendente, visión doble, disfagia y fallo respiratorio. Causas: conservas caseras mal esterilizadas, miel en lactantes.",
    defRO: "Intoxicație gravă cauzată de neurotoxina Clostridium botulinum. Provoacă paralizie flască descendentă, vedere dublă, disfagie și insuficiență respiratorie. Cauze: conserve de casă prost sterilizate, miere la sugari.",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_b_boveda",
    termES: "Bóveda",
    termRO: "Boltă",
    categoryColor: "bg-stone-50",
    defES: "Estructura anatómica en forma de arco o cúpula. Bóveda craneal (calota): parte superior del cráneo que protege el cerebro. Bóveda palatina: techo de la boca (paladar).",
    defRO: "Structură anatomică în formă de arc sau cupolă. Bolta craniană (calotă): partea superioară a craniului care protejează creierul. Bolta palatină: tavanul gurii (palat).",
    nanda: null
}, {
    id: "v_b_bowman",
    termES: "Bowman (Cápsula de)",
    termRO: "Bowman (Capsula)",
    categoryColor: "bg-blue-50",
    defES: "Estructura en forma de copa al inicio de la nefrona renal que rodea el glomérulo. Recoge el filtrado glomerular primario y lo dirige hacia el túbulo proximal. Esencial para la función renal.",
    defRO: "Structură în formă de cupă la începutul nefronului renal care înconjoară glomerulul. Colectează filtratul glomerular primar și îl direcționează către tubul proximal. Esențială pentru funcția renală.",
    nanda: null
}, {
    id: "v_b_bradicardia",
    termES: "Bradicardia",
    termRO: "Bradicardie",
    categoryColor: "bg-red-50",
    defES: "Frecuencia cardíaca inferior a la normal (<60 lpm en adultos). Puede ser fisiológica (atletas, sueño) o patológica (bloqueo AV, hipotiroidismo, fármacos). Sintomática si causa síncope o fatiga.",
    defRO: "Frecvență cardiacă inferioară celei normale (<60 bpm la adulți). Poate fi fiziologică (atleți, somn) sau patologică (bloc AV, hipotiroidism, medicamente). Simptomatică dacă provoacă sincopă sau oboseală.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_b_bradipnea",
    termES: "Bradipnea",
    termRO: "Bradipnee",
    categoryColor: "bg-cyan-50",
    defES: "Frecuencia respiratoria anormalmente lenta (<12 rpm en adultos). Causas: depresión del centro respiratorio (opioides, sedantes), hipertensión intracraneal, coma, hipotiroidismo.",
    defRO: "Frecvență respiratorie anormal de lentă (<12 rpm la adulți). Cauze: depresia centrului respirator (opioide, sedative), hipertensiune intracraniană, comă, hipotiroidism.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_b_braquial",
    termES: "Braquial",
    termRO: "Brahial",
    categoryColor: "bg-red-50",
    defES: "Relativo al brazo. Arteria braquial: arteria principal del brazo, usada para medir la presión arterial. Plexo braquial: red nerviosa que inerva el hombro y miembro superior.",
    defRO: "Relativ la braț. Artera brahială: artera principală a brațului, folosită pentru măsurarea tensiunii arteriale. Plexul brahial: rețea nervoasă care inervează umărul și membrul superior.",
    nanda: null
}, {
    id: "v_b_braquiterapia",
    termES: "Braquiterapia",
    termRO: "Brahiterapie",
    categoryColor: "bg-zinc-50",
    defES: "Tipo de radioterapia interna donde se colocan fuentes radiactivas (semillas, cápsulas) directamente dentro o cerca del tumor (ej. próstata, cuello uterino). Permite altas dosis locales con menor daño al tejido sano.",
    defRO: "Tip de radioterapie internă în care surse radioactive (semințe, capsule) sunt plasate direct în interiorul sau în apropierea tumorii (ex. prostată, col uterin). Permite doze locale mari cu daune minime țesutului sănătos.",
    nanda: null
}, {
    id: "v_b_brecha_anionica",
    termES: "Brecha Aniónica (Anion Gap)",
    termRO: "Hiatus Anionic (Anion Gap)",
    categoryColor: "bg-yellow-50",
    defES: "Cálculo de laboratorio ([Na+] - ([Cl-] + [HCO3-])) utilizado para diferenciar las causas de acidosis metabólica. Normal: 8-12 mEq/L. Elevado en cetoacidosis, acidosis láctica o intoxicaciones.",
    defRO: "Calcul de laborator ([Na+] - ([Cl-] + [HCO3-])) utilizat pentru a diferenția cauzele acidozei metabolice. Normal: 8-12 mEq/L. Crescut în cetoacidoză, acidoză lactică sau intoxicații.",
    nanda: null
}, {
    id: "v_b_bromocriptina",
    termES: "Bromocriptina",
    termRO: "Bromocriptină",
    categoryColor: "bg-pink-50",
    defES: "Agonista dopaminérgico utilizado para tratar la hiperprolactinemia (inhibe la prolactina), la enfermedad de Parkinson y para suprimir la lactancia (aunque esto último está restringido por riesgos).",
    defRO: "Agonist dopaminergic utilizat pentru tratarea hiperprolactinemiei (inhibă prolactina), bolii Parkinson și pentru suprimarea alăptării (deși acest lucru este restricționat din cauza riscurilor).",
    nanda: null
}, {
    id: "v_b_broncoaspiracion",
    termES: "Broncoaspiración",
    termRO: "Bronhoaspirație",
    categoryColor: "bg-red-50",
    defES: "Paso accidental de alimentos, líquidos, vómito o saliva a las vías respiratorias. Puede causar neumonía por aspiración (Mendelson), obstrucción y asfixia. Alto riesgo en pacientes con disfagia o bajo nivel de conciencia.",
    defRO: "Trecerea accidentală a alimentelor, lichidelor, vărsăturilor sau salivei în căile respiratorii. Poate cauza pneumonie de aspirație (Mendelson), obstrucție și asfixie. Risc ridicat la pacienții cu disfagie sau nivel scăzut de conștiență.",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_b_broncodilatador",
    termES: "Broncodilatador",
    termRO: "Bronhodilatator",
    categoryColor: "bg-sky-50",
    defES: "Fármaco que relaja la musculatura lisa de los bronquios, aumentando su calibre y facilitando el flujo de aire. Tipos: Beta-agonistas (Salbutamol), Anticolinérgicos (Ipratropio). Esencial en asma y EPOC.",
    defRO: "Medicament care relaxează musculatura netedă a bronhiilor, mărindu-le calibrul și facilitând fluxul de aer. Tipuri: Beta-agoniști (Salbutamol), Anticolinergice (Ipratropiu). Esențial în astm și BPOC.",
    nanda: null
}, {
    id: "v_b_broncoespasmo",
    termES: "Broncoespasmo",
    termRO: "Bronhospasm",
    categoryColor: "bg-orange-50",
    defES: "Contracción repentina e involuntaria del músculo liso bronquial, estrechando la vía aérea. Causa sibilancias, disnea y sensación de opresión torácica. Característico del asma y anafilaxia.",
    defRO: "Contracție bruscă și involuntară a mușchiului neted bronșic, îngustând calea aeriană. Cauzează sibilante, dispnee și senzație de opresiune toracică. Caracteristic astmului și anafilaxiei.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_b_broncoscopia",
    termES: "Broncoscopia",
    termRO: "Bronhoscopie",
    categoryColor: "bg-blue-50",
    defES: "Procedimiento diagnóstico y terapéutico que permite visualizar el interior de la vía aérea (tráquea y bronquios) mediante un tubo flexible (fibrobroncoscopio) o rígido. Usos: biopsia, lavado, extracción de cuerpos extraños.",
    defRO: "Procedură diagnostică și terapeutică care permite vizualizarea interiorului căii aeriene (trahee și bronhii) printr-un tub flexibil (fibrobronhoscop) sau rigid. Utilizări: biopsie, lavaj, extragerea corpilor străini.",
    nanda: null
}, {
    id: "v_b_bronquiectasia",
    termES: "Bronquiectasia",
    termRO: "Bronșiectazie",
    categoryColor: "bg-gray-50",
    defES: "Dilatación crónica e irreversible de los bronquios debida a destrucción de la pared elástica y muscular, generalmente por infecciones repetidas o fibrosis quística. Causa tos crónica con esputo purulento abundante.",
    defRO: "Dilatare cronică și ireversibilă a bronhiilor datorită distrugerii peretelui elastic și muscular, de obicei prin infecții repetate sau fibroză chistică. Cauzează tuse cronică cu spută purulentă abundentă.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_b_bronquiolitis",
    termES: "Bronquiolitis",
    termRO: "Bronșiolită",
    categoryColor: "bg-red-50",
    defES: "Infección viral aguda de las vías respiratorias inferiores (bronquiolos) común en lactantes <2 años, causada principalmente por el VSR (Virus Sincitial Respiratorio). Causa sibilancias, dificultad respiratoria y fiebre.",
    defRO: "Infecție virală acută a căilor respiratorii inferioare (bronșiole) comună la sugari <2 ani, cauzată în principal de VSR (Virusul Sincițial Respirator). Cauzează sibilante, dificultate respiratorie și febră.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_b_bronquitis",
    termES: "Bronquitis",
    termRO: "Bronșită",
    categoryColor: "bg-orange-50",
    defES: "Inflamación de la mucosa bronquial. Aguda: generalmente viral, tos productiva, autolimitada. Crónica: tos productiva >3 meses al año por 2 años, componente de la EPOC (frecuente en fumadores).",
    defRO: "Inflamația mucoasei bronșice. Acută: de obicei virală, tuse productivă, autolimitată. Cronică: tuse productivă >3 luni pe an timp de 2 ani, componentă a BPOC (frecventă la fumători).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_b_brucelosis",
    termES: "Brucelosis (Fiebre de Malta)",
    termRO: "Bruceloză (Febra de Malta)",
    categoryColor: "bg-yellow-50",
    defES: "Zoonosis causada por bacterias del género Brucella, transmitida por contacto con animales infectados o lácteos no pasteurizados. Causa fiebre ondulante, sudoración profusa, dolor articular y astenia.",
    defRO: "Zoonoză cauzată de bacterii din genul Brucella, transmisă prin contact cu animale infectate sau lactate nepasteurizate. Cauzează febră ondulantă, transpirație profuză, dureri articulare și astenie.",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_b_bruxismo",
    termES: "Bruxismo",
    termRO: "Bruxism",
    categoryColor: "bg-stone-50",
    defES: "Hábito involuntario de apretar o rechinar los dientes, generalmente durante el sueño. Asociado a estrés y ansiedad. Causa desgaste dental, dolor mandibular (ATM) y cefaleas.",
    defRO: "Obicei involuntar de a strânge sau scrâșni dinții, de obicei în timpul somnului. Asociat cu stres și anxietate. Cauzează uzură dentară, dureri mandibulare (ATM) și cefalee.",
    nanda: null
}, {
    id: "v_b_bubon",
    termES: "Bubón",
    termRO: "Bubon",
    categoryColor: "bg-red-50",
    defES: "Ganglio linfático inflamado, tumefacto y doloroso, a menudo supurativo, característico de infecciones como la peste bubónica, linfogranuloma venéreo o chancroide.",
    defRO: "Ganglion limfatic inflamat, tumefiat și dureros, adesea supurativ, caracteristic infecțiilor precum ciuma bubonică, limfogranulomul venerian sau șancrul moale.",
    nanda: null
}, {
    id: "v_b_bucal",
    termES: "Bucal",
    termRO: "Bucal",
    categoryColor: "bg-pink-50",
    defES: "Relativo a la boca o cavidad oral. Vía bucal: administración de fármacos en la boca (generalmente para acción local o sublingual). Cavidad bucal: inicio del tracto digestivo.",
    defRO: "Referitor la gură sau cavitatea orală. Cale bucală: administrarea medicamentelor în gură (de obicei pentru acțiune locală sau sublinguală). Cavitate bucală: începutul tractului digestiv.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_b_bulimia",
    termES: "Bulimia Nerviosa",
    termRO: "Bulimie Nervoasă",
    categoryColor: "bg-purple-50",
    defES: "Trastorno de la conducta alimentaria caracterizado por episodios recurrentes de ingesta compulsiva (atracones) seguidos de conductas compensatorias inapropiadas (vómitos provocados, laxantes) para evitar ganar peso.",
    defRO: "Tulburare de comportament alimentar caracterizată prin episoade recurente de ingerare compulsivă (chefuri) urmate de comportamente compensatorii inapropriate (vărsături provocate, laxative) pentru a evita creșterea în greutate.",
    nanda: {
        codeES: "00069",
        codeRO: "00069",
        labelES: "Afrontamiento ineficaz",
        labelRO: "Coping ineficient"
    }
}, {
    id: "v_b_bulla",
    termES: "Bulla (Bula)",
    termRO: "Bulă (Bulla)",
    categoryColor: "bg-sky-50",
    defES: "1. Dermatología: Ampolla grande (>1 cm). 2. Neumología: Espacio aéreo de pared delgada dentro del pulmón (>1 cm) por destrucción de alvéolos (enfisema). Su rotura causa neumotórax.",
    defRO: "1. Dermatologie: Bășică mare (>1 cm). 2. Pneumologie: Spațiu aerian cu perete subțire în interiorul plămânului (>1 cm) prin distrugerea alveolelor (emfizem). Ruptura sa cauzează pneumotorax.",
    nanda: null
}, {
    id: "v_b_bupivacaina",
    termES: "Bupivacaína",
    termRO: "Bupivacaină",
    categoryColor: "bg-zinc-50",
    defES: "Anestésico local tipo amida de larga duración. Muy utilizado en anestesia epidural, espinal y bloqueos nerviosos periféricos. Es cardiotóxica si se inyecta intravascularmente por error.",
    defRO: "Anestezic local tip amidă cu durată lungă. Foarte utilizat în anestezia epidurală, spinală și blocuri nervoase periferice. Este cardiotoxică dacă este injectată intravascular din greșeală.",
    nanda: null
}, {
    id: "v_b_burnout",
    termES: "Burnout (Síndrome de estar quemado)",
    termRO: "Burnout (Sindromul epuizării profesionale)",
    categoryColor: "bg-gray-50",
    defES: "Estado de agotamiento físico, emocional y mental causado por estrés laboral crónico y prolongado. Síntomas: despersonalización, cinismo, baja realización personal y fatiga extrema.",
    defRO: "Stare de epuizare fizică, emoțională și mentală cauzată de stresul profesional cronic și prelungit. Simptome: depersonalizare, cinism, realizare personală scăzută și oboseală extremă.",
    nanda: null
}, {
    id: "v_b_bursitis",
    termES: "Bursitis",
    termRO: "Bursită",
    categoryColor: "bg-orange-50",
    defES: "Inflamación de una bolsa sinovial (bursa), saco lleno de líquido que reduce la fricción entre huesos, tendones y músculos. Común en hombro, codo y rodilla por sobreuso o trauma.",
    defRO: "Inflamația unei burse sinoviale (bursa), sac plin cu lichid care reduce fricțiunea dintre oase, tendoane și mușchi. Comună la umăr, cot și genunchi prin suprasolicitare sau traumă.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_b_bypass",
    termES: "Bypass (Derivación)",
    termRO: "Bypass (Derivație)",
    categoryColor: "bg-teal-50",
    defES: "Técnica quirúrgica para crear una ruta alternativa (atajo) para el flujo de sangre u otros fluidos, sorteando una obstrucción. Ejemplos: Bypass coronario (injerto arteria/vena), Bypass gástrico (obesidad).",
    defRO: "Tehnică chirurgicală pentru a crea o rută alternativă (scurtătură) pentru fluxul de sânge sau alte fluide, ocolind o obstrucție. Exemple: Bypass coronarian (grefă arteră/venă), Bypass gastric (obezitate).",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_c_cabestrillo",
    termES: "Cabestrillo",
    termRO: "Eșarfă (pentru imobilizare)",
    categoryColor: "bg-blue-50",
    defES: "Dispositivo ortopédico, generalmente de tela, utilizado para inmovilizar y sostener un brazo o antebrazo lesionado (fractura, luxación de hombro) contra el pecho, reduciendo el movimiento y el dolor.",
    defRO: "Dispozitiv ortopedic, de obicei din pânză, utilizat pentru a imobiliza și susține un braț sau antebraț rănit (fractură, luxație de umăr) pe piept, reducând mișcarea și durerea.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_c_cabeza",
    termES: "Cabeza",
    termRO: "Cap",
    categoryColor: "bg-slate-50",
    defES: "Parte superior del cuerpo que contiene el cerebro, órganos sensoriales (ojos, oídos, nariz, lengua) y la boca. En anatomía ósea, extremo redondeado de un hueso largo (ej. cabeza del fémur).",
    defRO: "Partea superioară a corpului care conține creierul, organele de simț (ochi, urechi, nas, limbă) și gura. În anatomia osoasă, capătul rotunjit al unui os lung (ex. capul femurului).",
    nanda: null
}, {
    id: "v_c_cadaver",
    termES: "Cadáver",
    termRO: "Cadavru",
    categoryColor: "bg-gray-50",
    defES: "Cuerpo humano muerto. Legalmente, requiere certificación de defunción. En medicina, se utiliza para estudios anatómicos (disección) o donación de órganos (cadáver con muerte encefálica).",
    defRO: "Corp uman mort. Legal, necesită certificat de deces. În medicină, este utilizat pentru studii anatomice (disecție) sau donare de organe (cadavru cu moarte cerebrală).",
    nanda: null
}, {
    id: "v_c_cadera",
    termES: "Cadera",
    termRO: "Șold",
    categoryColor: "bg-stone-50",
    defES: "Región anatómica lateral de la pelvis y articulación coxofemoral (unión de la cabeza del fémur con el acetábulo). Soporta el peso del cuerpo y permite la movilidad de la pierna. Sitio frecuente de fractura en ancianos.",
    defRO: "Regiune anatomică laterală a pelvisului și articulația coxofemurală (unirea capului femurului cu acetabulul). Susține greutatea corpului și permite mobilitatea piciorului. Loc frecvent de fractură la vârstnici.",
    nanda: {
        codeES: "00306",
        codeRO: "00306",
        labelES: "Riesgo de caídas del adulto",
        labelRO: "Risc de cădere la adult"
    }
}, {
    id: "v_c_cadena_frio",
    termES: "Cadena de Frío",
    termRO: "Lanț Frigorific (Lanț de Frig)",
    categoryColor: "bg-cyan-50",
    defES: "Sistema logístico que garantiza que vacunas, sangre, órganos y ciertos fármacos (insulina) se mantengan a un rango de temperatura específico (generalmente 2-8°C) desde su fabricación hasta su administración.",
    defRO: "Sistem logistic care garantează că vaccinurile, sângele, organele și anumite medicamente (insulină) sunt menținute într-un interval de temperatură specific (de obicei 2-8°C) de la fabricație până la administrare.",
    nanda: null
}, {
    id: "v_c_cafeina",
    termES: "Cafeína",
    termRO: "Cafeină",
    categoryColor: "bg-amber-50",
    defES: "Alcaloide estimulante del sistema nervioso central presente en café, té y bebidas energéticas. Aumenta la alerta, taquicardia y diuresis. Usada terapéuticamente en la apnea neonatal y para potenciar analgésicos.",
    defRO: "Alcaloid stimulant al sistemului nervos central prezent în cafea, ceai și băuturi energizante. Crește starea de alertă, tahicardia și diureza. Folosită terapeutic în apneea neonatală și pentru potențarea analgezicelor.",
    nanda: {
        codeES: "00198",
        codeRO: "00198",
        labelES: "Trastorno del patrón del sueño",
        labelRO: "Model de somn perturbat"
    }
}, {
    id: "v_c_caida",
    termES: "Caída",
    termRO: "Cădere",
    categoryColor: "bg-orange-50",
    defES: "Descenso involuntario al suelo. Principal causa de lesiones accidentales y muerte en ancianos. Factores de riesgo: debilidad muscular, alteraciones de la marcha, medicación sedante, entorno inseguro (alfombras).",
    defRO: "Coborâre involuntară la sol. Principala cauză de leziuni accidentale și deces la vârstnici. Factori de risc: slăbiciune musculară, tulburări de mers, medicamente sedative, mediu nesigur (covoare).",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_c_calambre",
    termES: "Calambre",
    termRO: "Crampă Musculară",
    categoryColor: "bg-red-50",
    defES: "Contracción muscular involuntaria, súbita, intensa y dolorosa. Causas: fatiga muscular, deshidratación, desequilibrio electrolítico (hipopotasemia, hipomagnesemia, hipocalcemia) o mala circulación.",
    defRO: "Contracție musculară involuntară, bruscă, intensă și dureroasă. Cauze: oboseală musculară, deshidratare, dezechilibru electrolitic (hipokaliemie, hipomagneziemie, hipocalcemie) sau circulație deficitară.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_c_calcaneo",
    termES: "Calcáneo",
    termRO: "Calcaneu",
    categoryColor: "bg-stone-50",
    defES: "Hueso más grande del tarso que forma el talón del pie. Soporta gran parte del peso corporal y es punto de inserción del tendón de Aquiles. Las fracturas de calcáneo suelen ser por caídas de altura.",
    defRO: "Cel mai mare os al tarsului care formează călcâiul piciorului. Susține o mare parte din greutatea corporală și este punctul de inserție al tendonului lui Ahile. Fracturile de calcaneu sunt de obicei cauzate de căderi de la înălțime.",
    nanda: null
}, {
    id: "v_c_calcificacion",
    termES: "Calcificación",
    termRO: "Calcifiere",
    categoryColor: "bg-gray-50",
    defES: "Depósito anormal de sales de calcio en tejidos blandos. Puede ser distrófica (en tejido dañado/necrótico) o metastásica (por hipercalcemia en tejidos sanos). Visible en radiografías.",
    defRO: "Depunere anormală de săruri de calciu în țesuturile moi. Poate fi distrofică (în țesut deteriorat/necrotic) sau metastatică (prin hipercalcemie în țesuturi sănătoase). Vizibilă pe radiografii.",
    nanda: null
}, {
    id: "v_c_calcio",
    termES: "Calcio (Ca)",
    termRO: "Calciu (Ca)",
    categoryColor: "bg-yellow-50",
    defES: "Mineral más abundante del cuerpo, esencial para la formación de huesos y dientes, coagulación sanguínea, transmisión nerviosa y contracción muscular. Niveles normales en sangre: 8.5-10.5 mg/dL.",
    defRO: "Cel mai abundent mineral din corp, esențial pentru formarea oaselor și dinților, coagularea sângelui, transmisia nervoasă și contracția musculară. Niveluri normale în sânge: 8.5-10.5 mg/dL.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_c_calculo",
    termES: "Cálculo (Litiasis)",
    termRO: "Calcul (Litiază)",
    categoryColor: "bg-stone-50",
    defES: "Formación sólida (piedra) compuesta por sales minerales que se forma en órganos huecos o conductos. Renal (nefrolitiasis), Biliar (colelitiasis), Salival (sialolitiasis). Causa obstrucción y dolor cólico.",
    defRO: "Formațiune solidă (piatră) compusă din săruri minerale care se formează în organe goale sau conducte. Renal (nefrolitiază), Biliar (colelitiază), Salivar (sialolitiază). Cauzează obstrucție și durere colicativă.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_c_calostro",
    termES: "Calostro",
    termRO: "Colostru",
    categoryColor: "bg-yellow-50",
    defES: "Primera leche secretada por las glándulas mamarias al final del embarazo y primeros días postparto. Es densa, amarillenta, rica en proteínas y anticuerpos (IgA), fundamental para la inmunidad del recién nacido.",
    defRO: "Primul lapte secretat de glandele mamare la sfârșitul sarcinii și în primele zile post-partum. Este dens, gălbui, bogat în proteine și anticorpi (IgA), fundamental pentru imunitatea nou-născutului.",
    nanda: {
        codeES: "00104",
        codeRO: "00104",
        labelES: "Lactancia materna ineficaz",
        labelRO: "Alăptare ineficientă"
    }
}, {
    id: "v_c_calor",
    termES: "Calor",
    termRO: "Căldură",
    categoryColor: "bg-orange-50",
    defES: "Energía térmica. En medicina, signo cardinal de inflamación (junto a rubor, tumor, dolor). Terapia con calor (termoterapia) se usa para relajación muscular y vasodilatación.",
    defRO: "Energie termică. În medicină, semn cardinal al inflamației (alături de rubor, tumor, dolor). Terapia cu căldură (termoterapia) se folosește pentru relaxare musculară și vasodilatație.",
    nanda: null
}, {
    id: "v_c_cama",
    termES: "Cama Hospitalaria",
    termRO: "Pat de Spital",
    categoryColor: "bg-blue-50",
    defES: "Mobiliario clínico articulado que permite adoptar diferentes posiciones (Fowler, Trendelenburg) para facilitar el tratamiento, confort y seguridad del paciente. Incluye barandillas y frenos.",
    defRO: "Mobilier clinic articulat care permite adoptarea diferitelor poziții (Fowler, Trendelenburg) pentru a facilita tratamentul, confortul și siguranța pacientului. Include bare laterale și frâne.",
    nanda: null
}, {
    id: "v_c_candida",
    termES: "Cándida",
    termRO: "Candida",
    categoryColor: "bg-pink-50",
    defES: "Género de levaduras (hongos). Candida albicans es comensal habitual, pero puede volverse patógena oportunista (candidiasis) en inmunodepresión o tras uso de antibióticos.",
    defRO: "Gen de drojdii (ciuperci). Candida albicans este comensal obișnuit, dar poate deveni patogen oportunist (candidoză) în imunodepresie sau după utilizarea antibioticelor.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_c_candidiasis",
    termES: "Candidiasis",
    termRO: "Candidoză",
    categoryColor: "bg-red-50",
    defES: "Infección causada por Cándida. Oral (muguet): placas blancas. Vaginal: flujo espeso y prurito. Sistémica: infección grave en sangre (candidemia) en pacientes críticos.",
    defRO: "Infecție cauzată de Candida. Orală (muguet): plăci albe. Vaginală: secreție groasă și prurit. Sistemică: infecție gravă în sânge (candidemie) la pacienții critici.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_c_canula",
    termES: "Cánula",
    termRO: "Canulă",
    categoryColor: "bg-teal-50",
    defES: "Tubo flexible o rígido que se introduce en el cuerpo para administrar gases/fluidos o mantener una vía permeable. Ej. Cánula nasal (oxígeno), Cánula de Guedel (vía aérea orofaríngea), Cánula de traqueostomía.",
    defRO: "Tub flexibil sau rigid introdus în corp pentru a administra gaze/fluide sau a menține o cale permeabilă. Ex. Canulă nazală (oxigen), Canulă Guedel (cale aeriană orofaringiană), Canulă de traheostomie.",
    nanda: null
}, {
    id: "v_c_capacidad_vital",
    termES: "Capacidad Vital (CV)",
    termRO: "Capacitate Vitală (CV)",
    categoryColor: "bg-sky-50",
    defES: "Volumen máximo de aire que puede ser exhalado tras una inspiración máxima. Es un parámetro clave en espirometría para evaluar la función pulmonar (restrictiva vs obstructiva).",
    defRO: "Volumul maxim de aer care poate fi expirat după o inspirație maximă. Este un parametru cheie în spirometrie pentru evaluarea funcției pulmonare (restrictivă vs obstructivă).",
    nanda: null
}, {
    id: "v_c_capilar",
    termES: "Capilar",
    termRO: "Capilar",
    categoryColor: "bg-red-50",
    defES: "Vaso sanguíneo microscópico que conecta arteriolas y vénulas. Su pared fina permite el intercambio de oxígeno, nutrientes y desechos entre la sangre y los tejidos.",
    defRO: "Vas de sânge microscopic care conectează arteriolele și venulele. Peretele său subțire permite schimbul de oxigen, nutrienți și deșeuri între sânge și țesuturi.",
    nanda: null
}, {
    id: "v_c_capsula",
    termES: "Cápsula",
    termRO: "Capsulă",
    categoryColor: "bg-green-50",
    defES: "1. Farmacia: Forma farmacéutica sólida que contiene el fármaco dentro de una cubierta gelatinosa. 2. Anatomía: Envoltura fibrosa de órganos (renal, articular). 3. Microbio: Capa protectora de bacterias.",
    defRO: "1. Farmacie: Formă farmaceutică solidă care conține medicamentul într-un înveliș gelatinos. 2. Anatomie: Înveliș fibros al organelor (renal, articular). 3. Microb: Strat protector al bacteriilor.",
    nanda: null
}, {
    id: "v_c_carbon_activado",
    termES: "Carbón Activado",
    termRO: "Cărbune Activat",
    categoryColor: "bg-stone-50",
    defES: "Polvo negro fino con gran capacidad de adsorción. Se usa en urgencias para tratar intoxicaciones orales agudas, ya que atrapa toxinas en el intestino impidiendo su absorción.",
    defRO: "Pulbere neagră fină cu mare capacitate de adsorbție. Se folosește în urgențe pentru tratarea intoxicațiilor orale acute, deoarece captează toxinele în intestin prevenind absorbția lor.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_c_carbohidrato",
    termES: "Carbohidrato (Hidrato de Carbono)",
    termRO: "Carbohidrat (Glucid)",
    categoryColor: "bg-yellow-50",
    defES: "Biomolécula principal fuente de energía rápida para el cuerpo. Simples (azúcares) o complejos (almidón, fibra). 1 gramo aporta 4 kcal. Esencial para el cerebro (glucosa).",
    defRO: "Biomoleculă principală sursă de energie rapidă pentru corp. Simpli (zaharuri) sau complecși (amidon, fibre). 1 gram oferă 4 kcal. Esențial pentru creier (glucoză).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_c_carcinoma",
    termES: "Carcinoma",
    termRO: "Carcinom",
    categoryColor: "bg-stone-50",
    defES: "Cáncer maligno que se origina en las células epiteliales (piel o revestimiento de órganos). Representa el 80-90% de todos los cánceres. Ej. Carcinoma basocelular, Adenocarcinoma.",
    defRO: "Cancer malign care provine din celulele epiteliale (piele sau căptușeala organelor). Reprezintă 80-90% din toate cancerele. Ex. Carcinom bazocelular, Adenocarcinom.",
    nanda: null
}, {
    id: "v_c_cardias",
    termES: "Cardias",
    termRO: "Cardia",
    categoryColor: "bg-rose-50",
    defES: "Orificio superior del estómago que lo comunica con el esófago. Contiene el esfínter esofágico inferior, que previene el reflujo gastroesofágico.",
    defRO: "Orificiul superior al stomacului care îl comunică cu esofagul. Conține sfincterul esofagian inferior, care previne refluxul gastroesofagian.",
    nanda: null
}, {
    id: "v_c_cardiaco",
    termES: "Cardíaco",
    termRO: "Cardiac",
    categoryColor: "bg-red-50",
    defES: "Perteneciente o relativo al corazón. Ciclo cardíaco: secuencia de eventos (sístole/diástole) en un latido. Gasto cardíaco: volumen de sangre bombeado por minuto.",
    defRO: "Aparținând sau referitor la inimă. Ciclu cardiac: secvența de evenimente (sistolă/diastolă) într-o bătaie. Debit cardiac: volumul de sânge pompat pe minut.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_c_cardiologia",
    termES: "Cardiología",
    termRO: "Cardiologie",
    categoryColor: "bg-red-50",
    defES: "Especialidad médica dedicada al estudio, diagnóstico y tratamiento de las enfermedades del corazón y del sistema circulatorio.",
    defRO: "Specialitate medicală dedicată studiului, diagnosticului și tratamentului bolilor inimii și ale sistemului circulator.",
    nanda: null
}, {
    id: "v_c_cardiomegalia",
    termES: "Cardiomegalia",
    termRO: "Cardiomegalie",
    categoryColor: "bg-red-50",
    defES: "Agrandamiento anormal del corazón visible en radiografía de tórax (índice cardiotorácico > 0.5). Signo de insuficiencia cardíaca, valvulopatía o hipertensión crónica.",
    defRO: "Mărire anormală a inimii vizibilă pe radiografia toracică (indice cardiotoracic > 0.5). Semn de insuficiență cardiacă, valvulopatie sau hipertensiune cronică.",
    nanda: null
}, {
    id: "v_c_cardiopatia",
    termES: "Cardiopatía",
    termRO: "Cardiopatie",
    categoryColor: "bg-red-50",
    defES: "Término general para cualquier enfermedad del corazón. Isquémica (infarto, angina), Congénita, Valvular, Hipertensiva.",
    defRO: "Termen general pentru orice boală a inimii. Ischemică (infarct, angină), Congenitală, Valvulară, Hipertensivă.",
    nanda: null
}, {
    id: "v_c_cardioversion",
    termES: "Cardioversión",
    termRO: "Cardioversie",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento médico para restaurar el ritmo cardíaco normal (sinusal) en pacientes con arritmias (fibrilación auricular) mediante descarga eléctrica sincronizada o fármacos.",
    defRO: "Procedură medicală pentru restabilirea ritmului cardiac normal (sinusal) la pacienții cu aritmii (fibrilație atrială) prin șoc electric sincronizat sau medicamente.",
    nanda: null
}, {
    id: "v_c_carga_viral",
    termES: "Carga Viral",
    termRO: "Încărcătură Virală",
    categoryColor: "bg-stone-50",
    defES: "Cantidad de virus presente en un fluido corporal (ej. sangre en VIH, Hepatitis C). Se usa para monitorizar la gravedad de la infección y la respuesta al tratamiento antiviral.",
    defRO: "Cantitatea de virus prezentă într-un fluid corporal (ex. sânge în HIV, Hepatita C). Se folosește pentru monitorizarea gravității infecției și a răspunsului la tratamentul antiviral.",
    nanda: null
}, {
    id: "v_c_caries",
    termES: "Caries Dental",
    termRO: "Cărie Dentară",
    categoryColor: "bg-yellow-50",
    defES: "Destrucción progresiva del esmalte y dentina del diente por ácidos producidos por bacterias de la placa (Streptococcus mutans) al metabolizar azúcares. Causa dolor e infección.",
    defRO: "Distrugerea progresivă a smalțului și dentinei dintelui prin acizi produși de bacteriile plăcii (Streptococcus mutans) la metabolizarea zaharurilor. Cauzează durere și infecție.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_c_carina",
    termES: "Carina Traqueal",
    termRO: "Carina Traheală",
    categoryColor: "bg-sky-50",
    defES: "Cresta cartilaginosa en la base de la tráquea que separa la entrada de los dos bronquios principales. Es muy sensible y desencadena el reflejo de la tos si se toca (ej. al aspirar).",
    defRO: "Creastă cartilaginoasă la baza traheei care separă intrarea în cele două bronhii principale. Este foarte sensibilă și declanșează reflexul de tuse dacă este atinsă (ex. la aspirare).",
    nanda: null
}, {
    id: "v_c_carotida",
    termES: "Carótida",
    termRO: "Carotidă",
    categoryColor: "bg-red-50",
    defES: "Arteria principal del cuello que suministra sangre al cerebro, cara y cuello. Punto habitual para palpar el pulso en emergencias (pulso carotídeo). Su estenosis causa ictus.",
    defRO: "Artera principală a gâtului care furnizează sânge creierului, feței și gâtului. Punct obișnuit pentru palparea pulsului în urgențe (puls carotidian). Stenoza sa cauzează AVC.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_c_carpo",
    termES: "Carpo",
    termRO: "Carp",
    categoryColor: "bg-stone-50",
    defES: "Conjunto de 8 huesos pequeños de la muñeca dispuestos en dos filas. Conecta el radio y cúbito con los metacarpianos. El síndrome del túnel carpiano es la compresión del nervio mediano a este nivel.",
    defRO: "Ansamblu de 8 oase mici ale încheieturii mâinii dispuse în două rânduri. Conectează radiusul și ulna cu metacarpienele. Sindromul de tunel carpian este compresia nervului median la acest nivel.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_c_carro_paradas",
    termES: "Carro de Paradas (Carro Rojo)",
    termRO: "Cărucior de Resuscitare",
    categoryColor: "bg-red-50",
    defES: "Unidad móvil que contiene el equipo (desfibrilador, ambu, laringoscopio) y fármacos necesarios para realizar maniobras de soporte vital avanzado y resucitación cardiopulmonar.",
    defRO: "Unitate mobilă care conține echipamentul (defibrilator, ambu, laringoscop) și medicamentele necesare pentru efectuarea manevrelor de suport vital avansat și resuscitare cardiopulmonară.",
    nanda: null
}, {
    id: "v_c_cartilago",
    termES: "Cartílago",
    termRO: "Cartilaj",
    categoryColor: "bg-stone-50",
    defES: "Tejido conectivo flexible y resistente, avascular. Cubre las superficies articulares (hialino) reduciendo la fricción, y forma estructuras como oreja, nariz y discos intervertebrales.",
    defRO: "Țesut conjunctiv flexibil și rezistent, avascular. Acoperă suprafețele articulare (hialin) reducând fricțiunea, și formează structuri precum urechea, nasul și discurile intervertebrale.",
    nanda: null
}, {
    id: "v_c_caspa",
    termES: "Caspa",
    termRO: "Mătreață",
    categoryColor: "bg-stone-50",
    defES: 'Descamación excesiva del cuero cabelludo, a menudo asociada a dermatitis seborreica y al hongo Malassezia. Causa prurito y "escamas" blancas visibles.',
    defRO: 'Descuamare excesivă a scalpului, adesea asociată cu dermatita seboreică și ciuperca Malassezia. Cauzează prurit și "solzi" albi vizibili.',
    nanda: null
}, {
    id: "v_c_catabolismo",
    termES: "Catabolismo",
    termRO: "Catabolism",
    categoryColor: "bg-orange-50",
    defES: "Fase destructiva del metabolismo. Descomposición de moléculas complejas en simples para liberar energía. Aumenta en estrés, fiebre, trauma y cáncer (caquexia).",
    defRO: "Faza distructivă a metabolismului. Descompunerea moleculelor complexe în simple pentru a elibera energie. Crește în stres, febră, traumă și cancer (cașexie).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_c_catarata",
    termES: "Catarata",
    termRO: "Cataractă",
    categoryColor: "bg-blue-50",
    defES: "Opacidad del cristalino del ojo que causa pérdida progresiva e indolora de la visión (borrosa, deslumbramiento). Tratamiento: cirugía de facoemulsificación con lente intraocular.",
    defRO: "Opacifierea cristalinului ochiului care cauzează pierderea progresivă și nedureroasă a vederii (încețoșată, orbire la lumină). Tratament: chirurgie de facoemulsificare cu lentilă intraoculară.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_c_cateter",
    termES: "Catéter",
    termRO: "Cateter",
    categoryColor: "bg-teal-50",
    defES: "Tubo delgado y flexible insertado en una cavidad corporal, conducto o vaso. Venoso (periférico/central) para fluidos; Urinario (Foley) para drenar orina; Cardiaco para diagnóstico.",
    defRO: "Tub subțire și flexibil introdus într-o cavitate corporală, conduct sau vas. Venos (periferic/central) pentru fluide; Urinar (Foley) pentru drenarea urinei; Cardiac pentru diagnostic.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_c_cateterismo_cardiaco",
    termES: "Cateterismo Cardíaco",
    termRO: "Cateterism Cardiac",
    categoryColor: "bg-red-50",
    defES: "Procedimiento invasivo donde se introduce un catéter por una arteria (radial/femoral) hasta el corazón para visualizar coronarias (angiografía), medir presiones o realizar angioplastia.",
    defRO: "Procedură invazivă în care se introduce un cateter printr-o arteră (radială/femurală) până la inimă pentru a vizualiza coronarele (angiografie), a măsura presiuni sau a efectua angioplastie.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_c_cauterizacion",
    termES: "Cauterización",
    termRO: "Cauterizare",
    categoryColor: "bg-orange-50",
    defES: "Destrucción de tejido mediante calor (electrocauterio) o sustancias químicas (nitrato de plata). Se usa para hemostasia (detener sangrado) o eliminar lesiones cutáneas (verrugas).",
    defRO: "Distrugerea țesutului prin căldură (electrocauter) sau substanțe chimice (nitrat de argint). Se folosește pentru hemostază (oprirea sângerării) sau eliminarea leziunilor cutanate (negi).",
    nanda: null
}, {
    id: "v_c_cava",
    termES: "Vena Cava",
    termRO: "Vena Cavă",
    categoryColor: "bg-blue-50",
    defES: "Las dos venas más grandes del cuerpo que retornan sangre desoxigenada al atrio derecho. Cava Superior (cabeza, brazos), Cava Inferior (abdomen, piernas).",
    defRO: "Cele două vene cele mai mari ale corpului care returnează sânge dezoxigenat în atriul drept. Cava Superioară (cap, brațe), Cava Inferioară (abdomen, picioare).",
    nanda: null
}, {
    id: "v_c_cefalea",
    termES: "Cefalea",
    termRO: "Cefalee (Durere de cap)",
    categoryColor: "bg-purple-50",
    defES: "Dolor en cualquier parte de la cabeza. Primarias: Tensional (la más común), Migraña, En racimos. Secundarias: por otra patología (HTA, tumor, meningitis).",
    defRO: "Durere în orice parte a capului. Primare: Tensională (cea mai frecventă), Migrenă, Cluster. Secundare: din altă patologie (HTA, tumoare, meningită).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_c_ceguera",
    termES: "Ceguera",
    termRO: "Orbire (Cecitate)",
    categoryColor: "bg-stone-50",
    defES: "Pérdida total o severa de la visión. Legal: agudeza visual < 0.1 en el mejor ojo. Causas: catarata, glaucoma, retinopatía diabética, degeneración macular.",
    defRO: "Pierderea totală sau severă a vederii. Legală: acuitate vizuală < 0.1 la ochiul cel mai bun. Cauze: cataractă, glaucom, retinopatie diabetică, degenerescență maculară.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_c_celiaca",
    termES: "Celíaca (Enfermedad)",
    termRO: "Celiacă (Boala)",
    categoryColor: "bg-yellow-50",
    defES: "Enteropatía autoinmune crónica inducida por la ingesta de gluten en personas genéticamente predispuestas. Causa atrofia de las vellosidades intestinales y malabsorción. Tratamiento: dieta sin gluten estricta.",
    defRO: "Enteropatie autoimună cronică indusă de ingestia de gluten la persoanele predispuse genetic. Cauzează atrofia vilozităților intestinale și malabsorbție. Tratament: dietă strictă fără gluten.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_c_celula",
    termES: "Célula",
    termRO: "Celulă",
    categoryColor: "bg-green-50",
    defES: "Unidad estructural y funcional básica de los organismos vivos. Eucariota (con núcleo, humana) o Procariota (sin núcleo, bacteria). Contiene membrana, citoplasma y organelos.",
    defRO: "Unitatea structurală și funcțională de bază a organismelor vii. Eucariotă (cu nucleu, umană) sau Procariotă (fără nucleu, bacterie). Conține membrană, citoplasmă și organite.",
    nanda: null
}, {
    id: "v_c_celulitis",
    termES: "Celulitis",
    termRO: "Celulită (Infecțioasă)",
    categoryColor: "bg-red-50",
    defES: "Infección bacteriana aguda de la piel y tejido subcutáneo (Staphylococcus, Streptococcus). Se presenta con eritema, edema, calor y dolor difuso. Requiere antibióticos.",
    defRO: "Infecție bacteriană acută a pielii și țesutului subcutanat (Staphylococcus, Streptococcus). Se prezintă cu eritem, edem, căldură și durere difuză. Necesită antibiotice.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_c_cerebelo",
    termES: "Cerebelo",
    termRO: "Cerebel",
    categoryColor: "bg-indigo-50",
    defES: "Parte del encéfalo situada posterior al tronco cerebral. Coordina el movimiento voluntario, el equilibrio, la postura y el tono muscular. Su lesión causa ataxia.",
    defRO: "Parte a encefalului situată posterior trunchiului cerebral. Coordonează mișcarea voluntară, echilibrul, postura și tonusul muscular. Leziunea sa cauzează ataxie.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_c_cerebro",
    termES: "Cerebro",
    termRO: "Creier",
    categoryColor: "bg-indigo-50",
    defES: "Parte principal del encéfalo, dividida en dos hemisferios. Responsable de funciones superiores: pensamiento, memoria, lenguaje, conciencia y control motor voluntario.",
    defRO: "Partea principală a encefalului, împărțită în două emisfere. Responsabilă de funcții superioare: gândire, memorie, limbaj, conștiință și control motor voluntar.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_c_cerumen",
    termES: "Cerumen",
    termRO: "Cerumen (Ceară de urechi)",
    categoryColor: "bg-amber-50",
    defES: "Sustancia cerosa amarillenta secretada en el conducto auditivo externo. Protege, lubrica y limpia el oído. Su acumulación forma tapones que causan hipoacusia.",
    defRO: "Substanță ceroasă gălbuie secretată în conductul auditiv extern. Protejează, lubrifiază și curăță urechea. Acumularea sa formează dopuri care cauzează hipoacuzie.",
    nanda: null
}, {
    id: "v_c_cervical",
    termES: "Cervical",
    termRO: "Cervical",
    categoryColor: "bg-stone-50",
    defES: "1. Relativo al cuello (columna cervical, 7 vértebras). 2. Relativo al cuello uterino (cérvix).",
    defRO: "1. Referitor la gât (coloana cervicală, 7 vertebre). 2. Referitor la colul uterin (cervix).",
    nanda: null
}, {
    id: "v_c_cesarea",
    termES: "Cesárea",
    termRO: "Cezariană",
    categoryColor: "bg-pink-50",
    defES: "Intervención quirúrgica para extraer el feto mediante incisión en la pared abdominal (laparotomía) y útero (histerotomía). Indicada en distocias, sufrimiento fetal o placenta previa.",
    defRO: "Intervenție chirurgicală pentru extragerea fătului prin incizie în peretele abdominal (laparotomie) și uter (histerotomie). Indicată în distocii, suferință fetală sau placenta praevia.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_c_cetoacidosis",
    termES: "Cetoacidosis Diabética (CAD)",
    termRO: "Cetoacidoză Diabetică",
    categoryColor: "bg-orange-50",
    defES: "Complicación aguda grave de la diabetes (tipo 1). Déficit de insulina lleva a hiperglucemia, deshidratación y producción de cuerpos cetónicos (acidosis). Aliento frutal, Kussmaul.",
    defRO: "Complicație acută gravă a diabetului (tip 1). Deficitul de insulină duce la hiperglicemie, deshidratare și producția de corpi cetonici (acidoză). Halenă fructată, Kussmaul.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_c_cianosis",
    termES: "Cianosis",
    termRO: "Cianoză",
    categoryColor: "bg-blue-50",
    defES: "Coloración azulada de la piel y mucosas debida a una concentración elevada de hemoglobina desoxigenada (>5 g/dL) en sangre. Signo de hipoxia tisular. Central (labios) o Periférica (dedos).",
    defRO: "Colorație albăstruie a pielii și mucoaselor datorată unei concentrații crescute de hemoglobină dezoxigenată (>5 g/dL) în sânge. Semn de hipoxie tisulară. Centrală (buze) sau Periferică (degete).",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_c_ciatica",
    termES: "Ciática",
    termRO: "Sciatică",
    categoryColor: "bg-purple-50",
    defES: "Dolor que irradia a lo largo del trayecto del nervio ciático (desde la zona lumbar, glúteo, hasta la pierna). Causada comúnmente por hernia discal lumbar que comprime la raíz nerviosa.",
    defRO: "Durere care iradiază de-a lungul traiectului nervului sciatic (din zona lombară, fesieră, până la picior). Cauzată frecvent de hernie de disc lombară care comprimă rădăcina nervoasă.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_c_cicatriz",
    termES: "Cicatriz",
    termRO: "Cicatrice",
    categoryColor: "bg-stone-50",
    defES: "Tejido fibroso avascular que reemplaza la piel normal tras una herida profunda. Puede ser normal, atrófica, hipertrófica o queloide (excesiva).",
    defRO: "Țesut fibros avascular care înlocuiește pielea normală după o rană profundă. Poate fi normală, atrofică, hipertrofică sau cheloidă (excesivă).",
    nanda: null
}, {
    id: "v_c_ciclo_menstrual",
    termES: "Ciclo Menstrual",
    termRO: "Ciclu Menstrual",
    categoryColor: "bg-pink-50",
    defES: "Serie de cambios hormonales y fisiológicos mensuales (aprox. 28 días) en el sistema reproductor femenino para preparar el embarazo. Incluye fases folicular, ovulación y lútea.",
    defRO: "Serie de schimbări hormonale și fiziologice lunare (aprox. 28 de zile) în sistemul reproducător feminin pentru a pregăti sarcina. Include fazele foliculară, ovulație și luteală.",
    nanda: null
}, {
    id: "v_c_cifosis",
    termES: "Cifosis",
    termRO: "Cifoză",
    categoryColor: "bg-stone-50",
    defES: 'Curvatura convexa exagerada de la columna torácica ("joroba"). Común en osteoporosis senil o Scheuermann. Puede comprometer la función respiratoria si es severa.',
    defRO: 'Curbură convexă exagerată a coloanei toracice ("cocoașă"). Comună în osteoporoza senilă sau Scheuermann. Poate compromite funcția respiratorie dacă este severă.',
    nanda: null
}, {
    id: "v_c_cigoto",
    termES: "Cigoto",
    termRO: "Zigot",
    categoryColor: "bg-green-50",
    defES: "Célula diploide resultante de la unión del óvulo y el espermatozoide (fecundación). Es la primera etapa del desarrollo embrionario.",
    defRO: "Celulă diploidă rezultată din unirea ovulului cu spermatozoidul (fecundare). Este prima etapă a dezvoltării embrionare.",
    nanda: null
}, {
    id: "v_c_cineangiografia",
    termES: "Cineangiografía",
    termRO: "Cineangiografie",
    categoryColor: "bg-stone-50",
    defES: "Registro en película de imágenes radiográficas de los vasos sanguíneos en movimiento tras inyectar contraste. Fundamental en cateterismo cardíaco.",
    defRO: "Înregistrare pe film a imaginilor radiografice ale vaselor de sânge în mișcare după injectarea contrastului. Fundamentală în cateterismul cardiac.",
    nanda: null
}, {
    id: "v_c_circulacion",
    termES: "Circulación",
    termRO: "Circulație",
    categoryColor: "bg-red-50",
    defES: "Movimiento continuo de la sangre por el sistema vascular impulsado por el corazón. Mayor (Sistémica): cuerpo. Menor (Pulmonar): pulmones. Colateral: rutas alternativas.",
    defRO: "Mișcare continuă a sângelui prin sistemul vascular propulsat de inimă. Mare (Sistemică): corp. Mică (Pulmonară): plămâni. Colaterală: rute alternative.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_c_circuncision",
    termES: "Circuncisión",
    termRO: "Circumcizie",
    categoryColor: "bg-teal-50",
    defES: "Extirpación quirúrgica del prepucio del pene. Indicada por fimosis, parafimosis o motivos religiosos/culturales. Reduce el riesgo de infecciones urinarias e ITS.",
    defRO: "Extirparea chirurgicală a prepuțului penisului. Indicată pentru fimoză, parafimoză sau motive religioase/culturale. Reduce riscul de infecții urinare și ITS.",
    nanda: null
}, {
    id: "v_c_cirrosis",
    termES: "Cirrosis",
    termRO: "Ciroză",
    categoryColor: "bg-orange-50",
    defES: "Enfermedad hepática crónica terminal. Sustitución del tejido hepático normal por fibrosis y nódulos de regeneración, causando insuficiencia hepática e hipertensión portal. Irreversible.",
    defRO: "Boală hepatică cronică terminală. Înlocuirea țesutului hepatic normal prin fibroză și noduli de regenerare, cauzând insuficiență hepatică și hipertensiune portală. Ireversibilă.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_c_citologia",
    termES: "Citología",
    termRO: "Citologie",
    categoryColor: "bg-pink-50",
    defES: "Estudio microscópico de las células. La citología cervicovaginal (Papanicolau) es el cribado estándar para cáncer de cérvix.",
    defRO: "Studiu microscopic al celulelor. Citologia cervico-vaginală (Papanicolau) este screening-ul standard pentru cancerul de col uterin.",
    nanda: null
}, {
    id: "v_c_citostatico",
    termES: "Citostático",
    termRO: "Citostatic",
    categoryColor: "bg-red-50",
    defES: "Fármaco que inhibe el crecimiento y multiplicación celular. Base de la quimioterapia oncológica. Son peligrosos para el personal sanitario (riesgo biológico).",
    defRO: "Medicament care inhibă creșterea și multiplicarea celulară. Baza chimioterapiei oncologice. Sunt periculoase pentru personalul medical (risc biologic).",
    nanda: null
}, {
    id: "v_c_clamidias",
    termES: "Clamidias (Chlamydia)",
    termRO: "Chlamydia",
    categoryColor: "bg-red-50",
    defES: "Género bacteriano intracelular. Chlamydia trachomatis causa la ITS más común (uretritis, cervicitis), pudiendo provocar enfermedad pélvica inflamatoria (EPI) e infertilidad.",
    defRO: "Gen bacterian intracelular. Chlamydia trachomatis cauzează cea mai comună ITS (uretrită, cervicită), putând provoca boală inflamatorie pelvină (BIP) și infertilitate.",
    nanda: null
}, {
    id: "v_c_claudicacion",
    termES: "Claudicación Intermitente",
    termRO: "Claudicație Intermitentă",
    categoryColor: "bg-stone-50",
    defES: "Dolor muscular (calambre) en las piernas al caminar que obliga a detenerse, y cede con el reposo. Signo clásico de enfermedad arterial periférica (EAP).",
    defRO: "Durere musculară (crampă) în picioare la mers care obligă la oprire, și cedează la repaus. Semn clasic de boală arterială periferică (BAP).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_c_claustrofobia",
    termES: "Claustrofobia",
    termRO: "Claustrofobie",
    categoryColor: "bg-purple-50",
    defES: "Miedo irracional e intenso a espacios cerrados o confinados (ascensores, resonancia magnética). Puede desencadenar ataques de pánico.",
    defRO: "Frică irațională și intensă de spații închise sau restrânse (lifturi, rezonanță magnetică). Poate declanșa atacuri de panică.",
    nanda: {
        codeES: "00148",
        codeRO: "00148",
        labelES: "Temor",
        labelRO: "Teamă"
    }
}, {
    id: "v_c_clavicula",
    termES: "Clavícula",
    termRO: "Claviculă",
    categoryColor: "bg-stone-50",
    defES: "Hueso largo en forma de S que conecta el esternón con el acromion de la escápula. Es el hueso que se fractura con más frecuencia (especialmente en recién nacidos y deportistas).",
    defRO: "Os lung în formă de S care conectează sternul cu acromionul scapulei. Este osul care se fracturează cel mai frecvent (în special la nou-născuți și sportivi).",
    nanda: null
}, {
    id: "v_c_climaterio",
    termES: "Climaterio",
    termRO: "Climacteriu",
    categoryColor: "bg-pink-50",
    defES: "Período de transición en la vida de la mujer (perimenopausia) antes y después de la menopausia, marcado por la disminución de la función ovárica y síntomas vasomotores (sofocos).",
    defRO: "Perioadă de tranziție în viața femeii (perimenopauză) înainte și după menopauză, marcată de scăderea funcției ovariene și simptome vasomotorii (bufeuri).",
    nanda: null
}, {
    id: "v_c_clinica",
    termES: "Clínica",
    termRO: "Clinică",
    categoryColor: "bg-blue-50",
    defES: "1. Práctica médica basada en la observación y tratamiento directo del paciente. 2. Centro sanitario. 3. Conjunto de signos y síntomas de una enfermedad (cuadro clínico).",
    defRO: "1. Practică medicală bazată pe observarea și tratamentul direct al pacientului. 2. Centru sanitar. 3. Ansamblu de semne și simptome ale unei boli (tablou clinic).",
    nanda: null
}, {
    id: "v_c_clitoris",
    termES: "Clítoris",
    termRO: "Clitoris",
    categoryColor: "bg-pink-50",
    defES: "Órgano eréctil femenino altamente sensible situado en la parte anterior de la vulva. Su función es puramente el placer sexual.",
    defRO: "Organ erectil feminin extrem de sensibil situat în partea anterioară a vulvei. Funcția sa este pur sexuală (plăcere).",
    nanda: null
}, {
    id: "v_c_clorhexidina",
    termES: "Clorhexidina",
    termRO: "Clorhexidină",
    categoryColor: "bg-teal-50",
    defES: "Antiséptico de amplio espectro (bactericida/fungicida) muy utilizado para lavado quirúrgico de manos, preparación de piel preoperatoria e higiene bucal. Efecto residual prolongado.",
    defRO: "Antiseptic cu spectru larg (bactericid/fungicid) foarte utilizat pentru spălarea chirurgicală a mâinilor, pregătirea pielii preoperator și igiena bucală. Efect rezidual prelungit.",
    nanda: null
}, {
    id: "v_c_coagulacion",
    termES: "Coagulación",
    termRO: "Coagulare",
    categoryColor: "bg-red-50",
    defES: "Proceso complejo por el cual la sangre pasa de líquido a gel (coágulo) para detener una hemorragia (hemostasia). Implica plaquetas y factores de coagulación (cascada).",
    defRO: "Proces complex prin care sângele trece de la lichid la gel (cheag) pentru a opri o hemoragie (hemostază). Implică trombocite și factori de coagulare (cascadă).",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_c_coartacion",
    termES: "Coartación (Aórtica)",
    termRO: "Coarctație (de Aortă)",
    categoryColor: "bg-red-50",
    defES: "Estrechamiento congénito de la aorta, generalmente tras el arco. Causa hipertensión en brazos y cabeza, e hipotensión/pulsos débiles en piernas.",
    defRO: "Îngustare congenitală a aortei, de obicei după arc. Cauzează hipertensiune în brațe și cap, și hipotensiune/pulsuri slabe în picioare.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_c_coccix",
    termES: "Cóccix (Coxis)",
    termRO: "Coccis",
    categoryColor: "bg-stone-50",
    defES: "Hueso pequeño triangular en la base de la columna vertebral, formado por la fusión de 3-5 vértebras rudimentarias. Las úlceras por presión sacrococcígeas son muy comunes.",
    defRO: "Os mic triunghiular la baza coloanei vertebrale, format prin fuziunea a 3-5 vertebre rudimentare. Ulcerele de presiune sacrococcigiene sunt foarte frecvente.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_c_codigo_ictus",
    termES: "Código Ictus",
    termRO: "Cod AVC",
    categoryColor: "bg-red-50",
    defES: "Protocolo de emergencia para la rápida identificación, transporte y tratamiento de pacientes con accidente cerebrovascular agudo, maximizando las opciones de reperfusión (trombolisis/trombectomía).",
    defRO: "Protocol de urgență pentru identificarea rapidă, transportul și tratamentul pacienților cu accident vascular cerebral acut, maximizând opțiunile de reperfuzie (tromboliză/trombectomie).",
    nanda: null
}, {
    id: "v_c_cognicion",
    termES: "Cognición",
    termRO: "Cogniție",
    categoryColor: "bg-purple-50",
    defES: "Conjunto de procesos mentales superiores: percepción, memoria, juicio, razonamiento y comprensión. El deterioro cognitivo afecta estas funciones.",
    defRO: "Ansamblu de procese mentale superioare: percepție, memorie, judecată, raționament și înțelegere. Declinul cognitiv afectează aceste funcții.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_c_colageno",
    termES: "Colágeno",
    termRO: "Colagen",
    categoryColor: "bg-stone-50",
    defES: "Proteína fibrosa principal del tejido conectivo (piel, tendones, huesos). Aporta resistencia y estructura. Esencial en la cicatrización de heridas.",
    defRO: "Proteină fibroasă principală a țesutului conjunctiv (piele, tendoane, oase). Oferă rezistență și structură. Esențial în vindecarea plăgilor.",
    nanda: null
}, {
    id: "v_c_colangitis",
    termES: "Colangitis",
    termRO: "Colangită",
    categoryColor: "bg-yellow-50",
    defES: "Infección bacteriana aguda de las vías biliares obstruidas (cálculo, tumor). Triada de Charcot: fiebre, ictericia y dolor en hipocondrio derecho. Emergencia médica.",
    defRO: "Infecție bacteriană acută a căilor biliare obstruate (calcul, tumoare). Triada Charcot: febră, icter și durere în hipocondrul drept. Urgență medicală.",
    nanda: null
}, {
    id: "v_c_colecistectomia",
    termES: "Colecistectomía",
    termRO: "Colecistectomie",
    categoryColor: "bg-teal-50",
    defES: "Extirpación quirúrgica de la vesícula biliar. Generalmente laparoscópica. Indicada en colelitiasis sintomática o colecistitis.",
    defRO: "Extirparea chirurgicală a vezicii biliare. De obicei laparoscopică. Indicată în colelitiaza simptomatică sau colecistită.",
    nanda: null
}, {
    id: "v_c_colesterol",
    termES: "Colesterol",
    termRO: "Colesterol",
    categoryColor: "bg-yellow-50",
    defES: "Lípido esteroide esencial para membranas celulares y hormonas. Niveles altos en sangre (hipercolesterolemia, especialmente LDL) son factor de riesgo mayor para aterosclerosis.",
    defRO: "Lipid steroid esențial pentru membrane celulare și hormoni. Niveluri ridicate în sânge (hipercolesterolemie, în special LDL) sunt factor de risc major pentru ateroscleroză.",
    nanda: null
}, {
    id: "v_c_colico",
    termES: "Cólico",
    termRO: "Colică",
    categoryColor: "bg-red-50",
    defES: "Dolor abdominal agudo, intermitente y espasmódico, causado por la contracción de un órgano hueco (intestino, uréter, vía biliar) ante una obstrucción.",
    defRO: "Durere abdominală acută, intermitentă și spasmodică, cauzată de contracția unui organ gol (intestin, ureter, cale biliară) în fața unei obstrucții.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_c_colitis_ulcerosa",
    termES: "Colitis Ulcerosa",
    termRO: "Colită Ulcerativă",
    categoryColor: "bg-orange-50",
    defES: "Enfermedad inflamatoria intestinal crónica que afecta al colon y recto. Causa úlceras, diarrea sanguinolenta y dolor. Aumenta riesgo de cáncer de colon.",
    defRO: "Boală inflamatorie intestinală cronică ce afectează colonul și rectul. Cauzează ulcere, diaree sanguinolentă și durere. Crește riscul de cancer de colon.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_c_colostomia",
    termES: "Colostomía",
    termRO: "Colostomie",
    categoryColor: "bg-pink-50",
    defES: "Abertura quirúrgica (estoma) del colon a través de la pared abdominal para derivar las heces a una bolsa externa. Puede ser temporal o permanente.",
    defRO: "Deschidere chirurgicală (stomă) a colonului prin peretele abdominal pentru a deriva materiile fecale într-o pungă externă. Poate fi temporară sau permanentă.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_c_coma",
    termES: "Coma",
    termRO: "Comă",
    categoryColor: "bg-stone-50",
    defES: "Estado de inconsciencia profunda y prolongada. El paciente no responde a estímulos y no puede ser despertado. Se evalúa con la Escala de Glasgow (GCS <= 8).",
    defRO: "Stare de inconștiență profundă și prelungită. Pacientul nu răspunde la stimuli și nu poate fi trezit. Se evaluează cu Scara Glasgow (GCS <= 8).",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_c_comisura",
    termES: "Comisura (Labial)",
    termRO: "Comisură (Labială)",
    categoryColor: "bg-pink-50",
    defES: "Punto de unión de los labios superior e inferior (esquina de la boca). La queilitis angular (boqueras) es la inflamación de esta zona.",
    defRO: "Punctul de unire a buzelor superioară și inferioară (colțul gurii). Cheilita angulară (zăbăluța) este inflamația acestei zone.",
    nanda: null
}, {
    id: "v_c_compartimental",
    termES: "Compartimental (Síndrome)",
    termRO: "Compartiment (Sindrom de)",
    categoryColor: "bg-red-50",
    defES: "Aumento peligroso de presión dentro de un compartimento muscular cerrado (fascia), que compromete la circulación y daña nervios y músculos. Emergencia quirúrgica (fasciotomía).",
    defRO: "Creștere periculoasă a presiunii în interiorul unui compartiment muscular închis (fascie), care compromite circulația și deteriorează nervii și mușchii. Urgență chirurgicală (fasciotomie).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_c_concusión",
    termES: "Concusión (Conmoción Cerebral)",
    termRO: "Comoție Cerebrală",
    categoryColor: "bg-stone-50",
    defES: "Lesión cerebral traumática leve causada por un golpe o sacudida. Provoca alteración transitoria de la función cerebral (confusión, amnesia, cefalea) sin daño estructural visible en TAC.",
    defRO: "Leziune cerebrală traumatică ușoară cauzată de o lovitură sau scuturare. Provoacă alterarea tranzitorie a funcției cerebrale (confuzie, amnezie, cefalee) fără daune structurale vizibile la CT.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_c_condiloma",
    termES: "Condiloma (Verruga Genital)",
    termRO: "Condilom (Neg Genital)",
    categoryColor: "bg-red-50",
    defES: "Lesión verrugosa en genitales o ano causada por el Virus del Papiloma Humano (VPH). Es una infección de transmisión sexual muy común.",
    defRO: "Leziune verucoasă pe organele genitale sau anus cauzată de Virusul Papiloma Uman (HPV). Este o infecție cu transmitere sexuală foarte comună.",
    nanda: null
}, {
    id: "v_c_confusion",
    termES: "Confusión",
    termRO: "Confuzie",
    categoryColor: "bg-purple-50",
    defES: "Estado mental caracterizado por desorientación (tiempo, espacio, persona), dificultad para pensar con claridad y alteración de la atención. Si es aguda y fluctuante, se llama Delirium.",
    defRO: "Stare mentală caracterizată prin dezorientare (timp, spațiu, persoană), dificultate de a gândi clar și alterarea atenției. Dacă este acută și fluctuantă, se numește Delirium.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_c_congelacion",
    termES: "Congelación",
    termRO: "Degerătură",
    categoryColor: "bg-blue-50",
    defES: "Lesión tisular causada por la exposición a temperaturas bajo cero. El hielo cristaliza en las células, causando necrosis. Afecta extremidades (dedos, nariz, orejas).",
    defRO: "Leziune tisulară cauzată de expunerea la temperaturi sub zero. Gheața cristalizează în celule, cauzând necroză. Afectează extremitățile (degete, nas, urechi).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_c_congenito",
    termES: "Congénito",
    termRO: "Congenital",
    categoryColor: "bg-green-50",
    defES: "Presente desde el nacimiento. Puede ser hereditario (genético) o adquirido durante el desarrollo fetal (infección, tóxicos).",
    defRO: "Prezent de la naștere. Poate fi ereditar (genetic) sau dobândit în timpul dezvoltării fetale (infecție, toxice).",
    nanda: null
}, {
    id: "v_c_conjuntivitis",
    termES: "Conjuntivitis",
    termRO: "Conjunctivită",
    categoryColor: "bg-pink-50",
    defES: "Inflamación de la conjuntiva (membrana que recubre el ojo). Ojo rojo, secreción y picor. Puede ser viral, bacteriana (purulenta) o alérgica.",
    defRO: "Inflamația conjunctivei (membrana care acoperă ochiul). Ochi roșu, secreție și mâncărime. Poate fi virală, bacteriană (purulentă) sau alergică.",
    nanda: null
}, {
    id: "v_c_consentimiento",
    termES: "Consentimiento Informado",
    termRO: "Consimțământ Informat",
    categoryColor: "bg-slate-50",
    defES: "Proceso legal y ético mediante el cual el paciente acepta un procedimiento médico tras recibir información adecuada sobre riesgos, beneficios y alternativas.",
    defRO: "Proces legal și etic prin care pacientul acceptă o procedură medicală după ce a primit informații adecvate despre riscuri, beneficii și alternative.",
    nanda: null
}, {
    id: "v_c_constipacion",
    termES: "Constipación (Estreñimiento)",
    termRO: "Constipație",
    categoryColor: "bg-stone-50",
    defES: "Evacuación infrecuente o difícil de heces duras y secas. Causas: dieta pobre en fibra, inmovilidad, opiodes, deshidratación.",
    defRO: "Evacuare rară sau dificilă a scaunelor tari și uscate. Cauze: dietă săracă în fibre, imobilitate, opioide, deshidratare.",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_c_contagio",
    termES: "Contagio",
    termRO: "Contagiune",
    categoryColor: "bg-red-50",
    defES: "Transmisión de una enfermedad infecciosa de una persona a otra, ya sea por contacto directo (tacto) o indirecto (aire, fómites).",
    defRO: "Transmiterea unei boli infecțioase de la o persoană la alta, fie prin contact direct (atingere) sau indirect (aer, fomite).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_c_contencion",
    termES: "Contención (Mecánica)",
    termRO: "Contenție (Mecanică)",
    categoryColor: "bg-stone-50",
    defES: "Uso de dispositivos físicos para restringir el movimiento de un paciente y prevenir daños a sí mismo o a otros. Medida de último recurso, requiere prescripción y monitorización estricta.",
    defRO: "Utilizarea dispozitivelor fizice pentru a restricționa mișcarea unui pacient și a preveni rănirea sa sau a altora. Măsură de ultimă instanță, necesită prescripție și monitorizare strictă.",
    nanda: {
        codeES: "00040",
        codeRO: "00040",
        labelES: "Riesgo de síndrome de desuso",
        labelRO: "Risc de sindrom de neutilizare"
    }
}, {
    id: "v_c_contraccion",
    termES: "Contracción",
    termRO: "Contracție",
    categoryColor: "bg-red-50",
    defES: "Acortamiento y tensión de las fibras musculares. Uterina: endurecimiento del útero durante el parto para dilatar el cuello y expulsar el feto.",
    defRO: "Scurtarea și tensionarea fibrelor musculare. Uterină: întărirea uterului în timpul travaliului pentru a dilata colul și a expulza fătul.",
    nanda: null
}, {
    id: "v_c_convulsion",
    termES: "Convulsión",
    termRO: "Convulsie",
    categoryColor: "bg-purple-50",
    defES: "Actividad muscular involuntaria y violenta (tónico-clónica) causada por una descarga eléctrica anormal en el cerebro (crisis epiléptica). Puede acompañarse de pérdida de conciencia.",
    defRO: "Activitate musculară involuntară și violentă (tonico-clonică) cauzată de o descărcare electrică anormală în creier (criză epileptică). Se poate însoți de pierderea conștienței.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_c_coprocultivo",
    termES: "Coprocultivo",
    termRO: "Coprocultură",
    categoryColor: "bg-stone-50",
    defES: "Análisis microbiológico de las heces para identificar bacterias patógenas (Salmonella, Shigella, Campylobacter) o parásitos causantes de gastroenteritis.",
    defRO: "Analiză microbiologică a scaunului pentru identificarea bacteriilor patogene (Salmonella, Shigella, Campylobacter) sau paraziților cauzatori de gastroenterită.",
    nanda: null
}, {
    id: "v_c_corazon",
    termES: "Corazón",
    termRO: "Inimă",
    categoryColor: "bg-red-50",
    defES: "Órgano muscular hueco que bombea sangre a través del sistema circulatorio. Tiene 4 cámaras: 2 aurículas y 2 ventrículos. Funciona como una bomba doble.",
    defRO: "Organ muscular gol care pompează sânge prin sistemul circulator. Are 4 camere: 2 atrii și 2 ventricule. Funcționează ca o pompă dublă.",
    nanda: null
}, {
    id: "v_c_cordon_umbilical",
    termES: "Cordón Umbilical",
    termRO: "Cordon Ombilical",
    categoryColor: "bg-pink-50",
    defES: "Estructura flexible que conecta el feto con la placenta. Contiene 2 arterias y 1 vena, rodeadas de gelatina de Wharton. Vital para el intercambio de nutrientes y oxígeno.",
    defRO: "Structură flexibilă care conectează fătul cu placenta. Conține 2 artere și 1 venă, înconjurate de gelatina Wharton. Vital pentru schimbul de nutrienți și oxigen.",
    nanda: null
}, {
    id: "v_c_corea",
    termES: "Corea",
    termRO: "Coree",
    categoryColor: "bg-purple-50",
    defES: 'Trastorno del movimiento caracterizado por movimientos involuntarios, rápidos, irregulares y sin propósito ("baile"). Típico de la enfermedad de Huntington.',
    defRO: 'Tulburare de mișcare caracterizată prin mișcări involuntare, rapide, neregulate și fără scop ("dans"). Tipic pentru boala Huntington.',
    nanda: null
}, {
    id: "v_c_cornea",
    termES: "Córnea",
    termRO: "Cornee",
    categoryColor: "bg-blue-50",
    defES: "Estructura transparente y curva en la parte frontal del ojo que cubre el iris y la pupila. Actúa como lente principal para enfocar la luz. El trasplante de córnea es común.",
    defRO: "Structură transparentă și curbă în partea frontală a ochiului care acoperă irisul și pupila. Acționează ca lentilă principală pentru focalizarea luminii. Transplantul de cornee este comun.",
    nanda: null
}, {
    id: "v_c_coronaria",
    termES: "Coronaria (Arteria)",
    termRO: "Coronariană (Arteră)",
    categoryColor: "bg-red-50",
    defES: "Arterias que suministran sangre oxigenada al músculo cardíaco (miocardio). Su obstrucción por aterosclerosis causa angina o infarto de miocardio.",
    defRO: "Artere care furnizează sânge oxigenat mușchiului cardiac (miocard). Obstrucția lor prin ateroscleroză cauzează angină sau infarct miocardic.",
    nanda: null
}, {
    id: "v_c_corteza",
    termES: "Corteza Cerebral",
    termRO: "Cortex Cerebral (Scoarță)",
    categoryColor: "bg-indigo-50",
    defES: "Capa externa de sustancia gris del cerebro, responsable de las funciones cognitivas superiores, percepción sensorial y control motor voluntario.",
    defRO: "Stratul extern de substanță cenușie al creierului, responsabil de funcțiile cognitive superioare, percepția senzorială și controlul motor voluntar.",
    nanda: null
}, {
    id: "v_c_corticoide",
    termES: "Corticoide (Corticosteroide)",
    termRO: "Corticoid (Corticosteroid)",
    categoryColor: "bg-green-50",
    defES: "Hormona o fármaco derivado del cortisol con potente acción antiinflamatoria e inmunosupresora. Usos: asma, alergias, autoinmunes. Efectos adversos: Cushing, osteoporosis, hiperglucemia.",
    defRO: "Hormon sau medicament derivat din cortizol cu acțiune antiinflamatorie și imunosupresoare puternică. Utilizări: astm, alergii, autoimune. Efecte adverse: Cushing, osteoporoză, hiperglicemie.",
    nanda: null
}, {
    id: "v_c_costra",
    termES: "Costra",
    termRO: "Crustă (Coajă)",
    categoryColor: "bg-stone-50",
    defES: "Capa sólida formada por sangre, suero o pus seco sobre una herida en curación. Protege la herida pero puede retrasar la epitelización si es muy gruesa.",
    defRO: "Strat solid format din sânge, ser sau puroi uscat peste o rană în vindecare. Protejează rana dar poate întârzia epitelizarea dacă este foarte groasă.",
    nanda: null
}, {
    id: "v_c_craneotomia",
    termES: "Craneotomía",
    termRO: "Craniotomie",
    categoryColor: "bg-teal-50",
    defES: "Apertura quirúrgica del cráneo para acceder al cerebro (tumor, hematoma, aneurisma). Se retira un colgajo óseo que luego se repone.",
    defRO: "Deschidere chirurgicală a craniului pentru a accesa creierul (tumoare, hematom, anevrism). Se îndepărtează un lambou osos care apoi se repune.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_c_creatinina",
    termES: "Creatinina",
    termRO: "Creatinină",
    categoryColor: "bg-yellow-50",
    defES: "Producto de desecho del metabolismo muscular excretado por los riñones. Su nivel en sangre es el indicador más utilizado de la función renal. Elevada en insuficiencia renal.",
    defRO: "Produs rezidual al metabolismului muscular excretat de rinichi. Nivelul său în sânge este cel mai utilizat indicator al funcției renale. Crescută în insuficiență renală.",
    nanda: null
}, {
    id: "v_c_crepitacion",
    termES: "Crepitación (Crepitantes)",
    termRO: "Crepitație (Raluri crepitante)",
    categoryColor: "bg-sky-50",
    defES: "1. Respiratorio: Sonido crujiente fino (como pisar nieve/sal) al final de la inspiración por apertura de alvéolos con líquido (neumonía, edema). 2. Óseo: Ruido al rozar fragmentos de hueso fracturado.",
    defRO: "1. Respirator: Sunet fin de pârâit (ca și călcatul pe zăpadă/sare) la sfârșitul inspirației prin deschiderea alveolelor cu lichid (pneumonie, edem). 2. Osos: Zgomot la frecarea fragmentelor de os fracturat.",
    nanda: null
}, {
    id: "v_c_cretinismo",
    termES: "Cretinismo",
    termRO: "Cretinism",
    categoryColor: "bg-stone-50",
    defES: "Hipotiroidismo congénito no tratado que causa retraso mental grave y enanismo. Prevenible mediante cribado neonatal (prueba del talón).",
    defRO: "Hipotiroidism congenital netratat care cauzează retard mental grav și nanism. Prevenibil prin screening neonatal (testul călcâiului).",
    nanda: null
}, {
    id: "v_c_crioterapia",
    termES: "Crioterapia",
    termRO: "Crioterapie",
    categoryColor: "bg-blue-50",
    defES: "Uso terapéutico del frío extremo (nitrógeno líquido) para destruir tejidos anormales (verrugas, tumores piel) o reducir inflamación y dolor (hielo local).",
    defRO: "Utilizarea terapeutică a frigului extrem (azot lichid) pentru a distruge țesuturi anormale (negi, tumori piele) sau a reduce inflamația și durerea (gheață locală).",
    nanda: null
}, {
    id: "v_c_crisis",
    termES: "Crisis",
    termRO: "Criză",
    categoryColor: "bg-red-50",
    defES: "Cambio brusco en el curso de una enfermedad, para bien o para mal. También episodio agudo (crisis epiléptica, crisis de ansiedad, crisis hipertensiva).",
    defRO: "Schimbare bruscă în evoluția unei boli, în bine sau în rău. De asemenea, episod acut (criză epileptică, criză de anxietate, criză hipertensivă).",
    nanda: null
}, {
    id: "v_c_cromosoma",
    termES: "Cromosoma",
    termRO: "Cromozom",
    categoryColor: "bg-indigo-50",
    defES: "Estructura organizada de ADN y proteínas en el núcleo celular que contiene los genes. Humanos: 23 pares (46 total). Anomalías: Síndrome de Down (Trisomía 21).",
    defRO: "Structură organizată de ADN și proteine în nucleul celular care conține genele. Oameni: 23 de perechi (46 total). Anomalii: Sindromul Down (Trisomia 21).",
    nanda: null
}, {
    id: "v_c_cronico",
    termES: "Crónico",
    termRO: "Cronic",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad de larga duración (>3-6 meses) y progresión lenta. Generalmente no curable, requiere manejo de síntomas y prevención de complicaciones (EPOC, Diabetes, Artritis).",
    defRO: "Boală de lungă durată (>3-6 luni) și progresie lentă. De obicei incurabilă, necesită managementul simptomelor și prevenirea complicațiilor (BPOC, Diabet, Artrită).",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_c_cuadriceps",
    termES: "Cuádriceps",
    termRO: "Cvadriceps",
    categoryColor: "bg-red-50",
    defES: "Músculo grande y potente de la parte anterior del muslo. Extensor principal de la rodilla. Fundamental para caminar y levantarse. Sitio de inyección IM (vasto externo) en niños.",
    defRO: "Mușchi mare și puternic din partea anterioară a coapsei. Extensor principal al genunchiului. Fundamental pentru mers și ridicare. Loc de injecție IM (vast lateral) la copii.",
    nanda: null
}, {
    id: "v_c_cuarentena",
    termES: "Cuarentena",
    termRO: "Carantină",
    categoryColor: "bg-orange-50",
    defES: "Restricción de movimiento de personas sanas que han estado expuestas a una enfermedad contagiosa, para observar si desarrollan síntomas y prevenir la propagación.",
    defRO: "Restricționarea mișcării persoanelor sănătoase care au fost expuse la o boală contagioasă, pentru a observa dacă dezvoltă simptome și a preveni răspândirea.",
    nanda: null
}, {
    id: "v_c_cuello_uterino",
    termES: "Cuello Uterino (Cérvix)",
    termRO: "Col Uterin (Cervix)",
    categoryColor: "bg-pink-50",
    defES: "Parte inferior estrecha del útero que se abre a la vagina. Se dilata durante el parto. Sitio de toma de citología y origen del cáncer de cérvix.",
    defRO: "Partea inferioară îngustă a uterului care se deschide în vagin. Se dilată în timpul nașterii. Loc de prelevare a citologiei și originea cancerului de col uterin.",
    nanda: null
}, {
    id: "v_c_cuerpo_luteo",
    termES: "Cuerpo Lúteo",
    termRO: "Corp Galben",
    categoryColor: "bg-yellow-50",
    defES: "Estructura endocrina temporal formada en el ovario tras la ovulación. Secreta progesterona para mantener el endometrio y el embarazo temprano.",
    defRO: "Structură endocrină temporară formată în ovar după ovulație. Secretă progesteron pentru a menține endometrul și sarcina timpurie.",
    nanda: null
}, {
    id: "v_c_cuidado_paliativo",
    termES: "Cuidado Paliativo",
    termRO: "Îngrijire Paliativă",
    categoryColor: "bg-teal-50",
    defES: "Atención integral activa a pacientes con enfermedades avanzadas y terminales. Objetivo: calidad de vida, control de síntomas (dolor) y apoyo psicosocial, no la curación.",
    defRO: "Îngrijire integrală activă a pacienților cu boli avansate și terminale. Obiectiv: calitatea vieții, controlul simptomelor (durere) și sprijin psihosocial, nu vindecarea.",
    nanda: {
        codeES: "00318",
        codeRO: "00318",
        labelES: "Disconfort",
        labelRO: "Disconfort"
    }
}, {
    id: "v_c_culebrilla",
    termES: "Culebrilla (Herpes Zóster)",
    termRO: "Zona Zoster",
    categoryColor: "bg-red-50",
    defES: "Reactivación del virus varicela-zóster latente en un nervio. Erupción vesiculosa dolorosa que sigue el trayecto de un dermatoma (generalmente torácico).",
    defRO: "Reactivarea virusului varicelo-zosterian latent într-un nerv. Erupție veziculoasă dureroasă care urmează traiectul unui dermatom (de obicei toracic).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_c_cultivo",
    termES: "Cultivo",
    termRO: "Cultură",
    categoryColor: "bg-green-50",
    defES: "Técnica de laboratorio para hacer crecer microorganismos (bacterias, hongos) de una muestra (orina, sangre) en un medio nutritivo para su identificación y antibiograma.",
    defRO: "Tehnică de laborator pentru a crește microorganisme (bacterii, ciuperci) dintr-o probă (urină, sânge) într-un mediu nutritiv pentru identificare și antibiogramă.",
    nanda: null
}, {
    id: "v_c_curetaje",
    termES: "Curetaje (Legrado)",
    termRO: "Chiuretaj",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento quirúrgico para raspar y limpiar el revestimiento del útero (endometrio). Usado tras aborto incompleto, para diagnóstico de sangrado o biopsia.",
    defRO: "Procedură chirurgicală pentru a răzui și curăța căptușeala uterului (endometru). Folosit după avort incomplet, pentru diagnosticul sângerării sau biopsie.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_c_cutaneo",
    termES: "Cutáneo",
    termRO: "Cutanat",
    categoryColor: "bg-pink-50",
    defES: "Relativo a la piel. Vía cutánea: aplicación de fármacos sobre la piel. Erupción cutánea: lesión visible en la piel.",
    defRO: "Referitor la piele. Cale cutanată: aplicarea medicamentelor pe piele. Erupție cutanată: leziune vizibilă pe piele.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_d_dacriocistitis",
    termES: "Dacriocistitis",
    termRO: "Dacriocistită",
    categoryColor: "bg-red-50",
    defES: "Inflamación del saco lagrimal, generalmente debida a la obstrucción del conducto nasolagrimal con infección secundaria. Causa dolor, enrojecimiento y lagrimeo excesivo (epífora) en el ángulo interno del ojo.",
    defRO: "Inflamația sacului lacrimal, de obicei datorată obstrucției canalului nazolacrimal cu infecție secundară. Cauzează durere, roșeață și lăcrimare excesivă (epifora) în unghiul intern al ochiului.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_d_dactil",
    termES: "Dactil- (Prefijo)",
    termRO: "Dactil- (Prefix)",
    categoryColor: "bg-slate-50",
    defES: "Prefijo de origen griego que hace referencia a los dedos de las manos o los pies (ej. dactilitis: inflamación de un dedo; polidactilia: más dedos de lo normal).",
    defRO: "Prefix de origine greacă ce face referire la degetele de la mâini sau picioare (ex. dactilită: inflamația unui deget; polidactilie: mai multe degete decât normal).",
    nanda: null
}, {
    id: "v_d_dactiloscopia",
    termES: "Dactiloscopia",
    termRO: "Dactiloscopie",
    categoryColor: "bg-blue-50",
    defES: "Estudio de las huellas dactilares para la identificación de personas. Aunque es forense, es relevante en el ámbito hospitalario para la identificación de pacientes desconocidos o recién nacidos.",
    defRO: "Studiul amprentelor digitale pentru identificarea persoanelor. Deși este medico-legal, este relevant în mediul spitalicesc pentru identificarea pacienților necunoscuți sau a nou-născuților.",
    nanda: null
}, {
    id: "v_d_datos",
    termES: "Datos (Clínicos)",
    termRO: "Date (Clinice)",
    categoryColor: "bg-gray-50",
    defES: "Información recabada del paciente. Datos subjetivos: lo que el paciente dice sentir (síntomas, ej. dolor). Datos objetivos: lo que el enfermero observa o mide (signos, ej. fiebre, tensión arterial).",
    defRO: "Informații culese de la pacient. Date subiective: ceea ce pacientul spune că simte (simptome, ex. durere). Date obiective: ceea ce asistentul observă sau măsoară (semne, ex. febră, tensiune arterială).",
    nanda: null
}, {
    id: "v_d_deambulacion",
    termES: "Deambulación",
    termRO: "Deambulație (Mers)",
    categoryColor: "bg-green-50",
    defES: "Acto de caminar o moverse de un lugar a otro. La deambulación precoz postoperatoria es vital para prevenir trombosis venosa profunda (TVP), embolia pulmonar y atelectasias.",
    defRO: "Actul de a merge sau de a se mișca dintr-un loc în altul. Deambulația precoce postoperatorie este vitală pentru prevenirea trombozei venoase profunde (TVP), emboliei pulmonare și atelectaziilor.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_d_debilidad",
    termES: "Debilidad",
    termRO: "Slăbiciune",
    categoryColor: "bg-stone-50",
    defES: "Falta de fuerza física o energía. Puede ser generalizada (astenia) o focal (paresia). Es un síntoma inespecífico de múltiples patologías (anemia, infección, neuromuscular).",
    defRO: "Lipsă de forță fizică sau energie. Poate fi generalizată (astenie) sau focală (pareză). Este un simptom nespecific al multor patologii (anemie, infecție, neuromuscular).",
    nanda: {
        codeES: "00093",
        codeRO: "00093",
        labelES: "Fatiga",
        labelRO: "Oboseală"
    }
}, {
    id: "v_d_decubito",
    termES: "Decúbito",
    termRO: "Decubit",
    categoryColor: "bg-indigo-50",
    defES: "Posición del cuerpo al estar acostado. Supino (boca arriba), Prono (boca abajo), Lateral (de lado). El decúbito prolongado es el factor principal de las úlceras por presión.",
    defRO: "Poziția corpului când este culcat. Supin (cu fața în sus), Pron (cu fața în jos), Lateral (pe o parte). Decubitul prelungit este factorul principal al ulcerelor de presiune.",
    nanda: {
        codeES: "00249",
        codeRO: "00249",
        labelES: "Riesgo de úlcera por presión",
        labelRO: "Risc de ulcer de presiune"
    }
}, {
    id: "v_d_defecacion",
    termES: "Defecación",
    termRO: "Defecație",
    categoryColor: "bg-amber-50",
    defES: "Proceso fisiológico de expulsión de las heces del recto a través del ano. Involucra el reflejo de defecación y la relajación voluntaria del esfínter anal externo. La maniobra de Valsalva ayuda al proceso.",
    defRO: "Proces fiziologic de expulzare a materiilor fecale din rect prin anus. Implică reflexul de defecație și relaxarea voluntară a sfincterului anal extern. Manevra Valsalva ajută procesul.",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_d_defensa_mecanismo",
    termES: "Defensa (Mecanismo de)",
    termRO: "Apărare (Mecanism de)",
    categoryColor: "bg-purple-50",
    defES: "Procesos psicológicos inconscientes (según Freud) que protegen al individuo de la ansiedad y amenazas internas o externas. Ejemplos: negación, proyección, racionalización, regresión.",
    defRO: "Procese psihologice inconștiente (conform lui Freud) care protejează individul de anxietate și amenințări interne sau externe. Exemple: negare, proiecție, raționalizare, regresie.",
    nanda: {
        codeES: "00071",
        codeRO: "00071",
        labelES: "Afrontamiento defensivo",
        labelRO: "Coping defensiv"
    }
}, {
    id: "v_d_deficit_autocuidado",
    termES: "Déficit de Autocuidado",
    termRO: "Deficit de Autoîngrijire",
    categoryColor: "bg-orange-50",
    defES: "Estado en el que una persona es incapaz de realizar por sí misma las actividades de la vida diaria (baño, vestido, alimentación, aseo) necesarias para la salud y el bienestar.",
    defRO: "Stare în care o persoană este incapabilă să efectueze singură activitățile vieții zilnice (baie, îmbrăcat, alimentație, toaletă) necesare pentru sănătate și bunăstare.",
    nanda: {
        codeES: "00108",
        codeRO: "00108",
        labelES: "Déficit de autocuidado: Baño",
        labelRO: "Deficit de auto-îngrijire: Baie"
    }
}, {
    id: "v_d_deformidad",
    termES: "Deformidad",
    termRO: "Deformitate",
    categoryColor: "bg-stone-50",
    defES: "Alteración visible de la forma normal de una parte del cuerpo. Puede ser congénita (pie zambo) o adquirida (artritis reumatoide, fractura mal consolidada).",
    defRO: "Alterare vizibilă a formei normale a unei părți a corpului. Poate fi congenitală (picior strâmb) sau dobândită (artrită reumatoidă, fractură prost consolidată).",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_d_degeneracion",
    termES: "Degeneración",
    termRO: "Degenerare",
    categoryColor: "bg-gray-50",
    defES: "Deterioro progresivo de la estructura o función de un tejido u órgano, a menudo asociado al envejecimiento o enfermedad. Ej. Degeneración macular (ojo), degeneración discal (columna).",
    defRO: "Deteriorare progresivă a structurii sau funcției unui țesut sau organ, adesea asociată cu îmbătrânirea sau boala. Ex. Degenerescență maculară (ochi), degenerare discală (coloană).",
    nanda: null
}, {
    id: "v_d_deglucion",
    termES: "Deglución",
    termRO: "Deglutiție",
    categoryColor: "bg-teal-50",
    defES: "Proceso complejo de tragar alimentos o líquidos, pasando de la boca a la faringe y esófago hasta el estómago. Fases: oral (voluntaria), faríngea y esofágica (involuntarias). Su fallo es la disfagia.",
    defRO: "Proces complex de înghițire a alimentelor sau lichidelor, trecând din gură în faringe și esofag până în stomac. Faze: orală (voluntară), faringiană și esofagiană (involuntare). Eșecul său este disfagia.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_d_dehiscencia",
    termES: "Dehiscencia",
    termRO: "Dehiscență",
    categoryColor: "bg-red-50",
    defES: "Complicación quirúrgica caracterizada por la separación espontánea de los bordes de una herida suturada. Puede ser superficial o profunda (evisceración). Factores de riesgo: infección, obesidad, diabetes.",
    defRO: "Complicație chirurgicală caracterizată prin separarea spontană a marginilor unei plăgi suturate. Poate fi superficială sau profundă (eviscerație). Factori de risc: infecție, obezitate, diabet.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_d_delirio",
    termES: "Delirio (Delirium)",
    termRO: "Delir (Delirium)",
    categoryColor: "bg-purple-50",
    defES: "Síndrome confusional agudo y fluctuante, caracterizado por alteración de la atención, conciencia y cognición. Común en ancianos hospitalizados, UCI o postoperatorio. Es una urgencia médica reversible.",
    defRO: "Sindrom confuzional acut și fluctuant, caracterizat prin alterarea atenției, conștiinței și cogniției. Comun la vârstnicii spitalizați, UCI sau postoperator. Este o urgență medicală reversibilă.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_d_deltoides",
    termES: "Deltoides",
    termRO: "Deltoid",
    categoryColor: "bg-red-50",
    defES: "Músculo triangular grueso que cubre la articulación del hombro. Responsable de la abducción del brazo. Es un sitio común para inyecciones intramusculares de pequeño volumen (vacunas) en adultos.",
    defRO: "Mușchi triunghiular gros care acoperă articulația umărului. Responsabil pentru abducția brațului. Este un loc comun pentru injecții intramusculare de volum mic (vaccinuri) la adulți.",
    nanda: null
}, {
    id: "v_d_demencia",
    termES: "Demencia",
    termRO: "Demență",
    categoryColor: "bg-purple-50",
    defES: "Síndrome crónico y progresivo de deterioro de la función cognitiva (memoria, pensamiento, lenguaje) que interfiere con la vida diaria. Alzheimer es la causa más común, seguida de la vascular.",
    defRO: "Sindrom cronic și progresiv de deteriorare a funcției cognitive (memorie, gândire, limbaj) care interferează cu viața zilnică. Alzheimer este cea mai frecventă cauză, urmată de cea vasculară.",
    nanda: {
        codeES: "00129",
        codeRO: "00129",
        labelES: "Confusión crónica",
        labelRO: "Confuzie cronică"
    }
}, {
    id: "v_d_dendrita",
    termES: "Dendrita",
    termRO: "Dendrită",
    categoryColor: "bg-indigo-50",
    defES: "Prolongación ramificada corta de una neurona que recibe impulsos nerviosos (señales) de otras neuronas y los transmite hacia el cuerpo celular (soma).",
    defRO: "Prelungire ramificată scurtă a unui neuron care primește impulsuri nervoase (semnale) de la alți neuroni și le transmite către corpul celular (soma).",
    nanda: null
}, {
    id: "v_d_denegacion",
    termES: "Denegación (Negación)",
    termRO: "Negare",
    categoryColor: "bg-purple-50",
    defES: "Mecanismo de defensa psicológico en el que el sujeto rechaza reconocer la realidad de una situación dolorosa o traumática (ej. negar un diagnóstico de cáncer). Es común en las primeras fases del duelo.",
    defRO: "Mecanism de apărare psihologic în care subiectul refuză să recunoască realitatea unei situații dureroase sau traumatice (ex. negarea unui diagnostic de cancer). Este comună în primele faze ale doliului.",
    nanda: {
        codeES: "00072",
        codeRO: "00072",
        labelES: "Negación ineficaz",
        labelRO: "Negare ineficientă"
    }
}, {
    id: "v_d_denticion",
    termES: "Dentición",
    termRO: "Dentiție",
    categoryColor: "bg-stone-50",
    defES: "Proceso de erupción de los dientes. Dentición decidua (leche): 20 dientes, inicia ~6 meses. Dentición permanente: 32 dientes, inicia ~6 años.",
    defRO: "Procesul de erupție a dinților. Dentiție deciduală (de lapte): 20 de dinți, începe ~6 luni. Dentiție permanentă: 32 de dinți, începe ~6 ani.",
    nanda: null
}, {
    id: "v_d_dependencia",
    termES: "Dependencia",
    termRO: "Dependență",
    categoryColor: "bg-red-50",
    defES: "Necesidad compulsiva de una sustancia (drogas, fármacos) o comportamiento para funcionar o evitar el malestar (síndrome de abstinencia). Puede ser física (adaptación celular) o psicológica (craving).",
    defRO: "Nevoie compulsivă de o substanță (droguri, medicamente) sau comportament pentru a funcționa sau a evita disconfortul (sindrom de sevraj). Poate fi fizică (adaptare celulară) sau psihologică (craving).",
    nanda: {
        codeES: "00097",
        codeRO: "00097",
        labelES: "Disminución de la implicación en actividades recreativas",
        labelRO: "Scăderea implicării în activități recreative"
    }
}, {
    id: "v_d_depresion",
    termES: "Depresión",
    termRO: "Depresie",
    categoryColor: "bg-purple-50",
    defES: "Trastorno del estado de ánimo caracterizado por tristeza persistente, anhedonia (pérdida de interés), alteraciones del sueño/apetito, fatiga y pensamientos de muerte. Requiere tratamiento farmacológico y psicoterapéutico.",
    defRO: "Tulburare a stării de spirit caracterizată prin tristețe persistentă, anhedonie (pierderea interesului), tulburări de somn/apetit, oboseală și gânduri de moarte. Necesită tratament farmacologic și psihoterapeutic.",
    nanda: {
        codeES: "00140",
        codeRO: "00140",
        labelES: "Riesgo de violencia autodirigida",
        labelRO: "Risc de violență auto-îndreptată"
    }
}, {
    id: "v_d_dermatitis",
    termES: "Dermatitis",
    termRO: "Dermatită",
    categoryColor: "bg-pink-50",
    defES: "Inflamación de la piel. Tipos: Atópica (eccema crónico), De Contacto (alérgica o irritativa), Seborreica (caspa/grasa), Del Pañal. Se manifiesta con eritema, prurito y descamación.",
    defRO: "Inflamația pielii. Tipuri: Atopică (eczemă cronică), De Contact (alergică sau iritativă), Seboreică (mătreață/grăsime), De Scutec. Se manifestă prin eritem, prurit și descuamare.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_d_dermatoma",
    termES: "Dermatoma",
    termRO: "Dermatom",
    categoryColor: "bg-indigo-50",
    defES: "Área específica de la piel inervada por fibras sensitivas de una única raíz nerviosa espinal. Su mapeo es crucial para localizar lesiones medulares (ej. nivel sensitivo en anestesia raquídea o trauma).",
    defRO: "Zonă specifică a pielii inervată de fibre senzitive ale unei singure rădăcini nervoase spinale. Cartografierea sa este crucială pentru localizarea leziunilor medulare (ex. nivel senzitiv în anestezia rahidiană sau traumă).",
    nanda: null
}, {
    id: "v_d_dermis",
    termES: "Dermis",
    termRO: "Dermă",
    categoryColor: "bg-stone-50",
    defES: "Capa media de la piel, situada bajo la epidermis y sobre la hipodermis. Tejido conectivo que contiene vasos sanguíneos, nervios, folículos pilosos y glándulas sudoríparas. Proporciona resistencia y elasticidad.",
    defRO: "Stratul mijlociu al pielii, situat sub epidermă și peste hipoderm. Țesut conjunctiv care conține vase de sânge, nervi, foliculi piloși și glande sudoripare. Oferă rezistență și elasticitate.",
    nanda: null
}, {
    id: "v_d_desarrollo",
    termES: "Desarrollo",
    termRO: "Dezvoltare",
    categoryColor: "bg-green-50",
    defES: "Proceso progresivo de cambio, maduración y adquisición de habilidades funcionales a lo largo de la vida (motoras, cognitivas, emocionales). Se evalúa mediante hitos del desarrollo (ej. caminar, hablar).",
    defRO: "Proces progresiv de schimbare, maturizare și dobândire de abilități funcționale de-a lungul vieții (motorii, cognitive, emoționale). Se evaluează prin repere de dezvoltare (ex. mers, vorbit).",
    nanda: {
        codeES: "00112",
        codeRO: "00112",
        labelES: "Riesgo de retraso en el desarrollo",
        labelRO: "Risc de întârziere în dezvoltare"
    }
}, {
    id: "v_d_desbridamiento",
    termES: "Desbridamiento",
    termRO: "Debridare",
    categoryColor: "bg-red-50",
    defES: "Procedimiento para eliminar tejido muerto (necrótico), desvitalizado o infectado de una herida para promover su curación. Métodos: quirúrgico (bisturí), enzimático, autolítico (apósitos) o mecánico.",
    defRO: "Procedură pentru eliminarea țesutului mort (necrotic), devitalizat sau infectat dintr-o rană pentru a promova vindecarea sa. Metode: chirurgical (bisturiu), enzimatic, autolitic (pansamente) sau mecanic.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_d_descanso",
    termES: "Descanso",
    termRO: "Odihnă",
    categoryColor: "bg-blue-50",
    defES: "Estado de relajación física y mental que alivia el cansancio y restaura la energía. Es distinto del sueño, pero ambos son necesarios para la salud fisiológica.",
    defRO: "Stare de relaxare fizică și mentală care ameliorează oboseala și restabilește energia. Este diferit de somn, dar ambele sunt necesare pentru sănătatea fiziologică.",
    nanda: {
        codeES: "00096",
        codeRO: "00096",
        labelES: "Deprivación de sueño",
        labelRO: "Privare de somn"
    }
}, {
    id: "v_d_desfibrilacion",
    termES: "Desfibrilación",
    termRO: "Defibrilare",
    categoryColor: "bg-red-50",
    defES: "Tratamiento eléctrico de emergencia (choque asincrónico) para la Fibrilación Ventricular (FV) y Taquicardia Ventricular sin pulso (TV). Despolariza todas las células miocárdicas para permitir que el nodo sinusal retome el ritmo.",
    defRO: "Tratament electric de urgență (șoc asincron) pentru Fibrilația Ventriculară (FV) și Tahicardia Ventriculară fără puls (TV). Depolarizează toate celulele miocardice pentru a permite nodului sinusal să reia ritmul.",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_d_deshidratacion",
    termES: "Deshidratación",
    termRO: "Deshidratare",
    categoryColor: "bg-blue-50",
    defES: "Estado patológico resultante de la pérdida excesiva de agua y electrolitos del cuerpo (vómitos, diarrea, sudoración). Signos: sequedad mucosas, turgencia piel disminuida, taquicardia, hipotensión, oliguria.",
    defRO: "Stare patologică rezultată din pierderea excesivă de apă și electroliți din corp (vărsături, diaree, transpirație). Semne: uscăciunea mucoaselor, turgescența pielii scăzută, tahicardie, hipotensiune, oligurie.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_d_desinfeccion",
    termES: "Desinfección",
    termRO: "Dezinfecție",
    categoryColor: "bg-teal-50",
    defES: "Proceso físico o químico que elimina la mayoría de los microorganismos patógenos de objetos inanimados (superficies, instrumentos), excepto las esporas bacterianas (diferencia con esterilización).",
    defRO: "Proces fizic sau chimic care elimină majoritatea microorganismelor patogene de pe obiecte neînsuflețite (suprafețe, instrumente), cu excepția sporilor bacterieni (diferență față de sterilizare).",
    nanda: null
}, {
    id: "v_d_desmayo",
    termES: "Desmayo (Síncope)",
    termRO: "Leșin (Sincopă)",
    categoryColor: "bg-gray-50",
    defES: "Pérdida transitoria de la conciencia y del tono postural debida a una disminución global y repentina del flujo sanguíneo cerebral. Recuperación espontánea y completa. Causas: vasovagal, ortostático, cardiogénico.",
    defRO: "Pierdere tranzitorie a conștiinței și a tonusului postural datorată unei scăderi globale și bruște a fluxului sanguin cerebral. Recuperare spontană și completă. Cauze: vasovagal, ortostatic, cardiogen.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_d_desnutricion",
    termES: "Desnutrición",
    termRO: "Malnutriție",
    categoryColor: "bg-yellow-50",
    defES: "Estado patológico por ingesta o absorción insuficiente de nutrientes. Marasmo (déficit calórico) y Kwashiorkor (déficit proteico). Retrasa la curación, debilita el sistema inmune y reduce la fuerza muscular.",
    defRO: "Stare patologică prin ingerare sau absorbție insuficientă de nutrienți. Marasm (deficit caloric) și Kwashiorkor (deficit proteic). Întârzie vindecarea, slăbește sistemul imunitar și reduce forța musculară.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_d_desviacion_tabique",
    termES: "Desviación del Tabique (Nasal)",
    termRO: "Deviație de Sept (Nazal)",
    categoryColor: "bg-slate-50",
    defES: "Desplazamiento lateral de la pared (tabique) que divide las fosas nasales. Puede ser congénita o traumática. Causa obstrucción nasal, sinusitis recurrente, epistaxis y ronquidos. Tratamiento: septoplastia.",
    defRO: "Deplasare laterală a peretelui (sept) care împarte fosele nazale. Poate fi congenitală sau traumatică. Cauzează obstrucție nazală, sinuzită recurentă, epistaxis și sforăit. Tratament: septoplastie.",
    nanda: null
}, {
    id: "v_d_dextrosa",
    termES: "Dextrosa",
    termRO: "Dextroză",
    categoryColor: "bg-yellow-50",
    defES: "Nombre común de la d-glucosa en farmacología. Soluciones intravenosas de dextrosa (5%, 10%, 50%) se usan para aportar calorías, tratar hipoglucemia o como vehículo de fármacos.",
    defRO: "Nume comun al d-glucozei în farmacologie. Soluțiile intravenoase de dextroză (5%, 10%, 50%) se folosesc pentru a furniza calorii, a trata hipoglicemia sau ca vehicul pentru medicamente.",
    nanda: null
}, {
    id: "v_d_diabetes_insipida",
    termES: "Diabetes Insípida",
    termRO: "Diabet Insipid",
    categoryColor: "bg-blue-50",
    defES: "Trastorno caracterizado por la excreción de grandes volúmenes de orina diluida (poliuria) y sed extrema (polidipsia), debido al déficit de hormona antidiurética (ADH) o resistencia renal a ella. No relacionado con la glucosa.",
    defRO: "Tulburare caracterizată prin excreția unor volume mari de urină diluată (poliurie) și sete extremă (polidipsie), datorită deficitului de hormon antidiuretic (ADH) sau rezistenței renale la acesta. Nu are legătură cu glucoza.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_d_diabetes_mellitus",
    termES: "Diabetes Mellitus",
    termRO: "Diabet Zaharat",
    categoryColor: "bg-orange-50",
    defES: "Grupo de enfermedades metabólicas caracterizadas por hiperglucemia crónica debida a defectos en la secreción y/o acción de la insulina. Tipo 1 (autoinmune, insulinodependiente), Tipo 2 (resistencia, más común), Gestacional.",
    defRO: "Grup de boli metabolice caracterizate prin hiperglicemie cronică datorată defectelor în secreția și/sau acțiunea insulinei. Tip 1 (autoimun, insulinodependent), Tip 2 (rezistență, mai frecvent), Gestational.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_d_diaforesis",
    termES: "Diaforesis",
    termRO: "Diaforeză",
    categoryColor: "bg-blue-50",
    defES: "Sudoración profusa y abundante, a menudo como respuesta fisiológica (ejercicio, calor) o síntoma de enfermedad (fiebre, hipoglucemia, infarto de miocardio, shock).",
    defRO: "Transpirație profuză și abundentă, adesea ca răspuns fiziologic (exercițiu, căldură) sau simptom de boală (febră, hipoglicemie, infarct miocardic, șoc).",
    nanda: null
}, {
    id: "v_d_diafragma",
    termES: "Diafragma",
    termRO: "Diafragmă",
    categoryColor: "bg-red-50",
    defES: "Músculo principal de la respiración con forma de cúpula que separa la cavidad torácica de la abdominal. Al contraerse desciende, expandiendo los pulmones (inspiración). Inervado por el nervio frénico.",
    defRO: "Mușchi principal al respirației în formă de cupolă care separă cavitatea toracică de cea abdominală. La contracție coboară, extinzând plămânii (inspirație). Inervat de nervul frenic.",
    nanda: null
}, {
    id: "v_d_diagnostico",
    termES: "Diagnóstico",
    termRO: "Diagnostic",
    categoryColor: "bg-stone-50",
    defES: "Identificación de una enfermedad o condición mediante la evaluación de signos, síntomas, historia clínica y pruebas complementarias. Diagnóstico Enfermero: Juicio clínico sobre la respuesta humana a problemas de salud (NANDA).",
    defRO: "Identificarea unei boli sau condiții prin evaluarea semnelor, simptomelor, istoricului medical și testelor complementare. Diagnostic de Nursing: Judecată clinică despre răspunsul uman la problemele de sănătate (NANDA).",
    nanda: null
}, {
    id: "v_d_dialisis",
    termES: "Diálisis",
    termRO: "Dializă",
    categoryColor: "bg-teal-50",
    defES: "Proceso artificial para eliminar productos de desecho (urea, creatinina) y exceso de agua de la sangre cuando los riñones fallan. Tipos: Hemodiálisis (filtro externo) y Diálisis Peritoneal (peritoneo como membrana).",
    defRO: "Proces artificial pentru eliminarea produșilor reziduali (uree, creatinină) și excesului de apă din sânge când rinichii cedează. Tipuri: Hemodializă (filtru extern) și Dializă Peritoneală (peritoneu ca membrană).",
    nanda: null
}, {
    id: "v_d_diapedesis",
    termES: "Diapédesis",
    termRO: "Diapedeză",
    categoryColor: "bg-red-50",
    defES: "Paso de células sanguíneas (especialmente leucocitos) a través de las paredes intactas de los capilares hacia los tejidos circundantes, fundamental en la respuesta inflamatoria e inmune.",
    defRO: "Trecerea celulelor sanguine (în special leucocite) prin pereții intacți ai capilarelor către țesuturile înconjurătoare, fundamentală în răspunsul inflamator și imun.",
    nanda: null
}, {
    id: "v_d_diarrea",
    termES: "Diarrea",
    termRO: "Diaree",
    categoryColor: "bg-orange-50",
    defES: "Evacuación frecuente (>3/día) de heces sueltas o líquidas. Aguda: infecciosa (virus, bacterias). Crónica: >4 semanas (EII, malabsorción). Riesgo de deshidratación y desequilibrio electrolítico.",
    defRO: "Evacuare frecventă (>3/zi) de scaune moi sau lichide. Acută: infecțioasă (virusuri, bacterii). Cronică: >4 săptămâni (BII, malabsorbție). Risc de deshidratare și dezechilibru electrolitic.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_d_diastole",
    termES: "Diástole",
    termRO: "Diastolă",
    categoryColor: "bg-red-50",
    defES: "Fase del ciclo cardíaco en la que el músculo del corazón se relaja y las cámaras se llenan de sangre. Diástole ventricular: llenado de ventrículos. Presión diastólica: valor mínimo de TA.",
    defRO: "Faza ciclului cardiac în care mușchiul inimii se relaxează și camerele se umplu cu sânge. Diastolă ventriculară: umplerea ventriculelor. Presiune diastolică: valoarea minimă a TA.",
    nanda: null
}, {
    id: "v_d_dieta",
    termES: "Dieta",
    termRO: "Dietă",
    categoryColor: "bg-green-50",
    defES: "Patrón de ingesta de alimentos y líquidos. Terapéutica: modificada para tratar enfermedades (ej. hiposódica, diabética, blanda, absoluta/NPO).",
    defRO: "Model de ingerare a alimentelor și lichidelor. Terapeutică: modificată pentru tratarea bolilor (ex. hiposodică, diabetică, moale, absolută/NPO).",
    nanda: null
}, {
    id: "v_d_difusion",
    termES: "Difusión",
    termRO: "Difuzie",
    categoryColor: "bg-blue-50",
    defES: "Movimiento pasivo de moléculas desde una zona de mayor concentración a una de menor concentración hasta el equilibrio. Base del intercambio gaseoso (O2/CO2) en los alvéolos.",
    defRO: "Mișcare pasivă a moleculelor dintr-o zonă cu concentrație mai mare într-una cu concentrație mai mică până la echilibru. Baza schimbului gazos (O2/CO2) în alveole.",
    nanda: null
}, {
    id: "v_d_digital",
    termES: "Digital",
    termRO: "Digital",
    categoryColor: "bg-green-50",
    defES: "1. Relativo a los dedos. 2. Fármaco (Digoxina) derivado de la planta Digitalis purpurea, inotrópico positivo (aumenta fuerza contracción) y cronotrópico negativo (reduce FC). Margen terapéutico estrecho.",
    defRO: "1. Referitor la degete. 2. Medicament (Digoxin) derivat din planta Digitalis purpurea, inotrop pozitiv (crește forța contracției) și cronotrop negativ (reduce FC). Marjă terapeutică îngustă.",
    nanda: null
}, {
    id: "v_d_dilatacion",
    termES: "Dilatación",
    termRO: "Dilatație",
    categoryColor: "bg-pink-50",
    defES: "Aumento del diámetro de una abertura o estructura tubular. Dilatación cervical: apertura del cuello uterino en el parto (hasta 10 cm). Vasodilatación: ensanchamiento de vasos sanguíneos.",
    defRO: "Creșterea diametrului unei deschideri sau structuri tubulare. Dilatație cervicală: deschiderea colului uterin la naștere (până la 10 cm). Vasodilatație: lărgirea vaselor de sânge.",
    nanda: null
}, {
    id: "v_d_diplopia",
    termES: "Diplopía",
    termRO: "Diplopie",
    categoryColor: "bg-stone-50",
    defES: "Visión doble. Percepción de dos imágenes de un solo objeto. Binocular (desalineación ejes visuales, estrabismo) o Monocular (catarata, astigmatismo). Riesgo de caídas.",
    defRO: "Vedere dublă. Percepția a două imagini ale unui singur obiect. Binoculară (nealinierea axelor vizuale, strabism) sau Monoculară (cataractă, astigmatism). Risc de cădere.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_d_disartria",
    termES: "Disartria",
    termRO: "Dizartrie",
    categoryColor: "bg-indigo-50",
    defES: 'Dificultad para articular palabras debido a debilidad o falta de coordinación de los músculos del habla (lengua, labios, faringe). El lenguaje es correcto gramaticalmente pero difícil de entender (habla "pastosa"). Común en ictus.',
    defRO: 'Dificultate de a articula cuvinte din cauza slăbiciunii sau lipsei de coordonare a mușchilor vorbirii (limbă, buze, faringe). Limbajul este corect gramatical dar greu de înțeles (vorbire "păstoasă"). Comună în AVC.',
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_d_discapacidad",
    termES: "Discapacidad",
    termRO: "Dizabilitate",
    categoryColor: "bg-stone-50",
    defES: "Limitación funcional o restricción en la capacidad de realizar una actividad dentro del margen que se considera normal, resultante de una deficiencia física, sensorial, mental o intelectual.",
    defRO: "Limitare funcțională sau restricție în capacitatea de a desfășura o activitate în limitele considerate normale, rezultată dintr-o deficiență fizică, senzorială, mentală sau intelectuală.",
    nanda: null
}, {
    id: "v_d_discinesia",
    termES: "Discinesia",
    termRO: "Diskinezie",
    categoryColor: "bg-purple-50",
    defES: "Movimiento muscular involuntario, anormal y descontrolado. Discinesia tardía: efecto adverso grave de antipsicóticos (movimientos repetitivos de boca y lengua).",
    defRO: "Mișcare musculară involuntară, anormală și necontrolată. Diskinezie tardivă: efect advers grav al antipsihoticelor (mișcări repetitive ale gurii și limbii).",
    nanda: null
}, {
    id: "v_d_disco",
    termES: "Disco Intervertebral",
    termRO: "Disc Intervertebral",
    categoryColor: "bg-stone-50",
    defES: "Estructura fibrocartilaginosa situada entre las vértebras que actúa como amortiguador. Consta de un anillo fibroso externo y un núcleo pulposo interno. Su rotura provoca hernia discal.",
    defRO: "Structură fibrocartilaginoasă situată între vertebre care acționează ca amortizor. Constă dintr-un inel fibros extern și un nucleu pulpos intern. Ruptura sa provoacă hernie de disc.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_d_disfagia",
    termES: "Disfagia",
    termRO: "Disfagie",
    categoryColor: "bg-teal-50",
    defES: "Dificultad o imposibilidad para tragar (deglutir) alimentos o líquidos. Puede ser orofaríngea (inicio) o esofágica (transporte). Alto riesgo de aspiración y desnutrición.",
    defRO: "Dificultate sau imposibilitate de a înghiți (degluti) alimente sau lichide. Poate fi orofaringiană (inițiere) sau esofagiană (transport). Risc ridicat de aspirație și malnutriție.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_d_disnea",
    termES: "Disnea",
    termRO: "Dispnee",
    categoryColor: "bg-sky-50",
    defES: 'Sensación subjetiva y desagradable de falta de aire o dificultad para respirar ("sed de aire"). Síntoma cardinal en patología respiratoria (asma, EPOC) y cardíaca (insuficiencia cardíaca).',
    defRO: 'Senzație subiectivă și neplăcută de lipsă de aer sau dificultate în respirație ("sete de aer"). Simptom cardinal în patologia respiratorie (astm, BPOC) și cardiacă (insuficiență cardiacă).',
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_d_dispareunia",
    termES: "Dispareunia",
    termRO: "Dispareunie",
    categoryColor: "bg-pink-50",
    defES: "Dolor genital persistente o recurrente antes, durante o después de la relación sexual. Causas: sequedad vaginal, infecciones, endometriosis o factores psicológicos.",
    defRO: "Durere genitală persistentă sau recurentă înainte, în timpul sau după actul sexual. Cauze: uscăciune vaginală, infecții, endometrioză sau factori psihologici.",
    nanda: {
        codeES: "00059",
        codeRO: "00059",
        labelES: "Disfunción sexual",
        labelRO: "Disfuncție sexuală"
    }
}, {
    id: "v_d_dispepsia",
    termES: "Dispepsia",
    termRO: "Dispepsie",
    categoryColor: "bg-orange-50",
    defES: "Malestar o dolor en la parte superior del abdomen (epigastrio), a menudo descrito como indigestión, plenitud, hinchazón o ardor. Puede ser funcional o ulcerosa.",
    defRO: "Disconfort sau durere în partea superioară a abdomenului (epigastru), adesea descrisă ca indigestie, plenitudine, balonare sau arsură. Poate fi funcțională sau ulceroasă.",
    nanda: null
}, {
    id: "v_d_distension",
    termES: "Distensión",
    termRO: "Distensie",
    categoryColor: "bg-yellow-50",
    defES: "Estiramiento excesivo o hinchazón de una parte del cuerpo. Distensión abdominal: por gases, líquido (ascitis) o masas. Distensión vesical: globo vesical por retención urinaria.",
    defRO: "Întindere excesivă sau umflare a unei părți a corpului. Distensie abdominală: de la gaze, lichid (ascită) sau mase. Distensie vezicală: glob vezical prin retenție urinară.",
    nanda: null
}, {
    id: "v_d_distocia",
    termES: "Distocia",
    termRO: "Distocie",
    categoryColor: "bg-pink-50",
    defES: "Parto difícil, lento o anormal debido a problemas con las fuerzas expulsivas (útero), el feto (tamaño, posición) o el canal del parto (pelvis estrecha). Frecuente indicación de cesárea.",
    defRO: "Naștere dificilă, lentă sau anormală din cauza problemelor cu forțele expulzive (uter), făt (dimensiune, poziție) sau canalul de naștere (pelvis îngust). Indicație frecventă de cezariană.",
    nanda: null
}, {
    id: "v_d_disuria",
    termES: "Disuria",
    termRO: "Disurie",
    categoryColor: "bg-yellow-50",
    defES: "Dolor, ardor o molestia al orinar. Síntoma clásico de infección del tracto urinario inferior (cistitis, uretritis).",
    defRO: "Durere, arsură sau disconfort la urinare. Simptom clasic al infecției tractului urinar inferior (cistită, uretrită).",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_d_diuresis",
    termES: "Diuresis",
    termRO: "Diureză",
    categoryColor: "bg-blue-50",
    defES: "Secreción y excreción de orina por el riñón. Diuresis normal: 800-2000 ml/día. Poliuria (>2.5L), Oliguria (<400ml), Anuria (<100ml).",
    defRO: "Secreția și excreția urinei de către rinichi. Diureză normală: 800-2000 ml/zi. Poliurie (>2.5L), Oligurie (<400ml), Anurie (<100ml).",
    nanda: null
}, {
    id: "v_d_diuretico",
    termES: "Diurético",
    termRO: "Diuretic",
    categoryColor: "bg-teal-50",
    defES: "Fármaco que aumenta la producción de orina y la eliminación de sodio y agua. Usado en hipertensión, insuficiencia cardíaca y edemas. Tipos: Tiazidas, Asa (Furosemida), Ahorradores de potasio.",
    defRO: "Medicament care crește producția de urină și eliminarea sodiului și apei. Folosit în hipertensiune, insuficiență cardiacă și edeme. Tipuri: Tiazide, Ansa (Furosemid), Economisitoare de potasiu.",
    nanda: null
}, {
    id: "v_d_diverticulitis",
    termES: "Diverticulitis",
    termRO: "Diverticulită",
    categoryColor: "bg-red-50",
    defES: "Inflamación o infección de uno o más divertículos (pequeñas bolsas en la pared del colon). Causa dolor en fosa ilíaca izquierda, fiebre y cambio hábito intestinal. Puede perforarse.",
    defRO: "Inflamația sau infecția unuia sau mai multor diverticuli (mici pungi în peretele colonului). Cauzează durere în fosa iliacă stângă, febră și schimbarea tranzitului intestinal. Se poate perfora.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_d_dolor",
    termES: "Dolor",
    termRO: "Durere",
    categoryColor: "bg-red-50",
    defES: 'Experiencia sensorial y emocional desagradable asociada a daño tisular real o potencial. El "quinto signo vital". Subjetivo (lo que el paciente dice). Agudo (<3 meses) o Crónico.',
    defRO: 'Experiență senzorială și emoțională neplăcută asociată cu leziuni tisulare reale sau potențiale. "Al cincilea semn vital". Subiectiv (ceea ce spune pacientul). Acută (<3 luni) sau Cronică.',
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_d_dolor_fantasma",
    termES: "Dolor Fantasma",
    termRO: "Durere Fantomă",
    categoryColor: "bg-purple-50",
    defES: "Sensación dolorosa percibida en una parte del cuerpo que ha sido amputada o que ya no existe (miembro fantasma). Es un dolor neuropático real, no imaginario.",
    defRO: "Senzație dureroasă percepută într-o parte a corpului care a fost amputată sau care nu mai există (membru fantomă). Este o durere neuropată reală, nu imaginară.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_d_dopamina",
    termES: "Dopamina",
    termRO: "Dopamină",
    categoryColor: "bg-indigo-50",
    defES: "Neurotransmisor catecolamina (placer, recompensa, motor). Como fármaco, es un inotrópico y vasopresor usado en shock y fallo cardíaco para aumentar la presión arterial y gasto cardíaco.",
    defRO: "Neurotransmițător catecolamină (plăcere, recompensă, motor). Ca medicament, este un inotrop și vasopresor folosit în șoc și insuficiență cardiacă pentru a crește tensiunea arterială și debitul cardiac.",
    nanda: null
}, {
    id: "v_d_doppler",
    termES: "Doppler (Ecografía)",
    termRO: "Doppler (Ecografie)",
    categoryColor: "bg-blue-50",
    defES: "Técnica de ultrasonido que evalúa el flujo sanguíneo (dirección y velocidad) en vasos y corazón. Doppler fetal: escucha latido fetal. Doppler vascular: diagnostica TVP o estenosis arterial.",
    defRO: "Tehnică de ultrasunete care evaluează fluxul sanguin (direcție și viteză) în vase și inimă. Doppler fetal: ascultă bătăile inimii fetale. Doppler vascular: diagnostică TVP sau stenoza arterială.",
    nanda: null
}, {
    id: "v_d_dorsal",
    termES: "Dorsal",
    termRO: "Dorsal",
    categoryColor: "bg-stone-50",
    defES: "Relativo a la espalda (dorso) o a la superficie posterior de una parte del cuerpo (ej. dorso de la mano). Columna dorsal (torácica): 12 vértebras.",
    defRO: "Referitor la spate (dors) sau la suprafața posterioară a unei părți a corpului (ex. dosul mâinii). Coloana dorsală (toracică): 12 vertebre.",
    nanda: null
}, {
    id: "v_d_dosis",
    termES: "Dosis",
    termRO: "Doză",
    categoryColor: "bg-teal-50",
    defES: "Cantidad exacta de un medicamento o radiación que se administra a un paciente en un momento dado o intervalo. Dosis letal, dosis de carga, dosis de mantenimiento.",
    defRO: "Cantitatea exactă a unui medicament sau radiații care se administrează unui pacient la un moment dat sau interval. Doză letală, doză de încărcare, doză de întreținere.",
    nanda: null
}, {
    id: "v_d_drenaje",
    termES: "Drenaje",
    termRO: "Drenaj",
    categoryColor: "bg-cyan-50",
    defES: "Retirada de líquidos (sangre, pus, suero) o gases de una cavidad corporal o herida, ya sea de forma pasiva (gravedad, ej. Penrose) o activa (succión, ej. Jackson-Pratt, Pleur-evac).",
    defRO: "Îndepărtarea lichidelor (sânge, puroi, ser) sau gazelor dintr-o cavitate corporală sau rană, fie în mod pasiv (gravitație, ex. Penrose) sau activ (sucțiune, ex. Jackson-Pratt, Pleur-evac).",
    nanda: null
}, {
    id: "v_d_duelo",
    termES: "Duelo",
    termRO: "Doliu",
    categoryColor: "bg-purple-50",
    defES: "Proceso psicológico natural de adaptación emocional y cognitiva ante una pérdida significativa (muerte, salud, empleo). Fases (Kübler-Ross): Negación, Ira, Negociación, Depresión, Aceptación.",
    defRO: "Proces psihologic natural de adaptare emoțională și cognitivă la o pierdere semnificativă (moarte, sănătate, loc de muncă). Faze (Kübler-Ross): Negare, Furie, Negociere, Depresie, Acceptare.",
    nanda: {
        codeES: "00136",
        codeRO: "00136",
        labelES: "Duelo",
        labelRO: "Doliu"
    }
}, {
    id: "v_d_duodeno",
    termES: "Duodeno",
    termRO: "Duoden",
    categoryColor: "bg-yellow-50",
    defES: "Primera porción del intestino delgado (aprox. 25 cm), en forma de C, que conecta el estómago con el yeyuno. Recibe el quimo ácido, la bilis y el jugo pancreático. Sitio frecuente de úlceras.",
    defRO: "Prima porțiune a intestinului subțire (aprox. 25 cm), în formă de C, care conectează stomacul cu jejunul. Primește chimul acid, bila și sucul pancreatic. Loc frecvent de ulcere.",
    nanda: null
}, {
    id: "v_d_duramadre",
    termES: "Duramadre",
    termRO: "Dura mater",
    categoryColor: "bg-stone-50",
    defES: "La más externa, gruesa y resistente de las tres meninges que protegen el cerebro y la médula espinal. Hematoma epidural (sobre dura) vs Subdural (bajo dura).",
    defRO: "Cea mai externă, groasă și rezistentă dintre cele trei meninge care protejează creierul și măduva spinării. Hematom epidural (peste dura) vs Subdural (sub dura).",
    nanda: null
}, {
    id: "v_e_ebola",
    termES: "Ébola (Virus del)",
    termRO: "Ebola (Virusul)",
    categoryColor: "bg-red-50",
    defES: "Filovirus causante de una fiebre hemorrágica viral grave y a menudo mortal. Se transmite por contacto directo con fluidos corporales infectados. Requiere medidas de aislamiento estricto y uso de EPI de alto nivel.",
    defRO: "Filovirus care provoacă o febră hemoragică virală gravă și adesea fatală. Se transmite prin contact direct cu fluide corporale infectate. Necesită măsuri de izolare strictă și utilizarea EPI de nivel înalt.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_e_eclampsia",
    termES: "Eclampsia",
    termRO: "Eclampsie",
    categoryColor: "bg-purple-50",
    defES: "Complicación grave de la preeclampsia caracterizada por la aparición de convulsiones tonicoclónicas generalizadas o coma en una gestante hipertensa, no atribuibles a otras causas cerebrales. Emergencia obstétrica.",
    defRO: "Complicație gravă a preeclampsiei caracterizată prin apariția convulsiilor tonico-clonice generalizate sau a comei la o gravidă hipertensivă, neatribuibile altor cauze cerebrale. Urgență obstetricală.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_e_ecocardiografia",
    termES: "Ecocardiografía",
    termRO: "Ecocardiografie",
    categoryColor: "bg-blue-50",
    defES: "Técnica de diagnóstico por imagen no invasiva que utiliza ultrasonidos para visualizar la estructura (válvulas, paredes) y función (fracción de eyección, flujo) del corazón. Puede ser transtorácica o transesofágica.",
    defRO: "Tehnică de diagnostic imagistic non-invazivă care utilizează ultrasunete pentru a vizualiza structura (valve, pereți) și funcția (fracția de ejecție, fluxul) inimii. Poate fi transtoracică sau transesofagiană.",
    nanda: null
}, {
    id: "v_e_ecografia",
    termES: "Ecografía (Ultrasonido)",
    termRO: "Ecografie (Ultrasunete)",
    categoryColor: "bg-blue-50",
    defES: "Técnica de imagen que emplea ondas sonoras de alta frecuencia para producir imágenes de órganos internos, tejidos blandos y flujo sanguíneo en tiempo real. Segura en embarazo (sin radiación).",
    defRO: "Tehnică imagistică ce folosește unde sonore de înaltă frecvență pentru a produce imagini ale organelor interne, țesuturilor moi și fluxului sanguin în timp real. Sigură în sarcină (fără radiații).",
    nanda: null
}, {
    id: "v_e_ectasia",
    termES: "Ectasia",
    termRO: "Ectazie",
    categoryColor: "bg-orange-50",
    defES: "Dilatación o distensión de una estructura tubular. Ej. Bronquiectasia (bronquios), Ectasia ductal (conductos mamarios). Generalmente implica estasis de fluidos.",
    defRO: "Dilatare sau distensie a unei structuri tubulare. Ex. Bronșiectazie (bronhii), Ectazie ductală (canale mamare). De obicei implică stază a fluidelor.",
    nanda: null
}, {
    id: "v_e_ectopia",
    termES: "Ectopia",
    termRO: "Ectopie",
    categoryColor: "bg-stone-50",
    defES: "Ubicación anormal de un órgano o tejido fuera de su lugar habitual. Ej. Embarazo ectópico (fuera del útero), Latido ectópico (extrasístole).",
    defRO: "Amplasare anormală a unui organ sau țesut în afara locului său obișnuit. Ex. Sarcină ectopică (în afara uterului), Bătaie ectopică (extrasistolă).",
    nanda: null
}, {
    id: "v_e_ectropion",
    termES: "Ectropión",
    termRO: "Ectropion",
    categoryColor: "bg-pink-50",
    defES: "Eversión (giro hacia afuera) del borde del párpado, exponiendo la conjuntiva. Causa sequedad ocular, epífora e irritación. Común en ancianos por laxitud tisular.",
    defRO: "Eversiune (întoarcere spre exterior) a marginii pleoapei, expunând conjunctiva. Cauzează uscăciune oculară, epifora și iritație. Comună la vârstnici din cauza laxității țesuturilor.",
    nanda: null
}, {
    id: "v_e_eccema",
    termES: "Eccema (Eczema)",
    termRO: "Eczemă",
    categoryColor: "bg-red-50",
    defES: "Término general para la dermatitis inflamatoria de la piel caracterizada por prurito, eritema, edema, papulovesículas, exudación y costras. El eccema atópico es crónico y genético.",
    defRO: "Termen general pentru dermatita inflamatorie a pielii caracterizată prin prurit, eritem, edem, papulovezicule, exsudație și cruste. Eczema atopică este cronică și genetică.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_edema",
    termES: "Edema",
    termRO: "Edem",
    categoryColor: "bg-blue-50",
    defES: "Acumulación anormal de líquido en los espacios intersticiales de los tejidos. Signo de Fóvea positivo. Causas: insuficiencia cardíaca/renal, hipoalbuminemia, inflamación, obstrucción linfática.",
    defRO: "Acumulare anormală de lichid în spațiile interstițiale ale țesuturilor. Semnul Foveei pozitiv. Cauze: insuficiență cardiacă/renală, hipoalbuminemie, inflamație, obstrucție limfatică.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_e_edema_agudo_pulmon",
    termES: "Edema Agudo de Pulmón (EAP)",
    termRO: "Edem Pulmonar Acut (EPA)",
    categoryColor: "bg-red-50",
    defES: "Acumulación rápida de líquido en los alvéolos pulmonares que impide el intercambio gaseoso. Emergencia médica vital. Causa disnea extrema, esputo rosado espumoso y cianosis. Generalmente de origen cardiogénico (fallo ventrículo izquierdo).",
    defRO: "Acumulare rapidă de lichid în alveolele pulmonare care împiedică schimbul gazos. Urgență medicală vitală. Cauzează dispnee extremă, spută roz spumoasă și cianoză. De obicei de origine cardiogenă (insuficiență ventricul stâng).",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_e_edema_cerebral",
    termES: "Edema Cerebral",
    termRO: "Edem Cerebral",
    categoryColor: "bg-purple-50",
    defES: "Acumulación de exceso de líquido en el tejido cerebral (intracelular o extracelular), aumentando la presión intracraneal (PIC). Causa cefalea, vómitos, papiledema y deterioro de conciencia.",
    defRO: "Acumulare de exces de lichid în țesutul cerebral (intracelular sau extracelular), crescând presiunea intracraniană (PIC). Cauzează cefalee, vărsături, edem papilar și deteriorarea conștienței.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_e_edulcorante",
    termES: "Edulcorante",
    termRO: "Îndulcitor",
    categoryColor: "bg-yellow-50",
    defES: "Sustancia natural o artificial utilizada para endulzar alimentos y medicamentos, a menudo sin aportar calorías o afectando menos la glucemia (ej. sacarina, aspartamo, stevia). Útil en dietas diabéticas.",
    defRO: "Substanță naturală sau artificială utilizată pentru a îndulci alimente și medicamente, adesea fără a aduce calorii sau afectând mai puțin glicemia (ex. zaharină, aspartam, stevia). Utilă în diete diabetice.",
    nanda: null
}, {
    id: "v_e_efecto_adverso",
    termES: "Efecto Adverso",
    termRO: "Efect Advers (Reacție Adversă)",
    categoryColor: "bg-red-50",
    defES: "Cualquier respuesta nociva, no intencionada y no deseada a un medicamento que ocurre a dosis normalmente utilizadas para profilaxis, diagnóstico o tratamiento.",
    defRO: "Orice răspuns nociv, neintenționat și nedorit la un medicament care apare la doze utilizate în mod normal pentru profilaxie, diagnostic sau tratament.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_e_efecto_placebo",
    termES: "Efecto Placebo",
    termRO: "Efect Placebo",
    categoryColor: "bg-purple-50",
    defES: "Mejoría clínica o sintomática observada en un paciente tras la administración de una sustancia inerte (sin principio activo), debida a la expectativa psicológica de curación.",
    defRO: "Îmbunătățire clinică sau simptomatică observată la un pacient după administrarea unei substanțe inerte (fără principiu activ), datorată așteptării psihologice de vindecare.",
    nanda: null
}, {
    id: "v_e_eficacia",
    termES: "Eficacia",
    termRO: "Eficacitate",
    categoryColor: "bg-green-50",
    defES: "Capacidad de una intervención sanitaria (fármaco, procedimiento) para producir el resultado beneficioso deseado bajo condiciones ideales (ensayo clínico). Se distingue de la efectividad (mundo real).",
    defRO: "Capacitatea unei intervenții sanitare (medicament, procedură) de a produce rezultatul benefic dorit în condiții ideale (studiu clinic). Se distinge de eficiență (lumea reală).",
    nanda: null
}, {
    id: "v_e_efusion",
    termES: "Efusión (Derrame)",
    termRO: "Efuziune (Vărsat)",
    categoryColor: "bg-blue-50",
    defES: "Acumulación de líquido en una cavidad corporal natural (pleural, pericárdica, articular). La efusión pleural impide la expansión pulmonar completa.",
    defRO: "Acumulare de lichid într-o cavitate corporală naturală (pleurală, pericardică, articulară). Efuziunea pleurală împiedică expansiunea pulmonară completă.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_e_eje",
    termES: "Eje (Cardíaco)",
    termRO: "Ax (Cardiac)",
    categoryColor: "bg-red-50",
    defES: "Dirección media del vector de despolarización ventricular en el plano frontal del ECG. La desviación del eje puede indicar hipertrofia ventricular o bloqueo de rama.",
    defRO: "Direcția medie a vectorului de depolarizare ventriculară în planul frontal al EKG. Devierea axului poate indica hipertrofie ventriculară sau bloc de ramură.",
    nanda: null
}, {
    id: "v_e_elastina",
    termES: "Elastina",
    termRO: "Elastină",
    categoryColor: "bg-stone-50",
    defES: "Proteína del tejido conectivo que confiere elasticidad a los tejidos (piel, pulmones, arterias), permitiéndoles recuperar su forma tras estirarse. Su degradación causa arrugas y enfisema.",
    defRO: "Proteină a țesutului conjunctiv care conferă elasticitate țesuturilor (piele, plămâni, artere), permițându-le să-și recapete forma după întindere. Degradarea sa cauzează riduri și emfizem.",
    nanda: null
}, {
    id: "v_e_electrocardiograma",
    termES: "Electrocardiograma (ECG/EKG)",
    termRO: "Electrocardiogramă (EKG)",
    categoryColor: "bg-red-50",
    defES: "Registro gráfico de la actividad eléctrica del corazón. Fundamental para diagnosticar arritmias, isquemia, infarto de miocardio y trastornos electrolíticos (onda P, complejo QRS, onda T).",
    defRO: "Înregistrare grafică a activității electrice a inimii. Fundamentală pentru diagnosticarea aritmiilor, ischemiei, infarctului miocardic și tulburărilor electrolitice (unda P, complex QRS, unda T).",
    nanda: null
}, {
    id: "v_e_electrocoagulacion",
    termES: "Electrocoagulación",
    termRO: "Electrocoagulare",
    categoryColor: "bg-orange-50",
    defES: "Uso de corriente eléctrica de alta frecuencia para coagular tejidos y detener hemorragias (hemostasia) durante la cirugía. Se realiza con el bisturí eléctrico.",
    defRO: "Utilizarea curentului electric de înaltă frecvență pentru a coagula țesuturi și a opri hemoragiile (hemostază) în timpul intervenției chirurgicale. Se realizează cu bisturiul electric.",
    nanda: null
}, {
    id: "v_e_electrodo",
    termES: "Electrodo",
    termRO: "Electrod",
    categoryColor: "bg-stone-50",
    defES: "Conductor eléctrico (parche, aguja) que se aplica al cuerpo para detectar actividad eléctrica (ECG, EEG) o para aplicar corriente terapéutica (desfibrilación, marcapasos).",
    defRO: "Conductor electric (plasture, ac) care se aplică pe corp pentru a detecta activitatea electrică (EKG, EEG) sau pentru a aplica curent terapeutic (defibrilare, stimulator cardiac).",
    nanda: null
}, {
    id: "v_e_electroencefalograma",
    termES: "Electroencefalograma (EEG)",
    termRO: "Electroencefalogramă (EEG)",
    categoryColor: "bg-purple-50",
    defES: "Registro de la actividad eléctrica del cerebro mediante electrodos en el cuero cabelludo. Esencial para diagnosticar epilepsia, trastornos del sueño y muerte cerebral.",
    defRO: "Înregistrarea activității electrice a creierului prin electrozi pe scalp. Esențială pentru diagnosticarea epilepsiei, tulburărilor de somn și morții cerebrale.",
    nanda: null
}, {
    id: "v_e_electrolito",
    termES: "Electrólito",
    termRO: "Electrolit",
    categoryColor: "bg-blue-50",
    defES: "Ion libre en los fluidos corporales que conduce electricidad y es vital para la función celular. Principales: Sodio (Na+), Potasio (K+), Calcio (Ca++), Magnesio (Mg++), Cloro (Cl-).",
    defRO: "Ion liber în fluidele corporale care conduce electricitatea și este vital pentru funcția celulară. Principali: Sodiu (Na+), Potasiu (K+), Calciu (Ca++), Magneziu (Mg++), Clor (Cl-).",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_e_electromiografia",
    termES: "Electromiografía (EMG)",
    termRO: "Electromiografie (EMG)",
    categoryColor: "bg-zinc-50",
    defES: "Prueba diagnóstica que evalúa la salud de los músculos y las células nerviosas motoras (motoneuronas) que los controlan. Detecta patología neuromuscular (miastenia, ELA, túnel carpiano).",
    defRO: "Test diagnostic care evaluează sănătatea mușchilor și a celulelor nervoase motorii (motoneuroni) care îi controlează. Detectează patologia neuromusculară (miastenia, SLA, tunel carpian).",
    nanda: null
}, {
    id: "v_e_elefantiasis",
    termES: "Elefantiasis (Filariasis Linfática)",
    termRO: "Elefantiazis (Filarioză Limfatică)",
    categoryColor: "bg-stone-50",
    defES: "Engrosamiento masivo de la piel y tejidos subyacentes, generalmente en piernas y escroto, debido a obstrucción crónica de los vasos linfáticos (linfedema grave), a menudo por parásitos (filaria).",
    defRO: "Îngroșare masivă a pielii și țesuturilor subiacente, de obicei la picioare și scrot, datorită obstrucției cronice a vaselor limfatice (limfedem grav), adesea cauzată de paraziți (filaria).",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_e_eliminacion",
    termES: "Eliminación",
    termRO: "Eliminare",
    categoryColor: "bg-amber-50",
    defES: "Proceso fisiológico de expulsión de productos de desecho del cuerpo. Urinaria (riñones/vejiga) e Intestinal (colon/recto). Dominio NANDA fundamental.",
    defRO: "Proces fiziologic de expulzare a produselor reziduale din corp. Urinară (rinichi/vezică) și Intestinală (colon/rect). Domeniu NANDA fundamental.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_e_emaciacion",
    termES: "Emaciación",
    termRO: "Emaciere",
    categoryColor: "bg-stone-50",
    defES: "Adelgazamiento extremo y pérdida de masa muscular y grasa subcutánea, resultando en un aspecto esquelético. Asociada a desnutrición severa, cáncer, tuberculosis o SIDA (Wasting syndrome).",
    defRO: "Slăbire extremă și pierderea masei musculare și grăsimii subcutanate, rezultând un aspect scheletic. Asociată cu malnutriție severă, cancer, tuberculoză sau SIDA.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_e_embarazo",
    termES: "Embarazo (Gestación)",
    termRO: "Sarcină (Gestație)",
    categoryColor: "bg-pink-50",
    defES: "Estado fisiológico de la mujer que lleva un feto en desarrollo dentro del útero, desde la fecundación hasta el parto. Dura aprox. 40 semanas (280 días).",
    defRO: "Stare fiziologică a femeii care poartă un făt în dezvoltare în interiorul uterului, de la fecundare până la naștere. Durează aprox. 40 de săptămâni (280 de zile).",
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_e_embarazo_ectopico",
    termES: "Embarazo Ectópico",
    termRO: "Sarcină Ectopică",
    categoryColor: "bg-red-50",
    defES: "Implantación del óvulo fecundado fuera de la cavidad uterina, más frecuentemente en las trompas de Falopio (tubárico). Es inviable y presenta alto riesgo de rotura y hemorragia interna grave.",
    defRO: "Implantarea ovulului fecundat în afara cavității uterine, cel mai frecvent în trompele uterine (tubară). Este inviabilă și prezintă risc ridicat de ruptură și hemoragie internă gravă.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_e_embolia",
    termES: "Embolia",
    termRO: "Embolie",
    categoryColor: "bg-red-50",
    defES: "Obstrucción repentina de un vaso sanguíneo por un émbolo (coágulo, aire, grasa) que ha viajado por el torrente sanguíneo desde otro lugar. Causa isquemia distal.",
    defRO: "Obstrucție bruscă a unui vas de sânge de către un embol (cheag, aer, grăsime) care a călătorit prin torentul sanguin din alt loc. Cauzează ischemie distală.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_e_embolia_pulmonar",
    termES: "Embolia Pulmonar (TEP)",
    termRO: "Embolie Pulmonară",
    categoryColor: "bg-red-50",
    defES: "Bloqueo de una arteria pulmonar por un émbolo (generalmente un trombo de TVP de las piernas). Causa dolor torácico, disnea súbita, taquipnea y puede ser mortal.",
    defRO: "Blocarea unei artere pulmonare de către un embol (de obicei un tromb din TVP de la picioare). Cauzează durere toracică, dispnee bruscă, tahipnee și poate fi fatală.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_e_embolo",
    termES: "Émbolo",
    termRO: "Embol",
    categoryColor: "bg-red-50",
    defES: "Masa (coágulo sanguíneo, burbuja de aire, gota de grasa, fragmento tumoral) que se mueve por el torrente sanguíneo hasta que obstruye un vaso de menor calibre.",
    defRO: "Masă (cheag de sânge, bulă de aer, picătură de grăsime, fragment tumoral) care se mișcă prin torentul sanguin până când obstruează un vas de calibru mai mic.",
    nanda: null
}, {
    id: "v_e_embrion",
    termES: "Embrión",
    termRO: "Embrion",
    categoryColor: "bg-pink-50",
    defES: "Producto de la concepción en las primeras etapas de desarrollo, desde la implantación hasta la octava semana de gestación (después se llama feto). Periodo crítico de organogénesis.",
    defRO: "Produsul concepției în primele stadii de dezvoltare, de la implantare până la a opta săptămână de gestație (apoi se numește făt). Perioadă critică de organogeneză.",
    nanda: null
}, {
    id: "v_e_emergencia",
    termES: "Emergencia",
    termRO: "Urgență (Emergență)",
    categoryColor: "bg-red-50",
    defES: "Situación crítica de salud que amenaza la vida de forma inminente y requiere intervención médica inmediata (ej. parada cardíaca, hemorragia masiva, asfixia). Se diferencia de la urgencia (requiere atención rápida pero no inmediata vital).",
    defRO: "Situație critică de sănătate care amenință viața în mod iminent și necesită intervenție medicală imediată (ex. stop cardiac, hemoragie masivă, asfixie). Se diferențiază de urgență (necesită atenție rapidă, dar nu imediat vitală).",
    nanda: null
}, {
    id: "v_e_emesis",
    termES: "Emesis (Vómito)",
    termRO: "Emeză (Vărsături)",
    categoryColor: "bg-orange-50",
    defES: "Expulsión forzada del contenido gástrico a través de la boca. Coordinada por el centro del vómito en el bulbo raquídeo. Riesgo de deshidratación, alcalosis metabólica y aspiración.",
    defRO: "Expulzare forțată a conținutului gastric prin gură. Coordonată de centrul vomei din bulbul rahidian. Risc de deshidratare, alcaloză metabolică și aspirație.",
    nanda: {
        codeES: "00134",
        codeRO: "00134",
        labelES: "Náuseas",
        labelRO: "Greață"
    }
}, {
    id: "v_e_emetico",
    termES: "Emético",
    termRO: "Emetic",
    categoryColor: "bg-orange-50",
    defES: "Sustancia o fármaco que induce el vómito (ej. jarabe de ipecacuana). Su uso actual es muy limitado en toxicología (se prefiere carbón activado).",
    defRO: "Substanță sau medicament care induce vărsăturile (ex. sirop de ipeca). Utilizarea sa actuală este foarte limitată în toxicologie (se preferă cărbunele activat).",
    nanda: null
}, {
    id: "v_e_emoliente",
    termES: "Emoliente",
    termRO: "Emolient",
    categoryColor: "bg-green-50",
    defES: "Agente tópico (crema, ungüento) que ablanda y suaviza la piel, reduciendo la sequedad y descamación. Fundamental en el tratamiento de la dermatitis atópica y piel seca.",
    defRO: "Agent topic (cremă, unguent) care înmoaie și catifelează pielea, reducând uscăciunea și descuamarea. Fundamental în tratamentul dermatitei atopice și pielii uscate.",
    nanda: null
}, {
    id: "v_e_emocion",
    termES: "Emoción",
    termRO: "Emoție",
    categoryColor: "bg-purple-50",
    defES: "Respuesta psicofisiológica compleja a estímulos internos o externos, que implica sentimientos subjetivos (alegría, miedo, ira), activación fisiológica y conducta expresiva.",
    defRO: "Răspuns psihofiziologic complex la stimuli interni sau externi, care implică sentimente subiective (bucurie, frică, furie), activare fiziologică și comportament expresiv.",
    nanda: null
}, {
    id: "v_e_empatia",
    termES: "Empatía",
    termRO: "Empatie",
    categoryColor: "bg-teal-50",
    defES: "Capacidad de comprender y compartir los sentimientos y la perspectiva de otra persona (paciente) sin perder la objetividad profesional. Es la base de la relación terapéutica enfermero-paciente.",
    defRO: "Capacitatea de a înțelege și împărtăși sentimentele și perspectiva altei persoane (pacient) fără a pierde obiectivitatea profesională. Este baza relației terapeutice asistent-pacient.",
    nanda: null
}, {
    id: "v_e_empiema",
    termES: "Empiema",
    termRO: "Empiem",
    categoryColor: "bg-yellow-50",
    defES: "Acumulación de pus en una cavidad corporal anatómica preexistente, más comúnmente en el espacio pleural (empiema pleural), secundario a neumonía. Requiere drenaje torácico y antibióticos.",
    defRO: "Acumulare de puroi într-o cavitate corporală anatomică preexistentă, cel mai frecvent în spațiul pleural (empiem pleural), secundar pneumoniei. Necesită drenaj toracic și antibiotice.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_e_enalapril",
    termES: "Enalapril",
    termRO: "Enalapril",
    categoryColor: "bg-red-50",
    defES: "Fármaco antihipertensivo del grupo IECA (Inhibidor de la Enzima Convertidora de Angiotensina). Dilata los vasos sanguíneos y reduce la carga cardíaca. Efecto adverso común: tos seca.",
    defRO: "Medicament antihipertensiv din grupul IECA (Inhibitor al Enzimei de Conversie a Angiotensinei). Dilată vasele de sânge și reduce sarcina cardiacă. Efect advers comun: tuse seacă.",
    nanda: null
}, {
    id: "v_e_enanismo",
    termES: "Enanismo",
    termRO: "Nanism",
    categoryColor: "bg-stone-50",
    defES: "Condición caracterizada por una estatura baja anormal. Puede ser desproporcionado (Acondroplasia, genético) o proporcionado (déficit de hormona del crecimiento GH).",
    defRO: "Condiție caracterizată printr-o statură mică anormală. Poate fi disproporționat (Acondroplazie, genetic) sau proporționat (deficit de hormon de creștere GH).",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_e_encefalo",
    termES: "Encéfalo",
    termRO: "Encefal",
    categoryColor: "bg-indigo-50",
    defES: "Conjunto de estructuras del sistema nervioso central contenidas dentro del cráneo. Incluye el cerebro, cerebelo y tronco encefálico. Centro de control de todo el organismo.",
    defRO: "Ansamblu de structuri ale sistemului nervos central conținute în interiorul craniului. Include creierul, cerebelul și trunchiul cerebral. Centrul de control al întregului organism.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_e_encefalitis",
    termES: "Encefalitis",
    termRO: "Encefalită",
    categoryColor: "bg-red-50",
    defES: "Inflamación aguda del parénquima cerebral, generalmente de causa viral (Herpes simple, Arbovirus). Síntomas: fiebre, cefalea, alteración de conciencia, convulsiones y déficits neurológicos.",
    defRO: "Inflamația acută a parenchimului cerebral, de obicei de cauză virală (Herpes simplex, Arbovirus). Simptome: febră, cefalee, alterarea conștienței, convulsii și deficite neurologice.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_e_encefalopatia",
    termES: "Encefalopatía",
    termRO: "Encefalopatie",
    categoryColor: "bg-purple-50",
    defES: "Término general para cualquier enfermedad, daño o disfunción global del cerebro. Puede ser reversible (encefalopatía hepática por amonio) o irreversible. Causa estado mental alterado.",
    defRO: "Termen general pentru orice boală, leziune sau disfuncție globală a creierului. Poate fi reversibilă (encefalopatie hepatică prin amoniu) sau ireversibilă. Cauzează stare mentală alterată.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_e_encia",
    termES: "Encía (Gingiva)",
    termRO: "Gingie",
    categoryColor: "bg-pink-50",
    defES: "Tejido mucoso fibroso que rodea el cuello de los dientes y cubre el hueso alveolar. Su inflamación es la gingivitis (sangrado al cepillado).",
    defRO: "Țesut mucos fibros care înconjoară gâtul dinților și acoperă osul alveolar. Inflamația sa este gingivita (sângerare la periaj).",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_e_endemia",
    termES: "Endemia",
    termRO: "Endemie",
    categoryColor: "bg-green-50",
    defES: "Presencia habitual y constante de una enfermedad o agente infeccioso dentro de una zona geográfica o grupo de población determinado (ej. Malaria en ciertas zonas de África).",
    defRO: "Prezența obișnuită și constantă a unei boli sau agent infecțios într-o zonă geografică sau grup de populație determinat (ex. Malaria în anumite zone din Africa).",
    nanda: null
}, {
    id: "v_e_endocarditis",
    termES: "Endocarditis",
    termRO: "Endocardită",
    categoryColor: "bg-red-50",
    defES: "Inflamación del endocardio (revestimiento interno del corazón), generalmente afectando a las válvulas cardíacas. La endocarditis infecciosa (bacteriana) produce vegetaciones que pueden embolizar.",
    defRO: "Inflamația endocardului (căptușeala internă a inimii), afectând de obicei valvele cardiace. Endocardita infecțioasă (bacteriană) produce vegetații care pot emboliza.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_e_endocrino",
    termES: "Endocrino",
    termRO: "Endocrin",
    categoryColor: "bg-orange-50",
    defES: "Relativo a las glándulas que secretan hormonas directamente al torrente sanguíneo (sin conductos), regulando funciones a distancia. Sistema endocrino: Tiroides, Hipófisis, Páncreas, Suprarrenales.",
    defRO: "Referitor la glandele care secretă hormoni direct în torentul sanguin (fără conducte), reglând funcții la distanță. Sistem endocrin: Tiroidă, Hipofiză, Pancreas, Suprarenale.",
    nanda: null
}, {
    id: "v_e_endodoncia",
    termES: "Endodoncia",
    termRO: "Endodonție",
    categoryColor: "bg-stone-50",
    defES: 'Tratamiento odontológico ("matar el nervio") que consiste en extirpar la pulpa dental infectada o inflamada, desinfectar y sellar los conductos radiculares para salvar el diente.',
    defRO: 'Tratament stomatologic ("omorârea nervului") care constă în extirparea pulpei dentare infectate sau inflamate, dezinfectarea și sigilarea canalelor radiculare pentru a salva dintele.',
    nanda: null
}, {
    id: "v_e_endometriosis",
    termES: "Endometriosis",
    termRO: "Endometrioză",
    categoryColor: "bg-pink-50",
    defES: "Enfermedad ginecológica crónica donde tejido similar al endometrio crece fuera del útero (ovarios, trompas, peritoneo). Causa dolor pélvico cíclico intenso (dismenorrea) e infertilidad.",
    defRO: "Boală ginecologică cronică în care țesut similar endometrului crește în afara uterului (ovare, trompe, peritoneu). Cauzează durere pelvină ciclică intensă (dismenoree) și infertilitate.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_e_endometrio",
    termES: "Endometrio",
    termRO: "Endometru",
    categoryColor: "bg-pink-50",
    defES: "Mucosa que recubre el interior del útero. Experimenta cambios cíclicos hormonales y se desprende durante la menstruación si no hay fecundación. Lugar de implantación del embrión.",
    defRO: "Mucoasă care căptușește interiorul uterului. Suferă modificări ciclice hormonale și se elimină în timpul menstruației dacă nu există fecundare. Locul de implantare a embrionului.",
    nanda: null
}, {
    id: "v_e_endorfina",
    termES: "Endorfina",
    termRO: "Endorfină",
    categoryColor: "bg-blue-50",
    defES: "Neurotransmisor opioide endógeno producido por el SNC y la hipófisis. Actúa como analgésico natural y produce sensación de bienestar. Se libera con el ejercicio, dolor o risa.",
    defRO: "Neurotransmițător opioid endogen produs de SNC și hipofiză. Acționează ca analgezic natural și produce senzație de bunăstare. Se eliberează la efort, durere sau râs.",
    nanda: null
}, {
    id: "v_e_endoscopia",
    termES: "Endoscopia",
    termRO: "Endoscopie",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento médico que utiliza un tubo flexible con cámara (endoscopio) para visualizar el interior de órganos huecos o cavidades. Gastroscopia (estómago), Colonoscopia (colon).",
    defRO: "Procedură medicală care utilizează un tub flexibil cu cameră (endoscop) pentru a vizualiza interiorul organelor goale sau cavităților. Gastroscopie (stomac), Colonoscopie (colon).",
    nanda: null
}, {
    id: "v_e_endotelio",
    termES: "Endotelio",
    termRO: "Endoteliu",
    categoryColor: "bg-red-50",
    defES: "Capa única de células planas que recubre el interior de todos los vasos sanguíneos y linfáticos y el corazón. Regula el tono vascular, la coagulación y la inflamación.",
    defRO: "Strat unic de celule plate care căptușește interiorul tuturor vaselor de sânge și limfatice și inima. Reglează tonusul vascular, coagularea și inflamația.",
    nanda: null
}, {
    id: "v_e_enema",
    termES: "Enema (Lavativa)",
    termRO: "Clismă",
    categoryColor: "bg-stone-50",
    defES: "Introducción de líquido en el recto y colon a través del ano con fines terapéuticos (evacuar heces, administrar fármacos) o diagnósticos (enema de bario).",
    defRO: "Introducerea de lichid în rect și colon prin anus în scop terapeutic (evacuarea fecalelor, administrarea medicamentelor) sau diagnostic (clismă baritată).",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_e_energia",
    termES: "Energía",
    termRO: "Energie",
    categoryColor: "bg-yellow-50",
    defES: "Capacidad para realizar trabajo físico o procesos biológicos. En nutrición, se mide en kilocalorías (kcal). El ATP es la moneda energética celular.",
    defRO: "Capacitatea de a efectua muncă fizică sau procese biologice. În nutriție, se măsoară în kilocalorii (kcal). ATP este moneda energetică celulară.",
    nanda: {
        codeES: "00093",
        codeRO: "00093",
        labelES: "Fatiga",
        labelRO: "Oboseală"
    }
}, {
    id: "v_e_enfermedad",
    termES: "Enfermedad",
    termRO: "Boală",
    categoryColor: "bg-gray-50",
    defES: "Alteración del estado fisiológico normal de una parte o totalidad del cuerpo, manifestada por signos y síntomas característicos, y con una etiología, patología y pronóstico conocidos.",
    defRO: "Alterarea stării fiziologice normale a unei părți sau a întregului corp, manifestată prin semne și simptome caracteristice, și cu o etiologie, patologie și prognostic cunoscute.",
    nanda: null
}, {
    id: "v_e_enfermedad_autoinmune",
    termES: "Enfermedad Autoinmune",
    termRO: "Boală Autoimună",
    categoryColor: "bg-red-50",
    defES: "Trastorno en el que el sistema inmunitario ataca por error a las células y tejidos sanos del propio cuerpo. Ejemplos: Lupus (LES), Artritis Reumatoide, Diabetes Tipo 1.",
    defRO: "Tulburare în care sistemul imunitar atacă din greșeală celulele și țesuturile sănătoase ale propriului corp. Exemple: Lupus (LES), Artrită Reumatoidă, Diabet Tip 1.",
    nanda: null
}, {
    id: "v_e_enfermedad_cronica",
    termES: "Enfermedad Crónica",
    termRO: "Boală Cronică",
    categoryColor: "bg-stone-50",
    defES: "Afección de larga duración (>3 meses) y progresión generalmente lenta. No suelen curarse espontáneamente y raramente se curan por completo. Ej. EPOC, Cardiopatía, Diabetes.",
    defRO: "Afecțiune de lungă durată (>3 luni) și progresie în general lentă. Nu se vindecă de obicei spontan și rareori se vindecă complet. Ex. BPOC, Cardiopatie, Diabet.",
    nanda: {
        codeES: "00078",
        codeRO: "00078",
        labelES: "Gestión ineficaz de la salud",
        labelRO: "Gestionare ineficientă a sănătății"
    }
}, {
    id: "v_e_enfermeria",
    termES: "Enfermería",
    termRO: "Asistență Medicală (Nursing)",
    categoryColor: "bg-teal-50",
    defES: "Ciencia y arte dedicados al cuidado integral de la salud del individuo, familia y comunidad. Abarca la promoción de la salud, prevención de la enfermedad y cuidados a enfermos, discapacitados y moribundos.",
    defRO: "Știință și artă dedicate îngrijirii integrale a sănătății individului, familiei și comunității. Cuprinde promovarea sănătății, prevenirea bolilor și îngrijirea bolnavilor, persoanelor cu dizabilități și muribunzilor.",
    nanda: null
}, {
    id: "v_e_enfisema",
    termES: "Enfisema",
    termRO: "Emfizem",
    categoryColor: "bg-sky-50",
    defES: "Enfermedad pulmonar crónica (tipo de EPOC) caracterizada por la destrucción de las paredes alveolares, creando grandes espacios aéreos (bullas) y atrapamiento de aire. Causa disnea progresiva.",
    defRO: "Boală pulmonară cronică (tip de BPOC) caracterizată prin distrugerea pereților alveolari, creând spații aeriene mari (bule) și captarea aerului. Cauzează dispnee progresivă.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_e_enteral",
    termES: "Enteral",
    termRO: "Enteral",
    categoryColor: "bg-green-50",
    defES: "Relativo al intestino. Vía enteral: administración de alimentos o fármacos a través del tracto gastrointestinal (oral, sublingual, rectal o sonda).",
    defRO: "Referitor la intestin. Cale enterală: administrarea alimentelor sau medicamentelor prin tractul gastrointestinal (oral, sublingual, rectal sau sondă).",
    nanda: null
}, {
    id: "v_e_enteritis",
    termES: "Enteritis",
    termRO: "Enterită",
    categoryColor: "bg-orange-50",
    defES: "Inflamación del intestino delgado, generalmente causada por infección (virus, bacterias) o radiación. Provoca diarrea, dolor abdominal, fiebre y deshidratación.",
    defRO: "Inflamația intestinului subțire, cauzată de obicei de infecție (virusuri, bacterii) sau radiații. Provoacă diaree, durere abdominală, febră și deshidratare.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_e_entorno",
    termES: "Entorno",
    termRO: "Mediu (Înconjurător)",
    categoryColor: "bg-stone-50",
    defES: "Conjunto de factores físicos, químicos, biológicos y sociales externos a una persona. En enfermería (Teoría de Nightingale), la manipulación del entorno es clave para la recuperación del paciente.",
    defRO: "Ansamblu de factori fizici, chimici, biologici și sociali externi unei persoane. În nursing (Teoria Nightingale), manipularea mediului este cheie pentru recuperarea pacientului.",
    nanda: null
}, {
    id: "v_e_entropion",
    termES: "Entropión",
    termRO: "Entropion",
    categoryColor: "bg-pink-50",
    defES: "Inversión (giro hacia adentro) del borde del párpado, haciendo que las pestañas rocen contra la córnea. Causa dolor, úlceras corneales y cicatrices. Requiere cirugía.",
    defRO: "Inversiune (întoarcere spre interior) a marginii pleoapei, făcând ca genele să se frece de cornee. Cauzează durere, ulcere corneene și cicatrici. Necesită chirurgie.",
    nanda: null
}, {
    id: "v_e_enuresis",
    termES: "Enuresis",
    termRO: "Enurezis",
    categoryColor: "bg-yellow-50",
    defES: "Emisión involuntaria de orina, generalmente durante el sueño (enuresis nocturna), en niños que ya deberían controlar la vejiga (>5 años). Puede ser primaria o secundaria (regresión).",
    defRO: "Emisie involuntară de urină, de obicei în timpul somnului (enurezis nocturn), la copiii care ar trebui să controleze deja vezica (>5 ani). Poate fi primar sau secundar (regresie).",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_e_envejecimiento",
    termES: "Envejecimiento",
    termRO: "Îmbătrânire",
    categoryColor: "bg-stone-50",
    defES: "Proceso biológico natural, progresivo e irreversible de deterioro de las funciones fisiológicas y capacidad de adaptación del organismo con el paso del tiempo. Aumenta la vulnerabilidad a enfermedades.",
    defRO: "Proces biologic natural, progresiv și ireversibil de deteriorare a funcțiilor fiziologice și capacității de adaptare a organismului odată cu trecerea timpului. Crește vulnerabilitatea la boli.",
    nanda: {
        codeES: "00305",
        codeRO: "00305",
        labelES: "Riesgo de fragilidad del anciano",
        labelRO: "Risc de fragilitate la vârstnic"
    }
}, {
    id: "v_e_enzima",
    termES: "Enzima",
    termRO: "Enzimă",
    categoryColor: "bg-green-50",
    defES: "Proteína que actúa como catalizador biológico, acelerando las reacciones químicas del cuerpo sin consumirse. Ej. Amilasa (digestión), Troponina (marcador cardíaco), CK.",
    defRO: "Proteină care acționează ca un catalizator biologic, accelerând reacțiile chimice ale corpului fără a se consuma. Ex. Amilază (digestie), Troponină (marker cardiac), CK.",
    nanda: null
}, {
    id: "v_e_eosinofilo",
    termES: "Eosinófilo",
    termRO: "Eozinofil",
    categoryColor: "bg-red-50",
    defES: "Tipo de leucocito granulocito implicado en la defensa contra parásitos y en la respuesta alérgica. La eosinofilia es el aumento de su recuento en sangre.",
    defRO: "Tip de leucocit granulocit implicat în apărarea împotriva paraziților și în răspunsul alergic. Eozinofilia este creșterea numărului lor în sânge.",
    nanda: null
}, {
    id: "v_e_epidemia",
    termES: "Epidemia",
    termRO: "Epidemie",
    categoryColor: "bg-red-50",
    defES: "Aparición de casos de una enfermedad en una comunidad o región en número claramente superior al esperado durante un periodo de tiempo determinado. Si es global, es pandemia.",
    defRO: "Apariția cazurilor unei boli într-o comunitate sau regiune în număr clar superior celui așteptat într-o perioadă de timp determinată. Dacă este globală, este pandemie.",
    nanda: null
}, {
    id: "v_e_epidemiologia",
    termES: "Epidemiología",
    termRO: "Epidemiologie",
    categoryColor: "bg-blue-50",
    defES: "Estudio de la distribución y determinantes de los estados relacionados con la salud o enfermedades en poblaciones específicas, y la aplicación de este estudio al control de problemas de salud.",
    defRO: "Studiul distribuției și determinanților stărilor legate de sănătate sau boli în populații specifice, și aplicarea acestui studiu la controlul problemelor de sănătate.",
    nanda: null
}, {
    id: "v_e_epidermis",
    termES: "Epidermis",
    termRO: "Epidermă",
    categoryColor: "bg-stone-50",
    defES: "Capa más externa y superficial de la piel, avascular, compuesta por epitelio escamoso estratificado queratinizado. Actúa como barrera protectora principal.",
    defRO: "Stratul cel mai extern și superficial al pielii, avascular, compus din epiteliu scamos stratificat cheratinizat. Acționează ca barieră protectoare principală.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_epididimo",
    termES: "Epidídimo",
    termRO: "Epididim",
    categoryColor: "bg-blue-50",
    defES: "Estructura tubular enrollada situada sobre el testículo donde los espermatozoides maduran y se almacenan. Su inflamación es la epididimitis (dolor escrotal agudo).",
    defRO: "Structură tubulară încolăcită situată deasupra testiculului unde spermatozoizii se maturizează și sunt stocați. Inflamația sa este epididimita (durere scrotală acută).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_e_epidural",
    termES: "Epidural (Anestesia)",
    termRO: "Epidurală (Anestezie)",
    categoryColor: "bg-zinc-50",
    defES: "Técnica de anestesia regional donde se inyecta anestésico local en el espacio epidural de la columna vertebral para bloquear la transmisión del dolor (parto, cirugía abdominal). No atraviesa la duramadre.",
    defRO: "Tehnică de anestezie regională în care se injectează anestezic local în spațiul epidural al coloanei vertebrale pentru a bloca transmisia durerii (naștere, chirurgie abdominală). Nu traversează dura mater.",
    nanda: null
}, {
    id: "v_e_epigastrio",
    termES: "Epigastrio",
    termRO: "Epigastru",
    categoryColor: "bg-yellow-50",
    defES: 'Región superior central del abdomen, situada entre los hipocondrios y sobre la región umbilical ("boca del estómago"). Dolor aquí sugiere patología gástrica, pancreática o cardíaca.',
    defRO: 'Regiunea superioară centrală a abdomenului, situată între hipocondre și deasupra regiunii ombilicale ("coșul pieptului"). Durerea aici sugerează patologie gastrică, pancreatică sau cardiacă.',
    nanda: null
}, {
    id: "v_e_epiglotis",
    termES: "Epiglotis",
    termRO: "Epiglotă",
    categoryColor: "bg-pink-50",
    defES: "Colgajo de cartílago en la base de la lengua que cierra la entrada a la laringe (glotis) durante la deglución para evitar que los alimentos entren en la vía aérea. La epiglotitis es una emergencia (obstrucción).",
    defRO: "Lambou de cartilaj la baza limbii care închide intrarea în laringe (glotă) în timpul deglutiției pentru a preveni intrarea alimentelor în calea aeriană. Epiglotita este o urgență (obstrucție).",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_e_epilepsia",
    termES: "Epilepsia",
    termRO: "Epilepsie",
    categoryColor: "bg-purple-50",
    defES: "Trastorno neurológico crónico caracterizado por una predisposición a sufrir crisis epilépticas recurrentes no provocadas, debido a una actividad eléctrica neuronal anormal excesiva.",
    defRO: "Tulburare neurologică cronică caracterizată printr-o predispoziție de a suferi crize epileptice recurente neprovocate, datorită unei activități electrice neuronale anormale excesive.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_e_epinefrina",
    termES: "Epinefrina",
    termRO: "Epinefrină (Adrenalină)",
    categoryColor: "bg-red-50",
    defES: 'Ver "Adrenalina". Catecolamina endógena y fármaco simpaticomimético esencial en el tratamiento del paro cardíaco, anafilaxia y shock.',
    defRO: 'Vezi "Adrenalină". Catecolamină endogenă și medicament simpaticomimetic esențial în tratamentul stopului cardiac, anafilaxiei și șocului.',
    nanda: null
}, {
    id: "v_e_episiotomia",
    termES: "Episiotomía",
    termRO: "Epiziotomie",
    categoryColor: "bg-pink-50",
    defES: "Incisión quirúrgica del periné (entre vagina y ano) realizada durante el parto para ampliar el canal de salida y facilitar la expulsión del feto. Su uso rutinario está desaconsejado.",
    defRO: "Incizie chirurgicală a perineului (între vagin și anus) efectuată în timpul nașterii pentru a lărgi canalul de ieșire și a facilita expulzia fătului. Utilizarea sa de rutină este nerecomandată.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_epistaxis",
    termES: "Epistaxis",
    termRO: "Epistaxis (Sângerare nazală)",
    categoryColor: "bg-red-50",
    defES: "Hemorragia nasal procedente de los vasos de la mucosa nasal (Plexo de Kiesselbach anterior). Causas: trauma, aire seco, hipertensión, anticoagulantes. Manejo: presión directa e inclinación adelante.",
    defRO: "Hemoragie nazală provenită din vasele mucoasei nazale (Plexul Kiesselbach anterior). Cauze: traumă, aer uscat, hipertensiune, anticoagulante. Gestionare: presiune directă și aplecare înainte.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_e_epitelio",
    termES: "Epitelio",
    termRO: "Epiteliu",
    categoryColor: "bg-stone-50",
    defES: "Tejido formado por capas de células unidas estrechamente que recubre las superficies corporales (piel), reviste cavidades internas y forma glándulas. Avascular.",
    defRO: "Țesut format din straturi de celule strâns unite care acoperă suprafețele corporale (piele), căptușește cavitățile interne și formează glande. Avascular.",
    nanda: null
}, {
    id: "v_e_equimosis",
    termES: "Equimosis (Cardenal)",
    termRO: "Echimoză (Vânătaie)",
    categoryColor: "bg-purple-50",
    defES: "Lesión subcutánea caracterizada por depósitos de sangre extravasada debajo de la piel intacta. Es una contusión plana, a diferencia del hematoma (que tiene volumen). Cambia de color al sanar.",
    defRO: "Leziune subcutanată caracterizată prin depozite de sânge extravazat sub pielea intactă. Este o contuzie plană, spre deosebire de hematom (care are volum). Își schimbă culoarea la vindecare.",
    nanda: null
}, {
    id: "v_e_equilibrio",
    termES: "Equilibrio",
    termRO: "Echilibru",
    categoryColor: "bg-blue-50",
    defES: "Estado de estabilidad corporal mantenido por la interacción del sistema vestibular (oído interno), visión y propiocepción. Su pérdida causa vértigo y riesgo de caídas.",
    defRO: "Stare de stabilitate corporală menținută prin interacțiunea sistemului vestibular (ureche internă), vedere și propriocepție. Pierderea sa cauzează vertij și risc de cădere.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_e_eritema",
    termES: "Eritema",
    termRO: "Eritem",
    categoryColor: "bg-red-50",
    defES: "Enrojecimiento de la piel debido a vasodilatación capilar (hiperemia). Desaparece a la vitropresión (diferencia con púrpura). Signo de inflamación, infección o alergia.",
    defRO: "Înroșirea pielii datorată vasodilatației capilare (hiperemie). Dispare la vitropresiune (diferență față de purpură). Semn de inflamație, infecție sau alergie.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_eritrocito",
    termES: "Eritrocito (Glóbulo Rojo)",
    termRO: "Eritrocit (Globulă Roșie/Hematíe)",
    categoryColor: "bg-red-50",
    defES: "Célula sanguínea anucleada con forma de disco bicóncavo que contiene hemoglobina y transporta oxígeno a los tejidos. Vida media: 120 días. Su déficit es la anemia.",
    defRO: "Celulă sanguină anucleată în formă de disc biconcav care conține hemoglobină și transportă oxigen la țesuturi. Viață medie: 120 de zile. Deficitul său este anemia.",
    nanda: null
}, {
    id: "v_e_eritropoyetina",
    termES: "Eritropoyetina (EPO)",
    termRO: "Eritropoietină (EPO)",
    categoryColor: "bg-red-50",
    defES: "Hormona producida principalmente por el riñón en respuesta a la hipoxia. Estimula la médula ósea para producir glóbulos rojos (eritropoyesis). Se usa en anemia por fallo renal.",
    defRO: "Hormon produs în principal de rinichi ca răspuns la hipoxie. Stimulează măduva osoasă să producă globule roșii (eritropoieză). Se folosește în anemia prin insuficiență renală.",
    nanda: null
}, {
    id: "v_e_erupcion",
    termES: "Erupción (Rash)",
    termRO: "Erupție (Rash)",
    categoryColor: "bg-pink-50",
    defES: "Cambio visible en la textura o color de la piel. Puede ser maculosa, papulosa, vesicular, etc. Común en enfermedades virales (sarampión, varicela) o reacciones alérgicas medicamentosas.",
    defRO: "Schimbare vizibilă în textura sau culoarea pielii. Poate fi maculoasă, papuloasă, veziculară etc. Comună în boli virale (rujeolă, varicelă) sau reacții alergice medicamentoase.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_escala_glasgow",
    termES: "Escala de Glasgow (GCS)",
    termRO: "Scara Glasgow (GCS)",
    categoryColor: "bg-blue-50",
    defES: "Herramienta neurológica para evaluar el nivel de conciencia tras un trauma cerebral. Valora: Apertura ocular (4), Respuesta verbal (5), Respuesta motora (6). Máx 15 (Normal), Mín 3 (Coma profundo).",
    defRO: "Instrument neurologic pentru evaluarea nivelului de conștiență după un traumatism cerebral. Evaluează: Deschidere oculară (4), Răspuns verbal (5), Răspuns motor (6). Max 15 (Normal), Min 3 (Comă profundă).",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_e_escara",
    termES: "Escara (Úlcera por presión)",
    termRO: "Escară (Ulcer de presiune)",
    categoryColor: "bg-stone-50",
    defES: "Lesión necrótica de la piel y tejidos subyacentes causada por presión prolongada sobre una prominencia ósea (sacro, talón) que bloquea el riego sanguíneo. Tejido negro o marrón (necrótico).",
    defRO: "Leziune necrotică a pielii și țesuturilor subiacente cauzată de presiune prelungită asupra unei proeminențe osoase (sacru, călcâi) care blochează fluxul sanguin. Țesut negru sau maro (necrotic).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_escarlatina",
    termES: "Escarlatina",
    termRO: "Scarlatină",
    categoryColor: "bg-red-50",
    defES: 'Enfermedad infecciosa pediátrica causada por estreptococo del grupo A (S. pyogenes). Caracterizada por fiebre, faringoamigdalitis, lengua en fresa y exantema rojo rasposo ("piel de lija").',
    defRO: 'Boală infecțioasă pediatrică cauzată de streptococ de grup A (S. pyogenes). Caracterizată prin febră, faringoamigdalită, limbă zmeurie și exantem roșu aspru ("piele de șmirghel").',
    nanda: null
}, {
    id: "v_e_esclerosis_multiple",
    termES: "Esclerosis Múltiple (EM)",
    termRO: "Scleroză Multiplă (SM)",
    categoryColor: "bg-purple-50",
    defES: "Enfermedad autoinmune crónica del SNC que destruye la mielina (desmielinización) de las neuronas. Causa fatiga, debilidad, espasticidad, problemas visuales y deterioro cognitivo.",
    defRO: "Boală autoimună cronică a SNC care distruge mielina (demielinizare) neuronilor. Cauzează oboseală, slăbiciune, spasticitate, probleme vizuale și declin cognitiv.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_e_escoliosis",
    termES: "Escoliosis",
    termRO: "Scolioză",
    categoryColor: "bg-stone-50",
    defES: "Desviación lateral anormal de la columna vertebral, a menudo con rotación de las vértebras. Puede ser idiopática (adolescentes). Si es grave, compromete la función pulmonar.",
    defRO: "Deviere laterală anormală a coloanei vertebrale, adesea cu rotația vertebrelor. Poate fi idiopatică (adolescenți). Dacă este gravă, compromite funcția pulmonară.",
    nanda: null
}, {
    id: "v_e_escorbuto",
    termES: "Escorbuto",
    termRO: "Scorbut",
    categoryColor: "bg-yellow-50",
    defES: "Enfermedad causada por deficiencia grave de Vitamina C (ácido ascórbico). Provoca debilidad, sangrado de encías, pérdida de dientes, petequias y mala cicatrización.",
    defRO: "Boală cauzată de deficiență gravă de Vitamina C (acid ascorbic). Provoacă slăbiciune, sângerarea gingiilor, pierderea dinților, peteșii și vindecare proastă.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_e_escroto",
    termES: "Escroto",
    termRO: "Scrot",
    categoryColor: "bg-stone-50",
    defES: "Saco cutáneo que contiene los testículos y epidídimos. Regula la temperatura testicular (necesaria para la espermatogénesis) mediante la contracción/relajación muscular (dartos).",
    defRO: "Sac cutanat care conține testiculele și epididimul. Reglează temperatura testiculară (necesară pentru spermatogeneză) prin contracția/relaxarea musculară (dartos).",
    nanda: null
}, {
    id: "v_e_esfinter",
    termES: "Esfínter",
    termRO: "Sfincter",
    categoryColor: "bg-red-50",
    defES: "Anillo muscular que rodea una abertura natural del cuerpo y que al contraerse la cierra. Ej. Esfínter anal, uretral, pilórico, esofágico.",
    defRO: "Inel muscular care înconjoară o deschidere naturală a corpului și care la contracție o închide. Ex. Sfincter anal, uretral, piloric, esofagian.",
    nanda: null
}, {
    id: "v_e_esfigmomanometro",
    termES: "Esfigmomanómetro (Tensiómetro)",
    termRO: "Sfigmomanometru (Tensiometru)",
    categoryColor: "bg-blue-50",
    defES: "Instrumento médico para medir la presión arterial indirecta. Consta de un brazalete inflable, una pera de goma y un manómetro (aneroide o de mercurio).",
    defRO: "Instrument medical pentru măsurarea tensiunii arteriale indirecte. Constă dintr-o manșetă gonflabilă, o pară de cauciuc și un manometru (aneroid sau cu mercur).",
    nanda: null
}, {
    id: "v_e_esofago",
    termES: "Esófago",
    termRO: "Esofag",
    categoryColor: "bg-teal-50",
    defES: "Tubo muscular que conecta la faringe con el estómago. Transporta el bolo alimenticio mediante peristalsis. Sus patologías incluyen reflujo (ERGE), varices y cáncer.",
    defRO: "Tub muscular care conectează faringele cu stomacul. Transportă bolul alimentar prin peristaltism. Patologiile sale includ reflux (BRGE), varice și cancer.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_e_espasmo",
    termES: "Espasmo",
    termRO: "Spasm",
    categoryColor: "bg-orange-50",
    defES: "Contracción muscular involuntaria, súbita y persistente. Puede afectar a músculo esquelético (calambre) o liso (broncoespasmo, cólico).",
    defRO: "Contracție musculară involuntară, bruscă și persistentă. Poate afecta mușchiul scheletic (crampă) sau neted (bronhospasm, colică).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_e_espectro",
    termES: "Espectro (Antibiótico)",
    termRO: "Spectru (Antibiotic)",
    categoryColor: "bg-green-50",
    defES: "Rango de microorganismos contra los cuales es efectivo un antibiótico. Amplio espectro (Gram+ y Gram-) o espectro reducido (específico).",
    defRO: "Gama de microorganisme împotriva cărora este eficient un antibiotic. Spectru larg (Gram+ și Gram-) sau spectru redus (specific).",
    nanda: null
}, {
    id: "v_e_espermatozoide",
    termES: "Espermatozoide",
    termRO: "Spermatozoid",
    categoryColor: "bg-blue-50",
    defES: "Célula reproductora masculina (gameto) móvil, producida en los testículos. Posee cabeza (ADN), cuello y cola (flagelo). Fecunda al óvulo.",
    defRO: "Celulă reproducătoare masculină (gamet) mobilă, produsă în testicule. Posedă cap (ADN), gât și coadă (flagel). Fecundează ovulul.",
    nanda: null
}, {
    id: "v_e_espina_bifida",
    termES: "Espina Bífida",
    termRO: "Spina Bifida",
    categoryColor: "bg-purple-50",
    defES: "Defecto congénito del tubo neural donde la columna vertebral no se cierra completamente alrededor de la médula espinal. Prevenible con ácido fólico. Tipos: Oculta, Meningocele, Mielomeningocele.",
    defRO: "Defect congenital de tub neural în care coloana vertebrală nu se închide complet în jurul măduvei spinării. Prevenibil cu acid folic. Tipuri: Occulta, Meningocel, Mielomeningocel.",
    nanda: null
}, {
    id: "v_e_espirometro",
    termES: "Espirómetro",
    termRO: "Spirometru",
    categoryColor: "bg-sky-50",
    defES: "Dispositivo para medir los volúmenes y flujos respiratorios (función pulmonar). El espirómetro incentivo se usa en postoperatorio para prevenir atelectasias promoviendo la inspiración profunda.",
    defRO: "Dispozitiv pentru măsurarea volumelor și debitelor respiratorii (funcție pulmonară). Spirometrul stimulativ se folosește postoperator pentru prevenirea atelectaziilor promovând inspirația profundă.",
    nanda: null
}, {
    id: "v_e_esplenectomia",
    termES: "Esplenectomía",
    termRO: "Splenectomie",
    categoryColor: "bg-red-50",
    defES: "Extirpación quirúrgica del bazo. Indicada en trauma (rotura), púrpura trombocitopénica o linfomas. Aumenta el riesgo de infecciones graves por bacterias encapsuladas (neumococo).",
    defRO: "Extirparea chirurgicală a splinei. Indicată în traumă (ruptură), purpură trombocitopenică sau limfoame. Crește riscul de infecții grave cu bacterii încapsulate (pneumococ).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_e_esputo",
    termES: "Esputo",
    termRO: "Spută",
    categoryColor: "bg-sky-50",
    defES: "Secreción procedente de las vías respiratorias inferiores expulsada por la tos. Su aspecto (mucoso, purulento, hemoptoico/sangre) orienta el diagnóstico (bronquitis, neumonía, tuberculosis).",
    defRO: "Secreție provenită din căile respiratorii inferioare expulzată prin tuse. Aspectul său (mucos, purulent, hemoptoic/sânge) orientează diagnosticul (bronșită, pneumonie, tuberculoză).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_e_esquizofrenia",
    termES: "Esquizofrenia",
    termRO: "Schizofrenie",
    categoryColor: "bg-purple-50",
    defES: "Trastorno mental grave crónico caracterizado por distorsión del pensamiento, percepción (alucinaciones), emociones y conducta. Síntomas positivos (delirios) y negativos (apatía, aislamiento).",
    defRO: "Tulburare mentală gravă cronică caracterizată prin distorsionarea gândirii, percepției (halucinații), emoțiilor și comportamentului. Simptome pozitive (deliruri) și negative (apatie, izolare).",
    nanda: {
        codeES: "00279",
        codeRO: "00279",
        labelES: "Deterioro de los procesos de pensamiento",
        labelRO: "Procese de gândire perturbate"
    }
}, {
    id: "v_e_estasis",
    termES: "Estasis",
    termRO: "Stază",
    categoryColor: "bg-blue-50",
    defES: "Estancamiento o detención del flujo de un líquido corporal. Estasis venosa: sangre en venas (riesgo TVP). Estasis biliar: bilis en hígado (colestasis).",
    defRO: "Stagnare sau oprire a fluxului unui lichid corporal. Stază venoasă: sânge în vene (risc TVP). Stază biliară: bilă în ficat (colestază).",
    nanda: null
}, {
    id: "v_e_esteatorrea",
    termES: "Esteatorrea",
    termRO: "Steatoree",
    categoryColor: "bg-yellow-50",
    defES: "Presencia de exceso de grasa en las heces, que se vuelven voluminosas, malolientes, pálidas y flotantes. Indica malabsorción de grasas (Insuficiencia pancreática, Celiaquía, Fibrosis Quística).",
    defRO: "Prezența excesului de grăsime în scaun, care devine voluminos, urât mirositor, palid și plutitor. Indică malabsorbție a grăsimilor (Insuficiență pancreatică, Celiachie, Fibroză Chistică).",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_e_estenosis",
    termES: "Estenosis",
    termRO: "Stenoză",
    categoryColor: "bg-red-50",
    defES: "Estrechamiento anormal de un conducto o canal corporal. Estenosis aórtica (válvula cardíaca), Estenosis pilórica (salida estómago), Estenosis espinal.",
    defRO: "Îngustare anormală a unui conduct sau canal corporal. Stenoză aortică (valvă cardiacă), Stenoză pilorică (ieșire stomac), Stenoză spinală.",
    nanda: null
}, {
    id: "v_e_esteril",
    termES: "Estéril",
    termRO: "Steril",
    categoryColor: "bg-teal-50",
    defES: "1. Libre de todo microorganismo vivo (incluidas esporas). 2. Incapaz de reproducirse (infertilidad). Campo estéril: área preparada para cirugía.",
    defRO: "1. Liber de orice microorganism viu (inclusiv spori). 2. Incapabil de a se reproduce (infertilitate). Câmp steril: arie pregătită pentru chirurgie.",
    nanda: null
}, {
    id: "v_e_esterilizacion",
    termES: "Esterilización",
    termRO: "Sterilizare",
    categoryColor: "bg-stone-50",
    defES: "Proceso que destruye toda forma de vida microbiana, incluyendo esporas. Métodos: calor húmedo (autoclave), calor seco, óxido de etileno, radiación.",
    defRO: "Proces care distruge orice formă de viață microbiană, inclusiv sporii. Metode: căldură umedă (autoclav), căldură uscată, oxid de etilenă, radiații.",
    nanda: null
}, {
    id: "v_e_esternon",
    termES: "Esternón",
    termRO: "Stern",
    categoryColor: "bg-stone-50",
    defES: "Hueso plano situado en la línea media anterior del tórax. Se articula con las clavículas y costillas. Protege el corazón. Lugar para compresiones en RCP.",
    defRO: "Os plat situat pe linia mediană anterioară a toracelui. Se articulează cu claviculele și coastele. Protejează inima. Loc pentru compresiuni în RCP.",
    nanda: null
}, {
    id: "v_e_estetoscopio",
    termES: "Estetoscopio (Fonendoscopio)",
    termRO: "Stetoscop",
    categoryColor: "bg-blue-50",
    defES: "Instrumento acústico utilizado para auscultar los sonidos internos del cuerpo (corazón, pulmones, ruidos intestinales, flujo sanguíneo).",
    defRO: "Instrument acustic utilizat pentru a ausculta sunetele interne ale corpului (inimă, plămâni, zgomote intestinale, flux sanguin).",
    nanda: null
}, {
    id: "v_e_estoma",
    termES: "Estoma",
    termRO: "Stomă",
    categoryColor: "bg-pink-50",
    defES: "Abertura artificial creada quirúrgicamente en la superficie del cuerpo para permitir la salida de desechos (colostomía, urostomía) o entrada de aire/nutrientes (traqueostomía, gastrostomía).",
    defRO: "Deschidere artificială creată chirurgical pe suprafața corpului pentru a permite ieșirea deșeurilor (colostomie, urostomie) sau intrarea aerului/nutrienților (traheostomie, gastrostomie).",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_e_estomago",
    termES: "Estómago",
    termRO: "Stomac",
    categoryColor: "bg-orange-50",
    defES: "Órgano digestivo en forma de J situado entre el esófago y el duodeno. Almacena alimentos y comienza la digestión química (ácido clorhídrico, pepsina) y mecánica, formando el quimo.",
    defRO: "Organ digestiv în formă de J situat între esofag și duoden. Stochează alimentele și începe digestia chimică (acid clorhidric, pepsină) și mecanică, formând chimul.",
    nanda: null
}, {
    id: "v_e_estrabismo",
    termES: "Estrabismo",
    termRO: "Strabism",
    categoryColor: "bg-blue-50",
    defES: "Trastorno ocular en el que los ojos no están alineados en la misma dirección al mismo tiempo. Puede causar ambliopía (ojo vago) si no se corrige en la infancia.",
    defRO: "Tulburare oculară în care ochii nu sunt aliniați în aceeași direcție în același timp. Poate cauza ambliopie (ochi leneș) dacă nu este corectat în copilărie.",
    nanda: null
}, {
    id: "v_e_estrenimiento",
    termES: "Estreñimiento",
    termRO: "Constipație",
    categoryColor: "bg-amber-50",
    defES: "Disminución de la frecuencia normal de defecación, acompañada de heces difíciles de expulsar o incompletas, y heces excesivamente duras y secas.",
    defRO: "Scăderea frecvenței normale de defecație, însoțită de scaune dificil de expulzat sau incomplete, și scaune excesiv de tari și uscate.",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_e_estres",
    termES: "Estrés",
    termRO: "Stres",
    categoryColor: "bg-purple-50",
    defES: "Respuesta fisiológica y psicológica del cuerpo ante demandas (estresores) que desequilibran la homeostasis. Agudo (lucha o huida) o Crónico (agotamiento). Afecta al sistema inmune y cardiovascular.",
    defRO: "Răspuns fiziologic și psihologic al corpului la cerințe (stresori) care dezechilibrează homeostazia. Acut (luptă sau fugi) sau Cronic (epuizare). Afectează sistemul imunitar și cardiovascular.",
    nanda: {
        codeES: "00177",
        codeRO: "00177",
        labelES: "Sobrecarga de estrés",
        labelRO: "Supraîncărcare cu stres"
    }
}, {
    id: "v_e_estrogeno",
    termES: "Estrógeno",
    termRO: "Estrogen",
    categoryColor: "bg-pink-50",
    defES: "Hormona sexual femenina principal, producida por los ovarios. Responsable de los caracteres sexuales secundarios y regulación del ciclo menstrual. Su déficit causa menopausia.",
    defRO: "Hormon sexual feminin principal, produs de ovare. Responsabil pentru caracterele sexuale secundare și reglarea ciclului menstrual. Deficitul său cauzează menopauză.",
    nanda: null
}, {
    id: "v_e_estupor",
    termES: "Estupor",
    termRO: "Stupoare",
    categoryColor: "bg-gray-50",
    defES: "Estado de alteración de la conciencia en el que el paciente solo responde a estímulos vigorosos o dolorosos, y vuelve a dormirse cuando cesa el estímulo.",
    defRO: "Stare de alterare a conștienței în care pacientul răspunde doar la stimuli viguroși sau dureroși, și adoarme din nou când încetează stimulul.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_e_etiologia",
    termES: "Etiología",
    termRO: "Etiologie",
    categoryColor: "bg-stone-50",
    defES: "Estudio de las causas o el origen de una enfermedad. La etiología puede ser infecciosa, genética, ambiental, iatrogénica o idiopática (desconocida).",
    defRO: "Studiul cauzelor sau originii unei boli. Etiologia poate fi infecțioasă, genetică, de mediu, iatrogenă sau idiopatică (necunoscută).",
    nanda: null
}, {
    id: "v_e_eupnea",
    termES: "Eupnea",
    termRO: "Eupnee",
    categoryColor: "bg-green-50",
    defES: "Respiración normal, tranquila, rítmica y sin esfuerzo. Frecuencia en adultos: 12-20 respiraciones por minuto.",
    defRO: "Respirație normală, liniștită, ritmică și fără efort. Frecvența la adulți: 12-20 respirații pe minut.",
    nanda: null
}, {
    id: "v_e_eutanasia",
    termES: "Eutanasia",
    termRO: "Eutanasie",
    categoryColor: "bg-slate-50",
    defES: "Acción deliberada de poner fin a la vida de una persona que padece una enfermedad incurable y sufrimiento insoportable, a petición suya. Diferente de sedación paliativa.",
    defRO: "Acțiune deliberată de a pune capăt vieții unei persoane care suferă de o boală incurabilă și suferință insuportabilă, la cererea sa. Diferită de sedarea paliativă.",
    nanda: null
}, {
    id: "v_e_evaluacion",
    termES: "Evaluación",
    termRO: "Evaluare",
    categoryColor: "bg-teal-50",
    defES: "Etapa final del Proceso de Atención de Enfermería (PAE). Juicio sistemático sobre la eficacia de las intervenciones y el logro de los objetivos (NOC) del paciente.",
    defRO: "Etapă finală a Procesului de Îngrijire Nursing. Judecată sistematică asupra eficacității intervențiilor și atingerii obiectivelor (NOC) ale pacientului.",
    nanda: null
}, {
    id: "v_e_evisceracion",
    termES: "Evisceración",
    termRO: "Eviscerație",
    categoryColor: "bg-red-50",
    defES: "Complicación quirúrgica grave donde hay protrusión de órganos internos (vísceras) a través de una incisión abierta (dehiscencia total). Requiere cobertura estéril húmeda y cirugía urgente.",
    defRO: "Complicație chirurgicală gravă unde există protruzia organelor interne (viscere) printr-o incizie deschisă (dehiscență totală). Necesită acoperire sterilă umedă și chirurgie urgentă.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_e_examen_fisico",
    termES: "Examen Físico",
    termRO: "Examinare Fizică",
    categoryColor: "bg-blue-50",
    defES: "Exploración sistemática del cuerpo del paciente para obtener datos objetivos de salud. Técnicas: Inspección, Palpación, Percusión y Auscultación.",
    defRO: "Explorare sistematică a corpului pacientului pentru a obține date obiective de sănătate. Tehnici: Inspecție, Palpare, Percuție și Auscultație.",
    nanda: null
}, {
    id: "v_e_exantema",
    termES: "Exantema",
    termRO: "Exantem",
    categoryColor: "bg-pink-50",
    defES: "Erupción cutánea generalizada, a menudo acompañada de síntomas sistémicos (fiebre). Típico de enfermedades virales infantiles (sarampión, rubeola, varicela).",
    defRO: "Erupție cutanată generalizată, adesea însoțită de simptome sistemice (febră). Tipic pentru bolile virale infantile (rujeolă, rubeolă, varicelă).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_excrecion",
    termES: "Excreción",
    termRO: "Excreție",
    categoryColor: "bg-amber-50",
    defES: "Proceso de eliminación de productos de desecho metabólico y sustancias tóxicas del organismo. Órganos: riñones (orina), pulmones (CO2), piel (sudor), hígado (bilis).",
    defRO: "Procesul de eliminare a produselor de deșeu metabolic și substanțelor toxice din organism. Organe: rinichi (urină), plămâni (CO2), piele (transpirație), ficat (bilă).",
    nanda: null
}, {
    id: "v_e_exhalacion",
    termES: "Exhalación (Espiración)",
    termRO: "Exhalație (Expirație)",
    categoryColor: "bg-sky-50",
    defES: "Fase pasiva de la respiración en la que el aire sale de los pulmones debido a la relajación del diafragma y retroceso elástico pulmonar.",
    defRO: "Faza pasivă a respirației în care aerul iese din plămâni datorită relaxării diafragmei și reculului elastic pulmonar.",
    nanda: null
}, {
    id: "v_e_exoftalmos",
    termES: "Exoftalmos",
    termRO: "Exoftalmie",
    categoryColor: "bg-stone-50",
    defES: "Protrusión anormal de uno o ambos globos oculares hacia fuera de la órbita. Signo característico de la enfermedad de Graves (hipertiroidismo).",
    defRO: "Protruzie anormală a unuia sau ambilor globi oculari în afara orbitei. Semn caracteristic al bolii Graves (hipertiroidism).",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_e_expectoracion",
    termES: "Expectoración",
    termRO: "Expectorație",
    categoryColor: "bg-sky-50",
    defES: "Acción de expulsar moco o esputo de la garganta o pulmones mediante la tos. Eficaz si elimina secreciones; ineficaz si no logra despejar la vía aérea.",
    defRO: "Acțiunea de a expulza mucus sau spută din gât sau plămâni prin tuse. Eficace dacă elimină secrețiile; ineficace dacă nu reușește să elibereze calea aeriană.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_e_expectorante",
    termES: "Expectorante",
    termRO: "Expectorant",
    categoryColor: "bg-teal-50",
    defES: "Fármaco que facilita la expulsión de secreciones bronquiales al aumentar su volumen o reducir su viscosidad (ej. Guaifenesina).",
    defRO: "Medicament care facilitează expulzia secrețiilor bronșice prin creșterea volumului sau reducerea vâscozității lor (ex. Guaifenezina).",
    nanda: null
}, {
    id: "v_e_extraccion",
    termES: "Extracción",
    termRO: "Extracție",
    categoryColor: "bg-red-50",
    defES: "Acto de sacar algo. Extracción de sangre (flebotomía). Extracción dental (exodoncia). Extracción de catarata.",
    defRO: "Actul de a scoate ceva. Extracție de sânge (flebotomie). Extracție dentară (exodonție). Extracție de cataractă.",
    nanda: null
}, {
    id: "v_e_extrasistole",
    termES: "Extrasístole",
    termRO: "Extrasistolă",
    categoryColor: "bg-red-50",
    defES: "Latido cardíaco prematuro que se origina fuera del nodo sinusal (foco ectópico). Puede ser auricular (ESA) o ventricular (ESV). A menudo benigna, pero frecuente en patología cardíaca.",
    defRO: "Bătaie cardiacă prematură care își are originea în afara nodului sinusal (focar ectopic). Poate fi atrială (ESA) sau ventriculară (ESV). Adesea benignă, dar frecventă în patologia cardiacă.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_e_extravasacion",
    termES: "Extravasación",
    termRO: "Extravazare",
    categoryColor: "bg-red-50",
    defES: "Fuga accidental de líquido intravenoso (especialmente fármacos vesicantes como quimioterapia) desde la vena hacia el tejido circundante. Causa daño tisular grave y necrosis.",
    defRO: "Scurgere accidentală de lichid intravenos (în special medicamente vezicante precum chimioterapia) din venă în țesutul înconjurător. Cauzează leziuni tisulare grave și necroză.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_e_exudado",
    termES: "Exudado",
    termRO: "Exsudat",
    categoryColor: "bg-yellow-50",
    defES: "Líquido rico en proteínas y células que se filtra desde los vasos sanguíneos hacia los tejidos debido a inflamación o infección (pus). Tipos: seroso, purulento, hemorrágico.",
    defRO: "Lichid bogat în proteine și celule care se filtrează din vasele de sânge în țesuturi datorită inflamației sau infecției (puroi). Tipuri: seros, purulent, hemoragic.",
    nanda: null
}, {
    id: "v_f_factor_rh",
    termES: "Factor Rh (Rhesus)",
    termRO: "Factor Rh (Rhesus)",
    categoryColor: "bg-red-50",
    defES: "Antígeno proteico presente en la superficie de los glóbulos rojos. Si está presente, la sangre es Rh positiva (+); si no, Rh negativa (-). La incompatibilidad Rh madre-feto puede causar enfermedad hemolítica del recién nacido.",
    defRO: "Antigen proteic prezent pe suprafața globulelor roșii. Dacă este prezent, sângele este Rh pozitiv (+); dacă nu, Rh negativ (-). Incompatibilitatea Rh mamă-făt poate cauza boala hemolitică a nou-născutului.",
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_f_fagocitosis",
    termES: "Fagocitosis",
    termRO: "Fagocitoză",
    categoryColor: "bg-green-50",
    defES: "Proceso celular mediante el cual ciertas células inmunitarias (macrófagos, neutrófilos) engullen y destruyen microorganismos, restos celulares o partículas extrañas. Mecanismo clave de la inmunidad innata.",
    defRO: "Proces celular prin care anumite celule imunitare (macrofage, neutrofile) înghit și distrug microorganisme, resturi celulare sau particule străine. Mecanism cheie al imunității înnăscute.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_f_falopio",
    termES: "Falopio (Trompas de)",
    termRO: "Trompe Uterine (Faloppe)",
    categoryColor: "bg-pink-50",
    defES: "Dos conductos que conectan los ovarios con el útero. Lugar donde ocurre habitualmente la fecundación del óvulo por el espermatozoide. Su ligadura es un método anticonceptivo permanente.",
    defRO: "Două conducte care conectează ovarele cu uterul. Locul unde are loc de obicei fecundarea ovulului de către spermatozoid. Ligatura lor este o metodă contraceptivă permanentă.",
    nanda: null
}, {
    id: "v_f_familia",
    termES: "Familia",
    termRO: "Familie",
    categoryColor: "bg-blue-50",
    defES: 'Unidad social básica y sistema de apoyo principal para el paciente. En enfermería comunitaria, la familia se considera la unidad de cuidados ("el paciente es la familia"). Incluye lazos biológicos, legales o afectivos.',
    defRO: 'Unitate socială de bază și sistem principal de sprijin pentru pacient. În asistența medicală comunitară, familia este considerată unitatea de îngrijire ("pacientul este familia"). Include legături biologice, legale sau afective.',
    nanda: {
        codeES: "00060",
        codeRO: "00060",
        labelES: "Interrupción de los procesos familiares",
        labelRO: "Întreruperea proceselor familiale"
    }
}, {
    id: "v_f_farmacocinetica",
    termES: "Farmacocinética",
    termRO: "Farmacocinetică",
    categoryColor: "bg-teal-50",
    defES: "Rama de la farmacología que estudia lo que el organismo le hace al fármaco: Liberación, Absorción, Distribución, Metabolismo y Excreción (LADME). Determina la dosis y frecuencia.",
    defRO: "Ramură a farmacologiei care studiază ceea ce organismul face medicamentului: Eliberare, Absorbție, Distribuție, Metabolism și Excreție (LADME). Determină doza și frecvența.",
    nanda: null
}, {
    id: "v_f_farmacodinamia",
    termES: "Farmacodinamia",
    termRO: "Farmacodinamică",
    categoryColor: "bg-teal-50",
    defES: "Estudio de lo que el fármaco le hace al organismo: mecanismo de acción (receptores), efectos terapéuticos y efectos secundarios.",
    defRO: "Studiul a ceea ce medicamentul face organismului: mecanismul de acțiune (receptori), efecte terapeutice și efecte secundare.",
    nanda: null
}, {
    id: "v_f_fascia",
    termES: "Fascia",
    termRO: "Fascie",
    categoryColor: "bg-stone-50",
    defES: "Lámina de tejido conectivo fibroso que envuelve, separa y sostiene músculos, órganos y estructuras nerviosas. La fascitis plantar es la inflamación de la fascia del pie.",
    defRO: "Lamă de țesut conjunctiv fibros care învelește, separă și susține mușchi, organe și structuri nervoase. Fasciita plantară este inflamația fasciei piciorului.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_f_fatiga",
    termES: "Fatiga",
    termRO: "Oboseală (Fatigabilitate)",
    categoryColor: "bg-purple-50",
    defES: "Sensación abrumadora y sostenida de agotamiento y disminución de la capacidad para el trabajo físico y mental, que no se alivia con el descanso habitual. Síntoma de anemia, cáncer, insuficiencia cardíaca.",
    defRO: "Senzație copleșitoare și susținută de epuizare și scădere a capacității de muncă fizică și mentală, care nu se ameliorează prin odihnă obișnuită. Simptom de anemie, cancer, insuficiență cardiacă.",
    nanda: {
        codeES: "00093",
        codeRO: "00093",
        labelES: "Fatiga",
        labelRO: "Oboseală"
    }
}, {
    id: "v_f_fecaloma",
    termES: "Fecaloma (Impactación Fecal)",
    termRO: "Fecalom (Impactare Fecală)",
    categoryColor: "bg-stone-50",
    defES: 'Masa grande, dura y seca de heces endurecidas acumulada en el recto o colon que el paciente no puede expulsar. Causa obstrucción, dolor y "falsa diarrea" (rebosamiento). Requiere extracción manual.',
    defRO: 'Masă mare, tare și uscată de materii fecale întărite acumulată în rect sau colon pe care pacientul nu o poate expulza. Cauzează obstrucție, durere și "diaree falsă" (preaplin). Necesită extracție manuală.',
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_f_fecundacion",
    termES: "Fecundación",
    termRO: "Fecundație",
    categoryColor: "bg-pink-50",
    defES: "Fusión de un espermatozoide y un óvulo para formar un cigoto, marcando el inicio del desarrollo embrionario. Generalmente ocurre en el tercio distal de la trompa de Falopio.",
    defRO: "Fuziunea unui spermatozoid și a unui ovul pentru a forma un zigot, marcând începutul dezvoltării embrionare. De obicei are loc în treimea distală a trompei uterine.",
    nanda: null
}, {
    id: "v_f_femur",
    termES: "Fémur",
    termRO: "Femur",
    categoryColor: "bg-stone-50",
    defES: "Hueso del muslo, el más largo, fuerte y pesado del cuerpo humano. Se articula con la cadera (proximal) y la rodilla (distal). Su fractura es grave y puede causar embolia grasa o shock hipovolémico.",
    defRO: "Osul coapsei, cel mai lung, puternic și greu din corpul uman. Se articulează cu șoldul (proximal) și genunchiul (distal). Fractura sa este gravă și poate cauza embolie grăsoasă sau șoc hipovolemic.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_f_fenilcetonuria",
    termES: "Fenilcetonuria (PKU)",
    termRO: "Fenilcetonurie (PKU)",
    categoryColor: "bg-yellow-50",
    defES: "Enfermedad genética metabólica caracterizada por la incapacidad de metabolizar el aminoácido fenilalanina. Su acumulación causa discapacidad intelectual grave si no se trata con dieta desde el nacimiento.",
    defRO: "Boală genetică metabolică caracterizată prin incapacitatea de a metaboliza aminoacidul fenilalanină. Acumularea sa cauzează dizabilitate intelectuală gravă dacă nu este tratată prin dietă de la naștere.",
    nanda: null
}, {
    id: "v_f_ferula",
    termES: "Férula",
    termRO: "Atelă",
    categoryColor: "bg-stone-50",
    defES: "Dispositivo rígido o flexible utilizado para inmovilizar, sostener o proteger una parte del cuerpo lesionada (fractura, esguince) o para prevenir deformidades.",
    defRO: "Dispozitiv rigid sau flexibil utilizat pentru a imobiliza, susține sau proteja o parte a corpului rănită (fractură, entorsă) sau pentru a preveni deformările.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_f_feto",
    termES: "Feto",
    termRO: "Făt",
    categoryColor: "bg-pink-50",
    defES: "Etapa del desarrollo prenatal humano desde la novena semana de gestación hasta el nacimiento. Se caracteriza por el crecimiento y maduración de los órganos y sistemas.",
    defRO: "Etapă a dezvoltării prenatale umane de la a noua săptămână de gestație până la naștere. Se caracterizează prin creșterea și maturarea organelor și sistemelor.",
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_f_fibrilacion_auricular",
    termES: "Fibrilación Auricular (FA)",
    termRO: "Fibrilație Atrială (FiA)",
    categoryColor: "bg-red-50",
    defES: "Arritmia cardíaca más común, caracterizada por latidos auriculares rápidos, caóticos e ineficaces. Aumenta el riesgo de ictus (por trombos auriculares) e insuficiencia cardíaca. Pulso irregular.",
    defRO: "Cea mai comună aritmie cardiacă, caracterizată prin bătăi atriale rapide, haotice și ineficiente. Crește riscul de AVC (prin trombi atriali) și insuficiență cardiacă. Puls neregulat.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_f_fibrilacion_ventricular",
    termES: "Fibrilación Ventricular (FV)",
    termRO: "Fibrilație Ventriculară (FiV)",
    categoryColor: "bg-red-50",
    defES: "Arritmia letal donde los ventrículos tiemblan ineficazmente en lugar de bombear sangre. Causa parada cardíaca inmediata. Requiere desfibrilación urgente y RCP.",
    defRO: "Aritmie letală în care ventriculii tremură ineficient în loc să pompeze sânge. Cauzează stop cardiac imediat. Necesită defibrilare urgentă și RCP.",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_f_fibrina",
    termES: "Fibrina",
    termRO: "Fibrină",
    categoryColor: "bg-red-50",
    defES: "Proteína insoluble en forma de red que forma la estructura fundamental del coágulo sanguíneo, atrapando plaquetas y células. Se forma a partir del fibrinógeno por acción de la trombina.",
    defRO: "Proteină insolubilă în formă de rețea care formează structura fundamentală a cheagului de sânge, prinzând trombocite și celule. Se formează din fibrinogen prin acțiunea trombinei.",
    nanda: null
}, {
    id: "v_f_fibrosis_quistica",
    termES: "Fibrosis Quística",
    termRO: "Fibroză Chistică (Mucoviscidoză)",
    categoryColor: "bg-sky-50",
    defES: "Enfermedad genética hereditaria que afecta a las glándulas exocrinas, produciendo moco espeso y pegajoso que obstruye los pulmones (infecciones recurrentes) y el páncreas (malabsorción).",
    defRO: "Boală genetică ereditară care afectează glandele exocrine, producând mucus gros și lipicios care obstruează plămânii (infecții recurente) și pancreasul (malabsorbție).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_f_fiebre",
    termES: "Fiebre (Pirexia)",
    termRO: "Febră (Pirexie)",
    categoryColor: "bg-red-50",
    defES: "Elevación de la temperatura corporal por encima del rango normal (>38°C), como respuesta sistémica a infección, inflamación o lesión. Es un mecanismo de defensa. La hipertermia maligna es diferente (desregulación).",
    defRO: "Creșterea temperaturii corporale peste intervalul normal (>38°C), ca răspuns sistemic la infecție, inflamație sau leziune. Este un mecanism de apărare. Hipertermia malignă este diferită (dereglare).",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_f_filtracion_glomerular",
    termES: "Filtración Glomerular (TFG)",
    termRO: "Filtrare Glomerulară (RFG)",
    categoryColor: "bg-blue-50",
    defES: "Volumen de fluido filtrado desde los capilares glomerulares renales hacia la cápsula de Bowman por unidad de tiempo. Es el mejor índice para evaluar la función renal global.",
    defRO: "Volumul de fluid filtrat din capilarele glomerulare renale în capsula Bowman pe unitatea de timp. Este cel mai bun indice pentru evaluarea funcției renale globale.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_f_fimosis",
    termES: "Fimosis",
    termRO: "Fimoză",
    categoryColor: "bg-stone-50",
    defES: "Estrechez del orificio del prepucio que impide su retracción completa sobre el glande del pene. Puede causar infecciones (balanitis) o dificultades urinarias. Tratamiento: circuncisión.",
    defRO: "Îngustarea orificiului prepuțului care împiedică retragerea completă a acestuia peste glandul penisului. Poate cauza infecții (balanită) sau dificultăți urinare. Tratament: circumcizie.",
    nanda: null
}, {
    id: "v_f_fistula",
    termES: "Fístula",
    termRO: "Fistulă",
    categoryColor: "bg-red-50",
    defES: "Conexión anormal o trayecto entre dos órganos huecos (fístula rectovaginal) o entre un órgano y la piel (fístula enterocutánea). Frecuente en enfermedad de Crohn o tras cirugía.",
    defRO: "Conexiune anormală sau traiect între două organe goale (fistulă rectovaginală) sau între un organ și piele (fistulă enterocutanată). Frecventă în boala Crohn sau după chirurgie.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_f_flebitis",
    termES: "Flebitis",
    termRO: "Flebită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de una vena. Comúnmente asociada a la inserción de catéteres venosos periféricos (flebitis mecánica o química). Signos: dolor, eritema, calor y cordón venoso palpable.",
    defRO: "Inflamația unei vene. Asociată frecvent cu inserția cateterelor venoase periferice (flebită mecanică sau chimică). Semne: durere, eritem, căldură și cordon venos palpabil.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_f_flebotomia",
    termES: "Flebotomía",
    termRO: "Flebotomie (Venepuncție)",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento de incisión o punción de una vena para extraer sangre (análisis, donación) o para reducir el volumen sanguíneo (flebotomía terapéutica en hemocromatosis/policitemia).",
    defRO: "Procedură de incizie sau puncție a unei vene pentru a extrage sânge (analize, donare) sau pentru a reduce volumul sanguin (flebotomie terapeutică în hemocromatoză/policitemie).",
    nanda: null
}, {
    id: "v_f_flutter",
    termES: "Flutter (Aleteo)",
    termRO: "Flutter",
    categoryColor: "bg-red-50",
    defES: 'Arritmia cardíaca caracterizada por contracciones auriculares muy rápidas pero regulares (250-350 lpm), con patrón en "dientes de sierra" en el ECG. Riesgo de embolia similar a la FA.',
    defRO: 'Aritmie cardiacă caracterizată prin contracții atriale foarte rapide dar regulate (250-350 bpm), cu model în "dinți de fierăstrău" pe EKG. Risc de embolie similar cu FiA.',
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_f_fobia",
    termES: "Fobia",
    termRO: "Fobie",
    categoryColor: "bg-purple-50",
    defES: "Miedo intenso, irracional y persistente hacia un objeto, situación o actividad específica, que lleva a un deseo imperioso de evitación. Ej. Agorafobia, Fobia social, Claustrofobia.",
    defRO: "Frică intensă, irațională și persistentă față de un obiect, situație sau activitate specifică, ce duce la o dorință imperioasă de evitare. Ex. Agorafobie, Fobie socială, Claustrofobie.",
    nanda: {
        codeES: "00148",
        codeRO: "00148",
        labelES: "Temor",
        labelRO: "Teamă"
    }
}, {
    id: "v_f_foliculitis",
    termES: "Foliculitis",
    termRO: "Foliculită",
    categoryColor: "bg-pink-50",
    defES: "Infección superficial o inflamación de los folículos pilosos, que aparecen como pequeñas pústulas o pápulas rojas alrededor de un pelo. Causa frecuente: Staphylococcus aureus.",
    defRO: "Infecție superficială sau inflamație a foliculilor piloși, care apar ca mici pustule sau papule roșii în jurul unui fir de păr. Cauză frecventă: Staphylococcus aureus.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_f_fontanela",
    termES: "Fontanela",
    termRO: "Fontanelă",
    categoryColor: "bg-stone-50",
    defES: 'Espacio membranoso ("molleja") entre los huesos del cráneo del lactante que permite el crecimiento cerebral y el paso por el canal del parto. La anterior cierra a los 12-18 meses.',
    defRO: 'Spațiu membranos ("moalele capului") între oasele craniului sugarului care permite creșterea cerebrală și trecerea prin canalul de naștere. Cea anterioară se închide la 12-18 luni.',
    nanda: null
}, {
    id: "v_f_fototerapia",
    termES: "Fototerapia",
    termRO: "Fototerapie",
    categoryColor: "bg-yellow-50",
    defES: "Uso de luz (azul/blanca) para tratar la ictericia neonatal (convierte bilirrubina en forma soluble). También usada en dermatología (psoriasis) y depresión estacional.",
    defRO: "Utilizarea luminii (albastră/albă) pentru a trata icterul neonatal (convertește bilirubina în formă solubilă). De asemenea, utilizată în dermatologie (psoriazis) și depresie sezonieră.",
    nanda: {
        codeES: "00194",
        codeRO: "00194",
        labelES: "Ictericia neonatal",
        labelRO: "Icter neonatal"
    }
}, {
    id: "v_f_fractura",
    termES: "Fractura",
    termRO: "Fractură",
    categoryColor: "bg-stone-50",
    defES: "Rotura o pérdida de continuidad en la estructura de un hueso. Tipos: Abierta (hueso rompe piel), Cerrada, Conminuta (fragmentos), Tallo verde (niños). Requiere inmovilización.",
    defRO: "Ruptură sau pierdere de continuitate în structura unui os. Tipuri: Deschisă (osul rupe pielea), Închisă, Cominutivă (fragmente), În lemn verde (copii). Necesită imobilizare.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_f_fragilidad",
    termES: "Fragilidad (Anciano)",
    termRO: "Fragilitate (Vârstnic)",
    categoryColor: "bg-stone-50",
    defES: "Síndrome geriátrico biológico caracterizado por disminución de la reserva fisiológica y resistencia a estresores, aumentando el riesgo de caídas, discapacidad, hospitalización y muerte.",
    defRO: "Sindrom geriatric biologic caracterizat prin scăderea rezervei fiziologice și rezistenței la stresori, crescând riscul de căderi, dizabilitate, spitalizare și deces.",
    nanda: {
        codeES: "00305",
        codeRO: "00305",
        labelES: "Riesgo de fragilidad del anciano",
        labelRO: "Risc de fragilitate la vârstnic"
    }
}, {
    id: "v_f_frecuencia_cardiaca",
    termES: "Frecuencia Cardíaca",
    termRO: "Frecvență Cardiacă",
    categoryColor: "bg-red-50",
    defES: "Número de latidos del corazón por minuto (lpm). Normal en adultos: 60-100 lpm. Taquicardia (>100), Bradicardia (<60). Signo vital esencial.",
    defRO: "Numărul de bătăi ale inimii pe minut (bpm). Normal la adulți: 60-100 bpm. Tahicardie (>100), Bradicardie (<60). Semn vital esențial.",
    nanda: null
}, {
    id: "v_f_furosemida",
    termES: "Furosemida",
    termRO: "Furosemid",
    categoryColor: "bg-teal-50",
    defES: "Diurético de asa potente. Inhibe la reabsorción de sodio y cloruro en el asa de Henle renal. Usado en edema agudo de pulmón, insuficiencia cardíaca e hipertensión. Riesgo de hipopotasemia.",
    defRO: "Diuretic de ansă puternic. Inhibă reabsorbția sodiului și clorului în ansa lui Henle renală. Folosit în edem pulmonar acut, insuficiență cardiacă și hipertensiune. Risc de hipokaliemie.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_g_gafas_nasales",
    termES: "Gafas Nasales (Cánula)",
    termRO: "Ochelari Nazali (Canulă)",
    categoryColor: "bg-blue-50",
    defES: "Dispositivo de oxigenoterapia de bajo flujo que consiste en dos tubos pequeños que se insertan en las narinas. Permite al paciente comer y hablar. Flujo máx 4-5 L/min.",
    defRO: "Dispozitiv de oxigenoterapie cu debit mic care constă în două tuburi mici care se introduc în nări. Permite pacientului să mănânce și să vorbească. Debit max 4-5 L/min.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_g_galactorrea",
    termES: "Galactorrea",
    termRO: "Galactoree",
    categoryColor: "bg-pink-50",
    defES: "Secreción espontánea de leche por el pezón no asociada a la lactancia. Causas: prolactinoma (tumor hipofisario), hipotiroidismo o efectos secundarios de fármacos (antipsicóticos).",
    defRO: "Secreție spontană de lapte prin mamelon neasociată cu alăptarea. Cauze: prolactinom (tumoare hipofizară), hipotiroidism sau efecte secundare ale medicamentelor (antipsihotice).",
    nanda: null
}, {
    id: "v_g_gammaglobulina",
    termES: "Gammaglobulina (Inmunoglobulina)",
    termRO: "Gamaglobulină (Imunoglobulină)",
    categoryColor: "bg-green-50",
    defES: "Clase de proteínas plasmáticas (anticuerpos) que funcionan como parte del sistema inmunitario. Se administran como terapia (IgIV) para proporcionar inmunidad pasiva o tratar inmunodeficiencias.",
    defRO: "Clasă de proteine plasmatice (anticorpi) care funcționează ca parte a sistemului imunitar. Se administrează ca terapie (IgIV) pentru a oferi imunitate pasivă sau a trata imunodeficiențe.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_g_gammagrafia",
    termES: "Gammagrafía",
    termRO: "Gamagrafie (Scintigrafie)",
    categoryColor: "bg-purple-50",
    defES: "Técnica de imagen de medicina nuclear que utiliza radioisótopos (trazadores) para visualizar la función y estructura de órganos (tiroides, hueso, pulmón/V-Q, corazón).",
    defRO: "Tehnică imagistică de medicină nucleară care utilizează radioizotopi (trasori) pentru a vizualiza funcția și structura organelor (tiroidă, os, plămân/V-Q, inimă).",
    nanda: null
}, {
    id: "v_g_ganglio_linfatico",
    termES: "Ganglio Linfático",
    termRO: "Ganglion Limfatic",
    categoryColor: "bg-green-50",
    defES: "Pequeñas estructuras ovales del sistema linfático que filtran la linfa y albergan linfocitos. Se inflaman (adenopatía) ante infecciones o cáncer. Palpables en cuello, axila e ingle.",
    defRO: "Mici structuri ovale ale sistemului limfatic care filtrează limfa și găzduiesc limfocite. Se inflamează (adenopatie) în infecții sau cancer. Palpabili în gât, axilă și zona inghinală.",
    nanda: null
}, {
    id: "v_g_gangrena",
    termES: "Gangrena",
    termRO: "Gangrenă",
    categoryColor: "bg-stone-50",
    defES: "Muerte de tejido (necrosis) en masa debida a falta de riego sanguíneo o infección grave. Seca (isquemia, momificación), Húmeda (infección, pudrición) o Gaseosa (Clostridium, crepitación).",
    defRO: "Moartea țesutului (necroză) în masă datorată lipsei de irigație sanguină sau infecției grave. Uscată (ischemie, mumificare), Umedă (infecție, putrefacție) sau Gazoasă (Clostridium, crepitație).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_g_gastrectomia",
    termES: "Gastrectomía",
    termRO: "Gastrectomie",
    categoryColor: "bg-teal-50",
    defES: "Extirpación quirúrgica total o parcial del estómago. Indicada en cáncer gástrico, úlceras perforadas o cirugía bariátrica (manga gástrica). Riesgo de síndrome de dumping y déficit de B12.",
    defRO: "Extirparea chirurgicală totală sau parțială a stomacului. Indicată în cancer gastric, ulcere perforate sau chirurgie bariatrică (gastric sleeve). Risc de sindrom dumping și deficit de B12.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_g_gastritis",
    termES: "Gastritis",
    termRO: "Gastrită",
    categoryColor: "bg-orange-50",
    defES: "Inflamación de la mucosa gástrica. Aguda (alcohol, AINEs) o Crónica (H. pylori, autoinmune). Síntomas: dolor epigástrico, náuseas, vómitos. Puede causar sangrado.",
    defRO: "Inflamația mucoasei gastrice. Acută (alcool, AINS) sau Cronică (H. pylori, autoimună). Simptome: durere epigastrică, greață, vărsături. Poate cauza sângerare.",
    nanda: {
        codeES: "00134",
        codeRO: "00134",
        labelES: "Náuseas",
        labelRO: "Greață"
    }
}, {
    id: "v_g_gastroenteritis",
    termES: "Gastroenteritis",
    termRO: "Gastroenterită",
    categoryColor: "bg-orange-50",
    defES: "Inflamación del estómago e intestino delgado/grueso, comúnmente infecciosa (Rotavirus, Norovirus, Salmonella). Causa diarrea, vómitos, fiebre y dolor abdominal. Riesgo de deshidratación.",
    defRO: "Inflamația stomacului și intestinului subțire/gros, frecvent infecțioasă (Rotavirus, Norovirus, Salmonella). Cauzează diaree, vărsături, febră și durere abdominală. Risc de deshidratare.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_g_gastrostomia",
    termES: "Gastrostomía (PEG)",
    termRO: "Gastrostomie (PEG)",
    categoryColor: "bg-teal-50",
    defES: "Abertura quirúrgica en el estómago a través de la pared abdominal para introducir una sonda de alimentación (PEG: Gastrostomía Endoscópica Percutánea) en pacientes con disfagia prolongada.",
    defRO: "Deschidere chirurgicală în stomac prin peretele abdominal pentru a introduce o sondă de alimentare (PEG: Gastrostomie Endoscopică Percutanată) la pacienții cu disfagie prelungită.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_g_gasto_cardiaco",
    termES: "Gasto Cardíaco",
    termRO: "Debit Cardiac",
    categoryColor: "bg-red-50",
    defES: "Volumen de sangre bombeado por el corazón en un minuto. GC = Frecuencia Cardíaca x Volumen Sistólico. Valor normal reposo: 4-8 L/min. Indicador clave de función cardíaca.",
    defRO: "Volumul de sânge pompat de inimă într-un minut. DC = Frecvență Cardiacă x Volum Sistolic. Valoare normală repaus: 4-8 L/min. Indicator cheie al funcției cardiace.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_g_genetica",
    termES: "Genética",
    termRO: "Genetică",
    categoryColor: "bg-indigo-50",
    defES: "Rama de la biología que estudia la herencia y la variación de los caracteres biológicos transmitidos de generación en generación a través de los genes (ADN).",
    defRO: "Ramură a biologiei care studiază ereditatea și variația caracterelor biologice transmise din generație în generație prin intermediul genelor (ADN).",
    nanda: null
}, {
    id: "v_g_geriatria",
    termES: "Geriatría",
    termRO: "Geriatrie",
    categoryColor: "bg-stone-50",
    defES: "Rama de la medicina dedicada al estudio, prevención, diagnóstico y tratamiento de las enfermedades y problemas de salud de los ancianos. Se centra en la funcionalidad.",
    defRO: "Ramură a medicinei dedicată studiului, prevenirii, diagnosticului și tratamentului bolilor și problemelor de sănătate ale vârstnicilor. Se concentrează pe funcționalitate.",
    nanda: {
        codeES: "00305",
        codeRO: "00305",
        labelES: "Riesgo de fragilidad del anciano",
        labelRO: "Risc de fragilitate la vârstnic"
    }
}, {
    id: "v_g_ginecomastia",
    termES: "Ginecomastia",
    termRO: "Ginecomastie",
    categoryColor: "bg-pink-50",
    defES: "Agrandamiento benigno del tejido glandular mamario en varones, debido a un desequilibrio hormonal (exceso estrógenos/déficit testosterona). Puede ser fisiológica (pubertad, vejez) o patológica.",
    defRO: "Mărire benignă a țesutului glandular mamar la bărbați, datorită unui dezechilibru hormonal (exces estrogeni/deficit testosteron). Poate fi fiziologică (pubertate, bătrânețe) sau patologică.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_g_gingivitis",
    termES: "Gingivitis",
    termRO: "Gingivită",
    categoryColor: "bg-pink-50",
    defES: "Inflamación de las encías causada principalmente por la acumulación de placa bacteriana. Signos: encías rojas, inflamadas y sangrado fácil. Es reversible con buena higiene, si no, progresa a periodontitis.",
    defRO: "Inflamația gingiilor cauzată în principal de acumularea plăcii bacteriene. Semne: gingii roșii, inflamate și sângerare ușoară. Este reversibilă cu igienă bună, altfel progresează spre parodontită.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_g_glaucoma",
    termES: "Glaucoma",
    termRO: "Glaucom",
    categoryColor: "bg-blue-50",
    defES: "Grupo de enfermedades oculares que dañan el nervio óptico, a menudo por presión intraocular (PIO) elevada. Causa principal de ceguera irreversible. Visión en túnel.",
    defRO: "Grup de boli oculare care afectează nervul optic, adesea din cauza presiunii intraoculare (PIO) crescute. Cauza principală a orbirii ireversibile. Vedere în tunel.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_g_glucemia",
    termES: "Glucemia (Glicemia)",
    termRO: "Glicemie",
    categoryColor: "bg-orange-50",
    defES: "Concentración de glucosa en sangre. Valor normal en ayunas: 70-100 mg/dL. Hipoglucemia (<70) causa sudor, temblor, confusión. Hiperglucemia (>126 ayunas) indica diabetes.",
    defRO: "Concentrația de glucoză în sânge. Valoare normală pe nemâncate: 70-100 mg/dL. Hipoglicemia (<70) cauzează transpirație, tremur, confuzie. Hiperglicemia (>126 pe nemâncate) indică diabet.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_g_glucagon",
    termES: "Glucagón",
    termRO: "Glucagon",
    categoryColor: "bg-orange-50",
    defES: "Hormona pancreática (células alfa) que eleva la glucosa en sangre estimulando la liberación de glucógeno hepático. Antagonista de la insulina. Fármaco de emergencia para hipoglucemia grave.",
    defRO: "Hormon pancreatic (celule alfa) care crește glucoza în sânge stimulând eliberarea glicogenului hepatic. Antagonist al insulinei. Medicament de urgență pentru hipoglicemie severă.",
    nanda: null
}, {
    id: "v_g_glucosuria",
    termES: "Glucosuria",
    termRO: "Glicozurie",
    categoryColor: "bg-yellow-50",
    defES: "Presencia de glucosa en la orina. Normalmente no hay glucosa en orina. Aparece cuando la glucemia supera el umbral renal (~180 mg/dL), típico de diabetes mal controlada.",
    defRO: "Prezența glucozei în urină. În mod normal nu există glucoză în urină. Apare când glicemia depășește pragul renal (~180 mg/dL), tipic diabetului prost controlat.",
    nanda: null
}, {
    id: "v_g_gluteo",
    termES: "Glúteo",
    termRO: "Fesier (Gluteal)",
    categoryColor: "bg-red-50",
    defES: "Región de las nalgas. Músculos: Mayor (extensor cadera), Medio y Menor (abductores, sitio inyección IM ventroglútea, más segura). Zona común de úlceras por presión.",
    defRO: "Regiunea feselor. Mușchi: Mare (extensor șold), Mijlociu și Mic (abductori, loc injecție IM ventrogluteală, mai sigură). Zonă comună de ulcere de presiune.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_g_gonorrea",
    termES: "Gonorrea",
    termRO: "Gonoree",
    categoryColor: "bg-red-50",
    defES: "Infección de transmisión sexual (ITS) causada por la bacteria Neisseria gonorrhoeae. Causa uretritis (secreción purulenta, disuria) en hombres y cervicitis en mujeres. Puede causar esterilidad.",
    defRO: "Infecție cu transmitere sexuală (ITS) cauzată de bacteria Neisseria gonorrhoeae. Cauzează uretrită (secreție purulentă, disurie) la bărbați și cervicită la femei. Poate cauza sterilitate.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_g_gota",
    termES: "Gota",
    termRO: "Gută",
    categoryColor: "bg-stone-50",
    defES: "Tipo de artritis inflamatoria aguda causada por el depósito de cristales de ácido úrico en las articulaciones (frecuentemente dedo gordo pie: podagra). Muy dolorosa.",
    defRO: "Tip de artrită inflamatorie acută cauzată de depunerea cristalelor de acid uric în articulații (frecvent degetul mare picior: podagră). Foarte dureroasă.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_g_gram",
    termES: "Gram (Tinción de)",
    termRO: "Gram (Colorația)",
    categoryColor: "bg-purple-50",
    defES: "Técnica fundamental en microbiología para clasificar bacterias en dos grandes grupos según su pared celular: Gram positivas (violeta) y Gram negativas (rosa). Orienta el tratamiento antibiótico empírico.",
    defRO: "Tehnică fundamentală în microbiologie pentru clasificarea bacteriilor în două mari grupuri după peretele celular: Gram pozitive (violet) și Gram negative (roz). Orientează tratamentul antibiotic empiric.",
    nanda: null
}, {
    id: "v_g_gripe",
    termES: "Gripe (Influenza)",
    termRO: "Gripă",
    categoryColor: "bg-red-50",
    defES: "Infección viral respiratoria aguda muy contagiosa causada por el virus Influenza. Síntomas: fiebre alta súbita, mialgias, cefalea, tos seca y malestar general. Estacional.",
    defRO: "Infecție virală respiratorie acută foarte contagioasă cauzată de virusul Influenza. Simptome: febră mare bruscă, mialgii, cefalee, tuse seacă și stare generală de rău. Sezonieră.",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_g_guillain_barre",
    termES: "Guillain-Barré (Síndrome de)",
    termRO: "Guillain-Barré (Sindrom)",
    categoryColor: "bg-blue-50",
    defES: "Trastorno autoinmune agudo que afecta a los nervios periféricos (polineuropatía desmielinizante). Causa debilidad muscular progresiva y parálisis ascendente (de piernas a cabeza). Puede afectar la respiración.",
    defRO: "Tulburare autoimună acută care afectează nervii periferici (polineuropatie demielinizantă). Cauzează slăbiciune musculară progresivă și paralizie ascendentă (de la picioare la cap). Poate afecta respirația.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_h_habitat",
    termES: "Hábitat",
    termRO: "Habitat",
    categoryColor: "bg-green-50",
    defES: "Entorno o ambiente natural en el que vive un organismo (persona, animal o microorganismo). En salud pública, el hábitat influye en la exposición a vectores de enfermedades y condiciones sanitarias.",
    defRO: "Mediu sau ambient natural în care trăiește un organism (persoană, animal sau microorganism). În sănătatea publică, habitatul influențează expunerea la vectorii bolilor și condițiile sanitare.",
    nanda: null
}, {
    id: "v_h_habito",
    termES: "Hábito",
    termRO: "Obicei (Deprindere)",
    categoryColor: "bg-stone-50",
    defES: "Patrón de conducta adquirido mediante la repetición frecuente, que se realiza de forma automática. Los hábitos de salud (tabaquismo, dieta, ejercicio) son determinantes clave en la prevención de enfermedades crónicas.",
    defRO: "Model de comportament dobândit prin repetiție frecventă, care se realizează în mod automat. Obiceiurile de sănătate (fumat, dietă, exerciții fizice) sunt determinanți cheie în prevenirea bolilor cronice.",
    nanda: {
        codeES: "00188",
        codeRO: "00188",
        labelES: "Tendencia a adoptar conductas de riesgo para la salud",
        labelRO: "Tendință de a adopta comportamente de risc pentru sănătate"
    }
}, {
    id: "v_h_habla",
    termES: "Habla",
    termRO: "Vorbire",
    categoryColor: "bg-blue-50",
    defES: "Función motora de expresión del lenguaje mediante la articulación de sonidos. Requiere la coordinación de respiración, fonación y articulación. Trastornos: disartria, afasia (aunque la afasia es del lenguaje, no solo del habla mecánica).",
    defRO: "Funcție motorie de exprimare a limbajului prin articularea sunetelor. Necesită coordonarea respirației, fonației și articulației. Tulburări: dizartrie, afazie (deși afazia este de limbaj, nu doar de vorbire mecanică).",
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_h_halitosis",
    termES: "Halitosis",
    termRO: "Halitoză (Halenă)",
    categoryColor: "bg-yellow-50",
    defES: "Olor desagradable del aliento. Causas: mala higiene oral, enfermedad periodontal, sinusitis, deshidratación, cetoacidosis (olor frutal) o insuficiencia hepática (fetor hepaticus).",
    defRO: "Miros neplăcut al respirației. Cauze: igienă orală precară, boală parodontală, sinuzită, deshidratare, cetoacidoză (miros fructat) sau insuficiență hepatică (fetor hepaticus).",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_h_hallux_valgus",
    termES: "Hallux Valgus (Juanete)",
    termRO: "Hallux Valgus (Mont)",
    categoryColor: "bg-stone-50",
    defES: "Deformidad del dedo gordo del pie, que se desvía lateralmente hacia los otros dedos, con prominencia de la cabeza del primer metatarsiano. Causa dolor y dificultad para calzarse.",
    defRO: "Deformare a degetului mare de la picior, care deviază lateral spre celelalte degete, cu proeminența capului primului metatarsian. Cauzează durere și dificultate la încălțare.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_h_heces",
    termES: "Heces (Materia Fecal)",
    termRO: "Materii Fecale (Scaun)",
    categoryColor: "bg-orange-50",
    defES: "Residuo de la digestión expulsado por el recto. Su color, consistencia y composición (sangre, moco, parásitos) son indicadores diagnósticos importantes. Melena (negra), Hematoquecia (roja), Acolia (blanca).",
    defRO: "Reziduu al digestiei expulzat prin rect. Culoarea, consistența și compoziția sa (sânge, mucus, paraziți) sunt indicatori de diagnostic importanți. Melenă (neagră), Hematochezie (roșie), Acolie (albă).",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_h_helicobacter",
    termES: "Helicobacter pylori",
    termRO: "Helicobacter pylori",
    categoryColor: "bg-red-50",
    defES: "Bacteria gramnegativa que infecta la mucosa gástrica. Es la causa principal de gastritis crónica, úlcera péptica y factor de riesgo mayor para cáncer gástrico. Se erradica con antibióticos e IBP.",
    defRO: "Bacterie gram-negativă care infectează mucoasa gastrică. Este cauza principală a gastritei cronice, ulcerului peptic și factor de risc major pentru cancerul gastric. Se eradichează cu antibiotice și IPP.",
    nanda: null
}, {
    id: "v_h_hemangioma",
    termES: "Hemangioma",
    termRO: "Hemangiom",
    categoryColor: "bg-pink-50",
    defES: 'Tumor benigno formado por una acumulación anormal de vasos sanguíneos. Común en la piel de lactantes ("fresa"). La mayoría involuciona espontáneamente con el tiempo.',
    defRO: 'Tumoare benignă formată dintr-o acumulare anormală de vase de sânge. Comună pe pielea sugarilor ("căpșună"). Majoritatea involuează spontan în timp.',
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_h_hematemesis",
    termES: "Hematemesis",
    termRO: "Hematemeză",
    categoryColor: "bg-red-50",
    defES: 'Vómito de sangre. Roja brillante indica sangrado activo reciente (esófago, estómago); "posos de café" indica sangre digerida (contacto con ácido). Emergencia por hemorragia digestiva alta.',
    defRO: 'Vărsătură cu sânge. Roșu aprins indică sângerare activă recentă (esofag, stomac); "zaț de cafea" indică sânge digerat (contact cu acidul). Urgență pentru hemoragie digestivă superioară.',
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_h_hematocrito",
    termES: "Hematocrito (Hct)",
    termRO: "Hematocrit (Hct)",
    categoryColor: "bg-red-50",
    defES: "Porcentaje del volumen total de sangre compuesto por glóbulos rojos. Valor normal aprox: 40-50% hombres, 36-46% mujeres. Bajo en anemia/hemorragia; alto en policitemia/deshidratación.",
    defRO: "Procentajul volumului total de sânge compus din globule roșii. Valoare normală aprox: 40-50% bărbați, 36-46% femei. Scăzut în anemie/hemoragie; crescut în policitemie/deshidratare.",
    nanda: null
}, {
    id: "v_h_hematoma",
    termES: "Hematoma",
    termRO: "Hematom",
    categoryColor: "bg-purple-50",
    defES: "Colección localizada de sangre fuera de los vasos sanguíneos, generalmente en forma líquida dentro del tejido (a diferencia de la equimosis que es infiltración plana). Puede comprimir estructuras (ej. hematoma subdural).",
    defRO: "Colecție localizată de sânge în afara vaselor sanguine, de obicei în formă lichidă în interiorul țesutului (spre deosebire de echimoză care este infiltrație plană). Poate comprima structuri (ex. hematom subdural).",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_h_hematopoyesis",
    termES: "Hematopoyesis (Hemopoyesis)",
    termRO: "Hematopoieză",
    categoryColor: "bg-red-50",
    defES: "Proceso de formación, desarrollo y maduración de las células sanguíneas (eritrocitos, leucocitos, plaquetas) a partir de células madre en la médula ósea roja.",
    defRO: "Procesul de formare, dezvoltare și maturare a celulelor sanguine (eritrocite, leucocite, trombocite) din celule stem în măduva osoasă roșie.",
    nanda: null
}, {
    id: "v_h_hematoquecia",
    termES: "Hematoquecia (Rectorragia)",
    termRO: "Hematochezie (Rectoragie)",
    categoryColor: "bg-red-50",
    defES: "Emisión de sangre roja fresca o coagulada a través del ano, sola o mezclada con heces. Indica generalmente hemorragia digestiva baja (colon, recto, ano).",
    defRO: "Emisia de sânge roșu proaspăt sau coagulat prin anus, singur sau amestecat cu materii fecale. Indică în general hemoragie digestivă inferioară (colon, rect, anus).",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_h_hematuria",
    termES: "Hematuria",
    termRO: "Hematurie",
    categoryColor: "bg-red-50",
    defES: "Presencia de sangre en la orina. Macroscópica (visible, roja) o Microscópica. Causas: infección (cistitis), cálculos, tumores, trauma renal o anticoagulantes.",
    defRO: "Prezența sângelui în urină. Macroscopică (vizibilă, roșie) sau Microscopică. Cauze: infecție (cistită), calculi, tumori, traumatism renal sau anticoagulante.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_h_hemiplejia",
    termES: "Hemiplejia",
    termRO: "Hemiplegie",
    categoryColor: "bg-stone-50",
    defES: "Parálisis total de un lado del cuerpo (brazo y pierna ipsilateral). Signo clásico de lesión cerebral contralateral (ictus, tumor). Si es debilidad parcial, se llama hemiparesia.",
    defRO: "Paralizie totală a unei părți a corpului (braț și picior ipsilateral). Semn clasic de leziune cerebrală contralaterală (AVC, tumoare). Dacă este slăbiciune parțială, se numește hemipareză.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_h_hemocultivo",
    termES: "Hemocultivo",
    termRO: "Hemocultură",
    categoryColor: "bg-teal-50",
    defES: "Cultivo microbiológico de una muestra de sangre para detectar bacteriemia o fungemia (sepsis). Se extraen muestras seriadas en picos febriles, aeróbicas y anaeróbicas.",
    defRO: "Cultură microbiologică a unei probe de sânge pentru detectarea bacteriemiei sau fungemiei (sepsis). Se recoltează probe seriate în vârfuri febrile, aerobe și anaerobe.",
    nanda: null
}, {
    id: "v_h_hemodialisis",
    termES: "Hemodiálisis",
    termRO: "Hemodializă",
    categoryColor: "bg-blue-50",
    defES: "Terapia de sustitución renal que filtra la sangre fuera del cuerpo a través de un dializador (riñón artificial) para eliminar toxinas y exceso de líquido. Requiere fístula arteriovenosa o catéter.",
    defRO: "Terapie de substituție renală care filtrează sângele în afara corpului printr-un dializor (rinichi artificial) pentru a elimina toxinele și excesul de lichid. Necesită fistulă arteriovenoasă sau cateter.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_h_hemofilia",
    termES: "Hemofilia",
    termRO: "Hemofilie",
    categoryColor: "bg-red-50",
    defES: "Trastorno genético hereditario (ligado al cromosoma X) que impide la coagulación adecuada de la sangre debido al déficit de factores (VIII en tipo A, IX en tipo B). Riesgo de hemorragias espontáneas (hemartrosis).",
    defRO: "Tulburare genetică ereditară (legată de cromozomul X) care împiedică coagularea adecvată a sângelui din cauza deficitului de factori (VIII în tipul A, IX în tipul B). Risc de hemoragii spontane (hemartroze).",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_h_hemoglobina",
    termES: "Hemoglobina (Hb)",
    termRO: "Hemoglobină (Hb)",
    categoryColor: "bg-red-50",
    defES: "Proteína rica en hierro contenida en los glóbulos rojos, encargada del transporte de oxígeno desde los pulmones a los tejidos y CO2 a la inversa. Cifras normales: 13-17 g/dL hombres, 12-15 g/dL mujeres.",
    defRO: "Proteină bogată în fier conținută în globulele roșii, responsabilă cu transportul oxigenului de la plămâni la țesuturi și CO2 invers. Valori normale: 13-17 g/dL bărbați, 12-15 g/dL femei.",
    nanda: null
}, {
    id: "v_h_hemolisis",
    termES: "Hemólisis",
    termRO: "Hemoliză",
    categoryColor: "bg-red-50",
    defES: "Destrucción o ruptura de los glóbulos rojos con liberación de hemoglobina al plasma. Puede ser intravasular o extravascular (bazo). Causa anemia, ictericia y hemoglobinuria.",
    defRO: "Distrugerea sau ruptura globulelor roșii cu eliberarea hemoglobinei în plasmă. Poate fi intravasculară sau extravasculară (splină). Cauzează anemie, icter și hemoglobinurie.",
    nanda: null
}, {
    id: "v_h_hemoptisis",
    termES: "Hemoptisis",
    termRO: "Hemoptizie",
    categoryColor: "bg-red-50",
    defES: "Expulsión de sangre procedente de las vías respiratorias inferiores (pulmones/bronquios) mediante la tos. Diferenciar de hematemesis. Causas: tuberculosis, cáncer de pulmón, bronquiectasias, TEP.",
    defRO: "Expulzarea sângelui provenit din căile respiratorii inferioare (plămâni/bronhii) prin tuse. A se diferenția de hematemeză. Cauze: tuberculoză, cancer pulmonar, bronșiectazii, TEP.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_h_hemorragia",
    termES: "Hemorragia",
    termRO: "Hemoragie",
    categoryColor: "bg-red-50",
    defES: "Pérdida de sangre de los vasos sanguíneos (arterial, venosa o capilar). Puede ser interna o externa. La hemorragia masiva conduce al shock hipovolémico y muerte si no se controla.",
    defRO: "Pierderea de sânge din vasele sanguine (arterială, venoasă sau capilară). Poate fi internă sau externă. Hemoragia masivă duce la șoc hipovolemic și moarte dacă nu este controlată.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_h_hemorroide",
    termES: "Hemorroide",
    termRO: "Hemoroid",
    categoryColor: "bg-purple-50",
    defES: "Dilatación varicosa de las venas del plexo hemorroidal en el ano y recto. Internas o externas. Causas: estreñimiento, embarazo, esfuerzo. Síntomas: sangrado, dolor, prolapso, prurito.",
    defRO: "Dilatare varicoasă a venelor plexului hemoroidal în anus și rect. Interne sau externe. Cauze: constipație, sarcină, efort. Simptome: sângerare, durere, prolaps, prurit.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_h_hemostasia",
    termES: "Hemostasia",
    termRO: "Hemostază",
    categoryColor: "bg-red-50",
    defES: "Conjunto de mecanismos fisiológicos (vasoconstricción, plaquetas, coagulación) o procedimientos médicos (compresión, sutura, cauterización) que detienen una hemorragia.",
    defRO: "Ansamblu de mecanisme fiziologice (vasoconstricție, trombocite, coagulare) sau proceduri medicale (compresiune, sutură, cauterizare) care opresc o hemoragie.",
    nanda: null
}, {
    id: "v_h_hemotorax",
    termES: "Hemotórax",
    termRO: "Hemotorax",
    categoryColor: "bg-red-50",
    defES: "Acumulación de sangre en la cavidad pleural, generalmente por trauma torácico, cirugía o rotura vascular. Comprime el pulmón causando colapso y dificultad respiratoria. Requiere drenaje.",
    defRO: "Acumulare de sânge în cavitatea pleurală, de obicei prin traumatism toracic, chirurgie sau ruptură vasculară. Comprimă plămânul cauzând colaps și dificultate respiratorie. Necesită drenaj.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_h_heparina",
    termES: "Heparina",
    termRO: "Heparină",
    categoryColor: "bg-teal-50",
    defES: "Fármaco anticoagulante parenteral de acción rápida. Heparina no fraccionada (IV/SC, requiere control TTPa) y Heparina de Bajo Peso Molecular (HBPM, SC, más estable). Previene y trata trombosis.",
    defRO: "Medicament anticoagulant parenteral cu acțiune rapidă. Heparină nefracționată (IV/SC, necesită control aPTT) și Heparină cu Greutate Moleculară Mică (HGMM, SC, mai stabilă). Previne și tratează tromboza.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_h_hepatico",
    termES: "Hepático",
    termRO: "Hepatic",
    categoryColor: "bg-orange-50",
    defES: "Relativo al hígado. Arteria hepática, vena hepática, conducto hepático. Insuficiencia hepática: fallo de las funciones del hígado (metabolismo, detoxificación, síntesis proteínas).",
    defRO: "Referitor la ficat. Arteră hepatică, venă hepatică, canal hepatic. Insuficiență hepatică: eșecul funcțiilor ficatului (metabolism, detoxifiere, sinteză proteine).",
    nanda: null
}, {
    id: "v_h_hepatitis",
    termES: "Hepatitis",
    termRO: "Hepatită",
    categoryColor: "bg-yellow-50",
    defES: "Inflamación del hígado. Viral (A, B, C, D, E), tóxica (alcohol, fármacos) o autoinmune. Puede causar ictericia, hepatomegalia y alteración de enzimas hepáticas (transaminasas).",
    defRO: "Inflamația ficatului. Virală (A, B, C, D, E), toxică (alcool, medicamente) sau autoimună. Poate cauza icter, hepatomegalie și alterarea enzimelor hepatice (transaminaze).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_h_hepatomegalia",
    termES: "Hepatomegalia",
    termRO: "Hepatomegalie",
    categoryColor: "bg-orange-50",
    defES: "Agrandamiento anormal del tamaño del hígado, palpable bajo el reborde costal derecho. Signo de hepatitis, cirrosis, insuficiencia cardíaca derecha, cáncer o esteatosis.",
    defRO: "Mărire anormală a dimensiunii ficatului, palpabilă sub rebordul costal drept. Semn de hepatită, ciroză, insuficiență cardiacă dreaptă, cancer sau steatoză.",
    nanda: null
}, {
    id: "v_h_herida",
    termES: "Herida",
    termRO: "Plagă (Rană)",
    categoryColor: "bg-stone-50",
    defES: "Pérdida de continuidad de la piel o mucosas causada por trauma físico, térmico o químico. Incisa, contusa, punzante, abrasiva. Aguda o crónica (úlcera).",
    defRO: "Pierderea continuității pielii sau mucoaselor cauzată de traumă fizică, termică sau chimică. Înjunghiată, contuză, înțepată, abrazivă. Acută sau cronică (ulcer).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_h_hernia",
    termES: "Hernia",
    termRO: "Hernie",
    categoryColor: "bg-stone-50",
    defES: "Protrusión de un órgano o tejido a través de una abertura anormal en la pared muscular que lo contiene. Inguinal, Umbilical, Hiatal (estómago hacia tórax), Discal (columna). Riesgo de estrangulamiento.",
    defRO: "Protruzia unui organ sau țesut printr-o deschidere anormală în peretele muscular care îl conține. Inghinală, Ombilicală, Hiatală (stomac spre torace), Discală (coloană). Risc de strangulare.",
    nanda: null
}, {
    id: "v_h_herpes_simple",
    termES: "Herpes Simple (VHS)",
    termRO: "Herpes Simplex",
    categoryColor: "bg-pink-50",
    defES: 'Infección viral recurrente (VHS-1 o VHS-2) caracterizada por vesículas dolorosas agrupadas sobre base eritematosa. Labial ("calentura") o Genital. Permanece latente en ganglios nerviosos.',
    defRO: 'Infecție virală recurentă (HSV-1 sau HSV-2) caracterizată prin vezicule dureroase grupate pe o bază eritematoasă. Labial ("febră") sau Genital. Rămâne latent în ganglionii nervoși.',
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_h_herpes_zoster",
    termES: "Herpes Zóster (Zona)",
    termRO: "Zona Zoster",
    categoryColor: "bg-red-50",
    defES: "Reactivación del virus varicela-zóster. Erupción vesicular dolorosa unilateral que sigue un dermatoma. Puede dejar neuralgia postherpética.",
    defRO: "Reactivarea virusului varicelo-zosterian. Erupție veziculoasă dureroasă unilaterală care urmează un dermatom. Poate lăsa nevralgie postherpetică.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_h_hidratacion",
    termES: "Hidratación",
    termRO: "Hidratare",
    categoryColor: "bg-blue-50",
    defES: "Proceso de aportar agua al organismo para mantener el equilibrio hídrico y la homeostasis. Oral (fisiológica) o Intravenosa (sueroterapia). Esencial para la función celular y renal.",
    defRO: "Procesul de aport de apă în organism pentru a menține echilibrul hidric și homeostazia. Orală (fiziologică) sau Intravenoasă (seroterapie). Esențială pentru funcția celulară și renală.",
    nanda: {
        codeES: "00025",
        codeRO: "00025",
        labelES: "Riesgo de desequilibrio de volumen de líquidos",
        labelRO: "Risc de dezechilibru al volumului lichidian"
    }
}, {
    id: "v_h_hidrocefalia",
    termES: "Hidrocefalia",
    termRO: "Hidrocefalie",
    categoryColor: "bg-blue-50",
    defES: "Acumulación excesiva de líquido cefalorraquídeo (LCR) en los ventrículos cerebrales, causando dilatación ventricular y aumento de la presión intracraneal. Tratamiento: derivación (shunt).",
    defRO: "Acumulare excesivă de lichid cefalorahidian (LCR) în ventriculii cerebrali, cauzând dilatare ventriculară și creșterea presiunii intracraniene. Tratament: derivație (șunt).",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_h_hidrocortisona",
    termES: "Hidrocortisona (Cortisol)",
    termRO: "Hidrocortizon (Cortizol)",
    categoryColor: "bg-green-50",
    defES: "Glucocorticoide natural o sintético de acción corta. Antiinflamatorio e inmunosupresor. Usado en insuficiencia suprarrenal (Addison), shock anafiláctico, asma y dermatitis.",
    defRO: "Glucocorticoid natural sau sintetic cu acțiune scurtă. Antiinflamator și imunosupresor. Folosit în insuficiență suprarenală (Addison), șoc anafilactic, astm și dermatită.",
    nanda: null
}, {
    id: "v_h_hidronefrosis",
    termES: "Hidronefrosis",
    termRO: "Hidronefroză",
    categoryColor: "bg-blue-50",
    defES: "Dilatación de la pelvis y cálices renales por acumulación de orina debida a una obstrucción en el tracto urinario (cálculo, tumor, estenosis). Puede causar atrofia renal.",
    defRO: "Dilatarea pelvisului și calicelor renale prin acumulare de urină datorită unei obstrucții în tractul urinar (calcul, tumoare, stenoză). Poate cauza atrofie renală.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_h_higiene",
    termES: "Higiene",
    termRO: "Igienă",
    categoryColor: "bg-green-50",
    defES: "Conjunto de prácticas y técnicas para la limpieza y aseo del cuerpo, destinadas a conservar la salud y prevenir enfermedades. Higiene de manos: medida nº1 contra infecciones nosocomiales.",
    defRO: "Ansamblu de practici și tehnici pentru curățenia și îngrijirea corpului, destinate păstrării sănătății și prevenirii bolilor. Igiena mâinilor: măsura nr. 1 împotriva infecțiilor nosocomiale.",
    nanda: {
        codeES: "00108",
        codeRO: "00108",
        labelES: "Déficit de autocuidado: Baño",
        labelRO: "Deficit de auto-îngrijire: Baie"
    }
}, {
    id: "v_h_himen",
    termES: "Himen",
    termRO: "Himen",
    categoryColor: "bg-pink-50",
    defES: "Membrana mucosa delgada que cubre parcialmente la entrada de la vagina en mujeres vírgenes. Puede romperse por relaciones sexuales, deporte o uso de tampones.",
    defRO: "Membrană mucoasă subțire care acoperă parțial intrarea în vagin la femeile virgine. Se poate rupe prin relații sexuale, sport sau utilizarea tampoanelor.",
    nanda: null
}, {
    id: "v_h_hiperbilirrubinemia",
    termES: "Hiperbilirrubinemia",
    termRO: "Hiperbilirubinemie",
    categoryColor: "bg-yellow-50",
    defES: "Nivel excesivo de bilirrubina en sangre. Causa ictericia. En neonatos, niveles muy altos pueden causar daño cerebral (kernicterus).",
    defRO: "Nivel excesiv de bilirubină în sânge. Cauzează icter. La nou-născuți, nivelurile foarte ridicate pot cauza leziuni cerebrale (kernicterus).",
    nanda: {
        codeES: "00194",
        codeRO: "00194",
        labelES: "Ictericia neonatal",
        labelRO: "Icter neonatal"
    }
}, {
    id: "v_h_hipercalcemia",
    termES: "Hipercalcemia",
    termRO: "Hipercalcemie",
    categoryColor: "bg-stone-50",
    defES: "Nivel elevado de calcio sérico (>10.5 mg/dL). Causas: hiperparatiroidismo, cáncer (metástasis óseas). Síntomas: debilidad, confusión, cálculos renales, arritmias.",
    defRO: "Nivel crescut de calciu seric (>10.5 mg/dL). Cauze: hiperparatiroidism, cancer (metastaze osoase). Simptome: slăbiciune, confuzie, calculi renali, aritmii.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_h_hipercapnia",
    termES: "Hipercapnia",
    termRO: "Hipercapnie",
    categoryColor: "bg-blue-50",
    defES: "Exceso de dióxido de carbono (CO2) en la sangre arterial (PaCO2 > 45 mmHg). Causa: hipoventilación (EPOC, sedación). Provoca acidosis respiratoria y somnolencia (narcosis por CO2).",
    defRO: "Exces de dioxid de carbon (CO2) în sângele arterial (PaCO2 > 45 mmHg). Cauză: hipoventilație (BPOC, sedare). Provoacă acidoză respiratorie și somnolență (narcoză prin CO2).",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_h_hipercolesterolemia",
    termES: "Hipercolesterolemia",
    termRO: "Hipercolesterolemie",
    categoryColor: "bg-yellow-50",
    defES: "Niveles elevados de colesterol en sangre (>200 mg/dL). Factor de riesgo principal para aterosclerosis, enfermedad coronaria e ictus.",
    defRO: "Niveluri crescute de colesterol în sânge (>200 mg/dL). Factor de risc principal pentru ateroscleroză, boală coronariană și AVC.",
    nanda: null
}, {
    id: "v_h_hiperemesis",
    termES: "Hiperemesis Gravídica",
    termRO: "Hiperemeză Gravidică",
    categoryColor: "bg-pink-50",
    defES: "Vómitos severos, persistentes e incontrolables durante el embarazo que provocan deshidratación, pérdida de peso >5% y cetosis. Requiere hospitalización y fluidoterapia.",
    defRO: "Vărsături severe, persistente și incontrolabile în timpul sarcinii care provoacă deshidratare, scădere în greutate >5% și cetoză. Necesită spitalizare și fluidoterapie.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_h_hiperglucemia",
    termES: "Hiperglucemia",
    termRO: "Hiperglicemie",
    categoryColor: "bg-orange-50",
    defES: "Nivel elevado de glucosa en sangre (generalmente >140 mg/dL postprandial o >100 en ayunas). Signo cardinal de diabetes. Síntomas (si es alta): poliuria, polidipsia, visión borrosa.",
    defRO: "Nivel crescut de glucoză în sânge (de obicei >140 mg/dL postprandial sau >100 pe nemâncate). Semn cardinal de diabet. Simptome (dacă este mare): poliurie, polidipsie, vedere încețoșată.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_h_hiperpotasemia",
    termES: "Hiperpotasemia (Hiperkalemia)",
    termRO: "Hiperkaliemie",
    categoryColor: "bg-red-50",
    defES: "Nivel elevado de potasio en sangre (>5.0 mEq/L). Peligrosa porque altera la conducción cardíaca y puede causar arritmias mortales y paro cardíaco. Causa común: insuficiencia renal.",
    defRO: "Nivel crescut de potasiu în sânge (>5.0 mEq/L). Periculoasă deoarece alterează conducerea cardiacă și poate cauza aritmii mortale și stop cardiac. Cauză comună: insuficiență renală.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_h_hipernatremia",
    termES: "Hipernatremia",
    termRO: "Hipernatremie",
    categoryColor: "bg-blue-50",
    defES: "Nivel elevado de sodio en sangre (>145 mEq/L). Indica déficit de agua relativo (deshidratación). Causa sed intensa, confusión, convulsiones y coma.",
    defRO: "Nivel crescut de sodiu în sânge (>145 mEq/L). Indică deficit de apă relativ (deshidratare). Cauzează sete intensă, confuzie, convulsii și comă.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_h_hiperplasia",
    termES: "Hiperplasia",
    termRO: "Hiperplazie",
    categoryColor: "bg-stone-50",
    defES: "Aumento del tamaño de un órgano o tejido debido al aumento del número de células (proliferación). Ej. Hiperplasia Benigna de Próstata (HBP).",
    defRO: "Creșterea dimensiunii unui organ sau țesut datorită creșterii numărului de celule (proliferare). Ex. Hiperplazie Benignă de Prostată (HBP).",
    nanda: null
}, {
    id: "v_h_hipertension",
    termES: "Hipertensión Arterial (HTA)",
    termRO: "Hipertensiune Arterială (HTA)",
    categoryColor: "bg-red-50",
    defES: 'Elevación sostenida de la presión arterial sistémica (≥140/90 mmHg). "Asesino silencioso". Daña vasos, corazón, riñones, ojos y cerebro. Factor riesgo mayor CV.',
    defRO: 'Creștere susținută a tensiunii arteriale sistemice (≥140/90 mmHg). "Ucigaș tăcut". Deteriorează vasele, inima, rinichii, ochii și creierul. Factor de risc major CV.',
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_h_hipertermia",
    termES: "Hipertermia",
    termRO: "Hipertermie",
    categoryColor: "bg-red-50",
    defES: 'Elevación de la temperatura corporal por encima de lo normal debido a un fallo en la termorregulación (golpe de calor) o fármacos (hipertermia maligna), no a un nuevo "set point" hipotalámico (como la fiebre).',
    defRO: 'Creșterea temperaturii corporale peste normal din cauza unui eșec în termoreglare (șoc termic) sau medicamente (hipertermie malignă), nu unui nou "set point" hipotalamic (ca febra).',
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_h_hipertiroidismo",
    termES: "Hipertiroidismo",
    termRO: "Hipertiroidism",
    categoryColor: "bg-violet-50",
    defES: "Exceso de hormonas tiroideas circulantes (T3, T4). Acelera el metabolismo. Síntomas: taquicardia, pérdida de peso, ansiedad, temblor, intolerancia al calor. Causa común: Graves.",
    defRO: "Exces de hormoni tiroidieni circulanți (T3, T4). Accelerează metabolismul. Simptome: tahicardie, scădere în greutate, anxietate, tremur, intoleranță la căldură. Cauză comună: Graves.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_h_hipertrofia",
    termES: "Hipertrofia",
    termRO: "Hipertrofie",
    categoryColor: "bg-stone-50",
    defES: "Aumento del tamaño de un órgano o tejido debido al aumento del tamaño de sus células (no del número). Ej. Hipertrofia muscular (ejercicio), Hipertrofia ventricular (HTA).",
    defRO: "Creșterea dimensiunii unui organ sau țesut datorită creșterii dimensiunii celulelor sale (nu a numărului). Ex. Hipertrofie musculară (exercițiu), Hipertrofie ventriculară (HTA).",
    nanda: null
}, {
    id: "v_h_hiperventilacion",
    termES: "Hiperventilación",
    termRO: "Hiperventilație",
    categoryColor: "bg-sky-50",
    defES: "Respiración rápida y profunda que excede las necesidades metabólicas, eliminando demasiado CO2 (hipocapnia). Causa alcalosis respiratoria, mareo y parestesias. Común en ansiedad.",
    defRO: "Respirație rapidă și profundă care depășește nevoile metabolice, eliminând prea mult CO2 (hipocapnie). Cauzează alcaloză respiratorie, amețeală și parestezii. Comună în anxietate.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_h_hipnosis",
    termES: "Hipnosis",
    termRO: "Hipnoză",
    categoryColor: "bg-purple-50",
    defES: "Estado alterado de conciencia caracterizado por atención focalizada, relajación extrema y alta sugestionabilidad. Usado terapéuticamente para dolor, ansiedad o fobias.",
    defRO: "Stare alterată de conștiență caracterizată prin atenție focalizată, relaxare extremă și sugestibilitate ridicată. Folosită terapeutic pentru durere, anxietate sau fobii.",
    nanda: null
}, {
    id: "v_h_hipo",
    termES: "Hipo (Singulto)",
    termRO: "Sughiț",
    categoryColor: "bg-cyan-50",
    defES: 'Contracciones espasmódicas involuntarias y repetitivas del diafragma seguidas de un cierre brusco de la glotis (sonido "hip"). Generalmente benigno y autolimitado.',
    defRO: 'Contracții spasmodice involuntare și repetitive ale diafragmei urmate de o închidere bruscă a glotei (sunet "hîc"). În general benign și autolimitat.',
    nanda: null
}, {
    id: "v_h_hipoacusia",
    termES: "Hipoacusia (Sordera)",
    termRO: "Hipoacuzie (Surditate)",
    categoryColor: "bg-stone-50",
    defES: "Disminución de la capacidad auditiva. Conductiva (problema en oído externo/medio) o Neurosensorial (oído interno/nervio). Presbiacusia: pérdida asociada a la edad.",
    defRO: "Scăderea capacității auditive. De transmisie (problemă în urechea externă/medie) sau Neurosenzorială (ureche internă/nerv). Prezbiacuzie: pierdere asociată cu vârsta.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: auditiva",
        labelRO: "Tulburare de percepție senzorială: auditivă"
    }
}, {
    id: "v_h_hipocalcemia",
    termES: "Hipocalcemia",
    termRO: "Hipocalcemie",
    categoryColor: "bg-yellow-50",
    defES: "Nivel bajo de calcio en sangre (<8.5 mg/dL). Aumenta la excitabilidad neuromuscular. Signos: tetania, espasmos, Chvostek y Trousseau positivos, parestesias, arritmias.",
    defRO: "Nivel scăzut de calciu în sânge (<8.5 mg/dL). Crește excitabilitatea neuromusculară. Semne: tetanie, spasme, Chvostek și Trousseau pozitive, parestezii, aritmii.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_h_hipocondrio",
    termES: "Hipocondrio",
    termRO: "Hipocondru",
    categoryColor: "bg-stone-50",
    defES: "Regiones superiores laterales del abdomen, bajo las costillas. Derecho (hígado, vesícula). Izquierdo (bazo, estómago).",
    defRO: "Regiuni superioare laterale ale abdomenului, sub coaste. Drept (ficat, vezică biliară). Stâng (splină, stomac).",
    nanda: null
}, {
    id: "v_h_hipodermis",
    termES: "Hipodermis (Tejido Subcutáneo)",
    termRO: "Hipoderm (Țesut Subcutanat)",
    categoryColor: "bg-yellow-50",
    defES: "Capa más profunda de la piel, formada por tejido adiposo y conectivo. Aísla térmicamente, almacena energía y amortigua golpes. Vía de administración de insulina/heparina.",
    defRO: "Stratul cel mai profund al pielii, format din țesut adipos și conjunctiv. Izolează termic, stochează energie și amortizează loviturile. Cale de administrare pentru insulină/heparină.",
    nanda: null
}, {
    id: "v_h_hipoglucemia",
    termES: "Hipoglucemia",
    termRO: "Hipoglicemie",
    categoryColor: "bg-orange-50",
    defES: "Nivel bajo de glucosa en sangre (<70 mg/dL). Emergencia en diabéticos (exceso insulina). Síntomas: sudor frío, temblor, hambre, confusión, coma. Tto: glucosa oral o IV.",
    defRO: "Nivel scăzut de glucoză în sânge (<70 mg/dL). Urgență la diabetici (exces insulină). Simptome: transpirație rece, tremur, foame, confuzie, comă. Trat: glucoză orală sau IV.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_h_hipopotasemia",
    termES: "Hipopotasemia (Hipokalemia)",
    termRO: "Hipokaliemie",
    categoryColor: "bg-red-50",
    defES: "Nivel bajo de potasio en sangre (<3.5 mEq/L). Causas: diuréticos, diarrea, vómitos. Síntomas: debilidad muscular, calambres, íleo, arritmias cardíacas.",
    defRO: "Nivel scăzut de potasiu în sânge (<3.5 mEq/L). Cauze: diuretice, diaree, vărsături. Simptome: slăbiciune musculară, crampe, ileus, aritmii cardiace.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_h_hiponatremia",
    termES: "Hiponatremia",
    termRO: "Hiponatremie",
    categoryColor: "bg-blue-50",
    defES: "Nivel bajo de sodio en sangre (<135 mEq/L). Exceso de agua relativo. Puede causar edema cerebral agudo: cefalea, náuseas, confusión, convulsiones.",
    defRO: "Nivel scăzut de sodiu în sânge (<135 mEq/L). Exces de apă relativ. Poate cauza edem cerebral acut: cefalee, greață, confuzie, convulsii.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_h_hipofisis",
    termES: "Hipófisis (Glándula Pituitaria)",
    termRO: "Hipofiză (Glanda Pituitară)",
    categoryColor: "bg-purple-50",
    defES: "Glándula endocrina maestra situada en la silla turca del esfenoides. Controla otras glándulas mediante hormonas trópicas (TSH, ACTH, FSH/LH). Lóbulos: anterior (Adeno) y posterior (Neuro).",
    defRO: "Glandă endocrină maestră situată în șaua turcească a sfenoidului. Controlează alte glande prin hormoni tropici (TSH, ACTH, FSH/LH). Loburi: anterior (Adeno) și posterior (Neuro).",
    nanda: null
}, {
    id: "v_h_hipotalamo",
    termES: "Hipotálamo",
    termRO: "Hipotalamus",
    categoryColor: "bg-purple-50",
    defES: "Centro de control vital del cerebro. Regula el sistema nervioso autónomo, temperatura, hambre, sed, sueño y el sistema endocrino (controla la hipófisis).",
    defRO: "Centru de control vital al creierului. Reglează sistemul nervos autonom, temperatura, foamea, setea, somnul și sistemul endocrin (controlează hipofiza).",
    nanda: {
        codeES: "00008",
        codeRO: "00008",
        labelES: "Termorregulación ineficaz",
        labelRO: "Termoreglare ineficientă"
    }
}, {
    id: "v_h_hipotension",
    termES: "Hipotensión",
    termRO: "Hipotensiune",
    categoryColor: "bg-red-50",
    defES: "Presión arterial anormalmente baja (<90/60 mmHg) que provoca perfusión inadecuada de órganos. Síntomas: mareo, síncope, visión borrosa. Ortostática: al ponerse de pie.",
    defRO: "Tensiune arterială anormal de scăzută (<90/60 mmHg) care provoacă perfuzie inadecvată a organelor. Simptome: amețeală, sincopă, vedere încețoșată. Ortostatică: la ridicarea în picioare.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_h_hipotermia",
    termES: "Hipotermia",
    termRO: "Hipotermie",
    categoryColor: "bg-blue-50",
    defES: "Temperatura corporal central <35°C. Depresión de funciones vitales. Leve (temblores), Grave (inconsciencia, arritmias, paro). Urgencia médica. Se usa terapéuticamente tras PCR.",
    defRO: "Temperatura corporală centrală <35°C. Depresia funcțiilor vitale. Ușoară (tremurături), Gravă (inconștiență, aritmii, stop). Urgență medicală. Se folosește terapeutic după PCR.",
    nanda: {
        codeES: "00006",
        codeRO: "00006",
        labelES: "Hipotermia",
        labelRO: "Hipotermie"
    }
}, {
    id: "v_h_hipotiroidismo",
    termES: "Hipotiroidismo",
    termRO: "Hipotiroidism",
    categoryColor: "bg-violet-50",
    defES: "Déficit de hormonas tiroideas. Ralentiza el metabolismo. Síntomas: fatiga, aumento peso, frío, estreñimiento, piel seca, bradicardia. Tto: Levotiroxina.",
    defRO: "Deficit de hormoni tiroidieni. Încetinește metabolismul. Simptome: oboseală, creștere în greutate, frig, constipație, piele uscată, bradicardie. Trat: Levotiroxină.",
    nanda: {
        codeES: "00093",
        codeRO: "00093",
        labelES: "Fatiga",
        labelRO: "Oboseală"
    }
}, {
    id: "v_h_hipovolemia",
    termES: "Hipovolemia",
    termRO: "Hipovolemie",
    categoryColor: "bg-red-50",
    defES: "Disminución del volumen de sangre circulante (o líquido extracelular). Causas: hemorragia, deshidratación grave, quemaduras. Lleva al shock hipovolémico.",
    defRO: "Scăderea volumului de sânge circulant (sau lichid extracelular). Cauze: hemoragie, deshidratare severă, arsuri. Duce la șoc hipovolemic.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_h_hipoxia",
    termES: "Hipoxia",
    termRO: "Hipoxie",
    categoryColor: "bg-blue-50",
    defES: "Suministro insuficiente de oxígeno a los tejidos para mantener las funciones corporales. Puede ser hipoxémica (baja O2 sangre), anémica, circulatoria o histotóxica. Causa cianosis.",
    defRO: "Aport insuficient de oxigen la țesuturi pentru a menține funcțiile corporale. Poate fi hipoxemică (O2 scăzut în sânge), anemică, circulatorie sau histotoxică. Cauzează cianoză.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_h_histerectomia",
    termES: "Histerectomía",
    termRO: "Histerectomie",
    categoryColor: "bg-teal-50",
    defES: "Extirpación quirúrgica del útero. Total (cuerpo y cuello) o Subtotal. Con o sin anexectomía (ovarios/trompas). Indicada en miomas, cáncer, prolapso o sangrado incontrolable.",
    defRO: "Extirparea chirurgicală a uterului. Totală (corp și col) sau Subtotală. Cu sau fără anexectomie (ovare/trompe). Indicată în mioame, cancer, prolaps sau sângerare incontrolabilă.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_h_historia_clinica",
    termES: "Historia Clínica",
    termRO: "Foaie de Observație (Istoric Medical)",
    categoryColor: "bg-stone-50",
    defES: "Documento médico-legal que recoge toda la información relativa a la salud del paciente: anamnesis, exploración, evolución, tratamiento y pruebas. Base de la continuidad asistencial.",
    defRO: "Document medico-legal care cuprinde toate informațiile referitoare la sănătatea pacientului: anamneză, explorare, evoluție, tratament și analize. Baza continuității asistenței.",
    nanda: null
}, {
    id: "v_h_histologia",
    termES: "Histología",
    termRO: "Histologie",
    categoryColor: "bg-stone-50",
    defES: "Ciencia que estudia la estructura microscópica de los tejidos biológicos. Fundamental para el diagnóstico anatomopatológico (biopsias) de enfermedades como el cáncer.",
    defRO: "Știință care studiază structura microscopică a țesuturilor biologice. Fundamentală pentru diagnosticul anatomopatologic (biopsii) al bolilor precum cancerul.",
    nanda: null
}, {
    id: "v_h_homeostasis",
    termES: "Homeostasis",
    termRO: "Homeostazie",
    categoryColor: "bg-green-50",
    defES: "Capacidad del organismo para mantener un equilibrio interno estable y constante (pH, temperatura, glucosa) a pesar de los cambios en el entorno externo. La enfermedad es la pérdida de homeostasis.",
    defRO: "Capacitatea organismului de a menține un echilibru intern stabil și constant (pH, temperatură, glucoză) în ciuda schimbărilor din mediul extern. Boala este pierderea homeostaziei.",
    nanda: null
}, {
    id: "v_h_hongo",
    termES: "Hongo",
    termRO: "Ciupercă (Fung)",
    categoryColor: "bg-stone-50",
    defES: "Organismo eucariota del reino Fungi. Incluye levaduras (unicelulares, Candida) y mohos (multicelulares). Las micosis son infecciones fúngicas (tiña, pie de atleta, aspergilosis).",
    defRO: "Organism eucariot din regnul Fungi. Include drojdii (unicelulare, Candida) și mucegaiuri (multicelulare). Micozele sunt infecții fungice (pecingine, picior de atlet, aspergiloză).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_h_hormona",
    termES: "Hormona",
    termRO: "Hormon",
    categoryColor: "bg-purple-50",
    defES: "Sustancia química mensajera secretada por glándulas endocrinas a la sangre, que regula la función de células u órganos diana a distancia (crecimiento, metabolismo, reproducción).",
    defRO: "Substanță chimică mesager secretată de glandele endocrine în sânge, care reglează funcția celulelor sau organelor țintă la distanță (creștere, metabolism, reproducere).",
    nanda: null
}, {
    id: "v_h_hospicio",
    termES: "Hospicio (Cuidados al final de la vida)",
    termRO: "Hospice (Îngrijiri terminale)",
    categoryColor: "bg-teal-50",
    defES: "Modelo de atención centrado en la calidad de vida, confort y dignidad de pacientes con enfermedades terminales (pronóstico <6 meses). Prioriza el alivio del dolor y apoyo emocional, no la curación.",
    defRO: "Model de îngrijire centrat pe calitatea vieții, confortul și demnitatea pacienților cu boli terminale (prognostic <6 luni). Prioritizează ameliorarea durerii și sprijinul emoțional, nu vindecarea.",
    nanda: {
        codeES: "00318",
        codeRO: "00318",
        labelES: "Disconfort",
        labelRO: "Disconfort"
    }
}, {
    id: "v_h_hospital",
    termES: "Hospital",
    termRO: "Spital",
    categoryColor: "bg-blue-50",
    defES: "Institución sanitaria dedicada a la asistencia médica y de enfermería de enfermos, con instalaciones para diagnóstico, tratamiento, cirugía y hospitalización (ingreso). Nivel secundario/terciario.",
    defRO: "Instituție sanitară dedicată asistenței medicale și de nursing a bolnavilor, cu facilități pentru diagnostic, tratament, chirurgie și spitalizare (internare). Nivel secundar/terțiar.",
    nanda: null
}, {
    id: "v_h_hueso",
    termES: "Hueso",
    termRO: "Os",
    categoryColor: "bg-stone-50",
    defES: "Tejido conectivo duro y calcificado que forma el esqueleto. Funciones: soporte, protección, movimiento (palanca), almacenamiento de minerales (Ca) y hematopoyesis (médula).",
    defRO: "Țesut conjunctiv dur și calcificat care formează scheletul. Funcții: suport, protecție, mișcare (pârghie), stocarea mineralelor (Ca) și hematopoieză (măduvă).",
    nanda: null
}, {
    id: "v_h_humero",
    termES: "Húmero",
    termRO: "Humerus",
    categoryColor: "bg-stone-50",
    defES: "Hueso largo del brazo. Se articula con la escápula en el hombro y con el radio/cúbito en el codo. Sitio de fracturas comunes en ancianos (cuello quirúrgico).",
    defRO: "Os lung al brațului. Se articulează cu scapula la umăr și cu radiusul/ulna la cot. Loc de fracturi comune la vârstnici (col chirurgical).",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_h_humor_acuoso",
    termES: "Humor Acuoso",
    termRO: "Umoare Apoasă",
    categoryColor: "bg-blue-50",
    defES: "Líquido transparente que llena la cámara anterior del ojo (entre córnea y cristalino). Nutre estructuras avasculares y mantiene la presión intraocular. Su drenaje deficiente causa glaucoma.",
    defRO: "Lichid transparent care umple camera anterioară a ochiului (între cornee și cristalin). Hrănește structurile avasculare și menține presiunea intraoculară. Drenajul său deficitar cauzează glaucom.",
    nanda: null
}, {
    id: "v_h_humor_vitreo",
    termES: "Humor Vítreo",
    termRO: "Umoare Vitroasă (Corp Vitros)",
    categoryColor: "bg-blue-50",
    defES: "Gel transparente y viscoso que llena la cavidad posterior del ojo (detrás del cristalino). Mantiene la forma del globo ocular y sostiene la retina.",
    defRO: "Gel transparent și vâscos care umple cavitatea posterioară a ochiului (în spatele cristalinului). Menține forma globului ocular și susține retina.",
    nanda: null
}, {
    id: "v_i_iatrogenia",
    termES: "Iatrogenia",
    termRO: "Iatrogenie",
    categoryColor: "bg-red-50",
    defES: "Estado anormal o afección producida en el paciente por la actuación inadvertida o errónea del médico, enfermero u otro profesional sanitario, o por los fármacos y tratamientos prescritos. Incluye efectos secundarios, interacciones y errores técnicos.",
    defRO: "Stare anormală sau afecțiune produsă pacientului prin acțiunea inadvertentă sau eronată a medicului, asistentului sau altui profesionist din domeniul sănătății, sau de medicamentele și tratamentele prescrise.",
    nanda: {
        codeES: "00248",
        codeRO: "00248",
        labelES: "Riesgo de deterioro de la integridad tisular",
        labelRO: "Risc de deteriorare a integrității tisulare"
    }
}, {
    id: "v_i_ictericia",
    termES: "Ictericia",
    termRO: "Icter",
    categoryColor: "bg-yellow-50",
    defES: "Coloración amarillenta de la piel, mucosas y escleróticas causada por una concentración de bilirrubina sérica superior a 2-3 mg/dL. Puede ser prehepática (hemólisis), hepática (hepatitis) o posthepática (obstrucción biliar).",
    defRO: "Colorație gălbuie a pielii, mucoaselor și sclerelor cauzată de o concentrație a bilirubinei serice mai mare de 2-3 mg/dL. Poate fi prehepatică (hemoliză), hepatică (hepatită) sau posthepatică (obstrucție biliară).",
    nanda: {
        codeES: "00194",
        codeRO: "00194",
        labelES: "Ictericia neonatal",
        labelRO: "Icter neonatal"
    }
}, {
    id: "v_i_ictus",
    termES: "Ictus (Accidente Cerebrovascular)",
    termRO: "Ictus (Accident Vascular Cerebral)",
    categoryColor: "bg-red-50",
    defES: 'Déficit neurológico focal agudo de origen vascular. Ictus isquémico: por oclusión arterial (trombo/émbolo). Ictus hemorrágico: por rotura vascular. Emergencia médica ("Código Ictus") que requiere reperfusión inmediata.',
    defRO: 'Deficit neurologic focal acut de origine vasculară. Ictus ischemic: prin ocluzie arterială (tromb/embol). Ictus hemoragic: prin ruptură vasculară. Urgență medicală ("Cod AVC") care necesită reperfuzie imediată.',
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_i_ictiosis",
    termES: "Ictiosis",
    termRO: "Ihtioză",
    categoryColor: "bg-stone-50",
    defES: "Grupo de enfermedades cutáneas hereditarias caracterizadas por una queratinización anormal, donde la piel se vuelve seca, engrosada y cubierta de escamas, asemejándose a la piel de un pez.",
    defRO: "Grup de boli cutanate ereditare caracterizate printr-o keratinizare anormală, unde pielea devine uscată, îngroșată și acoperită de scuame, asemănându-se cu pielea unui pește.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_i_identidad",
    termES: "Identidad Personal",
    termRO: "Identitate Personală",
    categoryColor: "bg-purple-50",
    defES: "Sentido interno de individualidad y coherencia de una persona a lo largo del tiempo. Incluye la identidad de género, rol social y autoimagen. Su alteración es común en trastornos psiquiátricos o crisis vitales.",
    defRO: "Simț intern al individualității și coerenței unei persoane de-a lungul timpului. Include identitatea de gen, rolul social și imaginea de sine. Alterarea sa este comună în tulburările psihiatrice sau crizele vitale.",
    nanda: {
        codeES: "00121",
        codeRO: "00121",
        labelES: "Trastorno de la identidad personal",
        labelRO: "Tulburare de identitate personală"
    }
}, {
    id: "v_i_idiopatico",
    termES: "Idiopático",
    termRO: "Idiopatic",
    categoryColor: "bg-gray-50",
    defES: "Sin causa conocida. Se aplica a cualquier enfermedad que surge espontáneamente o cuya etiología no se ha podido determinar (ej. Hipertensión esencial, Púrpura trombocitopénica idiopática).",
    defRO: "Fără cauză cunoscută. Se aplică oricărei boli care apare spontan sau a cărei etiologie nu a putut fi determinată (ex. Hipertensiune esențială, Purpură trombocitopenică idiopatică).",
    nanda: null
}, {
    id: "v_i_idiosincrasia",
    termES: "Idiosincrasia",
    termRO: "Idiosincrazie",
    categoryColor: "bg-orange-50",
    defES: "Reacción anormal, específica y no inmunológica de un individuo ante un fármaco o alimento, a menudo determinada genéticamente (ej. déficit de G6PD), que difiere del efecto farmacológico esperado.",
    defRO: "Reacție anormală, specifică și non-imunologică a unui individ la un medicament sau aliment, adesea determinată genetic (ex. deficit de G6PD), care diferă de efectul farmacologic așteptat.",
    nanda: null
}, {
    id: "v_i_ileo_mecanico",
    termES: "Íleo Mecánico",
    termRO: "Ileus Mecanic",
    categoryColor: "bg-red-50",
    defES: "Obstrucción física del intestino que impide el paso del contenido digestivo. Causas: adherencias (bridas), hernias, tumores, vólvulos o intususcepción. Requiere a menudo cirugía.",
    defRO: "Obstrucție fizică a intestinului care împiedică trecerea conținutului digestiv. Cauze: aderențe (bride), hernii, tumori, volvulus sau intususcepție. Necesită adesea intervenție chirurgicală.",
    nanda: {
        codeES: "00196",
        codeRO: "00196",
        labelES: "Disfunción de la motilidad gastrointestinal",
        labelRO: "Disfuncție a motilității gastrointestinale"
    }
}, {
    id: "v_i_ileo_paralitico",
    termES: "Íleo Paralítico (Adinámico)",
    termRO: "Ileus Paralitic (Adinamic)",
    categoryColor: "bg-yellow-50",
    defES: "Cese temporal del peristaltismo intestinal sin obstrucción física, común tras cirugía abdominal (manipulación de vísceras), peritonitis, hipopotasemia o uso de opioides. Signo clave: silencio abdominal.",
    defRO: "Încetarea temporară a peristaltismului intestinal fără obstrucție fizică, comună după chirurgia abdominală (manipularea viscerelor), peritonită, hipokaliemie sau utilizarea opioidelor. Semn cheie: tăcere abdominală.",
    nanda: {
        codeES: "00196",
        codeRO: "00196",
        labelES: "Disfunción de la motilidad gastrointestinal",
        labelRO: "Disfuncție a motilității gastrointestinale"
    }
}, {
    id: "v_i_ileostomia",
    termES: "Ileostomía",
    termRO: "Ileostomie",
    categoryColor: "bg-pink-50",
    defES: "Estoma quirúrgico formado al abocar el íleon a la pared abdominal. El efluente es líquido, continuo y rico en enzimas digestivas, por lo que es muy irritante para la piel periestomal (riesgo alto de dermatitis).",
    defRO: "Stomă chirurgicală formată prin aducerea ileonului la peretele abdominal. Efluentul este lichid, continuu și bogat în enzime digestive, fiind astfel foarte iritant pentru pielea peristomală (risc crescut de dermatită).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_i_ileon",
    termES: "Íleon",
    termRO: "Ileon",
    categoryColor: "bg-yellow-50",
    defES: "Tercera y última porción del intestino delgado (aprox. 3.5 m), que se extiende desde el yeyuno hasta la válvula ileocecal. Sitio específico de absorción de vitamina B12 y sales biliares.",
    defRO: "A treia și ultima porțiune a intestinului subțire (aprox. 3,5 m), care se extinde de la jejun până la valva ileocecală. Loc specific de absorbție a vitaminei B12 și a sărurilor biliare.",
    nanda: null
}, {
    id: "v_i_ilion",
    termES: "Ilion (Hueso Ilíaco)",
    termRO: "Ilion (Os Iliac)",
    categoryColor: "bg-stone-50",
    defES: "La más grande de las tres partes del hueso coxal. Su borde superior es la cresta ilíaca (punto de referencia para punciones de médula ósea e inyecciones).",
    defRO: "Cea mai mare dintre cele trei părți ale osului coxal. Marginea sa superioară este creasta iliacă (punct de referință pentru puncții de măduvă osoasă și injecții).",
    nanda: null
}, {
    id: "v_i_ilusion",
    termES: "Ilusión",
    termRO: "Iluzie",
    categoryColor: "bg-purple-50",
    defES: "Percepción sensorial errónea o distorsionada de un estímulo externo real (ej. confundir una sombra con una persona). Se diferencia de la alucinación, que no tiene estímulo externo.",
    defRO: "Percepție senzorială eronată sau distorsionată a unui stimul extern real (ex. confundarea unei umbre cu o persoană). Se diferențiază de halucinație, care nu are stimul extern.",
    nanda: {
        codeES: "00279",
        codeRO: "00279",
        labelES: "Deterioro de los procesos de pensamiento",
        labelRO: "Procese de gândire perturbate"
    }
}, {
    id: "v_i_imc",
    termES: "IMC (Índice de Masa Corporal)",
    termRO: "IMC (Indice de Masă Corporală)",
    categoryColor: "bg-green-50",
    defES: "Indicador antropométrico para clasificar el estado ponderal. Fórmula: Peso(kg) / Talla²(m). Bajo peso <18.5, Normal 18.5-24.9, Sobrepeso 25-29.9, Obesidad >30.",
    defRO: "Indicator antropometric pentru clasificarea stării ponderale. Formula: Greutate(kg) / Înălțime²(m). Subponderal <18.5, Normal 18.5-24.9, Supraponderal 25-29.9, Obezitate >30.",
    nanda: {
        codeES: "00232",
        codeRO: "00232",
        labelES: "Obesidad",
        labelRO: "Obezitate"
    }
}, {
    id: "v_i_imipenem",
    termES: "Imipenem",
    termRO: "Imipenem",
    categoryColor: "bg-teal-50",
    defES: "Antibiótico betalactámico de la clase carbapenem, de espectro ultra-amplio. Reservado para infecciones graves nosocomiales polimicrobianas y bacterias multirresistentes. Se administra con cilastatina.",
    defRO: "Antibiotic beta-lactamic din clasa carbapenemelor, cu spectru ultra-larg. Rezervat pentru infecții grave nosocomiale polimicrobiene și bacterii multirezistente. Se administrează cu cilastatină.",
    nanda: null
}, {
    id: "v_i_impactacion",
    termES: "Impactación Fecal (Fecaloma)",
    termRO: "Impactare Fecală (Fecalom)",
    categoryColor: "bg-stone-50",
    defES: 'Acumulación de heces endurecidas y secas en el recto o colon sigmoide que no pueden evacuarse espontáneamente. Puede causar obstrucción, dolor y "falsa diarrea" por rebosamiento.',
    defRO: 'Acumulare de materii fecale întărite și uscate în rect sau colonul sigmoid care nu pot fi evacuate spontan. Poate cauza obstrucție, durere și "diaree falsă" prin preaplin.',
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_i_impetigo",
    termES: "Impétigo",
    termRO: "Impetigo",
    categoryColor: "bg-pink-50",
    defES: "Infección cutánea bacteriana superficial muy contagiosa (S. aureus o S. pyogenes), común en niños. Se caracteriza por vesículas que se rompen formando costras melicéricas (color miel).",
    defRO: "Infecție cutanată bacteriană superficială foarte contagioasă (S. aureus sau S. pyogenes), comună la copii. Se caracterizează prin vezicule care se rup formând cruste melicerice (culoarea mierii).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_i_implante",
    termES: "Implante",
    termRO: "Implant",
    categoryColor: "bg-stone-50",
    defES: "Objeto o material insertado quirúrgicamente en el cuerpo para reemplazar, sostener o mejorar una estructura biológica (ej. implante coclear, dental, mamario, marcapasos).",
    defRO: "Obiect sau material introdus chirurgical în corp pentru a înlocui, susține sau îmbunătăți o structură biologică (ex. implant cohlear, dentar, mamar, stimulator cardiac).",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_i_impotencia",
    termES: "Impotencia (Disfunción Eréctil)",
    termRO: "Impotență (Disfuncție Erectilă)",
    categoryColor: "bg-blue-50",
    defES: "Incapacidad persistente para conseguir o mantener una erección suficiente para una relación sexual satisfactoria. Puede tener causas vasculares (diabetes), neurológicas, hormonales o psicógenas.",
    defRO: "Incapacitate persistentă de a obține sau menține o erecție suficientă pentru un act sexual satisfăcător. Poate avea cauze vasculare (diabet), neurologice, hormonale sau psihogene.",
    nanda: {
        codeES: "00059",
        codeRO: "00059",
        labelES: "Disfunción sexual",
        labelRO: "Disfuncție sexuală"
    }
}, {
    id: "v_i_inanicion",
    termES: "Inanición",
    termRO: "Inaniție",
    categoryColor: "bg-stone-50",
    defES: "Estado de agotamiento extremo y debilidad causado por la falta prolongada de ingesta de alimentos y nutrientes esenciales. Conduce al marasmo, fallo multiorgánico y muerte.",
    defRO: "Stare de epuizare extremă și slăbiciune cauzată de lipsa prelungită a aportului de alimente și nutrienți esențiali. Duce la marasm, insuficiență multiorganică și deces.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_i_incapacidad",
    termES: "Incapacidad (Discapacidad)",
    termRO: "Incapacitate (Dizabilitate)",
    categoryColor: "bg-stone-50",
    defES: "Restricción o falta de capacidad (debido a una deficiencia) para realizar una actividad en la forma o dentro del margen que se considera normal para un ser humano.",
    defRO: "Restricție sau lipsă de capacitate (datorită unei deficiențe) de a efectua o activitate în modul sau în limitele considerate normale pentru o ființă umană.",
    nanda: null
}, {
    id: "v_i_incidencia",
    termES: "Incidencia",
    termRO: "Incidență",
    categoryColor: "bg-teal-50",
    defES: "Medida epidemiológica que indica el número de CASOS NUEVOS de una enfermedad que se desarrollan en una población en riesgo durante un período de tiempo específico.",
    defRO: "Măsură epidemiologică ce indică numărul de CAZURI NOI ale unei boli care se dezvoltă într-o populație la risc într-o perioadă de timp specifică.",
    nanda: null
}, {
    id: "v_i_incision",
    termES: "Incisión",
    termRO: "Incizie",
    categoryColor: "bg-red-50",
    defES: "Corte limpio y deliberado realizado en los tejidos del cuerpo con un instrumento afilado (bisturí) durante un procedimiento quirúrgico. Requiere cierre (sutura, grapas) y cuidados asépticos.",
    defRO: "Tăietură curată și deliberată realizată în țesuturile corpului cu un instrument ascuțit (bisturiu) în timpul unei proceduri chirurgicale. Necesită închidere (sutură, capse) și îngrijiri aseptice.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_i_incompatibilidad",
    termES: "Incompatibilidad",
    termRO: "Incompatibilitate",
    categoryColor: "bg-red-50",
    defES: "1. Sanguínea: Reacción inmunológica entre sangre donante y receptor (ABO/Rh). 2. Farmacológica: Reacción química o física entre dos fármacos mezclados que altera su eficacia o seguridad (precipitación).",
    defRO: "1. Sanguină: Reacție imunologică între sângele donatorului și primitorului (ABO/Rh). 2. Farmacologică: Reacție chimică sau fizică între două medicamente amestecate care le alterează eficacitatea sau siguranța (precipitare).",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_i_incontinencia_esfuerzo",
    termES: "Incontinencia Urinaria de Esfuerzo",
    termRO: "Incontinență Urinară de Efort",
    categoryColor: "bg-yellow-50",
    defES: "Pérdida involuntaria de orina al aumentar la presión intraabdominal (toser, reír, estornudar, levantar peso). Causada por debilidad del suelo pélvico o esfínter uretral.",
    defRO: "Pierderea involuntară de urină la creșterea presiunii intraabdominale (tuse, râs, strănut, ridicare de greutăți). Cauzată de slăbiciunea planșeului pelvin sau a sfincterului uretral.",
    nanda: {
        codeES: "00017",
        codeRO: "00017",
        labelES: "Incontinencia urinaria de esfuerzo",
        labelRO: "Incontinență urinară de efort"
    }
}, {
    id: "v_i_incontinencia_urgencia",
    termES: "Incontinencia Urinaria de Urgencia",
    termRO: "Incontinență Urinară de Urgență (Imperioasă)",
    categoryColor: "bg-yellow-50",
    defES: "Pérdida involuntaria de orina precedida inmediatamente por una sensación fuerte e incontrolable de necesidad de orinar. Asociada a vejiga hiperactiva o infección.",
    defRO: "Pierderea involuntară de urină precedată imediat de o senzație puternică și incontrolabilă de nevoie de a urina. Asociată cu vezica hiperactivă sau infecția.",
    nanda: {
        codeES: "00019",
        codeRO: "00019",
        labelES: "Incontinencia urinaria de urgencia",
        labelRO: "Incontinență urinară de urgență"
    }
}, {
    id: "v_i_incontinencia_fecal",
    termES: "Incontinencia Fecal",
    termRO: "Incontinență Fecală",
    categoryColor: "bg-stone-50",
    defES: "Incapacidad para controlar voluntariamente la expulsión de gases o heces. Causas: daño del esfínter anal, prolapso rectal, demencia o diarrea severa.",
    defRO: "Incapacitatea de a controla voluntar expulzia gazelor sau materiilor fecale. Cauze: leziuni ale sfincterului anal, prolaps rectal, demență sau diaree severă.",
    nanda: {
        codeES: "00014",
        codeRO: "00014",
        labelES: "Incontinencia fecal",
        labelRO: "Incontinență fecală"
    }
}, {
    id: "v_i_incubacion",
    termES: "Incubación (Período)",
    termRO: "Incubație (Perioadă)",
    categoryColor: "bg-gray-50",
    defES: "Intervalo de tiempo entre la exposición a un agente patógeno infeccioso y la aparición de los primeros signos y síntomas clínicos. Varía según el patógeno (ej. Gripe 1-4 días, Rabia semanas).",
    defRO: "Interval de timp între expunerea la un agent patogen infecțios și apariția primelor semne și simptome clinice. Variază în funcție de patogen (ex. Gripă 1-4 zile, Rabie săptămâni).",
    nanda: null
}, {
    id: "v_i_incubadora",
    termES: "Incubadora Neonatal",
    termRO: "Incubator Neonatal",
    categoryColor: "bg-blue-50",
    defES: "Cámara cerrada que proporciona un entorno controlado (temperatura, humedad, oxígeno) para el cuidado intensivo de recién nacidos prematuros o enfermos, minimizando el gasto metabólico.",
    defRO: "Cameră închisă care oferă un mediu controlat (temperatură, umiditate, oxigen) pentru îngrijirea intensivă a nou-născuților prematuri sau bolnavi, minimizând consumul metabolic.",
    nanda: {
        codeES: "00008",
        codeRO: "00008",
        labelES: "Termorregulación ineficaz",
        labelRO: "Termoreglare ineficientă"
    }
}, {
    id: "v_i_indice_tobillo_brazo",
    termES: "Índice Tobillo-Brazo (ITB)",
    termRO: "Indice Glezne-Braț (IGB)",
    categoryColor: "bg-teal-50",
    defES: "Prueba hemodinámica no invasiva para diagnosticar Enfermedad Arterial Periférica. Relación entre la presión sistólica en el tobillo y en el brazo. Valor normal: 0.9 - 1.3. <0.9 indica isquemia.",
    defRO: "Test hemodinamic non-invaziv pentru diagnosticarea Bolii Arteriale Periferice. Raportul dintre presiunea sistolică la gleznă și la braț. Valoare normală: 0.9 - 1.3. <0.9 indică ischemie.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_i_induccion",
    termES: "Inducción (Anestésica/Parto)",
    termRO: "Inducție (Anestezică/Travaliu)",
    categoryColor: "bg-violet-50",
    defES: "1. Anestesia: Fase inicial donde se administra el fármaco para provocar la pérdida de conciencia. 2. Parto: Estimulación artificial de las contracciones uterinas (oxitocina) para iniciar el trabajo de parto.",
    defRO: "1. Anestezie: Faza inițială în care se administrează medicamentul pentru a provoca pierderea conștienței. 2. Travaliu: Stimularea artificială a contracțiilor uterine (oxitocină) pentru a iniția travaliul.",
    nanda: null
}, {
    id: "v_i_induracion",
    termES: "Induración",
    termRO: "Indurație",
    categoryColor: "bg-stone-50",
    defES: "Endurecimiento anormal de un tejido u órgano debido a inflamación, infiltración celular o acumulación de sangre/edema. Ej. Induración en la prueba de Mantoux (Tuberculosis) o alrededor de una herida.",
    defRO: "Întărire anormală a unui țesut sau organ datorită inflamației, infiltrației celulare sau acumulării de sânge/edem. Ex. Indurație la testul Mantoux (Tuberculoză) sau în jurul unei plăgi.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_i_infarto_agudo_miocardio",
    termES: "Infarto Agudo de Miocardio (IAM)",
    termRO: "Infarct Miocardic Acut (IMA)",
    categoryColor: "bg-red-50",
    defES: "Necrosis irreversible de una zona del músculo cardíaco por isquemia prolongada debida a la oclusión de una arteria coronaria. Dolor torácico opresivo, elevación de troponinas y cambios en ECG (SCACEST/SCASEST).",
    defRO: "Necroză ireversibilă a unei zone a mușchiului cardiac prin ischemie prelungită datorată ocluziei unei artere coronare. Durere toracică opresivă, creșterea troponinelor și modificări EKG (STEMI/NSTEMI).",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_i_infarto_cerebral",
    termES: "Infarto Cerebral",
    termRO: "Infarct Cerebral",
    categoryColor: "bg-stone-50",
    defES: 'Necrosis de tejido cerebral causada por falta de riego sanguíneo (isquemia) debido a trombosis o embolia. Ver "Ictus". Deja secuelas neurológicas permanentes si no se reperfunde.',
    defRO: 'Necroza țesutului cerebral cauzată de lipsa irigației sanguine (ischemie) datorată trombozei sau emboliei. Vezi "Ictus". Lasă sechele neurologice permanente dacă nu se reperfuzează.',
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_i_infeccion",
    termES: "Infección",
    termRO: "Infecție",
    categoryColor: "bg-red-50",
    defES: "Invasión y multiplicación de microorganismos patógenos (bacterias, virus, hongos, parásitos) en los tejidos del huésped, generando una respuesta inmunitaria y daño tisular. Signos: fiebre, dolor, inflamación.",
    defRO: "Invazia și multiplicarea microorganismelor patogene (bacterii, virusuri, ciuperci, paraziți) în țesuturile gazdei, generând un răspuns imunitar și leziuni tisulare. Semne: febră, durere, inflamație.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_i_infeccion_urinaria",
    termES: "Infección Urinaria (ITU)",
    termRO: "Infecție Urinară (ITU)",
    categoryColor: "bg-yellow-50",
    defES: "Presencia y multiplicación de microorganismos en el tracto urinario. Baja: Cistitis (vejiga), Uretritis. Alta: Pielonefritis (riñón). Común por E. coli. Síntomas: disuria, polaquiuria, urgencia.",
    defRO: "Prezența și multiplicarea microorganismelor în tractul urinar. Joasă: Cistită (vezică), Uretrită. Înaltă: Pielonefrită (rinichi). Comună prin E. coli. Simptome: disurie, polachiurie, urgență.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_i_infeccion_herida",
    termES: "Infección de Sitio Quirúrgico (ISQ)",
    termRO: "Infecția Plăgii Chirurgicale (IPC)",
    categoryColor: "bg-orange-50",
    defES: "Infección que ocurre en la incisión quirúrgica (superficial o profunda) dentro de los 30 días postoperatorios. Signos: eritema, drenaje purulento, dehiscencia, fiebre.",
    defRO: "Infecție care apare la incizia chirurgicală (superficială sau profundă) în termen de 30 de zile postoperator. Semne: eritem, drenaj purulent, dehiscență, febră.",
    nanda: {
        codeES: "00266",
        codeRO: "00266",
        labelES: "Riesgo de infección de la herida quirúrgica",
        labelRO: "Risc de infecție a plăgii chirurgicale"
    }
}, {
    id: "v_i_infertilidad",
    termES: "Infertilidad",
    termRO: "Infertilitate",
    categoryColor: "bg-purple-50",
    defES: "Incapacidad biológica para lograr un embarazo tras 12 meses de relaciones sexuales regulares sin protección. Puede ser primaria (nunca concebido) o secundaria.",
    defRO: "Incapacitate biologică de a obține o sarcină după 12 luni de relații sexuale regulate neprotejate. Poate fi primară (niciodată conceput) sau secundară.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_i_infiltracion",
    termES: "Infiltración (Extravasación)",
    termRO: "Infiltrație (Extravazare)",
    categoryColor: "bg-blue-50",
    defES: "Complicación de la terapia intravenosa donde el fluido no vesicante sale de la vena al tejido circundante. Causa edema frío, palidez y disminución del flujo. Si es vesicante se llama extravasación.",
    defRO: "Complicație a terapiei intravenoase în care fluidul non-vezicant iese din venă în țesutul înconjurător. Cauzează edem rece, paloare și scăderea fluxului. Dacă este vezicant se numește extravazare.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_i_inflamacion",
    termES: "Inflamación",
    termRO: "Inflamație",
    categoryColor: "bg-red-50",
    defES: "Respuesta defensiva local de los tejidos vascularizados ante una agresión (infección, trauma). Tetrada de Celso: Rubor (rojez), Calor, Tumor (edema) y Dolor. A veces Functio Laesa.",
    defRO: "Răspuns defensiv local al țesuturilor vascularizate la o agresiune (infecție, traumă). Tetrada Celsus: Rubor (roșeață), Calor (căldură), Tumor (edem) și Dolor (durere). Uneori Functio Laesa.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_i_influenza",
    termES: "Influenza (Gripe)",
    termRO: "Influenza (Gripă)",
    categoryColor: "bg-orange-50",
    defES: "Enfermedad respiratoria aguda contagiosa causada por virus de la influenza (A o B). Fiebre alta, mialgias, cefalea y tos seca. Puede complicarse con neumonía en grupos de riesgo.",
    defRO: "Boală respiratorie acută contagioasă cauzată de virusurile influenza (A sau B). Febră mare, mialgii, cefalee și tuse seacă. Se poate complica cu pneumonie la grupurile de risc.",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_i_informe",
    termES: "Informe de Alta (Epicrisis)",
    termRO: "Bilet de Ieșire (Epicriză)",
    categoryColor: "bg-stone-50",
    defES: "Documento clínico que resume la hospitalización del paciente: motivo de ingreso, evolución, procedimientos realizados, tratamiento al alta y recomendaciones de cuidados.",
    defRO: "Document clinic care rezumă spitalizarea pacientului: motivul internării, evoluția, procedurile efectuate, tratamentul la externare și recomandările de îngrijire.",
    nanda: null
}, {
    id: "v_i_ingesta",
    termES: "Ingesta",
    termRO: "Ingerare (Aport)",
    categoryColor: "bg-green-50",
    defES: "Cantidad de alimentos y líquidos tomados por el organismo. El registro de ingesta/excreta (balance hídrico) es fundamental en enfermería para monitorizar el estado de hidratación.",
    defRO: "Cantitatea de alimente și lichide preluate de organism. Înregistrarea intrărilor/ieșirilor (bilanț hidric) este fundamentală în nursing pentru monitorizarea stării de hidratare.",
    nanda: {
        codeES: "00025",
        codeRO: "00025",
        labelES: "Riesgo de desequilibrio de volumen de líquidos",
        labelRO: "Risc de dezechilibru al volumului lichidian"
    }
}, {
    id: "v_i_inhalacion",
    termES: "Inhalación",
    termRO: "Inhalare",
    categoryColor: "bg-sky-50",
    defES: "Acto de aspirar aire, vapores o medicamentos (aerosoles) hacia los pulmones. Vía de elección para broncodilatadores y corticoides en asma/EPOC por su acción local rápida.",
    defRO: "Actul de a aspira aer, vapori sau medicamente (aerosoli) în plămâni. Calea de elecție pentru bronhodilatatoare și corticoizi în astm/BPOC datorită acțiunii locale rapide.",
    nanda: null
}, {
    id: "v_i_inhibidor_eca",
    termES: "Inhibidor de la ECA (IECA)",
    termRO: "Inhibitor al ECA (IECA)",
    categoryColor: "bg-red-50",
    defES: "Clase de fármacos antihipertensivos (ej. Enalapril, Captopril) que bloquean la enzima convertidora de angiotensina, produciendo vasodilatación. Efecto adverso típico: tos seca.",
    defRO: "Clasă de medicamente antihipertensive (ex. Enalapril, Captopril) care blochează enzima de conversie a angiotensinei, producând vasodilatație. Efect advers tipic: tuse seacă.",
    nanda: null
}, {
    id: "v_i_injerto",
    termES: "Injerto",
    termRO: "Grefă",
    categoryColor: "bg-stone-50",
    defES: "Tejido u órgano separado de su zona donante y trasplantado a una zona receptora para reparar un defecto. Autoinjerto (propio), Aloinjerto (otro humano), Xenoinjerto (animal).",
    defRO: "Țesut sau organ separat de zona sa donatoare și transplantat într-o zonă receptoare pentru a repara un defect. Autogrefă (proprie), Alogrefă (alt om), Xenogrefă (animal).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_i_inmunidad",
    termES: "Inmunidad",
    termRO: "Imunitate",
    categoryColor: "bg-green-50",
    defES: "Estado de resistencia del organismo frente a enfermedades infecciosas. Innata (inespecífica, barreras) o Adquirida (específica, linfocitos). Activa (vacunas/infección) o Pasiva (anticuerpos maternos/suero).",
    defRO: "Starea de rezistență a organismului față de bolile infecțioase. Înnăscută (nespecifică, bariere) sau Dobândită (specifică, limfocite). Activă (vaccinuri/infecție) sau Pasivă (anticorpi materni/ser).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_i_inmunoglobulina",
    termES: "Inmunoglobulina (Ig)",
    termRO: "Imunoglobulină (Ig)",
    categoryColor: "bg-blue-50",
    defES: "Proteínas (anticuerpos) producidas por células plasmáticas que reconocen y neutralizan antígenos. 5 clases: IgG (más abundante, memoria), IgM (aguda), IgA (mucosas), IgE (alergia/parásitos), IgD.",
    defRO: "Proteine (anticorpi) produse de celulele plasmatice care recunosc și neutralizează antigeni. 5 clase: IgG (cea mai abundentă, memorie), IgM (acută), IgA (mucoase), IgE (alergie/paraziți), IgD.",
    nanda: null
}, {
    id: "v_i_inmunosupresion",
    termES: "Inmunosupresión",
    termRO: "Imunosupresie",
    categoryColor: "bg-red-50",
    defES: "Reducción de la eficacia del sistema inmunitario. Puede ser patológica (VIH, leucemia) o iatrogénica (fármacos tras trasplantes para evitar rechazo, quimioterapia). Alto riesgo de sepsis.",
    defRO: "Reducerea eficacității sistemului imunitar. Poate fi patologică (HIV, leucemie) sau iatrogenă (medicamente după transplanturi pentru a evita respingerea, chimioterapie). Risc ridicat de sepsis.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_i_inotropico",
    termES: "Inotrópico",
    termRO: "Inotrop",
    categoryColor: "bg-red-50",
    defES: "Agente que afecta a la fuerza de contracción muscular cardíaca. Inotrópico positivo (aumenta fuerza: digoxina, adrenalina, dobutamina) o negativo (disminuye fuerza: betabloqueantes).",
    defRO: "Agent care afectează forța de contracție musculară cardiacă. Inotrop pozitiv (crește forța: digoxin, adrenalină, dobutamină) sau negativ (scade forța: beta-blocante).",
    nanda: null
}, {
    id: "v_i_insolacion",
    termES: "Insolación (Golpe de Calor)",
    termRO: "Insoluție (Șoc Termic)",
    categoryColor: "bg-orange-50",
    defES: "Trastorno grave por exposición prolongada al sol o calor extremo. Fallo de termorregulación (>40°C), piel caliente/seca, confusión y riesgo de fallo multiorgánico. Urgencia vital.",
    defRO: "Tulburare gravă prin expunere prelungită la soare sau căldură extremă. Eșecul termoreglării (>40°C), piele fierbinte/uscată, confuzie și risc de insuficiență multiorganică. Urgență vitală.",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_i_insomnio",
    termES: "Insomnio",
    termRO: "Insomnie",
    categoryColor: "bg-purple-50",
    defES: "Trastorno del sueño caracterizado por dificultad para iniciar o mantener el sueño, o despertar precoz, causando deterioro funcional diurno. Puede ser transitorio o crónico.",
    defRO: "Tulburare de somn caracterizată prin dificultate în inițierea sau menținerea somnului, sau trezire precoce, cauzând deteriorare funcțională diurnă. Poate fi tranzitorie sau cronică.",
    nanda: {
        codeES: "00095",
        codeRO: "00095",
        labelES: "Insomnio",
        labelRO: "Insomnie"
    }
}, {
    id: "v_i_inspeccion",
    termES: "Inspección",
    termRO: "Inspecție",
    categoryColor: "bg-blue-50",
    defES: "Primera etapa del examen físico. Examen visual sistemático del paciente para evaluar color, forma, tamaño, simetría y anomalías visibles. Requiere buena iluminación.",
    defRO: "Prima etapă a examinării fizice. Examinare vizuală sistematică a pacientului pentru a evalua culoarea, forma, dimensiunea, simetria și anomaliile vizibile. Necesită iluminare bună.",
    nanda: null
}, {
    id: "v_i_inspiracion",
    termES: "Inspiración",
    termRO: "Inspirație",
    categoryColor: "bg-sky-50",
    defES: "Fase activa de la respiración donde el diafragma y músculos intercostales se contraen, expandiendo el tórax y creando presión negativa que atrae aire a los pulmones.",
    defRO: "Faza activă a respirației în care diafragma și mușchii intercostali se contractă, extinzând toracele și creând presiune negativă care atrage aerul în plămâni.",
    nanda: null
}, {
    id: "v_i_instilacion",
    termES: "Instilación",
    termRO: "Instilație",
    categoryColor: "bg-teal-50",
    defES: "Introducción lenta de un líquido, gota a gota, en una cavidad corporal (ojo, oído, nariz, vejiga). Ej. Colirios oftálmicos o lavados vesicales.",
    defRO: "Introducerea lentă a unui lichid, picătură cu picătură, într-o cavitate corporală (ochi, ureche, nas, vezică). Ex. Picături oftalmice sau spălături vezicale.",
    nanda: null
}, {
    id: "v_i_insuficiencia_cardiaca",
    termES: "Insuficiencia Cardíaca",
    termRO: "Insuficiență Cardiacă",
    categoryColor: "bg-red-50",
    defES: "Síndrome donde el corazón no puede bombear sangre suficiente para las necesidades metabólicas. Izquierda (disnea, edema pulmonar) o Derecha (edemas periféricos, ingurgitación yugular).",
    defRO: "Sindrom în care inima nu poate pompa suficient sânge pentru nevoile metabolice. Stângă (dispnee, edem pulmonar) sau Dreaptă (edeme periferice, turgescență jugulară).",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_i_insuficiencia_renal_aguda",
    termES: "Insuficiencia Renal Aguda (IRA)",
    termRO: "Insuficiență Renală Acută (IRA)",
    categoryColor: "bg-yellow-50",
    defES: "Pérdida rápida y repentina de la función renal (horas/días), con acumulación de desechos (urea/creatinina) y desequilibrio electrolítico. Potencialmente reversible si se trata la causa.",
    defRO: "Pierderea rapidă și bruscă a funcției renale (ore/zile), cu acumulare de deșeuri (uree/creatinină) și dezechilibru electrolitic. Potențial reversibilă dacă se tratează cauza.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_i_insuficiencia_renal_cronica",
    termES: "Insuficiencia Renal Crónica (ERC)",
    termRO: "Insuficiență Renală Cronică (IRC)",
    categoryColor: "bg-yellow-50",
    defES: "Pérdida progresiva e irreversible de la función renal > 3 meses. Etapas 1-5. La etapa final (ESRD) requiere diálisis o trasplante para la supervivencia.",
    defRO: "Pierderea progresivă și ireversibilă a funcției renale > 3 luni. Stadii 1-5. Stadiul final (ESRD) necesită dializă sau transplant pentru supraviețuire.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_i_insuficiencia_respiratoria",
    termES: "Insuficiencia Respiratoria",
    termRO: "Insuficiență Respiratorie",
    categoryColor: "bg-sky-50",
    defES: "Incapacidad del sistema respiratorio para mantener niveles adecuados de O2 (hipoxemia <60 mmHg) y/o eliminar CO2 (hipercapnia >45 mmHg). Requiere soporte ventilatorio.",
    defRO: "Incapacitatea sistemului respirator de a menține niveluri adecvate de O2 (hipoxemie <60 mmHg) și/sau de a elimina CO2 (hipercapnie >45 mmHg). Necesită suport ventilator.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_i_insulina",
    termES: "Insulina",
    termRO: "Insulină",
    categoryColor: "bg-orange-50",
    defES: "Hormona anabólica secretada por las células beta pancreáticas. Facilita la entrada de glucosa en las células, reduciendo la glucemia. Medicamento vital en diabetes tipo 1.",
    defRO: "Hormon anabolic secretat de celulele beta pancreatice. Facilitează intrarea glucozei în celule, reducând glicemia. Medicament vital în diabetul de tip 1.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_i_integridad",
    termES: "Integridad Tisular",
    termRO: "Integritate Tisulară",
    categoryColor: "bg-pink-50",
    defES: "Estado de completitud y funcionalidad de los tejidos (piel, mucosas, córnea). Su deterioro incluye heridas, úlceras o quemaduras. Concepto central en diagnósticos NANDA.",
    defRO: "Starea de completitudine și funcționalitate a țesuturilor (piele, mucoase, cornee). Deteriorarea sa include plăgi, ulcere sau arsuri. Concept central în diagnosticele NANDA.",
    nanda: {
        codeES: "00044",
        codeRO: "00044",
        labelES: "Deterioro de la integridad tisular",
        labelRO: "Integritate tisulară afectată"
    }
}, {
    id: "v_i_interaccion",
    termES: "Interacción Farmacológica",
    termRO: "Interacțiune Farmacologică",
    categoryColor: "bg-teal-50",
    defES: "Modificación del efecto de un fármaco por la presencia concomitante de otro fármaco, alimento o sustancia. Puede potenciar (sinergia), inhibir (antagonismo) o causar toxicidad.",
    defRO: "Modificarea efectului unui medicament prin prezența concomitentă a altui medicament, aliment sau substanță. Poate potența (sinergie), inhiba (antagonism) sau cauza toxicitate.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_i_intercambio_gaseoso",
    termES: "Intercambio Gaseoso",
    termRO: "Schimb Gazos (Hematoză)",
    categoryColor: "bg-sky-50",
    defES: "Proceso de difusión de oxígeno desde los alvéolos a la sangre y de dióxido de carbono desde la sangre a los alvéolos a través de la membrana alveolocapilar.",
    defRO: "Procesul de difuzie a oxigenului din alveole în sânge și a dioxidului de carbon din sânge în alveole prin membrana alveolocapilară.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_i_interferon",
    termES: "Interferón",
    termRO: "Interferon",
    categoryColor: "bg-green-50",
    defES: "Proteínas naturales producidas por células inmunitarias en respuesta a virus, bacterias o células tumorales. Se usan terapéuticamente en hepatitis B/C, esclerosis múltiple y cáncer.",
    defRO: "Proteine naturale produse de celulele imunitare ca răspuns la virusuri, bacterii sau celule tumorale. Se folosesc terapeutic în hepatita B/C, scleroza multiplă și cancer.",
    nanda: null
}, {
    id: "v_i_intersticial",
    termES: "Intersticial (Espacio)",
    termRO: "Interstițial (Spațiu)",
    categoryColor: "bg-blue-50",
    defES: "Espacio entre las células de un tejido lleno de líquido intersticial. El edema es la acumulación patológica de líquido en este espacio.",
    defRO: "Spațiul dintre celulele unui țesut plin cu lichid interstițial. Edemul este acumularea patologică de lichid în acest spațiu.",
    nanda: null
}, {
    id: "v_i_intertrigo",
    termES: "Intertrigo",
    termRO: "Intertrigo",
    categoryColor: "bg-pink-50",
    defES: "Dermatitis inflamatoria superficial que ocurre en los pliegues cutáneos (axilas, ingles, submamario) donde hay fricción, calor y humedad. Propenso a sobreinfección por Cándida.",
    defRO: "Dermatită inflamatorie superficială care apare în pliurile cutanate (axile, inghinal, submamar) unde există frecare, căldură și umiditate. Predispus la suprainfecție cu Candida.",
    nanda: {
        codeES: "00047",
        codeRO: "00047",
        labelES: "Riesgo de deterioro de la integridad cutánea",
        labelRO: "Risc de deteriorare a integrității cutanate"
    }
}, {
    id: "v_i_intestino",
    termES: "Intestino",
    termRO: "Intestin",
    categoryColor: "bg-orange-50",
    defES: "Parte del tubo digestivo desde el píloro hasta el ano. Delgado (duodeno, yeyuno, íleon): absorción nutrientes. Grueso (ciego, colon, recto): absorción agua y formación heces.",
    defRO: "Parte a tubului digestiv de la pilor până la anus. Subțire (duoden, jejun, ileon): absorbția nutrienților. Gros (cec, colon, rect): absorbția apei și formarea fecalelor.",
    nanda: null
}, {
    id: "v_i_intima",
    termES: "Íntima (Capa)",
    termRO: "Intimă (Strat)",
    categoryColor: "bg-red-50",
    defES: "Capa más interna de una arteria o vena, formada por endotelio. Su daño es el evento inicial en la formación de la placa de aterosclerosis o trombos.",
    defRO: "Stratul cel mai intern al unei artere sau vene, format din endoteliu. Lezarea sa este evenimentul inițial în formarea plăcii de ateroscleroză sau trombilor.",
    nanda: null
}, {
    id: "v_i_intolerancia_actividad",
    termES: "Intolerancia a la Actividad",
    termRO: "Intoleranță la Activitate",
    categoryColor: "bg-purple-50",
    defES: "Falta de energía fisiológica o psicológica suficiente para tolerar o completar las actividades diarias requeridas o deseadas. Diagnóstico NANDA común en cardíacos y respiratorios.",
    defRO: "Lipsă de energie fiziologică sau psihologică suficientă pentru a tolera sau finaliza activitățile zilnice necesare sau dorite. Diagnostic NANDA comun la cardiaci și respiratori.",
    nanda: {
        codeES: "00092",
        codeRO: "00092",
        labelES: "Intolerancia a la actividad",
        labelRO: "Intoleranță la activitate"
    }
}, {
    id: "v_i_intoxicacion",
    termES: "Intoxicación",
    termRO: "Intoxicație",
    categoryColor: "bg-stone-50",
    defES: "Efecto nocivo de una sustancia química (veneno, fármaco, tóxico) sobre el organismo. Aguda (emergencia) o Crónica. Tratamiento: soporte vital, descontaminación, antídotos.",
    defRO: "Efect nociv al unei substanțe chimice (otravă, medicament, toxic) asupra organismului. Acută (urgență) sau Cronică. Tratament: suport vital, decontaminare, antidoturi.",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_i_intracraneal",
    termES: "Intracraneal",
    termRO: "Intracranian",
    categoryColor: "bg-stone-50",
    defES: "Situado dentro del cráneo. Presión Intracraneal (PIC): presión ejercida por el cerebro, sangre y LCR. Su aumento (hipertensión intracraneal) es una emergencia neuroquirúrgica.",
    defRO: "Situat în interiorul craniului. Presiune Intracraniană (PIC): presiunea exercitată de creier, sânge și LCR. Creșterea sa (hipertensiune intracraniană) este o urgență neurochirurgicală.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_i_intradermica",
    termES: "Intradérmica (Vía)",
    termRO: "Intradermică (Cale)",
    categoryColor: "bg-teal-50",
    defES: "Vía parenteral de administración de fármacos en la dermis, justo debajo de la epidermis. Absorción lenta. Usos: pruebas de alergia, Mantoux (tuberculosis), anestesia local.",
    defRO: "Cale parenterală de administrare a medicamentelor în derm, chiar sub epidermă. Absorbție lentă. Utilizări: teste de alergie, Mantoux (tuberculoză), anestezie locală.",
    nanda: null
}, {
    id: "v_i_intramuscular",
    termES: "Intramuscular (Vía)",
    termRO: "Intramusculară (Cale)",
    categoryColor: "bg-teal-50",
    defES: "Inyección profunda de medicación en el tejido muscular (Deltoides, Vasto, Glúteo). Absorción rápida gracias a la alta vascularización. Técnica en Z para evitar reflujo.",
    defRO: "Injecție profundă de medicamente în țesutul muscular (Deltoid, Vast, Fesier). Absorbție rapidă datorită vascularizării ridicate. Tehnică în Z pentru a evita refluxul.",
    nanda: null
}, {
    id: "v_i_intravenosa",
    termES: "Intravenosa (Vía)",
    termRO: "Intravenoasă (Cale)",
    categoryColor: "bg-teal-50",
    defES: "Administración directa de fluidos o fármacos en una vena. Acción inmediata (biodisponibilidad 100%). Requiere acceso venoso (catéter). Riesgos: flebitis, extravasación, sobrecarga.",
    defRO: "Administrarea directă a fluidelor sau medicamentelor într-o venă. Acțiune imediată (biodisponibilitate 100%). Necesită acces venos (cateter). Riscuri: flebită, extravazare, supraîncărcare.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_i_intubacion",
    termES: "Intubación Endotraqueal",
    termRO: "Intubație Endotraheală",
    categoryColor: "bg-sky-50",
    defES: "Inserción de un tubo en la tráquea a través de la boca o nariz para asegurar la permeabilidad de la vía aérea, proteger contra aspiración y permitir la ventilación mecánica.",
    defRO: "Inserția unui tub în trahee prin gură sau nas pentru a asigura permeabilitatea căii aeriene, a proteja împotriva aspirației și a permite ventilația mecanică.",
    nanda: {
        codeES: "00033",
        codeRO: "00033",
        labelES: "Deterioro de la ventilación espontánea",
        labelRO: "Ventilație spontană afectată"
    }
}, {
    id: "v_i_intususcepcion",
    termES: "Intususcepción (Invaginación)",
    termRO: "Intususcepție (Invaginație)",
    categoryColor: "bg-pink-50",
    defES: "Telescopaje de un segmento de intestino dentro de otro adyacente. Causa obstrucción intestinal aguda e isquemia en niños. Tríada: dolor cólico, masa palpable, heces en jalea de grosella.",
    defRO: "Telescoparea unui segment de intestin în altul adiacent. Cauzează obstrucție intestinală acută și ischemie la copii. Triadă: durere colicativă, masă palpabilă, scaune în jeleu de coacăze.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_i_invaginacion",
    termES: "Invaginación",
    termRO: "Invaginație",
    categoryColor: "bg-stone-50",
    defES: "Repliegue de una estructura sobre sí misma formando una bolsa o cavidad. En cirugía, técnica para cerrar un muñón (ej. apendicular). En patología, sinónimo de intususcepción.",
    defRO: "Repliere a unei structuri pe ea însăși formând o pungă sau cavitate. În chirurgie, tehnică pentru închiderea unui bont (ex. apendicular). În patologie, sinonim cu intususcepția.",
    nanda: null
}, {
    id: "v_i_in_vitro",
    termES: "In Vitro",
    termRO: "In Vitro",
    categoryColor: "bg-gray-50",
    defES: "Proceso biológico realizado fuera del organismo vivo, en un ambiente controlado de laboratorio (tubo de ensayo, placa). Ej. Fecundación in vitro (FIV).",
    defRO: "Proces biologic realizat în afara organismului viu, într-un mediu controlat de laborator (eprubetă, placă). Ex. Fertilizare in vitro (FIV).",
    nanda: null
}, {
    id: "v_i_in_vivo",
    termES: "In Vivo",
    termRO: "In Vivo",
    categoryColor: "bg-gray-50",
    defES: "Proceso o experimento realizado dentro de un organismo vivo. Los ensayos clínicos de fase avanzada son estudios in vivo en humanos.",
    defRO: "Proces sau experiment realizat în interiorul unui organism viu. Studiile clinice de fază avansată sunt studii in vivo pe oameni.",
    nanda: null
}, {
    id: "v_i_iodo",
    termES: "Iodo (Yodo)",
    termRO: "Iod",
    categoryColor: "bg-violet-50",
    defES: "Elemento químico esencial para la síntesis de hormonas tiroideas. Su déficit causa bocio y cretinismo. Usado como antiséptico (povidona yodada) y contraste radiológico.",
    defRO: "Element chimic esențial pentru sinteza hormonilor tiroidieni. Deficitul său cauzează gușă și cretinism. Folosit ca antiseptic (povidonă iodată) și contrast radiologic.",
    nanda: null
}, {
    id: "v_i_ion",
    termES: "Ion",
    termRO: "Ion",
    categoryColor: "bg-blue-50",
    defES: "Átomo o molécula con carga eléctrica (positiva: catión, negativa: anión). Los electrolitos corporales son iones (Na+, K+, Cl-) vitales para la conducción nerviosa y equilibrio hídrico.",
    defRO: "Atom sau moleculă cu sarcină electrică (pozitivă: cation, negativă: anion). Electroliții corporali sunt ioni (Na+, K+, Cl-) vitali pentru conducerea nervoasă și echilibrul hidric.",
    nanda: null
}, {
    id: "v_i_ipecacuana",
    termES: "Ipecacuana (Jarabe)",
    termRO: "Ipeca (Sirop)",
    categoryColor: "bg-orange-50",
    defES: "Emético derivado vegetal usado antiguamente para inducir el vómito en intoxicaciones. Actualmente desaconsejado en primeros auxilios por riesgo de aspiración y retraso en el uso de carbón activado.",
    defRO: "Emetic derivat vegetal folosit anterior pentru a induce voma în intoxicații. În prezent nerecomandat în prim ajutor din cauza riscului de aspirație și întârzierii utilizării cărbunelui activat.",
    nanda: null
}, {
    id: "v_i_iris",
    termES: "Iris",
    termRO: "Iris",
    categoryColor: "bg-blue-50",
    defES: "Parte coloreada del ojo, diafragma muscular circular que controla el tamaño de la pupila y la cantidad de luz que entra en la retina (miosis/midriasis).",
    defRO: "Partea colorată a ochiului, diafragmă musculară circulară care controlează dimensiunea pupilei și cantitatea de lumină care intră pe retină (mioză/midriază).",
    nanda: null
}, {
    id: "v_i_iritis",
    termES: "Iritis (Uveítis Anterior)",
    termRO: "Irită (Uveită Anterioară)",
    categoryColor: "bg-red-50",
    defES: "Inflamación del iris. Causa dolor ocular profundo, fotofobia intensa, visión borrosa y pupila pequeña (miótica). Puede ser autoinmune (espondilitis). Requiere tratamiento urgente.",
    defRO: "Inflamația irisului. Cauzează durere oculară profundă, fotofobie intensă, vedere încețoșată și pupilă mică (miotică). Poate fi autoimună (spondilită). Necesită tratament urgent.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_i_irrigacion",
    termES: "Irrigación",
    termRO: "Irigație",
    categoryColor: "bg-teal-50",
    defES: "1. Lavado de una cavidad o herida con flujo de líquido (suero fisiológico) para limpiar o aplicar calor/medicación. 2. Aporte de sangre arterial a un tejido.",
    defRO: "1. Spălarea unei cavități sau plăgi cu flux de lichid (ser fiziologic) pentru curățare sau aplicare de căldură/medicație. 2. Aport de sânge arterial către un țesut.",
    nanda: null
}, {
    id: "v_i_isocoria",
    termES: "Isocoria",
    termRO: "Izocorie",
    categoryColor: "bg-green-50",
    defES: "Condición normal en la que ambas pupilas tienen el mismo tamaño. Lo contrario es la anisocoria. Se evalúa en la exploración neurológica.",
    defRO: "Condiție normală în care ambele pupile au aceeași dimensiune. Opusul este anizocoria. Se evaluează în explorarea neurologică.",
    nanda: null
}, {
    id: "v_i_isoinmunizacion",
    termES: "Isoinmunización",
    termRO: "Izomunizare",
    categoryColor: "bg-red-50",
    defES: "Desarrollo de anticuerpos contra antígenos de tejidos de otro individuo de la misma especie. Ej. Enfermedad hemolítica del recién nacido (Rh) o rechazo de trasplantes.",
    defRO: "Dezvoltarea anticorpilor împotriva antigenilor din țesuturile altui individ din aceeași specie. Ex. Boala hemolitică a nou-născutului (Rh) sau respingerea transplanturilor.",
    nanda: null
}, {
    id: "v_i_isquemia",
    termES: "Isquemia",
    termRO: "Ischemie",
    categoryColor: "bg-red-50",
    defES: "Reducción del flujo sanguíneo arterial a un órgano o tejido, causando hipoxia y déficit de nutrientes. Reversible si es breve; conduce a infarto (necrosis) si persiste.",
    defRO: "Reducerea fluxului sanguin arterial către un organ sau țesut, cauzând hipoxie și deficit de nutrienți. Reversibilă dacă este scurtă; duce la infarct (necroză) dacă persistă.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_i_isquion",
    termES: "Isquion",
    termRO: "Ischion",
    categoryColor: "bg-stone-50",
    defES: 'Parte inferior y posterior del hueso coxal. La tuberosidad isquiática es la prominencia ósea sobre la que nos sentamos ("hueso de sentarse") y zona de riesgo alto de úlceras por presión en sedestación.',
    defRO: 'Partea inferioară și posterioară a osului coxal. Tuberozitatea ischiatică este proeminența osoasă pe care stăm ("osul de șezut") și zonă de risc ridicat de ulcere de presiune la ședere.',
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_i_istmo",
    termES: "Istmo",
    termRO: "Istm",
    categoryColor: "bg-stone-50",
    defES: "Estrechamiento anatómico o banda de tejido que conecta dos partes mayores. Ej. Istmo de las fauces (garganta), Istmo tiroideo, Istmo uterino (segmento inferior durante el parto).",
    defRO: "Îngustare anatomică sau bandă de țesut care conectează două părți mai mari. Ex. Istmul fauciilor (gât), Istm tiroidian, Istm uterin (segment inferior în timpul nașterii).",
    nanda: null
}, {
    id: "v_j_jaqueca",
    termES: "Jaqueca (Migraña)",
    termRO: "Migrenă",
    categoryColor: "bg-purple-50",
    defES: "Cefalea vascular primaria, recurrente y pulsátil, habitualmente unilateral. Se acompaña de náuseas, vómitos, fotofobia y sonofobia. Puede ir precedida de aura neurológica.",
    defRO: "Cefalee vasculară primară, recurentă și pulsatilă, de obicei unilaterală. Se însoțește de greață, vărsături, fotofobie și sonofobie. Poate fi precedată de aură neurologică.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_j_jarabe",
    termES: "Jarabe",
    termRO: "Sirop",
    categoryColor: "bg-yellow-50",
    defES: "Solución oral líquida y viscosa que contiene alta concentración de azúcar (sacarosa) o edulcorantes, utilizada como vehículo para fármacos (antitusivos, analgésicos), especialmente en pediatría.",
    defRO: "Soluție orală lichidă și vâscoasă care conține o concentrație mare de zahăr (zaharoză) sau îndulcitori, utilizată ca vehicul pentru medicamente (antitusive, analgezice), în special în pediatrie.",
    nanda: null
}, {
    id: "v_j_jeringa",
    termES: "Jeringa",
    termRO: "Seringă",
    categoryColor: "bg-stone-50",
    defES: "Instrumento médico estéril compuesto por un cilindro y un émbolo, usado para inyectar fluidos o extraerlos. Tipos: Luer-Lock, Insulina (UI), Tuberculina, Alimentación (Cono Guyon).",
    defRO: "Instrument medical steril compus dintr-un cilindru și un piston, folosit pentru injectarea fluidelor sau extragerea lor. Tipuri: Luer-Lock, Insulină (UI), Tuberculină, Alimentație (Con Guyon).",
    nanda: null
}, {
    id: "v_j_joroba",
    termES: "Joroba (Cifosis/Giba)",
    termRO: "Cocoașă (Cifoză)",
    categoryColor: "bg-stone-50",
    defES: 'Curvatura convexa exagerada de la columna dorsal (cifosis hipercifosis) o acumulación de grasa dorsocervical ("Giba de búfalo") característica del síndrome de Cushing.',
    defRO: 'Curbură convexă exagerată a coloanei dorsale (cifoză hipercifoză) sau acumulare de grăsime dorsocervicală ("Cocoașă de bivol") caracteristică sindromului Cushing.',
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_j_juanete",
    termES: "Juanete (Hallux Valgus)",
    termRO: "Mont (Hallux Valgus)",
    categoryColor: "bg-red-50",
    defES: "Deformidad del antepié consistente en la desviación lateral del primer dedo (hallux) y medial del primer metatarsiano, formando una prominencia ósea dolorosa (bursitis).",
    defRO: "Deformare a antepiciorului constând în devierea laterală a primului deget (hallux) și medială a primului metatarsian, formând o proeminență osoasă dureroasă (bursită).",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_j_jugular",
    termES: "Jugular (Vena)",
    termRO: "Jugulară (Vena)",
    categoryColor: "bg-blue-50",
    defES: "Principales venas del cuello que drenan la sangre del cerebro, cara y cuello hacia la cava superior. Interna (acceso venoso central) y Externa. La ingurgitación yugular indica fallo derecho.",
    defRO: "Principalele vene ale gâtului care drenează sângele din creier, față și gât spre cava superioară. Internă (acces venos central) și Externă. Turgescența jugulară indică insuficiență dreaptă.",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_j_juramento",
    termES: "Juramento Hipocrático",
    termRO: "Jurământul lui Hipocrate",
    categoryColor: "bg-slate-50",
    defES: 'Declaración ética fundamental de la medicina occidental. Compromete al profesional a actuar en beneficio del paciente ("Primum non nocere"), respetar la confidencialidad y la vida.',
    defRO: 'Declarație etică fundamentală a medicinei occidentale. Angajează profesionistul să acționeze în beneficiul pacientului ("Primum non nocere"), să respecte confidențialitatea și viața.',
    nanda: null
}, {
    id: "v_j_justicia",
    termES: "Justicia (Bioética)",
    termRO: "Justiție (Bioetică)",
    categoryColor: "bg-teal-50",
    defES: "Principio bioético que exige equidad en la distribución de recursos sanitarios, beneficios y cargas, y el trato igualitario a todos los pacientes sin discriminación.",
    defRO: "Principiu bioetic care cere echitate în distribuția resurselor sanitare, beneficiilor și sarcinilor, și tratamentul egal al tuturor pacienților fără discriminare.",
    nanda: null
}, {
    id: "v_k_kala_azar",
    termES: "Kala-azar (Leishmaniasis Visceral)",
    termRO: "Kala-azar (Leishmanioză Viscerală)",
    categoryColor: "bg-stone-50",
    defES: "Forma grave de leishmaniasis causada por el parásito Leishmania donovani (transmitido por flebótomos). Afecta a órganos internos (hígado, bazo, médula), causando fiebre, pérdida de peso y hepatoesplenomegalia.",
    defRO: "Formă gravă de leishmanioză cauzată de parazitul Leishmania donovani (transmis de flebotomi). Afectează organele interne (ficat, splină, măduvă), cauzând febră, scădere în greutate și hepatosplenomegalie.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_k_kalemia",
    termES: "Kalemia (Potasemia)",
    termRO: "Kaliemie",
    categoryColor: "bg-green-50",
    defES: "Nivel de potasio (K+) en sangre. El potasio es el principal catión intracelular, vital para el potencial de membrana y la función cardíaca. Valor normal: 3.5 - 5.0 mEq/L.",
    defRO: "Nivelul de potasiu (K+) în sânge. Potasiul este principalul cation intracelular, vital pentru potențialul de membrană și funcția cardiacă. Valoare normală: 3.5 - 5.0 mEq/L.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_k_kanamicina",
    termES: "Kanamicina",
    termRO: "Kanamicină",
    categoryColor: "bg-teal-50",
    defES: "Antibiótico aminoglucósido bactericida. Se usa poco sistémicamente por su alta ototoxicidad y nefrotoxicidad, pero es útil en tuberculosis multirresistente o esterilización intestinal.",
    defRO: "Antibiotic aminoglicozidic bactericid. Se folosește puțin sistemic din cauza otatoxicității și nefrotoxicității ridicate, dar este util în tuberculoza multirezistentă sau sterilizarea intestinală.",
    nanda: null
}, {
    id: "v_k_kaposi",
    termES: "Kaposi (Sarcoma de)",
    termRO: "Kaposi (Sarcom)",
    categoryColor: "bg-purple-50",
    defES: "Cáncer vascular causado por el virus herpes humano 8 (HHV-8). Aparece como lesiones cutáneas púrpuras o rojas. Es una enfermedad definitoria de SIDA en pacientes VIH+.",
    defRO: "Cancer vascular cauzat de virusul herpetic uman 8 (HHV-8). Apare ca leziuni cutanate purpurii sau roșii. Este o boală definitorie pentru SIDA la pacienții HIV+.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_k_kegel",
    termES: "Kegel (Ejercicios de)",
    termRO: "Kegel (Exerciții)",
    categoryColor: "bg-pink-50",
    defES: "Terapia física para fortalecer los músculos del suelo pélvico (pubococcígeo). Indicados para prevenir o tratar la incontinencia urinaria (esfuerzo), prolapsos y disfunciones sexuales.",
    defRO: "Terapie fizică pentru întărirea mușchilor planșeului pelvin (pubococcigian). Indicate pentru prevenirea sau tratarea incontinenței urinare (de efort), prolapsurilor și disfuncțiilor sexuale.",
    nanda: {
        codeES: "00017",
        codeRO: "00017",
        labelES: "Incontinencia urinaria de esfuerzo",
        labelRO: "Incontinență urinară de efort"
    }
}, {
    id: "v_k_keloide",
    termES: "Queloide (Keloide)",
    termRO: "Cheloid",
    categoryColor: "bg-red-50",
    defES: "Cicatrización patológica excesiva. El tejido fibroso crece más allá de los bordes de la herida original, es duro, elevado y no involuciona. Predisposición genética.",
    defRO: "Cicatrizare patologică excesivă. Țesutul fibros crește dincolo de marginile plăgii originale, este tare, ridicat și nu involuează. Predispoziție genetică.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_k_keratina",
    termES: "Queratina (Keratina)",
    termRO: "Keratină",
    categoryColor: "bg-stone-50",
    defES: "Proteína fibrosa estructural rica en azufre, componente principal de la epidermis (capa córnea), pelo y uñas. Aporta dureza e impermeabilidad.",
    defRO: "Proteină fibroasă structurală bogată în sulf, component principal al epidermei (strat cornos), părului și unghiilor. Oferă duritate și impermeabilitate.",
    nanda: null
}, {
    id: "v_k_kernig",
    termES: "Kernig (Signo de)",
    termRO: "Kernig (Semn)",
    categoryColor: "bg-blue-50",
    defES: "Signo de irritación meníngea. Con el paciente en decúbito supino y cadera flexionada 90°, es imposible o muy doloroso extender la rodilla completamente. Sugiere meningitis.",
    defRO: "Semn de iritație meningeală. Cu pacientul în decubit dorsal și șoldul flectat la 90°, este imposibil sau foarte dureros să se extindă genunchiul complet. Sugerează meningită.",
    nanda: null
}, {
    id: "v_k_kernicterus",
    termES: "Kernicterus",
    termRO: "Kernicterus",
    categoryColor: "bg-yellow-50",
    defES: "Encefalopatía bilirrubínica crónica. Daño cerebral permanente en neonatos por depósito de bilirrubina no conjugada en ganglios basales debido a hiperbilirrubinemia severa no tratada.",
    defRO: "Encefalopatie bilirubinică cronică. Leziune cerebrală permanentă la nou-născuți prin depunerea bilirubinei neconjugate în ganglionii bazali din cauza hiperbilirubinemiei severe netratate.",
    nanda: {
        codeES: "00194",
        codeRO: "00194",
        labelES: "Ictericia neonatal",
        labelRO: "Icter neonatal"
    }
}, {
    id: "v_k_ketamina",
    termES: "Ketamina",
    termRO: "Ketamină",
    categoryColor: "bg-indigo-50",
    defES: "Anestésico disociativo parenteral. Produce analgesia potente, sedación y amnesia manteniendo los reflejos protectores y la respiración. Usado en urgencias, pediatría y curas de quemados.",
    defRO: "Anestezic disociativ parenteral. Produce analgezie puternică, sedare și amnezie menținând reflexele protectoare și respirația. Folosit în urgențe, pediatrie și tratamentul arsurilor.",
    nanda: null
}, {
    id: "v_k_cetonas",
    termES: "Cetonas (Cuerpos Cetónicos)",
    termRO: "Cetone (Corpi Cetonici)",
    categoryColor: "bg-orange-50",
    defES: "Subproductos ácidos (acetona, acetoacetato) del metabolismo de las grasas cuando falta glucosa. Su acumulación en sangre (cetosis) y orina (cetonuria) indica descompensación diabética o ayuno.",
    defRO: "Subproduse acide (acetonă, acetoacetat) ale metabolismului grăsimilor când lipsește glucoza. Acumularea lor în sânge (cetoză) și urină (cetonurie) indică decompensare diabetică sau post.",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_k_kilocaloria",
    termES: "Kilocaloría (kcal)",
    termRO: "Kilocalorie (kcal)",
    categoryColor: "bg-yellow-50",
    defES: "Unidad de energía térmica usada en nutrición. Cantidad de calor necesaria para elevar 1°C la temperatura de 1 kg de agua. 1 kcal = 4.184 kJ. Base para el cálculo de dietas.",
    defRO: "Unitate de energie termică utilizată în nutriție. Cantitatea de căldură necesară pentru a ridica temperatura unui kg de apă cu 1°C. 1 kcal = 4.184 kJ. Baza pentru calculul dietelor.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_k_klebsiella",
    termES: "Klebsiella pneumoniae",
    termRO: "Klebsiella pneumoniae",
    categoryColor: "bg-red-50",
    defES: 'Bacteria gramnegativa entérica oportunista. Causa neumonías graves (esputo "jalea de grosella"), infecciones urinarias y sepsis, especialmente en hospitalizados. Frecuente resistencia (KPC).',
    defRO: 'Bacterie gram-negativă enterică oportunistă. Cauzează pneumonii grave (spută "jeleu de coacăze"), infecții urinare și sepsis, în special la spitalizați. Frecventă rezistență (KPC).',
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_k_klinefelter",
    termES: "Klinefelter (Síndrome de)",
    termRO: "Klinefelter (Sindrom)",
    categoryColor: "bg-purple-50",
    defES: "Anomalía cromosómica en varones caracterizada por la presencia de un cromosoma X extra (47,XXY). Causa hipogonadismo, infertilidad, ginecomastia y talla alta.",
    defRO: "Anomalie cromozomială la bărbați caracterizată prin prezența unui cromozom X suplimentar (47,XXY). Cauzează hipogonadism, infertilitate, ginecomastie și talie înaltă.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_k_koch",
    termES: "Koch (Bacilo de)",
    termRO: "Koch (Bacilul)",
    categoryColor: "bg-stone-50",
    defES: "Nombre común de Mycobacterium tuberculosis, la bacteria causante de la tuberculosis. Bacilo aerobio ácido-alcohol resistente (BAAR), visualizado con tinción de Ziehl-Neelsen.",
    defRO: "Nume comun pentru Mycobacterium tuberculosis, bacteria cauzatoare a tuberculozei. Bacil aerob acid-alcool rezistent (BAAR), vizualizat cu colorația Ziehl-Neelsen.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_k_koplik",
    termES: "Koplik (Manchas de)",
    termRO: "Koplik (Pete)",
    categoryColor: "bg-red-50",
    defES: "Signo patognomónico del sarampión. Pequeñas manchas blancas/azuladas con halo rojo en la mucosa bucal (cara interna de mejillas) que aparecen antes del exantema cutáneo.",
    defRO: "Semn patognomonic al rujeolei. Mici pete albe/albăstrui cu halou roșu pe mucoasa bucală (fața internă a obrajilor) care apar înainte de exantemul cutanat.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_k_korsakoff",
    termES: "Korsakoff (Síndrome de)",
    termRO: "Korsakoff (Sindrom)",
    categoryColor: "bg-purple-50",
    defES: "Trastorno amnésico crónico causado por déficit grave de tiamina (Vit B1), típicamente en alcoholismo crónico. Amnesia anterógrada severa y confabulación (inventar recuerdos). Fase tardía de Wernicke.",
    defRO: "Tulburare amnezică cronică cauzată de deficitul grav de tiamină (Vit B1), tipic în alcoolismul cronic. Amnezie anterogradă severă și confabulație (inventarea amintirilor). Faza tardivă a Wernicke.",
    nanda: {
        codeES: "00131",
        codeRO: "00131",
        labelES: "Deterioro de la memoria",
        labelRO: "Memorie afectată"
    }
}, {
    id: "v_k_kussmaul",
    termES: "Kussmaul (Respiración de)",
    termRO: "Kussmaul (Respirație)",
    categoryColor: "bg-sky-50",
    defES: "Patrón respiratorio anormal caracterizado por respiraciones profundas, rápidas y suspirantes. Es una respuesta compensatoria a la acidosis metabólica severa (ej. cetoacidosis diabética) para eliminar CO2.",
    defRO: "Model respirator anormal caracterizat prin respirații profunde, rapide și suspinate. Este un răspuns compensator la acidoza metabolică severă (ex. cetoacidoză diabetică) pentru a elimina CO2.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_k_kwashiorkor",
    termES: "Kwashiorkor",
    termRO: "Kwashiorkor",
    categoryColor: "bg-yellow-50",
    defES: 'Desnutrición proteica severa en niños (con ingesta calórica adecuada). Signos: edema generalizado (hipoalbuminemia), ascitis ("barriga hinchada"), hepatomegalia grasa, dermatitis y despigmentación.',
    defRO: 'Malnutriție proteică severă la copii (cu aport caloric adecvat). Semne: edem generalizat (hipoalbuminemie), ascită ("burtă umflată"), hepatomegalie grasă, dermatită și depigmentare.',
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_l_labio",
    termES: "Labio",
    termRO: "Buză",
    categoryColor: "bg-pink-50",
    defES: 'Estructura carnosa y móvil que forma la entrada de la cavidad oral. Los labios son altamente sensibles y vascularizados. "Labio leporino" (fisura labial) es un defecto congénito común que requiere reparación quirúrgica.',
    defRO: 'Structură cărnoasă și mobilă care formează intrarea în cavitatea bucală. Buzele sunt extrem de sensibile și vascularizate. "Buza de iepure" (cheiloschizis) este un defect congenital comun care necesită reparație chirurgicală.',
    nanda: {
        codeES: "00048",
        codeRO: "00048",
        labelES: "Deterioro de la dentición",
        labelRO: "Dentiție afectată"
    }
}, {
    id: "v_l_labilidad",
    termES: "Labilidad (Emocional)",
    termRO: "Labilitate (Emoțională)",
    categoryColor: "bg-purple-50",
    defES: "Estado de inestabilidad emocional caracterizado por cambios rápidos, exagerados e impredecibles en el estado de ánimo (llanto a risa). Común en trastornos neurológicos (pseudobulbar), demencia o manía.",
    defRO: "Stare de instabilitate emoțională caracterizată prin schimbări rapide, exagerate și imprevizibile ale dispoziției (de la plâns la râs). Comună în tulburări neurologice (pseudobulbar), demență sau manie.",
    nanda: {
        codeES: "00251",
        codeRO: "00251",
        labelES: "Control emocional inestable",
        labelRO: "Control emoțional instabil"
    }
}, {
    id: "v_l_labor",
    termES: "Labor de Parto (Trabajo de Parto)",
    termRO: "Travaliu",
    categoryColor: "bg-pink-50",
    defES: "Proceso fisiológico mediante el cual el feto, la placenta y las membranas son expulsados del útero a través del canal del parto. Fases: Dilatación (latente/activa), Expulsivo y Alumbramiento.",
    defRO: "Proces fiziologic prin care fătul, placenta și membranele sunt expulzate din uter prin canalul de naștere. Faze: Dilatație (latentă/activă), Expulzie și Delivrență.",
    nanda: {
        codeES: "00256",
        codeRO: "00256",
        labelES: "Dolor de parto",
        labelRO: "Durere la naștere"
    }
}, {
    id: "v_l_laboratorio",
    termES: "Laboratorio (Pruebas de)",
    termRO: "Laborator (Analize de)",
    categoryColor: "bg-teal-50",
    defES: "Análisis de muestras biológicas (sangre, orina, heces, tejidos) para obtener datos objetivos sobre el estado de salud, confirmar diagnósticos o monitorizar tratamientos. Valores críticos requieren notificación inmediata.",
    defRO: "Analiza probelor biologice (sânge, urină, materii fecale, țesuturi) pentru a obține date obiective despre starea de sănătate, a confirma diagnostice sau a monitoriza tratamente. Valorile critice necesită notificare imediată.",
    nanda: null
}, {
    id: "v_l_laceracion",
    termES: "Laceración",
    termRO: "Lacerație",
    categoryColor: "bg-red-50",
    defES: "Herida producida por el desgarro de tejidos, con bordes irregulares y dentados, causada generalmente por un traumatismo contuso. Riesgo de infección y cicatrización deficiente.",
    defRO: "Plagă produsă prin sfâșierea țesuturilor, cu margini neregulate și dințate, cauzată de obicei de un traumatism contuz. Risc de infecție și cicatrizare deficitară.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_l_lactancia_materna",
    termES: "Lactancia Materna",
    termRO: "Alăptare",
    categoryColor: "bg-pink-50",
    defES: "Alimentación del bebé con leche humana. Exclusiva (solo pecho) recomendada los primeros 6 meses. Beneficios: inmunidad (IgA), vínculo afectivo, nutrición óptima. Problemas: grietas, mastitis.",
    defRO: "Hrănirea bebelușului cu lapte uman. Exclusivă (doar sân) recomandată în primele 6 luni. Beneficii: imunitate (IgA), legătură afectivă, nutriție optimă. Probleme: ragade, mastită.",
    nanda: {
        codeES: "00104",
        codeRO: "00104",
        labelES: "Lactancia materna ineficaz",
        labelRO: "Alăptare ineficientă"
    }
}, {
    id: "v_l_lactato",
    termES: "Lactato (Ácido Láctico)",
    termRO: "Lactat (Acid Lactic)",
    categoryColor: "bg-orange-50",
    defES: "Producto del metabolismo anaeróbico de la glucosa. Su elevación en sangre (>2 mmol/L) indica hipoperfusión tisular, hipoxia celular o sepsis grave. Marcador pronóstico en shock.",
    defRO: "Produs al metabolismului anaerob al glucozei. Creșterea sa în sânge (>2 mmol/L) indică hipoperfuzie tisulară, hipoxie celulară sau sepsis sever. Marker prognostic în șoc.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_l_lactosa",
    termES: "Lactosa",
    termRO: "Lactoză",
    categoryColor: "bg-yellow-50",
    defES: "Disacárido (azúcar) presente en la leche, formado por glucosa y galactosa. La intolerancia a la lactosa se debe al déficit de la enzima lactasa, causando diarrea, gases y distensión abdominal.",
    defRO: "Dizaharid (zahăr) prezent în lapte, format din glucoză și galactoză. Intoleranța la lactoză se datorează deficitului enzimei lactază, cauzând diaree, gaze și distensie abdominală.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_l_lactulosa",
    termES: "Lactulosa",
    termRO: "Lactuloză",
    categoryColor: "bg-teal-50",
    defES: "Laxante osmótico sintético. Se utiliza para tratar el estreñimiento crónico y la encefalopatía hepática (atrapa el amonio en el intestino y facilita su expulsión).",
    defRO: "Laxativ osmotic sintetic. Se utilizează pentru tratarea constipației cronice și a encefalopatiei hepatice (captează amoniul în intestin și facilitează eliminarea acestuia).",
    nanda: null
}, {
    id: "v_l_lanceta",
    termES: "Lanceta",
    termRO: "Lancetă",
    categoryColor: "bg-stone-50",
    defES: "Instrumento pequeño y afilado utilizado para realizar punciones capilares (dedo o talón) y obtener pequeñas muestras de sangre para glucemia, gases o tamizaje neonatal.",
    defRO: "Instrument mic și ascuțit utilizat pentru efectuarea puncțiilor capilare (deget sau călcâi) și obținerea unor mostre mici de sânge pentru glicemie, gaze sau screening neonatal.",
    nanda: null
}, {
    id: "v_l_lanugo",
    termES: "Lanugo",
    termRO: "Lanugo",
    categoryColor: "bg-pink-50",
    defES: "Vello fino, suave y sin pigmento que cubre el cuerpo del feto. Generalmente desaparece antes del nacimiento o poco después. Su presencia abundante en un recién nacido sugiere prematuridad.",
    defRO: "Păr fin, moale și nepigmentat care acoperă corpul fătului. De obicei dispare înainte de naștere sau la scurt timp după. Prezența sa abundentă la un nou-născut sugerează prematuritate.",
    nanda: null
}, {
    id: "v_l_laparoscopia",
    termES: "Laparoscopia",
    termRO: "Laparoscopie",
    categoryColor: "bg-teal-50",
    defES: "Técnica quirúrgica mínimamente invasiva que permite visualizar y operar en la cavidad abdominal mediante pequeñas incisiones y el uso de un laparoscopio (cámara). Menor dolor y recuperación rápida.",
    defRO: "Tehnică chirurgicală minim invazivă care permite vizualizarea și operarea în cavitatea abdominală prin incizii mici și utilizarea unui laparoscop (cameră). Durere redusă și recuperare rapidă.",
    nanda: null
}, {
    id: "v_l_laparotomia",
    termES: "Laparotomía",
    termRO: "Laparotomie",
    categoryColor: "bg-red-50",
    defES: "Incisión quirúrgica mayor en la pared abdominal para acceder a la cavidad peritoneal. Laparotomía exploratoria: para diagnosticar patología abdominal urgente cuando otros métodos fallan.",
    defRO: "Incizie chirurgicală majoră în peretele abdominal pentru a accesa cavitatea peritoneală. Laparotomie exploratorie: pentru diagnosticarea patologiei abdominale urgente când alte metode eșuează.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_l_laringe",
    termES: "Laringe",
    termRO: "Laringe",
    categoryColor: "bg-sky-50",
    defES: "Órgano tubular del sistema respiratorio situado entre la faringe y la tráquea. Contiene las cuerdas vocales (fonación) y la epiglotis (protección vía aérea). Su inflamación es la laringitis.",
    defRO: "Organ tubular al sistemului respirator situat între faringe și trahee. Conține corzile vocale (fonație) și epigloata (protecție cale aeriană). Inflamația sa este laringita.",
    nanda: null
}, {
    id: "v_l_laringectomia",
    termES: "Laringectomía",
    termRO: "Laringectomie",
    categoryColor: "bg-stone-50",
    defES: "Extirpación quirúrgica total o parcial de la laringe, generalmente por cáncer. La laringectomía total implica un estoma traqueal permanente y pérdida de la voz natural.",
    defRO: "Extirparea chirurgicală totală sau parțială a laringelui, de obicei pentru cancer. Laringectomia totală implică o stomă traheală permanentă și pierderea vocii naturale.",
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_l_laringoscopio",
    termES: "Laringoscopio",
    termRO: "Laringoscop",
    categoryColor: "bg-stone-50",
    defES: "Instrumento médico utilizado para visualizar la glotis y las cuerdas vocales, facilitando la intubación endotraqueal. Consta de un mango y una pala (curva o recta) con luz.",
    defRO: "Instrument medical utilizat pentru vizualizarea glotei și a corzilor vocale, facilitând intubația endotraheală. Constă dintr-un mâner și o lamă (curbă sau dreaptă) cu lumină.",
    nanda: null
}, {
    id: "v_l_laringoespasmo",
    termES: "Laringoespasmo",
    termRO: "Laringospasm",
    categoryColor: "bg-red-50",
    defES: "Cierre brusco e involuntario de las cuerdas vocales, bloqueando el paso de aire. Emergencia respiratoria que puede ocurrir en la extubación o por aspiración. Causa estridor.",
    defRO: "Închidere bruscă și involuntară a corzilor vocale, blocând trecerea aerului. Urgență respiratorie care poate apărea la extubare sau prin aspirație. Cauzează stridor.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_l_latencia",
    termES: "Latencia",
    termRO: "Latență",
    categoryColor: "bg-gray-50",
    defES: "Estado en el que un microorganismo (virus) permanece en el cuerpo sin replicarse activamente ni causar síntomas, pero con potencial de reactivación (ej. Herpes, VIH, Tuberculosis latente).",
    defRO: "Stare în care un microorganism (virus) rămâne în corp fără a se replica activ și fără a cauza simptome, dar cu potențial de reactivare (ex. Herpes, HIV, Tuberculoză latentă).",
    nanda: null
}, {
    id: "v_l_latido",
    termES: "Latido Cardíaco",
    termRO: "Bătaie Cardiacă",
    categoryColor: "bg-red-50",
    defES: "Pulsación rítmica del corazón, que incluye una sístole (contracción) y una diástole (relajación). Latido de punta: impulso apical palpable en el 5º espacio intercostal.",
    defRO: "Pulsație ritmică a inimii, care include o sistolă (contracție) și o diastolă (relaxare). Șoc apexian: impuls apical palpabil în spațiul 5 intercostal.",
    nanda: null
}, {
    id: "v_l_lavado_gastrico",
    termES: "Lavado Gástrico",
    termRO: "Lavaj Gastric",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento para vaciar el contenido del estómago mediante la instilación y aspiración de líquido a través de una sonda orogástrica. Usado en intoxicaciones agudas recientes (<1h).",
    defRO: "Procedură pentru golirea conținutului stomacului prin instilarea și aspirarea lichidului printr-o sondă orogastrică. Utilizat în intoxicații acute recente (<1h).",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_l_lavado_manos",
    termES: "Lavado de Manos (Higiene)",
    termRO: "Spălarea Mâinilor (Igienă)",
    categoryColor: "bg-green-50",
    defES: 'Medida más eficaz para prevenir la transmisión de infecciones. Lavado social (jabón), antiséptico (alcohol-gel) o quirúrgico. Los "5 momentos" de la OMS son el estándar.',
    defRO: 'Măsura cea mai eficientă pentru prevenirea transmiterii infecțiilor. Spălare socială (săpun), antiseptică (gel alcoolic) sau chirurgicală. Cele "5 momente" ale OMS sunt standardul.',
    nanda: null
}, {
    id: "v_l_lavado_peritoneal",
    termES: "Lavado Peritoneal",
    termRO: "Lavaj Peritoneal",
    categoryColor: "bg-teal-50",
    defES: "Introducción y extracción de líquido en la cavidad peritoneal. Diagnóstico (trauma abdominal, buscar sangre) o Terapéutico (diálisis peritoneal, peritonitis, calentamiento en hipotermia).",
    defRO: "Introducerea și extragerea lichidului în cavitatea peritoneală. Diagnostic (traumatism abdominal, căutare sânge) sau Terapeutic (dializă peritoneală, peritonită, încălzire în hipotermie).",
    nanda: null
}, {
    id: "v_l_laxante",
    termES: "Laxante",
    termRO: "Laxativ",
    categoryColor: "bg-orange-50",
    defES: "Fármaco que promueve la evacuación intestinal. Tipos: Formadores de masa (fibra), Osmóticos (lactulosa), Estimulantes (bisacodilo), Emolientes (docusato). Abuso causa dependencia.",
    defRO: "Medicament care promovează evacuarea intestinală. Tipuri: Formatori de masă (fibre), Osmotice (lactuloză), Stimulante (bisacodil), Emoliente (docusat). Abuzul cauzează dependență.",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_l_legrado",
    termES: "Legrado (Curetaje)",
    termRO: "Chiuretaj",
    categoryColor: "bg-teal-50",
    defES: "Intervención quirúrgica ginecológica que consiste en raspar la pared interna del útero (endometrio) con una legra o cureta. Usos: aborto incompleto, biopsia, hemorragia disfuncional.",
    defRO: "Intervenție chirurgicală ginecologică ce constă în răzuirea peretelui intern al uterului (endometru) cu o chiuretă. Utilizări: avort incomplet, biopsie, hemoragie disfuncțională.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_l_leishmaniasis",
    termES: "Leishmaniasis",
    termRO: "Leishmanioză",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad parasitaria transmitida por la picadura del flebótomo. Cutánea (úlceras en piel) o Visceral (Kala-azar: fiebre, hepatoesplenomegalia, mortal si no se trata).",
    defRO: "Boală parazitară transmisă prin înțepătura flebotomului. Cutanată (ulcere pe piele) sau Viscerală (Kala-azar: febră, hepatosplenomegalie, mortală dacă nu este tratată).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_l_lengua",
    termES: "Lengua",
    termRO: "Limbă",
    categoryColor: "bg-pink-50",
    defES: "Órgano muscular móvil de la boca, vital para el gusto, masticación, deglución y el habla. Macroglosia (grande), Glositis (inflamada), Saburral (blanca).",
    defRO: "Organ muscular mobil al gurii, vital pentru gust, masticație, deglutiție și vorbire. Macroglosie (mare), Glosită (inflamată), Saburală (albă).",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_l_lentigo",
    termES: "Lentigo",
    termRO: "Lentigo",
    categoryColor: "bg-stone-50",
    defES: 'Mancha pigmentada plana y benigna en la piel, marrón o negra ("mancha de la edad"). Lentigo maligno: forma precoz de melanoma que requiere vigilancia.',
    defRO: 'Pată pigmentată plană și benignă pe piele, maro sau neagră ("pată de bătrânețe"). Lentigo malign: formă precoce de melanom care necesită supraveghere.',
    nanda: null
}, {
    id: "v_l_leopoldo",
    termES: "Leopold (Maniobras de)",
    termRO: "Leopold (Manevre)",
    categoryColor: "bg-pink-50",
    defES: "Cuatro maniobras de palpación abdominal obstétrica para determinar la posición, presentación y encajamiento del feto en el útero. Se realizan a partir de la semana 28.",
    defRO: "Patru manevre de palpare abdominală obstetricală pentru a determina poziția, prezentația și angajarea fătului în uter. Se efectuează începând cu săptămâna 28.",
    nanda: null
}, {
    id: "v_l_lepra",
    termES: "Lepra (Enfermedad de Hansen)",
    termRO: "Lepră (Boala Hansen)",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad infecciosa crónica causada por Mycobacterium leprae. Afecta piel, nervios periféricos (pérdida de sensibilidad) y mucosas. Curable con poliquimioterapia.",
    defRO: "Boală infecțioasă cronică cauzată de Mycobacterium leprae. Afectează pielea, nervii periferici (pierderea sensibilității) și mucoasele. Vindecabilă cu polichimioterapie.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_l_lesion",
    termES: "Lesión",
    termRO: "Leziune",
    categoryColor: "bg-red-50",
    defES: "Cualquier daño o alteración anormal en la estructura o función de un tejido u órgano, causado por trauma, enfermedad o cirugía. Primaria (ej. pápula) o Secundaria (ej. costra).",
    defRO: "Orice daună sau alterare anormală în structura sau funcția unui țesut sau organ, cauzată de traumă, boală sau chirurgie. Primară (ex. papulă) sau Secundară (ex. crustă).",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_l_letargo",
    termES: "Letargo",
    termRO: "Letargie",
    categoryColor: "bg-purple-50",
    defES: "Estado de somnolencia profunda, inactividad y respuesta lenta a estímulos. Nivel de conciencia disminuido, pero el paciente puede ser despertado temporalmente.",
    defRO: "Stare de somnolență profundă, inactivitate și răspuns lent la stimuli. Nivel de conștiență scăzut, dar pacientul poate fi trezit temporar.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_l_leucemia",
    termES: "Leucemia",
    termRO: "Leucemie",
    categoryColor: "bg-red-50",
    defES: "Cáncer de los tejidos hematopoyéticos (médula ósea) caracterizado por la proliferación descontrolada de glóbulos blancos inmaduros (blastos). Aguda (LLA, LMA) o Crónica. Causa anemia, infecciones y sangrado.",
    defRO: "Cancer al țesuturilor hematopoietice (măduvă osoasă) caracterizat prin proliferarea necontrolată a globulelor albe imature (blaști). Acută (LLA, LMA) sau Cronică. Cauzează anemie, infecții și sângerare.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_l_leucocito",
    termES: "Leucocito (Glóbulo Blanco)",
    termRO: "Leucocit (Globulă Albă)",
    categoryColor: "bg-red-50",
    defES: "Célula sanguínea del sistema inmunitario. Tipos: Neutrófilos (bacterias), Linfocitos (virus/memoria), Monocitos, Eosinófilos (alergia/parásitos), Basófilos. Leucocitosis (alto) vs Leucopenia (bajo).",
    defRO: "Celulă sanguină a sistemului imunitar. Tipuri: Neutrofile (bacterii), Limfocite (virusuri/memorie), Monocite, Eozinofile (alergie/paraziți), Bazofile. Leucocitoză (mare) vs Leucopenie (mică).",
    nanda: null
}, {
    id: "v_l_leucopenia",
    termES: "Leucopenia",
    termRO: "Leucopenie",
    categoryColor: "bg-red-50",
    defES: "Disminución del número total de leucocitos en sangre (<4000/mm³). Aumenta drásticamente el riesgo de infecciones. Causas: quimioterapia, enfermedades virales, aplasia medular.",
    defRO: "Scăderea numărului total de leucocite în sânge (<4000/mm³). Crește drastic riscul de infecții. Cauze: chimioterapie, boli virale, aplazie medulară.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_l_leucorrea",
    termES: "Leucorrea",
    termRO: "Leucoree",
    categoryColor: "bg-pink-50",
    defES: "Flujo vaginal blanquecino o amarillento. Puede ser fisiológico o signo de infección (candidiasis, vaginosis bacteriana, tricomoniasis) si cambia de color, olor o causa prurito.",
    defRO: "Scurgere vaginală albicioasă sau gălbuie. Poate fi fiziologică sau semn de infecție (candidoză, vaginoză bacteriană, tricomoniază) dacă își schimbă culoarea, mirosul sau cauzează prurit.",
    nanda: null
}, {
    id: "v_l_levodopa",
    termES: "Levodopa (L-Dopa)",
    termRO: "Levodopa",
    categoryColor: "bg-purple-50",
    defES: "Precursor de la dopamina y fármaco principal para el Parkinson. Cruza la barrera hematoencefálica y se convierte en dopamina en el cerebro, aliviando la rigidez y el temblor.",
    defRO: "Precursor al dopaminei și medicament principal pentru Parkinson. Traversează bariera hematoencefalică și se transformă în dopamină în creier, ameliorând rigiditatea și tremurul.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_l_libido",
    termES: "Libido",
    termRO: "Libido",
    categoryColor: "bg-pink-50",
    defES: "Deseo o impulso sexual. Influenciado por factores hormonales (testosterona/estrógenos), psicológicos y físicos. Su disminución es común en depresión o con ciertos fármacos (ISRS).",
    defRO: "Dorință sau impuls sexual. Influențat de factori hormonali (testosteron/estrogeni), psihologici și fizici. Scăderea sa este comună în depresie sau cu anumite medicamente (ISRS).",
    nanda: {
        codeES: "00059",
        codeRO: "00059",
        labelES: "Disfunción sexual",
        labelRO: "Disfuncție sexuală"
    }
}, {
    id: "v_l_ligamento",
    termES: "Ligamento",
    termRO: "Ligament",
    categoryColor: "bg-stone-50",
    defES: "Banda de tejido conectivo fibroso resistente que une hueso con hueso en una articulación, proporcionando estabilidad. Su lesión por estiramiento excesivo es un esguince.",
    defRO: "Bandă de țesut conjunctiv fibros rezistent care unește os cu os într-o articulație, oferind stabilitate. Leziunea sa prin întindere excesivă este o entorsă.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_l_ligadura_trompas",
    termES: "Ligadura de Trompas",
    termRO: "Ligatură Tubară",
    categoryColor: "bg-pink-50",
    defES: "Método de esterilización femenina permanente que consiste en cortar, atar o bloquear las trompas de Falopio para impedir que el óvulo se encuentre con el espermatozoide.",
    defRO: "Metodă de sterilizare feminină permanentă care constă în tăierea, legarea sau blocarea trompelor uterine pentru a împiedica întâlnirea ovulului cu spermatozoidul.",
    nanda: null
}, {
    id: "v_l_linfa",
    termES: "Linfa",
    termRO: "Limfă",
    categoryColor: "bg-green-50",
    defES: "Líquido transparente rico en glóbulos blancos (linfocitos) que circula por el sistema linfático. Recoge el exceso de líquido intersticial, grasas y patógenos, filtrándolos en los ganglios.",
    defRO: "Lichid transparent bogat în globule albe (limfocite) care circulă prin sistemul limfatic. Colectează excesul de lichid interstițial, grăsimi și patogeni, filtrându-i în ganglioni.",
    nanda: null
}, {
    id: "v_l_linfedema",
    termES: "Linfedema",
    termRO: "Limfedem",
    categoryColor: "bg-stone-50",
    defES: "Edema crónico de una extremidad causado por la acumulación de linfa debido a un bloqueo o daño en el sistema linfático (ej. post-mastectomía). Piel dura y riesgo de infección (celulitis).",
    defRO: "Edem cronic al unui membru cauzat de acumularea de limfă datorită unui blocaj sau leziuni în sistemul limfatic (ex. post-mastectomie). Piele tare și risc de infecție (celulită).",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_l_linfocito",
    termES: "Linfocito",
    termRO: "Limfocit",
    categoryColor: "bg-green-50",
    defES: "Tipo de leucocito fundamental para la inmunidad adaptativa. Células B (producen anticuerpos), Células T (destruyen células infectadas/regulan) y NK (Natural Killer).",
    defRO: "Tip de leucocit fundamental pentru imunitatea adaptativă. Celule B (produc anticorpi), Celule T (distrug celule infectate/reglează) și NK (Natural Killer).",
    nanda: null
}, {
    id: "v_l_linfoma",
    termES: "Linfoma",
    termRO: "Limfom",
    categoryColor: "bg-red-50",
    defES: "Cáncer del sistema linfático que se origina en los linfocitos. Dos tipos principales: Linfoma de Hodgkin (células Reed-Sternberg) y Linfoma No Hodgkin. Adenopatías indoloras.",
    defRO: "Cancer al sistemului limfatic care provine din limfocite. Două tipuri principale: Limfom Hodgkin (celule Reed-Sternberg) și Limfom Non-Hodgkin. Adenopatii nedureroase.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_l_lipasa",
    termES: "Lipasa",
    termRO: "Lipază",
    categoryColor: "bg-yellow-50",
    defES: "Enzima pancreática que descompone las grasas (lípidos) en ácidos grasos y glicerol. Su elevación en sangre (>3 veces lo normal) es el marcador más específico de pancreatitis aguda.",
    defRO: "Enzimă pancreatică ce descompune grăsimile (lipide) în acizi grași și glicerol. Creșterea sa în sânge (>3 ori normalul) este markerul cel mai specific pentru pancreatita acută.",
    nanda: null
}, {
    id: "v_l_lipido",
    termES: "Lípido",
    termRO: "Lipid (Grăsime)",
    categoryColor: "bg-yellow-50",
    defES: "Biomoléculas insolubles en agua (grasas). Incluyen triglicéridos (energía), fosfolípidos (membranas) y esteroles (colesterol). Esenciales, pero su exceso causa enfermedad cardiovascular.",
    defRO: "Biomolecule insolubile în apă (grăsimi). Includ trigliceride (energie), fosfolipide (membrane) și steroli (colesterol). Esențiale, dar excesul lor cauzează boli cardiovasculare.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_l_lipoma",
    termES: "Lipoma",
    termRO: "Lipom",
    categoryColor: "bg-yellow-50",
    defES: "Tumor benigno de tejido adiposo (grasa). Es blando, móvil, indoloro y se ubica bajo la piel. El más común de los tumores de tejidos blandos. Se extirpa si molesta.",
    defRO: "Tumoare benignă de țesut adipos (grăsime). Este moale, mobil, nedureros și se află sub piele. Cea mai comună dintre tumorile țesuturilor moi. Se extirpă dacă deranjează.",
    nanda: null
}, {
    id: "v_l_liposuccion",
    termES: "Liposucción",
    termRO: "Liposucție",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento de cirugía estética para eliminar depósitos de grasa subcutánea localizada mediante aspiración con cánulas. No es un tratamiento para la obesidad generalizada.",
    defRO: "Procedură de chirurgie estetică pentru eliminarea depozitelor de grăsime subcutanată localizată prin aspirare cu canule. Nu este un tratament pentru obezitatea generalizată.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_l_lipotimia",
    termES: "Lipotimia (Presíncope)",
    termRO: "Lipotimie (Presincopă)",
    categoryColor: "bg-gray-50",
    defES: "Sensación de desvanecimiento inminente, mareo, palidez y sudoración, sin llegar necesariamente a la pérdida total de conciencia. Pródromo del síncope vasovagal.",
    defRO: "Senzație de leșin iminent, amețeală, paloare și transpirație, fără a ajunge neapărat la pierderea totală a conștienței. Prodrom al sincopei vasovagale.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_l_liquido_amniotico",
    termES: "Líquido Amniótico",
    termRO: "Lichid Amniotic",
    categoryColor: "bg-blue-50",
    defES: "Fluido que rodea y protege al feto dentro del saco amniótico. Amortigua golpes, mantiene la temperatura y permite el movimiento fetal. Oligohidramnios (poco) / Polihidramnios (mucho).",
    defRO: "Fluid care înconjoară și protejează fătul în interiorul sacului amniotic. Amortizează loviturile, menține temperatura și permite mișcarea fetală. Oligohidramnios (puțin) / Polihidramnios (mult).",
    nanda: null
}, {
    id: "v_l_liquido_cefalorraquideo",
    termES: "Líquido Cefalorraquídeo (LCR)",
    termRO: "Lichid Cefalorahidian (LCR)",
    categoryColor: "bg-blue-50",
    defES: "Fluido claro que circula por los ventrículos cerebrales y el espacio subaracnoideo. Protege el SNC, transporta nutrientes y elimina desechos. Su análisis (punción lumbar) diagnostica meningitis.",
    defRO: "Fluid clar care circulă prin ventriculii cerebrali și spațiul subarahnoidian. Protejează SNC, transportă nutrienți și elimină deșeuri. Analiza sa (puncție lombară) diagnostichează meningita.",
    nanda: null
}, {
    id: "v_l_litiasis",
    termES: "Litiasis (Cálculos)",
    termRO: "Litiază (Calculi)",
    categoryColor: "bg-stone-50",
    defES: "Formación de piedras (cálculos) en órganos huecos o conductos. Renal (nefrolitiasis), Biliar (colelitiasis), Salival. Causan obstrucción y dolor intenso (cólico).",
    defRO: "Formarea de pietre (calculi) în organe goale sau conducte. Renală (nefrolitiază), Biliară (colelitiază), Salivară. Cauzează obstrucție și durere intensă (colică).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_l_litio",
    termES: "Litio (Carbonato de)",
    termRO: "Litiu (Carbonat de)",
    categoryColor: "bg-purple-50",
    defES: "Fármaco estabilizador del estado de ánimo utilizado en el trastorno bipolar. Tiene un margen terapéutico muy estrecho (litemia 0.6-1.2 mEq/L); riesgo alto de toxicidad renal y neurológica.",
    defRO: "Medicament stabilizator al dispoziției utilizat în tulburarea bipolară. Are o marjă terapeutică foarte îngustă (litemie 0.6-1.2 mEq/L); risc crescut de toxicitate renală și neurologică.",
    nanda: null
}, {
    id: "v_l_litotomia",
    termES: "Litotomía (Posición ginecológica)",
    termRO: "Litotomie (Poziție ginecologică)",
    categoryColor: "bg-pink-50",
    defES: "Posición del paciente en decúbito supino con las caderas y rodillas flexionadas y los muslos abducidos, generalmente en estribos. Usada para partos y cirugía ginecológica/urológica.",
    defRO: "Poziția pacientului în decubit dorsal cu șoldurile și genunchii flexați și coapsele în abducție, de obicei în suporturi. Folosită pentru nașteri și chirurgie ginecologică/urologică.",
    nanda: null
}, {
    id: "v_l_lobulo",
    termES: "Lóbulo",
    termRO: "Lob",
    categoryColor: "bg-indigo-50",
    defES: "División anatómica de un órgano. Cerebro (Frontal, Parietal, Temporal, Occipital). Pulmón (3 derecho, 2 izquierdo). Hígado. Oreja (parte inferior carnosa).",
    defRO: "Diviziune anatomică a unui organ. Creier (Frontal, Parietal, Temporal, Occipital). Plămân (3 drept, 2 stâng). Ficat. Ureche (partea inferioară cărnoasă).",
    nanda: null
}, {
    id: "v_l_locion",
    termES: "Loción",
    termRO: "Loțiune",
    categoryColor: "bg-teal-50",
    defES: "Preparación líquida tópica, generalmente acuosa o hidroalcohólica, para aplicación sobre la piel sin fricción. Usada para calmar (calamina), hidratar o medicar (corticoides en cuero cabelludo).",
    defRO: "Preparat lichid topic, de obicei apos sau hidroalcoolic, pentru aplicare pe piele fără frecare. Folosită pentru calmare (calamină), hidratare sau medicamentație (corticoizi pe scalp).",
    nanda: null
}, {
    id: "v_l_loquios",
    termES: "Loquios",
    termRO: "Lohii",
    categoryColor: "bg-red-50",
    defES: "Secreción vaginal postparto compuesta por sangre, moco y tejido placentario. Evolución: Rubra (rojos, 1-3 días), Serosa (rosados, 4-10 días), Alba (blancos, hasta 6 semanas). Olor fétido indica infección.",
    defRO: "Secreție vaginală post-partum compusă din sânge, mucus și țesut placentar. Evoluție: Rubra (roșii, 1-3 zile), Serosa (roz, 4-10 zile), Alba (albe, până la 6 săptămâni). Mirosul fetid indică infecție.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_l_lordosis",
    termES: "Lordosis",
    termRO: "Lordoză",
    categoryColor: "bg-stone-50",
    defES: 'Curvatura fisiológica cóncava hacia atrás de la columna cervical y lumbar. La hiperlordosis ("espalda hundida") es una curvatura excesiva patológica.',
    defRO: 'Curbură fiziologică concavă spre spate a coloanei cervicale și lombare. Hiperlordoza ("spate adâncit") este o curbură excesivă patologică.',
    nanda: null
}, {
    id: "v_l_lumbago",
    termES: "Lumbago (Lumbalgia)",
    termRO: "Lumbago (Durere Lombară)",
    categoryColor: "bg-stone-50",
    defES: "Dolor en la zona baja de la espalda (región lumbar). Causa principal de baja laboral. Etiología: muscular, hernia discal, artrosis. Agudo o crónico.",
    defRO: "Durere în zona inferioară a spatelui (regiunea lombară). Cauza principală a concediului medical. Etiologie: musculară, hernie de disc, artroză. Acut sau cronic.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_l_lupus",
    termES: "Lupus Eritematoso Sistémico (LES)",
    termRO: "Lupus Eritematos Sistemic (LES)",
    categoryColor: "bg-purple-50",
    defES: 'Enfermedad autoinmune crónica multisistémica. El cuerpo ataca sus propios tejidos. Afecta piel ("alas de mariposa"), articulaciones, riñones, corazón. Curso con brotes y remisiones.',
    defRO: 'Boală autoimună cronică multisistemică. Corpul își atacă propriile țesuturi. Afectează pielea ("aripi de fluture"), articulațiile, rinichii, inima. Evoluție cu pusee și remisiuni.',
    nanda: {
        codeES: "00088",
        codeRO: "00088",
        labelES: "Deterioro de la ambulación",
        labelRO: "Amculație afectată"
    }
}, {
    id: "v_l_luxacion",
    termES: "Luxación (Dislocación)",
    termRO: "Luxație (Dislocare)",
    categoryColor: "bg-red-50",
    defES: "Separación completa de las superficies articulares de dos huesos (pérdida de contacto). Emergencia traumatológica que requiere reducción inmediata para evitar daño neurovascular. Común en hombro.",
    defRO: "Separarea completă a suprafețelor articulare a două oase (pierderea contactului). Urgență traumatologică ce necesită reducere imediată pentru a evita leziuni neurovasculare. Comună la umăr.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_m_maceracion",
    termES: "Maceración",
    termRO: "Macerație",
    categoryColor: "bg-stone-50",
    defES: "Ablandamiento y descomposición de la piel debido a la exposición prolongada a la humedad (orina, sudor, exudado). La piel se vuelve blanca y arrugada, siendo muy vulnerable a lesiones y hongos.",
    defRO: "Înmuierea și descompunerea pielii datorită expunerii prelungite la umiditate (urină, transpirație, exsudat). Pielea devine albă și încrețită, fiind foarte vulnerabilă la leziuni și ciuperci.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_m_macrocefalia",
    termES: "Macrocefalia",
    termRO: "Macrocefalie",
    categoryColor: "bg-blue-50",
    defES: "Perímetro cefálico anormalmente grande (> percentil 97). Puede ser familiar benigna o patológica (hidrocefalia, tumores, enfermedades metabólicas).",
    defRO: "Perimetru cranian anormal de mare (> percentila 97). Poate fi familială benignă sau patologică (hidrocefalie, tumori, boli metabolice).",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_m_macrofago",
    termES: "Macrófago",
    termRO: "Macrofag",
    categoryColor: "bg-green-50",
    defES: 'Célula inmunitaria fagocítica grande derivada del monocito. Engulle patógenos, células muertas y estimula la respuesta inmune presentando antígenos. "Limpiador" tisular.',
    defRO: 'Celulă imunitară fagocitică mare derivată din monocit. Înghite patogeni, celule moarte și stimulează răspunsul imun prezentând antigeni. "Curățător" tisular.',
    nanda: null
}, {
    id: "v_m_macula",
    termES: "Mácula",
    termRO: "Maculă",
    categoryColor: "bg-purple-50",
    defES: "1. Dermatología: Lesión plana y coloreada de la piel <1cm (peca). 2. Oftalmología: Área central de la retina responsable de la visión central detallada y del color. Degeneración macular (DMAE).",
    defRO: "1. Dermatologie: Leziune plană și colorată a pielii <1cm (pistrui). 2. Oftalmologie: Aria centrală a retinei responsabilă de vederea centrală detaliată și de culoare. Degenerescență maculară (DMLV).",
    nanda: null
}, {
    id: "v_m_maduracion",
    termES: "Maduración",
    termRO: "Maturizare",
    categoryColor: "bg-green-50",
    defES: "Proceso de desarrollo completo, biológico y psicológico. Maduración pulmonar fetal: producción de surfactante (corticoides en amenaza parto prematuro).",
    defRO: "Proces de dezvoltare completă, biologică și psihologică. Maturizare pulmonară fetală: producția de surfactant (corticoizi în amenințarea de naștere prematură).",
    nanda: {
        codeES: "00112",
        codeRO: "00112",
        labelES: "Riesgo de retraso en el desarrollo",
        labelRO: "Risc de întârziere în dezvoltare"
    }
}, {
    id: "v_m_magnesio",
    termES: "Magnesio (Mg)",
    termRO: "Magneziu (Mg)",
    categoryColor: "bg-yellow-50",
    defES: "Electrolito intracelular esencial para la función enzimática, muscular y nerviosa. Sulfato de magnesio se usa en preeclampsia (anticonvulsivo) y asma grave.",
    defRO: "Electrolit intracelular esențial pentru funcția enzimatică, musculară și nervoasă. Sulfatul de magneziu se folosește în preeclampsie (anticonvulsiv) și astm sever.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_m_malabsorcion",
    termES: "Malabsorción",
    termRO: "Malabsorbție",
    categoryColor: "bg-orange-50",
    defES: "Incapacidad del intestino para absorber nutrientes adecuadamente. Causas: Celiaquía, Crohn, fibrosis quística. Síntomas: diarrea crónica, esteatorrea, pérdida de peso, anemia.",
    defRO: "Incapacitatea intestinului de a absorbi nutrienții în mod adecvat. Cauze: Celiachie, Crohn, fibroză chistică. Simptome: diaree cronică, steatoree, scădere în greutate, anemie.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_m_malaria",
    termES: "Malaria (Paludismo)",
    termRO: "Malarie (Paludism)",
    categoryColor: "bg-red-50",
    defES: "Enfermedad infecciosa tropical causada por parásitos Plasmodium transmitidos por el mosquito Anopheles. Fiebre cíclica, escalofríos, anemia hemolítica y esplenomegalia.",
    defRO: "Boală infecțioasă tropicală cauzată de paraziți Plasmodium transmiși de țânțarul Anopheles. Febră ciclică, frisoane, anemie hemolitică și splenomegalie.",
    nanda: {
        codeES: "00007",
        codeRO: "00007",
        labelES: "Hipertermia",
        labelRO: "Hipertermie"
    }
}, {
    id: "v_m_malformacion",
    termES: "Malformación",
    termRO: "Malformație",
    categoryColor: "bg-pink-50",
    defES: "Defecto estructural primario de un órgano o parte del cuerpo resultante de un desarrollo anormal intrínseco (genético). Ej. Labio leporino, polidactilia.",
    defRO: "Defect structural primar al unui organ sau părți a corpului rezultat dintr-o dezvoltare anormală intrinsecă (genetică). Ex. Buza de iepure, polidactilie.",
    nanda: null
}, {
    id: "v_m_malnutricion",
    termES: "Malnutrición",
    termRO: "Malnutriție",
    categoryColor: "bg-yellow-50",
    defES: "Estado causado por ingesta inadecuada (déficit o exceso) o absorción defectuosa de nutrientes. Incluye desnutrición (marasmo, kwashiorkor) y obesidad.",
    defRO: "Stare cauzată de un aport inadecvat (deficit sau exces) sau absorbție defectuoasă a nutrienților. Include subnutriția (marasm, kwashiorkor) și obezitatea.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_m_mama",
    termES: "Mama (Seno)",
    termRO: "Sân (Mamă)",
    categoryColor: "bg-pink-50",
    defES: "Glándula exocrina productora de leche (en mujeres) y tejido adiposo. Su autoexploración y mamografía son claves para la detección precoz del cáncer de mama.",
    defRO: "Glandă exocrină producătoare de lapte (la femei) și țesut adipos. Autoexaminarea și mamografia sunt cheie pentru depistarea precoce a cancerului de sân.",
    nanda: null
}, {
    id: "v_m_mandibula",
    termES: "Mandíbula",
    termRO: "Mandibulă",
    categoryColor: "bg-stone-50",
    defES: "Hueso inferior de la cara, móvil, que aloja los dientes inferiores. Se articula con el cráneo en la articulación temporomandibular (ATM). Esencial para masticación y habla.",
    defRO: "Osul inferior al feței, mobil, care găzduiește dinții inferiori. Se articulează cu craniul în articulația temporomandibulară (ATM). Esențial pentru masticație și vorbire.",
    nanda: null
}, {
    id: "v_m_maniobra_heimlich",
    termES: "Maniobra de Heimlich",
    termRO: "Manevra Heimlich",
    categoryColor: "bg-red-50",
    defES: "Técnica de primeros auxilios para desobstruir la vía aérea bloqueada por un cuerpo extraño (atragantamiento). Compresiones abdominales bruscas subdiafragmáticas.",
    defRO: "Tehnică de prim ajutor pentru dezobstrucția căii aeriene blocate de un corp străin (înec). Compresiuni abdominale bruște subdiafragmatice.",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_m_maniobra_valsalva",
    termES: "Maniobra de Valsalva",
    termRO: "Manevra Valsalva",
    categoryColor: "bg-blue-50",
    defES: "Espiración forzada con la glotis cerrada (pujar). Aumenta la presión intratorácica e intraabdominal. Usada para defecar, pero peligrosa en cardiópatas (bradicardia refleja).",
    defRO: "Expirație forțată cu glota închisă (a împinge). Crește presiunea intratoracică și intraabdominală. Folosită pentru defecație, dar periculoasă la cardiaci (bradicardie reflexă).",
    nanda: null
}, {
    id: "v_m_mano",
    termES: "Mano",
    termRO: "Mână",
    categoryColor: "bg-stone-50",
    defES: "Parte distal del miembro superior, especializada en la prensión y manipulación. Carpo, metacarpo y falanges. Sitio frecuente de infecciones y traumatismos laborales.",
    defRO: "Partea distală a membrului superior, specializată în prehensiune și manipulare. Carp, metacarp și falange. Loc frecvent de infecții și traumatisme de muncă.",
    nanda: null
}, {
    id: "v_m_marasmo",
    termES: "Marasmo",
    termRO: "Marasm",
    categoryColor: "bg-yellow-50",
    defES: 'Desnutrición severa calórico-proteica, generalmente en niños <1 año. Pérdida extrema de peso, atrofia muscular y grasa ("piel y huesos"), sin edema (a diferencia del Kwashiorkor).',
    defRO: 'Malnutriție severă calorico-proteică, de obicei la copii <1 an. Pierdere extremă în greutate, atrofie musculară și grăsime ("piele și os"), fără edem (spre deosebire de Kwashiorkor).',
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_m_marcapasos",
    termES: "Marcapasos",
    termRO: "Stimulator Cardiac (Pacemaker)",
    categoryColor: "bg-red-50",
    defES: "Dispositivo electrónico implantable que envía impulsos eléctricos al corazón para regular el ritmo cardíaco en caso de bradicardia o bloqueo AV.",
    defRO: "Dispozitiv electronic implantabil care trimite impulsuri electrice inimii pentru a regla ritmul cardiac în caz de bradicardie sau bloc AV.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_m_marcha",
    termES: "Marcha",
    termRO: "Mers",
    categoryColor: "bg-stone-50",
    defES: "Patrón de caminar. Su evaluación detecta patología. Marcha atáxica (ebrio, cerebelo), Parkinsoniana (pasos cortos, festinante), Antiálgica (cojera por dolor), Hemipléjica (segador).",
    defRO: "Model de a merge. Evaluarea sa detectează patologii. Mers ataxic (beat, cerebel), Parkinsonian (pași mici, festinant), Antalgic (șchiopătat de durere), Hemiplegic (cositor).",
    nanda: {
        codeES: "00088",
        codeRO: "00088",
        labelES: "Deterioro de la ambulación",
        labelRO: "Amculație afectată"
    }
}, {
    id: "v_m_mareo",
    termES: "Mareo",
    termRO: "Amețeală",
    categoryColor: "bg-gray-50",
    defES: "Término inespecífico que puede referirse a vértigo (giro de objetos), presíncope (desvanecimiento), inestabilidad o aturdimiento. Requiere anamnesis detallada.",
    defRO: "Termen nespecific care se poate referi la vertij (rotirea obiectelor), presincopă (leșin), instabilitate sau buimăceală. Necesită anamneză detaliată.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_m_masaje_cardiaco",
    termES: "Masaje Cardíaco (Compresiones)",
    termRO: "Masaj Cardiac (Compresiuni)",
    categoryColor: "bg-red-50",
    defES: "Compresiones torácicas rítmicas aplicadas sobre el esternón durante la RCP para bombear sangre artificialmente a órganos vitales en caso de parada cardíaca. Frecuencia: 100-120/min.",
    defRO: "Compresiuni toracice ritmice aplicate pe stern în timpul RCP pentru a pompa artificial sânge către organele vitale în caz de stop cardiac. Frecvență: 100-120/min.",
    nanda: null
}, {
    id: "v_m_mastectomia",
    termES: "Mastectomía",
    termRO: "Mastectomie",
    categoryColor: "bg-pink-50",
    defES: "Extirpación quirúrgica de la mama, generalmente para tratar el cáncer. Radical (incluye músculos/ganglios), Simple o Ahorradora de piel. Impacto físico y psicológico mayor.",
    defRO: "Extirparea chirurgicală a sânului, de obicei pentru a trata cancerul. Radicală (include mușchi/ganglioni), Simplă sau Conservatoare de piele. Impact fizic și psihologic major.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_m_masticacion",
    termES: "Masticación",
    termRO: "Masticație",
    categoryColor: "bg-orange-50",
    defES: "Primera fase de la digestión. Trituración mecánica de los alimentos por los dientes y mezcla con saliva para formar el bolo alimenticio. Dificultad requiere dieta triturada.",
    defRO: "Prima fază a digestiei. Zdrobirea mecanică a alimentelor de către dinți și amestecarea cu salivă pentru a forma bolul alimentar. Dificultatea necesită dietă pasată.",
    nanda: {
        codeES: "00048",
        codeRO: "00048",
        labelES: "Deterioro de la dentición",
        labelRO: "Dentiție afectată"
    }
}, {
    id: "v_m_mastitis",
    termES: "Mastitis",
    termRO: "Mastită",
    categoryColor: "bg-pink-50",
    defES: "Infección e inflamación del tejido mamario, común durante la lactancia (mastitis puerperal) por obstrucción de conductos y entrada de bacterias. Dolor, rojez, fiebre.",
    defRO: "Infecție și inflamație a țesutului mamar, comună în timpul alăptării (mastită puerperală) prin obstrucția canalelor și intrarea bacteriilor. Durere, roșeață, febră.",
    nanda: {
        codeES: "00104",
        codeRO: "00104",
        labelES: "Lactancia materna ineficaz",
        labelRO: "Alăptare ineficientă"
    }
}, {
    id: "v_m_mastoides",
    termES: "Mastoides (Apófisis)",
    termRO: "Mastoidă (Apofiză)",
    categoryColor: "bg-stone-50",
    defES: "Prominencia ósea del hueso temporal situada detrás de la oreja. Contiene celdillas aéreas. Su infección (mastoiditis) es una complicación grave de la otitis media.",
    defRO: "Proeminență osoasă a osului temporal situată în spatele urechii. Conține celule aeriene. Infecția sa (mastoidită) este o complicație gravă a otitei medii.",
    nanda: null
}, {
    id: "v_m_meato",
    termES: "Meato Urinario",
    termRO: "Meat Urinar",
    categoryColor: "bg-yellow-50",
    defES: "Orificio externo de la uretra por donde sale la orina. Su higiene es vital antes del sondaje vesical para prevenir infecciones (ITU).",
    defRO: "Orificiul extern al uretrei pe unde iese urina. Igiena sa este vitală înainte de sondajul vezical pentru a preveni infecțiile (ITU).",
    nanda: null
}, {
    id: "v_m_mecanismo_defensa",
    termES: "Mecanismo de Defensa",
    termRO: "Mecanism de Apărare",
    categoryColor: "bg-purple-50",
    defES: "Estrategia psicológica inconsciente para protegerse de la ansiedad o conflictos emocionales. Negación, Proyección, Regresión, Racionalización. Pueden ser adaptativos o patológicos.",
    defRO: "Strategie psihologică inconștientă pentru protecția împotriva anxietății sau conflictelor emoționale. Negare, Proiecție, Regresie, Raționalizare. Pot fi adaptative sau patologice.",
    nanda: {
        codeES: "00071",
        codeRO: "00071",
        labelES: "Afrontamiento defensivo",
        labelRO: "Coping defensiv"
    }
}, {
    id: "v_m_meconio",
    termES: "Meconio",
    termRO: "Meconiu",
    categoryColor: "bg-green-50",
    defES: "Primera deposición del recién nacido (primeras 24-48h). Sustancia viscosa, pegajosa y de color negro-verdoso. Su expulsión intrauterina (líquido teñido) indica estrés fetal.",
    defRO: "Primul scaun al nou-născutului (primele 24-48h). Substanță vâscoasă, lipicioasă și de culoare negru-verzui. Expulzia sa intrauterină (lichid colorat) indică stres fetal.",
    nanda: null
}, {
    id: "v_m_mediastino",
    termES: "Mediastino",
    termRO: "Mediastin",
    categoryColor: "bg-red-50",
    defES: "Espacio central de la cavidad torácica, entre los dos pulmones. Contiene el corazón, grandes vasos, tráquea, esófago y timo. Tumores o infecciones aquí son graves.",
    defRO: "Spațiul central al cavității toracice, între cei doi plămâni. Conține inima, vasele mari, traheea, esofagul și timusul. Tumorile sau infecțiile aici sunt grave.",
    nanda: null
}, {
    id: "v_m_medicamento",
    termES: "Medicamento (Fármaco)",
    termRO: "Medicament (Farmac)",
    categoryColor: "bg-teal-50",
    defES: 'Sustancia utilizada para prevenir, diagnosticar, tratar o curar enfermedades. Requiere administración segura ("5 correctos"). Genérico vs Comercial.',
    defRO: 'Substanță utilizată pentru a preveni, diagnostica, trata sau vindeca boli. Necesită administrare sigură ("cele 5 reguli corecte"). Generic vs Comercial.',
    nanda: null
}, {
    id: "v_m_medula_osea",
    termES: "Médula Ósea",
    termRO: "Măduvă Osoasă",
    categoryColor: "bg-red-50",
    defES: "Tejido blando en el interior de los huesos largos y planos donde se produce la hematopoyesis (células sanguíneas). El trasplante de médula se usa en leucemias.",
    defRO: "Țesut moale în interiorul oaselor lungi și plate unde are loc hematopoieza (celule sanguine). Transplantul de măduvă se folosește în leucemii.",
    nanda: null
}, {
    id: "v_m_medula_espinal",
    termES: "Médula Espinal",
    termRO: "Măduva Spinării",
    categoryColor: "bg-indigo-50",
    defES: "Cordón de tejido nervioso que se extiende desde el bulbo raquídeo hasta la zona lumbar, dentro del canal vertebral. Transmite impulsos entre el cerebro y el cuerpo. Lesión = parálisis.",
    defRO: "Cordon de țesut nervos care se extinde de la bulbul rahidian până în zona lombară, în interiorul canalului vertebral. Transmite impulsuri între creier și corp. Leziune = paralizie.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_m_megacolon",
    termES: "Megacolon",
    termRO: "Megacolon",
    categoryColor: "bg-orange-50",
    defES: "Dilatación masiva anormal del colon. Congénito (Hirschsprung) o Adquirido (Tóxico en Colitis Ulcerosa). Riesgo inminente de perforación y sepsis.",
    defRO: "Dilatare masivă anormală a colonului. Congenital (Hirschsprung) sau Dobândit (Toxic în Colită Ulcerativă). Risc iminent de perforație și sepsis.",
    nanda: {
        codeES: "00011",
        codeRO: "00011",
        labelES: "Estreñimiento",
        labelRO: "Constipație"
    }
}, {
    id: "v_m_melanina",
    termES: "Melanina",
    termRO: "Melanină",
    categoryColor: "bg-stone-50",
    defES: "Pigmento oscuro producido por los melanocitos que da color a la piel, pelo e iris. Protege el ADN celular de la radiación ultravioleta (UV). Ausente en albinismo.",
    defRO: "Pigment închis produs de melanocite care dă culoare pielii, părului și irisului. Protejează ADN-ul celular de radiațiile ultraviolete (UV). Absent în albinism.",
    nanda: null
}, {
    id: "v_m_melanoma",
    termES: "Melanoma",
    termRO: "Melanom",
    categoryColor: "bg-stone-50",
    defES: "Cáncer de piel más agresivo y mortal, derivado de los melanocitos. Regla ABCDE: Asimetría, Bordes irregulares, Color variado, Diámetro >6mm, Evolución. Metástasis rápida.",
    defRO: "Cancer de piele cel mai agresiv și mortal, derivat din melanocite. Regula ABCDE: Asimetrie, Margini neregulate, Culoare variată, Diametru >6mm, Evoluție. Metastaze rapide.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_m_melena",
    termES: "Melena",
    termRO: "Melenă",
    categoryColor: "bg-stone-50",
    defES: "Heces negras, alquitranadas y fétidas causadas por la presencia de sangre digerida. Indica hemorragia digestiva alta (estómago, duodeno) de al menos 50-60 ml.",
    defRO: "Scaune negre, ca păcura și fetide cauzate de prezența sângelui digerat. Indică hemoragie digestivă superioară (stomac, duoden) de cel puțin 50-60 ml.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_m_membrana",
    termES: "Membrana",
    termRO: "Membrană",
    categoryColor: "bg-green-50",
    defES: "Capa fina de tejido que recubre superficies o divide espacios. Membrana Celular (fosfolípidos), Membrana Mucosa (reviste tractos), Membrana Timpánica (oído).",
    defRO: "Strat subțire de țesut care acoperă suprafețe sau împarte spații. Membrană Celulară (fosfolipide), Membrană Mucoasă (căptușește tracturi), Membrană Timpanică (ureche).",
    nanda: null
}, {
    id: "v_m_memoria",
    termES: "Memoria",
    termRO: "Memorie",
    categoryColor: "bg-purple-50",
    defES: "Capacidad mental para codificar, almacenar y recuperar información. Corto plazo vs Largo plazo. Su deterioro es el síntoma cardinal de la demencia (Alzheimer).",
    defRO: "Capacitate mentală de a codifica, stoca și recupera informații. Termen scurt vs Termen lung. Deteriorarea sa este simptomul cardinal al demenței (Alzheimer).",
    nanda: {
        codeES: "00131",
        codeRO: "00131",
        labelES: "Deterioro de la memoria",
        labelRO: "Memorie afectată"
    }
}, {
    id: "v_m_menarquia",
    termES: "Menarquia",
    termRO: "Menarhă",
    categoryColor: "bg-pink-50",
    defES: "Primera menstruación de una mujer, marcando el inicio de la capacidad reproductiva. Ocurre habitualmente entre los 10-15 años (pubertad).",
    defRO: "Prima menstruație a unei femei, marcând începutul capacității reproductive. Apare de obicei între 10-15 ani (pubertate).",
    nanda: null
}, {
    id: "v_m_meninges",
    termES: "Meninges",
    termRO: "Meninge",
    categoryColor: "bg-stone-50",
    defES: "Tres membranas protectoras que envuelven el cerebro y la médula espinal: Duramadre (externa), Aracnoides (media, LCR) y Piamadre (interna).",
    defRO: "Trei membrane protectoare care învelesc creierul și măduva spinării: Dura mater (externă), Arahnoidă (medie, LCR) și Pia mater (internă).",
    nanda: null
}, {
    id: "v_m_meningitis",
    termES: "Meningitis",
    termRO: "Meningită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de las meninges. Viral (leve) o Bacteriana (grave, Neisseria meningitidis). Triada: fiebre, rigidez de nuca y cefalea. Petequias indican sepsis meningocócica.",
    defRO: "Inflamația meningelor. Virală (ușoară) sau Bacteriană (gravă, Neisseria meningitidis). Triadă: febră, rigiditate a cefei și cefalee. Peteșiile indică sepsis meningococic.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_m_menisco",
    termES: "Menisco",
    termRO: "Menisc",
    categoryColor: "bg-stone-50",
    defES: "Cartílago en forma de C en la rodilla (interno y externo) que actúa como amortiguador y estabilizador entre el fémur y la tibia. Su rotura es una lesión deportiva común.",
    defRO: "Cartilaj în formă de C în genunchi (intern și extern) care acționează ca amortizor și stabilizator între femur și tibie. Ruptura sa este o leziune sportivă comună.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_m_menopausia",
    termES: "Menopausia",
    termRO: "Menopauză",
    categoryColor: "bg-pink-50",
    defES: "Cese permanente de la menstruación (diagnóstico tras 12 meses de amenorrea) debido a la pérdida de función ovárica y caída de estrógenos. Edad media: 51 años.",
    defRO: "Încetarea permanentă a menstruației (diagnostic după 12 luni de amenoree) datorită pierderii funcției ovariene și scăderii estrogenilor. Vârsta medie: 51 ani.",
    nanda: null
}, {
    id: "v_m_menorragia",
    termES: "Menorragia",
    termRO: "Menoragie",
    categoryColor: "bg-red-50",
    defES: "Menstruación excesivamente abundante (>80 ml) o prolongada (>7 días). Causas: miomas, pólipos, trastornos de coagulación. Causa frecuente de anemia ferropénica.",
    defRO: "Menstruație excesiv de abundentă (>80 ml) sau prelungită (>7 zile). Cauze: mioame, polipi, tulburări de coagulare. Cauză frecventă de anemie feriprivă.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_m_metabolismo",
    termES: "Metabolismo",
    termRO: "Metabolism",
    categoryColor: "bg-green-50",
    defES: "Conjunto de reacciones químicas en el organismo para mantener la vida. Anabolismo (construcción) y Catabolismo (degradación/energía). Tasa Metabólica Basal: energía mínima en reposo.",
    defRO: "Ansamblu de reacții chimice în organism pentru a menține viața. Anabolism (construcție) și Catabolism (degradare/energie). Rata Metabolică Bazală: energie minimă în repaus.",
    nanda: null
}, {
    id: "v_m_metastasis",
    termES: "Metástasis",
    termRO: "Metastază",
    categoryColor: "bg-stone-50",
    defES: "Diseminación de células cancerosas desde el tumor primario a órganos distantes (hígado, pulmón, hueso, cerebro) a través de la sangre o linfa. Define el cáncer estadio IV.",
    defRO: "Răspândirea celulelor canceroase de la tumora primară la organe îndepărtate (ficat, plămân, os, creier) prin sânge sau limfă. Definește cancerul stadiul IV.",
    nanda: null
}, {
    id: "v_m_metadona",
    termES: "Metadona",
    termRO: "Metadonă",
    categoryColor: "bg-teal-50",
    defES: "Opioide sintético de larga duración utilizado como analgésico potente y en programas de deshabituación de heroína (terapia sustitutiva) para evitar el síndrome de abstinencia.",
    defRO: "Opioid sintetic cu durată lungă utilizat ca analgezic puternic și în programele de dezobișnuire de heroină (terapie de substituție) pentru a evita sindromul de sevraj.",
    nanda: null
}, {
    id: "v_m_meteorismo",
    termES: "Meteorismo (Flatulencia)",
    termRO: "Meteorism (Flatulență)",
    categoryColor: "bg-orange-50",
    defES: "Acumulación excesiva de gases en el tracto gastrointestinal, causando distensión abdominal y dolor. Causas: aerofagia, alimentos fermentables, intolerancias.",
    defRO: "Acumulare excesivă de gaze în tractul gastrointestinal, cauzând distensie abdominală și durere. Cauze: aerofagie, alimente fermentabile, intoleranțe.",
    nanda: null
}, {
    id: "v_m_miccion",
    termES: "Micción",
    termRO: "Micțiune",
    categoryColor: "bg-yellow-50",
    defES: "Acto voluntario de vaciar la vejiga urinaria. Requiere coordinación entre el músculo detrusor (contrae) y los esfínteres (relajan). Disuria (dolor), Poliuria (mucho), Oliguria (poco).",
    defRO: "Act voluntar de golire a vezicii urinare. Necesită coordonare între mușchiul detrusor (contractă) și sfinctere (relaxează). Disurie (durere), Poliurie (mult), Oligurie (puțin).",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_m_micosis",
    termES: "Micosis",
    termRO: "Micoză",
    categoryColor: "bg-pink-50",
    defES: "Infección causada por hongos. Superficial (piel/uñas: tiña, pie de atleta) o Sistémica (órganos internos: aspergilosis, candidiasis invasiva). Requiere antifúngicos.",
    defRO: "Infecție cauzată de ciuperci. Superficială (piele/unghii: pecingine, picior de atlet) sau Sistemică (organe interne: aspergiloză, candidoză invazivă). Necesită antifungice.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_m_miedo",
    termES: "Miedo",
    termRO: "Frică (Teamă)",
    categoryColor: "bg-purple-50",
    defES: "Respuesta emocional a una amenaza inmediata, real y reconocible (a diferencia de la ansiedad, que es inespecífica). Activa el sistema simpático (lucha o huida).",
    defRO: "Răspuns emoțional la o amenințare imediată, reală și recognoscibilă (spre deosebire de anxietate, care este nespecifică). Activează sistemul simpatic (luptă sau fugi).",
    nanda: {
        codeES: "00148",
        codeRO: "00148",
        labelES: "Temor",
        labelRO: "Teamă"
    }
}, {
    id: "v_m_mielina",
    termES: "Mielina",
    termRO: "Mielină",
    categoryColor: "bg-indigo-50",
    defES: "Sustancia grasa que recubre los axones neuronales, actuando como aislante eléctrico para acelerar la transmisión del impulso nervioso. Su pérdida causa Esclerosis Múltiple.",
    defRO: "Substanță grasă care acoperă axonii neuronali, acționând ca izolator electric pentru a accelera transmiterea impulsului nervos. Pierderea sa cauzează Scleroză Multiplă.",
    nanda: null
}, {
    id: "v_m_miocardio",
    termES: "Miocardio",
    termRO: "Miocard",
    categoryColor: "bg-red-50",
    defES: "Capa muscular media del corazón, responsable de su acción de bombeo. Formada por cardiomiocitos. Su daño por isquemia es el infarto. Su inflamación es la miocarditis.",
    defRO: "Strat muscular mijlociu al inimii, responsabil de acțiunea sa de pompare. Format din cardiomiocite. Lezarea sa prin ischemie este infarctul. Inflamația sa este miocardita.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_m_miopia",
    termES: "Miopía",
    termRO: "Miopie",
    categoryColor: "bg-blue-50",
    defES: "Error de refracción donde los objetos lejanos se ven borrosos porque la imagen se enfoca delante de la retina. Se corrige con lentes cóncavas (divergentes).",
    defRO: "Eroare de refracție în care obiectele îndepărtate se văd încețoșat deoarece imaginea se focalizează în fața retinei. Se corectează cu lentile concave (divergente).",
    nanda: null
}, {
    id: "v_m_miosis",
    termES: "Miosis",
    termRO: "Mioză",
    categoryColor: "bg-green-50",
    defES: "Contracción de la pupila (<2 mm). Causas: luz intensa, opioides (signo de sobredosis), colirios mióticos (pilocarpina), lesión pontina. Opuesto a midriasis.",
    defRO: "Contracția pupilei (<2 mm). Cauze: lumină intensă, opioide (semn de supradozaj), picături miotice (pilocarpină), leziune pontină. Opusul midriazei.",
    nanda: null
}, {
    id: "v_m_mitosis",
    termES: "Mitosis",
    termRO: "Mitoză",
    categoryColor: "bg-green-50",
    defES: "Proceso de división celular asexual donde una célula madre se divide en dos células hijas genéticamente idénticas. Esencial para el crecimiento y reparación tisular.",
    defRO: "Proces de diviziune celulară asexuală în care o celulă mamă se divide în două celule fiice genetic identice. Esențial pentru creșterea și repararea tisulară.",
    nanda: null
}, {
    id: "v_m_mitral",
    termES: "Mitral (Válvula)",
    termRO: "Mitrală (Valva)",
    categoryColor: "bg-red-50",
    defES: "Válvula cardíaca bicúspide situada entre la aurícula y el ventrículo izquierdo. Previene el reflujo de sangre durante la sístole. Patologías: estenosis, insuficiencia (regurgitación).",
    defRO: "Valvă cardiacă bicuspidă situată între atriul și ventriculul stâng. Previne refluxul sângelui în timpul sistolei. Patologii: stenoză, insuficiență (regurgitare).",
    nanda: null
}, {
    id: "v_m_monitorizacion",
    termES: "Monitorización",
    termRO: "Monitorizare",
    categoryColor: "bg-stone-50",
    defES: "Observación y registro continuo o intermitente de parámetros fisiológicos (signos vitales, ECG, saturación) para detectar cambios en el estado del paciente. Clave en UCI/Quirófano.",
    defRO: "Observarea și înregistrarea continuă sau intermitentă a parametrilor fiziologici (semne vitale, EKG, saturație) pentru a detecta schimbări în starea pacientului. Cheie în ATI/Sală de operație.",
    nanda: null
}, {
    id: "v_m_morfina",
    termES: "Morfina",
    termRO: "Morfină",
    categoryColor: "bg-purple-50",
    defES: "Opioide potente derivado del opio, estándar de oro para el tratamiento del dolor severo (agudo o crónico). Depresor del SNC. Efectos: analgesia, sedación, depresión respiratoria, estreñimiento.",
    defRO: "Opioid puternic derivat din opiu, standardul de aur pentru tratamentul durerii severe (acute sau cronice). Depresor al SNC. Efecte: analgezie, sedare, depresie respiratorie, constipație.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_m_mortalidad",
    termES: "Mortalidad",
    termRO: "Mortalitate",
    categoryColor: "bg-stone-50",
    defES: "Tasa de muertes en una población durante un tiempo determinado. Mortalidad infantil: muertes <1 año por 1000 nacidos vivos. Indicador sanitario clave.",
    defRO: "Rata deceselor într-o populație într-un timp determinat. Mortalitate infantilă: decese <1 an la 1000 de născuți vii. Indicator sanitar cheie.",
    nanda: null
}, {
    id: "v_m_muguet",
    termES: "Muguet (Candidiasis Oral)",
    termRO: "Muguet (Candidoză Orală)",
    categoryColor: "bg-pink-50",
    defES: 'Infección de la mucosa bucal por Candida albicans. Placas blancas cremosas ("requesón") que al raspar sangran. Común en bebés, ancianos, uso de inhaladores o inmunodeprimidos.',
    defRO: 'Infecția mucoasei bucale cu Candida albicans. Plăci albe cremoase ("brânză de vaci") care sângerează la răzuire. Comună la bebeluși, vârstnici, utilizarea inhalatoarelor sau imunodeprimați.',
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_m_muerte_cerebral",
    termES: "Muerte Cerebral (Encefálica)",
    termRO: "Moarte Cerebrală (Encefalică)",
    categoryColor: "bg-stone-50",
    defES: "Cese irreversible de todas las funciones del encéfalo, incluido el tronco cerebral. Legalmente equivale a la muerte del individuo. Condición para la donación de órganos.",
    defRO: "Încetarea ireversibilă a tuturor funcțiilor encefalului, inclusiv trunchiul cerebral. Legal echivalează cu moartea individului. Condiție pentru donarea de organe.",
    nanda: null
}, {
    id: "v_m_musculo",
    termES: "Músculo",
    termRO: "Mușchi",
    categoryColor: "bg-red-50",
    defES: "Tejido contráctil. Tres tipos: Esquelético (voluntario, movimiento), Liso (involuntario, vísceras/vasos) y Cardíaco (involuntario, corazón). Atrofia por desuso.",
    defRO: "Țesut contractil. Trei tipuri: Scheletic (voluntar, mișcare), Neted (involuntar, viscere/vase) și Cardiac (involuntar, inimă). Atrofie prin neutilizare.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_m_mutacion",
    termES: "Mutación",
    termRO: "Mutație",
    categoryColor: "bg-green-50",
    defES: "Cambio permanente en la secuencia de ADN de un gen. Puede ser heredada (germinal) o adquirida (somática). Base de enfermedades genéticas y cáncer, pero también de la evolución.",
    defRO: "Schimbare permanentă în secvența de ADN a unei gene. Poate fi moștenită (germinală) sau dobândită (somatică). Baza bolilor genetice și cancerului, dar și a evoluției.",
    nanda: null
}, {
    id: "v_m_mutismo",
    termES: "Mutismo",
    termRO: "Mutism",
    categoryColor: "bg-purple-50",
    defES: "Ausencia del habla sin causa física (laringe/lengua intactas). Mutismo selectivo (ansiedad, niños) o Mutismo acinético (daño cerebral frontal).",
    defRO: "Absența vorbirii fără cauză fizică (laringe/limbă intacte). Mutism selectiv (anxietate, copii) sau Mutism akinetic (leziune cerebrală frontală).",
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_n_nacimiento",
    termES: "Nacimiento",
    termRO: "Naștere",
    categoryColor: "bg-green-50",
    defES: "Proceso fisiológico de expulsión o extracción completa del feto y sus anexos del cuerpo materno una vez alcanzada la viabilidad (generalmente >22 semanas). Marca el inicio de la vida extrauterina.",
    defRO: "Proces fiziologic de expulzare sau extragere completă a fătului și anexelor sale din corpul matern odată atinsă viabilitatea (de obicei >22 săptămâni). Marchează începutul vieții extrauterine.",
    nanda: {
        codeES: "00208",
        codeRO: "00208",
        labelES: "Disposición para mejorar el proceso de maternidad",
        labelRO: "Dispoziție pentru îmbunătățirea procesului de maternitate"
    }
}, {
    id: "v_n_narcotico",
    termES: "Narcótico (Opioide)",
    termRO: "Narcotic (Opioid)",
    categoryColor: "bg-purple-50",
    defES: "Sustancia farmacológica potente derivada del opio o sintética que actúa sobre el sistema nervioso central para aliviar el dolor severo (analgesia), causar sedación y, potencialmente, estupor o sueño. Riesgo de dependencia y depresión respiratoria.",
    defRO: "Substanță farmacologică puternică derivată din opiu sau sintetică care acționează asupra sistemului nervos central pentru a calma durerea severă (analgezie), a provoca sedare și, potențial, stupoare sau somn. Risc de dependență și depresie respiratorie.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_n_nariz",
    termES: "Nariz",
    termRO: "Nas",
    categoryColor: "bg-blue-50",
    defES: "Órgano sensorial del olfato y vía de entrada principal del sistema respiratorio. Filtra, calienta y humidifica el aire inspirado. Estructura ósea y cartilaginosa revestida de mucosa.",
    defRO: "Organ senzorial al mirosului și principala cale de intrare a sistemului respirator. Filtrează, încălzește și umidifică aerul inspirat. Structură osoasă și cartilaginoasă căptușită cu mucoasă.",
    nanda: null
}, {
    id: "v_n_nasofaringe",
    termES: "Nasofaringe (Cavum)",
    termRO: "Nazofaringe",
    categoryColor: "bg-pink-50",
    defES: "Parte superior de la faringe situada detrás de las fosas nasales y por encima del paladar blando. Contiene las adenoides y la apertura de las trompas de Eustaquio.",
    defRO: "Partea superioară a faringelui situată în spatele foselor nazale și deasupra palatului moale. Conține adenoidele și deschiderea trompelor lui Eustachio.",
    nanda: null
}, {
    id: "v_n_nasogastrica",
    termES: "Nasogástrica (Sonda)",
    termRO: "Nazogastrică (Sondă)",
    categoryColor: "bg-teal-50",
    defES: "Tubo flexible insertado a través de la nariz, bajando por el esófago hasta el estómago. Usos: alimentación enteral (gavage), administración de fármacos o descompresión gástrica (succión).",
    defRO: "Tub flexibil introdus prin nas, coborând prin esofag până în stomac. Utilizări: alimentație enterală (gavaj), administrarea medicamentelor sau decompresie gastrică (aspirație).",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_n_nauseas",
    termES: "Náuseas",
    termRO: "Greață",
    categoryColor: "bg-orange-50",
    defES: "Sensación subjetiva desagradable en la garganta y epigastrio que precede inminentemente al vómito. Síntoma común en embarazo, quimioterapia, infecciones o postoperatorio.",
    defRO: "Senzație subiectivă neplăcută în gât și epigastru care precede iminent vărsăturile. Simptom comun în sarcină, chimioterapie, infecții sau postoperator.",
    nanda: {
        codeES: "00134",
        codeRO: "00134",
        labelES: "Náuseas",
        labelRO: "Greață"
    }
}, {
    id: "v_n_nebulizador",
    termES: "Nebulizador",
    termRO: "Nebulizator",
    categoryColor: "bg-sky-50",
    defES: "Dispositivo médico que convierte un medicamento líquido en una niebla fina (aerosol) para ser inhalado profundamente en los pulmones a través de una mascarilla o boquilla. Usado en asma y EPOC.",
    defRO: "Dispozitiv medical care transformă un medicament lichid într-o ceață fină (aerosol) pentru a fi inhalat profund în plămâni printr-o mască sau piesă bucală. Folosit în astm și BPOC.",
    nanda: null
}, {
    id: "v_n_necropsia",
    termES: "Necropsia (Autopsia)",
    termRO: "Necropsie (Autopsie)",
    categoryColor: "bg-gray-50",
    defES: "Examen post mortem sistemático del cuerpo, órganos y tejidos para determinar la causa de la muerte o la extensión de cambios patológicos. Puede ser clínica o médico-legal.",
    defRO: "Examinare post-mortem sistematică a corpului, organelor și țesuturilor pentru a determina cauza morții sau extinderea modificărilor patologice. Poate fi clinică sau medico-legală.",
    nanda: null
}, {
    id: "v_n_necrosis",
    termES: "Necrosis",
    termRO: "Necroză",
    categoryColor: "bg-stone-50",
    defES: "Muerte patológica de células o tejido en un organismo vivo debido a lesión, isquemia, infección o tóxicos. Es irreversible y desencadena inflamación circundante (a diferencia de la apoptosis).",
    defRO: "Moarte patologică a celulelor sau țesutului într-un organism viu din cauza leziunii, ischemiei, infecției sau toxicelor. Este ireversibilă și declanșează inflamație în jur (spre deosebire de apoptoză).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_n_neonato",
    termES: "Neonato (Recién Nacido)",
    termRO: "Neonat (Nou-născut)",
    categoryColor: "bg-green-50",
    defES: "Bebé desde el nacimiento hasta los 28 días de vida. Periodo crítico de adaptación fisiológica (respiratoria, circulatoria, termorregulación). Pretérmino (<37 semanas) o A término.",
    defRO: "Bebeluș de la naștere până la 28 de zile de viață. Perioadă critică de adaptare fiziologică (respiratorie, circulatorie, termoreglare). Prematur (<37 săptămâni) sau La termen.",
    nanda: {
        codeES: "00107",
        codeRO: "00107",
        labelES: "Patrón de alimentación ineficaz del lactante",
        labelRO: "Model de alimentație ineficient al sugarului"
    }
}, {
    id: "v_n_neoplasia",
    termES: "Neoplasia (Tumor)",
    termRO: "Neoplazie (Tumoare)",
    categoryColor: "bg-red-50",
    defES: "Masa anormal de tejido producida por un crecimiento celular descontrolado y autónomo. Puede ser benigna (no invade) o maligna (cáncer, invade y metastatiza).",
    defRO: "Masă anormală de țesut produsă printr-o creștere celulară necontrolată și autonomă. Poate fi benignă (nu invadează) sau malignă (cancer, invadează și metastazează).",
    nanda: null
}, {
    id: "v_n_nefrona",
    termES: "Nefrona",
    termRO: "Nefron",
    categoryColor: "bg-blue-50",
    defES: "Unidad funcional microscópica del riñón (aprox. 1 millón por riñón). Consta de glomérulo (filtra) y túbulo (reabsorbe/secreta) para formar la orina y regular la homeostasis.",
    defRO: "Unitate funcțională microscopică a rinichiului (aprox. 1 milion per rinichi). Constă din glomerul (filtrează) și tubul (reabsoarbe/secretă) pentru a forma urina și a regla homeostazia.",
    nanda: null
}, {
    id: "v_n_nefrolitiasis",
    termES: "Nefrolitiasis (Cálculos Renales)",
    termRO: "Nefrolitiază (Calculi Renali)",
    categoryColor: "bg-yellow-50",
    defES: "Presencia de cálculos (piedras) en el riñón formados por la cristalización de minerales (calcio, oxalato, ácido úrico). Causa cólico nefrítico si obstruye el flujo urinario.",
    defRO: "Prezența calculilor (pietre) în rinichi formați prin cristalizarea mineralelor (calciu, oxalat, acid uric). Cauzează colică nefritică dacă obstrucționează fluxul urinar.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_n_nervio",
    termES: "Nervio",
    termRO: "Nerv",
    categoryColor: "bg-indigo-50",
    defES: "Haz de fibras nerviosas (axones) envueltas en tejido conectivo que transmiten impulsos eléctricos entre el sistema nervioso central y el resto del cuerpo (sensitivos, motores o mixtos).",
    defRO: "Fascicul de fibre nervoase (axoni) învelite în țesut conjunctiv care transmit impulsuri electrice între sistemul nervos central și restul corpului (senzitive, motorii sau mixte).",
    nanda: null
}, {
    id: "v_n_neumocito",
    termES: "Neumocito",
    termRO: "Pneumocit",
    categoryColor: "bg-sky-50",
    defES: "Célula epitelial de los alvéolos pulmonares. Tipo I (intercambio gaseoso, muy planas) y Tipo II (produce surfactante pulmonar para evitar el colapso alveolar).",
    defRO: "Celulă epitelială a alveolelor pulmonare. Tip I (schimb gazos, foarte plate) și Tip II (produce surfactant pulmonar pentru a preveni colapsul alveolar).",
    nanda: null
}, {
    id: "v_n_neumonia",
    termES: "Neumonía",
    termRO: "Pneumonie",
    categoryColor: "bg-red-50",
    defES: "Infección aguda e inflamación del parénquima pulmonar (alvéolos) que se llenan de exudado o pus. Causa: bacterias (Neumococo), virus, hongos. Síntomas: tos, fiebre, disnea, dolor torácico.",
    defRO: "Infecție acută și inflamație a parenchimului pulmonar (alveole) care se umplu cu exsudat sau puroi. Cauză: bacterii (Pneumococ), virusuri, ciuperci. Simptome: tuse, febră, dispnee, durere toracică.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_n_neumotorax",
    termES: "Neumotórax",
    termRO: "Pneumotorax",
    categoryColor: "bg-red-50",
    defES: "Presencia de aire en el espacio pleural que provoca el colapso total o parcial del pulmón. Espontáneo o Traumático. A tensión: emergencia vital (desplaza mediastino).",
    defRO: "Prezența aerului în spațiul pleural care provoacă colapsul total sau parțial al plămânului. Spontan sau Traumatic. În tensiune: urgență vitală (deplasează mediastinul).",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_n_neuralgia",
    termES: "Neuralgia",
    termRO: "Nevralgie",
    categoryColor: "bg-purple-50",
    defES: 'Dolor agudo, intenso y punzante ("descarga eléctrica") a lo largo del trayecto de un nervio, sin signos visibles de inflamación cutánea. Ej. Neuralgia del Trigémino.',
    defRO: 'Durere acută, intensă și înțepătoare ("descărcare electrică") de-a lungul traiectului unui nerv, fără semne vizibile de inflamație cutanată. Ex. Nevralgie de Trigemen.',
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_n_neurologia",
    termES: "Neurología",
    termRO: "Neurologie",
    categoryColor: "bg-indigo-50",
    defES: "Especialidad médica que estudia la estructura, función y enfermedades del sistema nervioso central, periférico y autónomo (ej. ictus, epilepsia, parkinson).",
    defRO: "Specialitate medicală care studiază structura, funcția și bolile sistemului nervos central, periferic și autonom (ex. AVC, epilepsie, parkinson).",
    nanda: null
}, {
    id: "v_n_neurona",
    termES: "Neurona",
    termRO: "Neuron",
    categoryColor: "bg-indigo-50",
    defES: "Unidad funcional básica del sistema nervioso especializada en la excitabilidad y conductividad. Transmite información mediante señales eléctricas y químicas (sinapsis). No se divide (generalmente).",
    defRO: "Unitate funcțională de bază a sistemului nervos specializată în excitabilitate și conductivitate. Transmite informații prin semnale electrice și chimice (sinapse). Nu se divide (în general).",
    nanda: null
}, {
    id: "v_n_neuropatia",
    termES: "Neuropatía",
    termRO: "Neuropatie",
    categoryColor: "bg-stone-50",
    defES: "Daño o enfermedad de los nervios periféricos. Causa dolor (ardor, hormigueo), pérdida de sensibilidad o debilidad. Causa común: Diabetes (Pie diabético).",
    defRO: "Deteriorare sau boală a nervilor periferici. Cauzează durere (arsură, furnicături), pierderea sensibilității sau slăbiciune. Cauză comună: Diabet (Picior diabetic).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_n_neurotransmisor",
    termES: "Neurotransmisor",
    termRO: "Neurotransmițător",
    categoryColor: "bg-purple-50",
    defES: "Sustancia química liberada por una neurona en la sinapsis que transmite la señal a la siguiente célula (neurona, músculo). Ej. Serotonina, Dopamina, Acetilcolina.",
    defRO: "Substanță chimică eliberată de un neuron în sinapsă care transmite semnalul către celula următoare (neuron, mușchi). Ex. Serotonină, Dopamină, Acetilcolină.",
    nanda: null
}, {
    id: "v_n_neutrofilo",
    termES: "Neutrófilo",
    termRO: "Neutrofil",
    categoryColor: "bg-red-50",
    defES: "Leucocito granulocito más abundante (50-70%). Primera línea de defensa celular contra infecciones bacterianas agudas (fagocitosis). La neutropenia severa es riesgo vital.",
    defRO: "Leucocit granulocit cel mai abundent (50-70%). Prima linie de apărare celulară împotriva infecțiilor bacteriene acute (fagocitoză). Neutropenia severă este risc vital.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_n_nistagmo",
    termES: "Nistagmo",
    termRO: "Nistagmus",
    categoryColor: "bg-blue-50",
    defES: "Movimiento involuntario, rítmico y rápido de los ojos (horizontal, vertical o rotatorio). Puede ser fisiológico (vestibular) o patológico (lesión cerebelosa, toxicidad).",
    defRO: "Mișcare involuntară, ritmică și rapidă a ochilor (orizontală, verticală sau rotatorie). Poate fi fiziologic (vestibular) sau patologic (leziune cerebeloasă, toxicitate).",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_n_nitroglicerina",
    termES: "Nitroglicerina",
    termRO: "Nitroglicerină",
    categoryColor: "bg-red-50",
    defES: "Vasodilatador coronario potente (nitrato) utilizado para tratar la angina de pecho y el infarto agudo. Reduce la precarga y el consumo de oxígeno cardíaco. Vía sublingual o IV.",
    defRO: "Vasodilatator coronarian puternic (nitrat) utilizat pentru tratarea anginei pectorale și infarctului acut. Reduce presarcina și consumul de oxigen cardiac. Cale sublinguală sau IV.",
    nanda: {
        codeES: "00239",
        codeRO: "00239",
        labelES: "Riesgo de deterioro de la función cardiovascular",
        labelRO: "Risc de afectare a funcției cardiovasculare"
    }
}, {
    id: "v_n_nociceptor",
    termES: "Nociceptor",
    termRO: "Nociceptor",
    categoryColor: "bg-purple-50",
    defES: "Receptor sensorial especializado en detectar estímulos dañinos o potencialmente dañinos (térmicos, mecánicos, químicos) y transmitir la señal de dolor al SNC.",
    defRO: "Receptor senzorial specializat în detectarea stimulilor dăunători sau potențial dăunători (termici, mecanici, chimici) și transmiterea semnalului de durere către SNC.",
    nanda: null
}, {
    id: "v_n_nocturia",
    termES: "Nocturia (Nicturia)",
    termRO: "Nocturie (Nicturie)",
    categoryColor: "bg-yellow-50",
    defES: "Necesidad de despertarse una o más veces durante la noche para orinar. Causas: insuficiencia cardíaca (edemas), hiperplasia prostática, diabetes o ingesta de líquidos.",
    defRO: "Nevoia de a se trezi o dată sau de mai multe ori în timpul nopții pentru a urina. Cauze: insuficiență cardiacă (edeme), hiperplazie prostatică, diabet sau aport de lichide.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_n_nodulo",
    termES: "Nódulo",
    termRO: "Nodul",
    categoryColor: "bg-stone-50",
    defES: "Masa sólida, elevada y palpable en la piel o tejido subcutáneo, mayor que una pápula (>1 cm). También se aplica a masas en órganos (nódulo tiroideo, pulmonar).",
    defRO: "Masă solidă, ridicată și palpabilă în piele sau țesutul subcutanat, mai mare decât o papulă (>1 cm). Se aplică și maselor din organe (nodul tiroidian, pulmonar).",
    nanda: null
}, {
    id: "v_n_noradrenalina",
    termES: "Noradrenalina (Norepinefrina)",
    termRO: "Noradrenalină (Norepinefrină)",
    categoryColor: "bg-red-50",
    defES: "Catecolamina neurotransmisor y hormona. Potente vasoconstrictor que aumenta la presión arterial. Fármaco de primera elección en shock séptico o hipotensión severa.",
    defRO: "Catecolamină neurotransmițător și hormon. Vasoconstrictor puternic care crește tensiunea arterială. Medicament de primă alegere în șoc septic sau hipotensiune severă.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_n_nosocomial",
    termES: "Nosocomial",
    termRO: "Nosocomial",
    categoryColor: "bg-orange-50",
    defES: 'Relativo al hospital. Infección nosocomial: aquella adquirida durante la estancia hospitalaria (aparece >48h tras ingreso). Hoy se prefiere "Asociada a la Asistencia Sanitaria".',
    defRO: 'Referitor la spital. Infecție nosocomială: cea dobândită în timpul spitalizării (apare >48h după internare). Astăzi se preferă "Asociată Asistenței Medicale".',
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_n_nulipara",
    termES: "Nulípara",
    termRO: "Nulipară",
    categoryColor: "bg-pink-50",
    defES: "Mujer que nunca ha dado a luz a un feto viable (>20-22 semanas), independientemente de si ha estado embarazada (nuligesta) o ha tenido abortos.",
    defRO: "Femeie care nu a născut niciodată un făt viabil (>20-22 săptămâni), indiferent dacă a fost însărcinată (nuligestă) sau a avut avorturi.",
    nanda: null
}, {
    id: "v_n_nutricion",
    termES: "Nutrición",
    termRO: "Nutriție",
    categoryColor: "bg-green-50",
    defES: "Ciencia de los alimentos y su relación con la salud. Proceso de ingestión, digestión, absorción y metabolismo de nutrientes para el crecimiento y reparación. Clínica: Enteral/Parenteral.",
    defRO: "Știința alimentelor și relația lor cu sănătatea. Procesul de ingerare, digestie, absorbție și metabolism al nutrienților pentru creștere și reparație. Clinică: Enterală/Parenterală.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_n_nutricion_parenteral",
    termES: "Nutrición Parenteral (NPT)",
    termRO: "Nutriție Parenterală (NPT)",
    categoryColor: "bg-yellow-50",
    defES: "Administración de nutrientes (aminoácidos, glucosa, lípidos, electrolitos) directamente en el torrente sanguíneo (IV), evitando el tubo digestivo. Total (vía central) o Periférica.",
    defRO: "Administrarea nutrienților (aminoacizi, glucoză, lipide, electroliți) direct în torentul sanguin (IV), ocolind tubul digestiv. Totală (cale centrală) sau Periferică.",
    nanda: null
}, {
    id: "v_o_obesidad",
    termES: "Obesidad",
    termRO: "Obezitate",
    categoryColor: "bg-yellow-50",
    defES: "Enfermedad crónica caracterizada por un acúmulo excesivo de grasa corporal perjudicial para la salud. Definida por un IMC ≥ 30 kg/m². Factor de riesgo cardiovascular, diabetes y cáncer.",
    defRO: "Boală cronică caracterizată printr-o acumulare excesivă de grăsime corporală dăunătoare sănătății. Definită printr-un IMC ≥ 30 kg/m². Factor de risc cardiovascular, diabet și cancer.",
    nanda: {
        codeES: "00232",
        codeRO: "00232",
        labelES: "Obesidad",
        labelRO: "Obezitate"
    }
}, {
    id: "v_o_obito",
    termES: "Óbito (Fetal)",
    termRO: "Deces (Fetal)",
    categoryColor: "bg-gray-50",
    defES: "Muerte fetal intrauterina antes de la expulsión o extracción completa del cuerpo de la madre, a partir de una edad gestacional determinada (generalmente >22 semanas).",
    defRO: "Moarte fetală intrauterină înainte de expulzarea sau extragerea completă din corpul mamei, începând de la o anumită vârstă gestațională (de obicei >22 săptămâni).",
    nanda: {
        codeES: "00135",
        codeRO: "00135",
        labelES: "Duelo complicado",
        labelRO: "Doliu complicat"
    }
}, {
    id: "v_o_obsesion",
    termES: "Obsesión",
    termRO: "Obsesie",
    categoryColor: "bg-purple-50",
    defES: "Pensamiento, impulso o imagen recurrente y persistente que se experimenta como intrusiva y causa ansiedad o malestar importante (ej. contaminación, duda). Núcleo del TOC.",
    defRO: "Gând, impuls sau imagine recurentă și persistentă care este experimentată ca intruzivă și cauzează anxietate sau disconfort major (ex. contaminare, îndoială). Nucleul TOC.",
    nanda: {
        codeES: "00146",
        codeRO: "00146",
        labelES: "Ansiedad",
        labelRO: "Anxietate"
    }
}, {
    id: "v_o_obstetricia",
    termES: "Obstetricia",
    termRO: "Obstetrică",
    categoryColor: "bg-pink-50",
    defES: "Rama de la medicina que se ocupa del embarazo, parto y puerperio (postparto). Incluye el cuidado de la madre y el feto.",
    defRO: "Ramură a medicinei care se ocupă de sarcină, naștere și lăuzie (post-partum). Include îngrijirea mamei și a fătului.",
    nanda: null
}, {
    id: "v_o_obstruccion_intestinal",
    termES: "Obstrucción Intestinal",
    termRO: "Obstrucție Intestinală",
    categoryColor: "bg-red-50",
    defES: "Bloqueo que impide el paso del contenido intestinal. Puede ser mecánica (tumor, adherencias, hernia) o funcional (íleo paralítico). Causa distensión, vómitos, dolor y ausencia de gases/heces.",
    defRO: "Blocaj care împiedică trecerea conținutului intestinal. Poate fi mecanică (tumoare, aderențe, hernie) sau funcțională (ileus paralitic). Cauzează distensie, vărsături, durere și absența gazelor/scaunului.",
    nanda: {
        codeES: "00196",
        codeRO: "00196",
        labelES: "Disfunción de la motilidad gastrointestinal",
        labelRO: "Disfuncție a motilității gastrointestinale"
    }
}, {
    id: "v_o_obstruccion_via_aerea",
    termES: "Obstrucción Vía Aérea",
    termRO: "Obstrucție Cale Aeriană",
    categoryColor: "bg-red-50",
    defES: "Bloqueo del paso de aire hacia los pulmones. Parcial (ronquido, estridor) o Total (asfixia, silencio, signo universal de atragantamiento). Requiere maniobras inmediatas (Heimlich).",
    defRO: "Blocarea trecerii aerului spre plămâni. Parțială (sforăit, stridor) sau Totală (asfixie, tăcere, semn universal de înec). Necesită manevre imediate (Heimlich).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_o_occipital",
    termES: "Occipital",
    termRO: "Occipital",
    categoryColor: "bg-stone-50",
    defES: "1. Hueso: Parte posterior e inferior del cráneo que protege el lóbulo occipital y el cerebelo. 2. Lóbulo cerebral: Centro del procesamiento visual.",
    defRO: "1. Os: Partea posterioară și inferioară a craniului care protejează lobul occipital și cerebelul. 2. Lob cerebral: Centrul procesării vizuale.",
    nanda: null
}, {
    id: "v_o_oclusion",
    termES: "Oclusión",
    termRO: "Ocluzie",
    categoryColor: "bg-red-50",
    defES: "Cierre o bloqueo de un vaso sanguíneo u órgano hueco. Oclusión arterial aguda (isquemia). Oclusión dental (mordida).",
    defRO: "Închiderea sau blocarea unui vas de sânge sau organ gol. Ocluzie arterială acută (ischemie). Ocluzie dentară (mușcătură).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_o_odontologia",
    termES: "Odontología (Estomatología)",
    termRO: "Odontologie (Stomatologie)",
    categoryColor: "bg-stone-50",
    defES: "Rama médica que estudia, diagnostica y trata las enfermedades de los dientes, encías, tejido periodontal y la articulación temporomandibular.",
    defRO: "Ramură medicală care studiază, diagnostichează și tratează bolile dinților, gingiilor, țesutului parodontal și articulației temporomandibulare.",
    nanda: {
        codeES: "00048",
        codeRO: "00048",
        labelES: "Deterioro de la dentición",
        labelRO: "Dentiție afectată"
    }
}, {
    id: "v_o_oftalmologia",
    termES: "Oftalmología",
    termRO: "Oftalmologie",
    categoryColor: "bg-blue-50",
    defES: "Especialidad médica dedicada a la anatomía, fisiología y enfermedades del ojo y sus anejos. Incluye cirugía ocular (cataratas, láser).",
    defRO: "Specialitate medicală dedicată anatomiei, fiziologiei și bolilor ochiului și anexelor sale. Include chirurgia oculară (cataractă, laser).",
    nanda: null
}, {
    id: "v_o_oftalmoscopio",
    termES: "Oftalmoscopio",
    termRO: "Oftalmoscop",
    categoryColor: "bg-blue-50",
    defES: "Instrumento médico con luz y lentes que permite visualizar el interior del ojo (fondo de ojo): retina, disco óptico y vasos sanguíneos. Clave para detectar retinopatía hipertensiva/diabética.",
    defRO: "Instrument medical cu lumină și lentile care permite vizualizarea interiorului ochiului (fund de ochi): retină, disc optic și vase de sânge. Cheie pentru detectarea retinopatiei hipertensive/diabetice.",
    nanda: null
}, {
    id: "v_o_oido",
    termES: "Oído",
    termRO: "Ureche",
    categoryColor: "bg-blue-50",
    defES: "Órgano de la audición y el equilibrio. Oído Externo (pabellón, conducto), Medio (tímpano, huesecillos) e Interno (cóclea, vestíbulo).",
    defRO: "Organul auzului și echilibrului. Ureche Externă (pavilion, conduct), Medie (timpan, oscioare) și Internă (cochlee, vestibul).",
    nanda: null
}, {
    id: "v_o_olfato",
    termES: "Olfato",
    termRO: "Miros (Simț olfactiv)",
    categoryColor: "bg-stone-50",
    defES: "Sentido químico que permite percibir olores. Los receptores están en la mucosa pituitaria nasal. Su pérdida es la anosmia (signo precoz de COVID-19 o Alzheimer).",
    defRO: "Simț chimic care permite perceperea mirosurilor. Receptorii se află în mucoasa pituitară nazală. Pierderea sa este anosmia (semn precoce de COVID-19 sau Alzheimer).",
    nanda: null
}, {
    id: "v_o_oliguria",
    termES: "Oliguria",
    termRO: "Oligurie",
    categoryColor: "bg-yellow-50",
    defES: "Disminución anormal del volumen de orina emitido (<400-500 ml/24h o <0.5 ml/kg/h). Signo de deshidratación, fallo renal agudo o shock.",
    defRO: "Scădere anormală a volumului de urină emis (<400-500 ml/24h sau <0.5 ml/kg/h). Semn de deshidratare, insuficiență renală acută sau șoc.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_o_ombligo",
    termES: "Ombligo",
    termRO: "Ombilic (Buric)",
    categoryColor: "bg-pink-50",
    defES: "Cicatriz en el abdomen que marca el sitio de inserción del cordón umbilical. Referencia anatómica para dividir el abdomen en cuadrantes.",
    defRO: "Cicatrice pe abdomen care marchează locul de inserție a cordonului ombilical. Referință anatomică pentru împărțirea abdomenului în cadrane.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_o_omento",
    termES: "Omento (Epiplón)",
    termRO: "Epiploon (Omentum)",
    categoryColor: "bg-yellow-50",
    defES: 'Pliegue del peritoneo rico en grasa que cuelga sobre los intestinos ("delantal"). Protege órganos abdominales, aísla infecciones y almacena grasa.',
    defRO: 'Pliu al peritoneului bogat în grăsime care atârnă peste intestine ("șorț"). Protejează organele abdominale, izolează infecțiile și stochează grăsime.',
    nanda: null
}, {
    id: "v_o_oncologia",
    termES: "Oncología",
    termRO: "Oncologie",
    categoryColor: "bg-purple-50",
    defES: "Rama de la medicina dedicada al estudio, diagnóstico, tratamiento y prevención del cáncer (neoplasias malignas). Médica (quimio), Radioterápica o Quirúrgica.",
    defRO: "Ramură a medicinei dedicată studiului, diagnosticului, tratamentului și prevenirii cancerului (neoplazii maligne). Medicală (chimio), Radioterapeutică sau Chirurgicală.",
    nanda: null
}, {
    id: "v_o_onicomicosis",
    termES: "Onicomicosis (Tiña ungueal)",
    termRO: "Onicomicoză",
    categoryColor: "bg-stone-50",
    defES: "Infección fúngica de las uñas (pies o manos). La uña se vuelve gruesa, amarilla y quebradiza. Difícil de tratar, requiere tratamiento prolongado.",
    defRO: "Infecție fungică a unghiilor (picioare sau mâini). Unghia devine groasă, galbenă și casantă. Dificil de tratat, necesită tratament prelungit.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_o_ooforectomia",
    termES: "Ooforectomía (Ovariectomía)",
    termRO: "Ovarectomie",
    categoryColor: "bg-pink-50",
    defES: "Extirpación quirúrgica de uno o ambos ovarios. Si es bilateral, induce menopausia quirúrgica inmediata en mujeres premenopáusicas.",
    defRO: "Extirparea chirurgicală a unuia sau ambelor ovare. Dacă este bilaterală, induce menopauză chirurgicală imediată la femeile premenopauzale.",
    nanda: {
        codeES: "00059",
        codeRO: "00059",
        labelES: "Disfunción sexual",
        labelRO: "Disfuncție sexuală"
    }
}, {
    id: "v_o_opioide",
    termES: "Opioide",
    termRO: "Opioid",
    categoryColor: "bg-purple-50",
    defES: 'Clase de fármacos analgésicos que actúan sobre los receptores opioides. Naturales (morfina), semisintéticos (oxicodona) o sintéticos (fentanilo). "Opiáceo" se refiere a los naturales.',
    defRO: 'Clasă de medicamente analgezice care acționează asupra receptorilor opioizi. Naturale (morfină), semisintetice (oxicodonă) sau sintetice (fentanil). "Opiaceu" se referă la cele naturale.',
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_o_oportunista",
    termES: "Oportunista (Infección)",
    termRO: "Oportunistă (Infecție)",
    categoryColor: "bg-red-50",
    defES: "Infección causada por microorganismos que normalmente no provocan enfermedad en personas sanas, pero sí en inmunodeprimidos (VIH, cáncer). Ej. Pneumocystis jirovecii.",
    defRO: "Infecție cauzată de microorganisme care în mod normal nu provoacă boală la persoanele sănătoase, dar da la imunodeprimați (HIV, cancer). Ex. Pneumocystis jirovecii.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_o_oral",
    termES: "Oral (Vía)",
    termRO: "Orală (Cale)",
    categoryColor: "bg-green-50",
    defES: "Vía de administración de fármacos o alimentos por la boca (per os). Es la más común, cómoda y económica, pero de acción más lenta y sujeta a metabolismo de primer paso.",
    defRO: "Cale de administrare a medicamentelor sau alimentelor pe gură (per os). Este cea mai comună, comodă și economică, dar cu acțiune mai lentă și supusă metabolismului de prim pasaj.",
    nanda: null
}, {
    id: "v_o_orbita",
    termES: "Órbita",
    termRO: "Orbită",
    categoryColor: "bg-stone-50",
    defES: 'Cavidad ósea del cráneo que aloja y protege el globo ocular, músculos, nervios y vasos. Las fracturas de órbita ("blow-out") pueden atrapar músculos y causar diplopía.',
    defRO: 'Cavitate osoasă a craniului care găzduiește și protejează globul ocular, mușchii, nervii și vasele. Fracturile de orbită ("blow-out") pot prinde mușchii și cauza diplopie.',
    nanda: null
}, {
    id: "v_o_ortopnea",
    termES: "Ortopnea",
    termRO: "Ortopnee",
    categoryColor: "bg-blue-50",
    defES: "Disnea (dificultad respiratoria) que aparece al estar tumbado (decúbito) y mejora al sentarse o incorporarse. Signo clásico de insuficiencia cardíaca izquierda (congestión pulmonar).",
    defRO: "Dispnee (dificultate respiratorie) care apare la statul culcat (decubit) și se ameliorează la ședere sau ridicare. Semn clasic de insuficiență cardiacă stângă (congestie pulmonară).",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_o_osmosis",
    termES: "Ósmosis",
    termRO: "Osmoză",
    categoryColor: "bg-teal-50",
    defES: "Movimiento neto de agua a través de una membrana semipermeable desde una zona de menor concentración de solutos a una de mayor concentración, buscando el equilibrio.",
    defRO: "Mișcare netă a apei printr-o membrană semipermeabilă dintr-o zonă cu concentrație mai mică de solviți într-una cu concentrație mai mare, căutând echilibrul.",
    nanda: null
}, {
    id: "v_o_osteoartritis",
    termES: "Osteoartritis (Artrosis)",
    termRO: "Osteoartrită (Artroză)",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad articular degenerativa crónica caracterizada por el desgaste del cartílago articular y formación de hueso nuevo (osteofitos). Causa dolor mecánico y rigidez.",
    defRO: "Boală articulară degenerativă cronică caracterizată prin uzura cartilajului articular și formarea de os nou (osteofite). Cauzează durere mecanică și rigiditate.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_o_osteomielitis",
    termES: "Osteomielitis",
    termRO: "Osteomielită",
    categoryColor: "bg-red-50",
    defES: "Infección del hueso y médula ósea, generalmente bacteriana (Staphylococcus aureus). Puede ser aguda o crónica. Requiere tratamiento antibiótico prolongado y a veces cirugía.",
    defRO: "Infecția osului și măduvei osoase, de obicei bacteriană (Staphylococcus aureus). Poate fi acută sau cronică. Necesită tratament antibiotic prelungit și uneori chirurgie.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_o_osteoporosis",
    termES: "Osteoporosis",
    termRO: "Osteoporoză",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad esquelética sistémica caracterizada por baja masa ósea y deterioro de la microarquitectura, aumentando la fragilidad y el riesgo de fracturas (cadera, vértebra, muñeca).",
    defRO: "Boală scheletică sistemică caracterizată prin masă osoasă scăzută și deteriorarea microarhitecturii, crescând fragilitatea și riscul de fracturi (șold, vertebră, încheietură).",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_o_ostomia",
    termES: "Ostomía",
    termRO: "Stomă (Ostomie)",
    categoryColor: "bg-pink-50",
    defES: "Abertura quirúrgica creada en la pared abdominal para permitir la salida de desechos (colostomía, ileostomía, urostomía) o la alimentación (gastrostomía). El estoma debe ser rojo y húmedo.",
    defRO: "Deschidere chirurgicală creată în peretele abdominal pentru a permite ieșirea deșeurilor (colostomie, ileostomie, urostomie) sau alimentația (gastrostomie). Stoma trebuie să fie roșie și umedă.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_o_otitis",
    termES: "Otitis",
    termRO: "Otită",
    categoryColor: "bg-red-50",
    defES: 'Inflamación del oído. Externa ("de nadador", dolor al tragar/tocar) o Media (infección bacteriana/viral tras catarro, tímpano abombado, dolor intenso y fiebre en niños).',
    defRO: 'Inflamația urechii. Externă ("a înotătorului", durere la înghițire/atingere) sau Medie (infecție bacteriană/virală după răceală, timpan bombat, durere intensă și febră la copii).',
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_o_otoscopio",
    termES: "Otoscopio",
    termRO: "Otoscop",
    categoryColor: "bg-stone-50",
    defES: "Instrumento médico con luz y lente de aumento para examinar el conducto auditivo externo y la membrana timpánica.",
    defRO: "Instrument medical cu lumină și lentilă de mărire pentru examinarea conductului auditiv extern și a membranei timpanice.",
    nanda: null
}, {
    id: "v_o_ototoxico",
    termES: "Ototóxico",
    termRO: "Ototoxic",
    categoryColor: "bg-red-50",
    defES: "Fármaco o sustancia que daña el oído interno (nervio auditivo o vestibular), causando hipoacusia, tinnitus o vértigo. Ej. Aminoglucósidos (gentamicina), Furosemida rápida, Cisplatino.",
    defRO: "Medicament sau substanță care deteriorează urechea internă (nervul auditiv sau vestibular), cauzând hipoacuzie, tinitus sau vertij. Ex. Aminoglicozide (gentamicină), Furosemid rapid, Cisplatină.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: auditiva",
        labelRO: "Tulburare de percepție senzorială: auditivă"
    }
}, {
    id: "v_o_ovulacion",
    termES: "Ovulación",
    termRO: "Ovulație",
    categoryColor: "bg-pink-50",
    defES: "Liberación de un óvulo maduro desde el ovario hacia la trompa de Falopio. Ocurre a mitad del ciclo menstrual (~día 14), inducida por el pico de LH. Ventana fértil.",
    defRO: "Eliberarea unui ovul matur din ovar în trompa uterină. Are loc la jumătatea ciclului menstrual (~ziua 14), indusă de vârful LH. Fereastră fertilă.",
    nanda: null
}, {
    id: "v_o_oximetro",
    termES: "Oxímetro de Pulso (Pulsioxímetro)",
    termRO: "Pulsoximetru",
    categoryColor: "bg-blue-50",
    defES: "Dispositivo no invasivo que mide la saturación de oxígeno de la hemoglobina arterial (SpO2) y la frecuencia cardíaca mediante un sensor de luz (dedo/oreja). Normal >95%.",
    defRO: "Dispozitiv non-invaziv care măsoară saturația de oxigen a hemoglobinei arteriale (SpO2) și frecvența cardiacă printr-un senzor de lumină (deget/ureche). Normal >95%.",
    nanda: null
}, {
    id: "v_o_oxigenoterapia",
    termES: "Oxigenoterapia",
    termRO: "Oxigenoterapie",
    categoryColor: "bg-blue-50",
    defES: "Administración de oxígeno suplementario a concentraciones mayores que las del aire ambiente (>21%) para tratar o prevenir la hipoxia. Gafas nasales, mascarilla Venturi, reservorio.",
    defRO: "Administrarea de oxigen suplimentar la concentrații mai mari decât cele ale aerului ambiental (>21%) pentru a trata sau preveni hipoxia. Ochelari nazali, mască Venturi, rezervor.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_o_oxitocina",
    termES: "Oxitocina",
    termRO: "Oxitocină",
    categoryColor: "bg-pink-50",
    defES: "Hormona hipofisaria que estimula las contracciones uterinas durante el parto y la eyección de leche en la lactancia. Sintética se usa para inducir el parto o controlar hemorragia postparto.",
    defRO: "Hormon hipofizar care stimulează contracțiile uterine în timpul nașterii și ejecția laptelui în alăptare. Sintetică se folosește pentru inducerea nașterii sau controlul hemoragiei post-partum.",
    nanda: null
}, {
    id: "v_p_paciente",
    termES: "Paciente",
    termRO: "Pacient",
    categoryColor: "bg-green-50",
    defES: 'Persona que recibe atención médica, cuidados de enfermería o tratamiento. El término moderno tiende a "usuario" o "cliente" para denotar un rol más activo en su salud.',
    defRO: 'Persoană care primește asistență medicală, îngrijiri de nursing sau tratament. Termenul modern tinde spre "utilizator" sau "client" pentru a denota un rol mai activ în sănătatea sa.',
    nanda: {
        codeES: "00161",
        codeRO: "00161",
        labelES: "Disposición para mejorar los conocimientos",
        labelRO: "Dispoziție pentru îmbunătățirea cunoștințelor"
    }
}, {
    id: "v_p_paladar",
    termES: "Paladar",
    termRO: "Palat (Cerul gurii)",
    categoryColor: "bg-pink-50",
    defES: "Techo de la boca que separa la cavidad oral de la nasal. Duro (anterior, óseo) y Blando (posterior, muscular). El paladar hendido es una malformación congénita.",
    defRO: "Tavanul gurii care separă cavitatea bucală de cea nazală. Dur (anterior, osos) și Moale (posterior, muscular). Despicătura palatină este o malformație congenitală.",
    nanda: {
        codeES: "00103",
        codeRO: "00103",
        labelES: "Deterioro de la deglución",
        labelRO: "Deglutiție afectată"
    }
}, {
    id: "v_p_palpacion",
    termES: "Palpación",
    termRO: "Palpare",
    categoryColor: "bg-stone-50",
    defES: "Técnica de exploración física que utiliza el tacto (manos/dedos) para evaluar textura, temperatura, humedad, vibración, tamaño de órganos, masas o dolor. Superficial o profunda.",
    defRO: "Tehnică de explorare fizică ce utilizează tactul (mâini/degete) pentru a evalua textura, temperatura, umiditatea, vibrația, dimensiunea organelor, masele sau durerea. Superficială sau profundă.",
    nanda: null
}, {
    id: "v_p_palpitacion",
    termES: "Palpitación",
    termRO: "Palpitație",
    categoryColor: "bg-red-50",
    defES: "Sensación subjetiva incómoda de latido cardíaco fuerte, rápido o irregular. Puede ser benigna (ansiedad, cafeína) o signo de arritmia cardíaca.",
    defRO: "Senzație subiectivă incomodă de bătaie cardiacă puternică, rapidă sau neregulată. Poate fi benignă (anxietate, cafeină) sau semn de aritmie cardiacă.",
    nanda: null
}, {
    id: "v_p_pancreas",
    termES: "Páncreas",
    termRO: "Pancreas",
    categoryColor: "bg-yellow-50",
    defES: "Glándula mixta abdominal. Exocrina: secreta enzimas digestivas al duodeno. Endocrina: secreta insulina y glucagón a la sangre (islotes de Langerhans).",
    defRO: "Glandă mixtă abdominală. Exocrină: secretă enzime digestive în duoden. Endocrină: secretă insulină și glucagon în sânge (insule Langerhans).",
    nanda: {
        codeES: "00179",
        codeRO: "00179",
        labelES: "Riesgo de nivel de glucemia inestable",
        labelRO: "Risc de nivel glicemic instabil"
    }
}, {
    id: "v_p_pancreatitis",
    termES: "Pancreatitis",
    termRO: "Pancreatită",
    categoryColor: "bg-red-50",
    defES: "Inflamación del páncreas por autodigestión enzimática. Aguda (dolor en cinturón, vómitos; causas: alcohol, cálculos) o Crónica. Puede ser mortal (necrohemorrágica).",
    defRO: "Inflamația pancreasului prin autodigestie enzimatică. Acută (durere în centură, vărsături; cauze: alcool, calculi) sau Cronică. Poate fi mortală (necrohemoragică).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_p_pandemia",
    termES: "Pandemia",
    termRO: "Pandemie",
    categoryColor: "bg-purple-50",
    defES: "Propagación mundial de una nueva enfermedad infecciosa que afecta a un gran número de personas en múltiples continentes (ej. COVID-19, Gripe Española).",
    defRO: "Răspândirea mondială a unei noi boli infecțioase care afectează un număr mare de persoane pe mai multe continente (ex. COVID-19, Gripa Spaniolă).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_panico",
    termES: "Pánico (Ataque de)",
    termRO: "Panică (Atac de)",
    categoryColor: "bg-purple-50",
    defES: "Episodio súbito e intenso de miedo o malestar, acompañado de síntomas físicos (taquicardia, asfixia, sudor) y cognitivos (miedo a morir/enloquecer). Pico en minutos.",
    defRO: "Episod brusc și intens de frică sau disconfort, însoțit de simptome fizice (tahicardie, asfixie, transpirație) și cognitive (frica de a muri/înnebuni). Vârf în minute.",
    nanda: {
        codeES: "00148",
        codeRO: "00148",
        labelES: "Temor",
        labelRO: "Teamă"
    }
}, {
    id: "v_p_papanicolau",
    termES: "Papanicolaou (Citología)",
    termRO: "Papanicolau (Citologie)",
    categoryColor: "bg-pink-50",
    defES: "Prueba de cribado ginecológico que analiza células del cuello uterino para detectar cambios precancerosos o cáncer cervical (VPH). Recomendada periódicamente.",
    defRO: "Test de screening ginecologic care analizează celule de pe colul uterin pentru a detecta modificări precanceroase sau cancer cervical (HPV). Recomandat periodic.",
    nanda: null
}, {
    id: "v_p_papula",
    termES: "Pápula",
    termRO: "Papulă",
    categoryColor: "bg-stone-50",
    defES: "Lesión cutánea sólida, elevada y palpable, menor de 1 cm de diámetro. Puede ser de color variado. Ej. Verruga, acné, picadura insecto.",
    defRO: "Leziune cutanată solidă, ridicată și palpabilă, mai mică de 1 cm în diametru. Poate fi de culoare variată. Ex. Neg, acnee, înțepătură de insectă.",
    nanda: null
}, {
    id: "v_p_paracentesis",
    termES: "Paracentesis",
    termRO: "Paracenteză",
    categoryColor: "bg-teal-50",
    defES: "Punción quirúrgica de una cavidad corporal para extraer líquido. Comúnmente se refiere a la paracentesis abdominal para drenar ascitis (diagnóstica o evacuadora).",
    defRO: "Puncție chirurgicală a unei cavități corporale pentru a extrage lichid. Se referă în mod obișnuit la paracenteza abdominală pentru drenarea ascitei (diagnostică sau evacuatorie).",
    nanda: null
}, {
    id: "v_p_paralisis",
    termES: "Parálisis",
    termRO: "Paralizie",
    categoryColor: "bg-stone-50",
    defES: "Pérdida completa de la función motora voluntaria en una parte del cuerpo. Hemiplejia (mitad), Paraplejia (piernas), Tetraplejia (4 miembros).",
    defRO: "Pierderea completă a funcției motorii voluntare într-o parte a corpului. Hemiplegie (jumătate), Paraplegie (picioare), Tetraplegie (4 membre).",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_p_paralisis_cerebral",
    termES: "Parálisis Cerebral",
    termRO: "Paralizie Cerebrală",
    categoryColor: "bg-stone-50",
    defES: "Grupo de trastornos permanentes del movimiento y postura causados por un daño no progresivo en el cerebro inmaduro (fetal/infantil). Espástica, Discinética o Atáxica.",
    defRO: "Grup de tulburări permanente de mișcare și postură cauzate de o leziune neprogresivă a creierului imatur (fetal/infantil). Spastică, Diskinetică sau Ataxică.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_p_parasito",
    termES: "Parásito",
    termRO: "Parazit",
    categoryColor: "bg-green-50",
    defES: "Organismo que vive sobre o dentro de otro organismo (huésped) y se alimenta a expensas de él. Protozoos (Malaria), Helmintos (Gusanos), Ectoparásitos (Piojos).",
    defRO: "Organism care trăiește pe sau în interiorul altui organism (gazdă) și se hrănește pe seama acestuia. Protozoare (Malarie), Helminți (Viermi), Ectoparaziți (Păduchi).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_paratiroides",
    termES: "Paratiroides",
    termRO: "Paratiroide",
    categoryColor: "bg-yellow-50",
    defES: "Cuatro pequeñas glándulas endocrinas situadas detrás de la tiroides. Secretan PTH (Parathormona), que regula los niveles de calcio y fósforo en sangre y hueso.",
    defRO: "Patru mici glande endocrine situate în spatele tiroidei. Secretă PTH (Parathormon), care reglează nivelurile de calciu și fosfor în sânge și oase.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_p_parenteral",
    termES: "Parenteral",
    termRO: "Parenteral",
    categoryColor: "bg-teal-50",
    defES: "Vía de administración de fármacos o nutrientes que evita el tubo digestivo, generalmente mediante inyección (IV, IM, SC). Acción más rápida y precisa.",
    defRO: "Cale de administrare a medicamentelor sau nutrienților care ocolește tubul digestiv, de obicei prin injecție (IV, IM, SC). Acțiune mai rapidă și precisă.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_parestesia",
    termES: "Parestesia",
    termRO: "Parestezie",
    categoryColor: "bg-purple-50",
    defES: "Sensación anormal de hormigueo, entumecimiento, pinchazos o ardor en la piel, sin estímulo aparente. Indica afectación nerviosa o circulatoria (compresión, neuropatía).",
    defRO: "Senzație anormală de furnicături, amorțeală, înțepături sau arsură pe piele, fără stimul aparent. Indică afectare nervoasă sau circulatorie (compresie, neuropatie).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_p_parkinson",
    termES: "Parkinson (Enfermedad de)",
    termRO: "Parkinson (Boala)",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad neurodegenerativa progresiva por pérdida de neuronas dopaminérgicas. Síntomas motores: temblor de reposo, rigidez, bradicinesia e inestabilidad postural.",
    defRO: "Boală neurodegenerativă progresivă prin pierderea neuronilor dopaminergici. Simptome motorii: tremor de repaus, rigiditate, bradikinezie și instabilitate posturală.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_p_parpado",
    termES: "Párpado",
    termRO: "Pleoapă",
    categoryColor: "bg-stone-50",
    defES: "Pliegue cutáneo móvil que cubre y protege el ojo, y distribuye la lágrima. Ptosis (caída), Ectropión/Entropión (malposición).",
    defRO: "Pliu cutanat mobil care acoperă și protejează ochiul, și distribuie lacrima. Ptoză (cădere), Ectropion/Entropion (malpoziție).",
    nanda: null
}, {
    id: "v_p_parto",
    termES: "Parto",
    termRO: "Naștere",
    categoryColor: "bg-pink-50",
    defES: "Proceso de nacimiento. Eutócico (normal, vaginal, sin complicaciones) o Distócico (difícil, instrumental o cesárea).",
    defRO: "Procesul nașterii. Eutocică (normală, vaginală, fără complicații) sau Distocică (dificilă, instrumentală sau cezariană).",
    nanda: {
        codeES: "00256",
        codeRO: "00256",
        labelES: "Dolor de parto",
        labelRO: "Durere la naștere"
    }
}, {
    id: "v_p_patogeno",
    termES: "Patógeno",
    termRO: "Patogen",
    categoryColor: "bg-red-50",
    defES: "Cualquier microorganismo (bacteria, virus, hongo, parásito) capaz de causar enfermedad en un huésped susceptible.",
    defRO: "Orice microorganism (bacterie, virus, ciupercă, parazit) capabil să cauzeze boală într-o gazdă susceptibilă.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_pediatria",
    termES: "Pediatría",
    termRO: "Pediatrie",
    categoryColor: "bg-blue-50",
    defES: "Rama de la medicina que se ocupa de la salud y enfermedades de niños, desde el nacimiento hasta la adolescencia. Se centra en el crecimiento y desarrollo.",
    defRO: "Ramură a medicinei care se ocupă de sănătatea și bolile copiilor, de la naștere până la adolescență. Se concentrează pe creștere și dezvoltare.",
    nanda: null
}, {
    id: "v_p_pediculosis",
    termES: "Pediculosis (Piojos)",
    termRO: "Pediculoză (Păduchi)",
    categoryColor: "bg-stone-50",
    defES: "Infestación por piojos (Pediculus humanus). Capitis (cabeza), Corporis (cuerpo) o Pubis (ladillas). Causa prurito intenso y lesiones por rascado.",
    defRO: "Infestare cu păduchi (Pediculus humanus). Capitis (cap), Corporis (corp) sau Pubis (lați). Cauzează prurit intens și leziuni prin scărpinat.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_p_pelvis",
    termES: "Pelvis",
    termRO: "Pelvis (Bazin)",
    categoryColor: "bg-stone-50",
    defES: "Estructura ósea en forma de anillo en la base del tronco. Contiene vejiga, recto y órganos reproductores. En obstetricia, la pelvimetría evalúa si permite el parto vaginal.",
    defRO: "Structură osoasă în formă de inel la baza trunchiului. Conține vezica, rectul și organele reproducătoare. În obstetrică, pelvimetria evaluează dacă permite nașterea vaginală.",
    nanda: null
}, {
    id: "v_p_pene",
    termES: "Pene",
    termRO: "Penis",
    categoryColor: "bg-blue-50",
    defES: "Órgano copulador y urinario masculino. Contiene la uretra y cuerpos eréctiles (cavernosos y esponjoso).",
    defRO: "Organ copulator și urinar masculin. Conține uretra și corpii erectili (cavernoși și spongios).",
    nanda: null
}, {
    id: "v_p_perfusion",
    termES: "Perfusión",
    termRO: "Perfuzie",
    categoryColor: "bg-red-50",
    defES: "1. Fisiología: Paso de sangre a través del sistema vascular de un órgano o tejido para aportar nutrientes/O2. 2. Técnica: Administración IV de fluidos.",
    defRO: "1. Fiziologie: Trecerea sângelui prin sistemul vascular al unui organ sau țesut pentru a aduce nutrienți/O2. 2. Tehnică: Administrarea IV de fluide.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_p_pericardio",
    termES: "Pericardio",
    termRO: "Pericard",
    categoryColor: "bg-red-50",
    defES: "Saco fibroseroso de doble capa que envuelve el corazón y el inicio de los grandes vasos. Contiene una pequeña cantidad de líquido lubricante. Pericarditis: inflamación.",
    defRO: "Sac fibroseros cu dublu strat care învelește inima și începutul vaselor mari. Conține o cantitate mică de lichid lubrifiant. Pericardită: inflamație.",
    nanda: null
}, {
    id: "v_p_perineo",
    termES: "Perineo (Periné)",
    termRO: "Perineu",
    categoryColor: "bg-stone-50",
    defES: "Área romboidal situada entre el pubis y el cóccix, que incluye el ano y los genitales externos. Zona de riesgo de desgarros en el parto.",
    defRO: "Zonă romboidală situată între pubis și coccis, care include anusul și organele genitale externe. Zonă de risc de rupturi la naștere.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_p_peristaltismo",
    termES: "Peristaltismo",
    termRO: "Peristaltism",
    categoryColor: "bg-orange-50",
    defES: "Movimientos ondulatorios de contracción y relajación muscular involuntaria del tubo digestivo que propulsan el contenido (alimentos, heces). Ruidos hidroaéreos.",
    defRO: "Mișcări ondulatorii de contracție și relaxare musculară involuntară a tubului digestiv care propulsează conținutul (alimente, fecale). Zgomote hidroaeriene.",
    nanda: {
        codeES: "00196",
        codeRO: "00196",
        labelES: "Disfunción de la motilidad gastrointestinal",
        labelRO: "Disfuncție a motilității gastrointestinale"
    }
}, {
    id: "v_p_peritoneo",
    termES: "Peritoneo",
    termRO: "Peritoneu",
    categoryColor: "bg-teal-50",
    defES: "Membrana serosa extensa que reviste la cavidad abdominal (parietal) y cubre los órganos (visceral). Su inflamación es la peritonitis (grave).",
    defRO: "Membrană seroasă extinsă care căptușește cavitatea abdominală (parietal) și acoperă organele (visceral). Inflamația sa este peritonita (gravă).",
    nanda: null
}, {
    id: "v_p_peritonitis",
    termES: "Peritonitis",
    termRO: "Peritonită",
    categoryColor: "bg-red-50",
    defES: "Inflamación aguda del peritoneo, generalmente infecciosa por perforación de víscera hueca (apéndice, úlcera). Abdomen en tabla, dolor intenso, sepsis. Urgencia quirúrgica.",
    defRO: "Inflamație acută a peritoneului, de obicei infecțioasă prin perforarea unui viscer gol (apendice, ulcer). Abdomen de lemn, durere intensă, sepsis. Urgență chirurgicală.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_p_petequia",
    termES: "Petequia",
    termRO: "Peteșie",
    categoryColor: "bg-red-50",
    defES: "Pequeña mancha roja o púrpura (<3 mm) en la piel o mucosas causada por una hemorragia capilar menor. No desaparece al presionar (vitropresión). Signo de trombocitopenia o vasculitis.",
    defRO: "Mică pată roșie sau purpurie (<3 mm) pe piele sau mucoase cauzată de o hemoragie capilară minoră. Nu dispare la apăsare (vitropresiune). Semn de trombocitopenie sau vasculită.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_p_ph",
    termES: "pH",
    termRO: "pH",
    categoryColor: "bg-gray-50",
    defES: "Medida de acidez o alcalinidad. Sangre arterial: 7.35-7.45. Acidosis (<7.35), Alcalosis (>7.45). Vital para la homeostasis enzimática y celular.",
    defRO: "Măsură a acidității sau alcalinității. Sânge arterial: 7.35-7.45. Acidoză (<7.35), Alcaloză (>7.45). Vital pentru homeostazia enzimatică și celulară.",
    nanda: null
}, {
    id: "v_p_piel",
    termES: "Piel",
    termRO: "Piele",
    categoryColor: "bg-stone-50",
    defES: "Órgano más grande del cuerpo. Protege contra infecciones, regula temperatura, percibe sensaciones. Epidermis, Dermis, Hipodermis. Su integridad es prioridad en enfermería.",
    defRO: "Cel mai mare organ al corpului. Protejează împotriva infecțiilor, reglează temperatura, percepe senzații. Epidermă, Dermă, Hipoderm. Integritatea sa este o prioritate în nursing.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_p_pielonefritis",
    termES: "Pielonefritis",
    termRO: "Pielonefrită",
    categoryColor: "bg-red-50",
    defES: "Infección bacteriana del riñón (pelvis y parénquima), generalmente ascendente desde la vejiga. Fiebre alta, dolor lumbar (puñopercusión +), escalofríos. Riesgo de sepsis.",
    defRO: "Infecție bacteriană a rinichiului (pelvis și parenchim), de obicei ascendentă de la vezică. Febră mare, durere lombară (semnul Giordano +), frisoane. Risc de sepsis.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_piloro",
    termES: "Píloro",
    termRO: "Pilor",
    categoryColor: "bg-orange-50",
    defES: "Esfínter muscular que controla el paso del quimo del estómago al duodeno. La estenosis pilórica (hipertrófica) causa vómitos en proyectil en lactantes.",
    defRO: "Sfincter muscular care controlează trecerea chimului din stomac în duoden. Stenoza pilorică (hipertrofică) cauzează vărsături în jet la sugari.",
    nanda: null
}, {
    id: "v_p_pirosis",
    termES: "Pirosis (Ardor)",
    termRO: "Pirozis (Arsură)",
    categoryColor: "bg-orange-50",
    defES: "Sensación de quemazón retrosternal que asciende desde el epigastrio hacia el cuello, causada por el reflujo de contenido ácido gástrico al esófago (ERGE).",
    defRO: "Senzație de arsură retrosternală care urcă din epigastru spre gât, cauzată de refluxul conținutului acid gastric în esofag (BRGE).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_p_plaqueta",
    termES: "Plaqueta (Trombocito)",
    termRO: "Placheta (Trombocit)",
    categoryColor: "bg-red-50",
    defES: "Fragmento celular anucleado esencial para la hemostasia primaria (tapón plaquetario). Valor normal: 150.000-400.000/mm³. Trombocitopenia (riesgo sangrado) vs Trombocitosis (riesgo trombosis).",
    defRO: "Fragment celular anucleat esențial pentru hemostaza primară (dop plachetar). Valoare normală: 150.000-400.000/mm³. Trombocitopenie (risc sângerare) vs Trombocitoză (risc tromboză).",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_p_plasma",
    termES: "Plasma",
    termRO: "Plasmă",
    categoryColor: "bg-yellow-50",
    defES: "Parte líquida de la sangre (55%), compuesta por agua, proteínas (albúmina, coagulación), electrolitos y nutrientes. Se puede transfundir (PFC) para reponer factores de coagulación.",
    defRO: "Partea lichidă a sângelui (55%), compusă din apă, proteine (albumină, coagulare), electroliți și nutrienți. Se poate transfuza (PFC) pentru a înlocui factorii de coagulare.",
    nanda: null
}, {
    id: "v_p_pleura",
    termES: "Pleura",
    termRO: "Pleură",
    categoryColor: "bg-blue-50",
    defES: "Membrana serosa de doble capa (Visceral pegada al pulmón, Parietal a la caja torácica). El espacio pleural tiene presión negativa y poco líquido. Derrame/Neumotórax son patologías.",
    defRO: "Membrană seroasă cu dublu strat (Viscerală lipită de plămân, Parietală de cutia toracică). Spațiul pleural are presiune negativă și puțin lichid. Revărsat/Pneumotorax sunt patologii.",
    nanda: null
}, {
    id: "v_p_plexo",
    termES: "Plexo",
    termRO: "Plex",
    categoryColor: "bg-indigo-50",
    defES: "Red entrecruzada de nervios, vasos sanguíneos o vasos linfáticos. Ej. Plexo Braquial (inerva miembro superior), Plexo Solar (celíaco, inerva abdomen) o Plexo Coroideo (produce LCR).",
    defRO: "Rețea încrucișată de nervi, vase de sânge sau vase limfatice. Ex. Plex Brahial (inervează membrul superior), Plex Solar (celiac, inervează abdomenul) sau Plex Coroid (produce LCR).",
    nanda: null
}, {
    id: "v_p_pliegue_cutaneo",
    termES: "Pliegue Cutáneo (Medición)",
    termRO: "Pliu Cutanat (Măsurare)",
    categoryColor: "bg-orange-50",
    defES: "Técnica antropométrica para estimar la grasa corporal subcutánea utilizando un plicómetro (caliper). Sitios comunes: tricipital, bicipital, subescapular y suprailíaco. Indicador de estado nutricional.",
    defRO: "Tehnică antropometrică pentru estimarea grăsimii corporale subcutanate folosind un plicometru (caliper). Locuri comune: tricipital, bicipital, subscapular și suprailiac. Indicator al stării nutriționale.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_p_podagra",
    termES: "Podagra",
    termRO: "Podagră",
    categoryColor: "bg-red-50",
    defES: "Ataque agudo de gota que afecta específicamente a la articulación metatarsofalángica del dedo gordo del pie (hallux). Se presenta con inflamación intensa, rubor, calor y dolor extremo al tacto.",
    defRO: "Atac acut de gută care afectează specific articulația metatarsofalangiană a degetului mare de la picior (hallux). Se prezintă cu inflamație intensă, roșeață, căldură și durere extremă la atingere.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_p_podologia",
    termES: "Podología",
    termRO: "Podologie",
    categoryColor: "bg-stone-50",
    defES: "Rama de la salud dedicada al estudio, diagnóstico y tratamiento de las enfermedades y alteraciones del pie (ej. uñas encarnadas, callosidades, pie diabético, alteraciones de la marcha).",
    defRO: "Ramură a sănătății dedicată studiului, diagnosticului și tratamentului bolilor și alterărilor piciorului (ex. unghii încarnate, calozități, picior diabetic, tulburări de mers).",
    nanda: null
}, {
    id: "v_p_polaquiuria",
    termES: "Polaquiuria",
    termRO: "Polachiurie",
    categoryColor: "bg-yellow-50",
    defES: "Aumento anormal de la frecuencia urinaria (necesidad de orinar muchas veces) con volúmenes pequeños, sin aumento del volumen total diario. Síntoma de cistitis, embarazo o compresión vesical.",
    defRO: "Creștere anormală a frecvenței urinare (nevoia de a urina de multe ori) cu volume mici, fără creșterea volumului total zilnic. Simptom de cistită, sarcină sau compresie vezicală.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_p_policitemia",
    termES: "Policitemia (Eritrocitosis)",
    termRO: "Policitemie (Eritrocitoză)",
    categoryColor: "bg-red-50",
    defES: "Aumento anormal del número de glóbulos rojos (hematocrito >55%) en sangre. Aumenta la viscosidad sanguínea y el riesgo de trombosis. Primaria (Vera) o Secundaria (EPOC, altitud).",
    defRO: "Creștere anormală a numărului de globule roșii (hematocrit >55%) în sânge. Crește vâscozitatea sângelui și riscul de tromboză. Primară (Vera) sau Secundară (BPOC, altitudine).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_p_polidipsia",
    termES: "Polidipsia",
    termRO: "Polidipsie",
    categoryColor: "bg-blue-50",
    defES: "Sed excesiva y persistente con ingesta de grandes cantidades de líquido. Signo cardinal de diabetes mellitus (por hiperglucemia) y diabetes insípida.",
    defRO: "Sete excesivă și persistentă cu ingerarea unor cantități mari de lichid. Semn cardinal al diabetului zaharat (prin hiperglicemie) și diabetului insipid.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_p_polifagia",
    termES: "Polifagia",
    termRO: "Polifagie",
    categoryColor: "bg-green-50",
    defES: 'Aumento patológico de la sensación de hambre y de la ingesta de alimentos. Síntoma de diabetes mellitus (celular "hambrienta" por falta de insulina), hipertiroidismo o trastornos psiquiátricos.',
    defRO: 'Creștere patologică a senzației de foame și a aportului alimentar. Simptom al diabetului zaharat (celulă "flămândă" din lipsă de insulină), hipertiroidismului sau tulburărilor psihiatrice.',
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_p_polifarmacia",
    termES: "Polifarmacia",
    termRO: "Polipragmazie (Polimedicație)",
    categoryColor: "bg-purple-50",
    defES: "Uso simultáneo de múltiples medicamentos (generalmente >5) por un paciente. Común en ancianos. Aumenta exponencialmente el riesgo de interacciones adversas, caídas y falta de adherencia.",
    defRO: "Utilizarea simultană a mai multor medicamente (de obicei >5) de către un pacient. Comună la vârstnici. Crește exponențial riscul de interacțiuni adverse, căderi și lipsă de aderență.",
    nanda: {
        codeES: "00078",
        codeRO: "00078",
        labelES: "Gestión ineficaz de la salud",
        labelRO: "Gestionare ineficientă a sănătății"
    }
}, {
    id: "v_p_polihidramnios",
    termES: "Polihidramnios",
    termRO: "Polihidramnios",
    categoryColor: "bg-blue-50",
    defES: "Exceso de líquido amniótico (>2000 ml o índice ILA >24 cm) durante el embarazo. Puede indicar diabetes gestacional, anomalías fetales (atresia esofágica) o embarazo múltiple. Riesgo de parto prematuro.",
    defRO: "Exces de lichid amniotic (>2000 ml sau indice ILA >24 cm) în timpul sarcinii. Poate indica diabet gestațional, anomalii fetale (atrezie esofagiană) sau sarcină multiplă. Risc de naștere prematură.",
    nanda: null
}, {
    id: "v_p_polimiositis",
    termES: "Polimiositis",
    termRO: "Polimiozită",
    categoryColor: "bg-red-50",
    defES: "Enfermedad inflamatoria difusa del músculo esquelético (miopatía autoinmune) que causa debilidad muscular proximal simétrica, dolor y dificultad para tragar o respirar.",
    defRO: "Boală inflamatorie difuză a mușchiului scheletic (miopatie autoimună) care cauzează slăbiciune musculară proximală simetrică, durere și dificultate la înghițire sau respirație.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_p_polineuropatia",
    termES: "Polineuropatía",
    termRO: "Polineuropatie",
    categoryColor: "bg-indigo-50",
    defES: 'Trastorno que afecta a múltiples nervios periféricos simultáneamente, generalmente de forma distal y simétrica ("en guante y calcetín"). Causas: Diabetes, alcoholismo, Guillain-Barré, quimioterapia.',
    defRO: 'Tulburare care afectează multipli nervi periferici simultan, de obicei distal și simetric ("în mănușă și șosetă"). Cauze: Diabet, alcoolism, Guillain-Barré, chimioterapie.',
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_p_polipo",
    termES: "Pólipo",
    termRO: "Polip",
    categoryColor: "bg-pink-50",
    defES: "Crecimiento de tejido que sobresale de una membrana mucosa (colon, nariz, útero). Pueden ser pediculados o sésiles. Los pólipos adenomatosos de colon son precursores del cáncer colorrectal.",
    defRO: "Creștere de țesut care iese dintr-o membrană mucoasă (colon, nas, uter). Pot fi pediculați sau sesili. Polipii adenomatoși de colon sunt precursori ai cancerului colorectal.",
    nanda: null
}, {
    id: "v_p_politraumatismo",
    termES: "Politraumatismo",
    termRO: "Politraumatism",
    categoryColor: "bg-red-50",
    defES: "Paciente con dos o más lesiones traumáticas graves (ej. fracturas múltiples, daño visceral, TCE) donde al menos una de ellas pone en riesgo la vida. Requiere abordaje sistemático (ATLS).",
    defRO: "Pacient cu două sau mai multe leziuni traumatice grave (ex. fracturi multiple, leziuni viscerale, TCC) unde cel puțin una dintre ele pune viața în pericol. Necesită abordare sistematică (ATLS).",
    nanda: null
}, {
    id: "v_p_poliuria",
    termES: "Poliuria",
    termRO: "Poliurie",
    categoryColor: "bg-yellow-50",
    defES: "Producción y excreción excesiva de orina (>2.5-3 litros/día en adultos). Diferenciar de polaquiuria (frecuencia sin volumen). Causas: Diabetes descompensada, diuréticos, polidipsia psicógena.",
    defRO: "Producția și excreția excesivă de urină (>2.5-3 litri/zi la adulți). A se diferenția de polachiurie (frecvență fără volum). Cauze: Diabet decompensat, diuretice, polidipsie psihogenă.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_p_popliteo",
    termES: "Poplíteo (Hueco)",
    termRO: "Popliteu (Fosa)",
    categoryColor: "bg-stone-50",
    defES: "Región en forma de rombo situada detrás de la rodilla. Contiene la arteria y vena poplíteas, y los nervios tibial y peroneo. Punto para palpar el pulso poplíteo.",
    defRO: "Regiune în formă de romb situată în spatele genunchiului. Conține artera și vena poplitee, și nervii tibial și peronier. Punct pentru palparea pulsului popliteu.",
    nanda: null
}, {
    id: "v_p_porta",
    termES: "Porta (Vena)",
    termRO: "Portă (Vena)",
    categoryColor: "bg-red-50",
    defES: "Gran vena que transporta sangre rica en nutrientes desde los órganos digestivos (estómago, intestinos, bazo, páncreas) hacia el hígado para su procesamiento. La obstrucción causa hipertensión portal.",
    defRO: "Venă mare care transportă sânge bogat în nutrienți de la organele digestive (stomac, intestine, splină, pancreas) către ficat pentru procesare. Obstrucția cauzează hipertensiune portală.",
    nanda: null
}, {
    id: "v_p_portador",
    termES: "Portador",
    termRO: "Purtător",
    categoryColor: "bg-gray-50",
    defES: "Persona o animal que alberga un agente infeccioso específico sin presentar enfermedad clínica aparente y puede transmitirlo a otros (ej. portador asintomático de COVID-19 o Salmonella).",
    defRO: "Persoană sau animal care găzduiește un agent infecțios specific fără a prezenta boală clinică aparentă și poate să-l transmită altora (ex. purtător asimptomatic de COVID-19 sau Salmonella).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_poscarga",
    termES: "Poscarga (Afterload)",
    termRO: "Postsarcină",
    categoryColor: "bg-red-50",
    defES: "Resistencia o tensión que debe superar el ventrículo para expulsar la sangre hacia la aorta (VI) o pulmonar (VD) durante la sístole. Aumenta con la hipertensión y estenosis valvular.",
    defRO: "Rezistența sau tensiunea pe care trebuie să o depășească ventriculul pentru a expulza sângele în aortă (VS) sau pulmonară (VD) în timpul sistolei. Crește cu hipertensiunea și stenoza valvulară.",
    nanda: null
}, {
    id: "v_p_posologia",
    termES: "Posología",
    termRO: "Pozologie",
    categoryColor: "bg-teal-50",
    defES: "Rama de la farmacología que estudia las dosis de los medicamentos. Establece cuánto, cuándo y con qué frecuencia debe administrarse un fármaco para ser eficaz y seguro.",
    defRO: "Ramură a farmacologiei care studiază dozele medicamentelor. Stabilește cât, când și cu ce frecvență trebuie administrat un medicament pentru a fi eficace și sigur.",
    nanda: null
}, {
    id: "v_p_postoperatorio",
    termES: "Postoperatorio",
    termRO: "Postoperator",
    categoryColor: "bg-blue-50",
    defES: "Período que sigue a una intervención quirúrgica. Inmediato (sala despertar/URPA, control vital), Mediato (hospitalización) y Tardío (convalecencia en casa). Foco en dolor, infección y movilidad.",
    defRO: "Perioada care urmează unei intervenții chirurgicale. Imediat (sala de trezire/ATI, control vital), Mediat (spitalizare) și Tardiv (convalescență acasă). Focus pe durere, infecție și mobilitate.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_p_postparto",
    termES: "Postparto (Puerperio)",
    termRO: "Post-partum (Lăuzie)",
    categoryColor: "bg-pink-50",
    defES: "Período de aprox. 6 semanas tras el parto en el que el cuerpo materno regresa a su estado pregestacional. Involucra involución uterina, loquios, inicio lactancia y adaptación psicosocial.",
    defRO: "Perioadă de aprox. 6 săptămâni după naștere în care corpul matern revine la starea pregestațională. Implică involuție uterină, lohii, inițierea alăptării și adaptare psihosocială.",
    nanda: null
}, {
    id: "v_p_postura",
    termES: "Postura",
    termRO: "Postură",
    categoryColor: "bg-stone-50",
    defES: "Posición o alineación del cuerpo y sus partes. Una mala postura (ej. cifosis, escoliosis) puede causar dolor musculoesquelético crónico y afectar la función respiratoria.",
    defRO: "Poziția sau alinierea corpului și a părților sale. O postură proastă (ex. cifoză, scolioză) poate cauza dureri musculo-scheletice cronice și poate afecta funcția respiratorie.",
    nanda: null
}, {
    id: "v_p_potasio",
    termES: "Potasio (K+)",
    termRO: "Potasiu (K+)",
    categoryColor: "bg-green-50",
    defES: "Principal catión intracelular, esencial para la transmisión del impulso nervioso, contracción muscular y ritmo cardíaco. Rango sérico estrecho: 3.5 - 5.0 mEq/L. Ver Kalemia.",
    defRO: "Principalul cation intracelular, esențial pentru transmiterea impulsului nervos, contracția musculară și ritmul cardiac. Interval seric îngust: 3.5 - 5.0 mEq/L. Vezi Kaliemie.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_p_precarga",
    termES: "Precarga",
    termRO: "Presarcină",
    categoryColor: "bg-red-50",
    defES: "Volumen o presión que distiende el ventrículo al final de la diástole (llenado), justo antes de la contracción. Depende del retorno venoso y volemia. Ley de Frank-Starling.",
    defRO: "Volumul sau presiunea care distinde ventriculul la sfârșitul diastolei (umplere), chiar înainte de contracție. Depinde de întoarcerea venoasă și volemie. Legea Frank-Starling.",
    nanda: null
}, {
    id: "v_p_preeclampsia",
    termES: "Preeclampsia",
    termRO: "Preeclampsie",
    categoryColor: "bg-purple-50",
    defES: "Complicación del embarazo (>20 semanas) caracterizada por hipertensión arterial de nueva aparición y proteinuria (o daño de órgano diana). Puede evolucionar a eclampsia (convulsiones).",
    defRO: "Complicație a sarcinii (>20 săptămâni) caracterizată prin hipertensiune arterială nou apărută și proteinurie (sau leziuni de organ țintă). Poate evolua spre eclampsie (convulsii).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_p_precordial",
    termES: "Precordial (Dolor)",
    termRO: "Precordială (Durere)",
    categoryColor: "bg-red-50",
    defES: "Relativo a la zona del tórax situada delante del corazón (precordio). El dolor precordial es el síntoma cardinal de la isquemia miocárdica (angina, infarto), aunque puede ser muscular o digestivo.",
    defRO: "Referitor la zona toracelui situată în fața inimii (precordiu). Durerea precordială este simptomul cardinal al ischemiei miocardice (angină, infarct), deși poate fi musculară sau digestivă.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_p_prednisona",
    termES: "Prednisona",
    termRO: "Prednison",
    categoryColor: "bg-green-50",
    defES: "Corticosteroide sintético oral de acción intermedia con potente efecto antiinflamatorio e inmunosupresor. Profármaco (se convierte en prednisolona en hígado). Requiere retirada gradual.",
    defRO: "Corticosteroid sintetic oral cu acțiune intermediară cu efect antiinflamator și imunosupresor puternic. Promedicament (se transformă în prednisolon în ficat). Necesită retragere treptată.",
    nanda: null
}, {
    id: "v_p_prematuro",
    termES: "Prematuro (Pretérmino)",
    termRO: "Prematur",
    categoryColor: "bg-pink-50",
    defES: "Recién nacido cuyo nacimiento ocurre antes de completar las 37 semanas de gestación. Riesgos: síndrome de distrés respiratorio (membrana hialina), hemorragia intraventricular, inmadurez.",
    defRO: "Nou-născut a cărui naștere are loc înainte de a completa 37 de săptămâni de gestație. Riscuri: sindrom de detresă respiratorie (membrană hialină), hemoragie intraventriculară, imaturitate.",
    nanda: {
        codeES: "00008",
        codeRO: "00008",
        labelES: "Termorregulación ineficaz",
        labelRO: "Termoreglare ineficientă"
    }
}, {
    id: "v_p_premedicacion",
    termES: "Premedicación",
    termRO: "Premedicație",
    categoryColor: "bg-teal-50",
    defES: "Administración de fármacos antes de un procedimiento (anestesia, cirugía) para reducir la ansiedad, sedar, prevenir el dolor o reducir secreciones (ej. Benzodiacepinas, Opioides, Atropina).",
    defRO: "Administrarea de medicamente înainte de o procedură (anestezie, chirurgie) pentru a reduce anxietatea, a seda, a preveni durerea sau a reduce secrețiile (ex. Benzodiazepine, Opioide, Atropină).",
    nanda: null
}, {
    id: "v_p_prenatal",
    termES: "Prenatal (Antenatal)",
    termRO: "Prenatal (Antenatal)",
    categoryColor: "bg-pink-50",
    defES: "Período que precede al nacimiento. Los cuidados prenatales (visitas, ecografías, suplementos) son esenciales para monitorizar la salud materna y fetal y prevenir complicaciones.",
    defRO: "Perioada care precede nașterea. Îngrijirile prenatale (vizite, ecografii, suplimente) sunt esențiale pentru monitorizarea sănătății materne și fetale și prevenirea complicațiilor.",
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_p_preoperatorio",
    termES: "Preoperatorio",
    termRO: "Preoperator",
    categoryColor: "bg-blue-50",
    defES: "Fase que comienza con la decisión de realizar una cirugía y termina con el traslado del paciente al quirófano. Incluye valoración, consentimiento, ayuno y preparación física/psicológica.",
    defRO: "Fază care începe cu decizia de a efectua o intervenție chirurgicală și se termină cu transferul pacientului în sala de operație. Include evaluare, consimțământ, post și pregătire fizică/psihologică.",
    nanda: {
        codeES: "00146",
        codeRO: "00146",
        labelES: "Ansiedad",
        labelRO: "Anxietate"
    }
}, {
    id: "v_p_prepucio",
    termES: "Prepucio",
    termRO: "Prepuț",
    categoryColor: "bg-stone-50",
    defES: "Pliegue de piel retráctil que cubre y protege el glande del pene. Si no se retrae (fimosis), puede requerir circuncisión. En el clítoris femenino también existe un capuchón prepucial.",
    defRO: "Pliu de piele retractil care acoperă și protejează glandul penisului. Dacă nu se retractează (fimoză), poate necesita circumcizie. La clitorisul feminin există de asemenea un capușon prepuțial.",
    nanda: null
}, {
    id: "v_p_presbiacusia",
    termES: "Presbiacusia",
    termRO: "Prezbiacuzie",
    categoryColor: "bg-gray-50",
    defES: "Pérdida progresiva de la audición neurosensorial asociada al envejecimiento, afectando primero a los sonidos de alta frecuencia (agudos). Bilateral y simétrica.",
    defRO: "Pierderea progresivă a auzului neurosenzorial asociată cu îmbătrânirea, afectând mai întâi sunetele de înaltă frecvență (acute). Bilaterală și simetrică.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: auditiva",
        labelRO: "Tulburare de percepție senzorială: auditivă"
    }
}, {
    id: "v_p_presbicia",
    termES: "Presbicia (Vista Cansada)",
    termRO: "Prezbiopie",
    categoryColor: "bg-blue-50",
    defES: "Disminución fisiológica de la capacidad de acomodación del ojo (enfoque cercano) debida a la pérdida de elasticidad del cristalino con la edad (generalmente >40 años).",
    defRO: "Scăderea fiziologică a capacității de acomodare a ochiului (focalizare apropiată) datorată pierderii elasticității cristalinului odată cu vârsta (de obicei >40 ani).",
    nanda: null
}, {
    id: "v_p_prescripcion",
    termES: "Prescripción",
    termRO: "Prescripție (Rețetă)",
    categoryColor: "bg-teal-50",
    defES: "Orden escrita por un profesional facultado (médico, odontólogo, podólogo, enfermero prescriptor) para la dispensación y administración de un medicamento o tratamiento.",
    defRO: "Ordin scris de un profesionist autorizat (medic, stomatolog, podiatru, asistent prescriptor) pentru eliberarea și administrarea unui medicament sau tratament.",
    nanda: null
}, {
    id: "v_p_presentacion",
    termES: "Presentación (Fetal)",
    termRO: "Prezentație (Fetală)",
    categoryColor: "bg-pink-50",
    defES: "Parte del feto que entra primero en la pelvis materna y se palpa a través del cuello uterino. Cefálica (cabeza, lo normal), Podálica (nalgas/pies) o Transversa (hombro).",
    defRO: "Partea fătului care intră prima în pelvisul matern și se palpează prin colul uterin. Cefalică (cap, normal), Pelviană (fese/picioare) sau Transversă (umăr).",
    nanda: null
}, {
    id: "v_p_presion_arterial",
    termES: "Presión Arterial (PA)",
    termRO: "Tensiune Arterială (TA)",
    categoryColor: "bg-red-50",
    defES: "Fuerza que ejerce la sangre contra las paredes de las arterias. Sistólica (máxima, contracción ventricular) y Diastólica (mínima, relajación). Valor normal: <120/80 mmHg.",
    defRO: "Forța exercitată de sânge împotriva pereților arterelor. Sistolică (maximă, contracție ventriculară) și Diastolică (minimă, relaxare). Valoare normală: <120/80 mmHg.",
    nanda: null
}, {
    id: "v_p_presion_intracraneal",
    termES: "Presión Intracraneal (PIC)",
    termRO: "Presiune Intracraniană (PIC)",
    categoryColor: "bg-stone-50",
    defES: "Presión dentro del cráneo ejercida por el cerebro, LCR y sangre. Normal: 5-15 mmHg. El aumento (HTIC) es crítico, reduce la perfusión cerebral y puede causar herniación.",
    defRO: "Presiunea din interiorul craniului exercitată de creier, LCR și sânge. Normal: 5-15 mmHg. Creșterea (HTIC) este critică, reduce perfuzia cerebrală și poate cauza herniere.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_p_presion_venosa_central",
    termES: "Presión Venosa Central (PVC)",
    termRO: "Presiune Venoasă Centrală (PVC)",
    categoryColor: "bg-blue-50",
    defES: "Presión de la sangre en la vena cava superior, cerca de la aurícula derecha. Refleja la precarga derecha y el volumen sanguíneo (volemia). Se mide mediante catéter central.",
    defRO: "Presiunea sângelui în vena cavă superioară, aproape de atriul drept. Reflectă presarcina dreaptă și volumul sanguin (volemia). Se măsoară prin cateter central.",
    nanda: null
}, {
    id: "v_p_prevalencia",
    termES: "Prevalencia",
    termRO: "Prevalență",
    categoryColor: "bg-teal-50",
    defES: "Medida epidemiológica. Número total de casos (nuevos + antiguos) de una enfermedad en una población en un momento dado. Indica la carga total de la enfermedad (frecuencia).",
    defRO: "Măsură epidemiologică. Numărul total de cazuri (noi + vechi) ale unei boli într-o populație la un moment dat. Indică povara totală a bolii (frecvența).",
    nanda: null
}, {
    id: "v_p_prevencion",
    termES: "Prevención",
    termRO: "Prevenție",
    categoryColor: "bg-green-50",
    defES: "Medidas para evitar la enfermedad o detener su avance. Primaria (vacunas, evitar causa), Secundaria (cribado, detección precoz), Terciaria (rehabilitación, evitar complicaciones).",
    defRO: "Măsuri pentru evitarea bolii sau oprirea avansării ei. Primară (vaccinuri, evitarea cauzei), Secundară (screening, depistare precoce), Terțiară (reabilitare, evitarea complicațiilor).",
    nanda: {
        codeES: "00300",
        codeRO: "00300",
        labelES: "Conductas ineficaces de mantenimiento de la salud",
        labelRO: "Comportamente ineficiente de menținere a sănătății"
    }
}, {
    id: "v_p_priapismo",
    termES: "Priapismo",
    termRO: "Priapism",
    categoryColor: "bg-red-50",
    defES: "Erección prolongada (>4 horas), dolorosa y persistente del pene, no relacionada con estimulación sexual. Es una urgencia urológica por riesgo de isquemia y fibrosis cavernosa.",
    defRO: "Erecție prelungită (>4 ore), dureroasă și persistentă a penisului, neasociată cu stimularea sexuală. Este o urgență urologică din cauza riscului de ischemie și fibroză cavernoasă.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_p_primigesta",
    termES: "Primigesta",
    termRO: "Primigestă",
    categoryColor: "bg-pink-50",
    defES: "Mujer que está embarazada por primera vez. Gravidez 1.",
    defRO: "Femeie care este însărcinată pentru prima dată. Graviditate 1.",
    nanda: null
}, {
    id: "v_p_primipara",
    termES: "Primípara",
    termRO: "Primipară",
    categoryColor: "bg-pink-50",
    defES: "Mujer que ha dado a luz una vez a un feto viable (vivo o muerto). Paridad 1.",
    defRO: "Femeie care a născut o dată un făt viabil (viu sau mort). Paritate 1.",
    nanda: null
}, {
    id: "v_p_prion",
    termES: "Prion",
    termRO: "Prion",
    categoryColor: "bg-stone-50",
    defES: 'Agente infeccioso acelular compuesto solo por proteína mal plegada, sin material genético. Causa encefalopatías espongiformes transmisibles (ej. Creutzfeldt-Jakob, "vacas locas"). Indestructible por esterilización estándar.',
    defRO: 'Agent infecțios acelular compus doar din proteină pliată greșit, fără material genetic. Cauzează encefalopatii spongiforme transmisibile (ex. Creutzfeldt-Jakob, "vaca nebună"). Indestructibil prin sterilizare standard.',
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_proceso_enfermero",
    termES: "Proceso de Atención de Enfermería (PAE)",
    termRO: "Proces de Îngrijire Nursing (PAE)",
    categoryColor: "bg-teal-50",
    defES: "Método sistemático y científico de brindar cuidados de enfermería. 5 Etapas: Valoración, Diagnóstico (NANDA), Planificación (NOC/NIC), Ejecución y Evaluación.",
    defRO: "Metodă sistematică și științifică de a oferi îngrijiri de nursing. 5 Etape: Evaluare inițială, Diagnostic (NANDA), Planificare (NOC/NIC), Execuție și Evaluare finală.",
    nanda: null
}, {
    id: "v_p_prolapso",
    termES: "Prolapso",
    termRO: "Prolaps",
    categoryColor: "bg-orange-50",
    defES: "Descenso o caída de un órgano desde su posición normal debido a la debilidad de las estructuras de soporte. Prolapso uterino, rectal, válvula mitral.",
    defRO: "Coborârea sau căderea unui organ din poziția sa normală datorită slăbiciunii structurilor de susținere. Prolaps uterin, rectal, de valvă mitrală.",
    nanda: null
}, {
    id: "v_p_pronacion",
    termES: "Pronación",
    termRO: "Pronație",
    categoryColor: "bg-stone-50",
    defES: "Movimiento de rotación del antebrazo que orienta la palma de la mano hacia abajo o hacia atrás. Opuesto a supinación. También se aplica al pie (eversión y abducción).",
    defRO: "Mișcare de rotație a antebrațului care orientează palma mâinii în jos sau în spate. Opus supinației. Se aplică și piciorului (eversiune și abducție).",
    nanda: null
}, {
    id: "v_p_pronostico",
    termES: "Pronóstico",
    termRO: "Prognostic",
    categoryColor: "bg-gray-50",
    defES: "Predicción médica sobre el curso probable y el desenlace de una enfermedad, basada en el conocimiento de la patología y el estado del paciente.",
    defRO: "Predicție medicală despre cursul probabil și deznodământul unei boli, bazată pe cunoașterea patologiei și starea pacientului.",
    nanda: null
}, {
    id: "v_p_profilaxis",
    termES: "Profilaxis",
    termRO: "Profilaxie",
    categoryColor: "bg-green-50",
    defES: "Conjunto de medidas preventivas para evitar la aparición o propagación de enfermedades. Ej. Profilaxis antibiótica prequirúrgica, profilaxis tromboembólica (heparina).",
    defRO: "Ansamblu de măsuri preventive pentru a evita apariția sau răspândirea bolilor. Ex. Profilaxie antibiotică prechirurgicală, profilaxie tromboembolică (heparină).",
    nanda: null
}, {
    id: "v_p_prostata",
    termES: "Próstata",
    termRO: "Prostată",
    categoryColor: "bg-blue-50",
    defES: "Glándula del sistema reproductor masculino situada bajo la vejiga, rodeando la uretra. Secreta fluido seminal. HBP (benigna) y Cáncer son patologías comunes en mayores.",
    defRO: "Glandă a sistemului reproducător masculin situată sub vezică, înconjurând uretra. Secretă fluid seminal. HBP (benignă) și Cancerul sunt patologii comune la vârstnici.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_p_proteinuria",
    termES: "Proteinuria",
    termRO: "Proteinurie",
    categoryColor: "bg-yellow-50",
    defES: "Presencia anormal de proteínas (albúmina) en la orina. Signo de daño renal (glomerular), preeclampsia o diabetes. La orina puede parecer espumosa.",
    defRO: "Prezența anormală de proteine (albumină) în urină. Semn de leziune renală (glomerulară), preeclampsie sau diabet. Urina poate părea spumoasă.",
    nanda: null
}, {
    id: "v_p_protrombina",
    termES: "Protrombina (Tiempo de - TP)",
    termRO: "Protrombină (Timp de - TP)",
    categoryColor: "bg-red-50",
    defES: "Prueba de coagulación que evalúa la vía extrínseca (factores I, II, V, VII, X). Se usa para calcular el INR y monitorizar anticoagulantes orales (Sintrom/Warfarina).",
    defRO: "Test de coagulare care evaluează calea extrinsecă (factori I, II, V, VII, X). Se folosește pentru calcularea INR și monitorizarea anticoagulantelor orale (Sintrom/Warfarină).",
    nanda: null
}, {
    id: "v_p_prurito",
    termES: "Prurito (Picor)",
    termRO: "Prurit (Mâncărime)",
    categoryColor: "bg-pink-50",
    defES: "Sensación cutánea desagradable que provoca el deseo de rascarse. Causas: alergia, dermatitis, ictericia (sales biliares), uremia, fármacos (opioides). Puede causar lesiones por rascado.",
    defRO: "Senzație cutanată neplăcută care provoacă dorința de a se scărpina. Cauze: alergie, dermatită, icter (săruri biliare), uremie, medicamente (opioide). Poate cauza leziuni prin scărpinat.",
    nanda: {
        codeES: "00214",
        codeRO: "00214",
        labelES: "Disconfort",
        labelRO: "Disconfort"
    }
}, {
    id: "v_p_pseudomona",
    termES: "Pseudomonas aeruginosa",
    termRO: "Pseudomonas aeruginosa",
    categoryColor: "bg-green-50",
    defES: "Bacteria gramnegativa oportunista, común en ambiente hospitalario. Causa infecciones graves en quemados, fibrosis quística e inmunodeprimidos. Produce pigmento verde-azulado y es multirresistente.",
    defRO: "Bacterie gram-negativă oportunistă, comună în mediul spitalicesc. Cauzează infecții grave la arși, fibroză chistică și imunodeprimați. Produce pigment verde-albăstrui și este multirezistentă.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_p_psicosis",
    termES: "Psicosis",
    termRO: "Psihoză",
    categoryColor: "bg-purple-50",
    defES: "Estado mental caracterizado por la pérdida de contacto con la realidad. Incluye delirios (creencias falsas) y alucinaciones (percepciones falsas). Ocurre en esquizofrenia, manía o intoxicación.",
    defRO: "Stare mentală caracterizată prin pierderea contactului cu realitatea. Include deliruri (credințe false) și halucinații (percepții false). Apare în schizofrenie, manie sau intoxicație.",
    nanda: {
        codeES: "00279",
        codeRO: "00279",
        labelES: "Deterioro de los procesos de pensamiento",
        labelRO: "Procese de gândire perturbate"
    }
}, {
    id: "v_p_psoriasis",
    termES: "Psoriasis",
    termRO: "Psoriazis",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad inflamatoria crónica de la piel, autoinmune, caracterizada por placas rojas cubiertas de escamas plateadas (hiperproliferación de queratinocitos). No contagiosa.",
    defRO: "Boală inflamatorie cronică a pielii, autoimună, caracterizată prin plăci roșii acoperite de scuame argintii (hiperproliferarea keratinocitelor). Necontagioasă.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_p_ptosis",
    termES: "Ptosis (Palpebral)",
    termRO: "Ptoză (Palpebrală)",
    categoryColor: "bg-stone-50",
    defES: "Caída del párpado superior que puede obstruir la visión. Congénita o adquirida (miastenia gravis, parálisis del III par craneal, envejecimiento).",
    defRO: "Căderea pleoapei superioare care poate obstrucționa vederea. Congenitală sau dobândită (miastenia gravis, paralizia nervului cranian III, îmbătrânire).",
    nanda: null
}, {
    id: "v_p_puerperio",
    termES: "Puerperio",
    termRO: "Lăuzie (Puerperiu)",
    categoryColor: "bg-pink-50",
    defES: "Periodo de recuperación postparto (aprox. 6 semanas o 40 días) hasta que los órganos reproductores vuelven al estado pregravídico. Riesgos: hemorragia, infección, depresión.",
    defRO: "Perioada de recuperare post-partum (aprox. 6 săptămâni sau 40 de zile) până când organele reproducătoare revin la starea pregestațională. Riscuri: hemoragie, infecție, depresie.",
    nanda: null
}, {
    id: "v_p_pulmon",
    termES: "Pulmón",
    termRO: "Plămân",
    categoryColor: "bg-sky-50",
    defES: "Órgano par esencial de la respiración situado en el tórax. Realiza el intercambio gaseoso (hematosis) en los alvéolos. Pulmón derecho (3 lóbulos), izquierdo (2 lóbulos).",
    defRO: "Organ pereche esențial al respirației situat în torace. Realizează schimbul gazos (hematoza) în alveole. Plămân drept (3 lobi), stâng (2 lobi).",
    nanda: null
}, {
    id: "v_p_pulso",
    termES: "Pulso",
    termRO: "Puls",
    categoryColor: "bg-red-50",
    defES: "Onda de presión provocada por la expansión de las arterias con cada latido cardíaco. Sitios de palpación: Radial (muñeca), Carotídeo (cuello), Femoral (ingle), Pedio (pie).",
    defRO: "Unda de presiune provocată de expansiunea arterelor cu fiecare bătaie cardiacă. Locuri de palpare: Radial (încheietură), Carotidian (gât), Femural (inghinal), Pedios (picior).",
    nanda: null
}, {
    id: "v_p_puncion_lumbar",
    termES: "Punción Lumbar",
    termRO: "Puncție Lombară",
    categoryColor: "bg-teal-50",
    defES: "Procedimiento invasivo para extraer LCR del espacio subaracnoideo (entre vértebras L3-L4 o L4-L5). Diagnóstico (meningitis) o terapéutico (anestesia raquídea).",
    defRO: "Procedură invazivă pentru extragerea LCR din spațiul subarahnoidian (între vertebrele L3-L4 sau L4-L5). Diagnostic (meningită) sau terapeutic (anestezie rahidiană).",
    nanda: null
}, {
    id: "v_p_pupila",
    termES: "Pupila",
    termRO: "Pupilă",
    categoryColor: "bg-stone-50",
    defES: "Orificio central del iris que regula la entrada de luz. Se dilata (midriasis) en oscuridad/estrés y se contrae (miosis) con luz. La reactividad pupilar (PIRRL) valora el tronco cerebral.",
    defRO: "Orificiul central al irisului care reglează intrarea luminii. Se dilată (midriază) în întuneric/stres și se contractă (mioză) la lumină. Reactivitatea pupilară (PIRRL) evaluează trunchiul cerebral.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_p_purpura",
    termES: "Púrpura",
    termRO: "Purpură",
    categoryColor: "bg-purple-50",
    defES: "Manchas rojas o moradas en la piel (>3mm) por extravasación de sangre (hemorragia subcutánea). No desaparecen a la vitropresión. Púrpura Trombocitopénica Idiopática (PTI).",
    defRO: "Pete roșii sau purpurii pe piele (>3mm) prin extravazarea sângelui (hemoragie subcutanată). Nu dispar la vitropresiune. Purpura Trombocitopenică Idiopatică (PTI).",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_p_pus",
    termES: "Pus",
    termRO: "Puroi",
    categoryColor: "bg-yellow-50",
    defES: "Exudado espeso, blanco-amarillento o verdoso, formado por leucocitos muertos (neutrófilos), bacterias, restos de tejido y suero. Signo inequívoco de infección bacteriana.",
    defRO: "Exsudat gros, alb-gălbui sau verzui, format din leucocite moarte (neutrofile), bacterii, resturi de țesut și ser. Semn neechivoc de infecție bacteriană.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_q_qrs",
    termES: "QRS (Complejo)",
    termRO: "QRS (Complex)",
    categoryColor: "bg-red-50",
    defES: "Parte central del trazado del electrocardiograma (ECG) que representa la despolarización (contracción) de los ventrículos cardíacos. Su anchura o forma anormal indica patología (bloqueo rama, hipertrofia).",
    defRO: "Partea centrală a traseului electrocardiogramei (EKG) care reprezintă depolarizarea (contracția) ventriculelor inimii. Lățimea sau forma sa anormală indică patologie (bloc de ramură, hipertrofie).",
    nanda: null
}, {
    id: "v_q_queilitis",
    termES: "Queilitis",
    termRO: "Cheilită",
    categoryColor: "bg-pink-50",
    defES: "Inflamación y agrietamiento de los labios, especialmente en las comisuras (queilitis angular o boqueras). Causas: deficiencia de vitamina B (riboflavina), hierro, infección fúngica o clima.",
    defRO: "Inflamația și crăparea buzelor, în special la comisuri (cheilită angulară sau zăbăluță). Cauze: deficiență de vitamina B (riboflavină), fier, infecție fungică sau climă.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_q_quelante",
    termES: "Quelante",
    termRO: "Chelator (Agent)",
    categoryColor: "bg-teal-50",
    defES: "Sustancia química que se une a metales pesados (plomo, mercurio, hierro) en el cuerpo formando complejos solubles que pueden ser excretados. Terapia para intoxicaciones o sobrecarga de hierro.",
    defRO: "Substanță chimică ce se leagă de metale grele (plumb, mercur, fier) în corp formând complexe solubile care pot fi excretate. Terapie pentru intoxicații sau supraîncărcare cu fier.",
    nanda: null
}, {
    id: "v_q_queloide",
    termES: "Queloide",
    termRO: "Cheloid",
    categoryColor: "bg-red-50",
    defES: "Cicatriz hipertrófica patológica que se extiende más allá de los bordes originales de la herida. Es dura, elevada, brillante y a veces dolorosa o pruriginosa. Predisposición genética.",
    defRO: "Cicatrice hipertrofică patologică ce se extinde dincolo de marginile originale ale plăgii. Este tare, ridicată, lucioasă și uneori dureroasă sau pruriginoasă. Predispoziție genetică.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_q_quemadura_1",
    termES: "Quemadura (Primer Grado)",
    termRO: "Arsură (Gradul I)",
    categoryColor: "bg-red-50",
    defES: "Lesión térmica superficial que afecta solo a la epidermis. Piel roja, seca y dolorosa, sin ampollas (ej. quemadura solar). Cura en días sin cicatriz.",
    defRO: "Leziune termică superficială care afectează doar epiderma. Piele roșie, uscată și dureroasă, fără bășici (ex. arsură solară). Se vindecă în câteva zile fără cicatrice.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_q_quemadura_2",
    termES: "Quemadura (Segundo Grado)",
    termRO: "Arsură (Gradul II)",
    categoryColor: "bg-red-50",
    defES: "Afecta epidermis y parte de la dermis. Caracterizada por flictenas (ampollas), edema, color rojo intenso y dolor muy fuerte. Riesgo de infección.",
    defRO: "Afectează epiderma și o parte din dermă. Caracterizată prin flictene (bășici), edem, culoare roșie intensă și durere foarte mare. Risc de infecție.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_q_quemadura_3",
    termES: "Quemadura (Tercer Grado)",
    termRO: "Arsură (Gradul III)",
    categoryColor: "bg-stone-50",
    defES: "Destrucción total de la piel (espesor completo) y tejidos subyacentes. La zona es indolora (destrucción nerviosa), blanca, marrón o carbonizada (escara). Requiere injertos.",
    defRO: "Distrugerea totală a pielii (grosime completă) și a țesuturilor subiacente. Zona este nedureroasă (distrugere nervoasă), albă, maro sau carbonizată (escară). Necesită grefe.",
    nanda: {
        codeES: "00044",
        codeRO: "00044",
        labelES: "Deterioro de la integridad tisular",
        labelRO: "Integritate tisulară afectată"
    }
}, {
    id: "v_q_queratina",
    termES: "Queratina",
    termRO: "Keratină",
    categoryColor: "bg-stone-50",
    defES: "Proteína fibrosa dura, insoluble y rica en azufre que constituye la estructura principal de la capa córnea de la piel, el pelo y las uñas. Proporciona protección.",
    defRO: "Proteină fibroasă dură, insolubilă și bogată în sulf care constituie structura principală a stratului cornos al pielii, părului și unghiilor. Oferă protecție.",
    nanda: null
}, {
    id: "v_q_queratitis",
    termES: "Queratitis",
    termRO: "Keratită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de la córnea del ojo. Puede ser infecciosa (herpes, bacterias en lentes de contacto) o traumática. Causa dolor severo, fotofobia, visión borrosa y riesgo de úlcera corneal.",
    defRO: "Inflamația corneei ochiului. Poate fi infecțioasă (herpes, bacterii în lentile de contact) sau traumatică. Cauzează durere severă, fotofobie, vedere încețoșată și risc de ulcer cornean.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_q_queratosis",
    termES: "Queratosis",
    termRO: "Keratoză",
    categoryColor: "bg-stone-50",
    defES: 'Engrosamiento localizado de la capa córnea de la piel (hiperqueratosis). Queratosis actínica (solar): lesión precancerosa rugosa. Queratosis seborreica: benigna ("verruga senil").',
    defRO: 'Îngroșare localizată a stratului cornos al pielii (hiperkeratoză). Keratoză actinică (solară): leziune precanceroasă aspră. Keratoză seboreică: benignă ("neg senil").',
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_q_quiasma",
    termES: "Quiasma Óptico",
    termRO: "Chiasmă Optică",
    categoryColor: "bg-indigo-50",
    defES: "Estructura en forma de X en la base del cerebro donde se cruzan parcialmente las fibras de los nervios ópticos. Su compresión (tumor hipofisario) causa hemianopsia bitemporal.",
    defRO: "Structură în formă de X la baza creierului unde se încrucișează parțial fibrele nervilor optici. Compresia sa (tumoare hipofizară) cauzează hemianopsie bitemporală.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_q_quilo",
    termES: "Quilo",
    termRO: "Chil",
    categoryColor: "bg-yellow-50",
    defES: "Líquido lechoso formado por linfa y grasas emulsionadas (quilomicrones) absorbidas en el intestino delgado durante la digestión. Circula por el conducto torácico.",
    defRO: "Lichid lăptos format din limfă și grăsimi emulsionate (chilomicroni) absorbite în intestinul subțire în timpul digestiei. Circulă prin canalul toracic.",
    nanda: null
}, {
    id: "v_q_quimiotaxis",
    termES: "Quimiotaxis",
    termRO: "Chimiotaxie",
    categoryColor: "bg-green-50",
    defES: "Movimiento de células (leucocitos) hacia el sitio de una infección o inflamación en respuesta a señales químicas (citocinas). Mecanismo clave de la respuesta inmune.",
    defRO: "Mișcarea celulelor (leucocite) către locul unei infecții sau inflamații ca răspuns la semnale chimice (citokine). Mecanism cheie al răspunsului imun.",
    nanda: null
}, {
    id: "v_q_quimioterapia",
    termES: "Quimioterapia",
    termRO: "Chimioterapie",
    categoryColor: "bg-red-50",
    defES: "Tratamiento sistémico del cáncer mediante fármacos citotóxicos que destruyen células de división rápida. Efectos adversos: alopecia, náuseas, mielosupresión (anemia, neutropenia).",
    defRO: "Tratament sistemic al cancerului prin medicamente citotoxice care distrug celulele cu diviziune rapidă. Efecte adverse: alopecie, greață, mielosupresie (anemie, neutropenie).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_q_quinidina",
    termES: "Quinidina",
    termRO: "Chinidină",
    categoryColor: "bg-teal-50",
    defES: 'Fármaco antiarrítmico de clase IA utilizado para tratar o prevenir ritmos cardíacos irregulares (fibrilación auricular). Puede causar "cinconismo" (toxicidad: tinnitus, mareo).',
    defRO: 'Medicament antiaritmic de clasa IA utilizat pentru tratarea sau prevenirea ritmurilor cardiace neregulate (fibrilație atrială). Poate cauza "cinconism" (toxicitate: tinitus, amețeală).',
    nanda: null
}, {
    id: "v_q_quirofano",
    termES: "Quirófano",
    termRO: "Sală de Operație (Bloc Operator)",
    categoryColor: "bg-teal-50",
    defES: "Sala hospitalaria estéril y equipada diseñada para realizar intervenciones quirúrgicas. Requiere protocolos estrictos de asepsia, ventilación y vestimenta.",
    defRO: "Sală de spital sterilă și echipată concepută pentru efectuarea intervențiilor chirurgicale. Necesită protocoale stricte de asepsie, ventilație și vestimentație.",
    nanda: {
        codeES: "00087",
        codeRO: "00087",
        labelES: "Riesgo de lesión postural perioperatoria",
        labelRO: "Risc de leziune posturală perioperatorie"
    }
}, {
    id: "v_q_quiste",
    termES: "Quiste",
    termRO: "Chist",
    categoryColor: "bg-stone-50",
    defES: "Saco cerrado o cavidad encapsulada anormal que contiene líquido, aire o material semisólido. Puede formarse en cualquier tejido (ovario, riñón, piel). Generalmente benigno.",
    defRO: "Sac închis sau cavitate încapsulată anormală care conține lichid, aer sau material semisolid. Se poate forma în orice țesut (ovar, rinichi, piele). De obicei benign.",
    nanda: null
}, {
    id: "v_r_rabdomiolisis",
    termES: "Rabdomiólisis",
    termRO: "Rabdomioliză",
    categoryColor: "bg-red-50",
    defES: "Rotura masiva de tejido muscular esquelético (por trauma, ejercicio extremo, estatinas) que libera mioglobina a la sangre. La mioglobina es tóxica para el riñón, causando fallo renal agudo (orina oscura/color coca-cola).",
    defRO: "Ruptură masivă de țesut muscular scheletic (prin traumă, efort extrem, statine) care eliberează mioglobină în sânge. Mioglobina este toxică pentru rinichi, cauzând insuficiență renală acută (urină închisă/culoare coca-cola).",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_r_rabia",
    termES: "Rabia (Hidrofobia)",
    termRO: "Rabie (Turbare)",
    categoryColor: "bg-red-50",
    defES: "Enfermedad viral mortal que afecta al sistema nervioso central, transmitida por la mordedura de animales infectados. Causa encefalitis, espasmos al tragar (hidrofobia) y muerte. Prevenible con vacuna post-exposición inmediata.",
    defRO: "Boală virală mortală care afectează sistemul nervos central, transmisă prin mușcătura animalelor infectate. Cauzează encefalită, spasme la înghițire (hidrofobie) și moarte. Prevenibilă cu vaccin post-expunere imediat.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_r_radiacion",
    termES: "Radiación",
    termRO: "Radiație",
    categoryColor: "bg-purple-50",
    defES: "Energía emitida en forma de ondas o partículas. Radiación ionizante (Rayos X, Gamma) se usa en diagnóstico y tratamiento (radioterapia), pero daña el ADN celular (riesgo cáncer).",
    defRO: "Energie emisă sub formă de unde sau particule. Radiația ionizantă (Raze X, Gamma) se folosește în diagnostic și tratament (radioterapie), dar deteriorează ADN-ul celular (risc cancer).",
    nanda: null
}, {
    id: "v_r_radiografia",
    termES: "Radiografía (Rayos X)",
    termRO: "Radiografie (Raze X)",
    categoryColor: "bg-blue-50",
    defES: "Imagen bidimensional de estructuras internas del cuerpo producida al pasar rayos X a través de ellas. Huesos (blanco/radiopaco), Aire (negro/radiolúcido), Tejidos (grises).",
    defRO: "Imagine bidimensională a structurilor interne ale corpului produsă prin trecerea razelor X prin ele. Oase (alb/radioopac), Aer (negru/radiolucent), Țesuturi (gri).",
    nanda: null
}, {
    id: "v_r_radioterapia",
    termES: "Radioterapia",
    termRO: "Radioterapie",
    categoryColor: "bg-red-50",
    defES: "Tratamiento del cáncer que utiliza altas dosis de radiación para destruir células cancerosas y reducir tumores. Efectos secundarios locales: radiodermitis (quemadura), mucositis.",
    defRO: "Tratament al cancerului care utilizează doze mari de radiații pentru a distruge celulele canceroase și a reduce tumorile. Efecte secundare locale: radiodermită (arsură), mucozită.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_r_rash",
    termES: "Rash (Erupción Cutánea)",
    termRO: "Rash (Erupție Cutanată)",
    categoryColor: "bg-pink-50",
    defES: "Cambio generalizado en el color o textura de la piel (exantema). Término común para reacciones alérgicas medicamentosas, infecciones virales o dermatitis.",
    defRO: "Schimbare generalizată în culoarea sau textura pielii (exantem). Termen comun pentru reacții alergice medicamentoase, infecții virale sau dermatite.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_r_rcp",
    termES: "RCP (Reanimación Cardiopulmonar)",
    termRO: "RCP (Resuscitare Cardiopulmonară)",
    categoryColor: "bg-red-50",
    defES: "Conjunto de maniobras de emergencia (compresiones torácicas y ventilaciones) para mantener la perfusión cerebral y cardíaca en una persona en parada cardiorrespiratoria.",
    defRO: "Ansamblu de manevre de urgență (compresiuni toracice și ventilații) pentru a menține perfuzia cerebrală și cardiacă la o persoană în stop cardiorespirator.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_r_reaccion_adversa",
    termES: "Reacción Adversa (RAM)",
    termRO: "Reacție Adversă (RAM)",
    categoryColor: "bg-orange-50",
    defES: "Respuesta nociva y no intencionada a un medicamento que ocurre a dosis normales. Incluye alergias, efectos secundarios, toxicidad e idiosincrasia.",
    defRO: "Răspuns nociv și neintenționat la un medicament care apare la doze normale. Include alergii, efecte secundare, toxicitate și idiosincrazie.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_r_reactivacion",
    termES: "Reactivación",
    termRO: "Reactivare",
    categoryColor: "bg-gray-50",
    defES: "Proceso por el cual una infección latente se vuelve activa nuevamente (ej. Virus Varicela-Zóster, Tuberculosis). Ocurre a menudo por inmunosupresión o estrés.",
    defRO: "Proces prin care o infecție latentă devine activă din nou (ex. Virus Varicelo-Zosterian, Tuberculoză). Apare adesea prin imunosupresie sau stres.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_r_receptor",
    termES: "Receptor",
    termRO: "Receptor",
    categoryColor: "bg-green-50",
    defES: "Estructura molecular en la superficie o interior de una célula que se une específicamente a una sustancia (ligando: hormona, fármaco, neurotransmisor) para iniciar una respuesta fisiológica.",
    defRO: "Structură moleculară pe suprafața sau în interiorul unei celule care se leagă specific de o substanță (ligand: hormon, medicament, neurotransmițător) pentru a iniția un răspuns fiziologic.",
    nanda: null
}, {
    id: "v_r_recto",
    termES: "Recto",
    termRO: "Rect",
    categoryColor: "bg-stone-50",
    defES: "Porción final del intestino grueso (12-15 cm) que conecta el colon sigmoide con el ano. Almacena las heces antes de la defecación. Vía de administración de supositorios/enemas.",
    defRO: "Porțiunea finală a intestinului gros (12-15 cm) care conectează colonul sigmoid cu anusul. Stochează materiile fecale înainte de defecație. Cale de administrare a supozitoarelor/clismelor.",
    nanda: null
}, {
    id: "v_r_rectorragia",
    termES: "Rectorragia (Hematoquecia)",
    termRO: "Rectoragie (Hematochezie)",
    categoryColor: "bg-red-50",
    defES: "Emisión de sangre roja fresca por el ano, indicativa de sangrado en el tracto digestivo inferior (recto, colon, ano). Causas: hemorroides, fisuras, pólipos, cáncer.",
    defRO: "Emisia de sânge roșu proaspăt prin anus, indicativă a sângerării în tractul digestiv inferior (rect, colon, anus). Cauze: hemoroizi, fisuri, polipi, cancer.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_r_recuento",
    termES: "Recuento (Sanguíneo)",
    termRO: "Numărătoare (Sanguină)",
    categoryColor: "bg-teal-50",
    defES: "Determinación del número de células sanguíneas (eritrocitos, leucocitos, plaquetas) en un volumen de sangre. Parte del hemograma completo.",
    defRO: "Determinarea numărului de celule sanguine (eritrocite, leucocite, trombocite) într-un volum de sânge. Parte a hemoleucogramei complete.",
    nanda: null
}, {
    id: "v_r_reflejo",
    termES: "Reflejo",
    termRO: "Reflex",
    categoryColor: "bg-indigo-50",
    defES: "Respuesta motora involuntaria, rápida y automática ante un estímulo. Reflejos osteotendinosos (rotuliano) evalúan la integridad del arco reflejo espinal. Reflejo pupilar (luz).",
    defRO: "Răspuns motor involuntar, rapid și automat la un stimul. Reflexe osteotendinoase (rotulian) evaluează integritatea arcului reflex spinal. Reflex pupilar (lumină).",
    nanda: null
}, {
    id: "v_r_reflujo",
    termES: "Reflujo Gastroesofágico (ERGE)",
    termRO: "Reflux Gastroesofagian (BRGE)",
    categoryColor: "bg-orange-50",
    defES: "Retorno anormal del contenido ácido del estómago hacia el esófago debido a incompetencia del esfínter esofágico inferior. Causa pirosis (ardor) y puede dañar la mucosa (esofagitis).",
    defRO: "Întoarcere anormală a conținutului acid al stomacului în esofag datorită incompetenței sfincterului esofagian inferior. Cauzează pirozis (arsură) și poate deteriora mucoasa (esofagită).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_r_rehabilitacion",
    termES: "Rehabilitación",
    termRO: "Reabilitare",
    categoryColor: "bg-green-50",
    defES: "Proceso terapéutico dirigido a restaurar la máxima capacidad funcional, independencia y calidad de vida de una persona tras una enfermedad o lesión (ej. ictus, fractura).",
    defRO: "Proces terapeutic îndreptat spre restabilirea capacității funcționale maxime, independenței și calității vieții unei persoane după o boală sau leziune (ex. AVC, fractură).",
    nanda: {
        codeES: "00300",
        codeRO: "00300",
        labelES: "Conductas ineficaces de mantenimiento de la salud",
        labelRO: "Comportamente ineficiente de menținere a sănătății"
    }
}, {
    id: "v_r_rehidratacion",
    termES: "Rehidratación",
    termRO: "Rehidratare",
    categoryColor: "bg-blue-50",
    defES: "Restitución de los líquidos y electrolitos perdidos por deshidratación. Oral (SRO) es preferible en casos leves/moderados; Intravenosa en casos graves o vómitos.",
    defRO: "Restituirea lichidelor și electroliților pierduți prin deshidratare. Orală (SRO) este preferabilă în cazuri ușoare/moderate; Intravenoasă în cazuri grave sau vărsături.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_r_remision",
    termES: "Remisión",
    termRO: "Remisiune",
    categoryColor: "bg-green-50",
    defES: "Disminución o desaparición de los signos y síntomas de una enfermedad (ej. cáncer, artritis), temporal o permanente. No implica necesariamente curación total.",
    defRO: "Diminuarea sau dispariția semnelor și simptomelor unei boli (ex. cancer, artrită), temporară sau permanentă. Nu implică neapărat vindecarea totală.",
    nanda: null
}, {
    id: "v_r_renal",
    termES: "Renal",
    termRO: "Renal",
    categoryColor: "bg-blue-50",
    defES: "Relativo al riñón. Arteria renal, cólico renal, insuficiencia renal. Función renal: filtrado y depuración de la sangre.",
    defRO: "Referitor la rinichi. Arteră renală, colică renală, insuficiență renală. Funcție renală: filtrarea și depurarea sângelui.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_r_renina",
    termES: "Renina",
    termRO: "Renină",
    categoryColor: "bg-red-50",
    defES: "Enzima secretada por el riñón en respuesta a la hipotensión o baja perfusión. Inicia el sistema Renina-Angiotensina-Aldosterona (SRAA) para elevar la presión arterial.",
    defRO: "Enzimă secretată de rinichi ca răspuns la hipotensiune sau perfuzie scăzută. Inițiază sistemul Renină-Angiotensină-Aldosteron (SRAA) pentru a crește tensiunea arterială.",
    nanda: null
}, {
    id: "v_r_reperfusion",
    termES: "Reperfusión",
    termRO: "Reperfuzie",
    categoryColor: "bg-red-50",
    defES: 'Restauración del flujo sanguíneo a un órgano o tejido que ha sufrido isquemia (ej. abrir arteria coronaria en infarto). Puede causar "daño por reperfusión" (radicales libres).',
    defRO: 'Restaurarea fluxului sanguin către un organ sau țesut care a suferit ischemie (ex. deschiderea arterei coronare în infarct). Poate cauza "leziuni de reperfuzie" (radicali liberi).',
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_r_reservorio",
    termES: "Reservorio (Infección)",
    termRO: "Rezervor (Infecție)",
    categoryColor: "bg-stone-50",
    defES: "Hábitat natural (humano, animal, ambiental) donde un agente infeccioso vive, crece y se multiplica, y desde donde puede transmitirse a un huésped susceptible.",
    defRO: "Habitat natural (uman, animal, ambiental) unde un agent infecțios trăiește, crește și se multiplică, și de unde se poate transmite la o gazdă susceptibilă.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_r_residencia",
    termES: "Residencia (Geriátrica)",
    termRO: "Cămin (Geriatic)",
    categoryColor: "bg-stone-50",
    defES: "Centro socio-sanitario destinado al alojamiento y cuidado integral de personas mayores, generalmente con cierto grado de dependencia o necesidades de enfermería.",
    defRO: "Centru socio-sanitar destinat cazării și îngrijirii integrale a persoanelor vârstnice, de obicei cu un anumit grad de dependență sau nevoi de nursing.",
    nanda: {
        codeES: "00305",
        codeRO: "00305",
        labelES: "Riesgo de fragilidad del anciano",
        labelRO: "Risc de fragilitate la vârstnic"
    }
}, {
    id: "v_r_residuo",
    termES: "Residuo (Vesical/Gástrico)",
    termRO: "Reziduu (Vezical/Gastric)",
    categoryColor: "bg-yellow-50",
    defES: "1. Vesical: Orina que queda en la vejiga tras la micción (retención). 2. Gástrico: Contenido estomacal aspirado antes de una nueva toma por sonda (evalúa tolerancia).",
    defRO: "1. Vezical: Urină rămasă în vezică după micțiune (retenție). 2. Gastric: Conținut stomacal aspirat înainte de o nouă administrare pe sondă (evaluează toleranța).",
    nanda: {
        codeES: "00023",
        codeRO: "00023",
        labelES: "Retención urinaria",
        labelRO: "Retenție urinară"
    }
}, {
    id: "v_r_resistencia",
    termES: "Resistencia (Antibiótica)",
    termRO: "Rezistență (Antibiotică)",
    categoryColor: "bg-red-50",
    defES: "Capacidad de las bacterias para sobrevivir a la acción de antibióticos que antes las eliminaban. Problema de salud mundial grave (ej. MRSA, KPC).",
    defRO: "Capacitatea bacteriilor de a supraviețui acțiunii antibioticelor care înainte le eliminau. Problemă de sănătate mondială gravă (ex. MRSA, KPC).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_r_resonancia",
    termES: "Resonancia Magnética (RMN)",
    termRO: "Rezonanță Magnetică (RMN)",
    categoryColor: "bg-blue-50",
    defES: "Técnica de imagen que utiliza campos magnéticos potentes y ondas de radio para generar imágenes detalladas de órganos y tejidos blandos (cerebro, médula, articulaciones). Sin radiación.",
    defRO: "Tehnică imagistică ce utilizează câmpuri magnetice puternice și unde radio pentru a genera imagini detaliate ale organelor și țesuturilor moi (creier, măduvă, articulații). Fără radiații.",
    nanda: null
}, {
    id: "v_r_respiracion",
    termES: "Respiración",
    termRO: "Respirație",
    categoryColor: "bg-sky-50",
    defES: "Proceso de intercambio de gases. Ventilación (entrada/salida aire), Difusión (alvéolos) y Perfusión. Tipos anormales: Kussmaul (acidosis), Cheyne-Stokes (neurológico), Biot.",
    defRO: "Procesul schimbului de gaze. Ventilație (intrare/ieșire aer), Difuzie (alveole) și Perfuzie. Tipuri anormale: Kussmaul (acidoză), Cheyne-Stokes (neurologic), Biot.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_r_respirador",
    termES: "Respirador (Ventilador)",
    termRO: "Respirator (Ventilator)",
    categoryColor: "bg-stone-50",
    defES: "Máquina que proporciona ventilación mecánica a pacientes que no pueden respirar por sí mismos o lo hacen de forma insuficiente. Mantiene la oxigenación y elimina CO2.",
    defRO: "Mașină care asigură ventilație mecanică pacienților care nu pot respira singuri sau o fac insuficient. Menține oxigenarea și elimină CO2.",
    nanda: {
        codeES: "00033",
        codeRO: "00033",
        labelES: "Deterioro de la ventilación espontánea",
        labelRO: "Ventilație spontană afectată"
    }
}, {
    id: "v_r_respuesta_inmune",
    termES: "Respuesta Inmune",
    termRO: "Răspuns Imun",
    categoryColor: "bg-green-50",
    defES: "Reacción coordinada del sistema inmunitario (células y moléculas) ante la presencia de un antígeno extraño (patógeno) para neutralizarlo y eliminarlo.",
    defRO: "Reacție coordonată a sistemului imunitar (celule și molecule) la prezența unui antigen străin (patogen) pentru a-l neutraliza și elimina.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_r_retencion_urinaria",
    termES: "Retención Urinaria",
    termRO: "Retenție Urinară",
    categoryColor: "bg-yellow-50",
    defES: "Incapacidad para vaciar la vejiga completa o parcialmente, a pesar de tener orina. Aguda (emergencia dolorosa, globo vesical) o Crónica. Requiere sondaje.",
    defRO: "Incapacitatea de a goli vezica complet sau parțial, în ciuda prezenței urinei. Acută (urgență dureroasă, glob vezical) sau Cronică. Necesită sondaj.",
    nanda: {
        codeES: "00023",
        codeRO: "00023",
        labelES: "Retención urinaria",
        labelRO: "Retenție urinară"
    }
}, {
    id: "v_r_retina",
    termES: "Retina",
    termRO: "Retină",
    categoryColor: "bg-purple-50",
    defES: "Capa de tejido nervioso sensible a la luz en la parte posterior del ojo. Convierte imágenes en impulsos nerviosos enviados al cerebro. Su desprendimiento es una emergencia (ceguera).",
    defRO: "Strat de țesut nervos sensibil la lumină în partea posterioară a ochiului. Convertește imaginile în impulsuri nervoase trimise la creier. Dezlipirea sa este o urgență (orbire).",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_r_retinopatia",
    termES: "Retinopatía",
    termRO: "Retinopatie",
    categoryColor: "bg-red-50",
    defES: "Enfermedad de la retina que causa deterioro visual. Diabética (microaneurismas, hemorragias) o Hipertensiva. Causa principal de ceguera en adultos.",
    defRO: "Boală a retinei care cauzează deteriorare vizuală. Diabetică (microanevrisme, hemoragii) sau Hipertensivă. Cauză principală a orbirii la adulți.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: visual",
        labelRO: "Tulburare de percepție senzorială: vizuală"
    }
}, {
    id: "v_r_retroversion",
    termES: "Retroversión (Uterina)",
    termRO: "Retroversie (Uterină)",
    categoryColor: "bg-pink-50",
    defES: "Posición del útero inclinado hacia atrás (hacia el recto) en lugar de hacia adelante (anteversión). Variante anatómica normal, generalmente asintomática.",
    defRO: "Poziția uterului înclinat spre spate (spre rect) în loc de spre față (anteversie). Variantă anatomică normală, de obicei asimptomatică.",
    nanda: null
}, {
    id: "v_r_reumatismo",
    termES: "Reumatismo",
    termRO: "Reumatism",
    categoryColor: "bg-stone-50",
    defES: "Término general e inespecífico para referirse a cualquier trastorno doloroso que afecta a las articulaciones, músculos, tendones o huesos (ej. artritis, artrosis, fibromialgia).",
    defRO: "Termen general și nespecific pentru a se referi la orice tulburare dureroasă care afectează articulațiile, mușchii, tendoanele sau oasele (ex. artrită, artroză, fibromialgie).",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_r_rinitis",
    termES: "Rinitis",
    termRO: "Rinită",
    categoryColor: "bg-blue-50",
    defES: "Inflamación de la mucosa nasal caracterizada por rinorrea (secreción), congestión, estornudos y prurito. Alérgica (fiebre del heno) o infecciosa (resfriado común).",
    defRO: "Inflamația mucoasei nazale caracterizată prin rinoree (secreție), congestie, strănuturi și prurit. Alergică (febra fânului) sau infecțioasă (răceală comună).",
    nanda: null
}, {
    id: "v_r_rinon",
    termES: "Riñón",
    termRO: "Rinichi",
    categoryColor: "bg-yellow-50",
    defES: "Órgano par en forma de haba que filtra la sangre para eliminar desechos (orina), regula el equilibrio hidroelectrolítico, la presión arterial (renina) y produce eritropoyetina.",
    defRO: "Organ pereche în formă de boabă de fasole care filtrează sângele pentru a elimina deșeurile (urina), reglează echilibrul hidroelectrolitic, tensiunea arterială (renină) și produce eritropoietină.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_r_rinorrea",
    termES: "Rinorrea",
    termRO: "Rinoree",
    categoryColor: "bg-blue-50",
    defES: "Secreción excesiva de moco líquido por la nariz. Síntoma de rinitis, sinusitis, alergia o, si es LCR (rinorrea cerebroespinal), fractura de base de cráneo.",
    defRO: "Secreție excesivă de mucus lichid prin nas. Simptom de rinită, sinuzită, alergie sau, dacă este LCR (rinoree cerebro-spinală), fractură de bază de craniu.",
    nanda: null
}, {
    id: "v_r_ritmo_sinusal",
    termES: "Ritmo Sinusal",
    termRO: "Ritm Sinusal",
    categoryColor: "bg-green-50",
    defES: "Ritmo cardíaco normal iniciado por el nodo sinoauricular. Regular, con onda P precediendo a cada complejo QRS y frecuencia entre 60-100 lpm en reposo.",
    defRO: "Ritm cardiac normal inițiat de nodul sinoatrial. Regulat, cu unda P precedând fiecare complex QRS și frecvență între 60-100 bpm în repaus.",
    nanda: null
}, {
    id: "v_r_rotula",
    termES: "Rótula (Patela)",
    termRO: "Rotulă (Patelă)",
    categoryColor: "bg-stone-50",
    defES: "Hueso sesamoideo triangular situado en la parte anterior de la rodilla, incluido en el tendón del cuádriceps. Protege la articulación y mejora la palanca de extensión.",
    defRO: "Os sesamoid triunghiular situat în partea anterioară a genunchiului, inclus în tendonul cvadricepsului. Protejează articulația și îmbunătățește pârghia de extensie.",
    nanda: null
}, {
    id: "v_r_rubeola",
    termES: "Rubéola",
    termRO: "Rubeolă",
    categoryColor: "bg-red-50",
    defES: "Enfermedad viral contagiosa leve en niños (erupción rosada), pero peligrosa en embarazadas (Síndrome de Rubéola Congénita: sordera, cataratas, defectos cardíacos). Vacuna triple vírica.",
    defRO: "Boală virală contagioasă ușoară la copii (erupție roz), dar periculoasă la gravide (Sindromul Rubeolei Congenitale: surditate, cataractă, defecte cardiace). Vaccin ROR.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_r_ruido_adventicio",
    termES: "Ruido Respiratorio Adventicio",
    termRO: "Zgomot Respirator Supraadăugat",
    categoryColor: "bg-orange-50",
    defES: "Sonido pulmonar anormal escuchado a la auscultación. Crepitantes (líquido), Sibilancias (broncoconstricción), Roncus (moco), Estridor (obstrucción vía aérea superior).",
    defRO: "Sunet pulmonar anormal auzit la auscultație. Raluri crepitante (lichid), Sibilante (broncoconstricție), Ronflante (mucus), Stridor (obstrucție cale aeriană superioară).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_r_ruidos_intestinales",
    termES: "Ruidos Hidroaéreos (Intestinales)",
    termRO: "Zgomote Hidroaeriene (Intestinale)",
    categoryColor: "bg-yellow-50",
    defES: "Sonidos producidos por el movimiento de gases y líquidos en el intestino (peristaltismo). Ausentes en íleo paralítico; aumentados/metálicos en obstrucción mecánica.",
    defRO: "Sunete produse de mișcarea gazelor și lichidelor în intestin (peristaltism). Absente în ileus paralitic; crescute/metalice în obstrucție mecanică.",
    nanda: {
        codeES: "00196",
        codeRO: "00196",
        labelES: "Disfunción de la motilidad gastrointestinal",
        labelRO: "Disfuncție a motilității gastrointestinale"
    }
}, {
    id: "v_s_saco_amniotico",
    termES: "Saco Amniótico",
    termRO: "Sac Amniotic",
    categoryColor: "bg-blue-50",
    defES: 'Membrana delgada y resistente que envuelve al feto y contiene el líquido amniótico dentro del útero. Compuesto por amnios (interno) y corion (externo). Su ruptura ("romper aguas") marca el inicio del parto o riesgo de infección si es prematura.',
    defRO: 'Membrană subțire și rezistentă care învelește fătul și conține lichidul amniotic în interiorul uterului. Compus din amnios (intern) și corion (extern). Ruperea sa ("ruperea apei") marchează începutul nașterii sau riscul de infecție dacă este prematură.',
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_s_sacro",
    termES: "Sacro",
    termRO: "Sacru",
    categoryColor: "bg-stone-50",
    defES: "Hueso triangular grande situado en la base de la columna vertebral, formado por la fusión de 5 vértebras sacras. Se articula con los huesos ilíacos (articulación sacroilíaca) formando la pelvis posterior. Zona de alto riesgo de úlceras por presión.",
    defRO: "Os triunghiular mare situat la baza coloanei vertebrale, format prin fuziunea a 5 vertebre sacrale. Se articulează cu oasele iliace (articulația sacroiliacă) formând pelvisul posterior. Zonă cu risc ridicat de ulcere de presiune.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_s_salbutamol",
    termES: "Salbutamol",
    termRO: "Salbutamol",
    categoryColor: "bg-sky-50",
    defES: "Fármaco broncodilatador agonista beta-2 adrenérgico de acción corta (SABA). Tratamiento de rescate de primera línea para el broncoespasmo agudo en asma y EPOC. Efectos adversos: taquicardia, temblor.",
    defRO: "Medicament bronhodilatator agonist beta-2 adrenergic cu acțiune scurtă (SABA). Tratament de salvare de primă linie pentru bronhospasmul acut în astm și BPOC. Efecte adverse: tahicardie, tremur.",
    nanda: null
}, {
    id: "v_s_saliva",
    termES: "Saliva",
    termRO: "Salivă",
    categoryColor: "bg-blue-50",
    defES: "Fluido acuoso secretado por las glándulas salivales en la boca. Contiene enzimas (amilasa) para iniciar la digestión, lubrica el bolo alimenticio y protege los dientes. La xerostomía es la falta de saliva.",
    defRO: "Fluid apos secretat de glandele salivare în gură. Conține enzime (amilază) pentru a iniția digestia, lubrifiază bolul alimentar și protejează dinții. Xerostomia este lipsa de salivă.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_s_salmonella",
    termES: "Salmonella",
    termRO: "Salmonella",
    categoryColor: "bg-red-50",
    defES: "Género de bacterias gramnegativas que causan salmonelosis (gastroenteritis por alimentos contaminados) y fiebre tifoidea. Síntomas: diarrea, fiebre, cólicos abdominales.",
    defRO: "Gen de bacterii gram-negative care cauzează salmoneloză (gastroenterită prin alimente contaminate) și febră tifoidă. Simptome: diaree, febră, colici abdominale.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_s_salud_publica",
    termES: "Salud Pública",
    termRO: "Sănătate Publică",
    categoryColor: "bg-green-50",
    defES: "Ciencia y arte de prevenir enfermedades, prolongar la vida y promover la salud a través de los esfuerzos organizados de la sociedad (vacunación, saneamiento, educación sanitaria).",
    defRO: "Știința și arta de a preveni bolile, de a prelungi viața și de a promova sănătatea prin eforturile organizate ale societății (vaccinare, salubritate, educație sanitară).",
    nanda: {
        codeES: "00099",
        codeRO: "00099",
        labelES: "Mantenimiento ineficaz de la salud",
        labelRO: "Menținere ineficientă a sănătății"
    }
}, {
    id: "v_s_sangre",
    termES: "Sangre",
    termRO: "Sânge",
    categoryColor: "bg-red-50",
    defES: "Tejido conectivo líquido que circula por capilares, venas y arterias. Transporta oxígeno, nutrientes, hormonas y desechos. Compuesta por plasma (55%) y elementos formes (45%: eritrocitos, leucocitos, plaquetas).",
    defRO: "Țesut conjunctiv lichid care circulă prin capilare, vene și artere. Transportă oxigen, nutrienți, hormoni și deșeuri. Compus din plasmă (55%) și elemente figurate (45%: eritrocite, leucocite, trombocite).",
    nanda: null
}, {
    id: "v_s_sarampion",
    termES: "Sarampión",
    termRO: "Rujeolă (Pojar)",
    categoryColor: "bg-red-50",
    defES: "Enfermedad viral altamente contagiosa. Pródromos: fiebre, tos, rinitis, conjuntivitis y manchas de Koplik. Luego exantema maculopapular descendente. Prevenible con vacuna (Triple Vírica).",
    defRO: "Boală virală extrem de contagioasă. Prodrom: febră, tuse, rinită, conjunctivită și pete Koplik. Apoi exantem maculopapular descendent. Prevenibilă prin vaccin (ROR).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_s_sarcoma",
    termES: "Sarcoma",
    termRO: "Sarcom",
    categoryColor: "bg-purple-50",
    defES: "Cáncer maligno que se origina en los tejidos conectivos o de soporte del cuerpo (hueso, cartílago, grasa, músculo, vasos sanguíneos). Ej. Osteosarcoma, Liposarcoma.",
    defRO: "Cancer malign care provine din țesuturile conjunctive sau de susținere ale corpului (os, cartilaj, grăsime, mușchi, vase de sânge). Ex. Osteosarcom, Liposarcom.",
    nanda: null
}, {
    id: "v_s_sarna",
    termES: "Sarna (Escabiosis)",
    termRO: "Raie (Scabie)",
    categoryColor: "bg-orange-50",
    defES: "Infestación cutánea parasitaria causada por el ácaro Sarcoptes scabiei, que excava túneles en la epidermis. Prurito nocturno intenso y lesiones interdigitales. Requiere tratamiento de contactos y lavado de ropa.",
    defRO: "Infestare cutanată parazitară cauzată de acarianul Sarcoptes scabiei, care sapă tuneluri în epidermă. Prurit nocturn intens și leziuni interdigitale. Necesită tratamentul contacților și spălarea hainelor.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_s_saturacion_oxigeno",
    termES: "Saturación de Oxígeno (SpO2)",
    termRO: "Saturație de Oxigen (SpO2)",
    categoryColor: "bg-blue-50",
    defES: "Porcentaje de hemoglobina unida a oxígeno en la sangre arterial. Medida no invasiva mediante pulsioximetría. Normal: 95-100%. Hipoxia: <90-92%.",
    defRO: "Procentul de hemoglobină legată de oxigen în sângele arterial. Măsurătoare non-invazivă prin pulsoximetrie. Normal: 95-100%. Hipoxie: <90-92%.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_s_secrecion",
    termES: "Secreción",
    termRO: "Secreție",
    categoryColor: "bg-teal-50",
    defES: "Sustancia liberada por una célula o glándula para cumplir una función fisiológica (hormonas, saliva, moco, sudor). Diferenciar de excreción (desechos).",
    defRO: "Substanță eliberată de o celulă sau glandă pentru a îndeplini o funcție fiziologică (hormoni, salivă, mucus, transpirație). A se diferenția de excreție (deșeuri).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_s_sedacion",
    termES: "Sedación",
    termRO: "Sedare",
    categoryColor: "bg-purple-50",
    defES: "Estado inducido por fármacos (sedantes) de calma, relajación y reducción de la conciencia. Leve (ansiolisis), Moderada (consciente) o Profunda (casi anestesia). Palliative en fase terminal.",
    defRO: "Stare indusă de medicamente (sedative) de calm, relaxare și reducere a conștiinței. Ușoară (anxioliză), Moderată (conștientă) sau Profundă (aproape anestezie). Paliativă în faza terminală.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_s_seno_paranasal",
    termES: "Seno Paranasal",
    termRO: "Sinus Paranazal",
    categoryColor: "bg-stone-50",
    defES: "Cavidades llenas de aire en los huesos del cráneo alrededor de la nariz (frontal, maxilar, etmoidal, esfenoidal). Aligeran el cráneo y resuenan la voz. Su infección es la sinusitis.",
    defRO: "Cavități pline cu aer în oasele craniului din jurul nasului (frontal, maxilar, etmoidal, sfenoidal). Ușurează craniul și rezonează vocea. Infecția lor este sinuzita.",
    nanda: null
}, {
    id: "v_s_sepsis",
    termES: "Sepsis (Septicemia)",
    termRO: "Sepsis (Septicemie)",
    categoryColor: "bg-red-50",
    defES: "Respuesta inmunitaria desregulada y extrema a una infección que causa disfunción orgánica potencialmente mortal (SOFA). Si persiste hipotensión pese a fluidos, es Shock Séptico.",
    defRO: "Răspuns imunitar dereglat și extrem la o infecție care cauzează disfuncție organică potențial letală (SOFA). Dacă persistă hipotensiunea în ciuda fluidelor, este Șoc Septic.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_s_serotonina",
    termES: "Serotonina (5-HT)",
    termRO: "Serotonină",
    categoryColor: "bg-indigo-50",
    defES: "Neurotransmisor clave en la regulación del estado de ánimo, sueño, apetito y dolor. Los antidepresivos ISRS aumentan sus niveles. También interviene en la coagulación y motilidad intestinal.",
    defRO: "Neurotransmițător cheie în reglarea stării de spirit, somnului, apetitului și durerii. Antidepresivele ISRS cresc nivelurile sale. Intervine și în coagulare și motilitate intestinală.",
    nanda: null
}, {
    id: "v_s_shock",
    termES: "Shock (Choque)",
    termRO: "Șoc",
    categoryColor: "bg-red-50",
    defES: "Estado crítico de hipoperfusión tisular generalizada. El aporte de oxígeno es insuficiente para la demanda metabólica, llevando a metabolismo anaerobio y fallo multiorgánico.",
    defRO: "Stare critică de hipoperfuzie tisulară generalizată. Aportul de oxigen este insuficient pentru cererea metabolică, ducând la metabolism anaerob și insuficiență multiorganică.",
    nanda: {
        codeES: "00205",
        codeRO: "00205",
        labelES: "Riesgo de shock",
        labelRO: "Risc de șoc"
    }
}, {
    id: "v_s_shock_anafilactico",
    termES: "Shock Anafiláctico",
    termRO: "Șoc Anafilactic",
    categoryColor: "bg-red-50",
    defES: "Shock distributivo causado por una reacción alérgica sistémica severa (IgE). Vasodilatación masiva, hipotensión y broncoespasmo. Tto: Adrenalina IM inmediata.",
    defRO: "Șoc distributiv cauzat de o reacție alergică sistemică severă (IgE). Vasodilatație masivă, hipotensiune și bronhospasm. Trat: Adrenalină IM imediată.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_s_shock_cardiogenico",
    termES: "Shock Cardiogénico",
    termRO: "Șoc Cardiogen",
    categoryColor: "bg-red-50",
    defES: "Fallo de la bomba cardíaca (ej. infarto masivo) que impide mantener el gasto cardíaco. Hipotensión, congestión pulmonar, piel fría y oliguria.",
    defRO: "Eșec al pompei cardiace (ex. infarct masiv) care împiedică menținerea debitului cardiac. Hipotensiune, congestie pulmonară, piele rece și oligurie.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_s_shock_hipovolemico",
    termES: "Shock Hipovolémico",
    termRO: "Șoc Hipovolemic",
    categoryColor: "bg-red-50",
    defES: "Shock causado por pérdida de volumen sanguíneo (hemorragia) o fluidos (deshidratación, quemaduras). Taquicardia, hipotensión, palidez. Requiere reposición de volumen.",
    defRO: "Șoc cauzat de pierderea volumului sanguin (hemoragie) sau a fluidelor (deshidratare, arsuri). Tahicardie, hipotensiune, paloare. Necesită înlocuirea volumului.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_s_shock_septico",
    termES: "Shock Séptico",
    termRO: "Șoc Septic",
    categoryColor: "bg-red-50",
    defES: "Subtipo de sepsis con anomalías circulatorias y celulares profundas. Hipotensión persistente que requiere vasopresores (noradrenalina) para mantener PAM >65 mmHg y lactato >2 mmol/L.",
    defRO: "Subtip de sepsis cu anomalii circulatorii și celulare profunde. Hipotensiune persistentă care necesită vasopresoare (noradrenalină) pentru a menține PAM >65 mmHg și lactat >2 mmol/L.",
    nanda: {
        codeES: "00205",
        codeRO: "00205",
        labelES: "Riesgo de shock",
        labelRO: "Risc de șoc"
    }
}, {
    id: "v_s_sialorrea",
    termES: "Sialorrea (Ptialismo)",
    termRO: "Sialoree (Ptialism)",
    categoryColor: "bg-blue-50",
    defES: "Producción excesiva de saliva o incapacidad para tragarla (babeo). Causas: dentición, embarazo, Parkinson, intoxicación, rabia, parálisis cerebral.",
    defRO: "Producție excesivă de salivă sau incapacitatea de a o înghiți (bălos). Cauze: dentiție, sarcină, Parkinson, intoxicație, rabie, paralizie cerebrală.",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_s_sibilancia",
    termES: "Sibilancia",
    termRO: "Sibilanță (Wheezing)",
    categoryColor: "bg-sky-50",
    defES: "Ruido respiratorio agudo y silbante, escuchado predominantemente en la espiración, causado por el estrechamiento de las vías aéreas (broncoespasmo). Típico de asma y EPOC.",
    defRO: "Zgomot respirator ascuțit și șuierător, auzit predominant în expirație, cauzat de îngustarea căilor aeriene (bronhospasm). Tipic pentru astm și BPOC.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_s_sida",
    termES: "SIDA (Síndrome de Inmunodeficiencia Adquirida)",
    termRO: "SIDA (Sindromul Imunodeficienței Dobândite)",
    categoryColor: "bg-purple-50",
    defES: "Etapa avanzada de la infección por VIH, caracterizada por un recuento de CD4 <200/mm³ o la aparición de infecciones oportunistas (neumocistosis, toxoplasmosis, Kaposi).",
    defRO: "Etapă avansată a infecției cu HIV, caracterizată printr-un număr de CD4 <200/mm³ sau apariția infecțiilor oportuniste (pneumocistoză, toxoplasmoză, Kaposi).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_s_sifilis",
    termES: "Sífilis",
    termRO: "Sifilis",
    categoryColor: "bg-red-50",
    defES: "ITS causada por Treponema pallidum. Primaria (chancro duro indoloro), Secundaria (exantema palmoplantar), Latente y Terciaria (neurosífilis, gomas). Tratable con penicilina.",
    defRO: "ITS cauzată de Treponema pallidum. Primară (șancru dur nedureros), Secundară (exantem palmoplantar), Latentă și Terțiară (neurosifilis, gome). Tratabilă cu penicilină.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_s_signos_vitales",
    termES: "Signos Vitales",
    termRO: "Semne Vitale (Funcții Vitale)",
    categoryColor: "bg-stone-50",
    defES: "Indicadores fisiológicos básicos del estado de salud: Temperatura, Pulso (Frecuencia Cardíaca), Frecuencia Respiratoria, Presión Arterial y Dolor (5º signo). La oximetría suele incluirse.",
    defRO: "Indicatori fiziologici de bază ai stării de sănătate: Temperatură, Puls (Frecvență Cardiacă), Frecvență Respiratorie, Tensiune Arterială și Durere (al 5-lea semn). Oximetria este de obicei inclusă.",
    nanda: null
}, {
    id: "v_s_simpatice",
    termES: "Simpático (Sistema Nervioso)",
    termRO: "Simpatic (Sistem Nervos)",
    categoryColor: "bg-orange-50",
    defES: 'División del sistema nervioso autónomo que prepara al cuerpo para la acción ("lucha o huida"). Aumenta frecuencia cardíaca, dilata pupilas y bronquios, reduce digestión.',
    defRO: 'Diviziune a sistemului nervos autonom care pregătește corpul pentru acțiune ("luptă sau fugi"). Crește frecvența cardiacă, dilată pupilele și bronhiile, reduce digestia.',
    nanda: null
}, {
    id: "v_s_sinapsis",
    termES: "Sinapsis",
    termRO: "Sinapsă",
    categoryColor: "bg-indigo-50",
    defES: "Unión funcional entre dos neuronas (o neurona y músculo) donde se transmite el impulso nervioso mediante neurotransmisores (química) o iones (eléctrica).",
    defRO: "Joncțiune funcțională între doi neuroni (sau neuron și mușchi) unde impulsul nervos este transmis prin neurotransmițători (chimică) sau ioni (electrică).",
    nanda: null
}, {
    id: "v_s_sincope",
    termES: "Síncope",
    termRO: "Sincopă",
    categoryColor: "bg-gray-50",
    defES: "Pérdida brusca y transitoria de la conciencia y del tono postural, con recuperación espontánea y completa, debida a hipoperfusión cerebral global. Vasovagal, ortostático o cardiogénico.",
    defRO: "Pierdere bruscă și tranzitorie a conștienței și a tonusului postural, cu recuperare spontană și completă, datorată hipoperfuziei cerebrale globale. Vasovagală, ortostatică sau cardiogenă.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_s_sindrome_down",
    termES: "Síndrome de Down (Trisomía 21)",
    termRO: "Sindromul Down (Trisomia 21)",
    categoryColor: "bg-green-50",
    defES: "Trastorno genético causado por una copia extra del cromosoma 21. Rasgos faciales característicos, hipotonía, discapacidad intelectual variable y riesgo de defectos cardíacos.",
    defRO: "Tulburare genetică cauzată de o copie suplimentară a cromozomului 21. Trăsături faciale caracteristice, hipotonie, dizabilitate intelectuală variabilă și risc de defecte cardiace.",
    nanda: {
        codeES: "00112",
        codeRO: "00112",
        labelES: "Riesgo de retraso en el desarrollo",
        labelRO: "Risc de întârziere în dezvoltare"
    }
}, {
    id: "v_s_sintoma",
    termES: "Síntoma",
    termRO: "Simptom",
    categoryColor: "bg-purple-50",
    defES: "Manifestación subjetiva de una enfermedad o alteración percibida por el paciente (ej. dolor, náuseas, mareo), a diferencia del signo (objetivo).",
    defRO: "Manifestare subiectivă a unei boli sau alterări percepută de pacient (ex. durere, greață, amețeală), spre deosebire de semn (obiectiv).",
    nanda: null
}, {
    id: "v_s_sinusitis",
    termES: "Sinusitis",
    termRO: "Sinuzită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de la mucosa de los senos paranasales. Generalmente tras un resfriado. Dolor facial, congestión, rinorrea purulenta, fiebre. Aguda o crónica.",
    defRO: "Inflamația mucoasei sinusurilor paranazale. De obicei după o răceală. Durere facială, congestie, rinoree purulentă, febră. Acută sau cronică.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_s_sistole",
    termES: "Sístole",
    termRO: "Sistolă",
    categoryColor: "bg-red-50",
    defES: "Fase de contracción del músculo cardíaco para bombear sangre. Sístole auricular (llena ventrículos) y Sístole ventricular (expulsa sangre a aorta/pulmonar).",
    defRO: "Faza de contracție a mușchiului cardiac pentru a pompa sânge. Sistolă atrială (umple ventriculele) și Sistolă ventriculară (expulzează sângele în aortă/pulmonară).",
    nanda: null
}, {
    id: "v_s_sodio",
    termES: "Sodio (Na+)",
    termRO: "Sodiu (Na+)",
    categoryColor: "bg-yellow-50",
    defES: "Principal catión extracelular. Regula el volumen de sangre, presión arterial y equilibrio osmótico. Normal: 135-145 mEq/L. Hipernatremia/Hiponatremia alteran la función cerebral.",
    defRO: "Principalul cation extracelular. Reglează volumul de sânge, tensiunea arterială și echilibrul osmotic. Normal: 135-145 mEq/L. Hipernatremia/Hiponatremia alterează funcția cerebrală.",
    nanda: {
        codeES: "00195",
        codeRO: "00195",
        labelES: "Riesgo de desequilibrio electrolítico",
        labelRO: "Risc de dezechilibru electrolitic"
    }
}, {
    id: "v_s_solucion_fisiologica",
    termES: "Solución Fisiológica (Suero Salino)",
    termRO: "Soluție Fiziologică (Ser Fiziologic)",
    categoryColor: "bg-teal-50",
    defES: "Solución isotónica de cloruro de sodio al 0.9% en agua. Compatible con la sangre. Usada para rehidratación, reposición de volumen, dilución de fármacos y lavado de heridas.",
    defRO: "Soluție izotonică de clorură de sodiu 0,9% în apă. Compatibilă cu sângele. Utilizată pentru rehidratare, înlocuirea volumului, diluarea medicamentelor și spălarea plăgilor.",
    nanda: null
}, {
    id: "v_s_solucion_hipertonica",
    termES: "Solución Hipertónica",
    termRO: "Soluție Hipertonică",
    categoryColor: "bg-teal-50",
    defES: "Solución con mayor osmolaridad que el plasma (ej. NaCl 3%, Glucosado 50%). Atrae agua del espacio intracelular al intravascular (deshidrata células). Uso crítico (edema cerebral).",
    defRO: "Soluție cu osmolaritate mai mare decât plasma (ex. NaCl 3%, Glucozat 50%). Atrage apa din spațiul intracelular în cel intravascular (deshidratează celulele). Utilizare critică (edem cerebral).",
    nanda: null
}, {
    id: "v_s_somatizacion",
    termES: "Somatización",
    termRO: "Somatizare",
    categoryColor: "bg-purple-50",
    defES: "Expresión de conflictos psicológicos o estrés a través de síntomas físicos (dolor, molestias gastrointestinales) sin causa orgánica demostrable.",
    defRO: "Exprimarea conflictelor psihologice sau stresului prin simptome fizice (durere, disconfort gastrointestinal) fără cauză organică demonstrabilă.",
    nanda: {
        codeES: "00069",
        codeRO: "00069",
        labelES: "Afrontamiento ineficaz",
        labelRO: "Coping ineficient"
    }
}, {
    id: "v_s_sonda_foley",
    termES: "Sonda Foley (Vesical)",
    termRO: "Sondă Foley (Vezicală)",
    categoryColor: "bg-blue-50",
    defES: "Catéter flexible de retención introducido en la vejiga a través de la uretra. Tiene un balón inflable en la punta para evitar que se salga. Permite drenaje urinario continuo.",
    defRO: "Cateter flexibil de retenție introdus în vezică prin uretră. Are un balon gonflabil la vârf pentru a preveni ieșirea. Permite drenajul urinar continuu.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_s_sonda_nasogastrica",
    termES: "Sonda Nasogástrica (SNG)",
    termRO: "Sondă Nazogastrică (SNG)",
    categoryColor: "bg-blue-50",
    defES: "Tubo insertado por la nariz hasta el estómago. Usos: Alimentación enteral, administración de medicamentos, lavado gástrico o descompresión (Levin/Salem).",
    defRO: "Tub introdus prin nas până în stomac. Utilizări: Alimentație enterală, administrarea medicamentelor, lavaj gastric sau decompresie (Levin/Salem).",
    nanda: {
        codeES: "00039",
        codeRO: "00039",
        labelES: "Riesgo de aspiración",
        labelRO: "Risc de aspirație"
    }
}, {
    id: "v_s_soplo_cardiaco",
    termES: "Soplo Cardíaco",
    termRO: "Suflu Cardiac",
    categoryColor: "bg-red-50",
    defES: "Sonido sibilante o áspero escuchado durante el latido cardíaco, causado por flujo sanguíneo turbulento (estenosis/insuficiencia valvular o defectos septales). Sistólico o Diastólico.",
    defRO: "Sunet șuierător sau aspru auzit în timpul bătăii inimii, cauzat de fluxul sanguin turbulent (stenoză/insuficiență valvulară sau defecte septale). Sistolic sau Diastolic.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_s_soporte_vital",
    termES: "Soporte Vital",
    termRO: "Suport Vital",
    categoryColor: "bg-red-50",
    defES: "Medidas de emergencia para sostener la vida tras un fallo cardíaco o respiratorio. Básico (SVB/BLS: RCP, DEA) y Avanzado (SVA/ACLS: fármacos, vía aérea avanzada).",
    defRO: "Măsuri de urgență pentru susținerea vieții după o insuficiență cardiacă sau respiratorie. De bază (SVB/BLS: RCP, DEA) și Avansat (SVA/ACLS: medicamente, cale aeriană avansată).",
    nanda: null
}, {
    id: "v_s_subcutaneo",
    termES: "Subcutáneo (SC)",
    termRO: "Subcutanat (SC)",
    categoryColor: "bg-teal-50",
    defES: "Vía de administración de fármacos en el tejido adiposo bajo la piel (hipodermis). Absorción lenta y sostenida. Ej. Insulina, Heparina, Vacunas virales vivas.",
    defRO: "Cale de administrare a medicamentelor în țesutul adipos de sub piele (hipoderm). Absorbție lentă și susținută. Ex. Insulină, Heparină, Vaccinuri virale vii.",
    nanda: null
}, {
    id: "v_s_suero",
    termES: "Suero Sanguíneo",
    termRO: "Ser Sanguin",
    categoryColor: "bg-yellow-50",
    defES: "Componente líquido de la sangre que queda tras la coagulación (plasma sin fibrinógeno ni factores de coagulación). Se usa para análisis bioquímicos y serológicos.",
    defRO: "Component lichid al sângelui care rămâne după coagulare (plasmă fără fibrinogen sau factori de coagulare). Se folosește pentru analize biochimice și serologice.",
    nanda: null
}, {
    id: "v_s_suicidio",
    termES: "Suicidio",
    termRO: "Sinucidere",
    categoryColor: "bg-purple-50",
    defES: 'Acto de quitarse la propia vida intencionalmente. Emergencia psiquiátrica. Factores riesgo: depresión, intentos previos, desesperanza. "Ideación suicida" es el pensamiento.',
    defRO: 'Actul de a-și lua propria viață în mod intenționat. Urgență psihiatrică. Factori de risc: depresie, tentative anterioare, disperare. "Ideația suicidară" este gândul.',
    nanda: {
        codeES: "00150",
        codeRO: "00150",
        labelES: "Riesgo de suicidio",
        labelRO: "Risc de sinucidere"
    }
}, {
    id: "v_s_supinacion",
    termES: "Supinación",
    termRO: "Supinație",
    categoryColor: "bg-stone-50",
    defES: "Rotación del antebrazo y mano para que la palma mire hacia arriba o adelante. Posición anatómica estándar. En el pie, incluye inversión y aducción (apoyo borde externo).",
    defRO: "Rotația antebrațului și mâinii astfel încât palma să privească în sus sau înainte. Poziție anatomică standard. La picior, include inversiune și adducție (sprijin pe marginea externă).",
    nanda: null
}, {
    id: "v_s_supositorio",
    termES: "Supositorio",
    termRO: "Supozitor",
    categoryColor: "bg-teal-50",
    defES: "Forma farmacéutica sólida cónica que se inserta en el recto, donde se funde a temperatura corporal. Absorción sistémica (evita parcialmente hígado) o local (laxante, hemorroides).",
    defRO: "Formă farmaceutică solidă conică introdusă în rect, unde se topește la temperatura corpului. Absorbție sistemică (evită parțial ficatul) sau locală (laxativ, hemoroizi).",
    nanda: null
}, {
    id: "v_s_surfactante",
    termES: "Surfactante Pulmonar",
    termRO: "Surfactant Pulmonar",
    categoryColor: "bg-sky-50",
    defES: "Sustancia lipoproteica producida por neumocitos tipo II que reduce la tensión superficial alveolar, evitando el colapso pulmonar. Su déficit causa membrana hialina en prematuros.",
    defRO: "Substanță lipoproteică produsă de pneumocitele de tip II care reduce tensiunea superficială alveolară, prevenind colapsul pulmonar. Deficitul său cauzează boala membranelor hialine la prematuri.",
    nanda: {
        codeES: "00030",
        codeRO: "00030",
        labelES: "Deterioro del intercambio de gases",
        labelRO: "Schimb de gaze afectat"
    }
}, {
    id: "v_s_sutura",
    termES: "Sutura",
    termRO: "Sutură",
    categoryColor: "bg-stone-50",
    defES: "Material (hilo) o técnica utilizada para aproximar los bordes de una herida y favorecer la cicatrización. Absorbible (catgut, vicryl) o No absorbible (seda, nylon). También la unión inmóvil entre huesos del cráneo.",
    defRO: "Material (fir) sau tehnică utilizată pentru a apropia marginile unei plăgi și a favoriza cicatrizarea. Absorbabilă (catgut, vicryl) sau Neabsorbabilă (mătase, nailon). De asemenea, unirea imobilă dintre oasele craniului.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_t_tabaquismo",
    termES: "Tabaquismo",
    termRO: "Tabagism (Fumat)",
    categoryColor: "bg-gray-50",
    defES: "Adicción crónica al tabaco (nicotina). Principal causa prevenible de enfermedad y muerte (cáncer pulmón, EPOC, cardiopatía). El humo de segunda mano también es nocivo.",
    defRO: "Dependență cronică de tutun (nicotină). Principala cauză prevenibilă de boală și deces (cancer pulmonar, BPOC, cardiopatie). Fumul la mâna a doua este de asemenea nociv.",
    nanda: {
        codeES: "00188",
        codeRO: "00188",
        labelES: "Tendencia a adoptar conductas de riesgo para la salud",
        labelRO: "Tendință de a adopta comportamente de risc pentru sănătate"
    }
}, {
    id: "v_t_talamo",
    termES: "Tálamo",
    termRO: "Talamus",
    categoryColor: "bg-indigo-50",
    defES: "Estructura cerebral (diencéfalo) que actúa como estación de relevo para casi toda la información sensorial (excepto olfato) hacia la corteza cerebral. Regula sueño y alerta.",
    defRO: "Structură cerebrală (diencefal) care acționează ca stație de releu pentru aproape toate informațiile senzoriale (cu excepția mirosului) către cortexul cerebral. Reglează somnul și alerta.",
    nanda: null
}, {
    id: "v_t_tapaponamiento",
    termES: "Taponamiento Cardíaco",
    termRO: "Tamponadă Cardiacă",
    categoryColor: "bg-red-50",
    defES: "Emergencia vital causada por acumulación rápida de líquido o sangre en el pericardio, comprimiendo el corazón e impidiendo su llenado. Tríada de Beck: hipotensión, ruidos apagados, ingurgitación yugular.",
    defRO: "Urgență vitală cauzată de acumularea rapidă de lichid sau sânge în pericard, comprimând inima și împiedicând umplerea acesteia. Triada Beck: hipotensiune, zgomote estompate, turgescență jugulară.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_t_taquicardia",
    termES: "Taquicardia",
    termRO: "Tahicardie",
    categoryColor: "bg-red-50",
    defES: "Frecuencia cardíaca >100 lpm en reposo. Sinusal (fiebre, ejercicio), Supraventricular (auricular) o Ventricular (potencialmente mortal). Reduce el tiempo de llenado diastólico.",
    defRO: "Frecvență cardiacă >100 bpm în repaus. Sinusală (febră, exercițiu), Supraventriculară (atrială) sau Ventriculară (potențial letală). Reduce timpul de umplere diastolică.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_t_taquipnea",
    termES: "Taquipnea",
    termRO: "Tahipnee",
    categoryColor: "bg-sky-50",
    defES: "Frecuencia respiratoria anormalmente rápida (>20 rpm en adultos). Signo temprano de hipoxia, fiebre, dolor, ansiedad, acidosis o insuficiencia cardíaca/respiratoria.",
    defRO: "Frecvență respiratorie anormal de rapidă (>20 rpm la adulți). Semn timpuriu de hipoxie, febră, durere, anxietate, acidoză sau insuficiență cardiacă/respiratorie.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_t_tejido",
    termES: "Tejido",
    termRO: "Țesut",
    categoryColor: "bg-green-50",
    defES: "Conjunto de células similares que realizan una función específica. 4 tipos básicos: Epitelial (cobertura), Conectivo (soporte/sangre/hueso), Muscular (movimiento) y Nervioso (control).",
    defRO: "Ansamblu de celule similare care îndeplinesc o funcție specifică. 4 tipuri de bază: Epitelial (acoperire), Conjunctiv (suport/sânge/os), Muscular (mișcare) și Nervos (control).",
    nanda: null
}, {
    id: "v_t_tejido_granulacion",
    termES: "Tejido de Granulación",
    termRO: "Țesut de Granulație",
    categoryColor: "bg-pink-50",
    defES: "Tejido conectivo nuevo, rojo, brillante y vascularizado (aspecto de frambuesa) que se forma en la base de una herida durante la fase proliferativa de curación. Signo de buena evolución.",
    defRO: "Țesut conjunctiv nou, roșu, lucios și vascularizat (aspect de zmeură) care se formează la baza unei plăgi în timpul fazei proliferative de vindecare. Semn de evoluție bună.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_t_temperatura",
    termES: "Temperatura Corporal",
    termRO: "Temperatură Corporală",
    categoryColor: "bg-orange-50",
    defES: "Equilibrio entre el calor producido (termogénesis) y perdido (termólisis). Normal axilar: 36-37°C. Febrícula (37-38), Fiebre (>38), Hipotermia (<35). Regulada por hipotálamo.",
    defRO: "Echilibru între căldura produsă (termogeneză) și pierdută (termoliză). Normală axilară: 36-37°C. Subfebrilitate (37-38), Febră (>38), Hipotermie (<35). Reglată de hipotalamus.",
    nanda: {
        codeES: "00008",
        codeRO: "00008",
        labelES: "Termorregulación ineficaz",
        labelRO: "Termoreglare ineficientă"
    }
}, {
    id: "v_t_tendon",
    termES: "Tendón",
    termRO: "Tendon",
    categoryColor: "bg-stone-50",
    defES: "Banda fuerte de tejido conectivo fibroso que une el músculo al hueso, transmitiendo la fuerza para generar movimiento. Tendón de Aquiles (el más fuerte). Tendinitis: inflamación.",
    defRO: "Bandă puternică de țesut conjunctiv fibros care unește mușchiul de os, transmițând forța pentru a genera mișcare. Tendonul lui Ahile (cel mai puternic). Tendinită: inflamație.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_t_terapia_ocupacional",
    termES: "Terapia Ocupacional",
    termRO: "Terapie Ocupațională",
    categoryColor: "bg-green-50",
    defES: "Disciplina socio-sanitaria que evalúa y trata a personas con problemas físicos, psíquicos o sensoriales para dotarles de autonomía en las actividades de la vida diaria (AVD).",
    defRO: "Disciplină socio-sanitară care evaluează și tratează persoanele cu probleme fizice, psihice sau senzoriale pentru a le oferi autonomie în activitățile vieții zilnice (AVZ).",
    nanda: {
        codeES: "00108",
        codeRO: "00108",
        labelES: "Déficit de autocuidado: Baño",
        labelRO: "Deficit de auto-îngrijire: Baie"
    }
}, {
    id: "v_t_teratogeno",
    termES: "Teratógeno",
    termRO: "Teratogen",
    categoryColor: "bg-purple-50",
    defES: "Agente (fármaco, virus, radiación, químico) capaz de causar defectos congénitos o malformaciones en el feto si la madre se expone durante el embarazo (especialmente 1º trimestre). Ej. Talidomida, Rubeola.",
    defRO: "Agent (medicament, virus, radiații, chimic) capabil să cauzeze defecte congenitale sau malformații fătului dacă mama este expusă în timpul sarcinii (în special trimestrul 1). Ex. Talidomidă, Rubeolă.",
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_t_test_mantoux",
    termES: "Test de Mantoux (PPD)",
    termRO: "Test Mantoux (IDR la Tuberculină)",
    categoryColor: "bg-teal-50",
    defES: "Prueba cutánea para detectar infección por tuberculosis (latente o activa). Inyección intradérmica de derivados proteicos purificados. Se lee la induración (no el eritema) a las 48-72h.",
    defRO: "Test cutanat pentru detectarea infecției cu tuberculoză (latentă sau activă). Injecție intradermică de derivate proteice purificate. Se citește indurația (nu eritemul) la 48-72h.",
    nanda: null
}, {
    id: "v_t_testiculo",
    termES: "Testículo",
    termRO: "Testicul",
    categoryColor: "bg-blue-50",
    defES: "Gónada masculina par situada en el escroto. Produce espermatozoides (espermatogénesis) y testosterona. La criptorquidia es la falta de descenso testicular (riesgo cáncer).",
    defRO: "Gonadă masculină pereche situată în scrot. Produce spermatozoizi (spermatogeneză) și testosteron. Criptorhidia este lipsa coborârii testiculare (risc cancer).",
    nanda: null
}, {
    id: "v_t_tetanos",
    termES: "Tétanos",
    termRO: "Tetanos",
    categoryColor: "bg-red-50",
    defES: "Enfermedad grave del sistema nervioso causada por la toxina de Clostridium tetani (en tierra/óxido). Provoca espasmos musculares dolorosos (trismo, opistótonos) y rigidez. Prevenible con vacuna.",
    defRO: "Boală gravă a sistemului nervos cauzată de toxina Clostridium tetani (în pământ/rugină). Provoacă spasme musculare dureroase (trismus, opistotonus) și rigiditate. Prevenibilă cu vaccin.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_t_tetralogia_fallot",
    termES: "Tetralogía de Fallot",
    termRO: "Tetralogia Fallot",
    categoryColor: "bg-blue-50",
    defES: 'Cardiopatía congénita cianótica más común ("niños azules"). 4 defectos: Estenosis pulmonar, CIV, Aorta cabalgante e Hipertrofia VD. Requiere cirugía correctora.',
    defRO: 'Cardiopatie congenitală cianotică cea mai comună ("copii albaștri"). 4 defecte: Stenoză pulmonară, DIV, Aortă călare și Hipertrofie VD. Necesită chirurgie corectoare.',
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_t_tetraplejia",
    termES: "Tetraplejia (Cuadriplejia)",
    termRO: "Tetraplegie (Quadriplegie)",
    categoryColor: "bg-stone-50",
    defES: "Parálisis de las cuatro extremidades y el tronco, causada por lesión de la médula espinal cervical. Pérdida de función motora y sensitiva. Gran dependencia de cuidados.",
    defRO: "Paralizia celor patru membre și a trunchiului, cauzată de leziunea măduvei spinării cervicale. Pierderea funcției motorii și senzitive. Dependență mare de îngrijiri.",
    nanda: {
        codeES: "00085",
        codeRO: "00085",
        labelES: "Deterioro de la movilidad física",
        labelRO: "Mobilitate fizică afectată"
    }
}, {
    id: "v_t_tiamina",
    termES: "Tiamina (Vitamina B1)",
    termRO: "Tiamină (Vitamina B1)",
    categoryColor: "bg-yellow-50",
    defES: "Vitamina hidrosoluble esencial para el metabolismo de carbohidratos y función nerviosa. Su déficit causa Beriberi o Encefalopatía de Wernicke (en alcohólicos).",
    defRO: "Vitamină hidrosolubilă esențială pentru metabolismul carbohidraților și funcția nervoasă. Deficitul său cauzează Beriberi sau Encefalopatie Wernicke (la alcoolici).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_t_tibia",
    termES: "Tibia",
    termRO: "Tibie",
    categoryColor: "bg-stone-50",
    defES: "Hueso mayor y medial de la pierna (espinilla), que soporta el peso del cuerpo. Se articula con el fémur (rodilla) y el astrágalo (tobillo).",
    defRO: "Osul mai mare și medial al gambei, care susține greutatea corpului. Se articulează cu femurul (genunchi) și astragalul (gleznă).",
    nanda: null
}, {
    id: "v_t_tiempo_protrombina",
    termES: "Tiempo de Protrombina (TP)",
    termRO: "Timp de Protrombină (TP)",
    categoryColor: "bg-red-50",
    defES: "Prueba de coagulación (vía extrínseca). Se expresa en segundos o INR (Ratio Internacional Normalizada). INR se usa para ajustar dosis de anticoagulantes orales (Sintrom). Normal INR ~1; Terapéutico 2-3.",
    defRO: "Test de coagulare (calea extrinsecă). Se exprimă în secunde sau INR (Raport Internațional Normalizat). INR se folosește pentru ajustarea dozelor de anticoagulante orale. Normal INR ~1; Terapeutic 2-3.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_t_timo",
    termES: "Timo",
    termRO: "Timus",
    categoryColor: "bg-green-50",
    defES: "Órgano linfoide primario en el mediastino superior. Lugar de maduración de los linfocitos T (inmunidad celular). Muy activo en la infancia, se atrofia en la edad adulta.",
    defRO: "Organ limfoid primar în mediastinul superior. Locul de maturare a limfocitelor T (imunitate celulară). Foarte activ în copilărie, se atrofiază la vârsta adultă.",
    nanda: null
}, {
    id: "v_t_timpano",
    termES: "Tímpano (Membrana Timpánica)",
    termRO: "Timpan (Membrană Timpanică)",
    categoryColor: "bg-gray-50",
    defES: "Membrana delgada semitransparente que separa el oído externo del medio. Vibra con el sonido y transmite la vibración a los huesecillos. Su perforación causa hipoacusia.",
    defRO: "Membrană subțire semitransparentă care separă urechea externă de cea medie. Vibrează la sunet și transmite vibrația oscioarelor. Perforarea sa cauzează hipoacuzie.",
    nanda: null
}, {
    id: "v_t_tina",
    termES: "Tiña (Tinea)",
    termRO: "Pecingine (Tinea)",
    categoryColor: "bg-pink-50",
    defES: "Infección fúngica superficial de la piel (dermatofitosis). Capitis (cabeza), Corporis (cuerpo, anillos rojos), Pedis (pie de atleta), Cruris (ingles). Pruriginosa.",
    defRO: "Infecție fungică superficială a pielii (dermatofitoză). Capitis (cap), Corporis (corp, inele roșii), Pedis (picior de atlet), Cruris (inghinal). Pruriginoasă.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_t_tiroides",
    termES: "Tiroides",
    termRO: "Tiroidă",
    categoryColor: "bg-purple-50",
    defES: "Glándula endocrina en forma de mariposa en el cuello. Produce T3 y T4 (regulan metabolismo) y Calcitonina (calcio). Bocio (agrandamiento). Hipo/Hipertiroidismo.",
    defRO: "Glandă endocrină în formă de fluture la nivelul gâtului. Produce T3 și T4 (reglează metabolismul) și Calcitonină (calciu). Gușă (mărire). Hipo/Hipertiroidism.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_t_tolerancia",
    termES: "Tolerancia (Farmacológica)",
    termRO: "Toleranță (Farmacologică)",
    categoryColor: "bg-stone-50",
    defES: "Disminución de la respuesta a un fármaco tras su administración repetida, requiriendo dosis mayores para obtener el mismo efecto (ej. opioides, benzodiacepinas).",
    defRO: "Scăderea răspunsului la un medicament după administrarea sa repetată, necesitând doze mai mari pentru a obține același efect (ex. opioide, benzodiazepine).",
    nanda: null
}, {
    id: "v_t_tomografia",
    termES: "Tomografía Computarizada (TAC)",
    termRO: "Tomografie Computerizată (CT)",
    categoryColor: "bg-blue-50",
    defES: "Técnica de imagen que utiliza rayos X giratorios y ordenadores para crear imágenes transversales (cortes) detalladas del cuerpo. Rápida, ideal para urgencias (trauma, ictus, TEP).",
    defRO: "Tehnică imagistică ce utilizează raze X rotative și computere pentru a crea imagini transversale (secțiuni) detaliate ale corpului. Rapidă, ideală pentru urgențe (traumă, AVC, TEP).",
    nanda: null
}, {
    id: "v_t_toracocentesis",
    termES: "Toracocentesis",
    termRO: "Toracocenteză",
    categoryColor: "bg-teal-50",
    defES: "Punción quirúrgica de la pared torácica para extraer líquido o aire del espacio pleural. Diagnóstica (analizar líquido) o Terapéutica (aliviar disnea en derrame masivo).",
    defRO: "Puncție chirurgicală a peretelui toracic pentru a extrage lichid sau aer din spațiul pleural. Diagnostică (analiza lichidului) sau Terapeutică (ameliorarea dispneei în revărsat masiv).",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_t_torax",
    termES: "Tórax (Pecho)",
    termRO: "Torace (Piept)",
    categoryColor: "bg-stone-50",
    defES: "Parte del cuerpo entre el cuello y el abdomen. Contiene la cavidad torácica (corazón, pulmones), protegida por la caja torácica (costillas, esternón, vértebras).",
    defRO: "Partea corpului între gât și abdomen. Conține cavitatea toracică (inimă, plămâni), protejată de cutia toracică (coaste, stern, vertebre).",
    nanda: null
}, {
    id: "v_t_torsion_testicular",
    termES: "Torsión Testicular",
    termRO: "Torsiune Testiculară",
    categoryColor: "bg-red-50",
    defES: "Giro del cordón espermático que corta el riego sanguíneo al testículo. Dolor escrotal agudo y súbito. Emergencia quirúrgica (<6 horas) para salvar el testículo.",
    defRO: "Răsucirea cordonului spermatic care întrerupe fluxul sanguin către testicul. Durere scrotală acută și bruscă. Urgență chirurgicală (<6 ore) pentru a salva testiculul.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_t_tos",
    termES: "Tos",
    termRO: "Tuse",
    categoryColor: "bg-orange-50",
    defES: "Reflejo de defensa brusco y ruidoso para limpiar las vías respiratorias de secreciones o cuerpos extraños. Seca (irritativa) o Productiva (con esputo).",
    defRO: "Reflex de apărare brusc și zgomotos pentru curățarea căilor respiratorii de secreții sau corpi străini. Seacă (iritativă) sau Productivă (cu spută).",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_t_toxina",
    termES: "Toxina",
    termRO: "Toxină",
    categoryColor: "bg-red-50",
    defES: "Sustancia venenosa de origen biológico (bacterias, plantas, animales) que causa enfermedad. Exotoxinas (liberadas, tétanos) o Endotoxinas (pared celular, shock séptico).",
    defRO: "Substanță otrăvitoare de origine biologică (bacterii, plante, animale) care cauzează boală. Exotoxine (eliberate, tetanos) sau Endotoxine (perete celular, șoc septic).",
    nanda: {
        codeES: "00035",
        codeRO: "00035",
        labelES: "Riesgo de lesión",
        labelRO: "Risc de leziune"
    }
}, {
    id: "v_t_toxoplasmosis",
    termES: "Toxoplasmosis",
    termRO: "Toxoplasmoză",
    categoryColor: "bg-purple-50",
    defES: "Infección parasitaria (Toxoplasma gondii) por heces de gato o carne cruda. Leve en sanos, pero grave en fetos (congénita: ceguera, daño cerebral) e inmunodeprimidos (cerebral).",
    defRO: "Infecție parazitară (Toxoplasma gondii) prin fecale de pisică sau carne crudă. Ușoară la sănătoși, dar gravă la făt (congenitală: orbire, leziuni cerebrale) și imunodeprimați (cerebrală).",
    nanda: {
        codeES: "00209",
        codeRO: "00209",
        labelES: "Riesgo de alteración de la díada materno-fetal",
        labelRO: "Risc de alterare a diadei materno-fetale"
    }
}, {
    id: "v_t_transfusion",
    termES: "Transfusión Sanguínea",
    termRO: "Transfuzie Sanguină",
    categoryColor: "bg-red-50",
    defES: "Administración IV de sangre total o componentes (concentrado de hematíes, plaquetas, plasma) para reponer volumen o corregir déficits. Requiere pruebas cruzadas (seguridad ABO/Rh).",
    defRO: "Administrarea IV de sânge integral sau componente (concentrat eritrocitar, trombocite, plasmă) pentru înlocuirea volumului sau corectarea deficitelor. Necesită teste de compatibilitate (siguranță ABO/Rh).",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_t_transplante",
    termES: "Trasplante",
    termRO: "Transplant",
    categoryColor: "bg-green-50",
    defES: "Transferencia de un órgano (riñón, corazón) o tejido (córnea, médula) de un donante a un receptor. Requiere inmunosupresión de por vida para evitar el rechazo (excepto autoinjerto).",
    defRO: "Transferul unui organ (rinichi, inimă) sau țesut (cornee, măduvă) de la un donator la un primitor. Necesită imunosupresie pe viață pentru a evita respingerea (cu excepția autogrefei).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_t_traqueostomia",
    termES: "Traqueostomía",
    termRO: "Traheostomie",
    categoryColor: "bg-teal-50",
    defES: "Abertura quirúrgica en la tráquea anterior para crear una vía aérea artificial mediante una cánula. Indicada en ventilación mecánica prolongada u obstrucción alta. Requiere cuidados de estoma.",
    defRO: "Deschidere chirurgicală în traheea anterioară pentru a crea o cale aeriană artificială printr-o canulă. Indicată în ventilația mecanică prelungită sau obstrucția înaltă. Necesită îngrijirea stomei.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_t_traumatismo_craneoencefalico",
    termES: "Traumatismo Craneoencefálico (TCE)",
    termRO: "Traumatism Cranio-Cerebral (TCC)",
    categoryColor: "bg-purple-50",
    defES: "Lesión física del tejido cerebral que altera temporal o permanentemente la función cerebral. Leve (concusión), Moderado o Grave (coma). Riesgo de hipertensión intracraneal.",
    defRO: "Leziune fizică a țesutului cerebral care alterează temporar sau permanent funcția cerebrală. Ușor (comoție), Moderat sau Grav (comă). Risc de hipertensiune intracraniană.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_t_triaje",
    termES: "Triaje (Triage)",
    termRO: "Triaj",
    categoryColor: "bg-red-50",
    defES: "Proceso de clasificación de pacientes según la gravedad y urgencia de su condición para priorizar la atención (ej. Sistema Manchester: Rojo-Inmediato, Naranja, Amarillo, Verde, Azul).",
    defRO: "Proces de clasificare a pacienților în funcție de gravitatea și urgența stării lor pentru prioritizarea asistenței (ex. Sistemul Manchester: Roșu-Imediat, Portocaliu, Galben, Verde, Albastru).",
    nanda: null
}, {
    id: "v_t_tricuspide",
    termES: "Tricúspide (Válvula)",
    termRO: "Tricuspidă (Valvă)",
    categoryColor: "bg-red-50",
    defES: "Válvula cardíaca de tres valvas situada entre la aurícula derecha y el ventrículo derecho. Previene el reflujo sanguíneo a la aurícula durante la sístole ventricular.",
    defRO: "Valvă cardiacă cu trei foițe situată între atriul drept și ventriculul drept. Previne refluxul sanguin în atriu în timpul sistolei ventriculare.",
    nanda: null
}, {
    id: "v_t_trigliceridos",
    termES: "Triglicéridos",
    termRO: "Trigliceride",
    categoryColor: "bg-yellow-50",
    defES: "Tipo principal de grasa (lípido) en la sangre, fuente de energía almacenada. Niveles altos (>150 mg/dL) aumentan riesgo cardiovascular y pancreatitis (>500-1000 mg/dL).",
    defRO: "Tip principal de grăsime (lipid) în sânge, sursă de energie stocată. Nivelurile ridicate (>150 mg/dL) cresc riscul cardiovascular și de pancreatită (>500-1000 mg/dL).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_t_trombocitopenia",
    termES: "Trombocitopenia",
    termRO: "Trombocitopenie",
    categoryColor: "bg-red-50",
    defES: "Recuento bajo de plaquetas en sangre (<150.000/mm³). Leve suele ser asintomática; grave (<20.000) causa petequias, equimosis y sangrado espontáneo. PTI, quimioterapia.",
    defRO: "Număr scăzut de trombocite în sânge (<150.000/mm³). Ușoară este de obicei asimptomatică; gravă (<20.000) cauzează peteșii, echimoze și sângerare spontană. PTI, chimioterapie.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_t_trombosis_venosa_profunda",
    termES: "Trombosis Venosa Profunda (TVP)",
    termRO: "Tromboză Venoasă Profundă (TVP)",
    categoryColor: "bg-red-50",
    defES: "Formación de un coágulo (trombo) en una vena profunda, generalmente de la pierna. Dolor, edema, calor y signo de Homans. Riesgo grave de embolia pulmonar.",
    defRO: "Formarea unui cheag (tromb) într-o venă profundă, de obicei la picior. Durere, edem, căldură și semnul Homans. Risc grav de embolie pulmonară.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_t_troponina",
    termES: "Troponina",
    termRO: "Troponină",
    categoryColor: "bg-red-50",
    defES: "Proteína del músculo cardíaco liberada al torrente sanguíneo cuando hay daño miocárdico. Marcador más sensible y específico (Gold Standard) para diagnosticar infarto agudo de miocardio.",
    defRO: "Proteină a mușchiului cardiac eliberată în torentul sanguin când există leziuni miocardice. Markerul cel mai sensibil și specific (Standard de Aur) pentru diagnosticarea infarctului miocardic acut.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_t_tuberculosis",
    termES: "Tuberculosis (TBC)",
    termRO: "Tuberculoză (TBC)",
    categoryColor: "bg-stone-50",
    defES: "Enfermedad infecciosa bacteriana (M. tuberculosis) que afecta principalmente a los pulmones. Tos crónica, hemoptisis, fiebre nocturna, pérdida de peso. Transmisión aérea. Aislamiento respiratorio.",
    defRO: "Boală infecțioasă bacteriană (M. tuberculosis) care afectează în principal plămânii. Tuse cronică, hemoptizie, febră nocturnă, scădere în greutate. Transmitere aeriană. Izolare respiratorie.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_t_tumor",
    termES: "Tumor",
    termRO: "Tumoare",
    categoryColor: "bg-stone-50",
    defES: "Crecimiento anormal de tejido nuevo (neoplasia), que puede ser benigno (localizado) o maligno (cáncer, infiltrante). También se refiere a la hinchazón (signo inflamación).",
    defRO: "Creștere anormală de țesut nou (neoplazie), care poate fi benignă (localizată) sau malignă (cancer, infiltrantă). Se referă și la umflătură (semn de inflamație).",
    nanda: null
}, {
    id: "v_t_tunel_carpiano",
    termES: "Túnel Carpiano (Síndrome)",
    termRO: "Tunel Carpian (Sindrom)",
    categoryColor: "bg-stone-50",
    defES: "Compresión del nervio mediano a su paso por la muñeca. Causa dolor, entumecimiento y hormigueo en los dedos pulgar, índice y medio, y debilidad de agarre.",
    defRO: "Compresia nervului median la trecerea prin încheietură. Cauzează durere, amorțeală și furnicături în degetele mare, arătător și mijlociu, și slăbiciune la prindere.",
    nanda: {
        codeES: "00133",
        codeRO: "00133",
        labelES: "Dolor crónico",
        labelRO: "Durere cronică"
    }
}, {
    id: "v_u_uci",
    termES: "UCI (Unidad de Cuidados Intensivos)",
    termRO: "ATI (Anestezie și Terapie Intensivă)",
    categoryColor: "bg-red-50",
    defES: "Área hospitalaria altamente especializada destinada a la monitorización y tratamiento de pacientes en estado crítico o con riesgo vital inminente. Equipada con tecnología avanzada (respiradores, monitores hemodinámicos) y personal cualificado.",
    defRO: "Zonă spitalicească înalt specializată destinată monitorizării și tratamentului pacienților în stare critică sau cu risc vital iminent. Echipată cu tehnologie avansată (ventilatoare, monitoare hemodinamice) și personal calificat.",
    nanda: null
}, {
    id: "v_u_ulcera",
    termES: "Úlcera",
    termRO: "Ulcer",
    categoryColor: "bg-red-50",
    defES: "Lesión que provoca la pérdida de sustancia en la piel o mucosas, con escasa tendencia a la cicatrización espontánea. Puede afectar a la epidermis, dermis y tejidos profundos. La etiología varía (presión, vascular, neuropática).",
    defRO: "Leziune care provoacă pierderea de substanță la nivelul pielii sau mucoaselor, cu tendință scăzută de vindecare spontană. Poate afecta epiderma, derma și țesuturile profunde. Etiologia variază (presiune, vasculară, neuropată).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_u_ulcera_peptica",
    termES: "Úlcera Péptica",
    termRO: "Ulcer Peptic",
    categoryColor: "bg-orange-50",
    defES: "Erosión en la mucosa del estómago (gástrica) o del duodeno (duodenal) causada por la acción corrosiva del ácido gástrico y la pepsina. Factores principales: infección por H. pylori y uso crónico de AINEs.",
    defRO: "Eroziune la nivelul mucoasei stomacului (gastrică) sau duodenului (duodenală) cauzată de acțiunea corozivă a acidului gastric și a pepsinei. Factori principali: infecția cu H. pylori și utilizarea cronică a AINS.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_u_ulcera_presion",
    termES: "Úlcera por Presión (UPP)",
    termRO: "Ulcer de Presiune (Escară)",
    categoryColor: "bg-stone-50",
    defES: "Lesión localizada en la piel y/o tejido subyacente, generalmente sobre una prominencia ósea, como resultado de la presión, o la presión en combinación con la cizalla. Clasificación en 4 estadios según profundidad.",
    defRO: "Leziune localizată la nivelul pielii și/sau țesutului subiacent, de obicei deasupra unei proeminențe osoase, ca rezultat al presiunii, sau al presiunii în combinație cu forfecarea. Clasificare în 4 stadii în funcție de profunzime.",
    nanda: {
        codeES: "00249",
        codeRO: "00249",
        labelES: "Riesgo de úlcera por presión",
        labelRO: "Risc de ulcer de presiune"
    }
}, {
    id: "v_u_ulcera_venosa",
    termES: "Úlcera Venosa (Estasis)",
    termRO: "Ulcer Venos (de Stază)",
    categoryColor: "bg-blue-50",
    defES: "Úlcera crónica en la pierna (generalmente maleolar interna) causada por insuficiencia venosa crónica e hipertensión venosa. Suele ser superficial, exudativa, de bordes irregulares y con piel circundante hiperpigmentada (dermatitis ocre).",
    defRO: "Ulcer cronic la picior (de obicei maleolar intern) cauzat de insuficiență venoasă cronică și hipertensiune venoasă. Este de obicei superficial, exsudativ, cu margini neregulate și piele înconjurătoare hiperpigmentată (dermatită ocră).",
    nanda: {
        codeES: "00044",
        codeRO: "00044",
        labelES: "Deterioro de la integridad tisular",
        labelRO: "Integritate tisulară afectată"
    }
}, {
    id: "v_u_ultrasonografia",
    termES: "Ultrasonografía (Ecografía)",
    termRO: "Ultrasonografie (Ecografie)",
    categoryColor: "bg-blue-50",
    defES: "Técnica de diagnóstico por imagen que utiliza ondas sonoras de alta frecuencia (ultrasonidos) para visualizar estructuras internas del cuerpo en tiempo real. Es inocua (sin radiación), rápida y operador-dependiente.",
    defRO: "Tehnică de diagnostic imagistic care utilizează unde sonore de înaltă frecvență (ultrasunete) pentru a vizualiza structurile interne ale corpului în timp real. Este inofensivă (fără radiații), rapidă și dependentă de operator.",
    nanda: null
}, {
    id: "v_u_umbral_dolor",
    termES: "Umbral del Dolor",
    termRO: "Pragul Durerii",
    categoryColor: "bg-purple-50",
    defES: "Punto o intensidad mínima a partir de la cual un estímulo es percibido como doloroso por una persona. Varía fisiológicamente, pero es relativamente constante entre individuos, a diferencia de la tolerancia al dolor.",
    defRO: "Punctul sau intensitatea minimă de la care un stimul este perceput ca dureros de către o persoană. Variază fiziologic, dar este relativ constant între indivizi, spre deosebire de toleranța la durere.",
    nanda: null
}, {
    id: "v_u_una",
    termES: "Uña",
    termRO: "Unghie",
    categoryColor: "bg-stone-50",
    defES: "Placa córnea dura, translúcida y convexa situada en la cara dorsal de la falange distal de los dedos. Formada por queratina dura. Protege el dedo y ayuda a la prensión fina. Su lecho vascular permite valorar el relleno capilar.",
    defRO: "Placă cornoasă dură, translucidă și convexă situată pe fața dorsală a falangei distale a degetelor. Formată din cheratină dură. Protejează degetul și ajută la prehensiunea fină. Patul său vascular permite evaluarea umplerii capilare.",
    nanda: null
}, {
    id: "v_u_una_encarnada",
    termES: "Uña Encarnada (Onicocriptosis)",
    termRO: "Unghie Încarnată (Onicocriptoză)",
    categoryColor: "bg-red-50",
    defES: "Condición dolorosa en la que el borde lateral de la uña penetra en el tejido blando del surco ungueal, provocando inflamación, dolor e infección secundaria. Común en el primer dedo del pie.",
    defRO: "Condiție dureroasă în care marginea laterală a unghiei pătrunde în țesutul moale al șanțului unghial, provocând inflamație, durere și infecție secundară. Comună la degetul mare de la picior.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_u_urea",
    termES: "Urea",
    termRO: "Uree",
    categoryColor: "bg-yellow-50",
    defES: "Producto final nitrogenado del metabolismo de las proteínas, sintetizado en el hígado y excretado por los riñones. Su nivel en sangre (BUN) es un indicador de la función renal y el estado de hidratación.",
    defRO: "Produs final azotat al metabolismului proteinelor, sintetizat în ficat și excretat de rinichi. Nivelul său în sânge (BUN) este un indicator al funcției renale și al stării de hidratare.",
    nanda: null
}, {
    id: "v_u_uremia",
    termES: "Uremia",
    termRO: "Uremie",
    categoryColor: "bg-yellow-50",
    defES: "Síndrome clínico tóxico causado por la acumulación excesiva de urea y otros productos de desecho nitrogenados en la sangre debido a insuficiencia renal severa. Síntomas: náuseas, vómitos, prurito, alteración mental (encefalopatía urémica).",
    defRO: "Sindrom clinic toxic cauzat de acumularea excesivă de uree și alți produși reziduali azotați în sânge din cauza insuficienței renale severe. Simptome: greață, vărsături, prurit, alterare mentală (encefalopatie uremică).",
    nanda: {
        codeES: "00026",
        codeRO: "00026",
        labelES: "Exceso de volumen de líquidos",
        labelRO: "Volum lichidian excesiv"
    }
}, {
    id: "v_u_ureter",
    termES: "Uréter",
    termRO: "Ureter",
    categoryColor: "bg-blue-50",
    defES: "Conducto muscular par, largo y estrecho, que transporta la orina desde la pelvis renal hasta la vejiga urinaria mediante movimientos peristálticos. Su obstrucción (cálculo) causa cólico nefrítico.",
    defRO: "Conduct muscular pereche, lung și îngust, care transportă urina din pelvisul renal până în vezica urinară prin mișcări peristaltice. Obstrucția sa (calcul) cauzează colică nefritică.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_u_uretra",
    termES: "Uretra",
    termRO: "Uretră",
    categoryColor: "bg-blue-50",
    defES: "Conducto que transporta la orina desde la vejiga hasta el exterior del cuerpo. En mujeres es corta (~4 cm, riesgo ITU); en hombres es larga (~20 cm) y comparte función reproductora (paso de semen).",
    defRO: "Conduct care transportă urina din vezică până la exteriorul corpului. La femei este scurtă (~4 cm, risc ITU); la bărbați este lungă (~20 cm) și împarte funcția reproductivă (trecerea spermei).",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_u_uretritis",
    termES: "Uretritis",
    termRO: "Uretrită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de la uretra, frecuentemente causada por infecciones de transmisión sexual (gonorrea, clamidia). Síntomas: disuria (dolor al orinar), secreción uretral purulenta y prurito.",
    defRO: "Inflamația uretrei, frecvent cauzată de infecții cu transmitere sexuală (gonoree, chlamydia). Simptome: disurie (durere la urinare), secreție uretrală purulentă și prurit.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_u_urgencia_medica",
    termES: "Urgencia Médica",
    termRO: "Urgență Medicală",
    categoryColor: "bg-red-50",
    defES: "Situación clínica que requiere atención médica rápida (en horas), pero donde no existe un riesgo vital inmediato o de secuelas graves instantáneas, a diferencia de la emergencia.",
    defRO: "Situație clinică ce necesită atenție medicală rapidă (în ore), dar unde nu există un risc vital imediat sau de sechele grave instantanee, spre deosebire de urgența critică (emergență).",
    nanda: null
}, {
    id: "v_u_urgencia_urinaria",
    termES: "Urgencia Urinaria (Miccional)",
    termRO: "Urgență Urinară (Micțională)",
    categoryColor: "bg-yellow-50",
    defES: "Deseo repentino, fuerte e imperioso de orinar que es difícil de posponer. Si va acompañado de pérdida de orina, se denomina incontinencia de urgencia. Típico de vejiga hiperactiva o cistitis.",
    defRO: "Dorință bruscă, puternică și imperioasă de a urina, care este greu de amânat. Dacă este însoțită de pierderea urinei, se numește incontinență de urgență. Tipic pentru vezica hiperactivă sau cistită.",
    nanda: {
        codeES: "00019",
        codeRO: "00019",
        labelES: "Incontinencia urinaria de urgencia",
        labelRO: "Incontinență urinară de urgență"
    }
}, {
    id: "v_u_urinalisis",
    termES: "Urinálisis (Análisis de orina)",
    termRO: "Sumar de Urină (Analiză de urină)",
    categoryColor: "bg-yellow-50",
    defES: "Conjunto de pruebas físicas, químicas y microscópicas realizadas en la orina. Evalúa color, densidad, pH, presencia de glucosa, proteínas, cetonas, sangre, leucocitos y bacterias.",
    defRO: "Set de teste fizice, chimice și microscopice efectuate asupra urinei. Evaluează culoarea, densitatea, pH-ul, prezența glucozei, proteinelor, cetonelor, sângelui, leucocitelor și bacteriilor.",
    nanda: null
}, {
    id: "v_u_urocultivo",
    termES: "Urocultivo",
    termRO: "Urocultură",
    categoryColor: "bg-teal-50",
    defES: 'Técnica de laboratorio para identificar bacterias específicas en la orina y realizar un antibiograma. Es el "gold standard" para el diagnóstico definitivo de infección urinaria.',
    defRO: 'Tehnică de laborator pentru identificarea bacteriilor specifice în urină și efectuarea unei antibiograme. Este "standardul de aur" pentru diagnosticul definitiv al infecției urinare.',
    nanda: null
}, {
    id: "v_u_urografia",
    termES: "Urografía (Pielografía)",
    termRO: "Urografie (Pielografie)",
    categoryColor: "bg-blue-50",
    defES: "Estudio radiológico del tracto urinario (riñones, uréteres, vejiga) mediante el uso de medio de contraste yodado. Permite visualizar anatomía, obstrucciones o anomalías funcionales de excreción.",
    defRO: "Studiu radiologic al tractului urinar (rinichi, uretere, vezică) prin utilizarea unui mediu de contrast iodat. Permite vizualizarea anatomiei, obstrucțiilor sau anomaliilor funcționale de excreție.",
    nanda: null
}, {
    id: "v_u_urolitiasis",
    termES: "Urolitiasis",
    termRO: "Urolitiază",
    categoryColor: "bg-stone-50",
    defES: "Presencia de cálculos (piedras) en cualquier parte del sistema urinario (riñón, uréter, vejiga, uretra). Puede ser asintomática o causar dolor cólico intenso, hematuria y obstrucción.",
    defRO: "Prezența calculilor (pietre) în orice parte a sistemului urinar (rinichi, ureter, vezică, uretră). Poate fi asimptomatică sau poate cauza durere colicativă intensă, hematurie și obstrucție.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_u_urologia",
    termES: "Urología",
    termRO: "Urologie",
    categoryColor: "bg-blue-50",
    defES: "Especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las enfermedades del aparato urinario en ambos sexos y del aparato reproductor masculino.",
    defRO: "Specialitate medico-chirurgicală care se ocupă cu studiul, diagnosticul și tratamentul bolilor aparatului urinar la ambele sexe și ale aparatului reproducător masculin.",
    nanda: null
}, {
    id: "v_u_urticaria",
    termES: "Urticaria",
    termRO: "Urticarie",
    categoryColor: "bg-pink-50",
    defES: "Reacción cutánea caracterizada por la aparición súbita de habones (ronchas) rojizos, elevados y pruriginosos, que palidecen a la presión. Causada generalmente por liberación de histamina en reacciones alérgicas.",
    defRO: "Reacție cutanată caracterizată prin apariția bruscă a unor papule (bule) roșietice, ridicate și pruriginoase, care pălesc la presiune. Cauzată de obicei de eliberarea de histamină în reacții alergice.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_u_utero",
    termES: "Útero (Matriz)",
    termRO: "Uter (Matrice)",
    categoryColor: "bg-pink-50",
    defES: "Órgano muscular hueco en forma de pera invertida, situado en la pelvis femenina. Su función principal es alojar y nutrir al feto durante el embarazo. Compuesto por endometrio, miometrio y perimetrio.",
    defRO: "Organ muscular gol în formă de pară inversată, situat în pelvisul feminin. Funcția sa principală este de a găzdui și hrăni fătul în timpul sarcinii. Compus din endometru, miometru și perimetru.",
    nanda: null
}, {
    id: "v_u_uveitis",
    termES: "Uveítis",
    termRO: "Uveită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de la úvea (capa media del ojo: iris, cuerpo ciliar y coroides). Causa ojo rojo, dolor, fotofobia y visión borrosa. Puede asociarse a enfermedades autoinmunes (espondilitis, artritis).",
    defRO: "Inflamația uveei (stratul mijlociu al ochiului: iris, corp ciliar și coroidă). Cauzează ochi roșu, durere, fotofobie și vedere încețoșată. Se poate asocia cu boli autoimune (spondilită, artrită).",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_u_uvula",
    termES: "Úvula (Campanilla)",
    termRO: "Uvulă (Omulșor)",
    categoryColor: "bg-pink-50",
    defES: "Pequeña masa carnosa que cuelga del borde posterior del paladar blando. Juega un papel en la deglución (cierra la nasofaringe) y la articulación del habla. Su edema puede obstruir la vía aérea.",
    defRO: "Mică masă cărnoasă care atârnă de marginea posterioară a palatului moale. Joacă un rol în deglutiție (închide nazofaringele) și articularea vorbirii. Edemul său poate obstrucționa calea aeriană.",
    nanda: null
}, {
    id: "v_v_vacuna",
    termES: "Vacuna",
    termRO: "Vaccin",
    categoryColor: "bg-teal-50",
    defES: "Preparado biológico que proporciona inmunidad adquirida activa ante una enfermedad específica. Contiene antígenos (microorganismos atenuados, muertos o fragmentos) que estimulan la producción de anticuerpos sin causar la enfermedad.",
    defRO: "Preparat biologic care oferă imunitate dobândită activă împotriva unei boli specifice. Conține antigeni (microorganisme atenuate, moarte sau fragmente) care stimulează producția de anticorpi fără a cauza boala.",
    nanda: {
        codeES: "00162",
        codeRO: "00162",
        labelES: "Disposición para mejorar la gestión de la salud",
        labelRO: "Dispoziție pentru îmbunătățirea gestionării sănătății"
    }
}, {
    id: "v_v_vacuna_atenuada",
    termES: "Vacuna Atenuada (Virus Vivos)",
    termRO: "Vaccin Atenuat (Virusuri Vii)",
    categoryColor: "bg-yellow-50",
    defES: "Tipo de vacuna que utiliza una forma debilitada del germen causante de la enfermedad. Genera una respuesta inmune fuerte y duradera (ej. Triple Vírica: sarampión, rubeola, parotiditis). Contraindicada en inmunodeprimidos y embarazadas.",
    defRO: "Tip de vaccin care utilizează o formă slăbită a germenului cauzator al bolii. Generează un răspuns imun puternic și de durată (ex. ROR: rujeolă, rubeolă, oreion). Contraindicată la imunodeprimați și gravide.",
    nanda: null
}, {
    id: "v_v_vacuna_inactivada",
    termES: "Vacuna Inactivada (Muerta)",
    termRO: "Vaccin Inactivat (Mort)",
    categoryColor: "bg-gray-50",
    defES: "Vacuna producida a partir de microorganismos muertos por calor o químicos. Más segura que la atenuada, pero suele requerir dosis de recuerdo (ej. Gripe, Polio inyectable, Hepatitis A).",
    defRO: "Vaccin produs din microorganisme omorâte prin căldură sau substanțe chimice. Mai sigur decât cel atenuat, dar necesită de obicei doze de rapel (ex. Gripă, Polio injectabil, Hepatita A).",
    nanda: null
}, {
    id: "v_v_vacunacion",
    termES: "Vacunación",
    termRO: "Vaccinare",
    categoryColor: "bg-green-50",
    defES: "Acto físico de administrar una vacuna. Es la intervención de salud pública más coste-efectiva para prevenir enfermedades infecciosas, discapacidad y muerte a nivel global.",
    defRO: "Actul fizic de administrare a unui vaccin. Este intervenția de sănătate publică cea mai cost-eficientă pentru prevenirea bolilor infecțioase, dizabilității și decesului la nivel global.",
    nanda: {
        codeES: "00300",
        codeRO: "00300",
        labelES: "Conductas ineficaces de mantenimiento de la salud",
        labelRO: "Comportamente ineficiente de menținere a sănătății"
    }
}, {
    id: "v_v_vagina",
    termES: "Vagina",
    termRO: "Vagin",
    categoryColor: "bg-pink-50",
    defES: "Canal fibromuscular elástico que conecta el útero con el exterior (vulva). Sirve como canal de parto, vía de salida del flujo menstrual y órgano de copulación. Su pH ácido (lactobacilos) protege de infecciones.",
    defRO: "Canal fibromuscular elastic care conectează uterul cu exteriorul (vulva). Servește ca și canal de naștere, cale de ieșire a fluxului menstrual și organ de copulație. pH-ul său acid (lactobacili) protejează de infecții.",
    nanda: null
}, {
    id: "v_v_vaginismo",
    termES: "Vaginismo",
    termRO: "Vaginism",
    categoryColor: "bg-purple-50",
    defES: "Espasmo involuntario y persistente de la musculatura del tercio externo de la vagina que impide la penetración sexual o la hace muy dolorosa. Suele tener componente psicológico o traumático.",
    defRO: "Spasm involuntar și persistent al musculaturii treimii externe a vaginului care împiedică penetrarea sexuală sau o face foarte dureroasă. Are de obicei o componentă psihologică sau traumatică.",
    nanda: {
        codeES: "00059",
        codeRO: "00059",
        labelES: "Disfunción sexual",
        labelRO: "Disfuncție sexuală"
    }
}, {
    id: "v_v_vaginitis",
    termES: "Vaginitis",
    termRO: "Vaginită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de la mucosa vaginal que causa secreción, picor y dolor. Tipos: Infecciosa (Cándida, Tricomonas, Gardenella/Vaginosis bacteriana) o Atrófica (por falta de estrógenos en menopausia).",
    defRO: "Inflamația mucoasei vaginale care cauzează secreție, mâncărime și durere. Tipuri: Infecțioasă (Candida, Tricomonas, Gardenella/Vaginoză bacteriană) sau Atrofică (prin lipsă de estrogeni la menopauză).",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_v_vago",
    termES: "Vago (Nervio, X Par)",
    termRO: "Vag (Nervul, Perechea X)",
    categoryColor: "bg-indigo-50",
    defES: "Nervio craneal más largo (neumogástrico). Principal componente del sistema parasimpático. Inerva corazón (bradicardia), pulmones, estómago e intestinos. Su estimulación (maniobra vagal) reduce la frecuencia cardíaca.",
    defRO: "Cel mai lung nerv cranian (pneumogastric). Componenta principală a sistemului parasimpatic. Inervează inima (bradicardie), plămânii, stomacul și intestinele. Stimularea sa (manevra vagală) reduce frecvența cardiacă.",
    nanda: null
}, {
    id: "v_v_valvula_aortica",
    termES: "Válvula Aórtica",
    termRO: "Valvă Aortică",
    categoryColor: "bg-red-50",
    defES: "Válvula semilunar situada entre el ventrículo izquierdo y la aorta. Se abre en sístole para permitir la salida de sangre y se cierra en diástole para evitar el reflujo al ventrículo.",
    defRO: "Valvă semilunară situată între ventriculul stâng și aortă. Se deschide în sistolă pentru a permite ieșirea sângelui și se închide în diastolă pentru a preveni refluxul în ventricul.",
    nanda: null
}, {
    id: "v_v_valvula_mitral",
    termES: "Válvula Mitral (Bicúspide)",
    termRO: "Valvă Mitrală (Bicuspidă)",
    categoryColor: "bg-red-50",
    defES: "Válvula auriculoventricular izquierda compuesta por dos valvas. Regula el flujo de sangre de la aurícula izquierda al ventrículo izquierdo. La estenosis mitral es secuela común de fiebre reumática.",
    defRO: "Valvă atrioventriculară stângă compusă din două foițe. Reglează fluxul de sânge din atriul stâng în ventriculul stâng. Stenoza mitrală este o sechelă comună a febrei reumatice.",
    nanda: null
}, {
    id: "v_v_valvula_pulmonar",
    termES: "Válvula Pulmonar",
    termRO: "Valvă Pulmonară",
    categoryColor: "bg-red-50",
    defES: "Válvula semilunar situada entre el ventrículo derecho y la arteria pulmonar. Previene el retroceso de la sangre hacia el ventrículo derecho tras la sístole.",
    defRO: "Valvă semilunară situată între ventriculul drept și artera pulmonară. Previne refluxul sângelui înapoi în ventriculul drept după sistolă.",
    nanda: null
}, {
    id: "v_v_valvula_tricuspide",
    termES: "Válvula Tricúspide",
    termRO: "Valvă Tricuspidă",
    categoryColor: "bg-red-50",
    defES: "Válvula auriculoventricular derecha con tres valvas. Controla el flujo sanguíneo de la aurícula derecha al ventrículo derecho. Las infecciones en adictos a drogas IV suelen afectarla (endocarditis).",
    defRO: "Valvă atrioventriculară dreaptă cu trei foițe. Controlează fluxul sanguin din atriul drept în ventriculul drept. Infecțiile la dependenții de droguri IV o afectează frecvent (endocardită).",
    nanda: null
}, {
    id: "v_v_valvula_venosa",
    termES: "Válvula Venosa",
    termRO: "Valvă Venoasă",
    categoryColor: "bg-blue-50",
    defES: "Repliegues del endotelio en las venas (especialmente miembros inferiores) que aseguran el flujo unidireccional de sangre hacia el corazón, venciendo la gravedad. Su fallo causa varices.",
    defRO: "Pliuri ale endoteliului în vene (în special membrele inferioare) care asigură fluxul unidirecțional de sânge către inimă, învingând gravitația. Eșecul lor cauzează varice.",
    nanda: null
}, {
    id: "v_v_valsalva",
    termES: "Valsalva (Maniobra de)",
    termRO: "Valsalva (Manevra)",
    categoryColor: "bg-orange-50",
    defES: "Esfuerzo espiratorio forzado contra la glotis cerrada (pujar). Aumenta la presión intratorácica e intraabdominal. Usada fisiológicamente en la defecación. En cardiología, puede revertir taquicardias supraventriculares.",
    defRO: "Efort expirator forțat împotriva glotei închise (a împinge). Crește presiunea intratoracică și intraabdominală. Folosită fiziologic în defecație. În cardiologie, poate reversa tahicardiile supraventriculare.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_v_vaporizador",
    termES: "Vaporizador",
    termRO: "Vaporizator",
    categoryColor: "bg-sky-50",
    defES: "Dispositivo que convierte un líquido (agua o medicamento) en vapor. Se usa para humidificar el ambiente o administrar fármacos inhalados (ej. anestésicos volátiles en quirófano).",
    defRO: "Dispozitiv care transformă un lichid (apă sau medicament) în vapori. Se folosește pentru a umidifica mediul sau a administra medicamente inhalate (ex. anestezice volatile în sala de operație).",
    nanda: null
}, {
    id: "v_v_varicela",
    termES: "Varicela",
    termRO: "Varicelă (Vărsat de vânt)",
    categoryColor: "bg-pink-50",
    defES: 'Enfermedad viral exantemática muy contagiosa causada por el virus Varicela-Zóster (VVZ). Caracterizada por fiebre y erupción pruriginosa que evoluciona de mácula a pápula, vesícula y costra ("cielo estrellado").',
    defRO: 'Boală virală exantematică foarte contagioasă cauzată de virusul Varicelo-Zosterian (VZV). Caracterizată prin febră și erupție pruriginoasă care evoluează de la maculă la papulă, veziculă și crustă ("cer înstelat").',
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_v_varices",
    termES: "Varices (Venas Varicosas)",
    termRO: "Varice (Vene Varicoase)",
    categoryColor: "bg-blue-50",
    defES: "Venas superficiales dilatadas, tortuosas y elongadas, causadas por insuficiencia de las válvulas venosas. Comunes en piernas. Síntomas: pesadez, edema, dolor. Riesgo de trombosis y úlceras.",
    defRO: "Vene superficiale dilatate, tortuoase și alungite, cauzate de insuficiența valvelor venoase. Comune la picioare. Simptome: greutate, edem, durere. Risc de tromboză și ulcere.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_v_varices_esofagicas",
    termES: "Varices Esofágicas",
    termRO: "Varice Esofagiene",
    categoryColor: "bg-red-50",
    defES: "Venas dilatadas en la submucosa del esófago inferior, consecuencia directa de la hipertensión portal (cirrosis hepática). Su rotura provoca hemorragia digestiva masiva y riesgo vital.",
    defRO: "Vene dilatate în submucoasa esofagului inferior, consecință directă a hipertensiunii portale (ciroză hepatică). Ruperea lor provoacă hemoragie digestivă masivă și risc vital.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_v_varicocele",
    termES: "Varicocele",
    termRO: "Varicocel",
    categoryColor: "bg-blue-50",
    defES: 'Dilatación varicosa de las venas del plexo pampiniforme en el cordón espermático (escroto), más común en el lado izquierdo. Palpable como "bolsa de gusanos". Causa frecuente de infertilidad masculina.',
    defRO: 'Dilatare varicoasă a venelor plexului pampiniform în cordonul spermatic (scrot), mai comună pe partea stângă. Palpabil ca "pungă de viermi". Cauză frecventă a infertilității masculine.',
    nanda: null
}, {
    id: "v_v_vasectomia",
    termES: "Vasectomía",
    termRO: "Vasectomie",
    categoryColor: "bg-teal-50",
    defES: "Método de esterilización masculina permanente. Cirugía menor que consiste en cortar o ligar los conductos deferentes para impedir que los espermatozoides se mezclen con el semen.",
    defRO: "Metodă de sterilizare masculină permanentă. Chirurgie minoră care constă în tăierea sau ligaturarea canalelor deferente pentru a împiedica amestecarea spermatozoizilor cu sperma.",
    nanda: null
}, {
    id: "v_v_vasoconstriccion",
    termES: "Vasoconstricción",
    termRO: "Vasoconstricție",
    categoryColor: "bg-red-50",
    defES: "Estrechamiento del diámetro de los vasos sanguíneos por contracción del músculo liso vascular. Aumenta la resistencia vascular y la presión arterial. Respuesta al frío o adrenalina.",
    defRO: "Îngustarea diametrului vaselor de sânge prin contracția mușchiului neted vascular. Crește rezistența vasculară și tensiunea arterială. Răspuns la frig sau adrenalină.",
    nanda: null
}, {
    id: "v_v_vasodilatacion",
    termES: "Vasodilatación",
    termRO: "Vasodilatație",
    categoryColor: "bg-red-50",
    defES: "Ensanchamiento del diámetro de los vasos sanguíneos por relajación del músculo liso. Disminuye la presión arterial y aumenta el flujo local. Respuesta al calor, inflamación o nitratos.",
    defRO: "Lărgirea diametrului vaselor de sânge prin relaxarea mușchiului neted. Scade tensiunea arterială și crește fluxul local. Răspuns la căldură, inflamație sau nitrați.",
    nanda: null
}, {
    id: "v_v_vasopresina",
    termES: "Vasopresina (ADH)",
    termRO: "Vasopresină (ADH)",
    categoryColor: "bg-yellow-50",
    defES: "Hormona antidiurética secretada por la neurohipófisis. Aumenta la reabsorción de agua en el riñón (concentra orina) y tiene efecto vasoconstrictor. Su déficit causa diabetes insípida.",
    defRO: "Hormon antidiuretic secretat de neurohipofiză. Crește reabsorbția apei în rinichi (concentrează urina) și are efect vasoconstrictor. Deficitul său cauzează diabet insipid.",
    nanda: null
}, {
    id: "v_v_vasopresor",
    termES: "Vasopresor",
    termRO: "Vasopresor",
    categoryColor: "bg-red-50",
    defES: "Fármaco potente que induce vasoconstricción y eleva la presión arterial media. Fundamental en el tratamiento del shock (ej. Noradrenalina, Dopamina, Vasopresina).",
    defRO: "Medicament puternic care induce vasoconstricție și crește tensiunea arterială medie. Fundamental în tratamentul șocului (ex. Noradrenalină, Dopamină, Vasopresină).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_v_vector",
    termES: "Vector",
    termRO: "Vector",
    categoryColor: "bg-green-50",
    defES: "Organismo vivo (generalmente artrópodo como mosquito, garrapata o pulga) que transmite un agente infeccioso de un animal infectado a un ser humano o a otro animal (ej. Mosquito Aedes para Dengue).",
    defRO: "Organism viu (de obicei artropod precum țânțar, căpușă sau purice) care transmite un agent infecțios de la un animal infectat la un om sau la alt animal (ex. Țânțarul Aedes pentru Dengue).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_v_vegetaciones",
    termES: "Vegetaciones (Adenoides)",
    termRO: "Vegetații (Adenoide)",
    categoryColor: "bg-pink-50",
    defES: "Hipertrofia del tejido linfoide (amígdala faríngea) en la nasofaringe. Común en niños. Obstruye la respiración nasal, causa ronquidos, voz nasal y otitis recurrentes. Adenoidectomía.",
    defRO: "Hipertrofia țesutului limfoid (amigdala faringiană) în nazofaringe. Comună la copii. Obstrucționează respirația nazală, cauzează sforăit, voce nazonală și otite recurente. Adenoidectomie.",
    nanda: {
        codeES: "00032",
        codeRO: "00032",
        labelES: "Patrón respiratorio ineficaz",
        labelRO: "Model respirator ineficient"
    }
}, {
    id: "v_v_vejiga",
    termES: "Vejiga Urinaria",
    termRO: "Vezică Urinară",
    categoryColor: "bg-yellow-50",
    defES: "Órgano muscular hueco y elástico situado en la pelvis que almacena la orina producida por los riñones antes de la micción. Capacidad normal: 400-600 ml. Revestida de urotelio.",
    defRO: "Organ muscular gol și elastic situat în pelvis care stochează urina produsă de rinichi înainte de micțiune. Capacitate normală: 400-600 ml. Căptușită de uroteliu.",
    nanda: {
        codeES: "00016",
        codeRO: "00016",
        labelES: "Deterioro de la eliminación urinaria",
        labelRO: "Eliminare urinară afectată"
    }
}, {
    id: "v_v_vejiga_neurogena",
    termES: "Vejiga Neurógena",
    termRO: "Vezică Neurogenă",
    categoryColor: "bg-yellow-50",
    defES: "Disfunción vesical causada por daño neurológico (médula espinal, ictus, esclerosis múltiple). Puede ser espástica (vaciamiento involuntario) o flácida (retención, rebosamiento). Requiere sondaje.",
    defRO: "Disfuncție vezicală cauzată de leziuni neurologice (măduva spinării, AVC, scleroză multiplă). Poate fi spastică (golire involuntară) sau flască (retenție, preaplin). Necesită sondaj.",
    nanda: {
        codeES: "00023",
        codeRO: "00023",
        labelES: "Retención urinaria",
        labelRO: "Retenție urinară"
    }
}, {
    id: "v_v_vello",
    termES: "Vello",
    termRO: "Păr (Vellus)",
    categoryColor: "bg-stone-50",
    defES: "Pelo corto, fino y claro que cubre la mayor parte del cuerpo humano, a diferencia del pelo terminal (cabeza, axilas, pubis). Lanugo es el vello fetal.",
    defRO: "Păr scurt, fin și deschis care acoperă cea mai mare parte a corpului uman, spre deosebire de părul terminal (cap, axile, pubis). Lanugo este părul fetal.",
    nanda: null
}, {
    id: "v_v_vena",
    termES: "Vena",
    termRO: "Venă",
    categoryColor: "bg-blue-50",
    defES: "Vaso sanguíneo que transporta sangre desoxigenada (excepto pulmonares) desde los tejidos hacia el corazón. Tienen paredes finas y válvulas para evitar el reflujo. Vía de elección para administración de fármacos (IV).",
    defRO: "Vas de sânge care transportă sânge dezoxigenat (cu excepția celor pulmonare) de la țesuturi către inimă. Au pereți subțiri și valve pentru a preveni refluxul. Calea de elecție pentru administrarea medicamentelor (IV).",
    nanda: null
}, {
    id: "v_v_vendaje",
    termES: "Vendaje",
    termRO: "Bandaj (Pansament)",
    categoryColor: "bg-stone-50",
    defES: "Procedimiento de enfermería que consiste en envolver una parte del cuerpo con vendas. Funciones: compresión (hemostasia/edema), contención (limitar movimiento), corrección o protección de heridas.",
    defRO: "Procedură de nursing care constă în înfășurarea unei părți a corpului cu feșe. Funcții: compresie (hemostază/edem), contenție (limitarea mișcării), corecție sau protecția plăgilor.",
    nanda: null
}, {
    id: "v_v_vendaje_compresivo",
    termES: "Vendaje Compresivo",
    termRO: "Bandaj Compresiv",
    categoryColor: "bg-blue-50",
    defES: "Aplicación de presión graduada mediante vendas elásticas para favorecer el retorno venoso, reducir edemas o detener hemorragias. Esencial en úlceras venosas y linfedema.",
    defRO: "Aplicarea unei presiuni gradate prin feșe elastice pentru a favoriza întoarcerea venoasă, a reduce edemele sau a opri hemoragiile. Esențial în ulcere venoase și limfedem.",
    nanda: null
}, {
    id: "v_v_venoclisis",
    termES: "Venoclisis (Infusión IV)",
    termRO: "Perfuzie (Infuzie IV)",
    categoryColor: "bg-teal-50",
    defES: "Administración de grandes volúmenes de líquidos (sueros, nutrición, medicación diluida) directamente en una vena de forma continua o intermitente mediante un sistema de goteo.",
    defRO: "Administrarea unor volume mari de lichide (seruri, nutriție, medicație diluată) direct într-o venă în mod continuu sau intermitent printr-un sistem de picurare.",
    nanda: {
        codeES: "00025",
        codeRO: "00025",
        labelES: "Riesgo de desequilibrio de volumen de líquidos",
        labelRO: "Risc de dezechilibru al volumului lichidian"
    }
}, {
    id: "v_v_venopuncion",
    termES: "Venopunción (Flebotomía)",
    termRO: "Venepuncție",
    categoryColor: "bg-red-50",
    defES: "Técnica de punción de una vena con aguja o catéter para extraer sangre (analítica) o iniciar una terapia intravenosa. Sitios comunes: fosa antecubital, dorso de la mano.",
    defRO: "Tehnică de puncție a unei vene cu ac sau cateter pentru a extrage sânge (analize) sau a iniția o terapie intravenoasă. Locuri comune: fosa antecubitală, dosul mâinii.",
    nanda: null
}, {
    id: "v_v_ventilacion_mecanica",
    termES: "Ventilación Mecánica",
    termRO: "Ventilație Mecanică",
    categoryColor: "bg-sky-50",
    defES: "Soporte vital artificial que utiliza un respirador para insuflar gas en los pulmones cuando el paciente no puede respirar adecuadamente (apnea, fallo respiratorio). Invasiva (TET/Traqueo) o No Invasiva (VNI).",
    defRO: "Suport vital artificial care utilizează un respirator pentru a insufla gaz în plămâni când pacientul nu poate respira adecvat (apnee, insuficiență respiratorie). Invazivă (IOT/Traheo) sau Non-Invazivă (VNI).",
    nanda: {
        codeES: "00033",
        codeRO: "00033",
        labelES: "Deterioro de la ventilación espontánea",
        labelRO: "Ventilație spontană afectată"
    }
}, {
    id: "v_v_ventolin",
    termES: "Ventolín (Marca Salbutamol)",
    termRO: "Ventolin (Marcă Salbutamol)",
    categoryColor: "bg-sky-50",
    defES: "Nombre comercial común del Salbutamol. Broncodilatador de acción rápida usado en inhalador para el alivio inmediato de crisis asmáticas o EPOC.",
    defRO: "Nume comercial comun al Salbutamolului. Bronhodilatator cu acțiune rapidă folosit în inhalator pentru ameliorarea imediată a crizelor asmatice sau BPOC.",
    nanda: null
}, {
    id: "v_v_ventriculo",
    termES: "Ventrículo",
    termRO: "Ventricul",
    categoryColor: "bg-red-50",
    defES: "1. Cardíaco: Cámaras inferiores del corazón que bombean sangre (Derecho a pulmones, Izquierdo a cuerpo). 2. Cerebral: Cavidades llenas de LCR en el cerebro.",
    defRO: "1. Cardiac: Camerele inferioare ale inimii care pompează sânge (Drept la plămâni, Stâng la corp). 2. Cerebral: Cavități pline cu LCR în creier.",
    nanda: null
}, {
    id: "v_v_vernix",
    termES: "Vérnix Caseosa",
    termRO: "Vernix Caseosa",
    categoryColor: "bg-stone-50",
    defES: "Sustancia blanca, grasa y cremosa (como queso) que recubre la piel del feto y recién nacido. Protege la piel del líquido amniótico, tiene propiedades antimicrobianas y facilita el parto.",
    defRO: "Substanță albă, grasă și cremoasă (ca brânza) care acoperă pielea fătului și a nou-născutului. Protejează pielea de lichidul amniotic, are proprietăți antimicrobiene și facilitează nașterea.",
    nanda: null
}, {
    id: "v_v_verruga",
    termES: "Verruga",
    termRO: "Neg (Verucă)",
    categoryColor: "bg-stone-50",
    defES: "Lesión cutánea benigna, elevada y rugosa causada por infección del Virus del Papiloma Humano (VPH). Vulgares (manos), Plantares (pies) o Genitales (condilomas).",
    defRO: "Leziune cutanată benignă, ridicată și aspră cauzată de infecția cu Virusul Papiloma Uman (HPV). Vulgare (mâini), Plantare (picioare) sau Genitale (condiloame).",
    nanda: null
}, {
    id: "v_v_vertebra",
    termES: "Vértebra",
    termRO: "Vertebră",
    categoryColor: "bg-stone-50",
    defES: "Huesos irregulares (33) que forman la columna vertebral. Protegen la médula espinal y soportan el cuerpo. Cervicales (7), Dorsales (12), Lumbares (5), Sacras (5) y Coccígeas (4).",
    defRO: "Oase neregulate (33) care formează coloana vertebrală. Protejează măduva spinării și susțin corpul. Cervicale (7), Dorsale (12), Lombare (5), Sacrale (5) și Coccigiene (4).",
    nanda: null
}, {
    id: "v_v_vertigo",
    termES: "Vértigo",
    termRO: "Vertij",
    categoryColor: "bg-purple-50",
    defES: "Sensación ilusoria de movimiento rotatorio (giro) del entorno o de uno mismo. Periférico (oído interno: Meniere, VPPB) o Central (cerebelo/tronco). Causa náuseas y desequilibrio.",
    defRO: "Senzație iluzorie de mișcare rotatorie (învârtire) a mediului sau a sinelui. Periferic (ureche internă: Meniere, VPPB) sau Central (cerebel/trunchi). Cauzează greață și dezechilibru.",
    nanda: {
        codeES: "00155",
        codeRO: "00155",
        labelES: "Riesgo de caídas",
        labelRO: "Risc de cădere"
    }
}, {
    id: "v_v_vesicula_biliar",
    termES: "Vesícula Biliar",
    termRO: "Vezică Biliară (Colecist)",
    categoryColor: "bg-green-50",
    defES: "Órgano en forma de saco bajo el hígado que almacena y concentra la bilis. La libera al duodeno tras las comidas grasas. Patología: Colelitiasis (piedras), Colecistitis (inflamación).",
    defRO: "Organ în formă de sac sub ficat care stochează și concentrează bila. O eliberează în duoden după mesele grase. Patologie: Colelitiază (pietre), Colecistită (inflamație).",
    nanda: null
}, {
    id: "v_v_vesicula_cutanea",
    termES: "Vesícula (Cutané)",
    termRO: "Veziculă (Cutanată)",
    categoryColor: "bg-pink-50",
    defES: "Lesión cutánea elevada, circunscrita y llena de líquido claro (seroso), menor de 1 cm (ej. herpes, varicela). Si es mayor de 1 cm se llama ampolla o flictena.",
    defRO: "Leziune cutanată ridicată, circumscrisă și plină cu lichid clar (seros), mai mică de 1 cm (ex. herpes, varicelă). Dacă este mai mare de 1 cm se numește bășică sau flictenă.",
    nanda: null
}, {
    id: "v_v_via_aerea",
    termES: "Vía Aérea",
    termRO: "Cale Aeriană",
    categoryColor: "bg-sky-50",
    defES: 'Conductos que permiten el paso del aire desde el exterior a los pulmones. Superior (nariz, faringe, laringe) e Inferior (tráquea, bronquios). Mantenerla permeable es la prioridad "A" en urgencias.',
    defRO: 'Conducte care permit trecerea aerului din exterior în plămâni. Superioară (nas, faringe, laringe) și Inferioară (trahee, bronhii). Menținerea permeabilității este prioritatea "A" în urgențe.',
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_v_via_central",
    termES: "Vía Central (CVC)",
    termRO: "Cale Centrală (CVC)",
    categoryColor: "bg-red-50",
    defES: "Catéter venoso insertado en una vena de gran calibre (Yugular, Subclavia, Femoral) con punta en vena cava. Para NPT, fármacos vesicantes, medición PVC o hemodiálisis.",
    defRO: "Cateter venos introdus într-o venă de calibru mare (Jugulară, Subclavie, Femurală) cu vârful în vena cavă. Pentru NPT, medicamente vezicante, măsurare PVC sau hemodializă.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_v_via_periferica",
    termES: "Vía Periférica (CVP)",
    termRO: "Cale Periferică (CVP)",
    categoryColor: "bg-teal-50",
    defES: "Catéter corto insertado en venas distales (brazo, mano). Uso habitual para fluidoterapia y medicación estándar. Se cambia cada 72-96h para evitar flebitis.",
    defRO: "Cateter scurt introdus în vene distale (braț, mână). Utilizare obișnuită pentru fluidoterapie și medicație standard. Se schimbă la fiecare 72-96h pentru a evita flebita.",
    nanda: null
}, {
    id: "v_v_viabilidad",
    termES: "Viabilidad Fetal",
    termRO: "Viabilitate Fetală",
    categoryColor: "bg-pink-50",
    defES: "Capacidad del feto para sobrevivir fuera del útero. Actualmente se considera a partir de la semana 22-24 de gestación o peso >500g, con cuidados intensivos neonatales.",
    defRO: "Capacitatea fătului de a supraviețui în afara uterului. În prezent se consideră începând cu săptămâna 22-24 de gestație sau greutate >500g, cu îngrijiri intensive neonatale.",
    nanda: null
}, {
    id: "v_v_vibrio",
    termES: "Vibrio cholerae",
    termRO: "Vibrio cholerae",
    categoryColor: "bg-orange-50",
    defES: 'Bacteria causante del cólera. Produce una toxina que provoca diarrea acuosa masiva ("agua de arroz"), deshidratación severa y muerte rápida si no se rehidrata.',
    defRO: 'Bacteria cauzatoare a holerei. Produce o toxină care provoacă diaree apoasă masivă ("apă de orez"), deshidratare severă și moarte rapidă dacă nu se rehidratează.',
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_v_vih",
    termES: "VIH (Virus Inmunodeficiencia Humana)",
    termRO: "HIV (Virusul Imunodeficienței Umane)",
    categoryColor: "bg-purple-50",
    defES: "Retrovirus que ataca al sistema inmunitario (células CD4). Se transmite por sangre, fluidos sexuales y leche materna. Sin tratamiento (TAR), evoluciona a SIDA.",
    defRO: "Retrovirus care atacă sistemul imunitar (celule CD4). Se transmite prin sânge, fluide sexuale și lapte matern. Fără tratament (TAR), evoluează spre SIDA.",
    nanda: {
        codeES: "00043",
        codeRO: "00043",
        labelES: "Protección ineficaz",
        labelRO: "Protecție ineficientă"
    }
}, {
    id: "v_v_virulencia",
    termES: "Virulencia",
    termRO: "Virulență",
    categoryColor: "bg-red-50",
    defES: "Grado de patogenicidad de un microorganismo; su capacidad para causar daño o enfermedad grave en el huésped. Depende de factores como toxinas, cápsula o velocidad de replicación.",
    defRO: "Gradul de patogenitate al unui microorganism; capacitatea sa de a cauza daune sau boală gravă în gazdă. Depinde de factori precum toxine, capsulă sau viteza de replicare.",
    nanda: null
}, {
    id: "v_v_virus",
    termES: "Virus",
    termRO: "Virus",
    categoryColor: "bg-purple-50",
    defES: "Agente infeccioso acelular microscópico que solo puede replicarse dentro de las células de un organismo vivo (parásito obligado). Contiene ADN o ARN. No responde a antibióticos.",
    defRO: "Agent infecțios acelular microscopic care se poate replica doar în interiorul celulelor unui organism viu (parazit obligat). Conține ADN sau ARN. Nu răspunde la antibiotice.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_v_viscera",
    termES: "Víscera",
    termRO: "Viscer (Organ Intern)",
    categoryColor: "bg-stone-50",
    defES: "Órgano interno contenido en las grandes cavidades corporales (tórax, abdomen, pelvis). Huecas (estómago, intestino) o Macizas (hígado, bazo). Dolor visceral es difuso y mal localizado.",
    defRO: "Organ intern conținut în marile cavități corporale (torace, abdomen, pelvis). Goale (stomac, intestin) sau Pline (ficat, splină). Durerea viscerală este difuză și prost localizată.",
    nanda: null
}, {
    id: "v_v_vision",
    termES: "Visión",
    termRO: "Vedere",
    categoryColor: "bg-blue-50",
    defES: "Sentido que permite interpretar el entorno mediante la luz. Implica ojo, nervio óptico y corteza visual. Agudeza visual (nitidez) y Campo visual (amplitud).",
    defRO: "Simț care permite interpretarea mediului prin lumină. Implică ochiul, nervul optic și cortexul vizual. Acuitate vizuală (claritate) și Câmp vizual (amplitudine).",
    nanda: null
}, {
    id: "v_v_vitamina_a",
    termES: "Vitamina A (Retinol)",
    termRO: "Vitamina A (Retinol)",
    categoryColor: "bg-yellow-50",
    defES: "Vitamina liposoluble esencial para la visión (especialmente nocturna), integridad de piel y mucosas, y sistema inmune. Déficit causa ceguera nocturna y xeroftalmia.",
    defRO: "Vitamină liposolubilă esențială pentru vedere (în special nocturnă), integritatea pielii și mucoaselor, și sistemul imunitar. Deficitul cauzează orbire nocturnă și xeroftalmie.",
    nanda: null
}, {
    id: "v_v_vitamina_b12",
    termES: "Vitamina B12 (Cobalamina)",
    termRO: "Vitamina B12 (Cobalamină)",
    categoryColor: "bg-yellow-50",
    defES: "Vitamina hidrosoluble vital para la formación de glóbulos rojos y función nerviosa. Solo en alimentos animales. Su déficit causa Anemia Perniciosa y neuropatía.",
    defRO: "Vitamină hidrosolubilă vitală pentru formarea globulelor roșii și funcția nervoasă. Doar în alimente animale. Deficitul său cauzează Anemie Pernicioasă și neuropatie.",
    nanda: null
}, {
    id: "v_v_vitamina_c",
    termES: "Vitamina C (Ácido Ascórbico)",
    termRO: "Vitamina C (Acid Ascorbic)",
    categoryColor: "bg-yellow-50",
    defES: "Antioxidante hidrosoluble necesario para la síntesis de colágeno, absorción de hierro y cicatrización. Déficit severo causa Escorbuto. Se encuentra en cítricos.",
    defRO: "Antioxidant hidrosolubil necesar pentru sinteza colagenului, absorbția fierului și cicatrizare. Deficitul sever cauzează Scorbut. Se găsește în citrice.",
    nanda: null
}, {
    id: "v_v_vitamina_d",
    termES: "Vitamina D (Calciferol)",
    termRO: "Vitamina D (Calciferol)",
    categoryColor: "bg-yellow-50",
    defES: "Liposoluble. Regula la absorción de calcio y fósforo (huesos). Se sintetiza en la piel por el sol. Déficit: Raquitismo (niños), Osteomalacia/Osteoporosis (adultos).",
    defRO: "Liposolubilă. Reglează absorbția calciului și fosforului (oase). Se sintetizează în piele prin soare. Deficit: Rahitism (copii), Osteomalacie/Osteoporoză (adulți).",
    nanda: null
}, {
    id: "v_v_vitamina_k",
    termES: "Vitamina K (Fitomenadiona)",
    termRO: "Vitamina K (Fitomenadionă)",
    categoryColor: "bg-yellow-50",
    defES: "Liposoluble. Esencial para la síntesis de factores de coagulación hepáticos. Se administra a todos los recién nacidos para prevenir la enfermedad hemorrágica.",
    defRO: "Liposolubilă. Esențială pentru sinteza factorilor de coagulare hepatici. Se administrează tuturor nou-născuților pentru a preveni boala hemoragică.",
    nanda: null
}, {
    id: "v_v_vitiligo",
    termES: "Vitíligo",
    termRO: "Vitiligo",
    categoryColor: "bg-stone-50",
    defES: "Trastorno cutáneo autoinmune caracterizado por la pérdida de melanocitos, provocando manchas blancas despigmentadas irregulares en la piel. Estético y psicosocial.",
    defRO: "Tulburare cutanată autoimună caracterizată prin pierderea melanocitelor, provocând pete albe depigmentate neregulate pe piele. Estetic și psihosocial.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_v_volemia",
    termES: "Volemia",
    termRO: "Volemie",
    categoryColor: "bg-red-50",
    defES: "Volumen total de sangre circulante en un individuo. Aprox. 5-6 litros en adulto (70-80 ml/kg). Hipovolemia (déficit) causa shock; Hipervolemia (exceso) causa edema y fallo cardíaco.",
    defRO: "Volumul total de sânge circulant la un individ. Aprox. 5-6 litri la adult (70-80 ml/kg). Hipovolemia (deficit) cauzează șoc; Hipervolemia (exces) cauzează edem și insuficiență cardiacă.",
    nanda: {
        codeES: "00027",
        codeRO: "00027",
        labelES: "Déficit de volumen de líquidos",
        labelRO: "Deficit de volum lichidian"
    }
}, {
    id: "v_v_volvulo",
    termES: "Vólvulo",
    termRO: "Volvulus",
    categoryColor: "bg-red-50",
    defES: "Torsión de un asa intestinal sobre su propio mesenterio, causando obstrucción intestinal mecánica y estrangulamiento vascular (isquemia/gangrena). Urgencia quirúrgica. Común en sigma.",
    defRO: "Răsucirea unei anse intestinale în jurul propriului mezenter, cauzând obstrucție intestinală mecanică și strangulare vasculară (ischemie/gangrenă). Urgență chirurgicală. Comun în sigmoid.",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_v_vomito",
    termES: "Vómito (Emesis)",
    termRO: "Vărsătură (Emeză)",
    categoryColor: "bg-orange-50",
    defES: "Expulsión forzada del contenido gástrico por la boca. Reflejo complejo coordinado por el bulbo raquídeo. Puede causar deshidratación, alcalosis metabólica y Mallory-Weiss.",
    defRO: "Expulzare forțată a conținutului gastric prin gură. Reflex complex coordonat de bulbul rahidian. Poate cauza deshidratare, alcaloză metabolică și Mallory-Weiss.",
    nanda: {
        codeES: "00134",
        codeRO: "00134",
        labelES: "Náuseas",
        labelRO: "Greață"
    }
}, {
    id: "v_v_vulva",
    termES: "Vulva",
    termRO: "Vulvă",
    categoryColor: "bg-pink-50",
    defES: "Conjunto de órganos genitales externos femeninos. Incluye: monte de Venus, labios mayores y menores, clítoris, vestíbulo y orificio vaginal. Vulvovaginitis: inflamación.",
    defRO: "Ansamblul organelor genitale externe feminine. Include: muntele lui Venus, labiile mari și mici, clitorisul, vestibulul și orificiul vaginal. Vulvovaginită: inflamație.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_u_unidades_sangre",
    termES: "Unidades de Sangre",
    termRO: "Unități de Sânge",
    categoryColor: "bg-red-50",
    defES: "Bolsas estandarizadas de componentes sanguíneos para transfusión. Una unidad de concentrado de hematíes (aprox 300ml) suele elevar la hemoglobina 1 g/dL.",
    defRO: "Pungi standardizate de componente sanguine pentru transfuzie. O unitate de concentrat eritrocitar (aprox 300ml) crește de obicei hemoglobina cu 1 g/dL.",
    nanda: null
}, {
    id: "v_u_unas_vidrio_reloj",
    termES: "Uñas en Vidrio de Reloj",
    termRO: "Unghii în Sticlă de Ceasornic",
    categoryColor: "bg-stone-50",
    defES: "Deformidad de las uñas caracterizada por una curvatura excesiva y pérdida del ángulo normal con la base. Asociada a acropaquia (dedos en palillo de tambor) en hipoxia crónica.",
    defRO: "Deformare a unghiilor caracterizată printr-o curbură excesivă și pierderea unghiului normal cu baza. Asociată cu hipocratismul digital în hipoxia cronică.",
    nanda: null
}, {
    id: "v_u_urticaria_gigante",
    termES: "Urticaria Gigante (Angioedema)",
    termRO: "Urticarie Gigantă (Angioedem)",
    categoryColor: "bg-red-50",
    defES: "Edema profundo de la dermis y tejido subcutáneo, afectando a menudo ojos, labios y lengua. Si afecta glotis es una emergencia respiratoria. Asociado a alergias o IECA.",
    defRO: "Edem profund al dermei și țesutului subcutanat, afectând adesea ochii, buzele și limba. Dacă afectează glota este o urgență respiratorie. Asociat cu alergii sau IECA.",
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_v_valoracion_enfermeria",
    termES: "Valoración de Enfermería",
    termRO: "Evaluare de Nursing",
    categoryColor: "bg-teal-50",
    defES: "Primera fase del Proceso de Atención de Enfermería (PAE). Recolección sistemática y continua de datos (subjetivos y objetivos) sobre el estado de salud del paciente para identificar problemas.",
    defRO: "Prima fază a Procesului de Îngrijire Nursing (PAE). Colectarea sistematică și continuă de date (subiective și obiective) despre starea de sănătate a pacientului pentru identificarea problemelor.",
    nanda: null
}, {
    id: "v_v_valores_normales",
    termES: "Valores Normales (Rango de Referencia)",
    termRO: "Valori Normale (Interval de Referință)",
    categoryColor: "bg-stone-50",
    defES: "Intervalo de valores de una medida fisiológica o prueba de laboratorio encontrado en el 95% de la población sana. Base para identificar patología (desviación de la normalidad).",
    defRO: "Interval de valori ale unei măsurători fiziologice sau teste de laborator găsit la 95% din populația sănătoasă. Bază pentru identificarea patologiei (abatere de la normalitate).",
    nanda: null
}, {
    id: "v_v_vasculitis",
    termES: "Vasculitis",
    termRO: "Vasculită",
    categoryColor: "bg-red-50",
    defES: "Inflamación de los vasos sanguíneos que causa estrechamiento, debilitamiento o cicatrización de sus paredes, pudiendo provocar isquemia tisular. Puede ser primaria o secundaria (lupus).",
    defRO: "Inflamația vaselor de sânge care cauzează îngustarea, slăbirea sau cicatrizarea pereților acestora, putând provoca ischemie tisulară. Poate fi primară sau secundară (lupus).",
    nanda: {
        codeES: "00204",
        codeRO: "00204",
        labelES: "Riesgo de perfusión tisular periférica ineficaz",
        labelRO: "Risc de perfuzie tisulară periferică ineficientă"
    }
}, {
    id: "v_v_vegano",
    termES: "Vegano",
    termRO: "Vegan",
    categoryColor: "bg-green-50",
    defES: "Persona que excluye de su dieta todos los productos de origen animal. Requiere suplementación con vitamina B12 para evitar anemia perniciosa y daño neurológico.",
    defRO: "Persoană care exclude din dieta sa toate produsele de origine animală. Necesită suplimentare cu vitamina B12 pentru a evita anemia pernicioasă și daunele neurologice.",
    nanda: {
        codeES: "00163",
        codeRO: "00163",
        labelES: "Disposición para mejorar la nutrición",
        labelRO: "Dispoziție pentru îmbunătățirea nutriției"
    }
}, {
    id: "v_v_vsg",
    termES: "VSG (Velocidad de Sedimentación Globular)",
    termRO: "VSH (Viteza de Sedimentare a Hematiilor)",
    categoryColor: "bg-yellow-50",
    defES: "Prueba de sangre inespecífica que mide qué tan rápido caen los eritrocitos en un tubo. Elevada en inflamación, infección, cáncer o enfermedades autoinmunes. Normal <15-20 mm/h.",
    defRO: "Test de sânge nespecific care măsoară cât de repede cad eritrocitele într-un tub. Crescută în inflamație, infecție, cancer sau boli autoimune. Normal <15-20 mm/h.",
    nanda: null
}, {
    id: "v_v_vias_administracion",
    termES: "Vías de Administración",
    termRO: "Căi de Administrare",
    categoryColor: "bg-teal-50",
    defES: "Rutas por las que se introduce un fármaco en el organismo. Enteral (oral, rectal), Parenteral (IV, IM, SC, ID), Tópica (piel, mucosas), Inhalatoria. Determinan la velocidad de acción.",
    defRO: "Rute prin care se introduce un medicament în organism. Enterală (orală, rectală), Parenterală (IV, IM, SC, ID), Topică (piele, mucoase), Inhalatorie. Determină viteza de acțiune.",
    nanda: null
}, {
    id: "v_v_vida_media",
    termES: "Vida Media (Semivida)",
    termRO: "Timp de Înjumătățire",
    categoryColor: "bg-teal-50",
    defES: "Tiempo necesario para que la concentración plasmática de un fármaco se reduzca a la mitad. Determina la frecuencia de dosificación (posología).",
    defRO: "Timpul necesar pentru ca concentrația plasmatică a unui medicament să se reducă la jumătate. Determină frecvența dozării (pozologia).",
    nanda: null
}, {
    id: "v_w_warfarina",
    termES: "Warfarina",
    termRO: "Warfarină",
    categoryColor: "bg-red-50",
    defES: "Anticoagulante oral que actúa inhibiendo la síntesis de factores de coagulación dependientes de la vitamina K (II, VII, IX, X). Requiere monitorización estricta del INR (rango terapéutico usual 2.0-3.0) por alto riesgo de sangrado.",
    defRO: "Anticoagulant oral care acționează prin inhibarea sintezei factorilor de coagulare dependenți de vitamina K (II, VII, IX, X). Necesită monitorizarea strictă a INR (interval terapeutic uzual 2.0-3.0) din cauza riscului ridicat de sângerare.",
    nanda: {
        codeES: "00206",
        codeRO: "00206",
        labelES: "Riesgo de sangrado",
        labelRO: "Risc de sângerare"
    }
}, {
    id: "v_w_weber_prueba",
    termES: "Weber (Prueba de)",
    termRO: "Weber (Testul)",
    categoryColor: "bg-stone-50",
    defES: "Prueba de audición que utiliza un diapasón vibrando colocado en la línea media del cráneo o frente. Evalúa la lateralización del sonido para diferenciar hipoacusia conductiva (se oye mejor en oído enfermo) de neurosensorial (se oye mejor en oído sano).",
    defRO: "Test de auz care utilizează un diapazon care vibrează plasat pe linia mediană a craniului sau frunții. Evaluează lateralizarea sunetului pentru a diferenția hipoacuzia de transmisie (se aude mai bine în urechea bolnavă) de cea neurosenzorială (se aude mai bine în urechea sănătoasă).",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: auditiva",
        labelRO: "Tulburare de percepție senzorială: auditivă"
    }
}, {
    id: "v_w_wernicke_area",
    termES: "Wernicke (Área de)",
    termRO: "Wernicke (Aria)",
    categoryColor: "bg-indigo-50",
    defES: "Región de la corteza cerebral (lóbulo temporal posterior izquierdo) responsable de la comprensión del lenguaje. Su lesión provoca Afasia de Wernicke (fluida o sensitiva): el paciente habla mucho pero sin sentido y no comprende lo que se le dice.",
    defRO: "Regiune a cortexului cerebral (lobul temporal posterior stâng) responsabilă de înțelegerea limbajului. Leziunea sa provoacă Afazia Wernicke (fluentă sau senzorială): pacientul vorbește mult, dar fără sens și nu înțelege ce i se spune.",
    nanda: {
        codeES: "00051",
        codeRO: "00051",
        labelES: "Deterioro de la comunicación verbal",
        labelRO: "Comunicare verbală afectată"
    }
}, {
    id: "v_w_wernicke_encefalopatia",
    termES: "Wernicke (Encefalopatía de)",
    termRO: "Wernicke (Encefalopatia)",
    categoryColor: "bg-purple-50",
    defES: "Trastorno neurológico agudo causado por deficiencia severa de tiamina (Vitamina B1), común en alcoholismo crónico. Tríada clásica: confusión mental, oftalmoplejia (parálisis ocular) y ataxia (descoordinación). Reversible si se trata precozmente.",
    defRO: "Tulburare neurologică acută cauzată de deficiența severă de tiamină (Vitamina B1), comună în alcoolismul cronic. Triada clasică: confuzie mentală, oftalmoplegie (paralizie oculară) și ataxie (necoordonare). Reversibilă dacă este tratată precoce.",
    nanda: {
        codeES: "00128",
        codeRO: "00128",
        labelES: "Confusión aguda",
        labelRO: "Confuzie acută"
    }
}, {
    id: "v_w_western_blot",
    termES: "Western Blot",
    termRO: "Western Blot",
    categoryColor: "bg-teal-50",
    defES: "Técnica de laboratorio de alta especificidad utilizada para detectar proteínas específicas en una muestra. Históricamente usada como prueba confirmatoria para el diagnóstico de infección por VIH tras un ELISA positivo.",
    defRO: "Tehnică de laborator de înaltă specificitate utilizată pentru detectarea proteinelor specifice într-o probă. Istoric folosită ca test de confirmare pentru diagnosticul infecției cu HIV după un ELISA pozitiv.",
    nanda: null
}, {
    id: "v_w_wharton",
    termES: "Wharton (Gelatina de)",
    termRO: "Wharton (Gelatina)",
    categoryColor: "bg-pink-50",
    defES: "Sustancia gelatinosa mucosa, rica en ácido hialurónico, que se encuentra dentro del cordón umbilical. Su función es proteger y aislar los vasos umbilicales (2 arterias, 1 vena) evitando su compresión y asegurando el flujo sanguíneo fetal.",
    defRO: "Substanță gelatinoasă mucoasă, bogată în acid hialuronic, care se găsește în interiorul cordonului ombilical. Funcția sa este de a proteja și izola vasele ombilicale (2 artere, 1 venă) prevenind compresia lor și asigurând fluxul sanguin fetal.",
    nanda: null
}, {
    id: "v_w_wheezing",
    termES: "Wheezing (Sibilancias)",
    termRO: "Wheezing (Sibilanțe)",
    categoryColor: "bg-sky-50",
    defES: 'Término anglosajón utilizado frecuentemente en medicina para describir el sonido respiratorio agudo y silbante producido por el paso del aire a través de vías aéreas estrechadas (broncoespasmo). Ver "Sibilancia".',
    defRO: 'Termen anglosaxon utilizat frecvent în medicină pentru a descrie sunetul respirator ascuțit și șuierător produs de trecerea aerului prin căile aeriene îngustate (bronhospasm). Vezi "Sibilanță".',
    nanda: {
        codeES: "00031",
        codeRO: "00031",
        labelES: "Limpieza ineficaz de las vías aéreas",
        labelRO: "Curățare ineficientă a căilor aeriene"
    }
}, {
    id: "v_w_whipple",
    termES: "Whipple (Procedimiento de)",
    termRO: "Whipple (Procedura - Pancreatoduodenectomie)",
    categoryColor: "bg-teal-50",
    defES: "Pancreatoduodenectomía cefálica. Cirugía mayor compleja utilizada para tratar tumores de la cabeza del páncreas. Implica extirpar la cabeza del páncreas, duodeno, parte del yeyuno, vesícula biliar y parte del estómago, reconectando luego el sistema digestivo.",
    defRO: "Pancreatoduodenectomie cefalică. Chirurgie majoră complexă utilizată pentru tratarea tumorilor capului pancreasului. Implică extirparea capului pancreasului, duodenului, unei părți din jejun, vezicii biliare și a unei părți din stomac, reconectând apoi sistemul digestiv.",
    nanda: {
        codeES: "00100",
        codeRO: "00100",
        labelES: "Retraso en la recuperación quirúrgica",
        labelRO: "Întârziere în recuperarea chirurgicală"
    }
}, {
    id: "v_w_willis",
    termES: "Willis (Polígono de)",
    termRO: "Willis (Poligonul)",
    categoryColor: "bg-indigo-50",
    defES: "Círculo de arterias interconectadas en la base del cerebro (carótidas internas y sistema vertebrobasilar). Actúa como mecanismo de seguridad: si una arteria se bloquea, la sangre puede fluir por las otras para irrigar el cerebro.",
    defRO: "Cerc de artere interconectate la baza creierului (carotide interne și sistem vertebro-bazilar). Acționează ca mecanism de siguranță: dacă o arteră se blochează, sângele poate curge prin celelalte pentru a iriga creierul.",
    nanda: {
        codeES: "00201",
        codeRO: "00201",
        labelES: "Riesgo de perfusión tisular cerebral ineficaz",
        labelRO: "Risc de perfuzie tisulară cerebrală ineficientă"
    }
}, {
    id: "v_w_wilms",
    termES: "Wilms (Tumor de)",
    termRO: "Wilms (Tumora - Nefroblastom)",
    categoryColor: "bg-stone-50",
    defES: "Nefroblastoma. Es el tipo de cáncer renal más común en niños. Se presenta generalmente como una masa abdominal asintomática, firme y lisa. El tratamiento suele ser nefrectomía y quimioterapia.",
    defRO: "Nefroblastom. Este tipul de cancer renal cel mai frecvent la copii. Se prezintă de obicei ca o masă abdominală asimptomatică, fermă și netedă. Tratamentul este de obicei nefrectomie și chimioterapie.",
    nanda: null
}, {
    id: "v_w_wilson",
    termES: "Wilson (Enfermedad de)",
    termRO: "Wilson (Boala)",
    categoryColor: "bg-orange-50",
    defES: "Trastorno genético raro del metabolismo del cobre que provoca su acumulación tóxica en hígado, cerebro y ojos (anillo de Kayser-Fleischer). Sin tratamiento, causa insuficiencia hepática y daño neurológico severo.",
    defRO: "Tulburare genetică rară a metabolismului cuprului care provoacă acumularea sa toxică în ficat, creier și ochi (inelul Kayser-Fleischer). Fără tratament, cauzează insuficiență hepatică și leziuni neurologice severe.",
    nanda: {
        codeES: "00178",
        codeRO: "00178",
        labelES: "Riesgo de deterioro de la función hepática",
        labelRO: "Risc de afectare a funcției hepatice"
    }
}, {
    id: "v_w_wolff_parkinson_white",
    termES: "Wolff-Parkinson-White (Síndrome WPW)",
    termRO: "Wolff-Parkinson-White (Sindrom WPW)",
    categoryColor: "bg-red-50",
    defES: "Síndrome de preexcitación cardíaca congénito. Existe una vía eléctrica accesoria (Haz de Kent) que evita el nodo AV, causando taquicardias supraventriculares paroxísticas. ECG: PR corto y onda Delta.",
    defRO: "Sindrom de preexcitație cardiacă congenital. Există o cale electrică accesorie (Fasciculul Kent) care ocolește nodul AV, cauzând tahicardii supraventriculare paroxistice. EKG: PR scurt și undă Delta.",
    nanda: {
        codeES: "00029",
        codeRO: "00029",
        labelES: "Disminución del gasto cardíaco",
        labelRO: "Scăderea debitului cardiac"
    }
}, {
    id: "v_x_xantelasma",
    termES: "Xantelasma",
    termRO: "Xantelasma",
    categoryColor: "bg-yellow-50",
    defES: "Placa amarillenta, plana y ligeramente elevada, situada en los párpados (generalmente cerca del ángulo interno). Compuesta por depósitos de colesterol. A menudo indica hiperlipidemia.",
    defRO: "Placă gălbuie, plană și ușor ridicată, situată pe pleoape (de obicei lângă unghiul intern). Compusă din depozite de colesterol. Adesea indică hiperlipidemie.",
    nanda: {
        codeES: "00118",
        codeRO: "00118",
        labelES: "Trastorno de la imagen corporal",
        labelRO: "Imagine corporală perturbată"
    }
}, {
    id: "v_x_xantoma",
    termES: "Xantoma",
    termRO: "Xantom",
    categoryColor: "bg-yellow-50",
    defES: "Nódulo o pápula cutánea de color amarillo-anaranjado formada por depósitos de lípidos en histiocitos de la piel. Aparecen en tendones, codos o rodillas. Signo de trastornos graves del metabolismo lipídico.",
    defRO: "Nodul sau papulă cutanată de culoare galben-portocalie formată din depozite de lipide în histiocitele pielii. Apar pe tendoane, coate sau genunchi. Semn al tulburărilor grave ale metabolismului lipidic.",
    nanda: null
}, {
    id: "v_x_xenoinjerto",
    termES: "Xenoinjerto (Heteroinjerto)",
    termRO: "Xenogrefă (Heterogrefă)",
    categoryColor: "bg-stone-50",
    defES: "Injerto de tejido u órgano tomado de un donante de una especie diferente a la del receptor (ej. válvulas cardíacas de cerdo o piel de pescado para quemados). Alto riesgo de rechazo inmunológico.",
    defRO: "Grefă de țesut sau organ prelevată de la un donator dintr-o specie diferită de cea a primitorului (ex. valve cardiace de porc sau piele de pește pentru arși). Risc ridicat de respingere imunologică.",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_x_xerodermia",
    termES: "Xerodermia (Xerosis)",
    termRO: "Xerodermie (Xeroză)",
    categoryColor: "bg-stone-50",
    defES: "Sequedad excesiva y patológica de la piel. La piel se vuelve áspera, escamosa y con fisuras, aumentando el riesgo de infección y prurito. Común en ancianos, hipotiroidismo o deshidratación.",
    defRO: "Uscăciune excesivă și patologică a pielii. Pielea devine aspră, solzoasă și cu fisuri, crescând riscul de infecție și prurit. Comună la vârstnici, hipotiroidism sau deshidratare.",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_x_xeroftalmia",
    termES: "Xeroftalmia",
    termRO: "Xeroftalmie",
    categoryColor: "bg-blue-50",
    defES: "Sequedad anormal de la conjuntiva y córnea del ojo, causada frecuentemente por deficiencia grave de vitamina A o síndrome de Sjögren. Puede llevar a ulceración corneal y ceguera.",
    defRO: "Uscăciune anormală a conjunctivei și corneei ochiului, cauzată frecvent de deficiența gravă de vitamina A sau sindromul Sjögren. Poate duce la ulcerație corneană și orbire.",
    nanda: {
        codeES: "00219",
        codeRO: "00219",
        labelES: "Riesgo de ojo seco",
        labelRO: "Risc de ochi uscat"
    }
}, {
    id: "v_x_xerostomia",
    termES: "Xerostomía",
    termRO: "Xerostomie",
    categoryColor: "bg-pink-50",
    defES: "Sensación subjetiva de sequedad bucal por falta de saliva (hiposalivación). Causas: fármacos (anticolinérgicos, antidepresivos), radioterapia, deshidratación o Sjögren. Dificulta el habla y la deglución.",
    defRO: "Senzație subiectivă de uscăciune a gurii din lipsă de salivă (hiposalivație). Cauze: medicamente (anticolinergice, antidepresive), radioterapie, deshidratare sau Sjögren. Îngreunează vorbirea și deglutiția.",
    nanda: {
        codeES: "00045",
        codeRO: "00045",
        labelES: "Deterioro de la mucosa oral",
        labelRO: "Mucoasă orală afectată"
    }
}, {
    id: "v_x_xifoides",
    termES: "Xifoides (Apéndice)",
    termRO: "Xifoid (Apendice)",
    categoryColor: "bg-stone-50",
    defES: "Pequeña pieza cartilaginosa u ósea situada en el extremo inferior del esternón. Punto de referencia anatómico para la RCP (las compresiones se hacen por encima) y la inserción de sondas.",
    defRO: "Mică piesă cartilaginoasă sau osoasă situată la extremitatea inferioară a sternului. Punct de referință anatomic pentru RCP (compresiunile se fac deasupra) și inserția sondelor.",
    nanda: null
}, {
    id: "v_x_x_fragil",
    termES: "X Frágil (Síndrome de)",
    termRO: "X Fragil (Sindromul)",
    categoryColor: "bg-purple-50",
    defES: "Causa hereditaria más frecuente de discapacidad intelectual y autismo. Trastorno genético ligado al cromosoma X. Características: cara alargada, orejas grandes, hiperactividad y retraso del lenguaje.",
    defRO: "Cauza ereditară cea mai frecventă a dizabilității intelectuale și autismului. Tulburare genetică legată de cromozomul X. Caracteristici: față alungită, urechi mari, hiperactivitate și întârziere de limbaj.",
    nanda: {
        codeES: "00112",
        codeRO: "00112",
        labelES: "Riesgo de retraso en el desarrollo",
        labelRO: "Risc de întârziere în dezvoltare"
    }
}, {
    id: "v_y_yeyuno",
    termES: "Yeyuno",
    termRO: "Jejun",
    categoryColor: "bg-orange-50",
    defES: "Segunda porción del intestino delgado (aprox. 2.5 m), situada entre el duodeno y el íleon. Es el lugar principal de absorción de la mayoría de los nutrientes (carbohidratos, proteínas).",
    defRO: "A doua porțiune a intestinului subțire (aprox. 2,5 m), situată între duoden și ileon. Este locul principal de absorbție a majorității nutrienților (carbohidrați, proteine).",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_y_yeyunostomia",
    termES: "Yeyunostomía",
    termRO: "Jejunostomie",
    categoryColor: "bg-teal-50",
    defES: "Abertura quirúrgica creada en el yeyuno a través de la pared abdominal para colocar una sonda de alimentación. Indicada cuando el estómago no es funcional o hay riesgo alto de aspiración (post-píloro).",
    defRO: "Deschidere chirurgicală creată în jejun prin peretele abdominal pentru a plasa o sondă de alimentare. Indicată când stomacul nu este funcțional sau există risc ridicat de aspirație (post-piloric).",
    nanda: {
        codeES: "00046",
        codeRO: "00046",
        labelES: "Deterioro de la integridad cutánea",
        labelRO: "Integritate a pielii afectată"
    }
}, {
    id: "v_y_yersinia",
    termES: "Yersinia",
    termRO: "Yersinia",
    categoryColor: "bg-red-50",
    defES: "Género de bacterias. Yersinia enterocolitica causa gastroenteritis (yersiniosis) con diarrea, fiebre y dolor abdominal que simula apendicitis. Yersinia pestis causa la peste.",
    defRO: "Gen de bacterii. Yersinia enterocolitica cauzează gastroenterită (yersinioză) cu diaree, febră și durere abdominală care simulează apendicita. Yersinia pestis cauzează ciuma.",
    nanda: {
        codeES: "00013",
        codeRO: "00013",
        labelES: "Diarrea",
        labelRO: "Diaree"
    }
}, {
    id: "v_y_yodo_povidona",
    termES: "Yodo Povidona (Betadine)",
    termRO: "Iod Povidonă (Betadină)",
    categoryColor: "bg-teal-50",
    defES: "Antiséptico tópico de amplio espectro que libera yodo lentamente. Usado para desinfección de piel intacta, heridas y preparación prequirúrgica. Contraindicado en alergia al yodo, neonatos y problemas tiroideos.",
    defRO: "Antiseptic topic cu spectru larg care eliberează iod lent. Folosit pentru dezinfecția pielii intacte, plăgilor și pregătirea prechirurgicală. Contraindicat în alergia la iod, nou-născuți și probleme tiroidiene.",
    nanda: {
        codeES: "00217",
        codeRO: "00217",
        labelES: "Riesgo de reacción alérgica",
        labelRO: "Risc de reacție alergică"
    }
}, {
    id: "v_y_yodo_radioactivo",
    termES: "Yodo Radioactivo (I-131)",
    termRO: "Iod Radioactiv (I-131)",
    categoryColor: "bg-purple-50",
    defES: "Isótopo radiactivo del yodo administrado oralmente. Se acumula en la glándula tiroides y destruye sus células mediante radiación. Tratamiento definitivo para hipertiroidismo (Graves) y cáncer de tiroides.",
    defRO: "Izotop radioactiv al iodului administrat oral. Se acumulează în glanda tiroidă și distruge celulele acesteia prin radiații. Tratament definitiv pentru hipertiroidism (Graves) și cancer tiroidian.",
    nanda: null
}, {
    id: "v_y_yema_dedo",
    termES: "Yema del dedo (Pulpejo)",
    termRO: "Vârful degetului (Pulpa)",
    categoryColor: "bg-stone-50",
    defES: "Parte carnosa distal de los dedos, rica en terminaciones nerviosas y capilares. Sitio de elección para la punción capilar (glucemia) y valoración de la sensibilidad táctil.",
    defRO: "Partea cărnoasă distală a degetelor, bogată în terminații nervoase și capilare. Locul de elecție pentru puncția capilară (glicemie) și evaluarea sensibilității tactile.",
    nanda: null
}, {
    id: "v_y_yunque",
    termES: "Yunque (Incus)",
    termRO: "Nikovala (Incus)",
    categoryColor: "bg-stone-50",
    defES: "Huesecillo medio del oído medio, situado entre el martillo y el estribo. Transmite las vibraciones sonoras desde la membrana timpánica hacia el oído interno.",
    defRO: "Osciorul mijlociu al urechii medii, situat între ciocan și scăriță. Transmite vibrațiile sonore de la membrana timpanică spre urechea internă.",
    nanda: null
}, {
    id: "v_z_zidovudina",
    termES: "Zidovudina (AZT)",
    termRO: "Zidovudină (AZT)",
    categoryColor: "bg-teal-50",
    defES: "Primer fármaco antirretroviral (inhibidor de la transcriptasa inversa) aprobado para el tratamiento del VIH. Reduce la replicación viral. Fundamental en la prevención de transmisión vertical madre-hijo.",
    defRO: "Primul medicament antiretroviral (inhibitor al transcriptazei inverse) aprobat pentru tratamentul HIV. Reduce replicarea virală. Fundamental în prevenirea transmiterii verticale mamă-copil.",
    nanda: null
}, {
    id: "v_z_ziehl_neelsen",
    termES: "Ziehl-Neelsen (Tinción)",
    termRO: "Ziehl-Neelsen (Colorația)",
    categoryColor: "bg-red-50",
    defES: "Técnica de tinción microbiológica específica para identificar bacterias ácido-alcohol resistentes (BAAR), principalmente Mycobacterium tuberculosis. Es la prueba rápida estándar para el diagnóstico de tuberculosis activa en esputo.",
    defRO: "Tehnică de colorare microbiologică specifică pentru identificarea bacteriilor acid-alcool rezistente (BAAR), în principal Mycobacterium tuberculosis. Este testul rapid standard pentru diagnosticul tuberculozei active în spută.",
    nanda: null
}, {
    id: "v_z_zigoto",
    termES: "Zigoto",
    termRO: "Zigot",
    categoryColor: "bg-pink-50",
    defES: "Célula diploide resultante de la fecundación (unión) de un óvulo y un espermatozoide. Contiene la carga genética completa del nuevo individuo y da inicio al desarrollo embrionario.",
    defRO: "Celulă diploidă rezultată din fecundarea (unirea) unui ovul și a unui spermatozoid. Conține încărcătura genetică completă a noului individ și dă startul dezvoltării embrionare.",
    nanda: null
}, {
    id: "v_z_zigomatico",
    termES: "Zigomático (Malar)",
    termRO: "Zigomatic (Malar)",
    categoryColor: "bg-stone-50",
    defES: "Hueso par de la cara que forma el pómulo y parte de la órbita ocular. Las fracturas del complejo zigomático son comunes en traumatismos faciales y pueden causar deformidad y diplopía.",
    defRO: "Os pereche al feței care formează pometul și o parte a orbitei oculare. Fracturile complexului zigomatic sunt comune în traumatismele faciale și pot cauza deformare și diplopie.",
    nanda: null
}, {
    id: "v_z_zinc",
    termES: "Zinc",
    termRO: "Zinc",
    categoryColor: "bg-yellow-50",
    defES: "Oligoelemento esencial que participa en la función inmunitaria, síntesis de ADN y cicatrización de heridas. Su déficit causa retraso en el crecimiento, dermatitis y mala cicatrización.",
    defRO: "Oligoelement esențial care participă la funcția imunitară, sinteza ADN-ului și cicatrizarea plăgilor. Deficitul său cauzează întârziere în creștere, dermatită și vindecare proastă.",
    nanda: {
        codeES: "00002",
        codeRO: "00002",
        labelES: "Desequilibrio nutricional: inferior a las necesidades corporales",
        labelRO: "Dezechilibru nutrițional: inferior nevoilor corporale"
    }
}, {
    id: "v_z_zollinger_ellison",
    termES: "Zollinger-Ellison (Síndrome de)",
    termRO: "Zollinger-Ellison (Sindrom)",
    categoryColor: "bg-orange-50",
    defES: "Enfermedad causada por un tumor secretor de gastrina (gastrinoma), generalmente en el páncreas o duodeno. Provoca hipersecreción masiva de ácido gástrico, resultando en úlceras pépticas múltiples y graves.",
    defRO: "Boală cauzată de o tumoare secretoare de gastrină (gastrinom), de obicei în pancreas sau duoden. Provoacă hipersecreție masivă de acid gastric, rezultând în ulcere peptice multiple și grave.",
    nanda: {
        codeES: "00132",
        codeRO: "00132",
        labelES: "Dolor agudo",
        labelRO: "Durere acută"
    }
}, {
    id: "v_z_zona_pellucida",
    termES: "Zona Pelúcida",
    termRO: "Zona Pellucida",
    categoryColor: "bg-pink-50",
    defES: "Capa glicoproteica externa que rodea al ovocito. Es fundamental en la fecundación (unión del espermatozoide) y previene la poliespermia (entrada de más de un espermatozoide).",
    defRO: "Strat glicoproteic extern care înconjoară ovocitul. Este fundamental în fecundare (legarea spermatozoidului) și previne polispermia (intrarea a mai mult de un spermatozoid).",
    nanda: null
}, {
    id: "v_z_zonula_zinn",
    termES: "Zónula de Zinn (Ligamento suspensorio)",
    termRO: "Zonula Zinn (Ligament suspensor)",
    categoryColor: "bg-blue-50",
    defES: "Conjunto de fibras finas que conectan el cuerpo ciliar con el cristalino del ojo. Mantienen el cristalino en su lugar y transmiten la fuerza muscular para la acomodación (enfoque).",
    defRO: "Ansamblu de fibre fine care conectează corpul ciliar de cristalinul ochiului. Mențin cristalinul la locul său și transmit forța musculară pentru acomodare (focalizare).",
    nanda: null
}, {
    id: "v_z_zoonosis",
    termES: "Zoonosis",
    termRO: "Zoonoză",
    categoryColor: "bg-green-50",
    defES: "Enfermedad infecciosa que se transmite de forma natural de los animales vertebrados al ser humano. Ejemplos: Rabia, Brucelosis, Leptospirosis, COVID-19 (origen).",
    defRO: "Boală infecțioasă care se transmite în mod natural de la animalele vertebrate la om. Exemple: Rabie, Bruceloză, Leptospiroză, COVID-19 (origine).",
    nanda: {
        codeES: "00004",
        codeRO: "00004",
        labelES: "Riesgo de infección",
        labelRO: "Risc de infecție"
    }
}, {
    id: "v_z_zumbido",
    termES: "Zumbido (Tinnitus/Acúfeno)",
    termRO: "Țiuit (Tinitus/Acufenă)",
    categoryColor: "bg-gray-50",
    defES: "Percepción de sonido en el oído (pitido, zumbido, rugido) en ausencia de sonido externo. Puede ser síntoma de daño auditivo, tapón de cerumen, HTA o toxicidad por fármacos.",
    defRO: "Percepția sunetului în ureche (țiuit, bâzâit, uruit) în absența sunetului extern. Poate fi simptom de leziune auditivă, dop de cerumen, HTA sau toxicitate medicamentoasă.",
    nanda: {
        codeES: "00122",
        codeRO: "00122",
        labelES: "Trastorno de la percepción sensorial: auditiva",
        labelRO: "Tulburare de percepție senzorială: auditivă"
    }
}];
