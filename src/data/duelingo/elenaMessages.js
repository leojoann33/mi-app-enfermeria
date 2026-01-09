/**
 * DATABASE: MARIA_ISABELA_MESSAGES
 * Mensajes amigables estilo Duolingo para el juego DUElingo
 * Curso de Enfermería · Edición Mirela Petrescu · 2026
 * Tono: Cálido, motivador, cercano pero profesional.
 */

// ------------------------------------------------------------------
// 1. MENSAJES DE BIENVENIDA (Usuario registrado)
// ------------------------------------------------------------------
export const WELCOME_MESSAGES_LOGGED = [
  // Saludos cálidos personalizados
  { id: 1, textES: "¡Hola, {name}! ¿Lista para aprender hoy?", textRO: "Bună, {name}! Gata să înveți azi?" },
  { id: 2, textES: "¡Qué bien verte, {name}! Vamos a practicar.", textRO: "Ce bine că te văd, {name}! Hai să exersăm." },
  { id: 3, textES: "¡{name}! Te estaba esperando.", textRO: "{name}! Te așteptam." },
  { id: 4, textES: "¡Hola, {name}! Tu racha de estudio me encanta.", textRO: "Bună, {name}! Îmi place seria ta de studiu." },
  { id: 5, textES: "¡Genial que volviste, {name}!", textRO: "Minunat că te-ai întors, {name}!" },
  { id: 6, textES: "¡Hola! ¿Qué tal, {name}? A por ello.", textRO: "Bună! Ce faci, {name}? Hai la treabă." },
  { id: 7, textES: "¡{name}! Cada día eres mejor enfermera.", textRO: "{name}! În fiecare zi ești o asistentă mai bună." },
  { id: 8, textES: "¡Bienvenida de nuevo, {name}!", textRO: "Bine ai revenit, {name}!" },
  { id: 9, textES: "¡Hola, {name}! Tu esfuerzo vale la pena.", textRO: "Bună, {name}! Efortul tău merită." },
  { id: 10, textES: "¡{name}! Hoy vamos a brillar.", textRO: "{name}! Azi o să strălucim." },
  
  // Motivación suave
  { id: 11, textES: "¡Vamos, {name}! Solo unos minutos de práctica.", textRO: "Hai, {name}! Doar câteva minute de practică." },
  { id: 12, textES: "¡Tú puedes, {name}! Empecemos.", textRO: "Tu poți, {name}! Să începem." },
  { id: 13, textES: "¡{name}! Un poquito de estudio hará la diferencia.", textRO: "{name}! Puțin studiu va face diferența." },
  { id: 14, textES: "¡Hola, {name}! ¿Repasamos juntas?", textRO: "Bună, {name}! Recapitulăm împreună?" },
  { id: 15, textES: "¡{name}, qué alegría verte por aquí!", textRO: "{name}, ce bucurie să te văd pe aici!" },
  { id: 16, textES: "¡Hola! {name}, hoy aprenderás algo nuevo.", textRO: "Bună! {name}, azi vei învăța ceva nou." },
  { id: 17, textES: "¡{name}! La constancia es tu superpoder.", textRO: "{name}! Constanța e superputerea ta." },
  { id: 18, textES: "¡Qué bueno que practicas, {name}!", textRO: "Ce bine că exersezi, {name}!" },
  { id: 19, textES: "¡Hola, {name}! Cada pregunta te acerca a tu meta.", textRO: "Bună, {name}! Fiecare întrebare te apropie de obiectiv." },
  { id: 20, textES: "¡{name}! Estoy orgullosa de tu dedicación.", textRO: "{name}! Sunt mândră de dedicarea ta." },

  // Variaciones adicionales
  ...Array.from({ length: 80 }, (_, i) => ({
    id: 21 + i,
    textES: [
      "¡Hola, {name}! ¿Vamos?",
      "¡{name}! Me alegro de verte.",
      "¡Bienvenida, {name}!",
      "¡{name}, a practicar!",
      "¡Hola! ¿Lista, {name}?",
      "¡{name}! Sigamos aprendiendo.",
      "¡Qué bien, {name}! Aquí estamos.",
      "¡Hola, {name}! Vamos paso a paso.",
      "¡{name}! Un día más, un logro más.",
      "¡Bienvenida! {name}, empecemos."
    ][i % 10],
    textRO: [
      "Bună, {name}! Mergem?",
      "{name}! Mă bucur să te văd.",
      "Bine ai venit, {name}!",
      "{name}, la practică!",
      "Bună! Gata, {name}?",
      "{name}! Să continuăm să învățăm.",
      "Ce bine, {name}! Iată-ne.",
      "Bună, {name}! Mergem pas cu pas.",
      "{name}! Încă o zi, încă o realizare.",
      "Bine ai venit! {name}, să începem."
    ][i % 10]
  }))
];

