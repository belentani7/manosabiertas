"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Terminal,
  Command,
  FileText,
  FolderOpen,
  Calculator,
  Gauge,
  Settings2,
  Clock3,
  Search,
  ChevronRight,
  HardDrive,
  Cpu,
  Play,
  X,
  Check,
  Activity,
  Archive,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  CircleHelp,
  Network,
  LayoutGrid
} from "lucide-react";

type AppId =
  | "overview"
  | "cmd"
  | "powershell"
  | "notepad"
  | "explorer"
  | "calculator"
  | "task-manager"
  | "settings";

type FileEntry = {
  name: string;
  type: string;
  size: string;
  accent: string;
};

const modules = [
  { number: "01", title: "Windows & Android", meta: "Ambiente digital", progress: 100 },
  { number: "02", title: "LLMs por dentro", meta: "IA generativa", progress: 68 },
  { number: "03", title: "CMD essencial", meta: "Linha de comando", progress: 42 },
  { number: "04", title: "PowerShell", meta: "Automação segura", progress: 22 },
  { number: "05", title: "Claude AI", meta: "Conversas e criação", progress: 0 },
  { number: "06", title: "Claude Code", meta: "Programação assistida", progress: 0 },
  { number: "07", title: "HTML moderno", meta: "Estrutura da web", progress: 0 },
  { number: "08", title: "Java essencial", meta: "Lógica e objetos", progress: 0 },
  { number: "09", title: "Python prático", meta: "Automação e dados", progress: 0 },
  { number: "10", title: "Integração", meta: "Fluxos de trabalho", progress: 0 },
  { number: "11", title: "Projetos", meta: "Aprendizado aplicado", progress: 0 },
  { number: "12", title: "Próximos passos", meta: "Mapa de continuidade", progress: 0 },
];

const fileEntries: FileEntry[] = [
  { name: "curso-llms.md", type: "Documento Markdown", size: "42 KB", accent: "crimson" },
  { name: "powershell-lab.ps1", type: "Script PowerShell", size: "8 KB", accent: "ice" },
  { name: "cmd-pratica.txt", type: "Arquivo de texto", size: "5 KB", accent: "warm" },
  { name: "python-projetos.py", type: "Código Python", size: "14 KB", accent: "blue" },
  { name: "html-estacao.html", type: "Documento HTML", size: "11 KB", accent: "gold" },
];

const appMeta: Record<AppId, { label: string; icon: typeof Terminal; kicker: string }> = {
  overview: { label: "Estação", icon: Archive, kicker: "MANOS ABIERTAS / WORKSTATION" },
  cmd: { label: "CMD seguro", icon: Terminal, kicker: "WORKSPACE / CMD" },
  powershell: { label: "PowerShell", icon: Command, kicker: "WORKSPACE / POWERSHELL" },
  notepad: { label: "Notepad", icon: FileText, kicker: "WORKSPACE / NOTEPAD" },
  explorer: { label: "Explorer", icon: FolderOpen, kicker: "WORKSPACE / EXPLORER" },
  calculator: { label: "Calculadora", icon: Calculator, kicker: "WORKSPACE / CALCULATOR" },
  "task-manager": { label: "Task Manager", icon: Gauge, kicker: "WORKSPACE / TASK MANAGER" },
  settings: { label: "Configurações", icon: Settings2, kicker: "SYSTEM / SETTINGS" },
};

const initialTerminalLines = [
  "Manos Abiertas - Estação Técnica Integrada [modo seguro]",
  "Ferramentas Windows mimetizadas em HTML. Nenhuma execução real no sistema.",
  "Digite `help` para ver comandos didáticos.",
];

