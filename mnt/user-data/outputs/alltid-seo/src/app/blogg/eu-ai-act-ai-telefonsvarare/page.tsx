import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nya EU-regler för AI-telefoni från 2 augusti 2026: det här gäller',
  description:
    'EU:s AI-förordning artikel 50 blir bindande 2 augusti 2026. Här är exakt vad som gäller för företag som använder AI-telefonsvarare eller röstassistent: krav, böter och hur du blir compliant.',
  alternates: {
    canonical: 'https://alltid.ai/blogg/eu-ai-act-ai-telefonsvarare',
  },
  openGraph: {
    title: 'Nya EU-regler för AI-telefoni från 2 augusti 2026',
    description:
      'AI-förordningens artikel 50 ställer krav på alla företag som använder AI i telefon. Det här behöver du veta, och göra, innan deadline.',
    type: 'article',
    publishedTime: '2026-07-03',
    url: 'https://alltid.ai/blogg/eu-ai-act-ai-telefonsvarare',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Nya EU-regler för AI-telefoni från 2 augusti 2026: det här gäller',
  description:
    'EU:s AI-förordning artikel 50 blir bindande 2 augusti 2026. Genomgång av kraven för AI-telefonsvarare: transparens, eskalering till människa, loggning och böter.',
  datePublished: '2026-07-03',
  dateModified: '2026-07-03',
  inLanguage: 'sv-SE',
  author: {
    '@type': 'Person',
    name: 'David',
    url: 'https://alltid.ai/#om-oss',
  },
  publisher: {
    '@id': 'https://alltid.ai/#organization',
  },
  mainEntityOfPage: 'https://alltid.ai/blogg/eu-ai-act-ai-telefonsvarare',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://alltid.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blogg', item: 'https://alltid.ai/blogg' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Nya EU-regler för AI-telefoni från 2 augusti 2026',
      item: 'https://alltid.ai/blogg/eu-ai-act-ai-telefonsvarare',
    },
  ],
}

