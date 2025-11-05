import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle global background */}
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(124,58,237,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50rem_30rem_at_110%_40%,rgba(244,114,182,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_30rem_at_-10%_90%,rgba(251,191,36,0.08),transparent)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Workflow />

        {/* CTA Section */}
        <section id="cta" className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-400/20 to-amber-300/30 blur-2xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-gradient-to-tr from-amber-300/20 via-fuchsia-400/20 to-violet-500/20 blur-2xl" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Build better teams, faster</h3>
                  <p className="text-zinc-300 mt-2 max-w-xl">
                    Start with a free sandbox. Your preferences are saved so every session gets smarter.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:bg-zinc-100 transition"
                  >
                    Create free account
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Explore features
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} FindBro. Designed for collaboration.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
