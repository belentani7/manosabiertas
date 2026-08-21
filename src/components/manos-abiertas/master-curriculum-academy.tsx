'use client';

import { useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, Clock3, Search, ShieldCheck, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MASTER_CURRICULUM, MASTER_LESSONS, getMasterCurriculumStats, type MasterLesson } from '@/data/master-curriculum';

const PAGE_SIZE = 12;
const PROGRESS_KEY = 'manos-abiertas-master-curriculum-progress';

export function MasterCurriculumAcademy() {
  const [query, setQuery] = useState('');
  const [areaId, setAreaId] = useState('all');
  const [level, setLevel] = useState('all');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<MasterLesson | null>(null);
  const [completed, setCompleted] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? '[]'); } catch { return []; }
  });
  const stats = getMasterCurriculumStats();

  const filtered = useMemo(() => MASTER_LESSONS.filter((lesson) => {
    const haystack = `${lesson.title} ${lesson.focus} ${lesson.objective} ${lesson.explanation}`.toLowerCase();
    return (!query || haystack.includes(query.toLowerCase()))
      && (areaId === 'all' || lesson.id.startsWith(`${areaId}-`))
      && (level === 'all' || lesson.level === Number(level));
  }), [areaId, level, query]);

  const markComplete = (lessonId: string) => {
    setCompleted((previous) => {
      const next = previous.includes(lessonId) ? previous : [...previous, lessonId];
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <section className="space-y-5" aria-labelledby="master-curriculum-title">
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card">
        <CardContent className="p-5 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <Badge variant="secondary" className="mb-2 gap-1.5"><BookOpen className="h-3 w-3" /> Currículo abierto</Badge>
              <h2 id="master-curriculum-title" className="text-2xl font-bold">Itinerario Manos Abiertas: nivel 0 a experto</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Material maestro en español, organizado en 1.000 puntos prácticos. Cada punto incluye objetivo, explicación, pasos, práctica, evidencia, accesibilidad, seguridad y requisito de fuente. El estado editorial se muestra sin ocultar que necesita revisión humana.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-sm sm:grid-cols-4">
              <Stat label="Puntos" value={stats.lessons} />
              <Stat label="Áreas" value={stats.areas} />
              <Stat label="Interfaz" value={stats.languages} />
              <Stat label="Completados" value={completed.length} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-md border border-amber-300/50 bg-amber-50/70 p-3 text-xs text-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>Estado editorial: generación asistida por máquina pendiente de revisión pedagógica, factual, lingüística y de accesibilidad. No es una certificación profesional ni asesoramiento jurídico o médico.</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Cobertura lingüística honesta: interfaz disponible en {stats.languages} idiomas; currículo maestro revisable en español; {stats.localizedDraftLanguages} borradores localizados con control de estructura, todavía pendientes de revisión pedagógica y lingüística humana.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="grid gap-2 p-3 md:grid-cols-[1fr_auto_auto]">
          <label className="relative"><span className="sr-only">Buscar en el currículo</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" value={query} onChange={(event) => { setQuery(event.target.value); setVisible(PAGE_SIZE); }} placeholder="Buscar una competencia, foco o actividad" /></label>
          <select aria-label="Filtrar por área" className="h-10 rounded-md border bg-background px-3 text-sm" value={areaId} onChange={(event) => { setAreaId(event.target.value); setVisible(PAGE_SIZE); }}><option value="all">Todas las áreas</option>{MASTER_CURRICULUM.map((area) => <option key={area.areaId} value={area.areaId}>{area.areaId} · {area.areaName}</option>)}</select>
          <select aria-label="Filtrar por nivel" className="h-10 rounded-md border bg-background px-3 text-sm" value={level} onChange={(event) => { setLevel(event.target.value); setVisible(PAGE_SIZE); }}><option value="all">Todos los niveles</option>{[0,1,2,3,4,5].map((item) => <option key={item} value={item}>Nivel {item}</option>)}</select>
        </CardContent>
      </Card>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filtered.slice(0, visible).map((lesson) => {
          const isDone = completed.includes(lesson.id);
          return <Card key={lesson.id} className={isDone ? 'border-emerald-300/70' : ''}>
            <CardHeader className="pb-2"><div className="flex items-start justify-between gap-2"><CardTitle className="text-base leading-snug">{lesson.title}</CardTitle>{isDone && <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-label="Completado" />}</div><div className="flex flex-wrap gap-1.5"><Badge variant="outline">{lesson.id}</Badge><Badge variant="secondary">Nivel {lesson.level}</Badge><Badge variant="secondary" className="gap-1"><Clock3 className="h-3 w-3" /> {lesson.estimatedMinutes} min</Badge></div></CardHeader>
            <CardContent className="space-y-3 text-sm"><p className="line-clamp-3 text-muted-foreground">{lesson.objective}</p><Button variant="outline" className="w-full" onClick={() => setSelected(lesson)}>Abrir material</Button></CardContent>
          </Card>;
        })}
      </div>
      {visible < filtered.length && <div className="flex justify-center"><Button variant="secondary" onClick={() => setVisible((current) => current + PAGE_SIZE)}>Cargar más ({filtered.length - visible})</Button></div>}
      {!filtered.length && <p className="py-8 text-center text-sm text-muted-foreground">No se encontraron puntos con esos filtros.</p>}

      {selected && <LessonDialog lesson={selected} completed={completed.includes(selected.id)} onComplete={() => markComplete(selected.id)} onClose={() => setSelected(null)} />}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) { return <div className="rounded-md border bg-background/70 px-2 py-2"><div className="text-lg font-bold">{value}</div><div className="text-[11px] text-muted-foreground">{label}</div></div>; }

function LessonDialog({ lesson, completed, onComplete, onClose }: { lesson: MasterLesson; completed: boolean; onComplete: () => void; onClose: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-2 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="lesson-dialog-title" onClick={onClose}>
    <Card className="max-h-[92vh] w-full max-w-3xl overflow-y-auto" onClick={(event) => event.stopPropagation()}><CardHeader><div className="flex items-start justify-between gap-3"><div><Badge variant="outline">{lesson.id} · Nivel {lesson.level}</Badge><CardTitle id="lesson-dialog-title" className="mt-2 text-xl">{lesson.title}</CardTitle></div><Button variant="ghost" onClick={onClose} aria-label="Cerrar material">Cerrar</Button></div></CardHeader><CardContent className="space-y-5 text-sm"><section><h3 className="mb-1 flex items-center gap-2 font-semibold"><Target className="h-4 w-4" /> Objetivo</h3><p>{lesson.objective}</p></section><section><h3 className="mb-1 font-semibold">Explicación</h3><div className="whitespace-pre-line text-muted-foreground">{lesson.explanation}</div></section><section><h3 className="mb-1 font-semibold">Pasos</h3><ol className="list-decimal space-y-2 pl-5">{lesson.steps.map((step, index) => <li key={`${lesson.id}-step-${index}`}>{step}</li>)}</ol></section><section className="grid gap-3 md:grid-cols-2"><Info title="Práctica guiada" text={lesson.guidedPractice} /><Info title="Práctica independiente" text={lesson.independentPractice} /><Info title="Evidencia de aprendizaje" text={lesson.evidenceOfLearning} /><Info title="Errores frecuentes" text={lesson.commonErrors.join(' ')} /><Info title="Accesibilidad" text={lesson.accessibility} /><Info title="Seguridad y límites" text={lesson.safetyNote} /><Info title="Fuente que debe verificar el equipo editorial" text={lesson.sourceRequirement} /></section><div className="flex flex-wrap justify-end gap-2"><Button variant="outline" onClick={onClose}>Volver</Button><Button onClick={onComplete} disabled={completed}>{completed ? 'Punto completado' : 'Marcar como completado'}</Button></div></CardContent></Card>
  </div>;
}

function Info({ title, text }: { title: string; text: string }) { return <div className="rounded-md border bg-muted/30 p-3"><h3 className="mb-1 font-semibold">{title}</h3><p className="text-muted-foreground">{text}</p></div>; }
