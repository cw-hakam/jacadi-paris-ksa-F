# Nordic Slumber & Nest — Design System Specification

This document details the visual style, color tokens, typography cadences, component rules, and responsive design guidelines for **Lille & Nest**.

---

## 🎨 Color Palette & HSL Tokens

The palette is rooted in gentle Scandinavian earth tones evoking unfiltered morning light, unbleached organic cotton, and warm ceramics.

### Primary Tokens

| Role | Color Name | Hex Code | HSL Value | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | Soft Terracotta | `#B86751` | `hsl(13 41% 52%)` | CTAs, active states, hero highlights |
| **Secondary** | Muted Sage | `#9DA893` | `hsl(95 11% 62%)` | Organic badges, secondary buttons, botanical accents |
| **Muted** | Sunbeam Butter | `#EFE8D8` | `hsl(43 41% 89%)` | Tinted callouts, category badges, soft fills |
| **Background** | Canvas Cream | `#FBF9F5` | `hsl(40 33% 97%)` | Default page background |
| **Surface/Card** | Soft Linen | `#F5F1EA` | `hsl(38 27% 94%)` | Product cards, elevated containers |
| **Foreground** | Charcoal Slate | `#2D2926` | `hsl(24 8% 16%)` | Body typography & high-contrast headings |
| **Border** | Soft Outline | `#DAC1BB` | `hsl(11 28% 80%)` | Card borders, dividers (`1px` solid) |

---

## 🔤 Typography

Typography establishes an intentional cadence between editorial elegance and contemporary Scandinavian utility.

### Font Families

1. **Headline & Display Font**: [`Newsreader`](https://fonts.google.com/specimen/Newsreader)
   - *Style*: Serif Display
   - *Weights*: 400 (Regular), 500 (Medium), 600 (SemiBold), Italic
   - *CSS Variable*: `--font-display: 'Newsreader', Georgia, serif;`

2. **Body & Controls Font**: [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
   - *Style*: Humanist Sans-serif
   - *Weights*: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
   - *CSS Variable*: `--font-body: 'Plus Jakarta Sans', sans-serif;`

---

## 📐 Shape & Geometry

- **Primary Corner Radius**: `0.5rem` (8px base radius, configured via `--radius: 0.5rem`).
- **Pill Radius**: `rounded-full` (`9999px`) used for primary button CTAs, filter chips, and organic badges.
- **Card Containers**: Rounded `1rem` (16px) with razor-thin low-contrast borders (`1px solid rgba(45, 41, 38, 0.1)`).

---

## 🌿 Certification & Quality Badges

- **GOTS 100% Organic**: Applied to items crafted from certified organic cotton.
- **OEKO-TEX® Standard 100**: Applied to items independently tested for 300+ harmful chemicals.
- **Anti-Chafe Seams**: Applied to flat-lock stitch garments designed for sensitive infant skin.
