import { ModulePage } from '@/components/shared/module-page';
import { TrendingUp } from 'lucide-react';

export default function VentasPage() {
  return (
    <ModulePage
      title="Ventas"
      description="Facturación, cotizaciones y órdenes de venta"
      icon={TrendingUp}
      gradient="from-blue-500 to-cyan-500"
    />
  );
}
