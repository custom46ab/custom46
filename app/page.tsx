"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const C = {
  bg: "#F2EBE0",
  bgWarm: "#E8DDD0",
  bgCard: "#F8F4EF",
  bgDark: "#1F1410",
  terra: "#A84B28",
  terraLt: "#C96444",
  fg: "#1C1410",
  fgMid: "#483C35",
  muted: "#8A7A70",
  border: "#D9CEBC",
  borderW: "#C8BAA8",
} as const;

const serif = { fontFamily: "var(--font-display), Georgia, serif" } as const;
const serifIt = { fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" } as const;

const steps = [
  { num: "I", title: "Nulägesanalys", body: "Vi kartlägger era processer och identifierar var effektiviteten brister." },
  { num: "II", title: "Lösningsförslag", body: "Konkreta förslag anpassade efter era behov och era processer." },
  { num: "III", title: "Implementering", body: "Vi bygger, driftsätter och ser till att det faktiskt används." },
];

const principles = [
  { n: "i.", title: "Vi börjar med verkligheten", body: "Inte med teknik. Vi förstår era processer innan vi föreslår något som helst." },
  { n: "ii.", title: "Rätt storlek på lösningen", body: "Ingen onödig komplexitet. Det som byggs ska förvaltas av er — inte av oss." },
  { n: "iii.", title: "Inga tomma löften", body: "Om något inte är möjligt säger vi det från start. Hellre det än missade förväntningar." },
  { n: "iv.", title: "Ni äger resultatet", body: "Lösningarna tillhör er. Ingen inlåsning, inga onödiga beroenden till oss." },
];

export default function HemPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr" }}>

          {/* Left */}
          <div
            className="flex flex-col justify-between"
            style={{ padding: "40px 56px 64px 24px", borderRight: `1px solid ${C.border}`, minHeight: "calc(100vh - 64px)" }}
          >
            <div>
              <AnimatedSection delay={0.05}>
                <div className="flex items-center gap-3 mb-12">
                  <div style={{ width: 36, height: 2, background: C.terra }} />
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>
                    AI-automatisering för svenska SME:er
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h1
                  style={{ ...serif, fontSize: "clamp(56px, 7vw, 82px)", lineHeight: 0.93, letterSpacing: "-0.025em", color: C.fg, marginBottom: 32 }}
                >
                  Tid<br />
                  tillbaka<br />
                  till det som<br />
                  <span style={{ ...serifIt, color: C.terra }}>spelar roll.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.28}>
                <p style={{ fontSize: 15.5, lineHeight: 1.76, color: C.fgMid, maxWidth: 390, fontWeight: 300, marginBottom: 48 }}>
                  Vi kartlägger var er organisation tappar tid och implementerar lösningar som passar — utan onödigt krångel.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.38}>
                <div className="flex items-center gap-6">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ background: C.fg, color: C.bg, fontWeight: 500, padding: "13px 28px", transition: "background .22s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.terra)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.fg)}
                  >
                    Boka ett samtal
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/tjanster"
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ color: C.muted, fontWeight: 400, borderBottom: `1px solid ${C.borderW}`, paddingBottom: 2, transition: "color .2s, border-color .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.terra; e.currentTarget.style.borderColor = C.terra; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.borderW; }}
                  >
                    Hur vi arbetar
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Stats pinned to bottom */}
            <AnimatedSection delay={0.5}>
              <div className="flex gap-0 mt-16" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 28 }}>
                {[
                  { val: "3 v", lbl: "Till driftsättning" },
                  { val: "< 3 mån", lbl: "Typisk återbetalningstid" },
                  { val: "0 kr", lbl: "Onödig konsulttid" },
                ].map((s, i) => (
                  <div key={s.lbl} style={{ flex: 1, ...(i > 0 ? { paddingLeft: 24, borderLeft: `1px solid ${C.border}` } : {}) }}>
                    <div style={{ ...serif, fontSize: 34, lineHeight: 1, color: C.fg, marginBottom: 4, letterSpacing: "-0.02em" }}>
                      {s.val}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted, fontWeight: 400 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right panel */}
          <AnimatedSection delay={0.2} direction="right">
            <div
              className="flex flex-col gap-5 justify-center"
              style={{ background: C.bgWarm, padding: "36px 48px", minHeight: "calc(100vh - 64px)" }}
            >
              {/* Pull quote */}
              <div style={{ background: C.bgCard, borderLeft: `3px solid ${C.terra}`, padding: "36px 32px" }}>
                <span style={{ ...serif, fontSize: 68, lineHeight: 0.5, color: C.terra, opacity: 0.22, display: "block", marginBottom: 16 }}>&ldquo;</span>
                <p style={{ ...serifIt, fontSize: 19, lineHeight: 1.45, color: C.fg, marginBottom: 20 }}>
                  Vi visste att AI kunde hjälpa oss — vi visste bara inte var vi skulle börja. custom46 gav oss klarhet direkt.
                </p>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted }}>
                  Verksamhetschef, tillverkningsbolag
                </div>
              </div>

              {/* Steps card */}
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, overflow: "hidden" }}>
                <div
                  className="flex items-center justify-between"
                  style={{ padding: "14px 24px", borderBottom: `1px solid ${C.border}` }}
                >
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted }}>Arbetsprocess</span>
                  <span style={{ fontSize: 10, fontWeight: 500, color: C.terra, background: `rgba(168,75,40,0.09)`, padding: "3px 10px" }}>3 steg</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                  {steps.map((s, i) => (
                    <div
                      key={s.num}
                      style={{ padding: "22px 18px", borderRight: i < 2 ? `1px solid ${C.border}` : "none" }}
                    >
                      <div style={{ ...serif, fontSize: 30, lineHeight: 1, color: C.terra, opacity: 0.25, marginBottom: 10 }}>{s.num}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: C.fg, marginBottom: 5 }}>{s.title}</div>
                      <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.55, fontWeight: 300 }}>{s.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRINCIPLES STRIP ── */}
      <section style={{ background: C.bg, borderTop: `2px solid ${C.fg}` }}>
        <div
          className="max-w-6xl mx-auto"
          style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 72, padding: "64px 24px" }}
        >
          <AnimatedSection>
            <div style={{ ...serifIt, fontSize: 14, color: C.terra, paddingTop: 4 }}>Varför det fungerar</div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
              {principles.map((p) => (
                <div
                  key={p.n}
                  style={{ background: C.bg, padding: "26px 28px", transition: "background .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.bgWarm)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.bg)}
                >
                  <div style={{ ...serifIt, fontSize: 11, color: C.terra, opacity: 0.55, marginBottom: 10 }}>{p.n}</div>
                  <div style={{ ...serif, fontSize: 19, color: C.fg, marginBottom: 7, lineHeight: 1.15 }}>{p.title}</div>
                  <div style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.65, fontWeight: 300 }}>{p.body}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section style={{ background: C.bgWarm, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div style={{ width: 28, height: 1.5, background: C.terra }} />
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.terra }}>Maximera kundvärdet</span>
                </div>
                <h2 style={{ ...serif, fontSize: "clamp(32px, 4vw, 46px)", lineHeight: 1.05, color: C.fg, marginBottom: 20, letterSpacing: "-0.02em" }}>
                  AI behöver inte vara komplext för att vara användbart
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: C.fgMid, fontWeight: 300, marginBottom: 32 }}>
                  Tvärtom faktiskt — potentialen ligger i att optimera era utifrån era befintliga processer.
                </p>
                <Link
                  href="/om-oss"
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: C.terra, fontWeight: 500, borderBottom: `1px solid ${C.terra}`, paddingBottom: 2 }}
                >
                  Läs mer om hur vi tänker
                  <ArrowRight size={12} />
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
                {[
                  { val: "100%", lbl: "Fokus på genomförande" },
                  { val: "0", lbl: "Lösningar byggda på hajp" },
                  { val: "5–100", lbl: "Anställda hos våra kunder" },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="flex items-center justify-between"
                    style={{ background: C.bgCard, padding: "24px 28px", transition: "background .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.bg)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.bgCard)}
                  >
                    <span style={{ ...serif, fontSize: 32, color: C.fg, letterSpacing: "-0.02em" }}>{s.val}</span>
                    <span style={{ fontSize: 12, color: C.muted, fontWeight: 400 }}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: C.bgDark }}>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div style={{ width: 28, height: 1, background: C.terra }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>Redo att komma igång?</span>
              <div style={{ width: 28, height: 1, background: C.terra }} />
            </div>
            <h2
              style={{ ...serif, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.05, color: "#EDE6DE", marginBottom: 20, letterSpacing: "-0.02em", maxWidth: 600, margin: "0 auto 20px" }}
            >
              Låt oss prata om vad som faktiskt kan förändras
            </h2>
            <p style={{ fontSize: 15, color: "#A8998E", maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.75, fontWeight: 300 }}>
              Boka ett kostnadsfritt samtal — vi ställer frågor, lyssnar och ger en ärlig bild av vad AI och automation kan göra för er.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm"
              style={{ background: C.terra, color: "#F8F4EF", fontWeight: 500, padding: "14px 32px", transition: "background .22s" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.terraLt)}
              onMouseLeave={e => (e.currentTarget.style.background = C.terra)}
            >
              Boka ett samtal
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
