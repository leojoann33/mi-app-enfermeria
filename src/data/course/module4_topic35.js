import {
  AlertTriangle,
  Brain,
  Activity,
  CheckCircle2,
  XCircle,
  Eye,
} from "lucide-react";

export const MODULE_4_TOPIC_35 = {
  id: "4-35",
  titleES: "35. Crisis convulsivas: primeros pasos",
  titleRO: "35. Crize convulsive: primii pași",
  learningObjectives: [
    "Asegurar la seguridad física del paciente durante una crisis.",
    "Conocer las contraindicaciones absolutas durante el episodio.",
    "Administrar correctamente el tratamiento de rescate.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Actuación Inmediata: SEGURIDAD",
      textRO: "1. Acțiune Imediată: SIGURANȚĂ",
    },
    {
      type: "p",
      textES: "La prioridad durante una crisis convulsiva tónico-clónica es evitar lesiones secundarias. No intente detener los movimientos del paciente.",
      textRO: "Prioritatea în timpul unei crize convulsive tonico-clonice este evitarea leziunilor secundare. Nu încercați să opriți mișcările pacientului.",
    },
    {
      type: "list",
      items: [
        {
          icon: CheckCircle2,
          textES: "Proteger la cabeza con algo blando (almohada, ropa).",
          textRO: "Protejați capul cu ceva moale (pernă, haine).",
        },
        {
          icon: CheckCircle2,
          textES: "Aflojar ropa ajustada alrededor del cuello.",
          textRO: "Slăbiți hainele strâmte din jurul gâtului.",
        },
        {
          icon: CheckCircle2,
          textES: "Colocar en Posición Lateral de Seguridad (PLS) en cuanto cese la fase tónica, para evitar aspiración.",
          textRO: "Așezați în Poziția Laterală de Siguranță (PLS) imediat ce faza tonică încetează, pentru a evita aspirarea.",
        },
        {
          icon: Eye,
          textES: "Cronometrar la duración de la crisis. Si > 5 minutos = ESTATUS EPILÉPTICO (Emergencia Vital).",
          textRO: "Cronometrați durata crizei. Dacă > 5 minute = STATUS EPILEPTIC (Urgență Vitală).",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: XCircle,
      titleES: "PROHIBIDO (LO QUE NO HACER)",
      textES: "1. NO introducir NADA en la boca (ni tubos, ni depresores, ni dedos). El riesgo de rotura dental o lesión es mayor que el de morderse la lengua.\n2. NO sujetar al paciente con fuerza.",
      titleRO: "INTERZIS (CE SĂ NU FACI)",
      textRO: "1. NU introduceți NIMIC în gură (nici tuburi, nici depresoare, nici degete). Riscul de rupere a dinților sau rănire este mai mare decât cel de a-și mușca limba.\n2. NU imobilizați pacientul cu forța.",
    },
    {
      type: "h3",
      textES: "2. Tratamiento Farmacológico de Rescate",
      textRO: "2. Tratament Farmacologic de Salvare",
    },
    {
      type: "table",
      headersES: ["Fármaco", "Vía", "Consideraciones"],
      headersRO: ["Medicament", "Cale", "Considerații"],
      rows: [
        {
          colsES: [
            "Diazepam (Stesolid)",
            "Rectal / IV",
            "Misma ampolla IV puede usarse vía rectal (con cánula) si no hay vía. Acción rápida. Riesgo depresión respiratoria.",
          ],
          colsRO: [
            "Diazepam (Stesolid)",
            "Rectal / IV",
            "Aceeași fiolă IV poate fi folosită rectal (cu canulă) dacă nu există linie. Acțiune rapidă. Risc depresie respiratorie.",
          ],
        },
        {
          colsES: [
            "Midazolam",
            "Intranasal / IV",
            "Alternativa común. Vía intranasal útil en niños o difícil acceso venoso.",
          ],
          colsRO: [
            "Midazolam",
            "Intranazal / IV",
            "Alternativă comună. Calea intranazală utilă la copii sau acces venos dificil.",
          ],
        },
      ],
    },
  ],
};
