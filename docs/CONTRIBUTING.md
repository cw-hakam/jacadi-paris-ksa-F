# Contributing to Lille & Nest

Thank you for contributing to **Lille & Nest**! This document provides guidelines for code standards, commit formatting, and pull requests.

---

## 🚀 Quick Setup

```bash
# Clone repository
git clone https://github.com/Mostafa-SAID7/little-boys-F.git

# Navigate to project root
cd little-boys-F

# Install dependencies
npm install

# Start dev server
npm run dev

# Run production build
npm run build
```

---

## 🎨 Coding & Design Standards

### 1. Design Tokens & Styling
- Maintain the **Nordic Slumber & Nest** palette using semantic CSS variables (`--primary: 13 41% 52%`, `--secondary: 95 11% 62%`, `--background: 40 33% 97%`, `--card: 38 27% 94%`).
- Use **Newsreader** for headings (`font-display`) and **Plus Jakarta Sans** for body (`font-body`).

### 2. TypeScript & React
- Use functional components with React hooks.
- Strict TypeScript typing — avoid `any`.
- Keep components focused, modular, and responsive across mobile, tablet, and desktop breakpoints.

### 3. Commit Messages
Follow Conventional Commits:
- `feat(stitch)`: New design system feature or Stitch tool addition
- `fix(ui)`: Bug fix or visual alignment adjustment
- `docs`: Documentation updates
- `chore`: Build or configuration updates
