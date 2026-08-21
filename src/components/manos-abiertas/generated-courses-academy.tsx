'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, Clock, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ciberseguridad from '@/data/generated-courses/ciberseguridad';
import emprende from '@/data/generated-courses/emprende';
import espanolDiario from '@/data/generated-courses/espanol-diario';
import portuguesVida from '@/data/generated-courses/portugues-vida';
import primeros30Dias from '@/data/generated-courses/primeros-30-dias';
import seniorTech from '@/data/generated-courses/senior-tech-arq';

const COURSES = [primeros30Dias, espanolDiario, portuguesVida, ciberseguridad, emprende, seniorTech];

export function GeneratedCoursesAcademy() {
  const [courseId, setCourseId] = useState<string | null>(null);
  const [lessonId, setLessonId] = useState<string | null>(null);
  const course = useMemo(() => COURSES.find((item) => item.id === courseId), [courseId]);
  const lesson = course?.lessons.find((item) => item.id === lessonId);

  if (course && lesson) {
    return (
      <div className="mx-auto max-w-4xl space-y-4">
        <Button variant="ghost" onClick={() => setLessonId(null)} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Volver a {course.title}
        </Button>
        <Card>
          <CardContent className="space-y-5 p-5 md:p-8">
            <div>
              <Badge variant="secondary" className="mb-2">Leccion gratuita</Badge>
              <h2 className="text-2xl font-bold">{lesson.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{lesson.summary}</p>
            </div>
            <div className="whitespace-pre-wrap text-sm leading-7 text-foreground/90">{lesson.content}</div>
            {lesson.quiz.length > 0 && (
              <section className="space-y-3 border-t pt-5">
                <h3 className="font-semibold">Comprueba lo aprendido</h3>
                {lesson.quiz.map((question, index) => (
                  <details key={`${lesson.id}-${index}`} className="rounded-md border p-3">
                    <summary className="cursor-pointer text-sm font-medium">{index + 1}. {question.q}</summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Respuesta: {question.options[question.correct]}. {question.explain}
                    </p>
                  </details>
                ))}
              </section>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (course) {
    return (
      <div className="mx-auto max-w-5xl space-y-4">
        <Button variant="ghost" onClick={() => setCourseId(null)} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Todos los cursos propios
        </Button>
        <div>
          <Badge variant="secondary" className="mb-2">{course.language}</Badge>
          <h2 className="text-3xl font-bold">{course.title}</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">{course.description}</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {course.lessons.map((item, index) => (
            <button key={item.id} onClick={() => setLessonId(item.id)} className="text-left">
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardContent className="flex gap-3 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{item.summary}</p>
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="text-center">
        <Badge variant="secondary" className="mb-2 gap-1"><GraduationCap className="h-3 w-3" /> Contenido propio y gratuito</Badge>
        <h2 className="text-2xl font-bold">Cursos para la vida diaria</h2>
        <p className="mt-2 text-sm text-muted-foreground">Lecciones practicas, sin registro y con progreso local.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((item) => (
          <button key={item.id} onClick={() => setCourseId(item.id)} className="text-left">
            <Card className="h-full transition-colors hover:border-primary/50">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <Badge variant="outline">{item.language}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 line-clamp-3 text-xs text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> {item.lessons.length} lecciones</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {item.estimatedMinutes} min</span>
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
