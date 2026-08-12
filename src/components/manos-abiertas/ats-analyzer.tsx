'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Sparkles, Loader2, Search, ClipboardList, Check, X, Lightbulb, FileSearch, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';
import { withRemoteAIConsent } from '@/lib/remote-ai-consent';

const STORAGE_KEY = 'manos-abiertas-cv';

interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}
interface Education {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
}

interface ATSAnalysis {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  strengths: string[];
  suggestions: string[];
  summary: string;
}

function scoreColor(score: number) {
  if (score >= 80) return { text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500', label: 'Muy buena compatibilidad', emoji: '🎯' };
  if (score >= 60) return { text: 'text-amber-600 dark:text-amber-400', bar: 'bg-amber-500', label: 'Buena compatibilidad, mejorable', emoji: '👍' };
  return { text: 'text-rose-600 dark:text-rose-400', bar: 'bg-rose-500', label: 'Compatibilidad baja', emoji: '⚠️' };
}

export function ATSAnalyzer({ remoteAIConsent }: { remoteAIConsent: boolean }) {
  const { language } = useAppStore();
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ATSAnalysis | null>(null);
  const [hasCV, setHasCV] = useState(false);

  // Detect if the CV builder has saved data
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the CV state from external browser storage
        setHasCV(Boolean(data.fullName || data.profession || data.summary || data.skills?.length));
      }
    } catch { /* ignore */ }
  }, []);

  async function analyze() {
    if (!jobDescription.trim()) {
      toast.error('Pega o escribe la descripción de la oferta primero');
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      let cvData: any = {};
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) cvData = JSON.parse(stored);
      } catch { /* ignore */ }

      const resp = await fetch('/api/cv/ats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({
          fullName: cvData.fullName || '',
          profession: cvData.profession || '',
          summary: cvData.summary || '',
          experiences: (cvData.experiences || []).map((e: Experience) => ({ position: e.position, company: e.company, description: e.description })),
          education: (cvData.education || []).map((e: Education) => ({ title: e.title, institution: e.institution, year: e.year })),
          skills: cvData.skills || [],
          languages: cvData.languages || [],
          jobDescription,
          language,
        }, remoteAIConsent)),
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok || !data.data) throw new Error(data.error || 'Error analizando');
      setResult(data.data);
      toast.success('Análisis ATS completado ✨');
    } catch (e) {
      toast.error('No se pudo analizar. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  const colors = result ? scoreColor(result.score) : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4 space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <ClipboardList className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Descripción de la oferta</span>
            </div>
            <Textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Pega aquí la descripción del puesto (de InfoJobs, LinkedIn, una empresa...). La IA la comparará con tu CV."
              className="min-h-[140px] text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground flex items-center gap-1">
              <FileSearch className="h-3 w-3" />
              El análisis usa los datos de tu CV (pestaña «Currículum»).
              {!hasCV && <span className="text-amber-600 dark:text-amber-400 font-medium">Rellena tu CV primero para un resultado útil.</span>}
            </p>
            <Button onClick={analyze} disabled={loading || !jobDescription.trim()} className="gap-1.5">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              {loading ? 'Analizando...' : 'Analizar compatibilidad'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {result && colors && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {/* Score */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className={cn('text-5xl font-bold tabular-nums', colors.text)}>
                      {result.score}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">/100</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <TrendingUp className={cn('h-4 w-4', colors.text)} />
                      <span className={cn('text-sm font-medium', colors.text)}>{colors.label}</span>
                      <span className="text-sm">{colors.emoji}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-primary/20">
                      <div
                        className={cn('h-full rounded-full transition-all', colors.bar)}
                        style={{ width: `${result.score}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{result.summary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Matched */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    Keywords detectadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {result.matchedKeywords.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No se detectaron coincidencias claras.</p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {result.matchedKeywords.map((k) => (
                        <Badge key={k} variant="secondary" className="gap-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30">
                          <Check className="h-3 w-3" /> {k}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Missing */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <X className="h-4 w-4 text-rose-500" />
                    Keywords que faltan
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {result.missingKeywords.length === 0 ? (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">Tu CV cubre las keywords de la oferta. 🎉</p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {result.missingKeywords.map((k) => (
                        <Badge key={k} variant="secondary" className="gap-1 bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30">
                          <X className="h-3 w-3" /> {k}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Strengths */}
            {result.strengths.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Puntos fuertes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 space-y-1.5">
                  {result.strengths.map((s, i) => (
                    <p key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary shrink-0">•</span> {s}
                    </p>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Suggestions */}
            {result.suggestions.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    Sugerencias para mejorar tu CV
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 space-y-1.5">
                  {result.suggestions.map((s, i) => (
                    <p key={i} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-amber-500 shrink-0">{i + 1}.</span> {s}
                    </p>
                  ))}
                </CardContent>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!result && !loading && (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-3">
              <Target className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Comprueba si tu CV pasa el filtro</p>
            <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
              Los reclutadores usan sistemas ATS que filtran CVs por keywords. Pega una oferta y descubre tu puntuación,
              qué palabras clave faltan y cómo mejorar tu CV para ese puesto concreto.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
