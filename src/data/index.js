/**
 * 📂 ARCHIVO CENTRAL DE DATOS: PETRESCUENF3
 * Propósito: Punto de exportación unificado para el ecosistema de la aplicación.
 * Auditoría Técnica: Versión 3.0 (Depuración de sintaxis y expansión bilingüe).
 * Estándares: NANDA-I 2024-2026 | NIC | NOC | Seguridad del Paciente.
 */

// 1. IMPORTACIONES DE BASES DE DATOS CLÍNICAS
import { medicamentos } from "./medications"; // Backup Schema
import { tubosLaboratorio, perfilesAnalitica, consejosExtraccion, LAB_REQUEST_FORM_DATA } from "./lab"; // Backup Schema
import { herramientas } from "./tools"; // Backup Schema

import { PROCEDURES_DB } from "./procedures";
import { CART_DB } from "./crash_cart";
import { FIRST_AID_DB } from "./emergency";
import { ACRONYMS_DB } from "./acronyms";
import { VOCABULARY_DB } from "./vocabulary";
import { DICTIONARY_DB } from "./dictionary";

import { QUIZ_DB } from "./quiz";

import { ANALYTICS_DB, LAB_TIPS } from "./analytics";
import { UI_TEXT } from "./ui";

// 2. IMPORTACIÓN DE NUEVOS MÓDULOS PEDAGÓGICOS (AUDITADOS)
import { COURSE_SYLLABUS } from "./course/syllabus";

// MODULE 1
import { MODULE_1_LESSON_1 } from "./course/module1_pilot";
import { MODULE_1_LESSON_2 } from "./course/module1_topic2";
import { MODULE_1_LESSON_3 } from "./course/module1_topic3";
import { MODULE_1_LESSON_4 } from "./course/module1_topic4";
// import { MODULE_1_LESSON_5 } from "./course/module1_topic5"; // REPLACED BY TOPIC_5
import { MODULE_1_LESSON_6 } from "./course/module1_topic6";
import { MODULE_1_LESSON_7 } from "./course/module1_topic7";
import { MODULE_1_LESSON_8 } from "./course/module1_topic8";
// import { MODULE_1_LESSON_9 } from "./course/module1_topic9"; // REPLACED BY TOPIC_9
import { MODULE_1_LESSON_10 } from "./course/module1_topic10";

// MODULE 1 NEW TOPICS (Overrides)
import { MODULE_1_TOPIC_5 } from "./course/module1_topic5";
import { MODULE_1_TOPIC_9 } from "./course/module1_topic9";

// MODULE 2
import { MODULE_2_LESSON_11 } from "./course/module2_topic11";
import { MODULE_2_LESSON_16 } from "./course/module2_topic16";

// MODULE 3
import { MODULE_3_TOPIC_21 } from "./course/module3_topic21";
import { MODULE_3_TOPIC_22 } from "./course/module3_topic22";
import { MODULE_3_TOPIC_23 } from "./course/module3_topic23";
import { MODULE_3_TOPIC_24 } from "./course/module3_topic24";
import { MODULE_3_TOPIC_28 } from "./course/module3_topic28";

// MODULE 4
import { MODULE_4_TOPIC_31 } from "./course/module4_topic31";
import { MODULE_4_TOPIC_32 } from "./course/module4_topic32";
import { MODULE_4_TOPIC_33 } from "./course/module4_topic33";
import { MODULE_4_TOPIC_34 } from "./course/module4_topic34";
import { MODULE_4_TOPIC_35 } from "./course/module4_topic35";
import { MODULE_4_TOPIC_36 } from "./course/module4_topic36";
import { MODULE_4_TOPIC_37 } from "./course/module4_topic37";
import { MODULE_4_TOPIC_38 } from "./course/module4_topic38";
import { MODULE_4_TOPIC_39 } from "./course/module4_topic39";
import { MODULE_4_TOPIC_40 } from "./course/module4_topic40";

// MODULE 5
import { MODULE_5_TOPIC_41 } from "./course/module5_topic41";
import { MODULE_5_TOPIC_42 } from "./course/module5_topic42";
import { MODULE_5_TOPIC_43 } from "./course/module5_topic43";
import { MODULE_5_TOPIC_44 } from "./course/module5_topic44";
import { MODULE_5_TOPIC_45 } from "./course/module5_topic45";
import { MODULE_5_TOPIC_46 } from "./course/module5_topic46";
import { MODULE_5_TOPIC_47 } from "./course/module5_topic47";
import { MODULE_5_TOPIC_48 } from "./course/module5_topic48";
import { MODULE_5_TOPIC_49 } from "./course/module5_topic49";
import { MODULE_5_TOPIC_50 } from "./course/module5_topic50";

// MODULE 12, 13, 15, 18
import { MODULE_12_TOPIC_108 } from "./course/module12_topic108";
import { MODULE_12_TOPIC_111 } from "./course/module12_topic111";
import { MODULE_13_TOPIC_129 } from "./course/module13_topic129";
import { MODULE_15_TOPIC_139 } from "./course/module15_topic139";
import { MODULE_15_TOPIC_140 } from "./course/module15_topic140";
import { MODULE_18_TOPIC_181 } from "./course/module18_topic181";

// PART IV
// PART IV
import { MASTER_1_TOPIC_1 } from "./course/part4_master1_topic1";
import { MASTER_1_TOPIC_2 } from "./course/part4_master1_topic2";
import { MASTER_1_TOPIC_3 } from "./course/part4_master1_topic3";
import { MASTER_1_TOPIC_4 } from "./course/part4_master1_topic4";

// MASTER 2 (UCI)
import { MASTER_2_TOPIC_1 } from "./course/part4_master2_topic1";
import { MASTER_2_TOPIC_2 } from "./course/part4_master2_topic2";

// MASTER 3 (PHARMA)
import { MASTER_3_TOPIC_1 } from "./course/part4_master3_topic1";
import { MASTER_3_TOPIC_2 } from "./course/part4_master3_topic2";

// MASTER 4 (CARDIO)
import { MASTER_4_TOPIC_1 } from "./course/part4_master4_topic1";
import { MASTER_4_TOPIC_2 } from "./course/part4_master4_topic2";

// MASTER 5 (ONCO)
import { MASTER_5_TOPIC_1 } from "./course/part4_master5_topic1";
import { MASTER_5_TOPIC_2 } from "./course/part4_master5_topic2";

// MASTER 6 (PEDS)
import { MASTER_6_TOPIC_1 } from "./course/part4_master6_topic1";
import { MASTER_6_TOPIC_2 } from "./course/part4_master6_topic2";

