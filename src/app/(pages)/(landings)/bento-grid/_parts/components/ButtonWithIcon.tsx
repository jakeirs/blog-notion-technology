import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props) => {
    return (
      <Button {...props}>
        <span>Read Blog</span>
        <ArrowUpRight className="ml-2 h-5 w-5" />
      </Button>
    );
  },
);
