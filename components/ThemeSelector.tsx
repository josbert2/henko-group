"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const themes = [
  { name: "light", label: "Light", color: "#FFFFFF", textColor: "#000000" },
  { name: "dark", label: "Dark", color: "#0A0E1A", textColor: "#FFFFFF" },
  { name: "turquoise", label: "Turquoise", color: "#40E0D0", textColor: "#FFFFFF" },
  { name: "turquoise-dark", label: "Turquoise Dark", color: "#0D2F2B", textColor: "#40E0D0" },
];

export function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 p-4 bg-card rounded-lg border">
      <h3 className="text-sm font-semibold mb-2">Selecciona un tema</h3>
      <div className="grid grid-cols-2 gap-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`
              relative flex flex-col items-center gap-2 p-3 rounded-md border-2 transition-all
              hover:border-primary/50
              ${theme === t.name ? "border-primary" : "border-border"}
            `}
          >
            <div
              className="w-full h-12 rounded-md shadow-sm"
              style={{ backgroundColor: t.color }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-xs font-medium"
                style={{ color: t.textColor }}
              >
                Aa
              </div>
            </div>
            <span className="text-xs font-medium">{t.label}</span>
            {theme === t.name && (
              <Check className="absolute top-1 right-1 w-4 h-4 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
