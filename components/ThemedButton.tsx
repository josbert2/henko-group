"use client";
import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Palette, Check } from "lucide-react";

const themes = [
  { name: "light", label: "Light", icon: "☀️" },
  { name: "dark", label: "Dark", icon: "🌙" },
  { name: "dorado", label: "Dorado", icon: "✨" },
  { name: "turquoise", label: "Turquoise", icon: "🌊" },
  { name: "turquoise-dark", label: "Turquoise Dark", icon: "🌊" },
];

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showDropdown]);

  if (!mounted) {
    return <PhSunBold />;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
        aria-label="Change theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2">
            <div className="text-xs font-semibold text-muted-foreground px-2 py-1 mb-1">
              Select Theme
            </div>
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setShowDropdown(false);
                }}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-md
                  hover:bg-accent/10 transition-colors text-left
                  ${theme === t.name ? "bg-accent/20" : ""}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{t.icon}</span>
                  <span className="text-sm font-medium">{t.label}</span>
                </div>
                {theme === t.name && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
