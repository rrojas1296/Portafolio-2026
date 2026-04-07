import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { ComponentProps } from "react";

const variants = cva(
  "flex items-center justify-center px-4 gap-3 h-10 w-full rounded-xl cursor-pointer active:translate-y-px outline-none shrink-0 text-sm",
  {
    variants: {
      variant: {
        filled: "bg-primary-500 text-text-3",
        secondary: "bg-black dark:bg-white text-white dark:text-black",
      },
    },
  },
);

export type ButtonVariant = VariantProps<typeof variants>["variant"];

interface Props
  extends ComponentProps<"button">, VariantProps<typeof variants> {}

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
