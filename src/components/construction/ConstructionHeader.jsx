import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function LogoMark() {
  return (
    <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C9A57B]/60 bg-[#C9A57B]/10 group-hover:scale-105 transition-transform">
      <span className="text-lg font-bold text-[#C9A57B]">N</span>
    </span>
  );
}
const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function ConstructionHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-[#0C0E12]/90 backdrop-blur-md border-white/10 py-2" : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <LogoMark />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.12em] text-white">
              <span className="text-[#C9A57B]">NEON</span> CONSTRUCTION
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
              Quality. Trust. Craft.
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/70 hover:text-[#C9A57B] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="tel:+15555551234"
            className="flex items-center gap-2 bg-[#C9A57B] hover:bg-[#D9B98F] text-[#14100B] font-semibold px-6 py-3 rounded-md transition-colors active:scale-95"
          >
            <Phone className="w-4 h-4" /> (555) 555-1234
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0C0E12] border-white/10 text-white w-[300px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-12 mt-4">
                <LogoMark />
                <span className="text-base font-semibold tracking-[0.1em]">
                  <span className="text-[#C9A57B]">NEON</span> CONSTRUCTION
                </span>
              </div>
              <nav className="flex flex-col">
                {NAV.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="py-4 border-b border-white/10 text-base font-medium uppercase tracking-[0.2em] text-white/70 hover:text-[#C9A57B] transition-colors"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <a
                  href="tel:+15555551234"
                  className="flex items-center justify-center gap-2 w-full h-14 bg-[#C9A57B] text-[#14100B] font-semibold rounded-md text-base"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}