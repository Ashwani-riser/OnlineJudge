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
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
          >
            <h2 className="text-4xl font-black text-indigo-400">
              {item.value}
            </h2>

            <p className="mt-2 text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
