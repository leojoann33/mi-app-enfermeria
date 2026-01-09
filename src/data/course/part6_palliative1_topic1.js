import {
  Heart,
  Users,
  Brain,
  HandHeart,
  ListRestart,
  CheckCircle2,
} from "lucide-react";

export const PALLIATIVE_1_TOPIC_1 = {
  id: "part6_palliative1_topic1",
  titleES: "Principios de Cuidados Paliativos y Valoración Global",
  titleRO: "Principii de Îngrijiri Paliative și Evaluare Globală",
  isExpert: true,
  learningObjectives: [
    "Definición y principios modernos de los Cuidados Paliativos (Cicely Saunders).",
    "El binomio Paciente-Familia como unidad a tratar.",
    "Concepto de 'Dolor Total' y valoración holística.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Introducción: Cuidar cuando no se puede Curar",
      textRO: "1. Introducere: Îngrijirea când nu se mai poate Vindeca",
    },
    {
      type: "p",
      textES: "Los cuidados paliativos no son 'abandonar' al paciente, sino intensificar el cuidado en otra dirección: el confort y la calidad de vida. Cicely Saunders y Elisabet Kübler-Ross establecieron que el objetivo terapéutico no es solo el enfermo, sino también su familia.",
      textRO: "Îngrijirile paliative nu înseamnă 'a abandona' pacientul, ci intensificarea îngrijirii într-o altă direcție: confortul și calitatea vieții. Cicely Saunders și Elisabet Kübler-Ross au stabilit că obiectivul terapeutic nu este doar bolnavul, ci și familia acestuia.",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Heart,
      titleES: "FILOSOFÍA DONOSTIA",
      textES: "La enfermera es el miembro del equipo más próximo al individuo y su familia. Asumir los cuidados paliativos conlleva una implicación personal y formación específica no solo técnica, sino en ciencias de la conducta, para evitar el desgaste profesional.",
      titleRO: "FILOSOFIA DONOSTIA",
      textRO: "Asistentul medical este membrul echipei cel mai apropiat de individ și familia sa. Asumarea îngrijirilor paliative implică o dedicare personală și formare specifică nu doar tehnică, ci și în științele comportamentale, pentru a evita epuizarea profesională.",
    },
    {
      type: "h3",
      textES: "2. La Unidad de Tratamiento: Paciente y Familia",
      textRO: "2. Unitatea de Tratament: Pacientul și Familia",
    },
    {
      type: "list",
      items: [
        {
          icon: Users,
          textES: "La familia es un pilar fundamental. Sin su participación activa es difícil alcanzar los objetivos de confort.",
          textRO: "Familia este un pilon fundamental. Fără participarea sa activă este dificil de atins obiectivele de confort.",
        },
        {
          icon: Brain,
          textES: "Claudicación Familiar: Cuando la demanda de cuidados supera la capacidad de respuesta de la familia. Requiere intervención inmediata del equipo.",
          textRO: "Epuizarea Familială (Claudication): Când cererea de îngrijire depășește capacitatea de răspuns a familiei. Necesită intervenția imediată a echipei.",
        },
        {
          icon: HandHeart,
          textES: "Duelo Anticipado: El proceso de pérdida comienza antes del fallecimiento. Validar las emociones de la familia es parte del tratamiento.",
          textRO: "Doliu Anticipat: Procesul de pierdere începe înainte de deces. Validarea emoțiilor familiei face parte din tratament.",
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Valoración de Necesidades (Virginia Henderson en Paliativos)",
      textRO: "3. Evaluarea Nevoilor (Virginia Henderson în Paliative)",
    },
    {
      type: "table",
      headersES: ["Necesidad", "Enfoque Paliativo", "Acción de Enfermería"],
      headersRO: ["Nevoie", "Abordare Paliativă", "Acțiune de Asistență"],
      rows: [
        {
          colsES: [
            "Nutrición",
            "Placer vs Nutrición. 'Lo que quiera, cuando quiera'.",
            "No forzar. Pequeñas cantidades. Desdramatizar la anorexia.",
          ],
          colsRO: [
            "Nutriție",
            "Plăcere vs Nutriție. 'Ce vrea, când vrea'.",
            "Nu forțați. Cantități mici. Dedramatizarea anorexiei.",
          ],
        },
        {
          colsES: [
            "Eliminación",
            "Prevenir el estreñimiento por opioides.",
            "Laxantes profilácticos siempre que se paute morfina.",
          ],
          colsRO: [
            "Eliminare",
            "Prevenirea constipației induse de opioide.",
            "Laxative profilactice ori de câte ori se prescrie morfină.",
          ],
        },
        {
          colsES: [
            "Descanso",
            "Insomnio por miedo o dolor no controlado.",
            "Valorar hipnóticos y acompañamiento nocturno.",
          ],
          colsRO: [
            "Odihnă",
            "Insomnie din cauza fricii sau durerii necontrolate.",
            "Evaluarea hipnoticelor și a companiei nocturne.",
          ],
        },
      ],
    },
  ],
};
