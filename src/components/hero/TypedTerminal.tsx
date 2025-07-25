import { motion } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import { useTerminalLogic } from './hooks';
import { useFocusManagement, useAccessibilityAnnouncements } from './hooks';
import { TerminalHeader } from './TerminalHeader';
import { TerminalLine } from './TerminalLine';
import { TerminalInput } from './TerminalInput';
import { TerminalCursor } from './TerminalCursor';

// Lazy load the matrix animation component
const MatrixAnimation = lazy(() => import('./MatrixAnimation').then(module => ({ default: module.MatrixAnimation })));

const TypedTerminal = () => {
  const {
    // State
    history,
    input,
    bootComplete,
    isTyping,
    typingText,
    typingIndex,
    showMatrixAnimation,
    announcement,
    
    // Refs
    terminalRef,
    inputRef,
    uniqueId,
    
    // Handlers
    handleKeyDown,
    handleInputChange,
    handleMatrixComplete,
    
    // Debounced value
    debouncedInput
  } = useTerminalLogic();

  // Focus management for accessibility
  const { containerRef: focusContainerRef } = useFocusManagement({
    autoFocus: true,
    trapFocus: false,
    onFocusChange: (isFocused) => {
      if (isFocused) {
        accessibilityAnnouncements.announcePolite('Terminal focused. Use Tab to navigate, Enter to execute commands.');
      }
    }
  });

  // Advanced accessibility announcements
  const accessibilityAnnouncements = useAccessibilityAnnouncements();

  // Maintain focus on the input when terminal is clicked
  useEffect(() => {
    const handleTerminalClick = () => {
      if (inputRef.current && !showMatrixAnimation) {
        inputRef.current.focus();
      }
    };

    const terminalElement = focusContainerRef.current;
    if (terminalElement) {
      terminalElement.addEventListener('click', handleTerminalClick);
      return () => {
        terminalElement.removeEventListener('click', handleTerminalClick);
      };
    }
  }, [focusContainerRef, inputRef, showMatrixAnimation]);
  
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden w-full font-mono text-xs text-black bg-white rounded-lg border border-gray-200 shadow-xl md:text-sm focus:outline-none focus:ring-0"
      role="region"
      aria-label="Interactive terminal with command history and input"
      aria-describedby="terminal-instructions"
      style={{ willChange: 'transform, opacity' }}
      ref={focusContainerRef}
    >
      {/* Terminal header */}
      <TerminalHeader />
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="terminal-focus overflow-y-auto relative p-3 h-48 text-xs bg-white sm:h-56 md:h-64 md:p-4 md:text-sm"
        tabIndex={-1}
        role="log"
        aria-live="polite"
        aria-label="Terminal output and command history"
        aria-describedby="terminal-output"
      >
        {!showMatrixAnimation ? (
          <>
            {history.map((line, index) => (
              <TerminalLine key={index} content={line} />
            ))}
            
            {isTyping && (
              <div className="mb-1" aria-hidden="true">
                {typingText.substring(0, typingIndex)}
              </div>
            )}
            
            {bootComplete && !isTyping && (
              <div className="flex items-center" aria-hidden="true">
                <span className="mr-2" aria-label="Command prompt">&gt;</span>
                <span>{debouncedInput}</span>
                <TerminalCursor />
              </div>
            )}
          </>
        ) : (
          <Suspense fallback={
            <div 
              className="flex justify-center items-center w-full h-full bg-black text-green-500"
              aria-label="Loading Matrix animation"
            >
              Loading Matrix...
            </div>
          }>
            <MatrixAnimation onComplete={handleMatrixComplete} />
          </Suspense>
        )}
      </div>
      
      {/* Hidden input field to capture keyboard events */}
      <TerminalInput
        id={uniqueId}
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={showMatrixAnimation}
      />
      
      {/* Screen reader only announcement */}
      <div
        className="sr-only"
        aria-live="assertive"
        role="status"
        aria-atomic="true"
      >
        {announcement}
      </div>

      {/* Hidden instructions for screen readers */}
      <div id="terminal-instructions" className="sr-only">
        Interactive terminal. Type commands and press Enter to execute. Available commands: help, about, skills, projects, contact, clear.
        Use Tab to navigate and Escape to exit focus.
      </div>

      {/* Hidden output description */}
      <div id="terminal-output" className="sr-only">
        Terminal output area showing command history and responses.
      </div>

      {/* Advanced accessibility announcements */}
      {accessibilityAnnouncements.currentAnnouncement && (
        <div
          className="sr-only"
          aria-live={accessibilityAnnouncements.currentAnnouncement.priority}
          role="status"
          aria-atomic="true"
        >
          {accessibilityAnnouncements.currentAnnouncement.message}
        </div>
      )}
    </motion.div>
  );
};

export { TypedTerminal };
export default TypedTerminal; 