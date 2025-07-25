import { useState, useEffect, useRef, useCallback } from 'react';

type AnnouncementPriority = 'polite' | 'assertive' | 'off';

type Announcement = {
  id: string;
  message: string;
  priority: AnnouncementPriority;
  timestamp: number;
};

export const useAccessibilityAnnouncements = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const queueRef = useRef<Announcement[]>([]);

  // Generate unique ID for announcements
  const generateId = useCallback(() => {
    return `announcement-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }, []);

  // Process announcement queue
  const processQueue = useCallback(() => {
    if (queueRef.current.length === 0) return;

    const nextAnnouncement = queueRef.current.shift();
    if (nextAnnouncement) {
      setCurrentAnnouncement(nextAnnouncement);
      
      // Clear announcement after a delay
      timeoutRef.current = window.setTimeout(() => {
        setCurrentAnnouncement(null);
        // Process next announcement if available
        setTimeout(processQueue, 100);
      }, 2000); // 2 seconds delay
    }
  }, []);

  // Add announcement to queue
  const announce = useCallback((message: string, priority: AnnouncementPriority = 'polite') => {
    const announcement: Announcement = {
      id: generateId(),
      message,
      priority,
      timestamp: Date.now()
    };

    // Add to queue
    queueRef.current.push(announcement);
    
    // If no current announcement, start processing
    if (!currentAnnouncement) {
      processQueue();
    }
  }, [generateId, currentAnnouncement, processQueue]);

  // Clear all announcements
  const clearAnnouncements = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentAnnouncement(null);
    queueRef.current = [];
  }, []);

  // Announce with different priorities
  const announcePolite = useCallback((message: string) => {
    announce(message, 'polite');
  }, [announce]);

  const announceAssertive = useCallback((message: string) => {
    announce(message, 'assertive');
  }, [announce]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    currentAnnouncement,
    announce,
    announcePolite,
    announceAssertive,
    clearAnnouncements,
    hasAnnouncements: queueRef.current.length > 0 || !!currentAnnouncement
  };
}; 