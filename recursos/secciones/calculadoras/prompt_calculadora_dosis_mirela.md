# PROMPT SUPERIOR: Calculadora de Dosis de Enfermería

## Proyecto: Herramienta de Cálculo Farmacológico para Mirela Petrescu

---

## CONTEXTO DEL USUARIO

**Perfil:** Mirela Petrescu, enfermera rumana de 55 años que se está reintegrando al sistema sanitario español tras 25 años sin ejercer. Su título fue homologado en octubre de 2025 y actualmente trabaja en una residencia geriátrica desde noviembre de 2025, con el objetivo de trabajar eventualmente en el Hospital de Guadalajara.

**Necesidades específicas:**
- Lleva 25 años sin practicar enfermería activamente
- El español es su segunda lengua (rumana nativa)
- Necesita herramientas que le generen CONFIANZA y SEGURIDAD
- Trabaja principalmente con población geriátrica
- Requiere explicaciones claras, paso a paso, sin asumir conocimientos previos
- Prefiere un enfoque práctico y orientado a la acción real

**Contexto de uso:** La calculadora se usará en situaciones reales de trabajo (residencia geriátrica y eventualmente hospital), donde los errores de dosificación pueden tener consecuencias graves. Por ello, la herramienta debe ser:
- Absolutamente clara en las instrucciones
- Redundante en las verificaciones de seguridad
- Orientada a prevenir errores comunes

---

## ESPECIFICACIONES DE LA CALCULADORA

### Filosofía de diseño

```
PRINCIPIOS FUNDAMENTALES:

1. CLARIDAD EXTREMA
   - Cada campo debe explicar QUÉ dato pide y DÓNDE encontrarlo
   - Usar lenguaje sencillo, evitar jerga innecesaria
   - Ejemplos concretos en cada paso

2. UN DATO A LA VEZ
   - No abrumar con formularios largos
   - Solicitar información paso a paso
   - Permitir retroceder y corregir

3. FÓRMULAS OCULTAS
   - El usuario NO necesita ver las matemáticas
   - El cálculo es interno, transparente
   - Solo mostrar: qué introducir → qué resultado

4. RESULTADO + ACCIÓN
   - No solo dar el número
   - Explicar QUÉ HACER con ese resultado
   - Incluir verificaciones de seguridad

5. PREVENCIÓN DE ERRORES
   - Alertas si el resultado parece inusual
   - Recordatorios de doble verificación
   - Rangos de seguridad cuando aplique
```

### Diseño visual

```
ESTÉTICA:

- Moderna y minimalista
- Colores suaves, profesionales (azules médicos, blancos, grises)
- Tipografía clara y legible (tamaño generoso)
- Espaciado amplio entre elementos
- Iconos intuitivos
- Modo claro/oscuro (opcional)
- Responsive (funciona en móvil y tablet)

INTERFAZ:

- Pantalla de inicio con las calculadoras disponibles (tarjetas visuales)
- Cada calculadora es un flujo independiente
- Barra de progreso que muestra en qué paso está
- Botones grandes y claros
- Resultado destacado visualmente
- Sección de "Qué hacer ahora" siempre visible tras el resultado
```

---

## CALCULADORAS A INCLUIR

### 1. CÁLCULO DE GOTEO (gotas/minuto)

**Descripción para el usuario:**
> "Esta calculadora te ayuda a saber a cuántas gotas por minuto debes regular el gotero cuando tienes que pasar un suero o medicación IV en un tiempo determinado. Es uno de los cálculos más frecuentes en enfermería."

**Campos a solicitar (uno por uno):**

