import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { ComponentProps } from "react";

const variants = cva(
  "flex items-center justify-center px-4 gap-3 h-10 w-full rounded-xl cursor-pointer active:translate-y-p outline-none shrink-0 text-sm",
  {
    variants: {
      variant: {
        filled: "bg-primary-500 text-text-3",
      },
    },
  },
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button = ({
  className,
  variant = "filled",
  children,
  ...props
}: Props) => {
  return (
    <button className={cn(variants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
