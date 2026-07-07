import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-xl md:px-16">

          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            <Code2 className="h-4 w-4" />
            Join CodeForU
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
            Ready to Become a{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Better Programmer?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Practice coding, participate in contests, solve real interview
            questions, and track your progress—all from one platform.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="h-12 rounded-xl px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/problems">
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/10 bg-white/5 px-8 backdrop-blur hover:bg-white/10"
              >
                Explore Problems
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}