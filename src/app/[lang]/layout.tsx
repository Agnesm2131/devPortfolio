import type { Metadata } from "next";
import "@/app/globals.css";
import { settings } from "@/lib/settings";

export const dynamic = "force-dynamic";

import LanguageSelector from "@/components/LanguageSelector";
import SpotifyWidget from "@/components/SpotifyWidget";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { lang } = await params;
  const name = settings?.branding?.name || "devAgnes";
  
  return {
    title: `${name} | Portfolio`,
    description: `Professional portfolio of ${name}`,
    authors: [{ name }],
  };
}

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'us' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const accentColor = settings?.colors?.accent || "#6366f1";

  return (
    <html lang={lang}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --accent-primary: ${accentColor};
            --accent-secondary: ${accentColor};
            --glow-primary: ${accentColor}4d;
          }
        `}} />
      </head>
      <body className="antialiased">
        <LanguageSelector />
        <SpotifyWidget />
        {children}
      </body>
    </html>
  );
}
