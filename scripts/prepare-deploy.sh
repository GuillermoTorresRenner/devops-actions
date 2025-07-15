#!/bin/bash

# Script para preparar el build para GitHub Pages
echo "Preparando build para GitHub Pages..."

# Verificar que el directorio out existe
if [ ! -d "out" ]; then
    echo "Error: El directorio 'out' no existe. Ejecuta 'npm run export' primero."
    exit 1
fi

# Crear .nojekyll si no existe
if [ ! -f "out/.nojekyll" ]; then
    touch out/.nojekyll
    echo "Archivo .nojekyll creado"
fi

# Verificar que las imágenes existen
if [ ! -d "out/images" ]; then
    echo "Error: Las imágenes no se copiaron correctamente"
    exit 1
fi

echo "✅ Build preparado correctamente para GitHub Pages"
echo "📁 Archivos en out/:"
ls -la out/

echo "🖼️ Imágenes disponibles:"
ls -la out/images/ | head -10
