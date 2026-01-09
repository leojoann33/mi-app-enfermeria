import {
  Waves,
  Activity,
  AlertOctagon,
  Droplet,
  Stethoscope,
  ArrowRightLeft,
} from "lucide-react";

export const MASTER_7_TOPIC_1 = {
  id: "master-7-1",
  titleES: "Masterclass: Hemodiálisis - Técnica y Cuidados",
  titleRO: "Masterclass: Hemodializă - Tehnică și Îngrijiri",
  isExpert: true,
  learningObjectives: [
    "Cuidado y valoración de Fístula Arteriovenosa (FAVI).",
    "Manejo de la hipotensión intradiálisis.",
    "Síndrome de Desequilibrio post-diálisis.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. La Línea de Vida: Acceso Vascular (FAVI)",
      textRO: "1. Linia Vieții: Acces Vascular (FAVI)",
    },
    {
      type: "p",
      textES: "La Fístula Arteriovenosa Interna es oro. Debe madurar 4-8 semanas. Valoración diaria obligatoria.",
      textRO: "Fistula Arteriovenoasă Internă este aur. Trebuie să se matureze 4-8 săptămâni. Evaluare zilnică obligatorie.",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "Thrill (Frémito): Vibración palpable. Indica buen flujo.",
          textRO: "Thrill (Freamăt): Vibrație palpabilă. Indică flux bun.",
        },
        {
          icon: Stethoscope,
          textES: "Bruit (Sopro): Sonido auscultable continuo y rudo. Si es agudo y corto -> ¿Estenosis?",
          textRO: "Bruit (Suflu): Sunet auscultabil continuu și aspru. Dacă e ascuțit și scurt -> Stenoză?",
        },
        {
          icon: AlertOctagon,
          textES: "PROHIBICIONES: NUNCA tomar tensión arterial, canalizar vías ni extracciones en el brazo de la FAVI.",
          textRO: "INTERDICȚII: NICIODATĂ nu măsurați tensiunea, nu montați branule, nu recoltati sânge din brațul cu FAVI.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Complicaciones Intradiálisis",
      textRO: "2. Complicații Intradializă",
    },
    {
      type: "table",
      headersES: ["Problema", "Causa", "Manejo Enfermería"],
      headersRO: ["Problemă", "Cauză", "Management Asistență"],
      rows: [
        {
          colsES: [
            "Hipotensión (La más frecuente)",
            "Ultrafiltración (UF) rápida. Osmolaridad baja.",
            "Posición Trendelenburg. Bolus salino 100-200ml. Bajar Tasa UF. Perfil de Sodio.",
          ],
          colsRO: [
            "Hipotensiune (Cea mai frecventă)",
            "Ultrafiltrare (UF) rapidă. Osmolaritate scăzută.",
            "Poziție Trendelenburg. Bolus salin 100-200ml. Scădere Rata UF. Profil de Sodiu.",
          ],
        },
        {
          colsES: [
            "Calambres",
            "Hipovolemia, Hiponatremia.",
            "Bolus salino o Glucosa hipertónica. Estiramiento muscular.",
          ],
          colsRO: [
            "Crampe",
            "Hipovolemie, Hiponatremie.",
            "Bolus salin sau Glucoză hipertonică. Stretching muscular.",
          ],
        },
        {
          colsES: [
            "Síndrome de Desequilibrio",
            "Edema cerebral por bajada rápida de Urea en sangre (el cerebro retiene urea y atrae agua).",
            "Cefalea, náuseas, confusión. PREVENCIÓN: Iniciar diálisis suave (pocos flujos, poco tiempo) en pacientes nuevos.",
          ],
          colsRO: [
            "Sindrom de Dezechilibru",
            "Edem cerebral prin scădere rapidă a Ureei în sânge (creierul reține uree și atrage apă).",
            "Cefalee, greață, confuzie. PREVENȚIE: Inițiere dializă blândă (fluxuri mici, timp scurt) la pacienți noi.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: ArrowRightLeft,
      titleES: "MECANISMO DIFUSIÓN VS CONVECCIÓN",
      textES: "Difusión: Solutos se mueven por gradiente de concentración (Hemodiálisis estándar). Convección (Arrastre): Solutos arrastrados por agua a presión (Hemodiafiltración, mejor para moléculas medias).",
      titleRO: "MECANISM DIFUZIE VS CONVECȚIE",
      textRO: "Difuzie: Soluții se mișcă prin gradient de concentrație (Hemodializă standard). Convecție (Antrenare): Soluții antrenate de apă sub presiune (Hemodiafiltrare, mai bună pentru molecule medii).",
    },
  ],
};
