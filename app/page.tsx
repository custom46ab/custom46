"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle2, BarChart3, Lightbulb, Cog } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Nulägesanalys",
    description:
      "Vi kartlägger hur ditt företag arbetar idag — vilka processer som är manuella, tidskrävande eller felbenägna.",
  },
  {
    icon: Lightbulb,
    title: "Lösningsförslag",
    description:
      "Utifrån analysen tar vi fram konkreta förslag på AI-verktyg och automatiseringar som passar din verksamhet.",
  },
  {
    icon: Cog,
    title: "Implementering",
    description:
      "Vi bygger och driftsätter lösningarna — och ser till att du och ditt team faktiskt kan använda dem.",
  },
];

const benefits = [
  "Sparar tid på återkommande uppgifter",
  "Minskar risken för mänskliga fel",
  "Skalbar lösning som växer med verksamheten",
  "Ingen onödig teknisk komplexitet",
];

export default function HemPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE8E2] border border-[#DDD9D1] text-[#3D6B58] text-xs font-semibold mb-8 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D6B58] inline-block" />
                  AI-automatisering för svenska SME:er
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A18] leading-[1.1] tracking-tight mb-6 text-balance">
                  Praktisk AI som faktiskt fungerar för ditt företag
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <p className="text-lg text-[#6B6B65] leading-relaxed mb-10 max-w-lg">
                  Vi analyserar hur ditt företag arbetar idag, föreslår relevanta AI-lösningar och hjälper dig
                  att implementera dem — utan krångel och utan tomma löften.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#1B3A2D] text-[#F7F5F0] font-semibold hover:bg-[#244d3c] transition-colors duration-200 text-sm"
                  >
                    Boka ett samtal
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/tjanster"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[#DDD9D1] text-[#1A1A18] font-semibold hover:bg-[#EAE8E2] transition-colors duration-200 bg-transparent text-sm"
                  >
                    Våra tjänster
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: abstract product-style visual */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative w-full max-w-lg ml-auto">
                {/* Outer shadow card */}
                <div className="rounded-2xl bg-[#EAE8E2] border border-[#DDD9D1] p-4 shadow-xl shadow-[#1B3A2D]/5">
                  {/* Inner frame */}
                  <div className="rounded-xl bg-[#F7F5F0] border border-[#DDD9D1] overflow-hidden">
                    {/* Top bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#DDD9D1] bg-white">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#DDD9D1]" />
                        <div className="w-3 h-3 rounded-full bg-[#DDD9D1]" />
                        <div className="w-3 h-3 rounded-full bg-[#DDD9D1]" />
                      </div>
                      <div className="flex-1 h-5 rounded bg-[#EAE8E2] max-w-xs mx-auto" />
                    </div>

                    {/* Content area */}
                    <div className="p-5 space-y-4">
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { color: "#1B3A2D", label: "Effektivitet" },
                          { color: "#3D6B58", label: "Automatiserat" },
                          { color: "#6B9E8A", label: "Sparat" },
                        ].map((stat) => (
                          <div key={stat.label} className="bg-white rounded-lg border border-[#DDD9D1] p-3">
                            <div
                              className="w-5 h-5 rounded mb-2"
                              style={{ backgroundColor: stat.color, opacity: 0.8 }}
                            />
                            <div className="h-4 rounded" style={{ backgroundColor: stat.color, opacity: 0.15 }} />
                            <div className="text-xs text-[#6B6B65] mt-1.5">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Workflow row */}
                      <div className="bg-white rounded-lg border border-[#DDD9D1] p-4">
                        <div className="text-xs font-semibold text-[#1A1A18] mb-3">Arbetsflöde</div>
                        <div className="flex items-center gap-2">
                          {["Analys", "Förslag", "Bygg", "Driftsatt"].map((step, i, arr) => (
                            <div key={step} className="flex items-center gap-2 flex-1">
                              <div
                                className={`h-6 rounded text-xs font-medium flex items-center justify-center px-2 flex-1 whitespace-nowrap ${
                                  i < 3 ? "bg-[#1B3A2D] text-[#F7F5F0]" : "bg-[#EAE8E2] text-[#6B6B65]"
                                }`}
                                style={{ fontSize: "10px" }}
                              >
                                {step}
                              </div>
                              {i < arr.length - 1 && (
                                <div className="w-3 h-px bg-[#DDD9D1] shrink-0" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom two cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg border border-[#DDD9D1] p-3">
                          <div className="text-xs font-semibold text-[#1A1A18] mb-2">Tidsbesparing</div>
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <div className="h-2 rounded flex-1 bg-[#1B3A2D] opacity-70" />
                              <span className="text-xs text-[#6B6B65]">68%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 rounded w-2/3 bg-[#3D6B58] opacity-50" />
                              <span className="text-xs text-[#6B6B65]">43%</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg border border-[#DDD9D1] p-3">
                          <div className="text-xs font-semibold text-[#1A1A18] mb-2">Felfrekvens</div>
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <div className="h-2 rounded w-1/4 bg-[#1B3A2D] opacity-70" />
                              <span className="text-xs text-[#6B6B65]">-82%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 rounded w-1/3 bg-[#3D6B58] opacity-50" />
                              <span className="text-xs text-[#6B6B65]">-57%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-3 bg-[#1B3A2D] text-[#F7F5F0] rounded-xl px-4 py-3 shadow-xl shadow-[#1B3A2D]/20">
                  <div className="text-2xl font-bold leading-none">46</div>
                  <div className="text-xs text-[#B8D4C8] mt-0.5 font-medium">Custom</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Value proposition strip */}
      <section className="bg-white border-t border-b border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A18] mb-5 leading-snug">
                  AI behöver inte vara komplext för att vara användbart
                </h2>
                <p className="text-[#6B6B65] leading-relaxed">
                  De flesta AI-satsningar misslyckas inte för att tekniken är svår — utan för att lösningarna
                  inte passar hur verksamheten faktiskt ser ut. Vi börjar alltid med din verklighet.
                </p>
              </div>
              <div className="space-y-3.5">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#3D6B58] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#1A1A18] leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3D6B58] mb-3">Hur vi arbetar</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A18] mb-4 tracking-tight">
                Tre steg, ett tydligt resultat
              </h2>
              <p className="text-[#6B6B65] max-w-xl mx-auto leading-relaxed">
                Vi följer en strukturerad process för att säkerställa att varje lösning är anpassad efter just
                din verksamhet.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <div className="bg-white rounded-xl border border-[#DDD9D1] p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[#EAE8E2] flex items-center justify-center">
                        <Icon size={20} className="text-[#1B3A2D]" />
                      </div>
                      <span className="text-sm font-bold text-[#DDD9D1] tracking-widest">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A18] mb-3">{service.title}</h3>
                    <p className="text-sm text-[#6B6B65] leading-relaxed">{service.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.35}>
            <div className="text-center mt-10">
              <Link
                href="/tjanster"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A2D] hover:underline underline-offset-4"
              >
                Läs mer om våra tjänster
                <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white border-t border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-6xl text-[#EAE8E2] font-serif mb-4 leading-none select-none">&ldquo;</div>
              <blockquote className="text-xl md:text-2xl font-medium text-[#1A1A18] leading-snug mb-8 text-balance">
                Vi visste att AI kunde hjälpa oss — vi visste bara inte var vi skulle börja. custom46 gav oss
                klarhet direkt.
              </blockquote>
              <div className="w-10 h-px bg-[#DDD9D1] mx-auto mb-4" />
              <div className="text-sm text-[#6B6B65]">
                Verksamhetschef, tillverkningsföretag i Mellansverige
              </div>
              <div className="mt-2 text-xs text-[#3D6B58] font-semibold tracking-wide uppercase">Kund sedan 2024</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-[#1B3A2D]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 text-center">
          <AnimatedSection>
            <p className="text-[#B8D4C8] text-xs uppercase tracking-widest font-semibold mb-5">
              Redo att komma igång?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance max-w-2xl mx-auto leading-tight">
              Låt oss prata om vad AI kan göra för din verksamhet
            </h2>
            <p className="text-[#B8D4C8] max-w-lg mx-auto mb-10 leading-relaxed">
              Boka ett kostnadsfritt samtal så berättar vi mer om hur vi arbetar och vad som kan vara relevant
              för just dig.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F7F5F0] text-[#1B3A2D] font-semibold hover:bg-white transition-colors duration-200 text-sm"
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
