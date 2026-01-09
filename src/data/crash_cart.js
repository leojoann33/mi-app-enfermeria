/**
 * 🩹 DATABASE: CART_DB (Carro de Curas Avanzado)
 * Estándares: GNEAUPP / NANDA-I 2024-2026
 * Formato: Lista Plana para ItemsViewer
 */

export const CART_DB = [
  // --------------------------------------------------------------------------
  // 1. GASAS ESTÉRILES
  // --------------------------------------------------------------------------
  {
    id: "gasa_01",
    nameES: "Gasas Estériles",
    nameRO: "Comprese Sterile",
    categoryES: "Material Básico",
    categoryRO: "Material de Bază",
    descES: "Tejido de algodón o material sintético, de trama abierta y absorbente, esterilizado. El material más básico y versátil del carrito de curas.",
    descRO: "Țesătură din bumbac sau material sintetic, cu textură deschisă și absorbantă, sterilizată. Materialul cel mai de bază și versatil din căruciorul de pansamente.",
    contentES: `
## ¿Para qué sirve?

- Limpiar heridas (humedecidas con suero fisiológico)
- Secar la piel perilesional
- Aplicar antisépticos o pomadas
- Cubrir heridas de forma temporal
- Rellenar cavidades (heridas profundas, tunelizadas)
- Proteger la herida bajo un apósito secundario
- Realizar hemostasia por presión directa

---

## Presentaciones que encontrarás

| Tipo | Tamaño habitual | Uso |
|------|-----------------|-----|
| Gasa tejida estéril | 10x10 cm, 20x20 cm | Limpieza y cobertura general |
| Gasa no tejida (TNT) | 5x5 cm, 10x10 cm | Menos pelusa, ideal para heridas limpias |
| Gasa con borde | 10x10 cm | No deshilacha, mejor para heridas quirúrgicas |
| Gasa en rollo | 1 m, 5 m | Relleno de cavidades, taponamiento |
| Gasa orillada | Varios | Bordes reforzados, no suelta hilos |

---

## Técnica de uso paso a paso

**Para limpieza de herida:**

1. Abrir el paquete de gasas sin tocar el interior
2. Con pinzas estériles o guantes estériles, tomar una gasa
3. Humedecer con suero fisiológico (sin empapar en exceso)
4. Limpiar la herida con movimientos suaves del centro hacia fuera
5. Usar cada gasa solo una vez (un pase = una gasa)
6. Repetir con gasas nuevas hasta que salgan limpias
7. Secar la piel perilesional con gasa seca (toques, sin frotar)

**Para cobertura temporal:**

1. Colocar gasa estéril sobre la herida
2. Fijar con esparadrapo o venda
3. No dejar más de 24 horas sin revisar

**Para relleno de cavidades:**

1. Humedecer la gasa con SF o solución indicada
2. Introducir suavemente sin comprimir en exceso
3. Dejar un extremo visible para facilitar la retirada
4. Registrar cuántas gasas se han introducido

---

## Fundamento fisiológico

La trama abierta de la gasa permite:

- **Absorción:** Retiene exudado y residuos por capilaridad
- **Transpirabilidad:** Permite el paso de aire y vapor de agua
- **Atraumaticidad:** Si se humedece, no se adhiere al tejido nuevo

Sin embargo, la gasa seca SÍ se adhiere al lecho de la herida. Al retirarla puede arrancar tejido de granulación y causar dolor. Por eso en curas modernas se prefieren apósitos que mantengan humedad.

---

## ⛔ Cuándo NO usar

| Situación | Motivo | Alternativa |
|-----------|--------|-------------|
| Como apósito primario en heridas con granulación | La gasa seca se adhiere y daña el tejido nuevo | Apósito hidrocoloide, espuma o tul graso |
| Heridas con mucho exudado (como único apósito) | Se satura rápidamente, requiere cambios frecuentes | Apósito de espuma, alginato o hidrofiber |
| Quemaduras de segundo grado | Se pega a la piel dañada | Apósito de tul graso, apósito específico para quemaduras |
| Heridas infectadas sin supervisión | Puede ocultar signos de infección | Valoración médica + apósito con plata si indicado |
| Relleno de cavidades profundas sin control | Riesgo de retención de material | Contar gasas, usar gasa radiopaca en quirófano |

---

## ⚠️ Precauciones especiales

- **Contar siempre las gasas:** Especialmente en heridas profundas o cavitadas. Registrar cuántas entran y cuántas salen.
- **No dejar fibras en la herida:** Usar gasas de calidad que no deshilachen. Las gasas no tejidas (TNT) dejan menos pelusa.
- **No apretar demasiado el relleno:** En cavidades, la gasa debe estar "esponjosa", no comprimida. Si se aprieta mucho, impide el drenaje.
- **Vigilar maceración:** Si la gasa está muy húmeda durante mucho tiempo, puede macerar la piel circundante.

---

## Conservación y caducidad

| Estado | Tiempo de uso | Condiciones |
|--------|---------------|-------------|
| Envase cerrado | Hasta fecha de caducidad | Lugar seco, protegido de humedad |
| Envase abierto | Uso inmediato | Considerar no estéril una vez abierto |
| Envase dañado o húmedo | No usar | La esterilidad está comprometida |

**Importante:** Revisar siempre la integridad del envase antes de abrir. Si está roto, perforado o húmedo, desechar.

---

## Relación con otros productos del carrito

| Producto | Relación con gasas |
|----------|-------------------|
| Suero fisiológico | Humedecer gasas para limpieza o cura húmeda |
| Clorhexidina | Aplicar con gasa para antisepsia de piel perilesional |
| Esparadrapo | Fijar gasa como apósito temporal |
| Pinzas de disección | Manipular gasas estériles sin contaminar |
| Apósitos secundarios | La gasa puede ir debajo como capa absorbente |
| Tul graso | Colocar tul sobre herida y gasa encima (evita adherencia) |

---

## Errores comunes a evitar

| Error | Por qué es problema | Qué hacer |
|-------|---------------------|-----------|
| Usar gasa seca directamente sobre herida abierta | Se pega al tejido, arranca granulación al retirar | Humedecer con SF o usar tul graso debajo |
| Frotar la herida con la gasa | Daña tejido nuevo, provoca sangrado | Movimientos suaves, de arrastre, sin presión |
| Reutilizar gasa (dar varios pases) | Recontamina la herida | Una gasa = un pase, luego desechar |
| No contar gasas en cavidades | Riesgo de olvido de material | Contar antes y después, registrar |
| Dejar gasa húmeda muchas horas | Maceración de piel, proliferación bacteriana | Cambiar cuando esté saturada |
| Tocar la gasa con las manos | Contamina el material estéril | Usar pinzas o guantes estériles |

---

## Ejemplo práctico

**Situación:** Don Antonio, 85 años, tiene una pequeña herida en el dorso de la mano tras retirarle una vía. Hay un pequeño sangrado.

**Procedimiento:**

1. Te lavas las manos y te pones guantes
2. Abres un paquete de gasas estériles 5x5 cm
3. Con una gasa seca, presionas suavemente sobre el punto de punción durante 2 minutos
4. Compruebas que ha dejado de sangrar
5. Humedeces otra gasa con SF y limpias suavemente la zona
6. Secas con tercera gasa limpia
7. Aplicas apósito adhesivo pequeño
8. Registras en la historia: "Retirada vía periférica en dorso mano derecha. Hemostasia correcta. Apósito."

---

## Caso especial: relleno de herida cavitada

**Situación:** Doña Luisa, 79 años, tiene una úlcera por presión grado III en talón con cavidad de 2 cm de profundidad.

**Procedimiento con gasa:**

1. Limpias la herida con SF irrigado
2. Humedeces gasa en rollo con SF (bien escurrida, no goteando)
3. Con ayuda de pinzas, introduces la gasa suavemente en la cavidad
4. NO comprimes: debe quedar "esponjosa" rellenando el espacio muerto
5. Dejas un extremo de la gasa visible (para saber que hay material dentro)
6. **Registras:** "UPP talón izquierdo. Relleno con 1 gasa humedecida en SF. Apósito secundario de espuma."
7. Cubres con apósito secundario

**En la siguiente cura:** Retiras la gasa tirando del extremo visible, cuentas que sale todo el material introducido.

---

## 💡 Trucos de enfermera

> *"Si la gasa se ha pegado a la herida, no tires. Humedece con SF abundante y espera 5 minutos. Saldrá sola sin arrancar tejido."*

> *"Para limpiar heridas pequeñas, dobla la gasa en cuatro. Así tienes cuatro superficies limpias: usas una cara, giras, usas otra, y no gastas tantas gasas."*

> *"En heridas cavitadas, yo hago un nudo pequeño en el extremo de la gasa que queda fuera. Así, cuando llega otra compañera, sabe de un vistazo que hay gasa dentro."*

> *"Nunca cortes la gasa con tijeras no estériles justo antes de usarla. Si necesitas un tamaño menor, usa gasas pequeñas de origen o corta con tijeras estériles."*

> *"Si la gasa no tejida (TNT) te resbala de las pinzas, prueba con gasa tejida tradicional. Tiene mejor agarre, aunque deja más pelusa."*
    `,
    contentRO: `
## Pentru ce se folosește?

- Curățarea plăgilor (umezite cu ser fiziologic)
- Uscarea pielii perilesionale
- Aplicarea antisepticelor sau unguentelor
- Acoperirea temporară a plăgilor
- Umplerea cavităților (plăgi profunde, tunelizate)
- Protejarea plăgii sub un pansament secundar
- Efectuarea hemostazei prin presiune directă

---

## Prezentări disponibile

| Tip | Dimensiune | Utilizare |
|-----|------------|-----------|
| Compresă sterilă țesută | 10x10 cm, 20x20 cm | Curățare și acoperire generală |
| Compresă nețesută (TNT) | 5x5 cm, 10x10 cm | Mai puține scame, ideală pentru plăgi curate |
| Compresă cu margine | 10x10 cm | Nu lasă fire, mai bună pentru plăgi chirurgicale |
| Compresă în rolă | 1 m, 5 m | Umplerea cavităților, tamponare |

---

## Tehnica de utilizare pas cu pas

**Pentru curățarea plăgii:**

1. Deschideți pachetul fără a atinge interiorul
2. Cu pensete sterile sau mănuși sterile, luați o compresă
3. Umeziți cu ser fiziologic (nu prea mult)
4. Curățați plaga cu mișcări blânde din centru spre exterior
5. Folosiți fiecare compresă o singură dată
6. Repetați cu comprese noi până ies curate
7. Uscați pielea din jur cu compresă uscată

---

## ⛔ Când NU se folosește

- Ca pansament primar pe plăgi cu granulație (se lipește)
- Plăgi cu mult exudat (se saturează rapid)
- Arsuri de gradul II (se lipește de piele)
- Plăgi infectate fără supraveghere

---

## ⚠️ Precauții speciale

- **Numărați întotdeauna compresele** în cavități
- **Nu lăsați fibre** în plagă
- **Nu comprimați prea mult** umpluturile
- **Atenție la macerare** dacă rămâne umedă mult timp
    `
  },

  // --------------------------------------------------------------------------
  // 2. CLORHEXIDINA
  // --------------------------------------------------------------------------
  {
    id: "chx_01",
    nameES: "Clorhexidina",
    nameRO: "Clorhexidină",
    categoryES: "Antisépticos",
    categoryRO: "Antiseptice",
    descES: "Antiséptico de amplio espectro que destruye microorganismos en la piel y mucosas. Gold Standard hospitalario por su eficacia, seguridad y efecto residual prolongado (hasta 6 horas).",
    descRO: "Antiseptic cu spectru larg care distruge microorganismele de pe piele și mucoase. Standard de Aur spitalicesc pentru eficacitatea, siguranța și efectul rezidual prelungit.",
    nanda: "Riesgo de infección [00004]",
    contentES: `
## ¿Qué es?

Antiséptico de amplio espectro que destruye microorganismos en la piel y mucosas. Es el antiséptico de elección en la mayoría de protocolos hospitalarios actuales por su eficacia, seguridad y efecto residual prolongado.

Se presenta en diferentes concentraciones según el uso: desde 0.5% hasta 4%.

---

## ¿Para qué sirve?

- Antisepsia de piel antes de procedimientos invasivos (canalización de vía, punción)
- Desinfección de la piel perilesional en heridas infectadas
- Preparación del campo quirúrgico
- Higiene de pacientes portadores de bacterias multirresistentes
- Limpieza de la zona de inserción de catéteres
- Cura del cordón umbilical (en algunas guías)

---

## Presentaciones que encontrarás

| Presentación | Concentración | Uso principal |
|--------------|---------------|---------------|
| Solución acuosa | 0.5% - 1% | Heridas abiertas, mucosas (con precaución) |
| Solución alcohólica | 0.5% - 2% | Piel intacta, antisepsia prequirúrgica, inserción de catéteres |
| Jabón/Scrub | 4% | Lavado quirúrgico de manos, higiene de pacientes colonizados |
| Toallitas impregnadas | 2% | Preparación rápida de piel para procedimientos |
| Apósitos con clorhexidina | Variable | Fijación de catéteres con liberación sostenida |

**Clave:** La solución **alcohólica** es más potente pero solo para piel intacta. La **acuosa** es más suave y se puede usar cerca de heridas abiertas.

---

## Técnica de uso paso a paso

**Para antisepsia de piel antes de canalizar vía:**

1. Lavado de manos + guantes
2. Seleccionar la zona de punción
3. Tomar gasa estéril e impregnar con clorhexidina alcohólica 2%
4. Aplicar con movimientos circulares del centro hacia fuera
5. Dejar secar completamente al aire (mínimo 30 segundos, ideal 2 minutos)
6. **No soplar ni abanicar** — dejar que seque solo
7. Proceder con la punción

**Para piel perilesional en herida infectada:**

1. Primero limpiar la herida con suero fisiológico
2. Secar el lecho con gasa
3. Aplicar clorhexidina acuosa en la piel DE ALREDEDOR (no dentro de la herida)
4. Dejar secar
5. Aplicar apósito indicado

**Tiempo de contacto:** La clorhexidina necesita tiempo para actuar. No sirve aplicar y limpiar inmediatamente.

---

## Fundamento fisiológico

La clorhexidina actúa destruyendo la membrana celular de los microorganismos. Sus características principales:

- **Amplio espectro:** Eficaz contra bacterias gram positivas, gram negativas, hongos y algunos virus
- **Efecto residual:** Sigue actuando durante horas después de aplicarse (hasta 6 horas en piel)
- **Baja absorción:** No penetra en sangre en cantidades significativas
- **No citotóxica a bajas concentraciones:** A diferencia de la povidona, no daña tanto el tejido de granulación (aunque tampoco se recomienda aplicar directamente en heridas abiertas de forma rutinaria)

El efecto residual es su gran ventaja sobre otros antisépticos: la protección continúa después de la aplicación.

---

## ⛔ Cuándo NO usar

| Situación | Motivo | Alternativa |
|-----------|--------|-------------|
| Oídos (conducto auditivo) | Ototoxicidad: puede causar sordera | Suero fisiológico o antiséptico específico para oído |
| Ojos | Irritación severa, daño corneal | Suero fisiológico, colirios específicos |
| Cerebro / meninges expuestas | Neurotoxicidad | Suero fisiológico estéril únicamente |
| Mucosas (boca, vagina) en alta concentración | Irritación, alteración de flora | Usar solo formulaciones específicas para mucosas, baja concentración |
| Neonatos prematuros (uso extenso) | Riesgo de quemaduras químicas en piel inmadura | Valoración individual, mínima cantidad |
| Alergia conocida a clorhexidina | Reacciones anafilácticas (raras pero graves) | Povidona yodada u otro antiséptico |
| Dentro de heridas abiertas de forma rutinaria | Puede retrasar cicatrización si se usa sistemáticamente | Reservar para heridas infectadas, no para cura rutinaria |

**⚠️ La alergia a clorhexidina existe.** Aunque es rara, puede ser grave (anafilaxia). Preguntar siempre antes del primer uso.

---

## ⚠️ Precauciones especiales

- **Dejar secar antes de cualquier procedimiento:** La clorhexidina alcohólica es inflamable. Si se usa electrobisturí o fuentes de calor antes de que seque, puede causar quemaduras.
- **No mezclar con jabones aniónicos:** Se inactiva. Si el paciente se ha lavado con jabón normal, aclarar bien antes de aplicar clorhexidina.
- **Evitar acumulación en pliegues:** En axilas, ingles, bajo las mamas... si se acumula producto puede irritar la piel.
- **Manchas en ropa:** La clorhexidina mancha de color marrón y es difícil de quitar. Proteger la ropa del paciente.
- **Registro de alergias:** Documentar siempre si el paciente tolera bien la clorhexidina. Es información importante para futuras intervenciones.

---

## Conservación y caducidad

| Estado | Tiempo de uso | Condiciones |
|--------|---------------|-------------|
| Envase cerrado | Hasta fecha de caducidad | Temperatura ambiente, lejos de calor |
| Envase abierto (botella grande) | Según fabricante (generalmente 1-3 meses) | Mantener cerrado, no contaminar la boquilla |
| Monodosis | Uso único | Desechar el sobrante |
| Solución diluida por el usuario | No recomendado | Usar preparaciones comerciales ya diluidas |

**Importante:** No rellenar envases. No trasvasar a otros recipientes. Riesgo de contaminación.

---

## Relación con otros productos del carrito

| Producto | Relación con clorhexidina |
|----------|--------------------------|
| Suero fisiológico | Primero SF para limpiar, luego CHX para desinfectar. No mezclar |
| Povidona yodada | Son alternativas, no se usan juntas. CHX tiene mejor efecto residual |
| Alcohol 70% | CHX alcohólica ya contiene alcohol. No es necesario añadir |
| Gasas estériles | Aplicar CHX con gasa, nunca verter directamente sobre la herida |
| Guantes | Ponerse guantes limpios después de aplicar CHX (el residuo puede afectar al látex con el tiempo) |
| Apósitos | Dejar secar CHX completamente antes de colocar apósito adhesivo |

---

## Errores comunes a evitar

| Error | Por qué es problema | Qué hacer |
|-------|---------------------|-----------|
| No dejar secar | Menor eficacia, riesgo de quemadura con electrobisturí | Esperar mínimo 30 seg, ideal 2 min |
| Usar en oídos | Ototoxicidad, sordera | Nunca usar en conducto auditivo |
| Aplicar en ojos | Lesión corneal | Si salpica, lavar con SF abundante 15 min |
| Verter directamente en herida abierta | Puede dañar tejido de granulación | Aplicar en piel perilesional, no en el lecho |
| Usar solución alcohólica en herida abierta | Dolor intenso, daño tisular | Usar solución acuosa si es necesario cerca de heridas |
| Mezclar con suero o jabón | Se inactiva | Aplicar sola, después de limpiar y secar |
| No preguntar por alergias | Riesgo de anafilaxia | Siempre preguntar antes del primer uso |
| Uso excesivo en neonatos | Quemaduras químicas | Mínima cantidad, valorar alternativas |

---

## Ejemplo práctico

**Situación:** Vas a canalizar una vía periférica a Don José, 70 años, en el antebrazo.

**Procedimiento de antisepsia:**

1. Verificas que Don José no es alérgico a clorhexidina
2. Seleccionas la vena y preparas el material
3. Te pones guantes limpios
4. Tomas una gasa estéril y la impregnas con clorhexidina alcohólica 2%
5. Aplicas sobre la zona de punción con movimiento circular, de dentro hacia fuera
6. Cubres un área de unos 5-8 cm de diámetro
7. **Esperas 2 minutos** sin tocar la zona
8. Compruebas que está seco
9. Te pones guantes estériles y procedes a canalizar

---

## Caso especial: paciente alérgico a clorhexidina

**Situación:** María, 65 años, llega a la residencia con un informe que indica: "Alergia a clorhexidina - reacción cutánea severa".

**¿Qué hacer?**

1. **Registrar en lugar visible:** Historia clínica, pulsera de alergias, cabecero de cama
2. **Informar al equipo:** Que todos sepan que NO se puede usar CHX
3. **Alternativas:**
   - Para antisepsia de piel: Povidona yodada
   - Para lavado de paciente colonizado: Jabón con otro antiséptico
4. **Vigilar productos ocultos:** Algunos apósitos, cremas o productos contienen CHX
5. **Si hay exposición accidental:** Vigilar signos de reacción (desde urticaria hasta anafilaxia)

---

## 💡 Trucos de enfermera

> *"Si vas a canalizar una vía y tienes prisa, usa las toallitas de clorhexidina 2%. Ya vienen impregnadas con la cantidad justa y secan más rápido que cuando empapas una gasa."*

> *"Para no olvidar dejar secar: mientras esperas los 2 minutos, prepara el resto del material (compresor, catéter, apósito, tegaderm). Cuando termines, ya está seco."*

> *"Tengo compañeras que dicen 'es que no tengo tiempo de esperar'. Pero una flebitis o una bacteriemia te quita mucho más tiempo. Los 2 minutos merecen la pena."*

> *"Si manchas la ropa del paciente con clorhexidina, avisa a la familia de que la mancha es difícil de quitar. Mejor prevenir poniendo un empapador debajo."*

> *"En pacientes con piel muy frágil o ancianos, la clorhexidina alcohólica puede irritar. Valora usar la acuosa, aunque tarde más en secar."*
    `,
    contentRO: `
## Ce este?

Antiseptic cu spectru larg care distruge microorganismele de pe piele și mucoase. Este antisepticul de alegere în majoritatea protocoalelor spitalicești actuale datorită eficacității, siguranței și efectului rezidual prelungit.

Se prezintă în diferite concentrații în funcție de utilizare: de la 0,5% până la 4%.

---

## Pentru ce se folosește?

- Antisepsia pielii înainte de proceduri invazive (montare cateter, puncție)
- Dezinfectarea pielii perilesionale în plăgi infectate
- Pregătirea câmpului chirurgical
- Igiena pacienților purtători de bacterii multirezistente
- Curățarea zonei de inserție a cateterelor

---

## Prezentări disponibile

| Prezentare | Concentrație | Utilizare principală |
|------------|--------------|---------------------|
| Soluție apoasă | 0.5% - 1% | Plăgi deschise, mucoase (cu precauție) |
| Soluție alcoolică | 0.5% - 2% | Piele intactă, antisepsie preoperatorie |
| Săpun/Scrub | 4% | Spălare chirurgicală a mâinilor |
| Șervețele impregnate | 2% | Pregătire rapidă a pielii |

**Cheie:** Soluția **alcoolică** este mai puternică dar doar pentru piele intactă. Cea **apoasă** este mai blândă.

---

## ⛔ Când NU se folosește

- **Urechi** (ototoxicitate)
- **Ochi** (iritație severă)
- **Creier / meninge expuse** (neurotoxicitate)
- **Mucoase în concentrație mare**
- **Nou-născuți prematuri** (risc arsuri chimice)
- **Alergie cunoscută**

---

## ⚠️ Precauții speciale

- Lăsați să se usuce înainte de orice procedură
- Nu amestecați cu săpunuri
- Evitați acumularea în pliuri
- Pete pe haine (greu de scos)
- Înregistrați alergiile
    `
  },

  // --------------------------------------------------------------------------
  // 3. SUERO FISIOLÓGICO
  // --------------------------------------------------------------------------
  {
    id: "sf_01",
    nameES: "Suero Fisiológico 0.9%",
    nameRO: "Ser Fiziologic 0.9%",
    categoryES: "Antisépticos y Limpieza",
    categoryRO: "Antiseptice și Curățare",
    descES: "Solución estéril de cloruro de sodio al 0.9%. El líquido más seguro para limpiar heridas sin dañar el tejido de granulación.",
    descRO: "Soluție sterilă de clorură de sodiu 0,9%. Cel mai sigur lichid pentru curățarea plăgilor fără a deteriora țesutul de granulație.",
    contentES: `
## ¿Qué es?

Solución estéril de cloruro de sodio (sal común) disuelta en agua, a una concentración del 0.9%. También se llama **solución salina normal** o **SF**.

Es el líquido más parecido a los fluidos de nuestro cuerpo en cuanto a concentración de sal, por eso se llama "fisiológico".

---

## ¿Para qué sirve?

En el carrito de curas, su función principal es **limpiar heridas**.

También se usa para:
- Hidratar tejidos durante la cura
- Arrastrar restos de apósitos o tejido desvitalizado
- Diluir otros productos
- Irrigar cavidades (fístulas, heridas tunelizadas)
- Humedecer gasas para curas húmedas

---

## Presentaciones que encontrarás

| Presentación | Uso habitual |
|--------------|--------------|
| Ampollas 10 ml | Curas pequeñas, irrigación precisa |
| Botella 100 ml | Cura estándar de una herida |
| Botella 250-500 ml | Heridas grandes, irrigación abundante |
| Botella 1000 ml | Curas extensas, quemaduras |

---

## Técnica de uso paso a paso

**Para limpieza de herida por irrigación:**

1. Lavado de manos + colocación de guantes
2. Retirar apósito antiguo (con guantes no estériles)
3. Cambiar a guantes estériles si es necesario
4. Abrir el suero fisiológico (comprobar caducidad e integridad)
5. Irrigar la herida desde el centro hacia los bordes
6. Usar presión suave pero suficiente para arrastrar residuos
7. Si usas jeringa: llenar con SF e irrigar a unos 5-10 cm de distancia
8. Secar los bordes de la herida (no el lecho) con gasa estéril
9. Proceder con el tratamiento indicado

**Regla de oro:** Siempre de lo limpio a lo sucio, del centro hacia fuera.

---

## Fundamento fisiológico

El suero al 0.9% es **isotónico**: tiene la misma concentración de sal que nuestras células. Esto significa que:

- No daña el tejido nuevo (granulación)
- No provoca dolor por diferencia osmótica
- No destruye las células que están curando la herida
- Limpia sin agredir

Por eso es el líquido de elección para limpiar heridas. Otros productos (agua oxigenada, povidona) pueden ser citotóxicos para el tejido en regeneración.

---

## ⛔ Cuándo NO usar

| Situación | Motivo | Alternativa |
|-----------|--------|-------------|
| Herida infectada con signos de sepsis | SF solo limpia, no trata la infección sistémica | Limpieza con SF + antiséptico según protocolo + tratamiento sistémico |
| Quemaduras químicas por ácidos/bases | Puede ser insuficiente para neutralizar | Irrigación abundante con agua corriente (15-20 min) antes que SF |
| Heridas con sangrado arterial activo | Irrigar no detiene hemorragia | Presión directa, torniquete si procede, aviso urgente |
| Ojos (salpicaduras químicas graves) | SF en ampolla es insuficiente | Lavado continuo con suero en bolsa o agua corriente durante 20+ minutos |
| Como único tratamiento en heridas infectadas | No tiene poder bactericida | SF para limpiar + antiséptico o apósito con plata según indicación |

**Importante:** El suero fisiológico **limpia pero no desinfecta**. No sustituye a los antisépticos cuando hay infección.

---

## ⚠️ Precauciones especiales

- **Pacientes con restricción de sodio severa:** En curas muy extensas con gran absorción, valorar con el médico (raro en curas estándar, más relevante en irrigaciones masivas).
- **Heridas tunelizadas o con trayectos fistulosos:** Asegurarse de que el líquido sale completamente. El SF retenido puede macerar tejidos.
- **Pacientes con piel frágil (ancianos, corticoides crónicos):** Secar muy suavemente la piel perilesional para evitar lesiones por fricción.

---

## Conservación y caducidad

| Estado | Tiempo de uso | Condiciones |
|--------|---------------|-------------|
| Cerrado | Hasta fecha de caducidad | Temperatura ambiente, protegido de luz solar directa |
| Abierto (ampolla) | Uso único | Desechar el sobrante inmediatamente |
| Abierto (botella) | Máximo 24 horas | Tapar bien, marcar fecha/hora de apertura, temperatura ambiente |
| Contaminado o turbio | No usar | Desechar aunque no haya caducado |

**Truco:** Algunas unidades usan un protocolo de "botella de turno": se abre al inicio del turno y se desecha al final, aunque sobre.

---

## Relación con otros productos del carrito

| Producto | Relación con SF |
|----------|-----------------|
| Clorhexidina | Primero limpiar con SF, secar, luego aplicar clorhexidina si hay indicación. No mezclar |
| Povidona yodada | Similar: SF limpia, povidona desinfecta. No usar juntos simultáneamente |
| Agua oxigenada | SF es preferible para limpieza habitual. H₂O₂ solo para casos específicos (desbridamiento de coágulos) |
| Gasas estériles | Humedecer con SF para curas húmedas o para retirar apósitos adheridos sin dañar |
| Apósitos hidrocoloides | Limpiar herida con SF y secar bordes ANTES de aplicar (el hidrocoloide no pega en húmedo) |
| Jeringas | Usar jeringa de 20-50 ml para irrigación a presión controlada |

---

## Errores comunes a evitar

| Error | Por qué es problema | Qué hacer |
|-------|---------------------|-----------|
| Usar SF frío directamente | Provoca vasoconstricción, dolor, retrasa cicatrización | Atemperar el suero (dejarlo a temperatura ambiente o calentar ligeramente) |
| Frotar la herida con gasa empapada | Destruye tejido de granulación | Irrigar, no frotar. Si hay que tocar, hacerlo con suavidad |
| Usar botella abierta de días anteriores | Riesgo de contaminación | Una vez abierto, usar en 24h o desechar |
| Secar el lecho de la herida | Las heridas curan mejor en ambiente húmedo | Secar solo los bordes y piel circundante |
| Mezclar con antiséptico sin indicación | Algunos antisépticos se inactivan con SF | Usar cada producto por separado salvo indicación |
| Pensar que SF "desinfecta" | SF no tiene poder bactericida | Es solo para limpieza mecánica. Si hay infección, añadir antiséptico |
| Guardar ampolla abierta "para luego" | Contaminación bacteriana | Las ampollas son de un solo uso |

---

## Ejemplo práctico

**Situación:** Doña Carmen, 82 años, tiene una úlcera por presión grado II en el sacro. Toca hacer la cura diaria.

**Aplicación del SF:**

1. Colocas a Doña Carmen en decúbito lateral
2. Retiras el apósito hidrocoloide antiguo
3. Observas la herida: lecho rosado, exudado escaso, bordes limpios
4. Cargas 20 ml de SF en una jeringa
5. Irrigas suavemente sobre la úlcera, dejando que el líquido arrastre cualquier resto
6. Con una gasa estéril, secas con toques suaves la piel de alrededor (no la herida)
7. Aplicas el nuevo apósito según pauta

---

## Caso especial: herida con signos de infección

**Situación:** Don Manuel, 78 años, tiene una herida quirúrgica en la pierna que presenta enrojecimiento perilesional, calor local y exudado amarillento con mal olor.

**¿Qué cambia?**

1. Limpias con SF como siempre (arrastrar el exudado purulento)
2. Secas bordes
3. **Añades antiséptico** (clorhexidina o lo que indique el protocolo)
4. Consideras toma de cultivo si no se ha hecho
5. Documentas signos de infección y avisas al médico
6. Posible cambio a apósito con plata

**SF sigue siendo el primer paso**, pero no es suficiente solo con él.

---

## 💡 Trucos de enfermera

> *"En invierno, meto las ampollas de suero en mi bolsillo 10 minutos antes de la cura. Así se atemperan con el calor corporal y el paciente no se queja del frío."*

> *"Si la herida tiene mucho residuo o fibrina, uso una jeringa de 20 ml con aguja de carga (sin poner aguja fina) para hacer más presión en el chorro. Pero nunca a menos de 5 cm de la herida."*

> *"Marca con rotulador la fecha y hora en la botella cuando la abres. Así sabes si todavía es segura."*

> *"Cuando retiro un apósito que está muy pegado, lo humedezco con SF unos minutos antes. Sale sin tirar de la piel ni del tejido nuevo."*

> *"Para heridas muy sucias o con recovecos, preparo el SF en una jeringa conectada a un catéter corto (sin aguja). Así puedo dirigir el chorro exactamente donde necesito."*
    `,
    contentRO: `
## Ce este?

Soluție sterilă de clorură de sodiu (sare comună) dizolvată în apă, la o concentrație de 0,9%. Se mai numește **soluție salină normală** sau **SF**.

Este lichidul cel mai asemănător cu fluidele corpului nostru în ceea ce privește concentrația de sare, de aceea se numește "fiziologic".

---

## Pentru ce se folosește?

În căruciorul de pansamente, funcția sa principală este **curățarea plăgilor**.

Se mai folosește pentru:
- Hidratarea țesuturilor în timpul pansamentului
- Îndepărtarea resturilor de pansamente sau țesut devitalizat
- Diluarea altor produse
- Irigarea cavităților (fistule, plăgi tunelizate)
- Umezirea compreselor pentru pansamente umede

---

## Prezentări disponibile

| Prezentare | Utilizare |
|------------|-----------|
| Fiole 10 ml | Pansamente mici, irigare precisă |
| Flacon 100 ml | Pansament standard pentru o plagă |
| Flacon 250-500 ml | Plăgi mari, irigare abundentă |
| Flacon 1000 ml | Pansamente extinse, arsuri |

---

## ⛔ Când NU se folosește

- Plagă infectată cu semne de sepsis (SF doar curăță, nu tratează)
- Arsuri chimice grave (irigare cu apă curentă mai întâi)
- Sângerare arterială activă (presiune directă, nu irigare)
- Ca unic tratament în plăgi infectate (nu are putere bactericidă)

**Important:** Serul fiziologic **curăță dar nu dezinfectează**.

---

## ⚠️ Precauții speciale

- Pacienți cu restricție severă de sodiu
- Plăgi tunelizate (asigurați-vă că lichidul iese complet)
- Pacienți cu piele fragilă (uscați foarte ușor)

---

## Conservare

| Stare | Timp de utilizare |
|-------|-------------------|
| Închis | Până la data de expirare |
| Deschis (fiolă) | Utilizare unică |
| Deschis (flacon) | Maximum 24 ore |
    `
  },

  // --------------------------------------------------------------------------
  // 4. APÓSITOS HIDROCOLOIDES
  // --------------------------------------------------------------------------
  {
    id: "hcol_01",
    nameES: "Apósitos Hidrocoloides",
    nameRO: "Pansamente Hidrocoloide",
    categoryES: "Apósitos (Cura Húmeda)",
    categoryRO: "Pansamente (Mediu Umed)",
    descES: "Apósito oclusivo compuesto por capa externa impermeable y capa interna absorbente. Al contacto con exudado forma gel húmedo que favorece la cicatrización. Ideal para UPP grado I-II.",
    descRO: "Pansament ocluziv compus din strat extern impermeabil și strat intern absorbant. În contact cu exudatul formează gel umed care favorizează cicatrizarea.",
    contentES: `
## ¿Qué es?

Apósito oclusivo o semioclusivo compuesto por una capa externa impermeable (poliuretano) y una capa interna de sustancias absorbentes como carboximetilcelulosa, gelatina y pectina. Al contacto con el exudado de la herida, forma un gel húmedo que favorece la cicatrización.

Son los apósitos más utilizados en úlceras por presión de grado I y II, muy frecuentes en residencias geriátricas.

---

## ¿Para qué sirve?

- Tratamiento de úlceras por presión (grado I, II y algunas grado III superficiales)
- Heridas con exudado leve a moderado
- Quemaduras superficiales
- Heridas en fase de granulación y epitelización
- Protección de zonas de fricción o riesgo de UPP
- Heridas crónicas que necesitan ambiente húmedo

---

## Presentaciones que encontrarás

| Tipo | Características | Uso principal |
|------|-----------------|---------------|
| Placa estándar | Cuadrada o rectangular, varios tamaños | UPP en zonas planas (sacro, espalda) |
| Forma anatómica (sacro, talón, codo) | Diseño adaptado a la zona | Mejor adherencia en zonas difíciles |
| Extra fino | Más flexible, menos absorbente | Protección preventiva, heridas con poco exudado |
| Con borde adhesivo | Marco de espuma o film alrededor | Mejor sellado en pieles frágiles |
| Hidrocoloide en pasta o gránulos | Para rellenar cavidades | Heridas profundas antes de cubrir con placa |

---

## Técnica de uso paso a paso

**Aplicación del apósito hidrocoloide:**

1. Lavar la herida con suero fisiológico
2. Secar la piel perilesional (muy importante: el hidrocoloide no pega en húmedo)
3. Seleccionar tamaño de apósito que sobrepase 2-3 cm los bordes de la herida
4. Calentar el apósito entre las manos unos segundos (mejora la adhesión)
5. Retirar el papel protector
6. Aplicar desde el centro hacia los bordes, sin estirar
7. Presionar suavemente con la palma durante 30 segundos
8. Alisar los bordes para asegurar el sellado

**Retirada del apósito:**

1. No retirar antes de tiempo (puede durar 3-7 días)
2. Levantar una esquina suavemente
3. Estirar en paralelo a la piel, no hacia arriba
4. Si está muy adherido, humedecer los bordes con SF

---

## Fundamento fisiológico

El hidrocoloide crea un **ambiente húmedo controlado** que:

- **Acelera la cicatrización:** Las células migran mejor en medio húmedo
- **Favorece el desbridamiento autolítico:** El gel reblandece el tejido necrótico
- **Protege de contaminación:** La capa externa es barrera contra bacterias y agua
- **Reduce el dolor:** Al no adherirse al lecho, los cambios no duelen
- **Absorbe exudado:** Transformándolo en gel

El gel amarillento que se forma NO es pus. Es el hidrocoloide que ha absorbido exudado. Tiene un olor característico que puede confundirse con infección, pero es normal.

---

## ⛔ Cuándo NO usar

| Situación | Motivo | Alternativa |
|-----------|--------|-------------|
| Heridas infectadas con signos clínicos | Ambiente oclusivo puede empeorar infección | Apósitos con plata, cura diaria con antiséptico |
| Heridas con exudado abundante | Se satura rápidamente, se despega | Apósitos de espuma, alginato, hidrofiber |
| Úlceras con tejido necrótico seco (escara) | No hay humedad para formar gel | Hidrogel para reblandecer primero |
| Heridas profundas o cavitadas (sin relleno) | No contacta con el lecho | Rellenar con pasta/gránulos hidrocoloides o alginato antes |
| Piel perilesional muy deteriorada | El adhesivo puede dañar más | Apósitos de espuma con silicona, fijación con venda |
| Heridas arteriales con isquemia severa | Necesitan valoración vascular, no ambiente húmedo | Cura seca hasta valoración especializada |

---

## ⚠️ Precauciones especiales

- **No cambiar demasiado pronto:** El hidrocoloide debe durar hasta que el gel llegue a los bordes o se despegue solo. Cambios frecuentes retrasan la cicatrización.
- **El olor es normal:** Al retirar el apósito, el gel puede tener olor desagradable. No significa infección. Limpiar con SF y valorar el lecho.
- **El color del gel puede alarmar:** Es amarillo-marrón y puede parecer pus. Enseñar a la familia para evitar preocupaciones.
- **No usar en pacientes con alergia a componentes:** Raro, pero posible. Si hay reacción cutánea, cambiar de tipo de apósito.
- **Vigilar maceración de bordes:** Si el apósito se satura, puede macerar la piel sana. Cambiar antes si se observa piel blanca y arrugada alrededor.

---

## Conservación y caducidad

| Estado | Tiempo de uso | Condiciones |
|--------|---------------|-------------|
| Envase cerrado | Hasta fecha de caducidad | Temperatura ambiente, evitar calor excesivo |
| Envase abierto | Usar inmediatamente | No guardar apósito parcialmente usado |
| Apósito colocado | 3-7 días según exudado | Cambiar si se despega, satura o hay signos de infección |

**Indicadores para cambio:** El gel llega a los bordes, el apósito se despega, hay fugas de exudado, signos de infección, o revisión programada.

---

## Relación con otros productos del carrito

| Producto | Relación con hidrocoloide |
|----------|--------------------------|
| Suero fisiológico | Limpiar herida ANTES. Secar bien la piel perilesional |
| Gasas | Para secar la piel alrededor, nunca para cubrir encima del hidrocoloide |
| Pasta hidrocoloide | Rellenar cavidades antes de aplicar la placa |
| Hidrogel | Usar primero si hay tejido seco que reblandecer |
| Film de poliuretano | Alternativa para protección de zonas de riesgo sin herida abierta |
| Crema barrera | Aplicar en piel perilesional si hay riesgo de maceración |

---

## Errores comunes a evitar

| Error | Por qué es problema | Qué hacer |
|-------|---------------------|-----------|
| Aplicar sobre piel húmeda | No adhiere, se despega enseguida | Secar muy bien antes de aplicar |
| Recortar el apósito justo al tamaño de la herida | No sella bien, no protege bordes | Dejar 2-3 cm de margen alrededor |
| Cambiar todos los días | Interrumpe cicatrización, gasto innecesario | Cambiar solo cuando esté indicado (3-7 días) |
| Confundir el gel con pus | Tratamiento innecesario, preocupación | Reconocer que el gel amarillo es normal |
| Usar en heridas infectadas | Empeora la infección | Tratar infección primero, luego hidrocoloide |
| Estirar el apósito al aplicar | Tensión en piel, despegue precoz, ampollas | Aplicar sin tensión, moldear con calor de las manos |
| No registrar fecha de aplicación | No se sabe cuándo cambiar | Escribir fecha en el apósito con rotulador |

---

## Ejemplo práctico

**Situación:** Doña Rosa, 88 años, tiene una úlcera por presión grado II en el sacro, de 3x2 cm, lecho rosado con granulación, exudado escaso.

**Procedimiento:**

1. Colocas a Doña Rosa en decúbito lateral
2. Retiras el hidrocoloide anterior (tenía 5 días, gel llegando a bordes)
3. Observas: lecho limpio, rosado, sin signos de infección
4. Limpias con SF en irrigación suave
5. Secas la piel alrededor con gasa (toques, sin frotar)
6. Seleccionas hidrocoloide sacro de tamaño adecuado (que sobrepase 2-3 cm)
7. Calientas entre las manos 10 segundos
8. Aplicas centrado sobre la úlcera, sin estirar
9. Presionas suavemente 30 segundos
10. Escribes la fecha en el apósito con rotulador
11. Registras: "UPP sacro grado II. Lecho granulación. Cambio hidrocoloide sacro. Próxima revisión en 5-7 días salvo incidencia."

---

## Caso especial: hidrocoloide que se despega antes de tiempo

**Situación:** Don Pedro tiene un hidrocoloide en el talón que se despega cada 2 días. No hay exceso de exudado.

**Posibles causas y soluciones:**

1. **Zona de mucha fricción:** Valorar hidrocoloide con bordes reforzados o añadir film adhesivo sobre los bordes
2. **Sudoración excesiva:** Secar muy bien, aplicar spray barrera antes
3. **Tamaño inadecuado:** Probar forma anatómica específica para talón
4. **Mala técnica de aplicación:** Calentar más el apósito, presionar más tiempo
5. **Piel muy seca/escamosa:** Hidratar la piel perilesional días antes

**Si nada funciona:** Valorar cambio a apósito de espuma con silicona, que pega mejor en pieles difíciles.

---

## 💡 Trucos de enfermera

> *"Escribo siempre la fecha de colocación en el propio apósito con rotulador permanente. Así cualquier compañera sabe cuándo toca revisarlo sin buscar en la historia."*

> *"Si el apósito se levanta por una esquina pero el resto está bien, lo refuerzo con un trocito de esparadrapo de papel en esa zona. No hace falta cambiar todo."*

> *"Para explicar a las familias: 'Es como una segunda piel que crea el ambiente ideal para que la herida cure sola. No hay que levantarlo para mirar todos los días, eso retrasa la curación.'"*

> *"En zonas de mucha fricción (talón, codo), aplico el hidrocoloide y luego protejo con un calcetín o tubular suave. Dura mucho más."*

> *"El truco del calor es real: 10 segundos entre las manos hace que se adapte mejor a la piel y pegue más. En invierno, con las manos frías, a veces no pegan bien."*
    `,
    contentRO: `
## Ce este?

Pansament ocluziv sau semiocluziv compus dintr-un strat extern impermeabil (poliuretan) și un strat intern de substanțe absorbante. În contact cu exudatul plăgii, formează un gel umed care favorizează cicatrizarea.

Sunt cele mai utilizate pansamente pentru ulcere de presiune de gradul I și II.

---

## Pentru ce se folosește?

- Tratamentul ulcerelor de presiune (gradul I, II)
- Plăgi cu exudat ușor până la moderat
- Arsuri superficiale
- Plăgi în faza de granulație și epitelizare
- Protecția zonelor de fricțiune

---

## ⛔ Când NU se folosește

- Plăgi infectate clinic
- Plăgi cu exudat abundent
- Ulcere cu țesut necrotic uscat
- Plăgi profunde sau cavitare (fără umplutură)

---

## ⚠️ Precauții speciale

- Nu schimbați prea devreme (3-7 zile)
- Mirosul la îndepărtare este normal
- Gelul galben NU este puroi
    `
  },

  // --------------------------------------------------------------------------
  // 5. POVIDONA YODADA
  // --------------------------------------------------------------------------
  {
    id: "pov_01",
    nameES: "Povidona Yodada",
    nameRO: "Povidonă Iodată",
    categoryES: "Antisépticos",
    categoryRO: "Antiseptice",
    descES: "Antiséptico de amplio espectro con yodo. Nombre comercial: Betadine®. El color marrón indica actividad. Uso puntual en heridas sucias, no prolongado en heridas crónicas.",
    descRO: "Antiseptic cu spectru larg cu iod. Nume comercial: Betadine®. Culoarea maro indică activitate. Utilizare punctuală în plăgi murdare.",
    contentES: `
## ¿Qué es?

Antiséptico de amplio espectro compuesto por yodo unido a povidona (polivinilpirrolidona), que libera el yodo de forma gradual. El nombre comercial más conocido es Betadine®. El color marrón característico indica la presencia de yodo activo.

Fue el antiséptico de referencia durante décadas, aunque actualmente la clorhexidina se prefiere en muchos protocolos por su efecto residual superior.

---

## ¿Para qué sirve?

- Antisepsia de piel antes de cirugía
- Desinfección de heridas sucias o contaminadas
- Curas de heridas infectadas (uso puntual, no prolongado)
- Preparación del campo para procedimientos invasivos
- Antisepsia del cordón umbilical (en algunas guías)
- Desinfección de quemaduras superficiales

---

## Presentaciones que encontrarás

| Presentación | Concentración | Uso principal |
|--------------|---------------|---------------|
| Solución dérmica | 10% (1% yodo libre) | Antisepsia de piel, heridas |
| Solución jabonosa (scrub) | 7.5% | Lavado prequirúrgico de manos y zona operatoria |
| Pomada | 10% | Heridas pequeñas, quemaduras superficiales |
| Gel | 10% | Heridas, mejor adherencia en superficies verticales |
| Solución bucal | 1% | Enjuagues (no para heridas cutáneas) |
| Gasas impregnadas | Variable | Taponamiento, curas específicas |

**El color indica actividad:** Marrón oscuro = activo. Si pierde color (amarillo claro/transparente) ha perdido eficacia.

---

## Técnica de uso paso a paso

**Para antisepsia de piel intacta (previa a punción):**

1. Limpiar la zona si hay suciedad visible
2. Aplicar povidona yodada con gasa estéril
3. Movimiento circular del centro hacia fuera
4. Dejar secar al aire (mínimo 2 minutos)
5. El color marrón debe permanecer visible
6. Proceder con el procedimiento

**Para herida contaminada:**

1. Limpiar primero con suero fisiológico abundante
2. Secar los bordes
3. Aplicar povidona diluida (diluir al 50% con SF si se va a usar en herida abierta)
4. Dejar actuar 1-2 minutos
5. Aclarar con SF
6. Secar y aplicar apósito

**Importante:** En heridas abiertas, la povidona se usa puntualmente y se aclara. No se deja de forma permanente en contacto con el tejido.

---

## Fundamento fisiológico

El yodo destruye microorganismos por oxidación de sus estructuras celulares:

- **Amplio espectro:** Bacterias gram+ y gram-, hongos, virus, esporas y protozoos
- **Acción rápida:** Comienza a actuar en 30 segundos
- **Sin resistencias conocidas:** A diferencia de los antibióticos, los microorganismos no desarrollan resistencia al yodo
- **Indicador visual:** El color marrón indica actividad. Si decolora, está gastado

**Pero tiene desventajas:**

- **Citotóxico para fibroblastos:** Puede retrasar la cicatrización si se usa de forma prolongada
- **Sin efecto residual:** Una vez seco, no sigue protegiendo (a diferencia de la clorhexidina)
- **Se inactiva con materia orgánica:** Sangre, pus y exudado reducen su eficacia

---

## ⛔ Cuándo NO usar

| Situación | Motivo | Alternativa |
|-----------|--------|-------------|
| Alergia al yodo o mariscos | Reacción alérgica, anafilaxia | Clorhexidina |
| Trastornos tiroideos (hipertiroidismo, Hashimoto) | Puede alterar función tiroidea | Clorhexidina |
| Embarazo (uso extenso o prolongado) | Riesgo de hipotiroidismo fetal | Clorhexidina, uso mínimo puntual |
| Lactancia (uso extenso) | Paso de yodo a leche materna | Clorhexidina |
| Neonatos y lactantes pequeños | Absorción aumentada, riesgo tiroideo | Clorhexidina acuosa con precaución |
| Heridas en fase de granulación (uso continuado) | Citotóxico, retrasa cicatrización | Cura húmeda con SF, apósitos |
| Grandes quemados | Absorción masiva de yodo | Valoración especializada |
| Insuficiencia renal (uso extenso) | Acumulación de yodo | Uso puntual mínimo, clorhexidina |

**Recuerda:** "Alergia al marisco" es indicador para preguntar, aunque la relación yodo-marisco es discutida científicamente. Mejor prevenir.

---

## ⚠️ Precauciones especiales

- **Interacción con mercurocromo:** Nunca usar juntos. La combinación produce compuestos cáusticos que queman la piel.
- **Decoloración = inactivación:** Si la povidona pierde el color marrón (por contacto con sangre, pus, o caducidad), ya no es eficaz.
- **No usar en heridas crónicas de forma prolongada:** Retrasa la cicatrización. Usar solo en casos de infección y de forma puntual.
- **Mancha todo:** Ropa, sábanas, piel. Las manchas en piel desaparecen solas, pero en tejidos son difíciles de quitar.
- **Absorción en grandes superficies:** En heridas extensas o quemaduras, puede absorberse yodo suficiente para afectar al tiroides.

---

## Conservación y caducidad

| Estado | Tiempo de uso | Condiciones |
|--------|---------------|-------------|
| Envase cerrado | Hasta fecha de caducidad | Proteger de luz y calor |
| Envase abierto | 6 meses máximo | Mantener bien cerrado, no contaminar |
| Solución decolorada | No usar | Indica pérdida de actividad |
| Solución diluida | Preparar en el momento | No almacenar diluciones |

**Conservar en lugar fresco y oscuro.** La luz degrada el yodo.

---

## Relación con otros productos del carrito

| Producto | Relación con povidona |
|----------|----------------------|
| Suero fisiológico | Limpiar primero con SF, luego aplicar povidona. También para diluir y aclarar |
| Clorhexidina | Son alternativas. No mezclar. CHX tiene mejor efecto residual |
| Agua oxigenada | No usar juntas. Ambas son oxidantes, pueden irritar |
| Mercurocromo | NUNCA juntos. Reacción cáustica |
| Gasas | Aplicar povidona con gasa, no verter directamente |
| Apósitos | Dejar secar antes de cubrir. No usar hidrocoloides justo después |

---

## Errores comunes a evitar

| Error | Por qué es problema | Qué hacer |
|-------|---------------------|-----------|
| Usar en heridas crónicas todos los días | Retrasa cicatrización | Reservar para infección, no para cura rutinaria |
| No dejar secar | Menor eficacia | Esperar 2 minutos mínimo |
| Mezclar con mercurocromo | Quemadura química | Nunca combinar |
| Usar si ha perdido color | No tiene actividad | Desechar y usar envase nuevo |
| Aplicar sin diluir en heridas abiertas | Citotóxico, dolor | Diluir al 50% con SF, aclarar después |
| No preguntar por alergias y tiroides | Riesgo de reacción o descompensación | Siempre preguntar antes |
| Uso prolongado en embarazadas | Riesgo para el feto | Evitar o uso mínimo puntual |
| Guardar diluciones para después | Contaminación, pérdida de eficacia | Preparar en el momento, desechar sobrante |

---

## Ejemplo práctico

**Situación:** Don Luis, 75 años, llega con una herida sucia en la rodilla tras una caída en el jardín. Tiene tierra y pequeñas piedrecitas incrustadas.

**Procedimiento:**

1. Verificas que no tiene alergia al yodo ni problemas de tiroides
2. Te lavas las manos y te pones guantes
3. Irrigas abundantemente con SF para arrastrar suciedad
4. Retiras cuerpos extraños visibles con pinzas
5. Vuelves a irrigar con SF
6. Diluyes povidona al 50% con SF
7. Aplicas la solución diluida sobre la herida con gasa
8. Dejas actuar 2 minutos
9. Aclaras con SF abundante
10. Secas la piel de alrededor
11. Aplicas apósito estéril
12. Registras: "Herida contusa rodilla derecha. Limpieza con SF. Antisepsia con povidona diluida. Apósito. Pendiente valorar vacunación antitetánica."

---

## Caso especial: Povidona vs. Clorhexidina - ¿Cuándo elegir cada una?

**¿Cuándo elegir POVIDONA?**

- Heridas muy sucias o contaminadas (mejor espectro inicial)
- Cuando necesitas actividad contra esporas
- Alergia a clorhexidina
- Disponibilidad (si no hay CHX)

**¿Cuándo elegir CLORHEXIDINA?**

- Antisepsia para catéteres y vías (efecto residual)
- Pacientes con problemas de tiroides
- Embarazadas o neonatos
- Heridas que requieren curas frecuentes (menos citotóxica)
- Protocolo hospitalario estándar actual

**Regla práctica en muchos hospitales:**

- Clorhexidina para procedimientos invasivos (vías, sondas)
- Povidona para heridas sucias de urgencias
- Ninguna de las dos de forma rutinaria en heridas crónicas limpias

---

## 💡 Trucos de enfermera

> *"Si necesitas saber si la povidona sigue activa, mira el color. Marrón intenso = bien. Si parece agua de té clarito, está gastada."*

> *"Para heridas muy sucias, primero el trabajo mecánico: suero a chorro para arrastrar. La povidona no hace milagros si la herida sigue llena de tierra."*

> *"En urgencias pregunto siempre: '¿Tiene problemas de tiroides o alergia al marisco?' Así descarto contraindicaciones rápido."*

> *"Si uso povidona en una herida abierta, siempre aclaro después con suero. No la dejo ahí secándose sobre el tejido."*

> *"Las manchas de povidona en la piel salen con alcohol, pero en la ropa casi nunca salen. Aviso siempre antes de manchar."*

> *"En la residencia casi siempre usamos clorhexidina, pero tengo povidona para las heridas que llegan sucias de fuera. Cada una tiene su momento."*
    `,
    contentRO: `
## Ce este?

Antiseptic cu spectru larg compus din iod legat de povidonă (polivinilpirolidonă). Numele comercial cel mai cunoscut este Betadine®. Culoarea maro caracteristică indică prezența iodului activ.

---

## Pentru ce se folosește?

- Antisepsia pielii înainte de chirurgie
- Dezinfectarea plăgilor murdare sau contaminate
- Îngrijirea plăgilor infectate (utilizare punctuală)
- Pregătirea câmpului pentru proceduri invazive

---

## ⛔ Când NU se folosește

- Alergie la iod sau fructe de mare
- Tulburări tiroidiene
- Sarcină (utilizare extinsă)
- Alăptare (utilizare extinsă)
- Nou-născuți și sugari
- Plăgi în fază de granulație (utilizare continuă)
- Arsuri extinse
- Insuficiență renală (utilizare extinsă)

---

## ⚠️ Precauții speciale

- **NICIODATĂ** cu mercurocrom (reacție caustică)
- Decolorarea = inactivare
- Nu utilizați în plăgi cronice pe termen lung
- Pătează hainele (dificil de îndepărtat)
    `
  }
];
