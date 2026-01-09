import { Activity, Thermometer, Droplet, HeartPulse, Gauge, Waves } from "lucide-react";

export const part8_manual_m1_t3 = {
  id: "part8_manual_m1_t3",
  titleES: "Técnicas: Constantes y Diálisis",
  titleRO: "Tehnici: Semne Vitale și Dializă",
  lessons: [
    {
      id: "p8_m1_t3_l1",
      titleES: "Constantes Vitales: Temperatura y Pulso",
      titleRO: "Semne Vitale: Temperatură și Puls",
      icon: Thermometer,
      contentES: [
        {
          type: "paragraph",
          text: "El control de constantes vitales es básico para evaluar la actividad de órganos vitales."
        },
        {
          type: "list",
          items: [
            "**Temperatura:** Valores normales ~37°C. La axilar es 0.2-0.3°C menor y la rectal 0.3-0.4°C mayor que la oral. Tiempo mínimo: Axila 5 min, Boca/Recto 3 min.",
            "**Pulso Arterial:** Expansión de las arterias por el bombeo cardiaco. Se mide habitualmente en la arteria radial. En niños o inconscientes, carótida o apical.",
            "**Características del Pulso:** Frecuencia (latidos/min), Ritmo (regular/irregular), Amplitud (fuerte/débil/filiforme)."
          ]
        },
        {
          type: "callout",
          typeCallout: "warning",
          text: "No usar el dedo pulgar para tomar el pulso, ya que tiene pulso propio."
        }
      ],
      contentRO: [
        {
          type: "paragraph",
          text: "Controlul semnelor vitale este esențial pentru evaluarea activității organelor vitale."
        },
        {
          type: "list",
          items: [
            "**Temperatură:** Valori normale ~37°C. Cea axilară este cu 0.2-0.3°C mai mică, iar cea rectală cu 0.3-0.4°C mai mare decât cea orală. Timp minim: Axilă 5 min, Gură/Rect 3 min.",
            "**Puls Arterial:** Expansiunea arterelor datorită pompării cardiace. Se măsoară de obicei la artera radială. La copii sau inconștienți, carotida sau apical.",
            "**Caracteristici Puls:** Frecvență (bătăi/min), Ritm (regulat/neregulat), Amplitudine (puternic/slab/filiform)."
          ]
        },
        {
          type: "callout",
          typeCallout: "warning",
          text: "Nu folosiți degetul mare pentru a lua pulsul, deoarece are propriul puls."
        }
      ]
    },
    {
      id: "p8_m1_t3_l2",
      titleES: "Constantes Vitales: Presión Arterial y Respiración",
      titleRO: "Semne Vitale: Tensiune Arterială și Respirație",
      icon: Activity,
      contentES: [
        {
          type: "paragraph",
          text: "**Presión Arterial (TA):** Fuerza de la sangre sobre paredes arteriales. Se mide con esfigmomanómetro y fonendoscopio en arteria braquial."
        },
        {
          type: "list",
          items: [
            "**Sistólica (Máxima):** Primer ruido escuchado.",
            "**Diastólica (Mínima):** Desaparición o cambio brusco de los ruidos.",
            "El manguito debe cubrir 2/3 de la longitud del brazo."
          ]
        },
        {
           type: "paragraph",
           text: "**Frecuencia Respiratoria:** Ciclos inspiración/espiración por minuto (12-20 en adultos). Se debe medir sin que el paciente lo note para evitar alteraciones voluntarias."
        }
      ],
      contentRO: [
          {
            type: "paragraph",
            text: "**Tensiune Arterială (TA):** Forța sângelui asupra pereților arteriali. Se măsoară cu tensiometru și stetoscop la artera brahială."
          },
          {
            type: "list",
            items: [
              "**Sistolică (Maximă):** Primul zgomot auzit.",
              "**Diastolică (Minimă):** Dispariția sau schimbarea bruscă a zgomotelor.",
              "Manșeta trebuie să acopere 2/3 din lungimea brațului."
            ]
          },
          {
             type: "paragraph",
             text: "**Frecvența Respiratorie:** Cicluri inspirație/expirație pe minut (12-20 la adulți). Trebuie măsurată fără ca pacientul să observe pentru a evita modificările voluntare."
          }
      ]
    },
    {
       id: "p8_m1_t3_l3",
       titleES: "Diálisis: Hemodiálisis y Peritoneal",
       titleRO: "Dializă: Hemodializă și Peritoneală",
       icon: Waves,
       contentES: [
         {
           type: "paragraph",
           text: "La diálisis suple la función renal filtrando desechos y exceso de líquido mediante ósmosis y difusión."
         },
         {
           type: "paragraph",
           text: "**Hemodiálisis:** Usa una máquina (riñón artificial) y un dializador. Requiere acceso vascular (Fístula AV, Injerto o Catéter venoso central). Se realiza intermitentemente (ej. 3 veces/semana)."
         },
         {
            type: "paragraph",
            text: "**Diálisis Peritoneal:** Usa el peritoneo del paciente como membrana. Se infunde líquido en la cavidad abdominal a través de un catéter, se deja actuar y se drena. Puede ser continua ambulatoria (DPCA) o automatizada (cicladora)."
         },
         {
            type: "callout",
            typeCallout: "important",
            text: "En la diálisis peritoneal, la prevención de la peritonitis (infección) es prioritaria. El efluente turbio es un signo de alarma."
         }
       ],
       contentRO: [
          {
            type: "paragraph",
            text: "Dializa suplinește funcția renală filtrând deșeurile și excesul de lichid prin osmoză și difuzie."
          },
          {
            type: "paragraph",
            text: "**Hemodializă:** Folosește o mașină (rinichi artificial) și un dializor. Necesită acces vascular (Fistulă AV, Grefă sau Cateter venos central). Se realizează intermitent (ex. de 3 ori/săptămână)."
          },
          {
             type: "paragraph",
             text: "**Dializă Peritoneală:** Folosește peritoneul pacientului ca membrană. Se introduce lichid în cavitatea abdominală printr-un cateter, se lasă să acționeze și se drenează. Poate fi continuă ambulatorie (DPCA) sau automatizată."
          },
          {
             type: "callout",
             typeCallout: "important",
             text: "În dializa peritoneală, prevenirea peritonitei (infecție) este prioritară. Efluentul tulbure este un semn de alarmă."
          }
       ]
    }
  ]
};
