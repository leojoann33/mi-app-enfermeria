import {
  Bug,
  ShieldAlert,
  ListRestart,
  Skull,
  Search,
  Sword,
} from "lucide-react";

export const MASTER_1_TOPIC_2 = {
  id: "master-1-2",
  titleES: "Masterclass 2: Biofilm y el concepto T.I.M.E.",
  titleRO: "Masterclass 2: Biofilmul și conceptul T.I.M.E.",
  isExpert: true,
  learningObjectives: [
    "Comprender la biología de la resistencia bacteriana (Biofilm).",
    "Aplicar el esquema T.I.M.E. en la valoración de heridas complejas.",
    "Diferenciar colonización crítica de infección sistémica.",
  ],
  content: [
    {
      type: "alert",
      variant: "expert",
      icon: ShieldAlert,
      titleES: "NIVEL EXPERTO: LA BARRERA INVISIBLE",
      textES: "El 60-90% de las heridas crónicas tienen BIOFILM. No es 'pus' visible; es una comunidad bacteriana organizada protegida por una matriz de polisacáridos (EPS) resistente a antibióticos y al sistema inmune.",
      titleRO: "NIVEL EXPERT: BARIERA INVIZIBILĂ",
      textRO: "60-90% dintre plăgile cronice au BIOFILM. Nu este 'puroi' vizibil; este o comunitate bacteriană organizată protejată de o matrice polizaharidică (EPS) rezistentă la antibiotice și la sistemul imun.",
    },
    {
      type: "h3",
      textES: "1. ¿Qué es realmente el Biofilm?",
      textRO: "1. Ce este cu adevărat Biofilmul?",
    },
    {
      type: "p",
      textES: "Las bacterias planctónicas (libres) son fáciles de matar. Pero cuando se adhieren y secretan su matriz protectora (EPS), forman un 'bunker' biológico. Los antibióticos tópicos NO penetran esta capa. La única estrategia eficaz es la disrupción física (desbridamiento).",
      textRO: "Bacteriile planctonice (libere) sunt ușor de ucis. Dar când aderă și își secretă matricea protectoare (EPS), formează un 'buncăr' biologic. Antibioticele topice NU penetrează acest strat. Singura strategie eficientă este perturbarea fizică (debridarea).",
    },
    {
      type: "h3",
      textES: "2. Esquema T.I.M.E. (European Wound Management Association)",
      textRO: "2. Schema T.I.M.E. (European Wound Management Association)",
    },
    {
      type: "table",
      headersES: ["Letra", "Significado", "Valoración de Experto", "Acción Clínica"],
      headersRO: ["Litură", "Semnificație", "Evaluare Expert", "Acțiune Clinică"],
      rows: [
        {
          colsES: [
            "T",
            "Tissue (Tejido)",
            "¿Hay tejido necrótico o esfacelos? ¿Es viable?",
            "DESBRIDAMIENTO (Cortante, Enzimático, Autolítico). Objetivo: Lecho rojo y sangrante.",
          ],
          colsRO: [
            "T",
            "Tissue (Țesut)",
            "Există țesut necrotic sau sfaceluri? Este viabil?",
            "DEBRIDARE (Tăioasă, Enzimatică, Autolitică). Obiectiv: Pat roșu și sângerând.",
          ],
        },
        {
          colsES: [
            "I",
            "Infection (Infección)",
            "Signos sutiles: Tejido friable, mal olor, aumento de exudado, dolor.",
            "ANTIMICROBIANOS TÓPICOS (Plata, Yodo, PHMB). Cultivo solo si hay signos sistémicos.",
          ],
          colsRO: [
            "I",
            "Infection (Infecție)",
            "Semne subtile: Țesut friabil, miros neplăcut, creșterea exudatului, durere.",
            "ANTIMICROBIENE TOPICE (Argint, Iod, PHMB). Cultură doar dacă există semne sistemice.",
          ],
        },
        {
          colsES: [
            "M",
            "Moisture (Humedad)",
            "¿Exudado excesivo (maceración) o lecho seco (desecación)?",
            "EQUILIBRIO. Alginatos/Espumas si hay mucho líquido. Hidrogeles si está seco.",
          ],
          colsRO: [
            "M",
            "Moisture (Umiditate)",
            "Exudat excesiv (macerație) sau pat uscat (desecare)?",
            "ECHILIBRU. Alginate/Spume dacă e mult lichid. Hidrogeluri dacă e uscat.",
          ],
        },
        {
          colsES: [
            "E",
            "Edge (Borde)",
            "¿Bordes migrando o estancados (enrollados/hiperqueratosis)?",
            "REVIVIFICAR BORDES. Si están enrollados, el epitelio 'cree' que ya cerró. Hay que raspar/cortar.",
          ],
          colsRO: [
            "E",
            "Edge (Margine)",
            "Margini migrând sau stagnante (rulate/hiperkeratoză)?",
            "REVIVIFICAREA MARGINILOR. Dacă sunt rulate, epiteliul 'crede' că s-a închis. Trebuie răzuit/tăiat.",
          ],
        },
      ],
    },
    {
      type: "h3",
      textES: "3. Estrategia de 'Sándwich' para Biofilm",
      textRO: "3. Strategia 'Sandwich' pentru Biofilm",
    },
    {
      type: "list",
      items: [
        {
          icon: Sword,
          textES: "Paso 1: ATACAR. Desbridamiento cortante agresivo (sharp debridement). Romper el biofilm físicamente.",
          textRO: "Pasul 1: ATAC. Debridare tăioasă agresivă (sharp debridement). Ruperea fizică a biofilmului.",
        },
        {
          icon: ListRestart,
          textES: "Paso 2: PREVENIR REAGRUPACIÓN. El biofilm se reforma en 24h. Usar apósito con surfactante o antimicrobiano de larga duración (Plata nanocristalina).",
          textRO: "Pasul 2: PREVENIREA REGRUPĂRII. Biofilmul se reformează în 24h. Utilizați pansament cu surfactant sau antimicrobian de lungă durată (Argint nanocristalin).",
        },
        {
          icon: Search,
          textES: "Paso 3: VIGILAR. Si no mejora en 2 semanas -> Biopsia.",
          textRO: "Pasul 3: SUPRAVEGHERE. Dacă nu se ameliorează în 2 săptămâni -> Biopsie.",
        },
      ],
    },
    {
      type: "alert",
      variant: "destructive",
      icon: Skull,
      titleES: "ERROR COMÚN: EL FALSO CULTIVO",
      textES: "NUNCA tome un cultivo de frotis (hisopo) sobre pus o tejido necrótico. Solo cultivará la flora superficial. Para diagnóstico real de infección profunda: Limpiar -> Desbridar -> Biopsia de tejido vivo o aspirado (Levine technique).",
      titleRO: "EROARE COMUNĂ: CULTURA FALSĂ",
      textRO: "NICIODATĂ nu prelevați un frotiu (tampon) din puroi sau țesut necrotic. Veți cultiva doar flora superficială. Pentru diagnostic real de infecție profundă: Curățare -> Debridare -> Biopsie de țesut viu sau aspirat (tehnica Levine).",
    },
  ],
};
