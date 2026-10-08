import Link from "next/link";
import { StickyContactCTA } from "@/components/contact/sticky-contact-cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[82svh] overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(166,255,0,.16),transparent_34%),linear-gradient(180deg,#050505,#000)]" />
        <section className="shell relative z-10 grid min-h-[62svh] content-end pb-14">
          <p className="eyebrow">404</p>
          <h1 className="display-font mt-3 max-w-4xl text-[clamp(4.5rem,13vw,12rem)] leading-[0.82]">Esta pista no existe.</h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-300">La página que buscás no está disponible. Podés volver al inicio, ver trabajos realizados o consultar por tu fecha.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-[var(--accent)]">Volver al inicio</Link>
            <Link href="/eventos" className="border-b border-white/40 pb-2 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Ver eventos</Link>
            <Link href="/#contacto" className="border-b border-white/40 pb-2 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Contacto</Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactCTA />
    </>
  );
}
