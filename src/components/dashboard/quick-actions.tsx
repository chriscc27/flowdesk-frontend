'use client';

import Link from 'next/link';
import { Plus, FileText, Users, Package } from 'lucide-react';

const actions = [
  {
    label: 'Nueva Venta',
    description: 'Registrar una venta',
    icon: Plus,
    href: '/ventas',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Nuevo Producto',
    description: 'Agregar al inventario',
    icon: Package,
    href: '/inventario',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'Nuevo Cliente',
    description: 'Registrar un cliente',
    icon: Users,
    href: '/crm',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    label: 'Generar Reporte',
    description: 'Crear un reporte',
    icon: FileText,
    href: '/reportes',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export function QuickActions() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-border bg-card p-5 shadow-[var(--shadow-xs)]">
      <h3 className="text-sm font-semibold text-foreground mb-4">
        Acciones Rápidas
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="group flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-border p-4 hover:border-primary/30 hover:shadow-[var(--shadow-sm)] transition-all duration-200"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br ${action.gradient} shadow-sm group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-foreground">
                  {action.label}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
