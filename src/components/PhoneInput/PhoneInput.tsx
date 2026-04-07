import { cn } from "@/lib/utils";
import { AsYouType, type CountryCode } from "libphonenumber-js";
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
  error?: string;
  setValue: (value: { code: string; number: string }) => void;
  value: {
    code: string;
    number: string;
  };
}

const PhoneInput = ({
  error,
  setValue,
  value: { code = "", number = "" },
}: Props) => {
  const iso =
    (countryCodes.find((opt) => opt.code === code)?.iso as CountryCode) || "";
  const flag = countryCodes.find((opt) => opt.code === code)?.flag || "";

  return (
    <div
      className={cn(
        "rounded-lg border border-border-1 h-10 flex",
        error &&
          "border-danger focus-within:ring-danger/50 focus-within:ring-2",
      )}
    >
      <Select
        value={code}
        onValueChange={(value) => setValue({ code: value, number: "" })}
      >
        <SelectTrigger className="rounded-none text-text-1 border-r-px border-r-border-1 w-18">
          <SelectValue>{flag}</SelectValue>
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
        value={number}
        className="border-none outline-none focus-visible:ring-0 focus-visible:border-none"
        placeholder={countryCodes.find((opt) => opt.code === code)?.placeholder}
        type="text"
        onChange={(e) => {
          const f = iso
            ? new AsYouType(iso).input(e.target.value)
            : e.target.value;
          setValue({ code, number: f });
        }}
      />
    </div>
  );
};

export default PhoneInput;
