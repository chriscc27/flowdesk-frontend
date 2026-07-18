'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              'flex h-10 w-full rounded-[var(--radius-md)]',
              'border border-input bg-surface-1 px-3 py-2',
              'text-sm text-foreground placeholder:text-muted-foreground',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
              'disabled:cursor-not-allowed disabled:opacity-50',
              icon && 'pl-10',
              error && 'border-error focus:ring-error',
              className,
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-error animate-[slide-up_0.2s_ease-out]">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