export default function Post() {
  return (
    <main className="px-6 md:px-10 pt-32 pb-24 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav className="mb-10 text-sm" style={{ color: 'var(--stone)' }}>
        <a href="/" className="underline">Hem</a> · <a href="/blogg" className="underline">Blogg</a> · Regler & AI Act
      </nav>

      <span
        className="inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-6"
        style={{ background: 'var(--moss)', color: 'var(--paper)' }}
      >
        Regler & AI Act
      </span>

      <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6" style={{ color: 'var(--ink)' }}>
        Nya EU-regler för AI-telefoni från 2 augusti 2026: det här gäller
      </h1>

      <p className="text-sm font-mono mb-10" style={{ color: 'var(--stone)' }}>
        Publicerad 3 juli 2026 · 7 min läsning · Av David, grundare av Alltid Svar
      </p>

      <div className="space-y-6 text-[17px] leading-relaxed" style={{ color: 'var(--ink)' }}>
        <p>
          Den 2 augusti 2026 blir artikel 50 i EU:s AI-förordning bindande i hela EU. Det påverkar varje företag som använder AI för att ringa eller besvara telefonsamtal, oavsett om det är ett enmansföretag med en AI-telefonsvarare eller ett fastighetsbolag med automatiserad jourtelefon. Här går vi igenom vad reglerna faktiskt kräver, vem som bär ansvaret och vad du behöver göra före deadline.
        </p>

        <h2 className="font-display text-2xl pt-4" style={{ color: 'var(--ink)' }}>
          Vad säger artikel 50?
        </h2>
        <p>
          Kärnan är enkel: den som pratar med en AI ska veta om det. För AI i telefon innebär det i praktiken tre saker.
        </p>
        <p>
          För det första ska den som ringer eller blir uppringd tydligt informeras om att samtalet hanteras av AI. Informationen ska vara hörbar i början av samtalet och ges på det språk samtalet förs på. En notis på hemsidan eller i användarvillkoren räcker inte.
        </p>
        <p>
          För det andra ska den som ringer kunna be om att få prata med en människa, och den begäran ska faktiskt fungera. Ett system som säger att det kopplar vidare men aldrig gör det uppfyller inte kravet.
        </p>
        <p>
          För det tredje behöver hanteringen kunna visas i efterhand. Att kunna dokumentera att informationen faktiskt lämnades i varje samtal blir viktigt den dag en tillsynsmyndighet eller en missnöjd kund ställer frågan.
        </p>

        <h2 className="font-display text-2xl pt-4" style={{ color: 'var(--ink)' }}>
          Vem bär ansvaret: du eller din leverantör?
        </h2>
        <p>
          AI-förordningen skiljer på leverantörer, alltså den som bygger eller tillhandahåller AI-systemet, och deployers, alltså det företag som använder systemet i sin verksamhet. Båda har skyldigheter, men de är olika.
        </p>
        <p>
          Leverantören ska se till att systemet tekniskt klarar kraven: att informationen kan läsas upp, att samtal kan eskaleras till en människa och att loggar kan tas fram. Men det är du som använder systemet som ansvarar för att funktionerna faktiskt är påslagna och används rätt i dina samtal. Att din leverantör erbjuder funktionen hjälper dig inte om den är avstängd i din konfiguration.
        </p>
        <p>
          Det betyder att varje svenskt företag som idag använder någon form av AI i telefonen bör ställa två frågor till sin leverantör redan nu: stödjer systemet hörbar AI-information på svenska i början av varje samtal, och kan ni visa loggar på att det sker?
        </p>

        <h2 className="font-display text-2xl pt-4" style={{ color: 'var(--ink)' }}>
          Vad händer om man struntar i det?
        </h2>
        <p>
          Böterna för överträdelser av transparenskraven kan uppgå till 15 miljoner euro eller 3 procent av den globala årsomsättningen, beroende på vilket som är högst. För små företag kan beloppen justeras nedåt, men risken slutar inte vid böterna. Ett företag som avslöjas med att låta kunder tro att de pratar med en människa när de pratar med en maskin har också ett förtroendeproblem, och det är ofta dyrare än boten.
        </p>

        <h2 className="font-display text-2xl pt-4" style={{ color: 'var(--ink)' }}>
          Viktiga datum att hålla koll på
        </h2>
        <p>
          Den 2 augusti 2026 börjar transparenskraven i artikel 50 gälla, inklusive kravet på hörbar AI-information i samtal. Den 2 december 2026 tillkommer kravet på maskinläsbar märkning av syntetiskt ljud för system som redan fanns på marknaden, efter att EU i våras beslutade om en förlängd övergångsperiod för just den delen. EU-kommissionens uppförandekod med praktisk vägledning väntas i slutgiltig version strax före augusti-deadlinen, men den som väntar på koden innan arbetet påbörjas kommer att vara sent ute.
        </p>

        <h2 className="font-display text-2xl pt-4" style={{ color: 'var(--ink)' }}>
          Vad du konkret bör göra nu
        </h2>
        <p>
          Börja med att inventera var AI redan finns i er telefoni: telefonsvarare, växel, jourtelefon, bokningssystem eller utringande kampanjer. Kontrollera sedan att varje system informerar hörbart om AI i samtalets början, på svenska. Testa att begära en människa mitt i ett samtal och se vad som faktiskt händer. Be er leverantör om skriftligt besked på hur de uppfyller artikel 50, och spara svaret. Se till att samtalen loggas så att ni i efterhand kan visa att informationen lämnades.
        </p>
        <p>
          För den som ännu inte använder AI i telefonin men funderar på det finns en poäng i att välja rätt från start: ett system som är byggt med reglerna inbyggda kostar inget extra att göra compliant, medan ett system som saknar funktionerna kan bli ett dyrt problem.
        </p>

        <h2 className="font-display text-2xl pt-4" style={{ color: 'var(--ink)' }}>
          Så hanterar Alltid Svar kraven
        </h2>
        <p>
          Alla assistenter från Alltid Svar levereras med AI-information inbyggd i samtalets början, på svenska, utan att det går att konfigurera bort. Varje samtal kan eskaleras till en människa på kundens begäran, och samtalen loggas så att våra kunder kan visa efterlevnad om frågan ställs. Det är en av anledningarna till att vi tror att de nya reglerna är en fördel för seriösa aktörer: kunder litar mer på ett företag som är öppet med att AI svarar, särskilt när upplevelsen är bra.
        </p>
        <p>
          Vill du veta hur en AI-telefonsvarare som redan uppfyller de nya kraven skulle låta för just din verksamhet? <a href="/#kontakt" className="underline" style={{ color: 'var(--clay)' }}>Boka en kostnadsfri demo</a>, så visar vi live.
        </p>

        <p className="text-sm pt-6" style={{ color: 'var(--stone)' }}>
          Den här artikeln är en allmän genomgång och inte juridisk rådgivning. För bedömning av er specifika situation, kontakta en jurist med inriktning på AI-förordningen.
        </p>
      </div>

      <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="text-sm mb-4" style={{ color: 'var(--stone)' }}>Läs också:</p>
        <a href="/blogg/vad-kostar-ai-telefonsvarare" className="underline text-[15px]" style={{ color: 'var(--ink)' }}>
          Vad kostar en AI-telefonsvarare? Priser och jämförelse 2026
        </a>
        <br />
        <a href="/blogg/missade-samtal-hantverkare" className="underline text-[15px]" style={{ color: 'var(--ink)' }}>
          Så mycket kostar missade samtal en hantverkare varje år
        </a>
      </div>
    </main>
  )
}
