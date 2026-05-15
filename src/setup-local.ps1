# Transparencia Local 360 - Windows PowerShell Setup Script
# Run this script in PowerShell to set up local development

Write-Host "🚀 Setting up Transparencia Local 360 for local development..." -ForegroundColor Green
Write-Host ""

# Project name
$PROJECT_NAME = "transparencia-local-360"

# Create project directory if it doesn't exist
if (-not (Test-Path $PROJECT_NAME)) {
    Write-Host "📁 Creating project directory: $PROJECT_NAME" -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $PROJECT_NAME | Out-Null
    Set-Location $PROJECT_NAME
} else {
    Write-Host "📁 Using existing directory: $PROJECT_NAME" -ForegroundColor Yellow
    Set-Location $PROJECT_NAME
}

# Create directory structure
Write-Host "📂 Creating directory structure..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path "src\components\ui" | Out-Null
New-Item -ItemType Directory -Force -Path "src\components\figma" | Out-Null
New-Item -ItemType Directory -Force -Path "src\config" | Out-Null
New-Item -ItemType Directory -Force -Path "src\data" | Out-Null
New-Item -ItemType Directory -Force -Path "src\styles" | Out-Null
New-Item -ItemType Directory -Force -Path "public" | Out-Null

# Create package.json
Write-Host "📦 Creating package.json..." -ForegroundColor Cyan
@'
{
  "name": "transparencia-local-360",
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "sonner": "^1.4.0",
    "recharts": "^2.12.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "react-hook-form": "^7.50.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.0"
  }
}
'@ | Out-File -FilePath "package.json" -Encoding UTF8

# Create tsconfig.json
Write-Host "⚙️  Creating tsconfig.json..." -ForegroundColor Cyan
@'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
'@ | Out-File -FilePath "tsconfig.json" -Encoding UTF8

# Create tsconfig.node.json
Write-Host "⚙️  Creating tsconfig.node.json..." -ForegroundColor Cyan
@'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
'@ | Out-File -FilePath "tsconfig.node.json" -Encoding UTF8

# Create vite.config.ts
Write-Host "⚙️  Creating vite.config.ts..." -ForegroundColor Cyan
@'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
'@ | Out-File -FilePath "vite.config.ts" -Encoding UTF8

# Create index.html
Write-Host "📄 Creating index.html..." -ForegroundColor Cyan
@'
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Plataforma de transparencia municipal para el Banco de Proyectos MIDEPLAN de Curridabat" />
    <title>Transparencia Local 360 - Curridabat</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
'@ | Out-File -FilePath "index.html" -Encoding UTF8

# Create postcss.config.js
Write-Host "⚙️  Creating postcss.config.js..." -ForegroundColor Cyan
@'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
'@ | Out-File -FilePath "postcss.config.js" -Encoding UTF8

# Create tailwind.config.js
Write-Host "🎨 Creating tailwind.config.js..." -ForegroundColor Cyan
@'
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
'@ | Out-File -FilePath "tailwind.config.js" -Encoding UTF8

# Create .gitignore
Write-Host "📝 Creating .gitignore..." -ForegroundColor Cyan
@'
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production
'@ | Out-File -FilePath ".gitignore" -Encoding UTF8

# Create .eslintrc.cjs
Write-Host "📝 Creating .eslintrc.cjs..." -ForegroundColor Cyan
@'
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
'@ | Out-File -FilePath ".eslintrc.cjs" -Encoding UTF8

# Create src/main.tsx
Write-Host "📄 Creating src/main.tsx..." -ForegroundColor Cyan
@'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
'@ | Out-File -FilePath "src\main.tsx" -Encoding UTF8

# Create src/vite-env.d.ts
Write-Host "📄 Creating src/vite-env.d.ts..." -ForegroundColor Cyan
@'
/// <reference types="vite/client" />
'@ | Out-File -FilePath "src\vite-env.d.ts" -Encoding UTF8

# Create fix-imports.ps1
Write-Host "🔧 Creating fix-imports.ps1..." -ForegroundColor Cyan
@'
Write-Host "🔧 Fixing import statements..." -ForegroundColor Cyan

Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Fix sonner imports
    $content = $content -replace 'from "sonner@2\.0\.3"', 'from "sonner"'
    $content = $content -replace 'from "sonner@[\d\.]+"', 'from "sonner"'
    
    # Fix react-hook-form
    $content = $content -replace 'from "react-hook-form@7\.55\.0"', 'from "react-hook-form"'
    $content = $content -replace 'from "react-hook-form@[\d\.]+"', 'from "react-hook-form"'
    
    # Fix motion imports
    $content = $content -replace 'from "motion/react"', 'from "framer-motion"'
    
    # Fix Radix UI imports - remove version numbers
    $content = $content -replace '@radix-ui/([^@"]+)@[\d\.]+"', '@radix-ui/$1"'
    
    # Fix class-variance-authority
    $content = $content -replace 'from "class-variance-authority@[\d\.]+"', 'from "class-variance-authority"'
    
    Set-Content -Path $_.FullName -Value $content
}

