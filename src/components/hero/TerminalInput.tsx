import { forwardRef } from 'react';

type TerminalInputProps = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ id, value, onChange, onKeyDown, disabled }, ref) => {
    return (
      <>
        <label htmlFor={id} className="sr-only">Terminal input</label>
        <input
          id={id}
          ref={ref}
          type="text"
          className="absolute top-0 left-0 w-0 h-0 opacity-0"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoFocus
          aria-label="Terminal command input"
          role="textbox"
          aria-multiline="false"
          disabled={disabled}
        />
      </>
    );
  }
);

TerminalInput.displayName = 'TerminalInput'; 