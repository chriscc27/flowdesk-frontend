'use client';

import {
  ShoppingCart,
  UserPlus,
  Package,
  CreditCard,
  ArrowUpRight,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    icon: ShoppingCart,
    color: 'bg-blue-500/10 text-blue-500',
    title: 'Nueva venta registrada',
    description: 'Factura #1247 — $12,500.00 MXN',
    time: 'Hace 5 min',
  },
  {
    id: 2,
    icon: UserPlus,
    color: 'bg-emerald-500/10 text-emerald-500',
    title: 'Nuevo cliente agregado',
    description: 'Corporativo Tech Solutions S.A.',
    time: 'Hace 23 min',
  },
  {
    id: 3,
    icon: Package,
    color: 'bg-orange-500/10 text-orange-500',
    title: 'Stock bajo detectado',
    description: 'Producto SKU-0847 — 3 unidades restantes',
    time: 'Hace 1 hora',
  },
  {
    id: 4,
    icon: CreditCard,
    color: 'bg-purple-500/10 text-purple-500',
    title: 'Pago recibido',
    description: 'Cliente #892 — $28,750.00 MXN',
    time: 'Hace 2 horas',
  },
  {
    id: 5,
    icon: ShoppingCart,
    color: 'bg-blue-500/10 text-blue-500',
    title: 'Orden de compra aprobada',
    description: 'OC-2024-0156 — Proveedor Industrial MX',
    time: 'Hace 3 horas',
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-border bg-card p-5 shadow-[var(--shadow-xs)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Actividad Reciente
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Últimas acciones del sistema
          </p>
        </div>
        <button className="flex items-center gap-1 text-xs text-primary hover:text-primary-hover transition-colors">
          Ver todo
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-2 rounded-[var(--radius-md)] hover:bg-surface-2 transition-colors"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] ${activity.color}`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
