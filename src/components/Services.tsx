import { motion } from 'framer-motion';

const services = [
  {
    title: 'UX/UI Design',
    description: "Raphael clearly identifies the marketing needs of the brand and finds solutions required for the brand, presenting designs that meet the brand's goals.",
    delay: 0,
  },
  {
    title: 'Web Development',
    description: "A designer's clear understanding of the boundaries between areas that can and cannot be developed can lead to a more efficient design process.",
    delay: 0.2,
  },
  {
    title: 'Interaction',
    description: "Rayraylab accurately understands the designer's intent and is capable of developing design drafts into websites with minimal revisions.",
    delay: 0.4,
  },
];

export const Services = () => {
  return (
    <section className="h-screen flex items-center">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-lg text-center mb-16"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 