'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CornerDownLeft, ArrowRight, Sparkles, FileText, BookOpen, Database, Shield, Phone, Home as HomeIcon, X, Command } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useAppStore, type SectionId } from '@/stores/app-store';
import { AI_COURSES } from '@/data/ai-courses';
import { OFFICE_MODULES } from '@/data/office-course';
import { RESOURCES, RESOURCE_CATEGORIES } from '@/data/resources';
import { RIGHTS_ARTICLES, RIGHTS_CATEGORIES } from '@/data/rights-guide';
import { cn } from '@/lib/utils';

interface SearchItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  section: SectionId;
  category: 'section' | 'ai-course' | 'office-module' | 'resource' | 'right' | 'category';
  badge?: string;
}

export function CommandPalette() {
  const { setActiveSection } = useAppStore();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
        setQuery('');
        setSelectedIndex(0);
      }, 100);
    }
  }, [open]);

  // Build search index (memoized)
  const searchIndex = useMemo<SearchItem[]>(() => {
    const items: SearchItem[] = [
      { id: 'sec-home', title: 'Inicio', subtitle: 'Página principal', icon: '🏠', section: 'home', category: 'section' },
      { id: 'sec-ai', title: 'Aprende IA', subtitle: 'Cursos de inteligencia artificial', icon: '🤖', section: 'learn-ai', category: 'section' },
      { id: 'sec-cv', title: 'Crea tu CV', subtitle: 'Constructor de currículum con IA', icon: '📝', section: 'cv', category: 'section' },
      { id: 'sec-office', title: 'Office Pack', subtitle: 'Curso de Word, Excel, PowerPoint', icon: '📊', section: 'office', category: 'section' },
      { id: 'sec-resources', title: 'Recursos', subtitle: `${RESOURCES.length}+ enlaces verificados`, icon: '📚', section: 'resources', category: 'section' },
      { id: 'sec-rights', title: 'Derechos y Ayudas', subtitle: 'Guía legal y de derechos', icon: '⚖️', section: 'rights', category: 'section' },
      { id: 'sec-tools', title: 'Herramientas', subtitle: 'Checklist trámites, coste de vida, conversor', icon: '🛠️', section: 'tools', category: 'section' },
      { id: 'sec-events', title: 'Eventos', subtitle: 'Ferias de empleo, jornadas, cursos', icon: '📅', section: 'events', category: 'section' },
      { id: 'sec-courses', title: 'Biblioteca de Cursos', subtitle: '115+ cursos gratuitos con certificado', icon: '🎓', section: 'courses', category: 'section' },
      { id: 'sec-contacts', title: 'Contactos', subtitle: 'Emergencias y ONGs', icon: '📞', section: 'contacts', category: 'section' },
    ];

    // AI courses
    AI_COURSES.forEach((c) => {
      items.push({
        id: `ai-${c.id}`,
        title: c.model,
        subtitle: c.tagline,
        icon: c.logo,
        section: 'learn-ai',
        category: 'ai-course',
        badge: 'Curso IA',
      });
    });

    // Office modules
    OFFICE_MODULES.forEach((m) => {
      items.push({
        id: `off-${m.id}`,
        title: m.title,
        subtitle: m.description.slice(0, 80),
        icon: m.icon,
        section: 'office',
        category: 'office-module',
        badge: `${m.lessons.length} lecciones`,
      });
    });

    // Rights categories
    RIGHTS_CATEGORIES.forEach((c) => {
      const count = RIGHTS_ARTICLES.filter((a) => a.category === c.id).length;
      if (count > 0) {
        items.push({
          id: `cat-${c.id}`,
          title: c.label,
          subtitle: `${count} artículos sobre ${c.label.toLowerCase()}`,
          icon: c.icon,
          section: 'rights',
          category: 'category',
          badge: `${count} artículos`,
        });
      }
    });

    // Top resources (first 50 to keep index manageable)
    RESOURCES.slice(0, 80).forEach((r) => {
      const cat = RESOURCE_CATEGORIES.find((c) => c.value === r.category);
      items.push({
        id: `res-${r.id}`,
        title: r.title,
        subtitle: r.source,
        icon: cat?.icon || '🔗',
        section: 'resources',
        category: 'resource',
        badge: cat?.label,
      });
    });

    return items;
  }, []);

  // Filter results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          (item.subtitle?.toLowerCase().includes(q)) ||
          item.category.includes(q)
      )
      .slice(0, 20);
  }, [query, searchIndex]);

  // Keep selectedIndex within bounds (derived, no effect needed)
  const safeSelectedIndex = Math.min(selectedIndex, Math.max(0, results.length - 1));

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[safeSelectedIndex]) {
      e.preventDefault();
      selectItem(results[safeSelectedIndex]);
    }
  }

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${safeSelectedIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [safeSelectedIndex]);

  function selectItem(item: SearchItem) {
    setActiveSection(item.section);
    setOpen(false);
    setQuery('');
  }

  return (
    <>
      {/* Trigger button - shown in nav on desktop */}
      <button
        onClick={() => setOpen(true)}
        className="hidden min-h-11 md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/30 hover:bg-muted/60 text-xs text-muted-foreground transition-colors"
        aria-label="Abrir búsqueda (Cmd+K)"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Buscar...</span>
        <kbd className="ml-2 inline-flex h-4 items-center gap-0.5 rounded border border-border bg-background px-1 text-[10px] font-medium">
          <Command className="h-2.5 w-2.5" />K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Buscar en Manos Abiertas</DialogTitle>
          </DialogHeader>

          {/* Search input */}
          <div className="flex items-center gap-2 p-3 border-b border-border">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
              onKeyDown={handleKeyDown}
              placeholder="Buscar secciones, cursos IA, recursos, derechos..."
              className="border-0 shadow-none focus-visible:ring-0 h-11"
            />
            <kbd className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-[400px] overflow-y-auto custom-scrollbar p-2">
            {results.length === 0 ? (
              <div className="py-12 text-center text-sm text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-30" />
                No se encontraron resultados para "{query}"
              </div>
            ) : (
              <div className="space-y-0.5">
                {results.map((item, idx) => (
                  <button
                    key={item.id}
                    data-idx={idx}
                    onClick={() => selectItem(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={cn(
                      'w-full min-h-11 flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors',
                      idx === safeSelectedIndex ? 'bg-primary/10' : 'hover:bg-accent/50'
                    )}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{item.title}</div>
                      {item.subtitle && (
                        <div className="text-xs text-muted-foreground truncate">{item.subtitle}</div>
                      )}
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="text-[9px] py-0 h-4 flex-shrink-0">
                        {item.badge}
                      </Badge>
                    )}
                    {idx === safeSelectedIndex && (
                      <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-2 border-t border-border bg-muted/30 text-[10px] text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="border border-border rounded px-1">↑</kbd>
                <kbd className="border border-border rounded px-1">↓</kbd>
                navegar
              </span>
              <span className="flex items-center gap-1">
                <kbd className="border border-border rounded px-1">↵</kbd>
                seleccionar
              </span>
            </div>
            <span>{results.length} resultados</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
