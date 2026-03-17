import { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-white/15 bg-court-panel/95 p-4 ${className}`}>{children}</div>;
}
