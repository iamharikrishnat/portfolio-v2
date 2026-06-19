"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import MaskReveal from "@/components/ui/MaskReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-20 pt-32 md:px-10"
      aria-label="Introduction"
    >
      <div className="bloom pointer-events-none absolute inset-0" aria-hidden />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-7xl"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-mist"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.role} — {site.location}
        </motion.div>

        {/* Display name */}
        <h1 className="font-sans text-[15vw] font-medium leading-[0.86] tracking-[-0.04em] md:text-[11vw] lg:text-[10.5rem]">
          <MaskReveal lines={["Hari"]} delay={0.15} />
          <MaskReveal
            lines={[
              <span key="k" className="font-serif italic text-accent">
                Krishna
              </span>,
            ]}
            delay={0.28}
          />
        </h1>

        {/* Sub + CTA */}
        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-lg leading-relaxed text-mist"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor="View"
                className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-transform"
              >
                View selected work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Contact
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute inset-x-0 bottom-7 mx-auto flex w-fit flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist"
        aria-hidden
      >
        Scroll
        <span className="relative h-9 w-px overflow-hidden bg-line-strong">
          <motion.span
            className="absolute inset-0 bg-accent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
