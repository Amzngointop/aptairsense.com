# AptAirSense

Indoor air quality monitor reviews for apartments and small spaces.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS custom properties
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: DM Serif Display + DM Sans (Google Fonts)

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

## Deployment (VPS with PM2 + Nginx)

```bash
npm run build
pm2 start "npm run start" --name aptairsense
```

Nginx proxy to `localhost:3000`.

## Project Structure

```
app/                        # Next.js App Router pages
  page.tsx                  # Homepage
  best/[slug]/page.tsx      # Product review articles
  guides/[slug]/page.tsx    # Editorial guides
  guides/page.tsx           # Guides index
  glossary/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms/page.tsx
  affiliate-disclosure/page.tsx
  sitemap.ts
  robots.ts

components/                 # Reusable components
  Header.tsx
  Footer.tsx
  ProductCard.tsx
  ComparisonTable.tsx
  FAQ.tsx
  CTAButton.tsx
  EditorChoiceBadge.tsx
  GuideCard.tsx
  SensorBadge.tsx
  AirQualityScale.tsx

data/                       # All site data
  site.ts                   # Site config, nav, affiliate settings
  products.ts               # 42 products (6 categories x 7)
  articles.ts               # 6 review articles
  guides.ts                 # 6 editorial guides
```

## Affiliate

Affiliate tag placeholder: `YOURTAG-20`. Replace with your Amazon Associates tag before launch.

## Content

- 42 products across 6 categories
- 6 review articles with buying guides and FAQs
- 6 editorial guides with section content
- 20-term glossary
- Contact, Privacy Policy, Terms, Affiliate Disclosure pages
