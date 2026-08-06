'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Heart, Sparkles, FileText, BookOpen, Database, Shield, Phone, Home as HomeIcon, Moon, Sun, Wrench, Calendar, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAppStore, type SectionId } from '@/stores/app-store';
import { useTheme } from 'next-themes';
import { LanguageSelector } from './language-selector';
import { CommandPalette } from './command-palette';
import { getTranslation } from '@/i18n/translations';
import { cn } from '@/lib/utils';

const NAV_ITEMS: { id: SectionId; icon: typeof HomeIcon; emoji: string }[] = [
  { id: 'home', icon: HomeIcon, emoji: '🏠' },
  { id: 'learn-ai', icon: Sparkles, emoji: '🤖' },
  { id: 'cv', icon: FileText, emoji: '📝' },
  { id: 'office', icon: BookOpen, emoji: '📊' },
  { id: 'resources', icon: Database, emoji: '📚' },
  { id: 'rights', icon: Shield, emoji: '⚖️' },
  { id: 'tools', icon: Wrench, emoji: '🛠️' },
  { id: 'events', icon: Calendar, emoji: '📅' },
  { id: 'courses', icon: GraduationCap, emoji: '🎓' },
  { id: 'community', icon: Users, emoji: '👥' },
  { id: 'contacts', icon: Phone, emoji: '📞' },
];

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = theme === 'system' ? resolvedTheme : theme;
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      aria-label="Cambiar tema"
      className="h-11 w-11"
      suppressHydrationWarning
    >
      {current === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

export function NavBar() {
  const { language, activeSection, setActiveSection } = useAppStore();
  const t = getTranslation(language);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLabels: Record<SectionId, string> = {
    home: t.nav_home,
    'learn-ai': t.nav_learnAI,
    cv: t.nav_cv,
    office: t.nav_office,
    resources: t.nav_resources,
    rights: t.nav_rights,
    tools: 'Herramientas',
    events: 'Eventos',
    courses: 'Cursos',
    contacts: t.nav_contacts,
    community: 'Comunidad',
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled ? 'glass border-b border-border shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-2">
          {/* Logo */}
          <button
            onClick={() => setActiveSection('home')}
            aria-label="Manos Abiertas — Inicio"
            className="flex min-h-11 items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Heart className="h-5 w-5 text-white fill-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-saffron border-2 border-background" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="font-bold text-base leading-tight gradient-text">Manos Abiertas</div>
              <div className="text-[10px] text-muted-foreground leading-tight">IA · CV · Derechos</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center max-w-3xl">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative min-h-11 px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5',
                    active ? 'text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{navLabels[item.id]}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <CommandPalette />
            <ThemeToggle />
            <LanguageSelector compact />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-11 w-11"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={reduceMotion ? { duration: 0 } : undefined}
            className="lg:hidden overflow-hidden border-t border-border glass"
          >
            <nav className="container mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-1.5">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      'flex min-h-11 items-center gap-2.5 px-3 py-3 rounded-lg text-sm font-medium transition-colors',
                      active
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-accent'
                    )}
                  >
                    <span className="text-lg">{item.emoji}</span>
                    {navLabels[item.id]}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
