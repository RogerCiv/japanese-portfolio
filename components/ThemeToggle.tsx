"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Evita el desajuste de hidratación (hydration mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                type="button"
                className="p-2 rounded-full bg-accent/10 text-accent opacity-50"
                aria-label="Cargando tema..."
                disabled
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors duration-300"
            aria-label="Alternar modo oscuro"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
