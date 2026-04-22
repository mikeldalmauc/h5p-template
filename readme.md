# ezagutu CIFPZornotzaLHII

Plataforma web para gestionar y mostrar contenidos educativos H5P del CIFP Zornotza LH II.

## 📋 Estructura del Proyecto

```
h5p-template/
├── index.html                 # Página principal
├── css/
│   └── styles.css            # Estilos de la web
├── js/
│   └── h5p-loader.js         # Cargador dinámico de contenido H5P
├── pages/
│   ├── historia.html         # Página con Timeline
│   └── game-map.html         # Página con Game Map
├── h5p-content/
│   ├── game-map/             # Contenido Game Map
│   ├── timeline-108/         # Contenido Timeline
│   └── [otros-contenidos]/   # Aquí van los nuevos contenidos
├── header-logo.png           # Logo del header
├── zornotza.jpg              # Imagen principal
└── README.md                 # Este archivo
```

## 🚀 Cómo Agregar Nuevos Puntos de Menú

### 1. **Crear la página HTML**

Crea un nuevo archivo en la carpeta `pages/` (por ejemplo, `pages/nuevo-contenido.html`):

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Contenido - ezagutu CIFPZornotzaLHII</title>
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
                    <li><a href="nuevo-contenido.html" class="active">Nuevo Contenido</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container">
        <h1 class="page-title">Nuevo Contenido</h1>
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
        // Cargar tu nuevo contenido H5P (cambiar 'nombre-carpeta')
        loadH5P('nombre-carpeta');
    </script>
</body>
</html>
```

### 2. **Actualizar el menú en todas las páginas**

Modifica el menú en `index.html`, `pages/historia.html` y `pages/game-map.html` para incluir el nuevo enlace:

```html
<nav class="nav">
    <ul>
        <li><a href="../index.html">Portada</a></li>
        <li><a href="historia.html">Historia</a></li>
        <li><a href="game-map.html">Game Map</a></li>
        <li><a href="nuevo-contenido.html">Nuevo Contenido</a></li>  <!-- Añadir esto -->
    </ul>
</nav>
```

### 3. **Registrar el contenido en el registro (opcional)**

En `js/h5p-loader.js`, agrega tu nuevo contenido al registro:

```javascript
H5PContentRegistry.register('nuevo-id', 'nombre-carpeta', 'Título del Contenido');
```

---

## 📦 Cómo Agregar Contenido H5P

### Paso 1: Descargar el contenido H5P

1. Descarga tu archivo `.h5p` desde la plataforma donde lo creaste
2. Obtén una carpeta con el contenido descomprimido

### Paso 2: Agregar a la carpeta `h5p-content/`

```
h5p-content/
├── game-map/
├── timeline-108/
└── [nombre-tu-contenido]/     ← Copia aquí tu contenido
    ├── h5p.json
    ├── content/
    │   └── content.json
    ├── H5P.Image-1.1/
    ├── H5P.DragNDrop-1.1/
    └── [otras librerías]/
```

### Paso 3: Usar en una página

Llama a la función `loadH5P()` en tu página HTML pasando el nombre de la carpeta:

```javascript
<script>
    loadH5P('nombre-tu-contenido');
</script>
```

### Automatización con JavaScript (Función de Carga Dinámica)

Si añades un `data-h5p` atributo al contenedor, puedes cargar automáticamente:

```html
<div id="h5p-container" data-h5p="nombre-carpeta"></div>

<script>
    // Script automático en el archivo
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('h5p-container');
        const folder = container.dataset.h5p;
        if (folder) {
            loadH5P(folder);
        }
    });
</script>
```

---

## 🔧 Modificar Estilos

Edita `css/styles.css` para cambiar:

- **Colores**: Variables CSS en `:root`
- **Tipografía**: Fuentes en `body`
- **Espaciado**: Padding y margin
- **Responsive**: Breakpoints en media queries

### Colores principales (`:root`):
```css
--primary-color: #1a1a2e;      /* Azul oscuro */
--secondary-color: #16213e;    /* Azul más oscuro */
--accent-color: #0f3460;       /* Azul de acento */
--text-color: #333;            /* Texto */
--light-bg: #f5f5f5;           /* Fondo claro */
```

---

## 🌐 Descargar, Forkearlo y Crear GitHub Pages

### 1. **Descargar el repositorio**

```bash
# Opción 1: Clonar el repositorio
git clone https://github.com/tu-usuario/h5p-template.git
cd h5p-template

