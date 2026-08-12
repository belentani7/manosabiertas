'use client';

import { useState } from 'react';
import { Eye, Type, Contrast, Check, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';

const MODES = [
  { value: 'normal' as const, label: 'Normal', icon: Eye, desc: 'Vista estándar' },
  { value: 'study' as const, label: 'Modo Estudio', icon: BookOpen, desc: 'Colores suaves para leer' },
  { value: 'large' as const, label: 'Texto grande', icon: Type, desc: 'Para baja visión' },
  { value: 'high-contrast' as const, label: 'Alto contraste', icon: Contrast, desc: 'Máxima legibilidad' },
];

export function ReadingModeToggle() {
  const { readingMode, setReadingMode } = useAppStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        className="gap-1.5 text-xs h-11"
      >
        {readingMode === 'normal' ? <Eye className="h-3.5 w-3.5" /> : readingMode === 'study' ? <BookOpen className="h-3.5 w-3.5" /> : readingMode === 'large' ? <Type className="h-3.5 w-3.5" /> : <Contrast className="h-3.5 w-3.5" />}
        {readingMode === 'normal' ? 'Normal' : readingMode === 'study' ? 'Estudio' : readingMode === 'large' ? 'Grande' : 'Contraste'}
      </Button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute bottom-full mb-2 right-0 z-50 w-56 bg-card border border-border rounded-xl shadow-xl p-1.5">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1.5">
              Modo de lectura
            </div>
            {MODES.map((mode) => {
              const Icon = mode.icon;
              const active = readingMode === mode.value;
              return (
                <button
                  key={mode.value}
                  onClick={() => { setReadingMode(mode.value); setOpen(false); }}
                  className={cn(
                    'w-full flex items-center gap-2.5 p-2 rounded-lg text-left transition-colors',
                    active ? 'bg-primary/10' : 'hover:bg-accent'
                  )}
                >
                  <Icon className={cn('h-4 w-4 flex-shrink-0', active && 'text-primary')} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium">{mode.label}</div>
                    <div className="text-[10px] text-muted-foreground">{mode.desc}</div>
                  </div>
                  {active && <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
