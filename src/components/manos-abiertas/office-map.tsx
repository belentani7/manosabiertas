'use client';

import { useId, useMemo, useState } from 'react';
import {
  AlertCircle,
  Building2,
  ExternalLink,
  LocateFixed,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  OFFICE_LOCATIONS,
  haversineDistanceKm,
  type GeoPoint,
  type OfficeLocation,
} from '@/data/office-locations';

type LocationStatus = 'idle' | 'requesting' | 'success' | 'error' | 'unsupported';

interface LocatedCity {
  location: OfficeLocation;
  distanceKm: number | null;
}

function normalizeSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('es');
}

function mapPosition(location: OfficeLocation): { left: string; top: string } {
  if (location.cityCenter.latitude < 30) {
    return location.id === 'santa-cruz-tenerife'
      ? { left: '7%', top: '89%' }
      : { left: '15%', top: '92%' };
  }

  const longitude = location.cityCenter.longitude;
  const latitude = location.cityCenter.latitude;
  const left = 9 + ((longitude + 9.5) / 13) * 82;
  const top = 8 + ((44.3 - latitude) / 8.3) * 80;
  return {
    left: `${Math.min(92, Math.max(7, left))}%`,
    top: `${Math.min(90, Math.max(7, top))}%`,
  };
}

function formatDistance(distanceKm: number | null): string | null {
  if (distanceKm === null) return null;
  if (distanceKm < 10) return `${distanceKm.toFixed(1)} km`;
  return `${Math.round(distanceKm)} km`;
}

function locationMessage(status: LocationStatus): string {
  if (status === 'requesting') return 'Solicitando tu ubicación al navegador…';
  if (status === 'success') return 'Ubicación disponible. Ciudades ordenadas por distancia aproximada.';
  if (status === 'unsupported') return 'Este navegador no ofrece geolocalización.';
  if (status === 'error') return 'No fue posible obtener tu ubicación. Puedes usar la búsqueda y la lista.';
  return 'Tu ubicación no se solicita hasta que pulses el botón.';
}

