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
    "A cloud-native transport platform for the Greater Dublin Area, built as a team project at Trinity. Four services ingest real-time data from 15+ transport APIs (GTFS, GTFS-RT, GBFS, Irish Rail and Luas XML) into PostgreSQL/PostGIS and serve scikit-learn demand forecasts, disruption alerts, and city-planning tools through a React dashboard. It runs on GKE with Helm and Istio, is provisioned with Terraform, exports Micrometer metrics to Prometheus and Grafana with logs in Loki, and has ~600 tests behind a 75% coverage gate. The team built it with Claude Code agents working in parallel, guided by shared CLAUDE.md files and Claude Skills.",
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
    "Keycloak",
    "Claude Code",
  ],
  github: "https://github.com/rakeshlakshmanan/SmartEnoughCity",
};

const projects: Project[] = [
  {
    title: "Distributed Traffic Booking System",
    blurb:
      "A road-booking platform that enforces per-segment road capacity across three regions: Ireland, the UK, and France. Six FastAPI services with a Saga orchestrator coordinate cross-region bookings and compensating transactions. Redis locks per road segment and time slot prevent double-booking, a Dijkstra routing engine finds routes, and a reconciler cleans up orphaned reservations every 120 s. It runs on AWS EC2 and RDS with RabbitMQ consumers and a React and TypeScript front end.",
    image: img("distributed-booking-roads"),
    tech: ["Python 3.12", "FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "React", "TypeScript", "Docker", "AWS"],
    github: "https://github.com/rakeshlakshmanan/distributed-road-booking",
  },
  {
    title: "DevVault",
    blurb:
      "A full-stack bookmark manager that tags and summarises every saved page with AI. On save, the backend scrapes the page through Jina Reader, and an event-driven pipeline of Spring transactional events on a dedicated thread pool sends it to Gemini 2.5 Flash for a summary and 3-5 tags, so the save itself returns instantly. 14 React pages cover bookmarks, collections, tags, favourites, friends, sharing, and a public Explore feed. Built with multiple Claude Code agents working in parallel, guided by CLAUDE.md files and custom Skills, and deployed to GKE through GitHub Actions.",
    image: img("devvault-bookmarks"),
    tech: ["Java 17", "Spring Boot", "Spring Security", "PostgreSQL", "Gemini 2.5 Flash", "Jina Reader", "React", "TypeScript", "Docker", "Kubernetes (GKE)", "GitHub Actions", "Claude Code"],
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
      "MSc dissertation at Trinity College Dublin, supervised by Professor Stephen Farrell (co-author of RFC 5326), on how spam filters behave over delay-tolerant networking (DTN) on Earth-Moon links. Built a five-node virtual machine testbed (Ubuntu 22.04 under UTM) emulating an Earth-Moon link with real mail software: Postfix and Dovecot for delivery, ION-DTN and BPMail for transport, and a local DNS resolver for blocklist lookups. Tested SpamAssassin, rspamd, and Vipul's Razor against 681 spam messages with a 1.3 s delay on the relay, in three scenarios (no delay, delay with default timeouts, delay with timeouts reduced below the round trip), recording per-message verdicts, scan times, and packet captures.",
    image: img("delay-tolerant-space"),
    tech: ["Python", "Bash", "ION-DTN", "BPMail", "Postfix", "Dovecot", "SpamAssassin", "rspamd", "Vipul's Razor", "Unbound DNS", "tcpdump", "netem"],
    github: "https://github.com/rakeshlakshmanan/Modern-delay-tolerant-email",
    note: "MSc dissertation, Trinity College Dublin",
  },
];

const more: { title: string; blurb: string; tech: string[] }[] = [
  {
    title: "Anti-AI CAPTCHA System",
    blurb: "Behavioural analysis to distinguish humans from bots.",
    tech: ["Python", "Flask", "JavaScript"],
  },
  {
    title: "Fall Detection Mobile App",
    blurb: "Accelerometer-based fall detection with SMS alerts.",
    tech: ["Java", "Android", "Twilio"],
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

        {/* More projects */}
        <h3 className="mt-16 text-lg font-semibold text-zinc-100">
          More projects
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {more.map((project, i) => (
            <motion.article
              key={project.title}
              {...reveal(i * 0.06)}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan-500/40"
            >
              <h4 className="font-semibold text-zinc-100">{project.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.blurb}
              </p>
              <div className="mt-4">
                <TechRow tech={project.tech} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
