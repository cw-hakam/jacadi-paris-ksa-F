# Codebase Architecture & Directory Map

This document provides a comprehensive map of the **Lille & Nest** repository structure.

---

## 📁 Repository Overview

```
little-boys-F/
├── .agents/
│   └── mcp_config.json              # Workspace Stitch MCP Server configuration
├── docs/
│   ├── DEPLOYMENT.md                # Vercel deployment guide
│   ├── DESIGN_SYSTEM.md             # Nordic Slumber & Nest design system tokens
│   ├── STITCH_MCP.md                # Stitch MCP Server integration & tools
│   ├── STRUCTURE.md                 # Codebase architecture & map (this file)
│   ├── FEATURES.md                  # Storefront features
│   ├── CHANGELOG.md                 # Version release history
│   ├── CODE_OF_CONDUCT.md           # Community guidelines
│   ├── CONTRIBUTING.md              # Contribution guide
│   ├── CONTRIBUTORS.md              # Contributor list
│   └── SECURITY.md                  # Security policies
├── public/
│   └── images/stitch/               # High-res Stitch design & lookbook images
│       ├── lille-nest-logo.png
│       ├── hero-children-loungewear.jpg
│       ├── briefs-flatlay-editorial.jpg
│       ├── girl-pajamas-lookbook.jpg
│       ├── toddler-boy-playing.jpg
│       └── full-storefront-stitch-design.jpg
├── screenshots/
│   └── stitch/                      # Workspace design reference screenshots
├── src/
│   ├── components/
│   │   ├── cart/                    # CartSidebar drawer & cart controls
│   │   ├── home/                    # HeroSection, CategoriesSection, NewsletterSection
│   │   ├── layout/                  # Header, Footer, PageHero
│   │   ├── navigation/              # Breadcrumbs & links
│   │   ├── products/                # ProductCard, CategoryCard, AgeFilterBar
│   │   └── ui/                      # Radix UI primitives & custom UI components
│   ├── context/
│   │   └── CartContext.tsx          # Cart state provider & item persistence
│   ├── data/
│   │   └── products.ts              # Lille & Nest product catalog & categories
│   ├── hooks/                       # Custom React hooks (toast, mobile detection)
│   ├── pages/                       # Application pages (Index, About, Products, etc.)
│   ├── types/                       # TypeScript interfaces for products & cart
│   ├── App.tsx                      # Main React router & layout provider
│   ├── index.css                    # Tailwind CSS directives & HSL color tokens
│   └── main.tsx                     # Vite application entry point
├── index.html                       # HTML5 template & Google Fonts imports
├── package.json                     # NPM dependencies & scripts
├── package-lock.json                # Locked dependency graph
├── tailwind.config.ts               # Tailwind design system configuration
└── vercel.json                      # Vercel routing rewrites & security headers
```

---

## 🔑 Core Files & Roles

- [`.agents/mcp_config.json`](../.agents/mcp_config.json): Connects the IDE agent to the remote **Google Stitch MCP Server**.
- [`src/index.css`](../src/index.css): Defines root HSL color variables (`--primary: 13 41% 52%`, `--secondary: 95 11% 62%`, etc.) and font declarations.
- [`src/data/products.ts`](../src/data/products.ts): Houses the product catalog with GOTS/OEKO-TEX® badges and Stitch lookbook imagery.
- [`vercel.json`](../vercel.json): Configures Single Page Application route rewrites (`/(.*) -> /index.html`) on Vercel.
