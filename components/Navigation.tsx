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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5ED]/95 backdrop-blur-sm border-b-2 border-[#B94A48]/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <ProfileImage size="small" />
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative inline-block group"
            >
              <span
                className={`text-sm font-medium hover:text-[#B94A48] transition-colors ${
                  isActive(item.href) ? "text-[#B94A48]" : ""
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
                      fill="#B94A48"
                    />
                  </svg>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}