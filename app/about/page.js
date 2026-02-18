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
            the hardwired psychological patterns you&apos;ve carried since early childhood. We don&apos;t measure
            trading knowledge, market experience, or learned habits. We measure who you are at a
            fundamental level, then map those traits to how you should trade.
          </p>
        </div>

        <Section title="CORE PRINCIPLE: WIRING IS PERMANENT">
          <p>
            The behavioral traits that determine trading success — risk tolerance, emotional reactivity,
            patience, discipline, independence — are innate. Research in behavioral genetics and developmental
            psychology consistently shows that core personality traits are largely established by age 6 and
            remain remarkably stable across the entire lifespan.
          </p>
          <p>
            A 22-year-old novice and a 55-year-old veteran with the same innate wiring will produce the same
            Alphawire profile. Experience changes what you know. It does not change who you are. The child who
            couldn&apos;t sit still becomes the adult who overrides stop losses. The child who waited patiently for
            dessert becomes the adult who holds through drawdowns.
          </p>
          <p>
            This is not a limitation — it&apos;s a liberation. You don&apos;t need to change yourself. You need to
            understand yourself and build a trading approach that works with your nature instead of against it.
          </p>
        </Section>

        <Section title="WHY MOST TRADING EDUCATION FAILS">
          <p>
            Most trading education focuses on the wrong variable. It teaches what to trade — chart patterns,
            indicators, strategies. But the primary determinant of trading success isn&apos;t knowledge. It&apos;s
            psychology. Two traders with identical strategies will produce radically different results because
            their innate psychological wiring differs.
          </p>
          <p>
            The trader who fights their nature loses. A natural scalper forced into position trading will
            self-destruct through impatience. A natural stoic forced into high-frequency trading will
            underperform through disengagement. Alphawire eliminates this misalignment by identifying your
            wiring first, then prescribing the strategy second.
          </p>
        </Section>

        <Section title="WHAT WE MEASURE: 9 INNATE DIMENSIONS">
          <p>
            Alphawire measures nine innate behavioral dimensions. These are traits rooted in temperament
            and personality — characteristics that develop in early childhood and remain stable throughout
            life. We do not measure trading skill, market knowledge, or experience level. A first-time
            trader and a 20-year veteran answer the same questions, because the questions measure
            behavioral wiring, not market competence.
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

        <Section title="HOW THE ASSESSMENT WORKS">
          <p>
            The assessment takes approximately 12 minutes and uses multiple question formats
            specifically designed to measure innate behavioral patterns rather than aspirational
            self-image or learned behavior.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { n: "Word Selection", w: "Primary instrument", d: "Select trait-level adjectives that describe who you've always been. This format — adapted from established psychometric methodology — taps your innate self-concept with the least aspirational bias." },
              { n: "Behavioral Patterns", w: "Secondary signal", d: "Questions anchored in lifetime and childhood behavior patterns, not trading-specific scenarios. How you've always responded to uncertainty, structure, and social dynamics." },
              { n: "Forced-Choice Pairs", w: "Bias-resistant", d: "Choose between two statements. This format resists social desirability bias — you can't pick the 'right' answer because both options are neutral." },
              { n: "Self-Placement Spectrums", w: "Tiebreaker", d: "Where you place yourself on each dimension. Used as a tiebreaker, not a primary signal, since self-rating is most vulnerable to aspirational bias." },
              { n: "Ideal Trader Profile", w: "Strain diagnostic", d: "How you'd describe the ideal trader. This doesn't change your innate scores — it reveals where you're fighting your own wiring. The gap becomes your Strain Map." },
            ].map((item, i) => (
              <div key={i} style={{
                padding: 14, background: C.bgCard, borderRadius: 8, border: `1px solid ${C.border}`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 13 }}>{item.n}</span>
                  <span style={{ fontFamily: MONO, fontSize: 9, color: C.accent, letterSpacing: 1 }}>{item.w.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="THE STRAIN MAP">
          <p>
            One of Alphawire&apos;s most powerful insights is the Strain Map — the measured gap between
            your innate wiring and the trader you&apos;re trying to be. When this gap is large, you&apos;re burning
            cognitive and emotional energy fighting your own nature. Eventually, under pressure, your
            innate wiring wins — and that&apos;s when the worst trading mistakes happen.
          </p>
          <p>
            A trader with innate Risk Temperament of 3.0 who aspires to an 8.0 is a capital preserver
            trying to trade like a risk-seeker. Their biggest blowups will come from forcing aggressive
            positions that feel unnatural. The Strain Map reveals these misalignments so you can stop
            fighting and start aligning.
          </p>
        </Section>

        <Section title="VALIDATION & ETHICS">
          <div style={{
            padding: 14, background: C.bgCard, borderRadius: 8, border: `1px solid ${C.border}`,
          }}>
            <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.6 }}>
              <strong style={{ color: C.text }}>No &quot;bad&quot; profiles:</strong> Every wiring pattern has strengths.
              There is no ideal trader personality. Value comes from alignment between your innate wiring and your
              trading approach, not from having a specific profile.
            </p>
          </div>
          <div style={{
            padding: 14, background: C.bgCard, borderRadius: 8, border: `1px solid ${C.border}`,
          }}>
            <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.6 }}>
              <strong style={{ color: C.text }}>Ethical commitment:</strong> Alphawire does not guarantee trading profits.
              It optimizes the psychological alignment between the trader and their approach. Trading involves risk of
              loss regardless of psychological profile.
            </p>
          </div>
        </Section>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn primary href="/assessment" style={{ fontSize: 15, padding: "16px 48px" }}>
            MAP YOUR WIRING
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
