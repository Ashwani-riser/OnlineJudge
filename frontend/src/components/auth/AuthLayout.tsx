import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white/[0.03]" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        {/* Branding */}
        <div className="hidden flex-1 lg:flex lg:flex-col">
          <h1 className="text-5xl font-bold">
            Build.
            <br />
            Compete.
            <br />
            Improve.
          </h1>

          <p className="mt-6 max-w-md text-muted-foreground">
            Practice coding, compete in contests, and level up your programming
            skills with CodeForU.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-1 justify-center">
          {children}
        </div>
      </section>
    </main>
  );
}