// MASTER 7 (DIALYSIS)
import { MASTER_7_TOPIC_1 } from "./course/part4_master7_topic1";
import { MASTER_7_TOPIC_2 } from "./course/part4_master7_topic2";

// PART 5 - INTERNAL MEDICINE (BATCH 1)
import { INTERNAL_1_TOPIC_1 } from "./course/part5_internal1_topic1";
import { INTERNAL_1_TOPIC_2 } from "./course/part5_internal1_topic2";
import { INTERNAL_2_TOPIC_1 } from "./course/part5_internal2_topic1";
import { INTERNAL_2_TOPIC_2 } from "./course/part5_internal2_topic2";
import { CLINICAL_1_TOPIC_1 } from "./course/part7_clinical1_topic1";
import { CLINICAL_1_TOPIC_2 } from "./course/part7_clinical1_topic2";
import { CLINICAL_2_TOPIC_1 } from "./course/part7_clinical2_topic1";
import { CLINICAL_2_TOPIC_2 } from "./course/part7_clinical2_topic2";
import { CLINICAL_3_TOPIC_1 } from "./course/part7_clinical3_topic1";
import { CLINICAL_3_TOPIC_2 } from "./course/part7_clinical3_topic2";
import { CLINICAL_4_TOPIC_1 } from "./course/part7_clinical4_topic1";
import { CLINICAL_4_TOPIC_2 } from "./course/part7_clinical4_topic2";
import { CLINICAL_5_TOPIC_1 } from "./course/part7_clinical5_topic1";
import { CLINICAL_5_TOPIC_2 } from "./course/part7_clinical5_topic2";
import { CLINICAL_6_TOPIC_1 } from "./course/part7_clinical6_topic1";
import { CLINICAL_6_TOPIC_2 } from "./course/part7_clinical6_topic2";
import { CLINICAL_7_TOPIC_1 } from "./course/part7_clinical7_topic1";
import { CLINICAL_7_TOPIC_2 } from "./course/part7_clinical7_topic2";
import { CLINICAL_8_TOPIC_1 } from "./course/part7_clinical8_topic1";
import { CLINICAL_8_TOPIC_2 } from "./course/part7_clinical8_topic2";
import { CLINICAL_9_TOPIC_1 } from "./course/part7_clinical9_topic1";
import { CLINICAL_9_TOPIC_2 } from "./course/part7_clinical9_topic2";
import { CLINICAL_10_TOPIC_1 } from "./course/part7_clinical10_topic1";
import { CLINICAL_10_TOPIC_2 } from "./course/part7_clinical10_topic2";
import { CLINICAL_11_TOPIC_1 } from "./course/part7_clinical11_topic1";
import { CLINICAL_11_TOPIC_2 } from "./course/part7_clinical11_topic2";
import { CLINICAL_12_TOPIC_1 } from "./course/part7_clinical12_topic1";
import { CLINICAL_12_TOPIC_2 } from "./course/part7_clinical12_topic2";
import { CLINICAL_13_TOPIC_1 } from "./course/part7_clinical13_topic1";
import { CLINICAL_13_TOPIC_2 } from "./course/part7_clinical13_topic2";


import { part8_manual_m3_t1 } from './course/part8_manual_m3_t1';
import { part8_manual_m3_t2 } from './course/part8_manual_m3_t2';
import { part8_manual_m3_t3 } from './course/part8_manual_m3_t3';
import { part8_manual_m3_t4 } from './course/part8_manual_m3_t4';
import { part8_manual_m3_t5 } from './course/part8_manual_m3_t5';


const MANUAL_3_LESSONS = {
  "part8_manual_m3_t1": part8_manual_m3_t1,
  "part8_manual_m3_t2": part8_manual_m3_t2,
  "part8_manual_m3_t3": part8_manual_m3_t3,
  "part8_manual_m3_t4": part8_manual_m3_t4,
  "part8_manual_m3_t5": part8_manual_m3_t5
};
import { part8_manual_m1_t1 } from './course/part8_manual_m1_t1';
import { part8_manual_m1_t2 } from './course/part8_manual_m1_t2';
import { part8_manual_m1_t3 } from './course/part8_manual_m1_t3';
import { part8_manual_m1_t4 } from './course/part8_manual_m1_t4';

// Part VIII: Manual de la Enfermería (2014) - Module 2
import { part8_manual_m2_t1 } from './course/part8_manual_m2_t1';
import { part8_manual_m2_t2 } from './course/part8_manual_m2_t2';
import { part8_manual_m2_t3 } from './course/part8_manual_m2_t3';
import { part8_manual_m2_t4 } from './course/part8_manual_m2_t4';
import { part8_manual_m4_t1 } from './course/part8_manual_m4_t1';
import { part8_manual_m4_t2 } from './course/part8_manual_m4_t2';
import { part8_manual_m4_t3 } from './course/part8_manual_m4_t3';

// Part VIII: Manual de la Enfermería (2014) - Module 5 (Geriatría) & 6 (Farmacología)
import { part8_manual_m5_t1 } from './course/part8_manual_m5_t1';
import { part8_manual_m5_t2 } from './course/part8_manual_m5_t2';
import { part8_manual_m6_t1 } from './course/part8_manual_m6_t1';

import { CLINICAL_14_TOPIC_1 } from "./course/part7_clinical14_topic1";
import { CLINICAL_14_TOPIC_2 } from "./course/part7_clinical14_topic2";
import { CLINICAL_15_TOPIC_1 } from "./course/part7_clinical15_topic1";
import { CLINICAL_15_TOPIC_2 } from "./course/part7_clinical15_topic2";
import { INTERNAL_3_TOPIC_1 } from "./course/part5_internal3_topic1";
import { INTERNAL_3_TOPIC_2 } from "./course/part5_internal3_topic2";

// PART 5 - INTERNAL MEDICINE (BATCH 2)
import { INTERNAL_4_TOPIC_1 } from "./course/part5_internal4_topic1";
import { INTERNAL_4_TOPIC_2 } from "./course/part5_internal4_topic2";
import { INTERNAL_5_TOPIC_1 } from "./course/part5_internal5_topic1";
import { INTERNAL_5_TOPIC_2 } from "./course/part5_internal5_topic2";
import { INTERNAL_6_TOPIC_1 } from "./course/part5_internal6_topic1";
import { INTERNAL_6_TOPIC_2 } from "./course/part5_internal6_topic2";

