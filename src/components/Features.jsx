import { motion } from 'framer-motion';
import { Rocket, Users, Brain, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'AI Fit Scoring',
    desc: 'Go beyond keywords. Evaluate role fit across skills, culture, and collaboration style with a transparent score.',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Brain,
    title: 'Memory Layer',
    desc: 'FindBro remembers your decisions and preferences to personalize future recommendations for your team.',
    accent: 'from-fuchsia-500 to-amber-400',
  },
  {
    icon: Users,
    title: 'Collaborative Co‑pilot',
    desc: 'Invite teammates, align on criteria, and let the AI guide the matching workflow end‑to‑end.',
    accent: 'from-sky-400 to-violet-500',
  },
  {
    icon: Shield,
    title: 'Enterprise‑ready',
    desc: 'Privacy‑first design with audit trails and secure controls — built for modern workplace environments.',
    accent: 'from-emerald-400 to-sky-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Designed to feel like magic</h2>
            <p className="text-zinc-400 mt-2">Intuitive, playful, and made for real team workflows.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${f.accent} opacity-20 blur-2xl`} />

              <div className="flex items-center gap-3">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-black shadow-lg shadow-black/20`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{f.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Smart defaults
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Human‑in‑the‑loop
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
