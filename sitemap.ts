import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alltid.ai'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blogg`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blogg/eu-ai-act-ai-telefonsvarare`, lastModified: '2026-07-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blogg/vad-kostar-ai-telefonsvarare`, lastModified: '2026-07-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blogg/missade-samtal-hantverkare`, lastModified: '2026-06-10', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blogg/ai-receptionist-fastighetsbolag`, lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blogg/aldrig-missa-kundsamtal`, lastModified: '2026-04-30', changeFrequency: 'monthly', priority: 0.7 },
  ]
}
