import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/rakeshlakshmanan", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rakesh-lakshmanan-9653a7217/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rakeshlakshmanan01@gmail.com", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-zinc-950/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-semibold text-zinc-100">
            rakesh<span className="text-emerald-400">.</span>lakshmanan
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Software Engineer, Dublin, Ireland
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-lg border border-zinc-800 p-2.5 text-zinc-400 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-900">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-zinc-600 sm:px-6">
          {year} Rakesh Lakshmanan. Built with React, Tailwind, and Motion.
        </p>
      </div>
    </footer>
  );
}
