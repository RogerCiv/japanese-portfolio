# 🎌 Portfolio con Estética Japonesa

Portfolio personal moderno con diseño inspirado en la estética japonesa, construido con Next.js 15, TypeScript y Tailwind CSS. Incluye un chatbot asistente impulsado por IA para responder preguntas sobre habilidades, proyectos y experiencia.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)
![Groq](https://img.shields.io/badge/Groq-AI-orange?style=flat)

## ✨ Características

- 🎨 **Diseño Japonés**: Elementos visuales tradicionales japoneses (patrones wabi-sabi, tipografía Noto)
- 🤖 **Asistente IA**: Chatbot interactivo con Groq API (Llama 3.3 70B) y respuestas en streaming
- 📱 **Responsive**: Diseño mobile-first que funciona en todos los dispositivos
- ⚡ **Alto Rendimiento**: Next.js 15 con App Router y React Server Components
- 🎯 **Optimizado SEO**: Meta tags, Open Graph y estructura semántica
- 🎭 **Animaciones**: Transiciones suaves y efectos visuales modernos
- 📧 **Formulario de Contacto**: Integración lista para servicios de email

## 🚀 Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router + React Compiler)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **IA**: [Groq SDK](https://groq.com/) con Llama 3.3 70B Versatile
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Linting**: [Biome](https://biomejs.dev/)
- **Fuentes**: Noto Sans JP + Noto Serif JP (Google Fonts)

## 📦 Instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/RogerCiv/japanese-portfolio.git
cd japanese-portfolio
```

2. **Instala las dependencias**:
```bash
pnpm install
```

3. **Configura las variables de entorno**:

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Groq API Key (requerido para el chatbot IA)
GROQ_API_KEY=tu_api_key_de_groq_aqui
```

> **⚠️ Importante**: Nunca subas tu archivo `.env.local` al repositorio. Ya está incluido en `.gitignore`.

4. **Inicia el servidor de desarrollo**:
```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔑 Obtener API Key de Groq

1. Visita [console.groq.com](https://console.groq.com)
2. Crea una cuenta o inicia sesión
3. Navega a la sección de API Keys
4. Genera una nueva API key
5. Cópiala y pégala en tu archivo `.env.local`

Groq ofrece un tier gratuito generoso perfecto para desarrollo y proyectos personales.

## 🛠️ Scripts Disponibles

```bash
# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Servidor de producción
pnpm start

# Lint con Biome
pnpm lint

# Format con Biome
pnpm format
```

## 📁 Estructura del Proyecto

```
japanese-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   └── api/                 # API Routes
│       └── chat/            # Endpoint del chatbot
│           └── route.ts
├── components/              # Componentes React
│   ├── AIDrawer.tsx         # Drawer del chatbot IA
│   ├── About.tsx            # Sección Sobre mí
│   ├── Contact.tsx          # Formulario de contacto
│   ├── Experience.tsx       # Experiencia profesional
│   ├── Footer.tsx           # Pie de página
│   ├── Hero.tsx             # Sección hero
│   ├── Navigation.tsx       # Navegación principal
│   ├── Skills.tsx           # Grid de habilidades
│   ├── TimelineSection.tsx  # Timeline reutilizable
│   ├── Works.tsx            # Proyectos destacados
│   └── Shared/
│       └── ProfileImage.tsx # Imagen de perfil
├── data/                    # Datos estáticos
│   ├── experience.ts        # Experiencia y educación
│   ├── portfolio-context.ts # Contexto para el asistente IA
│   ├── projects.ts          # Datos de proyectos
│   ├── skills.ts            # Habilidades técnicas
│   └── socials.ts           # Enlaces sociales
├── public/                  # Assets estáticos
│   └── images/              # Imágenes optimizadas
│       ├── home/
│       ├── patterns/        # Patrones japoneses
│       ├── projects/        # Screenshots de proyectos
│       └── socials/
└── types/                   # TypeScript types
    └── index.ts
```

## 🎨 Personalización

### Información Personal

Actualiza tu información en los siguientes archivos:

- **Experiencia y Educación**: `data/experience.ts`
- **Proyectos**: `data/projects.ts`
- **Habilidades**: `data/skills.ts`
- **Contexto del Asistente IA**: `data/portfolio-context.ts`
- **Redes Sociales**: `data/socials.ts`

### Colores del Tema

Modifica los colores en:
- `app/globals.css` - Variables CSS personalizadas

### Patrones Japoneses

Los patrones de fondo se pueden personalizar en `app/globals.css`:
- `.pattern-bg-waves` - Ondas (seigaiha)
- `.pattern-bg-uroko` - Escamas (uroko)
- `.pattern-bg-kumo` - Nubes (kumo)

## 🤖 Chatbot Asistente IA

El chatbot usa el modelo Llama 3.3 70B de Groq con las siguientes características:

- **Modelo**: `llama-3.3-70b-versatile`
- **Streaming**: Respuestas en tiempo real
- **Contexto personalizado**: Conocimiento sobre tu portfolio
- **Features**:
  - Historial de conversación
  - Detección y formato de URLs
  - Manejo de errores con AbortController
  - Límite de tokens optimizado

**Personalizar el asistente**:
1. Edita `data/portfolio-context.ts` para actualizar el conocimiento base
2. Modifica el prompt del sistema en `app/api/chat/route.ts`
3. Ajusta los parámetros del modelo (temperatura, max_tokens, etc.)

## 🌐 Deployment

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Añade las variables de entorno en el dashboard de Vercel
4. Deploy automático

### Otras Plataformas

El proyecto puede desplegarse en cualquier plataforma compatible con Next.js:
- **Netlify**: Requiere configuración para API routes
- **Railway**: Soporte completo
- **AWS Amplify**: Compatible
- **Docker**: Puede containerizarse

**Variables de entorno requeridas en producción**:
```env
GROQ_API_KEY=tu_api_key_aqui
```

## 🎯 Características Técnicas

- **React Compiler**: Habilitado para optimización automática
- **Imágenes Optimizadas**: Next.js Image con formato AVIF
- **Código Limpio**: Linting con Biome
- **TypeScript Strict**: Tipos estrictos para mayor seguridad
- **Performance**: Lighthouse score optimizado
- **Accesibilidad**: Componentes accesibles (a11y)

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**Roger Garcia**

- GitHub: [@RogerCiv](https://github.com/RogerCiv)
- Email: rogercivdev@gmail.com
- Portfolio: [rogerciv.vercel.app](https://rogerciv.vercel.app)

## 🙏 Agradecimientos

- Inspiración en el diseño tradicional japonés (wabi-sabi)
- Next.js team por el increíble framework
- Groq por las capacidades de IA gratuitas

---

Hecho con ❤️ y 🏯 por RogerCiv
