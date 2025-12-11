// src/data/course.js
// PLAN DE ESTUDIOS: PETRESCU-ENF2
// Estructura: 3 Partes > Módulos > Temas

export const COURSE_DB = [
  // ===========================================================================
  // PARTE I: FUNDAMENTOS
  // ===========================================================================
  {
    id: 'p1',
    titleES: 'PARTE I: Fundamentos y Seguridad',
    titleRO: 'PARTEA I: Fundamente și Siguranță',
    descES: 'La base de la práctica enfermera diaria.',
    descRO: 'Baza practicii zilnice de asistență medicală.',
    modules: [
      {
        id: 'm1',
        titleES: 'Módulo 1: Constantes vitales y observación',
        titleRO: 'Modulul 1: Semne vitale și observație',
        topics: [
          "1. Toma de temperatura: vías y rangos normales",
          "2. Frecuencia cardiaca: pulso y alteraciones",
          "3. Frecuencia respiratoria: patrones normales/anormales",
          "4. Tensión arterial: técnica y valores",
          "5. Saturación de oxígeno: uso pulsioxímetro",
          "6. Escalas clínicas básicas: Glasgow, EVA, Barthel",
          "7. Reconocimiento rápido de deterioro clínico",
          "8. Exploración física básica inicial",
          "9. Comunicación efectiva con el paciente",
          "10. Registro de constantes (GACELA/Otros)"
        ]
      },
      {
        id: 'm2',
        titleES: 'Módulo 2: Administración de medicamentos',
        titleRO: 'Modulul 2: Administrarea medicamentelor',
        topics: [
          "11. Vías: oral, SC, IM, IV",
          "12. Técnica inyección subcutánea: zonas y errores",
          "13. Técnica inyección intramuscular: seguridad",
          "14. Dilución y reconstitución de fármacos",
          "15. Uso correcto jeringa insulina",
          "16. Normas de los 5 correctos",
          "17. Preparación de perfusiones IV",
          "18. Bombas de infusión: manejo básico",
          "19. Reacciones adversas: signos de alerta",
          "20. Uso y control de antibióticos en planta"
        ]
      },
      {
        id: 'm3',
        titleES: 'Módulo 3: Cuidados generales',
        titleRO: 'Modulul 3: Îngrijiri generale',
        topics: [
          "21. Higiene del paciente encamado",
          "22. Movilización y prevención UPP",
          "23. Valoración del dolor y actuación",
          "24. Alimentación oral y enteral (SNG)",
          "25. Control diuresis y sondaje vesical",
          "26. Control de deposiciones y enemas",
          "27. Medidas de confort y sueño",
          "28. Prevención de caídas",
          "29. Uso de sujeción (física/química)",
          "30. Manejo paciente con oxigenoterapia"
        ]
      },
      {
        id: 'm4',
        titleES: 'Módulo 4: Urgencias y signos alarma',
        titleRO: 'Modulul 4: Urgențe și semne de alarmă',
        topics: [
          "31. Tipos de shock: identificación",
          "32. Paro cardiaco: protocolo RCP básico",
          "33. Hemorragias: control inmediato",
          "34. Fiebre alta persistente: actuación",
          "35. Crisis convulsivas: primeros pasos",
          "36. Disnea súbita: reacción",
          "37. Hipoglucemia e hiperglucemia",
          "38. Dolor torácico: causas posibles",
          "39. Caída en planta: pasos a seguir",
          "40. Manejo paciente agresivo/agitado"
        ]
      },
      {
        id: 'm5',
        titleES: 'Módulo 5: Cuidados técnicos',
        titleRO: 'Modulul 5: Îngrijiri tehnice',
        topics: [
          "41. Canalización de vía periférica",
          "42. Identificación extravasación/flebitis",
          "43. Toma de muestras sangre/orina",
          "44. Análisis de orina: hematuria",
          "45. Administración sueros y electrolitos",
          "46. Tipos de apósitos según herida",
          "47. Drenajes quirúrgicos: cuidados",
          "48. Control y cuidado de ostomías",
          "49. Nutrición parenteral: cuidados",
          "50. Curación heridas quirúrgicas"
        ]
      },
      {
        id: 'm6',
        titleES: 'Módulo 6: Interpretación clínica básica',
        titleRO: 'Modulul 6: Interpretare clinică de bază',
        topics: [
          "51. ECG básico: ritmo sinusal y alteraciones",
          "52. Auscultación pulmonar: sonidos",
          "53. Patrones respiratorios (Cheyne-Stokes...)",
          "54. Inspección y palpación abdominal",
          "55. Reconocimiento edemas y ascitis",
          "56. Linfadenopatías: exploración",
          "57. Exploración piel: ictericia, cianosis",
          "58. Atrofia muscular y caquexia",
          "59. Interpretación analíticas básicas",
          "60. Control glucemias capilares"
        ]
      },
      {
        id: 'm7',
        titleES: 'Módulo 7: Lenguaje y comunicación',
        titleRO: 'Modulul 7: Limbaj și comunicare',
        topics: [
          "61. Términos clínicos básicos en planta",
          "62. Abreviaturas médicas comunes",
          "63. Siglas hospitalarias (IAM, EPOC...)",
          "64. Frases típicas día a día",
          "65. Comunicación con médico (pase guardia)",
          "66. Escribir nota de enfermería",
          "67. Revisión carro de parada",
          "68. Uso sistema informático cuidados",
          "69. Coordinación TCAE/Celadores",
          "70. Interacción con familiares"
        ]
      },
      {
        id: 'm8',
        titleES: 'Módulo 8: Microbiología y control infección',
        titleRO: 'Modulul 8: Microbiologie și control infecții',
        topics: [
          "71. Bacterias comunes y comportamiento",
          "72. Precauciones estándar y aislamiento",
          "73. Infecciones nosocomiales: prevención",
          "74. Bioseguridad y uso EPI",
          "75. Lavado de manos: técnica OMS",
          "76. Manejo residuos sanitarios",
          "77. Desinfección/Esterilización material",
          "78. Tipos cultivos (herida, orina...)",
          "79. Diagnóstico rápido infección",
          "80. Antibióticos más usados"
        ]
      },
      {
        id: 'm9',
        titleES: 'Módulo 9: Organización laboral',
        titleRO: 'Modulul 9: Organizare și muncă',
        topics: [
          "81. Turnos y estructura jornada",
          "82. Recibir relevo y pasar parte",
          "83. Organización planta hospitalaria",
          "84. Prioridades al llegar: checklist",
          "85. Actuación ante paciente nuevo",
          "86. Supervisión altas e informes",
          "87. Solicitud y control material",
          "88. Coordinación farmacia hospitalaria",
          "89. Detección errores medicación",
          "90. Primer día: consejos y errores"
        ]
      }
    ]
  },

  // ===========================================================================
  // PARTE II: ESPECIALIZACIÓN
  // ===========================================================================
  {
    id: 'p2',
    titleES: 'PARTE II: Especialización Técnica',
    titleRO: 'PARTEA II: Specializare Tehnică',
    descES: 'Procedimientos avanzados y cuidados específicos.',
    descRO: 'Proceduri avansate și îngrijiri specifice.',
    modules: [
      {
        id: 'm10',
        titleES: 'Módulo 1: Técnicas avanzadas',
        titleRO: 'Modulul 1: Tehnici avansate',
        topics: [
          "91. Canalización vía central (conceptos)",
          "92. Monitorización hemodinámica (PVC...)",
          "93. Ventilación mecánica: claves enfermería",
          "94. Oxigenoterapia alto flujo y CPAP",
          "95. Aspiración secreciones",
          "96. Cuidados traqueostomía",
          "97. Sedación y analgesia: vigilancia",
          "98. Extracción sangre sistema vacío",
          "99. Uso glucómetro y control hipoglucemias",
          "100. Bombas nutrición enteral/parenteral"
        ]
      },
      {
        id: 'm11',
        titleES: 'Módulo 2: Unidades especializadas',
        titleRO: 'Modulul 2: Unități specializate',
        topics: [
          "101. Cuidados UCI para no intensivistas",
          "102. Enfermería en urgencias",
          "103. Hospitalización domiciliaria",
          "104. Cuidados postoperatorios inmediatos",
          "105. Neurología: ictus, epilepsia",
          "106. Neumología: EPOC, asma",
          "107. Cardiología: insuficiencia, arritmias",
          "108. Nefrología: diálisis, balance",
          "109. Digestivo: hemorragias, cirrosis",
          "110. Hematología y oncología"
        ]
      },
      {
        id: 'm12',
        titleES: 'Módulo 3: Seguridad avanzada',
        titleRO: 'Modulul 3: Siguranță avansată',
        topics: [
          "111. Detección precoz sepsis",
          "112. Prevención trombosis venosa (TVP)",
          "113. Paciente riesgo autolesión/suicidio",
          "114. Protocolo sospecha maltrato",
          "115. Manejo seguro citostáticos",
          "116. Control alergias medicamentosas",
          "117. Planes cuidados NANDA/NIC/NOC",
          "118. Detección delirium agudo",
          "119. Control efectos secundarios agresivos",
          "120. Prevención eventos adversos dispositivos"
        ]
      },
      {
        id: 'm13',
        titleES: 'Módulo 4: Instrumentación y material',
        titleRO: 'Modulul 4: Instrumentar și materiale',
        topics: [
          "121. Tipos sondas/catéteres: mantenimiento",
          "122. Sistemas recogida orina",
          "123. Drenaje torácico: vigilancia",
          "124. Sistema VAC heridas crónicas",
          "125. Sensorización paciente crítico",
          "126. Electrodos y derivaciones ECG",
          "127. Aspiradores y oxígeno portátil",
          "128. Termómetros y tensiómetros digitales",
          "129. Jeringas, agujas y adaptadores",
          "130. Material cirugía menor planta"
        ]
      },
      {
        id: 'm14',
        titleES: 'Módulo 5: Infecciosas y protocolos',
        titleRO: 'Modulul 5: Boli infecțioase și protocoale',
        topics: [
          "131. COVID-19: cuidados actuales",
          "132. Tuberculosis: manejo aislamiento",
          "133. VIH y hepatitis: precauciones",
          "134. Infección catéteres: prevención",
          "135. Infecciones urinarias por sonda",
          "136. Neumonía asociada ventilación",
          "137. Vigilancia brotes en planta",
          "138. Limpieza terminal habitaciones",
          "139. Higiene manos unidades riesgo",
          "140. Uso antibióticos amplio espectro"
        ]
      },
      {
        id: 'm15',
        titleES: 'Módulo 6: Abordaje por sistemas',
        titleRO: 'Modulul 6: Abordare pe sisteme',
        topics: [
          "141. Endocrino: manejo práctico diabetes",
          "142. Reumatología: artritis, lupus",
          "143. Psiquiatría: brotes psicóticos",
          "144. Geriatría: síndromes y fragilidad",
          "145. Pediatría: diferencias con adultos",
          "146. Ginecología: hemorragias, postparto",
          "147. Urología: sondajes especiales",
          "148. Cirugía vascular: postoperatorio",
          "149. Dermatología: lesiones frecuentes",
          "150. Rehabilitación daño neurológico"
        ]
      },
      {
        id: 'm16',
        titleES: 'Módulo 7: Farmacología intermedia',
        titleRO: 'Modulul 7: Farmacologie intermediară',
        topics: [
          "151. Insulina: basal-bolo y corrección",
          "152. Analgésicos/opioides: vigilancia",
          "153. Benzodiacepinas: precauciones",
          "154. Anticoagulantes: HBPM, warfarina",
          "155. Antibióticos segunda línea",
          "156. Medicación tópica y oftálmica",
          "157. Suplementos vitamínicos",
          "158. Antieméticos y antiácidos",
          "159. Medicación perfusión continua",
          "160. Diluciones y compatibilidades"
        ]
      },
      {
        id: 'm17',
        titleES: 'Módulo 8: Comunicación avanzada',
        titleRO: 'Modulul 8: Comunicare avansată',
        topics: [
          "161. Responder quejas paciente/familia",
          "162. Manejo conflictos equipo",
          "163. Comunicación malas noticias",
          "164. Educación al alta: autocuidados",
          "165. Coordinación multidisciplinar",
          "166. Informes continuidad cuidados",
          "167. Transmisión información (SBAR)",
          "168. Triaje urgencias: qué observar",
          "169. Cierre turno: puntos clave",
          "170. Comunicación empática familia"
        ]
      },
      {
        id: 'm18',
        titleES: 'Módulo 9: Habilidades útiles',
        titleRO: 'Modulul 9: Abilități utile',
        topics: [
          "171. Vendajes funcionales/compresivos",
          "172. Bombas PCA (analgesia paciente)",
          "173. Oxígeno neonatos/pediátricos",
          "174. Cuidados quemaduras",
          "175. Picaduras y alergias graves",
          "176. SNG en pacientes inconscientes",
          "177. Paliativos: control síntomas",
          "178. Manejo paciente terminal",
          "179. Duelo y acompañamiento",
          "180. Control hipertermia maligna"
        ]
      },
      {
        id: 'm19',
        titleES: 'Módulo 10: Competencias apoyo',
        titleRO: 'Modulul 10: Competențe suport',
        topics: [
          "181. Buscadores clínicos fiables",
          "182. Lectura crítica guías",
          "183. Elaboración protocolos internos",
          "184. Participación sesiones clínicas",
          "185. Supervisión estudiantes/residentes",
          "186. Trabajo por objetivos",
          "187. Documentación efectos adversos",
          "188. Actuación ante inspección",
          "189. Prevención burnout",
          "190. Actualización continua"
        ]
      }
    ]
  },

  // ===========================================================================
  // PARTE III: SIMULACIÓN Y CASOS
  // ===========================================================================
  {
    id: 'p3',
    titleES: 'PARTE III: Simulación y Casos Prácticos',
    titleRO: 'PARTEA III: Simulare și Cazuri Practice',
    descES: 'Entrenamiento real ante situaciones complejas.',
    descRO: 'Antrenament real pentru situații complexe.',
    modules: [
      {
        id: 'm20',
        titleES: 'Módulo 1: Urgencias frecuentes',
        titleRO: 'Modulul 1: Urgențe frecvente',
        topics: [
          "191. Dolor torácico: ¿IAM o ansiedad?",
          "192. Fiebre postquirúrgica: actuación",
          "193. Hipotensión súbita: sospecha shock",
          "194. Convulsión paciente desconocido",
          "195. Hemorragia digestiva activa",
          "196. Caída paciente anticoagulado",
          "197. Disnea+tos+fiebre: ¿COVID/EPOC?",
          "198. Hipoglucemia nocturna: protocolo",
          "199. Hematuria paciente con sonda",
          "200. Reacción alérgica antibiótico"
        ]
      },
      {
        id: 'm21',
        titleES: 'Módulo 2: Errores comunes',
        titleRO: 'Modulul 2: Erori comune',
        topics: [
          "201. Medicación sin comprobar alergias",
          "202. Dilución incorrecta fármaco",
          "203. Cambio apósito sin lavado manos",
          "204. No documentar incidencia",
          "205. Vía mal asegurada: flebitis",
          "206. Sonda mal colocada: signos",
          "207. Doble administración por error",
          "208. No valorar dolor con escalas",
          "209. Confusión medicación IV vs IM",
          "210. Incompatibilidad de sueros"
        ]
      },
      {
        id: 'm22',
        titleES: 'Módulo 3: Retos comunicación',
        titleRO: 'Modulul 3: Provocări comunicare',
        topics: [
          "211. Informar al médico eficazmente",
          "212. Paciente rechaza tratamiento",
          "213. Familiares exigentes sin conflicto",
          "214. Pregunta: '¿Me estoy muriendo?'",
          "215. Simulación paciente agitado",
          "216. Conversación con médico residente",
          "217. Explicar cambio tratamiento",
          "218. Error de otro profesional",
          "219. Afrontar crítica supervisión",
          "220. Barrera idiomática"
        ]
      },
      {
        id: 'm23',
        titleES: 'Módulo 4: Vocabulario clínico',
        titleRO: 'Modulul 4: Vocabular clinic',
        topics: [
          "221. Vocabulario urgencias: abreviaturas",
          "222. Frases informes enfermería",
          "223. Diálogos frecuentes entre enfermeras",
          "224. Lenguaje no verbal clínico",
          "225. 20 términos dermatológicos",
          "226. Anatomía básica aplicada",
          "227. Abreviaturas recetas/tratamientos",
          "228. Dictado médico: traducción",
          "229. Explicar tto paciente extranjero",
          "230. Repaso: 100 términos frecuentes"
        ]
      },
      {
        id: 'm24',
        titleES: 'Módulo 5: Mini-casos especialidades',
        titleRO: 'Modulul 5: Mini-cazuri specialități',
        topics: [
          "231. Cardiología: arritmia telemetría",
          "232. Neumología: exacerbación EPOC",
          "233. Nefrología: paciente diálisis",
          "234. Digestivo: hemorragia rectal",
          "235. Neurología: afasia súbita",
          "236. Psiquiatría: intento autolítico",
          "237. Reumatología: brote articular",
          "238. Urología: retención urinaria",
          "239. Geriatría: delirium nocturno",
          "240. Oncología: neutropenia febril"
        ]
      },
      {
        id: 'm25',
        titleES: 'Módulo 6: Simulaciones prácticas',
        titleRO: 'Modulul 6: Simulări practice',
        topics: [
          "241. Test visual apósitos",
          "242. Caso clínico ECG básico",
          "243. Simulación fármacos IV",
          "244. Cálculo dosis peso/superficie",
          "245. Mapa mental tipos shock",
          "246. Diferenciar disnea vs ansiedad",
          "247. Revisión constantes alteradas",
          "248. Interpretación balance hídrico",
          "249. Test múltiple urgencias",
          "250. Reto priorización intervenciones"
        ]
      },
      {
        id: 'm26',
        titleES: 'Módulo 7: Evaluación y repaso',
        titleRO: 'Modulul 7: Evaluare și recapitulare',
        topics: [
          "251. 50 preguntas test signos vitales",
          "252. 30 conceptos clave farmacología",
          "253. Vocabulario: matching definiciones",
          "254. Identificación material quirúrgico",
          "255. Crucigrama procedimientos",
          "256. Flujograma fiebre persistente",
          "257. Fichas rápidas protocolos",
          "258. Rol inverso: médico espera enfermería",
          "259. Rol inverso: paciente espera trato",
          "260. 10 escenarios clínicos tiempo real"
        ]
      },
      {
        id: 'm27',
        titleES: 'Módulo 8: Documentación y registro',
        titleRO: 'Modulul 8: Documentare și înregistrare',
        topics: [
          "261. Escribir nota completa enfermería",
          "262. Registro constantes alteradas",
          "263. Informe alta enfermería",
          "264. Documentar caída/incidente",
          "265. Registro analgésicos",
          "266. Documentación agresión",
          "267. Hoja control glucemias: errores",
          "268. Resumen diario evolución",
          "269. Parte traspaso turnos",
          "270. Buenas prácticas historia electrónica"
        ]
      }
    ]
  }
];