'use client';

import { type LucideIcon, Construction } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ModulePageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  children?: React.ReactNode;
}

export function ModulePage({
  title,
  description,
  icon: Icon,
  gradient,
  children,
}: ModulePageProps) {
  return (
    <div className="animate-[fade-in_0.3s_ease-out]">
      {/* Encabezado del módulo */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] bg-gradient-to-br ${gradient} shadow-sm`}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
              <Badge variant="outline">En desarrollo</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          </div>
        </div>
      </div>

      {/* Contenido del módulo */}
      {children || (
        <div className="flex flex-col items-center justify-center py-24 animate-[slide-up_0.4s_ease-out]">
          <div className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-2xl)] bg-muted mb-6">
            <Construction className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Módulo en construcción
          </h2>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Este módulo será implementado en una próxima iteración. La estructura
            ya está preparada para recibir la funcionalidad completa.
          </p>
        </div>
      )}
    </div>
  );
}
