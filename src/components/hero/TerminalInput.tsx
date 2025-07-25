import { forwardRef, useEffect } from 'react';

type TerminalInputProps = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ id, value, onChange, onKeyDown, disabled }, ref) => {
    // Maintain focus on the input only when component mounts, not on every update
    useEffect(() => {
      const inputElement = ref as React.MutableRefObject<HTMLInputElement>;
      if (inputElement?.current && !disabled) {
        // Only focus if the element is not already focused to prevent unwanted scrolling
        if (document.activeElement !== inputElement.current) {
          inputElement.current.focus();
        }
      }
    }, [ref, disabled]); // Include dependencies to satisfy ESLint

    return (
      <>
        <label htmlFor={id} className="sr-only">Saisie du terminal</label>
        <input
          id={id}
          ref={ref}
          type="text"
          className="absolute inset-0 w-full h-full opacity-0 focus:outline-none focus:ring-0 focus:border-0"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoFocus
          aria-label="Saisie de commande du terminal"
          role="textbox"
          aria-multiline="false"
          disabled={disabled}
          tabIndex={0}
        />
      </>
    );
  }
);

TerminalInput.displayName = 'TerminalInput'; 