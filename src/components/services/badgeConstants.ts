/**
 * @fileoverview Constantes des variantes de badges
 * @description Définit les différentes variantes de style pour les badges
 * avec leurs classes CSS correspondantes
 * @author Raphael Fremont
 * @version 1.0.0
 */

/**
 * Variantes de style pour les badges
 * @description Objet contenant toutes les variantes de style disponibles
 * pour le composant Badge avec leurs classes CSS
 * 
 * @type {Object}
 * @property {string} default - Badge par défaut (noir avec texte blanc)
 * @property {string} secondary - Badge secondaire (noir avec texte blanc)
 * @property {string} destructive - Badge destructif (rouge avec texte blanc)
 * @property {string} outline - Badge avec contour (texte noir avec bordure grise)
 * 
 * @example
 * {
 *   default: "border-transparent bg-black text-white hover:bg-black/80",
 *   secondary: "border-transparent bg-black text-white hover:bg-black/80",
 *   destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
 *   outline: "text-black border border-gray-300"
 * }
 */
export const badgeVariants = {
  default: "border-transparent bg-black text-white hover:bg-black/80",
  secondary: "border-transparent bg-black text-white hover:bg-black/80", // Badge noir avec texte blanc
  destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
  outline: "text-black border border-gray-300",
} 