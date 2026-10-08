import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { StickyContactCTA } from "@/components/contact/sticky-contact-cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Eventos realizados",
  description: "Portfolio audiovisual de montajes reales de Chirola Disco para cumpleaños de 15 y eventos sociales.",
  alternates: { canonical: "/eventos" },
  openGraph: {
    title: "Eventos realizados | Chirola Disco",
    description: "Portfolio audiovisual de montajes reales de Chirola Disco.",
    url: `${siteConfig.url}/eventos`,
    type: "website",
    images: [{ url: "/media/posters/og-chirola.svg", width: 1200, height: 630, alt: "Chirola Disco" }],
  },
};

export default function EventosPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Eventos", href: "/eventos" }]} />
      <main className="shell min-h-screen pt-10">
        <p className="eyebrow">Portfolio</p>
        <h1 className="display-font mt-3 max-w-5xl text-[clamp(4rem,12vw,11rem)] leading-none">Eventos que cambian el salón.</h1>
        <p className="mt-5 max-w-2xl text-lg text-neutral-300">Trabajos reales realizados por Chirola Disco. Esta sección no publica fechas futuras ni precios: está preparada para sumar agenda pública cuando existan datos comerciales reales.</p>
        <div className="group/events mt-14 flex flex-col gap-5 md:h-[560px] md:flex-row md:items-stretch">
          {events.map((event, index) => (
            <Link
              key={event.slug}
              href={`/eventos/${event.slug}`}
              className={`group/event media-frame min-h-[420px] transition-[flex,transform,filter] delay-75 duration-[1200ms] ease-[var(--ease)] md:min-h-0 md:[flex:1_1_0%] md:group-hover/events:blur-[2px] md:group-hover/events:saturate-75 md:hover:[flex:1.34_1_0%] md:hover:!blur-none md:hover:!saturate-125 md:focus-visible:[flex:1.34_1_0%] md:focus-visible:!blur-none ${index === 0 ? "md:[flex:1.18_1_0%]" : ""}`}
            >
              <Image src={event.heroPoster} alt={event.title} fill className="object-cover transition duration-[1600ms] ease-[var(--ease)] group-hover/event:scale-[1.055] group-focus-visible/event:scale-[1.055]" sizes="(max-width: 768px) 100vw, 60vw" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/28 to-black/10 opacity-95 transition duration-[1200ms] ease-[var(--ease)] group-hover/event:opacity-70" />
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-[1200ms] delay-100 ease-[var(--ease)] group-hover/event:opacity-100 group-focus-visible/event:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(166,255,0,.12),transparent_34%)]" />
              </div>
              <div className="absolute bottom-6 left-6 z-20 max-w-sm translate-y-2 pr-6 transition duration-[1100ms] delay-75 ease-[var(--ease)] group-hover/event:translate-y-0 group-focus-visible/event:translate-y-0">
                <p className="eyebrow">Montaje real</p>
                <h2 className="display-font text-6xl transition duration-[1100ms] delay-75 ease-[var(--ease)] group-hover/event:text-[var(--accent)]">{event.title}</h2>
                <p className="text-neutral-300 transition duration-700 delay-100 group-hover/event:text-white">{event.subtitle}</p>
              </div>
              <span className="absolute right-5 top-5 z-20 translate-y-2 border border-white/25 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-sm transition duration-700 delay-150 ease-[var(--ease)] group-hover/event:translate-y-0 group-hover/event:border-[var(--accent)] group-hover/event:text-[var(--accent)] group-hover/event:opacity-100 group-focus-visible/event:translate-y-0 group-focus-visible/event:opacity-100">
                Ver evento
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <StickyContactCTA />
    </>
  );
}
