import { Image } from "@/components/ui/image";
import { Parallax, ScrubText, Reveal, Counter } from "./animations";

const ABOUT_IMAGE = "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/80c2427b5_generated_image.png";

const STATS = [
  { value: 20, suffix: "+", label: "Years experience" },
  { value: 250, suffix: "+", label: "Projects completed" },
  { value: 100, suffix: "%", label: "Licensed & insured" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#0C0E12]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <Reveal>
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px bg-[#C9A57B] w-12" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">About Us</p>
            </div>
          </Reveal>
          <ScrubText
            text="Craftsmanship you can see. Service you can count on. From kitchens and bathrooms to full home additions, we build it right."
            accentWords={["Craftsmanship", "Service", "right"]}
            className="text-3xl sm:text-4xl font-light text-white leading-tight"
          />
          <Reveal delay={0.15}>
            <p className="text-white/50 leading-relaxed mt-8 mb-10">
              NEON Construction Co. is a trusted construction and remodeling company specializing in residential
              improvements. We handle kitchens, bathrooms, additions, concrete, decks, and roofing — with the same crew
              from first walkthrough to final punch list.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl sm:text-5xl font-light text-[#C9A57B] mb-2">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-[#C9A57B]/30 rounded-2xl pointer-events-none" />
            <Parallax speed={0.04} className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src={ABOUT_IMAGE}
                alt="Project manager shaking hands with homeowners in front of a remodeled home"
                fittingType="fill"
                className="w-full aspect-[4/3] object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}