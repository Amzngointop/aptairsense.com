"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  faqs: { q: string; a: string }[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "var(--color-card)",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 1.25rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--color-text)",
              gap: "1rem",
            }}
            aria-expanded={openIndex === i}
          >
            <span>{faq.q}</span>
            <ChevronDown
              size={18}
              style={{
                color: "var(--color-accent)",
                flexShrink: 0,
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.25s ease",
              }}
            />
          </button>
          {openIndex === i && (
            <div
              style={{
                padding: "0 1.25rem 1rem",
                color: "var(--color-text-muted)",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                borderTop: "1px solid var(--color-border)",
                paddingTop: "0.875rem",
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