function formatClock(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function WindowChrome({
  title,
  kicker,
  icon: Icon,
  onClose,
  children,
}: {
  title: string;
  kicker: string;
  icon: typeof Terminal;
  onClose?: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="sim-window border border-white/15 bg-[#151514] shadow-2xl" aria-label={title}>
      <header className="window-bar h-11 border-b border-white/10 flex items-center justify-between px-3 bg-[#191917]">
        <div className="window-title flex items-center gap-2 text-stone-200 text-xs font-mono">
          <span className="window-app-icon w-6 h-6 border border-rose-600/60 grid place-items-center text-rose-500"><Icon size={14} /></span>
          <span>{title}</span>
          <span className="window-kicker text-stone-500 text-[9px] tracking-wider uppercase ml-1">{kicker}</span>
        </div>
        <div className="window-controls flex items-center gap-1">
          <span className="w-7 h-6 grid place-items-center text-stone-400">—</span>
          <span className="w-7 h-6 grid place-items-center text-stone-400">□</span>
          <button className="w-7 h-6 grid place-items-center text-stone-400 hover:bg-rose-900/60 hover:text-white transition" onClick={onClose} aria-label={`Fechar ${title}`}><X size={13} /></button>
        </div>
      </header>
      {children}
    </section>
  );
}

function TerminalApp({ mode }: { mode: "cmd" | "powershell" }) {
  const [lines, setLines] = useState(initialTerminalLines);
  const [input, setInput] = useState("");
  const prompt = mode === "cmd" ? "C:\\ManosAbiertas>" : "PS C:\\ManosAbiertas>";
  const label = mode === "cmd" ? "CMD seguro" : "PowerShell seguro";

  const execute = () => {
    const command = input.trim();
    if (!command) return;
    const lower = command.toLowerCase();
    let response: string[] = [];
    if (lower === "help" || lower === "get-help") {
      response = mode === "cmd"
        ? ["help · dir · cd .. · echo [texto] · whoami · ipconfig · cls", "Dica: simulação educativa para apoio a migrantes e estudantes."]
        : ["Get-Help · Get-ChildItem · Get-Process · Get-Date · Clear-Host", "Dica: comandos de automação segura no navegador."];
    } else if (lower === "cls" || lower === "clear-host" || lower === "clear") {
      setLines([]);
      setInput("");
      return;
    } else if (lower === "dir" || lower === "get-childitem") {
      response = ["Mode   LastWriteTime      Length Name", "----   -------------      ------ ----", "-a---  16/08/2026         42KB   curso-llms.md", "-a---  16/08/2026          8KB   powershell-lab.ps1", "d----  16/08/2026               recursos/"];
    } else if (lower === "whoami") {
      response = ["manosabiertas\\estudante", "Perfil local de simulação."];
    } else if (lower.startsWith("echo ")) {
      response = [command.slice(5)];
    } else {
      response = [`'${command}' executado na simulação local do Manos Abiertas.`];
    }
    setLines((current) => [...current, `${prompt} ${command}`, ...response]);
    setInput("");
  };

  return (
    <WindowChrome title={label} kicker={mode === "cmd" ? "COMMAND PROMPT" : "OBJECT PIPELINE"} icon={mode === "cmd" ? Terminal : Command}>
      <div className="terminal-toolbar h-8 px-3 border-b border-white/10 flex items-center gap-2 text-stone-400 text-[10px] font-mono bg-[#0c0d0c]"><span className="w-1.5 h-1.5 rounded-full bg-rose-600 inline-block animate-pulse" /> SIMULAÇÃO LOCAL <span className="ml-auto">UTF-8</span></div>
      <div className="terminal-body p-4 min-h-[420px] bg-black text-emerald-400 font-mono text-xs leading-relaxed overflow-y-auto" onClick={() => document.getElementById(`${mode}-input`)?.focus()}>
        {lines.map((line, idx) => <div key={idx} className={line.startsWith(prompt) ? "text-rose-300 font-semibold" : "text-emerald-500/90"}>{line}</div>)}
        <div className="flex items-center gap-2 mt-2 text-rose-500"><span>{prompt}</span><input id={`${mode}-input`} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && execute()} className="bg-transparent border-0 outline-none flex-1 text-stone-100" autoComplete="off" /></div>
      </div>
    </WindowChrome>
  );
}

function NotepadApp() {
  const [text, setText] = useState("# Manos Abiertas — Bloco de Notas\n\nNotas de estudo e procedimentos úteis.\n\n1. Respeito à privacidade.\n2. Aprendizado prático de IA e Office.\n");
  return (
    <WindowChrome title="Notepad" kicker="PLAIN TEXT / LOCAL DRAFT" icon={FileText}>
      <div className="h-8 px-3 border-b border-white/10 flex items-center gap-3 text-stone-400 text-[10px] font-mono bg-[#111]"><span>Arquivo</span><span>Editar</span><span>Exibir</span><span className="ml-auto text-emerald-400 flex items-center gap-1"><Check size={12} /> salvo localmente</span></div>
      <textarea className="w-full min-h-[420px] p-4 bg-[#0c0c0c] text-stone-200 font-mono text-xs resize-y border-0 outline-none" value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} />
      <footer className="h-7 px-3 border-t border-white/10 flex items-center justify-end gap-4 text-stone-500 text-[9px] font-mono bg-[#111]"><span>Ln 1, Col 1</span><span>UTF-8</span></footer>
    </WindowChrome>
  );
}

