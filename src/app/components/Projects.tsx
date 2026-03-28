import { motion } from "motion/react";
import { Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Anti-AI CAPTCHA System",
      description:
        "A video-based CAPTCHA system using behavioral analysis to detect and block automated bot attacks. Simulated and analyzed AI-driven and stealth attack strategies to rigorously evaluate CAPTCHA resilience in real-world adversarial scenarios.",
      image:
        "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MzMzMTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Python", "Flask", "OpenCV", "Selenium", "OCR", "Google Gemini AI", "JavaScript"],
      github: "https://github.com/rakeshlakshmanan",
      accent: "cyan",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging application supporting authentication, individual and group chats, and live message delivery. Integrated AI-based chat summarization to provide concise conversation overviews.",
      image:
        "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29kZSUyMG1hdHJpeHxlbnwxfHx8fDE3NzMzNTYwODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Java Servlets", "JSP", "Node.js", "Socket.IO", "MongoDB", "MySQL"],
      github: "https://github.com/rakeshlakshmanan",
      accent: "fuchsia",
    },
    {
      title: "Fall Detection Mobile App",
      description:
        "A cross-platform mobile application for real-time fall detection using sensor fusion and motion analysis. Implemented cloud-based emergency alerts, location tracking, and alarm triggering for rapid incident response.",
      image:
        "https://images.unsplash.com/photo-1641650265007-b2db704cd9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NzMzMjMwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Flutter", "Dart", "Firebase Realtime DB", "GPS", "SQLite"],
      github: "https://github.com/rakeshlakshmanan",
      accent: "green",
    },
  ];

  const getAccentClasses = (accent: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-500",
        text: "text-cyan-400",
        hover: "hover:border-cyan-500",
        shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      },
      fuchsia: {
        border: "border-fuchsia-500",
        text: "text-fuchsia-400",
        hover: "hover:border-fuchsia-500",
        shadow: "hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
      },
      green: {
        border: "border-green-500",
        text: "text-green-400",
        hover: "hover:border-green-500",
        shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      },
    };
    return colors[accent as keyof typeof colors];
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-fuchsia-400 text-sm tracking-widest mb-4 block">PROJECTS.JSON</span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Featured Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const accentClasses = getAccentClasses(project.accent);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-${project.accent}-500 to-transparent opacity-0 group-hover:opacity-30 rounded-lg blur transition duration-300`} />
                <div className={`relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden ${accentClasses.hover} ${accentClasses.shadow} transition-all duration-300`}>
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-2 h-2 ${accentClasses.border.replace('border-', 'bg-')} rounded-full animate-pulse`} />
                          <span className={`${accentClasses.text} text-sm font-mono`}>
                            STATUS: DEPLOYED
                          </span>
                        </div>
                        
                        <h3 className="text-3xl mb-4">
                          <span className="text-white">{project.title}</span>
                        </h3>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-xs border ${accentClasses.border} ${accentClasses.text} rounded-md bg-black/50`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 border ${accentClasses.border} ${accentClasses.text} rounded-lg hover:bg-white/5 transition-all`}
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
