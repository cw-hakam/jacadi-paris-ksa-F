# Changelog — Lille & Nest

All notable changes to the **Lille & Nest** Scandinavian e-commerce platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-09-30

### Added
- **Google Stitch MCP Server Integration** — Native workspace configuration in [`.agents/mcp_config.json`](../.agents/mcp_config.json) connecting to `https://stitch.googleapis.com/mcp`.
- **Nordic Slumber & Nest Design System** — Scandinavian earth-tone palette (`#B86751` Soft Terracotta, `#9DA893` Muted Sage, `#FBF9F5` Canvas Cream, `#F5F1EA` Soft Linen).
- **Google Fonts** — Integrated `Newsreader` (Editorial Serif Display) and `Plus Jakarta Sans` (Humanist Body).
- **Stitch Design Assets** — Integrated high-resolution Stitch lookbook images in [`public/images/stitch/`](../public/images/stitch/).
- **GOTS & OEKO-TEX® Badging** — Certified organic cotton, anti-chafe seamwork, and zero-chemical safety badges across catalog and product pages.
- **Vercel Production Setup** — Configured Single Page Application rewrites and cache controls in [`vercel.json`](../vercel.json).

### Refactored
- **Header & Footer** — Rebranded with official Lille & Nest logo and Scandinavian editorial navigation.
- **Hero & About Pages** — Replaced generic hero banners with Lille & Nest editorial story and Stitch storefront design showcase.
- **Documentation Architecture** — Consolidated markdown documentation, removing obsolete Docker, Netlify, and Nginx configurations.

---

## [1.0.0] - 2026-03-15

### Added
- Initial release of children's e-commerce platform.
- Product catalog, shopping cart drawer, wishlist, and dark/light mode.
