'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  BrainCircuit,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  Copy,
  Download,
  FileText,
  Lock,
  MonitorCog,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserRound,
  WandSparkles,
  X,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { pvcEngine, type ValidationEnvelope } from '@/domain/pvc-u-engine';
import { SOVEREIGN_CONFIG } from '@/lib/sovereign-store';
import { toast } from 'sonner';

type Tool = 'cv' | 'ai' | 'linux' | 'windows';

type CvData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: string;
  skills: string;
};

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const initialCv: CvData = {
  name: '',
  role: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
  experience: '',
  skills: '',
};

const linuxExamples: Record<string, string> = {
  'pwd': '/home/estudiante/manos-abiertas',
  'ls': 'curriculum/  proyectos/  README.md  scripts/',
  'ls -la': 'drwxr-xr-x curriculum/\ndrwxr-xr-x proyectos/\n-rw-r--r-- README.md\n-rwxr-xr-x scripts/',
  'whoami': 'estudiante',
  'uname -a': 'Linux manos-abiertas 6.8.0-generic x86_64 GNU/Linux',
  'git status': 'On branch main\nworking tree clean (simulación educativa)',
  'npm run build': 'Compilación de práctica completada: 0 errores (simulación educativa)',
  'clear': '',
};

const windowsExamples: Record<string, string> = {
  'Get-Location': 'Path\n----\nC:\\ManosAbiertas\\proyectos',
  'Get-ChildItem': 'curriculum    proyectos    README.md    scripts',
  'Get-ComputerInfo': 'Windows 11 · PowerShell · entorno de aprendizaje simulado',
  'Get-Process': 'node     412   Running\nCode     1204  Running\nexplorer 882   Running',
  'Get-Service': 'ManosAbiertasDemo   Running\nSpooler              Running',
  'systeminfo': 'Sistema Windows · información resumida para aprendizaje',
  'Clear-Host': '',
};

const toolMeta: Record<Tool, { label: string; description: string }> = {
  cv: { label: 'CV Maker', description: 'Crea, revisa e imprime un CV profesional.' },
  ai: { label: 'IA Studio', description: 'Aprende a escribir prompts y consulta al tutor de la plataforma.' },
  linux: { label: 'Linux', description: 'Practica comandos seguros en una terminal educativa.' },
  windows: { label: 'Windows', description: 'Practica PowerShell y administración básica.' },
};

