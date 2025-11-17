import {
  CodeXml,
  Database,
  GitBranch,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";
import type { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    icon: CodeXml,
    title: "Frontend",
    japanese: "フロントエンド",
    techs: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend",
    japanese: "バックエンド",
    techs: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    japanese: "データベース",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    icon: Layout,
    title: "UI/UX",
    japanese: "デザイン",
    techs: ["Figma", "Responsive", "A11y", "Animation"],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    japanese: "デブオプス",
    techs: ["Git", "Docker", "CI/CD", "AWS"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    japanese: "モバイル",
    techs: ["React Native", "PWA", "Responsive", "Touch UI"],
  },
];
