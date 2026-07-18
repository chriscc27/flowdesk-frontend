'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/stores/ui-store';
import { useAuthStore } from '@/stores/auth-store';
import { MODULES, MODULE_CATEGORIES } from '@/types/modules';
import { Avatar } from '@/components/ui/avatar';
import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  X,
} from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar, sidebarMobileOpen, closeMobileSidebar } = useUIStore();
  const { user, logout } = useAuthStore();

  const groupedModules = {
    principal: MODULES.filter((m) => m.category === 'principal'),
    gestion: MODULES.filter((m) => m.category === 'gestion'),
    sistema: MODULES.filter((m) => m.category === 'sistema'),
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay móvil */}
      {sidebarMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-screen flex-col',
          'bg-sidebar border-r border-sidebar-border',
          'transition-all duration-300 ease-in-out',
          sidebarCollapsed ? 'w-[68px]' : 'w-64',
          // Móvil
          'lg:translate-x-0',
          sidebarMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-3" onClick={closeMobileSidebar}>
            <div className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-lg)] bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
              <span className="text-sm font-bold text-white">F</span>
            </div>
            {!sidebarCollapsed && (
              <span className="text-lg font-bold text-sidebar-foreground tracking-tight">
                FlowDesk
              </span>
            )}
          </Link>

          {/* Botón cerrar móvil */}
          <button
            onClick={closeMobileSidebar}
            className="lg:hidden text-sidebar-foreground/60 hover:text-sidebar-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {(Object.keys(groupedModules) as Array<keyof typeof groupedModules>).map((category) => (
            <div key={category}>
              {!sidebarCollapsed && (
                <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/40">
                  {MODULE_CATEGORIES[category]}
                </p>
              )}
              <div className="space-y-0.5">
                {groupedModules[category].map((module) => {
                  const Icon = module.icon;
                  const active = isActive(module.href);

                  return (
                    <Link
                      key={module.id}
                      href={module.href}
                      onClick={closeMobileSidebar}
                      title={sidebarCollapsed ? module.name : undefined}
                      className={cn(
                        'group flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2',
                        'text-sm font-medium transition-all duration-200',
                        active
                          ? 'bg-sidebar-active text-white'
                          : 'text-sidebar-foreground/70 hover:bg-sidebar-hover hover:text-sidebar-foreground',
                        sidebarCollapsed && 'justify-center px-2',
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-[18px] w-[18px] shrink-0 transition-colors',
                          active ? 'text-primary' : 'text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80',
                        )}
                      />
                      {!sidebarCollapsed && <span>{module.name}</span>}
                      {active && !sidebarCollapsed && (
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer con usuario + toggle */}
        <div className="border-t border-sidebar-border p-3 space-y-2">
          {/* Toggle colapsar — solo desktop */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] px-3 py-1.5 text-xs text-sidebar-foreground/50 hover:bg-sidebar-hover hover:text-sidebar-foreground transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span>Colapsar</span>
              </>
            )}
          </button>

          {/* Usuario */}
          {user && (
            <div
              className={cn(
                'flex items-center gap-3 rounded-[var(--radius-md)] p-2',
                sidebarCollapsed && 'justify-center',
              )}
            >
              <Avatar
                firstName={user.firstName}
                lastName={user.lastName}
                size="sm"
                className="ring-sidebar-border"
              />
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-sidebar-foreground truncate">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-[10px] text-sidebar-foreground/50 truncate">
                    {user.role}
                  </p>
                </div>
              )}
              {!sidebarCollapsed && (
                <button
                  onClick={logout}
                  title="Cerrar sesión"
                  className="text-sidebar-foreground/40 hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
