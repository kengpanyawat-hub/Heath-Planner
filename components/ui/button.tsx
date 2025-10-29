import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";
    const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary: "bg-primary text-white hover:bg-[#274a9a] disabled:opacity-60",
      outline:
        "border border-primary text-primary hover:bg-primary/5 disabled:opacity-60",
      ghost: "text-primary hover:bg-primary/5 disabled:opacity-60",
    };
    return (
      <button ref={ref} className={[base, styles[variant], className].join(" ")} {...props} />
    );
  }
);
Button.displayName = "Button";