export const WELCOME_MESSAGES_GUEST = [
  { id: 1, textES: "¡Hola! Bienvenida a DUElingo.", textRO: "Bună! Bine ai venit la DUElingo." },
  { id: 2, textES: "¡Hola! ¿Lista para empezar?", textRO: "Bună! Gata să începi?" },
  { id: 3, textES: "¡Bienvenida! Vamos a aprender juntas.", textRO: "Bine ai venit! Hai să învățăm împreună." },
  { id: 4, textES: "¡Hola! Aquí practicamos enfermería.", textRO: "Bună! Aici exersăm nursing." },
  { id: 5, textES: "¡Bienvenida a la práctica!", textRO: "Bine ai venit la practică!" },
  { id: 6, textES: "¡Hola! Yo soy María Isabela, tu guía.", textRO: "Bună! Eu sunt Maria Isabela, ghidul tău." },
  { id: 7, textES: "¡Qué bien que estés aquí!", textRO: "Ce bine că ești aici!" },
  { id: 8, textES: "¡Hola! Aprender es divertido.", textRO: "Bună! A învăța e distractiv." },
  { id: 9, textES: "¡Bienvenida! Cada día cuenta.", textRO: "Bine ai venit! Fiecare zi contează." },
  { id: 10, textES: "¡Hola! Vamos a por ello.", textRO: "Bună! Hai la treabă." }
];

// ------------------------------------------------------------------
// 2. MENSAJES DE RESPUESTA CORRECTA
// ------------------------------------------------------------------
export const CORRECT_MESSAGES = [
  // Celebración breve
  { id: 1, textES: "¡Muy bien!", textRO: "Foarte bine!" },
  { id: 2, textES: "¡Correcto!", textRO: "Corect!" },
  { id: 3, textES: "¡Eso es!", textRO: "Asta e!" },
  { id: 4, textES: "¡Genial!", textRO: "Genial!" },
  { id: 5, textES: "¡Excelente!", textRO: "Excelent!" },
  { id: 6, textES: "¡Perfecto!", textRO: "Perfect!" },
  { id: 7, textES: "¡Bien hecho!", textRO: "Bine făcut!" },
  { id: 8, textES: "¡Exacto!", textRO: "Exact!" },
  { id: 9, textES: "¡Así se hace!", textRO: "Așa se face!" },
  { id: 10, textES: "¡Lo lograste!", textRO: "Ai reușit!" },
  
  // Refuerzo positivo
  { id: 11, textES: "¡Vas muy bien!", textRO: "Mergi foarte bine!" },
  { id: 12, textES: "¡Sigue así!", textRO: "Continuă așa!" },
  { id: 13, textES: "¡Imparable!", textRO: "De neoprit!" },
  { id: 14, textES: "¡Qué nivel!", textRO: "Ce nivel!" },
  { id: 15, textES: "¡Increíble!", textRO: "Incredibil!" },
  { id: 16, textES: "¡Eres una crack!", textRO: "Ești o campioană!" },
  { id: 17, textES: "¡Bravo!", textRO: "Bravo!" },
  { id: 18, textES: "¡Fenomenal!", textRO: "Fenomenal!" },
  { id: 19, textES: "¡Estupendo!", textRO: "Grozav!" },
  { id: 20, textES: "¡Qué bien lo sabes!", textRO: "Ce bine știi!" },

  // Variaciones adicionales
  ...Array.from({ length: 80 }, (_, i) => ({
    id: 21 + i,
    textES: [
      "¡Correcto!",
      "¡Muy bien!",
      "¡Sí!",
      "¡Eso!",
      "¡Genial!",
      "¡Bien!",
      "¡Perfecto!",
      "¡Super!",
      "¡Buen trabajo!",
      "¡Acertaste!"
    ][i % 10],
    textRO: [
      "Corect!",
      "Foarte bine!",
      "Da!",
      "Asta!",
      "Genial!",
      "Bine!",
      "Perfect!",
      "Super!",
      "Bună treabă!",
      "Ai ghicit!"
    ][i % 10]
  }))
];

