// ══════════════════════════════════════════════
// LYVIES — Button
// Variants : outline | filled | ghost | link | outline-light
// ══════════════════════════════════════════════

"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "outline" | "filled" | "ghost" | "link" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5 text-[10px]",
  md: "px-10 py-4 text-[11px]",
  lg: "px-14 py-5 text-xs",
};

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "border border-or bg-transparent text-cacao hover:bg-or hover:text-noir transition-all duration-500",
  filled:
    "bg-or text-noir hover:bg-or/80 transition-all duration-500",
  ghost:
    "bg-transparent text-charbon/60 hover:text-charbon transition-all duration-500",
  link:
    "bg-transparent text-cacao hover:text-cacao/60 underline underline-offset-4 decoration-cacao/20 hover:decoration-cacao transition-all duration-500 !px-0 !py-0",
  "outline-light":
    "border border-sable/50 bg-transparent text-sable hover:bg-sable hover:text-noir transition-all duration-500",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "outline", size = "md", href, className = "", ...props }, ref) => {
    const classes = `
      relative inline-flex items-center justify-center gap-2
      font-jost font-medium uppercase tracking-[0.2em]
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `;

    const motionProps = {
      whileTap: { scale: 0.97 },
      transition: { duration: 0.2 },
    };

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          {...motionProps}
          {...(props as any)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} className={classes} {...motionProps} {...props}>
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