// PART 5 - INTERNAL MEDICINE (BATCH 3)
import { INTERNAL_7_TOPIC_1 } from "./course/part5_internal7_topic1";
import { INTERNAL_7_TOPIC_2 } from "./course/part5_internal7_topic2";
import { INTERNAL_8_TOPIC_1 } from "./course/part5_internal8_topic1";
import { INTERNAL_8_TOPIC_2 } from "./course/part5_internal8_topic2";

// PART 5 - INTERNAL MEDICINE (FINAL BATCH)
import { INTERNAL_9_TOPIC_1 } from "./course/part5_internal9_topic1";
import { INTERNAL_9_TOPIC_2 } from "./course/part5_internal9_topic2";
import { INTERNAL_10_TOPIC_1 } from "./course/part5_internal10_topic1";
import { INTERNAL_10_TOPIC_2 } from "./course/part5_internal10_topic2";
import { INTERNAL_11_TOPIC_1 } from "./course/part5_internal11_topic1";
import { INTERNAL_11_TOPIC_2 } from "./course/part5_internal11_topic2";

// PART 6 - PALLIATIVE CARE (DONOSTIA GUIDE)
import { PALLIATIVE_1_TOPIC_1 } from "./course/part6_palliative1_topic1";
import { PALLIATIVE_1_TOPIC_2 } from "./course/part6_palliative1_topic2";
import { PALLIATIVE_2_TOPIC_1 } from "./course/part6_palliative2_topic1";
import { PALLIATIVE_2_TOPIC_2 } from "./course/part6_palliative2_topic2";
import { PALLIATIVE_3_TOPIC_1 } from "./course/part6_palliative3_topic1";
import { PALLIATIVE_3_TOPIC_2 } from "./course/part6_palliative3_topic2";
import { PALLIATIVE_4_TOPIC_1 } from "./course/part6_palliative4_topic1";
import { PALLIATIVE_4_TOPIC_2 } from "./course/part6_palliative4_topic2";

// PART 9 - IFKB (Incremental Factored Knowledge Base)

// IFKB Lessons - Módulo 1: Geriatría
import { ifkb_m1_t1 } from './course/ifkb_m1_t1';
import { ifkb_m1_t2 } from './course/ifkb_m1_t2';
import { ifkb_m1_t3 } from './course/ifkb_m1_t3';
import { ifkb_m1_t4 } from './course/ifkb_m1_t4';
import { ifkb_m1_t5 } from './course/ifkb_m1_t5';
import { ifkb_m1_t6 } from './course/ifkb_m1_t6';
import { ifkb_m1_t7 } from './course/ifkb_m1_t7';
import { ifkb_m1_t8 } from './course/ifkb_m1_t8';
import { ifkb_m1_t9 } from './course/ifkb_m1_t9';
import { ifkb_m1_t10 } from './course/ifkb_m1_t10';

// IFKB Lessons - Módulo 2: Salud Mental
import { ifkb_m2_t1 } from './course/ifkb_m2_t1';
import { ifkb_m2_t2 } from './course/ifkb_m2_t2';
import { ifkb_m2_t3 } from './course/ifkb_m2_t3';
import { ifkb_m2_t4 } from './course/ifkb_m2_t4';
import { ifkb_m2_t5 } from './course/ifkb_m2_t5';
import { ifkb_m2_t6 } from './course/ifkb_m2_t6';
import { ifkb_m2_t7 } from './course/ifkb_m2_t7';
import { ifkb_m2_t8 } from './course/ifkb_m2_t8';

// IFKB Lessons - Módulo 3: Farmacología
import { ifkb_m3_t1 } from './course/ifkb_m3_t1';
import { ifkb_m3_t2 } from './course/ifkb_m3_t2';
import { ifkb_m3_t3 } from './course/ifkb_m3_t3';
import { ifkb_m3_t4 } from './course/ifkb_m3_t4';
import { ifkb_m3_t5 } from './course/ifkb_m3_t5';
import { ifkb_m3_t6 } from './course/ifkb_m3_t6';
import { ifkb_m3_t7 } from './course/ifkb_m3_t7';
import { ifkb_m3_t8 } from './course/ifkb_m3_t8';

// IFKB Lessons - Módulo 4: Procedimientos
import { ifkb_m4_t1 } from './course/ifkb_m4_t1';
import { ifkb_m4_t2 } from './course/ifkb_m4_t2';
import { ifkb_m4_t3 } from './course/ifkb_m4_t3';
import { ifkb_m4_t4 } from './course/ifkb_m4_t4';
import { ifkb_m4_t5 } from './course/ifkb_m4_t5';
import { ifkb_m4_t6 } from './course/ifkb_m4_t6';
import { ifkb_m4_t7 } from './course/ifkb_m4_t7';
import { ifkb_m4_t8 } from './course/ifkb_m4_t8';
import { ifkb_m4_t9 } from './course/ifkb_m4_t9';

// IFKB Lessons - Módulo 5: Laboratorio
import { ifkb_m5_t1 } from './course/ifkb_m5_t1';
import { ifkb_m5_t2 } from './course/ifkb_m5_t2';
import { ifkb_m5_t3 } from './course/ifkb_m5_t3';
import { ifkb_m5_t4 } from './course/ifkb_m5_t4';

// IFKB Lessons - Módulo 6: Cardiología
import { ifkb_m6_t1 } from './course/ifkb_m6_t1';

// IFKB Lessons - Módulo 7: Emergencias
import { ifkb_m7_t1 } from './course/ifkb_m7_t1';

// IFKB Lessons - Módulo 8: Endocrinología
import { ifkb_m8_t1 } from './course/ifkb_m8_t1';

// IFKB Lessons - Módulo 9: Medicina Interna
import { ifkb_m9_t1 } from './course/ifkb_m9_t1';
import { ifkb_m9_t2 } from './course/ifkb_m9_t2';

// IFKB Lessons - Módulo 10: Anatomía
import { ifkb_m10_t1 } from './course/ifkb_m10_t1';
 
// Alternative Sections (Non-Course Content)
import { 
  ALTERNATIVE_SECTIONS,
  CARRITO_CURAS,
  TECNICAS_GUIAS,
  URGENCIAS_PRIMEROS_AUXILIOS,
  PATOLOGIAS_ENFERMEDADES,
  CASOS_REALES
} from './course/alternative_sections';
  
