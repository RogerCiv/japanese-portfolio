import { StaticImageData } from "next/image";

export interface SocialLink {
  image: StaticImageData;
  label: string;
  href: string;
}
