import type { Metadata, Viewport } from "next";
import BottomNav from "@/components/BottomNav";
import PwaRegister from "@/components/PwaRegister";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Asahi Mandiri", template: "%s | Asahi Mandiri" },
  description: "Belajar bahasa Jepang bersama Asahi Mandiri.",
  icons: { icon: "/icons/icon-192.png", apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#9e0026" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <main className="app">{children}</main>
        <BottomNav />
        <PwaRegister />
      </body>
    </html>
  );
}
