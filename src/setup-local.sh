#!/bin/bash

# Transparencia Local 360 - Local Development Setup Script
# This script creates a complete local development environment

set -e  # Exit on error

echo "🚀 Setting up Transparencia Local 360 for local development..."
echo ""

# Project name
PROJECT_NAME="transparencia-local-360"

# Create project directory
echo "📁 Creating project directory: $PROJECT_NAME"
mkdir -p $PROJECT_NAME
cd $PROJECT_NAME

# Create directory structure
echo "📂 Creating directory structure..."
mkdir -p src/components/ui
mkdir -p src/components/figma
mkdir -p src/config
mkdir -p src/data
mkdir -p src/styles
mkdir -p public

# Create package.json
echo "📦 Creating package.json..."
cat > package.json << 'EOF'
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
    "tailwindcss": "^4.0.0-alpha.25",
    "typescript": "^5.3.3",
    "vite": "^5.1.0"
  }
}
EOF

# Create tsconfig.json
echo "⚙️  Creating tsconfig.json..."
cat > tsconfig.json << 'EOF'
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
EOF

# Create tsconfig.node.json
echo "⚙️  Creating tsconfig.node.json..."
cat > tsconfig.node.json << 'EOF'
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
EOF

# Create vite.config.ts
echo "⚙️  Creating vite.config.ts..."
cat > vite.config.ts << 'EOF'
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
EOF

# Create index.html
echo "📄 Creating index.html..."
cat > index.html << 'EOF'
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
EOF

# Create postcss.config.js
echo "⚙️  Creating postcss.config.js..."
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create tailwind.config.js
echo "🎨 Creating tailwind.config.js..."
cat > tailwind.config.js << 'EOF'
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
EOF

# Create .gitignore
echo "📝 Creating .gitignore..."
cat > .gitignore << 'EOF'
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
EOF

# Create .eslintrc.cjs
echo "📝 Creating .eslintrc.cjs..."
cat > .eslintrc.cjs << 'EOF'
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
EOF

# Create src/main.tsx
echo "📄 Creating src/main.tsx..."
cat > src/main.tsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

# Create src/vite-env.d.ts
echo "📄 Creating src/vite-env.d.ts..."
cat > src/vite-env.d.ts << 'EOF'
/// <reference types="vite/client" />
EOF

# Create README for next steps
echo "📄 Creating SETUP_INSTRUCTIONS.md..."
cat > SETUP_INSTRUCTIONS.md << 'EOF'
# 🚀 Transparencia Local 360 - Setup Instructions

## ✅ What's Been Created

The script has created:
- ✓ Complete project structure
- ✓ Configuration files (package.json, tsconfig, vite.config, etc.)
- ✓ Build tooling setup (Vite, TypeScript, Tailwind CSS)
- ✓ Main entry point (src/main.tsx)

## 📋 Next Steps

### 1. Copy Your Source Files

You need to copy your existing files from the Figma Make project:

```bash
# From your original project directory, copy files to this new project:

# Copy main App file
cp App.tsx transparencia-local-360/src/

# Copy all components
cp -r components/* transparencia-local-360/src/components/

# Copy config
cp -r config/* transparencia-local-360/src/config/

# Copy data
cp -r data/* transparencia-local-360/src/data/

# Copy styles
cp -r styles/* transparencia-local-360/src/styles/

# Copy documentation
cp *.md transparencia-local-360/
```

### 2. Fix Import Statements

Run the provided fix-imports script:

```bash
chmod +x fix-imports.sh
./fix-imports.sh
```

