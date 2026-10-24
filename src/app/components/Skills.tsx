"use client";
import { motion, useReducedMotion } from "motion/react";

const categories = [
  {
    category: "AI and agents",
    context: "Built MCP servers and multi-agent workflows at Zoho, and build my own projects with Claude Code agents running in parallel.",
    skills: ["Claude Code", "Claude", "GitHub Copilot", "MCP servers", "Multi-agent workflows", "Tool-calling agents", "AGENTS.md", "CLAUDE.md", "Claude Skills", "Prompt engineering", "Gemini API", "Zia"],
  },
  {
    category: "Languages and backend",
    context: "Primary language Java, used for 3 years in production at Zoho.",
    skills: ["Java (JDK 17)", "TypeScript", "JavaScript", "Python", "SQL", "C", "Node.js"],
  },
  {
    category: "Frameworks and APIs",
    context: "Built full-stack products at Zoho with Spring Boot REST APIs and Angular front ends.",
    skills: ["Spring Boot", "Spring Security", "Angular", "React", "FastAPI", "REST APIs", "OAuth2", "JWT", "Keycloak", "OpenAPI/Swagger", "Spring Boot Actuator"],
  },
  {
    category: "Distributed systems",
    context: "Built features in a four-node HA/DR topology with 99.95% uptime for on-premise customers.",
    skills: ["High availability (HA/DR)", "Fault tolerance", "Automatic failover", "File replication", "Read replicas", "Saga pattern", "Distributed locking", "Reconciliation", "Rate limiting", "Event-driven architecture"],
  },
  {
    category: "Cloud and DevOps",
    context: "Ran Delta's DevOps on Zoho's cloud, and deploy my own projects to GKE and AWS.",
    skills: ["Docker", "Kubernetes", "AWS EC2/RDS", "GCP GKE", "Helm", "Terraform", "Istio", "Jenkins", "GitHub Actions CI/CD", "Prometheus", "Grafana", "Loki"],
  },
  {
    category: "Testing and quality",
    context: "Built Quality Console's test-run and reporting features and an agent that writes JUnit tests.",
    skills: ["JUnit 5", "Mockito", "Testcontainers", "JaCoCo", "SonarQube", "Elasticsearch", "Agile (Scrum)", "Jira", "Code reviews"],
  },
  {
    category: "Databases and messaging",
    context: "Mainly worked on PostgreSQL query optimisation within the Mickey internal framework.",
    skills: ["PostgreSQL (PostGIS)", "MySQL", "MSSQL", "ClickHouse", "MongoDB", "Redis", "RabbitMQ", "SQLite"],
  },
];

const also = [
  "Multithreading and concurrency",
  "Java NIO",
  "Java Servlets",
  "JSP",
  "Flask",
  "Git",
  "GitHub",
  "Gradle",
  "Maven",
  "Ant",
  "TCP/IP",
  "DNS",
  "HTTP",
  "Delay-Tolerant Networking (DTN)",
  "Linux",
  "Operating Systems",
  "OOP",
  "DSA",
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
