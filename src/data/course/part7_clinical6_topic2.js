import {
  AlertOctagon,
  Activity,
  Search,
  ArrowRightLeft,
} from "lucide-react";

export const CLINICAL_6_TOPIC_2 = {
  id: "part7_clinical6_topic2",
  titleES: "Patología Intestinal: EII e Íleo",
  titleRO: "Patologie Intestinală: BII și Ileus",
  isExpert: false,
  learningObjectives: [
    "Diferenciar Enfermedad de Crohn (Transmural, Boca a Ano) de Colitis Ulcerosa (Mucosa, Recto).",
    "Identificar signos de Íleo mecánico vs paralítico.",
    "Conocer el cribado de Cáncer Colorrectal.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Enfermedad Inflamatoria Intestinal (EII)",
      textRO: "1. Boală Inflamatorie Intestinală (BII)",
    },
    {
      type: "table",
      headersES: ["Característica", "Colitis Ulcerosa (CU)", "Enfermedad de Crohn (EC)"],
      headersRO: ["Caracteristică", "Colită Ulcerativă (CU)", "Boala Crohn (BC)"],
      rows: [
        {
          colsES: ["Afectación", "Solo Mucosa. Continua. Siempre Recto.", "Transmural (Fístulas). Parcheada. Boca a Ano."],
          colsRO: ["Afectare", "Doar Mucoasă. Continuă. Mereu Rect.", "Transmurală (Fistule). Împestrițată. Gură la Anus."],
        },
        {
          colsES: ["Tabaco", "Protector (Ex-fumadores empeoran).", "Nocivo (Factor de riesgo)."],
          colsRO: ["Tutun", "Protector (Ex-fumătorii se înrăutățesc).", "Nociv (Factor de risc)."],
        },
        {
          colsES: ["Clínica", "Diarrea sanguinolenta (Rectorragia).", "Dolor abdominal, masa, fístulas perianales."],
          colsRO: ["Clinică", "Diaree sanguinolentă (Rectoragie).", "Durere abdominală, masă, fistule perianale."],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Obstrucción Intestinal (Íleo)",
      textRO: "2. Obstrucție Intestinală (Ileus)",
    },
    {
      type: "list",
      items: [
        {
          icon: ArrowRightLeft,
          textES: "Mecánico: Obstrucción física (Bridas, Hernias, Tumor). Peristalsis de lucha (Ruidos aumentados al inicio). Dolor cólico.",
          textRO: "Mecanic: Obstrucție fizică (Bride, Hernii, Tumoră). Peristaltism de luptă (Zgomote crescute la început). Durere colicativă.",
        },
        {
          icon: Activity,
          textES: "Paralítico (Adinámico): Cese peristalsis (Postquirúrgico, Fármacos). Silencio abdominal. No dolor cólico.",
          textRO: "Paralitic (Adinamic): Încetare peristaltism (Postchirurgical, Medicamente). Liniște abdominală. Fără durere colicativă.",
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Search,
      titleES: "CRIBADO CÁNCER COLORECTAL",
      textES: "A partir de los 50 años. Test de Sangre Oculta en Heces (SOH) -> Si positivo: Colonoscopia.",
      titleRO: "SCREENING CANCER COLORECTAL",
      textRO: "De la 50 de ani. Test de Sânge Ocult în Scaun (SOH) -> Dacă pozitiv: Colonoscopie.",
    },
  ],
};
