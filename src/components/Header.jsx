import { motion } from "framer-motion";
import { Home, Menu, ShoppingBag, Store, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", path: "/", id: "home", icon: Home },
  { label: "Listing", path: "/listing", id: "listing", icon: Store },
  { label: "Cart", path: "/cart", id: "cart", icon: ShoppingBag },
];

export default function Header({ route, navigate, cartCount }) {
  const [open, setOpen] = useState(false);

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-copper/15 bg-jasmine">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => go("/")}
          className="group flex items-center gap-3 text-left"
          aria-label="Go to home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-basalt text-sm font-black tracking-[0.16em] text-copper-light shadow-nav">
            RA
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.18em] text-copper-dark">
              R Ayurveda
            </span>
            <span className="block text-xs font-semibold text-basalt/58">
              Copper rituals, refined
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = route === link.id;
            return (
              <button
                key={link.id}
                onClick={() => go(link.path)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? "text-basalt"
                    : "text-basalt/62 hover:bg-copper/10 hover:text-basalt"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full bg-copper/15"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <Icon className="relative h-4 w-4" />
                <span className="relative">{link.label}</span>
                {link.id === "cart" && cartCount > 0 && (
                  <span className="relative rounded-full bg-temple-red px-2 py-0.5 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-copper/20 bg-white/50 text-basalt md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-copper/10 px-4 pb-4 md:hidden"
        >
          <div className="grid gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => go(link.path)}
                  className="flex items-center justify-between rounded-2xl bg-white/55 px-4 py-3 text-sm font-bold text-basalt"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </span>
                  {link.id === "cart" && cartCount > 0 && (
                    <span className="rounded-full bg-temple-red px-2 py-0.5 text-xs text-white">
                      {cartCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
