"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wind,
  Flame,
  AlertTriangle,
  Leaf,
  Thermometer,
  ArrowRight,
  ExternalLink,
  FlaskConical,
  Home,
  Cpu,
  Droplets,
} from "lucide-react";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { guides } from "@/data/guides";
import GuideCard from "@/components/GuideCard";
import EditorChoiceBadge from "@/components/EditorChoiceBadge";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  {
    slug: "best-carbon-monoxide-detectors",
    name: "Carbon Monoxide Detectors",
    tagline: "Essential protection from this invisible, odorless household danger",
    icon: AlertTriangle,
  },
  {
    slug: "best-dehumidifiers-apartment",
    name: "Dehumidifiers for Apartments",
    tagline: "Control moisture and prevent mold in small spaces",
    icon: Droplets,
  },
  {
    slug: "best-smoke-detectors-apartment",
    name: "Smoke Detectors",
    tagline: "Battery, hardwired, and smart models for complete fire protection",
    icon: Flame,
  },
  {
    slug: "best-air-conditioners-apartment",
    name: "Air Conditioners for Apartments",
    tagline: "Window units and portable ACs sized for small spaces",
    icon: Wind,
  },
  {
    slug: "best-air-purifiers-small-rooms",
    name: "Air Purifiers for Small Rooms",
    tagline: "True HEPA filtration sized right for apartments",
    icon: Leaf,
  },
  {
    slug: "best-humidity-temperature-monitors",
    name: "Humidity & Temperature Monitors",
    tagline: "Prevent mold, static, and respiratory irritation",
    icon: Thermometer,
  },
];

const PROBLEM_CARDS = [
  {
    title: "Is My Home Safe from CO?",
    body: "Carbon monoxide is odorless and invisible — you cannot detect it without a dedicated alarm. Find out which CO detectors are best suited for apartments and small homes.",
    href: "/best/best-carbon-monoxide-detectors",
    icon: AlertTriangle,
  },
  {
    title: "My Apartment Feels Too Humid",
    body: "Humidity above 60% accelerates mold growth and dust mite populations. A compact dehumidifier can dramatically improve air quality in bathrooms, bedrooms, and basements.",
    href: "/best/best-dehumidifiers-apartment",
    icon: Droplets,
  },
  {
    title: "I Want Cleaner Air",
    body: "True HEPA air purifiers remove PM2.5, dust, pet dander, and allergens from apartment air. Find the right size and features for your specific room.",
    href: "/best/best-air-purifiers-small-rooms",
    icon: Leaf,
  },
];

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const FEATURED_SLUGS = [
  "best-carbon-monoxide-detectors",
  "best-dehumidifiers-apartment",
  "best-smoke-detectors-apartment",
  "best-air-conditioners-apartment",
  "best-air-purifiers-small-rooms",
  "best-humidity-temperature-monitors",
];

const featuredProducts = FEATURED_SLUGS
  .map((slug) => products.find((p) => p.articleSlug === slug && p.rank === 1))
  .filter((p): p is NonNullable<typeof p> => p !== undefined);

