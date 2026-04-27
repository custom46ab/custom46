"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Namn måste vara minst 2 tecken"),
  company: z.string().min(1, "Fyll i företagsnamn"),
  email: z.string().email("Fyll i en giltig e-postadress"),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

type FormData = z.infer<typeof schema>;

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form data:", data);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-[#F7F5F0] border-b border-[#DDD9D1]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3D6B58] mb-4">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A18] mb-5 leading-tight tracking-tight">
              Låt oss prata
            </h1>
            <p className="text-lg text-[#6B6B65] max-w-xl leading-relaxed">
              Fyll i formuläret nedan så hör vi av oss inom en vardag. Inget säljtrick — bara en rak konversation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            {/* Left: form */}
            <AnimatedSection direction="left">
              {submitted ? (
                <div className="bg-white rounded-xl border border-[#DDD9D1] p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#EAE8E2] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-[#3D6B58]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A1A18] mb-3">Tack för ditt meddelande!</h2>
                  <p className="text-[#6B6B65] text-sm leading-relaxed">
                    Vi läser alla förfrågningar och återkommer till dig inom en vardag.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-xl border border-[#DDD9D1] p-8 md:p-10 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A18] uppercase tracking-wider mb-2">
                        Ditt namn
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Anna Svensson"
                        className="w-full px-4 py-3 rounded-md border border-[#DDD9D1] bg-[#F7F5F0] text-[#1A1A18] text-sm placeholder:text-[#B8B4AC] focus:outline-none focus:ring-2 focus:ring-[#1B3A2D] focus:border-transparent transition-all"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A18] uppercase tracking-wider mb-2">
                        Företag
                      </label>
                      <input
                        {...register("company")}
                        placeholder="AB Exempelbolaget"
                        className="w-full px-4 py-3 rounded-md border border-[#DDD9D1] bg-[#F7F5F0] text-[#1A1A18] text-sm placeholder:text-[#B8B4AC] focus:outline-none focus:ring-2 focus:ring-[#1B3A2D] focus:border-transparent transition-all"
                      />
                      {errors.company && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A18] uppercase tracking-wider mb-2">
                      E-post
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="anna@exempelbolaget.se"
                      className="w-full px-4 py-3 rounded-md border border-[#DDD9D1] bg-[#F7F5F0] text-[#1A1A18] text-sm placeholder:text-[#B8B4AC] focus:outline-none focus:ring-2 focus:ring-[#1B3A2D] focus:border-transparent transition-all"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A18] uppercase tracking-wider mb-2">
                      Meddelande
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Berätta kort om ditt företag och vad du funderar på..."
                      className="w-full px-4 py-3 rounded-md border border-[#DDD9D1] bg-[#F7F5F0] text-[#1A1A18] text-sm placeholder:text-[#B8B4AC] focus:outline-none focus:ring-2 focus:ring-[#1B3A2D] focus:border-transparent transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-md bg-[#1B3A2D] text-[#F7F5F0] text-sm font-semibold hover:bg-[#244d3c] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Right: contact info */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-[#1A1A18] mb-3">Kontaktuppgifter</h2>
                  <div className="flex items-center gap-3 text-[#6B6B65]">
                    <div className="w-9 h-9 rounded-lg bg-[#EAE8E2] flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#1B3A2D]" />
                    </div>
                    <a
                      href="mailto:hej@custom46.se"
                      className="text-sm hover:text-[#1B3A2D] transition-colors"
                    >
                      hej@custom46.se
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#DDD9D1] pt-8">
                  <h3 className="font-bold text-[#1A1A18] mb-3">Vad händer när du hör av dig?</h3>
                  <ol className="space-y-4">
                    {[
                      "Vi läser ditt meddelande och återkommer inom en vardag",
                      "Vi bokar ett kort samtal för att förstå ditt behov",
                      "Om det verkar finnas en bra match presenterar vi ett förslag",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#1B3A2D] text-[#F7F5F0] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-[#6B6B65] leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-[#1B3A2D] rounded-xl p-7 text-[#B8D4C8]">
                  <h3 className="text-[#F7F5F0] font-bold mb-2">Inget som binder dig</h3>
                  <p className="text-sm leading-relaxed">
                    Det första samtalet är alltid kostnadsfritt och utan förpliktelser. Vi berättar vad vi kan
                    erbjuda — du bestämmer om det känns rätt.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
