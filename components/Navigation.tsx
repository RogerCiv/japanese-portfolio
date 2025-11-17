"use client";
import Link from "next/link";
import ProfileImage from "./Shared/ProfileImage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#works", label: "WORKS" },
  { href: "#contact", label: "CONTACT" },
  { href: "/blog", label: "BLOG" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && activeHash === href;
    }
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/50">
       <div className="pattern-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Profile */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <ProfileImage size="small" />
            <span className="text-japanese text-xl font-bold text-primary hidden sm:block">
              美は、シンプルさの中に
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-block group"
              >
                <span
                  className={`text-sm font-medium hover:text-accent transition-colors duration-300 ${
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 240 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-80"
                    >
                      <title>Active Indicator</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M67.2 79.3L120 43L172.8 79.3L120 115.6L67.2 79.3ZM67.2 160.7L120 124.4L172.8 160.7L120 197L67.2 160.7ZM62.8 83.7L10 120L62.8 156.3L115.6 120L62.8 83.7ZM124.4 120L177.2 83.7L230 120L177.2 156.3L124.4 120Z"
                        fill="currentColor"
                        className="text-accent"
                      />
                    </svg>
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
          type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Toggle menu</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-accent/30">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium hover:text-accent transition-colors duration-300 py-2 ${
                    isActive(item.href) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="ml-2 inline-block">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 240 240"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline opacity-80"
                      >
                        <title>Active Indicator</title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M67.2 79.3L120 43L172.8 79.3L120 115.6L67.2 79.3ZM67.2 160.7L120 124.4L172.8 160.7L120 197L67.2 160.7ZM62.8 83.7L10 120L62.8 156.3L115.6 120L62.8 83.7ZM124.4 120L177.2 83.7L230 120L177.2 156.3L124.4 120Z"
                          fill="currentColor"
                          className="text-accent"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}