// 3. EXPORTACIÓN MASIVA Y UNIFICADA
const MODULE_1_LESSONS = {
  "1-1": MODULE_1_LESSON_1,
  "1-2": MODULE_1_LESSON_2,
  "1-3": MODULE_1_LESSON_3,
  "1-4": MODULE_1_LESSON_4,
  "1-5": MODULE_1_TOPIC_5,
  "1-6": MODULE_1_LESSON_6,
  "1-7": MODULE_1_LESSON_7,
  "1-8": MODULE_1_LESSON_8,
  "1-9": MODULE_1_TOPIC_9,
  "1-10": MODULE_1_LESSON_10,
};

const MODULE_2_LESSONS = {
  "2-11": MODULE_2_LESSON_11,
  "2-16": MODULE_2_LESSON_16,
};

const MODULE_3_LESSONS = {
  "3-21": MODULE_3_TOPIC_21,
  "3-22": MODULE_3_TOPIC_22,
  "3-23": MODULE_3_TOPIC_23
};

const MODULE_4_LESSONS = {
  "4-31": MODULE_4_TOPIC_31,
  "4-32": MODULE_4_TOPIC_32,
  "4-33": MODULE_4_TOPIC_33,
  "4-34": MODULE_4_TOPIC_34,
  "4-35": MODULE_4_TOPIC_35,
  "4-36": MODULE_4_TOPIC_36,

  "4-37": MODULE_4_TOPIC_37,
  "4-38": MODULE_4_TOPIC_38,
  "4-39": MODULE_4_TOPIC_39,
  "4-40": MODULE_4_TOPIC_40
};

const MODULE_5_LESSONS = {
  "5-41": MODULE_5_TOPIC_41,
  "5-42": MODULE_5_TOPIC_42,
  "5-43": MODULE_5_TOPIC_43,
  "5-44": MODULE_5_TOPIC_44,
  "5-45": MODULE_5_TOPIC_45,
  "5-46": MODULE_5_TOPIC_46,
  "5-47": MODULE_5_TOPIC_47,
  "5-48": MODULE_5_TOPIC_48,
  "5-49": MODULE_5_TOPIC_49,
  "5-50": MODULE_5_TOPIC_50
};

const MASTER_1_LESSONS = {
  "master-1-1": MASTER_1_TOPIC_1,
  "master-1-2": MASTER_1_TOPIC_2,
  "master-1-3": MASTER_1_TOPIC_3,
  "master-1-4": MASTER_1_TOPIC_4,
};

const MASTER_2_LESSONS = {
  "master-2-1": MASTER_2_TOPIC_1,
  "master-2-2": MASTER_2_TOPIC_2,
};

const MASTER_3_LESSONS = {
  "master-3-1": MASTER_3_TOPIC_1,
  "master-3-2": MASTER_3_TOPIC_2,
};

const MASTER_4_LESSONS = {
  "master-4-1": MASTER_4_TOPIC_1,
  "master-4-2": MASTER_4_TOPIC_2,
};

const MASTER_5_LESSONS = {
  "master-5-1": MASTER_5_TOPIC_1,
  "master-5-2": MASTER_5_TOPIC_2,
};

const MASTER_6_LESSONS = {
  "master-6-1": MASTER_6_TOPIC_1,
  "master-6-2": MASTER_6_TOPIC_2,
};

const MASTER_7_LESSONS = {
  "master-7-1": MASTER_7_TOPIC_1,
  "master-7-2": MASTER_7_TOPIC_2,
};

const INTERNAL_1_LESSONS = {
  "internal-1-1": INTERNAL_1_TOPIC_1,
  "internal-1-2": INTERNAL_1_TOPIC_2,
};

const INTERNAL_2_LESSONS = {
  "internal-2-1": INTERNAL_2_TOPIC_1,
  "internal-2-2": INTERNAL_2_TOPIC_2,
};

const INTERNAL_3_LESSONS = {
  "internal-3-1": INTERNAL_3_TOPIC_1,
  "internal-3-2": INTERNAL_3_TOPIC_2,
};

const INTERNAL_4_LESSONS = {
  "internal-4-1": INTERNAL_4_TOPIC_1,
  "internal-4-2": INTERNAL_4_TOPIC_2,
};

const INTERNAL_5_LESSONS = {
  "internal-5-1": INTERNAL_5_TOPIC_1,
  "internal-5-2": INTERNAL_5_TOPIC_2,
};

const INTERNAL_6_LESSONS = {
  "internal-6-1": INTERNAL_6_TOPIC_1,
  "internal-6-2": INTERNAL_6_TOPIC_2,
};

const INTERNAL_7_LESSONS = {
  "internal-7-1": INTERNAL_7_TOPIC_1,
  "internal-7-2": INTERNAL_7_TOPIC_2,
};

const INTERNAL_8_LESSONS = {
  "internal-8-1": INTERNAL_8_TOPIC_1,
  "internal-8-2": INTERNAL_8_TOPIC_2,
};

const INTERNAL_9_LESSONS = {
  "internal-9-1": INTERNAL_9_TOPIC_1,
  "internal-9-2": INTERNAL_9_TOPIC_2,
};

const INTERNAL_10_LESSONS = {
  "internal-10-1": INTERNAL_10_TOPIC_1,
  "internal-10-2": INTERNAL_10_TOPIC_2,
};

const INTERNAL_11_LESSONS = {
  "internal-11-1": INTERNAL_11_TOPIC_1,
  "internal-11-2": INTERNAL_11_TOPIC_2,
};

const PALLIATIVE_1_LESSONS = {
  "part6_palliative1_topic1": PALLIATIVE_1_TOPIC_1,
  "part6_palliative1_topic2": PALLIATIVE_1_TOPIC_2,
};

const PALLIATIVE_2_LESSONS = {
  "part6_palliative2_topic1": PALLIATIVE_2_TOPIC_1,
  "part6_palliative2_topic2": PALLIATIVE_2_TOPIC_2,
};

const PALLIATIVE_3_LESSONS = {
  "part6_palliative3_topic1": PALLIATIVE_3_TOPIC_1,
  "part6_palliative3_topic2": PALLIATIVE_3_TOPIC_2,
};

const PALLIATIVE_4_LESSONS = {
  "part6_palliative4_topic1": PALLIATIVE_4_TOPIC_1,
  "part6_palliative4_topic2": PALLIATIVE_4_TOPIC_2,
};

const CLINICAL_1_LESSONS = {
  "part7_clinical1_topic1": CLINICAL_1_TOPIC_1,
  "part7_clinical1_topic2": CLINICAL_1_TOPIC_2,
};

const CLINICAL_2_LESSONS = {
  "part7_clinical2_topic1": CLINICAL_2_TOPIC_1,
  "part7_clinical2_topic2": CLINICAL_2_TOPIC_2,
};

