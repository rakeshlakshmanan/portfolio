"use client";
import { motion, useReducedMotion } from "motion/react";

const categories = [
  {
    category: "Languages and backend",
    context: "Primary language Java, used across three years in production systems.",
    skills: ["Java", "Python", "TypeScript", "Node.js", "C", "Spring Boot", "FastAPI"],
  },
  {
    category: "Distributed systems",
    context: "Four-node HA/DR topology at 99.95% uptime across 100+ nodes.",
    skills: [
      "High Availability",
      "Fault Tolerance",
      "Replication",
      "Failover Automation",
      "Saga Pattern",
      "Distributed Locking",
      "Reconciliation",
      "Event-driven Architecture",
    ],
  },
  {
    category: "Cloud and DevOps",
    context: "Containerised workloads on AWS and GCP, in production.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS EC2/RDS",
      "GCP GKE",
      "Helm",
      "Terraform",
      "Istio",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
    ],
  },
  {
    category: "Databases and messaging",
    context: "PostgreSQL query optimisation within the Mickey framework.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ClickHouse", "Redis", "RabbitMQ"],
  },
];

const also = [
  "Spring Security",
  "REST APIs",
  "Multithreading and Concurrency",
  "SQLite",
  "MSSQL",
  "Flask",
  "React",
  "Git",
  "Gradle",
  "Maven",
  "TCP/IP",
  "DNS",
  "HTTP",
  "Delay-Tolerant Networking",
  "Linux",
];

export function Skills() {
  const reduce = useReducedMotion();
  const reveal = (delay = 0) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
      <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
        Tech I work with
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.category}
            {...reveal(i * 0.05)}
            className="border-t border-zinc-800 pt-6"
          >
            <h3 className="font-mono text-sm font-medium text-emerald-400">
              {cat.category}
            </h3>
            <p className="mt-1 text-sm text-zinc-500">{cat.context}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...reveal(0.1)} className="mt-14">
        <p className="text-sm text-zinc-500">Also experienced with</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {also.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
