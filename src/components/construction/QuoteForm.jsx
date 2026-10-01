import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2, ShieldCheck, ChevronDown } from "lucide-react";
import { Reveal, ScrubText } from "./animations";

const PROJECT_TYPES = [
  "Kitchen Remodeling", "Bathroom Remodeling", "Home Additions", "Concrete Pouring", "Deck Construction",
  "Drywall & Repair", "Exterior Painting", "Flooring Installation", "Tile Installation",
  "Roof Repair & Installation", "Interior Remodeling", "Plumbing Fixtures", "Other",
];

const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+", "Not sure yet"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"];

const FIELD_CLASS =
  "w-full h-12 rounded-md bg-white/[0.04] border border-white/10 px-4 text-[15px] text-white placeholder:text-white/30 focus:border-[#C9A57B] focus:ring-2 focus:ring-[#C9A57B]/20 focus:outline-none transition-all";
const SELECT_CLASS = FIELD_CLASS + " appearance-none pr-11 cursor-pointer";
const LABEL_CLASS = "text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Call us", value: "(555) 555-1234", href: "tel:+15555551234" },
  { icon: Mail, label: "Email", value: "info@neonconstruction.com", href: "mailto:info@neonconstruction.com" },
  { icon: MapPin, label: "Office", value: "123 Builder Ave, Your City" },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 7 AM – 6 PM" },
];

const NEXT_STEPS = [
  ["We call within 1 business day", "A dedicated project manager reaches out to discuss your scope."],
  ["Free on-site walkthrough", "We visit, measure, and review options with you — no charge."],
  ["Fixed quote within 48 hours", "Itemized and in writing. Valid for 30 days. No surprises."],
];

