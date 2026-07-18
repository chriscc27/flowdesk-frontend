'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Ene', ingresos: 42000, gastos: 28000 },
  { month: 'Feb', ingresos: 48000, gastos: 31000 },
  { month: 'Mar', ingresos: 45000, gastos: 29000 },
  { month: 'Abr', ingresos: 53000, gastos: 33000 },
  { month: 'May', ingresos: 61000, gastos: 35000 },
  { month: 'Jun', ingresos: 58000, gastos: 36000 },
  { month: 'Jul', ingresos: 67000, gastos: 38000 },
  { month: 'Ago', ingresos: 72000, gastos: 40000 },
  { month: 'Sep', ingresos: 69000, gastos: 37000 },
  { month: 'Oct', ingresos: 78000, gastos: 42000 },
  { month: 'Nov', ingresos: 85000, gastos: 44000 },
  { month: 'Dic', ingresos: 92000, gastos: 48000 },
];

export function RevenueChart() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-border bg-card p-5 shadow-[var(--shadow-xs)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Ingresos vs Gastos
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Últimos 12 meses
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Ingresos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="text-xs text-muted-foreground">Gastos</span>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" strokeOpacity={0.5} />
            <XAxis
              dataKey="month"
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                fontSize: '12px',
              }}
              labelStyle={{ color: 'var(--color-foreground)', fontWeight: 600 }}
              formatter={(value: number) => [`$${value.toLocaleString('es-MX')}`, '']}
            />
            <Area
              type="monotone"
              dataKey="ingresos"
              stroke="#818cf8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorIngresos)"
              name="Ingresos"
            />
            <Area
              type="monotone"
              dataKey="gastos"
              stroke="#f43f5e"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGastos)"
              name="Gastos"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
