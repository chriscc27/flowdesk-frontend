import { Loader2 } from 'lucide-react';

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' };

  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className={`${sizeMap[size]} animate-spin text-primary`} />
    </div>
  );
}
