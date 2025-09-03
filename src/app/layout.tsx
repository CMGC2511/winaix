import type { Metadata } from "next";
import "./globals.css";
import PaddleProvider from "./components/PaddleProvider";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Winaix – Football AI",
  description: "AI-powered football analytics and predictions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body style={{ fontFamily: "Inter, system-ui, Arial, sans-serif" }}>
        <PaddleProvider />
        <NavBar />
        <main style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 16px" }}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
