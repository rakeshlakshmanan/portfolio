"use client";
import { motion, useReducedMotion } from "motion/react";
import { Network, Layers, Cloud } from "lucide-react";
import { Terminal } from "./Terminal";

const capabilities = [
  {
    icon: Network,
    title: "Distributed systems",
    detail: "HA/DR topologies, replication, and failover automation at 99.95% uptime.",
  },
  {
    icon: Layers,
    title: "Platform engineering",
    detail: "Reusable Java frameworks adopted across 20+ product teams.",
  },
  {
    icon: Cloud,
    title: "Cloud and reliability",
    detail: "Containerised workloads on AWS and GKE with CI/CD and observability.",
  },
];

export function About() {
  const reduce = useReducedMotion();
  const reveal = reduce
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        {/* Left: narrative */}
        <motion.div {...reveal}>
          <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
            Who I am
          </h2>
          <div className="mt-6 space-y-4 text-zinc-400">
            <p>
              I spent roughly three years at Zoho Corporation building the
              infrastructure that keeps software running when nobody is watching.
              I designed a four-node HA/DR topology that held 99.95% uptime,
              hardened failover and file-replication paths, and scaled an internal
              Java platform framework to more than 20 product teams.
            </p>
            <p>
              I recently finished an MSc in Computer Science at Trinity College
              Dublin with a Distinction, specialising in Future Networked Systems.
              I work comfortably across Java and Spring Boot, Python and FastAPI,
              and React and TypeScript.
            </p>
          </div>

          <ul className="mt-8 divide-y divide-zinc-800 border-t border-zinc-800">
            {capabilities.map((cap) => (
              <li key={cap.title} className="flex items-start gap-4 py-4">
                <span className="mt-0.5 rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-emerald-400">
                  <cap.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium text-zinc-100">{cap.title}</h3>
                  <p className="text-sm text-zinc-500">{cap.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: real interactive terminal */}
        <motion.div
          {...(reduce
            ? { initial: false as const }
            : {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const },
              })}
          className="min-h-[420px] lg:h-full"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
