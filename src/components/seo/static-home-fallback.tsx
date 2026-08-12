// Server-rendered static fallback shown while the client app hydrates.
// This content is what search engine crawlers index (no JS required),
// so it mirrors the real Home section content in plain, semantic HTML.

export function StaticHomeFallback() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España</h1>
        <p className="text-lg mb-8">
          Tu puente hacia la inteligencia artificial, el empleo y tus derechos en España. Gratis, sencillo y en 35 idiomas.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Qué es Manos Abiertas</h2>
          <p className="mb-4">
            Ayudamos a las personas inmigrantes en España a aprovechar la inteligencia artificial, crear un currículum profesional y conocer sus derechos y los recursos disponibles. Todo en tu idioma, de forma sencilla y gratuita.
          </p>
          <p>
            Para todas las personas que llegan a España y quieren aprender, trabajar y conocer sus derechos. No necesitas conocimientos previos: si sabes usar WhatsApp, puedes usar esta web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Secciones de la plataforma</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="#/learn-ai">Aprende Inteligencia Artificial</a> — ChatGPT, Gemini, Copilot y DeepSeek paso a paso.</li>
            <li><a href="#/cv">Crea tu Currículum</a> — formato europeo (Europass), compatible con InfoJobs y LinkedIn.</li>
            <li><a href="#/office">Curso de Office</a> — Word, Excel y PowerPoint desde cero.</li>
            <li><a href="#/resources">Recursos</a> — catálogo con fuente y estado de revisión visible.</li>
            <li><a href="#/rights">Derechos y Ayudas</a> — NIE, extranjería, SMI y trámites.</li>
            <li><a href="#/tools">Herramientas</a> — gestor de documentos y plantillas EX-01 y EX-15.</li>
            <li><a href="#/events">Eventos</a>, <a href="#/courses">Cursos</a>, <a href="#/community">Comunidad</a> y <a href="#/contacts">Contacto</a>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Preguntas frecuentes</h2>
          <div className="space-y-4">
            <article>
              <h3 className="font-medium mb-1">¿Manos Abiertas es realmente gratis?</h3>
              <p>Sí, 100% gratis. No necesitas registrarte ni pagar nada. No recogemos tus datos personales.</p>
            </article>
            <article>
              <h3 className="font-medium mb-1">¿Necesito saber informática para usarlo?</h3>
              <p>No. Si sabes usar WhatsApp y Google, puedes usar Manos Abiertas. Todo está diseñado paso a paso y en tu idioma.</p>
            </article>
            <article>
              <h3 className="font-medium mb-1">¿En qué idiomas está disponible?</h3>
              <p>Puedes elegir entre 39 idiomas en el selector. 26 están totalmente traducidos: español, catalán, portugués, inglés, alemán, italiano, francés, chino, hindi, árabe, ruso, ucraniano, polaco, rumano, búlgaro, neerlandés, griego, turco, urdu, persa, bengalí, tagalo, suajili, vietnamita y quechua. Los que aún completamos muestran español como respaldo.</p>
            </article>
            <article>
              <h3 className="font-medium mb-1">¿El CV sirve para buscar trabajo en España?</h3>
              <p>Sí. El formato sigue el estándar europeo (Europass) y es compatible con los sistemas de selección (ATS) de InfoJobs, LinkedIn y empresas españolas.</p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Instalar como aplicación</h2>
          <p>Manos Abiertas es una aplicación web que funciona en móviles, tablets y ordenadores sin instalar nada. Puedes añadirla a la pantalla de inicio de tu móvil para tenerla siempre a mano.</p>
        </section>
      </main>
    </div>
  );
}
