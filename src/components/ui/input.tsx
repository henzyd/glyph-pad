import * as React from "react";
import { cn } from "~/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className="flex items-center gap-4">
        {startAdornment}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-lg border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:ring-purple-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {endAdornment}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
