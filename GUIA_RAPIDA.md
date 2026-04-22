# 🚀 Guía Rápida

## Comandos Más Usados

### 1️⃣ Agregar Nuevo Contenido H5P

**Con Python:**
```bash
python add_h5p_content.py nombre-pagina nombre-carpeta "Título Menu"
```

**Con Bash:**
```bash
./add_h5p_content.sh nombre-pagina nombre-carpeta "Título Menu"
```

**Ejemplo:**
```bash
python add_h5p_content.py biologia biologia-201 "Biología"
```

---

### 2️⃣ Trabajar con Git

**Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/h5p-template.git
cd h5p-template
```

**Hacer cambios:**
```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

**Actualizar desde el repo original:**
```bash
git remote add upstream https://github.com/usuario-original/h5p-template.git
git fetch upstream
git merge upstream/main
git push origin main
```

---

### 3️⃣ Servir Localmente

**Python 3:**
```bash
python -m http.server 8000
# Luego ve a: http://localhost:8000
```

**Node.js (si tienes npm):**
```bash
npx http-server
```

---

### 4️⃣ Estructura de Carpetas H5P

Tu contenido H5P debe tener esta estructura:

```
h5p-content/
└── tu-contenido/
    ├── h5p.json           ← OBLIGATORIO
    ├── content/
    │   └── content.json
    ├── H5P.Image-1.1/
    ├── H5P.Question-1.5/
    └── [otras librerías]/
```

---

## Cambios Rápidos en CSS

Edita `css/styles.css` para:

```css
/* Cambiar color principal */
--primary-color: #1a1a2e;

/* Cambiar fuente */
body {
    font-family: 'Tu Fuente', sans-serif;
}

/* Cambiar espaciado */
.container {
    max-width: 1200px;
    padding: 0 2rem;
}
```

---

## Cambios Rápidos en HTML

```html
<!-- Cambiar título de la página -->
<title>Tu Nuevo Título - ezagutu CIFPZornotzaLHII</title>

<!-- Cambiar imagen principal -->
<img src="tu-imagen.jpg" alt="Tu Descripción" class="hero-image">

<!-- Cambiar link del footer -->
<a href="https://tu-web.eus/" target="_blank">Tu Web</a>
```

---

## Atajos de Menú

Todas las páginas deben tener:

```html
<nav class="nav">
    <ul>
        <li><a href="../index.html">Portada</a></li>
        <li><a href="historia.html">Historia</a></li>
        <li><a href="game-map.html">Game Map</a></li>
        <!-- Agrega aquí nuevos enlaces -->
        <li><a href="biologia.html">Biología</a></li>
    </ul>
</nav>
```

---

## Cargar H5P en una Página

```html
<div id="h5p-container"></div>

<script src="https://cdn.jsdelivr.net/npm/h5p-standalone@latest/dist/main.bundle.js"></script>
<script src="../js/h5p-loader.js"></script>
<script>
    loadH5P('nombre-de-carpeta');
</script>
```

---

## Registro de Contenidos (Avanzado)

```javascript
// Agregar un nuevo contenido al registro
H5PContentRegistry.register('id-unico', 'nombre-carpeta', 'Título');

// Obtener información
const content = H5PContentRegistry.get('id-unico');
console.log(content);

// Listar todos
console.log(H5PContentRegistry.list());
```

---

## Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| H5P no aparece | Verifica que existe `h5p-content/nombre-carpeta/h5p.json` |
| Imágenes no cargan | Usa `../` en páginas dentro de `pages/` |
| GitHub Pages no actualiza | Espera 2-5 min, vacía caché (Ctrl+Shift+Del) |
| Script no funciona | Abre F12 → Console, busca errores |
| Menú no se ve bien | Revisa que todos los `<a>` tengan href correcto |

---

## URLs Útiles

- 📚 [H5P Standalone](https://github.com/tunapanda/h5p-standalone)
- 📖 [GitHub Pages](https://docs.github.com/en/pages)
- 🔗 [Git Documentation](https://git-scm.com/docs)
- 🎓 [H5P.org](https://h5p.org/)

---

## Línea de Tiempo Típica

1. **5 min** - Clonar y probar localmente
2. **10 min** - Personalizar colores y texto
3. **15 min** - Agregar primer contenido H5P
4. **5 min** - Configurar GitHub Pages
5. **2 min** - Compartir URL pública

**Total: ~40 minutos para una web funcional**

---

_Para más info: consulta [README.md](README.md)_
