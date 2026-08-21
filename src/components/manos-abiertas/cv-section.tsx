'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Plus, Trash2, Sparkles, Download, Printer, Eye, User, Briefcase, GraduationCap, Award, Languages, Palette, Loader2, Check, Lightbulb, Save, RotateCcw, Mail, Target, Camera, ArrowLeft, ArrowRight } from 'lucide-react';
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

const QUICK_PROFILES = [
  {
    id: 'first-job',
    label: 'Primer empleo',
    profession: 'Auxiliar de comercio',
    summary: 'Persona responsable y organizada, con facilidad para aprender, atender al publico y colaborar en equipo. Disponibilidad para incorporacion y desarrollar nuevas habilidades.',
    experience: { id: '1', position: 'Voluntariado y apoyo comunitario', company: 'Entidad local', startDate: '2025', endDate: 'Actual', description: '• Atencion y orientacion a personas\n• Organizacion de materiales y actividades\n• Colaboracion con un equipo diverso' },
    skills: ['Atencion al cliente', 'Organizacion', 'Trabajo en equipo', 'Aprendizaje rapido'],
    templateId: 'classic-europass',
  },
  {
    id: 'services',
    label: 'Servicios y cuidados',
    profession: 'Profesional de cuidados y atencion domiciliaria',
    summary: 'Profesional empatica y responsable, con experiencia en acompanamiento, apoyo en tareas cotidianas y atencion centrada en la persona. Destaca por su puntualidad, paciencia y comunicacion cercana.',
    experience: { id: '1', position: 'Cuidador/a y apoyo domiciliario', company: 'Familias particulares', startDate: '2022', endDate: 'Actual', description: '• Acompanamiento y apoyo en actividades diarias\n• Preparacion de comidas y organizacion del hogar\n• Coordinacion de citas y comunicacion con familiares' },
    skills: ['Cuidados de personas mayores', 'Empatia', 'Organizacion', 'Primeros auxilios'],
    templateId: 'sidebar-photo',
  },
  {
    id: 'digital',
    label: 'Perfil digital',
    profession: 'Desarrollador/a frontend junior',
    summary: 'Perfil digital orientado a crear interfaces web accesibles y responsive. Combina HTML, CSS y JavaScript con capacidad de aprendizaje, documentacion y resolucion de problemas.',
    experience: { id: '1', position: 'Proyectos web propios', company: 'Portfolio personal', startDate: '2025', endDate: 'Actual', description: '• Desarrollo de interfaces responsive\n• Mejora de accesibilidad y rendimiento\n• Control de versiones con Git y documentacion tecnica' },
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Accesibilidad web'],
    templateId: 'two-column-tech',
  },
  {
    id: 'hostelry',
    label: 'Hosteleria y restauracion',
    profession: 'Camarero/a de sala y barra',
    summary: 'Profesional de hosteleria con orientacion al cliente, agilidad bajo presion y buena presencia. Acostumbrado a trabajar en equipo en turnos rotativos y temporada alta.',
    experience: { id: '1', position: 'Camarero/a', company: 'Restaurante / bar', startDate: '2023', endDate: 'Actual', description: '• Atencion en sala y barra durante servicios de alta demanda\n• Manejo de bandeja, TPV y cobro\n• Coordinacion con cocina para tiempos de servicio' },
    skills: ['Atencion al cliente', 'Trabajo bajo presion', 'Manejo de TPV', 'Idiomas basicos'],
    templateId: 'creative-vibrant',
  },
  {
    id: 'construction',
    label: 'Construccion y oficios',
    profession: 'Peon de construccion / oficios varios',
    summary: 'Trabajador responsable con experiencia en obra, manejo de herramientas y cumplimiento de normas de seguridad. Puntual, resistente y con disposicion para aprender oficios especificos.',
    experience: { id: '1', position: 'Peon de obra', company: 'Empresa de construccion', startDate: '2021', endDate: 'Actual', description: '• Apoyo en tareas de albanileria, pintura y limpieza de obra\n• Cumplimiento estricto de normas de prevencion de riesgos\n• Manejo de herramientas manuales y electricas basicas' },
    skills: ['Prevencion de riesgos laborales', 'Trabajo en equipo', 'Resistencia fisica', 'Puntualidad'],
    templateId: 'professional-execute',
  },
  {
    id: 'logistics',
    label: 'Logistica y reparto',
    profession: 'Repartidor/a y mozo de almacen',
    summary: 'Profesional organizado con carnet de conducir y conocimiento de la ciudad. Experiencia en gestion de pedidos, carga y descarga, y cumplimiento de rutas y horarios.',
    experience: { id: '1', position: 'Repartidor/a', company: 'Empresa de logistica', startDate: '2022', endDate: 'Actual', description: '• Reparto de pedidos en tiempo y forma usando app de rutas\n• Carga y descarga de mercancia\n• Atencion cordial en la entrega y gestion de incidencias' },
    skills: ['Carnet de conducir B', 'Orientacion espacial', 'Gestion del tiempo', 'Apps de reparto'],
    templateId: 'modern-clean',
  },
  {
    id: 'admin',
    label: 'Administracion y oficina',
    profession: 'Auxiliar administrativo/a',
    summary: 'Perfil administrativo organizado, con manejo de Office (Word, Excel), atencion telefonica y archivo documental. Discreto, resolutivo y con buena redaccion.',
    experience: { id: '1', position: 'Auxiliar administrativo/a', company: 'Oficina / gestoria', startDate: '2022', endDate: 'Actual', description: '• Gestion de correo, archivo y agenda\n• Elaboracion de documentos con Word y Excel\n• Atencion telefonica y presencial a clientes' },
    skills: ['Microsoft Office', 'Atencion telefonica', 'Redaccion', 'Organizacion documental'],
    templateId: 'minimal-elegant',
  },
  {
    id: 'commerce',
    label: 'Comercio y ventas',
    profession: 'Dependiente/a y vendedor/a',
    summary: 'Profesional de ventas con habilidad para el trato con el publico, gestion de caja y reposicion de producto. Orientado a resultados y con buena imagen personal.',
    experience: { id: '1', position: 'Dependiente/a', company: 'Tienda / comercio', startDate: '2023', endDate: 'Actual', description: '• Atencion y asesoramiento a clientes\n• Manejo de caja registradora y TPV\n• Reposicion y organizacion de producto en tienda' },
    skills: ['Ventas', 'Atencion al cliente', 'Manejo de caja', 'Trabajo en equipo'],
    templateId: 'sidebar-photo',
  },
] as const;

