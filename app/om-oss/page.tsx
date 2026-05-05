"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const C = {
  bg: "#F2EBE0", bgWarm: "#E8DDD0", bgCard: "#F8F4EF", bgDark: "#1F1410",
  terra: "#A84B28", terraLt: "#C96444", fg: "#1C1410", fgMid: "#483C35",
  muted: "#8A7A70", border: "#D9CEBC",
} as const;

const serif = { fontFamily: "var(--font-display), Georgia, serif" } as const;
const serifIt = { fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" } as const;

const values = [
  {
    n: "i.",
    title: "Ärlighet framför att imponera",
    body: "Vi berättar vad som faktiskt är möjligt — inte vad som låter bäst i ett säljsamtal. Om AI inte är rätt lösning för dig just nu säger vi det.",
  },
  {
    n: "ii.",
    title: "Enkelhet som princip",
    body: "Den bästa lösningen är den enklaste som faktiskt fungerar. Vi väljer alltid bort onödig komplexitet — den kostar mer och ger sällan mer värde.",
  },
  {
    n: "iii.",
    title: "Resultat, inte teknik",
    body: "Vi är teknikintresserade men inte teknikdrivna. Det som räknas är om din verksamhet faktiskt blir bättre — inte hur avancerat systemet ser ut under huven.",
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 28, height: 2, background: C.terra }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>Om oss</span>
            </div>
            <h1 style={{ ...serif, fontSize: "clamp(40px, 5vw, 58px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: C.fg, marginBottom: 20 }}>
              Varför vi startade custom46
            </h1>
            <p style={{ fontSize: 16, color: C.fgMid, maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              Vi hade sett för många AI-projekt landa fel — inte för att tekniken är svår, utan för att lösningarna inte passar verksamheten. Det ville vi göra något åt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: C.bgWarm, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <AnimatedSection direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  "Mönstret är nästan alltid detsamma: ett bolag investerar i ett AI-projekt, och ett år senare sitter lösningen oanvänd. Inte för att tekniken krånglade — utan för att den aldrig riktigt passade in i hur jobbet faktiskt görs.",
                  "Vi startade custom46 för att jobba annorlunda. Vi börjar alltid med att förstå verksamheten — inte med att sälja en lösning vi redan har färdig. Och om svaret inte är AI säger vi det rakt ut.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.terra}`, padding: "36px 36px" }}>
                <p style={{ ...serifIt, fontSize: 18, lineHeight: 1.5, color: C.fg, marginBottom: 16 }}>
                  Vi tar hellre på oss färre uppdrag och gör dem ordentligt.
                </p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, fontWeight: 300 }}>
                  Det innebär att du alltid pratar med den som faktiskt gör jobbet — ingen mellankommunikation, inga projektledare som sitter på information.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: C.bg, borderTop: `2px solid ${C.fg}` }}>
        <div
          className="max-w-6xl mx-auto"
          style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 72, padding: "64px 24px" }}
        >
          <AnimatedSection>
            <div style={{ ...serifIt, fontSize: 14, color: C.terra, paddingTop: 4 }}>Hur vi tänker</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
              {values.map((v) => (
                <div
                  key={v.n}
                  style={{ background: C.bg, padding: "28px 28px", transition: "background .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.bgWarm)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.bg)}
                >
                  <div style={{ ...serifIt, fontSize: 11, color: C.terra, opacity: 0.55, marginBottom: 12 }}>{v.n}</div>
                  <div style={{ ...serif, fontSize: 17, color: C.fg, marginBottom: 8, lineHeight: 1.15 }}>{v.title}</div>
                  <div style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.65, fontWeight: 300 }}>{v.body}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.bgDark }}>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <AnimatedSection>
            <h2 style={{ ...serif, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.08, color: "#EDE6DE", marginBottom: 16, maxWidth: 500, margin: "0 auto 16px", letterSpacing: "-0.02em" }}>
              Vill du veta mer om hur vi arbetar?
            </h2>
            <p style={{ fontSize: 14, color: "#A8998E", maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.75, fontWeight: 300 }}>
              Boka ett samtal — inga förpliktelser. Bara en rak konversation om vad som kan vara möjligt för er.
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
