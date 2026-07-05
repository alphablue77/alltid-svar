import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alltid Svar',
  description: 'AI-telefonsvarare',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
