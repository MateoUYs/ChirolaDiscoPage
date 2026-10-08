import { contactHref, whatsappUrl } from "@/data/site-config";

export function WhatsAppCTA({ label = "Quiero cotizar mi fiesta", message }: { label?: string; message?: string }) {
  const whatsappHref = whatsappUrl(message);
  const href = whatsappHref ?? contactHref(message);
  const analytics = whatsappHref ? "whatsapp_click" : "email_click";

  return (
    <a
      href={href}
      className="group inline-flex items-center justify-between gap-6 border border-[var(--accent)] bg-[var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-[var(--accent)]"
      data-analytics={analytics}
    >
      {label}
      <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
    </a>
  );
}