export function CVSection() {
  const { language } = useAppStore();
  const t = getTranslation(language);
  const [template, setTemplate] = useState(CV_TEMPLATES[0]);
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
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
  const [guidedStep, setGuidedStep] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [pageOverflow, setPageOverflow] = useState<{ overflowPx: number; percent: number } | null>(null);

  // A4 útil aprox a 96dpi con márgenes de impresión: ~1050px de alto de contenido
  const PAGE_HEIGHT_PX = 1050;

  useEffect(() => {
    const node = previewRef.current;
    if (!node) return;
    const measure = () => {
      const contentHeight = node.scrollHeight;
      if (contentHeight > PAGE_HEIGHT_PX) {
        setPageOverflow({
          overflowPx: contentHeight - PAGE_HEIGHT_PX,
          percent: Math.round((contentHeight / PAGE_HEIGHT_PX) * 100),
        });
      } else {
        setPageOverflow(null);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  });

  // Autosave to localStorage (debounced via effect)
  useEffect(() => {
    const data = { template: template.id, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages };
    const id = setTimeout(() => {
      try {
        localStorage.setItem('manos-abiertas-cv', JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
        setSavedAt(new Date());
      } catch { /* ignore */ }
    }, 800);
    return () => clearTimeout(id);
  }, [template, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages]);

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
        if (data.photo) setPhoto(data.photo);
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

  function loadQuickProfile(profile: (typeof QUICK_PROFILES)[number]) {
    setProfession(profile.profession);
    setSummary(profile.summary);
    setExperiences([{ ...profile.experience }]);
    setSkills([...profile.skills]);
    const nextTemplate = CV_TEMPLATES.find((item) => item.id === profile.templateId);
    if (nextTemplate) setTemplate(nextTemplate);
    toast.success(`Plantilla rapida cargada: ${profile.label}`);
  }

  function handlePhoto(file?: File) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Selecciona una imagen valida.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const image = new window.Image();
      image.onload = () => {
        const size = Math.min(720, Math.max(image.width, image.height));
        const scale = Math.min(1, size / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext('2d');
        if (!context) return;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        setPhoto(canvas.toDataURL('image/jpeg', 0.84));
        toast.success('Foto anadida. Se guarda solo en este navegador.');
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  }

  async function generateWithAI(field: 'summary' | 'experience') {
    setAiLoading(field);
    try {
      const resp = await fetch('/api/cv/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          field,
          fullName,
          profession,
          experiences: experiences.filter((e) => e.position || e.company),
          education: education.filter((e) => e.title || e.institution),
          skills,
          language,
        }),
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
          <CoverLetterBuilder />
        </div>
      )}

      {/* ATS Analyzer */}
      {activeTool === 'ats' && (
        <div className="max-w-3xl mx-auto">
          <ATSAnalyzer />
        </div>
      )}

      {/* CV Builder */}
      {activeTool === 'cv' && (
        <div className="grid lg:grid-cols-2 gap-6 print:grid-cols-1 print:gap-0">
        {/* EDITOR */}
        <div className="min-w-0 space-y-4 print:hidden">
          <Card className="border-primary/30 bg-primary/[0.03]">
            <CardContent className="p-4">
              {guidedStep === null ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-semibold"><Sparkles className="h-4 w-4 text-primary" /> CV guiado</div>
                    <p className="mt-1 text-xs text-muted-foreground">Responde cuatro preguntas sencillas y recibe una base profesional editable.</p>
                  </div>
                  <Button onClick={() => setGuidedStep(0)} className="gap-2">
                    Empezar <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Paso {guidedStep + 1} de 4</span>
                    <button onClick={() => setGuidedStep(null)} className="hover:text-foreground">Salir</button>
                  </div>
                  {guidedStep === 0 && (
                    <div>
                      <Label htmlFor="guided-name">¿Como te llamas?</Label>
                      <Input id="guided-name" value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Nombre y apellidos" className="mt-1" autoFocus />
                    </div>
                  )}
                  {guidedStep === 1 && (
                    <div>
                      <Label htmlFor="guided-profession">¿Que trabajo buscas o sabes hacer?</Label>
                      <Input id="guided-profession" value={profession} onChange={(event) => setProfession(event.target.value)} placeholder="Ej: auxiliar de cocina" className="mt-1" autoFocus />
                    </div>
                  )}
                  {guidedStep === 2 && (
                    <div>
                      <Label htmlFor="guided-experience">¿Cual fue tu experiencia mas relevante?</Label>
                      <Input
                        id="guided-experience"
                        value={experiences[0]?.position || ''}
                        onChange={(event) => setExperiences((prev) => prev.map((item, index) => index === 0 ? { ...item, position: event.target.value } : item))}
                        placeholder="Ej: atencion al cliente, practicas o voluntariado"
                        className="mt-1"
                        autoFocus
                      />
                    </div>
                  )}
                  {guidedStep === 3 && (
                    <div>
                      <Label htmlFor="guided-skill">¿Que habilidad quieres destacar?</Label>
                      <Input id="guided-skill" value={skillInput} onChange={(event) => setSkillInput(event.target.value)} placeholder="Ej: organizacion" className="mt-1" autoFocus />
                    </div>
                  )}
                  <div className="flex justify-between">
                    <Button variant="ghost" onClick={() => setGuidedStep((step) => Math.max(0, (step || 0) - 1))} disabled={guidedStep === 0} className="gap-1">
                      <ArrowLeft className="h-4 w-4" /> Atras
                    </Button>
                    <Button
                      onClick={() => {
                        if (guidedStep < 3) {
                          setGuidedStep(guidedStep + 1);
                          return;
                        }
                        if (skillInput.trim() && !skills.includes(skillInput.trim())) setSkills((prev) => [...prev, skillInput.trim()]);
                        setSkillInput('');
                        setGuidedStep(null);
                        setShowPreview(true);
                        if (profession) void generateWithAI('summary');
                      }}
                      className="gap-1"
                    >
                      {guidedStep === 3 ? 'Crear base profesional' : 'Siguiente'} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
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
                    <div className="sm:col-span-2">
                      <Label htmlFor="cv-photo" className="text-xs">Foto opcional</Label>
                      <div className="mt-1 flex items-center gap-3 rounded-md border p-3">
                        <div
                          className="h-16 w-16 shrink-0 rounded-md border bg-muted bg-cover bg-center"
                          style={photo ? { backgroundImage: `url(${photo})` } : undefined}
                          role={photo ? 'img' : undefined}
                          aria-label={photo ? 'Foto seleccionada para el curriculum' : undefined}
                        >
                          {!photo && <Camera className="m-5 h-6 w-6 text-muted-foreground" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <Input id="cv-photo" type="file" accept="image/*" onChange={(event) => handlePhoto(event.target.files?.[0])} className="text-xs" />
                          <p className="mt-1 text-[11px] text-muted-foreground">Se reduce y guarda solo en este navegador. Nunca se envia a la IA.</p>
                        </div>
                        {photo && <Button variant="ghost" size="sm" onClick={() => setPhoto(null)}>Quitar</Button>}
                      </div>
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
                        className="h-7 gap-1 text-xs"
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
                    <Button size="icon" variant="ghost" onClick={() => removeExperience(exp.id)} className="h-7 w-7" aria-label="Eliminar experiencia">
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
                          <Button size="sm" variant="outline" onClick={() => generateWithAI('experience')} disabled={aiLoading === 'experience'} className="h-7 gap-1 text-xs">
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
                        <Button size="icon" variant="ghost" onClick={() => removeEducation(ed.id)} className="h-7 w-7" aria-label="Eliminar formación">
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
                  <Label className="text-xs">Plantillas rapidas medio rellenas</Label>
                  <div className="mb-4 mt-2 grid gap-2 sm:grid-cols-3">
                    {QUICK_PROFILES.map((profile) => (
                      <Button key={profile.id} size="sm" variant="outline" onClick={() => loadQuickProfile(profile)} className="h-auto min-h-9 whitespace-normal text-xs">
                        {profile.label}
                      </Button>
                    ))}
                  </div>
                  <Label className="mb-2 block text-xs">{t.cv_template}</Label>
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
            {/* Page limit warning */}
            {pageOverflow && (
              <div className="flex items-start gap-2 text-[11px] bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 px-3 py-2 rounded-lg border border-amber-300/60 dark:border-amber-800/60">
                <Target className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>
                  Tu CV ocupa aprox. <strong>{pageOverflow.percent}%</strong> de una página A4. Recorta descripciones,
                  quita una experiencia antigua o reduce el resumen para que quepa en 1 página (recomendado en España).
                </span>
              </div>
            )}
            {/* Saved indicator */}
            {savedAt && (
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground bg-card/80 backdrop-blur px-3 py-1.5 rounded-lg border border-border">
                <Save className="h-3 w-3 text-emerald-500" />
                Guardado automáticamente · {savedAt.toLocaleTimeString()}
                <button
                  onClick={() => {
                    if (confirm('¿Borrar todos los datos del CV? Esta acción no se puede deshacer.')) {
                      localStorage.removeItem('manos-abiertas-cv');
                      setFullName(''); setProfession(''); setEmail(''); setPhone(''); setAddress(''); setPhoto(null); setSummary('');
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
            previewRef={previewRef}
            template={template}
            fullName={fullName}
            profession={profession}
            email={email}
            phone={phone}
            address={address}
            photo={photo}
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

/**
 * Diseños premium por plantilla.
 * Cada layout tiene una composición visual distinta (no solo color):
 * - classic: cabecera centrada, una columna, estilo Europass
 * - modern: barra lateral oscura con contacto/skills, columna principal clara
 * - minimal: una columna estrecha, tipografía sobria, sin color de acento
 * - creative: cabecera con degradado de color y foto circular
 * - professional: cabecera ejecutiva con franja de color y grid de logros
 */
function CVPreview({
  previewRef, template, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages, hasContent,
}: {
  previewRef: React.RefObject<HTMLDivElement | null>;
  template: typeof CV_TEMPLATES[0];
  fullName: string; profession: string; email: string; phone: string; address: string;
  photo: string | null;
  summary: string; experiences: Experience[]; education: Education[]; skills: string[]; languages: string[];
  hasContent: boolean;
}) {
  if (!hasContent) {
    return (
      <div className="bg-white text-black shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none min-h-[600px]">
        <div className="p-8 text-center py-16 text-gray-400">
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
      </div>
    );
  }

  const accent = ACCENT_BY_LAYOUT[template.layout] || ACCENT_BY_LAYOUT.classic;
  const Body = LAYOUT_COMPONENTS[template.layout] || LAYOUT_COMPONENTS.classic;

  return (
    <div className="bg-white text-black shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
      <div ref={previewRef} data-cv-page style={{ fontFamily: template.layout === 'minimal' ? 'Georgia, serif' : 'system-ui, -apple-system, sans-serif' }}>
        <Body
          accent={accent}
          fullName={fullName} profession={profession} email={email} phone={phone} address={address}
          photo={photo} summary={summary} experiences={experiences} education={education}
          skills={skills} languages={languages}
        />
      </div>
    </div>
  );
}

type LayoutProps = {
  accent: { primary: string; secondary: string; text: string; soft: string };
  fullName: string; profession: string; email: string; phone: string; address: string;
  photo: string | null; summary: string; experiences: Experience[]; education: Education[];
  skills: string[]; languages: string[];
};

const ACCENT_BY_LAYOUT: Record<string, { primary: string; secondary: string; text: string; soft: string }> = {
  classic: { primary: '#1e3a8a', secondary: '#3b82f6', text: '#1e293b', soft: '#eff6ff' },
  modern: { primary: '#0f766e', secondary: '#14b8a6', text: '#134e4a', soft: '#f0fdfa' },
  minimal: { primary: '#334155', secondary: '#64748b', text: '#1e293b', soft: '#f8fafc' },
  creative: { primary: '#db2777', secondary: '#f97316', text: '#831843', soft: '#fdf2f8' },
  professional: { primary: '#4338ca', secondary: '#7c3aed', text: '#312e81', soft: '#eef2ff' },
};

function ContactLine({ email, phone, address }: { email: string; phone: string; address: string }) {
  return (
    <>
      {email && <span>✉ {email}</span>}
      {phone && <span>☎ {phone}</span>}
      {address && <span>📍 {address}</span>}
    </>
  );
}

function ExperienceBlock({ experiences, accent }: { experiences: LayoutProps['experiences']; accent: LayoutProps['accent'] }) {
  if (!experiences.length) return null;
  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accent.primary }}>Experiencia</h2>
      <div className="space-y-3">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <div className="flex justify-between items-baseline gap-2">
              <h3 className="font-semibold text-sm">{exp.position || 'Puesto'}</h3>
              <span className="text-xs text-gray-500 shrink-0">{exp.startDate} - {exp.endDate || 'Actual'}</span>
            </div>
            <div className="text-xs text-gray-600 italic mb-1">{exp.company}</div>
            <p className="text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationBlock({ education, accent }: { education: LayoutProps['education']; accent: LayoutProps['accent'] }) {
  if (!education.length) return null;
  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accent.primary }}>Educación</h2>
      <div className="space-y-2">
        {education.map((ed) => (
          <div key={ed.id}>
            <div className="flex justify-between items-baseline gap-2">
              <h3 className="font-semibold text-sm">{ed.title || 'Título'}</h3>
              <span className="text-xs text-gray-500 shrink-0">{ed.year}</span>
            </div>
            <div className="text-xs text-gray-600 italic">{ed.institution}</div>
            {ed.description && <p className="text-xs text-gray-700 mt-0.5">{ed.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Layout: Classic (Europass) — una columna, cabecera centrada ----
function ClassicLayout({ accent, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages }: LayoutProps) {
  return (
    <div className="p-8">
      <div className="mb-4 flex items-start justify-between gap-4 border-b-2 pb-4" style={{ borderColor: accent.primary }}>
        <div className="min-w-0">
          <h2 className="text-3xl font-bold tracking-tight">{fullName || <span className="text-gray-400">Tu Nombre</span>}</h2>
          <p className="text-lg text-gray-700 mt-0.5">{profession || <span className="text-gray-400">Tu Profesión</span>}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
            <ContactLine email={email} phone={phone} address={address} />
          </div>
        </div>
        {photo && <div className="h-24 w-24 shrink-0 rounded-md border bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }} role="img" aria-label="Foto del curriculum" />}
      </div>
      {summary && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-1.5" style={{ color: accent.primary }}>Perfil Profesional</h2>
          <p className="text-sm leading-relaxed text-gray-800">{summary}</p>
        </div>
      )}
      <ExperienceBlock experiences={experiences} accent={accent} />
      <EducationBlock education={education} accent={accent} />
      {skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accent.primary }}>Habilidades</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s) => <span key={s} className="text-xs px-2 py-0.5 rounded border" style={{ borderColor: accent.secondary, background: accent.soft }}>{s}</span>)}
          </div>
        </div>
      )}
      {languages.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accent.primary }}>Idiomas</h2>
          <div className="flex flex-wrap gap-2">{languages.map((l) => <span key={l} className="text-xs">• {l}</span>)}</div>
        </div>
      )}
    </div>
  );
}

// ---- Layout: Modern — barra lateral oscura con contacto y skills ----
function ModernLayout({ accent, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages }: LayoutProps) {
  return (
    <div className="flex min-h-[600px]">
      <aside className="w-[34%] shrink-0 p-6 text-white" style={{ background: accent.primary }}>
        {photo && <div className="h-24 w-24 rounded-full border-4 border-white/30 bg-cover bg-center mb-4" style={{ backgroundImage: `url(${photo})` }} role="img" aria-label="Foto del curriculum" />}
        <h2 className="text-xl font-bold leading-tight">{fullName || 'Tu Nombre'}</h2>
        <p className="text-sm opacity-90 mt-1">{profession || 'Tu Profesión'}</p>
        <div className="mt-4 space-y-1 text-xs opacity-90">
          {email && <div>✉ {email}</div>}
          {phone && <div>☎ {phone}</div>}
          {address && <div>📍 {address}</div>}
        </div>
        {skills.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Habilidades</h3>
            <div className="flex flex-wrap gap-1">{skills.map((s) => <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/15">{s}</span>)}</div>
          </div>
        )}
        {languages.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Idiomas</h3>
            <div className="space-y-1 text-xs opacity-90">{languages.map((l) => <div key={l}>{l}</div>)}</div>
          </div>
        )}
      </aside>
      <div className="flex-1 p-6">
        {summary && (
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-1.5" style={{ color: accent.primary }}>Perfil</h2>
            <p className="text-sm leading-relaxed text-gray-800">{summary}</p>
          </div>
        )}
        <ExperienceBlock experiences={experiences} accent={accent} />
        <EducationBlock education={education} accent={accent} />
      </div>
    </div>
  );
}

// ---- Layout: Minimal — una columna estrecha, sin color de acento fuerte ----
function MinimalLayout({ fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages }: LayoutProps) {
  const accent = ACCENT_BY_LAYOUT.minimal;
  return (
    <div className="p-10 max-w-xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        {photo && <div className="h-16 w-16 shrink-0 rounded-full border bg-cover bg-center grayscale" style={{ backgroundImage: `url(${photo})` }} role="img" aria-label="Foto del curriculum" />}
        <div>
          <h2 className="text-2xl font-light tracking-wide">{fullName || 'Tu Nombre'}</h2>
          <p className="text-sm text-gray-600">{profession || 'Tu Profesión'}</p>
        </div>
      </div>
      <div className="text-xs text-gray-500 mb-6 flex flex-wrap gap-3"><ContactLine email={email} phone={phone} address={address} /></div>
      {summary && <p className="text-sm leading-relaxed text-gray-800 mb-6 border-l-2 pl-3 border-gray-300">{summary}</p>}
      <ExperienceBlock experiences={experiences} accent={accent} />
      <EducationBlock education={education} accent={accent} />
      {skills.length > 0 && <p className="text-xs text-gray-600 mb-3"><strong>Habilidades:</strong> {skills.join(' · ')}</p>}
      {languages.length > 0 && <p className="text-xs text-gray-600"><strong>Idiomas:</strong> {languages.join(' · ')}</p>}
    </div>
  );
}

// ---- Layout: Creative — cabecera con degradado y foto circular ----
function CreativeLayout({ accent, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages }: LayoutProps) {
  return (
    <div>
      <div className="p-8 text-white" style={{ background: `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})` }}>
        <div className="flex items-center gap-4">
          {photo && <div className="h-20 w-20 shrink-0 rounded-full border-4 border-white/50 bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }} role="img" aria-label="Foto del curriculum" />}
          <div>
            <h2 className="text-2xl font-bold">{fullName || 'Tu Nombre'}</h2>
            <p className="text-sm opacity-90">{profession || 'Tu Profesión'}</p>
            <div className="flex flex-wrap gap-3 mt-1 text-xs opacity-90"><ContactLine email={email} phone={phone} address={address} /></div>
          </div>
        </div>
      </div>
      <div className="p-8">
        {summary && <p className="text-sm leading-relaxed text-gray-800 mb-4">{summary}</p>}
        <ExperienceBlock experiences={experiences} accent={accent} />
        <EducationBlock education={education} accent={accent} />
        {skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">{skills.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: accent.secondary }}>{s}</span>)}</div>
          </div>
        )}
        {languages.length > 0 && <div className="flex flex-wrap gap-2 text-xs">{languages.map((l) => <span key={l}>• {l}</span>)}</div>}
      </div>
    </div>
  );
}

// ---- Layout: Professional — cabecera ejecutiva con franja de color ----
function ProfessionalLayout({ accent, fullName, profession, email, phone, address, photo, summary, experiences, education, skills, languages }: LayoutProps) {
  return (
    <div>
      <div className="h-2" style={{ background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary})` }} />
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: accent.text }}>{fullName || 'Tu Nombre'}</h2>
            <p className="text-lg text-gray-600 mt-0.5">{profession || 'Tu Profesión'}</p>
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600"><ContactLine email={email} phone={phone} address={address} /></div>
          </div>
          {photo && <div className="h-24 w-24 shrink-0 rounded-lg border-2 bg-cover bg-center" style={{ backgroundImage: `url(${photo})`, borderColor: accent.primary }} role="img" aria-label="Foto del curriculum" />}
        </div>
        {summary && (
          <div className="mb-5 p-3 rounded-lg" style={{ background: accent.soft }}>
            <p className="text-sm leading-relaxed" style={{ color: accent.text }}>{summary}</p>
          </div>
        )}
        <ExperienceBlock experiences={experiences} accent={accent} />
        <EducationBlock education={education} accent={accent} />
        <div className="grid grid-cols-2 gap-4">
          {skills.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accent.primary }}>Habilidades</h2>
              <div className="flex flex-wrap gap-1.5">{skills.map((s) => <span key={s} className="text-xs px-2 py-0.5 rounded border" style={{ borderColor: accent.secondary }}>{s}</span>)}</div>
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accent.primary }}>Idiomas</h2>
              <div className="space-y-1 text-xs text-gray-700">{languages.map((l) => <div key={l}>{l}</div>)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const LAYOUT_COMPONENTS: Record<string, React.ComponentType<LayoutProps>> = {
  classic: ClassicLayout,
  modern: ModernLayout,
  minimal: MinimalLayout,
  creative: CreativeLayout,
  professional: ProfessionalLayout,
};
