'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, Search, Globe, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getLanguageDirection, LANGUAGES, LANGUAGE_COUNT } from '@/i18n/languages';
import { getTranslationCoverage, translations } from '@/i18n/translations';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, setLanguageMenuOpen, languageMenuOpen } = useAppStore();
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const dictionaryLocaleCount = Object.keys(translations).length;
  const dictionaryCount = new Set(Object.values(translations)).size;

  const filtered = LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.englishName.toLowerCase().includes(search.toLowerCase()) ||
      l.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!languageMenuOpen) return;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [languageMenuOpen]);

  useEffect(() => {
    if (!languageMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setLanguageMenuOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [languageMenuOpen, setLanguageMenuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setLanguageMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setLanguageMenuOpen]);

  function selectLanguage(code: typeof language) {
    setLanguage(code);
    setLanguageMenuOpen(false);
    setSearch('');
    triggerRef.current?.focus();
  }

  function coverageLabel(code: typeof language) {
    const coverage = getTranslationCoverage(code);
    if (coverage.status === 'complete') return 'Completo';
    if (coverage.status === 'partial') {
      const fallbackName = coverage.fallbackCode === 'es' ? 'español' : 'inglés';
      return `Parcial · ${coverage.percentage}% · resto en ${fallbackName}`;
    }
    return 'Beta · contenido en español';
  }

  return (
    <div ref={containerRef} className="relative">
      <Button
        ref={triggerRef}
        variant="outline"
        size={compact ? 'sm' : 'default'}
        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
        className="min-h-11 gap-2 font-medium"
        aria-label={`Seleccionar idioma. Actual: ${current.name}. ${coverageLabel(current.code)}`}
        aria-expanded={languageMenuOpen}
        aria-haspopup="dialog"
        aria-controls="language-selector-dialog"
      >
        <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-lg leading-none" aria-hidden="true">{current.flag}</span>
        {!compact && <span className="hidden sm:inline">{current.name}</span>}
        <ChevronDown className={cn('h-3 w-3 transition-transform motion-reduce:transition-none', languageMenuOpen && 'rotate-180')} />
      </Button>

      <AnimatePresence>
        {languageMenuOpen && (
          <motion.div
            id="language-selector-dialog"
            role="dialog"
            aria-modal="false"
            aria-labelledby="language-selector-title"
            aria-describedby="language-selector-coverage"
            initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-50 w-80 rounded-xl border border-border bg-card shadow-xl overflow-hidden"
          >
            <div className="p-3 border-b border-border bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <h3 id="language-selector-title" className="text-sm font-semibold flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
                  {LANGUAGE_COUNT} idiomas seleccionables
                </h3>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11"
                  onClick={() => {
                    setLanguageMenuOpen(false);
                    triggerRef.current?.focus();
                  }}
                  aria-label="Cerrar selector de idioma"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <p id="language-selector-coverage" className="mb-3 text-xs text-muted-foreground">
                {dictionaryLocaleCount} códigos servidos por {dictionaryCount} diccionarios · {LANGUAGE_COUNT - dictionaryLocaleCount} beta en español
              </p>
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                <Input
                  ref={inputRef}
                  placeholder="Buscar idioma..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 h-11 text-sm"
                  aria-label="Buscar idioma por nombre o código"
                />
              </div>
            </div>
            <ScrollArea className="h-72">
              <div className="p-1">
                {filtered.map((lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className={cn(
                      'w-full min-h-11 flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-accent transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                      lang.code === language && 'bg-accent/60',
                      lang.rtl && 'flex-row-reverse text-right'
                    )}
                    lang={lang.code}
                    dir={getLanguageDirection(lang.code)}
                    aria-pressed={lang.code === language}
                    aria-label={`${lang.name}, ${lang.englishName}. ${coverageLabel(lang.code)}`}
                  >
                    <span className="text-xl leading-none flex-shrink-0" aria-hidden="true">{lang.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{lang.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{lang.englishName}</div>
                      <Badge variant="secondary" className="mt-1 text-[10px] font-normal">
                        {coverageLabel(lang.code)}
                      </Badge>
                    </div>
                    {lang.code === language && <Check className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />}
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div className="text-center text-sm text-muted-foreground py-6" role="status">
                    No se encontraron idiomas
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
