import { ModulePage } from '@/components/shared/module-page';
import { BarChart3 } from 'lucide-react';

export default function ReportesPage() {
  return (
    <ModulePage
      title="Reportes"
      description="Reportes y análisis del negocio"
      icon={BarChart3}
      gradient="from-sky-500 to-blue-500"
    />
  );
}
