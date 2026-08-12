'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Plus, Trash2, Sparkles, Download, Printer, Eye, User, Briefcase, GraduationCap, Award, Languages, Palette, Loader2, Check, Lightbulb, Save, RotateCcw, Mail, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { CV_TEMPLATES, CV_GUIDES, ACTION_VERBS, SKILL_SUGGESTIONS } from '@/data/cv-templates';
import { TemplatePreview } from './template-preview';
import { CoverLetterBuilder } from './cover-letter-builder';
import { ATSAnalyzer } from './ats-analyzer';
import { useAppStore } from '@/stores/app-store';
import { getTranslation } from '@/i18n/translations';
import { cn } from '@/lib/utils';
import { useRemoteAIConsent } from '@/hooks/use-remote-ai-consent';
import { withRemoteAIConsent } from '@/lib/remote-ai-consent';
import { RemoteAIConsent } from './remote-ai-consent';

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

export function CVSection() {
  const { language } = useAppStore();
  const { remoteAIConsent } = useRemoteAIConsent();
  const t = getTranslation(language);
  const [template, setTemplate] = useState(CV_TEMPLATES[0]);
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [summary, setSummary] = useState('');
  const [experiences, setExperiences] = useState<Experience[]>([{ id: '1', position: '', company: '', startDate: '', endDate: '', description: '' }]);
  const [education, setEducation] = useState<Education[]>([{ id: '1', title: '', institution: '', year: '', description: '' }]);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [langInput, setLangInput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [aiLoading, setAiLoading] = useState<'summary' | 'experience' | null>(null);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [activeTool, setActiveTool] = useState<'cv' | 'letter' | 'ats'>('cv');

  // Autosave to localStorage (debounced via effect)
  useEffect(() => {
    const data = { template: template.id, fullName, profession, email, phone, address, summary, experiences, education, skills, languages };
    const id = setTimeout(() => {
      try {
        localStorage.setItem('manos-abiertas-cv', JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
        setSavedAt(new Date());
      } catch { /* ignore */ }
    }, 800);
    return () => clearTimeout(id);
  }, [template, fullName, profession, email, phone, address, summary, experiences, education, skills, languages]);

  // Load saved CV on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('manos-abiertas-cv');
      if (stored) {
        const data = JSON.parse(stored);
        /* eslint-disable react-hooks/set-state-in-effect -- restores a client-only CV from external browser storage */
        if (data.template) {
          const tpl = CV_TEMPLATES.find((t) => t.id === data.template);
          if (tpl) setTemplate(tpl);
        }
        if (data.fullName) setFullName(data.fullName);
        if (data.profession) setProfession(data.profession);
        if (data.email) setEmail(data.email);
        if (data.phone) setPhone(data.phone);
        if (data.address) setAddress(data.address);
        if (data.summary) setSummary(data.summary);
        if (data.experiences?.length) setExperiences(data.experiences);
        if (data.education?.length) setEducation(data.education);
        if (data.skills?.length) setSkills(data.skills);
        if (data.languages?.length) setLanguages(data.languages);
        if (data.savedAt) setSavedAt(new Date(data.savedAt));
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    } catch { /* ignore */ }
  }, []);

  const hasContent = Boolean(fullName || profession || summary || email || experiences.some((e) => e.position || e.company) || education.some((e) => e.title) || skills.length || languages.length);

  function addExperience() {
    setExperiences([...experiences, { id: Date.now().toString(), position: '', company: '', startDate: '', endDate: '', description: '' }]);
  }
  function removeExperience(id: string) {
    setExperiences(experiences.filter((e) => e.id !== id));
  }
  function addEducation() {
    setEducation([...education, { id: Date.now().toString(), title: '', institution: '', year: '', description: '' }]);
  }
  function removeEducation(id: string) {
    setEducation(education.filter((e) => e.id !== id));
  }
  function addSkill() {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  }
  function addLanguage() {
    if (langInput.trim()) {
      setLanguages([...languages, langInput.trim()]);
      setLangInput('');
    }
  }

  async function generateWithAI(field: 'summary' | 'experience') {
    setAiLoading(field);
    try {
      const resp = await fetch('/api/cv/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({
          field,
          fullName,
          profession,
          experiences: experiences.filter((e) => e.position || e.company),
          education: education.filter((e) => e.title || e.institution),
          skills,
          language,
        }, remoteAIConsent)),
      });
      if (!resp.ok) throw new Error('Error en la generación');
      const data = await resp.json();
      if (field === 'summary') {
        setSummary(data.text);
        toast.success('Resumen generado con IA ✨');
      } else {
        setExperiences((prev) =>
          prev.map((e, i) => (i === 0 ? { ...e, description: data.text } : e))
        );
        toast.success('Descripción mejorada con IA ✨');
      }
    } catch (e) {
      toast.error('No se pudo generar. Inténtalo de nuevo.');
    } finally {
      setAiLoading(null);
    }
  }

  function handlePrint() {
    setShowPreview(true);
    setTimeout(() => window.print(), 300);
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 print:py-0 print:px-0">
      <div className="text-center mb-6 print:hidden">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Sparkles className="h-3 w-3" /> IA integrada
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.cv_title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">{t.cv_subtitle}</p>

        <RemoteAIConsent className="mx-auto mt-4 max-w-2xl" />

        {/* Tool toggle: CV vs Cover Letter */}
        <div className="mt-4 grid w-full grid-cols-1 gap-1 rounded-lg bg-muted p-1 sm:inline-grid sm:w-auto sm:grid-cols-3">
          <button
            onClick={() => setActiveTool('cv')}
            className={cn(
              'flex items-center justify-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
              activeTool === 'cv' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <FileText className="h-3.5 w-3.5" />
            Currículum
          </button>
          <button
            onClick={() => setActiveTool('letter')}
            className={cn(
              'flex items-center justify-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
              activeTool === 'letter' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Mail className="h-3.5 w-3.5" />
            Carta de presentación
            <Badge variant="secondary" className="text-[9px] py-0 h-4">Nuevo</Badge>
          </button>
          <button
            onClick={() => setActiveTool('ats')}
            className={cn(
              'flex items-center justify-center gap-1.5 rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
              activeTool === 'ats' ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Target className="h-3.5 w-3.5" />
            Análisis ATS
            <Badge variant="secondary" className="text-[9px] py-0 h-4">Nuevo</Badge>
          </button>
        </div>
      </div>

      {/* Cover Letter Builder */}
      {activeTool === 'letter' && (
        <div className="max-w-3xl mx-auto">
          <CoverLetterBuilder remoteAIConsent={remoteAIConsent} />
        </div>
      )}

      {/* ATS Analyzer */}
      {activeTool === 'ats' && (
        <div className="max-w-3xl mx-auto">
          <ATSAnalyzer remoteAIConsent={remoteAIConsent} />
        </div>
      )}

      {/* CV Builder */}
      {activeTool === 'cv' && (
        <div className="grid lg:grid-cols-2 gap-6 print:grid-cols-1 print:gap-0">
        {/* EDITOR */}
        <div className="min-w-0 space-y-4 print:hidden">
          <Tabs defaultValue="personal">
            <TabsList className="grid grid-cols-5 w-full h-auto">
              <TabsTrigger value="personal" className="flex-col gap-0.5 py-2 text-xs">
                <User className="h-4 w-4" />
                Personal
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex-col gap-0.5 py-2 text-xs">
                <Briefcase className="h-4 w-4" />
                Exp.
              </TabsTrigger>
              <TabsTrigger value="education" className="flex-col gap-0.5 py-2 text-xs">
                <GraduationCap className="h-4 w-4" />
                Edu.
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex-col gap-0.5 py-2 text-xs">
                <Award className="h-4 w-4" />
                Skills
              </TabsTrigger>
              <TabsTrigger value="design" className="flex-col gap-0.5 py-2 text-xs">
                <Palette className="h-4 w-4" />
                Diseño
              </TabsTrigger>
            </TabsList>

            {/* PERSONAL */}
            <TabsContent value="personal" className="space-y-3">
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="name" className="text-xs">{t.cv_fullName}</Label>
                      <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="María González" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="prof" className="text-xs">{t.cv_profession}</Label>
                      <Input id="prof" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Cuidadora de personas mayores" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs">{t.cv_email}</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="maria@email.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs">{t.cv_phone}</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+34 600 000 000" className="mt-1" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="addr" className="text-xs">{t.cv_address}</Label>
                      <Input id="addr" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Madrid, España" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label htmlFor="summary" className="text-xs">{t.cv_summary}</Label>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => generateWithAI('summary')}
                        disabled={aiLoading === 'summary' || !profession}
                        className="h-11 gap-1 text-xs"
                      >
                        {aiLoading === 'summary' ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <Sparkles className="h-3 w-3 text-primary" />
                        )}
                        {t.cv_generate}
                      </Button>
                    </div>
                    <Textarea
                      id="summary"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Profesional con experiencia en... (la IA puede ayudarte)"
                      className="min-h-[100px] text-sm"
                    />
                    <div className="flex items-center justify-between text-[11px]">
                      {!profession ? (
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" />
                          Escribe tu profesión para activar la IA
                        </span>
                      ) : (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          IA disponible · pulsa «Generar»
                        </span>
                      )}
                      <span className={cn(
                        'tabular-nums',
                        summary.length > 400 ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground'
                      )}>
                        {summary.length}/500
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* EXPERIENCE */}
            <TabsContent value="experience" className="space-y-3">
              {experiences.map((exp, i) => (
                <Card key={exp.id}>
                  <CardContent className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">Experiencia {i + 1}</span>
                      {experiences.length > 1 && (
                    <Button size="icon" variant="ghost" onClick={() => removeExperience(exp.id)} className="h-11 w-11" aria-label="Eliminar experiencia">
                      <Trash2 className="h-3.5 w-3.5 text-destructive" />
                        </Button>
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <Input value={exp.position} onChange={(e) => setExperiences(prev => prev.map(x => x.id === exp.id ? { ...x, position: e.target.value } : x))} placeholder="Puesto" className="text-sm h-9" />
                      <Input value={exp.company} onChange={(e) => setExperiences(prev => prev.map(x => x.id === exp.id ? { ...x, company: e.target.value } : x))} placeholder="Empresa" className="text-sm h-9" />
                      <Input value={exp.startDate} onChange={(e) => setExperiences(prev => prev.map(x => x.id === exp.id ? { ...x, startDate: e.target.value } : x))} placeholder="Desde (ej: Ene 2022)" className="text-sm h-9" />
                      <Input value={exp.endDate} onChange={(e) => setExperiences(prev => prev.map(x => x.id === exp.id ? { ...x, endDate: e.target.value } : x))} placeholder="Hasta (o Actual)" className="text-sm h-9" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Descripción</span>
                        {i === 0 && exp.position && (
                          <Button size="sm" variant="outline" onClick={() => generateWithAI('experience')} disabled={aiLoading === 'experience'} className="h-11 gap-1 text-xs">
                            {aiLoading === 'experience' ? <Loader2 className="h-3 w-3 animate-spin" /> : <Sparkles className="h-3 w-3 text-primary" />}
                            Mejorar con IA
                          </Button>
                        )}
                      </div>
                      <Textarea value={exp.description} onChange={(e) => setExperiences(prev => prev.map(x => x.id === exp.id ? { ...x, description: e.target.value } : x))} placeholder="• Tareas realizadas&#10;• Logros conseguidos" className="text-sm min-h-[80px]" />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addExperience} className="w-full gap-1.5">
                <Plus className="h-4 w-4" />
                {t.cv_addExperience}
              </Button>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="space-y-3">
              {education.map((ed, i) => (
                <Card key={ed.id}>
                  <CardContent className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">Educación {i + 1}</span>
                      {education.length > 1 && (
                        <Button size="icon" variant="ghost" onClick={() => removeEducation(ed.id)} className="h-11 w-11" aria-label="Eliminar formación">
                          <Trash2 className="h-3.5 w-3.5 text-destructive" />
                        </Button>
                      )}
                    </div>
                    <Input value={ed.title} onChange={(e) => setEducation(prev => prev.map(x => x.id === ed.id ? { ...x, title: e.target.value } : x))} placeholder="Título (ej: Bachillerato)" className="text-sm h-9" />
                    <Input value={ed.institution} onChange={(e) => setEducation(prev => prev.map(x => x.id === ed.id ? { ...x, institution: e.target.value } : x))} placeholder="Institución" className="text-sm h-9" />
                    <Input value={ed.year} onChange={(e) => setEducation(prev => prev.map(x => x.id === ed.id ? { ...x, year: e.target.value } : x))} placeholder="Año (ej: 2018-2020)" className="text-sm h-9" />
                    <Textarea value={ed.description} onChange={(e) => setEducation(prev => prev.map(x => x.id === ed.id ? { ...x, description: e.target.value } : x))} placeholder="Notas, menciones..." className="text-sm min-h-[60px]" />
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addEducation} className="w-full gap-1.5">
                <Plus className="h-4 w-4" />
                {t.cv_addEducation}
              </Button>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills" className="space-y-3">
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <Label className="text-xs">{t.cv_skills}</Label>
                    <div className="flex gap-2 mt-1">
                      <Input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} placeholder="Ej: Atención al cliente" className="h-9" />
                      <Button size="icon" onClick={addSkill} aria-label="Añadir habilidad"><Plus className="h-4 w-4" /></Button>
                    </div>
                    {skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {skills.map((s) => (
                          <Badge key={s} variant="secondary" className="gap-1 pr-1">
                            {s}
                            <button type="button" onClick={() => setSkills(skills.filter(x => x !== s))} className="hover:text-destructive" aria-label={`Eliminar habilidad: ${s}`}>
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Skill suggestions */}
                  <div>
                    <span className="text-xs text-muted-foreground">Sugerencias:</span>
                    <ScrollArea className="h-40 mt-1.5">
                      <div className="space-y-2 pr-2">
                        {SKILL_SUGGESTIONS.slice(0, 5).map((cat) => (
                          <div key={cat.category}>
                            <div className="text-[11px] font-medium text-muted-foreground mb-1">{cat.category}</div>
                            <div className="flex flex-wrap gap-1">
                              {cat.skills.slice(0, 6).map((s) => (
                                <button key={s} onClick={() => !skills.includes(s) && setSkills([...skills, s])} className="text-[11px] px-2 py-0.5 rounded-full border border-border hover:bg-accent transition-colors">
                                  + {s}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <Label className="text-xs">{t.cv_languages}</Label>
                    <div className="flex gap-2 mt-1">
                      <Input value={langInput} onChange={(e) => setLangInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())} placeholder="Ej: Español (nativo)" className="h-9" />
                      <Button size="icon" onClick={addLanguage} aria-label="Añadir idioma"><Plus className="h-4 w-4" /></Button>
                    </div>
                    {languages.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {languages.map((l) => (
                          <Badge key={l} variant="secondary" className="gap-1 pr-1">
                            <Languages className="h-3 w-3" />
                            {l}
                            <button type="button" onClick={() => setLanguages(languages.filter(x => x !== l))} className="hover:text-destructive" aria-label={`Eliminar idioma: ${l}`}>
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* DESIGN */}
            <TabsContent value="design" className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-xs">{t.cv_template}</Label>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setFullName('María González Pérez');
                        setProfession('Cuidadora de personas mayores');
                        setEmail('maria.gonzalez@email.com');
                        setPhone('+34 612 345 678');
                        setAddress('Calle Mayor 15, 28013 Madrid');
                        setSummary('Cuidadora con 5 años de experiencia en atención a personas mayores. Especializada en demencia, movilidad reducida y acompañamiento médico. Empática, responsable y con formación en primeros auxilios.');
                        setExperiences([
                          { id: '1', position: 'Cuidadora de personas mayores', company: 'Familia particular', startDate: 'Ene 2022', endDate: 'Actual', description: '• Atención integral a persona de 85 años con demencia\n• Administración de medicación y control de constantes\n• Acompañamiento a citas médicas y actividades\n• Preparación de comidas adaptadas a dieta especial' },
                          { id: '2', position: 'Auxiliar de ayuda a domicilio', company: 'Cruz Roja Española', startDate: 'Sep 2020', endDate: 'Dic 2021', description: '• Atención a 15 familias con diferentes necesidades\n• Apoyo en tareas domésticas y compras\n• Companyamiento y apoyo emocional\n• Coordinación con trabajadores sociales' },
                        ]);
                        setEducation([
                          { id: '1', title: 'Certificado de Profesionalidad - Atención Sociosanitaria', institution: 'IFTI Madrid', year: '2020', description: 'Formación profesional de grado 3' },
                          { id: '2', title: 'Curso de Primeros Auxilios', institution: 'Cruz Roja', year: '2019', description: '' },
                        ]);
                        setSkills(['Cuidados de personas mayores', 'Administración de medicación', 'Primeros auxilios', 'Demencia y Alzheimer', 'Cocina adaptada', 'Empatía', 'Resolución de problemas', 'Español nativo']);
                        setLanguages(['Español (nativo)', 'Inglés (básico)', 'Rumano (nativo)']);
                        toast.success('Datos de ejemplo cargados ✨');
                      }}
                      className="h-11 gap-1 text-xs"
                    >
                      <Sparkles className="h-3 w-3 text-primary" />
                      Ver ejemplo
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CV_TEMPLATES.map((tpl) => (
                      <TemplatePreview
                        key={tpl.id}
                        template={tpl}
                        selected={template.id === tpl.id}
                        onSelect={() => setTemplate(tpl)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    Guías y consejos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {CV_GUIDES.slice(0, 5).map((g) => (
                    <details key={g.id} className="group">
                      <summary className="text-xs font-medium cursor-pointer flex items-center gap-1 hover:text-primary">
                        <Plus className="h-3 w-3 group-open:hidden" />
                        <Check className="h-3 w-3 hidden group-open:inline" />
                        {g.title}
                      </summary>
                      <div className="text-xs text-muted-foreground mt-1 pl-4">{g.content.slice(0, 150)}...</div>
                    </details>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-xs font-medium mb-2">Verbos de acción para tu CV</div>
                  <ScrollArea className="h-32">
                    <div className="flex flex-wrap gap-1">
                      {ACTION_VERBS.slice(0, 3).flatMap(c => c.verbs.slice(0, 6)).map((v) => (
                        <button
                          key={v}
                          onClick={() => {
                            const desc = experiences[0]?.description || '';
                            setExperiences(prev => prev.map((e, i) => i === 0 ? { ...e, description: desc + (desc ? ' ' : '') + v } : e));
                            toast.success(`Añadido: ${v}`);
                          }}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/60 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Action bar */}
          <div className="sticky bottom-4 space-y-2">
            {/* Saved indicator */}
            {savedAt && (
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground bg-card/80 backdrop-blur px-3 py-1.5 rounded-lg border border-border">
                <Save className="h-3 w-3 text-emerald-500" />
                Guardado automáticamente · {savedAt.toLocaleTimeString()}
                <button
                  onClick={() => {
                    if (confirm('¿Borrar todos los datos del CV? Esta acción no se puede deshacer.')) {
                      localStorage.removeItem('manos-abiertas-cv');
                      setFullName(''); setProfession(''); setEmail(''); setPhone(''); setAddress(''); setSummary('');
                      setExperiences([{ id: '1', position: '', company: '', startDate: '', endDate: '', description: '' }]);
                      setEducation([{ id: '1', title: '', institution: '', year: '', description: '' }]);
                      setSkills([]); setLanguages([]);
                      setSavedAt(null);
                      toast.success('CV reiniciado');
                    }
                  }}
                  className="ml-2 text-destructive hover:underline inline-flex items-center gap-0.5"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reiniciar
                </button>
              </div>
            )}
            <div className="flex gap-2 bg-card/80 backdrop-blur p-2 rounded-xl border border-border shadow-lg">
              <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="flex-1 gap-1.5">
                <Eye className="h-4 w-4" />
                {showPreview ? 'Ocultar' : t.cv_preview}
              </Button>
              <Button onClick={handlePrint} variant="outline" disabled={!hasContent} className="flex-1 gap-1.5">
                <Printer className="h-4 w-4" />
                {t.print}
              </Button>
              <Button
                onClick={() => hasContent ? toast.success('Usa «Imprimir» → «Guardar como PDF»') : toast.error('Rellena tu CV primero')}
                disabled={!hasContent}
                className="flex-1 gap-1.5"
              >
                <Download className="h-4 w-4" />
                {t.download}
              </Button>
            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div className={cn(showPreview ? 'block' : 'hidden lg:block', 'print:block')}>
          <CVPreview
            template={template}
            fullName={fullName}
            profession={profession}
            email={email}
            phone={phone}
            address={address}
            summary={summary}
            experiences={experiences.filter((e) => e.position || e.company)}
            education={education.filter((e) => e.title || e.institution)}
            skills={skills}
            languages={languages}
            hasContent={hasContent}
          />
        </div>
      </div>
      )}
    </div>
  );
}

function CVPreview({
  template, fullName, profession, email, phone, address, summary, experiences, education, skills, languages, hasContent,
}: {
  template: typeof CV_TEMPLATES[0];
  fullName: string; profession: string; email: string; phone: string; address: string;
  summary: string; experiences: Experience[]; education: Education[]; skills: string[]; languages: string[];
  hasContent: boolean;
}) {
  return (
    <div className="bg-white text-black shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none min-h-[600px]">
      <div className="p-8" style={{ fontFamily: 'Georgia, serif' }}>
        {/* Header */}
        <div className="border-b-2 pb-4 mb-4" style={{ borderColor: template.id === 'modern' ? '#c2410c' : '#000' }}>
          <h2 className="text-3xl font-bold tracking-tight">
            {fullName || <span className="text-gray-400">Tu Nombre</span>}
          </h2>
          <p className="text-lg text-gray-700 mt-0.5">{profession || <span className="text-gray-400">Tu Profesión</span>}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
            {email && <span>✉ {email}</span>}
            {phone && <span>☎ {phone}</span>}
            {address && <span>📍 {address}</span>}
          </div>
        </div>

        {/* Summary */}
        {summary && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-1.5 text-gray-700">Perfil Profesional</h2>
            <p className="text-sm leading-relaxed text-gray-800">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Experiencia</h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{exp.position || 'Puesto'}</h3>
                    <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate || 'Actual'}</span>
                  </div>
                  <div className="text-xs text-gray-600 italic mb-1">{exp.company}</div>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Educación</h2>
            <div className="space-y-2">
              {education.map((ed) => (
                <div key={ed.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-sm">{ed.title || 'Título'}</h3>
                    <span className="text-xs text-gray-500">{ed.year}</span>
                  </div>
                  <div className="text-xs text-gray-600 italic">{ed.institution}</div>
                  {ed.description && <p className="text-xs text-gray-700 mt-0.5">{ed.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Habilidades</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s} className="text-xs px-2 py-0.5 rounded border border-gray-300 bg-gray-50">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Idiomas</h2>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l} className="text-xs">• {l}</span>
              ))}
            </div>
          </div>
        )}

        {!hasContent && (
          <div className="text-center py-16 text-gray-400">
            <div className="relative inline-block mb-4">
              <FileText className="h-16 w-16 mx-auto opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl animate-pulse">📝</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500 mb-1">Tu CV aparecerá aquí</p>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              Empieza a rellenar el formulario de la izquierda. Verás los cambios en tiempo real.
            </p>
            <div className="mt-6 max-w-md mx-auto space-y-2 opacity-40">
              <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
              <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto mt-4" />
              <div className="h-3 bg-gray-200 rounded w-1/3 mx-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
