# Lille & Nest — Production Deployment Checklist

Use this checklist before releasing updates to the **Lille & Nest** storefront on Vercel.

---

## 🧪 Pre-Deployment Verification

### 1. Code Quality & Build Integrity
- [ ] Production build completes cleanly (`npm run build`).
- [ ] ESLint checks pass without errors (`npm run lint`).
- [ ] TypeScript type checks pass (`npx tsc --noEmit`).
- [ ] No `console.log` statements or leftover debugging code in `src/`.

### 2. Stitch MCP & Asset Integrity
- [ ] Stitch MCP server configuration intact in [`.agents/mcp_config.json`](../.agents/mcp_config.json).
- [ ] All high-res Stitch lookbook imagery present in [`public/images/stitch/`](../public/images/stitch/):
  - `lille-nest-logo.png`
  - `hero-children-loungewear.jpg`
  - `briefs-flatlay-editorial.jpg`
  - `girl-pajamas-lookbook.jpg`
  - `toddler-boy-playing.jpg`
  - `full-storefront-stitch-design.jpg`

### 3. Design Tokens & Styling
- [ ] Nordic Slumber & Nest colors applied (`#B86751` Soft Terracotta, `#9DA893` Muted Sage, `#FBF9F5` Canvas Cream, `#F5F1EA` Soft Linen).
- [ ] Google Fonts `Newsreader` (Serif Display) & `Plus Jakarta Sans` (Body) load cleanly.
- [ ] Both Light (Canvas Cream) and Dark (Charcoal Slate) themes display proper contrast.

### 4. SEO & Responsive Viewports
- [ ] Title & Meta tags configured for Lille & Nest in `index.html`.
- [ ] SPA route rewrites configured in `vercel.json` (`/(.*) -> /index.html`).
- [ ] Responsive design verified on Mobile (375px), Tablet (768px), and Desktop (1440px).

---

## 🚀 Vercel Production Release

1. Push changes to GitHub `main` branch.
2. Confirm Vercel deployment status in Vercel Dashboard.
3. Test live URL: Verify `/about`, `/products`, `/sustainability`, and `/cart`.
