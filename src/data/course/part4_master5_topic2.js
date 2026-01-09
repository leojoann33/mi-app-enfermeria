import {
  Heart,
  Moon,
  Pill,
  Syringe,
  Activity,
  Smile,
} from "lucide-react";

export const MASTER_5_TOPIC_2 = {
  id: "master-5-2",
  titleES: "Masterclass: Paliativos - Dolor y Sedación",
  titleRO: "Masterclass: Îngrijiri Paliative - Durere și Sedare",
  isExpert: true,
  learningObjectives: [
    "Escalera analgésica de la OMS y rotación de opioides.",
    "Uso de la vía subcutánea (infusores).",
    "Protocolo de Sedación Paliativa Terminal.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Manejo Avanzado del Dolor (Más allá del Paracetamol)",
      textRO: "1. Management Avansat al Durerii (Dincolo de Paracetamol)",
    },
    {
      type: "table",
      headersES: ["Escalón", "Fármacos", "Co-analgésicos Clave", "Notas de Enfermería"],
      headersRO: ["Treaptă", "Medicamente", "Co-analgezice Cheie", "Note de Asistență"],
      rows: [
        {
          colsES: [
            "2 (Débiles)",
            "Tramadol, Codeína",
            "AINEs",
            "Techo analgésico. Cuidado con estreñimiento.",
          ],
          colsRO: [
            "2 (Slabe)",
            "Tramadol, Codeină",
            "AINS",
            "Plafon analgezic. Atenție la constipație.",
          ],
        },
        {
          colsES: [
            "3 (Potentes)",
            "Morfina, Fentanilo, Oxicodona, Metadona",
            "Corticoides (dolor óseo), Pregabalina (neuropático).",
            "SIN techo analgésico. Titular hasta confort o toxicidad (somnolencia/miosis). Laxantes SIEMPRE.",
          ],
          colsRO: [
            "3 (Puternice)",
            "Morfină, Fentanil, Oxicodonă, Metadonă",
            "Corticoizi (durere osoasă), Pregabalină (neuropat).",
            "FĂRĂ plafon analgezic. Titrare până la confort sau toxicitate (somnolență/mioză). Laxative ÎNTOTDEAUNA.",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "expert",
      icon: Pill,
      titleES: "ROTACIÓN DE OPIOIDES",
      textES: "Si hay tolerancia o efectos adversos, cambiar el opioide permite bajar la dosis equianalgésica un 30-50% (tolerancia cruzada incompleta).",
      titleRO: "ROTAȚIA OPIOIDELOR",
      textRO: "Dacă există toleranță sau efecte adverse, schimbarea opioidului permite scăderea dozei echianalgezice cu 30-50% (toleranță încrucișată incompletă).",
    },
    {
      type: "h3",
      textES: "2. Sedación Paliativa: Ética y Técnica",
      textRO: "2. Sedare Paliativă: Etică și Tehnică",
    },
    {
      type: "p",
      textES: "Objetivo: Disminuir la consciencia para aliviar un síntoma refractario (Disnea, Delirium, Dolor). NO es eutanasia (no busca la muerte, sino el alivio).",
      textRO: "Obiectiv: Scăderea conștienței pentru ameliorarea unui simptom refractar (Dispnee, Delir, Durere). NU este eutanasie (nu caută moartea, ci alinarea).",
    },
    {
      type: "list",
      items: [
        {
          icon: Moon,
          textES: "Fármaco #1: MIDAZOLAM. Inicio con bolos (2.5-5mg) + Infusión continua SC/IV. Dosis según RASS (-4/-5).",
          textRO: "Medicament #1: MIDAZOLAM. Început cu bolus (2.5-5mg) + Perfuzie continuă SC/IV. Doză conform RASS (-4/-5).",
        },
        {
          icon: Syringe,
          textES: "Fármaco #2 (Si falla Midazolam o hay Delirium grave): LEVOMEPROMAZINA (Neuroléptico sedante).",
          textRO: "Medicament #2 (Dacă eșuează Midazolam sau Delir grav): LEVOMEPROMAZINĂ (Neuroleptic sedativ).",
        },
        {
          icon: Activity,
          textES: "Estertores ('Rattle'): Buscapina (Butilescopolamina) para secar secreciones. NO aspirar (molesta).",
          textRO: "Raluri ('Rattle'): Buscopan (Butilscopolamină) pentru uscarea secrețiilor. NU aspirați (deranjează).",
        },
      ],
    },
  ],
};
