"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Line = { type: "input" | "output" | "error"; text: string };

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "Available commands:",
    "  whoami       — who is this guy",
    "  experience   — work history",
    "  education    — academic background",
    "  skills       — tech stack",
    "  projects     — featured projects",
    "  contact      — get in touch",
    "  clear        — clear terminal",
  ],
  whoami: () => [
    "Rakesh Lakshmanan",
    "Backend Engineer · 2+ years in production distributed systems",
    "",
    "Spent 2 years at Zoho making sure software kept running at 3am",
    "so nobody had to wake up. Built HA/DR systems, internal frameworks,",
    "and file replication pipelines across 100+ nodes.",
    "",
    "Currently: MSc Computer Science @ Trinity College Dublin",
    "Focus: Future Networked Systems",
  ],
  experience: () => [
    "Zoho Corporation — Chennai, India",
    "─────────────────────────────────────────",
    "▸ Member Technical Staff     06/2023 – 08/2025",
    "  · Architected Mickey, an internal Java platform framework",
    "  · 4-node HA/DR topology → 99.95% uptime",
    "  · Reduced manual failover intervention by 60%",
    "  · FileSync: file error rate 22% → 7%",
    "",
    "▸ Project Trainee             01/2023 – 05/2023",
    "  · Test automation framework → 60% less manual testing",
    "  · Java NIO filesystem provider for HDFS",
    "",
    "▸ Summer Intern               04/2022 – 09/2022",
    "  · SQLite-backed FIFO queue in Java",
    "  · Resolved 500+ production tickets in 6 months",
  ],
  education: () => [
    "▸ MSc Computer Science — Future Networked Systems",
    "  Trinity College Dublin  |  09/2025 – Present",
    "  Grade 1:1 Expected",
    "",
    "▸ BEng Computer Science",
    "  St. Joseph's College of Engineering  |  2019 – 2023",
    "  First Class Honours — 92.3%",
    "  ELGI Scholar (LRG Naidu Educational Trust)",
  ],
  skills: () => [
    "Languages & Backend",
    "  Java · Python · Go · C · SQL",
    "",
    "Distributed Systems",
    "  HA/DR · Failover Automation · Replication · NIO",
    "",
    "Cloud & DevOps",
    "  AWS · Docker · Kubernetes · CI/CD · Linux",
    "",
    "Databases",
    "  PostgreSQL · MySQL · Redis · SQLite · MSSQL",
  ],
  projects: () => [
    "▸ Anti-AI CAPTCHA System",
    "  Behavioural analysis to distinguish humans from bots",
    "  Stack: Python · Flask · JS",
    "",
    "▸ Real-time Chat Application",
    "  WebSocket-based messaging with presence indicators",
    "  Stack: Node.js · Socket.io · Redis",
    "",
    "▸ Fall Detection Mobile App",
    "  Accelerometer-based fall detection with SMS alerts",
    "  Stack: Java · Android · Twilio",
  ],
  contact: () => [
    "Email   → rakeshlakshmanan01@gmail.com",
    "LinkedIn→ linkedin.com/in/rakesh-lakshmanan-9653a7217",
    "GitHub  → github.com/rakeshlakshmanan",
    "Phone   → +353 (089) 2529993",
    "Location→ Dublin, Ireland",
  ],
};

const BOOT_LINES = [
  "Initialising portfolio...",
  "Loading Rakesh Lakshmanan v2.0...",
  "All systems operational.",
  "",
  'Type "help" to see available commands.',
];

export function Terminal() {
  const [history, setHistory] = useState<Line[]>(
    BOOT_LINES.map((t) => ({ type: "output", text: t }))
  );
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const run = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ type: "input", text: cmd }];

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed === "") {
      setHistory((h) => [...h, ...newLines]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      handler().forEach((line) => newLines.push({ type: "output", text: line }));
    } else {
      newLines.push({
        type: "error",
        text: `command not found: ${trimmed}. Try "help".`,
      });
    }

    setHistory((h) => [...h, ...newLines]);
    setCmdHistory((h) => [cmd, ...h]);
    setHistoryIndex(-1);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, cmdHistory.length - 1);
      setHistoryIndex(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    }
  };

  return (
    <div
      className="relative bg-gray-950 border border-gray-700 rounded-lg overflow-hidden font-mono text-sm cursor-text h-full flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700 shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-gray-400 text-xs">rakesh@portfolio:~</span>
      </div>

      {/* Output */}
      <div ref={outputRef} className="flex-1 overflow-y-auto p-4 space-y-0.5 min-h-0">
        {history.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === "input" ? (
              <span>
                <span className="text-cyan-400">rakesh@portfolio</span>
                <span className="text-gray-500">:~$ </span>
                <span className="text-white">{line.text}</span>
              </span>
            ) : line.type === "error" ? (
              <span className="text-red-400">{line.text}</span>
            ) : (
              <span className="text-gray-300 whitespace-pre">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center px-4 py-3 border-t border-gray-800 shrink-0">
        <span className="text-cyan-400 mr-1">rakesh@portfolio</span>
        <span className="text-gray-500 mr-2">:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="flex-1 bg-transparent text-white outline-none caret-cyan-400"
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
