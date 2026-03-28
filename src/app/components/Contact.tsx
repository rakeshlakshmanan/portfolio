import { motion } from "motion/react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_849yr9m";
const EMAILJS_TEMPLATE_ID = "template_wq01l4s";
const EMAILJS_PUBLIC_KEY = "w_nE0Q_jBV-QH2tZG";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // @ts-ignore
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-black/60 via-gray-950/60 to-black/60 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-cyan-400 text-sm tracking-widest mb-4 block">CONTACT.SYS</span>
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-25" />
              <form
                onSubmit={handleSubmit}
                className="relative bg-gray-900 border border-gray-800 rounded-lg p-8"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2 font-mono">
                    {'>'} NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2 font-mono">
                    {'>'} EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2 font-mono">
                    {'>'} MESSAGE
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all resize-none"
                    placeholder="Your Message"
                    required
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 mb-4 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 mb-4 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting engineering challenges, or collaborations in distributed systems and backend engineering. Whether you have a question or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <a
                    href="mailto:rakeshlakshmanan01@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    rakeshlakshmanan01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center border border-fuchsia-500/30">
                  <MapPin className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Location</h4>
                  <p className="text-gray-400">Dublin, Ireland</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 font-mono">
                {'>'} RESPONSE TIME: ~24 HOURS
              </p>
              <p className="text-sm text-gray-500 font-mono mt-2">
                {'>'} AVAILABILITY: OPEN TO OPPORTUNITIES
              </p>
              <p className="text-sm text-gray-500 font-mono mt-2">
                {'>'} PHONE: +353 (089) 2529993
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
