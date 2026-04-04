import { cn } from "@/lib/utils";
import parsePhoneNumber, {
  AsYouType,
  type CountryCode,
} from "libphonenumber-js";
import { Input } from "../shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";
import { countryCodes } from "@/constants/countryCodes";

interface Props {
  options: { label: string; value: string }[];
  error?: string;
  setValue: (value: string) => void;
  value: string;
}

const PhoneInput = ({ error, setValue, value = "" }: Props) => {
  const code = value.split(" ")[0] || "";
  const iso = (countryCodes.find((opt) => opt.code === code)?.iso ||
    "") as CountryCode;
  const flag = countryCodes.find((opt) => opt.code === code)?.flag || "";
  return (
    <div
      className={cn(
        "rounded-lg border border-border-1 h-10 flex",
        error &&
          "border-red-400 focus-within:ring-red-400/50 focus-within:ring-2",
      )}
    >
      <Select onValueChange={(value) => setValue(value)}>
        <SelectTrigger className="rounded-none text-text-1 border-r-px border-r-border-1 w-18">
          <SelectValue placeholder="+51">{flag}</SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          {countryCodes.map((opt) => {
            return (
              <SelectItem key={opt.code} value={opt.code}>
                <div className="flex justify-between w-40">
                  <span>{opt.label}</span>
                  <span>{opt.flag}</span>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Input
        className="border-none outline-none focus-visible:ring-0 focus-visible:border-none"
        value={value}
        type="tel"
        placeholder={countryCodes.find((opt) => opt.code === code)?.placeholder}
        onChange={(e) => {
          const value = e.target.value;
          const f = new AsYouType(iso).input(value);
          setValue(f);
        }}
      />
    </div>
  );
};

export default PhoneInput;
