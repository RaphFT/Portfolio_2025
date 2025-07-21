import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import {
  SwatchIcon,
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export const Services = () => {
  return (
    <section 
      id="services" 
      className="w-full py-20 lg:py-40 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <motion.div 
            className="flex gap-4 flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <Badge variant="secondary">Services</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 
                id="services-heading"
                className="text-3xl md:text-5xl tracking-tighter max-w-xl font-clash text-left"
                style={{
                  fontFamily: '"Clash Display", sans-serif',
                  fontWeight: 600
                }}
              >
                Ce que je fais ?
              </h2>
              <p 
                className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left font-clash"
                style={{
                  fontFamily: '"Clash Display", sans-serif',
                  fontWeight: 400
                }}
              >
                Des solutions digitales complètes pour faire grandir votre présence en ligne et atteindre vos objectifs business.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-100 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <SwatchIcon className="w-8 h-8 stroke-1 text-gray-600" />
              <div className="flex flex-col">
                <h3 
                  className="text-xl tracking-tight font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 500
                  }}
                >
                  IDENTITÉ DE MARQUE
                </h3>
                <p 
                  className="text-gray-600 max-w-xs text-base font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Donnez vie à votre marque avec une identité visuelle unique et mémorable. Du logo aux supports marketing, je crée une cohérence visuelle qui reflète vos valeurs.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 rounded-md aspect-square p-6 flex justify-between flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MagnifyingGlassIcon className="w-8 h-8 stroke-1 text-gray-600" />
              <div className="flex flex-col">
                <h3 
                  className="text-xl tracking-tight font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 500
                  }}
                >
                  OPTIMISATION SEO
                </h3>
                <p 
                  className="text-gray-600 max-w-xs text-base font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Maximisez votre visibilité en ligne avec une stratégie SEO efficace. Optimisation technique, contenu de qualité et mots-clés ciblés.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 rounded-md aspect-square p-6 flex justify-between flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ComputerDesktopIcon className="w-8 h-8 stroke-1 text-gray-600" />
              <div className="flex flex-col">
                <h3 
                  className="text-xl tracking-tight font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 500
                  }}
                >
                  CONCEPTION & DÉVELOPPEMENT WEB
                </h3>
                <p 
                  className="text-gray-600 max-w-xs text-base font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Sites web modernes, rapides et optimisés qui convertissent. Expertise en React, Next.js et TypeScript pour créer des expériences exceptionnelles.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <WrenchScrewdriverIcon className="w-8 h-8 stroke-1 text-gray-600" />
              <div className="flex flex-col">
                <h3 
                  className="text-xl tracking-tight font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 500
                  }}
                >
                  PROJETS SUR MESURE
                </h3>
                <p 
                  className="text-gray-600 max-w-xs text-base font-clash"
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Solutions rapides et efficaces pour vos besoins spécifiques. Landing pages, optimisations ou nouvelles fonctionnalités, je m'adapte à votre budget.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 