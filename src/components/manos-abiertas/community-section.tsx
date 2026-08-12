'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Heart, MessageSquare, Globe, MapPin, ChevronDown, ChevronRight,
  ExternalLink, Star, Clock, MessagesSquare, Languages, Building2,
  Sparkles, Award, TrendingUp, Search,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';

// ─── SUCCESS STORIES ────────────────────────────────────────────
interface SuccessStory {
  id: string;
  name: string;
  country: string;
  flag: string;
  yearsInSpain: number;
  profession: string;
  quote: string;
  gradient: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  { id: '1', name: 'Fatima Benali', country: 'Marruecos', flag: '🇲🇦', yearsInSpain: 8, profession: 'Enfermera', quote: 'Llegué sin hablar español. Hoy trabajo en el Hospital La Paz y ayudo a otras mujeres marroquíes a integrarse.', gradient: 'from-emerald-400 to-teal-500' },
  { id: '2', name: 'Andrei Popescu', country: 'Rumanía', flag: '🇷🇴', yearsInSpain: 12, profession: 'Electricista autónomo', quote: 'Con el arraigo laboral conseguí regularizarme. Ahora tengo mi propia empresa y empleo a 4 personas.', gradient: 'from-blue-400 to-indigo-500' },
  { id: '3', name: 'María Fernanda López', country: 'Colombia', flag: '🇨🇴', yearsInSpain: 5, profession: 'Diseñadora gráfica', quote: 'Aprendí Figma y ChatGPT con cursos gratis online. Hoy trabajo remoto para empresas de toda Europa.', gradient: 'from-amber-400 to-orange-500' },
  { id: '4', name: 'Luis Guamán', country: 'Ecuador', flag: '🇪🇨', yearsInSpain: 10, profession: 'Cocinero / Chef', quote: 'Empecé fregando platos. Gracias a la FP de cocina, ahora soy jefe de cocina en un restaurante con estrella.', gradient: 'from-red-400 to-rose-500' },
  { id: '5', name: 'Wei Chen', country: 'China', flag: '🇨🇳', yearsInSpain: 7, profession: 'Comerciante', quote: 'Mi tienda empezó como un bazar pequeño. Aprendí contabilidad y marketing digital, y ahora vendo online.', gradient: 'from-yellow-400 to-amber-500' },
  { id: '6', name: 'Blessing Okonkwo', country: 'Nigeria', flag: '🇳🇬', yearsInSpain: 6, profession: 'Mediadora intercultural', quote: 'Pasé por el CIE y por mucho sufrimiento. Hoy ayudo a otros africanos como mediadora en Cáritas.', gradient: 'from-green-400 to-emerald-500' },
  { id: '7', name: 'Hamza Malik', country: 'Pakistán', flag: '🇵🇰', yearsInSpain: 9, profession: 'Programador web', quote: 'Aprendí programación con recursos gratuitos. Ahora trabajo en una startup de Barcelona como fullstack developer.', gradient: 'from-violet-400 to-purple-500' },
  { id: '8', name: 'Carolina Pérez', country: 'Venezuela', flag: '🇻🇪', yearsInSpain: 4, profession: 'Periodista', quote: 'Con la protección internacional pude homologar mi título. Trabajo en un medio digital en Madrid.', gradient: 'from-cyan-400 to-blue-500' },
  { id: '9', name: 'Rosa Mamani', country: 'Bolivia', flag: '🇧🇴', yearsInSpain: 11, profession: 'Auxiliar de geriatría', quote: 'Cuidé ancianos desde el primer día. Saqué el certificado de profesionalidad y ahora tengo contrato indefinido.', gradient: 'from-pink-400 to-rose-500' },
  { id: '10', name: 'Olena Kovalenko', country: 'Ucrania', flag: '🇺🇦', yearsInSpain: 2, profession: 'Profesora de inglés', quote: 'Llegué por la guerra. España me acogió con protección temporal. Doy clases de inglés y ucraniano.', gradient: 'from-sky-400 to-blue-500' },
  { id: '11', name: 'Moussa Diallo', country: 'Senegal', flag: '🇸🇳', yearsInSpain: 14, profession: 'Empresario textil', quote: 'De vender en la calle a tener una marca de ropa. El arraigo social fue mi primera oportunidad legal.', gradient: 'from-orange-400 to-red-500' },
  { id: '12', name: 'Jorge Huamán', country: 'Perú', flag: '🇵🇪', yearsInSpain: 6, profession: 'Ingeniero civil', quote: 'Homologar mi título costó 2 años. Pero valió la pena: ahora dirijo obras en una constructora en Sevilla.', gradient: 'from-teal-400 to-cyan-500' },
];

