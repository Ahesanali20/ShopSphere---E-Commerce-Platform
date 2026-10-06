import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight"
          aria-label="ShopSphere home"
        >
          <ShoppingBag className="size-5" aria-hidden="true" />
          <span>ShopSphere</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" size="lg">
            Log in
          </Button>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon-lg"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t px-4 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button className="mt-2 sm:hidden" size="lg">
              Log in
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
