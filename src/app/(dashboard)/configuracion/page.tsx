import { ModulePage } from '@/components/shared/module-page';
import { Settings } from 'lucide-react';

export default function ConfiguracionPage() {
  return (
    <ModulePage
      title="Configuración"
      description="Roles, permisos y ajustes del sistema"
      icon={Settings}
      gradient="from-zinc-500 to-neutral-500"
    />
  );
}
