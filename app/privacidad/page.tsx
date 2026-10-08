import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Información sobre privacidad y contacto en la web de Chirola Disco.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: "Privacidad | Chirola Disco",
    description: "Información sobre privacidad y contacto en la web de Chirola Disco.",
    url: `${siteConfig.url}/privacidad`,
    type: "article",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="shell min-h-screen pt-32">
        <p className="eyebrow">Privacidad</p>
        <h1 className="display-font mt-3 max-w-4xl text-[clamp(4rem,11vw,10rem)] leading-none">Datos claros, sin vueltas.</h1>
        <div className="mt-10 grid max-w-3xl gap-7 text-neutral-300">
          <p>Esta web no guarda consultas en una base de datos propia. El formulario prepara un mensaje en la app de contacto del visitante para que el envío ocurra desde su propio email o canal disponible.</p>
          <p>No se detectaron cookies no esenciales, Analytics, Pixel ni plataformas de tracking activas en el código actual. Por eso no se agrega un banner de cookies innecesario.</p>
          <p>Los enlaces externos, como Instagram, abren fuera del sitio. Esos servicios tienen sus propias políticas de privacidad.</p>
          <p>Para consultas sobre privacidad o para actualizar esta información cuando se conecten formularios, analytics o campañas, escribí a <a className="text-[var(--accent)]" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          <p><Link href="/" className="border-b border-white/40 pb-1 text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Volver al inicio</Link></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
