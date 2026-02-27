// Server Component — no "use client"
import Link from "next/link";
import NavLinks from "./NavLinks";
import ProfileImage from "./Shared/ProfileImage";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/50">
      <div className="pattern-bg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo / Profile — estático, renderizado en servidor */}
          <Link
            href="/#hero"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <ProfileImage size="small" />
            <span className="text-japanese text-xl font-bold text-primary hidden sm:block relative w-96 overflow-hidden">
              <span className="group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-500 inline-block">
                美は、シンプルさの中に
              </span>
              <span className="absolute inset-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 inline-block whitespace-nowrap">
                La belleza está en la simplicidad
              </span>
            </span>
          </Link>

          {/* NavLinks y ThemeToggle */}
          <div className="flex items-center gap-4 md:gap-5">
            <NavLinks />
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
