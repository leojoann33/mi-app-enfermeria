import {
  Atom,
  Dna,
  Microscope,
  Globe2,
  Layers,
} from "lucide-react";

export const CLINICAL_1_TOPIC_1 = {
  id: "part7_clinical1_topic1",
  titleES: "Niveles de Organización de la Materia",
  titleRO: "Nivelurile de Organizare a Materiei",
  isExpert: false, // Clinical Theme (Standard/Teal)
  learningObjectives: [
    "Identificar los niveles de organización abióticos (cuántico, molecular) y bióticos (celular, tisular, etc.).",
    "Definir conceptos clave: Isótopo, Ión, Electrolito.",
    "Comprender la jerarquía ecológica: Población -> Comunidad -> Ecosistema.",
  ],
  content: [
    {
      type: "h3",
      textES: "1. Niveles Abióticos (Sin Vida)",
      textRO: "1. Niveluri Abiotice (Fără Viață)",
    },
    {
      type: "list",
      items: [
        {
          icon: Atom,
          textES: "Nivel Cuántico: Partículas subatómicas (Protones, Neutrones, Electrones). Quarks.",
          textRO: "Nivel Cuantic: Particule subatomice (Protone, Neutroni, Electroni). Quarci.",
        },
        {
          icon: Layers,
          textES: "Nivel Atómico: Unidad más pequeña de un elemento químico. Conceptos clave: Isótopo (diferentes neutrones), Ión (carga eléctrica), Electrolito (ión en agua).",
          textRO: "Nivel Atomic: Cea mai mică unitate a unui element chimic. Concepte cheie: Izotop (neutroni diferiți), Ion (sarcină electrică), Electrolit (ion în apă).",
        },
        {
          icon: Dna,
          textES: "Nivel Molecular: Unión de átomos. Elementos (O2) vs Compuestos (H2O, Proteínas, ADN). Enlaces: Iónico, Covalente, Puentes de Hidrógeno.",
          textRO: "Nivel Molecular: Uniunea atomilor. Elemente (O2) vs Compuși (H2O, Proteine, ADN). Legături: Ionice, Covalente, Punți de Hidrogen.",
        },
      ],
    },
    {
      type: "h3",
      textES: "2. Niveles Bióticos (Con Vida)",
      textRO: "2. Niveluri Biotice (Cu Viață)",
    },
    {
      type: "table",
      headersES: ["Nivel", "Definición", "Ejemplo"],
      headersRO: ["Nivel", "Definiție", "Exemplu"],
      rows: [
        {
          colsES: [
            "Celular",
            "Unidad funcional y estructural básica. Funciones: Nutrición, Relación, Reproducción.",
            "Neurona, Osteocito, Eritrocito.",
          ],
          colsRO: [
            "Celular",
            "Unitate funcțională și structurală de bază. Funcții: Nutriție, Relație, Reproducere.",
            "Neuron, Osteocit, Eritrocit.",
          ],
        },
        {
          colsES: [
            "Tisular",
            "Conjunto de células especializadas con el mismo origen y función.",
            "Tejido epitelial, muscular, nervioso.",
          ],
          colsRO: [
            "Tisular",
            "Set de celule specializate cu aceeași origine și funcție.",
            "Țesut epitelial, muscular, nervos.",
          ],
        },
        {
          colsES: [
            "Órgano",
            "Conjunto de tejidos que realizan una función concreta.",
            "Corazón, Hígado, Piel (órgano más grande).",
          ],
          colsRO: [
            "Organ",
            "Set de țesuturi care îndeplinesc o funcție concretă.",
            "Inimă, Ficat, Piele (cel mai mare organ).",
          ],
        },
      ],
    },
    {
      type: "alert",
      variant: "info",
      icon: Globe2,
      titleES: "NIVEL ECOLÓGICO",
      textES: "Población (individuos misma especie) -> Comunidad (distintas especies, biocenosis) -> Ecosistema (interacción con el medio abiótico/biotopo) -> Biosfera.",
      titleRO: "NIVEL ECOLOGIC",
      textRO: "Populație (indivizi aceeași specie) -> Comunitate (specii diferite, biocenoză) -> Ecosistem (interacțiune cu mediul abiotic/biotop) -> Biosferă.",
    },
  ],
};
