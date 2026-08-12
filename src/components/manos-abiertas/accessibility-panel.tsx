'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accessibility, X, Type, Eye,
  Minus, Plus, RotateCcw, Palette, MousePointer,
  Keyboard, ZoomIn,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface AccessibilitySettings {
  fontSize: number; // 80-150
  lineHeight: number; // 1.2-2.2
  letterSpacing: number; // 0-3
  dyslexicFont: boolean;
  reducedMotion: boolean;
  enhancedFocus: boolean;
  colorFilter: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'grayscale';
  cursorSize: 'normal' | 'large';
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100,
  lineHeight: 1.6,
  letterSpacing: 0,
  dyslexicFont: false,
  reducedMotion: false,
  enhancedFocus: false,
  colorFilter: 'none',
  cursorSize: 'normal',
};

const COLOR_FILTERS = [
  { id: 'none' as const, label: 'Sin filtro', emoji: '🎨' },
  { id: 'protanopia' as const, label: 'Protanopía', emoji: '🔴' },
  { id: 'deuteranopia' as const, label: 'Deuteranopía', emoji: '🟢' },
  { id: 'tritanopia' as const, label: 'Tritanopía', emoji: '🔵' },
  { id: 'grayscale' as const, label: 'Escala de grises', emoji: '⚫' },
];