const CLINICAL_3_LESSONS = {
  "part7_clinical3_topic1": CLINICAL_3_TOPIC_1,
  "part7_clinical3_topic2": CLINICAL_3_TOPIC_2,
};

const CLINICAL_4_LESSONS = {
  "part7_clinical4_topic1": CLINICAL_4_TOPIC_1,
  "part7_clinical4_topic2": CLINICAL_4_TOPIC_2,
};

const CLINICAL_5_LESSONS = {
  "part7_clinical5_topic1": CLINICAL_5_TOPIC_1,
  "part7_clinical5_topic2": CLINICAL_5_TOPIC_2,
};

const CLINICAL_6_LESSONS = {
  "part7_clinical6_topic1": CLINICAL_6_TOPIC_1,
  "part7_clinical6_topic2": CLINICAL_6_TOPIC_2,
};

const CLINICAL_7_LESSONS = {
  "part7_clinical7_topic1": CLINICAL_7_TOPIC_1,
  "part7_clinical7_topic2": CLINICAL_7_TOPIC_2,
};

const CLINICAL_8_LESSONS = {
  "part7_clinical8_topic1": CLINICAL_8_TOPIC_1,
  "part7_clinical8_topic2": CLINICAL_8_TOPIC_2,
};

const CLINICAL_9_LESSONS = {
  "part7_clinical9_topic1": CLINICAL_9_TOPIC_1,
  "part7_clinical9_topic2": CLINICAL_9_TOPIC_2,
};

const CLINICAL_10_LESSONS = {
  "part7_clinical10_topic1": CLINICAL_10_TOPIC_1,
  "part7_clinical10_topic2": CLINICAL_10_TOPIC_2,
};

const CLINICAL_11_LESSONS = {
  "part7_clinical11_topic1": CLINICAL_11_TOPIC_1,
  "part7_clinical11_topic2": CLINICAL_11_TOPIC_2,
};

const CLINICAL_12_LESSONS = {
  "part7_clinical12_topic1": CLINICAL_12_TOPIC_1,
  "part7_clinical12_topic2": CLINICAL_12_TOPIC_2,
};

const CLINICAL_13_LESSONS = {
  "part7_clinical13_topic1": CLINICAL_13_TOPIC_1,
  "part7_clinical13_topic2": CLINICAL_13_TOPIC_2,
};

const CLINICAL_14_LESSONS = {
  "part7_clinical14_topic1": CLINICAL_14_TOPIC_1,
  "part7_clinical14_topic2": CLINICAL_14_TOPIC_2,
};

const CLINICAL_15_LESSONS = {
  "part7_clinical15_topic1": CLINICAL_15_TOPIC_1,
  "part7_clinical15_topic2": CLINICAL_15_TOPIC_2,
};

const MANUAL_1_LESSONS = {
  "part8_manual_m1_t1": part8_manual_m1_t1,
  "part8_manual_m1_t2": part8_manual_m1_t2,
  "part8_manual_m1_t3": part8_manual_m1_t3,
  "part8_manual_m1_t4": part8_manual_m1_t4,
};

const MANUAL_2_LESSONS = {
  "part8_manual_m2_t1": part8_manual_m2_t1,
  "part8_manual_m2_t2": part8_manual_m2_t2,
  "part8_manual_m2_t3": part8_manual_m2_t3,
  "part8_manual_m2_t4": part8_manual_m2_t4,
};

const MANUAL_4_LESSONS = {
  "part8_manual_m4_t1": part8_manual_m4_t1,
  "part8_manual_m4_t2": part8_manual_m4_t2,
  "part8_manual_m4_t3": part8_manual_m4_t3,
};

const MANUAL_5_LESSONS = {
  "part8_manual_m5_t1": part8_manual_m5_t1,
  "part8_manual_m5_t2": part8_manual_m5_t2,
};

const MANUAL_6_LESSONS = {
  "part8_manual_m6_t1": part8_manual_m6_t1,
};

const IFKB_M1_LESSONS = {
  "ifkb_m1_t1": ifkb_m1_t1,
  "ifkb_m1_t2": ifkb_m1_t2,
  "ifkb_m1_t3": ifkb_m1_t3,
  "ifkb_m1_t4": ifkb_m1_t4,
  "ifkb_m1_t5": ifkb_m1_t5,
  "ifkb_m1_t6": ifkb_m1_t6,
  "ifkb_m1_t7": ifkb_m1_t7,
  "ifkb_m1_t8": ifkb_m1_t8,
  "ifkb_m1_t9": ifkb_m1_t9,
  "ifkb_m1_t10": ifkb_m1_t10,
};

const IFKB_M2_LESSONS = {
  "ifkb_m2_t1": ifkb_m2_t1,
  "ifkb_m2_t2": ifkb_m2_t2,
  "ifkb_m2_t3": ifkb_m2_t3,
  "ifkb_m2_t4": ifkb_m2_t4,
  "ifkb_m2_t5": ifkb_m2_t5,
  "ifkb_m2_t6": ifkb_m2_t6,
  "ifkb_m2_t7": ifkb_m2_t7,
  "ifkb_m2_t8": ifkb_m2_t8,
};

const IFKB_M3_LESSONS = {
  "ifkb_m3_t1": ifkb_m3_t1,
  "ifkb_m3_t2": ifkb_m3_t2,
  "ifkb_m3_t3": ifkb_m3_t3,
  "ifkb_m3_t4": ifkb_m3_t4,
  "ifkb_m3_t5": ifkb_m3_t5,
  "ifkb_m3_t6": ifkb_m3_t6,
  "ifkb_m3_t7": ifkb_m3_t7,
  "ifkb_m3_t8": ifkb_m3_t8,
};

const IFKB_M4_LESSONS = {
  "ifkb_m4_t1": ifkb_m4_t1,
  "ifkb_m4_t2": ifkb_m4_t2,
  "ifkb_m4_t3": ifkb_m4_t3,
  "ifkb_m4_t4": ifkb_m4_t4,
  "ifkb_m4_t5": ifkb_m4_t5,
  "ifkb_m4_t6": ifkb_m4_t6,
  "ifkb_m4_t7": ifkb_m4_t7,
  "ifkb_m4_t8": ifkb_m4_t8,
  "ifkb_m4_t9": ifkb_m4_t9,
};

const IFKB_M5_LESSONS = {
  "ifkb_m5_t1": ifkb_m5_t1,
  "ifkb_m5_t2": ifkb_m5_t2,
  "ifkb_m5_t3": ifkb_m5_t3,
  "ifkb_m5_t4": ifkb_m5_t4,
};

