import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "projects", label: "Projects" },
  { id: "transformations", label: "Transformations" },
  { id: "contact", label: "Contact" },
];

/* Side rail: shows where you are on the page and lets you jump to any section */
export default function SectionRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let current = "top";
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav aria-label="Page sections" className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 items-end">
      {SECTIONS.map(({ id, label }) => {
        const on = active === id;
        return (
          <button key={id} onClick={() => go(id)} aria-label={label} className="group flex items-center gap-3">
            <span className="text-xs font-medium text-white bg-[#0C0E12]/90 border border-white/10 px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
            <span className={`block rounded-full transition-all duration-300 ${on ? "w-3 h-3 bg-[#C9A57B]" : "w-2 h-2 bg-white/30 group-hover:bg-[#C9A57B]"}`} />
          </button>
        );
      })}
    </nav>
  );
}