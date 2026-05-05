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
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-20 lg:px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 28, height: 2, background: C.terra }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>Om oss</span>
            </div>
            <h1 style={{ ...serif, fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: C.fg, marginBottom: 20 }}>
              Varför vi startade custom46
            </h1>
            <p style={{ fontSize: 16, color: C.fgMid, maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              Vi såg ett tydligt värde för företag i att använda modern teknik för att förenkla vardagen — men också hur ofta det görs onödigt svårt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: C.bgWarm, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-20 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <AnimatedSection direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  "Potentialen är uppenbar — AI och automation kan frigöra tid, minska fel och låta människor fokusera på det som faktiskt kräver deras förmåga. Det gäller för stora bolag, men minst lika mycket för mindre organisationer.",
                  "Problemet är att det ofta presenteras som något komplext, dyrt och svårt att förstå. Det skapar onödig osäkerhet och gör att många väljer att avvakta — trots att lösningarna egentligen är både tillgängliga och rimliga.",
                  "Vi startade custom46 för att göra det enkelt och tryggt. Inte för att sälja teknik, utan för att hjälpa er hitta det som faktiskt gör skillnad i er verksamhet — och se till att det fungerar.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.terra}`, padding: "36px 32px" }}>
                <p style={{ ...serifIt, fontSize: 18, lineHeight: 1.5, color: C.fg, marginBottom: 16 }}>
                  Det ska kännas tryggt att ta steget — inte som ett projekt man måste orka med.
                </p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, fontWeight: 300 }}>
                  Vi håller det enkelt, kommunicerar tydligt och ser till att ni förstår vad ni får — innan ni bestämmer er för något.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: C.bg, borderTop: `2px solid ${C.fg}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-[72px] px-5 py-12 md:py-16 lg:px-6">
          <AnimatedSection>
            <div style={{ ...serifIt, fontSize: 14, color: C.terra, paddingTop: 4 }}>Hur vi tänker</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: C.border, border: `1px solid ${C.border}` }}>
              {values.map((v) => (
                <div
                  key={v.n}
                  style={{ background: C.bg, padding: "28px 24px", transition: "background .2s" }}
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
        <div className="max-w-6xl mx-auto px-5 py-16 lg:px-6 lg:py-20 text-center">
          <AnimatedSection>
            <h2 style={{ ...serif, fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.08, color: "#EDE6DE", marginBottom: 16, maxWidth: 500, margin: "0 auto 16px", letterSpacing: "-0.02em" }}>
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
