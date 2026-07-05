import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://alltid.ai'),
  title: {
    default: 'AI-telefonsvarare för hantverkare och fastighetsbolag | Alltid Svar',
    template: '%s | Alltid Svar',
  },
  description: 'Alltid Svar är en AI-telefonsvarare som besvarar varje kundsamtal på svenska, dygnet runt. Bokar tider, tar emot felanmälningar och ger service 24/7.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