// ─── FORUM TOPICS ───────────────────────────────────────────────
interface ForumTopic {
  id: string;
  title: string;
  category: 'legal' | 'work' | 'cities' | 'tips';
  replies: number;
  lastActivity: string;
  hot?: boolean;
  source?: 'editorial' | 'shared' | 'local';
}

const FORUM_TOPICS: ForumTopic[] = [
  { id: 'f1', title: '¿Cuánto tarda el arraigo social en 2025?', category: 'legal', replies: 87, lastActivity: 'Hace 2h', hot: true },
  { id: 'f2', title: 'Experiencia homologando título universitario colombiano', category: 'legal', replies: 45, lastActivity: 'Hace 3h' },
  { id: 'f3', title: 'Mejores webs para buscar trabajo en hostelería', category: 'work', replies: 63, lastActivity: 'Hace 1h', hot: true },
  { id: 'f4', title: 'Guía para vivir en Valencia con poco presupuesto', category: 'cities', replies: 38, lastActivity: 'Hace 5h' },
  { id: 'f5', title: 'Cómo abrí una cuenta bancaria sin NIE', category: 'tips', replies: 52, lastActivity: 'Hace 30min', hot: true },
  { id: 'f6', title: 'Reagrupación familiar: mi experiencia paso a paso', category: 'legal', replies: 71, lastActivity: 'Hace 4h' },
  { id: 'f7', title: '¿Es mejor autónomo o contrato por cuenta ajena?', category: 'work', replies: 29, lastActivity: 'Hace 6h' },
  { id: 'f8', title: 'Barrios asequibles para vivir en Barcelona', category: 'cities', replies: 44, lastActivity: 'Hace 2h' },
  { id: 'f9', title: 'Tips para la entrevista de nacionalidad española', category: 'tips', replies: 96, lastActivity: 'Hace 1h', hot: true },
  { id: 'f10', title: 'Trabajar en la vendimia: temporadas y contratos', category: 'work', replies: 31, lastActivity: 'Hace 8h' },
  { id: 'f11', title: 'Empadronamiento: ¿qué pasa si el casero no quiere?', category: 'legal', replies: 58, lastActivity: 'Hace 3h' },
  { id: 'f12', title: 'Vivir en Canarias vs Península: pros y contras', category: 'cities', replies: 22, lastActivity: 'Hace 12h' },
  { id: 'f13', title: 'Cómo usar ChatGPT para preparar el examen CCSE', category: 'tips', replies: 41, lastActivity: 'Hace 5h' },
  { id: 'f14', title: 'Derechos laborales: qué hacer si no te pagan', category: 'work', replies: 67, lastActivity: 'Hace 2h' },
  { id: 'f15', title: 'Mejor ciudad para familias inmigrantes en 2025', category: 'cities', replies: 55, lastActivity: 'Hace 7h' },
];

