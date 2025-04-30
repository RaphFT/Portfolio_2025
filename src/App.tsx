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
    <main className="relative bg-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <About2 />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
