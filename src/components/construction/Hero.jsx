import { motion } from "framer-motion";
import { ChevronDown, Phone, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import { ScrollZoom, ScrubText } from "./animations";

const HERO_IMAGE = "/images/3e9318bcf_generated_image.png";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const CHIPS = ["Free Estimates", "20+ Years Experience", "Fixed-Price Quotes"];

export default function Hero() {
  return (
    <ScrollZoom className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Construction crew installing roof trusses at golden hour"
          fittingType="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E12]/75 via-[#0C0E12]/55 to-[#0C0E12]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-28">
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 border border-[#C9A57B]/40 bg-[#0C0E12]/40 backdrop-blur px-4 sm:px-5 py-2 mb-8 rounded-full"
        >
          <ShieldCheck className="w-4 h-4 text-[#C9A57B] shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white">
            Licensed &amp; Insured General Contractor
          </span>
        </motion.div>

        <ScrubText
          text="Quality construction & remodeling, done right."
          accentWords={["right"]}
          accentClass="text-[#C9A57B] font-semibold"
          className="text-4xl sm:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6"
        />

        <motion.p {...fadeUp(0.4)} className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          NEON Construction delivers professional remodeling, renovation, and construction services with quality
          craftsmanship — from first walkthrough to final punch list.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#C9A57B] hover:bg-[#D9B98F] text-[#14100B] font-semibold tracking-wide px-8 py-4 rounded-md transition-colors active:scale-95"
          >
            Request a Free Estimate
          </a>
          <a
            href="tel:+15555551234"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/5 backdrop-blur border border-white/30 hover:border-[#C9A57B] hover:text-[#C9A57B] text-white font-semibold tracking-wide px-8 py-4 rounded-md transition-colors active:scale-95"
          >
            <Phone className="w-4 h-4" /> (555) 555-1234
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12">
          {CHIPS.map((c) => (
            <span key={c} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A57B]" />
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-[#C9A57B] transition-colors z-10"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.a>
    </ScrollZoom>
  );
}