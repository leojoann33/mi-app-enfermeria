import React, { useState, useEffect } from 'react';
import { 
  ThermometerSun, Heart, Wind, Activity, Droplets, AlertTriangle, 
  CheckCircle, Info, Calculator, FlaskConical, 
  XCircle, Stethoscope, ArrowLeft, ChevronRight, Brain, Bed, Accessibility,
  Syringe, Timer, ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { UI_TEXT } from './data/index';
import { LangButton } from './App'; 

// ==========================================
// CONFIGURACIÓN VISUAL
// ==========================================
const THEMES = {
  bp:       { bg: 'bg-slate-700', text: 'text-white', icon: Activity },
  hr:       { bg: 'bg-rose-600', text: 'text-white', icon: Heart },
  sat:      { bg: 'bg-sky-700', text: 'text-white', icon: Droplets },
  rr:       { bg: 'bg-cyan-700', text: 'text-white', icon: Wind },
  temp:     { bg: 'bg-orange-600', text: 'text-white', icon: ThermometerSun },
  dose:     { bg: 'bg-indigo-600', text: 'text-white', icon: Syringe },
  infusion: { bg: 'bg-teal-700', text: 'text-white', icon: Timer },
  neuro:    { bg: 'bg-violet-700', text: 'text-white', icon: Brain }, 
  skin:     { bg: 'bg-emerald-700', text: 'text-white', icon: Bed },   
  rehab:    { bg: 'bg-blue-800', text: 'text-white', icon: Accessibility },
  default:  { bg: 'bg-brand-primary', text: 'text-white', icon: Calculator }
};

// ==========================================
// GESTOR PRINCIPAL
// ==========================================
export const CalculatorsManager = ({ lang, toggleLang }) => {
  const [activeCalc, setActiveCalc] = useState(null); 
  const isEs = lang === 'es';
  
  const t = (UI_TEXT && UI_TEXT[lang]) ? UI_TEXT[lang] : {
      calcBP: "Presión Arterial", calcHR: "Frecuencia Card.", calcSat: "Saturación", 
      calcRR: "Frecuencia Resp.", calcTemp: "Temperatura", catVitals: "Monitorización",
      catCalc: "Escalas", calcDoseTitle: "Dosis"
  };

  const getCalcTitle = (id) => {
    const map = { 
      temp: t.calcTemp, hr: t.calcHR, bp: t.calcBP, sat: t.calcSat, rr: t.calcRR, 
      gcs: "Glasgow (GCS)", braden: "Braden (UPP)", barthel: "Barthel (AVD)",
      dose: t.calcDoseTitle, infusion: isEs?"Bomba de Infusión":"Pompă Perfuzie"
    };
    return map[id] || "Calculadora";
  };

  if (activeCalc) {
    return (
      <div className="h-full flex flex-col bg-slate-50 animate-in slide-in-from-right duration-300 absolute inset-0 z-50 font-body">
        <div className="bg-card-genomics px-4 py-3 flex items-center gap-3 shadow-md border-b border-white/10 shrink-0">
          <button onClick={() => setActiveCalc(null)} className="p-2 rounded-full hover:bg-white/10 transition text-white active:scale-95">
            <ArrowLeft size={24} />
          </button>
          <h2 className="font-heading font-bold text-lg text-white flex-1 truncate">
            {getCalcTitle(activeCalc)}
          </h2>
          <LangButton lang={lang} toggleLang={toggleLang} />
        </div>
        <div className="flex-1 overflow-y-auto p-4 pb-24 no-scrollbar bg-slate-50">
          {renderCalculator(activeCalc, lang)}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 font-body">
        <div className="bg-card-genomics px-4 py-4 flex items-center gap-3 shadow-md shrink-0 sticky top-0 z-10">
          <Link to="/" className="p-2 rounded-full hover:bg-white/10 transition text-white active:scale-95">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="font-heading font-bold text-xl text-white tracking-wide flex-1">
            {isEs ? 'Calculadoras' : 'Calculatoare'}
          </h2>
          <LangButton lang={lang} toggleLang={toggleLang} />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24 no-scrollbar">
          <div className="space-y-2">
            <h3 className="text-xs font-sub font-bold text-brand-dark uppercase tracking-wider px-1 border-b border-brand-primary/20 pb-1 mb-2">
              {t.catVitals}
            </h3>
            <div className="grid gap-3">
              <CalcListItem id="bp" theme={THEMES.bp} label={t.calcBP} onClick={setActiveCalc} />
              <CalcListItem id="hr" theme={THEMES.hr} label={t.calcHR} onClick={setActiveCalc} />
              <CalcListItem id="sat" theme={THEMES.sat} label={t.calcSat} onClick={setActiveCalc} />
              <CalcListItem id="rr" theme={THEMES.rr} label={t.calcRR} onClick={setActiveCalc} />
              <CalcListItem id="temp" theme={THEMES.temp} label={t.calcTemp} onClick={setActiveCalc} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-sub font-bold text-brand-dark uppercase tracking-wider px-1 border-b border-brand-primary/20 pb-1 mb-2">
              {isEs ? "Farmacia" : "Farmacie"}
            </h3>
            <div className="grid gap-3">
              <CalcListItem id="dose" theme={THEMES.dose} label={t.calcDoseTitle} onClick={setActiveCalc} />
              <CalcListItem id="infusion" theme={THEMES.infusion} label={isEs?"Bomba de Infusión":"Pompă Perfuzie"} onClick={setActiveCalc} />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-sub font-bold text-brand-dark uppercase tracking-wider px-1 border-b border-brand-primary/20 pb-1 mb-2">
              {t.catCalc}
            </h3>
            <div className="grid gap-3">
              <CalcListItem id="gcs" theme={THEMES.neuro} label="Glasgow (GCS)" onClick={setActiveCalc} />
              <CalcListItem id="braden" theme={THEMES.skin} label="Braden (UPP)" onClick={setActiveCalc} />
              <CalcListItem id="barthel" theme={THEMES.rehab} label="Barthel (AVD)" onClick={setActiveCalc} />
            </div>
          </div>
        </div>
    </div>
  );
};

const CalcListItem = ({ id, theme, label, onClick }) => (
  <button onClick={() => onClick(id)} className="bg-white p-4 rounded-xl shadow-card border-l-4 border-l-transparent hover:border-l-brand-primary transition-all flex items-center gap-4 text-left group w-full active:scale-[0.98]">
    <div className={`${theme.bg} ${theme.text} p-2.5 rounded-lg shadow-sm shrink-0`}>
      <theme.icon size={22} strokeWidth={2} />
    </div>
    <div className="min-w-0 flex-1">
      <span className="block font-heading font-bold text-slate-700 text-sm">{label}</span>
    </div>
    <ChevronRight className="text-slate-300 shrink-0" size={20} />
  </button>
);

const renderCalculator = (id, lang) => {
  switch(id) {
    case 'temp': return <VitalsCalc lang={lang} type="temp" />;
    case 'hr': return <VitalsCalc lang={lang} type="hr" />;
    case 'bp': return <VitalsCalc lang={lang} type="bp" />;
    case 'sat': return <VitalsCalc lang={lang} type="sat" />;
    case 'rr': return <VitalsCalc lang={lang} type="rr" />;
    case 'gcs': return <GCSCalc lang={lang} />;
    case 'braden': return <BradenCalc lang={lang} />;
    case 'barthel': return <BarthelCalc lang={lang} />;
    case 'dose': return <DoseCalc lang={lang} />;
    case 'infusion': return <InfusionCalc lang={lang} />;
    default: return null;
  }
};

const ResultCard = ({ resultData, lang }) => {
  if (!resultData) return null;
  const isEs = lang === 'es';

  // PROTECCIÓN CONTRA EL ERROR DE LAS ESCALAS
  // Si la función getText existe, la ejecutamos. Si devuelve null (datos incompletos), no mostramos nada.
  const content = resultData.getText ? resultData.getText(isEs) : resultData;
  if (!content) return null; 

  const styleMap = {
    normal:   { border: 'border-brand-primary', icon: 'text-brand-primary', Icon: CheckCircle },
    warning:  { border: 'border-accent-warning', icon: 'text-accent-warning', Icon: AlertTriangle },
    danger:   { border: 'border-accent-error', icon: 'text-accent-error', Icon: AlertTriangle },
    info:     { border: 'border-brand-dark', icon: 'text-brand-dark', Icon: Info },
    error:    { border: 'border-gray-400', icon: 'text-gray-400', Icon: XCircle }
  };

  const style = styleMap[content.severity] || styleMap.info;
  const Icon = style.Icon;

  const renderFormattedText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
      const parts = line.split('**');
      return (
        <p key={index} className="mb-3 last:mb-0 leading-relaxed">
          {parts.map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="font-bold text-slate-900 bg-yellow-100 px-1 rounded">{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <div className={`rounded-r-xl overflow-hidden shadow-card animate-slide-in mt-6 border-y border-r border-slate-100 border-l-8 bg-white ${style.border}`}>
       <div className="px-5 py-4 flex items-start gap-4">
          <Icon className={`shrink-0 mt-1 ${style.icon}`} size={28}/>
          <div className="w-full">
            <div className="font-heading font-black text-xl leading-tight tracking-tight uppercase text-slate-800">{content.title}</div>
            <div className="text-sm font-sub font-bold mt-1 opacity-70 uppercase tracking-wider text-slate-500">{content.subtitle}</div>
          </div>
       </div>

       {content.protocol && (
         <div className="px-5 pb-5 pt-3 bg-slate-50 border-t border-slate-100">
           <div className="flex items-center gap-2 mb-3">
             <Stethoscope size={16} className="text-brand-dark" />
             <span className="text-xs font-sub font-black text-brand-dark uppercase tracking-widest">
               {isEs ? "Guía de Actuación" : "Ghid de Acțiune"}
             </span>
           </div>
           <div className="text-sm font-body text-slate-700 text-justify">
             {renderFormattedText(content.protocol)}
           </div>
         </div>
       )}
    </div>
  );
};

// ==========================================
// 1. CONSTANTES VITALES (CONTENIDO PEDAGÓGICO RECUPERADO)
// ==========================================
export const VitalsCalc = ({ lang, type }) => {
  const [val, setVal] = useState('');
  const [valSys, setValSys] = useState('');
  const [valDia, setValDia] = useState('');
  const [age, setAge] = useState('adult');
  const [resultState, setResultState] = useState(null); 
  
  const isEs = lang === 'es';

  const config = {
      temp: { theme: THEMES.temp, label: isEs?"Temperatura":"Temperatură", unit: "ºC", placeholder: "36.5", min: 30, max: 45 },
      hr:   { theme: THEMES.hr,   label: isEs?"Frecuencia Card.":"Frecvență Card.", unit: isEs ? "lpm" : "bpm", placeholder: "80", min: 20, max: 300 },
      rr:   { theme: THEMES.rr,   label: isEs?"Frecuencia Resp.":"Frecvență Resp.", unit: "rpm", placeholder: "16", min: 4, max: 100 },
      bp:   { theme: THEMES.bp,   label: isEs?"Tensión Arterial":"Tensiune Art.",   unit: "mmHg", placeholder: "120/80", minS: 40, maxS: 300, minD: 20, maxD: 200 },
      sat:  { theme: THEMES.sat,  label: isEs?"Saturación O2":"Saturație O2",  unit: "%", placeholder: "98", min: 50, max: 100 },
  }[type];

  useEffect(() => { setResultState(null); }, [val, valSys, valDia, age]);

  const analyze = () => {
    if (type === 'bp') {
        const s = parseFloat(valSys), d = parseFloat(valDia);
        if (isNaN(s) || isNaN(d)) return;
        
        // Validación de datos imposibles (Safety Check)
        if (s < config.minS || s > config.maxS || d < config.minD || d > config.maxD || d >= s) {
            setResultState({ type: 'ERROR_RANGO' }); return;
        }

        if (s > 180 || d > 110) setResultState({ type: 'CRISIS_HTA' });
        else if (s >= 140 || d >= 90) setResultState({ type: 'HTA' });
        else if (s < 90 || d < 60) setResultState({ type: 'SHOCK' });
        else setResultState({ type: 'NORMAL_BP' });
    } else {
        const v = parseFloat(val);
        if (isNaN(v)) return;

        // Validación de datos imposibles (Safety Check)
        if (v < config.min || v > config.max) {
            setResultState({ type: 'ERROR_RANGO' }); return;
        }

        if (type === 'temp') {
            if (v > 40) setResultState({ type: 'HIPERPIREXIA' });
            else if (v >= 38) setResultState({ type: 'FIEBRE' });
            else if (v >= 37.5) setResultState({ type: 'FEBRICULA' });
            else if (v < 35.5) setResultState({ type: 'HIPOTERMIA' });
            else setResultState({ type: 'NORMAL' });
        } 
        else if (type === 'sat') {
            if (v < 85) setResultState({ type: 'HIPOXIA_CRITICA' });
            else if (v < 90) setResultState({ type: 'HIPOXIA_SEV' });
            else if (v < 95) setResultState({ type: 'HIPOXIA_LEV' });
            else setResultState({ type: 'NORMAL' });
        } 
        else if (type === 'hr') {
            if (v > 150) setResultState({ type: 'TAQUI_SEV' });
            else if (v > 100) setResultState({ type: 'TAQUI' });
            else if (v < 40) setResultState({ type: 'BRADI_SEV' });
            else if (v < 60) setResultState({ type: 'BRADI' });
            else setResultState({ type: 'NORMAL' });
        } 
        else if (type === 'rr') {
            if (v > 30) setResultState({ type: 'TAQUIPNEA_SEV' });
            else if (v > 20) setResultState({ type: 'TAQUIPNEA' });
            else if (v < 10) setResultState({ type: 'BRADIPNEA' });
            else setResultState({ type: 'NORMAL' });
        }
    }
  };

  const getResultText = (isEs) => {
    if (!resultState) return null;
    const { type } = resultState;
    
    // DICCIONARIO MAESTRO DETALLADO (El que te gustaba)
    const dict = {
      // --- ERRORES DE DATOS ---
      ERROR_RANGO: {
        title: isEs ? "DATO IMPOSIBLE" : "DAT IMPOSIBIL", 
        severity: "error",
        subtitle: isEs ? "Error de Entrada" : "Eroare Intrare",
        protocol: isEs 
          ? "Ha introducido una cifra incompatible con la vida humana o fuera del rango técnico del aparato (ej. Saturación 800% o Temperatura 10ºC). Por favor, borre y escriba el valor real."
          : "Valoare incompatibilă cu viața sau în afara intervalului tehnic. Vă rugăm să corectați."
      },

      // --- TENSIÓN ARTERIAL ---
      CRISIS_HTA: { 
        title: isEs ? "CRISIS HIPERTENSIVA" : "CRIZĂ HIPERTENSIVĂ", severity: "danger",
        subtitle: isEs ? "Emergencia Médica" : "Urgență Medicală",
        protocol: isEs 
          ? "**ACTUACIÓN INMEDIATA:**\nNos encontramos ante una situación crítica. El paciente está en riesgo de sufrir un accidente cerebrovascular (ictus) o daño renal agudo. \n1. **Avise al médico** de guardia inmediatamente.\n2. **Reposo Absoluto:** Mantenga al paciente semi-incorporado y tranquilo para bajar la presión intracraneal.\n3. **Acceso Venoso:** Canalice una vía si no tiene, por si se requiere medicación IV urgente (Urapidil/Labetalol).\n4. **Monitorización:** Ponga el manguito en modo automático cada 5 min." 
          : "Anunțați medicul urgent. Risc de AVC. Repaus absolut. Monitorizare automată la 5 min."
      },
      HTA: {
        title: "HIPERTENSIÓN (HTA)", severity: "warning",
        subtitle: isEs ? "Cifras Elevadas" : "Valori Crescute",
        protocol: isEs 
          ? "**PROTOCOLO DE REEVALUACIÓN:**\nEl paciente está hipertenso, pero no es una crisis vital inminente. \n1. **Descartar factores:** ¿Tiene dolor? ¿Tiene ganas de orinar (globo vesical)? ¿Está muy nervioso? Trate primero la causa.\n2. **Reposo:** Deje al paciente solo y tranquilo 15 minutos en la habitación.\n3. **Repetir:** Vuelva a medir. Si persiste >160/100, consulte la pauta de medicación condicional (Captopril sublingual o Enalapril)." 
          : "Verificați durerea sau retenția urinară. Repaus 15 min și remăsurare."
      },
      SHOCK: {
        title: isEs ? "SHOCK / HIPOTENSIÓN" : "ȘOC / HIPOTENSIUNE", severity: "danger",
        subtitle: isEs ? "Fallo Circulatorio" : "Insuficiență Circulatorie",
        protocol: isEs 
          ? "**ACTUACIÓN URGENTE:**\nNo está llegando sangre suficiente al cerebro ni a los riñones. \n1. **Posición:** Coloque al paciente en Trendelenburg (tumbado con las piernas elevadas) para favorecer el retorno venoso.\n2. **Fluidos:** Abra el suero fisiológico a chorro libre (salvo que tenga insuficiencia cardiaca conocida).\n3. **Oxígeno:** Ponga gafas nasales o mascarilla para ayudar a los tejidos.\n4. **Médico:** Avise inmediatamente." 
          : "Poziție Trendelenburg. Ser fiziologic rapid. Oxigen. Chemați medicul."
      },
      NORMAL_BP: {
        title: "NORMOTENSIÓN", severity: "normal",
        subtitle: isEs ? "Estable" : "Stabil",
        protocol: isEs ? "La tensión arterial es adecuada para perfundir los órganos. Continúe con la monitorización rutinaria del turno." : "Tensiune adecvată."
      },

      // --- TEMPERATURA ---
      HIPERPIREXIA: {
        title: "HIPERPIREXIA (> 40ºC)", severity: "danger",
        subtitle: isEs ? "Fiebre Extrema" : "Febră Extremă",
        protocol: isEs 
          ? "**URGENCIA VITAL:**\nExiste riesgo de convulsiones y daño cerebral por calor. \n1. **Aviso:** Llame al médico urgente.\n2. **Enfriamiento Rápido:** Aplique compresas frías en grandes vasos (cuello, axilas e ingles). \n3. **Medicación:** Se requerirán antitérmicos intravenosos (Paracetamol o Metamizol) de inmediato." 
          : "Urgență. Risc convulsii. Răcire fizică imediată și antitermice IV."
      },
      FIEBRE: {
        title: isEs ? "FIEBRE (Pirexia)" : "FEBRĂ (Pirexie)", severity: "warning",
        subtitle: isEs ? "Proceso Infeccioso" : "Proces Infecțios",
        protocol: isEs 
          ? "**MANEJO DE LA FIEBRE:**\n1. **Medios Físicos:** Retire la ropa de cama excesiva, deje solo una sábana. Aplique paños húmedos tibios en la frente.\n2. **Hemocultivos:** Si la fiebre es >38º y el paciente tiene escalofríos (tiritona), debe extraer hemocultivos ANTES de administrar el antibiótico.\n3. **Medicación:** Administre el antitérmico pautado (Paracetamol)." 
          : "Dezveliți pacientul. Hemoculturi dacă are frisoane. Paracetamol."
      },
      FEBRICULA: {
        title: isEs ? "FEBRÍCULA" : "SUBFEBRILITATE", severity: "info",
        subtitle: isEs ? "Inicio de Fiebre" : "Început de Febră",
        protocol: isEs ? "Vigilancia. Ofrezca líquidos al paciente para mantenerlo hidratado. Vuelva a tomar la temperatura en 1 hora. No suele requerir antitérmico salvo que tenga malestar general." : "Supraveghere. Hidratare. Reevaluare într-o oră."
      },
      HIPOTERMIA: {
        title: isEs ? "HIPOTERMIA (< 35.5ºC)" : "HIPOTERMIE (< 35.5ºC)", severity: "warning",
        subtitle: isEs ? "Pérdida de Calor" : "Pierdere de Căldură",
        protocol: isEs ? "**CALENTAMIENTO:**\nEl paciente está perdiendo calor. \n1. **Cubrir:** Use una manta térmica o doble sábana.\n2. **Fluidos:** Si lleva sueros, asegúrese de que no estén entrando helados.\n3. **Causa:** ¿Ha estado destapado mucho tiempo durante el aseo o viene de quirófano? Vigile el ritmo cardiaco (bradicardia)." : "Încălziți pacientul cu pături."
      },

      // --- SATURACIÓN ---
      HIPOXIA_CRITICA: {
        title: isEs ? "HIPOXIA CRÍTICA (< 85%)" : "HIPOXIE CRITICĂ (< 85%)", severity: "danger",
        subtitle: isEs ? "Fallo Respiratorio Inminente" : "Insuficiență Respiratorie Iminentă",
        protocol: isEs 
          ? "**CÓDIGO ROJO RESPIRATORIO:**\nEl paciente se está apagando. Sus órganos no reciben oxígeno. \n1. **Oxígeno 100%:** Coloque una mascarilla reservorio a 15 litros/min YA.\n2. **Posición:** Siéntelo totalmente erguido (Fowler alto).\n3. **Avisar:** Llame al médico y prepare el carro de paradas (equipo de intubación) por si acaso." 
          : "Oxigen 100% (Mască Rezervor). Poziție șezândă. Pregătiți intubarea."
      },
      HIPOXIA_SEV: {
        title: isEs ? "HIPOXIA SEVERA (< 90%)" : "HIPOXIE SEVERĂ (< 90%)", severity: "danger",
        subtitle: "Insuficiencia",
        protocol: isEs 
          ? "**ACTUACIÓN URGENTE:**\nEl paciente está en insuficiencia respiratoria. \n1. **Ventimask:** Coloque una mascarilla Venturi al 50%.\n2. **Gases:** Es muy probable que el médico pida una gasometría arterial. Prepare heparina y jeringa de gases.\n3. **Vigilancia:** No deje solo al paciente, puede agotarse." 
          : "Mască Venturi 50%. Pregătiți gazometrie arterială."
      },
      HIPOXIA_LEV: {
        title: isEs ? "DESATURACIÓN (90-94%)" : "DESATURARE (90-94%)", severity: "warning",
        subtitle: "O2 Necesario",
        protocol: isEs 
          ? "**SOPORTE BASAL:**\n1. **Gafas Nasales:** Inicie oxigenoterapia a 2-3 litros por minuto.\n2. **Fisioterapia:** Pídale que tosa y respire profundo (puede tener mocos taponando).\n3. **Posición:** Eleve el cabecero de la cama 45 grados." 
          : "Ochelari nazali 2-3 L/min. Încurajați tusea."
      },

      // --- FRECUENCIA CARDIACA ---
      TAQUI_SEV: {
        title: isEs ? "TAQUICARDIA SEVERA" : "TAHICARDIE SEVERĂ", severity: "danger",
        subtitle: "> 150 lpm",
        protocol: isEs 
          ? "**RIESGO DE COLAPSO:**\nEl corazón va tan rápido que no le da tiempo a llenarse de sangre. \n1. **ECG Urgente:** Hay que saber qué ritmo es (posible Fibrilación Auricular rápida o TSV).\n2. **Carro Paradas:** Tenga el desfibrilador cerca por si entra en parada.\n3. **Vía:** Asegure que la vía venosa funciona bien." 
          : "EKG Urgent. Risc de stop. Asigurați cale venoasă."
      },
      TAQUI: {
        title: "TAQUICARDIA", severity: "warning",
        subtitle: "> 100 lpm",
        protocol: isEs 
          ? "**INVESTIGAR CAUSA:**\nEl corazón no se acelera porque sí. Busque la causa subyacente:\n1. **Fiebre:** ¿Tiene temperatura?\n2. **Dolor:** ¿Le duele algo?\n3. **Deshidratación:** ¿Tiene la lengua seca o lleva mucho en ayunas?\n4. **Ansiedad:** ¿Está muy nervioso?\nTrate la causa y el pulso bajará." 
          : "Căutați cauza: Febră? Durere? Deshidratare? Anxietate?"
      },
      BRADI_SEV: {
        title: isEs ? "BRADICARDIA EXTREMA" : "BRADICARDIE EXTREMĂ", severity: "danger",
        subtitle: "< 40 lpm",
        protocol: isEs 
          ? "**PRE-PARADA:**\nEl corazón está a punto de pararse. \n1. **Medicación:** Tenga preparada una ampolla de Atropina en la mesilla.\n2. **Marcapasos:** Si no remonta, puede necesitar marcapasos externo (parches del desfibrilador).\n3. **Avisar:** Médico urgente." 
          : "Pregătiți Atropina. Medic urgent."
      },
      BRADI: {
        title: "BRADICARDIA", severity: "warning",
        subtitle: "< 60 lpm",
        protocol: isEs 
          ? "**VIGILANCIA:**\nSi el paciente es deportista o toma betabloqueantes (ej. Bisoprolol) puede ser normal. \n**Signo de Alarma:** Si se marea, tiene la tensión baja o está confuso, entonces SÍ es peligroso. Avise al médico." 
          : "Dacă are amețeli, este periculos."
      },

      // --- FRECUENCIA RESPIRATORIA ---
      TAQUIPNEA_SEV: { 
        title: "TAQUIPNEA GRAVE (>30)", severity: "danger", 
        subtitle: "Fatiga Muscular", 
        protocol: isEs 
          ? "**PELIGRO DE AGOTAMIENTO:**\nEl paciente está haciendo un esfuerzo titánico para respirar. Se va a cansar y entrará en parada respiratoria. \n1. **Ayuda:** Avise a UCI/Anestesia.\n2. **Valorar:** ¿Tiene tiraje (usa el cuello para respirar)?\n3. **Oxígeno:** Mascarilla reservorio." 
          : "Risc de epuizare respiratorie. Anunțați ATI." 
      },
      TAQUIPNEA: { 
        title: "TAQUIPNEA", severity: "warning", 
        subtitle: "20-30 rpm", 
        protocol: isEs 
          ? "**DETECCIÓN:**\nAlgo pasa en el pulmón (o es ansiedad). \n1. **Auscultar:** ¿Oye pitos (broncoespasmo) o crepitantes (moco/agua)?\n2. **Calmar:** Si es ansiedad, ayúdele a respirar lento y acompáñele." 
          : "Ascultați plămânii. Calmați pacientul." 
      },
      BRADIPNEA: { 
        title: "BRADIPNEA (<10)", severity: "danger", 
        subtitle: "Depresión Resp.", 
        protocol: isEs 
          ? "**ALERTA FARMACOLÓGICA:**\nEl paciente respira muy poco. \n1. **Opioides:** ¿Lleva bomba de morfina o parches de fentanilo? Puede ser una sobredosis. Prepare Naloxona.\n2. **Nivel de Conciencia:** ¿Está muy dormido (bajo Glasgow)? Estimúlelo para que respire." 
          : "Verificați supradoza de Morfină/Sedative. Pregătiți Naloxona." 
      },

      NORMAL: {
        title: "NORMAL", severity: "normal",
        subtitle: isEs ? "Estable" : "Stabil",
        protocol: isEs ? "Todos los parámetros están dentro del rango fisiológico normal. Registre las constantes en la gráfica y continúe con los cuidados habituales." : "Valori normale."
      }
    };
    return dict[type] || dict.NORMAL;
  };

  const resultData = resultState ? { getText: getResultText } : null;

  return (
    <div className={`p-6 rounded-3xl shadow-lg mb-8 ${config.theme.bg} text-white`}>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
        <div className="p-3 rounded-2xl bg-white/20 shadow-inner shrink-0">
            <config.theme.icon size={28} />
        </div>
        <h4 className="font-heading font-black text-2xl tracking-tight flex-1 mr-4 leading-none text-white">
            {config.label}
        </h4>
      </div>

      <div className="flex items-center justify-between mb-8">
         <div className="flex items-center gap-2">
             <span className="font-heading font-black text-4xl text-white drop-shadow-md">{config.unit}</span>
         </div>
         <select value={age} onChange={e=>setAge(e.target.value)} className="appearance-none bg-white border border-white/30 text-slate-900 font-sub text-sm font-bold px-4 py-2 rounded-xl outline-none cursor-pointer shadow-sm text-center min-w-[120px]">
            <option value="child">{isEs ? "Niño" : "Copil"}</option>
            <option value="adult">{isEs ? "Adulto" : "Adult"}</option>
            <option value="elderly">{isEs ? "Anciano" : "Vârstnic"}</option>
         </select>
      </div>

      {type === 'bp' ? (
         <div className="grid grid-cols-2 gap-4">
             <div className="relative">
                <label className="text-[10px] font-sub font-bold text-white/90 uppercase ml-1 mb-1 block text-center tracking-widest">Sistólica</label>
                <input type="number" className="w-full p-4 bg-white text-slate-900 rounded-xl font-heading font-black text-3xl text-center outline-none focus:ring-4 focus:ring-white/50" value={valSys} onChange={e=>setValSys(e.target.value)} placeholder="120" />
             </div>
             <div className="relative">
                <label className="text-[10px] font-sub font-bold text-white/90 uppercase ml-1 mb-1 block text-center tracking-widest">Diastólica</label>
                <input type="number" className="w-full p-4 bg-white text-slate-900 rounded-xl font-heading font-black text-3xl text-center outline-none focus:ring-4 focus:ring-white/50" value={valDia} onChange={e=>setValDia(e.target.value)} placeholder="80" />
             </div>
             <button onClick={analyze} className="w-full py-4 rounded-xl font-sub font-black text-sm uppercase tracking-wider bg-white text-slate-900 col-span-2 mt-4">{isEs ? "ANALIZAR" : "ANALIZEAZĂ"}</button>
         </div>
      ) : (
         <div className="flex flex-col gap-6">
             <div className="relative w-full">
                <input type="number" step="0.01" className="w-full p-6 bg-white text-slate-900 rounded-xl font-heading font-black text-4xl text-center outline-none focus:ring-4 focus:ring-white/50 placeholder:text-slate-300" placeholder={config.placeholder} value={val} onChange={e=>setVal(e.target.value)} />
             </div>
             <button onClick={analyze} className="w-full py-4 rounded-xl font-sub font-black text-sm uppercase tracking-wider bg-white text-slate-900">{isEs ? "ANALIZAR" : "ANALIZEAZĂ"}</button>
         </div>
      )}
      <ResultCard resultData={resultData} lang={lang} />
    </div>
  );
};

// ==========================================
// 2. DOSIS
// ==========================================
export const DoseCalc = ({ lang }) => {
    const [inputs, setInputs] = useState({ ord:'', avail:'', vol:'' });
    const [resultState, setResultState] = useState(null);
    const isEs = lang === 'es';

    const calculate = () => {
        const ord = parseFloat(inputs.ord), avail = parseFloat(inputs.avail), vol = parseFloat(inputs.vol);
        if (isNaN(ord) || isNaN(avail) || isNaN(vol) || avail === 0) {
            setResultState({ type: 'ERROR' }); return;
        }
        const result = (ord * vol) / avail;
        setResultState({ type: 'OK', val: result, ord });
    };

    const getResultText = (isEs) => {
        if (!resultState) return null;
        if (resultState.type === 'ERROR') return { title: "Error", severity: "error", subtitle: isEs ? "Datos Incompletos" : "Date Incomplete" };
        
        return {
            title: `${resultState.val.toFixed(2)} ml`,
            severity: "info",
            subtitle: isEs ? "A extraer del vial" : "De extras din fiolă",
            protocol: isEs 
                ? `**PROCEDIMIENTO DE SEGURIDAD:**\n1. Coja una jeringa adecuada al volumen (si es <1ml use jeringa de insulina).\n2. Aspire exactamente **${resultState.val.toFixed(2)} ml**.\n3. **Doble Chequeo:** Confirme que el vial tiene la concentración de ${inputs.avail}mg en ${inputs.vol}ml.` 
                : `**PROCEDURĂ DE SIGURANȚĂ:**\n1. Alegeți o seringă adecvată.\n2. Aspirați exact **${resultState.val.toFixed(2)} ml**.\n3. **Dublu Control:** Verificați concentrația flaconului.`
        };
    };

    const handleIn = (field, val) => setInputs(prev => ({...prev, [field]: val}));
    const inputStyle = "w-full p-3 bg-white text-slate-900 rounded-xl font-heading font-bold outline-none focus:ring-2 focus:ring-indigo-300 text-center text-xl placeholder:text-slate-300";

    return (
        <div className={`p-6 rounded-3xl shadow-xl mb-8 ${THEMES.dose.bg} text-white`}>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
                <div className="p-3 rounded-2xl bg-white/20"><FlaskConical size={24}/></div>
                <h4 className="font-heading font-black text-xl">{isEs ? "Cálculo de Dosis" : "Calcul Dozaj"}</h4>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="text-xs font-sub font-bold text-white/90 uppercase ml-1 block text-center mb-1">{isEs ? "Dosis Prescrita (mg)" : "Doză Prescrisă (mg)"}</label>
                    <input type="number" className={inputStyle} value={inputs.ord} onChange={e=>handleIn('ord',e.target.value)} placeholder="Ej: 40" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-sub font-bold text-white/90 uppercase ml-1 block text-center mb-1">{isEs ? "Tengo (mg)" : "Am (mg)"}</label>
                        <input type="number" className={inputStyle} value={inputs.avail} onChange={e=>handleIn('avail',e.target.value)} placeholder="Ej: 80" />
                    </div>
                    <div>
                        <label className="text-xs font-sub font-bold text-white/90 uppercase ml-1 block text-center mb-1">{isEs ? "En Volumen (ml)" : "În Volum (ml)"}</label>
                        <input type="number" className={inputStyle} value={inputs.vol} onChange={e=>handleIn('vol',e.target.value)} placeholder="Ej: 2" />
                    </div>
                </div>
                <button onClick={calculate} className="w-full py-4 rounded-xl font-sub font-black bg-white text-slate-900 mt-4 shadow-lg hover:bg-slate-100">{isEs ? "CALCULAR" : "CALCULEAZĂ"}</button>
            </div>
            <ResultCard resultData={resultState ? { getText: getResultText } : null} lang={lang} />
        </div>
    );
};

// ==========================================
// 3. INFUSIÓN
// ==========================================
export const InfusionCalc = ({ lang }) => {
    const [vol, setVol] = useState('');
    const [time, setTime] = useState('');
    const [resultState, setResultState] = useState(null);
    const isEs = lang === 'es';

    const calculate = () => {
        const v = parseFloat(vol), t = parseFloat(time);
        if (isNaN(v) || isNaN(t) || t === 0) return;
        const mlh = v / t;
        const gts = (v * 20) / (t * 60);
        setResultState({ mlh, gts });
    };

    const getResultText = (isEs) => {
        if (!resultState) return null;
        return {
            title: `${resultState.mlh.toFixed(1)} ml/h`,
            severity: "info",
            subtitle: isEs ? "Velocidad de Bomba" : "Viteză Pompă",
            protocol: isEs 
                ? `**BOMBA ELECTRÓNICA:**\nPrograme el ritmo a **${resultState.mlh.toFixed(1)} ml/h** y el volumen total a infundir (VTBI).\n\n**SISTEMA DE GRAVEDAD (GOTERO):**\nSi no tiene bomba, debe regular la rueda para que caigan **${Math.round(resultState.gts)} gotas por minuto**. Use un reloj con segundero para contar.`
                : `**POMPĂ:** Setați la **${resultState.mlh.toFixed(1)} ml/h**.\n**GRAVITAȚIONAL:** Reglați picurătorul la **${Math.round(resultState.gts)} picături pe minut**.`
        };
    };

    const inputStyle = "w-full p-3 bg-white text-slate-900 rounded-xl font-heading font-bold outline-none focus:ring-2 focus:ring-teal-300 text-center text-xl placeholder:text-slate-300";

    return (
        <div className={`p-6 rounded-3xl shadow-xl mb-8 ${THEMES.infusion.bg} text-white`}>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
                <div className="p-3 rounded-2xl bg-white/20"><Timer size={24}/></div>
                <h4 className="font-heading font-black text-xl">{isEs ? "Infusión IV" : "Perfuzie IV"}</h4>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-sub font-bold text-white/90 uppercase ml-1 block text-center mb-1">{isEs ? "Volumen Total (ml)" : "Volum Total (ml)"}</label>
                        <input type="number" className={inputStyle} value={vol} onChange={e=>setVol(e.target.value)} placeholder="500" />
                    </div>
                    <div>
                        <label className="text-xs font-sub font-bold text-white/90 uppercase ml-1 block text-center mb-1">{isEs ? "Tiempo (h)" : "Timp (h)"}</label>
                        <input type="number" className={inputStyle} value={time} onChange={e=>setTime(e.target.value)} placeholder="8" />
                    </div>
                </div>
                <button onClick={calculate} className="w-full py-4 rounded-xl font-sub font-black bg-white text-slate-900 mt-4 shadow-lg hover:bg-slate-100">{isEs ? "CALCULAR" : "CALCULEAZĂ"}</button>
            </div>
            <ResultCard resultData={resultState ? { getText: getResultText } : null} lang={lang} />
        </div>
    );
};

// ==========================================
// 4. GLASGOW (MEJORADO Y BLINDADO)
// ==========================================
export const GCSCalc = ({ lang }) => {
  const [eye, setEye] = useState(null);
  const [verb, setVerb] = useState(null);
  const [mot, setMot] = useState(null);
  const isEs = lang === 'es';
  
  const total = (eye || 0) + (verb || 0) + (mot || 0);
  
  const getResultText = (isEs) => {
      // FIX CRÍTICO: SOLO DEVUELVE RESULTADO SI TODO ESTÁ RELLENO
      if (!eye || !verb || !mot) return null;
      
      if (total <= 8) return {
          title: `GCS ${total} - COMA GRAVE`, severity: 'danger', subtitle: "Protección Vía Aérea",
          protocol: isEs 
            ? "**ACTUACIÓN CRÍTICA (INTUBACIÓN):**\nEl paciente tiene un Glasgow de 8 o menos. \n1. **Avisar a UCI/Anestesia:** Riesgo inminente de parada respiratoria o aspiración.\n2. **Posición:** Cabecero a 30º.\n3. **Vigilancia:** Control pupilar cada 15 min. No le dé nada por boca." 
            : "**ACȚIUNE CRITICĂ:** Comă gravă. Necesită intubare pentru protejarea căilor aeriene. Anunțați ATI."
      };
      if (total <= 12) return {
          title: `GCS ${total} - DETERIORO MODERADO`, severity: 'warning', subtitle: "Vigilancia Neurológica",
          protocol: isEs 
            ? "**VIGILANCIA ESTRECHA:**\nHay afectación neurológica evidente. \n1. **Despertar:** Estimule al paciente cada hora para ver si responde.\n2. **Evolución:** Si baja 2 puntos más, avise al médico urgente (puede ser un sangrado cerebral)." 
            : "Monitorizare neurologică orară. Dacă scade cu 2 puncte, anunțați medicul."
      };
      return {
          title: `GCS ${total} - CONSCIENTE`, severity: 'normal', subtitle: "Estado Normal/Leve",
          protocol: isEs 
            ? "El paciente mantiene la consciencia. Continúe con la observación neurológica rutinaria por turno." 
            : "Pacient conștient. Observație de rutină."
      };
  };

  const Option = ({ val, txtES, txtRO, set, curr }) => (
    <button onClick={() => set(val)} 
      className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-sub font-bold transition-all mb-2 flex justify-between items-center
      ${curr === val ? 'bg-white border-white text-violet-800 shadow-md transform scale-[1.02]' : 'bg-violet-800/40 border-white/10 text-white hover:bg-violet-800/60'}`}>
      <span>{isEs ? txtES : txtRO}</span>
      {curr === val && <CheckCircle size={20} className="text-violet-600" />}
    </button>
  );

  return (
    <div className={`p-6 rounded-3xl shadow-xl mb-8 ${THEMES.neuro.bg} text-white`}>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
        <div className="p-3 rounded-2xl bg-white/20"><Brain size={24}/></div>
        <h4 className="font-heading font-black text-xl">Glasgow</h4>
        <div className="ml-auto text-4xl font-heading font-black">{total || '-'}</div>
      </div>
      <div className="space-y-6">
        <div>
          <h5 className="font-sub font-black text-xs uppercase tracking-widest text-white/70 mb-2 ml-1">1. {isEs?"Apertura Ocular":"Deschidere Ochi"}</h5>
          <Option val={4} set={setEye} curr={eye} txtES="Espontánea (Al entrar)" txtRO="Spontană" />
          <Option val={3} set={setEye} curr={eye} txtES="A la orden (Al hablarle)" txtRO="La ordin" />
          <Option val={2} set={setEye} curr={eye} txtES="Al dolor (Pellizco)" txtRO="La durere" />
          <Option val={1} set={setEye} curr={eye} txtES="No responde" txtRO="Fără răspuns" />
        </div>
        <div>
          <h5 className="font-sub font-black text-xs uppercase tracking-widest text-white/70 mb-2 ml-1">2. {isEs?"Respuesta Verbal":"Răspuns Verbal"}</h5>
          <Option val={5} set={setVerb} curr={verb} txtES="Orientado y conversando" txtRO="Orientat" />
          <Option val={4} set={setVerb} curr={verb} txtES="Confuso (Desorientado)" txtRO="Confuz" />
          <Option val={3} set={setVerb} curr={verb} txtES="Palabras inapropiadas" txtRO="Cuvinte nepotrivite" />
          <Option val={2} set={setVerb} curr={verb} txtES="Sonidos incomprensibles" txtRO="Sunete" />
          <Option val={1} set={setVerb} curr={verb} txtES="No responde" txtRO="Fără răspuns" />
        </div>
        <div>
          <h5 className="font-sub font-black text-xs uppercase tracking-widest text-white/70 mb-2 ml-1">3. {isEs?"Respuesta Motora":"Răspuns Motor"}</h5>
          <Option val={6} set={setMot} curr={mot} txtES="Obedece órdenes" txtRO="Obedece comenzi" />
          <Option val={5} set={setMot} curr={mot} txtES="Localiza el dolor" txtRO="Localizează durerea" />
          <Option val={4} set={setMot} curr={mot} txtES="Retira al dolor" txtRO="Retrage la durere" />
          <Option val={3} set={setMot} curr={mot} txtES="Flexión anormal" txtRO="Flexie anormală" />
          <Option val={2} set={setMot} curr={mot} txtES="Extensión" txtRO="Extensie" />
          <Option val={1} set={setMot} curr={mot} txtES="No responde" txtRO="Fără răspuns" />
        </div>
      </div>
      <ResultCard resultData={total > 0 ? { getText: getResultText } : null} lang={lang} />
    </div>
  );
};

// ==========================================
// 5. BRADEN (RIESGO UPP - MEJORADO)
// ==========================================
export const BradenCalc = ({ lang }) => {
  const [perc, setPerc] = useState(null);
  const [hum, setHum] = useState(null);
  const [act, setAct] = useState(null);
  const [mov, setMov] = useState(null);
  const [nut, setNut] = useState(null);
  const [fric, setFric] = useState(null);

  const total = (perc||0) + (hum||0) + (act||0) + (mov||0) + (nut||0) + (fric||0);
  const isEs = lang === 'es';

  const getResultText = (isEs) => {
      // FIX: VERIFICAR SI TODO ESTÁ RELLENO
      if (!perc || !hum || !act || !mov || !nut || !fric) return null;
      
      if (total <= 12) return {
          title: `RIESGO ALTO (${total})`, severity: 'danger', subtitle: isEs ? "Peligro Inminente" : "Pericol Iminent",
          protocol: isEs 
            ? "**PROTOCOLO INTENSIVO DE PREVENCIÓN:**\nEl paciente desarrollará úlceras si no actúa YA.\n1. **Superficie:** Solicite un colchón de aire dinámico (alternante) inmediatamente.\n2. **Reloj:** Establezca cambios posturales estrictos cada 2 horas (Dcha-Espalda-Izq).\n3. **Protección:** Aplique ácidos grasos (AGHO) en talones y sacro en cada turno.\n4. **Humedad:** Si usa pañal, cámbielo en cuanto se moje. No use doble pañal." 
            : "**PROTOCOL INTENSIV:** Risc maxim de escare.\n1. Saltea antiescare obligatorie.\n2. Poziționare strictă la 2 ore.\n3. Protecție călcâie și sacru."
      };
      if (total <= 14) return {
          title: `RIESGO MODERADO (${total})`, severity: 'warning', subtitle: "Vigilancia Activa",
          protocol: isEs 
            ? "**PLAN DE CUIDADOS PREVENTIVO:**\n1. **Movilidad:** Si puede, levántelo al sillón al menos mañana y tarde.\n2. **Hidratación:** Mantenga la piel bien hidratada tras el aseo.\n3. **Talones:** Use taloneras de espuma o deje los talones flotando con una almohada." 
            : "**PLAN PREVENTIV:** Mobilizare la fotoliu. Hidratare piele. Protecție călcâie."
      };
      return {
          title: `RIESGO BAJO (${total})`, severity: 'normal', subtitle: "Sin Riesgo Actual",
          protocol: isEs 
            ? "El paciente tiene buena movilidad y nutrición. Mantenga los cuidados estándar de higiene diaria e inspección de la piel." 
            : "Risc scăzut. Îngrijiri standard de igienă."
      };
  };

  const SelectGroup = ({ labelES, labelRO, setter, current, opts }) => (
    <div className="mb-6">
      <label className="text-xs font-sub font-black text-white/80 uppercase tracking-widest mb-2 block ml-1">{isEs ? labelES : labelRO}</label>
      <div className="grid grid-cols-1 gap-2">
        {opts.map((o) => (
          <button key={o.v} onClick={() => setter(o.v)} className={`text-left px-4 py-3 rounded-lg text-sm font-bold border border-white/10 transition-all ${current === o.v ? 'bg-white text-emerald-800' : 'bg-emerald-800/40 hover:bg-emerald-800/60 text-white'}`}>
            <div className="flex justify-between"><span>{isEs ? o.lES : o.lRO}</span><span className="opacity-50 text-xs">{o.v} pts</span></div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`p-6 rounded-3xl shadow-xl mb-8 ${THEMES.skin.bg} text-white`}>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
        <div className="p-3 rounded-2xl bg-white/20"><Bed size={24}/></div>
        <h4 className="font-heading font-black text-xl">Braden</h4>
        <div className="ml-auto text-4xl font-heading font-black">{total > 0 ? total : '-'}</div>
      </div>
      <div className="space-y-2">
        <SelectGroup labelES="Percepción Sensorial" labelRO="Percepție Senzorială" setter={setPerc} current={perc} opts={[
            {v:1, lES:"Completamente limitada (Coma)", lRO:"Complet limitată"}, {v:2, lES:"Muy limitada (Solo dolor)", lRO:"Foarte limitată"}, {v:3, lES:"Ligeramente limitada", lRO:"Ușor limitată"}, {v:4, lES:"Sin limitaciones", lRO:"Fără limitări"}
        ]}/>
        <SelectGroup labelES="Exposición a la Humedad" labelRO="Umiditate" setter={setHum} current={hum} opts={[
            {v:1, lES:"Siempre húmedo", lRO:"Mereu umed"}, {v:2, lES:"A menudo húmedo", lRO:"Deseori umed"}, {v:3, lES:"Ocasionalmente húmedo", lRO:"Ocazional"}, {v:4, lES:"Raramente húmedo", lRO:"Rareori"}
        ]}/>
        <SelectGroup labelES="Actividad" labelRO="Activitate" setter={setAct} current={act} opts={[
            {v:1, lES:"Encamado", lRO:"La pat"}, {v:2, lES:"En silla", lRO:"În scaun"}, {v:3, lES:"Deambula ocasionalmente", lRO:"Merg ocazional"}, {v:4, lES:"Deambula frecuentemente", lRO:"Merg frecvent"}
        ]}/>
        <SelectGroup labelES="Movilidad" labelRO="Mobilitate" setter={setMov} current={mov} opts={[
            {v:1, lES:"Inmóvil", lRO:"Imobil"}, {v:2, lES:"Muy limitada", lRO:"Foarte limitată"}, {v:3, lES:"Ligeramente limitada", lRO:"Ușor limitată"}, {v:4, lES:"Sin limitaciones", lRO:"Fără limitări"}
        ]}/>
        <SelectGroup labelES="Nutrición" labelRO="Nutriție" setter={setNut} current={nut} opts={[
            {v:1, lES:"Muy pobre", lRO:"Foarte săracă"}, {v:2, lES:"Probablemente inadecuada", lRO:"Probabil inadecvată"}, {v:3, lES:"Adecuada", lRO:"Adecvată"}, {v:4, lES:"Excelente", lRO:"Excelentă"}
        ]}/>
        <SelectGroup labelES="Fricción y Roce" labelRO="Fricțiune" setter={setFric} current={fric} opts={[
            {v:1, lES:"Problema (Se resbala)", lRO:"Problemă"}, {v:2, lES:"Problema potencial", lRO:"Problemă potențială"}, {v:3, lES:"Sin problema aparente", lRO:"Fără probleme"}
        ]}/>
      </div>
      <ResultCard resultData={total > 0 ? { getText: getResultText } : null} lang={lang} />
    </div>
  );
};

// ==========================================
// 6. BARTHEL (AVD - COMPLETA 10 ÍTEMS)
// ==========================================
export const BarthelCalc = ({ lang }) => {
  // Estado para los 10 ítems
  const [scores, setScores] = useState({
    comer: null, lavado: null, vestido: null, arreglo: null,
    heces: null, orina: null, retrete: null, 
    traslado: null, deambulacion: null, escaleras: null
  });

  const isEs = lang === 'es';
  
  // Suma total
  const total = Object.values(scores).reduce((a, b) => (a || 0) + (b || 0), 0);
  
  // Comprobar si está completo
  const isComplete = Object.values(scores).every(val => val !== null);

  const getResultText = (isEs) => {
    if (!isComplete) return null;

    if (total <= 20) return {
      title: `DEPENDIENTE TOTAL (${total})`, severity: "danger", subtitle: isEs ? "Necesita Ayuda Continua" : "Dependență Totală",
      protocol: isEs 
        ? "**CUIDADOS DE SUPLENCIA TOTAL:**\nEl paciente no puede realizar ninguna actividad básica por sí mismo.\n1. **Higiene:** Aseo completo en cama diario.\n2. **Alimentación:** Necesita ser alimentado totalmente. Valore riesgo de disfagia (atragantamiento).\n3. **Piel:** Riesgo máximo de úlceras. Requiere cambios posturales y colchón de aire."
        : "**ÎNGRIJIRI TOTALE:** Pacientul nu poate face nimic singur. Necesită igienă la pat, hrănire asistată și prevenirea escarelor."
    };
    if (total <= 60) return {
      title: `DEPENDENCIA SEVERA (${total})`, severity: "warning", subtitle: "Gran Ayuda",
      protocol: isEs 
        ? "**FOMENTO DE LA AUTONOMÍA:**\nNecesita ayuda para casi todo, pero puede colaborar mínimamente.\n1. **Transferencias:** Necesita ayuda de 1 o 2 personas para pasarlo al sillón (o grúa).\n2. **Aseo:** Puede lavarse la cara o manos, fomente que lo haga él.\n3. **Seguridad:** No dejarle solo en el baño o sentado sin sujeción."
        : "**DEPENDENȚĂ SEVERĂ:** Necesită ajutor major pentru transferuri și igienă. Încurajați mica autonomie."
    };
    if (total <= 90) return {
      title: `DEPENDENCIA MODERADA (${total})`, severity: "info", subtitle: "Ayuda Parcial",
      protocol: isEs 
        ? "**SUPERVISIÓN:**\nPuede realizar actividades básicas pero con riesgo.\n1. **Baño:** Necesita supervisión o ayuda para entrar/salir de la ducha (riesgo de caída).\n2. **Vestido:** Prepare la ropa en orden para facilitarle la tarea.\n3. **Marcha:** Vigile si usa bastón o andador correctamente."
        : "**DEPENDENȚĂ MODERATĂ:** Poate face activități dar cu supraveghere. Risc de cădere în baie."
    };
    return {
      title: `INDEPENDIENTE (${total})`, severity: "normal", subtitle: "Autónomo",
      protocol: isEs 
        ? "**PREPARACIÓN AL ALTA:**\nEl paciente es válido para las actividades de la vida diaria.\n1. **Educación:** Refuerce la toma de medicación y signos de alarma.\n2. **Entorno:** Asegure que su domicilio es seguro (alfombras, luz)."
        : "**INDEPENDENT:** Pacient autonom. Pregătiți externarea și educația sanitară."
    };
  };

  const BarthelItem = ({ labelES, labelRO, current, setter, options }) => (
    <div className="mb-4 pb-4 border-b border-white/10 last:border-0">
      <p className="text-sm font-bold mb-2 text-white/90">{isEs ? labelES : labelRO}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button 
            key={opt.v} 
            onClick={() => setter(opt.v)}
            className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors flex-1
            ${current === opt.v ? 'bg-white text-blue-900 border-white' : 'bg-blue-900/40 border-white/20 text-white hover:bg-blue-900/60'}`}
          >
            {isEs ? opt.lES : opt.lRO} <span className="opacity-60 ml-1">({opt.v})</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`p-6 rounded-3xl shadow-xl mb-8 ${THEMES.rehab.bg} text-white`}>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
        <div className="p-3 rounded-2xl bg-white/20"><ClipboardList size={24}/></div>
        <h4 className="font-heading font-black text-xl">Barthel</h4>
        <div className="ml-auto text-4xl font-heading font-black">{total}</div>
      </div>

      <div className="space-y-1">
         <BarthelItem labelES="Comer" labelRO="Mâncat" current={scores.comer} setter={(v)=>setScores(p=>({...p, comer:v}))} options={[
           {v:0, lES:"Incapaz", lRO:"Incapabil"}, {v:5, lES:"Ayuda (corta carne)", lRO:"Ajutor"}, {v:10, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Lavarse (Baño)" labelRO="Spălat (Baie)" current={scores.lavado} setter={(v)=>setScores(p=>({...p, lavado:v}))} options={[
           {v:0, lES:"Dependiente", lRO:"Dependent"}, {v:5, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Vestirse" labelRO="Îmbrăcat" current={scores.vestido} setter={(v)=>setScores(p=>({...p, vestido:v}))} options={[
           {v:0, lES:"Dependiente", lRO:"Dependent"}, {v:5, lES:"Ayuda parcial", lRO:"Ajutor parțial"}, {v:10, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Arreglo (Peinarse/Afeitarse)" labelRO="Îngrijire personală" current={scores.arreglo} setter={(v)=>setScores(p=>({...p, arreglo:v}))} options={[
           {v:0, lES:"Dependiente", lRO:"Dependent"}, {v:5, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Deposición (Heces)" labelRO="Scaun (Defecație)" current={scores.heces} setter={(v)=>setScores(p=>({...p, heces:v}))} options={[
           {v:0, lES:"Incontinente", lRO:"Incontinent"}, {v:5, lES:"Accidente ocasional", lRO:"Ocazional"}, {v:10, lES:"Continente", lRO:"Continent"}
         ]} />
         <BarthelItem labelES="Micción (Orina)" labelRO="Urină (Micțiune)" current={scores.orina} setter={(v)=>setScores(p=>({...p, orina:v}))} options={[
           {v:0, lES:"Incontinente", lRO:"Incontinent"}, {v:5, lES:"Accidente ocasional", lRO:"Ocazional"}, {v:10, lES:"Continente", lRO:"Continent"}
         ]} />
         <BarthelItem labelES="Uso del Retrete" labelRO="Folosire toaletă" current={scores.retrete} setter={(v)=>setScores(p=>({...p, retrete:v}))} options={[
           {v:0, lES:"Dependiente", lRO:"Dependent"}, {v:5, lES:"Ayuda parcial", lRO:"Ajutor parțial"}, {v:10, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Traslado (Cama-Sillón)" labelRO="Transfer (Pat-Scaun)" current={scores.traslado} setter={(v)=>setScores(p=>({...p, traslado:v}))} options={[
           {v:0, lES:"No se mantiene", lRO:"Nu se ține"}, {v:5, lES:"Gran ayuda", lRO:"Ajutor major"}, {v:10, lES:"Mínima ayuda", lRO:"Ajutor minim"}, {v:15, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Deambulación" labelRO="Mersul" current={scores.deambulacion} setter={(v)=>setScores(p=>({...p, deambulacion:v}))} options={[
           {v:0, lES:"Inmóvil", lRO:"Imobil"}, {v:5, lES:"Silla ruedas", lRO:"Scaun rotile"}, {v:10, lES:"Ayuda (1 pers)", lRO:"Ajutor (1 pers)"}, {v:15, lES:"Independiente", lRO:"Independent"}
         ]} />
         <BarthelItem labelES="Escaleras" labelRO="Scări" current={scores.escaleras} setter={(v)=>setScores(p=>({...p, escaleras:v}))} options={[
           {v:0, lES:"Incapaz", lRO:"Incapabil"}, {v:5, lES:"Ayuda física", lRO:"Ajutor fizic"}, {v:10, lES:"Independiente", lRO:"Independent"}
         ]} />
      </div>
      
      {/* Solo mostramos la tarjeta si está completo */}
      <ResultCard resultData={isComplete ? { getText: getResultText } : null} lang={lang} />
      
      {!isComplete && (
        <div className="bg-white/10 p-4 rounded-xl text-center mt-4">
          <p className="text-sm opacity-80">{isEs ? "Complete todos los ítems para ver el resultado." : "Completați toate punctele pentru rezultat."}</p>
        </div>
      )}
    </div>
  );
};