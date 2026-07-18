import Link from 'next/link';
import { ArrowLeft, ShieldOff } from 'lucide-react';

export default function AccesoDenegadoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center animate-[fade-in_0.4s_ease-out]">
        <div className="flex justify-center mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-2xl)] bg-error/10">
            <ShieldOff className="h-10 w-10 text-error" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          Acceso Denegado
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          No tienes los permisos necesarios para acceder a esta sección. Contacta
          al administrador del sistema si crees que esto es un error.
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
