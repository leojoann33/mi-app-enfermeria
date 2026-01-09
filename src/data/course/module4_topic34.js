import {
  AlertTriangle,
  Thermometer,
  Activity,
  Droplet,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const MODULE_4_TOPIC_34 = {
  id: "4-34",
  titleES: "34. Fiebre alta persistente: cómo actuar",
  titleRO: "34. Febră mare persistentă: cum să acționezi",
  learningObjectives: [
    "Identificar los signos de alarma en un paciente febril.",
    "Aplicar medidas físicas y farmacológicas correctamente.",
    "Conocer el protocolo de extracción de hemocultivos.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Definición y Valoración Inicial",
      textRO: "1. Definiție și Evaluare Inițială",
    },
    {
      type: "p",
      textES: "Se considera fiebre a una temperatura corporal central ≥ 38.0ºC. La fiebre en un paciente hospitalizado (origen nosocomial) requiere una valoración inmediata para descartar sepsis o infección relacionada con catéteres.",
      textRO: "Se consideră febră o temperatură corporală centrală ≥ 38.0ºC. Febra la un pacient spitalizat (origine nosocomială) necesită o evaluare imediată pentru a exclude sepsisul sau infecția legată de catetere.",
    },
    {
      type: "alert",
      variant: "destructive",
      icon: AlertTriangle,
      titleES: "ALERTA: SIGNOS DE SEPSIS",
      textES: "Si la fiebre se acompaña de: Tensión Arterial < 90/60 mmHg, Taquicardia > 100 lpm, o Taquipnea > 22 rpm, ACTIVAR CÓDIGO SEPSIS INMEDIATAMENTE.",
      titleRO: "ALERTA: SEMNE DE SEPSIS",
      textRO: "Dacă febra este însoțită de: Tensiune Arterială < 90/60 mmHg, Tahicardie > 100 bpm, sau Tahipnee > 22 rpm, ACTIVAȚI CODUL SEPSIS IMEDIAT.",
    },
    {
      type: "h3",
      textES: "2. Protocolo de Actuación (Regla de las 3 'C')",
      textRO: "2. Protocol de Acțiune (Regula celor 3 'C')",
    },
    {
      type: "table",
      headersES: ["Fase", "Acción Principal", "Detalles Técnicos"],
      headersRO: ["Fază", "Acțiune Principală", "Detalii Tehnice"],
      rows: [
        {
          colsES: [
            "1. CONFORT",
            "Medidas Físicas",
            "Retirar ropa de cama excesiva. Paños tibios (NO helados) en frente y axilas. Mantener hidratación si vía oral permitida.",
          ],
          colsRO: [
            "1. CONFORT",
            "Măsuri Fizice",
            "Îndepărtați lenjeria de pat excesivă. Comprese călduțe (NU reci) pe frunte și axile. Mențineți hidratarea dacă este permisă oral.",
          ],
        },
        {
          colsES: [
            "2. CULTIVOS",
            "Hemocultivos",
            "SIEMPRE antes de iniciar antibióticos nuevos. Extraer 2 parejas (aerobio/anaerobio) de venopunciones diferentes si Tª > 38.5ºC + Escalofriós.",
          ],
          colsRO: [
            "2. CULTURI",
            "Hemoculturi",
            "ÎNTOTDEAUNA înainte de a începe antibiotice noi. Recoltați 2 perechi (aerob/anaerob) din venopuncții diferite dacă Tª > 38.5ºC + Frisoane.",
          ],
        },
        {
          colsES: [
            "3. CONTROL",
            "Antitérmicos",
            "Administrar según pauta médica (Paracetamol 1g o Metamizol 2g IV). Reevaluar temperatura a los 45-60 min.",
          ],
          colsRO: [
            "3. CONTROL",
            "Antitermice",
            "Administrați conform prescripției (Paracetamol 1g sau Metamizol 2g IV). Reevaluați temperatura la 45-60 min.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Errores Comunes a Evitar",
      textRO: "3. Erori Comune de Evitat",
    },
    {
      type: "list",
      items: [
        {
          icon: XCircle,
          textES: "No usar agua helada o alcohol para bajar la fiebre (provoca vasoconstricción y escalofríos, aumentando la temperatura central).",
          textRO: "Nu folosiți apă cu gheață sau alcool pentru a scădea febra (provoacă vasoconstricție și frisoane, crescând temperatura centrală).",
        },
        {
          icon: XCircle,
          textES: "No administrar antibióticos sin orden médica, ya que pueden enmascarar el foco infeccioso.",
          textRO: "Nu administrați antibiotice fără prescripție medicală, deoarece pot masca focarul infecțios.",
        },
        {
          icon: CheckCircle2,
          textES: "Vigilar signos de deshidratación en pacientes ancianos febriles.",
          textRO: "Monitorizați semnele de deshidratare la pacienții vârstnici febrili.",
        },
      ],
    },
  ],
};
