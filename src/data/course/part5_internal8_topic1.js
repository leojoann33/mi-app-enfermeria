import {
  Flame,
  AlertTriangle,
  Droplet,
  ShieldAlert,
  Eye,
} from "lucide-react";

export const INTERNAL_8_TOPIC_1 = {
  id: "internal-8-1",
  titleES: "Medicina Interna: Urgencias Dermatológicas (SJS/NET)",
  titleRO: "Medicină Internă: Urgențe Dermatologice (SJS/NET)",
  isExpert: true,
  learningObjectives: [
    "Diferenciar Stevens-Johnson (SJS) de Necrólisis Epidérmica Tóxica (NET).",
    "Manejo de enfermería: Protocolo de Gran Quemado.",
    "Signo de Nikolsky.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Fallo Cutáneo Agudo: Reacciones Medicamentosas",
      textRO: "1. Insuficiență Cutanată Acută: Reacții Medicamentoase",
    },
    {
      type: "p",
      textES: "Reacciones gravisimas a fármacos (antibióticos, antiepilépticos, alopurinol) donde la piel se desprende.",
      textRO: "Reacții extrem de grave la medicamente (antibiotice, antiepileptice, alopurinol) unde pielea se detașează.",
    },
    {
      type: "table",
      headersES: ["Síndrome", "Extensión (% Superficie Corporal)", "Mortalidad"],
      headersRO: ["Sindrom", "Extensie (% Suprafață Corporală)", "Mortalitate"],
      rows: [
        { colsES: ["SJS (Stevens-Johnson)", "< 10% de la piel.", "1-5%."], colsRO: ["SJS (Stevens-Johnson)", "< 10% din piele.", "1-5%."] },
        { colsES: ["Superposición SJS/NET", "10 - 30%.", "10-20%."], colsRO: ["Suprapunere SJS/NET", "10 - 30%.", "10-20%."] },
        { colsES: ["NET (Necrólisis Epidérmica Tóxica)", "> 30% (Piel 'escaldada').", "> 30-50%."], colsRO: ["NET (Necroliză Epidermică Toxică)", "> 30% (Piele 'opărită').", "> 30-50%."] },
      ],
    },
    {
      type: "h3",
      textES: "2. Cuidados de Enfermería: Nivel UCI",
      textRO: "2. Îngrijiri Asistență: Nivel ATI",
    },
    {
      type: "list",
      items: [
        {
          icon: ShieldAlert,
          textES: "Signo de Nikolsky: Al frotar suavemente la piel sana, ésta se desprende. Indica actividad grave de la enfermedad. Manipulación MÍNIMA y ESTÉRIL.",
          textRO: "Semnul Nikolsky: La frecarea ușoară a pielii sănătoase, aceasta se detașează. Indică activitate gravă a bolii. Manipulare MINIMĂ și STERILĂ.",
        },
        {
          icon: Droplet,
          textES: "Fluidos y Temperatura: Pierden litros de agua y calor por la piel (como quemados). Reposición agresiva de Ringer Lactato y ambiente térmico controlado (30-32ºC habitación).",
          textRO: "Fluide și Temperatură: Pierd litri de apă și căldură prin piele (ca arșii). Reumplere agresivă cu Ringer Lactat și mediu termic controlat (30-32ºC salon).",
        },
        {
          icon: Eye,
          textES: "Afectación Mucosas: Ojos (riesgo ceguera), boca, genitales. Limpieza diaria con suero salino y lubricación constante para evitar sinequias (cicatrices pegadas).",
          textRO: "Afectare Mucoase: Ochi (risc orbire), gură, genitale. Curățare zilnică cu ser fiziologic și lubrifiere constantă pentru evitarea sinechiilor (cicatrici lipite).",
        },
      ],
    },
  ],
};
