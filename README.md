# Alltid Svar — Next.js hemsida

## Gå live på 30 minuter

### Steg 1 — Installera Node.js
https://nodejs.org → ladda ner LTS-versionen.

### Steg 2 — Installera projektet
```bash
cd alltid-svar
npm install
```

### Steg 3 — Testa lokalt
```bash
npm run dev
```
Öppna http://localhost:3000

### Steg 4 — Deploya till Vercel (gratis)
1. Skapa konto på vercel.com och github.com
2. Ladda upp mappen till ett nytt GitHub-repo
3. I Vercel: "New Project" → välj repot → "Deploy"

### Steg 5 — Koppla domänen alltid.ai
1. Vercel-projektet → Settings → Domains → lägg till alltid.ai
2. Kopiera DNS-uppgifterna Vercel visar
3. Lägg in dem hos din domänregistrar (GoDaddy/Loopia)
4. Vänta 15–60 minuter

---

## Vad som är byggt

- **Startsida** med hero, rösknapp-demo, branschgrid (16 hantverksyrken), "så fungerar det", om-oss/expertis-sektion, blogginlägg-preview, CTA
- **Popup** som visas efter 14 sekunder och erbjuder att boka möte (visas en gång per session)
- **3 fullständiga blogginlägg** med riktig SEO-text, varsin unik URL
- **Schema markup**: Organization, ProfessionalService, och Article (på varje blogginlägg)
- **Sitemap.xml och robots.txt** automatiskt genererade
- **Fullständig metadata**: Open Graph, Twitter Cards, canonical URLs

## Lägga till fler blogginlägg

1. Skapa en ny mapp i `src/app/blogg/ditt-slug-namn/`
2. Kopiera strukturen från en befintlig artikel (t.ex. `missade-samtal-hantverkare/page.tsx`)
3. Byt ut metadata, articleSchema och brödtext
4. Lägg till länken i `src/app/sitemap.ts` och i listan på `src/app/blogg/page.tsx`

## Koppla rösknappen till en riktig ljudfil

Öppna `src/components/VoiceButton.tsx`. Just nu simulerar den uppspelning visuellt. Byt ut `setTimeout`-logiken mot en riktig `<audio>`-tagg som spelar upp en inspelning av din Autocalls-demo-agent.

## Lägga till externa scripts (SEOella, analytics, Autocalls-widget)

Öppna `src/app/layout.tsx`, leta efter kommentaren `{/* Plats för externa scripts */}` och lägg in din kod där.
