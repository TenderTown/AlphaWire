"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { C, MONO, SANS, DIMS } from "../../lib/constants";
import { Nav, Btn, PageWrapper } from "../../components/ui";
import {
  WORDS_MOST, WORDS_LEAST, BEHAVIORAL_QS, PAIRS,
  SPECTRUMS, IDEAL_SPECTRUMS, calculateScores, matchArchetype,
} from "../../lib/assessment-data";

const SECTION_NAMES = ["Words", "Counter", "Patterns", "Either/Or", "Spectrum", "Ideal"];

export default function AssessmentPage() {
  const router = useRouter();
  const [section, setSection] = useState(0);
  const [wordsSelected, setWordsSelected] = useState(new Set());
  const [wordsLeast, setWordsLeast] = useState(new Set());
  const [behQ, setBehQ] = useState(0);
  const [behAns, setBehAns] = useState({});
  const [pairQ, setPairQ] = useState(0);
  const [pairAns, setPairAns] = useState({});
  const [specVals, setSpecVals] = useState({});
  const [idealVals, setIdealVals] = useState({});
  const [behFade, setBehFade] = useState(true);
  const [pairFade, setPairFade] = useState(true);

  const pct = ((section + 0.5) / 6) * 100;

  function canAdvance() {
    if (section === 0) return wordsSelected.size >= 10;
    if (section === 1) return wordsLeast.size >= 8;
    if (section === 2) return Object.keys(behAns).length >= BEHAVIORAL_QS.length;
    if (section === 3) return Object.keys(pairAns).length >= PAIRS.length;
    if (section === 4) return Object.keys(specVals).length >= SPECTRUMS.length;
    if (section === 5) return Object.keys(idealVals).length >= IDEAL_SPECTRUMS.length;
    return false;
  }

  function nextSection() {
    if (section < 5) {
      setSection(section + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const scores = calculateScores({ wordsSelected, wordsLeast, behAns, pairAns, specVals, idealVals });
      const archIdx = matchArchetype(scores);
      sessionStorage.setItem("aw_scores", JSON.stringify(scores));
      sessionStorage.setItem("aw_arch", String(archIdx));
      router.push("/results");
    }
  }

  const Shell = ({ title, subtitle, children }) => (
    <PageWrapper>
      <Nav
        onLogoClick={() => router.push("/")}
        right={
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {SECTION_NAMES.map((s, i) => (
                <div key={i} style={{
                  width: 8, height: 8, borderRadius: 4,
                  background: i < section ? C.accent : i === section ? C.accent + "80" : C.border,
                }} />
              ))}
            </div>
            <span style={{ fontFamily: MONO, fontSize: 11, color: C.dim }}>{section + 1}/6</span>
          </div>
        }
      />
      <div style={{ height: 3, background: C.border }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: `linear-gradient(90deg, ${C.accent}, ${C.cyan})`,
          transition: "width 0.5s ease", borderRadius: "0 2px 2px 0",
        }} />
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "36px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: 2, marginBottom: 6 }}>
            {title.toUpperCase()}
          </h2>
          <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.5 }}>{subtitle}</p>
        </div>
        {children}
        <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {section > 0 ? (
            <Btn onClick={() => { setSection(section - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>BACK</Btn>
          ) : <div />}
          <Btn primary disabled={!canAdvance()} onClick={nextSection}>
            {section === 5 ? "SEE MY PROFILE" : "CONTINUE"}
          </Btn>
        </div>
      </div>
    </PageWrapper>
  );

  if (section === 0) return (
    <Shell title="Word Selection" subtitle="Select 10-15 words that MOST naturally describe you — not who you want to be, but who you actually are.">
      <p style={{ fontFamily: MONO, fontSize: 11, color: wordsSelected.size >= 10 ? C.accent : C.dim, marginBottom: 16 }}>
        {wordsSelected.size} selected {wordsSelected.size < 10 ? `(need ${10 - wordsSelected.size} more)` : "✓"}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {WORDS_MOST.map((w, i) => {
          const sel = wordsSelected.has(i);
          return (
            <button key={i} onClick={() => {
              const next = new Set(wordsSelected);
              if (sel) next.delete(i); else if (next.size < 15) next.add(i);
              setWordsSelected(next);
            }} style={{
              padding: "8px 16px", borderRadius: 20,
              background: sel ? C.accent + "20" : C.bgCard,
              border: `1px solid ${sel ? C.accent : C.border}`,
              color: sel ? C.accent : C.text, fontSize: 13, fontWeight: sel ? 700 : 500,
              cursor: "pointer", transition: "all 0.15s",
            }}>{w.text}</button>
          );
        })}
      </div>
    </Shell>
  );

  if (section === 1) return (
    <Shell title="Counter-Profile" subtitle="Select 8-12 words that LEAST describe you — traits that feel most foreign to your nature.">
      <p style={{ fontFamily: MONO, fontSize: 11, color: wordsLeast.size >= 8 ? C.accent : C.dim, marginBottom: 16 }}>
        {wordsLeast.size} selected {wordsLeast.size < 8 ? `(need ${8 - wordsLeast.size} more)` : "✓"}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {WORDS_LEAST.map((w, i) => {
          const sel = wordsLeast.has(i);
          return (
            <button key={i} onClick={() => {
              const next = new Set(wordsLeast);
              if (sel) next.delete(i); else if (next.size < 12) next.add(i);
              setWordsLeast(next);
            }} style={{
              padding: "8px 16px", borderRadius: 20,
              background: sel ? C.red + "20" : C.bgCard,
              border: `1px solid ${sel ? C.red : C.border}`,
              color: sel ? C.red : C.text, fontSize: 13, fontWeight: sel ? 700 : 500,
              cursor: "pointer", transition: "all 0.15s",
            }}>{w.text}</button>
          );
        })}
      </div>
    </Shell>
  );

  if (section === 2) {
    const q = BEHAVIORAL_QS[behQ];
    const done = Object.keys(behAns).length;
    return (
      <Shell title="Behavioral Patterns" subtitle={`Answer based on how you actually behave — not how you think you should. (${done}/${BEHAVIORAL_QS.length})`}>
        <div style={{
          opacity: behFade ? 1 : 0, transform: behFade ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.2s",
        }}>
          <p style={{ fontFamily: MONO, fontSize: 11, color: C.dim, marginBottom: 20 }}>
            Question {behQ + 1} of {BEHAVIORAL_QS.length}
          </p>
          <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4, marginBottom: 20 }}>
            {q.q}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {q.opts.map((opt, oi) => (
              <button key={oi} onClick={() => {
                const next = { ...behAns, [behQ]: oi };
                setBehAns(next);
                if (behQ < BEHAVIORAL_QS.length - 1) {
                  setBehFade(false);
                  setTimeout(() => { setBehQ(behQ + 1); setBehFade(true); }, 200);
                }
              }} style={{
                padding: "14px 18px", background: behAns[behQ] === oi ? C.accent + "15" : C.bgCard,
                border: `1px solid ${behAns[behQ] === oi ? C.accent + "60" : C.border}`,
                borderRadius: 10, color: C.text, fontSize: 13, fontWeight: 500, textAlign: "left",
                cursor: "pointer", transition: "all 0.15s", lineHeight: 1.4,
              }}>{opt.t}</button>
            ))}
          </div>
          {behQ > 0 && (
            <button onClick={() => {
              setBehFade(false);
              setTimeout(() => { setBehQ(behQ - 1); setBehFade(true); }, 200);
            }} style={{
              marginTop: 16, background: "none", border: "none", color: C.dim,
              fontFamily: MONO, fontSize: 11, cursor: "pointer",
            }}>
              Previous question
            </button>
          )}
        </div>
      </Shell>
    );
  }

  if (section === 3) {
    const p = PAIRS[pairQ];
    const done = Object.keys(pairAns).length;
    return (
      <Shell title="Either / Or" subtitle={`Choose the statement that feels MORE true about you. (${done}/${PAIRS.length})`}>
        <div style={{
          opacity: pairFade ? 1 : 0, transform: pairFade ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.2s",
        }}>
          <p style={{ fontFamily: MONO, fontSize: 11, color: C.dim, marginBottom: 20 }}>
            Pair {pairQ + 1} of {PAIRS.length}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["a", "b"].map(side => (
              <button key={side} onClick={() => {
                const next = { ...pairAns, [pairQ]: side };
                setPairAns(next);
                if (pairQ < PAIRS.length - 1) {
                  setPairFade(false);
                  setTimeout(() => { setPairQ(pairQ + 1); setPairFade(true); }, 200);
                }
              }} style={{
                padding: "20px 22px", background: pairAns[pairQ] === side ? C.accent + "15" : C.bgCard,
                border: `1px solid ${pairAns[pairQ] === side ? C.accent + "60" : C.border}`,
                borderRadius: 12, color: C.text, fontSize: 15, fontWeight: 500, textAlign: "left",
                cursor: "pointer", transition: "all 0.15s", lineHeight: 1.4,
              }}>{p[side].text}</button>
            ))}
          </div>
          {pairQ > 0 && (
            <button onClick={() => {
              setPairFade(false);
              setTimeout(() => { setPairQ(pairQ - 1); setPairFade(true); }, 200);
            }} style={{
              marginTop: 16, background: "none", border: "none", color: C.dim,
              fontFamily: MONO, fontSize: 11, cursor: "pointer",
            }}>
              Previous pair
            </button>
          )}
        </div>
      </Shell>
    );
  }

  if (section === 4) return (
    <Shell title="Spectrum" subtitle="Where do you naturally fall on each spectrum? First instinct is most accurate.">
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {SPECTRUMS.map((sp, i) => {
          const dim = DIMS.find(d => d.key === sp.dim);
          const val = specVals[sp.dim] ?? 5;
          return (
            <div key={i}>
              <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: dim.color, marginBottom: 8 }}>
                {dim.key}: {dim.name}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 11, color: C.dim, maxWidth: "40%" }}>{sp.left}</span>
                <span style={{ fontSize: 11, color: C.dim, maxWidth: "40%", textAlign: "right" }}>{sp.right}</span>
              </div>
              <input type="range" min="1" max="10" step="0.5" value={val}
                onChange={e => setSpecVals({ ...specVals, [sp.dim]: e.target.value })} />
              <div style={{ textAlign: "center", fontFamily: MONO, fontSize: 12, color: C.accent, marginTop: 4 }}>
                {Number(val).toFixed(1)}
              </div>
            </div>
          );
        })}
      </div>
    </Shell>
  );

  if (section === 5) return (
    <Shell title="Ideal Trader" subtitle="Forget about yourself. Think about the IDEAL successful trader. Where would THEY fall on each spectrum?">
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {IDEAL_SPECTRUMS.map((sp, i) => {
          const dim = DIMS.find(d => d.key === sp.dim);
          const val = idealVals[sp.dim] ?? 5;
          return (
            <div key={i}>
              <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: dim.color, marginBottom: 8 }}>
                {dim.key}: {dim.name}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 11, color: C.dim, maxWidth: "40%" }}>{sp.left}</span>
                <span style={{ fontSize: 11, color: C.dim, maxWidth: "40%", textAlign: "right" }}>{sp.right}</span>
              </div>
              <input type="range" min="1" max="10" step="0.5" value={val}
                onChange={e => setIdealVals({ ...idealVals, [sp.dim]: e.target.value })} />
              <div style={{ textAlign: "center", fontFamily: MONO, fontSize: 12, color: C.accent, marginTop: 4 }}>
                {Number(val).toFixed(1)}
              </div>
            </div>
          );
        })}
      </div>
    </Shell>
  );

  return null;
}
