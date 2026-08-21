'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, FolderOpen, Calculator, Trophy, MapPin, Bell, FileText, HardDrive } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/stores/app-store';
import { DocumentChecklist } from './document-checklist';
import { CostOfLifeTools } from './cost-of-life-tools';
import { ProcessInfographics } from './process-infographics';
import { SmartReminders } from './smart-reminders';
import { DocumentTemplates } from './document-templates';
import { GAMIFICATION_BADGES } from '@/data/tools-data';
import { useProgress } from '@/hooks/use-progress';
import { cn } from '@/lib/utils';
import { LocalDataPanel } from './local-data-panel';
import { ToolSimulatorsGallery } from './tool-simulators';

type ToolTab = 'documents' | 'processes' | 'templates' | 'cost' | 'reminders' | 'badges' | 'data' | 'simulators';

const TOOLS: { id: ToolTab; emoji: string; icon: typeof FolderOpen; title: string; desc: string; color: string }[] = [
  { id: 'documents', emoji: '📋', icon: FolderOpen, title: 'Checklist de documentos', desc: 'Trámites esenciales para regularizarte', color: 'from-amber-400 to-orange-500' },
  { id: 'processes', emoji: '🗺️', icon: MapPin, title: 'Guías visuales', desc: 'Procesos paso a paso con diagramas', color: 'from-blue-400 to-cyan-500' },
  { id: 'templates', emoji: '📄', icon: FileText, title: 'Plantillas', desc: 'Cartas, CV, reclamaciones listas para usar', color: 'from-purple-400 to-violet-500' },
  { id: 'simulators', emoji: '🖥️', icon: Wrench, title: 'Simuladores', desc: 'Practica Windows, Linux, IA y Office sin miedo', color: 'from-cyan-400 to-blue-500' },
  { id: 'cost', emoji: '💰', icon: Calculator, title: 'Coste de vida y moneda', desc: 'Calcula gastos y convierte divisas', color: 'from-emerald-400 to-teal-500' },
  { id: 'reminders', emoji: '🔔', icon: Bell, title: 'Recordatorios', desc: 'No pierdas plazos importantes', color: 'from-rose-400 to-pink-500' },
  { id: 'badges', emoji: '🏆', icon: Trophy, title: 'Tus logros', desc: 'Insignias desbloqueadas', color: 'from-indigo-400 to-purple-500' },
  { id: 'data', emoji: '💾', icon: HardDrive, title: 'Tu progreso', desc: 'Guarda, lleva y comparte tu plan', color: 'from-slate-400 to-slate-600' },
];

export function ToolsSection() {
  const [activeTool, setActiveTool] = useState<ToolTab>('documents');

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <div className="text-center mb-6">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Wrench className="h-3 w-3" />
          Herramientas prácticas
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Herramientas para tu día a día</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Calculadoras, checklist de trámites y conversores para ayudarte en España
        </p>
      </div>

      {/* Tool selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-6">
        {TOOLS.map((tool, i) => {
          const Icon = tool.icon;
          const active = activeTool === tool.id;
          return (
            <motion.button
              key={tool.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActiveTool(tool.id)}
              className="group text-left"
            >
              <Card className={cn(
                'card-hover overflow-hidden h-full transition-all',
                active ? 'border-primary border-2 shadow-md' : 'border-border hover:border-primary/40'
              )}>
                <div className={cn('h-1.5 w-full bg-gradient-to-r', tool.color)} />
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={cn('w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-white flex-shrink-0', tool.color)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm flex items-center gap-1.5">
                        <span className="text-base">{tool.emoji}</span>
                        {tool.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{tool.desc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.button>
          );
        })}
      </div>

      {/* Active tool content */}
      <motion.div
        key={activeTool}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTool === 'documents' && <DocumentChecklist />}
        {activeTool === 'processes' && <ProcessInfographics />}
        {activeTool === 'templates' && <DocumentTemplates />}
        {activeTool === 'simulators' && <ToolSimulatorsGallery />}
        {activeTool === 'cost' && <CostOfLifeTools />}
        {activeTool === 'reminders' && <SmartReminders />}
        {activeTool === 'badges' && <BadgesDisplay />}
        {activeTool === 'data' && <LocalDataPanel />}
      </motion.div>
    </div>
  );
}

function BadgesDisplay() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-500" />
          Tus Logros
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Insignias que desbloqueas al usar Manos Abiertas
        </p>
      </div>

      <BadgesGrid />

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 text-center">
          <div className="text-4xl mb-2">🎯</div>
          <h3 className="font-semibold mb-1">¿Cómo ganar más logros?</h3>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Completa lecciones de IA, crea tu CV, guarda recursos favoritos y genera tu carta de presentación.
            ¡Cada acción cuenta para desbloquear nuevas insignias!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function BadgesGrid() {
  const { stats } = useProgress();

  const badgeStats = {
    lessonsCompleted: stats.aiCompleted + stats.officeCompleted,
    hasCV: stats.hasCV,
    favoritesCount: typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('manos-abiertas-favorites') || '[]').length
      : 0,
    hasCoverLetter: typeof window !== 'undefined'
      ? Boolean(localStorage.getItem('manos-abiertas-cover-letter'))
      : false,
  };

  const earnedCount = GAMIFICATION_BADGES.filter((b) => b.condition(badgeStats)).length;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">Insignias ({earnedCount}/{GAMIFICATION_BADGES.length})</span>
          <div className="h-2 flex-1 mx-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full gradient-brand rounded-full transition-all"
              style={{ width: `${(earnedCount / GAMIFICATION_BADGES.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold tabular-nums">{Math.round((earnedCount / GAMIFICATION_BADGES.length) * 100)}%</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GAMIFICATION_BADGES.map((badge) => {
            const earned = badge.condition(badgeStats);
            return (
              <div
                key={badge.id}
                className={cn(
                  'p-3 rounded-lg border text-center transition-all',
                  earned
                    ? 'border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800'
                    : 'border-border bg-muted/40 opacity-50'
                )}
              >
                <div className={cn('text-3xl mb-1', !earned && 'grayscale')}>{badge.emoji}</div>
                <div className="text-xs font-medium">{badge.title}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{badge.description}</div>
                {earned && (
                  <Badge variant="outline" className="mt-1 text-[9px] py-0 h-4 border-amber-400 text-amber-600">
                    ✓ Desbloqueado
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
