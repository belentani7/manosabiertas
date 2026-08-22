'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Search, X, ExternalLink, Clock, Award, Filter, CheckCircle2, Circle, BookOpen, Users, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EXTERNAL_COURSES, COURSE_CATEGORIES, getCourseStats, type ExternalCourse, type CourseCategory } from '@/data/external-courses';
import { NoiaCoreAcademy } from './noia-core-academy';
import { OpenSourceHub } from './open-source-hub';
import { Level0Academy } from './level0-academy';
import { MasterCurriculumAcademy } from './master-curriculum-academy';
import { MasterStationApp } from './master-station-app';
import { GeneratedCoursesAcademy } from './generated-courses-academy';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 12;
const PROGRESS_KEY = 'manos-abiertas-course-progress';

interface CourseProgress {
  [courseId: string]: 'started' | 'completed';
}

function loadProgress(): CourseProgress {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return {};
}

const LEVEL_LABELS = {
  beginner: { label: 'Principiante', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' },
  intermediate: { label: 'Intermedio', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  advanced: { label: 'Avanzado', color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' },
};

const PROVIDER_COLORS: Record<string, string> = {
  government: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  university: 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400',
  platform: 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400',
  ngo: 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400',
  private: 'bg-slate-50 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400',
};

export function CoursesLibrarySection() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CourseCategory | 'all'>('all');
  const [level, setLevel] = useState<string>('all');
  const [certOnly, setCertOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [progress, setProgress] = useState<CourseProgress>(loadProgress);
  const [activeTab, setActiveTab] = useState<'own' | 'level0' | 'master' | 'visionary' | 'omegamax' | 'external' | 'noia' | 'opensource'>('omegamax');

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch { /* ignore */ }
  }, [progress]);

  const stats = useMemo(() => getCourseStats(), []);

  const filtered = useMemo(() => {
    return EXTERNAL_COURSES.filter((c) => {
      const matchesQuery = !query ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.provider.toLowerCase().includes(query.toLowerCase()) ||
        c.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const matchesCat = category === 'all' || c.category === category;
      const matchesLevel = level === 'all' || c.level === level;
      const matchesCert = !certOnly || c.certification;
      return matchesQuery && matchesCat && matchesLevel && matchesCert;
    });
  }, [query, category, level, certOnly]);

  const visibleResults = filtered.slice(0, visibleCount);

  function toggleProgress(courseId: string) {
    setProgress((prev) => {
      const next = { ...prev };
      const current = prev[courseId];
      if (current === 'completed') {
        delete next[courseId];
        toast.success('Progreso eliminado');
      } else if (current === 'started') {
        next[courseId] = 'completed';
        toast.success('¡Curso completado! 🎉');
      } else {
        next[courseId] = 'started';
        toast.success('Curso marcado como iniciado 📚');
      }
      return next;
    });
  }

  function resetFilters() {
    setQuery('');
    setCategory('all');
    setLevel('all');
    setCertOnly(false);
    setVisibleCount(PAGE_SIZE);
  }

  const hasFilters = query || category !== 'all' || level !== 'all' || certOnly;
  const startedCount = Object.values(progress).filter((v) => v === 'started').length;
  const completedCount = Object.values(progress).filter((v) => v === 'completed').length;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="text-center mb-4">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <GraduationCap className="h-3 w-3" />
          {EXTERNAL_COURSES.length + 29} cursos en total
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Biblioteca de Cursos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Cursos propios y externos. Todo el contenido educativo de Manos Abiertas es gratuito.
        </p>
      </div>

      {/* Tab toggle: Level 0 + External Courses + NO.IA_CORE + Open Source */}
      <div className="flex w-full justify-center mb-6">
        <div className="grid w-full max-w-4xl grid-cols-2 gap-1 rounded-lg bg-muted p-1 sm:flex sm:flex-wrap sm:justify-center">
          <button
            onClick={() => setActiveTab('own')}
            className={cn(
              'min-w-0 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5',
              activeTab === 'own' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Cursos propios (7)
          </button>
          <button
            onClick={() => setActiveTab('level0')}
            className={cn(
              'min-w-0 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5',
              activeTab === 'level0' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <span className="text-base">🌱</span>
            Nivel 0
          </button>
          <button
            onClick={() => setActiveTab('master')}
            className={cn(
              'min-w-0 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5',
              activeTab === 'master' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <span className="text-base">🌍</span>
            Currículo 1.000 puntos
          </button>
          <button
            onClick={() => setActiveTab('omegamax')}
            className={cn(
              'min-w-0 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 shadow-sm',
              activeTab === 'omegamax' ? 'bg-indigo-600 text-white shadow-md' : 'bg-card text-foreground hover:bg-muted'
            )}
          >
            <span className="text-base">🛡️</span>
            Estación integrada
          </button>
          <button
            onClick={() => setActiveTab('external')}
            className={cn(
              'min-w-0 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5',
              activeTab === 'external' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Cursos Externos ({EXTERNAL_COURSES.length})
          </button>
          <button
            onClick={() => setActiveTab('noia')}
            className={cn(
              'min-w-0 px-2 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5',
              activeTab === 'noia' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <span className="text-base">👑</span>
            NO.IA_CORE Academy (20, gratis)
          </button>
          <button
            onClick={() => setActiveTab('opensource')}
            className={cn(
              'min-w-0 px-2 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5',
              activeTab === 'opensource' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Github className="h-3.5 w-3.5" />
            Open Source (50+50)
          </button>
        </div>
      </div>

      {/* Nivel 0 */}
      {activeTab === 'level0' && <Level0Academy />}

      {/* Currículo maestro de 1.000 puntos */}
      {activeTab === 'master' && <MasterCurriculumAcademy />}

      {/* Estación nativa integrada: CV, IA, Linux y Windows */}
      {activeTab === 'omegamax' && <MasterStationApp />}

      {/* Cursos propios */}
      {activeTab === 'own' && <GeneratedCoursesAcademy />}

      {/* NO.IA_CORE Academy */}
      {activeTab === 'noia' && <NoiaCoreAcademy />}

      {/* Open Source Hub */}
      {activeTab === 'opensource' && <OpenSourceHub />}

      {/* External Courses */}
      {activeTab === 'external' && (
        <>
      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <StatCard icon={BookOpen} label="Cursos" value={stats.total} color="text-primary" />
        <StatCard icon={Award} label="Con certificado" value={stats.withCert} color="text-amber-600 dark:text-amber-400" />
        <StatCard icon={Users} label="Iniciados" value={startedCount} color="text-blue-600 dark:text-blue-400" />
        <StatCard icon={CheckCircle2} label="Completados" value={completedCount} color="text-emerald-600 dark:text-emerald-400" />
      </div>

      {/* Search & filters */}
      <Card className="mb-5 border-border/60 sticky top-16 z-30 glass">
        <CardContent className="p-3 space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisibleCount(PAGE_SIZE); }}
                placeholder="Buscar curso, habilidad, proveedor..."
                className="pl-9"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            <Select value={category} onValueChange={(v) => { setCategory(v as CourseCategory | 'all'); setVisibleCount(PAGE_SIZE); }}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                {COURSE_CATEGORIES.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.emoji} {c.label} ({stats.byCategory[c.value] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={level} onValueChange={(v) => { setLevel(v); setVisibleCount(PAGE_SIZE); }}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los niveles</SelectItem>
                <SelectItem value="beginner">Principiante</SelectItem>
                <SelectItem value="intermediate">Intermedio</SelectItem>
                <SelectItem value="advanced">Avanzado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              {filtered.length} curso{filtered.length !== 1 ? 's' : ''}
              {hasFilters && <button onClick={resetFilters} className="ml-2 text-primary hover:underline">Limpiar</button>}
            </span>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={certOnly} onChange={(e) => { setCertOnly(e.target.checked); setVisibleCount(PAGE_SIZE); }} className="rounded" />
              <Award className="h-3.5 w-3.5" />
              Solo con certificado
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {visibleResults.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <Search className="h-10 w-10 mx-auto mb-2 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">No se encontraron cursos</p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visibleResults.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                progress={progress[course.id]}
                onToggleProgress={() => toggleProgress(course.id)}
                index={i}
              />
            ))}
          </div>
          {visibleCount < filtered.length && (
            <div className="mt-6 text-center">
              <Button onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)} variant="outline" className="gap-2">
                Cargar más ({filtered.length - visibleCount} restantes)
              </Button>
            </div>
          )}
        </>
      )}
        </>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: { icon: typeof BookOpen; label: string; value: number; color: string }) {
  return (
    <Card>
      <CardContent className="p-2.5 text-center">
        <Icon className={cn('h-3.5 w-3.5 mx-auto mb-0.5', color)} />
        <div className="text-lg font-bold tabular-nums">{value}</div>
        <div className="text-[9px] text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

function CourseCard({ course, progress, onToggleProgress, index }: { course: ExternalCourse; progress?: 'started' | 'completed'; onToggleProgress: () => void; index: number }) {
  const cat = COURSE_CATEGORIES.find((c) => c.value === course.category);
  const lvl = LEVEL_LABELS[course.level];
  const providerColor = PROVIDER_COLORS[course.providerType] || PROVIDER_COLORS.platform;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.3) }}
    >
      <Card className={cn(
        'card-hover border-border/60 hover:border-primary/40 h-full overflow-hidden relative',
        progress === 'completed' && 'border-emerald-300 dark:border-emerald-800',
        progress === 'started' && 'border-blue-300 dark:border-blue-800'
      )}>
        {/* Progress indicator strip */}
        {progress && (
          <div className={cn('h-1 w-full', progress === 'completed' ? 'bg-emerald-500' : 'bg-blue-500')} />
        )}
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{course.emoji}</span>
              <Badge variant="outline" className={cn('text-[9px] py-0 h-4', cat?.color)}>
                {cat?.emoji} {cat?.label}
              </Badge>
            </div>
            <button
              onClick={onToggleProgress}
              className={cn(
                'p-1 rounded-md transition-colors flex-shrink-0',
                progress === 'completed' ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' :
                progress === 'started' ? 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' :
                'text-muted-foreground/40 hover:text-primary hover:bg-accent'
              )}
              aria-label={progress === 'completed' ? 'Completado' : progress === 'started' ? 'En progreso' : 'Marcar progreso'}
              title={progress === 'completed' ? 'Completado ✓' : progress === 'started' ? 'En progreso' : 'Marcar como iniciado'}
            >
              {progress === 'completed' ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            </button>
          </div>

          {/* Title */}
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sm leading-snug hover:text-primary transition-colors block mb-1 line-clamp-2"
          >
            {course.title}
          </a>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{course.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 mb-2">
            {course.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="text-[10px] px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground">
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="text-[10px] text-muted-foreground">+{course.skills.length - 3}</span>
            )}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 flex-wrap text-[10px] text-muted-foreground">
            <span className={cn('px-1.5 py-0.5 rounded-full font-medium', providerColor)}>
              {course.provider}
            </span>
            <span className="flex items-center gap-0.5">
              <Clock className="h-2.5 w-2.5" />
              {course.duration}
            </span>
            <Badge variant="outline" className={cn('text-[9px] py-0 h-4', lvl.color)}>
              {lvl.label}
            </Badge>
            {course.certification && (
              <Badge className="text-[9px] py-0 h-4 bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 hover:bg-amber-200">
                <Award className="h-2.5 w-2.5 mr-0.5" />
                Certificado
              </Badge>
            )}
          </div>

          {/* CTA */}
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            {course.free ? 'Acceder gratis' : 'Más información'}
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
