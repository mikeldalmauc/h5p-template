#!/usr/bin/env python3
"""
Script para agregar automáticamente nuevos contenidos H5P a la web
Uso: python3 add_h5p_content.py "nombre-pagina" "nombre-carpeta" "Título del Menú"
"""

import os
import sys
from pathlib import Path

def create_page(page_name, folder_name, menu_title):
    """
    Crea automáticamente una nueva página H5P
    
    Args:
        page_name: Nombre del archivo HTML (ej: quimica.html)
        folder_name: Nombre de la carpeta en h5p-content/ (ej: quimica-101)
        menu_title: Título para mostrar en el menú (ej: Química)
    """
    
    # Validar inputs
    if not page_name.endswith('.html'):
        page_name = page_name + '.html'
    
    page_path = Path(__file__).parent / 'pages' / page_name
    
    # Crear el contenido HTML
    html_content = f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{menu_title} - ezagutu CIFPZornotzaLHII</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <img src="../header-logo.png" alt="Logo Zornotza">
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="../index.html">Portada</a></li>
                    <li><a href="historia.html">Historia</a></li>
                    <li><a href="game-map.html">Game Map</a></li>
                    <li><a href="{page_name}" class="active">{menu_title}</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container">
        <h1 class="page-title">{menu_title}</h1>
        <div id="h5p-container"></div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 CIFP Zornotza LH II. Todos los derechos reservados.</p>
            <a href="https://fpzornotzalh.eus/" target="_blank">Visita nuestro sitio web</a>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/h5p-standalone@latest/dist/main.bundle.js"></script>
    <script src="../js/h5p-loader.js"></script>
    <script>
        loadH5P('{folder_name}');
    </script>
</body>
</html>
'''
    
    # Escribir el archivo
    try:
        page_path.write_text(html_content, encoding='utf-8')
        print(f"✓ Página creada: pages/{page_name}")
        print(f"✓ Contenido H5P esperado en: h5p-content/{folder_name}/")
        print(f"\nProximos pasos:")
        print(f"1. Asegúrate de que existe: h5p-content/{folder_name}/h5p.json")
        print(f"2. Actualiza el menú en las otras páginas:")
        print(f'   <li><a href="{page_name}">{menu_title}</a></li>')
        return True
    except Exception as e:
        print(f"✗ Error al crear la página: {e}")
        return False

if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Uso: python3 add_h5p_content.py <nombre-pagina> <nombre-carpeta> <titulo-menu>")
        print("\nEjemplo:")
        print('  python3 add_h5p_content.py quimica quimica-101 "Química"')
        sys.exit(1)
    
    page_name = sys.argv[1]
    folder_name = sys.argv[2]
    menu_title = sys.argv[3]
    
    create_page(page_name, folder_name, menu_title)
