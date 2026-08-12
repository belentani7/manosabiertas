'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Heart, Clock, BookOpen, Lightbulb, Target, RotateCcw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LEVEL0_COURSES, type Level0Course, type Level0Lesson } from '@/data/level0-courses';
import { SimpleMarkdown } from './simple-markdown';
import { TTSButton } from './tts-button';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'manos-abiertas-level0-progress';

function loadProgress(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return new Set(JSON.parse(stored));
  } catch { /* ignore */ }
  return new Set();
}

export function Level0Academy() {
  const [selectedCourse, setSelectedCourse] = useState<Level0Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Level0Lesson | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(loadProgress);

  function persist(next: Set<string>) {
    setCompleted(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
  }

  function toggleComplete(courseId: string, lessonId: string) {
    const id = `${courseId}-${lessonId}`;
    const next = new Set(completed);
    if (next.has(id)) next.delete(id);
    else { next.add(id); }
    persist(next);
  }

  if (selectedLesson && selectedCourse) {
    const lessonIdx = selectedCourse.lessons.findIndex((l) => l.id === selectedLesson.id);
    const lessonId = `${selectedCourse.id}-${selectedLesson.id}`;
    const isCompleted = completed.has(lessonId);
    const hasPrev = lessonIdx > 0;
    const hasNext = lessonIdx < selectedCourse.lessons.length - 1;

    return (
      <div className="container mx-auto max-w-3xl px-4 py-6">
        <button onClick={() => setSelectedLesson(null)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3">
          <ChevronLeft className="h-4 w-4" />
          {selectedCourse.title}
        </button>

        <div className={cn('rounded-2xl p-5 mb-4 bg-gradient-to-br', selectedCourse.color)}>
          <div className="flex items-center gap-3 text-white">
            <div className="text-4xl">{selectedLesson.emoji}</div>
            <div className="flex-1">
              <div className="text-xs opacity-90">Lección {lessonIdx + 1} de {selectedCourse.lessons.length}</div>
              <h1 className="text-xl md:text-2xl font-bold">{selectedLesson.title}</h1>
              <div className="flex items-center gap-2 mt-1 text-xs">
                <Clock className="h-3 w-3" />
                {selectedLesson.duration}
              </div>
            </div>
            {/* Progress dots */}
            <div className="hidden sm:flex items-center gap-1">
              {selectedCourse.lessons.map((l, i) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLesson(selectedCourse.lessons[i])}
                  className="flex min-h-11 min-w-11 items-center justify-center"
                  aria-label={`Ir a lección ${i + 1}: ${l.title}`}
                  aria-current={i === lessonIdx ? 'step' : undefined}
                >
                  <span className={cn('h-1.5 w-6 rounded-full transition-all',
                    i < lessonIdx ? 'bg-white/80' : i === lessonIdx ? 'bg-white' : 'bg-white/20')} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <ScrollArea className="h-[50vh] pr-4">
              <SimpleMarkdown content={selectedLesson.content} />

              {/* Steps */}
              <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-semibold">Paso a paso</span>
                </div>
                <ol className="space-y-2.5">
                  {selectedLesson.steps.map((step, i) => (
                    <li key={i} className="text-sm flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tip */}
              <div className="mt-3 rounded-xl border border-amber-300/40 bg-amber-50 dark:bg-amber-950/20 p-3">
                <div className="flex items-center gap-2 mb-1 text-amber-700 dark:text-amber-400">
                  <Lightbulb className="h-4 w-4" />
                  <span className="text-xs font-semibold">Consejo</span>
                </div>
                <p className="text-sm text-amber-900 dark:text-amber-200">{selectedLesson.tip}</p>
              </div>

              {/* Encouragement */}
              <div className="mt-3 rounded-xl border border-rose-300/40 bg-rose-50 dark:bg-rose-950/20 p-3">
                <div className="flex items-center gap-2 mb-1 text-rose-700 dark:text-rose-400">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs font-semibold">Ánimo</span>
                </div>
                <p className="text-sm text-rose-900 dark:text-rose-200 italic">{selectedLesson.encouragement}</p>
              </div>

              {/* Practice */}
              {selectedLesson.practice && (
                <div className="mt-3 rounded-xl border border-emerald-300/40 bg-emerald-50 dark:bg-emerald-950/20 p-3">
                  <div className="flex items-center gap-2 mb-1 text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-semibold">Práctica</span>
                  </div>
                  <p className="text-sm text-emerald-900 dark:text-emerald-200">{selectedLesson.practice}</p>
                </div>
              )}
            </ScrollArea>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-2 flex-wrap">
              <Button variant="outline" size="sm" onClick={() => setSelectedLesson(selectedCourse.lessons[lessonIdx - 1])} disabled={!hasPrev} className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>
              <div className="flex gap-2">
                <TTSButton text={selectedLesson.content} label="Escuchar" size="sm" />
                <Button
                  size="sm"
                  variant={isCompleted ? 'secondary' : 'default'}
                  onClick={() => toggleComplete(selectedCourse.id, selectedLesson.id)}
                  className="gap-1"
                >
                  {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                  {isCompleted ? 'Completado' : 'Marcar hecho'}
                </Button>
              </div>
              <Button size="sm" onClick={() => setSelectedLesson(selectedCourse.lessons[lessonIdx + 1])} disabled={!hasNext} className="gap-1">
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-6">
        <button onClick={() => setSelectedCourse(null)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3">
          <ChevronLeft className="h-4 w-4" />
          Nivel 0
        </button>

        <div className={cn('rounded-2xl p-6 mb-4 bg-gradient-to-br text-white', selectedCourse.color)}>
          <div className="flex items-start gap-3">
            <div className="text-5xl">{selectedCourse.emoji}</div>
            <div>
              <Badge variant="secondary" className="text-[10px] mb-1">Nivel {selectedCourse.level === 0 ? '0 - Principiante absoluto' : '1 - Básico'}</Badge>
              <h1 className="text-2xl font-bold">{selectedCourse.title}</h1>
              <p className="text-sm text-white/90 mt-1">{selectedCourse.description}</p>
              <div className="flex items-center gap-3 mt-2 text-xs">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{selectedCourse.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{selectedCourse.lessons.length} lecciones</span>
                <span>👤 {selectedCourse.targetAge}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {selectedCourse.lessons.map((lesson, i) => {
            const isCompleted = completed.has(`${selectedCourse.id}-${lesson.id}`);
            return (
              <motion.button
                key={lesson.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setSelectedLesson(lesson)}
                className="w-full text-left group"
              >
                <Card className={cn('card-hover border-border/60 hover:border-primary/40',
                  isCompleted && 'border-emerald-300 dark:border-emerald-800')}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm flex-shrink-0',
                      isCompleted ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground')}>
                      {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm flex items-center gap-2">
                        <span className="text-lg">{lesson.emoji}</span>
                        {lesson.title}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                        <Clock className="h-3 w-3" />
                        {lesson.duration}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </CardContent>
                </Card>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Heart className="h-3 w-3" />
          Para empezar desde cero
        </Badge>
        <h2 className="text-2xl font-bold">Nivel 0: Alfabetización Digital</h2>
        <p className="text-sm text-muted-foreground mt-1 max-w-lg mx-auto">
          Cursos diseñados para personas de 40+ años sin experiencia tecnológica.
          Paso a paso, sin tecnicismos, con emojis y lenguaje sencillo.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {LEVEL0_COURSES.map((course, i) => {
          const completedLessons = course.lessons.filter((l) => completed.has(`${course.id}-${l.id}`)).length;
          const progress = Math.round((completedLessons / course.lessons.length) * 100);

          return (
            <motion.button
              key={course.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedCourse(course)}
              className="group text-left"
            >
              <Card className="card-hover border-border/60 hover:border-primary/40 overflow-hidden h-full">
                <div className={cn('h-1.5 w-full bg-gradient-to-r', course.color)} />
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-3xl">{course.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm leading-tight">{course.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{course.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap text-[10px] text-muted-foreground">
                    <Badge variant="outline" className="text-[9px] py-0 h-4">
                      Nivel {course.level === 0 ? '0' : '1'}
                    </Badge>
                    <span className="flex items-center gap-0.5">
                      <Clock className="h-2.5 w-2.5" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <BookOpen className="h-2.5 w-2.5" />
                      {course.lessons.length} lecciones
                    </span>
                  </div>
                  {progress > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full gradient-brand rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                      <span className="text-[10px] text-muted-foreground">{progress}%</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