| Orden | Campo | Explicación para el usuario | Ejemplo | Dónde encontrar el dato |
|-------|-------|----------------------------|---------|------------------------|
| 1 | Volumen total a infundir (ml) | "¿Cuántos mililitros de líquido tienes que pasar en total? Mira la etiqueta del suero o la orden médica." | "500 ml" | Etiqueta del suero, orden médica |
| 2 | Tiempo de infusión (horas) | "¿En cuántas horas debe pasar todo el líquido? Si te lo han dicho en minutos, puedes poner decimales (ej: 30 min = 0.5 horas)." | "4 horas" | Orden médica, protocolo |
| 3 | Tipo de equipo | "¿Qué tipo de sistema de goteo estás usando?" Con opciones: Macrogotero (20 gotas = 1 ml) / Microgotero (60 gotas = 1 ml) | Selección | Mirar el envase del sistema |

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       42 gotas por minuto
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RESUMEN DE TU CÁLCULO:
• Volumen: 500 ml
• Tiempo: 4 horas
• Equipo: Macrogotero (20 gtt/ml)
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Regula el gotero contando las gotas que caen en la cámara
   de goteo durante 15 segundos.

2. Para 42 gotas/minuto, debes contar aproximadamente 
   10-11 gotas en 15 segundos.

3. Ajusta la rueda del regulador hasta conseguir este ritmo.

4. VERIFICA después de 5 minutos que el goteo se mantiene estable.

5. REGISTRA en la gráfica: "SF 500ml IV a 42 gtt/min (4h)"

⚠️ RECUERDA:
• Revisa el goteo cada vez que movilices al paciente
• Si el suero no gotea, comprueba: vía permeable, altura del suero,
  acodamientos, rueda del regulador
```

**Alertas de seguridad:**
- Si el resultado es > 100 gotas/min: "⚠️ Este goteo es muy rápido. ¿Has verificado que el tiempo es correcto? Goteos tan rápidos pueden sobrecargar al paciente."
- Si el resultado es < 5 gotas/min: "⚠️ Este goteo es muy lento. Con goteos tan lentos, la vía puede obstruirse. Valora si es correcto o si necesitas un regulador de volumen."

---

### 2. CÁLCULO DE DOSIS (mg a ml)

**Descripción para el usuario:**
> "Esta calculadora te ayuda cuando tienes que administrar una dosis en miligramos pero el medicamento viene en una concentración (mg/ml). Te dice cuántos mililitros debes cargar en la jeringa."

**Campos a solicitar (uno por uno):**

| Orden | Campo | Explicación para el usuario | Ejemplo | Dónde encontrar el dato |
|-------|-------|----------------------------|---------|------------------------|
| 1 | Dosis prescrita (mg) | "¿Cuántos miligramos te han indicado que administres? Mira la orden médica." | "80 mg" | Orden médica |
| 2 | Concentración del medicamento disponible | "¿Qué concentración tiene el medicamento que tienes? Mira la etiqueta del vial o ampolla." | "40 mg/ml" o "40 mg en 2 ml" | Etiqueta del medicamento |
| 3 | Nombre del medicamento (opcional) | "¿Qué medicamento es? (para incluirlo en el resumen)" | "Furosemida" | — |

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Cargar 2 ml en la jeringa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RESUMEN DE TU CÁLCULO:
• Medicamento: Furosemida
• Dosis prescrita: 80 mg
• Concentración disponible: 40 mg/ml
• Volumen a administrar: 2 ml
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Coge una jeringa adecuada (en este caso, de 2 ml o 5 ml).

2. Carga exactamente 2 ml del medicamento.

3. ANTES DE ADMINISTRAR, verifica los 5 CORRECTOS:
   ☐ Paciente correcto
   ☐ Medicamento correcto
   ☐ Dosis correcta (80 mg = 2 ml)
   ☐ Vía correcta
   ☐ Hora correcta

4. Administra según la vía indicada.

5. REGISTRA: "Furosemida 80 mg (2 ml) [vía] a las [hora]"

⚠️ DOBLE CHECK:
• ¿La dosis de 80 mg es habitual para este medicamento y este paciente?
• ¿Has comprobado alergias?
• ¿Es la vía de administración correcta para esta presentación?
```

---

### 3. CÁLCULO DE DOSIS POR PESO (mg/kg)

