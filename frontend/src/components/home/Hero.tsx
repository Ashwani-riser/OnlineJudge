import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";

import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6 pt-20">

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

      {/* Extra Glows */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

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
      <FadeIn>
      <div className="relative mx-auto max-w-5xl text-center">



        {/* Badge */}
        
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-300 backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          Welcome to CodeForU
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black leading-none tracking-tight md:text-7xl">
          Become a Better{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            Programmer
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Practice coding, compete in contests, improve your skills,
          and prepare for technical interviews — all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 rounded-xl px-8">
            Start Solving
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-white/10 bg-white/5 px-8 backdrop-blur hover:bg-white/10"
          >
            Explore Contests
          </Button>
        </div>

      </div>
    </FadeIn>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
        <ChevronDown className="h-6 w-6" />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}