"use client";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Architecting Scalable Cloud AI Infrastructure",
    issuer: "Coursera",
    url: "https://coursera.org/share/cd1004736237334d0a7b291d3d1da7f9",
  },
  {
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    url: "https://coursera.org/share/8924bf16a419fd8213b37ff551a9bcd5",
  },
  {
    title: "AI Professional Certificate",
    issuer: "Google",
    url: "https://coursera.org/share/1c189ea1da34f519398b34a4fafc536a",
  },
  {
    title: "Building AI Agents and Agentic Workflows",
    issuer: "IBM",
    url: "https://coursera.org/share/a9999ac539fbb17e69bd11cccb971f70",
  },
];

export function Certifications() {
  const reduce = useReducedMotion();

  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32"
    >
      <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
        Certifications
      </h2>
      <p className="mt-3 max-w-2xl text-zinc-400">
        Continuing study across cloud, AI infrastructure, and agentic systems.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            {...(reduce
              ? { initial: false as const }
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: {
                    duration: 0.45,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1] as const,
                  },
                })}
            className="group flex items-start justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                {cert.issuer}
              </span>
              <h3 className="mt-2 font-medium leading-snug text-zinc-100">
                {cert.title}
              </h3>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover:text-emerald-400" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
