"use client";
import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_849yr9m";
const EMAILJS_TEMPLATE_ID = "template_wq01l4s";
const EMAILJS_PUBLIC_KEY = "w_nE0Q_jBV-QH2tZG";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "rakeshlakshmanan01@gmail.com",
    href: "mailto:rakeshlakshmanan01@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+353 89 252 9993",
    href: "tel:+353892529993",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dublin, Ireland (Stamp 1G)",
  },
];

export function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          name: form.name,
          email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const reveal = reduce
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  const field =
    "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-emerald-500 focus:outline-none";

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-32">
        {/* Left: intro + details */}
        <motion.div {...reveal}>
          <span className="accent-gradient mb-5 block h-1 w-12 rounded-full" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
            Let's work together
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-zinc-400">
            I'm open to backend, distributed systems, and full-stack roles, and
            always happy to talk through an interesting engineering problem.
          </p>

          <ul className="mt-10 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex items-center gap-4">
                <span className="rounded-lg border border-zinc-800 bg-zinc-900 p-2.5 text-emerald-400">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="text-zinc-200 transition-colors hover:text-emerald-400"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-zinc-200">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: form */}
        <motion.form
          {...(reduce
            ? { initial: false as const }
            : {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const },
              })}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-zinc-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-none`}
                placeholder="What would you like to talk about?"
              />
            </div>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle className="h-4 w-4" />
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="accent-gradient inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-px hover:opacity-90 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
