import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, ScrubText } from "./animations";

const SERVICES = [
  {
    title: "Kitchen Remodeling",
    desc: "Complete kitchen renovations — from layout reconfiguration to final fixtures.",
    detail: "Custom cabinetry, stone countertops, tile backsplash, under-cabinet lighting, flooring, and appliance integration — managed by one dedicated project lead.",
    tags: ["Cabinetry", "Countertops", "Lighting"],
  },
  {
    title: "Bathroom Remodeling",
    desc: "Full-bath transformations built around craftsmanship and waterproofing.",
    detail: "Custom tile and Schluter waterproofing, walk-in showers, freestanding tubs, floating vanities, heated floors, and modern fixture packages.",
    tags: ["Custom Tile", "Walk-in Showers", "Vanities"],
  },
  {
    title: "Home Additions & ADUs",
    desc: "Room additions and accessory dwelling units, permitted and finished end to end.",
    detail: "Engineering, permits, foundation, framing, MEP rough-in, and complete finish work — delivered on a fixed-price contract with a published schedule.",
    tags: ["Permits", "ADUs", "Full Build"],
  },
  {
    title: "Concrete Services",
    desc: "Driveways, patios, walkways, and reinforced slabs engineered to last.",
    detail: "Proper sub-base compaction, rebar or fiber reinforcement, control joints placed to spec, and a broom or exposed-aggregate finish of your choice.",
    tags: ["Driveways", "Patios", "Slabs"],
  },
  {
    title: "Deck Construction",
    desc: "Custom wood and composite decks designed for outdoor living.",
    detail: "Engineered footings, code-compliant railings, concealed fasteners, and premium composite or cedar board packages with structural warranty.",
    tags: ["Composite", "Cedar", "Railings"],
  },
  {
    title: "Roofing",
    desc: "Leak repairs and full re-roofs installed strictly to manufacturer spec.",
    detail: "Full tear-off, deck inspection, synthetic underlayment, ice-and-water shield, venting corrections, and shingle systems registered for full warranty.",
    tags: ["Re-roofs", "Repairs", "Warranty"],
  },
  {
    title: "Interior Remodeling",
    desc: "Layout changes, trim, doors, and finish carpentry with clean lines.",
    detail: "Load-bearing wall removal with engineering, vaulted ceilings, wainscoting, coffered ceilings, custom stair parts, and door hardware packages.",
    tags: ["Open Concept", "Trim", "Carpentry"],
  },
  {
    title: "Drywall & Repair",
    desc: "Hang, tape, texture, and seamless patch work — ready for paint.",
    detail: "Level-5 smooth finishes, texture matching to existing walls, water-damage restoration, and ceiling repair with zero-visibility patching.",
    tags: ["Level-5 Finish", "Texture Match", "Repairs"],
  },
  {
    title: "Painting",
    desc: "Interior and exterior prep, prime, and premium coatings.",
    detail: "Drywall prep and skim-coating, premium primers, sprayed cabinet refinishing, and exterior elastomeric systems with full surface restoration.",
    tags: ["Interior", "Exterior", "Cabinets"],
  },
  {
    title: "Flooring & Tile",
    desc: "Hardwood, LVP, and tile with clean, straight grout lines.",
    detail: "Subfloor leveling, hardwood sand-and-finish in place, herringbone and large-format tile patterns, and waterproof assembly in wet areas.",
    tags: ["Hardwood", "LVP", "Large-Format Tile"],
  },
  {
    title: "Plumbing Fixtures",
    desc: "Sinks, faucets, tubs, and showers — installed clean and leak-free.",
    detail: "Fixture replacement and re-piping, shut-off and supply upgrades, pressure testing, and disposal of old materials — all under one work order.",
    tags: ["Fixtures", "Re-piping", "Leak-free"],
  },
  {
    title: "Custom Carpentry",
    desc: "Built-ins, shelving, and detail woodwork made to measure.",
    detail: "Site-built bookcases, mantels, window seats, closet systems, and wainscoting — fabricated in-house and finished to furniture grade.",
    tags: ["Built-ins", "Mantels", "Closets"],
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <section id="services" className="relative py-20 sm:py-32 bg-[#11141A] overflow-hidden">
      {/* ambient light */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(201,165,123,0.05),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Sticky intro column */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-6 mb-5">
                <div className="h-px bg-[#C9A57B] w-12" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Our Services</p>
              </div>
              <ScrubText
                text="Full-service remodeling & construction."
                accentWords={["construction"]}
                accentClass="text-[#C9A57B] font-semibold"
                className="text-4xl sm:text-5xl font-light text-white leading-[1.08] tracking-tight mb-6"
              />
              <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
                One licensed, insured team handles your project from first walk-through to final
                walkthrough — no subcontractor roulette, no surprises, no hidden change orders.
              </p>
              <div className="flex flex-col gap-4 py-8 border-y border-white/10 mb-8">
                {[
                  ["Licensed & Insured", "GC #B-123456 · Bonded"],
                  ["Fixed-Price Quotes", "Itemized, in writing, no surprises"],
                  ["Written Warranty", "Workmanship guaranteed for 5 years"],
                ].map(([title, sub]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rotate-45 bg-[#C9A57B] shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-xs text-white/40 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A57B] hover:bg-[#D9B98F] text-[#14100B] text-sm font-bold rounded-lg transition-colors"
              >
                Get a free estimate
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          {/* Service list */}
          <div>
            {SERVICES.map((s, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={s.title} delay={Math.min(i * 0.03, 0.24)} y={20}>
                  <div className="border-t border-white/10 last:border-b">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_auto] gap-x-4 sm:gap-x-6 items-center py-6 text-left"
                    >
                      <span className="text-xs font-semibold text-[#C9A57B] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-light text-white tracking-tight group-hover:text-[#C9A57B] transition-colors">
                          {s.title}
                        </h3>
                        <p className="hidden sm:block text-sm text-white/40 leading-relaxed mt-1">{s.desc}</p>
                      </div>
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#C9A57B] bg-[#C9A57B]/10 rotate-45"
                            : "border-white/15 text-white/50 group-hover:border-[#C9A57B]/50 group-hover:text-[#C9A57B]"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-[3.5rem] sm:pl-[4.5rem] pr-2">
                            <p className="text-white/40 sm:hidden text-sm leading-relaxed mb-4">{s.desc}</p>
                            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-5 max-w-xl">
                              {s.detail}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {s.tags.map((t) => (
                                <span
                                  key={t}
                                  className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C9A57B] border border-[#C9A57B]/30 rounded-full"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}