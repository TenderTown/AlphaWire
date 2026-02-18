"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { C, MONO, SANS, DIMS } from "../lib/constants";

/* ── Mobile-responsive Nav ─────────────────────────────────── */
export function Nav({ links = [], cta, onLogoClick, right }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 680);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navLinks = links.map((l, i) => (
    <Link key={i} href={l.href} onClick={() => setOpen(false)}
      style={{ fontFamily: MONO, fontSize: 12, color: C.dim, fontWeight: 600, textDecoration: "none" }}>
      {l.label}
    </Link>
  ));

  const ctaBtn = cta ? (
    <Btn primary={cta.primary} href={cta.href} onClick={() => { setOpen(false); if (cta.onClick) cta.onClick(); }}>
      {cta.label}
    </Btn>
  ) : null;

  return (
    <>
      <nav style={{
        position: "relative", zIndex: 50, padding: "14px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <Link href="/" onClick={onLogoClick}
          style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", textDecoration: "none" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 900, color: C.bg,
          }}>A</div>
          <span style={{ fontFamily: MONO, fontWeight: 800, fontSize: 15, color: C.text }}>
            ALPHA<span style={{ color: C.accent }}>WIRE</span>
          </span>
        </Link>

        {/* Desktop */}
        {!isMobile && (right || (
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {navLinks}
            {ctaBtn}
          </div>
        ))}

        {/* Mobile: show right prop directly when provided */}
        {isMobile && right && right}

        {/* Mobile hamburger - only when using links/cta pattern */}
        {isMobile && !right && (
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 8, display: "flex", flexDirection: "column", gap: 5,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2, background: C.accent, borderRadius: 2,
              transition: "all 0.3s",
              transform: open ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 2, background: C.accent, borderRadius: 2,
              transition: "all 0.3s", opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 2, background: C.accent, borderRadius: 2,
              transition: "all 0.3s",
              transform: open ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && !right && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", top: 57, left: 0, right: 0, bottom: 0,
            zIndex: 40, background: `${C.bg}F2`,
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: "opacity 0.25s ease",
          }}
        >
          <div style={{
            padding: "24px",
            borderBottom: `1px solid ${C.border}`,
            transform: open ? "translateY(0)" : "translateY(-10px)",
            transition: "transform 0.25s ease",
            display: "flex", flexDirection: "column", gap: 20,
          }}>
            {links.map((l, i) => (
              <Link key={i} href={l.href} onClick={() => setOpen(false)}
                style={{
                  fontFamily: MONO, fontSize: 14, color: C.text, fontWeight: 600,
                  textDecoration: "none", padding: "8px 0",
                  borderBottom: `1px solid ${C.border}`,
                }}>
                {l.label}
              </Link>
            ))}
            {ctaBtn && <div style={{ marginTop: 4 }}>{ctaBtn}</div>}
          </div>
        </div>
      )}
    </>
  );
}

/* ── Button ─────────────────────────────────────────────────── */
export function Btn({ children, primary, disabled, onClick, style: s, href }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href} disabled={disabled} onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: primary ? "13px 36px" : "10px 20px",
        background: primary
          ? disabled ? C.border : `linear-gradient(135deg, ${C.accent}, #00C087)`
          : "transparent",
        border: primary ? "none" : `1px solid ${disabled ? C.border : C.accent}60`,
        borderRadius: 8,
        color: primary ? (disabled ? C.muted : C.bg) : (disabled ? C.muted : C.accent),
        fontFamily: MONO, fontSize: 13, fontWeight: 700,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "all 0.2s",
        textDecoration: "none",
        ...s,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Grid Background ────────────────────────────────────────── */
export function GridBg() {
  return (
    <div style={{
      position: "fixed", inset: 0, opacity: 0.03, pointerEvents: "none",
      backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }} />
  );
}

/* ── Radar Chart ────────────────────────────────────────────── */
export function Radar({ scores, size = 280 }) {
  const cx = size / 2, cy = size / 2, r = size * 0.36;
  const n = DIMS.length;
  const pt = (i, val) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return [cx + ((val / 10) * r) * Math.cos(a), cy + ((val / 10) * r) * Math.sin(a)];
  };
  const dp = DIMS.map((d, i) => pt(i, scores[d.key] || 5));
  const path = dp.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + "Z";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1.0].map((l, li) => (
        <polygon key={li}
          points={DIMS.map((_, i) => pt(i, l * 10).join(",")).join(" ")}
          fill="none" stroke={C.border} strokeWidth={li === 3 ? 0.8 : 0.4} opacity={0.5}
        />
      ))}
      {DIMS.map((_, i) => {
        const [ex, ey] = pt(i, 10);
        return <line key={i} x1={cx} y1={cy} x2={ex} y2={ey} stroke={C.border} strokeWidth={0.4} opacity={0.3} />;
      })}
      <defs>
        <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={C.accent} stopOpacity={0.25} />
          <stop offset="100%" stopColor={C.cyan} stopOpacity={0.08} />
        </linearGradient>
      </defs>
      <path d={path} fill="url(#rg)" stroke={C.accent} strokeWidth={1.8} />
      {dp.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill={DIMS[i].color} stroke={C.bg} strokeWidth={1.5} />
      ))}
      {DIMS.map((d, i) => {
        const [lx, ly] = pt(i, 12.5);
        return (
          <text key={i} x={lx} y={ly} textAnchor="middle" dominantBaseline="central"
            fill={d.color} fontSize={9} fontWeight="700" fontFamily={MONO}>
            {d.key}
          </text>
        );
      })}
    </svg>
  );
}

