"use client";
import { motion, useReducedMotion } from "motion/react";

const jobs = [
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "06/2023 - 08/2025",
    highlights: [
      "Scaled Mickey, Zoho's internal Java platform framework, to 20+ product teams by architecting reusable components that cut development time and onboarding friction, contributing to ~10% customer growth across adopting teams.",
      "Achieved 99.95% uptime in distributed production environments by designing a four-node High-Availability and Disaster Recovery (HA/DR) topology with configuration-driven scheduling and Robocopy-based replication.",
      "Reduced manual intervention during failovers by ~60% and recovery time by ~35% by automating upgrade workflows and hardening server-to-server file transfer.",
      "Contributed to scalability planning, architecture design, and performance tuning of distributed systems supporting production deployments across 100+ nodes.",
      "Enabled 10 analytics-heavy teams to adopt fast columnar reads by integrating ClickHouse as an optional database backend alongside PostgreSQL/MSSQL.",
      "Designed and developed the Read-Only Server module framework, a reusable solution adopted by 15+ product teams.",
      "Built DBScanner, used by 20+ product teams to compare two databases and produce clear difference reports that streamline migrations.",
      "Built PGMigrate, turning complex manual PostgreSQL version upgrades into a repeatable workflow and cutting upgrade effort by ~30%.",
      "Resolved 200 long-standing defects in the main codebase by partnering with the QA team to reproduce and fix issues through to root cause.",
      "Mentored two summer interns on HA topology design, fault-tolerance patterns, and production deployment practices.",
    ],
  },
  {
    title: "Project Trainee",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "01/2023 - 05/2023",
    highlights: [
      "Reduced manual testing effort by 60% and expanded regression coverage by 40% by architecting a test automation framework for Java Swing applications.",
      "Led development of a Java NIO filesystem provider that unified HDFS data access for 15+ applications, improving team efficiency by 20%.",
      "Cut file-transfer error rates from 22% to 7% by building FileSync, a Java NIO-based file replication utility integrated into the HA module.",
    ],
  },
  {
    title: "Summer Intern",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "04/2022 - 09/2022",
    highlights: [
      "Built a SQLite-backed queue in Java guaranteeing FIFO ordering for task and message processing.",
      "Resolved 500+ production and support tickets over six months and shipped 100+ bug fixes to the test automation platform.",
    ],
  },
];

const education = [
  {
    degree: "MSc Computer Science, Future Networked Systems",
    institution: "Trinity College Dublin",
    period: "09/2025 - 08/2026",
    detail: "Grade 1:1 (Distinction)",
  },
  {
    degree: "BEng Computer Science",
    institution: "St. Joseph's College of Engineering, India",
    period: "06/2019 - 04/2023",
    detail: "Grade 1:1 (92.3%)",
  },
];

const achievements = [
  "Mickey Emerging Programmer (Q4 FY23) at Zoho for high-impact contributions to the internal Java framework.",
  "LRG Naidu Educational Trust Scholarship (ELGI Scholar) for undergraduate academic excellence.",
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