function ExplorerApp() {
  const [selected, setSelected] = useState(fileEntries[0].name);
  const file = fileEntries.find((f) => f.name === selected) ?? fileEntries[0];
  return (
    <WindowChrome title="Explorer" kicker="WORKSPACE / RECURSOS" icon={FolderOpen}>
      <div className="h-9 px-3 border-b border-white/10 flex items-center gap-3 text-stone-400 text-xs bg-[#111]"><button className="text-stone-300 text-xs">← voltar</button><div className="px-2 py-1 bg-black/40 border border-white/10 rounded text-stone-300 text-xs flex items-center gap-2"><HardDrive size={13} /> ManosAbiertas / recursos</div></div>
      <div className="grid grid-cols-[200px_minmax(0,1fr)_200px] min-h-[420px] bg-[#0e0e0d]">
        <aside className="border-r border-white/10 p-3 flex flex-col gap-1 text-xs text-stone-300"><span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest mb-1">Navegação</span><button className="text-left px-2 py-1.5 rounded hover:bg-white/5 flex items-center gap-2"><Archive size={14} /> Cursos</button><button className="text-left px-2 py-1.5 rounded hover:bg-white/5 flex items-center gap-2"><FolderOpen size={14} /> Documentos</button></aside>
        <div className="p-3">
          <div className="grid grid-cols-[24px_1.5fr_1fr_80px] text-[9px] font-mono text-stone-500 uppercase pb-2 border-b border-white/10"><span></span><span>Nome</span><span>Tipo</span><span>Tamanho</span></div>
          {fileEntries.map((entry) => (
            <button key={entry.name} className={`grid grid-cols-[24px_1.5fr_1fr_80px] w-full items-center py-2 px-1 text-left text-xs font-mono hover:bg-white/5 ${selected === entry.name ? "bg-white/10 text-white" : "text-stone-300"}`} onClick={() => setSelected(entry.name)}>
              <FileText size={14} className="text-rose-500" />
              <span className="truncate">{entry.name}</span>
              <span className="text-stone-500 text-[10px]">{entry.type}</span>
              <span className="text-stone-500 text-[10px]">{entry.size}</span>
            </button>
          ))}
        </div>
        <aside className="border-l border-white/10 p-4 font-mono text-xs text-stone-400 flex flex-col gap-2"><span className="text-[9px] text-stone-500 uppercase">Inspetor</span><strong className="text-white font-serif text-sm">{file.name}</strong><span className="text-stone-500">{file.type}</span><div className="my-2 border-t border-white/10" /><span className="text-rose-500">Disponível offline</span></aside>
      </div>
    </WindowChrome>
  );
}

function CalculatorApp() {
  const [display, setDisplay] = useState("0");
  const buttons = ["C", "⌫", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "±", "0", ".", "="];
  const press = (val: string) => {
    if (val === "C") return setDisplay("0");
    if (val === "⌫") return setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    if (val === "=") {
      try { setDisplay(String(Function(`"use strict"; return (${display.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")})`)())); } catch { setDisplay("erro"); }
      return;
    }
    setDisplay(display === "0" || display === "erro" ? val : display + val);
  };
  return (
    <WindowChrome title="Calculadora" kicker="BASIC / MATH" icon={Calculator}>
      <div className="max-w-xs mx-auto my-6 p-4 bg-[#111] border border-white/10">
        <div className="h-20 bg-black p-3 mb-4 flex flex-col justify-end text-right border border-white/10 font-mono text-2xl text-white">{display}</div>
        <div className="grid grid-cols-4 gap-1.5">
          {buttons.map((btn) => <button key={btn} onClick={() => press(btn)} className="h-12 bg-[#222] hover:bg-[#333] text-stone-200 font-mono text-sm border border-white/5">{btn}</button>)}
        </div>
      </div>
    </WindowChrome>
  );
}

