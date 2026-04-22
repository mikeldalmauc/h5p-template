# Configuración de GitHub Pages

Esta carpeta está configurada para servirse automáticamente como una página web a través de GitHub Pages.

## Configuración actual:

- **Fuente**: rama `main`
- **Carpeta**: `/ (root)`
- **URL**: `https://tu-usuario.github.io/h5p-template/`

## Para cambiar la configuración:

1. Ve a **Settings** → **Pages**
2. Bajo "Source", selecciona:
   - **Branch**: `main` (o `gh-pages`)
   - **Folder**: `/ (root)`
3. Haz clic en **Save**

## Detalles técnicos:

- Los archivos se sirven desde el repositorio directamente
- No requiere compilación ni build
- Los cambios se publican en 1-2 minutos después de hacer push
- La URL siempre es: `https://[usuario].github.io/[repo-name]/`

Para más información: https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
