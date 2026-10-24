"use client";
import { motion, useReducedMotion } from "motion/react";
import { Github, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  blurb: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  note?: string;
};

// Grayscale placeholders keep the single-accent palette intact until real
// screenshots are dropped in. Seeds describe each project.
const img = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1200/800?grayscale`;

const featured: Project = {
  title: "SmartEnoughCity",
  blurb:
    "Cloud-native urban transport intelligence for the Greater Dublin Area. Four microservices ingest 15+ real-time transport APIs into PostgreSQL/PostGIS and serve ML-driven mobility indicators through a React dashboard. Deployed to GKE via Helm and Terraform, backed by a ~600-test suite with a 75% coverage gate.",
  image: img("smartenoughcity-transit"),
  tech: [
    "Java 17",
    "Spring Boot",
    "Python",
    "FastAPI",
    "scikit-learn",
    "React",
    "PostGIS",
    "Kubernetes",
    "Helm",
    "Terraform",
    "Istio",
  ],
  github: "https://github.com/rakeshlakshmanan/SmartEnoughCity",
};

const projects: Project[] = [
  {
    title: "Distributed Traffic Booking System",
    blurb:
      "A globally distributed road-booking platform enforcing per-segment capacity across Ireland, UK and France. Six services with a Saga orchestrator, Redis distributed locks against double-booking, and a self-healing reconciler on a multi-VM AWS topology.",
    image: img("distributed-booking-roads"),
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "AWS"],
    github: "https://github.com/rakeshlakshmanan/distributed-road-booking",
  },
  {
    title: "DevVault",
    blurb:
      "An AI-powered developer bookmark manager. Every save scrapes the page and calls Gemini 2.5 Flash on an event-driven pipeline that keeps AI latency off the request path. JWT and Google OAuth2 auth, a social layer, deployed end-to-end on GKE.",
    image: img("devvault-bookmarks"),
    tech: ["Java 17", "Spring Boot", "PostgreSQL", "Gemini", "React", "GKE"],
    github: "https://github.com/rakeshlakshmanan/DevVault",
    live: "https://devvault.qd.je",
  },
  {
    title: "EliteCode",
    blurb:
      "Adaptive coding-interview prep built on a Bayesian Knowledge Tracing engine that models mastery per topic and recommends problems in each user's zone of proximal development. Self-hosted Judge0 CE sandboxes execution across six languages at zero per-run cost.",
    image: img("elitecode-editor"),
    tech: ["Python", "FastAPI", "Supabase", "Judge0", "React", "GCP"],
    github: "https://github.com/rakeshlakshmanan/AdaptiveEliteCode",
  },
  {
    title: "Modern Delay-Tolerant Email",
    blurb:
      "MSc dissertation on filtering spam over Delay-Tolerant Networking on deep-space links. A five-node testbed emulating an Earth-Moon link benchmarks SpamAssassin, rspamd and Vipul's Razor against 681 spam messages under a 1.3s delay.",
    image: img("delay-tolerant-space"),
    tech: ["Python", "ION-DTN", "BPMail", "Postfix", "SpamAssassin", "Linux"],
    note: "MSc dissertation, Trinity College Dublin",
  },
];

function TechRow({ tech, max }: { tech: string[]; max?: number }) {
  const shown = max ? tech.slice(0, max) : tech;
  const extra = max ? tech.length - shown.length : 0;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <span
          key={t}
          className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-xs text-zinc-400"
        >
          {t}
        </span>
      ))}
      {extra > 0 && (
        <span className="rounded-md px-2 py-0.5 font-mono text-xs text-zinc-500">
          +{extra}
        </span>
      )}
    </div>
  );
}

function Links({ github, live }: { github?: string; live?: string }) {
  return (
    <div className="flex items-center gap-4">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-emerald-400"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-emerald-400"
        >
          <ArrowUpRight className="h-4 w-4" />
          Live demo
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const reduce = useReducedMotion();
  const reveal = (delay = 0) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="projects" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Distributed systems, cloud-native platforms, and applied research.
        </p>

        {/* Featured project */}
        <motion.article
          {...reveal()}
          className="group mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 lg:grid-cols-2"
        >
          <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
          </div>
          <div className="flex flex-col justify-between gap-6 p-7 lg:p-9">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-50">
                {featured.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {featured.blurb}
              </p>
              <div className="mt-5">
                <TechRow tech={featured.tech} />
              </div>
            </div>
            <Links github={featured.github} live={featured.live} />
          </div>
        </motion.article>

        {/* Remaining projects: 2x2 grid (4 cells) */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              {...reveal(i * 0.06)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-85"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.blurb}
                  </p>
                  <div className="mt-4">
                    <TechRow tech={project.tech} max={6} />
                  </div>
                </div>
                {project.github || project.live ? (
                  <Links github={project.github} live={project.live} />
                ) : (
                  <span className="font-mono text-xs text-zinc-500">
                    {project.note}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
