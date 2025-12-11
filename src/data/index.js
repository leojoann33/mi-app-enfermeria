// src/data/index.js
import { MEDS_DB } from './meds';
import { CART_DB } from './cart';
import { PROCEDURES_DB } from './procedures';
import { FIRST_AID_DB } from './first_aid';
import { COURSE_DB } from './course';
import { UI_TEXT } from './ui';
import { ACRONYMS_DB } from './acronyms'; // NUEVA IMPORTACIÓN

// Importamos los módulos de contenido
import { MODULE1_CONTENT } from './course_content_m1'; 
import { MODULE2_CONTENT } from './course_content_m2';

// FUSIONAMOS EL CONTENIDO EN UN SOLO OBJETO PARA EL VISOR
export const COURSE_CONTENT = {
  ...MODULE1_CONTENT,
  ...MODULE2_CONTENT
};

export { 
  MEDS_DB, 
  CART_DB, 
  PROCEDURES_DB, 
  FIRST_AID_DB, 
  COURSE_DB,
  UI_TEXT,
  ACRONYMS_DB // NUEVA EXPORTACIÓN
};

export const PATHO_DB = [];
export const GUIDES_DB = [];
export const MODULES_DB = [];