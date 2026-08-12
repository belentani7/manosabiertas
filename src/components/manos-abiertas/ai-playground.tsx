'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Sparkles, Bot, User, RotateCcw, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/stores/app-store';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useRemoteAIConsent } from '@/hooks/use-remote-ai-consent';
import { withRemoteAIConsent } from '@/lib/remote-ai-consent';
import { RemoteAIConsent } from './remote-ai-consent';

interface AIPlaygroundProps {
  /** Title for the playground section */
  title?: string;
  /** Suggested prompts users can click to try */
  suggestedPrompts?: string[];
  /** Context/system prompt to guide the AI response */
  contextPrompt?: string;
  /** Default initial prompt */
  defaultPrompt?: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function AIPlayground({
  title = 'Prueba este prompt con IA',
  suggestedPrompts = [],
  contextPrompt,
  defaultPrompt,
}: AIPlaygroundProps) {
  const { language } = useAppStore();
  const { remoteAIConsent } = useRemoteAIConsent();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(defaultPrompt || '');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  async function sendPrompt(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const systemMsg = contextPrompt
        ? `Contexto: ${contextPrompt}\n\nInstrucción: Responde de forma práctica y clara, en español sencillo, como si estuvieras ayudando a una persona que está aprendiendo a usar IA.`
        : 'Eres un asistente que ayuda a una persona a aprender IA. Responde en español sencillo y práctico.';

      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withRemoteAIConsent({
          messages: [
            { role: 'assistant', content: systemMsg },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: text.trim() },
          ],
          language,
        }, remoteAIConsent)),
      });

      if (!resp.ok) throw new Error('Error en la IA');
      const data = await resp.json();
      const aiMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: data.text || 'Lo siento, no pude responder. Inténtalo de nuevo.',
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      toast.error('No se pudo conectar con la IA. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt(input);
    }
  }

  function reset() {
    setMessages([]);
    setInput(defaultPrompt || '');
  }

  return (
    <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 overflow-hidden">
      {/* Header - clickable to expand/collapse */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-3 flex items-center justify-between hover:bg-primary/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold flex items-center gap-1.5">
              {title}
              <Badge variant="secondary" className="text-[9px] py-0 h-4">Interactivo</Badge>
            </div>
            <div className="text-[11px] text-muted-foreground">
              Prueba el prompt sin salir de la lección
            </div>
          </div>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-3 pt-0 space-y-3">
              {/* Messages */}
              {messages.length > 0 && (
                <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-2 p-2 bg-card rounded-lg border border-border">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn('flex gap-2', msg.role === 'user' ? 'flex-row-reverse' : 'flex-row')}
                    >
                      <div className={cn(
                        'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0',
                        msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'gradient-brand text-white'
                      )}>
                        {msg.role === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                      </div>
                      <div className={cn(
                        'max-w-[85%] rounded-lg px-2.5 py-1.5 text-xs',
                        msg.role === 'user'
                          ? 'bg-primary/10 text-foreground rounded-tr-sm'
                          : 'bg-muted text-foreground rounded-tl-sm'
                      )}>
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-muted rounded-lg rounded-tl-sm px-3 py-2">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Suggested prompts */}
              {suggestedPrompts.length > 0 && messages.length === 0 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                    <Lightbulb className="h-3 w-3 text-amber-500" />
                    Prompts sugeridos
                  </div>
                  {suggestedPrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(p)}
                      className="w-full text-left p-2 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-accent/30 transition-colors text-xs"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <RemoteAIConsent compact />
              <div className="flex gap-2 items-end">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu prompt para la IA..."
                  className="min-h-[40px] max-h-24 resize-none text-xs"
                  rows={2}
                  disabled={loading}
                />
                <Button
                  size="icon"
                  onClick={() => sendPrompt(input)}
                  disabled={!input.trim() || loading}
                  className="h-11 w-11 flex-shrink-0 gradient-brand text-white"
                  aria-label="Enviar prompt"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-muted-foreground">
                  Enter para enviar · Shift+Enter para salto de línea
                </span>
                {messages.length > 0 && (
                  <button
                    onClick={reset}
                    className="text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="h-2.5 w-2.5" />
                    Limpiar
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
