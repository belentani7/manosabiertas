'use client';

import { useEffect, useState } from 'react';
import { Activity, CheckCircle2, CloudOff, RefreshCw, Wifi } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Health = { ok: boolean; provider?: string; capabilities?: string[] };
type Status = 'checking' | 'healthy' | 'local' | 'offline';

export function SystemAwareness() {
  const [status, setStatus] = useState<Status>('checking');
  const [health, setHealth] = useState<Health | null>(null);

  async function check() {
    if (!navigator.onLine) {
      setStatus('offline');
      return;
    }
    setStatus('checking');
    try {
      const response = await fetch('/api/health', { cache: 'no-store', signal: AbortSignal.timeout(4000) });
      const data = await response.json() as Health;
      setHealth(data);
      setStatus(data.provider && data.provider !== 'local' ? 'healthy' : 'local');
    } catch {
      setStatus('local');
    }
  }

  useEffect(() => {
    const initialCheck = window.setTimeout(() => void check(), 0);
    const onOnline = () => void check();
    const onOffline = () => setStatus('offline');
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => { window.clearTimeout(initialCheck); window.removeEventListener('online', onOnline); window.removeEventListener('offline', onOffline); };
  }, []);

  const copy = {
    checking: { label: 'Comprobando', className: 'border-border text-muted-foreground', icon: RefreshCw },
    healthy: { label: `IA activa · ${health?.provider}`, className: 'border-emerald-300 text-emerald-700 dark:text-emerald-400', icon: CheckCircle2 },
    local: { label: 'Modo local protegido', className: 'border-amber-300 text-amber-700 dark:text-amber-400', icon: Activity },
    offline: { label: 'Sin conexión · modo local', className: 'border-sky-300 text-sky-700 dark:text-sky-400', icon: CloudOff },
  }[status];
  const Icon = copy.icon;

  return <div className="flex flex-wrap items-center gap-2" aria-live="polite"><Badge variant="outline" className={`gap-1.5 ${copy.className}`}><Icon className={`h-3.5 w-3.5 ${status === 'checking' ? 'animate-spin' : ''}`} />{copy.label}</Badge>{status === 'local' && <span className="text-[11px] text-muted-foreground">Tutor offline y datos locales disponibles</span>}{status === 'offline' && <Wifi className="h-3.5 w-3.5 text-sky-600" aria-label="Conexión ausente" />}<Button type="button" variant="ghost" size="sm" className="h-11 px-2 text-[11px]" onClick={() => void check()}>Diagnosticar</Button></div>;
}
