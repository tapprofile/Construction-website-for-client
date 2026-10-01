import { ChevronDown } from "lucide-react";
import { INPUT_CLASS } from "./FormField";

export default function SelectInput({ value, onChange, options, required, placeholder = "Select" }) {
  return (
    <div className="relative">
      <select
        required={required}
        value={value}
        onChange={onChange}
        className={`${INPUT_CLASS} appearance-none pr-10 cursor-pointer ${value ? "" : "text-[#9A9183]"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[#14100B]">{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7265] pointer-events-none" />
    </div>
  );
}