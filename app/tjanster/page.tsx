"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const C = {
  bg: "#F2EBE0", bgWarm: "#E8DDD0", bgCard: "#F8F4EF", bgDark: "#1F1410",
  terra: "#A84B28", terraLt: "#C96444", fg: "#1C1410", fgMid: "#483C35",
  muted: "#8A7A70", border: "#D9CEBC",
} as const;

const serif = { fontFamily: "var(--font-display), Georgia, serif" } as const;
const serifIt = { fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" } as const;

const services = [
  {
    num: "I",
    title: "Nulägesanalys",
    tagline: "Förstå var du är innan du bestämmer vart du ska",
    description:
      "Innan vi föreslår någon lösning vill vi förstå hur din verksamhet faktiskt fungerar. Vi kartlägger dina arbetsflöden, identifierar flaskhalsar och hittar de processer som kostar mest tid.",
    includes: [
      "Intervjuer med nyckelpersoner i verksamheten",
      "Kartläggning av befintliga system och processer",
      "Identifiering av repetitiva och tidskrävande moment",
      "Skriftlig sammanfattning med prioriterade förbättringsområden",
    ],
    outcome: "En tydlig bild av var automatisering och AI kan göra störst skillnad — och var det inte är värt att satsa.",
  },
  {
    num: "II",
    title: "Lösningsförslag",
    tagline: "Konkreta förslag, inte vaga möjligheter",
    description:
      "Utifrån nulägesanalysen presenterar vi ett handgripligt förslag på vad som bör automatiseras, vilka AI-verktyg som är lämpliga och i vilken ordning det bör genomföras. Vi väljer alltid enklaste möjliga lösning som faktiskt löser problemet.",
    includes: [
      "Specificerade förslag per identifierat förbättringsområde",
      "Rekommenderade verktyg med motivering",
      "Uppskattad tidsåtgång och ROI per åtgärd",
      "Prioriterad implementeringsplan",
    ],
    outcome: "En rapport du kan agera på direkt — med eller utan vår hjälp att genomföra den.",
  },
  {
    num: "III",
    title: "Implementering",
    tagline: "Vi bygger det, du äger det",
    description:
      "Vi tar hand om den tekniska implementeringen och ser till att lösningarna faktiskt fungerar i din miljö. Vi utbildar ditt team och säkerställer att allt är dokumenterat — oavsett om ni tar över driften själva eller om vi fortsätter som ett löpande stöd.",
    includes: [
      "Uppsättning och konfiguration av valda verktyg",
      "Integration med befintliga system",
      "Utbildning av ditt team",
      "Dokumentation och support under inkörningstiden",
    ],
    outcome: "Fungerande lösningar som ditt team kan hantera självständigt, med möjlighet till fortsatt stöd.",
  },
];

export default function TjansterPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 28, height: 2, background: C.terra }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>Tjänster</span>
            </div>
            <h1 style={{ ...serif, fontSize: "clamp(40px, 5vw, 58px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: C.fg, marginBottom: 20 }}>
              Vad vi erbjuder
            </h1>
            <p style={{ fontSize: 16, color: C.fgMid, maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              Vi arbetar i tre faser som hänger ihop — men du kan också anlita oss för en enskild del om du redan vet vad du behöver.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col gap-px" style={{ background: C.border }}>
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div style={{ background: C.bg, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  {/* Left */}
                  <div style={{ padding: "48px 48px", borderRight: `1px solid ${C.border}` }}>
                    <div style={{ ...serif, fontSize: 11, color: C.terra, opacity: 0.5, letterSpacing: "0.08em", marginBottom: 20 }}>
                      {service.num}
                    </div>
                    <h2 style={{ ...serif, fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.1, color: C.fg, marginBottom: 8, letterSpacing: "-0.02em" }}>
                      {service.title}
                    </h2>
                    <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: C.terra, marginBottom: 20, textTransform: "uppercase" }}>
                      {service.tagline}
                    </p>
                    <p style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.75, fontWeight: 300 }}>{service.description}</p>
                  </div>

                  {/* Right */}
                  <div style={{ padding: "48px 48px", background: C.bgCard }}>
                    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.terra, marginBottom: 20 }}>
                      Ingår i tjänsten
                    </div>
                    <ul style={{ marginBottom: 32 }}>
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3" style={{ marginBottom: 14 }}>
                          <CheckCircle2 size={15} style={{ color: C.terra, marginTop: 2, flexShrink: 0, opacity: 0.7 }} />
                          <span style={{ fontSize: 13, color: C.fg, lineHeight: 1.65, fontWeight: 300 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
                      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.terra, marginBottom: 10 }}>
                        Resultat
                      </div>
                      <p style={{ fontSize: 13, color: C.fgMid, lineHeight: 1.7, fontWeight: 300 }}>{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: C.bgWarm, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <h2 style={{ ...serif, fontSize: "clamp(26px, 3vw, 34px)", lineHeight: 1.1, color: C.fg, marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Måste man ta alla tre stegen?
                </h2>
                <p style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
                  Nej. Faserna hänger ihop men är fristående. Om du redan har en tydlig bild av vad du vill förändra kan vi börja direkt med lösningsförslag eller implementering.
                </p>
                <p style={{ fontSize: 14, color: C.fgMid, lineHeight: 1.75, fontWeight: 300 }}>
                  Om du är osäker rekommenderar vi alltid att börja med nulägesanalysen — det är lätt att automatisera fel saker annars.
                </p>
              </div>
              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.terra}`, padding: 36 }}>
                <h3 style={{ ...serif, fontSize: 22, color: C.fg, marginBottom: 12 }}>Passar detta ditt företag?</h3>
                <p style={{ fontSize: 13, color: C.fgMid, lineHeight: 1.7, fontWeight: 300, marginBottom: 24 }}>
                  Vi arbetar primärt med svenska SME:er — företag med 5–100 anställda som vill arbeta mer effektivt men inte har resurser för ett eget IT-team.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: C.terra, fontWeight: 500, borderBottom: `1px solid ${C.terra}`, paddingBottom: 2 }}
                >
                  Ta kontakt så berättar vi mer
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.bgDark }}>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <AnimatedSection>
            <h2 style={{ ...serif, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.08, color: "#EDE6DE", marginBottom: 16, maxWidth: 520, margin: "0 auto 16px", letterSpacing: "-0.02em" }}>
              Redo att se vad som är möjligt?
            </h2>
            <p style={{ fontSize: 14, color: "#A8998E", maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.75, fontWeight: 300 }}>
              Kontakta oss för ett kostnadsfritt samtal — vi ger en ärlig bild av vad AI faktiskt kan göra för er.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm"
              style={{ background: C.terra, color: "#F8F4EF", fontWeight: 500, padding: "14px 32px", transition: "background .22s" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.terraLt)}
              onMouseLeave={e => (e.currentTarget.style.background = C.terra)}
            >
              Ta kontakt
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
