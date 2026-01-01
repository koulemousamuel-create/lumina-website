import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Cojonel Ioana Psihoterapeut",
  description:
    "Psihoterapie experiențialistă pentru adulți și adolescenți. Spațiu sigur pentru explorare emoțională și vindecare.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <body className="bg-white text-[#2A2A2A]">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}