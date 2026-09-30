# Vercel Deployment Guide — Lille & Nest

This document details the production deployment process for **Lille & Nest** using **Vercel**.

---

## 🚀 Recommended Deployment: Vercel

### 1. Automatic GitHub Integration (Recommended)

1. Commit and push your code to GitHub:
   ```bash
   git push origin main
   ```
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import the repository `Mostafa-SAID7/little-boys-F`.
4. Configure Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: `18.x`
5. Click **Deploy**.

---

## ⚙️ Routing & Caching Configuration (`vercel.json`)

Vercel reads configuration settings automatically from [`vercel.json`](../vercel.json):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 🛠️ CLI Manual Deployment

You can also deploy directly from your local terminal using the Vercel CLI:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Log in to Vercel
vercel login

# Deploy preview build
vercel

# Deploy to production
vercel --prod
```

---

## ✅ Post-Deployment Verification Checklist

1. **SPA Route Refresh**: Navigate to `/about`, `/products`, or `/sustainability` and hard-refresh (`Ctrl + Shift + R`). Vercel rewrites will serve `index.html` cleanly without 404 errors.
2. **Static Asset Caching**: Check HTTP response headers on `/images/stitch/hero-children-loungewear.jpg` to verify high-speed CDN delivery.
3. **Responsive Breakpoints**: Test on mobile (375px), tablet (768px), and desktop (1440px).
