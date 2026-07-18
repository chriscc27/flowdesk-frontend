'use client';

import { useTheme } from 'next-themes';
import { useUIStore } from '@/stores/ui-store';
import { useAuthStore } from '@/stores/auth-store';
import { Breadcrumbs } from './breadcrumbs';
import { Avatar } from '@/components/ui/avatar';
import { Menu, Sun, Moon, Bell, LogOut, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { toggleMobileSidebar } = useUIStore();
  const { user, logout } = useAuthStore();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-md px-4 lg:px-6">
      {/* Botón menú móvil */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Breadcrumbs */}
      <div className="flex-1">
        <Breadcrumbs />
      </div>

      {/* Acciones del header */}
      <div className="flex items-center gap-1">
        {/* Búsqueda */}
        <button
          className="flex items-center gap-2 h-8 px-3 rounded-[var(--radius-md)] bg-surface-2 border border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          title="Buscar (Ctrl+K)"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-border px-1.5 font-mono text-[10px] text-muted-foreground/60">
            ⌘K
          </kbd>
        </button>

        {/* Notificaciones */}
        <button className="relative flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
        </button>

        {/* Toggle tema */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          title="Cambiar tema"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>

        {/* Avatar + menú usuario */}
        {user && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 rounded-[var(--radius-md)] p-1 hover:bg-secondary transition-colors"
            >
              <Avatar firstName={user.firstName} lastName={user.lastName} size="sm" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-[var(--radius-lg)] border border-border bg-card shadow-[var(--shadow-lg)] animate-[scale-in_0.15s_ease-out] origin-top-right">
                <div className="p-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <div className="p-1">
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      logout();
                    }}
                    className="flex w-full items-center gap-2 rounded-[var(--radius-md)] px-3 py-2 text-sm text-muted-foreground hover:text-error hover:bg-error/5 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Cerrar sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
