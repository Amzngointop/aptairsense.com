import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid var(--color-border)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
        <thead>
          <tr style={{ backgroundColor: "var(--color-dark)", color: "white" }}>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Best For</th>
            <th style={thStyle}>Top Pro</th>
            <th style={thStyle}>Top Con</th>
            <th style={thStyle}>Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              style={{
                backgroundColor: i % 2 === 0 ? "white" : "var(--color-bg)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <td style={tdStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {product.rank}
                  </span>
                  <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{product.name}</span>
                </div>
              </td>
              <td style={tdStyle}>
                <span style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>{product.bestFor}</span>
              </td>
              <td style={tdStyle}>
                <span style={{ color: "var(--color-green)", fontSize: "0.85rem" }}>{product.pros[0]}</span>
              </td>
              <td style={tdStyle}>
                <span style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>{product.cons[0]}</span>
              </td>
              <td style={tdStyle}>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Amazon
                  <ExternalLink size={12} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "0.875rem 1rem",
  textAlign: "left",
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "0.875rem 1rem",
  verticalAlign: "top",
};
