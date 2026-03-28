import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { HADRDiagram } from "./HADRDiagram";

export function Experience() {
  const jobs = [
    {
      title: "Member Technical Staff",
      company: "Zoho Corporation",
      location: "Chennai, India",
      period: "06/2023 – 08/2025",
      image: "/zoho.jpeg",
      highlights: [
        "Architected and engineered Mickey, an internal Java-based platform framework used by multiple product teams, reducing development time and improving long-term maintainability.",
        "Enhanced failover and recovery mechanisms with automated upgrade workflows, reducing manual intervention during failovers by 60% and recovery time by 35%.",
        "Designed a four-node High-Availability and Disaster Recovery topology using configuration-driven scheduling and Robocopy-based replication, achieving 99.95% uptime.",
        "Built and owned FileSync, a standalone Java NIO–based file replication utility, reducing file transfer error rates from 22% to 7%.",
        "Contributed to distributed system architecture supporting deployments across 100+ nodes through scalability planning and performance optimization.",
      ],
    },
    {
      title: "Project Trainee",
      company: "Zoho Corporation",
      location: "Chennai, India",
      period: "01/2023 – 05/2023",
      image: "/zoho.jpeg",
      highlights: [
        "Architected a test automation framework for Java Swing applications, reducing manual testing effort by 60% and expanding regression coverage by 40%.",
        "Led development of a Java NIO filesystem provider, simplifying HDFS integration for 15+ applications and enhancing team efficiency by 20%.",
      ],
    },
    {
      title: "Summer Intern",
      company: "Zoho Corporation",
      location: "Chennai, India",
      period: "04/2022 – 09/2022",
      image: "/zoho.jpeg",
      highlights: [
        "Built and optimized a SQLite-backed queue mechanism in Java to manage tasks and messages in FIFO order.",
        "Investigated and resolved 500+ production and support tickets over 6 months, improving system stability and reducing recurring defects.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master's in Computer Science – Future Networked Systems",
      institution: "Trinity College Dublin",
      period: "09/2025 – Present",
      detail: "Grade 1:1 Expected",
      image: "/trinity.jpg",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "St. Joseph's College of Engineering, India",
      period: "06/2019 – 04/2023",
      detail: "Final grade 1:1 (92.3%)",
      image: "/st.josephs.jpeg",
    },
  ];

  const achievements = [
    "Awarded Mickey Emerging Programmer (Q4 FY23) for high-impact contributions to the internal framework.",
    "Recipient of LRG Naidu Educational Trust Scholarship (ELGI Scholar) for undergraduate academic excellence.",
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black/60 via-gray-950/60 to-black/60 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-fuchsia-400 text-sm tracking-widest mb-4 block">EXPERIENCE.LOG</span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Work History
            </span>
          </h2>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl text-cyan-400 tracking-widest text-sm">EXPERIENCE</h3>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-10">
            <div className="relative h-48 overflow-hidden">
              <img src={jobs[0].image} alt={jobs[0].company} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-cyan-400 font-mono text-sm">{jobs[0].company} · {jobs[0].location}</p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l border-gray-800 space-y-12">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors">
                  <div className="px-6 pt-5 pb-2 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl text-white">{job.title}</h4>
                      <p className="text-cyan-400 font-mono text-sm">{job.company} · {job.location}</p>
                    </div>
                    <span className="text-gray-400 text-xs font-mono whitespace-nowrap pt-1">{job.period}</span>
                  </div>
                  <ul className="space-y-2 p-6 pt-3">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-cyan-500 mt-1 shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* HA/DR Architecture Diagram */}
        <HADRDiagram />

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-sm text-fuchsia-400 tracking-widest">EDUCATION</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-fuchsia-500/50 transition-colors flex h-44">
                  <div className="w-1/2 shrink-0">
                    <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="w-1/2 p-5 flex flex-col justify-center">
                    <p className="text-white font-medium mb-2 leading-snug">{edu.degree}</p>
                    <p className="text-fuchsia-400 text-sm font-mono mb-3">{edu.institution}</p>
                    <span className="text-gray-500 font-mono text-xs mb-1">{edu.period}</span>
                    <span className="text-green-400 font-mono text-xs">{edu.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-green-400" />
              <h3 className="text-sm text-green-400 tracking-widest">ACHIEVEMENTS</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-lg mt-0.5">★</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{ach}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