export function MasterStationApp() {
  const [activeTool, setActiveTool] = useState<Tool>('cv');
  const [cv, setCv] = useState<CvData>(initialCv);
  const [aiPrompt, setAiPrompt] = useState('Ayúdame a crear un perfil profesional claro para mi currículum.');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [terminal, setTerminal] = useState<'linux' | 'windows'>('linux');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Estación educativa iniciada.',
    'Aviso: estas terminales son simuladores didácticos. No ejecutan comandos en tu dispositivo ni en el servidor.',
  ]);
  const [validation, setValidation] = useState<ValidationEnvelope<{ tool: string }> | null>(null);

  const completion = useMemo(() => {
    const fields = Object.values(cv);
    return Math.round((fields.filter((field) => field.trim().length > 0).length / fields.length) * 100);
  }, [cv]);

  const updateCv = (field: keyof CvData, value: string) => setCv((current) => ({ ...current, [field]: value }));

  const validateAction = (tool: Tool) => {
    setValidation(pvcEngine.validate({ tool }, 'MasterStationAction'));
  };

  const submitAi = async (event?: FormEvent) => {
    event?.preventDefault();
    const prompt = aiPrompt.trim();
    if (!prompt || aiLoading) return;
    setAiLoading(true);
    validateAction('ai');
    setChat((current) => [...current, { role: 'user', content: prompt }]);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Client-Version': 'app-master-station-1.0' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: prompt }],
          language: 'es',
          context: 'Master Station integrada de Manos Abiertas. Explica de forma práctica, sencilla y segura.',
        }),
      });
      const result = await response.json() as { text?: string; error?: string };
      if (!response.ok || !result.text) throw new Error(result.error || 'No se recibió una respuesta');
      setChat((current) => [...current, { role: 'assistant', content: result.text || '' }]);
    } catch {
      setChat((current) => [...current, { role: 'assistant', content: 'No se pudo conectar ahora. Puedes continuar con el contenido offline de la plataforma y volver a intentarlo más tarde.' }]);
    } finally {
      setAiLoading(false);
      setAiPrompt('');
    }
  };

  const runTerminal = (kind: 'linux' | 'windows') => {
    const command = terminalInput.trim();
    if (!command) return;
    validateAction(kind);
    const normalized = command.replace(/\s+/g, ' ');
    const catalog = kind === 'linux' ? linuxExamples : windowsExamples;
    const output = catalog[normalized] ?? 'Comando no disponible en este simulador. Consulta la lección correspondiente antes de usarlo en un equipo real.';
    const prompt = kind === 'linux' ? 'estudiante@manos-abiertas:~$' : 'PS C:\\ManosAbiertas\\proyectos>';
    setTerminalHistory((current) => [...current, `${prompt} ${normalized}`, output]);
    setTerminalInput('');
  };

  const loadCvExample = () => {
    setCv({
      name: 'Tu nombre completo',
      role: 'Auxiliar administrativo | Atención al público',
      email: 'tu-correo@ejemplo.com',
      phone: '+34 600 000 000',
      location: 'Ciudad, España',
      summary: 'Persona responsable, organizada y orientada a la atención al público. Experiencia internacional y motivación para seguir aprendiendo.',
      experience: 'Empresa o proyecto — Puesto (2023–2025)\nDescribe una responsabilidad y un logro concreto.\n\nEmpresa anterior — Puesto (2021–2023)\nDescribe una tarea realizada con claridad.',
      skills: 'Atención al público, organización, comunicación, herramientas digitales, trabajo en equipo',
    });
    validateAction('cv');
    toast.success('Ejemplo cargado. Sustituye los datos por los tuyos.');
  };

  const resetCv = () => {
    setCv(initialCv);
    toast.success('Formulario del CV reiniciado.');
  };

  const printCv = () => {
    validateAction('cv');
    window.print();
  };

  return (
    <div className="space-y-5" aria-labelledby="master-station-title">
      <Card className="overflow-hidden border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white shadow-xl">
        <CardContent className="relative p-5 md:p-7">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="mb-3 gap-1.5 border-indigo-400/30 bg-indigo-500/20 text-indigo-100"><Sparkles className="h-3 w-3" /> Herramientas integradas en la App</Badge>
              <h2 id="master-station-title" className="text-2xl font-bold tracking-tight md:text-3xl">Estación Manos Abiertas</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Un único espacio para aprender informática, inteligencia artificial, currículum y sistemas operativos. Diseñado para la práctica gradual, con modos seguros y lenguaje claro.</p>
              <p className="mt-3 text-xs text-slate-400">Manos Abiertas · visión y autoría del proyecto: Pedro Belentani</p>
              <p className="mt-2 flex items-center gap-2 text-xs text-emerald-300"><CheckCircle2 className="h-3.5 w-3.5" /> Base local activa: {SOVEREIGN_CONFIG.totalCurriculumPoints} puntos · modo {SOVEREIGN_CONFIG.mode}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-4">
              <Metric icon={<FileText className="h-4 w-4" />} label="CV" value={`${completion}%`} />
              <Metric icon={<BrainCircuit className="h-4 w-4" />} label="IA" value="Tutor" />
              <Metric icon={<Terminal className="h-4 w-4" />} label="Linux" value="Práctica" />
              <Metric icon={<MonitorCog className="h-4 w-4" />} label="Windows" value="Práctica" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Herramientas de la estación">
        {(Object.keys(toolMeta) as Tool[]).map((tool) => {
          const Icon = tool === 'cv' ? FileText : tool === 'ai' ? BrainCircuit : tool === 'linux' ? Terminal : MonitorCog;
          const isActive = activeTool === tool;
          return (
            <button key={tool} type="button" role="tab" aria-selected={isActive} onClick={() => setActiveTool(tool)} className={`rounded-xl border p-4 text-left transition-all ${isActive ? 'border-indigo-500 bg-indigo-500/10 shadow-md ring-2 ring-indigo-500/20' : 'border-border bg-card hover:border-indigo-300'}`}>
              <Icon className={`mb-3 h-5 w-5 ${isActive ? 'text-indigo-600' : 'text-muted-foreground'}`} />
              <div className="font-semibold">{toolMeta[tool].label}</div>
              <div className="mt-1 text-xs leading-5 text-muted-foreground">{toolMeta[tool].description}</div>
            </button>
          );
        })}
      </div>

      {activeTool === 'cv' && <CvTool cv={cv} completion={completion} onChange={updateCv} onLoadExample={loadCvExample} onReset={resetCv} onPrint={printCv} />}
      {activeTool === 'ai' && <AiTool prompt={aiPrompt} onPromptChange={setAiPrompt} chat={chat} loading={aiLoading} onSubmit={submitAi} onTemplate={setAiPrompt} />}
      {(activeTool === 'linux' || activeTool === 'windows') && <TerminalTool terminal={terminal} setTerminal={setTerminal} input={terminalInput} setInput={setTerminalInput} history={terminalHistory} onRun={runTerminal} />}

      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-start gap-2 rounded-lg border border-amber-300/60 bg-amber-50/70 p-3 text-xs text-amber-950 dark:bg-amber-950/20 dark:text-amber-100"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /><span>Los simuladores de Linux y Windows son educativos: no ejecutan comandos reales. La IA puede equivocarse; verifica siempre la información legal, médica, laboral o administrativa en fuentes oficiales.</span></div>
        {validation && <ValidationChip validation={validation} />}
      </div>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"><div className="mb-1 flex justify-center text-indigo-300">{icon}</div><div className="font-semibold">{value}</div><div className="text-[10px] text-slate-400">{label}</div></div>;
}

