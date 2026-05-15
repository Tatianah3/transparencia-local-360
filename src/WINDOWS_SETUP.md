# 🪟 Windows Setup Guide - Transparencia Local 360

## 🚀 Quick Setup for Windows

### Option 1: PowerShell (Recommended) ✅

**Step 1: Open PowerShell**
- Press `Win + X`
- Select "Windows PowerShell" or "Terminal"

**Step 2: Navigate to your download folder**
```powershell
cd C:\Users\YourUsername\Downloads\transparencia-local-360
```

**Step 3: Run the setup script**
```powershell
.\setup-local.ps1
```

If you get an execution policy error:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then try running the script again.

---

### Option 2: Manual Setup (If script doesn't work)

**Step 1: Install Node.js**
Download from: https://nodejs.org/ (LTS version)

**Step 2: Create Vite Project**
```powershell
npm create vite@latest transparencia-local-360 -- --template react-ts
cd transparencia-local-360
npm install
```

**Step 3: Install Dependencies**
```powershell
# Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install UI libraries
npm install lucide-react sonner framer-motion recharts
npm install class-variance-authority clsx tailwind-merge
npm install react-hook-form

# Install Radix UI (copy-paste all at once)
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @radix-ui/react-toggle @radix-ui/react-aspect-ratio @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-hover-card @radix-ui/react-menubar @radix-ui/react-navigation-menu
```

**Step 4: Copy Your Files**

Using File Explorer:
1. Copy `App.tsx` → `src\App.tsx`
2. Copy entire `components\` folder → `src\components\`
3. Copy entire `config\` folder → `src\config\`
4. Copy entire `data\` folder → `src\data\`
5. Copy entire `styles\` folder → `src\styles\`

**Step 5: Fix Imports Manually**

In VS Code:
1. Press `Ctrl + Shift + H` (Find and Replace in Files)
2. Replace these:

| Find | Replace |
|------|---------|
| `"sonner@2.0.3"` | `"sonner"` |
| `"react-hook-form@7.55.0"` | `"react-hook-form"` |
| `"motion/react"` | `"framer-motion"` |
| `@radix-ui/react-slot@1.1.2"` | `@radix-ui/react-slot"` |
| `class-variance-authority@0.7.1"` | `class-variance-authority"` |

3. For all other Radix imports, use regex:
   - Find: `@radix-ui/([^@"]+)@[^"]+"`
   - Replace: `@radix-ui/$1"`

**Step 6: Update Tailwind Config**

Replace `tailwind.config.js` content with:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
```

**Step 7: Start Dev Server**
```powershell
npm run dev
```

---

## 📋 Complete PowerShell Commands (Copy-Paste)

If your Figma Make project is in `C:\Users\YourUsername\Downloads\figma-project`:

```powershell
# Navigate to where you want to create the project
cd C:\Users\YourUsername\Documents

# Run the setup script from the original project
C:\Users\YourUsername\Downloads\figma-project\setup-local.ps1

# Navigate to the new project
cd transparencia-local-360

# Copy files (adjust source path as needed)
Copy-Item C:\Users\YourUsername\Downloads\figma-project\App.tsx src\
Copy-Item -Recurse C:\Users\YourUsername\Downloads\figma-project\components\* src\components\
Copy-Item -Recurse C:\Users\YourUsername\Downloads\figma-project\config\* src\config\
Copy-Item -Recurse C:\Users\YourUsername\Downloads\figma-project\data\* src\data\
Copy-Item -Recurse C:\Users\YourUsername\Downloads\figma-project\styles\* src\styles\
Copy-Item C:\Users\YourUsername\Downloads\figma-project\*.md .

# Fix imports
.\fix-imports.ps1

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 🎯 Using VS Code (Easiest Method)

**Step 1: Download and Install VS Code**
https://code.visualstudio.com/

**Step 2: Open Terminal in VS Code**
- Open VS Code
- Press `` Ctrl + ` `` (backtick) to open terminal
- Select "PowerShell" from dropdown

**Step 3: Follow PowerShell instructions above**

VS Code advantages:
- ✅ Built-in terminal
- ✅ Better error messages
- ✅ Syntax highlighting
- ✅ IntelliSense
- ✅ Easy find/replace for fixing imports

---

## 🐛 Troubleshooting

### "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/
After installing, restart your terminal.

### "Execution policy" error
**Solution:** Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### "Cannot find module" errors
**Solution:** Make sure you ran:
```powershell
npm install
```

### Port 5173 in use
**Solution:** Vite will auto-select next port, or specify:
```powershell
npm run dev -- --port 3000
```

### Imports still have version numbers
**Solution:** Run the fix script again:
```powershell
.\fix-imports.ps1
```

Or manually find/replace in VS Code (`Ctrl + Shift + H`)

---

## ✅ Final Checklist

Before running `npm run dev`, ensure:

- [ ] Node.js is installed (`node --version` works)
- [ ] Project created (has package.json)
- [ ] All files copied from Figma Make project
- [ ] Import statements fixed (no @version numbers)
- [ ] Dependencies installed (`npm install` completed)
- [ ] No errors in terminal

---

## 🚀 Development Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📁 Where Files Should Be

```
transparencia-local-360/
├── node_modules/          (created by npm install)
├── src/
│   ├── App.tsx           ← Copy from original
│   ├── main.tsx          ← Created by script
│   ├── components/       ← Copy from original
│   │   ├── ui/
│   │   ├── figma/
│   │   └── [all components]
│   ├── config/           ← Copy from original
│   ├── data/             ← Copy from original
│   └── styles/           ← Copy from original
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

---

## 💡 Tips

1. **Use PowerShell** instead of CMD - it's more powerful
2. **Use VS Code** - makes everything easier
3. **Copy-paste commands** - don't type them manually
4. **Check Node.js version** - should be 18+ (`node --version`)
5. **Close other apps** - to free up port 5173

---

## 🆘 Still Having Issues?

1. Make sure Node.js is installed: `node --version`
2. Make sure npm works: `npm --version`
3. Try running PowerShell as Administrator
4. Check that all files were copied correctly
5. Verify imports don't have version numbers (open files in VS Code)

---

**Ready to start!** 🎉

Open PowerShell, navigate to your project, and run:
```powershell
.\setup-local.ps1
```
