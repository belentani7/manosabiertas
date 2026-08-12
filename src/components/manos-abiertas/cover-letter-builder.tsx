'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Loader2, Copy, RotateCcw, Printer, Building2, Briefcase, User, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';
import { withRemoteAIConsent } from '@/lib/remote-ai-consent';

const STORAGE_KEY = 'manos-abiertas-cover-letter';

const TONE_OPTIONS = [
  { value: 'formal' as const, label: 'Formal', emoji: '🎩', desc: 'Profesional y tradicional' },
  { value: 'friendly' as const, label: 'Cercano', emoji: '🤝', desc: 'Amable pero profesional' },
  { value: 'direct' as const, label: 'Directo', emoji: '⚡', desc: 'Conciso y al grano' },
];

export function CoverLetterBuilder({ remoteAIConsent }: { remoteAIConsent: boolean }) {
  const { language } = useAppStore();
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [tone, setTone] = useState<'formal' | 'friendly' | 'direct'>('formal');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);

  // Load saved data
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        /* eslint-disable react-hooks/set-state-in-effect -- restores a client-only form from external browser storage */
        if (data.fullName) setFullName(data.fullName);
        if (data.profession) setProfession(data.profession);
        if (data.companyName) setCompanyName(data.companyName);
        if (data.jobTitle) setJobTitle(data.jobTitle);
        if (data.experience) setExperience(data.experience);
        if (data.skills) setSkills(data.skills);
        if (data.tone) setTone(data.tone);
        if (data.letter) setLetter(data.letter);
        if (data.savedAt) setSavedAt(new Date(data.savedAt));
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    } catch { /* ignore */ }
  }, []);

  // Autosave
  useEffect(() => {
    const id = setTimeout(() => {
      try {
        const data = { fullName, profession, companyName, jobTitle, experience, skills, tone, letter, savedAt: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setSavedAt(new Date());
      } catch { /* ignore */ }
    }, 800);
    return () => clearTimeout(id);
  }, [fullName, profession, companyName, jobTitle, experience, skills, tone, letter]);

  function addSkill() {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  }

  async function generate() {
    if (!profession.trim()) {
      toast.error('Escribe tu profesión para generar la carta');
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch('/api/cover-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({
          fullName, profession, companyName, jobTitle, experience, skills, tone, language,
        }, remoteAIConsent)),
      });
      if (!resp.ok) throw new Error('Error');
      const data = await resp.json();
      setLetter(data.text);
      toast.success('Carta generada con IA ✨');
    } catch {
      toast.error('No se pudo generar. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  function copyLetter() {
    navigator.clipboard.writeText(letter);
    toast.success('Carta copiada al portapapeles 📋');
  }

  function reset() {
    if (confirm('¿Borrar todos los datos de la carta?')) {
      localStorage.removeItem(STORAGE_KEY);
      setFullName(''); setProfession(''); setCompanyName(''); setJobTitle('');
      setExperience(''); setSkills([]); setLetter('');
      setSavedAt(null);
      toast.success('Datos reiniciados');
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Carta de Presentación</h2>
            <p className="text-xs text-muted-foreground">Genera una carta profesional con IA</p>
          </div>
        </div>
        {savedAt && (
          <div className="text-[10px] text-muted-foreground flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Guardado · {savedAt.toLocaleTimeString()}
          </div>
        )}
      </div>

      <Tabs defaultValue="form">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="form" className="gap-1.5 text-xs">
            <FileText className="h-3.5 w-3.5" />
            Datos
          </TabsTrigger>
          <TabsTrigger value="preview" className="gap-1.5 text-xs">
            <Mail className="h-3.5 w-3.5" />
            Carta
            {letter && <Badge variant="secondary" className="text-[9px] py-0 h-3.5">✓</Badge>}
          </TabsTrigger>
        </TabsList>

        {/* FORM TAB */}
        <TabsContent value="form" className="space-y-3 mt-3">
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="cl-name" className="text-xs flex items-center gap-1">
                    <User className="h-3 w-3" /> Tu nombre
                  </Label>
                  <Input
                    id="cl-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="María González"
                    className="mt-1 text-sm h-9"
                  />
                </div>
                <div>
                  <Label htmlFor="cl-prof" className="text-xs flex items-center gap-1">
                    <Briefcase className="h-3 w-3" /> Profesión
                  </Label>
                  <Input
                    id="cl-prof"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="Cuidadora de mayores"
                    className="mt-1 text-sm h-9"
                  />
                </div>
                <div>
                  <Label htmlFor="cl-company" className="text-xs flex items-center gap-1">
                    <Building2 className="h-3 w-3" /> Empresa
                  </Label>
                  <Input
                    id="cl-company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Residencia La Paz"
                    className="mt-1 text-sm h-9"
                  />
                </div>
                <div>
                  <Label htmlFor="cl-job" className="text-xs">Puesto al que aspiras</Label>
                  <Input
                    id="cl-job"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Cuidadora nocturna"
                    className="mt-1 text-sm h-9"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="cl-exp" className="text-xs">Experiencia relevante (breve)</Label>
                <Textarea
                  id="cl-exp"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="5 años cuidando personas mayores con demencia. Experiencia en administración de medicación y apoyo emocional."
                  className="mt-1 text-sm min-h-[70px]"
                />
              </div>

              <div>
                <Label className="text-xs">Habilidades destacadas</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill(); } }}
                    placeholder="Ej: Empatía"
                    className="text-sm h-9"
                  />
                <Button size="icon" onClick={addSkill} className="h-11 w-11" aria-label="Añadir habilidad">
                  <Sparkles className="h-3.5 w-3.5" />
                  </Button>
                </div>
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {skills.map((s) => (
                      <Badge key={s} variant="secondary" className="gap-1 pr-1 text-xs">
                        {s}
                        <button type="button" onClick={() => setSkills(skills.filter(x => x !== s))} className="hover:text-destructive" aria-label={`Eliminar habilidad: ${s}`}>
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Tone selector */}
              <div>
                <Label className="text-xs mb-1.5 block">Tono de la carta</Label>
                <div className="grid grid-cols-3 gap-2">
                  {TONE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setTone(opt.value)}
                      className={cn(
                        'p-2.5 rounded-lg border text-center transition-all',
                        tone === opt.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/40'
                      )}
                    >
                      <div className="text-lg mb-0.5">{opt.emoji}</div>
                      <div className="text-xs font-medium">{opt.label}</div>
                      <div className="text-[10px] text-muted-foreground">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <Button
                  onClick={generate}
                  disabled={loading || !profession.trim()}
                  className="flex-1 gap-1.5 gradient-brand text-white"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  {loading ? 'Generando...' : 'Generar carta con IA'}
                </Button>
                {(letter || fullName) && (
                  <Button variant="outline" onClick={reset} className="gap-1">
                    <RotateCcw className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
              {!profession.trim() && (
                <p className="text-[11px] text-muted-foreground text-center">
                  Escribe tu profesión para activar la generación
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* PREVIEW TAB */}
        <TabsContent value="preview" className="mt-3">
          <Card>
            <CardContent className="p-6">
              {letter ? (
                <>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                    <Badge variant="secondary" className="gap-1 text-[10px]">
                      <Sparkles className="h-2.5 w-2.5" />
                      Generada con IA · {TONE_OPTIONS.find(t => t.value === tone)?.label}
                    </Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" onClick={copyLetter} className="h-11 gap-1 text-xs">
                        <Copy className="h-3 w-3" />
                        Copiar
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => window.print()} className="h-11 gap-1 text-xs">
                        <Printer className="h-3 w-3" />
                        Imprimir
                      </Button>
                    </div>
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/90">
                      {letter}
                    </pre>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="relative inline-block mb-3">
                    <Mail className="h-12 w-12 text-muted-foreground/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl animate-pulse">✉️</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Tu carta aparecerá aquí</p>
                  <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                    Rellena tus datos en la pestaña "Datos" y pulsa "Generar carta con IA"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
