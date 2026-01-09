import { Droplet, Microscope, Pill } from "lucide-react";

export const part8_manual_m2_t4 = {
  id: "part8_manual_m2_t4",
  titleES: "Hematología: Anemias y Leucemias",
  titleRO: "Hematologie: Anemii și Leucemii",
  lessons: [
    {
      id: "p8_m2_t4_l1",
      titleES: "Anemia Ferropénica",
      titleRO: "Anemie Feriprivă",
      icon: Droplet,
      contentES: [
        {
          type: "paragraph",
          text: "Es la anemia más frecuente, por déficit de hierro. Causas: sangrado crónico (digestivo/menstrual) o malabsorción."
        },
        {
          type: "list",
          items: [
            "**Clínica:** Astenia, palidez, uñas quebradizas, taquicardia.",
            "**Diagnóstico:** Hemoglobina baja, Ferritina baja, VCM bajo (microcítica).",
            "**Tratamiento:** Sulfato ferroso oral. Tomar en ayunas o con vit C (zumo naranja). No con lácteos/té/antiácidos. Efecto adverso: Heces negras."
          ]
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Este cea mai frecventă anemie, prin deficit de fier. Cauze: sângerare cronică (digestivă/menstruală) sau malabsorbție."
        },
        {
          type: "list",
          items: [
            "**Clinică:** Astenie, paloare, unghii fragile, tahicardie.",
            "**Diagnostic:** Hemoglobină scăzută, Feritină scăzută, VEM scăzut (microcitară).",
            "**Tratament:** Sulfat feros oral. De luat pe nemâncate sau cu vit C (suc de portocale). Nu cu lactate/ceai/antiacide. Efect advers: Scaun negru."
          ]
        }
      ]
    },
    {
      id: "p8_m2_t4_l2",
      titleES: "Anemia Perniciosa (Vit B12)",
      titleRO: "Anemie Pernicioasă (Vit B12)",
      icon: Pill,
      contentES: [
        {
          type: "paragraph",
          text: "Déficit de absorción de Vitamina B12 por falta de factor intrínseco gástrico (gastritis atrófica o gastrectomía)."
        },
        {
          type: "list",
          items: [
            "**Clínica:** Anemia + Síntomas Neurológicos (parestesias, marcha inestable). Lengua roja y lisa (glositis).",
            "**Tratamiento:** Inyecciones intramusculares mensuales de Vitamina B12 (Cianocobalamina) de por vida."
          ]
        }
      ],
      contentRO: [
         {
          type: "paragraph",
          text: "Deficit de absorbție a Vitaminei B12 prin lipsa factorului intrinsec gastric (gastrită atrofică sau gastrectomie)."
        },
        {
          type: "list",
          items: [
            "**Clinică:** Anemie + Simptome Neurologice (parestezii, mers instabil). Limbă roșie și netedă (glosită).",
            "**Tratament:** Injecții intramusculare lunare de Vitamina B12 (Cianocobalamină) pe viață."
          ]
        }
      ]
    },
    {
      id: "p8_m2_t4_l3",
      titleES: "Hematopoyesis y Coagulación",
      titleRO: "Hematopoieză și Coagulare",
      icon: Microscope,
      contentES: [
        {
           type: "paragraph",
           text: "Médula ósea: Fábrica de sangre. Serie Roja (O2), Blanca (Defensa), Plaquetas (Coagulación)."
        },
        {
           type: "paragraph",
           text: "**Pancitopenia:** Disminución de las 3 series (Anemia + Leucopenia + Trombocitopenia). Riesgo de infección y sangrado."
        }
      ],
      contentRO: [
        {
           type: "paragraph",
           text: "Măduva osoasă: Fabrica de sânge. Seria Roșie (O2), Albă (Apărare), Plachete (Coagulare)."
        },
        {
           type: "paragraph",
           text: "**Pancitopenie:** Scăderea celor 3 serii (Anemie + Leucopenie + Trombocitopenie). Risc de infecție și sângerare."
        }
      ]
    }
  ]
};