**Descripción para el usuario:**
> "Esta calculadora te ayuda cuando la dosis del medicamento depende del peso del paciente. Muy útil en pediatría y en medicamentos que se dosifican por peso (como algunos antibióticos, anticoagulantes, etc.)."

**Campos a solicitar (uno por uno):**

| Orden | Campo | Explicación para el usuario | Ejemplo | Dónde encontrar el dato |
|-------|-------|----------------------------|---------|------------------------|
| 1 | Peso del paciente (kg) | "¿Cuánto pesa el paciente? Si solo tienes el peso en libras, márcalo y lo convertimos." | "70 kg" | Historia clínica, preguntar, pesar |
| 2 | Dosis prescrita (mg/kg) | "¿Cuántos mg por cada kg de peso te han indicado?" | "1 mg/kg" | Orden médica, protocolo |
| 3 | Concentración del medicamento | "¿Qué concentración tiene el medicamento disponible?" | "10 mg/ml" | Etiqueta del medicamento |
| 4 | Nombre del medicamento (opcional) | "¿Qué medicamento es?" | "Enoxaparina" | — |

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Dosis total: 70 mg
       Volumen a administrar: 7 ml
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RESUMEN DE TU CÁLCULO:
• Medicamento: Enoxaparina
• Peso del paciente: 70 kg
• Dosis por peso: 1 mg/kg
• Dosis total calculada: 70 mg
• Concentración disponible: 10 mg/ml
• Volumen final: 7 ml
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Confirma el peso del paciente (¿está actualizado?).

2. Prepara 7 ml del medicamento.

3. VERIFICA que la dosis total (70 mg) está dentro del rango
   habitual para este medicamento.

4. Administra según la vía indicada.

5. REGISTRA incluyendo el peso usado para el cálculo:
   "Enoxaparina 70 mg SC (1 mg/kg, peso 70 kg)"

⚠️ CONSIDERACIONES:
• En pacientes obesos, algunos medicamentos usan peso ideal
  en lugar de peso real. Consulta el protocolo.
• En insuficiencia renal, muchos medicamentos requieren ajuste.
• Si la dosis te parece muy alta o muy baja, consulta antes
  de administrar.
```

---

### 4. DILUCIÓN DE MEDICAMENTOS

**Descripción para el usuario:**
> "Esta calculadora te ayuda cuando tienes que diluir un medicamento antes de administrarlo. Te indica cuánto diluyente añadir y cuál será la concentración final."

**Campos a solicitar (uno por uno):**

| Orden | Campo | Explicación para el usuario | Ejemplo | Dónde encontrar el dato |
|-------|-------|----------------------------|---------|------------------------|
| 1 | Cantidad de medicamento (mg) | "¿Cuántos mg de medicamento tienes en el vial?" | "1000 mg" | Etiqueta del vial |
| 2 | Volumen del vial (ml) | "¿En cuántos ml viene el medicamento? Si es polvo liofilizado, pon 0." | "0 ml (polvo)" | Etiqueta del vial |
| 3 | Volumen de diluyente a añadir (ml) | "¿Cuántos ml de diluyente vas a añadir según la ficha técnica o protocolo?" | "10 ml" | Ficha técnica, protocolo |
| 4 | Nombre del medicamento (opcional) | "¿Qué medicamento es?" | "Vancomicina" | — |

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Concentración final: 100 mg/ml
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RESUMEN DE TU DILUCIÓN:
• Medicamento: Vancomicina
• Cantidad en el vial: 1000 mg
• Diluyente añadido: 10 ml
• Volumen total resultante: 10 ml
• Concentración final: 100 mg/ml

💡 ESTO SIGNIFICA:
Cada 1 ml de la solución preparada contiene 100 mg de Vancomicina.
Si necesitas administrar 500 mg, cargarás 5 ml.
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Carga 10 ml del diluyente indicado (habitualmente SF o agua
   para inyección, según ficha técnica).

2. Inyecta el diluyente en el vial de Vancomicina.

3. Agita suavemente (o según indique el medicamento) hasta
   disolución completa.

4. Ahora tienes una solución de 100 mg/ml.

5. Carga la cantidad que necesites según la dosis prescrita.

6. ETIQUETA el vial reconstituido con:
   • Nombre del medicamento y concentración
   • Fecha y hora de reconstitución
   • Tus iniciales
   • Caducidad tras reconstitución

⚠️ IMPORTANTE:
• Verifica el diluyente correcto (algunos medicamentos NO se pueden
  diluir con suero glucosado).
• Comprueba la estabilidad tras reconstitución (¿cuántas horas es válido?).
• Si la solución tiene partículas o cambio de color, NO la uses.
```

