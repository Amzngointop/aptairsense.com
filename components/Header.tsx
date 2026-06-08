"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Wind } from "lucide-react";
import { siteConfig } from "@/data/site";

const NAV_LINKS = [
  { label: "CO Detectors", href: "/best/best-carbon-monoxide-detectors" },
  { label: "Dehumidifiers", href: "/best/best-dehumidifiers-apartment" },
  { label: "Smoke Detectors", href: "/best/best-smoke-detectors-apartment" },
  { label: "Air Conditioners", href: "/best/best-air-conditioners-apartment" },
  { label: "Air Purifiers", href: "/best/best-air-purifiers-small-rooms" },
  { label: "Humidity & Temp", href: "/best/best-humidity-temperature-monitors" },
  { label: "Guides", href: "/guides" },
  { label: "Terms & Defs", href: "/glossary" },
  { label: "Reach Us", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  return (
    <header
      ref={menuRef}
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          height: "56px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-text)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            flexShrink: 0,
          }}
        >
          <Wind size={18} color="var(--color-accent)" />
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="header-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-nav-link"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1a1a1a",
                textDecoration: "none",
                padding: "0.375rem 0.6rem",
                borderRadius: "4px",
                transition: "color 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="header-mobile-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#1a1a1a",
            cursor: "pointer",
            padding: "0.25rem",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 1.5rem",
                borderBottom: "1px solid #f3f4f6",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1a1a1a",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .header-nav-link:hover { color: var(--color-accent) !important; }
        @media (max-width: 768px) {
          .header-desktop-nav { display: none !important; }
          .header-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
