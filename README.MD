# <img src="https://flagcdn.com/w20/un.png" width="20"/> VANGUARD — Real-Time Geopolitical Intelligence + AI Trading Signals

> **"Every tool shows you WHAT is happening. VANGUARD tells you WHAT TO DO about it."**

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-00D4FF?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Groq AI](https://img.shields.io/badge/AI-Groq_Llama_3.1-00FF88?style=for-the-badge)](https://groq.com/)
[![Free APIs](https://img.shields.io/badge/Cost-100%25_Free_APIs-F59E0B?style=for-the-badge)](/)
[![License](https://img.shields.io/badge/License-MIT-EF4444?style=for-the-badge)](/)

---

## <i class="fa-solid fa-crosshairs"></i> What is VANGUARD?

**VANGUARD** is a fully public, real-time geopolitical intelligence dashboard built on the **MERN stack**. It aggregates live global events — conflicts, protests, disasters, military movements, cyber threats — onto an interactive 3D globe, and uniquely converts those events into **AI-powered financial trading signals** in real time.

No login. No authentication. Everything is visible and usable by any visitor instantly.

### Why Does This Exist?

| Problem | Reality |
|---|---|
| **Information overload** | Analysts juggle 10+ tabs: Reuters, BBC, FlightRadar, Bloomberg, Twitter — manually connecting dots |
| **No financial context** | Every OSINT tool shows *what* happened. None say *what to do* financially |
| **Too slow** | By the time intelligence is processed, markets have already priced it in |
| **Fragmented tools** | Geopolitical events, market data, flight tracking, cyber threats all live in separate platforms |

**VANGUARD** solves all four problems in a single, unified, zero-cost intelligence platform.

---

## <i class="fa-solid fa-star"></i> What Makes VANGUARD Different

### The GeoTrade AI Signal Engine — Never Been Built Before

No commercial OSINT tool — not Reuters Eikon, not Bloomberg Terminal, not Conflictly.app — automatically converts a live geopolitical event into a financial trading signal with reasoning. VANGUARD does this in **under 2 seconds**.

```
Hormuz tensions escalating  →  Oil supply disruption likely  →  BUY $XOM  (confidence: 81%)
China suspends rare earths  →  EV supply chain at risk      →  SELL $TSLA (confidence: 74%)
Middle East escalation      →  Safe haven demand rising     →  BUY $GLD   (confidence: 78%)
```

### Competitor Comparison

| Capability | Conflictly.app | LiveUAMap | Crisis24 | **VANGUARD** |
|---|:---:|:---:|:---:|:---:|
| 3D Interactive Globe | ✅ | ✅ | ❌ | ✅ |
| Live Conflict Event Data | ✅ | ✅ | ✅ | ✅ |
| AI Country Intelligence Briefs | ✅ | ❌ | ❌ | ✅ |
| **Financial Trading Signals** | ❌ | ❌ | ❌ | ✅ |
| **Stock / Crypto / Forex Panel** | ❌ | ❌ | ❌ | ✅ |
| Military Flight Tracking | ❌ | ✅ | ❌ | ✅ |
| Cyber Threat Globe Overlay | ❌ | ❌ | ❌ | ✅ |
| **4-Key AI Rotation (zero downtime)** | ❌ | ❌ | ❌ | ✅ |
| Severity-Coded News Feed | ✅ | ❌ | ❌ | ✅ |
| Scrolling Tension Ticker | ✅ | ❌ | ❌ | ✅ |
| **100% Free to Run** | ❌ | ❌ | ❌ | ✅ |

---

## <i class="fa-solid fa-layer-group"></i> Feature Specifications

### <i class="fa-solid fa-globe"></i> Feature 1 — Live 3D Geopolitical Globe

The centrepiece of VANGUARD. A WebGL globe that **slowly auto-rotates on idle** and shows every active geopolitical event on Earth as glowing, colour-coded dots.

- **Auto-rotation** — Globe spins at ~2 RPM on idle, stops on user interaction, resumes after 8 seconds
- **Glowing event dots** — Each event plotted at real lat/lon. Dot size scales with severity. Colour maps to threat level
- **Pulsing red rings** — `CRITICAL` events show a double CSS keyframe ring animation drawing immediate attention
- **Click-to-Brief** — Clicking any country triggers Groq AI to generate a full intelligence brief in a slide-in side panel
- **2D Map toggle** — Button switches between Globe.gl 3D view and Mapbox GL JS flat 2D map with smooth transition
- **Event type filters** — Toggle buttons: `Conflicts` `Protests` `Disasters` `Earthquakes` `Wildfires` `Military Flights`
- **Time range filter** — Dropdown: `Last 1h` / `6h` / `24h` / `7 days` — filters globe dots by event timestamp
- **Heatmap layer** — Deck.gl density heatmap overlay showing event concentration per region. Toggle on/off
- **Country boundary glow** — Hovering over a country highlights its boundary polygon in the country's severity colour
- **Fly-to animation** — Clicking a news headline or ticker item smoothly flies the globe camera to that event location
- **Arc layer** — Military flight paths rendered as animated arcs on the globe surface. Toggle independently

**Severity Colour System applied to all dots and rings:**

| Level | Colour | Hex |
|---|---|---|
| `CRITICAL` | <span style="color:#EF4444">●</span> Red | `#EF4444` |
| `HIGH` | <span style="color:#F97316">●</span> Orange | `#F97316` |
| `MEDIUM` | <span style="color:#EAB308">●</span> Yellow | `#EAB308` |
| `LOW` | <span style="color:#00FF88">●</span> Green | `#00FF88` |

---

### <i class="fa-solid fa-newspaper"></i> Feature 2 — Live Intelligence News Feed

Real-time, severity-coded news panel aggregating **150+ global sources**. Auto-refreshes every 5 minutes.

- **Multi-source aggregation** — NewsAPI.org (100 req/day free) + direct RSS feeds via `rss-parser` npm from Reuters, BBC, Al Jazeera, Bloomberg
- **GDELT event feed** — Real-time geopolitical events with coordinates. Unlimited, no key needed
- **Severity colour coding** — Every headline auto-tagged using backend NLP keyword scoring: `CRITICAL` / `HIGH` / `MEDIUM` / `LOW`
- **Auto-refresh** — Feed silently refreshes every 5 minutes. New items appear at top with fade-in animation
- **`BREAKING` badge** — Stories covered by 3+ sources within 15 minutes get a pulsing gold `BREAKING` badge
- **Region filter tabs** — `Middle East` `Europe` `Asia-Pacific` `Americas` `Africa`
- **Keyword search** — Real-time search across all headlines. Matching terms highlighted in `#00D4FF` Cyber Cyan
- **Entity linking** — Country names in headlines are clickable — zooms globe camera to that country via `Globe.gl flyTo()`
- **Country flag on each headline** — Every headline shows the country flag using `flagcdn.com` image (e.g. `https://flagcdn.com/w20/us.png`). Flag sits to the left of the headline title inline
- **Source badges** — Each headline shows source name with Font Awesome icon: `fas fa-rss` for RSS sources, `fas fa-globe` for NewsAPI sources

---

### <i class="fa-solid fa-robot"></i> Feature 3 — AI Country Intelligence Briefs (Groq)

Click any country on the globe → a slide-in panel appears with a full AI-generated intelligence brief in under 2 seconds.

- **Groq Llama 3.1 8B** — Primary AI model. Generates 3-paragraph brief using live headlines as context
- **4-key rotation system** — 4 separate free Groq API keys (`GROQ_API_KEY_1` through `GROQ_API_KEY_4`) used in round-robin. If key 1 hits rate limit, key 2 activates instantly. Key 3 next, then key 4. This ensures the AI never visibly fails during a demo
- **Google Gemini fallback** — If all 4 Groq keys are exhausted, Gemini API (15 req/min free) handles the request seamlessly
- **Stability Score** — AI assigns a 0–100 score rendered as a glowing `Recharts RadialBarChart` ring. Red if <30, Orange if 30–60, Green if >60
- **Top 3 risks** — AI returns the three most critical current risk factors as structured bullet points
- **Outlook badge** — `Stable` / `Deteriorating` / `Escalating` / `Crisis` — colour-coded badge with Font Awesome icon: `fas fa-chart-line`
- **Source citations** — Brief lists exactly which headlines were used as context (transparent AI)
- **15-minute MongoDB cache** — Generated briefs cached with a TTL to prevent rate limit abuse
- **Country metadata** — Flag, capital city, population, government type from `RestCountries API` (free, unlimited). Country flag displayed prominently using `flagcdn.com/w40/{iso2}.png`
- **Share button** — `fas fa-copy` icon copies brief to clipboard via Clipboard API

---

### <i class="fa-solid fa-chart-line"></i> Feature 4 — GeoTrade AI Signal Engine

**The core differentiator.** The AI reads live geopolitical events and generates real-time `BUY` / `HOLD` / `SELL` signals for stocks, crypto, forex, and commodities.

- **Stock search** — Input field with `fas fa-search` icon. Accepts any ticker: `AAPL` `TSLA` `XOM` `GLD` `SPY`
- **Live price & change** — Real-time price, % change, volume via `yahoo-finance2` npm (free, no API key). Green `fas fa-arrow-up` for positive, Red `fas fa-arrow-down` for negative
- **7-day sparkline chart** — Recharts `LineChart` sparkline for past 7 days price history. Cyan line on dark panel background
- **AI signal generation** — Groq reads current GDELT events related to the stock's sector/country → outputs `BUY` / `HOLD` / `SELL` with full reasoning paragraph. 4-key rotation applies here identically
- **Signal confidence** — Each signal shows a confidence percentage (e.g., `BUY — 81%`) displayed in JetBrains Mono font
- **Signal badges** — Glowing coloured badges with Font Awesome icons:
  - `BUY` — `fas fa-arrow-trend-up` — green glow (`#00FF88`)
  - `SELL` — `fas fa-arrow-trend-down` — red glow (`#EF4444`)
  - `HOLD` — `fas fa-pause` — yellow glow (`#EAB308`)
- **Fear & Greed Index** — `alternative.me` API dial widget showing global market sentiment (0–100). Displayed with `fas fa-gauge-high` icon
- **Crypto panel** — BTC / ETH / SOL / XRP live prices with coin logos via CoinGecko API (free). Geo-risk correlation labels
- **Forex panel** — USD/JPY, EUR/USD, GBP/USD, USD/INR live rates. Country flags displayed for each currency pair using `flagcdn.com`
- **Commodity panel** — Gold `fas fa-coins`, Crude Oil `fas fa-oil-well`, Natural Gas `fas fa-fire-flame-curved` via yahoo-finance2 with conflict-driven context labels
- **Signal history** — Last 5 AI signals per ticker stored in MongoDB. Shown as a mini timeline below the current signal

---

### <i class="fa-solid fa-plane-circle-exclamation"></i> Feature 5 — Military Flight Tracker

Live aircraft positions from OpenSky Network plotted on the 3D globe as animated arcs.

- **Live positions** — Real-time aircraft lat/lon/altitude from OpenSky Network API (free, anonymous, no key)
- **Military filter** — Filters to military/government aircraft using ICAO type codes and known callsign patterns
- **Globe arc overlay** — Flight paths rendered as animated cyan arcs on the Globe.gl arc layer. Toggle on/off with `fas fa-fighter-jet` button
- **Conflict proximity alert** — Aircraft within 200km of an active conflict zone flagged with orange `fas fa-triangle-exclamation` badge
- **Surge detection** — Flags unusual concentration of military flights (>5 in same region) with a `SURGE` badge
- **Aircraft info popup** — Click any flight arc → callsign, aircraft type, origin, destination, altitude, speed. Country flag of origin nation shown via `flagcdn.com`
- **ADS-B Exchange fallback** — Secondary data source if OpenSky is slow
- **60-second auto-refresh** — Flight positions update every 60 seconds (rate-limit friendly)

---

### <i class="fa-solid fa-satellite-dish"></i> Feature 6 — Tension Ticker

A scrolling alert bar at the very top of the dashboard styled like a financial stock ticker.

- **Continuous horizontal scroll** — CSS animation (`@keyframes scroll`) scrolling live geopolitical alerts left to right across the full screen width
- **Severity colour coding** — `fas fa-circle` dot + label: `CRITICAL` in `#EF4444`, `HIGH` in `#F97316`, `MEDIUM` in `#EAB308`
- **Click to globe focus** — Clicking any ticker item calls `Globe.gl flyTo()` to zoom the globe camera to that event
- **5-minute auto-refresh** — Updates with latest GDELT + NewsAPI data every 5 minutes via `setInterval`
- **Country flag in ticker** — Small flag (`flagcdn.com/w16/{iso2}.png`) shown inline before the event country name

---

### <i class="fa-solid fa-earth-americas"></i> Feature 7 — Regional Intelligence Panels

Four region-specific intelligence cards in a 2×2 grid layout below the main globe.

- **4 panels** — `Middle East` `Europe` `Asia-Pacific` `Americas` — each with its own regional flag or icon
- **Top 3 events** — Each panel shows the 3 most critical current events in that region, severity-colour-coded
- **Stability index** — Regional score 0–100 as a coloured progress bar (`green` → `yellow` → `red`)
- **Trending keywords** — Top 5 trending geopolitical terms in that region (e.g., `ceasefire`, `sanctions`, `airstrike`)
- **Event count + trend** — Total events in last 24h with `fas fa-arrow-up` / `fas fa-arrow-down` trend vs previous 24h
- **Click to expand** — Clicking a region panel calls `Globe.gl flyTo()` to fly to that region

---

### <i class="fa-solid fa-shield-halved"></i> Feature 8 — Cyber & Infrastructure Threat Layer

Optional globe overlay showing live cyber threats.

- **C2 server locations** — Active Command & Control botnet server locations from `abuse.ch Feodo Tracker` (free, unlimited) shown as purple dots on globe
- **Malware host locations** — Malware distribution hosts from `URLhaus API` (free, unlimited)
- **Internet outage map** — Live outages from `Cloudflare Radar API` (free with Cloudflare account)
- **IP geolocation** — Threat actor IPs geolocated via `ipapi.co` (1000 req/day free) and placed on globe
- **Toggle layer** — `fas fa-shield-halved` button toggles the cyber layer independently. Purple (`#7C3AED`) colour scheme distinct from conflict dots

---

## <i class="fa-solid fa-palette"></i> Design System & Styling

> **Agent Implementation Note:** VANGUARD must look like a military intelligence command centre. The aesthetic is deep navy/black backgrounds with glowing cyan and green accents — inspired directly by Conflictly.app. Every design decision signals urgency, precision, and real-time data. Do NOT use white backgrounds, light themes, rounded pastel elements, or any consumer app aesthetic.

---

### Typography

VANGUARD uses exactly **two fonts** loaded from Google Fonts CDN. Both must be imported via a single `<link>` tag in `index.html`.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
  rel="stylesheet"
/>
```

```js
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

#### Font 1 — Inter (Primary UI Font)

- **Used for:** All headings, navigation, labels, panel titles, body text, button text, alert badges, news headlines, region panel text, feature descriptions
- **Why Inter:** The same font Conflictly.app uses. Highly legible on dark backgrounds at all sizes. Clean humanist letterforms that feel professional and modern without being sterile

| Element | Weight | Size | Colour |
|---|---|---|---|
| Site logo `VANGUARD` wordmark | `800` ExtraBold | `32px` | `#00D4FF` Cyber Cyan |
| Section headings (`<h2>`) | `700` Bold | `24px` | `#00D4FF` Cyber Cyan |
| Panel card titles | `600` SemiBold | `16px` | `#FFFFFF` White |
| Feature subheadings | `600` SemiBold | `18px` | `#00FF88` Signal Green |
| Body text / descriptions | `400` Regular | `14px` | `#CBD5E1` Silver |
| Navigation links | `500` Medium | `14px` | `#CBD5E1` Silver |
| `BUY` / `SELL` / `HOLD` badges | `700` Bold | `13px` | Signal colour |
| `BREAKING` badge | `700` Bold | `12px` | `#0A0F1E` on `#F59E0B` |
| Timestamps / metadata | `300` Light | `12px` | `#64748B` Muted |
| Ticker scrolling text | `500` Medium | `13px` | `#FFFFFF` White |
| Severity labels | `700` Bold | `12px` | Severity colour |

#### Font 2 — JetBrains Mono (Data / Terminal Font)

- **Used for:** All numerical data values — stock prices, percentage changes, coordinates, stability scores, signal confidence percentages, the live UTC clock in the navbar, aircraft altitude/speed data, crypto prices, forex rates
- **Why JetBrains Mono:** Monospace fonts make numerical data instantly scannable — each digit has identical width so numbers align in columns. Creates the authentic OSINT terminal aesthetic. Apply via `font-mono` Tailwind class or `font-family: 'JetBrains Mono', monospace`

| Element | Weight | Size | Colour |
|---|---|---|---|
| Stock price (e.g., `$124.38`) | `400` Regular | `20px` | `#FFFFFF` White |
| Price change % | `600` SemiBold | `16px` | `#00FF88` or `#EF4444` |
| Stability score (e.g., `23 / 100`) | `600` SemiBold | `18px` | Severity colour |
| Signal confidence (e.g., `78%`) | `400` Regular | `14px` | `#CBD5E1` Silver |
| Live UTC clock | `400` Regular | `14px` | `#00D4FF` Cyan |
| Lat/lon coordinates | `400` Regular | `12px` | `#64748B` Muted |
| Aircraft altitude / speed | `400` Regular | `12px` | `#64748B` Muted |
| Crypto / Forex rates | `400` Regular | `18px` | `#FFFFFF` White |

---

### Colour Palette

> **Agent Implementation Note:** Define all colours as CSS custom properties on `:root`. Use these token names consistently. Never hardcode hex values directly in components — always reference the token.

```css
:root {
  /* Backgrounds */
  --color-bg:       #0A0F1E;  /* Main page background — deep space black */
  --color-navy:     #0D1B2A;  /* Sidebar / secondary bg */
  --color-panel:    #111827;  /* Card / panel background */
  --color-surface:  #1E293B;  /* Elevated: dropdowns, hover states, alt table rows */
  --color-border:   #1E3A5F;  /* All borders, dividers, input outlines */

  /* Accents */
  --color-cyan:     #00D4FF;  /* PRIMARY — headings, globe glow, active states */
  --color-cyan-dim: #0EA5E9;  /* Secondary — hover, chart lines, focus rings */
  --color-green:    #00FF88;  /* BUY signal, positive values, safe/low severity */
  --color-red:      #EF4444;  /* SELL signal, CRITICAL alerts, danger states */
  --color-orange:   #F97316;  /* HIGH alerts, negative % change */
  --color-yellow:   #EAB308;  /* HOLD signal, MEDIUM alerts */
  --color-gold:     #F59E0B;  /* BREAKING badge, special callouts */
  --color-purple:   #7C3AED;  /* Cyber threat layer dots */

  /* Text */
  --color-text-primary:   #FFFFFF;  /* Headings, key values */
  --color-text-secondary: #CBD5E1;  /* Body copy, descriptions */
  --color-text-muted:     #64748B;  /* Timestamps, labels, metadata */
}
```

#### Semantic Signal Colours

Every signal badge uses a **coloured text on a 15% opacity same-colour background** with a matching border — creating a glowing badge effect:

```css
/* BUY badge */
.badge-buy  { color: #00FF88; background: rgba(0,255,136,0.15); border: 1px solid #00FF88; }

/* SELL badge */
.badge-sell { color: #EF4444; background: rgba(239,68,68,0.15); border: 1px solid #EF4444; }

/* HOLD badge */
.badge-hold { color: #EAB308; background: rgba(234,179,8,0.15); border: 1px solid #EAB308; }

/* CRITICAL alert badge */
.badge-critical { color: #EF4444; background: rgba(239,68,68,0.15); border: 1px solid #EF4444; }

/* HIGH alert badge */
.badge-high { color: #F97316; background: rgba(249,115,22,0.15); border: 1px solid #F97316; }

/* MEDIUM alert badge */
.badge-medium { color: #EAB308; background: rgba(234,179,8,0.15); border: 1px solid #EAB308; }

/* LOW / STABLE badge */
.badge-low { color: #00FF88; background: rgba(0,255,136,0.15); border: 1px solid #00FF88; }

/* BREAKING badge — solid gold, dark text */
.badge-breaking { color: #0A0F1E; background: #F59E0B; border: none; font-weight: 700; }
```

#### Glassmorphism Panel Style

> **Agent Implementation Note:** Apply `.panel` class to every card, sidebar, and overlay panel in the UI. This creates the frosted-glass depth effect seen in Conflictly.app.

```css
.panel {
  background: rgba(13, 27, 42, 0.85);
  border: 1px solid #1E3A5F;
  border-top: 1px solid rgba(0, 212, 255, 0.30); /* cyan top-edge glow */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0 0 24px rgba(0, 212, 255, 0.06);
}
```

#### Pulsing Ring Animation (CRITICAL events)

```css
@keyframes pulse-ring {
  0%   { transform: scale(1);   opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
}

.pulse-ring {
  position: absolute;
  border: 2px solid #EF4444;
  border-radius: 50%;
  animation: pulse-ring 1.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.pulse-ring:nth-child(2) {
  animation-delay: 0.7s;
}
```

#### Skeleton Loader (all panels while loading)

```css
@keyframes shimmer {
  0%   { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(90deg, #111827 25%, #1E293B 50%, #111827 75%);
  background-size: 2000px 100%;
  animation: shimmer 1.8s infinite linear;
  border-radius: 6px;
}
```

---

### Country Flags

> **Agent Implementation Note:** Country flags appear in 4 places: news feed headlines, country brief panel header, forex currency pairs, and the tension ticker. Use `flagcdn.com` — it is free, no API key needed, and returns a PNG flag for any ISO 3166-1 alpha-2 country code.

```
Format: https://flagcdn.com/w{size}/{iso2_lowercase}.png

Sizes available: w16, w20, w32, w40, w80, w160, w320

Examples:
  US flag (20px wide): https://flagcdn.com/w20/us.png
  Ukraine flag:        https://flagcdn.com/w20/ua.png
  China flag:          https://flagcdn.com/w20/cn.png
  Iran flag:           https://flagcdn.com/w20/ir.png
```

**Implementation in React:**

```jsx
// FlagIcon component
const FlagIcon = ({ iso2, size = 20, className = '' }) => (
  <img
    src={`https://flagcdn.com/w${size}/${iso2.toLowerCase()}.png`}
    alt={iso2}
    width={size}
    className={`inline-block rounded-sm ${className}`}
    style={{ imageRendering: 'crisp-edges' }}
  />
);

// Usage in news headline:
<div className="flex items-center gap-2">
  <FlagIcon iso2="ua" size={20} />
  <span className="font-sans text-sm text-slate-300">{headline.title}</span>
</div>

// Usage in brief panel header:
<FlagIcon iso2={country.iso2} size={40} className="rounded" />

// Usage in forex pair:
<div className="flex items-center gap-1">
  <FlagIcon iso2="us" size={16} />
  <FlagIcon iso2="jp" size={16} />
  <span className="font-mono text-white">149.82</span>
</div>
```

---

### Font Awesome Icons

> **Agent Implementation Note:** Use Font Awesome 6 Free via CDN. Add this to `index.html`. Use `<i>` tags for all icons — do NOT use emojis anywhere in the UI. Emojis are inconsistent across operating systems and break the professional aesthetic.

```html
<!-- Add to <head> in index.html -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
```

#### Icon Map — Every Icon Used in VANGUARD

| Location | Icon Class | Colour | Purpose |
|---|---|---|---|
| Navbar — globe toggle | `fas fa-globe` | `#00D4FF` | 3D/2D map toggle button |
| Navbar — UTC clock | `fas fa-clock` | `#64748B` | Live UTC time label |
| Navbar — event count | `fas fa-bolt` | `#F59E0B` | Live event counter badge |
| Navbar — search | `fas fa-magnifying-glass` | `#64748B` | Global search trigger |
| News feed — RSS source | `fas fa-rss` | `#F97316` | RSS source indicator on headline |
| News feed — NewsAPI source | `fas fa-globe` | `#00D4FF` | NewsAPI source indicator |
| News feed — severity dot | `fas fa-circle` | Severity colour | Filled dot before each headline |
| News feed — BREAKING | `fas fa-triangle-exclamation` | `#F59E0B` | BREAKING news icon |
| News feed — bookmark | `fas fa-bookmark` | `#64748B` | Save article action |
| Country brief — stability | `fas fa-shield-halved` | `#00D4FF` | Stability score section header |
| Country brief — risks | `fas fa-skull-crossbones` | `#EF4444` | Top 3 risks section header |
| Country brief — outlook | `fas fa-chart-line` | `#F97316` | Outlook badge icon |
| Country brief — share | `fas fa-copy` | `#64748B` | Copy brief to clipboard |
| Country brief — close | `fas fa-xmark` | `#64748B` | Close slide-in panel |
| Finance — BUY signal | `fas fa-arrow-trend-up` | `#00FF88` | BUY badge icon |
| Finance — SELL signal | `fas fa-arrow-trend-down` | `#EF4444` | SELL badge icon |
| Finance — HOLD signal | `fas fa-pause` | `#EAB308` | HOLD badge icon |
| Finance — price up | `fas fa-arrow-up` | `#00FF88` | Positive price change |
| Finance — price down | `fas fa-arrow-down` | `#EF4444` | Negative price change |
| Finance — Fear & Greed | `fas fa-gauge-high` | `#00D4FF` | Fear & Greed dial header |
| Finance — stock search | `fas fa-magnifying-glass` | `#64748B` | Search input icon |
| Finance — Gold commodity | `fas fa-coins` | `#F59E0B` | Gold price label |
| Finance — Oil commodity | `fas fa-oil-well` | `#64748B` | Crude oil price label |
| Finance — Gas commodity | `fas fa-fire-flame-curved` | `#F97316` | Natural gas price label |
| Finance — history | `fas fa-clock-rotate-left` | `#64748B` | Signal history section |
| Flights — toggle | `fas fa-fighter-jet` | `#00D4FF` | Military flight layer toggle |
| Flights — proximity alert | `fas fa-triangle-exclamation` | `#F97316` | Aircraft near conflict zone |
| Flights — surge | `fas fa-radiation` | `#EF4444` | Flight surge detection badge |
| Ticker — CRITICAL | `fas fa-circle-radiation` | `#EF4444` | Critical event marker |
| Ticker — HIGH | `fas fa-circle-exclamation` | `#F97316` | High event marker |
| Ticker — MEDIUM | `fas fa-circle-dot` | `#EAB308` | Medium event marker |
| Cyber layer — toggle | `fas fa-shield-halved` | `#7C3AED` | Cyber threat layer toggle |
| Cyber — botnet | `fas fa-spider` | `#7C3AED` | C2 server location icon |
| Cyber — malware | `fas fa-virus` | `#EF4444` | Malware host icon |
| Cyber — outage | `fas fa-wifi` | `#F97316` | Internet outage icon |
| Region panels — trend up | `fas fa-arrow-trend-up` | `#00FF88` | Event count increasing |
| Region panels — trend down | `fas fa-arrow-trend-down` | `#EF4444` | Event count decreasing |
| Filter bar — time | `fas fa-filter` | `#64748B` | Time range filter icon |
| Filter bar — active filter | `fas fa-check` | `#00D4FF` | Active filter indicator |
| General — loading | `fas fa-spinner fa-spin` | `#00D4FF` | Loading state spinner |
| General — refresh | `fas fa-rotate` | `#64748B` | Data refresh indicator |

---

## <i class="fa-solid fa-sitemap"></i> Full Project Structure

```
vanguard/
├── client/                              # React 18 + Vite Frontend
│   ├── public/
│   │   └── favicon.ico
│   ├── index.html                       # Google Fonts + Font Awesome CDN links go here
│   ├── src/
│   │   ├── components/
│   │   │   ├── Globe.jsx                # Globe.gl 3D globe — event dots, arc layers, heatmap, fly-to
│   │   │   ├── Map2D.jsx                # Mapbox GL JS flat 2D map — toggle from globe
│   │   │   ├── Ticker.jsx               # Scrolling tension alert ticker bar — top of screen
│   │   │   ├── Navbar.jsx               # Logo, UTC clock (JetBrains Mono), event count, search
│   │   │   ├── NewsPanel.jsx            # Live intelligence news feed — severity coded, flags
│   │   │   ├── CountryBrief.jsx         # AI country brief slide-in panel — Groq powered
│   │   │   ├── FinancePanel.jsx         # GeoTrade signal engine — stocks, crypto, forex, commodities
│   │   │   ├── StockCard.jsx            # Individual stock: price (JetBrains Mono), sparkline, signal badge
│   │   │   ├── SignalBadge.jsx          # BUY/HOLD/SELL glowing badge — FA icon + colour
│   │   │   ├── FlightTracker.jsx        # Military flight overlay toggle — arc layer control
│   │   │   ├── RegionPanel.jsx          # 4 regional intelligence cards — 2×2 grid
│   │   │   ├── CyberLayer.jsx           # Cyber threat globe overlay — purple dot layer
│   │   │   ├── StabilityRing.jsx        # Recharts RadialBarChart — stability score 0–100
│   │   │   ├── FearGreedDial.jsx        # alternative.me sentiment dial widget
│   │   │   ├── FlagIcon.jsx             # flagcdn.com flag component — reused everywhere
│   │   │   ├── SkeletonLoader.jsx       # Shimmer skeleton — shown while any panel is loading
│   │   │   └── FilterBar.jsx            # Event type + time range filter toggle buttons
│   │   ├── pages/
│   │   │   └── Dashboard.jsx            # Main layout — all panels assembled, grid system
│   │   ├── hooks/
│   │   │   ├── useGlobeData.js          # Fetches + caches globe event data from backend
│   │   │   ├── useNews.js               # Fetches + auto-refreshes news feed every 5 min
│   │   │   └── useFinance.js            # Fetches stock/crypto/forex prices on demand
│   │   ├── utils/
│   │   │   ├── severityColor.js         # Maps severity string → hex color token
│   │   │   ├── regionMapper.js          # Maps country ISO2 → region (Middle East, Europe, etc.)
│   │   │   ├── countryToIso.js          # Maps country name → ISO2 for flagcdn.com
│   │   │   └── formatters.js            # Price formatting, % change, lat/lon display
│   │   ├── App.jsx                      # Root component — React Router routes
│   │   ├── main.jsx                     # Vite entry point
│   │   └── index.css                    # Tailwind directives + CSS custom properties + animations
│   ├── tailwind.config.js               # Font family + colour token extensions
│   ├── vite.config.js
│   └── package.json
│
├── server/                              # Node.js + Express Backend
│   ├── models/
│   │   ├── BriefCache.js                # MongoDB: AI briefs cached with 15-min TTL
│   │   └── SignalHistory.js             # MongoDB: last 5 AI signals per ticker
│   ├── routes/
│   │   ├── events.js                    # GET /api/events — GDELT + ACLED + USGS aggregation
│   │   ├── news.js                      # GET /api/news — NewsAPI + RSS multi-source feed
│   │   ├── country.js                   # GET /api/country/:name — events + RestCountries metadata
│   │   ├── finance.js                   # GET /api/finance/:ticker — yahoo-finance2 price data
│   │   ├── flights.js                   # GET /api/flights — OpenSky Network aircraft positions
│   │   ├── ai.js                        # POST /api/ai/brief + /api/ai/signal — Groq×4 + Gemini
│   │   └── cyber.js                     # GET /api/cyber — abuse.ch + URLhaus + Cloudflare Radar
│   ├── services/
│   │   ├── groqService.js               # 4-key Groq rotation logic — round-robin with auto-fallback
│   │   ├── gdeltService.js              # GDELT fetch + parse into {lat, lon, title, severity, iso2}
│   │   └── cacheService.js              # In-memory Map() cache — 5-min TTL for all API responses
│   ├── middleware/
│   │   └── rateLimiter.js               # express-rate-limit — protect backend endpoints
│   ├── index.js                         # Express server entry + MongoDB Atlas connection
│   └── package.json
│
├── .env                                 # All API keys — NEVER commit to GitHub
├── .gitignore
└── README.md
```

---

## <i class="fa-solid fa-plug"></i> APIs Used

| Category | Service | Key Required? | Free Limit |
|---|---|---|---|
| **Globe** | Globe.gl | No | Unlimited |
| **Map** | Mapbox GL JS | Yes (free) | 50,000 loads/mo |
| **Map (fallback)** | MapLibre GL JS | No | Unlimited |
| **Data layers** | Deck.gl | No | Unlimited |
| **Country polygons** | Natural Earth GeoJSON | No | Unlimited, offline |
| **Geopolitical events** | GDELT Project API | No | Unlimited |
| **Conflict data** | ACLED API | Yes (free) | Free for hackathons |
| **News** | NewsAPI.org | Yes (free) | 100 req/day |
| **News (RSS)** | rss-parser npm | No | Unlimited |
| **Earthquakes** | USGS Earthquake API | No | Unlimited |
| **Disasters** | GDACS API | No | Unlimited |
| **Wildfires** | NASA FIRMS API | Yes (free) | Free |
| **Country metadata** | RestCountries API | No | Unlimited |
| **Country flags** | flagcdn.com | No | Unlimited |
| **AI (Primary)** | Groq API — Key 1 | Yes (free) | Free tier |
| **AI (Rotation 2)** | Groq API — Key 2 | Yes (free) | Free tier |
| **AI (Rotation 3)** | Groq API — Key 3 | Yes (free) | Free tier |
| **AI (Rotation 4)** | Groq API — Key 4 | Yes (free) | Free tier |
| **AI (Fallback)** | Google Gemini API | Yes (free) | 15 req/min |
| **Browser NLP** | Transformers.js | No | Unlimited (client-side) |
| **Stocks/Commodities** | yahoo-finance2 npm | No | Unlimited |
| **Crypto** | CoinGecko API | No | 10,000 req/mo |
| **Forex** | ExchangeRate API | Yes (free) | 1,500 req/mo |
| **Market sentiment** | alternative.me API | No | Unlimited |
| **Macro data** | World Bank API | No | Unlimited |
| **Flights** | OpenSky Network API | No | Free, anonymous |
| **Military flights** | ADS-B Exchange | No | Free public feed |
| **Botnets** | abuse.ch Feodo Tracker | No | Unlimited |
| **Malware** | URLhaus API | No | Unlimited |
| **Internet outages** | Cloudflare Radar API | Yes (free) | Free |
| **IP geolocation** | ipapi.co | No | 1,000 req/day |
| **Icons** | Font Awesome 6 Free | No | Unlimited (CDN) |
| **Fonts** | Google Fonts (Inter + JetBrains Mono) | No | Unlimited (CDN) |

---

## <i class="fa-solid fa-key"></i> Environment Variables

Create a `.env` file in `/server/` — never commit this file to GitHub.

```env
# ── AI — 4 Groq keys for rotation (create 4 free accounts at console.groq.com)
GROQ_API_KEY_1=gsk_xxxxxxxxxxxxxxxxxxxx
GROQ_API_KEY_2=gsk_xxxxxxxxxxxxxxxxxxxx
GROQ_API_KEY_3=gsk_xxxxxxxxxxxxxxxxxxxx
GROQ_API_KEY_4=gsk_xxxxxxxxxxxxxxxxxxxx

# ── AI Fallback
GEMINI_API_KEY=AIzaxxxxxxxxxxxxxxxxxxxxxxx

# ── News
NEWS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ACLED_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NASA_FIRMS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ── Map
MAPBOX_TOKEN=pk.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ── Finance
EXCHANGE_RATE_KEY=xxxxxxxxxxxxxxxxxxxxxxxx

# ── Cyber
CLOUDFLARE_RADAR_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ── Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/vanguard
PORT=5000
```

---

## <i class="fa-solid fa-microchip"></i> Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend framework** | React 18 + Vite | Fast SPA — instant hot reload |
| **Styling** | Tailwind CSS + custom CSS | Dark command-centre UI + animations |
| **3D Globe** | Globe.gl | WebGL globe — dots, arcs, heatmap |
| **2D Map** | Mapbox GL JS + MapLibre GL JS | Flat map toggle view |
| **Data layers** | Deck.gl | Heatmap + arc flight paths |
| **Charts** | Recharts | Sparklines, stability ring, sentiment dial |
| **HTTP client** | Axios | Frontend → backend API calls |
| **Routing** | React Router DOM v6 | SPA routing (single Dashboard route) |
| **Backend** | Node.js + Express | REST API server |
| **Database** | MongoDB Atlas + Mongoose | Brief cache, signal history |
| **AI primary** | Groq API — 4 keys rotating | Llama 3.1 8B — briefs + signals |
| **AI fallback** | Google Gemini API | Backup when all 4 Groq keys rate-limited |
| **Browser ML** | Transformers.js | Client-side NER + sentiment |
| **Icons** | Font Awesome 6 Free | All UI icons via CDN |
| **Fonts** | Inter + JetBrains Mono | Google Fonts CDN |
| **Flags** | flagcdn.com | Country flags via ISO2 code |
| **Package manager** | pnpm | 50% faster installs vs npm |
| **Frontend deploy** | Vercel | Free, unlimited deployments |
| **Backend deploy** | Railway | $5 free credit, no cold starts |

---

## <i class="fa-solid fa-code-branch"></i> System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        DATA SOURCES                         │
├──────────────┬──────────────┬──────────────┬────────────────┤
│  GDELT/ACLED │  NewsAPI/RSS │  OpenSky     │  Yahoo Finance │
│  USGS/GDACS  │              │  ADS-B Exch. │  CoinGecko     │
│  NASA FIRMS  │              │              │  ExchangeRate  │
└──────┬───────┴──────┬───────┴──────┬───────┴────────┬───────┘
       │              │              │                │
       ▼              ▼              ▼                ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXPRESS BACKEND (Node.js)                  │
│                                                             │
│  /api/events   /api/news   /api/flights   /api/finance      │
│  /api/country  /api/cyber  /api/ai/brief  /api/ai/signal    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  groqService.js — 4-Key Rotation                    │   │
│  │  Key 1 → Key 2 → Key 3 → Key 4 → Gemini Fallback   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────┐   ┌──────────────────────────────┐   │
│  │  cacheService   │   │  MongoDB Atlas               │   │
│  │  (in-memory Map)│   │  BriefCache + SignalHistory  │   │
│  │  5-min TTL      │   │  15-min TTL for AI briefs    │   │
│  └─────────────────┘   └──────────────────────────────┘   │
└──────────────────────────────┬──────────────────────────────┘
                               │  REST API responses
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    REACT FRONTEND (Vite)                     │
│                                                             │
│  Navbar (UTC clock) → Ticker (scrolling alerts)             │
│       ↓                                                     │
│  Globe.gl (3D globe with event dots + arcs + heatmap)       │
│       ↓  click country                                      │
│  CountryBrief panel (slides in) → StabilityRing + Risks     │
│                                                             │
│  NewsPanel ← flagcdn flags + FA icons + severity badges     │
│  FinancePanel → StockCard → SignalBadge (BUY/SELL/HOLD)     │
│  RegionPanel (2×2 grid) → 4 regional intelligence cards     │
│  CyberLayer → purple dots on globe (toggle)                 │
└─────────────────────────────────────────────────────────────┘
```

---

## <i class="fa-solid fa-rocket"></i> Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/vanguard.git
cd vanguard

# Install pnpm globally (faster than npm)
npm install -g pnpm

# ── Backend setup
cd server
pnpm install
cp ../.env.example .env
# Fill in your API keys in .env
node index.js

# ── Frontend setup (new terminal)
cd ../client
pnpm install
pnpm dev
```

Visit `http://localhost:5173` — the globe loads automatically.

---

## <i class="fa-solid fa-trophy"></i> Hackathon Pitch

> **"Right now, somewhere on Earth, a missile was just fired, a government just collapsed, or a major trade route just closed. A trader who knows this in the next 30 seconds can make a fortune. A trader who finds out in 3 hours loses one. We built the 30-second version."**

**VANGUARD** — *Where Geopolitics Meets Trading Intelligence*

`Built in 24 hours` · `MERN Stack` · `$0 to run` · `Zero mock data`

---

<div align="center">

**Made with** <i class="fa-solid fa-heart" style="color: #EF4444;"></i> **at the hackathon**

</div>