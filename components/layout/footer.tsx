import Link from "next/link";
import Image from "next/image";
import { contactHref, siteConfig, whatsappUrl } from "@/data/site-config";

export function Footer() {
  const whatsappHref = whatsappUrl();

  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="shell flex flex-col gap-7 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="relative block h-16 w-56" aria-label="Chirola Disco inicio">
          <Image src={siteConfig.logo} alt="Chirola Disco" fill className="brand-glow object-contain object-left" sizes="224px" />
        </Link>
        <div className="flex flex-wrap gap-5">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" data-analytics="instagram_click">Instagram</a>
          {whatsappHref ? <a href={whatsappHref} data-analytics="whatsapp_click">WhatsApp</a> : <a href={contactHref()} data-analytics="email_click">Email</a>}
          <Link href="/#contacto">Contacto</Link>
          <Link href="/eventos">Eventos realizados</Link>
          <Link href="/privacidad">Privacidad</Link>
        </div>
        <div className="flex flex-col gap-3 text-center md:text-right">
          <span>© {new Date().getFullYear()} Chirola Disco</span>
          <span className="text-xs text-neutral-300 md:text-[13px]">
            Diseño y desarrollo por{" "}
            <a
              href="https://www.instagram.com/lucastech.uy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-neutral-100 transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              LucasTech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
