'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, BookOpen, CheckCircle2, ExternalLink, ChevronRight, ChevronLeft, Lock, Smartphone, Globe, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AI_COURSES, type AICourse, type Lesson } from '@/data/ai-courses';
import { useAppStore } from '@/stores/app-store';
import { getTranslation } from '@/i18n/translations';
import { SimpleMarkdown } from './simple-markdown';
import { AIPlayground } from './ai-playground';
import { TTSButton, TTSPlayer } from './tts-button';
import { AIStudyTools } from './ai-study-tools';
import { cn } from '@/lib/utils';
import { AIToolDirectory } from './ai-tool-directory';

export function LearnAISection() {
  const { language } = useAppStore();
  const t = getTranslation(language);
  const [selectedCourse, setSelectedCourse] = useState<AICourse | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const stored = localStorage.getItem('manos-abiertas-ai-progress');
      if (stored) return new Set(JSON.parse(stored));
    } catch { /* ignore */ }
    return new Set();
  });

  // Persist completed lessons
  useEffect(() => {
    try {
      localStorage.setItem('manos-abiertas-ai-progress', JSON.stringify([...completedLessons]));
    } catch { /* ignore */ }
  }, [completedLessons]);

  if (selectedLesson && selectedCourse) {
    return (
      <LessonViewer
        course={selectedCourse}
        lesson={selectedLesson}
        isCompleted={completedLessons.has(`${selectedCourse.id}-${selectedLesson.id}`)}
        onBack={() => setSelectedLesson(null)}
        onSelectLesson={(lessonId) => {
          const lesson = selectedCourse.lessons.find((l) => l.id === lessonId);
          if (lesson) setSelectedLesson(lesson);
        }}
        onComplete={() => {
          const id = `${selectedCourse.id}-${selectedLesson.id}`;
          setCompletedLessons((prev) => new Set([...prev, id]));
        }}
        onNext={() => {
          const idx = selectedCourse.lessons.findIndex((l) => l.id === selectedLesson.id);
          if (idx < selectedCourse.lessons.length - 1) {
            setSelectedLesson(selectedCourse.lessons[idx + 1]);
          } else {
            setSelectedLesson(null);
          }
        }}
        onPrev={() => {
          const idx = selectedCourse.lessons.findIndex((l) => l.id === selectedLesson.id);
          if (idx > 0) {
            setSelectedLesson(selectedCourse.lessons[idx - 1]);
          }
        }}
        hasNext={selectedCourse.lessons.findIndex((l) => l.id === selectedLesson.id) < selectedCourse.lessons.length - 1}
        hasPrev={selectedCourse.lessons.findIndex((l) => l.id === selectedLesson.id) > 0}
      />
    );
  }

  if (selectedCourse) {
    const completedCount = selectedCourse.lessons.filter((l) =>
      completedLessons.has(`${selectedCourse.id}-${l.id}`)
    ).length;
    const progress = Math.round((completedCount / selectedCourse.lessons.length) * 100);

    return (
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <button
          onClick={() => setSelectedCourse(null)}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ChevronLeft className="h-4 w-4" />
          {t.nav_learnAI}
        </button>

        <div className={cn('rounded-2xl p-6 mb-6 bg-gradient-to-br', selectedCourse.color)}>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{selectedCourse.logo}</div>
            <div className="flex-1 text-white">
              <h1 className="text-2xl md:text-3xl font-bold">{selectedCourse.model}</h1>
              <p className="text-white/90 text-sm mt-1">{selectedCourse.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="secondary" className="gap-1">
                  <Clock className="h-3 w-3" />
                  {selectedCourse.lessons.length} {t.lesson}s
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <BookOpen className="h-3 w-3" />
                  {t.level}: {selectedCourse.level}
                </Badge>
                {selectedCourse.freeAccess && (
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2 className="h-3 w-3" /> {t.free}
                  </Badge>
                )}
                {selectedCourse.appAvailable && (
                  <Badge variant="secondary" className="gap-1">
                    <Smartphone className="h-3 w-3" /> App
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5 bg-white/20 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-xs text-white/90 mt-1.5">{progress}% completado · {completedCount}/{selectedCourse.lessons.length}</div>

          <a href={selectedCourse.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3">
            <Button size="sm" variant="secondary" className="gap-1.5">
              <ExternalLink className="h-3.5 w-3.5" />
              Abrir {selectedCourse.model}
            </Button>
          </a>
        </div>

        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          {t.ai_whatYouLearn}
        </h2>

        <div className="space-y-2">
          {selectedCourse.lessons.map((lesson, i) => {
            const isCompleted = completedLessons.has(`${selectedCourse.id}-${lesson.id}`);
            return (
              <motion.button
                key={lesson.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setSelectedLesson(lesson)}
                className="w-full text-left group"
              >
                <Card className="card-hover border-border/60 hover:border-primary/40">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm flex-shrink-0',
                      isCompleted ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'
                    )}>
                      {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm flex items-center gap-2">
                        {lesson.title}
                        {isCompleted && <Badge variant="outline" className="text-[10px] py-0">✓</Badge>}
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
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Sparkles className="h-3 w-3" /> {t.ai_chooseModel}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.ai_title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">{t.ai_subtitle}</p>
      </div>

      <AIToolDirectory />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AI_COURSES.map((course, i) => {
          const completedCount = course.lessons.filter((l) =>
            completedLessons.has(`${course.id}-${l.id}`)
          ).length;
          const progress = Math.round((completedCount / course.lessons.length) * 100);

          return (
            <motion.button
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedCourse(course)}
              className="group text-left"
            >
              <Card className="card-hover overflow-hidden h-full border-border/60 hover:border-primary/40">
                <div className={cn('h-24 bg-gradient-to-br p-4 flex items-center justify-between', course.color)}>
                  <div className="text-5xl">{course.logo}</div>
                  <div className="text-right">
                    {course.freeAccess && (
                      <Badge variant="secondary" className="text-[10px]">{t.free}</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-base">{course.model}</h3>
                    <span className="text-[10px] text-muted-foreground">{course.provider}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{course.tagline}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {course.lessons.length} {t.lesson}s
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.level}
                    </span>
                  </div>
                  {progress > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
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

function LessonViewer({
  course,
  lesson,
  isCompleted,
  onBack,
  onSelectLesson,
  onComplete,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: {
  course: AICourse;
  lesson: Lesson;
  isCompleted: boolean;
  onBack: () => void;
  onSelectLesson: (lessonId: string) => void;
  onComplete: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  const { language } = useAppStore();
  const t = getTranslation(language);
  const idx = course.lessons.findIndex((l) => l.id === lesson.id);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
      >
        <ChevronLeft className="h-4 w-4" />
        {course.model}
      </button>

      <div className={cn('rounded-2xl p-5 mb-5 bg-gradient-to-br', course.color)}>
        <div className="flex items-center gap-3 text-white">
          <div className="text-3xl">{course.logo}</div>
          <div className="flex-1 min-w-0">
            <div className="text-xs opacity-90">{course.model} · {t.lesson} {idx + 1} {t.of} {course.lessons.length}</div>
            <h1 className="text-xl md:text-2xl font-bold">{lesson.title}</h1>
            {/* Lesson progress bar */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white/25 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${((idx + 1) / course.lessons.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] opacity-90 tabular-nums">{Math.round(((idx + 1) / course.lessons.length) * 100)}%</span>
            </div>
            {/* Lesson dots - clickable to jump between lessons */}
            <div className="mt-1.5 flex items-center gap-1">
              {course.lessons.map((l, i) => (
                <button
                  key={l.id}
                  onClick={() => onSelectLesson(l.id)}
                  className="group flex min-h-11 min-w-11 flex-1 items-center"
                  title={`Lección ${i + 1}: ${l.title}`}
                  aria-label={`Ir a lección ${i + 1}: ${l.title}`}
                  aria-current={i === idx ? 'step' : undefined}
                >
                  <span className={cn(
                    'h-1.5 w-full rounded-full transition-all group-hover:h-2.5',
                    i < idx ? 'bg-white/80 group-hover:bg-white' : i === idx ? 'bg-white' : 'bg-white/20 group-hover:bg-white/40'
                  )} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <ScrollArea className="h-[55vh] pr-4">
            <article className="prose prose-sm dark:prose-invert max-w-none">
              <SimpleMarkdown content={lesson.content} />
            </article>

            {lesson.tips && lesson.tips.length > 0 && (
              <div className="mt-6 rounded-xl border border-amber-300/40 bg-amber-50 dark:bg-amber-950/20 p-4">
                <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400">
                  <Lightbulb className="h-4 w-4" />
                  <span className="text-sm font-semibold">Consejos</span>
                </div>
                <ul className="space-y-1.5">
                  {lesson.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {lesson.exercise && (
              <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-semibold">Ejercicio práctico</span>
                </div>
                <p className="text-sm">{lesson.exercise}</p>
              </div>
            )}

            {/* AI Playground - only for lessons that involve prompts/practice */}
            {(lesson.exercise || lesson.content.toLowerCase().includes('prompt')) && (
              <AIPlayground
                title={`Prueba con ${course.model}`}
                suggestedPrompts={getSuggestedPrompts(course.model)}
                contextPrompt={`El usuario está aprendiendo a usar ${course.model} (${course.provider}). Está en la lección "${lesson.title}". Ayúdalo a practicar con esta IA.`}
              />
            )}
          </ScrollArea>

          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={onPrev} disabled={!hasPrev} className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              {t.previous}
            </Button>
            <div className="flex gap-2">
              <TTSButton text={lesson.content} label="Escuchar" size="sm" />
              <Button
                size="sm"
                variant={isCompleted ? 'secondary' : 'default'}
                onClick={onComplete}
                className="gap-1"
              >
                <CheckCircle2 className="h-4 w-4" />
                {isCompleted ? 'Completado' : 'Marcar'}
              </Button>
            </div>
            <Button size="sm" onClick={onNext} disabled={!hasNext} className="gap-1">
              {t.next}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <TTSPlayer text={lesson.content} title={lesson.title} />

          {/* AI Study Tools - questions and summary */}
          <AIStudyTools content={lesson.content} title={lesson.title} />
        </CardContent>
      </Card>
    </div>
  );
}

// Simple markdown renderer moved to shared component: SimpleMarkdown

// Suggested prompts for AI Playground based on the AI model
function getSuggestedPrompts(model: string): string[] {
  const basePrompts: Record<string, string[]> = {
    ChatGPT: [
      'Ayúdame a escribir un correo formal a mi casero para pedir que arregle la caldera',
      'Escribe un resumen profesional para mi CV. Soy cocinero con 5 años de experiencia',
      'Traduce al inglés: "Necesito solicitar una cita para renovar mi NIE"',
      'Explícame qué es el empadronamiento y por qué lo necesito',
    ],
    Gemini: [
      'Resume las novedades de las leyes de extranjería en España 2024',
      'Ayúdame a preparar una entrevista de trabajo para un puesto de cuidadora',
      '¿Qué documentos necesito para solicitar la nacionalidad española?',
      'Crea un plan de estudio de español para 4 semanas',
    ],
    Copilot: [
      'Escribe un correo para solicitar un certificado de empadronamiento',
      'Ayúdame a redactar una carta de presentación para InfoJobs',
      '¿Cómo hago un presupuesto familiar mensual? Dame una plantilla',
      'Resume los derechos laborales básicos en España',
    ],
    Claude: [
      'Revisa mi CV y dame sugerencias de mejora',
      'Ayúdame a escribir una carta de motivación para un curso de FP',
      'Explica la diferencia entre NIE y TIE de forma sencilla',
      'Redacta un correo para reclamar un pago retrasado',
    ],
    DeepSeek: [
      'Paso a paso: ¿cómo solicito la reagrupación familiar?',
      'Compara las condiciones del paro y el RAI',
      'Calcula cuánto cobraría de prestación por desempleo con 2 años cotizados',
      'Resume los requisitos del arraigo social en 2024',
    ],
    Qwen: [
      'Traduce al chino: "Necesito ayuda con los papeles del NIE"',
      'Explícame el sistema sanitario español en chino',
      'Escribe un correo en español y chino para mi jefe',
      '¿Cómo encuentro un piso de alquiler en Madrid?',
    ],
    Perplexity: [
      '¿Cuál es el salario mínimo en España en 2024?',
      'Busca las últimas noticias sobre reformas de extranjería',
      '¿Qué ONGs ayudan a inmigrantes en Barcelona?',
      'Compara las mejores apps para aprender español',
    ],
    'Meta AI': [
      'Escribe una historia corta sobre un inmigrante que consigue su primer empleo',
      'Crea un mensaje motivacional para empezar el día',
      'Dame ideas para ahorrar dinero en la compra semanal',
      'Escribe una receta típica española paso a paso',
    ],
  };
  return basePrompts[model] || basePrompts.ChatGPT;
}
