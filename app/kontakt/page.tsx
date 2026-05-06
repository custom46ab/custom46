"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const C = {
  bg: "#F2EBE0", bgWarm: "#E8DDD0", bgCard: "#F8F4EF", bgDark: "#1F1410",
  terra: "#A84B28", terraLt: "#C96444", fg: "#1C1410", fgMid: "#483C35",
  muted: "#8A7A70", border: "#D9CEBC",
} as const;

const serif = { fontFamily: "var(--font-display), Georgia, serif" } as const;
const serifIt = { fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic" } as const;

const schema = z.object({
  name: z.string().min(2, "Namn måste vara minst 2 tecken"),
  company: z.string().min(1, "Fyll i företagsnamn"),
  email: z.string().email("Fyll i en giltig e-postadress"),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

type FormData = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: `1px solid ${C.border}`,
  background: C.bg,
  color: C.fg,
  fontSize: 14,
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontWeight: 300,
  outline: "none",
  transition: "border-color .2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: C.fgMid,
  marginBottom: 8,
};

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const body = new URLSearchParams({
        "form-name": "kontakt",
        ...data,
      });
      const res = await fetch("/netlify-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setSubmitError("Något gick fel. Kontrollera din anslutning och försök igen.");
    }
  };

  return (
    <>
      {/* Page header */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-20 lg:px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 28, height: 2, background: C.terra }} />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.terra }}>Kontakt</span>
            </div>
            <h1 style={{ ...serif, fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: C.fg, marginBottom: 20 }}>
              Hör av dig
            </h1>
            <p style={{ fontSize: 16, color: C.fgMid, maxWidth: 480, lineHeight: 1.75, fontWeight: 300 }}>
              Fyll i formuläret så återkommer vi inom kort.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-20 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Form */}
            <AnimatedSection direction="left">
              {submitted ? (
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.terra}`, padding: "56px 40px", textAlign: "center" }}>
                  <div style={{ ...serif, fontSize: 18, color: C.fg, marginBottom: 12 }}>Tack för ditt meddelande</div>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, fontWeight: 300 }}>
                    Vi återkommer till dig inom kort.
                  </p>
                </div>
              ) : (
                <form
                  name="kontakt"
                  onSubmit={handleSubmit(onSubmit)}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "32px 28px" }}
                >
                  <input type="hidden" name="form-name" value="kontakt" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: 20 }}>
                    <div>
                      <label style={labelStyle}>Ditt namn</label>
                      <input
                        {...register("name")}
                        placeholder="Anna Svensson"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = C.terra)}
                        onBlur={e => (e.target.style.borderColor = C.border)}
                      />
                      {errors.name && (
                        <p style={{ marginTop: 6, fontSize: 11, color: "#B94040" }}>{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label style={labelStyle}>Företag</label>
                      <input
                        {...register("company")}
                        placeholder="AB Exempelbolaget"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = C.terra)}
                        onBlur={e => (e.target.style.borderColor = C.border)}
                      />
                      {errors.company && (
                        <p style={{ marginTop: 6, fontSize: 11, color: "#B94040" }}>{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>E-post</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="anna@exempelbolaget.se"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = C.terra)}
                      onBlur={e => (e.target.style.borderColor = C.border)}
                    />
                    {errors.email && (
                      <p style={{ marginTop: 6, fontSize: 11, color: "#B94040" }}>{errors.email.message}</p>
                    )}
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Meddelande</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Berätta kort om ditt företag och vad du funderar på..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => (e.target.style.borderColor = C.terra)}
                      onBlur={e => (e.target.style.borderColor = C.border)}
                    />
                    {errors.message && (
                      <p style={{ marginTop: 6, fontSize: 11, color: "#B94040" }}>{errors.message.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <p style={{ marginBottom: 16, fontSize: 12, color: "#B94040", lineHeight: 1.5 }}>
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2"
                    style={{
                      background: isSubmitting ? C.muted : C.terra,
                      color: "#F8F4EF",
                      fontSize: 13,
                      fontWeight: 500,
                      padding: "14px 28px",
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      border: "none",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "background .22s",
                    }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = C.terraLt; }}
                    onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = C.terra; }}
                  >
                    {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                    {!isSubmitting && <ArrowRight size={13} />}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Right: info */}
            <AnimatedSection direction="right" delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Process */}
                <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, overflow: "hidden" }}>
                  <div style={{ padding: "16px 24px", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted }}>Vad händer sen?</span>
                  </div>
                  <div>
                    {[
                      "Vi läser ditt meddelande och återkommer inom kort",
                      "Vi bokar ett samtal för att förstå vad du behöver",
                      "Passar vi varandra presenterar vi ett konkret förslag",
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4"
                        style={{ padding: "18px 24px", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}
                      >
                        <div style={{ ...serifIt, fontSize: 18, color: C.terra, opacity: 0.4, flexShrink: 0, lineHeight: 1, paddingTop: 2 }}>
                          {["I", "II", "III"][i]}
                        </div>
                        <span style={{ fontSize: 13, color: C.fgMid, lineHeight: 1.65, fontWeight: 300 }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promise card */}
                <div style={{ background: C.bgDark, padding: "28px 28px" }}>
                  <div style={{ ...serif, fontSize: 18, color: "#EDE6DE", marginBottom: 10 }}>Inga förpliktelser</div>
                  <p style={{ fontSize: 13, color: "#A8998E", lineHeight: 1.7, fontWeight: 300 }}>
                    Det första samtalet är självklart alltid kostnadsfritt och utan förpliktelser. Vi berättar vad vi kan erbjuda — du bestämmer om det känns rätt.
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
