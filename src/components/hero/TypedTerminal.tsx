import { useState, useEffect, useRef, KeyboardEvent, useCallback, memo } from 'react';
import { motion } from 'framer-motion';

// Initial boot sequence
const bootSequence = [
  { text: '> Initialisation du système...', delay: 400 },
  { text: '> Chargement des données du portfolio...', delay: 600 },
  { text: '> Prêt ! Tapez "help" pour voir les commandes disponibles', delay: 500 }
];

// Command definitions with responses
const commands: Record<string, { response: string[], isEasterEgg?: boolean, action?: string }> = {
  'help': {
    response: [
      'Commandes disponibles :',
      '  help     - Afficher ce message d\'aide',
      '  about    - En savoir plus sur moi',
      '  skills   - Voir mes compétences techniques',
      '  projects - Voir mes projets récents',
      '  contact  - Obtenir mes informations de contact',
      '  clear    - Effacer le terminal',
      '',
      'Essayez de trouver les commandes cachées ! 🥚'
    ]
  },
  'about': {
    response: [
      'Raphael Fremont',
      '------------------------',
      'Développeur créatif basé en France passionné par la création',
      'd\'expériences numériques innovantes avec un code propre et efficace.',
      'Toujours en train d\'apprendre de nouvelles technologies et techniques',
      'pour repousser les limites du possible sur le web.'
    ]
  },
  'skills': {
    response: [
      'Langages & Outils :',
      '------------------------',
      '{ JavaScript, TypeScript, React, Vite.js, HTML5, CSS3 }',
      '{ Tailwind, Framer Motion, Node.js, Express, MongoDB }',
      '{ Git, Figma, Design Responsive }',
      '',
      'Toujours en train d\'explorer de nouvelles technologies et d\'étendre ma boîte à outils !'
    ]
  },
  'projects': {
    response: [
      'Projets Récents :',
      '------------------------',
      '1. PC Gaming Guide - React, Javascript, HTML, CSS',
      '2. Kasa - React, Javascript, CSS',
      '3. Nina Carducci - SEO, Javascript',
      '4. Sophie Bluel - Javascript, HTML, CSS',
      '5. Booki - HTML, CSS',
      '',
      'Faites défiler vers le bas pour voir plus de détails sur ces projets !'
    ]
  },
  'contact': {
    response: [
      'Informations de Contact :',
      '------------------------',
      'Email : hello@raphaelfremont.com',
      'LinkedIn : linkedin.com/in/raphaelfremont',
      'GitHub : github.com/raphFT',
      '',
      'Toujours ouvert à discuter de nouvelles opportunités !'
    ]
  },
  'clear': {
    response: []
  },
  // Easter eggs
  'coffee': {
    response: ['Recharge d\'énergie développeur... ☕', 'Prêt pour plus de code !'],
    isEasterEgg: true
  },
  'sudo': {
    response: ['Bien essayé ! Mais vous n\'avez pas besoin de privilèges administrateur ici.'],
    isEasterEgg: true
  },
  'hack': {
    response: [
      'INITIATION DE LA SÉQUENCE DE PIRATAGE...',
      'Contournement des pare-feu...',
      'Accès au mainframe...',
      'Téléchargement des fichiers secrets...',
      '█████████████████████ 100% TERMINÉ',
      'Je plaisante ! Je suis un développeur, pas un hacker. 😉'
    ],
    isEasterEgg: true
  },
  'ls -la': {
    response: [
      'total 42',
      'drwxr-xr-x  1 raphael staff  264 Jan 1 2023 .hobbies',
      'drwxr-xr-x  1 raphael staff  198 Feb 14 2023 .favorite-books',
      '-rw-r--r--  1 raphael staff  354 Mar 21 2023 .coffee-preference',
      'drwxr-xr-x  1 raphael staff  756 Apr 1 2023 .hidden-talents',
      '-rw-r--r--  1 raphael staff  621 May 5 2023 .travel-wishlist'
    ],
    isEasterEgg: true
  },
  'cat /dev/random': {
    response: [
      '@#$%^&*()!~{}[]|:;<>,.?/c0d3r67$#@!^&*()',
      '1010100101010101010101010101010101010101',
      'ERR0R : TROP DE HASARD ! ABANDON...'
    ],
    isEasterEgg: true
  },
  'matrix': {
    response: ['Réveille-toi, Neo...', 'La Matrice t\'a...', 'Suis le lapin blanc.', 'Toc, toc, Neo.'],
    isEasterEgg: true,
    action: 'MATRIX_ANIMATION'
  },
  'camille': {
    response: [
      'My heart is yours, forever and always. ❤️'
    ],
    isEasterEgg: true
  },
  'fps': {
    response: [
      'Because we all have a dormant chicken inside us, ready to rush B with rollerblades.'
    ],
    isEasterEgg: true
  }
};

