import type { Metadata } from "next";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelBooth — A Retro Photobooth",
  description:
    "Upload fotomu, pilih frame pixel favorit, lalu download hasilnya dalam hitungan detik — gratis, tanpa antre, tanpa akun.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${pressStart.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
