import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProductsByArticleSlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://aptairsense.com/best/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const products = getProductsByArticleSlug(slug);
  const relatedArticles = articles.filter((a) => article.relatedSlugs.includes(a.slug));

  const buyingGuideHtml = article.buyingGuide
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      if (block.startsWith("### ")) {
        return `<h3>${block.slice(4)}</h3>`;
      }
      return `<p>${block}</p>`;
    })
    .join("\n");

  return (
    <>
      {/* Hero */}
      <div
        style={{
          height: "380px",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <img
          src="https://placehold.co/1400x500/0D1B2A/FFFFFF?text=Category+Hero"
          alt={article.title}
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
            background: "linear-gradient(to top, rgba(13,27,42,0.9) 40%, rgba(13,27,42,0.5) 100%)",
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
            {article.category}
          </span>
          <h1 style={{ color: "white", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "0.75rem" }}>
            {article.title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Calendar size={14} /> Updated {article.lastUpdated}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Clock size={14} /> {article.readTime} read
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article style={{ padding: "3.5rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          {/* Summary */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              borderLeft: "4px solid var(--color-accent)",
              marginBottom: "3rem",
              boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Editor&apos;s Summary</h2>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0 }}>{article.summary}</p>
          </div>

          {/* Comparison Table */}
          {products.length > 0 && (
            <section style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ marginBottom: "1.25rem" }}>Quick Comparison</h2>
              <ComparisonTable products={products} />
            </section>
          )}

          {/* Product Cards */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2 style={{ marginBottom: "1.75rem" }}>Our Top Picks</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.25rem",
              }}
              className="products-grid"
            >
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </section>

          {/* Buying Guide */}
          <section
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem 2.5rem",
              marginBottom: "3rem",
              boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
            }}
          >
            <h2 style={{ marginBottom: "1.5rem" }}>Buying Guide</h2>
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: buyingGuideHtml }}
            />
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
            <FAQ faqs={article.faqs} />
          </section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 style={{ marginBottom: "1.5rem" }}>Related Reviews</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                }}
                className="related-grid"
              >
                {relatedArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/best/${a.slug}`}
                    className="related-article-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      textDecoration: "none",
                      border: "1px solid var(--color-border)",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <ArrowRight size={16} color="var(--color-accent)" />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                      }}
                    >
                      {a.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <style>{`
        @media (max-width: 700px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
