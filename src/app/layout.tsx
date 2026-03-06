import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamond Dev | Creative Developer & 3D Web Builder",
  description: "Elite creative developer portfolio — 3D web experiences, automation systems, Discord bots, and cutting-edge digital products. Built with passion, precision, and vision.",
  keywords: ["creative developer", "3D portfolio", "web developer", "React Three Fiber", "automation", "Discord bots"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans">
        <div className="gradient-mesh" />
        {children}
      </body>
    </html>
  );
}
