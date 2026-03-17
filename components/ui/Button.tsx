import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  full?: boolean;
};

const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-court-accent text-white shadow-glam hover:opacity-90',
  secondary: 'bg-court-panel text-court-text border border-white/20 hover:bg-white/10',
  ghost: 'bg-transparent text-court-text border border-white/30 hover:bg-white/10',
};

export function Button({ variant = 'primary', full = true, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${full ? 'w-full' : ''} ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