/* ── Email Capture ──────────────────────────────────────────── */
export function EmailCapture({ context = "general", compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("sending");
    try {
      const leads = JSON.parse(localStorage.getItem("aw_leads") || "[]");
      leads.push({ email, context, ts: Date.now() });
      localStorage.setItem("aw_leads", JSON.stringify(leads));
      if (typeof window !== "undefined" && window.va) {
        window.va("event", { name: "email_capture", data: { context } });
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{
        background: C.bgCard, borderRadius: 12, border: `1px solid ${C.accent}40`,
        padding: compact ? "16px 20px" : "24px", textAlign: "center",
      }}>
        <p style={{ fontFamily: MONO, fontSize: 12, color: C.accent, fontWeight: 600 }}>
          &#10003; You&apos;re in. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: C.bgCard, borderRadius: 12, border: `1px solid ${C.border}`,
      padding: compact ? "16px 20px" : "28px",
    }}>
      {!compact && (
        <>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 8 }}>
            STAY IN THE LOOP
          </div>
          <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.6, marginBottom: 16 }}>
            Get notified when we launch coaching programs, new features, and trading psychology insights.
          </p>
        </>
      )}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email" placeholder="your@email.com" value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          style={{
            flex: 1, minWidth: 180, padding: "10px 14px",
            background: C.bg, border: `1px solid ${C.border}`,
            borderRadius: 8, color: C.text, fontFamily: MONO, fontSize: 13, outline: "none",
          }}
        />
        <button onClick={handleSubmit} disabled={status === "sending"}
          style={{
            padding: "10px 20px",
            background: `linear-gradient(135deg, ${C.accent}, #00C087)`,
            border: "none", borderRadius: 8,
            color: C.bg, fontFamily: MONO, fontSize: 12, fontWeight: 700,
            cursor: "pointer", whiteSpace: "nowrap",
          }}>
          {status === "sending" ? "..." : compact ? "NOTIFY ME" : "GET UPDATES"}
        </button>
      </div>
      {status === "error" && (
        <p style={{ fontFamily: MONO, fontSize: 11, color: C.red, marginTop: 8 }}>
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${C.border}`, padding: "40px 24px",
      maxWidth: 800, margin: "0 auto",
    }}>
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "space-between",
        alignItems: "flex-start", gap: 24, marginBottom: 24,
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{
              width: 20, height: 20, borderRadius: 4,
              background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 900, color: C.bg,
            }}>A</div>
            <span style={{ fontFamily: MONO, fontWeight: 800, fontSize: 13, color: C.text }}>
              ALPHA<span style={{ color: C.accent }}>WIRE</span>
            </span>
          </div>
          <p style={{ fontFamily: MONO, fontSize: 10, color: C.muted, maxWidth: 280 }}>
            Innate behavioral assessment for traders. Your wiring is permanent — your strategy should match it.
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { href: "/about", label: "Methodology" },
            { href: "/archetypes", label: "Archetypes" },
            { href: "/pricing", label: "Pricing" },
            { href: "/terms", label: "Terms" },
            { href: "/privacy", label: "Privacy" },
          ].map((l, i) => (
            <Link key={i} href={l.href}
              style={{ fontFamily: MONO, fontSize: 11, color: C.dim, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div style={{
        borderTop: `1px solid ${C.border}`, paddingTop: 16,
        display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8,
      }}>
        <p style={{ fontFamily: MONO, fontSize: 10, color: C.muted }}>
          &copy; {new Date().getFullYear()} Alphawire. All rights reserved.
        </p>
        <p style={{ fontFamily: MONO, fontSize: 10, color: C.muted }}>
          Not financial advice. For educational purposes only.
        </p>
      </div>
    </footer>
  );
}

/* ── Page Wrapper ───────────────────────────────────────────── */
export function PageWrapper({ children }) {
  return (
    <div style={{
      background: C.bg, minHeight: "100vh", fontFamily: SANS, color: C.text, overflow: "hidden",
    }}>
      <GridBg />
      {children}
    </div>
  );
}
