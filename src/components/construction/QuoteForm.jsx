import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ArrowRight, Lock } from "lucide-react";
import { Reveal, ScrubText } from "./animations";
import FormField, { INPUT_CLASS } from "./contact/FormField";
import SelectInput from "./contact/SelectInput";
import ContactInfo from "./contact/ContactInfo";
import FormSuccess from "./contact/FormSuccess";

const PROJECT_TYPES = [
  "Kitchen Remodeling", "Bathroom Remodeling", "Home Additions", "Concrete Pouring", "Deck Construction",
  "Drywall & Repair", "Exterior Painting", "Flooring Installation", "Tile Installation",
  "Roof Repair & Installation", "Interior Remodeling", "Plumbing Fixtures", "Other",
];
const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+", "Not sure yet"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"];

const EMPTY = { name: "", email: "", phone: "", job_location: "", project_type: "", budget: "", timeline: "", details: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
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
      setError("Something went wrong. Please try again or call us at (555) 555-1234.");
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-[#11141A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(201,165,123,0.07),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-x-20 gap-y-10 lg:gap-y-12">
        {/* Heading */}
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <div className="flex items-center gap-6 mb-5">
            <div className="h-px bg-[#C9A57B] w-12" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A57B]">Get a Quote</p>
          </div>
          <ScrubText
            text="Let's plan your project."
            accentWords={["project"]}
            accentClass="text-[#C9A57B] font-semibold"
            className="text-4xl sm:text-5xl font-light text-white leading-[1.08] tracking-tight mb-5"
          />
          <p className="text-white/55 leading-relaxed max-w-md">
            Share a few details and we'll come back with a clear scope, timeline, and fixed price. Free, with no obligation.
          </p>
        </Reveal>

        {/* Form card */}
        <Reveal delay={0.1} className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
          {status === "success" ? (
            <FormSuccess />
          ) : (
            <form onSubmit={onSubmit} className="bg-[#F7F4EE] rounded-xl p-6 sm:p-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#14100B]">Request a free estimate</h3>
              <p className="text-sm text-[#6B6356] mt-1.5 mb-7">Takes about a minute. We reply within one business day.</p>

              <div className="space-y-4">
                <FormField label="Full name" required>
                  <Input required value={form.name} onChange={set("name")} placeholder="John Smith" className={INPUT_CLASS} />
                </FormField>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Email" required>
                    <Input required type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className={INPUT_CLASS} />
                  </FormField>
                  <FormField label="Phone">
                    <Input type="tel" value={form.phone} onChange={set("phone")} placeholder="(555) 555-1234" className={INPUT_CLASS} />
                  </FormField>
                </div>
                <FormField label="Project location">
                  <Input value={form.job_location} onChange={set("job_location")} placeholder="City or ZIP code" className={INPUT_CLASS} />
                </FormField>
                <FormField label="Type of project" required>
                  <SelectInput required value={form.project_type} onChange={set("project_type")} options={PROJECT_TYPES} />
                </FormField>
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Budget">
                    <SelectInput value={form.budget} onChange={set("budget")} options={BUDGETS} />
                  </FormField>
                  <FormField label="Timeline">
                    <SelectInput value={form.timeline} onChange={set("timeline")} options={TIMELINES} />
                  </FormField>
                </div>
                <FormField label="Project details" required>
                  <Textarea
                    required
                    rows={4}
                    value={form.details}
                    onChange={set("details")}
                    placeholder="Briefly describe what you'd like done."
                    className={`${INPUT_CLASS} h-auto py-3 resize-none`}
                  />
                </FormField>
              </div>

              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-7 flex items-center justify-center gap-2 w-full h-12 rounded-[6px] bg-[#14100B] hover:bg-[#2A2218] disabled:opacity-60 text-white text-[15px] font-semibold transition-colors"
              >
                {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                {status === "loading" ? "Sending..." : "Request free estimate"}
                {status !== "loading" && <ArrowRight className="w-4 h-4 text-[#C9A57B]" />}
              </button>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#8A8275]">
                <Lock className="w-3 h-3" /> Your information is private and never shared.
              </p>
            </form>
          )}
        </Reveal>

        {/* Contact details */}
        <Reveal delay={0.1} className="lg:col-start-1 lg:row-start-2">
          <ContactInfo />
        </Reveal>
      </div>
    </section>
  );
}