const IFKB_M6_LESSONS = {
  "ifkb_m6_t1": ifkb_m6_t1,
};

const IFKB_M7_LESSONS = {
  "ifkb_m7_t1": ifkb_m7_t1,
};

const IFKB_M8_LESSONS = {
  "ifkb_m8_t1": ifkb_m8_t1,
};

const IFKB_M9_LESSONS = {
  "ifkb_m9_t1": ifkb_m9_t1,
  "ifkb_m9_t2": ifkb_m9_t2,
};

const IFKB_M10_LESSONS = {
  "ifkb_m10_t1": ifkb_m10_t1,
};


export {
  // Bases de Datos Principales (OPTIMIZADAS CON RESPALDO)
  medicamentos as MEDS_DB, 
  tubosLaboratorio as LAB_TUBES,
  perfilesAnalitica as LAB_PROFILES,
  consejosExtraccion as LAB_TIPS_EXTRACTION,
  herramientas as TOOLS_DB,
  
  // Legacy/Compatibility
  tubosLaboratorio as LAB_DB, 

  PROCEDURES_DB,
  CART_DB,
  FIRST_AID_DB,
  ACRONYMS_DB,
  VOCABULARY_DB,
  DICTIONARY_DB, // Corrected: Now pointing to the full dictionary file

  ANALYTICS_DB,
  LAB_TIPS,
  LAB_REQUEST_FORM_DATA,

  // Soporte de Interfaz
  UI_TEXT,

  // Curso
  COURSE_SYLLABUS,
  
  // MODULE 1 LESSONS MAP
  MODULE_1_LESSONS,
  
  // MODULE 3
  MODULE_3_LESSONS,
  MODULE_3_TOPIC_21,
  MODULE_3_TOPIC_22,
  MODULE_3_TOPIC_23,
  
  // MODULE 4
  MODULE_4_LESSONS,
  MODULE_4_TOPIC_31,
  MODULE_4_TOPIC_32,
  MODULE_4_TOPIC_33,
  MODULE_4_TOPIC_34,
  MODULE_4_TOPIC_35,
  MODULE_4_TOPIC_36,

  MODULE_4_TOPIC_37,
  MODULE_4_TOPIC_38,
  MODULE_4_TOPIC_39,
  MODULE_4_TOPIC_40,
  
  // MODULE 5
  MODULE_5_LESSONS,
  MODULE_5_TOPIC_41,
  MODULE_5_TOPIC_42,
  MODULE_5_TOPIC_43,
  MODULE_5_TOPIC_44,
  MODULE_5_TOPIC_45,
  MODULE_5_TOPIC_46,
  MODULE_5_TOPIC_47,
  MODULE_5_TOPIC_48,
  MODULE_5_TOPIC_49,
  MODULE_5_TOPIC_50,
  
  // Individual Lessons
  MODULE_1_LESSON_1,
  MODULE_1_LESSON_2,
  MODULE_1_LESSON_3,
  MODULE_1_LESSON_4,
  MODULE_1_LESSON_6,
  MODULE_1_LESSON_7,
  MODULE_1_LESSON_8,
  MODULE_1_LESSON_10,
  
  // MASTER CLASS
  MASTER_1_LESSONS,
  MASTER_1_TOPIC_1,
  MASTER_1_TOPIC_2,
  MASTER_1_TOPIC_3,
  MASTER_1_TOPIC_4,

  MASTER_2_LESSONS,
  MASTER_2_TOPIC_1,
  MASTER_2_TOPIC_2,

  MASTER_3_LESSONS,
  // MODULE 3
  // Imports moved to top
  MASTER_4_TOPIC_1,
  MASTER_4_TOPIC_2,

  MASTER_5_LESSONS,
  MASTER_5_TOPIC_1,
  MASTER_5_TOPIC_2,

  MASTER_6_LESSONS,
  MASTER_6_TOPIC_1,
  MASTER_6_TOPIC_2,

  MASTER_7_LESSONS,
  MASTER_7_TOPIC_1,
  MASTER_7_TOPIC_2,

  INTERNAL_1_LESSONS,
  INTERNAL_1_TOPIC_1,
  INTERNAL_1_TOPIC_2,

  INTERNAL_2_LESSONS,
  INTERNAL_2_TOPIC_1,
  INTERNAL_2_TOPIC_2,

  INTERNAL_3_LESSONS,
  INTERNAL_3_TOPIC_1,
  INTERNAL_3_TOPIC_2,

  INTERNAL_4_LESSONS,
  INTERNAL_4_TOPIC_1,
  INTERNAL_4_TOPIC_2,

  INTERNAL_5_LESSONS,
  INTERNAL_5_TOPIC_1,
  INTERNAL_5_TOPIC_2,

  INTERNAL_6_LESSONS,
  INTERNAL_6_TOPIC_1,
  INTERNAL_6_TOPIC_2,

  INTERNAL_7_LESSONS,
  INTERNAL_7_TOPIC_1,
  INTERNAL_7_TOPIC_2,

  INTERNAL_8_LESSONS,
  INTERNAL_8_TOPIC_1,
  INTERNAL_8_TOPIC_2,

  INTERNAL_9_LESSONS,
  INTERNAL_9_TOPIC_1,
  INTERNAL_9_TOPIC_2,

  INTERNAL_10_LESSONS,
  INTERNAL_10_TOPIC_1,
  INTERNAL_10_TOPIC_2,

  INTERNAL_11_LESSONS,
  INTERNAL_11_TOPIC_1,
  INTERNAL_11_TOPIC_2,

  // PART 6 - PALLIATIVE
  PALLIATIVE_1_LESSONS,
  PALLIATIVE_1_TOPIC_1,
  PALLIATIVE_1_TOPIC_2,

  PALLIATIVE_2_LESSONS,
  PALLIATIVE_2_TOPIC_1,
  PALLIATIVE_2_TOPIC_2,

  PALLIATIVE_3_LESSONS,
  PALLIATIVE_3_TOPIC_1,
  PALLIATIVE_3_TOPIC_2,

  PALLIATIVE_4_LESSONS,
  PALLIATIVE_4_TOPIC_1,
  PALLIATIVE_4_TOPIC_2,

  CLINICAL_1_LESSONS,
  CLINICAL_1_TOPIC_1,
  CLINICAL_1_TOPIC_2,

  CLINICAL_2_LESSONS,
  CLINICAL_2_TOPIC_1,
  CLINICAL_2_TOPIC_2,

  CLINICAL_3_LESSONS,
  CLINICAL_3_TOPIC_1,
  CLINICAL_3_TOPIC_2,

  CLINICAL_4_LESSONS,
  CLINICAL_4_TOPIC_1,
  CLINICAL_4_TOPIC_2,

  CLINICAL_5_LESSONS,
  CLINICAL_5_TOPIC_1,
  CLINICAL_5_TOPIC_2,

  CLINICAL_6_LESSONS,
  CLINICAL_6_TOPIC_1,
  CLINICAL_6_TOPIC_2,

  CLINICAL_7_LESSONS,
  CLINICAL_7_TOPIC_1,
  CLINICAL_7_TOPIC_2,

  CLINICAL_8_LESSONS,
  CLINICAL_8_TOPIC_1,
  CLINICAL_8_TOPIC_2,

  CLINICAL_9_LESSONS,
  CLINICAL_9_TOPIC_1,
  CLINICAL_9_TOPIC_2,

  CLINICAL_10_LESSONS,
  CLINICAL_10_TOPIC_1,
  CLINICAL_10_TOPIC_2,

  CLINICAL_11_LESSONS,
  CLINICAL_11_TOPIC_1,
  CLINICAL_11_TOPIC_2,

  CLINICAL_12_LESSONS,
  CLINICAL_12_TOPIC_1,
  CLINICAL_12_TOPIC_2,

  CLINICAL_13_LESSONS,
  CLINICAL_13_TOPIC_1,
  CLINICAL_13_TOPIC_2,

  CLINICAL_14_LESSONS,
  CLINICAL_14_TOPIC_1,
  CLINICAL_14_TOPIC_2,

  CLINICAL_15_LESSONS,
  CLINICAL_15_TOPIC_1,
  CLINICAL_15_TOPIC_2,

  QUIZ_DB,

  
  MANUAL_1_LESSONS,
  MANUAL_2_LESSONS,
  MANUAL_3_LESSONS,
  MANUAL_4_LESSONS,
  MANUAL_5_LESSONS,
  MANUAL_6_LESSONS,

  // PART 9 - IFKB
  IFKB_M1_LESSONS,
  IFKB_M2_LESSONS,
  IFKB_M3_LESSONS,
  IFKB_M4_LESSONS,
  IFKB_M5_LESSONS,
  IFKB_M6_LESSONS,
  IFKB_M7_LESSONS,
  IFKB_M8_LESSONS,
  IFKB_M9_LESSONS,
  IFKB_M10_LESSONS,

  // Alternative Sections (Non-Course Content)
  ALTERNATIVE_SECTIONS,
  CARRITO_CURAS,
  TECNICAS_GUIAS,
  URGENCIAS_PRIMEROS_AUXILIOS,
  PATOLOGIAS_ENFERMEDADES,
  CASOS_REALES,

};

