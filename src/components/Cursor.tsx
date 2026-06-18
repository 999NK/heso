import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest('a, button, [role="button"]'));
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.classList.remove('custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Ponto central */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white mix-blend-difference" />
      </motion.div>

      {/* Anel */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.9 : 0.5 }}
          transition={{ duration: 0.25 }}
          className="w-8 h-8 rounded-full border border-white mix-blend-difference"
        />
      </motion.div>
    </>
  );
}
