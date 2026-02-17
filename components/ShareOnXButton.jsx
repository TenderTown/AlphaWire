"use client";

import { C, MONO } from "../lib/constants";

export default function ShareOnXButton({ text, url, style: s }) {
  const href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "12px 20px",
        borderRadius: 10,
        border: `1px solid ${C.border}`,
        background: C.bgCard,
        color: C.text,
        fontFamily: MONO,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.15s",
        ...s,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      Share on X
    </a>
  );
}