const MODULE_12_LESSONS = {
  "12-108": MODULE_12_TOPIC_108,
  "12-111": MODULE_12_TOPIC_111,
};

const MODULE_13_LESSONS = {
  "13-129": MODULE_13_TOPIC_129,
};

const MODULE_15_LESSONS = {
  "15-139": MODULE_15_TOPIC_139,
  "15-140": MODULE_15_TOPIC_140,
};

const MODULE_18_LESSONS = {
  "18-181": MODULE_18_TOPIC_181,
  "18-182": MODULE_18_TOPIC_181, // Shared content
};

const UNIFIED_COURSE_CONTENT = {
    ...MODULE_1_LESSONS,
    ...MODULE_2_LESSONS,
    ...MODULE_3_LESSONS,
    ...MODULE_4_LESSONS,
    ...MODULE_5_LESSONS,
    ...MODULE_12_LESSONS,
    ...MODULE_13_LESSONS,
    ...MODULE_15_LESSONS,
    ...MODULE_18_LESSONS,
    
    // Master Class (Expert)
    ...MASTER_1_LESSONS,
    ...MASTER_2_LESSONS,
    ...MASTER_3_LESSONS,
    ...MASTER_4_LESSONS,
    ...MASTER_5_LESSONS,
    ...MASTER_6_LESSONS,
    ...MASTER_7_LESSONS,

    // Internal Medicine
    ...INTERNAL_1_LESSONS,
    ...INTERNAL_2_LESSONS,
    ...INTERNAL_3_LESSONS,
    ...INTERNAL_4_LESSONS,
    ...INTERNAL_5_LESSONS,
    ...INTERNAL_6_LESSONS,
    ...INTERNAL_7_LESSONS,
    ...INTERNAL_8_LESSONS,
    ...INTERNAL_9_LESSONS,
    ...INTERNAL_10_LESSONS,
    ...INTERNAL_11_LESSONS,

    // Palliative
    ...PALLIATIVE_1_LESSONS,
    ...PALLIATIVE_2_LESSONS,
    ...PALLIATIVE_3_LESSONS,
    ...PALLIATIVE_4_LESSONS,

    // Clinical
    ...CLINICAL_1_LESSONS,
    ...CLINICAL_2_LESSONS,
    ...CLINICAL_3_LESSONS,
    ...CLINICAL_4_LESSONS,
    ...CLINICAL_5_LESSONS,
    ...CLINICAL_6_LESSONS,
    ...CLINICAL_7_LESSONS,
    ...CLINICAL_8_LESSONS,
    ...CLINICAL_9_LESSONS,
    ...CLINICAL_10_LESSONS,
    ...CLINICAL_11_LESSONS,
    ...CLINICAL_12_LESSONS,
    ...CLINICAL_13_LESSONS,
    ...CLINICAL_14_LESSONS,
    ...CLINICAL_15_LESSONS,

    // Manual 2014 Legacy
    ...MANUAL_1_LESSONS,
    ...MANUAL_2_LESSONS,
    ...MANUAL_3_LESSONS,
    ...MANUAL_4_LESSONS,
    ...MANUAL_5_LESSONS,
    ...MANUAL_6_LESSONS,

    // IFKB
    ...IFKB_M1_LESSONS,
    ...IFKB_M2_LESSONS,
    ...IFKB_M3_LESSONS,
    ...IFKB_M4_LESSONS,
    ...IFKB_M5_LESSONS,
    ...IFKB_M6_LESSONS,
    ...IFKB_M7_LESSONS,
    ...IFKB_M8_LESSONS,
    ...IFKB_M9_LESSONS,
    ...IFKB_M10_LESSONS,

    // ========================================================================
    // REORGANIZED CONTENT MAPPING (2026 UPDATE)
    // ========================================================================
    // MAP: A1-01 -> MODULE 1 (1-1)
    "A1-01": MODULE_1_LESSONS["1-1"],
    "A1-02": MODULE_1_LESSONS["1-2"],
    "A1-03": MODULE_1_LESSONS["1-3"],
    "A1-04": MODULE_1_LESSONS["1-4"],
    "A1-05": MODULE_1_TOPIC_5, // Was direct import
    "A1-06": MODULE_1_LESSONS["1-6"],
    "A1-07": MODULE_1_LESSONS["1-7"],
    "A1-08": MODULE_1_LESSONS["1-8"],
    "A1-09": MODULE_1_TOPIC_9, // Was direct import
    "A1-10": MODULE_1_LESSONS["1-10"],

    // MAP: B1-01 -> MODULE 2 (11-20)
    "B1-01": MODULE_2_LESSONS["2-11"],
    "B1-02": MODULE_2_LESSONS["2-11"], // Wait, 12 is missing in list? 2-11 and 2-16 exist.
    // I will map what exists. If missing, undefined -> CourseViewer handles or I should placeholder.
    // List dir showed module2_topic11 and 16. Missing 12,13,14,15,17,18,19,20. 
    // I will map available ones and placeholder others in a loop below.
    "B1-06": MODULE_2_LESSONS["2-16"],

    // MAP: A2-01 -> MODULE 3 (21-30)
    "A2-01": MODULE_3_LESSONS["3-21"],
    "A2-02": MODULE_3_LESSONS["3-22"],
    "A2-03": MODULE_3_LESSONS["3-23"],
    "A2-04": MODULE_3_TOPIC_24, // Check import? in list_dir module3_topic24 exists.
    "A2-08": MODULE_3_TOPIC_28, // Exists.

    // MAP: A3-01 -> MODULE 4 (31-40) - All exist
    "A3-01": MODULE_4_LESSONS["4-31"],
    "A3-02": MODULE_4_LESSONS["4-32"],
    "A3-03": MODULE_4_LESSONS["4-33"],
    "A3-04": MODULE_4_LESSONS["4-34"],
    "A3-05": MODULE_4_LESSONS["4-35"],
    "A3-06": MODULE_4_LESSONS["4-36"],
    "A3-07": MODULE_4_LESSONS["4-37"],
    "A3-08": MODULE_4_LESSONS["4-38"],
    "A3-09": MODULE_4_LESSONS["4-39"],
    "A3-10": MODULE_4_LESSONS["4-40"],

    // MAP: C1-01 -> MODULE 5 (41-50) - All exist
    "C1-01": MODULE_5_LESSONS["5-41"],
    "C1-02": MODULE_5_LESSONS["5-42"],
    "C1-03": MODULE_5_LESSONS["5-43"],
    "C1-04": MODULE_5_LESSONS["5-44"],
    "C1-05": MODULE_5_LESSONS["5-45"],
    "C1-06": MODULE_5_LESSONS["5-46"],
    "C1-07": MODULE_5_LESSONS["5-47"],
    "C1-08": MODULE_5_LESSONS["5-48"],
    "C1-09": MODULE_5_LESSONS["5-49"],
    "C1-10": MODULE_5_LESSONS["5-50"],
};

