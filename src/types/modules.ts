import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  UserCircle,
  DollarSign,
  BarChart3,
  Shield,
  Settings,
  type LucideIcon,
} from 'lucide-react';

export interface ModuleConfig {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  category: 'principal' | 'gestion' | 'sistema';
}

export const MODULES: ModuleConfig[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Vista general del negocio con métricas clave',
    href: '/dashboard',
    icon: LayoutDashboard,
    color: 'from-indigo-500 to-violet-500',
    category: 'principal',
  },
  {
    id: 'inventario',
    name: 'Inventario',
    description: 'Gestión de productos, stock y almacenes',
    href: '/inventario',
    icon: Package,
    color: 'from-emerald-500 to-teal-500',
    category: 'principal',
  },
  {
    id: 'compras',
    name: 'Compras',
    description: 'Órdenes de compra y gestión de proveedores',
    href: '/compras',
    icon: ShoppingCart,
    color: 'from-orange-500 to-amber-500',
    category: 'principal',
  },
  {
    id: 'ventas',
    name: 'Ventas',
    description: 'Facturación, cotizaciones y órdenes de venta',
    href: '/ventas',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    category: 'principal',
  },
  {
    id: 'crm',
    name: 'CRM',
    description: 'Gestión de clientes y relaciones comerciales',
    href: '/crm',
    icon: UserCircle,
    color: 'from-pink-500 to-rose-500',
    category: 'gestion',
  },
  {
    id: 'recursos-humanos',
    name: 'Recursos Humanos',
    description: 'Gestión de empleados, nóminas y asistencia',
    href: '/recursos-humanos',
    icon: Users,
    color: 'from-purple-500 to-fuchsia-500',
    category: 'gestion',
  },
  {
    id: 'finanzas',
    name: 'Finanzas',
    description: 'Contabilidad, cuentas por cobrar y pagar',
    href: '/finanzas',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    category: 'gestion',
  },
  {
    id: 'reportes',
    name: 'Reportes',
    description: 'Reportes y análisis del negocio',
    href: '/reportes',
    icon: BarChart3,
    color: 'from-sky-500 to-blue-500',
    category: 'gestion',
  },
  {
    id: 'auditoria',
    name: 'Auditoría',
    description: 'Registro de acciones y trazabilidad del sistema',
    href: '/auditoria',
    icon: Shield,
    color: 'from-slate-500 to-gray-500',
    category: 'sistema',
  },
  {
    id: 'configuracion',
    name: 'Configuración',
    description: 'Roles, permisos y ajustes del sistema',
    href: '/configuracion',
    icon: Settings,
    color: 'from-zinc-500 to-neutral-500',
    category: 'sistema',
  },
];

export const MODULE_CATEGORIES = {
  principal: 'Principal',
  gestion: 'Gestión',
  sistema: 'Sistema',
} as const;
