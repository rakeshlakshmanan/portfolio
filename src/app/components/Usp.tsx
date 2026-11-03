"use client";
import { motion, useReducedMotion } from "motion/react";
import { ServerCog, Gauge, Rocket, ShieldCheck, Bot } from "lucide-react";

const points = [
  {
    icon: ServerCog,
    text: "Consistently improved uptime by building backend features in Java and Spring Boot, including a four-node HA/DR setup that runs at 99.95% uptime.",
  },
  {
    icon: Gauge,
    text: "Able to optimise performance and storage through ClickHouse and read-replica routing, cutting analytic queries from ~2.1 s to ~0.15 s, storage by ~10x, and moving ~80% of query traffic off the primary database.",
  },
  {
    icon: Rocket,
    text: "Experienced in reducing release cycles and raising code quality through CI/CD test automation, cutting release time by 30% and lifting coverage from 52% to 74% with an AI test-writing agent.",
  },
  {
    icon: ShieldCheck,
    text: "Drives migration efficiency and defect resolution, with a schema and data diff tool that cut migration checks by 90%, 200 long-standing defects fixed to root cause, and the Mickey Emerging Programmer award (Q4 FY23).",
  },
  {
    icon: Bot,
    text: "Blends backend engineering with AI agents, building MCP servers and multi-agent workflows that cut mean time to rollback by 45%.",
  },
];

export function Usp() {
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
    <section id="usp" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:pb-32">
      <motion.div {...reveal}>
        <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
          What I bring
        </h2>
        <ul className="mt-8 divide-y divide-zinc-800 border-t border-zinc-800">
          {points.map((p) => (
            <li key={p.text} className="flex items-start gap-4 py-5">
              <span className="mt-0.5 rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-emerald-400">
                <p.icon className="h-5 w-5" />
              </span>
              <p className="text-zinc-400">{p.text}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
