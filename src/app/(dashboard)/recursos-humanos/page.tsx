import { ModulePage } from '@/components/shared/module-page';
import { Users } from 'lucide-react';

export default function RecursosHumanosPage() {
  return (
    <ModulePage
      title="Recursos Humanos"
      description="Gestión de empleados, nóminas y asistencia"
      icon={Users}
      gradient="from-purple-500 to-fuchsia-500"
    />
  );
}
