# 🚀 Transparencia Local 360 - Local Development Setup

## Quick Start (3 Steps)

### Step 1: Download the Setup Script

Download the `setup-local.sh` file from this project.

### Step 2: Run the Setup Script

```bash
# Make the script executable
chmod +x setup-local.sh

# Run it
./setup-local.sh
```

This will create a new directory called `transparencia-local-360` with all the necessary configuration files.

### Step 3: Copy Your Files and Start

```bash
# Navigate to the new project
cd transparencia-local-360

# Use the helper script to copy your files
./copy-files.sh /path/to/this/figma-project

# Fix imports
./fix-imports.sh

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📦 What the Script Creates

The setup script automatically creates:

### Configuration Files
- ✅ `package.json` - All dependencies configured
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `vite.config.ts` - Vite bundler configuration
- ✅ `tailwind.config.js` - Tailwind CSS v4 setup
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `.eslintrc.cjs` - ESLint configuration
- ✅ `.gitignore` - Git ignore rules

### Project Structure
```
transparencia-local-360/
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # (copied from your project)
│   ├── components/       # (copied from your project)
│   ├── config/           # (copied from your project)
│   ├── data/             # (copied from your project)
│   └── styles/           # (copied from your project)
├── public/               # Static assets
├── index.html            # HTML entry point
└── [config files]
```

### Helper Scripts
- ✅ `copy-files.sh` - Copies files from Figma Make project
- ✅ `fix-imports.sh` - Fixes import statements automatically

---

## 🔧 Manual Alternative (If Script Doesn't Work)

If you prefer to set up manually or the script doesn't work on your system:

### 1. Create Project

```bash
npm create vite@latest transparencia-local-360 -- --template react-ts
cd transparencia-local-360
```

### 2. Install Dependencies

```bash
npm install

# Install Tailwind and PostCSS
npm install -D tailwindcss postcss autoprefixer

# Install UI dependencies
npm install lucide-react sonner framer-motion recharts
npm install class-variance-authority clsx tailwind-merge
npm install react-hook-form

# Install Radix UI components
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog
npm install @radix-ui/react-avatar @radix-ui/react-checkbox
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-label @radix-ui/react-popover
npm install @radix-ui/react-progress @radix-ui/react-radio-group
npm install @radix-ui/react-scroll-area @radix-ui/react-select
npm install @radix-ui/react-separator @radix-ui/react-slider
npm install @radix-ui/react-slot @radix-ui/react-switch
npm install @radix-ui/react-tabs @radix-ui/react-toast
npm install @radix-ui/react-tooltip @radix-ui/react-toggle
npm install @radix-ui/react-aspect-ratio @radix-ui/react-collapsible
npm install @radix-ui/react-context-menu @radix-ui/react-hover-card
npm install @radix-ui/react-menubar @radix-ui/react-navigation-menu
```

### 3. Configure Tailwind

```bash
npx tailwindcss init -p
```

Replace `tailwind.config.js` content with the one from the setup script.

### 4. Copy Files

Manually copy your files:
- `App.tsx` → `src/App.tsx`
- `components/` → `src/components/`
- `config/` → `src/config/`
- `data/` → `src/data/`
- `styles/` → `src/styles/`

### 5. Fix Imports

Search and replace in all files:
- `"sonner@2.0.3"` → `"sonner"`
- `"react-hook-form@7.55.0"` → `"react-hook-form"`
- `"motion/react"` → `"framer-motion"`
- Remove version numbers from all `@radix-ui/` imports

---

## 🎯 Import Fixes Required

The script automatically fixes these, but if doing manually:

### Before (Figma Make)
```typescript
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import { useForm } from "react-hook-form@7.55.0";
import { Slot } from "@radix-ui/react-slot@1.1.2";
```

### After (Local)
```typescript
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Slot } from "@radix-ui/react-slot";
```

---

## 📝 Key Differences from Figma Make

| Aspect | Figma Make | Local Development |
|--------|------------|-------------------|
| Imports | `package@version` | `package` (no version) |
| Motion | `motion/react` | `framer-motion` |
| File paths | Root relative `/` | Relative `./` or `@/` |
| Build tool | Figma bundler | Vite |
| Hot reload | Figma HMR | Vite HMR |

---

## 🐛 Common Issues and Solutions

### Issue: Import errors after copying files

**Solution:**
```bash
./fix-imports.sh
```

### Issue: `Module not found` errors

**Solution:**
```bash
npm install
```

If specific package is missing:
```bash
npm install package-name
```

### Issue: Tailwind styles not working

**Solution:**
Make sure `src/styles/globals.css` exists and is imported in `src/main.tsx`:
```typescript
import './styles/globals.css'
```

### Issue: TypeScript errors

**Solution:**
Check that all imports are correct. You may need to add type definitions:
```bash
npm install -D @types/node
```

### Issue: Port 5173 already in use

**Solution:**
Vite will automatically use the next available port, or specify a different one:
```bash
npm run dev -- --port 3000
```

---

## 🚀 Development Workflow

### Starting Development
```bash
npm run dev
```
App runs at `http://localhost:5173`

### Building for Production
```bash
npm run build
```
Output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 📁 File Structure After Setup

```
transparencia-local-360/
├── node_modules/           # Dependencies (created by npm install)
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── vite-env.d.ts      # Vite types
│   ├── components/        # All React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── figma/        # Figma-specific components
│   │   ├── CitizenForm.tsx
│   │   ├── InteractiveMap.tsx
│   │   ├── LandingPage.tsx
│   │   ├── MapView.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── SocialFeed.tsx
│   │   ├── TrainingSection.tsx
│   │   ├── ValidationBadge.tsx
│   │   └── VerificationGuide.tsx
│   ├── config/
│   │   └── site-config.ts # Configuration
│   ├── data/
│   │   └── projects.ts    # Project data
│   └── styles/
│       └── globals.css    # Global styles
├── index.html             # HTML entry
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
├── tailwind.config.js     # Tailwind config
├── postcss.config.js      # PostCSS config
├── .eslintrc.cjs          # ESLint config
├── .gitignore             # Git ignore
├── copy-files.sh          # Helper script
├── fix-imports.sh         # Helper script
└── SETUP_INSTRUCTIONS.md  # This guide
```

---

## 🎨 Customization

### Change Port
Edit `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3000,
  },
  // ...
})
```

### Add Path Aliases
Already configured in `tsconfig.json`:
```typescript
// Use @/ to reference src/
import { Button } from '@/components/ui/button'
```

### Environment Variables
Create `.env` file:
```
VITE_API_URL=http://localhost:3000
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🔒 Production Deployment

### Build
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)

---

## ✅ Checklist

Before starting development, ensure:

- [ ] Script ran successfully
- [ ] Files copied from Figma Make project
- [ ] Imports fixed (no version numbers)
- [ ] Dependencies installed (`npm install` completed)
- [ ] Development server starts (`npm run dev` works)
- [ ] No console errors in browser
- [ ] Tailwind styles are working
- [ ] All components render correctly

---

## 🆘 Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify all imports are correct
3. Ensure all dependencies are installed
4. Check that file paths are correct
5. Review the `SETUP_INSTRUCTIONS.md` file

---

**Created:** November 2025  
**Version:** 2.0  
**Figma Make Migration Guide**