function TaskManagerApp() {
  return (
    <WindowChrome title="Task Manager" kicker="SYSTEM / MONITOR" icon={Gauge}>
      <div className="grid grid-cols-3 gap-px bg-white/10 p-px bg-[#111]">
        <div className="bg-[#151514] p-4"><span className="text-[9px] font-mono text-stone-500 uppercase">CPU</span><strong className="block text-xl font-mono text-white my-2">02%</strong><div className="h-1 bg-stone-800"><div className="w-[15%] h-full bg-rose-600" /></div></div>
        <div className="bg-[#151514] p-4"><span className="text-[9px] font-mono text-stone-500 uppercase">Memória</span><strong className="block text-xl font-mono text-white my-2">480 MB</strong><div className="h-1 bg-stone-800"><div className="w-[30%] h-full bg-sky-600" /></div></div>
        <div className="bg-[#151514] p-4"><span className="text-[9px] font-mono text-stone-500 uppercase">Disco</span><strong className="block text-xl font-mono text-white my-2">01%</strong><div className="h-1 bg-stone-800"><div className="w-[5%] h-full bg-amber-600" /></div></div>
      </div>
      <div className="p-4 font-mono text-xs text-stone-300">
        <div className="grid grid-cols-3 text-[9px] text-stone-500 uppercase pb-2 border-b border-white/10"><span>Processo</span><span>CPU</span><span>Status</span></div>
        <div className="grid grid-cols-3 py-2 border-b border-white/5"><span>manos-shell</span><span>0.4%</span><span className="text-emerald-400">● rodando</span></div>
        <div className="grid grid-cols-3 py-2 border-b border-white/5"><span>windows-sim</span><span>0.1%</span><span className="text-emerald-400">● ativo</span></div>
      </div>
    </WindowChrome>
  );
}

function SettingsApp() {
  return (
    <WindowChrome title="Configurações" kicker="SYSTEM / PREFERENCES" icon={Settings2}>
      <div className="p-6 max-w-xl">
        <h3 className="text-2xl font-serif text-white mb-2">Painel de Preferências</h3>
        <p className="text-stone-400 text-xs mb-6">Ajuste o comportamento dos simuladores e do armazenamento local do Manos Abiertas.</p>
        <div className="border-t border-white/10 py-4 flex items-center justify-between"><div><strong className="block text-xs text-white">Modo Seguro Windows</strong><span className="text-[10px] text-stone-500 font-mono">Executa apenas simuladores educativos</span></div><span className="w-8 h-4 rounded-full bg-rose-600 flex items-center justify-end px-0.5"><span className="w-3 h-3 rounded-full bg-white" /></span></div>
        <div className="border-t border-white/10 py-4 flex items-center justify-between"><div><strong className="block text-xs text-white">Progresso Offline (JSON)</strong><span className="text-[10px] text-stone-500 font-mono">Exportar e importar dados localmente</span></div><span className="w-8 h-4 rounded-full bg-rose-600 flex items-center justify-end px-0.5"><span className="w-3 h-3 rounded-full bg-white" /></span></div>
      </div>
    </WindowChrome>
  );
}

