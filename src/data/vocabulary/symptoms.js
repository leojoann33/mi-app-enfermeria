export const VOCABULARY_SYMPTOMS = [
  {
    id: "sym_disnea",
    termES: "Disnea",
    termRO: "Dispnee",
    profiles: {
      nursing: {
        definitionES: "Sensación subjetiva de falta de aire o dificultad para respirar. SE VE (uso musculatura accesoria, aleteo nasal) y SE SIENTE.",
        definitionRO: "Senzație subiectivă de lipsă de aer. SE VEDE (musculatura accesorie) și SE SIMTE.",
        watchES: ["Posición Fowler (sentado).", "Saturación de oxígeno.", "Frecuencia respiratoria."],
        watchRO: ["Poziție Fowler.", "Saturație.", "Frecvență respiratorie."],
        errorsES: ["Tumbar totalmente al paciente (empeora).", "Infravalorar la ansiedad (puede ser causa o consecuencia)."],
        errorsRO: ["A culca pacientul (înrăutățește).", "A subestima anxietatea."]
      },
      medicine: {
        definitionES: "Dificultad respiratoria.",
        definitionRO: "Dificultate respiratorie."
      },
      health: {
        definitionES: "Ahogo, fatiga al respirar.",
        definitionRO: "Sufocare, oboseală la respirat."
      }
    }
  },
  {
    id: "sym_fiebre",
    termES: "Fiebre (Pirexia)",
    termRO: "Febră (Pirexie)",
    profiles: {
      nursing: {
        definitionES: "Elevación de la temperatura corporal (>38ºC). Entre 37-38ºC es febrícula.\nSigno de defensa del cuerpo.",
        definitionRO: "Creșterea temperaturii (>38ºC). Între 37-38ºC este subfebrilitate.",
        watchES: ["Hidratación.", "Medios físicos (paños tibios, no helados).", "Control de tiritona."],
        watchRO: ["Hidratare.", "Mijloace fizice.", "Control frisoane."],
        errorsES: ["Abrigar al paciente cuando tiene fiebre alta (hay que destapar).", "Usar agua helada (provoca vasoespasmo y sube más la Tª interna)."],
        errorsRO: ["A înveli pacientul (trebuie dezvelit).", "A folosi apă înghețată."]
      },
      medicine: {
        definitionES: "Hipertermia reactiva.",
        definitionRO: "Hipertermie reactivă."
      },
      health: {
        definitionES: "Calentura.",
        definitionRO: "Temperatură mare."
      }
    }
  },
  {
    id: "sym_edema",
    termES: "Edema",
    termRO: "Edem",
    profiles: {
      nursing: {
        definitionES: "Acumulación de líquido en los tejidos. Signo de Fóvea (se queda 'húndido' el dedo al presionar).",
        definitionRO: "Acumulare de lichid în țesuturi. Semnul Godet (rămâne adâncitura).",
        watchES: ["Cuidado de la piel (muy frágil).", "Medir perímetro si evoluciona.", "Elevar miembros."],
        watchRO: ["Îngrijirea pielii (fragilă).", "Măsurare perimetru.", "Ridicarea membrelor."]
      },
      medicine: {
        definitionES: "Hinchazón por extravasación de líquido intersticial.",
        definitionRO: "Umflătură prin extravazare de lichid."
      },
      health: {
        definitionES: "Hinchazón, retención de líquidos.",
        definitionRO: "Umflătură, retenție de apă."
      }
    }
  },
  {
    id: "sym_cianosis",
    termES: "Cianosis",
    termRO: "Cianoză",
    profiles: {
      nursing: {
        definitionES: "Coloración azulada de piel y mucosas por falta de oxígeno en sangre. Central (boca/lengua - grave) o Periférica (dedos/frío).",
        definitionRO: "Culoare albăstruie a pielii și mucoaselor din lipsă de oxigen. Centrală (grav) sau Periferică (frig).",
        watchES: ["Si es central, oxígeno urgente y aviso médico.", "Diferenciar de frío (calentar y ver si pasa)."],
        watchRO: ["Dacă e centrală, oxigen urgent.", "Diferențiere de frig."]
      },
      medicine: {
        definitionES: "Hipoxemia tisular visible.",
        definitionRO: "Hipoxemie tisulară vizibilă."
      },
      health: {
        definitionES: "Ponerse morado por falta de aire.",
        definitionRO: "A se învineți din lipsă de aer."
      }
    }
  },
  {
    id: "sym_dolor",
    termES: "Dolor",
    termRO: "Durere",
    profiles: {
      nursing: {
        definitionES: "Experiencia sensorial y emocional desagradable. Es el 5º Signo Vital. SIEMPRE es subjetivo (duele lo que el paciente dice que duele).",
        definitionRO: "Experiență senzorială și emoțională neplăcută. Al 5-lea Semn Vital. ÎNTOTDEAUNA subiectiv.",
        watchES: ["Evaluar con escalas (EVA 0-10).", "Reevaluar tras analgesia."],
        watchRO: ["Evaluare cu scări (EVA).", "Reevaluare după analguzie."]
      },
      medicine: {
        definitionES: "Síntoma álgico.",
        definitionRO: "Simptom algic."
      },
      health: {
        definitionES: "Lo que te duele.",
        definitionRO: "Ceea ce te doare."
      }
    }
  },
  {
    id: "sym_hematoma",
    termES: "Hematoma",
    termRO: "Hematom / Vânătaie",
    profiles: {
      nursing: {
        definitionES: "Acumulación de sangre coagulada bajo la piel (moratón).",
        definitionRO: "Acumulare de sânge coagulat sub piele (vânătaie).",
        watchES: ["Marcar bordes si crece.", "Vigilar signos de infección o dolor excesivo."],
        watchRO: ["Marcare margini.", "Semne de infecție."]
      },
      medicine: {
        definitionES: "Colección hemática subcutánea.",
        definitionRO: "Colecție hematică subcutanată."
      },
      health: {
        definitionES: "Moratón.",
        definitionRO: "Vânătaie."
      }
    }
  },
  {
    id: "sym_taquicardia",
    termES: "Taquicardia",
    termRO: "Tahicardie",
    profiles: {
      nursing: {
        definitionES: "Frecuencia cardíaca > 100 lpm. Puede ser por fiebre, dolor, ansiedad o problemas cardíacos.",
        definitionRO: "Frecvență cardiacă > 100 bpm.",
        watchES: ["Valorar factores desencadenantes (¿tiene dolor/fiebre?).", "Realizar ECG si es nueva o hay palpitaciones."],
        watchRO: ["Evaluare factori declanșatori.", "ECG dacă e nouă."]
      },
      medicine: {
        definitionES: "FC elevada.",
        definitionRO: "FC crescută."
      },
      health: {
        definitionES: "Corazón va muy rápido.",
        definitionRO: "Inima bate foarte repede."
      }
    }
  },
  {
    id: "sym_hipotension",
    termES: "Hipotensión",
    termRO: "Hipotensiune",
    profiles: {
      nursing: {
        definitionES: "Tensión arterial baja (Sistólica <90 mmHg). Riesgo de mareo y caídas.",
        definitionRO: "Tensiune arterială mică (Sistolică <90). Risc de amețeală.",
        watchES: ["Trendelenburg (piernas arriba) si hay mareo.", "Hidratación."],
        watchRO: ["Trendelenburg.", "Hidratare."]
      },
      medicine: {
        definitionES: "Presión arterial baja.",
        definitionRO: "Presiune arterială scăzută."
      },
      health: {
        definitionES: "Tensión baja.",
        definitionRO: "Tensiune mică."
      }
    }
  }
];
