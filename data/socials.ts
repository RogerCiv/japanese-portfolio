import githubImage from "@/public/images/socials/github-icon.avif";
import linkedinImage from "@/public/images/socials/linkedin-icon.avif";
import instagramImage from "@/public/images/socials/instagram-icon.avif"
import { SocialLink } from "@/types/socialLink";

export const socialLinks: SocialLink[] = [
  {
    image: githubImage,
    label: "GitHub",
    href: "https://github.com/tuusuario",
  },
  {
    image: linkedinImage,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tuusuario",
  },
  {
    image: instagramImage,
    label: "Instagram",
    href: "https://instagram.com/tuusuario",
  },
];


