import { BookOpen, Activity, ClipboardList, CheckCircle2, BrainCircuit, MessageCircle, FileText } from "lucide-react";

export const part8_manual_m1_t1 = {
  id: "part8_manual_m1_t1",
  titleES: "Proceso de Atención de Enfermería (PAE)",
  titleRO: "Procesul de Îngrijire (PAE)",
  lessons: [
    {
      id: "p8_m1_t1_l1",
      titleES: "Niveles de Actuación",
      titleRO: "Niveluri de Intervenție",
      icon: Activity,
      contentES: [
        {
          type: "paragraph",
          text: "La labor de enfermería se orienta tanto a la atención de la persona enferma como a la promoción de la salud. Se aceptan tres niveles de actuación:"
        },
        {
          type: "list",
          items: [
            "**Nivel Primario:** Mantenimiento y promoción de la salud y prevención de la enfermedad (labor asistencial y pedagógica).",
            "**Nivel Secundario:** Intervenciones curativas para tratar problemas de salud establecidos o potenciales y prevenir complicaciones.",
            "**Nivel Terciario:** Rehabilitación y apoyo en la adaptación a dificultades o secuelas."
          ]
        },
        {
          type: "callout",
          typeCallout: "info",
          text: "Toda actuación profesional debe basarse en el método científico para formular cuidados personalizados."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Munca de asistență medicală este orientată atât către îngrijirea persoanei bolnave, cât și către promovarea sănătății. Sunt acceptate trei niveluri de intervenție:"
        },
        {
          type: "list",
          items: [
            "**Nivel Primar:** Menținerea și promovarea sănătății și prevenirea bolilor (muncă asistențială și pedagogică).",
            "**Nivel Secundar:** Intervenții curative pentru tratarea problemelor de sănătate stabilite sau potențiale și prevenirea complicațiilor.",
            "**Nivel Terțiar:** Reabilitare și sprijin în adaptarea la dificultăți sau sechele."
          ]
        },
        {
          type: "callout",
          typeCallout: "info",
          text: "Orice acțiune profesională trebuie să se bazeze pe metoda științifică pentru a formula îngrijiri personalizate."
        }
      ]
    },
    {
      id: "p8_m1_t1_l2",
      titleES: "Metodología y Bases del Proceso",
      titleRO: "Metodologie și Bazele Procesului",
      icon: BrainCircuit,
      contentES: [
        {
          type: "paragraph",
          text: "El método científico aplicado a la enfermería garantiza:"
        },
        {
          type: "list",
          items: [
            "Mejor aproximación a los problemas de la persona.",
            "Establecimiento de prioridades.",
            "Formulación de estrategias eficaces.",
            "Práctica reflexiva y cuidados de calidad.",
            "Continuidad en el trabajo asistencial."
          ]
        },
        {
          type: "paragraph",
          text: "El Proceso de Atención de Enfermería (PAE) es continuo pero se divide en fases lógicas:"
        },
        {
           type: "list",
           items: [
             "1. **Valoración:** Recogida de datos.",
             "2. **Diagnóstico:** Identificación de problemas.",
             "3. **Planificación:** Determinación de objetivos y estrategias.",
             "4. **Ejecución:** Puesta en práctica del plan.",
             "5. **Evaluación:** Determinación del logro de objetivos."
           ]
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Metoda științifică aplicată asistenței medicale garantează:"
        },
        {
          type: "list",
          items: [
            "O mai bună abordare a problemelor persoanei.",
            "Stabilirea priorităților.",
            "Formularea unor strategii eficiente.",
            "Practică reflexivă și îngrijiri de calitate.",
            "Continuitate în activitatea asistențială."
          ]
        },
        {
          type: "paragraph",
          text: "Procesul de Îngrijire (PAE) este continuu, dar se împarte în faze logice:"
        },
        {
           type: "list",
           items: [
             "1. **Evaluare:** Colectarea datelor.",
             "2. **Diagnostic:** Identificarea problemelor.",
             "3. **Planificare:** Determinarea obiectivelor și strategiilor.",
             "4. **Execuție:** Punerea în aplicare a planului.",
             "5. **Evaluare:** Determinarea atingerii obiectivelor."
           ]
        }
      ]
    },
    {
      id: "p8_m1_t1_l3",
      titleES: "Fase de Valoración",
      titleRO: "Faza de Evaluare",
      icon: ClipboardList,
      contentES: [
        {
          type: "paragraph",
          text: "Es la etapa inicial de recogida de datos (objetivos y subjetivos) mediante la entrevista, observación y exploración física."
        },
        {
          type: "list",
          items: [
            "**Información General:** Datos personales.",
            "**Hábitos:** Estilo de vida, alimentación, sueño.",
            "**Estado Físico:** Constantes vitales, peso, talla, funciones.",
            "**Datos Psicosociales:** Estrés, ansiedad, entorno."
          ]
        },
        {
          type: "callout",
          typeCallout: "warning",
          text: "La entrevista es clave para obtener la información primaria directamente del paciente."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Este etapa inițială de colectare a datelor (obiective și subiective) prin interviu, observație și examinare fizică."
        },
        {
          type: "list",
          items: [
            "**Informații Generale:** Date personale.",
            "**Obiceiuri:** Stil de viață, alimentație, somn.",
            "**Stare Fizică:** Semne vitale, greutate, înălțime, funcții.",
            "**Date Psihosociale:** Stres, anxietate, mediu."
          ]
        },
        {
          type: "callout",
          typeCallout: "warning",
          text: "Interviul este esențial pentru obținerea informațiilor primare direct de la pacient."
        }
      ]
    },
    {
       id: "p8_m1_t1_l4",
       titleES: "Fases de Diagnóstico y Planificación",
       titleRO: "Faze de Diagnostic și Planificare",
       icon: FileText,
       contentES: [
         {
           type: "paragraph",
           text: "**Diagnóstico:** Análisis de datos para identificar problemas de competencia enfermera (manifestaciones de dependencia)."
         },
         {
           type: "paragraph",
           text: "**Planificación:** Establecimiento de prioridades y objetivos (a corto, medio o largo plazo). Se determinan las intervenciones necesarias."
         },
         {
            type: "callout",
            typeCallout: "tip",
            text: "El plan de cuidados debe ser personalizado y permitir la máxima participación del paciente."
         }
       ],
       contentRO: [
         {
           type: "paragraph",
           text: "**Diagnostic:** Analiza datelor pentru identificarea problemelor de competență a asistentului (manifestări de dependență)."
         },
         {
           type: "paragraph",
           text: "**Planificare:** Stabilirea priorităților și obiectivelor (pe termen scurt, mediu sau lung). Se determină intervențiile necesare."
         },
         {
            type: "callout",
            typeCallout: "tip",
            text: "Planul de îngrijire trebuie să fie personalizat și să permită participarea maximă a pacientului."
         }
       ]
    },
    {
      id: "p8_m1_t1_l5",
      titleES: "Ejecución y Evaluación",
      titleRO: "Execuție și Evaluare",
      icon: CheckCircle2,
      contentES: [
        {
           type: "paragraph",
           text: "**Ejecución:** Puesta en práctica del plan. La comunicación (verbal y no verbal) es esencial, así como el registro de todas las intervenciones."
        },
        {
           type: "paragraph",
           text: "**Evaluación:** Etapa continua para determinar si se han alcanzado los objetivos. Permite la retroalimentación y modificación del plan si es necesario."
        }
      ],
      contentRO: [
        {
           type: "paragraph",
           text: "**Execuție:** Punerea în aplicare a planului. Comunicarea (verbală și non-verbală) este esențială, precum și înregistrarea tuturor intervențiilor."
        },
        {
           type: "paragraph",
           text: "**Evaluare:** Etapă continuă pentru a determina dacă obiectivele au fost atinse. Permite feedback-ul și modificarea planului dacă este necesar."
        }
      ]
    }
  ]
};
