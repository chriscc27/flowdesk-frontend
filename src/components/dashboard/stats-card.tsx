'use client';

import { cn } from '@/lib/utils';
import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: LucideIcon;
  gradient: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  gradient,
}: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card p-5 shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-md)] transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <p className="text-2xl font-bold text-foreground tracking-tight">
            {value}
          </p>
          <div className="flex items-center gap-1.5">
            {isPositive ? (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-red-500" />
            )}
            <span
              className={cn(
                'text-xs font-medium',
                isPositive ? 'text-emerald-500' : 'text-red-500',
              )}
            >
              {isPositive ? '+' : ''}{change}%
            </span>
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          </div>
        </div>
        <div
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-[var(--radius-lg)]',
            'bg-gradient-to-br shadow-sm',
            gradient,
          )}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Decoración sutil */}
      <div
        className={cn(
          'absolute -right-4 -bottom-4 h-24 w-24 rounded-full opacity-[0.04]',
          'bg-gradient-to-br group-hover:opacity-[0.08] transition-opacity duration-300',
          gradient,
        )}
      />
    </div>
  );
}
