import { useRef, useCallback, useEffect } from 'react';

type UseFocusManagementOptions = {
  autoFocus?: boolean;
  trapFocus?: boolean;
  onFocusChange?: (isFocused: boolean) => void;
};

export const useFocusManagement = (options: UseFocusManagementOptions = {}) => {
  const { autoFocus = true, trapFocus = false, onFocusChange } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const currentFocusIndexRef = useRef(0);

  // Get all focusable elements within the container
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    
    return Array.from(
      containerRef.current.querySelectorAll(focusableSelectors.join(', '))
    ) as HTMLElement[];
  }, []);

  // Update focusable elements when component mounts or updates
  useEffect(() => {
    focusableElementsRef.current = getFocusableElements();
  }, [getFocusableElements]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!trapFocus || focusableElementsRef.current.length === 0) return;

    const { key } = event;
    const currentIndex = currentFocusIndexRef.current;
    const elements = focusableElementsRef.current;

    switch (key) {
      case 'Tab':
        event.preventDefault();
        if (event.shiftKey) {
          // Shift + Tab: move backwards
          currentFocusIndexRef.current = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
        } else {
          // Tab: move forwards
          currentFocusIndexRef.current = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
        }
        elements[currentFocusIndexRef.current]?.focus();
        break;
      
      case 'Escape':
        // Exit focus trap
        if (onFocusChange) {
          onFocusChange(false);
        }
        break;
    }
  }, [trapFocus, onFocusChange]);

  // Set up keyboard event listeners
  useEffect(() => {
    if (!trapFocus) return;

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [trapFocus, handleKeyDown]);

  // Auto-focus first element
  useEffect(() => {
    if (!autoFocus || focusableElementsRef.current.length === 0) return;

    const firstElement = focusableElementsRef.current[0];
    if (firstElement) {
      firstElement.focus();
      currentFocusIndexRef.current = 0;
      if (onFocusChange) {
        onFocusChange(true);
      }
    }
  }, [autoFocus, onFocusChange]);

  // Focus management functions
  const focusFirst = useCallback(() => {
    if (focusableElementsRef.current.length > 0) {
      focusableElementsRef.current[0].focus();
      currentFocusIndexRef.current = 0;
    }
  }, []);

  const focusLast = useCallback(() => {
    const elements = focusableElementsRef.current;
    if (elements.length > 0) {
      elements[elements.length - 1].focus();
      currentFocusIndexRef.current = elements.length - 1;
    }
  }, []);

  const focusNext = useCallback(() => {
    const elements = focusableElementsRef.current;
    if (elements.length === 0) return;

    const nextIndex = (currentFocusIndexRef.current + 1) % elements.length;
    elements[nextIndex].focus();
    currentFocusIndexRef.current = nextIndex;
  }, []);

  const focusPrevious = useCallback(() => {
    const elements = focusableElementsRef.current;
    if (elements.length === 0) return;

    const prevIndex = currentFocusIndexRef.current > 0 ? currentFocusIndexRef.current - 1 : elements.length - 1;
    elements[prevIndex].focus();
    currentFocusIndexRef.current = prevIndex;
  }, []);

  return {
    containerRef,
    focusFirst,
    focusLast,
    focusNext,
    focusPrevious,
    getFocusableElements
  };
}; 