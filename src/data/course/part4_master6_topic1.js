import {
  Baby,
  Timer,
  Wind,
  HeartPulse,
  Activity,
  AlertTriangle,
} from "lucide-react";

export const MASTER_6_TOPIC_1 = {
  id: "master-6-1",
  titleES: "Masterclass: Reanimación Neonatal (NRP)",
  titleRO: "Masterclass: Reanimare Neonatală (NRP)",
  isExpert: true,
  learningObjectives: [
    "Dominar el algoritmo del 'Minuto de Oro'.",
    "Corrección de ventilación con MR SOPA.",
    "Dosis y vías de administración de Adrenalina en neonatos.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. El Minuto de Oro: Algoritmo NRP 8ª Ed.",
      textRO: "1. Minutul de Aur: Algoritm NRP Ed. 8",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Timer,
      titleES: "PRIORIDAD ABSOLUTA: PULMÓN",
      textES: "A diferencia del adulto (donde priorizamos compresiones), en el neonato la causa es casi siempre respiratoria. VENTILAR (VPP) es la maniobra más importante.",
      titleRO: "PRIORITATE ABSOLUTĂ: PLĂMÂN",
      textRO: "Spre deosebire de adult (unde prioritizăm compresiile), la nou-născut cauza este aproape întotdeauna respiratorie. VENTILAȚIA (VPP) este cea mai importantă manevră.",
    },
    {
      type: "list",
      items: [
        {
          icon: Baby,
          textES: "¿Gestación a término? ¿Buen tono? ¿Respira/Llora? -> SÍ: Piel con piel. -> NO: Calentar, Secar, Estimular.",
          textRO: "Gestație la termen? Tonus bun? Respiră/Plânge? -> DA: Piele pe piele. -> NU: Încălzire, Uscare, Stimulare.",
        },
        {
          icon: Activity,
          textES: "Si FC < 100 lpm o Apnea/Boqueo -> VPP (Ventilación Presión Positiva) inmediatamente. Monitorizar SatO2 pre-ductal (mano derecha).",
          textRO: "Dacă FC < 100 bpm sau Apnee/Gasping -> VPP (Ventilație Presiune Pozitivă) imediat. Monitorizare SatO2 pre-ductală (mâna dreaptă).",
        },
        {
          icon: HeartPulse,
          textES: "Si tras 30s de VPP eficaz, FC < 60 lpm -> COMPRESIONES TORÁCICAS (3:1). Intubar.",
          textRO: "Dacă după 30s de VPP eficace, FC < 60 bpm -> COMPRESII TORACICE (3:1). Intubare.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Si el pecho no se mueve: MR SOPA",
      textRO: "2. Dacă pieptul nu se mișcă: MR SOPA",
    },
    {
      type: "table",
      headersES: ["Sigla", "Acción Correctiva"],
      headersRO: ["Siglă", "Acțiune Corectivă"],
      rows: [
        {
          colsES: ["M", "Mask adjustment (Ajustar mascarilla). Sello hermético."],
          colsRO: ["M", "Mask adjustment (Ajustare mască). Etanșeitate."],
        },
        {
          colsES: ["R", "Reposition head (Reposicionar cabeza). Posición de olfateo."],
          colsRO: ["R", "Reposition head (Repoziționare cap). Poziția de adulmecare."],
        },
        {
          colsES: ["S", "Suction (Succión). Boca luego nariz."],
          colsRO: ["S", "Suction (Sucțiune). Gura apoi nasul."],
        },
        {
          colsES: ["O", "Open mouth (Abrir boca)."],
          colsRO: ["O", "Open mouth (Deschidere gură)."],
        },
        {
          colsES: ["P", "Pressure increase (Aumentar presión). Subir PIP en pasos de 5 cmH2O."],
          colsRO: ["P", "Pressure increase (Creștere presiune). Crește PIP în pași de 5 cmH2O."],
        },
        {
          colsES: ["A", "Alternative airway (Vía aérea alternativa). TOT o Máscara Laríngea."],
          colsRO: ["A", "Alternative airway (Cale aeriană alternativă). IOT sau Mască Laringiană."],
        },
      ],
    },
    {
      type: "alert",
      variant: "danger",
      icon: AlertTriangle,
      titleES: "DOSIS DE ADRENALINA (EPINEFRINA)",
      textES: "Solo si FC < 60 tras VPP + Compresiones. Dosis IV/IO: 0.02 mg/kg (0.2 ml/kg de dilución 1:10.000). ¡Cuidado con la coma decimal!",
      titleRO: "DOZA DE ADRENALINĂ (EPINEFRINĂ)",
      textRO: "Doar dacă FC < 60 după VPP + Compresii. Doză IV/IO: 0.02 mg/kg (0.2 ml/kg din diluția 1:10.000). Atenție la virgula zecimală!",
    },
  ],
};