function CvTool({ cv, completion, onChange, onLoadExample, onReset, onPrint }: { cv: CvData; completion: number; onChange: (field: keyof CvData, value: string) => void; onLoadExample: () => void; onReset: () => void; onPrint: () => void }) {
  return <Card className="overflow-hidden border-border shadow-sm"><CardHeader className="border-b bg-muted/20"><div className="flex flex-wrap items-center justify-between gap-3"><div><CardTitle className="flex items-center gap-2 text-base"><FileText className="h-4 w-4 text-indigo-600" /> CV Maker integrado</CardTitle><p className="mt-1 text-xs text-muted-foreground">Completa los campos y revisa la vista previa antes de imprimir o guardar como PDF desde tu navegador.</p></div><div className="flex flex-wrap gap-2"><Button size="sm" variant="outline" onClick={onLoadExample} className="gap-1.5"><WandSparkles className="h-3.5 w-3.5" /> Usar ejemplo</Button><Button size="sm" variant="ghost" onClick={onReset} className="gap-1.5"><RotateCcw className="h-3.5 w-3.5" /> Reiniciar</Button><Button size="sm" onClick={onPrint} className="gap-1.5"><Download className="h-3.5 w-3.5" /> Imprimir / PDF</Button></div></div><Progress value={completion} className="mt-3 h-2" /></CardHeader><CardContent className="grid gap-6 p-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"><div className="space-y-3">
    <Field label="Nombre completo" value={cv.name} onChange={(value) => onChange('name', value)} placeholder="Tu nombre y apellidos" />
    <Field label="Puesto o titular profesional" value={cv.role} onChange={(value) => onChange('role', value)} placeholder="Por ejemplo: Auxiliar administrativo" />
    <div className="grid gap-3 sm:grid-cols-2"><Field label="Correo" value={cv.email} onChange={(value) => onChange('email', value)} placeholder="correo@ejemplo.com" type="email" /><Field label="Teléfono" value={cv.phone} onChange={(value) => onChange('phone', value)} placeholder="+34 ..." /></div>
    <Field label="Ciudad y país" value={cv.location} onChange={(value) => onChange('location', value)} placeholder="Ciudad, España" />
    <AreaField label="Perfil profesional" value={cv.summary} onChange={(value) => onChange('summary', value)} placeholder="Explica quién eres, qué sabes hacer y qué buscas." />
    <AreaField label="Experiencia" value={cv.experience} onChange={(value) => onChange('experience', value)} placeholder="Empresa — Puesto — fechas — responsabilidades y logros" rows={6} />
    <AreaField label="Habilidades" value={cv.skills} onChange={(value) => onChange('skills', value)} placeholder="Separa las habilidades con comas." />
  </div><CvPreview cv={cv} /></CardContent></Card>;
}

