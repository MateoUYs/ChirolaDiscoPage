import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { StickyContactCTA } from "@/components/contact/sticky-contact-cta";
import { WhatsAppCTA } from "@/components/contact/whatsapp-cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { HeroVideo } from "@/components/video/hero-video";
import { events } from "@/data/events";
import { montajes } from "@/data/montajes";
import { siteConfig } from "@/data/site-config";

type StoryStep = {
  label: string;
  detail: string;
  image: string;
};

const storySteps: StoryStep[] = [
  { label: "Salón listo", detail: "El espacio empieza a tomar clima antes de que llegue la gente.", image: "/media/montajes/aros/aros-espejados-collage-01.webp" },
  { label: "Estructuras", detail: "Aros, esferas y puntos de altura tomando presencia sobre la pista.", image: "/media/posters/aros-real.jpg" },
  { label: "Pista", detail: "La pista LED pasa a ser el centro visual de la noche.", image: "/media/posters/pista-led-1818.webp" },
  { label: "Iluminación", detail: "Color, movimiento y humo para que la fiesta tenga energía real.", image: "/media/posters/iluminacion-real.webp" },
  { label: "Fiesta", detail: "El resultado final: gente, pista, luces y montaje funcionando juntos.", image: "/media/posters/fiesta-real.jpg" },
];

const mobileServices = ["Pista LED", "Pantalla", "Iluminación", "Sonido", "Aros", "Montaje completo"];

