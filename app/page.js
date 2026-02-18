"use client";
import { useState, useEffect } from "react";
import { C, MONO, SANS, DIMS, ARCHETYPES } from "../lib/constants";
import { Nav, Btn, Radar, PageWrapper, EmailCapture, Footer } from "../components/ui";

const SAMPLE_SCORES = { RT: 7.2, ED: 4.8, EV: 3.1, AA: 8.5, TH: 6.0, CI: 7.4, AQ: 5.3, SO: 3.6, TS: 6.8 };

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <PageWrapper>
      <Nav
        links={[
          { href: "/about", label: "METHODOLOGY" },
          { href: "/archetypes", label: "ARCHETYPES" },
          { href: "/pricing", label: "PRICING" },
        ]}
        cta={{ href: "/assessment", label: "TAKE THE TEST" }}
      />

      {/* HERO */}
      <div style={{
        maxWidth: 800, margin: "0 auto", padding: "80px 24px 60px",
        textAlign: "center", position: "relative", zIndex: 5,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 3, marginBottom: 16 }}>
          PSYCHOMETRIC TRADING ASSESSMENT
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 20 }}>
          TA is easy.<br />
          <span style={{ color: C.accent }}>Knowing yourself</span> is hard.
        </h1>
        <p style={{ fontSize: 17, color: C.dim, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
          9 psychological dimensions. 20 trader archetypes. One profile built for your exact wiring.
          Stop fighting your nature — trade with it.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn primary href="/assessment" style={{ fontSize: 15, padding: "16px 48px" }}>
            TAKE THE FREE ASSESSMENT
          </Btn>
          <Btn href="/about">HOW IT WORKS</Btn>
        </div>
        <p style={{ fontFamily: MONO, fontSize: 10, color: C.muted, marginTop: 14 }}>
          Free · 12 minutes · No email required
        </p>
      </div>

      {/* SAMPLE RADAR */}
      <div style={{
        display: "flex", justifyContent: "center", padding: "0 24px 60px",
        position: "relative", zIndex: 5,
        opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.3s",
      }}>
        <div style={{
          background: C.bgCard, borderRadius: 16, border: `1px solid ${C.border}`,
          padding: 28, display: "inline-flex", flexDirection: "column", alignItems: "center",
        }}>
          <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 14 }}>
            SAMPLE PROFILE — THE CONTRARIAN
          </div>
          <Radar scores={SAMPLE_SCORES} size={260} />
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.muted, marginTop: 10 }}>
            Every trader&apos;s profile is unique
          </div>
        </div>
      </div>

      {/* 9 DIMENSIONS */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 8 }}>WHAT WE MEASURE</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px" }}>9 Dimensions of Trading Psychology</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
          {DIMS.map(d => (
            <div key={d.key} style={{
              padding: "16px 14px", background: C.bgCard, borderRadius: 10,
              border: `1px solid ${C.border}`, transition: "border-color 0.2s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{d.icon}</span>
                <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 800, color: d.color }}>{d.key}</span>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{d.name}</span>
              </div>
              <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 60px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 8 }}>PROCESS</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px" }}>How It Works</h2>
        </div>
        {[
          { n: "01", t: "Take the Assessment", d: "70 questions across 6 sections. No trading knowledge needed — we measure who you are, not what you know." },
          { n: "02", t: "Discover Your Archetype", d: "See which of 20 trader archetypes matches your psychological wiring — instantly, for free." },
          { n: "03", t: "Unlock Your Full Report", d: "Get your complete 9-dimension breakdown, strategy alignment, risk prescriptions, and personalized Trader Operating Manual." },
          { n: "04", t: "Trade Your Wiring", d: "Stop fighting your psychology. Use your profile to choose the right timeframe, sizing, and strategy for your nature." },
        ].map((step, i) => (
          <div key={i} style={{
            display: "flex", gap: 16, padding: "18px 0",
            borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
          }}>
            <div style={{ fontFamily: MONO, fontSize: 24, fontWeight: 800, color: C.accent, opacity: 0.3, minWidth: 40 }}>{step.n}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{step.t}</div>
              <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{step.d}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ARCHETYPE PREVIEW */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 8 }}>20 ARCHETYPES</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-1px" }}>Which One Are You?</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {ARCHETYPES.map((a, i) => (
            <div key={i} style={{
              padding: "10px 16px", background: C.bgCard, borderRadius: 20,
              border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ fontSize: 14 }}>{a.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: a.color }}>{a.name}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Btn primary href="/assessment" style={{ fontSize: 15, padding: "16px 48px" }}>
            DISCOVER YOUR ARCHETYPE
          </Btn>
        </div>
      </div>

      {/* EMAIL CAPTURE */}
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "0 24px 60px", position: "relative", zIndex: 5 }}>
        <EmailCapture context="homepage" />
      </div>

      <Footer />
    </PageWrapper>
  );
}
