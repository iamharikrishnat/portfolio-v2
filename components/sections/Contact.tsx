"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site, socials } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot tripped → ignore
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "the web"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-10 md:py-40"
    >
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          ( 03 ) — Contact
        </p>
      </Reveal>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left — headline + email */}
        <div>
          <Reveal>
            <h2
              id="contact-heading"
              className="font-serif text-[13vw] leading-[0.92] tracking-tight md:text-7xl lg:text-8xl"
            >
              Let&apos;s build
              <br />
              <span className="italic text-accent">something</span> great.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${site.email}`}
                  data-cursor="Email"
                  className="inline-flex items-center rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
                >
                  {site.email}
                </a>
              </Magnetic>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col gap-1 bg-ink px-5 py-5 transition-colors hover:bg-ink-soft"
                  >
                    <span className="flex items-center justify-between text-sm font-medium">
                      {s.label}
                      <span className="text-mist transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                        ↗
                      </span>
                    </span>
                    <span className="truncate text-xs text-mist">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-ink-soft p-6 md:p-8"
          >
            {/* Honeypot (hidden from humans + a11y tree) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="sr-only"
            />

            <div className="grid gap-5">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                autoComplete="name"
                required
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                autoComplete="email"
                required
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.2em] text-mist"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none rounded-lg border border-line bg-ink px-4 py-3 text-sm outline-none transition-colors placeholder:text-mist/60 focus:border-accent"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                data-cursor="Send"
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft"
              >
                Send message
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <p className="text-center text-[11px] text-mist">
                Opens your mail app — no data is stored.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.2em] text-mist"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-line bg-ink px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
