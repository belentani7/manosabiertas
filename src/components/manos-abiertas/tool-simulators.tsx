'use client';

/**
 * Tool Simulators — interfaces educativas mimetizadas en HTML/CSS.
 * No son las apps reales: son recreaciones visuales fieles para que
 * una persona sin experiencia practique "dónde hacer clic" antes de
 * usar el programa de verdad. Cero llamadas a APIs de terceros.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Wifi, Volume2, Battery, ChevronLeft, ChevronRight, RefreshCw,
  Star, Lock, Folder, FileText, Trash2, Settings, Power, Grid3x3,
  Send, Paperclip, Mic, Sparkles, Bold, Italic, Underline, AlignLeft,
  List, Table as TableIcon, Image as ImageIcon, Save, Undo2, Redo2,
  Plus, Terminal as TerminalIcon, X, Minus, Square,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type SimulatorId =
  | 'windows-desktop' | 'linux-desktop' | 'chatgpt' | 'claude'
  | 'copilot' | 'word' | 'excel' | 'powerpoint' | 'gmail' | 'terminal';

interface SimulatorMeta {
  id: SimulatorId;
  name: string;
  emoji: string;
  description: string;
  category: 'os' | 'ai' | 'office' | 'web';
}

export const SIMULATORS: SimulatorMeta[] = [
  { id: 'windows-desktop', name: 'Windows (escritorio)', emoji: '🪟', description: 'Practica el escritorio, menú Inicio y barra de tareas de Windows.', category: 'os' },
  { id: 'linux-desktop', name: 'Linux (escritorio)', emoji: '🐧', description: 'Practica un escritorio Linux típico (estilo GNOME/Mint).', category: 'os' },
  { id: 'chatgpt', name: 'ChatGPT', emoji: '💬', description: 'Practica cómo escribir y enviar mensajes a ChatGPT.', category: 'ai' },
  { id: 'claude', name: 'Claude', emoji: '✨', description: 'Practica la interfaz de conversación de Claude.', category: 'ai' },
  { id: 'copilot', name: 'Microsoft Copilot', emoji: '🚀', description: 'Practica el asistente de IA integrado en Windows/Office.', category: 'ai' },
  { id: 'word', name: 'Procesador de texto (tipo Word)', emoji: '📄', description: 'Practica escribir y formatear documentos.', category: 'office' },
  { id: 'excel', name: 'Hoja de cálculo (tipo Excel)', emoji: '📊', description: 'Practica celdas, filas y columnas.', category: 'office' },
  { id: 'powerpoint', name: 'Presentaciones (tipo PowerPoint)', emoji: '🖥️', description: 'Practica diapositivas y diseño de presentaciones.', category: 'office' },
  { id: 'gmail', name: 'Correo (tipo Gmail)', emoji: '✉️', description: 'Practica leer, redactar y enviar correos.', category: 'web' },
  { id: 'terminal', name: 'Terminal / Símbolo del sistema', emoji: '⬛', description: 'Practica comandos básicos sin miedo a romper nada.', category: 'os' },
];

// ============================================================
// Barra de ventana reutilizable (estilo Windows / macOS-neutral)
// ============================================================
function WindowChrome({ title, children, icon }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden border border-border shadow-2xl bg-white dark:bg-slate-900">
      <div className="flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b border-border">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
          {icon}
          {title}
        </div>
        <div className="flex items-center gap-1.5">
          <Minus className="h-3.5 w-3.5 text-slate-400" />
          <Square className="h-3 w-3 text-slate-400" />
          <X className="h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>
      {children}
    </div>
  );
}

// ============================================================
// WINDOWS DESKTOP SIMULATOR
// ============================================================
function WindowsDesktopSim() {
  const [startOpen, setStartOpen] = useState(false);
  const icons = [
    { name: 'Este equipo', emoji: '💻' },
    { name: 'Papelera', emoji: '🗑️' },
    { name: 'Documentos', emoji: '📁' },
    { name: 'Navegador', emoji: '🌐' },
  ];
  return (
    <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl h-[420px] bg-gradient-to-br from-sky-600 to-blue-900 select-none">
      {/* Desktop icons */}
      <div className="p-4 grid grid-cols-1 gap-4 w-24">
        {icons.map((ic) => (
          <button key={ic.name} className="flex flex-col items-center gap-1 text-white text-[10px] hover:bg-white/10 rounded p-1">
            <span className="text-2xl">{ic.emoji}</span>
            <span className="text-center drop-shadow">{ic.name}</span>
          </button>
        ))}
      </div>

      {/* Start menu */}
      <AnimatePresence>
        {startOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur rounded-lg shadow-2xl p-4"
          >
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-full px-3 py-1.5 mb-3">
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-xs text-slate-400">Escribe aquí para buscar</span>
            </div>
            <p className="text-[10px] font-semibold text-slate-500 mb-2">Aplicaciones fijadas</p>
            <div className="grid grid-cols-4 gap-3">
              {['📧', '🌐', '📝', '📊', '🖥️', '🎵', '📷', '🎮'].map((e, i) => (
                <div key={i} className="flex items-center justify-center h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 text-lg mx-auto">{e}</div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="absolute bottom-0 inset-x-0 h-11 bg-slate-900/80 backdrop-blur flex items-center justify-center gap-3 px-3">
        <button
          onClick={() => setStartOpen((v) => !v)}
          className={cn('h-8 w-8 rounded flex items-center justify-center text-white hover:bg-white/10', startOpen && 'bg-white/20')}
          aria-label="Menú Inicio"
        >
          <Grid3x3 className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
          <Search className="h-3.5 w-3.5 text-white/70" />
          <span className="text-[10px] text-white/70">Buscar</span>
        </div>
        <div className="flex-1" />
        <Wifi className="h-3.5 w-3.5 text-white/80" />
        <Volume2 className="h-3.5 w-3.5 text-white/80" />
        <Battery className="h-3.5 w-3.5 text-white/80" />
        <span className="text-[10px] text-white/80 tabular-nums">10:32</span>
      </div>
    </div>
  );
}

// ============================================================
// LINUX DESKTOP SIMULATOR (estilo GNOME / Mint)
// ============================================================
function LinuxDesktopSim() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl h-[420px] bg-gradient-to-br from-emerald-800 to-slate-900 select-none">
      <div className="absolute top-0 inset-x-0 h-8 bg-slate-950/80 flex items-center px-3 justify-between text-white text-[10px]">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen((v) => !v)} className="font-semibold hover:bg-white/10 px-2 py-0.5 rounded">Actividades</button>
          <span className="opacity-70">Archivos</span>
          <span className="opacity-70">Terminal</span>
        </div>
        <span className="tabular-nums">lun 10:32</span>
        <div className="flex items-center gap-2"><Wifi className="h-3 w-3" /><Volume2 className="h-3 w-3" /><Battery className="h-3 w-3" /></div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 top-8 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-10"
          >
            <div className="bg-white/95 dark:bg-slate-800/95 rounded-lg p-4 w-72">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-full px-3 py-1.5 mb-3">
                <Search className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-xs text-slate-400">Escribir para buscar…</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['🦊', '📁', '⬛', '📝', '🎵', '📷', '🎮', '⚙️'].map((e, i) => (
                  <div key={i} className="flex items-center justify-center h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 text-lg mx-auto">{e}</div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-12 px-4 grid gap-4 w-24">
        {[{ n: 'Carpeta personal', e: '📁' }, { n: 'Papelera', e: '🗑️' }].map((ic) => (
          <button key={ic.n} className="flex flex-col items-center gap-1 text-white text-[10px] hover:bg-white/10 rounded p-1">
            <span className="text-2xl">{ic.e}</span>
            <span className="text-center drop-shadow">{ic.n}</span>
          </button>
        ))}
      </div>

      {/* Dock */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 rounded-2xl px-3 py-2">
        {['🦊', '📁', '⬛', '📝', '⚙️'].map((e, i) => (
          <div key={i} className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-base hover:scale-110 transition-transform">{e}</div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// CHAT SIMULATORS (ChatGPT / Claude / Copilot) — mismo esqueleto,
// distinta identidad visual, sin llamadas reales a proveedores externos.
// ============================================================
function ChatSim({ brand }: { brand: 'chatgpt' | 'claude' | 'copilot' }) {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState<string[]>([]);

  const theme = {
    chatgpt: { name: 'ChatGPT', bg: 'bg-[#212121]', bubble: 'bg-[#10a37f]', accent: 'text-[#10a37f]', avatar: '💬', placeholder: 'Envía un mensaje a ChatGPT' },
    claude: { name: 'Claude', bg: 'bg-[#faf9f5]', bubble: 'bg-[#c96442]', accent: 'text-[#c96442]', avatar: '✨', placeholder: 'Escribe a Claude' },
    copilot: { name: 'Copilot', bg: 'bg-[#0d1117]', bubble: 'bg-[#2563eb]', accent: 'text-[#3b82f6]', avatar: '🚀', placeholder: 'Pregunta a Copilot' },
  }[brand];

  const isDark = brand !== 'claude';

  return (
    <WindowChrome title={theme.name} icon={<span>{theme.avatar}</span>}>
      <div className={cn('h-[380px] flex flex-col', theme.bg)}>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {sent.length === 0 && (
            <div className={cn('h-full flex flex-col items-center justify-center gap-2 text-center', isDark ? 'text-white/60' : 'text-slate-500')}>
              <span className="text-4xl">{theme.avatar}</span>
              <p className="text-sm">Escribe abajo y pulsa enviar para practicar</p>
            </div>
          )}
          {sent.map((msg, i) => (
            <div key={i} className="flex justify-end">
              <div className={cn('rounded-2xl px-4 py-2 text-sm text-white max-w-[75%]', theme.bubble)}>{msg}</div>
            </div>
          ))}
        </div>
        <div className={cn('p-3 border-t', isDark ? 'border-white/10' : 'border-slate-200')}>
          <div className={cn('flex items-center gap-2 rounded-2xl px-3 py-2', isDark ? 'bg-white/10' : 'bg-white border border-slate-300')}>
            <Paperclip className={cn('h-4 w-4', isDark ? 'text-white/50' : 'text-slate-400')} />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && value.trim()) { setSent((s) => [...s, value.trim()]); setValue(''); }
              }}
              placeholder={theme.placeholder}
              className={cn('flex-1 bg-transparent outline-none text-sm', isDark ? 'text-white placeholder:text-white/40' : 'text-slate-800 placeholder:text-slate-400')}
            />
            <Mic className={cn('h-4 w-4', isDark ? 'text-white/50' : 'text-slate-400')} />
            <button
              onClick={() => { if (value.trim()) { setSent((s) => [...s, value.trim()]); setValue(''); } }}
              className={cn('h-7 w-7 rounded-full flex items-center justify-center', theme.bubble)}
              aria-label="Enviar mensaje"
            >
              <Send className="h-3.5 w-3.5 text-white" />
            </button>
          </div>
          <p className={cn('text-[10px] mt-2 text-center', isDark ? 'text-white/30' : 'text-slate-400')}>
            Simulación educativa — practica la interfaz. Para IA real, usa /aprende-ia.
          </p>
        </div>
      </div>
    </WindowChrome>
  );
}

// ============================================================
// OFFICE SIMULATORS (Word / Excel / PowerPoint)
// ============================================================
function WordSim() {
  const [text, setText] = useState('');
  return (
    <WindowChrome title="Documento1 — Procesador de texto" icon={<FileText className="h-3.5 w-3.5 text-blue-600" />}>
      <div className="bg-white dark:bg-slate-900">
        <div className="flex items-center gap-1 px-3 py-2 border-b border-border bg-slate-50 dark:bg-slate-800">
          {[Bold, Italic, Underline, AlignLeft, List, TableIcon, ImageIcon].map((Icon, i) => (
            <button key={i} className="h-7 w-7 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
          <div className="w-px h-5 bg-border mx-1" />
          <button className="h-7 w-7 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Save className="h-3.5 w-3.5" /></button>
          <button className="h-7 w-7 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Undo2 className="h-3.5 w-3.5" /></button>
          <button className="h-7 w-7 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Redo2 className="h-3.5 w-3.5" /></button>
        </div>
        <div className="p-6 h-[300px]">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe aquí tu documento…"
            className="w-full h-full resize-none outline-none text-sm leading-relaxed text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-700 rounded p-4"
          />
        </div>
      </div>
    </WindowChrome>
  );
}

function ExcelSim() {
  const rows = 8;
  const cols = ['A', 'B', 'C', 'D', 'E'];
  const [cells, setCells] = useState<Record<string, string>>({});
  return (
    <WindowChrome title="Libro1 — Hoja de cálculo" icon={<TableIcon className="h-3.5 w-3.5 text-green-600" />}>
      <div className="bg-white dark:bg-slate-900 overflow-x-auto">
        <div className="flex items-center gap-1 px-3 py-2 border-b border-border bg-slate-50 dark:bg-slate-800 text-[10px] text-slate-500">
          Σ Autosuma · practica escribir en las celdas
        </div>
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <th className="w-8 bg-slate-100 dark:bg-slate-800 border border-border" />
              {cols.map((c) => <th key={c} className="bg-slate-100 dark:bg-slate-800 border border-border py-1 font-medium text-slate-600 dark:text-slate-300">{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, r) => (
              <tr key={r}>
                <td className="bg-slate-100 dark:bg-slate-800 border border-border text-center text-slate-500">{r + 1}</td>
                {cols.map((c) => {
                  const key = `${c}${r + 1}`;
                  return (
                    <td key={key} className="border border-border p-0">
                      <input
                        value={cells[key] || ''}
                        onChange={(e) => setCells((prev) => ({ ...prev, [key]: e.target.value }))}
                        className="w-full h-6 px-1 outline-none focus:bg-blue-50 dark:focus:bg-blue-950 text-slate-800 dark:text-slate-100 bg-transparent"
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WindowChrome>
  );
}

function PowerPointSim() {
  const [slides, setSlides] = useState([{ title: 'Mi presentación', body: 'Haz clic para editar' }]);
  const [active, setActive] = useState(0);
  return (
    <WindowChrome title="Presentación1 — Diapositivas" icon={<Grid3x3 className="h-3.5 w-3.5 text-orange-600" />}>
      <div className="flex bg-slate-100 dark:bg-slate-800 h-[340px]">
        <div className="w-24 shrink-0 border-r border-border p-2 space-y-2 overflow-y-auto">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn('w-full aspect-video rounded border-2 bg-white dark:bg-slate-900 text-[7px] p-1 text-left', active === i ? 'border-orange-500' : 'border-border')}
            >
              {s.title}
            </button>
          ))}
          <button
            onClick={() => { setSlides((s) => [...s, { title: `Diapositiva ${s.length + 1}`, body: 'Haz clic para editar' }]); setActive(slides.length); }}
            className="w-full aspect-video rounded border-2 border-dashed border-border flex items-center justify-center text-slate-400 hover:border-orange-400"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="w-full aspect-video bg-white dark:bg-slate-900 rounded shadow-lg flex flex-col items-center justify-center gap-3 p-6 border border-border">
            <input
              value={slides[active]?.title || ''}
              onChange={(e) => setSlides((s) => s.map((sl, i) => i === active ? { ...sl, title: e.target.value } : sl))}
              className="text-xl font-bold text-center outline-none bg-transparent w-full text-slate-800 dark:text-slate-100"
            />
            <input
              value={slides[active]?.body || ''}
              onChange={(e) => setSlides((s) => s.map((sl, i) => i === active ? { ...sl, body: e.target.value } : sl))}
              className="text-sm text-center outline-none bg-transparent w-full text-slate-500 dark:text-slate-400"
            />
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

// ============================================================
// GMAIL SIMULATOR
// ============================================================
function GmailSim() {
  const [compose, setCompose] = useState(false);
  const emails = [
    { from: 'SEPE', subject: 'Confirmación de cita', preview: 'Su cita ha sido registrada para el…', unread: true },
    { from: 'Manos Abiertas', subject: 'Bienvenido/a a la plataforma', preview: 'Gracias por unirte, aquí tienes…', unread: true },
    { from: 'Ayuntamiento', subject: 'Empadronamiento', preview: 'Su solicitud está en trámite…', unread: false },
  ];
  return (
    <WindowChrome title="Correo — Bandeja de entrada" icon={<span>✉️</span>}>
      <div className="flex h-[360px] bg-white dark:bg-slate-900">
        <div className="w-32 shrink-0 border-r border-border p-3">
          <button onClick={() => setCompose(true)} className="w-full rounded-full bg-blue-600 text-white text-xs py-2 mb-4 flex items-center justify-center gap-1">
            <Plus className="h-3 w-3" /> Redactar
          </button>
          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
            <div className="px-2 py-1 rounded bg-blue-50 dark:bg-blue-950 font-medium">📥 Recibidos</div>
            <div className="px-2 py-1 rounded">⭐ Destacados</div>
            <div className="px-2 py-1 rounded">📤 Enviados</div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {compose ? (
            <div className="p-3 space-y-2">
              <input placeholder="Para" className="w-full text-xs border-b border-border pb-1 outline-none bg-transparent" />
              <input placeholder="Asunto" className="w-full text-xs border-b border-border pb-1 outline-none bg-transparent" />
              <textarea placeholder="Escribe tu mensaje…" className="w-full h-40 text-xs outline-none resize-none bg-transparent" />
              <button onClick={() => setCompose(false)} className="rounded-full bg-blue-600 text-white text-xs px-4 py-1.5">Enviar</button>
            </div>
          ) : (
            emails.map((e, i) => (
              <div key={i} className={cn('flex items-center gap-2 px-3 py-2.5 border-b border-border cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800', e.unread && 'font-semibold')}>
                <Star className="h-3 w-3 text-slate-300 shrink-0" />
                <span className="w-20 shrink-0 truncate text-xs">{e.from}</span>
                <span className="flex-1 truncate text-xs text-slate-500">{e.subject} — {e.preview}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </WindowChrome>
  );
}

// ============================================================
// TERMINAL SIMULATOR
// ============================================================
function TerminalSim() {
  const [lines, setLines] = useState<string[]>(['Bienvenido/a a la terminal de práctica.', 'Escribe "ayuda" para ver comandos.']);
  const [input, setInput] = useState('');

  const COMMANDS: Record<string, string> = {
    ayuda: 'Comandos: ayuda, fecha, saludo, limpiar, listar',
    fecha: new Date().toLocaleDateString('es-ES'),
    saludo: '¡Hola! Esto es una terminal segura de práctica.',
    listar: 'Documentos/  Descargas/  Fotos/  CV.pdf',
  };

  function run() {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'limpiar') { setLines([]); setInput(''); return; }
    const output = COMMANDS[cmd] || `Comando no reconocido: "${cmd}" (prueba "ayuda")`;
    setLines((l) => [...l, `$ ${input}`, output]);
    setInput('');
  }

  return (
    <WindowChrome title="Terminal" icon={<TerminalIcon className="h-3.5 w-3.5 text-green-500" />}>
      <div className="bg-black h-[340px] p-3 font-mono text-xs text-green-400 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-0.5">
          {lines.map((l, i) => <div key={i}>{l}</div>)}
        </div>
        <div className="flex items-center gap-1 pt-2">
          <span>$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && run()}
            className="flex-1 bg-transparent outline-none text-green-400"
            autoFocus
          />
        </div>
      </div>
    </WindowChrome>
  );
}

// ============================================================
// GALERÍA PRINCIPAL
// ============================================================
export function ToolSimulatorsGallery() {
  const [active, setActive] = useState<SimulatorId>('windows-desktop');
  const categories: { id: SimulatorMeta['category']; label: string }[] = [
    { id: 'os', label: 'Sistemas operativos' },
    { id: 'ai', label: 'Asistentes de IA' },
    { id: 'office', label: 'Ofimática' },
    { id: 'web', label: 'Correo y web' },
  ];

  const renderSim = () => {
    switch (active) {
      case 'windows-desktop': return <WindowsDesktopSim />;
      case 'linux-desktop': return <LinuxDesktopSim />;
      case 'chatgpt': return <ChatSim brand="chatgpt" />;
      case 'claude': return <ChatSim brand="claude" />;
      case 'copilot': return <ChatSim brand="copilot" />;
      case 'word': return <WordSim />;
      case 'excel': return <ExcelSim />;
      case 'powerpoint': return <PowerPointSim />;
      case 'gmail': return <GmailSim />;
      case 'terminal': return <TerminalSim />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1">🖥️ Practica sin miedo</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Simuladores educativos de las herramientas más comunes. No son las apps reales — son recreaciones
          seguras para perder el miedo antes de usarlas de verdad.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat.id}>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{cat.label}</p>
          <div className="flex flex-wrap gap-2">
            {SIMULATORS.filter((s) => s.category === cat.id).map((sim) => (
              <button
                key={sim.id}
                onClick={() => setActive(sim.id)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
                  active === sim.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:bg-accent text-muted-foreground'
                )}
              >
                <span>{sim.emoji}</span>
                {sim.name}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="max-w-3xl mx-auto pt-2">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
            {renderSim()}
          </motion.div>
        </AnimatePresence>
        <p className="text-center text-[11px] text-muted-foreground mt-3">
          {SIMULATORS.find((s) => s.id === active)?.description}
        </p>
      </div>
    </div>
  );
}

export default ToolSimulatorsGallery;
