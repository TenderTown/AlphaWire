"use client";
import { C, MONO, SANS, DIMS, ARCHETYPES } from "../../lib/constants";
import { Nav, Btn, Radar, PageWrapper, Footer } from "../../components/ui";
import { ARCHETYPE_DETAILS } from "../../lib/archetype-data";

/* Mini radar — no labels, just the shape fingerprint */
function MiniRadar({ scores, size = 110, color }) {
  const cx = size / 2, cy = size / 2, r = size * 0.40;
  const n = DIMS.length;
  const pt = (i, val) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return [cx + ((val / 10) * r) * Math.cos(a), cy + ((val / 10) * r) * Math.sin(a)];
  };
  const dp = DIMS.map((d, i) => pt(i, scores[d.key] || 5));
  const path = dp.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + "Z";
  const gid = `mrg-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.5, 1.0].map((l, li) => (
        <polygon key={li}
          points={DIMS.map((_, i) => pt(i, l * 10).join(",")).join(" ")}
          fill="none" stroke={C.border} strokeWidth={li === 1 ? 0.6 : 0.3} opacity={0.4}
        />
      ))}
      {DIMS.map((_, i) => {
        const [ex, ey] = pt(i, 10);
        return <line key={i} x1={cx} y1={cy} x2={ex} y2={ey} stroke={C.border} strokeWidth={0.3} opacity={0.2} />;
      })}
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color || C.accent} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color || C.cyan} stopOpacity={0.08} />
        </linearGradient>
      </defs>
      <path d={path} fill={`url(#${gid})`} stroke={color || C.accent} strokeWidth={1.5} />
      {dp.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={2.5} fill={DIMS[i].color} stroke={C.bg} strokeWidth={1} />
      ))}
    </svg>
  );
}

function ArchetypeCard({ arch, detail }) {
  return (
    <div style={{
      padding: 20, background: C.bgCard, borderRadius: 14,
      border: `1px solid ${C.border}`, textAlign: "left",
      display: "flex", gap: 16, alignItems: "flex-start",
    }}>
      <div style={{ flexShrink: 0 }}>
        <MiniRadar scores={detail.scores} size={110} color={arch.color} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: arch.color, flexShrink: 0 }} />
          <span style={{ fontWeight: 700, fontSize: 15, color: arch.color }}>{arch.name}</span>
        </div>
        <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5, marginBottom: 10 }}>
          {detail.tagline}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span style={{
            fontFamily: MONO, fontSize: 9, color: C.text, letterSpacing: 0.5,
            padding: "3px 8px", background: C.bg, borderRadius: 4, border: `1px solid ${C.border}`,
          }}>
            {detail.timeframe}
          </span>
          <span style={{
            fontFamily: MONO, fontSize: 9, color: C.text, letterSpacing: 0.5,
            padding: "3px 8px", background: C.bg, borderRadius: 4, border: `1px solid ${C.border}`,
          }}>
            {detail.sizing}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ArchetypesPage() {
  return (
    <PageWrapper>
      <Nav
        links={[
          { href: "/", label: "HOME" },
          { href: "/about", label: "METHODOLOGY" },
          { href: "/pricing", label: "PRICING" },
        ]}
        cta={{ href: "/assessment", label: "TAKE THE TEST" }}
      />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 10 }}>
            INNATE WIRING PROFILES
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 12 }}>
            The 20 <span style={{ color: C.accent }}>Trader Archetypes</span>
          </h1>
          <p style={{ fontSize: 15, color: C.dim, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            Every trader maps to one of 20 primary archetypes based on their innate 9-dimension wiring.
            These aren&apos;t labels you choose — they&apos;re patterns you were born with.
          </p>
        </div>

        {/* Archetype grid with radar fingerprints */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 14, marginBottom: 48 }}>
          {ARCHETYPES.map((a, i) => (
            <ArchetypeCard key={i} arch={a} detail={ARCHETYPE_DETAILS[i]} />
          ))}
        </div>

        {/* What the report unlocks */}
        <div style={{
          background: `linear-gradient(135deg, ${C.bgCard}, ${C.accent}08)`,
          borderRadius: 14, border: `1px solid ${C.accent}30`,
          padding: 32, textAlign: "center", marginBottom: 40,
        }}>
          <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.cyan, letterSpacing: 2, marginBottom: 10 }}>
            WHAT YOUR REPORT UNLOCKS
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
            Your Wiring, <span style={{ color: C.accent }}>Fully Decoded</span>
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 10, maxWidth: 650, margin: "0 auto 24px", textAlign: "left",
          }}>
            {[
              { t: "9-Dimension Wiring Map", d: "Your exact innate scores across every dimension" },
              { t: "Strategy Alignment", d: "Optimal timeframe, sizing, and approach for your wiring" },
              { t: "Strain Map", d: "Where you're fighting your innate nature" },
              { t: "Tension Analysis", d: "Where your hardwired dimensions naturally conflict" },
              { t: "Risk Prescription", d: "Personalized rules built for your wiring" },
              { t: "Trader Operating Manual", d: "Your personalized rulebook for the trader you actually are" },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: 12, background: C.bg + "80", borderRadius: 8,
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 2 }}>{item.t}</div>
                <div style={{ fontSize: 10, color: C.dim, lineHeight: 1.3 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Btn primary href="/assessment" style={{ fontSize: 15, padding: "16px 48px" }}>
            MAP YOUR WIRING
          </Btn>
          <p style={{ fontFamily: MONO, fontSize: 10, color: C.muted, marginTop: 10 }}>
            12 minutes · Free assessment · Full report available after
          </p>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  );
}
