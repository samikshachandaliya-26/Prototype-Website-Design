import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  /** `accent` — filled brand red default (e.g. footer CTA). `ghost` — header / subtle. */
  variant?: "ghost" | "accent";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Contact Us", className, variant = "ghost", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 text-center font-['Satoshi',sans-serif] text-[18px] font-normal leading-[normal] tracking-[-0.45px] backdrop-blur-0 transition-[transform,background-color,border-color,backdrop-filter,color] duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform hover:-translate-y-0.5 hover:border-white hover:bg-[rgba(255,255,255,0.05)] hover:backdrop-blur-[2px] hover:text-white active:translate-y-0 active:scale-[0.99]",
        variant === "ghost" &&
          "border border-transparent bg-transparent text-white",
        variant === "accent" &&
          "border border-[#bc312e] bg-[#bc312e] text-white",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
        <span>{text}</span>
        <ArrowRight strokeWidth={2.3} className="h-4 w-4 -rotate-45" />
      </span>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

