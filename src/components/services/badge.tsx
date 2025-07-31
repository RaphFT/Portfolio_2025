/**
 * @fileoverview Composant Badge pour les étiquettes
 * @description Composant badge réutilisable avec différentes variantes
 * et styles personnalisables
 * @author Raphael Fremont
 * @version 1.0.0
 */

import * as React from "react"
import { badgeVariants } from './badgeConstants'

/**
 * Interface des props du composant Badge
 * @interface BadgeProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * @property {keyof typeof badgeVariants} [variant='default'] - Variante du badge
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

/**
 * Composant Badge
 * @description Affiche un badge avec :
 * - Différentes variantes de style
 * - Design responsive
 * - Accessibilité optimisée
 * - Transitions fluides
 * - Focus visible
 * - Classes CSS personnalisables
 * 
 * @param {BadgeProps} props - Props du composant
 * @param {string} [props.className] - Classes CSS supplémentaires
 * @param {keyof typeof badgeVariants} [props.variant='default'] - Variante du badge
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Autres props HTML
 * 
 * @returns {JSX.Element} Badge stylisé
 * 
 * @example
 * <Badge variant="secondary" className="custom-class">
 *   Solutions
 * </Badge>
 */
function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div 
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${badgeVariants[variant]} ${className || ''}`} 
      {...props} 
    />
  )
}

export { Badge } 