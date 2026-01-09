import {
  Activity,
  HeartPulse,
  TrendingDown,
  AlertOctagon,
  Zap,
  ArrowRight,
} from "lucide-react";

export const MASTER_4_TOPIC_1 = {
  id: "master-4-1",
  titleES: "Masterclass: ECG Avanzado - Arritmias y Bloqueos",
  titleRO: "Masterclass: ECG Avansat - Aritmii și Blocuri",
  isExpert: true,
  learningObjectives: [
    "Diagnosticar Bloqueos AV de 2º y 3º grado.",
    "Diferenciar Bloqueos de Rama (BCRI vs BCRD).",
    "Criterios de inestabilidad hemodinámica en arritmias.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Bloqueos AV: El 'Matrimonio' P - QRS",
      textRO: "1. Blocuri AV: 'Căsătoria' P - QRS",
    },
    {
      type: "alert",
      variant: "expert",
      icon: HeartPulse,
      titleES: "REGLA DE ORO",
      textES: "Si la R está lejos de la P, es un primer grado. Si la P se aleja, se aleja y se va, es Wenckebach (Mobitz I). Si algunas P no tienen QRS (sin avisar), es Mobitz II. Si P y QRS van a su aire, es Tercer Grado.",
      titleRO: "REGULA DE AUR",
      textRO: "Dacă R e departe de P, e gradul I. Dacă P se distanțează, se distanțează și pleacă, e Wenckebach (Mobitz I). Dacă unele P nu au QRS (fără aviz), e Mobitz II. Dacă P și QRS merg fiecare pe drumul lui, e Gradul III.",
    },
    {
      type: "table",
      headersES: ["Tipo", "Características ECG", "Peligrosidad", "Tratamiento"],
      headersRO: ["Tip", "Caracteristici ECG", "Periculozitate", "Tratament"],
      rows: [
        {
          colsES: [
            "1er Grado",
            "PR > 0.20s constante. Toda P conduce.",
            "Baja. Benigno.",
            "Observación. Revisar fármacos (Betabloqueantes).",
          ],
          colsRO: [
            "Gradul 1",
            "PR > 0.20s constant. Toate P conduc.",
            "Scăzută. Benign.",
            "Observație. Revizuire medicamente (Betablocante).",
          ],
        },
        {
          colsES: [
            "2º Grado Mobitz I (Wenckebach)",
            "PR se alarga progresivamente hasta que una P no conduce.",
            "Media. A veces fisiológico (atletas, sueño).",
            "Atropina si sintomático.",
          ],
          colsRO: [
            "Gradul 2 Mobitz I (Wenckebach)",
            "PR se lungește progresiv până când o P nu conduce.",
            "Medie. Uneori fiziologic (atleți, somn).",
            "Atropină dacă simptomatic.",
          ],
        },
        {
          colsES: [
            "2º Grado Mobitz II",
            "PR constante. Súbitamente una P no conduce (bloqueo infra-hisiano).",
            "ALTA. Puede progresar a bloqueo completo súbito.",
            "MARCAPASOS (MCP) Definitivo. Atropina NO suele funcionar.",
          ],
          colsRO: [
            "Gradul 2 Mobitz II",
            "PR constant. Subit o P nu conduce (bloc infra-hisian).",
            "ÎNALTĂ. Poate progresa la bloc complet subit.",
            "STIMULATOR (MCP) Definitiv. Atropina NU funcționează de obicei.",
          ],
        },
        {
          colsES: [
            "3er Grado (Completo)",
            "Disociación AV. Ondas P rítmicas y QRS rítmicos pero independientes.",
            "CRÍTICA. Gasto cardíaco dependiente de ritmo de escape.",
            "MARCAPASOS TRANSVENOSO URGENTE -> Definitivo.",
          ],
          colsRO: [
            "Gradul 3 (Complet)",
            "Disociație AV. Unde P ritmice și QRS ritmice dar independente.",
            "CRITICĂ. Debit cardiac dependent de ritmul de scăpare.",
            "STIMULATOR TRANSVENOS URGENT -> Definitiv.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Bloqueos de Rama: 'Las Orejas de Conejo'",
      textRO: "2. Blocuri de Ramură: 'Urechile de Iepure'",
    },
    {
      type: "list",
      items: [
        {
          icon: Activity,
          textES: "BCRD (Derecha): Patrón rSR' en V1 ('M' shape). QRS ancho (>0.12s). S ancha en V6. 'MaRRoW'.",
          textRO: "BCRD (Dreapta): Tipar rSR' în V1 (formă 'M'). QRS larg (>0.12s). S largă în V6. 'MaRRoW'.",
        },
        {
          icon: Zap,
          textES: "BCRI (Izquierda): Patrón rS o QS en V1. R ancha y mellada en V6 ('M' shape). 'WiLLiaM'. ¡OJO! BCRI nuevo + Dolor Torácico = Tratar como INFARTO.",
          textRO: "BCRI (Stânga): Tipar rS sau QS în V1. R largă și crestată în V6 (formă 'M'). 'WiLLiaM'. ATENȚIE! BCRI nou + Durere Toracică = Tratează ca INFARCT.",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertOctagon,
      titleES: "CRITERIOS DE INESTABILIDAD",
      textES: "Cualquier arritmia + (Hipotensión, Shock, Dolor Torácico Isquémico o Insuficiencia Cardíaca Aguda) = CARDIOVERSIÓN ELÉCTRICA (Si Taqui) o MARCAPASOS (Si Bradi). ¡Medicación después!",
      titleRO: "CRITERII DE INSTABILITATE",
      textRO: "Orice aritmie + (Hipotensiune, Șoc, Durere Toracică Ischemică sau Insuficiență Cardiacă Acută) = CARDIOVERSIE ELECTRICĂ (Dacă Tahi) sau STIMULATOR (Dacă Bradi). Medicația după!",
    },
  ],
};
