import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center text-xs font-semibold uppercase tracking-[0.08em]",
  {
    variants: {
      variant: {
        default: "text-[var(--brand-blue)]",
        outline: "rounded-full border border-black/15 px-3 py-1 text-[#000000]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