function loadSettings(): AccessibilitySettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const stored = localStorage.getItem('manos-accessibility');
    if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch { /* ignore */ }
  return DEFAULT_SETTINGS;
}

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(loadSettings);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // Apply settings to DOM
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    // Font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Line height
    document.body.style.lineHeight = String(settings.lineHeight);

    // Letter spacing
    document.body.style.letterSpacing = settings.letterSpacing > 0 ? `${settings.letterSpacing}px` : '';

    // Dyslexic font
    root.classList.toggle('dyslexic-font', settings.dyslexicFont);

    // Reduced motion
    root.classList.toggle('reduce-motion', settings.reducedMotion);

    // Enhanced focus
    root.classList.toggle('enhanced-focus', settings.enhancedFocus);

    // Color filter
    root.setAttribute('data-color-filter', settings.colorFilter);

    // Cursor size
    root.classList.toggle('large-cursor', settings.cursorSize === 'large');

    // Persist
    try {
      localStorage.setItem('manos-accessibility', JSON.stringify(settings));
    } catch { /* ignore */ }

    return () => {
      // Cleanup on unmount if needed - but keep settings applied
    };
  }, [settings, mounted]);

  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const frame = window.requestAnimationFrame(() => {
      panel?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panel) return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const updateSetting = useCallback(<K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  const hasChanges = JSON.stringify(settings) !== JSON.stringify(DEFAULT_SETTINGS);

  if (!mounted) return null;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed left-4 bottom-4 z-40 print:hidden',
          'w-12 h-12 rounded-full shadow-lg',
          'bg-primary text-primary-foreground',
          'flex items-center justify-center',
          'hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isOpen && 'hidden'
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir panel de accesibilidad"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-haspopup="dialog"
        title="Accesibilidad"
      >
        <Accessibility className="h-6 w-6" />
        {hasChanges && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-brand-saffron rounded-full border-2 border-background" aria-hidden="true" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm print:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              ref={panelRef}
              id="accessibility-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="accessibility-panel-title"
              aria-describedby="accessibility-panel-description"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-80 max-w-[90vw] bg-card border-r border-border shadow-2xl print:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                    <Accessibility className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 id="accessibility-panel-title" className="font-bold text-sm">Accesibilidad</h2>
                    <p id="accessibility-panel-description" className="text-[10px] text-muted-foreground">Personaliza tu experiencia</p>
                  </div>
                </div>
                <Button data-autofocus size="icon" variant="ghost" className="h-11 w-11" onClick={() => setIsOpen(false)} aria-label="Cerrar panel de accesibilidad">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <ScrollArea className="flex-1">
                <div className="p-4 space-y-5">

                  {/* Font Size */}
                  <SettingGroup icon={<Type className="h-4 w-4" />} title="Tamaño de texto" value={`${settings.fontSize}%`}>
                    <div className="flex items-center gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-11 w-11"
                        onClick={() => updateSetting('fontSize', Math.max(80, settings.fontSize - 5))}
                        disabled={settings.fontSize <= 80}
                        aria-label="Reducir tamaño de texto"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Slider
                        value={[settings.fontSize]}
                        onValueChange={([v]) => updateSetting('fontSize', v)}
                        min={80}
                        max={150}
                        step={5}
                        className="flex-1"
                        aria-label="Tamaño de texto"
                        aria-valuetext={`${settings.fontSize}%`}
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-11 w-11"
                        onClick={() => updateSetting('fontSize', Math.min(150, settings.fontSize + 5))}
                        disabled={settings.fontSize >= 150}
                        aria-label="Aumentar tamaño de texto"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </SettingGroup>

                  {/* Line Height */}
                  <SettingGroup icon={<ZoomIn className="h-4 w-4" />} title="Altura de línea" value={settings.lineHeight.toFixed(1)}>
                    <Slider
                      value={[settings.lineHeight * 10]}
                      onValueChange={([v]) => updateSetting('lineHeight', v / 10)}
                      min={12}
                      max={22}
                      step={1}
                      aria-label="Altura de línea"
                      aria-valuetext={settings.lineHeight.toFixed(1)}
                    />
                  </SettingGroup>

                  {/* Letter Spacing */}
                  <SettingGroup icon={<Type className="h-4 w-4" />} title="Espaciado de letras" value={`${settings.letterSpacing}px`}>
                    <Slider
                      value={[settings.letterSpacing]}
                      onValueChange={([v]) => updateSetting('letterSpacing', v)}
                      min={0}
                      max={3}
                      step={0.5}
                      aria-label="Espaciado de letras"
                      aria-valuetext={`${settings.letterSpacing} píxeles`}
                    />
                  </SettingGroup>

                  {/* Dyslexic Font */}
                  <SettingRow
                    icon={<Type className="h-4 w-4" />}
                    title="Fuente para dislexia"
                    description="OpenDyslexic, más legible"
                  >
                    <Switch
                      id="accessibility-dyslexic-font"
                      aria-label="Fuente para dislexia"
                      checked={settings.dyslexicFont}
                      onCheckedChange={(v) => updateSetting('dyslexicFont', v)}
                    />
                  </SettingRow>

                  {/* Reduced Motion */}
                  <SettingRow
                    icon={<Eye className="h-4 w-4" />}
                    title="Reducir animaciones"
                    description="Menos movimiento en la interfaz"
                  >
                    <Switch
                      id="accessibility-reduced-motion"
                      aria-label="Reducir animaciones"
                      checked={settings.reducedMotion}
                      onCheckedChange={(v) => updateSetting('reducedMotion', v)}
                    />
                  </SettingRow>

                  {/* Enhanced Focus */}
                  <SettingRow
                    icon={<MousePointer className="h-4 w-4" />}
                    title="Foco mejorado"
                    description="Indicadores de foco más visibles"
                  >
                    <Switch
                      id="accessibility-enhanced-focus"
                      aria-label="Foco mejorado"
                      checked={settings.enhancedFocus}
                      onCheckedChange={(v) => updateSetting('enhancedFocus', v)}
                    />
                  </SettingRow>

                  {/* Large Cursor */}
                  <SettingRow
                    icon={<MousePointer className="h-4 w-4" />}
                    title="Cursor grande"
                    description="Más fácil de ver"
                  >
                    <Switch
                      id="accessibility-large-cursor"
                      aria-label="Cursor grande"
                      checked={settings.cursorSize === 'large'}
                      onCheckedChange={(v) => updateSetting('cursorSize', v ? 'large' : 'normal')}
                    />
                  </SettingRow>

                  {/* Color Filters */}
                  <SettingGroup icon={<Palette className="h-4 w-4" />} title="Filtro de color" value="">
                    <div className="grid grid-cols-2 gap-1.5">
                      {COLOR_FILTERS.map((filter) => (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() => updateSetting('colorFilter', filter.id)}
                          className={cn(
                            'flex min-h-11 items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                            settings.colorFilter === filter.id
                              ? 'bg-primary/10 border-primary/30 text-primary font-medium'
                              : 'border-border hover:bg-accent/50 text-muted-foreground'
                          )}
                          aria-pressed={settings.colorFilter === filter.id}
                        >
                          <span>{filter.emoji}</span>
                          <span>{filter.label}</span>
                        </button>
                      ))}
                    </div>
                  </SettingGroup>

                  {/* Keyboard shortcuts info */}
                  <div className="rounded-lg border border-border bg-muted/30 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Keyboard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-semibold">Atajos de teclado</span>
                    </div>
                    <div className="space-y-1 text-[11px] text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Búsqueda rápida</span>
                        <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">Ctrl+K</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Cerrar diálogo</span>
                        <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">Esc</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Navegar elementos</span>
                        <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">Tab</kbd>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollArea>

              {/* Footer with reset */}
              {hasChanges && (
                <div className="p-3 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs gap-1.5"
                    onClick={resetAll}
                  >
                    <RotateCcw className="h-3 w-3" />
                    Restaurar valores predeterminados
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HELPER COMPONENTS ──────────────────────────────────────────

function SettingGroup({ icon, title, value, children }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{icon}</span>
          <span className="text-xs font-semibold">{title}</span>
        </div>
        {value && <Badge variant="secondary" className="text-[10px]">{value}</Badge>}
      </div>
      {children}
    </div>
  );
}

function SettingRow({ icon, title, description, children }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-start gap-2 flex-1 min-w-0">
        <span className="text-muted-foreground mt-0.5">{icon}</span>
        <div>
          <span className="text-xs font-semibold">{title}</span>
          <p className="text-[10px] text-muted-foreground">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
