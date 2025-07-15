/**
 * Helper para generar rutas correctas en GitHub Pages
 * @param {string} path - Ruta de la imagen (ej: "/images/logo.png")
 * @returns {string} - Ruta completa con basePath
 */
export function getImagePath(path) {
  const basePath = process.env.NODE_ENV === "production" ? "/el-tomillo" : "";
  return `${basePath}${path}`;
}

/**
 * Helper para generar rutas de páginas
 * @param {string} path - Ruta de la página (ej: "/servicios")
 * @returns {string} - Ruta completa con basePath
 */
export function getPagePath(path) {
  const basePath = process.env.NODE_ENV === "production" ? "/el-tomillo" : "";
  return `${basePath}${path}`;
}
