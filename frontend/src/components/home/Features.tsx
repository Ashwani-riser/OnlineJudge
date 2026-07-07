import FadeIn from "@/components/animations/FadeIn";
import {
  Trophy,
  Code2,
  Zap,
  ChartColumn,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "500+ Coding Problems",
    description:
      "Sharpen your problem-solving skills with curated questions.",
  },
  {
    icon: Trophy,
    title: "Weekly Contests",
    description:
      "Compete with other programmers and improve your ranking.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Judge",
    description:
      "Instant code execution with accurate verdicts.",
  },
  {
    icon: ChartColumn,
    title: "Track Your Progress",
    description:
      "Monitor submissions, streaks, and overall performance.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Everything You Need
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Practice smarter. Compete harder. Improve faster.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <div
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:border-indigo-500/40
                    hover:bg-white/10
                    hover:shadow-[0_20px_60px_rgba(99,102,241,.18)]
                  "
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-violet-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-xl font-bold transition-colors duration-300 group-hover:text-indigo-300">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}