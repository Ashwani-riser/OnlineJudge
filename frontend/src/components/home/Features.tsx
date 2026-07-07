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

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black">
            Everything You Need
          </h2>

          <p className="mt-4 text-zinc-400">
            Practice smarter. Compete harder. Improve faster.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}