import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Parallax, ScrollDim, Reveal, ScrubText, Tilt } from "./animations";

const PROJECTS = [
  {
    img: "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/fad0c651c_generated_image.png",
    category: "Kitchen Remodel",
    location: "Your City, ST",
    title: "Maple Grove Kitchen",
    description: "Full gut renovation — white shaker cabinetry, quartz waterfall island, and brass fixtures throughout.",
  },
  {
    img: "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/e8ba37172_generated_image.png",
    category: "Bathroom Remodel",
    location: "Your City, ST",
    title: "Farmhouse Spa Bath",
    description: "Freestanding tub, glass walk-in shower, and marble tile with a double oak vanity.",
  },
  {
    img: "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/b83b3772f_generated_image.png",
    category: "Home Addition",
    location: "Your City, ST",
    title: "Two-Story Addition",
    description: "Framing, dry-in, and full finish of a second-story expansion, permitted end to end.",
  },
  {
    img: "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/dd6f8468e_generated_image.png",
    category: "Deck Build",
    location: "Your City, ST",
    title: "Cedar Entertainment Deck",
    description: "Premium cedar deck with cable railing and built-in bench seating.",
  },
  {
    img: "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/f565291fa_generated_image.png",
    category: "Concrete",
    location: "Your City, ST",
    title: "Stamped Driveway",
    description: "Stamped concrete driveway and walkway with crisp forms and broom finish.",
  },
  {
    img: "https://media.base44.com/images/public/6ab97633f4c7819ddcb8bcc5/c35830612_generated_image.png",
    category: "Roofing",
    location: "Your City, ST",
    title: "Architectural Re-Roof",
    description: "Full tear-off and architectural shingle installation with new underlayment.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-[#11141A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-6 mb-4">
              <div className="h-px bg-[#C9A57B] w-12" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Recent Work</p>
            </div>
            <ScrubText
              text="Selected projects, built to last."
              accentWords={["last"]}
              className="text-3xl sm:text-5xl font-light text-white leading-tight"
            />
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A57B] hover:text-[#D9B98F] transition-colors"
          >
            Start yours →
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 0.08}
              className={i === 0 ? "md:col-span-2 lg:row-span-2" : ""}
            >
              <Parallax speed={[0.015, 0.05, 0.09][i % 3]} className="h-full">
                <ScrollDim className="h-full">
                  <Tilt className="h-full" max={4}>
                    <div className={`group relative h-full rounded-2xl overflow-hidden bg-[#0C0E12] border border-white/10 hover:border-[#C9A57B]/40 shadow-xl shadow-black/30 transition-colors ${i === 0 ? "min-h-[320px] lg:min-h-full" : "aspect-[4/3]"}`}>
                      <Image
                        src={p.img}
                        alt={p.title}
                        fittingType="fill"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12]/90 via-[#0C0E12]/25 to-transparent" />

                      <div className="absolute top-5 left-5 z-20">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A57B] bg-[#0C0E12]/70 backdrop-blur border border-[#C9A57B]/40 rounded-full px-3.5 py-1.5">
                          {p.category}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A57B] mb-1">{p.location}</p>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">{p.title}</h3>
                          </div>
                          <div className="w-11 h-11 rounded-full bg-[#C9A57B] text-[#14100B] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shrink-0">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed max-w-md line-clamp-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </Tilt>
                </ScrollDim>
              </Parallax>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}