// Debounce hook for input handling
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Accessible announcement for screen readers
function useScreenReaderAnnouncement() {
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

// Matrix animation component
const MatrixAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [characters, setCharacters] = useState<{ id: number; char: string; x: number; y: number; speed: number; opacity: number }[]>([]);
  const frameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Matrix character set
  const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-*/=[]{}()<>|&!?#$%^.,:;~';
  const getRandomChar = () => matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));

  // Initialize matrix animation
  useEffect(() => {
    // Ensure the container is available
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const charWidth = 12; // Approximate width of a monospace character
    const columns = Math.floor(width / charWidth);
    
    // Create initial characters
    const initialChars = [];
    for (let i = 0; i < columns * 2; i++) {
      initialChars.push({
        id: i,
        char: getRandomChar(),
        x: Math.random() * width,
        y: Math.random() * height - height, // Start above the container
        speed: 1 + Math.random() * 3,
        opacity: 0.1 + Math.random() * 0.9
      });
    }
    setCharacters(initialChars);
    
    // Start animation timer
    const duration = 5000; // 5 seconds
    const endTime = Date.now() + duration;
    
    const animate = () => {
      if (Date.now() >= endTime) {
        cancelAnimationFrame(frameRef.current);
        onComplete();
        return;
      }
      
      setCharacters(prevChars => {
        return prevChars.map(char => {
          // Update position
          const y = char.y + char.speed;
          
          // If character goes off screen, reset from top with new properties
          if (y > height) {
            return {
              ...char,
              char: getRandomChar(),
              y: Math.random() * -100,
              speed: 1 + Math.random() * 3,
              opacity: 0.1 + Math.random() * 0.9
            };
          }
          
          // Occasionally change character
          const newChar = Math.random() > 0.95 ? getRandomChar() : char.char;
          
          return {
            ...char,
            y,
            char: newChar
          };
        });
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [onComplete]);
  
  return (
    <div 
      ref={containerRef}
      className="overflow-hidden absolute inset-0 font-mono text-green-500 bg-black"
      aria-label="Matrix animation easter egg"
      role="img"
    >
      {characters.map(char => (
        <div
          key={char.id}
          style={{
            position: 'absolute',
            left: `${char.x}px`,
            top: `${char.y}px`,
            opacity: char.opacity,
            textShadow: '0 0 5px rgba(0, 255, 0, 0.8)',
            transform: 'scale(1.2)',
            color: Math.random() > 0.97 ? '#ffffff' : 'inherit' // Occasionally white for highlight
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
};

// Memoized Terminal Line component to prevent unnecessary re-renders
const TerminalLine = memo(({ content }: { content: string }) => (
  <div className="mb-1">{content}</div>
));

TerminalLine.displayName = 'TerminalLine';

const TypedTerminal = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [bootComplete, setBootComplete] = useState(false);
  const [currentBootIndex, setCurrentBootIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
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

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, typingText]);

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
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(debouncedInput);
      setInput('');
    }
  }, [debouncedInput, processCommand]);

  // Handle input change with debouncing
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden w-full font-mono text-xs text-black bg-white rounded-lg border border-gray-200 shadow-xl md:text-sm"
      role="region"
      aria-label="Interactive terminal"
    >
      {/* Terminal header */}
      <div 
        className="flex items-center px-3 py-2 bg-gray-100 md:px-4 md:py-2"
        role="banner"
        aria-label="Terminal window controls"
      >
        <div className="flex space-x-1.5 md:space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full md:w-3 md:h-3" aria-hidden="true" />
          <div className="w-2 h-2 bg-gray-400 rounded-full md:w-3 md:h-3" aria-hidden="true" />
          <div className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3" aria-hidden="true" />
        </div>
        <div className="mx-auto text-xs text-gray-500">terminal</div>
      </div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="overflow-y-auto relative p-3 h-48 text-xs bg-white sm:h-56 md:h-64 md:p-4 md:text-sm"
        tabIndex={0}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        onClick={handleClick}
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
                <span className="mr-2">&gt;</span>
                <span>{debouncedInput}</span>
                <span 
                  className={`w-1.5 md:w-2 h-3 md:h-4 ml-0.5 bg-black inline-block ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            )}
          </>
        ) : (
          <MatrixAnimation onComplete={handleMatrixComplete} />
        )}
      </div>
      
      {/* Hidden input field to capture keyboard events */}
      <label htmlFor={uniqueId} className="sr-only">Terminal input</label>
      <input
        id={uniqueId}
        ref={inputRef}
        type="text"
        className="absolute top-0 left-0 w-0 h-0 opacity-0"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        autoFocus
        aria-label="Terminal command input"
        role="textbox"
        aria-multiline="false"
        disabled={showMatrixAnimation}
      />
      
      {/* Screen reader only announcement */}
      <div
        className="sr-only"
        aria-live="assertive"
        role="status"
      >
        {announcement}
      </div>
    </motion.div>
  );
};

export { TypedTerminal };
export default TypedTerminal; 