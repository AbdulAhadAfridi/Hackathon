import { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="border rounded shadow-sm">{children}</div>
);

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="p-4">{children}</div>
);