export function OfficeMap() {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>('madrid');
  const [userPosition, setUserPosition] = useState<GeoPoint | null>(null);
  const [locationStatus, setLocationStatus] = useState<LocationStatus>('idle');

  const cities = useMemo<LocatedCity[]>(() => {
    const normalizedQuery = normalizeSearch(query.trim());
    const matches = OFFICE_LOCATIONS.filter((location) => {
      if (!normalizedQuery) return true;
      return normalizeSearch(`${location.city} ${location.autonomousCommunity}`).includes(normalizedQuery);
    }).map((location) => ({
      location,
      distanceKm: userPosition
        ? haversineDistanceKm(userPosition, location.cityCenter)
        : null,
    }));

    if (userPosition) {
      matches.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
    }
    return matches;
  }, [query, userPosition]);

  const selectedLocation = OFFICE_LOCATIONS.find(({ id }) => id === selectedId) ?? OFFICE_LOCATIONS[0];
  const selectedDistance = userPosition
    ? haversineDistanceKm(userPosition, selectedLocation.cityCenter)
    : null;

  function requestUserLocation() {
    if (!('geolocation' in navigator)) {
      setLocationStatus('unsupported');
      return;
    }

    setLocationStatus('requesting');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserPosition({ latitude: coords.latitude, longitude: coords.longitude });
        setLocationStatus('success');
      },
      () => {
        setUserPosition(null);
        setLocationStatus('error');
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 300_000 },
    );
  }

  return (
    <section aria-labelledby="office-locator-title" className="space-y-5">
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-2 gap-1.5 bg-background/80">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Consulta local, sin mapas externos
            </Badge>
            <h2 id="office-locator-title" className="text-xl font-bold sm:text-2xl">
              Localizador de oficinas públicas
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Compara ciudades mediante coordenadas aproximadas del centro urbano. Confirma siempre la
              oficina, dirección, teléfono y cita en el directorio oficial antes de desplazarte.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            className="min-h-11 shrink-0 gap-2 motion-reduce:transition-none"
            onClick={requestUserLocation}
            disabled={locationStatus === 'requesting'}
            aria-describedby="location-privacy location-status"
          >
            <LocateFixed className="h-4 w-4" aria-hidden="true" />
            {locationStatus === 'requesting' ? 'Solicitando…' : 'Ordenar por mi ubicación'}
          </Button>
        </div>
        <p id="location-privacy" className="mt-3 text-xs text-muted-foreground">
          Opcional: la ubicación se usa solo en este navegador para calcular distancias y no se envía ni se guarda.
        </p>
        <p
          id="location-status"
          className={cn(
            'mt-1 flex items-center gap-1.5 text-xs',
            locationStatus === 'error' || locationStatus === 'unsupported'
              ? 'text-destructive'
              : 'text-muted-foreground',
          )}
          aria-live="polite"
        >
          {(locationStatus === 'error' || locationStatus === 'unsupported') && (
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {locationMessage(locationStatus)}
        </p>
      </div>

      <div className="relative">
        <label htmlFor={searchId} className="sr-only">
          Buscar ciudad o comunidad autónoma
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar ciudad o comunidad autónoma…"
          className="min-h-11 w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
        <Card className="overflow-hidden border-border/70">
          <CardContent className="p-3 sm:p-4">
            <div
              className="relative aspect-[4/3] min-h-[20rem] overflow-hidden rounded-xl border border-border/60 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.16),transparent_28%),linear-gradient(145deg,hsl(var(--muted)/0.85),hsl(var(--background)))]"
              role="group"
              aria-label="Plano esquemático de España con ciudades seleccionables. La lista posterior ofrece las mismas funciones."
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:2rem_2rem]"
              />
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full text-primary/15"
                aria-hidden="true"
              >
                <path
                  d="M14 17 27 10l15 3 12-4 19 6 10 9-4 13 2 10-9 17-12 9-10 12-18-3-12-11-8-16 3-19-3-11Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <ellipse cx="87" cy="57" rx="5" ry="3" fill="currentColor" />
                <rect x="3" y="86" width="17" height="9" rx="4" fill="currentColor" />
              </svg>

              {OFFICE_LOCATIONS.map((location) => {
                const position = mapPosition(location);
                const selected = selectedId === location.id;
                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setSelectedId(location.id)}
                    className="group absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
                    style={position}
                    aria-label={`Seleccionar ${location.city}`}
                    aria-pressed={selected}
                  >
                    <span
                      className={cn(
                        'block rounded-full border-2 border-background shadow-md',
                        selected ? 'h-5 w-5 bg-primary ring-4 ring-primary/25' : 'h-3.5 w-3.5 bg-primary/75',
                      )}
                      aria-hidden="true"
                    />
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs font-medium text-popover-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                      {location.city}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Posiciones aproximadas de ciudad, no ubicaciones exactas de oficinas.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/70" aria-labelledby="selected-city-title">
          <CardContent className="space-y-4 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 id="selected-city-title" className="text-lg font-bold">
                  {selectedLocation.city}
                </h3>
                <p className="text-sm text-muted-foreground">{selectedLocation.autonomousCommunity}</p>
                {selectedDistance !== null && (
                  <p className="mt-1 text-sm font-medium text-primary">
                    A {formatDistance(selectedDistance)} aproximadamente
                  </p>
                )}
              </div>
            </div>

            <dl className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                <dt className="text-xs font-medium text-muted-foreground">Coordenadas</dt>
                <dd className="mt-1 font-mono text-xs">
                  {selectedLocation.cityCenter.latitude.toFixed(4)}, {selectedLocation.cityCenter.longitude.toFixed(4)}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground">Centro urbano aproximado</dd>
              </div>
              <div className="rounded-lg border border-amber-300/50 bg-amber-50/70 p-3 dark:bg-amber-950/20">
                <dt className="text-xs font-medium text-amber-800 dark:text-amber-300">Contacto</dt>
                <dd className="mt-1 text-xs text-amber-900 dark:text-amber-200">Dirección: pendiente de evidencia</dd>
                <dd className="mt-1 text-xs text-amber-900 dark:text-amber-200">Teléfono: pendiente de evidencia</dd>
              </div>
            </dl>

            <div className="rounded-xl border border-border/70 p-3">
              <div className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">Fuente oficial del registro</p>
                  <p className="text-xs text-muted-foreground">
                    Revisada el {selectedLocation.officialSource.reviewedAt}. El propio directorio recomienda
                    confirmar los datos antes de acudir.
                  </p>
                </div>
              </div>
              <a
                href={selectedLocation.officialSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
                aria-label={`Abrir fuente oficial para consultar oficinas en ${selectedLocation.city}`}
              >
                {selectedLocation.officialSource.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div aria-labelledby="city-list-title">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 id="city-list-title" className="font-semibold">
              Lista accesible de ciudades
            </h3>
            <p className="text-xs text-muted-foreground">Todas las funciones están disponibles sin usar el plano.</p>
          </div>
          <span className="text-xs text-muted-foreground" aria-live="polite">
            {cities.length} resultado{cities.length === 1 ? '' : 's'}
          </span>
        </div>

        {cities.length > 0 ? (
          <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {cities.map(({ location, distanceKm }) => (
              <li key={location.id}>
                <article
                  className={cn(
                    'h-full rounded-xl border bg-card p-3',
                    selectedId === location.id ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border/70',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedId(location.id)}
                    className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-2 text-left outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
                    aria-pressed={selectedId === location.id}
                    aria-label={`Mostrar información de ${location.city}`}
                  >
                    <span>
                      <span className="block text-sm font-semibold">{location.city}</span>
                      <span className="block text-xs text-muted-foreground">{location.autonomousCommunity}</span>
                    </span>
                    {distanceKm !== null ? (
                      <span className="shrink-0 text-xs font-semibold text-primary">
                        {formatDistance(distanceKm)}
                      </span>
                    ) : (
                      <Navigation className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    )}
                  </button>
                  <div className="mt-2 border-t border-border/60 pt-2 text-xs text-muted-foreground">
                    <p>Dirección y teléfono: pendientes de evidencia.</p>
                    <a
                      href={location.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
                      aria-label={`Consultar fuente oficial para ${location.city}; revisada el ${location.officialSource.reviewedAt}`}
                    >
                      Fuente oficial · {location.officialSource.reviewedAt}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <div className="rounded-xl border border-dashed p-8 text-center" role="status">
            <MapPin className="mx-auto mb-2 h-7 w-7 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">No hay ciudades que coincidan con la búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
}
