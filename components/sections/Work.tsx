"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const covers = [
  "linear-gradient(135deg,#2a2118,#d8a657)",
  "linear-gradient(135deg,#101418,#5b6b7a)",
  "linear-gradient(135deg,#1c1620,#9a6a8f)",
];

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.5 });
  const y = useSpring(my, { stiffness: 220, damping: 26, mass: 0.5 });
  const wrap = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = wrap.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            ( 01 ) — Selected Work
          </p>
          <h2
            id="work-heading"
            className="max-w-xl font-serif text-4xl leading-tight md:text-6xl"
          >
            Things I&apos;ve designed &amp; built.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm text-mist">
            A selection of full-stack work — from data-dense dashboards to
            high-conversion experiences.
          </p>
        </Reveal>
      </div>

      <div ref={wrap} className="relative" onMouseMove={onMove}>
        {/* Cursor-following preview (desktop) */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              className="pointer-events-none absolute z-20 hidden h-56 w-72 overflow-hidden rounded-xl shadow-2xl md:block"
              style={{ x, y, translateX: "-50%", translateY: "-50%" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="flex h-full w-full flex-col justify-between p-5"
                style={{ background: covers[hovered % covers.length] }}
              >
                <span className="font-mono text-xs text-ink/70">
                  {projects[hovered].index}
                </span>
                <div>
                  <p className="font-serif text-2xl text-ink">
                    {projects[hovered].title}
                  </p>
                  <p className="text-xs text-ink/70">
                    {projects[hovered].type}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="border-t border-line">
          {projects.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 0.06}>
                <a
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    p.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-cursor={p.href.startsWith("http") ? "Visit" : "View"}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 transition-colors md:py-10"
                >
                  <span className="font-mono text-xs text-mist">{p.index}</span>

                  <div className="min-w-0">
                    <h3 className="truncate text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-5xl">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist md:hidden">
                      <span>{p.type}</span>
                      <span aria-hidden>·</span>
                      <span>{p.year}</span>
                    </div>
                    {/* Desktop: description reveals on hover */}
                    <div className="hidden max-w-xl overflow-hidden md:block">
                      <p className="mt-0 max-h-0 text-sm text-mist opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden text-sm text-mist md:inline">
                      {p.type}
                    </span>
                    <span className="hidden text-sm text-mist lg:inline">
                      {p.year}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <p className="mt-6 text-xs text-mist">
            Placeholder projects — real case studies coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
