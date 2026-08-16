'use client';

/**
 * Tool Simulators — interfaces educativas mimetizadas en HTML/CSS.
 * No son las apps reales: son recreaciones visuales fieles para que
 * una persona sin experiencia practique "dónde hacer clic" antes de
 * usar el programa de verdad. Cero llamadas a APIs de terceros.
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Wifi, Volume2, Battery, ChevronLeft, ChevronRight, RefreshCw,
  Star, Lock, Folder, FileText, Trash2, Settings, Power, Grid3x3,
  Send, Paperclip, Mic, Sparkles, Bold, Italic, Underline, AlignLeft,
  List, Table as TableIcon, Image as ImageIcon, Save, Undo2, Redo2,
  Plus, Terminal as TerminalIcon, X, Minus, Square, CheckCircle2, RotateCcw,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  parseSimulatorProgress,
  parseWordDraft,
  serializeSimulatorProgress,
  serializeWordDraft,
  SIMULATOR_PROGRESS_STORAGE_KEY,
  WORD_DRAFT_STORAGE_KEY,
} from '@/lib/didactic-local-storage';

export type SimulatorId =
  | 'windows-desktop' | 'linux-desktop' | 'chatgpt' | 'claude'
  | 'copilot' | 'word' | 'excel' | 'powerpoint' | 'gmail' | 'terminal';

interface SimulatorMeta {
  id: SimulatorId;
  name: string;
  emoji: string;
  description: string;
  category: 'os' | 'ai' | 'office' | 'web';
  practice: readonly string[];
}

export const SIMULATORS: SimulatorMeta[] = [
  { id: 'windows-desktop', name: 'Windows (escritorio)', emoji: '🪟', description: 'Practica el escritorio, menú Inicio y barra de tareas de Windows.', category: 'os', practice: ['Abre el menú Inicio.', 'Localiza Documentos y el navegador.', 'Identifica red, volumen y batería.'] },
  { id: 'linux-desktop', name: 'Linux (escritorio)', emoji: '🐧', description: 'Practica un escritorio Linux típico (estilo GNOME/Mint).', category: 'os', practice: ['Abre Actividades.', 'Localiza Archivos y Terminal.', 'Reconoce el dock y el área de estado.'] },
  { id: 'chatgpt', name: 'ChatGPT', emoji: '💬', description: 'Practica cómo escribir y enviar mensajes a ChatGPT.', category: 'ai', practice: ['Escribe una petición con objetivo y contexto.', 'Envía el mensaje con Enter.', 'Revisa si compartiste datos personales.'] },
  { id: 'claude', name: 'Claude', emoji: '✨', description: 'Practica la interfaz de conversación de Claude.', category: 'ai', practice: ['Pide una explicación paso a paso.', 'Añade un formato de salida.', 'Comprueba la respuesta en otra fuente.'] },
  { id: 'copilot', name: 'Microsoft Copilot', emoji: '🚀', description: 'Practica el asistente de IA integrado en Windows/Office.', category: 'ai', practice: ['Describe una tarea de Office.', 'Indica el público del documento.', 'Elimina nombres y datos sensibles.'] },
  { id: 'word', name: 'Procesador de texto (tipo Word)', emoji: '📄', description: 'Practica escribir y formatear documentos.', category: 'office', practice: ['Escribe un título y un párrafo.', 'Prueba negrita, cursiva y alineación.', 'Guarda el borrador en este navegador.'] },
  { id: 'excel', name: 'Hoja de cálculo (tipo Excel)', emoji: '📊', description: 'Practica celdas, filas y columnas.', category: 'office', practice: ['Escribe tres gastos en una columna.', 'Distingue fila, columna y celda.', 'Calcula el total con una suma.'] },
  { id: 'powerpoint', name: 'Presentaciones (tipo PowerPoint)', emoji: '🖥️', description: 'Practica diapositivas y diseño de presentaciones.', category: 'office', practice: ['Edita el título de la primera diapositiva.', 'Añade otra diapositiva.', 'Resume una idea por pantalla.'] },
  { id: 'gmail', name: 'Correo (tipo Gmail)', emoji: '✉️', description: 'Practica leer, redactar y enviar correos.', category: 'web', practice: ['Abre Redactar.', 'Completa destinatario y asunto.', 'Revisa el texto antes de enviar.'] },
  { id: 'terminal', name: 'Terminal / Símbolo del sistema', emoji: '⬛', description: 'Practica comandos básicos sin miedo a romper nada.', category: 'os', practice: ['Escribe ayuda.', 'Prueba fecha y listar.', 'Usa limpiar para reiniciar la pantalla.'] },
];

const SIMULATOR_IDS = new Set(SIMULATORS.map((simulator) => simulator.id));

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
  const [desktopStatus, setDesktopStatus] = useState('Selecciona un icono para practicar.');
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
          <button
            type="button"
            key={ic.name}
            onClick={() => setDesktopStatus(`${ic.name} seleccionado. Doble clic en Windows real para abrirlo.`)}
            className="flex min-h-11 flex-col items-center gap-1 rounded p-1 text-[10px] text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <span className="text-2xl">{ic.emoji}</span>
            <span className="text-center drop-shadow">{ic.name}</span>
          </button>
        ))}
      </div>

      <p className="absolute left-28 top-4 max-w-52 rounded bg-slate-950/75 px-3 py-2 text-[10px] text-white" aria-live="polite">
        {desktopStatus}
      </p>

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
          type="button"
          onClick={() => setStartOpen((v) => !v)}
          className={cn('h-11 w-11 rounded flex items-center justify-center text-white hover:bg-white/10', startOpen && 'bg-white/20')}
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
  const [desktopStatus, setDesktopStatus] = useState('Selecciona un icono para practicar.');
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
          <button
            type="button"
            key={ic.n}
            onClick={() => setDesktopStatus(`${ic.n} seleccionado. Doble clic en Linux real para abrirlo.`)}
            className="flex min-h-11 flex-col items-center gap-1 rounded p-1 text-[10px] text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <span className="text-2xl">{ic.e}</span>
            <span className="text-center drop-shadow">{ic.n}</span>
          </button>
        ))}
      </div>

      <p className="absolute left-28 top-12 max-w-52 rounded bg-slate-950/75 px-3 py-2 text-[10px] text-white" aria-live="polite">
        {desktopStatus}
      </p>

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
              aria-label={theme.placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && value.trim()) { setSent((s) => [...s, value.trim()]); setValue(''); }
              }}
              placeholder={theme.placeholder}
              className={cn('flex-1 rounded bg-transparent text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary', isDark ? 'text-white placeholder:text-white/40' : 'text-slate-800 placeholder:text-slate-400')}
            />
            <Mic className={cn('h-4 w-4', isDark ? 'text-white/50' : 'text-slate-400')} />
            <button
              type="button"
              onClick={() => { if (value.trim()) { setSent((s) => [...s, value.trim()]); setValue(''); } }}
              className={cn('h-11 w-11 rounded-full flex items-center justify-center', theme.bubble)}
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
  const [past, setPast] = useState<string[]>([]);
  const [future, setFuture] = useState<string[]>([]);
  const [format, setFormat] = useState({ bold: false, italic: false, underline: false, list: false });
  const [status, setStatus] = useState('Borrador nuevo.');

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      try {
        const saved = parseWordDraft(localStorage.getItem(WORD_DRAFT_STORAGE_KEY));
        if (saved) {
          setText(saved);
          setStatus('Borrador local recuperado.');
        }
      } catch {
        setStatus('El navegador bloquea el guardado local; puedes practicar igualmente.');
      }
    }, 0);
    return () => window.clearTimeout(hydrationTimer);
  }, []);

  function commitText(next: string) {
    if (next === text) return;
    setPast((entries) => [...entries, text].slice(-50));
    setFuture([]);
    setText(next);
  }

  function toggleFormat(key: 'bold' | 'italic' | 'underline') {
    setFormat((current) => ({ ...current, [key]: !current[key] }));
    setStatus('Formato visual actualizado.');
  }

  function toggleList() {
    const enable = !format.list;
    commitText(text.split('\n').map((line) => enable ? `• ${line.replace(/^•\s*/, '')}` : line.replace(/^•\s*/, '')).join('\n'));
    setFormat((current) => ({ ...current, list: enable }));
    setStatus(enable ? 'Lista aplicada.' : 'Lista retirada.');
  }

  function insertSnippet(snippet: string, message: string) {
    commitText(`${text}${text ? '\n' : ''}${snippet}`);
    setStatus(message);
  }

  function saveDraft() {
    try {
      localStorage.setItem(WORD_DRAFT_STORAGE_KEY, serializeWordDraft(text));
      setStatus('Borrador guardado solo en este navegador.');
    } catch {
      setStatus('No se pudo guardar; el texto sigue disponible en esta sesión.');
    }
  }

  function removeSavedDraft() {
    try {
      localStorage.removeItem(WORD_DRAFT_STORAGE_KEY);
      setStatus('Copia local eliminada. El texto actual permanece en esta sesión.');
    } catch {
      setStatus('No se pudo acceder al guardado local; el texto actual permanece en esta sesión.');
    }
  }

  function undo() {
    const previous = past.at(-1);
    if (previous === undefined) return setStatus('No hay cambios que deshacer.');
    setPast((entries) => entries.slice(0, -1));
    setFuture((entries) => [text, ...entries].slice(0, 50));
    setText(previous);
    setStatus('Último cambio deshecho.');
  }

  function redo() {
    const next = future[0];
    if (next === undefined) return setStatus('No hay cambios que rehacer.');
    setPast((entries) => [...entries, text].slice(-50));
    setFuture((entries) => entries.slice(1));
    setText(next);
    setStatus('Cambio rehecho.');
  }

  return (
    <WindowChrome title="Documento1 — Procesador de texto" icon={<FileText className="h-3.5 w-3.5 text-blue-600" />}>
      <div className="bg-white dark:bg-slate-900">
        <div className="flex items-center gap-1 px-3 py-2 border-b border-border bg-slate-50 dark:bg-slate-800">
          <button type="button" onClick={() => toggleFormat('bold')} aria-label="Negrita" aria-pressed={format.bold} className={cn('h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300', format.bold && 'bg-blue-100 dark:bg-blue-950')}><Bold className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={() => toggleFormat('italic')} aria-label="Cursiva" aria-pressed={format.italic} className={cn('h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300', format.italic && 'bg-blue-100 dark:bg-blue-950')}><Italic className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={() => toggleFormat('underline')} aria-label="Subrayado" aria-pressed={format.underline} className={cn('h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300', format.underline && 'bg-blue-100 dark:bg-blue-950')}><Underline className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={() => setStatus('Alineación izquierda aplicada.')} aria-label="Alinear a la izquierda" className="h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><AlignLeft className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={toggleList} aria-label="Crear lista" aria-pressed={format.list} className={cn('h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300', format.list && 'bg-blue-100 dark:bg-blue-950')}><List className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={() => insertSnippet('Concepto\tCantidad\nEjemplo\t1', 'Tabla de práctica insertada.')} aria-label="Insertar tabla" className="h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><TableIcon className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={() => insertSnippet('[Imagen de ejemplo]', 'Marcador de imagen insertado.')} aria-label="Insertar imagen" className="h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><ImageIcon className="h-3.5 w-3.5" /></button>
          <div className="w-px h-5 bg-border mx-1" />
          <button type="button" onClick={saveDraft} aria-label="Guardar borrador" className="h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Save className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={removeSavedDraft} aria-label="Borrar copia local del borrador" className="h-11 w-11 rounded hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Trash2 className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={undo} disabled={past.length === 0} aria-label="Deshacer" className="h-11 w-11 rounded hover:bg-slate-200 disabled:opacity-40 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Undo2 className="h-3.5 w-3.5" /></button>
          <button type="button" onClick={redo} disabled={future.length === 0} aria-label="Rehacer" className="h-11 w-11 rounded hover:bg-slate-200 disabled:opacity-40 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300"><Redo2 className="h-3.5 w-3.5" /></button>
        </div>
        <div className="p-6 h-[300px]">
          <textarea
            aria-label="Contenido del documento"
            value={text}
            onChange={(e) => commitText(e.target.value)}
            placeholder="Escribe aquí tu documento…"
            className={cn(
              'w-full h-[calc(100%_-_1.5rem)] resize-none text-sm leading-relaxed text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-700 rounded p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              format.bold && 'font-bold',
              format.italic && 'italic',
              format.underline && 'underline',
            )}
          />
          <p className="mt-1 text-[10px] text-slate-500" aria-live="polite">{status}</p>
        </div>
      </div>
    </WindowChrome>
  );
}

function ExcelSim() {
  const rows = 8;
  const cols = ['A', 'B', 'C', 'D', 'E'];
  const [cells, setCells] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('Escribe importes en A1:A7 y calcula el total.');

  function autoSum() {
    const values = Array.from({ length: 7 }, (_, index) => cells[`A${index + 1}`]);
    const numbers = values
      .filter((value) => value?.trim())
      .map((value) => Number(value.replace(',', '.')));
    if (!numbers.length || numbers.some((value) => !Number.isFinite(value))) {
      setStatus('Autosuma necesita números válidos en A1:A7.');
      return;
    }
    const total = numbers.reduce((sum, value) => sum + value, 0);
    setCells((current) => ({ ...current, A8: String(Number(total.toFixed(2))) }));
    setStatus(`Autosuma completada: A8 = ${Number(total.toFixed(2))}.`);
  }

  return (
    <WindowChrome title="Libro1 — Hoja de cálculo" icon={<TableIcon className="h-3.5 w-3.5 text-green-600" />}>
      <div className="bg-white dark:bg-slate-900 overflow-x-auto">
        <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b border-border bg-slate-50 dark:bg-slate-800 text-[10px] text-slate-500">
          <button type="button" onClick={autoSum} className="min-h-11 rounded border border-green-700 px-3 font-semibold text-green-800 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-950">
            Σ Autosuma A1:A7 en A8
          </button>
          <span aria-live="polite">{status}</span>
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
                        aria-label={`Celda ${key}`}
                        value={cells[key] || ''}
                        onChange={(e) => setCells((prev) => ({ ...prev, [key]: e.target.value }))}
                        className="h-6 w-full bg-transparent px-1 text-slate-800 focus:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-[-2px] dark:text-slate-100 dark:focus:bg-blue-950 dark:focus-visible:outline-blue-300"
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
              type="button"
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Abrir diapositiva ${i + 1}: ${s.title}`}
              className={cn('w-full aspect-video rounded border-2 bg-white dark:bg-slate-900 text-[7px] p-1 text-left', active === i ? 'border-orange-500' : 'border-border')}
            >
              {s.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => { setSlides((s) => [...s, { title: `Diapositiva ${s.length + 1}`, body: 'Haz clic para editar' }]); setActive(slides.length); }}
            aria-label="Añadir diapositiva"
            className="w-full aspect-video rounded border-2 border-dashed border-border flex items-center justify-center text-slate-400 hover:border-orange-400"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="w-full aspect-video bg-white dark:bg-slate-900 rounded shadow-lg flex flex-col items-center justify-center gap-3 p-6 border border-border">
            <input
              aria-label="Título de la diapositiva"
              value={slides[active]?.title || ''}
              onChange={(e) => setSlides((s) => s.map((sl, i) => i === active ? { ...sl, title: e.target.value } : sl))}
              className="w-full rounded bg-transparent text-center text-xl font-bold text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-slate-100"
            />
            <input
              aria-label="Texto de la diapositiva"
              value={slides[active]?.body || ''}
              onChange={(e) => setSlides((s) => s.map((sl, i) => i === active ? { ...sl, body: e.target.value } : sl))}
              className="w-full rounded bg-transparent text-center text-sm text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-slate-400"
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
  const [draft, setDraft] = useState({ to: '', subject: '', body: '' });
  const [status, setStatus] = useState('Bandeja de práctica. Nada se envía a Internet.');
  const emails = [
    { from: 'SEPE', subject: 'Confirmación de cita', preview: 'Su cita ha sido registrada para el…', unread: true },
    { from: 'Manos Abiertas', subject: 'Bienvenido/a a la plataforma', preview: 'Gracias por unirte, aquí tienes…', unread: true },
    { from: 'Ayuntamiento', subject: 'Empadronamiento', preview: 'Su solicitud está en trámite…', unread: false },
  ];
  return (
    <WindowChrome title="Correo — Bandeja de entrada" icon={<span>✉️</span>}>
      <div className="flex h-[360px] bg-white dark:bg-slate-900">
        <div className="w-32 shrink-0 border-r border-border p-3">
          <button type="button" onClick={() => { setCompose(true); setStatus('Redactando correo local de práctica.'); }} className="w-full min-h-11 rounded-full bg-blue-600 text-white text-xs py-2 mb-4 flex items-center justify-center gap-1">
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
              <input aria-label="Destinatario" value={draft.to} onChange={(event) => setDraft((current) => ({ ...current, to: event.target.value }))} placeholder="Para" className="w-full rounded border-b border-border bg-transparent pb-1 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
              <input aria-label="Asunto" value={draft.subject} onChange={(event) => setDraft((current) => ({ ...current, subject: event.target.value }))} placeholder="Asunto" className="w-full rounded border-b border-border bg-transparent pb-1 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
              <textarea aria-label="Mensaje" value={draft.body} onChange={(event) => setDraft((current) => ({ ...current, body: event.target.value }))} placeholder="Escribe tu mensaje…" className="h-40 w-full resize-none rounded bg-transparent text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!draft.to.trim() || !draft.subject.trim() || !draft.body.trim()) {
                      setStatus('Completa destinatario, asunto y mensaje antes de simular el envío.');
                      return;
                    }
                    setCompose(false);
                    setDraft({ to: '', subject: '', body: '' });
                    setStatus('Envío simulado. No salió ningún dato del navegador.');
                  }}
                  className="min-h-11 rounded-full bg-blue-600 text-white text-xs px-4 py-1.5"
                >
                  Simular envío
                </button>
                <button type="button" onClick={() => { setCompose(false); setStatus('Borrador descartado en esta sesión.'); }} className="min-h-11 rounded-full border border-border text-xs px-4 py-1.5">Cancelar</button>
              </div>
              <p className="text-[10px] text-slate-500" aria-live="polite">{status}</p>
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
          {!compose && <p className="px-3 py-2 text-[10px] text-slate-500" aria-live="polite">{status}</p>}
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
            aria-label="Comando de terminal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && run()}
            className="flex-1 rounded bg-transparent text-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
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
  const [completed, setCompleted] = useState<SimulatorId[]>([]);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      try {
        const stored = parseSimulatorProgress(
          localStorage.getItem(SIMULATOR_PROGRESS_STORAGE_KEY),
          SIMULATOR_IDS,
        );
        setCompleted(stored as SimulatorId[]);
      } catch {
        setCompleted([]);
      }
    }, 0);
    return () => window.clearTimeout(hydrationTimer);
  }, []);
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

  const activeMeta = SIMULATORS.find((simulator) => simulator.id === active) ?? SIMULATORS[0];

  function setPracticeComplete(id: SimulatorId, value: boolean) {
    const next = value
      ? Array.from(new Set([...completed, id]))
      : completed.filter((completedId) => completedId !== id);
    setCompleted(next);
    try {
      localStorage.setItem(SIMULATOR_PROGRESS_STORAGE_KEY, serializeSimulatorProgress(next));
    } catch {
      // La práctica sigue funcionando aunque el navegador bloquee almacenamiento local.
    }
  }

  function resetProgress() {
    setCompleted([]);
    try {
      localStorage.removeItem(SIMULATOR_PROGRESS_STORAGE_KEY);
    } catch {
      // Sin almacenamiento, el estado de esta sesión ya quedó reiniciado.
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1">🖥️ Practica sin miedo</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Simuladores educativos de las herramientas más comunes. No son las apps reales — son recreaciones
          seguras para perder el miedo antes de usarlas de verdad.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-card px-3 py-1 font-medium" aria-live="polite">
            {completed.length}/{SIMULATORS.length} prácticas completadas
          </span>
          {completed.length > 0 && (
            <button
              type="button"
              onClick={resetProgress}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reiniciar progreso
            </button>
          )}
        </div>
      </div>

      {categories.map((cat) => (
        <div key={cat.id}>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{cat.label}</p>
          <div className="flex flex-wrap gap-2">
            {SIMULATORS.filter((s) => s.category === cat.id).map((sim) => (
              <button
                type="button"
                key={sim.id}
                onClick={() => setActive(sim.id)}
                aria-pressed={active === sim.id}
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
          {activeMeta.description}
        </p>
        <section className="mt-4 rounded-xl border border-border bg-card p-4" aria-labelledby="simulator-practice-title">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 id="simulator-practice-title" className="font-semibold">
                Misión práctica: {activeMeta.name}
              </h3>
              <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                {activeMeta.practice.map((task, index) => (
                  <li key={task}>
                    <span className="mr-2 font-semibold text-foreground">{index + 1}.</span>
                    {task}
                  </li>
                ))}
              </ol>
            </div>
            <button
              type="button"
              onClick={() => setPracticeComplete(active, !completed.includes(active))}
              aria-pressed={completed.includes(active)}
              className={cn(
                'inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors',
                completed.includes(active)
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200'
                  : 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
              )}
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {completed.includes(active) ? 'Práctica completada' : 'Marcar como completada'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ToolSimulatorsGallery;
