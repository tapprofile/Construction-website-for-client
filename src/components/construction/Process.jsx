import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ClipboardList, FileText, HardHat, BadgeCheck } from "lucide-react";
import { ScrubText } from "./animations";

const STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Free Consultation",
    description:
      "We visit your property, walk the project with you, take our own measurements, and listen to exactly what you want built.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Fixed Quote & Permits",
    description:
      "You receive an itemized, fixed-price quote in writing. We pull permits and schedule inspections so everything is code-compliant.",
  },
  {
    num: "03",
    icon: HardHat,
    title: "The Build",
    description:
      "Our licensed, insured crew builds with quality checkpoints at every phase and a clean, safe job site from demolition to finishes.",
  },
  {
    num: "04",
    icon: BadgeCheck,
    title: "Walkthrough & Warranty",
    description:
      "We complete a final walkthrough, close out every punch-list item, and hand over a written workmanship warranty.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length))));
  });
  const Step = STEPS[active];

  return (
    <section id="process" ref={ref} className="relative bg-[#0C0E12]" style={{ height: "500vh" }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(201,165,123,0.06),transparent_55%)]" />

      <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden px-5 sm:px-8 pt-20 pb-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">
          {/* Left: heading + progress */}
          <div>
            <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
              <div className="h-px bg-[#C9A57B] w-10 sm:w-12" />
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Our Process</p>
            </div>
            <ScrubText
              text="How We Work"
              accentWords={["Work"]}
              accentClass="text-[#C9A57B] font-semibold"
              className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight"
            />

            {/* Large step number — desktop only; mobile shows it inside the card */}
            <div className="hidden lg:block mt-14 relative h-[10rem] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={active}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-[10rem] font-light leading-none text-white/[0.06] select-none absolute top-0 left-0"
                >
                  {Step.num}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-5 lg:mt-10">
              {STEPS.map((s, i) => (
                <div key={s.num} className={`h-px flex-1 transition-colors duration-700 ${i <= active ? "bg-[#C9A57B]" : "bg-white/15"}`} />
              ))}
            </div>
            <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
              {active + 1} / {STEPS.length}
            </p>
          </div>

          {/* Right: step card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-12 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A57B]/50 to-transparent" />
                <div className="absolute -top-4 -right-2 text-[6rem] sm:text-[9rem] font-light leading-none text-white/[0.04] select-none pointer-events-none">
                  {Step.num}
                </div>
                <div className="flex items-center gap-4 mb-5 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full border border-[#C9A57B]/40 bg-[#C9A57B]/10 flex items-center justify-center">
                    <Step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#C9A57B]" />
                  </div>
                  <p className="lg:hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Step {Step.num}</p>
                </div>
                <h3 className="text-2xl sm:text-5xl font-semibold text-white tracking-tight mb-3 sm:mb-5 break-words">{Step.title}</h3>
                <p className="text-[15px] sm:text-lg text-white/60 leading-relaxed">{Step.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}