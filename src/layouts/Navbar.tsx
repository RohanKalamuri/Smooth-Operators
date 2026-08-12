import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/Button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
];

export function Navbar({ onMenuToggle }: { onMenuToggle?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    onMenuToggle?.();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" />
          </span>
          <span className="text-lg tracking-tight">Workpal</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-fast",
                  isActive
                    ? "text-text-primary bg-bg-elevated"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleMobile}
          className="flex h-9 w-9 items-center justify-center rounded-md text-text-secondary hover:bg-bg-elevated md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-border transition-all duration-base ease-smooth md:hidden",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  isActive
                    ? "text-text-primary bg-bg-elevated"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
            <Button variant="ghost" size="sm" fullWidth>Sign in</Button>
            <Button variant="primary" size="sm" fullWidth>Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}