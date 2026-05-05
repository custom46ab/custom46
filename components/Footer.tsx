"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1F1410", color: "#A8998E" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>
            <div
              className="text-xl mb-4"
              style={{
                fontFamily: "var(--font-display), serif",
                color: "#EDE6DE",
              }}
            >
              custom<span style={{ color: "#A84B28" }}>46</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ fontWeight: 300 }}>
              Vi kartlägger var din organisation tappar tid och bygger de lösningar som faktiskt passar — utan onödig teknik.
            </p>
          </div>

          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(237,230,222,0.4)", letterSpacing: "0.16em" }}
            >
              Sidor
            </div>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Hem" },
                { href: "/tjanster", label: "Tjänster" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ fontWeight: 300 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE6DE")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A8998E")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(237,230,222,0.4)", letterSpacing: "0.16em" }}
            >
              Kontakt
            </div>
            <ul className="space-y-3 text-sm" style={{ fontWeight: 300 }}>
              <li>
                <a
                  href="mailto:hej@custom46.se"
                  className="transition-colors duration-200 hover:text-[#EDE6DE]"
                >
                  hej@custom46.se
                </a>
              </li>
              <li style={{ color: "#6A5E56" }}>Sverige</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs" style={{ color: "#6A5E56" }}>
            © {new Date().getFullYear()} custom46. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs" style={{ color: "#6A5E56" }}>
            Integritetspolicy
          </p>
        </div>
      </div>
    </footer>
  );
}
