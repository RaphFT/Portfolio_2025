import { useEffect, useRef } from 'react';

type WebVitalsData = {
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  FCP?: number; // First Contentful Paint
  TTFB?: number; // Time to First Byte
};

type WebVitalsCallback = (data: WebVitalsData) => void;

export const useWebVitals = (onVitalsUpdate?: WebVitalsCallback) => {
  const vitalsRef = useRef<WebVitalsData>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    // Measure LCP (Largest Contentful Paint)
    const measureLCP = () => {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            vitalsRef.current.LCP = lastEntry.startTime;
            onVitalsUpdate?.({ ...vitalsRef.current });
            
            // Log LCP for debugging
            console.log('LCP:', lastEntry.startTime, 'ms');
          }
        });
        
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('Failed to measure LCP:', error);
      }
    };

    // Measure FID (First Input Delay)
    const measureFID = () => {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          
          entries.forEach((entry) => {
            const firstInputEntry = entry as PerformanceEventTiming;
            vitalsRef.current.FID = firstInputEntry.processingStart - firstInputEntry.startTime;
            onVitalsUpdate?.({ ...vitalsRef.current });
            
            // Log FID for debugging
            console.log('FID:', vitalsRef.current.FID, 'ms');
          });
        });
        
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('Failed to measure FID:', error);
      }
    };

    // Measure CLS (Cumulative Layout Shift)
    const measureCLS = () => {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          
          vitalsRef.current.CLS = clsValue;
          onVitalsUpdate?.({ ...vitalsRef.current });
          
          // Log CLS for debugging
          console.log('CLS:', clsValue);
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Failed to measure CLS:', error);
      }
    };

    // Measure FCP (First Contentful Paint)
    const measureFCP = () => {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          
          if (firstEntry) {
            vitalsRef.current.FCP = firstEntry.startTime;
            onVitalsUpdate?.({ ...vitalsRef.current });
            
            // Log FCP for debugging
            console.log('FCP:', firstEntry.startTime, 'ms');
          }
        });
        
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('Failed to measure FCP:', error);
      }
    };

    // Measure TTFB (Time to First Byte)
    const measureTTFB = () => {
      try {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigationEntry) {
          vitalsRef.current.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
          onVitalsUpdate?.({ ...vitalsRef.current });
          
          // Log TTFB for debugging
          console.log('TTFB:', vitalsRef.current.TTFB, 'ms');
        }
      } catch (error) {
        console.warn('Failed to measure TTFB:', error);
      }
    };

    // Start measuring all Web Vitals
    measureLCP();
    measureFID();
    measureCLS();
    measureFCP();
    measureTTFB();

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onVitalsUpdate]);

  return {
    vitals: vitalsRef.current,
    getVitals: () => vitalsRef.current
  };
}; 