// ------------------------------------------------------------------
// 3. MENSAJES DE RESPUESTA INCORRECTA
// ------------------------------------------------------------------
export const WRONG_MESSAGES = [
  // Ánimo tras el error
  { id: 1, textES: "¡Casi! Inténtalo de nuevo.", textRO: "Aproape! Încearcă din nou." },
  { id: 2, textES: "No pasa nada, sigue intentando.", textRO: "Nu-i nimic, continuă să încerci." },
  { id: 3, textES: "¡Ups! Esa no era.", textRO: "Ups! Nu era aia." },
  { id: 4, textES: "Mmm, no es correcta.", textRO: "Hmm, nu e corectă." },
  { id: 5, textES: "¡Ánimo! La próxima la aciertas.", textRO: "Curaj! Data viitoare o nimerești." },
  { id: 6, textES: "No te preocupes, así se aprende.", textRO: "Nu-ți face griji, așa se învață." },
  { id: 7, textES: "¡Vamos! Puedes hacerlo mejor.", textRO: "Hai! Poți face mai bine." },
  { id: 8, textES: "Revisa bien la pregunta.", textRO: "Verifică bine întrebarea." },
  { id: 9, textES: "No es esa, pero vas bien.", textRO: "Nu e aia, dar mergi bine." },
  { id: 10, textES: "¡Sigue practicando!", textRO: "Continuă să exersezi!" },
  
  // Orientación amable
  { id: 11, textES: "Piénsalo un poco más.", textRO: "Mai gândește-te puțin." },
  { id: 12, textES: "Lee de nuevo con calma.", textRO: "Citește din nou cu calm." },
  { id: 13, textES: "La respuesta correcta es otra.", textRO: "Răspunsul corect e altul." },
  { id: 14, textES: "Equivocarse es parte del camino.", textRO: "A greși face parte din drum." },
  { id: 15, textES: "¡Tú puedes! Inténtalo otra vez.", textRO: "Tu poți! Încearcă din nou." },
  { id: 16, textES: "Cada error te hace más fuerte.", textRO: "Fiecare greșeală te face mai puternică." },
  { id: 17, textES: "Fíjate bien en las opciones.", textRO: "Uită-te bine la opțiuni." },
  { id: 18, textES: "No era esa, pero sigues aprendiendo.", textRO: "Nu era aia, dar continui să înveți." },
  { id: 19, textES: "¡A la siguiente!", textRO: "La următoarea!" },
  { id: 20, textES: "Tranquila, lo conseguirás.", textRO: "Liniștită, o să reușești." },

  // Variaciones adicionales
  ...Array.from({ length: 80 }, (_, i) => ({
    id: 21 + i,
    textES: [
      "¡Ups!",
      "Casi casi...",
      "No es esa.",
      "Inténtalo de nuevo.",
      "¡Ánimo!",
      "Prueba otra vez.",
      "Sigue intentando.",
      "No pasa nada.",
      "¡Vamos!",
      "La próxima."
    ][i % 10],
    textRO: [
      "Ups!",
      "Aproape...",
      "Nu e aia.",
      "Încearcă din nou.",
      "Curaj!",
      "Mai încearcă.",
      "Continuă să încerci.",
      "Nu-i nimic.",
      "Hai!",
      "Data viitoare."
    ][i % 10]
  }))
];

// ------------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------------
export const getRandomWelcomeMessage = (isLoggedIn, userName, isEs = true) => {
  const messages = isLoggedIn ? WELCOME_MESSAGES_LOGGED : WELCOME_MESSAGES_GUEST;
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  
  let text = isEs ? message.textES : message.textRO;
  
  if (isLoggedIn && userName) {
    text = text.replace(/{name}/g, userName);
  }
  
  return text;
};

export const getCorrectMessage = (isEs = true) => {
  const randomIndex = Math.floor(Math.random() * CORRECT_MESSAGES.length);
  return isEs ? CORRECT_MESSAGES[randomIndex].textES : CORRECT_MESSAGES[randomIndex].textRO;
};

export const getWrongMessage = (isEs = true) => {
  const randomIndex = Math.floor(Math.random() * WRONG_MESSAGES.length);
  return isEs ? WRONG_MESSAGES[randomIndex].textES : WRONG_MESSAGES[randomIndex].textRO;
};
