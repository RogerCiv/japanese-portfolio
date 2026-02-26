"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: "#hero", label: "HOME" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#skills", label: "SKILLS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#contact", label: "CONTACT" },
];

// Indicador SVG de sección activa (reutilizable)
function ActiveIndicator({ size = 19 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
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
    );
}

export default function NavLinks() {
    const [activeHash, setActiveHash] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const hash = window.location.hash || "#hero";
        setActiveHash(hash);

        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#hero");
        };

        const handleScroll = () => {
            const sections = navItems
                .map((item) => document.querySelector(item.href))
                .filter(Boolean);

            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 50;

            if (isAtBottom) {
                setActiveHash((prev) => (prev !== "#contact" ? "#contact" : prev));
                return;
            }

            let currentSection = "#hero";
            for (const section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = `#${section.id}`;
                    }
                }
            }
            setActiveHash((prev) =>
                prev !== currentSection ? currentSection : prev,
            );
        };

        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTo = (href: string) => {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", href);
            setActiveHash(href);
        }
    };

    const isActive = (href: string) => activeHash === href;

    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="relative inline-block group"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollTo(item.href);
                        }}
                    >
                        <span
                            className={`text-sm font-medium hover:text-accent transition-colors duration-300 ${isActive(item.href) ? "text-accent" : "text-foreground"
                                }`}
                        >
                            {item.label}
                        </span>
                        {isActive(item.href) && (
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                                <ActiveIndicator size={19} />
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
                aria-expanded={isMobileMenuOpen}
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
                        d={
                            isMobileMenuOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                        }
                    />
                </svg>
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 md:hidden pb-4 pt-2 border-t border-accent/30 bg-background/95 backdrop-blur-sm">
                    <div className="flex flex-col space-y-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(item.href);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`text-sm font-medium hover:text-accent transition-colors duration-300 py-2 ${isActive(item.href) ? "text-accent" : "text-foreground"
                                    }`}
                            >
                                {item.label}
                                {isActive(item.href) && (
                                    <span className="ml-2 inline-block">
                                        <ActiveIndicator size={12} />
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
