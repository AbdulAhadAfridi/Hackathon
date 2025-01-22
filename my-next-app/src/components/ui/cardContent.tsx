import { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = '' }: CardContentProps) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
