import { useState } from 'react';

type AccessibilityTestPanelProps = {
  isVisible?: boolean;
};

export const AccessibilityTestPanel = ({ isVisible = false }: AccessibilityTestPanelProps) => {
  const [activeTests, setActiveTests] = useState<string[]>([]);

  if (!isVisible) return null;

  const runContrastTest = () => {
    setActiveTests(prev => [...prev, 'contrast']);
    // Simulate contrast test
    setTimeout(() => {
      setActiveTests(prev => prev.filter(test => test !== 'contrast'));
    }, 2000);
  };

  const runFocusTest = () => {
    setActiveTests(prev => [...prev, 'focus']);
    // Simulate focus test
    setTimeout(() => {
      setActiveTests(prev => prev.filter(test => test !== 'focus'));
    }, 2000);
  };

  const runScreenReaderTest = () => {
    setActiveTests(prev => [...prev, 'screen-reader']);
    // Simulate screen reader test
    setTimeout(() => {
      setActiveTests(prev => prev.filter(test => test !== 'screen-reader'));
    }, 2000);
  };

  return (
    <div 
      className="fixed top-4 right-4 z-50 p-4 bg-white border border-gray-300 rounded-lg shadow-lg"
      role="region"
      aria-label="Accessibility testing panel"
    >
      <h3 className="text-sm font-bold mb-2">Accessibility Tests</h3>
      
      <div className="space-y-2">
        <button
          onClick={runContrastTest}
          className="block w-full px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Run contrast ratio test"
        >
          Test Contrast
        </button>
        
        <button
          onClick={runFocusTest}
          className="block w-full px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Run focus management test"
        >
          Test Focus
        </button>
        
        <button
          onClick={runScreenReaderTest}
          className="block w-full px-3 py-1 text-xs bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Run screen reader compatibility test"
        >
          Test Screen Reader
        </button>
      </div>

      {activeTests.length > 0 && (
        <div className="mt-3 p-2 bg-yellow-100 border border-yellow-300 rounded text-xs">
          <p>Running tests: {activeTests.join(', ')}</p>
        </div>
      )}

      <div className="mt-3 text-xs text-gray-600">
        <p>Use Tab to navigate, Enter to activate buttons.</p>
        <p>Check console for detailed results.</p>
      </div>
    </div>
  );
}; 