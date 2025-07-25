import { useState, useEffect, useRef, useCallback } from 'react';
import { bootSequence, commands } from '../terminalCommands';
import { useDebounce } from './useDebounce';
import { useScreenReaderAnnouncement } from './useScreenReaderAnnouncement';

export const useTerminalLogic = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [bootComplete, setBootComplete] = useState(false);
  const [currentBootIndex, setCurrentBootIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingQueue, setTypingQueue] = useState<string[]>([]);
  const [showMatrixAnimation, setShowMatrixAnimation] = useState(false);
  
  const { announcement, setAnnouncement } = useScreenReaderAnnouncement();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Generate a unique ID for this terminal instance
  const uniqueId = useRef(`terminal-input-${Math.random().toString(36).substring(2, 9)}`).current;
  
  // Debounce input to reduce re-renders during typing
  const debouncedInput = useDebounce(input, 50);

  // Handle boot sequence
  useEffect(() => {
    if (currentBootIndex >= bootSequence.length) {
      setBootComplete(true);
      setAnnouncement('Terminal prêt. Tapez help pour voir les commandes disponibles.');
      return;
    }
    
    const timer = setTimeout(() => {
      const newLine = bootSequence[currentBootIndex].text;
      setHistory(prev => [...prev, newLine]);
      setAnnouncement(newLine.replace('>', ''));
      setCurrentBootIndex(prev => prev + 1);
    }, bootSequence[currentBootIndex].delay);
    
    return () => clearTimeout(timer);
  }, [currentBootIndex, setAnnouncement]);

  // Manage typing animation
  useEffect(() => {
    if (typingQueue.length === 0 || isTyping) return;
    
    const nextLine = typingQueue[0];
    setTypingQueue(prev => prev.slice(1));
    setTypingText(nextLine);
    setTypingIndex(0);
    setIsTyping(true);
  }, [typingQueue, isTyping]);
  
  useEffect(() => {
    if (!isTyping) return;
    
    if (typingIndex < typingText.length) {
      const timer = setTimeout(() => {
        setTypingIndex(prev => prev + 1);
      }, 15);
      return () => clearTimeout(timer);
    } else {
      setHistory(prev => [...prev, typingText]);
      setAnnouncement(typingText);
      setIsTyping(false);
      setTypingText('');
      setTypingIndex(0);
    }
  }, [isTyping, typingIndex, typingText, setAnnouncement]);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, typingText]);

  // Handle Matrix animation completion
  const handleMatrixComplete = useCallback(() => {
    setShowMatrixAnimation(false);
    setAnnouncement('Animation Matrix terminée.');
  }, [setAnnouncement]);

  // Memoized command processor to prevent re-creation
  const processCommand = useCallback((cmd: string) => {
    if (!cmd.trim()) return;
    
    const commandText = `> ${cmd}`;
    setHistory(prev => [...prev, commandText]);
    setAnnouncement(`Vous avez tapé : ${cmd}`);
    
    // Special case for clear command
    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      setAnnouncement('Terminal effacé');
      return;
    }
    
    // Look for command match
    const commandEntry = Object.entries(commands).find(([key]) => 
      key.toLowerCase() === cmd.toLowerCase()
    );
    
    if (commandEntry) {
      const [, { response, action }] = commandEntry;
      setTypingQueue(response);
      
      // Handle special actions
      if (action === 'MATRIX_ANIMATION') {
        setTimeout(() => {
          setShowMatrixAnimation(true);
          setAnnouncement('L\'animation Matrix est en cours d\'exécution.');
        }, response.length * 200);
      }
      
      // Announce first line of response for screen readers
      if (response.length > 0) {
        setAnnouncement(`Commande ${cmd} exécutée. ${response[0]}`);
      }
    } else {
      const errorMessage = `Commande non trouvée : ${cmd}. Tapez "help" pour voir les commandes disponibles.`;
      setTypingQueue([errorMessage]);
      setAnnouncement(errorMessage);
    }
  }, [setAnnouncement]);

  // Handle key presses with debouncing through useCallback
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(debouncedInput);
      setInput('');
    }
  }, [debouncedInput, processCommand]);

  // Handle input change with debouncing
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  // Focus input when terminal is clicked - memoized to prevent re-creation
  const handleClick = useCallback(() => {
    if (inputRef.current && !showMatrixAnimation) {
      inputRef.current.focus();
    }
  }, [showMatrixAnimation]);
  
  useEffect(() => {
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleClick);
      return () => terminal.removeEventListener('click', handleClick);
    }
  }, [handleClick]);

  return {
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
    handleClick,
    handleMatrixComplete,
    
    // Debounced value
    debouncedInput
  };
}; 