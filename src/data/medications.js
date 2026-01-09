/**
 * 💊 BASE DE DATOS FARMACOLÓGICA - PROYECTO ENFERMERÍA
 * -------------------------------------------------------------------
 * Curso de Enfermería · Edición Mirela Petrescu · 2026
 * Estilo Harrison: Contenido completo con markdown para renderizado
 * Idiomas: Español (ES) | Rumano (RO)
 * 
 * Contenido:
 * 1. Metamizol (Nolotil®)
 * 2. Insulina Rápida (Actrapid®)
 * 3. Furosemida (Seguril®)
 * 4. Paracetamol IV (Perfalgan®)
 * 5. Omeprazol IV (Losec®)
 * 6. Ondansetrón (Zofran®)
 */

export const medicamentos = [
  // --------------------------------------------------------------------------
  // 1. METAMIZOL (NOLOTIL®)
  // --------------------------------------------------------------------------
  {
    id: "farm_metamizol",
    nameES: "Metamizol (Nolotil®)",
    nameRO: "Metamizol (Nolotil®)",
    categoryES: "Analgésico / Antipirético",
    categoryRO: "Analgezic / Antipiretic",
    descES: "Analgésico, antipirético y espasmolítico. Uno de los más usados en España. El más eficaz antipirético inyectable.",
    descRO: "Analgezic, antipiretic și spasmolitic. Unul dintre cele mai utilizate în Spania. Cel mai eficient antipiretic injectabil.",
    contentES: `
## ¿Qué es y para qué se usa?

El metamizol es un **analgésico, antipirético y espasmolítico**. En España es uno de los medicamentos más utilizados. Curiosidad: casi no se usa en otros países (prohibido en UK, USA, Suecia) por el riesgo de agranulocitosis, pero en España es muy seguro si se usa correctamente.

| Uso común | Situaciones típicas |
|-----------|---------------------|
| **Dolor moderado-intenso** | Postoperatorio, cólico, dolor oncológico |
| **Fiebre resistente** | Cuando paracetamol no es suficiente |
| **Dolor visceral/cólico** | Cólico renal, biliar, dismenorrea |
| **Dolor postoperatorio** | Solo o combinado con otros analgésicos |

---

## Presentaciones habituales

| Presentación | Contenido | Vía | Uso típico |
|--------------|-----------|-----|------------|
| **Cápsulas** | 575 mg | Oral | Dolor leve-moderado ambulatorio |
| **Ampollas 2 ml** | 2 g (2000 mg) | IV / IM | Dolor moderado-intenso, fiebre hospitalaria |
| **Ampollas 5 ml** | 2.5 g (2500 mg) | IV / IM | Dolor intenso |
| **Supositorio** | 1 g | Rectal | Niños, pacientes que no toleran oral |
| **Solución oral** | Gotas (500 mg/ml) | Oral | Pediatría, ajuste de dosis |

---

## Posología por grupo de edad

### 👶 PEDIATRÍA

| Edad/Peso | Dosis | Vía | Frecuencia |
|-----------|-------|-----|------------|
| **3-11 meses (5-8 kg)** | 50-100 mg | Rectal/Oral gotas | Cada 6-8 h |
| **1-3 años (9-15 kg)** | 100-250 mg | Rectal/Oral gotas | Cada 6-8 h |
| **4-6 años (16-23 kg)** | 250-375 mg | Oral/Rectal | Cada 6-8 h |
| **7-9 años (24-30 kg)** | 375-500 mg | Oral/Rectal | Cada 6-8 h |
| **10-12 años (31-45 kg)** | 500-750 mg | Oral | Cada 6-8 h |

> ⚠️ **Pediatría IV:** Solo en casos estrictamente necesarios. Infusión muy lenta. Nunca en < 3 meses.

### 🧑 ADULTOS (18-65 años)

| Indicación | Dosis | Vía | Frecuencia | Máximo diario |
|------------|-------|-----|------------|---------------|
| **Dolor/Fiebre oral** | 575 mg (1 cápsula) | Oral | Cada 6-8 h | 3.450 mg (6 cáps) |
| **Dolor moderado IV** | 1-2 g | IV lenta | Cada 8 h | 6 g |
| **Dolor intenso IV** | 2-2.5 g | IV lenta | Cada 6-8 h | 6 g |

### 👴 ANCIANOS (> 65 años)

| Aspecto | Recomendación |
|---------|---------------|
| **Dosis** | Iniciar con dosis bajas (1 g IV) |
| **Velocidad IV** | Muy lenta (mayor riesgo hipotensión) |
| **Función renal** | Reducir dosis si ClCr < 50 ml/min |
| **Vigilancia** | Mayor riesgo de hipotensión y agranulocitosis |

---

## ⛔ Contraindicaciones — NO administrar si:

| Situación | Por qué |
|-----------|---------|
| Alergia a pirazolonas | Reacción cruzada |
| Antecedente de agranulocitosis | Riesgo de recurrencia |
| Porfiria aguda intermitente | Puede desencadenar crisis |
| Déficit de G6PD | Riesgo de hemólisis |
| Asma por AINEs | Broncoespasmo |
| Hipotensión/shock | La IV baja más la tensión |
| Embarazo 3er trimestre | Cierre precoz ductus arterioso |
| < 3 meses de edad | No establecida seguridad |

---

## ⚠️ Efectos secundarios a vigilar

| Efecto | Frecuencia | Qué observar | Qué hacer |
|--------|------------|--------------|-----------|
| **Hipotensión** | Común (IV rápida) | ↓TA, mareo, sudoración | Administrar MUY lento. Tumbar paciente |
| **Reacción alérgica** | Poco frecuente | Urticaria, prurito, edema | Suspender. Antihistamínico |
| **Agranulocitosis** | Rara pero grave | Fiebre + úlceras bucales | URGENTE. Suspender. Hemograma |
| **Anafilaxia** | Muy rara | Disnea, edema glotis, shock | Emergencia. RCP si precisa |

> 🔴 **AGRANULOCITOSIS:** Es el efecto grave más temido. Aparece típicamente tras 1-2 semanas de uso. Signos de alarma: fiebre inexplicada, dolor de garganta, úlceras en boca.

---

## 🩺 Preparación según vía

### VÍA INTRAVENOSA

| Paso | Acción |
|------|--------|
| 1 | Comprobar ampolla (nombre, dosis, caducidad, aspecto) |
| 2 | Cargar el contenido de la ampolla en jeringa |
| 3 | **DILUIR** en 100 ml de SF (obligatorio para infusión) |
| 4 | Conectar al sistema de goteo |
| 5 | Administrar en **mínimo 15-20 minutos** |

> ⚠️ **NUNCA en bolo directo rápido** — Causa hipotensión grave, incluso shock.

### VÍA INTRAMUSCULAR

| Paso | Acción |
|------|--------|
| 1 | Cargar medicamento con aguja de carga |
| 2 | Cambiar a aguja IM |
| 3 | Desinfectar zona con antiséptico |
| 4 | Insertar aguja a 90° en glúteo (cuadrante superior externo) |
| 5 | Aspirar (comprobar que no hay sangre) |
| 6 | Inyectar **lentamente** (duele si es rápido) |
| 7 | Retirar, presionar con algodón |
| 8 | No masajear (aumenta dolor) |

---

## 🔄 Interacciones importantes

| Medicamento | Efecto | Acción |
|-------------|--------|--------|
| **Anticoagulantes orales** | ↑ efecto anticoagulante | Vigilar INR |
| **Metotrexato** | ↑ toxicidad metotrexato | Evitar combinación |
| **Antihipertensivos** | ↑ efecto hipotensor | Vigilar TA |
| **Alcohol** | ↑ riesgo hipotensión | Evitar |
| **Clorpromazina** | Hipotermia grave | Evitar combinación |

---

## 💡 Trucos de enfermera

> *"Lento, lento, lento — La regla de oro del metamizol IV. Mínimo 15-20 minutos en infusión."*

> *"Tumba al paciente antes — Siempre IV con paciente tumbado. La hipotensión aparece en minutos."*

> *"Vigila 15 minutos después — La hipotensión puede aparecer durante o justo después de la infusión."*

> *"Si baja la tensión: para y avisa — Detener infusión, piernas elevadas, avisar al médico."*

> *"Alternancia inteligente — Metamizol + paracetamol alternados cada 4h = mejor control del dolor."*

> *"En geriatría: la mitad y el doble de lento — Empieza con 1g y pasa en 30 minutos."*

> *"Agranulocitosis: fiebre + garganta — Si un paciente que lleva días con metamizol tiene fiebre y dolor de garganta, sospecha y avisa."*
    `,
    contentRO: `
## Ce este și pentru ce se folosește?

Metamizolul este un **analgezic, antipiretic și spasmolitic**. În Spania este unul dintre cele mai utilizate medicamente. Curiozitate: aproape nu se folosește în alte țări (interzis în UK, SUA, Suedia) din cauza riscului de agranulocitoză, dar în Spania este foarte sigur dacă se utilizează corect.

| Utilizare comună | Situații tipice |
|------------------|-----------------|
| **Durere moderată-intensă** | Postoperator, colică, durere oncologică |
| **Febră rezistentă** | Când paracetamolul nu este suficient |
| **Durere viscerală/colică** | Colică renală, biliară, dismenoree |
| **Durere postoperatorie** | Singur sau combinat cu alte analgezice |

---

## Prezentări obișnuite

| Prezentare | Conținut | Cale | Utilizare tipică |
|------------|----------|------|------------------|
| **Capsule** | 575 mg | Oral | Durere ușoară-moderată ambulatoriu |
| **Fiole 2 ml** | 2 g (2000 mg) | IV / IM | Durere moderată-intensă, febră spitalicească |
| **Fiole 5 ml** | 2.5 g (2500 mg) | IV / IM | Durere intensă |
| **Supozitor** | 1 g | Rectal | Copii, pacienți care nu tolerează oral |
| **Soluție orală** | Picături (500 mg/ml) | Oral | Pediatrie, ajustarea dozei |

---

## Posologie pe grupe de vârstă

### 👶 PEDIATRIE

| Vârstă/Greutate | Doză | Cale | Frecvență |
|-----------------|------|------|-----------|
| **3-11 luni (5-8 kg)** | 50-100 mg | Rectal/Oral picături | La fiecare 6-8 h |
| **1-3 ani (9-15 kg)** | 100-250 mg | Rectal/Oral picături | La fiecare 6-8 h |
| **4-6 ani (16-23 kg)** | 250-375 mg | Oral/Rectal | La fiecare 6-8 h |
| **7-9 ani (24-30 kg)** | 375-500 mg | Oral/Rectal | La fiecare 6-8 h |
| **10-12 ani (31-45 kg)** | 500-750 mg | Oral | La fiecare 6-8 h |

> ⚠️ **Pediatrie IV:** Doar în cazuri strict necesare. Infuzie foarte lentă. Niciodată la < 3 luni.

### 🧑 ADULȚI (18-65 ani)

| Indicație | Doză | Cale | Frecvență | Maxim zilnic |
|-----------|------|------|-----------|--------------|
| **Durere/Febră oral** | 575 mg (1 capsulă) | Oral | La fiecare 6-8 h | 3.450 mg (6 caps) |
| **Durere moderată IV** | 1-2 g | IV lentă | La fiecare 8 h | 6 g |
| **Durere intensă IV** | 2-2.5 g | IV lentă | La fiecare 6-8 h | 6 g |

### 👴 VÂRSTNICI (> 65 ani)

| Aspect | Recomandare |
|--------|-------------|
| **Doză** | Începeți cu doze mici (1 g IV) |
| **Viteză IV** | Foarte lentă (risc mai mare de hipotensiune) |
| **Funcție renală** | Reduceți doza dacă ClCr < 50 ml/min |
| **Supraveghere** | Risc crescut de hipotensiune și agranulocitoză |

---

## ⛔ Contraindicații — NU administrați dacă:

| Situație | De ce |
|----------|-------|
| Alergie la pirazolonice | Reacție încrucișată |
| Antecedent de agranulocitoză | Risc de recurență |
| Porfirie acută intermitentă | Poate declanșa criza |
| Deficit de G6PD | Risc de hemoliză |
| Astm la AINS | Bronhospasm |
| Hipotensiune/șoc | Administrarea IV scade și mai mult tensiunea |
| Sarcină trimestrul 3 | Închidere precoce duct arterial |
| < 3 luni de viață | Siguranță nestabilită |

---

## ⚠️ Efecte secundare de supravegheat

| Efect | Frecvență | Ce să observați | Ce să faceți |
|-------|-----------|-----------------|--------------|
| **Hipotensiune** | Comună (IV rapidă) | ↓TA, amețeală, transpirație | Administrați FOARTE lent. Culcați pacientul |
| **Reacție alergică** | Puțin frecventă | Urticarie, prurit, edem | Suspendați. Antihistaminic |
| **Agranulocitoză** | Rară dar gravă | Febră + ulcere bucale | URGENT. Suspendați. Hemoleucogramă |
| **Anafilaxie** | Foarte rară | Dispnee, edem glotic, șoc | Urgență. RCP dacă este necesar |

> 🔴 **AGRANULOCITOZĂ:** Este efectul grav cel mai de temut. Apare tipic după 1-2 săptămâni de utilizare. Semne de alarmă: febră inexplicabilă, durere în gât, ulcere în gură.

---

## 🩺 Preparare în funcție de cale

### CALE INTRAVENOASĂ

| Pas | Acțiune |
|-----|---------|
| 1 | Verificați fiola (nume, doză, valabilitate, aspect) |
| 2 | Încărcați conținutul fiolei în seringă |
| 3 | **DILUAȚI** în 100 ml de SF (obligatoriu pentru perfuzie) |
| 4 | Conectați la sistemul de picurare |
| 5 | Administrați în **minim 15-20 minute** |

> ⚠️ **NICIODATĂ în bolus direct rapid** — Cauzează hipotensiune gravă, chiar șoc.

### CALE INTRAMUSCULARĂ

| Pas | Acțiune |
|-----|---------|
| 1 | Încărcați medicamentul cu ac de încărcare |
| 2 | Schimbați cu ac IM |
| 3 | Dezinfectați zona cu antiseptic |
| 4 | Inserați acul la 90° în fesier (cadran superior extern) |
| 5 | Aspirați (verificați că nu există sânge) |
| 6 | Injectați **lent** (doare dacă este rapid) |
| 7 | Retrageți, apăsați cu vată |
| 8 | Nu masați (crește durerea) |

---

## 🔄 Interacțiuni importante

| Medicament | Efect | Acțiune |
|------------|-------|---------|
| **Anticoagulante orale** | ↑ efect anticoagulant | Monitorizați INR |
| **Metotrexat** | ↑ toxicitate metotrexat | Evitați combinația |
| **Antihipertensive** | ↑ efect hipotensor | Monitorizați TA |
| **Alcool** | ↑ risc hipotensiune | Evitați |
| **Clorpromazină** | Hipotermie gravă | Evitați combinația |

---

## 💡 Trucuri de asistentă

> *"Lent, lent, lent — Regula de aur a metamizolului IV. Minim 15-20 minute în perfuzie."*

> *"Culcă pacientul înainte — Întotdeauna IV cu pacientul culcat. Hipotensiunea apare în minute."*

> *"Supraveghează 15 minute după — Hipotensiunea poate apărea în timpul sau imediat după perfuzie."*

> *"Dacă scade tensiunea: oprește și anunță — Opriți perfuzia, picioarele ridicate, anunțați medicul."*

> *"Alternanță inteligentă — Metamizol + paracetamol alternați la fiecare 4h = control mai bun al durerii."*

> *"În geriatrie: jumătate și dublu de lent — Începeți cu 1g și administrați în 30 minute."*

> *"Agranulocitoză: febră + gât — Dacă un pacient care ia de zile întregi metamizol are febră și durere în gât, suspectați și anunțați."*
    `,
  },

  // --------------------------------------------------------------------------
  // 2. INSULINA RÁPIDA (ACTRAPID®)
  // --------------------------------------------------------------------------
  {
    id: "farm_insulina_rapida",
    nameES: "Insulina Rápida (Actrapid®)",
    nameRO: "Insulină Rapidă (Actrapid®)",
    categoryES: "Insulina Humana Regular",
    categoryRO: "Insulină Umană Regulată",
    descES: "Insulina cristalina transparente de acción corta. La ÚNICA que se puede administrar por vía IV. Para correcciones de glucemia y cetoacidosis.",
    descRO: "Insulină cristalină transparentă cu acțiune scurtă. SINGURA care poate fi administrată IV. Pentru corecții glicemice și cetoacidoză.",
    contentES: `
## ¿Qué es y para qué se usa?

La insulina rápida (también llamada regular o cristalina) es una **insulina humana de acción corta**. Sirve para controlar la glucosa en sangre, especialmente después de las comidas o para corregir hiperglucemias.

| Uso común | Situaciones típicas |
|-----------|---------------------|
| **Control glucémico hospitalario** | Pautas de corrección según glucemia capilar |
| **Diabetes tipo 1** | Parte del esquema basal-bolo |
| **Diabetes tipo 2 descompensada** | Cuando los antidiabéticos orales no son suficientes |
| **Cetoacidosis diabética (CAD)** | En perfusión continua (UCI/Urgencias) |
| **Nutrición parenteral** | Añadida a la bolsa o en paralelo |

> 💡 **Aspecto:** La insulina rápida es siempre **TRANSPARENTE y cristalina**. Si está turbia, NO la uses.

> ⚠️ **IMPORTANTE:** Es la ÚNICA insulina que se puede administrar por vía IV. Las demás solo SC.

---

## Farmacocinética (cuándo actúa)

| Parámetro | Vía SC | Vía IV |
|-----------|--------|--------|
| **Inicio de acción** | 30-60 minutos | Inmediato |
| **Pico de acción** | 2-4 horas | 15-30 minutos |
| **Duración** | 6-8 horas | 30-60 minutos |

> 💡 **Por eso se pone 30 min antes de comer** — Para que el pico coincida con la absorción de los alimentos.

---

## Pautas de corrección (lo más frecuente en planta)

**Ejemplo de pauta de corrección típica:**

| Glucemia (mg/dl) | Insulina SC |
|------------------|-------------|
| < 150 | 0 UI |
| 150-199 | 2 UI |
| 200-249 | 4 UI |
| 250-299 | 6 UI |
| 300-349 | 8 UI |
| 350-399 | 10 UI |
| ≥ 400 | 12 UI + avisar médico |

> ⚠️ **Esta pauta es un EJEMPLO.** Cada paciente tiene su pauta individualizada. Siempre seguir la prescripción médica.

---

## 📍 Zonas de punción subcutánea

**VELOCIDAD DE ABSORCIÓN (de más rápida a más lenta):**

1. **ABDOMEN** (más rápida) — Ideal para correcciones de hiperglucemia
2. **BRAZOS** (cara posterior)
3. **MUSLOS** (cara anterior/lateral)
4. **GLÚTEOS** (más lenta) — Ideal para insulina basal nocturna

---

## 👐 Técnica paso a paso con pluma

| Paso | Acción |
|------|--------|
| 1 | **Verificar glucemia** — Medir antes de poner insulina |
| 2 | **Comprobar insulina** — Tipo correcto, transparente, no caducada |
| 3 | **Colocar aguja nueva** — Desenroscar capuchón, enroscar aguja |
| 4 | **Purgar** — Marcar 2 UI, apuntar hacia arriba, pulsar. Debe salir gota |
| 5 | **Marcar dosis** — Girar selector hasta dosis prescrita |
| 6 | **Seleccionar zona** — Alternar zonas para evitar lipodistrofia |
| 7 | **Pellizco (si aguja > 6mm)** — En niños/delgados siempre |
| 8 | **Insertar aguja** — 90° en adultos, 45° si muy delgado |
| 9 | **Pulsar completamente** — Hasta el fondo |
| 10 | **Contar 10 segundos** — Antes de retirar |
| 11 | **Retirar aguja** — Sin frotar |
| 12 | **Desechar aguja** — Nunca reutilizar |

---

## 🆘 Manejo de HIPOGLUCEMIA

| Glucemia | Clasificación | Síntomas |
|----------|---------------|----------|
| **< 70 mg/dl** | Hipoglucemia | Temblor, sudoración, hambre, ansiedad |
| **< 54 mg/dl** | Clínicamente significativa | Confusión, visión borrosa |
| **< 40 mg/dl** | Grave | Pérdida de consciencia, convulsiones |

**PACIENTE CONSCIENTE:**
- Dar 15-20 g de glucosa (zumo, 3-4 pastillas glucosa)
- Esperar 15 minutos
- Repetir glucemia
- Si ≥ 70: dar snack si falta para próxima comida

**PACIENTE INCONSCIENTE:**
- NO dar nada por boca
- Glucagón 1 mg IM/SC si no hay vía
- Si hay vía IV: Glucosa 50% → 20-50 ml IV directo
- Avisar al médico

---

## 💡 Trucos de enfermera

> *"Transparente = rápida — Si la insulina es transparente y cristalina, es rápida. Si es turbia/lechosa, es intermedia o mezcla."*

> *"Siempre verificar tipo — Los errores de insulina son frecuentes y peligrosos. Lee el nombre completo."*

> *"Contar 10 segundos — Antes de retirar la aguja de la pluma."*

> *"Rotar, rotar, rotar — Siempre alternar zonas. Los bultos alteran la absorción."*

> *"Abdomen para correcciones — Cuando necesitas que actúe rápido."*

> *"Glucemia antes, siempre — Nunca pongas insulina sin saber la glucemia actual."*

> *"Si no come, no pongas — Si el paciente está en ayunas, consulta antes."*

> *"Nevera, no congelador — La insulina se guarda en nevera (2-8°C). Si se congela, se estropea."*
    `,
    contentRO: `
## Ce este și pentru ce se folosește?

Insulina rapidă (numită și regulată sau cristalină) este o **insulină umană cu acțiune scurtă**. Servește pentru controlul glucozei în sânge, în special după mese sau pentru corectarea hiperglicemiilor.

| Utilizare comună | Situații tipice |
|------------------|-----------------|
| **Control glicemic spitalicesc** | Scheme de corecție conform glicemiei capilare |
| **Diabet tip 1** | Parte a schemei bazal-bolus |
| **Diabet tip 2 decompensat** | Când antidiabeticele orale nu sunt suficiente |
| **Cetoacidoză diabetică (CAD)** | În perfuzie continuă (ATI/Urgențe) |
| **Nutriție parenterală** | Adăugată în pungă sau în paralel |

> 💡 **Aspect:** Insulina rapidă este întotdeauna **TRANSPARENTĂ și cristalină**. Dacă este tulbure, NU o folosiți.

> ⚠️ **IMPORTANT:** Este SINGURA insulină care poate fi administrată pe cale IV. Celelalte doar SC.

---

## Farmacocinetică (când acționează)

| Parametru | Cale SC | Cale IV |
|-----------|---------|---------|
| **Început acțiune** | 30-60 minute | Imediat |
| **Vârf acțiune** | 2-4 ore | 15-30 minute |
| **Durată** | 6-8 ore | 30-60 minute |

> 💡 **De aceea se administrează cu 30 min înainte de masă** — Pentru ca vârful să coincidă cu absorbția alimentelor.

---

## Scheme de corecție (cel mai frecvent pe secție)

**Exemplu de schemă de corecție tipică:**

| Glicemie (mg/dl) | Insulină SC |
|------------------|-------------|
| < 150 | 0 UI |
| 150-199 | 2 UI |
| 200-249 | 4 UI |
| 250-299 | 6 UI |
| 300-349 | 8 UI |
| 350-399 | 10 UI |
| ≥ 400 | 12 UI + anunțați medicul |

> ⚠️ **Această schemă este un EXEMPLU.** Fiecare pacient are schema sa individualizată. Urmați întotdeauna prescripția medicală.

---

## 📍 Zone de puncție subcutanată

**VITEZA DE ABSORBȚIE (de la cea mai rapidă la cea mai lentă):**

1. **ABDOMEN** (cea mai rapidă) — Ideal pentru corecții de hiperglicemie
2. **BRAȚE** (fața posterioară)
3. **COAPSE** (fața anterioară/laterală)
4. **FESIERI** (cea mai lentă) — Ideal pentru insulină bazală nocturnă

---

## 👐 Tehnică pas cu pas cu stiloul (pen)

| Pas | Acțiune |
|-----|---------|
| 1 | **Verificați glicemia** — Măsurați înainte de a pune insulină |
| 2 | **Verificați insulina** — Tip corect, transparentă, neexpirată |
| 3 | **Atașați ac nou** — Deșurubați capacul, înșurubați acul |
| 4 | **Purjați** — Marcați 2 UI, îndreptați în sus, apăsați. Trebuie să iasă picătură |
| 5 | **Marcați doza** — Rotiți selectorul până la doza prescrisă |
| 6 | **Selectați zona** — Alternați zonele pentru a evita lipodistrofia |
| 7 | **Pliu (dacă ac > 6mm)** — La copii/slabi întotdeauna |
| 8 | **Inserați acul** — 90° la adulți, 45° dacă este foarte slab |
| 9 | **Apăsați complet** — Până la fund |
| 10 | **Numărați 10 secunde** — Înainte de a retrage |
| 11 | **Retrageți acul** — Fără a freca |
| 12 | **Aruncați acul** — Nu reutilizați niciodată |

---

## 🆘 Managementul HIPOGLICEMIEI

| Glicemie | Clasificare | Simptome |
|----------|-------------|----------|
| **< 70 mg/dl** | Hipoglicemie | Tremur, transpirație, foame, anxietate |
| **< 54 mg/dl** | Clinic semnificativă | Confuzie, vedere încețoșată |
| **< 40 mg/dl** | Gravă | Pierderea conștienței, convulsii |

**PACIENT CONȘTIENT:**
- Dați 15-20 g de glucoză (suc, 3-4 tablete glucoză)
- Așteptați 15 minute
- Repetați glicemia
- Dacă ≥ 70: dați gustare dacă mai durează până la următoarea masă

**PACIENT INCONȘTIENT:**
- NU dați nimic pe gură
- Glucagon 1 mg IM/SC dacă nu există abord venos
- Dacă există abord IV: Glucoză 50% → 20-50 ml IV direct
- Anunțați medicul

---

## 💡 Trucuri de asistentă

> *"Transparent = rapidă — Dacă insulina este transparentă și cristalină, este rapidă. Dacă este tulbure/lăptoasă, este intermediară sau amestec."*

> *"Verifică întotdeauna tipul — Erorile de insulină sunt frecvente și periculoase. Citește numele complet."*

> *"Numără 10 secunde — Înainte de a retrage acul stiloului."*

> *"Rotește, rotește, rotește — Alternează întotdeauna zonele. Îngroșările alterează absorbția."*

> *"Abdomen pentru corecții — Când ai nevoie să acționeze rapid."*

> *"Glicemie înainte, întotdeauna — Nu pune niciodată insulină fără a ști glicemia actuală."*

> *"Dacă nu mănâncă, nu pune — Dacă pacientul este à jeun (nemâncat), consultă înainte."*

> *"Frigider, nu congelator — Insulina Se păstrează la frigider (2-8°C). Dacă îngheață, se strică."*
    `,
  },

  // --------------------------------------------------------------------------
  // 3. FUROSEMIDA (SEGURIL®)
  // --------------------------------------------------------------------------
  {
    id: "farm_furosemida",
    nameES: "Furosemida (Seguril®)",
    nameRO: "Furosemidă (Seguril®)",
    categoryES: "Diurético de Asa",
    categoryRO: "Diuretic de Ansă",
    descES: "Diurético potente de techo alto. Fundamental en Edema Agudo de Pulmón e Insuficiencia Cardíaca. Velocidad IV muy importante.",
    descRO: "Diuretic puternic. Fundamental în Edem Pulmonar Acut și Insuficiență Cardiacă. Viteza IV este foarte importantă.",
    contentES: `
## ¿Qué es y para qué se usa?

La furosemida es un **diurético de asa** muy potente. Actúa en el riñón aumentando la eliminación de agua y sodio a través de la orina.

| Uso común | Situaciones típicas |
|-----------|---------------------|
| **Edema por insuficiencia cardiaca** | Piernas hinchadas, disnea, congestión pulmonar |
| **Edema pulmonar agudo** | Urgencia. El paciente "se ahoga" |
| **Edema por cirrosis** | Ascitis, edemas en piernas |
| **Insuficiencia renal** | Para forzar diuresis |
| **Crisis hipertensiva** | Coadyuvante para bajar tensión |
| **Hiperpotasemia** | Para eliminar potasio |

---

## Presentaciones habituales

| Presentación | Contenido | Vía |
|--------------|-----------|-----|
| **Comprimidos** | 40 mg | Oral |
| **Ampollas 2 ml** | 20 mg (10 mg/ml) | IV / IM |
| **Ampollas 4 ml** | 40 mg (10 mg/ml) | IV / IM |
| **Ampollas 25 ml** | 250 mg (10 mg/ml) | IV (perfusión) |

---

## Farmacocinética

| Parámetro | Vía oral | Vía IV |
|-----------|----------|--------|
| **Inicio de acción** | 30-60 minutos | 5 minutos |
| **Pico de acción** | 1-2 horas | 30 minutos |
| **Duración** | 6-8 horas | 2 horas |

> 💡 **Por eso en urgencias se usa IV** — Efecto casi inmediato.

---

## Posología

### 🧑 ADULTOS

| Indicación | Dosis | Vía | Frecuencia |
|------------|-------|-----|------------|
| **Edema leve** | 20-40 mg | Oral | 1-2 veces/día |
| **Edema moderado** | 40-80 mg | Oral | 1-2 veces/día |
| **Edema agudo/EAP** | 40-80 mg | IV | Dosis única o repetir |
| **Edema refractario** | 80-160 mg | IV | Puede llegar a 200-400 mg |

### 👴 ANCIANOS

| Aspecto | Recomendación |
|---------|---------------|
| **Dosis inicial** | Empezar con dosis bajas (20 mg) |
| **Hipotensión ortostática** | Muy frecuente. Levantarse despacio |
| **Alteraciones electrolíticas** | Mayor riesgo. Controlar K+, Na+ |
| **Incontinencia** | Problema práctico. Considerar horario |

---

## ⛔ Contraindicaciones

| Situación | Por qué |
|-----------|---------|
| Alergia a furosemida o sulfamidas | Reacción cruzada |
| Hipovolemia/deshidratación grave | La empeoraría |
| Anuria (no orina nada) | No funcionará |
| Hipopotasemia grave (K+ < 3) | La agravaría |
| Hiponatremia grave | La agravaría |

---

## ⚠️ Efectos secundarios

| Efecto | Frecuencia | Qué observar | Qué hacer |
|--------|------------|--------------|-----------|
| **Hipopotasemia** | Muy común | K+ bajo, debilidad, calambres | Monitorizar K+. Suplementar |
| **Hiponatremia** | Común | Na+ bajo, confusión | Monitorizar Na+ |
| **Deshidratación** | Común | Sed, sequedad, hipotensión | Controlar balance hídrico |
| **Hipotensión** | Común | Mareo, síncope | Vigilar TA |
| **Ototoxicidad** | Rara (IV rápida) | Sordera, acúfenos | **Infundir lentamente** |

---

## 🩺 Administración IV

**Administración IV directa (dosis ≤ 40 mg):**

| Paso | Acción |
|------|--------|
| 1 | Comprobar ampolla |
| 2 | Cargar en jeringa |
| 3 | Administrar en **mínimo 1-2 minutos** |

**Administración IV directa (dosis > 40 mg):**

| Paso | Acción |
|------|--------|
| 1 | Diluir en 20-50 ml SF |
| 2 | Administrar a ritmo de **4 mg/minuto** máximo |
| 3 | Ejemplo: 80 mg → mínimo 20 minutos |

> ⚠️ **Velocidad máxima: 4 mg/minuto.** Infusiones más rápidas aumentan riesgo de **Ototoxicidad (sordera irreversible)** e hipotensión.

---

## Monitorización

| Parámetro | Frecuencia | Por qué |
|-----------|------------|---------|
| **Diuresis** | Cada turno | Ver si responde |
| **Peso diario** | Cada mañana | Mejor indicador (1 kg = 1 litro) |
| **Tensión arterial** | Antes y después IV | Detectar hipotensión |
| **Potasio (K+)** | Analítica periódica | Hipopotasemia frecuente |

---

## 🆘 Edema Agudo de Pulmón (EAP)

**Actuación típica:**
1. Sentar al paciente
2. Oxígeno a alto flujo
3. Furosemida 40-80 mg IV directo (en 2 min)
4. Morfina IV si mucha ansiedad/disnea
5. Nitroglicerina si TA alta
6. Monitorización continua

---

## 💡 Trucos de enfermera

> *"Por la mañana, no por la noche — El paciente necesita dormir."*

> *"Pesa cada mañana — 1 kg menos = 1 litro eliminado."*

> *"Siempre con orinal cerca — En 15-20 minutos va a tener muchas ganas de orinar."*

> *"Levantarse despacio — Hipotensión ortostática."*

> *"Vigilar el potasio — La hipopotasemia es casi segura."*

> *"Si toma digoxina: K+ sagrado — Hipopotasemia + digoxina = arritmias."*

> *"IV lenta = menos problemas — 80 mg en 20 minutos, no en 2."*
    `,
    contentRO: `
## Ce este și pentru ce se folosește?

Furosemida este un **diuretic de ansă** foarte puternic. Acționează la nivelul rinichiului crescând eliminarea de apă și sodiu prin urină.

| Utilizare comună | Situații tipice |
|------------------|-----------------|
| **Edem prin insuficiență cardiacă** | Picioare umflate, dispnee, congestie pulmonară |
| **Edem pulmonar acut** | Urgență. Pacientul "se sufocă" |
| **Edem prin ciroză** | Ascită, edeme la picioare |
| **Insuficiență renală** | Pentru a forța diureza |
| **Criză hipertensivă** | Adjuvant pentru scăderea tensiunii |
| **Hiperpotasemie** | Pentru a elimina potasiu |

---

## Prezentări obișnuite

| Prezentare | Conținut | Cale |
|------------|----------|------|
| **Comprimate** | 40 mg | Oral |
| **Fiole 2 ml** | 20 mg (10 mg/ml) | IV / IM |
| **Fiole 4 ml** | 40 mg (10 mg/ml) | IV / IM |
| **Fiole 25 ml** | 250 mg (10 mg/ml) | IV (perfuzie) |

---

## Farmacocinetică

| Parametru | Cale orală | Cale IV |
|-----------|------------|---------|
| **Început acțiune** | 30-60 minute | 5 minute |
| **Vârf acțiune** | 1-2 ore | 30 minute |
| **Durată** | 6-8 ore | 2 ore |

> 💡 **De aceea în urgențe se folosește IV** — Efect aproape imediat.

---

## Posologie

### 🧑 ADULȚI

| Indicație | Doză | Cale | Frecvență |
|-----------|------|------|-----------|
| **Edem ușor** | 20-40 mg | Oral | 1-2 ori/zi |
| **Edem moderat** | 40-80 mg | Oral | 1-2 ori/zi |
| **Edem acut/EPA** | 40-80 mg | IV | Doză unică sau repetare |
| **Edem refractar** | 80-160 mg | IV | Poate ajunge la 200-400 mg |

### 👴 VÂRSTNICI

| Aspect | Recomandare |
|--------|-------------|
| **Doză inițială** | Începeți cu doze mici (20 mg) |
| **Hipotensiune ortostatică** | Foarte frecventă. Ridicare lentă |
| **Alterări electrolitice** | Risc mai mare. Controlați K+, Na+ |
| **Incontinență** | Problemă practică. Luați în considerare orarul |

---

## ⛔ Contraindicații

| Situație | De ce |
|----------|-------|
| Alergie la furosemidă sau sulfamide | Reacție încrucișată |
| Hipovolemie/deshidratare gravă | O înrăutățește |
| Anurie (nu urinează deloc) | Nu va funcționa |
| Hipopotasemie gravă (K+ < 3) | O agravează |
| Hiponatremie gravă | O agravează |

---

## ⚠️ Efecte secundare

| Efect | Frecvență | Ce să observați | Ce să faceți |
|-------|-----------|-----------------|--------------|
| **Hipopotasemie** | Foarte comună | K+ scăzut, slăbiciune, crampe | Monitorizați K+. Suplimentați |
| **Hiponatremie** | Comună | Na+ scăzut, confuzie | Monitorizați Na+ |
| **Deshidratare** | Comună | Sete, uscăciune, hipotensiune | Controlați bilanțul hidric |
| **Hipotensiune** | Comună | Amețeală, sincopă | Monitorizați TA |
| **Ototoxicitate** | Rară (IV rapidă) | Surditate, acufene | **Infuzați lent** |

---

## 🩺 Administrare IV

**Administrare IV directă (doză ≤ 40 mg):**

| Pas | Acțiune |
|-----|---------|
| 1 | Verificați fiola |
| 2 | Încărcați în seringă |
| 3 | Administrați în **minim 1-2 minute** |

**Administrare IV directă (doză > 40 mg):**

| Pas | Acțiune |
|-----|---------|
| 1 | Diluați în 20-50 ml SF |
| 2 | Administrați la ritm de **4 mg/minut** maxim |
| 3 | Exemplu: 80 mg → minim 20 minute |

> ⚠️ **Viteză maximă: 4 mg/minut.** Infuziile mai rapide cresc riscul de **Ototoxicitate (surditate ireversibilă)** și hipotensiune.

---

## Monitorizare

| Parametru | Frecvență | De ce |
|-----------|-----------|-------|
| **Diureză** | Fiecare tură | Să vedem dacă răspunde |
| **Greutate zilnică** | În fiecare dimineață | Cel mai bun indicator (1 kg = 1 litru) |
| **Tensiune arterială** | Înainte și după IV | Detectare hipotensiune |
| **Potasiu (K+)** | Analize periodice | Hipopotasemie frecventă |

---

## 🆘 Edem Pulmonar Acut (EPA)

**Acțiune tipică:**
1. Așezați pacientul
2. Oxigen la debit mare
3. Furosemidă 40-80 mg IV direct (în 2 min)
4. Morfină IV dacă există multă anxietate/dispnee
5. Nitroglicerină dacă TA este mare
6. Monitorizare continuă

---

## 💡 Trucuri de asistentă

> *"Dimineața, nu seara — Pacientul are nevoie să doarmă."*

> *"Cântărire în fiecare dimineață — 1 kg mai puțin = 1 litru eliminat."*

> *"Întotdeauna cu urinarul aproape — În 15-20 minute va avea mare nevoie să urineze."*

> *"Ridicare lentă — Hipotensiune ortostatică."*

> *"Monitorizează potasiul — Hipopotasemia este aproape sigură."*

> *"Dacă ia digoxină: K+ sfânt — Hipopotasemie + digoxină = aritmii."*

> *"IV lentă = mai puține probleme — 80 mg în 20 minute, nu în 2."*
    `,
  },

  // --------------------------------------------------------------------------
  // 4. PARACETAMOL IV (PERFALGAN®)
  // --------------------------------------------------------------------------
  {
    id: "farm_paracetamol_iv",
    nameES: "Paracetamol IV (Perfalgan®)",
    nameRO: "Paracetamol IV (Perfalgan®)",
    categoryES: "Analgésico / Antipirético",
    categoryRO: "Analgezic / Antipiretic",
    descES: "Analgésico y antipirético de primera línea. La presentación IV se usa cuando el paciente no puede tomar oral. Viene listo para usar.",
    descRO: "Analgezic și antipiretic de primă linie. Prezentarea IV se folosește când pacientul nu poate lua oral. Vine gata de utilizare.",
    contentES: `
## ¿Qué es y para qué se usa?

El paracetamol (también llamado acetaminofén) es un **analgésico y antipirético**. Es el fármaco de primera línea para dolor leve-moderado y fiebre.

| Uso común | Situaciones típicas |
|-----------|---------------------|
| **Dolor leve-moderado** | Postoperatorio, dolor agudo, cefalea |
| **Fiebre** | Primera opción antipirética |
| **Coadyuvante en dolor intenso** | Combinado con opioides (ahorra dosis) |
| **Paciente en ayunas** | Pre/postoperatorio, vómitos |
| **Paciente inconsciente** | UCI, sedados |

---

## Presentaciones

| Presentación | Contenido | Vía |
|--------------|-----------|-----|
| **Frasco 100 ml** | 1000 mg (10 mg/ml) | IV |
| **Frasco 50 ml** | 500 mg (10 mg/ml) | IV (pediátrico) |

> 💡 **Aspecto:** El paracetamol IV es una solución **transparente e incolora**. Si está turbia, NO usar.

---

## Farmacocinética

| Parámetro | Vía IV | Vía oral |
|-----------|--------|----------|
| **Inicio de acción** | 5-10 minutos | 30-60 minutos |
| **Pico analgésico** | 1 hora | 1-2 horas |
| **Pico antipirético** | 2-3 horas | 3-4 horas |
| **Duración** | 4-6 horas | 4-6 horas |

---

## Posología

### 👶 PEDIATRÍA

| Edad/Peso | Dosis única | Frecuencia | Máximo diario |
|-----------|-------------|------------|---------------|
| **Neonatos término** | 10 mg/kg | Cada 6-8 h | 30 mg/kg/día |
| **Lactantes (1-12 meses)** | 10-15 mg/kg | Cada 4-6 h | 60 mg/kg/día |
| **Niños 1-12 años** | 15 mg/kg | Cada 4-6 h | 60 mg/kg/día (máx 2-3 g) |
| **Adolescentes > 50 kg** | 1 g | Cada 4-6 h | 4 g/día |

> ⚠️ **IMPORTANTE en pediatría:** Usar el frasco de 50 ml cuando sea posible para evitar errores.

### 🧑 ADULTOS (> 50 kg)

| Indicación | Dosis | Frecuencia | Máximo diario |
|------------|-------|------------|---------------|
| **Dolor/Fiebre estándar** | 1 g (100 ml) | Cada 6 h | 4 g |
| **Dolor moderado** | 1 g | Cada 4 h | 4 g |

### 🧑 ADULTOS CON BAJO PESO (< 50 kg)

| Peso | Dosis | Máximo diario |
|------|-------|---------------|
| **33-50 kg** | 15 mg/kg | 60 mg/kg (máx 3 g) |

### 👴 ANCIANOS

| Aspecto | Recomendación |
|---------|---------------|
| **Peso** | Pesar siempre. Muchos pesan < 50 kg |
| **Función hepática** | Reducir dosis si hepatopatía |
| **Dosis máxima** | Considerar 3 g/día máximo en frágiles |
| **Alcoholismo** | Máximo 2 g/día |

---

## ⛔ Contraindicaciones

| Situación | Por qué |
|-----------|---------|
| **Alergia a paracetamol** | Reacción alérgica |
| **Insuficiencia hepática grave** | Hepatotoxicidad |
| **Hepatitis aguda** | Daño hepático adicional |
| **Alcoholismo activo grave** | ↑↑ riesgo hepatotoxicidad |

---

## ⚠️ Efectos secundarios

| Efecto | Frecuencia | Qué observar |
|--------|------------|--------------|
| **Hepatotoxicidad** | Rara (sobredosis) | Ictericia, dolor abdominal |
| **Hipotensión** | Poco frecuente (IV rápida) | ↓TA durante infusión |
| **Reacción alérgica** | Muy rara | Urticaria, prurito |

> 🔴 **SOBREDOSIS:** Dosis > 150 mg/kg causa daño hepático grave. Antídoto: N-acetilcisteína IV.

---

## 🩺 Administración

**El frasco viene LISTO PARA USAR. NO necesita dilución adicional.**

| Paso | Acción |
|------|--------|
| 1 | Verificar los 5 correctos |
| 2 | Comprobar frasco (aspecto transparente, sin partículas) |
| 3 | Conectar sistema de goteo directamente al frasco |
| 4 | Purgar el sistema |
| 5 | Conectar a vía venosa |
| 6 | **Infundir en 15 minutos** |
| 7 | Vigilar TA durante la infusión |

> ⚠️ **Tiempo de infusión:** Mínimo 15 minutos. Más rápido puede causar hipotensión.

---

## 🔄 Interacciones importantes

| Medicamento | Efecto | Acción |
|-------------|--------|--------|
| **Anticoagulantes orales (Sintrom)** | ↑ efecto anticoagulante | Vigilar INR si uso prolongado |
| **Alcohol** | ↑↑ hepatotoxicidad | Evitar consumo |
| **Isoniazida** | ↑ hepatotoxicidad | Monitorizar función hepática |

---

## 🤰 Embarazo y Lactancia

| Situación | Recomendación |
|-----------|---------------|
| **Embarazo** | Seguro. Analgésico/antipirético de elección |
| **Lactancia** | Compatible |

> ✅ El paracetamol es el analgésico MÁS SEGURO en embarazo y lactancia.

---

## 💡 Trucos de enfermera

> *"15 minutos mínimo — La infusión rápida puede bajar la tensión."*

> *"Pesar al paciente — Especialmente ancianos, mujeres pequeñas. Muchos no llegan a 50 kg."*

> *"Alternancia inteligente — Paracetamol cada 6h + metamizol cada 6h (alternando cada 3h) = analgesia continua."*

> *"Buscar el paracetamol oculto — Revisa otros medicamentos que contengan paracetamol (antigripales)."*

> *"Frasco abierto: 24 horas — Una vez perforado, usar en 24 horas."*

> *"No es antiinflamatorio — Para inflamación, necesitará AINE."*
    `,
    contentRO: `
## Ce este și pentru ce se folosește?

Paracetamolul (numit și acetaminofen) este un **analgezic și antipiretic**. Este medicamentul de primă linie pentru durere ușoară-moderată și febră.

| Utilizare comună | Situații tipice |
|------------------|-----------------|
| **Durere ușoară-moderată** | Postoperator, durere acută, cefalee |
| **Febră** | Prima opțiune antipiretică |
| **Adjuvant în durere intensă** | Combinat cu opioide (economisește doza) |
| **Pacient à jeun (nemâncat)** | Pre/postoperator, vărsături |
| **Pacient inconștient** | ATI, sedați |

---

## Prezentări

| Prezentare | Conținut | Cale |
|------------|----------|------|
| **Flacon 100 ml** | 1000 mg (10 mg/ml) | IV |
| **Flacon 50 ml** | 500 mg (10 mg/ml) | IV (pediatic) |

> 💡 **Aspect:** Paracetamolul IV este o soluție **transparentă și incoloră**. Dacă este tulbure, NU o folosiți.

---

## Farmacocinetică

| Parametru | Cale IV | Cale orală |
|-----------|---------|------------|
| **Început acțiune** | 5-10 minute | 30-60 minute |
| **Vârf analgezic** | 1 oră | 1-2 ore |
| **Vârf antipiretic** | 2-3 ore | 3-4 ore |
| **Durată** | 4-6 ore | 4-6 ore |

---

## Posologie

### 👶 PEDIATRIE

| Vârstă/Greutate | Doză unică | Frecvență | Maxim zilnic |
|-----------------|-------------|-----------|--------------|
| **Nou-născuți la termen** | 10 mg/kg | La fiecare 6-8 h | 30 mg/kg/zi |
| **Sugari (1-12 luni)** | 10-15 mg/kg | La fiecare 4-6 h | 60 mg/kg/zi |
| **Copii 1-12 ani** | 15 mg/kg | La fiecare 4-6 h | 60 mg/kg/zi (max 2-3 g) |
| **Adolescenți > 50 kg** | 1 g | La fiecare 4-6 h | 4 g/zi |

> ⚠️ **IMPORTANT în pediatrie:** Folosiți flaconul de 50 ml când este posibil pentru a evita erorile.

### 🧑 ADULȚI (> 50 kg)

| Indicație | Doză | Frecvență | Maxim zilnic |
|-----------|------|-----------|--------------|
| **Durere/Febră standard** | 1 g (100 ml) | La fiecare 6 h | 4 g |
| **Durere moderată** | 1 g | La fiecare 4 h | 4 g |

### 🧑 ADULȚI CU GREUTATE MICĂ (< 50 kg)

| Greutate | Doză | Maxim zilnic |
|----------|------|--------------|
| **33-50 kg** | 15 mg/kg | 60 mg/kg (max 3 g) |

### 👴 VÂRSTNICI

| Aspect | Recomandare |
|--------|-------------|
| **Greutate** | Cântăriți întotdeauna. Mulți cântăresc < 50 kg |
| **Funcție hepatică** | Reduceți doza dacă există hepatopatie |
| **Doză maximă** | Considerați 3 g/zi maxim la pacienții fragili |
| **Alcoolism** | Maxim 2 g/zi |

---

## ⛔ Contraindicații

| Situație | De ce |
|----------|-------|
| **Alergie la paracetamol** | Reacție alergică |
| **Insuficiență hepatică gravă** | Hepatotoxicitate |
| **Hepatită acută** | Leziune hepatică suplimentară |
| **Alcoolism activ grav** | ↑↑ risc hepatotoxicitate |

---

## ⚠️ Efecte secundare

| Efect | Frecvență | Ce să observați |
|-------|-----------|-----------------|
| **Hepatotoxicitate** | Rară (supradozaj) | Icter, durere abdominală |
| **Hipotensiune** | Puțin frecventă (IV rapidă) | ↓TA în timpul perfuziei |
| **Reacție alergică** | Foarte rară | Urticarie, prurit |

> 🔴 **SUPRADOZAJ:** Doza > 150 mg/kg cauzează leziuni hepatice grave. Antidot: N-acetilcisteină IV.

---

## 🩺 Administrare

**Flaconul vine GATA DE UTILIZARE. NU necesită diluție suplimentară.**

| Pas | Acțiune |
|-----|---------|
| 1 | Verificați cele 5 reguli |
| 2 | Verificați flaconul (aspect transparent, fără particule) |
| 3 | Conectați sistemul de picurare direct la flacon |
| 4 | Purjați sistemul |
| 5 | Conectați la calea venoasă |
| 6 | **Infuzați în 15 minute** |
| 7 | Monitorizați TA în timpul perfuziei |

> ⚠️ **Timp de perfuzie:** Minim 15 minute. Mai rapid poate cauza hipotensiune.

---

## 🔄 Interacțiuni importante

| Medicament | Efect | Acțiune |
|------------|-------|---------|
| **Anticoagulante orale (Sintrom)** | ↑ efect anticoagulant | Monitorizați INR la utilizare prelungită |
| **Alcool** | ↑↑ hepatotoxicitate | Evitați consumul |
| **Izoniazidă** | ↑ hepatotoxicitate | Monitorizați funcția hepatică |

---

## 🤰 Sarcină și Alăptare

| Situație | Recomandare |
|----------|-------------|
| **Sarcină** | Sigur. Analgezic/antipiretic de alegere |
| **Alăptare** | Compatibil |

> ✅ Paracetamolul este cel mai SIGUR analgezic în sarcină și alăptare.

---

## 💡 Trucuri de asistentă

> *"15 minute minim — Perfuzia rapidă poate scădea tensiunea."*

> *"Cântărește pacientul — În special vârstnici, femei mici. Mulți nu ajung la 50 kg."*

> *"Alternanță inteligentă — Paracetamol la fiecare 6h + metamizol la fiecare 6h (alternând la fiecare 3h) = analgezie continuă."*

> *"Caută paracetamolul ascuns — Verifică alte medicamente care conțin paracetamol (antigripale)."*

> *"Flacon deschis: 24 ore — Odată perforat, utilizați în 24 ore."*

> *"Nu este antiinflamator — Pentru inflamație, va fi nevoie de AINS."*
    `,
  },

  // --------------------------------------------------------------------------
  // 5. OMEPRAZOL IV (LOSEC®)
  // --------------------------------------------------------------------------
  {
    id: "farm_omeprazol_iv",
    nameES: "Omeprazol IV (Losec®)",
    nameRO: "Omeprazol IV (Losec®)",
    categoryES: "Inhibidor Bomba de Protones (IBP)",
    categoryRO: "Inhibitor Pompă de Protoni (IPP)",
    descES: "Reduce la producción de ácido gástrico. En hemorragia digestiva: bolo 80 mg + perfusión 8 mg/h. Proteger de la luz.",
    descRO: "Reduce producția de acid gastric. În hemoragie digestivă: bolus 80 mg + perfuzie 8 mg/h. Protejați de lumină.",
    contentES: `
## ¿Qué es y para qué se usa?

El omeprazol es un **inhibidor de la bomba de protones (IBP)**. Reduce la producción de ácido en el estómago.

| Uso común | Situaciones típicas |
|-----------|---------------------|
| **Hemorragia digestiva alta** | Úlcera sangrante, varices esofágicas |
| **Profilaxis úlcera de estrés** | UCI, pacientes críticos |
| **Esofagitis grave** | Cuando no tolera oral |
| **Preoperatorio** | Reducir riesgo de aspiración ácida |

---

## Farmacocinética

| Parámetro | Valor |
|-----------|-------|
| **Inicio de acción** | 1 hora (efecto máximo a las 2h) |
| **Duración** | 24 horas |

> 💡 **¿Por qué dura 24h si la vida media es corta?** Porque se une irreversiblemente a la bomba de protones.

---

## Posología

### 🧑 ADULTOS

| Indicación | Dosis | Frecuencia |
|------------|-------|------------|
| **Profilaxis úlcera de estrés** | 40 mg | Cada 24 h |
| **Hemorragia digestiva (bolo)** | 80 mg | Dosis única |
| **Hemorragia digestiva (perfusión)** | 8 mg/h | Continua × 72 h |
| **Esofagitis erosiva** | 40 mg | Cada 24 h |

### 🔬 AJUSTES

| Situación | Ajuste |
|-----------|--------|
| **Insuficiencia renal** | No requiere ajuste |
| **Insuficiencia hepática grave** | Máximo 20 mg/día |

---

## ⛔ Contraindicaciones

| Situación | Por qué |
|-----------|---------|
| **Alergia a omeprazol u otros IBP** | Reacción cruzada |
| **Uso con nelfinavir** | Interacción grave (VIH) |

---

## ⚠️ Efectos secundarios

| Efecto | Frecuencia | Qué observar |
|--------|------------|--------------|
| **Cefalea** | Común | Dolor de cabeza |
| **Diarrea** | Común | Descartar C. difficile si persiste |
| **Hipomagnesemia** | Uso prolongado | Temblor, arritmias |
| **Déficit B12** | Uso prolongado | Anemia, neuropatía |
| **Infección por C. difficile** | Poco frecuente | Diarrea grave, fiebre |

---

## 🩺 Preparación y administración

### RECONSTITUCIÓN

| Paso | Acción |
|------|--------|
| 1 | Cargar 10 ml de SF o disolvente específico |
| 2 | Inyectar en el vial de omeprazol |
| 3 | Agitar suavemente (no agitar fuerte) |
| 4 | Obtener solución transparente-amarillenta |
| 5 | Usar inmediatamente o en las siguientes 4 horas |

> ⚠️ **IMPORTANTE:** El omeprazol es **FOTOSENSIBLE**. Proteger de la luz durante la infusión.

### IV DIRECTA (bolo lento)

- Reconstituir con 10 ml
- Administrar en **mínimo 3 minutos**

### PERFUSIÓN (intermitente)

- Reconstituir + diluir en 100 ml SF
- Infundir en 20-30 minutos
- **Proteger de la luz** (bolsa opaca o papel aluminio)

### PERFUSIÓN CONTINUA (hemorragia digestiva)

**Protocolo típico:**
1. Bolo inicial: 80 mg IV (2 viales)
2. Seguido de: 8 mg/h en perfusión continua × 72 horas

**Preparación:**
- 200 mg (5 viales) en 500 ml SF = 0.4 mg/ml
- Ritmo: 20 ml/h = 8 mg/h

---

## Estabilidad

| Situación | Tiempo |
|-----------|--------|
| **Vial sin abrir** | Según fecha caducidad |
| **Solución reconstituida** | 4 horas |
| **Diluido en SF** | 4 horas protegido de luz |

---

## 🔄 Interacciones importantes

| Medicamento | Efecto | Acción |
|-------------|--------|--------|
| **Clopidogrel** | ↓ efecto antiagregante | Evitar. Usar pantoprazol |
| **Metotrexato** | ↑ niveles | Suspender omeprazol temporalmente |
| **Digoxina** | ↑ absorción | Vigilar toxicidad |

---

## 💡 Trucos de enfermera

> *"Proteger de la luz — Cubre la bolsa con papel de aluminio."*

> *"No agitar fuerte — Si haces espuma, espera a que desaparezca."*

> *"Usar rápido — Una vez preparado, 4 horas de estabilidad."*

> *"Si tiene clopidogrel, avisa — El médico puede preferir pantoprazol."*

> *"En hemorragia: dosis altas — 80 mg de entrada + 8 mg/h."*

> *"No es para dolor — Protege, pero no alivia síntomas agudos."*
    `,
    contentRO: `
## Ce este și pentru ce se folosește?

Omeprazolul este un **inhibitor al pompei de protoni (IPP)**. Reduce producția de acid în stomac.

| Utilizare comună | Situații tipice |
|------------------|-----------------|
| **Hemoragie digestivă superioară** | Ulcer sângerând, varice esofagiene |
| **Profilaxie ulcer de stres** | ATI, pacienți critici |
| **Esofagită gravă** | Când nu tolerează oral |
| **Preoperator** | Reducerea riscului de aspirație acidă |

---

## Farmacocinetică

| Parametru | Valoare |
|-----------|---------|
| **Început acțiune** | 1 oră (efect maxim la 2h) |
| **Durată** | 24 ore |

> 💡 **De ce durează 24h dacă timpul de înjumătățire este scurt?** Pentru că se leagă ireversibil de pompa de protoni.

---

## Posologie

### 🧑 ADULȚI

| Indicație | Doză | Frecvență |
|-----------|------|-----------|
| **Profilaxie ulcer de stres** | 40 mg | La fiecare 24 h |
| **Hemoragie digestivă (bolus)** | 80 mg | Doză unică |
| **Hemoragie digestivă (perfuzie)** | 8 mg/h | Continuă × 72 h |
| **Esofagită erozivă** | 40 mg | La fiecare 24 h |

### 🔬 AJUSTĂRI

| Situație | Ajustare |
|----------|----------|
| **Insuficiență renală** | Nu necesită ajustare |
| **Insuficiență hepatică gravă** | Maxim 20 mg/zi |

---

## ⛔ Contraindicații

| Situație | De ce |
|----------|-------|
| **Alergie la omeprazol sau alți IPP** | Reacție încrucișată |
| **Utilizare cu nelfinavir** | Interacțiune gravă (HIV) |

---

## ⚠️ Efecte secundare

| Efect | Frecvență | Ce să observați |
|-------|-----------|-----------------|
| **Cefalee** | Comună | Durere de cap |
| **Diaree** | Comună | Excludeți C. difficile dacă persistă |
| **Hipomagneziemie** | Utilizare prelungită | Tremur, aritmii |
| **Deficit B12** | Utilizare prelungită | Anemie, neuropatie |
| **Infecție cu C. difficile** | Puțin frecventă | Diaree gravă, febră |

---

## 🩺 Preparare și administrare

### RECONSTITUIRE

| Pas | Acțiune |
|-----|---------|
| 1 | Încărcați 10 ml de SF sau solvent specific |
| 2 | Injectați în flaconul de omeprazol |
| 3 | Agitați ușor (nu agitați puternic) |
| 4 | Obțineți soluție transparentă-gălbuie |
| 5 | Utilizați imediat sau în următoarele 4 ore |

> ⚠️ **IMPORTANT:** Omeprazolul este **FOTOSENSIBIL**. Protejați de lumină în timpul perfuziei.

### IV DIRECTĂ (bolus lent)

- Reconstituiți cu 10 ml
- Administrați în **minim 3 minute**

### PERFUZIE (intermitentă)

- Reconstituiți + diluați în 100 ml SF
- Infuzați în 20-30 minute
- **Protejați de lumină** (pungă opacă sau folie de aluminiu)

### PERFUZIE CONTINUĂ (hemoragie digestivă)

**Protocol tipic:**
1. Bolus inițial: 80 mg IV (2 flacoane)
2. Urmat de: 8 mg/h în perfuzie continuă × 72 ore

**Preparare:**
- 200 mg (5 flacoane) în 500 ml SF = 0.4 mg/ml
- Ritm: 20 ml/h = 8 mg/h

---

## Stabilitate

| Situație | Timp |
|----------|------|
| **Flacon nedeschis** | Conform data expirării |
| **Soluție reconstituită** | 4 ore |
| **Diluat în SF** | 4 ore protejat de lumină |

---

## 🔄 Interacțiuni importante

| Medicament | Efect | Acțiune |
|------------|-------|---------|
| **Clopidogrel** | ↓ efect antiagregant | Evitați. Utilizați pantoprazol |
| **Metotrexat** | ↑ niveluri | Suspendați omeprazol temporar |
| **Digoxină** | ↑ absorbție | Monitorizați toxicitatea |

---

## 💡 Trucuri de asistentă

> *"Protejează de lumină — Acoperă punga cu folie de aluminiu."*

> *"Nu agita puternic — Dacă faci spumă, așteaptă să dispară."*

> *"Folosește rapid — Odată preparat, 4 ore de stabilitate."*

> *"Dacă ia clopidogrel, anunță — Medicul poate prefera pantoprazol."*

> *"În hemoragie: doze mari — 80 mg de intrare + 8 mg/h."*

> *"Nu este pentru durere — Protejează, dar nu ameliorează simptomele acute."*
    `,
  },

  // --------------------------------------------------------------------------
  // 6. ONDANSETRÓN (ZOFRAN®)
  // --------------------------------------------------------------------------
  {
    id: "farm_ondansetron",
    nameES: "Ondansetrón (Zofran®)",
    nameRO: "Ondansetron (Zofran®)",
    categoryES: "Antiemético",
    categoryRO: "Antiemetic",
    descES: "Antiemético muy eficaz. Antagonista 5-HT3. Usado en náuseas postoperatorias, quimioterapia y gastroenteritis. Precaución con QT largo.",
    descRO: "Antiemetic foarte eficient. Antagonist 5-HT3. Folosit în greață postoperatorie, chimioterapie și gastroenterită. Precauție cu QT lung.",
    contentES: `
## ¿Qué es y para qué se usa?

El ondansetrón es un **antiemético** (contra las náuseas y vómitos). Es un antagonista de los receptores 5-HT3 de serotonina. Muy eficaz y muy usado en hospitales.

| Uso común | Situaciones típicas |
|-----------|---------------------|
| **Náuseas por quimioterapia** | Prevención y tratamiento |
| **Náuseas postoperatorias (NVPO)** | Muy frecuente |
| **Náuseas por radioterapia** | Tratamientos abdominales |
| **Gastroenteritis aguda** | En urgencias pediátricas |
| **Náuseas por opioides** | Efecto secundario frecuente |

---

## Presentaciones

| Presentación | Contenido | Vía |
|--------------|-----------|-----|
| **Ampolla 2 ml** | 4 mg (2 mg/ml) | IV / IM |
| **Ampolla 4 ml** | 8 mg (2 mg/ml) | IV / IM |
| **Comprimidos** | 4, 8 mg | Oral |
| **Bucodispersables (Zydis)** | 4, 8 mg | Sublingual |

---

## Farmacocinética

| Parámetro | Vía IV | Vía oral |
|-----------|--------|----------|
| **Inicio de acción** | 5-10 minutos | 30 minutos |
| **Pico** | 10-20 minutos | 1-2 horas |
| **Duración** | 4-8 horas | 4-8 horas |

---

## Posología

### 👶 PEDIATRÍA

| Edad/Peso | Indicación | Dosis |
|-----------|------------|-------|
| **6 meses - 2 años** | Gastroenteritis | 2 mg (dosis única) |
| **> 2 años (< 40 kg)** | NVPO | 0.1 mg/kg (máx 4 mg) |
| **> 2 años (< 40 kg)** | Quimioterapia | 0.15 mg/kg |
| **> 40 kg** | Todas | Dosis de adulto |

> ⚠️ **Gastroenteritis pediátrica:** Una dosis única suele ser suficiente.

### 🧑 ADULTOS

| Indicación | Dosis | Vía | Frecuencia |
|------------|-------|-----|------------|
| **NVPO (prevención)** | 4 mg | IV | Dosis única antes de inducción |
| **NVPO (tratamiento)** | 4 mg | IV | Puede repetir cada 8h |
| **Quimioterapia** | 8 mg | IV | 30 min antes, luego cada 8h |
| **Náuseas por opioides** | 4 mg | IV | Cada 8 h si precisa |

**Dosis máxima:** 32 mg/día (16 mg por dosis única)

### 👴 ANCIANOS

| Aspecto | Recomendación |
|---------|---------------|
| **Precaución** | Mayor riesgo de prolongación QT |
| **ECG** | Considerar en pacientes con cardiopatía |

---

## ⛔ Contraindicaciones

| Situación | Por qué |
|-----------|---------|
| **Alergia a ondansetrón** | Reacción alérgica |
| **Uso con apomorfina** | Hipotensión grave |
| **QT largo congénito** | Riesgo de arritmias graves |

---

## ⚠️ Efectos secundarios

| Efecto | Frecuencia | Qué observar |
|--------|------------|--------------|
| **Cefalea** | Muy común | Dolor de cabeza (transitorio) |
| **Estreñimiento** | Común | No deposiciones |
| **Prolongación QT** | Poco frecuente | Arritmias |
| **Síndrome serotoninérgico** | Muy raro | Confusión, temblor, fiebre |

> ⚠️ **Prolongación QT:** No dar más de 16 mg en dosis única. Precaución con otros fármacos que prolongan QT.

---

## 🩺 Administración

### VÍA IV DIRECTA (la más común)

| Paso | Acción |
|------|--------|
| 1 | Cargar la ampolla en jeringa |
| 2 | Puede diluir hasta 10 ml con SF (opcional) |
| 3 | Administrar en **mínimo 30 segundos** (dosis ≤ 4 mg) |
| 4 | Para dosis mayores: mínimo 2-5 minutos |

### VÍA ORAL/SUBLINGUAL (bucodispersables)

- Colocar sobre la lengua
- Se disuelve en segundos
- No necesita agua
- Ideal para pacientes con náuseas

---

## 🔄 Interacciones importantes

| Medicamento | Efecto | Acción |
|-------------|--------|--------|
| **Apomorfina** | CONTRAINDICADO | Hipotensión grave |
| **Fármacos que prolongan QT** | ↑ riesgo arritmias | ECG. Evitar si posible |
| **Tramadol** | ↓ efecto analgésico | Vigilar dolor |
| **ISRS/ISRSN** | Riesgo síndrome serotoninérgico | Vigilar síntomas |

**Fármacos que prolongan QT:**
- Amiodarona, sotalol
- Haloperidol, quetiapina
- Azitromicina, levofloxacino
- Citalopram, escitalopram

---

## 🤰 Embarazo y Lactancia

| Situación | Recomendación |
|-----------|---------------|
| **Embarazo 1er trimestre** | Uso controvertido (riesgo leve fisuras orales) |
| **Embarazo 2º-3er trimestre** | Más seguro. Segunda línea |
| **Primera línea** | Doxilamina + piridoxina, metoclopramida |
| **Lactancia** | Usar con precaución |

---

## 💡 Trucos de enfermera

> *"Lento pero no tanto — 30 segundos para 4 mg es suficiente."*

> *"Antes de que vomite — Es más eficaz como prevención que como tratamiento."*

> *"Dosis única en gastroenteritis — Normalmente basta una dosis."*

> *"Bucodispersables son mágicos — Para el paciente nauseoso que no quiere tragar."*

> *"No es antiemético universal — No funciona tan bien para mareo por movimiento."*

> *"Combinación ganadora — Ondansetrón + dexametasona en quimioterapia."*

> *"Estreñimiento es casi seguro — Avisa al paciente."*

> *"Máximo 16 mg de golpe — Riesgo QT."*
    `,
    contentRO: `
## Ce este și pentru ce se folosește?

Ondansetronul este un **antiemetic** (împotriva greței și vărsăturilor). Este un antagonist al receptorilor 5-HT3 de serotonină. Foarte eficient și foarte utilizat în spitale.

| Utilizare comună | Situații tipice |
|------------------|-----------------|
| **Greață prin chimioterapie** | Prevenție și tratament |
| **Greață postoperatorie (NVPO)** | Foarte frecventă |
| **Greață prin radioterapie** | Tratamente abdominale |
| **Gastroenterită acută** | În urgențe pediatrice |
| **Greață prin opioide** | Efect secundar frecvent |

---

## Prezentări

| Prezentare | Conținut | Cale |
|------------|----------|------|
| **Fiolă 2 ml** | 4 mg (2 mg/ml) | IV / IM |
| **Fiolă 4 ml** | 8 mg (2 mg/ml) | IV / IM |
| **Comprimate** | 4, 8 mg | Oral |
| **Bucodispersabile (Zydis)** | 4, 8 mg | Sublingual |

---

## Farmacocinetică

| Parametru | Cale IV | Cale orală |
|-----------|---------|------------|
| **Început acțiune** | 5-10 minute | 30 minute |
| **Vârf** | 10-20 minute | 1-2 ore |
| **Durată** | 4-8 ore | 4-8 ore |

---

## Posologie

### 👶 PEDIATRIE

| Vârstă/Greutate | Indicație | Doză |
|-----------------|-----------|------|
| **6 luni - 2 ani** | Gastroenterită | 2 mg (doză unică) |
| **> 2 ani (< 40 kg)** | NVPO | 0.1 mg/kg (max 4 mg) |
| **> 2 ani (< 40 kg)** | Chimioterapie | 0.15 mg/kg |
| **> 40 kg** | Toate | Doză de adult |

> ⚠️ **Gastroenterită pediatrică:** O doză unică este de obicei suficientă.

### 🧑 ADULȚI

| Indicație | Doză | Cale | Frecvență |
|-----------|------|------|-----------|
| **NVPO (prevenție)** | 4 mg | IV | Doză unică înainte de inducție |
| **NVPO (tratament)** | 4 mg | IV | Se poate repeta la fiecare 8h |
| **Chimioterapie** | 8 mg | IV | 30 min înainte, apoi la fiecare 8h |
| **Greață prin opioide** | 4 mg | IV | La fiecare 8 h dacă este necesar |

**Doză maximă:** 32 mg/zi (16 mg per doză unică)

### 👴 VÂRSTNICI

| Aspect | Recomandare |
|--------|-------------|
| **Precauție** | Risc mai mare de prelungire QT |
| **EKG** | Luați în considerare la pacienții cu cardiopatie |

---

## ⛔ Contraindicații

| Situație | De ce |
|----------|-------|
| **Alergie la ondansetron** | Reacție alergică |
| **Utilizare cu apomorfină** | Hipotensiune gravă |
| **QT lung congenital** | Risc de aritmii grave |

---

## ⚠️ Efecte secundare

| Efect | Frecvență | Ce să observați |
|-------|-----------|-----------------|
| **Cefalee** | Foarte comună | Durere de cap (tranzitorie) |
| **Constipație** | Comună | Lipsă scaune |
| **Prelungire QT** | Puțin frecventă | Aritmii |
| **Sindrom serotoninergic** | Foarte rar | Confuzie, tremur, febră |

> ⚠️ **Prelungire QT:** Nu dați mai mult de 16 mg în doză unică. Precauție cu alte medicamente care prelungesc QT.

---

## 🩺 Administrare

### CALE IV DIRECTĂ (cea mai comună)

| Pas | Acțiune |
|-----|---------|
| 1 | Încărcați fiola în seringă |
| 2 | Se poate dilua până la 10 ml cu SF (opțional) |
| 3 | Administrați în **minim 30 secunde** (doză ≤ 4 mg) |
| 4 | Pentru doze mai mari: minim 2-5 minute |

### CALE ORALĂ/SUBLINGUALĂ (bucodispersabile)

- Așezați pe limbă
- Se dizolvă în secunde
- Nu necesită apă
- Ideal pentru pacienții cu greață

---

## 🔄 Interacțiuni importante

| Medicament | Efect | Acțiune |
|------------|-------|---------|
| **Apomorfină** | CONTRAINDICAT | Hipotensiune gravă |
| **Medicamente care prelungesc QT** | ↑ risc aritmii | EKG. Evitați dacă e posibil |
| **Tramadol** | ↓ efect analgezic | Monitorizați durerea |
| **ISRS/ISRSN** | Risc sindrom serotoninergic | Monitorizați simptome |

**Medicamente care prelungesc QT:**
- Amiodaronă, sotalol
- Haloperidol, quetiapină
- Azitromicină, levofloxacină
- Citalopram, escitalopram

---

## 🤰 Sarcină și Alăptare

| Situație | Recomandare |
|----------|-------------|
| **Sarcină trimestrul 1** | Utilizare controversată (risc ușor fisuri orale) |
| **Sarcină trimestrul 2-3** | Mai sigur. Linia a doua |
| **Prima linie** | Doxilamină + piridoxină, metoclopramidă |
| **Alăptare** | Utilizați cu precauție |

---

## 💡 Trucuri de asistentă

> *"Lent dar nu atât de mult — 30 secunde pentru 4 mg este suficient."*

> *"Înainte să verse — Este mai eficient ca prevenție decât ca tratament."*

> *"Doză unică în gastroenterită — De obicei ajunge o doză."*

> *"Bucodispersabilele sunt magice — Pentru pacientul cu greață care nu vrea să înghită."*

> *"Nu este antiemetic universal — Nu funcționează atât de bine pentru răul de mișcare."*

> *"Combinație câștigătoare — Ondansetron + dexametazonă în chimioterapie."*

> *"Constipația este aproape sigură — Anunță pacientul."*

> *"Maxim 16 mg odată — Risc QT."*
    `
  }
];
