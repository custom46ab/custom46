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
    n: "iv.",
    title: "Resultat, inte teknik",
    body: "Vi är teknikintresserade men inte teknikdrivna. Det som räknas är om din verksamhet faktiskt blir bättre — inte hur avancerat systemet ser ut under huven.",
  },
];

const stats = [
  { val: "100%", lbl: "Fokus på genomförande" },
  { val: "5–200", lbl: "Anställda hos våra kunder" },
  { val: "0", lbl: "Lösningar byggda på hajp" },
  { val: "100%", lbl: "Dokumenterade leveranser" },
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
              Människorna bakom custom46
            </h1>
            <p style={{ fontSize: 16, color: C.fgMid, maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              Vi är ett litet team med djup erfarenhet av verksamhetsutveckling och moderna AI-verktyg. Vi tror att AI kan göra stor skillnad för vanliga företag — om det implementeras på rätt sätt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: C.bgWarm, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <AnimatedSection direction="left">
              <div>
                <h2 style={{ ...serif, fontSize: "clamp(28px, 3.5vw, 38px)", lineHeight: 1.08, color: C.fg, marginBottom: 28, letterSpacing: "-0.02em" }}>
                  Varför vi startade custom46
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    "Vi hade sett mönstret för många gånger: ett företag investerar i ett AI-projekt, konsulter lovar mycket, och ett år senare sitter lösningen oanvänd på en server någonstans.",
                    "Problemet är nästan aldrig tekniken. Det är att lösningarna inte matchar hur verksamheten faktiskt fungerar, att personalen inte förstår hur man använder dem, eller att de är för komplexa för att underhållas.",
                    "Vi startade custom46 för att göra det annorlunda. Ingen hajp, inga generiska demos. Bara ärligt arbete med att ta reda på vad som faktiskt kan hjälpa dig — och sedan hjälpa dig att genomföra det.",
                  ].map((p, i) => (
                    <p key={i} style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.terra}`, padding: "40px 40px" }}>
                <h3 style={{ ...serif, fontSize: 22, color: C.fg, marginBottom: 14 }}>Inte som andra konsulter</h3>
                <p style={{ fontSize: 13, color: C.fgMid, lineHeight: 1.75, fontWeight: 300 }}>
                  De flesta AI-konsulter säljer teknik. Vi säljer resultat. Det betyder att vi börjar med ert problem — inte med en lösning vi redan vill sälja. Om svaret inte är AI säger vi det.
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
            <div style={{ ...serifIt, fontSize: 14, color: C.terra, paddingTop: 4 }}>Våra principer</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
              {values.map((v) => (
                <div
                  key={v.n}
                  style={{ background: C.bg, padding: "28px 28px", transition: "background .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.bgWarm)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.bg)}
                >
                  <div style={{ ...serifIt, fontSize: 11, color: C.terra, opacity: 0.55, marginBottom: 12 }}>{v.n}</div>
                  <div style={{ ...serif, fontSize: 19, color: C.fg, marginBottom: 8, lineHeight: 1.15 }}>{v.title}</div>
                  <div style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.65, fontWeight: 300 }}>{v.body}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: C.bgWarm, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <h2 style={{ ...serif, fontSize: "clamp(28px, 3.5vw, 38px)", lineHeight: 1.08, color: C.fg, marginBottom: 24, letterSpacing: "-0.02em" }}>
                  Litet team, stort fokus
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    "Vi är ett litet och selektivt team. Det innebär att du alltid pratar med den som faktiskt gör jobbet — ingen mellankommunikation, inga projektledare som sitter på information.",
                    "Det gör oss flexibla, men det innebär också att vi väljer våra kunder med omsorg. Vi tar hellre på oss färre uppdrag och gör dem riktigt bra.",
                  ].map((p, i) => (
                    <p key={i} style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
                  ))}
                </div>
                <div style={{ marginTop: 28 }}>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ background: C.terra, color: "#F8F4EF", fontWeight: 500, padding: "13px 28px", transition: "background .22s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.terraLt)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.terra)}
                  >
                    Ta kontakt
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
                {stats.map((s) => (
                  <div
                    key={s.lbl}
                    style={{ background: C.bgCard, padding: "28px 24px", textAlign: "center", transition: "background .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = C.bg)}
                    onMouseLeave={e => (e.currentTarget.style.background = C.bgCard)}
                  >
                    <div style={{ ...serif, fontSize: 30, color: C.terra, marginBottom: 6, letterSpacing: "-0.02em" }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5, fontWeight: 300 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
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
              Boka ett samtal — inga förpliktelser, ingen säljtaktik. Bara en rak konversation om vad som kan vara möjligt.
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
