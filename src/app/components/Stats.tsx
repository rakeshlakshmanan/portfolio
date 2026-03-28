"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

type Stat = {
  value: number;
  decimals?: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
};

const stats: Stat[] = [
  { value: 99.95, decimals: 2, suffix: "%", label: "System Uptime", color: "text-cyan-400" },
  { value: 500, suffix: "+", label: "Production Tickets Resolved", color: "text-fuchsia-400" },
  { value: 60, suffix: "%", label: "Reduction in Manual Testing", color: "text-green-400" },
  { value: 35, suffix: "%", label: "Faster Recovery Time", color: "text-yellow-400" },
  { value: 100, suffix: "+", label: "Nodes in Production", color: "text-cyan-400" },
  { value: 2, suffix: "+ yrs", label: "Production Experience", color: "text-fuchsia-400" },
];

function Counter({ stat, inView }: { stat: Stat; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * stat.value).toFixed(stat.decimals ?? 0)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [inView, stat.value, stat.decimals]);

  const display = stat.decimals ? count.toFixed(stat.decimals) : Math.floor(count);

  return (
    <span className={`text-4xl md:text-5xl font-black font-mono ${stat.color}`}>
      {stat.prefix}{display}{stat.suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-black/40 to-black/40 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <Counter stat={stat} inView={inView} />
              <p className="text-gray-500 text-xs font-mono mt-2 leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