Get-ChildItem -Path "src" -Filter "*.ts" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Fix Radix UI imports
    $content = $content -replace '@radix-ui/([^@"]+)@[\d\.]+"', '@radix-ui/$1"'
    
    # Fix class-variance-authority
    $content = $content -replace 'from "class-variance-authority@[\d\.]+"', 'from "class-variance-authority"'
    
    Set-Content -Path $_.FullName -Value $content
}

Write-Host "✅ Import statements fixed!" -ForegroundColor Green
Write-Host ""
$fileCount = (Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse).Count + (Get-ChildItem -Path "src" -Filter "*.ts" -Recurse).Count
Write-Host "Files processed: $fileCount" -ForegroundColor Yellow
Write-Host ""
'@ | Out-File -FilePath "fix-imports.ps1" -Encoding UTF8

# Create NEXT_STEPS.md
Write-Host "📄 Creating NEXT_STEPS.md..." -ForegroundColor Cyan
@'
# 🚀 Next Steps - Windows Setup

## ✅ Setup Complete!

The project structure has been created. Now follow these steps:

## 📋 Step-by-Step Instructions

### 1. Copy Your Source Files

Copy files from your Figma Make project to this new project:

**PowerShell commands:**
```powershell
# Copy App.tsx
Copy-Item ..\App.tsx src\

# Copy components
Copy-Item -Recurse ..\components\* src\components\

# Copy config
Copy-Item -Recurse ..\config\* src\config\

# Copy data
Copy-Item -Recurse ..\data\* src\data\

# Copy styles
Copy-Item -Recurse ..\styles\* src\styles\

# Copy documentation
Copy-Item ..\*.md .
```

**Or use File Explorer:**
- Copy `App.tsx` to `src\`
- Copy `components\` folder contents to `src\components\`
- Copy `config\` folder contents to `src\config\`
- Copy `data\` folder contents to `src\data\`
- Copy `styles\` folder contents to `src\styles\`
- Copy all `.md` files to project root

### 2. Fix Import Statements

Run the import fixing script:

```powershell
.\fix-imports.ps1
```

### 3. Install Dependencies

```powershell
npm install
```

This will install all required packages (may take a few minutes).

### 4. Start Development Server

```powershell
npm run dev
```

Your app will be available at: **http://localhost:5173**

## 🎯 Quick Copy-Paste Commands

If your original Figma Make project is in the parent directory:

```powershell
# Copy all files at once
Copy-Item ..\App.tsx src\
Copy-Item -Recurse ..\components\* src\components\
Copy-Item -Recurse ..\config\* src\config\
Copy-Item -Recurse ..\data\* src\data\
Copy-Item -Recurse ..\styles\* src\styles\
Copy-Item ..\*.md .

# Fix imports
.\fix-imports.ps1

# Install and run
npm install
npm run dev
```

## 🛠️ Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Common Issues

### Node.js not installed
Download and install from: https://nodejs.org/

### PowerShell execution policy error
Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port 5173 already in use
Vite will automatically use the next available port.

## 📁 Project Structure

```
transparencia-local-360/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   ├── config/
│   ├── data/
│   └── styles/
├── public/
├── index.html
├── package.json
└── [config files]
```

## ✅ Checklist

- [ ] Files copied from Figma Make project
- [ ] Imports fixed (ran fix-imports.ps1)
- [ ] Dependencies installed (npm install)
- [ ] Dev server running (npm run dev)
- [ ] App opens in browser
- [ ] No console errors

Good luck! 🎉
'@ | Out-File -FilePath "NEXT_STEPS.md" -Encoding UTF8

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Project created in: $PROJECT_NAME" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Copy your source files (see NEXT_STEPS.md for commands)" -ForegroundColor White
Write-Host "2. Run: .\fix-imports.ps1" -ForegroundColor White
Write-Host "3. Run: npm install" -ForegroundColor White
Write-Host "4. Run: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "📖 For detailed instructions, see NEXT_STEPS.md" -ForegroundColor Yellow
Write-Host ""
