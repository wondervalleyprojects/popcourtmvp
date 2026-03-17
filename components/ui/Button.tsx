import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  full?: boolean;
  size?: 'md' | 'lg';
};

const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-court-accent text-white shadow-glam hover:opacity-90',
  secondary: 'bg-court-panel text-court-text border border-white/20 hover:bg-white/10',
  ghost: 'bg-transparent text-court-text border border-white/30 hover:bg-white/10',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-4 text-base',
};

export function Button({ variant = 'primary', full = true, size = 'md', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-2xl font-semibold transition active:scale-[0.99] ${full ? 'w-full' : ''} ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
