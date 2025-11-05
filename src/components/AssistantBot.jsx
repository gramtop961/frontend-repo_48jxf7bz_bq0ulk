import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Minimal assistant avatar that gently follows the cursor
// - Professional, unobtrusive
// - Smooth follow via spring easing
// - Fades and docks to corner when idle
export default function AssistantBot() {
  const size = 56; // px
  const padding = 16; // px from window edges when docked
  const inactivityTimer = useRef(null);

  const [idle, setIdle] = useState(false);

  // raw target coordinates (mouse or dock)
  const targetX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth - padding - size / 2 : 0);
  const targetY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight - padding - size / 2 : 0);

  // Smooth spring that follows target values
  const x = useSpring(targetX, { stiffness: 200, damping: 22, mass: 0.6 });
  const y = useSpring(targetY, { stiffness: 200, damping: 22, mass: 0.6 });

  const dockToCorner = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    targetX.set(w - padding - size / 2);
    targetY.set(h - padding - size / 2);
  };

  useEffect(() => {
    // on mount, dock to corner
    dockToCorner();

    const onMove = (e) => {
      setIdle(false);
      // center the bot on the cursor
      const nx = e.clientX;
      const ny = e.clientY;
      targetX.set(nx);
      targetY.set(ny);

      if (inactivityTimer.current) window.clearTimeout(inactivityTimer.current);
      inactivityTimer.current = window.setTimeout(() => {
        setIdle(true);
        dockToCorner();
      }, 3500); // 3.5s idle time
    };

    const onResize = () => {
      if (idle) dockToCorner();
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      if (inactivityTimer.current) window.clearTimeout(inactivityTimer.current);
    };
  }, [idle]);

  return (
    <motion.div
      className="pointer-events-none fixed z-40"
      style={{ x, y, width: size, height: size, translateX: '-50%', translateY: '-50%' }}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: idle ? 0.55 : 1 }}
      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Bot body */}
      <div className="relative h-full w-full">
        {/* subtle glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/10 via-white/5 to-violet-300/10 blur-md" />

        {/* main shell */}
        <div className="relative h-full w-full rounded-2xl bg-zinc-900/90 backdrop-blur border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          {/* eye/LED */}
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-300 to-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />

          {/* subtle face panel */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/2 to-transparent" />
        </div>

        {/* soft shadow */}
        <div className="absolute -bottom-2 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-black/40 blur-md" />
      </div>
    </motion.div>
  );
}