This will automatically update all imports to remove version numbers.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
transparencia-local-360/
├── src/
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   └── figma/              # Figma-specific components
│   ├── config/                 # Configuration files
│   ├── data/                   # Data files
│   └── styles/                 # CSS files
├── public/                     # Static assets
└── [config files]              # TypeScript, Vite, etc.
```

## 🐛 Troubleshooting

### Import Errors
If you see import errors, make sure all imports follow this pattern:
- ✓ `import { toast } from "sonner"`
- ✗ `import { toast } from "sonner@2.0.3"`

### Missing Dependencies
If a package is missing, install it:
```bash
npm install package-name
```

### Port Already in Use
If port 5173 is in use, Vite will automatically use the next available port.

## 📚 Documentation

All original documentation files (*.md) should be copied to the project root.

## 🆘 Need Help?

Check the original documentation:
- README.md - Project overview
- GUIA_EDICION.md - Editing guide
- PLATAFORMA_SOCIAL.md - Social platform docs
- SISTEMA_VERIFICACION.md - Verification system docs

EOF

# Create import fixing script
echo "🔧 Creating fix-imports.sh..."
cat > fix-imports.sh << 'EOF'
#!/bin/bash

echo "🔧 Fixing import statements..."

# Fix sonner imports
find src -type f -name "*.tsx" -o -name "*.ts" | while read file; do
  sed -i.bak 's/from "sonner@2\.0\.3"/from "sonner"/g' "$file"
  sed -i.bak 's/from "sonner@[0-9.]*"/from "sonner"/g' "$file"
  
  # Fix react-hook-form
  sed -i.bak 's/from "react-hook-form@7\.55\.0"/from "react-hook-form"/g' "$file"
  sed -i.bak 's/from "react-hook-form@[0-9.]*"/from "react-hook-form"/g' "$file"
  
  # Fix motion imports
  sed -i.bak 's/from "motion\/react"/from "framer-motion"/g' "$file"
  sed -i.bak 's/import { motion }/import { motion } /g' "$file"
  
  # Fix Radix UI imports - remove version numbers
  sed -i.bak 's/@radix-ui\/\([^@"]*\)@[0-9.]*"/@radix-ui\/\1"/g' "$file"
  
  # Fix class-variance-authority
  sed -i.bak 's/from "class-variance-authority@[0-9.]*"/from "class-variance-authority"/g' "$file"
  
  # Remove backup files
  rm -f "$file.bak"
done

echo "✅ Import statements fixed!"
echo ""
echo "Files processed:"
find src -type f \( -name "*.tsx" -o -name "*.ts" \) | wc -l
echo ""
EOF

chmod +x fix-imports.sh

# Create copy helper script
echo "📋 Creating copy-files.sh helper..."
cat > copy-files.sh << 'EOF'
#!/bin/bash

# Helper script to copy files from Figma Make project
# Usage: ./copy-files.sh /path/to/original/project

if [ -z "$1" ]; then
  echo "Usage: ./copy-files.sh /path/to/original/project"
  exit 1
fi

SOURCE_DIR="$1"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: Source directory does not exist: $SOURCE_DIR"
  exit 1
fi

echo "📁 Copying files from: $SOURCE_DIR"
echo ""

# Copy App.tsx
if [ -f "$SOURCE_DIR/App.tsx" ]; then
  echo "✓ Copying App.tsx..."
  cp "$SOURCE_DIR/App.tsx" src/
fi

# Copy components
if [ -d "$SOURCE_DIR/components" ]; then
  echo "✓ Copying components..."
  cp -r "$SOURCE_DIR/components"/* src/components/
fi

# Copy config
if [ -d "$SOURCE_DIR/config" ]; then
  echo "✓ Copying config..."
  cp -r "$SOURCE_DIR/config"/* src/config/
fi

# Copy data
if [ -d "$SOURCE_DIR/data" ]; then
  echo "✓ Copying data..."
  cp -r "$SOURCE_DIR/data"/* src/data/
fi

# Copy styles
if [ -d "$SOURCE_DIR/styles" ]; then
  echo "✓ Copying styles..."
  cp -r "$SOURCE_DIR/styles"/* src/styles/
fi

# Copy documentation
echo "✓ Copying documentation..."
cp "$SOURCE_DIR"/*.md . 2>/dev/null || true

echo ""
echo "✅ Files copied successfully!"
echo ""
echo "Next steps:"
echo "1. Run: ./fix-imports.sh"
echo "2. Run: npm install"
echo "3. Run: npm run dev"
echo ""
EOF

chmod +x copy-files.sh

echo ""
echo "✅ Setup complete!"
echo ""
echo "📁 Project created in: $PROJECT_NAME"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Copy your source files:"
echo "   cd $PROJECT_NAME"
echo "   ./copy-files.sh /path/to/your/figma-make/project"
echo ""
echo "2. Fix imports:"
echo "   ./fix-imports.sh"
echo ""
echo "3. Install dependencies:"
echo "   npm install"
echo ""
echo "4. Start development server:"
echo "   npm run dev"
echo ""
echo "📖 For detailed instructions, see SETUP_INSTRUCTIONS.md"
echo ""
