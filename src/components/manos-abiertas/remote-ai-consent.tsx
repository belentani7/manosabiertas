'use client';

import { useId } from 'react';
import { Cloud, ShieldCheck } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useRemoteAIConsent } from '@/hooks/use-remote-ai-consent';
import { cn } from '@/lib/utils';

export function RemoteAIConsent({ compact = false, className }: { compact?: boolean; className?: string }) {
  const id = useId();
  const { remoteAIConsent, setRemoteAIConsent } = useRemoteAIConsent();

  return (
    <div className={cn(
      'rounded-xl border p-3 text-left',
      remoteAIConsent
        ? 'border-sky-300 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/30'
        : 'border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30',
      compact && 'p-2.5',
      className,
    )}>
      <div className="flex items-start gap-3">
        <div className={cn(
          'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
          remoteAIConsent ? 'bg-sky-100 text-sky-700 dark:bg-sky-900' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900',
        )}>
          {remoteAIConsent ? <Cloud className="h-4 w-4" aria-hidden="true" /> : <ShieldCheck className="h-4 w-4" aria-hidden="true" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex min-h-11 items-center justify-between gap-3">
            <Label htmlFor={id} className="cursor-pointer text-sm font-semibold leading-tight">
              Permitir IA externa
            </Label>
            <Switch
              id={id}
              checked={remoteAIConsent}
              onCheckedChange={setRemoteAIConsent}
              aria-describedby={`${id}-description ${id}-warning`}
            />
          </div>
          <p id={`${id}-description`} className="text-xs leading-relaxed text-muted-foreground" aria-live="polite">
            {remoteAIConsent
              ? 'Permitido: el contenido de esta herramienta puede enviarse al proveedor de IA configurado.'
              : 'Modo protegido: la solicitud llega a Manos Abiertas, pero no se reenvía a proveedores externos.'}
          </p>
          <p id={`${id}-warning`} className={cn('mt-1 text-[11px] leading-relaxed', remoteAIConsent ? 'font-medium text-sky-800 dark:text-sky-200' : 'text-muted-foreground')}>
            No escribas DNI/NIE, contraseñas, datos bancarios, médicos ni información de menores.
          </p>
        </div>
      </div>
    </div>
  );
}
