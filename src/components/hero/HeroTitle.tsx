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
      <div 
        className="px-4 mx-auto mt-2 w-full text-center"
        role="banner"
        aria-labelledby="hero-title-mobile"
      >
        <h1 
          id="hero-title-mobile"
          className="text-xl font-bold leading-tight sm:text-3xl font-clash"
          aria-label="Developer profile headline - Fullstack Developer, Constant Learner, Independent Freelancer"
          tabIndex={0}
          style={{ 
            ...titleStyle,
            willChange: 'transform',
            opacity: 1
          }}
        >
          <span className="block" aria-label="Fullstack Developer">FULLSTACK DEV</span>
          <span className="block mt-1" aria-label="Constant Learner">CONSTANT LEARNER</span>
          <span className="block mt-1 whitespace-nowrap" aria-label="Independent Freelancer">INDEPENDENT FREELANCER</span>
        </h1>
        <p className="sr-only">
          Raphael Fremont is a fullstack developer who is constantly learning new technologies and works as an independent freelancer.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.8 }}
      className="hidden px-4 mx-auto mt-4 max-w-4xl text-center md:block md:mt-20 lg:mt-24 xl:mt-28"
      role="banner"
      aria-labelledby="hero-title-desktop"
      style={{ willChange: 'transform, opacity' }}
    >
      <h1 
        id="hero-title-desktop"
        className="text-3xl font-bold leading-tight lg:text-5xl font-clash"
        aria-label="Developer profile headline - Fullstack Developer, Constant Learner, Independent Freelancer"
        tabIndex={0}
        style={titleStyle}
      >
        <span aria-label="Fullstack Developer">FULLSTACK DEV</span>
        <br />
        <span aria-label="Constant Learner">CONSTANT LEARNER</span>
        <br />
        <span aria-label="Independent Freelancer">INDEPENDENT FREELANCER</span>
      </h1>
      <p className="sr-only">
        Raphael Fremont is a fullstack developer who is constantly learning new technologies and works as an independent freelancer.
        This section introduces the main professional identity and skills.
      </p>
    </motion.div>
  );
}; 