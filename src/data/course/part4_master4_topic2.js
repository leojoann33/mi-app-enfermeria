import {
  Heart,
  Map,
  Activity,
  AlertTriangle,
  Siren,
  Search,
} from "lucide-react";

export const MASTER_4_TOPIC_2 = {
  id: "master-4-2",
  titleES: "Masterclass: Síndrome Coronario Agudo (SICA)",
  titleRO: "Masterclass: Sindrom Coronarian Acut (SCA)",
  isExpert: true,
  learningObjectives: [
    "Localizar el infarto según las derivaciones afectadas.",
    "Identificar la arteria culpable.",
    "Manejo del Infarto de Ventrículo Derecho (¡No Nitratos!).",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Localización Topográfica: ¿Dónde está el problema?",
      textRO: "1. Localizare Topografică: Unde este problema?",
    },
    {
      type: "alert",
      variant: "expert",
      icon: Map,
      titleES: "LA REGLA S.A.L.I.",
      textES: "Septal (V1, V2), Anterior (V3, V4), Lateral (V5, V6, I, aVL), Inferior (II, III, aVF). Mnemotecnia para recordar caras contiguas.",
      titleRO: "REGULA S.A.L.I.",
      textRO: "Septal (V1, V2), Anterior (V3, V4), Lateral (V5, V6, I, aVL), Inferior (II, III, aVF). Mnemotehnică pentru fețele contigue.",
    },
    {
      type: "table",
      headersES: ["Derivaciones con ST Elevado", "Cara del Corazón", "Arteria Culpable", "Riesgo Específico"],
      headersRO: ["Derivații cu ST Elevat", "Fața Inimii", "Artera Vinovată", "Risc Specific"],
      rows: [
        {
          colsES: [
            "V1 - V4",
            "Anterior / Septal",
            "Descendente Anterior (DA)",
            "Shock Cardiogénico, Bloqueo de Rama, Rotura pared libre. 'The Widow Maker'.",
          ],
          colsRO: [
            "V1 - V4",
            "Anterior / Septal",
            "Descendentă Anterioară (DA)",
            "Șoc Cardiogen, Bloc de Ramură, Ruptură perete liber. 'The Widow Maker'.",
          ],
        },
        {
          colsES: [
            "II, III, aVF",
            "Inferior",
            "Coronaria Derecha (CD) 80% o Circunfleja (CX).",
            "Bloqueos AV (Bradicardia), Infarto VD, Reflejo vagal.",
          ],
          colsRO: [
            "II, III, aVF",
            "Inferior",
            "Coronară Dreaptă (CD) 80% sau Circumflexă (CX).",
            "Blocuri AV (Bradicardie), Infarct VD, Reflex vagal.",
          ],
        },
        {
          colsES: [
            "I, aVL, V5, V6",
            "Lateral",
            "Circunfleja (CX) o Diagonal.",
            "Disfunción ventricular.",
          ],
          colsRO: [
            "I, aVL, V5, V6",
            "Lateral",
            "Circumflexă (CX) sau Diagonală.",
            "Disfuncție ventriculară.",
          ],
        },
        {
          colsES: [
            "V1 - V3 (¡Depresión ST!)",
            "Posterior (Imagen en espejo)",
            "Coronaria Derecha o Circunfleja.",
            "Pasado por alto frecuentemente. Pedir V7, V8, V9.",
          ],
          colsRO: [
            "V1 - V3 (¡Depresie ST!)",
            "Posterior (Imagine în oglindă)",
            "Coronară Dreaptă sau Circumflexă.",
            "Adesea ratat. Cereți V7, V8, V9.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "2. El Peligro Oculto: Infarto de Ventrículo Derecho",
      textRO: "2. Pericolul Ascuns: Infarctul de Ventricul Drept",
    },
    {
      type: "p",
      textES: "Ocurre en 1/3 de los infartos INFERIORES. El VD es dependiente de precarga. Si das Nitroglicerina (venodilatador), quitas la precarga y el paciente entra en shock refractario.",
      textRO: "Apare în 1/3 din infarctele INFERIOARE. VD este dependent de presarcină. Dacă dai Nitroglicerină (venodilatator), elimini presarcina și pacientul intră în șoc refractar.",
    },
    {
      type: "list",
      items: [
        {
          icon: Search,
          textES: "Sospecha: ST elevado en II, III, aVF + Hipotensión + Pulmones Limpios (sin crepitantes) + Ingurgitación yugular.",
          textRO: "Suspiciune: ST elevat în II, III, aVF + Hipotensiune + Plămâni Curați (fără raluri) + Turgescență jugulară.",
        },
        {
          icon: Activity,
          textES: "Confirmación: Realizar V3R y V4R (derivaciones derechas). Si ST elevado > 1mm -> Infarto VD.",
          textRO: "Confirmare: Efectuați V3R și V4R (derivații drepte). Dacă ST elevat > 1mm -> Infarct VD.",
        },
        {
          icon: Siren,
          textES: "ACCIÓN: ¡STOP NITRATOS! Cargar volumen (Fluidos) para mantener precarga. Inotrópicos si no remonta.",
          textRO: "ACȚIUNE: ¡STOP NITRAȚI! Încărcare volemică (Lichide) pentru menținere presarcină. Inotropice dacă nu își revine.",
        },
      ],
    },
  ],
};
