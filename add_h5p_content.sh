#!/bin/bash
# Script para agregar automáticamente nuevos contenidos H5P a la web
# Uso: ./add_h5p_content.sh "nombre-pagina" "nombre-carpeta" "Título del Menú"

if [ "$#" -lt 3 ]; then
    echo "Uso: ./add_h5p_content.sh <nombre-pagina> <nombre-carpeta> <titulo-menu>"
    echo ""
    echo "Ejemplo:"
    echo '  ./add_h5p_content.sh quimica quimica-101 "Química"'
    exit 1
fi

PAGE_NAME=$1
FOLDER_NAME=$2
MENU_TITLE=$3

# Agregar .html si no tiene extensión
if [[ ! $PAGE_NAME == *.html ]]; then
    PAGE_NAME="${PAGE_NAME}.html"
fi

PAGE_PATH="./pages/$PAGE_NAME"

# Crear el archivo HTML
cat > "$PAGE_PATH" << EOF
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$MENU_TITLE - ezagutu CIFPZornotzaLHII</title>
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
                    <li><a href="$PAGE_NAME" class="active">$MENU_TITLE</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container">
        <h1 class="page-title">$MENU_TITLE</h1>
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
        loadH5P('$FOLDER_NAME');
    </script>
</body>
</html>
EOF

echo "✓ Página creada: pages/$PAGE_NAME"
echo "✓ Contenido H5P esperado en: h5p-content/$FOLDER_NAME/"
echo ""
echo "Próximos pasos:"
echo "1. Asegúrate de que existe: h5p-content/$FOLDER_NAME/h5p.json"
echo "2. Actualiza el menú en las otras páginas:"
echo "   <li><a href=\"$PAGE_NAME\">$MENU_TITLE</a></li>"
