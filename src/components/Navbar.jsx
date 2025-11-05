import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/20" />
          <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-200 to-amber-200">
            FindBro
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
          <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
        </nav>

        <motion.a
          href="#cta"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-black font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-zinc-100 transition"
        >
          Start Matching
        </motion.a>
      </div>
    </header>
  );
}
