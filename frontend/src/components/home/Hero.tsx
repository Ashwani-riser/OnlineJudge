import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">

        <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400">
          🚀 Welcome to CodeForU
        </span>

        <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
          Become a Better
          <span className="block text-indigo-500">
            Programmer
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
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