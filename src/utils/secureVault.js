/**
 * SECURE VAULT - Sistema de almacenamiento encriptado
 * Protege datos sensibles de usuarios con AES-256
 * 
 * Curso de Enfermería · Edición Mirela Petrescu · 2026
 */

import CryptoJS from 'crypto-js';

// Clave maestra derivada del entorno (en producción usar variable de entorno)
const VAULT_MASTER_KEY = 'PetrescuENF3_2026_SecureVault_MasterKey';
const VAULT_STORAGE_KEY = 'enf_secure_vault';
const USERS_STORAGE_KEY = 'enf_users_vault';

/**
 * Genera un salt único para cada usuario
 */
const generateSalt = () => {
  return CryptoJS.lib.WordArray.random(128 / 8).toString();
};

/**
 * Deriva una clave de la contraseña del usuario + salt
 * Usando PBKDF2 para mayor seguridad
 */
const deriveKey = (password, salt) => {
  return CryptoJS.PBKDF2(password, salt, {
    keySize: 256 / 32,
    iterations: 10000
  }).toString();
};

/**
 * Hash de contraseña (irreversible) para almacenamiento
 */
export const hashPassword = (password, salt) => {
  const combined = password + salt + VAULT_MASTER_KEY;
  return CryptoJS.SHA256(combined).toString();
};

/**
 * Encripta datos sensibles con AES-256
 */
export const encryptData = (data, key = VAULT_MASTER_KEY) => {
  try {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, key).toString();
    return encrypted;
  } catch (error) {
    console.error('Error encriptando datos:', error);
    return null;
  }
};

/**
 * Desencripta datos
 */
export const decryptData = (encryptedData, key = VAULT_MASTER_KEY) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedString) return null;
    return JSON.parse(decryptedString);
  } catch (error) {
    console.error('Error desencriptando datos:', error);
    return null;
  }
};

/**
 * VAULT DE USUARIOS - Almacena usuarios de forma segura
 */
export const SecureUsersVault = {
  /**
   * Obtiene todos los usuarios (desencriptados)
   */
  getUsers: () => {
    try {
      const encrypted = localStorage.getItem(USERS_STORAGE_KEY);
      if (!encrypted) return [];
      const decrypted = decryptData(encrypted);
      return decrypted || [];
    } catch (error) {
      console.error('Error leyendo vault de usuarios:', error);
      return [];
    }
  },

  /**
   * Guarda la lista de usuarios (encriptada)
   */
  saveUsers: (users) => {
    try {
      const encrypted = encryptData(users);
      localStorage.setItem(USERS_STORAGE_KEY, encrypted);
      return true;
    } catch (error) {
      console.error('Error guardando vault de usuarios:', error);
      return false;
    }
  },

  /**
   * Registra un nuevo usuario con datos encriptados
   */
  registerUser: (userData) => {
    const users = SecureUsersVault.getUsers();
    
    // Verificar si ya existe
    if (users.find(u => u.username === userData.username)) {
      throw new Error('El usuario ya existe');
    }
    if (users.find(u => u.email === userData.email)) {
      throw new Error('El email ya está registrado');
    }

    // Generar salt único para este usuario
    const salt = generateSalt();
    
    // Hash de la contraseña (NUNCA guardamos la contraseña en texto plano)
    const passwordHash = hashPassword(userData.password, salt);
    
    // Crear objeto de usuario seguro
    const secureUser = {
      id: CryptoJS.lib.WordArray.random(16).toString(),
      username: userData.username,
      email: userData.email,
      // Datos personales encriptados con clave derivada de la contraseña
      encryptedData: encryptData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        profession: userData.profession || 'Enfermera/o',
        phone: userData.phone || '',
        createdAt: new Date().toISOString()
      }, deriveKey(userData.password, salt)),
      passwordHash,
      salt,
      createdAt: new Date().toISOString(),
      lastLogin: null
    };

    users.push(secureUser);
    SecureUsersVault.saveUsers(users);
    
    return secureUser;
  },

  /**
   * Autentica un usuario y devuelve sus datos desencriptados
   */
  authenticateUser: (username, password) => {
    const users = SecureUsersVault.getUsers();
    const user = users.find(u => u.username === username);
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar contraseña
    const passwordHash = hashPassword(password, user.salt);
    if (passwordHash !== user.passwordHash) {
      throw new Error('Contraseña incorrecta');
    }

    // Desencriptar datos personales con la contraseña del usuario
    const derivedKey = deriveKey(password, user.salt);
    const personalData = decryptData(user.encryptedData, derivedKey);

    // Actualizar último login
    user.lastLogin = new Date().toISOString();
    SecureUsersVault.saveUsers(users);

    // Devolver usuario con datos desencriptados (mezclando datos base + datos desencriptados)
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      ...personalData // Incluir todos los datos desencriptados (progress, profession, etc)
    };
  },

  /**
   * Actualiza datos de un usuario
   */
  updateUser: (userId, password, updates) => {
    const users = SecureUsersVault.getUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      throw new Error('Usuario no encontrado');
    }

    const user = users[userIndex];
    const derivedKey = deriveKey(password, user.salt);

    // Desencriptar datos actuales
    const currentData = decryptData(user.encryptedData, derivedKey);
    
    // Actualizar datos
    const updatedData = { ...currentData, ...updates };
    
    // Re-encriptar
    user.encryptedData = encryptData(updatedData, derivedKey);
    
    users[userIndex] = user;
    SecureUsersVault.saveUsers(users);
    
    return true;
  },

  /**
   * Elimina un usuario
   */
  deleteUser: (userId) => {
    const users = SecureUsersVault.getUsers();
    const filtered = users.filter(u => u.id !== userId);
    SecureUsersVault.saveUsers(filtered);
    return true;
  },

  /**
   * Limpia todo el vault (para desarrollo/debugging)
   */
  clearVault: () => {
    localStorage.removeItem(USERS_STORAGE_KEY);
    localStorage.removeItem(VAULT_STORAGE_KEY);
  }
};

/**
 * SESIÓN SEGURA - Maneja la sesión del usuario actual
 */
const SESSION_KEY = 'enf_secure_session';

export const SecureSession = {
  /**
   * Guarda la sesión del usuario (encriptada)
   */
  save: (userData) => {
    const sessionData = {
      ...userData,
      sessionCreated: new Date().toISOString(),
      sessionExpiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 días
    };
    const encrypted = encryptData(sessionData);
    localStorage.setItem(SESSION_KEY, encrypted);
  },

  /**
   * Obtiene la sesión actual
   */
  get: () => {
    try {
      const encrypted = localStorage.getItem(SESSION_KEY);
      if (!encrypted) return null;
      
      const session = decryptData(encrypted);
      if (!session) return null;

      // Verificar si expiró
      if (new Date(session.sessionExpiry) < new Date()) {
        SecureSession.clear();
        return null;
      }

      return session;
    } catch (error) {
      return null;
    }
  },

  /**
   * Limpia la sesión
   */
  clear: () => {
    localStorage.removeItem(SESSION_KEY);
  }
};

export default { SecureUsersVault, SecureSession, encryptData, decryptData, hashPassword };
