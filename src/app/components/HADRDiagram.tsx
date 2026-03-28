"use client";
import { motion } from "motion/react";

export function HADRDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden p-6 mb-24"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-gray-500 font-mono tracking-widest">ARCHITECTURE</p>
          <h3 className="text-white font-mono text-sm mt-0.5">4-Node HA/DR Topology · Zoho Corporation</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          99.95% UPTIME
        </div>
      </div>

      <svg viewBox="0 0 900 380" className="w-full" xmlns="http://www.w3.org/2000/svg">

        {/* DC1 background */}
        <rect x="25" y="30" width="340" height="305" rx="10"
          fill="#0a0f1a" stroke="#164e63" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="195" y="22" textAnchor="middle" fill="#22d3ee"
          fontSize="10" fontFamily="monospace" letterSpacing="3">DC-1 · PRODUCTION</text>

        {/* DC2 background */}
        <rect x="535" y="30" width="340" height="305" rx="10"
          fill="#0f0a1a" stroke="#4c1d95" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="705" y="22" textAnchor="middle" fill="#c084fc"
          fontSize="10" fontFamily="monospace" letterSpacing="3">DC-2 · DISASTER RECOVERY</text>

        {/* ── Connection lines ── */}

        {/* Sync: N1 → N2 (vertical, DC1) */}
        <line x1="195" y1="178" x2="195" y2="238" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <text x="140" y="212" fill="#22d3ee" fontSize="9" fontFamily="monospace" opacity="0.6">SYNC</text>

        {/* Async: N1 → N3 (horizontal, cross-DC) */}
        <line x1="275" y1="138" x2="625" y2="138" stroke="#e879f9" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
        <text x="450" y="128" textAnchor="middle" fill="#e879f9" fontSize="9" fontFamily="monospace" opacity="0.7">ASYNC REPLICATION</text>

        {/* Sync: N3 → N4 (vertical, DC2) */}
        <line x1="705" y1="178" x2="705" y2="238" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <text x="718" y="212" fill="#22d3ee" fontSize="9" fontFamily="monospace" opacity="0.6">SYNC</text>

        {/* ── Animated data flow dots ── */}

        {/* Sync N1→N2 */}
        <circle r="3.5" fill="#22d3ee" opacity="0.9">
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 195 178 L 195 238" />
        </circle>

        {/* Async N1→N3 (two staggered dots) */}
        <circle r="3.5" fill="#e879f9" opacity="0.9">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 275 138 L 625 138" />
        </circle>
        <circle r="3.5" fill="#e879f9" opacity="0.5">
          <animateMotion dur="2.5s" begin="1.25s" repeatCount="indefinite" path="M 275 138 L 625 138" />
        </circle>

        {/* Sync N3→N4 */}
        <circle r="3.5" fill="#22d3ee" opacity="0.9">
          <animateMotion dur="1.8s" repeatCount="indefinite" path="M 705 178 L 705 238" />
        </circle>

        {/* ── NODE 1 — Primary Active ── */}
        <rect x="115" y="98" width="160" height="80" rx="8"
          fill="#0c1a2e" stroke="#22d3ee" strokeWidth="2" />
        {/* Pulsing active dot */}
        <circle cx="136" cy="116" r="5" fill="#22d3ee">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="148" y="120" fill="#22d3ee" fontSize="9" fontFamily="monospace">ACTIVE</text>
        <text x="195" y="148" textAnchor="middle" fill="white"
          fontSize="14" fontFamily="monospace" fontWeight="bold">NODE 1</text>
        <text x="195" y="166" textAnchor="middle" fill="#7dd3fc"
          fontSize="10" fontFamily="monospace">PRIMARY</text>

        {/* ── NODE 2 — Secondary Standby ── */}
        <rect x="115" y="238" width="160" height="80" rx="8"
          fill="#111827" stroke="#374151" strokeWidth="1.5" />
        <circle cx="136" cy="256" r="5" fill="#4b5563" />
        <text x="148" y="260" fill="#6b7280" fontSize="9" fontFamily="monospace">STANDBY</text>
        <text x="195" y="288" textAnchor="middle" fill="white"
          fontSize="14" fontFamily="monospace" fontWeight="bold">NODE 2</text>
        <text x="195" y="306" textAnchor="middle" fill="#9ca3af"
          fontSize="10" fontFamily="monospace">SECONDARY</text>

        {/* ── NODE 3 — DR Primary Standby ── */}
        <rect x="625" y="98" width="160" height="80" rx="8"
          fill="#160c2e" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="5 3" />
        <circle cx="646" cy="116" r="5" fill="#4b5563" />
        <text x="658" y="120" fill="#6b7280" fontSize="9" fontFamily="monospace">STANDBY</text>
        <text x="705" y="148" textAnchor="middle" fill="white"
          fontSize="14" fontFamily="monospace" fontWeight="bold">NODE 3</text>
        <text x="705" y="166" textAnchor="middle" fill="#c4b5fd"
          fontSize="10" fontFamily="monospace">DR PRIMARY</text>

        {/* ── NODE 4 — DR Secondary Standby ── */}
        <rect x="625" y="238" width="160" height="80" rx="8"
          fill="#111827" stroke="#374151" strokeWidth="1.5" />
        <circle cx="646" cy="256" r="5" fill="#4b5563" />
        <text x="658" y="260" fill="#6b7280" fontSize="9" fontFamily="monospace">STANDBY</text>
        <text x="705" y="288" textAnchor="middle" fill="white"
          fontSize="14" fontFamily="monospace" fontWeight="bold">NODE 4</text>
        <text x="705" y="306" textAnchor="middle" fill="#9ca3af"
          fontSize="10" fontFamily="monospace">DR SECONDARY</text>

        {/* ── Failover annotation ── */}
        <text x="450" y="370" textAnchor="middle" fill="#4b5563"
          fontSize="9" fontFamily="monospace" letterSpacing="1">
          AUTO FAILOVER ON PRIMARY FAILURE · RECOVERY TIME REDUCED BY 35%
        </text>

      </svg>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-1 text-xs font-mono text-gray-500">
        <div className="flex items-center gap-2">
          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 3" /></svg>
          <span>SYNC REPLICATION</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#e879f9" strokeWidth="1.5" strokeDasharray="6 4" /></svg>
          <span>ASYNC REPLICATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
          <span>ACTIVE NODE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-600 inline-block" />
          <span>STANDBY NODE</span>
        </div>
      </div>
    </motion.div>
  );
}
