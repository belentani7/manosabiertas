'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2, RotateCcw, Bot, User, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';
import { getOfflineTutorReply } from '@/lib/offline-tutor';
import { useRemoteAIConsent } from '@/hooks/use-remote-ai-consent';
import { withRemoteAIConsent } from '@/lib/remote-ai-consent';
import { RemoteAIConsent } from './remote-ai-consent';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

const SUGGESTIONS = [
  { emoji: '🤖', text: '¿Cómo empiezo con ChatGPT?' },
  { emoji: '📝', text: 'Ayúdame a escribir mi CV' },
  { emoji: '📄', text: '¿Qué es el NIE y cómo lo pido?' },
  { emoji: '🏠', text: '¿Dónde encuentro ayuda para alquiler?' },
  { emoji: '💼', text: '¿Cuál es el salario mínimo en España?' },
  { emoji: '🗣️', text: '¿Cómo aprendo español gratis?' },
];

const STORAGE_KEY = 'manos-abiertas-chat';

export function AIAssistant() {
  const { language } = useAppStore();
  const { remoteAIConsent } = useRemoteAIConsent();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Client-only history hydration after the deterministic server render.
          // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is an external browser store
          setMessages(parsed);
        }
      }
    } catch { /* ignore */ }
  }, []);

  // Persist chat history
  useEffect(() => {
    if (messages.length > 0) {
      try {
        // Keep only last 20 messages
        const toStore = messages.slice(-20);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
      } catch { /* ignore */ }
    }
  }, [messages]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error('offline');
      }

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 5000);
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          language,
        }, remoteAIConsent)),
        signal: controller.signal,
      });
      window.clearTimeout(timeout);
      if (!resp.ok) throw new Error('Error en el chat');
      const data = await resp.json();
      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: data.text || 'Lo siento, no pude responder. Inténtalo de nuevo.',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errMsg: Message = {
        id: `local-${Date.now()}`,
        role: 'assistant',
        content: getOfflineTutorReply(text, language),
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading, language, remoteAIConsent]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-40 w-14 h-14 rounded-full gradient-brand shadow-xl flex items-center justify-center text-white print:hidden group"
        aria-label="Asistente IA de Manos Abiertas"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
              <MessageCircle className="h-6 w-6 fill-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip when closed */}
        {!open && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card border border-border rounded-lg px-3 py-1.5 text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Pregúntame lo que quieras ✨
          </span>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-40 w-[calc(100vw-2rem)] sm:w-96 h-[600px] max-h-[80vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden print:hidden"
          >
            {/* Header */}
            <div className="gradient-brand p-4 text-white flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-sm flex items-center gap-1.5">
                    Asistente IA
                    <Badge variant="secondary" className="text-[9px] py-0 h-4 bg-white/20 text-white border-0">Beta</Badge>
                  </div>
                  <div className="text-[11px] text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Netlify · modo local · 39 idiomas
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={clearChat}
                    className="h-11 w-11 text-white hover:bg-white/20"
                    aria-label="Limpiar conversación"
                    title="Limpiar conversación"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </Button>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                  className="h-11 w-11 text-white hover:bg-white/20"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-3 bg-muted/20">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4 py-6">
                  <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-3 shadow-md">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-base mb-1">¡Hola! 👋 Soy tu asistente</h3>
                  <p className="text-xs text-muted-foreground mb-4 max-w-xs">
                    Pregúntame sobre IA, tu CV, derechos, recursos... ¡lo que necesites! Estoy aquí para ayudarte en tu idioma.
                  </p>
                  <div className="w-full space-y-1.5">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1 justify-center">
                      <Lightbulb className="h-3 w-3 text-amber-500" />
                      Sugerencias
                    </div>
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s.text}
                        onClick={() => sendMessage(s.text)}
                        className="w-full text-left p-2.5 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-accent/30 transition-colors text-xs flex items-center gap-2 group"
                      >
                        <span className="text-base">{s.emoji}</span>
                        <span className="flex-1">{s.text}</span>
                        <Send className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn('flex gap-2', msg.role === 'user' ? 'flex-row-reverse' : 'flex-row')}
                  >
                    <div className={cn(
                      'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0',
                      msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'gradient-brand text-white'
                    )}>
                      {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={cn(
                      'max-w-[80%] rounded-2xl px-3 py-2 text-sm',
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-card border border-border rounded-tl-sm'
                    )}>
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    </div>
                  </motion.div>
                ))
              )}

              {/* Loading indicator */}
              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="w-7 h-7 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-card flex-shrink-0">
              <RemoteAIConsent compact className="mb-2" />
              <div className="flex gap-2 items-end">
                <Textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu pregunta..."
                  className="min-h-[40px] max-h-24 resize-none text-sm"
                  rows={1}
                  disabled={loading}
                />
                <Button
                  size="icon"
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="h-11 w-11 flex-shrink-0 gradient-brand text-white"
                  aria-label="Enviar"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5 text-primary" />
                  IA de Manos Abiertas
                </span>
                <span className="hidden sm:inline">Enter para enviar · Shift+Enter para salto de línea</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
