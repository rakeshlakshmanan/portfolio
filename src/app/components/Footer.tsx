import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                RAKESH LAKSHMANAN
              </span>
            </h3>
            <p className="text-gray-500 text-sm font-mono">
              {'>'} Backend Engineer · Dublin, Ireland
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/rakeshlakshmanan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-800 rounded-lg bg-gray-900/50 flex items-center justify-center hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakesh-lakshmanan-9653a7217/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-800 rounded-lg bg-gray-900/50 flex items-center justify-center hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="mailto:rakeshlakshmanan01@gmail.com"
              className="w-10 h-10 border border-gray-800 rounded-lg bg-gray-900/50 flex items-center justify-center hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Rakesh Lakshmanan. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2 font-mono">
            Designed & Built with <span className="text-cyan-400">{'<'}/{'>'}</span> and ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
