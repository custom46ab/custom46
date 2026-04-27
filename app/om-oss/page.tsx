"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Ärlighet framför imponering",
    description:
      "Vi berättar vad som faktiskt är möjligt — inte vad som låter bäst i ett säljsamtal. Om AI inte är rätt lösning för dig just nu säger vi det.",
  },
  {
    title: "Enkelhet som princip",
    description:
      "Den bästa lösningen är den enklaste som faktiskt fungerar. Vi väljer alltid bort onödig komplexitet — den kostar mer och ger sällan mer värde.",
  },
  {
    title: "Ditt ägarskap",
    description:
      "Lösningarna vi bygger ska du kunna äga, förstå och underhålla. Vi dokumenterar allt och utbildar ditt team — du ska inte vara beroende av oss i det löpande.",
  },
  {
    title: "Resultat, inte teknik",
    description:
      "Vi är teknikintresserade men inte teknikdrivna. Det som räknas är om din verksamhet faktiskt blir bättre — inte hur avancerat systemet ser ut under huven.",
  },
];

export default function OmOssPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#F7F5F0] border-b border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3D6B58] mb-4">Om oss</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A18] mb-5 leading-tight tracking-tight text-balance">
              Människorna bakom custom46
            </h1>
            <p className="text-lg text-[#6B6B65] max-w-2xl leading-relaxed">
              Vi är ett litet team med djup erfarenhet av verksamhetsutveckling och moderna AI-verktyg. Vi tror att
              AI kan göra stor skillnad för vanliga företag — om det implementeras på rätt sätt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white border-b border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A18] mb-6">
                  Varför vi startade custom46
                </h2>
                <div className="space-y-5 text-[#6B6B65] leading-8">
                  <p>
                    Vi hade sett mönstret för många gånger: ett företag investerar i ett AI-projekt, konsulter
                    lovar mycket, och ett år senare sitter lösningen oanvänd på en server någonstans.
                  </p>
                  <p>
                    Problemet är nästan aldrig tekniken. Det är att lösningarna inte matchar hur verksamheten
                    faktiskt fungerar, att personalen inte förstår hur man använder dem, eller att de är för
                    komplexa för att underhållas.
                  </p>
                  <p>
                    Vi startade custom46 för att göra det annorlunda. Ingen hajp, inga generiska demos. Bara
                    ärligt arbete med att ta reda på vad som faktiskt kan hjälpa dig — och sedan hjälpa dig att
                    genomföra det.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-[#F7F5F0] rounded-xl border border-[#DDD9D1] p-8 md:p-10">
                <div className="text-5xl font-bold text-[#1B3A2D] opacity-20 mb-2 leading-none">46</div>
                <h3 className="font-bold text-[#1A1A18] text-xl mb-3">Vad betyder 46?</h3>
                <p className="text-[#6B6B65] leading-relaxed text-sm">
                  Sverige är ett litet land — men landets företag driver mycket av det värde som skapar välstånd
                  här. Vi tror att AI-verktyg inte bara ska finnas tillgängliga för stora bolag med stora budgetar.
                  custom46 är vår ambition att göra det möjligt för alla svenska företag att dra nytta av det som
                  faktiskt fungerar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3D6B58] mb-3">Hur vi arbetar</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A18]">Våra principer</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#DDD9D1] p-7 h-full">
                  <h3 className="font-bold text-[#1A1A18] text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-[#6B6B65] leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team / human touch */}
      <section className="bg-white border-t border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A18] mb-5">
                  Litet team, stort fokus
                </h2>
                <div className="space-y-5 text-[#6B6B65] leading-8">
                  <p>
                    Vi är ett litet och selektivt team. Det innebär att du alltid pratar med den som faktiskt
                    gör jobbet — ingen mellankommunikation, inga projektledare som sitter på information.
                  </p>
                  <p>
                    Det gör oss flexibla, men det innebär också att vi väljer våra kunder med omsorg. Vi tar
                    hellre på oss färre uppdrag och gör dem riktigt bra.
                  </p>
                </div>
                <div className="mt-7">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1B3A2D] text-[#F7F5F0] font-semibold hover:bg-[#244d3c] transition-colors duration-200"
                  >
                    Ta kontakt
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "100%", label: "Fokus på genomförande" },
                  { number: "5–200", label: "Anställda hos våra kunder" },
                  { number: "0", label: "Lösningar byggda på hajp" },
                  { number: "100%", label: "Dokumenterade leveranser" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F7F5F0] rounded-xl border border-[#DDD9D1] p-6 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#1B3A2D] mb-1">{stat.number}</div>
                    <div className="text-xs text-[#6B6B65]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A2D]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Vill du veta mer om hur vi arbetar?
            </h2>
            <p className="text-[#B8D4C8] max-w-lg mx-auto mb-8 leading-relaxed">
              Boka ett samtal — inga förpliktelser, ingen säljtaktik. Bara en rak konversation om vad som kan
              vara möjligt för ditt företag.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F7F5F0] text-[#1B3A2D] font-semibold hover:bg-white transition-colors duration-200"
            >
              Boka ett samtal
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
