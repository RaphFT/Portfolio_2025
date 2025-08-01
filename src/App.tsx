import { useEffect, useState } from 'react';
import { LoadingScreen } from './components/global/LoadingScreen';
import { Navigation } from './components/global/Navigation';
import { Hero, About, About2, Stack, Services, Parcours, Footer } from './components/sections';
import { ProjectsCircular } from './components/projects/ProjectsCircular';

import { ScrollProgress } from './components/global/ScrollProgress';
import { ScrollProgressMobile } from './components/global/ScrollProgressMobile';
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

      
      <header className="fixed top-0 right-0 left-0 z-50" role="banner">
        <Navigation />
      </header>

      <main className="relative bg-white" role="main">
        <Hero />
        <About />
        <About2 />
        <Stack />
        <ProjectsCircular />
        <Services />
        <Parcours />
      </main>

      <Footer />

      {/* Desktop Scroll Progress */}
      <ScrollProgress />
      
      {/* Mobile Scroll Progress - Visible on all pages */}
      <ScrollProgressMobile />

      <Analytics />
    </>
  );
}

export default App;
