"use client";
import { motion, useReducedMotion } from "motion/react";

const jobs = [
  {
    title: "Member Technical Staff (Software Engineer)",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "06/2023 - 08/2025",
    highlights: [
      "Built full-stack upgrade features for Delta, the platform that upgrades all of Zoho's products, with Java, Spring Boot REST APIs, and Angular. Upgrades run with backup, health checks, rollback, and failure alerts, which removed ~60% of the manual work from upgrades and failovers and cut recovery time by ~35%.",
      "Owned DevOps for Delta on Zoho's cloud, running its builds, deployments, and monitoring, with its APIs served through Zoho's API gateway.",
      "Cut mean time to rollback on failed upgrades by 45% across 1,200 upgrade runs by building an MCP server over Delta's Spring Boot REST APIs and a multi-agent workflow (planner, monitor, and rollback agents with human approval). Log triage goes to Claude Haiku and root-cause analysis to a larger model, keeping LLM cost 70% below a single-large-model setup.",
      "Built full-stack test-case and test-run features for Quality Console, Zoho's QA platform, with Java, Spring Boot, and Angular. Suites run through Jenkins CI/CD pipelines in Docker, and test, JaCoCo coverage, and SonarQube results are indexed in Elasticsearch for reporting, which cut release time by 30%.",
      "Raised line coverage on legacy modules from 52% to 74% (JaCoCo) with a coverage-gap agent that runs Claude Code headless in a Docker sandbox to write JUnit tests and opens pull requests only when they pass. Picked the model after testing three on 200 past coverage gaps for pass rate, cost, and latency.",
      "Added AI features to Zoho products by integrating Zia, Zoho's AI platform, through its APIs.",
      "Built core features of Mickey, Zoho's Java data-access framework used by 20+ product teams in place of hand-written SQL, including its query API across PostgreSQL and MSSQL and schema migrations, keeping every change backward compatible for products already on it.",
      "Built Mickey's Read-Only Server module, adopted by 15+ product teams, which routes read queries to read-only replicas and moved ~80% of query traffic off the primary database.",
      "Added ClickHouse as a columnar backend behind Mickey's query API for analytics-heavy products, cutting typical analytic query time from ~2.1 s to ~0.15 s and storage by ~10x.",
      "Built features in Mickey's on-premise HA module, a four-node HA/DR topology across two sites with automatic failover, config-driven scheduling, and Robocopy replication, delivering 99.95% uptime for on-premise customers.",
      "Built DBScanner, a Java tool used by 20+ product teams that compares the schemas and data of two databases over JDBC and reports every difference, cutting the time to find migration differences by 90%.",
      "Investigated and fixed 200 long-standing defects with QA in Agile Scrum sprints, tracing each to root cause, and reviewed teammates' code before it merged.",
      "Mentored two interns on distributed architecture, high availability, and fault tolerance, walking them through our HA/DR topology and how automatic failover works.",
    ],
  },
  {
    title: "Project Trainee",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "01/2023 - 05/2023",
    highlights: [
      "Cut manual testing effort by 60% and expanded regression coverage by 40% by building a test automation framework for Java Swing desktop applications.",
      "Cut file-transfer error rates from 22% to 7% with FileSync, a Java NIO utility that keeps files in sync between primary and backup servers, used in the HA module.",
      "Built a shared Java NIO filesystem provider through the JDK's java.nio.file service-provider interface, replacing per-application HDFS client code so 15+ applications read and write HDFS through the standard file API.",
    ],
  },
  {
    title: "Summer Intern",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "04/2022 - 09/2022",
    highlights: [
      "Investigated and closed 500+ production support tickets and shipped 100+ bug fixes to the test automation platform in six months.",
      "Built a SQLite-backed queue in Java that guarantees FIFO ordering for task and message processing.",
    ],
  },
];

const education = [
  {
    degree: "Master's in Computer Science, Future Networked Systems",
    institution: "Trinity College Dublin",
    period: "09/2025 - 08/2026",
    detail: "1:1, Distinction",
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "St. Joseph's College of Engineering, India",
    period: "06/2019 - 04/2023",
    detail: "1:1, Distinction (CGPA 9.23/10)",
  },
];

const achievements = [
  "Awarded Mickey Emerging Programmer (Q4 FY23) for building reusable components in Zoho's Java data-access framework.",
];

export function Experience() {
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
    <section id="experience" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
          Work history
        </h2>

        {/* Timeline */}
        <div className="mt-14 border-l border-zinc-800 pl-8">
          <div className="space-y-14">
            {jobs.map((job, index) => (
              <motion.div key={index} {...reveal(index * 0.05)} className="relative">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-zinc-950" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {job.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-emerald-400">
                  {job.company}
                  <span className="text-zinc-600"> / {job.location}</span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + achievements */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div {...reveal()}>
            <h3 className="text-lg font-semibold text-zinc-100">Education</h3>
            <div className="mt-5 space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-medium text-zinc-100">{edu.institution}</p>
                    <span className="font-mono text-xs text-zinc-500">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{edu.degree}</p>
                  <p className="mt-2 font-mono text-xs text-emerald-400">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal(0.1)}>
            <h3 className="text-lg font-semibold text-zinc-100">Achievements</h3>
            <ul className="mt-5 divide-y divide-zinc-800 border-t border-zinc-800">
              {achievements.map((ach) => (
                <li key={ach} className="py-4 text-sm leading-relaxed text-zinc-400">
                  {ach}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
