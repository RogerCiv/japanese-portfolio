import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export interface TimelineItem {
  title: string;
  sub_title: string;
  years: string;
  details: string;
  japanese?: string;
}

export interface Project {
  title: string;
  japanese: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  demo: string;
}

export interface Skill {
  icon: LucideIcon;
  title: string;
  japanese: string;
  techs: string[];
}

export interface SocialLink {
  image: StaticImageData;
  label: string;
  href: string;
}
