import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://duoapp.com${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="reveal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[var(--line)] rounded-full text-xs font-semibold shadow-[2px_3px_0px_rgba(30,29,25,0.98)]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i === 0 && <Home size={12} className="text-muted-foreground shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-black" : "text-muted-foreground"} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={12} className="text-muted-foreground/60 shrink-0" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
