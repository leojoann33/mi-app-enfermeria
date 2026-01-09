import {
  Wind,
  Stethoscope,
  Ban,
  Pill,
  Bed,
} from "lucide-react";

export const PALLIATIVE_3_TOPIC_1 = {
  id: "part6_palliative3_topic1",
  titleES: "Síntomas Respiratorios: Disnea y Estertores",
  titleRO: "Simptome Respiratorii: Dispnee și Raluri",
  isExpert: true,
  learningObjectives: [
    "Manejo farmacológico de la disnea (Opioides + Ansiolíticos).",
    "Tratamiento de los estertores pre-mortem (Rattle).",
    "Medidas no farmacológicas (El ventilador).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Disnea: 'Sed de aire'",
      textRO: "1. Dispnee: 'Sete de aer'",
    },
    {
      type: "p",
      textES: "Es una sensación subjetiva. Si el paciente dice que se ahoga, se ahoga. La saturación de O2 NO es el criterio para tratar, lo es el confort.",
      textRO: "Este o senzație subiectivă. Dacă pacientul spune că se sufocă, se sufocă. Saturația de O2 NU este criteriul de tratament, ci confortul.",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Acción Palliatiatva", "Dosis Habitual"],
      headersRO: ["Medicament", "Acțiune Paliativă", "Doză Uzuală"],
      rows: [
        {
          colsES: [
            "Morfina",
            "Disminuye la FR y la angustia respiratoria. Vasodilatador pulmonar.",
            "5-10 mg Oral / 2.5-5 mg SC. (Si ya tomaba opioides, subir dosis 25-50%).",
          ],
          colsRO: [
            "Morfină",
            "Scade FR și detresa respiratorie. Vasodilatator pulmonar.",
            "5-10 mg Oral / 2.5-5 mg SC. (Dacă lua deja opioide, creșteți doza 25-50%).",
          ],
        },
        {
          colsES: [
            "Midazolam",
            "Disminuye el componente de ansiedad/pánico ('Air Hunger').",
            "2.5 - 5 mg SC en crisis.",
          ],
          colsRO: [
            "Midazolam",
            "Scade componenta de anxietate/panică ('Air Hunger').",
            "2.5 - 5 mg SC în criză.",
          ],
        },
        {
          colsES: [
            "Oxigenoterapia",
            "Solo si hay hipoxemia demostrada Y mejora el síntoma.",
            "Gafas nasales a 2-3 lpm. Mascarillas suelen agobiar.",
          ],
          colsRO: [
            "Oxigenoterapie",
            "Doar dacă există hipoxemie demonstrată ȘI ameliorează simptomul.",
            "Ochelari nazali la 2-3 lpm. Măștile tind să sufoce.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Wind,
      titleES: "TRUCO EXPERTO: EL VENTILADOR",
      textES: "Un chorro de aire fresco sobre la cara (ventilador de mano o ventana abierta) estimula el trigémino y reduce la sensación de disnea en minutos. Eficacia similar al O2 en no-hipoxémicos.",
      titleRO: "TRUC EXPERT: VENTILATORUL",
      textRO: "Un jet de aer proaspăt pe față (ventilator de mână sau fereastră deschisă) stimulează trigemenul și reduce senzația de dispnee în minute. Eficiență similară cu O2 la non-hipoxuși.",
    },
    {
      type: "h3",
      textES: "2. Estertores de la Muerte (Rattle)",
      textRO: "2. Raluri de Moarte (Rattle)",
    },
    {
      type: "p",
      textES: "Son secreciones acumuladas en hipofaringe por debilidad. No duelen al paciente, pero angustian mucho a la familia ('se está ahogando').",
      textRO: "Sunt secreții acumulate în hipofaringe din cauza slăbiciunii. Nu dor pacientul, dar angosează mult familia ('se îneacă').",
    },
    {
      type: "list",
      items: [
        {
          icon: Ban,
          textES: "PROHIBIDO ASPIRAR: Solo causa tos, vómitos y sufrimiento innecesario. No es eficaz.",
          textRO: "INTERZISĂ ASPIRAREA: Cauzează doar tuse, vărsături și suferință inutilă. Nu este eficientă.",
        },
        {
          icon: Bed,
          textES: "Posición: Decúbito lateral con la cabeza ligeramente flexionada favorece el drenaje pasivo.",
          textRO: "Poziție: Decubit lateral cu capul ușor flexat favorizează drenajul pasiv.",
        },
        {
          icon: Pill,
          textES: "Fármacos Antisecretores: Buscapina (Hioscina Bu-Br) 20mg SC o Escopolamina 0.5mg SC. Empezar AL PRIMER RUIDO, luego es tarde.",
          textRO: "Farmace Antisecretoare: Buscopan (Hioscină Bu-Br) 20mg SC sau Scopolamină 0.5mg SC. Începeți LA PRIMUL ZGOMOT, după e târziu.",
        },
      ],
    },
  ],
};
