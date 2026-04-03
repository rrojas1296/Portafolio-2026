import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  error,
  ...props
}: React.ComponentProps<"input"> & {
  error?: string;
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-border-2 px-3 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-2 placeholder:text-sm focus-visible:border-border-2 focus-visible:ring-3 focus-visible:ring-border-1/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        "text-text-1 text-sm",
        error &&
          "border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
