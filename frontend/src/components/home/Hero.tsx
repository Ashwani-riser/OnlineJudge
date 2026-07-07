import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center">

        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400">
          🚀 Welcome to CodeForU
        </span>

        <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
          Become a Better
          <span className="block bg-gradient-to-r from-indigo-400 via-violet-500 to-blue-400 bg-clip-text text-transparent">
            Programmer
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Practice coding, compete in contests, improve your skills,
          and prepare for technical interviews — all in one place.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg">
            Start Solving
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button size="lg" variant="outline">
            Explore Contests
          </Button>
        </div>

      </div>
    </section>
  );
}