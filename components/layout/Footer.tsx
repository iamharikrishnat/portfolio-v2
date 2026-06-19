import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-10">
        {/* Oversized wordmark */}
        <p
          aria-hidden
          className="select-none bg-gradient-to-b from-bone/15 to-bone/0 bg-clip-text text-center font-serif text-[20vw] leading-none tracking-tighter text-transparent md:text-[15vw]"
        >
          {site.name}
        </p>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-line py-8 text-sm text-mist md:flex-row">
          <span>
            © {year} {site.name}
          </span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availability}
          </div>
          <a
            href="#top"
            className="transition-colors hover:text-bone"
            aria-label="Back to top"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
