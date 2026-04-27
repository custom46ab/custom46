import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A2D] text-[#B8D4C8]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-[#F7F5F0] font-bold text-xl mb-3">custom46</div>
            <p className="text-sm leading-relaxed max-w-xs">
              Praktisk AI som faktiskt fungerar för ditt företag. Vi hjälper svenska SME:er att arbeta smartare.
            </p>
          </div>

          <div>
            <div className="text-[#F7F5F0] text-sm font-semibold uppercase tracking-wider mb-4">Sidor</div>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Hem" },
                { href: "/tjanster", label: "Tjänster" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#F7F5F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#F7F5F0] text-sm font-semibold uppercase tracking-wider mb-4">Kontakt</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hej@custom46.se"
                  className="hover:text-[#F7F5F0] transition-colors duration-200"
                >
                  hej@custom46.se
                </a>
              </li>
              <li>Sverige</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A4D3C] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} custom46. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs">
            Integritetspolicy
          </p>
        </div>
      </div>
    </footer>
  );
}
