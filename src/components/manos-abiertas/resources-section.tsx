'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Filter, Database, MapPin, Star, X, Heart, ArrowUpDown, LayoutGrid, List as ListIcon, Download, ShieldCheck, ShieldAlert, Clock3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RESOURCES, RESOURCE_CATEGORIES, REGIONS, getResourceTrust, searchResources, type Resource, type ResourceCategory, type ResourceRegion } from '@/data/resources';
import { useAppStore } from '@/stores/app-store';
import { getTranslation } from '@/i18n/translations';
import { ResourceSubmissionForm } from './resource-submission-form';
import { cn } from '@/lib/utils';
import { LanguageResourceBank } from './language-resource-bank';

const PAGE_SIZE = 24;
const FAV_STORAGE_KEY = 'manos-abiertas-favorites';

function loadFavorites(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const stored = localStorage.getItem(FAV_STORAGE_KEY);
    if (stored) return new Set(JSON.parse(stored));
  } catch { /* ignore */ }
  return new Set();
}

export function ResourcesSection() {
  const { language } = useAppStore();
  const t = getTranslation(language);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ResourceCategory | 'all'>('all');
  const [region, setRegion] = useState<ResourceRegion | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites);
  const [sortBy, setSortBy] = useState<'relevance' | 'az' | 'category'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const trustCounts = useMemo(() => RESOURCES.reduce(
    (counts, resource) => {
      counts[getResourceTrust(resource).status] += 1;
      return counts;
    },
    { verified: 0, 'current-review-due': 0, pending: 0 }
  ), []);

  // Persist favorites whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify([...favorites]));
    } catch { /* ignore */ }
  }, [favorites]);

  function toggleFavorite(id: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function exportFavorites() {
    const favResources = RESOURCES.filter((r) => favorites.has(r.id));
    if (favResources.length === 0) return;

    // Export as HTML (openable in any browser)
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Mis recursos favoritos - Manos Abiertas</title>
<style>
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; color: #333; }
h1 { color: #c2410c; border-bottom: 2px solid #c2410c; padding-bottom: 10px; }
.resource { background: #f9fafb; border-left: 4px solid #c2410c; padding: 12px 16px; margin: 12px 0; border-radius: 4px; }
.resource h3 { margin: 0 0 4px 0; }
.resource a { color: #c2410c; text-decoration: none; }
.resource a:hover { text-decoration: underline; }
.meta { font-size: 12px; color: #6b7280; margin-top: 4px; }
.badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 10px; font-size: 11px; margin-right: 4px; }
.footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
</style>
</head>
<body>
<h1>⭐ Mis recursos favoritos - Manos Abiertas</h1>
<p>Total: ${favResources.length} recursos guardados el ${new Date().toLocaleDateString('es')}</p>
${favResources.map((r) => {
  const cat = RESOURCE_CATEGORIES.find((c) => c.value === r.category);
  const reg = REGIONS.find((rr) => rr.value === r.region);
  const trust = getResourceTrust(r);
  const trustLabel = trust.status === 'verified'
    ? 'Vigente según fecha registrada'
    : trust.status === 'current-review-due'
      ? 'Revisión vencida'
      : 'Pendiente de revisión';
  const trustText = `${trustLabel} · Fuente: ${trust.source || 'no documentada'}${trust.verifiedAt ? ` · Revisado: ${trust.verifiedAt}` : ''}${trust.reviewDueAt ? ` · Próxima revisión: ${trust.reviewDueAt}` : ''}${trust.reviewedBy ? ` · Responsable: ${trust.reviewedBy}` : ''}`;
  const evidenceText = trust.evidenceUrl
    ? `<br>Evidencia: <a href="${trust.evidenceUrl}" target="_blank" rel="noopener noreferrer">${trust.evidenceUrl}</a>`
    : '';
  return `<div class="resource">
<h3>${cat?.icon || '🔗'} ${r.title}</h3>
<p>${r.description}</p>
<p><a href="${r.url}" target="_blank">${r.url}</a></p>
<div class="meta">
<span class="badge">${cat?.label || r.category}</span>
${reg ? `<span class="badge">${reg.label}</span>` : ''}
${r.free ? '<span class="badge">✓ Gratis</span>' : ''}
${trustText}${evidenceText}
</div>
</div>`;
}).join('')}
<div class="footer">
Generado por Manos Abiertas · ${new Date().toLocaleDateString('es')}<br>
Plataforma gratuita para personas inmigrantes en España
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `manos-abiertas-favoritos-${new Date().toISOString().slice(0, 10)}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const results = useMemo(() => {
    let r = searchResources(query, { category, region });
    if (showFavoritesOnly) r = r.filter((x) => favorites.has(x.id));
    // Apply sorting
    if (sortBy === 'az') {
      r = [...r].sort((a, b) => a.title.localeCompare(b.title, 'es'));
    } else if (sortBy === 'category') {
      r = [...r].sort((a, b) => {
        const catCompare = a.category.localeCompare(b.category);
        return catCompare !== 0 ? catCompare : a.title.localeCompare(b.title, 'es');
      });
    }
    // 'relevance' keeps default order (which prioritizes official resources)
    return r;
  }, [query, category, region, showFavoritesOnly, favorites, sortBy]);

  const visibleResults = results.slice(0, visibleCount);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    RESOURCES.forEach((r) => { counts[r.category] = (counts[r.category] || 0) + 1; });
    return counts;
  }, []);

  function resetFilters() {
    setQuery('');
    setCategory('all');
    setRegion('all');
    setShowFavoritesOnly(false);
    setSortBy('relevance');
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="text-center mb-6">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Database className="h-3 w-3" />
          {RESOURCES.length.toLocaleString()} {t.resources_total}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.resources_title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mb-2">
          Catálogo con trazabilidad explícita. La vigencia describe la fecha registrada, no una comprobación en tiempo real.
        </p>
        <p className="text-xs text-muted-foreground mb-3" aria-live="polite">
          {trustCounts.verified.toLocaleString()} vigentes por fecha · {trustCounts['current-review-due'].toLocaleString()} con revisión vencida · {trustCounts.pending.toLocaleString()} pendientes
        </p>
        <ResourceSubmissionForm />
      </div>

      <LanguageResourceBank />

      {/* Search & filters */}
      <Card className="mb-5 border-border/60 sticky top-16 z-30 glass">
        <CardContent className="p-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisibleCount(PAGE_SIZE); }}
                placeholder={t.search_placeholder}
                className="pl-9 h-10"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Select value={category} onValueChange={(v) => { setCategory(v as ResourceCategory | 'all'); setVisibleCount(PAGE_SIZE); }}>
              <SelectTrigger className="w-full sm:w-48 h-10">
                <Filter className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                <SelectValue placeholder={t.resources_filterCategory} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                {RESOURCE_CATEGORIES.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.icon} {c.label} ({categoryCounts[c.value] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={region} onValueChange={(v) => { setRegion(v as ResourceRegion | 'all'); setVisibleCount(PAGE_SIZE); }}>
              <SelectTrigger className="w-full sm:w-44 h-10">
                <MapPin className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                <SelectValue placeholder={t.resources_filterRegion} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toda España</SelectItem>
                {REGIONS.map((r) => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              {results.length.toLocaleString()} resultado{results.length !== 1 ? 's' : ''}
              {(category !== 'all' || region !== 'all' || query) && (
                <button onClick={resetFilters} className="ml-2 text-primary hover:underline">Limpiar filtros</button>
              )}
            </span>
            <div className="flex items-center gap-2">
              {favorites.size > 0 && (
                <button
                  onClick={() => { setShowFavoritesOnly(!showFavoritesOnly); setVisibleCount(PAGE_SIZE); }}
                  className={cn(
                    'inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border transition-colors',
                    showFavoritesOnly
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'border-amber-300 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                  )}
                >
                  <Star className={cn('h-3 w-3', showFavoritesOnly && 'fill-white')} />
                  {favorites.size} favorito{favorites.size !== 1 ? 's' : ''}
                  {showFavoritesOnly && ' · ver solo'}
                </button>
              )}
              {/* Export favorites button */}
              {favorites.size > 0 && (
                <button
                  onClick={exportFavorites}
                  className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  title="Exportar favoritos como HTML"
                >
                  <Download className="h-3 w-3" />
                  Exportar
                </button>
              )}
              {/* Sort dropdown */}
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                <SelectTrigger className="h-7 w-auto text-[11px] gap-1 border-border/60">
                  <ArrowUpDown className="h-3 w-3" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance" className="text-xs">Relevancia</SelectItem>
                  <SelectItem value="az" className="text-xs">Nombre (A-Z)</SelectItem>
                  <SelectItem value="category" className="text-xs">Por categoría</SelectItem>
                </SelectContent>
              </Select>
              {/* View toggle */}
              <div className="flex items-center border border-border/60 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn('p-1 transition-colors', viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent')}
                  aria-label="Vista de cuadrícula"
                  title="Vista de tarjetas"
                >
                  <LayoutGrid className="h-3 w-3" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn('p-1 transition-colors', viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent')}
                  aria-label="Vista de lista"
                  title="Vista compacta"
                >
                  <ListIcon className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results grid */}
      {visibleResults.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <Database className="h-10 w-10 mx-auto mb-2 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">{t.noResults}</p>
            <Button variant="outline" size="sm" onClick={resetFilters} className="mt-3">Ver todos los recursos</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className={cn(
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
              : 'flex flex-col gap-1.5'
          )}>
            {visibleResults.map((resource, i) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                isFavorite={favorites.has(resource.id)}
                onToggleFavorite={() => toggleFavorite(resource.id)}
                index={i}
                viewMode={viewMode}
              />
            ))}
          </div>

          {visibleCount < results.length && (
            <div className="mt-6 text-center">
              <Button
                onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
                variant="outline"
                className="gap-2"
              >
                Cargar más ({results.length - visibleCount} restantes)
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Color mapping for categories - allows visual scanning
const CATEGORY_COLORS: Record<ResourceCategory, { bg: string; text: string; border: string; dot: string }> = {
  legal: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-200 dark:border-rose-900', dot: 'bg-rose-500' },
  documentation: { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200 dark:border-amber-900', dot: 'bg-amber-500' },
  health: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-900', dot: 'bg-emerald-500' },
  housing: { bg: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-900', dot: 'bg-orange-500' },
  work: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-900', dot: 'bg-blue-500' },
  education: { bg: 'bg-violet-50 dark:bg-violet-950/30', text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-200 dark:border-violet-900', dot: 'bg-violet-500' },
  emergency: { bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-700 dark:text-red-300', border: 'border-red-200 dark:border-red-900', dot: 'bg-red-600' },
  banking: { bg: 'bg-teal-50 dark:bg-teal-950/30', text: 'text-teal-700 dark:text-teal-300', border: 'border-teal-200 dark:border-teal-900', dot: 'bg-teal-500' },
  'ai-tools': { bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30', text: 'text-fuchsia-700 dark:text-fuchsia-300', border: 'border-fuchsia-200 dark:border-fuchsia-900', dot: 'bg-fuchsia-500' },
  'office-learning': { bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-900', dot: 'bg-indigo-500' },
  'cv-tools': { bg: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-200 dark:border-cyan-900', dot: 'bg-cyan-500' },
  ngos: { bg: 'bg-pink-50 dark:bg-pink-950/30', text: 'text-pink-700 dark:text-pink-300', border: 'border-pink-200 dark:border-pink-900', dot: 'bg-pink-500' },
  government: { bg: 'bg-slate-50 dark:bg-slate-950/30', text: 'text-slate-700 dark:text-slate-300', border: 'border-slate-200 dark:border-slate-800', dot: 'bg-slate-500' },
  'github-learning': { bg: 'bg-gray-50 dark:bg-gray-950/30', text: 'text-gray-700 dark:text-gray-300', border: 'border-gray-200 dark:border-gray-800', dot: 'bg-gray-600' },
  transport: { bg: 'bg-lime-50 dark:bg-lime-950/30', text: 'text-lime-700 dark:text-lime-300', border: 'border-lime-200 dark:border-lime-900', dot: 'bg-lime-600' },
  family: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-900', dot: 'bg-purple-500' },
  'language-learning': { bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-700 dark:text-green-300', border: 'border-green-200 dark:border-green-900', dot: 'bg-green-600' },
};

function formatVerificationDate(value: string): string {
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function ResourceTrustIndicator({ resource, compact = false }: { resource: Resource; compact?: boolean }) {
  const trust = getResourceTrust(resource);
  const verified = trust.status === 'verified';
  const reviewDue = trust.status === 'current-review-due';
  const statusLabel = verified
    ? 'Vigente según fecha registrada'
    : reviewDue
      ? 'Revisión vencida'
      : 'Pendiente de revisión';
  const sourceText = trust.source ? `Fuente: ${trust.source}` : 'Fuente no documentada';
  const dateText = trust.verifiedAt
    ? `Revisado: ${formatVerificationDate(trust.verifiedAt)}${trust.reviewDueAt ? ` · revisión requerida: ${formatVerificationDate(trust.reviewDueAt)}` : ''}`
    : resource.verifiedAt
      ? `Fecha declarada no válida: ${resource.verifiedAt}`
      : 'Sin fecha de revisión';
  const reviewerText = trust.reviewedBy ? ` · Responsable: ${trust.reviewedBy}` : '';

  return (
    <div
      className={cn(
        'flex items-center gap-1.5 min-w-0',
        compact ? 'text-[10px]' : 'rounded-md border px-2 py-1 text-[10px]',
        verified
          ? 'text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30'
          : reviewDue
            ? 'text-red-800 dark:text-red-300 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30'
            : 'text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30'
      )}
      title={`${statusLabel}. ${sourceText}. ${dateText}${reviewerText}`}
    >
      {verified && <ShieldCheck className="h-3 w-3 flex-shrink-0" aria-hidden="true" />}
      {reviewDue && <ShieldAlert className="h-3 w-3 flex-shrink-0" aria-hidden="true" />}
      {!verified && !reviewDue && <Clock3 className="h-3 w-3 flex-shrink-0" aria-hidden="true" />}
      <span className="font-semibold flex-shrink-0">{statusLabel}</span>
      <span className="truncate">· {sourceText} · {dateText}{reviewerText}</span>
      {trust.evidenceUrl && (
        <a
          href={trust.evidenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 flex-shrink-0"
          aria-label={`Abrir evidencia de ${resource.title}`}
        >
          Evidencia
        </a>
      )}
    </div>
  );
}

function ResourceCard({ resource, isFavorite, onToggleFavorite, index, viewMode = 'grid' }: { resource: Resource; isFavorite: boolean; onToggleFavorite: () => void; index: number; viewMode?: 'grid' | 'list' }) {
  const cat = RESOURCE_CATEGORIES.find((c) => c.value === resource.category);
  const reg = REGIONS.find((r) => r.value === resource.region);
  const colors = CATEGORY_COLORS[resource.category] || CATEGORY_COLORS.government;

  // List view: compact horizontal layout
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: Math.min(index * 0.01, 0.2) }}
      >
        <div className="group flex items-center gap-3 p-2.5 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-accent/20 transition-all relative overflow-hidden">
          {/* Left color bar */}
          <div className={cn('absolute left-0 top-0 bottom-0 w-1', colors.dot)} />
          <span className="text-lg flex-shrink-0 ml-1.5">{cat?.icon}</span>
          <div className="flex-1 min-w-0">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm hover:text-primary transition-colors line-clamp-1 flex items-center gap-1"
            >
              {resource.title}
            </a>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-0.5">
              <span className={cn('px-1.5 py-0 rounded-full', colors.bg, colors.text)}>{cat?.label}</span>
              {reg && <span className="flex items-center gap-0.5"><MapPin className="h-2.5 w-2.5" />{reg.label}</span>}
              <ResourceTrustIndicator resource={resource} compact />
              {resource.free && <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ Gratis</span>}
              {resource.license && <span className="truncate">{resource.license}</span>}
            </div>
          </div>
          <button
            onClick={onToggleFavorite}
            className={cn(
              'p-1 rounded transition-colors flex-shrink-0',
              isFavorite ? 'text-amber-500' : 'text-muted-foreground/40 hover:text-amber-500'
            )}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            <Star className={cn('h-3.5 w-3.5', isFavorite && 'fill-amber-500')} />
          </button>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary flex-shrink-0"
            aria-label="Abrir recurso"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.div>
    );
  }

  // Grid view: full card (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.4) }}
    >
      <Card className="card-hover border-border/60 hover:border-primary/40 h-full overflow-hidden group relative">
        {/* Color strip at top for category scanning */}
        <div className={cn('h-1 w-full', colors.dot)} />
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex items-start justify-between gap-2 mb-2">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors', colors.bg, colors.text, 'hover:opacity-80')}
              title={cat?.label}
            >
              <span className="text-sm">{cat?.icon}</span>
              {cat?.label}
            </a>
            <button
              onClick={onToggleFavorite}
              className={cn(
                'p-1 rounded-md transition-colors',
                isFavorite ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' : 'text-muted-foreground/60 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40'
              )}
              aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            >
              <Star className={cn('h-4 w-4', isFavorite && 'fill-amber-500')} />
            </button>
          </div>

          {/* Clickable title */}
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sm leading-snug mb-1 line-clamp-2 hover:text-primary transition-colors group/title"
          >
            {resource.title}
            <ExternalLink className="inline-block h-3 w-3 ml-1 opacity-0 group-hover/title:opacity-100 transition-opacity" />
          </a>
          <p className="text-xs text-muted-foreground/90 line-clamp-2 mb-2 flex-1">{resource.description}</p>

          <div className="flex flex-wrap items-center gap-1.5 mb-2 text-[10px]">
            {reg && (
              <span className="inline-flex items-center gap-0.5 text-muted-foreground font-medium">
                <MapPin className="h-2.5 w-2.5" />
                {reg.label}
              </span>
            )}
            {resource.free && (
              <Badge className="text-[9px] py-0 h-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200">
                ✓ Gratis
              </Badge>
            )}
            {resource.format && <Badge variant="outline" className="text-[9px] py-0 h-4">{resource.format}</Badge>}
          </div>

          <ResourceTrustIndicator resource={resource} />
          {resource.license && <div className="text-[10px] text-muted-foreground truncate">Licencia: {resource.license}</div>}
        </CardContent>
      </Card>
    </motion.div>
  );
}
