import diversiaImage from "@/public/images/projects/diversia.avif";
import nokenStudyImage from "@/public/images/projects/noken-study.avif";
import illustratorImage from "@/public/images/projects/ilustradora.avif";
import nokenImage from "@/public/images/projects/noken.avif";
import portfolioImage from "@/public/images/projects/portfolio1.avif";
import rentalImage from "@/public/images/projects/rental.avif";
import sassBlogImage from "@/public/images/projects/saas.avif";
import recursosWebImage from "@/public/images/projects/recursos.avif";
import astroPortfolioImage from "@/public/images/projects/portfolio2.avif";
import type { Project } from "@/types/project";

export const projects: Project[] = [

  {
    title: "Diversia Interiorismo",
    japanese: "インテリアデザイン",
    description: "Sitio web corporativo especializado en neuroarquitectura y diseño biofílico.",
    image: diversiaImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Turso", "Cloudflare", "Vercel"],
    github: "#",
    demo: "https://diversiainteriorismo.com",
  },
  {
    title: "Recursos Web",
    japanese: "開発者リソース",
    description: "Directorio curado de recursos y herramientas para desarrolladores web.",
    image: recursosWebImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    demo: "https://web-recursos.vercel.app",
  },
  {
    title: "Noken Study",
    japanese: "日本語学習",
    description: "Aplicación de estudio de vocabulario para el examen JLPT.",
    image: nokenStudyImage,
    tags: ["NextJS", "TailwindCSS"],
    github: "#",
    demo: "https://noken-study.vercel.app",
  },
  {
    title: "Noken Vocabulary",
    japanese: "日本語学習",
    description: "Aplicación de estudio de vocabulario para el examen JLPT.",
    image: nokenImage,
    tags: ["React", "TailwindCSS", "Supabase", "React-router"],
    github: "#",
    demo: "https://noken-vocabulary.vercel.app",
  },
  {
    title: "Illustrator Amelia",
    japanese: "イラストポートフォリオ",
    description: "Portfolio minimalista y vibrante para ilustradora freelance.",
    image: illustratorImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    demo: "https://ilustradora.netlify.app",
  },
    {
    title: "Roger Civ Dev",
    japanese: "ポートフォリオ (Astro)",
    description: "Portfolio personal rápido y optimizado construido con Astro.",
    image: astroPortfolioImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    demo: "https://rogercivdev.vercel.app/",
  },
    {
    title: "Portfolio Nextjs",
    japanese: "ポートフォリオ",
    description: "Portfolio personal moderno y responsive.",
    image: portfolioImage,
    tags: ["NextJS", "TailwindCSS"],
    github: "#",
    demo: "https://rogerciv.vercel.app",
  },
  {
    title: "SaaS Blog",
    japanese: "ブログプラットフォーム",
    description: "Plataforma SaaS de blogging con autenticación y planes de precios.",
    image: sassBlogImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Stripe", "Supabase"],
    github: "#",
    demo: "https://saas-blog-nextjs.vercel.app",
  },

  {
    title: "Premium Rental Cars",
    japanese: "高級車レンタル",
    description: "Servicio de alquiler de coches premium con gestión de flota.",
    image: rentalImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Stripe", "Uploadthing"],
    github: "#",
    demo: "https://rental-cars-test.vercel.app",
  },
];
