import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StickyContactCTA } from "@/components/contact/sticky-contact-cta";
import { WhatsAppCTA } from "@/components/contact/whatsapp-cta";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Navbar } from "@/components/navigation/navbar";
import { AdaptiveVideo } from "@/components/video/adaptive-video";
import { getMontajeBySlug, montajes } from "@/data/montajes";
import { siteConfig } from "@/data/site-config";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return montajes.map((montaje) => ({ slug: montaje.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const montaje = getMontajeBySlug(slug);
  if (!montaje) return {};

  const image = montaje.media.poster ?? montaje.media.src;

  return {
    title: montaje.title,
    description: montaje.description,
    alternates: { canonical: `/montajes/${montaje.slug}` },
    openGraph: {
      title: `${montaje.title} | Chirola Disco`,
      description: montaje.description,
      url: `${siteConfig.url}/montajes/${montaje.slug}`,
      type: "article",
      images: [{ url: image, alt: montaje.media.alt }],
    },
  };
}

export default async function MontajeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const montaje = getMontajeBySlug(slug);
  if (!montaje) notFound();

  const contactMessage = `Hola Chirola Disco, quería consultar por un montaje de ${montaje.title}.`;
  const previewImage = montaje.media.poster ?? montaje.media.src;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-black">
          <Image src={previewImage} alt={montaje.media.alt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.86),rgba(0,0,0,.48)_42%,rgba(0,0,0,.16)),linear-gradient(180deg,rgba(0,0,0,.22),rgba(0,0,0,.9))]" />
          <div className="shell relative z-10 pb-12 pt-32">
            <p className="eyebrow">Montaje</p>
            <h1 className="display-font mt-3 max-w-5xl text-[clamp(4.5rem,13vw,12rem)] leading-[0.82]">{montaje.title}</h1>
            <p className="mt-5 max-w-2xl text-xl text-neutral-200 md:text-3xl">{montaje.description}</p>
          </div>
        </section>

        <Breadcrumbs compact items={[{ label: "Inicio", href: "/" }, { label: "Montajes", href: "/#montajes" }, { label: montaje.title, href: `/montajes/${montaje.slug}` }]} />

        <section className="shell grid gap-10 py-14 md:grid-cols-[.75fr_1.25fr] md:py-20">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="eyebrow">Armado real</p>
            <h2 className="display-font mt-3 text-6xl leading-none md:text-8xl">Videos del montaje.</h2>
            <p className="mt-5 max-w-md text-neutral-300">Acá sí cargamos el material pesado, porque el visitante eligió ver este armado en detalle.</p>
            <div className="mt-8"><WhatsAppCTA label="Consultar este montaje" message={contactMessage} /></div>
          </div>

          <div className="grid gap-5">
            <div className="media-frame aspect-[9/16] min-h-[520px] md:min-h-[720px]">
              {montaje.media.type === "video" ? (
                <AdaptiveVideo src={montaje.media.src} poster={montaje.media.poster} label={montaje.media.alt} className="h-full" priority />
              ) : (
                <Image src={montaje.media.src} alt={montaje.media.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 56vw" />
              )}
            </div>
            <Link href="/#montajes" className="w-fit border-b border-white/40 pb-2 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              Volver a montajes
            </Link>
          </div>
        </section>

        <section className="bg-[var(--panel)] py-16">
          <div className="shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="display-font max-w-3xl text-6xl leading-none md:text-8xl">Querés este estilo para tu fiesta?</h2>
            <WhatsAppCTA label="Consultar fecha" message={contactMessage} />
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactCTA message={contactMessage} />
    </>
  );
}