# Opción 2: Descargar como ZIP
# - Ve a github.com/tu-usuario/h5p-template
# - Haz clic en "Code" → "Download ZIP"
```

### 2. **Forkearlo a tu cuenta**

1. Ve a `https://github.com/tu-usuario/h5p-template`
2. Haz clic en el botón **"Fork"** (arriba a la derecha)
3. Esto crea una copia en tu cuenta: `github.com/tu-usuario/h5p-template`

### 3. **Clonar tu fork**

```bash
git clone https://github.com/tu-usuario/h5p-template.git
cd h5p-template
```

### 4. **Hacer cambios y subirlos**

```bash
# Crear una rama para tus cambios
git checkout -b mejoras

# Hacer cambios locales...
# Luego, subirlos:

git add .
git commit -m "Agregar nuevos contenidos H5P"
git push origin mejoras
```

### 5. **Crear GitHub Pages**

#### Opción A: Usar rama `main` (recomendado)

1. Ve a **Settings** del repositorio
2. Busca **"Pages"** en el menú lateral
3. Bajo "Source", selecciona **"Deploy from a branch"**
4. Selecciona rama: **`main`**
5. Selecciona carpeta: **`/ (root)`**
6. Haz clic en **"Save"**

Tu web estará disponible en: `https://tu-usuario.github.io/h5p-template`

#### Opción B: Usar rama `gh-pages`

```bash
# Crear rama gh-pages
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages"
git push origin gh-pages
```

Luego sigue los mismos pasos de "Settings" → "Pages" pero selecciona `gh-pages`.

### 6. **Actualizar tu copia local desde el repositorio original**

Si el repositorio original tiene cambios:

```bash
# Añadir el repositorio original como "upstream"
git remote add upstream https://github.com/usuario-original/h5p-template.git

# Descargar cambios
git fetch upstream

# Fusionar cambios en tu rama main
git checkout main
git merge upstream/main

# Subir cambios a tu fork
git push origin main
```

---

## 📱 Verificar que todo funciona

1. **Localmente**: Abre `index.html` en tu navegador
2. **En GitHub Pages**: Espera 1-2 minutos y visita `https://tu-usuario.github.io/h5p-template`

---

## ⚙️ Estructura de la Función `loadH5P()`

La función en `js/h5p-loader.js` maneja:

- ✅ Detección automática de la ruta (funciona en root y en subcarpetas)
- ✅ Carga de H5P Standalone desde CDN
- ✅ Manejo de errores
- ✅ Compatible con múltiples contenedores

```javascript
loadH5P(contentFolder, containerId = 'h5p-container')
```

**Parámetros:**
- `contentFolder` (obligatorio): Nombre de la carpeta en `h5p-content/`
- `containerId` (opcional): ID del div contenedor (por defecto: `h5p-container`)

---

## 🔒 Registro de Contenidos (`H5PContentRegistry`)

Usa el registro para gestionar contenidos programáticamente:

```javascript
// Registrar un contenido
H5PContentRegistry.register('id-unico', 'carpeta', 'Título');

// Obtener un contenido
const content = H5PContentRegistry.get('id-unico');

// Listar todos
console.log(H5PContentRegistry.list());
```

---

## ✏️ Actualizar Información de la Web

### Cambiar el título:
Edita en `index.html`:
```html
<title>Tu Título - CIFPZornotzaLHII</title>
```

### Cambiar el logo:
Reemplaza `header-logo.png` con tu imagen (mantén el mismo nombre o actualiza las referencias)

### Cambiar la imagen principal:
Reemplaza `zornotza.jpg` con tu imagen

### Cambiar el pie de página (footer):
Edita en cualquier página HTML:
```html
<footer class="footer">
    <div class="footer-content">
        <p>&copy; 2024 Tu Institución. Todos los derechos reservados.</p>
        <a href="https://tu-web.eus/" target="_blank">Visita nuestro sitio web</a>
    </div>
</footer>
```

---

## 🐛 Solucionar Problemas

### El contenido H5P no aparece
- Verifica que la carpeta existe en `h5p-content/nombre-carpeta`
- Comprueba que contiene `h5p.json`
- Abre la consola del navegador (F12) para ver errores

### Las imágenes no cargan
- En páginas dentro de `pages/`, usa `../` para volver a la raíz
- En el root, usa `./` o directamente el nombre del archivo

### GitHub Pages no actualiza
- Espera 2-5 minutos
- Vacía la caché del navegador (Ctrl+Shift+Delete)
- Verifica que los cambios están en la rama correcta (`main` o `gh-pages`)

---

## 📚 Recursos útiles

- [H5P Standalone](https://github.com/tunapanda/h5p-standalone)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Guide](https://git-scm.com/docs)

---

## 👥 Licencia

Este proyecto es de libre uso para fines educativos.

**Autor:** CIFP Zornotza LH II  
**Última actualización:** 2024
