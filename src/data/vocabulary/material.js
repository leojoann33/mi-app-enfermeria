export const VOCABULARY_MATERIAL = [
  {
    id: "mat_jeringa",
    termES: "Jeringa",
    termRO: "Seringă",
    profiles: {
      nursing: {
        definitionES: "Instrumento cilíndrico graduado con émbolo para aspirar o inyectar fluidos.\nTipos: 2ml, 5ml, 10ml, 20ml, 50ml (alimentación/lavados), de insulina (unidades).",
        definitionRO: "Instrument cilindric gradat cu piston.\nTipuri: 2ml, 5ml, 10ml, 20ml, 50ml, insulină.",
        watchES: ["No tocar el cono (parte donde va la aguja) para mantener esterilidad.", "Elegir el tamaño adecuado al volumen."],
        watchRO: ["Nu atinge conul (sterilitate).", "Alege mărimea potrivită."],
        errorsES: ["Usar jeringa de 50ml para dosis pequeñas (mucha imprecisión).", "Reutilizar jeringas en el mismo paciente (riesgo contaminación)."],
        errorsRO: ["A folosi seringă mare pentru doze mici.", "A reutiliza seringi."]
      },
      medicine: {
        definitionES: "Dispositivo de administración parenteral.",
        definitionRO: "Dispozitiv de administrare parenterală."
      },
      health: {
        definitionES: "Tubo de plástico para poner inyecciones.",
        definitionRO: "Tub de plastic pentru injecții."
      }
    }
  },
  {
    id: "mat_aguja",
    termES: "Aguja",
    termRO: "Ac",
    profiles: {
      nursing: {
        definitionES: "Cánula metálica afilada.\nCódigo de colores: Verde (IM/IV), Negra (IM fina), Amarilla (Pediátrica/Dientes), Rosa (Carga - Romo), Naranja (SC/Insulina).",
        definitionRO: "Canulă metalică ascuțită.\nCod culori: Verde, Negru, Galben, Roz (Încărcare), Portocaliu.",
        watchES: ["NUNCA reencapuchar (Riesgo biológico #1).", "Desechar inmediatamente en contenedor amarillo/bio."],
        watchRO: ["NU reacoperiți niciodată.", "Aruncați imediat în container bio."],
        errorsES: ["Pincharse al intentar tapar la aguja.", "Usar aguja de carga (rosa) para pinchar al paciente (dolor extremo, es muy gorda)."],
        errorsRO: ["A se înțepa reacoperind.", "A folosi acul de încărcare pe pacient."]
      },
      medicine: {
        definitionES: "Elemento punzante para acceso percutáneo.",
        definitionRO: "Element înțepător pentru acces percutanat."
      },
      health: {
        definitionES: "Lo que pincha de la jeringuilla.",
        definitionRO: "Ceea ce înțeapă la seringă."
      }
    }
  },
  {
    id: "mat_cateter",
    termES: "Catéter (Abocath)",
    termRO: "Branulă / Cateter",
    profiles: {
      nursing: {
        definitionES: "Tubo flexible que se queda en la vena tras retirar la aguja guía.\nColores: Azul (22G - fino), Rosa (20G - estándar), Verde (18G - rápido/sangre), Gris (16G - urgencias/poli).",
        definitionRO: "Tub flexibil care rămâne în venă.\nCulori: Albastru, Roz, Verde, Gri.",
        watchES: ["Fijación correcta (apósito transparente).", "Salinizar o lavar tras uso para que no se obstruya."],
        watchRO: ["Fixare corectă.", "Spălare după utilizare."],
        errorsES: ["Intentar reintroducir la aguja guía si fallas (corta el catéter -> embolia).", "Dejar el torniquete puesto tras pinchar."],
        errorsRO: ["A reintroduce acul ghid.", "A lăsa garoul pus."]
      },
      medicine: {
        definitionES: "Dispositivo de acceso vascular periférico.",
        definitionRO: "Dispozitiv de acces vascular periferic."
      },
      health: {
        definitionES: "El tubito de plástico que te dejan en la mano para el suero.",
        definitionRO: "Tubulețul de plastic lăsat în mână pentru perfuzie."
      }
    }
  },
  {
    id: "mat_sonda_ng",
    termES: "Sonda Nasogástrica",
    termRO: "Sondă Nazogastrică",
    profiles: {
      nursing: {
        definitionES: "Tubo desde la nariz hasta el estómago (Levin/Salem). Usos: Alimentación (Nutrición Enteral), Lavado gástrico, Descompresión.",
        definitionRO: "Tub de la nas la stomac. Utilizări: Nutriție, Spălătură, Decomprimare.",
        watchES: ["Comprobar ubicación (aspirar jugo gástrico y medir pH).", "Posición Fowler (sentado) para evitar aspiración."],
        watchRO: ["Verificare amplasare (aspirare suc gastric).", "Poziție Fowler."],
        errorsES: ["Administrar dieta con la sonda en pulmón (neumonía aspirativa mortal).", "Forzar si hay resistencia."],
        errorsRO: ["A administra dietă cu sonda în plămân.", "A forța intrarea."]
      },
      medicine: {
        definitionES: "Sondaje digestivo alto.",
        definitionRO: "Sondaj digestiv superior."
      },
      health: {
        definitionES: "Tubo por la nariz para comer o limpiar el estómago.",
        definitionRO: "Tub pe nas pentru a mânca sau a curăța stomacul."
      }
    }
  },
  {
    id: "mat_guantes",
    termES: "Guantes",
    termRO: "Mănuși",
    profiles: {
      nursing: {
        definitionES: "Barrera de protección. Tipos: Vinilo/Nitrilo (manejo fluidos, no estéril), Látex (cirugía, estéril o no).",
        definitionRO: "Barieră de protecție. Tipuri: Vinil/Nitril, Latex.",
        watchES: ["No sustituyen al lavado de manos.", "Cambiar entre 'zona sucia' (ej. culo) y 'zona limpia' (ej. cara) del mismo paciente."],
        watchRO: ["Nu înlocuiesc spălatul pe mâini.", "Schimbare între zone murdare și curate."],
        errorsES: ["Salir al pasillo con guantes puestos.", "Tocar el ordenador con guantes sucios."],
        errorsRO: ["A ieși pe hol cu mănuși.", "A atinge calculatorul cu mănuși murdare."]
      },
      medicine: {
        definitionES: "EPP de barrera manual.",
        definitionRO: "Echipament de protecție manual."
      },
      health: {
        definitionES: "Protección para las manos.",
        definitionRO: "Protecție pentru mâini."
      }
    }
  },
  {
    id: "mat_pulsio",
    termES: "Pulsioxímetro",
    termRO: "Pulsoximetru",
    profiles: {
      nursing: {
        definitionES: "Aparato 'pinza' que mide saturación de oxígeno (SpO2) y pulso de forma no invasiva.",
        definitionRO: "Aparat 'clește' care măsoară saturația (SpO2) și pulsul.",
        watchES: ["Uñas pintadas o frías dan error.", "Rotar el dedo si uso continuo (presión)."],
        watchRO: ["Unghii vopsite sau reci dau eroare.", "Rotația degetului."]
      },
      medicine: {
        definitionES: "Monitorización de SpO2.",
        definitionRO: "Monitorizare SpO2."
      },
      health: {
        definitionES: "Aparato para ver el oxígeno en sangre.",
        definitionRO: "Aparat pentru a vedea oxigenul din sânge."
      }
    }
  },
  {
    id: "mat_batea",
    termES: "Batea",
    termRO: "Tăviță renală",
    profiles: {
      nursing: {
        definitionES: "Recipiente en forma de riñón usado para recoger desechos, instrumentos usados o vómitos.",
        definitionRO: "Recipient în formă de rinichi pentru deșeuri, instrumente sau vărsături.",
        watchES: ["Lavar y desinfectar tras cada uso (si es metálica) o tirar (si es cartón)."],
        watchRO: ["Spălare și dezinfectare sau aruncare."]
      },
      medicine: {
        definitionES: "Recipiente auxiliar clínico.",
        definitionRO: "Recipient auxiliar clinic."
      },
      health: {
        definitionES: "Bandeja curva para echar cosas sucias o vomitar.",
        definitionRO: "Tavă curbată pentru lucruri murdare sau vărsături."
      }
    }
  },
  {
    id: "mat_compresor",
    termES: "Compresor (Torniquete)",
    termRO: "Garou",
    profiles: {
      nursing: {
        definitionES: "Cinta elástica para ingurgitar las venas antes de pinchar.",
        definitionRO: "Bandă elastică pentru a umfla venele înainte de înțepare.",
        watchES: ["Máximo 1 minuto puesto (riesgo hemólisis/potasio).", "Retirar ANTES de sacar la aguja (si no, sale sangre a chorro)."],
        watchRO: ["Maxim 1 minut.", "Scoatere ÎNAINTE de a scoate acul."]
      },
      medicine: {
        definitionES: "Dispositivo de estasis venosa temporal.",
        definitionRO: "Dispozitiv de stază venoasă temporală."
      },
      health: {
        definitionES: "Goma para apretar el brazo y buscar la vena.",
        definitionRO: "Guma de strâns brațul pentru a căuta vena."
      }
    }
  }
];
