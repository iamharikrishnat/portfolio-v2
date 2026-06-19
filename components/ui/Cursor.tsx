"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a precise dot + a lagging ring that grows over interactive
 * targets and shows a label for elements carrying `data-cursor`.
 * Rendered only on fine-pointer (mouse) devices.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      setActive(!!t);
      setLabel(t?.getAttribute("data-cursor") ?? null);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
      />
      <motion.div
        className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 text-[10px] font-medium uppercase tracking-widest text-accent"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: label ? 76 : active ? 46 : 30,
          height: label ? 76 : active ? 46 : 30,
          backgroundColor: label
            ? "rgba(216,166,87,0.12)"
            : "rgba(216,166,87,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        {label}
      </motion.div>
    </div>
  );
}
