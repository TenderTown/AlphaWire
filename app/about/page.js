"use client";
import { C, MONO, SANS, DIMS } from "../../lib/constants";
import { Nav, Btn, PageWrapper, EmailCapture, Footer } from "../../components/ui";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 2, marginBottom: 12 }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, color: C.dim, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <Nav
        links={[
          { href: "/", label: "HOME" },
          { href: "/archetypes", label: "ARCHETYPES" },
          { href: "/pricing", label: "PRICING" },
        ]}
        cta={{ href: "/assessment", label: "TAKE THE TEST" }}
      />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 10 }}>METHODOLOGY</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 16 }}>
            The Science Behind <span style={{ color: C.accent }}>Alphawire</span>
          </h1>
          <p style={{ fontSize: 15, color: C.dim, lineHeight: 1.7 }}>
            Alphawire is a psychometric assessment system that measures innate behavioral traits —
            not trading knowledge, not market experience, not learned habits. We measure who you are,
            then map those traits to how you should trade.
          </p>
        </div>
        <Section title="CORE PHILOSOPHY">
          <p>
            Most trading education focuses on the wrong variable. It teaches what to trade — chart patterns,
            indicators, strategies. But the primary determinant of trading success isn't knowledge. It's
            psychology. Two traders with identical strategies will produce radically different results because
            their innate psychological wiring differs.
          </p>
          <p>
            The trader who fights their nature loses. A natural scalper forced into position trading will
            self-destruct through impatience. A natural stoic forced into high-frequency trading will
            underperform through disengagement. Alphawire eliminates this misalignment.
          </p>
        </Section>
        <Section title="WHAT WE MEASURE">
          <p>
            Alphawire measures nine innate behavioral dimensions. These are traits rooted in temperament
            and personality — characteristics that develop in childhood and remain remarkably stable
            throughout life. We do not measure trading skill, market knowledge, or experience level.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DIMS.map(d => (
              <div key={d.key} style={{
                display: "flex", gap: 12, padding: "12px 14px",
                background: C.bgCard, borderRadius: 8, border: `1px solid ${C.border}`,
              }}>
                <div style={{ minWidth: 38, textAlign: "center" }}>
                  <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 800, color: d.color, marginTop: 2 }}>{d.key}</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>
                    {d.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="HOW IT WORKS">
          <p>
            The assessment takes approximately 12 minutes and uses multiple question formats to
            triangulate your true behavioral tendencies — minimizing the ability to "game"
            the results or answer aspirationally.
          </p>
          <p>
            Your responses are scored across all nine dimensions to produce a unique profile.
            This profile is then mapped to one of 20 trader archetypes, each with specific
            strategy, risk management, and development recommendations.
          </p>
        </Section>
        <Section title="VALIDATION & ETHICS">
          <div style={{
            padding: 14, background: C.bgCard, borderRadius: 8, border: `1px solid ${C.border}`,
          }}>
            <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.6 }}>
              <strong style={{ color: C.text }}>Ethical Commitment:</strong> Alphawire does not guarantee trading profits.
              It optimizes the psychological alignment between the trader and their approach. Trading involves risk of
              loss regardless of psychological profile.
            </p>
          </div>
        </Section>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn primary href="/assessment" style={{ fontSize: 15, padding: "16px 48px" }}>
            TAKE THE ASSESSMENT
          </Btn>
        </div>
      </div>
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 24px 60px", position: "relative", zIndex: 5 }}>
        <EmailCapture context="about" />
      </div>

      <Footer />
    </PageWrapper>
  );
}