---

### 5. RITMO DE PERFUSIÓN (ml/hora para bomba)

**Descripción para el usuario:**
> "Esta calculadora te ayuda a programar la bomba de infusión cuando tienes que pasar un volumen determinado en un tiempo concreto. Te da el ritmo en ml/hora para introducir en la bomba."

**Campos a solicitar (uno por uno):**

| Orden | Campo | Explicación para el usuario | Ejemplo | Dónde encontrar el dato |
|-------|-------|----------------------------|---------|------------------------|
| 1 | Volumen total a infundir (ml) | "¿Cuántos ml tienes que pasar en total?" | "1000 ml" | Orden médica, etiqueta del suero |
| 2 | Tiempo de infusión | "¿En cuánto tiempo debe pasar?" Con opción de elegir: horas / minutos | "8 horas" | Orden médica |

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Programar bomba a: 125 ml/h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RESUMEN:
• Volumen total: 1000 ml
• Tiempo: 8 horas
• Ritmo: 125 ml/hora
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Conecta el sistema a la bomba de infusión.

2. Purga el sistema (elimina el aire).

3. Programa la bomba:
   • Volumen a infundir: 1000 ml (si la bomba lo pide)
   • Ritmo/velocidad: 125 ml/h

4. Inicia la infusión.

5. VERIFICA a los 5 minutos que la bomba está funcionando
   correctamente y no hay alarmas.

6. REGISTRA: "SF 1000ml IV en bomba a 125 ml/h (8h)"

⚠️ RECUERDA:
• Comprueba que la vía es permeable antes de iniciar.
• Revisa las conexiones (que no haya fugas).
• Pon la alarma de volumen si la bomba lo permite.
• Vigila signos de sobrecarga en pacientes de riesgo (ancianos,
  cardiópatas, renales).
```

---

### 6. PERFUSIÓN DE FÁRMACOS (dosis/tiempo en bomba)

**Descripción para el usuario:**
> "Esta calculadora te ayuda cuando tienes que preparar una perfusión continua de un medicamento (como dopamina, noradrenalina, insulina, etc.) y programar la bomba para administrar una dosis específica por minuto o por hora."

**Campos a solicitar (uno por uno):**

| Orden | Campo | Explicación para el usuario | Ejemplo | Dónde encontrar el dato |
|-------|-------|----------------------------|---------|------------------------|
| 1 | Medicamento | "¿Qué medicamento vas a perfundir?" (lista desplegable con los más comunes o campo libre) | "Insulina rápida" | Orden médica |
| 2 | Cantidad de medicamento añadida (unidades o mg) | "¿Cuánto medicamento has añadido a la bolsa/jeringa?" | "50 UI" | Lo que has cargado |
| 3 | Volumen total de la dilución (ml) | "¿En cuántos ml lo has diluido?" | "50 ml" | Volumen de la jeringa/bolsa |
| 4 | Dosis prescrita | "¿Qué dosis te han indicado?" Con opciones: UI/hora, mg/hora, mcg/kg/min, etc. | "3 UI/hora" | Orden médica |
| 5 | Peso del paciente (si aplica) | "Solo si la dosis es por kg" | "70 kg" | Historia, preguntar |

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Programar bomba a: 3 ml/h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RESUMEN DE TU PERFUSIÓN:
• Medicamento: Insulina rápida
• Preparación: 50 UI en 50 ml SF
• Concentración: 1 UI/ml
• Dosis prescrita: 3 UI/hora
• Ritmo de bomba: 3 ml/hora

💡 VERIFICACIÓN:
A 3 ml/h, tu jeringa de 50 ml durará aproximadamente 16.5 horas.
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Verifica la preparación:
   ☐ 50 UI de insulina rápida
   ☐ Diluidas en 50 ml de SF
   ☐ Concentración: 1 UI/ml

2. ETIQUETA la jeringa/bolsa claramente:
   "INSULINA 50 UI en 50 ml SF = 1 UI/ml"
   + Fecha, hora, tus iniciales

3. Conecta a la bomba de jeringa.

4. Programa: 3 ml/hora.

5. Inicia la perfusión.

6. REGISTRA: "Perfusión insulina rápida 3 UI/h (50UI/50ml, 3ml/h)"

⚠️ CONTROLES:
• Glucemia según pauta (habitualmente cada 1-2h al inicio).
• Vigila signos de hipoglucemia.
• Cuando cambies la jeringa, verifica que el ritmo sigue siendo
  el correcto.
• NUNCA pongas insulina en la misma vía que otros medicamentos
  sin verificar compatibilidad.
```

