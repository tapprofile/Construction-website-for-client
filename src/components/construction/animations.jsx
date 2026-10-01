import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useInView, useMotionValue, animate } from "framer-motion";

/* Word-by-word text reveal scrubbed by scroll position */
function ScrubWord({ progress, range, word, accent, accentClass }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? accentClass : undefined}>
      {word}{" "}
    </motion.span>
  );
}

export function ScrubText({ text, className, accentWords = [], accentClass = "text-[#C9A57B]" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrubWord
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          word={word}
          accent={accentWords.includes(word.replace(/[.,!?—]/g, ""))}
          accentClass={accentClass}
        />
      ))}
    </p>
  );
}

/* Element drifts at a different speed than the page */
export function Parallax({ children, speed = 0.06, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* Cinematic hero exit: scales down, drifts and fades as you scroll away */
export function ScrollZoom({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  return (
    <motion.div ref={ref} style={{ scale, opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

/* Slightly dims at the viewport edges, crisp only when centered */
export function ScrollDim({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const b = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  const filter = useMotionTemplate`brightness(${b})`;
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ filter }} className="h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* Slide-up + fade reveal when entering the viewport */
export function Reveal({ children, delay = 0, className, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Subtle 3D tilt following the mouse cursor */
export function Tilt({ children, className, max = 5 }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 20 });
  const sry = useSpring(ry, { stiffness: 150, damping: 20 });
  return (
    <motion.div
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * max);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * max);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* Number counts up when scrolled into view */
export function Counter({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* Thin progress bar tracking page scroll */
export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#C9A57B] origin-left z-[70] pointer-events-none"
    />
  );
}