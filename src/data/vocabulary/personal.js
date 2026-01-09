export const VOCABULARY_PERSONAL = [
  {
    id: "v_administrativo",
    termES: "Administrativo/a",
    termRO: "Personal administrativ",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'administrare' (servir, manejar, gestionar).",
        etymologyRO: "Din latină 'administrare' (a servi, a gestiona).",
        definitionES: "Profesional encargado de la gestión de citas, ingresos, tramitación de tarjetas y documentación no clínica.\nPara enfermería, es un aliado clave en la gestión de volantes, transporte sanitario y citación de pacientes.",
        definitionRO: "Profesionist însărcinat cu gestionarea programărilor, internărilor, procesarea cardurilor și documentației non-clinice.\nPentru asistență, este un aliat cheie în gestionarea biletelor de trimitere, transportului sanitar și programării pacienților.",
        errorsES: ["Derivar al paciente al administrativo para dudas clínicas (triaje, medicación).", "No facilitar la documentación correcta para que puedan tramitar el ingreso."],
        errorsRO: ["A trimite pacientul la administrativ pentru întrebări clinice (triaj, medicație).", "A nu furniza documentația corectă pentru procesarea internării."],
        abbrevES: "Admin.",
        abbrevRO: "Admin.",
        confuseES: ["Trabajador Social (se ocupa de problemas sociofamiliares, no solo burocracia).", "Gestor de casos (enfermero/a que coordina, no administrativo)."],
        confuseRO: ["Asistent Social (se ocupă de probleme socio-familiale, nu doar birocrație).", "Case manager (asistent medical care coordonează, nu administrativ)."]
      },
      medicine: {
        definitionES: "Personal de gestión y servicios generales.",
        definitionRO: "Personal de gestiune și servicii generale."
      },
      health: {
        definitionES: "Quien te da las citas y arregla los papeles.",
        definitionRO: "Cine îți face programările și rezolvă actele."
      }
    }
  },
  {
    id: "v_anestesista",
    termES: "Anestesista (Anestesiología)",
    termRO: "Anestezist (Anestezie și Terapie Intensivă)",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'an-' (sin) y 'aisthesis' (sensación). Médico especialista en eliminar la sensibilidad y el dolor.",
        etymologyRO: "Din greacă 'an-' (fără) și 'aisthesis' (senzație). Medic specialist în eliminarea sensibilității și a durerii.",
        definitionES: "Médico especialista responsable de la sedación, analgesia, anestesia y reanimación.\nEnfermería de anestesia colabora estrechamente en la preparación de fármacos, intubación y monitorización hemodinámica en quirófano.",
        definitionRO: "Medic specialist responsabil cu sedarea, analgezia, anestezia și reanimarea.\nAsistentul de anestezie colaborează îndeaproape la pregătirea medicamentelor, intubare și monitorizare hemodinamică în sala de operație.",
        errorsES: ["No comunicar alergias al anestesista.", "Confundir sedación (bajar consciencia) con anestesia general (inconsciencia total y a veces parálisis)."],
        errorsRO: ["A nu comunica alergiile anestezistului.", "A confunda sedarea (scăderea conștienței) cu anestezia generală (inconștiență totală și uneori paralizie)."],
        abbrevES: "Anestesista / Rea.",
        abbrevRO: "Anestezist / ATI.",
        confuseES: ["Reanimador (a menudo es la misma especialidad en España: Anestesiología y Reanimación).", "Intensivista (UCI)."],
        confuseRO: ["Reanimator (adesea aceeași specialitate).", "Intensivist (ATI/UCI)."]
      },
      medicine: {
        definitionES: "Especialista en Anestesiología y Reanimación.",
        definitionRO: "Specialist în Anestezie și Terapie Intensivă."
      },
      health: {
        definitionES: "El médico que te duerme para que no te duela.",
        definitionRO: "Medicul care te adoarme ca să nu te doară."
      }
    }
  },
  {
    id: "v_tcae",
    termES: "Auxiliar de enfermería (TCAE)",
    termRO: "Infirmieră / Asistent auxiliar",
    profiles: {
      nursing: {
        etymologyES: "Técnico en Cuidados Auxiliares de Enfermería. 'Auxiliar' implica dar ayuda o socorro.",
        etymologyRO: "Tehnician în Îngrijiri Auxiliare de Asistență. 'Auxiliar' implică a oferi ajutor.",
        definitionES: "Profesional sanitario encargado de cuidados básicos (higiene, alimentación, movilización), mantenimiento del material y apoyo a enfermería.\nEs el 'brazo derecho' de la enfermera; la comunicación constante TCAE-Enfermera es vital para detectar cambios en el paciente (úlceras, disfagia).",
        definitionRO: "Profesionist sanitar însărcinat cu îngrijiri de bază (igienă, alimentație, mobilizare), întreținerea materialului și suport pentru asistență.\nEste 'mâna dreaptă' a asistentei; comunicarea constantă TCAE-Asistentă este vitală pentru detectarea schimbărilor la pacient (escare, disfagie).",
        errorsES: ["Delegar tareas invasivas (la TCAE no pone inyecciones).", "No reportar incidencias observadas durante la higiene."],
        errorsRO: ["A delega sarcini invazive (infirmiera nu face injecții).", "A nu raporta incidentele observate în timpul igienei."],
        abbrevES: "TCAE / Auxiliar.",
        abbrevRO: "Infirmieră.",
        confuseES: ["Celador (transporte, no cuidados).", "Enfermera (Grado, tareas invasivas y planificación)."],
        confuseRO: ["Brancardier (transport, nu îngrijiri).", "Asistentă (Studii superioare, sarcini invazive și planificare)."]
      },
      medicine: {
        definitionES: "Personal técnico de formación profesional.",
        definitionRO: "Personal tehnic cu formare profesională."
      },
      health: {
        definitionES: "Quien te lava, te da de comer y ayuda a la enfermera.",
        definitionRO: "Cine te spală, îți dă de mâncare și ajută asistenta."
      }
    }
  },
  {
    id: "v_celador",
    termES: "Celador/a",
    termRO: "Brancardier / Personal auxiliar",
    profiles: {
      nursing: {
        etymologyES: "De 'celar' (vigilar, cuidar). Históricamente vigilaban, hoy son fundamentales en logística y movilización.",
        etymologyRO: "De la 'celar' (a veghea, a păzi).",
        definitionES: "Personal no sanitario (en estatutos antiguos) pero esencial en el equipo. Se encarga del traslado de pacientes, movilización de pesos (ayuda al TCAE/Enfermera), transporte de muestras y documentos, y vigilancia de acceso.\nSin ellos, el hospital se para.",
        definitionRO: "Personal esențial în echipă. Se ocupă de transferul pacienților, mobilizarea greutăților (ajută infirmiera/asistenta), transportul probelor și documentelor și paza accesului.\nFără ei, spitalul se oprește.",
        errorsES: ["Pedirles tareas clínicas (no tocan vías ni curan).", "No coordinar la movilización (riesgo de caídas)."],
        errorsRO: ["A le cere sarcini clinice (nu ating linii și nu pansează).", "A nu coordona mobilizarea (risc de cădere)."],
        abbrevES: "Celador.",
        abbrevRO: "Brancardier.",
        confuseES: ["Camillero (término antiguo o de ambulancias).", "Seguridad (vigilantes externos)."],
        confuseRO: ["Ambulanțier (șofer ambulanță).", "Pază (agenți externi)."]
      },
      medicine: {
        definitionES: "Personal de servicios encargado de traslado y movilización.",
        definitionRO: "Personal de servicii însărcinat cu transferul și mobilizarea."
      },
      health: {
        definitionES: "Quien te lleva en la silla de ruedas o la cama de un lado a otro.",
        definitionRO: "Cine te duce în scaunul cu rotile sau cu patul dintr-o parte în alta."
      }
    }
  },
  {
    id: "v_cirujano",
    termES: "Cirujano/a",
    termRO: "Chirurg",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'cheir' (mano) y 'ergon' (trabajo). Literalmente 'trabajo manual'.",
        etymologyRO: "Din greacă 'cheir' (mână) și 'ergon' (muncă).",
        definitionES: "Médico especialista en patología que requiere intervención manual o instrumental invasiva (operar).\nLa enfermera instrumentista (en quirófano) y la de hospitalización quirúrgica trabajan codo con codo con el cirujano para el éxito de la intervención y la recuperación postquirúrgica.",
        definitionRO: "Medic specialist în patologie care necesită intervenție manuală sau instrumentală invazivă (a opera).\nAsistenta instrumentară (în sală) și cea de spitalizare chirurgicală lucrează cot la cot cu chirurgul pentru succesul intervenției și recuperarea postoperatorie.",
        errorsES: ["No preparar el consentimiento informado antes de que venga el cirujano.", "No verificar las pruebas preoperatorias."],
        errorsRO: ["A nu pregăti consimțământul informat înainte să vină chirurgul.", "A nu verifica analizele preoperatorii."],
        abbrevES: "Cirujano / C. General / C. Vascular, etc.",
        abbrevRO: "Chirurg.",
        confuseES: ["Anestesista (médico que duerme, no opera).", "Médico internista (médico que no opera)."],
        confuseRO: ["Anestezist (medicul care adoarme, nu operează).", "Medic internist (medicul care nu operează)."]
      },
      medicine: {
        definitionES: "Especialista en técnicas quirúrgicas.",
        definitionRO: "Specialist în tehnici chirurgicale."
      },
      health: {
        definitionES: "El médico que te opera.",
        definitionRO: "Medicul care te operează."
      }
    }
  },
  {
    id: "v_enfermero",
    termES: "Enfermero/a (DUE / Grado)",
    termRO: "Asistent medical / Asistentă medicală",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'infirmus' (no firme, enfermo). Históricamente quien cuida al enfermo. Hoy, profesional científico del cuidado.",
        etymologyRO: "Din latină 'infirmus' (neferm, bolnav). Istoric cine îngrijește bolnavul. Astăzi, profesionist științific al îngrijirii.",
        definitionES: "Profesional universitario responsable de la planificación, ejecución y evaluación de los cuidados de enfermería.\nSu competencia va más allá de 'pinchar': incluye valoración clínica, educación sanitaria, gestión de casos y liderazgo del equipo de cuidados (supervisando a TCAE/Auxiliar).",
        definitionRO: "Profesionist universitar responsabil cu planificarea, execuția și evaluarea îngrijirilor de asistență medicală.\nCompetența sa merge dincolo de 'a înțepa': include evaluare clinică, educație sanitară, management de caz și conducerea echipei de îngrijiri (supervizând infirmiera/auxiliarul).",
        errorsES: ["Identificarse como 'ayudante del médico' (es una profesión autónoma).", "No asumir el liderazgo en la higiene o confort del paciente complejo."],
        errorsRO: ["A se identifica ca 'ajutor de medic' (este o profesie autonomă).", "A nu-și asuma conducerea în igiena sau confortul pacientului complex."],
        abbrevES: "DUE (Diplomado, antiguo) / Grado / Enf.",
        abbrevRO: "As. Med. / Asist.",
        confuseES: ["Auxiliar (TCAE, formación FP, competencias delegadas).", "Médico (diagnostica y prescribe trat. médico)."],
        confuseRO: ["Infirmieră (TCAE, formare profesională, competențe delegate).", "Medic (diagnostichează și prescrie trat. medical)."]
      },
      medicine: {
        definitionES: "Profesional graduado/a en Enfermería.",
        definitionRO: "Profesionist absolvent în Asistență Medicală."
      },
      health: {
        definitionES: "Quien te cuida, te pone la medicación y vigila que estés bien.",
        definitionRO: "Cine te îngrijește, îți pune medicația și veghează să fii bine."
      }
    }
  },
  {
    id: "v_especialista",
    termES: "Especialista (Médico)",
    termRO: "Medic specialist",
    profiles: {
      nursing: {
        etymologyES: "Especial (particular) + -ista (profesión).",
        etymologyRO: "Special (particular) + -ist (profesie).",
        definitionES: "Médico que ha completado su formación en un área específica (Cardiología, Neumología, etc.).\nPara enfermería, es el referente para dudas complejas sobre la patología específica del paciente, aunque la visión global suele llevarla el Internista o Medicina de Familia.",
        definitionRO: "Medic care și-a completat formarea într-o arie specifică (Cardiologie, Pneumologie etc.).\nPentru asistență, este referentul pentru întrebări complexe despre patologia specifică a pacientului, deși viziunea globală o are de obicei Internistul sau Medicina de Familie.",
        errorsES: ["Consultar problemas generales a un super-especialista (ej. preguntar por diabetes a un traumatólogo)."],
        errorsRO: ["A consulta probleme generale unui super-specialist (ex. a întreba de diabet un ortoped)."],
        abbrevES: "Espec.",
        abbrevRO: "Spec.",
        confuseES: ["Residente (en formación para ser especialista).", "Generalista."],
        confuseRO: ["Rezident (în formare pentru a fi specialist).", "Generalist."]
      },
      medicine: {
        definitionES: "Médico con título de Especialista tras formación MIR.",
        definitionRO: "Medic cu titlu de Specialist după formarea MIR."
      },
      health: {
        definitionES: "El médico experto en una cosa concreta (corazón, huesos, piel...).",
        definitionRO: "Medicul expert într-un lucru concret (inimă, oase, piele...)."
      }
    }
  },
  {
    id: "v_facultativo",
    termES: "Facultativo/a",
    termRO: "Medic / Cadrul medical superior",
    profiles: {
      nursing: {
        etymologyES: "De 'facultad' (poder para hacer). Quien tiene la facultad legal para prescribir y diagnosticar.",
        etymologyRO: "De la 'facultate' (putere de a face). Cine are facultatea legală de a prescrie și diagnostica.",
        definitionES: "Sinónimo formal de médico. Se usa mucho en documentación y gestión ('Por orden facultativa').\nEnfermería ejecuta órdenes facultativas, pero también tiene 'Prescripción Enfermera' (productos sanitarios y algunos fármacos).",
        definitionRO: "Sinonim formal pentru medic. Se folosește mult în documentație și gestiune ('La ordin medical').\nAsistența execută ordine medicale, dar are și 'Prescripție Asistentă' (produse sanitare și unele medicamente).",
        errorsES: ["Usar 'facultativo' para enfermería (aunque sea grado, el término suele reservarse a médicos en el argot)."],
        errorsRO: ["A folosi 'facultativ' pentru asistență (deși este grad, termenul se rezervă de obicei medicilor în argou)."],
        abbrevES: "Facult.",
        abbrevRO: "Facult.",
        confuseES: ["Personal Sanitario (engloba a todos).", "Doctor (título académico, aunque se usa como sinónimo)."],
        confuseRO: ["Personal Sanitar (îi include pe toți).", "Doctor (titlu academic, deși se folosește ca sinonim)."]
      },
      medicine: {
        definitionES: "Término legal/administrativo para el médico.",
        definitionRO: "Termen legal/administrativ pentru medic."
      },
      health: {
        definitionES: "Manera fina de llamar al médico.",
        definitionRO: "Mod elegant de a numi medicul."
      }
    }
  },
  {
    id: "v_farmaceutico",
    termES: "Farmacéutico/a",
    termRO: "Farmacist",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'pharmakeia'. Experto en medicamentos.",
        etymologyRO: "Din greacă 'pharmakeia'. Expert în medicamente.",
        definitionES: "Especialista en el medicamento. En hospital (Farmacia Hospitalaria), valida prescripciones, prepara mezclas IV complejas (quimio, nutrición parenteral) y asesora sobre interacciones.\nEnfermería contacta con ellos para dudas de dilución, compatibilidad en Y, o desabastecimiento.",
        definitionRO: "Specialist în medicamente. În spital (Farmacie de Spital), validează prescripțiile, prepară amestecuri IV complexe (chimio, nutriție parenterală) și consiliază privind interacțiunile.\nAsistența îi contactează pentru întrebări de diluție, compatibilitate în Y sau lipsă stoc.",
        errorsES: ["Mezclar fármacos sin consultar compatibilidad con Farmacia.", "Entrar a la farmacia sin autorización (zona restringida)."],
        errorsRO: ["A amesteca medicamente fără a consulta compatibilitatea cu Farmacia.", "A intra în farmacie fără autorizație (zonă restricționată)."],
        abbrevES: "Farmacia / FH.",
        abbrevRO: "Farmacie.",
        confuseES: ["Farmacólogo (médico experto en fármacos, más teórico/clínico)."],
        confuseRO: ["Farmacolog (medic expert în medicamente, mai teoretic/clinic)."]
      },
      medicine: {
        definitionES: "Experto en ciencias farmacéuticas y del medicamento.",
        definitionRO: "Expert în științe farmaceutice și ale medicamentului."
      },
      health: {
        definitionES: "El experto en medicinas.",
        definitionRO: "Expertul în medicamente."
      }
    }
  },
  {
    id: "v_fisioterapeuta",
    termES: "Fisioterapeuta",
    termRO: "Kinetoterapeut / Fiziokinetoterapeut",
    profiles: {
      nursing: {
        etymologyES: "Fisio (naturaleza/cuerpo) + terapia (tratamiento). Tratamiento mediante agentes físicos.",
        etymologyRO: "Fizio (natură/corp) + terapie (tratament).",
        definitionES: "Profesional que trata patologías mediante medios físicos (ejercicio, calor, frío, masaje).\nEn hospitalización, clave para la movilización precoz, fisioterapia respiratoria (Clapping) y recuperación funcional. Enfermería debe coordinarse para no solapar cuidados (ej. no bañar justo cuando toca 'fisio').",
        definitionRO: "Profesionist care tratează patologii prin mijloace fizice (exercițiu, căldură, frig, masaj).\nÎn spitalizare, cheie pentru mobilizarea precoce, fizioterapie respiratorie (Clapping) și recuperare funcțională. Asistența trebuie să se coordoneze pentru a nu suprapune îngrijirile (ex. nu spăla chiar când vine 'fizio').",
        errorsES: ["Levantar a un paciente sin consultar pautas del fisio (ej. tras prótesis cadera).", "Confundir con rehabilitador (médico)."],
        errorsRO: ["A ridica un pacient fără a consulta indicațiile fizio (ex. după proteză șold).", "A confunda cu recuperator (medic)."],
        abbrevES: "Fisio.",
        abbrevRO: "Kineto.",
        confuseES: ["Rehabilitador (Médico especialista que prescribe la rehabilitación).", "Terapeuta ocupacional (foco en AVDs)."],
        confuseRO: ["Recuperator (Medic specialist care prescrie reabilitarea).", "Terapeut ocupațional (focus pe AVD-uri)."]
      },
      medicine: {
        definitionES: "Diplomado/Graduado en Fisioterapia.",
        definitionRO: "Absolvent în Kinetoterapie."
      },
      health: {
        definitionES: "Quien te ayuda a recuperar el movimiento y quita dolores musculares.",
        definitionRO: "Cine te ajută să recuperezi mișcarea și înlătură durerile musculare."
      }
    }
  },
  {
    id: "v_geriatra",
    termES: "Geriatra",
    termRO: "Medic geriatru",
    profiles: {
      nursing: {
        etymologyES: "Geron (viejo) + iatra (médico). Médico de los ancianos.",
        etymologyRO: "Geron (bătrân) + yatra (medic).",
        definitionES: "Médico especialista en la salud de las personas mayores (vejez y sus enfermedades).\nEnfermería geriátrica se centra en síndromes geriátricos (caídas, incontinencia, demencia) y valoración funcional. El geriatra tiene una visión holística y bio-psico-social.",
        definitionRO: "Medic specialist în sănătatea persoanelor vârstnice.\nAsistența geriatrică se concentrează pe sindroame geriatrice (căderi, incontinență, demență) și evaluare funcțională. Geriatrul are o viziune holistică și bio-piho-socială.",
        errorsES: ["Asumir que todo anciano va al geriatra (muchos van a interna/agudos).", "Confundir con gerontólogo (estudioso de la vejez, no siempre médico)."],
        errorsRO: ["A asuma că orice vârstnic merge la geriatru.", "A confunda cu gerontolog (studios al bătrâneții, nu mereu medic)."],
        abbrevES: "Geriatra.",
        abbrevRO: "Geriatru.",
        confuseES: ["Internista (ve adultos en general).", "Gerocultor (cuidador en residencias)."],
        confuseRO: ["Internist (vede adulți în general).", "Gerocultor (îngrijitor în azil)."]
      },
      medicine: {
        definitionES: "Especialista en Geriatría.",
        definitionRO: "Specialist în Geriatrie."
      },
      health: {
        definitionES: "El médico de los abuelos.",
        definitionRO: "Medicul bunicilor."
      }
    }
  },
  {
    id: "v_internista",
    termES: "Internista (Medicina Interna)",
    termRO: "Medic Internist",
    profiles: {
      nursing: {
        etymologyES: "De 'interno'. Especialista en las enfermedades internas (orgánicas) de los adultos que no requieren cirugía.",
        etymologyRO: "De la 'intern'. Specialist în boli interne.",
        definitionES: "Médico con visión global del paciente adulto pluri-patológico. Es el 'director de orquesta' en plantas de hospitalización general.\nPara enfermería, suele ser el referente principal en pacientes crónicos o con diagnósticos complejos.",
        definitionRO: "Medic cu viziune globală a pacientului adult pluri-patologic. Este 'dirijorul' în secțiile de spitalizare generală.\nPentru asistență, este de obicei referentul principal la pacienți cronici sau cu diagnostice complexe.",
        errorsES: ["Confundir con 'médico interno residente' (MIR). Internista es la especialidad.", "Llamarle 'médico de cabecera' (ese es el de primaria)."],
        errorsRO: ["A confunda cu 'medic intern rezident' (MIR). Internist este specialitatea.", "A-l numi 'medic de familie'."],
        abbrevES: "Internista / M. Interna.",
        abbrevRO: "Internist.",
        confuseES: ["MIR (Médico en formación).", "Médico de Familia (ámbito extrahospitalario)."],
        confuseRO: ["MIR (Medic în formare).", "Medic de Familie (ambulatoriu)."]
      },
      medicine: {
        definitionES: "Especialista en Medicina Interna.",
        definitionRO: "Specialist în Medicină Internă."
      },
      health: {
        definitionES: "El médico que lo sabe todo de todo (menos operar).",
        definitionRO: "Medicul care știe totul despre toate (mai puțin să opereze)."
      }
    }
  },
  {
    id: "v_medico",
    termES: "Médico/a (Doctor/a)",
    termRO: "Medic / Doctor",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'medicus' (curar).",
        etymologyRO: "Din latină 'medicus' (a vindeca).",
        definitionES: "Profesional responsable del diagnóstico y tratamiento de enfermedades.\nLa relación médico-enfermera debe ser de colaboración; enfermería aporta la visión del cuidado y la respuesta humana al tratamiento médico.",
        definitionRO: "Profesionist responsabil cu diagnosticul și tratamentul bolilor.\nRelația medic-asistentă trebuie să fie de colaborare; asistența aduce viziunea îngrijirii și răspunsul uman la tratamentul medical.",
        errorsES: ["Llamar al médico para todo (la enfermera tiene autonomía en cuidados).", "No cuestionar (con respeto) una orden que parece errónea (seguridad del paciente)."],
        errorsRO: ["A chema medicul pentru orice (asistenta are autonomie în îngrijiri).", "A nuchestiona (cu respect) un ordin care pare greșit (siguranța pacientului)."],
        abbrevES: "Dr / Dra. / M. o Facultativo.",
        abbrevRO: "Dl. Dr. / Dna. Dr. / Medic.",
        confuseES: ["Doctor (título académico PhD, pero uso común).", "Otros sanitarios."],
        confuseRO: ["Doctor (titlu academic, dar uz comun).", "Alți sanitari."]
      },
      medicine: {
        definitionES: "Licenciado/Graduado en Medicina.",
        definitionRO: "Licențiat/Absolvent în Medicină."
      },
      health: {
        definitionES: "Quien te diagnostica y te cura.",
        definitionRO: "Cine te diagnostichează și te vindecă."
      }
    }
  },
  {
    id: "v_personal_sanitario",
    termES: "Personal sanitario",
    termRO: "Personal sanitar",
    profiles: {
      nursing: {
        etymologyES: "Sanitario (relativo a la salud).",
        etymologyRO: "Sanitar (relativ la sănătate).",
        definitionES: "Término global que engloba a todos los profesionales que trabajan directamente en la salud (Médicos, Enfermeras, TCAEs, Técnicos...).",
        definitionRO: "Termen global care include toți profesioniștii care lucrează direct în sănătate (Medici, Asistenți, Infirmiere, Tehnicieni...).",
        errorsES: ["No distinguir entre personal sanitario (clínico) y no sanitario (gestión/servicios) a la hora de pedir ayuda clínica.", "Usar ropa de calle en zonas restringidas."],
        errorsRO: ["A nu distinge între personal sanitar (clinic) și non-sanitar (gestiune/servicii) când se cere ajutor clinic.", "A folosi haine de stradă în zone restricționate."],
        abbrevES: "Sanitario.",
        abbrevRO: "Sanitar.",
        confuseES: ["Personal no sanitario (Celador, Administrativo, Limpieza)."],
        confuseRO: ["Personal non-sanitar (Brancardier, Administrativ, Curățenie)."]
      },
      medicine: {
        definitionES: "Conjunto de profesionales habilitados para profesiones sanitarias.",
        definitionRO: "Ansamblu de profesioniști abilitați pentru profesii sanitare."
      },
      health: {
        definitionES: "La gente que trabaja curando.",
        definitionRO: "Oamenii care lucrează vindecând."
      }
    }
  },
  {
    id: "v_psicologo",
    termES: "Psicólogo/a",
    termRO: "Psiholog",
    profiles: {
      nursing: {
        etymologyES: "Psico (alma/mente) + logos (estudio).",
        etymologyRO: "Psiho (suflet/minte) + logos (studiu).",
        definitionES: "Especialista en la conducta humana y procesos mentales. El Psicólogo Clínico (PIR) trabaja en el ámbito hospitalario.\nEnfermería colabora en el apoyo emocional y detección de necesidades psicológicas (ansiedad, duelo).",
        definitionRO: "Specialist în comportamentul uman și procese mentale. Psihologul Clinic lucrează în domeniul spitalicesc.\nAsistența colaborează la suportul emoțional și detectarea nevoilor psihologice (anxietate, doliu).",
        errorsES: ["Hacer 'psicología de pasillo' sin formación.", "No derivar al paciente que expresa ideación suicida."],
        errorsRO: ["A face 'psihologie de coridor' fără formare.", "A nu trimite pacientul care exprimă ideație suicidară."],
        abbrevES: "Psicología / PSI.",
        abbrevRO: "Psiholog.",
        confuseES: ["Psiquiatra (médico, prescribe fármacos)."],
        confuseRO: ["Psihiatru (medic, prescrie medicamente)."]
      },
      medicine: {
        definitionES: "Especialista en Psicología Clínica.",
        definitionRO: "Specialist în Psihologie Clinică."
      },
      health: {
        definitionES: "Quien te ayuda con los problemas de familia, dinero, salud mental o ayuda en casa.",
        definitionRO: "Cine te ajută cu problemele de familie, bani, sănătate mintală sau ajutor acasă."
      }
    }
  },
  {
    id: "v_residente",
    termES: "Residente (MIR/EIR/PIR)",
    termRO: "Rezident",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'residens' (el que se queda). Médico o enfermero en formación especializada que trabaja en el hospital.",
        etymologyRO: "Din latină 'residens'. Medic sau asistent în formare specializată care lucrează în spital.",
        definitionES: "Profesional en periodo de formación especializada (M. Interno Residente, Enf. Interno Residente). Es personal titulado (médico o enfermero) con contrato laboral, pero bajo supervisión progresiva.\nEnfermería colabora en su aprendizaje y respeta su rol, pero la responsabilidad última suele ser del adjunto.",
        definitionRO: "Profesionist în perioada de formare specializată (M. Intern Rezident, As. Intern Rezident). Este personal titrat (medic sau asistent) cu contract de muncă, dar sub supraveghere progresivă.\nAsistența colaborează la învățarea sa și îi respectă rolul, dar responsabilitatea ultimă este de obicei a medicului specialist.",
        errorsES: ["Tratar al residente como 'estudiante' (ya es médico/enfermero).", "Saltarse la cadena de mando (consultar dudas complejas solo al residente R1 sin supervisión)."],
        errorsRO: ["A trata rezidentul ca 'student' (este deja medic/asistent).", "A sări peste lanțul de comandă (a consulta dubii complexe doar rezidentului R1 fără supraveghere)."],
        abbrevES: "MIR / EIR / R1, R2...",
        abbrevRO: "Rezident.",
        confuseES: ["Estudiante (no titulado, no cobra, no responsabilidad legal).", "Adjunto (especialista ya formado)."],
        confuseRO: ["Student (netitrat, nu primește salariu, fără responsabilitate legală).", "Specialist (deja format)."]
      },
      medicine: {
        definitionES: "Médico en formación especializada postgraduada.",
        definitionRO: "Medic în formare specializată postuniversitară."
      },
      health: {
        definitionES: "Médico que está aprendiendo la especialidad.",
        definitionRO: "Medic care învață specialitatea."
      }
    }
  },
  {
    id: "v_terpeuta_ocupacional",
    termES: "Terapeuta ocupacional",
    termRO: "Terapeut ocupațional",
    profiles: {
      nursing: {
        etymologyES: "Terapia a través de la ocupación (actividad).",
        etymologyRO: "Terapie prin ocupație (activitate).",
        definitionES: "Profesional que recupera la independencia en las Actividades de la Vida Diaria (AVD: comer, vestirse). Adapta el entorno y entrena habilidades.\nEnfermería integra esas pautas en el cuidado diario (ej. usar cubiertos adaptados en la comida).",
        definitionRO: "Profesionist care recuperează independența în Activitățile Vieții Zilnice (AVD: mâncat, îmbrăcat). Adaptează mediul și antrenează abilități.\nAsistența integrează acele indicații în îngrijirea zilnică (ex. folosirea tacâmurilor adaptate la masă).",
        errorsES: ["Confundir con fisioterapeuta (el TO se centra más en función fina, cognitiva y AVDs)."],
        errorsRO: ["A confunda cu kinetoterapeut (TO se concentrează mai mult pe funcție fină, cognitivă și AVD-uri)."],
        abbrevES: "TO.",
        abbrevRO: "TO.",
        confuseES: ["Fisioterapeuta (trabaja movimiento, fuerza, dolor).", "Animador sociocultural (ocio, no terapia clínica)."],
        confuseRO: ["Kinetoterapeut (lucrează mișcare, forță, durere).", "Animator sociocultural (agrement, nu terapie clinică)."]
      },
      medicine: {
        definitionES: "Diplomado/Graduado en Terapia Ocupacional.",
        definitionRO: "Absolvent în Terapie Ocupațională."
      },
      health: {
        definitionES: "Quien te enseña a volver a valerte por ti mismo en casa.",
        definitionRO: "Cine te învață să te descurci singur din nou acasă."
      }
    }
  },
  {
    id: "v_trabajador_social",
    termES: "Trabajador/a Social",
    termRO: "Asistent social",
    profiles: {
      nursing: {
        etymologyES: "Profesional del trabajo social.",
        etymologyRO: "Profesionist al asistenței sociale.",
        definitionES: "Experto en la problemática social, familiar y económica que afecta a la salud. Gestiona recursos (dependencia, residencias, ayudas).\nEnfermería detecta el 'riesgo social' (anciano solo, cuidador claudicado) y activa la interconsulta al Trabajador Social.",
        definitionRO: "Expert în problematica socială, familială și economică care afectează sănătatea. Gestionează resurse (dependență, aziluri, ajutoare).\nAsistența detectează 'riscul social' (vârstnic singur, îngrijitor epuizat) și activează interconsulta la Asistentul Social.",
        errorsES: ["Pensar que 'solo tramita papeles' (realiza intervención psicosocial compleja).", "Avisar tarde (el alta se bloquea si no hay recurso social)."],
        errorsRO: ["A crede că 'doar procesează hârtii' (realizează intervenție psihosocială complexă).", "A anunța târziu (externarea se blochează dacă nu există resursă socială)."],
        abbrevES: "TS / Trabajo Social.",
        abbrevRO: "As. Social.",
        confuseES: ["Administrativo (gestión burocrática sanitaria)."],
        confuseRO: ["Administrativ (gestiune birocratică sanitară)."]
      },
      medicine: {
        definitionES: "Graduado en Trabajo Social.",
        definitionRO: "Absolvent în Asistență Socială."
      },
      health: {
        definitionES: "Quien te ayuda con los problemas de familia, dinero o ayuda en casa.",
        definitionRO: "Cine te ajută cu problemele de familie, bani sau ajutor acasă."
      }
    }
  }
];
