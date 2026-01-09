export const VOCABULARY_SPACES = [
  {
    id: "s1_urgencias",
    termES: "Urgencias",
    termRO: "Urgențe",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'urgens' (que urge, que aprieta). Indica necesidad inmediata de atención.",
        etymologyRO: "Din latină 'urgens' (care urcă). Indică nevoia imediată de atenție.",
        definitionES: "Área hospitalaria destinada a la atención de pacientes con problemas de salud agudos que requieren asistencia inmediata. No funciona por orden de llegada, sino por gravedad (Triaje).\nEnfermería es clave en el triaje inicial y la estabilización.",
        definitionRO: "Zonă spitalicească destinată îngrijirii pacienților cu probleme acute de sănătate care necesită asistență imediată. Nu funcționează în ordinea sosirii, ci după gravitate (Triaj).\nAsistența este cheie în triajul inițial și stabilizare.",
        watchES: ["Saturación del servicio (colapso).", "Pacientes esperando en pasillos.", "Priorización constante según evolución."],
        watchRO: ["Saturarea serviciului (colaps).", "Pacienți care așteaptă pe holuri.", "Prioritizare constantă conform evoluției."],
        errorsES: ["Acudir por patología banal (satura el sistema).", "Confundir urgencia (riesgo vital) con emergencia (requiere atención rápida pero no inmediata vital)."],
        errorsRO: ["A veni pentru patologie banală.", "A confunda urgența cu emergența."],
        abbrevES: "Urg.",
        abbrevRO: "Urg.",
        confuseES: ["Emergencias (sistema prehospitalario / ambulancias).", "PAC (Punto de Atención Continuada - urgencias centro salud)."],
        confuseRO: ["Emergențe (sistem prespitalicesc).", "PAC (Punct de Atenție Continuă)."]
      },
      medicine: {
        definitionES: "Servicio de atención médica inmediata a patología aguda.",
        definitionRO: "Serviciu de asistență medicală imediată pentru patologie acută."
      },
      health: {
        definitionES: "Donde vas cuando te pasa algo grave de repente.",
        definitionRO: "Unde mergi când ți se întâmplă ceva grav brusc."
      }
    }
  },
  {
    id: "s2_uci",
    termES: "UCI (Unidad de Cuidados Intensivos)",
    termRO: "ATI (Anestezie și Terapie Intensivă)",
    profiles: {
      nursing: {
        etymologyES: "Siglas de Unidad de Cuidados Intensivos. En inglés ICU.",
        etymologyRO: "Sigle pentru Anestezie și Terapie Intensivă. În engleză ICU.",
        definitionES: "Área de alta tecnificación para pacientes en estado crítico con riesgo vital, pero recuperables.\nRatio enfermera:paciente muy bajo (1:1 o 1:2). Requiere monitorización continua, soporte vital avanzado (respiradores, drogas vasoactivas).",
        definitionRO: "Zonă de înaltă tehnificare pentru pacienți în stare critică cu risc vital, dar recuperabili.\nRaport asistent:pacient foarte scăzut (1:1 sau 1:2). Necesită monitorizare continuă, suport vital avansat.",
        watchES: ["Alarmas de monitores (fatiga de alarmas).", "Infecciones nosocomiales (Bacteriemia Zero, Neumonía Zero)."],
        watchRO: ["Alarme monitoare.", "Infecții nosocomiale."],
        errorsES: ["Entrar sin uniforme adecuado/lavado manos.", "Desconectar alarmas sin revisar al paciente."],
        errorsRO: ["A intra fără uniformă/spălat pe mâini.", "A deconecta alarmele fără a verifica pacientul."],
        abbrevES: "UCI / UVI.",
        abbrevRO: "ATI.",
        confuseES: ["REA (Reanimación - postquirúrgica).", "Urgencias (paso previo)."],
        confuseRO: ["REA (Reanimare - postchirurgicală).", "Urgențe (pas anterior)."]
      },
      medicine: {
        definitionES: "Unidad de soporte vital avanzado.",
        definitionRO: "Unitate de suport vital avansat."
      },
      health: {
        definitionES: "Donde están los pacientes más graves.",
        definitionRO: "Unde sunt cei mai gravi pacienți."
      }
    }
  },
  {
    id: "s3_box",
    termES: "Box",
    termRO: "Boxă / Compartiment",
    profiles: {
      nursing: {
        etymologyES: "Anglicismo 'Box' (caja). Espacio cerrado o delimitado.",
        etymologyRO: "Anglicism 'Box' (cutie). Spațiu închis sau delimitat.",
        definitionES: "Espacio individual de atención en Urgencias o UCI, delimitado por paredes o cortinas, equipado para la asistencia directa.\nA diferencia de la 'habitación' de planta, suele ser más accesible y visible para el control de enfermería. Puede ser 'Box Vital' (parada cardíaca) o estándar.",
        definitionRO: "Spațiu individual de îngrijire în Urgențe sau ATI, delimitat de pereți sau perdele.\nSpre deosebire de 'salon', este mai accesibil și vizibil. Poate fi 'Box Vital' sau standard.",
        watchES: ["Privacidad (cerrar cortinas).", "Limpieza entre pacientes."],
        watchRO: ["Intimitate (închide perdelele).", "Curățenie între pacienți."],
        errorsES: ["Dejar al paciente solo sin timbre o vigilancia.", "Confundir Box con Habitación de ingreso."],
        errorsRO: ["A lăsa pacientul singur fără sonerie.", "A confunda Boxa cu Salonul."],
        abbrevES: "Box.",
        abbrevRO: "Boxă.",
        confuseES: ["Habitación (tiene baño, puerta cerrada, para ingreso prolongado).", "Consulta (solo se habla/explora, no hay cama encamada generalmente)."],
        confuseRO: ["Salon (are baie, ușă, pentru internare).", "Cabinet (doar discuții/examinare)."]
      },
      medicine: {
        definitionES: "Cubículo de atención clínica inmediata.",
        definitionRO: "Cubicul de asistență clinică imediată."
      },
      health: {
        definitionES: "El cuarto pequeño de urgencias donde te atienden.",
        definitionRO: "Camera mică de la urgențe unde te consultă."
      }
    }
  },
  {
    id: "s4_quirofano",
    termES: "Quirófano",
    termRO: "Sală de operație / Bloc operator",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'cheir' (mano) y 'phanein' (mostrar). Lugar donde se 'opera con las manos'.",
        etymologyRO: "Din greacă 'cheir' (mână) și 'phanein' (a arăta). Loc unde se 'operează cu mâinile'.",
        definitionES: "Sala aseptica equipada para realizar intervenciones quirúrgicas.\nReglas estrictas de esterilidad y circulación ('zona limpia' vs 'zona sucia'). Roles enfermeros claros: Instrumentista (estéril), Circulante (no estéril, nexo con el exterior).",
        definitionRO: "Sală aseptică echipată pentru intervenții chirurgicale.\nReguli stricte de sterilitate. Roluri clare: Instrumentistă (steril), Circulantă (nesteril).",
        watchES: ["Conteo de gasas y compresas (para no dejarlas dentro).", "Esterilidad del campo."],
        watchRO: ["Numărătoarea compreselor.", "Sterilitatea câmpului."],
        errorsES: ["Tocar campo estéril sin estar lavado.", "Entrar sin mascarilla/gorro bien colocados."],
        errorsRO: ["A atinge câmpul steril nespălat.", "A intra fără mască/bonetă."],
        abbrevES: "Qx / Quirófano.",
        abbrevRO: "S.O. / Bloc operator.",
        confuseES: ["Sala de curas (procedimientos menores, no estéril estricto).", "Paritorio (partos, aunque puede ser quirúrgico)."],
        confuseRO: ["Sală de tratament.", "Sală de nașteri."]
      },
      medicine: {
        definitionES: "Recinto para cirugía.",
        definitionRO: "Incintă pentru chirurgie."
      },
      health: {
        definitionES: "Donde te operan.",
        definitionRO: "Unde te operează."
      }
    }
  },
  {
    id: "s5_control",
    termES: "Control de Enfermería (Estación)",
    termRO: "Asistență / Post de control",
    profiles: {
      nursing: {
        etymologyES: "Lugar desde donde se 'controla' o supervisa la unidad.",
        etymologyRO: "Loc de unde se 'controlează' sau supervizează unitatea.",
        definitionES: "Centro neurálgico de la planta o unidad. Donde se preparan medicaciones, se realiza el relevo, se almacenan historias (si son papel) y se gestionan las llamadas de los pacientes.\nEs zona 'sucia' administrativa y zona 'limpia' de medicación (separadas).",
        definitionRO: "Centrul nevralgic al secției. Unde se pregătesc medicamente, se face raportul, se țin foile. Zonă administrativă și de preparație.",
        watchES: ["Confidencialidad (no hablar de pacientes a voz en grito).", "Orden y limpieza."],
        watchRO: ["Confidențialitate.", "Ordine și curățenie."],
        errorsES: ["Dejar historias abiertas con datos visibles.", "Comer en la zona de preparación de medicación."],
        errorsRO: ["A lăsa foi deschise.", "A mânca în zona de medicamente."],
        abbrevES: "Control.",
        abbrevRO: "Post.",
        confuseES: ["Despacho supervisora (oficina gestión).", "Sala de descanso (off-limits para trabajo)."],
        confuseRO: ["Birou asistentă șefă.", "Sală de odihnă."]
      },
      medicine: {
        definitionES: "Punto de gestión administrativa y clínica de la unidad.",
        definitionRO: "Punct de gestiune administrativă și clinică a unității."
      },
      health: {
        definitionES: "El mostrador donde están las enfermeras.",
        definitionRO: "Biroul unde stau asistentele."
      }
    }
  },
  {
    id: "s6_sala_curas",
    termES: "Sala de curas",
    termRO: "Sală de tratament / Pansamente",
    profiles: {
      nursing: {
        etymologyES: "Sala destinada a realizar 'curas' (tratamientos locales).",
        etymologyRO: "Sală destinată 'pansamentelor' (tratamente locale).",
        definitionES: "Espacio habilitado para realizar técnicas que requieren cierta asepsia o privacidad, o que manchan, y que no se hacen en la habitación/box.\nEquipada con camilla, carro de curas, buena iluminación y material de sutura/drenaje.",
        definitionRO: "Spațiu habilitat pentru tehnici ce necesită asepsie sau intimitate.\nEchipată cu pat, cărucior de tratament, lumină bună.",
        watchES: ["Limpieza de superficies entre pacientes.", "Ventilación."],
        watchRO: ["Curățarea suprafețelor.", "Ventilație."],
        errorsES: ["Usar como almacén (acumular cajas).", "No limpiar la camilla tras una cura infectada."],
        errorsRO: ["A folosi ca depozit.", "A nu curăța patul după o plagă infectată."],
        abbrevES: "Curas.",
        abbrevRO: "Sala pansamente.",
        confuseES: ["Quirófano (mayor complejidad).", "Box (atención general)."],
        confuseRO: ["Bloc operator.", "Boxă."]
      },
      medicine: {
        definitionES: "Sala de procedimientos menores.",
        definitionRO: "Sală de proceduri minore."
      },
      health: {
        definitionES: "Donde te curan las heridas.",
        definitionRO: "Unde îți pansează rănile."
      }
    }
  },
  {
    id: "s7_rea",
    termES: "Reanimación (REA)",
    termRO: "Reanimare / Terapie Postoperatorie",
    profiles: {
      nursing: {
        etymologyES: "Re (volver) + Anima (vida/aliento). Volver a la vida. Se usa para despertar post-quirúrgico.",
        etymologyRO: "Re (din nou) + Anima (viață). A readuce la viață. Se folosește pentru trezirea postoperatorie.",
        definitionES: "Unidad de post-operatorio inmediato. Pacientes que salen de quirófano y necesitan control intensivo hasta despertar de la anestesia o estabilizarse.\nSimilar a una UCI pero enfocada al post-quirúrgico ('Despertar').",
        definitionRO: "Unitate postoperatorie imediată. Pacienți care ies din operație și necesită control intensiv până la trezire.\nSimilar cu ATI dar focalizat pe postoperator ('Trezire').",
        watchES: ["Vía aérea (extubación).", "Dolor (control analgésico intenso).", "Sangrado quirúrgico."],
        watchRO: ["Căi aeriene.", "Durere.", "Sângerare chirurgicală."],
        errorsES: ["Dar el alta a planta con dolor no controlado.", "No vigilar naúseas post-anestesia."],
        errorsRO: ["A externa pe secție cu durere necontrolată.", "A nu supraveghea greața."],
        abbrevES: "REA / URPA (Unidad de Recuperación Post Anestésica).",
        abbrevRO: "Reanimare / Post-op.",
        confuseES: ["UCI (pacientes médicos o quirúrgicos complicados larga estancia).", "Quirófano (donde se opera)."],
        confuseRO: ["ATI.", "Sală de operație."]
      },
      medicine: {
        definitionES: "Unidad de críticos post-quirúrgicos.",
        definitionRO: "Unitate de critici post-chirurgicali."
      },
      health: {
        definitionES: "Donde te despiertas de la anestesia.",
        definitionRO: "Unde te trezești din anestezie."
      }
    }
  },
  {
    id: "s8_morgue",
    termES: "Morgue (Tanatorio)",
    termRO: "Morgă",
    profiles: {
      nursing: {
        etymologyES: "Del francés 'morgue'. Lugar para depositar cadáveres.",
        etymologyRO: "Din franceză 'morgue'. Loc pentru depozitarea cadavrelor.",
        definitionES: "Espacio refrigerado donde se trasladan los pacientes fallecidos (exitus) antes de ser recogidos por servicios funerarios.\nEl rol de enfermería termina con los cuidados post-mortem (amortajamiento) y el traslado digno.",
        definitionRO: "Spațiu refrigerat unde sunt transferați pacienții decedați.\nRolul asistenței se termină cu îngrijirile post-mortem și transferul demn.",
        watchES: ["Identificación CORRECTA del cadáver (etiqueta en tobillo/sudario).", "Dignidad y respeto."],
        watchRO: ["Identificare CORECTĂ.", "Demnitate și respect."],
        errorsES: ["Olvidar retirar vías/catéteres antes de bajar a morgue (salvo judicial).", "Error en identificación."],
        errorsRO: ["A uita să scoți catetere.", "Eroare de identificare."],
        abbrevES: "Morgue.",
        abbrevRO: "Morgă.",
        confuseES: ["Anatomía Patológica (donde analizan biopsias, aunque a veces comparten ubicación)."],
        confuseRO: ["Anatomie Patologică."]
      },
      medicine: {
        definitionES: "Depósito de cadáveres.",
        definitionRO: "Depozit de cadavre."
      },
      health: {
        definitionES: "Donde llevan a los fallecidos.",
        definitionRO: "Unde duc decedații."
      }
    }
  },
  {
    id: "s9_farmacia",
    termES: "Farmacia Hospitalaria",
    termRO: "Farmacie de Spital",
    profiles: {
      nursing: {
        etymologyES: "Del griego 'pharmakon' (remedio/veneno).",
        etymologyRO: "Din greacă 'pharmakon'.",
        definitionES: "Servicio central que dispensa los medicamentos a las plantas. NO es una farmacia de calle.\nPreparan mezclas intravenosas estériles (citostáticos, nutriciones). Enfermería solicita (pedidos) y Farmacia dispensa (unidosis).",
        definitionRO: "Serviciu central care dispensează medicamentele pe secții.\nPrepară amestecuri intravenoase sterile.",
        watchES: ["Caducidades.", "Condiciones de conservación (nevera)."],
        watchRO: ["Valabilitate.", "Condiții de păstrare (frigider)."],
        errorsES: ["Pedir medicación 'de urgencia' sin serlo.", "Acumular stock ('secuestro' de medicación) en planta."],
        errorsRO: ["A cere medicație 'de urgență' fără a fi.", "A acumula stoc pe secție."],
        abbrevES: "Farmacia.",
        abbrevRO: "Farmacia.",
        confuseES: ["Farmacia de guardia (calle).", "Botiquín de planta (stock inmediato)."],
        confuseRO: ["Farmacie de gardă.", "Dulap de medicamente."]
      },
      medicine: {
        definitionES: "Servicio de gestión farmacoterapéutica.",
        definitionRO: "Serviciu de gestiune farmacoterapeutică."
      },
      health: {
        definitionES: "El almacén de medicinas del hospital.",
        definitionRO: "Depozitul de medicamente al spitalului."
      }
    }
  }
];
