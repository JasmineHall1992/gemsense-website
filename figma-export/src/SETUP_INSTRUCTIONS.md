# GEM Website - Setup Instructions

## Quick Start for VSCode

### 1. Create a New Vite + React Project

```bash
npm create vite@latest gem-website -- --template react-ts
cd gem-website
```

### 2. Install Dependencies

```bash
npm install
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Install Shadcn/UI

```bash
npx shadcn@latest init
```

When prompted, choose:
- TypeScript: Yes
- Style: Default
- Base color: Slate
- CSS variables: Yes

Then install the required components:

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add label
npx shadcn@latest add aspect-ratio
npx shadcn@latest add card
npx shadcn@latest add avatar
npx shadcn@latest add badge
npx shadcn@latest add separator
```

### 4. Copy Files from Figma Make

Copy these files from Figma Make to your local project:

**Main Files:**
- `/App.tsx` → `src/App.tsx`
- `/styles/globals.css` → `src/index.css`

**Create these folders and copy:**
- `/pages/*` → `src/pages/`
- `/components/Navigation.tsx` → `src/components/Navigation.tsx`
- `/components/Footer.tsx` → `src/components/Footer.tsx`
- `/components/ui/*` → `src/components/ui/` (auto-created by shadcn)

**Create ImageWithFallback component:**
- `/components/figma/ImageWithFallback.tsx` → `src/components/figma/ImageWithFallback.tsx`

### 5. Update Configuration Files

Replace `tailwind.config.js` and `src/index.css` with the versions provided.

### 6. Run Development Server

```bash
npm run dev
```

Visit http://localhost:5173 to see your site!

### 7. Build for Production

```bash
npm run build
```

The built site will be in the `dist/` folder.

## Showing the Client

### Option 1: Deploy to Vercel (Recommended - Free & Fast)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Share the live URL with your client!

### Option 2: Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### Option 3: Share Screenshots/Video

Use tools like:
- Loom (screen recording)
- CloudApp (screenshots + video)
- Take screenshots of each page

## File Structure

```
gem-website/
├── src/
│   ├── components/
│   │   ├── ui/           (shadcn components)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── GEMSense.tsx
│   │   ├── Capabilities.tsx
│   │   ├── FederalContracting.tsx
│   │   ├── Commercial.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Need Help?

- Contact: jimmy@gemgradingco.com
- All images are from Unsplash (free to use)
- Fonts and typography are configured in globals.css
