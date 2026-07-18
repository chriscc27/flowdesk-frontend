import { cn } from '@/lib/utils';
import { getInitials } from '@/lib/utils';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  firstName: string;
  lastName: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-11 w-11 text-base',
};

export function Avatar({ firstName, lastName, src, size = 'md', className }: AvatarProps) {
  const initials = getInitials(firstName, lastName);

  if (src) {
    return (
      <img
        src={src}
        alt={`${firstName} ${lastName}`}
        className={cn(
          'rounded-[var(--radius-full)] object-cover ring-2 ring-border',
          sizeStyles[size],
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-[var(--radius-full)]',
        'bg-gradient-to-br from-primary to-primary-700 text-primary-foreground',
        'font-semibold select-none ring-2 ring-border',
        sizeStyles[size],
        className,
      )}
    >
      {initials}
    </div>
  );
}
