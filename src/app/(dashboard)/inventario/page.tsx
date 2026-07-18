import { ModulePage } from '@/components/shared/module-page';
import { Package } from 'lucide-react';

export default function InventarioPage() {
  return (
    <ModulePage
      title="Inventario"
      description="Gestión de productos, stock y almacenes"
      icon={Package}
      gradient="from-emerald-500 to-teal-500"
    />
  );
}
