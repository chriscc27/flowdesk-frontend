import { ModulePage } from '@/components/shared/module-page';
import { DollarSign } from 'lucide-react';

export default function FinanzasPage() {
  return (
    <ModulePage
      title="Finanzas"
      description="Contabilidad, cuentas por cobrar y pagar"
      icon={DollarSign}
      gradient="from-green-500 to-emerald-500"
    />
  );
}
