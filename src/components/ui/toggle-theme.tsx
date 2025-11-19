import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <span className="text-xl">☀️</span>
      ) : (
        <span className="text-xl">🌙</span>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}