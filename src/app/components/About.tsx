import { motion } from "motion/react";
import { Server, Shield, Cloud } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Server,
      title: "Distributed Systems",
      description: "Designed 4-node HA/DR topologies achieving 99.95% uptime in production environments",
    },
    {
      icon: Shield,
      title: "Fault Tolerance",
      description: "Built failover automation and file replication systems reducing recovery time by 35%",
    },
    {
      icon: Cloud,
      title: "Platform Engineering",
      description: "Architected internal Java platform frameworks used across multiple product teams",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fuchsia-950/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm tracking-widest mb-4 block">ABOUT.EXE</span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Who I Am
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-25" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4 text-green-400">
                  <span className="text-sm font-mono">{'>'}_</span>
                  <span className="w-2 h-4 bg-green-400 animate-pulse" />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">
                  $ whoami
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Backend engineer with 2+ years of experience designing and building high-availability and distributed systems in production environments. Previously at Zoho Corporation, working on reliability-critical systems that improved uptime, recovery time, and operational efficiency.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing a Master's in Computer Science (Future Networked Systems) at Trinity College Dublin, with strong interests in distributed systems, platform engineering, and cloud-native architectures.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />
            <img
              src="/profile_pic.jpg"
              alt="Rakesh Lakshmanan"
              className="relative rounded-lg border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)] w-full object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
