export default function FormField({ label, required, children }) {
  return (
    <label className="block">
      <span className="block mb-1.5 text-[13px] font-semibold text-[#2B261F]">
        {label}
        {required && <span className="text-[#B08A5B]"> *</span>}
      </span>
      {children}
    </label>
  );
}

export const INPUT_CLASS =
  "h-11 w-full rounded-[6px] bg-white border border-[#D9D2C5] px-3.5 text-[15px] text-[#14100B] placeholder:text-[#9A9183] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A57B]/40 focus-visible:border-[#C9A57B] transition-colors";