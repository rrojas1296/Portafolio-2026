import { Input } from "../shadcn/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../shadcn/textarea";
import {
  type Control,
  Controller,
  UseFormRegisterReturn,
} from "react-hook-form";
import PhoneInput from "../PhoneInput/PhoneInput";

interface Props extends UseFormRegisterReturn {
  label: string;
  error?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  control?: any;
  required?: boolean;
}
const Control = ({
  label,
  control,
  name,
  type,
  error,
  className,
  required = false,
  ...props
}: Props) => {
  const generateInput = () => {
    switch (type) {
      case "phone":
        return (
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <PhoneInput
                  setValue={field.onChange}
                  value={field.value}
                  error={error}
                  options={[
                    { label: "+51", value: "+51" },
                    { label: "+52", value: "+52" },
                    { label: "+54", value: "+54" },
                  ]}
                />
              );
            }}
          />
        );
      case "textarea":
        return <Textarea name={name} error={error} {...props} />;
      default:
        return <Input name={name} type={type} error={error} {...props} />;
    }
  };
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className="text-sm text-text-1" htmlFor={name}>
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>
      {generateInput()}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Control;
