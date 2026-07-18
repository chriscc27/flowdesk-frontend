import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center animate-[fade-in_0.4s_ease-out]">
        {/* Número 404 estilizado */}
        <div className="relative mb-8">
          <span className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary/20 to-primary/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-2xl)] bg-primary/5 backdrop-blur-sm">
              <Search className="h-10 w-10 text-primary/60" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          Página no encontrada
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          La página que buscas no existe o fue movida. Verifica la URL o regresa
          al dashboard.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
}
