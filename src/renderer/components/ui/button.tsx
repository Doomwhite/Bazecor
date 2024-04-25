import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@Renderer/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-200 text-gray-25 hover:bg-red-100",
        outline:
          "tw-outline rounded-md transition-all hover:cursor-pointer hover:bg-gray-400/10 dark:hover:bg-gray-400/40 text-gray-25 font-semibold tracking-tight",
        primary:
          "rounded-md bg-linear bg-[length:300%] transition-all relative transform-style-3d before:absolute before:content-[''] before:w-[62px] before:h-[32px] before:bottom-[2px] before:left-[50%] before:bg-linearButton before:opacity-50 before:blur-[2px] before:transform before:translate-x-[-50%] before:translate-y-[0] before:translate-z-[-1px] before:transition-all before:ease-in-out before:duration-300 hover:cursor-pointer hover:bg-right hover:before:blur-lg hover:before:bottom-[-12px] hover:before:opacity-70 hover:before:w-[100px] aria-disabled:bg-buttonDisabled aria-disabled:text-gray-300 aria-disabled:before:content-none aria-disabled:bg-right aria-disabled:cursor-not-allowed text-gray-25 font-semibold tracking-tight",
        secondary:
          "tw-secondary bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        supportive:
          "flex items-center gap-4 justify-start rounded-md py-4 px-6 border-[1px] border-solid border-gray-100 hover:border-gray-200/50 dark:border-gray-600 dark:hover:border-gray-400 bg-gray-100/25 hover:bg-gray-50/80 dark:bg-gray-600/50 hover:dark:bg-gray-600/80 transition-all text-left min-w-36 [&_p]:text-xs [&_p]:text-gray-300 [&_p]:dark:text-gray-100 [&_.buttonIcon]:basis-8",
      },
      size: {
        default: "px-6 py-[14px] text-base",
        md: "px-6 py-4",
        sm: "rounded-md px-3 py-2.5 text-sm",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      iconDirection: {
        left: "gap-4",
        right: "gap-4 flex-row-reverse",
      },
    },
    compoundVariants: [
      // Applied via:
      //   `button({ intent: "primary", size: "medium" })`
      {
        variant: "supportive",
        size: "md",
        className: "px-6 py-3",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode | null;
  children: React.ReactNode;
  iconDirection?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, iconDirection = "left", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, iconDirection, className }))} ref={ref} {...props}>
        {icon && <div className="buttonIcon flex flex-shrink-0 flex-grow-0 [&_svg]:w-full">{icon}</div>}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
