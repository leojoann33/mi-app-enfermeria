/**
 * EMAIL SERVICE - Wrapper para EmailJS
 * Gestiona el envío de correos transaccionales
 */

import emailjs from '@emailjs/browser';

// =================================================================
// ⚠️ CONFIGURACIÓN DE EMAILJS
// Regístrate en https://www.emailjs.com/
// =================================================================
// 1. Crea una cuenta gratuita
// 2. Añade un "Email Service" (ej. Gmail) -> Obtén el SERVICE_ID
// 3. Crea una "Email Template" -> Obtén el TEMPLATE_ID
// 4. Ve a Account -> API Keys -> Obtén el PUBLIC_KEY
// =================================================================

const CONFIG = {
  SERVICE_ID: 'service_z2lht8p',
  TEMPLATE_ID: 'template_zyrbvi7',
  PUBLIC_KEY: '4bUFeIp6aeHDfqaeg'
};

// Inicializar SDK (opcional, pero buena práctica si se usa init global)
// emailjs.init(CONFIG.PUBLIC_KEY);

/**
 * Envía un código de verificación de correo
 * @param {string} email - Correo del destinatario
 * @param {string} code - Código de 6 dígitos
 * @param {string} name - Nombre del usuario (opcional)
 */
export const sendVerificationCode = async (email, code, name = 'Usuario') => {
  try {
    if (CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('⚠️ EmailJS no configurado. Simulando envío...');
      console.log(`📧 [SIMULACIÓN] Envíando código ${code} a ${email}`);
      return { status: 200, text: 'OK (Simulated)' };
    }

    const templateParams = {
      to_email: email,
      to_name: name,
      code: code,
      type: 'Verificación de cuenta',
      message: `Tu código de verificación es: ${code}`
    };

    const response = await emailjs.send(
      CONFIG.SERVICE_ID,
      CONFIG.TEMPLATE_ID,
      templateParams,
      CONFIG.PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error('❌ Error enviando email:', error);
    throw error;
  }
};

/**
 * Envía recuperación de contraseña
 * @param {string} email - Correo del destinatario
 * @param {string} username - Nombre de usuario
 * @param {string} tempPassword - Nueva contraseña temporal o enlace
 */
export const sendPasswordRecovery = async (email, username, tempPassword) => {
  try {
    if (CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('⚠️ EmailJS no configurado. Simulando envío...');
      console.log(`📧 [SIMULACIÓN] Recuperación password para ${username} (${email}). Temp: ${tempPassword}`);
      return { status: 200, text: 'OK (Simulated)' };
    }

    const templateParams = {
      to_email: email,
      to_name: username,
      code: tempPassword, // Reutilizamos el campo variable 'code' o creamos uno nuevo en el template
      type: 'Recuperación de contraseña',
      message: `Hola ${username}, hemos recibido una solicitud para restablecer tu contraseña. Tu contraseña temporal es: ${tempPassword}. Por favor, inicie sesión y cámbiela inmediatamente.`
    };

    const response = await emailjs.send(
      CONFIG.SERVICE_ID,
      CONFIG.TEMPLATE_ID,
      templateParams,
      CONFIG.PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error('❌ Error enviando email:', error);
    throw error;
  }
};

/**
 * Envía recuperación de usuario
 * @param {string} email - Correo del destinatario
 * @param {string} username - Nombre de usuario recuperado
 */
export const sendUsernameRecovery = async (email, username) => {
  try {
    if (CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('⚠️ EmailJS no configurado. Simulando envío...');
      console.log(`📧 [SIMULACIÓN] Recuperación usuario envidada a ${email}. Usuario: ${username}`);
      return { status: 200, text: 'OK (Simulated)' };
    }

    const templateParams = {
      to_email: email,
      to_name: 'Usuario',
      code: username, // Usamos el campo code para mostrar el username
      type: 'Recordatorio de usuario',
      message: `Hola, el nombre de usuario asociado a este correo es: ${username}`
    };

    const response = await emailjs.send(
      CONFIG.SERVICE_ID,
      CONFIG.TEMPLATE_ID,
      templateParams,
      CONFIG.PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error('❌ Error enviando email:', error);
    throw error;
  }
};

export default {
  sendVerificationCode,
  sendPasswordRecovery,
  sendUsernameRecovery
};
