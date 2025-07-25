export const TerminalHeader = () => {
  return (
    <div 
      className="flex items-center px-3 py-2 bg-gray-100 md:px-4 md:py-2"
      role="banner"
      aria-label="Contrôles de la fenêtre du terminal"
    >
      <div className="flex space-x-1.5 md:space-x-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full md:w-3 md:h-3" aria-hidden="true" />
        <div className="w-2 h-2 bg-gray-400 rounded-full md:w-3 md:h-3" aria-hidden="true" />
        <div className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3" aria-hidden="true" />
      </div>
      <div className="mx-auto text-xs text-gray-500">terminal</div>
    </div>
  );
}; 