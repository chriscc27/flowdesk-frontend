import { ModulePage } from '@/components/shared/module-page';
import { ShoppingCart } from 'lucide-react';

export default function ComprasPage() {
  return (
    <ModulePage
      title="Compras"
      description="Órdenes de compra y gestión de proveedores"
      icon={ShoppingCart}
      gradient="from-orange-500 to-amber-500"
    />
  );
}
