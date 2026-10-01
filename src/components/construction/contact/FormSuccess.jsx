import { CheckCircle2 } from "lucide-react";

export default function FormSuccess() {
  return (
    <div className="bg-[#F7F4EE] rounded-xl p-10 sm:p-14 text-center">
      <CheckCircle2 className="w-14 h-14 text-[#B08A5B] mx-auto mb-5" />
      <h3 className="text-2xl font-semibold text-[#14100B] mb-3">Thank you — message received</h3>
      <p className="text-[#5E564A] leading-relaxed max-w-sm mx-auto">
        One of our team will contact you within one business day.
      </p>
    </div>
  );
}
