'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, FileText, ExternalLink, Phone, ChevronLeft, ChevronRight, AlertTriangle, BookOpen, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RIGHTS_ARTICLES, EMERGENCY_CONTACTS, RIGHTS_CATEGORIES, type GuideArticle } from '@/data/rights-guide';
import { useAppStore } from '@/stores/app-store';
import { SimpleMarkdown as SharedMarkdown } from './simple-markdown';
import { TTSButton, TTSPlayer } from './tts-button';
import { LegalGlossary } from './legal-glossary';
import { AIStudyTools } from './ai-study-tools';
import { OfficeMap } from './office-map';
import { getTranslation } from '@/i18n/translations';
import { cn } from '@/lib/utils';

export function RightsSection() {
  const { language } = useAppStore();
  const t = getTranslation(language);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<GuideArticle | null>(null);
  const [view, setView] = useState<'articles' | 'offices' | 'emergency'>('articles');

  const filtered = useMemo(() => {
    return RIGHTS_ARTICLES.filter((a) => {
      const matchesQuery = !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.summary.toLowerCase().includes(query.toLowerCase()) ||
        a.content.toLowerCase().includes(query.toLowerCase());
      const matchesCat = category === 'all' || a.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  if (selectedArticle) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <button onClick={() => setSelectedArticle(null)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ChevronLeft className="h-4 w-4" />
          {t.rights_title}
        </button>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="text-[10px] mb-1 capitalize">{selectedArticle.category}</Badge>
                <h1 className="text-2xl font-bold">{selectedArticle.title}</h1>
                <p className="text-sm text-muted-foreground mt-1">{selectedArticle.summary}</p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <TTSButton text={selectedArticle.content} label="Escuchar" size="sm" />
                <LegalGlossary compact />
              </div>
            </div>

            <ScrollArea className="h-[55vh] pr-4">
              <article className="prose prose-sm dark:prose-invert max-w-none">
                <SharedMarkdown content={selectedArticle.content} />
              </article>

              {selectedArticle.keyPoints && selectedArticle.keyPoints.length > 0 && (
                <div className="mt-6 rounded-xl border border-amber-300/40 bg-amber-50 dark:bg-amber-950/20 p-4">
                  <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-semibold">Puntos clave</span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedArticle.keyPoints.map((p, i) => (
                      <li key={i} className="text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <span className="text-amber-500 font-bold">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedArticle.emergencyPhone && (
                <a href={`tel:${selectedArticle.emergencyPhone.replace(/\s/g, '')}`} className="mt-4 block">
                  <div className="rounded-xl bg-destructive/10 border border-destructive/30 p-4 flex items-center gap-3 hover:bg-destructive/15 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-destructive font-medium">Teléfono de emergencia</div>
                      <div className="text-xl font-bold text-destructive">{selectedArticle.emergencyPhone}</div>
                    </div>
                  </div>
                </a>
              )}

              {selectedArticle.officialLinks && selectedArticle.officialLinks.length > 0 && (
                <div className="mt-4">
                  <div className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Enlaces oficiales
                  </div>
                  <div className="space-y-1.5">
                    {selectedArticle.officialLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-primary/40 hover:bg-accent/30 transition-colors group">
                        <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        <span className="text-sm flex-1">{link.label}</span>
                        <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
        <TTSPlayer text={selectedArticle.content} title={selectedArticle.title} />
        <AIStudyTools content={selectedArticle.content} title={selectedArticle.title} />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="text-center mb-6">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Shield className="h-3 w-3" /> Información verificada 2024-2025
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.rights_title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">{t.rights_subtitle}</p>
      </div>

      {/* Toggle guides / offices / emergency */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex flex-wrap justify-center p-1 bg-muted rounded-lg" aria-label="Secciones de derechos">
          <button
            type="button"
            onClick={() => setView('articles')}
            className={cn('min-h-11 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none', view === 'articles' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground')}
            aria-pressed={view === 'articles'}
          >
            <BookOpen className="h-4 w-4" />
            Guías ({RIGHTS_ARTICLES.length})
          </button>
          <button
            type="button"
            onClick={() => setView('offices')}
            className={cn('min-h-11 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none', view === 'offices' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground')}
            aria-pressed={view === 'offices'}
          >
            <MapPin className="h-4 w-4" />
            Oficinas
          </button>
          <button
            type="button"
            onClick={() => setView('emergency')}
            className={cn('min-h-11 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none', view === 'emergency' ? 'bg-card shadow-sm text-destructive' : 'text-muted-foreground')}
            aria-pressed={view === 'emergency'}
          >
            <Phone className="h-4 w-4" />
            Emergencias ({EMERGENCY_CONTACTS.length})
          </button>
        </div>
      </div>

      {view === 'articles' ? (
        <>
          {/* Search */}
          <Card className="mb-5 border-border/60 sticky top-16 z-30 glass">
            <CardContent className="p-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar: NIE, sanidad, alquiler, paro..." className="pl-9 h-10" />
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <button
                  onClick={() => setCategory('all')}
                  className={cn('text-xs px-2.5 py-1 rounded-full border transition-colors', category === 'all' ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent')}
                >
                  Todas
                </button>
                {RIGHTS_CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    className={cn('text-xs px-2.5 py-1 rounded-full border transition-colors capitalize flex items-center gap-1', category === c.id ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent')}
                  >
                    <span>{c.icon}</span>
                    {c.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Articles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((article, i) => {
              const cat = RIGHTS_CATEGORIES.find((c) => c.id === article.category);
              return (
                <motion.button
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.4) }}
                  onClick={() => setSelectedArticle(article)}
                  className="group text-left"
                >
                  <Card className="card-hover border-border/60 hover:border-primary/40 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{cat?.icon}</span>
                        {article.emergencyPhone && (
                          <Badge variant="destructive" className="text-[10px] gap-1">
                            <Phone className="h-2.5 w-2.5" />
                            {article.emergencyPhone}
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm leading-snug mb-1 line-clamp-2">{article.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{article.summary}</p>
                      <div className="mt-2 text-[10px] text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer más <ChevronRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="py-12 text-center">
                <Shield className="h-10 w-10 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">{t.noResults}</p>
              </CardContent>
            </Card>
          )}
        </>
      ) : view === 'offices' ? (
        <OfficeMap />
      ) : (
        <EmergencyContacts />
      )}
    </div>
  );
}

function EmergencyContacts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {EMERGENCY_CONTACTS.map((contact, i) => (
        <motion.a
          key={contact.id}
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: Math.min(i * 0.02, 0.4) }}
          className="block group"
        >
          <Card className={cn(
            'card-hover border-border/60 hover:border-destructive/40 h-full overflow-hidden',
            contact.available24h && 'border-destructive/20'
          )}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                  contact.available24h ? 'bg-destructive' : 'bg-primary'
                )}>
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-semibold text-sm leading-tight">{contact.name}</h3>
                    {contact.available24h && (
                      <Badge variant="destructive" className="text-[9px] py-0 h-4">24h</Badge>
                    )}
                  </div>
                  <div className="text-xl font-bold text-destructive mb-1">{contact.phone}</div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{contact.description}</p>
                  {contact.languages && contact.languages.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {contact.languages.map((l) => (
                        <Badge key={l} variant="outline" className="text-[9px] py-0 h-4">{l}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.a>
      ))}
    </div>
  );
}

// SimpleMarkdown now uses the shared component from './simple-markdown'
