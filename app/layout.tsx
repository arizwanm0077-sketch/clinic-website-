import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import { brandConfig } from '@/config/brand';
import { SkipLink, TrustStrip, Header, Footer, MobileActionBar } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${brandConfig.name}`,
    default: `${brandConfig.name} | ${brandConfig.tagline}`,
  },
  description: brandConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content={brandConfig.colors.themeColor} />
      </head>
      <body className="min-h-screen bg-[var(--background)] antialiased flex flex-col" suppressHydrationWarning>
        <SkipLink />
        <TrustStrip />
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
