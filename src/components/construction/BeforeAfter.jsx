import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, useScroll, useMotionValueEvent } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Reveal, ScrubText } from "./animations";

const PAIRS = [
  {
    label: "Kitchen",
    title: "Maple Grove Kitchen",
    before: "/images/a2c355e04_generated_image.png",
    after: "/images/fad0c651c_generated_image.png",
  },
  {
    label: "Bathroom",
    title: "Farmhouse Spa Bath",
    before: "/images/1c67637e1_generated_image.png",
    after: "/images/e8ba37172_generated_image.png",
  },
  {
    label: "Deck",
    title: "Cedar Entertainment Deck",
    before: "/images/95c1e4a36_generated_image.png",
    after: "/images/dd6f8468e_generated_image.png",
  },
];

export default function BeforeAfter() {
  const [idx, setIdx] = useState(0);
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const touched = useRef(false);
  const pos = useMotionValue(92);
  const inset = useMotionTemplate`inset(0 calc(100% - ${pos}%) 0 0)`;
  const left = useMotionTemplate`${pos}%`;
  const pair = PAIRS[idx];

  // Scrolling the page sweeps the divider until the visitor grabs it
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.75", "center 0.45"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!touched.current) pos.set(92 - Math.min(1, Math.max(0, v)) * 42);
  });

  const setFromX = (clientX) => {
    const r = frameRef.current.getBoundingClientRect();
    pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  const onDown = (e) => {
    touched.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromX(e.clientX);
  };
  const onMove = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) setFromX(e.clientX);
  };
  const onKey = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    touched.current = true;
    pos.set(Math.min(100, Math.max(0, pos.get() + (e.key === "ArrowLeft" ? -5 : 5))));
  };
  const choose = (i) => {
    touched.current = true;
    pos.set(50);
    setIdx(i);
  };

  return (
    <section id="transformations" ref={sectionRef} className="py-20 sm:py-32 bg-[#0C0E12]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-6 mb-4">
            <div className="h-px bg-[#C9A57B] w-12" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Transformations</p>
          </div>
        </Reveal>
        <ScrubText
          text="See the difference we make."
          accentWords={["difference"]}
          className="text-3xl sm:text-5xl font-light text-white leading-tight mb-6"
        />
        <p className="text-white/50 max-w-xl mb-10">Scroll to reveal the result, or drag the handle to compare before and after.</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {PAIRS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => choose(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                i === idx ? "bg-[#C9A57B] text-[#14100B] border-[#C9A57B]" : "bg-transparent text-white/70 border-white/20 hover:border-[#C9A57B] hover:text-[#C9A57B]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div
          ref={frameRef}
          role="slider"
          tabIndex={0}
          aria-label={`Before and after comparison of ${pair.title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKey}
          onPointerDown={onDown}
          onPointerMove={onMove}
          style={{ touchAction: "pan-y" }}
          className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 cursor-ew-resize select-none bg-[#11141A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A57B]"
        >
          <Image key={`a-${idx}`} src={pair.after} alt={`${pair.title} after`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
          <motion.div style={{ clipPath: inset }} className="absolute inset-0">
            <Image key={`b-${idx}`} src={pair.before} alt={`${pair.title} before`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
          </motion.div>

          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-bold tracking-widest uppercase">Before</span>
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#C9A57B] text-[#14100B] text-xs font-bold tracking-widest uppercase">After</span>

          <motion.div style={{ left }} className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
              <MoveHorizontal className="w-5 h-5 text-slate-900" />
            </div>
          </motion.div>
        </div>
        <p className="mt-4 text-sm font-medium tracking-wide text-white/70">{pair.title}</p>
      </div>
    </section>
  );
}