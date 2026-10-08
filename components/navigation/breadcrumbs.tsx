import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export type BreadcrumbItem = { label: string; href: string };

export function Breadcrumbs({ items, compact = false }: { items: BreadcrumbItem[]; compact?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Migas de pan" className={`shell text-xs font-black uppercase tracking-[0.18em] text-neutral-500 ${compact ? "pt-8" : "pt-28"}`}>
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? <span aria-hidden="true" className="mx-2 text-neutral-700">/</span> : null}
            {index === items.length - 1 ? <span className="text-neutral-300">{item.label}</span> : <Link href={item.href} className="transition hover:text-[var(--accent)]">{item.label}</Link>}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
