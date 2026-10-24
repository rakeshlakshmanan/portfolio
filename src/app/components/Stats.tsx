"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type Stat = {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
};

// All figures are real, sourced from the CV.
const stats: Stat[] = [
  { value: 99.95, decimals: 2, suffix: "%", label: "Production uptime" },
  { value: 100, suffix: "+", label: "Nodes in production" },
  { value: 20, suffix: "+", label: "Teams on the platform" },
  { value: 500, suffix: "+", label: "Tickets resolved" },
  { value: 60, suffix: "%", label: "Less manual failover" },
  { value: 3, suffix: " yrs", label: "Industry experience" },
];

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? stat.value : 0);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setCount(stat.value);
      return;
    }
    if (!run || started.current) return;
    started.current = true;

    const duration = 1400;
    const steps = 48;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * stat.value).toFixed(stat.decimals ?? 0)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [run, reduce, stat.value, stat.decimals]);

  const display = stat.decimals ? count.toFixed(stat.decimals) : Math.floor(count);

  return (
    <span className="text-gradient font-mono text-3xl font-semibold md:text-4xl">
      {display}
      {stat.suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-y border-white/5"
      aria-label="Key metrics"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 px-2 lg:px-6 ${
              i % 3 !== 0 ? "border-l border-zinc-900" : ""
            } lg:border-l lg:first:border-l-0 ${i % 3 === 0 ? "border-l-0" : ""}`}
          >
            <Counter stat={stat} run={inView} />
            <span className="text-xs leading-snug text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
