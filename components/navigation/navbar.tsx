"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { contactHref, siteConfig, whatsappUrl } from "@/data/site-config";

const navItems = [
  { href: "/#montajes", label: "Montajes" },
  { href: "/eventos", label: "Eventos" },
  { href: "/#chirola", label: "Chirola" },
  { href: "/#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const whatsappHref = whatsappUrl();
  const primaryContactHref = whatsappHref ?? contactHref();
  const activeHeader = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${activeHeader ? "bg-[linear-gradient(180deg,rgba(0,0,0,.58),rgba(0,0,0,.30)_68%,rgba(0,0,0,0))] backdrop-blur-md lg:bg-black/62 lg:shadow-[0_1px_0_rgba(255,255,255,.08)]" : "bg-[linear-gradient(180deg,rgba(0,0,0,.34),rgba(0,0,0,.12)_64%,rgba(0,0,0,0))]"}`}>
      <nav className={`shell flex items-center justify-between gap-6 transition-[height] duration-500 ${activeHeader ? "h-18" : "h-24"}`} aria-label="Navegación principal">
        <Link href="/" style={{ position: "relative", display: "block", width: activeHeader ? "10rem" : "12rem", height: activeHeader ? "2.75rem" : "3.5rem" }} className={`drop-shadow-[0_2px_12px_rgba(0,0,0,.72)] transition-all duration-500 ${activeHeader ? "md:h-12 md:w-48" : "md:h-16 md:w-64"}`} aria-label="Chirola Disco inicio">
          <Image src={siteConfig.logo} alt="Chirola Disco" fill priority className="brand-glow object-contain object-left" sizes="(max-width: 768px) 224px, 288px" />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.18em] text-neutral-300 lg:flex">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-[var(--accent)]">{item.label}</Link>)}
        </div>
        <a href={primaryContactHref} className="hidden border border-[var(--accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-black lg:inline-flex" data-analytics={whatsappHref ? "whatsapp_click" : "email_click"}>
          Consultar
        </a>
        <button className="border border-white/25 bg-black/20 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white shadow-[0_2px_18px_rgba(0,0,0,.28)] backdrop-blur-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          Menú
        </button>
      </nav>
      {open ? (
        <div id="mobile-nav" className="shell grid gap-4 border-t border-white/10 bg-black/35 py-5 backdrop-blur-md lg:hidden">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-lg uppercase tracking-[0.16em]">{item.label}</Link>)}
          <a href={primaryContactHref} className="mt-2 border border-[var(--accent)] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-[var(--accent)]" data-analytics={whatsappHref ? "whatsapp_click" : "email_click"}>Quiero cotizar</a>
        </div>
      ) : null}
    </header>
  );
}
