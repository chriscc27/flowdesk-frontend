'use client';

import { useAuthStore } from '@/stores/auth-store';
import { StatsCard } from '@/components/dashboard/stats-card';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { QuickActions } from '@/components/dashboard/quick-actions';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from 'lucide-react';

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="space-y-6 animate-[fade-in_0.3s_ease-out]">
      {/* Saludo */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Hola, {user?.firstName} 👋
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Aquí tienes un resumen del estado de tu negocio.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Ingresos del mes"
          value="$92,450"
          change={12.5}
          changeLabel="vs mes anterior"
          icon={DollarSign}
          gradient="from-indigo-500 to-violet-500"
        />
        <StatsCard
          title="Ventas realizadas"
          value="184"
          change={8.2}
          changeLabel="vs mes anterior"
          icon={ShoppingCart}
          gradient="from-blue-500 to-cyan-500"
        />
        <StatsCard
          title="Nuevos clientes"
          value="32"
          change={-3.1}
          changeLabel="vs mes anterior"
          icon={Users}
          gradient="from-pink-500 to-rose-500"
        />
        <StatsCard
          title="Productos activos"
          value="1,247"
          change={2.4}
          changeLabel="vs mes anterior"
          icon={Package}
          gradient="from-emerald-500 to-teal-500"
        />
      </div>

      {/* Gráficas y paneles */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Actividad reciente */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <RecentActivity />
      </div>
    </div>
  );
}
