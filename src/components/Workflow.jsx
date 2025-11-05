import { motion } from 'framer-motion';
import { Wand2, ListChecks, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Wand2,
    title: 'Set intent',
    desc: 'Tell FindBro what you need — role, skills, vibe, constraints. Save as a reusable intent.',
  },
  {
    icon: ListChecks,
    title: 'Align with the team',
    desc: 'Invite collaborators. Adjust criteria together in a playful canvas with real‑time feedback.',
  },
  {
    icon: Sparkles,
    title: 'Get matches + co‑pilot',
    desc: 'Review ranked matches with explainability. Approve, snooze, or refine — the AI learns instantly.',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">A playful flow built for speed</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">
            Designed to feel collaborative and light — without sacrificing rigor. Every action teaches the system.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">Reusable</span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">Explainable</span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-zinc-300">Fast</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
