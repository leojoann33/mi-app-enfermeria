import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Lock, Mail, X, Send, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal = ({ isOpen, onClose, lang, initialTab = 'login' }) => {
  const { login, register, loginAsGuest, sendVerificationCode, verifyCode } = useAuth();
  const [activeTab, setActiveTab] = useState(initialTab); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  // Sincronizar activeTab cuando el modal se abre
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setError('');
    }
  }, [isOpen, initialTab]);

  const isEs = lang === 'es';

  // Login form state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  // Register form state
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
    website: '' // 🍯 Honeypot - campo trampa para bots
  });

  // 🍯 Anti-bot: timestamp cuando se carga el formulario
  const [formLoadTime, setFormLoadTime] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const MIN_FORM_TIME = 3000; // Mínimo 3 segundos para enviar (humano normal)

  // Resetear timestamp cuando cambia a pestaña de registro
  useEffect(() => {
    if (activeTab === 'register') {
      setFormLoadTime(Date.now());
    }
  }, [activeTab]);

  const t = {
    login: isEs ? 'Iniciar sesión' : 'Autentificare',
    register: isEs ? 'Registrarse' : 'Înregistrare',
    firstName: isEs ? 'Nombre' : 'Prenume',
    lastName: isEs ? 'Apellidos' : 'Nume',
    username: isEs ? 'Usuario' : 'Utilizator',
    password: isEs ? 'Contraseña' : 'Parolă',
    confirmPassword: isEs ? 'Verificar contraseña' : 'Verifică parola',
    email: isEs ? 'Correo electrónico' : 'Email',
    verificationCode: isEs ? 'Código de verificación' : 'Cod de verificare',
    sendCode: isEs ? 'Enviar código' : 'Trimite cod',
    codeSent: isEs ? 'Código enviado' : 'Cod trimis',
    forgotPassword: isEs ? 'Contraseña olvidada' : 'Parolă uitată',
    forgotUsername: isEs ? 'Nombre de usuario olvidado' : 'Utilizator uitat',
    guestMode: isEs ? 'Entrar como invitado' : 'Intră ca invitat',
    loginButton: isEs ? 'Iniciar sesión' : 'Autentificare',
    registerButton: isEs ? 'Registrarse' : 'Înregistrare',
    guestWarning: isEs 
      ? 'Como invitado no se guardará ningún progreso' 
      : 'Ca invitat, progresul nu va fi salvat',
    verificationInfo: isEs
      ? 'Se enviará un código de 6 dígitos a tu correo'
      : 'Un cod de 6 cifre va fi trimis la email-ul tău'
  };

  const handleSendVerificationCode = async () => {
    if (!registerForm.email) {
      setError(isEs ? 'Ingresa un correo electrónico' : 'Introdu un email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerForm.email)) {
      setError(isEs ? 'Email inválido' : 'Email invalid');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await sendVerificationCode(registerForm.email);
      setVerificationSent(true);
      // Show the code in console for demo purposes
      const code = localStorage.getItem('verificationCode');
      // alert(isEs 
      //   ? `Código de verificación (DEMO): ${code}\n\nEn producción, este código se enviaría a ${registerForm.email}`
      //   : `Cod de verificare (DEMO): ${code}\n\nÎn producție, acest cod ar fi trimis la ${registerForm.email}`
      // );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(loginForm.username, loginForm.password);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    // 🍯 ANTI-BOT: Verificar honeypot
    if (registerForm.website) {
      // Bot detectado - campo trampa rellenado
      console.warn('🍯 Bot detectado: honeypot field filled');
      setError(isEs ? 'Error de validación. Intenta de nuevo.' : 'Eroare de validare. Încearcă din nou.');
      return;
    }

    // 🍯 ANTI-BOT: Verificar tiempo mínimo
    const timeElapsed = Date.now() - formLoadTime;
    if (timeElapsed < MIN_FORM_TIME) {
      console.warn(`🍯 Bot detectado: formulario enviado muy rápido (${timeElapsed}ms)`);
      setError(isEs ? 'Por favor, tómate tu tiempo para completar el formulario.' : 'Te rog, ia-ți timp pentru a completa formularul.');
      return;
    }

    // Validation
    if (!registerForm.firstName || !registerForm.lastName || !registerForm.email || !registerForm.username || !registerForm.password || !registerForm.confirmPassword) {
      setError(isEs ? 'Todos los campos son obligatorios' : 'Toate câmpurile sunt obligatorii');
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError(isEs ? 'Las contraseñas no coinciden' : 'Parolele nu se potrivesc');
      return;
    }

    if (registerForm.password.length < 6) {
      setError(isEs ? 'La contraseña debe tener al menos 6 caracteres' : 'Parola trebuie să aibă cel puțin 6 caractere');
      return;
    }

    setLoading(true);

    try {
      await register(
        registerForm.email, 
        registerForm.username, 
        registerForm.password,
        registerForm.firstName,
        registerForm.lastName
      );
      // Success - show confirmation
      setRegistrationSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    onClose();
  };

  if (!isOpen) return null;

  if (!isOpen) return null;

  // Renderado de contenido según la pestaña activa
  const renderContent = () => {
    // --- REGISTRATION SUCCESS VIEW ---
      if (registrationSuccess) {
      return (
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-light text-brand-primary mb-6 animate-bounce">
             <CheckCircle size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            {isEs ? '¡Bienvenido(a) a la familia!' : 'Bun venit în familie!'}
          </h3>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6 text-left">
            <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
              <Mail size={18} className="text-brand-primary" />
              {isEs ? 'Información Importante' : 'Informații Importante'}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isEs 
                ? 'Gracias por registrarte. Tu cuenta ha sido creada exitosamente y ya has iniciado sesión.' 
                : 'Mulțumim pentru înregistrare. Contul tău a fost creat cu succes și ești deja autentificat.'}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200">
               <p className="text-xs text-slate-500 italic">
                 {isEs 
                  ? 'PD: Si esperas un correo nuestro y no lo recibes, por favor revisa tu carpeta de Spam o Correo No Deseado.' 
                  : 'PS: Dacă aștepți un email de la noi și nu îl primești, te rugăm să verifici folderul Spam.'}
               </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-deep transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-primary/20"
          >
            {isEs ? '¡Continuar y Empezar!' : 'Continuă și Începe!'}
          </button>
        </div>
      );
    }

    // --- FORGOT PASSWORD VIEW ---
    if (activeTab === 'forgot-password') {
      return (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
              <Lock size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              {isEs ? 'Recuperar contraseña' : 'Recuperare parolă'}
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              {isEs 
                ? 'Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.' 
                : 'Introdu adresa de email și îți vom trimite instrucțiuni pentru resetarea parolei.'}
            </p>
          </div>

          <form onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            try {
              const { recoverPassword } = useAuth();
              await recoverPassword(loginForm.username); // Reutilizamos campo username como email o añadimos campo específico
              setVerificationSent(true);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          }}>
            <div className="mb-4">
               <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Mail size={16} />
                  {t.email}
               </label>
               {/* Reusamos verificationEmail state o creamos uno nuevo. 
                   Para simplificar, usaremos un input local o el registerForm.email 
               */}
               <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="ejemplo@correo.com"
                  required
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})} // Hack: guardamos email en username prop temporalmente
               />
            </div>

            {verificationSent ? (
              <div className="bg-brand-light p-4 rounded-xl text-center mb-4">
                <CheckCircle className="mx-auto text-brand-primary mb-2" size={32} />
                <p className="text-brand-deep font-bold">
                  {isEs ? '¡Correo enviado!' : 'Email trimis!'}
                </p>
                <p className="text-sm text-brand-primary mt-1">
                  {isEs ? 'Revisa tu bandeja de entrada.' : 'Verifică inbox-ul.'}
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-deep transition-colors disabled:opacity-50"
              >
                {loading ? (isEs ? 'Enviando...' : 'Se trimite...') : (isEs ? 'Enviar enlace' : 'Trimite link')}
              </button>
            )}

            <button
              type="button"
              onClick={() => { setActiveTab('login'); setVerificationSent(false); setError(''); }}
              className="w-full py-3 text-slate-500 font-bold text-sm hover:text-slate-700 mt-2"
            >
              {isEs ? 'Volver a Iniciar Sesión' : 'Înapoi la Autentificare'}
            </button>
          </form>
        </div>
      );
    }

    // --- FORGOT USERNAME VIEW ---
    if (activeTab === 'forgot-username') {
      return (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <User size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              {isEs ? 'Recuperar usuario' : 'Recuperare utilizator'}
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              {isEs 
                ? 'Ingresa tu correo y te enviaremos tu nombre de usuario.' 
                : 'Introdu email-ul și îți vom trimite numele de utilizator.'}
            </p>
          </div>

          <form onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setError('');
            try {
              const { recoverUsername } = useAuth();
              await recoverUsername(loginForm.username); // Reutilizamos campo
              setVerificationSent(true);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          }}>
            <div className="mb-4">
               <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Mail size={16} />
                  {t.email}
               </label>
               <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="ejemplo@correo.com"
                  required
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
               />
            </div>

            {verificationSent ? (
              <div className="bg-brand-light p-4 rounded-xl text-center mb-4">
                <CheckCircle className="mx-auto text-brand-primary mb-2" size={32} />
                <p className="text-green-800 font-bold">
                  {isEs ? '¡Correo enviado!' : 'Email trimis!'}
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-deep transition-colors disabled:opacity-50"
              >
                {loading ? (isEs ? 'Enviando...' : 'Se trimite...') : (isEs ? 'Recuperar usuario' : 'Recuperează utilizator')}
              </button>
            )}

            <button
              type="button"
              onClick={() => { setActiveTab('login'); setVerificationSent(false); setError(''); }}
              className="w-full py-3 text-slate-500 font-bold text-sm hover:text-slate-700 mt-2"
            >
              {isEs ? 'Volver a Iniciar Sesión' : 'Înapoi la Autentificare'}
            </button>
          </form>
        </div>
      );
    }

    // --- LOGIN VIEW ---
    if (activeTab === 'login') {
      return (
        <form onSubmit={handleLogin} className="space-y-4">
              {/* Username */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <User size={16} />
                  {t.username}
                </label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder={isEs ? 'Introduce tu usuario' : 'Introdu utilizatorul'}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Lock size={16} />
                  {t.password}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder={isEs ? 'Introducir la contraseña' : 'Introdu parola'}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (isEs ? 'Cargando...' : 'Se încarcă...') : t.loginButton}
              </button>

              {/* Forgot Links */}
              <div className="space-y-2 text-center">
                <button
                  type="button"
                  onClick={() => { setActiveTab('forgot-password'); setError(''); setVerificationSent(false); }}
                  className="block w-full text-sm text-slate-500 hover:text-brand-primary transition-colors"
                >
                  {t.forgotPassword}
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('forgot-username'); setError(''); setVerificationSent(false); }}
                  className="block w-full text-sm text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {t.forgotUsername}
                </button>
              </div>

              {/* Guest Mode */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-amber-600 text-center mb-3 font-medium">
                  ⚠️ {t.guestWarning}
                </p>
                <button
                  type="button"
                  onClick={handleGuestLogin}
                  className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  {t.guestMode}
                </button>
              </div>
            </form>
      );
    }

    // --- REGISTER VIEW ---
    return (
            <form onSubmit={handleRegister} className="space-y-4">
              {/* 🍯 HONEYPOT: Campo trampa invisible para bots */}
              <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="website">Website (no rellenar)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={registerForm.website}
                  onChange={(e) => setRegisterForm({ ...registerForm, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* First Name and Last Name - Side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <User size={16} />
                    {t.firstName}
                  </label>
                  <input
                    type="text"
                    value={registerForm.firstName}
                    onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder={isEs ? 'Nombre' : 'Prenume'}
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <User size={16} />
                    {t.lastName}
                  </label>
                  <input
                    type="text"
                    value={registerForm.lastName}
                    onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder={isEs ? 'Apellidos' : 'Nume'}
                    required
                  />
                </div>
              </div>

              {/* Email (Sin verificación) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Mail size={16} />
                  {t.email}
                </label>
                <input
                    type="email"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="ejemplo@correo.com"
                    required
                />
              </div>

              {/* Username */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <User size={16} />
                  {t.username}
                </label>
                <input
                  type="text"
                  value={registerForm.username}
                  onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder={isEs ? 'Elige un nombre de usuario' : 'Alege un nume de utilizator'}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Lock size={16} />
                  {t.password}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder={isEs ? 'Mínimo 6 caracteres' : 'Minim 6 caractere'}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Lock size={16} />
                  {t.confirmPassword}
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder={isEs ? 'Repite la contraseña' : 'Repetă parola'}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading || !verificationSent}
                className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (isEs ? 'Cargando...' : 'Se încarcă...') : t.registerButton}
              </button>
            </form>
    );
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full md:w-[402px] bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-brand-primary p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <h1 className="text-2xl font-bold text-center">
            {isEs ? 'Conexión' : 'Conexiune'}
          </h1>
        </div>

        {/* Logo/Brand - Updated with nurse image */}
        <div className="flex flex-col items-center py-6 border-b border-slate-200 bg-[#e3e8ef]">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-primary shadow-lg flex-shrink-0 mb-3">
            <img 
              src="/images/nurse_profile.png" 
              alt="Nurse Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-slate-800">PetrescuENF3</h2>
        </div>

        {/* Tabs - Solo mostrarlas si no estamos en recuperación */}
        {!['forgot-password', 'forgot-username'].includes(activeTab) && (
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => { setActiveTab('login'); setError(''); }}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'login'
                  ? 'text-brand-primary border-b-2 border-brand-primary'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {t.login}
            </button>
            <button
              onClick={() => { setActiveTab('register'); setError(''); setVerificationSent(false); }}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'register'
                  ? 'text-brand-primary border-b-2 border-brand-primary'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {t.register}
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {renderContent()}
        </div>
      </div>
    </div>
  );
};
