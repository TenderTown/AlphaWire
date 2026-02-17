"use client";
import { useState } from "react";
import { C, MONO, SANS, DIMS, ARCHETYPES } from "../../lib/constants";
import { Nav, Btn, Radar, PageWrapper, Footer } from "../../components/ui";
import { ARCHETYPE_DETAILS } from "../../lib/archetype-data";

function Card({ label, value, color }) {
  return (
    <div style={{
      padding: "10px 12px", background: C.bgCard, borderRadius: 8,
      border: `1px solid ${C.border}`,
    }}>
      <div style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: C.dim, letterSpacing: 1, marginBottom: 3 }}>
        {label}
      </div>
      <div style={{ fontSize: 12, color: color || C.text, fontWeight: 600, lineHeight: 1.4 }}>
        {value}
      </div>
    </div>
  );
}

export default function ArchetypesPage() {
  const [selected, setSelected] = useState(null);

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
            These aren&apos;t boxes — they&apos;re starting points for personalized alignment.
          </p>
        </div>

        {/* Archetype selector pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
          {ARCHETYPES.map((a, i) => (
            <button key={i} onClick={() => setSelected(selected === i ? null : i)} style={{
              padding: "8px 14px", borderRadius: 20, cursor: "pointer",
              background: selected === i ? a.color + "20" : C.bgCard,
              border: `1px solid ${selected === i ? a.color : C.border}`,
              color: selected === i ? a.color : C.text,
              fontSize: 12, fontWeight: selected === i ? 700 : 500,
              display: "flex", alignItems: "center", gap: 5,
              transition: "all 0.15s",
            }}>
              <span style={{ fontSize: 13 }}>{a.icon}</span>
              {a.name}
            </button>
          ))}
        </div>

        {/* Selected archetype detail */}
        {selected !== null && (
          <div style={{
            background: C.bgCard, borderRadius: 16, border: `1px solid ${C.border}`,
            padding: 28, marginBottom: 40, animation: "fadeUp 0.3s ease both",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>{ARCHETYPES[selected].icon}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: ARCHETYPES[selected].color, marginBottom: 4 }}>
                {ARCHETYPES[selected].name}
              </h2>
              <p style={{ fontSize: 14, color: C.dim, textAlign: "center", maxWidth: 500 }}>
                {ARCHETYPE_DETAILS[selected].tagline}
              </p>
            </div>

            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
              {/* Radar */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 10 }}>
                  DIMENSION PROFILE
                </div>
                <Radar scores={ARCHETYPE_DETAILS[selected].scores} size={220} />
              </div>

              {/* Score bars */}
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 10 }}>
                  DIMENSION SCORES
                </div>
                {DIMS.map(d => {
                  const val = ARCHETYPE_DETAILS[selected].scores[d.key] || 5;
                  return (
                    <div key={d.key} style={{ marginBottom: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                        <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: d.color }}>{d.key}</span>
                        <span style={{ fontFamily: MONO, fontSize: 10, color: C.dim }}>{val.toFixed(1)}</span>
                      </div>
                      <div style={{ height: 5, background: C.border, borderRadius: 3 }}>
                        <div style={{
                          height: "100%", width: `${(val / 10) * 100}%`,
                          background: d.color, borderRadius: 3, transition: "width 0.4s ease",
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, marginBottom: 16 }}>
              <Card label="TRADING STYLE" value={ARCHETYPE_DETAILS[selected].style} />
              <Card label="TIMEFRAME" value={ARCHETYPE_DETAILS[selected].timeframe} color={C.accent} />
              <Card label="POSITION SIZING" value={ARCHETYPE_DETAILS[selected].sizing} color={C.cyan} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{
                padding: "12px 14px", background: C.bg, borderRadius: 8,
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: C.accent, letterSpacing: 1, marginBottom: 4 }}>
                  STRENGTH
                </div>
                <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{ARCHETYPE_DETAILS[selected].strength}</div>
              </div>
              <div style={{
                padding: "12px 14px", background: C.bg, borderRadius: 8,
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: C.red, letterSpacing: 1, marginBottom: 4 }}>
                  PRIMARY RISK
                </div>
                <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{ARCHETYPE_DETAILS[selected].risk}</div>
              </div>
              <div style={{
                padding: "12px 14px", background: C.bg, borderRadius: 8,
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: C.cyan, letterSpacing: 1, marginBottom: 4 }}>
                  KEY COACHING
                </div>
                <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{ARCHETYPE_DETAILS[selected].coaching}</div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Btn primary href="/assessment" style={{ fontSize: 13, padding: "12px 32px" }}>
                DISCOVER YOUR ARCHETYPE
              </Btn>
            </div>
          </div>
        )}

        {/* Grid of all archetypes when none selected */}
        {selected === null && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {ARCHETYPES.map((a, i) => (
              <button key={i} onClick={() => setSelected(i)} style={{
                padding: 18, background: C.bgCard, borderRadius: 12,
                border: `1px solid ${C.border}`, cursor: "pointer",
                textAlign: "left", transition: "all 0.15s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 22 }}>{a.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: a.color }}>{a.name}</span>
                </div>
                <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.4, marginBottom: 10 }}>
                  {ARCHETYPE_DETAILS[i].tagline}
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{
                    fontFamily: MONO, fontSize: 9, color: C.muted,
                    padding: "3px 6px", background: C.bg, borderRadius: 4,
                  }}>{ARCHETYPE_DETAILS[i].timeframe}</span>
                  <span style={{
                    fontFamily: MONO, fontSize: 9, color: C.muted,
                    padding: "3px 6px", background: C.bg, borderRadius: 4,
                  }}>{ARCHETYPE_DETAILS[i].sizing}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn primary href="/assessment" style={{ fontSize: 15, padding: "16px 48px" }}>
            TAKE THE FREE ASSESSMENT
          </Btn>
          <p style={{ fontFamily: MONO, fontSize: 10, color: C.muted, marginTop: 10 }}>
            12 minutes · No email required
          </p>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  );
}