function Field({ label, value, onChange, placeholder, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; type?: string }) { return <label className="block space-y-1.5 text-xs font-medium"><span>{label}</span><Input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>; }
function AreaField({ label, value, onChange, placeholder, rows = 4 }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; rows?: number }) { return <label className="block space-y-1.5 text-xs font-medium"><span>{label}</span><Textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={rows} /></label>; }

function CvPreview({ cv }: { cv: CvData }) {
  return <div className="rounded-lg border bg-slate-100 p-3 dark:bg-slate-950/50"><div className="mx-auto min-h-[680px] max-w-[620px] bg-white p-7 text-slate-900 shadow-md print:shadow-none"><div className="border-b-2 border-indigo-700 pb-4"><h3 className="text-2xl font-bold text-indigo-800">{cv.name || 'Tu nombre completo'}</h3><p className="mt-1 text-sm font-medium text-slate-600">{cv.role || 'Tu puesto profesional'}</p><p className="mt-2 text-xs text-slate-500">{[cv.email, cv.phone, cv.location].filter(Boolean).join(' · ') || 'Correo · teléfono · ciudad'}</p></div><PreviewSection title="Perfil profesional"><p>{cv.summary || 'Añade un resumen breve, concreto y adaptado al puesto que buscas.'}</p></PreviewSection><PreviewSection title="Experiencia"><p className="whitespace-pre-line">{cv.experience || 'Añade aquí tu experiencia, proyectos, prácticas o voluntariado.'}</p></PreviewSection><PreviewSection title="Habilidades"><p>{cv.skills || 'Añade habilidades técnicas y personales relacionadas con el puesto.'}</p></PreviewSection><div className="mt-8 border-t pt-3 text-[10px] text-slate-400">CV creado con Manos Abiertas · Revisa y adapta la información antes de enviarlo.</div></div></div>;
}
function PreviewSection({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-5"><h4 className="mb-2 border-b border-indigo-200 pb-1 text-xs font-bold uppercase tracking-wider text-indigo-800">{title}</h4><div className="text-sm leading-6 text-slate-700">{children}</div></section>; }

function AiTool({ prompt, onPromptChange, chat, loading, onSubmit, onTemplate }: { prompt: string; onPromptChange: (value: string) => void; chat: ChatMessage[]; loading: boolean; onSubmit: (event?: FormEvent) => void; onTemplate: (value: string) => void }) {
  return <Card className="border-border shadow-sm"><CardHeader className="border-b bg-muted/20"><CardTitle className="flex items-center gap-2 text-base"><BrainCircuit className="h-4 w-4 text-indigo-600" /> IA Studio con tutor de Manos Abiertas</CardTitle><p className="text-xs text-muted-foreground">Practica prompts claros. La petición se envía al asistente de la propia aplicación cuando hay conexión y dispone de modo local de respaldo.</p></CardHeader><CardContent className="grid gap-5 p-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"><div className="space-y-4"><div className="flex flex-wrap gap-2"><TemplateButton icon={<FileText className="h-3.5 w-3.5" />} text="Mejorar CV" onClick={() => onTemplate('Revisa este perfil profesional y propón una versión clara, breve y adaptada a un puesto de atención al público. Explica qué has cambiado.')} /><TemplateButton icon={<Code2 className="h-3.5 w-3.5" />} text="Aprender código" onClick={() => onTemplate('Explícame este concepto de programación desde nivel 0 y añade un ejercicio sencillo con solución.')} /><TemplateButton icon={<Clipboard className="h-3.5 w-3.5" />} text="Trámite" onClick={() => onTemplate('Explícame cómo investigar un trámite en una fuente oficial, qué documentos debo comprobar y qué preguntas debo preparar.')} /></div><form onSubmit={onSubmit} className="space-y-3"><label className="block text-xs font-medium" htmlFor="master-ai-prompt">Tu instrucción</label><Textarea id="master-ai-prompt" value={prompt} onChange={(event) => onPromptChange(event.target.value)} rows={9} placeholder="Escribe tu pregunta con contexto, objetivo y formato deseado." /><Button type="submit" disabled={loading || !prompt.trim()} className="w-full gap-2"><Play className="h-4 w-4" /> {loading ? 'Consultando…' : 'Consultar tutor'}</Button></form><div className="rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground"><div className="mb-1 flex items-center gap-1.5 font-semibold text-foreground"><Lock className="h-3.5 w-3.5" /> Buen uso</div>No incluyas contraseñas, documentos de identidad, datos bancarios ni información privada de otras personas.</div></div><div className="min-h-[350px] rounded-xl bg-slate-950 p-4 text-sm text-slate-200"><div className="mb-3 flex items-center justify-between border-b border-slate-800 pb-3 text-xs"><span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-indigo-300" /> Conversación</span><span className="text-slate-500">Tutor educativo</span></div>{chat.length === 0 ? <div className="flex h-[290px] items-center justify-center text-center text-xs text-slate-500">El resultado de tu consulta aparecerá aquí.</div> : <div className="space-y-4">{chat.map((message, index) => <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'ml-8 rounded-lg bg-indigo-900/40 p-3' : 'mr-4 rounded-lg bg-slate-900 p-3'}><div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{message.role === 'user' ? 'Tú' : 'Tutor'}</div><p className="whitespace-pre-wrap leading-6">{message.content}</p></div>)}</div>}</div></CardContent></Card>;
}
function TemplateButton({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) { return <Button type="button" variant="outline" size="sm" onClick={onClick} className="gap-1.5 text-xs">{icon}{text}</Button>; }

function TerminalTool({ terminal, setTerminal, input, setInput, history, onRun }: { terminal: 'linux' | 'windows'; setTerminal: (value: 'linux' | 'windows') => void; input: string; setInput: (value: string) => void; history: string[]; onRun: (kind: 'linux' | 'windows') => void }) {
  const isLinux = terminal === 'linux';
  return <Card className={`overflow-hidden border-slate-800 ${isLinux ? 'bg-slate-950' : 'bg-[#012456]'} text-white shadow-lg`}><CardHeader className="border-b border-white/10 pb-3"><div className="flex flex-wrap items-center justify-between gap-3"><CardTitle className="flex items-center gap-2 text-sm"><Terminal className={`h-4 w-4 ${isLinux ? 'text-emerald-400' : 'text-cyan-300'}`} /> Terminal de práctica · {isLinux ? 'Linux' : 'Windows PowerShell'}</CardTitle><div className="flex gap-2"><Button type="button" size="sm" variant={isLinux ? 'secondary' : 'ghost'} onClick={() => setTerminal('linux')}>Linux</Button><Button type="button" size="sm" variant={!isLinux ? 'secondary' : 'ghost'} onClick={() => setTerminal('windows')}>Windows</Button></div></div></CardHeader><CardContent className="p-4"><div className="mb-4 flex flex-wrap gap-2 text-xs"><Badge variant="outline" className="border-white/20 text-slate-200">Modo seguro</Badge><Badge variant="outline" className="border-white/20 text-slate-200">Nivel 0 → experto</Badge><Badge variant="outline" className="border-white/20 text-slate-200">Sin ejecución real</Badge></div><div className="h-[330px] overflow-y-auto rounded-lg border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6">{history.map((line, index) => <div key={`${line}-${index}`} className={line.startsWith('Aviso') || line.startsWith('Comando') ? 'text-amber-300' : isLinux ? 'text-emerald-300' : 'text-white'}>{line || '\u00a0'}</div>)}<form onSubmit={(event) => { event.preventDefault(); onRun(terminal); }} className="mt-2 flex gap-2"><span className={isLinux ? 'text-emerald-400' : 'text-cyan-300'}>{isLinux ? 'estudiante@manos-abiertas:~$' : 'PS C:\\ManosAbiertas>'}</span><input aria-label={`Comando de ${terminal}`} value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 bg-transparent text-white outline-none" placeholder={isLinux ? 'Ej.: ls -la' : 'Ej.: Get-Process'} /></form></div><p className="mt-3 text-xs text-slate-300">Prueba: {isLinux ? 'pwd, ls -la, git status, npm run build' : 'Get-Location, Get-ChildItem, Get-Process, systeminfo'}.</p></CardContent></Card>;
}

function ValidationChip({ validation }: { validation: ValidationEnvelope<{ tool: string }> }) {
  return <div className="flex items-center gap-2 rounded-lg border border-emerald-300/60 bg-emerald-50 px-3 py-2 text-xs text-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-100"><CheckCircle2 className="h-4 w-4" /><span><strong>Acción validada localmente</strong> · {validation.validationId}</span></div>;
}
