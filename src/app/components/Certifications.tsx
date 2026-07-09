import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Architecting Scalable Cloud AI Infrastructure",
      issuer: "Coursera",
      url: "https://coursera.org/share/cd1004736237334d0a7b291d3d1da7f9",
      color: "cyan",
    },
    {
      title: "AI Infrastructure and Operations Fundamentals",
      issuer: "NVIDIA",
      url: "https://coursera.org/share/8924bf16a419fd8213b37ff551a9bcd5",
      color: "green",
    },
    {
      title: "AI Professional Certificate",
      issuer: "Google",
      url: "https://coursera.org/share/1c189ea1da34f519398b34a4fafc536a",
      color: "fuchsia",
    },
    {
      title: "Building AI Agents and Agentic Workflows Specialization",
      issuer: "IBM",
      url: "https://coursera.org/share/a9999ac539fbb17e69bd11cccb971f70",
      color: "violet",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-500",
        text: "text-cyan-400",
        hover: "hover:border-cyan-500",
        shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      },
      green: {
        border: "border-green-500",
        text: "text-green-400",
        hover: "hover:border-green-500",
        shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      },
      fuchsia: {
        border: "border-fuchsia-500",
        text: "text-fuchsia-400",
        hover: "hover:border-fuchsia-500",
        shadow: "hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
      },
      violet: {
        border: "border-violet-500",
        text: "text-violet-400",
        hover: "hover:border-violet-500",
        shadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm tracking-widest mb-4 block">CERTIFICATIONS.JSON</span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning across cloud, AI infrastructure, and agentic systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const colorClasses = getColorClasses(cert.color);
            return (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-lg p-6 ${colorClasses.hover} ${colorClasses.shadow} transition-all duration-300`}
              >
                <div className={`shrink-0 p-3 border ${colorClasses.border} rounded-lg bg-black/50`}>
                  <Award className={`w-5 h-5 ${colorClasses.text}`} />
                </div>

                <div className="flex-1">
                  <span className={`${colorClasses.text} text-xs font-mono tracking-widest`}>
                    {cert.issuer.toUpperCase()}
                  </span>
                  <h3 className="text-white text-lg mt-1 mb-3 leading-snug">{cert.title}</h3>
                  <span className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View credential
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
