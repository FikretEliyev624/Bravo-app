# 🟢 BRAVO PULSE — FRONTEND CLONE PROMPT
## Senior React Developer üçün Pixel-Perfect UI Prompt

---

## 📋 LAYIHƏ HAQQINDA

Azərbaycanın ən böyük pərakəndə şəbəkəsi **Bravo**nun mobil tətbiqinin veb klonu.
Stack: **React 18 + Vite + TypeScript + TailwindCSS + shadcn/ui + React Router v6**

---

## 🎨 DESIGN TOKEN SİSTEMİ — CSS VARIABLES

`src/styles/tokens.css` faylında aşağıdakı dəyişənləri təyin et:

```css
:root {
  /* ── Primary Brand ── */
  --bravo-green-900: #1a3d1f;       /* Header bg, hero bg (tünd yaşıl) */
  --bravo-green-800: #1e4a24;       /* Header gradient dark stop */
  --bravo-green-700: #2d6a35;       /* Card bg (Customer Tiers) */
  --bravo-green-600: #3a7d44;       /* Interactive elements */
  --bravo-green-500: #4caf50;       /* Active nav icon, CTA buttons */
  --bravo-green-400: #6dbf6f;       /* Hover states */
  --bravo-green-100: #e8f5e9;       /* Light tint backgrounds */

  /* ── Accent / Campaign ── */
  --bravo-red-600:   #d32f2f;       /* Campaign card bg (50% endirim) */
  --bravo-red-500:   #e53935;       /* Campaign bright red */
  --bravo-gold-400:  #ffc107;       /* "50%" text color, gold tiers */
  --bravo-gold-300:  #ffd54f;       /* Gold shimmer */

  /* ── Tier Colors ── */
  --tier-basic-bg:   #4caf50;       /* Basic — solid green */
  --tier-bronze-bg:  #cd7f32;       /* Bronze — copper */
  --tier-silver-bg:  #c0c0c0;       /* Silver — metallic */
  --tier-gold-bg:    #d4af37;       /* Gold — rich gold */
  --tier-elite-bg:   #1a1a2e;       /* Elite — near-black / dark navy */

  /* ── Neutral ── */
  --white:           #ffffff;
  --gray-50:         #f9fafb;       /* Page background */
  --gray-100:        #f3f4f6;       /* Section dividers, card bg (coupons empty) */
  --gray-200:        #e5e7eb;       /* Borders */
  --gray-400:        #9ca3af;       /* Placeholder text */
  --gray-600:        #4b5563;       /* Secondary text */
  --gray-900:        #111827;       /* Primary text (headings) */

  /* ── Typography ── */
  --font-primary: 'BravoFont', 'SF Pro Display', sans-serif; /* /assets/fonts */
  --font-weight-regular: 400;
  --font-weight-medium:  500;
  --font-weight-bold:    700;
  --font-weight-black:   900;

  /* ── Border Radius ── */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   20px;
  --radius-2xl:  24px;
  --radius-full: 9999px;

  /* ── Spacing ── */
  --page-padding-x: 16px;
  --section-gap:    24px;

  /* ── Shadow ── */
  --shadow-card:  0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-float: 0 8px 24px rgba(0,0,0,0.12);

  /* ── Transitions ── */
  --ease-default: 200ms ease;
  --ease-spring:  300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 📁 FAYL STRUKTURU

```
src/
├── assets/
│   ├── fonts/            ← /assets/fonts/*.woff2 (BravoFont)
│   └── images/
│       ├── logo.png      ← Bravo hex logo
│       └── bir_bonus.svg ← BirBonus color diamond logo
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx         ← Root layout wrapper
│   │   ├── Header.tsx           ← Sticky top header
│   │   └── BottomNav.tsx        ← Fixed bottom navigation
│   ├── ui/
│   │   ├── BarcodeDisplay.tsx   ← SVG barcode + copy
│   │   ├── SectionHeader.tsx    ← Title + "See all" link
│   │   ├── PromoCard.tsx        ← Generic promo banner card
│   │   ├── TierCard.tsx         ← Customer tier mini card
│   │   └── ProductCard.tsx      ← AI recommendation product card
│   └── home/
│       ├── HeroSection.tsx
│       ├── CustomerTiersCard.tsx
│       ├── CampaignCard.tsx
│       ├── BravoOnlineCard.tsx
│       ├── MyCampaignsSection.tsx
│       └── MyCouponsSection.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── CouponsPage.tsx          ← boş saxla
│   ├── AIRecommendationPage.tsx ← Əsas feature
│   └── MorePage.tsx             ← boş saxla
├── styles/
│   ├── tokens.css
│   └── fonts.css
└── App.tsx                      ← Router setup
```

---

## 🧩 KOMPONENT SPESİFİKASİYALARI

---

### 1. `Header.tsx` — Sticky Top Bar

```
┌─────────────────────────────────────────┐
│ [logo.png]  [bir_bonus.svg | 0,63]  [👤]│
│ hex icon    white pill badge             │
└─────────────────────────────────────────┘
```

**Visual specs:**
- Background: `var(--bravo-green-900)` — #1a3d1f
- Height: 64px (sabit)
- Padding: 0 16px
- `position: sticky; top: 0; z-index: 50`

**Sol blok — Logo:**
- `<img src="/assets/images/logo.png">` → width: 40px
- Logo ağ rəngdə render olur (white filter)

**Orta blok — BirBonus Badge:**
- Background: `#ffffff` (ağ)
- Border-radius: `var(--radius-full)` — pill shape
- Padding: 6px 14px
- İçəridə: `<img src="/assets/images/bir_bonus.svg">` (colorful diamond icon, 20px) + `<span>0,63</span>`
- Font: 16px, font-weight: 600, color: `var(--gray-900)`
- Gap between icon and text: 6px

**Sağ blok — User Icon:**
- `react-icons/fi` → `<FiUser size={22} color="white" />`
- Circular border: `1.5px solid rgba(255,255,255,0.6)`
- Width/height: 36px, border-radius: 50%
- Cursor: pointer

---

### 2. `HeroSection.tsx` — Green Hero + Barcode

```
┌─────────────────────────────────────────┐
│ bg: #1a3d1f (yeşil)                     │
│                                         │
│  Salam, Tunar       ← bold, white, 28px │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │  ▌▌▌▌▌▌▌▌▌▌▌▌▌▌ (barcode SVG)  │   │
│  │       23202650388  [copy icon]   │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Visual specs:**
- Background: `var(--bravo-green-900)` — hero ilə header arası seamless
- Decorative abstract shape: tünd yaşıl dalğa pattern (sağ alt küncdə) — opacity: 0.15, `border-radius: 50% 30% 50% 30%`
- Padding: 20px 16px 28px

**Greeting text:**
- "Salam," — font-size: 26px, font-weight: 400, color: rgba(255,255,255,0.85)
- User name — font-size: 26px, font-weight: 700, color: #ffffff
- Margin-bottom: 16px

**Barcode Card:**
- Background: `#ffffff`
- Border-radius: `var(--radius-xl)` — 20px
- Padding: 20px 16px 16px
- Box-shadow: `var(--shadow-float)`

  - SVG Barcode: height 60px, width: 100%, auto-generated lines pattern
  - Barcode number: "23202650388"
    - font-size: 14px, font-weight: 500, color: `var(--gray-900)`
    - text-decoration: underline
    - margin-top: 8px
  - Copy icon: `<FiCopy size={16}>` sağda, color: `var(--gray-600)`, onClick → clipboard API + toast

---

### 3. `CustomerTiersCard.tsx` — Tier Banner

```
┌─────────────────────────────────────────────┐
│ bg: #2d6a35 (medium green), radius: 16px    │
│                                             │
│ [BASIC][BRONZE][SILVER][GOLD][ELITE] cards  │
│  (mini horizontal scroll)                  │
│                                             │
│ Customer Tiers                ←  white, bold│
│ Learn about the advantages... ←  white, 13px│
│                                           →│
└─────────────────────────────────────────────┘
```

**Visual specs:**
- Background: `var(--bravo-green-700)` — #2d6a35
- Border-radius: `var(--radius-lg)` — 16px
- Overflow: hidden
- Margin: 0 16px

**Mini tier cards (horizontal scroll row):**
- Padding: 16px 12px 8px
- Each mini card: 90px × 52px, border-radius: 8px
- Gap between: 6px
- Colors exacta:
  - Basic: `var(--tier-basic-bg)` #4caf50
  - Bronze: `var(--tier-bronze-bg)` #cd7f32
  - Silver: `var(--tier-silver-bg)` #c0c0c0
  - Gold: `var(--tier-gold-bg)` #d4af37
  - Elite: `var(--tier-elite-bg)` #1a1a2e
- Label text: 9px, uppercase, white (or black for silver/gold)
- HexaCoin badge: tiny diamond icon (⬡) + "X/4000 HexaCoin", 8px white text

**Bottom text row:**
- Padding: 12px 16px
- "Customer Tiers": font-size: 18px, font-weight: 700, color: #ffffff
- Subtitle: font-size: 13px, color: rgba(255,255,255,0.8)
- Arrow (→): `<FiArrowRight>` sağda, white, circular bg: rgba(255,255,255,0.2), 32px×32px

---

### 4. `CampaignCard.tsx` — Red Discount Banner

```
┌─────────────────────────────────────────────┐
│ bg: #d32f2f (kırmızı), radius: 16px         │
│                                             │
│  ┌──────────┐   50%        ← gold, 72px     │
│  │yalnız    │   -dək                        │
│  │[Bravo]   │   endirim!   ← gold italic    │
│  │tətbiqə   │                               │
│  └──────────┘                               │
│                                             │
│ Offers are valid until 26 may.    [→]       │
└─────────────────────────────────────────────┘
```

**Visual specs:**
- Background: `var(--bravo-red-600)` — #d32f2f
- Border-radius: `var(--radius-lg)` — 16px
- Overflow: hidden
- Margin: 0 16px
- Min-height: 180px

**Sol blok — App promo:**
- White rounded card: border-radius: 12px, padding: 8px
- "yalnız" badge: pink/magenta pill, font-size: 11px, top-left of card
- Bravo logo: 40px
- "tətbiqə" badge: green pill, font-size: 10px, bottom of card

**Sağ blok — Discount text:**
- "50%" — font-size: 64px, font-weight: 900, color: `var(--bravo-gold-400)` #ffc107
- "-dək" — font-size: 20px, color: `var(--bravo-gold-300)`, italic
- "endirim!" — font-size: 22px, color: `var(--bravo-gold-300)`, italic, cursive feel

**Alt row:**
- "Offers are valid until 26 may." — font-size: 12px, color: rgba(255,255,255,0.85)
- Arrow button: 36px×36px, bg: `var(--bravo-red-500)`, border-radius: 10px, white →

---

### 5. `BravoOnlineCard.tsx` — Delivery Banner

```
┌─────────────────────────────────────────────┐
│ bg: #2d6a35 (yaşıl), radius: 16px           │
│ Illustration: grocery bag + phone + scooter │
└─────────────────────────────────────────────┘
```

- Background: `var(--bravo-green-700)`
- Height: ~160px
- Center: Bravo Online illustration (import etdiyin SVG/PNG asset)
- Alt sol: küçük text "Bravo Online"

---

### 6. `MyCampaignsSection.tsx`

**Section header pattern:**
```jsx
<SectionHeader title="My Campaigns" href="/campaigns" />
```
- Title: font-size: 18px, font-weight: 700, color: `var(--gray-900)`
- "See all": font-size: 14px, color: `var(--bravo-green-500)`, font-weight: 500

**Campaign promo card (Brand of Azerbaijan):**
- Width: 100%, min-height: 160px
- Border-radius: `var(--radius-lg)` — 16px
- Background: linear-gradient(135deg, #a8d5b5 0%, #c8e6c9 100%) — açıq yaşıl gradient
- Sol: Azərbaycan ornament image (SVG)
- Sağ: "Yurdumuzdan qürurla" 11px gray, "BRAND OF AZERBAIJAN" 22px bold black
- Alt sol: "Click to view all discounts" — 11px, `var(--bravo-red-600)`
- Arrow button: 36px, bg: `var(--bravo-green-500)`, bottom-right, border-radius: 10px

---

### 7. `MyCouponsSection.tsx`

**Section header:** `<SectionHeader title="My coupons" href="/coupons" />`

**Empty state card:**
- Background: `var(--gray-100)` — #f3f4f6
- Border-radius: `var(--radius-lg)` — 16px
- Padding: 32px 24px
- Text align: center
- "No coupons yet" — 15px, font-weight: 600, color: `var(--gray-900)`
- Subtitle — 13px, color: `var(--gray-600)`

---

### 8. `BottomNav.tsx` — Fixed Footer Navigation

```
┌──────────────────────────────────────────────────┐
│  🏠       📢      🤖         🎟        ☰        │
│ Home  Campaigns  AI Rec.  Coupons   More         │
└──────────────────────────────────────────────────┘
```

**Visual specs:**
- Background: `#ffffff`
- Height: 64px
- Border-top: 1px solid `var(--gray-200)`
- `position: fixed; bottom: 0; left: 0; right: 0; z-index: 50`
- Safe area support: `padding-bottom: env(safe-area-inset-bottom, 0px)`
- 5 bərabər sütun: `display: grid; grid-template-columns: repeat(5, 1fr)`

**Nav Items:**
```
Tab 1: Home       → react-icons/fi FiHome        → route: /
Tab 2: Campaigns  → react-icons/fi FiVolume2      → route: /campaigns  (boş)
Tab 3: AI Rec.    → react-icons/ri RiRobot2Line   → route: /ai          (ƏSAS)
Tab 4: Coupons    → react-icons/fi FiTag          → route: /coupons    (boş)
Tab 5: More       → react-icons/fi FiMenu         → route: /more       (boş)
```

**Active state:**
- Icon color: `var(--bravo-green-500)` — #4caf50
- Label color: `var(--bravo-green-500)`
- Font-size label: 10px
- Inactive: `var(--gray-400)`

**Micro-interaction:**
```css
.nav-item:active {
  transform: scale(0.9);
  transition: transform 150ms ease;
}
```

---

## 🤖 AI RECOMMENDATION PAGE — Tam Struktur

`src/pages/AIRecommendationPage.tsx`

---

### Page Layout (scroll view, no sticky except header):

```
┌──────────────────────────────────────┐
│  Header (sticky)                     │
├──────────────────────────────────────┤
│                                      │
│  ⚠️ YENI BÖLMƏ — Yaddan çıxan       │
│  ┌──────────────────────────────┐   │
│  │ 🔔 Yaddan çıxan məhsullar   │   │
│  │ [Ödəniş tarixi] [Filial]     │   │
│  │                              │   │
│  │  [🛒 item] [🛒 item] ...     │   │
│  └──────────────────────────────┘   │
│                                      │
│  BÖLMƏ 1                            │
│  ─────────────────────────────────  │
│  Hər zaman alınan məhsullar  [→]   │
│                                      │
│  [ProductCard] [ProductCard] ...     │
│  (horizontal scroll)                │
│                                      │
│  BÖLMƏ 2                            │
│  ─────────────────────────────────  │
│  Səbətinizə uyğun tövsiyyə   [→]   │
│                                      │
│  [ProductCard] [ProductCard] ...     │
│  (horizontal scroll)                │
│                                      │
└──────────────────────────────────────┘
```

---

### `ForgottenProductsBanner.tsx` — Yaddan çıxan məhsullar

**Visual specs:**
- Background: linear-gradient(135deg, `#fff8e1` 0%, `#fff3e0` 100%) — warm amber tint
- Border: 1.5px solid `#ffc107`
- Border-radius: `var(--radius-lg)` — 16px
- Padding: 16px
- Margin: 16px

**Header row:**
```
🔔  Yaddan çıxan məhsullar
    Ödəniş: 16 May, 14:32  •  Nərimanov filialı
```
- Bell icon: `<FiBell>` color: `#f59e0b`, 18px
- Title: font-size: 15px, font-weight: 700, color: `var(--gray-900)`
- Meta info: font-size: 12px, color: `var(--gray-600)`
- Clock icon (`<FiClock size={12}>`) + location icon (`<FiMapPin size={12}>`) inlined

**Products row (horizontal scroll):**
- Scrollable row, gap: 8px
- Each forgotten item: 70px×70px mini card
  - Background: white
  - Border-radius: 10px
  - Border: 1px solid `var(--gray-200)`
  - Product emoji/image: 40px centered
  - Name: 10px, truncated, center
  - "+ Əlavə et" button: 20px height, font-size: 9px, bg: `var(--bravo-green-500)`, color: white, border-radius: full

**TypeScript interface:**
```typescript
interface ForgottenProduct {
  id: string;
  name: string;
  imageUrl?: string;
  emoji?: string;
  category: string;
}

interface ForgottenBannerProps {
  products: ForgottenProduct[];
  lastPurchaseDate: string;   // "16 May, 14:32"
  branchName: string;         // "Nərimanov filialı"
}
```

---

### `ProductCard.tsx` — Reusable AI Recommendation Card

```
┌─────────────────────┐
│  [product image]    │ ← 120px height, object-fit: cover
│  ─────────────────  │
│  Süd 2.5%           │ ← 13px, bold, gray-900
│  Azərbayd... 1L     │ ← 11px, gray-500, truncate
│  2.49 ₼             │ ← 16px, bold, green-600
│              [+]    │ ← 32px, circle, green-500
└─────────────────────┘
```

**Visual specs:**
- Width: 140px (fixed)
- Background: `#ffffff`
- Border-radius: `var(--radius-md)` — 12px
- Border: 1px solid `var(--gray-200)`
- Box-shadow: `var(--shadow-card)`
- Overflow: hidden

**Image area:**
- Height: 110px
- Background: `var(--gray-50)`
- Object-fit: contain, padding: 8px
- Fallback: emoji centered on gray-50 bg

**Info area (padding: 10px):**
- Product name: 13px, font-weight: 600, max 2 lines (line-clamp: 2)
- Brand/weight: 11px, `var(--gray-500)`, single line truncate
- Price row:
  - Price: 16px, font-weight: 700, color: `var(--bravo-green-600)`
  - Add button: 32px circle, bg: `var(--bravo-green-500)`, `<FiPlus size={16} color="white">`

**Hover state:**
```css
.product-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-float);
  transition: var(--ease-spring);
}
```

**TypeScript interface:**
```typescript
interface Product {
  id: string;
  name: string;
  brand?: string;
  weight?: string;
  price: number;
  currency: string;  // "₼"
  imageUrl?: string;
  emoji?: string;
  category: string;
  isRecommended: boolean;
  matchScore?: number; // 0-100, AI confidence
}
```

---

### `ProductSection.tsx` — Hər iki bölmə üçün generic

```typescript
interface ProductSectionProps {
  title: string;       // "Hər zaman alınan məhsullar"
  products: Product[];
  showSeeAll?: boolean;
  onSeeAll?: () => void;
  loading?: boolean;   // skeleton state
  emptyMessage?: string;
}
```

**Section header:**
- Title: 17px, font-weight: 700, color: `var(--gray-900)`
- Left accent: 3px solid `var(--bravo-green-500)` — sol divider bar
- "Hamısına bax →": font-size: 13px, color: `var(--bravo-green-500)`

**Horizontal scroll container:**
```css
.product-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 12px 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* hidden scrollbar */
}