---

### 7. CONVERSIÓN DE UNIDADES

**Descripción para el usuario:**
> "Esta calculadora te ayuda a convertir entre diferentes unidades de medida que usamos en enfermería: mg a g, ml a L, gotas a ml, etc."

**Opciones de conversión:**

```
CONVERSIONES DISPONIBLES:

PESO:
• mg ↔ g ↔ kg
• mcg ↔ mg

VOLUMEN:
• ml ↔ L
• gotas ↔ ml (especificar tipo de gotero)

TIEMPO:
• minutos ↔ horas
• horas ↔ días

CONCENTRACIÓN:
• % ↔ mg/ml
• Proporción (1:1000) ↔ mg/ml
```

**Ejemplo para concentración en %:**

```
CONVERSIÓN: Porcentaje a mg/ml

"Las concentraciones en porcentaje (%) indican gramos de soluto
en 100 ml de solución."

EJEMPLO:
Suero Glucosado 5% significa:
5 g de glucosa en 100 ml
= 5000 mg en 100 ml
= 50 mg/ml

Introduce el porcentaje y te damos la equivalencia en mg/ml.
```

---

### 8. CÁLCULO DE INSULINA (escala móvil)

**Descripción para el usuario:**
> "Esta calculadora te ayuda a determinar cuántas unidades de insulina rápida administrar según la glucemia del paciente y la pauta de corrección prescrita."

**Campos a solicitar:**

| Orden | Campo | Explicación para el usuario |
|-------|-------|----------------------------|
| 1 | Glucemia actual (mg/dl) | "¿Cuál es la glucemia capilar del paciente ahora mismo?" |
| 2 | Tipo de pauta | Seleccionar: "Pauta estándar / Pauta sensible / Pauta resistente / Introducir pauta personalizada" |

**Si selecciona pauta personalizada:**
- Mostrar campos para definir rangos y dosis

**Resultado a mostrar:**
```
RESULTADO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Administrar: 4 UI de insulina rápida SC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DETALLE:
• Glucemia: 265 mg/dl
• Pauta aplicada: Estándar
• Rango 251-300 mg/dl → 4 UI
```

**Sección "Qué hacer ahora":**
```
✅ QUÉ HACER AHORA:

1. Carga 4 UI de insulina rápida en jeringa de insulina.

2. Administra vía SUBCUTÁNEA.
   Zonas recomendadas: abdomen, brazos, muslos.
   Rotar zona de punción.

3. REGISTRA:
   "Glucemia 265 mg/dl → Insulina rápida 4 UI SC (pauta corrección)"

4. Próximo control de glucemia según pauta (habitualmente
   antes de la siguiente comida o en 4-6 horas).

⚠️ ATENCIÓN:
• Si la glucemia es > 500 mg/dl: avisa al médico además de
  poner la insulina.
• Si el paciente tiene síntomas (náuseas, vómitos, confusión):
  valora cetoacidosis, avisa urgente.
• Si es la hora de la insulina basal, ponla ADEMÁS de esta
  corrección (son independientes).
```

