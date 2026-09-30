# Lille & Nest — Scandinavian Children's Organic Innerwear & Loungewear

A high-end, DTC e-commerce storefront crafted for **Lille & Nest** (*Nordic Slumber & Nest*). Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**, integrated with **Google Stitch MCP Server** for AI-driven UI design workflows.

![Lille & Nest Banner](/images/stitch/hero-children-loungewear.jpg)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mostafa-SAID7/little-boys-F)
![GOTS Certified](https://img.shields.io/badge/GOTS-100%25%20Organic%20Cotton-green.svg)
![OEKO-TEX](https://img.shields.io/badge/OEKO--TEX%C2%AE-Standard%20100-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)

---

## 🌿 Brand Philosophy & Design System

**Lille & Nest** embodies an atmospheric, warm Scandinavian-editorial aesthetic. Designed for design-conscious parents who value hypoallergenic purity, ethical craftsmanship, and timeless nursery aesthetics.

- **Design System Theme**: `Nordic Slumber & Nest`
- **Headline Typography**: [`Newsreader`](https://fonts.google.com/specimen/Newsreader) (Serif Display)
- **Body & Controls**: [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Humanist Sans)
- **Color Palette**:
  - **Soft Terracotta** (`#B86751` / `hsl(13 41% 52%)`) — Primary CTA & editorial focus
  - **Muted Sage** (`#9DA893` / `hsl(95 11% 62%)`) — Secondary highlights & botanical purity
  - **Sunbeam Butter** (`#EFE8D8` / `hsl(43 41% 89%)`) — Tinted containers & callouts
  - **Canvas Cream** (`#FBF9F5` / `hsl(40 33% 97%)`) — Default page canvas background
  - **Soft Linen** (`#F5F1EA` / `hsl(38 27% 94%)`) — Elevation & card containers
  - **Charcoal Slate** (`#2D2926` / `hsl(24 8% 16%)`) — High-contrast, gentle typography

---

## 🎨 Google Stitch MCP Integration

This codebase is configured with a native workspace MCP (Model Context Protocol) server connecting to **Google Stitch APIs**:

- **Location**: [`.agents/mcp_config.json`](.agents/mcp_config.json)
- **Server Endpoint**: `https://stitch.googleapis.com/mcp`
- **Transport**: Remote SSE / HTTP POST JSON-RPC (`protocolVersion: 2024-11-05`)
- **Capabilities**: Full AI design system generation, screen editing, and variant generation.

---

## ✨ Features

- 🛍️ **DTC E-Commerce Catalog**: Filterable organic innerwear, sleepwear, and loungewear.
- 🌿 **Organic & Safety Badging**: GOTS 100% Organic, OEKO-TEX® Standard 100, and flat-lock seam badges.
- 📱 **Fully Responsive**: Mobile-first fluid 12-column Scandinavian editorial grid.
- 🛒 **Slide-out Cart & Wishlist**: Real-time reactive cart management (`CartContext`).
- 🌓 **Dark & Light Mode**: Accessible contrast tokens for nighttime nursery browsing.
- 🚀 **Vercel Production Ready**: Single Page Application rewrite rules & cache control headers (`vercel.json`).

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/little-boys-F.git

# Navigate to project root
cd little-boys-F

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:5173` (or the URL shown in terminal) to view the storefront.

### Build & Preview

```bash
# Production build
npm run build

# Preview build output
npm run preview
```

---

## 📁 Repository Structure

```
little-boys-F/
├── .agents/
│   └── mcp_config.json      # Workspace Stitch MCP Server configuration
├── docs/
│   ├── DEPLOYMENT.md        # Vercel deployment guide
│   ├── DESIGN_SYSTEM.md     # Nordic Slumber & Nest design system tokens
│   ├── STITCH_MCP.md        # Google Stitch MCP integration details
│   └── STRUCTURE.md         # Comprehensive architecture map
├── public/
│   └── images/stitch/       # High-resolution Stitch design & lookbook assets
├── screenshots/
│   └── stitch/              # Reference storefront designs & screenshots
├── src/
│   ├── components/          # Reusable UI, layout & product components
│   ├── context/             # CartContext & state management
│   ├── data/                # Lille & Nest product catalog
│   ├── pages/               # Application page routes
│   ├── index.css            # HSL design tokens & global CSS
│   └── main.tsx             # Application entry point
├── tailwind.config.ts       # Tailwind CSS configuration
└── vercel.json              # Vercel deployment & routing config
```

---

## 🚢 Deployment

The project is configured for seamless deployment on **Vercel**:

1. Push your code to GitHub (`main` branch).
2. Import the repository in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Vite**
4. Output Directory: **`dist`**
5. Vercel automatically applies rewrite rules from [`vercel.json`](vercel.json).

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for complete details.

---

## 📄 License & Maintainer

- **Maintainer**: UI/UX Development Team
- **Author Email**: `developer.reem.ali@gmail.com`
- **Repository**: [`https://github.com/Mostafa-SAID7/little-boys-F`](https://github.com/Mostafa-SAID7/little-boys-F)
- **License**: MIT
