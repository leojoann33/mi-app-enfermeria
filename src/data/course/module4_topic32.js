export const MODULE_4_TOPIC_32 = {
  id: "4-32",
  titleES: "32. Paro cardiorrespiratorio: protocolo RCP básico",
  titleRO: "32. Stop cardiorespirator: protocol RCP de bază",
  
  content: [
    {
      type: "h3",
      textES: "1. Algoritmo SVB (Soporte Vital Básico)",
      textRO: "1. Algoritm SVB (Suport Vital de Bază)"
    },
    {
      type: "list",
      items: [
        {
          es: "1. SEGURIDAD: Asegurar la zona.",
          ro: "1. SIGURANȚĂ: Asigurați zona."
        },
        {
          es: "2. CONSCIENCIA: ¿Responde? Sacudir hombros y gritar.",
          ro: "2. CONȘTIINȚĂ: Răspunde? Scuturați umerii și strigați."
        },
        {
          es: "3. AYUDA: Si no responde, PEDIR AYUDA (Carro de Parada / 112).",
          ro: "3. AJUTOR: Dacă nu răspunde, CEREȚI AJUTOR (Cărucior de Resuscitare / 112)."
        },
        {
          es: "4. RESPIRACIÓN/PULSO: Ver, oír, sentir (< 10 seg). Si no respira o boquea (gasping) -> INICIAR RCP.",
          ro: "4. RESPIRAȚIE/PULS: Vedeți, auziți, simțiți (< 10 sec). Dacă nu respiră sau gâfâie (gasping) -> ÎNCEPEȚI RCP."
        }
      ]
    },
    {
      type: "h3",
      textES: "2. Secuencia C-A-B (Compresiones - Vía Aérea - Ventilación)",
      textRO: "2. Secvența C-A-B (Compresii - Cale Aeriană - Ventilație)"
    },
    {
      type: "table",
      headers: {
        es: ["Parámetro", "Valor Objetivo"],
        ro: ["Parametru", "Valoare Țintă"]
      },
      rows: [
        {
          col1: { es: "Relación C:V", ro: "Raport C:V" },
          col2: "30:2",
          col3: { es: "30 compresiones, 2 ventilaciones.", ro: "30 compresii, 2 ventilații." }
        },
        {
          col1: { es: "Frecuencia", ro: "Frecvență" },
          col2: "100 - 120 cpm",
          col3: { es: "Ritmo rápido ('Stayin Alive').", ro: "Ritm rapid ('Stayin Alive')." }
        },
        {
          col1: { es: "Profundidad", ro: "Adâncime" },
          col2: "5 - 6 cm",
          col3: { es: "Permitir reexpansión torácica completa.", ro: "Permiteți reexpansiunea toracică completă." }
        }
      ]
    },
    {
      type: "alert",
      variant: "warning",
      textES: "USO DEL DEA: En cuanto llegue el Desfibrilador, encender y colocar parches. SI INDICADA, dar descarga y REANUDAR INMEDIATAMENTE compresiones (no comprobar pulso justo después del choque).",
      textRO: "UTILIZAREA DEA: Imediat ce sosește Defibrilatorul, porniți și plasați electrozii. DACĂ ESTE INDICAT, administrați șocul și RELUAȚI IMEDIAT compresiile (nu verificați pulsul imediat după șoc)."
    }
  ]
};
