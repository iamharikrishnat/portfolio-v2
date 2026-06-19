"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/lib/site";
import LocalTime from "@/components/ui/LocalTime";
import Magnetic from "@/components/ui/Magnetic";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        {/* Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight"
          aria-label={`${site.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong text-xs font-semibold transition-colors group-hover:border-accent group-hover:text-accent">
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm text-mist transition-colors hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          <span className="hidden text-xs text-mist lg:inline">
            <LocalTime />
          </span>
          <Magnetic className="hidden md:block">
            <a
              href="#contact"
              data-cursor="Say hi"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s talk
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </a>
          </Magnetic>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-bone transition-all duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-bone transition-all duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="mt-28 flex flex-col gap-2 px-6"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-line py-5 font-serif text-5xl"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink"
              >
                Let&apos;s talk →
              </motion.a>
            </nav>
            <div className="mt-auto px-6 pb-10 text-xs text-mist">
              <LocalTime /> · {site.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
