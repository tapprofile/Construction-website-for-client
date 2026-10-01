import { Phone, Mail, MapPin, Clock, ArrowUpRight, ArrowUp } from "lucide-react";

const SERVICES = [
  "Kitchen Remodeling", "Bathroom Remodeling", "Home Additions", "Concrete Services",
  "Deck Construction", "Drywall & Repair", "Exterior Painting", "Flooring Installation",
  "Tile Installation", "Roof Repair", "Interior Remodeling", "Plumbing Fixtures",
];

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Transformations", href: "#transformations" },
  { label: "Get a Quote", href: "#contact" },
];

const CONTACT = [
  { icon: Phone, value: "(555) 555-1234", href: "tel:+15555551234" },
  { icon: Mail, value: "info@neonconstruction.com", href: "mailto:info@neonconstruction.com" },
  { icon: MapPin, value: "123 Builder Ave, Your City", href: null },
  { icon: Clock, value: "Mon – Sat · 7 AM – 6 PM", href: null },
];

export default function ConstructionFooter() {
  return (
    <footer className="relative bg-[#080A0D] border-t border-white/[0.06] overflow-hidden">
      {/* CTA band */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A57B] mb-3">Free, no-obligation estimates</p>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Ready to build it <span className="font-semibold text-[#C9A57B]">right?</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C9A57B] hover:bg-[#D9B98F] text-[#14100B] text-sm font-semibold rounded-md transition-colors active:scale-95"
            >
              Get a Free Estimate <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+15555551234"
              className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-[#C9A57B] hover:text-[#C9A57B] text-white text-sm font-semibold rounded-md transition-colors active:scale-95"
            >
              <Phone className="w-4 h-4" /> (555) 555-1234
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xl font-semibold tracking-[0.12em] text-white mb-5">
              <span className="text-[#C9A57B]">NEON</span> CONSTRUCTION CO.
            </p>
            <p className="text-white/50 leading-relaxed max-w-sm mb-8">
              Full-service construction and remodeling — on schedule, on budget, and finished to a
              standard we'd want in our own home.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {CONTACT.map((c) => {
                const inner = (
                  <span className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C9A57B] transition-colors">
                    <c.icon className="w-4 h-4 text-[#C9A57B] shrink-0" />
                    {c.value}
                  </span>
                );
                return c.href ? (
                  <a key={c.value} href={c.href} className="break-words">{inner}</a>
                ) : (
                  <span key={c.value} className="break-words">{inner}</span>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40 font-semibold mb-5">Services</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {SERVICES.map((s) => (
                <a key={s} href="#services" className="text-sm text-white/70 hover:text-[#C9A57B] transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40 font-semibold mb-5">Company</p>
            <nav className="flex flex-col gap-2.5 mb-8">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/70 hover:text-[#C9A57B] transition-colors w-fit">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="border border-white/10 rounded-lg p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A57B] mb-1.5">Credentials</p>
              <p className="text-xs text-white/60 leading-relaxed">GC #B-123456 · Licensed &amp; Bonded<br />5-Year Workmanship Warranty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle brand watermark behind the bottom bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-10 overflow-hidden">
        <p className="pointer-events-none select-none text-center font-semibold tracking-[0.18em] text-[13vw] sm:text-[9rem] leading-none text-white/[0.025] whitespace-nowrap">
          NEON
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 order-2 sm:order-1">
            © {new Date().getFullYear()} NEON Construction Co. All rights reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-[#C9A57B] transition-colors order-1 sm:order-2"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}