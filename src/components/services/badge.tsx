import * as React from "react"
import { badgeVariants } from './badgeConstants'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div 
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${badgeVariants[variant]} ${className || ''}`} 
      {...props} 
    />
  )
}

export { Badge } 