"use client";

import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const validThemes = ["light", "dark", "dorado", "turquoise", "turquoise-dark"];

export function ThemeFromUrl() {
  const { setTheme } = useTheme();
  const searchParams = useSearchParams();

  useEffect(() => {
    const themeParam = searchParams.get("theme");
    
    if (themeParam) {
      // Normalizar el nombre del tema (turquesa -> turquoise)
      let normalizedTheme = themeParam.toLowerCase();
      
      // Mapear variantes en español
      if (normalizedTheme === "turquesa") {
        normalizedTheme = "turquoise";
      } else if (normalizedTheme === "turquesa-dark" || normalizedTheme === "turquesa-oscuro") {
        normalizedTheme = "turquoise-dark";
      } else if (normalizedTheme === "claro") {
        normalizedTheme = "light";
      } else if (normalizedTheme === "oscuro") {
        normalizedTheme = "dark";
      } else if (normalizedTheme === "golden" || normalizedTheme === "oro") {
        normalizedTheme = "dorado";
      }
      
      // Aplicar tema si es válido
      if (validThemes.includes(normalizedTheme)) {
        setTheme(normalizedTheme);
      }
    }
  }, [searchParams, setTheme]);

  return null;
}
