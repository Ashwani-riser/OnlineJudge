import FadeIn from "@/components/animations/FadeIn";

const stats = [
  {
    value: "500+",
    label: "Problems",
  },
  {
    value: "10K+",
    label: "Submissions",
  },
  {
    value: "1K+",
    label: "Developers",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
];

export default function Stats() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.1}>
            <div
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-indigo-500/40
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]
              "
            >
              <h2 className="text-4xl font-black tracking-tight text-indigo-400 transition-colors duration-300 group-hover:text-violet-300">
                {item.value}
              </h2>

              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}