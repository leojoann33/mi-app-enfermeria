// src/CalculatorsManager.jsx
import React from "react";
import { DoseCalculatorSuite } from "./DoseCalculatorSuite";

export const CalculatorsManager = ({ lang, toggleLang }) => {
  // La nueva suite de calculadoras reemplaza completamente el manager anterior
  return <DoseCalculatorSuite lang={lang} />;
};
