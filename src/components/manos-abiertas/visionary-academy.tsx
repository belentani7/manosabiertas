'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, BookOpen, CheckCircle2, Award, ArrowRight, ShieldCheck, 
  Terminal, Globe, Cpu, FileText, HeartHandshake, Compass, Layers, 
  CheckSquare, Lightbulb, AlertTriangle, HelpCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { MASTER_CURRICULUM, MASTER_LESSONS, type MasterLesson, type MasterArea } from '@/data/master-curriculum';
import { toast } from 'sonner';

const AREA_ICONS: Record<string, any> = {
  'A1': Terminal,
  'A2': Globe,
  'A3': FileText,
  'A4': Cpu,
  'A5': ShieldCheck,
  'A6': Award,
  'A7': Layers,
  'A8': HeartHandshake,
  'A9': Compass,
  'A10': Sparkles
};

const PROGRESS_KEY = 'manos-abiertas-visionary-progress';

export function VisionaryAcademy() {
  const [selectedArea, setSelectedArea] = useState<string>('A1');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLesson, setActiveLesson] = useState<MasterLesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? '[]');
    } catch {
      return [];
    }
  });

  const areaData = useMemo(() => {
    return MASTER_CURRICULUM.find(a => a.areaId === selectedArea) || MASTER_CURRICULUM[0];
  }, [selectedArea]);

  const filteredLessons = useMemo(() => {
    return areaData.lessons.filter(l => {
      const matchLevel = selectedLevel === 'all' || l.level === selectedLevel;
      const matchSearch = !searchQuery || 
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        l.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.objective.toLowerCase().includes(searchQuery.toLowerCase());
      return matchLevel && matchSearch;
    });
  }, [areaData, selectedLevel, searchQuery]);

  const progressPercentage = useMemo(() => {
    if (MASTER_LESSONS.length === 0) return 0;
    return Math.round((completedLessons.length / MASTER_LESSONS.length) * 100);
  }, [completedLessons]);

  const toggleComplete = (id: string) => {
    setCompletedLessons(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      } catch {}
      toast.success(next.includes(id) ? '¡Punto completado con éxito! 🎉' : 'Punto marcado como pendiente');
      return next;
    });
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 p-8 text-white shadow-2xl"
      >
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <Badge className="bg-white/20 text-white backdrop-blur-md mb-4 border-none gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" /> Ecosistema Educativo Global
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Academia Visionaria Manos Abiertas
          </h1>
          <p className="text-violet-100 text-base md:text-lg mb-6 leading-relaxed">
            La plataforma de código abierto más ambiciosa del mundo para la integración socioeducativa. 1.000 puntos de aprendizaje desde Nivel 0 (iniciación) hasta Nivel Experto en 10 áreas críticas.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
              <BookOpen className="h-4 w-4 text-cyan-300" />
              <span>1.000 Puntos Trazables</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
              <Globe className="h-4 w-4 text-emerald-300" />
              <span>39 Idiomas y Comunidades</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-yellow-300" />
              <span>{completedLessons.length} Completados ({progressPercentage}%)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar & Stats */}
      <Card className="border-border/60 shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Progreso Global del Estudiante</span>
            <span className="text-sm font-bold text-primary">{progressPercentage}% completado</span>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            {MASTER_CURRICULUM.map(area => {
              const areaCompleted = area.lessons.filter(l => completedLessons.includes(l.id)).length;
              const Icon = AREA_ICONS[area.areaId] || BookOpen;
              return (
                <button
                  key={area.areaId}
                  onClick={() => setSelectedArea(area.areaId)}
                  className={`p-3 rounded-xl border transition-all text-left flex flex-col justify-between ${selectedArea === area.areaId ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20' : 'border-border/60 hover:border-primary/50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{areaCompleted}/100</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold truncate">{area.areaId}: {area.areaName}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Filters & Lesson List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar lección o foco..." 
                className="pl-9"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <Button 
                variant={selectedLevel === 'all' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setSelectedLevel('all')}
              >
                Todos
              </Button>
              {[0, 1, 2, 3, 4, 5].map(lvl => (
                <Button 
                  key={lvl}
                  variant={selectedLevel === lvl ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedLevel(lvl)}
                >
                  Nivel {lvl}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {filteredLessons.map((lesson, idx) => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                  >
                    <Card className={`transition-all hover:shadow-md cursor-pointer ${isCompleted ? 'border-emerald-500/50 bg-emerald-50/20 dark:bg-emerald-950/10' : 'border-border/60'}`} onClick={() => setActiveLesson(lesson)}>
                      <CardContent className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-start gap-3.5">
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleComplete(lesson.id); }}
                            className={`mt-1 h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${isCompleted ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-muted-foreground hover:border-primary'}`}
                          >
                            {isCompleted && <CheckCircle2 className="h-3.5 w-3.5" />}
                          </button>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-[10px]">{lesson.id}</Badge>
                              <Badge variant="secondary" className="text-[10px]">Nivel {lesson.level}</Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <ClockIcon className="h-3 w-3" /> {lesson.estimatedMinutes} min
                              </span>
                            </div>
                            <h3 className="font-semibold text-base mb-1">{lesson.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{lesson.objective}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="shrink-0 gap-1 text-primary">
                          Ver <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {filteredLessons.length === 0 && (
              <div className="text-center py-12 border rounded-2xl bg-card">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-40" />
                <h3 className="font-semibold text-lg">No se encontraron lecciones</h3>
                <p className="text-sm text-muted-foreground">Prueba a cambiar los filtros o el término de búsqueda.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Active Lesson Detail Viewer */}
        <div className="space-y-4">
          <div className="sticky top-20">
            {activeLesson ? (
              <Card className="border-primary/30 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-violet-500/10 p-5 border-b border-border/60">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{activeLesson.id}</Badge>
                    <Badge>Nivel {activeLesson.level}</Badge>
                  </div>
                  <h2 className="text-xl font-bold">{activeLesson.title}</h2>
                </div>
                <CardContent className="p-5 space-y-4 max-h-[70vh] overflow-y-auto text-sm">
                  <div>
                    <h4 className="font-semibold flex items-center gap-1.5 text-primary mb-1">
                      <TargetIcon className="h-4 w-4" /> Objetivo Pedagógico
                    </h4>
                    <p className="text-muted-foreground">{activeLesson.objective}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold flex items-center gap-1.5 text-primary mb-1">
                      <BookOpen className="h-4 w-4" /> Explicación Teórica
                    </h4>
                    <p className="text-muted-foreground whitespace-pre-line">{activeLesson.explanation}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold flex items-center gap-1.5 text-primary mb-2">
                      <CheckSquare className="h-4 w-4" /> Pasos Prácticos
                    </h4>
                    <ol className="list-decimal pl-4 space-y-1.5 text-muted-foreground">
                      {activeLesson.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-muted/50 border">
                      <h5 className="font-semibold text-xs mb-1">Práctica Guiada</h5>
                      <p className="text-xs text-muted-foreground">{activeLesson.guidedPractice}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border">
                      <h5 className="font-semibold text-xs mb-1">Evidencia de Aprendizaje</h5>
                      <p className="text-xs text-muted-foreground">{activeLesson.evidenceOfLearning}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                      <h5 className="font-semibold text-xs mb-1 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5" /> Seguridad y Límites
                      </h5>
                      <p className="text-xs">{activeLesson.safetyNote}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-2">
                    <Button 
                      className="w-full"
                      variant={completedLessons.includes(activeLesson.id) ? 'outline' : 'default'}
                      onClick={() => toggleComplete(activeLesson.id)}
                    >
                      {completedLessons.includes(activeLesson.id) ? 'Completado ✓' : 'Marcar como Completado'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed border-2 p-8 text-center bg-muted/20">
                <Compass className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-40 animate-pulse" />
                <h3 className="font-semibold text-base mb-1">Selecciona una lección</h3>
                <p className="text-xs text-muted-foreground">Haz clic en cualquier punto del currículo a la izquierda para desplegar todo su contenido didáctico interactivo.</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>; }
function ClockIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function TargetIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>; }
