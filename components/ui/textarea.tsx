import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full border-0 border-b-2 border-[var(--brand-blue)] bg-transparent px-2 py-2 text-lg text-[#000000] placeholder:text-[#7e8795] focus-visible:outline-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
