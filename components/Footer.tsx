"use client";

import Link from "next/link";
import { Wind } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-dark)", color: "white", padding: "4rem 1.5rem 2rem" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              <Wind size={20} color="var(--color-accent)" />
              {siteConfig.name}
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "260px" }}>
              Independent reviews of air quality monitors for apartments and small spaces.
            </p>
          </div>

          {/* Monitors */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "0.75rem",
              }}
            >
              Monitors
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {siteConfig.nav.categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/best/${cat.slug}`}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "white")}
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")
                    }
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "0.75rem",
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { label: "Guides", href: "/guides" },
                { label: "Terms & Definitions", href: "/glossary" },
                { label: "Reach Us", href: "/contact" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "0.75rem",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem", maxWidth: "480px", textAlign: "right" }}>
            As an Amazon Associate, we earn from qualifying purchases. Our reviews are independent and not influenced by affiliate relationships.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
