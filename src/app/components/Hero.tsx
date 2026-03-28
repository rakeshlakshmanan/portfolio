import { motion } from "motion/react";
import { Github, Linkedin, Mail, Terminal, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/50 rounded-full bg-cyan-500/10"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm">SYSTEM ONLINE</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl mb-4 font-black tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 animate-gradient">
            RAKESH LAKSHMANAN
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl mb-2">
            <span className="text-green-400">&gt;</span>{" "}
            <span className="text-white">Backend Engineer</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Building high-availability distributed systems & cloud-native architectures
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center items-center flex-wrap"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
              <Mail className="w-5 h-5" />
              GET IN TOUCH
            </span>
          </a>
          
          <a
            href="/RakeshLakshmananCV.pdf"
            download
            className="px-8 py-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-fuchsia-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all flex items-center gap-2 text-gray-300 hover:text-fuchsia-400 font-semibold"
          >
            <Download className="w-5 h-5" />
            DOWNLOAD CV
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/rakeshlakshmanan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakesh-lakshmanan-9653a7217/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <div className="inline-block">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
