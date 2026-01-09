/**
 * DATABASE: DUELINGO - SISTEMA DE NIVELES
 * Curso de Enfermería · Edición Mirela Petrescu · 2026
 * 
 * Estructura moderna: Niveles por dificultad con temas mezclados
 * - Nivel 1: Fundamentos (Fácil)
 * - Nivel 2: Competencias (Intermedio)
 * - Nivel 3: Dominio (Avanzado)
 * 
 * TODAS las opciones tienen traducción ES/RO fiel
 */

export const UNIT_1_DATA = {
  id: "unit_urgencias",
  titleES: "Urgencias",
  titleRO: "Urgențe",
  
  lessons: [
    // =========================================================================
    // NIVEL 1: FUNDAMENTOS (FÁCIL)
    // =========================================================================
    {
      id: "nivel_1_espectro_a",
      level: 1,
      titleES: "Primeros Pasos",
      titleRO: "Primii Pași",
      difficulty: "easy",
      color: "emerald",
      questions: [
        {
          id: 1,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿A partir de qué valor hablamos de hipoglucemia?",
          promptRO: "De la ce valoare vorbim despre hipoglicemie?",
          options: [
            { id: "a", textES: "< 70 mg/dl", textRO: "< 70 mg/dl", correct: true },
            { id: "b", textES: "< 100 mg/dl", textRO: "< 100 mg/dl", correct: false },
            { id: "c", textES: "< 50 mg/dl", textRO: "< 50 mg/dl", correct: false },
          ]
        },
        {
          id: 2,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Cuánto tiempo debe durar una crisis para ser estatus epiléptico?",
          promptRO: "Cât timp trebuie să dureze o criză pentru a fi stare de rău epileptic?",
          options: [
            { id: "a", textES: "≥ 5 minutos", textRO: "≥ 5 minute", correct: true },
            { id: "b", textES: "≥ 30 minutos", textRO: "≥ 30 minute", correct: false },
            { id: "c", textES: "≥ 1 hora", textRO: "≥ 1 oră", correct: false },
          ]
        },
        {
          id: 3,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Cuáles son las '3 P' de la hiperglucemia?",
          promptRO: "Care sunt cele '3 P' ale hiperglicemiei?",
          options: [
            { id: "a", textES: "Poliuria, Polidipsia, Polifagia", textRO: "Poliurie, Polidipsie, Polifagie", correct: true },
            { id: "b", textES: "Palidez, Palpitaciones, Pánico", textRO: "Paloare, Palpitații, Panică", correct: false },
            { id: "c", textES: "Presión, Pulso, Peso", textRO: "Presiune, Puls, Greutate", correct: false },
          ]
        },
        {
          id: 4,
          type: "true_false",
          topic: "hipoglucemia",
          promptES: "La hipoglucemia puede matar en minutos si no se trata.",
          promptRO: "Hipoglicemia poate ucide în câteva minute dacă nu este tratată.",
          correct: true
        },
        {
          id: 5,
          type: "true_false",
          topic: "hiperglucemia",
          promptES: "El aliento a manzana o acetona es un signo de cetoacidosis.",
          promptRO: "Respirația cu miros de mere sau acetonă este un semn de cetoacidoză.",
          correct: true
        },
        {
          id: 6,
          type: "true_false",
          topic: "crisis",
          promptES: "En la fase postcrítica es normal que el paciente esté confuso.",
          promptRO: "În faza postcritică este normal ca pacientul să fie confuz.",
          correct: true
        },
        {
          id: 7,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "La nemotecnia 'FRITAS' recuerda los síntomas de:",
          promptRO: "Mnemotehnica 'FRITAS' amintește simptomele de:",
          options: [
            { id: "a", textES: "Hipoglucemia", textRO: "Hipoglicemie", correct: true },
            { id: "b", textES: "Hiperglucemia", textRO: "Hiperglicemie", correct: false },
            { id: "c", textES: "Crisis convulsiva", textRO: "Criză convulsivă", correct: false },
          ]
        },
        {
          id: 8,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Cuántas fases tiene una crisis tónico-clónica?",
          promptRO: "Câte faze are o criză tonico-clonică?",
          options: [
            { id: "a", textES: "3: Tónica, Clónica, Postcrítica", textRO: "3: Tonică, Clonică, Postcritică", correct: true },
            { id: "b", textES: "2: Inicio y Fin", textRO: "2: Început și Sfârșit", correct: false },
            { id: "c", textES: "1: Solo convulsión", textRO: "1: Doar convulsie", correct: false },
          ]
        },
      ]
    },
    
    {
      id: "nivel_1_espectro_b",
      level: 1,
      titleES: "Reconocimiento",
      titleRO: "Recunoaștere",
      difficulty: "easy",
      color: "emerald",
      questions: [
        {
          id: 1,
          type: "true_false",
          topic: "hipoglucemia",
          promptES: "El chocolate es ideal para remontar una hipoglucemia rápidamente.",
          promptRO: "Ciocolata este ideală pentru a corecta rapid o hipoglicemie.",
          correct: false
        },
        {
          id: 2,
          type: "true_false",
          topic: "crisis",
          promptES: "Durante una crisis debemos meter algo en la boca del paciente.",
          promptRO: "În timpul unei crize trebuie să băgăm ceva în gura pacientului.",
          correct: false
        },
        {
          id: 3,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "La cetoacidosis diabética (CAD) es más típica de:",
          promptRO: "Cetoacidoza diabetică (CAD) este mai tipică pentru:",
          options: [
            { id: "a", textES: "Diabetes tipo 1", textRO: "Diabet tip 1", correct: true },
            { id: "b", textES: "Diabetes tipo 2", textRO: "Diabet tip 2", correct: false },
            { id: "c", textES: "Prediabetes", textRO: "Prediabet", correct: false },
          ]
        },
        {
          id: 4,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Cuál es la causa más frecuente de hipoglucemia en diabéticos?",
          promptRO: "Care este cauza cea mai frecventă de hipoglicemie la diabetici?",
          options: [
            { id: "a", textES: "Exceso de insulina o antidiabéticos", textRO: "Exces de insulină sau antidiabetice", correct: true },
            { id: "b", textES: "Comer demasiado", textRO: "A mânca prea mult", correct: false },
            { id: "c", textES: "Falta de ejercicio", textRO: "Lipsa exercițiului fizic", correct: false },
          ]
        },
        {
          id: 5,
          type: "select_correct",
          topic: "crisis",
          promptES: "En un anciano, la causa más frecuente de epilepsia de inicio tardío es:",
          promptRO: "La un bătrân, cauza cea mai frecventă de epilepsie cu debut tardiv este:",
          options: [
            { id: "a", textES: "Ictus (ACV)", textRO: "AVC (Accident Vascular Cerebral)", correct: true },
            { id: "b", textES: "Epilepsia genética", textRO: "Epilepsia genetică", correct: false },
            { id: "c", textES: "Fiebre", textRO: "Febră", correct: false },
          ]
        },
        {
          id: 6,
          type: "true_false",
          topic: "hipoglucemia",
          promptES: "Ante un diabético con comportamiento extraño, lo primero es medir la glucemia.",
          promptRO: "În fața unui diabetic cu comportament ciudat, primul lucru este să măsori glicemia.",
          correct: true
        },
        {
          id: 7,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Qué respiración es característica de acidosis metabólica grave?",
          promptRO: "Ce respirație este caracteristică acidozei metabolice severe?",
          options: [
            { id: "a", textES: "Kussmaul (profunda y rápida)", textRO: "Kussmaul (profundă și rapidă)", correct: true },
            { id: "b", textES: "Cheyne-Stokes", textRO: "Cheyne-Stokes", correct: false },
            { id: "c", textES: "Bradipnea", textRO: "Bradipnee", correct: false },
          ]
        },
        {
          id: 8,
          type: "true_false",
          topic: "crisis",
          promptES: "Una primera crisis en un anciano siempre requiere estudio.",
          promptRO: "O primă criză la un bătrân necesită întotdeauna investigații.",
          correct: true
        },
      ]
    },

    // =========================================================================
    // NIVEL 2: COMPETENCIAS (INTERMEDIO)
    // =========================================================================
    {
      id: "nivel_2_espectro_a",
      level: 2,
      titleES: "Actuación Inicial",
      titleRO: "Acțiune Inițială",
      difficulty: "medium",
      color: "amber",
      questions: [
        {
          id: 1,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Cuál es la 'Regla de los 15' en hipoglucemia?",
          promptRO: "Care este 'Regula lui 15' în hipoglicemie?",
          options: [
            { id: "a", textES: "15g glucosa, esperar 15 min, repetir glucemia", textRO: "15g glucoză, așteaptă 15 min, repetă glicemia", correct: true },
            { id: "b", textES: "15 minutos de ejercicio", textRO: "15 minute de exerciții", correct: false },
            { id: "c", textES: "15 gotas de insulina", textRO: "15 picături de insulină", correct: false },
          ]
        },
        {
          id: 2,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Cuál es la primera acción durante una crisis convulsiva?",
          promptRO: "Care este prima acțiune în timpul unei crize convulsive?",
          options: [
            { id: "a", textES: "Proteger al paciente de lesiones", textRO: "Protejează pacientul de leziuni", correct: true },
            { id: "b", textES: "Sujetar fuertemente al paciente", textRO: "Ține pacientul strâns", correct: false },
            { id: "c", textES: "Darle agua", textRO: "Dă-i apă", correct: false },
          ]
        },
        {
          id: 3,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Qué es lo PRIMERO que debemos administrar en cetoacidosis?",
          promptRO: "Care este PRIMUL lucru pe care trebuie să-l administrăm în cetoacidoză?",
          options: [
            { id: "a", textES: "Fluidos (suero fisiológico)", textRO: "Lichide (ser fiziologic)", correct: true },
            { id: "b", textES: "Insulina", textRO: "Insulină", correct: false },
            { id: "c", textES: "Potasio", textRO: "Potasiu", correct: false },
          ]
        },
        {
          id: 4,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "Si el paciente hipoglucémico está INCONSCIENTE, ¿qué NO debemos hacer?",
          promptRO: "Dacă pacientul hipoglicemic este INCONȘTIENT, ce NU trebuie să facem?",
          options: [
            { id: "a", textES: "Dar nada por boca", textRO: "Nu dăm nimic pe gură", correct: true },
            { id: "b", textES: "Administrar glucosa IV", textRO: "Administrăm glucoză IV", correct: false },
            { id: "c", textES: "Llamar al médico", textRO: "Chemăm medicul", correct: false },
          ]
        },
        {
          id: 5,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Qué posición debemos poner al paciente DESPUÉS de la crisis?",
          promptRO: "În ce poziție trebuie să punem pacientul DUPĂ criză?",
          options: [
            { id: "a", textES: "Posición lateral de seguridad", textRO: "Poziție laterală de siguranță", correct: true },
            { id: "b", textES: "Sentado", textRO: "Șezând", correct: false },
            { id: "c", textES: "Boca arriba", textRO: "Pe spate", correct: false },
          ]
        },
        {
          id: 6,
          type: "select_correct",
          topic: "especial",
          promptES: "En la eclampsia, ¿en qué posición debe estar la embarazada?",
          promptRO: "În eclampsie, în ce poziție trebuie să fie gravida?",
          options: [
            { id: "a", textES: "Lateral IZQUIERDA", textRO: "Lateral STÂNGA", correct: true },
            { id: "b", textES: "Lateral derecha", textRO: "Lateral dreapta", correct: false },
            { id: "c", textES: "Boca arriba", textRO: "Pe spate", correct: false },
          ]
        },
        {
          id: 7,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Qué usamos si el paciente no tiene vía IV y está inconsciente?",
          promptRO: "Ce folosim dacă pacientul nu are abord venos și este inconștient?",
          options: [
            { id: "a", textES: "Glucagón IM o SC", textRO: "Glucagon IM sau SC", correct: true },
            { id: "b", textES: "Zumo de naranja oral", textRO: "Suc de portocale oral", correct: false },
            { id: "c", textES: "Esperar a la vía IV", textRO: "Așteptăm abordul venos", correct: false },
          ]
        },
        {
          id: 8,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Qué debemos hacer SIEMPRE tras una crisis en un diabético?",
          promptRO: "Ce trebuie să facem ÎNTOTDEAUNA după o criză la un diabetic?",
          options: [
            { id: "a", textES: "Medir la glucemia capilar", textRO: "Măsurăm glicemia capilară", correct: true },
            { id: "b", textES: "Dar insulina", textRO: "Dăm insulină", correct: false },
            { id: "c", textES: "Administrar antibiótico", textRO: "Administrăm antibiotic", correct: false },
          ]
        },
      ]
    },

    {
      id: "nivel_2_espectro_b",
      level: 2,
      titleES: "Medicación",
      titleRO: "Medicație",
      difficulty: "medium",
      color: "amber",
      questions: [
        {
          id: 1,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Cuánto Glucosmon® R50 se administra inicialmente?",
          promptRO: "Câte fiole de Glucosmon® R50 se administrează inițial?",
          options: [
            { id: "a", textES: "2-3 ampollas (40-60 ml) IV lento", textRO: "2-3 fiole (40-60 ml) IV lent", correct: true },
            { id: "b", textES: "1 ampolla IM", textRO: "1 fiolă IM", correct: false },
            { id: "c", textES: "5 ampollas IV rápido", textRO: "5 fiole IV rapid", correct: false },
          ]
        },
        {
          id: 2,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Cuál es el tratamiento de primera línea para el estatus epiléptico?",
          promptRO: "Care este tratamentul de primă linie pentru starea de rău epileptic?",
          options: [
            { id: "a", textES: "Benzodiacepinas (Diazepam o Midazolam)", textRO: "Benzodiazepine (Diazepam sau Midazolam)", correct: true },
            { id: "b", textES: "Paracetamol", textRO: "Paracetamol", correct: false },
            { id: "c", textES: "Adrenalina", textRO: "Adrenalină", correct: false },
          ]
        },
        {
          id: 3,
          type: "select_correct",
          topic: "especial",
          promptES: "¿Cuál es el tratamiento de elección en la eclampsia?",
          promptRO: "Care este tratamentul de elecție în eclampsie?",
          options: [
            { id: "a", textES: "Sulfato de magnesio", textRO: "Sulfat de magneziu", correct: true },
            { id: "b", textES: "Diazepam", textRO: "Diazepam", correct: false },
            { id: "c", textES: "Insulina", textRO: "Insulină", correct: false },
          ]
        },
        {
          id: 4,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Cuánto Diazepam IV se administra en estatus epiléptico?",
          promptRO: "Câte mg de Diazepam IV se administrează în starea de rău epileptic?",
          options: [
            { id: "a", textES: "10 mg IV lento, repetir cada 5-10 min", textRO: "10 mg IV lent, repetă la fiecare 5-10 min", correct: true },
            { id: "b", textES: "50 mg IV rápido", textRO: "50 mg IV rapid", correct: false },
            { id: "c", textES: "2 mg IM", textRO: "2 mg IM", correct: false },
          ]
        },
        {
          id: 5,
          type: "select_correct",
          topic: "especial",
          promptES: "En un alcohólico con hipoglucemia, ¿qué debemos dar PRIMERO?",
          promptRO: "La un alcoolic cu hipoglicemie, ce trebuie să dăm PRIMUL?",
          options: [
            { id: "a", textES: "Tiamina (vitamina B1)", textRO: "Tiamină (vitamina B1)", correct: true },
            { id: "b", textES: "Glucosa", textRO: "Glucoză", correct: false },
            { id: "c", textES: "Diazepam", textRO: "Diazepam", correct: false },
          ]
        },
        {
          id: 6,
          type: "select_correct",
          topic: "especial",
          promptES: "¿Cuál es el antídoto del sulfato de magnesio?",
          promptRO: "Care este antidotul sulfatului de magneziu?",
          options: [
            { id: "a", textES: "Gluconato cálcico", textRO: "Gluconat de calciu", correct: true },
            { id: "b", textES: "Flumazenilo", textRO: "Flumazenil", correct: false },
            { id: "c", textES: "Naloxona", textRO: "Naloxonă", correct: false },
          ]
        },
        {
          id: 7,
          type: "true_false",
          topic: "crisis",
          promptES: "Las crisis febriles en niños siempre requieren antiepilépticos crónicos.",
          promptRO: "Crizele febrile la copii necesită întotdeauna antiepileptice cronice.",
          correct: false
        },
        {
          id: 8,
          type: "true_false",
          topic: "especial",
          promptES: "Los antipiréticos previenen las crisis febriles en niños.",
          promptRO: "Antipireticele previn crizele febrile la copii.",
          correct: false
        },
      ]
    },

    // =========================================================================
    // NIVEL 3: DOMINIO (AVANZADO)
    // =========================================================================
    {
      id: "nivel_3_espectro_a",
      level: 3,
      titleES: "Decisiones Críticas",
      titleRO: "Decizii Critice",
      difficulty: "hard",
      color: "rose",
      questions: [
        {
          id: 1,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Por qué es peligrosa la hipoglucemia por sulfonilureas?",
          promptRO: "De ce este periculoasă hipoglicemia cauzată de sulfonilureice?",
          options: [
            { id: "a", textES: "Efecto prolongado (24-72h), puede repetirse", textRO: "Efect prelungit (24-72h), se poate repeta", correct: true },
            { id: "b", textES: "No responde a glucosa", textRO: "Nu răspunde la glucoză", correct: false },
            { id: "c", textES: "Causa alergia grave", textRO: "Provoacă alergie gravă", correct: false },
          ]
        },
        {
          id: 2,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Por qué debemos vigilar el potasio en CAD/EHH?",
          promptRO: "De ce trebuie să monitorizăm potasiul în CAD/EHH?",
          options: [
            { id: "a", textES: "Baja rápidamente con insulina, riesgo de arritmias", textRO: "Scade rapid cu insulina, risc de aritmii", correct: true },
            { id: "b", textES: "Sube demasiado siempre", textRO: "Crește prea mult întotdeauna", correct: false },
            { id: "c", textES: "No tiene importancia", textRO: "Nu are importanță", correct: false },
          ]
        },
        {
          id: 3,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Cuál es el ritmo ideal de descenso de glucemia en CAD?",
          promptRO: "Care este ritmul ideal de scădere a glicemiei în CAD?",
          options: [
            { id: "a", textES: "50-75 mg/dl por hora", textRO: "50-75 mg/dl pe oră", correct: true },
            { id: "b", textES: "200 mg/dl por hora", textRO: "200 mg/dl pe oră", correct: false },
            { id: "c", textES: "Lo más rápido posible", textRO: "Cât mai rapid posibil", correct: false },
          ]
        },
        {
          id: 4,
          type: "select_correct",
          topic: "especial",
          promptES: "¿Qué signo indica toxicidad por sulfato de magnesio?",
          promptRO: "Ce semn indică toxicitate prin sulfat de magneziu?",
          options: [
            { id: "a", textES: "Desaparición del reflejo rotuliano", textRO: "Dispariția reflexului rotulian", correct: true },
            { id: "b", textES: "Taquicardia", textRO: "Tahicardie", correct: false },
            { id: "c", textES: "Hipertensión", textRO: "Hipertensiune", correct: false },
          ]
        },
        {
          id: 5,
          type: "select_correct",
          topic: "especial",
          promptES: "¿Cuándo aparecen las crisis por abstinencia alcohólica?",
          promptRO: "Când apar crizele din abstinența alcoolică?",
          options: [
            { id: "a", textES: "12-48 horas tras última ingesta", textRO: "12-48 ore după ultima ingestie", correct: true },
            { id: "b", textES: "Inmediatamente", textRO: "Imediat", correct: false },
            { id: "c", textES: "Después de 2 semanas", textRO: "După 2 săptămâni", correct: false },
          ]
        },
        {
          id: 6,
          type: "select_correct",
          topic: "especial",
          promptES: "En crisis post-TCE reciente, ¿qué debemos considerar?",
          promptRO: "În criză post-TCE recent, ce trebuie să luăm în considerare?",
          options: [
            { id: "a", textES: "Inmovilización cervical y TAC craneal", textRO: "Imobilizare cervicală și CT cranian", correct: true },
            { id: "b", textES: "Solo dar benzodiacepinas", textRO: "Doar să dăm benzodiazepine", correct: false },
            { id: "c", textES: "Esperar y observar", textRO: "Așteptăm și observăm", correct: false },
          ]
        },
        {
          id: 7,
          type: "true_false",
          topic: "crisis",
          promptES: "Las crisis psicógenas son fingidas y no requieren tratamiento.",
          promptRO: "Crizele psihogene sunt simulate și nu necesită tratament.",
          correct: false
        },
        {
          id: 8,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "La nemotecnia 'FLIK' para CAD/EHH significa:",
          promptRO: "Mnemotehnica 'FLIK' pentru CAD/EHH înseamnă:",
          options: [
            { id: "a", textES: "Fluidos, Líquidos, Insulina, K (Potasio)", textRO: "Fluide, Lichide, Insulină, K (Potasiu)", correct: true },
            { id: "b", textES: "Fiebre, Leucocitos, Insulina, Ketones", textRO: "Febră, Leucocite, Insulină, Cetone", correct: false },
            { id: "c", textES: "Fast, Low, Insulin, Keep", textRO: "Fast, Low, Insulin, Keep", correct: false },
          ]
        },
      ]
    },

    {
      id: "nivel_3_espectro_b",
      level: 3,
      titleES: "Complicaciones",
      titleRO: "Complicații",
      difficulty: "hard",
      color: "rose",
      questions: [
        {
          id: 1,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "El estado hiperosmolar (EHH) tiene glucemias típicamente:",
          promptRO: "Starea hiperosmolară (EHH) are glicemii de obicei:",
          options: [
            { id: "a", textES: "> 600 mg/dl (puede superar 1000)", textRO: "> 600 mg/dl (poate depăși 1000)", correct: true },
            { id: "b", textES: "> 250 mg/dl", textRO: "> 250 mg/dl", correct: false },
            { id: "c", textES: "> 180 mg/dl", textRO: "> 180 mg/dl", correct: false },
          ]
        },
        {
          id: 2,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Qué diferencia la CAD del EHH respecto a las cetonas?",
          promptRO: "Ce diferențiază CAD de EHH în privința cetonelor?",
          options: [
            { id: "a", textES: "CAD tiene cetonas, EHH no tiene o son leves", textRO: "CAD are cetone, EHH nu are sau sunt ușoare", correct: true },
            { id: "b", textES: "Ambas tienen cetonas elevadas", textRO: "Ambele au cetone crescute", correct: false },
            { id: "c", textES: "Ninguna tiene cetonas", textRO: "Niciuna nu are cetone", correct: false },
          ]
        },
        {
          id: 3,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Qué es la 'hipoglucemia inadvertida'?",
          promptRO: "Ce este 'hipoglicemia nedetectată'?",
          options: [
            { id: "a", textES: "No sentir síntomas de alarma, pasa directo a confusión", textRO: "Nu simți simptome de alarmă, treci direct la confuzie", correct: true },
            { id: "b", textES: "Hipoglucemia que se cura sola", textRO: "Hipoglicemie care se vindecă singură", correct: false },
            { id: "c", textES: "Glucemia baja sin causa", textRO: "Glicemie scăzută fără cauză", correct: false },
          ]
        },
        {
          id: 4,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿A partir de qué K+ NO añadimos potasio a los sueros en CAD?",
          promptRO: "De la ce K+ NU adăugăm potasiu la seruri în CAD?",
          options: [
            { id: "a", textES: "> 5.3 mEq/L", textRO: "> 5.3 mEq/L", correct: true },
            { id: "b", textES: "> 3.5 mEq/L", textRO: "> 3.5 mEq/L", correct: false },
            { id: "c", textES: "> 4.0 mEq/L", textRO: "> 4.0 mEq/L", correct: false },
          ]
        },
        {
          id: 5,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Qué sugiere mordedura LATERAL de lengua durante una crisis?",
          promptRO: "Ce sugerează mușcătura LATERALĂ a limbii în timpul unei crize?",
          options: [
            { id: "a", textES: "Crisis epiléptica verdadera", textRO: "Criză epileptică adevărată", correct: true },
            { id: "b", textES: "Crisis psicógena", textRO: "Criză psihogenă", correct: false },
            { id: "c", textES: "Síncope", textRO: "Sincopă", correct: false },
          ]
        },
        {
          id: 6,
          type: "select_correct",
          topic: "crisis",
          promptES: "¿Qué sugiere ojos CERRADOS con resistencia durante una crisis?",
          promptRO: "Ce sugerează ochii ÎNCHIȘI cu rezistență în timpul unei crize?",
          options: [
            { id: "a", textES: "Crisis psicógena", textRO: "Criză psihogenă", correct: true },
            { id: "b", textES: "Crisis epiléptica verdadera", textRO: "Criză epileptică adevărată", correct: false },
            { id: "c", textES: "Estatus epiléptico", textRO: "Stare de rău epileptic", correct: false },
          ]
        },
        {
          id: 7,
          type: "select_correct",
          topic: "hiperglucemia",
          promptES: "¿Cuál es la mortalidad aproximada del estado hiperosmolar (EHH)?",
          promptRO: "Care este mortalitatea aproximativă a stării hiperosmolare (EHH)?",
          options: [
            { id: "a", textES: "10-20%", textRO: "10-20%", correct: true },
            { id: "b", textES: "1-5%", textRO: "1-5%", correct: false },
            { id: "c", textES: "< 1%", textRO: "< 1%", correct: false },
          ]
        },
        {
          id: 8,
          type: "select_correct",
          topic: "hipoglucemia",
          promptES: "¿Por qué el glucagón NO funciona en alcohólicos crónicos?",
          promptRO: "De ce glucagonul NU funcționează la alcoolici cronici?",
          options: [
            { id: "a", textES: "Reservas de glucógeno agotadas", textRO: "Rezerve de glicogen epuizate", correct: true },
            { id: "b", textES: "El alcohol bloquea el glucagón", textRO: "Alcoolul blochează glucagonul", correct: false },
            { id: "c", textES: "Funciona igual que en otros pacientes", textRO: "Funcționează la fel ca la alți pacienți", correct: false },
          ]
        },
      ]
    },
  ],
};
