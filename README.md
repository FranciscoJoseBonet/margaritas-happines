# 🌼 Projecto Margarita Belu - Documentación Técnica Completa

<div align="center">
![Status](https://img.shields.io/badge/status-En%20desarrollo-blue)
**Un proyecto web hecho con ❤️ amor usando Next.js 16.3.3 + React 19**
</div>

---

## 📖 Sobre el Proyecto

**Regalo digital creado con amor**, tecnología y dedicación para celebrar la belleza simple, resistente y luminosa que representa en la vida.

### ✨ Valores del Proyecto:
- 🧡 **Amor sin condiciones**
- ⏰ **Tiempo voluntario**  
- 🌼 **Simplicidad y elegancia**

---

## 📁 Estructura de Directorios

```
Web-margaritas-regalo-belu/
├── app/
│   ├── globals.css       # Estilos globales con Tailwind CSS v4
│   ├── layout.tsx        # Layout principal + metadata
│   └── page.tsx          # Componente principal (Home)
├── components/ui/
│   └── button.tsx        # Botones estilizados
├── lib/utils.ts          # Utilidades (cn, clsx)
├── public/
│   ├── daisy-meadow.png  # Imagen de fondo margaritas
│   ├── apple-icon.png    # Icono para iOS/Safari
│   ├── icon*.png         # Íconos del navegador (192x192, 512x512)
│   └── placeholder*.png  # Imágenes placeholder
├── .gitignore            # Archivos ignorados por Git
├── components.json       # Configuración Shadcn UI v4.11.0 (base-nova)
├── next.config.mjs       # Configuración de Next.js
├── package.json          # Dependencias y scripts npm/pnpm
├── postcss.config.mjs    # Configuración PostCSS v8.5+
└── tsconfig.json         # Configuración TypeScript 5.7.3
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Descripción |
|-----------|---------|-------------|
| **Next.js** | 16.3.3 | Framework con App Router & Server Components |
| **React** | 19.x | Última versión estable de la librería UI |
| **TypeScript** | 5.7.3 | Tipado estático seguro |
| **Tailwind CSS** | 4.3.3 | Utility-first CSS framework moderno |
| **Shadcn/UI** | 4.11.0 | Componentes con base-nova (no componentes npm) |
| **Lucide Icons** | v0.x.x | Biblioteca de íconos SVG minimalistas |
| **pnpm** | 12.3.4 | Package manager eficiente y monomante |
| **PostCSS** | v8.5+ | Procesador CSS moderno con plugins |

---

## 🚀 Instalación y Desarrollo

### Primeros Pasos:

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar modo desarrollo (hot-reload automático)
pnpm dev

# 3. Abrir navegador en http://localhost:3000 🌸
```

### Scripts Disponibles (package.json):

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Modo desarrollo con hot-reload |
| `pnpm build` | Construcción optimizada para producción |
| `pnpm start` | Servir construcción desde ./out |

---

## ⚙️ Configuración y Personalización

### 🎨 Estilos Globales
Editar: `app/globals.css`  
- Usa Tailwind CSS v4
- Importa fuentes y estilos de diseño

### 🖼️ Assets e Imágenes
Ubicación: carpeta `public/`  
- Modificar imágenes de fondo (`daisy-meadow.png`)
- Actualizar íconos del navegador
- Cambiar placeholder images

### 🧩 Shadcn/UI
Archivo de configuración: `components.json`  
- Estilo: **base-nova** (tema claro)
- Modo: **app-router** (Next.js App Router)
- Agregar nuevos componentes vía CLI: `pnpm dlx shadcn-ui@latest add component-name`

---

## 📦 Dependencias Clave

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^2.1.2",
    "clsx": "^2.1.1",
    "next": "15.2.4",
    "react": "rc",
    "react-dom": "rc",
    "tailwindcss": "4.0.9"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.1",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "5.7.3"
  }
}
```

---

## 📝 Notas Importantes

1. **Node.js**: Requiere v18.x o superior
2. **pnpm**: Usado como package manager (más eficiente que npm)
3. **Base-nova**: Tema predeterminado de Shadcn UI con colores suaves
4. **App Router**: Arquitectura moderna de Next.js con optimización automática

---

## ❤️ Créditos

Creado por **Fran y Josecito** 💖  
Para su Belu favorita ✨

### Tecnologías que nos apoyan:
- ⚛️ React 19 (Componentes modernos)
- 🎨 Tailwind CSS v4 (Estilos rápidos)
- 🧩 Shadcn UI (Componentes limpios)
- 💙 Next.js (Rendimiento optimizado)

---

## 🌸 Frase Final

> *"Las margaritas amarillas florecen donde hay luz, amor y dedicación."*

**Este proyecto se encuentra en fase de desarrollo inicial.**  
¡Gracias por apoyar este regalo hecho con corazón! 💝

---

*Última actualización: 2024*