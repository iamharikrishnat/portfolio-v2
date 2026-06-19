import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="bloom relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Error 404
      </p>
      <h1 className="mt-6 font-serif text-[26vw] leading-none tracking-tighter md:text-[12rem]">
        Lost
      </h1>
      <p className="mt-6 max-w-sm text-mist">
        This page drifted off the map. Let&apos;s get you back to something solid.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        Back home
      </Link>
    </main>
  );
}
