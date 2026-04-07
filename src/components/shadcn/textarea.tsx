import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  error,
  ...props
}: React.ComponentProps<"textarea"> & { error?: string }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full h-full rounded-lg border border-border-1 bg-transparent px-3 py-2 text-base transition-colors outline-none placeholder:text-text-2 focus-visible:border-border-1 focus-visible:ring-3 focus-visible:ring-border-1/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        "resize-none text-text-1 placeholder:text-sm text-sm",
        error &&
          "border-danger focus-visible:border-danger focus-visible:ring-danger/50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
