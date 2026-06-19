import { site, skills, stats } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-line bg-ink-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                ( 02 ) — About
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <h2
                id="about-heading"
                className="text-balance font-serif text-3xl leading-[1.15] md:text-5xl"
              >
                I build the kind of interface you don&apos;t notice —{" "}
                <span className="text-mist">
                  because it simply works: fast, accessible, and quietly
                  powerful.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist">
                {site.intro}
              </p>
            </Reveal>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-10">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div>
                    <div className="font-serif text-4xl text-accent md:text-6xl">
                      {s.value}
                    </div>
                    <p className="mt-2 text-xs text-mist md:text-sm">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-16">
              <Reveal>
                <p className="mb-6 text-xs uppercase tracking-[0.25em] text-mist">
                  Toolkit
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
                {skills.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.04}>
                    <div className="group flex h-full items-center justify-between bg-ink-soft px-5 py-5 transition-colors hover:bg-surface">
                      <span className="text-lg font-medium">{s.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-mist transition-colors group-hover:text-accent">
                        {s.level}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