const PILLS = ["Licensed & Insured", "Fixed-Price Quotes", "5-Year Workmanship Warranty"];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", job_location: "", project_type: "", budget: "", timeline: "", details: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
            const subject = "Project inquiry — " + form.project_type;
      const body = [
        "Name: " + form.name,
        "Email: " + form.email,
        "Phone: " + (form.phone || "—"),
        "Location: " + (form.job_location || "—"),
        "Project type: " + form.project_type,
        "Budget: " + (form.budget || "—"),
        "Timeline: " + (form.timeline || "—"),
        "",
        "Details:",
        form.details,
      ].join("\n");
      window.location.href = "mailto:info@neonconstruction.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError("Something went wrong — please try again or call us directly.");
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-[#11141A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(201,165,123,0.07),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <Reveal className="mb-10 sm:mb-14">
          <div className="flex items-center gap-6 mb-5">
            <div className="h-px bg-[#C9A57B] w-12" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Get a Quote</p>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <ScrubText
              text="Tell us about your project."
              accentWords={["project"]}
              accentClass="text-[#C9A57B] font-semibold"
              className="text-4xl sm:text-5xl font-light text-white leading-[1.08] tracking-tight"
            />
            <p className="text-white/50 leading-relaxed max-w-md">
              Tell us what you're planning — we'll walk through your scope, timeline, and budget.
              No pressure, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-7">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-white/60"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A57B]" />
                {pill}
              </span>
            ))}
          </div>
        </Reveal>

        {status === "success" ? (
          <Reveal>
            <div className="relative min-h-[420px] flex flex-col items-center justify-center text-center px-8 py-12 rounded-2xl bg-[#0F1218] border border-[#C9A57B]/20 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A57B]/60 to-transparent" />
              <span className="flex items-center justify-center w-20 h-20 rounded-full border border-[#C9A57B]/30 bg-[#C9A57B]/10 mb-6">
                <CheckCircle2 className="w-9 h-9 text-[#C9A57B]" />
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Request received</h3>
              <p className="text-white/50 max-w-sm">
                Thank you — we'll reach out within 1 business day to walk through your scope, timeline, and budget.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            {/* Brass gradient frame */}
            <div className="rounded-2xl p-px bg-gradient-to-b from-[#C9A57B]/40 via-white/[0.08] to-transparent shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)]">
              <div className="rounded-[calc(1rem-1px)] bg-[#0F1218] overflow-hidden grid grid-cols-1 lg:grid-cols-5">

                {/* Form — first on mobile, right on desktop */}
                <form onSubmit={onSubmit} className="lg:order-2 lg:col-span-3 p-7 sm:p-10 flex flex-col gap-5">
                  <div className="mb-1">
                    <h3 className="text-xl font-semibold text-white">Request a free estimate</h3>
                    <p className="text-sm text-white/40 mt-1.5">No obligation — replies within 1 business day.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Full name *</Label>
                      <Input required value={form.name} onChange={set("name")} placeholder="John Smith" className={FIELD_CLASS} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Email *</Label>
                      <Input required type="email" value={form.email} onChange={set("email")} placeholder="john@email.com" className={FIELD_CLASS} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Phone</Label>
                      <Input value={form.phone} onChange={set("phone")} placeholder="(555) 555-1234" className={FIELD_CLASS} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Project location</Label>
                      <Input value={form.job_location} onChange={set("job_location")} placeholder="City or address" className={FIELD_CLASS} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Project type *</Label>
                      <div className="relative">
                        <select required value={form.project_type} onChange={set("project_type")} className={SELECT_CLASS}>
                          <option value="" className="bg-[#0F1218]">Select…</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-[#0F1218]">{t}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Budget</Label>
                      <div className="relative">
                        <select value={form.budget} onChange={set("budget")} className={SELECT_CLASS}>
                          <option value="" className="bg-[#0F1218]">Select…</option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b} className="bg-[#0F1218]">{b}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className={LABEL_CLASS}>Timeline</Label>
                      <div className="relative">
                        <select value={form.timeline} onChange={set("timeline")} className={SELECT_CLASS}>
                          <option value="" className="bg-[#0F1218]">Select…</option>
                          {TIMELINES.map((t) => (
                            <option key={t} value={t} className="bg-[#0F1218]">{t}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className={LABEL_CLASS}>Project details *</Label>
                    <Textarea
                      required
                      rows={4}
                      value={form.details}
                      onChange={set("details")}
                      placeholder="Tell us what you're planning — rooms, rough size, and your ideal timeline…"
                      className="w-full rounded-md bg-white/[0.04] border border-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:border-[#C9A57B] focus:ring-2 focus:ring-[#C9A57B]/20 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {error && <p className="text-sm text-red-400">{error}</p>}

                  <div className="pt-1 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto px-9 py-4 bg-[#C9A57B] hover:bg-[#D9B98F] disabled:opacity-60 text-[#14100B] font-semibold tracking-wide rounded-md transition-colors active:scale-[0.99]"
                    >
                      {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                      {status === "loading" ? "Sending…" : "Send request"}
                    </button>
                    <a
                      href="tel:+15555551234"
                      className="flex items-center justify-center gap-2 px-6 py-4 border border-white/15 hover:border-[#C9A57B] hover:text-[#C9A57B] text-white/80 text-sm font-semibold rounded-md transition-colors"
                    >
                      <Phone className="w-4 h-4" /> (555) 555-1234
                    </a>
                  </div>
                  <p className="text-xs text-white/30">Your details are never shared or sold.</p>
                </form>

                {/* Info panel — left on desktop */}
                <div className="lg:order-1 lg:col-span-2 bg-[#0B0D12] lg:border-r border-b lg:border-b-0 border-white/[0.06] p-7 sm:p-10">
                  <h3 className="text-lg font-semibold text-white mb-7">Talk to us</h3>
                  <div className="flex flex-col gap-5 mb-10">
                    {CONTACT_ITEMS.map((item) => {
                      const inner = (
                        <div className="flex items-center gap-4">
                          <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-[#C9A57B]/10 border border-[#C9A57B]/30">
                            <item.icon className="w-[18px] h-[18px] text-[#C9A57B]" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-0.5">{item.label}</span>
                            <span className="block text-white font-medium break-words">{item.value}</span>
                          </span>
                        </div>
                      );
                      return item.href ? (
                        <a key={item.label} href={item.href} className="hover:opacity-80 transition-opacity">{inner}</a>
                      ) : (
                        <div key={item.label}>{inner}</div>
                      );
                    })}
                  </div>

                  <div className="pt-8 border-t border-white/[0.06]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A57B] mb-6">What happens next</p>
                    <div className="flex flex-col gap-6">
                      {NEXT_STEPS.map(([title, sub], i) => (
                        <div key={title} className="flex items-start gap-4">
                          <span className="text-xs font-bold text-[#C9A57B] tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                          <span>
                            <span className="block text-sm font-semibold text-white">{title}</span>
                            <span className="block text-xs text-white/40 leading-relaxed mt-0.5">{sub}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-3 rounded-md border border-white/[0.08] bg-white/[0.02] px-4 py-3.5">
                    <ShieldCheck className="w-4 h-4 text-[#C9A57B] shrink-0" />
                    <p className="text-xs text-white/50 leading-relaxed">GC #B-123456 · Licensed, bonded &amp; insured</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}