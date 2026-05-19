import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Collections", path: "/listing", id: "listing" },
  { label: "Rituals", path: "/rituals", id: "rituals" },
];

export default function Header({ route, navigate, cartCount }) {
  const [open, setOpen] = useState(false);

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-basalt/10 bg-jasmine">
      <div className="relative mx-auto grid h-[52px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-10 lg:px-16">
        <button
          onClick={() => go("/")}
          className="justify-self-center font-display text-[24px] font-medium uppercase leading-none tracking-[0.035em] text-basalt sm:text-[28px]"
          aria-label="Go to home"
        >
          R Ayurveda
        </button>

        <nav className="col-start-1 row-start-1 hidden items-center gap-7 md:flex">
          {links.map((link) => {
            return (
              <button
                key={link.id}
                onClick={() => go(link.path)}
                className="relative py-2 font-body text-[10px] font-medium tracking-[0.05em] text-basalt/72 transition hover:text-basalt"
              >
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="col-start-3 row-start-1 hidden items-center justify-end md:flex">
          <button
            onClick={() => go("/cart")}
            className="relative text-basalt/70 transition hover:text-basalt"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-3.5 w-3.5 place-items-center bg-temple-red font-body text-[8px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <motion.button
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.94 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="col-start-3 row-start-1 grid h-9 w-9 place-items-center justify-self-end border border-copper/20 bg-white/50 text-basalt md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-copper/10 px-4 pb-4 md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="grid gap-2 pt-3"
            >
              {links.map((link) => {
                return (
                  <motion.button
                    key={link.id}
                    variants={{
                      open: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" },
                      closed: { opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" },
                    }}
                    onClick={() => go(link.path)}
                    className="flex items-center justify-between bg-white/55 px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-basalt"
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.button
                variants={{
                  open: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" },
                  closed: { opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" },
                }}
                onClick={() => go("/cart")}
                className="flex items-center justify-between bg-basalt px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-jasmine"
              >
                Cart
                {cartCount > 0 && <span>{cartCount}</span>}
              </motion.button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
