import {
  CodeXml,
  Database,
  GitBranch,
  Palette,
  Server,
  Wrench,
} from "lucide-react";
import type { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    icon: CodeXml,
    title: "Frontend",
    japanese: "フロントエンド",
    techs: ["React", "TypeScript", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    japanese: "バックエンド",
    techs: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    japanese: "データベース",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Prisma"],
  },
  {
    icon: Palette,
    title: "Design",
    japanese: "デザイン",
    techs: ["Figma", "CSS", "Responsive Design", "UI Components"],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    japanese: "デブオプス",
    techs: ["Git", "GitHub Actions", "Docker", "CI/CD"],
  },
  {
    icon: Wrench,
    title: "Tools",
    japanese: "ツール",
    techs: ["VS Code", "Postman", "Biome", "pnpm", "Vite"],
  },
];