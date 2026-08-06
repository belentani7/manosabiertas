'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, FileText, BookOpen, Database, Shield, Phone, Globe, Heart, Users, GraduationCap, ChevronRight, Star, Wrench, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppStore, type SectionId } from '@/stores/app-store';
import { getTranslation } from '@/i18n/translations';
import { LANGUAGE_COUNT } from '@/i18n/languages';
import { RESOURCES } from '@/data/resources';
import { AI_COURSES } from '@/data/ai-courses';
import { FAQSection, TestimonialsSection } from './faq-testimonials';
import { ProgressDashboard } from './progress-dashboard';
import { FirstSteps } from './first-steps';
import { AnimatedCounter } from './animated-counter';
import { RecentlyViewed } from './recently-viewed';
import { PersonalRoute } from './personal-route';

export function HomeSection() {
  const { language, setActiveSection } = useAppStore();
  const t = getTranslation(language);
  const reduceMotion = useReducedMotion();

  const quickAccess: { id: SectionId; emoji: string; icon: typeof Sparkles; title: string; desc: string; gradient: string }[] = [
    {
      id: 'learn-ai',
      emoji: '🤖',
      icon: Sparkles,
      title: t.nav_learnAI,
      desc: 'ChatGPT, Gemini, Copilot, DeepSeek y más',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      id: 'cv',
      emoji: '📝',
      icon: FileText,
      title: t.nav_cv,
      desc: 'CV profesional con IA en minutos',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'office',
      emoji: '📊',
      icon: BookOpen,
      title: t.nav_office,
      desc: 'Word, Excel, PowerPoint desde cero',
      gradient: 'from-yellow-400 to-amber-500',
    },
    {
      id: 'resources',
      emoji: '📚',
      icon: Database,
      title: t.nav_resources,
      desc: `${RESOURCES.length.toLocaleString()}+ enlaces verificados`,
      gradient: 'from-teal-400 to-emerald-500',
    },
    {
      id: 'rights',
      emoji: '⚖️',
      icon: Shield,
      title: t.nav_rights,
      desc: 'Derechos, ayudas y supervivencia',
      gradient: 'from-rose-400 to-pink-500',
    },
    {
      id: 'tools',
      emoji: '🛠️',
      icon: Wrench,
      title: 'Herramientas',
      desc: 'Checklist trámites, coste de vida, conversor',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      id: 'events',
      emoji: '📅',
      icon: Calendar,
      title: 'Eventos',
      desc: 'Ferias de empleo, jornadas, cursos',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'courses',
      emoji: '🎓',
      icon: GraduationCap,
      title: 'Biblioteca de Cursos',
      desc: '115+ cursos gratuitos online con certificado',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      id: 'contacts',
      emoji: '📞',
      icon: Phone,
      title: t.nav_contacts,
      desc: 'Emergencias, ONGs, embajadas',
      gradient: 'from-violet-400 to-purple-500',
    },
  ];

  const stats = [
    { value: LANGUAGE_COUNT, suffix: '', label: 'Idiomas', icon: Globe },
    { value: RESOURCES.length, suffix: '+', label: 'Recursos', icon: Database },
    { value: AI_COURSES.length, suffix: '', label: 'Cursos IA', icon: Sparkles },
    { value: 100, suffix: '%', label: 'Gratis', icon: Heart },
  ];

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative gradient-hero overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-saffron/20 rounded-full blur-3xl motion-safe:animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-warm/15 rounded-full blur-3xl motion-safe:animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 relative">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-5 gap-1.5 py-1.5 px-3 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {LANGUAGE_COUNT} idiomas · {RESOURCES.length.toLocaleString()}+ recursos verificados
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="gradient-text">{t.hero_title}</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              {t.hero_subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setActiveSection('cv')}
                className="gradient-brand text-white shadow-lg hover:shadow-xl transition-shadow gap-2 h-12 px-7"
              >
                <FileText className="h-5 w-5" />
                {t.hero_cta_start}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setActiveSection('learn-ai')}
                className="gap-2 h-12 px-7"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                {t.hero_cta_learn}
              </Button>
            </div>

            {/* Visual mockup - CV preview + AI chat */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.5 }}
              className="mt-12 relative max-w-4xl mx-auto"
            >
              <div className="grid sm:grid-cols-2 gap-4 items-end">
                {/* Mini CV preview */}
                <motion.div
                  animate={reduceMotion ? { y: 0 } : { y: [0, -6, 0] }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white rounded-xl shadow-2xl border border-border p-4 text-left transform sm:rotate-[-2deg] hover:rotate-0 transition-transform"
                >
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-warm to-brand-saffron" />
                    <div className="flex-1 min-w-0">
                      <div className="h-2.5 w-20 bg-slate-800 rounded-full mb-1" />
                      <div className="h-1.5 w-16 bg-brand-warm rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                    <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                    <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                  </div>
                  <div className="mt-2.5 h-2 w-12 bg-brand-warm/40 rounded-full" />
                  <div className="mt-1.5 space-y-1">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                    <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                    <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
                  </div>
                  <div className="mt-2 flex gap-1">
                    <div className="h-3 w-12 bg-brand-saffron/30 rounded-full" />
                    <div className="h-3 w-10 bg-brand-warm/30 rounded-full" />
                    <div className="h-3 w-14 bg-brand-saffron/30 rounded-full" />
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[8px] text-slate-400">
                    <Sparkles className="h-2 w-2" />
                    Generado con IA
                  </div>
                </motion.div>

                {/* Mini AI chat preview */}
                <motion.div
                  animate={reduceMotion ? { y: 0 } : { y: [0, 6, 0] }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="bg-white rounded-xl shadow-2xl border border-border p-4 text-left transform sm:rotate-[2deg] hover:rotate-0 transition-transform"
                >
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                    <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-700">Asistente IA</div>
                    <div className="ml-auto flex gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                    </div>
                  </div>
                  {/* Chat bubbles */}
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <div className="bg-brand-warm/10 rounded-lg rounded-tr-sm px-2 py-1 max-w-[80%]">
                        <div className="h-1.5 w-16 bg-brand-warm/40 rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-slate-100 rounded-lg rounded-tl-sm px-2 py-1.5 max-w-[90%] space-y-1">
                        <div className="h-1.5 w-full bg-slate-300 rounded-full" />
                        <div className="h-1.5 w-3/4 bg-slate-300 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-slate-300 rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-brand-warm/10 rounded-lg rounded-tr-sm px-2 py-1 max-w-[70%]">
                        <div className="h-1.5 w-12 bg-brand-warm/40 rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Typing indicator */}
                  <div className="mt-2 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 motion-safe:animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 motion-safe:animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 motion-safe:animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-[8px] text-slate-400 ml-1">IA escribiendo...</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reduceMotion ? { duration: 0 } : { delay: 1 }}
                className="absolute -top-3 -left-3 bg-card border border-border rounded-lg shadow-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1.5"
              >
                <span className="text-base">🤖</span>
                8 IA disponibles
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reduceMotion ? { duration: 0 } : { delay: 1.2 }}
                className="absolute -bottom-3 -right-3 bg-card border border-border rounded-lg shadow-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1.5"
              >
                <span className="text-base">📝</span>
                CV en 5 minutos
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-card/80 backdrop-blur border border-border p-4 text-center card-hover"
                >
                  <Icon className="h-5 w-5 mx-auto mb-1.5 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold gradient-text tabular-nums">
                    <AnimatedCounter
                      value={stat.value}
                      format={(n) => Math.round(n).toLocaleString() + stat.suffix}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROGRESS DASHBOARD - only shows if user has progress */}
      <ProgressDashboard />

      {/* PERSONAL ROUTE - turns the library into a guided next step */}
      <PersonalRoute />

      {/* RECENTLY VIEWED - horizontal scroll of recent items */}
      <RecentlyViewed />

      {/* QUICK ACCESS */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{t.home_welcome}</h2>
          <p className="text-muted-foreground text-sm md:text-base">Elige dónde empezar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickAccess.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { delay: i * 0.06 }}
                onClick={() => setActiveSection(item.id)}
                className="group text-left"
              >
                <Card className="card-hover overflow-hidden h-full border-border/60 hover:border-primary/40">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                        {item.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <h3 className="font-semibold text-base">{item.title}</h3>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* FIRST STEPS - guided checklist */}
      <FirstSteps />

      {/* MISSION */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Badge variant="secondary" className="gap-1.5">
              <Heart className="h-3 w-3 text-primary fill-primary" />
              {t.home_mission}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-balance">{t.home_mission_text}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.home_forWho_text}</p>
            <div className="flex flex-wrap gap-2">
              {['WhatsApp', 'Google', 'Móvil', 'Tablet', 'Ordenador'].map((x) => (
                <Badge key={x} variant="outline" className="gap-1">
                  <Star className="h-3 w-3 text-brand-saffron fill-brand-saffron" />
                  {x}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">¿Para quién es Manos Abiertas?</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { emoji: '🌍', text: 'Personas recién llegadas a España' },
                    { emoji: '💼', text: 'Quienes buscan empleo o mejor trabajo' },
                    { emoji: '🎓', text: 'Adultos que quieren aprender IA y Office' },
                    { emoji: '👵', text: 'Personas mayores que se inician en lo digital' },
                    { emoji: '⚖️', text: 'Quienes necesitan conocer sus derechos' },
                    { emoji: '🗣️', text: 'Personas que prefieren su idioma materno' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={reduceMotion ? { duration: 0 } : { delay: i * 0.08 }}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/40 transition-colors"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AI MODELS PREVIEW */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-6">
          <Badge variant="secondary" className="mb-2 gap-1.5">
            <Sparkles className="h-3 w-3" /> Aprende IA
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold">Las mejores IA, explicadas paso a paso</h2>
          <p className="text-muted-foreground text-sm mt-1">Gratis, en tu idioma, con ejemplos prácticos</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {AI_COURSES.map((course, i) => (
            <motion.button
              key={course.id}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={reduceMotion ? { duration: 0 } : { delay: i * 0.04 }}
              onClick={() => setActiveSection('learn-ai')}
              className="group p-3 rounded-xl border border-border bg-card hover:border-primary/40 card-hover text-center"
            >
              <div className="text-3xl mb-1">{course.logo}</div>
              <div className="text-xs font-medium truncate">{course.model}</div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="container mx-auto max-w-7xl px-4 pb-4">
        <Card className="overflow-hidden border-0 gradient-brand">
          <CardContent className="p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 text-[200px] leading-none">🤝</div>
            </div>
            <div className="relative">
              <GraduationCap className="h-10 w-10 mx-auto mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Empieza hoy tu camino</h2>
              <p className="text-white/90 max-w-xl mx-auto mb-5 text-sm md:text-base">
                No necesitas conocimientos previos. Si sabes usar WhatsApp, puedes usar esta web. Todo es gratis.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setActiveSection('learn-ai')}
                className="gap-2"
              >
                <Sparkles className="h-5 w-5" />
                {t.hero_cta_learn}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
