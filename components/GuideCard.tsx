"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Guide } from "@/data/guides";

interface GuideCardProps {
  guide: Guide;
  index?: number;
}

export default function GuideCard({ guide, index = 0 }: GuideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Link href={`/guides/${guide.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div className="card" style={{ overflow: "hidden", height: "100%" }}>
          <img
            src={guide.image}
            alt={guide.title}
            style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
          />
          <div style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(30,111,200,0.1)",
                  color: "var(--color-accent)",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                {guide.tag}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "12px",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Clock size={12} />
                {guide.readTime}
              </span>
            </div>
            <h3
              style={{
                fontSize: "1rem",
                lineHeight: 1.4,
                color: "var(--color-text)",
                marginBottom: "0.75rem",
              }}
            >
              {guide.title}
            </h3>
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
              Read Guide <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