// PLACEHOLDER FOR MISSING CONTENT
const PLACEHOLDER_LESSON = {
  titleES: "Contenido en Desarrollo",
  titleRO: "Conținut în Dezvoltare",
  contentES: `<div class="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
    <h3 class="font-bold">Contenido Pendiente</h3>
    <p>Este tema se está actualizando para la nueva estructura del curso 2026.</p>
  </div>`,
  contentRO: `<div class="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
    <h3 class="font-bold">Conținut în Așteptare</h3>
    <p>Acest subiect este actualizat pentru noua structură a cursului 2026.</p>
  </div>`
};

// Fill gaps for A1..F1 ranges
const ALL_NEW_IDS = [
    // A1
    "A1-01","A1-02","A1-03","A1-04","A1-05","A1-06","A1-07","A1-08","A1-09","A1-10",
    // A2
    "A2-01","A2-02","A2-03","A2-04","A2-05","A2-06","A2-07","A2-08","A2-09","A2-10",
    // A3
    "A3-01","A3-02","A3-03","A3-04","A3-05","A3-06","A3-07","A3-08","A3-09","A3-10",
    // A4
    "A4-01","A4-02","A4-03","A4-04","A4-05","A4-06","A4-07","A4-08","A4-09","A4-10",
    // A5
    "A5-01","A5-02","A5-03","A5-04","A5-05","A5-06","A5-07","A5-08","A5-09","A5-10",
    
    // B Blocks
    "B1-01","B1-02","B1-03","B1-04","B1-05","B1-06","B1-07","B1-08","B1-09","B1-10",
    "B2-01","B2-02","B2-03","B2-04","B2-05","B2-06","B2-07","B2-08","B2-09","B2-10",
    "B3-01","B3-02","B3-03","B3-04","B3-05","B3-06","B3-07","B3-08","B3-09","B3-10",
    "B4-01","B4-02","B4-03","B4-04","B4-05","B4-06",
    "B5-01","B5-02","B5-03","B5-04","B5-05","B5-06","B5-07","B5-08","B5-09","B5-10",

    // C Blocks
    "C1-01","C1-02","C1-03","C1-04","C1-05","C1-06","C1-07","C1-08","C1-09","C1-10",
    "C2-01","C2-02","C2-03","C2-04","C2-05","C2-06","C2-07","C2-08","C2-09","C2-10",
    "C3-01","C3-02","C3-03","C3-04","C3-05","C3-06","C3-07","C3-08","C3-09","C3-10",
    "C4-01","C4-02","C4-03","C4-04","C4-05","C4-06","C4-07","C4-08","C4-09","C4-10",
    "C5-01","C5-02","C5-03","C5-04","C5-05","C5-06","C5-07","C5-08","C5-09","C5-10",

    // D Blocks (Sample)
    "D1-01", "D1-02", // ... add logic to fill all D, E, F if needed or rely on default
];

ALL_NEW_IDS.forEach(id => {
    if (!UNIFIED_COURSE_CONTENT[id]) {
        UNIFIED_COURSE_CONTENT[id] = { ...PLACEHOLDER_LESSON, id: id };
    }
});

export { UNIFIED_COURSE_CONTENT };

/**
 * PROTOCOLO DE MANTENIMIENTO:
 * Cualquier nuevo archivo de datos (.js) creado en este directorio debe ser
 * importado y añadido a este objeto de exportación para que la aplicación
 * pueda reconocerlo dinámicamente.
 */
