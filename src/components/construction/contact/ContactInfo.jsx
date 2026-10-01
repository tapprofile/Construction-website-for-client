import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ITEMS = [
  { icon: Phone, label: "Phone", value: "(555) 555-1234", href: "tel:+15555551234" },
  { icon: Mail, label: "Email", value: "info@neonconstruction.com", href: "mailto:info@neonconstruction.com" },
  { icon: MapPin, label: "Office", value: "123 Builder Ave, Your City" },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 7 AM – 6 PM" },
];

const STEPS = [
  "We call you within one business day",
  "Free on-site walkthrough and measurements",
  "Itemized fixed-price quote within 48 hours",
];

export default function ContactInfo() {
  return (
    <div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {ITEMS.map(({ icon: Icon, label, value, href }) => {
          const row = (
            <div className="flex items-center gap-4 py-4">
              <Icon className="w-5 h-5 text-[#C9A57B] shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">{label}</p>
                <p className="text-[15px] text-white break-words">{value}</p>
              </div>
            </div>
          );
          return href ? (
            <a key={label} href={href} className="block hover:bg-white/[0.03] transition-colors">{row}</a>
          ) : (
            <div key={label}>{row}</div>
          );
        })}
      </div>

      <p className="mt-10 mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">What happens next</p>
      <ol className="space-y-4">
        {STEPS.map((s, i) => (
          <li key={s} className="flex items-start gap-4">
            <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full border border-[#C9A57B]/50 text-xs font-semibold text-[#C9A57B]">
              {i + 1}
            </span>
            <span className="text-sm text-white/70 leading-relaxed pt-1">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}