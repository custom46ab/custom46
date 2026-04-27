"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, BarChart3, Lightbulb, Cog, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    step: "01",
    title: "Nulägesanalys",
    tagline: "Förstå var du är innan du bestämmer vart du ska",
    description:
      "Innan vi föreslår någon lösning vill vi förstå hur din verksamhet faktiskt fungerar. Vi kartlägger dina arbetsflöden, identifierar flaskhalsar och hittar de processer som kostar mest tid — utan att tillföra värde.",
    includes: [
      "Intervjuer med nyckelpersoner i verksamheten",
      "Kartläggning av befintliga system och processer",
      "Identifiering av repetitiva och tidskrävande moment",
      "Skriftlig sammanfattning med prioriterade förbättringsområden",
    ],
    outcome:
      "En tydlig bild av var automatisering och AI kan göra störst skillnad — och var det inte är värt att satsa.",
  },
  {
    icon: Lightbulb,
    step: "02",
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
    outcome:
      "En rapport du kan agera på direkt — med eller utan vår hjälp att genomföra den.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Implementering",
    tagline: "Vi bygger det, du äger det",
    description:
      "Vi tar hand om den tekniska implementeringen och ser till att lösningarna faktiskt fungerar i din miljö. Vi utbildar ditt team och säkerställer att allt är dokumenterat och underhållbart — du ska inte behöva ringa oss varje gång något går snett.",
    includes: [
      "Uppsättning och konfiguration av valda verktyg",
      "Integration med befintliga system",
      "Utbildning av ditt team",
      "Dokumentation och support under inkörningstiden",
    ],
    outcome:
      "Fungerande lösningar som ditt team kan hantera självständigt, med möjlighet till fortsatt stöd.",
  },
];

export default function TjansterPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#F7F5F0] border-b border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3D6B58] mb-4">Tjänster</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A18] mb-5 leading-tight tracking-tight text-balance">
              Vad vi erbjuder
            </h1>
            <p className="text-lg text-[#6B6B65] max-w-2xl leading-relaxed">
              Vi arbetar i tre faser som hänger ihop — men du kan också anlita oss för en enskild del om du
              redan vet vad du behöver.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <div className="bg-white rounded-xl border border-[#DDD9D1] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Left: info */}
                      <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-[#DDD9D1]">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-11 h-11 rounded-xl bg-[#EAE8E2] flex items-center justify-center">
                            <Icon size={20} className="text-[#1B3A2D]" />
                          </div>
                          <span className="text-xs font-bold text-[#DDD9D1] tracking-widest">{service.step}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A18] mb-2 tracking-tight">{service.title}</h2>
                        <p className="text-[#3D6B58] font-semibold text-sm mb-6">{service.tagline}</p>
                        <p className="text-[#6B6B65] leading-relaxed">{service.description}</p>
                      </div>

                      {/* Right: includes + outcome */}
                      <div className="p-10 md:p-12 bg-[#FAFAF8]">
                        <div className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2D] mb-5">
                          Ingår i tjänsten
                        </div>
                        <ul className="space-y-3.5 mb-10">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="text-[#3D6B58] mt-0.5 shrink-0" />
                              <span className="text-sm text-[#1A1A18] leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="border-t border-[#DDD9D1] pt-7">
                          <div className="text-xs font-semibold uppercase tracking-widest text-[#1B3A2D] mb-3">
                            Resultat
                          </div>
                          <p className="text-sm text-[#6B6B65] leading-relaxed">{service.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ / note */}
      <section className="bg-white border-t border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A18] mb-4">
                  Måste man ta alla tre stegen?
                </h2>
                <p className="text-[#6B6B65] leading-relaxed mb-4">
                  Nej. Faserna hänger ihop men är fristående. Om du redan har en tydlig bild av vad du vill
                  förändra kan vi börja direkt med lösningsförslag eller implementering.
                </p>
                <p className="text-[#6B6B65] leading-relaxed">
                  Om du är osäker rekommenderar vi alltid att börja med nulägesanalysen — det är lätt att
                  automatisera fel saker annars.
                </p>
              </div>
              <div className="bg-[#F7F5F0] rounded-xl border border-[#DDD9D1] p-7">
                <h3 className="font-bold text-[#1A1A18] mb-3">Passar detta ditt företag?</h3>
                <p className="text-sm text-[#6B6B65] leading-relaxed mb-5">
                  Vi arbetar primärt med svenska SME:er — företag med 5–200 anställda som vill arbeta mer effektivt
                  men inte har resurser för ett eget IT-team.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A2D] hover:underline"
                >
                  Ta kontakt så berättar vi mer
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A2D]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
              Redo att se vad som är möjligt?
            </h2>
            <p className="text-[#B8D4C8] max-w-lg mx-auto mb-8 leading-relaxed">
              Kontakta oss för ett kostnadsfritt samtal — vi ställer frågor, lyssnar och ger en ärlig bild av vad
              AI faktiskt kan göra för er.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F7F5F0] text-[#1B3A2D] font-semibold hover:bg-white transition-colors duration-200"
            >
              Ta kontakt
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
