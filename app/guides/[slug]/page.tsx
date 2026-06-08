import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, ExternalLink } from "lucide-react";
import { guides, getGuideBySlug } from "@/data/guides";
import FAQ from "@/components/FAQ";
import GuideCard from "@/components/GuideCard";

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://aptairsense.com/guides/${slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = guides.filter((g) => guide.relatedSlugs.includes(g.slug));

  return (
    <>
      {/* Hero */}
      <div
        style={{
          height: "420px",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <img
          src="https://placehold.co/1200x600/EBF2FB/1E6FC8?text=Guide+Hero"
          alt={guide.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13,27,42,0.92) 50%, rgba(13,27,42,0.5) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "0 1.5rem 2.5rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-accent)",
              color: "white",
              padding: "3px 10px",
              borderRadius: "5px",
              fontSize: "11px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "0.75rem",
            }}
          >
            {guide.tag}
          </span>
          <h1 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "0.75rem", maxWidth: "800px" }}>
            {guide.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
            }}
          >
            <Clock size={14} /> {guide.readTime} read
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "var(--color-bg)", padding: "3.5rem 1.5rem" }}>
        <div
          className="container guide-layout"
          style={{
            maxWidth: "960px",
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Main content */}
          <div>
            {/* Hero image */}
            <img
              src={guide.image}
              alt={guide.title}
              style={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "32px",
                marginTop: "24px",
              }}
            />

            {/* Intro */}
            <div
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                color: "var(--color-text)",
                marginBottom: "2.5rem",
                padding: "1.5rem 2rem",
                backgroundColor: "white",
                borderRadius: "12px",
                borderLeft: "4px solid var(--color-accent)",
                boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
              }}
            >
              {guide.intro}
            </div>

            {/* Sections */}
            {guide.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "2.5rem" }}>
                <h2 id={`section-${i}`} style={{ marginBottom: "1rem" }}>
                  {section.heading}
                </h2>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "1.5rem 2rem",
                    boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
                  }}
                >
                  {section.content.split("\n\n").map((para, j) => (
                    <p key={j} style={{ lineHeight: 1.8, color: "var(--color-text-muted)", marginBottom: j < section.content.split("\n\n").length - 1 ? "1rem" : 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Recommendations */}
            {guide.recommendations.length > 0 && (
              <div style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Our Recommendations</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {guide.recommendations.map((rec, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "1.25rem 1.5rem",
                        borderLeft: "4px solid var(--color-accent)",
                        boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>{rec.title}</h3>
                        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", margin: 0 }}>
                          {rec.description}
                        </p>
                      </div>
                      <Link
                        href={rec.href}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "white",
                          backgroundColor: "var(--color-accent)",
                          padding: "0.5rem 1rem",
                          borderRadius: "7px",
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        See Picks <ArrowRight size={13} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ marginBottom: "1.25rem" }}>Frequently Asked Questions</h2>
              <FAQ faqs={guide.faqs} />
            </div>
          </div>

          {/* Sidebar: Table of Contents */}
          <aside
            style={{
              position: "sticky",
              top: "80px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.25rem",
              boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
            }}
            className="guide-sidebar"
          >
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                marginBottom: "0.875rem",
              }}
            >
              In This Guide
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {guide.sections.map((section, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    style={{
                      color: "var(--color-text-muted)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-body)",
                      display: "block",
                      padding: "0.2rem 0",
                      transition: "color 0.15s",
                    }}
                    className="toc-link"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section style={{ padding: "3.5rem 1.5rem", backgroundColor: "var(--color-bg-alt)" }}>
          <div className="container" style={{ maxWidth: "960px" }}>
            <h2 style={{ marginBottom: "1.75rem" }}>Related Guides</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.25rem",
              }}
              className="related-guides-grid"
            >
              {relatedGuides.map((g, i) => (
                <GuideCard key={g.slug} guide={g} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          .guide-layout { grid-template-columns: 1fr !important; }
          .guide-sidebar { display: none; }
          .related-guides-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
