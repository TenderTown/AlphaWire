"use client";
import { C, MONO, SANS, DIMS, ARCHETYPES } from "../../lib/constants";
import { Nav, Btn, PageWrapper, Footer } from "../../components/ui";
import { ARCHETYPE_DETAILS } from "../../lib/archetype-data";

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 10 }}>
            PROFILE MAPPING
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 12 }}>
            The 20 <span style={{ color: C.accent }}>Trader Archetypes</span>
          </h1>
          <p style={{ fontSize: 15, color: C.dim, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            Every trader maps to one of 20 primary archetypes based on their 9-dimension profile.
            Take the assessment to discover yours — along with your full profile analysis.
          </p>
        </div>

        {/* Archetype grid — teaser only */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginBottom: 40 }}>
          {ARCHETYPES.map((a, i) => (
            <div key={i} style={{
              padding: 18, background: C.bgCard, borderRadius: 12,
              border: `1px solid ${C.border}`, textAlign: "left",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: a.color, flexShrink: 0 }} />
                <span style={{ fontWeight: 700, fontSize: 14, color: a.color }}>{a.name}</span>
              </div>
              <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.4, marginBottom: 12 }}>
                {ARCHETYPE_DETAILS[i].tagline}
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                fontFamily: MONO, fontSize: 9, color: C.muted, letterSpacing: 1,
              }}>
                <span>FULL PROFILE IN REPORT</span>
              </div>
            </div>
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
            Your Archetype, <span style={{ color: C.accent }}>Fully Decoded</span>
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 10, maxWidth: 650, margin: "0 auto 24px", textAlign: "left",
          }}>
            {[
              { t: "9-Dimension Radar Chart", d: "Your exact scores across every dimension" },
              { t: "Strategy Alignment", d: "Optimal timeframe, sizing, and approach" },
              { t: "Tension Analysis", d: "Where your dimensions conflict" },
              { t: "Risk Prescription", d: "Personalized rules for your wiring" },
              { t: "Development Protocol", d: "Exercises to strengthen weak areas" },
              { t: "Trader Operating Manual", d: "Your personalized rulebook" },
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
            DISCOVER YOUR ARCHETYPE
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
