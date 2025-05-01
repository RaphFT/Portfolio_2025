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

  // JSON-LD structured data is temporarily disabled
  // To properly implement without warnings:
  // 1. Install react-helmet-async: npm install react-helmet-async
  // 2. Import: import { Helmet, HelmetProvider } from 'react-helmet-async';
  // 3. Wrap your app with HelmetProvider
  // 4. Use Helmet from react-helmet-async instead

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
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
    </>
  );
}

export default App;
