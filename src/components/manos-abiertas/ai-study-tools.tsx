'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, FileText, Loader2, X, Lightbulb, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/stores/app-store';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useRemoteAIConsent } from '@/hooks/use-remote-ai-consent';
import { withRemoteAIConsent } from '@/lib/remote-ai-consent';
import { RemoteAIConsent } from './remote-ai-consent';

interface AIStudyToolsProps {
  content: string;
  title?: string;
}

interface Question {
  question: string;
  hint: string;
}

export function AIStudyTools({ content, title }: AIStudyToolsProps) {
  const { language } = useAppStore();
  const { remoteAIConsent } = useRemoteAIConsent();
  const [loading, setLoading] = useState<'questions' | 'summary' | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  async function generateQuestions() {
    setLoading('questions');
    setSummary(null);
    try {
      const resp = await fetch('/api/study-tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({ tool: 'questions', content, title, language }, remoteAIConsent)),
      });
      if (!resp.ok) throw new Error('Error');
      const data = await resp.json();
      // Try to parse JSON from text
      try {
        const parsed = JSON.parse(data.text);
        setQuestions(parsed.questions || []);
      } catch {
        // If not JSON, create simple questions from text
        const lines = data.text.split('\n').filter((l: string) => l.trim());
        setQuestions(lines.slice(0, 3).map((q: string) => ({ question: q.replace(/^\d+\.\s*/, ''), hint: '' })));
      }
      setShowResults(true);
      toast.success('Preguntas generadas con IA 🧠');
    } catch {
      toast.error('No se pudieron generar preguntas');
    } finally {
      setLoading(null);
    }
  }

  async function generateSummary() {
    setLoading('summary');
    setQuestions(null);
    try {
      const resp = await fetch('/api/study-tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({ tool: 'summary', content, title, language }, remoteAIConsent)),
      });
      if (!resp.ok) throw new Error('Error');
      const data = await resp.json();
      setSummary(data.text);
      setShowResults(true);
      toast.success('Resumen generado con IA 📝');
    } catch {
      toast.error('No se pudo generar el resumen');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="mt-4">
      <RemoteAIConsent compact className="mb-3" />
      {/* Action buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button
          size="sm"
          variant="outline"
          onClick={generateQuestions}
          disabled={loading !== null}
          className="gap-1.5"
        >
          {loading === 'questions' ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <HelpCircle className="h-3.5 w-3.5 text-primary" />}
          Generar preguntas
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={generateSummary}
          disabled={loading !== null}
          className="gap-1.5"
        >
          {loading === 'summary' ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <FileText className="h-3.5 w-3.5 text-primary" />}
          Resumir con IA
        </Button>
      </div>

      {/* Results */}
      <AnimatePresence>
        {showResults && (questions || summary) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-3"
          >
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {questions ? (
                      <>
                        <HelpCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold">Preguntas de comprensión</span>
                        <Badge variant="secondary" className="text-[9px]">IA</Badge>
                      </>
                    ) : (
                      <>
                        <ListChecks className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold">Resumen del contenido</span>
                        <Badge variant="secondary" className="text-[9px]">IA</Badge>
                      </>
                    )}
                  </div>
                  <button onClick={() => { setShowResults(false); setQuestions(null); setSummary(null); }} className="text-muted-foreground hover:text-foreground">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                {questions && (
                  <div className="space-y-2.5">
                    {questions.map((q, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-card border border-border/60">
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-[10px] flex items-center justify-center font-semibold">
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{q.question}</p>
                            {q.hint && (
                              <div className="mt-1 flex items-start gap-1 text-[11px] text-muted-foreground">
                                <Lightbulb className="h-3 w-3 text-amber-500 flex-shrink-0 mt-0.5" />
                                {q.hint}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {summary && (
                  <div className="text-sm leading-relaxed whitespace-pre-line">
                    {summary}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
