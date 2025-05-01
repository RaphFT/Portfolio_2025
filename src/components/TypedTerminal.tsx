import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';

// Initial boot sequence
const bootSequence = [
  { text: '> System initializing...', delay: 400 },
  { text: '> Loading portfolio data...', delay: 600 },
  { text: '> Ready! Type "help" for available commands', delay: 500 }
];

// Command definitions with responses
const commands: Record<string, { response: string[], isEasterEgg?: boolean }> = {
  'help': {
    response: [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - Learn more about me',
      '  skills   - View my technical skills',
      '  projects - See my recent projects',
      '  contact  - Get my contact information',
      '  clear    - Clear the terminal'
    ]
  },
  'about': {
    response: [
      'Raphael Fremont',
      '------------------------',
      'France-based creative developer passionate about crafting',
      'innovative digital experiences with clean, efficient code.',
      'Always learning new technologies and techniques to push',
      'the boundaries of what\'s possible on the web.'
    ]
  },
  'skills': {
    response: [
      'Languages & Tools:',
      '------------------------',
      '{ JavaScript, TypeScript, React, Vite.js, HTML5, CSS3 }',
      '{ Tailwind, Framer Motion, Node.js, Express, MongoDB }',
      '{ Git, Figma, Responsive Design }',
      '',
      'Always exploring new technologies and expanding my toolkit!'
    ]
  },
  'projects': {
    response: [
      'Recent Projects:',
      '------------------------',
      '1. PC Gaming Guide - React, Javascript, HTML, CSS',
      '2. Kasa - React, Javascript, CSS',
      '3. Nina Carducci - SE0, Javascript',
      '4. Sophie Bluel - Javascript, HTML, CSS',
      '5. Booki - HTML, CSS',
      '',
      'Scroll down to see more details about these projects!'
    ]
  },
  'contact': {
    response: [
      'Contact Information:',
      '------------------------',
      'Email: hello@raphaelfremont.com',
      'LinkedIn: linkedin.com/in/raphaelfremont',
      'GitHub: github.com/raphFT',
      '',
      'Always open to discussing new opportunities!'
    ]
  },
  'clear': {
    response: []
  },
  // Easter eggs
  'coffee': {
    response: ['Recharging developer energy... ☕', 'Ready for more coding!'],
    isEasterEgg: true
  },
  'sudo': {
    response: ['Nice try! But you don\'t need admin privileges here.'],
    isEasterEgg: true
  },
  'hack': {
    response: [
      'INITIATING HACK SEQUENCE...',
      'Bypassing firewalls...',
      'Accessing mainframe...',
      'Downloading secret files...',
      '█████████████████████ 100% COMPLETE',
      'Just kidding! I\'m a developer, not a hacker. 😉'
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
      'ERR0R: T00 MUCH RAND0MN3SS! ABORT1NG...'
    ],
    isEasterEgg: true
  }
};

export const TypedTerminal = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [bootComplete, setBootComplete] = useState(false);
  const [currentBootIndex, setCurrentBootIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingQueue, setTypingQueue] = useState<string[]>([]);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle boot sequence
  useEffect(() => {
    if (currentBootIndex >= bootSequence.length) {
      setBootComplete(true);
      return;
    }
    
    const timer = setTimeout(() => {
      setHistory(prev => [...prev, bootSequence[currentBootIndex].text]);
      setCurrentBootIndex(prev => prev + 1);
    }, bootSequence[currentBootIndex].delay);
    
    return () => clearTimeout(timer);
  }, [currentBootIndex]);

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
      setIsTyping(false);
      setTypingText('');
      setTypingIndex(0);
    }
  }, [isTyping, typingIndex, typingText]);

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

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleClick);
      return () => terminal.removeEventListener('click', handleClick);
    }
  }, []);

  const processCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    
    setHistory(prev => [...prev, `> ${cmd}`]);
    
    // Special case for clear command
    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }
    
    // Look for command match
    const commandEntry = Object.entries(commands).find(([key]) => 
      key.toLowerCase() === cmd.toLowerCase()
    );
    
    if (commandEntry) {
      const [, { response }] = commandEntry;
      setTypingQueue(response);
    } else {
      setTypingQueue([`Command not found: ${cmd}. Type "help" for available commands.`]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md overflow-hidden font-mono text-sm text-black bg-white border border-gray-200 rounded-lg shadow-xl"
    >
      {/* Terminal header */}
      <div className="flex items-center px-4 py-2 bg-gray-100">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <div className="w-3 h-3 bg-gray-500 rounded-full" />
        </div>
        <div className="mx-auto text-xs text-gray-500">terminal</div>
      </div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="h-64 p-4 overflow-y-auto bg-white"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
        
        {isTyping && (
          <div className="mb-1">
            {typingText.substring(0, typingIndex)}
          </div>
        )}
        
        {bootComplete && !isTyping && (
          <div className="flex items-center">
            <span className="mr-2">&gt;</span>
            <span>{input}</span>
            <span 
              className={`w-2 h-4 ml-0.5 bg-black inline-block ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        )}
      </div>
      
      {/* Hidden input field to capture keyboard events */}
      <input
        ref={inputRef}
        type="text"
        className="absolute top-0 left-0 w-0 h-0 opacity-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </motion.div>
  );
}; 