const CATEGORY_CONFIG: Record<string, { label: string; color: string; icon: typeof MessageSquare }> = {
  legal: { label: 'Legal', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300', icon: Building2 },
  work: { label: 'Trabajo', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', icon: TrendingUp },
  cities: { label: 'Ciudades', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', icon: MapPin },
  tips: { label: 'Consejos', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300', icon: Sparkles },
};

// ─── LANGUAGE EXCHANGE ──────────────────────────────────────────
interface LanguageExchange {
  id: string;
  name: string;
  flag: string;
  speaks: string[];
  wants: string[];
  city: string;
  availability: string;
}

const LANGUAGE_EXCHANGES: LanguageExchange[] = [
  { id: 'l1', name: 'Ahmed', flag: '🇲🇦', speaks: ['Árabe', 'Francés'], wants: ['Español'], city: 'Madrid', availability: 'Tardes' },
  { id: 'l2', name: 'Yuki', flag: '🇯🇵', speaks: ['Japonés', 'Inglés'], wants: ['Español', 'Catalán'], city: 'Barcelona', availability: 'Fines de semana' },
  { id: 'l3', name: 'Priya', flag: '🇮🇳', speaks: ['Hindi', 'Inglés'], wants: ['Español'], city: 'Valencia', availability: 'Mañanas' },
  { id: 'l4', name: 'Dimitri', flag: '🇷🇺', speaks: ['Ruso', 'Ucraniano'], wants: ['Español', 'Inglés'], city: 'Málaga', availability: 'Flexible' },
  { id: 'l5', name: 'Amina', flag: '🇸🇳', speaks: ['Wolof', 'Francés'], wants: ['Español'], city: 'Sevilla', availability: 'Tardes' },
  { id: 'l6', name: 'Carlos', flag: '🇪🇸', speaks: ['Español'], wants: ['Chino', 'Árabe'], city: 'Madrid', availability: 'Noches' },
  { id: 'l7', name: 'Mei', flag: '🇨🇳', speaks: ['Chino mandarín'], wants: ['Español'], city: 'Madrid', availability: 'Fines de semana' },
  { id: 'l8', name: 'Ibrahim', flag: '🇵🇰', speaks: ['Urdu', 'Inglés', 'Punjabi'], wants: ['Español'], city: 'Barcelona', availability: 'Mañanas' },
  { id: 'l9', name: 'Daniela', flag: '🇧🇷', speaks: ['Portugués'], wants: ['Español', 'Catalán'], city: 'Barcelona', availability: 'Tardes' },
  { id: 'l10', name: 'Kwame', flag: '🇬🇭', speaks: ['Inglés', 'Twi'], wants: ['Español'], city: 'Bilbao', availability: 'Flexible' },
  { id: 'l11', name: 'Olena', flag: '🇺🇦', speaks: ['Ucraniano', 'Ruso'], wants: ['Español', 'Inglés'], city: 'Alicante', availability: 'Mañanas' },
  { id: 'l12', name: 'Juan', flag: '🇪🇸', speaks: ['Español', 'Inglés'], wants: ['Árabe', 'Rumano'], city: 'Zaragoza', availability: 'Noches' },
];

// ─── LOCAL GROUPS ───────────────────────────────────────────────
interface CommunityGroup {
  name: string;
  type: 'whatsapp' | 'telegram' | 'association' | 'center';
  members?: number;
  description: string;
}

interface CityGroups {
  city: string;
  emoji: string;
  groups: CommunityGroup[];
}

const LOCAL_GROUPS: CityGroups[] = [
  {
    city: 'Madrid', emoji: '🏙️',
    groups: [
      { name: 'Inmigrantes Madrid - Ayuda Legal', type: 'whatsapp', members: 450, description: 'Consultas legales, trámites y experiencias' },
      { name: 'Trabajo en Madrid', type: 'telegram', members: 820, description: 'Ofertas de empleo y networking' },
      { name: 'ACCEM Madrid', type: 'association', description: 'Atención integral a refugiados y migrantes' },
      { name: 'Centro Hispano-Americano', type: 'center', description: 'Clases de español, asesoría jurídica' },
    ],
  },
  {
    city: 'Barcelona', emoji: '🌊',
    groups: [
      { name: 'Nuevos en Barcelona', type: 'whatsapp', members: 380, description: 'Guía para recién llegados' },
      { name: 'SAIER - Servei d\'Atenció', type: 'association', description: 'Atención a inmigrantes del Ayuntamiento' },
      { name: 'Trabajo BCN Inmigrantes', type: 'telegram', members: 650, description: 'Bolsa de trabajo y formación' },
    ],
  },
  {
    city: 'Valencia', emoji: '🍊',
    groups: [
      { name: 'Comunidad Latina Valencia', type: 'whatsapp', members: 290, description: 'Red de apoyo para latinos en Valencia' },
      { name: 'Valencia Acoge', type: 'association', description: 'ONG de atención a personas migrantes' },
      { name: 'Empleo Valencia Migrantes', type: 'telegram', members: 410, description: 'Ofertas laborales y formación' },
    ],
  },
  {
    city: 'Sevilla', emoji: '💃',
    groups: [
      { name: 'Sevilla Intercultural', type: 'whatsapp', members: 210, description: 'Eventos culturales y apoyo mutuo' },
      { name: 'CEAR Sevilla', type: 'association', description: 'Comisión de Ayuda al Refugiado' },
    ],
  },
  {
    city: 'Málaga', emoji: '☀️',
    groups: [
      { name: 'Inmigrantes Costa del Sol', type: 'whatsapp', members: 340, description: 'Vivienda, trabajo y trámites en Málaga' },
      { name: 'Málaga Acoge', type: 'association', description: 'Acogida e integración social' },
    ],
  },
  {
    city: 'Bilbao', emoji: '🌧️',
    groups: [
      { name: 'Comunidad Migrante Bilbao', type: 'whatsapp', members: 180, description: 'Apoyo e información en Euskadi' },
      { name: 'SOS Racismo Bizkaia', type: 'association', description: 'Lucha contra la discriminación' },
    ],
  },
  {
    city: 'Zaragoza', emoji: '🏛️',
    groups: [
      { name: 'Inmigrantes Zaragoza', type: 'telegram', members: 220, description: 'Red de apoyo en Aragón' },
      { name: 'Casa de las Culturas', type: 'center', description: 'Actividades interculturales del Ayuntamiento' },
    ],
  },
  {
    city: 'Alicante', emoji: '🌴',
    groups: [
      { name: 'Alicante Multicultural', type: 'whatsapp', members: 260, description: 'Comunidad internacional en Alicante' },
    ],
  },
  {
    city: 'Las Palmas', emoji: '🏝️',
    groups: [
      { name: 'Canarias Acoge', type: 'association', description: 'Acogida e integración en Canarias' },
      { name: 'Migrantes Gran Canaria', type: 'whatsapp', members: 190, description: 'Información y apoyo en las islas' },
    ],
  },
];

// ─── SUB-TABS ───────────────────────────────────────────────────
type CommunityTab = 'stories' | 'forum' | 'exchange' | 'groups';

const TABS: { id: CommunityTab; emoji: string; icon: typeof Users; title: string; desc: string }[] = [
  { id: 'stories', emoji: '⭐', icon: Award, title: 'Historias de éxito', desc: 'Personas que lo lograron' },
  { id: 'forum', emoji: '💬', icon: MessagesSquare, title: 'Foro comunitario', desc: 'Preguntas y respuestas' },
  { id: 'exchange', emoji: '🌍', icon: Languages, title: 'Intercambio de idiomas', desc: 'Aprende y enseña' },
  { id: 'groups', emoji: '📍', icon: Building2, title: 'Grupos locales', desc: 'Comunidades por ciudad' },
];

// ─── MAIN COMPONENT ────────────────────────────────────────────
export function CommunitySection() {
  const [activeTab, setActiveTab] = useState<CommunityTab>('stories');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <Badge variant="secondary" className="mb-2 gap-1.5">
          <Users className="h-3 w-3" />
          Comunidad
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Nuestra Comunidad</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Miles de inmigrantes en España compartiendo experiencias, consejos y apoyo mutuo
        </p>
      </div>

      {/* Tab Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-center',
                active
                  ? 'bg-primary/10 border-primary/30 shadow-sm'
                  : 'bg-card border-border hover:bg-accent/50'
              )}
            >
              <div className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center text-lg',
                active ? 'gradient-brand text-white' : 'bg-muted'
              )}>
                {active ? <Icon className="h-5 w-5" /> : <span>{tab.emoji}</span>}
              </div>
              <span className="text-xs font-medium">{tab.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'stories' && <StoriesWall />}
          {activeTab === 'forum' && <ForumSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
          {activeTab === 'exchange' && <LanguageExchangeBoard />}
          {activeTab === 'groups' && <LocalGroupsSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── STORIES WALL ───────────────────────────────────────────────
function StoriesWall() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Star className="h-5 w-5 text-amber-500" />
        <h2 className="text-xl font-bold">Historias reales de éxito</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Personas inmigrantes que encontraron su camino en España. Sus historias son inspiración para todos.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SUCCESS_STORIES.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card
              className={cn(
                'overflow-hidden cursor-pointer card-hover group',
                expanded === story.id && 'ring-2 ring-primary/30'
              )}
              onClick={() => setExpanded(expanded === story.id ? null : story.id)}
            >
              <CardContent className="p-4">
                {/* Avatar & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn(
                    'w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-md',
                    story.gradient
                  )}>
                    {story.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{story.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <span>{story.flag}</span>
                      <span>{story.country}</span>
                      <span>·</span>
                      <span>{story.yearsInSpain} años en España</span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <Badge variant="secondary" className="text-xs mb-2">
                  {story.profession}
                </Badge>

                {/* Quote */}
                <p className={cn(
                  'text-xs text-muted-foreground leading-relaxed transition-all',
                  expanded === story.id ? '' : 'line-clamp-3'
                )}>
                  &ldquo;{story.quote}&rdquo;
                </p>

                <div className="flex items-center gap-1 mt-2 text-primary text-xs">
                  <Heart className="h-3 w-3" />
                  <span>Inspirador</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── FORUM SECTION ──────────────────────────────────────────────
function ForumSection({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (q: string) => void }) {
  const [filter, setFilter] = useState<string>('all');
  const [sharedTopics, setSharedTopics] = useState<ForumTopic[]>([]);
  const [communityMode, setCommunityMode] = useState<'loading' | 'shared' | 'local'>('loading');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState<ForumTopic['category']>('tips');
  const [publishing, setPublishing] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let active = true;
    fetch('/api/community')
      .then(async (response) => {
        const data = await response.json();
        if (!active) return;
        if (response.ok && data.mode === 'shared') {
          setSharedTopics(data.posts.map((post: { id: string; title: string; category: ForumTopic['category']; replies: number; createdAt: string }) => ({
            id: post.id,
            title: post.title,
            category: post.category,
            replies: post.replies,
            lastActivity: formatTopicDate(post.createdAt),
            source: 'shared' as const,
          })));
          setCommunityMode('shared');
        } else {
          setCommunityMode('local');
        }
      })
      .catch(() => active && setCommunityMode('local'));

    return () => {
      active = false;
    };
  }, []);

  const allTopics = [...sharedTopics, ...FORUM_TOPICS];
  const filtered = allTopics.filter((t) => {
    const matchesFilter = filter === 'all' || t.category === filter;
    const matchesSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const publishTopic = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim().length < 5 || publishing) return;
    setPublishing(true);
    setNotice('');

    const localTopic: ForumTopic = {
      id: `local-${Date.now()}`,
      title: title.trim(),
      category,
      replies: 0,
      lastActivity: 'Ahora',
      source: 'local',
    };

    try {
      const response = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), category, author: author.trim() || 'Mi gente' }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No disponible');
      setSharedTopics((current) => [
        { ...localTopic, id: data.post.id, source: 'shared' },
        ...current,
      ]);
      setCommunityMode('shared');
      setNotice('Publicado para la comunidad.');
    } catch {
      const drafts = JSON.parse(localStorage.getItem('manos-abiertas-community-drafts') || '[]');
      localStorage.setItem('manos-abiertas-community-drafts', JSON.stringify([localTopic, ...drafts].slice(0, 20)));
      setSharedTopics((current) => [localTopic, ...current]);
      setCommunityMode('local');
      setNotice('Guardado en este dispositivo. Se publicará cuando Netlify esté conectado.');
    } finally {
      setTitle('');
      setAuthor('');
      setPublishing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <MessagesSquare className="h-5 w-5 text-blue-500" />
        <h2 className="text-xl font-bold">Foro comunitario</h2>
        <Badge variant="outline" className="ml-auto text-[10px]">
          {communityMode === 'shared' ? 'Nube activa' : communityMode === 'local' ? 'Modo local' : 'Conectando...'}
        </Badge>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <form onSubmit={publishTopic} className="space-y-2">
            <div className="text-sm font-semibold">Abrir un tema para mi gente</div>
            <div className="grid gap-2 sm:grid-cols-[1fr_150px]">
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                maxLength={140}
                placeholder="¿Qué quieres preguntar o compartir?"
                className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Título del tema"
              />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as ForumTopic['category'])}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm"
                aria-label="Categoría"
              >
                {Object.entries(CATEGORY_CONFIG).map(([id, config]) => <option key={id} value={id}>{config.label}</option>)}
              </select>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <input
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                maxLength={40}
                placeholder="Tu nombre o apodo (opcional)"
                className="flex-1 min-w-[220px] rounded-lg border border-border bg-card px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Nombre o apodo"
              />
              <Button type="submit" size="sm" disabled={publishing || title.trim().length < 5}>
                {publishing ? 'Publicando...' : 'Publicar tema'}
              </Button>
            </div>
            <p className="text-[11px] text-muted-foreground" role="status">
              {notice || 'No compartas documentos, teléfonos ni datos sensibles.'}
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <label htmlFor="community-topic-search" className="sr-only">Buscar tema en la comunidad</label>
          <input
            id="community-topic-search"
            type="text"
            placeholder="Buscar tema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {[{ id: 'all', label: 'Todos' }, ...Object.entries(CATEGORY_CONFIG).map(([id, c]) => ({ id, label: c.label }))].map((c) => (
            <Button
              key={c.id}
              size="sm"
              variant={filter === c.id ? 'default' : 'outline'}
              onClick={() => setFilter(c.id)}
              className="text-xs h-11"
            >
              {c.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-2">
        {filtered.map((topic, i) => {
          const cat = CATEGORY_CONFIG[topic.category];
          const CatIcon = cat.icon;
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Card className="card-hover">
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {topic.hot && (
                        <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                          🔥 Popular
                        </Badge>
                      )}
                      <Badge className={cn('text-[10px] px-1.5 py-0', cat.color)}>
                        <CatIcon className="h-2.5 w-2.5 mr-0.5" />
                        {cat.label}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-medium truncate">{topic.title}</h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MessageSquare className="h-3 w-3" />
                      <span>{topic.replies}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70 mt-0.5">
                      <Clock className="h-2.5 w-2.5" />
                      <span>{topic.lastActivity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground text-sm">
          No se encontraron temas con esos filtros
        </div>
      )}

      <div className="text-center pt-2">
        <p className="text-xs text-muted-foreground">
          💡 Los temas publicados en Netlify son compartidos; sin conexión quedan guardados localmente.
        </p>
      </div>
    </div>
  );
}

function formatTopicDate(value: string) {
  const age = Date.now() - new Date(value).getTime();
  const minutes = Math.max(1, Math.round(age / 60_000));
  if (minutes < 60) return `Hace ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `Hace ${hours}h`;
  return `Hace ${Math.round(hours / 24)}d`;
}

// ─── LANGUAGE EXCHANGE ──────────────────────────────────────────
function LanguageExchangeBoard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Languages className="h-5 w-5 text-emerald-500" />
        <h2 className="text-xl font-bold">Intercambio de idiomas</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Conecta con personas que quieren aprender tu idioma mientras tú aprendes el suyo. ¡Gratis y entre amigos!
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {LANGUAGE_EXCHANGES.map((ex, i) => (
          <motion.div
            key={ex.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
          >
            <Card className="card-hover">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{ex.flag}</span>
                  <div>
                    <div className="font-semibold text-sm">{ex.name}</div>
                    <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5" />
                      {ex.city} · {ex.availability}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Habla</span>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {ex.speaks.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-[10px]">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Quiere aprender</span>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {ex.wants.map((lang) => (
                        <Badge key={lang} className="text-[10px] bg-primary/10 text-primary border-primary/20">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full mt-3 text-xs h-11">
                  <Globe className="h-3 w-3 mr-1" />
                  Contactar
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 mt-4">
        <h3 className="font-semibold text-sm mb-1">🌍 ¿Quieres participar?</h3>
        <p className="text-xs text-muted-foreground">
          El intercambio de idiomas es la forma más divertida de aprender español y hacer amigos.
          Próximamente podrás registrarte y crear tu perfil de intercambio.
        </p>
      </div>
    </div>
  );
}

// ─── LOCAL GROUPS ───────────────────────────────────────────────
function LocalGroupsSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Building2 className="h-5 w-5 text-purple-500" />
        <h2 className="text-xl font-bold">Grupos y asociaciones locales</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Encuentra comunidades de apoyo en tu ciudad. Grupos de WhatsApp, Telegram, ONGs y centros culturales.
      </p>

      <div className="space-y-3">
        {LOCAL_GROUPS.map((cityGroup) => (
          <Collapsible key={cityGroup.city}>
            <CollapsibleTrigger asChild>
              <Card className="card-hover cursor-pointer">
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{cityGroup.emoji}</span>
                    <div>
                      <div className="font-semibold text-sm">{cityGroup.city}</div>
                      <div className="text-[10px] text-muted-foreground">{cityGroup.groups.length} grupos disponibles</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform [[data-state=open]_&]:rotate-180" />
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary/20 pl-4">
                {cityGroup.groups.map((group, i) => {
                  const typeConfig: Record<string, { emoji: string; label: string }> = {
                    whatsapp: { emoji: '💬', label: 'WhatsApp' },
                    telegram: { emoji: '✈️', label: 'Telegram' },
                    association: { emoji: '🏛️', label: 'ONG/Asociación' },
                    center: { emoji: '🏠', label: 'Centro' },
                  };
                  const typeInfo = typeConfig[group.type];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Card className="bg-muted/30">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">{typeInfo.emoji}</span>
                                <span className="text-sm font-medium truncate">{group.name}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5">{group.description}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-2">
                              <Badge variant="outline" className="text-[10px]">{typeInfo.label}</Badge>
                              {group.members && (
                                <span className="text-[10px] text-muted-foreground">{group.members} miembros</span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
