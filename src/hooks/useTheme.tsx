import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("shyara-theme") as Theme;
      return stored || "light";
    }
    return "light";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    
    localStorage.setItem("shyara-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setIsTransitioning(true);
    
    // Add transition class for smooth color changes
    document.documentElement.classList.add("theme-transitioning");
    
    // Small delay for the transition effect
    requestAnimationFrame(() => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
      
      // Remove transition class after animation completes
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transitioning");
        setIsTransitioning(false);
      }, 400);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
