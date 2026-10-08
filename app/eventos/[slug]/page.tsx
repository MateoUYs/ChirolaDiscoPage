import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { StickyContactCTA } from "@/components/contact/sticky-contact-cta";
import { WhatsAppCTA } from "@/components/contact/whatsapp-cta";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Navbar } from "@/components/navigation/navbar";
import { AdaptiveVideo } from "@/components/video/adaptive-video";
import { events, getEventBySlug } from "@/data/events";
import { siteConfig } from "@/data/site-config";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
    alternates: { canonical: `/eventos/${event.slug}` },
    openGraph: {
      title: `${event.title} | Chirola Disco`,
      description: event.description,
      url: `${siteConfig.url}/eventos/${event.slug}`,
      type: "article",
      images: [{ url: event.heroPoster, alt: event.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Chirola Disco`,
      description: event.description,
      images: [event.heroPoster],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();
  const contactMessage = `Hola Chirola Disco, quería consultar por un montaje como ${event.title}.`;
  const compactGallery = event.gallery.length <= 2;
  const technicalItems = [...(event.services ?? []), ...(event.structures ?? []), ...(event.lighting ?? [])];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[86svh] items-end overflow-hidden bg-black">
          <div className="absolute inset-0">
            <AdaptiveVideo src={event.heroVideo} poster={event.heroPoster} label={`Video del evento ${event.title}`} priority />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.12)_45%,rgba(0,0,0,.88))]" />
          <div className="shell relative z-10 pb-12 pt-32">
            <p className="eyebrow">Caso de portfolio</p>
            <h1 className="display-font mt-3 text-[clamp(5rem,15vw,14rem)] leading-[0.82]">{event.title}</h1>
            <p className="max-w-2xl text-xl text-neutral-200 md:text-3xl">{event.subtitle}</p>
          </div>
        </section>

        <Breadcrumbs compact items={[{ label: "Inicio", href: "/" }, { label: "Eventos", href: "/eventos" }, { label: event.title, href: `/eventos/${event.slug}` }]} />

        <section className="shell grid gap-10 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24">
          <div className="grid gap-4 text-sm uppercase tracking-[0.16em] text-neutral-400">
            {event.date ? <p><span className="text-white">Fecha:</span> {event.date}</p> : null}
            {event.location ? <p><span className="text-white">Ubicación:</span> {event.location}</p> : null}
            {event.venue ? <p><span className="text-white">Salón:</span> {event.venue}</p> : null}
            {event.danceFloor ? <p><span className="text-white">Pista:</span> {event.danceFloor}</p> : null}
            <p><span className="text-white">Tipo:</span> Montaje realizado</p>
          </div>
          <div>
            <h2 className="display-font text-6xl md:text-8xl">Ficha técnica visual.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">{event.description}</p>
            {technicalItems.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {technicalItems.map((item) => <span key={item} className="border border-white/12 px-3 py-2 text-sm text-neutral-300">{item}</span>)}
              </div>
            ) : null}
          </div>
        </section>

        <section className={`shell grid gap-6 pb-20 md:pb-28 ${compactGallery ? "max-w-2xl" : "md:grid-cols-6"}`}>
          {event.gallery.map((asset, index) => (
            <div key={`${asset.src}-${index}`} className={`media-frame aspect-[9/16] min-h-0 ${compactGallery ? "w-full" : asset.orientation === "vertical" ? "md:col-span-2 md:row-span-2" : "md:col-span-4"}`}>
              {asset.type === "video" ? (
                <AdaptiveVideo src={asset.src} poster={asset.poster} label={asset.alt} className="h-full" fit="contain" />
              ) : (
                <Image src={asset.src} alt={asset.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
              )}
            </div>
          ))}
        </section>

        <section className="bg-[var(--panel)] py-16">
          <div className="shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="display-font max-w-3xl text-6xl leading-none md:text-8xl">Querés algo así para tu fiesta?</h2>
            <WhatsAppCTA label="Consultar mi fecha" message={contactMessage} />
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactCTA message={contactMessage} />
    </>
  );
}