.product-scroll > * {
  scroll-snap-align: start;
  flex-shrink: 0;
}
```

**Loading skeleton:**
- 3 placeholder cards, same dimensions
- Background: linear-gradient pulse animation (shimmer effect)
- `animate-pulse` Tailwind class

---

### AI Page Section Titles

```
1. "Yaddan çıxan məhsullar"    ← Amber/warning tone section
2. "Hər zaman alınan məhsullar" ← Regular green tone
3. "Səbətinizə uyğun tövsiyyə edilən məhsullar" ← AI purple-green accent
```

**Mock data structure for page:**
```typescript
const mockData = {
  forgottenProducts: {
    products: [
      { id: '1', name: 'Çörək', emoji: '🍞', category: 'Çörək' },
      { id: '2', name: 'Kefir', emoji: '🥛', category: 'Süd məhsulları' },
      { id: '3', name: 'Yumurta', emoji: '🥚', category: 'Yumurta' },
    ],
    lastPurchaseDate: '16 May, 14:32',
    branchName: 'Nərimanov filialı',
  },
  regularProducts: [
    { id: 'r1', name: 'Süd 2.5%', brand: 'Gəncə süd', weight: '1L', price: 2.49, currency: '₼', emoji: '🥛', isRecommended: false },
    { id: 'r2', name: 'Çörək Baton', brand: 'Bakı çörəkçisi', weight: '400q', price: 0.89, currency: '₼', emoji: '🍞', isRecommended: false },
    { id: 'r3', name: 'Yumurta', brand: 'Kənd təsərrüfatı', weight: '10 əd', price: 3.20, currency: '₼', emoji: '🥚', isRecommended: false },
    { id: 'r4', name: 'Kefir', brand: 'Zərdab', weight: '500ml', price: 1.75, currency: '₼', emoji: '🫙', isRecommended: false },
  ],
  recommendedProducts: [
    { id: 'rec1', name: 'Pendir Gouda', brand: 'Hochland', weight: '200q', price: 4.99, currency: '₼', emoji: '🧀', isRecommended: true, matchScore: 92 },
    { id: 'rec2', name: 'Zeytun yağı', brand: 'Borges', weight: '500ml', price: 8.50, currency: '₼', emoji: '🫒', isRecommended: true, matchScore: 87 },
    { id: 'rec3', name: 'Makaron', brand: 'Barilla', weight: '500q', price: 2.20, currency: '₼', emoji: '🍝', isRecommended: true, matchScore: 85 },
  ],
};
```

---

## 📱 RESPONSIVE & MOBILE

Bu tətbiq **mobile-first** olacaq:
- Max-width: 430px, center-aligned on desktop
- `min-height: 100dvh` (dynamic viewport height)
- Bottom nav üçün `padding-bottom: 80px` page content-ə əlavə et
- Touch targets: minimum 44×44px (WCAG)
- `-webkit-tap-highlight-color: transparent` bütün interaktiv elementlərə

---

## 🔠 FONT SETUP

`src/styles/fonts.css`:
```css
@font-face {
  font-family: 'BravoFont';
  src: url('/assets/fonts/BravoFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'BravoFont';
  src: url('/assets/fonts/BravoFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

---

## 🔄 ROUTER SETUP

`src/App.tsx`:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import AIRecommendationPage from './pages/AIRecommendationPage';
import CouponsPage from './pages/CouponsPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/"       element={<HomePage />} />
          <Route path="/ai"     element={<AIRecommendationPage />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="*"       element={<div className="p-8 text-center text-gray-400">Tezliklə...</div>} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
```

`AppShell.tsx` — Header + BottomNav + children wrapping.

---

## ⚠️ KRİTİK QEYDLƏR

1. **Bütün rənglər CSS variables ilə** — heç bir hardcoded hex JSX-də olmayacaq
2. **shadcn/ui** komponentlər: `Button`, `Badge`, `Skeleton`, `ScrollArea`, `Separator`
3. **react-icons** versiyası: `react-icons/fi` (Feather), `react-icons/ri` (Remix)
4. **Barcode SVG** — `react-barcode` paketi və ya custom SVG pattern
5. **ProductCard** reuse olunacaq — həm `HomePage` həm `AIRecommendationPage`-də
6. **AI page** — yalnız structure/UI, heç bir real API yoxdur, mock data işlədilir
7. **Tier card horizontal scroll** — `scrollbar-width: none` + `overflow-x: scroll`
8. **Image fallback** — hər product card üçün emoji fallback

---

## 🚀 BAŞLANĞIC KOMANDASİ

```bash
npm create vite@latest bravo-pulse -- --template react-ts
cd bravo-pulse
npm install tailwindcss @tailwindcss/vite react-router-dom react-icons
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npx shadcn@latest init
```

---

*Bu prompt Bravo tətbiqinin pixel-perfect analizinə əsaslanır. Hər komponent öz müstəqil faylında olacaq, rənglər yalnız CSS token sistemindən gəlir, AI hissəsi dinamik struktura malikdir.*
