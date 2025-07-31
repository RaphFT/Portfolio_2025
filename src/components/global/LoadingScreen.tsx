/**
 * @fileoverview Écran de chargement global
 * @description Composant d'écran de chargement avec animation
 * de points et transition fluide
 * @author Raphael Fremont
 * @version 1.0.0
 */

import { motion } from 'framer-motion';

/**
 * Composant écran de chargement global
 * @description Affiche un écran de chargement avec :
 * - Animation de points en saut avec délai
 * - Transition d'entrée et de sortie fluide
 * - Position fixe en plein écran
 * - Z-index élevé pour être au-dessus de tout
 * - Arrière-plan blanc
 * - Texte de chargement avec animation
 * - Design centré et responsive
 * 
 * @returns {JSX.Element} Écran de chargement animé
 * 
 * @example
 * <LoadingScreen />
 */
export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex fixed inset-0 z-50 justify-center items-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Animation de points en saut */}
        <div className="flex mb-4 space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-4 h-4 bg-black"
            />
          ))}
        </div>
        
        {/* Texte de chargement */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium text-primary"
        >
          Chargement...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}; 