'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  fullWidth = false,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const base = 'px-6 py-2 rounded-lg font-semibold transition duration-200';
  const variants = {
    primary: 'bg-brand-yellow text-white hover:bg-amber-600',
    secondary: 'bg-brand-green text-white hover:bg-emerald-700',
    outline: 'border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-white',
  };
  return (
    <button 
    className={`${base} ${variants[variant]} ${className} ${fullWidth ? 'w-full' : ''}`} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
}