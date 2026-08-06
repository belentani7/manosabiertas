'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Search, Phone, ExternalLink, Clock, Building2,
  Navigation, ChevronRight, X, Globe, FileText,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

// ─── OFFICE DATA ────────────────────────────────────────────────
interface OfficeInfo {
  id: string;
  name: string;
  address: string;
  phone?: string;
  type: 'extranjeria' | 'cite' | 'ong' | 'policia';
  appointmentUrl?: string;
}

interface CityData {
  city: string;
  community: string;
  x: number; // SVG x position (percentage)
  y: number; // SVG y position (percentage)
  offices: OfficeInfo[];
  major?: boolean;
}

const CITIES: CityData[] = [
  {
    city: 'Madrid', community: 'Comunidad de Madrid', x: 45, y: 52, major: true,
    offices: [
      { id: 'mad1', name: 'Oficina de Extranjería de Madrid', address: 'C/ García de Paredes, 65', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'mad2', name: 'CITE Madrid (CCOO)', address: 'C/ Lope de Vega, 38', phone: '913 10 51 63', type: 'cite' },
      { id: 'mad3', name: 'Cruz Roja - Centro de Migraciones', address: 'C/ Juan Montalvo, 3', phone: '913 35 44 44', type: 'ong' },
      { id: 'mad4', name: 'Brigada Provincial de Extranjería', address: 'C/ Julián González Segador, 8', phone: '091', type: 'policia' },
    ],
  },
  {
    city: 'Barcelona', community: 'Cataluña', x: 72, y: 30, major: true,
    offices: [
      { id: 'bcn1', name: 'Oficina de Extranjería de Barcelona', address: 'Pg. Sant Joan, 189', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'bcn2', name: 'SAIER (Servei d\'Atenció)', address: 'Av. Paral·lel, 202', phone: '932 56 09 50', type: 'ong' },
      { id: 'bcn3', name: 'CITE Barcelona (CCOO)', address: 'Via Laietana, 16', phone: '934 81 27 18', type: 'cite' },
    ],
  },
  {
    city: 'Valencia', community: 'Comunitat Valenciana', x: 60, y: 55, major: true,
    offices: [
      { id: 'val1', name: 'Oficina de Extranjería de Valencia', address: 'Av. del Puerto, 4', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'val2', name: 'CITE Valencia', address: 'Pl. Nápoles y Sicilia, 5', phone: '963 88 21 13', type: 'cite' },
      { id: 'val3', name: 'Valencia Acoge', address: 'C/ Borrull, 35', phone: '963 91 63 36', type: 'ong' },
    ],
  },
  {
    city: 'Sevilla', community: 'Andalucía', x: 28, y: 75, major: true,
    offices: [
      { id: 'sev1', name: 'Oficina de Extranjería de Sevilla', address: 'Av. de la Buhaira, 12', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'sev2', name: 'CITE Sevilla', address: 'C/ Trajano, 1', phone: '954 50 70 86', type: 'cite' },
      { id: 'sev3', name: 'CEAR Sevilla', address: 'C/ Rioja, 10', phone: '954 37 23 17', type: 'ong' },
    ],
  },
  {
    city: 'Bilbao', community: 'País Vasco', x: 40, y: 18, major: true,
    offices: [
      { id: 'bil1', name: 'Oficina de Extranjería de Bizkaia', address: 'C/ Gordóniz, 44', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'bil2', name: 'SOS Racismo Bizkaia', address: 'C/ Pelota, 5', phone: '944 16 09 37', type: 'ong' },
    ],
  },
  {
    city: 'Málaga', community: 'Andalucía', x: 36, y: 82, major: true,
    offices: [
      { id: 'mal1', name: 'Oficina de Extranjería de Málaga', address: 'C/ Compositor Lehmberg Ruiz, 9', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'mal2', name: 'Málaga Acoge', address: 'C/ San Jacinto, 1', phone: '952 60 68 10', type: 'ong' },
    ],
  },
  {
    city: 'Zaragoza', community: 'Aragón', x: 55, y: 30, major: false,
    offices: [
      { id: 'zar1', name: 'Oficina de Extranjería de Zaragoza', address: 'Pg. María Agustín, 36', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'zar2', name: 'SOS Racismo Aragón', address: 'C/ San Vicente de Paúl, 26', phone: '976 44 55 08', type: 'ong' },
    ],
  },
  {
    city: 'Las Palmas', community: 'Canarias', x: 5, y: 92, major: false,
    offices: [
      { id: 'lpa1', name: 'Oficina de Extranjería de Las Palmas', address: 'C/ León y Castillo, 270', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'lpa2', name: 'Canarias Acoge', address: 'C/ Eusebio Navarro, 8', phone: '928 36 14 39', type: 'ong' },
    ],
  },
  {
    city: 'Murcia', community: 'Región de Murcia', x: 55, y: 70,
    offices: [
      { id: 'mur1', name: 'Oficina de Extranjería de Murcia', address: 'C/ Enrique Villar, 11', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'mur2', name: 'Murcia Acoge', address: 'C/ Amberes, 5', phone: '968 28 06 10', type: 'ong' },
    ],
  },
  {
    city: 'Palma de Mallorca', community: 'Islas Baleares', x: 76, y: 55,
    offices: [
      { id: 'pal1', name: 'Oficina de Extranjería de Baleares', address: 'C/ Felicià Fuster, 7', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'Alicante', community: 'Comunitat Valenciana', x: 60, y: 65,
    offices: [
      { id: 'ali1', name: 'Oficina de Extranjería de Alicante', address: 'C/ Ebanistería, 4', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'A Coruña', community: 'Galicia', x: 14, y: 20,
    offices: [
      { id: 'cor1', name: 'Oficina de Extranjería de A Coruña', address: 'Rúa Vicente Ferrer, 2', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'Valladolid', community: 'Castilla y León', x: 35, y: 34,
    offices: [
      { id: 'vll1', name: 'Oficina de Extranjería de Valladolid', address: 'C/ Santiago, 17', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'Santa Cruz de Tenerife', community: 'Canarias', x: 2, y: 97,
    offices: [
      { id: 'tfe1', name: 'Oficina de Extranjería de Tenerife', address: 'Av. José Manuel Guimerá, 8', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'Almería', community: 'Andalucía', x: 47, y: 82,
    offices: [
      { id: 'alm1', name: 'Oficina de Extranjería de Almería', address: 'C/ Canónigo Molina Alonso, 4', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
      { id: 'alm2', name: 'ACCEM Almería', address: 'C/ Restoy, 2', phone: '950 27 31 44', type: 'ong' },
    ],
  },
  {
    city: 'Girona', community: 'Cataluña', x: 78, y: 22,
    offices: [
      { id: 'gir1', name: 'Oficina de Extranjería de Girona', address: 'Av. Josep Tarradellas i Joan, 67', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'Huelva', community: 'Andalucía', x: 20, y: 78,
    offices: [
      { id: 'hue1', name: 'Oficina de Extranjería de Huelva', address: 'C/ Sanlúcar de Guadiana, 1', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
  {
    city: 'Pamplona', community: 'Navarra', x: 50, y: 18,
    offices: [
      { id: 'pam1', name: 'Oficina de Extranjería de Navarra', address: 'C/ Juan Pablo II, 8', phone: '060', type: 'extranjeria', appointmentUrl: 'https://sede.administracionespublicas.gob.es/' },
    ],
  },
];

const TYPE_CONFIG: Record<string, { label: string; color: string; emoji: string }> = {
  extranjeria: { label: 'Oficina de Extranjería', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300', emoji: '🏛️' },
  cite: { label: 'CITE (Sindicatos)', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', emoji: '🤝' },
  ong: { label: 'ONG / Asociación', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', emoji: '❤️' },
  policia: { label: 'Policía / Brigada', color: 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300', emoji: '👮' },
};

export function OfficeMap() {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = useMemo(() => {
    if (!searchQuery) return CITIES;
    const q = searchQuery.toLowerCase();
    return CITIES.filter(
      (c) =>
        c.city.toLowerCase().includes(q) ||
        c.community.toLowerCase().includes(q) ||
        c.offices.some((o) => o.name.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar por ciudad, comunidad u oficina..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Cita previa banner */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-800/40 bg-amber-50 dark:bg-amber-900/20 p-3 flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-800/40 flex items-center justify-center flex-shrink-0">
          <FileText className="h-4 w-4 text-amber-700 dark:text-amber-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-amber-900 dark:text-amber-200">Cita previa obligatoria</h3>
          <p className="text-xs text-amber-700/80 dark:text-amber-300/80 mt-0.5">
            Para casi todos los trámites de extranjería necesitas cita previa online.
          </p>
          <a
            href="https://sede.administracionespublicas.gob.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-300 hover:underline mt-1 font-medium"
          >
            Pedir cita previa <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {/* SVG Map */}
        <div className="lg:col-span-3">
          <Card className="overflow-hidden">
            <CardContent className="p-4">
              <div className="relative bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-xl p-4 aspect-[4/3]">
                {/* Spain SVG outline (simplified) */}
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Spain mainland outline */}
                  <path
                    d="M15,15 L25,10 L35,12 L45,8 L55,10 L65,12 L75,15 L82,20 L78,30 L80,40 L75,50 L72,55 L68,60 L65,65 L60,68 L55,72 L50,78 L45,82 L38,85 L30,82 L25,78 L20,72 L15,65 L12,58 L10,50 L12,40 L14,30 L12,22 Z"
                    fill="currentColor"
                    className="text-primary/30 dark:text-primary/20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  {/* Balearic Islands */}
                  <ellipse cx="78" cy="55" rx="4" ry="2.5" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="0.3" />
                  {/* Canary Islands */}
                  <rect x="2" y="90" width="10" height="5" rx="2" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="0.3" />
                </svg>

                {/* City dots */}
                {filteredCities.map((city) => (
                  <motion.button
                    key={city.city}
                    className={cn(
                      'absolute transform -translate-x-1/2 -translate-y-1/2 group',
                    )}
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    onClick={() => setSelectedCity(city)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Pulse ring for major cities */}
                    {city.major && (
                      <span className="absolute inset-0 -m-2 rounded-full bg-primary/20 animate-ping" />
                    )}
                    <span className={cn(
                      'relative block rounded-full shadow-md border-2 border-white dark:border-gray-800',
                      city.major ? 'w-4 h-4 bg-primary' : 'w-3 h-3 bg-primary/70',
                      selectedCity?.city === city.city && 'ring-4 ring-primary/30'
                    )} />
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-card border border-border shadow-lg text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {city.city}
                    </span>
                  </motion.button>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">
                Haz clic en un punto del mapa para ver las oficinas de esa ciudad
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Office list / detail panel */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedCity ? (
              <motion.div
                key={selectedCity.city}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{selectedCity.city}</h3>
                        <span className="text-xs text-muted-foreground">{selectedCity.community}</span>
                      </div>
                      <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7"
              onClick={() => setSelectedCity(null)}
              aria-label="Cerrar detalles de ciudad"
            >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <ScrollArea className="max-h-[400px]">
                      <div className="space-y-3">
                        {selectedCity.offices.map((office) => {
                          const typeInfo = TYPE_CONFIG[office.type];
                          return (
                            <div key={office.id} className="rounded-lg border border-border bg-muted/30 p-3">
                              <div className="flex items-start gap-2 mb-2">
                                <span className="text-lg">{typeInfo.emoji}</span>
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm font-medium">{office.name}</span>
                                  <Badge className={cn('ml-1.5 text-[10px] px-1.5', typeInfo.color)}>
                                    {typeInfo.label}
                                  </Badge>
                                </div>
                              </div>
                              <div className="space-y-1 ml-7">
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3 flex-shrink-0" />
                                  <span>{office.address}</span>
                                </div>
                                {office.phone && (
                                  <div className="flex items-center gap-1.5 text-xs">
                                    <Phone className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                                    <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                                      {office.phone}
                                    </a>
                                  </div>
                                )}
                                {office.appointmentUrl && (
                                  <a
                                    href={office.appointmentUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                                  >
                                    <Globe className="h-3 w-3" />
                                    Pedir cita previa
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Ciudades con oficinas ({filteredCities.length})
                    </h3>
                    <ScrollArea className="max-h-[420px]">
                      <div className="space-y-1.5">
                        {filteredCities.map((city) => (
                          <button
                            key={city.city}
                            onClick={() => setSelectedCity(city)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent/50 text-left transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className={cn(
                                'w-2.5 h-2.5 rounded-full',
                                city.major ? 'bg-primary' : 'bg-primary/50'
                              )} />
                              <div>
                                <span className="text-sm font-medium">{city.city}</span>
                                <span className="text-[10px] text-muted-foreground ml-1.5">
                                  {city.offices.length} oficina{city.offices.length !== 1 ? 's' : ''}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center">
        {Object.entries(TYPE_CONFIG).map(([key, config]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span className="text-sm">{config.emoji}</span>
            <span className="text-xs text-muted-foreground">{config.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