export default function Home() {
  const featuredEvents = events.filter((event) => event.featured);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "es-AR",
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.logo}`,
        image: `${siteConfig.url}/media/hero/hero-entrada-poster-video.webp`,
        description: siteConfig.description,
        telephone: `+${siteConfig.whatsapp.number}`,
        email: siteConfig.email,
        sameAs: siteConfig.sameAs,
        makesOffer: siteConfig.serviceAreas.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service } })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${siteConfig.whatsapp.number}`,
          contactType: "customer service",
          availableLanguage: "es",
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main>
        <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-black md:min-h-[88svh]">
          <div className="absolute inset-0">
            <HeroVideo />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.84),rgba(0,0,0,.42)_34%,rgba(0,0,0,.04)_68%),linear-gradient(180deg,rgba(0,0,0,.24),rgba(0,0,0,.04)_46%,rgba(0,0,0,.78))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
          <div className="shell relative z-10 pb-10 pt-36 md:pb-14">
            <div className="max-w-2xl">
              <p className="eyebrow reveal-in">Chirola Disco</p>
              <h1 className="display-font reveal-in mt-3 text-[clamp(3.4rem,7vw,7rem)] leading-[0.86] text-white">
                Chirola Disco: del salón vacío a tu fiesta.
              </h1>
              <p className="mt-5 max-w-xl text-lg font-medium text-neutral-100 md:text-2xl">Montaje audiovisual, iluminación, pista LED y sonido para tus 15.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contacto" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-[var(--accent)]">Consultar fecha</a>
                <a href="#montajes" className="border-b border-white/40 pb-2 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Ver montajes</a>
              </div>
            </div>
          </div>
        </section>

        <section className="shell border-b border-white/10 py-7 md:hidden">
          <p className="eyebrow">Qué podés contratar</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {mobileServices.map((service) => (
              <span key={service} className="border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold text-neutral-200">
                {service}
              </span>
            ))}
          </div>
          <a href="#contacto" className="mt-5 flex w-full items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-5 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-black">
            Consultar mi fecha
          </a>
        </section>

        <section className="shell py-9 md:py-14">
          <div className="grid gap-8 md:grid-cols-[.36fr_.64fr] md:items-center">
            <div>
              <p className="eyebrow">Lo que hacemos</p>
              <h2 className="display-font mt-3 text-[clamp(3rem,5vw,5.6rem)] leading-none">No armamos un salón. Lo transformamos.</h2>
              <p className="mt-5 max-w-sm text-neutral-300">Pista, luces, sonido y estructuras trabajando juntos para que el salón cambie desde la entrada.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="media-frame aspect-[9/16] min-h-[390px] sm:min-h-[520px]">
                <Image src="/media/montajes/aros/aros-espejados-collage-02.webp" alt="Montaje de aros espejados Chirola Disco" fill className="object-cover" sizes="(max-width: 640px) 100vw, 22vw" />
                <div className="absolute bottom-4 left-4 z-10 max-w-[14rem]"><span className="eyebrow">Montaje</span></div>
              </div>
              <div className="media-frame hidden aspect-[9/16] min-h-[520px] sm:block">
                <Image src="/media/posters/fiesta-real.jpg" alt="Fiesta real Chirola Disco" fill className="object-cover" sizes="(max-width: 640px) 100vw, 22vw" />
                <div className="absolute bottom-4 left-4 z-10 max-w-[14rem]"><span className="eyebrow">Fiesta</span></div>
              </div>
              <div className="media-frame hidden aspect-[9/16] min-h-[520px] sm:block">
                <Image src="/media/posters/showreel-1818.webp" alt="Pantalla y pista Chirola Disco" fill className="object-cover" sizes="(max-width: 640px) 100vw, 22vw" />
                <div className="absolute bottom-4 left-4 z-10 max-w-[14rem]"><span className="eyebrow">Pantalla</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="montajes" className="py-12 md:py-18">
          <div className="shell mb-8 md:mb-10">
            <p className="eyebrow">Montajes</p>
            <h2 className="display-font mt-2 max-w-4xl text-[clamp(3.2rem,6vw,6.5rem)] leading-none">El trabajo real tiene que ocupar la pantalla.</h2>
          </div>
          <div className="grid gap-8 md:gap-12">
            {montajes.map((montaje, index) => (
              <article key={montaje.slug} className="shell grid gap-6 border-t border-white/10 py-6 md:min-h-[82svh] md:grid-cols-12 md:items-center md:py-10">
                <div className="md:sticky md:top-28 md:col-span-4 md:self-center">
                  <span className="display-font text-5xl text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="display-font mt-2 text-[clamp(3.2rem,5.5vw,6.4rem)] leading-[0.88]">{montaje.title}</h3>
                  <p className="mt-5 max-w-sm text-lg text-neutral-300">{montaje.description}</p>
                  <Link href={`/montajes/${montaje.slug}`} className="mt-8 inline-flex border border-[var(--accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-black">
                    Ver armado
                  </Link>
                </div>
                <div className="md:col-span-8">
                  <Link href={`/montajes/${montaje.slug}`} className="group media-frame mx-auto block aspect-[9/16] min-h-[410px] max-w-[520px] md:min-h-[720px] md:max-w-[640px]">
                    <Image src={montaje.media.poster ?? montaje.media.src} alt={montaje.media.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.015]" sizes="(max-width: 768px) 100vw, 50vw" />
                    <span className="absolute bottom-5 right-5 z-20 border border-white/25 bg-black/45 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">Ver videos</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="shell mt-4 md:hidden">
            <a href="#contacto" className="flex w-full items-center justify-center border border-[var(--accent)] px-5 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">
              Quiero algo así
            </a>
          </div>
        </section>

        <section className="shell py-10 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[.36fr_.64fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">De cero a la fiesta</p>
              <h2 className="display-font mt-3 text-[clamp(3.2rem,5.6vw,6rem)] leading-none">Así cambia un salón.</h2>
              <p className="mt-5 max-w-md text-neutral-300">La secuencia debe terminar con fiesta real: luces, pista, gente y montaje funcionando.</p>
            </div>
            <div className="grid gap-3 md:gap-5">
              {storySteps.map((step, index) => (
                <div key={step.label} className="grid grid-cols-[112px_1fr] overflow-hidden border border-white/10 bg-[var(--panel)] md:grid-cols-[.72fr_1fr]">
                  <div className="media-frame min-h-[160px] border-0 md:aspect-[9/16] md:min-h-[560px]">
                    <Image src={step.image} alt={`${step.label} Chirola Disco`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 44vw" />
                  </div>
                  <div className="flex flex-col justify-center p-4 md:justify-end md:p-8">
                    <span className="display-font text-3xl text-[var(--accent)] md:text-5xl">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display-font text-4xl md:text-7xl">{step.label}</h3>
                      <p className="mt-2 max-w-lg text-sm text-neutral-400 md:mt-4 md:text-base">{step.detail}</p>
                      <p className="mt-4 hidden text-xs font-black uppercase tracking-[0.18em] text-neutral-500 md:block">Material real</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shell py-12 md:py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Nuestros últimos 15</p>
              <h2 className="display-font mt-2 text-[clamp(3.2rem,6vw,6.4rem)] leading-none">Eventos realizados.</h2>
            </div>
            <Link href="/eventos" className="w-fit border-b border-white/40 pb-2 text-sm font-black uppercase tracking-[0.2em]">Ver portfolio</Link>
          </div>
          <div className="group/events flex flex-col gap-5 md:h-[520px] md:flex-row md:items-stretch">
            {featuredEvents.map((event) => (
              <Link key={event.slug} href={`/eventos/${event.slug}`} className="group media-frame min-h-[310px] transition-[flex,filter,transform] duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] md:min-h-0 md:flex-1 md:group-hover/events:flex-[.78] md:group-hover/events:saturate-75 md:hover:flex-[1.9] md:hover:-translate-y-2 md:hover:saturate-125" data-analytics="event_open">
                <Image src={event.heroPoster} alt={event.title} fill className="object-cover transition duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/92 via-black/30 to-black/5 transition duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:from-black/82 group-hover:via-black/10" />
                <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(166,255,0,.18),transparent_36%)]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-1 items-end justify-between gap-4 p-5 transition duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
                  <div className="transition duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-2">
                    <p className="eyebrow">Caso</p>
                    <h3 className="display-font text-5xl transition duration-[1000ms] group-hover:text-[var(--accent)]">{event.title}</h3>
                    {event.venue ? <p className="text-sm text-neutral-300">{event.venue}</p> : <p className="text-sm text-neutral-300">Montaje real Chirola Disco</p>}
                  </div>
                  <span className="hidden translate-y-2 border border-white/25 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-sm transition duration-700 group-hover:translate-y-0 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:opacity-100 md:block">Ver evento</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="chirola" className="shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Image src="/media/hero/contact-videointro.jpg" alt="Montaje técnico y visual de Chirola Disco" width={900} height={1200} className="h-full min-h-[420px] object-cover" />
          </div>
          <div className="self-center md:col-span-6 md:col-start-7">
            <p className="eyebrow">Chirola Disco</p>
            <h2 className="display-font mt-3 text-[clamp(3.2rem,5.5vw,6rem)] leading-none">Detrás de cada fiesta hay horas de montaje.</h2>
              <p className="mt-6 max-w-xl text-xl leading-8 text-neutral-300">Chirola Disco transforma el espacio para que cuando llegue el momento, todo esté listo: estructura, luces, pista, sonido y escena. También conocido como Chirola Disco Baile, trabajamos con material real de montajes y eventos sociales.</p>
          </div>
        </section>

        <section id="contacto" className="bg-[var(--panel)] py-14 md:py-20">
          <div className="shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Cotización</p>
              <h2 className="display-font mt-3 text-6xl leading-none md:text-9xl">Consultá por tu fecha.</h2>
              <p className="mt-5 max-w-md text-neutral-300">Primero resolvemos lo importante: fecha, salón y qué querés que pase visualmente esa noche.</p>
              <div className="mt-8"><WhatsAppCTA /></div>
              <div className="mt-6 grid gap-2 text-sm text-neutral-500">
                <p>Instagram: <a href={siteConfig.instagram} className="text-neutral-300" target="_blank" rel="noopener noreferrer">@chiroladisco</a></p>
                <p>WhatsApp directo: <a href={`tel:+${siteConfig.whatsapp.number}`} className="text-neutral-300">{siteConfig.whatsapp.displayNumber}</a></p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactCTA />
    </>
  );
}
