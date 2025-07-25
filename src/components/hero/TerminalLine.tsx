import { memo } from 'react';

type TerminalLineProps = {
  content: string;
};

export const TerminalLine = memo(({ content }: TerminalLineProps) => (
  <div className="mb-1">{content}</div>
));

TerminalLine.displayName = 'TerminalLine'; 