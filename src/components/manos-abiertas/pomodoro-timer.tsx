'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Play, Pause, RotateCcw, Coffee, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';

type PomodoroPhase = 'focus' | 'break' | 'long-break';

const PHASES: Record<PomodoroPhase, { duration: number; label: string; color: string }> = {
  focus: { duration: 25 * 60, label: 'Concentración', color: 'from-blue-500 to-indigo-600' },
  break: { duration: 5 * 60, label: 'Descanso corto', color: 'from-emerald-500 to-teal-600' },
  'long-break': { duration: 15 * 60, label: 'Descanso largo', color: 'from-amber-500 to-orange-600' },
};

export function PomodoroTimer() {
  const { pomodoroActive, setPomodoroActive } = useAppStore();
  const [phase, setPhase] = useState<PomodoroPhase>('focus');
  const [secondsLeft, setSecondsLeft] = useState(PHASES.focus.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef<PomodoroPhase>('focus');
  const sessionsRef = useRef(0);

  useEffect(() => { phaseRef.current = phase; }, [phase]);
  useEffect(() => { sessionsRef.current = completedSessions; }, [completedSessions]);

  const handlePhaseComplete = useCallback(() => {
    setIsRunning(false);
    setPomodoroActive(false);
    if (phaseRef.current === 'focus') {
      const newCount = sessionsRef.current + 1;
      setCompletedSessions(newCount);
      const nextPhase: PomodoroPhase = newCount % 4 === 0 ? 'long-break' : 'break';
      setPhase(nextPhase);
      setSecondsLeft(PHASES[nextPhase].duration);
    } else {
      setPhase('focus');
      setSecondsLeft(PHASES.focus.duration);
    }
  }, [setPomodoroActive]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            handlePhaseComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, handlePhaseComplete]);

  function toggleTimer() {
    if (!isRunning) {
      if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
    setIsRunning(!isRunning);
    setPomodoroActive(!isRunning);
  }

  function resetTimer() {
    setIsRunning(false);
    setPomodoroActive(false);
    setPhase('focus');
    setSecondsLeft(PHASES.focus.duration);
  }

  function skipPhase() {
    setIsRunning(false);
    setPomodoroActive(false);
    const nextPhase: PomodoroPhase = phase === 'focus' ? 'break' : 'focus';
    setPhase(nextPhase);
    setSecondsLeft(PHASES[nextPhase].duration);
  }

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeDisplay = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  const progress = ((PHASES[phase].duration - secondsLeft) / PHASES[phase].duration) * 100;
  const phaseInfo = PHASES[phase];

  if (!pomodoroActive && !isRunning && completedSessions === 0) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => { setPomodoroActive(true); setIsRunning(true); }}
        className="gap-1.5 text-xs h-7"
      >
        <Timer className="h-3.5 w-3.5" />
        Pomodoro
      </Button>
    );
  }

  return (
    <>
      {!pomodoroActive && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPomodoroActive(true)}
          className="gap-1.5 text-xs h-7"
        >
          <Timer className="h-3.5 w-3.5" />
          {completedSessions > 0 && (
            <Badge variant="secondary" className="text-[9px] py-0 h-4">{completedSessions}🍅</Badge>
          )}
        </Button>
      )}

      <AnimatePresence>
        {pomodoroActive && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-4 sm:left-4 z-40 bg-card border border-border rounded-2xl shadow-2xl p-4 w-64 print:hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={cn('w-7 h-7 rounded-lg bg-gradient-to-br flex items-center justify-center text-white', phaseInfo.color)}>
                  {phase === 'focus' ? <Brain className="h-3.5 w-3.5" /> : <Coffee className="h-3.5 w-3.5" />}
                </div>
                <div>
                  <div className="text-xs font-semibold">{phaseInfo.label}</div>
                  <div className="text-[10px] text-muted-foreground">
                    Sesión #{completedSessions + (phase === 'focus' ? 1 : 0)}
                  </div>
                </div>
              </div>
              <button
                onClick={() => { setPomodoroActive(false); setIsRunning(false); }}
                className="text-muted-foreground hover:text-foreground text-xs"
              >
                ✕
              </button>
            </div>

            <div className="relative mb-3">
              <div className="text-center">
                <div className={cn('text-4xl font-bold tabular-nums', isRunning ? 'text-foreground' : 'text-muted-foreground')}>
                  {timeDisplay}
                </div>
              </div>
              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={cn('h-full rounded-full bg-gradient-to-r', phaseInfo.color)}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={toggleTimer}
                className={cn('flex-1 gap-1 bg-gradient-to-r text-white', phaseInfo.color)}
              >
                {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {isRunning ? 'Pausar' : 'Iniciar'}
              </Button>
              <Button size="sm" variant="outline" onClick={skipPhase} className="px-2" aria-label="Saltar fase">
                ⏭
              </Button>
              <Button size="sm" variant="outline" onClick={resetTimer} className="px-2" aria-label="Reiniciar temporizador">
                <RotateCcw className="h-3.5 w-3.5" />
              </Button>
            </div>

            {completedSessions > 0 && (
              <div className="mt-2 text-center text-[10px] text-muted-foreground">
                {completedSessions} sesión{completedSessions !== 1 ? 'es' : ''} completada{completedSessions !== 1 ? 's' : ''} 🍅
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
