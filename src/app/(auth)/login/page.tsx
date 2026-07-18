'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useAuthStore } from '@/stores/auth-store';
import { loginUser } from '@/lib/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Ingresa un email válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      setAuth(response);
      toast.success('Sesión iniciada correctamente');
      router.push('/dashboard');
    } catch {
      toast.error('Credenciales inválidas. Verifica tu email y contraseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Panel izquierdo — Formulario */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-sm animate-[fade-in_0.4s_ease-out]">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-xl)] bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25">
              <span className="text-lg font-bold text-white">F</span>
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              FlowDesk
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-xl font-bold text-foreground">
              Bienvenido de nuevo
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Ingresa tus credenciales para acceder al sistema
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              id="email"
              type="email"
              label="Correo electrónico"
              placeholder="admin@flowdesk.com"
              icon={<Mail className="h-4 w-4" />}
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              id="password"
              type="password"
              label="Contraseña"
              placeholder="••••••••"
              icon={<Lock className="h-4 w-4" />}
              error={errors.password?.message}
              {...register('password')}
            />

            <Button
              type="submit"
              loading={loading}
              className="w-full"
              size="lg"
            >
              Iniciar Sesión
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Demo: admin@flowdesk.com / FlowDesk2024!
          </p>
        </div>
      </div>

      {/* Panel derecho — Branding */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950 relative overflow-hidden">
        {/* Grid pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Esferas decorativas */}
        <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />

        <div className="relative z-10 max-w-md text-center px-8">
          <div className="flex justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-2xl)] bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="text-3xl font-bold text-white">F</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Gestiona tu negocio desde un solo lugar
          </h2>
          <p className="text-base text-indigo-200/80 leading-relaxed">
            FlowDesk centraliza inventario, ventas, compras, finanzas y recursos
            humanos en una plataforma moderna y escalable diseñada para PYMEs.
          </p>
        </div>
      </div>
    </div>
  );
}
