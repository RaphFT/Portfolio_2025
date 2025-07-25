import { useWebVitals } from '../hero/hooks';

type WebVitalsData = {
  LCP?: number;
  FID?: number;
  CLS?: number;
  FCP?: number;
  TTFB?: number;
};

type AboutPerformanceProps = {
  onVitalsUpdate?: (vitals: WebVitalsData) => void;
};

export const AboutPerformance = ({ onVitalsUpdate }: AboutPerformanceProps) => {
  // Monitor Web Vitals for About section
  useWebVitals((vitals) => {
    // Log Web Vitals specific to About section
    console.log('About Section Web Vitals:', vitals);
    
    // You can send this data to your analytics service
    // Example: analytics.track('about_section_vitals', vitals);
    
    onVitalsUpdate?.(vitals);
  });

  // This component doesn't render anything visible
  return null;
}; 