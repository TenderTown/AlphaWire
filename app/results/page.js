"use client";
import ShareOnXButton from "../../components/ShareOnXButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { C, MONO, SANS, DIMS, ARCHETYPES } from "../../lib/constants";
import { Nav, Btn, Radar, PageWrapper, EmailCapture, Footer } from "../../components/ui";

function buildStripeUrl(base, scores, archIdx) {
  const data = encodeURIComponent(JSON.stringify({ s: scores, a: archIdx }));
  return `${base}?client_reference_id=${data}`;
}

export default function ResultsPage() {
  const router = useRouter();
  const [scores, setScores] = useState(null);
  const [archIdx, setArchIdx] = useState(null);

  useEffect(() => {
    try {
      const s = JSON.parse(sessionStorage.getItem("aw_scores"));
      const a = parseInt(sessionStorage.getItem("aw_arch"));
      if (s && !isNaN(a)) { setScores(s); setArchIdx(a); }
      else { router.push("/assessment"); }
    } catch { router.push("/assessment"); }
  }, [router]);

  if (!scores || archIdx === null) {
    return (
      <PageWrapper>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <p style={{ fontFamily: MONO, fontSize: 13, color: C.dim }}>Loading your profile...</p>
        </div>
      </PageWrapper>
    );
  }

  const arch = ARCHETYPES[archIdx];
  const link97 = buildStripeUrl("https://buy.stripe.com/00w14p3Vw38G6rHfu10x201", scores, archIdx);
  const link247 = buildStripeUrl("https://buy.stripe.com/7sY5kF63EbFc6rHdlT0x200", scores, archIdx);

  return (
    <PageWrapper>
      <Nav
        links={[
          { href: "/about", label: "METHODOLOGY" },
          { href: "/archetypes", label: "ARCHETYPES" },
        ]}
        cta={{ href: "/", label: "HOME" }}
      />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "36px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 32, animation: "fadeUp 0.6s ease both" }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.dim, letterSpacing: 2, marginBottom: 10 }}>
            YOUR ALPHAWIRE PROFILE
          </div>
          <div style={{ fontSize: 52, marginBottom: 8 }}>{arch.icon}</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1px", color: arch.color }}>
            {arch.name}
          </h1>
        </div>
        <div style={{
          display: "flex", justifyContent: "center", marginBottom: 32,
          animation: "fadeUp 0.6s 0.15s ease both",
        }}>
          <div style={{
            background: C.bgCard, borderRadius: 14,
            border: `1px solid ${C.border}`, padding: 24,
            display: "inline-flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 12 }}>
              YOUR 9-DIMENSION MAP
            </div>
            <Radar scores={scores} size={280} />
          </div>
        </div>
        <div style={{ animation: "fadeUp 0.6s 0.3s ease both" }}>
          <div style={{
            background: C.bgCard, borderRadius: 12, border: `1px solid ${C.border}`,
            padding: 20, marginBottom: 16, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 0%, ${C.bg}ee 40%)`, zIndex: 2 }} />
            <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 12 }}>
              DIMENSION SCORES
            </div>
            {DIMS.map(d => (
              <div key={d.key} style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: d.color, fontFamily: MONO }}>{d.key}</span>
                  <span style={{ fontSize: 10, color: C.muted, fontFamily: MONO }}>🔒</span>
                </div>
                <div style={{ height: 5, background: C.border, borderRadius: 3 }} />
              </div>
            ))}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)", zIndex: 3,
              fontFamily: MONO, fontSize: 12, color: C.accent, fontWeight: 700, letterSpacing: 1,
            }}>
              UNLOCK FULL SCORES
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { t: "Profile Description", d: "What your archetype means, your natural trading style, edge, and blind spots", i: "📋" },
              { t: "Dimension Scores", d: "Exact numerical scores across all 9 dimensions with zone classifications", i: "📊" },
              { t: "Strategy Alignment", d: "Optimal timeframe, position sizing, and strategy type for your profile", i: "🎯" },
              { t: "Risk Prescription", d: "Personalized risk rules based on your Burnout Risk and Stability scores", i: "🛡️" },
              { t: "Tension Analysis", d: "Where your dimensions conflict and how to manage the friction", i: "⚡" },
              { t: "Regime Compatibility", d: "Which market environments favor your profile and when to sit out", i: "🌊" },
              { t: "Development Protocol", d: "Specific exercises to strengthen your weak dimensions over time", i: "📈" },
              { t: "Trader Operating Manual", d: "Your personalized rulebook — the document you trade by every day", i: "📖" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: 14, background: C.bgCard, borderRadius: 10,
                border: `1px solid ${C.border}`, position: "relative",
              }}>
                <div style={{ fontSize: 16, marginBottom: 5 }}>{item.i}</div>
                <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{item.t}</div>
                <div style={{ fontSize: 11, color: C.dim, lineHeight: 1.4 }}>{item.d}</div>
                <div style={{ position: "absolute", top: 8, right: 8, fontSize: 12, opacity: 0.4 }}>🔒</div>
              </div>
            ))}
          </div>
          <div style={{
            background: `linear-gradient(135deg, ${C.bgCard}, ${C.accent}08)`,
            borderRadius: 14, border: `1px solid ${C.accent}30`, padding: 32, textAlign: "center",
          }}>
            <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.cyan, letterSpacing: 2, marginBottom: 10 }}>
              BUILT FOR YOUR EXACT WIRING
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
              Unlock Your Full <span style={{ color: C.accent }}>Alphawire Report</span>
            </h2>
            <p style={{ fontSize: 13, color: C.dim, maxWidth: 420, margin: "0 auto 20px", lineHeight: 1.5 }}>
              Complete profile analysis, strategy alignment, risk prescriptions, and
              custom TradingView indicators calibrated to your profile.
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
              maxWidth: 480, margin: "0 auto 20px", textAlign: "left",
            }}>
              {[
                { n: "Profile-Calibrated Alerts", d: "Entry signals tuned to your risk and conviction" },
                { n: "Dynamic Position Sizer", d: "Size calc based on your EV, ED and burnout risk" },
                { n: "Regime Detection Overlay", d: "Highlights markets matching your edge" },
                { n: "Discipline Scorecard", d: "Real-time rule adherence for your profile" },
              ].map((item, i) => (
                <div key={i} style={{ padding: 10, background: C.bg + "80", borderRadius: 6, border: `1px solid ${C.border}` }}>
                  <div style={{ fontWeight: 700, fontSize: 11, color: C.accent, marginBottom: 2 }}>{item.n}</div>
                  <div style={{ fontSize: 10, color: C.dim, lineHeight: 1.3 }}>{item.d}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={link97} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Btn primary>FULL REPORT — $97</Btn>
              </a>
              <a href={link247} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Btn>REPORT + TV INDICATORS — $247</Btn>
              </a>
            </div>
            <p style={{ fontSize: 10, color: C.muted, marginTop: 12, fontFamily: MONO }}>
              Instant delivery · Pine Script v5 · Not financial advice
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <ShareOnXButton
              text={`I'm "${arch.name}" — just mapped my trading psychology across 9 dimensions on AlphaWire. Free assessment, no email needed.`}
              url="https://alpha-wire.vercel.app"
            />
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "20px 24px 40px", position: "relative", zIndex: 5 }}>
        <EmailCapture context="results" />
      </div>
      <Footer />
    </PageWrapper>
  );
}
