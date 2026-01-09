import {
  Hourglass,
  PersonStanding,
  HeartHandshake,
  ThermometerSnowflake,
  UserMinus,
} from "lucide-react";

export const PALLIATIVE_4_TOPIC_1 = {
  id: "part6_palliative4_topic1",
  titleES: "Diagnóstico de Agonía (Situación de Últimos Días)",
  titleRO: "Diagnosticul Agoniei (Situația Ultimelor Zile)",
  isExpert: true,
  learningObjectives: [
    "Identificar los signos físicos de la muerte inminente.",
    "Comunicación del estado de agonía a la familia.",
    "Cuidados de confort en la fase final.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. ¿Cómo saber si se acerca el final?",
      textRO: "1. Cum știm dacă se apropie sfârșitul?",
    },
    {
      type: "p",
      textES: "El diagnóstico de SUD (Situación de Últimos Días) es clínico y crucial para reorientar los objetivos (suspender medicación fútil, avisar familia).",
      textRO: "Diagnosticul SUD (Situația Ultimelor Zile) este clinic și crucial pentru reorientarea obiectivelor (suspendarea medicației inutile, anunțarea familiei).",
    },
    {
      type: "list",
      items: [
        {
          icon: ThermometerSnowflake,
          textES: "Frialdad periférica y cianosis: Nariz afilada y pálida, rodillas y manos frías/moteadas (livideces).",
          textRO: "Răceală periferică și cianoză: Nas ascuțit și palid, genunchi și mâini reci/marmorate (livor).",
        },
        {
          icon: Hourglass,
          textES: "Patrón respiratorio: Respiración de Cheyne-Stokes (pausas de apnea). Respiración mandibular.",
          textRO: "Tipar respirator: Respirație Cheyne-Stokes (pauze de apnee). Respirație mandibulară.",
        },
        {
          icon: UserMinus,
          textES: "Disminución del nivel de conciencia y desconexión del medio. Mirada fija.",
          textRO: "Scăderea nivelului de conștiență și deconectarea de mediu. Privire fixă.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Cuidados de Enfermería en la Agonía",
      textRO: "2. Îngrijiri de Asistență în Agonie",
    },
    {
      type: "table",
      headersES: ["Acción", "Justificación"],
      headersRO: ["Acțiune", "Justificare"],
      rows: [
        {
          colsES: [
            "Retirar fármacos orales",
            "El paciente ya no traga. Mantener solo vía subcutánea imprescindible (analgesia/sedación).",
          ],
          colsRO: [
            "Retragere medicamente orale",
            "Pacientul nu mai înghite. Mențineți doar calea subcutanată esențială (analgezie/sedare).",
          ],
        },
        {
          colsES: [
            "Higiene de confort",
            "Ojos cerrados (o gasa húmeda), boca limpia. Cambios posturales SOLO si no producen dolor o estertores.",
          ],
          colsRO: [
            "Igienă de confort",
            "Ochi închiși (sau tifon umed), gură curată. Schimbări posturale DOAR dacă nu produc durere sau raluri.",
          ],
        },
        {
          colsES: [
            "No constantes vitales",
            "Tomar la TA o SatO2 en agonía es futilidad y molesta. Nos guiamos por la cara del paciente.",
          ],
          colsRO: [
            "Fără constante vitale",
            "Măsurarea TA sau SatO2 în agonie este inutilă și deranjează. Ne ghidăm după fața pacientului.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: HeartHandshake,
      titleES: "LA FAMILIA EN LA AGONÍA",
      textES: "Anima a la familia a hablarle y tocarle ('El oído es lo último que se pierde'). Avísales de los cambios físicos (apneas, ruidos) para que no se asusten. Permite el duelo anticipado.",
      titleRO: "FAMILIA ÎN AGONIE",
      textRO: "Încurajați familia să-i vorbească și să-l atingă ('Auzul este ultimul care se pierde'). Avertizați-i despre schimbările fizice (apnee, zgomote) ca să nu se sperie. Permiteți doliul anticipat.",
    },
  ],
};
