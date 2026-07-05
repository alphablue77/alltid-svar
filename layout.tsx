import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://alltid.ai'),
  title: {
    default: 'AI-telefonsvarare för hantverkare och fastighetsbolag | Alltid Svar',
    template: '%s | Alltid Svar',
  },
  description:
    'Alltid Svar är en AI-telefonsvarare som besvarar varje kundsamtal på svenska, dygnet runt. Bokar tider, tar emot felanmälningar och skickar sammanfattning direkt. Byggd för hantverkare, fastighetsbolag och servicebranschen.',
  keywords: [
    'AI-telefonsvarare',
    'AI telefonsvarare företag',
    'AI-receptionist',
    'AI röstassistent svenska',
    'missade samtal hantverkare',
    'svarsservice hantverkare',
    'telefonpassning företag',
    'AI för fastighetsbolag',
    'jourtelefon fastighetsförvaltning',
    'automatisk telefonsvarare',
    'AI för VVS',
    'AI för elektriker',
    'AI för frisörer',
    'AI för bilverkstad',
    'AI Act telefonsvarare',
    'Sverige',
  ],
  authors: [{ name: 'David', url: 'https://alltid.ai' }],
  creator: 'Alltid Svar',
  alternates: {
    canonical: 'https://alltid.ai',
  },
  openGraph: {
    title: 'AI-telefonsvarare som besvarar varje kundsamtal | Alltid Svar',
    description:
      'AI-telefonsvarare på svenska för hantverkare, fastighetsbolag och servicebranschen. Svarar dygnet runt, bokar tider och skickar sammanfattning direkt till din mobil.',
    url: 'https://alltid.ai',
    siteName: 'Alltid Svar',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alltid Svar, AI-telefonsvarare för svenska företag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-telefonsvarare för hantverkare och fastighetsbolag | Alltid Svar',
    description:
      'AI-telefonsvarare på svenska som svarar dygnet runt, bokar tider och tar emot felanmälningar. Aldrig ett missat samtal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://alltid.ai/#organization',
  name: 'Alltid Svar',
  url: 'https://alltid.ai',
  logo: 'https://alltid.ai/logo.png',
  email: 'david@alltid.ai',
  description:
    'Alltid Svar bygger AI-telefonsvarare som besvarar varje kundsamtal på svenska för hantverkare, fastighetsbolag och servicebranschen i Sverige.',
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'David',
    jobTitle: 'Grundare',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Sverige',
  },
  sameAs: [],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://alltid.ai/#service',
  name: 'Alltid Svar',
  image: 'https://alltid.ai/og-image.png',
  description:
    'AI-telefonsvarare och AI-receptionist på svenska för hantverkare, fastighetsbolag, frisörer, bilverkstäder och hela servicebranschen. Besvarar samtal dygnet runt, bokar tider och tar emot felanmälningar.',
  url: 'https://alltid.ai',
  email: 'david@alltid.ai',
  priceRange: '$$',
  areaServed: 'SE',
  serviceType: 'AI-telefonsvarare och svarsservice',
  provider: {
    '@id': 'https://alltid.ai/#organization',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
    description: 'AI-assistenten besvarar samtal dygnet runt, alla dagar.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kostar en AI-telefonsvarare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kostnaden beror på samtalsvolym och vilka funktioner du behöver, till exempel tidsbokning, felanmälan eller kalenderkoppling. Ett vanligt riktmärke är att en AI-telefonsvarare kostar en bråkdel av en anställd receptionist eller en traditionell svarsservice. Boka en kostnadsfri demo så får du ett exakt pris för din verksamhet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Låter AI-assistenten som en robot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej. Alltid Svar använder moderna svenska AI-röster som talar naturligt, hanterar avbrott och följdfrågor, och anpassas efter din verksamhets ton. Du godkänner alltid rösten och manuset innan assistenten går live.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur snabbt kan vi komma igång?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De flesta verksamheter är live inom 48 timmar. Vi börjar med ett kort samtal om hur ni jobbar idag, konfigurerar assistenten efter er verksamhet och du godkänner allt innan den kopplas in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer efter varje samtal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du får en sammanfattning direkt till mobilen eller mejlen efter varje samtal: vem som ringde, vad ärendet gällde och vad som bokades. Akuta ärenden kan flaggas separat så att du ser dem först.',
      },
    },
    {
      '@type': 'Question',
      name: 'Följer Alltid Svar EU:s nya AI-regler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Från den 2 augusti 2026 kräver EU:s AI-förordning (artikel 50) att AI-system som ringer eller besvarar samtal tydligt informerar om att det är AI, med möjlighet att kopplas till en människa. Alltid Svar levereras med detta inbyggt från start, inklusive loggning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan AI-assistenten boka tider i min kalender?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Assistenten kan kopplas till din kalender och boka tider direkt under samtalet, baserat på din faktiska tillgänglighet. Den kan även ta emot felanmälningar och skicka ärenden vidare till rätt person.',
      },
    },
  ],
}

const calEmbedScript = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Plats för externa scripts: SEOella tracking, analytics, Autocalls widget etc */}
      </head>
      <body>
        {children}
        <Script id="cal-embed" strategy="afterInteractive">
          {calEmbedScript}
        </Script>
      </body>
    </html>
  )
}
