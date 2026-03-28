import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages & Backend",
      context: "Primary language Java — used across 3 years in production systems",
      color: "cyan",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "Node.js" },
        { name: "C" },
      ],
    },
    {
      category: "Distributed Systems",
      context: "Designed 4-node HA/DR topology achieving 99.95% uptime across 100+ nodes",
      color: "fuchsia",
      skills: [
        { name: "High Availability" },
        { name: "Fault Tolerance" },
        { name: "File Replication" },
        { name: "Failover Automation" },
      ],
    },
    {
      category: "Cloud & DevOps",
      context: "Deployed and managed containerised workloads on AWS and GCP in production",
      color: "green",
      skills: [
        { name: "Kubernetes" },
        { name: "AWS EKS" },
        { name: "GCP GKE" },
        { name: "CI/CD" },
      ],
    },
    {
      category: "Databases",
      context: "Mainly worked on PostgreSQL query optimisation within the Mickey internal framework",
      color: "cyan",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "ClickHouse" },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-500",
        bg: "bg-cyan-500",
        text: "text-cyan-400",
        glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
      },
      fuchsia: {
        border: "border-fuchsia-500",
        bg: "bg-fuchsia-500",
        text: "text-fuchsia-400",
        glow: "shadow-[0_0_20px_rgba(217,70,239,0.3)]",
      },
      green: {
        border: "border-green-500",
        bg: "bg-green-500",
        text: "text-green-400",
        glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-black/60 via-gray-950/60 to-black/60 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-green-400 text-sm tracking-widest mb-4 block">SKILLS.DB</span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies powering reliable, scalable, and distributed systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 ${colorClasses.bg} opacity-0 group-hover:opacity-20 rounded-lg blur transition duration-300`} />
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-2 h-2 ${colorClasses.bg} rounded-full ${colorClasses.glow}`} />
                    <h3 className={`text-xl ${colorClasses.text}`}>
                      {category.category}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-5">{category.context}</p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 text-sm border ${colorClasses.border} ${colorClasses.text} rounded-md bg-black/50`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Also experienced with</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["SQLite", "MSSQL", "Java Servlets", "JSP", "Flask", "React", "Git", "Gradle", "Maven", "TCP/IP", "DNS", "Linux", "OOP", "DSA"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-400 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
