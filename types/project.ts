import type { StaticImageData } from "next/image";

export interface Project {
  title: string;
  japanese: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  demo: string;
}
