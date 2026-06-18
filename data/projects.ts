import cronicaGodaImage from "@/public/images/projects/cronica-goda.avif";
import diversiaImage from "@/public/images/projects/espacio-diversia.webp";
import illustratorImage from "@/public/images/projects/ilustradora.avif";
import nokenImage from "@/public/images/projects/noken.avif";
import nokenMasterImage from "@/public/images/projects/noken-master.avif";
import nokenStudyImage from "@/public/images/projects/noken-study.avif";
import portfolioImage from "@/public/images/projects/portfolio1.avif";
import astroPortfolioImage from "@/public/images/projects/portfolio2.avif";
import recursosWebImage from "@/public/images/projects/recursos.avif";
import rentalImage from "@/public/images/projects/rental.avif";
import reviewForgeImage from "@/public/images/projects/review-forge.avif";
import sassBlogImage from "@/public/images/projects/saas.avif";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Espacio Diversia",
    japanese: "ディベルシア空間",
    description:
      "Sitio web corporativo especializado en neuroarquitectura y diseño biofílico.",
    image: diversiaImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Turso", "Cloudflare", "Vercel"],
    github: "#",
    web: "https://www.espaciodiversia.es",
  },
  {
    title: "Noken Master",
    japanese: "日本語能力試験マスター",
    description:
      "Aplicación de estudio de vocabulario Noken para el examen JLPT.",
    image: nokenMasterImage,
    tags: ["NextJS", "TailwindCSS", "PWA"],
    github: "#",
    web: "https://noken-master.vercel.app",
  },
  {
    title: "Recursos Web",
    japanese: "開発者リソース",
    description:
      "Directorio curado de recursos y herramientas para desarrolladores web.",
    image: recursosWebImage,
    tags: ["Astro", "TailwindCSS"],
    github: "https://github.com/RogerCiv/web-resources",
    web: "https://web-recursos.vercel.app",
  },
  {
    title: "Crónica Goda",
    japanese: "ゴート年代記",
    description:
      "Web dedicada a la historia visigoda, con entradas detalladas de todos los reyes, desde Atanarico hasta Rodrigo.",
    image: cronicaGodaImage,
    tags: ["Astro", "TailwindCSS", "PWA", "View Transitions", "TypeScript", "Netlify", "NotebookLM"],
    github: "#",
    web: "https://cronica-goda.netlify.app",
  },
  {
    title: "Noken Study",
    japanese: "日本語学習",
    description: "Aplicación de estudio de vocabulario para el examen JLPT.",
    image: nokenStudyImage,
    tags: ["NextJS", "TailwindCSS"],
    github: "#",
    web: "https://noken-study.vercel.app",
  },
  {
    title: "Review Forge",
    japanese: "レビューサイト",
    description:
      "Plataforma de reseñas de productos con sistema de puntuación y comentarios.",
    image: reviewForgeImage,
    tags: [
      "NextJS",
      "TailwindCSS",
      "NestJS",
      "Prisma",
      "Neon",
      "Vercel",
      "Render",
    ],
    github: "#",
    web: "https://reviewforge-omega.vercel.app",
  },
  {
    title: "Noken Vocabulary",
    japanese: "日本語学習",
    description: "Aplicación de estudio de vocabulario para el examen JLPT.",
    image: nokenImage,
    tags: ["React", "TailwindCSS", "Supabase", "React-router"],
    github: "#",
    web: "https://noken-vocabulary.vercel.app",
  },
  {
    title: "Illustrator Amelia",
    japanese: "イラストポートフォリオ",
    description: "Portfolio minimalista y vibrante para ilustradora freelance.",
    image: illustratorImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    web: "https://ilustradora.netlify.app",
  },
  {
    title: "Roger Civ Dev",
    japanese: "ポートフォリオ (Astro)",
    description: "Portfolio personal rápido y optimizado construido con Astro.",
    image: astroPortfolioImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    web: "https://rogercivdev2.vercel.app/",
  },
  {
    title: "Portfolio Nextjs",
    japanese: "ポートフォリオ",
    description: "Portfolio personal moderno y responsive.",
    image: portfolioImage,
    tags: ["NextJS", "TailwindCSS"],
    github: "#",
    web: "https://rogerciv.vercel.app",
  },
  {
    title: "SaaS Blog",
    japanese: "ブログプラットフォーム",
    description:
      "Plataforma SaaS de blogging con autenticación y planes de precios.",
    image: sassBlogImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Stripe", "Supabase"],
    github: "#",
    web: "https://saas-blog-nextjs.vercel.app",
  },

  {
    title: "Premium Rental Cars",
    japanese: "高級車レンタル",
    description: "Servicio de alquiler de coches premium con gestión de flota.",
    image: rentalImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Stripe", "Uploadthing"],
    github: "#",
    web: "https://rental-cars-test.vercel.app",
  },
];
