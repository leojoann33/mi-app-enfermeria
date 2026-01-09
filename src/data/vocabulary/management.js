export const VOCABULARY_MANAGEMENT = [
  {
    id: "v2_alta",
    termES: "Alta médica",
    termRO: "Externare",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'altus' (alto, elevado). En el contexto administrativo/militar, dar el alta es liberar o finalizar un servicio.",
        etymologyRO: "Din latină 'altus' (înalt). În context administrativ/militar, a da externarea înseamnă a elibera sau a finaliza un serviciu.",
        definitionES: "Proceso administrativo y clínico de finalización de la estancia hospitalaria. Implica informe de alta (obligatorio), prescripción de fármacos al alta y recomendaciones de cuidados.\nEl papel de enfermería es fundamental en la EDUCACIÓN AL ALTA (asegurar que el paciente entiende su tratamiento y cuidados en casa) y la continuidad de cuidados (informe de enfermería).",
        definitionRO: "Proces administrativ și clinic de finalizare a șederii în spital. Implică bilet de externare (obligatoriu), prescripție medicamente la externare și recomandări de îngrijire.\nRolul asistentului este fundamental în EDUCAȚIA LA EXTERNARE (a asigura că pacientul înțelege tratamentul și îngrijirile acasă) și continuitatea îngrijirilor (raport de asistență).",
        watchES: [
          "Comprensión del paciente/familia sobre la medicación (dosis, horarios).",
          "Citas de revisión confirmadas y transporte (ambulancia) si precisa.",
          "Retirada de dispositivos (vías, catéteres) antes de salir, salvo indicación contraria."
        ],
        watchRO: [
          "Înțelegerea pacientului/familiei privind medicația (doze, orar).",
          "Programări de control confirmate și transport (ambulanță) dacă este necesar.",
          "Scoaterea dispozitivelor (catetere) înainte de plecare, cu excepția indicației contrare."
        ],
        errorsES: [
          "Entregar el informe sin explicarlo.",
          "No verificar que el paciente tiene la receta electrónica activa o la medicación física.",
          "Olvidar retirar la pulsera identificativa (según protocolo de algunos centros, otros la mantienen hasta la puerta)."
        ],
        errorsRO: [
          "A înmâna biletul fără a-l explica.",
          "A nu verifica dacă pacientul are rețeta electronică activă sau medicamentele fizice.",
          "A uita să scoți brățara de identificare (conform protocolului unor centre)."
        ],
        abbrevES: "Alta.",
        abbrevRO: "Externare.",
        confuseES: [
          "Alta voluntaria (el paciente se va contra criterio médico, requiere firma de documento legal).",
          "Éxitus (fallecimiento, es un tipo de baja hospitalaria pero por muerte).",
          "Traslado (cambio de hospital, no es un alta definitiva)."
        ],
        confuseRO: [
          "Externare la cerere (pacientul pleacă împotriva avizului medical, necesită semnătură).",
          "Deces (ieșire din spital prin moarte).",
          "Transfer (schimbare de spital, nu este externare definitivă)."
        ]
      },
      medicine: {
        definitionES: "Documento médico que certifica la finalización del episodio asistencial.",
        definitionRO: "Document medical care certifică finalizarea episodului asistogic.",
        indicationsES: ["Curación/Mejoría.", "Fallecimiento.", "Traslado.", "Alta voluntaria."],
        indicationsRO: ["Vindecare/Ameliorare.", "Deces.", "Transfer.", "Externare la cerere."]
      },
      health: {
        definitionES: "Irse a casa después del hospital.",
        definitionRO: "A merge acasă după spital."
      }
    }
  },
  {
    id: "v4_consentimiento",
    termES: "Consentimiento informado",
    termRO: "Consimțământ informat",
    profiles: {
      nursing: {
        etymologyES: "Consentimiento (sentir juntos, estar de acuerdo) + Informado (con conocimiento). Es un pilar bioético (Autonomía).",
        etymologyRO: "Cosimțământ (a simți împreună, a fi de acord) + Informat (cu cunoaștere). Este un stâlp bioetic (Autonomie).",
        definitionES: "Conformidad libre, voluntaria y consciente de un paciente, manifestada en el pleno uso de sus facultades después de recibir la información adecuada, para que tenga lugar una actuación que afecta a su salud (Ley 41/2002).\nEnfermería suele encargarse de verificar que está FIRMADO antes de procedimientos (quirófano, pruebas invasivas) y de aclarar dudas sencillas, pero la información de riesgos corresponde al facultativo que realiza la técnica.",
        definitionRO: "Acord liber, voluntar și conștient al unui pacient, manifestat în deplinătatea facultăților sale după primirea informațiilor adecvate, pentru a avea loc o acțiune care îi afectează sănătatea (Legea 41/2002).\nAsistența se ocupă de obicei să verifice că este SEMNAT înainte de proceduri (sală, teste invazive) și să clarifice dubii simple, dar informarea riscurilor aparține medicului care realizează tehnica.",
        watchES: [
          "Verificar firma del paciente (o representante legal) y del profesional.",
          "Fecha vigente (no vale uno de hace 3 años para otro proceso).",
          "Capacidad del paciente (si está sedado o demenciado, firma la familia/tutor)."
        ],
        watchRO: [
          "Verificarea semnăturii pacientului (sau reprezentantului legal) și a profesionistului.",
          "Data valabilă (nu e valid unul de acum 3 ani pentru alt proces).",
          "Capacitatea pacientului (dacă e sedat sau cu demență, semnează familia/tutorele)."
        ],
        errorsES: [
          "Llevar al paciente a quirófano SIN el consentimiento en la historia (motivo de suspensión de cirugía).",
          "Coaccionar al paciente para firmar ('o firma o no le operan' dicho de mala forma).",
          "Asumir que firmar el papel significa que han entendido todo (verificar comprensión verbalmente)."
        ],
        errorsRO: [
          "A duce pacientul la sală FĂRĂ consimțământ în foaie (motiv de suspendare a operației).",
          "A forța pacientul să semneze.",
          "A asuma că semnarea hârtiei înseamnă că au înțeles totul (verificare verbală)."
        ],
        abbrevES: "CI / Consentimiento.",
        abbrevRO: "CI / Consimțământ.",
        confuseES: [
          "Asentimiento (en menores maduros, se les escucha aunque firmen los padres).",
          "Voluntades anticipadas (testamento vital, instrucciones previas para cuando no pueda decidir)."
        ],
        confuseRO: [
          "Asentiment (la minori maturi).",
          "Directive în avans (testament vital)."
        ]
      },
      medicine: {
        definitionES: "Aceptación por el paciente de un acto médico tras ser informado de consecuencias y riesgos.",
        definitionRO: "Acceptarea de către pacient a unui act medical după informarea asupra consecințelor și riscurilor."
      },
      health: {
        definitionES: "Papel que firmas para decir que aceptas la operación y sus riesgos.",
        definitionRO: "Hârtia pe care o semnezi ca să spui că accepți operația și riscurile ei."
      }
    }
  },
  {
    id: "v1_historia_clinica",
    termES: "Historia clínica",
    termRO: "Foaie de observație clinică",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'historia' (investigación, información) y 'klinike' (lecho). Documento que recoge la vida sanitaria del paciente.",
        etymologyRO: "Din greacă 'istoria' (cercetare) și 'klinike' (pat). Document care culege viața sanitară a pacientului.",
        definitionES: "Conjunto de documentos que contienen los datos, valoraciones e informaciones de cualquier índole sobre la situación y la evolución clínica de un paciente a lo largo del proceso asistencial.\nPara enfermería incluye: Gráfica de constantes, Hoja de evolución de enfermería, Plan de cuidados (NANDA/NIC/NOC) y Administración de medicación.",
        definitionRO: "Ansamblu de documente care conțin datele, evaluările și informațiile despre situația și evoluția clinică a unui pacient.\nPentru asistență include: Graficul de funcții vitale, Foaia de evoluție asistență, Planul de îngrijire și Administrarea medicației.",
        watchES: [
          "Confidencialidad (LOPD): No acceder a historias de pacientes que no llevas (es delito penal).",
          "Objetividad: Escribir hechos ('paciente grita'), no juicios ('paciente es maleducado').",
          "Trazabilidad: Todo lo que no se escribe, no se ha hecho (legalmente)."
        ],
        watchRO: [
          "Confidențialitate: Nu accesa dosare ale pacienților pe care nu îi ai în grijă (delict penal).",
          "Obiectivitate: Scrie fapte ('pacientul țipă'), nu judecăți ('pacientul e needucat').",
          "Trasabilitate: Tot ce nu e scris, nu s-a făcut (legal)."
        ],
        errorsES: [
          "Equivocarse de paciente al escribir el curso clínico (error grave).",
          "Usar abreviaturas no estandarizadas que nadie entiende."
        ],
        errorsRO: [
          "A greși pacientul când scrii evoluția (eroare gravă).",
          "A folosi abrevieri nestandardizate pe care nimeni nu le înțelege."
        ],
        abbrevES: "HC / Historia.",
        abbrevRO: "FO / Foaie.",
        confuseES: [
          "Anamnesis (es parte de la historia, la entrevista).",
          "Epicrisis (resumen al alta)."
        ],
        confuseRO: [
          "Anamneză (parte din foaie, interviul).",
          "Epicriză (rezumat la externare)."
        ]
      },
      medicine: {
        definitionES: "Documento médico-legal que recoge la información asistencial del paciente.",
        definitionRO: "Document medico-legal care culege informația asistențială a pacientului."
      },
      health: {
        definitionES: "Tu carpeta con todos tus informes médicos.",
        definitionRO: "Dosarul tău cu toate rapoartele medicale."
      }
    }
  },
  {
    id: "v6_ingreso",
    termES: "Ingreso hospitalario",
    termRO: "Internare",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'ingressus' (entrar). Formaliza la admisión del paciente para recibir cuidados.",
        etymologyRO: "Din latină 'ingressus' (a intra). Formalizează admisia pacientului pentru a primi îngrijiri.",
        definitionES: "Admisión de un paciente en una unidad de hospitalización para recibir cuidados continuados que no pueden darse de forma ambulatoria.\nEl rol de enfermería al ingreso ('Acogida') es vital: comprobar pulsera (identidad), valorar alergias, constantes iniciales, riesgo de caídas/úlceras y enseñar el funcionamiento de la habitación (timbre, luces).",
        definitionRO: "Admisia unui pacient într-o unitate de spitalizare pentru a primi îngrijiri continue care nu se pot oferi ambulatoriu.\nRolul asistentului la internare ('Primirea') este vital: verificare brățară (identitate), alergii, funcții vitale inițiale, risc cădere/escare și explicarea camerei (sonerie, lumini).",
        errorsES: [
          "Olvidar poner la pulsera de identificación (Primer Paso de Seguridad).",
          "No preguntar alergias inmediatamente.",
          "Dar por hecho que el paciente 'sabe cómo va todo'."
        ],
        errorsRO: [
          "A uita să pui brățara de identificare (Primul Pas de Siguranță).",
          "A nu întreba alergiile imediat.",
          "A presupune că pacientul 'știe cum merge totul'."
        ],
        abbrevES: "Ingreso.",
        abbrevRO: "Internare.",
        confuseES: [
          "Urgencias (se puede estar en urgencias sin estar 'ingresado' en planta).",
          "Observación (paso previo al ingreso o alta)."
        ],
        confuseRO: [
          "Urgențe (poți fi la urgențe fără a fi 'internat' pe secție).",
          "Observație (pas anterior internării sau externării)."
        ]
      },
      medicine: {
        definitionES: "Admisión formal del paciente en el hospital por orden facultativa para diagnóstico o tratamiento que requiere supervisión continua.",
        definitionRO: "Admisia formală a pacientului în spital la ordin medical pentru diagnostic sau tratament ce necesită supraveghere continuă.",
        indicationsES: ["Patología aguda grave.", "Cirugía mayor.", "Estudio complejo."],
        indicationsRO: ["Patologie acută gravă.", "Chirurgie majoră.", "Studiu complex."]
      },
      health: {
        definitionES: "Entrada en el hospital para quedarse ingresado. Requiere trámites y asignación de cama.",
        definitionRO: "Intrarea în spital pentru a rămâne internat. Necesită formalități și alocarea unui pat."
      }
    }
  },
  {
    id: "v15_triaje",
    termES: "Triaje",
    termRO: "Triaj",
    profiles: {
      nursing: {
        etymologyES: "Del francés 'triage' (clasificar, escoger). Nació en la guerra napoleónica para priorizar heridos.",
        etymologyRO: "Din franceză 'triage' (a clasifica, a alege). A apărut în războiul napoleonian pentru a prioritiza răniții.",
        definitionES: "Método de selección y clasificación de pacientes en Urgencias basado en necesidades terapéuticas y recursos disponibles.\nNO es atender por orden de llegada. Enfermería asigna un nivel de prioridad (ej. Manchester 1 a 5) tras valorar el motivo de consulta y constantes.",
        definitionRO: "Metodă de selecție și clasificare a pacienților în Urgențe bazată pe nevoile terapeutice și resursele disponibile.\nNU este asistență în ordinea sosirii. Asistentul atribuie un nivel de prioritate (ex. Manchester 1 la 5) după evaluarea motivului consultului și a constantelor.",
        errorsES: [
          "Subestimar el dolor torácico o la disnea (infratriaje).",
          "Dejarse llevar por la agresividad del paciente versus la clínica real.",
          "No reevaluar al paciente en sala de espera."
        ],
        errorsRO: [
          "A subestima durerea toracică sau dispneea (sub-triaj).",
          "A se lăsa influențat de agresivitatea pacientului versus clinica reală.",
          "A nu reevalua pacientul în sala de așteptare."
        ],
        abbrevES: "Triaje (RAC - Recepción, Acogida y Clasificación).",
        abbrevRO: "Triaj.",
        confuseES: [
          "Diagnóstico (el triaje clasifica riesgo, no dice qué enfermedad es).",
          "Admisión (trámite administrativo de papeles, el triaje es clínico)."
        ],
        confuseRO: [
          "Diagnostic (triajul clasifică riscul, nu spune ce boală este).",
          "Admisie (formalitate administrativă de hârtii, triajul este clinic)."
        ]
      },
      medicine: {
        definitionES: "Clasificación por gravedad.",
        definitionRO: "Clasificare după gravitate."
      },
      health: {
        definitionES: "Ver quién es más urgente.",
        definitionRO: "A vedea cine este mai urgent."
      }
    }
  },
  {
    id: "m_volante",
    termES: "Volante (Petición)",
    termRO: "Bilet de trimitere",
    profiles: {
      nursing: {
        etymologyES: "Documento que 'vuela' o se transmite de un profesional a otro.",
        etymologyRO: "Document care 'zboară' sau se transmite de la un profesionist la altul.",
        definitionES: "Documento administrativo (físico o electrónico) mediante el cual un médico solicita una prueba diagnóstica o una consulta con un especialista.\nEl paciente debe presentarlo para ser atendido.",
        definitionRO: "Document administrativ prin care un medic solicită o investigație sau o consultație la specialist.\nPacientul trebuie să-l prezinte pentru a fi primit.",
        watchES: ["Comprobar que los datos del paciente son correctos antes de entregarlo.", "Verificar que lleva la firma/sello del médico."],
        watchRO: ["Verificarea datelor pacientului.", "Verificarea semnăturii/parafă medicului."],
        errorsES: ["Entregar el volante equivocado a un paciente (LOPD).", "Perder el volante (retrasa el diagnóstico)."],
        errorsRO: ["A înmâna biletul greșit.", "A pierde biletul."],
        abbrevES: "Volante / Petición.",
        abbrevRO: "Trimitere.",
        confuseES: ["Receta (para farmacia).", "Informe (resultado, no petición)."],
        confuseRO: ["Rețetă.", "Raport medical."]
      },
      medicine: {
        definitionES: "Solicitud formal de interconsulta o prueba complementaria.",
        definitionRO: "Solicitare formală de interconsult sau investigație complementară."
      },
      health: {
        definitionES: "El papel que te da el médico para ir al especialista o hacerte pruebas.",
        definitionRO: "Hârtia de la medic pentru a merge la specialist sau a face analize."
      }
    }
  },
  {
    id: "m_receta",
    termES: "Receta médica",
    termRO: "Rețetă medicală / Prescripție",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'recipe' (tómese). Instrucción para preparar/administrar.",
        etymologyRO: "Din latină 'recipe' (ia). Instrucțiune pentru preparare/administrare.",
        definitionES: "Orden médica para la dispensación de medicamentos. Actualmente suele ser electrónica (e-Receta).\nEnfermería NO prescribe (salvo prescripción enfermera autorizada en ciertos productos), pero educa sobre cómo tomarla.",
        definitionRO: "Ordin medical pentru eliberarea medicamentelor. De obicei electronică.\nAsistența NU prescrie (cu excepția unor produse autorizate), dar educă privind administrarea.",
        watchES: ["Asegurar que el paciente entiende la posología.", "Caducidad de la receta (crónicos)."],
        watchRO: ["A asigura înțelegerea posologiei.", "Valabilitatea rețetei."],
        errorsES: ["Confundir el nombre comercial con el principio activo.", "No advertir que la e-receta hay que activarla en farmacia."],
        errorsRO: ["A confunda numele comercial cu substanța activă.", "A nu avertiza activarea rețetei electronice."],
        abbrevES: "Receta.",
        abbrevRO: "Rețetă.",
        confuseES: ["Hoja de medicación (el plan de enfermería para administrar, no para comprar)."],
        confuseRO: ["Fișa de tratament."]
      },
      medicine: {
        definitionES: "Prescripción legal de fármacos.",
        definitionRO: "Prescripție legală de medicamente."
      },
      health: {
        definitionES: "Papel o tarjeta para sacar medicinas en la farmacia.",
        definitionRO: "Hârtie sau card pentru a lua medicamente de la farmacie."
      }
    }
  },
  {
    id: "m_tarjeta",
    termES: "Tarjeta Sanitaria (SIP)",
    termRO: "Card de Sănătate",
    profiles: {
      nursing: {
        etymologyES: "Documento identificativo del sistema de salud.",
        etymologyRO: "Document de identificare al sistemului de sănătate.",
        definitionES: "Documento personal e intransferible que acredita el derecho a la asistencia sanitaria pública.\nContiene el CIP/SIP (Código de Identificación Personal). Es necesaria para cualquier trámite, ingreso o receta.",
        definitionRO: "Document personal netransferabil care atestă dreptul la asistență sanitară publică.\nConține CIP/SIP. Necesar pentru orice formalitate, internare sau rețetă.",
        watchES: ["Devolverla siempre al paciente tras el registro.", "Comprobar que coincide con el DNI en ingresos."],
        watchRO: ["A o returna pacientului.", "A verifica coincidența cu CI la internare."],
        errorsES: ["Intercambiar tarjetas entre familiares.", "No pedirla en urgencias (genera problemas de facturación)."],
        errorsRO: ["A schimba cardurile între rude.", "A nu o cere la urgențe."],
        abbrevES: "SIP / Tarjeta.",
        abbrevRO: "Card.",
        confuseES: ["DNI (identidad civil, no sanitaria)."],
        confuseRO: ["Buletin/Carte de identitate."]
      },
      medicine: {
        definitionES: "Documento de acreditación de aseguramiento.",
        definitionRO: "Document de acreditare a asigurării."
      },
      health: {
        definitionES: "Tu carnet del médico.",
        definitionRO: "Carnetul tău de medic."
      }
    }
  },
  {
    id: "m_interconsulta",
    termES: "Interconsulta (Hoja de)",
    termRO: "Foaie de interconsult",
    profiles: {
      nursing: {
        etymologyES: "Inter (entre) + Consulta. Consulta entre profesionales.",
        etymologyRO: "Inter (între) + Consulta. Consult între profesioniști.",
        definitionES: "Petición de valoración a otro especialista dentro del hospital (ej. Medicina Interna pide interconsulta a Cardiología).\nEl paciente no se mueve del hospital, el especialista viene a verlo.",
        definitionRO: "Solicitare de evaluare către alt specialist în spital.\nPacientul nu pleacă, specialistul vine să-l vadă.",
        watchES: ["Registrar cuándo se pidió y cuándo se realizó.", "Preparar al paciente para la visita del otro médico."],
        watchRO: ["Înregistrarea cererii și realizării.", "Pregătirea pacientului."],
        errorsES: ["No avisar al paciente de que vendrá otro médico ('¿y usted quién es?')."],
        errorsRO: ["A nu anunța pacientul."],
        abbrevES: "IC / Interconsulta.",
        abbrevRO: "Interconsult.",
        confuseES: ["Derivación (mandar al paciente a otro centro o consulta externa)."],
        confuseRO: ["Trimitere (în alt centru)."]
      },
      medicine: {
        definitionES: "Solicitud de opinión experta a otra especialidad.",
        definitionRO: "Solicitare de opinie expertă altei specialități."
      },
      health: {
        definitionES: "Cuando tu médico llama a otro especialista para que te vea.",
        definitionRO: "Când medicul tău cheamă alt specialist să te vadă."
      }
    }
  },
  {
    id: "m_cita",
    termES: "Cita médica",
    termRO: "Programare",
    profiles: {
      nursing: {
        etymologyES: "Acuerdo de encuentro en fecha y hora.",
        etymologyRO: "Acord de întâlnire la dată și oră.",
        definitionES: "Reserva de fecha y hora para una consulta o prueba. Fundamental para la gestión de agendas.",
        definitionRO: "Rezervare de dată și oră pentru consultație sau analize.",
        watchES: ["Confirmar la cita al alta.", "Anotarla por escrito para personas mayores."],
        watchRO: ["Confirmarea la externare.", "Scrierea pentru vârstnici."],
        errorsES: ["Dar fecha verbalmente y que el paciente la olvide.", "Equivocarse de año al dar citas a largo plazo."],
        errorsRO: ["A da data verbal și pacientul să uite.", "A greși anul la programări lungi."],
        abbrevES: "Cita.",
        abbrevRO: "Programare.",
        confuseES: ["Lista de espera (aún no tienes cita asignada)."],
        confuseRO: ["Listă de așteptare."]
      },
      medicine: {
        definitionES: "Asignación de consulta programada.",
        definitionRO: "Alocare de consultație programată."
      },
      health: {
        definitionES: "Tener hora con el médico.",
        definitionRO: "A avea oră la medic."
      }
    }
  },
  {
    id: "m_parte",
    termES: "Parte de incidencias / judicial",
    termRO: "Raport de incident / judiciar",
    profiles: {
      nursing: {
        etymologyES: "Parte (comunicación oficial de un hecho).",
        etymologyRO: "Raport (comunicare oficială).",
        definitionES: "Documento oficial para comunicar eventos adversos, accidentes laborales o lesiones sospechosas (parte judicial de lesiones).\nObligatorio en agresiones, caídas con daño o sospecha de maltrato.",
        definitionRO: "Document oficial pentru comunicarea evenimentelor adverse, accidentelor sau leziunilor suspecte (raport judiciar).\nObligatoriu în agresiuni, căderi sau suspiciune de abuz.",
        watchES: ["Objetividad absoluta (legal).", "No ocultar errores propios (cultura de seguridad)."],
        watchRO: ["Obiectivitate absolută.", "Nu ascunde erorile proprii."],
        errorsES: ["No rellenarlo por miedo a represalias.", "Hacerlo tarde, olvidando detalles."],
        errorsRO: ["A nu-l completa de frică.", "A-l face târziu."],
        abbrevES: "Parte.",
        abbrevRO: "Raport.",
        confuseES: ["Informe clínico (asistencial, no legal/administrativo)."],
        confuseRO: ["Raport clinic."]
      },
      medicine: {
        definitionES: "Comunicación formal de evento con implicaciones legales o de seguridad.",
        definitionRO: "Comunicare formală a unui eveniment cu implicații legale sau de siguranță."
      },
      health: {
        definitionES: "Papel para denunciar un accidente o problema.",
        definitionRO: "Hârtie pentru a denunța un accident sau problemă."
      }
    }
  },
  {
    id: "m_traslado",
    termES: "Traslado (Derivación)",
    termRO: "Transfer (Trimitere)",
    profiles: {
      nursing: {
        etymologyES: "Llevar de un lugar a otro.",
        etymologyRO: "A duce dintr-un loc în altul.",
        definitionES: "Movimiento de un paciente a otra unidad (traslado interno) o a otro hospital (traslado externo/derivación).\nRequiere 'transfer' de enfermería (informe de continuidad) y asegurar estabilidad durante el transporte.",
        definitionRO: "Mișcarea unui pacient în altă unitate (transfer intern) sau alt spital (extern).\nNecesită 'transfer' de asistență (raport de continuitate) și asigurarea stabilității.",
        watchES: ["No enviar al paciente sin informe.", "Asegurar que lleva sus pertenencias."],
        watchRO: ["Nu trimite pacientul fără raport.", "Asigură-te că are lucrurile personale."],
        errorsES: ["Enviar al paciente inestable sin médico.", "Perder las pruebas complementarias en el viaje."],
        errorsRO: ["A trimite pacientul instabil fără medic.", "A pierde investigațiile pe drum."],
        abbrevES: "Traslado.",
        abbrevRO: "Transfer.",
        confuseES: ["Alta (se va a casa)."],
        confuseRO: ["Externare."]
      },
      medicine: {
        definitionES: "Cambio de ubicación asistencial por necesidad clínica.",
        definitionRO: "Schimbarea locației asistențiale din necesitate clinică."
      },
      health: {
        definitionES: "Que te cambien de hospital o de planta.",
        definitionRO: "Să te schimbe de spital sau de secție."
      }
    }
  }
];
