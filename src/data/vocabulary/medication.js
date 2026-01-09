export const VOCABULARY_MEDICATION = [
  {
    id: "med_analgesico",
    termES: "Analgésico",
    termRO: "Analgezic / Calmant",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'an' (sin) + 'algesia' (dolor).",
        etymologyRO: "Din greacă 'an' (fără) + 'algesia' (durere).",
        definitionES: "Fármaco utilizado para aliviar o eliminar el dolor. Se clasifican según la Escala Analgésica de la OMS (Primer escalón: No opioides como Paracetamol/Metamizol; Segundo: Opioides débiles como Tramadol; Tercero: Opioides potentes como Morfina).\nEnfermería monitoriza la eficacia (Escala EVA) y efectos adversos (estreñimiento, náuseas, depresión respiratoria en opioides).",
        definitionRO: "Medicament utilizat pentru a calma sau elimina durerea. Clasificat conform Scării OMS.\nAsistența monitorizează eficacitatea (Scara EVA) și efectele adverse.",
        watchES: ["Depresión respiratoria en opioides.", "Daño hepático en sobredosis de paracetamol."],
        watchRO: ["Depresie respiratorie la opioide.", "Daune hepatice la supradozaj de paracetamol."],
        errorsES: ["Administrar analgésicos 'si precisa' sin valorar primero el dolor.", "Triturar formas retard (liberación prolongada) rompiendo su mecanismo."],
        errorsRO: ["A administra analgezice fără a evalua durerea.", "A zdrobi forme retard."],
        abbrevES: "Analg.",
        abbrevRO: "Analg.",
        confuseES: ["Anestésico (elimina la sensibilidad total, no solo dolor).", "Antiinflamatorio (algunos analgésicos lo son, pero no todos)."],
        confuseRO: ["Anestezic.", "Antiinflamator."]
      },
      medicine: {
        definitionES: "Fármaco para el control del dolor.",
        definitionRO: "Medicament pentru controlul durerii."
      },
      health: {
        definitionES: "Medicina para quitar el dolor.",
        definitionRO: "Medicament pentru a lua durerea."
      }
    }
  },
  {
    id: "med_antibiotico",
    termES: "Antibiótico",
    termRO: "Antibiotic",
    profiles: {
      nursing: {
        etymologyES: "Anti (contra) + Bios (vida, microorganismos vivos).",
        etymologyRO: "Anti (contra) + Bios (viață).",
        definitionES: "Sustancia química capaz de paralizar el desarrollo o matar microorganismos patógenos (bacterias). NO actúa contra virus (gripe).",
        definitionRO: "Substanță chimică capabilă să paralizeze dezvoltarea sau să omoare microorganisme patogene (bacterii). NU acționează contra virusurilor.",
        watchES: ["Cumplimiento estricto del horario (para mantener niveles en sangre).", "Reacciones alérgicas (preguntar siempre alergias a penicilinas)."],
        watchRO: ["Respectarea strictă a orarului.", "Reacții alergice."],
        errorsES: ["Saltarse una dosis o administrarla muy tarde (genera resistencias).", "Mezclar con otros fármacos incompatibles en la misma vía."],
        errorsRO: ["A sări o doză.", "A amesteca cu medicamente incompatibile."],
        abbrevES: "ATB.",
        abbrevRO: "ATB.",
        confuseES: ["Antiviral (para virus).", "Antimicótico (para hongos)."],
        confuseRO: ["Antiviral.", "Antimicotic."]
      },
      medicine: {
        definitionES: "Antimicrobiano bactericida o bacteriostático.",
        definitionRO: "Antimicrobian bactericid sau bacteriostatic."
      },
      health: {
        definitionES: "Medicina para infecciones causadas por bacterias.",
        definitionRO: "Medicament pentru infecții cauzate de bacterii."
      }
    }
  },
  {
    id: "med_antiinflamatorio",
    termES: "Antiinflamatorio",
    termRO: "Antiinflamator",
    profiles: {
      nursing: {
        etymologyES: "Contra la inflamación.",
        etymologyRO: "Contra inflamației.",
        definitionES: "Fármaco que previene o disminuye la inflamación de los tejidos. Suelen ser AINEs (Antiinflamatorios No Esteroideos, como Ibuprofeno) o Esteroides (Corticoides).\nTienen 'techo terapéutico' (más dosis no alivia más, pero sí daña más).",
        definitionRO: "Medicament care previne sau scade inflamația. De obicei AINS sau Steroizi.",
        watchES: ["Daño gástrico (gastrolesivos, dar con comida).", "Hipertensión (pueden subir la tensión)."],
        watchRO: ["Daune gastrice (a se da cu mâncare).", "Hipertensiune."],
        errorsES: ["Dar AINEs a pacientes con úlcera activa sin protección.", "Administrar en ayunas si no es indicación específica."],
        errorsRO: ["A da AINS la pacienți cu ulcer.", "A administra pe nemâncate."],
        abbrevES: "AINE (si es no esteroideo).",
        abbrevRO: "AINS.",
        confuseES: ["Corticoide (es antiinflamatorio potente pero con más efectos secundarios).", "Antibiótico (desinflama al matar la bacteria, pero no es su acción directa)."],
        confuseRO: ["Corticoid.", "Antibiotic."]
      },
      medicine: {
        definitionES: "Agente reductor de la respuesta inflamatoria.",
        definitionRO: "Agent reducător al răspunsului inflamator."
      },
      health: {
        definitionES: "Para bajar la hinchazón y el dolor.",
        definitionRO: "Pentru a scădea umflătura și durerea."
      }
    }
  },
  {
    id: "med_insulina",
    termES: "Insulina",
    termRO: "Insulină",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'insula' (isla), producida en los islotes de Langerhans del páncreas.",
        etymologyRO: "Din latină 'insula', produsă în insulele Langerhans.",
        definitionES: "Hormona que permite que la glucosa entre en las células. En diabetes se administra de forma exógena (SC o IV).\nEs un MEDICAMENTO DE ALTO RIESGO. Un error de dosis puede ser mortal (Hipoglucemia severa). Requiere rotación de zonas de inyección.",
        definitionRO: "Hormon care permite glucozei să intre în celule. În diabet se administrează exogen.\nMEDICAMENT DE RISC ÎNALT. Eroare de doză poate fi mortală (Hipoglicemie).",
        watchES: ["Niveles de glucemia previos (BMTest).", "Rotación de zonas (prevención lipodistrofia).", "Tipo de insulina (Rápida vs Lenta)."],
        watchRO: ["Nivele glicemie.", "Rotația zonelor.", "Tip de insulină."],
        errorsES: ["Cargar insulina U-100 en jeringa estándar (error de volumen).", "Confundir rápida con lenta.", "No esperar 10 seg antes de retirar la aguja."],
        errorsRO: ["A încărca insulină în seringă standard.", "A confunda rapidă cu lentă.", "A nu aștepta 10 secunde."],
        abbrevES: "Insulina.",
        abbrevRO: "Insulină.",
        confuseES: ["Heparina (también se pincha en tripa, pero es para la sangre)."],
        confuseRO: ["Heparină."]
      },
      medicine: {
        definitionES: "Hormona hipoglucemiante.",
        definitionRO: "Hormon hipoglicemiant."
      },
      health: {
        definitionES: "Hormona del azúcar.",
        definitionRO: "Hormonul zahărului."
      }
    }
  },
  {
    id: "med_ampolla",
    termES: "Ampolla",
    termRO: "Fiolă",
    profiles: {
      nursing: {
        etymologyES: "Recipiente de vidrio cerrado herméticamente conteniendo una dosis líquida inyectable.",
        etymologyRO: "Recipient de sticlă închis ermetic conținând o doză lichidă.",
        definitionES: "Envase de vidrio que contiene un medicamento líquido estéril. Se debe 'romper' el cuello para abrirla (riesgo de corte).\nEs de UN SOLO USO (una vez abierta, no se guarda).",
        definitionRO: "Recipient de sticlă cu medicament lichid steril. Trebuie 'rupt' gâtul.\nDE UNICĂ FOLOSINȚĂ.",
        watchES: ["Protegerse los dedos al romperla (gasas).", "No dejar trocitos de cristal dentro."],
        watchRO: ["Protejarea degetelor.", "Fără cioburi."],
        errorsES: ["Guardar una ampolla abierta 'para luego' (pierde esterilidad).", "Cortarse al abrirla."],
        errorsRO: ["A păstra fiola deschisă.", "A se tăia."]
      },
      medicine: {
        definitionES: "Presentación farmacéutica líquida monodosis.",
        definitionRO: "Prezentare farmaceutică lichidă monodoza."
      },
      health: {
        definitionES: "Botellita de cristal que se rompe para sacar el líquido.",
        definitionRO: "Sticluță de sticlă care se rupe pentru a scoate lichidul."
      }
    }
  },
  {
    id: "med_vial",
    termES: "Vial",
    termRO: "Flacon",
    profiles: {
      nursing: {
        etymologyES: "Recipiente con tapón de goma multidosis o para reconstituir.",
        etymologyRO: "Recipient cu dop de cauciuc multidoză.",
        definitionES: "Frasco (vidrio o plástico) con tapón de goma perforable. Puede contener líquido o polvo liofilizado (requiere reconstitución con suero). A diferencia de la ampolla, puede ser multidosis si se conserva bien.",
        definitionRO: "Flacon cu dop cauciucat. Poate avea lichid sau pulbere (reconstituire). Poate fi multidoză.",
        watchES: ["Limpiar el tapón de goma con alcohol antes de pinchar.", "Etiquetar con fecha de apertura si es multidosis."],
        watchRO: ["Curățarea dopului cu alcool.", "Etichetare cu data deschiderii."],
        errorsES: ["Pinchar sin desinfectar el tapón.", "Usar un vial monouso para varios pacientes."],
        errorsRO: ["A înțepa fără dezinfectare.", "A folosi flacon unică folosință la mai mulți pacienți."]
      },
      medicine: {
        definitionES: "Presentación inyectable liofilizada o líquida.",
        definitionRO: "Prezentare injectabilă liofilizată sau lichidă."
      },
      health: {
        definitionES: "Bote de medicina con tapa de goma.",
        definitionRO: "Sticluță de medicament cu capac de cauciuc."
      }
    }
  },
  {
    id: "med_suero",
    termES: "Suero (Fluidoterapia)",
    termRO: "Ser / Perfuzie",
    profiles: {
      nursing: {
        etymologyES: "Líquido para reponer volumen o electrolitos.",
        etymologyRO: "Lichid pentru a reface volumul sau electroliții.",
        definitionES: "Solución líquida estéril administrada por vía IV. Tipos: Fisiológico (0.9% NaCl), Glucosado, Ringer Lactato.\nBase para diluir medicamentos o hidratar.",
        definitionRO: "Soluție lichidă sterilă IV. Tipuri: Fiziologic, Glucozat, Ringer.\nBază pentru diluare sau hidratare.",
        watchES: ["Ritmo de infusión (sobrecarga hídrica).", "Compatibilidad con fármacos."],
        watchRO: ["Ritmul infuziei.", "Compatibilitate."],
        errorsES: ["Poner suero glucosado a diabéticos sin control.", "Dejar pasar aire (embolia gaseosa, aunque requiere mucho aire)."],
        errorsRO: ["A pune ser glucozat la diabetici necontrolați.", "A lăsa aer."]
      },
      medicine: {
        definitionES: "Solución electrolítica o glucosada IV.",
        definitionRO: "Soluție electrolitică sau glucozată IV."
      },
      health: {
        definitionES: "El líquido que te ponen por la vena.",
        definitionRO: "Lichidul care ți se pune pe venă."
      }
    }
  },
  {
    id: "med_colirio",
    termES: "Colirio",
    termRO: "Colir / Picături de ochi",
    profiles: {
      nursing: {
        etymologyES: "Medicamento para los ojos.",
        etymologyRO: "Medicament pentru ochi.",
        definitionES: "Preparado líquido estéril para instilación ocular.\nRequiere técnica aséptica estricta (no tocar el ojo con el bote).",
        definitionRO: "Preparat lichid steril pentru instilare oculară.",
        watchES: ["Caducidad tras apertura (suelen ser 30 días).", "No tocar pestañas ni córnea."],
        watchRO: ["Valabilitate după deschidere (30 zile).", "Nu atinge genele."]
      },
      medicine: {
        definitionES: "Solución oftálmica.",
        definitionRO: "Soluție oftalmică."
      },
      health: {
        definitionES: "Gotas para los ojos.",
        definitionRO: "Picături pentru ochi."
      }
    }
  },
  {
    id: "med_anticoagulante",
    termES: "Anticoagulante",
    termRO: "Anticoagulant",
    profiles: {
      nursing: {
        definitionES: "Fármaco que retrasa la coagulación de la sangre (Heparina, Sintrom, NACOs). Previene trombos.\nAlto riesgo de sangrado.",
        definitionRO: "Medicament care întârzie coagularea sângelui. Previne trombii.\nRisc mare de sângerare.",
        watchES: ["Signos de sangrado (encías, orina).", "Control de INR (Sintrom).", "No poner inyecciones IM profundas."],
        watchRO: ["Semne de sângerare.", "Control INR.", "Fără injecții IM profunde."]
      },
      medicine: {
        definitionES: "Inhibidor de la cascada de coagulación.",
        definitionRO: "Inhibitor al cascadei de coagulare."
      },
      health: {
        definitionES: "Medicina para que la sangre no se haga grumos.",
        definitionRO: "Medicament ca sângele să nu facă cheaguri."
      }
    }
  },
  {
    id: "med_diuretico",
    termES: "Diurético",
    termRO: "Diuretic",
    profiles: {
      nursing: {
        definitionES: "Fármaco que aumenta la producción de orina para eliminar líquidos (Furosemida). Se usa en hipertensión, insuficiencia cardíaca.\nVigilar potasio y tensión arterial.",
        definitionRO: "Medicament care crește producția de urină.",
        watchES: ["Administrar por la mañana (para no orinar toda la noche).", "Vigilar deshidratación y calambres."],
        watchRO: ["Administrare dimineața.", "Monitorizare deshidratare."]
      },
      medicine: {
        definitionES: "Fármaco que aumenta la excreción urinaria.",
        definitionRO: "Medicament care crește excreția urinară."
      },
      health: {
        definitionES: "Pastilla para orinar.",
        definitionRO: "Pastilă pentru a urina."
      }
    }
  }
];
