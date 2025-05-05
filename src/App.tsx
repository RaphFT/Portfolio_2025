import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { About2 } from './components/About2';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollProgressMobile } from './components/ScrollProgressMobile';
import { Analytics } from '@vercel/analytics/react';
// Removed react-helmet import to fix UNSAFE_componentWillMount warning
// For proper SEO, this should be replaced with react-helmet-async

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" role="banner">
        <Navigation />
      </header>

      <main className="relative bg-white min-h-screen" role="main">
        <section id="home" aria-label="Hero section">
          <Hero />
        </section>

        <section id="about" aria-label="About section">
          <About />
        </section>

        <section id="about2" aria-label="Additional information">
          <About2 />
        </section>

        <section id="projects" aria-label="Projects showcase">
          <Projects />
        </section>

        <section id="services" aria-label="Services offered">
          <Services />
        </section>
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>

      {/* Desktop Scroll Progress */}
      <ScrollProgress />
      
      {/* Mobile Scroll Progress - Visible on all pages */}
      <ScrollProgressMobile />

      <Analytics />
    </>
  );
}

export default App;
