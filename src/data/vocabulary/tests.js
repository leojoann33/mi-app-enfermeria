export const VOCABULARY_TESTS = [
  {
    id: "v12_analitica",
    termES: "Analítica (Análisis)",
    termRO: "Analize (Analiză)",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'analusis' (descomposición). Estudio de los componentes de una muestra.",
        etymologyRO: "Din greacă 'analusis' (descompunere). Studiu al componentelor unei probe.",
        definitionES: "Estudio de laboratorio de muestras biológicas (sangre, orina, heces, líquido cefalorraquídeo).\nNuestra responsabilidad no es solo extraer, sino conocer los valores críticos (ej. potasio 7.0) para avisar al médico inmediatamente.",
        definitionRO: "Studiu de laborator al probelor biologice (sânge, urină, fecale, lichid cefalorahidian).\nResponsabilitatea noastră nu este doar recoltarea, ci cunoașterea valorilor critice (ex. potasiu 7.0) pentru a anunța medicul imediat.",
        errorsES: [
          "No invertir los tubos tras la extracción (se coagula la muestra).",
          "Sacar sangre de un brazo con suero (diluye la muestra).",
          "Olvidar pedir el frasco de orina al paciente."
        ],
        errorsRO: [
          "A nu inversa tuburile după recoltare (se coagulează proba).",
          "A lua sânge dintr-un braț cu perfuzie (diluează proba).",
          "A uita să ceri recipientul de urină pacientului."
        ],
        abbrevES: "Analítica / AS (Analítica de Sangre).",
        abbrevRO: "Analize.",
        confuseES: [
          "Gasometría (análisis específico de gases, suele ir aparte o en jeringa especial).",
          "Cultivo (busca bacterias, requiere frasco estéril y tiempo)."
        ],
        confuseRO: [
          "Gazometrie (analiză specifică de gaze, de obicei separat sau în seringă specială).",
          "Cultură (caută bacterii, necesită recipient steril și timp)."
        ]
      },
      medicine: {
        definitionES: "Pruebas diagnósticas de laboratorio.",
        definitionRO: "Teste diagnostice de laborator."
      },
      health: {
        definitionES: "El análisis de sangre y orina.",
        definitionRO: "Analiza de sânge și urină."
      }
    }
  },
  {
    id: "v13_ecografia",
    termES: "Ecografía",
    termRO: "Ecografie",
    profiles: {
      nursing: {
        etymologyES: "Eco (sonido reflejado) + grafía (imagen). Imagen por sonido.",
        etymologyRO: "Eco (sunet reflectat) + grafie (imagine). Imagine prin sunet.",
        definitionES: "Técnica de imagen que usa ultrasonidos (no radiactiva). Inocua y rápida.\nEnfermería prepara al paciente (ayuno para eco abdominal) y asiste al radiólogo. También usamos 'eco' para canalizar vías difíciles (ecoguiada) y ver si la vejiga tiene orina (Bladder Scan).",
        definitionRO: "Tehnică imagistică ce folosește ultrasunete (neradioactivă). Inofensivă și rapidă.\nAsistentul pregătește pacientul (ajun pentru eco abdominal) și asistă radiologul. Folosim și 'eco' pentru a prinde vene dificile (ecoghidat) și a vedea dacă vezica are urină (Bladder Scan).",
        errorsES: ["No avisar al paciente de que el gel está frío.", "No limpiar la sonda entre pacientes (riesgo de infección)."],
        errorsRO: ["A nu anunța pacientul că gelul este rece.", "A nu curăța sonda între pacienți (risc de infecție)."],
        abbrevES: "Eco.",
        abbrevRO: "Eco.",
        confuseES: ["Radiografía (usa radiación, ves huesos).", "Resonancia (tubo cerrado, magnética)."],
        confuseRO: ["Radiografie (folosește radiații, vezi oase).", "Rezonanță (tub închis, magnetică)."]
      },
      medicine: {
        definitionES: "Ultrasonografía diagnóstica.",
        definitionRO: "Ultrasonografie diagnostică."
      },
      health: {
        definitionES: "Ver por dentro con ultrasonidos.",
        definitionRO: "A vedea în interior cu ultrasunete."
      }
    }
  },
  {
    id: "v3_radiografia",
    termES: "Radiografía",
    termRO: "Radiografía",
    profiles: {
      nursing: {
        etymologyES: "Se considera que radio- se asocia a “radiación” o “rayos”, mientras que -grafía tiene el significado de “registro” o “imagen”. Cuando se juntan para formar “radiografía”, puede entenderse que significa una imagen registrada mediante radiación.",
        etymologyRO: "Se consideră că radio- se asociază cu „radiație” sau „raze”, în timp ce -grafía are semnificația de „înregistrare” sau „imagine”. Când se unesc pentru a forma „radiografía”, se poate înțelege că înseamnă o imagine înregistrată prin radiație.",
        definitionES: "Prueba de imagen que utiliza rayos X para obtener una representación de estructuras internas, especialmente útil para hueso, tórax y dispositivos (tubos, catéteres).\nEn el entorno clínico, puede solicitarse portátil o en sala de radiología, y su interpretación corresponde al médico/radiólogo según el circuito del centro.\nEn enfermería, el foco práctico es preparar al paciente, identificar precauciones relevantes y colaborar con el procedimiento según protocolos.",
        definitionRO: "Investigație imagistică ce folosește raze X pentru a obține o reprezentare a structurilor interne, utilă în special pentru os, torace și dispozitive (tuburi, catetere).\nÎn mediul clinic, poate fi solicitată portabilă sau în sala de radiologie, iar interpretarea ei aparține medicului/radiologului conform circuitului centrului.\nÎn asistență medicală, focusul practic este pregătirea pacientului, identificarea precauțiilor relevante și colaborarea la procedură conform protocoalelor.",
        watchES: [
          "Embarazo o sospecha de embarazo (precaución por radiación).",
          "Identificación correcta del paciente y de la región anatómica solicitada.",
          "Capacidad para mantener la postura y colaboración; dolor en movilización.",
          "Presencia de dispositivos que puedan interferir o requerir control (según indicación)."
        ],
        watchRO: [
          "Sarcină sau suspiciune de sarcină (precauție din cauza radiației).",
          "Identificarea corectă a pacientului și a regiunii anatomice solicitate.",
          "Capacitatea de a menține poziția și cooperarea; durere la mobilizare.",
          "Prezența dispozitivelor care pot interfera sau pot necesita control (conform indicației)."
        ],
        errorsES: [
          "Confundir “radiografía” con “TAC” o “resonancia” (no son lo mismo).",
          "No comprobar la lateralidad o la zona solicitada, generando repeticiones."
        ],
        errorsRO: [
          "A confunda „radiografía” cu „TAC” sau „resonancia” (nu sunt același lucru).",
          "A nu verifica lateralitatea sau zona solicitată, generând repetări."
        ],
        abbrevES: "Rx (muy habitual). También se usa “placa” en lenguaje profesional.",
        abbrevRO: "Rx (foarte frecvent). Se folosește și „placa” în limbaj profesional.",
        confuseES: [
          "TAC / escáner (tomografía).",
          "Resonancia magnética (RM/RMN).",
          "Ecografía (ultrasonidos, sin radiación ionizante)."
        ],
        confuseRO: [
          "TAC / escáner (tomografie).",
          "Rezonanță magnetică (RM/RMN).",
          "Ecografie (ultrasunete, fără radiație ionizantă)."
        ]
      },
      medicine: {
        definitionES: "Técnica de imagen basada en radiación ionizante (rayos X).",
        definitionRO: "Tehnică imagistică bazată pe radiație ionizantă (raze X).",
        indicationsES: ["Sospecha de fractura.", "Patología torácica."],
        indicationsRO: ["Suspiciune de fractură.", "Patologie toracică."]
      },
      health: {
        definitionES: "Imagen con rayos X para huesos y tórax.",
        definitionRO: "Imagine cu raze X pentru oase și torace."
      }
    }
  }
];
