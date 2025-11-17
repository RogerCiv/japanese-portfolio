import diversiaImage from "@/public/images/projects/diversia.avif";
import illustratorImage from "@/public/images/projects/ilustradora.avif";
import nokenImage from "@/public/images/projects/noken.avif";
import portfolioImage from "@/public/images/projects/portfolio.avif";
import rentalImage from "@/public/images/projects/rental-cars.avif";
import sassBlogImage from "@/public/images/projects/saas-blog.avif";
import recursosWebImage from "@/public/images/projects/web-resources.avif";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Diversia Interiorismo",
    japanese: "Eコマース",
    description: "Plataforma completa con carrito, pagos y panel admin",
    image: diversiaImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Turso", "Cloudflare", "Vercel"],
    github: "#",
    demo: "https://diversiainteriorismo.com",
  },
  {
    title: "Recursos Web",
    japanese: "タスク管理",
    description: "Gestión de tareas con drag & drop y tiempo real",
    image: recursosWebImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    demo: "https://web-recursos.vercel.app",
  },
  {
    title: "Noken Vocabulary",
    japanese: "天気予報",
    description: "Dashboard con pronósticos y mapas interactivos",
    image: nokenImage,
    tags: ["React", "TailwindCSS", "Supabase", "React-router"],
    github: "#",
    demo: "https://noken-vocabulary.vercel.app",
  },
  {
    title: "Illustrator Amelia",
    japanese: "ウェブサイト",
    description: "Portafolio creativo para ilustradora profesional",
    image: illustratorImage,
    tags: ["Astro", "TailwindCSS"],
    github: "#",
    demo: "https://illustrator-web.netlify.app",
  },
  {
    title: "SASS Blog",
    japanese: "ブログプラットフォーム",
    description: "Plataforma de blogging con suscripciones premium",
    image: sassBlogImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Stripe", "Supabase"],
    github: "#",
    demo: "https://saas-blog-nextjs.vercel.app",
  },
  {
    title: "Portfolio Nextjs",
    japanese: "ポートフォリオ",
    description: "Portfolio personal moderno y responsive",
    image: portfolioImage,
    tags: ["NextJS", "TailwindCSS"],
    github: "#",
    demo: "https://rogerciv.vercel.app",
  },
  {
    title: "Rental Cars",
    japanese: "レンタカー",
    description: "Sistema de alquiler de vehículos con pagos integrados",
    image: rentalImage,
    tags: ["NextJS", "TailwindCSS", "Prisma", "Stripe", "Uploadthing"],
    github: "#",
    demo: "https://rental-cars-test.vercel.app",
  },
];
