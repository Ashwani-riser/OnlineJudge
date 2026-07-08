import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-background/60 p-8 shadow-2xl backdrop-blur-xl">
      {children}
    </div>
  );
}