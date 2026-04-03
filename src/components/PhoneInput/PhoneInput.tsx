import { cn } from "@/lib/utils";
import { Input } from "../shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

interface Props {
  options: { label: string; value: string }[];
  error?: string;
  setValue: (value: string) => void;
  value: string;
}

const PhoneInput = ({ options, error, setValue, value = "" }: Props) => {
  const code = value.split(" ")[0] || "";
  const number = value.split(" ")[1] || "";
  return (
    <div
      className={cn(
        "rounded-lg border border-border-1 h-10 flex",
        error &&
          "border-red-400 focus-within:ring-red-400/50 focus-within:ring-2",
      )}
    >
      <Select
        onValueChange={(value) =>
          setValue(value + (number ? " " + number : ""))
        }
      >
        <SelectTrigger className="rounded-none text-text-1 border-r-px border-r-border-1 w-25">
          <SelectValue placeholder="+51" />
        </SelectTrigger>
        <SelectContent position="popper">
          {options.map((opt) => {
            return (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Input
        className="border-none outline-none focus-visible:ring-0 focus-visible:border-none"
        type="number"
        onChange={(e) => {
          const value = e.target.value;
          setValue(code + " " + value);
        }}
      />
    </div>
  );
};

export default PhoneInput;
