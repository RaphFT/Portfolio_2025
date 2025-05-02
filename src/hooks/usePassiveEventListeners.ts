import { useEffect } from 'react';

type EventOptions = {
  passive?: boolean;
  capture?: boolean;
};

export const usePassiveEventListeners = (
  element: HTMLElement | Window | null,
  eventNames: string[],
  handler: EventListenerOrEventListenerObject,
  options: EventOptions = { passive: true }
) => {
  useEffect(() => {
    if (!element) return;

    // Add event listeners
    eventNames.forEach(eventName => {
      element.addEventListener(eventName, handler, options);
    });

    // Cleanup
    return () => {
      eventNames.forEach(eventName => {
        element.removeEventListener(eventName, handler, options);
      });
    };
  }, [element, eventNames, handler, options]);
}; 