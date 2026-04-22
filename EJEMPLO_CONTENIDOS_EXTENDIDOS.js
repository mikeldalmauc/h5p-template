/**
 * EJEMPLO EXTENDIDO: Cómo registrar múltiples contenidos H5P
 * 
 * Este archivo muestra cómo expandir la configuración de contenidos
 * Puedes agregar esto a js/h5p-loader.js para registrar más contenidos
 */

// ============================================
// REGISTRAR CONTENIDOS INICIALES
// ============================================

H5PContentRegistry.register('timeline', 'timeline-108', 'Timeline');
H5PContentRegistry.register('game-map', 'game-map', 'Game Map');

// ============================================
// EJEMPLO: Agregar más contenidos
// ============================================
// Descomenta y modifica según tus necesidades:

// H5PContentRegistry.register('quimica', 'quimica-101', 'Química');
// H5PContentRegistry.register('biologia', 'biologia-201', 'Biología');
// H5PContentRegistry.register('historia', 'historia-301', 'Historia');
// H5PContentRegistry.register('geografia', 'geografia-302', 'Geografía');
// H5PContentRegistry.register('matematicas', 'matematicas-101', 'Matemáticas');
// H5PContentRegistry.register('lengua', 'lengua-102', 'Lengua');
// H5PContentRegistry.register('ingles', 'ingles-103', 'Inglés');
// H5PContentRegistry.register('economia', 'economia-401', 'Economía');

// ============================================
// FUNCIÓN HELPER: Crear menú dinámico
// ============================================

/**
 * Genera dinámicamente los enlaces del menú desde el registro
 * Uso: updateMenuFromRegistry() en el script de la página
 */
function updateMenuFromRegistry() {
    const allContents = H5PContentRegistry.list();
    const nav = document.querySelector('.nav ul');
    
    if (!nav) return; // Si no hay nav, salir
    
    // Limpiar menú excepto primeros 4 elementos (Portada, Historia, Game Map)
    const items = nav.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index >= 3) item.remove();
    });
    
    // Agregar nuevo elemento para cada contenido registrado
    // (Excepto los primeros que ya están)
    allContents.forEach((content, index) => {
        if (index >= 2) { // Skip first 2 (Timeline, Game Map)
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `${content.id}.html`;
            a.textContent = content.title;
            li.appendChild(a);
            nav.appendChild(li);
        }
    });
}

// ============================================
// FUNCIÓN HELPER: Obtener todos los contenidos
// ============================================

function getAllContents() {
    return H5PContentRegistry.list().map(content => ({
        id: content.id,
        title: content.title,
        folder: content.folder,
        page: `${content.id}.html`
    }));
}

// ============================================
// ESTRUCTURA ESPERADA EN h5p-content/
// ============================================
/*
h5p-content/
├── game-map/
│   ├── h5p.json
│   ├── content/
│   └── [librerías]/
│
├── timeline-108/
│   ├── h5p.json
│   ├── content/
│   └── [librerías]/
│
├── quimica-101/          ← Agregar aquí
│   ├── h5p.json
│   ├── content/
│   └── [librerías]/
│
└── [otros-contenidos]/
    └── ...
*/

// ============================================
// PASOS PARA AGREGAR UN NUEVO CONTENIDO
// ============================================

/*
1. DESCOMPRIMIR EL H5P
   - Descarga tu archivo .h5p
   - Renómbralo a .zip (cambia extensión)
   - Extrae el contenido
   - Obtén una carpeta con h5p.json, content/, y librerías

2. COPIAR A h5p-content/
   - Copia la carpeta a h5p-content/
   - Asegúrate que el nombre sea descriptivo (ej: quimica-101)

3. REGISTRAR EN ESTE ARCHIVO (opcional)
   - Descomenta la línea correspondiente:
     H5PContentRegistry.register('quimica', 'quimica-101', 'Química');

4. CREAR PÁGINA HTML EN pages/
   - Copia pages/PLANTILLA-NUEVO-CONTENIDO.html
   - Renómbralo: quimica.html
   - Modifica el título y cambia la línea:
     loadH5P('quimica-101');

5. AGREGAR AL MENÚ
   - En index.html, historia.html y game-map.html
   - Agrega el enlace en la <nav>:
     <li><a href="pages/quimica.html">Química</a></li>

6. PRUEBA LOCALMENTE
   - Abre index.html en el navegador
   - Verifica que todo funciona
   - Haz push a GitHub
*/

// ============================================
// EJEMPLO DE CONSULTA DEL REGISTRO
// ============================================

console.log('=== Contenidos Registrados ===');
console.log(H5PContentRegistry.list());

// Obtener un contenido específico
const timeline = H5PContentRegistry.get('timeline');
console.log('Timeline:', timeline);

// Listar solo las carpetas
const folders = H5PContentRegistry.list().map(c => c.folder);
console.log('Carpetas H5P:', folders);
