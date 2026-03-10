import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deekshitha GR | Full Stack Developer · FinTech",
  description:
    "Full Stack Developer with ~2 years of experience in Banking domain. Expert in Angular, TypeScript, .NET Core, Oracle. Based in Bangalore, India.",
  keywords: [
    "Full Stack Developer",
    "FinTech",
    "Angular Developer",
    ".NET Developer",
    "Bangalore",
    "Deekshitha GR",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Outfit', sans-serif" }}>{children}</body>
    </html>
  );
}
