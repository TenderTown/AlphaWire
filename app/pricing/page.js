"use client";
import { C, MONO, SANS } from "../../lib/constants";
import { Nav, Btn, PageWrapper, EmailCapture, Footer } from "../../components/ui";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6, flexShrink: 0, marginTop: 1 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Tier({ badge, name, price, desc, features, cta, href, highlight }) {
  return (
    <div style={{
      padding: 28, background: highlight ? `linear-gradient(135deg, ${C.bgCard}, ${C.accent}06)` : C.bgCard,
      borderRadius: 14, border: `1px solid ${highlight ? C.accent + "40" : C.border}`,
      display: "flex", flexDirection: "column", position: "relative",
      ...(highlight ? { boxShadow: `0 0 30px ${C.accentGlow}` } : {}),
    }}>
      {badge && (
        <div style={{
          position: "absolute", top: -10, left: 20,
          background: C.accent, color: C.bg, fontFamily: MONO,
          fontSize: 9, fontWeight: 800, letterSpacing: 1.5,
          padding: "4px 12px", borderRadius: 10,
        }}>
          {badge}
        </div>
      )}
      <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 6 }}>
        {name}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
        <span style={{ fontSize: 36, fontWeight: 900 }}>${price}</span>
        <span style={{ fontFamily: MONO, fontSize: 11, color: C.muted }}>one-time</span>
      </div>
      <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.5, marginBottom: 20, flex: 1 }}>
        {desc}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {features.map((f, i) => (
          <div key={i} style={{ fontSize: 12, color: C.text, display: "flex", alignItems: "flex-start" }}>
            <Check />{f}
          </div>
        ))}
      </div>
      <Btn primary={highlight} href={href} style={{
        textAlign: "center", width: "100%", justifyContent: "center",
        fontSize: 13, padding: "14px 0",
      }}>
        {cta}
      </Btn>
    </div>
  );
}

export default function PricingPage() {
  return (
    <PageWrapper>
      <Nav
        links={[
          { href: "/", label: "HOME" },
          { href: "/about", label: "METHODOLOGY" },
          { href: "/archetypes", label: "ARCHETYPES" },
        ]}
        cta={{ href: "/assessment", label: "TAKE THE TEST", primary: true }}
      />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 10 }}>
            PRICING
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 12 }}>
            Map Your Wiring <span style={{ color: C.accent }}>For Free</span>
          </h1>
          <p style={{ fontSize: 15, color: C.dim, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
            Take the full assessment and discover your innate archetype at no cost.
            Unlock your complete wiring analysis when you&apos;re ready.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          <Tier
            name="FREE ASSESSMENT"
            price="0"
            desc="Take the full 70-question assessment and discover your innate trader archetype."
            features={[
              "Complete 6-section assessment",
              "Archetype identification",
              "Blurred wiring map preview",
              "Strain detection teaser",
              "Shareable results",
            ]}
            cta="MAP YOUR WIRING"
            href="/assessment"
          />
          <Tier
            badge="MOST POPULAR"
            highlight
            name="FULL WIRING REPORT"
            price="97"
            desc="Complete analysis of your innate trading psychology with actionable alignment recommendations."
            features={[
              "Everything in Free, plus:",
              "Exact innate dimension scores",
              "Full archetype deep-dive",
              "Complete Strain Map",
              "Strategy alignment matrix",
              "Risk management prescription",
              "Tension analysis between dimensions",
              "Regime compatibility scores",
              "Personal development protocol",
            ]}
            cta="GET FULL REPORT — $97"
            href="/assessment"
          />
          <Tier
            name="REPORT + TV INDICATORS"
            price="247"
            desc="Full wiring report plus custom TradingView indicators calibrated to your exact innate profile."
            features={[
              "Everything in Full Report, plus:",
              "Profile-calibrated alert system",
              "Dynamic position sizer",
              "Regime detection overlay",
              "Discipline scorecard indicator",
              "Pine Script v5 source code",
            ]}
            cta="GET REPORT + INDICATORS — $247"
            href="/assessment"
          />
        </div>

        {/* FAQ section */}
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 8 }}>
              QUESTIONS
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800 }}>Common Questions</h2>
          </div>
          {[
            { q: "How long does the assessment take?", a: "About 12 minutes. 70 questions across 6 sections. No trading knowledge required — we measure innate psychology, not skill or experience." },
            { q: "Is the assessment really free?", a: "Yes. You get your archetype name and a strain detection teaser at no cost. The paid report unlocks your exact dimension scores, full Strain Map, strategy alignment, and development protocols." },
            { q: "What makes this different from a personality quiz?", a: "Alphawire uses multi-format psychometric methodology — word selection, behavioral patterns, forced-choice pairs — specifically weighted to measure innate traits, not aspirational self-image. The scoring is weighted to minimize the formats most vulnerable to bias." },
            { q: "Will my profile change over time?", a: "Your innate wiring is stable. Core behavioral traits are largely set by early childhood and remain consistent across your lifespan. If you retake the assessment, minor score variations are normal, but your archetype and overall profile should remain consistent." },
            { q: "What is the Strain Map?", a: "The gap between your innate wiring and the trader you aspire to be. Large gaps mean you're burning energy fighting your own nature — and eventually, under pressure, your wiring wins. The Strain Map shows exactly where this tension exists." },
            { q: "What are the TradingView indicators?", a: "Custom Pine Script v5 indicators calibrated to your specific innate profile — alert thresholds, position sizing, regime detection, and discipline tracking all tuned to your hardwired tendencies." },
            { q: "Is this financial advice?", a: "No. Alphawire is an educational and self-awareness tool. It does not provide financial advice or trading signals. You are responsible for your own trading decisions." },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "16px 0",
              borderBottom: `1px solid ${C.border}`,
            }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.q}</div>
              <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EMAIL CAPTURE */}
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 24px 40px", position: "relative", zIndex: 5 }}>
        <EmailCapture context="pricing" />
      </div>

      <Footer />
    </PageWrapper>
  );
}
