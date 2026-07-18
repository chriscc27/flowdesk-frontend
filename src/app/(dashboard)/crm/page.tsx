import { ModulePage } from '@/components/shared/module-page';
import { UserCircle } from 'lucide-react';

export default function CrmPage() {
  return (
    <ModulePage
      title="CRM"
      description="Gestión de clientes y relaciones comerciales"
      icon={UserCircle}
      gradient="from-pink-500 to-rose-500"
    />
  );
}
