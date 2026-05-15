# RUNNING.md — Cómo guardar y ejecutar el proyecto

Resumen rápido

- Proyecto: Transparencia Local 360
- Ruta del proyecto: esta carpeta (root del repo)
- Backup creado: `..\Landing Page Design backup.zip` (si el script de respaldo se ejecuta)

Requisitos previos

- Node.js (v18+ recomendado) y npm instalados
  - https://nodejs.org/
- PowerShell (Windows): la versión incluida en Windows funciona; para ejecutar scripts .ps1 puede requerirse ajustar políticas de ejecución.

Comandos útiles (PowerShell)

1) Instalar dependencias (primera vez o después de clonar)

```powershell
cd "C:\Users\tatih\Downloads\Landing Page Design"
npm install
```

2) Ejecutar servidor de desarrollo (Vite)

```powershell
npm run dev
```

- Por defecto Vite muestra la URL local (por ejemplo http://localhost:5173 o http://localhost:3000).
- Si necesitas exponer en la red usa: `npm run dev -- --host` o configurar `vite`.

3) Generar build de producción

```powershell
npm run build
```

4) Previsualizar build de producción

```powershell
npm run preview
```

5) Linter (si quieres validar el código)

```powershell
npm run lint
```

Nota sobre ejecución de scripts PowerShell (.ps1)

Si necesitas ejecutar scripts `.ps1` y PowerShell bloquea la ejecución por políticas:

```powershell
# Ejecutar en PowerShell (como usuario, no necesariamente administrador)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# O, ejecutar un script puntual en bypass:
powershell -ExecutionPolicy Bypass -File .\setup-local.ps1
```

Dónde editar textos, colores y logo

- Textos y colores globales: `src/config/site-config.ts` (título, subtítulo, CTA, colores, footer, etc.)
- Componentes: `src/components/` (landing, map, indicators, footer, etc.)
- Logo canónico: `public/logo.png`

Hacer backup (ZIP) desde PowerShell

Ejecuta este comando desde la carpeta del proyecto para crear un ZIP en la carpeta padre:

```powershell
# desde la carpeta raíz del proyecto
Compress-Archive -Path .\* -DestinationPath ..\"Landing Page Design backup.zip" -Force
```

Commitear los cambios localmente (Git)

Si quieres guardar los cambios en Git localmente:

```powershell
git add .
git commit -m "Customize landing: centered logo, updated subtitle, removed citizen form"
# si quieres subir a remoto (origin) y está configurado:
# git push origin main
```

Notas finales y comprobaciones

- Si el servidor de desarrollo no arranca, revisa la consola para errores. Los más comunes: dependencias faltantes o problemas de tipado de TypeScript.
- Para problemas de tipado con `@types/react` instala:
  ```powershell
  npm i -D @types/react @types/react-dom
  ```

¿Quieres que haga alguno de estos pasos por ti ahora? Puedo:
- Ejecutar `npm install` y `npm run dev` y copiar la salida aquí.
- Crear el ZIP de backup ahora (lo hago a continuación si quieres).
- Hacer un commit local con mensajes automáticos y (opc.) push a un remoto si me das permiso.

---
Archivo generado automáticamente: RUNNING.md
