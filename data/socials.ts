import githubImage from "@/public/images/socials/github-icon.avif";
import instagramImage from "@/public/images/socials/instagram-icon.avif";
import linkedinImage from "@/public/images/socials/linkedin-icon.avif";
import type { SocialLink } from "@/types/socialLink";

export const socialLinks: SocialLink[] = [
  {
    image: githubImage,
    label: "GitHub",
    href: "https://github.com/rogerciv",
  },
  {
    image: linkedinImage,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rogerciv",
  },
  {
    image: instagramImage,
    label: "Instagram",
    href: "https://instagram.com/tuusuario",
  },
];
