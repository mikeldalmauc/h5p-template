/**
 * Función para cargar contenido H5P dinámicamente
 * @param {string} contentFolder - Nombre de la carpeta del contenido H5P en h5p-content/
 * @param {string} containerId - ID del contenedor (por defecto 'h5p-container')
 */
function loadH5P(contentFolder, containerId = 'h5p-container') {
    document.addEventListener('DOMContentLoaded', function () {
        // Calcular la ruta base correctamente
        const pathname = window.location.pathname;
        let h5pJsonPath;
        
        // Encontrar la carpeta raíz del proyecto
        // En GitHub Pages: pathname = /h5p-template/pages/game-map.html
        // En local: pathname = /pages/game-map.html o C:/repos/h5p-template/pages/game-map.html
        
        const pathParts = pathname.split('/').filter(p => p);
        
        // Buscar dónde está 'pages' o 'h5p-template'
        let basePath = '/';
        
        if (pathParts.includes('h5p-template')) {
            // GitHub Pages: /h5p-template/pages/game-map.html
            const index = pathParts.indexOf('h5p-template');
            basePath = '/' + pathParts.slice(0, index + 1).join('/');
        } else if (pathParts.includes('pages')) {
            // Local: /pages/game-map.html
            // Asumimos que la raíz es una carpeta arriba de 'pages'
            basePath = '/';
        }
        
        h5pJsonPath = basePath + '/h5p-content/' + contentFolder;
        
        const options = {
            h5pJsonPath: h5pJsonPath,
            frameJs: 'https://cdn.jsdelivr.net/npm/h5p-standalone@latest/dist/frame.bundle.js',
            frameCss: 'https://cdn.jsdelivr.net/npm/h5p-standalone@latest/dist/styles/h5p.css',
        };

        const el = document.getElementById(containerId);

        // H5PStandalone es globalmente disponible cuando main.bundle.js se incluye
        if (typeof H5PStandalone !== 'undefined') {
            new H5PStandalone.H5P(el, options);
        } else {
            console.error('H5PStandalone no está disponible. Verifica que main.bundle.js esté cargado.');
        }
    });
}


/**
 * Objeto de configuración para gestionar múltiples contenidos H5P
 * Permite registrar contenidos dinámicamente y es útil para crear puntos de menú
 */
const H5PContentRegistry = {
    contents: {},
    
    /**
     * Registrar un nuevo contenido H5P
     * @param {string} id - Identificador único
     * @param {string} folder - Carpeta en h5p-content/
     * @param {string} title - Título para mostrar
     */
    register: function(id, folder, title) {
        this.contents[id] = {
            folder: folder,
            title: title
        };
    },
    
    /**
     * Obtener un contenido registrado
     * @param {string} id - Identificador del contenido
     * @returns {Object|null} Objeto del contenido o null si no existe
     */
    get: function(id) {
        return this.contents[id] || null;
    },
    
    /**
     * Listar todos los contenidos registrados
     * @returns {Array} Array de objetos con {id, folder, title}
     */
    list: function() {
        return Object.entries(this.contents).map(([id, data]) => ({
            id: id,
            ...data
        }));
    }
};

// Registrar los contenidos existentes
H5PContentRegistry.register('timeline', 'timeline-108', 'Timeline');
H5PContentRegistry.register('game-map', 'game-map-107', 'Game Map');