export default function WindowsStation() {
  const [activeApp, setActiveApp] = useState<AppId>("overview");
  const [clock, setClock] = useState(() => formatClock(new Date()));
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => setClock(formatClock(new Date())), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const filteredModules = useMemo(() => modules.filter((m) => `${m.title} ${m.meta}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <div className="min-h-screen bg-[#0e0e0d] text-[#eee9df] flex flex-col font-sans">
      <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0e0e0d]/95 sticky top-0 z-20 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#191917] border border-white/20 flex items-center justify-center text-rose-500 font-bold font-mono text-xs">MA</div>
          <div>
            <strong className="block text-[11px] font-mono tracking-wider text-white">MANOS ABIERTAS / ESTAÇÃO WINDOWS</strong>
            <span className="block text-[9px] font-mono text-stone-500">MIMETIZADOR DE FERRAMENTAS & CURSO TÉCNICO</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-600 inline-block" /> modo seguro</span>
          <span><Clock3 size={13} className="inline mr-1" /> {clock}</span>
        </div>
      </header>

      <div className="grid grid-cols-[220px_minmax(0,1fr)_300px] flex-1">
        <aside className="border-r border-white/10 p-4 bg-[#121211] flex flex-col gap-2">
          <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest px-2 mb-1">Ferramentas</span>
          <button onClick={() => setActiveApp("overview")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "overview" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><LayoutGrid size={15} /> Visão Geral</button>
          <button onClick={() => setActiveApp("cmd")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "cmd" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><Terminal size={15} /> CMD Seguro</button>
          <button onClick={() => setActiveApp("powershell")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "powershell" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><Command size={15} /> PowerShell</button>
          <button onClick={() => setActiveApp("notepad")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "notepad" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><FileText size={15} /> Notepad</button>
          <button onClick={() => setActiveApp("explorer")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "explorer" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><FolderOpen size={15} /> Explorer</button>
          <button onClick={() => setActiveApp("calculator")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "calculator" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><Calculator size={15} /> Calculadora</button>
          <button onClick={() => setActiveApp("task-manager")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "task-manager" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"}`}><Gauge size={15} /> Task Manager</button>
          <button onClick={() => setActiveApp("settings")} className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-mono text-left transition ${activeApp === "settings" ? "bg-white/10 text-white" : "text-stone-400 hover:bg-white/5"} mt-auto`}><Settings2 size={15} /> Configurações</button>
        </aside>

        <main className="p-6 overflow-y-auto bg-[#0e0e0d]">
          {activeApp === "overview" ? (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border border-white/10 bg-[#131312] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-rose-900/20 to-transparent pointer-events-none" />
                <span className="text-xs font-mono text-rose-500 uppercase tracking-widest">MANOS ABIERTAS / ESTAÇÃO TÉCNICA</span>
                <h1 className="text-4xl md:text-5xl font-serif font-medium text-white my-4 leading-tight">Ferramentas Windows<br />mimetizadas em HTML.</h1>
                <p className="text-stone-400 text-sm max-w-xl mb-6">Explore o ambiente de terminal, editores e utilitários integrados à plataforma gratuita de apoio a migrantes e comunidades.</p>
                <div className="flex gap-4">
                  <button onClick={() => setActiveApp("cmd")} className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs flex items-center gap-2 rounded transition"><Play size={14} fill="currentColor" /> Abrir CMD Seguro</button>
                  <button onClick={() => setActiveApp("explorer")} className="px-5 py-2.5 border border-white/20 hover:bg-white/5 text-stone-200 font-mono text-xs rounded transition">Ver Arquivos</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button onClick={() => setActiveApp("cmd")} className="p-5 border border-white/10 bg-[#151514] hover:border-rose-600/50 text-left transition group">
                  <Terminal size={22} className="text-rose-500 mb-3 group-hover:scale-110 transition-transform" />
                  <strong className="block text-white font-mono text-xs mb-1">CMD Seguro</strong>
                  <span className="block text-stone-400 text-[11px]">Comandos essenciais de terminal em ambiente controlado.</span>
                </button>
                <button onClick={() => setActiveApp("powershell")} className="p-5 border border-white/10 bg-[#151514] hover:border-sky-600/50 text-left transition group">
                  <Command size={22} className="text-sky-400 mb-3 group-hover:scale-110 transition-transform" />
                  <strong className="block text-white font-mono text-xs mb-1">PowerShell</strong>
                  <span className="block text-stone-400 text-[11px]">Pipeline de objetos e automação para iniciantes.</span>
                </button>
                <button onClick={() => setActiveApp("notepad")} className="p-5 border border-white/10 bg-[#151514] hover:border-amber-600/50 text-left transition group">
                  <FileText size={22} className="text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                  <strong className="block text-white font-mono text-xs mb-1">Notepad</strong>
                  <span className="block text-stone-400 text-[11px]">Editor de texto local para rascunhos e guias.</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {activeApp === "cmd" && <TerminalApp mode="cmd" />}
              {activeApp === "powershell" && <TerminalApp mode="powershell" />}
              {activeApp === "notepad" && <NotepadApp />}
              {activeApp === "explorer" && <ExplorerApp />}
              {activeApp === "calculator" && <CalculatorApp />}
              {activeApp === "task-manager" && <TaskManagerApp />}
              {activeApp === "settings" && <SettingsApp />}
              <button onClick={() => setActiveApp("overview")} className="mt-4 text-xs font-mono text-stone-400 hover:text-white flex items-center gap-1">← Voltar à visão geral</button>
            </div>
          )}
        </main>

        <aside className="border-l border-white/10 p-4 bg-[#121211] flex flex-col gap-4">
          <div className="flex items-center justify-between"><span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">Índice do Curso</span><span className="text-rose-500 font-mono text-xs">12 Módulos</span></div>
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-2.5 text-stone-500" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="buscar módulo..." className="w-full bg-black/40 border border-white/10 rounded pl-8 pr-3 py-1.5 text-xs text-stone-200 font-mono outline-none" />
          </div>
          <div className="flex-1 overflow-y-auto space-y-1 pr-1">
            {filteredModules.map((m) => (
              <div key={m.number} className="p-2 border border-white/5 bg-black/20 rounded flex items-center justify-between text-xs font-mono">
                <div><span className="text-rose-500 mr-2">{m.number}</span><span className="text-stone-300">{m.title}</span></div>
                <span className="text-[10px] text-stone-500">{m.progress}%</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <footer className="h-8 border-t border-white/10 flex items-center justify-between px-6 text-[9px] font-mono text-stone-500 bg-[#0e0e0d]">
        <span>Manos Abiertas — Ferramentas Windows em HTML</span>
        <span>PT / ES / EN</span>
      </footer>
    </div>
  );
}
