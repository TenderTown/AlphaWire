"use client";
import { C, MONO, SANS } from "../../lib/constants";
import { Nav, Btn, PageWrapper, EmailCapture, Footer } from "../../components/ui";

function Check() {
  return <span style={{ color: C.accent, marginRight: 6, fontSize: 13 }}>✓</span>;
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
            Your Assessment Is <span style={{ color: C.accent }}>Free</span>
          </h1>
          <p style={{ fontSize: 15, color: C.dim, maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
            Take the full assessment and see your archetype at no cost.
            Unlock detailed analysis when you&apos;re ready.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          <Tier
            name="FREE ASSESSMENT"
            price="0"
            desc="Take the full 70-question assessment and discover your trader archetype."
            features={[
              "Complete 6-section assessment",
              "9-dimension radar chart",
              "Archetype identification",
              "Shareable results",
            ]}
            cta="TAKE THE TEST"
            href="/assessment"
          />
          <Tier
            badge="MOST POPULAR"
            highlight
            name="FULL PROFILE REPORT"
            price="97"
            desc="Complete analysis of your trading psychology with actionable recommendations."
            features={[
              "Everything in Free, plus:",
              "Exact numerical dimension scores",
              "Full archetype deep-dive",
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
            desc="Full report plus custom TradingView indicators calibrated to your exact profile."
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
            { q: "How long does the assessment take?", a: "About 12 minutes. 70 questions across 6 sections. No trading knowledge required — we measure psychology, not skill." },
            { q: "Is the assessment really free?", a: "Yes. You get your full radar chart and archetype name at no cost. The paid report unlocks detailed scores, strategy recommendations, and development protocols." },
            { q: "What are the TradingView indicators?", a: "Custom Pine Script v5 indicators calibrated to your specific profile — alert thresholds, position sizing, regime detection, and discipline tracking all tuned to your wiring." },
            { q: "Is this financial advice?", a: "No. Alphawire is an educational and self-awareness tool. It does not provide financial advice or trading signals. You are responsible for your own trading decisions." },
            { q: "Can I retake the assessment?", a: "Yes, as many times as you want. Your profile may shift slightly as you develop, which is why periodic retesting can be valuable." },
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
