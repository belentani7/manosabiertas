'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, X, Copy, Download, Printer, Check, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { DOCUMENT_TEMPLATES, TEMPLATE_CATEGORIES, type DocumentTemplate } from '@/data/document-templates';
import { cn } from '@/lib/utils';

export function DocumentTemplates() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(() => {
    return DOCUMENT_TEMPLATES.filter((t) => {
      const matchesQuery = !query ||
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      const matchesCat = category === 'all' || t.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  function openTemplate(template: DocumentTemplate) {
    setSelectedTemplate(template);
    setEditedContent(template.content);
  }

  function copyContent() {
    navigator.clipboard.writeText(editedContent);
    setCopied(true);
    toast.success('Plantilla copiada al portapapeles 📋');
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadContent() {
    const blob = new Blob([editedContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate?.title.replace(/\s+/g, '-').toLowerCase() || 'plantilla'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Plantilla descargada 💾');
  }

  function printContent() {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html><head><title>${selectedTemplate?.title}</title>
      <style>body{font-family:Georgia,serif;max-width:800px;margin:40px auto;padding:20px;line-height:1.6;white-space:pre-wrap;}</style>
      </head><body>${editedContent.replace(/\n/g, '<br>')}</body></html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  function resetTemplate() {
    if (selectedTemplate) {
      setEditedContent(selectedTemplate.content);
      toast.success('Plantilla restaurada');
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Plantillas de Documentos
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Plantillas listas para usar: CV, cartas, reclamaciones y más
        </p>
      </div>

      {/* Search & filters */}
      <Card>
        <CardContent className="p-3 space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar plantilla... (CV, carta, reclamación)"
              className="pl-9"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCategory('all')}
              className={cn(
                'text-xs px-2.5 py-1 rounded-full border transition-colors',
                category === 'all' ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent'
              )}
            >
              Todas ({DOCUMENT_TEMPLATES.length})
            </button>
            {TEMPLATE_CATEGORIES.map((c) => {
              const count = DOCUMENT_TEMPLATES.filter((t) => t.category === c.value).length;
              return (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={cn(
                    'text-xs px-2.5 py-1 rounded-full border transition-colors flex items-center gap-1',
                    category === c.value ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent'
                  )}
                >
                  <span>{c.emoji}</span>
                  {c.label} ({count})
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Templates grid */}
      {filtered.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <Search className="h-10 w-10 mx-auto mb-2 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground">No se encontraron plantillas</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((template, i) => {
            const cat = TEMPLATE_CATEGORIES.find((c) => c.value === template.category);
            return (
              <motion.button
                key={template.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => openTemplate(template)}
                className="group text-left"
              >
                <Card className="card-hover border-border/60 hover:border-primary/40 h-full overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-primary/40 to-primary/20" />
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl flex-shrink-0">{template.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                          {template.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{template.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Badge variant="outline" className={cn('text-[9px] py-0 h-4', cat?.color)}>
                        {cat?.emoji} {cat?.label}
                      </Badge>
                      <Badge variant="outline" className="text-[9px] py-0 h-4">
                        {template.format === 'email' ? '📧 Email' : template.format === 'form' ? '📋 Formulario' : '📄 Texto'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Template editor dialog */}
      <Dialog open={!!selectedTemplate} onOpenChange={(o) => !o && setSelectedTemplate(null)}>
        <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden max-h-[90vh] flex flex-col">
          <DialogHeader className="p-4 border-b border-border flex-shrink-0">
            <DialogTitle className="flex items-center gap-2">
              <span className="text-xl">{selectedTemplate?.emoji}</span>
              {selectedTemplate?.title}
            </DialogTitle>
          </DialogHeader>

          {/* Toolbar */}
          <div className="flex items-center gap-2 p-2 border-b border-border bg-muted/30 flex-shrink-0">
            <Button size="sm" variant="outline" onClick={copyContent} className="gap-1.5">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copiado' : 'Copiar'}
            </Button>
            <Button size="sm" variant="outline" onClick={downloadContent} className="gap-1.5">
              <Download className="h-3.5 w-3.5" />
              Descargar
            </Button>
            <Button size="sm" variant="outline" onClick={printContent} className="gap-1.5">
              <Printer className="h-3.5 w-3.5" />
              Imprimir
            </Button>
            <Button size="sm" variant="ghost" onClick={resetTemplate} className="gap-1.5 ml-auto text-xs">
              Restaurar
            </Button>
          </div>

          {/* Editable content */}
          <ScrollArea className="flex-1">
            <div className="p-4">
              <p className="text-xs text-muted-foreground mb-2">
                Edita el texto reemplazando los campos [ENTRE CORCHETES] con tus datos
              </p>
              <label htmlFor="document-template-content" className="sr-only">Contenido editable de la plantilla</label>
              <textarea
                id="document-template-content"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full min-h-[400px] p-3 rounded-lg border border-border bg-card text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-primary"
                spellCheck="false"
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
