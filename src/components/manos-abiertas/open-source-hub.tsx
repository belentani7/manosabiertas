'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Search, X, Star, ExternalLink, Code, Key, Zap, BookOpen, Filter, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ALL_REPOS, FREE_APIS, REPO_CATEGORIES, getRepoStats, type GitHubRepo, type RepoCategory } from '@/data/open-source-hub';
import { cn } from '@/lib/utils';

const DIFFICULTY_LABELS = {
  beginner: { label: 'Principiante', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' },
  intermediate: { label: 'Intermedio', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  advanced: { label: 'Avanzado', color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' },
};

const AUTH_LABELS = {
  none: { label: 'Sin auth', icon: Zap, color: 'bg-emerald-100 text-emerald-700' },
  apiKey: { label: 'API Key', icon: Key, color: 'bg-amber-100 text-amber-700' },
  oauth: { label: 'OAuth', icon: Key, color: 'bg-blue-100 text-blue-700' },
};

export function OpenSourceHub() {
  const [activeTab, setActiveTab] = useState<'repos' | 'apis'>('repos');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<RepoCategory | 'all'>('all');

  const stats = useMemo(() => getRepoStats(), []);

  const filteredRepos = useMemo(() => {
    return ALL_REPOS.filter((r) => {
      const matchesQuery = !query ||
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase()) ||
        r.topics.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCat = category === 'all' || r.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  const filteredApis = useMemo(() => {
    return FREE_APIS.filter((a) =>
      !query ||
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.description.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Github className="h-6 w-6 text-primary" />
          Hub de Código Abierto
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {ALL_REPOS.length} repositorios GitHub + {FREE_APIS.length} APIs gratuitas para aprender
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        <Card><CardContent className="p-3 text-center">
          <Github className="h-4 w-4 mx-auto mb-1 text-primary" />
          <div className="text-lg font-bold">{stats.total}</div>
          <div className="text-[10px] text-muted-foreground">Repositorios</div>
        </CardContent></Card>
        <Card><CardContent className="p-3 text-center">
          <Zap className="h-4 w-4 mx-auto mb-1 text-amber-500" />
          <div className="text-lg font-bold">{stats.apis}</div>
          <div className="text-[10px] text-muted-foreground">APIs Gratis</div>
        </CardContent></Card>
        <Card><CardContent className="p-3 text-center">
          <BookOpen className="h-4 w-4 mx-auto mb-1 text-emerald-500" />
          <div className="text-lg font-bold">{ALL_REPOS.filter(r => r.hasTutorial).length}</div>
          <div className="text-[10px] text-muted-foreground">Con Tutorial</div>
        </CardContent></Card>
      </div>

      {/* Tab toggle */}
      <div className="inline-flex p-1 bg-muted rounded-lg">
        <button
          onClick={() => setActiveTab('repos')}
          className={cn('px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5',
            activeTab === 'repos' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground')}
        >
          <Github className="h-3.5 w-3.5" />
          Repositorios ({ALL_REPOS.length})
        </button>
        <button
          onClick={() => setActiveTab('apis')}
          className={cn('px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5',
            activeTab === 'apis' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground')}
        >
          <Zap className="h-3.5 w-3.5" />
          APIs Gratis ({FREE_APIS.length})
        </button>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={activeTab === 'repos' ? "Buscar repo, tema, lenguaje..." : "Buscar API por nombre o categoría..."}
            className="pl-9"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
        {activeTab === 'repos' && (
          <div className="flex flex-wrap gap-1.5">
            <button onClick={() => setCategory('all')}
              className={cn('text-xs px-2.5 py-1 rounded-full border', category === 'all' ? 'bg-primary text-primary-foreground border-primary' : 'border-border')}>
              Todos ({ALL_REPOS.length})
            </button>
            {REPO_CATEGORIES.map((c) => {
              const count = stats.byCategory[c.value] || 0;
              if (count === 0) return null;
              return (
                <button key={c.value} onClick={() => setCategory(c.value)}
                  className={cn('text-xs px-2.5 py-1 rounded-full border flex items-center gap-1',
                    category === c.value ? 'bg-primary text-primary-foreground border-primary' : 'border-border')}>
                  {c.emoji} {c.label} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Results */}
      {activeTab === 'repos' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredRepos.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredApis.map((api, i) => (
            <ApiCard key={api.id} api={api} index={i} />
          ))}
        </div>
      )}

      {filteredRepos.length === 0 && filteredApis.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <Search className="h-10 w-10 mx-auto mb-2 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">No se encontraron resultados</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const cat = REPO_CATEGORIES.find((c) => c.value === repo.category);
  const diff = DIFFICULTY_LABELS[repo.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.3) }}
    >
      <Card className="card-hover border-border/60 hover:border-primary/40 h-full overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-slate-700 to-slate-900" />
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate">{repo.name}</div>
                <div className="text-[10px] text-muted-foreground">{repo.owner}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
              <span className="text-[10px] font-bold">{repo.stars}</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{repo.description}</p>

          <div className="flex items-center gap-1.5 flex-wrap mb-2">
            {cat && <Badge variant="outline" className={cn('text-[9px] py-0 h-4', cat.color)}>{cat.emoji} {cat.label}</Badge>}
            <Badge variant="outline" className={cn('text-[9px] py-0 h-4', diff.color)}>{diff.label}</Badge>
            <Badge variant="outline" className="text-[9px] py-0 h-4">
              <Code className="h-2.5 w-2.5 mr-0.5" />
              {repo.language}
            </Badge>
            {repo.hasTutorial && (
              <Badge className="text-[9px] py-0 h-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <BookOpen className="h-2.5 w-2.5 mr-0.5" />
                Tutorial
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            {repo.topics.slice(0, 4).map((t) => (
              <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground">{t}</span>
            ))}
          </div>

          <a href={repo.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
            <ExternalLink className="h-3 w-3" />
            Ver en GitHub
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ApiCard({ api, index }: { api: import('@/data/open-source-hub').FreeAPI; index: number }) {
  const auth = AUTH_LABELS[api.auth];
  const AuthIcon = auth.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.3) }}
    >
      <Card className="card-hover border-border/60 hover:border-primary/40 h-full overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-orange-600" />
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <Zap className="h-4 w-4 text-amber-500 flex-shrink-0" />
              <div className="font-semibold text-sm truncate">{api.name}</div>
            </div>
            {api.free && (
              <Badge className="text-[9px] py-0 h-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                Gratis
              </Badge>
            )}
          </div>

          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{api.description}</p>

          <div className="flex items-center gap-1.5 flex-wrap mb-2">
            <Badge variant="outline" className="text-[9px] py-0 h-4">{api.category}</Badge>
            <Badge variant="outline" className={cn('text-[9px] py-0 h-4', auth.color)}>
              <AuthIcon className="h-2.5 w-2.5 mr-0.5" />
              {auth.label}
            </Badge>
            {api.rateLimit && (
              <Badge variant="outline" className="text-[9px] py-0 h-4">
                {api.rateLimit}
              </Badge>
            )}
          </div>

          <a href={api.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
            <ExternalLink className="h-3 w-3" />
            Ver documentación
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
