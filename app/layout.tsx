import type { Metadata } from "next";
import { DM_Serif_Display, Epilogue, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

const epilogue = Epilogue({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "custom46 – Praktisk AI för ditt företag",
  description:
    "custom46 hjälper svenska företag att automatisera arbetsflöden och implementera AI-lösningar som faktiskt fungerar i vardagen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${dmSerifDisplay.variable} ${epilogue.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-[#F2EBE0]"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif", fontWeight: 300 }}
      >
        <Navbar />
        <main className="pt-16 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
