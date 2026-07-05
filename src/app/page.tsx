'use client'

import { useEffect } from 'react'
import VoiceButton from '../components/VoiceButton';
import MeetingPopup from '@/components/MeetingPopup'

const industries = [
  { icon: '🔧', name: 'VVS' },
  { icon: '⚡', name: 'Elektriker' },
  { icon: '🏗️', name: 'Byggbolag' },
  { icon: '🏠', name: 'Fastighetsbolag' },
  { icon: '🏢', name: 'BRF & förvaltning' },
  { icon: '✂️', name: 'Frisörer' },
  { icon: '🚗', name: 'Bilmekaniker' },
  { icon: '🪟', name: 'Glasmästare' },
  { icon: '🔒', name: 'Låssmed' },
  { icon: '🎨', name: 'Målare' },
  { icon: '🌳', name: 'Trädgårdsmästare' },
  { icon: '💆', name: 'Skönhetssalonger' },
  { icon: '🐾', name: 'Veterinärkliniker' },
  { icon: '🧹', name: 'Städfirmor' },
  { icon: '🔨', name: 'Snickare' },
  { icon: '🏡', name: 'Mäklare' },
]

const blogPosts = [
  {
    slug: 'eu-ai-act-ai-telefonsvarare',
    title: 'Nya EU-regler för AI-telefoni från 2 augusti 2026: det här gäller',
    excerpt:
      'EU:s AI-förordning ställer nya krav på alla företag som använder AI i telefon. Vi går igenom exakt vad artikel 50 innebär, vilka böter som gäller och hur du blir compliant i tid.',
    date: '2026-07-03',
    readTime: '7 min',
    category: 'Regler & AI Act',
  },
  {
    slug: 'vad-kostar-ai-telefonsvarare',
    title: 'Vad kostar en AI-telefonsvarare? Priser och jämförelse 2026',
    excerpt:
      'En ärlig genomgång av vad en AI-telefonsvarare kostar jämfört med svarsservice, receptionist och missade samtal. Med räkneexempel för hantverkare och servicebolag.',
    date: '2026-07-03',
    readTime: '6 min',
    category: 'Guide',
  },
  {
    slug: 'missade-samtal-hantverkare',
    title: 'Så mycket kostar missade samtal en hantverkare varje år',
    excerpt:
      'En genomgång av vad ett enda missat samtal faktiskt kostar i förlorad intäkt, och varför svenska hantverkare förlorar miljonbelopp varje år utan att veta om det.',
    date: '2026-06-10',
    readTime: '6 min',
    category: 'Hantverkare',
  },
]

const faqItems = [
  {
    q: 'Vad kostar en AI-telefonsvarare?',
    a: 'Kostnaden beror på samtalsvolym och vilka funktioner du behöver, till exempel tidsbokning, felanmälan eller kalenderkoppling. Ett vanligt riktmärke är att en AI-telefonsvarare kostar en bråkdel av en anställd receptionist eller en traditionell svarsservice. Boka en kostnadsfri demo så får du ett exakt pris för din verksamhet.',
  },
  {
    q: 'Låter AI-assistenten som en robot?',
    a: 'Nej. Alltid Svar använder moderna svenska AI-röster som talar naturligt, hanterar avbrott och följdfrågor, och anpassas efter din verksamhets ton. Du godkänner alltid rösten och manuset innan assistenten går live.',
  },
  {
    q: 'Hur snabbt kan vi komma igång?',
    a: 'De flesta verksamheter är live inom 48 timmar. Vi börjar med ett kort samtal om hur ni jobbar idag, konfigurerar assistenten efter er verksamhet och du godkänner allt innan den kopplas in.',
  },
  {
    q: 'Vad händer efter varje samtal?',
    a: 'Du får en sammanfattning direkt till mobilen eller mejlen efter varje samtal: vem som ringde, vad ärendet gällde och vad som bokades. Akuta ärenden kan flaggas separat så att du ser dem först.',
  },
  {
    q: 'Följer Alltid Svar EU:s nya AI-regler?',
    a: 'Ja. Från den 2 augusti 2026 kräver EU:s AI-förordning (artikel 50) att AI-system som ringer eller besvarar samtal tydligt informerar om att det är AI, med möjlighet att kopplas till en människa. Alltid Svar levereras med detta inbyggt från start, inklusive loggning.',
  },
  {
    q: 'Kan AI-assistenten boka tider i min kalender?',
    a: 'Ja. Assistenten kan kopplas till din kalender och boka tider direkt under samtalet, baserat på din faktiska tillgänglighet. Den kan även ta emot felanmälningar och skicka ärenden vidare till rätt person.',
  },
]

