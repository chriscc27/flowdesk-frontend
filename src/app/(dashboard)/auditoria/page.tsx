import { ModulePage } from '@/components/shared/module-page';
import { Shield } from 'lucide-react';

export default function AuditoriaPage() {
  return (
    <ModulePage
      title="Auditoría"
      description="Registro de acciones y trazabilidad del sistema"
      icon={Shield}
      gradient="from-slate-500 to-gray-500"
    />
  );
}
