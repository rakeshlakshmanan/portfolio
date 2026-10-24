"use client";
import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left: copy */}
        <div>
          <motion.div
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-zinc-400">
              Open to software engineering roles
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-zinc-50">Rakesh</span>
            <br />
            <span className="text-gradient">Lakshmanan</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Software engineer building highly available, fault-tolerant
            distributed systems in Java. Backend, platform, and full-stack.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="accent-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-px hover:opacity-90 active:translate-y-0"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={`${import.meta.env.BASE_URL}RakeshLakshmananCV.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition-all hover:-translate-y-px hover:border-zinc-500 hover:text-white active:translate-y-0"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href="https://github.com/rakeshlakshmanan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-3 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-emerald-400"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh-lakshmanan-9653a7217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-3 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-emerald-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: portrait (real image asset) */}
        <motion.div
          {...(reduce
            ? { initial: false as const }
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const },
              })}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <img
              src={`${import.meta.env.BASE_URL}rakesh_profile_pic.PNG`}
              alt="Rakesh Lakshmanan"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="eager"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-xs text-zinc-500">
            <span>Dublin, Ireland</span>
            <span>Stamp 1G</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
