import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 backdrop-blur-sm">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
        className="h-8 w-8 rounded-full"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
        className="h-8 w-8 rounded-full"
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === "auto" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("auto")}
        className="h-8 w-8 rounded-full"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
}