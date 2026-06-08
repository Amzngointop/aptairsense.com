"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  "Editor's Choice": { bg: "#D4860A", color: "white" },
  "Top Rated": { bg: "var(--color-accent)", color: "white" },
  "Best Value": { bg: "var(--color-green)", color: "white" },
  "Budget Pick": { bg: "#526070", color: "white" },
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const badgeStyle = product.badge ? BADGE_COLORS[product.badge] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{ height: "100%" }}
    >
      <div
        className="card"
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative" }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%", maxHeight: "280px", objectFit: "contain", backgroundColor: "#f9f9f9", borderRadius: "8px", marginBottom: "16px", padding: "12px" }}
          />
          {product.badge && badgeStyle && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                backgroundColor: badgeStyle.bg,
                color: badgeStyle.color,
                padding: "3px 9px",
                borderRadius: "5px",
                fontSize: "10px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
              }}
            >
              {product.badge}
            </span>
          )}
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "rgba(13,27,42,0.75)",
              color: "white",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            {product.rank}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem", minHeight: 0 }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: "var(--color-accent)",
                marginBottom: "0.25rem",
              }}
            >
              {product.bestFor}
            </p>
            <h3 style={{ fontSize: "1.0625rem", marginBottom: "0" }}>{product.name}</h3>
          </div>

          {/* Pros */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {product.pros.map((pro, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", fontSize: "0.875rem" }}>
                <CheckCircle
                  size={14}
                  style={{ color: "var(--color-green)", flexShrink: 0, marginTop: "2px" }}
                />
                <span style={{ color: "var(--color-text)" }}>{pro}</span>
              </li>
            ))}
          </ul>

          {/* Cons */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {product.cons.map((con, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", fontSize: "0.875rem" }}>
                <XCircle
                  size={14}
                  style={{ color: "var(--color-danger)", flexShrink: 0, marginTop: "2px" }}
                />
                <span style={{ color: "var(--color-text-muted)" }}>{con}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", width: "100%", justifyContent: "center" }}
            >
              View on Amazon
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