---

## FUNCIONALIDADES ADICIONALES

### Historial de cálculos

```
HISTORIAL:

• Guardar los últimos 20 cálculos realizados
• Mostrar: fecha/hora, tipo de cálculo, resultado
• Permitir repetir un cálculo anterior
• Opción de borrar historial

Útil para:
• Recordar qué calculaste antes
• Verificar cálculos previos
• Repetir cálculos frecuentes
```

### Favoritos / Cálculos frecuentes

```
FAVORITOS:

Permitir guardar configuraciones frecuentes:
• "Goteo SF 500ml en 4h" → acceso rápido
• "Insulina 50UI/50ml" → acceso rápido

Mirela puede crear sus propios favoritos con los cálculos
que más usa en su día a día.
```

### Modo de verificación

```
VERIFICACIÓN INVERSA:

Función para verificar un cálculo ya hecho:
"Tengo que poner X ml, ¿es correcto para Y mg?"

Útil cuando:
• Otro profesional ha preparado la medicación
• Quieres verificar tu propio cálculo
• Doble check de seguridad
```

### Alertas y seguridad

```
ALERTAS AUTOMÁTICAS:

La calculadora debe alertar si:

⚠️ Dosis muy alta o muy baja para el medicamento (si se conoce)
⚠️ Volumen a administrar muy grande en bolo (> 10 ml IV directo)
⚠️ Goteo extremadamente rápido o lento
⚠️ Concentración final muy alta tras dilución
⚠️ Dosis pediátrica en rango adulto o viceversa

Todas las alertas son INFORMATIVAS, no bloquean el cálculo,
pero piden confirmación.
```

---

## INTERFAZ Y EXPERIENCIA DE USUARIO

### Pantalla de inicio

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│          💊 CALCULADORA DE DOSIS                            │
│          Para enfermería                                    │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │             │  │             │  │             │         │
│  │   💧        │  │   💉        │  │   ⚖️        │         │
│  │             │  │             │  │             │         │
│  │  Goteo      │  │  Dosis      │  │  Dosis      │         │
│  │  (gtt/min)  │  │  (mg→ml)    │  │  por peso   │         │
│  │             │  │             │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │             │  │             │  │             │         │
│  │   🧪        │  │   🔄        │  │   📊        │         │
│  │             │  │             │  │             │         │
│  │  Dilución   │  │  Bomba      │  │  Perfusión  │         │
│  │             │  │  (ml/h)     │  │  continua   │         │
│  │             │  │             │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐                          │
│  │             │  │             │                          │
│  │   🔢        │  │   💉        │                          │
│  │             │  │             │                          │
│  │ Conversión  │  │  Insulina   │                          │
│  │ unidades    │  │  (pauta)    │                          │
│  │             │  │             │                          │
│  └─────────────┘  └─────────────┘                          │
│                                                             │
│  ─────────────────────────────────────────────────         │
│  📜 Historial    ⭐ Favoritos    ⚙️ Ajustes                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Flujo de cada calculadora