const calAttrs = {
  'data-cal-link': 'david-nuay-0jcatd/15min',
  'data-cal-namespace': '15min',
  'data-cal-config': '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <MeetingPopup />

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
        style={{ background: 'rgba(251, 248, 242, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)' }}
      >
        <a href="#" className="font-display text-xl tracking-tight" style={{ color: 'var(--ink)' }}>
          Alltid <span style={{ color: 'var(--clay)' }}>Svar</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'var(--stone)' }}>
          <a href="#branscher" className="hover:opacity-70 transition-opacity">Branscher</a>
          <a href="#sa-fungerar" className="hover:opacity-70 transition-opacity">Så fungerar det</a>
          <a href="#om-oss" className="hover:opacity-70 transition-opacity">Om oss</a>
          <a href="#faq" className="hover:opacity-70 transition-opacity">Vanliga frågor</a>
          <a href="/blogg" className="hover:opacity-70 transition-opacity">Artiklar</a>
        </div>
        <button
          {...calAttrs}
          className="rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03] cursor-pointer"
          style={{ background: 'var(--ink)', color: 'var(--paper)' }}
        >
          Boka demo
        </button>
      </nav>

      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-36 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 items-start">
          <div>
            <div
              className="animate-fade-up inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full text-xs font-medium font-mono"
              style={{ background: 'var(--moss)', color: 'var(--paper)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#9FE08A' }} />
              AI-TELEFONSVARARE FÖR HANTVERKARE & FASTIGHETSBOLAG
            </div>

            <h1
              className="animate-fade-up delay-1 font-display leading-[0.98] mb-7"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: 'var(--ink)', fontWeight: 500 }}
            >
              Telefonen ringer.<br />
              Du är uppe på taket.<br />
              <span className="signature-underline" style={{ color: 'var(--clay)' }}>Alltid Svar</span> svarar.
            </h1>

            <p
              className="animate-fade-up delay-2 text-lg leading-relaxed mb-9 max-w-lg"
              style={{ color: 'var(--stone)' }}
            >
              Alltid Svar är en AI-telefonsvarare som besvarar varje kundsamtal på svenska, dygnet runt. Den bokar tider, tar emot felanmälningar och skickar en sammanfattning till din mobil på sekunder. Inga missade samtal. Inga förlorade jobb.
            </p>

            <div className="animate-fade-up delay-3 flex flex-wrap gap-4">
              <button
                {...calAttrs}
                className="rounded-full px-7 py-4 font-medium transition-transform hover:scale-[1.02] cursor-pointer"
                style={{ background: 'var(--clay)', color: 'var(--paper)' }}
              >
                Boka 15 minuter med David →
              </button>
              <a
                href="#branscher"
                className="rounded-full px-7 py-4 font-medium border transition-colors"
                style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
              >
                Se din bransch
              </a>
            </div>
          </div>

          <div className="animate-fade-up delay-4 flex flex-col items-center pt-6">
            <VoiceButton />
            <div className="mt-10 w-full rounded-2xl p-6" style={{ background: 'var(--ink)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full" style={{ background: '#9FE08A' }} />
                <span className="text-xs font-mono" style={{ color: '#9FE08A' }}>LIVE · JOHANSSONS VVS</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--paper)' }}>
                <span style={{ color: 'var(--clay)' }}>Kund:</span> Hej, jag har ett läckande rör, ganska akut.
              </p>
              <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--paper)' }}>
                <span style={{ color: '#9FE08A' }}>Alltid Svar:</span> Jag förstår. Vad är adressen så bokar jag in ett akut besök idag?
              </p>
              <div className="mt-4 pt-4 flex justify-between items-center" style={{ borderTop: '1px solid #2A2825' }}>
                <span className="text-xs font-mono" style={{ color: 'var(--stone)' }}>0:34</span>
                <span className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ background: '#1F3A1A', color: '#9FE08A' }}>✓ Bokad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { n: '100%', l: 'av samtal besvaras, dag och natt' },
            { n: '5+ år', l: 'erfarenhet inom AI och bygg-tech' },
            { n: '2017', l: 'i SaaS-branschen sedan' },
          ].map((s) => (
            <div key={s.l} className="reveal">
              <div className="font-display text-4xl mb-1" style={{ color: 'var(--clay)' }}>{s.n}</div>
              <div className="text-sm" style={{ color: 'var(--stone)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANSCHER */}
      <section id="branscher" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <div className="reveal mb-12 max-w-xl">
          <p className="font-mono text-xs mb-4" style={{ color: 'var(--clay)' }}>01 · BRANSCHER</p>
          <h2 className="font-display text-4xl mb-4" style={{ color: 'var(--ink)' }}>
            En AI-receptionist för hela servicebranschen.
          </h2>
          <p style={{ color: 'var(--stone)' }}>
            Om dina kunder ringer och du inte alltid kan svara är det här byggt för dig. Vi levererar svarsservice med AI till alla dessa branscher, och fler.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="craft-card reveal flex items-center gap-3 px-4 py-4 rounded-xl border"
              style={{ background: 'white', borderColor: 'var(--line)' }}
            >
              <span className="text-xl">{ind.icon}</span>
              <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SÅ FUNGERAR DET */}
      <section id="sa-fungerar" style={{ background: 'var(--ink)' }} className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16 max-w-xl">
            <p className="font-mono text-xs mb-4" style={{ color: '#9FE08A' }}>02 · SÅ FUNGERAR DET</p>
            <h2 className="font-display text-4xl mb-4" style={{ color: 'var(--paper)' }}>
              Live på 48 timmar.
            </h2>
            <p style={{ color: '#A8A39A' }}>
              Du behöver inte förstå AI. Du behöver bara svara på några frågor om din verksamhet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '01', t: 'Vi pratar en gång', d: 'Ett 20-minuterssamtal med David. Vi går igenom hur ni jobbar idag och vad som faktiskt ska sägas i samtalen.' },
              { n: '02', t: 'Vi bygger din assistent', d: 'Vi konfigurerar röst, manus och bokningsflöde specifikt för din verksamhet. Du godkänner innan den går live.' },
              { n: '03', t: 'Den svarar, du jobbar', d: 'Från dag ett besvaras varje samtal. Du får en sammanfattning direkt på mobilen efter varje kund som ringer.' },
            ].map((s) => (
              <div key={s.n} className="reveal">
                <p className="font-display text-3xl mb-4" style={{ color: 'var(--clay)' }}>{s.n}</p>
                <h3 className="font-display text-xl mb-2" style={{ color: 'var(--paper)' }}>{s.t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A8A39A' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OM OSS / EXPERTIS */}
      <section id="om-oss" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div className="reveal">
            <p className="font-mono text-xs mb-4" style={{ color: 'var(--clay)' }}>03 · VARFÖR OSS</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: 'var(--ink)' }}>
              Vi kommer från branschen, inte bara från tekniken.
            </h2>
            <div
              className="rounded-2xl p-6"
              style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display text-base"
                  style={{ background: 'var(--clay)', color: 'var(--paper)' }}
                >
                  D
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: 'var(--ink)' }}>David</p>
                  <p className="text-xs" style={{ color: 'var(--stone)' }}>Grundare, Alltid Svar</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>
                Innan Alltid Svar jobbade jag med SaaS-försäljning till svenska bolag sedan 2017, bland annat på Infobric, en av de största aktörerna inom digitala lösningar för byggbranschen. Jag har sålt till de största aktörerna i branschen och till ensamföretagare, och allt däremellan.
              </p>
            </div>
          </div>

          <div className="reveal space-y-5">
            {[
              { t: '5+ år med AI', d: 'Vi har djup erfarenhet av att bygga och implementera AI-lösningar som faktiskt fungerar i skarpt läge, inte bara i en demo.' },
              { t: 'Byggbranschen utifrån och in', d: 'Erfarenhet från Infobric och liknande aktörer betyder att vi förstår hur en hantverkare faktiskt jobbar, inte bara hur mjukvara fungerar.' },
              { t: 'Från enmansföretag till storbolag', d: 'Vi har sålt och levererat till några av branschens största aktörer, och till en ensam snickare som jobbar själv. Samma omsorg, oavsett storlek.' },
              { t: 'SaaS-erfarenhet sedan 2017', d: 'Nästan ett decennium i mjukvarubranschen betyder att vi vet hur man bygger något som faktiskt levererar, inte bara låter bra på en hemsida.' },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 items-start">
                <div className="dot-divider w-1 h-1 rounded-full mt-2.5 flex-shrink-0" style={{ background: 'var(--clay)', opacity: 1 }} />
                <div>
                  <h3 className="font-medium mb-1" style={{ color: 'var(--ink)' }}>{item.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--stone)' }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-10 py-24 max-w-4xl mx-auto">
        <div className="reveal mb-12">
          <p className="font-mono text-xs mb-4" style={{ color: 'var(--clay)' }}>04 · VANLIGA FRÅGOR</p>
          <h2 className="font-display text-4xl mb-4" style={{ color: 'var(--ink)' }}>
            Vanliga frågor om AI-telefonsvarare
          </h2>
          <p style={{ color: 'var(--stone)' }}>
            Det här är frågorna vi får oftast. Hittar du inte svaret? Boka en demo så tar vi det direkt.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="craft-card reveal rounded-2xl border px-6 py-5"
              style={{ background: 'white', borderColor: 'var(--line)' }}
            >
              <summary className="font-display text-lg cursor-pointer list-none flex justify-between items-center gap-4" style={{ color: 'var(--ink)' }}>
                {item.q}
                <span className="font-mono text-xl flex-shrink-0" style={{ color: 'var(--clay)' }}>+</span>
              </summary>
              <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--stone)' }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* BLOGG PREVIEW */}
      <section style={{ background: 'var(--line)' }} className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs mb-4" style={{ color: 'var(--clay)' }}>05 · LÄSNING</p>
              <h2 className="font-display text-4xl" style={{ color: 'var(--ink)' }}>
                Senaste från bloggen
              </h2>
            </div>
            <a href="/blogg" className="text-sm font-medium underline" style={{ color: 'var(--ink)' }}>
              Alla artiklar →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="craft-card reveal block rounded-2xl p-6 border"
                style={{ background: 'var(--paper)', borderColor: 'var(--line)' }}
              >
                <span
                  className="inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-4"
                  style={{ background: 'var(--moss)', color: 'var(--paper)' }}
                >
                  {post.category}
                </span>
                <h3 className="font-display text-lg mb-3 leading-snug" style={{ color: 'var(--ink)' }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--stone)' }}>
                  {post.excerpt}
                </p>
                <p className="text-xs font-mono" style={{ color: 'var(--stone)' }}>
                  {post.readTime} läsning
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT / CTA */}
      <section id="kontakt" className="px-6 md:px-10 py-28 max-w-3xl mx-auto text-center">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: 'var(--ink)' }}>
            Redo att <span className="signature-underline" style={{ color: 'var(--clay)' }}>alltid svara?</span>
          </h2>
          <p className="text-lg mb-9" style={{ color: 'var(--stone)' }}>
            Boka 15 minuter med David. Inget säljsnack, bara en demo av hur det faktiskt skulle låta för din verksamhet. Välj en tid som passar dig, alla dagar 08:00 till 17:00.
          </p>
          <button
            {...calAttrs}
            className="inline-block rounded-full px-9 py-4 font-medium text-lg transition-transform hover:scale-[1.02] cursor-pointer"
            style={{ background: 'var(--clay)', color: 'var(--paper)' }}
          >
            Boka demo med David →
          </button>
          <p className="text-sm mt-6" style={{ color: 'var(--stone)' }}>
            Eller mejla direkt: <a href="mailto:david@alltid.ai" className="underline">david@alltid.ai</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-8 max-w-6xl mx-auto flex flex-wrap justify-between gap-4" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="text-sm" style={{ color: 'var(--stone)' }}>© 2026 Alltid Svar · alltid.ai</p>
        <p className="text-sm" style={{ color: 'var(--stone)' }}>david@alltid.ai</p>
      </footer>
    </main>
  )
}