export default function HomePageClient() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          padding: "2rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "860px", width: "100%" }}>
          <p
            style={{
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "12px",
              fontFamily: "var(--font-body)",
              marginBottom: "24px",
              opacity: 0.9,
            }}
          >
            VOLUME ONE · JUNE 2026
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              color: "white",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            Independent Reviews for a Safer Apartment.
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              opacity: 0.85,
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.75,
            }}
          >
            Honest, research-based recommendations for CO detectors, dehumidifiers,
            smoke alarms, air conditioners, air purifiers, and humidity monitors.
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <Link
              href="#find-right-product"
              style={{
                color: "white",
                textDecoration: "underline",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
              }}
            >
              Browse Top Picks
            </Link>
            <span style={{ color: "white", opacity: 0.7 }}> · </span>
            <Link
              href="/guides"
              style={{
                color: "white",
                textDecoration: "underline",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
              }}
            >
              Read Our Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* EDITOR'S CHOICE — overlaps hero */}
      <section className="overlap-section" style={{ padding: "3rem 1.5rem 3.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="editors-choice-grid"
          >
            <div>
              <EditorChoiceBadge />
              <h2 style={{ marginTop: "0.75rem", marginBottom: "0.5rem" }}>
                Best Carbon Monoxide Detector
              </h2>
              <h3 style={{ color: "var(--color-accent)", marginBottom: "1rem", fontSize: "1.25rem" }}>
                Kidde Carbon Monoxide Detector, AA Battery Powered, 3rd Edition
              </h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "1.25rem", lineHeight: 1.75 }}>
                A portable, battery-powered CO detector with 85 dB alarm and LED status indicators — reliable whole-home protection that requires no installation.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://www.amazon.com/dp/B0DT1MGCKK?tag=YOURTAG-20"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  View on Amazon
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://m.media-amazon.com/images/I/717SCEOQCDL._AC_SL1500_.jpg"
                alt="Kidde Carbon Monoxide Detector AA Battery Powered"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  maxHeight: "320px",
                  objectFit: "contain",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "12px",
                  padding: "16px",
                  boxShadow: "0 4px 24px rgba(13,27,42,0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section id="find-right-product" style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            Find the Right Product for Your Needs
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--color-text-muted)",
              marginBottom: "3rem",
              fontSize: "1rem",
            }}
          >
            Six categories, 42 products reviewed, one honest recommendation for every apartment.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="category-grid"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.slug} variants={itemVariants}>
                  <Link href={`/best/${cat.slug}`} style={{ textDecoration: "none" }}>
                    <div
                      className="card"
                      style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(30,111,200,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <Icon size={22} color="var(--color-accent)" />
                      </div>
                      <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.375rem" }}>{cat.name}</h3>
                      <p
                        style={{
                          color: "var(--color-text-muted)",
                          fontSize: "0.875rem",
                          flex: 1,
                          marginBottom: "1rem",
                        }}
                      >
                        {cat.tagline}
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "var(--color-accent)",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        View Guide <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: "4.5rem 1.5rem", backgroundColor: "var(--color-bg-alt)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Top Pick From Each Category</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--color-text-muted)",
              marginBottom: "3rem",
              fontSize: "1rem",
            }}
          >
            Our #1 recommendation from each of the six product categories.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="featured-grid"
          >
            {featuredProducts.map((product, i) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION CARDS */}
      <section style={{ padding: "4.5rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            What&apos;s Your Biggest Concern?
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--color-text-muted)",
              marginBottom: "3rem",
            }}
          >
            Find the solution that matches your specific situation.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="problem-grid"
          >
            {PROBLEM_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href} style={{ textDecoration: "none" }}>
                  <div
                    className="card"
                    style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column" }}
                  >
                    <Icon size={28} color="var(--color-accent)" style={{ marginBottom: "1rem" }} />
                    <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>{card.title}</h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", flex: 1 }}>
                      {card.body}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "var(--color-accent)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        marginTop: "1.25rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      See recommendations <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST REVIEW ARTICLES */}
      <section style={{ padding: "4.5rem 1.5rem", backgroundColor: "var(--color-bg-alt)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Our Latest Reviews</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="articles-grid"
          >
            {articles.map((article) => {
              const rank1 = products.find((p) => p.articleSlug === article.slug && p.rank === 1);
              return (
              <motion.div key={article.slug} variants={itemVariants}>
                <Link href={`/best/${article.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="card" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                    {rank1 ? (
                      <img
                        src={rank1.imageUrl}
                        alt={article.title}
                        style={{ width: "100%", height: "180px", objectFit: "contain", backgroundColor: "#f9f9f9", borderRadius: "8px" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "180px", backgroundColor: "#f9f9f9", borderRadius: "8px" }} />
                    )}
                    <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            fontSize: "11px",
                            fontFamily: "var(--font-body)",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                            color: "var(--color-accent)",
                          }}
                        >
                          {article.category}
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
                          {article.readTime}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "0.9875rem", lineHeight: 1.4, marginBottom: "auto" }}>{article.title}</h3>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "var(--color-accent)",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          fontFamily: "var(--font-body)",
                          marginTop: "1rem",
                        }}
                      >
                        Read Review <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
            })}
          </motion.div>
        </div>
      </section>

      {/* FROM OUR GUIDES */}
      <section style={{ padding: "4.5rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ marginBottom: 0 }}>Learn the Basics First</h2>
            <Link
              href="/guides"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                color: "var(--color-accent)",
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
              }}
            >
              All Guides <ArrowRight size={15} />
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="guides-grid"
          >
            {guides.slice(0, 3).map((guide, i) => (
              <GuideCard key={guide.slug} guide={guide} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE RESEARCH */}
      <section style={{ padding: "4.5rem 1.5rem", backgroundColor: "var(--color-bg-alt)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>How We Research</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--color-text-muted)",
              marginBottom: "3rem",
            }}
          >
            Every recommendation is earned, not sponsored.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              textAlign: "center",
            }}
            className="method-grid"
          >
            {[
              {
                icon: FlaskConical,
                title: "Sensor Accuracy",
                body: "We evaluate sensor accuracy based on published manufacturer specs, third-party lab reports, and verified user feedback across multiple deployment environments.",
              },
              {
                icon: Home,
                title: "Real-World Performance",
                body: "We analyze user-reported performance data from verified purchasers in apartments, studios, and small spaces to assess how devices behave in everyday conditions.",
              },
              {
                icon: Cpu,
                title: "Smart Home Compatibility",
                body: "Compatibility claims are evaluated against published integration documentation and user-reported reliability for Alexa, Google Home, Apple HomeKit, and Matter.",
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="card" style={{ padding: "2rem" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      backgroundColor: "rgba(30,111,200,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.25rem",
                    }}
                  >
                    <Icon size={24} color="var(--color-accent)" />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", marginBottom: "0.625rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOSSARY TEASER */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>New to Home Safety Monitoring?</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
            Learn the key terms — our glossary explains everything you&apos;ll encounter when choosing safety products for your apartment.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {["Carbon Monoxide", "Humidity", "HEPA", "BTU", "Smoke Detection", "Decibels (dB)"].map((term) => (
              <Link
                key={term}
                href="/glossary"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  border: "2px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
                }}
              >
                {term}
              </Link>
            ))}
          </div>
          <Link href="/glossary" className="btn-primary">
            View Full Terms Guide
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .editors-choice-grid { grid-template-columns: 1fr !important; }
          .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .featured-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .articles-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .guides-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .method-grid { grid-template-columns: 1fr !important; }
          .problem-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .category-grid { grid-template-columns: 1fr !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
          .articles-grid { grid-template-columns: 1fr !important; }
          .guides-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
