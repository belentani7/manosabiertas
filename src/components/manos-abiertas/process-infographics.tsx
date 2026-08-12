'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, FileText, Euro, Lightbulb, AlertTriangle, ExternalLink, CheckCircle2, Circle, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PROCESS_GUIDES, PROCESS_CATEGORIES, type ProcessGuide, type ProcessStep } from '@/data/process-guides';
import { cn } from '@/lib/utils';

const DIFFICULTY_LABELS = {
  easy: { label: 'Fácil', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' },
  medium: { label: 'Media', color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  hard: { label: 'Difícil', color: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' },
};

export function ProcessInfographics() {
  const [selectedGuide, setSelectedGuide] = useState<ProcessGuide | null>(null);

  if (selectedGuide) {
    return <ProcessDetail guide={selectedGuide} onBack={() => setSelectedGuide(null)} />;
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Guías Visuales de Trámites
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Procesos paso a paso con tiempos, documentos y costes
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {PROCESS_GUIDES.map((guide, i) => (
          <motion.button
            key={guide.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedGuide(guide)}
            className="group text-left"
          >
            <Card className="card-hover border-border/60 hover:border-primary/40 overflow-hidden h-full">
              <div className={cn('h-1.5 w-full bg-gradient-to-r', guide.color)} />
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-3xl flex-shrink-0">{guide.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-tight">{guide.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{guide.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className={cn('text-[9px] py-0 h-4', DIFFICULTY_LABELS[guide.difficulty].color)}>
                    {DIFFICULTY_LABELS[guide.difficulty].label}
                  </Badge>
                  <Badge variant="outline" className="text-[9px] py-0 h-4 gap-0.5">
                    <Clock className="h-2.5 w-2.5" />
                    {guide.estimatedTime}
                  </Badge>
                  <Badge variant="outline" className="text-[9px] py-0 h-4">
                    {guide.steps.length} pasos
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function ProcessDetail({ guide, onBack }: { guide: ProcessGuide; onBack: () => void }) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  function toggleStep(stepId: string) {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      return next;
    });
  }

  const progress = Math.round((completedSteps.size / guide.steps.length) * 100);
  const diffLabel = DIFFICULTY_LABELS[guide.difficulty];

  return (
    <div className="space-y-4">
      <button onClick={onBack} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ChevronDown className="h-4 w-4 rotate-90" />
        Volver a guías
      </button>

      {/* Header */}
      <Card className={cn('overflow-hidden border-0')}>
        <div className={cn('p-5 bg-gradient-to-br', guide.color)}>
          <div className="flex items-start gap-3 text-white">
            <span className="text-4xl flex-shrink-0">{guide.emoji}</span>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{guide.title}</h1>
              <p className="text-sm text-white/90 mt-0.5">{guide.description}</p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <Badge variant="secondary" className={cn('text-[10px]', diffLabel.color)}>
                  {diffLabel.label}
                </Badge>
                <Badge variant="secondary" className="text-[10px] gap-0.5">
                  <Clock className="h-2.5 w-2.5" />
                  {guide.estimatedTime}
                </Badge>
                <Badge variant="secondary" className="text-[10px]">
                  {guide.steps.length} pasos
                </Badge>
              </div>
            </div>
          </div>
          {/* Progress */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-white/90 mb-1">
              <span>Tu progreso</span>
              <span>{completedSteps.size}/{guide.steps.length} pasos ({progress}%)</span>
            </div>
            <div className="h-2 bg-white/25 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Timeline steps */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-3">
          {guide.steps.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              isCompleted={completedSteps.has(step.id)}
              isLast={i === guide.steps.length - 1}
              onToggle={() => toggleStep(step.id)}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Completion message */}
      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border-2 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-5 text-center"
        >
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="font-bold text-emerald-700 dark:text-emerald-400">¡Proceso completado!</h3>
          <p className="text-sm text-emerald-600 dark:text-emerald-500 mt-1">
            Has marcado todos los pasos como completados. ¡Felicidades!
          </p>
        </motion.div>
      )}
    </div>
  );
}

function StepCard({
  step,
  isCompleted,
  isLast,
  onToggle,
  index,
}: {
  step: ProcessStep;
  isCompleted: boolean;
  isLast: boolean;
  onToggle: () => void;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative pl-12"
    >
      {/* Step number circle */}
      <button
        onClick={onToggle}
        className={cn(
          'absolute left-0 top-3 w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all z-10',
          isCompleted
            ? 'bg-emerald-500 border-emerald-500 text-white'
            : 'bg-card border-border text-muted-foreground hover:border-primary'
        )}
        aria-label={isCompleted ? 'Marcar como pendiente' : 'Marcar como completado'}
      >
        {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : step.stepNumber}
      </button>

      <Card className={cn(
        'transition-colors',
        isCompleted ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/10' : ''
      )}>
        <CardContent className="p-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className={cn('font-semibold text-sm', isCompleted && 'line-through text-muted-foreground')}>
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{step.description}</p>
              </div>
              {expanded ? <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
            </div>
          </button>

          {/* Quick info badges */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {step.duration && (
              <Badge variant="outline" className="text-[9px] py-0 h-4 gap-0.5">
                <Clock className="h-2.5 w-2.5" />
                {step.duration}
              </Badge>
            )}
            {step.cost && (
              <Badge variant="outline" className="text-[9px] py-0 h-4 gap-0.5">
                <Euro className="h-2.5 w-2.5" />
                {step.cost}
              </Badge>
            )}
            {step.documents && (
              <Badge variant="outline" className="text-[9px] py-0 h-4 gap-0.5">
                <FileText className="h-2.5 w-2.5" />
                {step.documents.length} docs
              </Badge>
            )}
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-3 pt-3 border-t border-border space-y-2">
                  {step.documents && step.documents.length > 0 && (
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Documentos necesarios
                      </div>
                      <ul className="space-y-0.5">
                        {step.documents.map((doc, i) => (
                          <li key={i} className="text-xs flex items-start gap-1.5">
                            <Circle className="h-2 w-2 mt-1 text-primary flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.tip && (
                    <div className="rounded-lg border border-emerald-300/40 bg-emerald-50 dark:bg-emerald-950/20 p-2.5">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold mb-0.5">
                        <Lightbulb className="h-3 w-3" />
                        Consejo
                      </div>
                      <p className="text-xs text-emerald-900 dark:text-emerald-200">{step.tip}</p>
                    </div>
                  )}

                  {step.warning && (
                    <div className="rounded-lg border border-amber-300/40 bg-amber-50 dark:bg-amber-950/20 p-2.5">
                      <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-[10px] font-semibold mb-0.5">
                        <AlertTriangle className="h-3 w-3" />
                        Atención
                      </div>
                      <p className="text-xs text-amber-900 dark:text-amber-200">{step.warning}</p>
                    </div>
                  )}

                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Abrir trámite oficial
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
