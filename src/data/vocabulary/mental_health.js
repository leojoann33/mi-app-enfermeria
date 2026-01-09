export const VOCABULARY_MENTAL_HEALTH = [
  {
    id: "mh_ansiedad",
    termES: "Ansiedad / Crisis de pánico",
    termRO: "Anxietate / Atac de panică",
    profiles: {
      nursing: {
        definitionES: "Estado de alerta/miedo desproporcionado. Síntomas físicos: taquicardia, sensación de ahogo (disnea suspirosa), parestesias (hormigueo) por hiperventilación.",
        definitionRO: "Stare de alertă/frică disproporționată. Simptome: tahicardie, sufocare, parestezii.",
        watchES: ["Enseñar respiración diafragmática (lenta).", "No decir 'calmese', sino 'estoy aquí contigo, respira conmigo'."],
        watchRO: ["Respirație diafragmatică.", "Nu spune 'calmează-te', spune 'sunt cu tine'."]
      },
      medicine: {
        definitionES: "Trastorno de angustia paroxística.",
        definitionRO: "Tulburare de angoasă paroxistică."
      },
      health: {
        definitionES: "Nervios extremos, creer que te vas a morir.",
        definitionRO: "Nervi extremi, a crede că mori."
      }
    }
  },
  {
    id: "mh_depresion",
    termES: "Depresión",
    termRO: "Depresie",
    profiles: {
      nursing: {
        definitionES: "Trastorno del estado de ánimo (tristeza profunda, anhedonia). NO es 'estar de bajón'.\nRiesgo principal: Suicidio (Autolisis).",
        definitionRO: "Tulburare afectivă (tristețe, anhedonie). NU e doar supărare.\nRisc principal: Sinucidere.",
        watchES: ["Vigilar acumulación de medicación (para sobredosis).", "Preguntar directamente sobre ideas de muerte (preguntar PREVIENE, no incita)."],
        watchRO: ["Vigilare acumulare medicamente.", "Întrebare directă despre idei de moarte."]
      },
      medicine: {
        definitionES: "Síndrome afectivo mayor.",
        definitionRO: "Sindrom afectiv major."
      },
      health: {
        definitionES: "Enfermedad de la tristeza crónica.",
        definitionRO: "Boala tristeții cronice."
      }
    }
  },
  {
    id: "mh_delirio",
    termES: "Delirio (Síndrome Confusional Agudo)",
    termRO: "Delir (Sindrom Confuzional Acut)",
    profiles: {
      nursing: {
        definitionES: "Inicio BRUSCO de desorientación, atención fluctuante y agitación. Muy común en ancianos hospitalizados (por infección orina, deshidratación, cambio de entorno).\nEs reversible si se trata la causa.",
        definitionRO: "Debut BRUSC de dezorientare și agitație. Comun la vârstnici spitalizați.\nReversibil dacă se tratează cauza.",
        watchES: ["Reorientar continuamente ('estamos en el hospital').", "Evitar contenciones si es posible (aumentan la agitación).", "Luz natural para ciclo sueño-vigilia."],
        watchRO: ["Reorientare continuă.", "Evitare contenții.", "Lumină naturală."]
      },
      medicine: {
        definitionES: "Alteración aguda de la conciencia y atención.",
        definitionRO: "Alterare acută a conștienței și atenției."
      },
      health: {
        definitionES: "Holarser de repente, estar perdido.",
        definitionRO: "A aiura dintr-o dată, a fi pierdut."
      }
    }
  },
  {
    id: "mh_contencion",
    termES: "Contención (Mecánica/Farmacológica)",
    termRO: "Contenție (Mecanică/Farmacologică)",
    profiles: {
      nursing: {
        definitionES: "Medida EXCEPCIONAL y de último recurso para inmovilizar a un paciente con agitación psicomotriz que corre peligro él mismo o terceros.\nRequiere orden médica y revisión periódica estricta.",
        definitionRO: "Măsură EXCEPȚIONALĂ și de ultim resort pentru imobilizare.\nNecesită ordin medical și revizuire periodică.",
        watchES: ["Revisar sujeciones cada 2h (circulación, heridas).", "Nunca usar como castigo o por falta de personal."],
        watchRO: ["Verificare benzi la 2h.", "Niciodată ca pedeapsă."]
      },
      medicine: {
        definitionES: "Inmovilización terapéutica de seguridad.",
        definitionRO: "Imobilizare terapeutică de siguranță."
      },
      health: {
        definitionES: "Atar a la cama por seguridad.",
        definitionRO: "A lega de pat pentru siguranță."
      }
    }
  },
  {
    id: "mh_demencia",
    termES: "Demencia",
    termRO: "Demență",
    profiles: {
      nursing: {
        definitionES: "Deterioro progresivo e irreversible de las funciones cognitivas (memoria, lenguaje, reconocimiento). Alzheimer es la más común.\nAfecta a la capacidad de autocuidado.",
        definitionRO: "Deteriorare progresivă ireversibilă a funcțiilor cognitive. Alzheimer e cea mai comună.",
        watchES: ["Apoyo a la familia (claudicación del cuidador).", "Simplificar instrucciones ('coge la cuchara', no 'come todo')."],
        watchRO: ["Suport familie.", "Simplificare instrucțiuni."]
      },
      medicine: {
        definitionES: "Síndrome de declive cognitivo crónico.",
        definitionRO: "Sindrom de declin cognitiv cronic."
      },
      health: {
        definitionES: "Perder la cabeza poco a poco.",
        definitionRO: "A-și pierde mințile încet."
      }
    }
  }
];
