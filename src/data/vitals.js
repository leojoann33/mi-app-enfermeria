/**
 * 🩺 LOGIC: vitalsLogic.js
 * Auditoría: Eliminación de laconismos y estandarización NNN.
 */

export const evaluateVitalSign = (type, v1, v2 = null) => {
  const val1 = parseFloat(v1);
  const val2 = v2 ? parseFloat(v2) : null;

  if (isNaN(val1)) return null;

  switch (type) {
    case "ta":
      if (val1 >= 180 || (val2 && val2 >= 110)) {
        return {
          status: "danger",
          color: "bg-red-600",
          titleES: "CRISIS HIPERTENSIVA",
          titleRO: "CRIZĂ HIPERTENSIVĂ",
          protocolES:
            "Asegurar el reposo absoluto del paciente. Iniciar la monitorización continua del electrocardiograma. Preparar la administración de fármacos hipotensores como Labetalol según prescripción médica.",
          protocolRO:
            "Asigurarea repausului absolut al pacientului. Inițierea monitorizării continue a electrocardiogramei. Pregătirea administrării medicamentelor hipotensoare, cum ar fi Labetalolul, conform prescripției medicale.",
          nanda: "[00204] Perfusión tisular ineficaz",
        };
      }
      if (val1 < 90) {
        return {
          status: "danger",
          color: "bg-red-600",
          titleES: "SHOCK / HIPOTENSIÓN",
          titleRO: "ȘOC / HIPOTENSIUNE",
          protocolES:
            "Colocar al paciente en posición de Trendelenburg. Canalizar dos vías venosas de grueso calibre e iniciar fluidoterapia agresiva según el protocolo de reanimación vigente.",
          protocolRO:
            "Plasarea pacientului în poziția Trendelenburg. Canalizarea a două linii venoase de calibru mare și inițierea fluidoterapiei agresive conform protocolului de resuscitare în vigoare.",
          nanda: "[00027] Déficit de volumen de líquidos",
        };
      }
      return {
        status: "ok",
        color: "bg-emerald-500",
        titleES: "Tensión Normal",
        titleRO: "Tensiune Normală",
      };

    case "temp":
      if (val1 > 38.0) {
        return {
          status: "warning",
          color: "bg-red-500",
          titleES: "FIEBRE / POSIBLE SEPSIS",
          titleRO: "FEBRĂ / POSIBILĂ SEPSIS",
          protocolES:
            "Monitorizar la temperatura cada dos horas. Aplicar medidas físicas de enfriamiento y administrar antipiréticos. Evaluar signos precoces de disfunción orgánica.",
          protocolRO:
            "Monitorizarea temperaturii la fiecare două ore. Aplicarea măsurilor fizice de răcire și administrarea antipireticelor. Evaluarea semnelor precoce de disfuncție organică.",
          nanda: "[00007] Hipertermia",
        };
      }
      return {
        status: "ok",
        color: "bg-emerald-500",
        titleES: "Eutermia",
        titleRO: "Eutermie",
      };

    case "pulse":
      if (val1 > 100) {
        return {
          status: "warning",
          color: "bg-red-500",
          titleES: "TAQUICARDIA",
          titleRO: "TAHICARDIE",
          protocolES:
            "Valorar dolor, ansiedad, fiebre o hipovolemia. Realizar ECG de 12 derivaciones si persiste o hay dolor torácico asociado.",
          protocolRO:
            "Evaluați durerea, anxietatea, febra sau hipovolemia. Efectuați un EKG cu 12 derivații dacă persistă sau există dureri toracice asociate.",
          nanda: "[00029] Disminución del gasto cardíaco",
        };
      }
      if (val1 < 60) {
        return {
          status: "danger",
          color: "bg-red-600",
          titleES: "BRADICARDIA",
          titleRO: "BRADICARDIE",
          protocolES:
            "Valorar perfusión periférica y nivel de conciencia. Monitorizar ECG. Preparar Atropina si hay inestabilidad hemodinámica.",
          protocolRO:
            "Evaluați perfuzia periferică și nivelul de conștiență. Monitorizați EKG. Pregătiți Atropina dacă există instabilitate hemodinamică.",
          nanda: "[00029] Disminución del gasto cardíaco",
        };
      }
      return {
        status: "ok",
        color: "bg-emerald-500",
        titleES: "Normocardia",
        titleRO: "Normocardie",
      };

    case "resp":
      if (val1 > 20) {
        return {
          status: "warning",
          color: "bg-orange-500",
          titleES: "TAQUIPNEA",
          titleRO: "TAHIPNEE",
          protocolES:
            "Elevar cabecero (Fowler). Valorar saturación de O2 y permeabilidad de vía aérea. Descartar ansiedad o dolor.",
          protocolRO:
            "Ridicați capul patului (Fowler). Evaluați saturația de O2 și permeabilitatea căilor aeriene. Excludeți anxietatea sau durerea.",
          nanda: "[00032] Patrón respiratorio ineficaz",
        };
      }
      if (val1 < 12) {
        return {
          status: "danger",
          color: "bg-red-600",
          titleES: "BRADIPNEA",
          titleRO: "BRADIPNEE",
          protocolES:
            "Alerta de depresión respiratoria. Estimular al paciente. Valorar uso de antagonistas (Naloxona) si sospecha de opioides.",
          protocolRO:
            "Alertă de depresie respiratorie. Stimulați pacientul. Evaluați utilizarea antagoniștilor (Naloxonă) dacă se suspectează opioide.",
          nanda: "[00032] Patrón respiratorio ineficaz",
        };
      }
      return {
        status: "ok",
        color: "bg-emerald-500",
        titleES: "Eupnea",
        titleRO: "Eupnee",
      };

    case "spo2":
      if (val1 < 90) {
        return {
          status: "danger",
          color: "bg-red-600",
          titleES: "HIPOXIA / INSUF. RESPIRATORIA",
          titleRO: "HIPOXIE / INSUF. RESPIRATORIE",
          protocolES:
            "Administrar oxigenoterapia inmediata (Ventimask/Gafas). Posición Fowler alta. Monitorizar gasometría arterial si SatO2 < 85%.",
          protocolRO:
            "Administrați oxigenoterapie imediată (Ventimask/Ochelari). Poziția Fowler înaltă. Monitorizați gazometria arterială dacă SatO2 < 85%.",
          nanda: "[00030] Deterioro del intercambio de gases",
        };
      }
      if (val1 < 95) {
        return {
          status: "warning",
          color: "bg-orange-500",
          titleES: "DESATURACIÓN LEVE",
          titleRO: "DESATURARE UȘOARĂ",
          protocolES:
            "Estimular respiración profunda. Valorar secreciones. Vigilar tendencia.",
          protocolRO:
            "Stimulați respirația profundă. Evaluați secrețiile. Monitorizați tendința.",
          nanda: "[00032] Patrón respiratorio ineficaz",
        };
      }
      return {
        status: "ok",
        color: "bg-emerald-500",
        titleES: "Normoxemia (Eupnea)",
        titleRO: "Normoxemie",
      };

    default:
      return null;
  }
};
