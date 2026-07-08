"use client";

import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";
import type { InputHTMLAttributes } from "react";

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2">
        <div className="relative">
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={`
              w-full rounded-xl border border-border bg-background/60
              px-4 py-3 pr-12
              outline-none
              transition-all
              focus:border-primary
              focus:ring-2
              focus:ring-primary/20
              ${className}
            `}
            {...props}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;