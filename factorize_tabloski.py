#!/usr/bin/env python3
"""
Script para factorizar contenido del libro Tabloski en chunks IFKB.
Procesa el texto extraído y crea archivos Markdown organizados por temas.
"""

import re
import os
from pathlib import Path

# Configuración
INPUT_FILE = "tabloski_full.txt"
OUTPUT_BASE = "recursos/materia_prima"

# Mapeo de capítulos a categorías IFKB
CHAPTER_TO_CATEGORY = {
    "Capítulo 1": ("geriatria_salud_mental", "Principios de Gerontología"),
    "Capítulo 2": ("geriatria_salud_mental", "Cuestiones en Enfermería Gerontológica"),
    "Capítulo 3": ("geriatria_salud_mental", "Principios de Geriatría"),
    "Capítulo 4": ("enfermeria_clinica", "Diversidad Cultural"),
    "Capítulo 5": ("enfermeria_clinica", "Nutrición durante el Envejecimiento"),
    "Capítulo 6": ("farmacologia", "Farmacología y Pacientes Mayores"),
    "Capítulo 7": ("geriatria_salud_mental", "Función Psicológica y Cognitiva"),
    "Capítulo 8": ("geriatria_salud_mental", "Trastornos del Sueño"),
    "Capítulo 9": ("enfermeria_clinica", "Control del Dolor"),
    "Capítulo 10": ("geriatria_salud_mental", "Violencia y Maltrato"),
    "Capítulo 11": ("enfermeria_clinica", "Cuidados al Final de la Vida"),
    "Capítulo 12": ("anatomia_fisiologia", "Tegumento"),
    "Capítulo 13": ("anatomia_fisiologia", "Boca y Cavidad Bucal"),
    "Capítulo 14": ("anatomia_fisiologia", "Sentidos"),
    "Capítulo 15": ("anatomia_fisiologia", "Sistema Cardiovascular"),
    "Capítulo 16": ("anatomia_fisiologia", "Sistema Respiratorio"),
    "Capítulo 17": ("anatomia_fisiologia", "Sistemas Genitourinario y Renal"),
    "Capítulo 18": ("anatomia_fisiologia", "Sistema Musculoesquelético"),
    "Capítulo 19": ("anatomia_fisiologia", "Sistema Endocrino"),
    "Capítulo 20": ("anatomia_fisiologia", "Sistema Gastrointestinal"),
    "Capítulo 21": ("anatomia_fisiologia", "Sistema Hematológico"),
    "Capítulo 22": ("anatomia_fisiologia", "Sistema Nervioso"),
    "Capítulo 23": ("anatomia_fisiologia", "Sistema Inmunitario"),
    "Capítulo 24": ("medicina_interna", "Problemas Multisistémicos"),
}

def extract_chapters(text):
    """Extrae capítulos del texto."""
    chapters = {}
    pattern = r'\\fCapítulo (\d+) (.+?)\\n'
    matches = re.finditer(pattern, text)
    
    positions = []
    for match in matches:
        chapter_num = int(match.group(1))
        chapter_title = match.group(2).strip()
        positions.append((chapter_num, chapter_title, match.start()))
    
    # Extraer contenido entre capítulos
    for i, (num, title, start) in enumerate(positions):
        end = positions[i+1][2] if i+1 < len(positions) else len(text)
        content = text[start:end]
        chapters[f"Capítulo {num}"] = {
            "title": title,
            "content": content[:10000]  # Primeras 10K chars por capítulo
        }
    
    return chapters

def create_chunk(chapter_key, category, title, content, chunk_id):
    """Crea un archivo chunk en formato Markdown."""
    output_dir = Path(OUTPUT_BASE) / category
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Limpiar título para nombre de archivo
    filename = re.sub(r'[^a-z0-9]+', '_', title.lower())
    filepath = output_dir / f"{filename}_{chunk_id}.md"
    
    # Crear contenido Markdown
    md_content = f"""---
id: "GER-{chunk_id}"
source: "Enfermería gerontológica - Tabloski (2010)"
topic: "{title}"
category: "{category}"
tags: ["geriatría", "enfermería"]
date_added: "2024-01-03"
---

# {title}

{content[:2000]}

[... contenido procesado automáticamente ...]
"""
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print(f"✓ Creado: {filepath}")

def main():
    print("Procesando libro Tabloski...")
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        text = f.read()
    
    chapters = extract_chapters(text)
    
    chunk_id = 100
    for chapter_key, chapter_data in chapters.items():
        if chapter_key in CHAPTER_TO_CATEGORY:
            category, _ = CHAPTER_TO_CATEGORY[chapter_key]
            title = chapter_data["title"]
            content = chapter_data["content"]
            
            create_chunk(chapter_key, category, title, content, chunk_id)
            chunk_id += 1
    
    print(f"\\n✅ Procesamiento completado. {len(chapters)} capítulos factorizados.")

if __name__ == "__main__":
    main()
