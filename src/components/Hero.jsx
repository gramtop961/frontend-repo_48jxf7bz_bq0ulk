import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-400/20 via-fuchsia-400/10 to-violet-500/20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-amber-300 animate-pulse" />
            AI co-pilot for team building
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            Find the perfect buddy for every role.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-200 to-amber-200">
              Meet FindBro — your matching co‑pilot.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-zinc-300 leading-relaxed max-w-xl"
          >
            Beyond search. Our AI actively evaluates fit across skills, culture, and goals — learning
            from your preferences to make every new match faster and smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-zinc-100 transition"
            >
              Try the Demo
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 pt-3"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
              ))}
            </div>
            <p className="text-xs text-zinc-400">
              Trusted by product teams and founders building fast together
            </p>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
