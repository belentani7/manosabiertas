'use client';

import { Archive, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function DownloadsZipSection() {
  return (
    <Card className="border-border/60">
      <CardContent className="flex gap-3 p-4">
        <span className="rounded-lg bg-muted p-2" aria-hidden="true">
          <Archive className="h-5 w-5" />
        </span>
        <div>
          <h3 className="flex items-center gap-2 font-semibold">
            Inventario técnico local
            <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-300" aria-label="Protegido" />
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Los nombres de archivo, rutas y paquetes no curados permanecen fuera de la aplicación pública. Solo las fuentes didácticas revisadas aparecen en la biblioteca.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
