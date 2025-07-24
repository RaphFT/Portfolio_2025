import { motion } from 'framer-motion';

type HeroTitleProps = {
  variant?: 'mobile' | 'desktop';
};

export const HeroTitle = ({ variant = 'mobile' }: HeroTitleProps) => {
  const titleStyle = {
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 600
  };

  if (variant === 'mobile') {
    return (
      <div className="px-4 mx-auto mt-2 w-full text-center">
        <h1 
          className="text-xl font-bold leading-tight sm:text-3xl font-clash"
          aria-label="Developer profile headline"
          tabIndex={0}
          style={{ 
            ...titleStyle,
            willChange: 'transform',
            opacity: 1
          }}
        >
          <span className="block">FULLSTACK DEV</span>
          <span className="block mt-1">CONSTANT LEARNER</span>
          <span className="block mt-1 whitespace-nowrap">INDEPENDENT FREELANCER</span>
        </h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden px-4 mx-auto mt-4 max-w-4xl text-center md:block md:mt-20 lg:mt-24 xl:mt-28"
    >
      <h1 
        className="text-3xl font-bold leading-tight lg:text-5xl font-clash"
        aria-label="Developer profile headline"
        tabIndex={0}
        style={titleStyle}
      >
        FULLSTACK DEV
        <br />
        CONSTANT LEARNER
        <br />
        INDEPENDENT FREELANCER
      </h1>
    </motion.div>
  );
}; 