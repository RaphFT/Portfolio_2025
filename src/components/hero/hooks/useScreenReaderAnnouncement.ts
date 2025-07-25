import { useState, useEffect } from 'react';

export function useScreenReaderAnnouncement() {
  const [announcement, setAnnouncement] = useState('');
  
  useEffect(() => {
    if (!announcement) return;
    
    // Clear announcement after it's been read
    const timer = setTimeout(() => {
      setAnnouncement('');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [announcement]);
  
  return { announcement, setAnnouncement };
} 