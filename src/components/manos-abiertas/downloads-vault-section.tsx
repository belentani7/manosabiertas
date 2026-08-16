'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Archive, BookOpen, Folder, FileText, Image, Layers3, Package, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  DOWNLOADS_FEATURED_PACKAGES,
  DOWNLOADS_REFERENCE_DOCS,
  DOWNLOADS_SOURCE_FAMILIES,
  getDownloadsVaultStats,
  type DownloadVaultEntry,
} from '@/data/downloads-vault';

const KIND_META: Record<DownloadVaultEntry['kind'], { label: string; icon: typeof Folder; color: string }> = {
  corpus: { label: 'Colección', icon: Layers3, color: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300' },
  folder: { label: 'Familia', icon: Folder, color: 'bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300' },
  zip: { label: 'Paquete', icon: Archive, color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  doc: { label: 'Documento', icon: FileText, color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' },
  pdf: { label: 'PDF', icon: FileText, color: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' },
  media: { label: 'Media', icon: Image, color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' },
  tool: { label: 'Herramienta', icon: Package, color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300' },
};

export function DownloadsVaultSection() {
  const stats = useMemo(() => getDownloadsVaultStats(), []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <BookOpen className="h-3 w-3" />
          Fuentes recuperadas
        </Badge>
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">Biblioteca didáctica curada</h2>
        <p className="mx-auto max-w-3xl text-sm text-muted-foreground md:text-base">
          Selección pública de materiales útiles para aprender. Cada ficha muestra su estado real de revisión sin exponer rutas, archivos privados ni datos del equipo.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatCard icon={BookOpen} label="Fuentes curadas" value={stats.curatedSources} />
        <StatCard icon={Layers3} label="Familias" value={stats.sourceFamilies} />
        <StatCard icon={Archive} label="Paquetes" value={stats.featuredPackages} />
        <StatCard icon={FileText} label="Referencias" value={stats.referenceDocs} />
      </div>

      <Card className="border-emerald-600/30 bg-emerald-50/60 dark:bg-emerald-950/20">
        <CardContent className="flex gap-3 p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
          <div>
            <h3 className="font-semibold">Privacidad por diseño</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              El inventario técnico completo permanece local. La web publica categorías saneadas y separa claramente material integrado, pendiente de licencia y pendiente de validación.
            </p>
          </div>
        </CardContent>
      </Card>

      <section aria-labelledby="source-families-title">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 id="source-families-title" className="font-semibold">Familias de aprendizaje</h3>
            <p className="text-xs text-muted-foreground">Material agrupado por utilidad educativa, no por carpetas del ordenador.</p>
          </div>
          <Badge variant="outline">{DOWNLOADS_SOURCE_FAMILIES.length} familias</Badge>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {DOWNLOADS_SOURCE_FAMILIES.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.04, 0.16) }}
            >
              <ResourceCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <ResourceList
          title="Paquetes destacados"
          description="Material recuperado con su estado de integración y revisión."
          entries={DOWNLOADS_FEATURED_PACKAGES}
        />
        <ResourceList
          title="Referencias de calidad"
          description="Documentos que apoyan el diseño pedagógico y técnico."
          entries={DOWNLOADS_REFERENCE_DOCS}
        />
      </div>
    </div>
  );
}

function ResourceList({ title, description, entries }: { title: string; description: string; entries: DownloadVaultEntry[] }) {
  return (
    <Card className="border-border/60">
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <Badge variant="outline">{entries.length}</Badge>
        </div>
        <div className="space-y-2">
          {entries.map((entry) => <ResourceCard key={entry.id} entry={entry} />)}
        </div>
      </CardContent>
    </Card>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: typeof Archive; label: string; value: number }) {
  return (
    <Card>
      <CardContent className="p-2.5 text-center">
        <Icon className="mx-auto mb-0.5 h-3.5 w-3.5 text-primary" />
        <div className="text-lg font-bold tabular-nums">{value}</div>
        <div className="text-[9px] text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

function ResourceCard({ entry }: { entry: DownloadVaultEntry }) {
  const meta = KIND_META[entry.kind];
  const Icon = meta.icon;

  return (
    <article className="h-full rounded-lg border border-border/60 p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="rounded-md bg-muted p-2" aria-hidden="true">
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <h4 className="text-sm font-medium">{entry.title}</h4>
            <p className="text-[10px] text-muted-foreground">{entry.location}</p>
          </div>
        </div>
        <Badge variant="outline" className={cn('h-5 shrink-0 text-[9px]', meta.color)}>{meta.label}</Badge>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{entry.summary}</p>
      <div className="mt-2 flex flex-wrap gap-1" aria-label="Temas">
        {entry.tags.map((tag) => (
          <span key={tag} className="rounded bg-muted/70 px-1.5 py-0.5 text-[10px] text-muted-foreground">{tag}</span>
        ))}
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground/90">Estado: {entry.evidence}</p>
    </article>
  );
}