```
FLUJO TIPO:

1. INTRODUCCIÓN
   ┌─────────────────────────────────────┐
   │ 💧 CÁLCULO DE GOTEO                 │
   │                                     │
   │ Esta calculadora te ayuda a saber   │
   │ a cuántas gotas por minuto debes    │
   │ regular el gotero...                │
   │                                     │
   │        [ EMPEZAR ]                  │
   └─────────────────────────────────────┘

2. CAMPO 1
   ┌─────────────────────────────────────┐
   │ Paso 1 de 3                    ●○○  │
   │                                     │
   │ VOLUMEN A INFUNDIR                  │
   │                                     │
   │ ¿Cuántos ml tienes que pasar?       │
   │ (Mira la etiqueta del suero)        │
   │                                     │
   │ ┌─────────────────────────────┐     │
   │ │                         ml  │     │
   │ └─────────────────────────────┘     │
   │                                     │
   │ Ejemplo: 500                        │
   │                                     │
   │   [ ATRÁS ]      [ SIGUIENTE ]      │
   └─────────────────────────────────────┘

3. CAMPO 2, 3... (igual)

4. RESULTADO
   ┌─────────────────────────────────────┐
   │ ✅ RESULTADO                        │
   │                                     │
   │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
   │        42 gotas por minuto          │
   │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
   │                                     │
   │ 📋 Resumen: 500ml en 4h, macrogotero│
   │                                     │
   │ ─────────────────────────────────── │
   │                                     │
   │ ✅ QUÉ HACER AHORA:                 │
   │                                     │
   │ 1. Regula el gotero contando...     │
   │ 2. Para 42 gtt/min, cuenta 10-11... │
   │ 3. Ajusta la rueda...               │
   │                                     │
   │ ─────────────────────────────────── │
   │                                     │
   │ [ NUEVO CÁLCULO ] [ GUARDAR ] [🏠]  │
   └─────────────────────────────────────┘
```

---

## TONO Y LENGUAJE

### Principios de comunicación

```
CÓMO HABLAR A MIRELA:

✅ USAR:
• Lenguaje claro y directo
• Frases cortas
• Ejemplos concretos
• Verbos en imperativo para acciones ("Carga", "Verifica", "Registra")
• Explicaciones del "por qué" cuando sea relevante
• Refuerzo positivo sutil

❌ EVITAR:
• Jerga innecesaria
• Frases largas y subordinadas
• Asumir conocimientos previos
• Tono condescendiente
• Tecnicismos sin explicación

EJEMPLOS:

❌ "Calcule el volumen resultante aplicando la fórmula de dilución"
✅ "¿Cuántos ml de diluyente vas a añadir?"

❌ "Proceda a la verificación de los parámetros introducidos"
✅ "Antes de administrar, verifica los 5 correctos"

❌ "El resultado obtenido es de X"
✅ "Resultado: X - Esto significa que debes cargar X ml"
```

---

## REQUISITOS TÉCNICOS

```
PLATAFORMA:
• Aplicación web responsive (funciona en móvil, tablet, PC)
• Opción de instalar como PWA (Progressive Web App)
• Funciona offline (los cálculos no requieren internet)

RENDIMIENTO:
• Carga inicial < 3 segundos
• Cálculos instantáneos
• Sin publicidad ni distracciones

ACCESIBILIDAD:
• Texto escalable
• Alto contraste disponible
• Compatible con lectores de pantalla
• Botones de tamaño táctil adecuado

PRIVACIDAD:
• No requiere registro para usar
• Historial guardado solo en dispositivo local
• Sin recopilación de datos personales
```

---

## RESUMEN EJECUTIVO

**Nombre sugerido:** "DosisCalc" o "CalcEnfermería" o "MediCalc Enfermería"

**Objetivo:** Proporcionar una herramienta de cálculo de dosis que sea tan clara y segura que Mirela pueda usarla con total confianza en su práctica diaria, reduciendo la ansiedad asociada a los cálculos farmacológicos y previniendo errores de medicación.

**Diferenciador clave:** No es solo una calculadora; es una guía paso a paso que:
1. Pide los datos de forma clara y secuencial
2. Oculta la complejidad matemática
3. Muestra el resultado de forma destacada
4. Explica QUÉ HACER con ese resultado
5. Incluye verificaciones de seguridad
6. Usa un lenguaje adaptado al perfil del usuario

**Calculadoras incluidas:**
1. Goteo (gotas/minuto)
2. Dosis mg a ml
3. Dosis por peso (mg/kg)
4. Dilución de medicamentos
5. Ritmo de perfusión (ml/h)
6. Perfusión continua de fármacos
7. Conversión de unidades
8. Pauta de insulina

---

*Prompt generado para el desarrollo de la Calculadora de Dosis · Proyecto Mirela Petrescu · Enero 2026*
