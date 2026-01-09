import {
  AlertTriangle,
  Droplet,
  Activity,
  CheckCircle2,
  XCircle,
  Syringe,
} from "lucide-react";

export const MODULE_4_TOPIC_37 = {
  id: "4-37",
  titleES: "37. Hipoglucemia y hiperglucemia: signos y cuidados",
  titleRO: "37. Hipoglicemie și hiperglicemie: semne și îngrijire",
  learningObjectives: [
    "Diferenciar síntomas de hipo e hiperglucemia.",
    "Aplicar la 'Regla del 15' en hipoglucemias.",
    "Conocer el manejo básico de la hiperglucemia simple.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Hipoglucemia (< 70 mg/dl): ¡ACTUACIÓN RÁPIDA!",
      textRO: "1. Hipoglicemie (< 70 mg/dl): ACȚIUNE RAPIDĂ!",
    },
    {
      type: "p",
      textES: "La hipoglucemia es una emergencia médica. Si el paciente está consciente, el tratamiento es oral. Si está inconsciente, es parenteral.",
      textRO: "Hipoglicemia este o urgență medicală. Dacă pacientul este conștient, tratamentul este oral. Dacă este inconștient, este parenteral.",
    },
    {
      type: "table",
      headersES: ["Estado", "Acción Principal", "Detalles"],
      headersRO: ["Stare", "Acțiune Principală", "Detalii"],
      rows: [
        {
          colsES: [
            "Consciente",
            "REGLA DEL 15-15",
            "Dar 15g de hidratos de absorción rápida (1 sobre azúcar, 1 zumo). Esperar 15 min y reevaluar. Si < 70, repetir. Si > 70, dar hidratos lentos (galletas).",
          ],
          colsRO: [
            "Conștient",
            "REGULA 15-15",
            "Dați 15g carbohidrați rapizi (1 plic zahăr, 1 suc). Așteptați 15 min și reevaluați. Dacă < 70, repetați. Dacă > 70, dați carbohidrați lenți (biscuiți).",
          ],
        },
        {
          colsES: [
            "Inconsciente",
            "GLUCAGÓN / GLUCOSA IV",
            "Glucagón 1mg IM/SC (si no hay vía). Glucosmon (Glucosa 33% o 50%) IV si hay vía permeable (CUIDADO: flebitis).",
          ],
          colsRO: [
            "Inconștient",
            "GLUCAGON / GLUCOZĂ IV",
            "Glucagon 1mg IM/SC (fără linie). Glucosmon (Glucoză 33% sau 50%) IV dacă există linie (ATENȚIE: flebită).",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Hiperglucemia (> 250 mg/dl)",
      textRO: "2. Hiperglicemie (> 250 mg/dl)",
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertTriangle,
      titleES: "ALERTA: CETOACIDOSIS",
      textES: "Si Glucemia > 250 mg/dl + Dolor Abdominal + Aliento a Frutas (Cetonas) -> AVISAR AL MÉDICO INMEDIATAMENTE. Requiere Insulina bomba y sueroterapia intensiva.",
      titleRO: "ALERTA: CETOACIDOZĂ",
      textRO: "Dacă Glicemia > 250 mg/dl + Durere Abdominală + Respirație de Fructe (Cetone) -> ANUNȚAȚI MEDICUL IMEDIAT. Necesită pompă Insulină și seroterapie intensivă.",
    },
    {
      type: "list",
      items: [
        {
          icon: Syringe,
          textES: "Corregir con Insulina Rápida subcutánea según pauta (sliding scale).",
          textRO: "Corectați cu Insulină Rapidă subcutanat conform schemei (sliding scale).",
        },
        {
          icon: Droplet,
          textES: "Hidratación: La hiperglucemia deshidrata. Fomentar ingesta hídrica si no está contraindicada.",
          textRO: "Hidratare: Hiperglicemia deshidratează. Încurajați consumul de lichide dacă nu este contraindicat.",
        },
      ],
    },
  ],
};
