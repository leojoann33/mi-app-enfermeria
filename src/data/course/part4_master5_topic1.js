import {
  ThermometerSnowflake,
  Bone,
  Droplet,
  AlertTriangle,
  Beaker,
  ShieldAlert,
} from "lucide-react";

export const MASTER_5_TOPIC_1 = {
  id: "master-5-1",
  titleES: "Masterclass: Urgencias Oncológicas",
  titleRO: "Masterclass: Urgențe Oncologice",
  isExpert: true,
  learningObjectives: [
    "Manejo de la hora dorada en Neutropenia Febril.",
    "Detección y tratamiento del Síndrome de Lisis Tumoral.",
    "Actuación ante Compresión Medular Maligna.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Neutropenia Febril: Código Sepsis",
      textRO: "1. Neutropenie Febrilă: Cod Sepsis",
    },
    {
      type: "alert",
      variant: "danger",
      icon: ThermometerSnowflake,
      titleES: "DEFINICIÓN Y RIESGO",
      textES: "Neutrófilos < 500/mm3 + Fiebre > 38ºC. Mortalidad > 10% si se retrasa antibiótico. Los signos inflamatorios clásicos NO aparecen (no hay pus porque no hay neutrófilos).",
      titleRO: "DEFINIȚIE ȘI RISC",
      textRO: "Neutrofile < 500/mm3 + Febră > 38ºC. Mortalitate > 10% dacă întârzie antibioticul. Semnele inflamatorii clasice NU apar (nu există puroi pentru că nu sunt neutrofile).",
    },
    {
      type: "list",
      items: [
        {
          icon: Beaker,
          textES: "Acción Inmediata (Hora 0): 2 Hemocultivos (1 de catéter, 1 periférico). Analítica completa.",
          textRO: "Acțiune Imediată (Ora 0): 2 Hemoculturi (1 din cateter, 1 periferic). Analize complete.",
        },
        {
          icon: ShieldAlert,
          textES: "Antibioterapia Empírica: Beta-lactámico anti-pseudomona (Cefepime / Piperacilina-Tazobactam / Carbapenem) IV en < 60 min.",
          textRO: "Antibioterapie Empirică: Beta-lactamină anti-pseudomonas (Cefepime / Piperacilină-Tazobactam / Carbapenem) IV în < 60 min.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Síndrome de Lisis Tumoral (SLT)",
      textRO: "2. Sindromul de Liză Tumorală (SLT)",
    },
    {
      type: "p",
      textES: "Ocurre tras quimioterapia en tumores de alta proliferación (Leucemias, Linfomas). La destrucción masiva de células libera su contenido a la sangre.",
      textRO: "Apare după chimioterapie în tumori cu proliferare rapidă (Leucemii, Limfoame). Distrugerea masivă a celulelor eliberează conținutul lor în sânge.",
    },
    {
      type: "table",
      headersES: ["Desequilibrio", "Consecuencia Clínica", "Tratamiento"],
      headersRO: ["Dezechilibru", "Consecință Clinică", "Tratament"],
      rows: [
        {
          colsES: [
            "Hiperpotasemia (K+)",
            "Arritmias letales. Parada cardíaca.",
            "Insulina + Glucosa, Salbutamol, Resinas. Diálisis si grave.",
          ],
          colsRO: [
            "Hiperkaliemie (K+)",
            "Aritmii letale. Stop cardiac.",
            "Insulină + Glucoză, Salbutamol, Rășini. Dializă dacă grav.",
          ],
        },
        {
          colsES: [
            "Hiperuricemia (Ácido Úrico)",
            "Fallo Renal Agudo (cristales en túbulos).",
            "Hiperhidratación agresiva. Alopurinol (profilaxis) o Rasburicasa (tratamiento).",
          ],
          colsRO: [
            "Hiperuricemie (Acid Uric)",
            "Insuficiență Renală Acută (cristale în tubuli).",
            "Hiperhidratare agresivă. Alopurinol (profilaxie) sau Rasburicasă (tratament).",
          ],
        },
        {
          colsES: [
            "Hiperfosfatemia (P)",
            "Precipita con Calcio -> Hipocalcemia.",
            "Quelantes de fósforo.",
          ],
          colsRO: [
            "Hiperfosfatemie (P)",
            "Precipită cu Calciu -> Hipocalcemie.",
            "Chelatori de fosfor.",
          ],
        },
        {
          colsES: [
            "Hipocalcemia (Ca++)",
            "Tetania, convulsiones, QT largo.",
            "Gluconato Cálcico solo si sintomático.",
          ],
          colsRO: [
            "Hipocalcemie (Ca++)",
            "Tetanie, convulsii, QT lung.",
            "Gluconat de Calciu doar dacă simptomatic.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Compresión Medular Maligna",
      textRO: "3. Compresie Medulară Malignă",
    },
    {
      type: "list",
      items: [
        {
          icon: AlertTriangle,
          textES: "Red Flag: Dolor de espalda nuevo que empeora al tumbarse (decúbito) o con Valsalva + Debilidad en piernas.",
          textRO: "Steag Roșu: Durere de spate nouă care se agravează la culcare (decubit) sau cu Valsalva + Slăbiciune în picioare.",
        },
        {
          icon: Bone,
          textES: "Acción: DEXAMETASONA dosis alta inmediata (para reducir edema vasogénico) + RMN Urgente.",
          textRO: "Acțiune: DEXAMETAZONĂ doză mare imediat (pentru reducere edem vasogenic) + RMN Urgent.",
        },
      ],
    },
  ],
};
