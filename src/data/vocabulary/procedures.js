export const VOCABULARY_PROCEDURES = [
  {
    id: "v4_cateterismo",
    termES: "Cateterismo",
    termRO: "Cateterismo",
    profiles: {
      nursing: {
        etymologyES: "Se considera que catéter se asocia a un “tubo” introducido en el cuerpo para acceder a un conducto o cavidad, mientras que -ismo se utiliza para formar un sustantivo que indica “procedimiento” o “acción”. Cuando se juntan para formar “cateterismo”, puede entenderse que significa el procedimiento de introducir un catéter.",
        etymologyRO: "Se consideră că catéter se asociază cu un „tub” introdus în corp pentru a accesa un conduct sau o cavitate, în timp ce -ismo se folosește pentru a forma un substantiv care indică „procedură” sau „acțiune”. Când se unesc pentru a forma „cateterismo”, se poate înțelege că înseamnă procedura de a introduce un cateter.",
        definitionES: "Procedimiento que consiste en introducir un catéter en un vaso, conducto o cavidad con fines diagnósticos, terapéuticos o de drenaje, según el tipo (vascular, urinario, etc.).\nEn el lenguaje clínico, el término puede usarse de forma general, pero el contexto (p. ej., “cateterismo cardíaco” o “cateterismo vesical”) aclara a qué se refiere.\nEn enfermería, el enfoque práctico es conocer el objetivo, riesgos habituales (infección, sangrado, dolor, complicaciones según localización) y cuidados asociados al tipo de catéter.",
        definitionRO: "Procedură care constă în introducerea unui cateter într-un vas, conduct sau cavitate cu scop diagnostic, terapeutic sau de drenaj, în funcție de tip (vascular, urinar etc.).\nÎn limbajul clinic, termenul poate fi folosit general, dar contextul (de ex., „cateterismo cardíaco” sau „cateterismo vesical”) clarifică la ce se referă.\nÎn asistență medicală, abordarea practică este cunoașterea scopului, a riscurilor obișnuite (infecție, sângerare, durere, complicații în funcție de localizare) și a îngrijirilor asociate tipului de cateter.",
        watchES: [
          "Signos de complicación local (dolor intenso, sangrado, hematoma, inflamación) según el punto de acceso.",
          "Signos de infección relacionados con el dispositivo o el sitio de inserción.",
          "Funcionamiento del catéter (permeabilidad, drenaje o uso previsto) según indicación."
        ],
        watchRO: [
          "Semne de complicație locală (durere intensă, sângerare, hematom, inflamație) în funcție de punctul de acces.",
          "Semne de infecție legate de dispozitiv sau de locul de inserție.",
          "Funcționarea cateterului (permeabilitate, drenaj sau utilizare prevăzută) conform indicației."
        ],
        errorsES: [
          "Usar “cateterismo” sin especificar el tipo, generando ambigüedad en la comunicación.",
          "Confundir cateterismo con sondaje cuando el contexto es urinario/digestivo."
        ],
        errorsRO: [
          "A folosi „cateterismo” fără a specifica tipul, generând ambiguitate în comunicare.",
          "A confunda cateterismul cu sondajul când contextul este urinar/digestiv."
        ],
        abbrevES: "Puede aparecer como “cath.” o “catet.” según hábito local, aunque no es universal.",
        abbrevRO: "Poate apărea ca „cath.” sau „catet.” în funcție de obiceiul local, deși nu este universal.",
        confuseES: [
          "Canalización venosa periférica (procedimiento específico y distinto).",
          "Sondaje (término más usado para vías urinarias/digestivas).",
          "Cateterismo cardíaco (uso específico, no equivalente al término genérico sin contexto)."
        ],
        confuseRO: [
          "Canalizare venoasă periferică (procedură specifică și diferită).",
          "Sondaj (termen mai folosit pentru căi urinare/digestive).",
          "Cateterismo cardíaco (utilizare specifică, nu echivalentă cu termenul generic fără context)."
        ]
      },
      medicine: {
        definitionES: "Procedimiento invasivo consistente en la introducción de un catéter en un vaso, cavidad o conducto con finalidad diagnóstica y/o terapéutica, cuyo significado exacto depende del territorio (vascular, cardíaco, urinario, etc.) y debe especificarse en la documentación clínica.",
        definitionRO: "Procedură invazivă constând în introducerea unui cateter într-un vas, cavitate sau conduct cu finalitate diagnostică și/sau terapeutică, a cărei semnificație exactă depinde de teritoriu (vascular, cardiac, urinar etc.) și trebuie specificată în documentarea clinică.",
        indicationsES: [
          "Acceso vascular o cavitario para diagnóstico, monitorización o tratamiento según el territorio anatómico.",
          "Procedimientos específicos (p. ej., hemodinámica en cateterismo cardíaco; drenaje/derivación en otros contextos).",
          "Administración terapéutica o toma de muestras cuando proceda y esté indicado."
        ],
        indicationsRO: [
          "Acces vascular sau cavitar pentru diagnostic, monitorizare sau tratament în funcție de teritoriul anatomic.",
          "Proceduri specifice (de ex., hemodinamică în cateterismo cardíaco; drenaj/derivație în alte contexte).",
          "Administrare terapeutică sau recoltare de probe când este cazul și este indicat."
        ],
        contraES: [
          "Valorar riesgo hemorrágico, infección activa y comorbilidades según localización y técnica.",
          "Evaluar anatomía, accesibilidad y necesidad de profilaxis o preparación según procedimiento.",
          "Asegurar indicación y especificación del tipo de cateterismo en el registro."
        ],
        contraRO: [
          "Evaluarea riscului hemoragic, a infecției active și a comorbidităților în funcție de localizare și tehnică.",
          "Evaluarea anatomiei, accesibilității și a necesității de profilaxie sau pregătire în funcție de procedură.",
          "Asigurarea indicației și specificarea tipului de cateterism în înregistrare."
        ],
        complicationsES: [
          "Complicaciones mecánicas locales (hematoma, sangrado, lesión vascular o del conducto).",
          "Complicaciones infecciosas asociadas a acceso/dispositivo.",
          "Complicaciones específicas del territorio (p. ej., arritmias en procedimientos intracardíacos; perforación en cavidades)."
        ],
        complicationsRO: [
          "Complicații mecanice locale (hematom, sângerare, leziune vasculară sau a conductului).",
          "Complicații infecțioase asociate accesului/dispozitivului.",
          "Complicații specifice teritoriului (de ex., aritmii în proceduri intracardiace; perforație în cavități)."
        ],
        differentiateES: [
          "Sondaje (término procedimental más acotado, especialmente urinario/digestivo).",
          "Canalización venosa periférica (técnica concreta, no sinónimo).",
          "Punción diagnóstica aislada (sin colocación de catéter)."
        ],
        differentiateRO: [
          "Sondaj (termen procedural mai restrâns, în special urinar/digestiv).",
          "Canalizare venoasă periferică (tehnică concretă, nu sinonim).",
          "Puncție diagnostică izolată (fără plasarea cateterului)."
        ],
        confuseES: [
          "Cateterismo cardíaco (procedimiento específico).",
          "Cateterismo vesical (sondaje urinario, uso específico).",
          "Cateterismo central (CVC/PICC) cuando se describen accesos venosos específicos."
        ],
        confuseRO: [
          "Cateterismo cardíaco (procedură specifică).",
          "Cateterismo vesical (sondaj urinar, utilizare specifică).",
          "Cateterism central (CVC/PICC) când se descriu accesuri venoase specifice."
        ]
      },
      health: {
        etymologyES: "“Catéter” se asocia a un tubo introducido en el cuerpo y “-ismo” a un procedimiento. Cuando se juntan, indica el procedimiento de introducir un catéter.",
        etymologyRO: "„Catéter” se asociază cu un tub introdus în corp, iar „-ismo” cu o procedură. Când se unesc, indică procedura de a introduce un cateter.",
        definitionES: "Procedimiento en el que se introduce un catéter para acceder a un vaso o cavidad con finalidad diagnóstica o terapéutica, según el contexto.\nPara el trabajo interdisciplinar, lo relevante es que implica invasividad y posibles restricciones por dolor, sangrado o riesgo infeccioso.",
        definitionRO: "Procedură în care se introduce un cateter pentru a accesa un vas sau o cavitate cu scop diagnostic sau terapeutic, în funcție de context.\nPentru munca interdisciplinară, relevant este că implică invazivitate și posibile restricții din cauza durerii, sângerării sau riscului infecțios.",
        safetyES: [
          "Vigilar signos de sangrado/dolor desproporcionado en el punto de acceso.",
          "Riesgo de infección asociado a dispositivos."
        ],
        safetyRO: [
          "Monitorizarea semnelor de sângerare/durere disproporționată la locul de acces.",
          "Risc de infecție asociat dispozitivelor."
        ],
        confuseES: [
          "Sondaje (más típico en urinario/digestivo).",
          "Canalización venosa periférica (técnica concreta).",
          "Punción aislada (sin catéter mantenido)."
        ],
        confuseRO: [
          "Sondaj (mai tipic în urinar/digestiv).",
          "Canalizare venoasă periferică (tehnică concretă).",
          "Puncție izolată (fără cateter menținut)."
        ]
      }
    }
  },
  {
    id: "v9_cura",
    termES: "Cura (herida)",
    termRO: "Pansament (îngrijirea plăgii)",
    profiles: {
      nursing: {
        etymologyES: "Proviene del latín 'cura' (cuidado, solicitud). En enfermería, ha derivado a significar específicamente el procedimiento técnico de limpiar y proteger una lesión.",
        etymologyRO: "Provine din latină 'cura' (grijă, solicitare). În asistență medicală, a derivat să însemne specific procedura tehnică de curățare și protejare a unei leziuni.",
        definitionES: "Procedimiento técnico para gestionar una solución de continuidad en la piel (quirúrgica, úlcera, traumática).\nIncluye limpieza (suero, antiséptico), desbridamiento si procede, y aplicación de apósitos o vendajes. Requiere técnica aséptica o estéril según profundidad y tipo.",
        definitionRO: "Procedură tehnică pentru gestionarea unei soluții de continuitate a pielii (chirurgicală, ulcer, traumatică).\nInclude curățare (ser, antiseptic), debridare dacă este cazul și aplicarea de pansamente sau bandaje. Necesită tehnică aseptică sau sterilă în funcție de profunzime și tip.",
        errorsES: [
          "Usar povidona yodada en heridas abiertas o crónicas (no recomendado actual).",
          "Arrancar apósitos en seco dañando la piel nueva.",
          "Manipular material estéril con guantes no estériles."
        ],
        errorsRO: [
          "A folosi povidonă iodată în răni deschise sau cronice (nerecomandat actual).",
          "A smulge pansamentele uscat rănind pielea nouă.",
          "A manipula material steril cu mănuși nesterile."
        ],
        abbrevES: "No suele abreviarse.",
        abbrevRO: "Nu se obișnuiește abrevierea.",
        confuseES: [
          "Sutura (coser la herida, la cura es el mantenimiento).",
          "Desbridamiento quirúrgico (procedimiento médico mayor).",
          "Higiene (lavado general, no focalizado en lesión)."
        ],
        confuseRO: [
          "Sutură (coaserea rănii, pansamentul este întreținerea).",
          "Debridare chirurgicală (procedură medicală majoră).",
          "Igienă (spălare generală, nu focalizată pe leziune)."
        ]
      },
      medicine: {
        definitionES: "Gestión local de lesiones tisulares.",
        definitionRO: "Gestionarea locală a leziunilor tisulare."
      },
      health: {
        definitionES: "Limpiar y tapar una herida.",
        definitionRO: "A curăța și a acoperi o rană."
      }
    }
  },
  {
    id: "v8_exploracion",
    termES: "Exploración física",
    termRO: "Examinare fizică",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'exploratio'. Implica buscar, indagar o examinar con atención. Se refiere al examen directo del cuerpo del paciente.",
        etymologyRO: "Din latină 'exploratio'. Implică a căuta, a indaga sau a examina cu atenție. Se referă la examenul direct al corpului pacientului.",
        definitionES: "Examen sistemático céfalo-caudal utilizando los sentidos y maniobras (inspección, palpación, percusión, auscultación).\nEn enfermería, el foco no es solo el diagnóstico médico, sino detectar 'respuestas humanas': integridad cutánea, patrón respiratorio, edemas, estado de conciencia y dolor.",
        definitionRO: "Examen sistematic cefalo-caudal folosind simțurile și manevrele (inspecție, palpare, percuție, auscultație).\nÎn asistență medicală, focusul nu este doar diagnosticul medical, ci detectarea 'răspunsurilor umane': integritate cutanată, tipar respirator, edeme, stare de conștiență și durere.",
        errorsES: [
          "No respetar la intimidad (exponer al paciente innecesariamente).",
          "Tener las manos o instrumental fríos.",
          "Saltarse zonas por ir con prisa (ej. talones, sacro)."
        ],
        errorsRO: [
          "A nu respecta intimitatea (expunerea inutilă a pacientului).",
          "A avea mâinile sau instrumentarul reci.",
          "A sări peste zone din grabă (ex. călcâie, sacru)."
        ],
        abbrevES: "EF (Exploración Física).",
        abbrevRO: "Ex. Fiz. (Examinare Fizică).",
        confuseES: [
          "Anamnesis (entrevista/interrogatorio, no se toca).",
          "Pruebas complementarias (RX, Analítica).",
          "Monitorización (uso de aparatos, no examen manual)."
        ],
        confuseRO: [
          "Anamneză (interviu/interogatoriu, nu se atinge).",
          "Investigații complementare (RX, Analize).",
          "Monitorizare (utilizarea aparatelor, nu examen manual)."
        ]
      },
      medicine: {
        definitionES: "Recolección de signos clínicos objetivos.",
        definitionRO: "Colectarea semnelor clinice obiective."
      },
      health: {
        definitionES: "Que te miren y toquen para ver qué tienes.",
        definitionRO: "Să te privească și să te atingă să vadă ce ai."
      }
    }
  },
  {
    id: "v11_extraccion",
    termES: "Extracción sanguínea",
    termRO: "Recoltare sânge",
    profiles: {
      nursing: {
        etymologyES: "Extraer (sacar fuera) + sango (sangre). Vulgarmente 'sacar sangre' o 'analítica'.",
        etymologyRO: "A extrage (a scoate afară) + sânge. Popular 'a lua sânge' sau 'analize'.",
        definitionES: "Procedimiento para obtener muestras de sangre venosa (flebotomía), arterial o capilar.\nCrítico el orden de los tubos (evitar contaminación cruzada de aditivos) y el correcto llenado. Es la técnica enfermera más frecuente en laboratorio.",
        definitionRO: "Procedură pentru obținerea probelor de sânge venos (flebotomie), arterial sau capilar.\nCritică ordinea tuburilor (evitarea contaminării încrucișate a aditivilor) și umplerea corectă. Este tehnica de asistență cea mai frecventă în laborator.",
        errorsES: [
          "Mantener el torniquete más de 1 minuto (hemólisis/altera potasio).",
          "Etiquetar los tubos lejos del paciente.",
          "Agitar los tubos vigorosamente (hemólisis)."
        ],
        errorsRO: [
          "A menține garoul mai mult de 1 minut (hemoliză/alterează potasiul).",
          "A eticheta tuburile departe de pacient.",
          "A agita tuburile viguros (hemoliză)."
        ],
        abbrevES: "Extracción / Analítica.",
        abbrevRO: "Recoltare / Analize.",
        confuseES: [
          "Donación de sangre (volumen mayor, bolsa, no tubo).",
          "Gasometría (arterial, técnica distinta a venosa).",
          "Vía periférica (poner catéter, no solo aguja)."
        ],
        confuseRO: [
          "Donare de sânge (volum mai mare, pungă, nu tub).",
          "Gazometrie (arterială, tehnică diferită de venoasă).",
          "Linie periferică (punerea cateterului, nu doar ac)."
        ]
      },
      medicine: {
        definitionES: "Obtención de muestra biológica hemática.",
        definitionRO: "Obținerea probei biologice hematice."
      },
      health: {
        definitionES: "Sacar sangre para ver cómo estás.",
        definitionRO: "A scoate sânge pentru a vedea cum ești."
      }
    }
  },
  {
    id: "v10_puncion",
    termES: "Punción",
    termRO: "Puncție",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'punctio' (acción de picar o punzar). Indica la penetración de una barrera (piel) con un elemento punzante.",
        etymologyRO: "Din latină 'punctio' (acțiunea de a înțepa sau puncționa). Indică penetrarea unei bariere (piele) cu un element ascuțit.",
        definitionES: "Técnica invasiva que introduce una aguja o catéter a través de la piel.\nPuede ser para extracción (sangre, líquido), administración (inyección IM/SC/IV) o exploración. La competencia enfermera clave es la anatomía del sitio, la asepsia y la gestión del dolor/ansiedad.",
        definitionRO: "Tehnică invazivă care introduce un ac sau cateter prin piele.\nPoate fi pentru extracție (sânge, lichid), administrare (injecție IM/SC/IV) sau explorare. Competența cheie a asistentului este anatomia locului, asepsia și gestionarea durerii/anxietății.",
        errorsES: [
          "Reencapuchar agujas (RIESGO GRAVE de pinchazo accidental).",
          "No rotar los sitios de punción (lipodistrofia, flebitis).",
          "Puncionar sobre zonas infectadas o edematosas."
        ],
        errorsRO: [
          "A reacoperi acele (RISC GRAV de înțepătură accidentală).",
          "A nu roti locurile de puncție (lipodistrofie, flebită).",
          "A puncționa peste zone infectate sau edematoase."
        ],
        abbrevES: "No estandarizada.",
        abbrevRO: "Nestandardizată.",
        confuseES: [
          "Incisión (corte con bisturí).",
          "Infiltración (inyectar en tejido, un tipo específico).",
          "Cateterización (dejar un tubo, la punción es el acto de entrar)."
        ],
        confuseRO: [
          "Incizie (tăietură cu bisturiul).",
          "Infiltrație (injectare în țesut, un tip specific).",
          "Cateterizare (a lăsa un tub, puncția este actul de a intra)."
        ]
      },
      medicine: {
        definitionES: "Acceso percutáneo invasivo.",
        definitionRO: "Acces percutanat invaziv."
      },
      health: {
        definitionES: "Pinchazo con aguja.",
        definitionRO: "Înțepătură cu ac."
      }
    }
  },
  {
    id: "v5_sonda_vesical",
    termES: "Sonda vesical",
    termRO: "Sonda vesical",
    profiles: {
      nursing: {
        etymologyES: "Se considera que vesic(al) se relaciona con vejiga (latín “vesica”), mientras que -al tiene el significado de “relativo a”. Cuando se juntan para formar “vesical”, puede entenderse que significa “relativo a la vejiga”. Al decir “sonda vesical”, se entiende una sonda relacionada con la vejiga, es decir, destinada a acceder a la vejiga urinaria.",
        etymologyRO: "Se consideră că vesic(al) se leagă de vezică (latină „vesica”), în timp ce -al are semnificația de „relativ la”. Când se unesc pentru a forma „vesical”, se poate înțelege că înseamnă „relativ la vezică”. Când se spune „sonda vesical”, se înțelege o sondă legată de vezică, adică destinată accesului la vezica urinară.",
        definitionES: "Dispositivo tubular que se introduce por la uretra hasta la vejiga para drenar orina, monitorizar diuresis o manejar retención urinaria según indicación.\nEn enfermería, el manejo se orienta a mantener un sistema cerrado cuando procede, prevenir infecciones, evitar tracciones y asegurar drenaje correcto.\nPuede ser permanente o intermitente según objetivo clínico, y el tipo (p. ej., Foley) se especifica según el contexto.",
        definitionRO: "Dispozitiv tubular introdus prin uretră până la vezică pentru drenaj urinar, monitorizarea diurezei sau managementul retenției urinare conform indicației.\nÎn asistență medicală, gestionarea se orientează spre menținerea unui sistem închis când este cazul, prevenirea infecțiilor, evitarea tracțiunilor și asigurarea drenajului corect.\nPoate fi permanentă sau intermitentă în funcție de scopul clinic, iar tipul (de ex., Foley) se specifică în funcție de context.",
        watchES: [
          "Diuresis y características de la orina (cantidad, color, sedimento) según objetivo.",
          "Dolor, hematuria, fiebre o signos de infección urinaria asociada a catéter.",
          "Obstrucción o acodamiento del sistema; drenaje insuficiente.",
          "Tracción accidental y lesiones uretrales; integridad del sistema de drenaje."
        ],
        watchRO: [
          "Diureză și caracteristicile urinei (cantidad, culoare, sediment) conform scopului.",
          "Durere, hematurie, febră sau semne de infecție urinară asociată cateterului.",
          "Obstrucție sau îndoire a sistemului; drenaj insuficient.",
          "Tracțiune accidentală și leziuni uretrale; integritatea sistemului de drenaj.",
        ],
        errorsES: [
          "Romper el sistema cerrado sin indicación, aumentando riesgo de infección.",
          "No asegurar el circuito de drenaje y provocar tracciones o reflujo."
        ],
        errorsRO: [
          "A rupe sistemul închis fără indicație, crescând riscul de infecție.",
          "A nu asigura circuitul de drenaj și a provoca tracțiuni sau reflux."
        ],
        abbrevES: "SV (frecuente). “Foley” puede aparecer si se especifica el tipo.",
        abbrevRO: "SV (frecvent). „Foley” poate apărea dacă se specifică tipul.",
        confuseES: [
          "Colector urinario externo (no es sonda uretral).",
          "Sonda suprapúbica (entrada por abdomen).",
          "Sondaje intermitente (técnica/uso distinto, aunque emplee sonda)."
        ],
        confuseRO: [
          "Colector urinar extern (nu este sondă uretrală).",
          "Sondă suprapubiană (intrare prin abdomen).",
          "Sondaj intermitent (tehnică/utilizare diferită, chiar dacă folosește sondă)."
        ]
      },
      medicine: {
        definitionES: "Cateterismo uretral para drenaje vesical.",
        definitionRO: "Cateterism uretral pentru drenaj vezical.",
        indicationsES: ["Retención urinaria.", "Control diuresis."],
        indicationsRO: ["Retenție urinară.", "Control diureză."]
      },
      health: {
        definitionES: "Tubo para sacar la orina.",
        definitionRO: "Tub pentru a scoate urina."
      }
    }
  },
  {
    id: "v14_transfusion",
    termES: "Transfusión",
    termRO: "Transfuzie",
    profiles: {
      nursing: {
        etymologyES: "Trans (a través de/pasar) + fusio (verter). Pasar un líquido de un recipiente a otro.",
        etymologyRO: "Trans (prin/a trece) + fusio (a vărsa). A trece un lichid dintr-un recipient în altul.",
        definitionES: "Administración intravenosa de sangre completa o sus componentes (hematíes, plaquetas, plasma).\nEs un procedimiento de ALTO RIESGO. Enfermería debe realizar el 'pie de cama' (doble chequeo identidad-grupo) obligatoriamente y vigilar los primeros 15 minutos (reacciones graves).",
        definitionRO: "Administrarea intravenoasă de sânge integral sau a componentelor sale (eritrocite, plachete, plasmă).\nEste o procedură de RISC ÎNALT. Asistentul trebuie să efectueze 'la pat' (dublu control identitate-grup) obligatoriu și să supravegheze primele 15 minute (reacții grave).",
        errorsES: [
          "NO realizar el doble chequeo (causa de muerte por incompatibilidad ABO).",
          "Administrar medicación por la misma vía que la sangre (incompatible).",
          "Calentar la sangre en microondas o radiador (hemólisis letal)."
        ],
        errorsRO: [
          "A NU efectua dublul control (cauză de deces prin incompatibilitate ABO).",
          "A administra medicamente pe aceeași linie cu sângele (incompatibil).",
          "A încălzi sângele la microunde sau calorifer (hemoliză letală)."
        ],
        abbrevES: "Tx o Transf.",
        abbrevRO: "Tx sau Transf.",
        confuseES: [
          "Autotransfusión (sangre propia).",
          "Infusión (término general para sueros/fármacos).",
          "Exanguinotransfusión (cambio total de sangre, neonatal)."
        ],
        confuseRO: [
          "Autotransfuzie (sânge propriu).",
          "Infuzie (termen general pentru seruri/medicamente).",
          "Exsanguinotransfuzie (schimb total de sânge, neonatal)."
        ]
      },
      medicine: {
        definitionES: "Hemoterapia sustitutiva.",
        definitionRO: "Hemoterapie substitutivă."
      },
      health: {
        definitionES: "Recibir sangre de un donante.",
        definitionRO: "A primi sânge de la un donator."
      }
    }
  },
  {
    id: "p_endoscopia",
    termES: "Endoscopia",
    termRO: "Endoscopie",
    profiles: {
      nursing: {
        etymologyES: "Endo (dentro) + scopia (mirar). Mirar dentro.",
        etymologyRO: "Endo (înăuntru) + scopia (a privi). A privi înăuntru.",
        definitionES: "Prueba diagnóstica visual que introduce una cámara (endoscopio) por un orificio natural (boca, ano). Incluye Gastroscopia (estómago) y Colonoscopia (colon).\nEnfermería asiste en la sedación, prepara el material y maneja las muestras (biopsias).",
        definitionRO: "Test diagnostic vizual care introduce o cameră prin orificiu natural. Include Gastroscopie și Colonoscopie.\nAsistența ajută la sedare, prepară materialul și gestionează probele.",
        watchES: ["Control de constantes durante sedación.", "Signos de perforación post-prueba (dolor agudo, abdomen en tabla)."],
        watchRO: ["Control funcții vitale în sedare.", "Semne de perforație post-test."],
        errorsES: ["No verificar ayuno (riesgo broncoaspiración).", "Perder o etiquetar mal la biopsia."],
        errorsRO: ["A nu verifica postul alimentar.", "A pierde biopsia."],
        abbrevES: "Endoscopia / Gastro / Colono.",
        abbrevRO: "Endoscopie.",
        confuseES: ["Laparoscopia (cirugía por agujeritos, no por orificio natural)."],
        confuseRO: ["Laparoscopie."]
      },
      medicine: {
        definitionES: "Visualización directa de cavidades.",
        definitionRO: "Vizualizare directă a cavităților."
      },
      health: {
        definitionES: "Meter un tubo con cámara para ver el estómago o intestino.",
        definitionRO: "A introduce un tub cu cameră pentru a vedea stomacul sau intestinul."
      }
    }
  },
  {
    id: "p_biopsia",
    termES: "Biopsia",
    termRO: "Biopsie",
    profiles: {
      nursing: {
        etymologyES: "Bio (vida) + opsia (visión). Ver la vida (tejido vivo).",
        etymologyRO: "Bio (viață) + opsia (vedere). A vedea viața.",
        definitionES: "Extracción de una muestra de tejido para analizarla al microscopio (Anatomía Patológica).\nEnfermería debe asegurar su conservación (formol habitualmente) y su correcta identificación.",
        definitionRO: "Extragerea unei probe de țesut pentru analiză microscopică.\nAsistența asigură conservarea (formol) și identificarea.",
        watchES: ["Cantidad suficiente de formol (cubrir totalmente la muestra).", "Etiquetado INMEDIATO."],
        watchRO: ["Cantitate suficientă de formol.", "Etichetare IMEDIATĂ."],
        errorsES: ["Tirar la muestra a la basura pensando que es un residuo.", "Poner suero en vez de formol (se degrada)."],
        errorsRO: ["A arunca proba la gunoi.", "A pune ser în loc de formol."],
        abbrevES: "Bx.",
        abbrevRO: "Bx.",
        confuseES: ["Citología (células sueltas, no tejido).", "Cultivo (para ver bacterias, no células cancerígenas)."],
        confuseRO: ["Citologie.", "Cultură."]
      },
      medicine: {
        definitionES: "Toma de tejido para diagnóstico histopatológico.",
        definitionRO: "Prelevare de țesut pentru diagnostic histopatologic."
      },
      health: {
        definitionES: "Coger un trozo de carne para analizar si es bueno o malo.",
        definitionRO: "A lua o bucată de carne pentru a analiza dacă e bună sau rea."
      }
    }
  },
  {
    id: "p_intubacion",
    termES: "Intubación endotraqueal",
    termRO: "Intubație endotraheală",
    profiles: {
      nursing: {
        etymologyES: "Introducir un tubo dentro (in-tubare).",
        etymologyRO: "A introduce un tub.",
        definitionES: "Colocación de un tubo en la tráquea para asegurar la vía aérea y permitir ventilación mecánica.\nEs una técnica crítica. Enfermería prepara el material (laringoscopio, tubo, fiador), administra la medicación de inducción rápida (sedante + relajante) y comprueba la fijación.",
        definitionRO: "Plasarea unui tub în trahee pentru a asigura calea aeriană.\nTehnică critică. Asistența prepară materialul, administrează inducția și verifică fixarea.",
        watchES: ["Tener aspirador funcionando a mano.", "Vigilar constantes (hipoxia, bradicardia) durante la maniobra."],
        watchRO: ["Aspirator funcțional.", "Monitorizare constante (hipoxie)."],
        errorsES: ["No tener el carro de paradas cerca.", "Confundir la medicación (relajante antes que sedante es error grave)."],
        errorsRO: ["A nu avea căruciorul de resuscitare.", "A confunda medicația."],
        abbrevES: "IOT (Intubación Oro-Traqueal).",
        abbrevRO: "IOT.",
        confuseES: ["Traqueostomía (agujero quirúrgico en el cuello, para largo plazo)."],
        confuseRO: ["Traheostomie."]
      },
      medicine: {
        definitionES: "Aislamiento definitivo de la vía aérea.",
        definitionRO: "Izolare definitivă a căii aeriene."
      },
      health: {
        definitionES: "Meter un tubo por la boca para respirar por ti.",
        definitionRO: "A băga un tub pe gură pentru a respira în locul tău."
      }
    }
  },
  {
    id: "p_rcp",
    termES: "Reanimación (RCP)",
    termRO: "Resuscitare (RCP)",
    profiles: {
      nursing: {
        etymologyES: "Reanimación Cardiopulmonar.",
        etymologyRO: "Resuscitare Cardiopulmonară.",
        definitionES: "Conjunto de maniobras para revertir una parada cardiorrespiratoria (PCR). Compresiones torácicas + ventilación.\nEl rol de enfermería es liderar o asistir en Soporte Vital Avanzado (vía, drogas, desfibrilador).",
        definitionRO: "Manevre pentru a inversa un stop cardiorespirator. Compresii + ventilație.\nRol asistent: Suport Vital Avansat (linie, droguri, defibrilator).",
        watchES: ["Calidad de compresiones (fuerte y rápido).", "Minimizar interrupciones.", "Seguridad del entorno."],
        watchRO: ["Calitatea compresiilor.", "Minimizarea întreruperilor.", "Siguranța mediului."],
        errorsES: ["Parar las compresiones demasiado tiempo para buscar una vía.", "No poner el tablero de RCP bajo el paciente (colchón blando absorbe fuerza)."],
        errorsRO: ["A opri compresiile prea mult timp.", "A nu pune placa de RCP sub pacient."],
        abbrevES: "RCP / PCR (Parada).",
        abbrevRO: "RCP / Stop.",
        confuseES: ["Soporte ventilatorio (solo aire).", "Desfibrilación (solo el chispazo, es parte de la RCP)."],
        confuseRO: ["Suport ventilator.", "Defibrilare."]
      },
      medicine: {
        definitionES: "Soporte vital básico y avanzado.",
        definitionRO: "Suport vital bazic și avansat."
      },
      health: {
        definitionES: "Masaje cardíaco para arrancar el corazón.",
        definitionRO: "Masaj cardiac pentru a porni inima."
      }
    }
  },
  {
    id: "p_higiene",
    termES: "Higiene / Aseo",
    termRO: "Igienă / Toaletă",
    profiles: {
      nursing: {
        etymologyES: "De Higía, diosa de la salud. Limpieza para prevenir enfermedades.",
        etymologyRO: "De la Hygieia. Curățenie pentru prevenire.",
        definitionES: "Limpieza corporal del paciente encamado o dependiente. No es solo estético, es TERAPÉUTICO (estimula circulación, previene úlceras por presión).\nSe realiza por enfermería y TCAE.",
        definitionRO: "Curățarea corporală a pacientului la pat. Este TERAPEUTICĂ (circulație, prevenire escare).",
        watchES: ["Secar bien pliegues (riesgo hongos).", "Aprovechar para valorar la piel (UPP).", "Mantener privacidad."],
        watchRO: ["Uscarea pliurilor.", "Evaluarea pielii.", "Intimitate."],
        errorsES: ["Dejar al paciente húmedo y frío.", "Friccionar demasiado fuerte (piel frágil ancianos)."],
        errorsRO: ["A lăsa pacientul umed.", "A freca prea tare."],
        abbrevES: "Aseo.",
        abbrevRO: "Toaletă.",
        confuseES: ["Desinfección (superficies).", "Esterilización (material)."],
        confuseRO: ["Dezinfectare.", "Sterilizare."]
      },
      medicine: {
        definitionES: "Mantenimiento de la integridad cutánea y limpieza.",
        definitionRO: "Menținerea integrității cutanate și curățenie."
      },
      health: {
        definitionES: "Lavado del paciente en la cama.",
        definitionRO: "Spălarea pacientului în pat."
      }
    }
  },
  {
    id: "p_sutura",
    termES: "Sutura (Puntos)",
    termRO: "Sutură (Fire)",
    profiles: {
      nursing: {
        etymologyES: "Del latín 'sutura' (costura). Única de bordes.",
        etymologyRO: "Din latină 'sutura' (cusătură).",
        definitionES: "Técnica para aproximar los bordes de una herida y favorecer la cicatrización por primera intención, usando hilo y aguja, grapas o adhesivos.\nEnfermería sutura heridas simples y retira puntos.",
        definitionRO: "Tehnică pentru apropierea marginilor unei răni. Asistența suturează răni simple și scoate fire.",
        watchES: ["Tensión adecuada (ni muy flojo ni muy apretado que isquemice).", "Signos de infección (eritema, pus)."],
        watchRO: ["Tensiune adecvată.", "Semne de infecție."],
        errorsES: ["Dejar espacios muertos donde se acumula sangre.", "Retirar puntos demasiado pronto (dehiscencia) o tarde (marca)."],
        errorsRO: ["A lăsa spații moarte.", "A scoate firele prea devreme sau târziu."],
        abbrevES: "Sutura.",
        abbrevRO: "Sutură.",
        confuseES: ["Ligadura (atar un vaso sangrante).", "Cura (limpieza superficial)."],
        confuseRO: ["Ligatură.", "Pansament."]
      },
      medicine: {
        definitionES: "Cierre quirúrgico de heridas.",
        definitionRO: "Închidere chirurgicală a plăgilor."
      },
      health: {
        definitionES: "Coser una herida abierta.",
        definitionRO: "A coase o rană deschisă."
      }
    }
  },
  {
    id: "p_vendaje",
    termES: "Vendaje",
    termRO: "Bandaj",
    profiles: {
      nursing: {
        etymologyES: "De venda (tira de tela).",
        etymologyRO: "Din bandă.",
        definitionES: "Aplicación de una venda para cubrir lesiones, inmovilizar articulaciones (esguinces) o realizar compresión (retorno venoso).\nTipos: compresivo, funcional (taping), protectivo.",
        definitionRO: "Aplicarea unei benzi pentru acoperire, imobilizare sau compresie.\nTipuri: compresiv, funcțional, protectiv.",
        watchES: ["Síndrome compartimental (demasiado apretado, dolor, dedos fríos/azules).", "Arrugas (causan heridas)."],
        watchRO: ["Sindrom de compartiment.", "Cute (provoacă răni)."],
        errorsES: ["Empezar el vendaje por la zona proximal en vez de distal (dificulta retorno venoso)."],
        errorsRO: ["A începe bandajul proximal în loc de distal."],
        abbrevES: "Vendaje.",
        abbrevRO: "Bandaj.",
        confuseES: ["Férula (rígida, yeso).", "Apósito (pegatina, más simple)."],
        confuseRO: ["Atelă.", "Pansament adeziv."]
      },
      medicine: {
        definitionES: "Medida terapéutica de contención o compresión.",
        definitionRO: "Măsură terapeutică de contenție sau compresie."
      },
      health: {
        definitionES: "Venda para sujetar o apretar.",
        definitionRO: "Bandă pentru a ține sau strânge."
      }
    }
  },
  {
    id: "p_movilizacion",
    termES: "Movilización / Cambio Postural",
    termRO: "Mobilizare / Schimbare posturală",
    profiles: {
      nursing: {
        etymologyES: "Mover (poner en movimiento). Evitar la estasis.",
        etymologyRO: "A pune în mișcare.",
        definitionES: "Cambios de posición programados (cada 2-3h) en pacientes encamados para evitar Úlceras por Presión (UPP). También incluye levantar al sillón.\nEs la medida PREVENTIVA más eficaz.",
        definitionRO: "Schimbări de poziție programate la pacienții la pat pentru a evita escarele. Include ridicarea în fotoliu.",
        watchES: ["Mecánica corporal (proteger la espalda del enfermero/a).", "No arrastrar al paciente (fricción), sino levantar."],
        watchRO: ["Mecanica corporală.", "Nu târâți pacientul, ridicați-l."],
        errorsES: ["Hacerlo solo con pacientes pesados.", "Olvidar reposicionar almohadas."],
        errorsRO: ["A face singur cu pacienți grei.", "A uita pernele."],
        abbrevES: "CP (Cambios Posturales).",
        abbrevRO: "Mobilizare.",
        confuseES: ["Fisioterapia (rehabilitación activa).", "Sujeción (lo contrario, atar)."],
        confuseRO: ["Fizioterapie.", "Contenție."]
      },
      medicine: {
        definitionES: "Prevención de complicaciones por inmovilidad.",
        definitionRO: "Prevenirea complicațiilor imobilității."
      },
      health: {
        definitionES: "Moverte para que no te salgan llagas.",
        definitionRO: "A te mișca să nu faci răni."
      }
    }
  }
];
