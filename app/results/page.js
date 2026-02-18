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
  const [strain, setStrain] = useState(null);
  const [archIdx, setArchIdx] = useState(null);

  useEffect(() => {
    try {
      const s = JSON.parse(sessionStorage.getItem("aw_scores"));
      const st = JSON.parse(sessionStorage.getItem("aw_strain"));
      const a = parseInt(sessionStorage.getItem("aw_arch"));
      if (s && !isNaN(a)) { setScores(s); setStrain(st); setArchIdx(a); }
      else { router.push("/assessment"); }
    } catch { router.push("/assessment"); }
  }, [router]);

  if (!scores || archIdx === null) {
    return (
      <PageWrapper>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <p style={{ fontFamily: MONO, fontSize: 13, color: C.dim }}>Mapping your wiring...</p>
        </div>
      </PageWrapper>
    );
  }

  const arch = ARCHETYPES[archIdx];
  const link97 = buildStripeUrl("https://buy.stripe.com/00w14p3Vw38G6rHfu10x201", scores, archIdx);
  const link247 = buildStripeUrl("https://buy.stripe.com/7sY5kF63EbFc6rHdlT0x200", scores, archIdx);

  // Calculate highest strain dimension for teaser
  let maxStrainDim = null;
  if (strain) {
    let maxVal = 0;
    DIMS.forEach(d => {
      if ((strain[d.key] || 0) > maxVal) {
        maxVal = strain[d.key];
        maxStrainDim = d;
      }
    });
  }

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

        {/* Archetype reveal — name only */}
        <div style={{ textAlign: "center", marginBottom: 32, animation: "fadeUp 0.6s ease both" }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.dim, letterSpacing: 2, marginBottom: 10 }}>
            YOUR INNATE WIRING PROFILE
          </div>
          <div style={{ width: 40, height: 3, background: arch.color, margin: "0 auto 16px", borderRadius: 2 }} />
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-1px", color: arch.color }}>
            {arch.name}
          </h1>
          <p style={{ fontSize: 13, color: C.dim, marginTop: 8, maxWidth: 440, margin: "8px auto 0" }}>
            This is who you&apos;ve been since childhood — your hardwired behavioral profile mapped across 9 dimensions.
            Unlock your full report to see what it means for your trading.
          </p>
        </div>

        {/* LOCKED Radar Chart */}
        <div style={{
          display: "flex", justifyContent: "center", marginBottom: 32,
          animation: "fadeUp 0.6s 0.15s ease both",
        }}>
          <div style={{
            background: C.bgCard, borderRadius: 14,
            border: `1px solid ${C.border}`, padding: 24,
            display: "inline-flex", flexDirection: "column", alignItems: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 12 }}>
              YOUR 9-DIMENSION WIRING MAP
            </div>
            {/* Blurred radar */}
            <div style={{ filter: "blur(12px)", opacity: 0.4, pointerEvents: "none" }}>
              <Radar scores={scores} size={280} />
            </div>
            {/* Lock overlay */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              background: `radial-gradient(ellipse at center, ${C.bg}90 0%, transparent 70%)`,
              zIndex: 2,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" style={{ marginBottom: 8 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: 1 }}>
                UNLOCK YOUR INNATE PROFILE
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: C.dim, marginTop: 4 }}>
                Your wiring has been mapped — purchase to reveal
              </div>
            </div>
          </div>
        </div>

        {/* What's in the report */}
        <div style={{ animation: "fadeUp 0.6s 0.3s ease both" }}>

          {/* Strain teaser */}
          {maxStrainDim && strain[maxStrainDim.key] > 2 && (
            <div style={{
              padding: 16, background: C.bgCard, borderRadius: 12,
              border: `1px solid ${C.orange}40`, marginBottom: 16,
            }}>
              <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.orange, letterSpacing: 1.5, marginBottom: 6 }}>
                STRAIN DETECTED
              </div>
              <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>
                Your biggest gap between innate wiring and aspirational self is in <strong style={{ color: maxStrainDim.color }}>{maxStrainDim.name}</strong>.
                This is where you&apos;re most likely fighting your own nature. Your full report includes a complete Strain Map showing every dimension where you&apos;re burning energy trying to be someone you&apos;re not.
              </p>
            </div>
          )}

          {/* Locked dimension scores */}
          <div style={{
            background: C.bgCard, borderRadius: 12, border: `1px solid ${C.border}`,
            padding: 20, marginBottom: 16, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 0%, ${C.bg}ee 40%)`, zIndex: 2 }} />
            <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 1.5, marginBottom: 12 }}>
              INNATE DIMENSION SCORES
            </div>
            {DIMS.map(d => (
              <div key={d.key} style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: d.color, fontFamily: MONO }}>{d.key}</span>
                  <span style={{ fontSize: 10, color: C.muted, fontFamily: MONO }}>LOCKED</span>
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

          {/* Locked feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { t: "Innate Profile Analysis", d: "What your hardwired archetype means — your natural trading style, edge, and blind spots" },
              { t: "9-Dimension Scores", d: "Your exact innate scores across all dimensions — the wiring you've carried since childhood" },
              { t: "Strain Map", d: "Where you're fighting your nature — the gap between who you are and who you're trying to trade as" },
              { t: "Strategy Alignment", d: "Optimal timeframe, position sizing, and strategy type matched to your innate wiring" },
              { t: "Risk Prescription", d: "Personalized risk rules based on your hardwired Burnout Risk and Stability scores" },
              { t: "Tension Analysis", d: "Where your innate dimensions naturally conflict and how to manage the friction" },
              { t: "Regime Compatibility", d: "Which market environments align with your wiring and when to sit out" },
              { t: "Trader Operating Manual", d: "Your personalized rulebook — built for the trader you actually are, not the one you wish you were" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: 14, background: C.bgCard, borderRadius: 10,
                border: `1px solid ${C.border}`, position: "relative",
              }}>
                <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{item.t}</div>
                <div style={{ fontSize: 11, color: C.dim, lineHeight: 1.4 }}>{item.d}</div>
                <div style={{ position: "absolute", top: 10, right: 10, fontFamily: MONO, fontSize: 8, color: C.muted, letterSpacing: 1 }}>LOCKED</div>
              </div>
            ))}
          </div>

          {/* CTA — purchase section */}
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
              Complete innate profile analysis, strain map, strategy alignment, risk prescriptions, and
              custom TradingView indicators calibrated to your hardwired profile.
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
              maxWidth: 480, margin: "0 auto 20px", textAlign: "left",
            }}>
              {[
                { n: "Profile-Calibrated Alerts", d: "Entry signals tuned to your innate risk and conviction" },
                { n: "Dynamic Position Sizer", d: "Size calc based on your hardwired EV, ED, and burnout risk" },
                { n: "Regime Detection Overlay", d: "Highlights markets matching your natural edge" },
                { n: "Discipline Scorecard", d: "Real-time rule adherence built for your wiring" },
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

          {/* Share on X */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <ShareOnXButton
              text={`I just discovered I'm "${arch.name}" — mapped my innate trading psychology across 9 dimensions on AlphaWire. What's your wiring?`}
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
